/*! For license information please see igzsf.119.093f9121.chunk.js.LICENSE.txt */
export const id = 119;
export const ids = [119];
export const modules = {
  6379: function(tt, et, Vt) {
    var Ot;
    ! function() {
      var qt, Dt = 1e9,
        mt = {
          precision: 20,
          rounding: 4,
          toExpNeg: -7,
          toExpPos: 21,
          LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
        },
        dt = !0,
        jt = "[DecimalError] ",
        Ht = jt + "Invalid argument: ",
        Xt = jt + "Exponent out of range: ",
        Qt = Math.floor,
        lt = Math.pow,
        Et = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        ft = 1e7,
        wt = 9007199254740991,
        yt = Qt(1286742750677284.5),
        Nt = {};

      function Mt(tt, et) {
        var Vt, Ot, qt, Dt, mt, jt, Ht, Xt, Qt = tt.constructor,
          lt = Qt.precision;
        if (!tt.s || !et.s) return et.s || (et = new Qt(tt)), dt ? ct(et, lt) : et;
        if (Ht = tt.d, Xt = et.d, mt = tt.e, qt = et.e, Ht = Ht.slice(), Dt = mt - qt) {
          for (Dt < 0 ? (Ot = Ht, Dt = -Dt, jt = Xt.length) : (Ot = Xt, qt = mt, jt = Ht.length), Dt > (jt = (mt = Math.ceil(lt / 7)) > jt ? mt + 1 : jt + 1) && (Dt = jt, Ot.length = 1), Ot.reverse(); Dt--;) Ot.push(0);
          Ot.reverse()
        }
        for ((jt = Ht.length) - (Dt = Xt.length) < 0 && (Dt = jt, Ot = Xt, Xt = Ht, Ht = Ot), Vt = 0; Dt;) Vt = (Ht[--Dt] = Ht[Dt] + Xt[Dt] + Vt) / ft | 0, Ht[Dt] %= ft;
        for (Vt && (Ht.unshift(Vt), ++qt), jt = Ht.length; 0 == Ht[--jt];) Ht.pop();
        return et.d = Ht, et.e = qt, dt ? ct(et, lt) : et
      }

      function bt(tt, et, Vt) {
        if (tt !== ~~tt || tt < et || tt > Vt) throw Error(Ht + tt)
      }

      function Jt(tt) {
        var et, Vt, Ot, qt = tt.length - 1,
          Dt = "",
          mt = tt[0];
        if (qt > 0) {
          for (Dt += mt, et = 1; et < qt; et++)(Vt = 7 - (Ot = tt[et] + "").length) && (Dt += vt(Vt)), Dt += Ot;
          (Vt = 7 - (Ot = (mt = tt[et]) + "").length) && (Dt += vt(Vt))
        } else if (0 === mt) return "0";
        for (; mt % 10 === 0;) mt /= 10;
        return Dt + mt
      }
      Nt.absoluteValue = Nt.abs = function() {
        var tt = new this.constructor(this);
        return tt.s && (tt.s = 1), tt
      }, Nt.comparedTo = Nt.cmp = function(tt) {
        var et, Vt, Ot, qt, Dt = this;
        if (tt = new Dt.constructor(tt), Dt.s !== tt.s) return Dt.s || -tt.s;
        if (Dt.e !== tt.e) return Dt.e > tt.e ^ Dt.s < 0 ? 1 : -1;
        for (et = 0, Vt = (Ot = Dt.d.length) < (qt = tt.d.length) ? Ot : qt; et < Vt; ++et)
          if (Dt.d[et] !== tt.d[et]) return Dt.d[et] > tt.d[et] ^ Dt.s < 0 ? 1 : -1;
        return Ot === qt ? 0 : Ot > qt ^ Dt.s < 0 ? 1 : -1
      }, Nt.decimalPlaces = Nt.dp = function() {
        var tt = this,
          et = tt.d.length - 1,
          Vt = 7 * (et - tt.e);
        if (et = tt.d[et])
          for (; et % 10 == 0; et /= 10) Vt--;
        return Vt < 0 ? 0 : Vt
      }, Nt.dividedBy = Nt.div = function(tt) {
        return Ct(this, new this.constructor(tt))
      }, Nt.dividedToIntegerBy = Nt.idiv = function(tt) {
        var et = this.constructor;
        return ct(Ct(this, new et(tt), 0, 1), et.precision)
      }, Nt.equals = Nt.eq = function(tt) {
        return !this.cmp(tt)
      }, Nt.exponent = function() {
        return Kt(this)
      }, Nt.greaterThan = Nt.gt = function(tt) {
        return this.cmp(tt) > 0
      }, Nt.greaterThanOrEqualTo = Nt.gte = function(tt) {
        return this.cmp(tt) >= 0
      }, Nt.isInteger = Nt.isint = function() {
        return this.e > this.d.length - 2
      }, Nt.isNegative = Nt.isneg = function() {
        return this.s < 0
      }, Nt.isPositive = Nt.ispos = function() {
        return this.s > 0
      }, Nt.isZero = function() {
        return 0 === this.s
      }, Nt.lessThan = Nt.lt = function(tt) {
        return this.cmp(tt) < 0
      }, Nt.lessThanOrEqualTo = Nt.lte = function(tt) {
        return this.cmp(tt) < 1
      }, Nt.logarithm = Nt.log = function(tt) {
        var et, Vt = this,
          Ot = Vt.constructor,
          Dt = Ot.precision,
          mt = Dt + 5;
        if (void 0 === tt) tt = new Ot(10);
        else if ((tt = new Ot(tt)).s < 1 || tt.eq(qt)) throw Error(jt + "NaN");
        if (Vt.s < 1) throw Error(jt + (Vt.s ? "NaN" : "-Infinity"));
        return Vt.eq(qt) ? new Ot(0) : (dt = !1, et = Ct(Wt(Vt, mt), Wt(tt, mt), mt), dt = !0, ct(et, Dt))
      }, Nt.minus = Nt.sub = function(tt) {
        var et = this;
        return tt = new et.constructor(tt), et.s == tt.s ? Rt(et, tt) : Mt(et, (tt.s = -tt.s, tt))
      }, Nt.modulo = Nt.mod = function(tt) {
        var et, Vt = this,
          Ot = Vt.constructor,
          qt = Ot.precision;
        if (!(tt = new Ot(tt)).s) throw Error(jt + "NaN");
        return Vt.s ? (dt = !1, et = Ct(Vt, tt, 0, 1).times(tt), dt = !0, Vt.minus(et)) : ct(new Ot(Vt), qt)
      }, Nt.naturalExponential = Nt.exp = function() {
        return ut(this)
      }, Nt.naturalLogarithm = Nt.ln = function() {
        return Wt(this)
      }, Nt.negated = Nt.neg = function() {
        var tt = new this.constructor(this);
        return tt.s = -tt.s || 0, tt
      }, Nt.plus = Nt.add = function(tt) {
        var et = this;
        return tt = new et.constructor(tt), et.s == tt.s ? Mt(et, tt) : Rt(et, (tt.s = -tt.s, tt))
      }, Nt.precision = Nt.sd = function(tt) {
        var et, Vt, Ot, qt = this;
        if (void 0 !== tt && tt !== !!tt && 1 !== tt && 0 !== tt) throw Error(Ht + tt);
        if (et = Kt(qt) + 1, Vt = 7 * (Ot = qt.d.length - 1) + 1, Ot = qt.d[Ot]) {
          for (; Ot % 10 == 0; Ot /= 10) Vt--;
          for (Ot = qt.d[0]; Ot >= 10; Ot /= 10) Vt++
        }
        return tt && et > Vt ? et : Vt
      }, Nt.squareRoot = Nt.sqrt = function() {
        var tt, et, Vt, Ot, qt, Dt, mt, Ht = this,
          Xt = Ht.constructor;
        if (Ht.s < 1) {
          if (!Ht.s) return new Xt(0);
          throw Error(jt + "NaN")
        }
        for (tt = Kt(Ht), dt = !1, 0 == (qt = Math.sqrt(+Ht)) || qt == 1 / 0 ? (((et = Jt(Ht.d)).length + tt) % 2 == 0 && (et += "0"), qt = Math.sqrt(et), tt = Qt((tt + 1) / 2) - (tt < 0 || tt % 2), Ot = new Xt(et = qt == 1 / 0 ? "1e" + tt : (et = qt.toExponential()).slice(0, et.indexOf("e") + 1) + tt)) : Ot = new Xt(qt.toString()), qt = mt = (Vt = Xt.precision) + 3;;)
          if (Ot = (Dt = Ot).plus(Ct(Ht, Dt, mt + 2)).times(.5), Jt(Dt.d).slice(0, mt) === (et = Jt(Ot.d)).slice(0, mt)) {
            if (et = et.slice(mt - 3, mt + 1), qt == mt && "4999" == et) {
              if (ct(Dt, Vt + 1, 0), Dt.times(Dt).eq(Ht)) {
                Ot = Dt;
                break
              }
            } else if ("9999" != et) break;
            mt += 4
          } return dt = !0, ct(Ot, Vt)
      }, Nt.times = Nt.mul = function(tt) {
        var et, Vt, Ot, qt, Dt, mt, jt, Ht, Xt, Qt = this,
          lt = Qt.constructor,
          Et = Qt.d,
          wt = (tt = new lt(tt)).d;
        if (!Qt.s || !tt.s) return new lt(0);
        for (tt.s *= Qt.s, Vt = Qt.e + tt.e, (Ht = Et.length) < (Xt = wt.length) && (Dt = Et, Et = wt, wt = Dt, mt = Ht, Ht = Xt, Xt = mt), Dt = [], Ot = mt = Ht + Xt; Ot--;) Dt.push(0);
        for (Ot = Xt; --Ot >= 0;) {
          for (et = 0, qt = Ht + Ot; qt > Ot;) jt = Dt[qt] + wt[Ot] * Et[qt - Ot - 1] + et, Dt[qt--] = jt % ft | 0, et = jt / ft | 0;
          Dt[qt] = (Dt[qt] + et) % ft | 0
        }
        for (; !Dt[--mt];) Dt.pop();
        return et ? ++Vt : Dt.shift(), tt.d = Dt, tt.e = Vt, dt ? ct(tt, lt.precision) : tt
      }, Nt.toDecimalPlaces = Nt.todp = function(tt, et) {
        var Vt = this,
          Ot = Vt.constructor;
        return Vt = new Ot(Vt), void 0 === tt ? Vt : (bt(tt, 0, Dt), void 0 === et ? et = Ot.rounding : bt(et, 0, 8), ct(Vt, tt + Kt(Vt) + 1, et))
      }, Nt.toExponential = function(tt, et) {
        var Vt, Ot = this,
          qt = Ot.constructor;
        return void 0 === tt ? Vt = It(Ot, !0) : (bt(tt, 0, Dt), void 0 === et ? et = qt.rounding : bt(et, 0, 8), Vt = It(Ot = ct(new qt(Ot), tt + 1, et), !0, tt + 1)), Vt
      }, Nt.toFixed = function(tt, et) {
        var Vt, Ot, qt = this,
          mt = qt.constructor;
        return void 0 === tt ? It(qt) : (bt(tt, 0, Dt), void 0 === et ? et = mt.rounding : bt(et, 0, 8), Vt = It((Ot = ct(new mt(qt), tt + Kt(qt) + 1, et)).abs(), !1, tt + Kt(Ot) + 1), qt.isneg() && !qt.isZero() ? "-" + Vt : Vt)
      }, Nt.toInteger = Nt.toint = function() {
        var tt = this,
          et = tt.constructor;
        return ct(new et(tt), Kt(tt) + 1, et.rounding)
      }, Nt.toNumber = function() {
        return +this
      }, Nt.toPower = Nt.pow = function(tt) {
        var et, Vt, Ot, Dt, mt, Ht, Xt = this,
          lt = Xt.constructor,
          Et = +(tt = new lt(tt));
        if (!tt.s) return new lt(qt);
        if (!(Xt = new lt(Xt)).s) {
          if (tt.s < 1) throw Error(jt + "Infinity");
          return Xt
        }
        if (Xt.eq(qt)) return Xt;
        if (Ot = lt.precision, tt.eq(qt)) return ct(Xt, Ot);
        if (Ht = (et = tt.e) >= (Vt = tt.d.length - 1), mt = Xt.s, Ht) {
          if ((Vt = Et < 0 ? -Et : Et) <= wt) {
            for (Dt = new lt(qt), et = Math.ceil(Ot / 7 + 4), dt = !1; Vt % 2 && Pt((Dt = Dt.times(Xt)).d, et), 0 !== (Vt = Qt(Vt / 2));) Pt((Xt = Xt.times(Xt)).d, et);
            return dt = !0, tt.s < 0 ? new lt(qt).div(Dt) : ct(Dt, Ot)
          }
        } else if (mt < 0) throw Error(jt + "NaN");
        return mt = mt < 0 && 1 & tt.d[Math.max(et, Vt)] ? -1 : 1, Xt.s = 1, dt = !1, Dt = tt.times(Wt(Xt, Ot + 12)), dt = !0, (Dt = ut(Dt)).s = mt, Dt
      }, Nt.toPrecision = function(tt, et) {
        var Vt, Ot, qt = this,
          mt = qt.constructor;
        return void 0 === tt ? Ot = It(qt, (Vt = Kt(qt)) <= mt.toExpNeg || Vt >= mt.toExpPos) : (bt(tt, 1, Dt), void 0 === et ? et = mt.rounding : bt(et, 0, 8), Ot = It(qt = ct(new mt(qt), tt, et), tt <= (Vt = Kt(qt)) || Vt <= mt.toExpNeg, tt)), Ot
      }, Nt.toSignificantDigits = Nt.tosd = function(tt, et) {
        var Vt = this.constructor;
        return void 0 === tt ? (tt = Vt.precision, et = Vt.rounding) : (bt(tt, 1, Dt), void 0 === et ? et = Vt.rounding : bt(et, 0, 8)), ct(new Vt(this), tt, et)
      }, Nt.toString = Nt.valueOf = Nt.val = Nt.toJSON = function() {
        var tt = this,
          et = Kt(tt),
          Vt = tt.constructor;
        return It(tt, et <= Vt.toExpNeg || et >= Vt.toExpPos)
      };
      var Ct = function() {
        function tt(tt, et) {
          var Vt, Ot = 0,
            qt = tt.length;
          for (tt = tt.slice(); qt--;) Vt = tt[qt] * et + Ot, tt[qt] = Vt % ft | 0, Ot = Vt / ft | 0;
          return Ot && tt.unshift(Ot), tt
        }

        function et(tt, et, Vt, Ot) {
          var qt, Dt;
          if (Vt != Ot) Dt = Vt > Ot ? 1 : -1;
          else
            for (qt = Dt = 0; qt < Vt; qt++)
              if (tt[qt] != et[qt]) {
                Dt = tt[qt] > et[qt] ? 1 : -1;
                break
              } return Dt
        }

        function Vt(tt, et, Vt) {
          for (var Ot = 0; Vt--;) tt[Vt] -= Ot, Ot = tt[Vt] < et[Vt] ? 1 : 0, tt[Vt] = Ot * ft + tt[Vt] - et[Vt];
          for (; !tt[0] && tt.length > 1;) tt.shift()
        }
        return function(Ot, qt, Dt, mt) {
          var dt, Ht, Xt, Qt, lt, Et, wt, yt, Nt, Mt, bt, Jt, Ct, ut, ht, vt, Wt, St, Rt = Ot.constructor,
            It = Ot.s == qt.s ? 1 : -1,
            Pt = Ot.d,
            Zt = qt.d;
          if (!Ot.s) return new Rt(Ot);
          if (!qt.s) throw Error(jt + "Division by zero");
          for (Ht = Ot.e - qt.e, Wt = Zt.length, ht = Pt.length, yt = (wt = new Rt(It)).d = [], Xt = 0; Zt[Xt] == (Pt[Xt] || 0);) ++Xt;
          if (Zt[Xt] > (Pt[Xt] || 0) && --Ht, (Jt = null == Dt ? Dt = Rt.precision : mt ? Dt + (Kt(Ot) - Kt(qt)) + 1 : Dt) < 0) return new Rt(0);
          if (Jt = Jt / 7 + 2 | 0, Xt = 0, 1 == Wt)
            for (Qt = 0, Zt = Zt[0], Jt++;
              (Xt < ht || Qt) && Jt--; Xt++) Ct = Qt * ft + (Pt[Xt] || 0), yt[Xt] = Ct / Zt | 0, Qt = Ct % Zt | 0;
          else {
            for ((Qt = ft / (Zt[0] + 1) | 0) > 1 && (Zt = tt(Zt, Qt), Pt = tt(Pt, Qt), Wt = Zt.length, ht = Pt.length), ut = Wt, Mt = (Nt = Pt.slice(0, Wt)).length; Mt < Wt;) Nt[Mt++] = 0;
            (St = Zt.slice()).unshift(0), vt = Zt[0], Zt[1] >= ft / 2 && ++vt;
            do {
              Qt = 0, (dt = et(Zt, Nt, Wt, Mt)) < 0 ? (bt = Nt[0], Wt != Mt && (bt = bt * ft + (Nt[1] || 0)), (Qt = bt / vt | 0) > 1 ? (Qt >= ft && (Qt = ft - 1), 1 == (dt = et(lt = tt(Zt, Qt), Nt, Et = lt.length, Mt = Nt.length)) && (Qt--, Vt(lt, Wt < Et ? St : Zt, Et))) : (0 == Qt && (dt = Qt = 1), lt = Zt.slice()), (Et = lt.length) < Mt && lt.unshift(0), Vt(Nt, lt, Mt), -1 == dt && (dt = et(Zt, Nt, Wt, Mt = Nt.length)) < 1 && (Qt++, Vt(Nt, Wt < Mt ? St : Zt, Mt)), Mt = Nt.length) : 0 === dt && (Qt++, Nt = [0]), yt[Xt++] = Qt, dt && Nt[0] ? Nt[Mt++] = Pt[ut] || 0 : (Nt = [Pt[ut]], Mt = 1)
            } while ((ut++ < ht || void 0 !== Nt[0]) && Jt--)
          }
          return yt[0] || yt.shift(), wt.e = Ht, ct(wt, mt ? Dt + Kt(wt) + 1 : Dt)
        }
      }();

      function ut(tt, et) {
        var Vt, Ot, Dt, mt, jt, Ht = 0,
          Qt = 0,
          Et = tt.constructor,
          ft = Et.precision;
        if (Kt(tt) > 16) throw Error(Xt + Kt(tt));
        if (!tt.s) return new Et(qt);
        for (null == et ? (dt = !1, jt = ft) : jt = et, mt = new Et(.03125); tt.abs().gte(.1);) tt = tt.times(mt), Qt += 5;
        for (jt += Math.log(lt(2, Qt)) / Math.LN10 * 2 + 5 | 0, Vt = Ot = Dt = new Et(qt), Et.precision = jt;;) {
          if (Ot = ct(Ot.times(tt), jt), Vt = Vt.times(++Ht), Jt((mt = Dt.plus(Ct(Ot, Vt, jt))).d).slice(0, jt) === Jt(Dt.d).slice(0, jt)) {
            for (; Qt--;) Dt = ct(Dt.times(Dt), jt);
            return Et.precision = ft, null == et ? (dt = !0, ct(Dt, ft)) : Dt
          }
          Dt = mt
        }
      }

      function Kt(tt) {
        for (var et = 7 * tt.e, Vt = tt.d[0]; Vt >= 10; Vt /= 10) et++;
        return et
      }

      function ht(tt, et, Vt) {
        if (et > tt.LN10.sd()) throw dt = !0, Vt && (tt.precision = Vt), Error(jt + "LN10 precision limit exceeded");
        return ct(new tt(tt.LN10), et)
      }

      function vt(tt) {
        for (var et = ""; tt--;) et += "0";
        return et
      }

      function Wt(tt, et) {
        var Vt, Ot, Dt, mt, Ht, Xt, Qt, lt, Et, ft = 1,
          wt = tt,
          yt = wt.d,
          Nt = wt.constructor,
          Mt = Nt.precision;
        if (wt.s < 1) throw Error(jt + (wt.s ? "NaN" : "-Infinity"));
        if (wt.eq(qt)) return new Nt(0);
        if (null == et ? (dt = !1, lt = Mt) : lt = et, wt.eq(10)) return null == et && (dt = !0), ht(Nt, lt);
        if (lt += 10, Nt.precision = lt, Ot = (Vt = Jt(yt)).charAt(0), mt = Kt(wt), !(Math.abs(mt) < 15e14)) return Qt = ht(Nt, lt + 2, Mt).times(mt + ""), wt = Wt(new Nt(Ot + "." + Vt.slice(1)), lt - 10).plus(Qt), Nt.precision = Mt, null == et ? (dt = !0, ct(wt, Mt)) : wt;
        for (; Ot < 7 && 1 != Ot || 1 == Ot && Vt.charAt(1) > 3;) Ot = (Vt = Jt((wt = wt.times(tt)).d)).charAt(0), ft++;
        for (mt = Kt(wt), Ot > 1 ? (wt = new Nt("0." + Vt), mt++) : wt = new Nt(Ot + "." + Vt.slice(1)), Xt = Ht = wt = Ct(wt.minus(qt), wt.plus(qt), lt), Et = ct(wt.times(wt), lt), Dt = 3;;) {
          if (Ht = ct(Ht.times(Et), lt), Jt((Qt = Xt.plus(Ct(Ht, new Nt(Dt), lt))).d).slice(0, lt) === Jt(Xt.d).slice(0, lt)) return Xt = Xt.times(2), 0 !== mt && (Xt = Xt.plus(ht(Nt, lt + 2, Mt).times(mt + ""))), Xt = Ct(Xt, new Nt(ft), lt), Nt.precision = Mt, null == et ? (dt = !0, ct(Xt, Mt)) : Xt;
          Xt = Qt, Dt += 2
        }
      }

      function St(tt, et) {
        var Vt, Ot, qt;
        for ((Vt = et.indexOf(".")) > -1 && (et = et.replace(".", "")), (Ot = et.search(/e/i)) > 0 ? (Vt < 0 && (Vt = Ot), Vt += +et.slice(Ot + 1), et = et.substring(0, Ot)) : Vt < 0 && (Vt = et.length), Ot = 0; 48 === et.charCodeAt(Ot);) ++Ot;
        for (qt = et.length; 48 === et.charCodeAt(qt - 1);) --qt;
        if (et = et.slice(Ot, qt)) {
          if (qt -= Ot, Vt = Vt - Ot - 1, tt.e = Qt(Vt / 7), tt.d = [], Ot = (Vt + 1) % 7, Vt < 0 && (Ot += 7), Ot < qt) {
            for (Ot && tt.d.push(+et.slice(0, Ot)), qt -= 7; Ot < qt;) tt.d.push(+et.slice(Ot, Ot += 7));
            Ot = 7 - (et = et.slice(Ot)).length
          } else Ot -= qt;
          for (; Ot--;) et += "0";
          if (tt.d.push(+et), dt && (tt.e > yt || tt.e < -yt)) throw Error(Xt + Vt)
        } else tt.s = 0, tt.e = 0, tt.d = [0];
        return tt
      }

      function ct(tt, et, Vt) {
        var Ot, qt, Dt, mt, jt, Ht, Et, wt, Nt = tt.d;
        for (mt = 1, Dt = Nt[0]; Dt >= 10; Dt /= 10) mt++;
        if ((Ot = et - mt) < 0) Ot += 7, qt = et, Et = Nt[wt = 0];
        else {
          if ((wt = Math.ceil((Ot + 1) / 7)) >= (Dt = Nt.length)) return tt;
          for (Et = Dt = Nt[wt], mt = 1; Dt >= 10; Dt /= 10) mt++;
          qt = (Ot %= 7) - 7 + mt
        }
        if (void 0 !== Vt && (jt = Et / (Dt = lt(10, mt - qt - 1)) % 10 | 0, Ht = et < 0 || void 0 !== Nt[wt + 1] || Et % Dt, Ht = Vt < 4 ? (jt || Ht) && (0 == Vt || Vt == (tt.s < 0 ? 3 : 2)) : jt > 5 || 5 == jt && (4 == Vt || Ht || 6 == Vt && (Ot > 0 ? qt > 0 ? Et / lt(10, mt - qt) : 0 : Nt[wt - 1]) % 10 & 1 || Vt == (tt.s < 0 ? 8 : 7))), et < 1 || !Nt[0]) return Ht ? (Dt = Kt(tt), Nt.length = 1, et = et - Dt - 1, Nt[0] = lt(10, (7 - et % 7) % 7), tt.e = Qt(-et / 7) || 0) : (Nt.length = 1, Nt[0] = tt.e = tt.s = 0), tt;
        if (0 == Ot ? (Nt.length = wt, Dt = 1, wt--) : (Nt.length = wt + 1, Dt = lt(10, 7 - Ot), Nt[wt] = qt > 0 ? (Et / lt(10, mt - qt) % lt(10, qt) | 0) * Dt : 0), Ht)
          for (;;) {
            if (0 == wt) {
              (Nt[0] += Dt) == ft && (Nt[0] = 1, ++tt.e);
              break
            }
            if (Nt[wt] += Dt, Nt[wt] != ft) break;
            Nt[wt--] = 0, Dt = 1
          }
        for (Ot = Nt.length; 0 === Nt[--Ot];) Nt.pop();
        if (dt && (tt.e > yt || tt.e < -yt)) throw Error(Xt + Kt(tt));
        return tt
      }

      function Rt(tt, et) {
        var Vt, Ot, qt, Dt, mt, jt, Ht, Xt, Qt, lt, Et = tt.constructor,
          wt = Et.precision;
        if (!tt.s || !et.s) return et.s ? et.s = -et.s : et = new Et(tt), dt ? ct(et, wt) : et;
        if (Ht = tt.d, lt = et.d, Ot = et.e, Xt = tt.e, Ht = Ht.slice(), mt = Xt - Ot) {
          for ((Qt = mt < 0) ? (Vt = Ht, mt = -mt, jt = lt.length) : (Vt = lt, Ot = Xt, jt = Ht.length), mt > (qt = Math.max(Math.ceil(wt / 7), jt) + 2) && (mt = qt, Vt.length = 1), Vt.reverse(), qt = mt; qt--;) Vt.push(0);
          Vt.reverse()
        } else {
          for ((Qt = (qt = Ht.length) < (jt = lt.length)) && (jt = qt), qt = 0; qt < jt; qt++)
            if (Ht[qt] != lt[qt]) {
              Qt = Ht[qt] < lt[qt];
              break
            } mt = 0
        }
        for (Qt && (Vt = Ht, Ht = lt, lt = Vt, et.s = -et.s), jt = Ht.length, qt = lt.length - jt; qt > 0; --qt) Ht[jt++] = 0;
        for (qt = lt.length; qt > mt;) {
          if (Ht[--qt] < lt[qt]) {
            for (Dt = qt; Dt && 0 === Ht[--Dt];) Ht[Dt] = ft - 1;
            --Ht[Dt], Ht[qt] += ft
          }
          Ht[qt] -= lt[qt]
        }
        for (; 0 === Ht[--jt];) Ht.pop();
        for (; 0 === Ht[0]; Ht.shift()) --Ot;
        return Ht[0] ? (et.d = Ht, et.e = Ot, dt ? ct(et, wt) : et) : new Et(0)
      }

      function It(tt, et, Vt) {
        var Ot, qt = Kt(tt),
          Dt = Jt(tt.d),
          mt = Dt.length;
        return et ? (Vt && (Ot = Vt - mt) > 0 ? Dt = Dt.charAt(0) + "." + Dt.slice(1) + vt(Ot) : mt > 1 && (Dt = Dt.charAt(0) + "." + Dt.slice(1)), Dt = Dt + (qt < 0 ? "e" : "e+") + qt) : qt < 0 ? (Dt = "0." + vt(-qt - 1) + Dt, Vt && (Ot = Vt - mt) > 0 && (Dt += vt(Ot))) : qt >= mt ? (Dt += vt(qt + 1 - mt), Vt && (Ot = Vt - qt - 1) > 0 && (Dt = Dt + "." + vt(Ot))) : ((Ot = qt + 1) < mt && (Dt = Dt.slice(0, Ot) + "." + Dt.slice(Ot)), Vt && (Ot = Vt - mt) > 0 && (qt + 1 === mt && (Dt += "."), Dt += vt(Ot))), tt.s < 0 ? "-" + Dt : Dt
      }

      function Pt(tt, et) {
        if (tt.length > et) return tt.length = et, !0
      }

      function Zt(tt) {
        if (!tt || "object" !== typeof tt) throw Error(jt + "Object expected");
        var et, Vt, Ot, qt = ["precision", 1, Dt, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
        for (et = 0; et < qt.length; et += 3)
          if (void 0 !== (Ot = tt[Vt = qt[et]])) {
            if (!(Qt(Ot) === Ot && Ot >= qt[et + 1] && Ot <= qt[et + 2])) throw Error(Ht + Vt + ": " + Ot);
            this[Vt] = Ot
          } if (void 0 !== (Ot = tt[Vt = "LN10"])) {
          if (Ot != Math.LN10) throw Error(Ht + Vt + ": " + Ot);
          this[Vt] = new this(Ot)
        }
        return this
      }
      mt = function tt(et) {
        var Vt, Ot, qt;

        function Dt(tt) {
          var et = this;
          if (!(et instanceof Dt)) return new Dt(tt);
          if (et.constructor = Dt, tt instanceof Dt) return et.s = tt.s, et.e = tt.e, void(et.d = (tt = tt.d) ? tt.slice() : tt);
          if ("number" === typeof tt) {
            if (0 * tt !== 0) throw Error(Ht + tt);
            if (tt > 0) et.s = 1;
            else {
              if (!(tt < 0)) return et.s = 0, et.e = 0, void(et.d = [0]);
              tt = -tt, et.s = -1
            }
            return tt === ~~tt && tt < 1e7 ? (et.e = 0, void(et.d = [tt])) : St(et, tt.toString())
          }
          if ("string" !== typeof tt) throw Error(Ht + tt);
          if (45 === tt.charCodeAt(0) ? (tt = tt.slice(1), et.s = -1) : et.s = 1, !Et.test(tt)) throw Error(Ht + tt);
          St(et, tt)
        }
        if (Dt.prototype = Nt, Dt.ROUND_UP = 0, Dt.ROUND_DOWN = 1, Dt.ROUND_CEIL = 2, Dt.ROUND_FLOOR = 3, Dt.ROUND_HALF_UP = 4, Dt.ROUND_HALF_DOWN = 5, Dt.ROUND_HALF_EVEN = 6, Dt.ROUND_HALF_CEIL = 7, Dt.ROUND_HALF_FLOOR = 8, Dt.clone = tt, Dt.config = Dt.set = Zt, void 0 === et && (et = {}), et)
          for (qt = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], Vt = 0; Vt < qt.length;) et.hasOwnProperty(Ot = qt[Vt++]) || (et[Ot] = this[Ot]);
        return Dt.config(et), Dt
      }(mt), mt.default = mt.Decimal = mt, qt = new mt(1), void 0 === (Ot = function() {
        return mt
      }.call(et, Vt, et, tt)) || (tt.exports = Ot)
    }()
  },
  5966: (tt, et, Vt) => {
    var Ot = Vt(5432)(Vt(5285), "DataView");
    tt.exports = Ot
  },
  5415: (tt, et, Vt) => {
    var Ot = Vt(5421),
      qt = Vt(5467),
      Dt = Vt(5470),
      mt = Vt(5476),
      dt = Vt(5480);

    function jt(tt) {
      var et = -1,
        Vt = null == tt ? 0 : tt.length;
      for (this.clear(); ++et < Vt;) {
        var Ot = tt[et];
        this.set(Ot[0], Ot[1])
      }
    }
    jt.prototype.clear = Ot, jt.prototype.delete = qt, jt.prototype.get = Dt, jt.prototype.has = mt, jt.prototype.set = dt, tt.exports = jt
  },
  5484: (tt, et, Vt) => {
    var Ot = Vt(5492),
      qt = Vt(5499),
      Dt = Vt(5518),
      mt = Vt(5527),
      dt = Vt(5535);

    function jt(tt) {
      var et = -1,
        Vt = null == tt ? 0 : tt.length;
      for (this.clear(); ++et < Vt;) {
        var Ot = tt[et];
        this.set(Ot[0], Ot[1])
      }
    }
    jt.prototype.clear = Ot, jt.prototype.delete = qt, jt.prototype.get = Dt, jt.prototype.has = mt, jt.prototype.set = dt, tt.exports = jt
  },
  5539: (tt, et, Vt) => {
    var Ot = Vt(5432)(Vt(5285), "Map");
    tt.exports = Ot
  },
  5408: (tt, et, Vt) => {
    var Ot = Vt(5412),
      qt = Vt(5544),
      Dt = Vt(5564),
      mt = Vt(5572),
      dt = Vt(5581);

    function jt(tt) {
      var et = -1,
        Vt = null == tt ? 0 : tt.length;
      for (this.clear(); ++et < Vt;) {
        var Ot = tt[et];
        this.set(Ot[0], Ot[1])
      }
    }
    jt.prototype.clear = Ot, jt.prototype.delete = qt, jt.prototype.get = Dt, jt.prototype.has = mt, jt.prototype.set = dt, tt.exports = jt
  },
  5974: (tt, et, Vt) => {
    var Ot = Vt(5432)(Vt(5285), "Promise");
    tt.exports = Ot
  },
  5978: (tt, et, Vt) => {
    var Ot = Vt(5432)(Vt(5285), "Set");
    tt.exports = Ot
  },
  5801: (tt, et, Vt) => {
    var Ot = Vt(5408),
      qt = Vt(5808),
      Dt = Vt(5817);

    function mt(tt) {
      var et = -1,
        Vt = null == tt ? 0 : tt.length;
      for (this.__data__ = new Ot; ++et < Vt;) this.add(tt[et])
    }
    mt.prototype.add = mt.prototype.push = qt, mt.prototype.has = Dt, tt.exports = mt
  },
  5754: (tt, et, Vt) => {
    var Ot = Vt(5484),
      qt = Vt(5759),
      Dt = Vt(5764),
      mt = Vt(5770),
      dt = Vt(5776),
      jt = Vt(5784);

    function Ht(tt) {
      var et = this.__data__ = new Ot(tt);
      this.size = et.size
    }
    Ht.prototype.clear = qt, Ht.prototype.delete = Dt, Ht.prototype.get = mt, Ht.prototype.has = dt, Ht.prototype.set = jt, tt.exports = Ht
  },
  5320: (tt, et, Vt) => {
    var Ot = Vt(5285).Symbol;
    tt.exports = Ot
  },
  5838: (tt, et, Vt) => {
    var Ot = Vt(5285).Uint8Array;
    tt.exports = Ot
  },
  5985: (tt, et, Vt) => {
    var Ot = Vt(5432)(Vt(5285), "WeakMap");
    tt.exports = Ot
  },
  6103: tt => {
    tt.exports = function(tt, et, Vt) {
      switch (Vt.length) {
        case 0:
          return tt.call(et);
        case 1:
          return tt.call(et, Vt[0]);
        case 2:
          return tt.call(et, Vt[0], Vt[1]);
        case 3:
          return tt.call(et, Vt[0], Vt[1], Vt[2])
      }
      return tt.apply(et, Vt)
    }
  },
  6439: tt => {
    tt.exports = function(tt, et) {
      for (var Vt = -1, Ot = null == tt ? 0 : tt.length; ++Vt < Ot;)
        if (!et(tt[Vt], Vt, tt)) return !1;
      return !0
    }
  },
  5877: tt => {
    tt.exports = function(tt, et) {
      for (var Vt = -1, Ot = null == tt ? 0 : tt.length, qt = 0, Dt = []; ++Vt < Ot;) {
        var mt = tt[Vt];
        et(mt, Vt, tt) && (Dt[qt++] = mt)
      }
      return Dt
    }
  },
  6175: (tt, et, Vt) => {
    var Ot = Vt(6181);
    tt.exports = function(tt, et) {
      return !!(null == tt ? 0 : tt.length) && Ot(tt, et, 0) > -1
    }
  },
  6205: tt => {
    tt.exports = function(tt, et, Vt) {
      for (var Ot = -1, qt = null == tt ? 0 : tt.length; ++Ot < qt;)
        if (Vt(et, tt[Ot])) return !0;
      return !1
    }
  },
  5894: (tt, et, Vt) => {
    var Ot = Vt(5897),
      qt = Vt(5718),
      Dt = Vt(5361),
      mt = Vt(5902),
      dt = Vt(5685),
      jt = Vt(5908),
      Ht = Object.prototype.hasOwnProperty;
    tt.exports = function(tt, et) {
      var Vt = Dt(tt),
        Xt = !Vt && qt(tt),
        Qt = !Vt && !Xt && mt(tt),
        lt = !Vt && !Xt && !Qt && jt(tt),
        Et = Vt || Xt || Qt || lt,
        ft = Et ? Ot(tt.length, String) : [],
        wt = ft.length;
      for (var yt in tt) !et && !Ht.call(tt, yt) || Et && ("length" == yt || Qt && ("offset" == yt || "parent" == yt) || lt && ("buffer" == yt || "byteLength" == yt || "byteOffset" == yt) || dt(yt, wt)) || ft.push(yt);
      return ft
    }
  },
  5596: tt => {
    tt.exports = function(tt, et) {
      for (var Vt = -1, Ot = null == tt ? 0 : tt.length, qt = Array(Ot); ++Vt < Ot;) qt[Vt] = et(tt[Vt], Vt, tt);
      return qt
    }
  },
  5705: tt => {
    tt.exports = function(tt, et) {
      for (var Vt = -1, Ot = et.length, qt = tt.length; ++Vt < Ot;) tt[qt + Vt] = et[Vt];
      return tt
    }
  },
  5819: tt => {
    tt.exports = function(tt, et) {
      for (var Vt = -1, Ot = null == tt ? 0 : tt.length; ++Vt < Ot;)
        if (et(tt[Vt], Vt, tt)) return !0;
      return !1
    }
  },
  6258: tt => {
    tt.exports = function(tt) {
      return tt.split("")
    }
  },
  5502: (tt, et, Vt) => {
    var Ot = Vt(5509);
    tt.exports = function(tt, et) {
      for (var Vt = tt.length; Vt--;)
        if (Ot(tt[Vt][0], et)) return Vt;
      return -1
    }
  },
  6430: (tt, et, Vt) => {
    var Ot = Vt(6125);
    tt.exports = function(tt, et, Vt) {
      "__proto__" == et && Ot ? Ot(tt, et, {
        configurable: !0,
        enumerable: !0,
        value: Vt,
        writable: !0
      }) : tt[et] = Vt
    }
  },
  6049: (tt, et, Vt) => {
    var Ot = Vt(6058),
      qt = Vt(6079)(Ot);
    tt.exports = qt
  },
  6445: (tt, et, Vt) => {
    var Ot = Vt(6049);
    tt.exports = function(tt, et) {
      var Vt = !0;
      return Ot(tt, (function(tt, Ot, qt) {
        return Vt = !!et(tt, Ot, qt)
      })), Vt
    }
  },
  6349: (tt, et, Vt) => {
    var Ot = Vt(5305);
    tt.exports = function(tt, et, Vt) {
      for (var qt = -1, Dt = tt.length; ++qt < Dt;) {
        var mt = tt[qt],
          dt = et(mt);
        if (null != dt && (void 0 === jt ? dt === dt && !Ot(dt) : Vt(dt, jt))) var jt = dt,
          Ht = mt
      }
      return Ht
    }
  },
  6189: tt => {
    tt.exports = function(tt, et, Vt, Ot) {
      for (var qt = tt.length, Dt = Vt + (Ot ? 1 : -1); Ot ? Dt-- : ++Dt < qt;)
        if (et(tt[Dt], Dt, tt)) return Dt;
      return -1
    }
  },
  5703: (tt, et, Vt) => {
    var Ot = Vt(5705),
      qt = Vt(5710);
    tt.exports = function tt(et, Vt, Dt, mt, dt) {
      var jt = -1,
        Ht = et.length;
      for (Dt || (Dt = qt), dt || (dt = []); ++jt < Ht;) {
        var Xt = et[jt];
        Vt > 0 && Dt(Xt) ? Vt > 1 ? tt(Xt, Vt - 1, Dt, mt, dt) : Ot(dt, Xt) : mt || (dt[dt.length] = Xt)
      }
      return dt
    }
  },
  6062: (tt, et, Vt) => {
    var Ot = Vt(6070)();
    tt.exports = Ot
  },
  6058: (tt, et, Vt) => {
    var Ot = Vt(6062),
      qt = Vt(5890);
    tt.exports = function(tt, et) {
      return tt && Ot(tt, et, qt)
    }
  },
  5376: (tt, et, Vt) => {
    var Ot = Vt(5383),
      qt = Vt(5599);
    tt.exports = function(tt, et) {
      for (var Vt = 0, Dt = (et = Ot(et, tt)).length; null != tt && Vt < Dt;) tt = tt[qt(et[Vt++])];
      return Vt && Vt == Dt ? tt : void 0
    }
  },
  5869: (tt, et, Vt) => {
    var Ot = Vt(5705),
      qt = Vt(5361);
    tt.exports = function(tt, et, Vt) {
      var Dt = et(tt);
      return qt(tt) ? Dt : Ot(Dt, Vt(tt))
    }
  },
  5313: (tt, et, Vt) => {
    var Ot = Vt(5320),
      qt = Vt(5325),
      Dt = Vt(5334),
      mt = Ot ? Ot.toStringTag : void 0;
    tt.exports = function(tt) {
      return null == tt ? void 0 === tt ? "[object Undefined]" : "[object Null]" : mt && mt in Object(tt) ? qt(tt) : Dt(tt)
    }
  },
  6357: tt => {
    tt.exports = function(tt, et) {
      return tt > et
    }
  },
  6013: tt => {
    tt.exports = function(tt, et) {
      return null != tt && et in Object(tt)
    }
  },
  6181: (tt, et, Vt) => {
    var Ot = Vt(6189),
      qt = Vt(6196),
      Dt = Vt(6198);
    tt.exports = function(tt, et, Vt) {
      return et === et ? Dt(tt, et, Vt) : Ot(tt, qt, Vt)
    }
  },
  5726: (tt, et, Vt) => {
    var Ot = Vt(5313),
      qt = Vt(5341);
    tt.exports = function(tt) {
      return qt(tt) && "[object Arguments]" == Ot(tt)
    }
  },
  5789: (tt, et, Vt) => {
    var Ot = Vt(5797),
      qt = Vt(5341);
    tt.exports = function tt(et, Vt, Dt, mt, dt) {
      return et === Vt || (null == et || null == Vt || !qt(et) && !qt(Vt) ? et !== et && Vt !== Vt : Ot(et, Vt, Dt, mt, tt, dt))
    }
  },
  5797: (tt, et, Vt) => {
    var Ot = Vt(5754),
      qt = Vt(5799),
      Dt = Vt(5830),
      mt = Vt(5856),
      dt = Vt(5959),
      jt = Vt(5361),
      Ht = Vt(5902),
      Xt = Vt(5908),
      Qt = "[object Arguments]",
      lt = "[object Array]",
      Et = "[object Object]",
      ft = Object.prototype.hasOwnProperty;
    tt.exports = function(tt, et, Vt, wt, yt, Nt) {
      var Mt = jt(tt),
        bt = jt(et),
        Jt = Mt ? lt : dt(tt),
        Ct = bt ? lt : dt(et),
        ut = (Jt = Jt == Qt ? Et : Jt) == Et,
        Kt = (Ct = Ct == Qt ? Et : Ct) == Et,
        ht = Jt == Ct;
      if (ht && Ht(tt)) {
        if (!Ht(et)) return !1;
        Mt = !0, ut = !1
      }
      if (ht && !ut) return Nt || (Nt = new Ot), Mt || Xt(tt) ? qt(tt, et, Vt, wt, yt, Nt) : Dt(tt, et, Jt, Vt, wt, yt, Nt);
      if (!(1 & Vt)) {
        var vt = ut && ft.call(tt, "__wrapped__"),
          Wt = Kt && ft.call(et, "__wrapped__");
        if (vt || Wt) {
          var St = vt ? tt.value() : tt,
            ct = Wt ? et.value() : et;
          return Nt || (Nt = new Ot), yt(St, ct, Vt, wt, Nt)
        }
      }
      return !!ht && (Nt || (Nt = new Ot), mt(tt, et, Vt, wt, yt, Nt))
    }
  },
  5749: (tt, et, Vt) => {
    var Ot = Vt(5754),
      qt = Vt(5789);
    tt.exports = function(tt, et, Vt, Dt) {
      var mt = Vt.length,
        dt = mt,
        jt = !Dt;
      if (null == tt) return !dt;
      for (tt = Object(tt); mt--;) {
        var Ht = Vt[mt];
        if (jt && Ht[2] ? Ht[1] !== tt[Ht[0]] : !(Ht[0] in tt)) return !1
      }
      for (; ++mt < dt;) {
        var Xt = (Ht = Vt[mt])[0],
          Qt = tt[Xt],
          lt = Ht[1];
        if (jt && Ht[2]) {
          if (void 0 === Qt && !(Xt in tt)) return !1
        } else {
          var Et = new Ot;
          if (Dt) var ft = Dt(Qt, lt, Xt, tt, et, Et);
          if (!(void 0 === ft ? qt(lt, Qt, 3, Dt, Et) : ft)) return !1
        }
      }
      return !0
    }
  },
  6196: tt => {
    tt.exports = function(tt) {
      return tt !== tt
    }
  },
  5434: (tt, et, Vt) => {
    var Ot = Vt(5436),
      qt = Vt(5443),
      Dt = Vt(5280),
      mt = Vt(5454),
      dt = /^\[object .+?Constructor\]$/,
      jt = Function.prototype,
      Ht = Object.prototype,
      Xt = jt.toString,
      Qt = Ht.hasOwnProperty,
      lt = RegExp("^" + Xt.call(Qt).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    tt.exports = function(tt) {
      return !(!Dt(tt) || qt(tt)) && (Ot(tt) ? lt : dt).test(mt(tt))
    }
  },
  5912: (tt, et, Vt) => {
    var Ot = Vt(5313),
      qt = Vt(5676),
      Dt = Vt(5341),
      mt = {};
    mt["[object Float32Array]"] = mt["[object Float64Array]"] = mt["[object Int8Array]"] = mt["[object Int16Array]"] = mt["[object Int32Array]"] = mt["[object Uint8Array]"] = mt["[object Uint8ClampedArray]"] = mt["[object Uint16Array]"] = mt["[object Uint32Array]"] = !0, mt["[object Arguments]"] = mt["[object Array]"] = mt["[object ArrayBuffer]"] = mt["[object Boolean]"] = mt["[object DataView]"] = mt["[object Date]"] = mt["[object Error]"] = mt["[object Function]"] = mt["[object Map]"] = mt["[object Number]"] = mt["[object Object]"] = mt["[object RegExp]"] = mt["[object Set]"] = mt["[object String]"] = mt["[object WeakMap]"] = !1, tt.exports = function(tt) {
      return Dt(tt) && qt(tt.length) && !!mt[Ot(tt)]
    }
  },
  5734: (tt, et, Vt) => {
    var Ot = Vt(5740),
      qt = Vt(6003),
      Dt = Vt(6018),
      mt = Vt(5361),
      dt = Vt(6027);
    tt.exports = function(tt) {
      return "function" == typeof tt ? tt : null == tt ? Dt : "object" == typeof tt ? mt(tt) ? qt(tt[0], tt[1]) : Ot(tt) : dt(tt)
    }
  },
  5938: (tt, et, Vt) => {
    var Ot = Vt(5947),
      qt = Vt(5953),
      Dt = Object.prototype.hasOwnProperty;
    tt.exports = function(tt) {
      if (!Ot(tt)) return qt(tt);
      var et = [];
      for (var Vt in Object(tt)) Dt.call(tt, Vt) && "constructor" != Vt && et.push(Vt);
      return et
    }
  },
  6362: tt => {
    tt.exports = function(tt, et) {
      return tt < et
    }
  },
  6041: (tt, et, Vt) => {
    var Ot = Vt(6049),
      qt = Vt(5674);
    tt.exports = function(tt, et) {
      var Vt = -1,
        Dt = qt(tt) ? Array(tt.length) : [];
      return Ot(tt, (function(tt, Ot, qt) {
        Dt[++Vt] = et(tt, Ot, qt)
      })), Dt
    }
  },
  5740: (tt, et, Vt) => {
    var Ot = Vt(5749),
      qt = Vt(5992),
      Dt = Vt(5998);
    tt.exports = function(tt) {
      var et = qt(tt);
      return 1 == et.length && et[0][2] ? Dt(et[0][0], et[0][1]) : function(Vt) {
        return Vt === tt || Ot(Vt, tt, et)
      }
    }
  },
  6003: (tt, et, Vt) => {
    var Ot = Vt(5789),
      qt = Vt(5374),
      Dt = Vt(6009),
      mt = Vt(5389),
      dt = Vt(5996),
      jt = Vt(5998),
      Ht = Vt(5599);
    tt.exports = function(tt, et) {
      return mt(tt) && dt(et) ? jt(Ht(tt), et) : function(Vt) {
        var mt = qt(Vt, tt);
        return void 0 === mt && mt === et ? Dt(Vt, tt) : Ot(et, mt, 3)
      }
    }
  },
  5730: (tt, et, Vt) => {
    var Ot = Vt(5596),
      qt = Vt(5376),
      Dt = Vt(5734),
      mt = Vt(6041),
      dt = Vt(6081),
      jt = Vt(5921),
      Ht = Vt(6088),
      Xt = Vt(6018),
      Qt = Vt(5361);
    tt.exports = function(tt, et, Vt) {
      et = et.length ? Ot(et, (function(tt) {
        return Qt(tt) ? function(et) {
          return qt(et, 1 === tt.length ? tt[0] : tt)
        } : tt
      })) : [Xt];
      var lt = -1;
      et = Ot(et, jt(Dt));
      var Et = mt(tt, (function(tt, Vt, qt) {
        return {
          criteria: Ot(et, (function(et) {
            return et(tt)
          })),
          index: ++lt,
          value: tt
        }
      }));
      return dt(Et, (function(tt, et) {
        return Ht(tt, et, Vt)
      }))
    }
  },
  6034: tt => {
    tt.exports = function(tt) {
      return function(et) {
        return null == et ? void 0 : et[tt]
      }
    }
  },
  6038: (tt, et, Vt) => {
    var Ot = Vt(5376);
    tt.exports = function(tt) {
      return function(et) {
        return Ot(et, tt)
      }
    }
  },
  5658: tt => {
    var et = Math.ceil,
      Vt = Math.max;
    tt.exports = function(tt, Ot, qt, Dt) {
      for (var mt = -1, dt = Vt(et((Ot - tt) / (qt || 1)), 0), jt = Array(dt); dt--;) jt[Dt ? dt : ++mt] = tt, tt += qt;
      return jt
    }
  },
  6098: (tt, et, Vt) => {
    var Ot = Vt(6018),
      qt = Vt(6101),
      Dt = Vt(6110);
    tt.exports = function(tt, et) {
      return Dt(qt(tt, et, Ot), tt + "")
    }
  },
  6113: (tt, et, Vt) => {
    var Ot = Vt(6117),
      qt = Vt(6125),
      Dt = Vt(6018),
      mt = qt ? function(tt, et) {
        return qt(tt, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Ot(et),
          writable: !0
        })
      } : Dt;
    tt.exports = mt
  },
  6244: tt => {
    tt.exports = function(tt, et, Vt) {
      var Ot = -1,
        qt = tt.length;
      et < 0 && (et = -et > qt ? 0 : qt + et), (Vt = Vt > qt ? qt : Vt) < 0 && (Vt += qt), qt = et > Vt ? 0 : Vt - et >>> 0, et >>>= 0;
      for (var Dt = Array(qt); ++Ot < qt;) Dt[Ot] = tt[Ot + et];
      return Dt
    }
  },
  6523: (tt, et, Vt) => {
    var Ot = Vt(6049);
    tt.exports = function(tt, et) {
      var Vt;
      return Ot(tt, (function(tt, Ot, qt) {
        return !(Vt = et(tt, Ot, qt))
      })), !!Vt
    }
  },
  6081: tt => {
    tt.exports = function(tt, et) {
      var Vt = tt.length;
      for (tt.sort(et); Vt--;) tt[Vt] = tt[Vt].value;
      return tt
    }
  },
  5897: tt => {
    tt.exports = function(tt, et) {
      for (var Vt = -1, Ot = Array(tt); ++Vt < tt;) Ot[Vt] = et(Vt);
      return Ot
    }
  },
  5592: (tt, et, Vt) => {
    var Ot = Vt(5320),
      qt = Vt(5596),
      Dt = Vt(5361),
      mt = Vt(5305),
      dt = Ot ? Ot.prototype : void 0,
      jt = dt ? dt.toString : void 0;
    tt.exports = function tt(et) {
      if ("string" == typeof et) return et;
      if (Dt(et)) return qt(et, tt) + "";
      if (mt(et)) return jt ? jt.call(et) : "";
      var Vt = et + "";
      return "0" == Vt && 1 / et == -1 / 0 ? "-0" : Vt
    }
  },
  5299: (tt, et, Vt) => {
    var Ot = Vt(5302),
      qt = /^\s+/;
    tt.exports = function(tt) {
      return tt ? tt.slice(0, Ot(tt) + 1).replace(qt, "") : tt
    }
  },
  5921: tt => {
    tt.exports = function(tt) {
      return function(et) {
        return tt(et)
      }
    }
  },
  6172: (tt, et, Vt) => {
    var Ot = Vt(5801),
      qt = Vt(6175),
      Dt = Vt(6205),
      mt = Vt(5826),
      dt = Vt(6213),
      jt = Vt(5852);
    tt.exports = function(tt, et, Vt) {
      var Ht = -1,
        Xt = qt,
        Qt = tt.length,
        lt = !0,
        Et = [],
        ft = Et;
      if (Vt) lt = !1, Xt = Dt;
      else if (Qt >= 200) {
        var wt = et ? null : dt(tt);
        if (wt) return jt(wt);
        lt = !1, Xt = mt, ft = new Ot
      } else ft = et ? [] : Et;
      tt: for (; ++Ht < Qt;) {
        var yt = tt[Ht],
          Nt = et ? et(yt) : yt;
        if (yt = Vt || 0 !== yt ? yt : 0, lt && Nt === Nt) {
          for (var Mt = ft.length; Mt--;)
            if (ft[Mt] === Nt) continue tt;
          et && ft.push(Nt), Et.push(yt)
        } else Xt(ft, Nt, Vt) || (ft !== Et && ft.push(Nt), Et.push(yt))
      }
      return Et
    }
  },
  5826: tt => {
    tt.exports = function(tt, et) {
      return tt.has(et)
    }
  },
  5383: (tt, et, Vt) => {
    var Ot = Vt(5361),
      qt = Vt(5389),
      Dt = Vt(5394),
      mt = Vt(5584);
    tt.exports = function(tt, et) {
      return Ot(tt) ? tt : qt(tt, et) ? [tt] : Dt(mt(tt))
    }
  },
  6240: (tt, et, Vt) => {
    var Ot = Vt(6244);
    tt.exports = function(tt, et, Vt) {
      var qt = tt.length;
      return Vt = void 0 === Vt ? qt : Vt, !et && Vt >= qt ? tt : Ot(tt, et, Vt)
    }
  },
  6095: (tt, et, Vt) => {
    var Ot = Vt(5305);
    tt.exports = function(tt, et) {
      if (tt !== et) {
        var Vt = void 0 !== tt,
          qt = null === tt,
          Dt = tt === tt,
          mt = Ot(tt),
          dt = void 0 !== et,
          jt = null === et,
          Ht = et === et,
          Xt = Ot(et);
        if (!jt && !Xt && !mt && tt > et || mt && dt && Ht && !jt && !Xt || qt && dt && Ht || !Vt && Ht || !Dt) return 1;
        if (!qt && !mt && !Xt && tt < et || Xt && Vt && Dt && !qt && !mt || jt && Vt && Dt || !dt && Dt || !Ht) return -1
      }
      return 0
    }
  },
  6088: (tt, et, Vt) => {
    var Ot = Vt(6095);
    tt.exports = function(tt, et, Vt) {
      for (var qt = -1, Dt = tt.criteria, mt = et.criteria, dt = Dt.length, jt = Vt.length; ++qt < dt;) {
        var Ht = Ot(Dt[qt], mt[qt]);
        if (Ht) return qt >= jt ? Ht : Ht * ("desc" == Vt[qt] ? -1 : 1)
      }
      return tt.index - et.index
    }
  },
  5448: (tt, et, Vt) => {
    var Ot = Vt(5285)["__core-js_shared__"];
    tt.exports = Ot
  },
  6079: (tt, et, Vt) => {
    var Ot = Vt(5674);
    tt.exports = function(tt, et) {
      return function(Vt, qt) {
        if (null == Vt) return Vt;
        if (!Ot(Vt)) return tt(Vt, qt);
        for (var Dt = Vt.length, mt = et ? Dt : -1, dt = Object(Vt);
          (et ? mt-- : ++mt < Dt) && !1 !== qt(dt[mt], mt, dt););
        return Vt
      }
    }
  },
  6070: tt => {
    tt.exports = function(tt) {
      return function(et, Vt, Ot) {
        for (var qt = -1, Dt = Object(et), mt = Ot(et), dt = mt.length; dt--;) {
          var jt = mt[tt ? dt : ++qt];
          if (!1 === Vt(Dt[jt], jt, Dt)) break
        }
        return et
      }
    }
  },
  6238: (tt, et, Vt) => {
    var Ot = Vt(6240),
      qt = Vt(6252),
      Dt = Vt(6254),
      mt = Vt(5584);
    tt.exports = function(tt) {
      return function(et) {
        et = mt(et);
        var Vt = qt(et) ? Dt(et) : void 0,
          dt = Vt ? Vt[0] : et.charAt(0),
          jt = Vt ? Ot(Vt, 1).join("") : et.slice(1);
        return dt[tt]() + jt
      }
    }
  },
  6543: (tt, et, Vt) => {
    var Ot = Vt(5734),
      qt = Vt(5674),
      Dt = Vt(5890);
    tt.exports = function(tt) {
      return function(et, Vt, mt) {
        var dt = Object(et);
        if (!qt(et)) {
          var jt = Ot(Vt, 3);
          et = Dt(et), Vt = function(tt) {
            return jt(dt[tt], tt, dt)
          }
        }
        var Ht = tt(et, Vt, mt);
        return Ht > -1 ? dt[jt ? et[Ht] : Ht] : void 0
      }
    }
  },
  5656: (tt, et, Vt) => {
    var Ot = Vt(5658),
      qt = Vt(5665),
      Dt = Vt(5694);
    tt.exports = function(tt) {
      return function(et, Vt, mt) {
        return mt && "number" != typeof mt && qt(et, Vt, mt) && (Vt = mt = void 0), et = Dt(et), void 0 === Vt ? (Vt = et, et = 0) : Vt = Dt(Vt), mt = void 0 === mt ? et < Vt ? 1 : -1 : Dt(mt), Ot(et, Vt, mt, tt)
      }
    }
  },
  6213: (tt, et, Vt) => {
    var Ot = Vt(5978),
      qt = Vt(6218),
      Dt = Vt(5852),
      mt = Ot && 1 / Dt(new Ot([, -0]))[1] == 1 / 0 ? function(tt) {
        return new Ot(tt)
      } : qt;
    tt.exports = mt
  },
  6125: (tt, et, Vt) => {
    var Ot = Vt(5432),
      qt = function() {
        try {
          var tt = Ot(Object, "defineProperty");
          return tt({}, "", {}), tt
        } catch (et) {}
      }();
    tt.exports = qt
  },
  5799: (tt, et, Vt) => {
    var Ot = Vt(5801),
      qt = Vt(5819),
      Dt = Vt(5826);
    tt.exports = function(tt, et, Vt, mt, dt, jt) {
      var Ht = 1 & Vt,
        Xt = tt.length,
        Qt = et.length;
      if (Xt != Qt && !(Ht && Qt > Xt)) return !1;
      var lt = jt.get(tt),
        Et = jt.get(et);
      if (lt && Et) return lt == et && Et == tt;
      var ft = -1,
        wt = !0,
        yt = 2 & Vt ? new Ot : void 0;
      for (jt.set(tt, et), jt.set(et, tt); ++ft < Xt;) {
        var Nt = tt[ft],
          Mt = et[ft];
        if (mt) var bt = Ht ? mt(Mt, Nt, ft, et, tt, jt) : mt(Nt, Mt, ft, tt, et, jt);
        if (void 0 !== bt) {
          if (bt) continue;
          wt = !1;
          break
        }
        if (yt) {
          if (!qt(et, (function(tt, et) {
              if (!Dt(yt, et) && (Nt === tt || dt(Nt, tt, Vt, mt, jt))) return yt.push(et)
            }))) {
            wt = !1;
            break
          }
        } else if (Nt !== Mt && !dt(Nt, Mt, Vt, mt, jt)) {
          wt = !1;
          break
        }
      }
      return jt.delete(tt), jt.delete(et), wt
    }
  },
  5830: (tt, et, Vt) => {
    var Ot = Vt(5320),
      qt = Vt(5838),
      Dt = Vt(5509),
      mt = Vt(5799),
      dt = Vt(5845),
      jt = Vt(5852),
      Ht = Ot ? Ot.prototype : void 0,
      Xt = Ht ? Ht.valueOf : void 0;
    tt.exports = function(tt, et, Vt, Ot, Ht, Qt, lt) {
      switch (Vt) {
        case "[object DataView]":
          if (tt.byteLength != et.byteLength || tt.byteOffset != et.byteOffset) return !1;
          tt = tt.buffer, et = et.buffer;
        case "[object ArrayBuffer]":
          return !(tt.byteLength != et.byteLength || !Qt(new qt(tt), new qt(et)));
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
          return Dt(+tt, +et);
        case "[object Error]":
          return tt.name == et.name && tt.message == et.message;
        case "[object RegExp]":
        case "[object String]":
          return tt == et + "";
        case "[object Map]":
          var Et = dt;
        case "[object Set]":
          var ft = 1 & Ot;
          if (Et || (Et = jt), tt.size != et.size && !ft) return !1;
          var wt = lt.get(tt);
          if (wt) return wt == et;
          Ot |= 2, lt.set(tt, et);
          var yt = mt(Et(tt), Et(et), Ot, Ht, Qt, lt);
          return lt.delete(tt), yt;
        case "[object Symbol]":
          if (Xt) return Xt.call(tt) == Xt.call(et)
      }
      return !1
    }
  },
  5856: (tt, et, Vt) => {
    var Ot = Vt(5863),
      qt = Object.prototype.hasOwnProperty;
    tt.exports = function(tt, et, Vt, Dt, mt, dt) {
      var jt = 1 & Vt,
        Ht = Ot(tt),
        Xt = Ht.length;
      if (Xt != Ot(et).length && !jt) return !1;
      for (var Qt = Xt; Qt--;) {
        var lt = Ht[Qt];
        if (!(jt ? lt in et : qt.call(et, lt))) return !1
      }
      var Et = dt.get(tt),
        ft = dt.get(et);
      if (Et && ft) return Et == et && ft == tt;
      var wt = !0;
      dt.set(tt, et), dt.set(et, tt);
      for (var yt = jt; ++Qt < Xt;) {
        var Nt = tt[lt = Ht[Qt]],
          Mt = et[lt];
        if (Dt) var bt = jt ? Dt(Mt, Nt, lt, et, tt, dt) : Dt(Nt, Mt, lt, tt, et, dt);
        if (!(void 0 === bt ? Nt === Mt || mt(Nt, Mt, Vt, Dt, dt) : bt)) {
          wt = !1;
          break
        }
        yt || (yt = "constructor" == lt)
      }
      if (wt && !yt) {
        var Jt = tt.constructor,
          Ct = et.constructor;
        Jt == Ct || !("constructor" in tt) || !("constructor" in et) || "function" == typeof Jt && Jt instanceof Jt && "function" == typeof Ct && Ct instanceof Ct || (wt = !1)
      }
      return dt.delete(tt), dt.delete(et), wt
    }
  },
  5292: (tt, et, Vt) => {
    var Ot = "object" == typeof Vt.g && Vt.g && Vt.g.Object === Object && Vt.g;
    tt.exports = Ot
  },
  5863: (tt, et, Vt) => {
    var Ot = Vt(5869),
      qt = Vt(5873),
      Dt = Vt(5890);
    tt.exports = function(tt) {
      return Ot(tt, Dt, qt)
    }
  },
  5549: (tt, et, Vt) => {
    var Ot = Vt(5556);
    tt.exports = function(tt, et) {
      var Vt = tt.__data__;
      return Ot(et) ? Vt["string" == typeof et ? "string" : "hash"] : Vt.map
    }
  },
  5992: (tt, et, Vt) => {
    var Ot = Vt(5996),
      qt = Vt(5890);
    tt.exports = function(tt) {
      for (var et = qt(tt), Vt = et.length; Vt--;) {
        var Dt = et[Vt],
          mt = tt[Dt];
        et[Vt] = [Dt, mt, Ot(mt)]
      }
      return et
    }
  },
  5432: (tt, et, Vt) => {
    var Ot = Vt(5434),
      qt = Vt(5463);
    tt.exports = function(tt, et) {
      var Vt = qt(tt, et);
      return Ot(Vt) ? Vt : void 0
    }
  },
  6489: (tt, et, Vt) => {
    var Ot = Vt(5957)(Object.getPrototypeOf, Object);
    tt.exports = Ot
  },
  5325: (tt, et, Vt) => {
    var Ot = Vt(5320),
      qt = Object.prototype,
      Dt = qt.hasOwnProperty,
      mt = qt.toString,
      dt = Ot ? Ot.toStringTag : void 0;
    tt.exports = function(tt) {
      var et = Dt.call(tt, dt),
        Vt = tt[dt];
      try {
        tt[dt] = void 0;
        var Ot = !0
      } catch (jt) {}
      var qt = mt.call(tt);
      return Ot && (et ? tt[dt] = Vt : delete tt[dt]), qt
    }
  },
  5873: (tt, et, Vt) => {
    var Ot = Vt(5877),
      qt = Vt(5881),
      Dt = Object.prototype.propertyIsEnumerable,
      mt = Object.getOwnPropertySymbols,
      dt = mt ? function(tt) {
        return null == tt ? [] : (tt = Object(tt), Ot(mt(tt), (function(et) {
          return Dt.call(tt, et)
        })))
      } : qt;
    tt.exports = dt
  },
  5959: (tt, et, Vt) => {
    var Ot = Vt(5966),
      qt = Vt(5539),
      Dt = Vt(5974),
      mt = Vt(5978),
      dt = Vt(5985),
      jt = Vt(5313),
      Ht = Vt(5454),
      Xt = "[object Map]",
      Qt = "[object Promise]",
      lt = "[object Set]",
      Et = "[object WeakMap]",
      ft = "[object DataView]",
      wt = Ht(Ot),
      yt = Ht(qt),
      Nt = Ht(Dt),
      Mt = Ht(mt),
      bt = Ht(dt),
      Jt = jt;
    (Ot && Jt(new Ot(new ArrayBuffer(1))) != ft || qt && Jt(new qt) != Xt || Dt && Jt(Dt.resolve()) != Qt || mt && Jt(new mt) != lt || dt && Jt(new dt) != Et) && (Jt = function(tt) {
      var et = jt(tt),
        Vt = "[object Object]" == et ? tt.constructor : void 0,
        Ot = Vt ? Ht(Vt) : "";
      if (Ot) switch (Ot) {
        case wt:
          return ft;
        case yt:
          return Xt;
        case Nt:
          return Qt;
        case Mt:
          return lt;
        case bt:
          return Et
      }
      return et
    }), tt.exports = Jt
  },
  5463: tt => {
    tt.exports = function(tt, et) {
      return null == tt ? void 0 : tt[et]
    }
  },
  6016: (tt, et, Vt) => {
    var Ot = Vt(5383),
      qt = Vt(5718),
      Dt = Vt(5361),
      mt = Vt(5685),
      dt = Vt(5676),
      jt = Vt(5599);
    tt.exports = function(tt, et, Vt) {
      for (var Ht = -1, Xt = (et = Ot(et, tt)).length, Qt = !1; ++Ht < Xt;) {
        var lt = jt(et[Ht]);
        if (!(Qt = null != tt && Vt(tt, lt))) break;
        tt = tt[lt]
      }
      return Qt || ++Ht != Xt ? Qt : !!(Xt = null == tt ? 0 : tt.length) && dt(Xt) && mt(lt, Xt) && (Dt(tt) || qt(tt))
    }
  },
  6252: tt => {
    var et = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    tt.exports = function(tt) {
      return et.test(tt)
    }
  },
  5421: (tt, et, Vt) => {
    var Ot = Vt(5429);
    tt.exports = function() {
      this.__data__ = Ot ? Ot(null) : {}, this.size = 0
    }
  },
  5467: tt => {
    tt.exports = function(tt) {
      var et = this.has(tt) && delete this.__data__[tt];
      return this.size -= et ? 1 : 0, et
    }
  },
  5470: (tt, et, Vt) => {
    var Ot = Vt(5429),
      qt = Object.prototype.hasOwnProperty;
    tt.exports = function(tt) {
      var et = this.__data__;
      if (Ot) {
        var Vt = et[tt];
        return "__lodash_hash_undefined__" === Vt ? void 0 : Vt
      }
      return qt.call(et, tt) ? et[tt] : void 0
    }
  },
  5476: (tt, et, Vt) => {
    var Ot = Vt(5429),
      qt = Object.prototype.hasOwnProperty;
    tt.exports = function(tt) {
      var et = this.__data__;
      return Ot ? void 0 !== et[tt] : qt.call(et, tt)
    }
  },
  5480: (tt, et, Vt) => {
    var Ot = Vt(5429);
    tt.exports = function(tt, et) {
      var Vt = this.__data__;
      return this.size += this.has(tt) ? 0 : 1, Vt[tt] = Ot && void 0 === et ? "__lodash_hash_undefined__" : et, this
    }
  },
  5710: (tt, et, Vt) => {
    var Ot = Vt(5320),
      qt = Vt(5718),
      Dt = Vt(5361),
      mt = Ot ? Ot.isConcatSpreadable : void 0;
    tt.exports = function(tt) {
      return Dt(tt) || qt(tt) || !!(mt && tt && tt[mt])
    }
  },
  5685: tt => {
    var et = /^(?:0|[1-9]\d*)$/;
    tt.exports = function(tt, Vt) {
      var Ot = typeof tt;
      return !!(Vt = null == Vt ? 9007199254740991 : Vt) && ("number" == Ot || "symbol" != Ot && et.test(tt)) && tt > -1 && tt % 1 == 0 && tt < Vt
    }
  },
  5665: (tt, et, Vt) => {
    var Ot = Vt(5509),
      qt = Vt(5674),
      Dt = Vt(5685),
      mt = Vt(5280);
    tt.exports = function(tt, et, Vt) {
      if (!mt(Vt)) return !1;
      var dt = typeof et;
      return !!("number" == dt ? qt(Vt) && Dt(et, Vt.length) : "string" == dt && et in Vt) && Ot(Vt[et], tt)
    }
  },
  5389: (tt, et, Vt) => {
    var Ot = Vt(5361),
      qt = Vt(5305),
      Dt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      mt = /^\w*$/;
    tt.exports = function(tt, et) {
      if (Ot(tt)) return !1;
      var Vt = typeof tt;
      return !("number" != Vt && "symbol" != Vt && "boolean" != Vt && null != tt && !qt(tt)) || (mt.test(tt) || !Dt.test(tt) || null != et && tt in Object(et))
    }
  },
  5556: tt => {
    tt.exports = function(tt) {
      var et = typeof tt;
      return "string" == et || "number" == et || "symbol" == et || "boolean" == et ? "__proto__" !== tt : null === tt
    }
  },
  5443: (tt, et, Vt) => {
    var Ot = Vt(5448),
      qt = function() {
        var tt = /[^.]+$/.exec(Ot && Ot.keys && Ot.keys.IE_PROTO || "");
        return tt ? "Symbol(src)_1." + tt : ""
      }();
    tt.exports = function(tt) {
      return !!qt && qt in tt
    }
  },
  5947: tt => {
    var et = Object.prototype;
    tt.exports = function(tt) {
      var Vt = tt && tt.constructor;
      return tt === ("function" == typeof Vt && Vt.prototype || et)
    }
  },
  5996: (tt, et, Vt) => {
    var Ot = Vt(5280);
    tt.exports = function(tt) {
      return tt === tt && !Ot(tt)
    }
  },
  5492: tt => {
    tt.exports = function() {
      this.__data__ = [], this.size = 0
    }
  },
  5499: (tt, et, Vt) => {
    var Ot = Vt(5502),
      qt = Array.prototype.splice;
    tt.exports = function(tt) {
      var et = this.__data__,
        Vt = Ot(et, tt);
      return !(Vt < 0) && (Vt == et.length - 1 ? et.pop() : qt.call(et, Vt, 1), --this.size, !0)
    }
  },
  5518: (tt, et, Vt) => {
    var Ot = Vt(5502);
    tt.exports = function(tt) {
      var et = this.__data__,
        Vt = Ot(et, tt);
      return Vt < 0 ? void 0 : et[Vt][1]
    }
  },
  5527: (tt, et, Vt) => {
    var Ot = Vt(5502);
    tt.exports = function(tt) {
      return Ot(this.__data__, tt) > -1
    }
  },
  5535: (tt, et, Vt) => {
    var Ot = Vt(5502);
    tt.exports = function(tt, et) {
      var Vt = this.__data__,
        qt = Ot(Vt, tt);
      return qt < 0 ? (++this.size, Vt.push([tt, et])) : Vt[qt][1] = et, this
    }
  },
  5412: (tt, et, Vt) => {
    var Ot = Vt(5415),
      qt = Vt(5484),
      Dt = Vt(5539);
    tt.exports = function() {
      this.size = 0, this.__data__ = {
        hash: new Ot,
        map: new(Dt || qt),
        string: new Ot
      }
    }
  },
  5544: (tt, et, Vt) => {
    var Ot = Vt(5549);
    tt.exports = function(tt) {
      var et = Ot(this, tt).delete(tt);
      return this.size -= et ? 1 : 0, et
    }
  },
  5564: (tt, et, Vt) => {
    var Ot = Vt(5549);
    tt.exports = function(tt) {
      return Ot(this, tt).get(tt)
    }
  },
  5572: (tt, et, Vt) => {
    var Ot = Vt(5549);
    tt.exports = function(tt) {
      return Ot(this, tt).has(tt)
    }
  },
  5581: (tt, et, Vt) => {
    var Ot = Vt(5549);
    tt.exports = function(tt, et) {
      var Vt = Ot(this, tt),
        qt = Vt.size;
      return Vt.set(tt, et), this.size += Vt.size == qt ? 0 : 1, this
    }
  },
  5845: tt => {
    tt.exports = function(tt) {
      var et = -1,
        Vt = Array(tt.size);
      return tt.forEach((function(tt, Ot) {
        Vt[++et] = [Ot, tt]
      })), Vt
    }
  },
  5998: tt => {
    tt.exports = function(tt, et) {
      return function(Vt) {
        return null != Vt && (Vt[tt] === et && (void 0 !== et || tt in Object(Vt)))
      }
    }
  },
  5399: (tt, et, Vt) => {
    var Ot = Vt(5403);
    tt.exports = function(tt) {
      var et = Ot(tt, (function(tt) {
          return 500 === Vt.size && Vt.clear(), tt
        })),
        Vt = et.cache;
      return et
    }
  },
  5429: (tt, et, Vt) => {
    var Ot = Vt(5432)(Object, "create");
    tt.exports = Ot
  },
  5953: (tt, et, Vt) => {
    var Ot = Vt(5957)(Object.keys, Object);
    tt.exports = Ot
  },
  5929: (tt, et, Vt) => {
    tt = Vt.nmd(tt);
    var Ot = Vt(5292),
      qt = et && !et.nodeType && et,
      Dt = qt && tt && !tt.nodeType && tt,
      mt = Dt && Dt.exports === qt && Ot.process,
      dt = function() {
        try {
          var tt = Dt && Dt.require && Dt.require("util").types;
          return tt || mt && mt.binding && mt.binding("util")
        } catch (et) {}
      }();
    tt.exports = dt
  },
  5334: tt => {
    var et = Object.prototype.toString;
    tt.exports = function(tt) {
      return et.call(tt)
    }
  },
  5957: tt => {
    tt.exports = function(tt, et) {
      return function(Vt) {
        return tt(et(Vt))
      }
    }
  },
  6101: (tt, et, Vt) => {
    var Ot = Vt(6103),
      qt = Math.max;
    tt.exports = function(tt, et, Vt) {
      return et = qt(void 0 === et ? tt.length - 1 : et, 0),
        function() {
          for (var Dt = arguments, mt = -1, dt = qt(Dt.length - et, 0), jt = Array(dt); ++mt < dt;) jt[mt] = Dt[et + mt];
          mt = -1;
          for (var Ht = Array(et + 1); ++mt < et;) Ht[mt] = Dt[mt];
          return Ht[et] = Vt(jt), Ot(tt, this, Ht)
        }
    }
  },
  5285: (tt, et, Vt) => {
    var Ot = Vt(5292),
      qt = "object" == typeof self && self && self.Object === Object && self,
      Dt = Ot || qt || Function("return this")();
    tt.exports = Dt
  },
  5808: tt => {
    tt.exports = function(tt) {
      return this.__data__.set(tt, "__lodash_hash_undefined__"), this
    }
  },
  5817: tt => {
    tt.exports = function(tt) {
      return this.__data__.has(tt)
    }
  },
  5852: tt => {
    tt.exports = function(tt) {
      var et = -1,
        Vt = Array(tt.size);
      return tt.forEach((function(tt) {
        Vt[++et] = tt
      })), Vt
    }
  },
  6110: (tt, et, Vt) => {
    var Ot = Vt(6113),
      qt = Vt(6128)(Ot);
    tt.exports = qt
  },
  6128: tt => {
    var et = Date.now;
    tt.exports = function(tt) {
      var Vt = 0,
        Ot = 0;
      return function() {
        var qt = et(),
          Dt = 16 - (qt - Ot);
        if (Ot = qt, Dt > 0) {
          if (++Vt >= 800) return arguments[0]
        } else Vt = 0;
        return tt.apply(void 0, arguments)
      }
    }
  },
  5759: (tt, et, Vt) => {
    var Ot = Vt(5484);
    tt.exports = function() {
      this.__data__ = new Ot, this.size = 0
    }
  },
  5764: tt => {
    tt.exports = function(tt) {
      var et = this.__data__,
        Vt = et.delete(tt);
      return this.size = et.size, Vt
    }
  },
  5770: tt => {
    tt.exports = function(tt) {
      return this.__data__.get(tt)
    }
  },
  5776: tt => {
    tt.exports = function(tt) {
      return this.__data__.has(tt)
    }
  },
  5784: (tt, et, Vt) => {
    var Ot = Vt(5484),
      qt = Vt(5539),
      Dt = Vt(5408);
    tt.exports = function(tt, et) {
      var Vt = this.__data__;
      if (Vt instanceof Ot) {
        var mt = Vt.__data__;
        if (!qt || mt.length < 199) return mt.push([tt, et]), this.size = ++Vt.size, this;
        Vt = this.__data__ = new Dt(mt)
      }
      return Vt.set(tt, et), this.size = Vt.size, this
    }
  },
  6198: tt => {
    tt.exports = function(tt, et, Vt) {
      for (var Ot = Vt - 1, qt = tt.length; ++Ot < qt;)
        if (tt[Ot] === et) return Ot;
      return -1
    }
  },
  6254: (tt, et, Vt) => {
    var Ot = Vt(6258),
      qt = Vt(6252),
      Dt = Vt(6262);
    tt.exports = function(tt) {
      return qt(tt) ? Dt(tt) : Ot(tt)
    }
  },
  5394: (tt, et, Vt) => {
    var Ot = Vt(5399),
      qt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      Dt = /\\(\\)?/g,
      mt = Ot((function(tt) {
        var et = [];
        return 46 === tt.charCodeAt(0) && et.push(""), tt.replace(qt, (function(tt, Vt, Ot, qt) {
          et.push(Ot ? qt.replace(Dt, "$1") : Vt || tt)
        })), et
      }));
    tt.exports = mt
  },
  5599: (tt, et, Vt) => {
    var Ot = Vt(5305);
    tt.exports = function(tt) {
      if ("string" == typeof tt || Ot(tt)) return tt;
      var et = tt + "";
      return "0" == et && 1 / tt == -1 / 0 ? "-0" : et
    }
  },
  5454: tt => {
    var et = Function.prototype.toString;
    tt.exports = function(tt) {
      if (null != tt) {
        try {
          return et.call(tt)
        } catch (Vt) {}
        try {
          return tt + ""
        } catch (Vt) {}
      }
      return ""
    }
  },
  5302: tt => {
    var et = /\s/;
    tt.exports = function(tt) {
      for (var Vt = tt.length; Vt-- && et.test(tt.charAt(Vt)););
      return Vt
    }
  },
  6262: tt => {
    var et = "\\ud800-\\udfff",
      Vt = "[" + et + "]",
      Ot = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
      qt = "\\ud83c[\\udffb-\\udfff]",
      Dt = "[^" + et + "]",
      mt = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      dt = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      jt = "(?:" + Ot + "|" + qt + ")" + "?",
      Ht = "[\\ufe0e\\ufe0f]?",
      Xt = Ht + jt + ("(?:\\u200d(?:" + [Dt, mt, dt].join("|") + ")" + Ht + jt + ")*"),
      Qt = "(?:" + [Dt + Ot + "?", Ot, mt, dt, Vt].join("|") + ")",
      lt = RegExp(qt + "(?=" + qt + ")|" + Qt + Xt, "g");
    tt.exports = function(tt) {
      return tt.match(lt) || []
    }
  },
  6117: tt => {
    tt.exports = function(tt) {
      return function() {
        return tt
      }
    }
  },
  5272: (tt, et, Vt) => {
    var Ot = Vt(5280),
      qt = Vt(5283),
      Dt = Vt(5296),
      mt = Math.max,
      dt = Math.min;
    tt.exports = function(tt, et, Vt) {
      var jt, Ht, Xt, Qt, lt, Et, ft = 0,
        wt = !1,
        yt = !1,
        Nt = !0;
      if ("function" != typeof tt) throw new TypeError("Expected a function");

      function Mt(et) {
        var Vt = jt,
          Ot = Ht;
        return jt = Ht = void 0, ft = et, Qt = tt.apply(Ot, Vt)
      }

      function bt(tt) {
        var Vt = tt - Et;
        return void 0 === Et || Vt >= et || Vt < 0 || yt && tt - ft >= Xt
      }

      function Jt() {
        var tt = qt();
        if (bt(tt)) return Ct(tt);
        lt = setTimeout(Jt, function(tt) {
          var Vt = et - (tt - Et);
          return yt ? dt(Vt, Xt - (tt - ft)) : Vt
        }(tt))
      }

      function Ct(tt) {
        return lt = void 0, Nt && jt ? Mt(tt) : (jt = Ht = void 0, Qt)
      }

      function ut() {
        var tt = qt(),
          Vt = bt(tt);
        if (jt = arguments, Ht = this, Et = tt, Vt) {
          if (void 0 === lt) return function(tt) {
            return ft = tt, lt = setTimeout(Jt, et), wt ? Mt(tt) : Qt
          }(Et);
          if (yt) return clearTimeout(lt), lt = setTimeout(Jt, et), Mt(Et)
        }
        return void 0 === lt && (lt = setTimeout(Jt, et)), Qt
      }
      return et = Dt(et) || 0, Ot(Vt) && (wt = !!Vt.leading, Xt = (yt = "maxWait" in Vt) ? mt(Dt(Vt.maxWait) || 0, et) : Xt, Nt = "trailing" in Vt ? !!Vt.trailing : Nt), ut.cancel = function() {
        void 0 !== lt && clearTimeout(lt), ft = 0, jt = Et = Ht = lt = void 0
      }, ut.flush = function() {
        return void 0 === lt ? Qt : Ct(qt())
      }, ut
    }
  },
  5509: tt => {
    tt.exports = function(tt, et) {
      return tt === et || tt !== tt && et !== et
    }
  },
  6436: (tt, et, Vt) => {
    var Ot = Vt(6439),
      qt = Vt(6445),
      Dt = Vt(5734),
      mt = Vt(5361),
      dt = Vt(5665);
    tt.exports = function(tt, et, Vt) {
      var jt = mt(tt) ? Ot : qt;
      return Vt && dt(tt, et, Vt) && (et = void 0), jt(tt, Dt(et, 3))
    }
  },
  6535: (tt, et, Vt) => {
    var Ot = Vt(6543)(Vt(6551));
    tt.exports = Ot
  },
  6551: (tt, et, Vt) => {
    var Ot = Vt(6189),
      qt = Vt(5734),
      Dt = Vt(6559),
      mt = Math.max;
    tt.exports = function(tt, et, Vt) {
      var dt = null == tt ? 0 : tt.length;
      if (!dt) return -1;
      var jt = null == Vt ? 0 : Dt(Vt);
      return jt < 0 && (jt = mt(dt + jt, 0)), Ot(tt, qt(et, 3), jt)
    }
  },
  6364: (tt, et, Vt) => {
    var Ot = Vt(5703),
      qt = Vt(6370);
    tt.exports = function(tt, et) {
      return Ot(qt(tt, et), 1)
    }
  },
  5374: (tt, et, Vt) => {
    var Ot = Vt(5376);
    tt.exports = function(tt, et, Vt) {
      var qt = null == tt ? void 0 : Ot(tt, et);
      return void 0 === qt ? Vt : qt
    }
  },
  6009: (tt, et, Vt) => {
    var Ot = Vt(6013),
      qt = Vt(6016);
    tt.exports = function(tt, et) {
      return null != tt && qt(tt, et, Ot)
    }
  },
  6018: tt => {
    tt.exports = function(tt) {
      return tt
    }
  },
  5718: (tt, et, Vt) => {
    var Ot = Vt(5726),
      qt = Vt(5341),
      Dt = Object.prototype,
      mt = Dt.hasOwnProperty,
      dt = Dt.propertyIsEnumerable,
      jt = Ot(function() {
        return arguments
      }()) ? Ot : function(tt) {
        return qt(tt) && mt.call(tt, "callee") && !dt.call(tt, "callee")
      };
    tt.exports = jt
  },
  5361: tt => {
    var et = Array.isArray;
    tt.exports = et
  },
  5674: (tt, et, Vt) => {
    var Ot = Vt(5436),
      qt = Vt(5676);
    tt.exports = function(tt) {
      return null != tt && qt(tt.length) && !Ot(tt)
    }
  },
  6493: (tt, et, Vt) => {
    var Ot = Vt(5313),
      qt = Vt(5341);
    tt.exports = function(tt) {
      return !0 === tt || !1 === tt || qt(tt) && "[object Boolean]" == Ot(tt)
    }
  },
  5902: (tt, et, Vt) => {
    tt = Vt.nmd(tt);
    var Ot = Vt(5285),
      qt = Vt(5904),
      Dt = et && !et.nodeType && et,
      mt = Dt && tt && !tt.nodeType && tt,
      dt = mt && mt.exports === Dt ? Ot.mf : void 0,
      jt = (dt ? dt.isBuffer : void 0) || qt;
    tt.exports = jt
  },
  6377: (tt, et, Vt) => {
    var Ot = Vt(5789);
    tt.exports = function(tt, et) {
      return Ot(tt, et)
    }
  },
  5436: (tt, et, Vt) => {
    var Ot = Vt(5313),
      qt = Vt(5280);
    tt.exports = function(tt) {
      if (!qt(tt)) return !1;
      var et = Ot(tt);
      return "[object Function]" == et || "[object GeneratorFunction]" == et || "[object AsyncFunction]" == et || "[object Proxy]" == et
    }
  },
  5676: tt => {
    tt.exports = function(tt) {
      return "number" == typeof tt && tt > -1 && tt % 1 == 0 && tt <= 9007199254740991
    }
  },
  5364: (tt, et, Vt) => {
    var Ot = Vt(5369);
    tt.exports = function(tt) {
      return Ot(tt) && tt != +tt
    }
  },
  5603: tt => {
    tt.exports = function(tt) {
      return null == tt
    }
  },
  5369: (tt, et, Vt) => {
    var Ot = Vt(5313),
      qt = Vt(5341);
    tt.exports = function(tt) {
      return "number" == typeof tt || qt(tt) && "[object Number]" == Ot(tt)
    }
  },
  5280: tt => {
    tt.exports = function(tt) {
      var et = typeof tt;
      return null != tt && ("object" == et || "function" == et)
    }
  },
  5341: tt => {
    tt.exports = function(tt) {
      return null != tt && "object" == typeof tt
    }
  },
  6483: (tt, et, Vt) => {
    var Ot = Vt(5313),
      qt = Vt(6489),
      Dt = Vt(5341),
      mt = Function.prototype,
      dt = Object.prototype,
      jt = mt.toString,
      Ht = dt.hasOwnProperty,
      Xt = jt.call(Object);
    tt.exports = function(tt) {
      if (!Dt(tt) || "[object Object]" != Ot(tt)) return !1;
      var et = qt(tt);
      if (null === et) return !0;
      var Vt = Ht.call(et, "constructor") && et.constructor;
      return "function" == typeof Vt && Vt instanceof Vt && jt.call(Vt) == Xt
    }
  },
  5357: (tt, et, Vt) => {
    var Ot = Vt(5313),
      qt = Vt(5361),
      Dt = Vt(5341);
    tt.exports = function(tt) {
      return "string" == typeof tt || !qt(tt) && Dt(tt) && "[object String]" == Ot(tt)
    }
  },
  5305: (tt, et, Vt) => {
    var Ot = Vt(5313),
      qt = Vt(5341);
    tt.exports = function(tt) {
      return "symbol" == typeof tt || qt(tt) && "[object Symbol]" == Ot(tt)
    }
  },
  5908: (tt, et, Vt) => {
    var Ot = Vt(5912),
      qt = Vt(5921),
      Dt = Vt(5929),
      mt = Dt && Dt.isTypedArray,
      dt = mt ? qt(mt) : Ot;
    tt.exports = dt
  },
  5890: (tt, et, Vt) => {
    var Ot = Vt(5894),
      qt = Vt(5938),
      Dt = Vt(5674);
    tt.exports = function(tt) {
      return Dt(tt) ? Ot(tt) : qt(tt)
    }
  },
  6469: tt => {
    tt.exports = function(tt) {
      var et = null == tt ? 0 : tt.length;
      return et ? tt[et - 1] : void 0
    }
  },
  6370: (tt, et, Vt) => {
    var Ot = Vt(5596),
      qt = Vt(5734),
      Dt = Vt(6041),
      mt = Vt(5361);
    tt.exports = function(tt, et) {
      return (mt(tt) ? Ot : Dt)(tt, qt(et, 3))
    }
  },
  6425: (tt, et, Vt) => {
    var Ot = Vt(6430),
      qt = Vt(6058),
      Dt = Vt(5734);
    tt.exports = function(tt, et) {
      var Vt = {};
      return et = Dt(et, 3), qt(tt, (function(tt, qt, Dt) {
        Ot(Vt, qt, et(tt, qt, Dt))
      })), Vt
    }
  },
  6340: (tt, et, Vt) => {
    var Ot = Vt(6349),
      qt = Vt(6357),
      Dt = Vt(6018);
    tt.exports = function(tt) {
      return tt && tt.length ? Ot(tt, Dt, qt) : void 0
    }
  },
  5403: (tt, et, Vt) => {
    var Ot = Vt(5408);

    function qt(tt, et) {
      if ("function" != typeof tt || null != et && "function" != typeof et) throw new TypeError("Expected a function");
      var Vt = function() {
        var Ot = arguments,
          qt = et ? et.apply(this, Ot) : Ot[0],
          Dt = Vt.cache;
        if (Dt.has(qt)) return Dt.get(qt);
        var mt = tt.apply(this, Ot);
        return Vt.cache = Dt.set(qt, mt) || Dt, mt
      };
      return Vt.cache = new(qt.Cache || Ot), Vt
    }
    qt.Cache = Ot, tt.exports = qt
  },
  6359: (tt, et, Vt) => {
    var Ot = Vt(6349),
      qt = Vt(6362),
      Dt = Vt(6018);
    tt.exports = function(tt) {
      return tt && tt.length ? Ot(tt, Dt, qt) : void 0
    }
  },
  6218: tt => {
    tt.exports = function() {}
  },
  5283: (tt, et, Vt) => {
    var Ot = Vt(5285);
    tt.exports = function() {
      return Ot.Date.now()
    }
  },
  6027: (tt, et, Vt) => {
    var Ot = Vt(6034),
      qt = Vt(6038),
      Dt = Vt(5389),
      mt = Vt(5599);
    tt.exports = function(tt) {
      return Dt(tt) ? Ot(mt(tt)) : qt(tt)
    }
  },
  5651: (tt, et, Vt) => {
    var Ot = Vt(5656)();
    tt.exports = Ot
  },
  6515: (tt, et, Vt) => {
    var Ot = Vt(5819),
      qt = Vt(5734),
      Dt = Vt(6523),
      mt = Vt(5361),
      dt = Vt(5665);
    tt.exports = function(tt, et, Vt) {
      var jt = mt(tt) ? Ot : Dt;
      return Vt && dt(tt, et, Vt) && (et = void 0), jt(tt, qt(et, 3))
    }
  },
  5696: (tt, et, Vt) => {
    var Ot = Vt(5703),
      qt = Vt(5730),
      Dt = Vt(6098),
      mt = Vt(5665),
      dt = Dt((function(tt, et) {
        if (null == tt) return [];
        var Vt = et.length;
        return Vt > 1 && mt(tt, et[0], et[1]) ? et = [] : Vt > 2 && mt(et[0], et[1], et[2]) && (et = [et[0]]), qt(tt, Ot(et, 1), [])
      }));
    tt.exports = dt
  },
  5881: tt => {
    tt.exports = function() {
      return []
    }
  },
  5904: tt => {
    tt.exports = function() {
      return !1
    }
  },
  5267: (tt, et, Vt) => {
    var Ot = Vt(5272),
      qt = Vt(5280);
    tt.exports = function(tt, et, Vt) {
      var Dt = !0,
        mt = !0;
      if ("function" != typeof tt) throw new TypeError("Expected a function");
      return qt(Vt) && (Dt = "leading" in Vt ? !!Vt.leading : Dt, mt = "trailing" in Vt ? !!Vt.trailing : mt), Ot(tt, et, {
        leading: Dt,
        maxWait: et,
        trailing: mt
      })
    }
  },
  5694: (tt, et, Vt) => {
    var Ot = Vt(5296),
      qt = 1 / 0;
    tt.exports = function(tt) {
      return tt ? (tt = Ot(tt)) === qt || tt === -1 / 0 ? 17976931348623157e292 * (tt < 0 ? -1 : 1) : tt === tt ? tt : 0 : 0 === tt ? tt : 0
    }
  },
  6559: (tt, et, Vt) => {
    var Ot = Vt(5694);
    tt.exports = function(tt) {
      var et = Ot(tt),
        Vt = et % 1;
      return et === et ? Vt ? et - Vt : et : 0
    }
  },
  5296: (tt, et, Vt) => {
    var Ot = Vt(5299),
      qt = Vt(5280),
      Dt = Vt(5305),
      mt = /^[-+]0x[0-9a-f]+$/i,
      dt = /^0b[01]+$/i,
      jt = /^0o[0-7]+$/i,
      Ht = parseInt;
    tt.exports = function(tt) {
      if ("number" == typeof tt) return tt;
      if (Dt(tt)) return NaN;
      if (qt(tt)) {
        var et = "function" == typeof tt.valueOf ? tt.valueOf() : tt;
        tt = qt(et) ? et + "" : et
      }
      if ("string" != typeof tt) return 0 === tt ? tt : +tt;
      tt = Ot(tt);
      var Vt = dt.test(tt);
      return Vt || jt.test(tt) ? Ht(tt.slice(2), Vt ? 2 : 8) : mt.test(tt) ? NaN : +tt
    }
  },
  5584: (tt, et, Vt) => {
    var Ot = Vt(5592);
    tt.exports = function(tt) {
      return null == tt ? "" : Ot(tt)
    }
  },
  6167: (tt, et, Vt) => {
    var Ot = Vt(5734),
      qt = Vt(6172);
    tt.exports = function(tt, et) {
      return tt && tt.length ? qt(tt, Ot(et, 2)) : []
    }
  },
  6231: (tt, et, Vt) => {
    var Ot = Vt(6238)("toUpperCase");
    tt.exports = Ot
  },
  6301: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => ke
    });
    var Ot = Vt(63),
      qt = Vt(5127),
      Dt = Vt.n(qt);
    const {
      getOwnPropertyNames: mt,
      getOwnPropertySymbols: dt
    } = Object, {
      hasOwnProperty: jt
    } = Object.prototype;

    function Ht(tt, et) {
      return function(Vt, Ot, qt) {
        return tt(Vt, Ot, qt) && et(Vt, Ot, qt)
      }
    }

    function Xt(tt) {
      return function(et, Vt, Ot) {
        if (!et || !Vt || "object" !== typeof et || "object" !== typeof Vt) return tt(et, Vt, Ot);
        const {
          cache: qt
        } = Ot, Dt = qt.get(et), mt = qt.get(Vt);
        if (Dt && mt) return Dt === Vt && mt === et;
        qt.set(et, Vt), qt.set(Vt, et);
        const dt = tt(et, Vt, Ot);
        return qt.delete(et), qt.delete(Vt), dt
      }
    }

    function Qt(tt) {
      return mt(tt).concat(dt(tt))
    }
    const lt = Object.hasOwn || ((tt, et) => jt.call(tt, et));

    function Et(tt, et) {
      return tt === et || !tt && !et && tt !== tt && et !== et
    }
    const {
      getOwnPropertyDescriptor: ft,
      keys: wt
    } = Object;

    function yt(tt, et) {
      return tt.byteLength === et.byteLength && Rt(new Uint8Array(tt), new Uint8Array(et))
    }

    function Nt(tt, et, Vt) {
      let Ot = tt.length;
      if (et.length !== Ot) return !1;
      for (; Ot-- > 0;)
        if (!Vt.equals(tt[Ot], et[Ot], Ot, Ot, tt, et, Vt)) return !1;
      return !0
    }

    function Mt(tt, et) {
      return tt.byteLength === et.byteLength && Rt(new Uint8Array(tt.buffer, tt.byteOffset, tt.byteLength), new Uint8Array(et.buffer, et.byteOffset, et.byteLength))
    }

    function bt(tt, et) {
      return Et(tt.getTime(), et.getTime())
    }

    function Jt(tt, et) {
      return tt.name === et.name && tt.message === et.message && tt.cause === et.cause && tt.stack === et.stack
    }

    function Ct(tt, et) {
      return tt === et
    }

    function ut(tt, et, Vt) {
      const Ot = tt.size;
      if (Ot !== et.size) return !1;
      if (!Ot) return !0;
      const qt = new Array(Ot),
        Dt = tt.entries();
      let mt, dt, jt = 0;
      for (;
        (mt = Dt.next()) && !mt.done;) {
        const Ot = et.entries();
        let Dt = !1,
          Ht = 0;
        for (;
          (dt = Ot.next()) && !dt.done;) {
          if (qt[Ht]) {
            Ht++;
            continue
          }
          const Ot = mt.value,
            Xt = dt.value;
          if (Vt.equals(Ot[0], Xt[0], jt, Ht, tt, et, Vt) && Vt.equals(Ot[1], Xt[1], Ot[0], Xt[0], tt, et, Vt)) {
            Dt = qt[Ht] = !0;
            break
          }
          Ht++
        }
        if (!Dt) return !1;
        jt++
      }
      return !0
    }
    const Kt = Et;

    function ht(tt, et, Vt) {
      const Ot = wt(tt);
      let qt = Ot.length;
      if (wt(et).length !== qt) return !1;
      for (; qt-- > 0;)
        if (!Pt(tt, et, Vt, Ot[qt])) return !1;
      return !0
    }

    function vt(tt, et, Vt) {
      const Ot = Qt(tt);
      let qt, Dt, mt, dt = Ot.length;
      if (Qt(et).length !== dt) return !1;
      for (; dt-- > 0;) {
        if (qt = Ot[dt], !Pt(tt, et, Vt, qt)) return !1;
        if (Dt = ft(tt, qt), mt = ft(et, qt), (Dt || mt) && (!Dt || !mt || Dt.configurable !== mt.configurable || Dt.enumerable !== mt.enumerable || Dt.writable !== mt.writable)) return !1
      }
      return !0
    }

    function Wt(tt, et) {
      return Et(tt.valueOf(), et.valueOf())
    }

    function St(tt, et) {
      return tt.source === et.source && tt.flags === et.flags
    }

    function ct(tt, et, Vt) {
      const Ot = tt.size;
      if (Ot !== et.size) return !1;
      if (!Ot) return !0;
      const qt = new Array(Ot),
        Dt = tt.values();
      let mt, dt;
      for (;
        (mt = Dt.next()) && !mt.done;) {
        const Ot = et.values();
        let Dt = !1,
          jt = 0;
        for (;
          (dt = Ot.next()) && !dt.done;) {
          if (!qt[jt] && Vt.equals(mt.value, dt.value, mt.value, dt.value, tt, et, Vt)) {
            Dt = qt[jt] = !0;
            break
          }
          jt++
        }
        if (!Dt) return !1
      }
      return !0
    }

    function Rt(tt, et) {
      let Vt = tt.byteLength;
      if (et.byteLength !== Vt || tt.byteOffset !== et.byteOffset) return !1;
      for (; Vt-- > 0;)
        if (tt[Vt] !== et[Vt]) return !1;
      return !0
    }

    function It(tt, et) {
      return tt.hostname === et.hostname && tt.pathname === et.pathname && tt.protocol === et.protocol && tt.port === et.port && tt.hash === et.hash && tt.username === et.username && tt.password === et.password
    }

    function Pt(tt, et, Vt, Ot) {
      return !("_owner" !== Ot && "__o" !== Ot && "__v" !== Ot || !tt.$$typeof && !et.$$typeof) || lt(et, Ot) && Vt.equals(tt[Ot], et[Ot], Ot, Ot, tt, et, Vt)
    }
    const Zt = {
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
      Lt = Object.prototype.toString;

    function Ft(tt) {
      let {
        areArrayBuffersEqual: et,
        areArraysEqual: Vt,
        areDataViewsEqual: Ot,
        areDatesEqual: qt,
        areErrorsEqual: Dt,
        areFunctionsEqual: mt,
        areMapsEqual: dt,
        areNumbersEqual: jt,
        areObjectsEqual: Ht,
        arePrimitiveWrappersEqual: Xt,
        areRegExpsEqual: Qt,
        areSetsEqual: lt,
        areTypedArraysEqual: Et,
        areUrlsEqual: ft,
        unknownTagComparators: wt
      } = tt;
      return function(tt, yt, Nt) {
        if (tt === yt) return !0;
        if (null == tt || null == yt) return !1;
        const Mt = typeof tt;
        if (Mt !== typeof yt) return !1;
        if ("object" !== Mt) return "number" === Mt ? jt(tt, yt, Nt) : "function" === Mt && mt(tt, yt, Nt);
        const bt = tt.constructor;
        if (bt !== yt.constructor) return !1;
        if (bt === Object) return Ht(tt, yt, Nt);
        if (Array.isArray(tt)) return Vt(tt, yt, Nt);
        if (bt === Date) return qt(tt, yt, Nt);
        if (bt === RegExp) return Qt(tt, yt, Nt);
        if (bt === Map) return dt(tt, yt, Nt);
        if (bt === Set) return lt(tt, yt, Nt);
        const Jt = Lt.call(tt);
        if ("[object Date]" === Jt) return qt(tt, yt, Nt);
        if ("[object RegExp]" === Jt) return Qt(tt, yt, Nt);
        if ("[object Map]" === Jt) return dt(tt, yt, Nt);
        if ("[object Set]" === Jt) return lt(tt, yt, Nt);
        if ("[object Object]" === Jt) return "function" !== typeof tt.then && "function" !== typeof yt.then && Ht(tt, yt, Nt);
        if ("[object URL]" === Jt) return ft(tt, yt, Nt);
        if ("[object Error]" === Jt) return Dt(tt, yt, Nt);
        if ("[object Arguments]" === Jt) return Ht(tt, yt, Nt);
        if (Zt[Jt]) return Et(tt, yt, Nt);
        if ("[object ArrayBuffer]" === Jt) return et(tt, yt, Nt);
        if ("[object DataView]" === Jt) return Ot(tt, yt, Nt);
        if ("[object Boolean]" === Jt || "[object Number]" === Jt || "[object String]" === Jt) return Xt(tt, yt, Nt);
        if (wt) {
          let et = wt[Jt];
          if (!et) {
            const Vt = null != (Ct = tt) ? Ct[Symbol.toStringTag] : void 0;
            Vt && (et = wt[Vt])
          }
          if (et) return et(tt, yt, Nt)
        }
        var Ct;
        return !1
      }
    }
    const kt = Gt();
    Gt({
      strict: !0
    }), Gt({
      circular: !0
    }), Gt({
      circular: !0,
      strict: !0
    }), Gt({
      createInternalComparator: () => Et
    }), Gt({
      strict: !0,
      createInternalComparator: () => Et
    }), Gt({
      circular: !0,
      createInternalComparator: () => Et
    }), Gt({
      circular: !0,
      createInternalComparator: () => Et,
      strict: !0
    });

    function Gt() {
      let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        circular: et = !1,
        createInternalComparator: Vt,
        createState: Ot,
        strict: qt = !1
      } = tt, Dt = function(tt) {
        let {
          circular: et,
          createCustomConfig: Vt,
          strict: Ot
        } = tt, qt = {
          areArrayBuffersEqual: yt,
          areArraysEqual: Ot ? vt : Nt,
          areDataViewsEqual: Mt,
          areDatesEqual: bt,
          areErrorsEqual: Jt,
          areFunctionsEqual: Ct,
          areMapsEqual: Ot ? Ht(ut, vt) : ut,
          areNumbersEqual: Kt,
          areObjectsEqual: Ot ? vt : ht,
          arePrimitiveWrappersEqual: Wt,
          areRegExpsEqual: St,
          areSetsEqual: Ot ? Ht(ct, vt) : ct,
          areTypedArraysEqual: Ot ? Ht(Rt, vt) : Rt,
          areUrlsEqual: It,
          unknownTagComparators: void 0
        };
        if (Vt && (qt = Object.assign({}, qt, Vt(qt))), et) {
          const tt = Xt(qt.areArraysEqual),
            et = Xt(qt.areMapsEqual),
            Vt = Xt(qt.areObjectsEqual),
            Ot = Xt(qt.areSetsEqual);
          qt = Object.assign({}, qt, {
            areArraysEqual: tt,
            areMapsEqual: et,
            areObjectsEqual: Vt,
            areSetsEqual: Ot
          })
        }
        return qt
      }(tt), mt = Ft(Dt);
      var dt;
      return function(tt) {
        let {
          circular: et,
          comparator: Vt,
          createState: Ot,
          equals: qt,
          strict: Dt
        } = tt;
        if (Ot) return function(tt, mt) {
          const {
            cache: dt = (et ? new WeakMap : void 0),
            meta: jt
          } = Ot();
          return Vt(tt, mt, {
            cache: dt,
            equals: qt,
            meta: jt,
            strict: Dt
          })
        };
        if (et) return function(tt, et) {
          return Vt(tt, et, {
            cache: new WeakMap,
            equals: qt,
            meta: void 0,
            strict: Dt
          })
        };
        const mt = {
          cache: void 0,
          equals: qt,
          meta: void 0,
          strict: Dt
        };
        return function(tt, et) {
          return Vt(tt, et, mt)
        }
      }({
        circular: et,
        comparator: mt,
        createState: Ot,
        equals: Vt ? Vt(mt) : (dt = mt, function(tt, et, Vt, Ot, qt, Dt, mt) {
          return dt(tt, et, mt)
        }),
        strict: qt
      })
    }

    function zt(tt) {
      var et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Vt = -1;
      requestAnimationFrame((function Ot(qt) {
        Vt < 0 && (Vt = qt), qt - Vt > et ? (tt(qt), Vt = -1) : function(tt) {
          "undefined" !== typeof requestAnimationFrame && requestAnimationFrame(tt)
        }(Ot)
      }))
    }

    function ot(tt) {
      return ot = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, ot(tt)
    }

    function rt(tt) {
      return function(tt) {
        if (Array.isArray(tt)) return tt
      }(tt) || function(tt) {
        if ("undefined" !== typeof Symbol && null != tt[Symbol.iterator] || null != tt["@@iterator"]) return Array.from(tt)
      }(tt) || function(tt, et) {
        if (!tt) return;
        if ("string" === typeof tt) return Ut(tt, et);
        var Vt = Object.prototype.toString.call(tt).slice(8, -1);
        "Object" === Vt && tt.constructor && (Vt = tt.constructor.name);
        if ("Map" === Vt || "Set" === Vt) return Array.from(tt);
        if ("Arguments" === Vt || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Vt)) return Ut(tt, et)
      }(tt) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Ut(tt, et) {
      (null == et || et > tt.length) && (et = tt.length);
      for (var Vt = 0, Ot = new Array(et); Vt < et; Vt++) Ot[Vt] = tt[Vt];
      return Ot
    }

    function At() {
      var tt = function() {
          return null
        },
        et = !1,
        Vt = function Vt(Ot) {
          if (!et) {
            if (Array.isArray(Ot)) {
              if (!Ot.length) return;
              var qt = rt(Ot),
                Dt = qt[0],
                mt = qt.slice(1);
              return "number" === typeof Dt ? void zt(Vt.bind(null, mt), Dt) : (Vt(Dt), void zt(Vt.bind(null, mt)))
            }
            "object" === ot(Ot) && tt(Ot), "function" === typeof Ot && Ot()
          }
        };
      return {
        stop: function() {
          et = !0
        },
        start: function(tt) {
          et = !1, Vt(tt)
        },
        subscribe: function(et) {
          return tt = et,
            function() {
              tt = function() {
                return null
              }
            }
        }
      }
    }

    function it(tt) {
      return it = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, it(tt)
    }

    function Yt(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function Bt(tt) {
      for (var et = 1; et < arguments.length; et++) {
        var Vt = null != arguments[et] ? arguments[et] : {};
        et % 2 ? Yt(Object(Vt), !0).forEach((function(et) {
          pt(tt, et, Vt[et])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : Yt(Object(Vt)).forEach((function(et) {
          Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
        }))
      }
      return tt
    }

    function pt(tt, et, Vt) {
      return (et = function(tt) {
        var et = function(tt, et) {
          if ("object" !== it(tt) || null === tt) return tt;
          var Vt = tt[Symbol.toPrimitive];
          if (void 0 !== Vt) {
            var Ot = Vt.call(tt, et || "default");
            if ("object" !== it(Ot)) return Ot;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === et ? String : Number)(tt)
        }(tt, "string");
        return "symbol" === it(et) ? et : String(et)
      }(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }
    var xt = function(tt) {
        return tt
      },
      Tt = function(tt, et) {
        return Object.keys(et).reduce((function(Vt, Ot) {
          return Bt(Bt({}, Vt), {}, pt({}, Ot, tt(Ot, et[Ot])))
        }), {})
      },
      gt = function(tt, et, Vt) {
        return tt.map((function(tt) {
          return "".concat((Ot = tt, Ot.replace(/([A-Z])/g, (function(tt) {
            return "-".concat(tt.toLowerCase())
          }))), " ").concat(et, "ms ").concat(Vt);
          var Ot
        })).join(",")
      };

    function st(tt, et) {
      return function(tt) {
        if (Array.isArray(tt)) return tt
      }(tt) || function(tt, et) {
        var Vt = null == tt ? null : "undefined" != typeof Symbol && tt[Symbol.iterator] || tt["@@iterator"];
        if (null != Vt) {
          var Ot, qt, Dt, mt, dt = [],
            jt = !0,
            Ht = !1;
          try {
            if (Dt = (Vt = Vt.call(tt)).next, 0 === et) {
              if (Object(Vt) !== Vt) return;
              jt = !1
            } else
              for (; !(jt = (Ot = Dt.call(Vt)).done) && (dt.push(Ot.value), dt.length !== et); jt = !0);
          } catch (tt) {
            Ht = !0, qt = tt
          } finally {
            try {
              if (!jt && null != Vt.return && (mt = Vt.return(), Object(mt) !== mt)) return
            } finally {
              if (Ht) throw qt
            }
          }
          return dt
        }
      }(tt, et) || te(tt, et) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function nt(tt) {
      return function(tt) {
        if (Array.isArray(tt)) return ee(tt)
      }(tt) || function(tt) {
        if ("undefined" !== typeof Symbol && null != tt[Symbol.iterator] || null != tt["@@iterator"]) return Array.from(tt)
      }(tt) || te(tt) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function te(tt, et) {
      if (tt) {
        if ("string" === typeof tt) return ee(tt, et);
        var Vt = Object.prototype.toString.call(tt).slice(8, -1);
        return "Object" === Vt && tt.constructor && (Vt = tt.constructor.name), "Map" === Vt || "Set" === Vt ? Array.from(tt) : "Arguments" === Vt || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Vt) ? ee(tt, et) : void 0
      }
    }

    function ee(tt, et) {
      (null == et || et > tt.length) && (et = tt.length);
      for (var Vt = 0, Ot = new Array(et); Vt < et; Vt++) Ot[Vt] = tt[Vt];
      return Ot
    }
    var Ve = 1e-4,
      Oe = function(tt, et) {
        return [0, 3 * tt, 3 * et - 6 * tt, 3 * tt - 3 * et + 1]
      },
      qe = function(tt, et) {
        return tt.map((function(tt, Vt) {
          return tt * Math.pow(et, Vt)
        })).reduce((function(tt, et) {
          return tt + et
        }))
      },
      De = function(tt, et) {
        return function(Vt) {
          var Ot = Oe(tt, et);
          return qe(Ot, Vt)
        }
      },
      me = function() {
        for (var tt = arguments.length, et = new Array(tt), Vt = 0; Vt < tt; Vt++) et[Vt] = arguments[Vt];
        var Ot = et[0],
          qt = et[1],
          Dt = et[2],
          mt = et[3];
        if (1 === et.length) switch (et[0]) {
          case "linear":
            Ot = 0, qt = 0, Dt = 1, mt = 1;
            break;
          case "ease":
            Ot = .25, qt = .1, Dt = .25, mt = 1;
            break;
          case "ease-in":
            Ot = .42, qt = 0, Dt = 1, mt = 1;
            break;
          case "ease-out":
            Ot = .42, qt = 0, Dt = .58, mt = 1;
            break;
          case "ease-in-out":
            Ot = 0, qt = 0, Dt = .58, mt = 1;
            break;
          default:
            var dt = et[0].split("(");
            if ("cubic-bezier" === dt[0] && 4 === dt[1].split(")")[0].split(",").length) {
              var jt = st(dt[1].split(")")[0].split(",").map((function(tt) {
                return parseFloat(tt)
              })), 4);
              Ot = jt[0], qt = jt[1], Dt = jt[2], mt = jt[3]
            }
        } [Ot, Dt, qt, mt].every((function(tt) {
          return "number" === typeof tt && tt >= 0 && tt <= 1
        }));
        var Ht, Xt, Qt = De(Ot, Dt),
          lt = De(qt, mt),
          Et = (Ht = Ot, Xt = Dt, function(tt) {
            var et = Oe(Ht, Xt),
              Vt = [].concat(nt(et.map((function(tt, et) {
                return tt * et
              })).slice(1)), [0]);
            return qe(Vt, tt)
          }),
          ft = function(tt) {
            for (var et, Vt = tt > 1 ? 1 : tt, Ot = Vt, qt = 0; qt < 8; ++qt) {
              var Dt = Qt(Ot) - Vt,
                mt = Et(Ot);
              if (Math.abs(Dt - Vt) < Ve || mt < Ve) return lt(Ot);
              Ot = (et = Ot - Dt / mt) > 1 ? 1 : et < 0 ? 0 : et
            }
            return lt(Ot)
          };
        return ft.isStepper = !1, ft
      },
      de = function() {
        for (var tt = arguments.length, et = new Array(tt), Vt = 0; Vt < tt; Vt++) et[Vt] = arguments[Vt];
        var Ot = et[0];
        if ("string" === typeof Ot) switch (Ot) {
          case "ease":
          case "ease-in-out":
          case "ease-out":
          case "ease-in":
          case "linear":
            return me(Ot);
          case "spring":
            return function() {
              var tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                et = tt.stiff,
                Vt = void 0 === et ? 100 : et,
                Ot = tt.damping,
                qt = void 0 === Ot ? 8 : Ot,
                Dt = tt.dt,
                mt = void 0 === Dt ? 17 : Dt,
                dt = function(tt, et, Ot) {
                  var Dt = Ot + (-(tt - et) * Vt - Ot * qt) * mt / 1e3,
                    dt = Ot * mt / 1e3 + tt;
                  return Math.abs(dt - et) < Ve && Math.abs(Dt) < Ve ? [et, 0] : [dt, Dt]
                };
              return dt.isStepper = !0, dt.dt = mt, dt
            }();
          default:
            if ("cubic-bezier" === Ot.split("(")[0]) return me(Ot)
        }
        return "function" === typeof Ot ? Ot : null
      };

    function je(tt) {
      return je = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, je(tt)
    }

    function He(tt) {
      return function(tt) {
        if (Array.isArray(tt)) return we(tt)
      }(tt) || function(tt) {
        if ("undefined" !== typeof Symbol && null != tt[Symbol.iterator] || null != tt["@@iterator"]) return Array.from(tt)
      }(tt) || fe(tt) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Xe(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function Qe(tt) {
      for (var et = 1; et < arguments.length; et++) {
        var Vt = null != arguments[et] ? arguments[et] : {};
        et % 2 ? Xe(Object(Vt), !0).forEach((function(et) {
          le(tt, et, Vt[et])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : Xe(Object(Vt)).forEach((function(et) {
          Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
        }))
      }
      return tt
    }

    function le(tt, et, Vt) {
      return (et = function(tt) {
        var et = function(tt, et) {
          if ("object" !== je(tt) || null === tt) return tt;
          var Vt = tt[Symbol.toPrimitive];
          if (void 0 !== Vt) {
            var Ot = Vt.call(tt, et || "default");
            if ("object" !== je(Ot)) return Ot;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === et ? String : Number)(tt)
        }(tt, "string");
        return "symbol" === je(et) ? et : String(et)
      }(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }

    function Ee(tt, et) {
      return function(tt) {
        if (Array.isArray(tt)) return tt
      }(tt) || function(tt, et) {
        var Vt = null == tt ? null : "undefined" != typeof Symbol && tt[Symbol.iterator] || tt["@@iterator"];
        if (null != Vt) {
          var Ot, qt, Dt, mt, dt = [],
            jt = !0,
            Ht = !1;
          try {
            if (Dt = (Vt = Vt.call(tt)).next, 0 === et) {
              if (Object(Vt) !== Vt) return;
              jt = !1
            } else
              for (; !(jt = (Ot = Dt.call(Vt)).done) && (dt.push(Ot.value), dt.length !== et); jt = !0);
          } catch (tt) {
            Ht = !0, qt = tt
          } finally {
            try {
              if (!jt && null != Vt.return && (mt = Vt.return(), Object(mt) !== mt)) return
            } finally {
              if (Ht) throw qt
            }
          }
          return dt
        }
      }(tt, et) || fe(tt, et) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function fe(tt, et) {
      if (tt) {
        if ("string" === typeof tt) return we(tt, et);
        var Vt = Object.prototype.toString.call(tt).slice(8, -1);
        return "Object" === Vt && tt.constructor && (Vt = tt.constructor.name), "Map" === Vt || "Set" === Vt ? Array.from(tt) : "Arguments" === Vt || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Vt) ? we(tt, et) : void 0
      }
    }

    function we(tt, et) {
      (null == et || et > tt.length) && (et = tt.length);
      for (var Vt = 0, Ot = new Array(et); Vt < et; Vt++) Ot[Vt] = tt[Vt];
      return Ot
    }
    var ye = function(tt, et, Vt) {
        return tt + (et - tt) * Vt
      },
      Ne = function(tt) {
        return tt.from !== tt.to
      },
      ae = function tt(et, Vt, Ot) {
        var qt = Tt((function(tt, Vt) {
          if (Ne(Vt)) {
            var Ot = Ee(et(Vt.from, Vt.to, Vt.Dy), 2),
              qt = Ot[0],
              Dt = Ot[1];
            return Qe(Qe({}, Vt), {}, {
              from: qt,
              Dy: Dt
            })
          }
          return Vt
        }), Vt);
        return Ot < 1 ? Tt((function(tt, et) {
          return Ne(et) ? Qe(Qe({}, et), {}, {
            Dy: ye(et.Dy, qt[tt].Dy, Ot),
            from: ye(et.from, qt[tt].from, Ot)
          }) : et
        }), Vt) : tt(et, qt, Ot - 1)
      };
    const Me = function(tt, et, Vt, Ot, qt) {
      var Dt, mt, dt, jt, Ht = (Dt = tt, mt = et, [Object.keys(Dt), Object.keys(mt)].reduce((function(tt, et) {
          return tt.filter((function(tt) {
            return et.includes(tt)
          }))
        }))),
        Xt = Ht.reduce((function(Vt, Ot) {
          return Qe(Qe({}, Vt), {}, le({}, Ot, [tt[Ot], et[Ot]]))
        }), {}),
        Qt = Ht.reduce((function(Vt, Ot) {
          return Qe(Qe({}, Vt), {}, le({}, Ot, {
            from: tt[Ot],
            Dy: 0,
            to: et[Ot]
          }))
        }), {}),
        lt = -1,
        Et = function() {
          return null
        };
      return Et = Vt.isStepper ? function(Ot) {
          dt || (dt = Ot);
          var Dt = (Ot - dt) / Vt.dt;
          Qt = ae(Vt, Qt, Dt), qt(Qe(Qe(Qe({}, tt), et), Tt((function(tt, et) {
            return et.from
          }), Qt))), dt = Ot, Object.values(Qt).filter(Ne).length && (lt = requestAnimationFrame(Et))
        } : function(Dt) {
          jt || (jt = Dt);
          var mt = (Dt - jt) / Ot,
            dt = Tt((function(tt, et) {
              return ye.apply(void 0, He(et).concat([Vt(mt)]))
            }), Xt);
          if (qt(Qe(Qe(Qe({}, tt), et), dt)), mt < 1) lt = requestAnimationFrame(Et);
          else {
            var Ht = Tt((function(tt, et) {
              return ye.apply(void 0, He(et).concat([Vt(1)]))
            }), Xt);
            qt(Qe(Qe(Qe({}, tt), et), Ht))
          }
        },
        function() {
          return requestAnimationFrame(Et),
            function() {
              cancelAnimationFrame(lt)
            }
        }
    };

    function be(tt) {
      return be = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, be(tt)
    }
    var Je = ["children", "XE", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];

    function Ce(tt, et) {
      if (null == tt) return {};
      var Vt, Ot, qt = function(tt, et) {
        if (null == tt) return {};
        var Vt, Ot, qt = {},
          Dt = Object.keys(tt);
        for (Ot = 0; Ot < Dt.length; Ot++) Vt = Dt[Ot], et.indexOf(Vt) >= 0 || (qt[Vt] = tt[Vt]);
        return qt
      }(tt, et);
      if (Object.getOwnPropertySymbols) {
        var Dt = Object.getOwnPropertySymbols(tt);
        for (Ot = 0; Ot < Dt.length; Ot++) Vt = Dt[Ot], et.indexOf(Vt) >= 0 || Object.prototype.propertyIsEnumerable.call(tt, Vt) && (qt[Vt] = tt[Vt])
      }
      return qt
    }

    function ue(tt) {
      return function(tt) {
        if (Array.isArray(tt)) return Ke(tt)
      }(tt) || function(tt) {
        if ("undefined" !== typeof Symbol && null != tt[Symbol.iterator] || null != tt["@@iterator"]) return Array.from(tt)
      }(tt) || function(tt, et) {
        if (!tt) return;
        if ("string" === typeof tt) return Ke(tt, et);
        var Vt = Object.prototype.toString.call(tt).slice(8, -1);
        "Object" === Vt && tt.constructor && (Vt = tt.constructor.name);
        if ("Map" === Vt || "Set" === Vt) return Array.from(tt);
        if ("Arguments" === Vt || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Vt)) return Ke(tt, et)
      }(tt) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Ke(tt, et) {
      (null == et || et > tt.length) && (et = tt.length);
      for (var Vt = 0, Ot = new Array(et); Vt < et; Vt++) Ot[Vt] = tt[Vt];
      return Ot
    }

    function he(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function ve(tt) {
      for (var et = 1; et < arguments.length; et++) {
        var Vt = null != arguments[et] ? arguments[et] : {};
        et % 2 ? he(Object(Vt), !0).forEach((function(et) {
          We(tt, et, Vt[et])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : he(Object(Vt)).forEach((function(et) {
          Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
        }))
      }
      return tt
    }

    function We(tt, et, Vt) {
      return (et = ce(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }

    function Se(tt, et) {
      for (var Vt = 0; Vt < et.length; Vt++) {
        var Ot = et[Vt];
        Ot.enumerable = Ot.enumerable || !1, Ot.configurable = !0, "value" in Ot && (Ot.writable = !0), Object.defineProperty(tt, ce(Ot.key), Ot)
      }
    }

    function ce(tt) {
      var et = function(tt, et) {
        if ("object" !== be(tt) || null === tt) return tt;
        var Vt = tt[Symbol.toPrimitive];
        if (void 0 !== Vt) {
          var Ot = Vt.call(tt, et || "default");
          if ("object" !== be(Ot)) return Ot;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === et ? String : Number)(tt)
      }(tt, "string");
      return "symbol" === be(et) ? et : String(et)
    }

    function Re(tt, et) {
      return Re = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(tt, et) {
        return tt.__proto__ = et, tt
      }, Re(tt, et)
    }

    function Ie(tt) {
      var et = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (tt) {
          return !1
        }
      }();
      return function() {
        var Vt, Ot = Le(tt);
        if (et) {
          var qt = Le(this).constructor;
          Vt = Reflect.construct(Ot, arguments, qt)
        } else Vt = Ot.apply(this, arguments);
        return Pe(this, Vt)
      }
    }

    function Pe(tt, et) {
      if (et && ("object" === be(et) || "function" === typeof et)) return et;
      if (void 0 !== et) throw new TypeError("Derived constructors may only return object or undefined");
      return Ze(tt)
    }

    function Ze(tt) {
      if (void 0 === tt) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return tt
    }

    function Le(tt) {
      return Le = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(tt) {
        return tt.__proto__ || Object.getPrototypeOf(tt)
      }, Le(tt)
    }
    var Fe = function(tt) {
      ! function(tt, et) {
        if ("function" !== typeof et && null !== et) throw new TypeError("Super expression must either be null or a function");
        tt.prototype = Object.create(et && et.prototype, {
          constructor: {
            value: tt,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(tt, "prototype", {
          writable: !1
        }), et && Re(tt, et)
      }(mt, tt);
      var et, Vt, qt, Dt = Ie(mt);

      function mt(tt, et) {
        var Vt;
        ! function(tt, et) {
          if (!(tt instanceof et)) throw new TypeError("Cannot call a class as a function")
        }(this, mt);
        var Ot = (Vt = Dt.call(this, tt, et)).props,
          qt = Ot.isActive,
          dt = Ot.attributeName,
          jt = Ot.from,
          Ht = Ot.to,
          Xt = Ot.steps,
          Qt = Ot.children,
          lt = Ot.duration;
        if (Vt.handleStyleChange = Vt.handleStyleChange.bind(Ze(Vt)), Vt.changeStyle = Vt.changeStyle.bind(Ze(Vt)), !qt || lt <= 0) return Vt.state = {
          style: {}
        }, "function" === typeof Qt && (Vt.state = {
          style: Ht
        }), Pe(Vt);
        if (Xt && Xt.length) Vt.state = {
          style: Xt[0].style
        };
        else if (jt) {
          if ("function" === typeof Qt) return Vt.state = {
            style: jt
          }, Pe(Vt);
          Vt.state = {
            style: dt ? We({}, dt, jt) : jt
          }
        } else Vt.state = {
          style: {}
        };
        return Vt
      }
      return et = mt, (Vt = [{
        key: "componentDidMount",
        value: function() {
          var tt = this.props,
            et = tt.isActive,
            Vt = tt.canBegin;
          this.mounted = !0, et && Vt && this.runAnimation(this.props)
        }
      }, {
        key: "componentDidUpdate",
        value: function(tt) {
          var et = this.props,
            Vt = et.isActive,
            Ot = et.canBegin,
            qt = et.attributeName,
            Dt = et.shouldReAnimate,
            mt = et.to,
            dt = et.from,
            jt = this.state.style;
          if (Ot)
            if (Vt) {
              if (!(kt(tt.to, mt) && tt.canBegin && tt.isActive)) {
                var Ht = !tt.canBegin || !tt.isActive;
                this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
                var Xt = Ht || Dt ? dt : tt.to;
                if (this.state && jt) {
                  var Qt = {
                    style: qt ? We({}, qt, Xt) : Xt
                  };
                  (qt && jt[qt] !== Xt || !qt && jt !== Xt) && this.setState(Qt)
                }
                this.runAnimation(ve(ve({}, this.props), {}, {
                  from: Xt,
                  XE: 0
                }))
              }
            } else {
              var lt = {
                style: qt ? We({}, qt, mt) : mt
              };
              this.state && jt && (qt && jt[qt] !== mt || !qt && jt !== mt) && this.setState(lt)
            }
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          this.mounted = !1;
          var tt = this.props.onAnimationEnd;
          this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), tt && tt()
        }
      }, {
        key: "handleStyleChange",
        value: function(tt) {
          this.changeStyle(tt)
        }
      }, {
        key: "changeStyle",
        value: function(tt) {
          this.mounted && this.setState({
            style: tt
          })
        }
      }, {
        key: "runJSAnimation",
        value: function(tt) {
          var et = this,
            Vt = tt.from,
            Ot = tt.to,
            qt = tt.duration,
            Dt = tt.easing,
            mt = tt.XE,
            dt = tt.onAnimationEnd,
            jt = tt.onAnimationStart,
            Ht = Me(Vt, Ot, de(Dt), qt, this.changeStyle);
          this.manager.start([jt, mt, function() {
            et.stopJSAnimation = Ht()
          }, qt, dt])
        }
      }, {
        key: "runStepAnimation",
        value: function(tt) {
          var et = this,
            Vt = tt.steps,
            Ot = tt.XE,
            qt = tt.onAnimationStart,
            Dt = Vt[0],
            mt = Dt.style,
            dt = Dt.duration,
            jt = void 0 === dt ? 0 : dt;
          return this.manager.start([qt].concat(ue(Vt.reduce((function(tt, Ot, qt) {
            if (0 === qt) return tt;
            var Dt = Ot.duration,
              mt = Ot.easing,
              dt = void 0 === mt ? "ease" : mt,
              jt = Ot.style,
              Ht = Ot.properties,
              Xt = Ot.onAnimationEnd,
              Qt = qt > 0 ? Vt[qt - 1] : Ot,
              lt = Ht || Object.keys(jt);
            if ("function" === typeof dt || "spring" === dt) return [].concat(ue(tt), [et.runJSAnimation.bind(et, {
              from: Qt.style,
              to: jt,
              duration: Dt,
              easing: dt
            }), Dt]);
            var Et = gt(lt, Dt, dt),
              ft = ve(ve(ve({}, Qt.style), jt), {}, {
                transition: Et
              });
            return [].concat(ue(tt), [ft, Dt, Xt]).filter(xt)
          }), [mt, Math.max(jt, Ot)])), [tt.onAnimationEnd]))
        }
      }, {
        key: "runAnimation",
        value: function(tt) {
          this.manager || (this.manager = At());
          var et = tt.XE,
            Vt = tt.duration,
            Ot = tt.attributeName,
            qt = tt.to,
            Dt = tt.easing,
            mt = tt.onAnimationStart,
            dt = tt.onAnimationEnd,
            jt = tt.steps,
            Ht = tt.children,
            Xt = this.manager;
          if (this.unSubscribe = Xt.subscribe(this.handleStyleChange), "function" !== typeof Dt && "function" !== typeof Ht && "spring" !== Dt)
            if (jt.length > 1) this.runStepAnimation(tt);
            else {
              var Qt = Ot ? We({}, Ot, qt) : qt,
                lt = gt(Object.keys(Qt), Vt, Dt);
              Xt.start([mt, et, ve(ve({}, Qt), {}, {
                transition: lt
              }), Vt, dt])
            }
          else this.runJSAnimation(tt)
        }
      }, {
        key: "render",
        value: function() {
          var tt = this.props,
            et = tt.children,
            Vt = (tt.XE, tt.duration),
            qt = (tt.attributeName, tt.easing, tt.isActive),
            Dt = (tt.steps, tt.from, tt.to, tt.canBegin, tt.onAnimationEnd, tt.shouldReAnimate, tt.onAnimationReStart, Ce(tt, Je)),
            mt = Ot.Children.count(et),
            dt = this.state.style;
          if ("function" === typeof et) return et(dt);
          if (!qt || 0 === mt || Vt <= 0) return et;
          var jt = function(tt) {
            var et = tt.props,
              Vt = et.style,
              qt = void 0 === Vt ? {} : Vt,
              mt = et.className;
            return (0, Ot.cloneElement)(tt, ve(ve({}, Dt), {}, {
              style: ve(ve({}, qt), dt),
              className: mt
            }))
          };
          return 1 === mt ? jt(Ot.Children.only(et)) : Ot.createElement("div", null, Ot.Children.map(et, (function(tt) {
            return jt(tt)
          })))
        }
      }]) && Se(et.prototype, Vt), qt && Se(et, qt), Object.defineProperty(et, "prototype", {
        writable: !1
      }), mt
    }(Ot.PureComponent);
    Fe.displayName = "Animate", Fe.defaultProps = {
      XE: 0,
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
    }, Fe.propTypes = {
      from: Dt().oneOfType([Dt().object, Dt().string]),
      to: Dt().oneOfType([Dt().object, Dt().string]),
      attributeName: Dt().string,
      duration: Dt().number,
      XE: Dt().number,
      easing: Dt().oneOfType([Dt().string, Dt().func]),
      steps: Dt().arrayOf(Dt().shape({
        duration: Dt().number.isRequired,
        style: Dt().object.isRequired,
        easing: Dt().oneOfType([Dt().oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), Dt().func]),
        properties: Dt().arrayOf("string"),
        onAnimationEnd: Dt().func
      })),
      children: Dt().oneOfType([Dt().node, Dt().func]),
      isActive: Dt().bool,
      canBegin: Dt().bool,
      onAnimationEnd: Dt().func,
      shouldReAnimate: Dt().bool,
      onAnimationStart: Dt().func,
      onAnimationReStart: Dt().func
    };
    const ke = Fe
  },
  6568: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => rt
    });
    var Ot, qt = Vt(63),
      Dt = Vt(5263),
      mt = Vt(6301),
      dt = Vt(5436),
      jt = Vt.n(dt),
      Ht = Vt(6340),
      Xt = Vt.n(Ht),
      Qt = Vt(5603),
      lt = Vt.n(Qt),
      Et = Vt(5364),
      ft = Vt.n(Et),
      wt = Vt(6377),
      yt = Vt.n(wt),
      Nt = Vt(6565),
      Mt = Vt(6287),
      bt = Vt(6140),
      Jt = Vt(6461),
      Ct = Vt(6155),
      ut = Vt(5348),
      Kt = Vt(6317),
      ht = Vt(5614),
      vt = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
      Wt = ["key"];

    function St(tt) {
      return St = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, St(tt)
    }

    function ct(tt, et) {
      if (null == tt) return {};
      var Vt, Ot, qt = function(tt, et) {
        if (null == tt) return {};
        var Vt = {};
        for (var Ot in tt)
          if (Object.prototype.hasOwnProperty.call(tt, Ot)) {
            if (et.indexOf(Ot) >= 0) continue;
            Vt[Ot] = tt[Ot]
          } return Vt
      }(tt, et);
      if (Object.getOwnPropertySymbols) {
        var Dt = Object.getOwnPropertySymbols(tt);
        for (Ot = 0; Ot < Dt.length; Ot++) Vt = Dt[Ot], et.indexOf(Vt) >= 0 || Object.prototype.propertyIsEnumerable.call(tt, Vt) && (qt[Vt] = tt[Vt])
      }
      return qt
    }

    function Rt() {
      return Rt = Object.assign ? Object.assign.bind() : function(tt) {
        for (var et = 1; et < arguments.length; et++) {
          var Vt = arguments[et];
          for (var Ot in Vt) Object.prototype.hasOwnProperty.call(Vt, Ot) && (tt[Ot] = Vt[Ot])
        }
        return tt
      }, Rt.apply(this, arguments)
    }

    function It(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function Pt(tt) {
      for (var et = 1; et < arguments.length; et++) {
        var Vt = null != arguments[et] ? arguments[et] : {};
        et % 2 ? It(Object(Vt), !0).forEach((function(et) {
          zt(tt, et, Vt[et])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : It(Object(Vt)).forEach((function(et) {
          Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
        }))
      }
      return tt
    }

    function Zt(tt, et) {
      for (var Vt = 0; Vt < et.length; Vt++) {
        var Ot = et[Vt];
        Ot.enumerable = Ot.enumerable || !1, Ot.configurable = !0, "value" in Ot && (Ot.writable = !0), Object.defineProperty(tt, ot(Ot.key), Ot)
      }
    }

    function Lt(tt, et, Vt) {
      return et = kt(et),
        function(tt, et) {
          if (et && ("object" === St(et) || "function" === typeof et)) return et;
          if (void 0 !== et) throw new TypeError("Derived constructors may only return object or undefined");
          return function(tt) {
            if (void 0 === tt) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return tt
          }(tt)
        }(tt, Ft() ? Reflect.construct(et, Vt || [], kt(tt).constructor) : et.apply(tt, Vt))
    }

    function Ft() {
      try {
        var tt = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (tt) {}
      return (Ft = function() {
        return !!tt
      })()
    }

    function kt(tt) {
      return kt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(tt) {
        return tt.__proto__ || Object.getPrototypeOf(tt)
      }, kt(tt)
    }

    function Gt(tt, et) {
      return Gt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(tt, et) {
        return tt.__proto__ = et, tt
      }, Gt(tt, et)
    }

    function zt(tt, et, Vt) {
      return (et = ot(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }

    function ot(tt) {
      var et = function(tt, et) {
        if ("object" != St(tt) || !tt) return tt;
        var Vt = tt[Symbol.toPrimitive];
        if (void 0 !== Vt) {
          var Ot = Vt.call(tt, et || "default");
          if ("object" != St(Ot)) return Ot;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === et ? String : Number)(tt)
      }(tt, "string");
      return "symbol" == St(et) ? et : et + ""
    }
    var rt = function(tt) {
      function et() {
        var tt;
        ! function(tt, et) {
          if (!(tt instanceof et)) throw new TypeError("Cannot call a class as a function")
        }(this, et);
        for (var Vt = arguments.length, Ot = new Array(Vt), qt = 0; qt < Vt; qt++) Ot[qt] = arguments[qt];
        return zt(tt = Lt(this, et, [].concat(Ot)), "state", {
          isAnimationFinished: !0
        }), zt(tt, "id", (0, ut.L)("recharts-area-")), zt(tt, "handleAnimationEnd", (function() {
          var et = tt.props.onAnimationEnd;
          tt.setState({
            isAnimationFinished: !0
          }), jt()(et) && et()
        })), zt(tt, "handleAnimationStart", (function() {
          var et = tt.props.onAnimationStart;
          tt.setState({
            isAnimationFinished: !1
          }), jt()(et) && et()
        })), tt
      }
      return function(tt, et) {
        if ("function" !== typeof et && null !== et) throw new TypeError("Super expression must either be null or a function");
        tt.prototype = Object.create(et && et.prototype, {
          constructor: {
            value: tt,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(tt, "prototype", {
          writable: !1
        }), et && Gt(tt, et)
      }(et, tt), Vt = et, Ot = [{
        key: "renderDots",
        value: function(tt, Vt, Ot) {
          var Dt = this.props.isAnimationActive,
            mt = this.state.isAnimationFinished;
          if (Dt && !mt) return null;
          var dt = this.props,
            jt = dt.dot,
            Ht = dt.points,
            Xt = dt.dataKey,
            Qt = (0, ht.b)(this.props, !1),
            lt = (0, ht.b)(jt, !0),
            Et = Ht.map((function(tt, Vt) {
              var Ot = Pt(Pt(Pt({
                key: "dot-".concat(Vt),
                r: 3
              }, Qt), lt), {}, {
                index: Vt,
                cx: tt.x,
                cy: tt.y,
                dataKey: Xt,
                value: tt.value,
                payload: tt.payload,
                points: Ht
              });
              return et.renderDotItem(jt, Ot)
            })),
            ft = {
              clipPath: tt ? "url(#clipPath-".concat(Vt ? "" : "dots-").concat(Ot, ")") : null
            };
          return qt.createElement(bt.e, Rt({
            className: "recharts-area-dots"
          }, ft), Et)
        }
      }, {
        key: "renderHorizontalRect",
        value: function(tt) {
          var et = this.props,
            Vt = et.baseLine,
            Ot = et.points,
            Dt = et.strokeWidth,
            mt = Ot[0].x,
            dt = Ot[Ot.length - 1].x,
            jt = tt * Math.abs(mt - dt),
            Ht = Xt()(Ot.map((function(tt) {
              return tt.y || 0
            })));
          return (0, ut.A)(Vt) && "number" === typeof Vt ? Ht = Math.max(Vt, Ht) : Vt && Array.isArray(Vt) && Vt.length && (Ht = Math.max(Xt()(Vt.map((function(tt) {
            return tt.y || 0
          }))), Ht)), (0, ut.A)(Ht) ? qt.createElement("rect", {
            x: mt < dt ? mt : mt - jt,
            y: 0,
            width: jt,
            height: Math.floor(Ht + (Dt ? parseInt("".concat(Dt), 10) : 1))
          }) : null
        }
      }, {
        key: "renderVerticalRect",
        value: function(tt) {
          var et = this.props,
            Vt = et.baseLine,
            Ot = et.points,
            Dt = et.strokeWidth,
            mt = Ot[0].y,
            dt = Ot[Ot.length - 1].y,
            jt = tt * Math.abs(mt - dt),
            Ht = Xt()(Ot.map((function(tt) {
              return tt.x || 0
            })));
          return (0, ut.A)(Vt) && "number" === typeof Vt ? Ht = Math.max(Vt, Ht) : Vt && Array.isArray(Vt) && Vt.length && (Ht = Math.max(Xt()(Vt.map((function(tt) {
            return tt.x || 0
          }))), Ht)), (0, ut.A)(Ht) ? qt.createElement("rect", {
            x: 0,
            y: mt < dt ? mt : mt - jt,
            width: Ht + (Dt ? parseInt("".concat(Dt), 10) : 1),
            height: Math.floor(jt)
          }) : null
        }
      }, {
        key: "renderClipRect",
        value: function(tt) {
          return "vertical" === this.props.layout ? this.renderVerticalRect(tt) : this.renderHorizontalRect(tt)
        }
      }, {
        key: "renderAreaStatically",
        value: function(tt, et, Vt, Ot) {
          var Dt = this.props,
            mt = Dt.layout,
            dt = Dt.type,
            jt = Dt.stroke,
            Ht = Dt.connectNulls,
            Xt = Dt.isRange,
            Qt = (Dt.ref, ct(Dt, vt));
          return qt.createElement(bt.e, {
            clipPath: Vt ? "url(#clipPath-".concat(Ot, ")") : null
          }, qt.createElement(Nt.c, Rt({}, (0, ht.b)(Qt, !0), {
            points: tt,
            connectNulls: Ht,
            type: dt,
            baseLine: et,
            layout: mt,
            stroke: "none",
            className: "recharts-area-area"
          })), "none" !== jt && qt.createElement(Nt.c, Rt({}, (0, ht.b)(this.props, !1), {
            className: "recharts-area-curve",
            layout: mt,
            type: dt,
            connectNulls: Ht,
            fill: "none",
            points: tt
          })), "none" !== jt && Xt && qt.createElement(Nt.c, Rt({}, (0, ht.b)(this.props, !1), {
            className: "recharts-area-curve",
            layout: mt,
            type: dt,
            connectNulls: Ht,
            fill: "none",
            points: et
          })))
        }
      }, {
        key: "renderAreaWithAnimation",
        value: function(tt, et) {
          var Vt = this,
            Ot = this.props,
            Dt = Ot.points,
            dt = Ot.baseLine,
            jt = Ot.isAnimationActive,
            Ht = Ot.animationBegin,
            Xt = Ot.animationDuration,
            Qt = Ot.animationEasing,
            Et = Ot.animationId,
            wt = this.state,
            yt = wt.prevPoints,
            Nt = wt.prevBaseLine;
          return qt.createElement(mt.c, {
            XE: Ht,
            duration: Xt,
            isActive: jt,
            easing: Qt,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "area-".concat(Et),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(Ot) {
            var mt = Ot.t;
            if (yt) {
              var jt, Ht = yt.length / Dt.length,
                Xt = Dt.map((function(tt, et) {
                  var Vt = Math.floor(et * Ht);
                  if (yt[Vt]) {
                    var Ot = yt[Vt],
                      qt = (0, ut.r)(Ot.x, tt.x),
                      Dt = (0, ut.r)(Ot.y, tt.y);
                    return Pt(Pt({}, tt), {}, {
                      x: qt(mt),
                      y: Dt(mt)
                    })
                  }
                  return tt
                }));
              return jt = (0, ut.A)(dt) && "number" === typeof dt ? (0, ut.r)(Nt, dt)(mt) : lt()(dt) || ft()(dt) ? (0, ut.r)(Nt, 0)(mt) : dt.map((function(tt, et) {
                var Vt = Math.floor(et * Ht);
                if (Nt[Vt]) {
                  var Ot = Nt[Vt],
                    qt = (0, ut.r)(Ot.x, tt.x),
                    Dt = (0, ut.r)(Ot.y, tt.y);
                  return Pt(Pt({}, tt), {}, {
                    x: qt(mt),
                    y: Dt(mt)
                  })
                }
                return tt
              })), Vt.renderAreaStatically(Xt, jt, tt, et)
            }
            return qt.createElement(bt.e, null, qt.createElement("defs", null, qt.createElement("clipPath", {
              id: "animationClipPath-".concat(et)
            }, Vt.renderClipRect(mt))), qt.createElement(bt.e, {
              clipPath: "url(#animationClipPath-".concat(et, ")")
            }, Vt.renderAreaStatically(Dt, dt, tt, et)))
          }))
        }
      }, {
        key: "renderArea",
        value: function(tt, et) {
          var Vt = this.props,
            Ot = Vt.points,
            qt = Vt.baseLine,
            Dt = Vt.isAnimationActive,
            mt = this.state,
            dt = mt.prevPoints,
            jt = mt.prevBaseLine,
            Ht = mt.totalLength;
          return Dt && Ot && Ot.length && (!dt && Ht > 0 || !yt()(dt, Ot) || !yt()(jt, qt)) ? this.renderAreaWithAnimation(tt, et) : this.renderAreaStatically(Ot, qt, tt, et)
        }
      }, {
        key: "render",
        value: function() {
          var tt, et = this.props,
            Vt = et.hide,
            Ot = et.dot,
            mt = et.points,
            dt = et.className,
            jt = et.top,
            Ht = et.left,
            Xt = et.xAxis,
            Qt = et.yAxis,
            Et = et.width,
            ft = et.height,
            wt = et.isAnimationActive,
            yt = et.id;
          if (Vt || !mt || !mt.length) return null;
          var Nt = this.state.isAnimationFinished,
            Mt = 1 === mt.length,
            Ct = (0, Dt.b)("recharts-area", dt),
            ut = Xt && Xt.allowDataOverflow,
            Kt = Qt && Qt.allowDataOverflow,
            vt = ut || Kt,
            Wt = lt()(yt) ? this.id : yt,
            St = null !== (tt = (0, ht.b)(Ot, !1)) && void 0 !== tt ? tt : {
              r: 3,
              strokeWidth: 2
            },
            ct = St.r,
            Rt = void 0 === ct ? 3 : ct,
            It = St.strokeWidth,
            Pt = void 0 === It ? 2 : It,
            Zt = ((0, ht.n)(Ot) ? Ot : {}).clipDot,
            Lt = void 0 === Zt || Zt,
            Ft = 2 * Rt + Pt;
          return qt.createElement(bt.e, {
            className: Ct
          }, ut || Kt ? qt.createElement("defs", null, qt.createElement("clipPath", {
            id: "clipPath-".concat(Wt)
          }, qt.createElement("rect", {
            x: ut ? Ht : Ht - Et / 2,
            y: Kt ? jt : jt - ft / 2,
            width: ut ? Et : 2 * Et,
            height: Kt ? ft : 2 * ft
          })), !Lt && qt.createElement("clipPath", {
            id: "clipPath-dots-".concat(Wt)
          }, qt.createElement("rect", {
            x: Ht - Ft / 2,
            y: jt - Ft / 2,
            width: Et + Ft,
            height: ft + Ft
          }))) : null, Mt ? null : this.renderArea(vt, Wt), (Ot || Mt) && this.renderDots(vt, Lt, Wt), (!wt || Nt) && Jt.b.renderCallByParent(this.props, mt))
        }
      }], dt = [{
        key: "getDerivedStateFromProps",
        value: function(tt, et) {
          return tt.animationId !== et.prevAnimationId ? {
            prevAnimationId: tt.animationId,
            curPoints: tt.points,
            curBaseLine: tt.baseLine,
            prevPoints: et.curPoints,
            prevBaseLine: et.curBaseLine
          } : tt.points !== et.curPoints || tt.baseLine !== et.curBaseLine ? {
            curPoints: tt.points,
            curBaseLine: tt.baseLine
          } : null
        }
      }], Ot && Zt(Vt.prototype, Ot), dt && Zt(Vt, dt), Object.defineProperty(Vt, "prototype", {
        writable: !1
      }), Vt;
      var Vt, Ot, dt
    }(qt.PureComponent);
    Ot = rt, zt(rt, "displayName", "Area"), zt(rt, "defaultProps", {
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
      isAnimationActive: !Ct.c.isSsr,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease"
    }), zt(rt, "getBaseValue", (function(tt, et, Vt, Ot) {
      var qt = tt.layout,
        Dt = tt.baseValue,
        mt = et.props.baseValue,
        dt = null !== mt && void 0 !== mt ? mt : Dt;
      if ((0, ut.A)(dt) && "number" === typeof dt) return dt;
      var jt = "horizontal" === qt ? Ot : Vt,
        Ht = jt.scale.domain();
      if ("number" === jt.type) {
        var Xt = Math.max(Ht[0], Ht[1]),
          Qt = Math.min(Ht[0], Ht[1]);
        return "dataMin" === dt ? Qt : "dataMax" === dt || Xt < 0 ? Xt : Math.max(Math.min(Ht[0], Ht[1]), 0)
      }
      return "dataMin" === dt ? Ht[0] : "dataMax" === dt ? Ht[1] : Ht[0]
    })), zt(rt, "getComposedData", (function(tt) {
      var et, Vt = tt.props,
        qt = tt.item,
        Dt = tt.xAxis,
        mt = tt.yAxis,
        dt = tt.xAxisTicks,
        jt = tt.yAxisTicks,
        Ht = tt.bandSize,
        Xt = tt.dataKey,
        Qt = tt.stackedData,
        lt = tt.dataStartIndex,
        Et = tt.displayedData,
        ft = tt.offset,
        wt = Vt.layout,
        yt = Qt && Qt.length,
        Nt = Ot.getBaseValue(Vt, qt, Dt, mt),
        Mt = "horizontal" === wt,
        bt = !1,
        Jt = Et.map((function(tt, et) {
          var Vt;
          yt ? Vt = Qt[lt + et] : (Vt = (0, Kt.Z)(tt, Xt), Array.isArray(Vt) ? bt = !0 : Vt = [Nt, Vt]);
          var Ot = null == Vt[1] || yt && null == (0, Kt.Z)(tt, Xt);
          return Mt ? {
            x: (0, Kt.z)({
              axis: Dt,
              ticks: dt,
              bandSize: Ht,
              entry: tt,
              index: et
            }),
            y: Ot ? null : mt.scale(Vt[1]),
            value: Vt,
            payload: tt
          } : {
            x: Ot ? null : Dt.scale(Vt[1]),
            y: (0, Kt.z)({
              axis: mt,
              ticks: jt,
              bandSize: Ht,
              entry: tt,
              index: et
            }),
            value: Vt,
            payload: tt
          }
        }));
      return et = yt || bt ? Jt.map((function(tt) {
        var et = Array.isArray(tt.value) ? tt.value[0] : null;
        return Mt ? {
          x: tt.x,
          y: null != et && null != tt.y ? mt.scale(et) : null
        } : {
          x: null != et ? Dt.scale(et) : null,
          y: tt.y
        }
      })) : Mt ? mt.scale(Nt) : Dt.scale(Nt), Pt({
        points: Jt,
        baseLine: et,
        layout: wt,
        isRange: bt
      }, ft)
    })), zt(rt, "renderDotItem", (function(tt, et) {
      var Vt;
      if (qt.isValidElement(tt)) Vt = qt.cloneElement(tt, et);
      else if (jt()(tt)) Vt = tt(et);
      else {
        var Ot = (0, Dt.b)("recharts-area-dot", "boolean" !== typeof tt ? tt.className : ""),
          mt = et.key,
          dt = ct(et, Wt);
        Vt = qt.createElement(Mt.d, Rt({}, dt, {
          key: mt,
          className: Ot
        }))
      }
      return Vt
    }))
  },
  6449: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Bt
    });
    var Ot = Vt(63),
      qt = Vt(5263),
      Dt = Vt(6301),
      mt = Vt(6377),
      dt = Vt.n(mt),
      jt = Vt(5603),
      Ht = Vt.n(jt),
      Xt = Vt(6140),
      Qt = Vt(6385),
      lt = Vt(6457),
      Et = Vt(6461),
      ft = Vt(5348),
      wt = Vt(5614),
      yt = Vt(6155),
      Nt = Vt(6317),
      Mt = Vt(5631),
      bt = Vt(6131),
      Jt = Vt(6476),
      Ct = ["x", "y"];

    function ut(tt) {
      return ut = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, ut(tt)
    }

    function Kt() {
      return Kt = Object.assign ? Object.assign.bind() : function(tt) {
        for (var et = 1; et < arguments.length; et++) {
          var Vt = arguments[et];
          for (var Ot in Vt) Object.prototype.hasOwnProperty.call(Vt, Ot) && (tt[Ot] = Vt[Ot])
        }
        return tt
      }, Kt.apply(this, arguments)
    }

    function ht(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function vt(tt) {
      for (var et = 1; et < arguments.length; et++) {
        var Vt = null != arguments[et] ? arguments[et] : {};
        et % 2 ? ht(Object(Vt), !0).forEach((function(et) {
          Wt(tt, et, Vt[et])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : ht(Object(Vt)).forEach((function(et) {
          Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
        }))
      }
      return tt
    }

    function Wt(tt, et, Vt) {
      return (et = function(tt) {
        var et = function(tt, et) {
          if ("object" != ut(tt) || !tt) return tt;
          var Vt = tt[Symbol.toPrimitive];
          if (void 0 !== Vt) {
            var Ot = Vt.call(tt, et || "default");
            if ("object" != ut(Ot)) return Ot;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === et ? String : Number)(tt)
        }(tt, "string");
        return "symbol" == ut(et) ? et : et + ""
      }(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }

    function St(tt, et) {
      if (null == tt) return {};
      var Vt, Ot, qt = function(tt, et) {
        if (null == tt) return {};
        var Vt = {};
        for (var Ot in tt)
          if (Object.prototype.hasOwnProperty.call(tt, Ot)) {
            if (et.indexOf(Ot) >= 0) continue;
            Vt[Ot] = tt[Ot]
          } return Vt
      }(tt, et);
      if (Object.getOwnPropertySymbols) {
        var Dt = Object.getOwnPropertySymbols(tt);
        for (Ot = 0; Ot < Dt.length; Ot++) Vt = Dt[Ot], et.indexOf(Vt) >= 0 || Object.prototype.propertyIsEnumerable.call(tt, Vt) && (qt[Vt] = tt[Vt])
      }
      return qt
    }

    function ct(tt, et) {
      var Vt = tt.x,
        Ot = tt.y,
        qt = St(tt, Ct),
        Dt = "".concat(Vt),
        mt = parseInt(Dt, 10),
        dt = "".concat(Ot),
        jt = parseInt(dt, 10),
        Ht = "".concat(et.height || qt.height),
        Xt = parseInt(Ht, 10),
        Qt = "".concat(et.width || qt.width),
        lt = parseInt(Qt, 10);
      return vt(vt(vt(vt(vt({}, et), qt), mt ? {
        x: mt
      } : {}), jt ? {
        y: jt
      } : {}), {}, {
        height: Xt,
        width: lt,
        name: et.name,
        radius: et.radius
      })
    }

    function Rt(tt) {
      return Ot.createElement(Jt.e, Kt({
        shapeType: "rectangle",
        propTransformer: ct,
        activeClassName: "recharts-active-bar"
      }, tt))
    }
    var It, Pt = ["value", "background"];

    function Zt(tt) {
      return Zt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, Zt(tt)
    }

    function Lt(tt, et) {
      if (null == tt) return {};
      var Vt, Ot, qt = function(tt, et) {
        if (null == tt) return {};
        var Vt = {};
        for (var Ot in tt)
          if (Object.prototype.hasOwnProperty.call(tt, Ot)) {
            if (et.indexOf(Ot) >= 0) continue;
            Vt[Ot] = tt[Ot]
          } return Vt
      }(tt, et);
      if (Object.getOwnPropertySymbols) {
        var Dt = Object.getOwnPropertySymbols(tt);
        for (Ot = 0; Ot < Dt.length; Ot++) Vt = Dt[Ot], et.indexOf(Vt) >= 0 || Object.prototype.propertyIsEnumerable.call(tt, Vt) && (qt[Vt] = tt[Vt])
      }
      return qt
    }

    function Ft() {
      return Ft = Object.assign ? Object.assign.bind() : function(tt) {
        for (var et = 1; et < arguments.length; et++) {
          var Vt = arguments[et];
          for (var Ot in Vt) Object.prototype.hasOwnProperty.call(Vt, Ot) && (tt[Ot] = Vt[Ot])
        }
        return tt
      }, Ft.apply(this, arguments)
    }

    function kt(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function Gt(tt) {
      for (var et = 1; et < arguments.length; et++) {
        var Vt = null != arguments[et] ? arguments[et] : {};
        et % 2 ? kt(Object(Vt), !0).forEach((function(et) {
          it(tt, et, Vt[et])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : kt(Object(Vt)).forEach((function(et) {
          Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
        }))
      }
      return tt
    }

    function zt(tt, et) {
      for (var Vt = 0; Vt < et.length; Vt++) {
        var Ot = et[Vt];
        Ot.enumerable = Ot.enumerable || !1, Ot.configurable = !0, "value" in Ot && (Ot.writable = !0), Object.defineProperty(tt, Yt(Ot.key), Ot)
      }
    }

    function ot(tt, et, Vt) {
      return et = Ut(et),
        function(tt, et) {
          if (et && ("object" === Zt(et) || "function" === typeof et)) return et;
          if (void 0 !== et) throw new TypeError("Derived constructors may only return object or undefined");
          return function(tt) {
            if (void 0 === tt) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return tt
          }(tt)
        }(tt, rt() ? Reflect.construct(et, Vt || [], Ut(tt).constructor) : et.apply(tt, Vt))
    }

    function rt() {
      try {
        var tt = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (tt) {}
      return (rt = function() {
        return !!tt
      })()
    }

    function Ut(tt) {
      return Ut = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(tt) {
        return tt.__proto__ || Object.getPrototypeOf(tt)
      }, Ut(tt)
    }

    function At(tt, et) {
      return At = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(tt, et) {
        return tt.__proto__ = et, tt
      }, At(tt, et)
    }

    function it(tt, et, Vt) {
      return (et = Yt(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }

    function Yt(tt) {
      var et = function(tt, et) {
        if ("object" != Zt(tt) || !tt) return tt;
        var Vt = tt[Symbol.toPrimitive];
        if (void 0 !== Vt) {
          var Ot = Vt.call(tt, et || "default");
          if ("object" != Zt(Ot)) return Ot;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === et ? String : Number)(tt)
      }(tt, "string");
      return "symbol" == Zt(et) ? et : et + ""
    }
    var Bt = function(tt) {
      function et() {
        var tt;
        ! function(tt, et) {
          if (!(tt instanceof et)) throw new TypeError("Cannot call a class as a function")
        }(this, et);
        for (var Vt = arguments.length, Ot = new Array(Vt), qt = 0; qt < Vt; qt++) Ot[qt] = arguments[qt];
        return it(tt = ot(this, et, [].concat(Ot)), "state", {
          isAnimationFinished: !1
        }), it(tt, "id", (0, ft.L)("recharts-bar-")), it(tt, "handleAnimationEnd", (function() {
          var et = tt.props.onAnimationEnd;
          tt.setState({
            isAnimationFinished: !0
          }), et && et()
        })), it(tt, "handleAnimationStart", (function() {
          var et = tt.props.onAnimationStart;
          tt.setState({
            isAnimationFinished: !1
          }), et && et()
        })), tt
      }
      return function(tt, et) {
        if ("function" !== typeof et && null !== et) throw new TypeError("Super expression must either be null or a function");
        tt.prototype = Object.create(et && et.prototype, {
          constructor: {
            value: tt,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(tt, "prototype", {
          writable: !1
        }), et && At(tt, et)
      }(et, tt), Vt = et, mt = [{
        key: "renderRectanglesStatically",
        value: function(tt) {
          var et = this,
            Vt = this.props,
            qt = Vt.shape,
            Dt = Vt.dataKey,
            mt = Vt.activeIndex,
            dt = Vt.activeBar,
            jt = (0, wt.b)(this.props, !1);
          return tt && tt.map((function(tt, Vt) {
            var Ht = Vt === mt,
              Qt = Ht ? dt : qt,
              lt = Gt(Gt(Gt({}, jt), tt), {}, {
                isActive: Ht,
                option: Qt,
                index: Vt,
                dataKey: Dt,
                onAnimationStart: et.handleAnimationStart,
                onAnimationEnd: et.handleAnimationEnd
              });
            return Ot.createElement(Xt.e, Ft({
              className: "recharts-bar-rectangle"
            }, (0, Mt.k)(et.props, tt, Vt), {
              key: "rectangle-".concat(null === tt || void 0 === tt ? void 0 : tt.x, "-").concat(null === tt || void 0 === tt ? void 0 : tt.y, "-").concat(null === tt || void 0 === tt ? void 0 : tt.value, "-").concat(Vt)
            }), Ot.createElement(Rt, lt))
          }))
        }
      }, {
        key: "renderRectanglesWithAnimation",
        value: function() {
          var tt = this,
            et = this.props,
            Vt = et.data,
            qt = et.layout,
            mt = et.isAnimationActive,
            dt = et.animationBegin,
            jt = et.animationDuration,
            Ht = et.animationEasing,
            Qt = et.animationId,
            lt = this.state.prevData;
          return Ot.createElement(Dt.c, {
            XE: dt,
            duration: jt,
            isActive: mt,
            easing: Ht,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "bar-".concat(Qt),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(et) {
            var Dt = et.t,
              mt = Vt.map((function(tt, et) {
                var Vt = lt && lt[et];
                if (Vt) {
                  var Ot = (0, ft.r)(Vt.x, tt.x),
                    mt = (0, ft.r)(Vt.y, tt.y),
                    dt = (0, ft.r)(Vt.width, tt.width),
                    jt = (0, ft.r)(Vt.height, tt.height);
                  return Gt(Gt({}, tt), {}, {
                    x: Ot(Dt),
                    y: mt(Dt),
                    width: dt(Dt),
                    height: jt(Dt)
                  })
                }
                if ("horizontal" === qt) {
                  var Ht = (0, ft.r)(0, tt.height)(Dt);
                  return Gt(Gt({}, tt), {}, {
                    y: tt.y + tt.height - Ht,
                    height: Ht
                  })
                }
                var Xt = (0, ft.r)(0, tt.width)(Dt);
                return Gt(Gt({}, tt), {}, {
                  width: Xt
                })
              }));
            return Ot.createElement(Xt.e, null, tt.renderRectanglesStatically(mt))
          }))
        }
      }, {
        key: "renderRectangles",
        value: function() {
          var tt = this.props,
            et = tt.data,
            Vt = tt.isAnimationActive,
            Ot = this.state.prevData;
          return !(Vt && et && et.length) || Ot && dt()(Ot, et) ? this.renderRectanglesStatically(et) : this.renderRectanglesWithAnimation()
        }
      }, {
        key: "renderBackground",
        value: function() {
          var tt = this,
            et = this.props,
            Vt = et.data,
            qt = et.dataKey,
            Dt = et.activeIndex,
            mt = (0, wt.b)(this.props.background, !1);
          return Vt.map((function(et, Vt) {
            et.value;
            var dt = et.background,
              jt = Lt(et, Pt);
            if (!dt) return null;
            var Ht = Gt(Gt(Gt(Gt(Gt({}, jt), {}, {
              fill: "#eee"
            }, dt), mt), (0, Mt.k)(tt.props, et, Vt)), {}, {
              onAnimationStart: tt.handleAnimationStart,
              onAnimationEnd: tt.handleAnimationEnd,
              dataKey: qt,
              index: Vt,
              className: "recharts-bar-background-rectangle"
            });
            return Ot.createElement(Rt, Ft({
              key: "background-bar-".concat(Vt),
              option: tt.props.background,
              isActive: Vt === Dt
            }, Ht))
          }))
        }
      }, {
        key: "renderErrorBar",
        value: function(tt, et) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var Vt = this.props,
            qt = Vt.data,
            Dt = Vt.xAxis,
            mt = Vt.yAxis,
            dt = Vt.layout,
            jt = Vt.children,
            Ht = (0, wt.d)(jt, Qt.d);
          if (!Ht) return null;
          var lt = "vertical" === dt ? qt[0].height / 2 : qt[0].width / 2,
            Et = function(tt, et) {
              var Vt = Array.isArray(tt.value) ? tt.value[1] : tt.value;
              return {
                x: tt.x,
                y: tt.y,
                value: Vt,
                errorVal: (0, Nt.Z)(tt, et)
              }
            },
            ft = {
              clipPath: tt ? "url(#clipPath-".concat(et, ")") : null
            };
          return Ot.createElement(Xt.e, ft, Ht.map((function(tt) {
            return Ot.cloneElement(tt, {
              key: "error-bar-".concat(et, "-").concat(tt.props.dataKey),
              data: qt,
              xAxis: Dt,
              yAxis: mt,
              layout: dt,
              offset: lt,
              dataPointFormatter: Et
            })
          })))
        }
      }, {
        key: "render",
        value: function() {
          var tt = this.props,
            et = tt.hide,
            Vt = tt.data,
            Dt = tt.className,
            mt = tt.xAxis,
            dt = tt.yAxis,
            jt = tt.left,
            Qt = tt.top,
            lt = tt.width,
            ft = tt.height,
            wt = tt.isAnimationActive,
            yt = tt.background,
            Nt = tt.id;
          if (et || !Vt || !Vt.length) return null;
          var Mt = this.state.isAnimationFinished,
            bt = (0, qt.b)("recharts-bar", Dt),
            Jt = mt && mt.allowDataOverflow,
            Ct = dt && dt.allowDataOverflow,
            ut = Jt || Ct,
            Kt = Ht()(Nt) ? this.id : Nt;
          return Ot.createElement(Xt.e, {
            className: bt
          }, Jt || Ct ? Ot.createElement("defs", null, Ot.createElement("clipPath", {
            id: "clipPath-".concat(Kt)
          }, Ot.createElement("rect", {
            x: Jt ? jt : jt - lt / 2,
            y: Ct ? Qt : Qt - ft / 2,
            width: Jt ? lt : 2 * lt,
            height: Ct ? ft : 2 * ft
          }))) : null, Ot.createElement(Xt.e, {
            className: "recharts-bar-rectangles",
            clipPath: ut ? "url(#clipPath-".concat(Kt, ")") : null
          }, yt ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(ut, Kt), (!wt || Mt) && Et.b.renderCallByParent(this.props, Vt))
        }
      }], jt = [{
        key: "getDerivedStateFromProps",
        value: function(tt, et) {
          return tt.animationId !== et.prevAnimationId ? {
            prevAnimationId: tt.animationId,
            curData: tt.data,
            prevData: et.curData
          } : tt.data !== et.curData ? {
            curData: tt.data
          } : null
        }
      }], mt && zt(Vt.prototype, mt), jt && zt(Vt, jt), Object.defineProperty(Vt, "prototype", {
        writable: !1
      }), Vt;
      var Vt, mt, jt
    }(Ot.PureComponent);
    It = Bt, it(Bt, "displayName", "Bar"), it(Bt, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      legendType: "rect",
      minPointSize: 0,
      hide: !1,
      data: [],
      layout: "vertical",
      activeBar: !1,
      isAnimationActive: !yt.c.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "ease"
    }), it(Bt, "getComposedData", (function(tt) {
      var et = tt.props,
        Vt = tt.item,
        Ot = tt.barPosition,
        qt = tt.bandSize,
        Dt = tt.xAxis,
        mt = tt.yAxis,
        dt = tt.xAxisTicks,
        jt = tt.yAxisTicks,
        Ht = tt.stackedData,
        Xt = tt.dataStartIndex,
        Qt = tt.displayedData,
        Et = tt.offset,
        yt = (0, Nt.j)(Ot, Vt);
      if (!yt) return null;
      var Mt = et.layout,
        Jt = Vt.type.defaultProps,
        Ct = void 0 !== Jt ? Gt(Gt({}, Jt), Vt.props) : Vt.props,
        ut = Ct.dataKey,
        Kt = Ct.children,
        ht = Ct.minPointSize,
        vt = "horizontal" === Mt ? mt : Dt,
        Wt = Ht ? vt.scale.domain() : null,
        St = (0, Nt.u)({
          numericAxis: vt
        }),
        ct = (0, wt.d)(Kt, lt.c),
        Rt = Qt.map((function(tt, et) {
          var Ot, Qt, lt, Et, wt, Jt;
          Ht ? Ot = (0, Nt.ob)(Ht[Xt + et], Wt) : (Ot = (0, Nt.Z)(tt, ut), Array.isArray(Ot) || (Ot = [St, Ot]));
          var Ct = function(tt) {
            var et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return function(Vt, Ot) {
              if ("number" === typeof tt) return tt;
              var qt = (0, ft.A)(Vt) || (0, ft.s)(Vt);
              return qt ? tt(Vt, Ot) : (qt || (0, bt.c)(!1), et)
            }
          }(ht, It.defaultProps.minPointSize)(Ot[1], et);
          if ("horizontal" === Mt) {
            var Kt, vt = [mt.scale(Ot[0]), mt.scale(Ot[1])],
              Rt = vt[0],
              Pt = vt[1];
            Qt = (0, Nt.y)({
              axis: Dt,
              ticks: dt,
              bandSize: qt,
              offset: yt.offset,
              entry: tt,
              index: et
            }), lt = null !== (Kt = null !== Pt && void 0 !== Pt ? Pt : Rt) && void 0 !== Kt ? Kt : void 0, Et = yt.size;
            var Zt = Rt - Pt;
            if (wt = Number.isNaN(Zt) ? 0 : Zt, Jt = {
                x: Qt,
                y: mt.y,
                width: Et,
                height: mt.height
              }, Math.abs(Ct) > 0 && Math.abs(wt) < Math.abs(Ct)) {
              var Lt = (0, ft.H)(wt || Ct) * (Math.abs(Ct) - Math.abs(wt));
              lt -= Lt, wt += Lt
            }
          } else {
            var Ft = [Dt.scale(Ot[0]), Dt.scale(Ot[1])],
              kt = Ft[0],
              zt = Ft[1];
            if (Qt = kt, lt = (0, Nt.y)({
                axis: mt,
                ticks: jt,
                bandSize: qt,
                offset: yt.offset,
                entry: tt,
                index: et
              }), Et = zt - kt, wt = yt.size, Jt = {
                x: Dt.x,
                y: lt,
                width: Dt.width,
                height: wt
              }, Math.abs(Ct) > 0 && Math.abs(Et) < Math.abs(Ct)) Et += (0, ft.H)(Et || Ct) * (Math.abs(Ct) - Math.abs(Et))
          }
          return Gt(Gt(Gt({}, tt), {}, {
            x: Qt,
            y: lt,
            width: Et,
            height: wt,
            value: Ht ? Ot : Ot[1],
            payload: tt,
            background: Jt
          }, ct && ct[et] && ct[et].props), {}, {
            tooltipPayload: [(0, Nt.V)(Vt, tt)],
            tooltipPosition: {
              x: Qt + Et / 2,
              y: lt + wt / 2
            }
          })
        }));
      return Gt({
        data: Rt,
        layout: Mt
      }, Et)
    }))
  },
  6582: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Zt
    });
    var Ot = Vt(63),
      qt = Vt(5436),
      Dt = Vt.n(qt),
      mt = Vt(5374),
      dt = Vt.n(mt),
      jt = Vt(5263),
      Ht = Vt(5628),
      Xt = Vt(6140),
      Qt = Vt(6304),
      lt = Vt(6406),
      Et = Vt(5348),
      ft = Vt(5631),
      wt = Vt(5614),
      yt = Vt(6584),
      Nt = ["viewBox"],
      Mt = ["viewBox"],
      bt = ["ticks"];

    function Jt(tt) {
      return Jt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, Jt(tt)
    }

    function Ct() {
      return Ct = Object.assign ? Object.assign.bind() : function(tt) {
        for (var et = 1; et < arguments.length; et++) {
          var Vt = arguments[et];
          for (var Ot in Vt) Object.prototype.hasOwnProperty.call(Vt, Ot) && (tt[Ot] = Vt[Ot])
        }
        return tt
      }, Ct.apply(this, arguments)
    }

    function ut(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function Kt(tt) {
      for (var et = 1; et < arguments.length; et++) {
        var Vt = null != arguments[et] ? arguments[et] : {};
        et % 2 ? ut(Object(Vt), !0).forEach((function(et) {
          It(tt, et, Vt[et])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : ut(Object(Vt)).forEach((function(et) {
          Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
        }))
      }
      return tt
    }

    function ht(tt, et) {
      if (null == tt) return {};
      var Vt, Ot, qt = function(tt, et) {
        if (null == tt) return {};
        var Vt = {};
        for (var Ot in tt)
          if (Object.prototype.hasOwnProperty.call(tt, Ot)) {
            if (et.indexOf(Ot) >= 0) continue;
            Vt[Ot] = tt[Ot]
          } return Vt
      }(tt, et);
      if (Object.getOwnPropertySymbols) {
        var Dt = Object.getOwnPropertySymbols(tt);
        for (Ot = 0; Ot < Dt.length; Ot++) Vt = Dt[Ot], et.indexOf(Vt) >= 0 || Object.prototype.propertyIsEnumerable.call(tt, Vt) && (qt[Vt] = tt[Vt])
      }
      return qt
    }

    function vt(tt, et) {
      for (var Vt = 0; Vt < et.length; Vt++) {
        var Ot = et[Vt];
        Ot.enumerable = Ot.enumerable || !1, Ot.configurable = !0, "value" in Ot && (Ot.writable = !0), Object.defineProperty(tt, Pt(Ot.key), Ot)
      }
    }

    function Wt(tt, et, Vt) {
      return et = ct(et),
        function(tt, et) {
          if (et && ("object" === Jt(et) || "function" === typeof et)) return et;
          if (void 0 !== et) throw new TypeError("Derived constructors may only return object or undefined");
          return function(tt) {
            if (void 0 === tt) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return tt
          }(tt)
        }(tt, St() ? Reflect.construct(et, Vt || [], ct(tt).constructor) : et.apply(tt, Vt))
    }

    function St() {
      try {
        var tt = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (tt) {}
      return (St = function() {
        return !!tt
      })()
    }

    function ct(tt) {
      return ct = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(tt) {
        return tt.__proto__ || Object.getPrototypeOf(tt)
      }, ct(tt)
    }

    function Rt(tt, et) {
      return Rt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(tt, et) {
        return tt.__proto__ = et, tt
      }, Rt(tt, et)
    }

    function It(tt, et, Vt) {
      return (et = Pt(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }

    function Pt(tt) {
      var et = function(tt, et) {
        if ("object" != Jt(tt) || !tt) return tt;
        var Vt = tt[Symbol.toPrimitive];
        if (void 0 !== Vt) {
          var Ot = Vt.call(tt, et || "default");
          if ("object" != Jt(Ot)) return Ot;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === et ? String : Number)(tt)
      }(tt, "string");
      return "symbol" == Jt(et) ? et : et + ""
    }
    var Zt = function(tt) {
      function et(tt) {
        var Vt;
        return function(tt, et) {
          if (!(tt instanceof et)) throw new TypeError("Cannot call a class as a function")
        }(this, et), (Vt = Wt(this, et, [tt])).state = {
          fontSize: "",
          letterSpacing: ""
        }, Vt
      }
      return function(tt, et) {
        if ("function" !== typeof et && null !== et) throw new TypeError("Super expression must either be null or a function");
        tt.prototype = Object.create(et && et.prototype, {
          constructor: {
            value: tt,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(tt, "prototype", {
          writable: !1
        }), et && Rt(tt, et)
      }(et, tt), Vt = et, mt = [{
        key: "renderTickItem",
        value: function(tt, et, Vt) {
          var qt = (0, jt.b)(et.className, "recharts-cartesian-axis-tick-value");
          return Ot.isValidElement(tt) ? Ot.cloneElement(tt, Kt(Kt({}, et), {}, {
            className: qt
          })) : Dt()(tt) ? tt(Kt(Kt({}, et), {}, {
            className: qt
          })) : Ot.createElement(Qt.b, Ct({}, et, {
            className: "recharts-cartesian-axis-tick-value"
          }), Vt)
        }
      }], (qt = [{
        key: "shouldComponentUpdate",
        value: function(tt, et) {
          var Vt = tt.viewBox,
            Ot = ht(tt, Nt),
            qt = this.props,
            Dt = qt.viewBox,
            mt = ht(qt, Mt);
          return !(0, Ht.b)(Vt, Dt) || !(0, Ht.b)(Ot, mt) || !(0, Ht.b)(et, this.state)
        }
      }, {
        key: "componentDidMount",
        value: function() {
          var tt = this.layerReference;
          if (tt) {
            var et = tt.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
            et && this.setState({
              fontSize: window.getComputedStyle(et).fontSize,
              letterSpacing: window.getComputedStyle(et).letterSpacing
            })
          }
        }
      }, {
        key: "getTickLineCoord",
        value: function(tt) {
          var et, Vt, Ot, qt, Dt, mt, dt = this.props,
            jt = dt.x,
            Ht = dt.y,
            Xt = dt.width,
            Qt = dt.height,
            lt = dt.orientation,
            ft = dt.tickSize,
            wt = dt.mirror,
            yt = dt.tickMargin,
            Nt = wt ? -1 : 1,
            Mt = tt.tickSize || ft,
            bt = (0, Et.A)(tt.tickCoord) ? tt.tickCoord : tt.coordinate;
          switch (lt) {
            case "top":
              et = Vt = tt.coordinate, mt = (Ot = (qt = Ht + +!wt * Qt) - Nt * Mt) - Nt * yt, Dt = bt;
              break;
            case "left":
              Ot = qt = tt.coordinate, Dt = (et = (Vt = jt + +!wt * Xt) - Nt * Mt) - Nt * yt, mt = bt;
              break;
            case "right":
              Ot = qt = tt.coordinate, Dt = (et = (Vt = jt + +wt * Xt) + Nt * Mt) + Nt * yt, mt = bt;
              break;
            default:
              et = Vt = tt.coordinate, mt = (Ot = (qt = Ht + +wt * Qt) + Nt * Mt) + Nt * yt, Dt = bt
          }
          return {
            line: {
              x1: et,
              y1: Ot,
              x2: Vt,
              y2: qt
            },
            BQ: {
              x: Dt,
              y: mt
            }
          }
        }
      }, {
        key: "getTickTextAnchor",
        value: function() {
          var tt, et = this.props,
            Vt = et.orientation,
            Ot = et.mirror;
          switch (Vt) {
            case "left":
              tt = Ot ? "start" : "end";
              break;
            case "right":
              tt = Ot ? "end" : "start";
              break;
            default:
              tt = "middle"
          }
          return tt
        }
      }, {
        key: "getTickVerticalAnchor",
        value: function() {
          var tt = this.props,
            et = tt.orientation,
            Vt = tt.mirror,
            Ot = "end";
          switch (et) {
            case "left":
            case "right":
              Ot = "middle";
              break;
            case "top":
              Ot = Vt ? "start" : "end";
              break;
            default:
              Ot = Vt ? "end" : "start"
          }
          return Ot
        }
      }, {
        key: "renderAxisLine",
        value: function() {
          var tt = this.props,
            et = tt.x,
            Vt = tt.y,
            qt = tt.width,
            Dt = tt.height,
            mt = tt.orientation,
            Ht = tt.mirror,
            Xt = tt.axisLine,
            Qt = Kt(Kt(Kt({}, (0, wt.b)(this.props, !1)), (0, wt.b)(Xt, !1)), {}, {
              fill: "none"
            });
          if ("top" === mt || "bottom" === mt) {
            var lt = +("top" === mt && !Ht || "bottom" === mt && Ht);
            Qt = Kt(Kt({}, Qt), {}, {
              x1: et,
              y1: Vt + lt * Dt,
              x2: et + qt,
              y2: Vt + lt * Dt
            })
          } else {
            var Et = +("left" === mt && !Ht || "right" === mt && Ht);
            Qt = Kt(Kt({}, Qt), {}, {
              x1: et + Et * qt,
              y1: Vt,
              x2: et + Et * qt,
              y2: Vt + Dt
            })
          }
          return Ot.createElement("line", Ct({}, Qt, {
            className: (0, jt.b)("recharts-cartesian-axis-line", dt()(Xt, "className"))
          }))
        }
      }, {
        key: "renderTicks",
        value: function(tt, Vt, qt) {
          var mt = this,
            Ht = this.props,
            Qt = Ht.tickLine,
            lt = Ht.stroke,
            Et = Ht.BQ,
            Nt = Ht.tickFormatter,
            Mt = Ht.unit,
            bt = (0, yt.c)(Kt(Kt({}, this.props), {}, {
              ticks: tt
            }), Vt, qt),
            Jt = this.getTickTextAnchor(),
            ut = this.getTickVerticalAnchor(),
            ht = (0, wt.b)(this.props, !1),
            vt = (0, wt.b)(Et, !1),
            Wt = Kt(Kt({}, ht), {}, {
              fill: "none"
            }, (0, wt.b)(Qt, !1)),
            St = bt.map((function(tt, Vt) {
              var qt = mt.getTickLineCoord(tt),
                Ht = qt.line,
                wt = qt.BQ,
                yt = Kt(Kt(Kt(Kt({
                  textAnchor: Jt,
                  verticalAnchor: ut
                }, ht), {}, {
                  stroke: "none",
                  fill: lt
                }, vt), wt), {}, {
                  index: Vt,
                  payload: tt,
                  visibleTicksCount: bt.length,
                  tickFormatter: Nt
                });
              return Ot.createElement(Xt.e, Ct({
                className: "recharts-cartesian-axis-tick",
                key: "tick-".concat(tt.value, "-").concat(tt.coordinate, "-").concat(tt.tickCoord)
              }, (0, ft.k)(mt.props, tt, Vt)), Qt && Ot.createElement("line", Ct({}, Wt, Ht, {
                className: (0, jt.b)("recharts-cartesian-axis-tick-line", dt()(Qt, "className"))
              })), Et && et.renderTickItem(Et, yt, "".concat(Dt()(Nt) ? Nt(tt.value, Vt) : tt.value).concat(Mt || "")))
            }));
          return Ot.createElement("g", {
            className: "recharts-cartesian-axis-ticks"
          }, St)
        }
      }, {
        key: "render",
        value: function() {
          var tt = this,
            et = this.props,
            Vt = et.axisLine,
            qt = et.width,
            mt = et.height,
            dt = et.ticksGenerator,
            Ht = et.className;
          if (et.hide) return null;
          var Qt = this.props,
            Et = Qt.ticks,
            ft = ht(Qt, bt),
            wt = Et;
          return Dt()(dt) && (wt = Et && Et.length > 0 ? dt(this.props) : dt(ft)), qt <= 0 || mt <= 0 || !wt || !wt.length ? null : Ot.createElement(Xt.e, {
            className: (0, jt.b)("recharts-cartesian-axis", Ht),
            ref: function(et) {
              tt.layerReference = et
            }
          }, Vt && this.renderAxisLine(), this.renderTicks(wt, this.state.fontSize, this.state.letterSpacing), lt.e.renderCallByParent(this.props))
        }
      }]) && vt(Vt.prototype, qt), mt && vt(Vt, mt), Object.defineProperty(Vt, "prototype", {
        writable: !1
      }), Vt;
      var Vt, qt, mt
    }(Ot.Component);
    It(Zt, "displayName", "CartesianAxis"), It(Zt, "defaultProps", {
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
      BQ: !0,
      mirror: !1,
      minTickGap: 5,
      tickSize: 6,
      tickMargin: 2,
      interval: "preserveEnd"
    })
  },
  6590: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => It
    });
    var Ot = Vt(63),
      qt = Vt(5436),
      Dt = Vt.n(qt),
      mt = Vt(5609),
      dt = Vt(5348),
      jt = Vt(5614),
      Ht = Vt(6317),
      Xt = Vt(6584),
      Qt = Vt(6582),
      lt = Vt(6532),
      Et = ["x1", "y1", "x2", "y2", "key"],
      ft = ["offset"];

    function wt(tt) {
      return wt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, wt(tt)
    }

    function yt(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function Nt(tt) {
      for (var et = 1; et < arguments.length; et++) {
        var Vt = null != arguments[et] ? arguments[et] : {};
        et % 2 ? yt(Object(Vt), !0).forEach((function(et) {
          Mt(tt, et, Vt[et])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : yt(Object(Vt)).forEach((function(et) {
          Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
        }))
      }
      return tt
    }

    function Mt(tt, et, Vt) {
      return (et = function(tt) {
        var et = function(tt, et) {
          if ("object" != wt(tt) || !tt) return tt;
          var Vt = tt[Symbol.toPrimitive];
          if (void 0 !== Vt) {
            var Ot = Vt.call(tt, et || "default");
            if ("object" != wt(Ot)) return Ot;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === et ? String : Number)(tt)
        }(tt, "string");
        return "symbol" == wt(et) ? et : et + ""
      }(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }

    function bt() {
      return bt = Object.assign ? Object.assign.bind() : function(tt) {
        for (var et = 1; et < arguments.length; et++) {
          var Vt = arguments[et];
          for (var Ot in Vt) Object.prototype.hasOwnProperty.call(Vt, Ot) && (tt[Ot] = Vt[Ot])
        }
        return tt
      }, bt.apply(this, arguments)
    }

    function Jt(tt, et) {
      if (null == tt) return {};
      var Vt, Ot, qt = function(tt, et) {
        if (null == tt) return {};
        var Vt = {};
        for (var Ot in tt)
          if (Object.prototype.hasOwnProperty.call(tt, Ot)) {
            if (et.indexOf(Ot) >= 0) continue;
            Vt[Ot] = tt[Ot]
          } return Vt
      }(tt, et);
      if (Object.getOwnPropertySymbols) {
        var Dt = Object.getOwnPropertySymbols(tt);
        for (Ot = 0; Ot < Dt.length; Ot++) Vt = Dt[Ot], et.indexOf(Vt) >= 0 || Object.prototype.propertyIsEnumerable.call(tt, Vt) && (qt[Vt] = tt[Vt])
      }
      return qt
    }
    var Ct = function(tt) {
      var et = tt.fill;
      if (!et || "none" === et) return null;
      var Vt = tt.fillOpacity,
        qt = tt.x,
        Dt = tt.y,
        mt = tt.width,
        dt = tt.height,
        jt = tt.ry;
      return Ot.createElement("rect", {
        x: qt,
        y: Dt,
        ry: jt,
        width: mt,
        height: dt,
        stroke: "none",
        fill: et,
        fillOpacity: Vt,
        className: "recharts-cartesian-grid-bg"
      })
    };

    function ut(tt, et) {
      var Vt;
      if (Ot.isValidElement(tt)) Vt = Ot.cloneElement(tt, et);
      else if (Dt()(tt)) Vt = tt(et);
      else {
        var qt = et.x1,
          mt = et.y1,
          dt = et.x2,
          Ht = et.y2,
          Xt = et.key,
          Qt = Jt(et, Et),
          lt = (0, jt.b)(Qt, !1),
          wt = (lt.offset, Jt(lt, ft));
        Vt = Ot.createElement("line", bt({}, wt, {
          x1: qt,
          y1: mt,
          x2: dt,
          y2: Ht,
          fill: "none",
          key: Xt
        }))
      }
      return Vt
    }

    function Kt(tt) {
      var et = tt.x,
        Vt = tt.width,
        qt = tt.horizontal,
        Dt = void 0 === qt || qt,
        mt = tt.horizontalPoints;
      if (!Dt || !mt || !mt.length) return null;
      var dt = mt.map((function(Ot, qt) {
        var mt = Nt(Nt({}, tt), {}, {
          x1: et,
          y1: Ot,
          x2: et + Vt,
          y2: Ot,
          key: "line-".concat(qt),
          index: qt
        });
        return ut(Dt, mt)
      }));
      return Ot.createElement("g", {
        className: "recharts-cartesian-grid-horizontal"
      }, dt)
    }

    function ht(tt) {
      var et = tt.y,
        Vt = tt.height,
        qt = tt.vertical,
        Dt = void 0 === qt || qt,
        mt = tt.verticalPoints;
      if (!Dt || !mt || !mt.length) return null;
      var dt = mt.map((function(Ot, qt) {
        var mt = Nt(Nt({}, tt), {}, {
          x1: Ot,
          y1: et,
          x2: Ot,
          y2: et + Vt,
          key: "line-".concat(qt),
          index: qt
        });
        return ut(Dt, mt)
      }));
      return Ot.createElement("g", {
        className: "recharts-cartesian-grid-vertical"
      }, dt)
    }

    function vt(tt) {
      var et = tt.horizontalFill,
        Vt = tt.fillOpacity,
        qt = tt.x,
        Dt = tt.y,
        mt = tt.width,
        dt = tt.height,
        jt = tt.horizontalPoints,
        Ht = tt.horizontal;
      if (!(void 0 === Ht || Ht) || !et || !et.length) return null;
      var Xt = jt.map((function(tt) {
        return Math.round(tt + Dt - Dt)
      })).sort((function(tt, et) {
        return tt - et
      }));
      Dt !== Xt[0] && Xt.unshift(0);
      var Qt = Xt.map((function(tt, jt) {
        var Ht = !Xt[jt + 1] ? Dt + dt - tt : Xt[jt + 1] - tt;
        if (Ht <= 0) return null;
        var Qt = jt % et.length;
        return Ot.createElement("rect", {
          key: "react-".concat(jt),
          y: tt,
          x: qt,
          height: Ht,
          width: mt,
          stroke: "none",
          fill: et[Qt],
          fillOpacity: Vt,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return Ot.createElement("g", {
        className: "recharts-cartesian-gridstripes-horizontal"
      }, Qt)
    }

    function Wt(tt) {
      var et = tt.vertical,
        Vt = void 0 === et || et,
        qt = tt.verticalFill,
        Dt = tt.fillOpacity,
        mt = tt.x,
        dt = tt.y,
        jt = tt.width,
        Ht = tt.height,
        Xt = tt.verticalPoints;
      if (!Vt || !qt || !qt.length) return null;
      var Qt = Xt.map((function(tt) {
        return Math.round(tt + mt - mt)
      })).sort((function(tt, et) {
        return tt - et
      }));
      mt !== Qt[0] && Qt.unshift(0);
      var lt = Qt.map((function(tt, et) {
        var Vt = !Qt[et + 1] ? mt + jt - tt : Qt[et + 1] - tt;
        if (Vt <= 0) return null;
        var Xt = et % qt.length;
        return Ot.createElement("rect", {
          key: "react-".concat(et),
          x: tt,
          y: dt,
          width: Vt,
          height: Ht,
          stroke: "none",
          fill: qt[Xt],
          fillOpacity: Dt,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return Ot.createElement("g", {
        className: "recharts-cartesian-gridstripes-vertical"
      }, lt)
    }
    var St = function(tt, et) {
        var Vt = tt.xAxis,
          Ot = tt.width,
          qt = tt.height,
          Dt = tt.offset;
        return (0, Ht.D)((0, Xt.c)(Nt(Nt(Nt({}, Qt.e.defaultProps), Vt), {}, {
          ticks: (0, Ht.S)(Vt, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: Ot,
            height: qt
          }
        })), Dt.left, Dt.left + Dt.width, et)
      },
      ct = function(tt, et) {
        var Vt = tt.yAxis,
          Ot = tt.width,
          qt = tt.height,
          Dt = tt.offset;
        return (0, Ht.D)((0, Xt.c)(Nt(Nt(Nt({}, Qt.e.defaultProps), Vt), {}, {
          ticks: (0, Ht.S)(Vt, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: Ot,
            height: qt
          }
        })), Dt.top, Dt.top + Dt.height, et)
      },
      Rt = {
        horizontal: !0,
        vertical: !0,
        horizontalPoints: [],
        verticalPoints: [],
        stroke: "#ccc",
        fill: "none",
        verticalFill: [],
        horizontalFill: []
      };

    function It(tt) {
      var et, Vt, qt, jt, Ht, Xt, Qt = (0, lt.m)(),
        Et = (0, lt.i)(),
        ft = (0, lt.p)(),
        yt = Nt(Nt({}, tt), {}, {
          stroke: null !== (et = tt.stroke) && void 0 !== et ? et : Rt.stroke,
          fill: null !== (Vt = tt.fill) && void 0 !== Vt ? Vt : Rt.fill,
          horizontal: null !== (qt = tt.horizontal) && void 0 !== qt ? qt : Rt.horizontal,
          horizontalFill: null !== (jt = tt.horizontalFill) && void 0 !== jt ? jt : Rt.horizontalFill,
          vertical: null !== (Ht = tt.vertical) && void 0 !== Ht ? Ht : Rt.vertical,
          verticalFill: null !== (Xt = tt.verticalFill) && void 0 !== Xt ? Xt : Rt.verticalFill,
          x: (0, dt.A)(tt.x) ? tt.x : ft.left,
          y: (0, dt.A)(tt.y) ? tt.y : ft.top,
          width: (0, dt.A)(tt.width) ? tt.width : ft.width,
          height: (0, dt.A)(tt.height) ? tt.height : ft.height
        }),
        Mt = yt.x,
        Jt = yt.y,
        ut = yt.width,
        It = yt.height,
        Pt = yt.syncWithTicks,
        Zt = yt.horizontalValues,
        Lt = yt.verticalValues,
        Ft = (0, lt.f)(),
        kt = (0, lt.C)();
      if (!(0, dt.A)(ut) || ut <= 0 || !(0, dt.A)(It) || It <= 0 || !(0, dt.A)(Mt) || Mt !== +Mt || !(0, dt.A)(Jt) || Jt !== +Jt) return null;
      var Gt = yt.verticalCoordinatesGenerator || St,
        zt = yt.horizontalCoordinatesGenerator || ct,
        ot = yt.horizontalPoints,
        rt = yt.verticalPoints;
      if ((!ot || !ot.length) && Dt()(zt)) {
        var Ut = Zt && Zt.length,
          At = zt({
            yAxis: kt ? Nt(Nt({}, kt), {}, {
              ticks: Ut ? Zt : kt.ticks
            }) : void 0,
            width: Qt,
            height: Et,
            offset: ft
          }, !!Ut || Pt);
        (0, mt.e)(Array.isArray(At), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(wt(At), "]")), Array.isArray(At) && (ot = At)
      }
      if ((!rt || !rt.length) && Dt()(Gt)) {
        var it = Lt && Lt.length,
          Yt = Gt({
            xAxis: Ft ? Nt(Nt({}, Ft), {}, {
              ticks: it ? Lt : Ft.ticks
            }) : void 0,
            width: Qt,
            height: Et,
            offset: ft
          }, !!it || Pt);
        (0, mt.e)(Array.isArray(Yt), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(wt(Yt), "]")), Array.isArray(Yt) && (rt = Yt)
      }
      return Ot.createElement("g", {
        className: "recharts-cartesian-grid"
      }, Ot.createElement(Ct, {
        fill: yt.fill,
        fillOpacity: yt.fillOpacity,
        x: yt.x,
        y: yt.y,
        width: yt.width,
        height: yt.height,
        ry: yt.ry
      }), Ot.createElement(Kt, bt({}, yt, {
        offset: ft,
        horizontalPoints: ot,
        xAxis: Ft,
        yAxis: kt
      })), Ot.createElement(ht, bt({}, yt, {
        offset: ft,
        verticalPoints: rt,
        xAxis: Ft,
        yAxis: kt
      })), Ot.createElement(vt, bt({}, yt, {
        horizontalPoints: ot
      })), Ot.createElement(Wt, bt({}, yt, {
        verticalPoints: rt
      })))
    }
    It.displayName = "CartesianGrid"
  },
  6385: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Jt
    });
    var Ot = Vt(63),
      qt = Vt(6131),
      Dt = Vt(6140),
      mt = Vt(5614),
      dt = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];

    function jt(tt) {
      return jt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, jt(tt)
    }

    function Ht() {
      return Ht = Object.assign ? Object.assign.bind() : function(tt) {
        for (var et = 1; et < arguments.length; et++) {
          var Vt = arguments[et];
          for (var Ot in Vt) Object.prototype.hasOwnProperty.call(Vt, Ot) && (tt[Ot] = Vt[Ot])
        }
        return tt
      }, Ht.apply(this, arguments)
    }

    function Xt(tt, et) {
      return function(tt) {
        if (Array.isArray(tt)) return tt
      }(tt) || function(tt, et) {
        var Vt = null == tt ? null : "undefined" != typeof Symbol && tt[Symbol.iterator] || tt["@@iterator"];
        if (null != Vt) {
          var Ot, qt, Dt, mt, dt = [],
            jt = !0,
            Ht = !1;
          try {
            if (Dt = (Vt = Vt.call(tt)).next, 0 === et) {
              if (Object(Vt) !== Vt) return;
              jt = !1
            } else
              for (; !(jt = (Ot = Dt.call(Vt)).done) && (dt.push(Ot.value), dt.length !== et); jt = !0);
          } catch (tt) {
            Ht = !0, qt = tt
          } finally {
            try {
              if (!jt && null != Vt.return && (mt = Vt.return(), Object(mt) !== mt)) return
            } finally {
              if (Ht) throw qt
            }
          }
          return dt
        }
      }(tt, et) || function(tt, et) {
        if (!tt) return;
        if ("string" === typeof tt) return Qt(tt, et);
        var Vt = Object.prototype.toString.call(tt).slice(8, -1);
        "Object" === Vt && tt.constructor && (Vt = tt.constructor.name);
        if ("Map" === Vt || "Set" === Vt) return Array.from(tt);
        if ("Arguments" === Vt || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Vt)) return Qt(tt, et)
      }(tt, et) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Qt(tt, et) {
      (null == et || et > tt.length) && (et = tt.length);
      for (var Vt = 0, Ot = new Array(et); Vt < et; Vt++) Ot[Vt] = tt[Vt];
      return Ot
    }

    function lt(tt, et) {
      if (null == tt) return {};
      var Vt, Ot, qt = function(tt, et) {
        if (null == tt) return {};
        var Vt = {};
        for (var Ot in tt)
          if (Object.prototype.hasOwnProperty.call(tt, Ot)) {
            if (et.indexOf(Ot) >= 0) continue;
            Vt[Ot] = tt[Ot]
          } return Vt
      }(tt, et);
      if (Object.getOwnPropertySymbols) {
        var Dt = Object.getOwnPropertySymbols(tt);
        for (Ot = 0; Ot < Dt.length; Ot++) Vt = Dt[Ot], et.indexOf(Vt) >= 0 || Object.prototype.propertyIsEnumerable.call(tt, Vt) && (qt[Vt] = tt[Vt])
      }
      return qt
    }

    function Et(tt, et) {
      for (var Vt = 0; Vt < et.length; Vt++) {
        var Ot = et[Vt];
        Ot.enumerable = Ot.enumerable || !1, Ot.configurable = !0, "value" in Ot && (Ot.writable = !0), Object.defineProperty(tt, bt(Ot.key), Ot)
      }
    }

    function ft(tt, et, Vt) {
      return et = yt(et),
        function(tt, et) {
          if (et && ("object" === jt(et) || "function" === typeof et)) return et;
          if (void 0 !== et) throw new TypeError("Derived constructors may only return object or undefined");
          return function(tt) {
            if (void 0 === tt) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return tt
          }(tt)
        }(tt, wt() ? Reflect.construct(et, Vt || [], yt(tt).constructor) : et.apply(tt, Vt))
    }

    function wt() {
      try {
        var tt = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (tt) {}
      return (wt = function() {
        return !!tt
      })()
    }

    function yt(tt) {
      return yt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(tt) {
        return tt.__proto__ || Object.getPrototypeOf(tt)
      }, yt(tt)
    }

    function Nt(tt, et) {
      return Nt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(tt, et) {
        return tt.__proto__ = et, tt
      }, Nt(tt, et)
    }

    function Mt(tt, et, Vt) {
      return (et = bt(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }

    function bt(tt) {
      var et = function(tt, et) {
        if ("object" != jt(tt) || !tt) return tt;
        var Vt = tt[Symbol.toPrimitive];
        if (void 0 !== Vt) {
          var Ot = Vt.call(tt, et || "default");
          if ("object" != jt(Ot)) return Ot;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === et ? String : Number)(tt)
      }(tt, "string");
      return "symbol" == jt(et) ? et : et + ""
    }
    var Jt = function(tt) {
      function et() {
        return function(tt, et) {
          if (!(tt instanceof et)) throw new TypeError("Cannot call a class as a function")
        }(this, et), ft(this, et, arguments)
      }
      return function(tt, et) {
        if ("function" !== typeof et && null !== et) throw new TypeError("Super expression must either be null or a function");
        tt.prototype = Object.create(et && et.prototype, {
          constructor: {
            value: tt,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(tt, "prototype", {
          writable: !1
        }), et && Nt(tt, et)
      }(et, tt), Vt = et, (jt = [{
        key: "render",
        value: function() {
          var tt = this.props,
            et = tt.offset,
            Vt = tt.layout,
            jt = tt.width,
            Qt = tt.dataKey,
            Et = tt.data,
            ft = tt.dataPointFormatter,
            wt = tt.xAxis,
            yt = tt.yAxis,
            Nt = lt(tt, dt),
            Mt = (0, mt.b)(Nt, !1);
          "x" === this.props.direction && "number" !== wt.type && (0, qt.c)(!1);
          var bt = Et.map((function(tt) {
            var qt = ft(tt, Qt),
              mt = qt.x,
              dt = qt.y,
              lt = qt.value,
              Et = qt.errorVal;
            if (!Et) return null;
            var Nt, bt, Jt = [];
            if (Array.isArray(Et)) {
              var Ct = Xt(Et, 2);
              Nt = Ct[0], bt = Ct[1]
            } else Nt = bt = Et;
            if ("vertical" === Vt) {
              var ut = wt.scale,
                Kt = dt + et,
                ht = Kt + jt,
                vt = Kt - jt,
                Wt = ut(lt - Nt),
                St = ut(lt + bt);
              Jt.push({
                x1: St,
                y1: ht,
                x2: St,
                y2: vt
              }), Jt.push({
                x1: Wt,
                y1: Kt,
                x2: St,
                y2: Kt
              }), Jt.push({
                x1: Wt,
                y1: ht,
                x2: Wt,
                y2: vt
              })
            } else if ("horizontal" === Vt) {
              var ct = yt.scale,
                Rt = mt + et,
                It = Rt - jt,
                Pt = Rt + jt,
                Zt = ct(lt - Nt),
                Lt = ct(lt + bt);
              Jt.push({
                x1: It,
                y1: Lt,
                x2: Pt,
                y2: Lt
              }), Jt.push({
                x1: Rt,
                y1: Zt,
                x2: Rt,
                y2: Lt
              }), Jt.push({
                x1: It,
                y1: Zt,
                x2: Pt,
                y2: Zt
              })
            }
            return Ot.createElement(Dt.e, Ht({
              className: "recharts-errorBar",
              key: "bar-".concat(Jt.map((function(tt) {
                return "".concat(tt.x1, "-").concat(tt.x2, "-").concat(tt.y1, "-").concat(tt.y2)
              })))
            }, Mt), Jt.map((function(tt) {
              return Ot.createElement("line", Ht({}, tt, {
                key: "line-".concat(tt.x1, "-").concat(tt.x2, "-").concat(tt.y1, "-").concat(tt.y2)
              }))
            })))
          }));
          return Ot.createElement(Dt.e, {
            className: "recharts-errorBars"
          }, bt)
        }
      }]) && Et(Vt.prototype, jt), Qt && Et(Vt, Qt), Object.defineProperty(Vt, "prototype", {
        writable: !1
      }), Vt;
      var Vt, jt, Qt
    }(Ot.Component);
    Mt(Jt, "defaultProps", {
      stroke: "black",
      strokeWidth: 1.5,
      width: 5,
      offset: 0,
      layout: "horizontal"
    }), Mt(Jt, "displayName", "ErrorBar")
  },
  6573: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => zt
    });
    var Ot = Vt(63),
      qt = Vt(6301),
      Dt = Vt(5436),
      mt = Vt.n(Dt),
      dt = Vt(5603),
      jt = Vt.n(dt),
      Ht = Vt(6377),
      Xt = Vt.n(Ht),
      Qt = Vt(5263),
      lt = Vt(6565),
      Et = Vt(6287),
      ft = Vt(6140),
      wt = Vt(6461),
      yt = Vt(6385),
      Nt = Vt(5348),
      Mt = Vt(5614),
      bt = Vt(6155),
      Jt = Vt(6317),
      Ct = ["type", "layout", "connectNulls", "ref"],
      ut = ["key"];

    function Kt(tt) {
      return Kt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, Kt(tt)
    }

    function ht(tt, et) {
      if (null == tt) return {};
      var Vt, Ot, qt = function(tt, et) {
        if (null == tt) return {};
        var Vt = {};
        for (var Ot in tt)
          if (Object.prototype.hasOwnProperty.call(tt, Ot)) {
            if (et.indexOf(Ot) >= 0) continue;
            Vt[Ot] = tt[Ot]
          } return Vt
      }(tt, et);
      if (Object.getOwnPropertySymbols) {
        var Dt = Object.getOwnPropertySymbols(tt);
        for (Ot = 0; Ot < Dt.length; Ot++) Vt = Dt[Ot], et.indexOf(Vt) >= 0 || Object.prototype.propertyIsEnumerable.call(tt, Vt) && (qt[Vt] = tt[Vt])
      }
      return qt
    }

    function vt() {
      return vt = Object.assign ? Object.assign.bind() : function(tt) {
        for (var et = 1; et < arguments.length; et++) {
          var Vt = arguments[et];
          for (var Ot in Vt) Object.prototype.hasOwnProperty.call(Vt, Ot) && (tt[Ot] = Vt[Ot])
        }
        return tt
      }, vt.apply(this, arguments)
    }

    function Wt(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function St(tt) {
      for (var et = 1; et < arguments.length; et++) {
        var Vt = null != arguments[et] ? arguments[et] : {};
        et % 2 ? Wt(Object(Vt), !0).forEach((function(et) {
          kt(tt, et, Vt[et])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : Wt(Object(Vt)).forEach((function(et) {
          Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
        }))
      }
      return tt
    }

    function ct(tt) {
      return function(tt) {
        if (Array.isArray(tt)) return Rt(tt)
      }(tt) || function(tt) {
        if ("undefined" !== typeof Symbol && null != tt[Symbol.iterator] || null != tt["@@iterator"]) return Array.from(tt)
      }(tt) || function(tt, et) {
        if (!tt) return;
        if ("string" === typeof tt) return Rt(tt, et);
        var Vt = Object.prototype.toString.call(tt).slice(8, -1);
        "Object" === Vt && tt.constructor && (Vt = tt.constructor.name);
        if ("Map" === Vt || "Set" === Vt) return Array.from(tt);
        if ("Arguments" === Vt || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Vt)) return Rt(tt, et)
      }(tt) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Rt(tt, et) {
      (null == et || et > tt.length) && (et = tt.length);
      for (var Vt = 0, Ot = new Array(et); Vt < et; Vt++) Ot[Vt] = tt[Vt];
      return Ot
    }

    function It(tt, et) {
      for (var Vt = 0; Vt < et.length; Vt++) {
        var Ot = et[Vt];
        Ot.enumerable = Ot.enumerable || !1, Ot.configurable = !0, "value" in Ot && (Ot.writable = !0), Object.defineProperty(tt, Gt(Ot.key), Ot)
      }
    }

    function Pt(tt, et, Vt) {
      return et = Lt(et),
        function(tt, et) {
          if (et && ("object" === Kt(et) || "function" === typeof et)) return et;
          if (void 0 !== et) throw new TypeError("Derived constructors may only return object or undefined");
          return function(tt) {
            if (void 0 === tt) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return tt
          }(tt)
        }(tt, Zt() ? Reflect.construct(et, Vt || [], Lt(tt).constructor) : et.apply(tt, Vt))
    }

    function Zt() {
      try {
        var tt = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (tt) {}
      return (Zt = function() {
        return !!tt
      })()
    }

    function Lt(tt) {
      return Lt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(tt) {
        return tt.__proto__ || Object.getPrototypeOf(tt)
      }, Lt(tt)
    }

    function Ft(tt, et) {
      return Ft = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(tt, et) {
        return tt.__proto__ = et, tt
      }, Ft(tt, et)
    }

    function kt(tt, et, Vt) {
      return (et = Gt(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }

    function Gt(tt) {
      var et = function(tt, et) {
        if ("object" != Kt(tt) || !tt) return tt;
        var Vt = tt[Symbol.toPrimitive];
        if (void 0 !== Vt) {
          var Ot = Vt.call(tt, et || "default");
          if ("object" != Kt(Ot)) return Ot;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === et ? String : Number)(tt)
      }(tt, "string");
      return "symbol" == Kt(et) ? et : et + ""
    }
    var zt = function(tt) {
      function et() {
        var tt;
        ! function(tt, et) {
          if (!(tt instanceof et)) throw new TypeError("Cannot call a class as a function")
        }(this, et);
        for (var Vt = arguments.length, Ot = new Array(Vt), qt = 0; qt < Vt; qt++) Ot[qt] = arguments[qt];
        return kt(tt = Pt(this, et, [].concat(Ot)), "state", {
          isAnimationFinished: !0,
          totalLength: 0
        }), kt(tt, "generateSimpleStrokeDasharray", (function(tt, et) {
          return "".concat(et, "px ").concat(tt - et, "px")
        })), kt(tt, "getStrokeDasharray", (function(Vt, Ot, qt) {
          var Dt = qt.reduce((function(tt, et) {
            return tt + et
          }));
          if (!Dt) return tt.generateSimpleStrokeDasharray(Ot, Vt);
          for (var mt = Math.floor(Vt / Dt), dt = Vt % Dt, jt = Ot - Vt, Ht = [], Xt = 0, Qt = 0; Xt < qt.length; Qt += qt[Xt], ++Xt)
            if (Qt + qt[Xt] > dt) {
              Ht = [].concat(ct(qt.slice(0, Xt)), [dt - Qt]);
              break
            } var lt = Ht.length % 2 === 0 ? [0, jt] : [jt];
          return [].concat(ct(et.repeat(qt, mt)), ct(Ht), lt).map((function(tt) {
            return "".concat(tt, "px")
          })).join(", ")
        })), kt(tt, "id", (0, Nt.L)("recharts-line-")), kt(tt, "pathRef", (function(et) {
          tt.mainCurve = et
        })), kt(tt, "handleAnimationEnd", (function() {
          tt.setState({
            isAnimationFinished: !0
          }), tt.props.onAnimationEnd && tt.props.onAnimationEnd()
        })), kt(tt, "handleAnimationStart", (function() {
          tt.setState({
            isAnimationFinished: !1
          }), tt.props.onAnimationStart && tt.props.onAnimationStart()
        })), tt
      }
      return function(tt, et) {
        if ("function" !== typeof et && null !== et) throw new TypeError("Super expression must either be null or a function");
        tt.prototype = Object.create(et && et.prototype, {
          constructor: {
            value: tt,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(tt, "prototype", {
          writable: !1
        }), et && Ft(tt, et)
      }(et, tt), Vt = et, Dt = [{
        key: "componentDidMount",
        value: function() {
          if (this.props.isAnimationActive) {
            var tt = this.getTotalLength();
            this.setState({
              totalLength: tt
            })
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function() {
          if (this.props.isAnimationActive) {
            var tt = this.getTotalLength();
            tt !== this.state.totalLength && this.setState({
              totalLength: tt
            })
          }
        }
      }, {
        key: "getTotalLength",
        value: function() {
          var tt = this.mainCurve;
          try {
            return tt && tt.getTotalLength && tt.getTotalLength() || 0
          } catch (et) {
            return 0
          }
        }
      }, {
        key: "renderErrorBar",
        value: function(tt, et) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var Vt = this.props,
            qt = Vt.points,
            Dt = Vt.xAxis,
            mt = Vt.yAxis,
            dt = Vt.layout,
            jt = Vt.children,
            Ht = (0, Mt.d)(jt, yt.d);
          if (!Ht) return null;
          var Xt = function(tt, et) {
              return {
                x: tt.x,
                y: tt.y,
                value: tt.value,
                errorVal: (0, Jt.Z)(tt.payload, et)
              }
            },
            Qt = {
              clipPath: tt ? "url(#clipPath-".concat(et, ")") : null
            };
          return Ot.createElement(ft.e, Qt, Ht.map((function(tt) {
            return Ot.cloneElement(tt, {
              key: "bar-".concat(tt.props.dataKey),
              data: qt,
              xAxis: Dt,
              yAxis: mt,
              layout: dt,
              dataPointFormatter: Xt
            })
          })))
        }
      }, {
        key: "renderDots",
        value: function(tt, Vt, qt) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var Dt = this.props,
            mt = Dt.dot,
            dt = Dt.points,
            jt = Dt.dataKey,
            Ht = (0, Mt.b)(this.props, !1),
            Xt = (0, Mt.b)(mt, !0),
            Qt = dt.map((function(tt, Vt) {
              var Ot = St(St(St({
                key: "dot-".concat(Vt),
                r: 3
              }, Ht), Xt), {}, {
                index: Vt,
                cx: tt.x,
                cy: tt.y,
                value: tt.value,
                dataKey: jt,
                payload: tt.payload,
                points: dt
              });
              return et.renderDotItem(mt, Ot)
            })),
            lt = {
              clipPath: tt ? "url(#clipPath-".concat(Vt ? "" : "dots-").concat(qt, ")") : null
            };
          return Ot.createElement(ft.e, vt({
            className: "recharts-line-dots",
            key: "dots"
          }, lt), Qt)
        }
      }, {
        key: "renderCurveStatically",
        value: function(tt, et, Vt, qt) {
          var Dt = this.props,
            mt = Dt.type,
            dt = Dt.layout,
            jt = Dt.connectNulls,
            Ht = (Dt.ref, ht(Dt, Ct)),
            Xt = St(St(St({}, (0, Mt.b)(Ht, !0)), {}, {
              fill: "none",
              className: "recharts-line-curve",
              clipPath: et ? "url(#clipPath-".concat(Vt, ")") : null,
              points: tt
            }, qt), {}, {
              type: mt,
              layout: dt,
              connectNulls: jt
            });
          return Ot.createElement(lt.c, vt({}, Xt, {
            pathRef: this.pathRef
          }))
        }
      }, {
        key: "renderCurveWithAnimation",
        value: function(tt, et) {
          var Vt = this,
            Dt = this.props,
            mt = Dt.points,
            dt = Dt.strokeDasharray,
            jt = Dt.isAnimationActive,
            Ht = Dt.animationBegin,
            Xt = Dt.animationDuration,
            Qt = Dt.animationEasing,
            lt = Dt.animationId,
            Et = Dt.animateNewValues,
            ft = Dt.width,
            wt = Dt.height,
            yt = this.state,
            Mt = yt.prevPoints,
            bt = yt.totalLength;
          return Ot.createElement(qt.c, {
            XE: Ht,
            duration: Xt,
            isActive: jt,
            easing: Qt,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "line-".concat(lt),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(Ot) {
            var qt = Ot.t;
            if (Mt) {
              var Dt = Mt.length / mt.length,
                jt = mt.map((function(tt, et) {
                  var Vt = Math.floor(et * Dt);
                  if (Mt[Vt]) {
                    var Ot = Mt[Vt],
                      mt = (0, Nt.r)(Ot.x, tt.x),
                      dt = (0, Nt.r)(Ot.y, tt.y);
                    return St(St({}, tt), {}, {
                      x: mt(qt),
                      y: dt(qt)
                    })
                  }
                  if (Et) {
                    var jt = (0, Nt.r)(2 * ft, tt.x),
                      Ht = (0, Nt.r)(wt / 2, tt.y);
                    return St(St({}, tt), {}, {
                      x: jt(qt),
                      y: Ht(qt)
                    })
                  }
                  return St(St({}, tt), {}, {
                    x: tt.x,
                    y: tt.y
                  })
                }));
              return Vt.renderCurveStatically(jt, tt, et)
            }
            var Ht, Xt = (0, Nt.r)(0, bt)(qt);
            if (dt) {
              var Qt = "".concat(dt).split(/[,\s]+/gim).map((function(tt) {
                return parseFloat(tt)
              }));
              Ht = Vt.getStrokeDasharray(Xt, bt, Qt)
            } else Ht = Vt.generateSimpleStrokeDasharray(bt, Xt);
            return Vt.renderCurveStatically(mt, tt, et, {
              strokeDasharray: Ht
            })
          }))
        }
      }, {
        key: "renderCurve",
        value: function(tt, et) {
          var Vt = this.props,
            Ot = Vt.points,
            qt = Vt.isAnimationActive,
            Dt = this.state,
            mt = Dt.prevPoints,
            dt = Dt.totalLength;
          return qt && Ot && Ot.length && (!mt && dt > 0 || !Xt()(mt, Ot)) ? this.renderCurveWithAnimation(tt, et) : this.renderCurveStatically(Ot, tt, et)
        }
      }, {
        key: "render",
        value: function() {
          var tt, et = this.props,
            Vt = et.hide,
            qt = et.dot,
            Dt = et.points,
            mt = et.className,
            dt = et.xAxis,
            Ht = et.yAxis,
            Xt = et.top,
            lt = et.left,
            Et = et.width,
            yt = et.height,
            Nt = et.isAnimationActive,
            bt = et.id;
          if (Vt || !Dt || !Dt.length) return null;
          var Jt = this.state.isAnimationFinished,
            Ct = 1 === Dt.length,
            ut = (0, Qt.b)("recharts-line", mt),
            Kt = dt && dt.allowDataOverflow,
            ht = Ht && Ht.allowDataOverflow,
            vt = Kt || ht,
            Wt = jt()(bt) ? this.id : bt,
            St = null !== (tt = (0, Mt.b)(qt, !1)) && void 0 !== tt ? tt : {
              r: 3,
              strokeWidth: 2
            },
            ct = St.r,
            Rt = void 0 === ct ? 3 : ct,
            It = St.strokeWidth,
            Pt = void 0 === It ? 2 : It,
            Zt = ((0, Mt.n)(qt) ? qt : {}).clipDot,
            Lt = void 0 === Zt || Zt,
            Ft = 2 * Rt + Pt;
          return Ot.createElement(ft.e, {
            className: ut
          }, Kt || ht ? Ot.createElement("defs", null, Ot.createElement("clipPath", {
            id: "clipPath-".concat(Wt)
          }, Ot.createElement("rect", {
            x: Kt ? lt : lt - Et / 2,
            y: ht ? Xt : Xt - yt / 2,
            width: Kt ? Et : 2 * Et,
            height: ht ? yt : 2 * yt
          })), !Lt && Ot.createElement("clipPath", {
            id: "clipPath-dots-".concat(Wt)
          }, Ot.createElement("rect", {
            x: lt - Ft / 2,
            y: Xt - Ft / 2,
            width: Et + Ft,
            height: yt + Ft
          }))) : null, !Ct && this.renderCurve(vt, Wt), this.renderErrorBar(vt, Wt), (Ct || qt) && this.renderDots(vt, Lt, Wt), (!Nt || Jt) && wt.b.renderCallByParent(this.props, Dt))
        }
      }], dt = [{
        key: "getDerivedStateFromProps",
        value: function(tt, et) {
          return tt.animationId !== et.prevAnimationId ? {
            prevAnimationId: tt.animationId,
            curPoints: tt.points,
            prevPoints: et.curPoints
          } : tt.points !== et.curPoints ? {
            curPoints: tt.points
          } : null
        }
      }, {
        key: "repeat",
        value: function(tt, et) {
          for (var Vt = tt.length % 2 !== 0 ? [].concat(ct(tt), [0]) : tt, Ot = [], qt = 0; qt < et; ++qt) Ot = [].concat(ct(Ot), ct(Vt));
          return Ot
        }
      }, {
        key: "renderDotItem",
        value: function(tt, et) {
          var Vt;
          if (Ot.isValidElement(tt)) Vt = Ot.cloneElement(tt, et);
          else if (mt()(tt)) Vt = tt(et);
          else {
            var qt = et.key,
              Dt = ht(et, ut),
              dt = (0, Qt.b)("recharts-line-dot", "boolean" !== typeof tt ? tt.className : "");
            Vt = Ot.createElement(Et.d, vt({
              key: qt
            }, Dt, {
              className: dt
            }))
          }
          return Vt
        }
      }], Dt && It(Vt.prototype, Dt), dt && It(Vt, dt), Object.defineProperty(Vt, "prototype", {
        writable: !1
      }), Vt;
      var Vt, Dt, dt
    }(Ot.PureComponent);
    kt(zt, "displayName", "Line"), kt(zt, "defaultProps", {
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
      isAnimationActive: !bt.c.isSsr,
      animateNewValues: !0,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease",
      hide: !1,
      label: !1
    }), kt(zt, "getComposedData", (function(tt) {
      var et = tt.props,
        Vt = tt.xAxis,
        Ot = tt.yAxis,
        qt = tt.xAxisTicks,
        Dt = tt.yAxisTicks,
        mt = tt.dataKey,
        dt = tt.bandSize,
        Ht = tt.displayedData,
        Xt = tt.offset,
        Qt = et.layout;
      return St({
        points: Ht.map((function(tt, et) {
          var Ht = (0, Jt.Z)(tt, mt);
          return "horizontal" === Qt ? {
            x: (0, Jt.z)({
              axis: Vt,
              ticks: qt,
              bandSize: dt,
              entry: tt,
              index: et
            }),
            y: jt()(Ht) ? null : Ot.scale(Ht),
            value: Ht,
            payload: tt
          } : {
            x: jt()(Ht) ? null : Vt.scale(Ht),
            y: (0, Jt.z)({
              axis: Ot,
              ticks: Dt,
              bandSize: dt,
              entry: tt,
              index: et
            }),
            value: Ht,
            payload: tt
          }
        })),
        layout: Qt
      }, Xt)
    }))
  },
  6506: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Pt
    });
    var Ot = Vt(63),
      qt = Vt(5436),
      Dt = Vt.n(qt),
      mt = Vt(6515),
      dt = Vt.n(mt),
      jt = Vt(5263),
      Ht = Vt(6140),
      Xt = Vt(6406),
      Qt = Vt(6417),
      lt = Vt(5348),
      Et = Vt(6423),
      ft = Vt(5609),
      wt = Vt(5614),
      yt = Vt(6532);

    function Nt(tt) {
      return Nt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, Nt(tt)
    }

    function Mt(tt, et) {
      for (var Vt = 0; Vt < et.length; Vt++) {
        var Ot = et[Vt];
        Ot.enumerable = Ot.enumerable || !1, Ot.configurable = !0, "value" in Ot && (Ot.writable = !0), Object.defineProperty(tt, Wt(Ot.key), Ot)
      }
    }

    function bt(tt, et, Vt) {
      return et = Ct(et),
        function(tt, et) {
          if (et && ("object" === Nt(et) || "function" === typeof et)) return et;
          if (void 0 !== et) throw new TypeError("Derived constructors may only return object or undefined");
          return function(tt) {
            if (void 0 === tt) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return tt
          }(tt)
        }(tt, Jt() ? Reflect.construct(et, Vt || [], Ct(tt).constructor) : et.apply(tt, Vt))
    }

    function Jt() {
      try {
        var tt = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (tt) {}
      return (Jt = function() {
        return !!tt
      })()
    }

    function Ct(tt) {
      return Ct = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(tt) {
        return tt.__proto__ || Object.getPrototypeOf(tt)
      }, Ct(tt)
    }

    function ut(tt, et) {
      return ut = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(tt, et) {
        return tt.__proto__ = et, tt
      }, ut(tt, et)
    }

    function Kt(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function ht(tt) {
      for (var et = 1; et < arguments.length; et++) {
        var Vt = null != arguments[et] ? arguments[et] : {};
        et % 2 ? Kt(Object(Vt), !0).forEach((function(et) {
          vt(tt, et, Vt[et])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : Kt(Object(Vt)).forEach((function(et) {
          Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
        }))
      }
      return tt
    }

    function vt(tt, et, Vt) {
      return (et = Wt(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }

    function Wt(tt) {
      var et = function(tt, et) {
        if ("object" != Nt(tt) || !tt) return tt;
        var Vt = tt[Symbol.toPrimitive];
        if (void 0 !== Vt) {
          var Ot = Vt.call(tt, et || "default");
          if ("object" != Nt(Ot)) return Ot;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === et ? String : Number)(tt)
      }(tt, "string");
      return "symbol" == Nt(et) ? et : et + ""
    }

    function St(tt, et) {
      return function(tt) {
        if (Array.isArray(tt)) return tt
      }(tt) || function(tt, et) {
        var Vt = null == tt ? null : "undefined" != typeof Symbol && tt[Symbol.iterator] || tt["@@iterator"];
        if (null != Vt) {
          var Ot, qt, Dt, mt, dt = [],
            jt = !0,
            Ht = !1;
          try {
            if (Dt = (Vt = Vt.call(tt)).next, 0 === et) {
              if (Object(Vt) !== Vt) return;
              jt = !1
            } else
              for (; !(jt = (Ot = Dt.call(Vt)).done) && (dt.push(Ot.value), dt.length !== et); jt = !0);
          } catch (tt) {
            Ht = !0, qt = tt
          } finally {
            try {
              if (!jt && null != Vt.return && (mt = Vt.return(), Object(mt) !== mt)) return
            } finally {
              if (Ht) throw qt
            }
          }
          return dt
        }
      }(tt, et) || function(tt, et) {
        if (!tt) return;
        if ("string" === typeof tt) return ct(tt, et);
        var Vt = Object.prototype.toString.call(tt).slice(8, -1);
        "Object" === Vt && tt.constructor && (Vt = tt.constructor.name);
        if ("Map" === Vt || "Set" === Vt) return Array.from(tt);
        if ("Arguments" === Vt || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Vt)) return ct(tt, et)
      }(tt, et) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function ct(tt, et) {
      (null == et || et > tt.length) && (et = tt.length);
      for (var Vt = 0, Ot = new Array(et); Vt < et; Vt++) Ot[Vt] = tt[Vt];
      return Ot
    }

    function Rt() {
      return Rt = Object.assign ? Object.assign.bind() : function(tt) {
        for (var et = 1; et < arguments.length; et++) {
          var Vt = arguments[et];
          for (var Ot in Vt) Object.prototype.hasOwnProperty.call(Vt, Ot) && (tt[Ot] = Vt[Ot])
        }
        return tt
      }, Rt.apply(this, arguments)
    }

    function It(tt) {
      var et = tt.x,
        Vt = tt.y,
        qt = tt.segment,
        mt = tt.xAxisId,
        Nt = tt.yAxisId,
        Mt = tt.shape,
        bt = tt.className,
        Jt = tt.alwaysShow,
        Ct = (0, yt.n)(),
        ut = (0, yt.x)(mt),
        Kt = (0, yt.A)(Nt),
        vt = (0, yt.t)();
      if (!Ct || !vt) return null;
      (0, ft.e)(void 0 === Jt, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var Wt = function(tt, et, Vt, Ot, qt, Dt, mt, jt, Ht) {
        var Xt = qt.x,
          lt = qt.y,
          Et = qt.width,
          ft = qt.height;
        if (Vt) {
          var wt = Ht.y,
            yt = tt.y.apply(wt, {
              position: Dt
            });
          if ((0, Qt.d)(Ht, "discard") && !tt.y.isInRange(yt)) return null;
          var Nt = [{
            x: Xt + Et,
            y: yt
          }, {
            x: Xt,
            y: yt
          }];
          return "left" === jt ? Nt.reverse() : Nt
        }
        if (et) {
          var Mt = Ht.x,
            bt = tt.x.apply(Mt, {
              position: Dt
            });
          if ((0, Qt.d)(Ht, "discard") && !tt.x.isInRange(bt)) return null;
          var Jt = [{
            x: bt,
            y: lt + ft
          }, {
            x: bt,
            y: lt
          }];
          return "top" === mt ? Jt.reverse() : Jt
        }
        if (Ot) {
          var Ct = Ht.segment.map((function(et) {
            return tt.apply(et, {
              position: Dt
            })
          }));
          return (0, Qt.d)(Ht, "discard") && dt()(Ct, (function(et) {
            return !tt.isInRange(et)
          })) ? null : Ct
        }
        return null
      }((0, Et.b)({
        x: ut.scale,
        y: Kt.scale
      }), (0, lt.w)(et), (0, lt.w)(Vt), qt && 2 === qt.length, vt, tt.position, ut.orientation, Kt.orientation, tt);
      if (!Wt) return null;
      var ct = St(Wt, 2),
        It = ct[0],
        Pt = It.x,
        Zt = It.y,
        Lt = ct[1],
        Ft = Lt.x,
        kt = Lt.y,
        Gt = ht(ht({
          clipPath: (0, Qt.d)(tt, "hidden") ? "url(#".concat(Ct, ")") : void 0
        }, (0, wt.b)(tt, !0)), {}, {
          x1: Pt,
          y1: Zt,
          x2: Ft,
          y2: kt
        });
      return Ot.createElement(Ht.e, {
        className: (0, jt.b)("recharts-reference-line", bt)
      }, function(tt, et) {
        return Ot.isValidElement(tt) ? Ot.cloneElement(tt, et) : Dt()(tt) ? tt(et) : Ot.createElement("line", Rt({}, et, {
          className: "recharts-reference-line-line"
        }))
      }(Mt, Gt), Xt.e.renderCallByParent(tt, (0, Et.l)({
        x1: Pt,
        y1: Zt,
        x2: Ft,
        y2: kt
      })))
    }
    var Pt = function(tt) {
      function et() {
        return function(tt, et) {
          if (!(tt instanceof et)) throw new TypeError("Cannot call a class as a function")
        }(this, et), bt(this, et, arguments)
      }
      return function(tt, et) {
        if ("function" !== typeof et && null !== et) throw new TypeError("Super expression must either be null or a function");
        tt.prototype = Object.create(et && et.prototype, {
          constructor: {
            value: tt,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(tt, "prototype", {
          writable: !1
        }), et && ut(tt, et)
      }(et, tt), Vt = et, (qt = [{
        key: "render",
        value: function() {
          return Ot.createElement(It, this.props)
        }
      }]) && Mt(Vt.prototype, qt), Dt && Mt(Vt, Dt), Object.defineProperty(Vt, "prototype", {
        writable: !1
      }), Vt;
      var Vt, qt, Dt
    }(Ot.Component);
    vt(Pt, "displayName", "ReferenceLine"), vt(Pt, "defaultProps", {
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
  6579: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Mt
    });
    var Ot = Vt(63),
      qt = Vt(5263),
      Dt = Vt(6532),
      mt = Vt(6582),
      dt = Vt(6317);

    function jt(tt) {
      return jt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, jt(tt)
    }

    function Ht(tt, et) {
      for (var Vt = 0; Vt < et.length; Vt++) {
        var Ot = et[Vt];
        Ot.enumerable = Ot.enumerable || !1, Ot.configurable = !0, "value" in Ot && (Ot.writable = !0), Object.defineProperty(tt, wt(Ot.key), Ot)
      }
    }

    function Xt(tt, et, Vt) {
      return et = lt(et),
        function(tt, et) {
          if (et && ("object" === jt(et) || "function" === typeof et)) return et;
          if (void 0 !== et) throw new TypeError("Derived constructors may only return object or undefined");
          return function(tt) {
            if (void 0 === tt) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return tt
          }(tt)
        }(tt, Qt() ? Reflect.construct(et, Vt || [], lt(tt).constructor) : et.apply(tt, Vt))
    }

    function Qt() {
      try {
        var tt = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (tt) {}
      return (Qt = function() {
        return !!tt
      })()
    }

    function lt(tt) {
      return lt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(tt) {
        return tt.__proto__ || Object.getPrototypeOf(tt)
      }, lt(tt)
    }

    function Et(tt, et) {
      return Et = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(tt, et) {
        return tt.__proto__ = et, tt
      }, Et(tt, et)
    }

    function ft(tt, et, Vt) {
      return (et = wt(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }

    function wt(tt) {
      var et = function(tt, et) {
        if ("object" != jt(tt) || !tt) return tt;
        var Vt = tt[Symbol.toPrimitive];
        if (void 0 !== Vt) {
          var Ot = Vt.call(tt, et || "default");
          if ("object" != jt(Ot)) return Ot;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === et ? String : Number)(tt)
      }(tt, "string");
      return "symbol" == jt(et) ? et : et + ""
    }

    function yt() {
      return yt = Object.assign ? Object.assign.bind() : function(tt) {
        for (var et = 1; et < arguments.length; et++) {
          var Vt = arguments[et];
          for (var Ot in Vt) Object.prototype.hasOwnProperty.call(Vt, Ot) && (tt[Ot] = Vt[Ot])
        }
        return tt
      }, yt.apply(this, arguments)
    }

    function Nt(tt) {
      var et = tt.xAxisId,
        Vt = (0, Dt.m)(),
        jt = (0, Dt.i)(),
        Ht = (0, Dt.x)(et);
      return null == Ht ? null : Ot.createElement(mt.e, yt({}, Ht, {
        className: (0, qt.b)("recharts-".concat(Ht.axisType, " ").concat(Ht.axisType), Ht.className),
        viewBox: {
          x: 0,
          y: 0,
          width: Vt,
          height: jt
        },
        ticksGenerator: function(tt) {
          return (0, dt.S)(tt, !0)
        }
      }))
    }
    var Mt = function(tt) {
      function et() {
        return function(tt, et) {
          if (!(tt instanceof et)) throw new TypeError("Cannot call a class as a function")
        }(this, et), Xt(this, et, arguments)
      }
      return function(tt, et) {
        if ("function" !== typeof et && null !== et) throw new TypeError("Super expression must either be null or a function");
        tt.prototype = Object.create(et && et.prototype, {
          constructor: {
            value: tt,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(tt, "prototype", {
          writable: !1
        }), et && Et(tt, et)
      }(et, tt), Vt = et, (qt = [{
        key: "render",
        value: function() {
          return Ot.createElement(Nt, this.props)
        }
      }]) && Ht(Vt.prototype, qt), Dt && Ht(Vt, Dt), Object.defineProperty(Vt, "prototype", {
        writable: !1
      }), Vt;
      var Vt, qt, Dt
    }(Ot.Component);
    ft(Mt, "displayName", "XAxis"), ft(Mt, "defaultProps", {
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
  6587: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Mt
    });
    var Ot = Vt(63),
      qt = Vt(5263),
      Dt = Vt(6532),
      mt = Vt(6582),
      dt = Vt(6317);

    function jt(tt) {
      return jt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, jt(tt)
    }

    function Ht(tt, et) {
      for (var Vt = 0; Vt < et.length; Vt++) {
        var Ot = et[Vt];
        Ot.enumerable = Ot.enumerable || !1, Ot.configurable = !0, "value" in Ot && (Ot.writable = !0), Object.defineProperty(tt, wt(Ot.key), Ot)
      }
    }

    function Xt(tt, et, Vt) {
      return et = lt(et),
        function(tt, et) {
          if (et && ("object" === jt(et) || "function" === typeof et)) return et;
          if (void 0 !== et) throw new TypeError("Derived constructors may only return object or undefined");
          return function(tt) {
            if (void 0 === tt) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return tt
          }(tt)
        }(tt, Qt() ? Reflect.construct(et, Vt || [], lt(tt).constructor) : et.apply(tt, Vt))
    }

    function Qt() {
      try {
        var tt = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (tt) {}
      return (Qt = function() {
        return !!tt
      })()
    }

    function lt(tt) {
      return lt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(tt) {
        return tt.__proto__ || Object.getPrototypeOf(tt)
      }, lt(tt)
    }

    function Et(tt, et) {
      return Et = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(tt, et) {
        return tt.__proto__ = et, tt
      }, Et(tt, et)
    }

    function ft(tt, et, Vt) {
      return (et = wt(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }

    function wt(tt) {
      var et = function(tt, et) {
        if ("object" != jt(tt) || !tt) return tt;
        var Vt = tt[Symbol.toPrimitive];
        if (void 0 !== Vt) {
          var Ot = Vt.call(tt, et || "default");
          if ("object" != jt(Ot)) return Ot;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === et ? String : Number)(tt)
      }(tt, "string");
      return "symbol" == jt(et) ? et : et + ""
    }

    function yt() {
      return yt = Object.assign ? Object.assign.bind() : function(tt) {
        for (var et = 1; et < arguments.length; et++) {
          var Vt = arguments[et];
          for (var Ot in Vt) Object.prototype.hasOwnProperty.call(Vt, Ot) && (tt[Ot] = Vt[Ot])
        }
        return tt
      }, yt.apply(this, arguments)
    }
    var Nt = function(tt) {
        var et = tt.yAxisId,
          Vt = (0, Dt.m)(),
          jt = (0, Dt.i)(),
          Ht = (0, Dt.A)(et);
        return null == Ht ? null : Ot.createElement(mt.e, yt({}, Ht, {
          className: (0, qt.b)("recharts-".concat(Ht.axisType, " ").concat(Ht.axisType), Ht.className),
          viewBox: {
            x: 0,
            y: 0,
            width: Vt,
            height: jt
          },
          ticksGenerator: function(tt) {
            return (0, dt.S)(tt, !0)
          }
        }))
      },
      Mt = function(tt) {
        function et() {
          return function(tt, et) {
            if (!(tt instanceof et)) throw new TypeError("Cannot call a class as a function")
          }(this, et), Xt(this, et, arguments)
        }
        return function(tt, et) {
          if ("function" !== typeof et && null !== et) throw new TypeError("Super expression must either be null or a function");
          tt.prototype = Object.create(et && et.prototype, {
            constructor: {
              value: tt,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(tt, "prototype", {
            writable: !1
          }), et && Et(tt, et)
        }(et, tt), Vt = et, (qt = [{
          key: "render",
          value: function() {
            return Ot.createElement(Nt, this.props)
          }
        }]) && Ht(Vt.prototype, qt), Dt && Ht(Vt, Dt), Object.defineProperty(Vt, "prototype", {
          writable: !1
        }), Vt;
        var Vt, qt, Dt
      }(Ot.Component);
    ft(Mt, "displayName", "YAxis"), ft(Mt, "defaultProps", {
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
  6584: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => wt
    });
    var Ot = Vt(5436),
      qt = Vt.n(Ot),
      Dt = Vt(5348),
      mt = Vt(6310),
      dt = Vt(6155),
      jt = Vt(6423);

    function Ht(tt, et, Vt) {
      if (et < 1) return [];
      if (1 === et && void 0 === Vt) return tt;
      for (var Ot = [], qt = 0; qt < tt.length; qt += et) {
        if (void 0 !== Vt && !0 !== Vt(tt[qt])) return;
        Ot.push(tt[qt])
      }
      return Ot
    }

    function Xt(tt, et, Vt, Ot, qt) {
      if (tt * et < tt * Ot || tt * et > tt * qt) return !1;
      var Dt = Vt();
      return tt * (et - tt * Dt / 2 - Ot) >= 0 && tt * (et + tt * Dt / 2 - qt) <= 0
    }

    function Qt(tt) {
      return Qt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, Qt(tt)
    }

    function lt(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function Et(tt) {
      for (var et = 1; et < arguments.length; et++) {
        var Vt = null != arguments[et] ? arguments[et] : {};
        et % 2 ? lt(Object(Vt), !0).forEach((function(et) {
          ft(tt, et, Vt[et])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : lt(Object(Vt)).forEach((function(et) {
          Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
        }))
      }
      return tt
    }

    function ft(tt, et, Vt) {
      return (et = function(tt) {
        var et = function(tt, et) {
          if ("object" != Qt(tt) || !tt) return tt;
          var Vt = tt[Symbol.toPrimitive];
          if (void 0 !== Vt) {
            var Ot = Vt.call(tt, et || "default");
            if ("object" != Qt(Ot)) return Ot;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === et ? String : Number)(tt)
        }(tt, "string");
        return "symbol" == Qt(et) ? et : et + ""
      }(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }

    function wt(tt, et, Vt) {
      var Ot = tt.BQ,
        Qt = tt.ticks,
        lt = tt.viewBox,
        ft = tt.minTickGap,
        wt = tt.orientation,
        yt = tt.interval,
        Nt = tt.tickFormatter,
        Mt = tt.unit,
        bt = tt.angle;
      if (!Qt || !Qt.length || !Ot) return [];
      if ((0, Dt.A)(yt) || dt.c.isSsr) return function(tt, et) {
        return Ht(tt, et + 1)
      }(Qt, "number" === typeof yt && (0, Dt.A)(yt) ? yt : 0);
      var Jt = [],
        Ct = "top" === wt || "bottom" === wt ? "width" : "height",
        ut = Mt && "width" === Ct ? (0, mt.g)(Mt, {
          fontSize: et,
          letterSpacing: Vt
        }) : {
          width: 0,
          height: 0
        },
        Kt = function(tt, Ot) {
          var Dt = qt()(Nt) ? Nt(tt.value, Ot) : tt.value;
          return "width" === Ct ? function(tt, et, Vt) {
            var Ot = {
              width: tt.width + et.width,
              height: tt.height + et.height
            };
            return (0, jt.h)(Ot, Vt)
          }((0, mt.g)(Dt, {
            fontSize: et,
            letterSpacing: Vt
          }), ut, bt) : (0, mt.g)(Dt, {
            fontSize: et,
            letterSpacing: Vt
          })[Ct]
        },
        ht = Qt.length >= 2 ? (0, Dt.H)(Qt[1].coordinate - Qt[0].coordinate) : 1,
        vt = function(tt, et, Vt) {
          var Ot = "width" === Vt,
            qt = tt.x,
            Dt = tt.y,
            mt = tt.width,
            dt = tt.height;
          return 1 === et ? {
            start: Ot ? qt : Dt,
            end: Ot ? qt + mt : Dt + dt
          } : {
            start: Ot ? qt + mt : Dt + dt,
            end: Ot ? qt : Dt
          }
        }(lt, ht, Ct);
      return "equidistantPreserveStart" === yt ? function(tt, et, Vt, Ot, qt) {
        for (var Dt, mt = (Ot || []).slice(), dt = et.start, jt = et.end, Qt = 0, lt = 1, Et = dt, ft = function() {
            var et = null === Ot || void 0 === Ot ? void 0 : Ot[Qt];
            if (void 0 === et) return {
              v: Ht(Ot, lt)
            };
            var Dt, mt = Qt,
              ft = function() {
                return void 0 === Dt && (Dt = Vt(et, mt)), Dt
              },
              wt = et.coordinate,
              yt = 0 === Qt || Xt(tt, wt, ft, Et, jt);
            yt || (Qt = 0, Et = dt, lt += 1), yt && (Et = wt + tt * (ft() / 2 + qt), Qt += lt)
          }; lt <= mt.length;)
          if (Dt = ft()) return Dt.v;
        return []
      }(ht, vt, Kt, Qt, ft) : (Jt = "preserveStart" === yt || "preserveStartEnd" === yt ? function(tt, et, Vt, Ot, qt, Dt) {
        var mt = (Ot || []).slice(),
          dt = mt.length,
          jt = et.start,
          Ht = et.end;
        if (Dt) {
          var Qt = Ot[dt - 1],
            lt = Vt(Qt, dt - 1),
            ft = tt * (Qt.coordinate + tt * lt / 2 - Ht);
          mt[dt - 1] = Qt = Et(Et({}, Qt), {}, {
            tickCoord: ft > 0 ? Qt.coordinate - ft * tt : Qt.coordinate
          }), Xt(tt, Qt.tickCoord, (function() {
            return lt
          }), jt, Ht) && (Ht = Qt.tickCoord - tt * (lt / 2 + qt), mt[dt - 1] = Et(Et({}, Qt), {}, {
            isShow: !0
          }))
        }
        for (var wt = Dt ? dt - 1 : dt, yt = function(et) {
            var Ot, Dt = mt[et],
              dt = function() {
                return void 0 === Ot && (Ot = Vt(Dt, et)), Ot
              };
            if (0 === et) {
              var Qt = tt * (Dt.coordinate - tt * dt() / 2 - jt);
              mt[et] = Dt = Et(Et({}, Dt), {}, {
                tickCoord: Qt < 0 ? Dt.coordinate - Qt * tt : Dt.coordinate
              })
            } else mt[et] = Dt = Et(Et({}, Dt), {}, {
              tickCoord: Dt.coordinate
            });
            Xt(tt, Dt.tickCoord, dt, jt, Ht) && (jt = Dt.tickCoord + tt * (dt() / 2 + qt), mt[et] = Et(Et({}, Dt), {}, {
              isShow: !0
            }))
          }, Nt = 0; Nt < wt; Nt++) yt(Nt);
        return mt
      }(ht, vt, Kt, Qt, ft, "preserveStartEnd" === yt) : function(tt, et, Vt, Ot, qt) {
        for (var Dt = (Ot || []).slice(), mt = Dt.length, dt = et.start, jt = et.end, Ht = function(et) {
            var Ot, Ht = Dt[et],
              Qt = function() {
                return void 0 === Ot && (Ot = Vt(Ht, et)), Ot
              };
            if (et === mt - 1) {
              var lt = tt * (Ht.coordinate + tt * Qt() / 2 - jt);
              Dt[et] = Ht = Et(Et({}, Ht), {}, {
                tickCoord: lt > 0 ? Ht.coordinate - lt * tt : Ht.coordinate
              })
            } else Dt[et] = Ht = Et(Et({}, Ht), {}, {
              tickCoord: Ht.coordinate
            });
            Xt(tt, Ht.tickCoord, Qt, dt, jt) && (jt = Ht.tickCoord - tt * (Qt() / 2 + qt), Dt[et] = Et(Et({}, Ht), {}, {
              isShow: !0
            }))
          }, Qt = mt - 1; Qt >= 0; Qt--) Ht(Qt);
        return Dt
      }(ht, vt, Kt, Qt, ft), Jt.filter((function(tt) {
        return tt.isShow
      })))
    }
  },
  6593: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => jt
    });
    var Ot = Vt(5643),
      qt = Vt(6449),
      Dt = Vt(6579),
      mt = Vt(6587),
      dt = Vt(6423),
      jt = (0, Ot.b)({
        chartName: "BarChart",
        GraphicalChild: qt.e,
        defaultTooltipEventType: "axis",
        validateTooltipEventTypes: ["axis", "item"],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: Dt.b
        }, {
          axisType: "yAxis",
          AxisComp: mt.d
        }],
        formatAxisMap: dt.d
      })
  },
  5639: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => De
    });
    var Ot = Vt(5643),
      qt = Vt(6568),
      Dt = Vt(6449),
      mt = Vt(6573),
      dt = Vt(63),
      jt = Vt(6301),
      Ht = Vt(5603),
      Xt = Vt.n(Ht),
      Qt = Vt(6377),
      lt = Vt.n(Qt),
      Et = Vt(5436),
      ft = Vt.n(Et),
      wt = Vt(5263),
      yt = Vt(6140),
      Nt = Vt(6461),
      Mt = Vt(5614),
      bt = Vt(6155);

    function Jt(tt) {
      return Jt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, Jt(tt)
    }

    function Ct(tt, et) {
      for (var Vt = 0; Vt < et.length; Vt++) {
        var Ot = et[Vt];
        Ot.enumerable = Ot.enumerable || !1, Ot.configurable = !0, "value" in Ot && (Ot.writable = !0), Object.defineProperty(tt, St(Ot.key), Ot)
      }
    }

    function ut(tt, et, Vt) {
      return et = ht(et),
        function(tt, et) {
          if (et && ("object" === Jt(et) || "function" === typeof et)) return et;
          if (void 0 !== et) throw new TypeError("Derived constructors may only return object or undefined");
          return function(tt) {
            if (void 0 === tt) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return tt
          }(tt)
        }(tt, Kt() ? Reflect.construct(et, Vt || [], ht(tt).constructor) : et.apply(tt, Vt))
    }

    function Kt() {
      try {
        var tt = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (tt) {}
      return (Kt = function() {
        return !!tt
      })()
    }

    function ht(tt) {
      return ht = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(tt) {
        return tt.__proto__ || Object.getPrototypeOf(tt)
      }, ht(tt)
    }

    function vt(tt, et) {
      return vt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(tt, et) {
        return tt.__proto__ = et, tt
      }, vt(tt, et)
    }

    function Wt(tt, et, Vt) {
      return (et = St(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }

    function St(tt) {
      var et = function(tt, et) {
        if ("object" != Jt(tt) || !tt) return tt;
        var Vt = tt[Symbol.toPrimitive];
        if (void 0 !== Vt) {
          var Ot = Vt.call(tt, et || "default");
          if ("object" != Jt(Ot)) return Ot;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === et ? String : Number)(tt)
      }(tt, "string");
      return "symbol" == Jt(et) ? et : et + ""
    }
    var ct = function(tt) {
      function et() {
        return function(tt, et) {
          if (!(tt instanceof et)) throw new TypeError("Cannot call a class as a function")
        }(this, et), ut(this, et, arguments)
      }
      return function(tt, et) {
        if ("function" !== typeof et && null !== et) throw new TypeError("Super expression must either be null or a function");
        tt.prototype = Object.create(et && et.prototype, {
          constructor: {
            value: tt,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(tt, "prototype", {
          writable: !1
        }), et && vt(tt, et)
      }(et, tt), Vt = et, (Ot = [{
        key: "render",
        value: function() {
          return null
        }
      }]) && Ct(Vt.prototype, Ot), qt && Ct(Vt, qt), Object.defineProperty(Vt, "prototype", {
        writable: !1
      }), Vt;
      var Vt, Ot, qt
    }(dt.Component);
    Wt(ct, "displayName", "ZAxis"), Wt(ct, "defaultProps", {
      zAxisId: 0,
      range: [64, 64],
      scale: "auto",
      type: "number"
    });
    var Rt = Vt(6565),
      It = Vt(6385),
      Pt = Vt(6457),
      Zt = Vt(5348),
      Lt = Vt(6317),
      Ft = Vt(5631),
      kt = Vt(6228),
      Gt = Vt(6476),
      zt = ["option", "isActive"];

    function ot() {
      return ot = Object.assign ? Object.assign.bind() : function(tt) {
        for (var et = 1; et < arguments.length; et++) {
          var Vt = arguments[et];
          for (var Ot in Vt) Object.prototype.hasOwnProperty.call(Vt, Ot) && (tt[Ot] = Vt[Ot])
        }
        return tt
      }, ot.apply(this, arguments)
    }

    function rt(tt, et) {
      if (null == tt) return {};
      var Vt, Ot, qt = function(tt, et) {
        if (null == tt) return {};
        var Vt = {};
        for (var Ot in tt)
          if (Object.prototype.hasOwnProperty.call(tt, Ot)) {
            if (et.indexOf(Ot) >= 0) continue;
            Vt[Ot] = tt[Ot]
          } return Vt
      }(tt, et);
      if (Object.getOwnPropertySymbols) {
        var Dt = Object.getOwnPropertySymbols(tt);
        for (Ot = 0; Ot < Dt.length; Ot++) Vt = Dt[Ot], et.indexOf(Vt) >= 0 || Object.prototype.propertyIsEnumerable.call(tt, Vt) && (qt[Vt] = tt[Vt])
      }
      return qt
    }

    function Ut(tt) {
      var et = tt.option,
        Vt = tt.isActive,
        Ot = rt(tt, zt);
      return "string" === typeof et ? dt.createElement(Gt.e, ot({
        option: dt.createElement(kt.b, ot({
          type: et
        }, Ot)),
        isActive: Vt,
        shapeType: "symbols"
      }, Ot)) : dt.createElement(Gt.e, ot({
        option: et,
        isActive: Vt,
        shapeType: "symbols"
      }, Ot))
    }

    function At(tt) {
      return At = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, At(tt)
    }

    function it() {
      return it = Object.assign ? Object.assign.bind() : function(tt) {
        for (var et = 1; et < arguments.length; et++) {
          var Vt = arguments[et];
          for (var Ot in Vt) Object.prototype.hasOwnProperty.call(Vt, Ot) && (tt[Ot] = Vt[Ot])
        }
        return tt
      }, it.apply(this, arguments)
    }

    function Yt(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function Bt(tt) {
      for (var et = 1; et < arguments.length; et++) {
        var Vt = null != arguments[et] ? arguments[et] : {};
        et % 2 ? Yt(Object(Vt), !0).forEach((function(et) {
          nt(tt, et, Vt[et])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : Yt(Object(Vt)).forEach((function(et) {
          Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
        }))
      }
      return tt
    }

    function pt(tt, et) {
      for (var Vt = 0; Vt < et.length; Vt++) {
        var Ot = et[Vt];
        Ot.enumerable = Ot.enumerable || !1, Ot.configurable = !0, "value" in Ot && (Ot.writable = !0), Object.defineProperty(tt, te(Ot.key), Ot)
      }
    }

    function xt(tt, et, Vt) {
      return et = gt(et),
        function(tt, et) {
          if (et && ("object" === At(et) || "function" === typeof et)) return et;
          if (void 0 !== et) throw new TypeError("Derived constructors may only return object or undefined");
          return function(tt) {
            if (void 0 === tt) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return tt
          }(tt)
        }(tt, Tt() ? Reflect.construct(et, Vt || [], gt(tt).constructor) : et.apply(tt, Vt))
    }

    function Tt() {
      try {
        var tt = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (tt) {}
      return (Tt = function() {
        return !!tt
      })()
    }

    function gt(tt) {
      return gt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(tt) {
        return tt.__proto__ || Object.getPrototypeOf(tt)
      }, gt(tt)
    }

    function st(tt, et) {
      return st = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(tt, et) {
        return tt.__proto__ = et, tt
      }, st(tt, et)
    }

    function nt(tt, et, Vt) {
      return (et = te(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }

    function te(tt) {
      var et = function(tt, et) {
        if ("object" != At(tt) || !tt) return tt;
        var Vt = tt[Symbol.toPrimitive];
        if (void 0 !== Vt) {
          var Ot = Vt.call(tt, et || "default");
          if ("object" != At(Ot)) return Ot;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === et ? String : Number)(tt)
      }(tt, "string");
      return "symbol" == At(et) ? et : et + ""
    }
    var ee = function(tt) {
      function et() {
        var tt;
        ! function(tt, et) {
          if (!(tt instanceof et)) throw new TypeError("Cannot call a class as a function")
        }(this, et);
        for (var Vt = arguments.length, Ot = new Array(Vt), qt = 0; qt < Vt; qt++) Ot[qt] = arguments[qt];
        return nt(tt = xt(this, et, [].concat(Ot)), "state", {
          isAnimationFinished: !1
        }), nt(tt, "handleAnimationEnd", (function() {
          tt.setState({
            isAnimationFinished: !0
          })
        })), nt(tt, "handleAnimationStart", (function() {
          tt.setState({
            isAnimationFinished: !1
          })
        })), nt(tt, "id", (0, Zt.L)("recharts-scatter-")), tt
      }
      return function(tt, et) {
        if ("function" !== typeof et && null !== et) throw new TypeError("Super expression must either be null or a function");
        tt.prototype = Object.create(et && et.prototype, {
          constructor: {
            value: tt,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(tt, "prototype", {
          writable: !1
        }), et && st(tt, et)
      }(et, tt), Vt = et, Ot = [{
        key: "renderSymbolsStatically",
        value: function(tt) {
          var et = this,
            Vt = this.props,
            Ot = Vt.shape,
            qt = Vt.activeShape,
            Dt = Vt.activeIndex,
            mt = (0, Mt.b)(this.props, !1);
          return tt.map((function(tt, Vt) {
            var jt = Dt === Vt,
              Ht = jt ? qt : Ot,
              Xt = Bt(Bt({}, mt), tt);
            return dt.createElement(yt.e, it({
              className: "recharts-scatter-symbol",
              key: "symbol-".concat(null === tt || void 0 === tt ? void 0 : tt.cx, "-").concat(null === tt || void 0 === tt ? void 0 : tt.cy, "-").concat(null === tt || void 0 === tt ? void 0 : tt.size, "-").concat(Vt)
            }, (0, Ft.k)(et.props, tt, Vt), {
              role: "img"
            }), dt.createElement(Ut, it({
              option: Ht,
              isActive: jt,
              key: "symbol-".concat(Vt)
            }, Xt)))
          }))
        }
      }, {
        key: "renderSymbolsWithAnimation",
        value: function() {
          var tt = this,
            et = this.props,
            Vt = et.points,
            Ot = et.isAnimationActive,
            qt = et.animationBegin,
            Dt = et.animationDuration,
            mt = et.animationEasing,
            Ht = et.animationId,
            Xt = this.state.prevPoints;
          return dt.createElement(jt.c, {
            XE: qt,
            duration: Dt,
            isActive: Ot,
            easing: mt,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "pie-".concat(Ht),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(et) {
            var Ot = et.t,
              qt = Vt.map((function(tt, et) {
                var Vt = Xt && Xt[et];
                if (Vt) {
                  var qt = (0, Zt.r)(Vt.cx, tt.cx),
                    Dt = (0, Zt.r)(Vt.cy, tt.cy),
                    mt = (0, Zt.r)(Vt.size, tt.size);
                  return Bt(Bt({}, tt), {}, {
                    cx: qt(Ot),
                    cy: Dt(Ot),
                    size: mt(Ot)
                  })
                }
                var dt = (0, Zt.r)(0, tt.size);
                return Bt(Bt({}, tt), {}, {
                  size: dt(Ot)
                })
              }));
            return dt.createElement(yt.e, null, tt.renderSymbolsStatically(qt))
          }))
        }
      }, {
        key: "renderSymbols",
        value: function() {
          var tt = this.props,
            et = tt.points,
            Vt = tt.isAnimationActive,
            Ot = this.state.prevPoints;
          return !(Vt && et && et.length) || Ot && lt()(Ot, et) ? this.renderSymbolsStatically(et) : this.renderSymbolsWithAnimation()
        }
      }, {
        key: "renderErrorBar",
        value: function() {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var tt = this.props,
            et = tt.points,
            Vt = tt.xAxis,
            Ot = tt.yAxis,
            qt = tt.children,
            Dt = (0, Mt.d)(qt, It.d);
          return Dt ? Dt.map((function(tt, qt) {
            var Dt = tt.props,
              mt = Dt.direction,
              jt = Dt.dataKey;
            return dt.cloneElement(tt, {
              key: "".concat(mt, "-").concat(jt, "-").concat(et[qt]),
              data: et,
              xAxis: Vt,
              yAxis: Ot,
              layout: "x" === mt ? "vertical" : "horizontal",
              dataPointFormatter: function(tt, et) {
                return {
                  x: tt.cx,
                  y: tt.cy,
                  value: "x" === mt ? +tt.node.x : +tt.node.y,
                  errorVal: (0, Lt.Z)(tt, et)
                }
              }
            })
          })) : null
        }
      }, {
        key: "renderLine",
        value: function() {
          var tt, et, Vt = this.props,
            Ot = Vt.points,
            qt = Vt.line,
            Dt = Vt.lineType,
            mt = Vt.lineJointType,
            jt = (0, Mt.b)(this.props, !1),
            Ht = (0, Mt.b)(qt, !1);
          if ("joint" === Dt) tt = Ot.map((function(tt) {
            return {
              x: tt.cx,
              y: tt.cy
            }
          }));
          else if ("fitting" === Dt) {
            var Xt = (0, Zt.j)(Ot),
              Qt = Xt.xmin,
              lt = Xt.xmax,
              Et = Xt.a,
              wt = Xt.b,
              Nt = function(tt) {
                return Et * tt + wt
              };
            tt = [{
              x: Qt,
              y: Nt(Qt)
            }, {
              x: lt,
              y: Nt(lt)
            }]
          }
          var bt = Bt(Bt(Bt({}, jt), {}, {
            fill: "none",
            stroke: jt && jt.fill
          }, Ht), {}, {
            points: tt
          });
          return et = dt.isValidElement(qt) ? dt.cloneElement(qt, bt) : ft()(qt) ? qt(bt) : dt.createElement(Rt.c, it({}, bt, {
            type: mt
          })), dt.createElement(yt.e, {
            className: "recharts-scatter-line",
            key: "recharts-scatter-line"
          }, et)
        }
      }, {
        key: "render",
        value: function() {
          var tt = this.props,
            et = tt.hide,
            Vt = tt.points,
            Ot = tt.line,
            qt = tt.className,
            Dt = tt.xAxis,
            mt = tt.yAxis,
            jt = tt.left,
            Ht = tt.top,
            Qt = tt.width,
            lt = tt.height,
            Et = tt.id,
            ft = tt.isAnimationActive;
          if (et || !Vt || !Vt.length) return null;
          var Mt = this.state.isAnimationFinished,
            bt = (0, wt.b)("recharts-scatter", qt),
            Jt = Dt && Dt.allowDataOverflow,
            Ct = mt && mt.allowDataOverflow,
            ut = Jt || Ct,
            Kt = Xt()(Et) ? this.id : Et;
          return dt.createElement(yt.e, {
            className: bt,
            clipPath: ut ? "url(#clipPath-".concat(Kt, ")") : null
          }, Jt || Ct ? dt.createElement("defs", null, dt.createElement("clipPath", {
            id: "clipPath-".concat(Kt)
          }, dt.createElement("rect", {
            x: Jt ? jt : jt - Qt / 2,
            y: Ct ? Ht : Ht - lt / 2,
            width: Jt ? Qt : 2 * Qt,
            height: Ct ? lt : 2 * lt
          }))) : null, Ot && this.renderLine(), this.renderErrorBar(), dt.createElement(yt.e, {
            key: "recharts-scatter-symbols"
          }, this.renderSymbols()), (!ft || Mt) && Nt.b.renderCallByParent(this.props, Vt))
        }
      }], qt = [{
        key: "getDerivedStateFromProps",
        value: function(tt, et) {
          return tt.animationId !== et.prevAnimationId ? {
            prevAnimationId: tt.animationId,
            curPoints: tt.points,
            prevPoints: et.curPoints
          } : tt.points !== et.curPoints ? {
            curPoints: tt.points
          } : null
        }
      }], Ot && pt(Vt.prototype, Ot), qt && pt(Vt, qt), Object.defineProperty(Vt, "prototype", {
        writable: !1
      }), Vt;
      var Vt, Ot, qt
    }(dt.PureComponent);
    nt(ee, "displayName", "Scatter"), nt(ee, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      zAxisId: 0,
      legendType: "circle",
      lineType: "joint",
      lineJointType: "linear",
      data: [],
      shape: "circle",
      hide: !1,
      isAnimationActive: !bt.c.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "linear"
    }), nt(ee, "getComposedData", (function(tt) {
      var et = tt.xAxis,
        Vt = tt.yAxis,
        Ot = tt.zAxis,
        qt = tt.item,
        Dt = tt.displayedData,
        mt = tt.xAxisTicks,
        dt = tt.yAxisTicks,
        jt = tt.offset,
        Ht = qt.props.tooltipType,
        Qt = (0, Mt.d)(qt.props.children, Pt.c),
        lt = Xt()(et.dataKey) ? qt.props.dataKey : et.dataKey,
        Et = Xt()(Vt.dataKey) ? qt.props.dataKey : Vt.dataKey,
        ft = Ot && Ot.dataKey,
        wt = Ot ? Ot.range : ct.defaultProps.range,
        yt = wt && wt[0],
        Nt = et.scale.bandwidth ? et.scale.bandwidth() : 0,
        bt = Vt.scale.bandwidth ? Vt.scale.bandwidth() : 0,
        Jt = Dt.map((function(tt, Dt) {
          var jt = (0, Lt.Z)(tt, lt),
            wt = (0, Lt.Z)(tt, Et),
            Mt = !Xt()(ft) && (0, Lt.Z)(tt, ft) || "-",
            Jt = [{
              name: Xt()(et.dataKey) ? qt.props.name : et.name || et.dataKey,
              unit: et.unit || "",
              value: jt,
              payload: tt,
              dataKey: lt,
              type: Ht
            }, {
              name: Xt()(Vt.dataKey) ? qt.props.name : Vt.name || Vt.dataKey,
              unit: Vt.unit || "",
              value: wt,
              payload: tt,
              dataKey: Et,
              type: Ht
            }];
          "-" !== Mt && Jt.push({
            name: Ot.name || Ot.dataKey,
            unit: Ot.unit || "",
            value: Mt,
            payload: tt,
            dataKey: ft,
            type: Ht
          });
          var Ct = (0, Lt.z)({
              axis: et,
              ticks: mt,
              bandSize: Nt,
              entry: tt,
              index: Dt,
              dataKey: lt
            }),
            ut = (0, Lt.z)({
              axis: Vt,
              ticks: dt,
              bandSize: bt,
              entry: tt,
              index: Dt,
              dataKey: Et
            }),
            Kt = "-" !== Mt ? Ot.scale(Mt) : yt,
            ht = Math.sqrt(Math.max(Kt, 0) / Math.PI);
          return Bt(Bt({}, tt), {}, {
            cx: Ct,
            cy: ut,
            x: Ct - ht,
            y: ut - ht,
            xAxis: et,
            yAxis: Vt,
            zAxis: Ot,
            width: 2 * ht,
            height: 2 * ht,
            size: Kt,
            node: {
              x: jt,
              y: wt,
              z: Mt
            },
            tooltipPayload: Jt,
            tooltipPosition: {
              x: Ct,
              y: ut
            },
            payload: tt
          }, Qt && Qt[Dt] && Qt[Dt].props)
        }));
      return Bt({
        points: Jt
      }, jt)
    }));
    var Ve = Vt(6579),
      Oe = Vt(6587),
      qe = Vt(6423),
      De = (0, Ot.b)({
        chartName: "ComposedChart",
        GraphicalChild: [mt.c, qt.d, Dt.e, ee],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: Ve.b
        }, {
          axisType: "yAxis",
          AxisComp: Oe.d
        }, {
          axisType: "zAxis",
          AxisComp: ct
        }],
        formatAxisMap: qe.d
      })
  },
  5643: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => oV
    });
    var Ot = Vt(63),
      qt = Vt(5603),
      Dt = Vt.n(qt),
      mt = Vt(5436),
      dt = Vt.n(mt),
      jt = Vt(5651),
      Ht = Vt.n(jt),
      Xt = Vt(5374),
      Qt = Vt.n(Xt),
      lt = Vt(5696),
      Et = Vt.n(lt),
      ft = Vt(5267),
      wt = Vt.n(ft),
      yt = Vt(5263),
      Nt = Vt(6131),
      Mt = Vt(6136),
      bt = Vt(6140),
      Jt = Vt(6149),
      Ct = Vt(6226),
      ut = Vt(6287),
      Kt = Vt(6293),
      ht = Vt(5614),
      vt = Vt(6323),
      Wt = Vt(6304),
      St = Vt(6317),
      ct = Vt(5348);

    function Rt(tt) {
      return Rt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, Rt(tt)
    }

    function It(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function Pt(tt) {
      for (var et = 1; et < arguments.length; et++) {
        var Vt = null != arguments[et] ? arguments[et] : {};
        et % 2 ? It(Object(Vt), !0).forEach((function(et) {
          Zt(tt, et, Vt[et])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : It(Object(Vt)).forEach((function(et) {
          Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
        }))
      }
      return tt
    }

    function Zt(tt, et, Vt) {
      return (et = function(tt) {
        var et = function(tt, et) {
          if ("object" != Rt(tt) || !tt) return tt;
          var Vt = tt[Symbol.toPrimitive];
          if (void 0 !== Vt) {
            var Ot = Vt.call(tt, et || "default");
            if ("object" != Rt(Ot)) return Ot;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === et ? String : Number)(tt)
        }(tt, "string");
        return "symbol" == Rt(et) ? et : et + ""
      }(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }
    var Lt = ["Webkit", "Moz", "O", "ms"];

    function Ft(tt) {
      return Ft = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, Ft(tt)
    }

    function kt() {
      return kt = Object.assign ? Object.assign.bind() : function(tt) {
        for (var et = 1; et < arguments.length; et++) {
          var Vt = arguments[et];
          for (var Ot in Vt) Object.prototype.hasOwnProperty.call(Vt, Ot) && (tt[Ot] = Vt[Ot])
        }
        return tt
      }, kt.apply(this, arguments)
    }

    function Gt(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function zt(tt) {
      for (var et = 1; et < arguments.length; et++) {
        var Vt = null != arguments[et] ? arguments[et] : {};
        et % 2 ? Gt(Object(Vt), !0).forEach((function(et) {
          Yt(tt, et, Vt[et])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : Gt(Object(Vt)).forEach((function(et) {
          Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
        }))
      }
      return tt
    }

    function ot(tt, et) {
      for (var Vt = 0; Vt < et.length; Vt++) {
        var Ot = et[Vt];
        Ot.enumerable = Ot.enumerable || !1, Ot.configurable = !0, "value" in Ot && (Ot.writable = !0), Object.defineProperty(tt, Bt(Ot.key), Ot)
      }
    }

    function rt(tt, et, Vt) {
      return et = At(et),
        function(tt, et) {
          if (et && ("object" === Ft(et) || "function" === typeof et)) return et;
          if (void 0 !== et) throw new TypeError("Derived constructors may only return object or undefined");
          return function(tt) {
            if (void 0 === tt) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return tt
          }(tt)
        }(tt, Ut() ? Reflect.construct(et, Vt || [], At(tt).constructor) : et.apply(tt, Vt))
    }

    function Ut() {
      try {
        var tt = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (tt) {}
      return (Ut = function() {
        return !!tt
      })()
    }

    function At(tt) {
      return At = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(tt) {
        return tt.__proto__ || Object.getPrototypeOf(tt)
      }, At(tt)
    }

    function it(tt, et) {
      return it = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(tt, et) {
        return tt.__proto__ = et, tt
      }, it(tt, et)
    }

    function Yt(tt, et, Vt) {
      return (et = Bt(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }

    function Bt(tt) {
      var et = function(tt, et) {
        if ("object" != Ft(tt) || !tt) return tt;
        var Vt = tt[Symbol.toPrimitive];
        if (void 0 !== Vt) {
          var Ot = Vt.call(tt, et || "default");
          if ("object" != Ft(Ot)) return Ot;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === et ? String : Number)(tt)
      }(tt, "string");
      return "symbol" == Ft(et) ? et : et + ""
    }
    var pt = function(tt) {
        return tt.changedTouches && !!tt.changedTouches.length
      },
      xt = function(tt) {
        function et(tt) {
          var Vt;
          return function(tt, et) {
            if (!(tt instanceof et)) throw new TypeError("Cannot call a class as a function")
          }(this, et), Yt(Vt = rt(this, et, [tt]), "handleDrag", (function(tt) {
            Vt.leaveTimer && (clearTimeout(Vt.leaveTimer), Vt.leaveTimer = null), Vt.state.isTravellerMoving ? Vt.handleTravellerMove(tt) : Vt.state.isSlideMoving && Vt.handleSlideDrag(tt)
          })), Yt(Vt, "handleTouchMove", (function(tt) {
            null != tt.changedTouches && tt.changedTouches.length > 0 && Vt.handleDrag(tt.changedTouches[0])
          })), Yt(Vt, "handleDragEnd", (function() {
            Vt.setState({
              isTravellerMoving: !1,
              isSlideMoving: !1
            }, (function() {
              var tt = Vt.props,
                et = tt.endIndex,
                Ot = tt.onDragEnd,
                qt = tt.startIndex;
              null === Ot || void 0 === Ot || Ot({
                endIndex: et,
                startIndex: qt
              })
            })), Vt.detachDragEndListener()
          })), Yt(Vt, "handleLeaveWrapper", (function() {
            (Vt.state.isTravellerMoving || Vt.state.isSlideMoving) && (Vt.leaveTimer = window.setTimeout(Vt.handleDragEnd, Vt.props.leaveTimeOut))
          })), Yt(Vt, "handleEnterSlideOrTraveller", (function() {
            Vt.setState({
              isTextActive: !0
            })
          })), Yt(Vt, "handleLeaveSlideOrTraveller", (function() {
            Vt.setState({
              isTextActive: !1
            })
          })), Yt(Vt, "handleSlideDragStart", (function(tt) {
            var et = pt(tt) ? tt.changedTouches[0] : tt;
            Vt.setState({
              isTravellerMoving: !1,
              isSlideMoving: !0,
              slideMoveStartX: et.pageX
            }), Vt.attachDragEndListener()
          })), Vt.travellerDragStartHandlers = {
            startX: Vt.handleTravellerDragStart.bind(Vt, "startX"),
            endX: Vt.handleTravellerDragStart.bind(Vt, "endX")
          }, Vt.state = {}, Vt
        }
        return function(tt, et) {
          if ("function" !== typeof et && null !== et) throw new TypeError("Super expression must either be null or a function");
          tt.prototype = Object.create(et && et.prototype, {
            constructor: {
              value: tt,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(tt, "prototype", {
            writable: !1
          }), et && it(tt, et)
        }(et, tt), Vt = et, qt = [{
          key: "componentWillUnmount",
          value: function() {
            this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener()
          }
        }, {
          key: "getIndex",
          value: function(tt) {
            var Vt = tt.startX,
              Ot = tt.endX,
              qt = this.state.scaleValues,
              Dt = this.props,
              mt = Dt.gap,
              dt = Dt.data.length - 1,
              jt = Math.min(Vt, Ot),
              Ht = Math.max(Vt, Ot),
              Xt = et.getIndexInRange(qt, jt),
              Qt = et.getIndexInRange(qt, Ht);
            return {
              startIndex: Xt - Xt % mt,
              endIndex: Qt === dt ? dt : Qt - Qt % mt
            }
          }
        }, {
          key: "getTextOfTick",
          value: function(tt) {
            var et = this.props,
              Vt = et.data,
              Ot = et.tickFormatter,
              qt = et.dataKey,
              Dt = (0, St.Z)(Vt[tt], qt, tt);
            return dt()(Ot) ? Ot(Dt, tt) : Dt
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
          value: function(tt) {
            var et = this.state,
              Vt = et.slideMoveStartX,
              Ot = et.startX,
              qt = et.endX,
              Dt = this.props,
              mt = Dt.x,
              dt = Dt.width,
              jt = Dt.travellerWidth,
              Ht = Dt.startIndex,
              Xt = Dt.endIndex,
              Qt = Dt.onChange,
              lt = tt.pageX - Vt;
            lt > 0 ? lt = Math.min(lt, mt + dt - jt - qt, mt + dt - jt - Ot) : lt < 0 && (lt = Math.max(lt, mt - Ot, mt - qt));
            var Et = this.getIndex({
              startX: Ot + lt,
              endX: qt + lt
            });
            Et.startIndex === Ht && Et.endIndex === Xt || !Qt || Qt(Et), this.setState({
              startX: Ot + lt,
              endX: qt + lt,
              slideMoveStartX: tt.pageX
            })
          }
        }, {
          key: "handleTravellerDragStart",
          value: function(tt, et) {
            var Vt = pt(et) ? et.changedTouches[0] : et;
            this.setState({
              isSlideMoving: !1,
              isTravellerMoving: !0,
              movingTravellerId: tt,
              brushMoveStartX: Vt.pageX
            }), this.attachDragEndListener()
          }
        }, {
          key: "handleTravellerMove",
          value: function(tt) {
            var et = this.state,
              Vt = et.brushMoveStartX,
              Ot = et.movingTravellerId,
              qt = et.endX,
              Dt = et.startX,
              mt = this.state[Ot],
              dt = this.props,
              jt = dt.x,
              Ht = dt.width,
              Xt = dt.travellerWidth,
              Qt = dt.onChange,
              lt = dt.gap,
              Et = dt.data,
              ft = {
                startX: this.state.startX,
                endX: this.state.endX
              },
              wt = tt.pageX - Vt;
            wt > 0 ? wt = Math.min(wt, jt + Ht - Xt - mt) : wt < 0 && (wt = Math.max(wt, jt - mt)), ft[Ot] = mt + wt;
            var yt = this.getIndex(ft),
              Nt = yt.startIndex,
              Mt = yt.endIndex;
            this.setState(Yt(Yt({}, Ot, mt + wt), "brushMoveStartX", tt.pageX), (function() {
              Qt && function() {
                var tt = Et.length - 1;
                return "startX" === Ot && (qt > Dt ? Nt % lt === 0 : Mt % lt === 0) || qt < Dt && Mt === tt || "endX" === Ot && (qt > Dt ? Mt % lt === 0 : Nt % lt === 0) || qt > Dt && Mt === tt
              }() && Qt(yt)
            }))
          }
        }, {
          key: "handleTravellerMoveKeyboard",
          value: function(tt, et) {
            var Vt = this,
              Ot = this.state,
              qt = Ot.scaleValues,
              Dt = Ot.startX,
              mt = Ot.endX,
              dt = this.state[et],
              jt = qt.indexOf(dt);
            if (-1 !== jt) {
              var Ht = jt + tt;
              if (!(-1 === Ht || Ht >= qt.length)) {
                var Xt = qt[Ht];
                "startX" === et && Xt >= mt || "endX" === et && Xt <= Dt || this.setState(Yt({}, et, Xt), (function() {
                  Vt.props.onChange(Vt.getIndex({
                    startX: Vt.state.startX,
                    endX: Vt.state.endX
                  }))
                }))
              }
            }
          }
        }, {
          key: "renderBackground",
          value: function() {
            var tt = this.props,
              et = tt.x,
              Vt = tt.y,
              qt = tt.width,
              Dt = tt.height,
              mt = tt.fill,
              dt = tt.stroke;
            return Ot.createElement("rect", {
              stroke: dt,
              fill: mt,
              x: et,
              y: Vt,
              width: qt,
              height: Dt
            })
          }
        }, {
          key: "renderPanorama",
          value: function() {
            var tt = this.props,
              et = tt.x,
              Vt = tt.y,
              qt = tt.width,
              Dt = tt.height,
              mt = tt.data,
              dt = tt.children,
              jt = tt.padding,
              Ht = Ot.Children.only(dt);
            return Ht ? Ot.cloneElement(Ht, {
              x: et,
              y: Vt,
              width: qt,
              height: Dt,
              margin: jt,
              compact: !0,
              data: mt
            }) : null
          }
        }, {
          key: "renderTravellerLayer",
          value: function(tt, Vt) {
            var qt, Dt, mt = this,
              dt = this.props,
              jt = dt.y,
              Ht = dt.travellerWidth,
              Xt = dt.height,
              Qt = dt.traveller,
              lt = dt.ariaLabel,
              Et = dt.data,
              ft = dt.startIndex,
              wt = dt.endIndex,
              yt = Math.max(tt, this.props.x),
              Nt = zt(zt({}, (0, ht.b)(this.props, !1)), {}, {
                x: yt,
                y: jt,
                width: Ht,
                height: Xt
              }),
              Mt = lt || "Min value: ".concat(null === (qt = Et[ft]) || void 0 === qt ? void 0 : qt.name, ", Max value: ").concat(null === (Dt = Et[wt]) || void 0 === Dt ? void 0 : Dt.name);
            return Ot.createElement(bt.e, {
              tabIndex: 0,
              role: "slider",
              "aria-label": Mt,
              "aria-valuenow": tt,
              className: "recharts-brush-traveller",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.travellerDragStartHandlers[Vt],
              onTouchStart: this.travellerDragStartHandlers[Vt],
              onKeyDown: function(tt) {
                ["ArrowLeft", "ArrowRight"].includes(tt.key) && (tt.preventDefault(), tt.stopPropagation(), mt.handleTravellerMoveKeyboard("ArrowRight" === tt.key ? 1 : -1, Vt))
              },
              onFocus: function() {
                mt.setState({
                  isTravellerFocused: !0
                })
              },
              onBlur: function() {
                mt.setState({
                  isTravellerFocused: !1
                })
              },
              style: {
                cursor: "col-resize"
              }
            }, et.renderTraveller(Qt, Nt))
          }
        }, {
          key: "renderSlide",
          value: function(tt, et) {
            var Vt = this.props,
              qt = Vt.y,
              Dt = Vt.height,
              mt = Vt.stroke,
              dt = Vt.travellerWidth,
              jt = Math.min(tt, et) + dt,
              Ht = Math.max(Math.abs(et - tt) - dt, 0);
            return Ot.createElement("rect", {
              className: "recharts-brush-slide",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.handleSlideDragStart,
              onTouchStart: this.handleSlideDragStart,
              style: {
                cursor: "move"
              },
              stroke: "none",
              fill: mt,
              fillOpacity: .2,
              x: jt,
              y: qt,
              width: Ht,
              height: Dt
            })
          }
        }, {
          key: "renderText",
          value: function() {
            var tt = this.props,
              et = tt.startIndex,
              Vt = tt.endIndex,
              qt = tt.y,
              Dt = tt.height,
              mt = tt.travellerWidth,
              dt = tt.stroke,
              jt = this.state,
              Ht = jt.startX,
              Xt = jt.endX,
              Qt = {
                pointerEvents: "none",
                fill: dt
              };
            return Ot.createElement(bt.e, {
              className: "recharts-brush-texts"
            }, Ot.createElement(Wt.b, kt({
              textAnchor: "end",
              verticalAnchor: "middle",
              x: Math.min(Ht, Xt) - 5,
              y: qt + Dt / 2
            }, Qt), this.getTextOfTick(et)), Ot.createElement(Wt.b, kt({
              textAnchor: "start",
              verticalAnchor: "middle",
              x: Math.max(Ht, Xt) + mt + 5,
              y: qt + Dt / 2
            }, Qt), this.getTextOfTick(Vt)))
          }
        }, {
          key: "render",
          value: function() {
            var tt = this.props,
              et = tt.data,
              Vt = tt.className,
              qt = tt.children,
              Dt = tt.x,
              mt = tt.y,
              dt = tt.width,
              jt = tt.height,
              Ht = tt.alwaysShowText,
              Xt = this.state,
              Qt = Xt.startX,
              lt = Xt.endX,
              Et = Xt.isTextActive,
              ft = Xt.isSlideMoving,
              wt = Xt.isTravellerMoving,
              Nt = Xt.isTravellerFocused;
            if (!et || !et.length || !(0, ct.A)(Dt) || !(0, ct.A)(mt) || !(0, ct.A)(dt) || !(0, ct.A)(jt) || dt <= 0 || jt <= 0) return null;
            var Mt = (0, yt.b)("recharts-brush", Vt),
              Jt = 1 === Ot.Children.count(qt),
              Ct = function(tt, et) {
                if (!tt) return null;
                var Vt = tt.replace(/(\w)/, (function(tt) {
                    return tt.toUpperCase()
                  })),
                  Ot = Lt.reduce((function(tt, Ot) {
                    return Pt(Pt({}, tt), {}, Zt({}, Ot + Vt, et))
                  }), {});
                return Ot[tt] = et, Ot
              }("userSelect", "none");
            return Ot.createElement(bt.e, {
              className: Mt,
              onMouseLeave: this.handleLeaveWrapper,
              onTouchMove: this.handleTouchMove,
              style: Ct
            }, this.renderBackground(), Jt && this.renderPanorama(), this.renderSlide(Qt, lt), this.renderTravellerLayer(Qt, "startX"), this.renderTravellerLayer(lt, "endX"), (Et || ft || wt || Nt || Ht) && this.renderText())
          }
        }], Dt = [{
          key: "renderDefaultTraveller",
          value: function(tt) {
            var et = tt.x,
              Vt = tt.y,
              qt = tt.width,
              Dt = tt.height,
              mt = tt.stroke,
              dt = Math.floor(Vt + Dt / 2) - 1;
            return Ot.createElement(Ot.Fragment, null, Ot.createElement("rect", {
              x: et,
              y: Vt,
              width: qt,
              height: Dt,
              fill: mt,
              stroke: "none"
            }), Ot.createElement("line", {
              x1: et + 1,
              y1: dt,
              x2: et + qt - 1,
              y2: dt,
              fill: "none",
              stroke: "#fff"
            }), Ot.createElement("line", {
              x1: et + 1,
              y1: dt + 2,
              x2: et + qt - 1,
              y2: dt + 2,
              fill: "none",
              stroke: "#fff"
            }))
          }
        }, {
          key: "renderTraveller",
          value: function(tt, Vt) {
            return Ot.isValidElement(tt) ? Ot.cloneElement(tt, Vt) : dt()(tt) ? tt(Vt) : et.renderDefaultTraveller(Vt)
          }
        }, {
          key: "getDerivedStateFromProps",
          value: function(tt, et) {
            var Vt = tt.data,
              Ot = tt.width,
              qt = tt.x,
              Dt = tt.travellerWidth,
              mt = tt.updateId,
              dt = tt.startIndex,
              jt = tt.endIndex;
            if (Vt !== et.prevData || mt !== et.prevUpdateId) return zt({
              prevData: Vt,
              prevTravellerWidth: Dt,
              prevUpdateId: mt,
              prevX: qt,
              prevWidth: Ot
            }, Vt && Vt.length ? function(tt) {
              var et = tt.data,
                Vt = tt.startIndex,
                Ot = tt.endIndex,
                qt = tt.x,
                Dt = tt.width,
                mt = tt.travellerWidth;
              if (!et || !et.length) return {};
              var dt = et.length,
                jt = (0, vt.d)().domain(Ht()(0, dt)).range([qt, qt + Dt - mt]),
                Xt = jt.domain().map((function(tt) {
                  return jt(tt)
                }));
              return {
                isTextActive: !1,
                isSlideMoving: !1,
                isTravellerMoving: !1,
                isTravellerFocused: !1,
                startX: jt(Vt),
                endX: jt(Ot),
                scale: jt,
                scaleValues: Xt
              }
            }({
              data: Vt,
              width: Ot,
              x: qt,
              travellerWidth: Dt,
              startIndex: dt,
              endIndex: jt
            }) : {
              scale: null,
              scaleValues: null
            });
            if (et.scale && (Ot !== et.prevWidth || qt !== et.prevX || Dt !== et.prevTravellerWidth)) {
              et.scale.range([qt, qt + Ot - Dt]);
              var Xt = et.scale.domain().map((function(tt) {
                return et.scale(tt)
              }));
              return {
                prevData: Vt,
                prevTravellerWidth: Dt,
                prevUpdateId: mt,
                prevX: qt,
                prevWidth: Ot,
                startX: et.scale(tt.startIndex),
                endX: et.scale(tt.endIndex),
                scaleValues: Xt
              }
            }
            return null
          }
        }, {
          key: "getIndexInRange",
          value: function(tt, et) {
            for (var Vt = 0, Ot = tt.length - 1; Ot - Vt > 1;) {
              var qt = Math.floor((Vt + Ot) / 2);
              tt[qt] > et ? Ot = qt : Vt = qt
            }
            return et >= tt[Ot] ? Ot : Vt
          }
        }], qt && ot(Vt.prototype, qt), Dt && ot(Vt, Dt), Object.defineProperty(Vt, "prototype", {
          writable: !1
        }), Vt;
        var Vt, qt, Dt
      }(Ot.PureComponent);
    Yt(xt, "displayName", "Brush"), Yt(xt, "defaultProps", {
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
    var Tt = Vt(6310),
      gt = Vt(6388),
      st = Vt(6406),
      nt = Vt(6417),
      te = Vt(6423),
      ee = Vt(5609);

    function Ve() {
      return Ve = Object.assign ? Object.assign.bind() : function(tt) {
        for (var et = 1; et < arguments.length; et++) {
          var Vt = arguments[et];
          for (var Ot in Vt) Object.prototype.hasOwnProperty.call(Vt, Ot) && (tt[Ot] = Vt[Ot])
        }
        return tt
      }, Ve.apply(this, arguments)
    }

    function Oe(tt) {
      return Oe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, Oe(tt)
    }

    function qe(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function De(tt) {
      for (var et = 1; et < arguments.length; et++) {
        var Vt = null != arguments[et] ? arguments[et] : {};
        et % 2 ? qe(Object(Vt), !0).forEach((function(et) {
          Qe(tt, et, Vt[et])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : qe(Object(Vt)).forEach((function(et) {
          Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
        }))
      }
      return tt
    }

    function me(tt, et) {
      for (var Vt = 0; Vt < et.length; Vt++) {
        var Ot = et[Vt];
        Ot.enumerable = Ot.enumerable || !1, Ot.configurable = !0, "value" in Ot && (Ot.writable = !0), Object.defineProperty(tt, le(Ot.key), Ot)
      }
    }

    function de(tt, et, Vt) {
      return et = He(et),
        function(tt, et) {
          if (et && ("object" === Oe(et) || "function" === typeof et)) return et;
          if (void 0 !== et) throw new TypeError("Derived constructors may only return object or undefined");
          return function(tt) {
            if (void 0 === tt) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return tt
          }(tt)
        }(tt, je() ? Reflect.construct(et, Vt || [], He(tt).constructor) : et.apply(tt, Vt))
    }

    function je() {
      try {
        var tt = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (tt) {}
      return (je = function() {
        return !!tt
      })()
    }

    function He(tt) {
      return He = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(tt) {
        return tt.__proto__ || Object.getPrototypeOf(tt)
      }, He(tt)
    }

    function Xe(tt, et) {
      return Xe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(tt, et) {
        return tt.__proto__ = et, tt
      }, Xe(tt, et)
    }

    function Qe(tt, et, Vt) {
      return (et = le(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }

    function le(tt) {
      var et = function(tt, et) {
        if ("object" != Oe(tt) || !tt) return tt;
        var Vt = tt[Symbol.toPrimitive];
        if (void 0 !== Vt) {
          var Ot = Vt.call(tt, et || "default");
          if ("object" != Oe(Ot)) return Ot;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === et ? String : Number)(tt)
      }(tt, "string");
      return "symbol" == Oe(et) ? et : et + ""
    }
    var Ee = function(tt) {
      function et() {
        return function(tt, et) {
          if (!(tt instanceof et)) throw new TypeError("Cannot call a class as a function")
        }(this, et), de(this, et, arguments)
      }
      return function(tt, et) {
        if ("function" !== typeof et && null !== et) throw new TypeError("Super expression must either be null or a function");
        tt.prototype = Object.create(et && et.prototype, {
          constructor: {
            value: tt,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(tt, "prototype", {
          writable: !1
        }), et && Xe(tt, et)
      }(et, tt), Vt = et, (qt = [{
        key: "render",
        value: function() {
          var tt = this.props,
            Vt = tt.x,
            qt = tt.y,
            Dt = tt.r,
            mt = tt.alwaysShow,
            dt = tt.clipPathId,
            jt = (0, ct.w)(Vt),
            Ht = (0, ct.w)(qt);
          if ((0, ee.e)(void 0 === mt, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !jt || !Ht) return null;
          var Xt = function(tt) {
            var et = tt.x,
              Vt = tt.y,
              Ot = tt.xAxis,
              qt = tt.yAxis,
              Dt = (0, te.b)({
                x: Ot.scale,
                y: qt.scale
              }),
              mt = Dt.apply({
                x: et,
                y: Vt
              }, {
                bandAware: !0
              });
            return (0, nt.d)(tt, "discard") && !Dt.isInRange(mt) ? null : mt
          }(this.props);
          if (!Xt) return null;
          var Qt = Xt.x,
            lt = Xt.y,
            Et = this.props,
            ft = Et.shape,
            wt = Et.className,
            Nt = De(De({
              clipPath: (0, nt.d)(this.props, "hidden") ? "url(#".concat(dt, ")") : void 0
            }, (0, ht.b)(this.props, !0)), {}, {
              cx: Qt,
              cy: lt
            });
          return Ot.createElement(bt.e, {
            className: (0, yt.b)("recharts-reference-dot", wt)
          }, et.renderDot(ft, Nt), st.e.renderCallByParent(this.props, {
            x: Qt - Dt,
            y: lt - Dt,
            width: 2 * Dt,
            height: 2 * Dt
          }))
        }
      }]) && me(Vt.prototype, qt), Dt && me(Vt, Dt), Object.defineProperty(Vt, "prototype", {
        writable: !1
      }), Vt;
      var Vt, qt, Dt
    }(Ot.Component);
    Qe(Ee, "displayName", "ReferenceDot"), Qe(Ee, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#fff",
      stroke: "#ccc",
      fillOpacity: 1,
      strokeWidth: 1
    }), Qe(Ee, "renderDot", (function(tt, et) {
      return Ot.isValidElement(tt) ? Ot.cloneElement(tt, et) : dt()(tt) ? tt(et) : Ot.createElement(ut.d, Ve({}, et, {
        cx: et.cx,
        cy: et.cy,
        className: "recharts-reference-dot-dot"
      }))
    }));
    var fe = Vt(6506);

    function we() {
      return we = Object.assign ? Object.assign.bind() : function(tt) {
        for (var et = 1; et < arguments.length; et++) {
          var Vt = arguments[et];
          for (var Ot in Vt) Object.prototype.hasOwnProperty.call(Vt, Ot) && (tt[Ot] = Vt[Ot])
        }
        return tt
      }, we.apply(this, arguments)
    }

    function ye(tt) {
      return ye = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, ye(tt)
    }

    function Ne(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function ae(tt) {
      for (var et = 1; et < arguments.length; et++) {
        var Vt = null != arguments[et] ? arguments[et] : {};
        et % 2 ? Ne(Object(Vt), !0).forEach((function(et) {
          Ke(tt, et, Vt[et])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : Ne(Object(Vt)).forEach((function(et) {
          Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
        }))
      }
      return tt
    }

    function Me(tt, et) {
      for (var Vt = 0; Vt < et.length; Vt++) {
        var Ot = et[Vt];
        Ot.enumerable = Ot.enumerable || !1, Ot.configurable = !0, "value" in Ot && (Ot.writable = !0), Object.defineProperty(tt, he(Ot.key), Ot)
      }
    }

    function be(tt, et, Vt) {
      return et = Ce(et),
        function(tt, et) {
          if (et && ("object" === ye(et) || "function" === typeof et)) return et;
          if (void 0 !== et) throw new TypeError("Derived constructors may only return object or undefined");
          return function(tt) {
            if (void 0 === tt) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return tt
          }(tt)
        }(tt, Je() ? Reflect.construct(et, Vt || [], Ce(tt).constructor) : et.apply(tt, Vt))
    }

    function Je() {
      try {
        var tt = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (tt) {}
      return (Je = function() {
        return !!tt
      })()
    }

    function Ce(tt) {
      return Ce = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(tt) {
        return tt.__proto__ || Object.getPrototypeOf(tt)
      }, Ce(tt)
    }

    function ue(tt, et) {
      return ue = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(tt, et) {
        return tt.__proto__ = et, tt
      }, ue(tt, et)
    }

    function Ke(tt, et, Vt) {
      return (et = he(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }

    function he(tt) {
      var et = function(tt, et) {
        if ("object" != ye(tt) || !tt) return tt;
        var Vt = tt[Symbol.toPrimitive];
        if (void 0 !== Vt) {
          var Ot = Vt.call(tt, et || "default");
          if ("object" != ye(Ot)) return Ot;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === et ? String : Number)(tt)
      }(tt, "string");
      return "symbol" == ye(et) ? et : et + ""
    }
    var ve = function(tt) {
      function et() {
        return function(tt, et) {
          if (!(tt instanceof et)) throw new TypeError("Cannot call a class as a function")
        }(this, et), be(this, et, arguments)
      }
      return function(tt, et) {
        if ("function" !== typeof et && null !== et) throw new TypeError("Super expression must either be null or a function");
        tt.prototype = Object.create(et && et.prototype, {
          constructor: {
            value: tt,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(tt, "prototype", {
          writable: !1
        }), et && ue(tt, et)
      }(et, tt), Vt = et, (qt = [{
        key: "render",
        value: function() {
          var tt = this.props,
            Vt = tt.x1,
            qt = tt.x2,
            Dt = tt.y1,
            mt = tt.y2,
            dt = tt.className,
            jt = tt.alwaysShow,
            Ht = tt.clipPathId;
          (0, ee.e)(void 0 === jt, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
          var Xt = (0, ct.w)(Vt),
            Qt = (0, ct.w)(qt),
            lt = (0, ct.w)(Dt),
            Et = (0, ct.w)(mt),
            ft = this.props.shape;
          if (!Xt && !Qt && !lt && !Et && !ft) return null;
          var wt = function(tt, et, Vt, Ot, qt) {
            var Dt = qt.x1,
              mt = qt.x2,
              dt = qt.y1,
              jt = qt.y2,
              Ht = qt.xAxis,
              Xt = qt.yAxis;
            if (!Ht || !Xt) return null;
            var Qt = (0, te.b)({
                x: Ht.scale,
                y: Xt.scale
              }),
              lt = {
                x: tt ? Qt.x.apply(Dt, {
                  position: "start"
                }) : Qt.x.rangeMin,
                y: Vt ? Qt.y.apply(dt, {
                  position: "start"
                }) : Qt.y.rangeMin
              },
              Et = {
                x: et ? Qt.x.apply(mt, {
                  position: "end"
                }) : Qt.x.rangeMax,
                y: Ot ? Qt.y.apply(jt, {
                  position: "end"
                }) : Qt.y.rangeMax
              };
            return !(0, nt.d)(qt, "discard") || Qt.isInRange(lt) && Qt.isInRange(Et) ? (0, te.m)(lt, Et) : null
          }(Xt, Qt, lt, Et, this.props);
          if (!wt && !ft) return null;
          var Nt = (0, nt.d)(this.props, "hidden") ? "url(#".concat(Ht, ")") : void 0;
          return Ot.createElement(bt.e, {
            className: (0, yt.b)("recharts-reference-area", dt)
          }, et.renderRect(ft, ae(ae({
            clipPath: Nt
          }, (0, ht.b)(this.props, !0)), wt)), st.e.renderCallByParent(this.props, wt))
        }
      }]) && Me(Vt.prototype, qt), Dt && Me(Vt, Dt), Object.defineProperty(Vt, "prototype", {
        writable: !1
      }), Vt;
      var Vt, qt, Dt
    }(Ot.Component);

    function We(tt) {
      return function(tt) {
        if (Array.isArray(tt)) return Se(tt)
      }(tt) || function(tt) {
        if ("undefined" !== typeof Symbol && null != tt[Symbol.iterator] || null != tt["@@iterator"]) return Array.from(tt)
      }(tt) || function(tt, et) {
        if (!tt) return;
        if ("string" === typeof tt) return Se(tt, et);
        var Vt = Object.prototype.toString.call(tt).slice(8, -1);
        "Object" === Vt && tt.constructor && (Vt = tt.constructor.name);
        if ("Map" === Vt || "Set" === Vt) return Array.from(tt);
        if ("Arguments" === Vt || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Vt)) return Se(tt, et)
      }(tt) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Se(tt, et) {
      (null == et || et > tt.length) && (et = tt.length);
      for (var Vt = 0, Ot = new Array(et); Vt < et; Vt++) Ot[Vt] = tt[Vt];
      return Ot
    }
    Ke(ve, "displayName", "ReferenceArea"), Ke(ve, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#ccc",
      fillOpacity: .5,
      stroke: "none",
      strokeWidth: 1
    }), Ke(ve, "renderRect", (function(tt, et) {
      return Ot.isValidElement(tt) ? Ot.cloneElement(tt, et) : dt()(tt) ? tt(et) : Ot.createElement(Kt.d, we({}, et, {
        className: "recharts-reference-area-rect"
      }))
    }));
    var ce = function(tt, et, Vt, Ot, qt) {
        var Dt = (0, ht.d)(tt, fe.c),
          mt = (0, ht.d)(tt, Ee),
          dt = [].concat(We(Dt), We(mt)),
          jt = (0, ht.d)(tt, ve),
          Ht = "".concat(Ot, "Id"),
          Xt = Ot[0],
          Qt = et;
        if (dt.length && (Qt = dt.reduce((function(tt, et) {
            if (et.props[Ht] === Vt && (0, nt.d)(et.props, "extendDomain") && (0, ct.A)(et.props[Xt])) {
              var Ot = et.props[Xt];
              return [Math.min(tt[0], Ot), Math.max(tt[1], Ot)]
            }
            return tt
          }), Qt)), jt.length) {
          var lt = "".concat(Xt, "1"),
            Et = "".concat(Xt, "2");
          Qt = jt.reduce((function(tt, et) {
            if (et.props[Ht] === Vt && (0, nt.d)(et.props, "extendDomain") && (0, ct.A)(et.props[lt]) && (0, ct.A)(et.props[Et])) {
              var Ot = et.props[lt],
                qt = et.props[Et];
              return [Math.min(tt[0], Ot, qt), Math.max(tt[1], Ot, qt)]
            }
            return tt
          }), Qt)
        }
        return qt && qt.length && (Qt = qt.reduce((function(tt, et) {
          return (0, ct.A)(et) ? [Math.min(tt[0], et), Math.max(tt[1], et)] : tt
        }), Qt)), Qt
      },
      Re = Vt(6411),
      Ie = Vt(5628),
      Pe = Vt(35),
      Ze = new(Vt.n(Pe)()),
      Le = "recharts.syncMouseEvents",
      Fe = Vt(5631);

    function ke(tt) {
      return ke = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, ke(tt)
    }

    function Ge(tt, et) {
      for (var Vt = 0; Vt < et.length; Vt++) {
        var Ot = et[Vt];
        Ot.enumerable = Ot.enumerable || !1, Ot.configurable = !0, "value" in Ot && (Ot.writable = !0), Object.defineProperty(tt, oe(Ot.key), Ot)
      }
    }

    function ze(tt, et, Vt) {
      return (et = oe(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }

    function oe(tt) {
      var et = function(tt, et) {
        if ("object" != ke(tt) || !tt) return tt;
        var Vt = tt[Symbol.toPrimitive];
        if (void 0 !== Vt) {
          var Ot = Vt.call(tt, et || "default");
          if ("object" != ke(Ot)) return Ot;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === et ? String : Number)(tt)
      }(tt, "string");
      return "symbol" == ke(et) ? et : et + ""
    }
    var re = function() {
      return tt = function tt() {
        ! function(tt, et) {
          if (!(tt instanceof et)) throw new TypeError("Cannot call a class as a function")
        }(this, tt), ze(this, "activeIndex", 0), ze(this, "coordinateList", []), ze(this, "layout", "horizontal")
      }, (et = [{
        key: "setDetails",
        value: function(tt) {
          var et, Vt = tt.coordinateList,
            Ot = void 0 === Vt ? null : Vt,
            qt = tt.container,
            Dt = void 0 === qt ? null : qt,
            mt = tt.layout,
            dt = void 0 === mt ? null : mt,
            jt = tt.offset,
            Ht = void 0 === jt ? null : jt,
            Xt = tt.mouseHandlerCallback,
            Qt = void 0 === Xt ? null : Xt;
          this.coordinateList = null !== (et = null !== Ot && void 0 !== Ot ? Ot : this.coordinateList) && void 0 !== et ? et : [], this.container = null !== Dt && void 0 !== Dt ? Dt : this.container, this.layout = null !== dt && void 0 !== dt ? dt : this.layout, this.offset = null !== Ht && void 0 !== Ht ? Ht : this.offset, this.mouseHandlerCallback = null !== Qt && void 0 !== Qt ? Qt : this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1)
        }
      }, {
        key: "focus",
        value: function() {
          this.spoofMouse()
        }
      }, {
        key: "keyboardEvent",
        value: function(tt) {
          if (0 !== this.coordinateList.length) switch (tt.key) {
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
        value: function(tt) {
          this.activeIndex = tt
        }
      }, {
        key: "spoofMouse",
        value: function() {
          var tt, et;
          if ("horizontal" === this.layout && 0 !== this.coordinateList.length) {
            var Vt = this.container.getBoundingClientRect(),
              Ot = Vt.x,
              qt = Vt.y,
              Dt = Vt.height,
              mt = this.coordinateList[this.activeIndex].coordinate,
              dt = (null === (tt = window) || void 0 === tt ? void 0 : tt.scrollX) || 0,
              jt = (null === (et = window) || void 0 === et ? void 0 : et.scrollY) || 0,
              Ht = Ot + mt + dt,
              Xt = qt + this.offset.top + Dt / 2 + jt;
            this.mouseHandlerCallback({
              pageX: Ht,
              pageY: Xt
            })
          }
        }
      }]) && Ge(tt.prototype, et), Vt && Ge(tt, Vt), Object.defineProperty(tt, "prototype", {
        writable: !1
      }), tt;
      var tt, et, Vt
    }();
    var Ue = Vt(6476),
      Ae = Vt(6565);

    function ie(tt) {
      return ie = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, ie(tt)
    }
    var Ye = ["x", "y", "top", "left", "width", "height", "className"];

    function Be() {
      return Be = Object.assign ? Object.assign.bind() : function(tt) {
        for (var et = 1; et < arguments.length; et++) {
          var Vt = arguments[et];
          for (var Ot in Vt) Object.prototype.hasOwnProperty.call(Vt, Ot) && (tt[Ot] = Vt[Ot])
        }
        return tt
      }, Be.apply(this, arguments)
    }

    function pe(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function xe(tt, et, Vt) {
      return (et = function(tt) {
        var et = function(tt, et) {
          if ("object" != ie(tt) || !tt) return tt;
          var Vt = tt[Symbol.toPrimitive];
          if (void 0 !== Vt) {
            var Ot = Vt.call(tt, et || "default");
            if ("object" != ie(Ot)) return Ot;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === et ? String : Number)(tt)
        }(tt, "string");
        return "symbol" == ie(et) ? et : et + ""
      }(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }

    function Te(tt, et) {
      if (null == tt) return {};
      var Vt, Ot, qt = function(tt, et) {
        if (null == tt) return {};
        var Vt = {};
        for (var Ot in tt)
          if (Object.prototype.hasOwnProperty.call(tt, Ot)) {
            if (et.indexOf(Ot) >= 0) continue;
            Vt[Ot] = tt[Ot]
          } return Vt
      }(tt, et);
      if (Object.getOwnPropertySymbols) {
        var Dt = Object.getOwnPropertySymbols(tt);
        for (Ot = 0; Ot < Dt.length; Ot++) Vt = Dt[Ot], et.indexOf(Vt) >= 0 || Object.prototype.propertyIsEnumerable.call(tt, Vt) && (qt[Vt] = tt[Vt])
      }
      return qt
    }
    var ge = function(tt, et, Vt, Ot, qt, Dt) {
        return "M".concat(tt, ",").concat(qt, "v").concat(Ot, "M").concat(Dt, ",").concat(et, "h").concat(Vt)
      },
      se = function(tt) {
        var et = tt.x,
          Vt = void 0 === et ? 0 : et,
          qt = tt.y,
          Dt = void 0 === qt ? 0 : qt,
          mt = tt.top,
          dt = void 0 === mt ? 0 : mt,
          jt = tt.left,
          Ht = void 0 === jt ? 0 : jt,
          Xt = tt.width,
          Qt = void 0 === Xt ? 0 : Xt,
          lt = tt.height,
          Et = void 0 === lt ? 0 : lt,
          ft = tt.className,
          wt = function(tt) {
            for (var et = 1; et < arguments.length; et++) {
              var Vt = null != arguments[et] ? arguments[et] : {};
              et % 2 ? pe(Object(Vt), !0).forEach((function(et) {
                xe(tt, et, Vt[et])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : pe(Object(Vt)).forEach((function(et) {
                Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
              }))
            }
            return tt
          }({
            x: Vt,
            y: Dt,
            top: dt,
            left: Ht,
            width: Qt,
            height: Et
          }, Te(tt, Ye));
        return (0, ct.A)(Vt) && (0, ct.A)(Dt) && (0, ct.A)(Qt) && (0, ct.A)(Et) && (0, ct.A)(dt) && (0, ct.A)(Ht) ? Ot.createElement("path", Be({}, (0, ht.b)(wt, !0), {
          className: (0, yt.b)("recharts-cross", ft),
          d: ge(Vt, Dt, Qt, Et, dt, Ht)
        })) : null
      };

    function ne(tt) {
      var et = tt.cx,
        Vt = tt.cy,
        Ot = tt.radius,
        qt = tt.startAngle,
        Dt = tt.endAngle;
      return {
        points: [(0, Re.f)(et, Vt, Ot, qt), (0, Re.f)(et, Vt, Ot, Dt)],
        cx: et,
        cy: Vt,
        radius: Ot,
        startAngle: qt,
        endAngle: Dt
      }
    }
    var tV = Vt(6501);

    function eV(tt, et, Vt) {
      var Ot, qt, Dt, mt;
      if ("horizontal" === tt) Dt = Ot = et.x, qt = Vt.top, mt = Vt.top + Vt.height;
      else if ("vertical" === tt) mt = qt = et.y, Ot = Vt.left, Dt = Vt.left + Vt.width;
      else if (null != et.cx && null != et.cy) {
        if ("centric" !== tt) return ne(et);
        var dt = et.cx,
          jt = et.cy,
          Ht = et.innerRadius,
          Xt = et.outerRadius,
          Qt = et.angle,
          lt = (0, Re.f)(dt, jt, Ht, Qt),
          Et = (0, Re.f)(dt, jt, Xt, Qt);
        Ot = lt.x, qt = lt.y, Dt = Et.x, mt = Et.y
      }
      return [{
        x: Ot,
        y: qt
      }, {
        x: Dt,
        y: mt
      }]
    }

    function VV(tt) {
      return VV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, VV(tt)
    }

    function OV(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function qV(tt) {
      for (var et = 1; et < arguments.length; et++) {
        var Vt = null != arguments[et] ? arguments[et] : {};
        et % 2 ? OV(Object(Vt), !0).forEach((function(et) {
          DV(tt, et, Vt[et])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : OV(Object(Vt)).forEach((function(et) {
          Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
        }))
      }
      return tt
    }

    function DV(tt, et, Vt) {
      return (et = function(tt) {
        var et = function(tt, et) {
          if ("object" != VV(tt) || !tt) return tt;
          var Vt = tt[Symbol.toPrimitive];
          if (void 0 !== Vt) {
            var Ot = Vt.call(tt, et || "default");
            if ("object" != VV(Ot)) return Ot;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === et ? String : Number)(tt)
        }(tt, "string");
        return "symbol" == VV(et) ? et : et + ""
      }(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }

    function mV(tt) {
      var et, Vt, qt, Dt = tt.element,
        mt = tt.tooltipEventType,
        dt = tt.isActive,
        jt = tt.activeCoordinate,
        Ht = tt.activePayload,
        Xt = tt.offset,
        Qt = tt.activeTooltipIndex,
        lt = tt.tooltipAxisBandSize,
        Et = tt.layout,
        ft = tt.chartName,
        wt = null !== (et = Dt.props.cursor) && void 0 !== et ? et : null === (Vt = Dt.type.defaultProps) || void 0 === Vt ? void 0 : Vt.cursor;
      if (!Dt || !wt || !dt || !jt || "ScatterChart" !== ft && "axis" !== mt) return null;
      var Nt = Ae.c;
      if ("ScatterChart" === ft) qt = jt, Nt = se;
      else if ("BarChart" === ft) qt = function(tt, et, Vt, Ot) {
        var qt = Ot / 2;
        return {
          stroke: "none",
          fill: "#ccc",
          x: "horizontal" === tt ? et.x - qt : Vt.left + .5,
          y: "horizontal" === tt ? Vt.top + .5 : et.y - qt,
          width: "horizontal" === tt ? Ot : Vt.width - 1,
          height: "horizontal" === tt ? Vt.height - 1 : Ot
        }
      }(Et, jt, Xt, lt), Nt = Kt.d;
      else if ("radial" === Et) {
        var Mt = ne(jt),
          bt = Mt.cx,
          Jt = Mt.cy,
          Ct = Mt.radius;
        qt = {
          cx: bt,
          cy: Jt,
          startAngle: Mt.startAngle,
          endAngle: Mt.endAngle,
          innerRadius: Ct,
          outerRadius: Ct
        }, Nt = tV.b
      } else qt = {
        points: eV(Et, jt, Xt)
      }, Nt = Ae.c;
      var ut = qV(qV(qV(qV({
        stroke: "#ccc",
        pointerEvents: "none"
      }, Xt), qt), (0, ht.b)(wt, !1)), {}, {
        payload: Ht,
        payloadIndex: Qt,
        className: (0, yt.b)("recharts-tooltip-cursor", wt.className)
      });
      return (0, Ot.isValidElement)(wt) ? (0, Ot.cloneElement)(wt, ut) : (0, Ot.createElement)(Nt, ut)
    }
    var dV = Vt(6532),
      jV = ["item"],
      HV = ["children", "className", "width", "height", "style", "compact", "title", "desc"];

    function XV(tt) {
      return XV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, XV(tt)
    }

    function QV() {
      return QV = Object.assign ? Object.assign.bind() : function(tt) {
        for (var et = 1; et < arguments.length; et++) {
          var Vt = arguments[et];
          for (var Ot in Vt) Object.prototype.hasOwnProperty.call(Vt, Ot) && (tt[Ot] = Vt[Ot])
        }
        return tt
      }, QV.apply(this, arguments)
    }

    function lV(tt, et) {
      return function(tt) {
        if (Array.isArray(tt)) return tt
      }(tt) || function(tt, et) {
        var Vt = null == tt ? null : "undefined" != typeof Symbol && tt[Symbol.iterator] || tt["@@iterator"];
        if (null != Vt) {
          var Ot, qt, Dt, mt, dt = [],
            jt = !0,
            Ht = !1;
          try {
            if (Dt = (Vt = Vt.call(tt)).next, 0 === et) {
              if (Object(Vt) !== Vt) return;
              jt = !1
            } else
              for (; !(jt = (Ot = Dt.call(Vt)).done) && (dt.push(Ot.value), dt.length !== et); jt = !0);
          } catch (tt) {
            Ht = !0, qt = tt
          } finally {
            try {
              if (!jt && null != Vt.return && (mt = Vt.return(), Object(mt) !== mt)) return
            } finally {
              if (Ht) throw qt
            }
          }
          return dt
        }
      }(tt, et) || bV(tt, et) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function EV(tt, et) {
      if (null == tt) return {};
      var Vt, Ot, qt = function(tt, et) {
        if (null == tt) return {};
        var Vt = {};
        for (var Ot in tt)
          if (Object.prototype.hasOwnProperty.call(tt, Ot)) {
            if (et.indexOf(Ot) >= 0) continue;
            Vt[Ot] = tt[Ot]
          } return Vt
      }(tt, et);
      if (Object.getOwnPropertySymbols) {
        var Dt = Object.getOwnPropertySymbols(tt);
        for (Ot = 0; Ot < Dt.length; Ot++) Vt = Dt[Ot], et.indexOf(Vt) >= 0 || Object.prototype.propertyIsEnumerable.call(tt, Vt) && (qt[Vt] = tt[Vt])
      }
      return qt
    }

    function fV(tt, et) {
      for (var Vt = 0; Vt < et.length; Vt++) {
        var Ot = et[Vt];
        Ot.enumerable = Ot.enumerable || !1, Ot.configurable = !0, "value" in Ot && (Ot.writable = !0), Object.defineProperty(tt, hV(Ot.key), Ot)
      }
    }

    function wV(tt, et, Vt) {
      return et = NV(et),
        function(tt, et) {
          if (et && ("object" === XV(et) || "function" === typeof et)) return et;
          if (void 0 !== et) throw new TypeError("Derived constructors may only return object or undefined");
          return function(tt) {
            if (void 0 === tt) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return tt
          }(tt)
        }(tt, yV() ? Reflect.construct(et, Vt || [], NV(tt).constructor) : et.apply(tt, Vt))
    }

    function yV() {
      try {
        var tt = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (tt) {}
      return (yV = function() {
        return !!tt
      })()
    }

    function NV(tt) {
      return NV = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(tt) {
        return tt.__proto__ || Object.getPrototypeOf(tt)
      }, NV(tt)
    }

    function aV(tt, et) {
      return aV = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(tt, et) {
        return tt.__proto__ = et, tt
      }, aV(tt, et)
    }

    function MV(tt) {
      return function(tt) {
        if (Array.isArray(tt)) return JV(tt)
      }(tt) || function(tt) {
        if ("undefined" !== typeof Symbol && null != tt[Symbol.iterator] || null != tt["@@iterator"]) return Array.from(tt)
      }(tt) || bV(tt) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function bV(tt, et) {
      if (tt) {
        if ("string" === typeof tt) return JV(tt, et);
        var Vt = Object.prototype.toString.call(tt).slice(8, -1);
        return "Object" === Vt && tt.constructor && (Vt = tt.constructor.name), "Map" === Vt || "Set" === Vt ? Array.from(tt) : "Arguments" === Vt || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Vt) ? JV(tt, et) : void 0
      }
    }

    function JV(tt, et) {
      (null == et || et > tt.length) && (et = tt.length);
      for (var Vt = 0, Ot = new Array(et); Vt < et; Vt++) Ot[Vt] = tt[Vt];
      return Ot
    }

    function CV(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function uV(tt) {
      for (var et = 1; et < arguments.length; et++) {
        var Vt = null != arguments[et] ? arguments[et] : {};
        et % 2 ? CV(Object(Vt), !0).forEach((function(et) {
          KV(tt, et, Vt[et])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : CV(Object(Vt)).forEach((function(et) {
          Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
        }))
      }
      return tt
    }

    function KV(tt, et, Vt) {
      return (et = hV(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }

    function hV(tt) {
      var et = function(tt, et) {
        if ("object" != XV(tt) || !tt) return tt;
        var Vt = tt[Symbol.toPrimitive];
        if (void 0 !== Vt) {
          var Ot = Vt.call(tt, et || "default");
          if ("object" != XV(Ot)) return Ot;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === et ? String : Number)(tt)
      }(tt, "string");
      return "symbol" == XV(et) ? et : et + ""
    }
    var vV = {
        xAxis: ["bottom", "top"],
        yAxis: ["left", "right"]
      },
      WV = {
        width: "100%",
        height: "100%"
      },
      SV = {
        x: 0,
        y: 0
      };

    function cV(tt) {
      return tt
    }
    var RV = function(tt, et) {
      var Vt = et.graphicalItems,
        Ot = et.dataStartIndex,
        qt = et.dataEndIndex,
        Dt = (null !== Vt && void 0 !== Vt ? Vt : []).reduce((function(tt, et) {
          var Vt = et.props.data;
          return Vt && Vt.length ? [].concat(MV(tt), MV(Vt)) : tt
        }), []);
      return Dt.length > 0 ? Dt : tt && tt.length && (0, ct.A)(Ot) && (0, ct.A)(qt) ? tt.slice(Ot, qt + 1) : []
    };

    function IV(tt) {
      return "number" === tt ? [0, "auto"] : void 0
    }
    var PV = function(tt, et, Vt, Ot) {
        var qt = tt.graphicalItems,
          Dt = tt.tooltipAxis,
          mt = RV(et, tt);
        return Vt < 0 || !qt || !qt.length || Vt >= mt.length ? null : qt.reduce((function(qt, dt) {
          var jt, Ht, Xt = null !== (jt = dt.props.data) && void 0 !== jt ? jt : et;
          if (Xt && tt.dataStartIndex + tt.dataEndIndex !== 0 && tt.dataEndIndex - tt.dataStartIndex >= Vt && (Xt = Xt.slice(tt.dataStartIndex, tt.dataEndIndex + 1)), Dt.dataKey && !Dt.allowDuplicatedCategory) {
            var Qt = void 0 === Xt ? mt : Xt;
            Ht = (0, ct.e)(Qt, Dt.dataKey, Ot)
          } else Ht = Xt && Xt[Vt] || mt[Vt];
          return Ht ? [].concat(MV(qt), [(0, St.V)(dt, Ht)]) : qt
        }), [])
      },
      ZV = function(tt, et, Vt, Ot) {
        var qt = Ot || {
            x: tt.chartX,
            y: tt.chartY
          },
          Dt = function(tt, et) {
            return "horizontal" === et ? tt.x : "vertical" === et ? tt.y : "centric" === et ? tt.angle : tt.radius
          }(qt, Vt),
          mt = tt.orderedTooltipTicks,
          dt = tt.tooltipAxis,
          jt = tt.tooltipTicks,
          Ht = (0, St.d)(Dt, mt, jt, dt);
        if (Ht >= 0 && jt) {
          var Xt = jt[Ht] && jt[Ht].value,
            Qt = PV(tt, et, Ht, Xt),
            lt = function(tt, et, Vt, Ot) {
              var qt = et.find((function(tt) {
                return tt && tt.index === Vt
              }));
              if (qt) {
                if ("horizontal" === tt) return {
                  x: qt.coordinate,
                  y: Ot.y
                };
                if ("vertical" === tt) return {
                  x: Ot.x,
                  y: qt.coordinate
                };
                if ("centric" === tt) {
                  var Dt = qt.coordinate,
                    mt = Ot.radius;
                  return uV(uV(uV({}, Ot), (0, Re.f)(Ot.cx, Ot.cy, mt, Dt)), {}, {
                    angle: Dt,
                    radius: mt
                  })
                }
                var dt = qt.coordinate,
                  jt = Ot.angle;
                return uV(uV(uV({}, Ot), (0, Re.f)(Ot.cx, Ot.cy, dt, jt)), {}, {
                  angle: jt,
                  radius: dt
                })
              }
              return SV
            }(Vt, mt, Ht, qt);
          return {
            activeTooltipIndex: Ht,
            activeLabel: Xt,
            activePayload: Qt,
            activeCoordinate: lt
          }
        }
        return null
      },
      LV = function(tt, et) {
        var Vt = et.axes,
          Ot = et.graphicalItems,
          qt = et.axisType,
          mt = et.axisIdKey,
          dt = et.stackGroups,
          jt = et.dataStartIndex,
          Xt = et.dataEndIndex,
          Qt = tt.layout,
          lt = tt.children,
          Et = tt.stackOffset,
          ft = (0, St.ab)(Qt, qt);
        return Vt.reduce((function(et, Vt) {
          var wt, yt = void 0 !== Vt.type.defaultProps ? uV(uV({}, Vt.type.defaultProps), Vt.props) : Vt.props,
            Nt = yt.type,
            Mt = yt.dataKey,
            bt = yt.allowDataOverflow,
            Jt = yt.allowDuplicatedCategory,
            Ct = yt.scale,
            ut = yt.ticks,
            Kt = yt.includeHidden,
            ht = yt[mt];
          if (et[ht]) return et;
          var vt, Wt, Rt, It = RV(tt.data, {
              graphicalItems: Ot.filter((function(tt) {
                var et;
                return (mt in tt.props ? tt.props[mt] : null === (et = tt.type.defaultProps) || void 0 === et ? void 0 : et[mt]) === ht
              })),
              dataStartIndex: jt,
              dataEndIndex: Xt
            }),
            Pt = It.length;
          (function(tt, et, Vt) {
            if ("number" === Vt && !0 === et && Array.isArray(tt)) {
              var Ot = null === tt || void 0 === tt ? void 0 : tt[0],
                qt = null === tt || void 0 === tt ? void 0 : tt[1];
              if (Ot && qt && (0, ct.A)(Ot) && (0, ct.A)(qt)) return !0
            }
            return !1
          })(yt.domain, bt, Nt) && (vt = (0, St.lb)(yt.domain, null, bt), !ft || "number" !== Nt && "auto" === Ct || (Rt = (0, St.F)(It, Mt, "category")));
          var Zt = IV(Nt);
          if (!vt || 0 === vt.length) {
            var Lt, Ft = null !== (Lt = yt.domain) && void 0 !== Lt ? Lt : Zt;
            if (Mt) {
              if (vt = (0, St.F)(It, Mt, Nt), "category" === Nt && ft) {
                var kt = (0, ct.q)(vt);
                Jt && kt ? (Wt = vt, vt = Ht()(0, Pt)) : Jt || (vt = (0, St.eb)(Ft, vt, Vt).reduce((function(tt, et) {
                  return tt.indexOf(et) >= 0 ? tt : [].concat(MV(tt), [et])
                }), []))
              } else if ("category" === Nt) vt = Jt ? vt.filter((function(tt) {
                return "" !== tt && !Dt()(tt)
              })) : (0, St.eb)(Ft, vt, Vt).reduce((function(tt, et) {
                return tt.indexOf(et) >= 0 || "" === et || Dt()(et) ? tt : [].concat(MV(tt), [et])
              }), []);
              else if ("number" === Nt) {
                var Gt = (0, St.ib)(It, Ot.filter((function(tt) {
                  var et, Vt, Ot = mt in tt.props ? tt.props[mt] : null === (et = tt.type.defaultProps) || void 0 === et ? void 0 : et[mt],
                    qt = "hide" in tt.props ? tt.props.hide : null === (Vt = tt.type.defaultProps) || void 0 === Vt ? void 0 : Vt.hide;
                  return Ot === ht && (Kt || !qt)
                })), Mt, qt, Qt);
                Gt && (vt = Gt)
              }!ft || "number" !== Nt && "auto" === Ct || (Rt = (0, St.F)(It, Mt, "category"))
            } else vt = ft ? Ht()(0, Pt) : dt && dt[ht] && dt[ht].hasStack && "number" === Nt ? "expand" === Et ? [0, 1] : (0, St.L)(dt[ht].stackGroups, jt, Xt) : (0, St.J)(It, Ot.filter((function(tt) {
              var et = mt in tt.props ? tt.props[mt] : tt.type.defaultProps[mt],
                Vt = "hide" in tt.props ? tt.props.hide : tt.type.defaultProps.hide;
              return et === ht && (Kt || !Vt)
            })), Nt, Qt, !0);
            if ("number" === Nt) vt = ce(lt, vt, ht, qt, ut), Ft && (vt = (0, St.lb)(Ft, vt, bt));
            else if ("category" === Nt && Ft) {
              var zt = Ft;
              vt.every((function(tt) {
                return zt.indexOf(tt) >= 0
              })) && (vt = zt)
            }
          }
          return uV(uV({}, et), {}, KV({}, ht, uV(uV({}, yt), {}, {
            axisType: qt,
            domain: vt,
            categoricalDomain: Rt,
            duplicateDomain: Wt,
            originalDomain: null !== (wt = yt.domain) && void 0 !== wt ? wt : Zt,
            isCategorical: ft,
            layout: Qt
          })))
        }), {})
      },
      FV = function(tt, et) {
        var Vt = et.axisType,
          Ot = void 0 === Vt ? "xAxis" : Vt,
          qt = et.AxisComp,
          Dt = et.graphicalItems,
          mt = et.stackGroups,
          dt = et.dataStartIndex,
          jt = et.dataEndIndex,
          Xt = tt.children,
          lt = "".concat(Ot, "Id"),
          Et = (0, ht.d)(Xt, qt),
          ft = {};
        return Et && Et.length ? ft = LV(tt, {
          axes: Et,
          graphicalItems: Dt,
          axisType: Ot,
          axisIdKey: lt,
          stackGroups: mt,
          dataStartIndex: dt,
          dataEndIndex: jt
        }) : Dt && Dt.length && (ft = function(tt, et) {
          var Vt = et.graphicalItems,
            Ot = et.Axis,
            qt = et.axisType,
            Dt = et.axisIdKey,
            mt = et.stackGroups,
            dt = et.dataStartIndex,
            jt = et.dataEndIndex,
            Xt = tt.layout,
            lt = tt.children,
            Et = RV(tt.data, {
              graphicalItems: Vt,
              dataStartIndex: dt,
              dataEndIndex: jt
            }),
            ft = Et.length,
            wt = (0, St.ab)(Xt, qt),
            yt = -1;
          return Vt.reduce((function(tt, et) {
            var Nt, Mt = (void 0 !== et.type.defaultProps ? uV(uV({}, et.type.defaultProps), et.props) : et.props)[Dt],
              bt = IV("number");
            return tt[Mt] ? tt : (yt++, wt ? Nt = Ht()(0, ft) : mt && mt[Mt] && mt[Mt].hasStack ? (Nt = (0, St.L)(mt[Mt].stackGroups, dt, jt), Nt = ce(lt, Nt, Mt, qt)) : (Nt = (0, St.lb)(bt, (0, St.J)(Et, Vt.filter((function(tt) {
              var et, Vt, Ot = Dt in tt.props ? tt.props[Dt] : null === (et = tt.type.defaultProps) || void 0 === et ? void 0 : et[Dt],
                qt = "hide" in tt.props ? tt.props.hide : null === (Vt = tt.type.defaultProps) || void 0 === Vt ? void 0 : Vt.hide;
              return Ot === Mt && !qt
            })), "number", Xt), Ot.defaultProps.allowDataOverflow), Nt = ce(lt, Nt, Mt, qt)), uV(uV({}, tt), {}, KV({}, Mt, uV(uV({
              axisType: qt
            }, Ot.defaultProps), {}, {
              hide: !0,
              orientation: Qt()(vV, "".concat(qt, ".").concat(yt % 2), null),
              domain: Nt,
              originalDomain: bt,
              isCategorical: wt,
              layout: Xt
            }))))
          }), {})
        }(tt, {
          Axis: qt,
          graphicalItems: Dt,
          axisType: Ot,
          axisIdKey: lt,
          stackGroups: mt,
          dataStartIndex: dt,
          dataEndIndex: jt
        })), ft
      },
      kV = function(tt) {
        var et = tt.children,
          Vt = tt.defaultShowTooltip,
          Ot = (0, ht.e)(et, xt),
          qt = 0,
          Dt = 0;
        return tt.data && 0 !== tt.data.length && (Dt = tt.data.length - 1), Ot && Ot.props && (Ot.props.startIndex >= 0 && (qt = Ot.props.startIndex), Ot.props.endIndex >= 0 && (Dt = Ot.props.endIndex)), {
          chartX: 0,
          chartY: 0,
          dataStartIndex: qt,
          dataEndIndex: Dt,
          activeTooltipIndex: -1,
          isTooltipActive: Boolean(Vt)
        }
      },
      GV = function(tt) {
        return "horizontal" === tt ? {
          numericAxisName: "yAxis",
          cateAxisName: "xAxis"
        } : "vertical" === tt ? {
          numericAxisName: "xAxis",
          cateAxisName: "yAxis"
        } : "centric" === tt ? {
          numericAxisName: "radiusAxis",
          cateAxisName: "angleAxis"
        } : {
          numericAxisName: "angleAxis",
          cateAxisName: "radiusAxis"
        }
      },
      zV = function(tt, et) {
        return "xAxis" === et ? tt[et].width : "yAxis" === et ? tt[et].height : void 0
      },
      oV = function(tt) {
        var et = tt.chartName,
          Vt = tt.GraphicalChild,
          qt = tt.defaultTooltipEventType,
          mt = void 0 === qt ? "axis" : qt,
          jt = tt.validateTooltipEventTypes,
          Ht = void 0 === jt ? ["axis"] : jt,
          Xt = tt.axisComponents,
          lt = tt.legendContent,
          ft = tt.formatAxisMap,
          vt = tt.defaultProps,
          Wt = function(tt, et) {
            var Vt = et.graphicalItems,
              Ot = et.stackGroups,
              qt = et.offset,
              mt = et.updateId,
              dt = et.dataStartIndex,
              jt = et.dataEndIndex,
              Ht = tt.barSize,
              Qt = tt.layout,
              lt = tt.barGap,
              Et = tt.barCategoryGap,
              ft = tt.maxBarSize,
              wt = GV(Qt),
              yt = wt.numericAxisName,
              Mt = wt.cateAxisName,
              bt = function(tt) {
                return !(!tt || !tt.length) && tt.some((function(tt) {
                  var et = (0, ht.g)(tt && tt.type);
                  return et && et.indexOf("Bar") >= 0
                }))
              }(Vt),
              Jt = [];
            return Vt.forEach((function(Vt, wt) {
              var Ct = RV(tt.data, {
                  graphicalItems: [Vt],
                  dataStartIndex: dt,
                  dataEndIndex: jt
                }),
                ut = void 0 !== Vt.type.defaultProps ? uV(uV({}, Vt.type.defaultProps), Vt.props) : Vt.props,
                Kt = ut.dataKey,
                vt = ut.maxBarSize,
                Wt = ut["".concat(yt, "Id")],
                ct = ut["".concat(Mt, "Id")],
                Rt = Xt.reduce((function(tt, Vt) {
                  var Ot = et["".concat(Vt.axisType, "Map")],
                    qt = ut["".concat(Vt.axisType, "Id")];
                  Ot && Ot[qt] || "zAxis" === Vt.axisType || (0, Nt.c)(!1);
                  var Dt = Ot[qt];
                  return uV(uV({}, tt), {}, KV(KV({}, Vt.axisType, Dt), "".concat(Vt.axisType, "Ticks"), (0, St.S)(Dt)))
                }), {}),
                It = Rt[Mt],
                Pt = Rt["".concat(Mt, "Ticks")],
                Zt = Ot && Ot[Wt] && Ot[Wt].hasStack && (0, St.P)(Vt, Ot[Wt].stackGroups),
                Lt = (0, ht.g)(Vt.type).indexOf("Bar") >= 0,
                Ft = (0, St.l)(It, Pt),
                kt = [],
                Gt = bt && (0, St.r)({
                  barSize: Ht,
                  stackGroups: Ot,
                  totalSize: zV(Rt, Mt)
                });
              if (Lt) {
                var zt, ot, rt = Dt()(vt) ? ft : vt,
                  Ut = null !== (zt = null !== (ot = (0, St.l)(It, Pt, !0)) && void 0 !== ot ? ot : rt) && void 0 !== zt ? zt : 0;
                kt = (0, St.o)({
                  barGap: lt,
                  barCategoryGap: Et,
                  bandSize: Ut !== Ft ? Ut : Ft,
                  sizeList: Gt[ct],
                  maxBarSize: rt
                }), Ut !== Ft && (kt = kt.map((function(tt) {
                  return uV(uV({}, tt), {}, {
                    position: uV(uV({}, tt.position), {}, {
                      offset: tt.position.offset - Ut / 2
                    })
                  })
                })))
              }
              var At = Vt && Vt.type && Vt.type.getComposedData;
              At && Jt.push({
                props: uV(uV({}, At(uV(uV({}, Rt), {}, {
                  displayedData: Ct,
                  props: tt,
                  dataKey: Kt,
                  item: Vt,
                  bandSize: Ft,
                  barPosition: kt,
                  offset: qt,
                  stackedData: Zt,
                  layout: Qt,
                  dataStartIndex: dt,
                  dataEndIndex: jt
                }))), {}, KV(KV(KV({
                  key: Vt.key || "item-".concat(wt)
                }, yt, Rt[yt]), Mt, Rt[Mt]), "animationId", mt)),
                childIndex: (0, ht.p)(Vt, tt.children),
                item: Vt
              })
            })), Jt
          },
          Rt = function(tt, Ot) {
            var qt = tt.props,
              Dt = tt.dataStartIndex,
              mt = tt.dataEndIndex,
              dt = tt.updateId;
            if (!(0, ht.x)({
                props: qt
              })) return null;
            var jt = qt.children,
              Ht = qt.layout,
              lt = qt.stackOffset,
              wt = qt.data,
              yt = qt.reverseStackOrder,
              Nt = GV(Ht),
              Mt = Nt.numericAxisName,
              bt = Nt.cateAxisName,
              Jt = (0, ht.d)(jt, Vt),
              ut = (0, St.O)(wt, Jt, "".concat(Mt, "Id"), "".concat(bt, "Id"), lt, yt),
              Kt = Xt.reduce((function(tt, et) {
                var Vt = "".concat(et.axisType, "Map");
                return uV(uV({}, tt), {}, KV({}, Vt, FV(qt, uV(uV({}, et), {}, {
                  graphicalItems: Jt,
                  stackGroups: et.axisType === Mt && ut,
                  dataStartIndex: Dt,
                  dataEndIndex: mt
                }))))
              }), {}),
              vt = function(tt, et) {
                var Vt = tt.props,
                  Ot = tt.graphicalItems,
                  qt = tt.xAxisMap,
                  Dt = void 0 === qt ? {} : qt,
                  mt = tt.yAxisMap,
                  dt = void 0 === mt ? {} : mt,
                  jt = Vt.width,
                  Ht = Vt.height,
                  Xt = Vt.children,
                  lt = Vt.margin || {},
                  Et = (0, ht.e)(Xt, xt),
                  ft = (0, ht.e)(Xt, Ct.c),
                  wt = Object.keys(dt).reduce((function(tt, et) {
                    var Vt = dt[et],
                      Ot = Vt.orientation;
                    return Vt.mirror || Vt.hide ? tt : uV(uV({}, tt), {}, KV({}, Ot, tt[Ot] + Vt.width))
                  }), {
                    left: lt.left || 0,
                    right: lt.right || 0
                  }),
                  yt = Object.keys(Dt).reduce((function(tt, et) {
                    var Vt = Dt[et],
                      Ot = Vt.orientation;
                    return Vt.mirror || Vt.hide ? tt : uV(uV({}, tt), {}, KV({}, Ot, Qt()(tt, "".concat(Ot)) + Vt.height))
                  }), {
                    top: lt.top || 0,
                    bottom: lt.bottom || 0
                  }),
                  Nt = uV(uV({}, yt), wt),
                  Mt = Nt.bottom;
                Et && (Nt.bottom += Et.props.height || xt.defaultProps.height), ft && et && (Nt = (0, St.b)(Nt, Ot, Vt, et));
                var bt = jt - Nt.left - Nt.right,
                  Jt = Ht - Nt.top - Nt.bottom;
                return uV(uV({
                  brushBottom: Mt
                }, Nt), {}, {
                  width: Math.max(bt, 0),
                  height: Math.max(Jt, 0)
                })
              }(uV(uV({}, Kt), {}, {
                props: qt,
                graphicalItems: Jt
              }), null === Ot || void 0 === Ot ? void 0 : Ot.legendBBox);
            Object.keys(Kt).forEach((function(tt) {
              Kt[tt] = ft(qt, Kt[tt], vt, tt.replace("Map", ""), et)
            }));
            var Rt = function(tt) {
                var et = (0, ct.i)(tt),
                  Vt = (0, St.S)(et, !1, !0);
                return {
                  tooltipTicks: Vt,
                  orderedTooltipTicks: Et()(Vt, (function(tt) {
                    return tt.coordinate
                  })),
                  tooltipAxis: et,
                  tooltipAxisBandSize: (0, St.l)(et, Vt)
                }
              }(Kt["".concat(bt, "Map")]),
              It = Wt(qt, uV(uV({}, Kt), {}, {
                dataStartIndex: Dt,
                dataEndIndex: mt,
                updateId: dt,
                graphicalItems: Jt,
                stackGroups: ut,
                offset: vt
              }));
            return uV(uV({
              formattedGraphicalItems: It,
              graphicalItems: Jt,
              offset: vt,
              stackGroups: ut
            }, Rt), Kt)
          },
          It = function(tt) {
            function Vt(tt) {
              var qt, mt, jt;
              return function(tt, et) {
                if (!(tt instanceof et)) throw new TypeError("Cannot call a class as a function")
              }(this, Vt), KV(jt = wV(this, Vt, [tt]), "eventEmitterSymbol", Symbol("rechartsEventEmitter")), KV(jt, "accessibilityManager", new re), KV(jt, "handleLegendBBoxUpdate", (function(tt) {
                if (tt) {
                  var et = jt.state,
                    Vt = et.dataStartIndex,
                    Ot = et.dataEndIndex,
                    qt = et.updateId;
                  jt.setState(uV({
                    legendBBox: tt
                  }, Rt({
                    props: jt.props,
                    dataStartIndex: Vt,
                    dataEndIndex: Ot,
                    updateId: qt
                  }, uV(uV({}, jt.state), {}, {
                    legendBBox: tt
                  }))))
                }
              })), KV(jt, "handleReceiveSyncEvent", (function(tt, et, Vt) {
                if (jt.props.syncId === tt) {
                  if (Vt === jt.eventEmitterSymbol && "function" !== typeof jt.props.syncMethod) return;
                  jt.applySyncEvent(et)
                }
              })), KV(jt, "handleBrushChange", (function(tt) {
                var et = tt.startIndex,
                  Vt = tt.endIndex;
                if (et !== jt.state.dataStartIndex || Vt !== jt.state.dataEndIndex) {
                  var Ot = jt.state.updateId;
                  jt.setState((function() {
                    return uV({
                      dataStartIndex: et,
                      dataEndIndex: Vt
                    }, Rt({
                      props: jt.props,
                      dataStartIndex: et,
                      dataEndIndex: Vt,
                      updateId: Ot
                    }, jt.state))
                  })), jt.triggerSyncEvent({
                    dataStartIndex: et,
                    dataEndIndex: Vt
                  })
                }
              })), KV(jt, "handleMouseEnter", (function(tt) {
                var et = jt.getMouseInfo(tt);
                if (et) {
                  var Vt = uV(uV({}, et), {}, {
                    isTooltipActive: !0
                  });
                  jt.setState(Vt), jt.triggerSyncEvent(Vt);
                  var Ot = jt.props.onMouseEnter;
                  dt()(Ot) && Ot(Vt, tt)
                }
              })), KV(jt, "triggeredAfterMouseMove", (function(tt) {
                var et = jt.getMouseInfo(tt),
                  Vt = et ? uV(uV({}, et), {}, {
                    isTooltipActive: !0
                  }) : {
                    isTooltipActive: !1
                  };
                jt.setState(Vt), jt.triggerSyncEvent(Vt);
                var Ot = jt.props.onMouseMove;
                dt()(Ot) && Ot(Vt, tt)
              })), KV(jt, "handleItemMouseEnter", (function(tt) {
                jt.setState((function() {
                  return {
                    isTooltipActive: !0,
                    activeItem: tt,
                    activePayload: tt.tooltipPayload,
                    activeCoordinate: tt.tooltipPosition || {
                      x: tt.cx,
                      y: tt.cy
                    }
                  }
                }))
              })), KV(jt, "handleItemMouseLeave", (function() {
                jt.setState((function() {
                  return {
                    isTooltipActive: !1
                  }
                }))
              })), KV(jt, "handleMouseMove", (function(tt) {
                tt.persist(), jt.throttleTriggeredAfterMouseMove(tt)
              })), KV(jt, "handleMouseLeave", (function(tt) {
                jt.throttleTriggeredAfterMouseMove.cancel();
                var et = {
                  isTooltipActive: !1
                };
                jt.setState(et), jt.triggerSyncEvent(et);
                var Vt = jt.props.onMouseLeave;
                dt()(Vt) && Vt(et, tt)
              })), KV(jt, "handleOuterEvent", (function(tt) {
                var et, Vt = (0, ht.j)(tt),
                  Ot = Qt()(jt.props, "".concat(Vt));
                Vt && dt()(Ot) && Ot(null !== (et = /.*touch.*/i.test(Vt) ? jt.getMouseInfo(tt.changedTouches[0]) : jt.getMouseInfo(tt)) && void 0 !== et ? et : {}, tt)
              })), KV(jt, "handleClick", (function(tt) {
                var et = jt.getMouseInfo(tt);
                if (et) {
                  var Vt = uV(uV({}, et), {}, {
                    isTooltipActive: !0
                  });
                  jt.setState(Vt), jt.triggerSyncEvent(Vt);
                  var Ot = jt.props.onClick;
                  dt()(Ot) && Ot(Vt, tt)
                }
              })), KV(jt, "handleMouseDown", (function(tt) {
                var et = jt.props.onMouseDown;
                dt()(et) && et(jt.getMouseInfo(tt), tt)
              })), KV(jt, "handleMouseUp", (function(tt) {
                var et = jt.props.onMouseUp;
                dt()(et) && et(jt.getMouseInfo(tt), tt)
              })), KV(jt, "handleTouchMove", (function(tt) {
                null != tt.changedTouches && tt.changedTouches.length > 0 && jt.throttleTriggeredAfterMouseMove(tt.changedTouches[0])
              })), KV(jt, "handleTouchStart", (function(tt) {
                null != tt.changedTouches && tt.changedTouches.length > 0 && jt.handleMouseDown(tt.changedTouches[0])
              })), KV(jt, "handleTouchEnd", (function(tt) {
                null != tt.changedTouches && tt.changedTouches.length > 0 && jt.handleMouseUp(tt.changedTouches[0])
              })), KV(jt, "handleDoubleClick", (function(tt) {
                var et = jt.props.onDoubleClick;
                dt()(et) && et(jt.getMouseInfo(tt), tt)
              })), KV(jt, "handleContextMenu", (function(tt) {
                var et = jt.props.onContextMenu;
                dt()(et) && et(jt.getMouseInfo(tt), tt)
              })), KV(jt, "triggerSyncEvent", (function(tt) {
                void 0 !== jt.props.syncId && Ze.emit(Le, jt.props.syncId, tt, jt.eventEmitterSymbol)
              })), KV(jt, "applySyncEvent", (function(tt) {
                var et = jt.props,
                  Vt = et.layout,
                  Ot = et.syncMethod,
                  qt = jt.state.updateId,
                  Dt = tt.dataStartIndex,
                  mt = tt.dataEndIndex;
                if (void 0 !== tt.dataStartIndex || void 0 !== tt.dataEndIndex) jt.setState(uV({
                  dataStartIndex: Dt,
                  dataEndIndex: mt
                }, Rt({
                  props: jt.props,
                  dataStartIndex: Dt,
                  dataEndIndex: mt,
                  updateId: qt
                }, jt.state)));
                else if (void 0 !== tt.activeTooltipIndex) {
                  var dt = tt.chartX,
                    Ht = tt.chartY,
                    Xt = tt.activeTooltipIndex,
                    Qt = jt.state,
                    lt = Qt.offset,
                    Et = Qt.tooltipTicks;
                  if (!lt) return;
                  if ("function" === typeof Ot) Xt = Ot(Et, tt);
                  else if ("value" === Ot) {
                    Xt = -1;
                    for (var ft = 0; ft < Et.length; ft++)
                      if (Et[ft].value === tt.activeLabel) {
                        Xt = ft;
                        break
                      }
                  }
                  var wt = uV(uV({}, lt), {}, {
                      x: lt.left,
                      y: lt.top
                    }),
                    yt = Math.min(dt, wt.x + wt.width),
                    Nt = Math.min(Ht, wt.y + wt.height),
                    Mt = Et[Xt] && Et[Xt].value,
                    bt = PV(jt.state, jt.props.data, Xt),
                    Jt = Et[Xt] ? {
                      x: "horizontal" === Vt ? Et[Xt].coordinate : yt,
                      y: "horizontal" === Vt ? Nt : Et[Xt].coordinate
                    } : SV;
                  jt.setState(uV(uV({}, tt), {}, {
                    activeLabel: Mt,
                    activeCoordinate: Jt,
                    activePayload: bt,
                    activeTooltipIndex: Xt
                  }))
                } else jt.setState(tt)
              })), KV(jt, "renderCursor", (function(tt) {
                var Vt, qt = jt.state,
                  Dt = qt.isTooltipActive,
                  mt = qt.activeCoordinate,
                  dt = qt.activePayload,
                  Ht = qt.offset,
                  Xt = qt.activeTooltipIndex,
                  Qt = qt.tooltipAxisBandSize,
                  lt = jt.getTooltipEventType(),
                  Et = null !== (Vt = tt.props.active) && void 0 !== Vt ? Vt : Dt,
                  ft = jt.props.layout,
                  wt = tt.key || "_recharts-cursor";
                return Ot.createElement(mV, {
                  key: wt,
                  activeCoordinate: mt,
                  activePayload: dt,
                  activeTooltipIndex: Xt,
                  chartName: et,
                  element: tt,
                  isActive: Et,
                  layout: ft,
                  offset: Ht,
                  tooltipAxisBandSize: Qt,
                  tooltipEventType: lt
                })
              })), KV(jt, "renderPolarAxis", (function(tt, et, Vt) {
                var qt = Qt()(tt, "type.axisType"),
                  Dt = Qt()(jt.state, "".concat(qt, "Map")),
                  mt = tt.type.defaultProps,
                  dt = void 0 !== mt ? uV(uV({}, mt), tt.props) : tt.props,
                  Ht = Dt && Dt[dt["".concat(qt, "Id")]];
                return (0, Ot.cloneElement)(tt, uV(uV({}, Ht), {}, {
                  className: (0, yt.b)(qt, Ht.className),
                  key: tt.key || "".concat(et, "-").concat(Vt),
                  ticks: (0, St.S)(Ht, !0)
                }))
              })), KV(jt, "renderPolarGrid", (function(tt) {
                var et = tt.props,
                  Vt = et.radialLines,
                  qt = et.polarAngles,
                  Dt = et.polarRadius,
                  mt = jt.state,
                  dt = mt.radiusAxisMap,
                  Ht = mt.angleAxisMap,
                  Xt = (0, ct.i)(dt),
                  Qt = (0, ct.i)(Ht),
                  lt = Qt.cx,
                  Et = Qt.cy,
                  ft = Qt.innerRadius,
                  wt = Qt.outerRadius;
                return (0, Ot.cloneElement)(tt, {
                  polarAngles: Array.isArray(qt) ? qt : (0, St.S)(Qt, !0).map((function(tt) {
                    return tt.coordinate
                  })),
                  polarRadius: Array.isArray(Dt) ? Dt : (0, St.S)(Xt, !0).map((function(tt) {
                    return tt.coordinate
                  })),
                  cx: lt,
                  cy: Et,
                  innerRadius: ft,
                  outerRadius: wt,
                  key: tt.key || "polar-grid",
                  radialLines: Vt
                })
              })), KV(jt, "renderLegend", (function() {
                var tt = jt.state.formattedGraphicalItems,
                  et = jt.props,
                  Vt = et.children,
                  qt = et.width,
                  Dt = et.height,
                  mt = jt.props.margin || {},
                  dt = qt - (mt.left || 0) - (mt.right || 0),
                  Ht = (0, gt.b)({
                    children: Vt,
                    formattedGraphicalItems: tt,
                    legendWidth: dt,
                    legendContent: lt
                  });
                if (!Ht) return null;
                var Xt = Ht.item,
                  Qt = EV(Ht, jV);
                return (0, Ot.cloneElement)(Xt, uV(uV({}, Qt), {}, {
                  chartWidth: qt,
                  chartHeight: Dt,
                  margin: mt,
                  onBBoxUpdate: jt.handleLegendBBoxUpdate
                }))
              })), KV(jt, "renderTooltip", (function() {
                var tt, et = jt.props,
                  Vt = et.children,
                  qt = et.accessibilityLayer,
                  Dt = (0, ht.e)(Vt, Jt.b);
                if (!Dt) return null;
                var mt = jt.state,
                  dt = mt.isTooltipActive,
                  Ht = mt.activeCoordinate,
                  Xt = mt.activePayload,
                  Qt = mt.activeLabel,
                  lt = mt.offset,
                  Et = null !== (tt = Dt.props.active) && void 0 !== tt ? tt : dt;
                return (0, Ot.cloneElement)(Dt, {
                  viewBox: uV(uV({}, lt), {}, {
                    x: lt.left,
                    y: lt.top
                  }),
                  active: Et,
                  label: Qt,
                  payload: Et ? Xt : [],
                  coordinate: Ht,
                  accessibilityLayer: qt
                })
              })), KV(jt, "renderBrush", (function(tt) {
                var et = jt.props,
                  Vt = et.margin,
                  qt = et.data,
                  Dt = jt.state,
                  mt = Dt.offset,
                  dt = Dt.dataStartIndex,
                  Ht = Dt.dataEndIndex,
                  Xt = Dt.updateId;
                return (0, Ot.cloneElement)(tt, {
                  key: tt.key || "_recharts-brush",
                  onChange: (0, St.g)(jt.handleBrushChange, tt.props.onChange),
                  data: qt,
                  x: (0, ct.A)(tt.props.x) ? tt.props.x : mt.left,
                  y: (0, ct.A)(tt.props.y) ? tt.props.y : mt.top + mt.height + mt.brushBottom - (Vt.bottom || 0),
                  width: (0, ct.A)(tt.props.width) ? tt.props.width : mt.width,
                  startIndex: dt,
                  endIndex: Ht,
                  updateId: "brush-".concat(Xt)
                })
              })), KV(jt, "renderReferenceElement", (function(tt, et, Vt) {
                if (!tt) return null;
                var qt = jt.clipPathId,
                  Dt = jt.state,
                  mt = Dt.xAxisMap,
                  dt = Dt.yAxisMap,
                  Ht = Dt.offset,
                  Xt = tt.type.defaultProps || {},
                  Qt = tt.props,
                  lt = Qt.xAxisId,
                  Et = void 0 === lt ? Xt.xAxisId : lt,
                  ft = Qt.yAxisId,
                  wt = void 0 === ft ? Xt.yAxisId : ft;
                return (0, Ot.cloneElement)(tt, {
                  key: tt.key || "".concat(et, "-").concat(Vt),
                  xAxis: mt[Et],
                  yAxis: dt[wt],
                  viewBox: {
                    x: Ht.left,
                    y: Ht.top,
                    width: Ht.width,
                    height: Ht.height
                  },
                  clipPathId: qt
                })
              })), KV(jt, "renderActivePoints", (function(tt) {
                var et = tt.item,
                  Ot = tt.activePoint,
                  qt = tt.basePoint,
                  Dt = tt.childIndex,
                  mt = tt.isRange,
                  dt = [],
                  jt = et.props.key,
                  Ht = void 0 !== et.item.type.defaultProps ? uV(uV({}, et.item.type.defaultProps), et.item.props) : et.item.props,
                  Xt = Ht.activeDot,
                  Qt = uV(uV({
                    index: Dt,
                    dataKey: Ht.dataKey,
                    cx: Ot.x,
                    cy: Ot.y,
                    r: 4,
                    fill: (0, St.N)(et.item),
                    strokeWidth: 2,
                    stroke: "#fff",
                    payload: Ot.payload,
                    value: Ot.value
                  }, (0, ht.b)(Xt, !1)), (0, Fe.i)(Xt));
                return dt.push(Vt.renderActiveDot(Xt, Qt, "".concat(jt, "-activePoint-").concat(Dt))), qt ? dt.push(Vt.renderActiveDot(Xt, uV(uV({}, Qt), {}, {
                  cx: qt.x,
                  cy: qt.y
                }), "".concat(jt, "-basePoint-").concat(Dt))) : mt && dt.push(null), dt
              })), KV(jt, "renderGraphicChild", (function(tt, et, Vt) {
                var qt = jt.filterFormatItem(tt, et, Vt);
                if (!qt) return null;
                var mt = jt.getTooltipEventType(),
                  dt = jt.state,
                  Ht = dt.isTooltipActive,
                  Xt = dt.tooltipAxis,
                  Qt = dt.activeTooltipIndex,
                  lt = dt.activeLabel,
                  Et = jt.props.children,
                  ft = (0, ht.e)(Et, Jt.b),
                  wt = qt.props,
                  yt = wt.points,
                  Nt = wt.isRange,
                  Mt = wt.baseLine,
                  bt = void 0 !== qt.item.type.defaultProps ? uV(uV({}, qt.item.type.defaultProps), qt.item.props) : qt.item.props,
                  Ct = bt.activeDot,
                  ut = bt.hide,
                  Kt = bt.activeBar,
                  vt = bt.activeShape,
                  Wt = Boolean(!ut && Ht && ft && (Ct || Kt || vt)),
                  Rt = {};
                "axis" !== mt && ft && "click" === ft.props.trigger ? Rt = {
                  onClick: (0, St.g)(jt.handleItemMouseEnter, tt.props.onClick)
                } : "axis" !== mt && (Rt = {
                  onMouseLeave: (0, St.g)(jt.handleItemMouseLeave, tt.props.onMouseLeave),
                  onMouseEnter: (0, St.g)(jt.handleItemMouseEnter, tt.props.onMouseEnter)
                });
                var It = (0, Ot.cloneElement)(tt, uV(uV({}, qt.props), Rt));
                if (Wt) {
                  if (!(Qt >= 0)) {
                    var Pt, Zt = (null !== (Pt = jt.getItemByXY(jt.state.activeCoordinate)) && void 0 !== Pt ? Pt : {
                        graphicalItem: It
                      }).graphicalItem,
                      Lt = Zt.item,
                      Ft = void 0 === Lt ? tt : Lt,
                      kt = Zt.childIndex,
                      Gt = uV(uV(uV({}, qt.props), Rt), {}, {
                        activeIndex: kt
                      });
                    return [(0, Ot.cloneElement)(Ft, Gt), null, null]
                  }
                  var zt, ot;
                  if (Xt.dataKey && !Xt.allowDuplicatedCategory) {
                    var rt = "function" === typeof Xt.dataKey ? function(tt) {
                      return "function" === typeof Xt.dataKey ? Xt.dataKey(tt.payload) : null
                    } : "payload.".concat(Xt.dataKey.toString());
                    zt = (0, ct.e)(yt, rt, lt), ot = Nt && Mt && (0, ct.e)(Mt, rt, lt)
                  } else zt = null === yt || void 0 === yt ? void 0 : yt[Qt], ot = Nt && Mt && Mt[Qt];
                  if (vt || Kt) {
                    var Ut = void 0 !== tt.props.activeIndex ? tt.props.activeIndex : Qt;
                    return [(0, Ot.cloneElement)(tt, uV(uV(uV({}, qt.props), Rt), {}, {
                      activeIndex: Ut
                    })), null, null]
                  }
                  if (!Dt()(zt)) return [It].concat(MV(jt.renderActivePoints({
                    item: qt,
                    activePoint: zt,
                    basePoint: ot,
                    childIndex: Qt,
                    isRange: Nt
                  })))
                }
                return Nt ? [It, null, null] : [It, null]
              })), KV(jt, "renderCustomized", (function(tt, et, Vt) {
                return (0, Ot.cloneElement)(tt, uV(uV({
                  key: "recharts-customized-".concat(Vt)
                }, jt.props), jt.state))
              })), KV(jt, "renderMap", {
                CartesianGrid: {
                  handler: cV,
                  once: !0
                },
                ReferenceArea: {
                  handler: jt.renderReferenceElement
                },
                ReferenceLine: {
                  handler: cV
                },
                ReferenceDot: {
                  handler: jt.renderReferenceElement
                },
                XAxis: {
                  handler: cV
                },
                YAxis: {
                  handler: cV
                },
                Brush: {
                  handler: jt.renderBrush,
                  once: !0
                },
                Bar: {
                  handler: jt.renderGraphicChild
                },
                Line: {
                  handler: jt.renderGraphicChild
                },
                Area: {
                  handler: jt.renderGraphicChild
                },
                Radar: {
                  handler: jt.renderGraphicChild
                },
                RadialBar: {
                  handler: jt.renderGraphicChild
                },
                Scatter: {
                  handler: jt.renderGraphicChild
                },
                Pie: {
                  handler: jt.renderGraphicChild
                },
                Funnel: {
                  handler: jt.renderGraphicChild
                },
                Tooltip: {
                  handler: jt.renderCursor,
                  once: !0
                },
                PolarGrid: {
                  handler: jt.renderPolarGrid,
                  once: !0
                },
                PolarAngleAxis: {
                  handler: jt.renderPolarAxis
                },
                PolarRadiusAxis: {
                  handler: jt.renderPolarAxis
                },
                Customized: {
                  handler: jt.renderCustomized
                }
              }), jt.clipPathId = "".concat(null !== (qt = tt.id) && void 0 !== qt ? qt : (0, ct.L)("recharts"), "-clip"), jt.throttleTriggeredAfterMouseMove = wt()(jt.triggeredAfterMouseMove, null !== (mt = tt.throttleDelay) && void 0 !== mt ? mt : 1e3 / 60), jt.state = {}, jt
            }
            return function(tt, et) {
              if ("function" !== typeof et && null !== et) throw new TypeError("Super expression must either be null or a function");
              tt.prototype = Object.create(et && et.prototype, {
                constructor: {
                  value: tt,
                  writable: !0,
                  configurable: !0
                }
              }), Object.defineProperty(tt, "prototype", {
                writable: !1
              }), et && aV(tt, et)
            }(Vt, tt), qt = Vt, jt = [{
              key: "componentDidMount",
              value: function() {
                var tt, et;
                this.addListener(), this.accessibilityManager.setDetails({
                  container: this.container,
                  offset: {
                    left: null !== (tt = this.props.margin.left) && void 0 !== tt ? tt : 0,
                    top: null !== (et = this.props.margin.top) && void 0 !== et ? et : 0
                  },
                  coordinateList: this.state.tooltipTicks,
                  mouseHandlerCallback: this.triggeredAfterMouseMove,
                  layout: this.props.layout
                }), this.displayDefaultTooltip()
              }
            }, {
              key: "displayDefaultTooltip",
              value: function() {
                var tt = this.props,
                  et = tt.children,
                  Vt = tt.data,
                  Ot = tt.height,
                  qt = tt.layout,
                  Dt = (0, ht.e)(et, Jt.b);
                if (Dt) {
                  var mt = Dt.props.defaultIndex;
                  if (!("number" !== typeof mt || mt < 0 || mt > this.state.tooltipTicks.length - 1)) {
                    var dt = this.state.tooltipTicks[mt] && this.state.tooltipTicks[mt].value,
                      jt = PV(this.state, Vt, mt, dt),
                      Ht = this.state.tooltipTicks[mt].coordinate,
                      Xt = (this.state.offset.top + Ot) / 2,
                      Qt = "horizontal" === qt ? {
                        x: Ht,
                        y: Xt
                      } : {
                        y: Ht,
                        x: Xt
                      },
                      lt = this.state.formattedGraphicalItems.find((function(tt) {
                        return "Scatter" === tt.item.type.name
                      }));
                    lt && (Qt = uV(uV({}, Qt), lt.props.points[mt].tooltipPosition), jt = lt.props.points[mt].tooltipPayload);
                    var Et = {
                      activeTooltipIndex: mt,
                      isTooltipActive: !0,
                      activeLabel: dt,
                      activePayload: jt,
                      activeCoordinate: Qt
                    };
                    this.setState(Et), this.renderCursor(Dt), this.accessibilityManager.setIndex(mt)
                  }
                }
              }
            }, {
              key: "getSnapshotBeforeUpdate",
              value: function(tt, et) {
                return this.props.accessibilityLayer ? (this.state.tooltipTicks !== et.tooltipTicks && this.accessibilityManager.setDetails({
                  coordinateList: this.state.tooltipTicks
                }), this.props.layout !== tt.layout && this.accessibilityManager.setDetails({
                  layout: this.props.layout
                }), this.props.margin !== tt.margin && this.accessibilityManager.setDetails({
                  offset: {
                    left: null !== (Vt = this.props.margin.left) && void 0 !== Vt ? Vt : 0,
                    top: null !== (Ot = this.props.margin.top) && void 0 !== Ot ? Ot : 0
                  }
                }), null) : null;
                var Vt, Ot
              }
            }, {
              key: "componentDidUpdate",
              value: function(tt) {
                (0, ht.o)([(0, ht.e)(tt.children, Jt.b)], [(0, ht.e)(this.props.children, Jt.b)]) || this.displayDefaultTooltip()
              }
            }, {
              key: "componentWillUnmount",
              value: function() {
                this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel()
              }
            }, {
              key: "getTooltipEventType",
              value: function() {
                var tt = (0, ht.e)(this.props.children, Jt.b);
                if (tt && "boolean" === typeof tt.props.shared) {
                  var et = tt.props.shared ? "axis" : "item";
                  return Ht.indexOf(et) >= 0 ? et : mt
                }
                return mt
              }
            }, {
              key: "getMouseInfo",
              value: function(tt) {
                if (!this.container) return null;
                var et = this.container,
                  Vt = et.getBoundingClientRect(),
                  Ot = (0, Tt.e)(Vt),
                  qt = {
                    chartX: Math.round(tt.pageX - Ot.left),
                    chartY: Math.round(tt.pageY - Ot.top)
                  },
                  Dt = Vt.width / et.offsetWidth || 1,
                  mt = this.inRange(qt.chartX, qt.chartY, Dt);
                if (!mt) return null;
                var dt = this.state,
                  jt = dt.xAxisMap,
                  Ht = dt.yAxisMap,
                  Xt = this.getTooltipEventType(),
                  Qt = ZV(this.state, this.props.data, this.props.layout, mt);
                if ("axis" !== Xt && jt && Ht) {
                  var lt = (0, ct.i)(jt).scale,
                    Et = (0, ct.i)(Ht).scale,
                    ft = lt && lt.invert ? lt.invert(qt.chartX) : null,
                    wt = Et && Et.invert ? Et.invert(qt.chartY) : null;
                  return uV(uV({}, qt), {}, {
                    xValue: ft,
                    yValue: wt
                  }, Qt)
                }
                return Qt ? uV(uV({}, qt), Qt) : null
              }
            }, {
              key: "inRange",
              value: function(tt, et) {
                var Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                  Ot = this.props.layout,
                  qt = tt / Vt,
                  Dt = et / Vt;
                if ("horizontal" === Ot || "vertical" === Ot) {
                  var mt = this.state.offset;
                  return qt >= mt.left && qt <= mt.left + mt.width && Dt >= mt.top && Dt <= mt.top + mt.height ? {
                    x: qt,
                    y: Dt
                  } : null
                }
                var dt = this.state,
                  jt = dt.angleAxisMap,
                  Ht = dt.radiusAxisMap;
                if (jt && Ht) {
                  var Xt = (0, ct.i)(jt);
                  return (0, Re.e)({
                    x: qt,
                    y: Dt
                  }, Xt)
                }
                return null
              }
            }, {
              key: "parseEventsOfWrapper",
              value: function() {
                var tt = this.props.children,
                  et = this.getTooltipEventType(),
                  Vt = (0, ht.e)(tt, Jt.b),
                  Ot = {};
                return Vt && "axis" === et && (Ot = "click" === Vt.props.trigger ? {
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
                }), uV(uV({}, (0, Fe.i)(this.props, this.handleOuterEvent)), Ot)
              }
            }, {
              key: "addListener",
              value: function() {
                Ze.on(Le, this.handleReceiveSyncEvent)
              }
            }, {
              key: "removeListener",
              value: function() {
                Ze.removeListener(Le, this.handleReceiveSyncEvent)
              }
            }, {
              key: "filterFormatItem",
              value: function(tt, et, Vt) {
                for (var Ot = this.state.formattedGraphicalItems, qt = 0, Dt = Ot.length; qt < Dt; qt++) {
                  var mt = Ot[qt];
                  if (mt.item === tt || mt.props.key === tt.key || et === (0, ht.g)(mt.item.type) && Vt === mt.childIndex) return mt
                }
                return null
              }
            }, {
              key: "renderClipPath",
              value: function() {
                var tt = this.clipPathId,
                  et = this.state.offset,
                  Vt = et.left,
                  qt = et.top,
                  Dt = et.height,
                  mt = et.width;
                return Ot.createElement("defs", null, Ot.createElement("clipPath", {
                  id: tt
                }, Ot.createElement("rect", {
                  x: Vt,
                  y: qt,
                  height: Dt,
                  width: mt
                })))
              }
            }, {
              key: "getXScales",
              value: function() {
                var tt = this.state.xAxisMap;
                return tt ? Object.entries(tt).reduce((function(tt, et) {
                  var Vt = lV(et, 2),
                    Ot = Vt[0],
                    qt = Vt[1];
                  return uV(uV({}, tt), {}, KV({}, Ot, qt.scale))
                }), {}) : null
              }
            }, {
              key: "getYScales",
              value: function() {
                var tt = this.state.yAxisMap;
                return tt ? Object.entries(tt).reduce((function(tt, et) {
                  var Vt = lV(et, 2),
                    Ot = Vt[0],
                    qt = Vt[1];
                  return uV(uV({}, tt), {}, KV({}, Ot, qt.scale))
                }), {}) : null
              }
            }, {
              key: "getXScaleByAxisId",
              value: function(tt) {
                var et;
                return null === (et = this.state.xAxisMap) || void 0 === et || null === (et = et[tt]) || void 0 === et ? void 0 : et.scale
              }
            }, {
              key: "getYScaleByAxisId",
              value: function(tt) {
                var et;
                return null === (et = this.state.yAxisMap) || void 0 === et || null === (et = et[tt]) || void 0 === et ? void 0 : et.scale
              }
            }, {
              key: "getItemByXY",
              value: function(tt) {
                var et = this.state,
                  Vt = et.formattedGraphicalItems,
                  Ot = et.activeItem;
                if (Vt && Vt.length)
                  for (var qt = 0, Dt = Vt.length; qt < Dt; qt++) {
                    var mt = Vt[qt],
                      dt = mt.props,
                      jt = mt.item,
                      Ht = void 0 !== jt.type.defaultProps ? uV(uV({}, jt.type.defaultProps), jt.props) : jt.props,
                      Xt = (0, ht.g)(jt.type);
                    if ("Bar" === Xt) {
                      var Qt = (dt.data || []).find((function(et) {
                        return (0, Kt.f)(tt, et)
                      }));
                      if (Qt) return {
                        graphicalItem: mt,
                        payload: Qt
                      }
                    } else if ("RadialBar" === Xt) {
                      var lt = (dt.data || []).find((function(et) {
                        return (0, Re.e)(tt, et)
                      }));
                      if (lt) return {
                        graphicalItem: mt,
                        payload: lt
                      }
                    } else if ((0, Ue.j)(mt, Ot) || (0, Ue.m)(mt, Ot) || (0, Ue.n)(mt, Ot)) {
                      var Et = (0, Ue.f)({
                          graphicalItem: mt,
                          activeTooltipItem: Ot,
                          itemData: Ht.data
                        }),
                        ft = void 0 === Ht.activeIndex ? Et : Ht.activeIndex;
                      return {
                        graphicalItem: uV(uV({}, mt), {}, {
                          childIndex: ft
                        }),
                        payload: (0, Ue.n)(mt, Ot) ? Ht.data[Et] : mt.props.data[Et]
                      }
                    }
                  }
                return null
              }
            }, {
              key: "render",
              value: function() {
                var tt = this;
                if (!(0, ht.x)(this)) return null;
                var et, Vt, qt = this.props,
                  Dt = qt.children,
                  mt = qt.className,
                  dt = qt.width,
                  jt = qt.height,
                  Ht = qt.style,
                  Xt = qt.compact,
                  Qt = qt.title,
                  lt = qt.desc,
                  Et = EV(qt, HV),
                  ft = (0, ht.b)(Et, !1);
                if (Xt) return Ot.createElement(dV.d, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, Ot.createElement(Mt.c, QV({}, ft, {
                  width: dt,
                  height: jt,
                  title: Qt,
                  desc: lt
                }), this.renderClipPath(), (0, ht.t)(Dt, this.renderMap)));
                this.props.accessibilityLayer && (ft.tabIndex = null !== (et = this.props.tabIndex) && void 0 !== et ? et : 0, ft.role = null !== (Vt = this.props.role) && void 0 !== Vt ? Vt : "application", ft.onKeyDown = function(et) {
                  tt.accessibilityManager.keyboardEvent(et)
                }, ft.onFocus = function() {
                  tt.accessibilityManager.focus()
                });
                var wt = this.parseEventsOfWrapper();
                return Ot.createElement(dV.d, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, Ot.createElement("div", QV({
                  className: (0, yt.b)("recharts-wrapper", mt),
                  style: uV({
                    position: "relative",
                    cursor: "default",
                    width: dt,
                    height: jt
                  }, Ht)
                }, wt, {
                  ref: function(et) {
                    tt.container = et
                  }
                }), Ot.createElement(Mt.c, QV({}, ft, {
                  width: dt,
                  height: jt,
                  title: Qt,
                  desc: lt,
                  style: WV
                }), this.renderClipPath(), (0, ht.t)(Dt, this.renderMap)), this.renderLegend(), this.renderTooltip()))
              }
            }], jt && fV(qt.prototype, jt), Xt && fV(qt, Xt), Object.defineProperty(qt, "prototype", {
              writable: !1
            }), qt;
            var qt, jt, Xt
          }(Ot.Component);
        KV(It, "displayName", et), KV(It, "defaultProps", uV({
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
        }, vt)), KV(It, "getDerivedStateFromProps", (function(tt, et) {
          var Vt = tt.dataKey,
            Ot = tt.data,
            qt = tt.children,
            mt = tt.width,
            dt = tt.height,
            jt = tt.layout,
            Ht = tt.stackOffset,
            Xt = tt.margin,
            Qt = et.dataStartIndex,
            lt = et.dataEndIndex;
          if (void 0 === et.updateId) {
            var Et = kV(tt);
            return uV(uV(uV({}, Et), {}, {
              updateId: 0
            }, Rt(uV(uV({
              props: tt
            }, Et), {}, {
              updateId: 0
            }), et)), {}, {
              prevDataKey: Vt,
              prevData: Ot,
              prevWidth: mt,
              prevHeight: dt,
              prevLayout: jt,
              prevStackOffset: Ht,
              prevMargin: Xt,
              prevChildren: qt
            })
          }
          if (Vt !== et.prevDataKey || Ot !== et.prevData || mt !== et.prevWidth || dt !== et.prevHeight || jt !== et.prevLayout || Ht !== et.prevStackOffset || !(0, Ie.b)(Xt, et.prevMargin)) {
            var ft = kV(tt),
              wt = {
                chartX: et.chartX,
                chartY: et.chartY,
                isTooltipActive: et.isTooltipActive
              },
              yt = uV(uV({}, ZV(et, Ot, jt)), {}, {
                updateId: et.updateId + 1
              }),
              Nt = uV(uV(uV({}, ft), wt), yt);
            return uV(uV(uV({}, Nt), Rt(uV({
              props: tt
            }, Nt), et)), {}, {
              prevDataKey: Vt,
              prevData: Ot,
              prevWidth: mt,
              prevHeight: dt,
              prevLayout: jt,
              prevStackOffset: Ht,
              prevMargin: Xt,
              prevChildren: qt
            })
          }
          if (!(0, ht.o)(qt, et.prevChildren)) {
            var Mt, bt, Jt, Ct, ut = (0, ht.e)(qt, xt),
              Kt = ut && null !== (Mt = null === (bt = ut.props) || void 0 === bt ? void 0 : bt.startIndex) && void 0 !== Mt ? Mt : Qt,
              vt = ut && null !== (Jt = null === (Ct = ut.props) || void 0 === Ct ? void 0 : Ct.endIndex) && void 0 !== Jt ? Jt : lt,
              Wt = Kt !== Qt || vt !== lt,
              St = !Dt()(Ot) && !Wt ? et.updateId : et.updateId + 1;
            return uV(uV({
              updateId: St
            }, Rt(uV(uV({
              props: tt
            }, et), {}, {
              updateId: St,
              dataStartIndex: Kt,
              dataEndIndex: vt
            }), et)), {}, {
              prevChildren: qt,
              dataStartIndex: Kt,
              dataEndIndex: vt
            })
          }
          return null
        })), KV(It, "renderActiveDot", (function(tt, et, Vt) {
          var qt;
          return qt = (0, Ot.isValidElement)(tt) ? (0, Ot.cloneElement)(tt, et) : dt()(tt) ? tt(et) : Ot.createElement(ut.d, et), Ot.createElement(bt.e, {
            className: "recharts-active-dot",
            key: Vt
          }, qt)
        }));
        var Pt = (0, Ot.forwardRef)((function(tt, et) {
          return Ot.createElement(It, QV({}, tt, {
            ref: et
          }))
        }));
        return Pt.displayName = It.displayName, Pt
      }
  },
  6457: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ot
    });
    var Ot = function(tt) {
      return null
    };
    Ot.displayName = "Cell"
  },
  6406: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Rt
    });
    var Ot = Vt(63),
      qt = Vt(5603),
      Dt = Vt.n(qt),
      mt = Vt(5436),
      dt = Vt.n(mt),
      jt = Vt(5280),
      Ht = Vt.n(jt),
      Xt = Vt(5263),
      Qt = Vt(6304),
      lt = Vt(5614),
      Et = Vt(5348),
      ft = Vt(6411);

    function wt(tt) {
      return wt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, wt(tt)
    }
    var yt = ["offset"];

    function Nt(tt) {
      return function(tt) {
        if (Array.isArray(tt)) return Mt(tt)
      }(tt) || function(tt) {
        if ("undefined" !== typeof Symbol && null != tt[Symbol.iterator] || null != tt["@@iterator"]) return Array.from(tt)
      }(tt) || function(tt, et) {
        if (!tt) return;
        if ("string" === typeof tt) return Mt(tt, et);
        var Vt = Object.prototype.toString.call(tt).slice(8, -1);
        "Object" === Vt && tt.constructor && (Vt = tt.constructor.name);
        if ("Map" === Vt || "Set" === Vt) return Array.from(tt);
        if ("Arguments" === Vt || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Vt)) return Mt(tt, et)
      }(tt) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Mt(tt, et) {
      (null == et || et > tt.length) && (et = tt.length);
      for (var Vt = 0, Ot = new Array(et); Vt < et; Vt++) Ot[Vt] = tt[Vt];
      return Ot
    }

    function bt(tt, et) {
      if (null == tt) return {};
      var Vt, Ot, qt = function(tt, et) {
        if (null == tt) return {};
        var Vt = {};
        for (var Ot in tt)
          if (Object.prototype.hasOwnProperty.call(tt, Ot)) {
            if (et.indexOf(Ot) >= 0) continue;
            Vt[Ot] = tt[Ot]
          } return Vt
      }(tt, et);
      if (Object.getOwnPropertySymbols) {
        var Dt = Object.getOwnPropertySymbols(tt);
        for (Ot = 0; Ot < Dt.length; Ot++) Vt = Dt[Ot], et.indexOf(Vt) >= 0 || Object.prototype.propertyIsEnumerable.call(tt, Vt) && (qt[Vt] = tt[Vt])
      }
      return qt
    }

    function Jt(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function Ct(tt) {
      for (var et = 1; et < arguments.length; et++) {
        var Vt = null != arguments[et] ? arguments[et] : {};
        et % 2 ? Jt(Object(Vt), !0).forEach((function(et) {
          ut(tt, et, Vt[et])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : Jt(Object(Vt)).forEach((function(et) {
          Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
        }))
      }
      return tt
    }

    function ut(tt, et, Vt) {
      return (et = function(tt) {
        var et = function(tt, et) {
          if ("object" != wt(tt) || !tt) return tt;
          var Vt = tt[Symbol.toPrimitive];
          if (void 0 !== Vt) {
            var Ot = Vt.call(tt, et || "default");
            if ("object" != wt(Ot)) return Ot;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === et ? String : Number)(tt)
        }(tt, "string");
        return "symbol" == wt(et) ? et : et + ""
      }(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }

    function Kt() {
      return Kt = Object.assign ? Object.assign.bind() : function(tt) {
        for (var et = 1; et < arguments.length; et++) {
          var Vt = arguments[et];
          for (var Ot in Vt) Object.prototype.hasOwnProperty.call(Vt, Ot) && (tt[Ot] = Vt[Ot])
        }
        return tt
      }, Kt.apply(this, arguments)
    }
    var ht = function(tt) {
        var et = tt.value,
          Vt = tt.formatter,
          Ot = Dt()(tt.children) ? et : tt.children;
        return dt()(Vt) ? Vt(Ot) : Ot
      },
      vt = function(tt, et, Vt) {
        var qt, mt, dt = tt.position,
          jt = tt.viewBox,
          Ht = tt.offset,
          Qt = tt.className,
          lt = jt,
          wt = lt.cx,
          yt = lt.cy,
          Nt = lt.innerRadius,
          Mt = lt.outerRadius,
          bt = lt.startAngle,
          Jt = lt.endAngle,
          Ct = lt.clockWise,
          ut = (Nt + Mt) / 2,
          ht = function(tt, et) {
            return (0, Et.H)(et - tt) * Math.min(Math.abs(et - tt), 360)
          }(bt, Jt),
          vt = ht >= 0 ? 1 : -1;
        "insideStart" === dt ? (qt = bt + vt * Ht, mt = Ct) : "insideEnd" === dt ? (qt = Jt - vt * Ht, mt = !Ct) : "end" === dt && (qt = Jt + vt * Ht, mt = Ct), mt = ht <= 0 ? mt : !mt;
        var Wt = (0, ft.f)(wt, yt, ut, qt),
          St = (0, ft.f)(wt, yt, ut, qt + 359 * (mt ? 1 : -1)),
          ct = "M".concat(Wt.x, ",").concat(Wt.y, "\n    A").concat(ut, ",").concat(ut, ",0,1,").concat(mt ? 0 : 1, ",\n    ").concat(St.x, ",").concat(St.y),
          Rt = Dt()(tt.id) ? (0, Et.L)("recharts-radial-line-") : tt.id;
        return Ot.createElement("text", Kt({}, Vt, {
          dominantBaseline: "central",
          className: (0, Xt.b)("recharts-radial-bar-label", Qt)
        }), Ot.createElement("defs", null, Ot.createElement("path", {
          id: Rt,
          d: ct
        })), Ot.createElement("textPath", {
          xlinkHref: "#".concat(Rt)
        }, et))
      },
      Wt = function(tt) {
        var et = tt.viewBox,
          Vt = tt.offset,
          Ot = tt.position,
          qt = et,
          Dt = qt.cx,
          mt = qt.cy,
          dt = qt.innerRadius,
          jt = qt.outerRadius,
          Ht = (qt.startAngle + qt.endAngle) / 2;
        if ("outside" === Ot) {
          var Xt = (0, ft.f)(Dt, mt, jt + Vt, Ht),
            Qt = Xt.x;
          return {
            x: Qt,
            y: Xt.y,
            textAnchor: Qt >= Dt ? "start" : "end",
            verticalAnchor: "middle"
          }
        }
        if ("center" === Ot) return {
          x: Dt,
          y: mt,
          textAnchor: "middle",
          verticalAnchor: "middle"
        };
        if ("centerTop" === Ot) return {
          x: Dt,
          y: mt,
          textAnchor: "middle",
          verticalAnchor: "start"
        };
        if ("centerBottom" === Ot) return {
          x: Dt,
          y: mt,
          textAnchor: "middle",
          verticalAnchor: "end"
        };
        var lt = (dt + jt) / 2,
          Et = (0, ft.f)(Dt, mt, lt, Ht);
        return {
          x: Et.x,
          y: Et.y,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }
      },
      St = function(tt) {
        var et = tt.viewBox,
          Vt = tt.parentViewBox,
          Ot = tt.offset,
          qt = tt.position,
          Dt = et,
          mt = Dt.x,
          dt = Dt.y,
          jt = Dt.width,
          Xt = Dt.height,
          Qt = Xt >= 0 ? 1 : -1,
          lt = Qt * Ot,
          ft = Qt > 0 ? "end" : "start",
          wt = Qt > 0 ? "start" : "end",
          yt = jt >= 0 ? 1 : -1,
          Nt = yt * Ot,
          Mt = yt > 0 ? "end" : "start",
          bt = yt > 0 ? "start" : "end";
        if ("top" === qt) return Ct(Ct({}, {
          x: mt + jt / 2,
          y: dt - Qt * Ot,
          textAnchor: "middle",
          verticalAnchor: ft
        }), Vt ? {
          height: Math.max(dt - Vt.y, 0),
          width: jt
        } : {});
        if ("bottom" === qt) return Ct(Ct({}, {
          x: mt + jt / 2,
          y: dt + Xt + lt,
          textAnchor: "middle",
          verticalAnchor: wt
        }), Vt ? {
          height: Math.max(Vt.y + Vt.height - (dt + Xt), 0),
          width: jt
        } : {});
        if ("left" === qt) {
          var Jt = {
            x: mt - Nt,
            y: dt + Xt / 2,
            textAnchor: Mt,
            verticalAnchor: "middle"
          };
          return Ct(Ct({}, Jt), Vt ? {
            width: Math.max(Jt.x - Vt.x, 0),
            height: Xt
          } : {})
        }
        if ("right" === qt) {
          var ut = {
            x: mt + jt + Nt,
            y: dt + Xt / 2,
            textAnchor: bt,
            verticalAnchor: "middle"
          };
          return Ct(Ct({}, ut), Vt ? {
            width: Math.max(Vt.x + Vt.width - ut.x, 0),
            height: Xt
          } : {})
        }
        var Kt = Vt ? {
          width: jt,
          height: Xt
        } : {};
        return "insideLeft" === qt ? Ct({
          x: mt + Nt,
          y: dt + Xt / 2,
          textAnchor: bt,
          verticalAnchor: "middle"
        }, Kt) : "insideRight" === qt ? Ct({
          x: mt + jt - Nt,
          y: dt + Xt / 2,
          textAnchor: Mt,
          verticalAnchor: "middle"
        }, Kt) : "insideTop" === qt ? Ct({
          x: mt + jt / 2,
          y: dt + lt,
          textAnchor: "middle",
          verticalAnchor: wt
        }, Kt) : "insideBottom" === qt ? Ct({
          x: mt + jt / 2,
          y: dt + Xt - lt,
          textAnchor: "middle",
          verticalAnchor: ft
        }, Kt) : "insideTopLeft" === qt ? Ct({
          x: mt + Nt,
          y: dt + lt,
          textAnchor: bt,
          verticalAnchor: wt
        }, Kt) : "insideTopRight" === qt ? Ct({
          x: mt + jt - Nt,
          y: dt + lt,
          textAnchor: Mt,
          verticalAnchor: wt
        }, Kt) : "insideBottomLeft" === qt ? Ct({
          x: mt + Nt,
          y: dt + Xt - lt,
          textAnchor: bt,
          verticalAnchor: ft
        }, Kt) : "insideBottomRight" === qt ? Ct({
          x: mt + jt - Nt,
          y: dt + Xt - lt,
          textAnchor: Mt,
          verticalAnchor: ft
        }, Kt) : Ht()(qt) && ((0, Et.A)(qt.x) || (0, Et.E)(qt.x)) && ((0, Et.A)(qt.y) || (0, Et.E)(qt.y)) ? Ct({
          x: mt + (0, Et.m)(qt.x, jt),
          y: dt + (0, Et.m)(qt.y, Xt),
          textAnchor: "end",
          verticalAnchor: "end"
        }, Kt) : Ct({
          x: mt + jt / 2,
          y: dt + Xt / 2,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }, Kt)
      },
      ct = function(tt) {
        return "cx" in tt && (0, Et.A)(tt.cx)
      };

    function Rt(tt) {
      var et, Vt = tt.offset,
        qt = Ct({
          offset: void 0 === Vt ? 5 : Vt
        }, bt(tt, yt)),
        mt = qt.viewBox,
        jt = qt.position,
        Ht = qt.value,
        Et = qt.children,
        ft = qt.content,
        wt = qt.className,
        Nt = void 0 === wt ? "" : wt,
        Mt = qt.textBreakAll;
      if (!mt || Dt()(Ht) && Dt()(Et) && !(0, Ot.isValidElement)(ft) && !dt()(ft)) return null;
      if ((0, Ot.isValidElement)(ft)) return (0, Ot.cloneElement)(ft, qt);
      if (dt()(ft)) {
        if (et = (0, Ot.createElement)(ft, qt), (0, Ot.isValidElement)(et)) return et
      } else et = ht(qt);
      var Jt = ct(mt),
        ut = (0, lt.b)(qt, !0);
      if (Jt && ("insideStart" === jt || "insideEnd" === jt || "end" === jt)) return vt(qt, et, ut);
      var Rt = Jt ? Wt(qt) : St(qt);
      return Ot.createElement(Qt.b, Kt({
        className: (0, Xt.b)("recharts-label", Nt)
      }, ut, Rt, {
        breakAll: Mt
      }), et)
    }
    Rt.displayName = "Label";
    var It = function(tt) {
      var et = tt.cx,
        Vt = tt.cy,
        Ot = tt.angle,
        qt = tt.startAngle,
        Dt = tt.endAngle,
        mt = tt.r,
        dt = tt.radius,
        jt = tt.innerRadius,
        Ht = tt.outerRadius,
        Xt = tt.x,
        Qt = tt.y,
        lt = tt.top,
        ft = tt.left,
        wt = tt.width,
        yt = tt.height,
        Nt = tt.clockWise,
        Mt = tt.labelViewBox;
      if (Mt) return Mt;
      if ((0, Et.A)(wt) && (0, Et.A)(yt)) {
        if ((0, Et.A)(Xt) && (0, Et.A)(Qt)) return {
          x: Xt,
          y: Qt,
          width: wt,
          height: yt
        };
        if ((0, Et.A)(lt) && (0, Et.A)(ft)) return {
          x: lt,
          y: ft,
          width: wt,
          height: yt
        }
      }
      return (0, Et.A)(Xt) && (0, Et.A)(Qt) ? {
        x: Xt,
        y: Qt,
        width: 0,
        height: 0
      } : (0, Et.A)(et) && (0, Et.A)(Vt) ? {
        cx: et,
        cy: Vt,
        startAngle: qt || Ot || 0,
        endAngle: Dt || Ot || 0,
        innerRadius: jt || 0,
        outerRadius: Ht || dt || mt || 0,
        clockWise: Nt
      } : tt.viewBox ? tt.viewBox : {}
    };
    Rt.parseViewBox = It, Rt.renderCallByParent = function(tt, et) {
      var Vt = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!tt || !tt.children && Vt && !tt.label) return null;
      var qt = tt.children,
        Dt = It(tt),
        mt = (0, lt.d)(qt, Rt).map((function(tt, Vt) {
          return (0, Ot.cloneElement)(tt, {
            viewBox: et || Dt,
            key: "label-".concat(Vt)
          })
        }));
      if (!Vt) return mt;
      var jt = function(tt, et) {
        return tt ? !0 === tt ? Ot.createElement(Rt, {
          key: "label-implicit",
          viewBox: et
        }) : (0, Et.w)(tt) ? Ot.createElement(Rt, {
          key: "label-implicit",
          viewBox: et,
          value: tt
        }) : (0, Ot.isValidElement)(tt) ? tt.type === Rt ? (0, Ot.cloneElement)(tt, {
          key: "label-implicit",
          viewBox: et
        }) : Ot.createElement(Rt, {
          key: "label-implicit",
          content: tt,
          viewBox: et
        }) : dt()(tt) ? Ot.createElement(Rt, {
          key: "label-implicit",
          content: tt,
          viewBox: et
        }) : Ht()(tt) ? Ot.createElement(Rt, Kt({
          viewBox: et
        }, tt, {
          key: "label-implicit"
        })) : null : null
      }(tt.label, et || Dt);
      return [jt].concat(Nt(mt))
    }
  },
  6461: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => St
    });
    var Ot = Vt(63),
      qt = Vt(5603),
      Dt = Vt.n(qt),
      mt = Vt(5280),
      dt = Vt.n(mt),
      jt = Vt(5436),
      Ht = Vt.n(jt),
      Xt = Vt(6469),
      Qt = Vt.n(Xt),
      lt = Vt(6406),
      Et = Vt(6140),
      ft = Vt(5614),
      wt = Vt(6317);

    function yt(tt) {
      return yt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, yt(tt)
    }
    var Nt = ["valueAccessor"],
      Mt = ["data", "dataKey", "clockWise", "id", "textBreakAll"];

    function bt(tt) {
      return function(tt) {
        if (Array.isArray(tt)) return Jt(tt)
      }(tt) || function(tt) {
        if ("undefined" !== typeof Symbol && null != tt[Symbol.iterator] || null != tt["@@iterator"]) return Array.from(tt)
      }(tt) || function(tt, et) {
        if (!tt) return;
        if ("string" === typeof tt) return Jt(tt, et);
        var Vt = Object.prototype.toString.call(tt).slice(8, -1);
        "Object" === Vt && tt.constructor && (Vt = tt.constructor.name);
        if ("Map" === Vt || "Set" === Vt) return Array.from(tt);
        if ("Arguments" === Vt || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Vt)) return Jt(tt, et)
      }(tt) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Jt(tt, et) {
      (null == et || et > tt.length) && (et = tt.length);
      for (var Vt = 0, Ot = new Array(et); Vt < et; Vt++) Ot[Vt] = tt[Vt];
      return Ot
    }

    function Ct() {
      return Ct = Object.assign ? Object.assign.bind() : function(tt) {
        for (var et = 1; et < arguments.length; et++) {
          var Vt = arguments[et];
          for (var Ot in Vt) Object.prototype.hasOwnProperty.call(Vt, Ot) && (tt[Ot] = Vt[Ot])
        }
        return tt
      }, Ct.apply(this, arguments)
    }

    function ut(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function Kt(tt) {
      for (var et = 1; et < arguments.length; et++) {
        var Vt = null != arguments[et] ? arguments[et] : {};
        et % 2 ? ut(Object(Vt), !0).forEach((function(et) {
          ht(tt, et, Vt[et])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : ut(Object(Vt)).forEach((function(et) {
          Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
        }))
      }
      return tt
    }

    function ht(tt, et, Vt) {
      return (et = function(tt) {
        var et = function(tt, et) {
          if ("object" != yt(tt) || !tt) return tt;
          var Vt = tt[Symbol.toPrimitive];
          if (void 0 !== Vt) {
            var Ot = Vt.call(tt, et || "default");
            if ("object" != yt(Ot)) return Ot;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === et ? String : Number)(tt)
        }(tt, "string");
        return "symbol" == yt(et) ? et : et + ""
      }(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }

    function vt(tt, et) {
      if (null == tt) return {};
      var Vt, Ot, qt = function(tt, et) {
        if (null == tt) return {};
        var Vt = {};
        for (var Ot in tt)
          if (Object.prototype.hasOwnProperty.call(tt, Ot)) {
            if (et.indexOf(Ot) >= 0) continue;
            Vt[Ot] = tt[Ot]
          } return Vt
      }(tt, et);
      if (Object.getOwnPropertySymbols) {
        var Dt = Object.getOwnPropertySymbols(tt);
        for (Ot = 0; Ot < Dt.length; Ot++) Vt = Dt[Ot], et.indexOf(Vt) >= 0 || Object.prototype.propertyIsEnumerable.call(tt, Vt) && (qt[Vt] = tt[Vt])
      }
      return qt
    }
    var Wt = function(tt) {
      return Array.isArray(tt.value) ? Qt()(tt.value) : tt.value
    };

    function St(tt) {
      var et = tt.valueAccessor,
        Vt = void 0 === et ? Wt : et,
        qt = vt(tt, Nt),
        mt = qt.data,
        dt = qt.dataKey,
        jt = qt.clockWise,
        Ht = qt.id,
        Xt = qt.textBreakAll,
        Qt = vt(qt, Mt);
      return mt && mt.length ? Ot.createElement(Et.e, {
        className: "recharts-label-list"
      }, mt.map((function(tt, et) {
        var qt = Dt()(dt) ? Vt(tt, et) : (0, wt.Z)(tt && tt.payload, dt),
          mt = Dt()(Ht) ? {} : {
            id: "".concat(Ht, "-").concat(et)
          };
        return Ot.createElement(lt.e, Ct({}, (0, ft.b)(tt, !0), Qt, mt, {
          parentViewBox: tt.parentViewBox,
          value: qt,
          textBreakAll: Xt,
          viewBox: lt.e.parseViewBox(Dt()(jt) ? tt : Kt(Kt({}, tt), {}, {
            clockWise: jt
          })),
          key: "label-".concat(et),
          index: et
        }))
      }))) : null
    }
    St.displayName = "LabelList", St.renderCallByParent = function(tt, et) {
      var Vt = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!tt || !tt.children && Vt && !tt.label) return null;
      var qt = tt.children,
        Dt = (0, ft.d)(qt, St).map((function(tt, Vt) {
          return (0, Ot.cloneElement)(tt, {
            data: et,
            key: "labelList-".concat(Vt)
          })
        }));
      return Vt ? [function(tt, et) {
        return tt ? !0 === tt ? Ot.createElement(St, {
          key: "labelList-implicit",
          data: et
        }) : Ot.isValidElement(tt) || Ht()(tt) ? Ot.createElement(St, {
          key: "labelList-implicit",
          data: et,
          content: tt
        }) : dt()(tt) ? Ot.createElement(St, Ct({
          data: et
        }, tt, {
          key: "labelList-implicit"
        })) : null : null
      }(tt.label, et)].concat(bt(Dt)) : Dt
    }
  },
  6226: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => ot
    });
    var Ot = Vt(63),
      qt = Vt(5436),
      Dt = Vt.n(qt),
      mt = Vt(5263),
      dt = Vt(5609),
      jt = Vt(6136),
      Ht = Vt(6228),
      Xt = Vt(5631);

    function Qt(tt) {
      return Qt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, Qt(tt)
    }

    function lt() {
      return lt = Object.assign ? Object.assign.bind() : function(tt) {
        for (var et = 1; et < arguments.length; et++) {
          var Vt = arguments[et];
          for (var Ot in Vt) Object.prototype.hasOwnProperty.call(Vt, Ot) && (tt[Ot] = Vt[Ot])
        }
        return tt
      }, lt.apply(this, arguments)
    }

    function Et(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function ft(tt, et) {
      for (var Vt = 0; Vt < et.length; Vt++) {
        var Ot = et[Vt];
        Ot.enumerable = Ot.enumerable || !1, Ot.configurable = !0, "value" in Ot && (Ot.writable = !0), Object.defineProperty(tt, Jt(Ot.key), Ot)
      }
    }

    function wt(tt, et, Vt) {
      return et = Nt(et),
        function(tt, et) {
          if (et && ("object" === Qt(et) || "function" === typeof et)) return et;
          if (void 0 !== et) throw new TypeError("Derived constructors may only return object or undefined");
          return function(tt) {
            if (void 0 === tt) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return tt
          }(tt)
        }(tt, yt() ? Reflect.construct(et, Vt || [], Nt(tt).constructor) : et.apply(tt, Vt))
    }

    function yt() {
      try {
        var tt = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (tt) {}
      return (yt = function() {
        return !!tt
      })()
    }

    function Nt(tt) {
      return Nt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(tt) {
        return tt.__proto__ || Object.getPrototypeOf(tt)
      }, Nt(tt)
    }

    function Mt(tt, et) {
      return Mt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(tt, et) {
        return tt.__proto__ = et, tt
      }, Mt(tt, et)
    }

    function bt(tt, et, Vt) {
      return (et = Jt(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }

    function Jt(tt) {
      var et = function(tt, et) {
        if ("object" != Qt(tt) || !tt) return tt;
        var Vt = tt[Symbol.toPrimitive];
        if (void 0 !== Vt) {
          var Ot = Vt.call(tt, et || "default");
          if ("object" != Qt(Ot)) return Ot;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === et ? String : Number)(tt)
      }(tt, "string");
      return "symbol" == Qt(et) ? et : et + ""
    }
    var Ct = 32,
      ut = function(tt) {
        function et() {
          return function(tt, et) {
            if (!(tt instanceof et)) throw new TypeError("Cannot call a class as a function")
          }(this, et), wt(this, et, arguments)
        }
        return function(tt, et) {
          if ("function" !== typeof et && null !== et) throw new TypeError("Super expression must either be null or a function");
          tt.prototype = Object.create(et && et.prototype, {
            constructor: {
              value: tt,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(tt, "prototype", {
            writable: !1
          }), et && Mt(tt, et)
        }(et, tt), Vt = et, qt = [{
          key: "renderIcon",
          value: function(tt) {
            var et = this.props.inactiveColor,
              Vt = 16,
              qt = Ct / 6,
              Dt = Ct / 3,
              mt = tt.inactive ? et : tt.color;
            if ("plainline" === tt.type) return Ot.createElement("line", {
              strokeWidth: 4,
              fill: "none",
              stroke: mt,
              strokeDasharray: tt.payload.strokeDasharray,
              x1: 0,
              y1: Vt,
              x2: Ct,
              y2: Vt,
              className: "recharts-legend-icon"
            });
            if ("line" === tt.type) return Ot.createElement("path", {
              strokeWidth: 4,
              fill: "none",
              stroke: mt,
              d: "M0,".concat(Vt, "h").concat(Dt, "\n            A").concat(qt, ",").concat(qt, ",0,1,1,").concat(2 * Dt, ",").concat(Vt, "\n            H").concat(Ct, "M").concat(2 * Dt, ",").concat(Vt, "\n            A").concat(qt, ",").concat(qt, ",0,1,1,").concat(Dt, ",").concat(Vt),
              className: "recharts-legend-icon"
            });
            if ("rect" === tt.type) return Ot.createElement("path", {
              stroke: "none",
              fill: mt,
              d: "M0,".concat(4, "h").concat(Ct, "v").concat(24, "h").concat(-32, "z"),
              className: "recharts-legend-icon"
            });
            if (Ot.isValidElement(tt.legendIcon)) {
              var dt = function(tt) {
                for (var et = 1; et < arguments.length; et++) {
                  var Vt = null != arguments[et] ? arguments[et] : {};
                  et % 2 ? Et(Object(Vt), !0).forEach((function(et) {
                    bt(tt, et, Vt[et])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : Et(Object(Vt)).forEach((function(et) {
                    Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
                  }))
                }
                return tt
              }({}, tt);
              return delete dt.legendIcon, Ot.cloneElement(tt.legendIcon, dt)
            }
            return Ot.createElement(Ht.b, {
              fill: mt,
              cx: Vt,
              cy: Vt,
              size: Ct,
              sizeType: "diameter",
              type: tt.type
            })
          }
        }, {
          key: "renderItems",
          value: function() {
            var tt = this,
              et = this.props,
              Vt = et.payload,
              qt = et.iconSize,
              Ht = et.layout,
              Qt = et.formatter,
              Et = et.inactiveColor,
              ft = {
                x: 0,
                y: 0,
                width: Ct,
                height: Ct
              },
              wt = {
                display: "horizontal" === Ht ? "inline-block" : "block",
                marginRight: 10
              },
              yt = {
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: 4
              };
            return Vt.map((function(et, Vt) {
              var Ht = et.formatter || Qt,
                Nt = (0, mt.b)(bt(bt({
                  "recharts-legend-item": !0
                }, "legend-item-".concat(Vt), !0), "inactive", et.inactive));
              if ("none" === et.type) return null;
              var Mt = Dt()(et.value) ? null : et.value;
              (0, dt.e)(!Dt()(et.value), 'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>');
              var Jt = et.inactive ? Et : et.color;
              return Ot.createElement("li", lt({
                className: Nt,
                style: wt,
                key: "legend-item-".concat(Vt)
              }, (0, Xt.k)(tt.props, et, Vt)), Ot.createElement(jt.c, {
                width: qt,
                height: qt,
                viewBox: ft,
                style: yt
              }, tt.renderIcon(et)), Ot.createElement("span", {
                className: "recharts-legend-item-text",
                style: {
                  color: Jt
                }
              }, Ht ? Ht(Mt, et, Vt) : Mt))
            }))
          }
        }, {
          key: "render",
          value: function() {
            var tt = this.props,
              et = tt.payload,
              Vt = tt.layout,
              qt = tt.align;
            if (!et || !et.length) return null;
            var Dt = {
              padding: 0,
              margin: 0,
              textAlign: "horizontal" === Vt ? qt : "left"
            };
            return Ot.createElement("ul", {
              className: "recharts-default-legend",
              style: Dt
            }, this.renderItems())
          }
        }], qt && ft(Vt.prototype, qt), Qt && ft(Vt, Qt), Object.defineProperty(Vt, "prototype", {
          writable: !1
        }), Vt;
        var Vt, qt, Qt
      }(Ot.PureComponent);
    bt(ut, "displayName", "Legend"), bt(ut, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "middle",
      inactiveColor: "#ccc"
    });
    var Kt = Vt(5348),
      ht = Vt(6162);

    function vt(tt) {
      return vt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, vt(tt)
    }
    var Wt = ["ref"];

    function St(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function ct(tt) {
      for (var et = 1; et < arguments.length; et++) {
        var Vt = null != arguments[et] ? arguments[et] : {};
        et % 2 ? St(Object(Vt), !0).forEach((function(et) {
          Ft(tt, et, Vt[et])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : St(Object(Vt)).forEach((function(et) {
          Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
        }))
      }
      return tt
    }

    function Rt(tt, et) {
      for (var Vt = 0; Vt < et.length; Vt++) {
        var Ot = et[Vt];
        Ot.enumerable = Ot.enumerable || !1, Ot.configurable = !0, "value" in Ot && (Ot.writable = !0), Object.defineProperty(tt, kt(Ot.key), Ot)
      }
    }

    function It(tt, et, Vt) {
      return et = Zt(et),
        function(tt, et) {
          if (et && ("object" === vt(et) || "function" === typeof et)) return et;
          if (void 0 !== et) throw new TypeError("Derived constructors may only return object or undefined");
          return function(tt) {
            if (void 0 === tt) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return tt
          }(tt)
        }(tt, Pt() ? Reflect.construct(et, Vt || [], Zt(tt).constructor) : et.apply(tt, Vt))
    }

    function Pt() {
      try {
        var tt = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (tt) {}
      return (Pt = function() {
        return !!tt
      })()
    }

    function Zt(tt) {
      return Zt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(tt) {
        return tt.__proto__ || Object.getPrototypeOf(tt)
      }, Zt(tt)
    }

    function Lt(tt, et) {
      return Lt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(tt, et) {
        return tt.__proto__ = et, tt
      }, Lt(tt, et)
    }

    function Ft(tt, et, Vt) {
      return (et = kt(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }

    function kt(tt) {
      var et = function(tt, et) {
        if ("object" != vt(tt) || !tt) return tt;
        var Vt = tt[Symbol.toPrimitive];
        if (void 0 !== Vt) {
          var Ot = Vt.call(tt, et || "default");
          if ("object" != vt(Ot)) return Ot;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === et ? String : Number)(tt)
      }(tt, "string");
      return "symbol" == vt(et) ? et : et + ""
    }

    function Gt(tt, et) {
      if (null == tt) return {};
      var Vt, Ot, qt = function(tt, et) {
        if (null == tt) return {};
        var Vt = {};
        for (var Ot in tt)
          if (Object.prototype.hasOwnProperty.call(tt, Ot)) {
            if (et.indexOf(Ot) >= 0) continue;
            Vt[Ot] = tt[Ot]
          } return Vt
      }(tt, et);
      if (Object.getOwnPropertySymbols) {
        var Dt = Object.getOwnPropertySymbols(tt);
        for (Ot = 0; Ot < Dt.length; Ot++) Vt = Dt[Ot], et.indexOf(Vt) >= 0 || Object.prototype.propertyIsEnumerable.call(tt, Vt) && (qt[Vt] = tt[Vt])
      }
      return qt
    }

    function zt(tt) {
      return tt.value
    }
    var ot = function(tt) {
      function et() {
        var tt;
        ! function(tt, et) {
          if (!(tt instanceof et)) throw new TypeError("Cannot call a class as a function")
        }(this, et);
        for (var Vt = arguments.length, Ot = new Array(Vt), qt = 0; qt < Vt; qt++) Ot[qt] = arguments[qt];
        return Ft(tt = It(this, et, [].concat(Ot)), "lastBoundingBox", {
          width: -1,
          height: -1
        }), tt
      }
      return function(tt, et) {
        if ("function" !== typeof et && null !== et) throw new TypeError("Super expression must either be null or a function");
        tt.prototype = Object.create(et && et.prototype, {
          constructor: {
            value: tt,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(tt, "prototype", {
          writable: !1
        }), et && Lt(tt, et)
      }(et, tt), Vt = et, Dt = [{
        key: "getWithHeight",
        value: function(tt, et) {
          var Vt = ct(ct({}, this.defaultProps), tt.props).layout;
          return "vertical" === Vt && (0, Kt.A)(tt.props.height) ? {
            height: tt.props.height
          } : "horizontal" === Vt ? {
            width: tt.props.width || et
          } : null
        }
      }], (qt = [{
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
            var tt = this.wrapperNode.getBoundingClientRect();
            return tt.height = this.wrapperNode.offsetHeight, tt.width = this.wrapperNode.offsetWidth, tt
          }
          return null
        }
      }, {
        key: "updateBBox",
        value: function() {
          var tt = this.props.onBBoxUpdate,
            et = this.getBBox();
          et ? (Math.abs(et.width - this.lastBoundingBox.width) > 1 || Math.abs(et.height - this.lastBoundingBox.height) > 1) && (this.lastBoundingBox.width = et.width, this.lastBoundingBox.height = et.height, tt && tt(et)) : -1 === this.lastBoundingBox.width && -1 === this.lastBoundingBox.height || (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, tt && tt(null))
        }
      }, {
        key: "getBBoxSnapshot",
        value: function() {
          return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? ct({}, this.lastBoundingBox) : {
            width: 0,
            height: 0
          }
        }
      }, {
        key: "getDefaultPosition",
        value: function(tt) {
          var et, Vt, Ot = this.props,
            qt = Ot.layout,
            Dt = Ot.align,
            mt = Ot.verticalAlign,
            dt = Ot.margin,
            jt = Ot.chartWidth,
            Ht = Ot.chartHeight;
          return tt && (void 0 !== tt.left && null !== tt.left || void 0 !== tt.right && null !== tt.right) || (et = "center" === Dt && "vertical" === qt ? {
            left: ((jt || 0) - this.getBBoxSnapshot().width) / 2
          } : "right" === Dt ? {
            right: dt && dt.right || 0
          } : {
            left: dt && dt.left || 0
          }), tt && (void 0 !== tt.top && null !== tt.top || void 0 !== tt.bottom && null !== tt.bottom) || (Vt = "middle" === mt ? {
            top: ((Ht || 0) - this.getBBoxSnapshot().height) / 2
          } : "bottom" === mt ? {
            bottom: dt && dt.bottom || 0
          } : {
            top: dt && dt.top || 0
          }), ct(ct({}, et), Vt)
        }
      }, {
        key: "render",
        value: function() {
          var tt = this,
            et = this.props,
            Vt = et.content,
            qt = et.width,
            Dt = et.height,
            mt = et.wrapperStyle,
            dt = et.payloadUniqBy,
            jt = et.payload,
            Ht = ct(ct({
              position: "absolute",
              width: qt || "auto",
              height: Dt || "auto"
            }, this.getDefaultPosition(mt)), mt);
          return Ot.createElement("div", {
            className: "recharts-legend-wrapper",
            style: Ht,
            ref: function(et) {
              tt.wrapperNode = et
            }
          }, function(tt, et) {
            if (Ot.isValidElement(tt)) return Ot.cloneElement(tt, et);
            if ("function" === typeof tt) return Ot.createElement(tt, et);
            et.ref;
            var Vt = Gt(et, Wt);
            return Ot.createElement(ut, Vt)
          }(Vt, ct(ct({}, this.props), {}, {
            payload: (0, ht.b)(jt, dt, zt)
          })))
        }
      }]) && Rt(Vt.prototype, qt), Dt && Rt(Vt, Dt), Object.defineProperty(Vt, "prototype", {
        writable: !1
      }), Vt;
      var Vt, qt, Dt
    }(Ot.PureComponent);
    Ft(ot, "displayName", "Legend"), Ft(ot, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom"
    })
  },
  5254: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => yt
    });
    var Ot = Vt(5263),
      qt = Vt(63),
      Dt = Vt(5267),
      mt = Vt.n(Dt),
      dt = Vt(5348),
      jt = Vt(5609),
      Ht = Vt(5614);

    function Xt(tt) {
      return Xt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, Xt(tt)
    }

    function Qt(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function lt(tt) {
      for (var et = 1; et < arguments.length; et++) {
        var Vt = null != arguments[et] ? arguments[et] : {};
        et % 2 ? Qt(Object(Vt), !0).forEach((function(et) {
          Et(tt, et, Vt[et])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : Qt(Object(Vt)).forEach((function(et) {
          Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
        }))
      }
      return tt
    }

    function Et(tt, et, Vt) {
      return (et = function(tt) {
        var et = function(tt, et) {
          if ("object" != Xt(tt) || !tt) return tt;
          var Vt = tt[Symbol.toPrimitive];
          if (void 0 !== Vt) {
            var Ot = Vt.call(tt, et || "default");
            if ("object" != Xt(Ot)) return Ot;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === et ? String : Number)(tt)
        }(tt, "string");
        return "symbol" == Xt(et) ? et : et + ""
      }(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }

    function ft(tt, et) {
      return function(tt) {
        if (Array.isArray(tt)) return tt
      }(tt) || function(tt, et) {
        var Vt = null == tt ? null : "undefined" != typeof Symbol && tt[Symbol.iterator] || tt["@@iterator"];
        if (null != Vt) {
          var Ot, qt, Dt, mt, dt = [],
            jt = !0,
            Ht = !1;
          try {
            if (Dt = (Vt = Vt.call(tt)).next, 0 === et) {
              if (Object(Vt) !== Vt) return;
              jt = !1
            } else
              for (; !(jt = (Ot = Dt.call(Vt)).done) && (dt.push(Ot.value), dt.length !== et); jt = !0);
          } catch (tt) {
            Ht = !0, qt = tt
          } finally {
            try {
              if (!jt && null != Vt.return && (mt = Vt.return(), Object(mt) !== mt)) return
            } finally {
              if (Ht) throw qt
            }
          }
          return dt
        }
      }(tt, et) || function(tt, et) {
        if (!tt) return;
        if ("string" === typeof tt) return wt(tt, et);
        var Vt = Object.prototype.toString.call(tt).slice(8, -1);
        "Object" === Vt && tt.constructor && (Vt = tt.constructor.name);
        if ("Map" === Vt || "Set" === Vt) return Array.from(tt);
        if ("Arguments" === Vt || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Vt)) return wt(tt, et)
      }(tt, et) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function wt(tt, et) {
      (null == et || et > tt.length) && (et = tt.length);
      for (var Vt = 0, Ot = new Array(et); Vt < et; Vt++) Ot[Vt] = tt[Vt];
      return Ot
    }
    var yt = (0, qt.forwardRef)((function(tt, et) {
      var Vt = tt.aspect,
        Dt = tt.initialDimension,
        Xt = void 0 === Dt ? {
          width: -1,
          height: -1
        } : Dt,
        Qt = tt.width,
        Et = void 0 === Qt ? "100%" : Qt,
        wt = tt.height,
        yt = void 0 === wt ? "100%" : wt,
        Nt = tt.minWidth,
        Mt = void 0 === Nt ? 0 : Nt,
        bt = tt.minHeight,
        Jt = tt.maxHeight,
        Ct = tt.children,
        ut = tt.debounce,
        Kt = void 0 === ut ? 0 : ut,
        ht = tt.id,
        vt = tt.className,
        Wt = tt.iN,
        St = tt.style,
        ct = void 0 === St ? {} : St,
        Rt = (0, qt.useRef)(null),
        It = (0, qt.useRef)();
      It.current = Wt, (0, qt.useImperativeHandle)(et, (function() {
        return Object.defineProperty(Rt.current, "current", {
          get: function() {
            return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), Rt.current
          },
          configurable: !0
        })
      }));
      var Pt = ft((0, qt.useState)({
          containerWidth: Xt.width,
          containerHeight: Xt.height
        }), 2),
        Zt = Pt[0],
        Lt = Pt[1],
        Ft = (0, qt.useCallback)((function(tt, et) {
          Lt((function(Vt) {
            var Ot = Math.round(tt),
              qt = Math.round(et);
            return Vt.containerWidth === Ot && Vt.containerHeight === qt ? Vt : {
              containerWidth: Ot,
              containerHeight: qt
            }
          }))
        }), []);
      (0, qt.useEffect)((function() {
        var tt = function(tt) {
          var et, Vt = tt[0].contentRect,
            Ot = Vt.width,
            qt = Vt.height;
          Ft(Ot, qt), null === (et = It.current) || void 0 === et || et.call(It, Ot, qt)
        };
        Kt > 0 && (tt = mt()(tt, Kt, {
          trailing: !0,
          leading: !1
        }));
        var et = new ResizeObserver(tt),
          Vt = Rt.current.getBoundingClientRect(),
          Ot = Vt.width,
          qt = Vt.height;
        return Ft(Ot, qt), et.observe(Rt.current),
          function() {
            et.disconnect()
          }
      }), [Ft, Kt]);
      var kt = (0, qt.useMemo)((function() {
        var tt = Zt.containerWidth,
          et = Zt.containerHeight;
        if (tt < 0 || et < 0) return null;
        (0, jt.e)((0, dt.E)(Et) || (0, dt.E)(yt), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", Et, yt), (0, jt.e)(!Vt || Vt > 0, "The aspect(%s) must be greater than zero.", Vt);
        var Ot = (0, dt.E)(Et) ? tt : Et,
          Dt = (0, dt.E)(yt) ? et : yt;
        Vt && Vt > 0 && (Ot ? Dt = Ot / Vt : Dt && (Ot = Dt * Vt), Jt && Dt > Jt && (Dt = Jt)), (0, jt.e)(Ot > 0 || Dt > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", Ot, Dt, Et, yt, Mt, bt, Vt);
        var mt = !Array.isArray(Ct) && (0, Ht.g)(Ct.type).endsWith("Chart");
        return qt.Children.map(Ct, (function(tt) {
          return qt.isValidElement(tt) ? (0, qt.cloneElement)(tt, lt({
            width: Ot,
            height: Dt
          }, mt ? {
            style: lt({
              height: "100%",
              width: "100%",
              maxHeight: Dt,
              maxWidth: Ot
            }, tt.props.style)
          } : {})) : tt
        }))
      }), [Vt, Ct, yt, Jt, bt, Mt, Zt, Et]);
      return qt.createElement("div", {
        id: ht ? "".concat(ht) : void 0,
        className: (0, Ot.b)("recharts-responsive-container", vt),
        style: lt(lt({}, ct), {}, {
          width: Et,
          height: yt,
          minWidth: Mt,
          minHeight: bt,
          maxHeight: Jt
        }),
        ref: Rt
      }, kt)
    }))
  },
  6304: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => rt
    });
    var Ot = Vt(63),
      qt = Vt(5603),
      Dt = Vt.n(qt),
      mt = Vt(5263),
      dt = Vt(5348),
      jt = Vt(6155),
      Ht = Vt(5614),
      Xt = Vt(6310);

    function Qt(tt) {
      return Qt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, Qt(tt)
    }

    function lt(tt, et) {
      return function(tt) {
        if (Array.isArray(tt)) return tt
      }(tt) || function(tt, et) {
        var Vt = null == tt ? null : "undefined" != typeof Symbol && tt[Symbol.iterator] || tt["@@iterator"];
        if (null != Vt) {
          var Ot, qt, Dt, mt, dt = [],
            jt = !0,
            Ht = !1;
          try {
            if (Dt = (Vt = Vt.call(tt)).next, 0 === et) {
              if (Object(Vt) !== Vt) return;
              jt = !1
            } else
              for (; !(jt = (Ot = Dt.call(Vt)).done) && (dt.push(Ot.value), dt.length !== et); jt = !0);
          } catch (tt) {
            Ht = !0, qt = tt
          } finally {
            try {
              if (!jt && null != Vt.return && (mt = Vt.return(), Object(mt) !== mt)) return
            } finally {
              if (Ht) throw qt
            }
          }
          return dt
        }
      }(tt, et) || function(tt, et) {
        if (!tt) return;
        if ("string" === typeof tt) return Et(tt, et);
        var Vt = Object.prototype.toString.call(tt).slice(8, -1);
        "Object" === Vt && tt.constructor && (Vt = tt.constructor.name);
        if ("Map" === Vt || "Set" === Vt) return Array.from(tt);
        if ("Arguments" === Vt || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Vt)) return Et(tt, et)
      }(tt, et) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Et(tt, et) {
      (null == et || et > tt.length) && (et = tt.length);
      for (var Vt = 0, Ot = new Array(et); Vt < et; Vt++) Ot[Vt] = tt[Vt];
      return Ot
    }

    function ft(tt, et) {
      for (var Vt = 0; Vt < et.length; Vt++) {
        var Ot = et[Vt];
        Ot.enumerable = Ot.enumerable || !1, Ot.configurable = !0, "value" in Ot && (Ot.writable = !0), Object.defineProperty(tt, wt(Ot.key), Ot)
      }
    }

    function wt(tt) {
      var et = function(tt, et) {
        if ("object" != Qt(tt) || !tt) return tt;
        var Vt = tt[Symbol.toPrimitive];
        if (void 0 !== Vt) {
          var Ot = Vt.call(tt, et || "default");
          if ("object" != Qt(Ot)) return Ot;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === et ? String : Number)(tt)
      }(tt, "string");
      return "symbol" == Qt(et) ? et : et + ""
    }
    var yt = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      Nt = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      Mt = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
      bt = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
      Jt = {
        cm: 96 / 2.54,
        mm: 96 / 25.4,
        pt: 96 / 72,
        pc: 16,
        in: 96,
        Q: 96 / 101.6,
        px: 1
      },
      Ct = Object.keys(Jt),
      ut = "NaN";
    var Kt = function() {
      function tt(et, Vt) {
        ! function(tt, et) {
          if (!(tt instanceof et)) throw new TypeError("Cannot call a class as a function")
        }(this, tt), this.num = et, this.unit = Vt, this.num = et, this.unit = Vt, Number.isNaN(et) && (this.unit = ""), "" === Vt || Mt.test(Vt) || (this.num = NaN, this.unit = ""), Ct.includes(Vt) && (this.num = function(tt, et) {
          return tt * Jt[et]
        }(et, Vt), this.unit = "px")
      }
      return et = tt, Ot = [{
        key: "parse",
        value: function(et) {
          var Vt, Ot = lt(null !== (Vt = bt.exec(et)) && void 0 !== Vt ? Vt : [], 3),
            qt = Ot[1],
            Dt = Ot[2];
          return new tt(parseFloat(qt), null !== Dt && void 0 !== Dt ? Dt : "")
        }
      }], (Vt = [{
        key: "add",
        value: function(et) {
          return this.unit !== et.unit ? new tt(NaN, "") : new tt(this.num + et.num, this.unit)
        }
      }, {
        key: "subtract",
        value: function(et) {
          return this.unit !== et.unit ? new tt(NaN, "") : new tt(this.num - et.num, this.unit)
        }
      }, {
        key: "multiply",
        value: function(et) {
          return "" !== this.unit && "" !== et.unit && this.unit !== et.unit ? new tt(NaN, "") : new tt(this.num * et.num, this.unit || et.unit)
        }
      }, {
        key: "divide",
        value: function(et) {
          return "" !== this.unit && "" !== et.unit && this.unit !== et.unit ? new tt(NaN, "") : new tt(this.num / et.num, this.unit || et.unit)
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
      }]) && ft(et.prototype, Vt), Ot && ft(et, Ot), Object.defineProperty(et, "prototype", {
        writable: !1
      }), et;
      var et, Vt, Ot
    }();

    function ht(tt) {
      if (tt.includes(ut)) return ut;
      for (var et = tt; et.includes("*") || et.includes("/");) {
        var Vt, Ot = lt(null !== (Vt = yt.exec(et)) && void 0 !== Vt ? Vt : [], 4),
          qt = Ot[1],
          Dt = Ot[2],
          mt = Ot[3],
          dt = Kt.parse(null !== qt && void 0 !== qt ? qt : ""),
          jt = Kt.parse(null !== mt && void 0 !== mt ? mt : ""),
          Ht = "*" === Dt ? dt.multiply(jt) : dt.divide(jt);
        if (Ht.isNaN()) return ut;
        et = et.replace(yt, Ht.toString())
      }
      for (; et.includes("+") || /.-\d+(?:\.\d+)?/.test(et);) {
        var Xt, Qt = lt(null !== (Xt = Nt.exec(et)) && void 0 !== Xt ? Xt : [], 4),
          Et = Qt[1],
          ft = Qt[2],
          wt = Qt[3],
          Mt = Kt.parse(null !== Et && void 0 !== Et ? Et : ""),
          bt = Kt.parse(null !== wt && void 0 !== wt ? wt : ""),
          Jt = "+" === ft ? Mt.add(bt) : Mt.subtract(bt);
        if (Jt.isNaN()) return ut;
        et = et.replace(Nt, Jt.toString())
      }
      return et
    }
    var vt = /\(([^()]*)\)/;

    function Wt(tt) {
      var et = tt.replace(/\s+/g, "");
      return et = function(tt) {
        for (var et = tt; et.includes("(");) {
          var Vt = lt(vt.exec(et), 2)[1];
          et = et.replace(vt, ht(Vt))
        }
        return et
      }(et), et = ht(et)
    }

    function St(tt) {
      var et = function(tt) {
        try {
          return Wt(tt)
        } catch (et) {
          return ut
        }
      }(tt.slice(5, -1));
      return et === ut ? "" : et
    }
    var ct = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"],
      Rt = ["dx", "dy", "angle", "className", "breakAll"];

    function It() {
      return It = Object.assign ? Object.assign.bind() : function(tt) {
        for (var et = 1; et < arguments.length; et++) {
          var Vt = arguments[et];
          for (var Ot in Vt) Object.prototype.hasOwnProperty.call(Vt, Ot) && (tt[Ot] = Vt[Ot])
        }
        return tt
      }, It.apply(this, arguments)
    }

    function Pt(tt, et) {
      if (null == tt) return {};
      var Vt, Ot, qt = function(tt, et) {
        if (null == tt) return {};
        var Vt = {};
        for (var Ot in tt)
          if (Object.prototype.hasOwnProperty.call(tt, Ot)) {
            if (et.indexOf(Ot) >= 0) continue;
            Vt[Ot] = tt[Ot]
          } return Vt
      }(tt, et);
      if (Object.getOwnPropertySymbols) {
        var Dt = Object.getOwnPropertySymbols(tt);
        for (Ot = 0; Ot < Dt.length; Ot++) Vt = Dt[Ot], et.indexOf(Vt) >= 0 || Object.prototype.propertyIsEnumerable.call(tt, Vt) && (qt[Vt] = tt[Vt])
      }
      return qt
    }

    function Zt(tt, et) {
      return function(tt) {
        if (Array.isArray(tt)) return tt
      }(tt) || function(tt, et) {
        var Vt = null == tt ? null : "undefined" != typeof Symbol && tt[Symbol.iterator] || tt["@@iterator"];
        if (null != Vt) {
          var Ot, qt, Dt, mt, dt = [],
            jt = !0,
            Ht = !1;
          try {
            if (Dt = (Vt = Vt.call(tt)).next, 0 === et) {
              if (Object(Vt) !== Vt) return;
              jt = !1
            } else
              for (; !(jt = (Ot = Dt.call(Vt)).done) && (dt.push(Ot.value), dt.length !== et); jt = !0);
          } catch (tt) {
            Ht = !0, qt = tt
          } finally {
            try {
              if (!jt && null != Vt.return && (mt = Vt.return(), Object(mt) !== mt)) return
            } finally {
              if (Ht) throw qt
            }
          }
          return dt
        }
      }(tt, et) || function(tt, et) {
        if (!tt) return;
        if ("string" === typeof tt) return Lt(tt, et);
        var Vt = Object.prototype.toString.call(tt).slice(8, -1);
        "Object" === Vt && tt.constructor && (Vt = tt.constructor.name);
        if ("Map" === Vt || "Set" === Vt) return Array.from(tt);
        if ("Arguments" === Vt || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Vt)) return Lt(tt, et)
      }(tt, et) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Lt(tt, et) {
      (null == et || et > tt.length) && (et = tt.length);
      for (var Vt = 0, Ot = new Array(et); Vt < et; Vt++) Ot[Vt] = tt[Vt];
      return Ot
    }
    var Ft = /[ \f\n\r\t\v\u2028\u2029]+/,
      kt = function(tt) {
        var et = tt.children,
          Vt = tt.breakAll,
          Ot = tt.style;
        try {
          var qt = [];
          return Dt()(et) || (qt = Vt ? et.toString().split("") : et.toString().split(Ft)), {
            wordsWithComputedWidth: qt.map((function(tt) {
              return {
                word: tt,
                width: (0, Xt.g)(tt, Ot).width
              }
            })),
            spaceWidth: Vt ? 0 : (0, Xt.g)("\xa0", Ot).width
          }
        } catch (mt) {
          return null
        }
      },
      Gt = function(tt) {
        return [{
          words: Dt()(tt) ? [] : tt.toString().split(Ft)
        }]
      },
      zt = function(tt) {
        var et = tt.width,
          Vt = tt.scaleToFit,
          Ot = tt.children,
          qt = tt.style,
          Dt = tt.breakAll,
          mt = tt.maxLines;
        if ((et || Vt) && !jt.c.isSsr) {
          var Ht = kt({
            breakAll: Dt,
            children: Ot,
            style: qt
          });
          return Ht ? function(tt, et, Vt, Ot, qt) {
            var Dt = tt.maxLines,
              mt = tt.children,
              jt = tt.style,
              Ht = tt.breakAll,
              Xt = (0, dt.A)(Dt),
              Qt = mt,
              lt = function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce((function(tt, et) {
                  var Dt = et.word,
                    mt = et.width,
                    dt = tt[tt.length - 1];
                  if (dt && (null == Ot || qt || dt.width + mt + Vt < Number(Ot))) dt.words.push(Dt), dt.width += mt + Vt;
                  else {
                    var jt = {
                      words: [Dt],
                      width: mt
                    };
                    tt.push(jt)
                  }
                  return tt
                }), [])
              },
              Et = lt(et);
            if (!Xt) return Et;
            for (var ft, wt = function(tt) {
                var et = Qt.slice(0, tt),
                  Vt = kt({
                    breakAll: Ht,
                    style: jt,
                    children: et + "\u2026"
                  }).wordsWithComputedWidth,
                  qt = lt(Vt),
                  mt = qt.length > Dt || function(tt) {
                    return tt.reduce((function(tt, et) {
                      return tt.width > et.width ? tt : et
                    }))
                  }(qt).width > Number(Ot);
                return [mt, qt]
              }, yt = 0, Nt = Qt.length - 1, Mt = 0; yt <= Nt && Mt <= Qt.length - 1;) {
              var bt = Math.floor((yt + Nt) / 2),
                Jt = Zt(wt(bt - 1), 2),
                Ct = Jt[0],
                ut = Jt[1],
                Kt = Zt(wt(bt), 1)[0];
              if (Ct || Kt || (yt = bt + 1), Ct && Kt && (Nt = bt - 1), !Ct && Kt) {
                ft = ut;
                break
              }
              Mt++
            }
            return ft || Et
          }({
            breakAll: Dt,
            children: Ot,
            maxLines: mt,
            style: qt
          }, Ht.wordsWithComputedWidth, Ht.spaceWidth, et, Vt) : Gt(Ot)
        }
        return Gt(Ot)
      },
      ot = "#808080",
      rt = function(tt) {
        var et = tt.x,
          Vt = void 0 === et ? 0 : et,
          qt = tt.y,
          Dt = void 0 === qt ? 0 : qt,
          jt = tt.lineHeight,
          Xt = void 0 === jt ? "1em" : jt,
          Qt = tt.capHeight,
          lt = void 0 === Qt ? "0.71em" : Qt,
          Et = tt.scaleToFit,
          ft = void 0 !== Et && Et,
          wt = tt.textAnchor,
          yt = void 0 === wt ? "start" : wt,
          Nt = tt.verticalAnchor,
          Mt = void 0 === Nt ? "end" : Nt,
          bt = tt.fill,
          Jt = void 0 === bt ? ot : bt,
          Ct = Pt(tt, ct),
          ut = (0, Ot.useMemo)((function() {
            return zt({
              breakAll: Ct.breakAll,
              children: Ct.children,
              maxLines: Ct.maxLines,
              scaleToFit: ft,
              style: Ct.style,
              width: Ct.width
            })
          }), [Ct.breakAll, Ct.children, Ct.maxLines, ft, Ct.style, Ct.width]),
          Kt = Ct.dx,
          ht = Ct.dy,
          vt = Ct.angle,
          Wt = Ct.className,
          Zt = Ct.breakAll,
          Lt = Pt(Ct, Rt);
        if (!(0, dt.w)(Vt) || !(0, dt.w)(Dt)) return null;
        var Ft, kt = Vt + ((0, dt.A)(Kt) ? Kt : 0),
          Gt = Dt + ((0, dt.A)(ht) ? ht : 0);
        switch (Mt) {
          case "start":
            Ft = St("calc(".concat(lt, ")"));
            break;
          case "middle":
            Ft = St("calc(".concat((ut.length - 1) / 2, " * -").concat(Xt, " + (").concat(lt, " / 2))"));
            break;
          default:
            Ft = St("calc(".concat(ut.length - 1, " * -").concat(Xt, ")"))
        }
        var rt = [];
        if (ft) {
          var Ut = ut[0].width,
            At = Ct.width;
          rt.push("scale(".concat(((0, dt.A)(At) ? At / Ut : 1) / Ut, ")"))
        }
        return vt && rt.push("rotate(".concat(vt, ", ").concat(kt, ", ").concat(Gt, ")")), rt.length && (Lt.transform = rt.join(" ")), Ot.createElement("text", It({}, (0, Ht.b)(Lt, !0), {
          x: kt,
          y: Gt,
          className: (0, mt.b)("recharts-text", Wt),
          textAnchor: yt,
          fill: Jt.includes("url") ? ot : Jt
        }), ut.map((function(tt, et) {
          var Vt = tt.words.join(Zt ? "" : " ");
          return Ot.createElement("tspan", {
            x: kt,
            dy: 0 === et ? Ft : Xt,
            key: "".concat(Vt, "-").concat(et)
          }, Vt)
        })))
      }
  },
  6149: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => st
    });
    var Ot = Vt(63),
      qt = Vt(5696),
      Dt = Vt.n(qt),
      mt = Vt(5603),
      dt = Vt.n(mt),
      jt = Vt(5263),
      Ht = Vt(5348);

    function Xt(tt) {
      return Xt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, Xt(tt)
    }

    function Qt() {
      return Qt = Object.assign ? Object.assign.bind() : function(tt) {
        for (var et = 1; et < arguments.length; et++) {
          var Vt = arguments[et];
          for (var Ot in Vt) Object.prototype.hasOwnProperty.call(Vt, Ot) && (tt[Ot] = Vt[Ot])
        }
        return tt
      }, Qt.apply(this, arguments)
    }

    function lt(tt, et) {
      return function(tt) {
        if (Array.isArray(tt)) return tt
      }(tt) || function(tt, et) {
        var Vt = null == tt ? null : "undefined" != typeof Symbol && tt[Symbol.iterator] || tt["@@iterator"];
        if (null != Vt) {
          var Ot, qt, Dt, mt, dt = [],
            jt = !0,
            Ht = !1;
          try {
            if (Dt = (Vt = Vt.call(tt)).next, 0 === et) {
              if (Object(Vt) !== Vt) return;
              jt = !1
            } else
              for (; !(jt = (Ot = Dt.call(Vt)).done) && (dt.push(Ot.value), dt.length !== et); jt = !0);
          } catch (tt) {
            Ht = !0, qt = tt
          } finally {
            try {
              if (!jt && null != Vt.return && (mt = Vt.return(), Object(mt) !== mt)) return
            } finally {
              if (Ht) throw qt
            }
          }
          return dt
        }
      }(tt, et) || function(tt, et) {
        if (!tt) return;
        if ("string" === typeof tt) return Et(tt, et);
        var Vt = Object.prototype.toString.call(tt).slice(8, -1);
        "Object" === Vt && tt.constructor && (Vt = tt.constructor.name);
        if ("Map" === Vt || "Set" === Vt) return Array.from(tt);
        if ("Arguments" === Vt || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Vt)) return Et(tt, et)
      }(tt, et) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Et(tt, et) {
      (null == et || et > tt.length) && (et = tt.length);
      for (var Vt = 0, Ot = new Array(et); Vt < et; Vt++) Ot[Vt] = tt[Vt];
      return Ot
    }

    function ft(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function wt(tt) {
      for (var et = 1; et < arguments.length; et++) {
        var Vt = null != arguments[et] ? arguments[et] : {};
        et % 2 ? ft(Object(Vt), !0).forEach((function(et) {
          yt(tt, et, Vt[et])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : ft(Object(Vt)).forEach((function(et) {
          Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
        }))
      }
      return tt
    }

    function yt(tt, et, Vt) {
      return (et = function(tt) {
        var et = function(tt, et) {
          if ("object" != Xt(tt) || !tt) return tt;
          var Vt = tt[Symbol.toPrimitive];
          if (void 0 !== Vt) {
            var Ot = Vt.call(tt, et || "default");
            if ("object" != Xt(Ot)) return Ot;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === et ? String : Number)(tt)
        }(tt, "string");
        return "symbol" == Xt(et) ? et : et + ""
      }(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }

    function Nt(tt) {
      return Array.isArray(tt) && (0, Ht.w)(tt[0]) && (0, Ht.w)(tt[1]) ? tt.join(" ~ ") : tt
    }
    var Mt = function(tt) {
      var et = tt.separator,
        Vt = void 0 === et ? " : " : et,
        qt = tt.contentStyle,
        mt = void 0 === qt ? {} : qt,
        Xt = tt.itemStyle,
        Et = void 0 === Xt ? {} : Xt,
        ft = tt.labelStyle,
        yt = void 0 === ft ? {} : ft,
        Mt = tt.payload,
        bt = tt.formatter,
        Jt = tt.itemSorter,
        Ct = tt.wrapperClassName,
        ut = tt.labelClassName,
        Kt = tt.label,
        ht = tt.labelFormatter,
        vt = tt.accessibilityLayer,
        Wt = void 0 !== vt && vt,
        St = wt({
          margin: 0,
          padding: 10,
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          whiteSpace: "nowrap"
        }, mt),
        ct = wt({
          margin: 0
        }, yt),
        Rt = !dt()(Kt),
        It = Rt ? Kt : "",
        Pt = (0, jt.b)("recharts-default-tooltip", Ct),
        Zt = (0, jt.b)("recharts-tooltip-label", ut);
      Rt && ht && void 0 !== Mt && null !== Mt && (It = ht(Kt, Mt));
      var Lt = Wt ? {
        role: "status",
        "aria-live": "assertive"
      } : {};
      return Ot.createElement("div", Qt({
        className: Pt,
        style: St
      }, Lt), Ot.createElement("p", {
        className: Zt,
        style: ct
      }, Ot.isValidElement(It) ? It : "".concat(It)), function() {
        if (Mt && Mt.length) {
          var tt = (Jt ? Dt()(Mt, Jt) : Mt).map((function(tt, et) {
            if ("none" === tt.type) return null;
            var qt = wt({
                display: "block",
                paddingTop: 4,
                paddingBottom: 4,
                color: tt.color || "#000"
              }, Et),
              Dt = tt.formatter || bt || Nt,
              mt = tt.value,
              dt = tt.name,
              jt = mt,
              Xt = dt;
            if (Dt && null != jt && null != Xt) {
              var Qt = Dt(mt, dt, tt, et, Mt);
              if (Array.isArray(Qt)) {
                var ft = lt(Qt, 2);
                jt = ft[0], Xt = ft[1]
              } else jt = Qt
            }
            return Ot.createElement("li", {
              className: "recharts-tooltip-item",
              key: "tooltip-item-".concat(et),
              style: qt
            }, (0, Ht.w)(Xt) ? Ot.createElement("span", {
              className: "recharts-tooltip-item-name"
            }, Xt) : null, (0, Ht.w)(Xt) ? Ot.createElement("span", {
              className: "recharts-tooltip-item-separator"
            }, Vt) : null, Ot.createElement("span", {
              className: "recharts-tooltip-item-value"
            }, jt), Ot.createElement("span", {
              className: "recharts-tooltip-item-unit"
            }, tt.unit || ""))
          }));
          return Ot.createElement("ul", {
            className: "recharts-tooltip-item-list",
            style: {
              padding: 0,
              margin: 0
            }
          }, tt)
        }
        return null
      }())
    };

    function bt(tt) {
      return bt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, bt(tt)
    }

    function Jt(tt, et, Vt) {
      return (et = function(tt) {
        var et = function(tt, et) {
          if ("object" != bt(tt) || !tt) return tt;
          var Vt = tt[Symbol.toPrimitive];
          if (void 0 !== Vt) {
            var Ot = Vt.call(tt, et || "default");
            if ("object" != bt(Ot)) return Ot;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === et ? String : Number)(tt)
        }(tt, "string");
        return "symbol" == bt(et) ? et : et + ""
      }(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }
    var Ct = "recharts-tooltip-wrapper",
      ut = {
        visibility: "hidden"
      };

    function Kt(tt) {
      var et = tt.coordinate,
        Vt = tt.translateX,
        Ot = tt.translateY;
      return (0, jt.b)(Ct, Jt(Jt(Jt(Jt({}, "".concat(Ct, "-right"), (0, Ht.A)(Vt) && et && (0, Ht.A)(et.x) && Vt >= et.x), "".concat(Ct, "-left"), (0, Ht.A)(Vt) && et && (0, Ht.A)(et.x) && Vt < et.x), "".concat(Ct, "-bottom"), (0, Ht.A)(Ot) && et && (0, Ht.A)(et.y) && Ot >= et.y), "".concat(Ct, "-top"), (0, Ht.A)(Ot) && et && (0, Ht.A)(et.y) && Ot < et.y))
    }

    function ht(tt) {
      var et = tt.allowEscapeViewBox,
        Vt = tt.coordinate,
        Ot = tt.key,
        qt = tt.offsetTopLeft,
        Dt = tt.position,
        mt = tt.reverseDirection,
        dt = tt.tooltipDimension,
        jt = tt.viewBox,
        Xt = tt.viewBoxDimension;
      if (Dt && (0, Ht.A)(Dt[Ot])) return Dt[Ot];
      var Qt = Vt[Ot] - dt - qt,
        lt = Vt[Ot] + qt;
      return et[Ot] ? mt[Ot] ? Qt : lt : mt[Ot] ? Qt < jt[Ot] ? Math.max(lt, jt[Ot]) : Math.max(Qt, jt[Ot]) : lt + dt > jt[Ot] + Xt ? Math.max(Qt, jt[Ot]) : Math.max(lt, jt[Ot])
    }

    function vt(tt) {
      return vt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, vt(tt)
    }

    function Wt(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function St(tt) {
      for (var et = 1; et < arguments.length; et++) {
        var Vt = null != arguments[et] ? arguments[et] : {};
        et % 2 ? Wt(Object(Vt), !0).forEach((function(et) {
          Lt(tt, et, Vt[et])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : Wt(Object(Vt)).forEach((function(et) {
          Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
        }))
      }
      return tt
    }

    function ct(tt, et) {
      for (var Vt = 0; Vt < et.length; Vt++) {
        var Ot = et[Vt];
        Ot.enumerable = Ot.enumerable || !1, Ot.configurable = !0, "value" in Ot && (Ot.writable = !0), Object.defineProperty(tt, Ft(Ot.key), Ot)
      }
    }

    function Rt(tt, et, Vt) {
      return et = Pt(et),
        function(tt, et) {
          if (et && ("object" === vt(et) || "function" === typeof et)) return et;
          if (void 0 !== et) throw new TypeError("Derived constructors may only return object or undefined");
          return function(tt) {
            if (void 0 === tt) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return tt
          }(tt)
        }(tt, It() ? Reflect.construct(et, Vt || [], Pt(tt).constructor) : et.apply(tt, Vt))
    }

    function It() {
      try {
        var tt = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (tt) {}
      return (It = function() {
        return !!tt
      })()
    }

    function Pt(tt) {
      return Pt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(tt) {
        return tt.__proto__ || Object.getPrototypeOf(tt)
      }, Pt(tt)
    }

    function Zt(tt, et) {
      return Zt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(tt, et) {
        return tt.__proto__ = et, tt
      }, Zt(tt, et)
    }

    function Lt(tt, et, Vt) {
      return (et = Ft(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }

    function Ft(tt) {
      var et = function(tt, et) {
        if ("object" != vt(tt) || !tt) return tt;
        var Vt = tt[Symbol.toPrimitive];
        if (void 0 !== Vt) {
          var Ot = Vt.call(tt, et || "default");
          if ("object" != vt(Ot)) return Ot;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === et ? String : Number)(tt)
      }(tt, "string");
      return "symbol" == vt(et) ? et : et + ""
    }
    var kt = function(tt) {
        function et() {
          var tt;
          ! function(tt, et) {
            if (!(tt instanceof et)) throw new TypeError("Cannot call a class as a function")
          }(this, et);
          for (var Vt = arguments.length, Ot = new Array(Vt), qt = 0; qt < Vt; qt++) Ot[qt] = arguments[qt];
          return Lt(tt = Rt(this, et, [].concat(Ot)), "state", {
            dismissed: !1,
            dismissedAtCoordinate: {
              x: 0,
              y: 0
            },
            lastBoundingBox: {
              width: -1,
              height: -1
            }
          }), Lt(tt, "handleKeyDown", (function(et) {
            var Vt, Ot, qt, Dt;
            "Escape" === et.key && tt.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x: null !== (Vt = null === (Ot = tt.props.coordinate) || void 0 === Ot ? void 0 : Ot.x) && void 0 !== Vt ? Vt : 0,
                y: null !== (qt = null === (Dt = tt.props.coordinate) || void 0 === Dt ? void 0 : Dt.y) && void 0 !== qt ? qt : 0
              }
            })
          })), tt
        }
        return function(tt, et) {
          if ("function" !== typeof et && null !== et) throw new TypeError("Super expression must either be null or a function");
          tt.prototype = Object.create(et && et.prototype, {
            constructor: {
              value: tt,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(tt, "prototype", {
            writable: !1
          }), et && Zt(tt, et)
        }(et, tt), Vt = et, (qt = [{
          key: "updateBBox",
          value: function() {
            if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
              var tt = this.wrapperNode.getBoundingClientRect();
              (Math.abs(tt.width - this.state.lastBoundingBox.width) > 1 || Math.abs(tt.height - this.state.lastBoundingBox.height) > 1) && this.setState({
                lastBoundingBox: {
                  width: tt.width,
                  height: tt.height
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
            var tt, et;
            this.props.active && this.updateBBox(), this.state.dismissed && ((null === (tt = this.props.coordinate) || void 0 === tt ? void 0 : tt.x) === this.state.dismissedAtCoordinate.x && (null === (et = this.props.coordinate) || void 0 === et ? void 0 : et.y) === this.state.dismissedAtCoordinate.y || (this.state.dismissed = !1))
          }
        }, {
          key: "render",
          value: function() {
            var tt = this,
              et = this.props,
              Vt = et.active,
              qt = et.allowEscapeViewBox,
              Dt = et.animationDuration,
              mt = et.animationEasing,
              dt = et.children,
              jt = et.coordinate,
              Ht = et.hasPayload,
              Xt = et.isAnimationActive,
              Qt = et.offset,
              lt = et.position,
              Et = et.reverseDirection,
              ft = et.useTranslate3d,
              wt = et.viewBox,
              yt = et.wrapperStyle,
              Nt = function(tt) {
                var et, Vt, Ot = tt.allowEscapeViewBox,
                  qt = tt.coordinate,
                  Dt = tt.offsetTopLeft,
                  mt = tt.position,
                  dt = tt.reverseDirection,
                  jt = tt.tooltipBox,
                  Ht = tt.useTranslate3d,
                  Xt = tt.viewBox;
                return {
                  cssProperties: jt.height > 0 && jt.width > 0 && qt ? function(tt) {
                    var et = tt.translateX,
                      Vt = tt.translateY;
                    return {
                      transform: tt.useTranslate3d ? "translate3d(".concat(et, "px, ").concat(Vt, "px, 0)") : "translate(".concat(et, "px, ").concat(Vt, "px)")
                    }
                  }({
                    translateX: et = ht({
                      allowEscapeViewBox: Ot,
                      coordinate: qt,
                      key: "x",
                      offsetTopLeft: Dt,
                      position: mt,
                      reverseDirection: dt,
                      tooltipDimension: jt.width,
                      viewBox: Xt,
                      viewBoxDimension: Xt.width
                    }),
                    translateY: Vt = ht({
                      allowEscapeViewBox: Ot,
                      coordinate: qt,
                      key: "y",
                      offsetTopLeft: Dt,
                      position: mt,
                      reverseDirection: dt,
                      tooltipDimension: jt.height,
                      viewBox: Xt,
                      viewBoxDimension: Xt.height
                    }),
                    useTranslate3d: Ht
                  }) : ut,
                  cssClasses: Kt({
                    translateX: et,
                    translateY: Vt,
                    coordinate: qt
                  })
                }
              }({
                allowEscapeViewBox: qt,
                coordinate: jt,
                offsetTopLeft: Qt,
                position: lt,
                reverseDirection: Et,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: ft,
                viewBox: wt
              }),
              Mt = Nt.cssClasses,
              bt = Nt.cssProperties,
              Jt = St(St({
                transition: Xt && Vt ? "transform ".concat(Dt, "ms ").concat(mt) : void 0
              }, bt), {}, {
                pointerEvents: "none",
                visibility: !this.state.dismissed && Vt && Ht ? "visible" : "hidden",
                position: "absolute",
                top: 0,
                left: 0
              }, yt);
            return Ot.createElement("div", {
              tabIndex: -1,
              className: Mt,
              style: Jt,
              ref: function(et) {
                tt.wrapperNode = et
              }
            }, dt)
          }
        }]) && ct(Vt.prototype, qt), Dt && ct(Vt, Dt), Object.defineProperty(Vt, "prototype", {
          writable: !1
        }), Vt;
        var Vt, qt, Dt
      }(Ot.PureComponent),
      Gt = Vt(6155),
      zt = Vt(6162);

    function ot(tt) {
      return ot = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, ot(tt)
    }

    function rt(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function Ut(tt) {
      for (var et = 1; et < arguments.length; et++) {
        var Vt = null != arguments[et] ? arguments[et] : {};
        et % 2 ? rt(Object(Vt), !0).forEach((function(et) {
          xt(tt, et, Vt[et])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : rt(Object(Vt)).forEach((function(et) {
          Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
        }))
      }
      return tt
    }

    function At(tt, et) {
      for (var Vt = 0; Vt < et.length; Vt++) {
        var Ot = et[Vt];
        Ot.enumerable = Ot.enumerable || !1, Ot.configurable = !0, "value" in Ot && (Ot.writable = !0), Object.defineProperty(tt, Tt(Ot.key), Ot)
      }
    }

    function it(tt, et, Vt) {
      return et = Bt(et),
        function(tt, et) {
          if (et && ("object" === ot(et) || "function" === typeof et)) return et;
          if (void 0 !== et) throw new TypeError("Derived constructors may only return object or undefined");
          return function(tt) {
            if (void 0 === tt) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return tt
          }(tt)
        }(tt, Yt() ? Reflect.construct(et, Vt || [], Bt(tt).constructor) : et.apply(tt, Vt))
    }

    function Yt() {
      try {
        var tt = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (tt) {}
      return (Yt = function() {
        return !!tt
      })()
    }

    function Bt(tt) {
      return Bt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(tt) {
        return tt.__proto__ || Object.getPrototypeOf(tt)
      }, Bt(tt)
    }

    function pt(tt, et) {
      return pt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(tt, et) {
        return tt.__proto__ = et, tt
      }, pt(tt, et)
    }

    function xt(tt, et, Vt) {
      return (et = Tt(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }

    function Tt(tt) {
      var et = function(tt, et) {
        if ("object" != ot(tt) || !tt) return tt;
        var Vt = tt[Symbol.toPrimitive];
        if (void 0 !== Vt) {
          var Ot = Vt.call(tt, et || "default");
          if ("object" != ot(Ot)) return Ot;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === et ? String : Number)(tt)
      }(tt, "string");
      return "symbol" == ot(et) ? et : et + ""
    }

    function gt(tt) {
      return tt.dataKey
    }
    var st = function(tt) {
      function et() {
        return function(tt, et) {
          if (!(tt instanceof et)) throw new TypeError("Cannot call a class as a function")
        }(this, et), it(this, et, arguments)
      }
      return function(tt, et) {
        if ("function" !== typeof et && null !== et) throw new TypeError("Super expression must either be null or a function");
        tt.prototype = Object.create(et && et.prototype, {
          constructor: {
            value: tt,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(tt, "prototype", {
          writable: !1
        }), et && pt(tt, et)
      }(et, tt), Vt = et, (qt = [{
        key: "render",
        value: function() {
          var tt = this,
            et = this.props,
            Vt = et.active,
            qt = et.allowEscapeViewBox,
            Dt = et.animationDuration,
            mt = et.animationEasing,
            dt = et.content,
            jt = et.coordinate,
            Ht = et.filterNull,
            Xt = et.isAnimationActive,
            Qt = et.offset,
            lt = et.payload,
            Et = et.payloadUniqBy,
            ft = et.position,
            wt = et.reverseDirection,
            yt = et.useTranslate3d,
            Nt = et.viewBox,
            bt = et.wrapperStyle,
            Jt = null !== lt && void 0 !== lt ? lt : [];
          Ht && Jt.length && (Jt = (0, zt.b)(lt.filter((function(et) {
            return null != et.value && (!0 !== et.hide || tt.props.includeHidden)
          })), Et, gt));
          var Ct = Jt.length > 0;
          return Ot.createElement(kt, {
            allowEscapeViewBox: qt,
            animationDuration: Dt,
            animationEasing: mt,
            isAnimationActive: Xt,
            active: Vt,
            coordinate: jt,
            hasPayload: Ct,
            offset: Qt,
            position: ft,
            reverseDirection: wt,
            useTranslate3d: yt,
            viewBox: Nt,
            wrapperStyle: bt
          }, function(tt, et) {
            return Ot.isValidElement(tt) ? Ot.cloneElement(tt, et) : "function" === typeof tt ? Ot.createElement(tt, et) : Ot.createElement(Mt, et)
          }(dt, Ut(Ut({}, this.props), {}, {
            payload: Jt
          })))
        }
      }]) && At(Vt.prototype, qt), Dt && At(Vt, Dt), Object.defineProperty(Vt, "prototype", {
        writable: !1
      }), Vt;
      var Vt, qt, Dt
    }(Ot.PureComponent);
    xt(st, "displayName", "Tooltip"), xt(st, "defaultProps", {
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
      isAnimationActive: !Gt.c.isSsr,
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
  6140: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ht
    });
    var Ot = Vt(63),
      qt = Vt(5263),
      Dt = Vt(5614),
      mt = ["children", "className"];

    function dt() {
      return dt = Object.assign ? Object.assign.bind() : function(tt) {
        for (var et = 1; et < arguments.length; et++) {
          var Vt = arguments[et];
          for (var Ot in Vt) Object.prototype.hasOwnProperty.call(Vt, Ot) && (tt[Ot] = Vt[Ot])
        }
        return tt
      }, dt.apply(this, arguments)
    }

    function jt(tt, et) {
      if (null == tt) return {};
      var Vt, Ot, qt = function(tt, et) {
        if (null == tt) return {};
        var Vt = {};
        for (var Ot in tt)
          if (Object.prototype.hasOwnProperty.call(tt, Ot)) {
            if (et.indexOf(Ot) >= 0) continue;
            Vt[Ot] = tt[Ot]
          } return Vt
      }(tt, et);
      if (Object.getOwnPropertySymbols) {
        var Dt = Object.getOwnPropertySymbols(tt);
        for (Ot = 0; Ot < Dt.length; Ot++) Vt = Dt[Ot], et.indexOf(Vt) >= 0 || Object.prototype.propertyIsEnumerable.call(tt, Vt) && (qt[Vt] = tt[Vt])
      }
      return qt
    }
    var Ht = Ot.forwardRef((function(tt, et) {
      var Vt = tt.children,
        Ht = tt.className,
        Xt = jt(tt, mt),
        Qt = (0, qt.b)("recharts-layer", Ht);
      return Ot.createElement("g", dt({
        className: Qt
      }, (0, Dt.b)(Xt, !0), {
        ref: et
      }), Vt)
    }))
  },
  6136: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ht
    });
    var Ot = Vt(63),
      qt = Vt(5263),
      Dt = Vt(5614),
      mt = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];

    function dt() {
      return dt = Object.assign ? Object.assign.bind() : function(tt) {
        for (var et = 1; et < arguments.length; et++) {
          var Vt = arguments[et];
          for (var Ot in Vt) Object.prototype.hasOwnProperty.call(Vt, Ot) && (tt[Ot] = Vt[Ot])
        }
        return tt
      }, dt.apply(this, arguments)
    }

    function jt(tt, et) {
      if (null == tt) return {};
      var Vt, Ot, qt = function(tt, et) {
        if (null == tt) return {};
        var Vt = {};
        for (var Ot in tt)
          if (Object.prototype.hasOwnProperty.call(tt, Ot)) {
            if (et.indexOf(Ot) >= 0) continue;
            Vt[Ot] = tt[Ot]
          } return Vt
      }(tt, et);
      if (Object.getOwnPropertySymbols) {
        var Dt = Object.getOwnPropertySymbols(tt);
        for (Ot = 0; Ot < Dt.length; Ot++) Vt = Dt[Ot], et.indexOf(Vt) >= 0 || Object.prototype.propertyIsEnumerable.call(tt, Vt) && (qt[Vt] = tt[Vt])
      }
      return qt
    }

    function Ht(tt) {
      var et = tt.children,
        Vt = tt.width,
        Ht = tt.height,
        Xt = tt.viewBox,
        Qt = tt.className,
        lt = tt.style,
        Et = tt.title,
        ft = tt.desc,
        wt = jt(tt, mt),
        yt = Xt || {
          width: Vt,
          height: Ht,
          x: 0,
          y: 0
        },
        Nt = (0, qt.b)("recharts-surface", Qt);
      return Ot.createElement("svg", dt({}, (0, Dt.b)(wt, !0, "svg"), {
        className: Nt,
        width: Vt,
        height: Ht,
        style: lt,
        viewBox: "".concat(yt.x, " ").concat(yt.y, " ").concat(yt.width, " ").concat(yt.height)
      }), Ot.createElement("title", null, Et), Ot.createElement("desc", null, ft), et)
    }
  },
  6532: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => bt,
      f: () => ut,
      i: () => ct,
      m: () => St,
      n: () => Jt,
      p: () => Wt,
      t: () => vt,
      x: () => Ct,
      A: () => ht,
      C: () => Kt
    });
    var Ot = Vt(63),
      qt = Vt(6131),
      Dt = Vt(6535),
      mt = Vt.n(Dt),
      dt = Vt(6436),
      jt = Vt.n(dt),
      Ht = Vt(5403),
      Xt = Vt.n(Ht)()((function(tt) {
        return {
          x: tt.left,
          y: tt.top,
          width: tt.width,
          height: tt.height
        }
      }), (function(tt) {
        return ["l", tt.left, "t", tt.top, "w", tt.width, "h", tt.height].join("")
      })),
      Qt = Vt(5348);
    var lt = (0, Ot.createContext)(void 0),
      Et = (0, Ot.createContext)(void 0),
      ft = (0, Ot.createContext)(void 0),
      wt = (0, Ot.createContext)({}),
      yt = (0, Ot.createContext)(void 0),
      Nt = (0, Ot.createContext)(0),
      Mt = (0, Ot.createContext)(0),
      bt = function(tt) {
        var et = tt.state,
          Vt = et.xAxisMap,
          qt = et.yAxisMap,
          Dt = et.offset,
          mt = tt.clipPathId,
          dt = tt.children,
          jt = tt.width,
          Ht = tt.height,
          Qt = Xt(Dt);
        return Ot.createElement(lt.Provider, {
          value: Vt
        }, Ot.createElement(Et.Provider, {
          value: qt
        }, Ot.createElement(wt.Provider, {
          value: Dt
        }, Ot.createElement(ft.Provider, {
          value: Qt
        }, Ot.createElement(yt.Provider, {
          value: mt
        }, Ot.createElement(Nt.Provider, {
          value: Ht
        }, Ot.createElement(Mt.Provider, {
          value: jt
        }, dt)))))))
      },
      Jt = function() {
        return (0, Ot.useContext)(yt)
      };
    var Ct = function(tt) {
        var et = (0, Ot.useContext)(lt);
        null == et && (0, qt.c)(!1);
        var Vt = et[tt];
        return null == Vt && (0, qt.c)(!1), Vt
      },
      ut = function() {
        var tt = (0, Ot.useContext)(lt);
        return (0, Qt.i)(tt)
      },
      Kt = function() {
        var tt = (0, Ot.useContext)(Et);
        return mt()(tt, (function(tt) {
          return jt()(tt.domain, Number.isFinite)
        })) || (0, Qt.i)(tt)
      },
      ht = function(tt) {
        var et = (0, Ot.useContext)(Et);
        null == et && (0, qt.c)(!1);
        var Vt = et[tt];
        return null == Vt && (0, qt.c)(!1), Vt
      },
      vt = function() {
        return (0, Ot.useContext)(ft)
      },
      Wt = function() {
        return (0, Ot.useContext)(wt)
      },
      St = function() {
        return (0, Ot.useContext)(Mt)
      },
      ct = function() {
        return (0, Ot.useContext)(Nt)
      }
  },
  6565: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => gt
    });
    var Ot = Vt(63);

    function qt() {}

    function Dt(tt, et, Vt) {
      tt._context.bezierCurveTo((2 * tt._x0 + tt._x1) / 3, (2 * tt._y0 + tt._y1) / 3, (tt._x0 + 2 * tt._x1) / 3, (tt._y0 + 2 * tt._y1) / 3, (tt._x0 + 4 * tt._x1 + et) / 6, (tt._y0 + 4 * tt._y1 + Vt) / 6)
    }

    function mt(tt) {
      this._context = tt
    }

    function dt(tt) {
      this._context = tt
    }

    function jt(tt) {
      this._context = tt
    }
    mt.prototype = {
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
            Dt(this, this._x1, this._y1);
          case 2:
            this._context.lineTo(this._x1, this._y1)
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(tt, et) {
        switch (tt = +tt, et = +et, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(tt, et) : this._context.moveTo(tt, et);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
          default:
            Dt(this, tt, et)
        }
        this._x0 = this._x1, this._x1 = tt, this._y0 = this._y1, this._y1 = et
      }
    }, dt.prototype = {
      areaStart: qt,
      areaEnd: qt,
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
      point: function(tt, et) {
        switch (tt = +tt, et = +et, this._point) {
          case 0:
            this._point = 1, this._x2 = tt, this._y2 = et;
            break;
          case 1:
            this._point = 2, this._x3 = tt, this._y3 = et;
            break;
          case 2:
            this._point = 3, this._x4 = tt, this._y4 = et, this._context.moveTo((this._x0 + 4 * this._x1 + tt) / 6, (this._y0 + 4 * this._y1 + et) / 6);
            break;
          default:
            Dt(this, tt, et)
        }
        this._x0 = this._x1, this._x1 = tt, this._y0 = this._y1, this._y1 = et
      }
    }, jt.prototype = {
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
      point: function(tt, et) {
        switch (tt = +tt, et = +et, this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var Vt = (this._x0 + 4 * this._x1 + tt) / 6,
              Ot = (this._y0 + 4 * this._y1 + et) / 6;
            this._line ? this._context.lineTo(Vt, Ot) : this._context.moveTo(Vt, Ot);
            break;
          case 3:
            this._point = 4;
          default:
            Dt(this, tt, et)
        }
        this._x0 = this._x1, this._x1 = tt, this._y0 = this._y1, this._y1 = et
      }
    };
    class Ht {
      constructor(tt, et) {
        this._context = tt, this._x = et
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
      point(tt, et) {
        switch (tt = +tt, et = +et, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(tt, et) : this._context.moveTo(tt, et);
            break;
          case 1:
            this._point = 2;
          default:
            this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + tt) / 2, this._y0, this._x0, et, tt, et) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + et) / 2, tt, this._y0, tt, et)
        }
        this._x0 = tt, this._y0 = et
      }
    }

    function Xt(tt) {
      this._context = tt
    }

    function Qt(tt) {
      this._context = tt
    }

    function lt(tt) {
      return new Qt(tt)
    }

    function Et(tt) {
      return tt < 0 ? -1 : 1
    }

    function ft(tt, et, Vt) {
      var Ot = tt._x1 - tt._x0,
        qt = et - tt._x1,
        Dt = (tt._y1 - tt._y0) / (Ot || qt < 0 && -0),
        mt = (Vt - tt._y1) / (qt || Ot < 0 && -0),
        dt = (Dt * qt + mt * Ot) / (Ot + qt);
      return (Et(Dt) + Et(mt)) * Math.min(Math.abs(Dt), Math.abs(mt), .5 * Math.abs(dt)) || 0
    }

    function wt(tt, et) {
      var Vt = tt._x1 - tt._x0;
      return Vt ? (3 * (tt._y1 - tt._y0) / Vt - et) / 2 : et
    }

    function yt(tt, et, Vt) {
      var Ot = tt._x0,
        qt = tt._y0,
        Dt = tt._x1,
        mt = tt._y1,
        dt = (Dt - Ot) / 3;
      tt._context.bezierCurveTo(Ot + dt, qt + dt * et, Dt - dt, mt - dt * Vt, Dt, mt)
    }

    function Nt(tt) {
      this._context = tt
    }

    function Mt(tt) {
      this._context = new bt(tt)
    }

    function bt(tt) {
      this._context = tt
    }

    function Jt(tt) {
      this._context = tt
    }

    function Ct(tt) {
      var et, Vt, Ot = tt.length - 1,
        qt = new Array(Ot),
        Dt = new Array(Ot),
        mt = new Array(Ot);
      for (qt[0] = 0, Dt[0] = 2, mt[0] = tt[0] + 2 * tt[1], et = 1; et < Ot - 1; ++et) qt[et] = 1, Dt[et] = 4, mt[et] = 4 * tt[et] + 2 * tt[et + 1];
      for (qt[Ot - 1] = 2, Dt[Ot - 1] = 7, mt[Ot - 1] = 8 * tt[Ot - 1] + tt[Ot], et = 1; et < Ot; ++et) Vt = qt[et] / Dt[et - 1], Dt[et] -= Vt, mt[et] -= Vt * mt[et - 1];
      for (qt[Ot - 1] = mt[Ot - 1] / Dt[Ot - 1], et = Ot - 2; et >= 0; --et) qt[et] = (mt[et] - qt[et + 1]) / Dt[et];
      for (Dt[Ot - 1] = (tt[Ot] + qt[Ot - 1]) / 2, et = 0; et < Ot - 1; ++et) Dt[et] = 2 * tt[et + 1] - qt[et + 1];
      return [qt, Dt]
    }

    function ut(tt, et) {
      this._context = tt, this._t = et
    }
    Xt.prototype = {
      areaStart: qt,
      areaEnd: qt,
      lineStart: function() {
        this._point = 0
      },
      lineEnd: function() {
        this._point && this._context.closePath()
      },
      point: function(tt, et) {
        tt = +tt, et = +et, this._point ? this._context.lineTo(tt, et) : (this._point = 1, this._context.moveTo(tt, et))
      }
    }, Qt.prototype = {
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
      point: function(tt, et) {
        switch (tt = +tt, et = +et, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(tt, et) : this._context.moveTo(tt, et);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(tt, et)
        }
      }
    }, Nt.prototype = {
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
            yt(this, this._t0, wt(this, this._t0))
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(tt, et) {
        var Vt = NaN;
        if (et = +et, (tt = +tt) !== this._x1 || et !== this._y1) {
          switch (this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(tt, et) : this._context.moveTo(tt, et);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3, yt(this, wt(this, Vt = ft(this, tt, et)), Vt);
              break;
            default:
              yt(this, this._t0, Vt = ft(this, tt, et))
          }
          this._x0 = this._x1, this._x1 = tt, this._y0 = this._y1, this._y1 = et, this._t0 = Vt
        }
      }
    }, (Mt.prototype = Object.create(Nt.prototype)).point = function(tt, et) {
      Nt.prototype.point.call(this, et, tt)
    }, bt.prototype = {
      moveTo: function(tt, et) {
        this._context.moveTo(et, tt)
      },
      closePath: function() {
        this._context.closePath()
      },
      lineTo: function(tt, et) {
        this._context.lineTo(et, tt)
      },
      bezierCurveTo: function(tt, et, Vt, Ot, qt, Dt) {
        this._context.bezierCurveTo(et, tt, Ot, Vt, Dt, qt)
      }
    }, Jt.prototype = {
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
        var tt = this._x,
          et = this._y,
          Vt = tt.length;
        if (Vt)
          if (this._line ? this._context.lineTo(tt[0], et[0]) : this._context.moveTo(tt[0], et[0]), 2 === Vt) this._context.lineTo(tt[1], et[1]);
          else
            for (var Ot = Ct(tt), qt = Ct(et), Dt = 0, mt = 1; mt < Vt; ++Dt, ++mt) this._context.bezierCurveTo(Ot[0][Dt], qt[0][Dt], Ot[1][Dt], qt[1][Dt], tt[mt], et[mt]);
        (this._line || 0 !== this._line && 1 === Vt) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
      },
      point: function(tt, et) {
        this._x.push(+tt), this._y.push(+et)
      }
    }, ut.prototype = {
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
      point: function(tt, et) {
        switch (tt = +tt, et = +et, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(tt, et) : this._context.moveTo(tt, et);
            break;
          case 1:
            this._point = 2;
          default:
            if (this._t <= 0) this._context.lineTo(this._x, et), this._context.lineTo(tt, et);
            else {
              var Vt = this._x * (1 - this._t) + tt * this._t;
              this._context.lineTo(Vt, this._y), this._context.lineTo(Vt, et)
            }
        }
        this._x = tt, this._y = et
      }
    };
    var Kt = Vt(6397),
      ht = Vt(6270),
      vt = Vt(6278);

    function Wt(tt) {
      return tt[0]
    }

    function St(tt) {
      return tt[1]
    }

    function ct(tt, et) {
      var Vt = (0, ht.b)(!0),
        Ot = null,
        qt = lt,
        Dt = null,
        mt = (0, vt.c)(dt);

      function dt(dt) {
        var jt, Ht, Xt, Qt = (dt = (0, Kt.b)(dt)).length,
          lt = !1;
        for (null == Ot && (Dt = qt(Xt = mt())), jt = 0; jt <= Qt; ++jt) !(jt < Qt && Vt(Ht = dt[jt], jt, dt)) === lt && ((lt = !lt) ? Dt.lineStart() : Dt.lineEnd()), lt && Dt.point(+tt(Ht, jt, dt), +et(Ht, jt, dt));
        if (Xt) return Dt = null, Xt + "" || null
      }
      return tt = "function" === typeof tt ? tt : void 0 === tt ? Wt : (0, ht.b)(tt), et = "function" === typeof et ? et : void 0 === et ? St : (0, ht.b)(et), dt.x = function(et) {
        return arguments.length ? (tt = "function" === typeof et ? et : (0, ht.b)(+et), dt) : tt
      }, dt.y = function(tt) {
        return arguments.length ? (et = "function" === typeof tt ? tt : (0, ht.b)(+tt), dt) : et
      }, dt.defined = function(tt) {
        return arguments.length ? (Vt = "function" === typeof tt ? tt : (0, ht.b)(!!tt), dt) : Vt
      }, dt.curve = function(tt) {
        return arguments.length ? (qt = tt, null != Ot && (Dt = qt(Ot)), dt) : qt
      }, dt.context = function(tt) {
        return arguments.length ? (null == tt ? Ot = Dt = null : Dt = qt(Ot = tt), dt) : Ot
      }, dt
    }

    function Rt(tt, et, Vt) {
      var Ot = null,
        qt = (0, ht.b)(!0),
        Dt = null,
        mt = lt,
        dt = null,
        jt = (0, vt.c)(Ht);

      function Ht(Ht) {
        var Xt, Qt, lt, Et, ft, wt = (Ht = (0, Kt.b)(Ht)).length,
          yt = !1,
          Nt = new Array(wt),
          Mt = new Array(wt);
        for (null == Dt && (dt = mt(ft = jt())), Xt = 0; Xt <= wt; ++Xt) {
          if (!(Xt < wt && qt(Et = Ht[Xt], Xt, Ht)) === yt)
            if (yt = !yt) Qt = Xt, dt.areaStart(), dt.lineStart();
            else {
              for (dt.lineEnd(), dt.lineStart(), lt = Xt - 1; lt >= Qt; --lt) dt.point(Nt[lt], Mt[lt]);
              dt.lineEnd(), dt.areaEnd()
            } yt && (Nt[Xt] = +tt(Et, Xt, Ht), Mt[Xt] = +et(Et, Xt, Ht), dt.point(Ot ? +Ot(Et, Xt, Ht) : Nt[Xt], Vt ? +Vt(Et, Xt, Ht) : Mt[Xt]))
        }
        if (ft) return dt = null, ft + "" || null
      }

      function Xt() {
        return ct().defined(qt).curve(mt).context(Dt)
      }
      return tt = "function" === typeof tt ? tt : void 0 === tt ? Wt : (0, ht.b)(+tt), et = "function" === typeof et ? et : void 0 === et ? (0, ht.b)(0) : (0, ht.b)(+et), Vt = "function" === typeof Vt ? Vt : void 0 === Vt ? St : (0, ht.b)(+Vt), Ht.x = function(et) {
        return arguments.length ? (tt = "function" === typeof et ? et : (0, ht.b)(+et), Ot = null, Ht) : tt
      }, Ht.x0 = function(et) {
        return arguments.length ? (tt = "function" === typeof et ? et : (0, ht.b)(+et), Ht) : tt
      }, Ht.x1 = function(tt) {
        return arguments.length ? (Ot = null == tt ? null : "function" === typeof tt ? tt : (0, ht.b)(+tt), Ht) : Ot
      }, Ht.y = function(tt) {
        return arguments.length ? (et = "function" === typeof tt ? tt : (0, ht.b)(+tt), Vt = null, Ht) : et
      }, Ht.y0 = function(tt) {
        return arguments.length ? (et = "function" === typeof tt ? tt : (0, ht.b)(+tt), Ht) : et
      }, Ht.y1 = function(tt) {
        return arguments.length ? (Vt = null == tt ? null : "function" === typeof tt ? tt : (0, ht.b)(+tt), Ht) : Vt
      }, Ht.lineX0 = Ht.lineY0 = function() {
        return Xt().x(tt).y(et)
      }, Ht.lineY1 = function() {
        return Xt().x(tt).y(Vt)
      }, Ht.lineX1 = function() {
        return Xt().x(Ot).y(et)
      }, Ht.defined = function(tt) {
        return arguments.length ? (qt = "function" === typeof tt ? tt : (0, ht.b)(!!tt), Ht) : qt
      }, Ht.curve = function(tt) {
        return arguments.length ? (mt = tt, null != Dt && (dt = mt(Dt)), Ht) : mt
      }, Ht.context = function(tt) {
        return arguments.length ? (null == tt ? Dt = dt = null : dt = mt(Dt = tt), Ht) : Dt
      }, Ht
    }
    var It = Vt(6231),
      Pt = Vt.n(It),
      Zt = Vt(5436),
      Lt = Vt.n(Zt),
      Ft = Vt(5263),
      kt = Vt(5631),
      Gt = Vt(5614),
      zt = Vt(5348);

    function ot(tt) {
      return ot = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, ot(tt)
    }

    function rt() {
      return rt = Object.assign ? Object.assign.bind() : function(tt) {
        for (var et = 1; et < arguments.length; et++) {
          var Vt = arguments[et];
          for (var Ot in Vt) Object.prototype.hasOwnProperty.call(Vt, Ot) && (tt[Ot] = Vt[Ot])
        }
        return tt
      }, rt.apply(this, arguments)
    }

    function Ut(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function At(tt) {
      for (var et = 1; et < arguments.length; et++) {
        var Vt = null != arguments[et] ? arguments[et] : {};
        et % 2 ? Ut(Object(Vt), !0).forEach((function(et) {
          it(tt, et, Vt[et])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : Ut(Object(Vt)).forEach((function(et) {
          Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
        }))
      }
      return tt
    }

    function it(tt, et, Vt) {
      return (et = function(tt) {
        var et = function(tt, et) {
          if ("object" != ot(tt) || !tt) return tt;
          var Vt = tt[Symbol.toPrimitive];
          if (void 0 !== Vt) {
            var Ot = Vt.call(tt, et || "default");
            if ("object" != ot(Ot)) return Ot;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === et ? String : Number)(tt)
        }(tt, "string");
        return "symbol" == ot(et) ? et : et + ""
      }(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }
    var Yt = {
        curveBasisClosed: function(tt) {
          return new dt(tt)
        },
        curveBasisOpen: function(tt) {
          return new jt(tt)
        },
        curveBasis: function(tt) {
          return new mt(tt)
        },
        curveBumpX: function(tt) {
          return new Ht(tt, !0)
        },
        curveBumpY: function(tt) {
          return new Ht(tt, !1)
        },
        curveLinearClosed: function(tt) {
          return new Xt(tt)
        },
        curveLinear: lt,
        curveMonotoneX: function(tt) {
          return new Nt(tt)
        },
        curveMonotoneY: function(tt) {
          return new Mt(tt)
        },
        curveNatural: function(tt) {
          return new Jt(tt)
        },
        curveStep: function(tt) {
          return new ut(tt, .5)
        },
        curveStepAfter: function(tt) {
          return new ut(tt, 1)
        },
        curveStepBefore: function(tt) {
          return new ut(tt, 0)
        }
      },
      Bt = function(tt) {
        return tt.x === +tt.x && tt.y === +tt.y
      },
      pt = function(tt) {
        return tt.x
      },
      xt = function(tt) {
        return tt.y
      },
      Tt = function(tt) {
        var et, Vt = tt.type,
          Ot = void 0 === Vt ? "linear" : Vt,
          qt = tt.points,
          Dt = void 0 === qt ? [] : qt,
          mt = tt.baseLine,
          dt = tt.layout,
          jt = tt.connectNulls,
          Ht = void 0 !== jt && jt,
          Xt = function(tt, et) {
            if (Lt()(tt)) return tt;
            var Vt = "curve".concat(Pt()(tt));
            return "curveMonotone" !== Vt && "curveBump" !== Vt || !et ? Yt[Vt] || lt : Yt["".concat(Vt).concat("vertical" === et ? "Y" : "X")]
          }(Ot, dt),
          Qt = Ht ? Dt.filter((function(tt) {
            return Bt(tt)
          })) : Dt;
        if (Array.isArray(mt)) {
          var Et = Ht ? mt.filter((function(tt) {
              return Bt(tt)
            })) : mt,
            ft = Qt.map((function(tt, et) {
              return At(At({}, tt), {}, {
                base: Et[et]
              })
            }));
          return (et = "vertical" === dt ? Rt().y(xt).x1(pt).x0((function(tt) {
            return tt.base.x
          })) : Rt().x(pt).y1(xt).y0((function(tt) {
            return tt.base.y
          }))).defined(Bt).curve(Xt), et(ft)
        }
        return (et = "vertical" === dt && (0, zt.A)(mt) ? Rt().y(xt).x1(pt).x0(mt) : (0, zt.A)(mt) ? Rt().x(pt).y1(xt).y0(mt) : ct().x(pt).y(xt)).defined(Bt).curve(Xt), et(Qt)
      },
      gt = function(tt) {
        var et = tt.className,
          Vt = tt.points,
          qt = tt.path,
          Dt = tt.pathRef;
        if ((!Vt || !Vt.length) && !qt) return null;
        var mt = Vt && Vt.length ? Tt(tt) : qt;
        return Ot.createElement("path", rt({}, (0, Gt.b)(tt, !1), (0, kt.i)(tt), {
          className: (0, Ft.b)("recharts-curve", et),
          d: mt,
          ref: Dt
        }))
      }
  },
  6287: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => jt
    });
    var Ot = Vt(63),
      qt = Vt(5263),
      Dt = Vt(5631),
      mt = Vt(5614);

    function dt() {
      return dt = Object.assign ? Object.assign.bind() : function(tt) {
        for (var et = 1; et < arguments.length; et++) {
          var Vt = arguments[et];
          for (var Ot in Vt) Object.prototype.hasOwnProperty.call(Vt, Ot) && (tt[Ot] = Vt[Ot])
        }
        return tt
      }, dt.apply(this, arguments)
    }
    var jt = function(tt) {
      var et = tt.cx,
        Vt = tt.cy,
        jt = tt.r,
        Ht = tt.className,
        Xt = (0, qt.b)("recharts-dot", Ht);
      return et === +et && Vt === +Vt && jt === +jt ? Ot.createElement("circle", dt({}, (0, mt.b)(tt, !1), (0, Dt.i)(tt), {
        className: Xt,
        cx: et,
        cy: Vt,
        r: jt
      })) : null
    }
  },
  6293: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Nt,
      f: () => wt
    });
    var Ot = Vt(63),
      qt = Vt(5263),
      Dt = Vt(6301),
      mt = Vt(5614);

    function dt(tt) {
      return dt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, dt(tt)
    }

    function jt() {
      return jt = Object.assign ? Object.assign.bind() : function(tt) {
        for (var et = 1; et < arguments.length; et++) {
          var Vt = arguments[et];
          for (var Ot in Vt) Object.prototype.hasOwnProperty.call(Vt, Ot) && (tt[Ot] = Vt[Ot])
        }
        return tt
      }, jt.apply(this, arguments)
    }

    function Ht(tt, et) {
      return function(tt) {
        if (Array.isArray(tt)) return tt
      }(tt) || function(tt, et) {
        var Vt = null == tt ? null : "undefined" != typeof Symbol && tt[Symbol.iterator] || tt["@@iterator"];
        if (null != Vt) {
          var Ot, qt, Dt, mt, dt = [],
            jt = !0,
            Ht = !1;
          try {
            if (Dt = (Vt = Vt.call(tt)).next, 0 === et) {
              if (Object(Vt) !== Vt) return;
              jt = !1
            } else
              for (; !(jt = (Ot = Dt.call(Vt)).done) && (dt.push(Ot.value), dt.length !== et); jt = !0);
          } catch (tt) {
            Ht = !0, qt = tt
          } finally {
            try {
              if (!jt && null != Vt.return && (mt = Vt.return(), Object(mt) !== mt)) return
            } finally {
              if (Ht) throw qt
            }
          }
          return dt
        }
      }(tt, et) || function(tt, et) {
        if (!tt) return;
        if ("string" === typeof tt) return Xt(tt, et);
        var Vt = Object.prototype.toString.call(tt).slice(8, -1);
        "Object" === Vt && tt.constructor && (Vt = tt.constructor.name);
        if ("Map" === Vt || "Set" === Vt) return Array.from(tt);
        if ("Arguments" === Vt || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Vt)) return Xt(tt, et)
      }(tt, et) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Xt(tt, et) {
      (null == et || et > tt.length) && (et = tt.length);
      for (var Vt = 0, Ot = new Array(et); Vt < et; Vt++) Ot[Vt] = tt[Vt];
      return Ot
    }

    function Qt(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function lt(tt) {
      for (var et = 1; et < arguments.length; et++) {
        var Vt = null != arguments[et] ? arguments[et] : {};
        et % 2 ? Qt(Object(Vt), !0).forEach((function(et) {
          Et(tt, et, Vt[et])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : Qt(Object(Vt)).forEach((function(et) {
          Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
        }))
      }
      return tt
    }

    function Et(tt, et, Vt) {
      return (et = function(tt) {
        var et = function(tt, et) {
          if ("object" != dt(tt) || !tt) return tt;
          var Vt = tt[Symbol.toPrimitive];
          if (void 0 !== Vt) {
            var Ot = Vt.call(tt, et || "default");
            if ("object" != dt(Ot)) return Ot;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === et ? String : Number)(tt)
        }(tt, "string");
        return "symbol" == dt(et) ? et : et + ""
      }(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }
    var ft = function(tt, et, Vt, Ot, qt) {
        var Dt, mt = Math.min(Math.abs(Vt) / 2, Math.abs(Ot) / 2),
          dt = Ot >= 0 ? 1 : -1,
          jt = Vt >= 0 ? 1 : -1,
          Ht = Ot >= 0 && Vt >= 0 || Ot < 0 && Vt < 0 ? 1 : 0;
        if (mt > 0 && qt instanceof Array) {
          for (var Xt = [0, 0, 0, 0], Qt = 0; Qt < 4; Qt++) Xt[Qt] = qt[Qt] > mt ? mt : qt[Qt];
          Dt = "M".concat(tt, ",").concat(et + dt * Xt[0]), Xt[0] > 0 && (Dt += "A ".concat(Xt[0], ",").concat(Xt[0], ",0,0,").concat(Ht, ",").concat(tt + jt * Xt[0], ",").concat(et)), Dt += "L ".concat(tt + Vt - jt * Xt[1], ",").concat(et), Xt[1] > 0 && (Dt += "A ".concat(Xt[1], ",").concat(Xt[1], ",0,0,").concat(Ht, ",\n        ").concat(tt + Vt, ",").concat(et + dt * Xt[1])), Dt += "L ".concat(tt + Vt, ",").concat(et + Ot - dt * Xt[2]), Xt[2] > 0 && (Dt += "A ".concat(Xt[2], ",").concat(Xt[2], ",0,0,").concat(Ht, ",\n        ").concat(tt + Vt - jt * Xt[2], ",").concat(et + Ot)), Dt += "L ".concat(tt + jt * Xt[3], ",").concat(et + Ot), Xt[3] > 0 && (Dt += "A ".concat(Xt[3], ",").concat(Xt[3], ",0,0,").concat(Ht, ",\n        ").concat(tt, ",").concat(et + Ot - dt * Xt[3])), Dt += "Z"
        } else if (mt > 0 && qt === +qt && qt > 0) {
          var lt = Math.min(mt, qt);
          Dt = "M ".concat(tt, ",").concat(et + dt * lt, "\n            A ").concat(lt, ",").concat(lt, ",0,0,").concat(Ht, ",").concat(tt + jt * lt, ",").concat(et, "\n            L ").concat(tt + Vt - jt * lt, ",").concat(et, "\n            A ").concat(lt, ",").concat(lt, ",0,0,").concat(Ht, ",").concat(tt + Vt, ",").concat(et + dt * lt, "\n            L ").concat(tt + Vt, ",").concat(et + Ot - dt * lt, "\n            A ").concat(lt, ",").concat(lt, ",0,0,").concat(Ht, ",").concat(tt + Vt - jt * lt, ",").concat(et + Ot, "\n            L ").concat(tt + jt * lt, ",").concat(et + Ot, "\n            A ").concat(lt, ",").concat(lt, ",0,0,").concat(Ht, ",").concat(tt, ",").concat(et + Ot - dt * lt, " Z")
        } else Dt = "M ".concat(tt, ",").concat(et, " h ").concat(Vt, " v ").concat(Ot, " h ").concat(-Vt, " Z");
        return Dt
      },
      wt = function(tt, et) {
        if (!tt || !et) return !1;
        var Vt = tt.x,
          Ot = tt.y,
          qt = et.x,
          Dt = et.y,
          mt = et.width,
          dt = et.height;
        if (Math.abs(mt) > 0 && Math.abs(dt) > 0) {
          var jt = Math.min(qt, qt + mt),
            Ht = Math.max(qt, qt + mt),
            Xt = Math.min(Dt, Dt + dt),
            Qt = Math.max(Dt, Dt + dt);
          return Vt >= jt && Vt <= Ht && Ot >= Xt && Ot <= Qt
        }
        return !1
      },
      yt = {
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
      Nt = function(tt) {
        var et = lt(lt({}, yt), tt),
          Vt = (0, Ot.useRef)(),
          dt = Ht((0, Ot.useState)(-1), 2),
          Xt = dt[0],
          Qt = dt[1];
        (0, Ot.useEffect)((function() {
          if (Vt.current && Vt.current.getTotalLength) try {
            var tt = Vt.current.getTotalLength();
            tt && Qt(tt)
          } catch (et) {}
        }), []);
        var Et = et.x,
          wt = et.y,
          Nt = et.width,
          Mt = et.height,
          bt = et.radius,
          Jt = et.className,
          Ct = et.animationEasing,
          ut = et.animationDuration,
          Kt = et.animationBegin,
          ht = et.isAnimationActive,
          vt = et.isUpdateAnimationActive;
        if (Et !== +Et || wt !== +wt || Nt !== +Nt || Mt !== +Mt || 0 === Nt || 0 === Mt) return null;
        var Wt = (0, qt.b)("recharts-rectangle", Jt);
        return vt ? Ot.createElement(Dt.c, {
          canBegin: Xt > 0,
          from: {
            width: Nt,
            height: Mt,
            x: Et,
            y: wt
          },
          to: {
            width: Nt,
            height: Mt,
            x: Et,
            y: wt
          },
          duration: ut,
          animationEasing: Ct,
          isActive: vt
        }, (function(tt) {
          var qt = tt.width,
            dt = tt.height,
            Ht = tt.x,
            Qt = tt.y;
          return Ot.createElement(Dt.c, {
            canBegin: Xt > 0,
            from: "0px ".concat(-1 === Xt ? 1 : Xt, "px"),
            to: "".concat(Xt, "px 0px"),
            attributeName: "strokeDasharray",
            XE: Kt,
            duration: ut,
            isActive: ht,
            easing: Ct
          }, Ot.createElement("path", jt({}, (0, mt.b)(et, !0), {
            className: Wt,
            d: ft(Ht, Qt, qt, dt, bt),
            ref: Vt
          })))
        })) : Ot.createElement("path", jt({}, (0, mt.b)(et, !0), {
          className: Wt,
          d: ft(Et, wt, Nt, Mt, bt)
        }))
      }
  },
  6501: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => yt
    });
    var Ot = Vt(63),
      qt = Vt(5263),
      Dt = Vt(5614),
      mt = Vt(6411),
      dt = Vt(5348);

    function jt(tt) {
      return jt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, jt(tt)
    }

    function Ht() {
      return Ht = Object.assign ? Object.assign.bind() : function(tt) {
        for (var et = 1; et < arguments.length; et++) {
          var Vt = arguments[et];
          for (var Ot in Vt) Object.prototype.hasOwnProperty.call(Vt, Ot) && (tt[Ot] = Vt[Ot])
        }
        return tt
      }, Ht.apply(this, arguments)
    }

    function Xt(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function Qt(tt) {
      for (var et = 1; et < arguments.length; et++) {
        var Vt = null != arguments[et] ? arguments[et] : {};
        et % 2 ? Xt(Object(Vt), !0).forEach((function(et) {
          lt(tt, et, Vt[et])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : Xt(Object(Vt)).forEach((function(et) {
          Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
        }))
      }
      return tt
    }

    function lt(tt, et, Vt) {
      return (et = function(tt) {
        var et = function(tt, et) {
          if ("object" != jt(tt) || !tt) return tt;
          var Vt = tt[Symbol.toPrimitive];
          if (void 0 !== Vt) {
            var Ot = Vt.call(tt, et || "default");
            if ("object" != jt(Ot)) return Ot;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === et ? String : Number)(tt)
        }(tt, "string");
        return "symbol" == jt(et) ? et : et + ""
      }(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }
    var Et = function(tt) {
        var et = tt.cx,
          Vt = tt.cy,
          Ot = tt.radius,
          qt = tt.angle,
          Dt = tt.sign,
          dt = tt.isExternal,
          jt = tt.cornerRadius,
          Ht = tt.cornerIsExternal,
          Xt = jt * (dt ? 1 : -1) + Ot,
          Qt = Math.asin(jt / Xt) / mt.b,
          lt = Ht ? qt : qt + Dt * Qt,
          Et = Ht ? qt - Dt * Qt : qt;
        return {
          center: (0, mt.f)(et, Vt, Xt, lt),
          circleTangency: (0, mt.f)(et, Vt, Ot, lt),
          lineTangency: (0, mt.f)(et, Vt, Xt * Math.cos(Qt * mt.b), Et),
          nX: Qt
        }
      },
      ft = function(tt) {
        var et = tt.cx,
          Vt = tt.cy,
          Ot = tt.innerRadius,
          qt = tt.outerRadius,
          Dt = tt.startAngle,
          jt = function(tt, et) {
            return (0, dt.H)(et - tt) * Math.min(Math.abs(et - tt), 359.999)
          }(Dt, tt.endAngle),
          Ht = Dt + jt,
          Xt = (0, mt.f)(et, Vt, qt, Dt),
          Qt = (0, mt.f)(et, Vt, qt, Ht),
          lt = "M ".concat(Xt.x, ",").concat(Xt.y, "\n    A ").concat(qt, ",").concat(qt, ",0,\n    ").concat(+(Math.abs(jt) > 180), ",").concat(+(Dt > Ht), ",\n    ").concat(Qt.x, ",").concat(Qt.y, "\n  ");
        if (Ot > 0) {
          var Et = (0, mt.f)(et, Vt, Ot, Dt),
            ft = (0, mt.f)(et, Vt, Ot, Ht);
          lt += "L ".concat(ft.x, ",").concat(ft.y, "\n            A ").concat(Ot, ",").concat(Ot, ",0,\n            ").concat(+(Math.abs(jt) > 180), ",").concat(+(Dt <= Ht), ",\n            ").concat(Et.x, ",").concat(Et.y, " Z")
        } else lt += "L ".concat(et, ",").concat(Vt, " Z");
        return lt
      },
      wt = {
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
      yt = function(tt) {
        var et = Qt(Qt({}, wt), tt),
          Vt = et.cx,
          mt = et.cy,
          jt = et.innerRadius,
          Xt = et.outerRadius,
          lt = et.cornerRadius,
          yt = et.forceCornerRadius,
          Nt = et.cornerIsExternal,
          Mt = et.startAngle,
          bt = et.endAngle,
          Jt = et.className;
        if (Xt < jt || Mt === bt) return null;
        var Ct, ut = (0, qt.b)("recharts-sector", Jt),
          Kt = Xt - jt,
          ht = (0, dt.m)(lt, Kt, 0, !0);
        return Ct = ht > 0 && Math.abs(Mt - bt) < 360 ? function(tt) {
          var et = tt.cx,
            Vt = tt.cy,
            Ot = tt.innerRadius,
            qt = tt.outerRadius,
            Dt = tt.cornerRadius,
            mt = tt.forceCornerRadius,
            jt = tt.cornerIsExternal,
            Ht = tt.startAngle,
            Xt = tt.endAngle,
            Qt = (0, dt.H)(Xt - Ht),
            lt = Et({
              cx: et,
              cy: Vt,
              radius: qt,
              angle: Ht,
              sign: Qt,
              cornerRadius: Dt,
              cornerIsExternal: jt
            }),
            wt = lt.circleTangency,
            yt = lt.lineTangency,
            Nt = lt.nX,
            Mt = Et({
              cx: et,
              cy: Vt,
              radius: qt,
              angle: Xt,
              sign: -Qt,
              cornerRadius: Dt,
              cornerIsExternal: jt
            }),
            bt = Mt.circleTangency,
            Jt = Mt.lineTangency,
            Ct = Mt.nX,
            ut = jt ? Math.abs(Ht - Xt) : Math.abs(Ht - Xt) - Nt - Ct;
          if (ut < 0) return mt ? "M ".concat(yt.x, ",").concat(yt.y, "\n        a").concat(Dt, ",").concat(Dt, ",0,0,1,").concat(2 * Dt, ",0\n        a").concat(Dt, ",").concat(Dt, ",0,0,1,").concat(2 * -Dt, ",0\n      ") : ft({
            cx: et,
            cy: Vt,
            innerRadius: Ot,
            outerRadius: qt,
            startAngle: Ht,
            endAngle: Xt
          });
          var Kt = "M ".concat(yt.x, ",").concat(yt.y, "\n    A").concat(Dt, ",").concat(Dt, ",0,0,").concat(+(Qt < 0), ",").concat(wt.x, ",").concat(wt.y, "\n    A").concat(qt, ",").concat(qt, ",0,").concat(+(ut > 180), ",").concat(+(Qt < 0), ",").concat(bt.x, ",").concat(bt.y, "\n    A").concat(Dt, ",").concat(Dt, ",0,0,").concat(+(Qt < 0), ",").concat(Jt.x, ",").concat(Jt.y, "\n  ");
          if (Ot > 0) {
            var ht = Et({
                cx: et,
                cy: Vt,
                radius: Ot,
                angle: Ht,
                sign: Qt,
                isExternal: !0,
                cornerRadius: Dt,
                cornerIsExternal: jt
              }),
              vt = ht.circleTangency,
              Wt = ht.lineTangency,
              St = ht.nX,
              ct = Et({
                cx: et,
                cy: Vt,
                radius: Ot,
                angle: Xt,
                sign: -Qt,
                isExternal: !0,
                cornerRadius: Dt,
                cornerIsExternal: jt
              }),
              Rt = ct.circleTangency,
              It = ct.lineTangency,
              Pt = ct.nX,
              Zt = jt ? Math.abs(Ht - Xt) : Math.abs(Ht - Xt) - St - Pt;
            if (Zt < 0 && 0 === Dt) return "".concat(Kt, "L").concat(et, ",").concat(Vt, "Z");
            Kt += "L".concat(It.x, ",").concat(It.y, "\n      A").concat(Dt, ",").concat(Dt, ",0,0,").concat(+(Qt < 0), ",").concat(Rt.x, ",").concat(Rt.y, "\n      A").concat(Ot, ",").concat(Ot, ",0,").concat(+(Zt > 180), ",").concat(+(Qt > 0), ",").concat(vt.x, ",").concat(vt.y, "\n      A").concat(Dt, ",").concat(Dt, ",0,0,").concat(+(Qt < 0), ",").concat(Wt.x, ",").concat(Wt.y, "Z")
          } else Kt += "L".concat(et, ",").concat(Vt, "Z");
          return Kt
        }({
          cx: Vt,
          cy: mt,
          innerRadius: jt,
          outerRadius: Xt,
          cornerRadius: Math.min(ht, Kt / 2),
          forceCornerRadius: yt,
          cornerIsExternal: Nt,
          startAngle: Mt,
          endAngle: bt
        }) : ft({
          cx: Vt,
          cy: mt,
          innerRadius: jt,
          outerRadius: Xt,
          startAngle: Mt,
          endAngle: bt
        }), Ot.createElement("path", Ht({}, (0, Dt.b)(et, !0), {
          className: ut,
          d: Ct,
          role: "img"
        }))
      }
  },
  6228: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => At
    });
    var Ot = Vt(63),
      qt = Vt(6231),
      Dt = Vt.n(qt);
    Math.abs, Math.atan2;
    const mt = Math.cos,
      dt = (Math.max, Math.min, Math.sin),
      jt = Math.sqrt,
      Ht = Math.PI,
      Xt = 2 * Ht;
    const Qt = {
        draw(tt, et) {
          const Vt = jt(et / Ht);
          tt.moveTo(Vt, 0), tt.arc(0, 0, Vt, 0, Xt)
        }
      },
      lt = {
        draw(tt, et) {
          const Vt = jt(et / 5) / 2;
          tt.moveTo(-3 * Vt, -Vt), tt.lineTo(-Vt, -Vt), tt.lineTo(-Vt, -3 * Vt), tt.lineTo(Vt, -3 * Vt), tt.lineTo(Vt, -Vt), tt.lineTo(3 * Vt, -Vt), tt.lineTo(3 * Vt, Vt), tt.lineTo(Vt, Vt), tt.lineTo(Vt, 3 * Vt), tt.lineTo(-Vt, 3 * Vt), tt.lineTo(-Vt, Vt), tt.lineTo(-3 * Vt, Vt), tt.closePath()
        }
      },
      Et = jt(1 / 3),
      ft = 2 * Et,
      wt = {
        draw(tt, et) {
          const Vt = jt(et / ft),
            Ot = Vt * Et;
          tt.moveTo(0, -Vt), tt.lineTo(Ot, 0), tt.lineTo(0, Vt), tt.lineTo(-Ot, 0), tt.closePath()
        }
      },
      yt = {
        draw(tt, et) {
          const Vt = jt(et),
            Ot = -Vt / 2;
          tt.rect(Ot, Ot, Vt, Vt)
        }
      },
      Nt = dt(Ht / 10) / dt(7 * Ht / 10),
      Mt = dt(Xt / 10) * Nt,
      bt = -mt(Xt / 10) * Nt,
      Jt = {
        draw(tt, et) {
          const Vt = jt(.8908130915292852 * et),
            Ot = Mt * Vt,
            qt = bt * Vt;
          tt.moveTo(0, -Vt), tt.lineTo(Ot, qt);
          for (let Dt = 1; Dt < 5; ++Dt) {
            const et = Xt * Dt / 5,
              jt = mt(et),
              Ht = dt(et);
            tt.lineTo(Ht * Vt, -jt * Vt), tt.lineTo(jt * Ot - Ht * qt, Ht * Ot + jt * qt)
          }
          tt.closePath()
        }
      },
      Ct = jt(3),
      ut = {
        draw(tt, et) {
          const Vt = -jt(et / (3 * Ct));
          tt.moveTo(0, 2 * Vt), tt.lineTo(-Ct * Vt, -Vt), tt.lineTo(Ct * Vt, -Vt), tt.closePath()
        }
      },
      Kt = -.5,
      ht = jt(3) / 2,
      vt = 1 / jt(12),
      Wt = 3 * (vt / 2 + 1),
      St = {
        draw(tt, et) {
          const Vt = jt(et / Wt),
            Ot = Vt / 2,
            qt = Vt * vt,
            Dt = Ot,
            mt = Vt * vt + Vt,
            dt = -Dt,
            Ht = mt;
          tt.moveTo(Ot, qt), tt.lineTo(Dt, mt), tt.lineTo(dt, Ht), tt.lineTo(Kt * Ot - ht * qt, ht * Ot + Kt * qt), tt.lineTo(Kt * Dt - ht * mt, ht * Dt + Kt * mt), tt.lineTo(Kt * dt - ht * Ht, ht * dt + Kt * Ht), tt.lineTo(Kt * Ot + ht * qt, Kt * qt - ht * Ot), tt.lineTo(Kt * Dt + ht * mt, Kt * mt - ht * Dt), tt.lineTo(Kt * dt + ht * Ht, Kt * Ht - ht * dt), tt.closePath()
        }
      };
    var ct = Vt(6270),
      Rt = Vt(6278);
    jt(3), jt(3);
    var It = Vt(5263),
      Pt = Vt(5614);

    function Zt(tt) {
      return Zt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, Zt(tt)
    }
    var Lt = ["type", "size", "sizeType"];

    function Ft() {
      return Ft = Object.assign ? Object.assign.bind() : function(tt) {
        for (var et = 1; et < arguments.length; et++) {
          var Vt = arguments[et];
          for (var Ot in Vt) Object.prototype.hasOwnProperty.call(Vt, Ot) && (tt[Ot] = Vt[Ot])
        }
        return tt
      }, Ft.apply(this, arguments)
    }

    function kt(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function Gt(tt) {
      for (var et = 1; et < arguments.length; et++) {
        var Vt = null != arguments[et] ? arguments[et] : {};
        et % 2 ? kt(Object(Vt), !0).forEach((function(et) {
          zt(tt, et, Vt[et])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : kt(Object(Vt)).forEach((function(et) {
          Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
        }))
      }
      return tt
    }

    function zt(tt, et, Vt) {
      return (et = function(tt) {
        var et = function(tt, et) {
          if ("object" != Zt(tt) || !tt) return tt;
          var Vt = tt[Symbol.toPrimitive];
          if (void 0 !== Vt) {
            var Ot = Vt.call(tt, et || "default");
            if ("object" != Zt(Ot)) return Ot;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === et ? String : Number)(tt)
        }(tt, "string");
        return "symbol" == Zt(et) ? et : et + ""
      }(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }

    function ot(tt, et) {
      if (null == tt) return {};
      var Vt, Ot, qt = function(tt, et) {
        if (null == tt) return {};
        var Vt = {};
        for (var Ot in tt)
          if (Object.prototype.hasOwnProperty.call(tt, Ot)) {
            if (et.indexOf(Ot) >= 0) continue;
            Vt[Ot] = tt[Ot]
          } return Vt
      }(tt, et);
      if (Object.getOwnPropertySymbols) {
        var Dt = Object.getOwnPropertySymbols(tt);
        for (Ot = 0; Ot < Dt.length; Ot++) Vt = Dt[Ot], et.indexOf(Vt) >= 0 || Object.prototype.propertyIsEnumerable.call(tt, Vt) && (qt[Vt] = tt[Vt])
      }
      return qt
    }
    var rt = {
        symbolCircle: Qt,
        symbolCross: lt,
        symbolDiamond: wt,
        symbolSquare: yt,
        symbolStar: Jt,
        symbolTriangle: ut,
        symbolWye: St
      },
      Ut = Math.PI / 180,
      At = function(tt) {
        var et = tt.type,
          Vt = void 0 === et ? "circle" : et,
          qt = tt.size,
          mt = void 0 === qt ? 64 : qt,
          dt = tt.sizeType,
          jt = void 0 === dt ? "area" : dt,
          Ht = Gt(Gt({}, ot(tt, Lt)), {}, {
            type: Vt,
            size: mt,
            sizeType: jt
          }),
          Xt = Ht.className,
          lt = Ht.cx,
          Et = Ht.cy,
          ft = (0, Pt.b)(Ht, !0);
        return lt === +lt && Et === +Et && mt === +mt ? Ot.createElement("path", Ft({}, ft, {
          className: (0, It.b)("recharts-symbols", Xt),
          transform: "translate(".concat(lt, ", ").concat(Et, ")"),
          d: function() {
            var tt = function(tt) {
                var et = "symbol".concat(Dt()(tt));
                return rt[et] || Qt
              }(Vt),
              et = function(tt, et) {
                let Vt = null,
                  Ot = (0, Rt.c)(qt);

                function qt() {
                  let qt;
                  if (Vt || (Vt = qt = Ot()), tt.apply(this, arguments).draw(Vt, +et.apply(this, arguments)), qt) return Vt = null, qt + "" || null
                }
                return tt = "function" === typeof tt ? tt : (0, ct.b)(tt || Qt), et = "function" === typeof et ? et : (0, ct.b)(void 0 === et ? 64 : +et), qt.type = function(et) {
                  return arguments.length ? (tt = "function" === typeof et ? et : (0, ct.b)(et), qt) : tt
                }, qt.size = function(tt) {
                  return arguments.length ? (et = "function" === typeof tt ? tt : (0, ct.b)(+tt), qt) : et
                }, qt.context = function(tt) {
                  return arguments.length ? (Vt = null == tt ? null : tt, qt) : Vt
                }, qt
              }().type(tt).size(function(tt, et, Vt) {
                if ("area" === et) return tt;
                switch (Vt) {
                  case "cross":
                    return 5 * tt * tt / 9;
                  case "diamond":
                    return .5 * tt * tt / Math.sqrt(3);
                  case "square":
                    return tt * tt;
                  case "star":
                    var Ot = 18 * Ut;
                    return 1.25 * tt * tt * (Math.tan(Ot) - Math.tan(2 * Ot) * Math.pow(Math.tan(Ot), 2));
                  case "triangle":
                    return Math.sqrt(3) * tt * tt / 4;
                  case "wye":
                    return (21 - 10 * Math.sqrt(3)) * tt * tt / 8;
                  default:
                    return Math.PI * tt * tt / 4
                }
              }(mt, jt, Vt));
            return et()
          }()
        })) : null
      };
    At.registerSymbol = function(tt, et) {
      rt["symbol".concat(Dt()(tt))] = et
    }
  },
  6476: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => zt,
      f: () => Bt,
      j: () => ot,
      m: () => rt,
      n: () => Ut
    });
    var Ot = Vt(63),
      qt = Vt(5436),
      Dt = Vt.n(qt),
      mt = Vt(6483),
      dt = Vt.n(mt),
      jt = Vt(6493),
      Ht = Vt.n(jt),
      Xt = Vt(6377),
      Qt = Vt.n(Xt),
      lt = Vt(6293),
      Et = Vt(5263),
      ft = Vt(6301),
      wt = Vt(5614);

    function yt(tt) {
      return yt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, yt(tt)
    }

    function Nt() {
      return Nt = Object.assign ? Object.assign.bind() : function(tt) {
        for (var et = 1; et < arguments.length; et++) {
          var Vt = arguments[et];
          for (var Ot in Vt) Object.prototype.hasOwnProperty.call(Vt, Ot) && (tt[Ot] = Vt[Ot])
        }
        return tt
      }, Nt.apply(this, arguments)
    }

    function Mt(tt, et) {
      return function(tt) {
        if (Array.isArray(tt)) return tt
      }(tt) || function(tt, et) {
        var Vt = null == tt ? null : "undefined" != typeof Symbol && tt[Symbol.iterator] || tt["@@iterator"];
        if (null != Vt) {
          var Ot, qt, Dt, mt, dt = [],
            jt = !0,
            Ht = !1;
          try {
            if (Dt = (Vt = Vt.call(tt)).next, 0 === et) {
              if (Object(Vt) !== Vt) return;
              jt = !1
            } else
              for (; !(jt = (Ot = Dt.call(Vt)).done) && (dt.push(Ot.value), dt.length !== et); jt = !0);
          } catch (tt) {
            Ht = !0, qt = tt
          } finally {
            try {
              if (!jt && null != Vt.return && (mt = Vt.return(), Object(mt) !== mt)) return
            } finally {
              if (Ht) throw qt
            }
          }
          return dt
        }
      }(tt, et) || function(tt, et) {
        if (!tt) return;
        if ("string" === typeof tt) return bt(tt, et);
        var Vt = Object.prototype.toString.call(tt).slice(8, -1);
        "Object" === Vt && tt.constructor && (Vt = tt.constructor.name);
        if ("Map" === Vt || "Set" === Vt) return Array.from(tt);
        if ("Arguments" === Vt || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Vt)) return bt(tt, et)
      }(tt, et) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function bt(tt, et) {
      (null == et || et > tt.length) && (et = tt.length);
      for (var Vt = 0, Ot = new Array(et); Vt < et; Vt++) Ot[Vt] = tt[Vt];
      return Ot
    }

    function Jt(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function Ct(tt) {
      for (var et = 1; et < arguments.length; et++) {
        var Vt = null != arguments[et] ? arguments[et] : {};
        et % 2 ? Jt(Object(Vt), !0).forEach((function(et) {
          ut(tt, et, Vt[et])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : Jt(Object(Vt)).forEach((function(et) {
          Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
        }))
      }
      return tt
    }

    function ut(tt, et, Vt) {
      return (et = function(tt) {
        var et = function(tt, et) {
          if ("object" != yt(tt) || !tt) return tt;
          var Vt = tt[Symbol.toPrimitive];
          if (void 0 !== Vt) {
            var Ot = Vt.call(tt, et || "default");
            if ("object" != yt(Ot)) return Ot;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === et ? String : Number)(tt)
        }(tt, "string");
        return "symbol" == yt(et) ? et : et + ""
      }(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }
    var Kt = function(tt, et, Vt, Ot, qt) {
        var Dt, mt = Vt - Ot;
        return Dt = "M ".concat(tt, ",").concat(et), Dt += "L ".concat(tt + Vt, ",").concat(et), Dt += "L ".concat(tt + Vt - mt / 2, ",").concat(et + qt), Dt += "L ".concat(tt + Vt - mt / 2 - Ot, ",").concat(et + qt), Dt += "L ".concat(tt, ",").concat(et, " Z")
      },
      ht = {
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
      vt = function(tt) {
        var et = Ct(Ct({}, ht), tt),
          Vt = (0, Ot.useRef)(),
          qt = Mt((0, Ot.useState)(-1), 2),
          Dt = qt[0],
          mt = qt[1];
        (0, Ot.useEffect)((function() {
          if (Vt.current && Vt.current.getTotalLength) try {
            var tt = Vt.current.getTotalLength();
            tt && mt(tt)
          } catch (et) {}
        }), []);
        var dt = et.x,
          jt = et.y,
          Ht = et.upperWidth,
          Xt = et.lowerWidth,
          Qt = et.height,
          lt = et.className,
          yt = et.animationEasing,
          bt = et.animationDuration,
          Jt = et.animationBegin,
          ut = et.isUpdateAnimationActive;
        if (dt !== +dt || jt !== +jt || Ht !== +Ht || Xt !== +Xt || Qt !== +Qt || 0 === Ht && 0 === Xt || 0 === Qt) return null;
        var vt = (0, Et.b)("recharts-trapezoid", lt);
        return ut ? Ot.createElement(ft.c, {
          canBegin: Dt > 0,
          from: {
            upperWidth: 0,
            lowerWidth: 0,
            height: Qt,
            x: dt,
            y: jt
          },
          to: {
            upperWidth: Ht,
            lowerWidth: Xt,
            height: Qt,
            x: dt,
            y: jt
          },
          duration: bt,
          animationEasing: yt,
          isActive: ut
        }, (function(tt) {
          var qt = tt.upperWidth,
            mt = tt.lowerWidth,
            dt = tt.height,
            jt = tt.x,
            Ht = tt.y;
          return Ot.createElement(ft.c, {
            canBegin: Dt > 0,
            from: "0px ".concat(-1 === Dt ? 1 : Dt, "px"),
            to: "".concat(Dt, "px 0px"),
            attributeName: "strokeDasharray",
            XE: Jt,
            duration: bt,
            easing: yt
          }, Ot.createElement("path", Nt({}, (0, wt.b)(et, !0), {
            className: vt,
            d: Kt(jt, Ht, qt, mt, dt),
            ref: Vt
          })))
        })) : Ot.createElement("g", null, Ot.createElement("path", Nt({}, (0, wt.b)(et, !0), {
          className: vt,
          d: Kt(dt, jt, Ht, Xt, Qt)
        })))
      },
      Wt = Vt(6501),
      St = Vt(6140),
      ct = Vt(6228),
      Rt = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];

    function It(tt) {
      return It = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, It(tt)
    }

    function Pt(tt, et) {
      if (null == tt) return {};
      var Vt, Ot, qt = function(tt, et) {
        if (null == tt) return {};
        var Vt = {};
        for (var Ot in tt)
          if (Object.prototype.hasOwnProperty.call(tt, Ot)) {
            if (et.indexOf(Ot) >= 0) continue;
            Vt[Ot] = tt[Ot]
          } return Vt
      }(tt, et);
      if (Object.getOwnPropertySymbols) {
        var Dt = Object.getOwnPropertySymbols(tt);
        for (Ot = 0; Ot < Dt.length; Ot++) Vt = Dt[Ot], et.indexOf(Vt) >= 0 || Object.prototype.propertyIsEnumerable.call(tt, Vt) && (qt[Vt] = tt[Vt])
      }
      return qt
    }

    function Zt(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function Lt(tt) {
      for (var et = 1; et < arguments.length; et++) {
        var Vt = null != arguments[et] ? arguments[et] : {};
        et % 2 ? Zt(Object(Vt), !0).forEach((function(et) {
          Ft(tt, et, Vt[et])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : Zt(Object(Vt)).forEach((function(et) {
          Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
        }))
      }
      return tt
    }

    function Ft(tt, et, Vt) {
      return (et = function(tt) {
        var et = function(tt, et) {
          if ("object" != It(tt) || !tt) return tt;
          var Vt = tt[Symbol.toPrimitive];
          if (void 0 !== Vt) {
            var Ot = Vt.call(tt, et || "default");
            if ("object" != It(Ot)) return Ot;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === et ? String : Number)(tt)
        }(tt, "string");
        return "symbol" == It(et) ? et : et + ""
      }(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }

    function kt(tt, et) {
      return Lt(Lt({}, et), tt)
    }

    function Gt(tt) {
      var et = tt.shapeType,
        Vt = tt.elementProps;
      switch (et) {
        case "rectangle":
          return Ot.createElement(lt.d, Vt);
        case "trapezoid":
          return Ot.createElement(vt, Vt);
        case "sector":
          return Ot.createElement(Wt.b, Vt);
        case "symbols":
          if (function(tt) {
              return "symbols" === tt
            }(et)) return Ot.createElement(ct.b, Vt);
          break;
        default:
          return null
      }
    }

    function zt(tt) {
      var et, Vt = tt.option,
        qt = tt.shapeType,
        mt = tt.propTransformer,
        jt = void 0 === mt ? kt : mt,
        Xt = tt.activeClassName,
        Qt = void 0 === Xt ? "recharts-active-shape" : Xt,
        lt = tt.isActive,
        Et = Pt(tt, Rt);
      if ((0, Ot.isValidElement)(Vt)) et = (0, Ot.cloneElement)(Vt, Lt(Lt({}, Et), function(tt) {
        return (0, Ot.isValidElement)(tt) ? tt.props : tt
      }(Vt)));
      else if (Dt()(Vt)) et = Vt(Et);
      else if (dt()(Vt) && !Ht()(Vt)) {
        var ft = jt(Vt, Et);
        et = Ot.createElement(Gt, {
          shapeType: qt,
          elementProps: ft
        })
      } else {
        var wt = Et;
        et = Ot.createElement(Gt, {
          shapeType: qt,
          elementProps: wt
        })
      }
      return lt ? Ot.createElement(St.e, {
        className: Qt
      }, et) : et
    }

    function ot(tt, et) {
      return null != et && "trapezoids" in tt.props
    }

    function rt(tt, et) {
      return null != et && "sectors" in tt.props
    }

    function Ut(tt, et) {
      return null != et && "points" in tt.props
    }

    function At(tt, et) {
      var Vt, Ot, qt = tt.x === (null === et || void 0 === et || null === (Vt = et.labelViewBox) || void 0 === Vt ? void 0 : Vt.x) || tt.x === et.x,
        Dt = tt.y === (null === et || void 0 === et || null === (Ot = et.labelViewBox) || void 0 === Ot ? void 0 : Ot.y) || tt.y === et.y;
      return qt && Dt
    }

    function it(tt, et) {
      var Vt = tt.endAngle === et.endAngle,
        Ot = tt.startAngle === et.startAngle;
      return Vt && Ot
    }

    function Yt(tt, et) {
      var Vt = tt.x === et.x,
        Ot = tt.y === et.y,
        qt = tt.z === et.z;
      return Vt && Ot && qt
    }

    function Bt(tt) {
      var et = tt.activeTooltipItem,
        Vt = tt.graphicalItem,
        Ot = tt.itemData,
        qt = function(tt, et) {
          var Vt;
          return ot(tt, et) ? Vt = "trapezoids" : rt(tt, et) ? Vt = "sectors" : Ut(tt, et) && (Vt = "points"), Vt
        }(Vt, et),
        Dt = function(tt, et) {
          var Vt, Ot;
          return ot(tt, et) ? null === (Vt = et.tooltipPayload) || void 0 === Vt || null === (Vt = Vt[0]) || void 0 === Vt || null === (Vt = Vt.payload) || void 0 === Vt ? void 0 : Vt.payload : rt(tt, et) ? null === (Ot = et.tooltipPayload) || void 0 === Ot || null === (Ot = Ot[0]) || void 0 === Ot || null === (Ot = Ot.payload) || void 0 === Ot ? void 0 : Ot.payload : Ut(tt, et) ? et.payload : {}
        }(Vt, et),
        mt = Ot.filter((function(tt, Ot) {
          var mt = Qt()(Dt, tt),
            dt = Vt.props[qt].filter((function(tt) {
              var Ot = function(tt, et) {
                var Vt;
                return ot(tt, et) ? Vt = At : rt(tt, et) ? Vt = it : Ut(tt, et) && (Vt = Yt), Vt
              }(Vt, et);
              return Ot(tt, et)
            })),
            jt = Vt.props[qt].indexOf(dt[dt.length - 1]);
          return mt && Ot === jt
        }));
      return Ot.indexOf(mt[mt.length - 1])
    }
  },
  6423: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ct,
      d: () => Nt,
      h: () => ut,
      l: () => bt,
      m: () => Mt
    });
    var Ot = Vt(6425),
      qt = Vt.n(Ot),
      Dt = Vt(6436),
      mt = Vt.n(Dt),
      dt = Vt(6317),
      jt = Vt(5614),
      Ht = Vt(5348),
      Xt = Vt(6449);

    function Qt(tt) {
      return Qt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, Qt(tt)
    }

    function lt(tt, et) {
      for (var Vt = 0; Vt < et.length; Vt++) {
        var Ot = et[Vt];
        Ot.enumerable = Ot.enumerable || !1, Ot.configurable = !0, "value" in Ot && (Ot.writable = !0), Object.defineProperty(tt, yt(Ot.key), Ot)
      }
    }

    function Et(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function ft(tt) {
      for (var et = 1; et < arguments.length; et++) {
        var Vt = null != arguments[et] ? arguments[et] : {};
        et % 2 ? Et(Object(Vt), !0).forEach((function(et) {
          wt(tt, et, Vt[et])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : Et(Object(Vt)).forEach((function(et) {
          Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
        }))
      }
      return tt
    }

    function wt(tt, et, Vt) {
      return (et = yt(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }

    function yt(tt) {
      var et = function(tt, et) {
        if ("object" != Qt(tt) || !tt) return tt;
        var Vt = tt[Symbol.toPrimitive];
        if (void 0 !== Vt) {
          var Ot = Vt.call(tt, et || "default");
          if ("object" != Qt(Ot)) return Ot;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === et ? String : Number)(tt)
      }(tt, "string");
      return "symbol" == Qt(et) ? et : et + ""
    }
    var Nt = function(tt, et, Vt, Ot, qt) {
        var Dt = tt.width,
          mt = tt.height,
          Qt = tt.layout,
          lt = tt.children,
          Et = Object.keys(et),
          yt = {
            left: Vt.left,
            leftMirror: Vt.left,
            right: Dt - Vt.right,
            rightMirror: Dt - Vt.right,
            top: Vt.top,
            topMirror: Vt.top,
            bottom: mt - Vt.bottom,
            bottomMirror: mt - Vt.bottom
          },
          Nt = !!(0, jt.e)(lt, Xt.e);
        return Et.reduce((function(Dt, mt) {
          var jt, Xt, lt, Et, Mt, bt = et[mt],
            Jt = bt.orientation,
            Ct = bt.domain,
            ut = bt.padding,
            Kt = void 0 === ut ? {} : ut,
            ht = bt.mirror,
            vt = bt.reversed,
            Wt = "".concat(Jt).concat(ht ? "Mirror" : "");
          if ("number" === bt.type && ("gap" === bt.padding || "no-gap" === bt.padding)) {
            var St = Ct[1] - Ct[0],
              ct = 1 / 0,
              Rt = bt.categoricalDomain.sort(Ht.d);
            if (Rt.forEach((function(tt, et) {
                et > 0 && (ct = Math.min((tt || 0) - (Rt[et - 1] || 0), ct))
              })), Number.isFinite(ct)) {
              var It = ct / St,
                Pt = "vertical" === bt.layout ? Vt.height : Vt.width;
              if ("gap" === bt.padding && (jt = It * Pt / 2), "no-gap" === bt.padding) {
                var Zt = (0, Ht.m)(tt.barCategoryGap, It * Pt),
                  Lt = It * Pt / 2;
                jt = Lt - Zt - (Lt - Zt) / Pt * Zt
              }
            }
          }
          Xt = "xAxis" === Ot ? [Vt.left + (Kt.left || 0) + (jt || 0), Vt.left + Vt.width - (Kt.right || 0) - (jt || 0)] : "yAxis" === Ot ? "horizontal" === Qt ? [Vt.top + Vt.height - (Kt.bottom || 0), Vt.top + (Kt.top || 0)] : [Vt.top + (Kt.top || 0) + (jt || 0), Vt.top + Vt.height - (Kt.bottom || 0) - (jt || 0)] : bt.range, vt && (Xt = [Xt[1], Xt[0]]);
          var Ft = (0, dt.jb)(bt, qt, Nt),
            kt = Ft.scale,
            Gt = Ft.realScaleType;
          kt.domain(Ct).range(Xt), (0, dt.e)(kt);
          var zt = (0, dt.T)(kt, ft(ft({}, bt), {}, {
            realScaleType: Gt
          }));
          "xAxis" === Ot ? (Mt = "top" === Jt && !ht || "bottom" === Jt && ht, lt = Vt.left, Et = yt[Wt] - Mt * bt.height) : "yAxis" === Ot && (Mt = "left" === Jt && !ht || "right" === Jt && ht, lt = yt[Wt] - Mt * bt.width, Et = Vt.top);
          var ot = ft(ft(ft({}, bt), zt), {}, {
            realScaleType: Gt,
            x: lt,
            y: Et,
            scale: kt,
            width: "xAxis" === Ot ? Vt.width : bt.width,
            height: "yAxis" === Ot ? Vt.height : bt.height
          });
          return ot.bandSize = (0, dt.l)(ot, zt), bt.hide || "xAxis" !== Ot ? bt.hide || (yt[Wt] += (Mt ? -1 : 1) * ot.width) : yt[Wt] += (Mt ? -1 : 1) * ot.height, ft(ft({}, Dt), {}, wt({}, mt, ot))
        }), {})
      },
      Mt = function(tt, et) {
        var Vt = tt.x,
          Ot = tt.y,
          qt = et.x,
          Dt = et.y;
        return {
          x: Math.min(Vt, qt),
          y: Math.min(Ot, Dt),
          width: Math.abs(qt - Vt),
          height: Math.abs(Dt - Ot)
        }
      },
      bt = function(tt) {
        var et = tt.x1,
          Vt = tt.y1,
          Ot = tt.x2,
          qt = tt.y2;
        return Mt({
          x: et,
          y: Vt
        }, {
          x: Ot,
          y: qt
        })
      },
      Jt = function() {
        function tt(et) {
          ! function(tt, et) {
            if (!(tt instanceof et)) throw new TypeError("Cannot call a class as a function")
          }(this, tt), this.scale = et
        }
        return et = tt, Vt = [{
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
          value: function(tt) {
            var et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              Vt = et.bandAware,
              Ot = et.position;
            if (void 0 !== tt) {
              if (Ot) switch (Ot) {
                case "start":
                default:
                  return this.scale(tt);
                case "middle":
                  var qt = this.bandwidth ? this.bandwidth() / 2 : 0;
                  return this.scale(tt) + qt;
                case "end":
                  var Dt = this.bandwidth ? this.bandwidth() : 0;
                  return this.scale(tt) + Dt
              }
              if (Vt) {
                var mt = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(tt) + mt
              }
              return this.scale(tt)
            }
          }
        }, {
          key: "isInRange",
          value: function(tt) {
            var et = this.range(),
              Vt = et[0],
              Ot = et[et.length - 1];
            return Vt <= Ot ? tt >= Vt && tt <= Ot : tt >= Ot && tt <= Vt
          }
        }], Ot = [{
          key: "create",
          value: function(et) {
            return new tt(et)
          }
        }], Vt && lt(et.prototype, Vt), Ot && lt(et, Ot), Object.defineProperty(et, "prototype", {
          writable: !1
        }), et;
        var et, Vt, Ot
      }();
    wt(Jt, "EPS", 1e-4);
    var Ct = function(tt) {
      var et = Object.keys(tt).reduce((function(et, Vt) {
        return ft(ft({}, et), {}, wt({}, Vt, Jt.create(tt[Vt])))
      }), {});
      return ft(ft({}, et), {}, {
        apply: function(tt) {
          var Vt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            Ot = Vt.bandAware,
            Dt = Vt.position;
          return qt()(tt, (function(tt, Vt) {
            return et[Vt].apply(tt, {
              bandAware: Ot,
              position: Dt
            })
          }))
        },
        isInRange: function(tt) {
          return mt()(tt, (function(tt, Vt) {
            return et[Vt].isInRange(tt)
          }))
        }
      })
    };
    var ut = function(tt) {
      var et = tt.width,
        Vt = tt.height,
        Ot = function(tt) {
          return (tt % 180 + 180) % 180
        }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0),
        qt = Ot * Math.PI / 180,
        Dt = Math.atan(Vt / et),
        mt = qt > Dt && qt < Math.PI - Dt ? Vt / Math.sin(qt) : et / Math.cos(qt);
      return Math.abs(mt)
    }
  },
  6317: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Zm,
      d: () => cm,
      e: () => Ym,
      g: () => Um,
      j: () => Bm,
      l: () => dd,
      o: () => Pm,
      r: () => Im,
      u: () => ed,
      y: () => td,
      z: () => nm,
      D: () => zm,
      F: () => Sm,
      J: () => km,
      L: () => Od,
      N: () => Rm,
      O: () => gm,
      P: () => Vd,
      S: () => om,
      T: () => sm,
      V: () => Hd,
      Z: () => Wm,
      ab: () => Gm,
      eb: () => jd,
      ib: () => Fm,
      jb: () => Am,
      lb: () => md,
      ob: () => pm
    });
    var Ot = {};
    Vt.r(Ot), Vt.d(Ot, {
      scaleBand: () => qt.b,
      scaleDiverging: () => HD,
      scaleDivergingLog: () => XD,
      scaleDivergingPow: () => lD,
      scaleDivergingSqrt: () => ED,
      scaleDivergingSymlog: () => QD,
      scaleIdentity: () => Te,
      scaleImplicit: () => XV.f,
      scaleLinear: () => xe,
      scaleLog: () => DV,
      scaleOrdinal: () => XV.c,
      scalePoint: () => qt.d,
      scalePow: () => wV,
      scaleQuantile: () => WV,
      scaleQuantize: () => SV,
      scaleRadial: () => aV,
      scaleSequential: () => VD,
      scaleSequentialLog: () => OD,
      scaleSequentialPow: () => DD,
      scaleSequentialQuantile: () => dD,
      scaleSequentialSqrt: () => mD,
      scaleSequentialSymlog: () => qD,
      scaleSqrt: () => yV,
      scaleSymlog: () => HV,
      scaleThreshold: () => cV,
      scaleTime: () => sq,
      scaleUtc: () => nq,
      tickFormat: () => Be
    });
    var qt = Vt(6323);
    const Dt = Math.sqrt(50),
      mt = Math.sqrt(10),
      dt = Math.sqrt(2);

    function jt(tt, et, Vt) {
      const Ot = (et - tt) / Math.max(0, Vt),
        qt = Math.floor(Math.log10(Ot)),
        Ht = Ot / Math.pow(10, qt),
        Xt = Ht >= Dt ? 10 : Ht >= mt ? 5 : Ht >= dt ? 2 : 1;
      let Qt, lt, Et;
      return qt < 0 ? (Et = Math.pow(10, -qt) / Xt, Qt = Math.round(tt * Et), lt = Math.round(et * Et), Qt / Et < tt && ++Qt, lt / Et > et && --lt, Et = -Et) : (Et = Math.pow(10, qt) * Xt, Qt = Math.round(tt / Et), lt = Math.round(et / Et), Qt * Et < tt && ++Qt, lt * Et > et && --lt), lt < Qt && .5 <= Vt && Vt < 2 ? jt(tt, et, 2 * Vt) : [Qt, lt, Et]
    }

    function Ht(tt, et, Vt) {
      if (!((Vt = +Vt) > 0)) return [];
      if ((tt = +tt) === (et = +et)) return [tt];
      const Ot = et < tt,
        [qt, Dt, mt] = Ot ? jt(et, tt, Vt) : jt(tt, et, Vt);
      if (!(Dt >= qt)) return [];
      const dt = Dt - qt + 1,
        Ht = new Array(dt);
      if (Ot)
        if (mt < 0)
          for (let jt = 0; jt < dt; ++jt) Ht[jt] = (Dt - jt) / -mt;
        else
          for (let jt = 0; jt < dt; ++jt) Ht[jt] = (Dt - jt) * mt;
      else if (mt < 0)
        for (let jt = 0; jt < dt; ++jt) Ht[jt] = (qt + jt) / -mt;
      else
        for (let jt = 0; jt < dt; ++jt) Ht[jt] = (qt + jt) * mt;
      return Ht
    }

    function Xt(tt, et, Vt) {
      return jt(tt = +tt, et = +et, Vt = +Vt)[2]
    }

    function Qt(tt, et, Vt) {
      Vt = +Vt;
      const Ot = (et = +et) < (tt = +tt),
        qt = Ot ? Xt(et, tt, Vt) : Xt(tt, et, Vt);
      return (Ot ? -1 : 1) * (qt < 0 ? 1 / -qt : qt)
    }

    function lt(tt, et) {
      return null == tt || null == et ? NaN : tt < et ? -1 : tt > et ? 1 : tt >= et ? 0 : NaN
    }

    function Et(tt, et) {
      return null == tt || null == et ? NaN : et < tt ? -1 : et > tt ? 1 : et >= tt ? 0 : NaN
    }

    function ft(tt) {
      let et, Vt, Ot;

      function qt(tt, Ot) {
        let qt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Dt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : tt.length;
        if (qt < Dt) {
          if (0 !== et(Ot, Ot)) return Dt;
          do {
            const et = qt + Dt >>> 1;
            Vt(tt[et], Ot) < 0 ? qt = et + 1 : Dt = et
          } while (qt < Dt)
        }
        return qt
      }
      return 2 !== tt.length ? (et = lt, Vt = (et, Vt) => lt(tt(et), Vt), Ot = (et, Vt) => tt(et) - Vt) : (et = tt === lt || tt === Et ? tt : wt, Vt = tt, Ot = tt), {
        left: qt,
        center: function(tt, et) {
          let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          const Dt = qt(tt, et, Vt, (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : tt.length) - 1);
          return Dt > Vt && Ot(tt[Dt - 1], et) > -Ot(tt[Dt], et) ? Dt - 1 : Dt
        },
        right: function(tt, Ot) {
          let qt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Dt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : tt.length;
          if (qt < Dt) {
            if (0 !== et(Ot, Ot)) return Dt;
            do {
              const et = qt + Dt >>> 1;
              Vt(tt[et], Ot) <= 0 ? qt = et + 1 : Dt = et
            } while (qt < Dt)
          }
          return qt
        }
      }
    }

    function wt() {
      return 0
    }

    function yt(tt) {
      return null === tt ? NaN : +tt
    }
    const Nt = ft(lt),
      Mt = Nt.right,
      bt = (Nt.left, ft(yt).center, Mt);

    function Jt(tt, et, Vt) {
      tt.prototype = et.prototype = Vt, Vt.constructor = tt
    }

    function Ct(tt, et) {
      var Vt = Object.create(tt.prototype);
      for (var Ot in et) Vt[Ot] = et[Ot];
      return Vt
    }

    function ut() {}
    var Kt = .7,
      ht = 1 / Kt,
      vt = "\\s*([+-]?\\d+)\\s*",
      Wt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      St = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      ct = /^#([0-9a-f]{3,8})$/,
      Rt = new RegExp(`^rgb\\(${vt},${vt},${vt}\\)$`),
      It = new RegExp(`^rgb\\(${St},${St},${St}\\)$`),
      Pt = new RegExp(`^rgba\\(${vt},${vt},${vt},${Wt}\\)$`),
      Zt = new RegExp(`^rgba\\(${St},${St},${St},${Wt}\\)$`),
      Lt = new RegExp(`^hsl\\(${Wt},${St},${St}\\)$`),
      Ft = new RegExp(`^hsla\\(${Wt},${St},${St},${Wt}\\)$`),
      kt = {
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

    function Gt() {
      return this.rgb().formatHex()
    }

    function zt() {
      return this.rgb().formatRgb()
    }

    function ot(tt) {
      var et, Vt;
      return tt = (tt + "").trim().toLowerCase(), (et = ct.exec(tt)) ? (Vt = et[1].length, et = parseInt(et[1], 16), 6 === Vt ? rt(et) : 3 === Vt ? new it(et >> 8 & 15 | et >> 4 & 240, et >> 4 & 15 | 240 & et, (15 & et) << 4 | 15 & et, 1) : 8 === Vt ? Ut(et >> 24 & 255, et >> 16 & 255, et >> 8 & 255, (255 & et) / 255) : 4 === Vt ? Ut(et >> 12 & 15 | et >> 8 & 240, et >> 8 & 15 | et >> 4 & 240, et >> 4 & 15 | 240 & et, ((15 & et) << 4 | 15 & et) / 255) : null) : (et = Rt.exec(tt)) ? new it(et[1], et[2], et[3], 1) : (et = It.exec(tt)) ? new it(255 * et[1] / 100, 255 * et[2] / 100, 255 * et[3] / 100, 1) : (et = Pt.exec(tt)) ? Ut(et[1], et[2], et[3], et[4]) : (et = Zt.exec(tt)) ? Ut(255 * et[1] / 100, 255 * et[2] / 100, 255 * et[3] / 100, et[4]) : (et = Lt.exec(tt)) ? gt(et[1], et[2] / 100, et[3] / 100, 1) : (et = Ft.exec(tt)) ? gt(et[1], et[2] / 100, et[3] / 100, et[4]) : kt.hasOwnProperty(tt) ? rt(kt[tt]) : "transparent" === tt ? new it(NaN, NaN, NaN, 0) : null
    }

    function rt(tt) {
      return new it(tt >> 16 & 255, tt >> 8 & 255, 255 & tt, 1)
    }

    function Ut(tt, et, Vt, Ot) {
      return Ot <= 0 && (tt = et = Vt = NaN), new it(tt, et, Vt, Ot)
    }

    function At(tt, et, Vt, Ot) {
      return 1 === arguments.length ? ((qt = tt) instanceof ut || (qt = ot(qt)), qt ? new it((qt = qt.rgb()).r, qt.g, qt.b, qt.opacity) : new it) : new it(tt, et, Vt, null == Ot ? 1 : Ot);
      var qt
    }

    function it(tt, et, Vt, Ot) {
      this.r = +tt, this.g = +et, this.b = +Vt, this.opacity = +Ot
    }

    function Yt() {
      return `#${Tt(this.r)}${Tt(this.g)}${Tt(this.b)}`
    }

    function Bt() {
      const tt = pt(this.opacity);
      return `${1===tt?"rgb(":"rgba("}${xt(this.r)}, ${xt(this.g)}, ${xt(this.b)}${1===tt?")":`, ${tt})`}`
    }

    function pt(tt) {
      return isNaN(tt) ? 1 : Math.max(0, Math.min(1, tt))
    }

    function xt(tt) {
      return Math.max(0, Math.min(255, Math.round(tt) || 0))
    }

    function Tt(tt) {
      return ((tt = xt(tt)) < 16 ? "0" : "") + tt.toString(16)
    }

    function gt(tt, et, Vt, Ot) {
      return Ot <= 0 ? tt = et = Vt = NaN : Vt <= 0 || Vt >= 1 ? tt = et = NaN : et <= 0 && (tt = NaN), new nt(tt, et, Vt, Ot)
    }

    function st(tt) {
      if (tt instanceof nt) return new nt(tt.h, tt.s, tt.l, tt.opacity);
      if (tt instanceof ut || (tt = ot(tt)), !tt) return new nt;
      if (tt instanceof nt) return tt;
      var et = (tt = tt.rgb()).r / 255,
        Vt = tt.g / 255,
        Ot = tt.b / 255,
        qt = Math.min(et, Vt, Ot),
        Dt = Math.max(et, Vt, Ot),
        mt = NaN,
        dt = Dt - qt,
        jt = (Dt + qt) / 2;
      return dt ? (mt = et === Dt ? (Vt - Ot) / dt + 6 * (Vt < Ot) : Vt === Dt ? (Ot - et) / dt + 2 : (et - Vt) / dt + 4, dt /= jt < .5 ? Dt + qt : 2 - Dt - qt, mt *= 60) : dt = jt > 0 && jt < 1 ? 0 : mt, new nt(mt, dt, jt, tt.opacity)
    }

    function nt(tt, et, Vt, Ot) {
      this.h = +tt, this.s = +et, this.l = +Vt, this.opacity = +Ot
    }

    function te(tt) {
      return (tt = (tt || 0) % 360) < 0 ? tt + 360 : tt
    }

    function ee(tt) {
      return Math.max(0, Math.min(1, tt || 0))
    }

    function Ve(tt, et, Vt) {
      return 255 * (tt < 60 ? et + (Vt - et) * tt / 60 : tt < 180 ? Vt : tt < 240 ? et + (Vt - et) * (240 - tt) / 60 : et)
    }

    function Oe(tt, et, Vt, Ot, qt) {
      var Dt = tt * tt,
        mt = Dt * tt;
      return ((1 - 3 * tt + 3 * Dt - mt) * et + (4 - 6 * Dt + 3 * mt) * Vt + (1 + 3 * tt + 3 * Dt - 3 * mt) * Ot + mt * qt) / 6
    }
    Jt(ut, ot, {
      copy(tt) {
        return Object.assign(new this.constructor, this, tt)
      },
      displayable() {
        return this.rgb().displayable()
      },
      hex: Gt,
      formatHex: Gt,
      formatHex8: function() {
        return this.rgb().formatHex8()
      },
      formatHsl: function() {
        return st(this).formatHsl()
      },
      formatRgb: zt,
      toString: zt
    }), Jt(it, At, Ct(ut, {
      brighter(tt) {
        return tt = null == tt ? ht : Math.pow(ht, tt), new it(this.r * tt, this.g * tt, this.b * tt, this.opacity)
      },
      darker(tt) {
        return tt = null == tt ? Kt : Math.pow(Kt, tt), new it(this.r * tt, this.g * tt, this.b * tt, this.opacity)
      },
      rgb() {
        return this
      },
      clamp() {
        return new it(xt(this.r), xt(this.g), xt(this.b), pt(this.opacity))
      },
      displayable() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
      },
      hex: Yt,
      formatHex: Yt,
      formatHex8: function() {
        return `#${Tt(this.r)}${Tt(this.g)}${Tt(this.b)}${Tt(255*(isNaN(this.opacity)?1:this.opacity))}`
      },
      formatRgb: Bt,
      toString: Bt
    })), Jt(nt, (function(tt, et, Vt, Ot) {
      return 1 === arguments.length ? st(tt) : new nt(tt, et, Vt, null == Ot ? 1 : Ot)
    }), Ct(ut, {
      brighter(tt) {
        return tt = null == tt ? ht : Math.pow(ht, tt), new nt(this.h, this.s, this.l * tt, this.opacity)
      },
      darker(tt) {
        return tt = null == tt ? Kt : Math.pow(Kt, tt), new nt(this.h, this.s, this.l * tt, this.opacity)
      },
      rgb() {
        var tt = this.h % 360 + 360 * (this.h < 0),
          et = isNaN(tt) || isNaN(this.s) ? 0 : this.s,
          Vt = this.l,
          Ot = Vt + (Vt < .5 ? Vt : 1 - Vt) * et,
          qt = 2 * Vt - Ot;
        return new it(Ve(tt >= 240 ? tt - 240 : tt + 120, qt, Ot), Ve(tt, qt, Ot), Ve(tt < 120 ? tt + 240 : tt - 120, qt, Ot), this.opacity)
      },
      clamp() {
        return new nt(te(this.h), ee(this.s), ee(this.l), pt(this.opacity))
      },
      displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
      },
      formatHsl() {
        const tt = pt(this.opacity);
        return `${1===tt?"hsl(":"hsla("}${te(this.h)}, ${100*ee(this.s)}%, ${100*ee(this.l)}%${1===tt?")":`, ${tt})`}`
      }
    }));
    const qe = tt => () => tt;

    function De(tt, et) {
      return function(Vt) {
        return tt + Vt * et
      }
    }

    function me(tt) {
      return 1 === (tt = +tt) ? de : function(et, Vt) {
        return Vt - et ? function(tt, et, Vt) {
          return tt = Math.pow(tt, Vt), et = Math.pow(et, Vt) - tt, Vt = 1 / Vt,
            function(Ot) {
              return Math.pow(tt + Ot * et, Vt)
            }
        }(et, Vt, tt) : qe(isNaN(et) ? Vt : et)
      }
    }

    function de(tt, et) {
      var Vt = et - tt;
      return Vt ? De(tt, Vt) : qe(isNaN(tt) ? et : tt)
    }
    const je = function tt(et) {
      var Vt = me(et);

      function Ot(tt, et) {
        var Ot = Vt((tt = At(tt)).r, (et = At(et)).r),
          qt = Vt(tt.g, et.g),
          Dt = Vt(tt.b, et.b),
          mt = de(tt.opacity, et.opacity);
        return function(et) {
          return tt.r = Ot(et), tt.g = qt(et), tt.b = Dt(et), tt.opacity = mt(et), tt + ""
        }
      }
      return Ot.gamma = tt, Ot
    }(1);

    function He(tt) {
      return function(et) {
        var Vt, Ot, qt = et.length,
          Dt = new Array(qt),
          mt = new Array(qt),
          dt = new Array(qt);
        for (Vt = 0; Vt < qt; ++Vt) Ot = At(et[Vt]), Dt[Vt] = Ot.r || 0, mt[Vt] = Ot.g || 0, dt[Vt] = Ot.b || 0;
        return Dt = tt(Dt), mt = tt(mt), dt = tt(dt), Ot.opacity = 1,
          function(tt) {
            return Ot.r = Dt(tt), Ot.g = mt(tt), Ot.b = dt(tt), Ot + ""
          }
      }
    }
    He((function(tt) {
      var et = tt.length - 1;
      return function(Vt) {
        var Ot = Vt <= 0 ? Vt = 0 : Vt >= 1 ? (Vt = 1, et - 1) : Math.floor(Vt * et),
          qt = tt[Ot],
          Dt = tt[Ot + 1],
          mt = Ot > 0 ? tt[Ot - 1] : 2 * qt - Dt,
          dt = Ot < et - 1 ? tt[Ot + 2] : 2 * Dt - qt;
        return Oe((Vt - Ot / et) * et, mt, qt, Dt, dt)
      }
    })), He((function(tt) {
      var et = tt.length;
      return function(Vt) {
        var Ot = Math.floor(((Vt %= 1) < 0 ? ++Vt : Vt) * et),
          qt = tt[(Ot + et - 1) % et],
          Dt = tt[Ot % et],
          mt = tt[(Ot + 1) % et],
          dt = tt[(Ot + 2) % et];
        return Oe((Vt - Ot / et) * et, qt, Dt, mt, dt)
      }
    }));

    function Xe(tt, et) {
      var Vt, Ot = et ? et.length : 0,
        qt = tt ? Math.min(Ot, tt.length) : 0,
        Dt = new Array(qt),
        mt = new Array(Ot);
      for (Vt = 0; Vt < qt; ++Vt) Dt[Vt] = ae(tt[Vt], et[Vt]);
      for (; Vt < Ot; ++Vt) mt[Vt] = et[Vt];
      return function(tt) {
        for (Vt = 0; Vt < qt; ++Vt) mt[Vt] = Dt[Vt](tt);
        return mt
      }
    }

    function Qe(tt, et) {
      var Vt = new Date;
      return tt = +tt, et = +et,
        function(Ot) {
          return Vt.setTime(tt * (1 - Ot) + et * Ot), Vt
        }
    }

    function le(tt, et) {
      return tt = +tt, et = +et,
        function(Vt) {
          return tt * (1 - Vt) + et * Vt
        }
    }

    function Ee(tt, et) {
      var Vt, Ot = {},
        qt = {};
      for (Vt in null !== tt && "object" === typeof tt || (tt = {}), null !== et && "object" === typeof et || (et = {}), et) Vt in tt ? Ot[Vt] = ae(tt[Vt], et[Vt]) : qt[Vt] = et[Vt];
      return function(tt) {
        for (Vt in Ot) qt[Vt] = Ot[Vt](tt);
        return qt
      }
    }
    var fe = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      we = new RegExp(fe.source, "g");

    function ye(tt, et) {
      var Vt, Ot, qt, Dt = fe.lastIndex = we.lastIndex = 0,
        mt = -1,
        dt = [],
        jt = [];
      for (tt += "", et += "";
        (Vt = fe.exec(tt)) && (Ot = we.exec(et));)(qt = Ot.index) > Dt && (qt = et.slice(Dt, qt), dt[mt] ? dt[mt] += qt : dt[++mt] = qt), (Vt = Vt[0]) === (Ot = Ot[0]) ? dt[mt] ? dt[mt] += Ot : dt[++mt] = Ot : (dt[++mt] = null, jt.push({
        i: mt,
        x: le(Vt, Ot)
      })), Dt = we.lastIndex;
      return Dt < et.length && (qt = et.slice(Dt), dt[mt] ? dt[mt] += qt : dt[++mt] = qt), dt.length < 2 ? jt[0] ? function(tt) {
        return function(et) {
          return tt(et) + ""
        }
      }(jt[0].x) : function(tt) {
        return function() {
          return tt
        }
      }(et) : (et = jt.length, function(tt) {
        for (var Vt, Ot = 0; Ot < et; ++Ot) dt[(Vt = jt[Ot]).i] = Vt.x(tt);
        return dt.join("")
      })
    }

    function Ne(tt, et) {
      et || (et = []);
      var Vt, Ot = tt ? Math.min(et.length, tt.length) : 0,
        qt = et.slice();
      return function(Dt) {
        for (Vt = 0; Vt < Ot; ++Vt) qt[Vt] = tt[Vt] * (1 - Dt) + et[Vt] * Dt;
        return qt
      }
    }

    function ae(tt, et) {
      var Vt, Ot, qt = typeof et;
      return null == et || "boolean" === qt ? qe(et) : ("number" === qt ? le : "string" === qt ? (Vt = ot(et)) ? (et = Vt, je) : ye : et instanceof ot ? je : et instanceof Date ? Qe : (Ot = et, !ArrayBuffer.isView(Ot) || Ot instanceof DataView ? Array.isArray(et) ? Xe : "function" !== typeof et.valueOf && "function" !== typeof et.toString || isNaN(et) ? Ee : le : Ne))(tt, et)
    }

    function Me(tt, et) {
      return tt = +tt, et = +et,
        function(Vt) {
          return Math.round(tt * (1 - Vt) + et * Vt)
        }
    }

    function be(tt) {
      return +tt
    }
    var Je = [0, 1];

    function Ce(tt) {
      return tt
    }

    function ue(tt, et) {
      return (et -= tt = +tt) ? function(Vt) {
        return (Vt - tt) / et
      } : (Vt = isNaN(et) ? NaN : .5, function() {
        return Vt
      });
      var Vt
    }

    function Ke(tt, et, Vt) {
      var Ot = tt[0],
        qt = tt[1],
        Dt = et[0],
        mt = et[1];
      return qt < Ot ? (Ot = ue(qt, Ot), Dt = Vt(mt, Dt)) : (Ot = ue(Ot, qt), Dt = Vt(Dt, mt)),
        function(tt) {
          return Dt(Ot(tt))
        }
    }

    function he(tt, et, Vt) {
      var Ot = Math.min(tt.length, et.length) - 1,
        qt = new Array(Ot),
        Dt = new Array(Ot),
        mt = -1;
      for (tt[Ot] < tt[0] && (tt = tt.slice().reverse(), et = et.slice().reverse()); ++mt < Ot;) qt[mt] = ue(tt[mt], tt[mt + 1]), Dt[mt] = Vt(et[mt], et[mt + 1]);
      return function(et) {
        var Vt = bt(tt, et, 1, Ot) - 1;
        return Dt[Vt](qt[Vt](et))
      }
    }

    function ve(tt, et) {
      return et.domain(tt.domain()).range(tt.range()).interpolate(tt.interpolate()).clamp(tt.clamp()).unknown(tt.unknown())
    }

    function We() {
      var tt, et, Vt, Ot, qt, Dt, mt = Je,
        dt = Je,
        jt = ae,
        Ht = Ce;

      function Xt() {
        var tt = Math.min(mt.length, dt.length);
        return Ht !== Ce && (Ht = function(tt, et) {
          var Vt;
          return tt > et && (Vt = tt, tt = et, et = Vt),
            function(Vt) {
              return Math.max(tt, Math.min(et, Vt))
            }
        }(mt[0], mt[tt - 1])), Ot = tt > 2 ? he : Ke, qt = Dt = null, Qt
      }

      function Qt(et) {
        return null == et || isNaN(et = +et) ? Vt : (qt || (qt = Ot(mt.map(tt), dt, jt)))(tt(Ht(et)))
      }
      return Qt.invert = function(Vt) {
          return Ht(et((Dt || (Dt = Ot(dt, mt.map(tt), le)))(Vt)))
        }, Qt.domain = function(tt) {
          return arguments.length ? (mt = Array.from(tt, be), Xt()) : mt.slice()
        }, Qt.range = function(tt) {
          return arguments.length ? (dt = Array.from(tt), Xt()) : dt.slice()
        }, Qt.rangeRound = function(tt) {
          return dt = Array.from(tt), jt = Me, Xt()
        }, Qt.clamp = function(tt) {
          return arguments.length ? (Ht = !!tt || Ce, Xt()) : Ht !== Ce
        }, Qt.interpolate = function(tt) {
          return arguments.length ? (jt = tt, Xt()) : jt
        }, Qt.unknown = function(tt) {
          return arguments.length ? (Vt = tt, Qt) : Vt
        },
        function(Vt, Ot) {
          return tt = Vt, et = Ot, Xt()
        }
    }

    function Se() {
      return We()(Ce, Ce)
    }
    var ce, Re = Vt(6327),
      Ie = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function Pe(tt) {
      if (!(et = Ie.exec(tt))) throw new Error("invalid format: " + tt);
      var et;
      return new Ze({
        fill: et[1],
        align: et[2],
        sign: et[3],
        symbol: et[4],
        zero: et[5],
        width: et[6],
        comma: et[7],
        precision: et[8] && et[8].slice(1),
        trim: et[9],
        type: et[10]
      })
    }

    function Ze(tt) {
      this.fill = void 0 === tt.fill ? " " : tt.fill + "", this.align = void 0 === tt.align ? ">" : tt.align + "", this.sign = void 0 === tt.sign ? "-" : tt.sign + "", this.symbol = void 0 === tt.symbol ? "" : tt.symbol + "", this.zero = !!tt.zero, this.width = void 0 === tt.width ? void 0 : +tt.width, this.comma = !!tt.comma, this.precision = void 0 === tt.precision ? void 0 : +tt.precision, this.trim = !!tt.trim, this.type = void 0 === tt.type ? "" : tt.type + ""
    }

    function Le(tt, et) {
      if (!isFinite(tt) || 0 === tt) return null;
      var Vt = (tt = et ? tt.toExponential(et - 1) : tt.toExponential()).indexOf("e"),
        Ot = tt.slice(0, Vt);
      return [Ot.length > 1 ? Ot[0] + Ot.slice(2) : Ot, +tt.slice(Vt + 1)]
    }

    function Fe(tt) {
      return (tt = Le(Math.abs(tt))) ? tt[1] : NaN
    }

    function ke(tt, et) {
      var Vt = Le(tt, et);
      if (!Vt) return tt + "";
      var Ot = Vt[0],
        qt = Vt[1];
      return qt < 0 ? "0." + new Array(-qt).join("0") + Ot : Ot.length > qt + 1 ? Ot.slice(0, qt + 1) + "." + Ot.slice(qt + 1) : Ot + new Array(qt - Ot.length + 2).join("0")
    }
    Pe.prototype = Ze.prototype, Ze.prototype.toString = function() {
      return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
    };
    const Ge = {
      "%": (tt, et) => (100 * tt).toFixed(et),
      b: tt => Math.round(tt).toString(2),
      c: tt => tt + "",
      d: function(tt) {
        return Math.abs(tt = Math.round(tt)) >= 1e21 ? tt.toLocaleString("en").replace(/,/g, "") : tt.toString(10)
      },
      e: (tt, et) => tt.toExponential(et),
      f: (tt, et) => tt.toFixed(et),
      g: (tt, et) => tt.toPrecision(et),
      o: tt => Math.round(tt).toString(8),
      p: (tt, et) => ke(100 * tt, et),
      r: ke,
      s: function(tt, et) {
        var Vt = Le(tt, et);
        if (!Vt) return ce = void 0, tt.toPrecision(et);
        var Ot = Vt[0],
          qt = Vt[1],
          Dt = qt - (ce = 3 * Math.max(-8, Math.min(8, Math.floor(qt / 3)))) + 1,
          mt = Ot.length;
        return Dt === mt ? Ot : Dt > mt ? Ot + new Array(Dt - mt + 1).join("0") : Dt > 0 ? Ot.slice(0, Dt) + "." + Ot.slice(Dt) : "0." + new Array(1 - Dt).join("0") + Le(tt, Math.max(0, et + Dt - 1))[0]
      },
      X: tt => Math.round(tt).toString(16).toUpperCase(),
      x: tt => Math.round(tt).toString(16)
    };

    function ze(tt) {
      return tt
    }
    var oe, re, Ue, Ae = Array.prototype.map,
      ie = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

    function Ye(tt) {
      var et, Vt, Ot = void 0 === tt.grouping || void 0 === tt.thousands ? ze : (et = Ae.call(tt.grouping, Number), Vt = tt.thousands + "", function(tt, Ot) {
          for (var qt = tt.length, Dt = [], mt = 0, dt = et[0], jt = 0; qt > 0 && dt > 0 && (jt + dt + 1 > Ot && (dt = Math.max(1, Ot - jt)), Dt.push(tt.substring(qt -= dt, qt + dt)), !((jt += dt + 1) > Ot));) dt = et[mt = (mt + 1) % et.length];
          return Dt.reverse().join(Vt)
        }),
        qt = void 0 === tt.currency ? "" : tt.currency[0] + "",
        Dt = void 0 === tt.currency ? "" : tt.currency[1] + "",
        mt = void 0 === tt.decimal ? "." : tt.decimal + "",
        dt = void 0 === tt.numerals ? ze : function(tt) {
          return function(et) {
            return et.replace(/[0-9]/g, (function(et) {
              return tt[+et]
            }))
          }
        }(Ae.call(tt.numerals, String)),
        jt = void 0 === tt.percent ? "%" : tt.percent + "",
        Ht = void 0 === tt.minus ? "\u2212" : tt.minus + "",
        Xt = void 0 === tt.nan ? "NaN" : tt.nan + "";

      function Qt(tt, et) {
        var Vt = (tt = Pe(tt)).fill,
          Qt = tt.align,
          lt = tt.sign,
          Et = tt.symbol,
          ft = tt.zero,
          wt = tt.width,
          yt = tt.comma,
          Nt = tt.precision,
          Mt = tt.trim,
          bt = tt.type;
        "n" === bt ? (yt = !0, bt = "g") : Ge[bt] || (void 0 === Nt && (Nt = 12), Mt = !0, bt = "g"), (ft || "0" === Vt && "=" === Qt) && (ft = !0, Vt = "0", Qt = "=");
        var Jt = (et && void 0 !== et.prefix ? et.prefix : "") + ("$" === Et ? qt : "#" === Et && /[boxX]/.test(bt) ? "0" + bt.toLowerCase() : ""),
          Ct = ("$" === Et ? Dt : /[%p]/.test(bt) ? jt : "") + (et && void 0 !== et.suffix ? et.suffix : ""),
          ut = Ge[bt],
          Kt = /[defgprs%]/.test(bt);

        function ht(tt) {
          var et, qt, Dt, jt = Jt,
            Et = Ct;
          if ("c" === bt) Et = ut(tt) + Et, tt = "";
          else {
            var ht = (tt = +tt) < 0 || 1 / tt < 0;
            if (tt = isNaN(tt) ? Xt : ut(Math.abs(tt), Nt), Mt && (tt = function(tt) {
                tt: for (var et, Vt = tt.length, Ot = 1, qt = -1; Ot < Vt; ++Ot) switch (tt[Ot]) {
                  case ".":
                    qt = et = Ot;
                    break;
                  case "0":
                    0 === qt && (qt = Ot), et = Ot;
                    break;
                  default:
                    if (!+tt[Ot]) break tt;
                    qt > 0 && (qt = 0)
                }
                return qt > 0 ? tt.slice(0, qt) + tt.slice(et + 1) : tt
              }(tt)), ht && 0 === +tt && "+" !== lt && (ht = !1), jt = (ht ? "(" === lt ? lt : Ht : "-" === lt || "(" === lt ? "" : lt) + jt, Et = ("s" !== bt || isNaN(tt) || void 0 === ce ? "" : ie[8 + ce / 3]) + Et + (ht && "(" === lt ? ")" : ""), Kt)
              for (et = -1, qt = tt.length; ++et < qt;)
                if (48 > (Dt = tt.charCodeAt(et)) || Dt > 57) {
                  Et = (46 === Dt ? mt + tt.slice(et + 1) : tt.slice(et)) + Et, tt = tt.slice(0, et);
                  break
                }
          }
          yt && !ft && (tt = Ot(tt, 1 / 0));
          var vt = jt.length + tt.length + Et.length,
            Wt = vt < wt ? new Array(wt - vt + 1).join(Vt) : "";
          switch (yt && ft && (tt = Ot(Wt + tt, Wt.length ? wt - Et.length : 1 / 0), Wt = ""), Qt) {
            case "<":
              tt = jt + tt + Et + Wt;
              break;
            case "=":
              tt = jt + Wt + tt + Et;
              break;
            case "^":
              tt = Wt.slice(0, vt = Wt.length >> 1) + jt + tt + Et + Wt.slice(vt);
              break;
            default:
              tt = Wt + jt + tt + Et
          }
          return dt(tt)
        }
        return Nt = void 0 === Nt ? 6 : /[gprs]/.test(bt) ? Math.max(1, Math.min(21, Nt)) : Math.max(0, Math.min(20, Nt)), ht.toString = function() {
          return tt + ""
        }, ht
      }
      return {
        format: Qt,
        formatPrefix: function(tt, et) {
          var Vt = 3 * Math.max(-8, Math.min(8, Math.floor(Fe(et) / 3))),
            Ot = Math.pow(10, -Vt),
            qt = Qt(((tt = Pe(tt)).type = "f", tt), {
              suffix: ie[8 + Vt / 3]
            });
          return function(tt) {
            return qt(Ot * tt)
          }
        }
      }
    }

    function Be(tt, et, Vt, Ot) {
      var qt, Dt = Qt(tt, et, Vt);
      switch ((Ot = Pe(null == Ot ? ",f" : Ot)).type) {
        case "s":
          var mt = Math.max(Math.abs(tt), Math.abs(et));
          return null != Ot.precision || isNaN(qt = function(tt, et) {
            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Fe(et) / 3))) - Fe(Math.abs(tt)))
          }(Dt, mt)) || (Ot.precision = qt), Ue(Ot, mt);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != Ot.precision || isNaN(qt = function(tt, et) {
            return tt = Math.abs(tt), et = Math.abs(et) - tt, Math.max(0, Fe(et) - Fe(tt)) + 1
          }(Dt, Math.max(Math.abs(tt), Math.abs(et)))) || (Ot.precision = qt - ("e" === Ot.type));
          break;
        case "f":
        case "%":
          null != Ot.precision || isNaN(qt = function(tt) {
            return Math.max(0, -Fe(Math.abs(tt)))
          }(Dt)) || (Ot.precision = qt - 2 * ("%" === Ot.type))
      }
      return re(Ot)
    }

    function pe(tt) {
      var et = tt.domain;
      return tt.ticks = function(tt) {
        var Vt = et();
        return Ht(Vt[0], Vt[Vt.length - 1], null == tt ? 10 : tt)
      }, tt.tickFormat = function(tt, Vt) {
        var Ot = et();
        return Be(Ot[0], Ot[Ot.length - 1], null == tt ? 10 : tt, Vt)
      }, tt.nice = function(Vt) {
        null == Vt && (Vt = 10);
        var Ot, qt, Dt = et(),
          mt = 0,
          dt = Dt.length - 1,
          jt = Dt[mt],
          Ht = Dt[dt],
          Qt = 10;
        for (Ht < jt && (qt = jt, jt = Ht, Ht = qt, qt = mt, mt = dt, dt = qt); Qt-- > 0;) {
          if ((qt = Xt(jt, Ht, Vt)) === Ot) return Dt[mt] = jt, Dt[dt] = Ht, et(Dt);
          if (qt > 0) jt = Math.floor(jt / qt) * qt, Ht = Math.ceil(Ht / qt) * qt;
          else {
            if (!(qt < 0)) break;
            jt = Math.ceil(jt * qt) / qt, Ht = Math.floor(Ht * qt) / qt
          }
          Ot = qt
        }
        return tt
      }, tt
    }

    function xe() {
      var tt = Se();
      return tt.copy = function() {
        return ve(tt, xe())
      }, Re.f.apply(tt, arguments), pe(tt)
    }

    function Te(tt) {
      var et;

      function Vt(tt) {
        return null == tt || isNaN(tt = +tt) ? et : tt
      }
      return Vt.invert = Vt, Vt.domain = Vt.range = function(et) {
        return arguments.length ? (tt = Array.from(et, be), Vt) : tt.slice()
      }, Vt.unknown = function(tt) {
        return arguments.length ? (et = tt, Vt) : et
      }, Vt.copy = function() {
        return Te(tt).unknown(et)
      }, tt = arguments.length ? Array.from(tt, be) : [0, 1], pe(Vt)
    }

    function ge(tt, et) {
      var Vt, Ot = 0,
        qt = (tt = tt.slice()).length - 1,
        Dt = tt[Ot],
        mt = tt[qt];
      return mt < Dt && (Vt = Ot, Ot = qt, qt = Vt, Vt = Dt, Dt = mt, mt = Vt), tt[Ot] = et.floor(Dt), tt[qt] = et.ceil(mt), tt
    }

    function se(tt) {
      return Math.log(tt)
    }

    function ne(tt) {
      return Math.exp(tt)
    }

    function tV(tt) {
      return -Math.log(-tt)
    }

    function eV(tt) {
      return -Math.exp(-tt)
    }

    function VV(tt) {
      return isFinite(tt) ? +("1e" + tt) : tt < 0 ? 0 : tt
    }

    function OV(tt) {
      return (et, Vt) => -tt(-et, Vt)
    }

    function qV(tt) {
      const et = tt(se, ne),
        Vt = et.domain;
      let Ot, qt, Dt = 10;

      function mt() {
        return Ot = function(tt) {
          return tt === Math.E ? Math.log : 10 === tt && Math.log10 || 2 === tt && Math.log2 || (tt = Math.log(tt), et => Math.log(et) / tt)
        }(Dt), qt = function(tt) {
          return 10 === tt ? VV : tt === Math.E ? Math.exp : et => Math.pow(tt, et)
        }(Dt), Vt()[0] < 0 ? (Ot = OV(Ot), qt = OV(qt), tt(tV, eV)) : tt(se, ne), et
      }
      return et.base = function(tt) {
        return arguments.length ? (Dt = +tt, mt()) : Dt
      }, et.domain = function(tt) {
        return arguments.length ? (Vt(tt), mt()) : Vt()
      }, et.ticks = tt => {
        const et = Vt();
        let mt = et[0],
          dt = et[et.length - 1];
        const jt = dt < mt;
        jt && ([mt, dt] = [dt, mt]);
        let Xt, Qt, lt = Ot(mt),
          Et = Ot(dt);
        const ft = null == tt ? 10 : +tt;
        let wt = [];
        if (!(Dt % 1) && Et - lt < ft) {
          if (lt = Math.floor(lt), Et = Math.ceil(Et), mt > 0) {
            for (; lt <= Et; ++lt)
              for (Xt = 1; Xt < Dt; ++Xt)
                if (Qt = lt < 0 ? Xt / qt(-lt) : Xt * qt(lt), !(Qt < mt)) {
                  if (Qt > dt) break;
                  wt.push(Qt)
                }
          } else
            for (; lt <= Et; ++lt)
              for (Xt = Dt - 1; Xt >= 1; --Xt)
                if (Qt = lt > 0 ? Xt / qt(-lt) : Xt * qt(lt), !(Qt < mt)) {
                  if (Qt > dt) break;
                  wt.push(Qt)
                } 2 * wt.length < ft && (wt = Ht(mt, dt, ft))
        } else wt = Ht(lt, Et, Math.min(Et - lt, ft)).map(qt);
        return jt ? wt.reverse() : wt
      }, et.tickFormat = (tt, Vt) => {
        if (null == tt && (tt = 10), null == Vt && (Vt = 10 === Dt ? "s" : ","), "function" !== typeof Vt && (Dt % 1 || null != (Vt = Pe(Vt)).precision || (Vt.trim = !0), Vt = re(Vt)), tt === 1 / 0) return Vt;
        const mt = Math.max(1, Dt * tt / et.ticks().length);
        return tt => {
          let et = tt / qt(Math.round(Ot(tt)));
          return et * Dt < Dt - .5 && (et *= Dt), et <= mt ? Vt(tt) : ""
        }
      }, et.nice = () => Vt(ge(Vt(), {
        floor: tt => qt(Math.floor(Ot(tt))),
        ceil: tt => qt(Math.ceil(Ot(tt)))
      })), et
    }

    function DV() {
      const tt = qV(We()).domain([1, 10]);
      return tt.copy = () => ve(tt, DV()).base(tt.base()), Re.f.apply(tt, arguments), tt
    }

    function mV(tt) {
      return function(et) {
        return Math.sign(et) * Math.log1p(Math.abs(et / tt))
      }
    }

    function dV(tt) {
      return function(et) {
        return Math.sign(et) * Math.expm1(Math.abs(et)) * tt
      }
    }

    function jV(tt) {
      var et = 1,
        Vt = tt(mV(et), dV(et));
      return Vt.constant = function(Vt) {
        return arguments.length ? tt(mV(et = +Vt), dV(et)) : et
      }, pe(Vt)
    }

    function HV() {
      var tt = jV(We());
      return tt.copy = function() {
        return ve(tt, HV()).constant(tt.constant())
      }, Re.f.apply(tt, arguments)
    }
    oe = Ye({
      thousands: ",",
      grouping: [3],
      currency: ["$", ""]
    }), re = oe.format, Ue = oe.formatPrefix;
    var XV = Vt(6335);

    function QV(tt) {
      return function(et) {
        return et < 0 ? -Math.pow(-et, tt) : Math.pow(et, tt)
      }
    }

    function lV(tt) {
      return tt < 0 ? -Math.sqrt(-tt) : Math.sqrt(tt)
    }

    function EV(tt) {
      return tt < 0 ? -tt * tt : tt * tt
    }

    function fV(tt) {
      var et = tt(Ce, Ce),
        Vt = 1;
      return et.exponent = function(et) {
        return arguments.length ? 1 === (Vt = +et) ? tt(Ce, Ce) : .5 === Vt ? tt(lV, EV) : tt(QV(Vt), QV(1 / Vt)) : Vt
      }, pe(et)
    }

    function wV() {
      var tt = fV(We());
      return tt.copy = function() {
        return ve(tt, wV()).exponent(tt.exponent())
      }, Re.f.apply(tt, arguments), tt
    }

    function yV() {
      return wV.apply(null, arguments).exponent(.5)
    }

    function NV(tt) {
      return Math.sign(tt) * tt * tt
    }

    function aV() {
      var tt, et = Se(),
        Vt = [0, 1],
        Ot = !1;

      function qt(Vt) {
        var qt = function(tt) {
          return Math.sign(tt) * Math.sqrt(Math.abs(tt))
        }(et(Vt));
        return isNaN(qt) ? tt : Ot ? Math.round(qt) : qt
      }
      return qt.invert = function(tt) {
        return et.invert(NV(tt))
      }, qt.domain = function(tt) {
        return arguments.length ? (et.domain(tt), qt) : et.domain()
      }, qt.range = function(tt) {
        return arguments.length ? (et.range((Vt = Array.from(tt, be)).map(NV)), qt) : Vt.slice()
      }, qt.rangeRound = function(tt) {
        return qt.range(tt).round(!0)
      }, qt.round = function(tt) {
        return arguments.length ? (Ot = !!tt, qt) : Ot
      }, qt.clamp = function(tt) {
        return arguments.length ? (et.clamp(tt), qt) : et.clamp()
      }, qt.unknown = function(et) {
        return arguments.length ? (tt = et, qt) : tt
      }, qt.copy = function() {
        return aV(et.domain(), Vt).round(Ot).clamp(et.clamp()).unknown(tt)
      }, Re.f.apply(qt, arguments), pe(qt)
    }

    function MV(tt, et) {
      let Vt;
      if (void 0 === et)
        for (const Ot of tt) null != Ot && (Vt < Ot || void 0 === Vt && Ot >= Ot) && (Vt = Ot);
      else {
        let Ot = -1;
        for (let qt of tt) null != (qt = et(qt, ++Ot, tt)) && (Vt < qt || void 0 === Vt && qt >= qt) && (Vt = qt)
      }
      return Vt
    }

    function bV(tt, et) {
      let Vt;
      if (void 0 === et)
        for (const Ot of tt) null != Ot && (Vt > Ot || void 0 === Vt && Ot >= Ot) && (Vt = Ot);
      else {
        let Ot = -1;
        for (let qt of tt) null != (qt = et(qt, ++Ot, tt)) && (Vt > qt || void 0 === Vt && qt >= qt) && (Vt = qt)
      }
      return Vt
    }

    function JV() {
      let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lt;
      if (tt === lt) return CV;
      if ("function" !== typeof tt) throw new TypeError("compare is not a function");
      return (et, Vt) => {
        const Ot = tt(et, Vt);
        return Ot || 0 === Ot ? Ot : (0 === tt(Vt, Vt)) - (0 === tt(et, et))
      }
    }

    function CV(tt, et) {
      return (null == tt || !(tt >= tt)) - (null == et || !(et >= et)) || (tt < et ? -1 : tt > et ? 1 : 0)
    }

    function uV(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0,
        qt = arguments.length > 4 ? arguments[4] : void 0;
      if (et = Math.floor(et), Vt = Math.floor(Math.max(0, Vt)), Ot = Math.floor(Math.min(tt.length - 1, Ot)), !(Vt <= et && et <= Ot)) return tt;
      for (qt = void 0 === qt ? CV : JV(qt); Ot > Vt;) {
        if (Ot - Vt > 600) {
          const Dt = Ot - Vt + 1,
            mt = et - Vt + 1,
            dt = Math.log(Dt),
            jt = .5 * Math.exp(2 * dt / 3),
            Ht = .5 * Math.sqrt(dt * jt * (Dt - jt) / Dt) * (mt - Dt / 2 < 0 ? -1 : 1);
          uV(tt, et, Math.max(Vt, Math.floor(et - mt * jt / Dt + Ht)), Math.min(Ot, Math.floor(et + (Dt - mt) * jt / Dt + Ht)), qt)
        }
        const Dt = tt[et];
        let mt = Vt,
          dt = Ot;
        for (KV(tt, Vt, et), qt(tt[Ot], Dt) > 0 && KV(tt, Vt, Ot); mt < dt;) {
          for (KV(tt, mt, dt), ++mt, --dt; qt(tt[mt], Dt) < 0;) ++mt;
          for (; qt(tt[dt], Dt) > 0;) --dt
        }
        0 === qt(tt[Vt], Dt) ? KV(tt, Vt, dt) : (++dt, KV(tt, dt, Ot)), dt <= et && (Vt = dt + 1), et <= dt && (Ot = dt - 1)
      }
      return tt
    }

    function KV(tt, et, Vt) {
      const Ot = tt[et];
      tt[et] = tt[Vt], tt[Vt] = Ot
    }

    function hV(tt, et, Vt) {
      if (tt = Float64Array.from(function*(tt, et) {
          if (void 0 === et)
            for (let Vt of tt) null != Vt && (Vt = +Vt) >= Vt && (yield Vt);
          else {
            let Vt = -1;
            for (let Ot of tt) null != (Ot = et(Ot, ++Vt, tt)) && (Ot = +Ot) >= Ot && (yield Ot)
          }
        }(tt, Vt)), (Ot = tt.length) && !isNaN(et = +et)) {
        if (et <= 0 || Ot < 2) return bV(tt);
        if (et >= 1) return MV(tt);
        var Ot, qt = (Ot - 1) * et,
          Dt = Math.floor(qt),
          mt = MV(uV(tt, Dt).subarray(0, Dt + 1));
        return mt + (bV(tt.subarray(Dt + 1)) - mt) * (qt - Dt)
      }
    }

    function vV(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yt;
      if ((Ot = tt.length) && !isNaN(et = +et)) {
        if (et <= 0 || Ot < 2) return +Vt(tt[0], 0, tt);
        if (et >= 1) return +Vt(tt[Ot - 1], Ot - 1, tt);
        var Ot, qt = (Ot - 1) * et,
          Dt = Math.floor(qt),
          mt = +Vt(tt[Dt], Dt, tt);
        return mt + (+Vt(tt[Dt + 1], Dt + 1, tt) - mt) * (qt - Dt)
      }
    }

    function WV() {
      var tt, et = [],
        Vt = [],
        Ot = [];

      function qt() {
        var tt = 0,
          qt = Math.max(1, Vt.length);
        for (Ot = new Array(qt - 1); ++tt < qt;) Ot[tt - 1] = vV(et, tt / qt);
        return Dt
      }

      function Dt(et) {
        return null == et || isNaN(et = +et) ? tt : Vt[bt(Ot, et)]
      }
      return Dt.invertExtent = function(tt) {
        var qt = Vt.indexOf(tt);
        return qt < 0 ? [NaN, NaN] : [qt > 0 ? Ot[qt - 1] : et[0], qt < Ot.length ? Ot[qt] : et[et.length - 1]]
      }, Dt.domain = function(tt) {
        if (!arguments.length) return et.slice();
        et = [];
        for (let Vt of tt) null == Vt || isNaN(Vt = +Vt) || et.push(Vt);
        return et.sort(lt), qt()
      }, Dt.range = function(tt) {
        return arguments.length ? (Vt = Array.from(tt), qt()) : Vt.slice()
      }, Dt.unknown = function(et) {
        return arguments.length ? (tt = et, Dt) : tt
      }, Dt.quantiles = function() {
        return Ot.slice()
      }, Dt.copy = function() {
        return WV().domain(et).range(Vt).unknown(tt)
      }, Re.f.apply(Dt, arguments)
    }

    function SV() {
      var tt, et = 0,
        Vt = 1,
        Ot = 1,
        qt = [.5],
        Dt = [0, 1];

      function mt(et) {
        return null != et && et <= et ? Dt[bt(qt, et, 0, Ot)] : tt
      }

      function dt() {
        var tt = -1;
        for (qt = new Array(Ot); ++tt < Ot;) qt[tt] = ((tt + 1) * Vt - (tt - Ot) * et) / (Ot + 1);
        return mt
      }
      return mt.domain = function(tt) {
        return arguments.length ? ([et, Vt] = tt, et = +et, Vt = +Vt, dt()) : [et, Vt]
      }, mt.range = function(tt) {
        return arguments.length ? (Ot = (Dt = Array.from(tt)).length - 1, dt()) : Dt.slice()
      }, mt.invertExtent = function(tt) {
        var mt = Dt.indexOf(tt);
        return mt < 0 ? [NaN, NaN] : mt < 1 ? [et, qt[0]] : mt >= Ot ? [qt[Ot - 1], Vt] : [qt[mt - 1], qt[mt]]
      }, mt.unknown = function(et) {
        return arguments.length ? (tt = et, mt) : mt
      }, mt.thresholds = function() {
        return qt.slice()
      }, mt.copy = function() {
        return SV().domain([et, Vt]).range(Dt).unknown(tt)
      }, Re.f.apply(pe(mt), arguments)
    }

    function cV() {
      var tt, et = [.5],
        Vt = [0, 1],
        Ot = 1;

      function qt(qt) {
        return null != qt && qt <= qt ? Vt[bt(et, qt, 0, Ot)] : tt
      }
      return qt.domain = function(tt) {
        return arguments.length ? (et = Array.from(tt), Ot = Math.min(et.length, Vt.length - 1), qt) : et.slice()
      }, qt.range = function(tt) {
        return arguments.length ? (Vt = Array.from(tt), Ot = Math.min(et.length, Vt.length - 1), qt) : Vt.slice()
      }, qt.invertExtent = function(tt) {
        var Ot = Vt.indexOf(tt);
        return [et[Ot - 1], et[Ot]]
      }, qt.unknown = function(et) {
        return arguments.length ? (tt = et, qt) : tt
      }, qt.copy = function() {
        return cV().domain(et).range(Vt).unknown(tt)
      }, Re.f.apply(qt, arguments)
    }
    const RV = 1e3,
      IV = 6e4,
      PV = 36e5,
      ZV = 864e5,
      LV = 6048e5,
      FV = 2592e6,
      kV = 31536e6,
      GV = new Date,
      zV = new Date;

    function oV(tt, et, Vt, Ot) {
      function qt(et) {
        return tt(et = 0 === arguments.length ? new Date : new Date(+et)), et
      }
      return qt.floor = et => (tt(et = new Date(+et)), et), qt.ceil = Vt => (tt(Vt = new Date(Vt - 1)), et(Vt, 1), tt(Vt), Vt), qt.round = tt => {
        const et = qt(tt),
          Vt = qt.ceil(tt);
        return tt - et < Vt - tt ? et : Vt
      }, qt.offset = (tt, Vt) => (et(tt = new Date(+tt), null == Vt ? 1 : Math.floor(Vt)), tt), qt.range = (Vt, Ot, Dt) => {
        const mt = [];
        if (Vt = qt.ceil(Vt), Dt = null == Dt ? 1 : Math.floor(Dt), !(Vt < Ot) || !(Dt > 0)) return mt;
        let dt;
        do {
          mt.push(dt = new Date(+Vt)), et(Vt, Dt), tt(Vt)
        } while (dt < Vt && Vt < Ot);
        return mt
      }, qt.filter = Vt => oV((et => {
        if (et >= et)
          for (; tt(et), !Vt(et);) et.setTime(et - 1)
      }), ((tt, Ot) => {
        if (tt >= tt)
          if (Ot < 0)
            for (; ++Ot <= 0;)
              for (; et(tt, -1), !Vt(tt););
          else
            for (; --Ot >= 0;)
              for (; et(tt, 1), !Vt(tt););
      })), Vt && (qt.count = (et, Ot) => (GV.setTime(+et), zV.setTime(+Ot), tt(GV), tt(zV), Math.floor(Vt(GV, zV))), qt.every = tt => (tt = Math.floor(tt), isFinite(tt) && tt > 0 ? tt > 1 ? qt.filter(Ot ? et => Ot(et) % tt === 0 : et => qt.count(0, et) % tt === 0) : qt : null)), qt
    }
    const rV = oV((() => {}), ((tt, et) => {
      tt.setTime(+tt + et)
    }), ((tt, et) => et - tt));
    rV.every = tt => (tt = Math.floor(tt), isFinite(tt) && tt > 0 ? tt > 1 ? oV((et => {
      et.setTime(Math.floor(et / tt) * tt)
    }), ((et, Vt) => {
      et.setTime(+et + Vt * tt)
    }), ((et, Vt) => (Vt - et) / tt)) : rV : null);
    rV.range;
    const UV = oV((tt => {
        tt.setTime(tt - tt.getMilliseconds())
      }), ((tt, et) => {
        tt.setTime(+tt + et * RV)
      }), ((tt, et) => (et - tt) / RV), (tt => tt.getUTCSeconds())),
      AV = (UV.range, oV((tt => {
        tt.setTime(tt - tt.getMilliseconds() - tt.getSeconds() * RV)
      }), ((tt, et) => {
        tt.setTime(+tt + et * IV)
      }), ((tt, et) => (et - tt) / IV), (tt => tt.getMinutes()))),
      iV = (AV.range, oV((tt => {
        tt.setUTCSeconds(0, 0)
      }), ((tt, et) => {
        tt.setTime(+tt + et * IV)
      }), ((tt, et) => (et - tt) / IV), (tt => tt.getUTCMinutes()))),
      YV = (iV.range, oV((tt => {
        tt.setTime(tt - tt.getMilliseconds() - tt.getSeconds() * RV - tt.getMinutes() * IV)
      }), ((tt, et) => {
        tt.setTime(+tt + et * PV)
      }), ((tt, et) => (et - tt) / PV), (tt => tt.getHours()))),
      BV = (YV.range, oV((tt => {
        tt.setUTCMinutes(0, 0, 0)
      }), ((tt, et) => {
        tt.setTime(+tt + et * PV)
      }), ((tt, et) => (et - tt) / PV), (tt => tt.getUTCHours()))),
      pV = (BV.range, oV((tt => tt.setHours(0, 0, 0, 0)), ((tt, et) => tt.setDate(tt.getDate() + et)), ((tt, et) => (et - tt - (et.getTimezoneOffset() - tt.getTimezoneOffset()) * IV) / ZV), (tt => tt.getDate() - 1))),
      xV = (pV.range, oV((tt => {
        tt.setUTCHours(0, 0, 0, 0)
      }), ((tt, et) => {
        tt.setUTCDate(tt.getUTCDate() + et)
      }), ((tt, et) => (et - tt) / ZV), (tt => tt.getUTCDate() - 1))),
      TV = (xV.range, oV((tt => {
        tt.setUTCHours(0, 0, 0, 0)
      }), ((tt, et) => {
        tt.setUTCDate(tt.getUTCDate() + et)
      }), ((tt, et) => (et - tt) / ZV), (tt => Math.floor(tt / ZV))));
    TV.range;

    function gV(tt) {
      return oV((et => {
        et.setDate(et.getDate() - (et.getDay() + 7 - tt) % 7), et.setHours(0, 0, 0, 0)
      }), ((tt, et) => {
        tt.setDate(tt.getDate() + 7 * et)
      }), ((tt, et) => (et - tt - (et.getTimezoneOffset() - tt.getTimezoneOffset()) * IV) / LV))
    }
    const sV = gV(0),
      nV = gV(1),
      tO = gV(2),
      eO = gV(3),
      VO = gV(4),
      OO = gV(5),
      qO = gV(6);
    sV.range, nV.range, tO.range, eO.range, VO.range, OO.range, qO.range;

    function DO(tt) {
      return oV((et => {
        et.setUTCDate(et.getUTCDate() - (et.getUTCDay() + 7 - tt) % 7), et.setUTCHours(0, 0, 0, 0)
      }), ((tt, et) => {
        tt.setUTCDate(tt.getUTCDate() + 7 * et)
      }), ((tt, et) => (et - tt) / LV))
    }
    const mO = DO(0),
      dO = DO(1),
      jO = DO(2),
      HO = DO(3),
      XO = DO(4),
      QO = DO(5),
      lO = DO(6),
      EO = (mO.range, dO.range, jO.range, HO.range, XO.range, QO.range, lO.range, oV((tt => {
        tt.setDate(1), tt.setHours(0, 0, 0, 0)
      }), ((tt, et) => {
        tt.setMonth(tt.getMonth() + et)
      }), ((tt, et) => et.getMonth() - tt.getMonth() + 12 * (et.getFullYear() - tt.getFullYear())), (tt => tt.getMonth()))),
      fO = (EO.range, oV((tt => {
        tt.setUTCDate(1), tt.setUTCHours(0, 0, 0, 0)
      }), ((tt, et) => {
        tt.setUTCMonth(tt.getUTCMonth() + et)
      }), ((tt, et) => et.getUTCMonth() - tt.getUTCMonth() + 12 * (et.getUTCFullYear() - tt.getUTCFullYear())), (tt => tt.getUTCMonth()))),
      wO = (fO.range, oV((tt => {
        tt.setMonth(0, 1), tt.setHours(0, 0, 0, 0)
      }), ((tt, et) => {
        tt.setFullYear(tt.getFullYear() + et)
      }), ((tt, et) => et.getFullYear() - tt.getFullYear()), (tt => tt.getFullYear())));
    wO.every = tt => isFinite(tt = Math.floor(tt)) && tt > 0 ? oV((et => {
      et.setFullYear(Math.floor(et.getFullYear() / tt) * tt), et.setMonth(0, 1), et.setHours(0, 0, 0, 0)
    }), ((et, Vt) => {
      et.setFullYear(et.getFullYear() + Vt * tt)
    })) : null;
    wO.range;
    const yO = oV((tt => {
      tt.setUTCMonth(0, 1), tt.setUTCHours(0, 0, 0, 0)
    }), ((tt, et) => {
      tt.setUTCFullYear(tt.getUTCFullYear() + et)
    }), ((tt, et) => et.getUTCFullYear() - tt.getUTCFullYear()), (tt => tt.getUTCFullYear()));
    yO.every = tt => isFinite(tt = Math.floor(tt)) && tt > 0 ? oV((et => {
      et.setUTCFullYear(Math.floor(et.getUTCFullYear() / tt) * tt), et.setUTCMonth(0, 1), et.setUTCHours(0, 0, 0, 0)
    }), ((et, Vt) => {
      et.setUTCFullYear(et.getUTCFullYear() + Vt * tt)
    })) : null;
    yO.range;

    function NO(tt, et, Vt, Ot, qt, Dt) {
      const mt = [
        [UV, 1, RV],
        [UV, 5, 5e3],
        [UV, 15, 15e3],
        [UV, 30, 3e4],
        [Dt, 1, IV],
        [Dt, 5, 3e5],
        [Dt, 15, 9e5],
        [Dt, 30, 18e5],
        [qt, 1, PV],
        [qt, 3, 108e5],
        [qt, 6, 216e5],
        [qt, 12, 432e5],
        [Ot, 1, ZV],
        [Ot, 2, 1728e5],
        [Vt, 1, LV],
        [et, 1, FV],
        [et, 3, 7776e6],
        [tt, 1, kV]
      ];

      function dt(et, Vt, Ot) {
        const qt = Math.abs(Vt - et) / Ot,
          Dt = ft((tt => {
            let [, , et] = tt;
            return et
          })).right(mt, qt);
        if (Dt === mt.length) return tt.every(Qt(et / kV, Vt / kV, Ot));
        if (0 === Dt) return rV.every(Math.max(Qt(et, Vt, Ot), 1));
        const [dt, jt] = mt[qt / mt[Dt - 1][2] < mt[Dt][2] / qt ? Dt - 1 : Dt];
        return dt.every(jt)
      }
      return [function(tt, et, Vt) {
        const Ot = et < tt;
        Ot && ([tt, et] = [et, tt]);
        const qt = Vt && "function" === typeof Vt.range ? Vt : dt(tt, et, Vt),
          Dt = qt ? qt.range(tt, +et + 1) : [];
        return Ot ? Dt.reverse() : Dt
      }, dt]
    }
    const [aO, MO] = NO(yO, fO, mO, TV, BV, iV), [bO, JO] = NO(wO, EO, sV, pV, YV, AV);

    function CO(tt) {
      if (0 <= tt.y && tt.y < 100) {
        var et = new Date(-1, tt.m, tt.d, tt.H, tt.M, tt.S, tt.L);
        return et.setFullYear(tt.y), et
      }
      return new Date(tt.y, tt.m, tt.d, tt.H, tt.M, tt.S, tt.L)
    }

    function uO(tt) {
      if (0 <= tt.y && tt.y < 100) {
        var et = new Date(Date.UTC(-1, tt.m, tt.d, tt.H, tt.M, tt.S, tt.L));
        return et.setUTCFullYear(tt.y), et
      }
      return new Date(Date.UTC(tt.y, tt.m, tt.d, tt.H, tt.M, tt.S, tt.L))
    }

    function KO(tt, et, Vt) {
      return {
        y: tt,
        m: et,
        d: Vt,
        H: 0,
        M: 0,
        S: 0,
        L: 0
      }
    }
    var hO, vO, WO, SO = {
        "-": "",
        _: " ",
        0: "0"
      },
      cO = /^\s*\d+/,
      RO = /^%/,
      IO = /[\\^$*+?|[\]().{}]/g;

    function PO(tt, et, Vt) {
      var Ot = tt < 0 ? "-" : "",
        qt = (Ot ? -tt : tt) + "",
        Dt = qt.length;
      return Ot + (Dt < Vt ? new Array(Vt - Dt + 1).join(et) + qt : qt)
    }

    function ZO(tt) {
      return tt.replace(IO, "\\$&")
    }

    function LO(tt) {
      return new RegExp("^(?:" + tt.map(ZO).join("|") + ")", "i")
    }

    function FO(tt) {
      return new Map(tt.map(((tt, et) => [tt.toLowerCase(), et])))
    }

    function kO(tt, et, Vt) {
      var Ot = cO.exec(et.slice(Vt, Vt + 1));
      return Ot ? (tt.w = +Ot[0], Vt + Ot[0].length) : -1
    }

    function GO(tt, et, Vt) {
      var Ot = cO.exec(et.slice(Vt, Vt + 1));
      return Ot ? (tt.u = +Ot[0], Vt + Ot[0].length) : -1
    }

    function zO(tt, et, Vt) {
      var Ot = cO.exec(et.slice(Vt, Vt + 2));
      return Ot ? (tt.U = +Ot[0], Vt + Ot[0].length) : -1
    }

    function oO(tt, et, Vt) {
      var Ot = cO.exec(et.slice(Vt, Vt + 2));
      return Ot ? (tt.V = +Ot[0], Vt + Ot[0].length) : -1
    }

    function rO(tt, et, Vt) {
      var Ot = cO.exec(et.slice(Vt, Vt + 2));
      return Ot ? (tt.W = +Ot[0], Vt + Ot[0].length) : -1
    }

    function UO(tt, et, Vt) {
      var Ot = cO.exec(et.slice(Vt, Vt + 4));
      return Ot ? (tt.y = +Ot[0], Vt + Ot[0].length) : -1
    }

    function AO(tt, et, Vt) {
      var Ot = cO.exec(et.slice(Vt, Vt + 2));
      return Ot ? (tt.y = +Ot[0] + (+Ot[0] > 68 ? 1900 : 2e3), Vt + Ot[0].length) : -1
    }

    function iO(tt, et, Vt) {
      var Ot = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(et.slice(Vt, Vt + 6));
      return Ot ? (tt.Z = Ot[1] ? 0 : -(Ot[2] + (Ot[3] || "00")), Vt + Ot[0].length) : -1
    }

    function YO(tt, et, Vt) {
      var Ot = cO.exec(et.slice(Vt, Vt + 1));
      return Ot ? (tt.q = 3 * Ot[0] - 3, Vt + Ot[0].length) : -1
    }

    function BO(tt, et, Vt) {
      var Ot = cO.exec(et.slice(Vt, Vt + 2));
      return Ot ? (tt.m = Ot[0] - 1, Vt + Ot[0].length) : -1
    }

    function pO(tt, et, Vt) {
      var Ot = cO.exec(et.slice(Vt, Vt + 2));
      return Ot ? (tt.d = +Ot[0], Vt + Ot[0].length) : -1
    }

    function xO(tt, et, Vt) {
      var Ot = cO.exec(et.slice(Vt, Vt + 3));
      return Ot ? (tt.m = 0, tt.d = +Ot[0], Vt + Ot[0].length) : -1
    }

    function TO(tt, et, Vt) {
      var Ot = cO.exec(et.slice(Vt, Vt + 2));
      return Ot ? (tt.H = +Ot[0], Vt + Ot[0].length) : -1
    }

    function gO(tt, et, Vt) {
      var Ot = cO.exec(et.slice(Vt, Vt + 2));
      return Ot ? (tt.M = +Ot[0], Vt + Ot[0].length) : -1
    }

    function sO(tt, et, Vt) {
      var Ot = cO.exec(et.slice(Vt, Vt + 2));
      return Ot ? (tt.S = +Ot[0], Vt + Ot[0].length) : -1
    }

    function nO(tt, et, Vt) {
      var Ot = cO.exec(et.slice(Vt, Vt + 3));
      return Ot ? (tt.L = +Ot[0], Vt + Ot[0].length) : -1
    }

    function tq(tt, et, Vt) {
      var Ot = cO.exec(et.slice(Vt, Vt + 6));
      return Ot ? (tt.L = Math.floor(Ot[0] / 1e3), Vt + Ot[0].length) : -1
    }

    function eq(tt, et, Vt) {
      var Ot = RO.exec(et.slice(Vt, Vt + 1));
      return Ot ? Vt + Ot[0].length : -1
    }

    function Vq(tt, et, Vt) {
      var Ot = cO.exec(et.slice(Vt));
      return Ot ? (tt.Q = +Ot[0], Vt + Ot[0].length) : -1
    }

    function Oq(tt, et, Vt) {
      var Ot = cO.exec(et.slice(Vt));
      return Ot ? (tt.s = +Ot[0], Vt + Ot[0].length) : -1
    }

    function qq(tt, et) {
      return PO(tt.getDate(), et, 2)
    }

    function Dq(tt, et) {
      return PO(tt.getHours(), et, 2)
    }

    function mq(tt, et) {
      return PO(tt.getHours() % 12 || 12, et, 2)
    }

    function dq(tt, et) {
      return PO(1 + pV.count(wO(tt), tt), et, 3)
    }

    function jq(tt, et) {
      return PO(tt.getMilliseconds(), et, 3)
    }

    function Hq(tt, et) {
      return jq(tt, et) + "000"
    }

    function Xq(tt, et) {
      return PO(tt.getMonth() + 1, et, 2)
    }

    function Qq(tt, et) {
      return PO(tt.getMinutes(), et, 2)
    }

    function lq(tt, et) {
      return PO(tt.getSeconds(), et, 2)
    }

    function Eq(tt) {
      var et = tt.getDay();
      return 0 === et ? 7 : et
    }

    function fq(tt, et) {
      return PO(sV.count(wO(tt) - 1, tt), et, 2)
    }

    function wq(tt) {
      var et = tt.getDay();
      return et >= 4 || 0 === et ? VO(tt) : VO.ceil(tt)
    }

    function yq(tt, et) {
      return tt = wq(tt), PO(VO.count(wO(tt), tt) + (4 === wO(tt).getDay()), et, 2)
    }

    function Nq(tt) {
      return tt.getDay()
    }

    function aq(tt, et) {
      return PO(nV.count(wO(tt) - 1, tt), et, 2)
    }

    function Mq(tt, et) {
      return PO(tt.getFullYear() % 100, et, 2)
    }

    function bq(tt, et) {
      return PO((tt = wq(tt)).getFullYear() % 100, et, 2)
    }

    function Jq(tt, et) {
      return PO(tt.getFullYear() % 1e4, et, 4)
    }

    function Cq(tt, et) {
      var Vt = tt.getDay();
      return PO((tt = Vt >= 4 || 0 === Vt ? VO(tt) : VO.ceil(tt)).getFullYear() % 1e4, et, 4)
    }

    function uq(tt) {
      var et = tt.getTimezoneOffset();
      return (et > 0 ? "-" : (et *= -1, "+")) + PO(et / 60 | 0, "0", 2) + PO(et % 60, "0", 2)
    }

    function Kq(tt, et) {
      return PO(tt.getUTCDate(), et, 2)
    }

    function hq(tt, et) {
      return PO(tt.getUTCHours(), et, 2)
    }

    function vq(tt, et) {
      return PO(tt.getUTCHours() % 12 || 12, et, 2)
    }

    function Wq(tt, et) {
      return PO(1 + xV.count(yO(tt), tt), et, 3)
    }

    function Sq(tt, et) {
      return PO(tt.getUTCMilliseconds(), et, 3)
    }

    function cq(tt, et) {
      return Sq(tt, et) + "000"
    }

    function Rq(tt, et) {
      return PO(tt.getUTCMonth() + 1, et, 2)
    }

    function Iq(tt, et) {
      return PO(tt.getUTCMinutes(), et, 2)
    }

    function Pq(tt, et) {
      return PO(tt.getUTCSeconds(), et, 2)
    }

    function Zq(tt) {
      var et = tt.getUTCDay();
      return 0 === et ? 7 : et
    }

    function Lq(tt, et) {
      return PO(mO.count(yO(tt) - 1, tt), et, 2)
    }

    function Fq(tt) {
      var et = tt.getUTCDay();
      return et >= 4 || 0 === et ? XO(tt) : XO.ceil(tt)
    }

    function kq(tt, et) {
      return tt = Fq(tt), PO(XO.count(yO(tt), tt) + (4 === yO(tt).getUTCDay()), et, 2)
    }

    function Gq(tt) {
      return tt.getUTCDay()
    }

    function zq(tt, et) {
      return PO(dO.count(yO(tt) - 1, tt), et, 2)
    }

    function oq(tt, et) {
      return PO(tt.getUTCFullYear() % 100, et, 2)
    }

    function rq(tt, et) {
      return PO((tt = Fq(tt)).getUTCFullYear() % 100, et, 2)
    }

    function Uq(tt, et) {
      return PO(tt.getUTCFullYear() % 1e4, et, 4)
    }

    function Aq(tt, et) {
      var Vt = tt.getUTCDay();
      return PO((tt = Vt >= 4 || 0 === Vt ? XO(tt) : XO.ceil(tt)).getUTCFullYear() % 1e4, et, 4)
    }

    function iq() {
      return "+0000"
    }

    function Yq() {
      return "%"
    }

    function Bq(tt) {
      return +tt
    }

    function pq(tt) {
      return Math.floor(+tt / 1e3)
    }

    function xq(tt) {
      return new Date(tt)
    }

    function Tq(tt) {
      return tt instanceof Date ? +tt : +new Date(+tt)
    }

    function gq(tt, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht) {
      var Xt = Se(),
        Qt = Xt.invert,
        lt = Xt.domain,
        Et = Ht(".%L"),
        ft = Ht(":%S"),
        wt = Ht("%I:%M"),
        yt = Ht("%I %p"),
        Nt = Ht("%a %d"),
        Mt = Ht("%b %d"),
        bt = Ht("%B"),
        Jt = Ht("%Y");

      function Ct(tt) {
        return (jt(tt) < tt ? Et : dt(tt) < tt ? ft : mt(tt) < tt ? wt : Dt(tt) < tt ? yt : Ot(tt) < tt ? qt(tt) < tt ? Nt : Mt : Vt(tt) < tt ? bt : Jt)(tt)
      }
      return Xt.invert = function(tt) {
        return new Date(Qt(tt))
      }, Xt.domain = function(tt) {
        return arguments.length ? lt(Array.from(tt, Tq)) : lt().map(xq)
      }, Xt.ticks = function(et) {
        var Vt = lt();
        return tt(Vt[0], Vt[Vt.length - 1], null == et ? 10 : et)
      }, Xt.tickFormat = function(tt, et) {
        return null == et ? Ct : Ht(et)
      }, Xt.nice = function(tt) {
        var Vt = lt();
        return tt && "function" === typeof tt.range || (tt = et(Vt[0], Vt[Vt.length - 1], null == tt ? 10 : tt)), tt ? lt(ge(Vt, tt)) : Xt
      }, Xt.copy = function() {
        return ve(Xt, gq(tt, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht))
      }, Xt
    }

    function sq() {
      return Re.f.apply(gq(bO, JO, wO, EO, sV, pV, YV, AV, UV, vO).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
    }

    function nq() {
      return Re.f.apply(gq(aO, MO, yO, fO, mO, xV, BV, iV, UV, WO).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
    }

    function tD() {
      var tt, et, Vt, Ot, qt, Dt = 0,
        mt = 1,
        dt = Ce,
        jt = !1;

      function Ht(et) {
        return null == et || isNaN(et = +et) ? qt : dt(0 === Vt ? .5 : (et = (Ot(et) - tt) * Vt, jt ? Math.max(0, Math.min(1, et)) : et))
      }

      function Xt(tt) {
        return function(et) {
          var Vt, Ot;
          return arguments.length ? ([Vt, Ot] = et, dt = tt(Vt, Ot), Ht) : [dt(0), dt(1)]
        }
      }
      return Ht.domain = function(qt) {
          return arguments.length ? ([Dt, mt] = qt, tt = Ot(Dt = +Dt), et = Ot(mt = +mt), Vt = tt === et ? 0 : 1 / (et - tt), Ht) : [Dt, mt]
        }, Ht.clamp = function(tt) {
          return arguments.length ? (jt = !!tt, Ht) : jt
        }, Ht.interpolator = function(tt) {
          return arguments.length ? (dt = tt, Ht) : dt
        }, Ht.range = Xt(ae), Ht.rangeRound = Xt(Me), Ht.unknown = function(tt) {
          return arguments.length ? (qt = tt, Ht) : qt
        },
        function(qt) {
          return Ot = qt, tt = qt(Dt), et = qt(mt), Vt = tt === et ? 0 : 1 / (et - tt), Ht
        }
    }

    function eD(tt, et) {
      return et.domain(tt.domain()).interpolator(tt.interpolator()).clamp(tt.clamp()).unknown(tt.unknown())
    }

    function VD() {
      var tt = pe(tD()(Ce));
      return tt.copy = function() {
        return eD(tt, VD())
      }, Re.e.apply(tt, arguments)
    }

    function OD() {
      var tt = qV(tD()).domain([1, 10]);
      return tt.copy = function() {
        return eD(tt, OD()).base(tt.base())
      }, Re.e.apply(tt, arguments)
    }

    function qD() {
      var tt = jV(tD());
      return tt.copy = function() {
        return eD(tt, qD()).constant(tt.constant())
      }, Re.e.apply(tt, arguments)
    }

    function DD() {
      var tt = fV(tD());
      return tt.copy = function() {
        return eD(tt, DD()).exponent(tt.exponent())
      }, Re.e.apply(tt, arguments)
    }

    function mD() {
      return DD.apply(null, arguments).exponent(.5)
    }

    function dD() {
      var tt = [],
        et = Ce;

      function Vt(Vt) {
        if (null != Vt && !isNaN(Vt = +Vt)) return et((bt(tt, Vt, 1) - 1) / (tt.length - 1))
      }
      return Vt.domain = function(et) {
        if (!arguments.length) return tt.slice();
        tt = [];
        for (let Vt of et) null == Vt || isNaN(Vt = +Vt) || tt.push(Vt);
        return tt.sort(lt), Vt
      }, Vt.interpolator = function(tt) {
        return arguments.length ? (et = tt, Vt) : et
      }, Vt.range = function() {
        return tt.map(((Vt, Ot) => et(Ot / (tt.length - 1))))
      }, Vt.quantiles = function(et) {
        return Array.from({
          length: et + 1
        }, ((Vt, Ot) => hV(tt, Ot / et)))
      }, Vt.copy = function() {
        return dD(et).domain(tt)
      }, Re.e.apply(Vt, arguments)
    }

    function jD() {
      var tt, et, Vt, Ot, qt, Dt, mt, dt = 0,
        jt = .5,
        Ht = 1,
        Xt = 1,
        Qt = Ce,
        lt = !1;

      function Et(tt) {
        return isNaN(tt = +tt) ? mt : (tt = .5 + ((tt = +Dt(tt)) - et) * (Xt * tt < Xt * et ? Ot : qt), Qt(lt ? Math.max(0, Math.min(1, tt)) : tt))
      }

      function ft(tt) {
        return function(et) {
          var Vt, Ot, qt;
          return arguments.length ? ([Vt, Ot, qt] = et, Qt = function(tt, et) {
            void 0 === et && (et = tt, tt = ae);
            for (var Vt = 0, Ot = et.length - 1, qt = et[0], Dt = new Array(Ot < 0 ? 0 : Ot); Vt < Ot;) Dt[Vt] = tt(qt, qt = et[++Vt]);
            return function(tt) {
              var et = Math.max(0, Math.min(Ot - 1, Math.floor(tt *= Ot)));
              return Dt[et](tt - et)
            }
          }(tt, [Vt, Ot, qt]), Et) : [Qt(0), Qt(.5), Qt(1)]
        }
      }
      return Et.domain = function(mt) {
          return arguments.length ? ([dt, jt, Ht] = mt, tt = Dt(dt = +dt), et = Dt(jt = +jt), Vt = Dt(Ht = +Ht), Ot = tt === et ? 0 : .5 / (et - tt), qt = et === Vt ? 0 : .5 / (Vt - et), Xt = et < tt ? -1 : 1, Et) : [dt, jt, Ht]
        }, Et.clamp = function(tt) {
          return arguments.length ? (lt = !!tt, Et) : lt
        }, Et.interpolator = function(tt) {
          return arguments.length ? (Qt = tt, Et) : Qt
        }, Et.range = ft(ae), Et.rangeRound = ft(Me), Et.unknown = function(tt) {
          return arguments.length ? (mt = tt, Et) : mt
        },
        function(mt) {
          return Dt = mt, tt = mt(dt), et = mt(jt), Vt = mt(Ht), Ot = tt === et ? 0 : .5 / (et - tt), qt = et === Vt ? 0 : .5 / (Vt - et), Xt = et < tt ? -1 : 1, Et
        }
    }

    function HD() {
      var tt = pe(jD()(Ce));
      return tt.copy = function() {
        return eD(tt, HD())
      }, Re.e.apply(tt, arguments)
    }

    function XD() {
      var tt = qV(jD()).domain([.1, 1, 10]);
      return tt.copy = function() {
        return eD(tt, XD()).base(tt.base())
      }, Re.e.apply(tt, arguments)
    }

    function QD() {
      var tt = jV(jD());
      return tt.copy = function() {
        return eD(tt, QD()).constant(tt.constant())
      }, Re.e.apply(tt, arguments)
    }

    function lD() {
      var tt = fV(jD());
      return tt.copy = function() {
        return eD(tt, lD()).exponent(tt.exponent())
      }, Re.e.apply(tt, arguments)
    }

    function ED() {
      return lD.apply(null, arguments).exponent(.5)
    }

    function fD(tt, et) {
      if ((qt = tt.length) > 1)
        for (var Vt, Ot, qt, Dt = 1, mt = tt[et[0]], dt = mt.length; Dt < qt; ++Dt)
          for (Ot = mt, mt = tt[et[Dt]], Vt = 0; Vt < dt; ++Vt) mt[Vt][1] += mt[Vt][0] = isNaN(Ot[Vt][1]) ? Ot[Vt][0] : Ot[Vt][1]
    }! function(tt) {
      hO = function(tt) {
        var et = tt.dateTime,
          Vt = tt.date,
          Ot = tt.time,
          qt = tt.periods,
          Dt = tt.days,
          mt = tt.shortDays,
          dt = tt.months,
          jt = tt.shortMonths,
          Ht = LO(qt),
          Xt = FO(qt),
          Qt = LO(Dt),
          lt = FO(Dt),
          Et = LO(mt),
          ft = FO(mt),
          wt = LO(dt),
          yt = FO(dt),
          Nt = LO(jt),
          Mt = FO(jt),
          bt = {
            a: function(tt) {
              return mt[tt.getDay()]
            },
            A: function(tt) {
              return Dt[tt.getDay()]
            },
            b: function(tt) {
              return jt[tt.getMonth()]
            },
            B: function(tt) {
              return dt[tt.getMonth()]
            },
            c: null,
            d: qq,
            e: qq,
            f: Hq,
            g: bq,
            G: Cq,
            H: Dq,
            I: mq,
            j: dq,
            L: jq,
            m: Xq,
            M: Qq,
            p: function(tt) {
              return qt[+(tt.getHours() >= 12)]
            },
            q: function(tt) {
              return 1 + ~~(tt.getMonth() / 3)
            },
            Q: Bq,
            s: pq,
            S: lq,
            u: Eq,
            U: fq,
            V: yq,
            w: Nq,
            W: aq,
            x: null,
            X: null,
            y: Mq,
            Y: Jq,
            Z: uq,
            "%": Yq
          },
          Jt = {
            a: function(tt) {
              return mt[tt.getUTCDay()]
            },
            A: function(tt) {
              return Dt[tt.getUTCDay()]
            },
            b: function(tt) {
              return jt[tt.getUTCMonth()]
            },
            B: function(tt) {
              return dt[tt.getUTCMonth()]
            },
            c: null,
            d: Kq,
            e: Kq,
            f: cq,
            g: rq,
            G: Aq,
            H: hq,
            I: vq,
            j: Wq,
            L: Sq,
            m: Rq,
            M: Iq,
            p: function(tt) {
              return qt[+(tt.getUTCHours() >= 12)]
            },
            q: function(tt) {
              return 1 + ~~(tt.getUTCMonth() / 3)
            },
            Q: Bq,
            s: pq,
            S: Pq,
            u: Zq,
            U: Lq,
            V: kq,
            w: Gq,
            W: zq,
            x: null,
            X: null,
            y: oq,
            Y: Uq,
            Z: iq,
            "%": Yq
          },
          Ct = {
            a: function(tt, et, Vt) {
              var Ot = Et.exec(et.slice(Vt));
              return Ot ? (tt.w = ft.get(Ot[0].toLowerCase()), Vt + Ot[0].length) : -1
            },
            A: function(tt, et, Vt) {
              var Ot = Qt.exec(et.slice(Vt));
              return Ot ? (tt.w = lt.get(Ot[0].toLowerCase()), Vt + Ot[0].length) : -1
            },
            b: function(tt, et, Vt) {
              var Ot = Nt.exec(et.slice(Vt));
              return Ot ? (tt.m = Mt.get(Ot[0].toLowerCase()), Vt + Ot[0].length) : -1
            },
            B: function(tt, et, Vt) {
              var Ot = wt.exec(et.slice(Vt));
              return Ot ? (tt.m = yt.get(Ot[0].toLowerCase()), Vt + Ot[0].length) : -1
            },
            c: function(tt, Vt, Ot) {
              return ht(tt, et, Vt, Ot)
            },
            d: pO,
            e: pO,
            f: tq,
            g: AO,
            G: UO,
            H: TO,
            I: TO,
            j: xO,
            L: nO,
            m: BO,
            M: gO,
            p: function(tt, et, Vt) {
              var Ot = Ht.exec(et.slice(Vt));
              return Ot ? (tt.p = Xt.get(Ot[0].toLowerCase()), Vt + Ot[0].length) : -1
            },
            q: YO,
            Q: Vq,
            s: Oq,
            S: sO,
            u: GO,
            U: zO,
            V: oO,
            w: kO,
            W: rO,
            x: function(tt, et, Ot) {
              return ht(tt, Vt, et, Ot)
            },
            X: function(tt, et, Vt) {
              return ht(tt, Ot, et, Vt)
            },
            y: AO,
            Y: UO,
            Z: iO,
            "%": eq
          };

        function ut(tt, et) {
          return function(Vt) {
            var Ot, qt, Dt, mt = [],
              dt = -1,
              jt = 0,
              Ht = tt.length;
            for (Vt instanceof Date || (Vt = new Date(+Vt)); ++dt < Ht;) 37 === tt.charCodeAt(dt) && (mt.push(tt.slice(jt, dt)), null != (qt = SO[Ot = tt.charAt(++dt)]) ? Ot = tt.charAt(++dt) : qt = "e" === Ot ? " " : "0", (Dt = et[Ot]) && (Ot = Dt(Vt, qt)), mt.push(Ot), jt = dt + 1);
            return mt.push(tt.slice(jt, dt)), mt.join("")
          }
        }

        function Kt(tt, et) {
          return function(Vt) {
            var Ot, qt, Dt = KO(1900, void 0, 1);
            if (ht(Dt, tt, Vt += "", 0) != Vt.length) return null;
            if ("Q" in Dt) return new Date(Dt.Q);
            if ("s" in Dt) return new Date(1e3 * Dt.s + ("L" in Dt ? Dt.L : 0));
            if (et && !("Z" in Dt) && (Dt.Z = 0), "p" in Dt && (Dt.H = Dt.H % 12 + 12 * Dt.p), void 0 === Dt.m && (Dt.m = "q" in Dt ? Dt.q : 0), "V" in Dt) {
              if (Dt.V < 1 || Dt.V > 53) return null;
              "w" in Dt || (Dt.w = 1), "Z" in Dt ? (qt = (Ot = uO(KO(Dt.y, 0, 1))).getUTCDay(), Ot = qt > 4 || 0 === qt ? dO.ceil(Ot) : dO(Ot), Ot = xV.offset(Ot, 7 * (Dt.V - 1)), Dt.y = Ot.getUTCFullYear(), Dt.m = Ot.getUTCMonth(), Dt.d = Ot.getUTCDate() + (Dt.w + 6) % 7) : (qt = (Ot = CO(KO(Dt.y, 0, 1))).getDay(), Ot = qt > 4 || 0 === qt ? nV.ceil(Ot) : nV(Ot), Ot = pV.offset(Ot, 7 * (Dt.V - 1)), Dt.y = Ot.getFullYear(), Dt.m = Ot.getMonth(), Dt.d = Ot.getDate() + (Dt.w + 6) % 7)
            } else("W" in Dt || "U" in Dt) && ("w" in Dt || (Dt.w = "u" in Dt ? Dt.u % 7 : "W" in Dt ? 1 : 0), qt = "Z" in Dt ? uO(KO(Dt.y, 0, 1)).getUTCDay() : CO(KO(Dt.y, 0, 1)).getDay(), Dt.m = 0, Dt.d = "W" in Dt ? (Dt.w + 6) % 7 + 7 * Dt.W - (qt + 5) % 7 : Dt.w + 7 * Dt.U - (qt + 6) % 7);
            return "Z" in Dt ? (Dt.H += Dt.Z / 100 | 0, Dt.M += Dt.Z % 100, uO(Dt)) : CO(Dt)
          }
        }

        function ht(tt, et, Vt, Ot) {
          for (var qt, Dt, mt = 0, dt = et.length, jt = Vt.length; mt < dt;) {
            if (Ot >= jt) return -1;
            if (37 === (qt = et.charCodeAt(mt++))) {
              if (qt = et.charAt(mt++), !(Dt = Ct[qt in SO ? et.charAt(mt++) : qt]) || (Ot = Dt(tt, Vt, Ot)) < 0) return -1
            } else if (qt != Vt.charCodeAt(Ot++)) return -1
          }
          return Ot
        }
        return bt.x = ut(Vt, bt), bt.X = ut(Ot, bt), bt.c = ut(et, bt), Jt.x = ut(Vt, Jt), Jt.X = ut(Ot, Jt), Jt.c = ut(et, Jt), {
          format: function(tt) {
            var et = ut(tt += "", bt);
            return et.toString = function() {
              return tt
            }, et
          },
          parse: function(tt) {
            var et = Kt(tt += "", !1);
            return et.toString = function() {
              return tt
            }, et
          },
          utcFormat: function(tt) {
            var et = ut(tt += "", Jt);
            return et.toString = function() {
              return tt
            }, et
          },
          utcParse: function(tt) {
            var et = Kt(tt += "", !0);
            return et.toString = function() {
              return tt
            }, et
          }
        }
      }(tt), vO = hO.format, hO.parse, WO = hO.utcFormat, hO.utcParse
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
    var wD = Vt(6397),
      yD = Vt(6270);

    function ND(tt) {
      for (var et = tt.length, Vt = new Array(et); --et >= 0;) Vt[et] = et;
      return Vt
    }

    function aD(tt, et) {
      return tt[et]
    }

    function MD(tt) {
      const et = [];
      return et.key = tt, et
    }
    var bD = Vt(6340),
      JD = Vt.n(bD),
      CD = Vt(6359),
      uD = Vt.n(CD),
      KD = Vt(5603),
      hD = Vt.n(KD),
      vD = Vt(5436),
      WD = Vt.n(vD),
      SD = Vt(5357),
      cD = Vt.n(SD),
      RD = Vt(5374),
      ID = Vt.n(RD),
      PD = Vt(6364),
      ZD = Vt.n(PD),
      LD = Vt(5364),
      FD = Vt.n(LD),
      kD = Vt(6231),
      GD = Vt.n(kD),
      zD = Vt(6377),
      oD = Vt.n(zD),
      rD = Vt(5696),
      UD = Vt.n(rD),
      AD = Vt(6379),
      iD = Vt.n(AD);

    function YD(tt) {
      return function(tt) {
        if (Array.isArray(tt)) return BD(tt)
      }(tt) || function(tt) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(tt)) return Array.from(tt)
      }(tt) || function(tt, et) {
        if (!tt) return;
        if ("string" === typeof tt) return BD(tt, et);
        var Vt = Object.prototype.toString.call(tt).slice(8, -1);
        "Object" === Vt && tt.constructor && (Vt = tt.constructor.name);
        if ("Map" === Vt || "Set" === Vt) return Array.from(tt);
        if ("Arguments" === Vt || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Vt)) return BD(tt, et)
      }(tt) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function BD(tt, et) {
      (null == et || et > tt.length) && (et = tt.length);
      for (var Vt = 0, Ot = new Array(et); Vt < et; Vt++) Ot[Vt] = tt[Vt];
      return Ot
    }
    var pD = function(tt) {
        return tt
      },
      xD = {
        "@@functional/placeholder": !0
      },
      TD = function(tt) {
        return tt === xD
      },
      gD = function(tt) {
        return function et() {
          return 0 === arguments.length || 1 === arguments.length && TD(arguments.length <= 0 ? void 0 : arguments[0]) ? et : tt.apply(void 0, arguments)
        }
      },
      sD = function tt(et, Vt) {
        return 1 === et ? Vt : gD((function() {
          for (var Ot = arguments.length, qt = new Array(Ot), Dt = 0; Dt < Ot; Dt++) qt[Dt] = arguments[Dt];
          var mt = qt.filter((function(tt) {
            return tt !== xD
          })).length;
          return mt >= et ? Vt.apply(void 0, qt) : tt(et - mt, gD((function() {
            for (var tt = arguments.length, et = new Array(tt), Ot = 0; Ot < tt; Ot++) et[Ot] = arguments[Ot];
            var Dt = qt.map((function(tt) {
              return TD(tt) ? et.shift() : tt
            }));
            return Vt.apply(void 0, YD(Dt).concat(et))
          })))
        }))
      },
      nD = function(tt) {
        return sD(tt.length, tt)
      },
      tm = function(tt, et) {
        for (var Vt = [], Ot = tt; Ot < et; ++Ot) Vt[Ot - tt] = Ot;
        return Vt
      },
      em = nD((function(tt, et) {
        return Array.isArray(et) ? et.map(tt) : Object.keys(et).map((function(tt) {
          return et[tt]
        })).map(tt)
      })),
      Vm = function() {
        for (var tt = arguments.length, et = new Array(tt), Vt = 0; Vt < tt; Vt++) et[Vt] = arguments[Vt];
        if (!et.length) return pD;
        var Ot = et.reverse(),
          qt = Ot[0],
          Dt = Ot.slice(1);
        return function() {
          return Dt.reduce((function(tt, et) {
            return et(tt)
          }), qt.apply(void 0, arguments))
        }
      },
      Om = function(tt) {
        return Array.isArray(tt) ? tt.reverse() : tt.split("").reverse.join("")
      },
      qm = function(tt) {
        var et = null,
          Vt = null;
        return function() {
          for (var Ot = arguments.length, qt = new Array(Ot), Dt = 0; Dt < Ot; Dt++) qt[Dt] = arguments[Dt];
          return et && qt.every((function(tt, Vt) {
            return tt === et[Vt]
          })) ? Vt : (et = qt, Vt = tt.apply(void 0, qt))
        }
      };
    const Dm = {
      rangeStep: function(tt, et, Vt) {
        for (var Ot = new(iD())(tt), qt = 0, Dt = []; Ot.lt(et) && qt < 1e5;) Dt.push(Ot.toNumber()), Ot = Ot.add(Vt), qt++;
        return Dt
      },
      getDigitCount: function(tt) {
        return 0 === tt ? 1 : Math.floor(new(iD())(tt).abs().log(10).toNumber()) + 1
      },
      interpolateNumber: nD((function(tt, et, Vt) {
        var Ot = +tt;
        return Ot + Vt * (+et - Ot)
      })),
      uninterpolateNumber: nD((function(tt, et, Vt) {
        var Ot = et - +tt;
        return (Vt - tt) / (Ot = Ot || 1 / 0)
      })),
      uninterpolateTruncation: nD((function(tt, et, Vt) {
        var Ot = et - +tt;
        return Ot = Ot || 1 / 0, Math.max(0, Math.min(1, (Vt - tt) / Ot))
      }))
    };

    function mm(tt) {
      return function(tt) {
        if (Array.isArray(tt)) return Hm(tt)
      }(tt) || function(tt) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(tt)) return Array.from(tt)
      }(tt) || jm(tt) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function dm(tt, et) {
      return function(tt) {
        if (Array.isArray(tt)) return tt
      }(tt) || function(tt, et) {
        if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(tt))) return;
        var Vt = [],
          Ot = !0,
          qt = !1,
          Dt = void 0;
        try {
          for (var mt, dt = tt[Symbol.iterator](); !(Ot = (mt = dt.next()).done) && (Vt.push(mt.value), !et || Vt.length !== et); Ot = !0);
        } catch (jt) {
          qt = !0, Dt = jt
        } finally {
          try {
            Ot || null == dt.return || dt.return()
          } finally {
            if (qt) throw Dt
          }
        }
        return Vt
      }(tt, et) || jm(tt, et) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function jm(tt, et) {
      if (tt) {
        if ("string" === typeof tt) return Hm(tt, et);
        var Vt = Object.prototype.toString.call(tt).slice(8, -1);
        return "Object" === Vt && tt.constructor && (Vt = tt.constructor.name), "Map" === Vt || "Set" === Vt ? Array.from(tt) : "Arguments" === Vt || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Vt) ? Hm(tt, et) : void 0
      }
    }

    function Hm(tt, et) {
      (null == et || et > tt.length) && (et = tt.length);
      for (var Vt = 0, Ot = new Array(et); Vt < et; Vt++) Ot[Vt] = tt[Vt];
      return Ot
    }

    function Xm(tt) {
      var et = dm(tt, 2),
        Vt = et[0],
        Ot = et[1],
        qt = Vt,
        Dt = Ot;
      return Vt > Ot && (qt = Ot, Dt = Vt), [qt, Dt]
    }

    function Qm(tt, et, Vt) {
      if (tt.lte(0)) return new(iD())(0);
      var Ot = Dm.getDigitCount(tt.toNumber()),
        qt = new(iD())(10).pow(Ot),
        Dt = tt.div(qt),
        mt = 1 !== Ot ? .05 : .1,
        dt = new(iD())(Math.ceil(Dt.div(mt).toNumber())).add(Vt).mul(mt).mul(qt);
      return et ? dt : new(iD())(Math.ceil(dt))
    }

    function lm(tt, et, Vt) {
      var Ot = 1,
        qt = new(iD())(tt);
      if (!qt.isint() && Vt) {
        var Dt = Math.abs(tt);
        Dt < 1 ? (Ot = new(iD())(10).pow(Dm.getDigitCount(tt) - 1), qt = new(iD())(Math.floor(qt.div(Ot).toNumber())).mul(Ot)) : Dt > 1 && (qt = new(iD())(Math.floor(tt)))
      } else 0 === tt ? qt = new(iD())(Math.floor((et - 1) / 2)) : Vt || (qt = new(iD())(Math.floor(tt)));
      var mt = Math.floor((et - 1) / 2);
      return Vm(em((function(tt) {
        return qt.add(new(iD())(tt - mt).mul(Ot)).toNumber()
      })), tm)(0, et)
    }

    function Em(tt, et, Vt, Ot) {
      var qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      if (!Number.isFinite((et - tt) / (Vt - 1))) return {
        step: new(iD())(0),
        tickMin: new(iD())(0),
        tickMax: new(iD())(0)
      };
      var Dt, mt = Qm(new(iD())(et).sub(tt).div(Vt - 1), Ot, qt);
      Dt = tt <= 0 && et >= 0 ? new(iD())(0) : (Dt = new(iD())(tt).add(et).div(2)).sub(new(iD())(Dt).mod(mt));
      var dt = Math.ceil(Dt.sub(tt).div(mt).toNumber()),
        jt = Math.ceil(new(iD())(et).sub(Dt).div(mt).toNumber()),
        Ht = dt + jt + 1;
      return Ht > Vt ? Em(tt, et, Vt, Ot, qt + 1) : (Ht < Vt && (jt = et > 0 ? jt + (Vt - Ht) : jt, dt = et > 0 ? dt : dt + (Vt - Ht)), {
        step: mt,
        tickMin: Dt.sub(new(iD())(dt).mul(mt)),
        tickMax: Dt.add(new(iD())(jt).mul(mt))
      })
    }
    var fm = qm((function(tt) {
        var et = dm(tt, 2),
          Vt = et[0],
          Ot = et[1],
          qt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          Dt = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          mt = Math.max(qt, 2),
          dt = dm(Xm([Vt, Ot]), 2),
          jt = dt[0],
          Ht = dt[1];
        if (jt === -1 / 0 || Ht === 1 / 0) {
          var Xt = Ht === 1 / 0 ? [jt].concat(mm(tm(0, qt - 1).map((function() {
            return 1 / 0
          })))) : [].concat(mm(tm(0, qt - 1).map((function() {
            return -1 / 0
          }))), [Ht]);
          return Vt > Ot ? Om(Xt) : Xt
        }
        if (jt === Ht) return lm(jt, qt, Dt);
        var Qt = Em(jt, Ht, mt, Dt),
          lt = Qt.step,
          Et = Qt.tickMin,
          ft = Qt.tickMax,
          wt = Dm.rangeStep(Et, ft.add(new(iD())(.1).mul(lt)), lt);
        return Vt > Ot ? Om(wt) : wt
      })),
      wm = (qm((function(tt) {
        var et = dm(tt, 2),
          Vt = et[0],
          Ot = et[1],
          qt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          Dt = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          mt = Math.max(qt, 2),
          dt = dm(Xm([Vt, Ot]), 2),
          jt = dt[0],
          Ht = dt[1];
        if (jt === -1 / 0 || Ht === 1 / 0) return [Vt, Ot];
        if (jt === Ht) return lm(jt, qt, Dt);
        var Xt = Qm(new(iD())(Ht).sub(jt).div(mt - 1), Dt, 0),
          Qt = Vm(em((function(tt) {
            return new(iD())(jt).add(new(iD())(tt).mul(Xt)).toNumber()
          })), tm)(0, mt).filter((function(tt) {
            return tt >= jt && tt <= Ht
          }));
        return Vt > Ot ? Om(Qt) : Qt
      })), qm((function(tt, et) {
        var Vt = dm(tt, 2),
          Ot = Vt[0],
          qt = Vt[1],
          Dt = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          mt = dm(Xm([Ot, qt]), 2),
          dt = mt[0],
          jt = mt[1];
        if (dt === -1 / 0 || jt === 1 / 0) return [Ot, qt];
        if (dt === jt) return [dt];
        var Ht = Math.max(et, 2),
          Xt = Qm(new(iD())(jt).sub(dt).div(Ht - 1), Dt, 0),
          Qt = [].concat(mm(Dm.rangeStep(new(iD())(dt), new(iD())(jt).sub(new(iD())(.99).mul(Xt)), Xt)), [jt]);
        return Ot > qt ? Om(Qt) : Qt
      }))),
      ym = Vt(6385),
      Nm = Vt(5348),
      am = Vt(5614),
      Mm = Vt(6388);

    function bm(tt) {
      return bm = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, bm(tt)
    }

    function Jm(tt) {
      return function(tt) {
        if (Array.isArray(tt)) return Cm(tt)
      }(tt) || function(tt) {
        if ("undefined" !== typeof Symbol && null != tt[Symbol.iterator] || null != tt["@@iterator"]) return Array.from(tt)
      }(tt) || function(tt, et) {
        if (!tt) return;
        if ("string" === typeof tt) return Cm(tt, et);
        var Vt = Object.prototype.toString.call(tt).slice(8, -1);
        "Object" === Vt && tt.constructor && (Vt = tt.constructor.name);
        if ("Map" === Vt || "Set" === Vt) return Array.from(tt);
        if ("Arguments" === Vt || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Vt)) return Cm(tt, et)
      }(tt) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Cm(tt, et) {
      (null == et || et > tt.length) && (et = tt.length);
      for (var Vt = 0, Ot = new Array(et); Vt < et; Vt++) Ot[Vt] = tt[Vt];
      return Ot
    }

    function um(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function Km(tt) {
      for (var et = 1; et < arguments.length; et++) {
        var Vt = null != arguments[et] ? arguments[et] : {};
        et % 2 ? um(Object(Vt), !0).forEach((function(et) {
          hm(tt, et, Vt[et])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : um(Object(Vt)).forEach((function(et) {
          Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
        }))
      }
      return tt
    }

    function hm(tt, et, Vt) {
      return (et = function(tt) {
        var et = function(tt, et) {
          if ("object" != bm(tt) || !tt) return tt;
          var Vt = tt[Symbol.toPrimitive];
          if (void 0 !== Vt) {
            var Ot = Vt.call(tt, et || "default");
            if ("object" != bm(Ot)) return Ot;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === et ? String : Number)(tt)
        }(tt, "string");
        return "symbol" == bm(et) ? et : et + ""
      }(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }

    function Wm(tt, et, Vt) {
      return hD()(tt) || hD()(et) ? Vt : (0, Nm.w)(et) ? ID()(tt, et, Vt) : WD()(et) ? et(tt) : Vt
    }

    function Sm(tt, et, Vt, Ot) {
      var qt = ZD()(tt, (function(tt) {
        return Wm(tt, et)
      }));
      if ("number" === Vt) {
        var Dt = qt.filter((function(tt) {
          return (0, Nm.A)(tt) || parseFloat(tt)
        }));
        return Dt.length ? [uD()(Dt), JD()(Dt)] : [1 / 0, -1 / 0]
      }
      return (Ot ? qt.filter((function(tt) {
        return !hD()(tt)
      })) : qt).map((function(tt) {
        return (0, Nm.w)(tt) || tt instanceof Date ? tt : ""
      }))
    }
    var cm = function(tt) {
        var et, Vt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          Ot = arguments.length > 2 ? arguments[2] : void 0,
          qt = arguments.length > 3 ? arguments[3] : void 0,
          Dt = -1,
          mt = null !== (et = null === Vt || void 0 === Vt ? void 0 : Vt.length) && void 0 !== et ? et : 0;
        if (mt <= 1) return 0;
        if (qt && "angleAxis" === qt.axisType && Math.abs(Math.abs(qt.range[1] - qt.range[0]) - 360) <= 1e-6)
          for (var dt = qt.range, jt = 0; jt < mt; jt++) {
            var Ht = jt > 0 ? Ot[jt - 1].coordinate : Ot[mt - 1].coordinate,
              Xt = Ot[jt].coordinate,
              Qt = jt >= mt - 1 ? Ot[0].coordinate : Ot[jt + 1].coordinate,
              lt = void 0;
            if ((0, Nm.H)(Xt - Ht) !== (0, Nm.H)(Qt - Xt)) {
              var Et = [];
              if ((0, Nm.H)(Qt - Xt) === (0, Nm.H)(dt[1] - dt[0])) {
                lt = Qt;
                var ft = Xt + dt[1] - dt[0];
                Et[0] = Math.min(ft, (ft + Ht) / 2), Et[1] = Math.max(ft, (ft + Ht) / 2)
              } else {
                lt = Ht;
                var wt = Qt + dt[1] - dt[0];
                Et[0] = Math.min(Xt, (wt + Xt) / 2), Et[1] = Math.max(Xt, (wt + Xt) / 2)
              }
              var yt = [Math.min(Xt, (lt + Xt) / 2), Math.max(Xt, (lt + Xt) / 2)];
              if (tt > yt[0] && tt <= yt[1] || tt >= Et[0] && tt <= Et[1]) {
                Dt = Ot[jt].index;
                break
              }
            } else {
              var Nt = Math.min(Ht, Qt),
                Mt = Math.max(Ht, Qt);
              if (tt > (Nt + Xt) / 2 && tt <= (Mt + Xt) / 2) {
                Dt = Ot[jt].index;
                break
              }
            }
          } else
            for (var bt = 0; bt < mt; bt++)
              if (0 === bt && tt <= (Vt[bt].coordinate + Vt[bt + 1].coordinate) / 2 || bt > 0 && bt < mt - 1 && tt > (Vt[bt].coordinate + Vt[bt - 1].coordinate) / 2 && tt <= (Vt[bt].coordinate + Vt[bt + 1].coordinate) / 2 || bt === mt - 1 && tt > (Vt[bt].coordinate + Vt[bt - 1].coordinate) / 2) {
                Dt = Vt[bt].index;
                break
              } return Dt
      },
      Rm = function(tt) {
        var et, Vt, Ot = tt.type.displayName,
          qt = null !== (et = tt.type) && void 0 !== et && et.defaultProps ? Km(Km({}, tt.type.defaultProps), tt.props) : tt.props,
          Dt = qt.stroke,
          mt = qt.fill;
        switch (Ot) {
          case "Line":
            Vt = Dt;
            break;
          case "Area":
          case "Radar":
            Vt = Dt && "none" !== Dt ? Dt : mt;
            break;
          default:
            Vt = mt
        }
        return Vt
      },
      Im = function(tt) {
        var et = tt.barSize,
          Vt = tt.totalSize,
          Ot = tt.stackGroups,
          qt = void 0 === Ot ? {} : Ot;
        if (!qt) return {};
        for (var Dt = {}, mt = Object.keys(qt), dt = 0, jt = mt.length; dt < jt; dt++)
          for (var Ht = qt[mt[dt]].stackGroups, Xt = Object.keys(Ht), Qt = 0, lt = Xt.length; Qt < lt; Qt++) {
            var Et = Ht[Xt[Qt]],
              ft = Et.items,
              wt = Et.cateAxisId,
              yt = ft.filter((function(tt) {
                return (0, am.g)(tt.type).indexOf("Bar") >= 0
              }));
            if (yt && yt.length) {
              var Nt = yt[0].type.defaultProps,
                Mt = void 0 !== Nt ? Km(Km({}, Nt), yt[0].props) : yt[0].props,
                bt = Mt.barSize,
                Jt = Mt[wt];
              Dt[Jt] || (Dt[Jt] = []);
              var Ct = hD()(bt) ? et : bt;
              Dt[Jt].push({
                item: yt[0],
                stackList: yt.slice(1),
                barSize: hD()(Ct) ? void 0 : (0, Nm.m)(Ct, Vt, 0)
              })
            }
          }
        return Dt
      },
      Pm = function(tt) {
        var et = tt.barGap,
          Vt = tt.barCategoryGap,
          Ot = tt.bandSize,
          qt = tt.sizeList,
          Dt = void 0 === qt ? [] : qt,
          mt = tt.maxBarSize,
          dt = Dt.length;
        if (dt < 1) return null;
        var jt, Ht = (0, Nm.m)(et, Ot, 0, !0),
          Xt = [];
        if (Dt[0].barSize === +Dt[0].barSize) {
          var Qt = !1,
            lt = Ot / dt,
            Et = Dt.reduce((function(tt, et) {
              return tt + et.barSize || 0
            }), 0);
          (Et += (dt - 1) * Ht) >= Ot && (Et -= (dt - 1) * Ht, Ht = 0), Et >= Ot && lt > 0 && (Qt = !0, Et = dt * (lt *= .9));
          var ft = {
            offset: ((Ot - Et) / 2 | 0) - Ht,
            size: 0
          };
          jt = Dt.reduce((function(tt, et) {
            var Vt = {
                item: et.item,
                position: {
                  offset: ft.offset + ft.size + Ht,
                  size: Qt ? lt : et.barSize
                }
              },
              Ot = [].concat(Jm(tt), [Vt]);
            return ft = Ot[Ot.length - 1].position, et.stackList && et.stackList.length && et.stackList.forEach((function(tt) {
              Ot.push({
                item: tt,
                position: ft
              })
            })), Ot
          }), Xt)
        } else {
          var wt = (0, Nm.m)(Vt, Ot, 0, !0);
          Ot - 2 * wt - (dt - 1) * Ht <= 0 && (Ht = 0);
          var yt = (Ot - 2 * wt - (dt - 1) * Ht) / dt;
          yt > 1 && (yt >>= 0);
          var Nt = mt === +mt ? Math.min(yt, mt) : yt;
          jt = Dt.reduce((function(tt, et, Vt) {
            var Ot = [].concat(Jm(tt), [{
              item: et.item,
              position: {
                offset: wt + (yt + Ht) * Vt + (yt - Nt) / 2,
                size: Nt
              }
            }]);
            return et.stackList && et.stackList.length && et.stackList.forEach((function(tt) {
              Ot.push({
                item: tt,
                position: Ot[Ot.length - 1].position
              })
            })), Ot
          }), Xt)
        }
        return jt
      },
      Zm = function(tt, et, Vt, Ot) {
        var qt = Vt.children,
          Dt = Vt.width,
          mt = Vt.margin,
          dt = Dt - (mt.left || 0) - (mt.right || 0),
          jt = (0, Mm.b)({
            children: qt,
            legendWidth: dt
          });
        if (jt) {
          var Ht = Ot || {},
            Xt = Ht.width,
            Qt = Ht.height,
            lt = jt.align,
            Et = jt.verticalAlign,
            ft = jt.layout;
          if (("vertical" === ft || "horizontal" === ft && "middle" === Et) && "center" !== lt && (0, Nm.A)(tt[lt])) return Km(Km({}, tt), {}, hm({}, lt, tt[lt] + (Xt || 0)));
          if (("horizontal" === ft || "vertical" === ft && "center" === lt) && "middle" !== Et && (0, Nm.A)(tt[Et])) return Km(Km({}, tt), {}, hm({}, Et, tt[Et] + (Qt || 0)))
        }
        return tt
      },
      Lm = function(tt, et, Vt, Ot, qt) {
        var Dt = et.props.children,
          mt = (0, am.d)(Dt, ym.d).filter((function(tt) {
            return function(tt, et, Vt) {
              return !!hD()(et) || ("horizontal" === tt ? "yAxis" === et : "vertical" === tt || "x" === Vt ? "xAxis" === et : "y" !== Vt || "yAxis" === et)
            }(Ot, qt, tt.props.direction)
          }));
        if (mt && mt.length) {
          var dt = mt.map((function(tt) {
            return tt.props.dataKey
          }));
          return tt.reduce((function(tt, et) {
            var Ot = Wm(et, Vt);
            if (hD()(Ot)) return tt;
            var qt = Array.isArray(Ot) ? [uD()(Ot), JD()(Ot)] : [Ot, Ot],
              Dt = dt.reduce((function(tt, Vt) {
                var Ot = Wm(et, Vt, 0),
                  Dt = qt[0] - Math.abs(Array.isArray(Ot) ? Ot[0] : Ot),
                  mt = qt[1] + Math.abs(Array.isArray(Ot) ? Ot[1] : Ot);
                return [Math.min(Dt, tt[0]), Math.max(mt, tt[1])]
              }), [1 / 0, -1 / 0]);
            return [Math.min(Dt[0], tt[0]), Math.max(Dt[1], tt[1])]
          }), [1 / 0, -1 / 0])
        }
        return null
      },
      Fm = function(tt, et, Vt, Ot, qt) {
        var Dt = et.map((function(et) {
          return Lm(tt, et, Vt, qt, Ot)
        })).filter((function(tt) {
          return !hD()(tt)
        }));
        return Dt && Dt.length ? Dt.reduce((function(tt, et) {
          return [Math.min(tt[0], et[0]), Math.max(tt[1], et[1])]
        }), [1 / 0, -1 / 0]) : null
      },
      km = function(tt, et, Vt, Ot, qt) {
        var Dt = et.map((function(et) {
          var Dt = et.props.dataKey;
          return "number" === Vt && Dt && Lm(tt, et, Dt, Ot) || Sm(tt, Dt, Vt, qt)
        }));
        if ("number" === Vt) return Dt.reduce((function(tt, et) {
          return [Math.min(tt[0], et[0]), Math.max(tt[1], et[1])]
        }), [1 / 0, -1 / 0]);
        var mt = {};
        return Dt.reduce((function(tt, et) {
          for (var Vt = 0, Ot = et.length; Vt < Ot; Vt++) mt[et[Vt]] || (mt[et[Vt]] = !0, tt.push(et[Vt]));
          return tt
        }), [])
      },
      Gm = function(tt, et) {
        return "horizontal" === tt && "xAxis" === et || "vertical" === tt && "yAxis" === et || "centric" === tt && "angleAxis" === et || "radial" === tt && "radiusAxis" === et
      },
      zm = function(tt, et, Vt, Ot) {
        if (Ot) return tt.map((function(tt) {
          return tt.coordinate
        }));
        var qt, Dt, mt = tt.map((function(tt) {
          return tt.coordinate === et && (qt = !0), tt.coordinate === Vt && (Dt = !0), tt.coordinate
        }));
        return qt || mt.push(et), Dt || mt.push(Vt), mt
      },
      om = function(tt, et, Vt) {
        if (!tt) return null;
        var Ot = tt.scale,
          qt = tt.duplicateDomain,
          Dt = tt.type,
          mt = tt.range,
          dt = "scaleBand" === tt.realScaleType ? Ot.bandwidth() / 2 : 2,
          jt = (et || Vt) && "category" === Dt && Ot.bandwidth ? Ot.bandwidth() / dt : 0;
        return jt = "angleAxis" === tt.axisType && (null === mt || void 0 === mt ? void 0 : mt.length) >= 2 ? 2 * (0, Nm.H)(mt[0] - mt[1]) * jt : jt, et && (tt.ticks || tt.niceTicks) ? (tt.ticks || tt.niceTicks).map((function(tt) {
          var et = qt ? qt.indexOf(tt) : tt;
          return {
            coordinate: Ot(et) + jt,
            value: tt,
            offset: jt
          }
        })).filter((function(tt) {
          return !FD()(tt.coordinate)
        })) : tt.isCategorical && tt.categoricalDomain ? tt.categoricalDomain.map((function(tt, et) {
          return {
            coordinate: Ot(tt) + jt,
            value: tt,
            index: et,
            offset: jt
          }
        })) : Ot.ticks && !Vt ? Ot.ticks(tt.tickCount).map((function(tt) {
          return {
            coordinate: Ot(tt) + jt,
            value: tt,
            offset: jt
          }
        })) : Ot.domain().map((function(tt, et) {
          return {
            coordinate: Ot(tt) + jt,
            value: qt ? qt[tt] : tt,
            index: et,
            offset: jt
          }
        }))
      },
      rm = new WeakMap,
      Um = function(tt, et) {
        if ("function" !== typeof et) return tt;
        rm.has(tt) || rm.set(tt, new WeakMap);
        var Vt = rm.get(tt);
        if (Vt.has(et)) return Vt.get(et);
        var Ot = function() {
          tt.apply(void 0, arguments), et.apply(void 0, arguments)
        };
        return Vt.set(et, Ot), Ot
      },
      Am = function(tt, et, Vt) {
        var Dt = tt.scale,
          mt = tt.type,
          dt = tt.layout,
          jt = tt.axisType;
        if ("auto" === Dt) return "radial" === dt && "radiusAxis" === jt ? {
          scale: qt.b(),
          realScaleType: "band"
        } : "radial" === dt && "angleAxis" === jt ? {
          scale: xe(),
          realScaleType: "linear"
        } : "category" === mt && et && (et.indexOf("LineChart") >= 0 || et.indexOf("AreaChart") >= 0 || et.indexOf("ComposedChart") >= 0 && !Vt) ? {
          scale: qt.d(),
          realScaleType: "point"
        } : "category" === mt ? {
          scale: qt.b(),
          realScaleType: "band"
        } : {
          scale: xe(),
          realScaleType: "linear"
        };
        if (cD()(Dt)) {
          var Ht = "scale".concat(GD()(Dt));
          return {
            scale: (Ot[Ht] || qt.d)(),
            realScaleType: Ot[Ht] ? Ht : "point"
          }
        }
        return WD()(Dt) ? {
          scale: Dt
        } : {
          scale: qt.d(),
          realScaleType: "point"
        }
      },
      im = 1e-4,
      Ym = function(tt) {
        var et = tt.domain();
        if (et && !(et.length <= 2)) {
          var Vt = et.length,
            Ot = tt.range(),
            qt = Math.min(Ot[0], Ot[1]) - im,
            Dt = Math.max(Ot[0], Ot[1]) + im,
            mt = tt(et[0]),
            dt = tt(et[Vt - 1]);
          (mt < qt || mt > Dt || dt < qt || dt > Dt) && tt.domain([et[0], et[Vt - 1]])
        }
      },
      Bm = function(tt, et) {
        if (!tt) return null;
        for (var Vt = 0, Ot = tt.length; Vt < Ot; Vt++)
          if (tt[Vt].item === et) return tt[Vt].position;
        return null
      },
      pm = function(tt, et) {
        if (!et || 2 !== et.length || !(0, Nm.A)(et[0]) || !(0, Nm.A)(et[1])) return tt;
        var Vt = Math.min(et[0], et[1]),
          Ot = Math.max(et[0], et[1]),
          qt = [tt[0], tt[1]];
        return (!(0, Nm.A)(tt[0]) || tt[0] < Vt) && (qt[0] = Vt), (!(0, Nm.A)(tt[1]) || tt[1] > Ot) && (qt[1] = Ot), qt[0] > Ot && (qt[0] = Ot), qt[1] < Vt && (qt[1] = Vt), qt
      },
      xm = {
        sign: function(tt) {
          var et = tt.length;
          if (!(et <= 0))
            for (var Vt = 0, Ot = tt[0].length; Vt < Ot; ++Vt)
              for (var qt = 0, Dt = 0, mt = 0; mt < et; ++mt) {
                var dt = FD()(tt[mt][Vt][1]) ? tt[mt][Vt][0] : tt[mt][Vt][1];
                dt >= 0 ? (tt[mt][Vt][0] = qt, tt[mt][Vt][1] = qt + dt, qt = tt[mt][Vt][1]) : (tt[mt][Vt][0] = Dt, tt[mt][Vt][1] = Dt + dt, Dt = tt[mt][Vt][1])
              }
        },
        expand: function(tt, et) {
          if ((Ot = tt.length) > 0) {
            for (var Vt, Ot, qt, Dt = 0, mt = tt[0].length; Dt < mt; ++Dt) {
              for (qt = Vt = 0; Vt < Ot; ++Vt) qt += tt[Vt][Dt][1] || 0;
              if (qt)
                for (Vt = 0; Vt < Ot; ++Vt) tt[Vt][Dt][1] /= qt
            }
            fD(tt, et)
          }
        },
        none: fD,
        silhouette: function(tt, et) {
          if ((Vt = tt.length) > 0) {
            for (var Vt, Ot = 0, qt = tt[et[0]], Dt = qt.length; Ot < Dt; ++Ot) {
              for (var mt = 0, dt = 0; mt < Vt; ++mt) dt += tt[mt][Ot][1] || 0;
              qt[Ot][1] += qt[Ot][0] = -dt / 2
            }
            fD(tt, et)
          }
        },
        wiggle: function(tt, et) {
          if ((qt = tt.length) > 0 && (Ot = (Vt = tt[et[0]]).length) > 0) {
            for (var Vt, Ot, qt, Dt = 0, mt = 1; mt < Ot; ++mt) {
              for (var dt = 0, jt = 0, Ht = 0; dt < qt; ++dt) {
                for (var Xt = tt[et[dt]], Qt = Xt[mt][1] || 0, lt = (Qt - (Xt[mt - 1][1] || 0)) / 2, Et = 0; Et < dt; ++Et) {
                  var ft = tt[et[Et]];
                  lt += (ft[mt][1] || 0) - (ft[mt - 1][1] || 0)
                }
                jt += Qt, Ht += lt * Qt
              }
              Vt[mt - 1][1] += Vt[mt - 1][0] = Dt, jt && (Dt -= Ht / jt)
            }
            Vt[mt - 1][1] += Vt[mt - 1][0] = Dt, fD(tt, et)
          }
        },
        positive: function(tt) {
          var et = tt.length;
          if (!(et <= 0))
            for (var Vt = 0, Ot = tt[0].length; Vt < Ot; ++Vt)
              for (var qt = 0, Dt = 0; Dt < et; ++Dt) {
                var mt = FD()(tt[Dt][Vt][1]) ? tt[Dt][Vt][0] : tt[Dt][Vt][1];
                mt >= 0 ? (tt[Dt][Vt][0] = qt, tt[Dt][Vt][1] = qt + mt, qt = tt[Dt][Vt][1]) : (tt[Dt][Vt][0] = 0, tt[Dt][Vt][1] = 0)
              }
        }
      },
      Tm = function(tt, et, Vt) {
        var Ot = et.map((function(tt) {
            return tt.props.dataKey
          })),
          qt = xm[Vt],
          Dt = function() {
            var tt = (0, yD.b)([]),
              et = ND,
              Vt = fD,
              Ot = aD;

            function qt(qt) {
              var Dt, mt, dt = Array.from(tt.apply(this, arguments), MD),
                jt = dt.length,
                Ht = -1;
              for (const tt of qt)
                for (Dt = 0, ++Ht; Dt < jt; ++Dt)(dt[Dt][Ht] = [0, +Ot(tt, dt[Dt].key, Ht, qt)]).data = tt;
              for (Dt = 0, mt = (0, wD.b)(et(dt)); Dt < jt; ++Dt) dt[mt[Dt]].index = Dt;
              return Vt(dt, mt), dt
            }
            return qt.keys = function(et) {
              return arguments.length ? (tt = "function" === typeof et ? et : (0, yD.b)(Array.from(et)), qt) : tt
            }, qt.value = function(tt) {
              return arguments.length ? (Ot = "function" === typeof tt ? tt : (0, yD.b)(+tt), qt) : Ot
            }, qt.order = function(tt) {
              return arguments.length ? (et = null == tt ? ND : "function" === typeof tt ? tt : (0, yD.b)(Array.from(tt)), qt) : et
            }, qt.offset = function(tt) {
              return arguments.length ? (Vt = null == tt ? fD : tt, qt) : Vt
            }, qt
          }().keys(Ot).value((function(tt, et) {
            return +Wm(tt, et, 0)
          })).order(ND).offset(qt);
        return Dt(tt)
      },
      gm = function(tt, et, Vt, Ot, qt, Dt) {
        if (!tt) return null;
        var mt = (Dt ? et.reverse() : et).reduce((function(tt, et) {
          var qt, Dt = null !== (qt = et.type) && void 0 !== qt && qt.defaultProps ? Km(Km({}, et.type.defaultProps), et.props) : et.props,
            mt = Dt.stackId;
          if (Dt.hide) return tt;
          var dt = Dt[Vt],
            jt = tt[dt] || {
              hasStack: !1,
              stackGroups: {}
            };
          if ((0, Nm.w)(mt)) {
            var Ht = jt.stackGroups[mt] || {
              numericAxisId: Vt,
              cateAxisId: Ot,
              items: []
            };
            Ht.items.push(et), jt.hasStack = !0, jt.stackGroups[mt] = Ht
          } else jt.stackGroups[(0, Nm.L)("_stackId_")] = {
            numericAxisId: Vt,
            cateAxisId: Ot,
            items: [et]
          };
          return Km(Km({}, tt), {}, hm({}, dt, jt))
        }), {});
        return Object.keys(mt).reduce((function(et, Dt) {
          var dt = mt[Dt];
          if (dt.hasStack) {
            dt.stackGroups = Object.keys(dt.stackGroups).reduce((function(et, Dt) {
              var mt = dt.stackGroups[Dt];
              return Km(Km({}, et), {}, hm({}, Dt, {
                numericAxisId: Vt,
                cateAxisId: Ot,
                items: mt.items,
                stackedData: Tm(tt, mt.items, qt)
              }))
            }), {})
          }
          return Km(Km({}, et), {}, hm({}, Dt, dt))
        }), {})
      },
      sm = function(tt, et) {
        var Vt = et.realScaleType,
          Ot = et.type,
          qt = et.tickCount,
          Dt = et.originalDomain,
          mt = et.allowDecimals,
          dt = Vt || et.scale;
        if ("auto" !== dt && "linear" !== dt) return null;
        if (qt && "number" === Ot && Dt && ("auto" === Dt[0] || "auto" === Dt[1])) {
          var jt = tt.domain();
          if (!jt.length) return null;
          var Ht = fm(jt, qt, mt);
          return tt.domain([uD()(Ht), JD()(Ht)]), {
            niceTicks: Ht
          }
        }
        if (qt && "number" === Ot) {
          var Xt = tt.domain();
          return {
            niceTicks: wm(Xt, qt, mt)
          }
        }
        return null
      };

    function nm(tt) {
      var et = tt.axis,
        Vt = tt.ticks,
        Ot = tt.bandSize,
        qt = tt.entry,
        Dt = tt.index,
        mt = tt.dataKey;
      if ("category" === et.type) {
        if (!et.allowDuplicatedCategory && et.dataKey && !hD()(qt[et.dataKey])) {
          var dt = (0, Nm.e)(Vt, "value", qt[et.dataKey]);
          if (dt) return dt.coordinate + Ot / 2
        }
        return Vt[Dt] ? Vt[Dt].coordinate + Ot / 2 : null
      }
      var jt = Wm(qt, hD()(mt) ? et.dataKey : mt);
      return hD()(jt) ? null : et.scale(jt)
    }
    var td = function(tt) {
        var et = tt.axis,
          Vt = tt.ticks,
          Ot = tt.offset,
          qt = tt.bandSize,
          Dt = tt.entry,
          mt = tt.index;
        if ("category" === et.type) return Vt[mt] ? Vt[mt].coordinate + Ot : null;
        var dt = Wm(Dt, et.dataKey, et.domain[mt]);
        return hD()(dt) ? null : et.scale(dt) - qt / 2 + Ot
      },
      ed = function(tt) {
        var et = tt.numericAxis,
          Vt = et.scale.domain();
        if ("number" === et.type) {
          var Ot = Math.min(Vt[0], Vt[1]),
            qt = Math.max(Vt[0], Vt[1]);
          return Ot <= 0 && qt >= 0 ? 0 : qt < 0 ? qt : Ot
        }
        return Vt[0]
      },
      Vd = function(tt, et) {
        var Vt, Ot = (null !== (Vt = tt.type) && void 0 !== Vt && Vt.defaultProps ? Km(Km({}, tt.type.defaultProps), tt.props) : tt.props).stackId;
        if ((0, Nm.w)(Ot)) {
          var qt = et[Ot];
          if (qt) {
            var Dt = qt.items.indexOf(tt);
            return Dt >= 0 ? qt.stackedData[Dt] : null
          }
        }
        return null
      },
      Od = function(tt, et, Vt) {
        return Object.keys(tt).reduce((function(Ot, qt) {
          var Dt = tt[qt].stackedData.reduce((function(tt, Ot) {
            var qt = Ot.slice(et, Vt + 1).reduce((function(tt, et) {
              return [uD()(et.concat([tt[0]]).filter(Nm.A)), JD()(et.concat([tt[1]]).filter(Nm.A))]
            }), [1 / 0, -1 / 0]);
            return [Math.min(tt[0], qt[0]), Math.max(tt[1], qt[1])]
          }), [1 / 0, -1 / 0]);
          return [Math.min(Dt[0], Ot[0]), Math.max(Dt[1], Ot[1])]
        }), [1 / 0, -1 / 0]).map((function(tt) {
          return tt === 1 / 0 || tt === -1 / 0 ? 0 : tt
        }))
      },
      qd = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      Dd = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      md = function(tt, et, Vt) {
        if (WD()(tt)) return tt(et, Vt);
        if (!Array.isArray(tt)) return et;
        var Ot = [];
        if ((0, Nm.A)(tt[0])) Ot[0] = Vt ? tt[0] : Math.min(tt[0], et[0]);
        else if (qd.test(tt[0])) {
          var qt = +qd.exec(tt[0])[1];
          Ot[0] = et[0] - qt
        } else WD()(tt[0]) ? Ot[0] = tt[0](et[0]) : Ot[0] = et[0];
        if ((0, Nm.A)(tt[1])) Ot[1] = Vt ? tt[1] : Math.max(tt[1], et[1]);
        else if (Dd.test(tt[1])) {
          var Dt = +Dd.exec(tt[1])[1];
          Ot[1] = et[1] + Dt
        } else WD()(tt[1]) ? Ot[1] = tt[1](et[1]) : Ot[1] = et[1];
        return Ot
      },
      dd = function(tt, et, Vt) {
        if (tt && tt.scale && tt.scale.bandwidth) {
          var Ot = tt.scale.bandwidth();
          if (!Vt || Ot > 0) return Ot
        }
        if (tt && et && et.length >= 2) {
          for (var qt = UD()(et, (function(tt) {
              return tt.coordinate
            })), Dt = 1 / 0, mt = 1, dt = qt.length; mt < dt; mt++) {
            var jt = qt[mt],
              Ht = qt[mt - 1];
            Dt = Math.min((jt.coordinate || 0) - (Ht.coordinate || 0), Dt)
          }
          return Dt === 1 / 0 ? 0 : Dt
        }
        return Vt ? void 0 : 0
      },
      jd = function(tt, et, Vt) {
        return tt && tt.length ? oD()(tt, ID()(Vt, "type.defaultProps.domain")) ? et : tt : et
      },
      Hd = function(tt, et) {
        var Vt = tt.type.defaultProps ? Km(Km({}, tt.type.defaultProps), tt.props) : tt.props,
          Ot = Vt.dataKey,
          qt = Vt.name,
          Dt = Vt.unit,
          mt = Vt.formatter,
          dt = Vt.tooltipType,
          jt = Vt.chartType,
          Ht = Vt.hide;
        return Km(Km({}, (0, am.b)(tt, !1)), {}, {
          dataKey: Ot,
          unit: Dt,
          formatter: mt,
          name: qt || Ot,
          color: Rm(tt),
          value: Wm(et, Ot),
          type: dt,
          payload: et,
          chartType: jt,
          hide: Ht
        })
      }
  },
  6310: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => lt,
      g: () => Qt
    });
    var Ot = Vt(6155);

    function qt(tt) {
      return qt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, qt(tt)
    }

    function Dt(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function mt(tt) {
      for (var et = 1; et < arguments.length; et++) {
        var Vt = null != arguments[et] ? arguments[et] : {};
        et % 2 ? Dt(Object(Vt), !0).forEach((function(et) {
          dt(tt, et, Vt[et])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : Dt(Object(Vt)).forEach((function(et) {
          Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
        }))
      }
      return tt
    }

    function dt(tt, et, Vt) {
      return (et = function(tt) {
        var et = function(tt, et) {
          if ("object" != qt(tt) || !tt) return tt;
          var Vt = tt[Symbol.toPrimitive];
          if (void 0 !== Vt) {
            var Ot = Vt.call(tt, et || "default");
            if ("object" != qt(Ot)) return Ot;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === et ? String : Number)(tt)
        }(tt, "string");
        return "symbol" == qt(et) ? et : et + ""
      }(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }
    var jt = {
        widthCache: {},
        cacheCount: 0
      },
      Ht = {
        position: "absolute",
        top: "-20000px",
        left: 0,
        padding: 0,
        margin: 0,
        border: "none",
        whiteSpace: "pre"
      },
      Xt = "recharts_measurement_span";
    var Qt = function(tt) {
        var et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (void 0 === tt || null === tt || Ot.c.isSsr) return {
          width: 0,
          height: 0
        };
        var Vt = function(tt) {
            var et = mt({}, tt);
            return Object.keys(et).forEach((function(tt) {
              et[tt] || delete et[tt]
            })), et
          }(et),
          qt = JSON.stringify({
            text: tt,
            copyStyle: Vt
          });
        if (jt.widthCache[qt]) return jt.widthCache[qt];
        try {
          var Dt = document.getElementById(Xt);
          Dt || ((Dt = document.createElement("span")).setAttribute("id", Xt), Dt.setAttribute("aria-hidden", "true"), document.body.appendChild(Dt));
          var dt = mt(mt({}, Ht), Vt);
          Object.assign(Dt.style, dt), Dt.textContent = "".concat(tt);
          var Qt = Dt.getBoundingClientRect(),
            lt = {
              width: Qt.width,
              height: Qt.height
            };
          return jt.widthCache[qt] = lt, ++jt.cacheCount > 2e3 && (jt.cacheCount = 0, jt.widthCache = {}), lt
        } catch (Et) {
          return {
            width: 0,
            height: 0
          }
        }
      },
      lt = function(tt) {
        return {
          top: tt.top + window.scrollY - document.documentElement.clientTop,
          left: tt.left + window.scrollX - document.documentElement.clientLeft
        }
      }
  },
  5348: (tt, et, Vt) => {
    Vt.d(et, {
      A: () => wt,
      E: () => ft,
      H: () => Et,
      L: () => bt,
      d: () => Wt,
      e: () => ht,
      i: () => Ct,
      j: () => vt,
      m: () => Jt,
      q: () => ut,
      r: () => Kt,
      s: () => yt,
      w: () => Nt
    });
    var Ot = Vt(5357),
      qt = Vt.n(Ot),
      Dt = Vt(5364),
      mt = Vt.n(Dt),
      dt = Vt(5374),
      jt = Vt.n(dt),
      Ht = Vt(5369),
      Xt = Vt.n(Ht),
      Qt = Vt(5603),
      lt = Vt.n(Qt),
      Et = function(tt) {
        return 0 === tt ? 0 : tt > 0 ? 1 : -1
      },
      ft = function(tt) {
        return qt()(tt) && tt.indexOf("%") === tt.length - 1
      },
      wt = function(tt) {
        return Xt()(tt) && !mt()(tt)
      },
      yt = function(tt) {
        return lt()(tt)
      },
      Nt = function(tt) {
        return wt(tt) || qt()(tt)
      },
      Mt = 0,
      bt = function(tt) {
        var et = ++Mt;
        return "".concat(tt || "").concat(et)
      },
      Jt = function(tt, et) {
        var Vt, Ot = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Dt = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!wt(tt) && !qt()(tt)) return Ot;
        if (ft(tt)) {
          var dt = tt.indexOf("%");
          Vt = et * parseFloat(tt.slice(0, dt)) / 100
        } else Vt = +tt;
        return mt()(Vt) && (Vt = Ot), Dt && Vt > et && (Vt = et), Vt
      },
      Ct = function(tt) {
        if (!tt) return null;
        var et = Object.keys(tt);
        return et && et.length ? tt[et[0]] : null
      },
      ut = function(tt) {
        if (!Array.isArray(tt)) return !1;
        for (var et = tt.length, Vt = {}, Ot = 0; Ot < et; Ot++) {
          if (Vt[tt[Ot]]) return !0;
          Vt[tt[Ot]] = !0
        }
        return !1
      },
      Kt = function(tt, et) {
        return wt(tt) && wt(et) ? function(Vt) {
          return tt + Vt * (et - tt)
        } : function() {
          return et
        }
      };

    function ht(tt, et, Vt) {
      return tt && tt.length ? tt.find((function(tt) {
        return tt && ("function" === typeof et ? et(tt) : jt()(tt, et)) === Vt
      })) : null
    }
    var vt = function(tt) {
        if (!tt || !tt.length) return null;
        for (var et = tt.length, Vt = 0, Ot = 0, qt = 0, Dt = 0, mt = 1 / 0, dt = -1 / 0, jt = 0, Ht = 0, Xt = 0; Xt < et; Xt++) Vt += jt = tt[Xt].cx || 0, Ot += Ht = tt[Xt].cy || 0, qt += jt * Ht, Dt += jt * jt, mt = Math.min(mt, jt), dt = Math.max(dt, jt);
        var Qt = et * Dt !== Vt * Vt ? (et * qt - Vt * Ot) / (et * Dt - Vt * Vt) : 0;
        return {
          xmin: mt,
          xmax: dt,
          a: Qt,
          b: (Ot - Qt * Vt) / et
        }
      },
      Wt = function(tt, et) {
        return wt(tt) && wt(et) ? tt - et : qt()(tt) && qt()(et) ? tt.localeCompare(et) : tt instanceof Date && et instanceof Date ? tt.getTime() - et.getTime() : String(tt).localeCompare(String(et))
      }
  },
  6155: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ot
    });
    var Ot = {
      isSsr: !("undefined" !== typeof window && window.document && window.document.createElement && window.setTimeout),
      get: function(tt) {
        return Ot[tt]
      },
      set: function(tt, et) {
        if ("string" === typeof tt) Ot[tt] = et;
        else {
          var Vt = Object.keys(tt);
          Vt && Vt.length && Vt.forEach((function(et) {
            Ot[et] = tt[et]
          }))
        }
      }
    }
  },
  6417: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ot
    });
    var Ot = function(tt, et) {
      var Vt = tt.alwaysShow,
        Ot = tt.ifOverflow;
      return Vt && (Ot = "extendDomain"), Ot === et
    }
  },
  5609: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ot
    });
    var Ot = function(tt, et) {
      for (var Vt = arguments.length, Ot = new Array(Vt > 2 ? Vt - 2 : 0), qt = 2; qt < Vt; qt++) Ot[qt - 2] = arguments[qt]
    }
  },
  6411: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => dt,
      e: () => lt,
      f: () => Ht
    });
    Vt(5603), Vt(63), Vt(5436);

    function Ot(tt) {
      return Ot = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, Ot(tt)
    }

    function qt(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function Dt(tt) {
      for (var et = 1; et < arguments.length; et++) {
        var Vt = null != arguments[et] ? arguments[et] : {};
        et % 2 ? qt(Object(Vt), !0).forEach((function(et) {
          mt(tt, et, Vt[et])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : qt(Object(Vt)).forEach((function(et) {
          Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
        }))
      }
      return tt
    }

    function mt(tt, et, Vt) {
      return (et = function(tt) {
        var et = function(tt, et) {
          if ("object" != Ot(tt) || !tt) return tt;
          var Vt = tt[Symbol.toPrimitive];
          if (void 0 !== Vt) {
            var qt = Vt.call(tt, et || "default");
            if ("object" != Ot(qt)) return qt;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === et ? String : Number)(tt)
        }(tt, "string");
        return "symbol" == Ot(et) ? et : et + ""
      }(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }
    var dt = Math.PI / 180,
      jt = function(tt) {
        return 180 * tt / Math.PI
      },
      Ht = function(tt, et, Vt, Ot) {
        return {
          x: tt + Math.cos(-dt * Ot) * Vt,
          y: et + Math.sin(-dt * Ot) * Vt
        }
      },
      Xt = function(tt, et) {
        var Vt = tt.x,
          Ot = tt.y,
          qt = et.cx,
          Dt = et.cy,
          mt = function(tt, et) {
            var Vt = tt.x,
              Ot = tt.y,
              qt = et.x,
              Dt = et.y;
            return Math.sqrt(Math.pow(Vt - qt, 2) + Math.pow(Ot - Dt, 2))
          }({
            x: Vt,
            y: Ot
          }, {
            x: qt,
            y: Dt
          });
        if (mt <= 0) return {
          radius: mt
        };
        var dt = (Vt - qt) / mt,
          Ht = Math.acos(dt);
        return Ot > Dt && (Ht = 2 * Math.PI - Ht), {
          radius: mt,
          angle: jt(Ht),
          angleInRadian: Ht
        }
      },
      Qt = function(tt, et) {
        var Vt = et.startAngle,
          Ot = et.endAngle,
          qt = Math.floor(Vt / 360),
          Dt = Math.floor(Ot / 360);
        return tt + 360 * Math.min(qt, Dt)
      },
      lt = function(tt, et) {
        var Vt = tt.x,
          Ot = tt.y,
          qt = Xt({
            x: Vt,
            y: Ot
          }, et),
          mt = qt.radius,
          dt = qt.angle,
          jt = et.innerRadius,
          Ht = et.outerRadius;
        if (mt < jt || mt > Ht) return !1;
        if (0 === mt) return !0;
        var lt, Et = function(tt) {
            var et = tt.startAngle,
              Vt = tt.endAngle,
              Ot = Math.floor(et / 360),
              qt = Math.floor(Vt / 360),
              Dt = Math.min(Ot, qt);
            return {
              startAngle: et - 360 * Dt,
              endAngle: Vt - 360 * Dt
            }
          }(et),
          ft = Et.startAngle,
          wt = Et.endAngle,
          yt = dt;
        if (ft <= wt) {
          for (; yt > wt;) yt -= 360;
          for (; yt < ft;) yt += 360;
          lt = yt >= ft && yt <= wt
        } else {
          for (; yt > ft;) yt -= 360;
          for (; yt < wt;) yt += 360;
          lt = yt >= wt && yt <= ft
        }
        return lt ? Dt(Dt({}, et), {}, {
          radius: mt,
          angle: Qt(yt, et)
        }) : null
      }
  },
  5614: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Lt,
      d: () => St,
      e: () => ct,
      g: () => Kt,
      j: () => zt,
      n: () => Zt,
      o: () => Ft,
      p: () => ot,
      t: () => Gt,
      x: () => Rt
    });
    var Ot = Vt(5374),
      qt = Vt.n(Ot),
      Dt = Vt(5603),
      mt = Vt.n(Dt),
      dt = Vt(5357),
      jt = Vt.n(dt),
      Ht = Vt(5436),
      Xt = Vt.n(Ht),
      Qt = Vt(5280),
      lt = Vt.n(Qt),
      Et = Vt(63),
      ft = Vt(5616),
      wt = Vt(5348),
      yt = Vt(5628),
      Nt = Vt(5631),
      Mt = ["children"],
      bt = ["children"];

    function Jt(tt, et) {
      if (null == tt) return {};
      var Vt, Ot, qt = function(tt, et) {
        if (null == tt) return {};
        var Vt = {};
        for (var Ot in tt)
          if (Object.prototype.hasOwnProperty.call(tt, Ot)) {
            if (et.indexOf(Ot) >= 0) continue;
            Vt[Ot] = tt[Ot]
          } return Vt
      }(tt, et);
      if (Object.getOwnPropertySymbols) {
        var Dt = Object.getOwnPropertySymbols(tt);
        for (Ot = 0; Ot < Dt.length; Ot++) Vt = Dt[Ot], et.indexOf(Vt) >= 0 || Object.prototype.propertyIsEnumerable.call(tt, Vt) && (qt[Vt] = tt[Vt])
      }
      return qt
    }

    function Ct(tt) {
      return Ct = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, Ct(tt)
    }
    var ut = {
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
      Kt = function(tt) {
        return "string" === typeof tt ? tt : tt ? tt.displayName || tt.name || "Component" : ""
      },
      ht = null,
      vt = null,
      Wt = function tt(et) {
        if (et === ht && Array.isArray(vt)) return vt;
        var Vt = [];
        return Et.Children.forEach(et, (function(et) {
          mt()(et) || ((0, ft.isFragment)(et) ? Vt = Vt.concat(tt(et.props.children)) : Vt.push(et))
        })), vt = Vt, ht = et, Vt
      };

    function St(tt, et) {
      var Vt = [],
        Ot = [];
      return Ot = Array.isArray(et) ? et.map((function(tt) {
        return Kt(tt)
      })) : [Kt(et)], Wt(tt).forEach((function(tt) {
        var et = qt()(tt, "type.displayName") || qt()(tt, "type.name"); - 1 !== Ot.indexOf(et) && Vt.push(tt)
      })), Vt
    }

    function ct(tt, et) {
      var Vt = St(tt, et);
      return Vt && Vt[0]
    }
    var Rt = function(tt) {
        if (!tt || !tt.props) return !1;
        var et = tt.props,
          Vt = et.width,
          Ot = et.height;
        return !(!(0, wt.A)(Vt) || Vt <= 0 || !(0, wt.A)(Ot) || Ot <= 0)
      },
      It = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"],
      Pt = function(tt) {
        return tt && tt.type && jt()(tt.type) && It.indexOf(tt.type) >= 0
      },
      Zt = function(tt) {
        return tt && "object" === Ct(tt) && "clipDot" in tt
      },
      Lt = function(tt, et, Vt) {
        if (!tt || "function" === typeof tt || "boolean" === typeof tt) return null;
        var Ot = tt;
        if ((0, Et.isValidElement)(tt) && (Ot = tt.props), !lt()(Ot)) return null;
        var qt = {};
        return Object.keys(Ot).forEach((function(tt) {
          var Dt;
          (function(tt, et, Vt, Ot) {
            var qt, Dt = null !== (qt = null === Nt.f || void 0 === Nt.f ? void 0 : Nt.f[Ot]) && void 0 !== qt ? qt : [];
            return et.startsWith("data-") || !Xt()(tt) && (Ot && Dt.includes(et) || Nt.g.includes(et)) || Vt && Nt.e.includes(et)
          })(null === (Dt = Ot) || void 0 === Dt ? void 0 : Dt[tt], tt, et, Vt) && (qt[tt] = Ot[tt])
        })), qt
      },
      Ft = function tt(et, Vt) {
        if (et === Vt) return !0;
        var Ot = Et.Children.count(et);
        if (Ot !== Et.Children.count(Vt)) return !1;
        if (0 === Ot) return !0;
        if (1 === Ot) return kt(Array.isArray(et) ? et[0] : et, Array.isArray(Vt) ? Vt[0] : Vt);
        for (var qt = 0; qt < Ot; qt++) {
          var Dt = et[qt],
            mt = Vt[qt];
          if (Array.isArray(Dt) || Array.isArray(mt)) {
            if (!tt(Dt, mt)) return !1
          } else if (!kt(Dt, mt)) return !1
        }
        return !0
      },
      kt = function(tt, et) {
        if (mt()(tt) && mt()(et)) return !0;
        if (!mt()(tt) && !mt()(et)) {
          var Vt = tt.props || {},
            Ot = Vt.children,
            qt = Jt(Vt, Mt),
            Dt = et.props || {},
            dt = Dt.children,
            jt = Jt(Dt, bt);
          return Ot && dt ? (0, yt.b)(qt, jt) && Ft(Ot, dt) : !Ot && !dt && (0, yt.b)(qt, jt)
        }
        return !1
      },
      Gt = function(tt, et) {
        var Vt = [],
          Ot = {};
        return Wt(tt).forEach((function(tt, qt) {
          if (Pt(tt)) Vt.push(tt);
          else if (tt) {
            var Dt = Kt(tt.type),
              mt = et[Dt] || {},
              dt = mt.handler,
              jt = mt.once;
            if (dt && (!jt || !Ot[Dt])) {
              var Ht = dt(tt, Dt, qt);
              Vt.push(Ht), Ot[Dt] = !0
            }
          }
        })), Vt
      },
      zt = function(tt) {
        var et = tt && tt.type;
        return et && ut[et] ? ut[et] : null
      },
      ot = function(tt, et) {
        return Wt(et).indexOf(tt)
      }
  },
  5628: (tt, et, Vt) => {
    function Ot(tt, et) {
      for (var Vt in tt)
        if ({}.hasOwnProperty.call(tt, Vt) && (!{}.hasOwnProperty.call(et, Vt) || tt[Vt] !== et[Vt])) return !1;
      for (var Ot in et)
        if ({}.hasOwnProperty.call(et, Ot) && !{}.hasOwnProperty.call(tt, Ot)) return !1;
      return !0
    }
    Vt.d(et, {
      b: () => Ot
    })
  },
  6388: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Xt
    });
    var Ot = Vt(6226),
      qt = Vt(6317),
      Dt = Vt(5614);

    function mt(tt) {
      return mt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, mt(tt)
    }

    function dt(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function jt(tt) {
      for (var et = 1; et < arguments.length; et++) {
        var Vt = null != arguments[et] ? arguments[et] : {};
        et % 2 ? dt(Object(Vt), !0).forEach((function(et) {
          Ht(tt, et, Vt[et])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : dt(Object(Vt)).forEach((function(et) {
          Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
        }))
      }
      return tt
    }

    function Ht(tt, et, Vt) {
      return (et = function(tt) {
        var et = function(tt, et) {
          if ("object" != mt(tt) || !tt) return tt;
          var Vt = tt[Symbol.toPrimitive];
          if (void 0 !== Vt) {
            var Ot = Vt.call(tt, et || "default");
            if ("object" != mt(Ot)) return Ot;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === et ? String : Number)(tt)
        }(tt, "string");
        return "symbol" == mt(et) ? et : et + ""
      }(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }
    var Xt = function(tt) {
      var et = tt.children,
        Vt = tt.formattedGraphicalItems,
        mt = tt.legendWidth,
        dt = tt.legendContent,
        Ht = (0, Dt.e)(et, Ot.c);
      if (!Ht) return null;
      var Xt, Qt = Ot.c.defaultProps,
        lt = void 0 !== Qt ? jt(jt({}, Qt), Ht.props) : {};
      return Xt = Ht.props && Ht.props.payload ? Ht.props && Ht.props.payload : "children" === dt ? (Vt || []).reduce((function(tt, et) {
        var Vt = et.item,
          Ot = et.props,
          qt = Ot.sectors || Ot.data || [];
        return tt.concat(qt.map((function(tt) {
          return {
            type: Ht.props.iconType || Vt.props.legendType,
            value: tt.name,
            color: tt.fill,
            payload: tt
          }
        })))
      }), []) : (Vt || []).map((function(tt) {
        var et = tt.item,
          Vt = et.type.defaultProps,
          Ot = void 0 !== Vt ? jt(jt({}, Vt), et.props) : {},
          Dt = Ot.dataKey,
          mt = Ot.name,
          dt = Ot.legendType;
        return {
          inactive: Ot.hide,
          dataKey: Dt,
          type: lt.iconType || dt || "square",
          color: (0, qt.N)(et),
          value: mt || Dt,
          payload: Ot
        }
      })), jt(jt(jt({}, lt), Ot.c.getWithHeight(Ht, mt)), {}, {
        payload: Xt,
        item: Ht
      })
    }
  },
  6162: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => dt
    });
    var Ot = Vt(6167),
      qt = Vt.n(Ot),
      Dt = Vt(5436),
      mt = Vt.n(Dt);

    function dt(tt, et, Vt) {
      return !0 === et ? qt()(tt, Vt) : mt()(et) ? qt()(tt, et) : tt
    }
  },
  5631: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Xt,
      f: () => Ht,
      g: () => dt,
      i: () => Qt,
      k: () => lt
    });
    var Ot = Vt(63),
      qt = Vt(5280),
      Dt = Vt.n(qt);

    function mt(tt) {
      return mt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, mt(tt)
    }
    var dt = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "XE", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"],
      jt = ["points", "pathLength"],
      Ht = {
        svg: ["viewBox", "children"],
        polygon: jt,
        polyline: jt
      },
      Xt = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"],
      Qt = function(tt, et) {
        if (!tt || "function" === typeof tt || "boolean" === typeof tt) return null;
        var Vt = tt;
        if ((0, Ot.isValidElement)(tt) && (Vt = tt.props), !Dt()(Vt)) return null;
        var qt = {};
        return Object.keys(Vt).forEach((function(tt) {
          Xt.includes(tt) && (qt[tt] = et || function(et) {
            return Vt[tt](Vt, et)
          })
        })), qt
      },
      lt = function(tt, et, Vt) {
        if (!Dt()(tt) || "object" !== mt(tt)) return null;
        var Ot = null;
        return Object.keys(tt).forEach((function(qt) {
          var Dt = tt[qt];
          Xt.includes(qt) && "function" === typeof Dt && (Ot || (Ot = {}), Ot[qt] = function(tt, et, Vt) {
            return function(Ot) {
              return tt(et, Vt, Ot), null
            }
          }(Dt, et, Vt))
        })), Ot
      }
  },
  5621: (tt, et) => {
    var Vt, Ot = Symbol.for("react.element"),
      qt = Symbol.for("react.portal"),
      Dt = Symbol.for("react.fragment"),
      mt = Symbol.for("react.strict_mode"),
      dt = Symbol.for("react.profiler"),
      jt = Symbol.for("react.provider"),
      Ht = Symbol.for("react.context"),
      Xt = Symbol.for("react.server_context"),
      Qt = Symbol.for("react.forward_ref"),
      lt = Symbol.for("react.suspense"),
      Et = Symbol.for("react.suspense_list"),
      ft = Symbol.for("react.memo"),
      wt = Symbol.for("react.lazy"),
      yt = Symbol.for("react.offscreen");

    function Nt(tt) {
      if ("object" === typeof tt && null !== tt) {
        var et = tt.$$typeof;
        switch (et) {
          case Ot:
            switch (tt = tt.type) {
              case Dt:
              case dt:
              case mt:
              case lt:
              case Et:
                return tt;
              default:
                switch (tt = tt && tt.$$typeof) {
                  case Xt:
                  case Ht:
                  case Qt:
                  case wt:
                  case ft:
                  case jt:
                    return tt;
                  default:
                    return et
                }
            }
          case qt:
            return et
        }
      }
    }
    Vt = Symbol.for("react.module.reference"), et.isFragment = function(tt) {
      return Nt(tt) === Dt
    }
  },
  5616: (tt, et, Vt) => {
    tt.exports = Vt(5621)
  },
  5263: (tt, et, Vt) => {
    function Ot(tt) {
      var et, Vt, qt = "";
      if ("string" == typeof tt || "number" == typeof tt) qt += tt;
      else if ("object" == typeof tt)
        if (Array.isArray(tt)) {
          var Dt = tt.length;
          for (et = 0; et < Dt; et++) tt[et] && (Vt = Ot(tt[et])) && (qt && (qt += " "), qt += Vt)
        } else
          for (Vt in tt) tt[Vt] && (qt && (qt += " "), qt += Vt);
      return qt
    }
    Vt.d(et, {
      b: () => qt
    });
    const qt = function() {
      for (var tt, et, Vt = 0, qt = "", Dt = arguments.length; Vt < Dt; Vt++)(tt = arguments[Vt]) && (et = Ot(tt)) && (qt && (qt += " "), qt += et);
      return qt
    }
  },
  6323: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Dt,
      d: () => dt
    });
    var Ot = Vt(6327),
      qt = Vt(6335);

    function Dt() {
      var tt, et, Vt = (0, qt.c)().unknown(void 0),
        mt = Vt.domain,
        dt = Vt.range,
        jt = 0,
        Ht = 1,
        Xt = !1,
        Qt = 0,
        lt = 0,
        Et = .5;

      function ft() {
        var Vt = mt().length,
          Ot = Ht < jt,
          qt = Ot ? Ht : jt,
          Dt = Ot ? jt : Ht;
        tt = (Dt - qt) / Math.max(1, Vt - Qt + 2 * lt), Xt && (tt = Math.floor(tt)), qt += (Dt - qt - tt * (Vt - Qt)) * Et, et = tt * (1 - Qt), Xt && (qt = Math.round(qt), et = Math.round(et));
        var ft = function(tt, et, Vt) {
          tt = +tt, et = +et, Vt = (qt = arguments.length) < 2 ? (et = tt, tt = 0, 1) : qt < 3 ? 1 : +Vt;
          for (var Ot = -1, qt = 0 | Math.max(0, Math.ceil((et - tt) / Vt)), Dt = new Array(qt); ++Ot < qt;) Dt[Ot] = tt + Ot * Vt;
          return Dt
        }(Vt).map((function(et) {
          return qt + tt * et
        }));
        return dt(Ot ? ft.reverse() : ft)
      }
      return delete Vt.unknown, Vt.domain = function(tt) {
        return arguments.length ? (mt(tt), ft()) : mt()
      }, Vt.range = function(tt) {
        return arguments.length ? ([jt, Ht] = tt, jt = +jt, Ht = +Ht, ft()) : [jt, Ht]
      }, Vt.rangeRound = function(tt) {
        return [jt, Ht] = tt, jt = +jt, Ht = +Ht, Xt = !0, ft()
      }, Vt.bandwidth = function() {
        return et
      }, Vt.step = function() {
        return tt
      }, Vt.round = function(tt) {
        return arguments.length ? (Xt = !!tt, ft()) : Xt
      }, Vt.padding = function(tt) {
        return arguments.length ? (Qt = Math.min(1, lt = +tt), ft()) : Qt
      }, Vt.paddingInner = function(tt) {
        return arguments.length ? (Qt = Math.min(1, tt), ft()) : Qt
      }, Vt.paddingOuter = function(tt) {
        return arguments.length ? (lt = +tt, ft()) : lt
      }, Vt.align = function(tt) {
        return arguments.length ? (Et = Math.max(0, Math.min(1, tt)), ft()) : Et
      }, Vt.copy = function() {
        return Dt(mt(), [jt, Ht]).round(Xt).paddingInner(Qt).paddingOuter(lt).align(Et)
      }, Ot.f.apply(ft(), arguments)
    }

    function mt(tt) {
      var et = tt.copy;
      return tt.padding = tt.paddingOuter, delete tt.paddingInner, delete tt.paddingOuter, tt.copy = function() {
        return mt(et())
      }, tt
    }

    function dt() {
      return mt(Dt.apply(null, arguments).paddingInner(1))
    }
  },
  6327: (tt, et, Vt) => {
    function Ot(tt, et) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(tt);
          break;
        default:
          this.range(et).domain(tt)
      }
      return this
    }

    function qt(tt, et) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          "function" === typeof tt ? this.interpolator(tt) : this.range(tt);
          break;
        default:
          this.domain(tt), "function" === typeof et ? this.interpolator(et) : this.range(et)
      }
      return this
    }
    Vt.d(et, {
      e: () => qt,
      f: () => Ot
    })
  },
  6335: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Xt,
      f: () => Ht
    });
    class Ot extends Map {
      constructor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dt;
        if (super(), Object.defineProperties(this, {
            _intern: {
              value: new Map
            },
            _key: {
              value: et
            }
          }), null != tt)
          for (const [Vt, Ot] of tt) this.set(Vt, Ot)
      }
      get(tt) {
        return super.get(qt(this, tt))
      }
      has(tt) {
        return super.has(qt(this, tt))
      }
      set(tt, et) {
        return super.set(Dt(this, tt), et)
      }
      delete(tt) {
        return super.delete(mt(this, tt))
      }
    }
    Set;

    function qt(tt, et) {
      let {
        _intern: Vt,
        _key: Ot
      } = tt;
      const qt = Ot(et);
      return Vt.has(qt) ? Vt.get(qt) : et
    }

    function Dt(tt, et) {
      let {
        _intern: Vt,
        _key: Ot
      } = tt;
      const qt = Ot(et);
      return Vt.has(qt) ? Vt.get(qt) : (Vt.set(qt, et), et)
    }

    function mt(tt, et) {
      let {
        _intern: Vt,
        _key: Ot
      } = tt;
      const qt = Ot(et);
      return Vt.has(qt) && (et = Vt.get(qt), Vt.delete(qt)), et
    }

    function dt(tt) {
      return null !== tt && "object" === typeof tt ? tt.valueOf() : tt
    }
    var jt = Vt(6327);
    const Ht = Symbol("implicit");

    function Xt() {
      var tt = new Ot,
        et = [],
        Vt = [],
        qt = Ht;

      function Dt(Ot) {
        let Dt = tt.get(Ot);
        if (void 0 === Dt) {
          if (qt !== Ht) return qt;
          tt.set(Ot, Dt = et.push(Ot) - 1)
        }
        return Vt[Dt % Vt.length]
      }
      return Dt.domain = function(Vt) {
        if (!arguments.length) return et.slice();
        et = [], tt = new Ot;
        for (const Ot of Vt) tt.has(Ot) || tt.set(Ot, et.push(Ot) - 1);
        return Dt
      }, Dt.range = function(tt) {
        return arguments.length ? (Vt = Array.from(tt), Dt) : Vt.slice()
      }, Dt.unknown = function(tt) {
        return arguments.length ? (qt = tt, Dt) : qt
      }, Dt.copy = function() {
        return Xt(et, Vt).unknown(qt)
      }, jt.f.apply(Dt, arguments), Dt
    }
  },
  6397: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ot
    });
    Array.prototype.slice;

    function Ot(tt) {
      return "object" === typeof tt && "length" in tt ? tt : Array.from(tt)
    }
  },
  6270: (tt, et, Vt) => {
    function Ot(tt) {
      return function() {
        return tt
      }
    }
    Vt.d(et, {
      b: () => Ot
    })
  },
  6278: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ht
    });
    const Ot = Math.PI,
      qt = 2 * Ot,
      Dt = 1e-6,
      mt = qt - Dt;

    function dt(tt) {
      this._ += tt[0];
      for (let et = 1, Vt = tt.length; et < Vt; ++et) this._ += arguments[et] + tt[et]
    }
    class jt {
      constructor(tt) {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == tt ? dt : function(tt) {
          let et = Math.floor(tt);
          if (!(et >= 0)) throw new Error(`invalid digits: ${tt}`);
          if (et > 15) return dt;
          const Vt = 10 ** et;
          return function(tt) {
            this._ += tt[0];
            for (let et = 1, Ot = tt.length; et < Ot; ++et) this._ += Math.round(arguments[et] * Vt) / Vt + tt[et]
          }
        }(tt)
      }
      moveTo(tt, et) {
        this._append`M${this._x0=this._x1=+tt},${this._y0=this._y1=+et}`
      }
      closePath() {
        null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`)
      }
      lineTo(tt, et) {
        this._append`L${this._x1=+tt},${this._y1=+et}`
      }
      quadraticCurveTo(tt, et, Vt, Ot) {
        this._append`Q${+tt},${+et},${this._x1=+Vt},${this._y1=+Ot}`
      }
      bezierCurveTo(tt, et, Vt, Ot, qt, Dt) {
        this._append`C${+tt},${+et},${+Vt},${+Ot},${this._x1=+qt},${this._y1=+Dt}`
      }
      arcTo(tt, et, Vt, qt, mt) {
        if (tt = +tt, et = +et, Vt = +Vt, qt = +qt, (mt = +mt) < 0) throw new Error(`negative radius: ${mt}`);
        let dt = this._x1,
          jt = this._y1,
          Ht = Vt - tt,
          Xt = qt - et,
          Qt = dt - tt,
          lt = jt - et,
          Et = Qt * Qt + lt * lt;
        if (null === this._x1) this._append`M${this._x1=tt},${this._y1=et}`;
        else if (Et > Dt)
          if (Math.abs(lt * Ht - Xt * Qt) > Dt && mt) {
            let ft = Vt - dt,
              wt = qt - jt,
              yt = Ht * Ht + Xt * Xt,
              Nt = ft * ft + wt * wt,
              Mt = Math.sqrt(yt),
              bt = Math.sqrt(Et),
              Jt = mt * Math.tan((Ot - Math.acos((yt + Et - Nt) / (2 * Mt * bt))) / 2),
              Ct = Jt / bt,
              ut = Jt / Mt;
            Math.abs(Ct - 1) > Dt && this._append`L${tt+Ct*Qt},${et+Ct*lt}`, this._append`A${mt},${mt},0,0,${+(lt*ft>Qt*wt)},${this._x1=tt+ut*Ht},${this._y1=et+ut*Xt}`
          } else this._append`L${this._x1=tt},${this._y1=et}`;
        else;
      }
      arc(tt, et, Vt, dt, jt, Ht) {
        if (tt = +tt, et = +et, Ht = !!Ht, (Vt = +Vt) < 0) throw new Error(`negative radius: ${Vt}`);
        let Xt = Vt * Math.cos(dt),
          Qt = Vt * Math.sin(dt),
          lt = tt + Xt,
          Et = et + Qt,
          ft = 1 ^ Ht,
          wt = Ht ? dt - jt : jt - dt;
        null === this._x1 ? this._append`M${lt},${Et}` : (Math.abs(this._x1 - lt) > Dt || Math.abs(this._y1 - Et) > Dt) && this._append`L${lt},${Et}`, Vt && (wt < 0 && (wt = wt % qt + qt), wt > mt ? this._append`A${Vt},${Vt},0,1,${ft},${tt-Xt},${et-Qt}A${Vt},${Vt},0,1,${ft},${this._x1=lt},${this._y1=Et}` : wt > Dt && this._append`A${Vt},${Vt},0,${+(wt>=Ot)},${ft},${this._x1=tt+Vt*Math.cos(jt)},${this._y1=et+Vt*Math.sin(jt)}`)
      }
      rect(tt, et, Vt, Ot) {
        this._append`M${this._x0=this._x1=+tt},${this._y0=this._y1=+et}h${Vt=+Vt}v${+Ot}h${-Vt}Z`
      }
      toString() {
        return this._
      }
    }

    function Ht(tt) {
      let et = 3;
      return tt.digits = function(Vt) {
        if (!arguments.length) return et;
        if (null == Vt) et = null;
        else {
          const tt = Math.floor(Vt);
          if (!(tt >= 0)) throw new RangeError(`invalid digits: ${Vt}`);
          et = tt
        }
        return tt
      }, () => new jt(et)
    }
    jt.prototype
  },
  6131: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Dt
    });
    var Ot = !0,
      qt = "Invariant failed";

    function Dt(tt, et) {
      if (!tt) {
        if (Ot) throw new Error(qt);
        var Vt = "function" === typeof et ? et() : et,
          Dt = Vt ? "".concat(qt, ": ").concat(Vt) : qt;
        throw new Error(Dt)
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);