/*! For license information please see 8104he.121.5c0c5a11.chunk.js.LICENSE.txt */
export const id = 121;
export const ids = [121];
export const modules = {
  6593: function(QQ, WQ, XQ) {
    var wQ;
    ! function() {
      var qQ, TQ = 1e9,
        zQ = {
          precision: 20,
          rounding: 4,
          toExpNeg: -7,
          toExpPos: 21,
          LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
        },
        sQ = !0,
        FQ = "[DecimalError] ",
        PQ = FQ + "Invalid argument: ",
        gQ = FQ + "Exponent out of range: ",
        JQ = Math.floor,
        rQ = Math.pow,
        IQ = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        jQ = 1e7,
        BQ = 9007199254740991,
        yQ = JQ(1286742750677284.5),
        VQ = {};

      function DQ(QQ, WQ) {
        var XQ, wQ, qQ, TQ, zQ, FQ, PQ, gQ, JQ = QQ.constructor,
          rQ = JQ.precision;
        if (!QQ.s || !WQ.s) return WQ.s || (WQ = new JQ(QQ)), sQ ? hQ(WQ, rQ) : WQ;
        if (PQ = QQ.d, gQ = WQ.d, zQ = QQ.e, qQ = WQ.e, PQ = PQ.slice(), TQ = zQ - qQ) {
          for (TQ < 0 ? (wQ = PQ, TQ = -TQ, FQ = gQ.length) : (wQ = gQ, qQ = zQ, FQ = PQ.length), TQ > (FQ = (zQ = Math.ceil(rQ / 7)) > FQ ? zQ + 1 : FQ + 1) && (TQ = FQ, wQ.length = 1), wQ.reverse(); TQ--;) wQ.push(0);
          wQ.reverse()
        }
        for ((FQ = PQ.length) - (TQ = gQ.length) < 0 && (TQ = FQ, wQ = gQ, gQ = PQ, PQ = wQ), XQ = 0; TQ;) XQ = (PQ[--TQ] = PQ[TQ] + gQ[TQ] + XQ) / jQ | 0, PQ[TQ] %= jQ;
        for (XQ && (PQ.unshift(XQ), ++qQ), FQ = PQ.length; 0 == PQ[--FQ];) PQ.pop();
        return WQ.d = PQ, WQ.e = qQ, sQ ? hQ(WQ, rQ) : WQ
      }

      function pQ(QQ, WQ, XQ) {
        if (QQ !== ~~QQ || QQ < WQ || QQ > XQ) throw Error(PQ + QQ)
      }

      function GQ(QQ) {
        var WQ, XQ, wQ, qQ = QQ.length - 1,
          TQ = "",
          zQ = QQ[0];
        if (qQ > 0) {
          for (TQ += zQ, WQ = 1; WQ < qQ; WQ++)(XQ = 7 - (wQ = QQ[WQ] + "").length) && (TQ += HQ(XQ)), TQ += wQ;
          (XQ = 7 - (wQ = (zQ = QQ[WQ]) + "").length) && (TQ += HQ(XQ))
        } else if (0 === zQ) return "0";
        for (; zQ % 10 === 0;) zQ /= 10;
        return TQ + zQ
      }
      VQ.absoluteValue = VQ.abs = function() {
        var QQ = new this.constructor(this);
        return QQ.s && (QQ.s = 1), QQ
      }, VQ.comparedTo = VQ.cmp = function(QQ) {
        var WQ, XQ, wQ, qQ, TQ = this;
        if (QQ = new TQ.constructor(QQ), TQ.s !== QQ.s) return TQ.s || -QQ.s;
        if (TQ.e !== QQ.e) return TQ.e > QQ.e ^ TQ.s < 0 ? 1 : -1;
        for (WQ = 0, XQ = (wQ = TQ.d.length) < (qQ = QQ.d.length) ? wQ : qQ; WQ < XQ; ++WQ)
          if (TQ.d[WQ] !== QQ.d[WQ]) return TQ.d[WQ] > QQ.d[WQ] ^ TQ.s < 0 ? 1 : -1;
        return wQ === qQ ? 0 : wQ > qQ ^ TQ.s < 0 ? 1 : -1
      }, VQ.decimalPlaces = VQ.dp = function() {
        var QQ = this,
          WQ = QQ.d.length - 1,
          XQ = 7 * (WQ - QQ.e);
        if (WQ = QQ.d[WQ])
          for (; WQ % 10 == 0; WQ /= 10) XQ--;
        return XQ < 0 ? 0 : XQ
      }, VQ.dividedBy = VQ.div = function(QQ) {
        return UQ(this, new this.constructor(QQ))
      }, VQ.dividedToIntegerBy = VQ.idiv = function(QQ) {
        var WQ = this.constructor;
        return hQ(UQ(this, new WQ(QQ), 0, 1), WQ.precision)
      }, VQ.equals = VQ.eq = function(QQ) {
        return !this.cmp(QQ)
      }, VQ.exponent = function() {
        return vQ(this)
      }, VQ.greaterThan = VQ.gt = function(QQ) {
        return this.cmp(QQ) > 0
      }, VQ.greaterThanOrEqualTo = VQ.gte = function(QQ) {
        return this.cmp(QQ) >= 0
      }, VQ.isInteger = VQ.isint = function() {
        return this.e > this.d.length - 2
      }, VQ.isNegative = VQ.isneg = function() {
        return this.s < 0
      }, VQ.isPositive = VQ.ispos = function() {
        return this.s > 0
      }, VQ.isZero = function() {
        return 0 === this.s
      }, VQ.lessThan = VQ.lt = function(QQ) {
        return this.cmp(QQ) < 0
      }, VQ.lessThanOrEqualTo = VQ.lte = function(QQ) {
        return this.cmp(QQ) < 1
      }, VQ.logarithm = VQ.log = function(QQ) {
        var WQ, XQ = this,
          wQ = XQ.constructor,
          TQ = wQ.precision,
          zQ = TQ + 5;
        if (void 0 === QQ) QQ = new wQ(10);
        else if ((QQ = new wQ(QQ)).s < 1 || QQ.eq(qQ)) throw Error(FQ + "NaN");
        if (XQ.s < 1) throw Error(FQ + (XQ.s ? "NaN" : "-Infinity"));
        return XQ.eq(qQ) ? new wQ(0) : (sQ = !1, WQ = UQ(aQ(XQ, zQ), aQ(QQ, zQ), zQ), sQ = !0, hQ(WQ, TQ))
      }, VQ.minus = VQ.sub = function(QQ) {
        var WQ = this;
        return QQ = new WQ.constructor(QQ), WQ.s == QQ.s ? iQ(WQ, QQ) : DQ(WQ, (QQ.s = -QQ.s, QQ))
      }, VQ.modulo = VQ.mod = function(QQ) {
        var WQ, XQ = this,
          wQ = XQ.constructor,
          qQ = wQ.precision;
        if (!(QQ = new wQ(QQ)).s) throw Error(FQ + "NaN");
        return XQ.s ? (sQ = !1, WQ = UQ(XQ, QQ, 0, 1).times(QQ), sQ = !0, XQ.minus(WQ)) : hQ(new wQ(XQ), qQ)
      }, VQ.naturalExponential = VQ.exp = function() {
        return bQ(this)
      }, VQ.naturalLogarithm = VQ.ln = function() {
        return aQ(this)
      }, VQ.negated = VQ.neg = function() {
        var QQ = new this.constructor(this);
        return QQ.s = -QQ.s || 0, QQ
      }, VQ.plus = VQ.add = function(QQ) {
        var WQ = this;
        return QQ = new WQ.constructor(QQ), WQ.s == QQ.s ? DQ(WQ, QQ) : iQ(WQ, (QQ.s = -QQ.s, QQ))
      }, VQ.precision = VQ.sd = function(QQ) {
        var WQ, XQ, wQ, qQ = this;
        if (void 0 !== QQ && QQ !== !!QQ && 1 !== QQ && 0 !== QQ) throw Error(PQ + QQ);
        if (WQ = vQ(qQ) + 1, XQ = 7 * (wQ = qQ.d.length - 1) + 1, wQ = qQ.d[wQ]) {
          for (; wQ % 10 == 0; wQ /= 10) XQ--;
          for (wQ = qQ.d[0]; wQ >= 10; wQ /= 10) XQ++
        }
        return QQ && WQ > XQ ? WQ : XQ
      }, VQ.squareRoot = VQ.sqrt = function() {
        var QQ, WQ, XQ, wQ, qQ, TQ, zQ, PQ = this,
          gQ = PQ.constructor;
        if (PQ.s < 1) {
          if (!PQ.s) return new gQ(0);
          throw Error(FQ + "NaN")
        }
        for (QQ = vQ(PQ), sQ = !1, 0 == (qQ = Math.sqrt(+PQ)) || qQ == 1 / 0 ? (((WQ = GQ(PQ.d)).length + QQ) % 2 == 0 && (WQ += "0"), qQ = Math.sqrt(WQ), QQ = JQ((QQ + 1) / 2) - (QQ < 0 || QQ % 2), wQ = new gQ(WQ = qQ == 1 / 0 ? "1e" + QQ : (WQ = qQ.toExponential()).slice(0, WQ.indexOf("e") + 1) + QQ)) : wQ = new gQ(qQ.toString()), qQ = zQ = (XQ = gQ.precision) + 3;;)
          if (wQ = (TQ = wQ).plus(UQ(PQ, TQ, zQ + 2)).times(.5), GQ(TQ.d).slice(0, zQ) === (WQ = GQ(wQ.d)).slice(0, zQ)) {
            if (WQ = WQ.slice(zQ - 3, zQ + 1), qQ == zQ && "4999" == WQ) {
              if (hQ(TQ, XQ + 1, 0), TQ.times(TQ).eq(PQ)) {
                wQ = TQ;
                break
              }
            } else if ("9999" != WQ) break;
            zQ += 4
          } return sQ = !0, hQ(wQ, XQ)
      }, VQ.times = VQ.mul = function(QQ) {
        var WQ, XQ, wQ, qQ, TQ, zQ, FQ, PQ, gQ, JQ = this,
          rQ = JQ.constructor,
          IQ = JQ.d,
          BQ = (QQ = new rQ(QQ)).d;
        if (!JQ.s || !QQ.s) return new rQ(0);
        for (QQ.s *= JQ.s, XQ = JQ.e + QQ.e, (PQ = IQ.length) < (gQ = BQ.length) && (TQ = IQ, IQ = BQ, BQ = TQ, zQ = PQ, PQ = gQ, gQ = zQ), TQ = [], wQ = zQ = PQ + gQ; wQ--;) TQ.push(0);
        for (wQ = gQ; --wQ >= 0;) {
          for (WQ = 0, qQ = PQ + wQ; qQ > wQ;) FQ = TQ[qQ] + BQ[wQ] * IQ[qQ - wQ - 1] + WQ, TQ[qQ--] = FQ % jQ | 0, WQ = FQ / jQ | 0;
          TQ[qQ] = (TQ[qQ] + WQ) % jQ | 0
        }
        for (; !TQ[--zQ];) TQ.pop();
        return WQ ? ++XQ : TQ.shift(), QQ.d = TQ, QQ.e = XQ, sQ ? hQ(QQ, rQ.precision) : QQ
      }, VQ.toDecimalPlaces = VQ.todp = function(QQ, WQ) {
        var XQ = this,
          wQ = XQ.constructor;
        return XQ = new wQ(XQ), void 0 === QQ ? XQ : (pQ(QQ, 0, TQ), void 0 === WQ ? WQ = wQ.rounding : pQ(WQ, 0, 8), hQ(XQ, QQ + vQ(XQ) + 1, WQ))
      }, VQ.toExponential = function(QQ, WQ) {
        var XQ, wQ = this,
          qQ = wQ.constructor;
        return void 0 === QQ ? XQ = cQ(wQ, !0) : (pQ(QQ, 0, TQ), void 0 === WQ ? WQ = qQ.rounding : pQ(WQ, 0, 8), XQ = cQ(wQ = hQ(new qQ(wQ), QQ + 1, WQ), !0, QQ + 1)), XQ
      }, VQ.toFixed = function(QQ, WQ) {
        var XQ, wQ, qQ = this,
          zQ = qQ.constructor;
        return void 0 === QQ ? cQ(qQ) : (pQ(QQ, 0, TQ), void 0 === WQ ? WQ = zQ.rounding : pQ(WQ, 0, 8), XQ = cQ((wQ = hQ(new zQ(qQ), QQ + vQ(qQ) + 1, WQ)).abs(), !1, QQ + vQ(wQ) + 1), qQ.isneg() && !qQ.isZero() ? "-" + XQ : XQ)
      }, VQ.toInteger = VQ.toint = function() {
        var QQ = this,
          WQ = QQ.constructor;
        return hQ(new WQ(QQ), vQ(QQ) + 1, WQ.rounding)
      }, VQ.toNumber = function() {
        return +this
      }, VQ.toPower = VQ.pow = function(QQ) {
        var WQ, XQ, wQ, TQ, zQ, PQ, gQ = this,
          rQ = gQ.constructor,
          IQ = +(QQ = new rQ(QQ));
        if (!QQ.s) return new rQ(qQ);
        if (!(gQ = new rQ(gQ)).s) {
          if (QQ.s < 1) throw Error(FQ + "Infinity");
          return gQ
        }
        if (gQ.eq(qQ)) return gQ;
        if (wQ = rQ.precision, QQ.eq(qQ)) return hQ(gQ, wQ);
        if (PQ = (WQ = QQ.e) >= (XQ = QQ.d.length - 1), zQ = gQ.s, PQ) {
          if ((XQ = IQ < 0 ? -IQ : IQ) <= BQ) {
            for (TQ = new rQ(qQ), WQ = Math.ceil(wQ / 7 + 4), sQ = !1; XQ % 2 && AQ((TQ = TQ.times(gQ)).d, WQ), 0 !== (XQ = JQ(XQ / 2));) AQ((gQ = gQ.times(gQ)).d, WQ);
            return sQ = !0, QQ.s < 0 ? new rQ(qQ).div(TQ) : hQ(TQ, wQ)
          }
        } else if (zQ < 0) throw Error(FQ + "NaN");
        return zQ = zQ < 0 && 1 & QQ.d[Math.max(WQ, XQ)] ? -1 : 1, gQ.s = 1, sQ = !1, TQ = QQ.times(aQ(gQ, wQ + 12)), sQ = !0, (TQ = bQ(TQ)).s = zQ, TQ
      }, VQ.toPrecision = function(QQ, WQ) {
        var XQ, wQ, qQ = this,
          zQ = qQ.constructor;
        return void 0 === QQ ? wQ = cQ(qQ, (XQ = vQ(qQ)) <= zQ.toExpNeg || XQ >= zQ.toExpPos) : (pQ(QQ, 1, TQ), void 0 === WQ ? WQ = zQ.rounding : pQ(WQ, 0, 8), wQ = cQ(qQ = hQ(new zQ(qQ), QQ, WQ), QQ <= (XQ = vQ(qQ)) || XQ <= zQ.toExpNeg, QQ)), wQ
      }, VQ.toSignificantDigits = VQ.tosd = function(QQ, WQ) {
        var XQ = this.constructor;
        return void 0 === QQ ? (QQ = XQ.precision, WQ = XQ.rounding) : (pQ(QQ, 1, TQ), void 0 === WQ ? WQ = XQ.rounding : pQ(WQ, 0, 8)), hQ(new XQ(this), QQ, WQ)
      }, VQ.toString = VQ.valueOf = VQ.val = VQ.toJSON = function() {
        var QQ = this,
          WQ = vQ(QQ),
          XQ = QQ.constructor;
        return cQ(QQ, WQ <= XQ.toExpNeg || WQ >= XQ.toExpPos)
      };
      var UQ = function() {
        function QQ(QQ, WQ) {
          var XQ, wQ = 0,
            qQ = QQ.length;
          for (QQ = QQ.slice(); qQ--;) XQ = QQ[qQ] * WQ + wQ, QQ[qQ] = XQ % jQ | 0, wQ = XQ / jQ | 0;
          return wQ && QQ.unshift(wQ), QQ
        }

        function WQ(QQ, WQ, XQ, wQ) {
          var qQ, TQ;
          if (XQ != wQ) TQ = XQ > wQ ? 1 : -1;
          else
            for (qQ = TQ = 0; qQ < XQ; qQ++)
              if (QQ[qQ] != WQ[qQ]) {
                TQ = QQ[qQ] > WQ[qQ] ? 1 : -1;
                break
              } return TQ
        }

        function XQ(QQ, WQ, XQ) {
          for (var wQ = 0; XQ--;) QQ[XQ] -= wQ, wQ = QQ[XQ] < WQ[XQ] ? 1 : 0, QQ[XQ] = wQ * jQ + QQ[XQ] - WQ[XQ];
          for (; !QQ[0] && QQ.length > 1;) QQ.shift()
        }
        return function(wQ, qQ, TQ, zQ) {
          var sQ, PQ, gQ, JQ, rQ, IQ, BQ, yQ, VQ, DQ, pQ, GQ, UQ, bQ, dQ, HQ, aQ, lQ, iQ = wQ.constructor,
            cQ = wQ.s == qQ.s ? 1 : -1,
            AQ = wQ.d,
            RQ = qQ.d;
          if (!wQ.s) return new iQ(wQ);
          if (!qQ.s) throw Error(FQ + "Division by zero");
          for (PQ = wQ.e - qQ.e, aQ = RQ.length, dQ = AQ.length, yQ = (BQ = new iQ(cQ)).d = [], gQ = 0; RQ[gQ] == (AQ[gQ] || 0);) ++gQ;
          if (RQ[gQ] > (AQ[gQ] || 0) && --PQ, (GQ = null == TQ ? TQ = iQ.precision : zQ ? TQ + (vQ(wQ) - vQ(qQ)) + 1 : TQ) < 0) return new iQ(0);
          if (GQ = GQ / 7 + 2 | 0, gQ = 0, 1 == aQ)
            for (JQ = 0, RQ = RQ[0], GQ++;
              (gQ < dQ || JQ) && GQ--; gQ++) UQ = JQ * jQ + (AQ[gQ] || 0), yQ[gQ] = UQ / RQ | 0, JQ = UQ % RQ | 0;
          else {
            for ((JQ = jQ / (RQ[0] + 1) | 0) > 1 && (RQ = QQ(RQ, JQ), AQ = QQ(AQ, JQ), aQ = RQ.length, dQ = AQ.length), bQ = aQ, DQ = (VQ = AQ.slice(0, aQ)).length; DQ < aQ;) VQ[DQ++] = 0;
            (lQ = RQ.slice()).unshift(0), HQ = RQ[0], RQ[1] >= jQ / 2 && ++HQ;
            do {
              JQ = 0, (sQ = WQ(RQ, VQ, aQ, DQ)) < 0 ? (pQ = VQ[0], aQ != DQ && (pQ = pQ * jQ + (VQ[1] || 0)), (JQ = pQ / HQ | 0) > 1 ? (JQ >= jQ && (JQ = jQ - 1), 1 == (sQ = WQ(rQ = QQ(RQ, JQ), VQ, IQ = rQ.length, DQ = VQ.length)) && (JQ--, XQ(rQ, aQ < IQ ? lQ : RQ, IQ))) : (0 == JQ && (sQ = JQ = 1), rQ = RQ.slice()), (IQ = rQ.length) < DQ && rQ.unshift(0), XQ(VQ, rQ, DQ), -1 == sQ && (sQ = WQ(RQ, VQ, aQ, DQ = VQ.length)) < 1 && (JQ++, XQ(VQ, aQ < DQ ? lQ : RQ, DQ)), DQ = VQ.length) : 0 === sQ && (JQ++, VQ = [0]), yQ[gQ++] = JQ, sQ && VQ[0] ? VQ[DQ++] = AQ[bQ] || 0 : (VQ = [AQ[bQ]], DQ = 1)
            } while ((bQ++ < dQ || void 0 !== VQ[0]) && GQ--)
          }
          return yQ[0] || yQ.shift(), BQ.e = PQ, hQ(BQ, zQ ? TQ + vQ(BQ) + 1 : TQ)
        }
      }();

      function bQ(QQ, WQ) {
        var XQ, wQ, TQ, zQ, FQ, PQ = 0,
          JQ = 0,
          IQ = QQ.constructor,
          jQ = IQ.precision;
        if (vQ(QQ) > 16) throw Error(gQ + vQ(QQ));
        if (!QQ.s) return new IQ(qQ);
        for (null == WQ ? (sQ = !1, FQ = jQ) : FQ = WQ, zQ = new IQ(.03125); QQ.abs().gte(.1);) QQ = QQ.times(zQ), JQ += 5;
        for (FQ += Math.log(rQ(2, JQ)) / Math.LN10 * 2 + 5 | 0, XQ = wQ = TQ = new IQ(qQ), IQ.precision = FQ;;) {
          if (wQ = hQ(wQ.times(QQ), FQ), XQ = XQ.times(++PQ), GQ((zQ = TQ.plus(UQ(wQ, XQ, FQ))).d).slice(0, FQ) === GQ(TQ.d).slice(0, FQ)) {
            for (; JQ--;) TQ = hQ(TQ.times(TQ), FQ);
            return IQ.precision = jQ, null == WQ ? (sQ = !0, hQ(TQ, jQ)) : TQ
          }
          TQ = zQ
        }
      }

      function vQ(QQ) {
        for (var WQ = 7 * QQ.e, XQ = QQ.d[0]; XQ >= 10; XQ /= 10) WQ++;
        return WQ
      }

      function dQ(QQ, WQ, XQ) {
        if (WQ > QQ.LN10.sd()) throw sQ = !0, XQ && (QQ.precision = XQ), Error(FQ + "LN10 precision limit exceeded");
        return hQ(new QQ(QQ.LN10), WQ)
      }

      function HQ(QQ) {
        for (var WQ = ""; QQ--;) WQ += "0";
        return WQ
      }

      function aQ(QQ, WQ) {
        var XQ, wQ, TQ, zQ, PQ, gQ, JQ, rQ, IQ, jQ = 1,
          BQ = QQ,
          yQ = BQ.d,
          VQ = BQ.constructor,
          DQ = VQ.precision;
        if (BQ.s < 1) throw Error(FQ + (BQ.s ? "NaN" : "-Infinity"));
        if (BQ.eq(qQ)) return new VQ(0);
        if (null == WQ ? (sQ = !1, rQ = DQ) : rQ = WQ, BQ.eq(10)) return null == WQ && (sQ = !0), dQ(VQ, rQ);
        if (rQ += 10, VQ.precision = rQ, wQ = (XQ = GQ(yQ)).charAt(0), zQ = vQ(BQ), !(Math.abs(zQ) < 15e14)) return JQ = dQ(VQ, rQ + 2, DQ).times(zQ + ""), BQ = aQ(new VQ(wQ + "." + XQ.slice(1)), rQ - 10).plus(JQ), VQ.precision = DQ, null == WQ ? (sQ = !0, hQ(BQ, DQ)) : BQ;
        for (; wQ < 7 && 1 != wQ || 1 == wQ && XQ.charAt(1) > 3;) wQ = (XQ = GQ((BQ = BQ.times(QQ)).d)).charAt(0), jQ++;
        for (zQ = vQ(BQ), wQ > 1 ? (BQ = new VQ("0." + XQ), zQ++) : BQ = new VQ(wQ + "." + XQ.slice(1)), gQ = PQ = BQ = UQ(BQ.minus(qQ), BQ.plus(qQ), rQ), IQ = hQ(BQ.times(BQ), rQ), TQ = 3;;) {
          if (PQ = hQ(PQ.times(IQ), rQ), GQ((JQ = gQ.plus(UQ(PQ, new VQ(TQ), rQ))).d).slice(0, rQ) === GQ(gQ.d).slice(0, rQ)) return gQ = gQ.times(2), 0 !== zQ && (gQ = gQ.plus(dQ(VQ, rQ + 2, DQ).times(zQ + ""))), gQ = UQ(gQ, new VQ(jQ), rQ), VQ.precision = DQ, null == WQ ? (sQ = !0, hQ(gQ, DQ)) : gQ;
          gQ = JQ, TQ += 2
        }
      }

      function lQ(QQ, WQ) {
        var XQ, wQ, qQ;
        for ((XQ = WQ.indexOf(".")) > -1 && (WQ = WQ.replace(".", "")), (wQ = WQ.search(/e/i)) > 0 ? (XQ < 0 && (XQ = wQ), XQ += +WQ.slice(wQ + 1), WQ = WQ.substring(0, wQ)) : XQ < 0 && (XQ = WQ.length), wQ = 0; 48 === WQ.charCodeAt(wQ);) ++wQ;
        for (qQ = WQ.length; 48 === WQ.charCodeAt(qQ - 1);) --qQ;
        if (WQ = WQ.slice(wQ, qQ)) {
          if (qQ -= wQ, XQ = XQ - wQ - 1, QQ.e = JQ(XQ / 7), QQ.d = [], wQ = (XQ + 1) % 7, XQ < 0 && (wQ += 7), wQ < qQ) {
            for (wQ && QQ.d.push(+WQ.slice(0, wQ)), qQ -= 7; wQ < qQ;) QQ.d.push(+WQ.slice(wQ, wQ += 7));
            wQ = 7 - (WQ = WQ.slice(wQ)).length
          } else wQ -= qQ;
          for (; wQ--;) WQ += "0";
          if (QQ.d.push(+WQ), sQ && (QQ.e > yQ || QQ.e < -yQ)) throw Error(gQ + XQ)
        } else QQ.s = 0, QQ.e = 0, QQ.d = [0];
        return QQ
      }

      function hQ(QQ, WQ, XQ) {
        var wQ, qQ, TQ, zQ, FQ, PQ, IQ, BQ, VQ = QQ.d;
        for (zQ = 1, TQ = VQ[0]; TQ >= 10; TQ /= 10) zQ++;
        if ((wQ = WQ - zQ) < 0) wQ += 7, qQ = WQ, IQ = VQ[BQ = 0];
        else {
          if ((BQ = Math.ceil((wQ + 1) / 7)) >= (TQ = VQ.length)) return QQ;
          for (IQ = TQ = VQ[BQ], zQ = 1; TQ >= 10; TQ /= 10) zQ++;
          qQ = (wQ %= 7) - 7 + zQ
        }
        if (void 0 !== XQ && (FQ = IQ / (TQ = rQ(10, zQ - qQ - 1)) % 10 | 0, PQ = WQ < 0 || void 0 !== VQ[BQ + 1] || IQ % TQ, PQ = XQ < 4 ? (FQ || PQ) && (0 == XQ || XQ == (QQ.s < 0 ? 3 : 2)) : FQ > 5 || 5 == FQ && (4 == XQ || PQ || 6 == XQ && (wQ > 0 ? qQ > 0 ? IQ / rQ(10, zQ - qQ) : 0 : VQ[BQ - 1]) % 10 & 1 || XQ == (QQ.s < 0 ? 8 : 7))), WQ < 1 || !VQ[0]) return PQ ? (TQ = vQ(QQ), VQ.length = 1, WQ = WQ - TQ - 1, VQ[0] = rQ(10, (7 - WQ % 7) % 7), QQ.e = JQ(-WQ / 7) || 0) : (VQ.length = 1, VQ[0] = QQ.e = QQ.s = 0), QQ;
        if (0 == wQ ? (VQ.length = BQ, TQ = 1, BQ--) : (VQ.length = BQ + 1, TQ = rQ(10, 7 - wQ), VQ[BQ] = qQ > 0 ? (IQ / rQ(10, zQ - qQ) % rQ(10, qQ) | 0) * TQ : 0), PQ)
          for (;;) {
            if (0 == BQ) {
              (VQ[0] += TQ) == jQ && (VQ[0] = 1, ++QQ.e);
              break
            }
            if (VQ[BQ] += TQ, VQ[BQ] != jQ) break;
            VQ[BQ--] = 0, TQ = 1
          }
        for (wQ = VQ.length; 0 === VQ[--wQ];) VQ.pop();
        if (sQ && (QQ.e > yQ || QQ.e < -yQ)) throw Error(gQ + vQ(QQ));
        return QQ
      }

      function iQ(QQ, WQ) {
        var XQ, wQ, qQ, TQ, zQ, FQ, PQ, gQ, JQ, rQ, IQ = QQ.constructor,
          BQ = IQ.precision;
        if (!QQ.s || !WQ.s) return WQ.s ? WQ.s = -WQ.s : WQ = new IQ(QQ), sQ ? hQ(WQ, BQ) : WQ;
        if (PQ = QQ.d, rQ = WQ.d, wQ = WQ.e, gQ = QQ.e, PQ = PQ.slice(), zQ = gQ - wQ) {
          for ((JQ = zQ < 0) ? (XQ = PQ, zQ = -zQ, FQ = rQ.length) : (XQ = rQ, wQ = gQ, FQ = PQ.length), zQ > (qQ = Math.max(Math.ceil(BQ / 7), FQ) + 2) && (zQ = qQ, XQ.length = 1), XQ.reverse(), qQ = zQ; qQ--;) XQ.push(0);
          XQ.reverse()
        } else {
          for ((JQ = (qQ = PQ.length) < (FQ = rQ.length)) && (FQ = qQ), qQ = 0; qQ < FQ; qQ++)
            if (PQ[qQ] != rQ[qQ]) {
              JQ = PQ[qQ] < rQ[qQ];
              break
            } zQ = 0
        }
        for (JQ && (XQ = PQ, PQ = rQ, rQ = XQ, WQ.s = -WQ.s), FQ = PQ.length, qQ = rQ.length - FQ; qQ > 0; --qQ) PQ[FQ++] = 0;
        for (qQ = rQ.length; qQ > zQ;) {
          if (PQ[--qQ] < rQ[qQ]) {
            for (TQ = qQ; TQ && 0 === PQ[--TQ];) PQ[TQ] = jQ - 1;
            --PQ[TQ], PQ[qQ] += jQ
          }
          PQ[qQ] -= rQ[qQ]
        }
        for (; 0 === PQ[--FQ];) PQ.pop();
        for (; 0 === PQ[0]; PQ.shift()) --wQ;
        return PQ[0] ? (WQ.d = PQ, WQ.e = wQ, sQ ? hQ(WQ, BQ) : WQ) : new IQ(0)
      }

      function cQ(QQ, WQ, XQ) {
        var wQ, qQ = vQ(QQ),
          TQ = GQ(QQ.d),
          zQ = TQ.length;
        return WQ ? (XQ && (wQ = XQ - zQ) > 0 ? TQ = TQ.charAt(0) + "." + TQ.slice(1) + HQ(wQ) : zQ > 1 && (TQ = TQ.charAt(0) + "." + TQ.slice(1)), TQ = TQ + (qQ < 0 ? "e" : "e+") + qQ) : qQ < 0 ? (TQ = "0." + HQ(-qQ - 1) + TQ, XQ && (wQ = XQ - zQ) > 0 && (TQ += HQ(wQ))) : qQ >= zQ ? (TQ += HQ(qQ + 1 - zQ), XQ && (wQ = XQ - qQ - 1) > 0 && (TQ = TQ + "." + HQ(wQ))) : ((wQ = qQ + 1) < zQ && (TQ = TQ.slice(0, wQ) + "." + TQ.slice(wQ)), XQ && (wQ = XQ - zQ) > 0 && (qQ + 1 === zQ && (TQ += "."), TQ += HQ(wQ))), QQ.s < 0 ? "-" + TQ : TQ
      }

      function AQ(QQ, WQ) {
        if (QQ.length > WQ) return QQ.length = WQ, !0
      }

      function RQ(QQ) {
        if (!QQ || "object" !== typeof QQ) throw Error(FQ + "Object expected");
        var WQ, XQ, wQ, qQ = ["precision", 1, TQ, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
        for (WQ = 0; WQ < qQ.length; WQ += 3)
          if (void 0 !== (wQ = QQ[XQ = qQ[WQ]])) {
            if (!(JQ(wQ) === wQ && wQ >= qQ[WQ + 1] && wQ <= qQ[WQ + 2])) throw Error(PQ + XQ + ": " + wQ);
            this[XQ] = wQ
          } if (void 0 !== (wQ = QQ[XQ = "LN10"])) {
          if (wQ != Math.LN10) throw Error(PQ + XQ + ": " + wQ);
          this[XQ] = new this(wQ)
        }
        return this
      }
      zQ = function QQ(WQ) {
        var XQ, wQ, qQ;

        function TQ(QQ) {
          var WQ = this;
          if (!(WQ instanceof TQ)) return new TQ(QQ);
          if (WQ.constructor = TQ, QQ instanceof TQ) return WQ.s = QQ.s, WQ.e = QQ.e, void(WQ.d = (QQ = QQ.d) ? QQ.slice() : QQ);
          if ("number" === typeof QQ) {
            if (0 * QQ !== 0) throw Error(PQ + QQ);
            if (QQ > 0) WQ.s = 1;
            else {
              if (!(QQ < 0)) return WQ.s = 0, WQ.e = 0, void(WQ.d = [0]);
              QQ = -QQ, WQ.s = -1
            }
            return QQ === ~~QQ && QQ < 1e7 ? (WQ.e = 0, void(WQ.d = [QQ])) : lQ(WQ, QQ.toString())
          }
          if ("string" !== typeof QQ) throw Error(PQ + QQ);
          if (45 === QQ.charCodeAt(0) ? (QQ = QQ.slice(1), WQ.s = -1) : WQ.s = 1, !IQ.test(QQ)) throw Error(PQ + QQ);
          lQ(WQ, QQ)
        }
        if (TQ.prototype = VQ, TQ.ROUND_UP = 0, TQ.ROUND_DOWN = 1, TQ.ROUND_CEIL = 2, TQ.ROUND_FLOOR = 3, TQ.ROUND_HALF_UP = 4, TQ.ROUND_HALF_DOWN = 5, TQ.ROUND_HALF_EVEN = 6, TQ.ROUND_HALF_CEIL = 7, TQ.ROUND_HALF_FLOOR = 8, TQ.clone = QQ, TQ.config = TQ.set = RQ, void 0 === WQ && (WQ = {}), WQ)
          for (qQ = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], XQ = 0; XQ < qQ.length;) WQ.hasOwnProperty(wQ = qQ[XQ++]) || (WQ[wQ] = this[wQ]);
        return TQ.config(WQ), TQ
      }(zQ), zQ.default = zQ.Decimal = zQ, qQ = new zQ(1), void 0 === (wQ = function() {
        return zQ
      }.call(WQ, XQ, WQ, QQ)) || (QQ.exports = wQ)
    }()
  },
  6133: (QQ, WQ, XQ) => {
    var wQ = XQ(5609)(XQ(5455), "DataView");
    QQ.exports = wQ
  },
  5593: (QQ, WQ, XQ) => {
    var wQ = XQ(5597),
      qQ = XQ(5649),
      TQ = XQ(5658),
      zQ = XQ(5660),
      sQ = XQ(5662);

    function FQ(QQ) {
      var WQ = -1,
        XQ = null == QQ ? 0 : QQ.length;
      for (this.clear(); ++WQ < XQ;) {
        var wQ = QQ[WQ];
        this.set(wQ[0], wQ[1])
      }
    }
    FQ.prototype.clear = wQ, FQ.prototype.delete = qQ, FQ.prototype.get = TQ, FQ.prototype.has = zQ, FQ.prototype.set = sQ, QQ.exports = FQ
  },
  5666: (QQ, WQ, XQ) => {
    var wQ = XQ(5672),
      qQ = XQ(5675),
      TQ = XQ(5685),
      zQ = XQ(5689),
      sQ = XQ(5691);

    function FQ(QQ) {
      var WQ = -1,
        XQ = null == QQ ? 0 : QQ.length;
      for (this.clear(); ++WQ < XQ;) {
        var wQ = QQ[WQ];
        this.set(wQ[0], wQ[1])
      }
    }
    FQ.prototype.clear = wQ, FQ.prototype.delete = qQ, FQ.prototype.get = TQ, FQ.prototype.has = zQ, FQ.prototype.set = sQ, QQ.exports = FQ
  },
  5698: (QQ, WQ, XQ) => {
    var wQ = XQ(5609)(XQ(5455), "Map");
    QQ.exports = wQ
  },
  5582: (QQ, WQ, XQ) => {
    var wQ = XQ(5590),
      qQ = XQ(5707),
      TQ = XQ(5721),
      zQ = XQ(5727),
      sQ = XQ(5736);

    function FQ(QQ) {
      var WQ = -1,
        XQ = null == QQ ? 0 : QQ.length;
      for (this.clear(); ++WQ < XQ;) {
        var wQ = QQ[WQ];
        this.set(wQ[0], wQ[1])
      }
    }
    FQ.prototype.clear = wQ, FQ.prototype.delete = qQ, FQ.prototype.get = TQ, FQ.prototype.has = zQ, FQ.prototype.set = sQ, QQ.exports = FQ
  },
  6137: (QQ, WQ, XQ) => {
    var wQ = XQ(5609)(XQ(5455), "Promise");
    QQ.exports = wQ
  },
  6143: (QQ, WQ, XQ) => {
    var wQ = XQ(5609)(XQ(5455), "Set");
    QQ.exports = wQ
  },
  5976: (QQ, WQ, XQ) => {
    var wQ = XQ(5582),
      qQ = XQ(5985),
      TQ = XQ(5990);

    function zQ(QQ) {
      var WQ = -1,
        XQ = null == QQ ? 0 : QQ.length;
      for (this.__data__ = new wQ; ++WQ < XQ;) this.add(QQ[WQ])
    }
    zQ.prototype.add = zQ.prototype.push = qQ, zQ.prototype.has = TQ, QQ.exports = zQ
  },
  5918: (QQ, WQ, XQ) => {
    var wQ = XQ(5666),
      qQ = XQ(5925),
      TQ = XQ(5932),
      zQ = XQ(5934),
      sQ = XQ(5941),
      FQ = XQ(5950);

    function PQ(QQ) {
      var WQ = this.__data__ = new wQ(QQ);
      this.size = WQ.size
    }
    PQ.prototype.clear = qQ, PQ.prototype.delete = TQ, PQ.prototype.get = zQ, PQ.prototype.has = sQ, PQ.prototype.set = FQ, QQ.exports = PQ
  },
  5501: (QQ, WQ, XQ) => {
    var wQ = XQ(5455).Symbol;
    QQ.exports = wQ
  },
  6012: (QQ, WQ, XQ) => {
    var wQ = XQ(5455).Uint8Array;
    QQ.exports = wQ
  },
  6149: (QQ, WQ, XQ) => {
    var wQ = XQ(5609)(XQ(5455), "WeakMap");
    QQ.exports = wQ
  },
  6294: QQ => {
    QQ.exports = function(QQ, WQ, XQ) {
      switch (XQ.length) {
        case 0:
          return QQ.call(WQ);
        case 1:
          return QQ.call(WQ, XQ[0]);
        case 2:
          return QQ.call(WQ, XQ[0], XQ[1]);
        case 3:
          return QQ.call(WQ, XQ[0], XQ[1], XQ[2])
      }
      return QQ.apply(WQ, XQ)
    }
  },
  6653: QQ => {
    QQ.exports = function(QQ, WQ) {
      for (var XQ = -1, wQ = null == QQ ? 0 : QQ.length; ++XQ < wQ;)
        if (!WQ(QQ[XQ], XQ, QQ)) return !1;
      return !0
    }
  },
  6053: QQ => {
    QQ.exports = function(QQ, WQ) {
      for (var XQ = -1, wQ = null == QQ ? 0 : QQ.length, qQ = 0, TQ = []; ++XQ < wQ;) {
        var zQ = QQ[XQ];
        WQ(zQ, XQ, QQ) && (TQ[qQ++] = zQ)
      }
      return TQ
    }
  },
  6371: (QQ, WQ, XQ) => {
    var wQ = XQ(6380);
    QQ.exports = function(QQ, WQ) {
      return !!(null == QQ ? 0 : QQ.length) && wQ(QQ, WQ, 0) > -1
    }
  },
  6409: QQ => {
    QQ.exports = function(QQ, WQ, XQ) {
      for (var wQ = -1, qQ = null == QQ ? 0 : QQ.length; ++wQ < qQ;)
        if (XQ(WQ, QQ[wQ])) return !0;
      return !1
    }
  },
  6066: (QQ, WQ, XQ) => {
    var wQ = XQ(6071),
      qQ = XQ(5885),
      TQ = XQ(5529),
      zQ = XQ(6075),
      sQ = XQ(5848),
      FQ = XQ(6085),
      PQ = Object.prototype.hasOwnProperty;
    QQ.exports = function(QQ, WQ) {
      var XQ = TQ(QQ),
        gQ = !XQ && qQ(QQ),
        JQ = !XQ && !gQ && zQ(QQ),
        rQ = !XQ && !gQ && !JQ && FQ(QQ),
        IQ = XQ || gQ || JQ || rQ,
        jQ = IQ ? wQ(QQ.length, String) : [],
        BQ = jQ.length;
      for (var yQ in QQ) !WQ && !PQ.call(QQ, yQ) || IQ && ("length" == yQ || JQ && ("offset" == yQ || "parent" == yQ) || rQ && ("buffer" == yQ || "byteLength" == yQ || "byteOffset" == yQ) || sQ(yQ, BQ)) || jQ.push(yQ);
      return jQ
    }
  },
  5756: QQ => {
    QQ.exports = function(QQ, WQ) {
      for (var XQ = -1, wQ = null == QQ ? 0 : QQ.length, qQ = Array(wQ); ++XQ < wQ;) qQ[XQ] = WQ(QQ[XQ], XQ, QQ);
      return qQ
    }
  },
  5875: QQ => {
    QQ.exports = function(QQ, WQ) {
      for (var XQ = -1, wQ = WQ.length, qQ = QQ.length; ++XQ < wQ;) QQ[qQ + XQ] = WQ[XQ];
      return QQ
    }
  },
  5998: QQ => {
    QQ.exports = function(QQ, WQ) {
      for (var XQ = -1, wQ = null == QQ ? 0 : QQ.length; ++XQ < wQ;)
        if (WQ(QQ[XQ], XQ, QQ)) return !0;
      return !1
    }
  },
  6475: QQ => {
    QQ.exports = function(QQ) {
      return QQ.split("")
    }
  },
  5681: (QQ, WQ, XQ) => {
    var wQ = XQ(5683);
    QQ.exports = function(QQ, WQ) {
      for (var XQ = QQ.length; XQ--;)
        if (wQ(QQ[XQ][0], WQ)) return XQ;
      return -1
    }
  },
  6641: (QQ, WQ, XQ) => {
    var wQ = XQ(6318);
    QQ.exports = function(QQ, WQ, XQ) {
      "__proto__" == WQ && wQ ? wQ(QQ, WQ, {
        configurable: !0,
        enumerable: !0,
        value: XQ,
        writable: !0
      }) : QQ[WQ] = XQ
    }
  },
  6231: (QQ, WQ, XQ) => {
    var wQ = XQ(6240),
      qQ = XQ(6257)(wQ);
    QQ.exports = qQ
  },
  6662: (QQ, WQ, XQ) => {
    var wQ = XQ(6231);
    QQ.exports = function(QQ, WQ) {
      var XQ = !0;
      return wQ(QQ, (function(QQ, wQ, qQ) {
        return XQ = !!WQ(QQ, wQ, qQ)
      })), XQ
    }
  },
  6555: (QQ, WQ, XQ) => {
    var wQ = XQ(5484);
    QQ.exports = function(QQ, WQ, XQ) {
      for (var qQ = -1, TQ = QQ.length; ++qQ < TQ;) {
        var zQ = QQ[qQ],
          sQ = WQ(zQ);
        if (null != sQ && (void 0 === FQ ? sQ === sQ && !wQ(sQ) : XQ(sQ, FQ))) var FQ = sQ,
          PQ = zQ
      }
      return PQ
    }
  },
  6385: QQ => {
    QQ.exports = function(QQ, WQ, XQ, wQ) {
      for (var qQ = QQ.length, TQ = XQ + (wQ ? 1 : -1); wQ ? TQ-- : ++TQ < qQ;)
        if (WQ(QQ[TQ], TQ, QQ)) return TQ;
      return -1
    }
  },
  5871: (QQ, WQ, XQ) => {
    var wQ = XQ(5875),
      qQ = XQ(5878);
    QQ.exports = function QQ(WQ, XQ, TQ, zQ, sQ) {
      var FQ = -1,
        PQ = WQ.length;
      for (TQ || (TQ = qQ), sQ || (sQ = []); ++FQ < PQ;) {
        var gQ = WQ[FQ];
        XQ > 0 && TQ(gQ) ? XQ > 1 ? QQ(gQ, XQ - 1, TQ, zQ, sQ) : wQ(sQ, gQ) : zQ || (sQ[sQ.length] = gQ)
      }
      return sQ
    }
  },
  6249: (QQ, WQ, XQ) => {
    var wQ = XQ(6252)();
    QQ.exports = wQ
  },
  6240: (QQ, WQ, XQ) => {
    var wQ = XQ(6249),
      qQ = XQ(6062);
    QQ.exports = function(QQ, WQ) {
      return QQ && wQ(QQ, WQ, qQ)
    }
  },
  5548: (QQ, WQ, XQ) => {
    var wQ = XQ(5555),
      qQ = XQ(5762);
    QQ.exports = function(QQ, WQ) {
      for (var XQ = 0, TQ = (WQ = wQ(WQ, QQ)).length; null != QQ && XQ < TQ;) QQ = QQ[qQ(WQ[XQ++])];
      return XQ && XQ == TQ ? QQ : void 0
    }
  },
  6047: (QQ, WQ, XQ) => {
    var wQ = XQ(5875),
      qQ = XQ(5529);
    QQ.exports = function(QQ, WQ, XQ) {
      var TQ = WQ(QQ);
      return qQ(QQ) ? TQ : wQ(TQ, XQ(QQ))
    }
  },
  5492: (QQ, WQ, XQ) => {
    var wQ = XQ(5501),
      qQ = XQ(5506),
      TQ = XQ(5515),
      zQ = wQ ? wQ.toStringTag : void 0;
    QQ.exports = function(QQ) {
      return null == QQ ? void 0 === QQ ? "[object Undefined]" : "[object Null]" : zQ && zQ in Object(QQ) ? qQ(QQ) : TQ(QQ)
    }
  },
  6564: QQ => {
    QQ.exports = function(QQ, WQ) {
      return QQ > WQ
    }
  },
  6188: QQ => {
    QQ.exports = function(QQ, WQ) {
      return null != QQ && WQ in Object(QQ)
    }
  },
  6380: (QQ, WQ, XQ) => {
    var wQ = XQ(6385),
      qQ = XQ(6391),
      TQ = XQ(6400);
    QQ.exports = function(QQ, WQ, XQ) {
      return WQ === WQ ? TQ(QQ, WQ, XQ) : wQ(QQ, qQ, XQ)
    }
  },
  5888: (QQ, WQ, XQ) => {
    var wQ = XQ(5492),
      qQ = XQ(5517);
    QQ.exports = function(QQ) {
      return qQ(QQ) && "[object Arguments]" == wQ(QQ)
    }
  },
  5958: (QQ, WQ, XQ) => {
    var wQ = XQ(5965),
      qQ = XQ(5517);
    QQ.exports = function QQ(WQ, XQ, TQ, zQ, sQ) {
      return WQ === XQ || (null == WQ || null == XQ || !qQ(WQ) && !qQ(XQ) ? WQ !== WQ && XQ !== XQ : wQ(WQ, XQ, TQ, zQ, QQ, sQ))
    }
  },
  5965: (QQ, WQ, XQ) => {
    var wQ = XQ(5918),
      qQ = XQ(5971),
      TQ = XQ(6005),
      zQ = XQ(6036),
      sQ = XQ(6127),
      FQ = XQ(5529),
      PQ = XQ(6075),
      gQ = XQ(6085),
      JQ = "[object Arguments]",
      rQ = "[object Array]",
      IQ = "[object Object]",
      jQ = Object.prototype.hasOwnProperty;
    QQ.exports = function(QQ, WQ, XQ, BQ, yQ, VQ) {
      var DQ = FQ(QQ),
        pQ = FQ(WQ),
        GQ = DQ ? rQ : sQ(QQ),
        UQ = pQ ? rQ : sQ(WQ),
        bQ = (GQ = GQ == JQ ? IQ : GQ) == IQ,
        vQ = (UQ = UQ == JQ ? IQ : UQ) == IQ,
        dQ = GQ == UQ;
      if (dQ && PQ(QQ)) {
        if (!PQ(WQ)) return !1;
        DQ = !0, bQ = !1
      }
      if (dQ && !bQ) return VQ || (VQ = new wQ), DQ || gQ(QQ) ? qQ(QQ, WQ, XQ, BQ, yQ, VQ) : TQ(QQ, WQ, GQ, XQ, BQ, yQ, VQ);
      if (!(1 & XQ)) {
        var HQ = bQ && jQ.call(QQ, "__wrapped__"),
          aQ = vQ && jQ.call(WQ, "__wrapped__");
        if (HQ || aQ) {
          var lQ = HQ ? QQ.value() : QQ,
            hQ = aQ ? WQ.value() : WQ;
          return VQ || (VQ = new wQ), yQ(lQ, hQ, XQ, BQ, VQ)
        }
      }
      return !!dQ && (VQ || (VQ = new wQ), zQ(QQ, WQ, XQ, BQ, yQ, VQ))
    }
  },
  5914: (QQ, WQ, XQ) => {
    var wQ = XQ(5918),
      qQ = XQ(5958);
    QQ.exports = function(QQ, WQ, XQ, TQ) {
      var zQ = XQ.length,
        sQ = zQ,
        FQ = !TQ;
      if (null == QQ) return !sQ;
      for (QQ = Object(QQ); zQ--;) {
        var PQ = XQ[zQ];
        if (FQ && PQ[2] ? PQ[1] !== QQ[PQ[0]] : !(PQ[0] in QQ)) return !1
      }
      for (; ++zQ < sQ;) {
        var gQ = (PQ = XQ[zQ])[0],
          JQ = QQ[gQ],
          rQ = PQ[1];
        if (FQ && PQ[2]) {
          if (void 0 === JQ && !(gQ in QQ)) return !1
        } else {
          var IQ = new wQ;
          if (TQ) var jQ = TQ(JQ, rQ, gQ, QQ, WQ, IQ);
          if (!(void 0 === jQ ? qQ(rQ, JQ, 3, TQ, IQ) : jQ)) return !1
        }
      }
      return !0
    }
  },
  6391: QQ => {
    QQ.exports = function(QQ) {
      return QQ !== QQ
    }
  },
  5616: (QQ, WQ, XQ) => {
    var wQ = XQ(5622),
      qQ = XQ(5626),
      TQ = XQ(5441),
      zQ = XQ(5638),
      sQ = /^\[object .+?Constructor\]$/,
      FQ = Function.prototype,
      PQ = Object.prototype,
      gQ = FQ.toString,
      JQ = PQ.hasOwnProperty,
      rQ = RegExp("^" + gQ.call(JQ).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    QQ.exports = function(QQ) {
      return !(!TQ(QQ) || qQ(QQ)) && (wQ(QQ) ? rQ : sQ).test(zQ(QQ))
    }
  },
  6094: (QQ, WQ, XQ) => {
    var wQ = XQ(5492),
      qQ = XQ(5839),
      TQ = XQ(5517),
      zQ = {};
    zQ["[object Float32Array]"] = zQ["[object Float64Array]"] = zQ["[object Int8Array]"] = zQ["[object Int16Array]"] = zQ["[object Int32Array]"] = zQ["[object Uint8Array]"] = zQ["[object Uint8ClampedArray]"] = zQ["[object Uint16Array]"] = zQ["[object Uint32Array]"] = !0, zQ["[object Arguments]"] = zQ["[object Array]"] = zQ["[object ArrayBuffer]"] = zQ["[object Boolean]"] = zQ["[object DataView]"] = zQ["[object Date]"] = zQ["[object Error]"] = zQ["[object Function]"] = zQ["[object Map]"] = zQ["[object Number]"] = zQ["[object Object]"] = zQ["[object RegExp]"] = zQ["[object Set]"] = zQ["[object String]"] = zQ["[object WeakMap]"] = !1, QQ.exports = function(QQ) {
      return TQ(QQ) && qQ(QQ.length) && !!zQ[wQ(QQ)]
    }
  },
  5902: (QQ, WQ, XQ) => {
    var wQ = XQ(5909),
      qQ = XQ(6176),
      TQ = XQ(6200),
      zQ = XQ(5529),
      sQ = XQ(6209);
    QQ.exports = function(QQ) {
      return "function" == typeof QQ ? QQ : null == QQ ? TQ : "object" == typeof QQ ? zQ(QQ) ? qQ(QQ[0], QQ[1]) : wQ(QQ) : sQ(QQ)
    }
  },
  6113: (QQ, WQ, XQ) => {
    var wQ = XQ(6116),
      qQ = XQ(6118),
      TQ = Object.prototype.hasOwnProperty;
    QQ.exports = function(QQ) {
      if (!wQ(QQ)) return qQ(QQ);
      var WQ = [];
      for (var XQ in Object(QQ)) TQ.call(QQ, XQ) && "constructor" != XQ && WQ.push(XQ);
      return WQ
    }
  },
  6576: QQ => {
    QQ.exports = function(QQ, WQ) {
      return QQ < WQ
    }
  },
  6224: (QQ, WQ, XQ) => {
    var wQ = XQ(6231),
      qQ = XQ(5836);
    QQ.exports = function(QQ, WQ) {
      var XQ = -1,
        TQ = qQ(QQ) ? Array(QQ.length) : [];
      return wQ(QQ, (function(QQ, wQ, qQ) {
        TQ[++XQ] = WQ(QQ, wQ, qQ)
      })), TQ
    }
  },
  5909: (QQ, WQ, XQ) => {
    var wQ = XQ(5914),
      qQ = XQ(6153),
      TQ = XQ(6169);
    QQ.exports = function(QQ) {
      var WQ = qQ(QQ);
      return 1 == WQ.length && WQ[0][2] ? TQ(WQ[0][0], WQ[0][1]) : function(XQ) {
        return XQ === QQ || wQ(XQ, QQ, WQ)
      }
    }
  },
  6176: (QQ, WQ, XQ) => {
    var wQ = XQ(5958),
      qQ = XQ(5545),
      TQ = XQ(6185),
      zQ = XQ(5559),
      sQ = XQ(6162),
      FQ = XQ(6169),
      PQ = XQ(5762);
    QQ.exports = function(QQ, WQ) {
      return zQ(QQ) && sQ(WQ) ? FQ(PQ(QQ), WQ) : function(XQ) {
        var zQ = qQ(XQ, QQ);
        return void 0 === zQ && zQ === WQ ? TQ(XQ, QQ) : wQ(WQ, zQ, 3)
      }
    }
  },
  5896: (QQ, WQ, XQ) => {
    var wQ = XQ(5756),
      qQ = XQ(5548),
      TQ = XQ(5902),
      zQ = XQ(6224),
      sQ = XQ(6262),
      FQ = XQ(6102),
      PQ = XQ(6270),
      gQ = XQ(6200),
      JQ = XQ(5529);
    QQ.exports = function(QQ, WQ, XQ) {
      WQ = WQ.length ? wQ(WQ, (function(QQ) {
        return JQ(QQ) ? function(WQ) {
          return qQ(WQ, 1 === QQ.length ? QQ[0] : QQ)
        } : QQ
      })) : [gQ];
      var rQ = -1;
      WQ = wQ(WQ, FQ(TQ));
      var IQ = zQ(QQ, (function(QQ, XQ, qQ) {
        return {
          criteria: wQ(WQ, (function(WQ) {
            return WQ(QQ)
          })),
          index: ++rQ,
          value: QQ
        }
      }));
      return sQ(IQ, (function(QQ, WQ) {
        return PQ(QQ, WQ, XQ)
      }))
    }
  },
  6217: QQ => {
    QQ.exports = function(QQ) {
      return function(WQ) {
        return null == WQ ? void 0 : WQ[QQ]
      }
    }
  },
  6219: (QQ, WQ, XQ) => {
    var wQ = XQ(5548);
    QQ.exports = function(QQ) {
      return function(WQ) {
        return wQ(WQ, QQ)
      }
    }
  },
  5828: QQ => {
    var WQ = Math.ceil,
      XQ = Math.max;
    QQ.exports = function(QQ, wQ, qQ, TQ) {
      for (var zQ = -1, sQ = XQ(WQ((wQ - QQ) / (qQ || 1)), 0), FQ = Array(sQ); sQ--;) FQ[TQ ? sQ : ++zQ] = QQ, QQ += qQ;
      return FQ
    }
  },
  6284: (QQ, WQ, XQ) => {
    var wQ = XQ(6200),
      qQ = XQ(6289),
      TQ = XQ(6301);
    QQ.exports = function(QQ, WQ) {
      return TQ(qQ(QQ, WQ, wQ), QQ + "")
    }
  },
  6305: (QQ, WQ, XQ) => {
    var wQ = XQ(6309),
      qQ = XQ(6318),
      TQ = XQ(6200),
      zQ = qQ ? function(QQ, WQ) {
        return qQ(QQ, "toString", {
          configurable: !0,
          enumerable: !1,
          value: wQ(WQ),
          writable: !0
        })
      } : TQ;
    QQ.exports = zQ
  },
  6451: QQ => {
    QQ.exports = function(QQ, WQ, XQ) {
      var wQ = -1,
        qQ = QQ.length;
      WQ < 0 && (WQ = -WQ > qQ ? 0 : qQ + WQ), (XQ = XQ > qQ ? qQ : XQ) < 0 && (XQ += qQ), qQ = WQ > XQ ? 0 : XQ - WQ >>> 0, WQ >>>= 0;
      for (var TQ = Array(qQ); ++wQ < qQ;) TQ[wQ] = QQ[wQ + WQ];
      return TQ
    }
  },
  6718: (QQ, WQ, XQ) => {
    var wQ = XQ(6231);
    QQ.exports = function(QQ, WQ) {
      var XQ;
      return wQ(QQ, (function(QQ, wQ, qQ) {
        return !(XQ = WQ(QQ, wQ, qQ))
      })), !!XQ
    }
  },
  6262: QQ => {
    QQ.exports = function(QQ, WQ) {
      var XQ = QQ.length;
      for (QQ.sort(WQ); XQ--;) QQ[XQ] = QQ[XQ].value;
      return QQ
    }
  },
  6071: QQ => {
    QQ.exports = function(QQ, WQ) {
      for (var XQ = -1, wQ = Array(QQ); ++XQ < QQ;) wQ[XQ] = WQ(XQ);
      return wQ
    }
  },
  5747: (QQ, WQ, XQ) => {
    var wQ = XQ(5501),
      qQ = XQ(5756),
      TQ = XQ(5529),
      zQ = XQ(5484),
      sQ = wQ ? wQ.prototype : void 0,
      FQ = sQ ? sQ.toString : void 0;
    QQ.exports = function QQ(WQ) {
      if ("string" == typeof WQ) return WQ;
      if (TQ(WQ)) return qQ(WQ, QQ) + "";
      if (zQ(WQ)) return FQ ? FQ.call(WQ) : "";
      var XQ = WQ + "";
      return "0" == XQ && 1 / WQ == -1 / 0 ? "-0" : XQ
    }
  },
  5473: (QQ, WQ, XQ) => {
    var wQ = XQ(5478),
      qQ = /^\s+/;
    QQ.exports = function(QQ) {
      return QQ ? QQ.slice(0, wQ(QQ) + 1).replace(qQ, "") : QQ
    }
  },
  6102: QQ => {
    QQ.exports = function(QQ) {
      return function(WQ) {
        return QQ(WQ)
      }
    }
  },
  6368: (QQ, WQ, XQ) => {
    var wQ = XQ(5976),
      qQ = XQ(6371),
      TQ = XQ(6409),
      zQ = XQ(6003),
      sQ = XQ(6418),
      FQ = XQ(6030);
    QQ.exports = function(QQ, WQ, XQ) {
      var PQ = -1,
        gQ = qQ,
        JQ = QQ.length,
        rQ = !0,
        IQ = [],
        jQ = IQ;
      if (XQ) rQ = !1, gQ = TQ;
      else if (JQ >= 200) {
        var BQ = WQ ? null : sQ(QQ);
        if (BQ) return FQ(BQ);
        rQ = !1, gQ = zQ, jQ = new wQ
      } else jQ = WQ ? [] : IQ;
      QQ: for (; ++PQ < JQ;) {
        var yQ = QQ[PQ],
          VQ = WQ ? WQ(yQ) : yQ;
        if (yQ = XQ || 0 !== yQ ? yQ : 0, rQ && VQ === VQ) {
          for (var DQ = jQ.length; DQ--;)
            if (jQ[DQ] === VQ) continue QQ;
          WQ && jQ.push(VQ), IQ.push(yQ)
        } else gQ(jQ, VQ, XQ) || (jQ !== IQ && jQ.push(VQ), IQ.push(yQ))
      }
      return IQ
    }
  },
  6003: QQ => {
    QQ.exports = function(QQ, WQ) {
      return QQ.has(WQ)
    }
  },
  5555: (QQ, WQ, XQ) => {
    var wQ = XQ(5529),
      qQ = XQ(5559),
      TQ = XQ(5567),
      zQ = XQ(5739);
    QQ.exports = function(QQ, WQ) {
      return wQ(QQ) ? QQ : qQ(QQ, WQ) ? [QQ] : TQ(zQ(QQ))
    }
  },
  6448: (QQ, WQ, XQ) => {
    var wQ = XQ(6451);
    QQ.exports = function(QQ, WQ, XQ) {
      var qQ = QQ.length;
      return XQ = void 0 === XQ ? qQ : XQ, !WQ && XQ >= qQ ? QQ : wQ(QQ, WQ, XQ)
    }
  },
  6277: (QQ, WQ, XQ) => {
    var wQ = XQ(5484);
    QQ.exports = function(QQ, WQ) {
      if (QQ !== WQ) {
        var XQ = void 0 !== QQ,
          qQ = null === QQ,
          TQ = QQ === QQ,
          zQ = wQ(QQ),
          sQ = void 0 !== WQ,
          FQ = null === WQ,
          PQ = WQ === WQ,
          gQ = wQ(WQ);
        if (!FQ && !gQ && !zQ && QQ > WQ || zQ && sQ && PQ && !FQ && !gQ || qQ && sQ && PQ || !XQ && PQ || !TQ) return 1;
        if (!qQ && !zQ && !gQ && QQ < WQ || gQ && XQ && TQ && !qQ && !zQ || FQ && XQ && TQ || !sQ && TQ || !PQ) return -1
      }
      return 0
    }
  },
  6270: (QQ, WQ, XQ) => {
    var wQ = XQ(6277);
    QQ.exports = function(QQ, WQ, XQ) {
      for (var qQ = -1, TQ = QQ.criteria, zQ = WQ.criteria, sQ = TQ.length, FQ = XQ.length; ++qQ < sQ;) {
        var PQ = wQ(TQ[qQ], zQ[qQ]);
        if (PQ) return qQ >= FQ ? PQ : PQ * ("desc" == XQ[qQ] ? -1 : 1)
      }
      return QQ.index - WQ.index
    }
  },
  5630: (QQ, WQ, XQ) => {
    var wQ = XQ(5455)["__core-js_shared__"];
    QQ.exports = wQ
  },
  6257: (QQ, WQ, XQ) => {
    var wQ = XQ(5836);
    QQ.exports = function(QQ, WQ) {
      return function(XQ, qQ) {
        if (null == XQ) return XQ;
        if (!wQ(XQ)) return QQ(XQ, qQ);
        for (var TQ = XQ.length, zQ = WQ ? TQ : -1, sQ = Object(XQ);
          (WQ ? zQ-- : ++zQ < TQ) && !1 !== qQ(sQ[zQ], zQ, sQ););
        return XQ
      }
    }
  },
  6252: QQ => {
    QQ.exports = function(QQ) {
      return function(WQ, XQ, wQ) {
        for (var qQ = -1, TQ = Object(WQ), zQ = wQ(WQ), sQ = zQ.length; sQ--;) {
          var FQ = zQ[QQ ? sQ : ++qQ];
          if (!1 === XQ(TQ[FQ], FQ, TQ)) break
        }
        return WQ
      }
    }
  },
  6440: (QQ, WQ, XQ) => {
    var wQ = XQ(6448),
      qQ = XQ(6460),
      TQ = XQ(6469),
      zQ = XQ(5739);
    QQ.exports = function(QQ) {
      return function(WQ) {
        WQ = zQ(WQ);
        var XQ = qQ(WQ) ? TQ(WQ) : void 0,
          sQ = XQ ? XQ[0] : WQ.charAt(0),
          FQ = XQ ? wQ(XQ, 1).join("") : WQ.slice(1);
        return sQ[QQ]() + FQ
      }
    }
  },
  6739: (QQ, WQ, XQ) => {
    var wQ = XQ(5902),
      qQ = XQ(5836),
      TQ = XQ(6062);
    QQ.exports = function(QQ) {
      return function(WQ, XQ, zQ) {
        var sQ = Object(WQ);
        if (!qQ(WQ)) {
          var FQ = wQ(XQ, 3);
          WQ = TQ(WQ), XQ = function(QQ) {
            return FQ(sQ[QQ], QQ, sQ)
          }
        }
        var PQ = QQ(WQ, XQ, zQ);
        return PQ > -1 ? sQ[FQ ? WQ[PQ] : PQ] : void 0
      }
    }
  },
  5825: (QQ, WQ, XQ) => {
    var wQ = XQ(5828),
      qQ = XQ(5830),
      TQ = XQ(5857);
    QQ.exports = function(QQ) {
      return function(WQ, XQ, zQ) {
        return zQ && "number" != typeof zQ && qQ(WQ, XQ, zQ) && (XQ = zQ = void 0), WQ = TQ(WQ), void 0 === XQ ? (XQ = WQ, WQ = 0) : XQ = TQ(XQ), zQ = void 0 === zQ ? WQ < XQ ? 1 : -1 : TQ(zQ), wQ(WQ, XQ, zQ, QQ)
      }
    }
  },
  6418: (QQ, WQ, XQ) => {
    var wQ = XQ(6143),
      qQ = XQ(6423),
      TQ = XQ(6030),
      zQ = wQ && 1 / TQ(new wQ([, -0]))[1] == 1 / 0 ? function(QQ) {
        return new wQ(QQ)
      } : qQ;
    QQ.exports = zQ
  },
  6318: (QQ, WQ, XQ) => {
    var wQ = XQ(5609),
      qQ = function() {
        try {
          var QQ = wQ(Object, "defineProperty");
          return QQ({}, "", {}), QQ
        } catch (WQ) {}
      }();
    QQ.exports = qQ
  },
  5971: (QQ, WQ, XQ) => {
    var wQ = XQ(5976),
      qQ = XQ(5998),
      TQ = XQ(6003);
    QQ.exports = function(QQ, WQ, XQ, zQ, sQ, FQ) {
      var PQ = 1 & XQ,
        gQ = QQ.length,
        JQ = WQ.length;
      if (gQ != JQ && !(PQ && JQ > gQ)) return !1;
      var rQ = FQ.get(QQ),
        IQ = FQ.get(WQ);
      if (rQ && IQ) return rQ == WQ && IQ == QQ;
      var jQ = -1,
        BQ = !0,
        yQ = 2 & XQ ? new wQ : void 0;
      for (FQ.set(QQ, WQ), FQ.set(WQ, QQ); ++jQ < gQ;) {
        var VQ = QQ[jQ],
          DQ = WQ[jQ];
        if (zQ) var pQ = PQ ? zQ(DQ, VQ, jQ, WQ, QQ, FQ) : zQ(VQ, DQ, jQ, QQ, WQ, FQ);
        if (void 0 !== pQ) {
          if (pQ) continue;
          BQ = !1;
          break
        }
        if (yQ) {
          if (!qQ(WQ, (function(QQ, WQ) {
              if (!TQ(yQ, WQ) && (VQ === QQ || sQ(VQ, QQ, XQ, zQ, FQ))) return yQ.push(WQ)
            }))) {
            BQ = !1;
            break
          }
        } else if (VQ !== DQ && !sQ(VQ, DQ, XQ, zQ, FQ)) {
          BQ = !1;
          break
        }
      }
      return FQ.delete(QQ), FQ.delete(WQ), BQ
    }
  },
  6005: (QQ, WQ, XQ) => {
    var wQ = XQ(5501),
      qQ = XQ(6012),
      TQ = XQ(5683),
      zQ = XQ(5971),
      sQ = XQ(6021),
      FQ = XQ(6030),
      PQ = wQ ? wQ.prototype : void 0,
      gQ = PQ ? PQ.valueOf : void 0;
    QQ.exports = function(QQ, WQ, XQ, wQ, PQ, JQ, rQ) {
      switch (XQ) {
        case "[object DataView]":
          if (QQ.byteLength != WQ.byteLength || QQ.byteOffset != WQ.byteOffset) return !1;
          QQ = QQ.buffer, WQ = WQ.buffer;
        case "[object ArrayBuffer]":
          return !(QQ.byteLength != WQ.byteLength || !JQ(new qQ(QQ), new qQ(WQ)));
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
          return TQ(+QQ, +WQ);
        case "[object Error]":
          return QQ.name == WQ.name && QQ.message == WQ.message;
        case "[object RegExp]":
        case "[object String]":
          return QQ == WQ + "";
        case "[object Map]":
          var IQ = sQ;
        case "[object Set]":
          var jQ = 1 & wQ;
          if (IQ || (IQ = FQ), QQ.size != WQ.size && !jQ) return !1;
          var BQ = rQ.get(QQ);
          if (BQ) return BQ == WQ;
          wQ |= 2, rQ.set(QQ, WQ);
          var yQ = zQ(IQ(QQ), IQ(WQ), wQ, PQ, JQ, rQ);
          return rQ.delete(QQ), yQ;
        case "[object Symbol]":
          if (gQ) return gQ.call(QQ) == gQ.call(WQ)
      }
      return !1
    }
  },
  6036: (QQ, WQ, XQ) => {
    var wQ = XQ(6041),
      qQ = Object.prototype.hasOwnProperty;
    QQ.exports = function(QQ, WQ, XQ, TQ, zQ, sQ) {
      var FQ = 1 & XQ,
        PQ = wQ(QQ),
        gQ = PQ.length;
      if (gQ != wQ(WQ).length && !FQ) return !1;
      for (var JQ = gQ; JQ--;) {
        var rQ = PQ[JQ];
        if (!(FQ ? rQ in WQ : qQ.call(WQ, rQ))) return !1
      }
      var IQ = sQ.get(QQ),
        jQ = sQ.get(WQ);
      if (IQ && jQ) return IQ == WQ && jQ == QQ;
      var BQ = !0;
      sQ.set(QQ, WQ), sQ.set(WQ, QQ);
      for (var yQ = FQ; ++JQ < gQ;) {
        var VQ = QQ[rQ = PQ[JQ]],
          DQ = WQ[rQ];
        if (TQ) var pQ = FQ ? TQ(DQ, VQ, rQ, WQ, QQ, sQ) : TQ(VQ, DQ, rQ, QQ, WQ, sQ);
        if (!(void 0 === pQ ? VQ === DQ || zQ(VQ, DQ, XQ, TQ, sQ) : pQ)) {
          BQ = !1;
          break
        }
        yQ || (yQ = "constructor" == rQ)
      }
      if (BQ && !yQ) {
        var GQ = QQ.constructor,
          UQ = WQ.constructor;
        GQ == UQ || !("constructor" in QQ) || !("constructor" in WQ) || "function" == typeof GQ && GQ instanceof GQ && "function" == typeof UQ && UQ instanceof UQ || (BQ = !1)
      }
      return sQ.delete(QQ), sQ.delete(WQ), BQ
    }
  },
  5457: (QQ, WQ, XQ) => {
    var wQ = "object" == typeof XQ.g && XQ.g && XQ.g.Object === Object && XQ.g;
    QQ.exports = wQ
  },
  6041: (QQ, WQ, XQ) => {
    var wQ = XQ(6047),
      qQ = XQ(6050),
      TQ = XQ(6062);
    QQ.exports = function(QQ) {
      return wQ(QQ, TQ, qQ)
    }
  },
  5711: (QQ, WQ, XQ) => {
    var wQ = XQ(5713);
    QQ.exports = function(QQ, WQ) {
      var XQ = QQ.__data__;
      return wQ(WQ) ? XQ["string" == typeof WQ ? "string" : "hash"] : XQ.map
    }
  },
  6153: (QQ, WQ, XQ) => {
    var wQ = XQ(6162),
      qQ = XQ(6062);
    QQ.exports = function(QQ) {
      for (var WQ = qQ(QQ), XQ = WQ.length; XQ--;) {
        var TQ = WQ[XQ],
          zQ = QQ[TQ];
        WQ[XQ] = [TQ, zQ, wQ(zQ)]
      }
      return WQ
    }
  },
  5609: (QQ, WQ, XQ) => {
    var wQ = XQ(5616),
      qQ = XQ(5640);
    QQ.exports = function(QQ, WQ) {
      var XQ = qQ(QQ, WQ);
      return wQ(XQ) ? XQ : void 0
    }
  },
  6700: (QQ, WQ, XQ) => {
    var wQ = XQ(6124)(Object.getPrototypeOf, Object);
    QQ.exports = wQ
  },
  5506: (QQ, WQ, XQ) => {
    var wQ = XQ(5501),
      qQ = Object.prototype,
      TQ = qQ.hasOwnProperty,
      zQ = qQ.toString,
      sQ = wQ ? wQ.toStringTag : void 0;
    QQ.exports = function(QQ) {
      var WQ = TQ.call(QQ, sQ),
        XQ = QQ[sQ];
      try {
        QQ[sQ] = void 0;
        var wQ = !0
      } catch (FQ) {}
      var qQ = zQ.call(QQ);
      return wQ && (WQ ? QQ[sQ] = XQ : delete QQ[sQ]), qQ
    }
  },
  6050: (QQ, WQ, XQ) => {
    var wQ = XQ(6053),
      qQ = XQ(6057),
      TQ = Object.prototype.propertyIsEnumerable,
      zQ = Object.getOwnPropertySymbols,
      sQ = zQ ? function(QQ) {
        return null == QQ ? [] : (QQ = Object(QQ), wQ(zQ(QQ), (function(WQ) {
          return TQ.call(QQ, WQ)
        })))
      } : qQ;
    QQ.exports = sQ
  },
  6127: (QQ, WQ, XQ) => {
    var wQ = XQ(6133),
      qQ = XQ(5698),
      TQ = XQ(6137),
      zQ = XQ(6143),
      sQ = XQ(6149),
      FQ = XQ(5492),
      PQ = XQ(5638),
      gQ = "[object Map]",
      JQ = "[object Promise]",
      rQ = "[object Set]",
      IQ = "[object WeakMap]",
      jQ = "[object DataView]",
      BQ = PQ(wQ),
      yQ = PQ(qQ),
      VQ = PQ(TQ),
      DQ = PQ(zQ),
      pQ = PQ(sQ),
      GQ = FQ;
    (wQ && GQ(new wQ(new ArrayBuffer(1))) != jQ || qQ && GQ(new qQ) != gQ || TQ && GQ(TQ.resolve()) != JQ || zQ && GQ(new zQ) != rQ || sQ && GQ(new sQ) != IQ) && (GQ = function(QQ) {
      var WQ = FQ(QQ),
        XQ = "[object Object]" == WQ ? QQ.constructor : void 0,
        wQ = XQ ? PQ(XQ) : "";
      if (wQ) switch (wQ) {
        case BQ:
          return jQ;
        case yQ:
          return gQ;
        case VQ:
          return JQ;
        case DQ:
          return rQ;
        case pQ:
          return IQ
      }
      return WQ
    }), QQ.exports = GQ
  },
  5640: QQ => {
    QQ.exports = function(QQ, WQ) {
      return null == QQ ? void 0 : QQ[WQ]
    }
  },
  6194: (QQ, WQ, XQ) => {
    var wQ = XQ(5555),
      qQ = XQ(5885),
      TQ = XQ(5529),
      zQ = XQ(5848),
      sQ = XQ(5839),
      FQ = XQ(5762);
    QQ.exports = function(QQ, WQ, XQ) {
      for (var PQ = -1, gQ = (WQ = wQ(WQ, QQ)).length, JQ = !1; ++PQ < gQ;) {
        var rQ = FQ(WQ[PQ]);
        if (!(JQ = null != QQ && XQ(QQ, rQ))) break;
        QQ = QQ[rQ]
      }
      return JQ || ++PQ != gQ ? JQ : !!(gQ = null == QQ ? 0 : QQ.length) && sQ(gQ) && zQ(rQ, gQ) && (TQ(QQ) || qQ(QQ))
    }
  },
  6460: QQ => {
    var WQ = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    QQ.exports = function(QQ) {
      return WQ.test(QQ)
    }
  },
  5597: (QQ, WQ, XQ) => {
    var wQ = XQ(5606);
    QQ.exports = function() {
      this.__data__ = wQ ? wQ(null) : {}, this.size = 0
    }
  },
  5649: QQ => {
    QQ.exports = function(QQ) {
      var WQ = this.has(QQ) && delete this.__data__[QQ];
      return this.size -= WQ ? 1 : 0, WQ
    }
  },
  5658: (QQ, WQ, XQ) => {
    var wQ = XQ(5606),
      qQ = Object.prototype.hasOwnProperty;
    QQ.exports = function(QQ) {
      var WQ = this.__data__;
      if (wQ) {
        var XQ = WQ[QQ];
        return "__lodash_hash_undefined__" === XQ ? void 0 : XQ
      }
      return qQ.call(WQ, QQ) ? WQ[QQ] : void 0
    }
  },
  5660: (QQ, WQ, XQ) => {
    var wQ = XQ(5606),
      qQ = Object.prototype.hasOwnProperty;
    QQ.exports = function(QQ) {
      var WQ = this.__data__;
      return wQ ? void 0 !== WQ[QQ] : qQ.call(WQ, QQ)
    }
  },
  5662: (QQ, WQ, XQ) => {
    var wQ = XQ(5606);
    QQ.exports = function(QQ, WQ) {
      var XQ = this.__data__;
      return this.size += this.has(QQ) ? 0 : 1, XQ[QQ] = wQ && void 0 === WQ ? "__lodash_hash_undefined__" : WQ, this
    }
  },
  5878: (QQ, WQ, XQ) => {
    var wQ = XQ(5501),
      qQ = XQ(5885),
      TQ = XQ(5529),
      zQ = wQ ? wQ.isConcatSpreadable : void 0;
    QQ.exports = function(QQ) {
      return TQ(QQ) || qQ(QQ) || !!(zQ && QQ && QQ[zQ])
    }
  },
  5848: QQ => {
    var WQ = /^(?:0|[1-9]\d*)$/;
    QQ.exports = function(QQ, XQ) {
      var wQ = typeof QQ;
      return !!(XQ = null == XQ ? 9007199254740991 : XQ) && ("number" == wQ || "symbol" != wQ && WQ.test(QQ)) && QQ > -1 && QQ % 1 == 0 && QQ < XQ
    }
  },
  5830: (QQ, WQ, XQ) => {
    var wQ = XQ(5683),
      qQ = XQ(5836),
      TQ = XQ(5848),
      zQ = XQ(5441);
    QQ.exports = function(QQ, WQ, XQ) {
      if (!zQ(XQ)) return !1;
      var sQ = typeof WQ;
      return !!("number" == sQ ? qQ(XQ) && TQ(WQ, XQ.length) : "string" == sQ && WQ in XQ) && wQ(XQ[WQ], QQ)
    }
  },
  5559: (QQ, WQ, XQ) => {
    var wQ = XQ(5529),
      qQ = XQ(5484),
      TQ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      zQ = /^\w*$/;
    QQ.exports = function(QQ, WQ) {
      if (wQ(QQ)) return !1;
      var XQ = typeof QQ;
      return !("number" != XQ && "symbol" != XQ && "boolean" != XQ && null != QQ && !qQ(QQ)) || (zQ.test(QQ) || !TQ.test(QQ) || null != WQ && QQ in Object(WQ))
    }
  },
  5713: QQ => {
    QQ.exports = function(QQ) {
      var WQ = typeof QQ;
      return "string" == WQ || "number" == WQ || "symbol" == WQ || "boolean" == WQ ? "__proto__" !== QQ : null === QQ
    }
  },
  5626: (QQ, WQ, XQ) => {
    var wQ = XQ(5630),
      qQ = function() {
        var QQ = /[^.]+$/.exec(wQ && wQ.keys && wQ.keys.IE_PROTO || "");
        return QQ ? "Symbol(src)_1." + QQ : ""
      }();
    QQ.exports = function(QQ) {
      return !!qQ && qQ in QQ
    }
  },
  6116: QQ => {
    var WQ = Object.prototype;
    QQ.exports = function(QQ) {
      var XQ = QQ && QQ.constructor;
      return QQ === ("function" == typeof XQ && XQ.prototype || WQ)
    }
  },
  6162: (QQ, WQ, XQ) => {
    var wQ = XQ(5441);
    QQ.exports = function(QQ) {
      return QQ === QQ && !wQ(QQ)
    }
  },
  5672: QQ => {
    QQ.exports = function() {
      this.__data__ = [], this.size = 0
    }
  },
  5675: (QQ, WQ, XQ) => {
    var wQ = XQ(5681),
      qQ = Array.prototype.splice;
    QQ.exports = function(QQ) {
      var WQ = this.__data__,
        XQ = wQ(WQ, QQ);
      return !(XQ < 0) && (XQ == WQ.length - 1 ? WQ.pop() : qQ.call(WQ, XQ, 1), --this.size, !0)
    }
  },
  5685: (QQ, WQ, XQ) => {
    var wQ = XQ(5681);
    QQ.exports = function(QQ) {
      var WQ = this.__data__,
        XQ = wQ(WQ, QQ);
      return XQ < 0 ? void 0 : WQ[XQ][1]
    }
  },
  5689: (QQ, WQ, XQ) => {
    var wQ = XQ(5681);
    QQ.exports = function(QQ) {
      return wQ(this.__data__, QQ) > -1
    }
  },
  5691: (QQ, WQ, XQ) => {
    var wQ = XQ(5681);
    QQ.exports = function(QQ, WQ) {
      var XQ = this.__data__,
        qQ = wQ(XQ, QQ);
      return qQ < 0 ? (++this.size, XQ.push([QQ, WQ])) : XQ[qQ][1] = WQ, this
    }
  },
  5590: (QQ, WQ, XQ) => {
    var wQ = XQ(5593),
      qQ = XQ(5666),
      TQ = XQ(5698);
    QQ.exports = function() {
      this.size = 0, this.__data__ = {
        hash: new wQ,
        map: new(TQ || qQ),
        string: new wQ
      }
    }
  },
  5707: (QQ, WQ, XQ) => {
    var wQ = XQ(5711);
    QQ.exports = function(QQ) {
      var WQ = wQ(this, QQ).delete(QQ);
      return this.size -= WQ ? 1 : 0, WQ
    }
  },
  5721: (QQ, WQ, XQ) => {
    var wQ = XQ(5711);
    QQ.exports = function(QQ) {
      return wQ(this, QQ).get(QQ)
    }
  },
  5727: (QQ, WQ, XQ) => {
    var wQ = XQ(5711);
    QQ.exports = function(QQ) {
      return wQ(this, QQ).has(QQ)
    }
  },
  5736: (QQ, WQ, XQ) => {
    var wQ = XQ(5711);
    QQ.exports = function(QQ, WQ) {
      var XQ = wQ(this, QQ),
        qQ = XQ.size;
      return XQ.set(QQ, WQ), this.size += XQ.size == qQ ? 0 : 1, this
    }
  },
  6021: QQ => {
    QQ.exports = function(QQ) {
      var WQ = -1,
        XQ = Array(QQ.size);
      return QQ.forEach((function(QQ, wQ) {
        XQ[++WQ] = [wQ, QQ]
      })), XQ
    }
  },
  6169: QQ => {
    QQ.exports = function(QQ, WQ) {
      return function(XQ) {
        return null != XQ && (XQ[QQ] === WQ && (void 0 !== WQ || QQ in Object(XQ)))
      }
    }
  },
  5572: (QQ, WQ, XQ) => {
    var wQ = XQ(5578);
    QQ.exports = function(QQ) {
      var WQ = wQ(QQ, (function(QQ) {
          return 500 === XQ.size && XQ.clear(), QQ
        })),
        XQ = WQ.cache;
      return WQ
    }
  },
  5606: (QQ, WQ, XQ) => {
    var wQ = XQ(5609)(Object, "create");
    QQ.exports = wQ
  },
  6118: (QQ, WQ, XQ) => {
    var wQ = XQ(6124)(Object.keys, Object);
    QQ.exports = wQ
  },
  6108: (QQ, WQ, XQ) => {
    QQ = XQ.nmd(QQ);
    var wQ = XQ(5457),
      qQ = WQ && !WQ.nodeType && WQ,
      TQ = qQ && QQ && !QQ.nodeType && QQ,
      zQ = TQ && TQ.exports === qQ && wQ.process,
      sQ = function() {
        try {
          var QQ = TQ && TQ.require && TQ.require("util").types;
          return QQ || zQ && zQ.binding && zQ.binding("util")
        } catch (WQ) {}
      }();
    QQ.exports = sQ
  },
  5515: QQ => {
    var WQ = Object.prototype.toString;
    QQ.exports = function(QQ) {
      return WQ.call(QQ)
    }
  },
  6124: QQ => {
    QQ.exports = function(QQ, WQ) {
      return function(XQ) {
        return QQ(WQ(XQ))
      }
    }
  },
  6289: (QQ, WQ, XQ) => {
    var wQ = XQ(6294),
      qQ = Math.max;
    QQ.exports = function(QQ, WQ, XQ) {
      return WQ = qQ(void 0 === WQ ? QQ.length - 1 : WQ, 0),
        function() {
          for (var TQ = arguments, zQ = -1, sQ = qQ(TQ.length - WQ, 0), FQ = Array(sQ); ++zQ < sQ;) FQ[zQ] = TQ[WQ + zQ];
          zQ = -1;
          for (var PQ = Array(WQ + 1); ++zQ < WQ;) PQ[zQ] = TQ[zQ];
          return PQ[WQ] = XQ(FQ), wQ(QQ, this, PQ)
        }
    }
  },
  5455: (QQ, WQ, XQ) => {
    var wQ = XQ(5457),
      qQ = "object" == typeof self && self && self.Object === Object && self,
      TQ = wQ || qQ || Function("return this")();
    QQ.exports = TQ
  },
  5985: QQ => {
    QQ.exports = function(QQ) {
      return this.__data__.set(QQ, "__lodash_hash_undefined__"), this
    }
  },
  5990: QQ => {
    QQ.exports = function(QQ) {
      return this.__data__.has(QQ)
    }
  },
  6030: QQ => {
    QQ.exports = function(QQ) {
      var WQ = -1,
        XQ = Array(QQ.size);
      return QQ.forEach((function(QQ) {
        XQ[++WQ] = QQ
      })), XQ
    }
  },
  6301: (QQ, WQ, XQ) => {
    var wQ = XQ(6305),
      qQ = XQ(6324)(wQ);
    QQ.exports = qQ
  },
  6324: QQ => {
    var WQ = Date.now;
    QQ.exports = function(QQ) {
      var XQ = 0,
        wQ = 0;
      return function() {
        var qQ = WQ(),
          TQ = 16 - (qQ - wQ);
        if (wQ = qQ, TQ > 0) {
          if (++XQ >= 800) return arguments[0]
        } else XQ = 0;
        return QQ.apply(void 0, arguments)
      }
    }
  },
  5925: (QQ, WQ, XQ) => {
    var wQ = XQ(5666);
    QQ.exports = function() {
      this.__data__ = new wQ, this.size = 0
    }
  },
  5932: QQ => {
    QQ.exports = function(QQ) {
      var WQ = this.__data__,
        XQ = WQ.delete(QQ);
      return this.size = WQ.size, XQ
    }
  },
  5934: QQ => {
    QQ.exports = function(QQ) {
      return this.__data__.get(QQ)
    }
  },
  5941: QQ => {
    QQ.exports = function(QQ) {
      return this.__data__.has(QQ)
    }
  },
  5950: (QQ, WQ, XQ) => {
    var wQ = XQ(5666),
      qQ = XQ(5698),
      TQ = XQ(5582);
    QQ.exports = function(QQ, WQ) {
      var XQ = this.__data__;
      if (XQ instanceof wQ) {
        var zQ = XQ.__data__;
        if (!qQ || zQ.length < 199) return zQ.push([QQ, WQ]), this.size = ++XQ.size, this;
        XQ = this.__data__ = new TQ(zQ)
      }
      return XQ.set(QQ, WQ), this.size = XQ.size, this
    }
  },
  6400: QQ => {
    QQ.exports = function(QQ, WQ, XQ) {
      for (var wQ = XQ - 1, qQ = QQ.length; ++wQ < qQ;)
        if (QQ[wQ] === WQ) return wQ;
      return -1
    }
  },
  6469: (QQ, WQ, XQ) => {
    var wQ = XQ(6475),
      qQ = XQ(6460),
      TQ = XQ(6478);
    QQ.exports = function(QQ) {
      return qQ(QQ) ? TQ(QQ) : wQ(QQ)
    }
  },
  5567: (QQ, WQ, XQ) => {
    var wQ = XQ(5572),
      qQ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      TQ = /\\(\\)?/g,
      zQ = wQ((function(QQ) {
        var WQ = [];
        return 46 === QQ.charCodeAt(0) && WQ.push(""), QQ.replace(qQ, (function(QQ, XQ, wQ, qQ) {
          WQ.push(wQ ? qQ.replace(TQ, "$1") : XQ || QQ)
        })), WQ
      }));
    QQ.exports = zQ
  },
  5762: (QQ, WQ, XQ) => {
    var wQ = XQ(5484);
    QQ.exports = function(QQ) {
      if ("string" == typeof QQ || wQ(QQ)) return QQ;
      var WQ = QQ + "";
      return "0" == WQ && 1 / QQ == -1 / 0 ? "-0" : WQ
    }
  },
  5638: QQ => {
    var WQ = Function.prototype.toString;
    QQ.exports = function(QQ) {
      if (null != QQ) {
        try {
          return WQ.call(QQ)
        } catch (XQ) {}
        try {
          return QQ + ""
        } catch (XQ) {}
      }
      return ""
    }
  },
  5478: QQ => {
    var WQ = /\s/;
    QQ.exports = function(QQ) {
      for (var XQ = QQ.length; XQ-- && WQ.test(QQ.charAt(XQ)););
      return XQ
    }
  },
  6478: QQ => {
    var WQ = "\\ud800-\\udfff",
      XQ = "[" + WQ + "]",
      wQ = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
      qQ = "\\ud83c[\\udffb-\\udfff]",
      TQ = "[^" + WQ + "]",
      zQ = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      sQ = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      FQ = "(?:" + wQ + "|" + qQ + ")" + "?",
      PQ = "[\\ufe0e\\ufe0f]?",
      gQ = PQ + FQ + ("(?:\\u200d(?:" + [TQ, zQ, sQ].join("|") + ")" + PQ + FQ + ")*"),
      JQ = "(?:" + [TQ + wQ + "?", wQ, zQ, sQ, XQ].join("|") + ")",
      rQ = RegExp(qQ + "(?=" + qQ + ")|" + JQ + gQ, "g");
    QQ.exports = function(QQ) {
      return QQ.match(rQ) || []
    }
  },
  6309: QQ => {
    QQ.exports = function(QQ) {
      return function() {
        return QQ
      }
    }
  },
  5436: (QQ, WQ, XQ) => {
    var wQ = XQ(5441),
      qQ = XQ(5447),
      TQ = XQ(5464),
      zQ = Math.max,
      sQ = Math.min;
    QQ.exports = function(QQ, WQ, XQ) {
      var FQ, PQ, gQ, JQ, rQ, IQ, jQ = 0,
        BQ = !1,
        yQ = !1,
        VQ = !0;
      if ("function" != typeof QQ) throw new TypeError("Expected a function");

      function DQ(WQ) {
        var XQ = FQ,
          wQ = PQ;
        return FQ = PQ = void 0, jQ = WQ, JQ = QQ.apply(wQ, XQ)
      }

      function pQ(QQ) {
        var XQ = QQ - IQ;
        return void 0 === IQ || XQ >= WQ || XQ < 0 || yQ && QQ - jQ >= gQ
      }

      function GQ() {
        var QQ = qQ();
        if (pQ(QQ)) return UQ(QQ);
        rQ = setTimeout(GQ, function(QQ) {
          var XQ = WQ - (QQ - IQ);
          return yQ ? sQ(XQ, gQ - (QQ - jQ)) : XQ
        }(QQ))
      }

      function UQ(QQ) {
        return rQ = void 0, VQ && FQ ? DQ(QQ) : (FQ = PQ = void 0, JQ)
      }

      function bQ() {
        var QQ = qQ(),
          XQ = pQ(QQ);
        if (FQ = arguments, PQ = this, IQ = QQ, XQ) {
          if (void 0 === rQ) return function(QQ) {
            return jQ = QQ, rQ = setTimeout(GQ, WQ), BQ ? DQ(QQ) : JQ
          }(IQ);
          if (yQ) return clearTimeout(rQ), rQ = setTimeout(GQ, WQ), DQ(IQ)
        }
        return void 0 === rQ && (rQ = setTimeout(GQ, WQ)), JQ
      }
      return WQ = TQ(WQ) || 0, wQ(XQ) && (BQ = !!XQ.leading, gQ = (yQ = "maxWait" in XQ) ? zQ(TQ(XQ.maxWait) || 0, WQ) : gQ, VQ = "trailing" in XQ ? !!XQ.trailing : VQ), bQ.cancel = function() {
        void 0 !== rQ && clearTimeout(rQ), jQ = 0, FQ = IQ = PQ = rQ = void 0
      }, bQ.flush = function() {
        return void 0 === rQ ? JQ : UQ(qQ())
      }, bQ
    }
  },
  5683: QQ => {
    QQ.exports = function(QQ, WQ) {
      return QQ === WQ || QQ !== QQ && WQ !== WQ
    }
  },
  6647: (QQ, WQ, XQ) => {
    var wQ = XQ(6653),
      qQ = XQ(6662),
      TQ = XQ(5902),
      zQ = XQ(5529),
      sQ = XQ(5830);
    QQ.exports = function(QQ, WQ, XQ) {
      var FQ = zQ(QQ) ? wQ : qQ;
      return XQ && sQ(QQ, WQ, XQ) && (WQ = void 0), FQ(QQ, TQ(WQ, 3))
    }
  },
  6730: (QQ, WQ, XQ) => {
    var wQ = XQ(6739)(XQ(6741));
    QQ.exports = wQ
  },
  6741: (QQ, WQ, XQ) => {
    var wQ = XQ(6385),
      qQ = XQ(5902),
      TQ = XQ(6743),
      zQ = Math.max;
    QQ.exports = function(QQ, WQ, XQ) {
      var sQ = null == QQ ? 0 : QQ.length;
      if (!sQ) return -1;
      var FQ = null == XQ ? 0 : TQ(XQ);
      return FQ < 0 && (FQ = zQ(sQ + FQ, 0)), wQ(QQ, qQ(WQ, 3), FQ)
    }
  },
  6584: (QQ, WQ, XQ) => {
    var wQ = XQ(5871),
      qQ = XQ(6586);
    QQ.exports = function(QQ, WQ) {
      return wQ(qQ(QQ, WQ), 1)
    }
  },
  5545: (QQ, WQ, XQ) => {
    var wQ = XQ(5548);
    QQ.exports = function(QQ, WQ, XQ) {
      var qQ = null == QQ ? void 0 : wQ(QQ, WQ);
      return void 0 === qQ ? XQ : qQ
    }
  },
  6185: (QQ, WQ, XQ) => {
    var wQ = XQ(6188),
      qQ = XQ(6194);
    QQ.exports = function(QQ, WQ) {
      return null != QQ && qQ(QQ, WQ, wQ)
    }
  },
  6200: QQ => {
    QQ.exports = function(QQ) {
      return QQ
    }
  },
  5885: (QQ, WQ, XQ) => {
    var wQ = XQ(5888),
      qQ = XQ(5517),
      TQ = Object.prototype,
      zQ = TQ.hasOwnProperty,
      sQ = TQ.propertyIsEnumerable,
      FQ = wQ(function() {
        return arguments
      }()) ? wQ : function(QQ) {
        return qQ(QQ) && zQ.call(QQ, "callee") && !sQ.call(QQ, "callee")
      };
    QQ.exports = FQ
  },
  5529: QQ => {
    var WQ = Array.isArray;
    QQ.exports = WQ
  },
  5836: (QQ, WQ, XQ) => {
    var wQ = XQ(5622),
      qQ = XQ(5839);
    QQ.exports = function(QQ) {
      return null != QQ && qQ(QQ.length) && !wQ(QQ)
    }
  },
  6703: (QQ, WQ, XQ) => {
    var wQ = XQ(5492),
      qQ = XQ(5517);
    QQ.exports = function(QQ) {
      return !0 === QQ || !1 === QQ || qQ(QQ) && "[object Boolean]" == wQ(QQ)
    }
  },
  6075: (QQ, WQ, XQ) => {
    QQ = XQ.nmd(QQ);
    var wQ = XQ(5455),
      qQ = XQ(6083),
      TQ = WQ && !WQ.nodeType && WQ,
      zQ = TQ && QQ && !QQ.nodeType && QQ,
      sQ = zQ && zQ.exports === TQ ? wQ.Tj : void 0,
      FQ = (sQ ? sQ.isBuffer : void 0) || qQ;
    QQ.exports = FQ
  },
  6590: (QQ, WQ, XQ) => {
    var wQ = XQ(5958);
    QQ.exports = function(QQ, WQ) {
      return wQ(QQ, WQ)
    }
  },
  5622: (QQ, WQ, XQ) => {
    var wQ = XQ(5492),
      qQ = XQ(5441);
    QQ.exports = function(QQ) {
      if (!qQ(QQ)) return !1;
      var WQ = wQ(QQ);
      return "[object Function]" == WQ || "[object GeneratorFunction]" == WQ || "[object AsyncFunction]" == WQ || "[object Proxy]" == WQ
    }
  },
  5839: QQ => {
    QQ.exports = function(QQ) {
      return "number" == typeof QQ && QQ > -1 && QQ % 1 == 0 && QQ <= 9007199254740991
    }
  },
  5536: (QQ, WQ, XQ) => {
    var wQ = XQ(5543);
    QQ.exports = function(QQ) {
      return wQ(QQ) && QQ != +QQ
    }
  },
  5766: QQ => {
    QQ.exports = function(QQ) {
      return null == QQ
    }
  },
  5543: (QQ, WQ, XQ) => {
    var wQ = XQ(5492),
      qQ = XQ(5517);
    QQ.exports = function(QQ) {
      return "number" == typeof QQ || qQ(QQ) && "[object Number]" == wQ(QQ)
    }
  },
  5441: QQ => {
    QQ.exports = function(QQ) {
      var WQ = typeof QQ;
      return null != QQ && ("object" == WQ || "function" == WQ)
    }
  },
  5517: QQ => {
    QQ.exports = function(QQ) {
      return null != QQ && "object" == typeof QQ
    }
  },
  6696: (QQ, WQ, XQ) => {
    var wQ = XQ(5492),
      qQ = XQ(6700),
      TQ = XQ(5517),
      zQ = Function.prototype,
      sQ = Object.prototype,
      FQ = zQ.toString,
      PQ = sQ.hasOwnProperty,
      gQ = FQ.call(Object);
    QQ.exports = function(QQ) {
      if (!TQ(QQ) || "[object Object]" != wQ(QQ)) return !1;
      var WQ = qQ(QQ);
      if (null === WQ) return !0;
      var XQ = PQ.call(WQ, "constructor") && WQ.constructor;
      return "function" == typeof XQ && XQ instanceof XQ && FQ.call(XQ) == gQ
    }
  },
  5523: (QQ, WQ, XQ) => {
    var wQ = XQ(5492),
      qQ = XQ(5529),
      TQ = XQ(5517);
    QQ.exports = function(QQ) {
      return "string" == typeof QQ || !qQ(QQ) && TQ(QQ) && "[object String]" == wQ(QQ)
    }
  },
  5484: (QQ, WQ, XQ) => {
    var wQ = XQ(5492),
      qQ = XQ(5517);
    QQ.exports = function(QQ) {
      return "symbol" == typeof QQ || qQ(QQ) && "[object Symbol]" == wQ(QQ)
    }
  },
  6085: (QQ, WQ, XQ) => {
    var wQ = XQ(6094),
      qQ = XQ(6102),
      TQ = XQ(6108),
      zQ = TQ && TQ.isTypedArray,
      sQ = zQ ? qQ(zQ) : wQ;
    QQ.exports = sQ
  },
  6062: (QQ, WQ, XQ) => {
    var wQ = XQ(6066),
      qQ = XQ(6113),
      TQ = XQ(5836);
    QQ.exports = function(QQ) {
      return TQ(QQ) ? wQ(QQ) : qQ(QQ)
    }
  },
  6681: QQ => {
    QQ.exports = function(QQ) {
      var WQ = null == QQ ? 0 : QQ.length;
      return WQ ? QQ[WQ - 1] : void 0
    }
  },
  6586: (QQ, WQ, XQ) => {
    var wQ = XQ(5756),
      qQ = XQ(5902),
      TQ = XQ(6224),
      zQ = XQ(5529);
    QQ.exports = function(QQ, WQ) {
      return (zQ(QQ) ? wQ : TQ)(QQ, qQ(WQ, 3))
    }
  },
  6639: (QQ, WQ, XQ) => {
    var wQ = XQ(6641),
      qQ = XQ(6240),
      TQ = XQ(5902);
    QQ.exports = function(QQ, WQ) {
      var XQ = {};
      return WQ = TQ(WQ, 3), qQ(QQ, (function(QQ, qQ, TQ) {
        wQ(XQ, qQ, WQ(QQ, qQ, TQ))
      })), XQ
    }
  },
  6546: (QQ, WQ, XQ) => {
    var wQ = XQ(6555),
      qQ = XQ(6564),
      TQ = XQ(6200);
    QQ.exports = function(QQ) {
      return QQ && QQ.length ? wQ(QQ, TQ, qQ) : void 0
    }
  },
  5578: (QQ, WQ, XQ) => {
    var wQ = XQ(5582);

    function qQ(QQ, WQ) {
      if ("function" != typeof QQ || null != WQ && "function" != typeof WQ) throw new TypeError("Expected a function");
      var XQ = function() {
        var wQ = arguments,
          qQ = WQ ? WQ.apply(this, wQ) : wQ[0],
          TQ = XQ.cache;
        if (TQ.has(qQ)) return TQ.get(qQ);
        var zQ = QQ.apply(this, wQ);
        return XQ.cache = TQ.set(qQ, zQ) || TQ, zQ
      };
      return XQ.cache = new(qQ.Cache || wQ), XQ
    }
    qQ.Cache = wQ, QQ.exports = qQ
  },
  6571: (QQ, WQ, XQ) => {
    var wQ = XQ(6555),
      qQ = XQ(6576),
      TQ = XQ(6200);
    QQ.exports = function(QQ) {
      return QQ && QQ.length ? wQ(QQ, TQ, qQ) : void 0
    }
  },
  6423: QQ => {
    QQ.exports = function() {}
  },
  5447: (QQ, WQ, XQ) => {
    var wQ = XQ(5455);
    QQ.exports = function() {
      return wQ.Date.now()
    }
  },
  6209: (QQ, WQ, XQ) => {
    var wQ = XQ(6217),
      qQ = XQ(6219),
      TQ = XQ(5559),
      zQ = XQ(5762);
    QQ.exports = function(QQ) {
      return TQ(QQ) ? wQ(zQ(QQ)) : qQ(QQ)
    }
  },
  5821: (QQ, WQ, XQ) => {
    var wQ = XQ(5825)();
    QQ.exports = wQ
  },
  6715: (QQ, WQ, XQ) => {
    var wQ = XQ(5998),
      qQ = XQ(5902),
      TQ = XQ(6718),
      zQ = XQ(5529),
      sQ = XQ(5830);
    QQ.exports = function(QQ, WQ, XQ) {
      var FQ = zQ(QQ) ? wQ : TQ;
      return XQ && sQ(QQ, WQ, XQ) && (WQ = void 0), FQ(QQ, qQ(WQ, 3))
    }
  },
  5866: (QQ, WQ, XQ) => {
    var wQ = XQ(5871),
      qQ = XQ(5896),
      TQ = XQ(6284),
      zQ = XQ(5830),
      sQ = TQ((function(QQ, WQ) {
        if (null == QQ) return [];
        var XQ = WQ.length;
        return XQ > 1 && zQ(QQ, WQ[0], WQ[1]) ? WQ = [] : XQ > 2 && zQ(WQ[0], WQ[1], WQ[2]) && (WQ = [WQ[0]]), qQ(QQ, wQ(WQ, 1), [])
      }));
    QQ.exports = sQ
  },
  6057: QQ => {
    QQ.exports = function() {
      return []
    }
  },
  6083: QQ => {
    QQ.exports = function() {
      return !1
    }
  },
  5429: (QQ, WQ, XQ) => {
    var wQ = XQ(5436),
      qQ = XQ(5441);
    QQ.exports = function(QQ, WQ, XQ) {
      var TQ = !0,
        zQ = !0;
      if ("function" != typeof QQ) throw new TypeError("Expected a function");
      return qQ(XQ) && (TQ = "leading" in XQ ? !!XQ.leading : TQ, zQ = "trailing" in XQ ? !!XQ.trailing : zQ), wQ(QQ, WQ, {
        leading: TQ,
        maxWait: WQ,
        trailing: zQ
      })
    }
  },
  5857: (QQ, WQ, XQ) => {
    var wQ = XQ(5464),
      qQ = 1 / 0;
    QQ.exports = function(QQ) {
      return QQ ? (QQ = wQ(QQ)) === qQ || QQ === -1 / 0 ? 17976931348623157e292 * (QQ < 0 ? -1 : 1) : QQ === QQ ? QQ : 0 : 0 === QQ ? QQ : 0
    }
  },
  6743: (QQ, WQ, XQ) => {
    var wQ = XQ(5857);
    QQ.exports = function(QQ) {
      var WQ = wQ(QQ),
        XQ = WQ % 1;
      return WQ === WQ ? XQ ? WQ - XQ : WQ : 0
    }
  },
  5464: (QQ, WQ, XQ) => {
    var wQ = XQ(5473),
      qQ = XQ(5441),
      TQ = XQ(5484),
      zQ = /^[-+]0x[0-9a-f]+$/i,
      sQ = /^0b[01]+$/i,
      FQ = /^0o[0-7]+$/i,
      PQ = parseInt;
    QQ.exports = function(QQ) {
      if ("number" == typeof QQ) return QQ;
      if (TQ(QQ)) return NaN;
      if (qQ(QQ)) {
        var WQ = "function" == typeof QQ.valueOf ? QQ.valueOf() : QQ;
        QQ = qQ(WQ) ? WQ + "" : WQ
      }
      if ("string" != typeof QQ) return 0 === QQ ? QQ : +QQ;
      QQ = wQ(QQ);
      var XQ = sQ.test(QQ);
      return XQ || FQ.test(QQ) ? PQ(QQ.slice(2), XQ ? 2 : 8) : zQ.test(QQ) ? NaN : +QQ
    }
  },
  5739: (QQ, WQ, XQ) => {
    var wQ = XQ(5747);
    QQ.exports = function(QQ) {
      return null == QQ ? "" : wQ(QQ)
    }
  },
  6360: (QQ, WQ, XQ) => {
    var wQ = XQ(5902),
      qQ = XQ(6368);
    QQ.exports = function(QQ, WQ) {
      return QQ && QQ.length ? qQ(QQ, wQ(WQ, 2)) : []
    }
  },
  6432: (QQ, WQ, XQ) => {
    var wQ = XQ(6440)("toUpperCase");
    QQ.exports = wQ
  },
  6513: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => uW
    });
    var wQ = XQ(61),
      qQ = XQ(5318),
      TQ = XQ.n(qQ);
    const {
      getOwnPropertyNames: zQ,
      getOwnPropertySymbols: sQ
    } = Object, {
      hasOwnProperty: FQ
    } = Object.prototype;

    function PQ(QQ, WQ) {
      return function(XQ, wQ, qQ) {
        return QQ(XQ, wQ, qQ) && WQ(XQ, wQ, qQ)
      }
    }

    function gQ(QQ) {
      return function(WQ, XQ, wQ) {
        if (!WQ || !XQ || "object" !== typeof WQ || "object" !== typeof XQ) return QQ(WQ, XQ, wQ);
        const {
          cache: qQ
        } = wQ, TQ = qQ.get(WQ), zQ = qQ.get(XQ);
        if (TQ && zQ) return TQ === XQ && zQ === WQ;
        qQ.set(WQ, XQ), qQ.set(XQ, WQ);
        const sQ = QQ(WQ, XQ, wQ);
        return qQ.delete(WQ), qQ.delete(XQ), sQ
      }
    }

    function JQ(QQ) {
      return zQ(QQ).concat(sQ(QQ))
    }
    const rQ = Object.hasOwn || ((QQ, WQ) => FQ.call(QQ, WQ));

    function IQ(QQ, WQ) {
      return QQ === WQ || !QQ && !WQ && QQ !== QQ && WQ !== WQ
    }
    const {
      getOwnPropertyDescriptor: jQ,
      keys: BQ
    } = Object;

    function yQ(QQ, WQ) {
      return QQ.byteLength === WQ.byteLength && iQ(new Uint8Array(QQ), new Uint8Array(WQ))
    }

    function VQ(QQ, WQ, XQ) {
      let wQ = QQ.length;
      if (WQ.length !== wQ) return !1;
      for (; wQ-- > 0;)
        if (!XQ.equals(QQ[wQ], WQ[wQ], wQ, wQ, QQ, WQ, XQ)) return !1;
      return !0
    }

    function DQ(QQ, WQ) {
      return QQ.byteLength === WQ.byteLength && iQ(new Uint8Array(QQ.buffer, QQ.byteOffset, QQ.byteLength), new Uint8Array(WQ.buffer, WQ.byteOffset, WQ.byteLength))
    }

    function pQ(QQ, WQ) {
      return IQ(QQ.getTime(), WQ.getTime())
    }

    function GQ(QQ, WQ) {
      return QQ.name === WQ.name && QQ.message === WQ.message && QQ.cause === WQ.cause && QQ.stack === WQ.stack
    }

    function UQ(QQ, WQ) {
      return QQ === WQ
    }

    function bQ(QQ, WQ, XQ) {
      const wQ = QQ.size;
      if (wQ !== WQ.size) return !1;
      if (!wQ) return !0;
      const qQ = new Array(wQ),
        TQ = QQ.entries();
      let zQ, sQ, FQ = 0;
      for (;
        (zQ = TQ.next()) && !zQ.done;) {
        const wQ = WQ.entries();
        let TQ = !1,
          PQ = 0;
        for (;
          (sQ = wQ.next()) && !sQ.done;) {
          if (qQ[PQ]) {
            PQ++;
            continue
          }
          const wQ = zQ.value,
            gQ = sQ.value;
          if (XQ.equals(wQ[0], gQ[0], FQ, PQ, QQ, WQ, XQ) && XQ.equals(wQ[1], gQ[1], wQ[0], gQ[0], QQ, WQ, XQ)) {
            TQ = qQ[PQ] = !0;
            break
          }
          PQ++
        }
        if (!TQ) return !1;
        FQ++
      }
      return !0
    }
    const vQ = IQ;

    function dQ(QQ, WQ, XQ) {
      const wQ = BQ(QQ);
      let qQ = wQ.length;
      if (BQ(WQ).length !== qQ) return !1;
      for (; qQ-- > 0;)
        if (!AQ(QQ, WQ, XQ, wQ[qQ])) return !1;
      return !0
    }

    function HQ(QQ, WQ, XQ) {
      const wQ = JQ(QQ);
      let qQ, TQ, zQ, sQ = wQ.length;
      if (JQ(WQ).length !== sQ) return !1;
      for (; sQ-- > 0;) {
        if (qQ = wQ[sQ], !AQ(QQ, WQ, XQ, qQ)) return !1;
        if (TQ = jQ(QQ, qQ), zQ = jQ(WQ, qQ), (TQ || zQ) && (!TQ || !zQ || TQ.configurable !== zQ.configurable || TQ.enumerable !== zQ.enumerable || TQ.writable !== zQ.writable)) return !1
      }
      return !0
    }

    function aQ(QQ, WQ) {
      return IQ(QQ.valueOf(), WQ.valueOf())
    }

    function lQ(QQ, WQ) {
      return QQ.source === WQ.source && QQ.flags === WQ.flags
    }

    function hQ(QQ, WQ, XQ) {
      const wQ = QQ.size;
      if (wQ !== WQ.size) return !1;
      if (!wQ) return !0;
      const qQ = new Array(wQ),
        TQ = QQ.values();
      let zQ, sQ;
      for (;
        (zQ = TQ.next()) && !zQ.done;) {
        const wQ = WQ.values();
        let TQ = !1,
          FQ = 0;
        for (;
          (sQ = wQ.next()) && !sQ.done;) {
          if (!qQ[FQ] && XQ.equals(zQ.value, sQ.value, zQ.value, sQ.value, QQ, WQ, XQ)) {
            TQ = qQ[FQ] = !0;
            break
          }
          FQ++
        }
        if (!TQ) return !1
      }
      return !0
    }

    function iQ(QQ, WQ) {
      let XQ = QQ.byteLength;
      if (WQ.byteLength !== XQ || QQ.byteOffset !== WQ.byteOffset) return !1;
      for (; XQ-- > 0;)
        if (QQ[XQ] !== WQ[XQ]) return !1;
      return !0
    }

    function cQ(QQ, WQ) {
      return QQ.hostname === WQ.hostname && QQ.pathname === WQ.pathname && QQ.protocol === WQ.protocol && QQ.port === WQ.port && QQ.hash === WQ.hash && QQ.username === WQ.username && QQ.password === WQ.password
    }

    function AQ(QQ, WQ, XQ, wQ) {
      return !("_owner" !== wQ && "__o" !== wQ && "__v" !== wQ || !QQ.$$typeof && !WQ.$$typeof) || rQ(WQ, wQ) && XQ.equals(QQ[wQ], WQ[wQ], wQ, wQ, QQ, WQ, XQ)
    }
    const RQ = {
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
      EQ = Object.prototype.toString;

    function CQ(QQ) {
      let {
        areArrayBuffersEqual: WQ,
        areArraysEqual: XQ,
        areDataViewsEqual: wQ,
        areDatesEqual: qQ,
        areErrorsEqual: TQ,
        areFunctionsEqual: zQ,
        areMapsEqual: sQ,
        areNumbersEqual: FQ,
        areObjectsEqual: PQ,
        arePrimitiveWrappersEqual: gQ,
        areRegExpsEqual: JQ,
        areSetsEqual: rQ,
        areTypedArraysEqual: IQ,
        areUrlsEqual: jQ,
        unknownTagComparators: BQ
      } = QQ;
      return function(QQ, yQ, VQ) {
        if (QQ === yQ) return !0;
        if (null == QQ || null == yQ) return !1;
        const DQ = typeof QQ;
        if (DQ !== typeof yQ) return !1;
        if ("object" !== DQ) return "number" === DQ ? FQ(QQ, yQ, VQ) : "function" === DQ && zQ(QQ, yQ, VQ);
        const pQ = QQ.constructor;
        if (pQ !== yQ.constructor) return !1;
        if (pQ === Object) return PQ(QQ, yQ, VQ);
        if (Array.isArray(QQ)) return XQ(QQ, yQ, VQ);
        if (pQ === Date) return qQ(QQ, yQ, VQ);
        if (pQ === RegExp) return JQ(QQ, yQ, VQ);
        if (pQ === Map) return sQ(QQ, yQ, VQ);
        if (pQ === Set) return rQ(QQ, yQ, VQ);
        const GQ = EQ.call(QQ);
        if ("[object Date]" === GQ) return qQ(QQ, yQ, VQ);
        if ("[object RegExp]" === GQ) return JQ(QQ, yQ, VQ);
        if ("[object Map]" === GQ) return sQ(QQ, yQ, VQ);
        if ("[object Set]" === GQ) return rQ(QQ, yQ, VQ);
        if ("[object Object]" === GQ) return "function" !== typeof QQ.then && "function" !== typeof yQ.then && PQ(QQ, yQ, VQ);
        if ("[object URL]" === GQ) return jQ(QQ, yQ, VQ);
        if ("[object Error]" === GQ) return TQ(QQ, yQ, VQ);
        if ("[object Arguments]" === GQ) return PQ(QQ, yQ, VQ);
        if (RQ[GQ]) return IQ(QQ, yQ, VQ);
        if ("[object ArrayBuffer]" === GQ) return WQ(QQ, yQ, VQ);
        if ("[object DataView]" === GQ) return wQ(QQ, yQ, VQ);
        if ("[object Boolean]" === GQ || "[object Number]" === GQ || "[object String]" === GQ) return gQ(QQ, yQ, VQ);
        if (BQ) {
          let WQ = BQ[GQ];
          if (!WQ) {
            const XQ = null != (UQ = QQ) ? UQ[Symbol.toStringTag] : void 0;
            XQ && (WQ = BQ[XQ])
          }
          if (WQ) return WQ(QQ, yQ, VQ)
        }
        var UQ;
        return !1
      }
    }
    const uQ = LQ();
    LQ({
      strict: !0
    }), LQ({
      circular: !0
    }), LQ({
      circular: !0,
      strict: !0
    }), LQ({
      createInternalComparator: () => IQ
    }), LQ({
      strict: !0,
      createInternalComparator: () => IQ
    }), LQ({
      circular: !0,
      createInternalComparator: () => IQ
    }), LQ({
      circular: !0,
      createInternalComparator: () => IQ,
      strict: !0
    });

    function LQ() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        circular: WQ = !1,
        createInternalComparator: XQ,
        createState: wQ,
        strict: qQ = !1
      } = QQ, TQ = function(QQ) {
        let {
          circular: WQ,
          createCustomConfig: XQ,
          strict: wQ
        } = QQ, qQ = {
          areArrayBuffersEqual: yQ,
          areArraysEqual: wQ ? HQ : VQ,
          areDataViewsEqual: DQ,
          areDatesEqual: pQ,
          areErrorsEqual: GQ,
          areFunctionsEqual: UQ,
          areMapsEqual: wQ ? PQ(bQ, HQ) : bQ,
          areNumbersEqual: vQ,
          areObjectsEqual: wQ ? HQ : dQ,
          arePrimitiveWrappersEqual: aQ,
          areRegExpsEqual: lQ,
          areSetsEqual: wQ ? PQ(hQ, HQ) : hQ,
          areTypedArraysEqual: wQ ? PQ(iQ, HQ) : iQ,
          areUrlsEqual: cQ,
          unknownTagComparators: void 0
        };
        if (XQ && (qQ = Object.assign({}, qQ, XQ(qQ))), WQ) {
          const QQ = gQ(qQ.areArraysEqual),
            WQ = gQ(qQ.areMapsEqual),
            XQ = gQ(qQ.areObjectsEqual),
            wQ = gQ(qQ.areSetsEqual);
          qQ = Object.assign({}, qQ, {
            areArraysEqual: QQ,
            areMapsEqual: WQ,
            areObjectsEqual: XQ,
            areSetsEqual: wQ
          })
        }
        return qQ
      }(QQ), zQ = CQ(TQ);
      var sQ;
      return function(QQ) {
        let {
          circular: WQ,
          comparator: XQ,
          createState: wQ,
          equals: qQ,
          strict: TQ
        } = QQ;
        if (wQ) return function(QQ, zQ) {
          const {
            cache: sQ = (WQ ? new WeakMap : void 0),
            meta: FQ
          } = wQ();
          return XQ(QQ, zQ, {
            cache: sQ,
            equals: qQ,
            meta: FQ,
            strict: TQ
          })
        };
        if (WQ) return function(QQ, WQ) {
          return XQ(QQ, WQ, {
            cache: new WeakMap,
            equals: qQ,
            meta: void 0,
            strict: TQ
          })
        };
        const zQ = {
          cache: void 0,
          equals: qQ,
          meta: void 0,
          strict: TQ
        };
        return function(QQ, WQ) {
          return XQ(QQ, WQ, zQ)
        }
      }({
        circular: WQ,
        comparator: zQ,
        createState: wQ,
        equals: XQ ? XQ(zQ) : (sQ = zQ, function(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
          return sQ(QQ, WQ, zQ)
        }),
        strict: qQ
      })
    }

    function kQ(QQ) {
      var WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        XQ = -1;
      requestAnimationFrame((function wQ(qQ) {
        XQ < 0 && (XQ = qQ), qQ - XQ > WQ ? (QQ(qQ), XQ = -1) : function(QQ) {
          "undefined" !== typeof requestAnimationFrame && requestAnimationFrame(QQ)
        }(wQ)
      }))
    }

    function fQ(QQ) {
      return fQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, fQ(QQ)
    }

    function SQ(QQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return QQ
      }(QQ) || function(QQ) {
        if ("undefined" !== typeof Symbol && null != QQ[Symbol.iterator] || null != QQ["@@iterator"]) return Array.from(QQ)
      }(QQ) || function(QQ, WQ) {
        if (!QQ) return;
        if ("string" === typeof QQ) return tQ(QQ, WQ);
        var XQ = Object.prototype.toString.call(QQ).slice(8, -1);
        "Object" === XQ && QQ.constructor && (XQ = QQ.constructor.name);
        if ("Map" === XQ || "Set" === XQ) return Array.from(QQ);
        if ("Arguments" === XQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(XQ)) return tQ(QQ, WQ)
      }(QQ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function tQ(QQ, WQ) {
      (null == WQ || WQ > QQ.length) && (WQ = QQ.length);
      for (var XQ = 0, wQ = new Array(WQ); XQ < WQ; XQ++) wQ[XQ] = QQ[XQ];
      return wQ
    }

    function oQ() {
      var QQ = function() {
          return null
        },
        WQ = !1,
        XQ = function XQ(wQ) {
          if (!WQ) {
            if (Array.isArray(wQ)) {
              if (!wQ.length) return;
              var qQ = SQ(wQ),
                TQ = qQ[0],
                zQ = qQ.slice(1);
              return "number" === typeof TQ ? void kQ(XQ.bind(null, zQ), TQ) : (XQ(TQ), void kQ(XQ.bind(null, zQ)))
            }
            "object" === fQ(wQ) && QQ(wQ), "function" === typeof wQ && wQ()
          }
        };
      return {
        stop: function() {
          WQ = !0
        },
        start: function(QQ) {
          WQ = !1, XQ(QQ)
        },
        subscribe: function(WQ) {
          return QQ = WQ,
            function() {
              QQ = function() {
                return null
              }
            }
        }
      }
    }

    function eQ(QQ) {
      return eQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, eQ(QQ)
    }

    function nQ(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function xQ(QQ) {
      for (var WQ = 1; WQ < arguments.length; WQ++) {
        var XQ = null != arguments[WQ] ? arguments[WQ] : {};
        WQ % 2 ? nQ(Object(XQ), !0).forEach((function(WQ) {
          YQ(QQ, WQ, XQ[WQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : nQ(Object(XQ)).forEach((function(WQ) {
          Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
        }))
      }
      return QQ
    }

    function YQ(QQ, WQ, XQ) {
      return (WQ = function(QQ) {
        var WQ = function(QQ, WQ) {
          if ("object" !== eQ(QQ) || null === QQ) return QQ;
          var XQ = QQ[Symbol.toPrimitive];
          if (void 0 !== XQ) {
            var wQ = XQ.call(QQ, WQ || "default");
            if ("object" !== eQ(wQ)) return wQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" === eQ(WQ) ? WQ : String(WQ)
      }(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }
    var NQ = function(QQ) {
        return QQ
      },
      ZQ = function(QQ, WQ) {
        return Object.keys(WQ).reduce((function(XQ, wQ) {
          return xQ(xQ({}, XQ), {}, YQ({}, wQ, QQ(wQ, WQ[wQ])))
        }), {})
      },
      OQ = function(QQ, WQ, XQ) {
        return QQ.map((function(QQ) {
          return "".concat((wQ = QQ, wQ.replace(/([A-Z])/g, (function(QQ) {
            return "-".concat(QQ.toLowerCase())
          }))), " ").concat(WQ, "ms ").concat(XQ);
          var wQ
        })).join(",")
      };

    function KQ(QQ, WQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return QQ
      }(QQ) || function(QQ, WQ) {
        var XQ = null == QQ ? null : "undefined" != typeof Symbol && QQ[Symbol.iterator] || QQ["@@iterator"];
        if (null != XQ) {
          var wQ, qQ, TQ, zQ, sQ = [],
            FQ = !0,
            PQ = !1;
          try {
            if (TQ = (XQ = XQ.call(QQ)).next, 0 === WQ) {
              if (Object(XQ) !== XQ) return;
              FQ = !1
            } else
              for (; !(FQ = (wQ = TQ.call(XQ)).done) && (sQ.push(wQ.value), sQ.length !== WQ); FQ = !0);
          } catch (QQ) {
            PQ = !0, qQ = QQ
          } finally {
            try {
              if (!FQ && null != XQ.return && (zQ = XQ.return(), Object(zQ) !== zQ)) return
            } finally {
              if (PQ) throw qQ
            }
          }
          return sQ
        }
      }(QQ, WQ) || MQ(QQ, WQ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function mQ(QQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return QW(QQ)
      }(QQ) || function(QQ) {
        if ("undefined" !== typeof Symbol && null != QQ[Symbol.iterator] || null != QQ["@@iterator"]) return Array.from(QQ)
      }(QQ) || MQ(QQ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function MQ(QQ, WQ) {
      if (QQ) {
        if ("string" === typeof QQ) return QW(QQ, WQ);
        var XQ = Object.prototype.toString.call(QQ).slice(8, -1);
        return "Object" === XQ && QQ.constructor && (XQ = QQ.constructor.name), "Map" === XQ || "Set" === XQ ? Array.from(QQ) : "Arguments" === XQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(XQ) ? QW(QQ, WQ) : void 0
      }
    }

    function QW(QQ, WQ) {
      (null == WQ || WQ > QQ.length) && (WQ = QQ.length);
      for (var XQ = 0, wQ = new Array(WQ); XQ < WQ; XQ++) wQ[XQ] = QQ[XQ];
      return wQ
    }
    var WW = 1e-4,
      XW = function(QQ, WQ) {
        return [0, 3 * QQ, 3 * WQ - 6 * QQ, 3 * QQ - 3 * WQ + 1]
      },
      wW = function(QQ, WQ) {
        return QQ.map((function(QQ, XQ) {
          return QQ * Math.pow(WQ, XQ)
        })).reduce((function(QQ, WQ) {
          return QQ + WQ
        }))
      },
      qW = function(QQ, WQ) {
        return function(XQ) {
          var wQ = XW(QQ, WQ);
          return wW(wQ, XQ)
        }
      },
      TW = function() {
        for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
        var wQ = WQ[0],
          qQ = WQ[1],
          TQ = WQ[2],
          zQ = WQ[3];
        if (1 === WQ.length) switch (WQ[0]) {
          case "linear":
            wQ = 0, qQ = 0, TQ = 1, zQ = 1;
            break;
          case "ease":
            wQ = .25, qQ = .1, TQ = .25, zQ = 1;
            break;
          case "ease-in":
            wQ = .42, qQ = 0, TQ = 1, zQ = 1;
            break;
          case "ease-out":
            wQ = .42, qQ = 0, TQ = .58, zQ = 1;
            break;
          case "ease-in-out":
            wQ = 0, qQ = 0, TQ = .58, zQ = 1;
            break;
          default:
            var sQ = WQ[0].split("(");
            if ("cubic-bezier" === sQ[0] && 4 === sQ[1].split(")")[0].split(",").length) {
              var FQ = KQ(sQ[1].split(")")[0].split(",").map((function(QQ) {
                return parseFloat(QQ)
              })), 4);
              wQ = FQ[0], qQ = FQ[1], TQ = FQ[2], zQ = FQ[3]
            }
        } [wQ, TQ, qQ, zQ].every((function(QQ) {
          return "number" === typeof QQ && QQ >= 0 && QQ <= 1
        }));
        var PQ, gQ, JQ = qW(wQ, TQ),
          rQ = qW(qQ, zQ),
          IQ = (PQ = wQ, gQ = TQ, function(QQ) {
            var WQ = XW(PQ, gQ),
              XQ = [].concat(mQ(WQ.map((function(QQ, WQ) {
                return QQ * WQ
              })).slice(1)), [0]);
            return wW(XQ, QQ)
          }),
          jQ = function(QQ) {
            for (var WQ, XQ = QQ > 1 ? 1 : QQ, wQ = XQ, qQ = 0; qQ < 8; ++qQ) {
              var TQ = JQ(wQ) - XQ,
                zQ = IQ(wQ);
              if (Math.abs(TQ - XQ) < WW || zQ < WW) return rQ(wQ);
              wQ = (WQ = wQ - TQ / zQ) > 1 ? 1 : WQ < 0 ? 0 : WQ
            }
            return rQ(wQ)
          };
        return jQ.isStepper = !1, jQ
      },
      zW = function() {
        for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
        var wQ = WQ[0];
        if ("string" === typeof wQ) switch (wQ) {
          case "ease":
          case "ease-in-out":
          case "ease-out":
          case "ease-in":
          case "linear":
            return TW(wQ);
          case "spring":
            return function() {
              var QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                WQ = QQ.stiff,
                XQ = void 0 === WQ ? 100 : WQ,
                wQ = QQ.damping,
                qQ = void 0 === wQ ? 8 : wQ,
                TQ = QQ.dt,
                zQ = void 0 === TQ ? 17 : TQ,
                sQ = function(QQ, WQ, wQ) {
                  var TQ = wQ + (-(QQ - WQ) * XQ - wQ * qQ) * zQ / 1e3,
                    sQ = wQ * zQ / 1e3 + QQ;
                  return Math.abs(sQ - WQ) < WW && Math.abs(TQ) < WW ? [WQ, 0] : [sQ, TQ]
                };
              return sQ.isStepper = !0, sQ.dt = zQ, sQ
            }();
          default:
            if ("cubic-bezier" === wQ.split("(")[0]) return TW(wQ)
        }
        return "function" === typeof wQ ? wQ : null
      };

    function sW(QQ) {
      return sW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, sW(QQ)
    }

    function FW(QQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return jW(QQ)
      }(QQ) || function(QQ) {
        if ("undefined" !== typeof Symbol && null != QQ[Symbol.iterator] || null != QQ["@@iterator"]) return Array.from(QQ)
      }(QQ) || IW(QQ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function PW(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function gW(QQ) {
      for (var WQ = 1; WQ < arguments.length; WQ++) {
        var XQ = null != arguments[WQ] ? arguments[WQ] : {};
        WQ % 2 ? PW(Object(XQ), !0).forEach((function(WQ) {
          JW(QQ, WQ, XQ[WQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : PW(Object(XQ)).forEach((function(WQ) {
          Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
        }))
      }
      return QQ
    }

    function JW(QQ, WQ, XQ) {
      return (WQ = function(QQ) {
        var WQ = function(QQ, WQ) {
          if ("object" !== sW(QQ) || null === QQ) return QQ;
          var XQ = QQ[Symbol.toPrimitive];
          if (void 0 !== XQ) {
            var wQ = XQ.call(QQ, WQ || "default");
            if ("object" !== sW(wQ)) return wQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" === sW(WQ) ? WQ : String(WQ)
      }(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }

    function rW(QQ, WQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return QQ
      }(QQ) || function(QQ, WQ) {
        var XQ = null == QQ ? null : "undefined" != typeof Symbol && QQ[Symbol.iterator] || QQ["@@iterator"];
        if (null != XQ) {
          var wQ, qQ, TQ, zQ, sQ = [],
            FQ = !0,
            PQ = !1;
          try {
            if (TQ = (XQ = XQ.call(QQ)).next, 0 === WQ) {
              if (Object(XQ) !== XQ) return;
              FQ = !1
            } else
              for (; !(FQ = (wQ = TQ.call(XQ)).done) && (sQ.push(wQ.value), sQ.length !== WQ); FQ = !0);
          } catch (QQ) {
            PQ = !0, qQ = QQ
          } finally {
            try {
              if (!FQ && null != XQ.return && (zQ = XQ.return(), Object(zQ) !== zQ)) return
            } finally {
              if (PQ) throw qQ
            }
          }
          return sQ
        }
      }(QQ, WQ) || IW(QQ, WQ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function IW(QQ, WQ) {
      if (QQ) {
        if ("string" === typeof QQ) return jW(QQ, WQ);
        var XQ = Object.prototype.toString.call(QQ).slice(8, -1);
        return "Object" === XQ && QQ.constructor && (XQ = QQ.constructor.name), "Map" === XQ || "Set" === XQ ? Array.from(QQ) : "Arguments" === XQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(XQ) ? jW(QQ, WQ) : void 0
      }
    }

    function jW(QQ, WQ) {
      (null == WQ || WQ > QQ.length) && (WQ = QQ.length);
      for (var XQ = 0, wQ = new Array(WQ); XQ < WQ; XQ++) wQ[XQ] = QQ[XQ];
      return wQ
    }
    var BW = function(QQ, WQ, XQ) {
        return QQ + (WQ - QQ) * XQ
      },
      yW = function(QQ) {
        return QQ.from !== QQ.to
      },
      VW = function QQ(WQ, XQ, wQ) {
        var qQ = ZQ((function(QQ, XQ) {
          if (yW(XQ)) {
            var wQ = rW(WQ(XQ.from, XQ.to, XQ.Fy), 2),
              qQ = wQ[0],
              TQ = wQ[1];
            return gW(gW({}, XQ), {}, {
              from: qQ,
              Fy: TQ
            })
          }
          return XQ
        }), XQ);
        return wQ < 1 ? ZQ((function(QQ, WQ) {
          return yW(WQ) ? gW(gW({}, WQ), {}, {
            Fy: BW(WQ.Fy, qQ[QQ].Fy, wQ),
            from: BW(WQ.from, qQ[QQ].from, wQ)
          }) : WQ
        }), XQ) : QQ(WQ, qQ, wQ - 1)
      };
    const DW = function(QQ, WQ, XQ, wQ, qQ) {
      var TQ, zQ, sQ, FQ, PQ = (TQ = QQ, zQ = WQ, [Object.keys(TQ), Object.keys(zQ)].reduce((function(QQ, WQ) {
          return QQ.filter((function(QQ) {
            return WQ.includes(QQ)
          }))
        }))),
        gQ = PQ.reduce((function(XQ, wQ) {
          return gW(gW({}, XQ), {}, JW({}, wQ, [QQ[wQ], WQ[wQ]]))
        }), {}),
        JQ = PQ.reduce((function(XQ, wQ) {
          return gW(gW({}, XQ), {}, JW({}, wQ, {
            from: QQ[wQ],
            Fy: 0,
            to: WQ[wQ]
          }))
        }), {}),
        rQ = -1,
        IQ = function() {
          return null
        };
      return IQ = XQ.isStepper ? function(wQ) {
          sQ || (sQ = wQ);
          var TQ = (wQ - sQ) / XQ.dt;
          JQ = VW(XQ, JQ, TQ), qQ(gW(gW(gW({}, QQ), WQ), ZQ((function(QQ, WQ) {
            return WQ.from
          }), JQ))), sQ = wQ, Object.values(JQ).filter(yW).length && (rQ = requestAnimationFrame(IQ))
        } : function(TQ) {
          FQ || (FQ = TQ);
          var zQ = (TQ - FQ) / wQ,
            sQ = ZQ((function(QQ, WQ) {
              return BW.apply(void 0, FW(WQ).concat([XQ(zQ)]))
            }), gQ);
          if (qQ(gW(gW(gW({}, QQ), WQ), sQ)), zQ < 1) rQ = requestAnimationFrame(IQ);
          else {
            var PQ = ZQ((function(QQ, WQ) {
              return BW.apply(void 0, FW(WQ).concat([XQ(1)]))
            }), gQ);
            qQ(gW(gW(gW({}, QQ), WQ), PQ))
          }
        },
        function() {
          return requestAnimationFrame(IQ),
            function() {
              cancelAnimationFrame(rQ)
            }
        }
    };

    function pW(QQ) {
      return pW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, pW(QQ)
    }
    var GW = ["children", "gI", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];

    function UW(QQ, WQ) {
      if (null == QQ) return {};
      var XQ, wQ, qQ = function(QQ, WQ) {
        if (null == QQ) return {};
        var XQ, wQ, qQ = {},
          TQ = Object.keys(QQ);
        for (wQ = 0; wQ < TQ.length; wQ++) XQ = TQ[wQ], WQ.indexOf(XQ) >= 0 || (qQ[XQ] = QQ[XQ]);
        return qQ
      }(QQ, WQ);
      if (Object.getOwnPropertySymbols) {
        var TQ = Object.getOwnPropertySymbols(QQ);
        for (wQ = 0; wQ < TQ.length; wQ++) XQ = TQ[wQ], WQ.indexOf(XQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, XQ) && (qQ[XQ] = QQ[XQ])
      }
      return qQ
    }

    function bW(QQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return vW(QQ)
      }(QQ) || function(QQ) {
        if ("undefined" !== typeof Symbol && null != QQ[Symbol.iterator] || null != QQ["@@iterator"]) return Array.from(QQ)
      }(QQ) || function(QQ, WQ) {
        if (!QQ) return;
        if ("string" === typeof QQ) return vW(QQ, WQ);
        var XQ = Object.prototype.toString.call(QQ).slice(8, -1);
        "Object" === XQ && QQ.constructor && (XQ = QQ.constructor.name);
        if ("Map" === XQ || "Set" === XQ) return Array.from(QQ);
        if ("Arguments" === XQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(XQ)) return vW(QQ, WQ)
      }(QQ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function vW(QQ, WQ) {
      (null == WQ || WQ > QQ.length) && (WQ = QQ.length);
      for (var XQ = 0, wQ = new Array(WQ); XQ < WQ; XQ++) wQ[XQ] = QQ[XQ];
      return wQ
    }

    function dW(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function HW(QQ) {
      for (var WQ = 1; WQ < arguments.length; WQ++) {
        var XQ = null != arguments[WQ] ? arguments[WQ] : {};
        WQ % 2 ? dW(Object(XQ), !0).forEach((function(WQ) {
          aW(QQ, WQ, XQ[WQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : dW(Object(XQ)).forEach((function(WQ) {
          Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
        }))
      }
      return QQ
    }

    function aW(QQ, WQ, XQ) {
      return (WQ = hW(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }

    function lW(QQ, WQ) {
      for (var XQ = 0; XQ < WQ.length; XQ++) {
        var wQ = WQ[XQ];
        wQ.enumerable = wQ.enumerable || !1, wQ.configurable = !0, "value" in wQ && (wQ.writable = !0), Object.defineProperty(QQ, hW(wQ.key), wQ)
      }
    }

    function hW(QQ) {
      var WQ = function(QQ, WQ) {
        if ("object" !== pW(QQ) || null === QQ) return QQ;
        var XQ = QQ[Symbol.toPrimitive];
        if (void 0 !== XQ) {
          var wQ = XQ.call(QQ, WQ || "default");
          if ("object" !== pW(wQ)) return wQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" === pW(WQ) ? WQ : String(WQ)
    }

    function iW(QQ, WQ) {
      return iW = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(QQ, WQ) {
        return QQ.__proto__ = WQ, QQ
      }, iW(QQ, WQ)
    }

    function cW(QQ) {
      var WQ = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (QQ) {
          return !1
        }
      }();
      return function() {
        var XQ, wQ = EW(QQ);
        if (WQ) {
          var qQ = EW(this).constructor;
          XQ = Reflect.construct(wQ, arguments, qQ)
        } else XQ = wQ.apply(this, arguments);
        return AW(this, XQ)
      }
    }

    function AW(QQ, WQ) {
      if (WQ && ("object" === pW(WQ) || "function" === typeof WQ)) return WQ;
      if (void 0 !== WQ) throw new TypeError("Derived constructors may only return object or undefined");
      return RW(QQ)
    }

    function RW(QQ) {
      if (void 0 === QQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return QQ
    }

    function EW(QQ) {
      return EW = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(QQ) {
        return QQ.__proto__ || Object.getPrototypeOf(QQ)
      }, EW(QQ)
    }
    var CW = function(QQ) {
      ! function(QQ, WQ) {
        if ("function" !== typeof WQ && null !== WQ) throw new TypeError("Super expression must either be null or a function");
        QQ.prototype = Object.create(WQ && WQ.prototype, {
          constructor: {
            value: QQ,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(QQ, "prototype", {
          writable: !1
        }), WQ && iW(QQ, WQ)
      }(zQ, QQ);
      var WQ, XQ, qQ, TQ = cW(zQ);

      function zQ(QQ, WQ) {
        var XQ;
        ! function(QQ, WQ) {
          if (!(QQ instanceof WQ)) throw new TypeError("Cannot call a class as a function")
        }(this, zQ);
        var wQ = (XQ = TQ.call(this, QQ, WQ)).props,
          qQ = wQ.isActive,
          sQ = wQ.attributeName,
          FQ = wQ.from,
          PQ = wQ.to,
          gQ = wQ.steps,
          JQ = wQ.children,
          rQ = wQ.duration;
        if (XQ.handleStyleChange = XQ.handleStyleChange.bind(RW(XQ)), XQ.changeStyle = XQ.changeStyle.bind(RW(XQ)), !qQ || rQ <= 0) return XQ.state = {
          style: {}
        }, "function" === typeof JQ && (XQ.state = {
          style: PQ
        }), AW(XQ);
        if (gQ && gQ.length) XQ.state = {
          style: gQ[0].style
        };
        else if (FQ) {
          if ("function" === typeof JQ) return XQ.state = {
            style: FQ
          }, AW(XQ);
          XQ.state = {
            style: sQ ? aW({}, sQ, FQ) : FQ
          }
        } else XQ.state = {
          style: {}
        };
        return XQ
      }
      return WQ = zQ, (XQ = [{
        key: "componentDidMount",
        value: function() {
          var QQ = this.props,
            WQ = QQ.isActive,
            XQ = QQ.canBegin;
          this.mounted = !0, WQ && XQ && this.runAnimation(this.props)
        }
      }, {
        key: "componentDidUpdate",
        value: function(QQ) {
          var WQ = this.props,
            XQ = WQ.isActive,
            wQ = WQ.canBegin,
            qQ = WQ.attributeName,
            TQ = WQ.shouldReAnimate,
            zQ = WQ.to,
            sQ = WQ.from,
            FQ = this.state.style;
          if (wQ)
            if (XQ) {
              if (!(uQ(QQ.to, zQ) && QQ.canBegin && QQ.isActive)) {
                var PQ = !QQ.canBegin || !QQ.isActive;
                this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
                var gQ = PQ || TQ ? sQ : QQ.to;
                if (this.state && FQ) {
                  var JQ = {
                    style: qQ ? aW({}, qQ, gQ) : gQ
                  };
                  (qQ && FQ[qQ] !== gQ || !qQ && FQ !== gQ) && this.setState(JQ)
                }
                this.runAnimation(HW(HW({}, this.props), {}, {
                  from: gQ,
                  gI: 0
                }))
              }
            } else {
              var rQ = {
                style: qQ ? aW({}, qQ, zQ) : zQ
              };
              this.state && FQ && (qQ && FQ[qQ] !== zQ || !qQ && FQ !== zQ) && this.setState(rQ)
            }
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          this.mounted = !1;
          var QQ = this.props.onAnimationEnd;
          this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), QQ && QQ()
        }
      }, {
        key: "handleStyleChange",
        value: function(QQ) {
          this.changeStyle(QQ)
        }
      }, {
        key: "changeStyle",
        value: function(QQ) {
          this.mounted && this.setState({
            style: QQ
          })
        }
      }, {
        key: "runJSAnimation",
        value: function(QQ) {
          var WQ = this,
            XQ = QQ.from,
            wQ = QQ.to,
            qQ = QQ.duration,
            TQ = QQ.easing,
            zQ = QQ.gI,
            sQ = QQ.onAnimationEnd,
            FQ = QQ.onAnimationStart,
            PQ = DW(XQ, wQ, zW(TQ), qQ, this.changeStyle);
          this.manager.start([FQ, zQ, function() {
            WQ.stopJSAnimation = PQ()
          }, qQ, sQ])
        }
      }, {
        key: "runStepAnimation",
        value: function(QQ) {
          var WQ = this,
            XQ = QQ.steps,
            wQ = QQ.gI,
            qQ = QQ.onAnimationStart,
            TQ = XQ[0],
            zQ = TQ.style,
            sQ = TQ.duration,
            FQ = void 0 === sQ ? 0 : sQ;
          return this.manager.start([qQ].concat(bW(XQ.reduce((function(QQ, wQ, qQ) {
            if (0 === qQ) return QQ;
            var TQ = wQ.duration,
              zQ = wQ.easing,
              sQ = void 0 === zQ ? "ease" : zQ,
              FQ = wQ.style,
              PQ = wQ.properties,
              gQ = wQ.onAnimationEnd,
              JQ = qQ > 0 ? XQ[qQ - 1] : wQ,
              rQ = PQ || Object.keys(FQ);
            if ("function" === typeof sQ || "spring" === sQ) return [].concat(bW(QQ), [WQ.runJSAnimation.bind(WQ, {
              from: JQ.style,
              to: FQ,
              duration: TQ,
              easing: sQ
            }), TQ]);
            var IQ = OQ(rQ, TQ, sQ),
              jQ = HW(HW(HW({}, JQ.style), FQ), {}, {
                transition: IQ
              });
            return [].concat(bW(QQ), [jQ, TQ, gQ]).filter(NQ)
          }), [zQ, Math.max(FQ, wQ)])), [QQ.onAnimationEnd]))
        }
      }, {
        key: "runAnimation",
        value: function(QQ) {
          this.manager || (this.manager = oQ());
          var WQ = QQ.gI,
            XQ = QQ.duration,
            wQ = QQ.attributeName,
            qQ = QQ.to,
            TQ = QQ.easing,
            zQ = QQ.onAnimationStart,
            sQ = QQ.onAnimationEnd,
            FQ = QQ.steps,
            PQ = QQ.children,
            gQ = this.manager;
          if (this.unSubscribe = gQ.subscribe(this.handleStyleChange), "function" !== typeof TQ && "function" !== typeof PQ && "spring" !== TQ)
            if (FQ.length > 1) this.runStepAnimation(QQ);
            else {
              var JQ = wQ ? aW({}, wQ, qQ) : qQ,
                rQ = OQ(Object.keys(JQ), XQ, TQ);
              gQ.start([zQ, WQ, HW(HW({}, JQ), {}, {
                transition: rQ
              }), XQ, sQ])
            }
          else this.runJSAnimation(QQ)
        }
      }, {
        key: "render",
        value: function() {
          var QQ = this.props,
            WQ = QQ.children,
            XQ = (QQ.gI, QQ.duration),
            qQ = (QQ.attributeName, QQ.easing, QQ.isActive),
            TQ = (QQ.steps, QQ.from, QQ.to, QQ.canBegin, QQ.onAnimationEnd, QQ.shouldReAnimate, QQ.onAnimationReStart, UW(QQ, GW)),
            zQ = wQ.Children.count(WQ),
            sQ = this.state.style;
          if ("function" === typeof WQ) return WQ(sQ);
          if (!qQ || 0 === zQ || XQ <= 0) return WQ;
          var FQ = function(QQ) {
            var WQ = QQ.props,
              XQ = WQ.style,
              qQ = void 0 === XQ ? {} : XQ,
              zQ = WQ.className;
            return (0, wQ.cloneElement)(QQ, HW(HW({}, TQ), {}, {
              style: HW(HW({}, qQ), sQ),
              className: zQ
            }))
          };
          return 1 === zQ ? FQ(wQ.Children.only(WQ)) : wQ.createElement("div", null, wQ.Children.map(WQ, (function(QQ) {
            return FQ(QQ)
          })))
        }
      }]) && lW(WQ.prototype, XQ), qQ && lW(WQ, qQ), Object.defineProperty(WQ, "prototype", {
        writable: !1
      }), zQ
    }(wQ.PureComponent);
    CW.displayName = "Animate", CW.defaultProps = {
      gI: 0,
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
    }, CW.propTypes = {
      from: TQ().oneOfType([TQ().object, TQ().string]),
      to: TQ().oneOfType([TQ().object, TQ().string]),
      attributeName: TQ().string,
      duration: TQ().number,
      gI: TQ().number,
      easing: TQ().oneOfType([TQ().string, TQ().func]),
      steps: TQ().arrayOf(TQ().shape({
        duration: TQ().number.isRequired,
        style: TQ().object.isRequired,
        easing: TQ().oneOfType([TQ().oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), TQ().func]),
        properties: TQ().arrayOf("string"),
        onAnimationEnd: TQ().func
      })),
      children: TQ().oneOfType([TQ().node, TQ().func]),
      isActive: TQ().bool,
      canBegin: TQ().bool,
      onAnimationEnd: TQ().func,
      shouldReAnimate: TQ().bool,
      onAnimationStart: TQ().func,
      onAnimationReStart: TQ().func
    };
    const uW = CW
  },
  6758: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => SQ
    });
    var wQ, qQ = XQ(61),
      TQ = XQ(5423),
      zQ = XQ(6513),
      sQ = XQ(5622),
      FQ = XQ.n(sQ),
      PQ = XQ(6546),
      gQ = XQ.n(PQ),
      JQ = XQ(5766),
      rQ = XQ.n(JQ),
      IQ = XQ(5536),
      jQ = XQ.n(IQ),
      BQ = XQ(6590),
      yQ = XQ.n(BQ),
      VQ = XQ(6752),
      DQ = XQ(6496),
      pQ = XQ(6339),
      GQ = XQ(6675),
      UQ = XQ(6345),
      bQ = XQ(5520),
      vQ = XQ(6526),
      dQ = XQ(5775),
      HQ = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
      aQ = ["key"];

    function lQ(QQ) {
      return lQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, lQ(QQ)
    }

    function hQ(QQ, WQ) {
      if (null == QQ) return {};
      var XQ, wQ, qQ = function(QQ, WQ) {
        if (null == QQ) return {};
        var XQ = {};
        for (var wQ in QQ)
          if (Object.prototype.hasOwnProperty.call(QQ, wQ)) {
            if (WQ.indexOf(wQ) >= 0) continue;
            XQ[wQ] = QQ[wQ]
          } return XQ
      }(QQ, WQ);
      if (Object.getOwnPropertySymbols) {
        var TQ = Object.getOwnPropertySymbols(QQ);
        for (wQ = 0; wQ < TQ.length; wQ++) XQ = TQ[wQ], WQ.indexOf(XQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, XQ) && (qQ[XQ] = QQ[XQ])
      }
      return qQ
    }

    function iQ() {
      return iQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var WQ = 1; WQ < arguments.length; WQ++) {
          var XQ = arguments[WQ];
          for (var wQ in XQ) Object.prototype.hasOwnProperty.call(XQ, wQ) && (QQ[wQ] = XQ[wQ])
        }
        return QQ
      }, iQ.apply(this, arguments)
    }

    function cQ(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function AQ(QQ) {
      for (var WQ = 1; WQ < arguments.length; WQ++) {
        var XQ = null != arguments[WQ] ? arguments[WQ] : {};
        WQ % 2 ? cQ(Object(XQ), !0).forEach((function(WQ) {
          kQ(QQ, WQ, XQ[WQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : cQ(Object(XQ)).forEach((function(WQ) {
          Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
        }))
      }
      return QQ
    }

    function RQ(QQ, WQ) {
      for (var XQ = 0; XQ < WQ.length; XQ++) {
        var wQ = WQ[XQ];
        wQ.enumerable = wQ.enumerable || !1, wQ.configurable = !0, "value" in wQ && (wQ.writable = !0), Object.defineProperty(QQ, fQ(wQ.key), wQ)
      }
    }

    function EQ(QQ, WQ, XQ) {
      return WQ = uQ(WQ),
        function(QQ, WQ) {
          if (WQ && ("object" === lQ(WQ) || "function" === typeof WQ)) return WQ;
          if (void 0 !== WQ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(QQ) {
            if (void 0 === QQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return QQ
          }(QQ)
        }(QQ, CQ() ? Reflect.construct(WQ, XQ || [], uQ(QQ).constructor) : WQ.apply(QQ, XQ))
    }

    function CQ() {
      try {
        var QQ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (QQ) {}
      return (CQ = function() {
        return !!QQ
      })()
    }

    function uQ(QQ) {
      return uQ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(QQ) {
        return QQ.__proto__ || Object.getPrototypeOf(QQ)
      }, uQ(QQ)
    }

    function LQ(QQ, WQ) {
      return LQ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(QQ, WQ) {
        return QQ.__proto__ = WQ, QQ
      }, LQ(QQ, WQ)
    }

    function kQ(QQ, WQ, XQ) {
      return (WQ = fQ(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }

    function fQ(QQ) {
      var WQ = function(QQ, WQ) {
        if ("object" != lQ(QQ) || !QQ) return QQ;
        var XQ = QQ[Symbol.toPrimitive];
        if (void 0 !== XQ) {
          var wQ = XQ.call(QQ, WQ || "default");
          if ("object" != lQ(wQ)) return wQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == lQ(WQ) ? WQ : WQ + ""
    }
    var SQ = function(QQ) {
      function WQ() {
        var QQ;
        ! function(QQ, WQ) {
          if (!(QQ instanceof WQ)) throw new TypeError("Cannot call a class as a function")
        }(this, WQ);
        for (var XQ = arguments.length, wQ = new Array(XQ), qQ = 0; qQ < XQ; qQ++) wQ[qQ] = arguments[qQ];
        return kQ(QQ = EQ(this, WQ, [].concat(wQ)), "state", {
          isAnimationFinished: !0
        }), kQ(QQ, "id", (0, bQ.L)("recharts-area-")), kQ(QQ, "handleAnimationEnd", (function() {
          var WQ = QQ.props.onAnimationEnd;
          QQ.setState({
            isAnimationFinished: !0
          }), FQ()(WQ) && WQ()
        })), kQ(QQ, "handleAnimationStart", (function() {
          var WQ = QQ.props.onAnimationStart;
          QQ.setState({
            isAnimationFinished: !1
          }), FQ()(WQ) && WQ()
        })), QQ
      }
      return function(QQ, WQ) {
        if ("function" !== typeof WQ && null !== WQ) throw new TypeError("Super expression must either be null or a function");
        QQ.prototype = Object.create(WQ && WQ.prototype, {
          constructor: {
            value: QQ,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(QQ, "prototype", {
          writable: !1
        }), WQ && LQ(QQ, WQ)
      }(WQ, QQ), XQ = WQ, wQ = [{
        key: "renderDots",
        value: function(QQ, XQ, wQ) {
          var TQ = this.props.isAnimationActive,
            zQ = this.state.isAnimationFinished;
          if (TQ && !zQ) return null;
          var sQ = this.props,
            FQ = sQ.dot,
            PQ = sQ.points,
            gQ = sQ.dataKey,
            JQ = (0, dQ.e)(this.props, !1),
            rQ = (0, dQ.e)(FQ, !0),
            IQ = PQ.map((function(QQ, XQ) {
              var wQ = AQ(AQ(AQ({
                key: "dot-".concat(XQ),
                r: 3
              }, JQ), rQ), {}, {
                index: XQ,
                cx: QQ.x,
                cy: QQ.y,
                dataKey: gQ,
                value: QQ.value,
                payload: QQ.payload,
                points: PQ
              });
              return WQ.renderDotItem(FQ, wQ)
            })),
            jQ = {
              clipPath: QQ ? "url(#clipPath-".concat(XQ ? "" : "dots-").concat(wQ, ")") : null
            };
          return qQ.createElement(pQ.d, iQ({
            className: "recharts-area-dots"
          }, jQ), IQ)
        }
      }, {
        key: "renderHorizontalRect",
        value: function(QQ) {
          var WQ = this.props,
            XQ = WQ.baseLine,
            wQ = WQ.points,
            TQ = WQ.strokeWidth,
            zQ = wQ[0].x,
            sQ = wQ[wQ.length - 1].x,
            FQ = QQ * Math.abs(zQ - sQ),
            PQ = gQ()(wQ.map((function(QQ) {
              return QQ.y || 0
            })));
          return (0, bQ.D)(XQ) && "number" === typeof XQ ? PQ = Math.max(XQ, PQ) : XQ && Array.isArray(XQ) && XQ.length && (PQ = Math.max(gQ()(XQ.map((function(QQ) {
            return QQ.y || 0
          }))), PQ)), (0, bQ.D)(PQ) ? qQ.createElement("rect", {
            x: zQ < sQ ? zQ : zQ - FQ,
            y: 0,
            width: FQ,
            height: Math.floor(PQ + (TQ ? parseInt("".concat(TQ), 10) : 1))
          }) : null
        }
      }, {
        key: "renderVerticalRect",
        value: function(QQ) {
          var WQ = this.props,
            XQ = WQ.baseLine,
            wQ = WQ.points,
            TQ = WQ.strokeWidth,
            zQ = wQ[0].y,
            sQ = wQ[wQ.length - 1].y,
            FQ = QQ * Math.abs(zQ - sQ),
            PQ = gQ()(wQ.map((function(QQ) {
              return QQ.x || 0
            })));
          return (0, bQ.D)(XQ) && "number" === typeof XQ ? PQ = Math.max(XQ, PQ) : XQ && Array.isArray(XQ) && XQ.length && (PQ = Math.max(gQ()(XQ.map((function(QQ) {
            return QQ.x || 0
          }))), PQ)), (0, bQ.D)(PQ) ? qQ.createElement("rect", {
            x: 0,
            y: zQ < sQ ? zQ : zQ - FQ,
            width: PQ + (TQ ? parseInt("".concat(TQ), 10) : 1),
            height: Math.floor(FQ)
          }) : null
        }
      }, {
        key: "renderClipRect",
        value: function(QQ) {
          return "vertical" === this.props.layout ? this.renderVerticalRect(QQ) : this.renderHorizontalRect(QQ)
        }
      }, {
        key: "renderAreaStatically",
        value: function(QQ, WQ, XQ, wQ) {
          var TQ = this.props,
            zQ = TQ.layout,
            sQ = TQ.type,
            FQ = TQ.stroke,
            PQ = TQ.connectNulls,
            gQ = TQ.isRange,
            JQ = (TQ.ref, hQ(TQ, HQ));
          return qQ.createElement(pQ.d, {
            clipPath: XQ ? "url(#clipPath-".concat(wQ, ")") : null
          }, qQ.createElement(VQ.b, iQ({}, (0, dQ.e)(JQ, !0), {
            points: QQ,
            connectNulls: PQ,
            type: sQ,
            baseLine: WQ,
            layout: zQ,
            stroke: "none",
            className: "recharts-area-area"
          })), "none" !== FQ && qQ.createElement(VQ.b, iQ({}, (0, dQ.e)(this.props, !1), {
            className: "recharts-area-curve",
            layout: zQ,
            type: sQ,
            connectNulls: PQ,
            fill: "none",
            points: QQ
          })), "none" !== FQ && gQ && qQ.createElement(VQ.b, iQ({}, (0, dQ.e)(this.props, !1), {
            className: "recharts-area-curve",
            layout: zQ,
            type: sQ,
            connectNulls: PQ,
            fill: "none",
            points: WQ
          })))
        }
      }, {
        key: "renderAreaWithAnimation",
        value: function(QQ, WQ) {
          var XQ = this,
            wQ = this.props,
            TQ = wQ.points,
            sQ = wQ.baseLine,
            FQ = wQ.isAnimationActive,
            PQ = wQ.animationBegin,
            gQ = wQ.animationDuration,
            JQ = wQ.animationEasing,
            IQ = wQ.animationId,
            BQ = this.state,
            yQ = BQ.prevPoints,
            VQ = BQ.prevBaseLine;
          return qQ.createElement(zQ.c, {
            gI: PQ,
            duration: gQ,
            isActive: FQ,
            easing: JQ,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "area-".concat(IQ),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(wQ) {
            var zQ = wQ.t;
            if (yQ) {
              var FQ, PQ = yQ.length / TQ.length,
                gQ = TQ.map((function(QQ, WQ) {
                  var XQ = Math.floor(WQ * PQ);
                  if (yQ[XQ]) {
                    var wQ = yQ[XQ],
                      qQ = (0, bQ.w)(wQ.x, QQ.x),
                      TQ = (0, bQ.w)(wQ.y, QQ.y);
                    return AQ(AQ({}, QQ), {}, {
                      x: qQ(zQ),
                      y: TQ(zQ)
                    })
                  }
                  return QQ
                }));
              return FQ = (0, bQ.D)(sQ) && "number" === typeof sQ ? (0, bQ.w)(VQ, sQ)(zQ) : rQ()(sQ) || jQ()(sQ) ? (0, bQ.w)(VQ, 0)(zQ) : sQ.map((function(QQ, WQ) {
                var XQ = Math.floor(WQ * PQ);
                if (VQ[XQ]) {
                  var wQ = VQ[XQ],
                    qQ = (0, bQ.w)(wQ.x, QQ.x),
                    TQ = (0, bQ.w)(wQ.y, QQ.y);
                  return AQ(AQ({}, QQ), {}, {
                    x: qQ(zQ),
                    y: TQ(zQ)
                  })
                }
                return QQ
              })), XQ.renderAreaStatically(gQ, FQ, QQ, WQ)
            }
            return qQ.createElement(pQ.d, null, qQ.createElement("defs", null, qQ.createElement("clipPath", {
              id: "animationClipPath-".concat(WQ)
            }, XQ.renderClipRect(zQ))), qQ.createElement(pQ.d, {
              clipPath: "url(#animationClipPath-".concat(WQ, ")")
            }, XQ.renderAreaStatically(TQ, sQ, QQ, WQ)))
          }))
        }
      }, {
        key: "renderArea",
        value: function(QQ, WQ) {
          var XQ = this.props,
            wQ = XQ.points,
            qQ = XQ.baseLine,
            TQ = XQ.isAnimationActive,
            zQ = this.state,
            sQ = zQ.prevPoints,
            FQ = zQ.prevBaseLine,
            PQ = zQ.totalLength;
          return TQ && wQ && wQ.length && (!sQ && PQ > 0 || !yQ()(sQ, wQ) || !yQ()(FQ, qQ)) ? this.renderAreaWithAnimation(QQ, WQ) : this.renderAreaStatically(wQ, qQ, QQ, WQ)
        }
      }, {
        key: "render",
        value: function() {
          var QQ, WQ = this.props,
            XQ = WQ.hide,
            wQ = WQ.dot,
            zQ = WQ.points,
            sQ = WQ.className,
            FQ = WQ.top,
            PQ = WQ.left,
            gQ = WQ.xAxis,
            JQ = WQ.yAxis,
            IQ = WQ.width,
            jQ = WQ.height,
            BQ = WQ.isAnimationActive,
            yQ = WQ.id;
          if (XQ || !zQ || !zQ.length) return null;
          var VQ = this.state.isAnimationFinished,
            DQ = 1 === zQ.length,
            UQ = (0, TQ.e)("recharts-area", sQ),
            bQ = gQ && gQ.allowDataOverflow,
            vQ = JQ && JQ.allowDataOverflow,
            HQ = bQ || vQ,
            aQ = rQ()(yQ) ? this.id : yQ,
            lQ = null !== (QQ = (0, dQ.e)(wQ, !1)) && void 0 !== QQ ? QQ : {
              r: 3,
              strokeWidth: 2
            },
            hQ = lQ.r,
            iQ = void 0 === hQ ? 3 : hQ,
            cQ = lQ.strokeWidth,
            AQ = void 0 === cQ ? 2 : cQ,
            RQ = ((0, dQ.q)(wQ) ? wQ : {}).clipDot,
            EQ = void 0 === RQ || RQ,
            CQ = 2 * iQ + AQ;
          return qQ.createElement(pQ.d, {
            className: UQ
          }, bQ || vQ ? qQ.createElement("defs", null, qQ.createElement("clipPath", {
            id: "clipPath-".concat(aQ)
          }, qQ.createElement("rect", {
            x: bQ ? PQ : PQ - IQ / 2,
            y: vQ ? FQ : FQ - jQ / 2,
            width: bQ ? IQ : 2 * IQ,
            height: vQ ? jQ : 2 * jQ
          })), !EQ && qQ.createElement("clipPath", {
            id: "clipPath-dots-".concat(aQ)
          }, qQ.createElement("rect", {
            x: PQ - CQ / 2,
            y: FQ - CQ / 2,
            width: IQ + CQ,
            height: jQ + CQ
          }))) : null, DQ ? null : this.renderArea(HQ, aQ), (wQ || DQ) && this.renderDots(HQ, EQ, aQ), (!BQ || VQ) && GQ.b.renderCallByParent(this.props, zQ))
        }
      }], sQ = [{
        key: "getDerivedStateFromProps",
        value: function(QQ, WQ) {
          return QQ.animationId !== WQ.prevAnimationId ? {
            prevAnimationId: QQ.animationId,
            curPoints: QQ.points,
            curBaseLine: QQ.baseLine,
            prevPoints: WQ.curPoints,
            prevBaseLine: WQ.curBaseLine
          } : QQ.points !== WQ.curPoints || QQ.baseLine !== WQ.curBaseLine ? {
            curPoints: QQ.points,
            curBaseLine: QQ.baseLine
          } : null
        }
      }], wQ && RQ(XQ.prototype, wQ), sQ && RQ(XQ, sQ), Object.defineProperty(XQ, "prototype", {
        writable: !1
      }), XQ;
      var XQ, wQ, sQ
    }(qQ.PureComponent);
    wQ = SQ, kQ(SQ, "displayName", "Area"), kQ(SQ, "defaultProps", {
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
      isAnimationActive: !UQ.c.isSsr,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease"
    }), kQ(SQ, "getBaseValue", (function(QQ, WQ, XQ, wQ) {
      var qQ = QQ.layout,
        TQ = QQ.baseValue,
        zQ = WQ.props.baseValue,
        sQ = null !== zQ && void 0 !== zQ ? zQ : TQ;
      if ((0, bQ.D)(sQ) && "number" === typeof sQ) return sQ;
      var FQ = "horizontal" === qQ ? wQ : XQ,
        PQ = FQ.scale.domain();
      if ("number" === FQ.type) {
        var gQ = Math.max(PQ[0], PQ[1]),
          JQ = Math.min(PQ[0], PQ[1]);
        return "dataMin" === sQ ? JQ : "dataMax" === sQ || gQ < 0 ? gQ : Math.max(Math.min(PQ[0], PQ[1]), 0)
      }
      return "dataMin" === sQ ? PQ[0] : "dataMax" === sQ ? PQ[1] : PQ[0]
    })), kQ(SQ, "getComposedData", (function(QQ) {
      var WQ, XQ = QQ.props,
        qQ = QQ.item,
        TQ = QQ.xAxis,
        zQ = QQ.yAxis,
        sQ = QQ.xAxisTicks,
        FQ = QQ.yAxisTicks,
        PQ = QQ.bandSize,
        gQ = QQ.dataKey,
        JQ = QQ.stackedData,
        rQ = QQ.dataStartIndex,
        IQ = QQ.displayedData,
        jQ = QQ.offset,
        BQ = XQ.layout,
        yQ = JQ && JQ.length,
        VQ = wQ.getBaseValue(XQ, qQ, TQ, zQ),
        DQ = "horizontal" === BQ,
        pQ = !1,
        GQ = IQ.map((function(QQ, WQ) {
          var XQ;
          yQ ? XQ = JQ[rQ + WQ] : (XQ = (0, vQ.lb)(QQ, gQ), Array.isArray(XQ) ? pQ = !0 : XQ = [VQ, XQ]);
          var wQ = null == XQ[1] || yQ && null == (0, vQ.lb)(QQ, gQ);
          return DQ ? {
            x: (0, vQ.G)({
              axis: TQ,
              ticks: sQ,
              bandSize: PQ,
              entry: QQ,
              index: WQ
            }),
            y: wQ ? null : zQ.scale(XQ[1]),
            value: XQ,
            payload: QQ
          } : {
            x: wQ ? null : TQ.scale(XQ[1]),
            y: (0, vQ.G)({
              axis: zQ,
              ticks: FQ,
              bandSize: PQ,
              entry: QQ,
              index: WQ
            }),
            value: XQ,
            payload: QQ
          }
        }));
      return WQ = yQ || pQ ? GQ.map((function(QQ) {
        var WQ = Array.isArray(QQ.value) ? QQ.value[0] : null;
        return DQ ? {
          x: QQ.x,
          y: null != WQ && null != QQ.y ? zQ.scale(WQ) : null
        } : {
          x: null != WQ ? TQ.scale(WQ) : null,
          y: QQ.y
        }
      })) : DQ ? zQ.scale(VQ) : TQ.scale(VQ), AQ({
        points: GQ,
        baseLine: WQ,
        layout: BQ,
        isRange: pQ
      }, jQ)
    })), kQ(SQ, "renderDotItem", (function(QQ, WQ) {
      var XQ;
      if (qQ.isValidElement(QQ)) XQ = qQ.cloneElement(QQ, WQ);
      else if (FQ()(QQ)) XQ = QQ(WQ);
      else {
        var wQ = (0, TQ.e)("recharts-area-dot", "boolean" !== typeof QQ ? QQ.className : ""),
          zQ = WQ.key,
          sQ = hQ(WQ, aQ);
        XQ = qQ.createElement(DQ.c, iQ({}, sQ, {
          key: zQ,
          className: wQ
        }))
      }
      return XQ
    }))
  },
  6664: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => xQ
    });
    var wQ = XQ(61),
      qQ = XQ(5423),
      TQ = XQ(6513),
      zQ = XQ(6590),
      sQ = XQ.n(zQ),
      FQ = XQ(5766),
      PQ = XQ.n(FQ),
      gQ = XQ(6339),
      JQ = XQ(6596),
      rQ = XQ(6666),
      IQ = XQ(6675),
      jQ = XQ(5520),
      BQ = XQ(5775),
      yQ = XQ(6345),
      VQ = XQ(6526),
      DQ = XQ(5800),
      pQ = XQ(6329),
      GQ = XQ(6688),
      UQ = ["x", "y"];

    function bQ(QQ) {
      return bQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, bQ(QQ)
    }

    function vQ() {
      return vQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var WQ = 1; WQ < arguments.length; WQ++) {
          var XQ = arguments[WQ];
          for (var wQ in XQ) Object.prototype.hasOwnProperty.call(XQ, wQ) && (QQ[wQ] = XQ[wQ])
        }
        return QQ
      }, vQ.apply(this, arguments)
    }

    function dQ(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function HQ(QQ) {
      for (var WQ = 1; WQ < arguments.length; WQ++) {
        var XQ = null != arguments[WQ] ? arguments[WQ] : {};
        WQ % 2 ? dQ(Object(XQ), !0).forEach((function(WQ) {
          aQ(QQ, WQ, XQ[WQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : dQ(Object(XQ)).forEach((function(WQ) {
          Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
        }))
      }
      return QQ
    }

    function aQ(QQ, WQ, XQ) {
      return (WQ = function(QQ) {
        var WQ = function(QQ, WQ) {
          if ("object" != bQ(QQ) || !QQ) return QQ;
          var XQ = QQ[Symbol.toPrimitive];
          if (void 0 !== XQ) {
            var wQ = XQ.call(QQ, WQ || "default");
            if ("object" != bQ(wQ)) return wQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == bQ(WQ) ? WQ : WQ + ""
      }(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }

    function lQ(QQ, WQ) {
      if (null == QQ) return {};
      var XQ, wQ, qQ = function(QQ, WQ) {
        if (null == QQ) return {};
        var XQ = {};
        for (var wQ in QQ)
          if (Object.prototype.hasOwnProperty.call(QQ, wQ)) {
            if (WQ.indexOf(wQ) >= 0) continue;
            XQ[wQ] = QQ[wQ]
          } return XQ
      }(QQ, WQ);
      if (Object.getOwnPropertySymbols) {
        var TQ = Object.getOwnPropertySymbols(QQ);
        for (wQ = 0; wQ < TQ.length; wQ++) XQ = TQ[wQ], WQ.indexOf(XQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, XQ) && (qQ[XQ] = QQ[XQ])
      }
      return qQ
    }

    function hQ(QQ, WQ) {
      var XQ = QQ.x,
        wQ = QQ.y,
        qQ = lQ(QQ, UQ),
        TQ = "".concat(XQ),
        zQ = parseInt(TQ, 10),
        sQ = "".concat(wQ),
        FQ = parseInt(sQ, 10),
        PQ = "".concat(WQ.height || qQ.height),
        gQ = parseInt(PQ, 10),
        JQ = "".concat(WQ.width || qQ.width),
        rQ = parseInt(JQ, 10);
      return HQ(HQ(HQ(HQ(HQ({}, WQ), qQ), zQ ? {
        x: zQ
      } : {}), FQ ? {
        y: FQ
      } : {}), {}, {
        height: gQ,
        width: rQ,
        name: WQ.name,
        radius: WQ.radius
      })
    }

    function iQ(QQ) {
      return wQ.createElement(GQ.d, vQ({
        shapeType: "rectangle",
        propTransformer: hQ,
        activeClassName: "recharts-active-bar"
      }, QQ))
    }
    var cQ, AQ = ["value", "background"];

    function RQ(QQ) {
      return RQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, RQ(QQ)
    }

    function EQ(QQ, WQ) {
      if (null == QQ) return {};
      var XQ, wQ, qQ = function(QQ, WQ) {
        if (null == QQ) return {};
        var XQ = {};
        for (var wQ in QQ)
          if (Object.prototype.hasOwnProperty.call(QQ, wQ)) {
            if (WQ.indexOf(wQ) >= 0) continue;
            XQ[wQ] = QQ[wQ]
          } return XQ
      }(QQ, WQ);
      if (Object.getOwnPropertySymbols) {
        var TQ = Object.getOwnPropertySymbols(QQ);
        for (wQ = 0; wQ < TQ.length; wQ++) XQ = TQ[wQ], WQ.indexOf(XQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, XQ) && (qQ[XQ] = QQ[XQ])
      }
      return qQ
    }

    function CQ() {
      return CQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var WQ = 1; WQ < arguments.length; WQ++) {
          var XQ = arguments[WQ];
          for (var wQ in XQ) Object.prototype.hasOwnProperty.call(XQ, wQ) && (QQ[wQ] = XQ[wQ])
        }
        return QQ
      }, CQ.apply(this, arguments)
    }

    function uQ(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function LQ(QQ) {
      for (var WQ = 1; WQ < arguments.length; WQ++) {
        var XQ = null != arguments[WQ] ? arguments[WQ] : {};
        WQ % 2 ? uQ(Object(XQ), !0).forEach((function(WQ) {
          eQ(QQ, WQ, XQ[WQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : uQ(Object(XQ)).forEach((function(WQ) {
          Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
        }))
      }
      return QQ
    }

    function kQ(QQ, WQ) {
      for (var XQ = 0; XQ < WQ.length; XQ++) {
        var wQ = WQ[XQ];
        wQ.enumerable = wQ.enumerable || !1, wQ.configurable = !0, "value" in wQ && (wQ.writable = !0), Object.defineProperty(QQ, nQ(wQ.key), wQ)
      }
    }

    function fQ(QQ, WQ, XQ) {
      return WQ = tQ(WQ),
        function(QQ, WQ) {
          if (WQ && ("object" === RQ(WQ) || "function" === typeof WQ)) return WQ;
          if (void 0 !== WQ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(QQ) {
            if (void 0 === QQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return QQ
          }(QQ)
        }(QQ, SQ() ? Reflect.construct(WQ, XQ || [], tQ(QQ).constructor) : WQ.apply(QQ, XQ))
    }

    function SQ() {
      try {
        var QQ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (QQ) {}
      return (SQ = function() {
        return !!QQ
      })()
    }

    function tQ(QQ) {
      return tQ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(QQ) {
        return QQ.__proto__ || Object.getPrototypeOf(QQ)
      }, tQ(QQ)
    }

    function oQ(QQ, WQ) {
      return oQ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(QQ, WQ) {
        return QQ.__proto__ = WQ, QQ
      }, oQ(QQ, WQ)
    }

    function eQ(QQ, WQ, XQ) {
      return (WQ = nQ(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }

    function nQ(QQ) {
      var WQ = function(QQ, WQ) {
        if ("object" != RQ(QQ) || !QQ) return QQ;
        var XQ = QQ[Symbol.toPrimitive];
        if (void 0 !== XQ) {
          var wQ = XQ.call(QQ, WQ || "default");
          if ("object" != RQ(wQ)) return wQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == RQ(WQ) ? WQ : WQ + ""
    }
    var xQ = function(QQ) {
      function WQ() {
        var QQ;
        ! function(QQ, WQ) {
          if (!(QQ instanceof WQ)) throw new TypeError("Cannot call a class as a function")
        }(this, WQ);
        for (var XQ = arguments.length, wQ = new Array(XQ), qQ = 0; qQ < XQ; qQ++) wQ[qQ] = arguments[qQ];
        return eQ(QQ = fQ(this, WQ, [].concat(wQ)), "state", {
          isAnimationFinished: !1
        }), eQ(QQ, "id", (0, jQ.L)("recharts-bar-")), eQ(QQ, "handleAnimationEnd", (function() {
          var WQ = QQ.props.onAnimationEnd;
          QQ.setState({
            isAnimationFinished: !0
          }), WQ && WQ()
        })), eQ(QQ, "handleAnimationStart", (function() {
          var WQ = QQ.props.onAnimationStart;
          QQ.setState({
            isAnimationFinished: !1
          }), WQ && WQ()
        })), QQ
      }
      return function(QQ, WQ) {
        if ("function" !== typeof WQ && null !== WQ) throw new TypeError("Super expression must either be null or a function");
        QQ.prototype = Object.create(WQ && WQ.prototype, {
          constructor: {
            value: QQ,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(QQ, "prototype", {
          writable: !1
        }), WQ && oQ(QQ, WQ)
      }(WQ, QQ), XQ = WQ, zQ = [{
        key: "renderRectanglesStatically",
        value: function(QQ) {
          var WQ = this,
            XQ = this.props,
            qQ = XQ.shape,
            TQ = XQ.dataKey,
            zQ = XQ.activeIndex,
            sQ = XQ.activeBar,
            FQ = (0, BQ.e)(this.props, !1);
          return QQ && QQ.map((function(QQ, XQ) {
            var PQ = XQ === zQ,
              JQ = PQ ? sQ : qQ,
              rQ = LQ(LQ(LQ({}, FQ), QQ), {}, {
                isActive: PQ,
                option: JQ,
                index: XQ,
                dataKey: TQ,
                onAnimationStart: WQ.handleAnimationStart,
                onAnimationEnd: WQ.handleAnimationEnd
              });
            return wQ.createElement(gQ.d, CQ({
              className: "recharts-bar-rectangle"
            }, (0, DQ.o)(WQ.props, QQ, XQ), {
              key: "rectangle-".concat(null === QQ || void 0 === QQ ? void 0 : QQ.x, "-").concat(null === QQ || void 0 === QQ ? void 0 : QQ.y, "-").concat(null === QQ || void 0 === QQ ? void 0 : QQ.value, "-").concat(XQ)
            }), wQ.createElement(iQ, rQ))
          }))
        }
      }, {
        key: "renderRectanglesWithAnimation",
        value: function() {
          var QQ = this,
            WQ = this.props,
            XQ = WQ.data,
            qQ = WQ.layout,
            zQ = WQ.isAnimationActive,
            sQ = WQ.animationBegin,
            FQ = WQ.animationDuration,
            PQ = WQ.animationEasing,
            JQ = WQ.animationId,
            rQ = this.state.prevData;
          return wQ.createElement(TQ.c, {
            gI: sQ,
            duration: FQ,
            isActive: zQ,
            easing: PQ,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "bar-".concat(JQ),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(WQ) {
            var TQ = WQ.t,
              zQ = XQ.map((function(QQ, WQ) {
                var XQ = rQ && rQ[WQ];
                if (XQ) {
                  var wQ = (0, jQ.w)(XQ.x, QQ.x),
                    zQ = (0, jQ.w)(XQ.y, QQ.y),
                    sQ = (0, jQ.w)(XQ.width, QQ.width),
                    FQ = (0, jQ.w)(XQ.height, QQ.height);
                  return LQ(LQ({}, QQ), {}, {
                    x: wQ(TQ),
                    y: zQ(TQ),
                    width: sQ(TQ),
                    height: FQ(TQ)
                  })
                }
                if ("horizontal" === qQ) {
                  var PQ = (0, jQ.w)(0, QQ.height)(TQ);
                  return LQ(LQ({}, QQ), {}, {
                    y: QQ.y + QQ.height - PQ,
                    height: PQ
                  })
                }
                var gQ = (0, jQ.w)(0, QQ.width)(TQ);
                return LQ(LQ({}, QQ), {}, {
                  width: gQ
                })
              }));
            return wQ.createElement(gQ.d, null, QQ.renderRectanglesStatically(zQ))
          }))
        }
      }, {
        key: "renderRectangles",
        value: function() {
          var QQ = this.props,
            WQ = QQ.data,
            XQ = QQ.isAnimationActive,
            wQ = this.state.prevData;
          return !(XQ && WQ && WQ.length) || wQ && sQ()(wQ, WQ) ? this.renderRectanglesStatically(WQ) : this.renderRectanglesWithAnimation()
        }
      }, {
        key: "renderBackground",
        value: function() {
          var QQ = this,
            WQ = this.props,
            XQ = WQ.data,
            qQ = WQ.dataKey,
            TQ = WQ.activeIndex,
            zQ = (0, BQ.e)(this.props.background, !1);
          return XQ.map((function(WQ, XQ) {
            WQ.value;
            var sQ = WQ.background,
              FQ = EQ(WQ, AQ);
            if (!sQ) return null;
            var PQ = LQ(LQ(LQ(LQ(LQ({}, FQ), {}, {
              fill: "#eee"
            }, sQ), zQ), (0, DQ.o)(QQ.props, WQ, XQ)), {}, {
              onAnimationStart: QQ.handleAnimationStart,
              onAnimationEnd: QQ.handleAnimationEnd,
              dataKey: qQ,
              index: XQ,
              className: "recharts-bar-background-rectangle"
            });
            return wQ.createElement(iQ, CQ({
              key: "background-bar-".concat(XQ),
              option: QQ.props.background,
              isActive: XQ === TQ
            }, PQ))
          }))
        }
      }, {
        key: "renderErrorBar",
        value: function(QQ, WQ) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var XQ = this.props,
            qQ = XQ.data,
            TQ = XQ.xAxis,
            zQ = XQ.yAxis,
            sQ = XQ.layout,
            FQ = XQ.children,
            PQ = (0, BQ.h)(FQ, JQ.d);
          if (!PQ) return null;
          var rQ = "vertical" === sQ ? qQ[0].height / 2 : qQ[0].width / 2,
            IQ = function(QQ, WQ) {
              var XQ = Array.isArray(QQ.value) ? QQ.value[1] : QQ.value;
              return {
                x: QQ.x,
                y: QQ.y,
                value: XQ,
                errorVal: (0, VQ.lb)(QQ, WQ)
              }
            },
            jQ = {
              clipPath: QQ ? "url(#clipPath-".concat(WQ, ")") : null
            };
          return wQ.createElement(gQ.d, jQ, PQ.map((function(QQ) {
            return wQ.cloneElement(QQ, {
              key: "error-bar-".concat(WQ, "-").concat(QQ.props.dataKey),
              data: qQ,
              xAxis: TQ,
              yAxis: zQ,
              layout: sQ,
              offset: rQ,
              dataPointFormatter: IQ
            })
          })))
        }
      }, {
        key: "render",
        value: function() {
          var QQ = this.props,
            WQ = QQ.hide,
            XQ = QQ.data,
            TQ = QQ.className,
            zQ = QQ.xAxis,
            sQ = QQ.yAxis,
            FQ = QQ.left,
            JQ = QQ.top,
            rQ = QQ.width,
            jQ = QQ.height,
            BQ = QQ.isAnimationActive,
            yQ = QQ.background,
            VQ = QQ.id;
          if (WQ || !XQ || !XQ.length) return null;
          var DQ = this.state.isAnimationFinished,
            pQ = (0, qQ.e)("recharts-bar", TQ),
            GQ = zQ && zQ.allowDataOverflow,
            UQ = sQ && sQ.allowDataOverflow,
            bQ = GQ || UQ,
            vQ = PQ()(VQ) ? this.id : VQ;
          return wQ.createElement(gQ.d, {
            className: pQ
          }, GQ || UQ ? wQ.createElement("defs", null, wQ.createElement("clipPath", {
            id: "clipPath-".concat(vQ)
          }, wQ.createElement("rect", {
            x: GQ ? FQ : FQ - rQ / 2,
            y: UQ ? JQ : JQ - jQ / 2,
            width: GQ ? rQ : 2 * rQ,
            height: UQ ? jQ : 2 * jQ
          }))) : null, wQ.createElement(gQ.d, {
            className: "recharts-bar-rectangles",
            clipPath: bQ ? "url(#clipPath-".concat(vQ, ")") : null
          }, yQ ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(bQ, vQ), (!BQ || DQ) && IQ.b.renderCallByParent(this.props, XQ))
        }
      }], FQ = [{
        key: "getDerivedStateFromProps",
        value: function(QQ, WQ) {
          return QQ.animationId !== WQ.prevAnimationId ? {
            prevAnimationId: QQ.animationId,
            curData: QQ.data,
            prevData: WQ.curData
          } : QQ.data !== WQ.curData ? {
            curData: QQ.data
          } : null
        }
      }], zQ && kQ(XQ.prototype, zQ), FQ && kQ(XQ, FQ), Object.defineProperty(XQ, "prototype", {
        writable: !1
      }), XQ;
      var XQ, zQ, FQ
    }(wQ.PureComponent);
    cQ = xQ, eQ(xQ, "displayName", "Bar"), eQ(xQ, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      legendType: "rect",
      minPointSize: 0,
      hide: !1,
      data: [],
      layout: "vertical",
      activeBar: !1,
      isAnimationActive: !yQ.c.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "ease"
    }), eQ(xQ, "getComposedData", (function(QQ) {
      var WQ = QQ.props,
        XQ = QQ.item,
        wQ = QQ.barPosition,
        qQ = QQ.bandSize,
        TQ = QQ.xAxis,
        zQ = QQ.yAxis,
        sQ = QQ.xAxisTicks,
        FQ = QQ.yAxisTicks,
        PQ = QQ.stackedData,
        gQ = QQ.dataStartIndex,
        JQ = QQ.displayedData,
        IQ = QQ.offset,
        yQ = (0, VQ.q)(wQ, XQ);
      if (!yQ) return null;
      var DQ = WQ.layout,
        GQ = XQ.type.defaultProps,
        UQ = void 0 !== GQ ? LQ(LQ({}, GQ), XQ.props) : XQ.props,
        bQ = UQ.dataKey,
        vQ = UQ.children,
        dQ = UQ.minPointSize,
        HQ = "horizontal" === DQ ? zQ : TQ,
        aQ = PQ ? HQ.scale.domain() : null,
        lQ = (0, VQ.B)({
          numericAxis: HQ
        }),
        hQ = (0, BQ.h)(vQ, rQ.e),
        iQ = JQ.map((function(QQ, WQ) {
          var wQ, JQ, rQ, IQ, BQ, GQ;
          PQ ? wQ = (0, VQ.zb)(PQ[gQ + WQ], aQ) : (wQ = (0, VQ.lb)(QQ, bQ), Array.isArray(wQ) || (wQ = [lQ, wQ]));
          var UQ = function(QQ) {
            var WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return function(XQ, wQ) {
              if ("number" === typeof QQ) return QQ;
              var qQ = (0, jQ.D)(XQ) || (0, jQ.A)(XQ);
              return qQ ? QQ(XQ, wQ) : (qQ || (0, pQ.b)(!1), WQ)
            }
          }(dQ, cQ.defaultProps.minPointSize)(wQ[1], WQ);
          if ("horizontal" === DQ) {
            var vQ, HQ = [zQ.scale(wQ[0]), zQ.scale(wQ[1])],
              iQ = HQ[0],
              AQ = HQ[1];
            JQ = (0, VQ.F)({
              axis: TQ,
              ticks: sQ,
              bandSize: qQ,
              offset: yQ.offset,
              entry: QQ,
              index: WQ
            }), rQ = null !== (vQ = null !== AQ && void 0 !== AQ ? AQ : iQ) && void 0 !== vQ ? vQ : void 0, IQ = yQ.size;
            var RQ = iQ - AQ;
            if (BQ = Number.isNaN(RQ) ? 0 : RQ, GQ = {
                x: JQ,
                y: zQ.y,
                width: IQ,
                height: zQ.height
              }, Math.abs(UQ) > 0 && Math.abs(BQ) < Math.abs(UQ)) {
              var EQ = (0, jQ.H)(BQ || UQ) * (Math.abs(UQ) - Math.abs(BQ));
              rQ -= EQ, BQ += EQ
            }
          } else {
            var CQ = [TQ.scale(wQ[0]), TQ.scale(wQ[1])],
              uQ = CQ[0],
              kQ = CQ[1];
            if (JQ = uQ, rQ = (0, VQ.F)({
                axis: zQ,
                ticks: FQ,
                bandSize: qQ,
                offset: yQ.offset,
                entry: QQ,
                index: WQ
              }), IQ = kQ - uQ, BQ = yQ.size, GQ = {
                x: TQ.x,
                y: rQ,
                width: TQ.width,
                height: BQ
              }, Math.abs(UQ) > 0 && Math.abs(IQ) < Math.abs(UQ)) IQ += (0, jQ.H)(IQ || UQ) * (Math.abs(UQ) - Math.abs(IQ))
          }
          return LQ(LQ(LQ({}, QQ), {}, {
            x: JQ,
            y: rQ,
            width: IQ,
            height: BQ,
            value: PQ ? wQ : wQ[1],
            payload: QQ,
            background: GQ
          }, hQ && hQ[WQ] && hQ[WQ].props), {}, {
            tooltipPayload: [(0, VQ.kb)(XQ, QQ)],
            tooltipPosition: {
              x: JQ + IQ / 2,
              y: rQ + BQ / 2
            }
          })
        }));
      return LQ({
        data: iQ,
        layout: DQ
      }, IQ)
    }))
  },
  6774: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => RQ
    });
    var wQ = XQ(61),
      qQ = XQ(5622),
      TQ = XQ.n(qQ),
      zQ = XQ(5545),
      sQ = XQ.n(zQ),
      FQ = XQ(5423),
      PQ = XQ(5791),
      gQ = XQ(6339),
      JQ = XQ(6518),
      rQ = XQ(6611),
      IQ = XQ(5520),
      jQ = XQ(5800),
      BQ = XQ(5775),
      yQ = XQ(6783),
      VQ = ["viewBox"],
      DQ = ["viewBox"],
      pQ = ["ticks"];

    function GQ(QQ) {
      return GQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, GQ(QQ)
    }

    function UQ() {
      return UQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var WQ = 1; WQ < arguments.length; WQ++) {
          var XQ = arguments[WQ];
          for (var wQ in XQ) Object.prototype.hasOwnProperty.call(XQ, wQ) && (QQ[wQ] = XQ[wQ])
        }
        return QQ
      }, UQ.apply(this, arguments)
    }

    function bQ(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function vQ(QQ) {
      for (var WQ = 1; WQ < arguments.length; WQ++) {
        var XQ = null != arguments[WQ] ? arguments[WQ] : {};
        WQ % 2 ? bQ(Object(XQ), !0).forEach((function(WQ) {
          cQ(QQ, WQ, XQ[WQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : bQ(Object(XQ)).forEach((function(WQ) {
          Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
        }))
      }
      return QQ
    }

    function dQ(QQ, WQ) {
      if (null == QQ) return {};
      var XQ, wQ, qQ = function(QQ, WQ) {
        if (null == QQ) return {};
        var XQ = {};
        for (var wQ in QQ)
          if (Object.prototype.hasOwnProperty.call(QQ, wQ)) {
            if (WQ.indexOf(wQ) >= 0) continue;
            XQ[wQ] = QQ[wQ]
          } return XQ
      }(QQ, WQ);
      if (Object.getOwnPropertySymbols) {
        var TQ = Object.getOwnPropertySymbols(QQ);
        for (wQ = 0; wQ < TQ.length; wQ++) XQ = TQ[wQ], WQ.indexOf(XQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, XQ) && (qQ[XQ] = QQ[XQ])
      }
      return qQ
    }

    function HQ(QQ, WQ) {
      for (var XQ = 0; XQ < WQ.length; XQ++) {
        var wQ = WQ[XQ];
        wQ.enumerable = wQ.enumerable || !1, wQ.configurable = !0, "value" in wQ && (wQ.writable = !0), Object.defineProperty(QQ, AQ(wQ.key), wQ)
      }
    }

    function aQ(QQ, WQ, XQ) {
      return WQ = hQ(WQ),
        function(QQ, WQ) {
          if (WQ && ("object" === GQ(WQ) || "function" === typeof WQ)) return WQ;
          if (void 0 !== WQ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(QQ) {
            if (void 0 === QQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return QQ
          }(QQ)
        }(QQ, lQ() ? Reflect.construct(WQ, XQ || [], hQ(QQ).constructor) : WQ.apply(QQ, XQ))
    }

    function lQ() {
      try {
        var QQ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (QQ) {}
      return (lQ = function() {
        return !!QQ
      })()
    }

    function hQ(QQ) {
      return hQ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(QQ) {
        return QQ.__proto__ || Object.getPrototypeOf(QQ)
      }, hQ(QQ)
    }

    function iQ(QQ, WQ) {
      return iQ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(QQ, WQ) {
        return QQ.__proto__ = WQ, QQ
      }, iQ(QQ, WQ)
    }

    function cQ(QQ, WQ, XQ) {
      return (WQ = AQ(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }

    function AQ(QQ) {
      var WQ = function(QQ, WQ) {
        if ("object" != GQ(QQ) || !QQ) return QQ;
        var XQ = QQ[Symbol.toPrimitive];
        if (void 0 !== XQ) {
          var wQ = XQ.call(QQ, WQ || "default");
          if ("object" != GQ(wQ)) return wQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == GQ(WQ) ? WQ : WQ + ""
    }
    var RQ = function(QQ) {
      function WQ(QQ) {
        var XQ;
        return function(QQ, WQ) {
          if (!(QQ instanceof WQ)) throw new TypeError("Cannot call a class as a function")
        }(this, WQ), (XQ = aQ(this, WQ, [QQ])).state = {
          fontSize: "",
          letterSpacing: ""
        }, XQ
      }
      return function(QQ, WQ) {
        if ("function" !== typeof WQ && null !== WQ) throw new TypeError("Super expression must either be null or a function");
        QQ.prototype = Object.create(WQ && WQ.prototype, {
          constructor: {
            value: QQ,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(QQ, "prototype", {
          writable: !1
        }), WQ && iQ(QQ, WQ)
      }(WQ, QQ), XQ = WQ, zQ = [{
        key: "renderTickItem",
        value: function(QQ, WQ, XQ) {
          var qQ = (0, FQ.e)(WQ.className, "recharts-cartesian-axis-tick-value");
          return wQ.isValidElement(QQ) ? wQ.cloneElement(QQ, vQ(vQ({}, WQ), {}, {
            className: qQ
          })) : TQ()(QQ) ? QQ(vQ(vQ({}, WQ), {}, {
            className: qQ
          })) : wQ.createElement(JQ.d, UQ({}, WQ, {
            className: "recharts-cartesian-axis-tick-value"
          }), XQ)
        }
      }], (qQ = [{
        key: "shouldComponentUpdate",
        value: function(QQ, WQ) {
          var XQ = QQ.viewBox,
            wQ = dQ(QQ, VQ),
            qQ = this.props,
            TQ = qQ.viewBox,
            zQ = dQ(qQ, DQ);
          return !(0, PQ.e)(XQ, TQ) || !(0, PQ.e)(wQ, zQ) || !(0, PQ.e)(WQ, this.state)
        }
      }, {
        key: "componentDidMount",
        value: function() {
          var QQ = this.layerReference;
          if (QQ) {
            var WQ = QQ.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
            WQ && this.setState({
              fontSize: window.getComputedStyle(WQ).fontSize,
              letterSpacing: window.getComputedStyle(WQ).letterSpacing
            })
          }
        }
      }, {
        key: "getTickLineCoord",
        value: function(QQ) {
          var WQ, XQ, wQ, qQ, TQ, zQ, sQ = this.props,
            FQ = sQ.x,
            PQ = sQ.y,
            gQ = sQ.width,
            JQ = sQ.height,
            rQ = sQ.orientation,
            jQ = sQ.tickSize,
            BQ = sQ.mirror,
            yQ = sQ.tickMargin,
            VQ = BQ ? -1 : 1,
            DQ = QQ.tickSize || jQ,
            pQ = (0, IQ.D)(QQ.tickCoord) ? QQ.tickCoord : QQ.coordinate;
          switch (rQ) {
            case "top":
              WQ = XQ = QQ.coordinate, zQ = (wQ = (qQ = PQ + +!BQ * JQ) - VQ * DQ) - VQ * yQ, TQ = pQ;
              break;
            case "left":
              wQ = qQ = QQ.coordinate, TQ = (WQ = (XQ = FQ + +!BQ * gQ) - VQ * DQ) - VQ * yQ, zQ = pQ;
              break;
            case "right":
              wQ = qQ = QQ.coordinate, TQ = (WQ = (XQ = FQ + +BQ * gQ) + VQ * DQ) + VQ * yQ, zQ = pQ;
              break;
            default:
              WQ = XQ = QQ.coordinate, zQ = (wQ = (qQ = PQ + +BQ * JQ) + VQ * DQ) + VQ * yQ, TQ = pQ
          }
          return {
            line: {
              x1: WQ,
              y1: wQ,
              x2: XQ,
              y2: qQ
            },
            fJ: {
              x: TQ,
              y: zQ
            }
          }
        }
      }, {
        key: "getTickTextAnchor",
        value: function() {
          var QQ, WQ = this.props,
            XQ = WQ.orientation,
            wQ = WQ.mirror;
          switch (XQ) {
            case "left":
              QQ = wQ ? "start" : "end";
              break;
            case "right":
              QQ = wQ ? "end" : "start";
              break;
            default:
              QQ = "middle"
          }
          return QQ
        }
      }, {
        key: "getTickVerticalAnchor",
        value: function() {
          var QQ = this.props,
            WQ = QQ.orientation,
            XQ = QQ.mirror,
            wQ = "end";
          switch (WQ) {
            case "left":
            case "right":
              wQ = "middle";
              break;
            case "top":
              wQ = XQ ? "start" : "end";
              break;
            default:
              wQ = XQ ? "end" : "start"
          }
          return wQ
        }
      }, {
        key: "renderAxisLine",
        value: function() {
          var QQ = this.props,
            WQ = QQ.x,
            XQ = QQ.y,
            qQ = QQ.width,
            TQ = QQ.height,
            zQ = QQ.orientation,
            PQ = QQ.mirror,
            gQ = QQ.axisLine,
            JQ = vQ(vQ(vQ({}, (0, BQ.e)(this.props, !1)), (0, BQ.e)(gQ, !1)), {}, {
              fill: "none"
            });
          if ("top" === zQ || "bottom" === zQ) {
            var rQ = +("top" === zQ && !PQ || "bottom" === zQ && PQ);
            JQ = vQ(vQ({}, JQ), {}, {
              x1: WQ,
              y1: XQ + rQ * TQ,
              x2: WQ + qQ,
              y2: XQ + rQ * TQ
            })
          } else {
            var IQ = +("left" === zQ && !PQ || "right" === zQ && PQ);
            JQ = vQ(vQ({}, JQ), {}, {
              x1: WQ + IQ * qQ,
              y1: XQ,
              x2: WQ + IQ * qQ,
              y2: XQ + TQ
            })
          }
          return wQ.createElement("line", UQ({}, JQ, {
            className: (0, FQ.e)("recharts-cartesian-axis-line", sQ()(gQ, "className"))
          }))
        }
      }, {
        key: "renderTicks",
        value: function(QQ, XQ, qQ) {
          var zQ = this,
            PQ = this.props,
            JQ = PQ.tickLine,
            rQ = PQ.stroke,
            IQ = PQ.fJ,
            VQ = PQ.tickFormatter,
            DQ = PQ.unit,
            pQ = (0, yQ.b)(vQ(vQ({}, this.props), {}, {
              ticks: QQ
            }), XQ, qQ),
            GQ = this.getTickTextAnchor(),
            bQ = this.getTickVerticalAnchor(),
            dQ = (0, BQ.e)(this.props, !1),
            HQ = (0, BQ.e)(IQ, !1),
            aQ = vQ(vQ({}, dQ), {}, {
              fill: "none"
            }, (0, BQ.e)(JQ, !1)),
            lQ = pQ.map((function(QQ, XQ) {
              var qQ = zQ.getTickLineCoord(QQ),
                PQ = qQ.line,
                BQ = qQ.fJ,
                yQ = vQ(vQ(vQ(vQ({
                  textAnchor: GQ,
                  verticalAnchor: bQ
                }, dQ), {}, {
                  stroke: "none",
                  fill: rQ
                }, HQ), BQ), {}, {
                  index: XQ,
                  payload: QQ,
                  visibleTicksCount: pQ.length,
                  tickFormatter: VQ
                });
              return wQ.createElement(gQ.d, UQ({
                className: "recharts-cartesian-axis-tick",
                key: "tick-".concat(QQ.value, "-").concat(QQ.coordinate, "-").concat(QQ.tickCoord)
              }, (0, jQ.o)(zQ.props, QQ, XQ)), JQ && wQ.createElement("line", UQ({}, aQ, PQ, {
                className: (0, FQ.e)("recharts-cartesian-axis-tick-line", sQ()(JQ, "className"))
              })), IQ && WQ.renderTickItem(IQ, yQ, "".concat(TQ()(VQ) ? VQ(QQ.value, XQ) : QQ.value).concat(DQ || "")))
            }));
          return wQ.createElement("g", {
            className: "recharts-cartesian-axis-ticks"
          }, lQ)
        }
      }, {
        key: "render",
        value: function() {
          var QQ = this,
            WQ = this.props,
            XQ = WQ.axisLine,
            qQ = WQ.width,
            zQ = WQ.height,
            sQ = WQ.ticksGenerator,
            PQ = WQ.className;
          if (WQ.hide) return null;
          var JQ = this.props,
            IQ = JQ.ticks,
            jQ = dQ(JQ, pQ),
            BQ = IQ;
          return TQ()(sQ) && (BQ = IQ && IQ.length > 0 ? sQ(this.props) : sQ(jQ)), qQ <= 0 || zQ <= 0 || !BQ || !BQ.length ? null : wQ.createElement(gQ.d, {
            className: (0, FQ.e)("recharts-cartesian-axis", PQ),
            ref: function(WQ) {
              QQ.layerReference = WQ
            }
          }, XQ && this.renderAxisLine(), this.renderTicks(BQ, this.state.fontSize, this.state.letterSpacing), rQ.c.renderCallByParent(this.props))
        }
      }]) && HQ(XQ.prototype, qQ), zQ && HQ(XQ, zQ), Object.defineProperty(XQ, "prototype", {
        writable: !1
      }), XQ;
      var XQ, qQ, zQ
    }(wQ.Component);
    cQ(RQ, "displayName", "CartesianAxis"), cQ(RQ, "defaultProps", {
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
      fJ: !0,
      mirror: !1,
      minTickGap: 5,
      tickSize: 6,
      tickMargin: 2,
      interval: "preserveEnd"
    })
  },
  6798: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => cQ
    });
    var wQ = XQ(61),
      qQ = XQ(5622),
      TQ = XQ.n(qQ),
      zQ = XQ(5770),
      sQ = XQ(5520),
      FQ = XQ(5775),
      PQ = XQ(6526),
      gQ = XQ(6783),
      JQ = XQ(6774),
      rQ = XQ(6727),
      IQ = ["x1", "y1", "x2", "y2", "key"],
      jQ = ["offset"];

    function BQ(QQ) {
      return BQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, BQ(QQ)
    }

    function yQ(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function VQ(QQ) {
      for (var WQ = 1; WQ < arguments.length; WQ++) {
        var XQ = null != arguments[WQ] ? arguments[WQ] : {};
        WQ % 2 ? yQ(Object(XQ), !0).forEach((function(WQ) {
          DQ(QQ, WQ, XQ[WQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : yQ(Object(XQ)).forEach((function(WQ) {
          Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
        }))
      }
      return QQ
    }

    function DQ(QQ, WQ, XQ) {
      return (WQ = function(QQ) {
        var WQ = function(QQ, WQ) {
          if ("object" != BQ(QQ) || !QQ) return QQ;
          var XQ = QQ[Symbol.toPrimitive];
          if (void 0 !== XQ) {
            var wQ = XQ.call(QQ, WQ || "default");
            if ("object" != BQ(wQ)) return wQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == BQ(WQ) ? WQ : WQ + ""
      }(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }

    function pQ() {
      return pQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var WQ = 1; WQ < arguments.length; WQ++) {
          var XQ = arguments[WQ];
          for (var wQ in XQ) Object.prototype.hasOwnProperty.call(XQ, wQ) && (QQ[wQ] = XQ[wQ])
        }
        return QQ
      }, pQ.apply(this, arguments)
    }

    function GQ(QQ, WQ) {
      if (null == QQ) return {};
      var XQ, wQ, qQ = function(QQ, WQ) {
        if (null == QQ) return {};
        var XQ = {};
        for (var wQ in QQ)
          if (Object.prototype.hasOwnProperty.call(QQ, wQ)) {
            if (WQ.indexOf(wQ) >= 0) continue;
            XQ[wQ] = QQ[wQ]
          } return XQ
      }(QQ, WQ);
      if (Object.getOwnPropertySymbols) {
        var TQ = Object.getOwnPropertySymbols(QQ);
        for (wQ = 0; wQ < TQ.length; wQ++) XQ = TQ[wQ], WQ.indexOf(XQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, XQ) && (qQ[XQ] = QQ[XQ])
      }
      return qQ
    }
    var UQ = function(QQ) {
      var WQ = QQ.fill;
      if (!WQ || "none" === WQ) return null;
      var XQ = QQ.fillOpacity,
        qQ = QQ.x,
        TQ = QQ.y,
        zQ = QQ.width,
        sQ = QQ.height,
        FQ = QQ.ry;
      return wQ.createElement("rect", {
        x: qQ,
        y: TQ,
        ry: FQ,
        width: zQ,
        height: sQ,
        stroke: "none",
        fill: WQ,
        fillOpacity: XQ,
        className: "recharts-cartesian-grid-bg"
      })
    };

    function bQ(QQ, WQ) {
      var XQ;
      if (wQ.isValidElement(QQ)) XQ = wQ.cloneElement(QQ, WQ);
      else if (TQ()(QQ)) XQ = QQ(WQ);
      else {
        var qQ = WQ.x1,
          zQ = WQ.y1,
          sQ = WQ.x2,
          PQ = WQ.y2,
          gQ = WQ.key,
          JQ = GQ(WQ, IQ),
          rQ = (0, FQ.e)(JQ, !1),
          BQ = (rQ.offset, GQ(rQ, jQ));
        XQ = wQ.createElement("line", pQ({}, BQ, {
          x1: qQ,
          y1: zQ,
          x2: sQ,
          y2: PQ,
          fill: "none",
          key: gQ
        }))
      }
      return XQ
    }

    function vQ(QQ) {
      var WQ = QQ.x,
        XQ = QQ.width,
        qQ = QQ.horizontal,
        TQ = void 0 === qQ || qQ,
        zQ = QQ.horizontalPoints;
      if (!TQ || !zQ || !zQ.length) return null;
      var sQ = zQ.map((function(wQ, qQ) {
        var zQ = VQ(VQ({}, QQ), {}, {
          x1: WQ,
          y1: wQ,
          x2: WQ + XQ,
          y2: wQ,
          key: "line-".concat(qQ),
          index: qQ
        });
        return bQ(TQ, zQ)
      }));
      return wQ.createElement("g", {
        className: "recharts-cartesian-grid-horizontal"
      }, sQ)
    }

    function dQ(QQ) {
      var WQ = QQ.y,
        XQ = QQ.height,
        qQ = QQ.vertical,
        TQ = void 0 === qQ || qQ,
        zQ = QQ.verticalPoints;
      if (!TQ || !zQ || !zQ.length) return null;
      var sQ = zQ.map((function(wQ, qQ) {
        var zQ = VQ(VQ({}, QQ), {}, {
          x1: wQ,
          y1: WQ,
          x2: wQ,
          y2: WQ + XQ,
          key: "line-".concat(qQ),
          index: qQ
        });
        return bQ(TQ, zQ)
      }));
      return wQ.createElement("g", {
        className: "recharts-cartesian-grid-vertical"
      }, sQ)
    }

    function HQ(QQ) {
      var WQ = QQ.horizontalFill,
        XQ = QQ.fillOpacity,
        qQ = QQ.x,
        TQ = QQ.y,
        zQ = QQ.width,
        sQ = QQ.height,
        FQ = QQ.horizontalPoints,
        PQ = QQ.horizontal;
      if (!(void 0 === PQ || PQ) || !WQ || !WQ.length) return null;
      var gQ = FQ.map((function(QQ) {
        return Math.round(QQ + TQ - TQ)
      })).sort((function(QQ, WQ) {
        return QQ - WQ
      }));
      TQ !== gQ[0] && gQ.unshift(0);
      var JQ = gQ.map((function(QQ, FQ) {
        var PQ = !gQ[FQ + 1] ? TQ + sQ - QQ : gQ[FQ + 1] - QQ;
        if (PQ <= 0) return null;
        var JQ = FQ % WQ.length;
        return wQ.createElement("rect", {
          key: "react-".concat(FQ),
          y: QQ,
          x: qQ,
          height: PQ,
          width: zQ,
          stroke: "none",
          fill: WQ[JQ],
          fillOpacity: XQ,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return wQ.createElement("g", {
        className: "recharts-cartesian-gridstripes-horizontal"
      }, JQ)
    }

    function aQ(QQ) {
      var WQ = QQ.vertical,
        XQ = void 0 === WQ || WQ,
        qQ = QQ.verticalFill,
        TQ = QQ.fillOpacity,
        zQ = QQ.x,
        sQ = QQ.y,
        FQ = QQ.width,
        PQ = QQ.height,
        gQ = QQ.verticalPoints;
      if (!XQ || !qQ || !qQ.length) return null;
      var JQ = gQ.map((function(QQ) {
        return Math.round(QQ + zQ - zQ)
      })).sort((function(QQ, WQ) {
        return QQ - WQ
      }));
      zQ !== JQ[0] && JQ.unshift(0);
      var rQ = JQ.map((function(QQ, WQ) {
        var XQ = !JQ[WQ + 1] ? zQ + FQ - QQ : JQ[WQ + 1] - QQ;
        if (XQ <= 0) return null;
        var gQ = WQ % qQ.length;
        return wQ.createElement("rect", {
          key: "react-".concat(WQ),
          x: QQ,
          y: sQ,
          width: XQ,
          height: PQ,
          stroke: "none",
          fill: qQ[gQ],
          fillOpacity: TQ,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return wQ.createElement("g", {
        className: "recharts-cartesian-gridstripes-vertical"
      }, rQ)
    }
    var lQ = function(QQ, WQ) {
        var XQ = QQ.xAxis,
          wQ = QQ.width,
          qQ = QQ.height,
          TQ = QQ.offset;
        return (0, PQ.K)((0, gQ.b)(VQ(VQ(VQ({}, JQ.b.defaultProps), XQ), {}, {
          ticks: (0, PQ.eb)(XQ, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: wQ,
            height: qQ
          }
        })), TQ.left, TQ.left + TQ.width, WQ)
      },
      hQ = function(QQ, WQ) {
        var XQ = QQ.yAxis,
          wQ = QQ.width,
          qQ = QQ.height,
          TQ = QQ.offset;
        return (0, PQ.K)((0, gQ.b)(VQ(VQ(VQ({}, JQ.b.defaultProps), XQ), {}, {
          ticks: (0, PQ.eb)(XQ, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: wQ,
            height: qQ
          }
        })), TQ.top, TQ.top + TQ.height, WQ)
      },
      iQ = {
        horizontal: !0,
        vertical: !0,
        horizontalPoints: [],
        verticalPoints: [],
        stroke: "#ccc",
        fill: "none",
        verticalFill: [],
        horizontalFill: []
      };

    function cQ(QQ) {
      var WQ, XQ, qQ, FQ, PQ, gQ, JQ = (0, rQ.l)(),
        IQ = (0, rQ.j)(),
        jQ = (0, rQ.r)(),
        yQ = VQ(VQ({}, QQ), {}, {
          stroke: null !== (WQ = QQ.stroke) && void 0 !== WQ ? WQ : iQ.stroke,
          fill: null !== (XQ = QQ.fill) && void 0 !== XQ ? XQ : iQ.fill,
          horizontal: null !== (qQ = QQ.horizontal) && void 0 !== qQ ? qQ : iQ.horizontal,
          horizontalFill: null !== (FQ = QQ.horizontalFill) && void 0 !== FQ ? FQ : iQ.horizontalFill,
          vertical: null !== (PQ = QQ.vertical) && void 0 !== PQ ? PQ : iQ.vertical,
          verticalFill: null !== (gQ = QQ.verticalFill) && void 0 !== gQ ? gQ : iQ.verticalFill,
          x: (0, sQ.D)(QQ.x) ? QQ.x : jQ.left,
          y: (0, sQ.D)(QQ.y) ? QQ.y : jQ.top,
          width: (0, sQ.D)(QQ.width) ? QQ.width : jQ.width,
          height: (0, sQ.D)(QQ.height) ? QQ.height : jQ.height
        }),
        DQ = yQ.x,
        GQ = yQ.y,
        bQ = yQ.width,
        cQ = yQ.height,
        AQ = yQ.syncWithTicks,
        RQ = yQ.horizontalValues,
        EQ = yQ.verticalValues,
        CQ = (0, rQ.f)(),
        uQ = (0, rQ.B)();
      if (!(0, sQ.D)(bQ) || bQ <= 0 || !(0, sQ.D)(cQ) || cQ <= 0 || !(0, sQ.D)(DQ) || DQ !== +DQ || !(0, sQ.D)(GQ) || GQ !== +GQ) return null;
      var LQ = yQ.verticalCoordinatesGenerator || lQ,
        kQ = yQ.horizontalCoordinatesGenerator || hQ,
        fQ = yQ.horizontalPoints,
        SQ = yQ.verticalPoints;
      if ((!fQ || !fQ.length) && TQ()(kQ)) {
        var tQ = RQ && RQ.length,
          oQ = kQ({
            yAxis: uQ ? VQ(VQ({}, uQ), {}, {
              ticks: tQ ? RQ : uQ.ticks
            }) : void 0,
            width: JQ,
            height: IQ,
            offset: jQ
          }, !!tQ || AQ);
        (0, zQ.c)(Array.isArray(oQ), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(BQ(oQ), "]")), Array.isArray(oQ) && (fQ = oQ)
      }
      if ((!SQ || !SQ.length) && TQ()(LQ)) {
        var eQ = EQ && EQ.length,
          nQ = LQ({
            xAxis: CQ ? VQ(VQ({}, CQ), {}, {
              ticks: eQ ? EQ : CQ.ticks
            }) : void 0,
            width: JQ,
            height: IQ,
            offset: jQ
          }, !!eQ || AQ);
        (0, zQ.c)(Array.isArray(nQ), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(BQ(nQ), "]")), Array.isArray(nQ) && (SQ = nQ)
      }
      return wQ.createElement("g", {
        className: "recharts-cartesian-grid"
      }, wQ.createElement(UQ, {
        fill: yQ.fill,
        fillOpacity: yQ.fillOpacity,
        x: yQ.x,
        y: yQ.y,
        width: yQ.width,
        height: yQ.height,
        ry: yQ.ry
      }), wQ.createElement(vQ, pQ({}, yQ, {
        offset: jQ,
        horizontalPoints: fQ,
        xAxis: CQ,
        yAxis: uQ
      })), wQ.createElement(dQ, pQ({}, yQ, {
        offset: jQ,
        verticalPoints: SQ,
        xAxis: CQ,
        yAxis: uQ
      })), wQ.createElement(HQ, pQ({}, yQ, {
        horizontalPoints: fQ
      })), wQ.createElement(aQ, pQ({}, yQ, {
        verticalPoints: SQ
      })))
    }
    cQ.displayName = "CartesianGrid"
  },
  6596: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => GQ
    });
    var wQ = XQ(61),
      qQ = XQ(6329),
      TQ = XQ(6339),
      zQ = XQ(5775),
      sQ = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];

    function FQ(QQ) {
      return FQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, FQ(QQ)
    }

    function PQ() {
      return PQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var WQ = 1; WQ < arguments.length; WQ++) {
          var XQ = arguments[WQ];
          for (var wQ in XQ) Object.prototype.hasOwnProperty.call(XQ, wQ) && (QQ[wQ] = XQ[wQ])
        }
        return QQ
      }, PQ.apply(this, arguments)
    }

    function gQ(QQ, WQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return QQ
      }(QQ) || function(QQ, WQ) {
        var XQ = null == QQ ? null : "undefined" != typeof Symbol && QQ[Symbol.iterator] || QQ["@@iterator"];
        if (null != XQ) {
          var wQ, qQ, TQ, zQ, sQ = [],
            FQ = !0,
            PQ = !1;
          try {
            if (TQ = (XQ = XQ.call(QQ)).next, 0 === WQ) {
              if (Object(XQ) !== XQ) return;
              FQ = !1
            } else
              for (; !(FQ = (wQ = TQ.call(XQ)).done) && (sQ.push(wQ.value), sQ.length !== WQ); FQ = !0);
          } catch (QQ) {
            PQ = !0, qQ = QQ
          } finally {
            try {
              if (!FQ && null != XQ.return && (zQ = XQ.return(), Object(zQ) !== zQ)) return
            } finally {
              if (PQ) throw qQ
            }
          }
          return sQ
        }
      }(QQ, WQ) || function(QQ, WQ) {
        if (!QQ) return;
        if ("string" === typeof QQ) return JQ(QQ, WQ);
        var XQ = Object.prototype.toString.call(QQ).slice(8, -1);
        "Object" === XQ && QQ.constructor && (XQ = QQ.constructor.name);
        if ("Map" === XQ || "Set" === XQ) return Array.from(QQ);
        if ("Arguments" === XQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(XQ)) return JQ(QQ, WQ)
      }(QQ, WQ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function JQ(QQ, WQ) {
      (null == WQ || WQ > QQ.length) && (WQ = QQ.length);
      for (var XQ = 0, wQ = new Array(WQ); XQ < WQ; XQ++) wQ[XQ] = QQ[XQ];
      return wQ
    }

    function rQ(QQ, WQ) {
      if (null == QQ) return {};
      var XQ, wQ, qQ = function(QQ, WQ) {
        if (null == QQ) return {};
        var XQ = {};
        for (var wQ in QQ)
          if (Object.prototype.hasOwnProperty.call(QQ, wQ)) {
            if (WQ.indexOf(wQ) >= 0) continue;
            XQ[wQ] = QQ[wQ]
          } return XQ
      }(QQ, WQ);
      if (Object.getOwnPropertySymbols) {
        var TQ = Object.getOwnPropertySymbols(QQ);
        for (wQ = 0; wQ < TQ.length; wQ++) XQ = TQ[wQ], WQ.indexOf(XQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, XQ) && (qQ[XQ] = QQ[XQ])
      }
      return qQ
    }

    function IQ(QQ, WQ) {
      for (var XQ = 0; XQ < WQ.length; XQ++) {
        var wQ = WQ[XQ];
        wQ.enumerable = wQ.enumerable || !1, wQ.configurable = !0, "value" in wQ && (wQ.writable = !0), Object.defineProperty(QQ, pQ(wQ.key), wQ)
      }
    }

    function jQ(QQ, WQ, XQ) {
      return WQ = yQ(WQ),
        function(QQ, WQ) {
          if (WQ && ("object" === FQ(WQ) || "function" === typeof WQ)) return WQ;
          if (void 0 !== WQ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(QQ) {
            if (void 0 === QQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return QQ
          }(QQ)
        }(QQ, BQ() ? Reflect.construct(WQ, XQ || [], yQ(QQ).constructor) : WQ.apply(QQ, XQ))
    }

    function BQ() {
      try {
        var QQ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (QQ) {}
      return (BQ = function() {
        return !!QQ
      })()
    }

    function yQ(QQ) {
      return yQ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(QQ) {
        return QQ.__proto__ || Object.getPrototypeOf(QQ)
      }, yQ(QQ)
    }

    function VQ(QQ, WQ) {
      return VQ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(QQ, WQ) {
        return QQ.__proto__ = WQ, QQ
      }, VQ(QQ, WQ)
    }

    function DQ(QQ, WQ, XQ) {
      return (WQ = pQ(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }

    function pQ(QQ) {
      var WQ = function(QQ, WQ) {
        if ("object" != FQ(QQ) || !QQ) return QQ;
        var XQ = QQ[Symbol.toPrimitive];
        if (void 0 !== XQ) {
          var wQ = XQ.call(QQ, WQ || "default");
          if ("object" != FQ(wQ)) return wQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == FQ(WQ) ? WQ : WQ + ""
    }
    var GQ = function(QQ) {
      function WQ() {
        return function(QQ, WQ) {
          if (!(QQ instanceof WQ)) throw new TypeError("Cannot call a class as a function")
        }(this, WQ), jQ(this, WQ, arguments)
      }
      return function(QQ, WQ) {
        if ("function" !== typeof WQ && null !== WQ) throw new TypeError("Super expression must either be null or a function");
        QQ.prototype = Object.create(WQ && WQ.prototype, {
          constructor: {
            value: QQ,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(QQ, "prototype", {
          writable: !1
        }), WQ && VQ(QQ, WQ)
      }(WQ, QQ), XQ = WQ, (FQ = [{
        key: "render",
        value: function() {
          var QQ = this.props,
            WQ = QQ.offset,
            XQ = QQ.layout,
            FQ = QQ.width,
            JQ = QQ.dataKey,
            IQ = QQ.data,
            jQ = QQ.dataPointFormatter,
            BQ = QQ.xAxis,
            yQ = QQ.yAxis,
            VQ = rQ(QQ, sQ),
            DQ = (0, zQ.e)(VQ, !1);
          "x" === this.props.direction && "number" !== BQ.type && (0, qQ.b)(!1);
          var pQ = IQ.map((function(QQ) {
            var qQ = jQ(QQ, JQ),
              zQ = qQ.x,
              sQ = qQ.y,
              rQ = qQ.value,
              IQ = qQ.errorVal;
            if (!IQ) return null;
            var VQ, pQ, GQ = [];
            if (Array.isArray(IQ)) {
              var UQ = gQ(IQ, 2);
              VQ = UQ[0], pQ = UQ[1]
            } else VQ = pQ = IQ;
            if ("vertical" === XQ) {
              var bQ = BQ.scale,
                vQ = sQ + WQ,
                dQ = vQ + FQ,
                HQ = vQ - FQ,
                aQ = bQ(rQ - VQ),
                lQ = bQ(rQ + pQ);
              GQ.push({
                x1: lQ,
                y1: dQ,
                x2: lQ,
                y2: HQ
              }), GQ.push({
                x1: aQ,
                y1: vQ,
                x2: lQ,
                y2: vQ
              }), GQ.push({
                x1: aQ,
                y1: dQ,
                x2: aQ,
                y2: HQ
              })
            } else if ("horizontal" === XQ) {
              var hQ = yQ.scale,
                iQ = zQ + WQ,
                cQ = iQ - FQ,
                AQ = iQ + FQ,
                RQ = hQ(rQ - VQ),
                EQ = hQ(rQ + pQ);
              GQ.push({
                x1: cQ,
                y1: EQ,
                x2: AQ,
                y2: EQ
              }), GQ.push({
                x1: iQ,
                y1: RQ,
                x2: iQ,
                y2: EQ
              }), GQ.push({
                x1: cQ,
                y1: RQ,
                x2: AQ,
                y2: RQ
              })
            }
            return wQ.createElement(TQ.d, PQ({
              className: "recharts-errorBar",
              key: "bar-".concat(GQ.map((function(QQ) {
                return "".concat(QQ.x1, "-").concat(QQ.x2, "-").concat(QQ.y1, "-").concat(QQ.y2)
              })))
            }, DQ), GQ.map((function(QQ) {
              return wQ.createElement("line", PQ({}, QQ, {
                key: "line-".concat(QQ.x1, "-").concat(QQ.x2, "-").concat(QQ.y1, "-").concat(QQ.y2)
              }))
            })))
          }));
          return wQ.createElement(TQ.d, {
            className: "recharts-errorBars"
          }, pQ)
        }
      }]) && IQ(XQ.prototype, FQ), JQ && IQ(XQ, JQ), Object.defineProperty(XQ, "prototype", {
        writable: !1
      }), XQ;
      var XQ, FQ, JQ
    }(wQ.Component);
    DQ(GQ, "defaultProps", {
      stroke: "black",
      strokeWidth: 1.5,
      width: 5,
      offset: 0,
      layout: "horizontal"
    }), DQ(GQ, "displayName", "ErrorBar")
  },
  6764: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => kQ
    });
    var wQ = XQ(61),
      qQ = XQ(6513),
      TQ = XQ(5622),
      zQ = XQ.n(TQ),
      sQ = XQ(5766),
      FQ = XQ.n(sQ),
      PQ = XQ(6590),
      gQ = XQ.n(PQ),
      JQ = XQ(5423),
      rQ = XQ(6752),
      IQ = XQ(6496),
      jQ = XQ(6339),
      BQ = XQ(6675),
      yQ = XQ(6596),
      VQ = XQ(5520),
      DQ = XQ(5775),
      pQ = XQ(6345),
      GQ = XQ(6526),
      UQ = ["type", "layout", "connectNulls", "ref"],
      bQ = ["key"];

    function vQ(QQ) {
      return vQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, vQ(QQ)
    }

    function dQ(QQ, WQ) {
      if (null == QQ) return {};
      var XQ, wQ, qQ = function(QQ, WQ) {
        if (null == QQ) return {};
        var XQ = {};
        for (var wQ in QQ)
          if (Object.prototype.hasOwnProperty.call(QQ, wQ)) {
            if (WQ.indexOf(wQ) >= 0) continue;
            XQ[wQ] = QQ[wQ]
          } return XQ
      }(QQ, WQ);
      if (Object.getOwnPropertySymbols) {
        var TQ = Object.getOwnPropertySymbols(QQ);
        for (wQ = 0; wQ < TQ.length; wQ++) XQ = TQ[wQ], WQ.indexOf(XQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, XQ) && (qQ[XQ] = QQ[XQ])
      }
      return qQ
    }

    function HQ() {
      return HQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var WQ = 1; WQ < arguments.length; WQ++) {
          var XQ = arguments[WQ];
          for (var wQ in XQ) Object.prototype.hasOwnProperty.call(XQ, wQ) && (QQ[wQ] = XQ[wQ])
        }
        return QQ
      }, HQ.apply(this, arguments)
    }

    function aQ(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function lQ(QQ) {
      for (var WQ = 1; WQ < arguments.length; WQ++) {
        var XQ = null != arguments[WQ] ? arguments[WQ] : {};
        WQ % 2 ? aQ(Object(XQ), !0).forEach((function(WQ) {
          uQ(QQ, WQ, XQ[WQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : aQ(Object(XQ)).forEach((function(WQ) {
          Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
        }))
      }
      return QQ
    }

    function hQ(QQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return iQ(QQ)
      }(QQ) || function(QQ) {
        if ("undefined" !== typeof Symbol && null != QQ[Symbol.iterator] || null != QQ["@@iterator"]) return Array.from(QQ)
      }(QQ) || function(QQ, WQ) {
        if (!QQ) return;
        if ("string" === typeof QQ) return iQ(QQ, WQ);
        var XQ = Object.prototype.toString.call(QQ).slice(8, -1);
        "Object" === XQ && QQ.constructor && (XQ = QQ.constructor.name);
        if ("Map" === XQ || "Set" === XQ) return Array.from(QQ);
        if ("Arguments" === XQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(XQ)) return iQ(QQ, WQ)
      }(QQ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function iQ(QQ, WQ) {
      (null == WQ || WQ > QQ.length) && (WQ = QQ.length);
      for (var XQ = 0, wQ = new Array(WQ); XQ < WQ; XQ++) wQ[XQ] = QQ[XQ];
      return wQ
    }

    function cQ(QQ, WQ) {
      for (var XQ = 0; XQ < WQ.length; XQ++) {
        var wQ = WQ[XQ];
        wQ.enumerable = wQ.enumerable || !1, wQ.configurable = !0, "value" in wQ && (wQ.writable = !0), Object.defineProperty(QQ, LQ(wQ.key), wQ)
      }
    }

    function AQ(QQ, WQ, XQ) {
      return WQ = EQ(WQ),
        function(QQ, WQ) {
          if (WQ && ("object" === vQ(WQ) || "function" === typeof WQ)) return WQ;
          if (void 0 !== WQ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(QQ) {
            if (void 0 === QQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return QQ
          }(QQ)
        }(QQ, RQ() ? Reflect.construct(WQ, XQ || [], EQ(QQ).constructor) : WQ.apply(QQ, XQ))
    }

    function RQ() {
      try {
        var QQ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (QQ) {}
      return (RQ = function() {
        return !!QQ
      })()
    }

    function EQ(QQ) {
      return EQ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(QQ) {
        return QQ.__proto__ || Object.getPrototypeOf(QQ)
      }, EQ(QQ)
    }

    function CQ(QQ, WQ) {
      return CQ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(QQ, WQ) {
        return QQ.__proto__ = WQ, QQ
      }, CQ(QQ, WQ)
    }

    function uQ(QQ, WQ, XQ) {
      return (WQ = LQ(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }

    function LQ(QQ) {
      var WQ = function(QQ, WQ) {
        if ("object" != vQ(QQ) || !QQ) return QQ;
        var XQ = QQ[Symbol.toPrimitive];
        if (void 0 !== XQ) {
          var wQ = XQ.call(QQ, WQ || "default");
          if ("object" != vQ(wQ)) return wQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == vQ(WQ) ? WQ : WQ + ""
    }
    var kQ = function(QQ) {
      function WQ() {
        var QQ;
        ! function(QQ, WQ) {
          if (!(QQ instanceof WQ)) throw new TypeError("Cannot call a class as a function")
        }(this, WQ);
        for (var XQ = arguments.length, wQ = new Array(XQ), qQ = 0; qQ < XQ; qQ++) wQ[qQ] = arguments[qQ];
        return uQ(QQ = AQ(this, WQ, [].concat(wQ)), "state", {
          isAnimationFinished: !0,
          totalLength: 0
        }), uQ(QQ, "generateSimpleStrokeDasharray", (function(QQ, WQ) {
          return "".concat(WQ, "px ").concat(QQ - WQ, "px")
        })), uQ(QQ, "getStrokeDasharray", (function(XQ, wQ, qQ) {
          var TQ = qQ.reduce((function(QQ, WQ) {
            return QQ + WQ
          }));
          if (!TQ) return QQ.generateSimpleStrokeDasharray(wQ, XQ);
          for (var zQ = Math.floor(XQ / TQ), sQ = XQ % TQ, FQ = wQ - XQ, PQ = [], gQ = 0, JQ = 0; gQ < qQ.length; JQ += qQ[gQ], ++gQ)
            if (JQ + qQ[gQ] > sQ) {
              PQ = [].concat(hQ(qQ.slice(0, gQ)), [sQ - JQ]);
              break
            } var rQ = PQ.length % 2 === 0 ? [0, FQ] : [FQ];
          return [].concat(hQ(WQ.repeat(qQ, zQ)), hQ(PQ), rQ).map((function(QQ) {
            return "".concat(QQ, "px")
          })).join(", ")
        })), uQ(QQ, "id", (0, VQ.L)("recharts-line-")), uQ(QQ, "pathRef", (function(WQ) {
          QQ.mainCurve = WQ
        })), uQ(QQ, "handleAnimationEnd", (function() {
          QQ.setState({
            isAnimationFinished: !0
          }), QQ.props.onAnimationEnd && QQ.props.onAnimationEnd()
        })), uQ(QQ, "handleAnimationStart", (function() {
          QQ.setState({
            isAnimationFinished: !1
          }), QQ.props.onAnimationStart && QQ.props.onAnimationStart()
        })), QQ
      }
      return function(QQ, WQ) {
        if ("function" !== typeof WQ && null !== WQ) throw new TypeError("Super expression must either be null or a function");
        QQ.prototype = Object.create(WQ && WQ.prototype, {
          constructor: {
            value: QQ,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(QQ, "prototype", {
          writable: !1
        }), WQ && CQ(QQ, WQ)
      }(WQ, QQ), XQ = WQ, TQ = [{
        key: "componentDidMount",
        value: function() {
          if (this.props.isAnimationActive) {
            var QQ = this.getTotalLength();
            this.setState({
              totalLength: QQ
            })
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function() {
          if (this.props.isAnimationActive) {
            var QQ = this.getTotalLength();
            QQ !== this.state.totalLength && this.setState({
              totalLength: QQ
            })
          }
        }
      }, {
        key: "getTotalLength",
        value: function() {
          var QQ = this.mainCurve;
          try {
            return QQ && QQ.getTotalLength && QQ.getTotalLength() || 0
          } catch (WQ) {
            return 0
          }
        }
      }, {
        key: "renderErrorBar",
        value: function(QQ, WQ) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var XQ = this.props,
            qQ = XQ.points,
            TQ = XQ.xAxis,
            zQ = XQ.yAxis,
            sQ = XQ.layout,
            FQ = XQ.children,
            PQ = (0, DQ.h)(FQ, yQ.d);
          if (!PQ) return null;
          var gQ = function(QQ, WQ) {
              return {
                x: QQ.x,
                y: QQ.y,
                value: QQ.value,
                errorVal: (0, GQ.lb)(QQ.payload, WQ)
              }
            },
            JQ = {
              clipPath: QQ ? "url(#clipPath-".concat(WQ, ")") : null
            };
          return wQ.createElement(jQ.d, JQ, PQ.map((function(QQ) {
            return wQ.cloneElement(QQ, {
              key: "bar-".concat(QQ.props.dataKey),
              data: qQ,
              xAxis: TQ,
              yAxis: zQ,
              layout: sQ,
              dataPointFormatter: gQ
            })
          })))
        }
      }, {
        key: "renderDots",
        value: function(QQ, XQ, qQ) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var TQ = this.props,
            zQ = TQ.dot,
            sQ = TQ.points,
            FQ = TQ.dataKey,
            PQ = (0, DQ.e)(this.props, !1),
            gQ = (0, DQ.e)(zQ, !0),
            JQ = sQ.map((function(QQ, XQ) {
              var wQ = lQ(lQ(lQ({
                key: "dot-".concat(XQ),
                r: 3
              }, PQ), gQ), {}, {
                index: XQ,
                cx: QQ.x,
                cy: QQ.y,
                value: QQ.value,
                dataKey: FQ,
                payload: QQ.payload,
                points: sQ
              });
              return WQ.renderDotItem(zQ, wQ)
            })),
            rQ = {
              clipPath: QQ ? "url(#clipPath-".concat(XQ ? "" : "dots-").concat(qQ, ")") : null
            };
          return wQ.createElement(jQ.d, HQ({
            className: "recharts-line-dots",
            key: "dots"
          }, rQ), JQ)
        }
      }, {
        key: "renderCurveStatically",
        value: function(QQ, WQ, XQ, qQ) {
          var TQ = this.props,
            zQ = TQ.type,
            sQ = TQ.layout,
            FQ = TQ.connectNulls,
            PQ = (TQ.ref, dQ(TQ, UQ)),
            gQ = lQ(lQ(lQ({}, (0, DQ.e)(PQ, !0)), {}, {
              fill: "none",
              className: "recharts-line-curve",
              clipPath: WQ ? "url(#clipPath-".concat(XQ, ")") : null,
              points: QQ
            }, qQ), {}, {
              type: zQ,
              layout: sQ,
              connectNulls: FQ
            });
          return wQ.createElement(rQ.b, HQ({}, gQ, {
            pathRef: this.pathRef
          }))
        }
      }, {
        key: "renderCurveWithAnimation",
        value: function(QQ, WQ) {
          var XQ = this,
            TQ = this.props,
            zQ = TQ.points,
            sQ = TQ.strokeDasharray,
            FQ = TQ.isAnimationActive,
            PQ = TQ.animationBegin,
            gQ = TQ.animationDuration,
            JQ = TQ.animationEasing,
            rQ = TQ.animationId,
            IQ = TQ.animateNewValues,
            jQ = TQ.width,
            BQ = TQ.height,
            yQ = this.state,
            DQ = yQ.prevPoints,
            pQ = yQ.totalLength;
          return wQ.createElement(qQ.c, {
            gI: PQ,
            duration: gQ,
            isActive: FQ,
            easing: JQ,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "line-".concat(rQ),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(wQ) {
            var qQ = wQ.t;
            if (DQ) {
              var TQ = DQ.length / zQ.length,
                FQ = zQ.map((function(QQ, WQ) {
                  var XQ = Math.floor(WQ * TQ);
                  if (DQ[XQ]) {
                    var wQ = DQ[XQ],
                      zQ = (0, VQ.w)(wQ.x, QQ.x),
                      sQ = (0, VQ.w)(wQ.y, QQ.y);
                    return lQ(lQ({}, QQ), {}, {
                      x: zQ(qQ),
                      y: sQ(qQ)
                    })
                  }
                  if (IQ) {
                    var FQ = (0, VQ.w)(2 * jQ, QQ.x),
                      PQ = (0, VQ.w)(BQ / 2, QQ.y);
                    return lQ(lQ({}, QQ), {}, {
                      x: FQ(qQ),
                      y: PQ(qQ)
                    })
                  }
                  return lQ(lQ({}, QQ), {}, {
                    x: QQ.x,
                    y: QQ.y
                  })
                }));
              return XQ.renderCurveStatically(FQ, QQ, WQ)
            }
            var PQ, gQ = (0, VQ.w)(0, pQ)(qQ);
            if (sQ) {
              var JQ = "".concat(sQ).split(/[,\s]+/gim).map((function(QQ) {
                return parseFloat(QQ)
              }));
              PQ = XQ.getStrokeDasharray(gQ, pQ, JQ)
            } else PQ = XQ.generateSimpleStrokeDasharray(pQ, gQ);
            return XQ.renderCurveStatically(zQ, QQ, WQ, {
              strokeDasharray: PQ
            })
          }))
        }
      }, {
        key: "renderCurve",
        value: function(QQ, WQ) {
          var XQ = this.props,
            wQ = XQ.points,
            qQ = XQ.isAnimationActive,
            TQ = this.state,
            zQ = TQ.prevPoints,
            sQ = TQ.totalLength;
          return qQ && wQ && wQ.length && (!zQ && sQ > 0 || !gQ()(zQ, wQ)) ? this.renderCurveWithAnimation(QQ, WQ) : this.renderCurveStatically(wQ, QQ, WQ)
        }
      }, {
        key: "render",
        value: function() {
          var QQ, WQ = this.props,
            XQ = WQ.hide,
            qQ = WQ.dot,
            TQ = WQ.points,
            zQ = WQ.className,
            sQ = WQ.xAxis,
            PQ = WQ.yAxis,
            gQ = WQ.top,
            rQ = WQ.left,
            IQ = WQ.width,
            yQ = WQ.height,
            VQ = WQ.isAnimationActive,
            pQ = WQ.id;
          if (XQ || !TQ || !TQ.length) return null;
          var GQ = this.state.isAnimationFinished,
            UQ = 1 === TQ.length,
            bQ = (0, JQ.e)("recharts-line", zQ),
            vQ = sQ && sQ.allowDataOverflow,
            dQ = PQ && PQ.allowDataOverflow,
            HQ = vQ || dQ,
            aQ = FQ()(pQ) ? this.id : pQ,
            lQ = null !== (QQ = (0, DQ.e)(qQ, !1)) && void 0 !== QQ ? QQ : {
              r: 3,
              strokeWidth: 2
            },
            hQ = lQ.r,
            iQ = void 0 === hQ ? 3 : hQ,
            cQ = lQ.strokeWidth,
            AQ = void 0 === cQ ? 2 : cQ,
            RQ = ((0, DQ.q)(qQ) ? qQ : {}).clipDot,
            EQ = void 0 === RQ || RQ,
            CQ = 2 * iQ + AQ;
          return wQ.createElement(jQ.d, {
            className: bQ
          }, vQ || dQ ? wQ.createElement("defs", null, wQ.createElement("clipPath", {
            id: "clipPath-".concat(aQ)
          }, wQ.createElement("rect", {
            x: vQ ? rQ : rQ - IQ / 2,
            y: dQ ? gQ : gQ - yQ / 2,
            width: vQ ? IQ : 2 * IQ,
            height: dQ ? yQ : 2 * yQ
          })), !EQ && wQ.createElement("clipPath", {
            id: "clipPath-dots-".concat(aQ)
          }, wQ.createElement("rect", {
            x: rQ - CQ / 2,
            y: gQ - CQ / 2,
            width: IQ + CQ,
            height: yQ + CQ
          }))) : null, !UQ && this.renderCurve(HQ, aQ), this.renderErrorBar(HQ, aQ), (UQ || qQ) && this.renderDots(HQ, EQ, aQ), (!VQ || GQ) && BQ.b.renderCallByParent(this.props, TQ))
        }
      }], sQ = [{
        key: "getDerivedStateFromProps",
        value: function(QQ, WQ) {
          return QQ.animationId !== WQ.prevAnimationId ? {
            prevAnimationId: QQ.animationId,
            curPoints: QQ.points,
            prevPoints: WQ.curPoints
          } : QQ.points !== WQ.curPoints ? {
            curPoints: QQ.points
          } : null
        }
      }, {
        key: "repeat",
        value: function(QQ, WQ) {
          for (var XQ = QQ.length % 2 !== 0 ? [].concat(hQ(QQ), [0]) : QQ, wQ = [], qQ = 0; qQ < WQ; ++qQ) wQ = [].concat(hQ(wQ), hQ(XQ));
          return wQ
        }
      }, {
        key: "renderDotItem",
        value: function(QQ, WQ) {
          var XQ;
          if (wQ.isValidElement(QQ)) XQ = wQ.cloneElement(QQ, WQ);
          else if (zQ()(QQ)) XQ = QQ(WQ);
          else {
            var qQ = WQ.key,
              TQ = dQ(WQ, bQ),
              sQ = (0, JQ.e)("recharts-line-dot", "boolean" !== typeof QQ ? QQ.className : "");
            XQ = wQ.createElement(IQ.c, HQ({
              key: qQ
            }, TQ, {
              className: sQ
            }))
          }
          return XQ
        }
      }], TQ && cQ(XQ.prototype, TQ), sQ && cQ(XQ, sQ), Object.defineProperty(XQ, "prototype", {
        writable: !1
      }), XQ;
      var XQ, TQ, sQ
    }(wQ.PureComponent);
    uQ(kQ, "displayName", "Line"), uQ(kQ, "defaultProps", {
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
      isAnimationActive: !pQ.c.isSsr,
      animateNewValues: !0,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease",
      hide: !1,
      label: !1
    }), uQ(kQ, "getComposedData", (function(QQ) {
      var WQ = QQ.props,
        XQ = QQ.xAxis,
        wQ = QQ.yAxis,
        qQ = QQ.xAxisTicks,
        TQ = QQ.yAxisTicks,
        zQ = QQ.dataKey,
        sQ = QQ.bandSize,
        PQ = QQ.displayedData,
        gQ = QQ.offset,
        JQ = WQ.layout;
      return lQ({
        points: PQ.map((function(QQ, WQ) {
          var PQ = (0, GQ.lb)(QQ, zQ);
          return "horizontal" === JQ ? {
            x: (0, GQ.G)({
              axis: XQ,
              ticks: qQ,
              bandSize: sQ,
              entry: QQ,
              index: WQ
            }),
            y: FQ()(PQ) ? null : wQ.scale(PQ),
            value: PQ,
            payload: QQ
          } : {
            x: FQ()(PQ) ? null : XQ.scale(PQ),
            y: (0, GQ.G)({
              axis: wQ,
              ticks: TQ,
              bandSize: sQ,
              entry: QQ,
              index: WQ
            }),
            value: PQ,
            payload: QQ
          }
        })),
        layout: JQ
      }, gQ)
    }))
  },
  6710: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => AQ
    });
    var wQ = XQ(61),
      qQ = XQ(5622),
      TQ = XQ.n(qQ),
      zQ = XQ(6715),
      sQ = XQ.n(zQ),
      FQ = XQ(5423),
      PQ = XQ(6339),
      gQ = XQ(6611),
      JQ = XQ(6622),
      rQ = XQ(5520),
      IQ = XQ(6630),
      jQ = XQ(5770),
      BQ = XQ(5775),
      yQ = XQ(6727);

    function VQ(QQ) {
      return VQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, VQ(QQ)
    }

    function DQ(QQ, WQ) {
      for (var XQ = 0; XQ < WQ.length; XQ++) {
        var wQ = WQ[XQ];
        wQ.enumerable = wQ.enumerable || !1, wQ.configurable = !0, "value" in wQ && (wQ.writable = !0), Object.defineProperty(QQ, aQ(wQ.key), wQ)
      }
    }

    function pQ(QQ, WQ, XQ) {
      return WQ = UQ(WQ),
        function(QQ, WQ) {
          if (WQ && ("object" === VQ(WQ) || "function" === typeof WQ)) return WQ;
          if (void 0 !== WQ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(QQ) {
            if (void 0 === QQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return QQ
          }(QQ)
        }(QQ, GQ() ? Reflect.construct(WQ, XQ || [], UQ(QQ).constructor) : WQ.apply(QQ, XQ))
    }

    function GQ() {
      try {
        var QQ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (QQ) {}
      return (GQ = function() {
        return !!QQ
      })()
    }

    function UQ(QQ) {
      return UQ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(QQ) {
        return QQ.__proto__ || Object.getPrototypeOf(QQ)
      }, UQ(QQ)
    }

    function bQ(QQ, WQ) {
      return bQ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(QQ, WQ) {
        return QQ.__proto__ = WQ, QQ
      }, bQ(QQ, WQ)
    }

    function vQ(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function dQ(QQ) {
      for (var WQ = 1; WQ < arguments.length; WQ++) {
        var XQ = null != arguments[WQ] ? arguments[WQ] : {};
        WQ % 2 ? vQ(Object(XQ), !0).forEach((function(WQ) {
          HQ(QQ, WQ, XQ[WQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : vQ(Object(XQ)).forEach((function(WQ) {
          Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
        }))
      }
      return QQ
    }

    function HQ(QQ, WQ, XQ) {
      return (WQ = aQ(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }

    function aQ(QQ) {
      var WQ = function(QQ, WQ) {
        if ("object" != VQ(QQ) || !QQ) return QQ;
        var XQ = QQ[Symbol.toPrimitive];
        if (void 0 !== XQ) {
          var wQ = XQ.call(QQ, WQ || "default");
          if ("object" != VQ(wQ)) return wQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == VQ(WQ) ? WQ : WQ + ""
    }

    function lQ(QQ, WQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return QQ
      }(QQ) || function(QQ, WQ) {
        var XQ = null == QQ ? null : "undefined" != typeof Symbol && QQ[Symbol.iterator] || QQ["@@iterator"];
        if (null != XQ) {
          var wQ, qQ, TQ, zQ, sQ = [],
            FQ = !0,
            PQ = !1;
          try {
            if (TQ = (XQ = XQ.call(QQ)).next, 0 === WQ) {
              if (Object(XQ) !== XQ) return;
              FQ = !1
            } else
              for (; !(FQ = (wQ = TQ.call(XQ)).done) && (sQ.push(wQ.value), sQ.length !== WQ); FQ = !0);
          } catch (QQ) {
            PQ = !0, qQ = QQ
          } finally {
            try {
              if (!FQ && null != XQ.return && (zQ = XQ.return(), Object(zQ) !== zQ)) return
            } finally {
              if (PQ) throw qQ
            }
          }
          return sQ
        }
      }(QQ, WQ) || function(QQ, WQ) {
        if (!QQ) return;
        if ("string" === typeof QQ) return hQ(QQ, WQ);
        var XQ = Object.prototype.toString.call(QQ).slice(8, -1);
        "Object" === XQ && QQ.constructor && (XQ = QQ.constructor.name);
        if ("Map" === XQ || "Set" === XQ) return Array.from(QQ);
        if ("Arguments" === XQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(XQ)) return hQ(QQ, WQ)
      }(QQ, WQ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function hQ(QQ, WQ) {
      (null == WQ || WQ > QQ.length) && (WQ = QQ.length);
      for (var XQ = 0, wQ = new Array(WQ); XQ < WQ; XQ++) wQ[XQ] = QQ[XQ];
      return wQ
    }

    function iQ() {
      return iQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var WQ = 1; WQ < arguments.length; WQ++) {
          var XQ = arguments[WQ];
          for (var wQ in XQ) Object.prototype.hasOwnProperty.call(XQ, wQ) && (QQ[wQ] = XQ[wQ])
        }
        return QQ
      }, iQ.apply(this, arguments)
    }

    function cQ(QQ) {
      var WQ = QQ.x,
        XQ = QQ.y,
        qQ = QQ.segment,
        zQ = QQ.xAxisId,
        VQ = QQ.yAxisId,
        DQ = QQ.shape,
        pQ = QQ.className,
        GQ = QQ.alwaysShow,
        UQ = (0, yQ.p)(),
        bQ = (0, yQ.x)(zQ),
        vQ = (0, yQ.z)(VQ),
        HQ = (0, yQ.v)();
      if (!UQ || !HQ) return null;
      (0, jQ.c)(void 0 === GQ, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var aQ = function(QQ, WQ, XQ, wQ, qQ, TQ, zQ, FQ, PQ) {
        var gQ = qQ.x,
          rQ = qQ.y,
          IQ = qQ.width,
          jQ = qQ.height;
        if (XQ) {
          var BQ = PQ.y,
            yQ = QQ.y.apply(BQ, {
              position: TQ
            });
          if ((0, JQ.d)(PQ, "discard") && !QQ.y.isInRange(yQ)) return null;
          var VQ = [{
            x: gQ + IQ,
            y: yQ
          }, {
            x: gQ,
            y: yQ
          }];
          return "left" === FQ ? VQ.reverse() : VQ
        }
        if (WQ) {
          var DQ = PQ.x,
            pQ = QQ.x.apply(DQ, {
              position: TQ
            });
          if ((0, JQ.d)(PQ, "discard") && !QQ.x.isInRange(pQ)) return null;
          var GQ = [{
            x: pQ,
            y: rQ + jQ
          }, {
            x: pQ,
            y: rQ
          }];
          return "top" === zQ ? GQ.reverse() : GQ
        }
        if (wQ) {
          var UQ = PQ.segment.map((function(WQ) {
            return QQ.apply(WQ, {
              position: TQ
            })
          }));
          return (0, JQ.d)(PQ, "discard") && sQ()(UQ, (function(WQ) {
            return !QQ.isInRange(WQ)
          })) ? null : UQ
        }
        return null
      }((0, IQ.e)({
        x: bQ.scale,
        y: vQ.scale
      }), (0, rQ.B)(WQ), (0, rQ.B)(XQ), qQ && 2 === qQ.length, HQ, QQ.position, bQ.orientation, vQ.orientation, QQ);
      if (!aQ) return null;
      var hQ = lQ(aQ, 2),
        cQ = hQ[0],
        AQ = cQ.x,
        RQ = cQ.y,
        EQ = hQ[1],
        CQ = EQ.x,
        uQ = EQ.y,
        LQ = dQ(dQ({
          clipPath: (0, JQ.d)(QQ, "hidden") ? "url(#".concat(UQ, ")") : void 0
        }, (0, BQ.e)(QQ, !0)), {}, {
          x1: AQ,
          y1: RQ,
          x2: CQ,
          y2: uQ
        });
      return wQ.createElement(PQ.d, {
        className: (0, FQ.e)("recharts-reference-line", pQ)
      }, function(QQ, WQ) {
        return wQ.isValidElement(QQ) ? wQ.cloneElement(QQ, WQ) : TQ()(QQ) ? QQ(WQ) : wQ.createElement("line", iQ({}, WQ, {
          className: "recharts-reference-line-line"
        }))
      }(DQ, LQ), gQ.c.renderCallByParent(QQ, (0, IQ.i)({
        x1: AQ,
        y1: RQ,
        x2: CQ,
        y2: uQ
      })))
    }
    var AQ = function(QQ) {
      function WQ() {
        return function(QQ, WQ) {
          if (!(QQ instanceof WQ)) throw new TypeError("Cannot call a class as a function")
        }(this, WQ), pQ(this, WQ, arguments)
      }
      return function(QQ, WQ) {
        if ("function" !== typeof WQ && null !== WQ) throw new TypeError("Super expression must either be null or a function");
        QQ.prototype = Object.create(WQ && WQ.prototype, {
          constructor: {
            value: QQ,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(QQ, "prototype", {
          writable: !1
        }), WQ && bQ(QQ, WQ)
      }(WQ, QQ), XQ = WQ, (qQ = [{
        key: "render",
        value: function() {
          return wQ.createElement(cQ, this.props)
        }
      }]) && DQ(XQ.prototype, qQ), TQ && DQ(XQ, TQ), Object.defineProperty(XQ, "prototype", {
        writable: !1
      }), XQ;
      var XQ, qQ, TQ
    }(wQ.Component);
    HQ(AQ, "displayName", "ReferenceLine"), HQ(AQ, "defaultProps", {
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
  6770: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => DQ
    });
    var wQ = XQ(61),
      qQ = XQ(5423),
      TQ = XQ(6727),
      zQ = XQ(6774),
      sQ = XQ(6526);

    function FQ(QQ) {
      return FQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, FQ(QQ)
    }

    function PQ(QQ, WQ) {
      for (var XQ = 0; XQ < WQ.length; XQ++) {
        var wQ = WQ[XQ];
        wQ.enumerable = wQ.enumerable || !1, wQ.configurable = !0, "value" in wQ && (wQ.writable = !0), Object.defineProperty(QQ, BQ(wQ.key), wQ)
      }
    }

    function gQ(QQ, WQ, XQ) {
      return WQ = rQ(WQ),
        function(QQ, WQ) {
          if (WQ && ("object" === FQ(WQ) || "function" === typeof WQ)) return WQ;
          if (void 0 !== WQ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(QQ) {
            if (void 0 === QQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return QQ
          }(QQ)
        }(QQ, JQ() ? Reflect.construct(WQ, XQ || [], rQ(QQ).constructor) : WQ.apply(QQ, XQ))
    }

    function JQ() {
      try {
        var QQ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (QQ) {}
      return (JQ = function() {
        return !!QQ
      })()
    }

    function rQ(QQ) {
      return rQ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(QQ) {
        return QQ.__proto__ || Object.getPrototypeOf(QQ)
      }, rQ(QQ)
    }

    function IQ(QQ, WQ) {
      return IQ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(QQ, WQ) {
        return QQ.__proto__ = WQ, QQ
      }, IQ(QQ, WQ)
    }

    function jQ(QQ, WQ, XQ) {
      return (WQ = BQ(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }

    function BQ(QQ) {
      var WQ = function(QQ, WQ) {
        if ("object" != FQ(QQ) || !QQ) return QQ;
        var XQ = QQ[Symbol.toPrimitive];
        if (void 0 !== XQ) {
          var wQ = XQ.call(QQ, WQ || "default");
          if ("object" != FQ(wQ)) return wQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == FQ(WQ) ? WQ : WQ + ""
    }

    function yQ() {
      return yQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var WQ = 1; WQ < arguments.length; WQ++) {
          var XQ = arguments[WQ];
          for (var wQ in XQ) Object.prototype.hasOwnProperty.call(XQ, wQ) && (QQ[wQ] = XQ[wQ])
        }
        return QQ
      }, yQ.apply(this, arguments)
    }

    function VQ(QQ) {
      var WQ = QQ.xAxisId,
        XQ = (0, TQ.l)(),
        FQ = (0, TQ.j)(),
        PQ = (0, TQ.x)(WQ);
      return null == PQ ? null : wQ.createElement(zQ.b, yQ({}, PQ, {
        className: (0, qQ.e)("recharts-".concat(PQ.axisType, " ").concat(PQ.axisType), PQ.className),
        viewBox: {
          x: 0,
          y: 0,
          width: XQ,
          height: FQ
        },
        ticksGenerator: function(QQ) {
          return (0, sQ.eb)(QQ, !0)
        }
      }))
    }
    var DQ = function(QQ) {
      function WQ() {
        return function(QQ, WQ) {
          if (!(QQ instanceof WQ)) throw new TypeError("Cannot call a class as a function")
        }(this, WQ), gQ(this, WQ, arguments)
      }
      return function(QQ, WQ) {
        if ("function" !== typeof WQ && null !== WQ) throw new TypeError("Super expression must either be null or a function");
        QQ.prototype = Object.create(WQ && WQ.prototype, {
          constructor: {
            value: QQ,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(QQ, "prototype", {
          writable: !1
        }), WQ && IQ(QQ, WQ)
      }(WQ, QQ), XQ = WQ, (qQ = [{
        key: "render",
        value: function() {
          return wQ.createElement(VQ, this.props)
        }
      }]) && PQ(XQ.prototype, qQ), TQ && PQ(XQ, TQ), Object.defineProperty(XQ, "prototype", {
        writable: !1
      }), XQ;
      var XQ, qQ, TQ
    }(wQ.Component);
    jQ(DQ, "displayName", "XAxis"), jQ(DQ, "defaultProps", {
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
  6789: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => DQ
    });
    var wQ = XQ(61),
      qQ = XQ(5423),
      TQ = XQ(6727),
      zQ = XQ(6774),
      sQ = XQ(6526);

    function FQ(QQ) {
      return FQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, FQ(QQ)
    }

    function PQ(QQ, WQ) {
      for (var XQ = 0; XQ < WQ.length; XQ++) {
        var wQ = WQ[XQ];
        wQ.enumerable = wQ.enumerable || !1, wQ.configurable = !0, "value" in wQ && (wQ.writable = !0), Object.defineProperty(QQ, BQ(wQ.key), wQ)
      }
    }

    function gQ(QQ, WQ, XQ) {
      return WQ = rQ(WQ),
        function(QQ, WQ) {
          if (WQ && ("object" === FQ(WQ) || "function" === typeof WQ)) return WQ;
          if (void 0 !== WQ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(QQ) {
            if (void 0 === QQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return QQ
          }(QQ)
        }(QQ, JQ() ? Reflect.construct(WQ, XQ || [], rQ(QQ).constructor) : WQ.apply(QQ, XQ))
    }

    function JQ() {
      try {
        var QQ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (QQ) {}
      return (JQ = function() {
        return !!QQ
      })()
    }

    function rQ(QQ) {
      return rQ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(QQ) {
        return QQ.__proto__ || Object.getPrototypeOf(QQ)
      }, rQ(QQ)
    }

    function IQ(QQ, WQ) {
      return IQ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(QQ, WQ) {
        return QQ.__proto__ = WQ, QQ
      }, IQ(QQ, WQ)
    }

    function jQ(QQ, WQ, XQ) {
      return (WQ = BQ(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }

    function BQ(QQ) {
      var WQ = function(QQ, WQ) {
        if ("object" != FQ(QQ) || !QQ) return QQ;
        var XQ = QQ[Symbol.toPrimitive];
        if (void 0 !== XQ) {
          var wQ = XQ.call(QQ, WQ || "default");
          if ("object" != FQ(wQ)) return wQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == FQ(WQ) ? WQ : WQ + ""
    }

    function yQ() {
      return yQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var WQ = 1; WQ < arguments.length; WQ++) {
          var XQ = arguments[WQ];
          for (var wQ in XQ) Object.prototype.hasOwnProperty.call(XQ, wQ) && (QQ[wQ] = XQ[wQ])
        }
        return QQ
      }, yQ.apply(this, arguments)
    }
    var VQ = function(QQ) {
        var WQ = QQ.yAxisId,
          XQ = (0, TQ.l)(),
          FQ = (0, TQ.j)(),
          PQ = (0, TQ.z)(WQ);
        return null == PQ ? null : wQ.createElement(zQ.b, yQ({}, PQ, {
          className: (0, qQ.e)("recharts-".concat(PQ.axisType, " ").concat(PQ.axisType), PQ.className),
          viewBox: {
            x: 0,
            y: 0,
            width: XQ,
            height: FQ
          },
          ticksGenerator: function(QQ) {
            return (0, sQ.eb)(QQ, !0)
          }
        }))
      },
      DQ = function(QQ) {
        function WQ() {
          return function(QQ, WQ) {
            if (!(QQ instanceof WQ)) throw new TypeError("Cannot call a class as a function")
          }(this, WQ), gQ(this, WQ, arguments)
        }
        return function(QQ, WQ) {
          if ("function" !== typeof WQ && null !== WQ) throw new TypeError("Super expression must either be null or a function");
          QQ.prototype = Object.create(WQ && WQ.prototype, {
            constructor: {
              value: QQ,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(QQ, "prototype", {
            writable: !1
          }), WQ && IQ(QQ, WQ)
        }(WQ, QQ), XQ = WQ, (qQ = [{
          key: "render",
          value: function() {
            return wQ.createElement(VQ, this.props)
          }
        }]) && PQ(XQ.prototype, qQ), TQ && PQ(XQ, TQ), Object.defineProperty(XQ, "prototype", {
          writable: !1
        }), XQ;
        var XQ, qQ, TQ
      }(wQ.Component);
    jQ(DQ, "displayName", "YAxis"), jQ(DQ, "defaultProps", {
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
  6783: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => BQ
    });
    var wQ = XQ(5622),
      qQ = XQ.n(wQ),
      TQ = XQ(5520),
      zQ = XQ(6520),
      sQ = XQ(6345),
      FQ = XQ(6630);

    function PQ(QQ, WQ, XQ) {
      if (WQ < 1) return [];
      if (1 === WQ && void 0 === XQ) return QQ;
      for (var wQ = [], qQ = 0; qQ < QQ.length; qQ += WQ) {
        if (void 0 !== XQ && !0 !== XQ(QQ[qQ])) return;
        wQ.push(QQ[qQ])
      }
      return wQ
    }

    function gQ(QQ, WQ, XQ, wQ, qQ) {
      if (QQ * WQ < QQ * wQ || QQ * WQ > QQ * qQ) return !1;
      var TQ = XQ();
      return QQ * (WQ - QQ * TQ / 2 - wQ) >= 0 && QQ * (WQ + QQ * TQ / 2 - qQ) <= 0
    }

    function JQ(QQ) {
      return JQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, JQ(QQ)
    }

    function rQ(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function IQ(QQ) {
      for (var WQ = 1; WQ < arguments.length; WQ++) {
        var XQ = null != arguments[WQ] ? arguments[WQ] : {};
        WQ % 2 ? rQ(Object(XQ), !0).forEach((function(WQ) {
          jQ(QQ, WQ, XQ[WQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : rQ(Object(XQ)).forEach((function(WQ) {
          Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
        }))
      }
      return QQ
    }

    function jQ(QQ, WQ, XQ) {
      return (WQ = function(QQ) {
        var WQ = function(QQ, WQ) {
          if ("object" != JQ(QQ) || !QQ) return QQ;
          var XQ = QQ[Symbol.toPrimitive];
          if (void 0 !== XQ) {
            var wQ = XQ.call(QQ, WQ || "default");
            if ("object" != JQ(wQ)) return wQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == JQ(WQ) ? WQ : WQ + ""
      }(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }

    function BQ(QQ, WQ, XQ) {
      var wQ = QQ.fJ,
        JQ = QQ.ticks,
        rQ = QQ.viewBox,
        jQ = QQ.minTickGap,
        BQ = QQ.orientation,
        yQ = QQ.interval,
        VQ = QQ.tickFormatter,
        DQ = QQ.unit,
        pQ = QQ.angle;
      if (!JQ || !JQ.length || !wQ) return [];
      if ((0, TQ.D)(yQ) || sQ.c.isSsr) return function(QQ, WQ) {
        return PQ(QQ, WQ + 1)
      }(JQ, "number" === typeof yQ && (0, TQ.D)(yQ) ? yQ : 0);
      var GQ = [],
        UQ = "top" === BQ || "bottom" === BQ ? "width" : "height",
        bQ = DQ && "width" === UQ ? (0, zQ.g)(DQ, {
          fontSize: WQ,
          letterSpacing: XQ
        }) : {
          width: 0,
          height: 0
        },
        vQ = function(QQ, wQ) {
          var TQ = qQ()(VQ) ? VQ(QQ.value, wQ) : QQ.value;
          return "width" === UQ ? function(QQ, WQ, XQ) {
            var wQ = {
              width: QQ.width + WQ.width,
              height: QQ.height + WQ.height
            };
            return (0, FQ.h)(wQ, XQ)
          }((0, zQ.g)(TQ, {
            fontSize: WQ,
            letterSpacing: XQ
          }), bQ, pQ) : (0, zQ.g)(TQ, {
            fontSize: WQ,
            letterSpacing: XQ
          })[UQ]
        },
        dQ = JQ.length >= 2 ? (0, TQ.H)(JQ[1].coordinate - JQ[0].coordinate) : 1,
        HQ = function(QQ, WQ, XQ) {
          var wQ = "width" === XQ,
            qQ = QQ.x,
            TQ = QQ.y,
            zQ = QQ.width,
            sQ = QQ.height;
          return 1 === WQ ? {
            start: wQ ? qQ : TQ,
            end: wQ ? qQ + zQ : TQ + sQ
          } : {
            start: wQ ? qQ + zQ : TQ + sQ,
            end: wQ ? qQ : TQ
          }
        }(rQ, dQ, UQ);
      return "equidistantPreserveStart" === yQ ? function(QQ, WQ, XQ, wQ, qQ) {
        for (var TQ, zQ = (wQ || []).slice(), sQ = WQ.start, FQ = WQ.end, JQ = 0, rQ = 1, IQ = sQ, jQ = function() {
            var WQ = null === wQ || void 0 === wQ ? void 0 : wQ[JQ];
            if (void 0 === WQ) return {
              v: PQ(wQ, rQ)
            };
            var TQ, zQ = JQ,
              jQ = function() {
                return void 0 === TQ && (TQ = XQ(WQ, zQ)), TQ
              },
              BQ = WQ.coordinate,
              yQ = 0 === JQ || gQ(QQ, BQ, jQ, IQ, FQ);
            yQ || (JQ = 0, IQ = sQ, rQ += 1), yQ && (IQ = BQ + QQ * (jQ() / 2 + qQ), JQ += rQ)
          }; rQ <= zQ.length;)
          if (TQ = jQ()) return TQ.v;
        return []
      }(dQ, HQ, vQ, JQ, jQ) : (GQ = "preserveStart" === yQ || "preserveStartEnd" === yQ ? function(QQ, WQ, XQ, wQ, qQ, TQ) {
        var zQ = (wQ || []).slice(),
          sQ = zQ.length,
          FQ = WQ.start,
          PQ = WQ.end;
        if (TQ) {
          var JQ = wQ[sQ - 1],
            rQ = XQ(JQ, sQ - 1),
            jQ = QQ * (JQ.coordinate + QQ * rQ / 2 - PQ);
          zQ[sQ - 1] = JQ = IQ(IQ({}, JQ), {}, {
            tickCoord: jQ > 0 ? JQ.coordinate - jQ * QQ : JQ.coordinate
          }), gQ(QQ, JQ.tickCoord, (function() {
            return rQ
          }), FQ, PQ) && (PQ = JQ.tickCoord - QQ * (rQ / 2 + qQ), zQ[sQ - 1] = IQ(IQ({}, JQ), {}, {
            isShow: !0
          }))
        }
        for (var BQ = TQ ? sQ - 1 : sQ, yQ = function(WQ) {
            var wQ, TQ = zQ[WQ],
              sQ = function() {
                return void 0 === wQ && (wQ = XQ(TQ, WQ)), wQ
              };
            if (0 === WQ) {
              var JQ = QQ * (TQ.coordinate - QQ * sQ() / 2 - FQ);
              zQ[WQ] = TQ = IQ(IQ({}, TQ), {}, {
                tickCoord: JQ < 0 ? TQ.coordinate - JQ * QQ : TQ.coordinate
              })
            } else zQ[WQ] = TQ = IQ(IQ({}, TQ), {}, {
              tickCoord: TQ.coordinate
            });
            gQ(QQ, TQ.tickCoord, sQ, FQ, PQ) && (FQ = TQ.tickCoord + QQ * (sQ() / 2 + qQ), zQ[WQ] = IQ(IQ({}, TQ), {}, {
              isShow: !0
            }))
          }, VQ = 0; VQ < BQ; VQ++) yQ(VQ);
        return zQ
      }(dQ, HQ, vQ, JQ, jQ, "preserveStartEnd" === yQ) : function(QQ, WQ, XQ, wQ, qQ) {
        for (var TQ = (wQ || []).slice(), zQ = TQ.length, sQ = WQ.start, FQ = WQ.end, PQ = function(WQ) {
            var wQ, PQ = TQ[WQ],
              JQ = function() {
                return void 0 === wQ && (wQ = XQ(PQ, WQ)), wQ
              };
            if (WQ === zQ - 1) {
              var rQ = QQ * (PQ.coordinate + QQ * JQ() / 2 - FQ);
              TQ[WQ] = PQ = IQ(IQ({}, PQ), {}, {
                tickCoord: rQ > 0 ? PQ.coordinate - rQ * QQ : PQ.coordinate
              })
            } else TQ[WQ] = PQ = IQ(IQ({}, PQ), {}, {
              tickCoord: PQ.coordinate
            });
            gQ(QQ, PQ.tickCoord, JQ, sQ, FQ) && (FQ = PQ.tickCoord - QQ * (JQ() / 2 + qQ), TQ[WQ] = IQ(IQ({}, PQ), {}, {
              isShow: !0
            }))
          }, JQ = zQ - 1; JQ >= 0; JQ--) PQ(JQ);
        return TQ
      }(dQ, HQ, vQ, JQ, jQ), GQ.filter((function(QQ) {
        return QQ.isShow
      })))
    }
  },
  6804: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => FQ
    });
    var wQ = XQ(5815),
      qQ = XQ(6664),
      TQ = XQ(6770),
      zQ = XQ(6789),
      sQ = XQ(6630),
      FQ = (0, wQ.c)({
        chartName: "BarChart",
        GraphicalChild: qQ.c,
        defaultTooltipEventType: "axis",
        validateTooltipEventTypes: ["axis", "item"],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: TQ.c
        }, {
          axisType: "yAxis",
          AxisComp: zQ.e
        }],
        formatAxisMap: sQ.g
      })
  },
  5809: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => qW
    });
    var wQ = XQ(5815),
      qQ = XQ(6758),
      TQ = XQ(6664),
      zQ = XQ(6764),
      sQ = XQ(61),
      FQ = XQ(6513),
      PQ = XQ(5766),
      gQ = XQ.n(PQ),
      JQ = XQ(6590),
      rQ = XQ.n(JQ),
      IQ = XQ(5622),
      jQ = XQ.n(IQ),
      BQ = XQ(5423),
      yQ = XQ(6339),
      VQ = XQ(6675),
      DQ = XQ(5775),
      pQ = XQ(6345);

    function GQ(QQ) {
      return GQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, GQ(QQ)
    }

    function UQ(QQ, WQ) {
      for (var XQ = 0; XQ < WQ.length; XQ++) {
        var wQ = WQ[XQ];
        wQ.enumerable = wQ.enumerable || !1, wQ.configurable = !0, "value" in wQ && (wQ.writable = !0), Object.defineProperty(QQ, lQ(wQ.key), wQ)
      }
    }

    function bQ(QQ, WQ, XQ) {
      return WQ = dQ(WQ),
        function(QQ, WQ) {
          if (WQ && ("object" === GQ(WQ) || "function" === typeof WQ)) return WQ;
          if (void 0 !== WQ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(QQ) {
            if (void 0 === QQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return QQ
          }(QQ)
        }(QQ, vQ() ? Reflect.construct(WQ, XQ || [], dQ(QQ).constructor) : WQ.apply(QQ, XQ))
    }

    function vQ() {
      try {
        var QQ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (QQ) {}
      return (vQ = function() {
        return !!QQ
      })()
    }

    function dQ(QQ) {
      return dQ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(QQ) {
        return QQ.__proto__ || Object.getPrototypeOf(QQ)
      }, dQ(QQ)
    }

    function HQ(QQ, WQ) {
      return HQ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(QQ, WQ) {
        return QQ.__proto__ = WQ, QQ
      }, HQ(QQ, WQ)
    }

    function aQ(QQ, WQ, XQ) {
      return (WQ = lQ(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }

    function lQ(QQ) {
      var WQ = function(QQ, WQ) {
        if ("object" != GQ(QQ) || !QQ) return QQ;
        var XQ = QQ[Symbol.toPrimitive];
        if (void 0 !== XQ) {
          var wQ = XQ.call(QQ, WQ || "default");
          if ("object" != GQ(wQ)) return wQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == GQ(WQ) ? WQ : WQ + ""
    }
    var hQ = function(QQ) {
      function WQ() {
        return function(QQ, WQ) {
          if (!(QQ instanceof WQ)) throw new TypeError("Cannot call a class as a function")
        }(this, WQ), bQ(this, WQ, arguments)
      }
      return function(QQ, WQ) {
        if ("function" !== typeof WQ && null !== WQ) throw new TypeError("Super expression must either be null or a function");
        QQ.prototype = Object.create(WQ && WQ.prototype, {
          constructor: {
            value: QQ,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(QQ, "prototype", {
          writable: !1
        }), WQ && HQ(QQ, WQ)
      }(WQ, QQ), XQ = WQ, (wQ = [{
        key: "render",
        value: function() {
          return null
        }
      }]) && UQ(XQ.prototype, wQ), qQ && UQ(XQ, qQ), Object.defineProperty(XQ, "prototype", {
        writable: !1
      }), XQ;
      var XQ, wQ, qQ
    }(sQ.Component);
    aQ(hQ, "displayName", "ZAxis"), aQ(hQ, "defaultProps", {
      zAxisId: 0,
      range: [64, 64],
      scale: "auto",
      type: "number"
    });
    var iQ = XQ(6752),
      cQ = XQ(6596),
      AQ = XQ(6666),
      RQ = XQ(5520),
      EQ = XQ(6526),
      CQ = XQ(5800),
      uQ = XQ(6430),
      LQ = XQ(6688),
      kQ = ["option", "isActive"];

    function fQ() {
      return fQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var WQ = 1; WQ < arguments.length; WQ++) {
          var XQ = arguments[WQ];
          for (var wQ in XQ) Object.prototype.hasOwnProperty.call(XQ, wQ) && (QQ[wQ] = XQ[wQ])
        }
        return QQ
      }, fQ.apply(this, arguments)
    }

    function SQ(QQ, WQ) {
      if (null == QQ) return {};
      var XQ, wQ, qQ = function(QQ, WQ) {
        if (null == QQ) return {};
        var XQ = {};
        for (var wQ in QQ)
          if (Object.prototype.hasOwnProperty.call(QQ, wQ)) {
            if (WQ.indexOf(wQ) >= 0) continue;
            XQ[wQ] = QQ[wQ]
          } return XQ
      }(QQ, WQ);
      if (Object.getOwnPropertySymbols) {
        var TQ = Object.getOwnPropertySymbols(QQ);
        for (wQ = 0; wQ < TQ.length; wQ++) XQ = TQ[wQ], WQ.indexOf(XQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, XQ) && (qQ[XQ] = QQ[XQ])
      }
      return qQ
    }

    function tQ(QQ) {
      var WQ = QQ.option,
        XQ = QQ.isActive,
        wQ = SQ(QQ, kQ);
      return "string" === typeof WQ ? sQ.createElement(LQ.d, fQ({
        option: sQ.createElement(uQ.d, fQ({
          type: WQ
        }, wQ)),
        isActive: XQ,
        shapeType: "symbols"
      }, wQ)) : sQ.createElement(LQ.d, fQ({
        option: WQ,
        isActive: XQ,
        shapeType: "symbols"
      }, wQ))
    }

    function oQ(QQ) {
      return oQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, oQ(QQ)
    }

    function eQ() {
      return eQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var WQ = 1; WQ < arguments.length; WQ++) {
          var XQ = arguments[WQ];
          for (var wQ in XQ) Object.prototype.hasOwnProperty.call(XQ, wQ) && (QQ[wQ] = XQ[wQ])
        }
        return QQ
      }, eQ.apply(this, arguments)
    }

    function nQ(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function xQ(QQ) {
      for (var WQ = 1; WQ < arguments.length; WQ++) {
        var XQ = null != arguments[WQ] ? arguments[WQ] : {};
        WQ % 2 ? nQ(Object(XQ), !0).forEach((function(WQ) {
          mQ(QQ, WQ, XQ[WQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : nQ(Object(XQ)).forEach((function(WQ) {
          Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
        }))
      }
      return QQ
    }

    function YQ(QQ, WQ) {
      for (var XQ = 0; XQ < WQ.length; XQ++) {
        var wQ = WQ[XQ];
        wQ.enumerable = wQ.enumerable || !1, wQ.configurable = !0, "value" in wQ && (wQ.writable = !0), Object.defineProperty(QQ, MQ(wQ.key), wQ)
      }
    }

    function NQ(QQ, WQ, XQ) {
      return WQ = OQ(WQ),
        function(QQ, WQ) {
          if (WQ && ("object" === oQ(WQ) || "function" === typeof WQ)) return WQ;
          if (void 0 !== WQ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(QQ) {
            if (void 0 === QQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return QQ
          }(QQ)
        }(QQ, ZQ() ? Reflect.construct(WQ, XQ || [], OQ(QQ).constructor) : WQ.apply(QQ, XQ))
    }

    function ZQ() {
      try {
        var QQ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (QQ) {}
      return (ZQ = function() {
        return !!QQ
      })()
    }

    function OQ(QQ) {
      return OQ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(QQ) {
        return QQ.__proto__ || Object.getPrototypeOf(QQ)
      }, OQ(QQ)
    }

    function KQ(QQ, WQ) {
      return KQ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(QQ, WQ) {
        return QQ.__proto__ = WQ, QQ
      }, KQ(QQ, WQ)
    }

    function mQ(QQ, WQ, XQ) {
      return (WQ = MQ(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }

    function MQ(QQ) {
      var WQ = function(QQ, WQ) {
        if ("object" != oQ(QQ) || !QQ) return QQ;
        var XQ = QQ[Symbol.toPrimitive];
        if (void 0 !== XQ) {
          var wQ = XQ.call(QQ, WQ || "default");
          if ("object" != oQ(wQ)) return wQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == oQ(WQ) ? WQ : WQ + ""
    }
    var QW = function(QQ) {
      function WQ() {
        var QQ;
        ! function(QQ, WQ) {
          if (!(QQ instanceof WQ)) throw new TypeError("Cannot call a class as a function")
        }(this, WQ);
        for (var XQ = arguments.length, wQ = new Array(XQ), qQ = 0; qQ < XQ; qQ++) wQ[qQ] = arguments[qQ];
        return mQ(QQ = NQ(this, WQ, [].concat(wQ)), "state", {
          isAnimationFinished: !1
        }), mQ(QQ, "handleAnimationEnd", (function() {
          QQ.setState({
            isAnimationFinished: !0
          })
        })), mQ(QQ, "handleAnimationStart", (function() {
          QQ.setState({
            isAnimationFinished: !1
          })
        })), mQ(QQ, "id", (0, RQ.L)("recharts-scatter-")), QQ
      }
      return function(QQ, WQ) {
        if ("function" !== typeof WQ && null !== WQ) throw new TypeError("Super expression must either be null or a function");
        QQ.prototype = Object.create(WQ && WQ.prototype, {
          constructor: {
            value: QQ,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(QQ, "prototype", {
          writable: !1
        }), WQ && KQ(QQ, WQ)
      }(WQ, QQ), XQ = WQ, wQ = [{
        key: "renderSymbolsStatically",
        value: function(QQ) {
          var WQ = this,
            XQ = this.props,
            wQ = XQ.shape,
            qQ = XQ.activeShape,
            TQ = XQ.activeIndex,
            zQ = (0, DQ.e)(this.props, !1);
          return QQ.map((function(QQ, XQ) {
            var FQ = TQ === XQ,
              PQ = FQ ? qQ : wQ,
              gQ = xQ(xQ({}, zQ), QQ);
            return sQ.createElement(yQ.d, eQ({
              className: "recharts-scatter-symbol",
              key: "symbol-".concat(null === QQ || void 0 === QQ ? void 0 : QQ.cx, "-").concat(null === QQ || void 0 === QQ ? void 0 : QQ.cy, "-").concat(null === QQ || void 0 === QQ ? void 0 : QQ.size, "-").concat(XQ)
            }, (0, CQ.o)(WQ.props, QQ, XQ), {
              role: "img"
            }), sQ.createElement(tQ, eQ({
              option: PQ,
              isActive: FQ,
              key: "symbol-".concat(XQ)
            }, gQ)))
          }))
        }
      }, {
        key: "renderSymbolsWithAnimation",
        value: function() {
          var QQ = this,
            WQ = this.props,
            XQ = WQ.points,
            wQ = WQ.isAnimationActive,
            qQ = WQ.animationBegin,
            TQ = WQ.animationDuration,
            zQ = WQ.animationEasing,
            PQ = WQ.animationId,
            gQ = this.state.prevPoints;
          return sQ.createElement(FQ.c, {
            gI: qQ,
            duration: TQ,
            isActive: wQ,
            easing: zQ,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "pie-".concat(PQ),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(WQ) {
            var wQ = WQ.t,
              qQ = XQ.map((function(QQ, WQ) {
                var XQ = gQ && gQ[WQ];
                if (XQ) {
                  var qQ = (0, RQ.w)(XQ.cx, QQ.cx),
                    TQ = (0, RQ.w)(XQ.cy, QQ.cy),
                    zQ = (0, RQ.w)(XQ.size, QQ.size);
                  return xQ(xQ({}, QQ), {}, {
                    cx: qQ(wQ),
                    cy: TQ(wQ),
                    size: zQ(wQ)
                  })
                }
                var sQ = (0, RQ.w)(0, QQ.size);
                return xQ(xQ({}, QQ), {}, {
                  size: sQ(wQ)
                })
              }));
            return sQ.createElement(yQ.d, null, QQ.renderSymbolsStatically(qQ))
          }))
        }
      }, {
        key: "renderSymbols",
        value: function() {
          var QQ = this.props,
            WQ = QQ.points,
            XQ = QQ.isAnimationActive,
            wQ = this.state.prevPoints;
          return !(XQ && WQ && WQ.length) || wQ && rQ()(wQ, WQ) ? this.renderSymbolsStatically(WQ) : this.renderSymbolsWithAnimation()
        }
      }, {
        key: "renderErrorBar",
        value: function() {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var QQ = this.props,
            WQ = QQ.points,
            XQ = QQ.xAxis,
            wQ = QQ.yAxis,
            qQ = QQ.children,
            TQ = (0, DQ.h)(qQ, cQ.d);
          return TQ ? TQ.map((function(QQ, qQ) {
            var TQ = QQ.props,
              zQ = TQ.direction,
              FQ = TQ.dataKey;
            return sQ.cloneElement(QQ, {
              key: "".concat(zQ, "-").concat(FQ, "-").concat(WQ[qQ]),
              data: WQ,
              xAxis: XQ,
              yAxis: wQ,
              layout: "x" === zQ ? "vertical" : "horizontal",
              dataPointFormatter: function(QQ, WQ) {
                return {
                  x: QQ.cx,
                  y: QQ.cy,
                  value: "x" === zQ ? +QQ.node.x : +QQ.node.y,
                  errorVal: (0, EQ.lb)(QQ, WQ)
                }
              }
            })
          })) : null
        }
      }, {
        key: "renderLine",
        value: function() {
          var QQ, WQ, XQ = this.props,
            wQ = XQ.points,
            qQ = XQ.line,
            TQ = XQ.lineType,
            zQ = XQ.lineJointType,
            FQ = (0, DQ.e)(this.props, !1),
            PQ = (0, DQ.e)(qQ, !1);
          if ("joint" === TQ) QQ = wQ.map((function(QQ) {
            return {
              x: QQ.cx,
              y: QQ.cy
            }
          }));
          else if ("fitting" === TQ) {
            var gQ = (0, RQ.m)(wQ),
              JQ = gQ.xmin,
              rQ = gQ.xmax,
              IQ = gQ.a,
              BQ = gQ.b,
              VQ = function(QQ) {
                return IQ * QQ + BQ
              };
            QQ = [{
              x: JQ,
              y: VQ(JQ)
            }, {
              x: rQ,
              y: VQ(rQ)
            }]
          }
          var pQ = xQ(xQ(xQ({}, FQ), {}, {
            fill: "none",
            stroke: FQ && FQ.fill
          }, PQ), {}, {
            points: QQ
          });
          return WQ = sQ.isValidElement(qQ) ? sQ.cloneElement(qQ, pQ) : jQ()(qQ) ? qQ(pQ) : sQ.createElement(iQ.b, eQ({}, pQ, {
            type: zQ
          })), sQ.createElement(yQ.d, {
            className: "recharts-scatter-line",
            key: "recharts-scatter-line"
          }, WQ)
        }
      }, {
        key: "render",
        value: function() {
          var QQ = this.props,
            WQ = QQ.hide,
            XQ = QQ.points,
            wQ = QQ.line,
            qQ = QQ.className,
            TQ = QQ.xAxis,
            zQ = QQ.yAxis,
            FQ = QQ.left,
            PQ = QQ.top,
            JQ = QQ.width,
            rQ = QQ.height,
            IQ = QQ.id,
            jQ = QQ.isAnimationActive;
          if (WQ || !XQ || !XQ.length) return null;
          var DQ = this.state.isAnimationFinished,
            pQ = (0, BQ.e)("recharts-scatter", qQ),
            GQ = TQ && TQ.allowDataOverflow,
            UQ = zQ && zQ.allowDataOverflow,
            bQ = GQ || UQ,
            vQ = gQ()(IQ) ? this.id : IQ;
          return sQ.createElement(yQ.d, {
            className: pQ,
            clipPath: bQ ? "url(#clipPath-".concat(vQ, ")") : null
          }, GQ || UQ ? sQ.createElement("defs", null, sQ.createElement("clipPath", {
            id: "clipPath-".concat(vQ)
          }, sQ.createElement("rect", {
            x: GQ ? FQ : FQ - JQ / 2,
            y: UQ ? PQ : PQ - rQ / 2,
            width: GQ ? JQ : 2 * JQ,
            height: UQ ? rQ : 2 * rQ
          }))) : null, wQ && this.renderLine(), this.renderErrorBar(), sQ.createElement(yQ.d, {
            key: "recharts-scatter-symbols"
          }, this.renderSymbols()), (!jQ || DQ) && VQ.b.renderCallByParent(this.props, XQ))
        }
      }], qQ = [{
        key: "getDerivedStateFromProps",
        value: function(QQ, WQ) {
          return QQ.animationId !== WQ.prevAnimationId ? {
            prevAnimationId: QQ.animationId,
            curPoints: QQ.points,
            prevPoints: WQ.curPoints
          } : QQ.points !== WQ.curPoints ? {
            curPoints: QQ.points
          } : null
        }
      }], wQ && YQ(XQ.prototype, wQ), qQ && YQ(XQ, qQ), Object.defineProperty(XQ, "prototype", {
        writable: !1
      }), XQ;
      var XQ, wQ, qQ
    }(sQ.PureComponent);
    mQ(QW, "displayName", "Scatter"), mQ(QW, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      zAxisId: 0,
      legendType: "circle",
      lineType: "joint",
      lineJointType: "linear",
      data: [],
      shape: "circle",
      hide: !1,
      isAnimationActive: !pQ.c.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "linear"
    }), mQ(QW, "getComposedData", (function(QQ) {
      var WQ = QQ.xAxis,
        XQ = QQ.yAxis,
        wQ = QQ.zAxis,
        qQ = QQ.item,
        TQ = QQ.displayedData,
        zQ = QQ.xAxisTicks,
        sQ = QQ.yAxisTicks,
        FQ = QQ.offset,
        PQ = qQ.props.tooltipType,
        JQ = (0, DQ.h)(qQ.props.children, AQ.e),
        rQ = gQ()(WQ.dataKey) ? qQ.props.dataKey : WQ.dataKey,
        IQ = gQ()(XQ.dataKey) ? qQ.props.dataKey : XQ.dataKey,
        jQ = wQ && wQ.dataKey,
        BQ = wQ ? wQ.range : hQ.defaultProps.range,
        yQ = BQ && BQ[0],
        VQ = WQ.scale.bandwidth ? WQ.scale.bandwidth() : 0,
        pQ = XQ.scale.bandwidth ? XQ.scale.bandwidth() : 0,
        GQ = TQ.map((function(QQ, TQ) {
          var FQ = (0, EQ.lb)(QQ, rQ),
            BQ = (0, EQ.lb)(QQ, IQ),
            DQ = !gQ()(jQ) && (0, EQ.lb)(QQ, jQ) || "-",
            GQ = [{
              name: gQ()(WQ.dataKey) ? qQ.props.name : WQ.name || WQ.dataKey,
              unit: WQ.unit || "",
              value: FQ,
              payload: QQ,
              dataKey: rQ,
              type: PQ
            }, {
              name: gQ()(XQ.dataKey) ? qQ.props.name : XQ.name || XQ.dataKey,
              unit: XQ.unit || "",
              value: BQ,
              payload: QQ,
              dataKey: IQ,
              type: PQ
            }];
          "-" !== DQ && GQ.push({
            name: wQ.name || wQ.dataKey,
            unit: wQ.unit || "",
            value: DQ,
            payload: QQ,
            dataKey: jQ,
            type: PQ
          });
          var UQ = (0, EQ.G)({
              axis: WQ,
              ticks: zQ,
              bandSize: VQ,
              entry: QQ,
              index: TQ,
              dataKey: rQ
            }),
            bQ = (0, EQ.G)({
              axis: XQ,
              ticks: sQ,
              bandSize: pQ,
              entry: QQ,
              index: TQ,
              dataKey: IQ
            }),
            vQ = "-" !== DQ ? wQ.scale(DQ) : yQ,
            dQ = Math.sqrt(Math.max(vQ, 0) / Math.PI);
          return xQ(xQ({}, QQ), {}, {
            cx: UQ,
            cy: bQ,
            x: UQ - dQ,
            y: bQ - dQ,
            xAxis: WQ,
            yAxis: XQ,
            zAxis: wQ,
            width: 2 * dQ,
            height: 2 * dQ,
            size: vQ,
            node: {
              x: FQ,
              y: BQ,
              z: DQ
            },
            tooltipPayload: GQ,
            tooltipPosition: {
              x: UQ,
              y: bQ
            },
            payload: QQ
          }, JQ && JQ[TQ] && JQ[TQ].props)
        }));
      return xQ({
        points: GQ
      }, FQ)
    }));
    var WW = XQ(6770),
      XW = XQ(6789),
      wW = XQ(6630),
      qW = (0, wQ.c)({
        chartName: "ComposedChart",
        GraphicalChild: [zQ.d, qQ.c, TQ.c, QW],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: WW.c
        }, {
          axisType: "yAxis",
          AxisComp: XW.e
        }, {
          axisType: "zAxis",
          AxisComp: hQ
        }],
        formatAxisMap: wW.g
      })
  },
  5815: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => fX
    });
    var wQ = XQ(61),
      qQ = XQ(5766),
      TQ = XQ.n(qQ),
      zQ = XQ(5622),
      sQ = XQ.n(zQ),
      FQ = XQ(5821),
      PQ = XQ.n(FQ),
      gQ = XQ(5545),
      JQ = XQ.n(gQ),
      rQ = XQ(5866),
      IQ = XQ.n(rQ),
      jQ = XQ(5429),
      BQ = XQ.n(jQ),
      yQ = XQ(5423),
      VQ = XQ(6329),
      DQ = XQ(6333),
      pQ = XQ(6339),
      GQ = XQ(6341),
      UQ = XQ(6428),
      bQ = XQ(6496),
      vQ = XQ(6505),
      dQ = XQ(5775),
      HQ = XQ(6535),
      aQ = XQ(6518),
      lQ = XQ(6526),
      hQ = XQ(5520);

    function iQ(QQ) {
      return iQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, iQ(QQ)
    }

    function cQ(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function AQ(QQ) {
      for (var WQ = 1; WQ < arguments.length; WQ++) {
        var XQ = null != arguments[WQ] ? arguments[WQ] : {};
        WQ % 2 ? cQ(Object(XQ), !0).forEach((function(WQ) {
          RQ(QQ, WQ, XQ[WQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : cQ(Object(XQ)).forEach((function(WQ) {
          Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
        }))
      }
      return QQ
    }

    function RQ(QQ, WQ, XQ) {
      return (WQ = function(QQ) {
        var WQ = function(QQ, WQ) {
          if ("object" != iQ(QQ) || !QQ) return QQ;
          var XQ = QQ[Symbol.toPrimitive];
          if (void 0 !== XQ) {
            var wQ = XQ.call(QQ, WQ || "default");
            if ("object" != iQ(wQ)) return wQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == iQ(WQ) ? WQ : WQ + ""
      }(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }
    var EQ = ["Webkit", "Moz", "O", "ms"];

    function CQ(QQ) {
      return CQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, CQ(QQ)
    }

    function uQ() {
      return uQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var WQ = 1; WQ < arguments.length; WQ++) {
          var XQ = arguments[WQ];
          for (var wQ in XQ) Object.prototype.hasOwnProperty.call(XQ, wQ) && (QQ[wQ] = XQ[wQ])
        }
        return QQ
      }, uQ.apply(this, arguments)
    }

    function LQ(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function kQ(QQ) {
      for (var WQ = 1; WQ < arguments.length; WQ++) {
        var XQ = null != arguments[WQ] ? arguments[WQ] : {};
        WQ % 2 ? LQ(Object(XQ), !0).forEach((function(WQ) {
          nQ(QQ, WQ, XQ[WQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : LQ(Object(XQ)).forEach((function(WQ) {
          Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
        }))
      }
      return QQ
    }

    function fQ(QQ, WQ) {
      for (var XQ = 0; XQ < WQ.length; XQ++) {
        var wQ = WQ[XQ];
        wQ.enumerable = wQ.enumerable || !1, wQ.configurable = !0, "value" in wQ && (wQ.writable = !0), Object.defineProperty(QQ, xQ(wQ.key), wQ)
      }
    }

    function SQ(QQ, WQ, XQ) {
      return WQ = oQ(WQ),
        function(QQ, WQ) {
          if (WQ && ("object" === CQ(WQ) || "function" === typeof WQ)) return WQ;
          if (void 0 !== WQ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(QQ) {
            if (void 0 === QQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return QQ
          }(QQ)
        }(QQ, tQ() ? Reflect.construct(WQ, XQ || [], oQ(QQ).constructor) : WQ.apply(QQ, XQ))
    }

    function tQ() {
      try {
        var QQ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (QQ) {}
      return (tQ = function() {
        return !!QQ
      })()
    }

    function oQ(QQ) {
      return oQ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(QQ) {
        return QQ.__proto__ || Object.getPrototypeOf(QQ)
      }, oQ(QQ)
    }

    function eQ(QQ, WQ) {
      return eQ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(QQ, WQ) {
        return QQ.__proto__ = WQ, QQ
      }, eQ(QQ, WQ)
    }

    function nQ(QQ, WQ, XQ) {
      return (WQ = xQ(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }

    function xQ(QQ) {
      var WQ = function(QQ, WQ) {
        if ("object" != CQ(QQ) || !QQ) return QQ;
        var XQ = QQ[Symbol.toPrimitive];
        if (void 0 !== XQ) {
          var wQ = XQ.call(QQ, WQ || "default");
          if ("object" != CQ(wQ)) return wQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == CQ(WQ) ? WQ : WQ + ""
    }
    var YQ = function(QQ) {
        return QQ.changedTouches && !!QQ.changedTouches.length
      },
      NQ = function(QQ) {
        function WQ(QQ) {
          var XQ;
          return function(QQ, WQ) {
            if (!(QQ instanceof WQ)) throw new TypeError("Cannot call a class as a function")
          }(this, WQ), nQ(XQ = SQ(this, WQ, [QQ]), "handleDrag", (function(QQ) {
            XQ.leaveTimer && (clearTimeout(XQ.leaveTimer), XQ.leaveTimer = null), XQ.state.isTravellerMoving ? XQ.handleTravellerMove(QQ) : XQ.state.isSlideMoving && XQ.handleSlideDrag(QQ)
          })), nQ(XQ, "handleTouchMove", (function(QQ) {
            null != QQ.changedTouches && QQ.changedTouches.length > 0 && XQ.handleDrag(QQ.changedTouches[0])
          })), nQ(XQ, "handleDragEnd", (function() {
            XQ.setState({
              isTravellerMoving: !1,
              isSlideMoving: !1
            }, (function() {
              var QQ = XQ.props,
                WQ = QQ.endIndex,
                wQ = QQ.onDragEnd,
                qQ = QQ.startIndex;
              null === wQ || void 0 === wQ || wQ({
                endIndex: WQ,
                startIndex: qQ
              })
            })), XQ.detachDragEndListener()
          })), nQ(XQ, "handleLeaveWrapper", (function() {
            (XQ.state.isTravellerMoving || XQ.state.isSlideMoving) && (XQ.leaveTimer = window.setTimeout(XQ.handleDragEnd, XQ.props.leaveTimeOut))
          })), nQ(XQ, "handleEnterSlideOrTraveller", (function() {
            XQ.setState({
              isTextActive: !0
            })
          })), nQ(XQ, "handleLeaveSlideOrTraveller", (function() {
            XQ.setState({
              isTextActive: !1
            })
          })), nQ(XQ, "handleSlideDragStart", (function(QQ) {
            var WQ = YQ(QQ) ? QQ.changedTouches[0] : QQ;
            XQ.setState({
              isTravellerMoving: !1,
              isSlideMoving: !0,
              slideMoveStartX: WQ.pageX
            }), XQ.attachDragEndListener()
          })), XQ.travellerDragStartHandlers = {
            startX: XQ.handleTravellerDragStart.bind(XQ, "startX"),
            endX: XQ.handleTravellerDragStart.bind(XQ, "endX")
          }, XQ.state = {}, XQ
        }
        return function(QQ, WQ) {
          if ("function" !== typeof WQ && null !== WQ) throw new TypeError("Super expression must either be null or a function");
          QQ.prototype = Object.create(WQ && WQ.prototype, {
            constructor: {
              value: QQ,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(QQ, "prototype", {
            writable: !1
          }), WQ && eQ(QQ, WQ)
        }(WQ, QQ), XQ = WQ, qQ = [{
          key: "componentWillUnmount",
          value: function() {
            this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener()
          }
        }, {
          key: "getIndex",
          value: function(QQ) {
            var XQ = QQ.startX,
              wQ = QQ.endX,
              qQ = this.state.scaleValues,
              TQ = this.props,
              zQ = TQ.gap,
              sQ = TQ.data.length - 1,
              FQ = Math.min(XQ, wQ),
              PQ = Math.max(XQ, wQ),
              gQ = WQ.getIndexInRange(qQ, FQ),
              JQ = WQ.getIndexInRange(qQ, PQ);
            return {
              startIndex: gQ - gQ % zQ,
              endIndex: JQ === sQ ? sQ : JQ - JQ % zQ
            }
          }
        }, {
          key: "getTextOfTick",
          value: function(QQ) {
            var WQ = this.props,
              XQ = WQ.data,
              wQ = WQ.tickFormatter,
              qQ = WQ.dataKey,
              TQ = (0, lQ.lb)(XQ[QQ], qQ, QQ);
            return sQ()(wQ) ? wQ(TQ, QQ) : TQ
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
          value: function(QQ) {
            var WQ = this.state,
              XQ = WQ.slideMoveStartX,
              wQ = WQ.startX,
              qQ = WQ.endX,
              TQ = this.props,
              zQ = TQ.x,
              sQ = TQ.width,
              FQ = TQ.travellerWidth,
              PQ = TQ.startIndex,
              gQ = TQ.endIndex,
              JQ = TQ.onChange,
              rQ = QQ.pageX - XQ;
            rQ > 0 ? rQ = Math.min(rQ, zQ + sQ - FQ - qQ, zQ + sQ - FQ - wQ) : rQ < 0 && (rQ = Math.max(rQ, zQ - wQ, zQ - qQ));
            var IQ = this.getIndex({
              startX: wQ + rQ,
              endX: qQ + rQ
            });
            IQ.startIndex === PQ && IQ.endIndex === gQ || !JQ || JQ(IQ), this.setState({
              startX: wQ + rQ,
              endX: qQ + rQ,
              slideMoveStartX: QQ.pageX
            })
          }
        }, {
          key: "handleTravellerDragStart",
          value: function(QQ, WQ) {
            var XQ = YQ(WQ) ? WQ.changedTouches[0] : WQ;
            this.setState({
              isSlideMoving: !1,
              isTravellerMoving: !0,
              movingTravellerId: QQ,
              brushMoveStartX: XQ.pageX
            }), this.attachDragEndListener()
          }
        }, {
          key: "handleTravellerMove",
          value: function(QQ) {
            var WQ = this.state,
              XQ = WQ.brushMoveStartX,
              wQ = WQ.movingTravellerId,
              qQ = WQ.endX,
              TQ = WQ.startX,
              zQ = this.state[wQ],
              sQ = this.props,
              FQ = sQ.x,
              PQ = sQ.width,
              gQ = sQ.travellerWidth,
              JQ = sQ.onChange,
              rQ = sQ.gap,
              IQ = sQ.data,
              jQ = {
                startX: this.state.startX,
                endX: this.state.endX
              },
              BQ = QQ.pageX - XQ;
            BQ > 0 ? BQ = Math.min(BQ, FQ + PQ - gQ - zQ) : BQ < 0 && (BQ = Math.max(BQ, FQ - zQ)), jQ[wQ] = zQ + BQ;
            var yQ = this.getIndex(jQ),
              VQ = yQ.startIndex,
              DQ = yQ.endIndex;
            this.setState(nQ(nQ({}, wQ, zQ + BQ), "brushMoveStartX", QQ.pageX), (function() {
              JQ && function() {
                var QQ = IQ.length - 1;
                return "startX" === wQ && (qQ > TQ ? VQ % rQ === 0 : DQ % rQ === 0) || qQ < TQ && DQ === QQ || "endX" === wQ && (qQ > TQ ? DQ % rQ === 0 : VQ % rQ === 0) || qQ > TQ && DQ === QQ
              }() && JQ(yQ)
            }))
          }
        }, {
          key: "handleTravellerMoveKeyboard",
          value: function(QQ, WQ) {
            var XQ = this,
              wQ = this.state,
              qQ = wQ.scaleValues,
              TQ = wQ.startX,
              zQ = wQ.endX,
              sQ = this.state[WQ],
              FQ = qQ.indexOf(sQ);
            if (-1 !== FQ) {
              var PQ = FQ + QQ;
              if (!(-1 === PQ || PQ >= qQ.length)) {
                var gQ = qQ[PQ];
                "startX" === WQ && gQ >= zQ || "endX" === WQ && gQ <= TQ || this.setState(nQ({}, WQ, gQ), (function() {
                  XQ.props.onChange(XQ.getIndex({
                    startX: XQ.state.startX,
                    endX: XQ.state.endX
                  }))
                }))
              }
            }
          }
        }, {
          key: "renderBackground",
          value: function() {
            var QQ = this.props,
              WQ = QQ.x,
              XQ = QQ.y,
              qQ = QQ.width,
              TQ = QQ.height,
              zQ = QQ.fill,
              sQ = QQ.stroke;
            return wQ.createElement("rect", {
              stroke: sQ,
              fill: zQ,
              x: WQ,
              y: XQ,
              width: qQ,
              height: TQ
            })
          }
        }, {
          key: "renderPanorama",
          value: function() {
            var QQ = this.props,
              WQ = QQ.x,
              XQ = QQ.y,
              qQ = QQ.width,
              TQ = QQ.height,
              zQ = QQ.data,
              sQ = QQ.children,
              FQ = QQ.padding,
              PQ = wQ.Children.only(sQ);
            return PQ ? wQ.cloneElement(PQ, {
              x: WQ,
              y: XQ,
              width: qQ,
              height: TQ,
              margin: FQ,
              compact: !0,
              data: zQ
            }) : null
          }
        }, {
          key: "renderTravellerLayer",
          value: function(QQ, XQ) {
            var qQ, TQ, zQ = this,
              sQ = this.props,
              FQ = sQ.y,
              PQ = sQ.travellerWidth,
              gQ = sQ.height,
              JQ = sQ.traveller,
              rQ = sQ.ariaLabel,
              IQ = sQ.data,
              jQ = sQ.startIndex,
              BQ = sQ.endIndex,
              yQ = Math.max(QQ, this.props.x),
              VQ = kQ(kQ({}, (0, dQ.e)(this.props, !1)), {}, {
                x: yQ,
                y: FQ,
                width: PQ,
                height: gQ
              }),
              DQ = rQ || "Min value: ".concat(null === (qQ = IQ[jQ]) || void 0 === qQ ? void 0 : qQ.name, ", Max value: ").concat(null === (TQ = IQ[BQ]) || void 0 === TQ ? void 0 : TQ.name);
            return wQ.createElement(pQ.d, {
              tabIndex: 0,
              role: "slider",
              "aria-label": DQ,
              "aria-valuenow": QQ,
              className: "recharts-brush-traveller",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.travellerDragStartHandlers[XQ],
              onTouchStart: this.travellerDragStartHandlers[XQ],
              onKeyDown: function(QQ) {
                ["ArrowLeft", "ArrowRight"].includes(QQ.key) && (QQ.preventDefault(), QQ.stopPropagation(), zQ.handleTravellerMoveKeyboard("ArrowRight" === QQ.key ? 1 : -1, XQ))
              },
              onFocus: function() {
                zQ.setState({
                  isTravellerFocused: !0
                })
              },
              onBlur: function() {
                zQ.setState({
                  isTravellerFocused: !1
                })
              },
              style: {
                cursor: "col-resize"
              }
            }, WQ.renderTraveller(JQ, VQ))
          }
        }, {
          key: "renderSlide",
          value: function(QQ, WQ) {
            var XQ = this.props,
              qQ = XQ.y,
              TQ = XQ.height,
              zQ = XQ.stroke,
              sQ = XQ.travellerWidth,
              FQ = Math.min(QQ, WQ) + sQ,
              PQ = Math.max(Math.abs(WQ - QQ) - sQ, 0);
            return wQ.createElement("rect", {
              className: "recharts-brush-slide",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.handleSlideDragStart,
              onTouchStart: this.handleSlideDragStart,
              style: {
                cursor: "move"
              },
              stroke: "none",
              fill: zQ,
              fillOpacity: .2,
              x: FQ,
              y: qQ,
              width: PQ,
              height: TQ
            })
          }
        }, {
          key: "renderText",
          value: function() {
            var QQ = this.props,
              WQ = QQ.startIndex,
              XQ = QQ.endIndex,
              qQ = QQ.y,
              TQ = QQ.height,
              zQ = QQ.travellerWidth,
              sQ = QQ.stroke,
              FQ = this.state,
              PQ = FQ.startX,
              gQ = FQ.endX,
              JQ = {
                pointerEvents: "none",
                fill: sQ
              };
            return wQ.createElement(pQ.d, {
              className: "recharts-brush-texts"
            }, wQ.createElement(aQ.d, uQ({
              textAnchor: "end",
              verticalAnchor: "middle",
              x: Math.min(PQ, gQ) - 5,
              y: qQ + TQ / 2
            }, JQ), this.getTextOfTick(WQ)), wQ.createElement(aQ.d, uQ({
              textAnchor: "start",
              verticalAnchor: "middle",
              x: Math.max(PQ, gQ) + zQ + 5,
              y: qQ + TQ / 2
            }, JQ), this.getTextOfTick(XQ)))
          }
        }, {
          key: "render",
          value: function() {
            var QQ = this.props,
              WQ = QQ.data,
              XQ = QQ.className,
              qQ = QQ.children,
              TQ = QQ.x,
              zQ = QQ.y,
              sQ = QQ.width,
              FQ = QQ.height,
              PQ = QQ.alwaysShowText,
              gQ = this.state,
              JQ = gQ.startX,
              rQ = gQ.endX,
              IQ = gQ.isTextActive,
              jQ = gQ.isSlideMoving,
              BQ = gQ.isTravellerMoving,
              VQ = gQ.isTravellerFocused;
            if (!WQ || !WQ.length || !(0, hQ.D)(TQ) || !(0, hQ.D)(zQ) || !(0, hQ.D)(sQ) || !(0, hQ.D)(FQ) || sQ <= 0 || FQ <= 0) return null;
            var DQ = (0, yQ.e)("recharts-brush", XQ),
              GQ = 1 === wQ.Children.count(qQ),
              UQ = function(QQ, WQ) {
                if (!QQ) return null;
                var XQ = QQ.replace(/(\w)/, (function(QQ) {
                    return QQ.toUpperCase()
                  })),
                  wQ = EQ.reduce((function(QQ, wQ) {
                    return AQ(AQ({}, QQ), {}, RQ({}, wQ + XQ, WQ))
                  }), {});
                return wQ[QQ] = WQ, wQ
              }("userSelect", "none");
            return wQ.createElement(pQ.d, {
              className: DQ,
              onMouseLeave: this.handleLeaveWrapper,
              onTouchMove: this.handleTouchMove,
              style: UQ
            }, this.renderBackground(), GQ && this.renderPanorama(), this.renderSlide(JQ, rQ), this.renderTravellerLayer(JQ, "startX"), this.renderTravellerLayer(rQ, "endX"), (IQ || jQ || BQ || VQ || PQ) && this.renderText())
          }
        }], TQ = [{
          key: "renderDefaultTraveller",
          value: function(QQ) {
            var WQ = QQ.x,
              XQ = QQ.y,
              qQ = QQ.width,
              TQ = QQ.height,
              zQ = QQ.stroke,
              sQ = Math.floor(XQ + TQ / 2) - 1;
            return wQ.createElement(wQ.Fragment, null, wQ.createElement("rect", {
              x: WQ,
              y: XQ,
              width: qQ,
              height: TQ,
              fill: zQ,
              stroke: "none"
            }), wQ.createElement("line", {
              x1: WQ + 1,
              y1: sQ,
              x2: WQ + qQ - 1,
              y2: sQ,
              fill: "none",
              stroke: "#fff"
            }), wQ.createElement("line", {
              x1: WQ + 1,
              y1: sQ + 2,
              x2: WQ + qQ - 1,
              y2: sQ + 2,
              fill: "none",
              stroke: "#fff"
            }))
          }
        }, {
          key: "renderTraveller",
          value: function(QQ, XQ) {
            return wQ.isValidElement(QQ) ? wQ.cloneElement(QQ, XQ) : sQ()(QQ) ? QQ(XQ) : WQ.renderDefaultTraveller(XQ)
          }
        }, {
          key: "getDerivedStateFromProps",
          value: function(QQ, WQ) {
            var XQ = QQ.data,
              wQ = QQ.width,
              qQ = QQ.x,
              TQ = QQ.travellerWidth,
              zQ = QQ.updateId,
              sQ = QQ.startIndex,
              FQ = QQ.endIndex;
            if (XQ !== WQ.prevData || zQ !== WQ.prevUpdateId) return kQ({
              prevData: XQ,
              prevTravellerWidth: TQ,
              prevUpdateId: zQ,
              prevX: qQ,
              prevWidth: wQ
            }, XQ && XQ.length ? function(QQ) {
              var WQ = QQ.data,
                XQ = QQ.startIndex,
                wQ = QQ.endIndex,
                qQ = QQ.x,
                TQ = QQ.width,
                zQ = QQ.travellerWidth;
              if (!WQ || !WQ.length) return {};
              var sQ = WQ.length,
                FQ = (0, HQ.d)().domain(PQ()(0, sQ)).range([qQ, qQ + TQ - zQ]),
                gQ = FQ.domain().map((function(QQ) {
                  return FQ(QQ)
                }));
              return {
                isTextActive: !1,
                isSlideMoving: !1,
                isTravellerMoving: !1,
                isTravellerFocused: !1,
                startX: FQ(XQ),
                endX: FQ(wQ),
                scale: FQ,
                scaleValues: gQ
              }
            }({
              data: XQ,
              width: wQ,
              x: qQ,
              travellerWidth: TQ,
              startIndex: sQ,
              endIndex: FQ
            }) : {
              scale: null,
              scaleValues: null
            });
            if (WQ.scale && (wQ !== WQ.prevWidth || qQ !== WQ.prevX || TQ !== WQ.prevTravellerWidth)) {
              WQ.scale.range([qQ, qQ + wQ - TQ]);
              var gQ = WQ.scale.domain().map((function(QQ) {
                return WQ.scale(QQ)
              }));
              return {
                prevData: XQ,
                prevTravellerWidth: TQ,
                prevUpdateId: zQ,
                prevX: qQ,
                prevWidth: wQ,
                startX: WQ.scale(QQ.startIndex),
                endX: WQ.scale(QQ.endIndex),
                scaleValues: gQ
              }
            }
            return null
          }
        }, {
          key: "getIndexInRange",
          value: function(QQ, WQ) {
            for (var XQ = 0, wQ = QQ.length - 1; wQ - XQ > 1;) {
              var qQ = Math.floor((XQ + wQ) / 2);
              QQ[qQ] > WQ ? wQ = qQ : XQ = qQ
            }
            return WQ >= QQ[wQ] ? wQ : XQ
          }
        }], qQ && fQ(XQ.prototype, qQ), TQ && fQ(XQ, TQ), Object.defineProperty(XQ, "prototype", {
          writable: !1
        }), XQ;
        var XQ, qQ, TQ
      }(wQ.PureComponent);
    nQ(NQ, "displayName", "Brush"), nQ(NQ, "defaultProps", {
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
    var ZQ = XQ(6520),
      OQ = XQ(6601),
      KQ = XQ(6611),
      mQ = XQ(6622),
      MQ = XQ(6630),
      QW = XQ(5770);

    function WW() {
      return WW = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var WQ = 1; WQ < arguments.length; WQ++) {
          var XQ = arguments[WQ];
          for (var wQ in XQ) Object.prototype.hasOwnProperty.call(XQ, wQ) && (QQ[wQ] = XQ[wQ])
        }
        return QQ
      }, WW.apply(this, arguments)
    }

    function XW(QQ) {
      return XW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, XW(QQ)
    }

    function wW(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function qW(QQ) {
      for (var WQ = 1; WQ < arguments.length; WQ++) {
        var XQ = null != arguments[WQ] ? arguments[WQ] : {};
        WQ % 2 ? wW(Object(XQ), !0).forEach((function(WQ) {
          gW(QQ, WQ, XQ[WQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : wW(Object(XQ)).forEach((function(WQ) {
          Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
        }))
      }
      return QQ
    }

    function TW(QQ, WQ) {
      for (var XQ = 0; XQ < WQ.length; XQ++) {
        var wQ = WQ[XQ];
        wQ.enumerable = wQ.enumerable || !1, wQ.configurable = !0, "value" in wQ && (wQ.writable = !0), Object.defineProperty(QQ, JW(wQ.key), wQ)
      }
    }

    function zW(QQ, WQ, XQ) {
      return WQ = FW(WQ),
        function(QQ, WQ) {
          if (WQ && ("object" === XW(WQ) || "function" === typeof WQ)) return WQ;
          if (void 0 !== WQ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(QQ) {
            if (void 0 === QQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return QQ
          }(QQ)
        }(QQ, sW() ? Reflect.construct(WQ, XQ || [], FW(QQ).constructor) : WQ.apply(QQ, XQ))
    }

    function sW() {
      try {
        var QQ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (QQ) {}
      return (sW = function() {
        return !!QQ
      })()
    }

    function FW(QQ) {
      return FW = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(QQ) {
        return QQ.__proto__ || Object.getPrototypeOf(QQ)
      }, FW(QQ)
    }

    function PW(QQ, WQ) {
      return PW = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(QQ, WQ) {
        return QQ.__proto__ = WQ, QQ
      }, PW(QQ, WQ)
    }

    function gW(QQ, WQ, XQ) {
      return (WQ = JW(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }

    function JW(QQ) {
      var WQ = function(QQ, WQ) {
        if ("object" != XW(QQ) || !QQ) return QQ;
        var XQ = QQ[Symbol.toPrimitive];
        if (void 0 !== XQ) {
          var wQ = XQ.call(QQ, WQ || "default");
          if ("object" != XW(wQ)) return wQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == XW(WQ) ? WQ : WQ + ""
    }
    var rW = function(QQ) {
      function WQ() {
        return function(QQ, WQ) {
          if (!(QQ instanceof WQ)) throw new TypeError("Cannot call a class as a function")
        }(this, WQ), zW(this, WQ, arguments)
      }
      return function(QQ, WQ) {
        if ("function" !== typeof WQ && null !== WQ) throw new TypeError("Super expression must either be null or a function");
        QQ.prototype = Object.create(WQ && WQ.prototype, {
          constructor: {
            value: QQ,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(QQ, "prototype", {
          writable: !1
        }), WQ && PW(QQ, WQ)
      }(WQ, QQ), XQ = WQ, (qQ = [{
        key: "render",
        value: function() {
          var QQ = this.props,
            XQ = QQ.x,
            qQ = QQ.y,
            TQ = QQ.r,
            zQ = QQ.alwaysShow,
            sQ = QQ.clipPathId,
            FQ = (0, hQ.B)(XQ),
            PQ = (0, hQ.B)(qQ);
          if ((0, QW.c)(void 0 === zQ, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !FQ || !PQ) return null;
          var gQ = function(QQ) {
            var WQ = QQ.x,
              XQ = QQ.y,
              wQ = QQ.xAxis,
              qQ = QQ.yAxis,
              TQ = (0, MQ.e)({
                x: wQ.scale,
                y: qQ.scale
              }),
              zQ = TQ.apply({
                x: WQ,
                y: XQ
              }, {
                bandAware: !0
              });
            return (0, mQ.d)(QQ, "discard") && !TQ.isInRange(zQ) ? null : zQ
          }(this.props);
          if (!gQ) return null;
          var JQ = gQ.x,
            rQ = gQ.y,
            IQ = this.props,
            jQ = IQ.shape,
            BQ = IQ.className,
            VQ = qW(qW({
              clipPath: (0, mQ.d)(this.props, "hidden") ? "url(#".concat(sQ, ")") : void 0
            }, (0, dQ.e)(this.props, !0)), {}, {
              cx: JQ,
              cy: rQ
            });
          return wQ.createElement(pQ.d, {
            className: (0, yQ.e)("recharts-reference-dot", BQ)
          }, WQ.renderDot(jQ, VQ), KQ.c.renderCallByParent(this.props, {
            x: JQ - TQ,
            y: rQ - TQ,
            width: 2 * TQ,
            height: 2 * TQ
          }))
        }
      }]) && TW(XQ.prototype, qQ), TQ && TW(XQ, TQ), Object.defineProperty(XQ, "prototype", {
        writable: !1
      }), XQ;
      var XQ, qQ, TQ
    }(wQ.Component);
    gW(rW, "displayName", "ReferenceDot"), gW(rW, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#fff",
      stroke: "#ccc",
      fillOpacity: 1,
      strokeWidth: 1
    }), gW(rW, "renderDot", (function(QQ, WQ) {
      return wQ.isValidElement(QQ) ? wQ.cloneElement(QQ, WQ) : sQ()(QQ) ? QQ(WQ) : wQ.createElement(bQ.c, WW({}, WQ, {
        cx: WQ.cx,
        cy: WQ.cy,
        className: "recharts-reference-dot-dot"
      }))
    }));
    var IW = XQ(6710);

    function jW() {
      return jW = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var WQ = 1; WQ < arguments.length; WQ++) {
          var XQ = arguments[WQ];
          for (var wQ in XQ) Object.prototype.hasOwnProperty.call(XQ, wQ) && (QQ[wQ] = XQ[wQ])
        }
        return QQ
      }, jW.apply(this, arguments)
    }

    function BW(QQ) {
      return BW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, BW(QQ)
    }

    function yW(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function VW(QQ) {
      for (var WQ = 1; WQ < arguments.length; WQ++) {
        var XQ = null != arguments[WQ] ? arguments[WQ] : {};
        WQ % 2 ? yW(Object(XQ), !0).forEach((function(WQ) {
          vW(QQ, WQ, XQ[WQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : yW(Object(XQ)).forEach((function(WQ) {
          Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
        }))
      }
      return QQ
    }

    function DW(QQ, WQ) {
      for (var XQ = 0; XQ < WQ.length; XQ++) {
        var wQ = WQ[XQ];
        wQ.enumerable = wQ.enumerable || !1, wQ.configurable = !0, "value" in wQ && (wQ.writable = !0), Object.defineProperty(QQ, dW(wQ.key), wQ)
      }
    }

    function pW(QQ, WQ, XQ) {
      return WQ = UW(WQ),
        function(QQ, WQ) {
          if (WQ && ("object" === BW(WQ) || "function" === typeof WQ)) return WQ;
          if (void 0 !== WQ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(QQ) {
            if (void 0 === QQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return QQ
          }(QQ)
        }(QQ, GW() ? Reflect.construct(WQ, XQ || [], UW(QQ).constructor) : WQ.apply(QQ, XQ))
    }

    function GW() {
      try {
        var QQ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (QQ) {}
      return (GW = function() {
        return !!QQ
      })()
    }

    function UW(QQ) {
      return UW = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(QQ) {
        return QQ.__proto__ || Object.getPrototypeOf(QQ)
      }, UW(QQ)
    }

    function bW(QQ, WQ) {
      return bW = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(QQ, WQ) {
        return QQ.__proto__ = WQ, QQ
      }, bW(QQ, WQ)
    }

    function vW(QQ, WQ, XQ) {
      return (WQ = dW(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }

    function dW(QQ) {
      var WQ = function(QQ, WQ) {
        if ("object" != BW(QQ) || !QQ) return QQ;
        var XQ = QQ[Symbol.toPrimitive];
        if (void 0 !== XQ) {
          var wQ = XQ.call(QQ, WQ || "default");
          if ("object" != BW(wQ)) return wQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == BW(WQ) ? WQ : WQ + ""
    }
    var HW = function(QQ) {
      function WQ() {
        return function(QQ, WQ) {
          if (!(QQ instanceof WQ)) throw new TypeError("Cannot call a class as a function")
        }(this, WQ), pW(this, WQ, arguments)
      }
      return function(QQ, WQ) {
        if ("function" !== typeof WQ && null !== WQ) throw new TypeError("Super expression must either be null or a function");
        QQ.prototype = Object.create(WQ && WQ.prototype, {
          constructor: {
            value: QQ,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(QQ, "prototype", {
          writable: !1
        }), WQ && bW(QQ, WQ)
      }(WQ, QQ), XQ = WQ, (qQ = [{
        key: "render",
        value: function() {
          var QQ = this.props,
            XQ = QQ.x1,
            qQ = QQ.x2,
            TQ = QQ.y1,
            zQ = QQ.y2,
            sQ = QQ.className,
            FQ = QQ.alwaysShow,
            PQ = QQ.clipPathId;
          (0, QW.c)(void 0 === FQ, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
          var gQ = (0, hQ.B)(XQ),
            JQ = (0, hQ.B)(qQ),
            rQ = (0, hQ.B)(TQ),
            IQ = (0, hQ.B)(zQ),
            jQ = this.props.shape;
          if (!gQ && !JQ && !rQ && !IQ && !jQ) return null;
          var BQ = function(QQ, WQ, XQ, wQ, qQ) {
            var TQ = qQ.x1,
              zQ = qQ.x2,
              sQ = qQ.y1,
              FQ = qQ.y2,
              PQ = qQ.xAxis,
              gQ = qQ.yAxis;
            if (!PQ || !gQ) return null;
            var JQ = (0, MQ.e)({
                x: PQ.scale,
                y: gQ.scale
              }),
              rQ = {
                x: QQ ? JQ.x.apply(TQ, {
                  position: "start"
                }) : JQ.x.rangeMin,
                y: XQ ? JQ.y.apply(sQ, {
                  position: "start"
                }) : JQ.y.rangeMin
              },
              IQ = {
                x: WQ ? JQ.x.apply(zQ, {
                  position: "end"
                }) : JQ.x.rangeMax,
                y: wQ ? JQ.y.apply(FQ, {
                  position: "end"
                }) : JQ.y.rangeMax
              };
            return !(0, mQ.d)(qQ, "discard") || JQ.isInRange(rQ) && JQ.isInRange(IQ) ? (0, MQ.l)(rQ, IQ) : null
          }(gQ, JQ, rQ, IQ, this.props);
          if (!BQ && !jQ) return null;
          var VQ = (0, mQ.d)(this.props, "hidden") ? "url(#".concat(PQ, ")") : void 0;
          return wQ.createElement(pQ.d, {
            className: (0, yQ.e)("recharts-reference-area", sQ)
          }, WQ.renderRect(jQ, VW(VW({
            clipPath: VQ
          }, (0, dQ.e)(this.props, !0)), BQ)), KQ.c.renderCallByParent(this.props, BQ))
        }
      }]) && DW(XQ.prototype, qQ), TQ && DW(XQ, TQ), Object.defineProperty(XQ, "prototype", {
        writable: !1
      }), XQ;
      var XQ, qQ, TQ
    }(wQ.Component);

    function aW(QQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return lW(QQ)
      }(QQ) || function(QQ) {
        if ("undefined" !== typeof Symbol && null != QQ[Symbol.iterator] || null != QQ["@@iterator"]) return Array.from(QQ)
      }(QQ) || function(QQ, WQ) {
        if (!QQ) return;
        if ("string" === typeof QQ) return lW(QQ, WQ);
        var XQ = Object.prototype.toString.call(QQ).slice(8, -1);
        "Object" === XQ && QQ.constructor && (XQ = QQ.constructor.name);
        if ("Map" === XQ || "Set" === XQ) return Array.from(QQ);
        if ("Arguments" === XQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(XQ)) return lW(QQ, WQ)
      }(QQ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function lW(QQ, WQ) {
      (null == WQ || WQ > QQ.length) && (WQ = QQ.length);
      for (var XQ = 0, wQ = new Array(WQ); XQ < WQ; XQ++) wQ[XQ] = QQ[XQ];
      return wQ
    }
    vW(HW, "displayName", "ReferenceArea"), vW(HW, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#ccc",
      fillOpacity: .5,
      stroke: "none",
      strokeWidth: 1
    }), vW(HW, "renderRect", (function(QQ, WQ) {
      return wQ.isValidElement(QQ) ? wQ.cloneElement(QQ, WQ) : sQ()(QQ) ? QQ(WQ) : wQ.createElement(vQ.b, jW({}, WQ, {
        className: "recharts-reference-area-rect"
      }))
    }));
    var hW = function(QQ, WQ, XQ, wQ, qQ) {
        var TQ = (0, dQ.h)(QQ, IW.d),
          zQ = (0, dQ.h)(QQ, rW),
          sQ = [].concat(aW(TQ), aW(zQ)),
          FQ = (0, dQ.h)(QQ, HW),
          PQ = "".concat(wQ, "Id"),
          gQ = wQ[0],
          JQ = WQ;
        if (sQ.length && (JQ = sQ.reduce((function(QQ, WQ) {
            if (WQ.props[PQ] === XQ && (0, mQ.d)(WQ.props, "extendDomain") && (0, hQ.D)(WQ.props[gQ])) {
              var wQ = WQ.props[gQ];
              return [Math.min(QQ[0], wQ), Math.max(QQ[1], wQ)]
            }
            return QQ
          }), JQ)), FQ.length) {
          var rQ = "".concat(gQ, "1"),
            IQ = "".concat(gQ, "2");
          JQ = FQ.reduce((function(QQ, WQ) {
            if (WQ.props[PQ] === XQ && (0, mQ.d)(WQ.props, "extendDomain") && (0, hQ.D)(WQ.props[rQ]) && (0, hQ.D)(WQ.props[IQ])) {
              var wQ = WQ.props[rQ],
                qQ = WQ.props[IQ];
              return [Math.min(QQ[0], wQ, qQ), Math.max(QQ[1], wQ, qQ)]
            }
            return QQ
          }), JQ)
        }
        return qQ && qQ.length && (JQ = qQ.reduce((function(QQ, WQ) {
          return (0, hQ.D)(WQ) ? [Math.min(QQ[0], WQ), Math.max(QQ[1], WQ)] : QQ
        }), JQ)), JQ
      },
      iW = XQ(6619),
      cW = XQ(5791),
      AW = XQ(40),
      RW = new(XQ.n(AW)()),
      EW = "recharts.syncMouseEvents",
      CW = XQ(5800);

    function uW(QQ) {
      return uW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, uW(QQ)
    }

    function LW(QQ, WQ) {
      for (var XQ = 0; XQ < WQ.length; XQ++) {
        var wQ = WQ[XQ];
        wQ.enumerable = wQ.enumerable || !1, wQ.configurable = !0, "value" in wQ && (wQ.writable = !0), Object.defineProperty(QQ, fW(wQ.key), wQ)
      }
    }

    function kW(QQ, WQ, XQ) {
      return (WQ = fW(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }

    function fW(QQ) {
      var WQ = function(QQ, WQ) {
        if ("object" != uW(QQ) || !QQ) return QQ;
        var XQ = QQ[Symbol.toPrimitive];
        if (void 0 !== XQ) {
          var wQ = XQ.call(QQ, WQ || "default");
          if ("object" != uW(wQ)) return wQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == uW(WQ) ? WQ : WQ + ""
    }
    var SW = function() {
      return QQ = function QQ() {
        ! function(QQ, WQ) {
          if (!(QQ instanceof WQ)) throw new TypeError("Cannot call a class as a function")
        }(this, QQ), kW(this, "activeIndex", 0), kW(this, "coordinateList", []), kW(this, "layout", "horizontal")
      }, (WQ = [{
        key: "setDetails",
        value: function(QQ) {
          var WQ, XQ = QQ.coordinateList,
            wQ = void 0 === XQ ? null : XQ,
            qQ = QQ.container,
            TQ = void 0 === qQ ? null : qQ,
            zQ = QQ.layout,
            sQ = void 0 === zQ ? null : zQ,
            FQ = QQ.offset,
            PQ = void 0 === FQ ? null : FQ,
            gQ = QQ.mouseHandlerCallback,
            JQ = void 0 === gQ ? null : gQ;
          this.coordinateList = null !== (WQ = null !== wQ && void 0 !== wQ ? wQ : this.coordinateList) && void 0 !== WQ ? WQ : [], this.container = null !== TQ && void 0 !== TQ ? TQ : this.container, this.layout = null !== sQ && void 0 !== sQ ? sQ : this.layout, this.offset = null !== PQ && void 0 !== PQ ? PQ : this.offset, this.mouseHandlerCallback = null !== JQ && void 0 !== JQ ? JQ : this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1)
        }
      }, {
        key: "focus",
        value: function() {
          this.spoofMouse()
        }
      }, {
        key: "keyboardEvent",
        value: function(QQ) {
          if (0 !== this.coordinateList.length) switch (QQ.key) {
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
        value: function(QQ) {
          this.activeIndex = QQ
        }
      }, {
        key: "spoofMouse",
        value: function() {
          var QQ, WQ;
          if ("horizontal" === this.layout && 0 !== this.coordinateList.length) {
            var XQ = this.container.getBoundingClientRect(),
              wQ = XQ.x,
              qQ = XQ.y,
              TQ = XQ.height,
              zQ = this.coordinateList[this.activeIndex].coordinate,
              sQ = (null === (QQ = window) || void 0 === QQ ? void 0 : QQ.scrollX) || 0,
              FQ = (null === (WQ = window) || void 0 === WQ ? void 0 : WQ.scrollY) || 0,
              PQ = wQ + zQ + sQ,
              gQ = qQ + this.offset.top + TQ / 2 + FQ;
            this.mouseHandlerCallback({
              pageX: PQ,
              pageY: gQ
            })
          }
        }
      }]) && LW(QQ.prototype, WQ), XQ && LW(QQ, XQ), Object.defineProperty(QQ, "prototype", {
        writable: !1
      }), QQ;
      var QQ, WQ, XQ
    }();
    var tW = XQ(6688),
      oW = XQ(6752);

    function eW(QQ) {
      return eW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, eW(QQ)
    }
    var nW = ["x", "y", "top", "left", "width", "height", "className"];

    function xW() {
      return xW = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var WQ = 1; WQ < arguments.length; WQ++) {
          var XQ = arguments[WQ];
          for (var wQ in XQ) Object.prototype.hasOwnProperty.call(XQ, wQ) && (QQ[wQ] = XQ[wQ])
        }
        return QQ
      }, xW.apply(this, arguments)
    }

    function YW(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function NW(QQ, WQ, XQ) {
      return (WQ = function(QQ) {
        var WQ = function(QQ, WQ) {
          if ("object" != eW(QQ) || !QQ) return QQ;
          var XQ = QQ[Symbol.toPrimitive];
          if (void 0 !== XQ) {
            var wQ = XQ.call(QQ, WQ || "default");
            if ("object" != eW(wQ)) return wQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == eW(WQ) ? WQ : WQ + ""
      }(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }

    function ZW(QQ, WQ) {
      if (null == QQ) return {};
      var XQ, wQ, qQ = function(QQ, WQ) {
        if (null == QQ) return {};
        var XQ = {};
        for (var wQ in QQ)
          if (Object.prototype.hasOwnProperty.call(QQ, wQ)) {
            if (WQ.indexOf(wQ) >= 0) continue;
            XQ[wQ] = QQ[wQ]
          } return XQ
      }(QQ, WQ);
      if (Object.getOwnPropertySymbols) {
        var TQ = Object.getOwnPropertySymbols(QQ);
        for (wQ = 0; wQ < TQ.length; wQ++) XQ = TQ[wQ], WQ.indexOf(XQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, XQ) && (qQ[XQ] = QQ[XQ])
      }
      return qQ
    }
    var OW = function(QQ, WQ, XQ, wQ, qQ, TQ) {
        return "M".concat(QQ, ",").concat(qQ, "v").concat(wQ, "M").concat(TQ, ",").concat(WQ, "h").concat(XQ)
      },
      KW = function(QQ) {
        var WQ = QQ.x,
          XQ = void 0 === WQ ? 0 : WQ,
          qQ = QQ.y,
          TQ = void 0 === qQ ? 0 : qQ,
          zQ = QQ.top,
          sQ = void 0 === zQ ? 0 : zQ,
          FQ = QQ.left,
          PQ = void 0 === FQ ? 0 : FQ,
          gQ = QQ.width,
          JQ = void 0 === gQ ? 0 : gQ,
          rQ = QQ.height,
          IQ = void 0 === rQ ? 0 : rQ,
          jQ = QQ.className,
          BQ = function(QQ) {
            for (var WQ = 1; WQ < arguments.length; WQ++) {
              var XQ = null != arguments[WQ] ? arguments[WQ] : {};
              WQ % 2 ? YW(Object(XQ), !0).forEach((function(WQ) {
                NW(QQ, WQ, XQ[WQ])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : YW(Object(XQ)).forEach((function(WQ) {
                Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
              }))
            }
            return QQ
          }({
            x: XQ,
            y: TQ,
            top: sQ,
            left: PQ,
            width: JQ,
            height: IQ
          }, ZW(QQ, nW));
        return (0, hQ.D)(XQ) && (0, hQ.D)(TQ) && (0, hQ.D)(JQ) && (0, hQ.D)(IQ) && (0, hQ.D)(sQ) && (0, hQ.D)(PQ) ? wQ.createElement("path", xW({}, (0, dQ.e)(BQ, !0), {
          className: (0, yQ.e)("recharts-cross", jQ),
          d: OW(XQ, TQ, JQ, IQ, sQ, PQ)
        })) : null
      };

    function mW(QQ) {
      var WQ = QQ.cx,
        XQ = QQ.cy,
        wQ = QQ.radius,
        qQ = QQ.startAngle,
        TQ = QQ.endAngle;
      return {
        points: [(0, iW.e)(WQ, XQ, wQ, qQ), (0, iW.e)(WQ, XQ, wQ, TQ)],
        cx: WQ,
        cy: XQ,
        radius: wQ,
        startAngle: qQ,
        endAngle: TQ
      }
    }
    var MW = XQ(6705);

    function QX(QQ, WQ, XQ) {
      var wQ, qQ, TQ, zQ;
      if ("horizontal" === QQ) TQ = wQ = WQ.x, qQ = XQ.top, zQ = XQ.top + XQ.height;
      else if ("vertical" === QQ) zQ = qQ = WQ.y, wQ = XQ.left, TQ = XQ.left + XQ.width;
      else if (null != WQ.cx && null != WQ.cy) {
        if ("centric" !== QQ) return mW(WQ);
        var sQ = WQ.cx,
          FQ = WQ.cy,
          PQ = WQ.innerRadius,
          gQ = WQ.outerRadius,
          JQ = WQ.angle,
          rQ = (0, iW.e)(sQ, FQ, PQ, JQ),
          IQ = (0, iW.e)(sQ, FQ, gQ, JQ);
        wQ = rQ.x, qQ = rQ.y, TQ = IQ.x, zQ = IQ.y
      }
      return [{
        x: wQ,
        y: qQ
      }, {
        x: TQ,
        y: zQ
      }]
    }

    function WX(QQ) {
      return WX = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, WX(QQ)
    }

    function XX(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function wX(QQ) {
      for (var WQ = 1; WQ < arguments.length; WQ++) {
        var XQ = null != arguments[WQ] ? arguments[WQ] : {};
        WQ % 2 ? XX(Object(XQ), !0).forEach((function(WQ) {
          qX(QQ, WQ, XQ[WQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : XX(Object(XQ)).forEach((function(WQ) {
          Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
        }))
      }
      return QQ
    }

    function qX(QQ, WQ, XQ) {
      return (WQ = function(QQ) {
        var WQ = function(QQ, WQ) {
          if ("object" != WX(QQ) || !QQ) return QQ;
          var XQ = QQ[Symbol.toPrimitive];
          if (void 0 !== XQ) {
            var wQ = XQ.call(QQ, WQ || "default");
            if ("object" != WX(wQ)) return wQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == WX(WQ) ? WQ : WQ + ""
      }(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }

    function TX(QQ) {
      var WQ, XQ, qQ, TQ = QQ.element,
        zQ = QQ.tooltipEventType,
        sQ = QQ.isActive,
        FQ = QQ.activeCoordinate,
        PQ = QQ.activePayload,
        gQ = QQ.offset,
        JQ = QQ.activeTooltipIndex,
        rQ = QQ.tooltipAxisBandSize,
        IQ = QQ.layout,
        jQ = QQ.chartName,
        BQ = null !== (WQ = TQ.props.cursor) && void 0 !== WQ ? WQ : null === (XQ = TQ.type.defaultProps) || void 0 === XQ ? void 0 : XQ.cursor;
      if (!TQ || !BQ || !sQ || !FQ || "ScatterChart" !== jQ && "axis" !== zQ) return null;
      var VQ = oW.b;
      if ("ScatterChart" === jQ) qQ = FQ, VQ = KW;
      else if ("BarChart" === jQ) qQ = function(QQ, WQ, XQ, wQ) {
        var qQ = wQ / 2;
        return {
          stroke: "none",
          fill: "#ccc",
          x: "horizontal" === QQ ? WQ.x - qQ : XQ.left + .5,
          y: "horizontal" === QQ ? XQ.top + .5 : WQ.y - qQ,
          width: "horizontal" === QQ ? wQ : XQ.width - 1,
          height: "horizontal" === QQ ? XQ.height - 1 : wQ
        }
      }(IQ, FQ, gQ, rQ), VQ = vQ.b;
      else if ("radial" === IQ) {
        var DQ = mW(FQ),
          pQ = DQ.cx,
          GQ = DQ.cy,
          UQ = DQ.radius;
        qQ = {
          cx: pQ,
          cy: GQ,
          startAngle: DQ.startAngle,
          endAngle: DQ.endAngle,
          innerRadius: UQ,
          outerRadius: UQ
        }, VQ = MW.e
      } else qQ = {
        points: QX(IQ, FQ, gQ)
      }, VQ = oW.b;
      var bQ = wX(wX(wX(wX({
        stroke: "#ccc",
        pointerEvents: "none"
      }, gQ), qQ), (0, dQ.e)(BQ, !1)), {}, {
        payload: PQ,
        payloadIndex: JQ,
        className: (0, yQ.e)("recharts-tooltip-cursor", BQ.className)
      });
      return (0, wQ.isValidElement)(BQ) ? (0, wQ.cloneElement)(BQ, bQ) : (0, wQ.createElement)(VQ, bQ)
    }
    var zX = XQ(6727),
      sX = ["item"],
      FX = ["children", "className", "width", "height", "style", "compact", "title", "desc"];

    function PX(QQ) {
      return PX = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, PX(QQ)
    }

    function gX() {
      return gX = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var WQ = 1; WQ < arguments.length; WQ++) {
          var XQ = arguments[WQ];
          for (var wQ in XQ) Object.prototype.hasOwnProperty.call(XQ, wQ) && (QQ[wQ] = XQ[wQ])
        }
        return QQ
      }, gX.apply(this, arguments)
    }

    function JX(QQ, WQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return QQ
      }(QQ) || function(QQ, WQ) {
        var XQ = null == QQ ? null : "undefined" != typeof Symbol && QQ[Symbol.iterator] || QQ["@@iterator"];
        if (null != XQ) {
          var wQ, qQ, TQ, zQ, sQ = [],
            FQ = !0,
            PQ = !1;
          try {
            if (TQ = (XQ = XQ.call(QQ)).next, 0 === WQ) {
              if (Object(XQ) !== XQ) return;
              FQ = !1
            } else
              for (; !(FQ = (wQ = TQ.call(XQ)).done) && (sQ.push(wQ.value), sQ.length !== WQ); FQ = !0);
          } catch (QQ) {
            PQ = !0, qQ = QQ
          } finally {
            try {
              if (!FQ && null != XQ.return && (zQ = XQ.return(), Object(zQ) !== zQ)) return
            } finally {
              if (PQ) throw qQ
            }
          }
          return sQ
        }
      }(QQ, WQ) || pX(QQ, WQ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function rX(QQ, WQ) {
      if (null == QQ) return {};
      var XQ, wQ, qQ = function(QQ, WQ) {
        if (null == QQ) return {};
        var XQ = {};
        for (var wQ in QQ)
          if (Object.prototype.hasOwnProperty.call(QQ, wQ)) {
            if (WQ.indexOf(wQ) >= 0) continue;
            XQ[wQ] = QQ[wQ]
          } return XQ
      }(QQ, WQ);
      if (Object.getOwnPropertySymbols) {
        var TQ = Object.getOwnPropertySymbols(QQ);
        for (wQ = 0; wQ < TQ.length; wQ++) XQ = TQ[wQ], WQ.indexOf(XQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, XQ) && (qQ[XQ] = QQ[XQ])
      }
      return qQ
    }

    function IX(QQ, WQ) {
      for (var XQ = 0; XQ < WQ.length; XQ++) {
        var wQ = WQ[XQ];
        wQ.enumerable = wQ.enumerable || !1, wQ.configurable = !0, "value" in wQ && (wQ.writable = !0), Object.defineProperty(QQ, dX(wQ.key), wQ)
      }
    }

    function jX(QQ, WQ, XQ) {
      return WQ = yX(WQ),
        function(QQ, WQ) {
          if (WQ && ("object" === PX(WQ) || "function" === typeof WQ)) return WQ;
          if (void 0 !== WQ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(QQ) {
            if (void 0 === QQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return QQ
          }(QQ)
        }(QQ, BX() ? Reflect.construct(WQ, XQ || [], yX(QQ).constructor) : WQ.apply(QQ, XQ))
    }

    function BX() {
      try {
        var QQ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (QQ) {}
      return (BX = function() {
        return !!QQ
      })()
    }

    function yX(QQ) {
      return yX = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(QQ) {
        return QQ.__proto__ || Object.getPrototypeOf(QQ)
      }, yX(QQ)
    }

    function VX(QQ, WQ) {
      return VX = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(QQ, WQ) {
        return QQ.__proto__ = WQ, QQ
      }, VX(QQ, WQ)
    }

    function DX(QQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return GX(QQ)
      }(QQ) || function(QQ) {
        if ("undefined" !== typeof Symbol && null != QQ[Symbol.iterator] || null != QQ["@@iterator"]) return Array.from(QQ)
      }(QQ) || pX(QQ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function pX(QQ, WQ) {
      if (QQ) {
        if ("string" === typeof QQ) return GX(QQ, WQ);
        var XQ = Object.prototype.toString.call(QQ).slice(8, -1);
        return "Object" === XQ && QQ.constructor && (XQ = QQ.constructor.name), "Map" === XQ || "Set" === XQ ? Array.from(QQ) : "Arguments" === XQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(XQ) ? GX(QQ, WQ) : void 0
      }
    }

    function GX(QQ, WQ) {
      (null == WQ || WQ > QQ.length) && (WQ = QQ.length);
      for (var XQ = 0, wQ = new Array(WQ); XQ < WQ; XQ++) wQ[XQ] = QQ[XQ];
      return wQ
    }

    function UX(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function bX(QQ) {
      for (var WQ = 1; WQ < arguments.length; WQ++) {
        var XQ = null != arguments[WQ] ? arguments[WQ] : {};
        WQ % 2 ? UX(Object(XQ), !0).forEach((function(WQ) {
          vX(QQ, WQ, XQ[WQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : UX(Object(XQ)).forEach((function(WQ) {
          Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
        }))
      }
      return QQ
    }

    function vX(QQ, WQ, XQ) {
      return (WQ = dX(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }

    function dX(QQ) {
      var WQ = function(QQ, WQ) {
        if ("object" != PX(QQ) || !QQ) return QQ;
        var XQ = QQ[Symbol.toPrimitive];
        if (void 0 !== XQ) {
          var wQ = XQ.call(QQ, WQ || "default");
          if ("object" != PX(wQ)) return wQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == PX(WQ) ? WQ : WQ + ""
    }
    var HX = {
        xAxis: ["bottom", "top"],
        yAxis: ["left", "right"]
      },
      aX = {
        width: "100%",
        height: "100%"
      },
      lX = {
        x: 0,
        y: 0
      };

    function hX(QQ) {
      return QQ
    }
    var iX = function(QQ, WQ) {
      var XQ = WQ.graphicalItems,
        wQ = WQ.dataStartIndex,
        qQ = WQ.dataEndIndex,
        TQ = (null !== XQ && void 0 !== XQ ? XQ : []).reduce((function(QQ, WQ) {
          var XQ = WQ.props.data;
          return XQ && XQ.length ? [].concat(DX(QQ), DX(XQ)) : QQ
        }), []);
      return TQ.length > 0 ? TQ : QQ && QQ.length && (0, hQ.D)(wQ) && (0, hQ.D)(qQ) ? QQ.slice(wQ, qQ + 1) : []
    };

    function cX(QQ) {
      return "number" === QQ ? [0, "auto"] : void 0
    }
    var AX = function(QQ, WQ, XQ, wQ) {
        var qQ = QQ.graphicalItems,
          TQ = QQ.tooltipAxis,
          zQ = iX(WQ, QQ);
        return XQ < 0 || !qQ || !qQ.length || XQ >= zQ.length ? null : qQ.reduce((function(qQ, sQ) {
          var FQ, PQ, gQ = null !== (FQ = sQ.props.data) && void 0 !== FQ ? FQ : WQ;
          if (gQ && QQ.dataStartIndex + QQ.dataEndIndex !== 0 && QQ.dataEndIndex - QQ.dataStartIndex >= XQ && (gQ = gQ.slice(QQ.dataStartIndex, QQ.dataEndIndex + 1)), TQ.dataKey && !TQ.allowDuplicatedCategory) {
            var JQ = void 0 === gQ ? zQ : gQ;
            PQ = (0, hQ.f)(JQ, TQ.dataKey, wQ)
          } else PQ = gQ && gQ[XQ] || zQ[XQ];
          return PQ ? [].concat(DX(qQ), [(0, lQ.kb)(sQ, PQ)]) : qQ
        }), [])
      },
      RX = function(QQ, WQ, XQ, wQ) {
        var qQ = wQ || {
            x: QQ.chartX,
            y: QQ.chartY
          },
          TQ = function(QQ, WQ) {
            return "horizontal" === WQ ? QQ.x : "vertical" === WQ ? QQ.y : "centric" === WQ ? QQ.angle : QQ.radius
          }(qQ, XQ),
          zQ = QQ.orderedTooltipTicks,
          sQ = QQ.tooltipAxis,
          FQ = QQ.tooltipTicks,
          PQ = (0, lQ.g)(TQ, zQ, FQ, sQ);
        if (PQ >= 0 && FQ) {
          var gQ = FQ[PQ] && FQ[PQ].value,
            JQ = AX(QQ, WQ, PQ, gQ),
            rQ = function(QQ, WQ, XQ, wQ) {
              var qQ = WQ.find((function(QQ) {
                return QQ && QQ.index === XQ
              }));
              if (qQ) {
                if ("horizontal" === QQ) return {
                  x: qQ.coordinate,
                  y: wQ.y
                };
                if ("vertical" === QQ) return {
                  x: wQ.x,
                  y: qQ.coordinate
                };
                if ("centric" === QQ) {
                  var TQ = qQ.coordinate,
                    zQ = wQ.radius;
                  return bX(bX(bX({}, wQ), (0, iW.e)(wQ.cx, wQ.cy, zQ, TQ)), {}, {
                    angle: TQ,
                    radius: zQ
                  })
                }
                var sQ = qQ.coordinate,
                  FQ = wQ.angle;
                return bX(bX(bX({}, wQ), (0, iW.e)(wQ.cx, wQ.cy, sQ, FQ)), {}, {
                  angle: FQ,
                  radius: sQ
                })
              }
              return lX
            }(XQ, zQ, PQ, qQ);
          return {
            activeTooltipIndex: PQ,
            activeLabel: gQ,
            activePayload: JQ,
            activeCoordinate: rQ
          }
        }
        return null
      },
      EX = function(QQ, WQ) {
        var XQ = WQ.axes,
          wQ = WQ.graphicalItems,
          qQ = WQ.axisType,
          zQ = WQ.axisIdKey,
          sQ = WQ.stackGroups,
          FQ = WQ.dataStartIndex,
          gQ = WQ.dataEndIndex,
          JQ = QQ.layout,
          rQ = QQ.children,
          IQ = QQ.stackOffset,
          jQ = (0, lQ.pb)(JQ, qQ);
        return XQ.reduce((function(WQ, XQ) {
          var BQ, yQ = void 0 !== XQ.type.defaultProps ? bX(bX({}, XQ.type.defaultProps), XQ.props) : XQ.props,
            VQ = yQ.type,
            DQ = yQ.dataKey,
            pQ = yQ.allowDataOverflow,
            GQ = yQ.allowDuplicatedCategory,
            UQ = yQ.scale,
            bQ = yQ.ticks,
            vQ = yQ.includeHidden,
            dQ = yQ[zQ];
          if (WQ[dQ]) return WQ;
          var HQ, aQ, iQ, cQ = iX(QQ.data, {
              graphicalItems: wQ.filter((function(QQ) {
                var WQ;
                return (zQ in QQ.props ? QQ.props[zQ] : null === (WQ = QQ.type.defaultProps) || void 0 === WQ ? void 0 : WQ[zQ]) === dQ
              })),
              dataStartIndex: FQ,
              dataEndIndex: gQ
            }),
            AQ = cQ.length;
          (function(QQ, WQ, XQ) {
            if ("number" === XQ && !0 === WQ && Array.isArray(QQ)) {
              var wQ = null === QQ || void 0 === QQ ? void 0 : QQ[0],
                qQ = null === QQ || void 0 === QQ ? void 0 : QQ[1];
              if (wQ && qQ && (0, hQ.D)(wQ) && (0, hQ.D)(qQ)) return !0
            }
            return !1
          })(yQ.domain, pQ, VQ) && (HQ = (0, lQ.wb)(yQ.domain, null, pQ), !jQ || "number" !== VQ && "auto" === UQ || (iQ = (0, lQ.O)(cQ, DQ, "category")));
          var RQ = cX(VQ);
          if (!HQ || 0 === HQ.length) {
            var EQ, CQ = null !== (EQ = yQ.domain) && void 0 !== EQ ? EQ : RQ;
            if (DQ) {
              if (HQ = (0, lQ.O)(cQ, DQ, VQ), "category" === VQ && jQ) {
                var uQ = (0, hQ.s)(HQ);
                GQ && uQ ? (aQ = HQ, HQ = PQ()(0, AQ)) : GQ || (HQ = (0, lQ.qb)(CQ, HQ, XQ).reduce((function(QQ, WQ) {
                  return QQ.indexOf(WQ) >= 0 ? QQ : [].concat(DX(QQ), [WQ])
                }), []))
              } else if ("category" === VQ) HQ = GQ ? HQ.filter((function(QQ) {
                return "" !== QQ && !TQ()(QQ)
              })) : (0, lQ.qb)(CQ, HQ, XQ).reduce((function(QQ, WQ) {
                return QQ.indexOf(WQ) >= 0 || "" === WQ || TQ()(WQ) ? QQ : [].concat(DX(QQ), [WQ])
              }), []);
              else if ("number" === VQ) {
                var LQ = (0, lQ.sb)(cQ, wQ.filter((function(QQ) {
                  var WQ, XQ, wQ = zQ in QQ.props ? QQ.props[zQ] : null === (WQ = QQ.type.defaultProps) || void 0 === WQ ? void 0 : WQ[zQ],
                    qQ = "hide" in QQ.props ? QQ.props.hide : null === (XQ = QQ.type.defaultProps) || void 0 === XQ ? void 0 : XQ.hide;
                  return wQ === dQ && (vQ || !qQ)
                })), DQ, qQ, JQ);
                LQ && (HQ = LQ)
              }!jQ || "number" !== VQ && "auto" === UQ || (iQ = (0, lQ.O)(cQ, DQ, "category"))
            } else HQ = jQ ? PQ()(0, AQ) : sQ && sQ[dQ] && sQ[dQ].hasStack && "number" === VQ ? "expand" === IQ ? [0, 1] : (0, lQ.T)(sQ[dQ].stackGroups, FQ, gQ) : (0, lQ.R)(cQ, wQ.filter((function(QQ) {
              var WQ = zQ in QQ.props ? QQ.props[zQ] : QQ.type.defaultProps[zQ],
                XQ = "hide" in QQ.props ? QQ.props.hide : QQ.type.defaultProps.hide;
              return WQ === dQ && (vQ || !XQ)
            })), VQ, JQ, !0);
            if ("number" === VQ) HQ = hW(rQ, HQ, dQ, qQ, bQ), CQ && (HQ = (0, lQ.wb)(CQ, HQ, pQ));
            else if ("category" === VQ && CQ) {
              var kQ = CQ;
              HQ.every((function(QQ) {
                return kQ.indexOf(QQ) >= 0
              })) && (HQ = kQ)
            }
          }
          return bX(bX({}, WQ), {}, vX({}, dQ, bX(bX({}, yQ), {}, {
            axisType: qQ,
            domain: HQ,
            categoricalDomain: iQ,
            duplicateDomain: aQ,
            originalDomain: null !== (BQ = yQ.domain) && void 0 !== BQ ? BQ : RQ,
            isCategorical: jQ,
            layout: JQ
          })))
        }), {})
      },
      CX = function(QQ, WQ) {
        var XQ = WQ.axisType,
          wQ = void 0 === XQ ? "xAxis" : XQ,
          qQ = WQ.AxisComp,
          TQ = WQ.graphicalItems,
          zQ = WQ.stackGroups,
          sQ = WQ.dataStartIndex,
          FQ = WQ.dataEndIndex,
          gQ = QQ.children,
          rQ = "".concat(wQ, "Id"),
          IQ = (0, dQ.h)(gQ, qQ),
          jQ = {};
        return IQ && IQ.length ? jQ = EX(QQ, {
          axes: IQ,
          graphicalItems: TQ,
          axisType: wQ,
          axisIdKey: rQ,
          stackGroups: zQ,
          dataStartIndex: sQ,
          dataEndIndex: FQ
        }) : TQ && TQ.length && (jQ = function(QQ, WQ) {
          var XQ = WQ.graphicalItems,
            wQ = WQ.Axis,
            qQ = WQ.axisType,
            TQ = WQ.axisIdKey,
            zQ = WQ.stackGroups,
            sQ = WQ.dataStartIndex,
            FQ = WQ.dataEndIndex,
            gQ = QQ.layout,
            rQ = QQ.children,
            IQ = iX(QQ.data, {
              graphicalItems: XQ,
              dataStartIndex: sQ,
              dataEndIndex: FQ
            }),
            jQ = IQ.length,
            BQ = (0, lQ.pb)(gQ, qQ),
            yQ = -1;
          return XQ.reduce((function(QQ, WQ) {
            var VQ, DQ = (void 0 !== WQ.type.defaultProps ? bX(bX({}, WQ.type.defaultProps), WQ.props) : WQ.props)[TQ],
              pQ = cX("number");
            return QQ[DQ] ? QQ : (yQ++, BQ ? VQ = PQ()(0, jQ) : zQ && zQ[DQ] && zQ[DQ].hasStack ? (VQ = (0, lQ.T)(zQ[DQ].stackGroups, sQ, FQ), VQ = hW(rQ, VQ, DQ, qQ)) : (VQ = (0, lQ.wb)(pQ, (0, lQ.R)(IQ, XQ.filter((function(QQ) {
              var WQ, XQ, wQ = TQ in QQ.props ? QQ.props[TQ] : null === (WQ = QQ.type.defaultProps) || void 0 === WQ ? void 0 : WQ[TQ],
                qQ = "hide" in QQ.props ? QQ.props.hide : null === (XQ = QQ.type.defaultProps) || void 0 === XQ ? void 0 : XQ.hide;
              return wQ === DQ && !qQ
            })), "number", gQ), wQ.defaultProps.allowDataOverflow), VQ = hW(rQ, VQ, DQ, qQ)), bX(bX({}, QQ), {}, vX({}, DQ, bX(bX({
              axisType: qQ
            }, wQ.defaultProps), {}, {
              hide: !0,
              orientation: JQ()(HX, "".concat(qQ, ".").concat(yQ % 2), null),
              domain: VQ,
              originalDomain: pQ,
              isCategorical: BQ,
              layout: gQ
            }))))
          }), {})
        }(QQ, {
          Axis: qQ,
          graphicalItems: TQ,
          axisType: wQ,
          axisIdKey: rQ,
          stackGroups: zQ,
          dataStartIndex: sQ,
          dataEndIndex: FQ
        })), jQ
      },
      uX = function(QQ) {
        var WQ = QQ.children,
          XQ = QQ.defaultShowTooltip,
          wQ = (0, dQ.k)(WQ, NQ),
          qQ = 0,
          TQ = 0;
        return QQ.data && 0 !== QQ.data.length && (TQ = QQ.data.length - 1), wQ && wQ.props && (wQ.props.startIndex >= 0 && (qQ = wQ.props.startIndex), wQ.props.endIndex >= 0 && (TQ = wQ.props.endIndex)), {
          chartX: 0,
          chartY: 0,
          dataStartIndex: qQ,
          dataEndIndex: TQ,
          activeTooltipIndex: -1,
          isTooltipActive: Boolean(XQ)
        }
      },
      LX = function(QQ) {
        return "horizontal" === QQ ? {
          numericAxisName: "yAxis",
          cateAxisName: "xAxis"
        } : "vertical" === QQ ? {
          numericAxisName: "xAxis",
          cateAxisName: "yAxis"
        } : "centric" === QQ ? {
          numericAxisName: "radiusAxis",
          cateAxisName: "angleAxis"
        } : {
          numericAxisName: "angleAxis",
          cateAxisName: "radiusAxis"
        }
      },
      kX = function(QQ, WQ) {
        return "xAxis" === WQ ? QQ[WQ].width : "yAxis" === WQ ? QQ[WQ].height : void 0
      },
      fX = function(QQ) {
        var WQ = QQ.chartName,
          XQ = QQ.GraphicalChild,
          qQ = QQ.defaultTooltipEventType,
          zQ = void 0 === qQ ? "axis" : qQ,
          FQ = QQ.validateTooltipEventTypes,
          PQ = void 0 === FQ ? ["axis"] : FQ,
          gQ = QQ.axisComponents,
          rQ = QQ.legendContent,
          jQ = QQ.formatAxisMap,
          HQ = QQ.defaultProps,
          aQ = function(QQ, WQ) {
            var XQ = WQ.graphicalItems,
              wQ = WQ.stackGroups,
              qQ = WQ.offset,
              zQ = WQ.updateId,
              sQ = WQ.dataStartIndex,
              FQ = WQ.dataEndIndex,
              PQ = QQ.barSize,
              JQ = QQ.layout,
              rQ = QQ.barGap,
              IQ = QQ.barCategoryGap,
              jQ = QQ.maxBarSize,
              BQ = LX(JQ),
              yQ = BQ.numericAxisName,
              DQ = BQ.cateAxisName,
              pQ = function(QQ) {
                return !(!QQ || !QQ.length) && QQ.some((function(QQ) {
                  var WQ = (0, dQ.m)(QQ && QQ.type);
                  return WQ && WQ.indexOf("Bar") >= 0
                }))
              }(XQ),
              GQ = [];
            return XQ.forEach((function(XQ, BQ) {
              var UQ = iX(QQ.data, {
                  graphicalItems: [XQ],
                  dataStartIndex: sQ,
                  dataEndIndex: FQ
                }),
                bQ = void 0 !== XQ.type.defaultProps ? bX(bX({}, XQ.type.defaultProps), XQ.props) : XQ.props,
                vQ = bQ.dataKey,
                HQ = bQ.maxBarSize,
                aQ = bQ["".concat(yQ, "Id")],
                hQ = bQ["".concat(DQ, "Id")],
                iQ = gQ.reduce((function(QQ, XQ) {
                  var wQ = WQ["".concat(XQ.axisType, "Map")],
                    qQ = bQ["".concat(XQ.axisType, "Id")];
                  wQ && wQ[qQ] || "zAxis" === XQ.axisType || (0, VQ.b)(!1);
                  var TQ = wQ[qQ];
                  return bX(bX({}, QQ), {}, vX(vX({}, XQ.axisType, TQ), "".concat(XQ.axisType, "Ticks"), (0, lQ.eb)(TQ)))
                }), {}),
                cQ = iQ[DQ],
                AQ = iQ["".concat(DQ, "Ticks")],
                RQ = wQ && wQ[aQ] && wQ[aQ].hasStack && (0, lQ.cb)(XQ, wQ[aQ].stackGroups),
                EQ = (0, dQ.m)(XQ.type).indexOf("Bar") >= 0,
                CQ = (0, lQ.t)(cQ, AQ),
                uQ = [],
                LQ = pQ && (0, lQ.x)({
                  barSize: PQ,
                  stackGroups: wQ,
                  totalSize: kX(iQ, DQ)
                });
              if (EQ) {
                var kQ, fQ, SQ = TQ()(HQ) ? jQ : HQ,
                  tQ = null !== (kQ = null !== (fQ = (0, lQ.t)(cQ, AQ, !0)) && void 0 !== fQ ? fQ : SQ) && void 0 !== kQ ? kQ : 0;
                uQ = (0, lQ.w)({
                  barGap: rQ,
                  barCategoryGap: IQ,
                  bandSize: tQ !== CQ ? tQ : CQ,
                  sizeList: LQ[hQ],
                  maxBarSize: SQ
                }), tQ !== CQ && (uQ = uQ.map((function(QQ) {
                  return bX(bX({}, QQ), {}, {
                    position: bX(bX({}, QQ.position), {}, {
                      offset: QQ.position.offset - tQ / 2
                    })
                  })
                })))
              }
              var oQ = XQ && XQ.type && XQ.type.getComposedData;
              oQ && GQ.push({
                props: bX(bX({}, oQ(bX(bX({}, iQ), {}, {
                  displayedData: UQ,
                  props: QQ,
                  dataKey: vQ,
                  item: XQ,
                  bandSize: CQ,
                  barPosition: uQ,
                  offset: qQ,
                  stackedData: RQ,
                  layout: JQ,
                  dataStartIndex: sQ,
                  dataEndIndex: FQ
                }))), {}, vX(vX(vX({
                  key: XQ.key || "item-".concat(BQ)
                }, yQ, iQ[yQ]), DQ, iQ[DQ]), "animationId", zQ)),
                childIndex: (0, dQ.u)(XQ, QQ.children),
                item: XQ
              })
            })), GQ
          },
          iQ = function(QQ, wQ) {
            var qQ = QQ.props,
              TQ = QQ.dataStartIndex,
              zQ = QQ.dataEndIndex,
              sQ = QQ.updateId;
            if (!(0, dQ.z)({
                props: qQ
              })) return null;
            var FQ = qQ.children,
              PQ = qQ.layout,
              rQ = qQ.stackOffset,
              BQ = qQ.data,
              yQ = qQ.reverseStackOrder,
              VQ = LX(PQ),
              DQ = VQ.numericAxisName,
              pQ = VQ.cateAxisName,
              GQ = (0, dQ.h)(FQ, XQ),
              bQ = (0, lQ._)(BQ, GQ, "".concat(DQ, "Id"), "".concat(pQ, "Id"), rQ, yQ),
              vQ = gQ.reduce((function(QQ, WQ) {
                var XQ = "".concat(WQ.axisType, "Map");
                return bX(bX({}, QQ), {}, vX({}, XQ, CX(qQ, bX(bX({}, WQ), {}, {
                  graphicalItems: GQ,
                  stackGroups: WQ.axisType === DQ && bQ,
                  dataStartIndex: TQ,
                  dataEndIndex: zQ
                }))))
              }), {}),
              HQ = function(QQ, WQ) {
                var XQ = QQ.props,
                  wQ = QQ.graphicalItems,
                  qQ = QQ.xAxisMap,
                  TQ = void 0 === qQ ? {} : qQ,
                  zQ = QQ.yAxisMap,
                  sQ = void 0 === zQ ? {} : zQ,
                  FQ = XQ.width,
                  PQ = XQ.height,
                  gQ = XQ.children,
                  rQ = XQ.margin || {},
                  IQ = (0, dQ.k)(gQ, NQ),
                  jQ = (0, dQ.k)(gQ, UQ.c),
                  BQ = Object.keys(sQ).reduce((function(QQ, WQ) {
                    var XQ = sQ[WQ],
                      wQ = XQ.orientation;
                    return XQ.mirror || XQ.hide ? QQ : bX(bX({}, QQ), {}, vX({}, wQ, QQ[wQ] + XQ.width))
                  }), {
                    left: rQ.left || 0,
                    right: rQ.right || 0
                  }),
                  yQ = Object.keys(TQ).reduce((function(QQ, WQ) {
                    var XQ = TQ[WQ],
                      wQ = XQ.orientation;
                    return XQ.mirror || XQ.hide ? QQ : bX(bX({}, QQ), {}, vX({}, wQ, JQ()(QQ, "".concat(wQ)) + XQ.height))
                  }), {
                    top: rQ.top || 0,
                    bottom: rQ.bottom || 0
                  }),
                  VQ = bX(bX({}, yQ), BQ),
                  DQ = VQ.bottom;
                IQ && (VQ.bottom += IQ.props.height || NQ.defaultProps.height), jQ && WQ && (VQ = (0, lQ.e)(VQ, wQ, XQ, WQ));
                var pQ = FQ - VQ.left - VQ.right,
                  GQ = PQ - VQ.top - VQ.bottom;
                return bX(bX({
                  brushBottom: DQ
                }, VQ), {}, {
                  width: Math.max(pQ, 0),
                  height: Math.max(GQ, 0)
                })
              }(bX(bX({}, vQ), {}, {
                props: qQ,
                graphicalItems: GQ
              }), null === wQ || void 0 === wQ ? void 0 : wQ.legendBBox);
            Object.keys(vQ).forEach((function(QQ) {
              vQ[QQ] = jQ(qQ, vQ[QQ], HQ, QQ.replace("Map", ""), WQ)
            }));
            var iQ = function(QQ) {
                var WQ = (0, hQ.i)(QQ),
                  XQ = (0, lQ.eb)(WQ, !1, !0);
                return {
                  tooltipTicks: XQ,
                  orderedTooltipTicks: IQ()(XQ, (function(QQ) {
                    return QQ.coordinate
                  })),
                  tooltipAxis: WQ,
                  tooltipAxisBandSize: (0, lQ.t)(WQ, XQ)
                }
              }(vQ["".concat(pQ, "Map")]),
              cQ = aQ(qQ, bX(bX({}, vQ), {}, {
                dataStartIndex: TQ,
                dataEndIndex: zQ,
                updateId: sQ,
                graphicalItems: GQ,
                stackGroups: bQ,
                offset: HQ
              }));
            return bX(bX({
              formattedGraphicalItems: cQ,
              graphicalItems: GQ,
              offset: HQ,
              stackGroups: bQ
            }, iQ), vQ)
          },
          cQ = function(QQ) {
            function XQ(QQ) {
              var qQ, zQ, FQ;
              return function(QQ, WQ) {
                if (!(QQ instanceof WQ)) throw new TypeError("Cannot call a class as a function")
              }(this, XQ), vX(FQ = jX(this, XQ, [QQ]), "eventEmitterSymbol", Symbol("rechartsEventEmitter")), vX(FQ, "accessibilityManager", new SW), vX(FQ, "handleLegendBBoxUpdate", (function(QQ) {
                if (QQ) {
                  var WQ = FQ.state,
                    XQ = WQ.dataStartIndex,
                    wQ = WQ.dataEndIndex,
                    qQ = WQ.updateId;
                  FQ.setState(bX({
                    legendBBox: QQ
                  }, iQ({
                    props: FQ.props,
                    dataStartIndex: XQ,
                    dataEndIndex: wQ,
                    updateId: qQ
                  }, bX(bX({}, FQ.state), {}, {
                    legendBBox: QQ
                  }))))
                }
              })), vX(FQ, "handleReceiveSyncEvent", (function(QQ, WQ, XQ) {
                if (FQ.props.syncId === QQ) {
                  if (XQ === FQ.eventEmitterSymbol && "function" !== typeof FQ.props.syncMethod) return;
                  FQ.applySyncEvent(WQ)
                }
              })), vX(FQ, "handleBrushChange", (function(QQ) {
                var WQ = QQ.startIndex,
                  XQ = QQ.endIndex;
                if (WQ !== FQ.state.dataStartIndex || XQ !== FQ.state.dataEndIndex) {
                  var wQ = FQ.state.updateId;
                  FQ.setState((function() {
                    return bX({
                      dataStartIndex: WQ,
                      dataEndIndex: XQ
                    }, iQ({
                      props: FQ.props,
                      dataStartIndex: WQ,
                      dataEndIndex: XQ,
                      updateId: wQ
                    }, FQ.state))
                  })), FQ.triggerSyncEvent({
                    dataStartIndex: WQ,
                    dataEndIndex: XQ
                  })
                }
              })), vX(FQ, "handleMouseEnter", (function(QQ) {
                var WQ = FQ.getMouseInfo(QQ);
                if (WQ) {
                  var XQ = bX(bX({}, WQ), {}, {
                    isTooltipActive: !0
                  });
                  FQ.setState(XQ), FQ.triggerSyncEvent(XQ);
                  var wQ = FQ.props.onMouseEnter;
                  sQ()(wQ) && wQ(XQ, QQ)
                }
              })), vX(FQ, "triggeredAfterMouseMove", (function(QQ) {
                var WQ = FQ.getMouseInfo(QQ),
                  XQ = WQ ? bX(bX({}, WQ), {}, {
                    isTooltipActive: !0
                  }) : {
                    isTooltipActive: !1
                  };
                FQ.setState(XQ), FQ.triggerSyncEvent(XQ);
                var wQ = FQ.props.onMouseMove;
                sQ()(wQ) && wQ(XQ, QQ)
              })), vX(FQ, "handleItemMouseEnter", (function(QQ) {
                FQ.setState((function() {
                  return {
                    isTooltipActive: !0,
                    activeItem: QQ,
                    activePayload: QQ.tooltipPayload,
                    activeCoordinate: QQ.tooltipPosition || {
                      x: QQ.cx,
                      y: QQ.cy
                    }
                  }
                }))
              })), vX(FQ, "handleItemMouseLeave", (function() {
                FQ.setState((function() {
                  return {
                    isTooltipActive: !1
                  }
                }))
              })), vX(FQ, "handleMouseMove", (function(QQ) {
                QQ.persist(), FQ.throttleTriggeredAfterMouseMove(QQ)
              })), vX(FQ, "handleMouseLeave", (function(QQ) {
                FQ.throttleTriggeredAfterMouseMove.cancel();
                var WQ = {
                  isTooltipActive: !1
                };
                FQ.setState(WQ), FQ.triggerSyncEvent(WQ);
                var XQ = FQ.props.onMouseLeave;
                sQ()(XQ) && XQ(WQ, QQ)
              })), vX(FQ, "handleOuterEvent", (function(QQ) {
                var WQ, XQ = (0, dQ.n)(QQ),
                  wQ = JQ()(FQ.props, "".concat(XQ));
                XQ && sQ()(wQ) && wQ(null !== (WQ = /.*touch.*/i.test(XQ) ? FQ.getMouseInfo(QQ.changedTouches[0]) : FQ.getMouseInfo(QQ)) && void 0 !== WQ ? WQ : {}, QQ)
              })), vX(FQ, "handleClick", (function(QQ) {
                var WQ = FQ.getMouseInfo(QQ);
                if (WQ) {
                  var XQ = bX(bX({}, WQ), {}, {
                    isTooltipActive: !0
                  });
                  FQ.setState(XQ), FQ.triggerSyncEvent(XQ);
                  var wQ = FQ.props.onClick;
                  sQ()(wQ) && wQ(XQ, QQ)
                }
              })), vX(FQ, "handleMouseDown", (function(QQ) {
                var WQ = FQ.props.onMouseDown;
                sQ()(WQ) && WQ(FQ.getMouseInfo(QQ), QQ)
              })), vX(FQ, "handleMouseUp", (function(QQ) {
                var WQ = FQ.props.onMouseUp;
                sQ()(WQ) && WQ(FQ.getMouseInfo(QQ), QQ)
              })), vX(FQ, "handleTouchMove", (function(QQ) {
                null != QQ.changedTouches && QQ.changedTouches.length > 0 && FQ.throttleTriggeredAfterMouseMove(QQ.changedTouches[0])
              })), vX(FQ, "handleTouchStart", (function(QQ) {
                null != QQ.changedTouches && QQ.changedTouches.length > 0 && FQ.handleMouseDown(QQ.changedTouches[0])
              })), vX(FQ, "handleTouchEnd", (function(QQ) {
                null != QQ.changedTouches && QQ.changedTouches.length > 0 && FQ.handleMouseUp(QQ.changedTouches[0])
              })), vX(FQ, "handleDoubleClick", (function(QQ) {
                var WQ = FQ.props.onDoubleClick;
                sQ()(WQ) && WQ(FQ.getMouseInfo(QQ), QQ)
              })), vX(FQ, "handleContextMenu", (function(QQ) {
                var WQ = FQ.props.onContextMenu;
                sQ()(WQ) && WQ(FQ.getMouseInfo(QQ), QQ)
              })), vX(FQ, "triggerSyncEvent", (function(QQ) {
                void 0 !== FQ.props.syncId && RW.emit(EW, FQ.props.syncId, QQ, FQ.eventEmitterSymbol)
              })), vX(FQ, "applySyncEvent", (function(QQ) {
                var WQ = FQ.props,
                  XQ = WQ.layout,
                  wQ = WQ.syncMethod,
                  qQ = FQ.state.updateId,
                  TQ = QQ.dataStartIndex,
                  zQ = QQ.dataEndIndex;
                if (void 0 !== QQ.dataStartIndex || void 0 !== QQ.dataEndIndex) FQ.setState(bX({
                  dataStartIndex: TQ,
                  dataEndIndex: zQ
                }, iQ({
                  props: FQ.props,
                  dataStartIndex: TQ,
                  dataEndIndex: zQ,
                  updateId: qQ
                }, FQ.state)));
                else if (void 0 !== QQ.activeTooltipIndex) {
                  var sQ = QQ.chartX,
                    PQ = QQ.chartY,
                    gQ = QQ.activeTooltipIndex,
                    JQ = FQ.state,
                    rQ = JQ.offset,
                    IQ = JQ.tooltipTicks;
                  if (!rQ) return;
                  if ("function" === typeof wQ) gQ = wQ(IQ, QQ);
                  else if ("value" === wQ) {
                    gQ = -1;
                    for (var jQ = 0; jQ < IQ.length; jQ++)
                      if (IQ[jQ].value === QQ.activeLabel) {
                        gQ = jQ;
                        break
                      }
                  }
                  var BQ = bX(bX({}, rQ), {}, {
                      x: rQ.left,
                      y: rQ.top
                    }),
                    yQ = Math.min(sQ, BQ.x + BQ.width),
                    VQ = Math.min(PQ, BQ.y + BQ.height),
                    DQ = IQ[gQ] && IQ[gQ].value,
                    pQ = AX(FQ.state, FQ.props.data, gQ),
                    GQ = IQ[gQ] ? {
                      x: "horizontal" === XQ ? IQ[gQ].coordinate : yQ,
                      y: "horizontal" === XQ ? VQ : IQ[gQ].coordinate
                    } : lX;
                  FQ.setState(bX(bX({}, QQ), {}, {
                    activeLabel: DQ,
                    activeCoordinate: GQ,
                    activePayload: pQ,
                    activeTooltipIndex: gQ
                  }))
                } else FQ.setState(QQ)
              })), vX(FQ, "renderCursor", (function(QQ) {
                var XQ, qQ = FQ.state,
                  TQ = qQ.isTooltipActive,
                  zQ = qQ.activeCoordinate,
                  sQ = qQ.activePayload,
                  PQ = qQ.offset,
                  gQ = qQ.activeTooltipIndex,
                  JQ = qQ.tooltipAxisBandSize,
                  rQ = FQ.getTooltipEventType(),
                  IQ = null !== (XQ = QQ.props.active) && void 0 !== XQ ? XQ : TQ,
                  jQ = FQ.props.layout,
                  BQ = QQ.key || "_recharts-cursor";
                return wQ.createElement(TX, {
                  key: BQ,
                  activeCoordinate: zQ,
                  activePayload: sQ,
                  activeTooltipIndex: gQ,
                  chartName: WQ,
                  element: QQ,
                  isActive: IQ,
                  layout: jQ,
                  offset: PQ,
                  tooltipAxisBandSize: JQ,
                  tooltipEventType: rQ
                })
              })), vX(FQ, "renderPolarAxis", (function(QQ, WQ, XQ) {
                var qQ = JQ()(QQ, "type.axisType"),
                  TQ = JQ()(FQ.state, "".concat(qQ, "Map")),
                  zQ = QQ.type.defaultProps,
                  sQ = void 0 !== zQ ? bX(bX({}, zQ), QQ.props) : QQ.props,
                  PQ = TQ && TQ[sQ["".concat(qQ, "Id")]];
                return (0, wQ.cloneElement)(QQ, bX(bX({}, PQ), {}, {
                  className: (0, yQ.e)(qQ, PQ.className),
                  key: QQ.key || "".concat(WQ, "-").concat(XQ),
                  ticks: (0, lQ.eb)(PQ, !0)
                }))
              })), vX(FQ, "renderPolarGrid", (function(QQ) {
                var WQ = QQ.props,
                  XQ = WQ.radialLines,
                  qQ = WQ.polarAngles,
                  TQ = WQ.polarRadius,
                  zQ = FQ.state,
                  sQ = zQ.radiusAxisMap,
                  PQ = zQ.angleAxisMap,
                  gQ = (0, hQ.i)(sQ),
                  JQ = (0, hQ.i)(PQ),
                  rQ = JQ.cx,
                  IQ = JQ.cy,
                  jQ = JQ.innerRadius,
                  BQ = JQ.outerRadius;
                return (0, wQ.cloneElement)(QQ, {
                  polarAngles: Array.isArray(qQ) ? qQ : (0, lQ.eb)(JQ, !0).map((function(QQ) {
                    return QQ.coordinate
                  })),
                  polarRadius: Array.isArray(TQ) ? TQ : (0, lQ.eb)(gQ, !0).map((function(QQ) {
                    return QQ.coordinate
                  })),
                  cx: rQ,
                  cy: IQ,
                  innerRadius: jQ,
                  outerRadius: BQ,
                  key: QQ.key || "polar-grid",
                  radialLines: XQ
                })
              })), vX(FQ, "renderLegend", (function() {
                var QQ = FQ.state.formattedGraphicalItems,
                  WQ = FQ.props,
                  XQ = WQ.children,
                  qQ = WQ.width,
                  TQ = WQ.height,
                  zQ = FQ.props.margin || {},
                  sQ = qQ - (zQ.left || 0) - (zQ.right || 0),
                  PQ = (0, OQ.e)({
                    children: XQ,
                    formattedGraphicalItems: QQ,
                    legendWidth: sQ,
                    legendContent: rQ
                  });
                if (!PQ) return null;
                var gQ = PQ.item,
                  JQ = rX(PQ, sX);
                return (0, wQ.cloneElement)(gQ, bX(bX({}, JQ), {}, {
                  chartWidth: qQ,
                  chartHeight: TQ,
                  margin: zQ,
                  onBBoxUpdate: FQ.handleLegendBBoxUpdate
                }))
              })), vX(FQ, "renderTooltip", (function() {
                var QQ, WQ = FQ.props,
                  XQ = WQ.children,
                  qQ = WQ.accessibilityLayer,
                  TQ = (0, dQ.k)(XQ, GQ.d);
                if (!TQ) return null;
                var zQ = FQ.state,
                  sQ = zQ.isTooltipActive,
                  PQ = zQ.activeCoordinate,
                  gQ = zQ.activePayload,
                  JQ = zQ.activeLabel,
                  rQ = zQ.offset,
                  IQ = null !== (QQ = TQ.props.active) && void 0 !== QQ ? QQ : sQ;
                return (0, wQ.cloneElement)(TQ, {
                  viewBox: bX(bX({}, rQ), {}, {
                    x: rQ.left,
                    y: rQ.top
                  }),
                  active: IQ,
                  label: JQ,
                  payload: IQ ? gQ : [],
                  coordinate: PQ,
                  accessibilityLayer: qQ
                })
              })), vX(FQ, "renderBrush", (function(QQ) {
                var WQ = FQ.props,
                  XQ = WQ.margin,
                  qQ = WQ.data,
                  TQ = FQ.state,
                  zQ = TQ.offset,
                  sQ = TQ.dataStartIndex,
                  PQ = TQ.dataEndIndex,
                  gQ = TQ.updateId;
                return (0, wQ.cloneElement)(QQ, {
                  key: QQ.key || "_recharts-brush",
                  onChange: (0, lQ.m)(FQ.handleBrushChange, QQ.props.onChange),
                  data: qQ,
                  x: (0, hQ.D)(QQ.props.x) ? QQ.props.x : zQ.left,
                  y: (0, hQ.D)(QQ.props.y) ? QQ.props.y : zQ.top + zQ.height + zQ.brushBottom - (XQ.bottom || 0),
                  width: (0, hQ.D)(QQ.props.width) ? QQ.props.width : zQ.width,
                  startIndex: sQ,
                  endIndex: PQ,
                  updateId: "brush-".concat(gQ)
                })
              })), vX(FQ, "renderReferenceElement", (function(QQ, WQ, XQ) {
                if (!QQ) return null;
                var qQ = FQ.clipPathId,
                  TQ = FQ.state,
                  zQ = TQ.xAxisMap,
                  sQ = TQ.yAxisMap,
                  PQ = TQ.offset,
                  gQ = QQ.type.defaultProps || {},
                  JQ = QQ.props,
                  rQ = JQ.xAxisId,
                  IQ = void 0 === rQ ? gQ.xAxisId : rQ,
                  jQ = JQ.yAxisId,
                  BQ = void 0 === jQ ? gQ.yAxisId : jQ;
                return (0, wQ.cloneElement)(QQ, {
                  key: QQ.key || "".concat(WQ, "-").concat(XQ),
                  xAxis: zQ[IQ],
                  yAxis: sQ[BQ],
                  viewBox: {
                    x: PQ.left,
                    y: PQ.top,
                    width: PQ.width,
                    height: PQ.height
                  },
                  clipPathId: qQ
                })
              })), vX(FQ, "renderActivePoints", (function(QQ) {
                var WQ = QQ.item,
                  wQ = QQ.activePoint,
                  qQ = QQ.basePoint,
                  TQ = QQ.childIndex,
                  zQ = QQ.isRange,
                  sQ = [],
                  FQ = WQ.props.key,
                  PQ = void 0 !== WQ.item.type.defaultProps ? bX(bX({}, WQ.item.type.defaultProps), WQ.item.props) : WQ.item.props,
                  gQ = PQ.activeDot,
                  JQ = bX(bX({
                    index: TQ,
                    dataKey: PQ.dataKey,
                    cx: wQ.x,
                    cy: wQ.y,
                    r: 4,
                    fill: (0, lQ.X)(WQ.item),
                    strokeWidth: 2,
                    stroke: "#fff",
                    payload: wQ.payload,
                    value: wQ.value
                  }, (0, dQ.e)(gQ, !1)), (0, CW.k)(gQ));
                return sQ.push(XQ.renderActiveDot(gQ, JQ, "".concat(FQ, "-activePoint-").concat(TQ))), qQ ? sQ.push(XQ.renderActiveDot(gQ, bX(bX({}, JQ), {}, {
                  cx: qQ.x,
                  cy: qQ.y
                }), "".concat(FQ, "-basePoint-").concat(TQ))) : zQ && sQ.push(null), sQ
              })), vX(FQ, "renderGraphicChild", (function(QQ, WQ, XQ) {
                var qQ = FQ.filterFormatItem(QQ, WQ, XQ);
                if (!qQ) return null;
                var zQ = FQ.getTooltipEventType(),
                  sQ = FQ.state,
                  PQ = sQ.isTooltipActive,
                  gQ = sQ.tooltipAxis,
                  JQ = sQ.activeTooltipIndex,
                  rQ = sQ.activeLabel,
                  IQ = FQ.props.children,
                  jQ = (0, dQ.k)(IQ, GQ.d),
                  BQ = qQ.props,
                  yQ = BQ.points,
                  VQ = BQ.isRange,
                  DQ = BQ.baseLine,
                  pQ = void 0 !== qQ.item.type.defaultProps ? bX(bX({}, qQ.item.type.defaultProps), qQ.item.props) : qQ.item.props,
                  UQ = pQ.activeDot,
                  bQ = pQ.hide,
                  vQ = pQ.activeBar,
                  HQ = pQ.activeShape,
                  aQ = Boolean(!bQ && PQ && jQ && (UQ || vQ || HQ)),
                  iQ = {};
                "axis" !== zQ && jQ && "click" === jQ.props.trigger ? iQ = {
                  onClick: (0, lQ.m)(FQ.handleItemMouseEnter, QQ.props.onClick)
                } : "axis" !== zQ && (iQ = {
                  onMouseLeave: (0, lQ.m)(FQ.handleItemMouseLeave, QQ.props.onMouseLeave),
                  onMouseEnter: (0, lQ.m)(FQ.handleItemMouseEnter, QQ.props.onMouseEnter)
                });
                var cQ = (0, wQ.cloneElement)(QQ, bX(bX({}, qQ.props), iQ));
                if (aQ) {
                  if (!(JQ >= 0)) {
                    var AQ, RQ = (null !== (AQ = FQ.getItemByXY(FQ.state.activeCoordinate)) && void 0 !== AQ ? AQ : {
                        graphicalItem: cQ
                      }).graphicalItem,
                      EQ = RQ.item,
                      CQ = void 0 === EQ ? QQ : EQ,
                      uQ = RQ.childIndex,
                      LQ = bX(bX(bX({}, qQ.props), iQ), {}, {
                        activeIndex: uQ
                      });
                    return [(0, wQ.cloneElement)(CQ, LQ), null, null]
                  }
                  var kQ, fQ;
                  if (gQ.dataKey && !gQ.allowDuplicatedCategory) {
                    var SQ = "function" === typeof gQ.dataKey ? function(QQ) {
                      return "function" === typeof gQ.dataKey ? gQ.dataKey(QQ.payload) : null
                    } : "payload.".concat(gQ.dataKey.toString());
                    kQ = (0, hQ.f)(yQ, SQ, rQ), fQ = VQ && DQ && (0, hQ.f)(DQ, SQ, rQ)
                  } else kQ = null === yQ || void 0 === yQ ? void 0 : yQ[JQ], fQ = VQ && DQ && DQ[JQ];
                  if (HQ || vQ) {
                    var tQ = void 0 !== QQ.props.activeIndex ? QQ.props.activeIndex : JQ;
                    return [(0, wQ.cloneElement)(QQ, bX(bX(bX({}, qQ.props), iQ), {}, {
                      activeIndex: tQ
                    })), null, null]
                  }
                  if (!TQ()(kQ)) return [cQ].concat(DX(FQ.renderActivePoints({
                    item: qQ,
                    activePoint: kQ,
                    basePoint: fQ,
                    childIndex: JQ,
                    isRange: VQ
                  })))
                }
                return VQ ? [cQ, null, null] : [cQ, null]
              })), vX(FQ, "renderCustomized", (function(QQ, WQ, XQ) {
                return (0, wQ.cloneElement)(QQ, bX(bX({
                  key: "recharts-customized-".concat(XQ)
                }, FQ.props), FQ.state))
              })), vX(FQ, "renderMap", {
                CartesianGrid: {
                  handler: hX,
                  once: !0
                },
                ReferenceArea: {
                  handler: FQ.renderReferenceElement
                },
                ReferenceLine: {
                  handler: hX
                },
                ReferenceDot: {
                  handler: FQ.renderReferenceElement
                },
                XAxis: {
                  handler: hX
                },
                YAxis: {
                  handler: hX
                },
                Brush: {
                  handler: FQ.renderBrush,
                  once: !0
                },
                Bar: {
                  handler: FQ.renderGraphicChild
                },
                Line: {
                  handler: FQ.renderGraphicChild
                },
                Area: {
                  handler: FQ.renderGraphicChild
                },
                Radar: {
                  handler: FQ.renderGraphicChild
                },
                RadialBar: {
                  handler: FQ.renderGraphicChild
                },
                Scatter: {
                  handler: FQ.renderGraphicChild
                },
                Pie: {
                  handler: FQ.renderGraphicChild
                },
                Funnel: {
                  handler: FQ.renderGraphicChild
                },
                Tooltip: {
                  handler: FQ.renderCursor,
                  once: !0
                },
                PolarGrid: {
                  handler: FQ.renderPolarGrid,
                  once: !0
                },
                PolarAngleAxis: {
                  handler: FQ.renderPolarAxis
                },
                PolarRadiusAxis: {
                  handler: FQ.renderPolarAxis
                },
                Customized: {
                  handler: FQ.renderCustomized
                }
              }), FQ.clipPathId = "".concat(null !== (qQ = QQ.id) && void 0 !== qQ ? qQ : (0, hQ.L)("recharts"), "-clip"), FQ.throttleTriggeredAfterMouseMove = BQ()(FQ.triggeredAfterMouseMove, null !== (zQ = QQ.throttleDelay) && void 0 !== zQ ? zQ : 1e3 / 60), FQ.state = {}, FQ
            }
            return function(QQ, WQ) {
              if ("function" !== typeof WQ && null !== WQ) throw new TypeError("Super expression must either be null or a function");
              QQ.prototype = Object.create(WQ && WQ.prototype, {
                constructor: {
                  value: QQ,
                  writable: !0,
                  configurable: !0
                }
              }), Object.defineProperty(QQ, "prototype", {
                writable: !1
              }), WQ && VX(QQ, WQ)
            }(XQ, QQ), qQ = XQ, FQ = [{
              key: "componentDidMount",
              value: function() {
                var QQ, WQ;
                this.addListener(), this.accessibilityManager.setDetails({
                  container: this.container,
                  offset: {
                    left: null !== (QQ = this.props.margin.left) && void 0 !== QQ ? QQ : 0,
                    top: null !== (WQ = this.props.margin.top) && void 0 !== WQ ? WQ : 0
                  },
                  coordinateList: this.state.tooltipTicks,
                  mouseHandlerCallback: this.triggeredAfterMouseMove,
                  layout: this.props.layout
                }), this.displayDefaultTooltip()
              }
            }, {
              key: "displayDefaultTooltip",
              value: function() {
                var QQ = this.props,
                  WQ = QQ.children,
                  XQ = QQ.data,
                  wQ = QQ.height,
                  qQ = QQ.layout,
                  TQ = (0, dQ.k)(WQ, GQ.d);
                if (TQ) {
                  var zQ = TQ.props.defaultIndex;
                  if (!("number" !== typeof zQ || zQ < 0 || zQ > this.state.tooltipTicks.length - 1)) {
                    var sQ = this.state.tooltipTicks[zQ] && this.state.tooltipTicks[zQ].value,
                      FQ = AX(this.state, XQ, zQ, sQ),
                      PQ = this.state.tooltipTicks[zQ].coordinate,
                      gQ = (this.state.offset.top + wQ) / 2,
                      JQ = "horizontal" === qQ ? {
                        x: PQ,
                        y: gQ
                      } : {
                        y: PQ,
                        x: gQ
                      },
                      rQ = this.state.formattedGraphicalItems.find((function(QQ) {
                        return "Scatter" === QQ.item.type.name
                      }));
                    rQ && (JQ = bX(bX({}, JQ), rQ.props.points[zQ].tooltipPosition), FQ = rQ.props.points[zQ].tooltipPayload);
                    var IQ = {
                      activeTooltipIndex: zQ,
                      isTooltipActive: !0,
                      activeLabel: sQ,
                      activePayload: FQ,
                      activeCoordinate: JQ
                    };
                    this.setState(IQ), this.renderCursor(TQ), this.accessibilityManager.setIndex(zQ)
                  }
                }
              }
            }, {
              key: "getSnapshotBeforeUpdate",
              value: function(QQ, WQ) {
                return this.props.accessibilityLayer ? (this.state.tooltipTicks !== WQ.tooltipTicks && this.accessibilityManager.setDetails({
                  coordinateList: this.state.tooltipTicks
                }), this.props.layout !== QQ.layout && this.accessibilityManager.setDetails({
                  layout: this.props.layout
                }), this.props.margin !== QQ.margin && this.accessibilityManager.setDetails({
                  offset: {
                    left: null !== (XQ = this.props.margin.left) && void 0 !== XQ ? XQ : 0,
                    top: null !== (wQ = this.props.margin.top) && void 0 !== wQ ? wQ : 0
                  }
                }), null) : null;
                var XQ, wQ
              }
            }, {
              key: "componentDidUpdate",
              value: function(QQ) {
                (0, dQ.s)([(0, dQ.k)(QQ.children, GQ.d)], [(0, dQ.k)(this.props.children, GQ.d)]) || this.displayDefaultTooltip()
              }
            }, {
              key: "componentWillUnmount",
              value: function() {
                this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel()
              }
            }, {
              key: "getTooltipEventType",
              value: function() {
                var QQ = (0, dQ.k)(this.props.children, GQ.d);
                if (QQ && "boolean" === typeof QQ.props.shared) {
                  var WQ = QQ.props.shared ? "axis" : "item";
                  return PQ.indexOf(WQ) >= 0 ? WQ : zQ
                }
                return zQ
              }
            }, {
              key: "getMouseInfo",
              value: function(QQ) {
                if (!this.container) return null;
                var WQ = this.container,
                  XQ = WQ.getBoundingClientRect(),
                  wQ = (0, ZQ.e)(XQ),
                  qQ = {
                    chartX: Math.round(QQ.pageX - wQ.left),
                    chartY: Math.round(QQ.pageY - wQ.top)
                  },
                  TQ = XQ.width / WQ.offsetWidth || 1,
                  zQ = this.inRange(qQ.chartX, qQ.chartY, TQ);
                if (!zQ) return null;
                var sQ = this.state,
                  FQ = sQ.xAxisMap,
                  PQ = sQ.yAxisMap,
                  gQ = this.getTooltipEventType(),
                  JQ = RX(this.state, this.props.data, this.props.layout, zQ);
                if ("axis" !== gQ && FQ && PQ) {
                  var rQ = (0, hQ.i)(FQ).scale,
                    IQ = (0, hQ.i)(PQ).scale,
                    jQ = rQ && rQ.invert ? rQ.invert(qQ.chartX) : null,
                    BQ = IQ && IQ.invert ? IQ.invert(qQ.chartY) : null;
                  return bX(bX({}, qQ), {}, {
                    xValue: jQ,
                    yValue: BQ
                  }, JQ)
                }
                return JQ ? bX(bX({}, qQ), JQ) : null
              }
            }, {
              key: "inRange",
              value: function(QQ, WQ) {
                var XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                  wQ = this.props.layout,
                  qQ = QQ / XQ,
                  TQ = WQ / XQ;
                if ("horizontal" === wQ || "vertical" === wQ) {
                  var zQ = this.state.offset;
                  return qQ >= zQ.left && qQ <= zQ.left + zQ.width && TQ >= zQ.top && TQ <= zQ.top + zQ.height ? {
                    x: qQ,
                    y: TQ
                  } : null
                }
                var sQ = this.state,
                  FQ = sQ.angleAxisMap,
                  PQ = sQ.radiusAxisMap;
                if (FQ && PQ) {
                  var gQ = (0, hQ.i)(FQ);
                  return (0, iW.d)({
                    x: qQ,
                    y: TQ
                  }, gQ)
                }
                return null
              }
            }, {
              key: "parseEventsOfWrapper",
              value: function() {
                var QQ = this.props.children,
                  WQ = this.getTooltipEventType(),
                  XQ = (0, dQ.k)(QQ, GQ.d),
                  wQ = {};
                return XQ && "axis" === WQ && (wQ = "click" === XQ.props.trigger ? {
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
                }), bX(bX({}, (0, CW.k)(this.props, this.handleOuterEvent)), wQ)
              }
            }, {
              key: "addListener",
              value: function() {
                RW.on(EW, this.handleReceiveSyncEvent)
              }
            }, {
              key: "removeListener",
              value: function() {
                RW.removeListener(EW, this.handleReceiveSyncEvent)
              }
            }, {
              key: "filterFormatItem",
              value: function(QQ, WQ, XQ) {
                for (var wQ = this.state.formattedGraphicalItems, qQ = 0, TQ = wQ.length; qQ < TQ; qQ++) {
                  var zQ = wQ[qQ];
                  if (zQ.item === QQ || zQ.props.key === QQ.key || WQ === (0, dQ.m)(zQ.item.type) && XQ === zQ.childIndex) return zQ
                }
                return null
              }
            }, {
              key: "renderClipPath",
              value: function() {
                var QQ = this.clipPathId,
                  WQ = this.state.offset,
                  XQ = WQ.left,
                  qQ = WQ.top,
                  TQ = WQ.height,
                  zQ = WQ.width;
                return wQ.createElement("defs", null, wQ.createElement("clipPath", {
                  id: QQ
                }, wQ.createElement("rect", {
                  x: XQ,
                  y: qQ,
                  height: TQ,
                  width: zQ
                })))
              }
            }, {
              key: "getXScales",
              value: function() {
                var QQ = this.state.xAxisMap;
                return QQ ? Object.entries(QQ).reduce((function(QQ, WQ) {
                  var XQ = JX(WQ, 2),
                    wQ = XQ[0],
                    qQ = XQ[1];
                  return bX(bX({}, QQ), {}, vX({}, wQ, qQ.scale))
                }), {}) : null
              }
            }, {
              key: "getYScales",
              value: function() {
                var QQ = this.state.yAxisMap;
                return QQ ? Object.entries(QQ).reduce((function(QQ, WQ) {
                  var XQ = JX(WQ, 2),
                    wQ = XQ[0],
                    qQ = XQ[1];
                  return bX(bX({}, QQ), {}, vX({}, wQ, qQ.scale))
                }), {}) : null
              }
            }, {
              key: "getXScaleByAxisId",
              value: function(QQ) {
                var WQ;
                return null === (WQ = this.state.xAxisMap) || void 0 === WQ || null === (WQ = WQ[QQ]) || void 0 === WQ ? void 0 : WQ.scale
              }
            }, {
              key: "getYScaleByAxisId",
              value: function(QQ) {
                var WQ;
                return null === (WQ = this.state.yAxisMap) || void 0 === WQ || null === (WQ = WQ[QQ]) || void 0 === WQ ? void 0 : WQ.scale
              }
            }, {
              key: "getItemByXY",
              value: function(QQ) {
                var WQ = this.state,
                  XQ = WQ.formattedGraphicalItems,
                  wQ = WQ.activeItem;
                if (XQ && XQ.length)
                  for (var qQ = 0, TQ = XQ.length; qQ < TQ; qQ++) {
                    var zQ = XQ[qQ],
                      sQ = zQ.props,
                      FQ = zQ.item,
                      PQ = void 0 !== FQ.type.defaultProps ? bX(bX({}, FQ.type.defaultProps), FQ.props) : FQ.props,
                      gQ = (0, dQ.m)(FQ.type);
                    if ("Bar" === gQ) {
                      var JQ = (sQ.data || []).find((function(WQ) {
                        return (0, vQ.f)(QQ, WQ)
                      }));
                      if (JQ) return {
                        graphicalItem: zQ,
                        payload: JQ
                      }
                    } else if ("RadialBar" === gQ) {
                      var rQ = (sQ.data || []).find((function(WQ) {
                        return (0, iW.d)(QQ, WQ)
                      }));
                      if (rQ) return {
                        graphicalItem: zQ,
                        payload: rQ
                      }
                    } else if ((0, tW.k)(zQ, wQ) || (0, tW.o)(zQ, wQ) || (0, tW.q)(zQ, wQ)) {
                      var IQ = (0, tW.g)({
                          graphicalItem: zQ,
                          activeTooltipItem: wQ,
                          itemData: PQ.data
                        }),
                        jQ = void 0 === PQ.activeIndex ? IQ : PQ.activeIndex;
                      return {
                        graphicalItem: bX(bX({}, zQ), {}, {
                          childIndex: jQ
                        }),
                        payload: (0, tW.q)(zQ, wQ) ? PQ.data[IQ] : zQ.props.data[IQ]
                      }
                    }
                  }
                return null
              }
            }, {
              key: "render",
              value: function() {
                var QQ = this;
                if (!(0, dQ.z)(this)) return null;
                var WQ, XQ, qQ = this.props,
                  TQ = qQ.children,
                  zQ = qQ.className,
                  sQ = qQ.width,
                  FQ = qQ.height,
                  PQ = qQ.style,
                  gQ = qQ.compact,
                  JQ = qQ.title,
                  rQ = qQ.desc,
                  IQ = rX(qQ, FX),
                  jQ = (0, dQ.e)(IQ, !1);
                if (gQ) return wQ.createElement(zX.e, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, wQ.createElement(DQ.c, gX({}, jQ, {
                  width: sQ,
                  height: FQ,
                  title: JQ,
                  desc: rQ
                }), this.renderClipPath(), (0, dQ.x)(TQ, this.renderMap)));
                this.props.accessibilityLayer && (jQ.tabIndex = null !== (WQ = this.props.tabIndex) && void 0 !== WQ ? WQ : 0, jQ.role = null !== (XQ = this.props.role) && void 0 !== XQ ? XQ : "application", jQ.onKeyDown = function(WQ) {
                  QQ.accessibilityManager.keyboardEvent(WQ)
                }, jQ.onFocus = function() {
                  QQ.accessibilityManager.focus()
                });
                var BQ = this.parseEventsOfWrapper();
                return wQ.createElement(zX.e, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, wQ.createElement("div", gX({
                  className: (0, yQ.e)("recharts-wrapper", zQ),
                  style: bX({
                    position: "relative",
                    cursor: "default",
                    width: sQ,
                    height: FQ
                  }, PQ)
                }, BQ, {
                  ref: function(WQ) {
                    QQ.container = WQ
                  }
                }), wQ.createElement(DQ.c, gX({}, jQ, {
                  width: sQ,
                  height: FQ,
                  title: JQ,
                  desc: rQ,
                  style: aX
                }), this.renderClipPath(), (0, dQ.x)(TQ, this.renderMap)), this.renderLegend(), this.renderTooltip()))
              }
            }], FQ && IX(qQ.prototype, FQ), gQ && IX(qQ, gQ), Object.defineProperty(qQ, "prototype", {
              writable: !1
            }), qQ;
            var qQ, FQ, gQ
          }(wQ.Component);
        vX(cQ, "displayName", WQ), vX(cQ, "defaultProps", bX({
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
        }, HQ)), vX(cQ, "getDerivedStateFromProps", (function(QQ, WQ) {
          var XQ = QQ.dataKey,
            wQ = QQ.data,
            qQ = QQ.children,
            zQ = QQ.width,
            sQ = QQ.height,
            FQ = QQ.layout,
            PQ = QQ.stackOffset,
            gQ = QQ.margin,
            JQ = WQ.dataStartIndex,
            rQ = WQ.dataEndIndex;
          if (void 0 === WQ.updateId) {
            var IQ = uX(QQ);
            return bX(bX(bX({}, IQ), {}, {
              updateId: 0
            }, iQ(bX(bX({
              props: QQ
            }, IQ), {}, {
              updateId: 0
            }), WQ)), {}, {
              prevDataKey: XQ,
              prevData: wQ,
              prevWidth: zQ,
              prevHeight: sQ,
              prevLayout: FQ,
              prevStackOffset: PQ,
              prevMargin: gQ,
              prevChildren: qQ
            })
          }
          if (XQ !== WQ.prevDataKey || wQ !== WQ.prevData || zQ !== WQ.prevWidth || sQ !== WQ.prevHeight || FQ !== WQ.prevLayout || PQ !== WQ.prevStackOffset || !(0, cW.e)(gQ, WQ.prevMargin)) {
            var jQ = uX(QQ),
              BQ = {
                chartX: WQ.chartX,
                chartY: WQ.chartY,
                isTooltipActive: WQ.isTooltipActive
              },
              yQ = bX(bX({}, RX(WQ, wQ, FQ)), {}, {
                updateId: WQ.updateId + 1
              }),
              VQ = bX(bX(bX({}, jQ), BQ), yQ);
            return bX(bX(bX({}, VQ), iQ(bX({
              props: QQ
            }, VQ), WQ)), {}, {
              prevDataKey: XQ,
              prevData: wQ,
              prevWidth: zQ,
              prevHeight: sQ,
              prevLayout: FQ,
              prevStackOffset: PQ,
              prevMargin: gQ,
              prevChildren: qQ
            })
          }
          if (!(0, dQ.s)(qQ, WQ.prevChildren)) {
            var DQ, pQ, GQ, UQ, bQ = (0, dQ.k)(qQ, NQ),
              vQ = bQ && null !== (DQ = null === (pQ = bQ.props) || void 0 === pQ ? void 0 : pQ.startIndex) && void 0 !== DQ ? DQ : JQ,
              HQ = bQ && null !== (GQ = null === (UQ = bQ.props) || void 0 === UQ ? void 0 : UQ.endIndex) && void 0 !== GQ ? GQ : rQ,
              aQ = vQ !== JQ || HQ !== rQ,
              lQ = !TQ()(wQ) && !aQ ? WQ.updateId : WQ.updateId + 1;
            return bX(bX({
              updateId: lQ
            }, iQ(bX(bX({
              props: QQ
            }, WQ), {}, {
              updateId: lQ,
              dataStartIndex: vQ,
              dataEndIndex: HQ
            }), WQ)), {}, {
              prevChildren: qQ,
              dataStartIndex: vQ,
              dataEndIndex: HQ
            })
          }
          return null
        })), vX(cQ, "renderActiveDot", (function(QQ, WQ, XQ) {
          var qQ;
          return qQ = (0, wQ.isValidElement)(QQ) ? (0, wQ.cloneElement)(QQ, WQ) : sQ()(QQ) ? QQ(WQ) : wQ.createElement(bQ.c, WQ), wQ.createElement(pQ.d, {
            className: "recharts-active-dot",
            key: XQ
          }, qQ)
        }));
        var AQ = (0, wQ.forwardRef)((function(QQ, WQ) {
          return wQ.createElement(cQ, gX({}, QQ, {
            ref: WQ
          }))
        }));
        return AQ.displayName = cQ.displayName, AQ
      }
  },
  6666: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => wQ
    });
    var wQ = function(QQ) {
      return null
    };
    wQ.displayName = "Cell"
  },
  6611: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => iQ
    });
    var wQ = XQ(61),
      qQ = XQ(5766),
      TQ = XQ.n(qQ),
      zQ = XQ(5622),
      sQ = XQ.n(zQ),
      FQ = XQ(5441),
      PQ = XQ.n(FQ),
      gQ = XQ(5423),
      JQ = XQ(6518),
      rQ = XQ(5775),
      IQ = XQ(5520),
      jQ = XQ(6619);

    function BQ(QQ) {
      return BQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, BQ(QQ)
    }
    var yQ = ["offset"];

    function VQ(QQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return DQ(QQ)
      }(QQ) || function(QQ) {
        if ("undefined" !== typeof Symbol && null != QQ[Symbol.iterator] || null != QQ["@@iterator"]) return Array.from(QQ)
      }(QQ) || function(QQ, WQ) {
        if (!QQ) return;
        if ("string" === typeof QQ) return DQ(QQ, WQ);
        var XQ = Object.prototype.toString.call(QQ).slice(8, -1);
        "Object" === XQ && QQ.constructor && (XQ = QQ.constructor.name);
        if ("Map" === XQ || "Set" === XQ) return Array.from(QQ);
        if ("Arguments" === XQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(XQ)) return DQ(QQ, WQ)
      }(QQ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function DQ(QQ, WQ) {
      (null == WQ || WQ > QQ.length) && (WQ = QQ.length);
      for (var XQ = 0, wQ = new Array(WQ); XQ < WQ; XQ++) wQ[XQ] = QQ[XQ];
      return wQ
    }

    function pQ(QQ, WQ) {
      if (null == QQ) return {};
      var XQ, wQ, qQ = function(QQ, WQ) {
        if (null == QQ) return {};
        var XQ = {};
        for (var wQ in QQ)
          if (Object.prototype.hasOwnProperty.call(QQ, wQ)) {
            if (WQ.indexOf(wQ) >= 0) continue;
            XQ[wQ] = QQ[wQ]
          } return XQ
      }(QQ, WQ);
      if (Object.getOwnPropertySymbols) {
        var TQ = Object.getOwnPropertySymbols(QQ);
        for (wQ = 0; wQ < TQ.length; wQ++) XQ = TQ[wQ], WQ.indexOf(XQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, XQ) && (qQ[XQ] = QQ[XQ])
      }
      return qQ
    }

    function GQ(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function UQ(QQ) {
      for (var WQ = 1; WQ < arguments.length; WQ++) {
        var XQ = null != arguments[WQ] ? arguments[WQ] : {};
        WQ % 2 ? GQ(Object(XQ), !0).forEach((function(WQ) {
          bQ(QQ, WQ, XQ[WQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : GQ(Object(XQ)).forEach((function(WQ) {
          Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
        }))
      }
      return QQ
    }

    function bQ(QQ, WQ, XQ) {
      return (WQ = function(QQ) {
        var WQ = function(QQ, WQ) {
          if ("object" != BQ(QQ) || !QQ) return QQ;
          var XQ = QQ[Symbol.toPrimitive];
          if (void 0 !== XQ) {
            var wQ = XQ.call(QQ, WQ || "default");
            if ("object" != BQ(wQ)) return wQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == BQ(WQ) ? WQ : WQ + ""
      }(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }

    function vQ() {
      return vQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var WQ = 1; WQ < arguments.length; WQ++) {
          var XQ = arguments[WQ];
          for (var wQ in XQ) Object.prototype.hasOwnProperty.call(XQ, wQ) && (QQ[wQ] = XQ[wQ])
        }
        return QQ
      }, vQ.apply(this, arguments)
    }
    var dQ = function(QQ) {
        var WQ = QQ.value,
          XQ = QQ.formatter,
          wQ = TQ()(QQ.children) ? WQ : QQ.children;
        return sQ()(XQ) ? XQ(wQ) : wQ
      },
      HQ = function(QQ, WQ, XQ) {
        var qQ, zQ, sQ = QQ.position,
          FQ = QQ.viewBox,
          PQ = QQ.offset,
          JQ = QQ.className,
          rQ = FQ,
          BQ = rQ.cx,
          yQ = rQ.cy,
          VQ = rQ.innerRadius,
          DQ = rQ.outerRadius,
          pQ = rQ.startAngle,
          GQ = rQ.endAngle,
          UQ = rQ.clockWise,
          bQ = (VQ + DQ) / 2,
          dQ = function(QQ, WQ) {
            return (0, IQ.H)(WQ - QQ) * Math.min(Math.abs(WQ - QQ), 360)
          }(pQ, GQ),
          HQ = dQ >= 0 ? 1 : -1;
        "insideStart" === sQ ? (qQ = pQ + HQ * PQ, zQ = UQ) : "insideEnd" === sQ ? (qQ = GQ - HQ * PQ, zQ = !UQ) : "end" === sQ && (qQ = GQ + HQ * PQ, zQ = UQ), zQ = dQ <= 0 ? zQ : !zQ;
        var aQ = (0, jQ.e)(BQ, yQ, bQ, qQ),
          lQ = (0, jQ.e)(BQ, yQ, bQ, qQ + 359 * (zQ ? 1 : -1)),
          hQ = "M".concat(aQ.x, ",").concat(aQ.y, "\n    A").concat(bQ, ",").concat(bQ, ",0,1,").concat(zQ ? 0 : 1, ",\n    ").concat(lQ.x, ",").concat(lQ.y),
          iQ = TQ()(QQ.id) ? (0, IQ.L)("recharts-radial-line-") : QQ.id;
        return wQ.createElement("text", vQ({}, XQ, {
          dominantBaseline: "central",
          className: (0, gQ.e)("recharts-radial-bar-label", JQ)
        }), wQ.createElement("defs", null, wQ.createElement("path", {
          id: iQ,
          d: hQ
        })), wQ.createElement("textPath", {
          xlinkHref: "#".concat(iQ)
        }, WQ))
      },
      aQ = function(QQ) {
        var WQ = QQ.viewBox,
          XQ = QQ.offset,
          wQ = QQ.position,
          qQ = WQ,
          TQ = qQ.cx,
          zQ = qQ.cy,
          sQ = qQ.innerRadius,
          FQ = qQ.outerRadius,
          PQ = (qQ.startAngle + qQ.endAngle) / 2;
        if ("outside" === wQ) {
          var gQ = (0, jQ.e)(TQ, zQ, FQ + XQ, PQ),
            JQ = gQ.x;
          return {
            x: JQ,
            y: gQ.y,
            textAnchor: JQ >= TQ ? "start" : "end",
            verticalAnchor: "middle"
          }
        }
        if ("center" === wQ) return {
          x: TQ,
          y: zQ,
          textAnchor: "middle",
          verticalAnchor: "middle"
        };
        if ("centerTop" === wQ) return {
          x: TQ,
          y: zQ,
          textAnchor: "middle",
          verticalAnchor: "start"
        };
        if ("centerBottom" === wQ) return {
          x: TQ,
          y: zQ,
          textAnchor: "middle",
          verticalAnchor: "end"
        };
        var rQ = (sQ + FQ) / 2,
          IQ = (0, jQ.e)(TQ, zQ, rQ, PQ);
        return {
          x: IQ.x,
          y: IQ.y,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }
      },
      lQ = function(QQ) {
        var WQ = QQ.viewBox,
          XQ = QQ.parentViewBox,
          wQ = QQ.offset,
          qQ = QQ.position,
          TQ = WQ,
          zQ = TQ.x,
          sQ = TQ.y,
          FQ = TQ.width,
          gQ = TQ.height,
          JQ = gQ >= 0 ? 1 : -1,
          rQ = JQ * wQ,
          jQ = JQ > 0 ? "end" : "start",
          BQ = JQ > 0 ? "start" : "end",
          yQ = FQ >= 0 ? 1 : -1,
          VQ = yQ * wQ,
          DQ = yQ > 0 ? "end" : "start",
          pQ = yQ > 0 ? "start" : "end";
        if ("top" === qQ) return UQ(UQ({}, {
          x: zQ + FQ / 2,
          y: sQ - JQ * wQ,
          textAnchor: "middle",
          verticalAnchor: jQ
        }), XQ ? {
          height: Math.max(sQ - XQ.y, 0),
          width: FQ
        } : {});
        if ("bottom" === qQ) return UQ(UQ({}, {
          x: zQ + FQ / 2,
          y: sQ + gQ + rQ,
          textAnchor: "middle",
          verticalAnchor: BQ
        }), XQ ? {
          height: Math.max(XQ.y + XQ.height - (sQ + gQ), 0),
          width: FQ
        } : {});
        if ("left" === qQ) {
          var GQ = {
            x: zQ - VQ,
            y: sQ + gQ / 2,
            textAnchor: DQ,
            verticalAnchor: "middle"
          };
          return UQ(UQ({}, GQ), XQ ? {
            width: Math.max(GQ.x - XQ.x, 0),
            height: gQ
          } : {})
        }
        if ("right" === qQ) {
          var bQ = {
            x: zQ + FQ + VQ,
            y: sQ + gQ / 2,
            textAnchor: pQ,
            verticalAnchor: "middle"
          };
          return UQ(UQ({}, bQ), XQ ? {
            width: Math.max(XQ.x + XQ.width - bQ.x, 0),
            height: gQ
          } : {})
        }
        var vQ = XQ ? {
          width: FQ,
          height: gQ
        } : {};
        return "insideLeft" === qQ ? UQ({
          x: zQ + VQ,
          y: sQ + gQ / 2,
          textAnchor: pQ,
          verticalAnchor: "middle"
        }, vQ) : "insideRight" === qQ ? UQ({
          x: zQ + FQ - VQ,
          y: sQ + gQ / 2,
          textAnchor: DQ,
          verticalAnchor: "middle"
        }, vQ) : "insideTop" === qQ ? UQ({
          x: zQ + FQ / 2,
          y: sQ + rQ,
          textAnchor: "middle",
          verticalAnchor: BQ
        }, vQ) : "insideBottom" === qQ ? UQ({
          x: zQ + FQ / 2,
          y: sQ + gQ - rQ,
          textAnchor: "middle",
          verticalAnchor: jQ
        }, vQ) : "insideTopLeft" === qQ ? UQ({
          x: zQ + VQ,
          y: sQ + rQ,
          textAnchor: pQ,
          verticalAnchor: BQ
        }, vQ) : "insideTopRight" === qQ ? UQ({
          x: zQ + FQ - VQ,
          y: sQ + rQ,
          textAnchor: DQ,
          verticalAnchor: BQ
        }, vQ) : "insideBottomLeft" === qQ ? UQ({
          x: zQ + VQ,
          y: sQ + gQ - rQ,
          textAnchor: pQ,
          verticalAnchor: jQ
        }, vQ) : "insideBottomRight" === qQ ? UQ({
          x: zQ + FQ - VQ,
          y: sQ + gQ - rQ,
          textAnchor: DQ,
          verticalAnchor: jQ
        }, vQ) : PQ()(qQ) && ((0, IQ.D)(qQ.x) || (0, IQ.F)(qQ.x)) && ((0, IQ.D)(qQ.y) || (0, IQ.F)(qQ.y)) ? UQ({
          x: zQ + (0, IQ.o)(qQ.x, FQ),
          y: sQ + (0, IQ.o)(qQ.y, gQ),
          textAnchor: "end",
          verticalAnchor: "end"
        }, vQ) : UQ({
          x: zQ + FQ / 2,
          y: sQ + gQ / 2,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }, vQ)
      },
      hQ = function(QQ) {
        return "cx" in QQ && (0, IQ.D)(QQ.cx)
      };

    function iQ(QQ) {
      var WQ, XQ = QQ.offset,
        qQ = UQ({
          offset: void 0 === XQ ? 5 : XQ
        }, pQ(QQ, yQ)),
        zQ = qQ.viewBox,
        FQ = qQ.position,
        PQ = qQ.value,
        IQ = qQ.children,
        jQ = qQ.content,
        BQ = qQ.className,
        VQ = void 0 === BQ ? "" : BQ,
        DQ = qQ.textBreakAll;
      if (!zQ || TQ()(PQ) && TQ()(IQ) && !(0, wQ.isValidElement)(jQ) && !sQ()(jQ)) return null;
      if ((0, wQ.isValidElement)(jQ)) return (0, wQ.cloneElement)(jQ, qQ);
      if (sQ()(jQ)) {
        if (WQ = (0, wQ.createElement)(jQ, qQ), (0, wQ.isValidElement)(WQ)) return WQ
      } else WQ = dQ(qQ);
      var GQ = hQ(zQ),
        bQ = (0, rQ.e)(qQ, !0);
      if (GQ && ("insideStart" === FQ || "insideEnd" === FQ || "end" === FQ)) return HQ(qQ, WQ, bQ);
      var iQ = GQ ? aQ(qQ) : lQ(qQ);
      return wQ.createElement(JQ.d, vQ({
        className: (0, gQ.e)("recharts-label", VQ)
      }, bQ, iQ, {
        breakAll: DQ
      }), WQ)
    }
    iQ.displayName = "Label";
    var cQ = function(QQ) {
      var WQ = QQ.cx,
        XQ = QQ.cy,
        wQ = QQ.angle,
        qQ = QQ.startAngle,
        TQ = QQ.endAngle,
        zQ = QQ.r,
        sQ = QQ.radius,
        FQ = QQ.innerRadius,
        PQ = QQ.outerRadius,
        gQ = QQ.x,
        JQ = QQ.y,
        rQ = QQ.top,
        jQ = QQ.left,
        BQ = QQ.width,
        yQ = QQ.height,
        VQ = QQ.clockWise,
        DQ = QQ.labelViewBox;
      if (DQ) return DQ;
      if ((0, IQ.D)(BQ) && (0, IQ.D)(yQ)) {
        if ((0, IQ.D)(gQ) && (0, IQ.D)(JQ)) return {
          x: gQ,
          y: JQ,
          width: BQ,
          height: yQ
        };
        if ((0, IQ.D)(rQ) && (0, IQ.D)(jQ)) return {
          x: rQ,
          y: jQ,
          width: BQ,
          height: yQ
        }
      }
      return (0, IQ.D)(gQ) && (0, IQ.D)(JQ) ? {
        x: gQ,
        y: JQ,
        width: 0,
        height: 0
      } : (0, IQ.D)(WQ) && (0, IQ.D)(XQ) ? {
        cx: WQ,
        cy: XQ,
        startAngle: qQ || wQ || 0,
        endAngle: TQ || wQ || 0,
        innerRadius: FQ || 0,
        outerRadius: PQ || sQ || zQ || 0,
        clockWise: VQ
      } : QQ.viewBox ? QQ.viewBox : {}
    };
    iQ.parseViewBox = cQ, iQ.renderCallByParent = function(QQ, WQ) {
      var XQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!QQ || !QQ.children && XQ && !QQ.label) return null;
      var qQ = QQ.children,
        TQ = cQ(QQ),
        zQ = (0, rQ.h)(qQ, iQ).map((function(QQ, XQ) {
          return (0, wQ.cloneElement)(QQ, {
            viewBox: WQ || TQ,
            key: "label-".concat(XQ)
          })
        }));
      if (!XQ) return zQ;
      var FQ = function(QQ, WQ) {
        return QQ ? !0 === QQ ? wQ.createElement(iQ, {
          key: "label-implicit",
          viewBox: WQ
        }) : (0, IQ.B)(QQ) ? wQ.createElement(iQ, {
          key: "label-implicit",
          viewBox: WQ,
          value: QQ
        }) : (0, wQ.isValidElement)(QQ) ? QQ.type === iQ ? (0, wQ.cloneElement)(QQ, {
          key: "label-implicit",
          viewBox: WQ
        }) : wQ.createElement(iQ, {
          key: "label-implicit",
          content: QQ,
          viewBox: WQ
        }) : sQ()(QQ) ? wQ.createElement(iQ, {
          key: "label-implicit",
          content: QQ,
          viewBox: WQ
        }) : PQ()(QQ) ? wQ.createElement(iQ, vQ({
          viewBox: WQ
        }, QQ, {
          key: "label-implicit"
        })) : null : null
      }(QQ.label, WQ || TQ);
      return [FQ].concat(VQ(zQ))
    }
  },
  6675: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => lQ
    });
    var wQ = XQ(61),
      qQ = XQ(5766),
      TQ = XQ.n(qQ),
      zQ = XQ(5441),
      sQ = XQ.n(zQ),
      FQ = XQ(5622),
      PQ = XQ.n(FQ),
      gQ = XQ(6681),
      JQ = XQ.n(gQ),
      rQ = XQ(6611),
      IQ = XQ(6339),
      jQ = XQ(5775),
      BQ = XQ(6526);

    function yQ(QQ) {
      return yQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, yQ(QQ)
    }
    var VQ = ["valueAccessor"],
      DQ = ["data", "dataKey", "clockWise", "id", "textBreakAll"];

    function pQ(QQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return GQ(QQ)
      }(QQ) || function(QQ) {
        if ("undefined" !== typeof Symbol && null != QQ[Symbol.iterator] || null != QQ["@@iterator"]) return Array.from(QQ)
      }(QQ) || function(QQ, WQ) {
        if (!QQ) return;
        if ("string" === typeof QQ) return GQ(QQ, WQ);
        var XQ = Object.prototype.toString.call(QQ).slice(8, -1);
        "Object" === XQ && QQ.constructor && (XQ = QQ.constructor.name);
        if ("Map" === XQ || "Set" === XQ) return Array.from(QQ);
        if ("Arguments" === XQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(XQ)) return GQ(QQ, WQ)
      }(QQ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function GQ(QQ, WQ) {
      (null == WQ || WQ > QQ.length) && (WQ = QQ.length);
      for (var XQ = 0, wQ = new Array(WQ); XQ < WQ; XQ++) wQ[XQ] = QQ[XQ];
      return wQ
    }

    function UQ() {
      return UQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var WQ = 1; WQ < arguments.length; WQ++) {
          var XQ = arguments[WQ];
          for (var wQ in XQ) Object.prototype.hasOwnProperty.call(XQ, wQ) && (QQ[wQ] = XQ[wQ])
        }
        return QQ
      }, UQ.apply(this, arguments)
    }

    function bQ(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function vQ(QQ) {
      for (var WQ = 1; WQ < arguments.length; WQ++) {
        var XQ = null != arguments[WQ] ? arguments[WQ] : {};
        WQ % 2 ? bQ(Object(XQ), !0).forEach((function(WQ) {
          dQ(QQ, WQ, XQ[WQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : bQ(Object(XQ)).forEach((function(WQ) {
          Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
        }))
      }
      return QQ
    }

    function dQ(QQ, WQ, XQ) {
      return (WQ = function(QQ) {
        var WQ = function(QQ, WQ) {
          if ("object" != yQ(QQ) || !QQ) return QQ;
          var XQ = QQ[Symbol.toPrimitive];
          if (void 0 !== XQ) {
            var wQ = XQ.call(QQ, WQ || "default");
            if ("object" != yQ(wQ)) return wQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == yQ(WQ) ? WQ : WQ + ""
      }(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }

    function HQ(QQ, WQ) {
      if (null == QQ) return {};
      var XQ, wQ, qQ = function(QQ, WQ) {
        if (null == QQ) return {};
        var XQ = {};
        for (var wQ in QQ)
          if (Object.prototype.hasOwnProperty.call(QQ, wQ)) {
            if (WQ.indexOf(wQ) >= 0) continue;
            XQ[wQ] = QQ[wQ]
          } return XQ
      }(QQ, WQ);
      if (Object.getOwnPropertySymbols) {
        var TQ = Object.getOwnPropertySymbols(QQ);
        for (wQ = 0; wQ < TQ.length; wQ++) XQ = TQ[wQ], WQ.indexOf(XQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, XQ) && (qQ[XQ] = QQ[XQ])
      }
      return qQ
    }
    var aQ = function(QQ) {
      return Array.isArray(QQ.value) ? JQ()(QQ.value) : QQ.value
    };

    function lQ(QQ) {
      var WQ = QQ.valueAccessor,
        XQ = void 0 === WQ ? aQ : WQ,
        qQ = HQ(QQ, VQ),
        zQ = qQ.data,
        sQ = qQ.dataKey,
        FQ = qQ.clockWise,
        PQ = qQ.id,
        gQ = qQ.textBreakAll,
        JQ = HQ(qQ, DQ);
      return zQ && zQ.length ? wQ.createElement(IQ.d, {
        className: "recharts-label-list"
      }, zQ.map((function(QQ, WQ) {
        var qQ = TQ()(sQ) ? XQ(QQ, WQ) : (0, BQ.lb)(QQ && QQ.payload, sQ),
          zQ = TQ()(PQ) ? {} : {
            id: "".concat(PQ, "-").concat(WQ)
          };
        return wQ.createElement(rQ.c, UQ({}, (0, jQ.e)(QQ, !0), JQ, zQ, {
          parentViewBox: QQ.parentViewBox,
          value: qQ,
          textBreakAll: gQ,
          viewBox: rQ.c.parseViewBox(TQ()(FQ) ? QQ : vQ(vQ({}, QQ), {}, {
            clockWise: FQ
          })),
          key: "label-".concat(WQ),
          index: WQ
        }))
      }))) : null
    }
    lQ.displayName = "LabelList", lQ.renderCallByParent = function(QQ, WQ) {
      var XQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!QQ || !QQ.children && XQ && !QQ.label) return null;
      var qQ = QQ.children,
        TQ = (0, jQ.h)(qQ, lQ).map((function(QQ, XQ) {
          return (0, wQ.cloneElement)(QQ, {
            data: WQ,
            key: "labelList-".concat(XQ)
          })
        }));
      return XQ ? [function(QQ, WQ) {
        return QQ ? !0 === QQ ? wQ.createElement(lQ, {
          key: "labelList-implicit",
          data: WQ
        }) : wQ.isValidElement(QQ) || PQ()(QQ) ? wQ.createElement(lQ, {
          key: "labelList-implicit",
          data: WQ,
          content: QQ
        }) : sQ()(QQ) ? wQ.createElement(lQ, UQ({
          data: WQ
        }, QQ, {
          key: "labelList-implicit"
        })) : null : null
      }(QQ.label, WQ)].concat(pQ(TQ)) : TQ
    }
  },
  6428: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => fQ
    });
    var wQ = XQ(61),
      qQ = XQ(5622),
      TQ = XQ.n(qQ),
      zQ = XQ(5423),
      sQ = XQ(5770),
      FQ = XQ(6333),
      PQ = XQ(6430),
      gQ = XQ(5800);

    function JQ(QQ) {
      return JQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, JQ(QQ)
    }

    function rQ() {
      return rQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var WQ = 1; WQ < arguments.length; WQ++) {
          var XQ = arguments[WQ];
          for (var wQ in XQ) Object.prototype.hasOwnProperty.call(XQ, wQ) && (QQ[wQ] = XQ[wQ])
        }
        return QQ
      }, rQ.apply(this, arguments)
    }

    function IQ(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function jQ(QQ, WQ) {
      for (var XQ = 0; XQ < WQ.length; XQ++) {
        var wQ = WQ[XQ];
        wQ.enumerable = wQ.enumerable || !1, wQ.configurable = !0, "value" in wQ && (wQ.writable = !0), Object.defineProperty(QQ, GQ(wQ.key), wQ)
      }
    }

    function BQ(QQ, WQ, XQ) {
      return WQ = VQ(WQ),
        function(QQ, WQ) {
          if (WQ && ("object" === JQ(WQ) || "function" === typeof WQ)) return WQ;
          if (void 0 !== WQ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(QQ) {
            if (void 0 === QQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return QQ
          }(QQ)
        }(QQ, yQ() ? Reflect.construct(WQ, XQ || [], VQ(QQ).constructor) : WQ.apply(QQ, XQ))
    }

    function yQ() {
      try {
        var QQ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (QQ) {}
      return (yQ = function() {
        return !!QQ
      })()
    }

    function VQ(QQ) {
      return VQ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(QQ) {
        return QQ.__proto__ || Object.getPrototypeOf(QQ)
      }, VQ(QQ)
    }

    function DQ(QQ, WQ) {
      return DQ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(QQ, WQ) {
        return QQ.__proto__ = WQ, QQ
      }, DQ(QQ, WQ)
    }

    function pQ(QQ, WQ, XQ) {
      return (WQ = GQ(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }

    function GQ(QQ) {
      var WQ = function(QQ, WQ) {
        if ("object" != JQ(QQ) || !QQ) return QQ;
        var XQ = QQ[Symbol.toPrimitive];
        if (void 0 !== XQ) {
          var wQ = XQ.call(QQ, WQ || "default");
          if ("object" != JQ(wQ)) return wQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == JQ(WQ) ? WQ : WQ + ""
    }
    var UQ = 32,
      bQ = function(QQ) {
        function WQ() {
          return function(QQ, WQ) {
            if (!(QQ instanceof WQ)) throw new TypeError("Cannot call a class as a function")
          }(this, WQ), BQ(this, WQ, arguments)
        }
        return function(QQ, WQ) {
          if ("function" !== typeof WQ && null !== WQ) throw new TypeError("Super expression must either be null or a function");
          QQ.prototype = Object.create(WQ && WQ.prototype, {
            constructor: {
              value: QQ,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(QQ, "prototype", {
            writable: !1
          }), WQ && DQ(QQ, WQ)
        }(WQ, QQ), XQ = WQ, qQ = [{
          key: "renderIcon",
          value: function(QQ) {
            var WQ = this.props.inactiveColor,
              XQ = 16,
              qQ = UQ / 6,
              TQ = UQ / 3,
              zQ = QQ.inactive ? WQ : QQ.color;
            if ("plainline" === QQ.type) return wQ.createElement("line", {
              strokeWidth: 4,
              fill: "none",
              stroke: zQ,
              strokeDasharray: QQ.payload.strokeDasharray,
              x1: 0,
              y1: XQ,
              x2: UQ,
              y2: XQ,
              className: "recharts-legend-icon"
            });
            if ("line" === QQ.type) return wQ.createElement("path", {
              strokeWidth: 4,
              fill: "none",
              stroke: zQ,
              d: "M0,".concat(XQ, "h").concat(TQ, "\n            A").concat(qQ, ",").concat(qQ, ",0,1,1,").concat(2 * TQ, ",").concat(XQ, "\n            H").concat(UQ, "M").concat(2 * TQ, ",").concat(XQ, "\n            A").concat(qQ, ",").concat(qQ, ",0,1,1,").concat(TQ, ",").concat(XQ),
              className: "recharts-legend-icon"
            });
            if ("rect" === QQ.type) return wQ.createElement("path", {
              stroke: "none",
              fill: zQ,
              d: "M0,".concat(4, "h").concat(UQ, "v").concat(24, "h").concat(-32, "z"),
              className: "recharts-legend-icon"
            });
            if (wQ.isValidElement(QQ.legendIcon)) {
              var sQ = function(QQ) {
                for (var WQ = 1; WQ < arguments.length; WQ++) {
                  var XQ = null != arguments[WQ] ? arguments[WQ] : {};
                  WQ % 2 ? IQ(Object(XQ), !0).forEach((function(WQ) {
                    pQ(QQ, WQ, XQ[WQ])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : IQ(Object(XQ)).forEach((function(WQ) {
                    Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
                  }))
                }
                return QQ
              }({}, QQ);
              return delete sQ.legendIcon, wQ.cloneElement(QQ.legendIcon, sQ)
            }
            return wQ.createElement(PQ.d, {
              fill: zQ,
              cx: XQ,
              cy: XQ,
              size: UQ,
              sizeType: "diameter",
              type: QQ.type
            })
          }
        }, {
          key: "renderItems",
          value: function() {
            var QQ = this,
              WQ = this.props,
              XQ = WQ.payload,
              qQ = WQ.iconSize,
              PQ = WQ.layout,
              JQ = WQ.formatter,
              IQ = WQ.inactiveColor,
              jQ = {
                x: 0,
                y: 0,
                width: UQ,
                height: UQ
              },
              BQ = {
                display: "horizontal" === PQ ? "inline-block" : "block",
                marginRight: 10
              },
              yQ = {
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: 4
              };
            return XQ.map((function(WQ, XQ) {
              var PQ = WQ.formatter || JQ,
                VQ = (0, zQ.e)(pQ(pQ({
                  "recharts-legend-item": !0
                }, "legend-item-".concat(XQ), !0), "inactive", WQ.inactive));
              if ("none" === WQ.type) return null;
              var DQ = TQ()(WQ.value) ? null : WQ.value;
              (0, sQ.c)(!TQ()(WQ.value), 'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>');
              var GQ = WQ.inactive ? IQ : WQ.color;
              return wQ.createElement("li", rQ({
                className: VQ,
                style: BQ,
                key: "legend-item-".concat(XQ)
              }, (0, gQ.o)(QQ.props, WQ, XQ)), wQ.createElement(FQ.c, {
                width: qQ,
                height: qQ,
                viewBox: jQ,
                style: yQ
              }, QQ.renderIcon(WQ)), wQ.createElement("span", {
                className: "recharts-legend-item-text",
                style: {
                  color: GQ
                }
              }, PQ ? PQ(DQ, WQ, XQ) : DQ))
            }))
          }
        }, {
          key: "render",
          value: function() {
            var QQ = this.props,
              WQ = QQ.payload,
              XQ = QQ.layout,
              qQ = QQ.align;
            if (!WQ || !WQ.length) return null;
            var TQ = {
              padding: 0,
              margin: 0,
              textAlign: "horizontal" === XQ ? qQ : "left"
            };
            return wQ.createElement("ul", {
              className: "recharts-default-legend",
              style: TQ
            }, this.renderItems())
          }
        }], qQ && jQ(XQ.prototype, qQ), JQ && jQ(XQ, JQ), Object.defineProperty(XQ, "prototype", {
          writable: !1
        }), XQ;
        var XQ, qQ, JQ
      }(wQ.PureComponent);
    pQ(bQ, "displayName", "Legend"), pQ(bQ, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "middle",
      inactiveColor: "#ccc"
    });
    var vQ = XQ(5520),
      dQ = XQ(6354);

    function HQ(QQ) {
      return HQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, HQ(QQ)
    }
    var aQ = ["ref"];

    function lQ(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function hQ(QQ) {
      for (var WQ = 1; WQ < arguments.length; WQ++) {
        var XQ = null != arguments[WQ] ? arguments[WQ] : {};
        WQ % 2 ? lQ(Object(XQ), !0).forEach((function(WQ) {
          CQ(QQ, WQ, XQ[WQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : lQ(Object(XQ)).forEach((function(WQ) {
          Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
        }))
      }
      return QQ
    }

    function iQ(QQ, WQ) {
      for (var XQ = 0; XQ < WQ.length; XQ++) {
        var wQ = WQ[XQ];
        wQ.enumerable = wQ.enumerable || !1, wQ.configurable = !0, "value" in wQ && (wQ.writable = !0), Object.defineProperty(QQ, uQ(wQ.key), wQ)
      }
    }

    function cQ(QQ, WQ, XQ) {
      return WQ = RQ(WQ),
        function(QQ, WQ) {
          if (WQ && ("object" === HQ(WQ) || "function" === typeof WQ)) return WQ;
          if (void 0 !== WQ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(QQ) {
            if (void 0 === QQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return QQ
          }(QQ)
        }(QQ, AQ() ? Reflect.construct(WQ, XQ || [], RQ(QQ).constructor) : WQ.apply(QQ, XQ))
    }

    function AQ() {
      try {
        var QQ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (QQ) {}
      return (AQ = function() {
        return !!QQ
      })()
    }

    function RQ(QQ) {
      return RQ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(QQ) {
        return QQ.__proto__ || Object.getPrototypeOf(QQ)
      }, RQ(QQ)
    }

    function EQ(QQ, WQ) {
      return EQ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(QQ, WQ) {
        return QQ.__proto__ = WQ, QQ
      }, EQ(QQ, WQ)
    }

    function CQ(QQ, WQ, XQ) {
      return (WQ = uQ(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }

    function uQ(QQ) {
      var WQ = function(QQ, WQ) {
        if ("object" != HQ(QQ) || !QQ) return QQ;
        var XQ = QQ[Symbol.toPrimitive];
        if (void 0 !== XQ) {
          var wQ = XQ.call(QQ, WQ || "default");
          if ("object" != HQ(wQ)) return wQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == HQ(WQ) ? WQ : WQ + ""
    }

    function LQ(QQ, WQ) {
      if (null == QQ) return {};
      var XQ, wQ, qQ = function(QQ, WQ) {
        if (null == QQ) return {};
        var XQ = {};
        for (var wQ in QQ)
          if (Object.prototype.hasOwnProperty.call(QQ, wQ)) {
            if (WQ.indexOf(wQ) >= 0) continue;
            XQ[wQ] = QQ[wQ]
          } return XQ
      }(QQ, WQ);
      if (Object.getOwnPropertySymbols) {
        var TQ = Object.getOwnPropertySymbols(QQ);
        for (wQ = 0; wQ < TQ.length; wQ++) XQ = TQ[wQ], WQ.indexOf(XQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, XQ) && (qQ[XQ] = QQ[XQ])
      }
      return qQ
    }

    function kQ(QQ) {
      return QQ.value
    }
    var fQ = function(QQ) {
      function WQ() {
        var QQ;
        ! function(QQ, WQ) {
          if (!(QQ instanceof WQ)) throw new TypeError("Cannot call a class as a function")
        }(this, WQ);
        for (var XQ = arguments.length, wQ = new Array(XQ), qQ = 0; qQ < XQ; qQ++) wQ[qQ] = arguments[qQ];
        return CQ(QQ = cQ(this, WQ, [].concat(wQ)), "lastBoundingBox", {
          width: -1,
          height: -1
        }), QQ
      }
      return function(QQ, WQ) {
        if ("function" !== typeof WQ && null !== WQ) throw new TypeError("Super expression must either be null or a function");
        QQ.prototype = Object.create(WQ && WQ.prototype, {
          constructor: {
            value: QQ,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(QQ, "prototype", {
          writable: !1
        }), WQ && EQ(QQ, WQ)
      }(WQ, QQ), XQ = WQ, TQ = [{
        key: "getWithHeight",
        value: function(QQ, WQ) {
          var XQ = hQ(hQ({}, this.defaultProps), QQ.props).layout;
          return "vertical" === XQ && (0, vQ.D)(QQ.props.height) ? {
            height: QQ.props.height
          } : "horizontal" === XQ ? {
            width: QQ.props.width || WQ
          } : null
        }
      }], (qQ = [{
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
            var QQ = this.wrapperNode.getBoundingClientRect();
            return QQ.height = this.wrapperNode.offsetHeight, QQ.width = this.wrapperNode.offsetWidth, QQ
          }
          return null
        }
      }, {
        key: "updateBBox",
        value: function() {
          var QQ = this.props.onBBoxUpdate,
            WQ = this.getBBox();
          WQ ? (Math.abs(WQ.width - this.lastBoundingBox.width) > 1 || Math.abs(WQ.height - this.lastBoundingBox.height) > 1) && (this.lastBoundingBox.width = WQ.width, this.lastBoundingBox.height = WQ.height, QQ && QQ(WQ)) : -1 === this.lastBoundingBox.width && -1 === this.lastBoundingBox.height || (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, QQ && QQ(null))
        }
      }, {
        key: "getBBoxSnapshot",
        value: function() {
          return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? hQ({}, this.lastBoundingBox) : {
            width: 0,
            height: 0
          }
        }
      }, {
        key: "getDefaultPosition",
        value: function(QQ) {
          var WQ, XQ, wQ = this.props,
            qQ = wQ.layout,
            TQ = wQ.align,
            zQ = wQ.verticalAlign,
            sQ = wQ.margin,
            FQ = wQ.chartWidth,
            PQ = wQ.chartHeight;
          return QQ && (void 0 !== QQ.left && null !== QQ.left || void 0 !== QQ.right && null !== QQ.right) || (WQ = "center" === TQ && "vertical" === qQ ? {
            left: ((FQ || 0) - this.getBBoxSnapshot().width) / 2
          } : "right" === TQ ? {
            right: sQ && sQ.right || 0
          } : {
            left: sQ && sQ.left || 0
          }), QQ && (void 0 !== QQ.top && null !== QQ.top || void 0 !== QQ.bottom && null !== QQ.bottom) || (XQ = "middle" === zQ ? {
            top: ((PQ || 0) - this.getBBoxSnapshot().height) / 2
          } : "bottom" === zQ ? {
            bottom: sQ && sQ.bottom || 0
          } : {
            top: sQ && sQ.top || 0
          }), hQ(hQ({}, WQ), XQ)
        }
      }, {
        key: "render",
        value: function() {
          var QQ = this,
            WQ = this.props,
            XQ = WQ.content,
            qQ = WQ.width,
            TQ = WQ.height,
            zQ = WQ.wrapperStyle,
            sQ = WQ.payloadUniqBy,
            FQ = WQ.payload,
            PQ = hQ(hQ({
              position: "absolute",
              width: qQ || "auto",
              height: TQ || "auto"
            }, this.getDefaultPosition(zQ)), zQ);
          return wQ.createElement("div", {
            className: "recharts-legend-wrapper",
            style: PQ,
            ref: function(WQ) {
              QQ.wrapperNode = WQ
            }
          }, function(QQ, WQ) {
            if (wQ.isValidElement(QQ)) return wQ.cloneElement(QQ, WQ);
            if ("function" === typeof QQ) return wQ.createElement(QQ, WQ);
            WQ.ref;
            var XQ = LQ(WQ, aQ);
            return wQ.createElement(bQ, XQ)
          }(XQ, hQ(hQ({}, this.props), {}, {
            payload: (0, dQ.e)(FQ, sQ, kQ)
          })))
        }
      }]) && iQ(XQ.prototype, qQ), TQ && iQ(XQ, TQ), Object.defineProperty(XQ, "prototype", {
        writable: !1
      }), XQ;
      var XQ, qQ, TQ
    }(wQ.PureComponent);
    CQ(fQ, "displayName", "Legend"), CQ(fQ, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom"
    })
  },
  5415: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => yQ
    });
    var wQ = XQ(5423),
      qQ = XQ(61),
      TQ = XQ(5429),
      zQ = XQ.n(TQ),
      sQ = XQ(5520),
      FQ = XQ(5770),
      PQ = XQ(5775);

    function gQ(QQ) {
      return gQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, gQ(QQ)
    }

    function JQ(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function rQ(QQ) {
      for (var WQ = 1; WQ < arguments.length; WQ++) {
        var XQ = null != arguments[WQ] ? arguments[WQ] : {};
        WQ % 2 ? JQ(Object(XQ), !0).forEach((function(WQ) {
          IQ(QQ, WQ, XQ[WQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : JQ(Object(XQ)).forEach((function(WQ) {
          Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
        }))
      }
      return QQ
    }

    function IQ(QQ, WQ, XQ) {
      return (WQ = function(QQ) {
        var WQ = function(QQ, WQ) {
          if ("object" != gQ(QQ) || !QQ) return QQ;
          var XQ = QQ[Symbol.toPrimitive];
          if (void 0 !== XQ) {
            var wQ = XQ.call(QQ, WQ || "default");
            if ("object" != gQ(wQ)) return wQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == gQ(WQ) ? WQ : WQ + ""
      }(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }

    function jQ(QQ, WQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return QQ
      }(QQ) || function(QQ, WQ) {
        var XQ = null == QQ ? null : "undefined" != typeof Symbol && QQ[Symbol.iterator] || QQ["@@iterator"];
        if (null != XQ) {
          var wQ, qQ, TQ, zQ, sQ = [],
            FQ = !0,
            PQ = !1;
          try {
            if (TQ = (XQ = XQ.call(QQ)).next, 0 === WQ) {
              if (Object(XQ) !== XQ) return;
              FQ = !1
            } else
              for (; !(FQ = (wQ = TQ.call(XQ)).done) && (sQ.push(wQ.value), sQ.length !== WQ); FQ = !0);
          } catch (QQ) {
            PQ = !0, qQ = QQ
          } finally {
            try {
              if (!FQ && null != XQ.return && (zQ = XQ.return(), Object(zQ) !== zQ)) return
            } finally {
              if (PQ) throw qQ
            }
          }
          return sQ
        }
      }(QQ, WQ) || function(QQ, WQ) {
        if (!QQ) return;
        if ("string" === typeof QQ) return BQ(QQ, WQ);
        var XQ = Object.prototype.toString.call(QQ).slice(8, -1);
        "Object" === XQ && QQ.constructor && (XQ = QQ.constructor.name);
        if ("Map" === XQ || "Set" === XQ) return Array.from(QQ);
        if ("Arguments" === XQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(XQ)) return BQ(QQ, WQ)
      }(QQ, WQ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function BQ(QQ, WQ) {
      (null == WQ || WQ > QQ.length) && (WQ = QQ.length);
      for (var XQ = 0, wQ = new Array(WQ); XQ < WQ; XQ++) wQ[XQ] = QQ[XQ];
      return wQ
    }
    var yQ = (0, qQ.forwardRef)((function(QQ, WQ) {
      var XQ = QQ.aspect,
        TQ = QQ.initialDimension,
        gQ = void 0 === TQ ? {
          width: -1,
          height: -1
        } : TQ,
        JQ = QQ.width,
        IQ = void 0 === JQ ? "100%" : JQ,
        BQ = QQ.height,
        yQ = void 0 === BQ ? "100%" : BQ,
        VQ = QQ.minWidth,
        DQ = void 0 === VQ ? 0 : VQ,
        pQ = QQ.minHeight,
        GQ = QQ.maxHeight,
        UQ = QQ.children,
        bQ = QQ.debounce,
        vQ = void 0 === bQ ? 0 : bQ,
        dQ = QQ.id,
        HQ = QQ.className,
        aQ = QQ.cV,
        lQ = QQ.style,
        hQ = void 0 === lQ ? {} : lQ,
        iQ = (0, qQ.useRef)(null),
        cQ = (0, qQ.useRef)();
      cQ.current = aQ, (0, qQ.useImperativeHandle)(WQ, (function() {
        return Object.defineProperty(iQ.current, "current", {
          get: function() {
            return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), iQ.current
          },
          configurable: !0
        })
      }));
      var AQ = jQ((0, qQ.useState)({
          containerWidth: gQ.width,
          containerHeight: gQ.height
        }), 2),
        RQ = AQ[0],
        EQ = AQ[1],
        CQ = (0, qQ.useCallback)((function(QQ, WQ) {
          EQ((function(XQ) {
            var wQ = Math.round(QQ),
              qQ = Math.round(WQ);
            return XQ.containerWidth === wQ && XQ.containerHeight === qQ ? XQ : {
              containerWidth: wQ,
              containerHeight: qQ
            }
          }))
        }), []);
      (0, qQ.useEffect)((function() {
        var QQ = function(QQ) {
          var WQ, XQ = QQ[0].contentRect,
            wQ = XQ.width,
            qQ = XQ.height;
          CQ(wQ, qQ), null === (WQ = cQ.current) || void 0 === WQ || WQ.call(cQ, wQ, qQ)
        };
        vQ > 0 && (QQ = zQ()(QQ, vQ, {
          trailing: !0,
          leading: !1
        }));
        var WQ = new ResizeObserver(QQ),
          XQ = iQ.current.getBoundingClientRect(),
          wQ = XQ.width,
          qQ = XQ.height;
        return CQ(wQ, qQ), WQ.observe(iQ.current),
          function() {
            WQ.disconnect()
          }
      }), [CQ, vQ]);
      var uQ = (0, qQ.useMemo)((function() {
        var QQ = RQ.containerWidth,
          WQ = RQ.containerHeight;
        if (QQ < 0 || WQ < 0) return null;
        (0, FQ.c)((0, sQ.F)(IQ) || (0, sQ.F)(yQ), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", IQ, yQ), (0, FQ.c)(!XQ || XQ > 0, "The aspect(%s) must be greater than zero.", XQ);
        var wQ = (0, sQ.F)(IQ) ? QQ : IQ,
          TQ = (0, sQ.F)(yQ) ? WQ : yQ;
        XQ && XQ > 0 && (wQ ? TQ = wQ / XQ : TQ && (wQ = TQ * XQ), GQ && TQ > GQ && (TQ = GQ)), (0, FQ.c)(wQ > 0 || TQ > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", wQ, TQ, IQ, yQ, DQ, pQ, XQ);
        var zQ = !Array.isArray(UQ) && (0, PQ.m)(UQ.type).endsWith("Chart");
        return qQ.Children.map(UQ, (function(QQ) {
          return qQ.isValidElement(QQ) ? (0, qQ.cloneElement)(QQ, rQ({
            width: wQ,
            height: TQ
          }, zQ ? {
            style: rQ({
              height: "100%",
              width: "100%",
              maxHeight: TQ,
              maxWidth: wQ
            }, QQ.props.style)
          } : {})) : QQ
        }))
      }), [XQ, UQ, yQ, GQ, pQ, DQ, RQ, IQ]);
      return qQ.createElement("div", {
        id: dQ ? "".concat(dQ) : void 0,
        className: (0, wQ.e)("recharts-responsive-container", HQ),
        style: rQ(rQ({}, hQ), {}, {
          width: IQ,
          height: yQ,
          minWidth: DQ,
          minHeight: pQ,
          maxHeight: GQ
        }),
        ref: iQ
      }, uQ)
    }))
  },
  6518: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => SQ
    });
    var wQ = XQ(61),
      qQ = XQ(5766),
      TQ = XQ.n(qQ),
      zQ = XQ(5423),
      sQ = XQ(5520),
      FQ = XQ(6345),
      PQ = XQ(5775),
      gQ = XQ(6520);

    function JQ(QQ) {
      return JQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, JQ(QQ)
    }

    function rQ(QQ, WQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return QQ
      }(QQ) || function(QQ, WQ) {
        var XQ = null == QQ ? null : "undefined" != typeof Symbol && QQ[Symbol.iterator] || QQ["@@iterator"];
        if (null != XQ) {
          var wQ, qQ, TQ, zQ, sQ = [],
            FQ = !0,
            PQ = !1;
          try {
            if (TQ = (XQ = XQ.call(QQ)).next, 0 === WQ) {
              if (Object(XQ) !== XQ) return;
              FQ = !1
            } else
              for (; !(FQ = (wQ = TQ.call(XQ)).done) && (sQ.push(wQ.value), sQ.length !== WQ); FQ = !0);
          } catch (QQ) {
            PQ = !0, qQ = QQ
          } finally {
            try {
              if (!FQ && null != XQ.return && (zQ = XQ.return(), Object(zQ) !== zQ)) return
            } finally {
              if (PQ) throw qQ
            }
          }
          return sQ
        }
      }(QQ, WQ) || function(QQ, WQ) {
        if (!QQ) return;
        if ("string" === typeof QQ) return IQ(QQ, WQ);
        var XQ = Object.prototype.toString.call(QQ).slice(8, -1);
        "Object" === XQ && QQ.constructor && (XQ = QQ.constructor.name);
        if ("Map" === XQ || "Set" === XQ) return Array.from(QQ);
        if ("Arguments" === XQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(XQ)) return IQ(QQ, WQ)
      }(QQ, WQ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function IQ(QQ, WQ) {
      (null == WQ || WQ > QQ.length) && (WQ = QQ.length);
      for (var XQ = 0, wQ = new Array(WQ); XQ < WQ; XQ++) wQ[XQ] = QQ[XQ];
      return wQ
    }

    function jQ(QQ, WQ) {
      for (var XQ = 0; XQ < WQ.length; XQ++) {
        var wQ = WQ[XQ];
        wQ.enumerable = wQ.enumerable || !1, wQ.configurable = !0, "value" in wQ && (wQ.writable = !0), Object.defineProperty(QQ, BQ(wQ.key), wQ)
      }
    }

    function BQ(QQ) {
      var WQ = function(QQ, WQ) {
        if ("object" != JQ(QQ) || !QQ) return QQ;
        var XQ = QQ[Symbol.toPrimitive];
        if (void 0 !== XQ) {
          var wQ = XQ.call(QQ, WQ || "default");
          if ("object" != JQ(wQ)) return wQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == JQ(WQ) ? WQ : WQ + ""
    }
    var yQ = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      VQ = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      DQ = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
      pQ = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
      GQ = {
        cm: 96 / 2.54,
        mm: 96 / 25.4,
        pt: 96 / 72,
        pc: 16,
        in: 96,
        Q: 96 / 101.6,
        px: 1
      },
      UQ = Object.keys(GQ),
      bQ = "NaN";
    var vQ = function() {
      function QQ(WQ, XQ) {
        ! function(QQ, WQ) {
          if (!(QQ instanceof WQ)) throw new TypeError("Cannot call a class as a function")
        }(this, QQ), this.num = WQ, this.unit = XQ, this.num = WQ, this.unit = XQ, Number.isNaN(WQ) && (this.unit = ""), "" === XQ || DQ.test(XQ) || (this.num = NaN, this.unit = ""), UQ.includes(XQ) && (this.num = function(QQ, WQ) {
          return QQ * GQ[WQ]
        }(WQ, XQ), this.unit = "px")
      }
      return WQ = QQ, wQ = [{
        key: "parse",
        value: function(WQ) {
          var XQ, wQ = rQ(null !== (XQ = pQ.exec(WQ)) && void 0 !== XQ ? XQ : [], 3),
            qQ = wQ[1],
            TQ = wQ[2];
          return new QQ(parseFloat(qQ), null !== TQ && void 0 !== TQ ? TQ : "")
        }
      }], (XQ = [{
        key: "add",
        value: function(WQ) {
          return this.unit !== WQ.unit ? new QQ(NaN, "") : new QQ(this.num + WQ.num, this.unit)
        }
      }, {
        key: "subtract",
        value: function(WQ) {
          return this.unit !== WQ.unit ? new QQ(NaN, "") : new QQ(this.num - WQ.num, this.unit)
        }
      }, {
        key: "multiply",
        value: function(WQ) {
          return "" !== this.unit && "" !== WQ.unit && this.unit !== WQ.unit ? new QQ(NaN, "") : new QQ(this.num * WQ.num, this.unit || WQ.unit)
        }
      }, {
        key: "divide",
        value: function(WQ) {
          return "" !== this.unit && "" !== WQ.unit && this.unit !== WQ.unit ? new QQ(NaN, "") : new QQ(this.num / WQ.num, this.unit || WQ.unit)
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
      }]) && jQ(WQ.prototype, XQ), wQ && jQ(WQ, wQ), Object.defineProperty(WQ, "prototype", {
        writable: !1
      }), WQ;
      var WQ, XQ, wQ
    }();

    function dQ(QQ) {
      if (QQ.includes(bQ)) return bQ;
      for (var WQ = QQ; WQ.includes("*") || WQ.includes("/");) {
        var XQ, wQ = rQ(null !== (XQ = yQ.exec(WQ)) && void 0 !== XQ ? XQ : [], 4),
          qQ = wQ[1],
          TQ = wQ[2],
          zQ = wQ[3],
          sQ = vQ.parse(null !== qQ && void 0 !== qQ ? qQ : ""),
          FQ = vQ.parse(null !== zQ && void 0 !== zQ ? zQ : ""),
          PQ = "*" === TQ ? sQ.multiply(FQ) : sQ.divide(FQ);
        if (PQ.isNaN()) return bQ;
        WQ = WQ.replace(yQ, PQ.toString())
      }
      for (; WQ.includes("+") || /.-\d+(?:\.\d+)?/.test(WQ);) {
        var gQ, JQ = rQ(null !== (gQ = VQ.exec(WQ)) && void 0 !== gQ ? gQ : [], 4),
          IQ = JQ[1],
          jQ = JQ[2],
          BQ = JQ[3],
          DQ = vQ.parse(null !== IQ && void 0 !== IQ ? IQ : ""),
          pQ = vQ.parse(null !== BQ && void 0 !== BQ ? BQ : ""),
          GQ = "+" === jQ ? DQ.add(pQ) : DQ.subtract(pQ);
        if (GQ.isNaN()) return bQ;
        WQ = WQ.replace(VQ, GQ.toString())
      }
      return WQ
    }
    var HQ = /\(([^()]*)\)/;

    function aQ(QQ) {
      var WQ = QQ.replace(/\s+/g, "");
      return WQ = function(QQ) {
        for (var WQ = QQ; WQ.includes("(");) {
          var XQ = rQ(HQ.exec(WQ), 2)[1];
          WQ = WQ.replace(HQ, dQ(XQ))
        }
        return WQ
      }(WQ), WQ = dQ(WQ)
    }

    function lQ(QQ) {
      var WQ = function(QQ) {
        try {
          return aQ(QQ)
        } catch (WQ) {
          return bQ
        }
      }(QQ.slice(5, -1));
      return WQ === bQ ? "" : WQ
    }
    var hQ = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"],
      iQ = ["dx", "dy", "angle", "className", "breakAll"];

    function cQ() {
      return cQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var WQ = 1; WQ < arguments.length; WQ++) {
          var XQ = arguments[WQ];
          for (var wQ in XQ) Object.prototype.hasOwnProperty.call(XQ, wQ) && (QQ[wQ] = XQ[wQ])
        }
        return QQ
      }, cQ.apply(this, arguments)
    }

    function AQ(QQ, WQ) {
      if (null == QQ) return {};
      var XQ, wQ, qQ = function(QQ, WQ) {
        if (null == QQ) return {};
        var XQ = {};
        for (var wQ in QQ)
          if (Object.prototype.hasOwnProperty.call(QQ, wQ)) {
            if (WQ.indexOf(wQ) >= 0) continue;
            XQ[wQ] = QQ[wQ]
          } return XQ
      }(QQ, WQ);
      if (Object.getOwnPropertySymbols) {
        var TQ = Object.getOwnPropertySymbols(QQ);
        for (wQ = 0; wQ < TQ.length; wQ++) XQ = TQ[wQ], WQ.indexOf(XQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, XQ) && (qQ[XQ] = QQ[XQ])
      }
      return qQ
    }

    function RQ(QQ, WQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return QQ
      }(QQ) || function(QQ, WQ) {
        var XQ = null == QQ ? null : "undefined" != typeof Symbol && QQ[Symbol.iterator] || QQ["@@iterator"];
        if (null != XQ) {
          var wQ, qQ, TQ, zQ, sQ = [],
            FQ = !0,
            PQ = !1;
          try {
            if (TQ = (XQ = XQ.call(QQ)).next, 0 === WQ) {
              if (Object(XQ) !== XQ) return;
              FQ = !1
            } else
              for (; !(FQ = (wQ = TQ.call(XQ)).done) && (sQ.push(wQ.value), sQ.length !== WQ); FQ = !0);
          } catch (QQ) {
            PQ = !0, qQ = QQ
          } finally {
            try {
              if (!FQ && null != XQ.return && (zQ = XQ.return(), Object(zQ) !== zQ)) return
            } finally {
              if (PQ) throw qQ
            }
          }
          return sQ
        }
      }(QQ, WQ) || function(QQ, WQ) {
        if (!QQ) return;
        if ("string" === typeof QQ) return EQ(QQ, WQ);
        var XQ = Object.prototype.toString.call(QQ).slice(8, -1);
        "Object" === XQ && QQ.constructor && (XQ = QQ.constructor.name);
        if ("Map" === XQ || "Set" === XQ) return Array.from(QQ);
        if ("Arguments" === XQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(XQ)) return EQ(QQ, WQ)
      }(QQ, WQ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function EQ(QQ, WQ) {
      (null == WQ || WQ > QQ.length) && (WQ = QQ.length);
      for (var XQ = 0, wQ = new Array(WQ); XQ < WQ; XQ++) wQ[XQ] = QQ[XQ];
      return wQ
    }
    var CQ = /[ \f\n\r\t\v\u2028\u2029]+/,
      uQ = function(QQ) {
        var WQ = QQ.children,
          XQ = QQ.breakAll,
          wQ = QQ.style;
        try {
          var qQ = [];
          return TQ()(WQ) || (qQ = XQ ? WQ.toString().split("") : WQ.toString().split(CQ)), {
            wordsWithComputedWidth: qQ.map((function(QQ) {
              return {
                word: QQ,
                width: (0, gQ.g)(QQ, wQ).width
              }
            })),
            spaceWidth: XQ ? 0 : (0, gQ.g)("\xa0", wQ).width
          }
        } catch (zQ) {
          return null
        }
      },
      LQ = function(QQ) {
        return [{
          words: TQ()(QQ) ? [] : QQ.toString().split(CQ)
        }]
      },
      kQ = function(QQ) {
        var WQ = QQ.width,
          XQ = QQ.scaleToFit,
          wQ = QQ.children,
          qQ = QQ.style,
          TQ = QQ.breakAll,
          zQ = QQ.maxLines;
        if ((WQ || XQ) && !FQ.c.isSsr) {
          var PQ = uQ({
            breakAll: TQ,
            children: wQ,
            style: qQ
          });
          return PQ ? function(QQ, WQ, XQ, wQ, qQ) {
            var TQ = QQ.maxLines,
              zQ = QQ.children,
              FQ = QQ.style,
              PQ = QQ.breakAll,
              gQ = (0, sQ.D)(TQ),
              JQ = zQ,
              rQ = function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce((function(QQ, WQ) {
                  var TQ = WQ.word,
                    zQ = WQ.width,
                    sQ = QQ[QQ.length - 1];
                  if (sQ && (null == wQ || qQ || sQ.width + zQ + XQ < Number(wQ))) sQ.words.push(TQ), sQ.width += zQ + XQ;
                  else {
                    var FQ = {
                      words: [TQ],
                      width: zQ
                    };
                    QQ.push(FQ)
                  }
                  return QQ
                }), [])
              },
              IQ = rQ(WQ);
            if (!gQ) return IQ;
            for (var jQ, BQ = function(QQ) {
                var WQ = JQ.slice(0, QQ),
                  XQ = uQ({
                    breakAll: PQ,
                    style: FQ,
                    children: WQ + "\u2026"
                  }).wordsWithComputedWidth,
                  qQ = rQ(XQ),
                  zQ = qQ.length > TQ || function(QQ) {
                    return QQ.reduce((function(QQ, WQ) {
                      return QQ.width > WQ.width ? QQ : WQ
                    }))
                  }(qQ).width > Number(wQ);
                return [zQ, qQ]
              }, yQ = 0, VQ = JQ.length - 1, DQ = 0; yQ <= VQ && DQ <= JQ.length - 1;) {
              var pQ = Math.floor((yQ + VQ) / 2),
                GQ = RQ(BQ(pQ - 1), 2),
                UQ = GQ[0],
                bQ = GQ[1],
                vQ = RQ(BQ(pQ), 1)[0];
              if (UQ || vQ || (yQ = pQ + 1), UQ && vQ && (VQ = pQ - 1), !UQ && vQ) {
                jQ = bQ;
                break
              }
              DQ++
            }
            return jQ || IQ
          }({
            breakAll: TQ,
            children: wQ,
            maxLines: zQ,
            style: qQ
          }, PQ.wordsWithComputedWidth, PQ.spaceWidth, WQ, XQ) : LQ(wQ)
        }
        return LQ(wQ)
      },
      fQ = "#808080",
      SQ = function(QQ) {
        var WQ = QQ.x,
          XQ = void 0 === WQ ? 0 : WQ,
          qQ = QQ.y,
          TQ = void 0 === qQ ? 0 : qQ,
          FQ = QQ.lineHeight,
          gQ = void 0 === FQ ? "1em" : FQ,
          JQ = QQ.capHeight,
          rQ = void 0 === JQ ? "0.71em" : JQ,
          IQ = QQ.scaleToFit,
          jQ = void 0 !== IQ && IQ,
          BQ = QQ.textAnchor,
          yQ = void 0 === BQ ? "start" : BQ,
          VQ = QQ.verticalAnchor,
          DQ = void 0 === VQ ? "end" : VQ,
          pQ = QQ.fill,
          GQ = void 0 === pQ ? fQ : pQ,
          UQ = AQ(QQ, hQ),
          bQ = (0, wQ.useMemo)((function() {
            return kQ({
              breakAll: UQ.breakAll,
              children: UQ.children,
              maxLines: UQ.maxLines,
              scaleToFit: jQ,
              style: UQ.style,
              width: UQ.width
            })
          }), [UQ.breakAll, UQ.children, UQ.maxLines, jQ, UQ.style, UQ.width]),
          vQ = UQ.dx,
          dQ = UQ.dy,
          HQ = UQ.angle,
          aQ = UQ.className,
          RQ = UQ.breakAll,
          EQ = AQ(UQ, iQ);
        if (!(0, sQ.B)(XQ) || !(0, sQ.B)(TQ)) return null;
        var CQ, uQ = XQ + ((0, sQ.D)(vQ) ? vQ : 0),
          LQ = TQ + ((0, sQ.D)(dQ) ? dQ : 0);
        switch (DQ) {
          case "start":
            CQ = lQ("calc(".concat(rQ, ")"));
            break;
          case "middle":
            CQ = lQ("calc(".concat((bQ.length - 1) / 2, " * -").concat(gQ, " + (").concat(rQ, " / 2))"));
            break;
          default:
            CQ = lQ("calc(".concat(bQ.length - 1, " * -").concat(gQ, ")"))
        }
        var SQ = [];
        if (jQ) {
          var tQ = bQ[0].width,
            oQ = UQ.width;
          SQ.push("scale(".concat(((0, sQ.D)(oQ) ? oQ / tQ : 1) / tQ, ")"))
        }
        return HQ && SQ.push("rotate(".concat(HQ, ", ").concat(uQ, ", ").concat(LQ, ")")), SQ.length && (EQ.transform = SQ.join(" ")), wQ.createElement("text", cQ({}, (0, PQ.e)(EQ, !0), {
          x: uQ,
          y: LQ,
          className: (0, zQ.e)("recharts-text", aQ),
          textAnchor: yQ,
          fill: GQ.includes("url") ? fQ : GQ
        }), bQ.map((function(QQ, WQ) {
          var XQ = QQ.words.join(RQ ? "" : " ");
          return wQ.createElement("tspan", {
            x: uQ,
            dy: 0 === WQ ? CQ : gQ,
            key: "".concat(XQ, "-").concat(WQ)
          }, XQ)
        })))
      }
  },
  6341: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => KQ
    });
    var wQ = XQ(61),
      qQ = XQ(5866),
      TQ = XQ.n(qQ),
      zQ = XQ(5766),
      sQ = XQ.n(zQ),
      FQ = XQ(5423),
      PQ = XQ(5520);

    function gQ(QQ) {
      return gQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, gQ(QQ)
    }

    function JQ() {
      return JQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var WQ = 1; WQ < arguments.length; WQ++) {
          var XQ = arguments[WQ];
          for (var wQ in XQ) Object.prototype.hasOwnProperty.call(XQ, wQ) && (QQ[wQ] = XQ[wQ])
        }
        return QQ
      }, JQ.apply(this, arguments)
    }

    function rQ(QQ, WQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return QQ
      }(QQ) || function(QQ, WQ) {
        var XQ = null == QQ ? null : "undefined" != typeof Symbol && QQ[Symbol.iterator] || QQ["@@iterator"];
        if (null != XQ) {
          var wQ, qQ, TQ, zQ, sQ = [],
            FQ = !0,
            PQ = !1;
          try {
            if (TQ = (XQ = XQ.call(QQ)).next, 0 === WQ) {
              if (Object(XQ) !== XQ) return;
              FQ = !1
            } else
              for (; !(FQ = (wQ = TQ.call(XQ)).done) && (sQ.push(wQ.value), sQ.length !== WQ); FQ = !0);
          } catch (QQ) {
            PQ = !0, qQ = QQ
          } finally {
            try {
              if (!FQ && null != XQ.return && (zQ = XQ.return(), Object(zQ) !== zQ)) return
            } finally {
              if (PQ) throw qQ
            }
          }
          return sQ
        }
      }(QQ, WQ) || function(QQ, WQ) {
        if (!QQ) return;
        if ("string" === typeof QQ) return IQ(QQ, WQ);
        var XQ = Object.prototype.toString.call(QQ).slice(8, -1);
        "Object" === XQ && QQ.constructor && (XQ = QQ.constructor.name);
        if ("Map" === XQ || "Set" === XQ) return Array.from(QQ);
        if ("Arguments" === XQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(XQ)) return IQ(QQ, WQ)
      }(QQ, WQ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function IQ(QQ, WQ) {
      (null == WQ || WQ > QQ.length) && (WQ = QQ.length);
      for (var XQ = 0, wQ = new Array(WQ); XQ < WQ; XQ++) wQ[XQ] = QQ[XQ];
      return wQ
    }

    function jQ(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function BQ(QQ) {
      for (var WQ = 1; WQ < arguments.length; WQ++) {
        var XQ = null != arguments[WQ] ? arguments[WQ] : {};
        WQ % 2 ? jQ(Object(XQ), !0).forEach((function(WQ) {
          yQ(QQ, WQ, XQ[WQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : jQ(Object(XQ)).forEach((function(WQ) {
          Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
        }))
      }
      return QQ
    }

    function yQ(QQ, WQ, XQ) {
      return (WQ = function(QQ) {
        var WQ = function(QQ, WQ) {
          if ("object" != gQ(QQ) || !QQ) return QQ;
          var XQ = QQ[Symbol.toPrimitive];
          if (void 0 !== XQ) {
            var wQ = XQ.call(QQ, WQ || "default");
            if ("object" != gQ(wQ)) return wQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == gQ(WQ) ? WQ : WQ + ""
      }(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }

    function VQ(QQ) {
      return Array.isArray(QQ) && (0, PQ.B)(QQ[0]) && (0, PQ.B)(QQ[1]) ? QQ.join(" ~ ") : QQ
    }
    var DQ = function(QQ) {
      var WQ = QQ.separator,
        XQ = void 0 === WQ ? " : " : WQ,
        qQ = QQ.contentStyle,
        zQ = void 0 === qQ ? {} : qQ,
        gQ = QQ.itemStyle,
        IQ = void 0 === gQ ? {} : gQ,
        jQ = QQ.labelStyle,
        yQ = void 0 === jQ ? {} : jQ,
        DQ = QQ.payload,
        pQ = QQ.formatter,
        GQ = QQ.itemSorter,
        UQ = QQ.wrapperClassName,
        bQ = QQ.labelClassName,
        vQ = QQ.label,
        dQ = QQ.labelFormatter,
        HQ = QQ.accessibilityLayer,
        aQ = void 0 !== HQ && HQ,
        lQ = BQ({
          margin: 0,
          padding: 10,
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          whiteSpace: "nowrap"
        }, zQ),
        hQ = BQ({
          margin: 0
        }, yQ),
        iQ = !sQ()(vQ),
        cQ = iQ ? vQ : "",
        AQ = (0, FQ.e)("recharts-default-tooltip", UQ),
        RQ = (0, FQ.e)("recharts-tooltip-label", bQ);
      iQ && dQ && void 0 !== DQ && null !== DQ && (cQ = dQ(vQ, DQ));
      var EQ = aQ ? {
        role: "status",
        "aria-live": "assertive"
      } : {};
      return wQ.createElement("div", JQ({
        className: AQ,
        style: lQ
      }, EQ), wQ.createElement("p", {
        className: RQ,
        style: hQ
      }, wQ.isValidElement(cQ) ? cQ : "".concat(cQ)), function() {
        if (DQ && DQ.length) {
          var QQ = (GQ ? TQ()(DQ, GQ) : DQ).map((function(QQ, WQ) {
            if ("none" === QQ.type) return null;
            var qQ = BQ({
                display: "block",
                paddingTop: 4,
                paddingBottom: 4,
                color: QQ.color || "#000"
              }, IQ),
              TQ = QQ.formatter || pQ || VQ,
              zQ = QQ.value,
              sQ = QQ.name,
              FQ = zQ,
              gQ = sQ;
            if (TQ && null != FQ && null != gQ) {
              var JQ = TQ(zQ, sQ, QQ, WQ, DQ);
              if (Array.isArray(JQ)) {
                var jQ = rQ(JQ, 2);
                FQ = jQ[0], gQ = jQ[1]
              } else FQ = JQ
            }
            return wQ.createElement("li", {
              className: "recharts-tooltip-item",
              key: "tooltip-item-".concat(WQ),
              style: qQ
            }, (0, PQ.B)(gQ) ? wQ.createElement("span", {
              className: "recharts-tooltip-item-name"
            }, gQ) : null, (0, PQ.B)(gQ) ? wQ.createElement("span", {
              className: "recharts-tooltip-item-separator"
            }, XQ) : null, wQ.createElement("span", {
              className: "recharts-tooltip-item-value"
            }, FQ), wQ.createElement("span", {
              className: "recharts-tooltip-item-unit"
            }, QQ.unit || ""))
          }));
          return wQ.createElement("ul", {
            className: "recharts-tooltip-item-list",
            style: {
              padding: 0,
              margin: 0
            }
          }, QQ)
        }
        return null
      }())
    };

    function pQ(QQ) {
      return pQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, pQ(QQ)
    }

    function GQ(QQ, WQ, XQ) {
      return (WQ = function(QQ) {
        var WQ = function(QQ, WQ) {
          if ("object" != pQ(QQ) || !QQ) return QQ;
          var XQ = QQ[Symbol.toPrimitive];
          if (void 0 !== XQ) {
            var wQ = XQ.call(QQ, WQ || "default");
            if ("object" != pQ(wQ)) return wQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == pQ(WQ) ? WQ : WQ + ""
      }(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }
    var UQ = "recharts-tooltip-wrapper",
      bQ = {
        visibility: "hidden"
      };

    function vQ(QQ) {
      var WQ = QQ.coordinate,
        XQ = QQ.translateX,
        wQ = QQ.translateY;
      return (0, FQ.e)(UQ, GQ(GQ(GQ(GQ({}, "".concat(UQ, "-right"), (0, PQ.D)(XQ) && WQ && (0, PQ.D)(WQ.x) && XQ >= WQ.x), "".concat(UQ, "-left"), (0, PQ.D)(XQ) && WQ && (0, PQ.D)(WQ.x) && XQ < WQ.x), "".concat(UQ, "-bottom"), (0, PQ.D)(wQ) && WQ && (0, PQ.D)(WQ.y) && wQ >= WQ.y), "".concat(UQ, "-top"), (0, PQ.D)(wQ) && WQ && (0, PQ.D)(WQ.y) && wQ < WQ.y))
    }

    function dQ(QQ) {
      var WQ = QQ.allowEscapeViewBox,
        XQ = QQ.coordinate,
        wQ = QQ.key,
        qQ = QQ.offsetTopLeft,
        TQ = QQ.position,
        zQ = QQ.reverseDirection,
        sQ = QQ.tooltipDimension,
        FQ = QQ.viewBox,
        gQ = QQ.viewBoxDimension;
      if (TQ && (0, PQ.D)(TQ[wQ])) return TQ[wQ];
      var JQ = XQ[wQ] - sQ - qQ,
        rQ = XQ[wQ] + qQ;
      return WQ[wQ] ? zQ[wQ] ? JQ : rQ : zQ[wQ] ? JQ < FQ[wQ] ? Math.max(rQ, FQ[wQ]) : Math.max(JQ, FQ[wQ]) : rQ + sQ > FQ[wQ] + gQ ? Math.max(JQ, FQ[wQ]) : Math.max(rQ, FQ[wQ])
    }

    function HQ(QQ) {
      return HQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, HQ(QQ)
    }

    function aQ(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function lQ(QQ) {
      for (var WQ = 1; WQ < arguments.length; WQ++) {
        var XQ = null != arguments[WQ] ? arguments[WQ] : {};
        WQ % 2 ? aQ(Object(XQ), !0).forEach((function(WQ) {
          EQ(QQ, WQ, XQ[WQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : aQ(Object(XQ)).forEach((function(WQ) {
          Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
        }))
      }
      return QQ
    }

    function hQ(QQ, WQ) {
      for (var XQ = 0; XQ < WQ.length; XQ++) {
        var wQ = WQ[XQ];
        wQ.enumerable = wQ.enumerable || !1, wQ.configurable = !0, "value" in wQ && (wQ.writable = !0), Object.defineProperty(QQ, CQ(wQ.key), wQ)
      }
    }

    function iQ(QQ, WQ, XQ) {
      return WQ = AQ(WQ),
        function(QQ, WQ) {
          if (WQ && ("object" === HQ(WQ) || "function" === typeof WQ)) return WQ;
          if (void 0 !== WQ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(QQ) {
            if (void 0 === QQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return QQ
          }(QQ)
        }(QQ, cQ() ? Reflect.construct(WQ, XQ || [], AQ(QQ).constructor) : WQ.apply(QQ, XQ))
    }

    function cQ() {
      try {
        var QQ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (QQ) {}
      return (cQ = function() {
        return !!QQ
      })()
    }

    function AQ(QQ) {
      return AQ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(QQ) {
        return QQ.__proto__ || Object.getPrototypeOf(QQ)
      }, AQ(QQ)
    }

    function RQ(QQ, WQ) {
      return RQ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(QQ, WQ) {
        return QQ.__proto__ = WQ, QQ
      }, RQ(QQ, WQ)
    }

    function EQ(QQ, WQ, XQ) {
      return (WQ = CQ(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }

    function CQ(QQ) {
      var WQ = function(QQ, WQ) {
        if ("object" != HQ(QQ) || !QQ) return QQ;
        var XQ = QQ[Symbol.toPrimitive];
        if (void 0 !== XQ) {
          var wQ = XQ.call(QQ, WQ || "default");
          if ("object" != HQ(wQ)) return wQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == HQ(WQ) ? WQ : WQ + ""
    }
    var uQ = function(QQ) {
        function WQ() {
          var QQ;
          ! function(QQ, WQ) {
            if (!(QQ instanceof WQ)) throw new TypeError("Cannot call a class as a function")
          }(this, WQ);
          for (var XQ = arguments.length, wQ = new Array(XQ), qQ = 0; qQ < XQ; qQ++) wQ[qQ] = arguments[qQ];
          return EQ(QQ = iQ(this, WQ, [].concat(wQ)), "state", {
            dismissed: !1,
            dismissedAtCoordinate: {
              x: 0,
              y: 0
            },
            lastBoundingBox: {
              width: -1,
              height: -1
            }
          }), EQ(QQ, "handleKeyDown", (function(WQ) {
            var XQ, wQ, qQ, TQ;
            "Escape" === WQ.key && QQ.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x: null !== (XQ = null === (wQ = QQ.props.coordinate) || void 0 === wQ ? void 0 : wQ.x) && void 0 !== XQ ? XQ : 0,
                y: null !== (qQ = null === (TQ = QQ.props.coordinate) || void 0 === TQ ? void 0 : TQ.y) && void 0 !== qQ ? qQ : 0
              }
            })
          })), QQ
        }
        return function(QQ, WQ) {
          if ("function" !== typeof WQ && null !== WQ) throw new TypeError("Super expression must either be null or a function");
          QQ.prototype = Object.create(WQ && WQ.prototype, {
            constructor: {
              value: QQ,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(QQ, "prototype", {
            writable: !1
          }), WQ && RQ(QQ, WQ)
        }(WQ, QQ), XQ = WQ, (qQ = [{
          key: "updateBBox",
          value: function() {
            if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
              var QQ = this.wrapperNode.getBoundingClientRect();
              (Math.abs(QQ.width - this.state.lastBoundingBox.width) > 1 || Math.abs(QQ.height - this.state.lastBoundingBox.height) > 1) && this.setState({
                lastBoundingBox: {
                  width: QQ.width,
                  height: QQ.height
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
            var QQ, WQ;
            this.props.active && this.updateBBox(), this.state.dismissed && ((null === (QQ = this.props.coordinate) || void 0 === QQ ? void 0 : QQ.x) === this.state.dismissedAtCoordinate.x && (null === (WQ = this.props.coordinate) || void 0 === WQ ? void 0 : WQ.y) === this.state.dismissedAtCoordinate.y || (this.state.dismissed = !1))
          }
        }, {
          key: "render",
          value: function() {
            var QQ = this,
              WQ = this.props,
              XQ = WQ.active,
              qQ = WQ.allowEscapeViewBox,
              TQ = WQ.animationDuration,
              zQ = WQ.animationEasing,
              sQ = WQ.children,
              FQ = WQ.coordinate,
              PQ = WQ.hasPayload,
              gQ = WQ.isAnimationActive,
              JQ = WQ.offset,
              rQ = WQ.position,
              IQ = WQ.reverseDirection,
              jQ = WQ.useTranslate3d,
              BQ = WQ.viewBox,
              yQ = WQ.wrapperStyle,
              VQ = function(QQ) {
                var WQ, XQ, wQ = QQ.allowEscapeViewBox,
                  qQ = QQ.coordinate,
                  TQ = QQ.offsetTopLeft,
                  zQ = QQ.position,
                  sQ = QQ.reverseDirection,
                  FQ = QQ.tooltipBox,
                  PQ = QQ.useTranslate3d,
                  gQ = QQ.viewBox;
                return {
                  cssProperties: FQ.height > 0 && FQ.width > 0 && qQ ? function(QQ) {
                    var WQ = QQ.translateX,
                      XQ = QQ.translateY;
                    return {
                      transform: QQ.useTranslate3d ? "translate3d(".concat(WQ, "px, ").concat(XQ, "px, 0)") : "translate(".concat(WQ, "px, ").concat(XQ, "px)")
                    }
                  }({
                    translateX: WQ = dQ({
                      allowEscapeViewBox: wQ,
                      coordinate: qQ,
                      key: "x",
                      offsetTopLeft: TQ,
                      position: zQ,
                      reverseDirection: sQ,
                      tooltipDimension: FQ.width,
                      viewBox: gQ,
                      viewBoxDimension: gQ.width
                    }),
                    translateY: XQ = dQ({
                      allowEscapeViewBox: wQ,
                      coordinate: qQ,
                      key: "y",
                      offsetTopLeft: TQ,
                      position: zQ,
                      reverseDirection: sQ,
                      tooltipDimension: FQ.height,
                      viewBox: gQ,
                      viewBoxDimension: gQ.height
                    }),
                    useTranslate3d: PQ
                  }) : bQ,
                  cssClasses: vQ({
                    translateX: WQ,
                    translateY: XQ,
                    coordinate: qQ
                  })
                }
              }({
                allowEscapeViewBox: qQ,
                coordinate: FQ,
                offsetTopLeft: JQ,
                position: rQ,
                reverseDirection: IQ,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: jQ,
                viewBox: BQ
              }),
              DQ = VQ.cssClasses,
              pQ = VQ.cssProperties,
              GQ = lQ(lQ({
                transition: gQ && XQ ? "transform ".concat(TQ, "ms ").concat(zQ) : void 0
              }, pQ), {}, {
                pointerEvents: "none",
                visibility: !this.state.dismissed && XQ && PQ ? "visible" : "hidden",
                position: "absolute",
                top: 0,
                left: 0
              }, yQ);
            return wQ.createElement("div", {
              tabIndex: -1,
              className: DQ,
              style: GQ,
              ref: function(WQ) {
                QQ.wrapperNode = WQ
              }
            }, sQ)
          }
        }]) && hQ(XQ.prototype, qQ), TQ && hQ(XQ, TQ), Object.defineProperty(XQ, "prototype", {
          writable: !1
        }), XQ;
        var XQ, qQ, TQ
      }(wQ.PureComponent),
      LQ = XQ(6345),
      kQ = XQ(6354);

    function fQ(QQ) {
      return fQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, fQ(QQ)
    }

    function SQ(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function tQ(QQ) {
      for (var WQ = 1; WQ < arguments.length; WQ++) {
        var XQ = null != arguments[WQ] ? arguments[WQ] : {};
        WQ % 2 ? SQ(Object(XQ), !0).forEach((function(WQ) {
          NQ(QQ, WQ, XQ[WQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : SQ(Object(XQ)).forEach((function(WQ) {
          Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
        }))
      }
      return QQ
    }

    function oQ(QQ, WQ) {
      for (var XQ = 0; XQ < WQ.length; XQ++) {
        var wQ = WQ[XQ];
        wQ.enumerable = wQ.enumerable || !1, wQ.configurable = !0, "value" in wQ && (wQ.writable = !0), Object.defineProperty(QQ, ZQ(wQ.key), wQ)
      }
    }

    function eQ(QQ, WQ, XQ) {
      return WQ = xQ(WQ),
        function(QQ, WQ) {
          if (WQ && ("object" === fQ(WQ) || "function" === typeof WQ)) return WQ;
          if (void 0 !== WQ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(QQ) {
            if (void 0 === QQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return QQ
          }(QQ)
        }(QQ, nQ() ? Reflect.construct(WQ, XQ || [], xQ(QQ).constructor) : WQ.apply(QQ, XQ))
    }

    function nQ() {
      try {
        var QQ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (QQ) {}
      return (nQ = function() {
        return !!QQ
      })()
    }

    function xQ(QQ) {
      return xQ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(QQ) {
        return QQ.__proto__ || Object.getPrototypeOf(QQ)
      }, xQ(QQ)
    }

    function YQ(QQ, WQ) {
      return YQ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(QQ, WQ) {
        return QQ.__proto__ = WQ, QQ
      }, YQ(QQ, WQ)
    }

    function NQ(QQ, WQ, XQ) {
      return (WQ = ZQ(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }

    function ZQ(QQ) {
      var WQ = function(QQ, WQ) {
        if ("object" != fQ(QQ) || !QQ) return QQ;
        var XQ = QQ[Symbol.toPrimitive];
        if (void 0 !== XQ) {
          var wQ = XQ.call(QQ, WQ || "default");
          if ("object" != fQ(wQ)) return wQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == fQ(WQ) ? WQ : WQ + ""
    }

    function OQ(QQ) {
      return QQ.dataKey
    }
    var KQ = function(QQ) {
      function WQ() {
        return function(QQ, WQ) {
          if (!(QQ instanceof WQ)) throw new TypeError("Cannot call a class as a function")
        }(this, WQ), eQ(this, WQ, arguments)
      }
      return function(QQ, WQ) {
        if ("function" !== typeof WQ && null !== WQ) throw new TypeError("Super expression must either be null or a function");
        QQ.prototype = Object.create(WQ && WQ.prototype, {
          constructor: {
            value: QQ,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(QQ, "prototype", {
          writable: !1
        }), WQ && YQ(QQ, WQ)
      }(WQ, QQ), XQ = WQ, (qQ = [{
        key: "render",
        value: function() {
          var QQ = this,
            WQ = this.props,
            XQ = WQ.active,
            qQ = WQ.allowEscapeViewBox,
            TQ = WQ.animationDuration,
            zQ = WQ.animationEasing,
            sQ = WQ.content,
            FQ = WQ.coordinate,
            PQ = WQ.filterNull,
            gQ = WQ.isAnimationActive,
            JQ = WQ.offset,
            rQ = WQ.payload,
            IQ = WQ.payloadUniqBy,
            jQ = WQ.position,
            BQ = WQ.reverseDirection,
            yQ = WQ.useTranslate3d,
            VQ = WQ.viewBox,
            pQ = WQ.wrapperStyle,
            GQ = null !== rQ && void 0 !== rQ ? rQ : [];
          PQ && GQ.length && (GQ = (0, kQ.e)(rQ.filter((function(WQ) {
            return null != WQ.value && (!0 !== WQ.hide || QQ.props.includeHidden)
          })), IQ, OQ));
          var UQ = GQ.length > 0;
          return wQ.createElement(uQ, {
            allowEscapeViewBox: qQ,
            animationDuration: TQ,
            animationEasing: zQ,
            isAnimationActive: gQ,
            active: XQ,
            coordinate: FQ,
            hasPayload: UQ,
            offset: JQ,
            position: jQ,
            reverseDirection: BQ,
            useTranslate3d: yQ,
            viewBox: VQ,
            wrapperStyle: pQ
          }, function(QQ, WQ) {
            return wQ.isValidElement(QQ) ? wQ.cloneElement(QQ, WQ) : "function" === typeof QQ ? wQ.createElement(QQ, WQ) : wQ.createElement(DQ, WQ)
          }(sQ, tQ(tQ({}, this.props), {}, {
            payload: GQ
          })))
        }
      }]) && oQ(XQ.prototype, qQ), TQ && oQ(XQ, TQ), Object.defineProperty(XQ, "prototype", {
        writable: !1
      }), XQ;
      var XQ, qQ, TQ
    }(wQ.PureComponent);
    NQ(KQ, "displayName", "Tooltip"), NQ(KQ, "defaultProps", {
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
      isAnimationActive: !LQ.c.isSsr,
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
  6339: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => PQ
    });
    var wQ = XQ(61),
      qQ = XQ(5423),
      TQ = XQ(5775),
      zQ = ["children", "className"];

    function sQ() {
      return sQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var WQ = 1; WQ < arguments.length; WQ++) {
          var XQ = arguments[WQ];
          for (var wQ in XQ) Object.prototype.hasOwnProperty.call(XQ, wQ) && (QQ[wQ] = XQ[wQ])
        }
        return QQ
      }, sQ.apply(this, arguments)
    }

    function FQ(QQ, WQ) {
      if (null == QQ) return {};
      var XQ, wQ, qQ = function(QQ, WQ) {
        if (null == QQ) return {};
        var XQ = {};
        for (var wQ in QQ)
          if (Object.prototype.hasOwnProperty.call(QQ, wQ)) {
            if (WQ.indexOf(wQ) >= 0) continue;
            XQ[wQ] = QQ[wQ]
          } return XQ
      }(QQ, WQ);
      if (Object.getOwnPropertySymbols) {
        var TQ = Object.getOwnPropertySymbols(QQ);
        for (wQ = 0; wQ < TQ.length; wQ++) XQ = TQ[wQ], WQ.indexOf(XQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, XQ) && (qQ[XQ] = QQ[XQ])
      }
      return qQ
    }
    var PQ = wQ.forwardRef((function(QQ, WQ) {
      var XQ = QQ.children,
        PQ = QQ.className,
        gQ = FQ(QQ, zQ),
        JQ = (0, qQ.e)("recharts-layer", PQ);
      return wQ.createElement("g", sQ({
        className: JQ
      }, (0, TQ.e)(gQ, !0), {
        ref: WQ
      }), XQ)
    }))
  },
  6333: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => PQ
    });
    var wQ = XQ(61),
      qQ = XQ(5423),
      TQ = XQ(5775),
      zQ = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];

    function sQ() {
      return sQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var WQ = 1; WQ < arguments.length; WQ++) {
          var XQ = arguments[WQ];
          for (var wQ in XQ) Object.prototype.hasOwnProperty.call(XQ, wQ) && (QQ[wQ] = XQ[wQ])
        }
        return QQ
      }, sQ.apply(this, arguments)
    }

    function FQ(QQ, WQ) {
      if (null == QQ) return {};
      var XQ, wQ, qQ = function(QQ, WQ) {
        if (null == QQ) return {};
        var XQ = {};
        for (var wQ in QQ)
          if (Object.prototype.hasOwnProperty.call(QQ, wQ)) {
            if (WQ.indexOf(wQ) >= 0) continue;
            XQ[wQ] = QQ[wQ]
          } return XQ
      }(QQ, WQ);
      if (Object.getOwnPropertySymbols) {
        var TQ = Object.getOwnPropertySymbols(QQ);
        for (wQ = 0; wQ < TQ.length; wQ++) XQ = TQ[wQ], WQ.indexOf(XQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, XQ) && (qQ[XQ] = QQ[XQ])
      }
      return qQ
    }

    function PQ(QQ) {
      var WQ = QQ.children,
        XQ = QQ.width,
        PQ = QQ.height,
        gQ = QQ.viewBox,
        JQ = QQ.className,
        rQ = QQ.style,
        IQ = QQ.title,
        jQ = QQ.desc,
        BQ = FQ(QQ, zQ),
        yQ = gQ || {
          width: XQ,
          height: PQ,
          x: 0,
          y: 0
        },
        VQ = (0, qQ.e)("recharts-surface", JQ);
      return wQ.createElement("svg", sQ({}, (0, TQ.e)(BQ, !0, "svg"), {
        className: VQ,
        width: XQ,
        height: PQ,
        style: rQ,
        viewBox: "".concat(yQ.x, " ").concat(yQ.y, " ").concat(yQ.width, " ").concat(yQ.height)
      }), wQ.createElement("title", null, IQ), wQ.createElement("desc", null, jQ), WQ)
    }
  },
  6727: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => pQ,
      f: () => bQ,
      j: () => hQ,
      l: () => lQ,
      p: () => GQ,
      r: () => aQ,
      v: () => HQ,
      x: () => UQ,
      z: () => dQ,
      B: () => vQ
    });
    var wQ = XQ(61),
      qQ = XQ(6329),
      TQ = XQ(6730),
      zQ = XQ.n(TQ),
      sQ = XQ(6647),
      FQ = XQ.n(sQ),
      PQ = XQ(5578),
      gQ = XQ.n(PQ)()((function(QQ) {
        return {
          x: QQ.left,
          y: QQ.top,
          width: QQ.width,
          height: QQ.height
        }
      }), (function(QQ) {
        return ["l", QQ.left, "t", QQ.top, "w", QQ.width, "h", QQ.height].join("")
      })),
      JQ = XQ(5520);
    var rQ = (0, wQ.createContext)(void 0),
      IQ = (0, wQ.createContext)(void 0),
      jQ = (0, wQ.createContext)(void 0),
      BQ = (0, wQ.createContext)({}),
      yQ = (0, wQ.createContext)(void 0),
      VQ = (0, wQ.createContext)(0),
      DQ = (0, wQ.createContext)(0),
      pQ = function(QQ) {
        var WQ = QQ.state,
          XQ = WQ.xAxisMap,
          qQ = WQ.yAxisMap,
          TQ = WQ.offset,
          zQ = QQ.clipPathId,
          sQ = QQ.children,
          FQ = QQ.width,
          PQ = QQ.height,
          JQ = gQ(TQ);
        return wQ.createElement(rQ.Provider, {
          value: XQ
        }, wQ.createElement(IQ.Provider, {
          value: qQ
        }, wQ.createElement(BQ.Provider, {
          value: TQ
        }, wQ.createElement(jQ.Provider, {
          value: JQ
        }, wQ.createElement(yQ.Provider, {
          value: zQ
        }, wQ.createElement(VQ.Provider, {
          value: PQ
        }, wQ.createElement(DQ.Provider, {
          value: FQ
        }, sQ)))))))
      },
      GQ = function() {
        return (0, wQ.useContext)(yQ)
      };
    var UQ = function(QQ) {
        var WQ = (0, wQ.useContext)(rQ);
        null == WQ && (0, qQ.b)(!1);
        var XQ = WQ[QQ];
        return null == XQ && (0, qQ.b)(!1), XQ
      },
      bQ = function() {
        var QQ = (0, wQ.useContext)(rQ);
        return (0, JQ.i)(QQ)
      },
      vQ = function() {
        var QQ = (0, wQ.useContext)(IQ);
        return zQ()(QQ, (function(QQ) {
          return FQ()(QQ.domain, Number.isFinite)
        })) || (0, JQ.i)(QQ)
      },
      dQ = function(QQ) {
        var WQ = (0, wQ.useContext)(IQ);
        null == WQ && (0, qQ.b)(!1);
        var XQ = WQ[QQ];
        return null == XQ && (0, qQ.b)(!1), XQ
      },
      HQ = function() {
        return (0, wQ.useContext)(jQ)
      },
      aQ = function() {
        return (0, wQ.useContext)(BQ)
      },
      lQ = function() {
        return (0, wQ.useContext)(DQ)
      },
      hQ = function() {
        return (0, wQ.useContext)(VQ)
      }
  },
  6752: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => OQ
    });
    var wQ = XQ(61);

    function qQ() {}

    function TQ(QQ, WQ, XQ) {
      QQ._context.bezierCurveTo((2 * QQ._x0 + QQ._x1) / 3, (2 * QQ._y0 + QQ._y1) / 3, (QQ._x0 + 2 * QQ._x1) / 3, (QQ._y0 + 2 * QQ._y1) / 3, (QQ._x0 + 4 * QQ._x1 + WQ) / 6, (QQ._y0 + 4 * QQ._y1 + XQ) / 6)
    }

    function zQ(QQ) {
      this._context = QQ
    }

    function sQ(QQ) {
      this._context = QQ
    }

    function FQ(QQ) {
      this._context = QQ
    }
    zQ.prototype = {
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
            TQ(this, this._x1, this._y1);
          case 2:
            this._context.lineTo(this._x1, this._y1)
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(QQ, WQ) {
        switch (QQ = +QQ, WQ = +WQ, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(QQ, WQ) : this._context.moveTo(QQ, WQ);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
          default:
            TQ(this, QQ, WQ)
        }
        this._x0 = this._x1, this._x1 = QQ, this._y0 = this._y1, this._y1 = WQ
      }
    }, sQ.prototype = {
      areaStart: qQ,
      areaEnd: qQ,
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
      point: function(QQ, WQ) {
        switch (QQ = +QQ, WQ = +WQ, this._point) {
          case 0:
            this._point = 1, this._x2 = QQ, this._y2 = WQ;
            break;
          case 1:
            this._point = 2, this._x3 = QQ, this._y3 = WQ;
            break;
          case 2:
            this._point = 3, this._x4 = QQ, this._y4 = WQ, this._context.moveTo((this._x0 + 4 * this._x1 + QQ) / 6, (this._y0 + 4 * this._y1 + WQ) / 6);
            break;
          default:
            TQ(this, QQ, WQ)
        }
        this._x0 = this._x1, this._x1 = QQ, this._y0 = this._y1, this._y1 = WQ
      }
    }, FQ.prototype = {
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
      point: function(QQ, WQ) {
        switch (QQ = +QQ, WQ = +WQ, this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var XQ = (this._x0 + 4 * this._x1 + QQ) / 6,
              wQ = (this._y0 + 4 * this._y1 + WQ) / 6;
            this._line ? this._context.lineTo(XQ, wQ) : this._context.moveTo(XQ, wQ);
            break;
          case 3:
            this._point = 4;
          default:
            TQ(this, QQ, WQ)
        }
        this._x0 = this._x1, this._x1 = QQ, this._y0 = this._y1, this._y1 = WQ
      }
    };
    class PQ {
      constructor(QQ, WQ) {
        this._context = QQ, this._x = WQ
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
      point(QQ, WQ) {
        switch (QQ = +QQ, WQ = +WQ, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(QQ, WQ) : this._context.moveTo(QQ, WQ);
            break;
          case 1:
            this._point = 2;
          default:
            this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + QQ) / 2, this._y0, this._x0, WQ, QQ, WQ) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + WQ) / 2, QQ, this._y0, QQ, WQ)
        }
        this._x0 = QQ, this._y0 = WQ
      }
    }

    function gQ(QQ) {
      this._context = QQ
    }

    function JQ(QQ) {
      this._context = QQ
    }

    function rQ(QQ) {
      return new JQ(QQ)
    }

    function IQ(QQ) {
      return QQ < 0 ? -1 : 1
    }

    function jQ(QQ, WQ, XQ) {
      var wQ = QQ._x1 - QQ._x0,
        qQ = WQ - QQ._x1,
        TQ = (QQ._y1 - QQ._y0) / (wQ || qQ < 0 && -0),
        zQ = (XQ - QQ._y1) / (qQ || wQ < 0 && -0),
        sQ = (TQ * qQ + zQ * wQ) / (wQ + qQ);
      return (IQ(TQ) + IQ(zQ)) * Math.min(Math.abs(TQ), Math.abs(zQ), .5 * Math.abs(sQ)) || 0
    }

    function BQ(QQ, WQ) {
      var XQ = QQ._x1 - QQ._x0;
      return XQ ? (3 * (QQ._y1 - QQ._y0) / XQ - WQ) / 2 : WQ
    }

    function yQ(QQ, WQ, XQ) {
      var wQ = QQ._x0,
        qQ = QQ._y0,
        TQ = QQ._x1,
        zQ = QQ._y1,
        sQ = (TQ - wQ) / 3;
      QQ._context.bezierCurveTo(wQ + sQ, qQ + sQ * WQ, TQ - sQ, zQ - sQ * XQ, TQ, zQ)
    }

    function VQ(QQ) {
      this._context = QQ
    }

    function DQ(QQ) {
      this._context = new pQ(QQ)
    }

    function pQ(QQ) {
      this._context = QQ
    }

    function GQ(QQ) {
      this._context = QQ
    }

    function UQ(QQ) {
      var WQ, XQ, wQ = QQ.length - 1,
        qQ = new Array(wQ),
        TQ = new Array(wQ),
        zQ = new Array(wQ);
      for (qQ[0] = 0, TQ[0] = 2, zQ[0] = QQ[0] + 2 * QQ[1], WQ = 1; WQ < wQ - 1; ++WQ) qQ[WQ] = 1, TQ[WQ] = 4, zQ[WQ] = 4 * QQ[WQ] + 2 * QQ[WQ + 1];
      for (qQ[wQ - 1] = 2, TQ[wQ - 1] = 7, zQ[wQ - 1] = 8 * QQ[wQ - 1] + QQ[wQ], WQ = 1; WQ < wQ; ++WQ) XQ = qQ[WQ] / TQ[WQ - 1], TQ[WQ] -= XQ, zQ[WQ] -= XQ * zQ[WQ - 1];
      for (qQ[wQ - 1] = zQ[wQ - 1] / TQ[wQ - 1], WQ = wQ - 2; WQ >= 0; --WQ) qQ[WQ] = (zQ[WQ] - qQ[WQ + 1]) / TQ[WQ];
      for (TQ[wQ - 1] = (QQ[wQ] + qQ[wQ - 1]) / 2, WQ = 0; WQ < wQ - 1; ++WQ) TQ[WQ] = 2 * QQ[WQ + 1] - qQ[WQ + 1];
      return [qQ, TQ]
    }

    function bQ(QQ, WQ) {
      this._context = QQ, this._t = WQ
    }
    gQ.prototype = {
      areaStart: qQ,
      areaEnd: qQ,
      lineStart: function() {
        this._point = 0
      },
      lineEnd: function() {
        this._point && this._context.closePath()
      },
      point: function(QQ, WQ) {
        QQ = +QQ, WQ = +WQ, this._point ? this._context.lineTo(QQ, WQ) : (this._point = 1, this._context.moveTo(QQ, WQ))
      }
    }, JQ.prototype = {
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
      point: function(QQ, WQ) {
        switch (QQ = +QQ, WQ = +WQ, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(QQ, WQ) : this._context.moveTo(QQ, WQ);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(QQ, WQ)
        }
      }
    }, VQ.prototype = {
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
            yQ(this, this._t0, BQ(this, this._t0))
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(QQ, WQ) {
        var XQ = NaN;
        if (WQ = +WQ, (QQ = +QQ) !== this._x1 || WQ !== this._y1) {
          switch (this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(QQ, WQ) : this._context.moveTo(QQ, WQ);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3, yQ(this, BQ(this, XQ = jQ(this, QQ, WQ)), XQ);
              break;
            default:
              yQ(this, this._t0, XQ = jQ(this, QQ, WQ))
          }
          this._x0 = this._x1, this._x1 = QQ, this._y0 = this._y1, this._y1 = WQ, this._t0 = XQ
        }
      }
    }, (DQ.prototype = Object.create(VQ.prototype)).point = function(QQ, WQ) {
      VQ.prototype.point.call(this, WQ, QQ)
    }, pQ.prototype = {
      moveTo: function(QQ, WQ) {
        this._context.moveTo(WQ, QQ)
      },
      closePath: function() {
        this._context.closePath()
      },
      lineTo: function(QQ, WQ) {
        this._context.lineTo(WQ, QQ)
      },
      bezierCurveTo: function(QQ, WQ, XQ, wQ, qQ, TQ) {
        this._context.bezierCurveTo(WQ, QQ, wQ, XQ, TQ, qQ)
      }
    }, GQ.prototype = {
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
        var QQ = this._x,
          WQ = this._y,
          XQ = QQ.length;
        if (XQ)
          if (this._line ? this._context.lineTo(QQ[0], WQ[0]) : this._context.moveTo(QQ[0], WQ[0]), 2 === XQ) this._context.lineTo(QQ[1], WQ[1]);
          else
            for (var wQ = UQ(QQ), qQ = UQ(WQ), TQ = 0, zQ = 1; zQ < XQ; ++TQ, ++zQ) this._context.bezierCurveTo(wQ[0][TQ], qQ[0][TQ], wQ[1][TQ], qQ[1][TQ], QQ[zQ], WQ[zQ]);
        (this._line || 0 !== this._line && 1 === XQ) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
      },
      point: function(QQ, WQ) {
        this._x.push(+QQ), this._y.push(+WQ)
      }
    }, bQ.prototype = {
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
      point: function(QQ, WQ) {
        switch (QQ = +QQ, WQ = +WQ, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(QQ, WQ) : this._context.moveTo(QQ, WQ);
            break;
          case 1:
            this._point = 2;
          default:
            if (this._t <= 0) this._context.lineTo(this._x, WQ), this._context.lineTo(QQ, WQ);
            else {
              var XQ = this._x * (1 - this._t) + QQ * this._t;
              this._context.lineTo(XQ, this._y), this._context.lineTo(XQ, WQ)
            }
        }
        this._x = QQ, this._y = WQ
      }
    };
    var vQ = XQ(6605),
      dQ = XQ(6484),
      HQ = XQ(6491);

    function aQ(QQ) {
      return QQ[0]
    }

    function lQ(QQ) {
      return QQ[1]
    }

    function hQ(QQ, WQ) {
      var XQ = (0, dQ.e)(!0),
        wQ = null,
        qQ = rQ,
        TQ = null,
        zQ = (0, HQ.e)(sQ);

      function sQ(sQ) {
        var FQ, PQ, gQ, JQ = (sQ = (0, vQ.e)(sQ)).length,
          rQ = !1;
        for (null == wQ && (TQ = qQ(gQ = zQ())), FQ = 0; FQ <= JQ; ++FQ) !(FQ < JQ && XQ(PQ = sQ[FQ], FQ, sQ)) === rQ && ((rQ = !rQ) ? TQ.lineStart() : TQ.lineEnd()), rQ && TQ.point(+QQ(PQ, FQ, sQ), +WQ(PQ, FQ, sQ));
        if (gQ) return TQ = null, gQ + "" || null
      }
      return QQ = "function" === typeof QQ ? QQ : void 0 === QQ ? aQ : (0, dQ.e)(QQ), WQ = "function" === typeof WQ ? WQ : void 0 === WQ ? lQ : (0, dQ.e)(WQ), sQ.x = function(WQ) {
        return arguments.length ? (QQ = "function" === typeof WQ ? WQ : (0, dQ.e)(+WQ), sQ) : QQ
      }, sQ.y = function(QQ) {
        return arguments.length ? (WQ = "function" === typeof QQ ? QQ : (0, dQ.e)(+QQ), sQ) : WQ
      }, sQ.defined = function(QQ) {
        return arguments.length ? (XQ = "function" === typeof QQ ? QQ : (0, dQ.e)(!!QQ), sQ) : XQ
      }, sQ.curve = function(QQ) {
        return arguments.length ? (qQ = QQ, null != wQ && (TQ = qQ(wQ)), sQ) : qQ
      }, sQ.context = function(QQ) {
        return arguments.length ? (null == QQ ? wQ = TQ = null : TQ = qQ(wQ = QQ), sQ) : wQ
      }, sQ
    }

    function iQ(QQ, WQ, XQ) {
      var wQ = null,
        qQ = (0, dQ.e)(!0),
        TQ = null,
        zQ = rQ,
        sQ = null,
        FQ = (0, HQ.e)(PQ);

      function PQ(PQ) {
        var gQ, JQ, rQ, IQ, jQ, BQ = (PQ = (0, vQ.e)(PQ)).length,
          yQ = !1,
          VQ = new Array(BQ),
          DQ = new Array(BQ);
        for (null == TQ && (sQ = zQ(jQ = FQ())), gQ = 0; gQ <= BQ; ++gQ) {
          if (!(gQ < BQ && qQ(IQ = PQ[gQ], gQ, PQ)) === yQ)
            if (yQ = !yQ) JQ = gQ, sQ.areaStart(), sQ.lineStart();
            else {
              for (sQ.lineEnd(), sQ.lineStart(), rQ = gQ - 1; rQ >= JQ; --rQ) sQ.point(VQ[rQ], DQ[rQ]);
              sQ.lineEnd(), sQ.areaEnd()
            } yQ && (VQ[gQ] = +QQ(IQ, gQ, PQ), DQ[gQ] = +WQ(IQ, gQ, PQ), sQ.point(wQ ? +wQ(IQ, gQ, PQ) : VQ[gQ], XQ ? +XQ(IQ, gQ, PQ) : DQ[gQ]))
        }
        if (jQ) return sQ = null, jQ + "" || null
      }

      function gQ() {
        return hQ().defined(qQ).curve(zQ).context(TQ)
      }
      return QQ = "function" === typeof QQ ? QQ : void 0 === QQ ? aQ : (0, dQ.e)(+QQ), WQ = "function" === typeof WQ ? WQ : void 0 === WQ ? (0, dQ.e)(0) : (0, dQ.e)(+WQ), XQ = "function" === typeof XQ ? XQ : void 0 === XQ ? lQ : (0, dQ.e)(+XQ), PQ.x = function(WQ) {
        return arguments.length ? (QQ = "function" === typeof WQ ? WQ : (0, dQ.e)(+WQ), wQ = null, PQ) : QQ
      }, PQ.x0 = function(WQ) {
        return arguments.length ? (QQ = "function" === typeof WQ ? WQ : (0, dQ.e)(+WQ), PQ) : QQ
      }, PQ.x1 = function(QQ) {
        return arguments.length ? (wQ = null == QQ ? null : "function" === typeof QQ ? QQ : (0, dQ.e)(+QQ), PQ) : wQ
      }, PQ.y = function(QQ) {
        return arguments.length ? (WQ = "function" === typeof QQ ? QQ : (0, dQ.e)(+QQ), XQ = null, PQ) : WQ
      }, PQ.y0 = function(QQ) {
        return arguments.length ? (WQ = "function" === typeof QQ ? QQ : (0, dQ.e)(+QQ), PQ) : WQ
      }, PQ.y1 = function(QQ) {
        return arguments.length ? (XQ = null == QQ ? null : "function" === typeof QQ ? QQ : (0, dQ.e)(+QQ), PQ) : XQ
      }, PQ.lineX0 = PQ.lineY0 = function() {
        return gQ().x(QQ).y(WQ)
      }, PQ.lineY1 = function() {
        return gQ().x(QQ).y(XQ)
      }, PQ.lineX1 = function() {
        return gQ().x(wQ).y(WQ)
      }, PQ.defined = function(QQ) {
        return arguments.length ? (qQ = "function" === typeof QQ ? QQ : (0, dQ.e)(!!QQ), PQ) : qQ
      }, PQ.curve = function(QQ) {
        return arguments.length ? (zQ = QQ, null != TQ && (sQ = zQ(TQ)), PQ) : zQ
      }, PQ.context = function(QQ) {
        return arguments.length ? (null == QQ ? TQ = sQ = null : sQ = zQ(TQ = QQ), PQ) : TQ
      }, PQ
    }
    var cQ = XQ(6432),
      AQ = XQ.n(cQ),
      RQ = XQ(5622),
      EQ = XQ.n(RQ),
      CQ = XQ(5423),
      uQ = XQ(5800),
      LQ = XQ(5775),
      kQ = XQ(5520);

    function fQ(QQ) {
      return fQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, fQ(QQ)
    }

    function SQ() {
      return SQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var WQ = 1; WQ < arguments.length; WQ++) {
          var XQ = arguments[WQ];
          for (var wQ in XQ) Object.prototype.hasOwnProperty.call(XQ, wQ) && (QQ[wQ] = XQ[wQ])
        }
        return QQ
      }, SQ.apply(this, arguments)
    }

    function tQ(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function oQ(QQ) {
      for (var WQ = 1; WQ < arguments.length; WQ++) {
        var XQ = null != arguments[WQ] ? arguments[WQ] : {};
        WQ % 2 ? tQ(Object(XQ), !0).forEach((function(WQ) {
          eQ(QQ, WQ, XQ[WQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : tQ(Object(XQ)).forEach((function(WQ) {
          Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
        }))
      }
      return QQ
    }

    function eQ(QQ, WQ, XQ) {
      return (WQ = function(QQ) {
        var WQ = function(QQ, WQ) {
          if ("object" != fQ(QQ) || !QQ) return QQ;
          var XQ = QQ[Symbol.toPrimitive];
          if (void 0 !== XQ) {
            var wQ = XQ.call(QQ, WQ || "default");
            if ("object" != fQ(wQ)) return wQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == fQ(WQ) ? WQ : WQ + ""
      }(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }
    var nQ = {
        curveBasisClosed: function(QQ) {
          return new sQ(QQ)
        },
        curveBasisOpen: function(QQ) {
          return new FQ(QQ)
        },
        curveBasis: function(QQ) {
          return new zQ(QQ)
        },
        curveBumpX: function(QQ) {
          return new PQ(QQ, !0)
        },
        curveBumpY: function(QQ) {
          return new PQ(QQ, !1)
        },
        curveLinearClosed: function(QQ) {
          return new gQ(QQ)
        },
        curveLinear: rQ,
        curveMonotoneX: function(QQ) {
          return new VQ(QQ)
        },
        curveMonotoneY: function(QQ) {
          return new DQ(QQ)
        },
        curveNatural: function(QQ) {
          return new GQ(QQ)
        },
        curveStep: function(QQ) {
          return new bQ(QQ, .5)
        },
        curveStepAfter: function(QQ) {
          return new bQ(QQ, 1)
        },
        curveStepBefore: function(QQ) {
          return new bQ(QQ, 0)
        }
      },
      xQ = function(QQ) {
        return QQ.x === +QQ.x && QQ.y === +QQ.y
      },
      YQ = function(QQ) {
        return QQ.x
      },
      NQ = function(QQ) {
        return QQ.y
      },
      ZQ = function(QQ) {
        var WQ, XQ = QQ.type,
          wQ = void 0 === XQ ? "linear" : XQ,
          qQ = QQ.points,
          TQ = void 0 === qQ ? [] : qQ,
          zQ = QQ.baseLine,
          sQ = QQ.layout,
          FQ = QQ.connectNulls,
          PQ = void 0 !== FQ && FQ,
          gQ = function(QQ, WQ) {
            if (EQ()(QQ)) return QQ;
            var XQ = "curve".concat(AQ()(QQ));
            return "curveMonotone" !== XQ && "curveBump" !== XQ || !WQ ? nQ[XQ] || rQ : nQ["".concat(XQ).concat("vertical" === WQ ? "Y" : "X")]
          }(wQ, sQ),
          JQ = PQ ? TQ.filter((function(QQ) {
            return xQ(QQ)
          })) : TQ;
        if (Array.isArray(zQ)) {
          var IQ = PQ ? zQ.filter((function(QQ) {
              return xQ(QQ)
            })) : zQ,
            jQ = JQ.map((function(QQ, WQ) {
              return oQ(oQ({}, QQ), {}, {
                base: IQ[WQ]
              })
            }));
          return (WQ = "vertical" === sQ ? iQ().y(NQ).x1(YQ).x0((function(QQ) {
            return QQ.base.x
          })) : iQ().x(YQ).y1(NQ).y0((function(QQ) {
            return QQ.base.y
          }))).defined(xQ).curve(gQ), WQ(jQ)
        }
        return (WQ = "vertical" === sQ && (0, kQ.D)(zQ) ? iQ().y(NQ).x1(YQ).x0(zQ) : (0, kQ.D)(zQ) ? iQ().x(YQ).y1(NQ).y0(zQ) : hQ().x(YQ).y(NQ)).defined(xQ).curve(gQ), WQ(JQ)
      },
      OQ = function(QQ) {
        var WQ = QQ.className,
          XQ = QQ.points,
          qQ = QQ.path,
          TQ = QQ.pathRef;
        if ((!XQ || !XQ.length) && !qQ) return null;
        var zQ = XQ && XQ.length ? ZQ(QQ) : qQ;
        return wQ.createElement("path", SQ({}, (0, LQ.e)(QQ, !1), (0, uQ.k)(QQ), {
          className: (0, CQ.e)("recharts-curve", WQ),
          d: zQ,
          ref: TQ
        }))
      }
  },
  6496: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => FQ
    });
    var wQ = XQ(61),
      qQ = XQ(5423),
      TQ = XQ(5800),
      zQ = XQ(5775);

    function sQ() {
      return sQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var WQ = 1; WQ < arguments.length; WQ++) {
          var XQ = arguments[WQ];
          for (var wQ in XQ) Object.prototype.hasOwnProperty.call(XQ, wQ) && (QQ[wQ] = XQ[wQ])
        }
        return QQ
      }, sQ.apply(this, arguments)
    }
    var FQ = function(QQ) {
      var WQ = QQ.cx,
        XQ = QQ.cy,
        FQ = QQ.r,
        PQ = QQ.className,
        gQ = (0, qQ.e)("recharts-dot", PQ);
      return WQ === +WQ && XQ === +XQ && FQ === +FQ ? wQ.createElement("circle", sQ({}, (0, zQ.e)(QQ, !1), (0, TQ.k)(QQ), {
        className: gQ,
        cx: WQ,
        cy: XQ,
        r: FQ
      })) : null
    }
  },
  6505: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => VQ,
      f: () => BQ
    });
    var wQ = XQ(61),
      qQ = XQ(5423),
      TQ = XQ(6513),
      zQ = XQ(5775);

    function sQ(QQ) {
      return sQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, sQ(QQ)
    }

    function FQ() {
      return FQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var WQ = 1; WQ < arguments.length; WQ++) {
          var XQ = arguments[WQ];
          for (var wQ in XQ) Object.prototype.hasOwnProperty.call(XQ, wQ) && (QQ[wQ] = XQ[wQ])
        }
        return QQ
      }, FQ.apply(this, arguments)
    }

    function PQ(QQ, WQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return QQ
      }(QQ) || function(QQ, WQ) {
        var XQ = null == QQ ? null : "undefined" != typeof Symbol && QQ[Symbol.iterator] || QQ["@@iterator"];
        if (null != XQ) {
          var wQ, qQ, TQ, zQ, sQ = [],
            FQ = !0,
            PQ = !1;
          try {
            if (TQ = (XQ = XQ.call(QQ)).next, 0 === WQ) {
              if (Object(XQ) !== XQ) return;
              FQ = !1
            } else
              for (; !(FQ = (wQ = TQ.call(XQ)).done) && (sQ.push(wQ.value), sQ.length !== WQ); FQ = !0);
          } catch (QQ) {
            PQ = !0, qQ = QQ
          } finally {
            try {
              if (!FQ && null != XQ.return && (zQ = XQ.return(), Object(zQ) !== zQ)) return
            } finally {
              if (PQ) throw qQ
            }
          }
          return sQ
        }
      }(QQ, WQ) || function(QQ, WQ) {
        if (!QQ) return;
        if ("string" === typeof QQ) return gQ(QQ, WQ);
        var XQ = Object.prototype.toString.call(QQ).slice(8, -1);
        "Object" === XQ && QQ.constructor && (XQ = QQ.constructor.name);
        if ("Map" === XQ || "Set" === XQ) return Array.from(QQ);
        if ("Arguments" === XQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(XQ)) return gQ(QQ, WQ)
      }(QQ, WQ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function gQ(QQ, WQ) {
      (null == WQ || WQ > QQ.length) && (WQ = QQ.length);
      for (var XQ = 0, wQ = new Array(WQ); XQ < WQ; XQ++) wQ[XQ] = QQ[XQ];
      return wQ
    }

    function JQ(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function rQ(QQ) {
      for (var WQ = 1; WQ < arguments.length; WQ++) {
        var XQ = null != arguments[WQ] ? arguments[WQ] : {};
        WQ % 2 ? JQ(Object(XQ), !0).forEach((function(WQ) {
          IQ(QQ, WQ, XQ[WQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : JQ(Object(XQ)).forEach((function(WQ) {
          Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
        }))
      }
      return QQ
    }

    function IQ(QQ, WQ, XQ) {
      return (WQ = function(QQ) {
        var WQ = function(QQ, WQ) {
          if ("object" != sQ(QQ) || !QQ) return QQ;
          var XQ = QQ[Symbol.toPrimitive];
          if (void 0 !== XQ) {
            var wQ = XQ.call(QQ, WQ || "default");
            if ("object" != sQ(wQ)) return wQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == sQ(WQ) ? WQ : WQ + ""
      }(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }
    var jQ = function(QQ, WQ, XQ, wQ, qQ) {
        var TQ, zQ = Math.min(Math.abs(XQ) / 2, Math.abs(wQ) / 2),
          sQ = wQ >= 0 ? 1 : -1,
          FQ = XQ >= 0 ? 1 : -1,
          PQ = wQ >= 0 && XQ >= 0 || wQ < 0 && XQ < 0 ? 1 : 0;
        if (zQ > 0 && qQ instanceof Array) {
          for (var gQ = [0, 0, 0, 0], JQ = 0; JQ < 4; JQ++) gQ[JQ] = qQ[JQ] > zQ ? zQ : qQ[JQ];
          TQ = "M".concat(QQ, ",").concat(WQ + sQ * gQ[0]), gQ[0] > 0 && (TQ += "A ".concat(gQ[0], ",").concat(gQ[0], ",0,0,").concat(PQ, ",").concat(QQ + FQ * gQ[0], ",").concat(WQ)), TQ += "L ".concat(QQ + XQ - FQ * gQ[1], ",").concat(WQ), gQ[1] > 0 && (TQ += "A ".concat(gQ[1], ",").concat(gQ[1], ",0,0,").concat(PQ, ",\n        ").concat(QQ + XQ, ",").concat(WQ + sQ * gQ[1])), TQ += "L ".concat(QQ + XQ, ",").concat(WQ + wQ - sQ * gQ[2]), gQ[2] > 0 && (TQ += "A ".concat(gQ[2], ",").concat(gQ[2], ",0,0,").concat(PQ, ",\n        ").concat(QQ + XQ - FQ * gQ[2], ",").concat(WQ + wQ)), TQ += "L ".concat(QQ + FQ * gQ[3], ",").concat(WQ + wQ), gQ[3] > 0 && (TQ += "A ".concat(gQ[3], ",").concat(gQ[3], ",0,0,").concat(PQ, ",\n        ").concat(QQ, ",").concat(WQ + wQ - sQ * gQ[3])), TQ += "Z"
        } else if (zQ > 0 && qQ === +qQ && qQ > 0) {
          var rQ = Math.min(zQ, qQ);
          TQ = "M ".concat(QQ, ",").concat(WQ + sQ * rQ, "\n            A ").concat(rQ, ",").concat(rQ, ",0,0,").concat(PQ, ",").concat(QQ + FQ * rQ, ",").concat(WQ, "\n            L ").concat(QQ + XQ - FQ * rQ, ",").concat(WQ, "\n            A ").concat(rQ, ",").concat(rQ, ",0,0,").concat(PQ, ",").concat(QQ + XQ, ",").concat(WQ + sQ * rQ, "\n            L ").concat(QQ + XQ, ",").concat(WQ + wQ - sQ * rQ, "\n            A ").concat(rQ, ",").concat(rQ, ",0,0,").concat(PQ, ",").concat(QQ + XQ - FQ * rQ, ",").concat(WQ + wQ, "\n            L ").concat(QQ + FQ * rQ, ",").concat(WQ + wQ, "\n            A ").concat(rQ, ",").concat(rQ, ",0,0,").concat(PQ, ",").concat(QQ, ",").concat(WQ + wQ - sQ * rQ, " Z")
        } else TQ = "M ".concat(QQ, ",").concat(WQ, " h ").concat(XQ, " v ").concat(wQ, " h ").concat(-XQ, " Z");
        return TQ
      },
      BQ = function(QQ, WQ) {
        if (!QQ || !WQ) return !1;
        var XQ = QQ.x,
          wQ = QQ.y,
          qQ = WQ.x,
          TQ = WQ.y,
          zQ = WQ.width,
          sQ = WQ.height;
        if (Math.abs(zQ) > 0 && Math.abs(sQ) > 0) {
          var FQ = Math.min(qQ, qQ + zQ),
            PQ = Math.max(qQ, qQ + zQ),
            gQ = Math.min(TQ, TQ + sQ),
            JQ = Math.max(TQ, TQ + sQ);
          return XQ >= FQ && XQ <= PQ && wQ >= gQ && wQ <= JQ
        }
        return !1
      },
      yQ = {
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
      VQ = function(QQ) {
        var WQ = rQ(rQ({}, yQ), QQ),
          XQ = (0, wQ.useRef)(),
          sQ = PQ((0, wQ.useState)(-1), 2),
          gQ = sQ[0],
          JQ = sQ[1];
        (0, wQ.useEffect)((function() {
          if (XQ.current && XQ.current.getTotalLength) try {
            var QQ = XQ.current.getTotalLength();
            QQ && JQ(QQ)
          } catch (WQ) {}
        }), []);
        var IQ = WQ.x,
          BQ = WQ.y,
          VQ = WQ.width,
          DQ = WQ.height,
          pQ = WQ.radius,
          GQ = WQ.className,
          UQ = WQ.animationEasing,
          bQ = WQ.animationDuration,
          vQ = WQ.animationBegin,
          dQ = WQ.isAnimationActive,
          HQ = WQ.isUpdateAnimationActive;
        if (IQ !== +IQ || BQ !== +BQ || VQ !== +VQ || DQ !== +DQ || 0 === VQ || 0 === DQ) return null;
        var aQ = (0, qQ.e)("recharts-rectangle", GQ);
        return HQ ? wQ.createElement(TQ.c, {
          canBegin: gQ > 0,
          from: {
            width: VQ,
            height: DQ,
            x: IQ,
            y: BQ
          },
          to: {
            width: VQ,
            height: DQ,
            x: IQ,
            y: BQ
          },
          duration: bQ,
          animationEasing: UQ,
          isActive: HQ
        }, (function(QQ) {
          var qQ = QQ.width,
            sQ = QQ.height,
            PQ = QQ.x,
            JQ = QQ.y;
          return wQ.createElement(TQ.c, {
            canBegin: gQ > 0,
            from: "0px ".concat(-1 === gQ ? 1 : gQ, "px"),
            to: "".concat(gQ, "px 0px"),
            attributeName: "strokeDasharray",
            gI: vQ,
            duration: bQ,
            isActive: dQ,
            easing: UQ
          }, wQ.createElement("path", FQ({}, (0, zQ.e)(WQ, !0), {
            className: aQ,
            d: jQ(PQ, JQ, qQ, sQ, pQ),
            ref: XQ
          })))
        })) : wQ.createElement("path", FQ({}, (0, zQ.e)(WQ, !0), {
          className: aQ,
          d: jQ(IQ, BQ, VQ, DQ, pQ)
        }))
      }
  },
  6705: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => yQ
    });
    var wQ = XQ(61),
      qQ = XQ(5423),
      TQ = XQ(5775),
      zQ = XQ(6619),
      sQ = XQ(5520);

    function FQ(QQ) {
      return FQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, FQ(QQ)
    }

    function PQ() {
      return PQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var WQ = 1; WQ < arguments.length; WQ++) {
          var XQ = arguments[WQ];
          for (var wQ in XQ) Object.prototype.hasOwnProperty.call(XQ, wQ) && (QQ[wQ] = XQ[wQ])
        }
        return QQ
      }, PQ.apply(this, arguments)
    }

    function gQ(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function JQ(QQ) {
      for (var WQ = 1; WQ < arguments.length; WQ++) {
        var XQ = null != arguments[WQ] ? arguments[WQ] : {};
        WQ % 2 ? gQ(Object(XQ), !0).forEach((function(WQ) {
          rQ(QQ, WQ, XQ[WQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : gQ(Object(XQ)).forEach((function(WQ) {
          Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
        }))
      }
      return QQ
    }

    function rQ(QQ, WQ, XQ) {
      return (WQ = function(QQ) {
        var WQ = function(QQ, WQ) {
          if ("object" != FQ(QQ) || !QQ) return QQ;
          var XQ = QQ[Symbol.toPrimitive];
          if (void 0 !== XQ) {
            var wQ = XQ.call(QQ, WQ || "default");
            if ("object" != FQ(wQ)) return wQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == FQ(WQ) ? WQ : WQ + ""
      }(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }
    var IQ = function(QQ) {
        var WQ = QQ.cx,
          XQ = QQ.cy,
          wQ = QQ.radius,
          qQ = QQ.angle,
          TQ = QQ.sign,
          sQ = QQ.isExternal,
          FQ = QQ.cornerRadius,
          PQ = QQ.cornerIsExternal,
          gQ = FQ * (sQ ? 1 : -1) + wQ,
          JQ = Math.asin(FQ / gQ) / zQ.c,
          rQ = PQ ? qQ : qQ + TQ * JQ,
          IQ = PQ ? qQ - TQ * JQ : qQ;
        return {
          center: (0, zQ.e)(WQ, XQ, gQ, rQ),
          circleTangency: (0, zQ.e)(WQ, XQ, wQ, rQ),
          lineTangency: (0, zQ.e)(WQ, XQ, gQ * Math.cos(JQ * zQ.c), IQ),
          eB: JQ
        }
      },
      jQ = function(QQ) {
        var WQ = QQ.cx,
          XQ = QQ.cy,
          wQ = QQ.innerRadius,
          qQ = QQ.outerRadius,
          TQ = QQ.startAngle,
          FQ = function(QQ, WQ) {
            return (0, sQ.H)(WQ - QQ) * Math.min(Math.abs(WQ - QQ), 359.999)
          }(TQ, QQ.endAngle),
          PQ = TQ + FQ,
          gQ = (0, zQ.e)(WQ, XQ, qQ, TQ),
          JQ = (0, zQ.e)(WQ, XQ, qQ, PQ),
          rQ = "M ".concat(gQ.x, ",").concat(gQ.y, "\n    A ").concat(qQ, ",").concat(qQ, ",0,\n    ").concat(+(Math.abs(FQ) > 180), ",").concat(+(TQ > PQ), ",\n    ").concat(JQ.x, ",").concat(JQ.y, "\n  ");
        if (wQ > 0) {
          var IQ = (0, zQ.e)(WQ, XQ, wQ, TQ),
            jQ = (0, zQ.e)(WQ, XQ, wQ, PQ);
          rQ += "L ".concat(jQ.x, ",").concat(jQ.y, "\n            A ").concat(wQ, ",").concat(wQ, ",0,\n            ").concat(+(Math.abs(FQ) > 180), ",").concat(+(TQ <= PQ), ",\n            ").concat(IQ.x, ",").concat(IQ.y, " Z")
        } else rQ += "L ".concat(WQ, ",").concat(XQ, " Z");
        return rQ
      },
      BQ = {
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
      yQ = function(QQ) {
        var WQ = JQ(JQ({}, BQ), QQ),
          XQ = WQ.cx,
          zQ = WQ.cy,
          FQ = WQ.innerRadius,
          gQ = WQ.outerRadius,
          rQ = WQ.cornerRadius,
          yQ = WQ.forceCornerRadius,
          VQ = WQ.cornerIsExternal,
          DQ = WQ.startAngle,
          pQ = WQ.endAngle,
          GQ = WQ.className;
        if (gQ < FQ || DQ === pQ) return null;
        var UQ, bQ = (0, qQ.e)("recharts-sector", GQ),
          vQ = gQ - FQ,
          dQ = (0, sQ.o)(rQ, vQ, 0, !0);
        return UQ = dQ > 0 && Math.abs(DQ - pQ) < 360 ? function(QQ) {
          var WQ = QQ.cx,
            XQ = QQ.cy,
            wQ = QQ.innerRadius,
            qQ = QQ.outerRadius,
            TQ = QQ.cornerRadius,
            zQ = QQ.forceCornerRadius,
            FQ = QQ.cornerIsExternal,
            PQ = QQ.startAngle,
            gQ = QQ.endAngle,
            JQ = (0, sQ.H)(gQ - PQ),
            rQ = IQ({
              cx: WQ,
              cy: XQ,
              radius: qQ,
              angle: PQ,
              sign: JQ,
              cornerRadius: TQ,
              cornerIsExternal: FQ
            }),
            BQ = rQ.circleTangency,
            yQ = rQ.lineTangency,
            VQ = rQ.eB,
            DQ = IQ({
              cx: WQ,
              cy: XQ,
              radius: qQ,
              angle: gQ,
              sign: -JQ,
              cornerRadius: TQ,
              cornerIsExternal: FQ
            }),
            pQ = DQ.circleTangency,
            GQ = DQ.lineTangency,
            UQ = DQ.eB,
            bQ = FQ ? Math.abs(PQ - gQ) : Math.abs(PQ - gQ) - VQ - UQ;
          if (bQ < 0) return zQ ? "M ".concat(yQ.x, ",").concat(yQ.y, "\n        a").concat(TQ, ",").concat(TQ, ",0,0,1,").concat(2 * TQ, ",0\n        a").concat(TQ, ",").concat(TQ, ",0,0,1,").concat(2 * -TQ, ",0\n      ") : jQ({
            cx: WQ,
            cy: XQ,
            innerRadius: wQ,
            outerRadius: qQ,
            startAngle: PQ,
            endAngle: gQ
          });
          var vQ = "M ".concat(yQ.x, ",").concat(yQ.y, "\n    A").concat(TQ, ",").concat(TQ, ",0,0,").concat(+(JQ < 0), ",").concat(BQ.x, ",").concat(BQ.y, "\n    A").concat(qQ, ",").concat(qQ, ",0,").concat(+(bQ > 180), ",").concat(+(JQ < 0), ",").concat(pQ.x, ",").concat(pQ.y, "\n    A").concat(TQ, ",").concat(TQ, ",0,0,").concat(+(JQ < 0), ",").concat(GQ.x, ",").concat(GQ.y, "\n  ");
          if (wQ > 0) {
            var dQ = IQ({
                cx: WQ,
                cy: XQ,
                radius: wQ,
                angle: PQ,
                sign: JQ,
                isExternal: !0,
                cornerRadius: TQ,
                cornerIsExternal: FQ
              }),
              HQ = dQ.circleTangency,
              aQ = dQ.lineTangency,
              lQ = dQ.eB,
              hQ = IQ({
                cx: WQ,
                cy: XQ,
                radius: wQ,
                angle: gQ,
                sign: -JQ,
                isExternal: !0,
                cornerRadius: TQ,
                cornerIsExternal: FQ
              }),
              iQ = hQ.circleTangency,
              cQ = hQ.lineTangency,
              AQ = hQ.eB,
              RQ = FQ ? Math.abs(PQ - gQ) : Math.abs(PQ - gQ) - lQ - AQ;
            if (RQ < 0 && 0 === TQ) return "".concat(vQ, "L").concat(WQ, ",").concat(XQ, "Z");
            vQ += "L".concat(cQ.x, ",").concat(cQ.y, "\n      A").concat(TQ, ",").concat(TQ, ",0,0,").concat(+(JQ < 0), ",").concat(iQ.x, ",").concat(iQ.y, "\n      A").concat(wQ, ",").concat(wQ, ",0,").concat(+(RQ > 180), ",").concat(+(JQ > 0), ",").concat(HQ.x, ",").concat(HQ.y, "\n      A").concat(TQ, ",").concat(TQ, ",0,0,").concat(+(JQ < 0), ",").concat(aQ.x, ",").concat(aQ.y, "Z")
          } else vQ += "L".concat(WQ, ",").concat(XQ, "Z");
          return vQ
        }({
          cx: XQ,
          cy: zQ,
          innerRadius: FQ,
          outerRadius: gQ,
          cornerRadius: Math.min(dQ, vQ / 2),
          forceCornerRadius: yQ,
          cornerIsExternal: VQ,
          startAngle: DQ,
          endAngle: pQ
        }) : jQ({
          cx: XQ,
          cy: zQ,
          innerRadius: FQ,
          outerRadius: gQ,
          startAngle: DQ,
          endAngle: pQ
        }), wQ.createElement("path", PQ({}, (0, TQ.e)(WQ, !0), {
          className: bQ,
          d: UQ,
          role: "img"
        }))
      }
  },
  6430: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => oQ
    });
    var wQ = XQ(61),
      qQ = XQ(6432),
      TQ = XQ.n(qQ);
    Math.abs, Math.atan2;
    const zQ = Math.cos,
      sQ = (Math.max, Math.min, Math.sin),
      FQ = Math.sqrt,
      PQ = Math.PI,
      gQ = 2 * PQ;
    const JQ = {
        draw(QQ, WQ) {
          const XQ = FQ(WQ / PQ);
          QQ.moveTo(XQ, 0), QQ.arc(0, 0, XQ, 0, gQ)
        }
      },
      rQ = {
        draw(QQ, WQ) {
          const XQ = FQ(WQ / 5) / 2;
          QQ.moveTo(-3 * XQ, -XQ), QQ.lineTo(-XQ, -XQ), QQ.lineTo(-XQ, -3 * XQ), QQ.lineTo(XQ, -3 * XQ), QQ.lineTo(XQ, -XQ), QQ.lineTo(3 * XQ, -XQ), QQ.lineTo(3 * XQ, XQ), QQ.lineTo(XQ, XQ), QQ.lineTo(XQ, 3 * XQ), QQ.lineTo(-XQ, 3 * XQ), QQ.lineTo(-XQ, XQ), QQ.lineTo(-3 * XQ, XQ), QQ.closePath()
        }
      },
      IQ = FQ(1 / 3),
      jQ = 2 * IQ,
      BQ = {
        draw(QQ, WQ) {
          const XQ = FQ(WQ / jQ),
            wQ = XQ * IQ;
          QQ.moveTo(0, -XQ), QQ.lineTo(wQ, 0), QQ.lineTo(0, XQ), QQ.lineTo(-wQ, 0), QQ.closePath()
        }
      },
      yQ = {
        draw(QQ, WQ) {
          const XQ = FQ(WQ),
            wQ = -XQ / 2;
          QQ.rect(wQ, wQ, XQ, XQ)
        }
      },
      VQ = sQ(PQ / 10) / sQ(7 * PQ / 10),
      DQ = sQ(gQ / 10) * VQ,
      pQ = -zQ(gQ / 10) * VQ,
      GQ = {
        draw(QQ, WQ) {
          const XQ = FQ(.8908130915292852 * WQ),
            wQ = DQ * XQ,
            qQ = pQ * XQ;
          QQ.moveTo(0, -XQ), QQ.lineTo(wQ, qQ);
          for (let TQ = 1; TQ < 5; ++TQ) {
            const WQ = gQ * TQ / 5,
              FQ = zQ(WQ),
              PQ = sQ(WQ);
            QQ.lineTo(PQ * XQ, -FQ * XQ), QQ.lineTo(FQ * wQ - PQ * qQ, PQ * wQ + FQ * qQ)
          }
          QQ.closePath()
        }
      },
      UQ = FQ(3),
      bQ = {
        draw(QQ, WQ) {
          const XQ = -FQ(WQ / (3 * UQ));
          QQ.moveTo(0, 2 * XQ), QQ.lineTo(-UQ * XQ, -XQ), QQ.lineTo(UQ * XQ, -XQ), QQ.closePath()
        }
      },
      vQ = -.5,
      dQ = FQ(3) / 2,
      HQ = 1 / FQ(12),
      aQ = 3 * (HQ / 2 + 1),
      lQ = {
        draw(QQ, WQ) {
          const XQ = FQ(WQ / aQ),
            wQ = XQ / 2,
            qQ = XQ * HQ,
            TQ = wQ,
            zQ = XQ * HQ + XQ,
            sQ = -TQ,
            PQ = zQ;
          QQ.moveTo(wQ, qQ), QQ.lineTo(TQ, zQ), QQ.lineTo(sQ, PQ), QQ.lineTo(vQ * wQ - dQ * qQ, dQ * wQ + vQ * qQ), QQ.lineTo(vQ * TQ - dQ * zQ, dQ * TQ + vQ * zQ), QQ.lineTo(vQ * sQ - dQ * PQ, dQ * sQ + vQ * PQ), QQ.lineTo(vQ * wQ + dQ * qQ, vQ * qQ - dQ * wQ), QQ.lineTo(vQ * TQ + dQ * zQ, vQ * zQ - dQ * TQ), QQ.lineTo(vQ * sQ + dQ * PQ, vQ * PQ - dQ * sQ), QQ.closePath()
        }
      };
    var hQ = XQ(6484),
      iQ = XQ(6491);
    FQ(3), FQ(3);
    var cQ = XQ(5423),
      AQ = XQ(5775);

    function RQ(QQ) {
      return RQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, RQ(QQ)
    }
    var EQ = ["type", "size", "sizeType"];

    function CQ() {
      return CQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var WQ = 1; WQ < arguments.length; WQ++) {
          var XQ = arguments[WQ];
          for (var wQ in XQ) Object.prototype.hasOwnProperty.call(XQ, wQ) && (QQ[wQ] = XQ[wQ])
        }
        return QQ
      }, CQ.apply(this, arguments)
    }

    function uQ(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function LQ(QQ) {
      for (var WQ = 1; WQ < arguments.length; WQ++) {
        var XQ = null != arguments[WQ] ? arguments[WQ] : {};
        WQ % 2 ? uQ(Object(XQ), !0).forEach((function(WQ) {
          kQ(QQ, WQ, XQ[WQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : uQ(Object(XQ)).forEach((function(WQ) {
          Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
        }))
      }
      return QQ
    }

    function kQ(QQ, WQ, XQ) {
      return (WQ = function(QQ) {
        var WQ = function(QQ, WQ) {
          if ("object" != RQ(QQ) || !QQ) return QQ;
          var XQ = QQ[Symbol.toPrimitive];
          if (void 0 !== XQ) {
            var wQ = XQ.call(QQ, WQ || "default");
            if ("object" != RQ(wQ)) return wQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == RQ(WQ) ? WQ : WQ + ""
      }(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }

    function fQ(QQ, WQ) {
      if (null == QQ) return {};
      var XQ, wQ, qQ = function(QQ, WQ) {
        if (null == QQ) return {};
        var XQ = {};
        for (var wQ in QQ)
          if (Object.prototype.hasOwnProperty.call(QQ, wQ)) {
            if (WQ.indexOf(wQ) >= 0) continue;
            XQ[wQ] = QQ[wQ]
          } return XQ
      }(QQ, WQ);
      if (Object.getOwnPropertySymbols) {
        var TQ = Object.getOwnPropertySymbols(QQ);
        for (wQ = 0; wQ < TQ.length; wQ++) XQ = TQ[wQ], WQ.indexOf(XQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, XQ) && (qQ[XQ] = QQ[XQ])
      }
      return qQ
    }
    var SQ = {
        symbolCircle: JQ,
        symbolCross: rQ,
        symbolDiamond: BQ,
        symbolSquare: yQ,
        symbolStar: GQ,
        symbolTriangle: bQ,
        symbolWye: lQ
      },
      tQ = Math.PI / 180,
      oQ = function(QQ) {
        var WQ = QQ.type,
          XQ = void 0 === WQ ? "circle" : WQ,
          qQ = QQ.size,
          zQ = void 0 === qQ ? 64 : qQ,
          sQ = QQ.sizeType,
          FQ = void 0 === sQ ? "area" : sQ,
          PQ = LQ(LQ({}, fQ(QQ, EQ)), {}, {
            type: XQ,
            size: zQ,
            sizeType: FQ
          }),
          gQ = PQ.className,
          rQ = PQ.cx,
          IQ = PQ.cy,
          jQ = (0, AQ.e)(PQ, !0);
        return rQ === +rQ && IQ === +IQ && zQ === +zQ ? wQ.createElement("path", CQ({}, jQ, {
          className: (0, cQ.e)("recharts-symbols", gQ),
          transform: "translate(".concat(rQ, ", ").concat(IQ, ")"),
          d: function() {
            var QQ = function(QQ) {
                var WQ = "symbol".concat(TQ()(QQ));
                return SQ[WQ] || JQ
              }(XQ),
              WQ = function(QQ, WQ) {
                let XQ = null,
                  wQ = (0, iQ.e)(qQ);

                function qQ() {
                  let qQ;
                  if (XQ || (XQ = qQ = wQ()), QQ.apply(this, arguments).draw(XQ, +WQ.apply(this, arguments)), qQ) return XQ = null, qQ + "" || null
                }
                return QQ = "function" === typeof QQ ? QQ : (0, hQ.e)(QQ || JQ), WQ = "function" === typeof WQ ? WQ : (0, hQ.e)(void 0 === WQ ? 64 : +WQ), qQ.type = function(WQ) {
                  return arguments.length ? (QQ = "function" === typeof WQ ? WQ : (0, hQ.e)(WQ), qQ) : QQ
                }, qQ.size = function(QQ) {
                  return arguments.length ? (WQ = "function" === typeof QQ ? QQ : (0, hQ.e)(+QQ), qQ) : WQ
                }, qQ.context = function(QQ) {
                  return arguments.length ? (XQ = null == QQ ? null : QQ, qQ) : XQ
                }, qQ
              }().type(QQ).size(function(QQ, WQ, XQ) {
                if ("area" === WQ) return QQ;
                switch (XQ) {
                  case "cross":
                    return 5 * QQ * QQ / 9;
                  case "diamond":
                    return .5 * QQ * QQ / Math.sqrt(3);
                  case "square":
                    return QQ * QQ;
                  case "star":
                    var wQ = 18 * tQ;
                    return 1.25 * QQ * QQ * (Math.tan(wQ) - Math.tan(2 * wQ) * Math.pow(Math.tan(wQ), 2));
                  case "triangle":
                    return Math.sqrt(3) * QQ * QQ / 4;
                  case "wye":
                    return (21 - 10 * Math.sqrt(3)) * QQ * QQ / 8;
                  default:
                    return Math.PI * QQ * QQ / 4
                }
              }(zQ, FQ, XQ));
            return WQ()
          }()
        })) : null
      };
    oQ.registerSymbol = function(QQ, WQ) {
      SQ["symbol".concat(TQ()(QQ))] = WQ
    }
  },
  6688: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => kQ,
      g: () => xQ,
      k: () => fQ,
      o: () => SQ,
      q: () => tQ
    });
    var wQ = XQ(61),
      qQ = XQ(5622),
      TQ = XQ.n(qQ),
      zQ = XQ(6696),
      sQ = XQ.n(zQ),
      FQ = XQ(6703),
      PQ = XQ.n(FQ),
      gQ = XQ(6590),
      JQ = XQ.n(gQ),
      rQ = XQ(6505),
      IQ = XQ(5423),
      jQ = XQ(6513),
      BQ = XQ(5775);

    function yQ(QQ) {
      return yQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, yQ(QQ)
    }

    function VQ() {
      return VQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var WQ = 1; WQ < arguments.length; WQ++) {
          var XQ = arguments[WQ];
          for (var wQ in XQ) Object.prototype.hasOwnProperty.call(XQ, wQ) && (QQ[wQ] = XQ[wQ])
        }
        return QQ
      }, VQ.apply(this, arguments)
    }

    function DQ(QQ, WQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return QQ
      }(QQ) || function(QQ, WQ) {
        var XQ = null == QQ ? null : "undefined" != typeof Symbol && QQ[Symbol.iterator] || QQ["@@iterator"];
        if (null != XQ) {
          var wQ, qQ, TQ, zQ, sQ = [],
            FQ = !0,
            PQ = !1;
          try {
            if (TQ = (XQ = XQ.call(QQ)).next, 0 === WQ) {
              if (Object(XQ) !== XQ) return;
              FQ = !1
            } else
              for (; !(FQ = (wQ = TQ.call(XQ)).done) && (sQ.push(wQ.value), sQ.length !== WQ); FQ = !0);
          } catch (QQ) {
            PQ = !0, qQ = QQ
          } finally {
            try {
              if (!FQ && null != XQ.return && (zQ = XQ.return(), Object(zQ) !== zQ)) return
            } finally {
              if (PQ) throw qQ
            }
          }
          return sQ
        }
      }(QQ, WQ) || function(QQ, WQ) {
        if (!QQ) return;
        if ("string" === typeof QQ) return pQ(QQ, WQ);
        var XQ = Object.prototype.toString.call(QQ).slice(8, -1);
        "Object" === XQ && QQ.constructor && (XQ = QQ.constructor.name);
        if ("Map" === XQ || "Set" === XQ) return Array.from(QQ);
        if ("Arguments" === XQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(XQ)) return pQ(QQ, WQ)
      }(QQ, WQ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function pQ(QQ, WQ) {
      (null == WQ || WQ > QQ.length) && (WQ = QQ.length);
      for (var XQ = 0, wQ = new Array(WQ); XQ < WQ; XQ++) wQ[XQ] = QQ[XQ];
      return wQ
    }

    function GQ(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function UQ(QQ) {
      for (var WQ = 1; WQ < arguments.length; WQ++) {
        var XQ = null != arguments[WQ] ? arguments[WQ] : {};
        WQ % 2 ? GQ(Object(XQ), !0).forEach((function(WQ) {
          bQ(QQ, WQ, XQ[WQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : GQ(Object(XQ)).forEach((function(WQ) {
          Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
        }))
      }
      return QQ
    }

    function bQ(QQ, WQ, XQ) {
      return (WQ = function(QQ) {
        var WQ = function(QQ, WQ) {
          if ("object" != yQ(QQ) || !QQ) return QQ;
          var XQ = QQ[Symbol.toPrimitive];
          if (void 0 !== XQ) {
            var wQ = XQ.call(QQ, WQ || "default");
            if ("object" != yQ(wQ)) return wQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == yQ(WQ) ? WQ : WQ + ""
      }(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }
    var vQ = function(QQ, WQ, XQ, wQ, qQ) {
        var TQ, zQ = XQ - wQ;
        return TQ = "M ".concat(QQ, ",").concat(WQ), TQ += "L ".concat(QQ + XQ, ",").concat(WQ), TQ += "L ".concat(QQ + XQ - zQ / 2, ",").concat(WQ + qQ), TQ += "L ".concat(QQ + XQ - zQ / 2 - wQ, ",").concat(WQ + qQ), TQ += "L ".concat(QQ, ",").concat(WQ, " Z")
      },
      dQ = {
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
      HQ = function(QQ) {
        var WQ = UQ(UQ({}, dQ), QQ),
          XQ = (0, wQ.useRef)(),
          qQ = DQ((0, wQ.useState)(-1), 2),
          TQ = qQ[0],
          zQ = qQ[1];
        (0, wQ.useEffect)((function() {
          if (XQ.current && XQ.current.getTotalLength) try {
            var QQ = XQ.current.getTotalLength();
            QQ && zQ(QQ)
          } catch (WQ) {}
        }), []);
        var sQ = WQ.x,
          FQ = WQ.y,
          PQ = WQ.upperWidth,
          gQ = WQ.lowerWidth,
          JQ = WQ.height,
          rQ = WQ.className,
          yQ = WQ.animationEasing,
          pQ = WQ.animationDuration,
          GQ = WQ.animationBegin,
          bQ = WQ.isUpdateAnimationActive;
        if (sQ !== +sQ || FQ !== +FQ || PQ !== +PQ || gQ !== +gQ || JQ !== +JQ || 0 === PQ && 0 === gQ || 0 === JQ) return null;
        var HQ = (0, IQ.e)("recharts-trapezoid", rQ);
        return bQ ? wQ.createElement(jQ.c, {
          canBegin: TQ > 0,
          from: {
            upperWidth: 0,
            lowerWidth: 0,
            height: JQ,
            x: sQ,
            y: FQ
          },
          to: {
            upperWidth: PQ,
            lowerWidth: gQ,
            height: JQ,
            x: sQ,
            y: FQ
          },
          duration: pQ,
          animationEasing: yQ,
          isActive: bQ
        }, (function(QQ) {
          var qQ = QQ.upperWidth,
            zQ = QQ.lowerWidth,
            sQ = QQ.height,
            FQ = QQ.x,
            PQ = QQ.y;
          return wQ.createElement(jQ.c, {
            canBegin: TQ > 0,
            from: "0px ".concat(-1 === TQ ? 1 : TQ, "px"),
            to: "".concat(TQ, "px 0px"),
            attributeName: "strokeDasharray",
            gI: GQ,
            duration: pQ,
            easing: yQ
          }, wQ.createElement("path", VQ({}, (0, BQ.e)(WQ, !0), {
            className: HQ,
            d: vQ(FQ, PQ, qQ, zQ, sQ),
            ref: XQ
          })))
        })) : wQ.createElement("g", null, wQ.createElement("path", VQ({}, (0, BQ.e)(WQ, !0), {
          className: HQ,
          d: vQ(sQ, FQ, PQ, gQ, JQ)
        })))
      },
      aQ = XQ(6705),
      lQ = XQ(6339),
      hQ = XQ(6430),
      iQ = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];

    function cQ(QQ) {
      return cQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, cQ(QQ)
    }

    function AQ(QQ, WQ) {
      if (null == QQ) return {};
      var XQ, wQ, qQ = function(QQ, WQ) {
        if (null == QQ) return {};
        var XQ = {};
        for (var wQ in QQ)
          if (Object.prototype.hasOwnProperty.call(QQ, wQ)) {
            if (WQ.indexOf(wQ) >= 0) continue;
            XQ[wQ] = QQ[wQ]
          } return XQ
      }(QQ, WQ);
      if (Object.getOwnPropertySymbols) {
        var TQ = Object.getOwnPropertySymbols(QQ);
        for (wQ = 0; wQ < TQ.length; wQ++) XQ = TQ[wQ], WQ.indexOf(XQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, XQ) && (qQ[XQ] = QQ[XQ])
      }
      return qQ
    }

    function RQ(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function EQ(QQ) {
      for (var WQ = 1; WQ < arguments.length; WQ++) {
        var XQ = null != arguments[WQ] ? arguments[WQ] : {};
        WQ % 2 ? RQ(Object(XQ), !0).forEach((function(WQ) {
          CQ(QQ, WQ, XQ[WQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : RQ(Object(XQ)).forEach((function(WQ) {
          Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
        }))
      }
      return QQ
    }

    function CQ(QQ, WQ, XQ) {
      return (WQ = function(QQ) {
        var WQ = function(QQ, WQ) {
          if ("object" != cQ(QQ) || !QQ) return QQ;
          var XQ = QQ[Symbol.toPrimitive];
          if (void 0 !== XQ) {
            var wQ = XQ.call(QQ, WQ || "default");
            if ("object" != cQ(wQ)) return wQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == cQ(WQ) ? WQ : WQ + ""
      }(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }

    function uQ(QQ, WQ) {
      return EQ(EQ({}, WQ), QQ)
    }

    function LQ(QQ) {
      var WQ = QQ.shapeType,
        XQ = QQ.elementProps;
      switch (WQ) {
        case "rectangle":
          return wQ.createElement(rQ.b, XQ);
        case "trapezoid":
          return wQ.createElement(HQ, XQ);
        case "sector":
          return wQ.createElement(aQ.e, XQ);
        case "symbols":
          if (function(QQ) {
              return "symbols" === QQ
            }(WQ)) return wQ.createElement(hQ.d, XQ);
          break;
        default:
          return null
      }
    }

    function kQ(QQ) {
      var WQ, XQ = QQ.option,
        qQ = QQ.shapeType,
        zQ = QQ.propTransformer,
        FQ = void 0 === zQ ? uQ : zQ,
        gQ = QQ.activeClassName,
        JQ = void 0 === gQ ? "recharts-active-shape" : gQ,
        rQ = QQ.isActive,
        IQ = AQ(QQ, iQ);
      if ((0, wQ.isValidElement)(XQ)) WQ = (0, wQ.cloneElement)(XQ, EQ(EQ({}, IQ), function(QQ) {
        return (0, wQ.isValidElement)(QQ) ? QQ.props : QQ
      }(XQ)));
      else if (TQ()(XQ)) WQ = XQ(IQ);
      else if (sQ()(XQ) && !PQ()(XQ)) {
        var jQ = FQ(XQ, IQ);
        WQ = wQ.createElement(LQ, {
          shapeType: qQ,
          elementProps: jQ
        })
      } else {
        var BQ = IQ;
        WQ = wQ.createElement(LQ, {
          shapeType: qQ,
          elementProps: BQ
        })
      }
      return rQ ? wQ.createElement(lQ.d, {
        className: JQ
      }, WQ) : WQ
    }

    function fQ(QQ, WQ) {
      return null != WQ && "trapezoids" in QQ.props
    }

    function SQ(QQ, WQ) {
      return null != WQ && "sectors" in QQ.props
    }

    function tQ(QQ, WQ) {
      return null != WQ && "points" in QQ.props
    }

    function oQ(QQ, WQ) {
      var XQ, wQ, qQ = QQ.x === (null === WQ || void 0 === WQ || null === (XQ = WQ.labelViewBox) || void 0 === XQ ? void 0 : XQ.x) || QQ.x === WQ.x,
        TQ = QQ.y === (null === WQ || void 0 === WQ || null === (wQ = WQ.labelViewBox) || void 0 === wQ ? void 0 : wQ.y) || QQ.y === WQ.y;
      return qQ && TQ
    }

    function eQ(QQ, WQ) {
      var XQ = QQ.endAngle === WQ.endAngle,
        wQ = QQ.startAngle === WQ.startAngle;
      return XQ && wQ
    }

    function nQ(QQ, WQ) {
      var XQ = QQ.x === WQ.x,
        wQ = QQ.y === WQ.y,
        qQ = QQ.z === WQ.z;
      return XQ && wQ && qQ
    }

    function xQ(QQ) {
      var WQ = QQ.activeTooltipItem,
        XQ = QQ.graphicalItem,
        wQ = QQ.itemData,
        qQ = function(QQ, WQ) {
          var XQ;
          return fQ(QQ, WQ) ? XQ = "trapezoids" : SQ(QQ, WQ) ? XQ = "sectors" : tQ(QQ, WQ) && (XQ = "points"), XQ
        }(XQ, WQ),
        TQ = function(QQ, WQ) {
          var XQ, wQ;
          return fQ(QQ, WQ) ? null === (XQ = WQ.tooltipPayload) || void 0 === XQ || null === (XQ = XQ[0]) || void 0 === XQ || null === (XQ = XQ.payload) || void 0 === XQ ? void 0 : XQ.payload : SQ(QQ, WQ) ? null === (wQ = WQ.tooltipPayload) || void 0 === wQ || null === (wQ = wQ[0]) || void 0 === wQ || null === (wQ = wQ.payload) || void 0 === wQ ? void 0 : wQ.payload : tQ(QQ, WQ) ? WQ.payload : {}
        }(XQ, WQ),
        zQ = wQ.filter((function(QQ, wQ) {
          var zQ = JQ()(TQ, QQ),
            sQ = XQ.props[qQ].filter((function(QQ) {
              var wQ = function(QQ, WQ) {
                var XQ;
                return fQ(QQ, WQ) ? XQ = oQ : SQ(QQ, WQ) ? XQ = eQ : tQ(QQ, WQ) && (XQ = nQ), XQ
              }(XQ, WQ);
              return wQ(QQ, WQ)
            })),
            FQ = XQ.props[qQ].indexOf(sQ[sQ.length - 1]);
          return zQ && wQ === FQ
        }));
      return wQ.indexOf(zQ[zQ.length - 1])
    }
  },
  6630: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => UQ,
      g: () => VQ,
      h: () => bQ,
      i: () => pQ,
      l: () => DQ
    });
    var wQ = XQ(6639),
      qQ = XQ.n(wQ),
      TQ = XQ(6647),
      zQ = XQ.n(TQ),
      sQ = XQ(6526),
      FQ = XQ(5775),
      PQ = XQ(5520),
      gQ = XQ(6664);

    function JQ(QQ) {
      return JQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, JQ(QQ)
    }

    function rQ(QQ, WQ) {
      for (var XQ = 0; XQ < WQ.length; XQ++) {
        var wQ = WQ[XQ];
        wQ.enumerable = wQ.enumerable || !1, wQ.configurable = !0, "value" in wQ && (wQ.writable = !0), Object.defineProperty(QQ, yQ(wQ.key), wQ)
      }
    }

    function IQ(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function jQ(QQ) {
      for (var WQ = 1; WQ < arguments.length; WQ++) {
        var XQ = null != arguments[WQ] ? arguments[WQ] : {};
        WQ % 2 ? IQ(Object(XQ), !0).forEach((function(WQ) {
          BQ(QQ, WQ, XQ[WQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : IQ(Object(XQ)).forEach((function(WQ) {
          Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
        }))
      }
      return QQ
    }

    function BQ(QQ, WQ, XQ) {
      return (WQ = yQ(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }

    function yQ(QQ) {
      var WQ = function(QQ, WQ) {
        if ("object" != JQ(QQ) || !QQ) return QQ;
        var XQ = QQ[Symbol.toPrimitive];
        if (void 0 !== XQ) {
          var wQ = XQ.call(QQ, WQ || "default");
          if ("object" != JQ(wQ)) return wQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == JQ(WQ) ? WQ : WQ + ""
    }
    var VQ = function(QQ, WQ, XQ, wQ, qQ) {
        var TQ = QQ.width,
          zQ = QQ.height,
          JQ = QQ.layout,
          rQ = QQ.children,
          IQ = Object.keys(WQ),
          yQ = {
            left: XQ.left,
            leftMirror: XQ.left,
            right: TQ - XQ.right,
            rightMirror: TQ - XQ.right,
            top: XQ.top,
            topMirror: XQ.top,
            bottom: zQ - XQ.bottom,
            bottomMirror: zQ - XQ.bottom
          },
          VQ = !!(0, FQ.k)(rQ, gQ.c);
        return IQ.reduce((function(TQ, zQ) {
          var FQ, gQ, rQ, IQ, DQ, pQ = WQ[zQ],
            GQ = pQ.orientation,
            UQ = pQ.domain,
            bQ = pQ.padding,
            vQ = void 0 === bQ ? {} : bQ,
            dQ = pQ.mirror,
            HQ = pQ.reversed,
            aQ = "".concat(GQ).concat(dQ ? "Mirror" : "");
          if ("number" === pQ.type && ("gap" === pQ.padding || "no-gap" === pQ.padding)) {
            var lQ = UQ[1] - UQ[0],
              hQ = 1 / 0,
              iQ = pQ.categoricalDomain.sort(PQ.b);
            if (iQ.forEach((function(QQ, WQ) {
                WQ > 0 && (hQ = Math.min((QQ || 0) - (iQ[WQ - 1] || 0), hQ))
              })), Number.isFinite(hQ)) {
              var cQ = hQ / lQ,
                AQ = "vertical" === pQ.layout ? XQ.height : XQ.width;
              if ("gap" === pQ.padding && (FQ = cQ * AQ / 2), "no-gap" === pQ.padding) {
                var RQ = (0, PQ.o)(QQ.barCategoryGap, cQ * AQ),
                  EQ = cQ * AQ / 2;
                FQ = EQ - RQ - (EQ - RQ) / AQ * RQ
              }
            }
          }
          gQ = "xAxis" === wQ ? [XQ.left + (vQ.left || 0) + (FQ || 0), XQ.left + XQ.width - (vQ.right || 0) - (FQ || 0)] : "yAxis" === wQ ? "horizontal" === JQ ? [XQ.top + XQ.height - (vQ.bottom || 0), XQ.top + (vQ.top || 0)] : [XQ.top + (vQ.top || 0) + (FQ || 0), XQ.top + XQ.height - (vQ.bottom || 0) - (FQ || 0)] : pQ.range, HQ && (gQ = [gQ[1], gQ[0]]);
          var CQ = (0, sQ.ub)(pQ, qQ, VQ),
            uQ = CQ.scale,
            LQ = CQ.realScaleType;
          uQ.domain(UQ).range(gQ), (0, sQ.i)(uQ);
          var kQ = (0, sQ.gb)(uQ, jQ(jQ({}, pQ), {}, {
            realScaleType: LQ
          }));
          "xAxis" === wQ ? (DQ = "top" === GQ && !dQ || "bottom" === GQ && dQ, rQ = XQ.left, IQ = yQ[aQ] - DQ * pQ.height) : "yAxis" === wQ && (DQ = "left" === GQ && !dQ || "right" === GQ && dQ, rQ = yQ[aQ] - DQ * pQ.width, IQ = XQ.top);
          var fQ = jQ(jQ(jQ({}, pQ), kQ), {}, {
            realScaleType: LQ,
            x: rQ,
            y: IQ,
            scale: uQ,
            width: "xAxis" === wQ ? XQ.width : pQ.width,
            height: "yAxis" === wQ ? XQ.height : pQ.height
          });
          return fQ.bandSize = (0, sQ.t)(fQ, kQ), pQ.hide || "xAxis" !== wQ ? pQ.hide || (yQ[aQ] += (DQ ? -1 : 1) * fQ.width) : yQ[aQ] += (DQ ? -1 : 1) * fQ.height, jQ(jQ({}, TQ), {}, BQ({}, zQ, fQ))
        }), {})
      },
      DQ = function(QQ, WQ) {
        var XQ = QQ.x,
          wQ = QQ.y,
          qQ = WQ.x,
          TQ = WQ.y;
        return {
          x: Math.min(XQ, qQ),
          y: Math.min(wQ, TQ),
          width: Math.abs(qQ - XQ),
          height: Math.abs(TQ - wQ)
        }
      },
      pQ = function(QQ) {
        var WQ = QQ.x1,
          XQ = QQ.y1,
          wQ = QQ.x2,
          qQ = QQ.y2;
        return DQ({
          x: WQ,
          y: XQ
        }, {
          x: wQ,
          y: qQ
        })
      },
      GQ = function() {
        function QQ(WQ) {
          ! function(QQ, WQ) {
            if (!(QQ instanceof WQ)) throw new TypeError("Cannot call a class as a function")
          }(this, QQ), this.scale = WQ
        }
        return WQ = QQ, XQ = [{
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
          value: function(QQ) {
            var WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              XQ = WQ.bandAware,
              wQ = WQ.position;
            if (void 0 !== QQ) {
              if (wQ) switch (wQ) {
                case "start":
                default:
                  return this.scale(QQ);
                case "middle":
                  var qQ = this.bandwidth ? this.bandwidth() / 2 : 0;
                  return this.scale(QQ) + qQ;
                case "end":
                  var TQ = this.bandwidth ? this.bandwidth() : 0;
                  return this.scale(QQ) + TQ
              }
              if (XQ) {
                var zQ = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(QQ) + zQ
              }
              return this.scale(QQ)
            }
          }
        }, {
          key: "isInRange",
          value: function(QQ) {
            var WQ = this.range(),
              XQ = WQ[0],
              wQ = WQ[WQ.length - 1];
            return XQ <= wQ ? QQ >= XQ && QQ <= wQ : QQ >= wQ && QQ <= XQ
          }
        }], wQ = [{
          key: "create",
          value: function(WQ) {
            return new QQ(WQ)
          }
        }], XQ && rQ(WQ.prototype, XQ), wQ && rQ(WQ, wQ), Object.defineProperty(WQ, "prototype", {
          writable: !1
        }), WQ;
        var WQ, XQ, wQ
      }();
    BQ(GQ, "EPS", 1e-4);
    var UQ = function(QQ) {
      var WQ = Object.keys(QQ).reduce((function(WQ, XQ) {
        return jQ(jQ({}, WQ), {}, BQ({}, XQ, GQ.create(QQ[XQ])))
      }), {});
      return jQ(jQ({}, WQ), {}, {
        apply: function(QQ) {
          var XQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            wQ = XQ.bandAware,
            TQ = XQ.position;
          return qQ()(QQ, (function(QQ, XQ) {
            return WQ[XQ].apply(QQ, {
              bandAware: wQ,
              position: TQ
            })
          }))
        },
        isInRange: function(QQ) {
          return zQ()(QQ, (function(QQ, XQ) {
            return WQ[XQ].isInRange(QQ)
          }))
        }
      })
    };
    var bQ = function(QQ) {
      var WQ = QQ.width,
        XQ = QQ.height,
        wQ = function(QQ) {
          return (QQ % 180 + 180) % 180
        }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0),
        qQ = wQ * Math.PI / 180,
        TQ = Math.atan(XQ / WQ),
        zQ = qQ > TQ && qQ < Math.PI - TQ ? XQ / Math.sin(qQ) : WQ / Math.cos(qQ);
      return Math.abs(zQ)
    }
  },
  6526: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => Rz,
      g: () => hz,
      i: () => nz,
      m: () => tz,
      q: () => xz,
      t: () => zs,
      w: () => Az,
      x: () => cz,
      B: () => Qs,
      F: () => Mz,
      G: () => mz,
      K: () => kz,
      O: () => lz,
      R: () => uz,
      T: () => Xs,
      X: () => iz,
      _: () => Oz,
      cb: () => Ws,
      eb: () => fz,
      gb: () => Kz,
      kb: () => Fs,
      lb: () => az,
      pb: () => Lz,
      qb: () => ss,
      sb: () => Cz,
      ub: () => oz,
      wb: () => Ts,
      zb: () => Yz
    });
    var wQ = {};
    XQ.r(wQ), XQ.d(wQ, {
      scaleBand: () => qQ.b,
      scaleDiverging: () => PT,
      scaleDivergingLog: () => gT,
      scaleDivergingPow: () => rT,
      scaleDivergingSqrt: () => IT,
      scaleDivergingSymlog: () => JT,
      scaleIdentity: () => ZW,
      scaleImplicit: () => PX.i,
      scaleLinear: () => NW,
      scaleLog: () => qX,
      scaleOrdinal: () => PX.e,
      scalePoint: () => qQ.d,
      scalePow: () => jX,
      scaleQuantile: () => aX,
      scaleQuantize: () => lX,
      scaleRadial: () => VX,
      scaleSequential: () => XT,
      scaleSequentialLog: () => wT,
      scaleSequentialPow: () => TT,
      scaleSequentialQuantile: () => sT,
      scaleSequentialSqrt: () => zT,
      scaleSequentialSymlog: () => qT,
      scaleSqrt: () => BX,
      scaleSymlog: () => FX,
      scaleThreshold: () => hX,
      scaleTime: () => mq,
      scaleUtc: () => Mq,
      tickFormat: () => xW
    });
    var qQ = XQ(6535);
    const TQ = Math.sqrt(50),
      zQ = Math.sqrt(10),
      sQ = Math.sqrt(2);

    function FQ(QQ, WQ, XQ) {
      const wQ = (WQ - QQ) / Math.max(0, XQ),
        qQ = Math.floor(Math.log10(wQ)),
        PQ = wQ / Math.pow(10, qQ),
        gQ = PQ >= TQ ? 10 : PQ >= zQ ? 5 : PQ >= sQ ? 2 : 1;
      let JQ, rQ, IQ;
      return qQ < 0 ? (IQ = Math.pow(10, -qQ) / gQ, JQ = Math.round(QQ * IQ), rQ = Math.round(WQ * IQ), JQ / IQ < QQ && ++JQ, rQ / IQ > WQ && --rQ, IQ = -IQ) : (IQ = Math.pow(10, qQ) * gQ, JQ = Math.round(QQ / IQ), rQ = Math.round(WQ / IQ), JQ * IQ < QQ && ++JQ, rQ * IQ > WQ && --rQ), rQ < JQ && .5 <= XQ && XQ < 2 ? FQ(QQ, WQ, 2 * XQ) : [JQ, rQ, IQ]
    }

    function PQ(QQ, WQ, XQ) {
      if (!((XQ = +XQ) > 0)) return [];
      if ((QQ = +QQ) === (WQ = +WQ)) return [QQ];
      const wQ = WQ < QQ,
        [qQ, TQ, zQ] = wQ ? FQ(WQ, QQ, XQ) : FQ(QQ, WQ, XQ);
      if (!(TQ >= qQ)) return [];
      const sQ = TQ - qQ + 1,
        PQ = new Array(sQ);
      if (wQ)
        if (zQ < 0)
          for (let FQ = 0; FQ < sQ; ++FQ) PQ[FQ] = (TQ - FQ) / -zQ;
        else
          for (let FQ = 0; FQ < sQ; ++FQ) PQ[FQ] = (TQ - FQ) * zQ;
      else if (zQ < 0)
        for (let FQ = 0; FQ < sQ; ++FQ) PQ[FQ] = (qQ + FQ) / -zQ;
      else
        for (let FQ = 0; FQ < sQ; ++FQ) PQ[FQ] = (qQ + FQ) * zQ;
      return PQ
    }

    function gQ(QQ, WQ, XQ) {
      return FQ(QQ = +QQ, WQ = +WQ, XQ = +XQ)[2]
    }

    function JQ(QQ, WQ, XQ) {
      XQ = +XQ;
      const wQ = (WQ = +WQ) < (QQ = +QQ),
        qQ = wQ ? gQ(WQ, QQ, XQ) : gQ(QQ, WQ, XQ);
      return (wQ ? -1 : 1) * (qQ < 0 ? 1 / -qQ : qQ)
    }

    function rQ(QQ, WQ) {
      return null == QQ || null == WQ ? NaN : QQ < WQ ? -1 : QQ > WQ ? 1 : QQ >= WQ ? 0 : NaN
    }

    function IQ(QQ, WQ) {
      return null == QQ || null == WQ ? NaN : WQ < QQ ? -1 : WQ > QQ ? 1 : WQ >= QQ ? 0 : NaN
    }

    function jQ(QQ) {
      let WQ, XQ, wQ;

      function qQ(QQ, wQ) {
        let qQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          TQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : QQ.length;
        if (qQ < TQ) {
          if (0 !== WQ(wQ, wQ)) return TQ;
          do {
            const WQ = qQ + TQ >>> 1;
            XQ(QQ[WQ], wQ) < 0 ? qQ = WQ + 1 : TQ = WQ
          } while (qQ < TQ)
        }
        return qQ
      }
      return 2 !== QQ.length ? (WQ = rQ, XQ = (WQ, XQ) => rQ(QQ(WQ), XQ), wQ = (WQ, XQ) => QQ(WQ) - XQ) : (WQ = QQ === rQ || QQ === IQ ? QQ : BQ, XQ = QQ, wQ = QQ), {
        left: qQ,
        center: function(QQ, WQ) {
          let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          const TQ = qQ(QQ, WQ, XQ, (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : QQ.length) - 1);
          return TQ > XQ && wQ(QQ[TQ - 1], WQ) > -wQ(QQ[TQ], WQ) ? TQ - 1 : TQ
        },
        right: function(QQ, wQ) {
          let qQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            TQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : QQ.length;
          if (qQ < TQ) {
            if (0 !== WQ(wQ, wQ)) return TQ;
            do {
              const WQ = qQ + TQ >>> 1;
              XQ(QQ[WQ], wQ) <= 0 ? qQ = WQ + 1 : TQ = WQ
            } while (qQ < TQ)
          }
          return qQ
        }
      }
    }

    function BQ() {
      return 0
    }

    function yQ(QQ) {
      return null === QQ ? NaN : +QQ
    }
    const VQ = jQ(rQ),
      DQ = VQ.right,
      pQ = (VQ.left, jQ(yQ).center, DQ);

    function GQ(QQ, WQ, XQ) {
      QQ.prototype = WQ.prototype = XQ, XQ.constructor = QQ
    }

    function UQ(QQ, WQ) {
      var XQ = Object.create(QQ.prototype);
      for (var wQ in WQ) XQ[wQ] = WQ[wQ];
      return XQ
    }

    function bQ() {}
    var vQ = .7,
      dQ = 1 / vQ,
      HQ = "\\s*([+-]?\\d+)\\s*",
      aQ = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      lQ = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      hQ = /^#([0-9a-f]{3,8})$/,
      iQ = new RegExp(`^rgb\\(${HQ},${HQ},${HQ}\\)$`),
      cQ = new RegExp(`^rgb\\(${lQ},${lQ},${lQ}\\)$`),
      AQ = new RegExp(`^rgba\\(${HQ},${HQ},${HQ},${aQ}\\)$`),
      RQ = new RegExp(`^rgba\\(${lQ},${lQ},${lQ},${aQ}\\)$`),
      EQ = new RegExp(`^hsl\\(${aQ},${lQ},${lQ}\\)$`),
      CQ = new RegExp(`^hsla\\(${aQ},${lQ},${lQ},${aQ}\\)$`),
      uQ = {
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

    function LQ() {
      return this.rgb().formatHex()
    }

    function kQ() {
      return this.rgb().formatRgb()
    }

    function fQ(QQ) {
      var WQ, XQ;
      return QQ = (QQ + "").trim().toLowerCase(), (WQ = hQ.exec(QQ)) ? (XQ = WQ[1].length, WQ = parseInt(WQ[1], 16), 6 === XQ ? SQ(WQ) : 3 === XQ ? new eQ(WQ >> 8 & 15 | WQ >> 4 & 240, WQ >> 4 & 15 | 240 & WQ, (15 & WQ) << 4 | 15 & WQ, 1) : 8 === XQ ? tQ(WQ >> 24 & 255, WQ >> 16 & 255, WQ >> 8 & 255, (255 & WQ) / 255) : 4 === XQ ? tQ(WQ >> 12 & 15 | WQ >> 8 & 240, WQ >> 8 & 15 | WQ >> 4 & 240, WQ >> 4 & 15 | 240 & WQ, ((15 & WQ) << 4 | 15 & WQ) / 255) : null) : (WQ = iQ.exec(QQ)) ? new eQ(WQ[1], WQ[2], WQ[3], 1) : (WQ = cQ.exec(QQ)) ? new eQ(255 * WQ[1] / 100, 255 * WQ[2] / 100, 255 * WQ[3] / 100, 1) : (WQ = AQ.exec(QQ)) ? tQ(WQ[1], WQ[2], WQ[3], WQ[4]) : (WQ = RQ.exec(QQ)) ? tQ(255 * WQ[1] / 100, 255 * WQ[2] / 100, 255 * WQ[3] / 100, WQ[4]) : (WQ = EQ.exec(QQ)) ? OQ(WQ[1], WQ[2] / 100, WQ[3] / 100, 1) : (WQ = CQ.exec(QQ)) ? OQ(WQ[1], WQ[2] / 100, WQ[3] / 100, WQ[4]) : uQ.hasOwnProperty(QQ) ? SQ(uQ[QQ]) : "transparent" === QQ ? new eQ(NaN, NaN, NaN, 0) : null
    }

    function SQ(QQ) {
      return new eQ(QQ >> 16 & 255, QQ >> 8 & 255, 255 & QQ, 1)
    }

    function tQ(QQ, WQ, XQ, wQ) {
      return wQ <= 0 && (QQ = WQ = XQ = NaN), new eQ(QQ, WQ, XQ, wQ)
    }

    function oQ(QQ, WQ, XQ, wQ) {
      return 1 === arguments.length ? ((qQ = QQ) instanceof bQ || (qQ = fQ(qQ)), qQ ? new eQ((qQ = qQ.rgb()).r, qQ.g, qQ.b, qQ.opacity) : new eQ) : new eQ(QQ, WQ, XQ, null == wQ ? 1 : wQ);
      var qQ
    }

    function eQ(QQ, WQ, XQ, wQ) {
      this.r = +QQ, this.g = +WQ, this.b = +XQ, this.opacity = +wQ
    }

    function nQ() {
      return `#${ZQ(this.r)}${ZQ(this.g)}${ZQ(this.b)}`
    }

    function xQ() {
      const QQ = YQ(this.opacity);
      return `${1===QQ?"rgb(":"rgba("}${NQ(this.r)}, ${NQ(this.g)}, ${NQ(this.b)}${1===QQ?")":`, ${QQ})`}`
    }

    function YQ(QQ) {
      return isNaN(QQ) ? 1 : Math.max(0, Math.min(1, QQ))
    }

    function NQ(QQ) {
      return Math.max(0, Math.min(255, Math.round(QQ) || 0))
    }

    function ZQ(QQ) {
      return ((QQ = NQ(QQ)) < 16 ? "0" : "") + QQ.toString(16)
    }

    function OQ(QQ, WQ, XQ, wQ) {
      return wQ <= 0 ? QQ = WQ = XQ = NaN : XQ <= 0 || XQ >= 1 ? QQ = WQ = NaN : WQ <= 0 && (QQ = NaN), new mQ(QQ, WQ, XQ, wQ)
    }

    function KQ(QQ) {
      if (QQ instanceof mQ) return new mQ(QQ.h, QQ.s, QQ.l, QQ.opacity);
      if (QQ instanceof bQ || (QQ = fQ(QQ)), !QQ) return new mQ;
      if (QQ instanceof mQ) return QQ;
      var WQ = (QQ = QQ.rgb()).r / 255,
        XQ = QQ.g / 255,
        wQ = QQ.b / 255,
        qQ = Math.min(WQ, XQ, wQ),
        TQ = Math.max(WQ, XQ, wQ),
        zQ = NaN,
        sQ = TQ - qQ,
        FQ = (TQ + qQ) / 2;
      return sQ ? (zQ = WQ === TQ ? (XQ - wQ) / sQ + 6 * (XQ < wQ) : XQ === TQ ? (wQ - WQ) / sQ + 2 : (WQ - XQ) / sQ + 4, sQ /= FQ < .5 ? TQ + qQ : 2 - TQ - qQ, zQ *= 60) : sQ = FQ > 0 && FQ < 1 ? 0 : zQ, new mQ(zQ, sQ, FQ, QQ.opacity)
    }

    function mQ(QQ, WQ, XQ, wQ) {
      this.h = +QQ, this.s = +WQ, this.l = +XQ, this.opacity = +wQ
    }

    function MQ(QQ) {
      return (QQ = (QQ || 0) % 360) < 0 ? QQ + 360 : QQ
    }

    function QW(QQ) {
      return Math.max(0, Math.min(1, QQ || 0))
    }

    function WW(QQ, WQ, XQ) {
      return 255 * (QQ < 60 ? WQ + (XQ - WQ) * QQ / 60 : QQ < 180 ? XQ : QQ < 240 ? WQ + (XQ - WQ) * (240 - QQ) / 60 : WQ)
    }

    function XW(QQ, WQ, XQ, wQ, qQ) {
      var TQ = QQ * QQ,
        zQ = TQ * QQ;
      return ((1 - 3 * QQ + 3 * TQ - zQ) * WQ + (4 - 6 * TQ + 3 * zQ) * XQ + (1 + 3 * QQ + 3 * TQ - 3 * zQ) * wQ + zQ * qQ) / 6
    }
    GQ(bQ, fQ, {
      copy(QQ) {
        return Object.assign(new this.constructor, this, QQ)
      },
      displayable() {
        return this.rgb().displayable()
      },
      hex: LQ,
      formatHex: LQ,
      formatHex8: function() {
        return this.rgb().formatHex8()
      },
      formatHsl: function() {
        return KQ(this).formatHsl()
      },
      formatRgb: kQ,
      toString: kQ
    }), GQ(eQ, oQ, UQ(bQ, {
      brighter(QQ) {
        return QQ = null == QQ ? dQ : Math.pow(dQ, QQ), new eQ(this.r * QQ, this.g * QQ, this.b * QQ, this.opacity)
      },
      darker(QQ) {
        return QQ = null == QQ ? vQ : Math.pow(vQ, QQ), new eQ(this.r * QQ, this.g * QQ, this.b * QQ, this.opacity)
      },
      rgb() {
        return this
      },
      clamp() {
        return new eQ(NQ(this.r), NQ(this.g), NQ(this.b), YQ(this.opacity))
      },
      displayable() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
      },
      hex: nQ,
      formatHex: nQ,
      formatHex8: function() {
        return `#${ZQ(this.r)}${ZQ(this.g)}${ZQ(this.b)}${ZQ(255*(isNaN(this.opacity)?1:this.opacity))}`
      },
      formatRgb: xQ,
      toString: xQ
    })), GQ(mQ, (function(QQ, WQ, XQ, wQ) {
      return 1 === arguments.length ? KQ(QQ) : new mQ(QQ, WQ, XQ, null == wQ ? 1 : wQ)
    }), UQ(bQ, {
      brighter(QQ) {
        return QQ = null == QQ ? dQ : Math.pow(dQ, QQ), new mQ(this.h, this.s, this.l * QQ, this.opacity)
      },
      darker(QQ) {
        return QQ = null == QQ ? vQ : Math.pow(vQ, QQ), new mQ(this.h, this.s, this.l * QQ, this.opacity)
      },
      rgb() {
        var QQ = this.h % 360 + 360 * (this.h < 0),
          WQ = isNaN(QQ) || isNaN(this.s) ? 0 : this.s,
          XQ = this.l,
          wQ = XQ + (XQ < .5 ? XQ : 1 - XQ) * WQ,
          qQ = 2 * XQ - wQ;
        return new eQ(WW(QQ >= 240 ? QQ - 240 : QQ + 120, qQ, wQ), WW(QQ, qQ, wQ), WW(QQ < 120 ? QQ + 240 : QQ - 120, qQ, wQ), this.opacity)
      },
      clamp() {
        return new mQ(MQ(this.h), QW(this.s), QW(this.l), YQ(this.opacity))
      },
      displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
      },
      formatHsl() {
        const QQ = YQ(this.opacity);
        return `${1===QQ?"hsl(":"hsla("}${MQ(this.h)}, ${100*QW(this.s)}%, ${100*QW(this.l)}%${1===QQ?")":`, ${QQ})`}`
      }
    }));
    const wW = QQ => () => QQ;

    function qW(QQ, WQ) {
      return function(XQ) {
        return QQ + XQ * WQ
      }
    }

    function TW(QQ) {
      return 1 === (QQ = +QQ) ? zW : function(WQ, XQ) {
        return XQ - WQ ? function(QQ, WQ, XQ) {
          return QQ = Math.pow(QQ, XQ), WQ = Math.pow(WQ, XQ) - QQ, XQ = 1 / XQ,
            function(wQ) {
              return Math.pow(QQ + wQ * WQ, XQ)
            }
        }(WQ, XQ, QQ) : wW(isNaN(WQ) ? XQ : WQ)
      }
    }

    function zW(QQ, WQ) {
      var XQ = WQ - QQ;
      return XQ ? qW(QQ, XQ) : wW(isNaN(QQ) ? WQ : QQ)
    }
    const sW = function QQ(WQ) {
      var XQ = TW(WQ);

      function wQ(QQ, WQ) {
        var wQ = XQ((QQ = oQ(QQ)).r, (WQ = oQ(WQ)).r),
          qQ = XQ(QQ.g, WQ.g),
          TQ = XQ(QQ.b, WQ.b),
          zQ = zW(QQ.opacity, WQ.opacity);
        return function(WQ) {
          return QQ.r = wQ(WQ), QQ.g = qQ(WQ), QQ.b = TQ(WQ), QQ.opacity = zQ(WQ), QQ + ""
        }
      }
      return wQ.gamma = QQ, wQ
    }(1);

    function FW(QQ) {
      return function(WQ) {
        var XQ, wQ, qQ = WQ.length,
          TQ = new Array(qQ),
          zQ = new Array(qQ),
          sQ = new Array(qQ);
        for (XQ = 0; XQ < qQ; ++XQ) wQ = oQ(WQ[XQ]), TQ[XQ] = wQ.r || 0, zQ[XQ] = wQ.g || 0, sQ[XQ] = wQ.b || 0;
        return TQ = QQ(TQ), zQ = QQ(zQ), sQ = QQ(sQ), wQ.opacity = 1,
          function(QQ) {
            return wQ.r = TQ(QQ), wQ.g = zQ(QQ), wQ.b = sQ(QQ), wQ + ""
          }
      }
    }
    FW((function(QQ) {
      var WQ = QQ.length - 1;
      return function(XQ) {
        var wQ = XQ <= 0 ? XQ = 0 : XQ >= 1 ? (XQ = 1, WQ - 1) : Math.floor(XQ * WQ),
          qQ = QQ[wQ],
          TQ = QQ[wQ + 1],
          zQ = wQ > 0 ? QQ[wQ - 1] : 2 * qQ - TQ,
          sQ = wQ < WQ - 1 ? QQ[wQ + 2] : 2 * TQ - qQ;
        return XW((XQ - wQ / WQ) * WQ, zQ, qQ, TQ, sQ)
      }
    })), FW((function(QQ) {
      var WQ = QQ.length;
      return function(XQ) {
        var wQ = Math.floor(((XQ %= 1) < 0 ? ++XQ : XQ) * WQ),
          qQ = QQ[(wQ + WQ - 1) % WQ],
          TQ = QQ[wQ % WQ],
          zQ = QQ[(wQ + 1) % WQ],
          sQ = QQ[(wQ + 2) % WQ];
        return XW((XQ - wQ / WQ) * WQ, qQ, TQ, zQ, sQ)
      }
    }));

    function PW(QQ, WQ) {
      var XQ, wQ = WQ ? WQ.length : 0,
        qQ = QQ ? Math.min(wQ, QQ.length) : 0,
        TQ = new Array(qQ),
        zQ = new Array(wQ);
      for (XQ = 0; XQ < qQ; ++XQ) TQ[XQ] = VW(QQ[XQ], WQ[XQ]);
      for (; XQ < wQ; ++XQ) zQ[XQ] = WQ[XQ];
      return function(QQ) {
        for (XQ = 0; XQ < qQ; ++XQ) zQ[XQ] = TQ[XQ](QQ);
        return zQ
      }
    }

    function gW(QQ, WQ) {
      var XQ = new Date;
      return QQ = +QQ, WQ = +WQ,
        function(wQ) {
          return XQ.setTime(QQ * (1 - wQ) + WQ * wQ), XQ
        }
    }

    function JW(QQ, WQ) {
      return QQ = +QQ, WQ = +WQ,
        function(XQ) {
          return QQ * (1 - XQ) + WQ * XQ
        }
    }

    function rW(QQ, WQ) {
      var XQ, wQ = {},
        qQ = {};
      for (XQ in null !== QQ && "object" === typeof QQ || (QQ = {}), null !== WQ && "object" === typeof WQ || (WQ = {}), WQ) XQ in QQ ? wQ[XQ] = VW(QQ[XQ], WQ[XQ]) : qQ[XQ] = WQ[XQ];
      return function(QQ) {
        for (XQ in wQ) qQ[XQ] = wQ[XQ](QQ);
        return qQ
      }
    }
    var IW = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      jW = new RegExp(IW.source, "g");

    function BW(QQ, WQ) {
      var XQ, wQ, qQ, TQ = IW.lastIndex = jW.lastIndex = 0,
        zQ = -1,
        sQ = [],
        FQ = [];
      for (QQ += "", WQ += "";
        (XQ = IW.exec(QQ)) && (wQ = jW.exec(WQ));)(qQ = wQ.index) > TQ && (qQ = WQ.slice(TQ, qQ), sQ[zQ] ? sQ[zQ] += qQ : sQ[++zQ] = qQ), (XQ = XQ[0]) === (wQ = wQ[0]) ? sQ[zQ] ? sQ[zQ] += wQ : sQ[++zQ] = wQ : (sQ[++zQ] = null, FQ.push({
        i: zQ,
        x: JW(XQ, wQ)
      })), TQ = jW.lastIndex;
      return TQ < WQ.length && (qQ = WQ.slice(TQ), sQ[zQ] ? sQ[zQ] += qQ : sQ[++zQ] = qQ), sQ.length < 2 ? FQ[0] ? function(QQ) {
        return function(WQ) {
          return QQ(WQ) + ""
        }
      }(FQ[0].x) : function(QQ) {
        return function() {
          return QQ
        }
      }(WQ) : (WQ = FQ.length, function(QQ) {
        for (var XQ, wQ = 0; wQ < WQ; ++wQ) sQ[(XQ = FQ[wQ]).i] = XQ.x(QQ);
        return sQ.join("")
      })
    }

    function yW(QQ, WQ) {
      WQ || (WQ = []);
      var XQ, wQ = QQ ? Math.min(WQ.length, QQ.length) : 0,
        qQ = WQ.slice();
      return function(TQ) {
        for (XQ = 0; XQ < wQ; ++XQ) qQ[XQ] = QQ[XQ] * (1 - TQ) + WQ[XQ] * TQ;
        return qQ
      }
    }

    function VW(QQ, WQ) {
      var XQ, wQ, qQ = typeof WQ;
      return null == WQ || "boolean" === qQ ? wW(WQ) : ("number" === qQ ? JW : "string" === qQ ? (XQ = fQ(WQ)) ? (WQ = XQ, sW) : BW : WQ instanceof fQ ? sW : WQ instanceof Date ? gW : (wQ = WQ, !ArrayBuffer.isView(wQ) || wQ instanceof DataView ? Array.isArray(WQ) ? PW : "function" !== typeof WQ.valueOf && "function" !== typeof WQ.toString || isNaN(WQ) ? rW : JW : yW))(QQ, WQ)
    }

    function DW(QQ, WQ) {
      return QQ = +QQ, WQ = +WQ,
        function(XQ) {
          return Math.round(QQ * (1 - XQ) + WQ * XQ)
        }
    }

    function pW(QQ) {
      return +QQ
    }
    var GW = [0, 1];

    function UW(QQ) {
      return QQ
    }

    function bW(QQ, WQ) {
      return (WQ -= QQ = +QQ) ? function(XQ) {
        return (XQ - QQ) / WQ
      } : (XQ = isNaN(WQ) ? NaN : .5, function() {
        return XQ
      });
      var XQ
    }

    function vW(QQ, WQ, XQ) {
      var wQ = QQ[0],
        qQ = QQ[1],
        TQ = WQ[0],
        zQ = WQ[1];
      return qQ < wQ ? (wQ = bW(qQ, wQ), TQ = XQ(zQ, TQ)) : (wQ = bW(wQ, qQ), TQ = XQ(TQ, zQ)),
        function(QQ) {
          return TQ(wQ(QQ))
        }
    }

    function dW(QQ, WQ, XQ) {
      var wQ = Math.min(QQ.length, WQ.length) - 1,
        qQ = new Array(wQ),
        TQ = new Array(wQ),
        zQ = -1;
      for (QQ[wQ] < QQ[0] && (QQ = QQ.slice().reverse(), WQ = WQ.slice().reverse()); ++zQ < wQ;) qQ[zQ] = bW(QQ[zQ], QQ[zQ + 1]), TQ[zQ] = XQ(WQ[zQ], WQ[zQ + 1]);
      return function(WQ) {
        var XQ = pQ(QQ, WQ, 1, wQ) - 1;
        return TQ[XQ](qQ[XQ](WQ))
      }
    }

    function HW(QQ, WQ) {
      return WQ.domain(QQ.domain()).range(QQ.range()).interpolate(QQ.interpolate()).clamp(QQ.clamp()).unknown(QQ.unknown())
    }

    function aW() {
      var QQ, WQ, XQ, wQ, qQ, TQ, zQ = GW,
        sQ = GW,
        FQ = VW,
        PQ = UW;

      function gQ() {
        var QQ = Math.min(zQ.length, sQ.length);
        return PQ !== UW && (PQ = function(QQ, WQ) {
          var XQ;
          return QQ > WQ && (XQ = QQ, QQ = WQ, WQ = XQ),
            function(XQ) {
              return Math.max(QQ, Math.min(WQ, XQ))
            }
        }(zQ[0], zQ[QQ - 1])), wQ = QQ > 2 ? dW : vW, qQ = TQ = null, JQ
      }

      function JQ(WQ) {
        return null == WQ || isNaN(WQ = +WQ) ? XQ : (qQ || (qQ = wQ(zQ.map(QQ), sQ, FQ)))(QQ(PQ(WQ)))
      }
      return JQ.invert = function(XQ) {
          return PQ(WQ((TQ || (TQ = wQ(sQ, zQ.map(QQ), JW)))(XQ)))
        }, JQ.domain = function(QQ) {
          return arguments.length ? (zQ = Array.from(QQ, pW), gQ()) : zQ.slice()
        }, JQ.range = function(QQ) {
          return arguments.length ? (sQ = Array.from(QQ), gQ()) : sQ.slice()
        }, JQ.rangeRound = function(QQ) {
          return sQ = Array.from(QQ), FQ = DW, gQ()
        }, JQ.clamp = function(QQ) {
          return arguments.length ? (PQ = !!QQ || UW, gQ()) : PQ !== UW
        }, JQ.interpolate = function(QQ) {
          return arguments.length ? (FQ = QQ, gQ()) : FQ
        }, JQ.unknown = function(QQ) {
          return arguments.length ? (XQ = QQ, JQ) : XQ
        },
        function(XQ, wQ) {
          return QQ = XQ, WQ = wQ, gQ()
        }
    }

    function lW() {
      return aW()(UW, UW)
    }
    var hW, iW = XQ(6540),
      cW = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function AW(QQ) {
      if (!(WQ = cW.exec(QQ))) throw new Error("invalid format: " + QQ);
      var WQ;
      return new RW({
        fill: WQ[1],
        align: WQ[2],
        sign: WQ[3],
        symbol: WQ[4],
        zero: WQ[5],
        width: WQ[6],
        comma: WQ[7],
        precision: WQ[8] && WQ[8].slice(1),
        trim: WQ[9],
        type: WQ[10]
      })
    }

    function RW(QQ) {
      this.fill = void 0 === QQ.fill ? " " : QQ.fill + "", this.align = void 0 === QQ.align ? ">" : QQ.align + "", this.sign = void 0 === QQ.sign ? "-" : QQ.sign + "", this.symbol = void 0 === QQ.symbol ? "" : QQ.symbol + "", this.zero = !!QQ.zero, this.width = void 0 === QQ.width ? void 0 : +QQ.width, this.comma = !!QQ.comma, this.precision = void 0 === QQ.precision ? void 0 : +QQ.precision, this.trim = !!QQ.trim, this.type = void 0 === QQ.type ? "" : QQ.type + ""
    }

    function EW(QQ, WQ) {
      if (!isFinite(QQ) || 0 === QQ) return null;
      var XQ = (QQ = WQ ? QQ.toExponential(WQ - 1) : QQ.toExponential()).indexOf("e"),
        wQ = QQ.slice(0, XQ);
      return [wQ.length > 1 ? wQ[0] + wQ.slice(2) : wQ, +QQ.slice(XQ + 1)]
    }

    function CW(QQ) {
      return (QQ = EW(Math.abs(QQ))) ? QQ[1] : NaN
    }

    function uW(QQ, WQ) {
      var XQ = EW(QQ, WQ);
      if (!XQ) return QQ + "";
      var wQ = XQ[0],
        qQ = XQ[1];
      return qQ < 0 ? "0." + new Array(-qQ).join("0") + wQ : wQ.length > qQ + 1 ? wQ.slice(0, qQ + 1) + "." + wQ.slice(qQ + 1) : wQ + new Array(qQ - wQ.length + 2).join("0")
    }
    AW.prototype = RW.prototype, RW.prototype.toString = function() {
      return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
    };
    const LW = {
      "%": (QQ, WQ) => (100 * QQ).toFixed(WQ),
      b: QQ => Math.round(QQ).toString(2),
      c: QQ => QQ + "",
      d: function(QQ) {
        return Math.abs(QQ = Math.round(QQ)) >= 1e21 ? QQ.toLocaleString("en").replace(/,/g, "") : QQ.toString(10)
      },
      e: (QQ, WQ) => QQ.toExponential(WQ),
      f: (QQ, WQ) => QQ.toFixed(WQ),
      g: (QQ, WQ) => QQ.toPrecision(WQ),
      o: QQ => Math.round(QQ).toString(8),
      p: (QQ, WQ) => uW(100 * QQ, WQ),
      r: uW,
      s: function(QQ, WQ) {
        var XQ = EW(QQ, WQ);
        if (!XQ) return hW = void 0, QQ.toPrecision(WQ);
        var wQ = XQ[0],
          qQ = XQ[1],
          TQ = qQ - (hW = 3 * Math.max(-8, Math.min(8, Math.floor(qQ / 3)))) + 1,
          zQ = wQ.length;
        return TQ === zQ ? wQ : TQ > zQ ? wQ + new Array(TQ - zQ + 1).join("0") : TQ > 0 ? wQ.slice(0, TQ) + "." + wQ.slice(TQ) : "0." + new Array(1 - TQ).join("0") + EW(QQ, Math.max(0, WQ + TQ - 1))[0]
      },
      X: QQ => Math.round(QQ).toString(16).toUpperCase(),
      x: QQ => Math.round(QQ).toString(16)
    };

    function kW(QQ) {
      return QQ
    }
    var fW, SW, tW, oW = Array.prototype.map,
      eW = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

    function nW(QQ) {
      var WQ, XQ, wQ = void 0 === QQ.grouping || void 0 === QQ.thousands ? kW : (WQ = oW.call(QQ.grouping, Number), XQ = QQ.thousands + "", function(QQ, wQ) {
          for (var qQ = QQ.length, TQ = [], zQ = 0, sQ = WQ[0], FQ = 0; qQ > 0 && sQ > 0 && (FQ + sQ + 1 > wQ && (sQ = Math.max(1, wQ - FQ)), TQ.push(QQ.substring(qQ -= sQ, qQ + sQ)), !((FQ += sQ + 1) > wQ));) sQ = WQ[zQ = (zQ + 1) % WQ.length];
          return TQ.reverse().join(XQ)
        }),
        qQ = void 0 === QQ.currency ? "" : QQ.currency[0] + "",
        TQ = void 0 === QQ.currency ? "" : QQ.currency[1] + "",
        zQ = void 0 === QQ.decimal ? "." : QQ.decimal + "",
        sQ = void 0 === QQ.numerals ? kW : function(QQ) {
          return function(WQ) {
            return WQ.replace(/[0-9]/g, (function(WQ) {
              return QQ[+WQ]
            }))
          }
        }(oW.call(QQ.numerals, String)),
        FQ = void 0 === QQ.percent ? "%" : QQ.percent + "",
        PQ = void 0 === QQ.minus ? "\u2212" : QQ.minus + "",
        gQ = void 0 === QQ.nan ? "NaN" : QQ.nan + "";

      function JQ(QQ, WQ) {
        var XQ = (QQ = AW(QQ)).fill,
          JQ = QQ.align,
          rQ = QQ.sign,
          IQ = QQ.symbol,
          jQ = QQ.zero,
          BQ = QQ.width,
          yQ = QQ.comma,
          VQ = QQ.precision,
          DQ = QQ.trim,
          pQ = QQ.type;
        "n" === pQ ? (yQ = !0, pQ = "g") : LW[pQ] || (void 0 === VQ && (VQ = 12), DQ = !0, pQ = "g"), (jQ || "0" === XQ && "=" === JQ) && (jQ = !0, XQ = "0", JQ = "=");
        var GQ = (WQ && void 0 !== WQ.prefix ? WQ.prefix : "") + ("$" === IQ ? qQ : "#" === IQ && /[boxX]/.test(pQ) ? "0" + pQ.toLowerCase() : ""),
          UQ = ("$" === IQ ? TQ : /[%p]/.test(pQ) ? FQ : "") + (WQ && void 0 !== WQ.suffix ? WQ.suffix : ""),
          bQ = LW[pQ],
          vQ = /[defgprs%]/.test(pQ);

        function dQ(QQ) {
          var WQ, qQ, TQ, FQ = GQ,
            IQ = UQ;
          if ("c" === pQ) IQ = bQ(QQ) + IQ, QQ = "";
          else {
            var dQ = (QQ = +QQ) < 0 || 1 / QQ < 0;
            if (QQ = isNaN(QQ) ? gQ : bQ(Math.abs(QQ), VQ), DQ && (QQ = function(QQ) {
                QQ: for (var WQ, XQ = QQ.length, wQ = 1, qQ = -1; wQ < XQ; ++wQ) switch (QQ[wQ]) {
                  case ".":
                    qQ = WQ = wQ;
                    break;
                  case "0":
                    0 === qQ && (qQ = wQ), WQ = wQ;
                    break;
                  default:
                    if (!+QQ[wQ]) break QQ;
                    qQ > 0 && (qQ = 0)
                }
                return qQ > 0 ? QQ.slice(0, qQ) + QQ.slice(WQ + 1) : QQ
              }(QQ)), dQ && 0 === +QQ && "+" !== rQ && (dQ = !1), FQ = (dQ ? "(" === rQ ? rQ : PQ : "-" === rQ || "(" === rQ ? "" : rQ) + FQ, IQ = ("s" !== pQ || isNaN(QQ) || void 0 === hW ? "" : eW[8 + hW / 3]) + IQ + (dQ && "(" === rQ ? ")" : ""), vQ)
              for (WQ = -1, qQ = QQ.length; ++WQ < qQ;)
                if (48 > (TQ = QQ.charCodeAt(WQ)) || TQ > 57) {
                  IQ = (46 === TQ ? zQ + QQ.slice(WQ + 1) : QQ.slice(WQ)) + IQ, QQ = QQ.slice(0, WQ);
                  break
                }
          }
          yQ && !jQ && (QQ = wQ(QQ, 1 / 0));
          var HQ = FQ.length + QQ.length + IQ.length,
            aQ = HQ < BQ ? new Array(BQ - HQ + 1).join(XQ) : "";
          switch (yQ && jQ && (QQ = wQ(aQ + QQ, aQ.length ? BQ - IQ.length : 1 / 0), aQ = ""), JQ) {
            case "<":
              QQ = FQ + QQ + IQ + aQ;
              break;
            case "=":
              QQ = FQ + aQ + QQ + IQ;
              break;
            case "^":
              QQ = aQ.slice(0, HQ = aQ.length >> 1) + FQ + QQ + IQ + aQ.slice(HQ);
              break;
            default:
              QQ = aQ + FQ + QQ + IQ
          }
          return sQ(QQ)
        }
        return VQ = void 0 === VQ ? 6 : /[gprs]/.test(pQ) ? Math.max(1, Math.min(21, VQ)) : Math.max(0, Math.min(20, VQ)), dQ.toString = function() {
          return QQ + ""
        }, dQ
      }
      return {
        format: JQ,
        formatPrefix: function(QQ, WQ) {
          var XQ = 3 * Math.max(-8, Math.min(8, Math.floor(CW(WQ) / 3))),
            wQ = Math.pow(10, -XQ),
            qQ = JQ(((QQ = AW(QQ)).type = "f", QQ), {
              suffix: eW[8 + XQ / 3]
            });
          return function(QQ) {
            return qQ(wQ * QQ)
          }
        }
      }
    }

    function xW(QQ, WQ, XQ, wQ) {
      var qQ, TQ = JQ(QQ, WQ, XQ);
      switch ((wQ = AW(null == wQ ? ",f" : wQ)).type) {
        case "s":
          var zQ = Math.max(Math.abs(QQ), Math.abs(WQ));
          return null != wQ.precision || isNaN(qQ = function(QQ, WQ) {
            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(CW(WQ) / 3))) - CW(Math.abs(QQ)))
          }(TQ, zQ)) || (wQ.precision = qQ), tW(wQ, zQ);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != wQ.precision || isNaN(qQ = function(QQ, WQ) {
            return QQ = Math.abs(QQ), WQ = Math.abs(WQ) - QQ, Math.max(0, CW(WQ) - CW(QQ)) + 1
          }(TQ, Math.max(Math.abs(QQ), Math.abs(WQ)))) || (wQ.precision = qQ - ("e" === wQ.type));
          break;
        case "f":
        case "%":
          null != wQ.precision || isNaN(qQ = function(QQ) {
            return Math.max(0, -CW(Math.abs(QQ)))
          }(TQ)) || (wQ.precision = qQ - 2 * ("%" === wQ.type))
      }
      return SW(wQ)
    }

    function YW(QQ) {
      var WQ = QQ.domain;
      return QQ.ticks = function(QQ) {
        var XQ = WQ();
        return PQ(XQ[0], XQ[XQ.length - 1], null == QQ ? 10 : QQ)
      }, QQ.tickFormat = function(QQ, XQ) {
        var wQ = WQ();
        return xW(wQ[0], wQ[wQ.length - 1], null == QQ ? 10 : QQ, XQ)
      }, QQ.nice = function(XQ) {
        null == XQ && (XQ = 10);
        var wQ, qQ, TQ = WQ(),
          zQ = 0,
          sQ = TQ.length - 1,
          FQ = TQ[zQ],
          PQ = TQ[sQ],
          JQ = 10;
        for (PQ < FQ && (qQ = FQ, FQ = PQ, PQ = qQ, qQ = zQ, zQ = sQ, sQ = qQ); JQ-- > 0;) {
          if ((qQ = gQ(FQ, PQ, XQ)) === wQ) return TQ[zQ] = FQ, TQ[sQ] = PQ, WQ(TQ);
          if (qQ > 0) FQ = Math.floor(FQ / qQ) * qQ, PQ = Math.ceil(PQ / qQ) * qQ;
          else {
            if (!(qQ < 0)) break;
            FQ = Math.ceil(FQ * qQ) / qQ, PQ = Math.floor(PQ * qQ) / qQ
          }
          wQ = qQ
        }
        return QQ
      }, QQ
    }

    function NW() {
      var QQ = lW();
      return QQ.copy = function() {
        return HW(QQ, NW())
      }, iW.g.apply(QQ, arguments), YW(QQ)
    }

    function ZW(QQ) {
      var WQ;

      function XQ(QQ) {
        return null == QQ || isNaN(QQ = +QQ) ? WQ : QQ
      }
      return XQ.invert = XQ, XQ.domain = XQ.range = function(WQ) {
        return arguments.length ? (QQ = Array.from(WQ, pW), XQ) : QQ.slice()
      }, XQ.unknown = function(QQ) {
        return arguments.length ? (WQ = QQ, XQ) : WQ
      }, XQ.copy = function() {
        return ZW(QQ).unknown(WQ)
      }, QQ = arguments.length ? Array.from(QQ, pW) : [0, 1], YW(XQ)
    }

    function OW(QQ, WQ) {
      var XQ, wQ = 0,
        qQ = (QQ = QQ.slice()).length - 1,
        TQ = QQ[wQ],
        zQ = QQ[qQ];
      return zQ < TQ && (XQ = wQ, wQ = qQ, qQ = XQ, XQ = TQ, TQ = zQ, zQ = XQ), QQ[wQ] = WQ.floor(TQ), QQ[qQ] = WQ.ceil(zQ), QQ
    }

    function KW(QQ) {
      return Math.log(QQ)
    }

    function mW(QQ) {
      return Math.exp(QQ)
    }

    function MW(QQ) {
      return -Math.log(-QQ)
    }

    function QX(QQ) {
      return -Math.exp(-QQ)
    }

    function WX(QQ) {
      return isFinite(QQ) ? +("1e" + QQ) : QQ < 0 ? 0 : QQ
    }

    function XX(QQ) {
      return (WQ, XQ) => -QQ(-WQ, XQ)
    }

    function wX(QQ) {
      const WQ = QQ(KW, mW),
        XQ = WQ.domain;
      let wQ, qQ, TQ = 10;

      function zQ() {
        return wQ = function(QQ) {
          return QQ === Math.E ? Math.log : 10 === QQ && Math.log10 || 2 === QQ && Math.log2 || (QQ = Math.log(QQ), WQ => Math.log(WQ) / QQ)
        }(TQ), qQ = function(QQ) {
          return 10 === QQ ? WX : QQ === Math.E ? Math.exp : WQ => Math.pow(QQ, WQ)
        }(TQ), XQ()[0] < 0 ? (wQ = XX(wQ), qQ = XX(qQ), QQ(MW, QX)) : QQ(KW, mW), WQ
      }
      return WQ.base = function(QQ) {
        return arguments.length ? (TQ = +QQ, zQ()) : TQ
      }, WQ.domain = function(QQ) {
        return arguments.length ? (XQ(QQ), zQ()) : XQ()
      }, WQ.ticks = QQ => {
        const WQ = XQ();
        let zQ = WQ[0],
          sQ = WQ[WQ.length - 1];
        const FQ = sQ < zQ;
        FQ && ([zQ, sQ] = [sQ, zQ]);
        let gQ, JQ, rQ = wQ(zQ),
          IQ = wQ(sQ);
        const jQ = null == QQ ? 10 : +QQ;
        let BQ = [];
        if (!(TQ % 1) && IQ - rQ < jQ) {
          if (rQ = Math.floor(rQ), IQ = Math.ceil(IQ), zQ > 0) {
            for (; rQ <= IQ; ++rQ)
              for (gQ = 1; gQ < TQ; ++gQ)
                if (JQ = rQ < 0 ? gQ / qQ(-rQ) : gQ * qQ(rQ), !(JQ < zQ)) {
                  if (JQ > sQ) break;
                  BQ.push(JQ)
                }
          } else
            for (; rQ <= IQ; ++rQ)
              for (gQ = TQ - 1; gQ >= 1; --gQ)
                if (JQ = rQ > 0 ? gQ / qQ(-rQ) : gQ * qQ(rQ), !(JQ < zQ)) {
                  if (JQ > sQ) break;
                  BQ.push(JQ)
                } 2 * BQ.length < jQ && (BQ = PQ(zQ, sQ, jQ))
        } else BQ = PQ(rQ, IQ, Math.min(IQ - rQ, jQ)).map(qQ);
        return FQ ? BQ.reverse() : BQ
      }, WQ.tickFormat = (QQ, XQ) => {
        if (null == QQ && (QQ = 10), null == XQ && (XQ = 10 === TQ ? "s" : ","), "function" !== typeof XQ && (TQ % 1 || null != (XQ = AW(XQ)).precision || (XQ.trim = !0), XQ = SW(XQ)), QQ === 1 / 0) return XQ;
        const zQ = Math.max(1, TQ * QQ / WQ.ticks().length);
        return QQ => {
          let WQ = QQ / qQ(Math.round(wQ(QQ)));
          return WQ * TQ < TQ - .5 && (WQ *= TQ), WQ <= zQ ? XQ(QQ) : ""
        }
      }, WQ.nice = () => XQ(OW(XQ(), {
        floor: QQ => qQ(Math.floor(wQ(QQ))),
        ceil: QQ => qQ(Math.ceil(wQ(QQ)))
      })), WQ
    }

    function qX() {
      const QQ = wX(aW()).domain([1, 10]);
      return QQ.copy = () => HW(QQ, qX()).base(QQ.base()), iW.g.apply(QQ, arguments), QQ
    }

    function TX(QQ) {
      return function(WQ) {
        return Math.sign(WQ) * Math.log1p(Math.abs(WQ / QQ))
      }
    }

    function zX(QQ) {
      return function(WQ) {
        return Math.sign(WQ) * Math.expm1(Math.abs(WQ)) * QQ
      }
    }

    function sX(QQ) {
      var WQ = 1,
        XQ = QQ(TX(WQ), zX(WQ));
      return XQ.constant = function(XQ) {
        return arguments.length ? QQ(TX(WQ = +XQ), zX(WQ)) : WQ
      }, YW(XQ)
    }

    function FX() {
      var QQ = sX(aW());
      return QQ.copy = function() {
        return HW(QQ, FX()).constant(QQ.constant())
      }, iW.g.apply(QQ, arguments)
    }
    fW = nW({
      thousands: ",",
      grouping: [3],
      currency: ["$", ""]
    }), SW = fW.format, tW = fW.formatPrefix;
    var PX = XQ(6544);

    function gX(QQ) {
      return function(WQ) {
        return WQ < 0 ? -Math.pow(-WQ, QQ) : Math.pow(WQ, QQ)
      }
    }

    function JX(QQ) {
      return QQ < 0 ? -Math.sqrt(-QQ) : Math.sqrt(QQ)
    }

    function rX(QQ) {
      return QQ < 0 ? -QQ * QQ : QQ * QQ
    }

    function IX(QQ) {
      var WQ = QQ(UW, UW),
        XQ = 1;
      return WQ.exponent = function(WQ) {
        return arguments.length ? 1 === (XQ = +WQ) ? QQ(UW, UW) : .5 === XQ ? QQ(JX, rX) : QQ(gX(XQ), gX(1 / XQ)) : XQ
      }, YW(WQ)
    }

    function jX() {
      var QQ = IX(aW());
      return QQ.copy = function() {
        return HW(QQ, jX()).exponent(QQ.exponent())
      }, iW.g.apply(QQ, arguments), QQ
    }

    function BX() {
      return jX.apply(null, arguments).exponent(.5)
    }

    function yX(QQ) {
      return Math.sign(QQ) * QQ * QQ
    }

    function VX() {
      var QQ, WQ = lW(),
        XQ = [0, 1],
        wQ = !1;

      function qQ(XQ) {
        var qQ = function(QQ) {
          return Math.sign(QQ) * Math.sqrt(Math.abs(QQ))
        }(WQ(XQ));
        return isNaN(qQ) ? QQ : wQ ? Math.round(qQ) : qQ
      }
      return qQ.invert = function(QQ) {
        return WQ.invert(yX(QQ))
      }, qQ.domain = function(QQ) {
        return arguments.length ? (WQ.domain(QQ), qQ) : WQ.domain()
      }, qQ.range = function(QQ) {
        return arguments.length ? (WQ.range((XQ = Array.from(QQ, pW)).map(yX)), qQ) : XQ.slice()
      }, qQ.rangeRound = function(QQ) {
        return qQ.range(QQ).round(!0)
      }, qQ.round = function(QQ) {
        return arguments.length ? (wQ = !!QQ, qQ) : wQ
      }, qQ.clamp = function(QQ) {
        return arguments.length ? (WQ.clamp(QQ), qQ) : WQ.clamp()
      }, qQ.unknown = function(WQ) {
        return arguments.length ? (QQ = WQ, qQ) : QQ
      }, qQ.copy = function() {
        return VX(WQ.domain(), XQ).round(wQ).clamp(WQ.clamp()).unknown(QQ)
      }, iW.g.apply(qQ, arguments), YW(qQ)
    }

    function DX(QQ, WQ) {
      let XQ;
      if (void 0 === WQ)
        for (const wQ of QQ) null != wQ && (XQ < wQ || void 0 === XQ && wQ >= wQ) && (XQ = wQ);
      else {
        let wQ = -1;
        for (let qQ of QQ) null != (qQ = WQ(qQ, ++wQ, QQ)) && (XQ < qQ || void 0 === XQ && qQ >= qQ) && (XQ = qQ)
      }
      return XQ
    }

    function pX(QQ, WQ) {
      let XQ;
      if (void 0 === WQ)
        for (const wQ of QQ) null != wQ && (XQ > wQ || void 0 === XQ && wQ >= wQ) && (XQ = wQ);
      else {
        let wQ = -1;
        for (let qQ of QQ) null != (qQ = WQ(qQ, ++wQ, QQ)) && (XQ > qQ || void 0 === XQ && qQ >= qQ) && (XQ = qQ)
      }
      return XQ
    }

    function GX() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rQ;
      if (QQ === rQ) return UX;
      if ("function" !== typeof QQ) throw new TypeError("compare is not a function");
      return (WQ, XQ) => {
        const wQ = QQ(WQ, XQ);
        return wQ || 0 === wQ ? wQ : (0 === QQ(XQ, XQ)) - (0 === QQ(WQ, WQ))
      }
    }

    function UX(QQ, WQ) {
      return (null == QQ || !(QQ >= QQ)) - (null == WQ || !(WQ >= WQ)) || (QQ < WQ ? -1 : QQ > WQ ? 1 : 0)
    }

    function bX(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0,
        qQ = arguments.length > 4 ? arguments[4] : void 0;
      if (WQ = Math.floor(WQ), XQ = Math.floor(Math.max(0, XQ)), wQ = Math.floor(Math.min(QQ.length - 1, wQ)), !(XQ <= WQ && WQ <= wQ)) return QQ;
      for (qQ = void 0 === qQ ? UX : GX(qQ); wQ > XQ;) {
        if (wQ - XQ > 600) {
          const TQ = wQ - XQ + 1,
            zQ = WQ - XQ + 1,
            sQ = Math.log(TQ),
            FQ = .5 * Math.exp(2 * sQ / 3),
            PQ = .5 * Math.sqrt(sQ * FQ * (TQ - FQ) / TQ) * (zQ - TQ / 2 < 0 ? -1 : 1);
          bX(QQ, WQ, Math.max(XQ, Math.floor(WQ - zQ * FQ / TQ + PQ)), Math.min(wQ, Math.floor(WQ + (TQ - zQ) * FQ / TQ + PQ)), qQ)
        }
        const TQ = QQ[WQ];
        let zQ = XQ,
          sQ = wQ;
        for (vX(QQ, XQ, WQ), qQ(QQ[wQ], TQ) > 0 && vX(QQ, XQ, wQ); zQ < sQ;) {
          for (vX(QQ, zQ, sQ), ++zQ, --sQ; qQ(QQ[zQ], TQ) < 0;) ++zQ;
          for (; qQ(QQ[sQ], TQ) > 0;) --sQ
        }
        0 === qQ(QQ[XQ], TQ) ? vX(QQ, XQ, sQ) : (++sQ, vX(QQ, sQ, wQ)), sQ <= WQ && (XQ = sQ + 1), WQ <= sQ && (wQ = sQ - 1)
      }
      return QQ
    }

    function vX(QQ, WQ, XQ) {
      const wQ = QQ[WQ];
      QQ[WQ] = QQ[XQ], QQ[XQ] = wQ
    }

    function dX(QQ, WQ, XQ) {
      if (QQ = Float64Array.from(function*(QQ, WQ) {
          if (void 0 === WQ)
            for (let XQ of QQ) null != XQ && (XQ = +XQ) >= XQ && (yield XQ);
          else {
            let XQ = -1;
            for (let wQ of QQ) null != (wQ = WQ(wQ, ++XQ, QQ)) && (wQ = +wQ) >= wQ && (yield wQ)
          }
        }(QQ, XQ)), (wQ = QQ.length) && !isNaN(WQ = +WQ)) {
        if (WQ <= 0 || wQ < 2) return pX(QQ);
        if (WQ >= 1) return DX(QQ);
        var wQ, qQ = (wQ - 1) * WQ,
          TQ = Math.floor(qQ),
          zQ = DX(bX(QQ, TQ).subarray(0, TQ + 1));
        return zQ + (pX(QQ.subarray(TQ + 1)) - zQ) * (qQ - TQ)
      }
    }

    function HX(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yQ;
      if ((wQ = QQ.length) && !isNaN(WQ = +WQ)) {
        if (WQ <= 0 || wQ < 2) return +XQ(QQ[0], 0, QQ);
        if (WQ >= 1) return +XQ(QQ[wQ - 1], wQ - 1, QQ);
        var wQ, qQ = (wQ - 1) * WQ,
          TQ = Math.floor(qQ),
          zQ = +XQ(QQ[TQ], TQ, QQ);
        return zQ + (+XQ(QQ[TQ + 1], TQ + 1, QQ) - zQ) * (qQ - TQ)
      }
    }

    function aX() {
      var QQ, WQ = [],
        XQ = [],
        wQ = [];

      function qQ() {
        var QQ = 0,
          qQ = Math.max(1, XQ.length);
        for (wQ = new Array(qQ - 1); ++QQ < qQ;) wQ[QQ - 1] = HX(WQ, QQ / qQ);
        return TQ
      }

      function TQ(WQ) {
        return null == WQ || isNaN(WQ = +WQ) ? QQ : XQ[pQ(wQ, WQ)]
      }
      return TQ.invertExtent = function(QQ) {
        var qQ = XQ.indexOf(QQ);
        return qQ < 0 ? [NaN, NaN] : [qQ > 0 ? wQ[qQ - 1] : WQ[0], qQ < wQ.length ? wQ[qQ] : WQ[WQ.length - 1]]
      }, TQ.domain = function(QQ) {
        if (!arguments.length) return WQ.slice();
        WQ = [];
        for (let XQ of QQ) null == XQ || isNaN(XQ = +XQ) || WQ.push(XQ);
        return WQ.sort(rQ), qQ()
      }, TQ.range = function(QQ) {
        return arguments.length ? (XQ = Array.from(QQ), qQ()) : XQ.slice()
      }, TQ.unknown = function(WQ) {
        return arguments.length ? (QQ = WQ, TQ) : QQ
      }, TQ.quantiles = function() {
        return wQ.slice()
      }, TQ.copy = function() {
        return aX().domain(WQ).range(XQ).unknown(QQ)
      }, iW.g.apply(TQ, arguments)
    }

    function lX() {
      var QQ, WQ = 0,
        XQ = 1,
        wQ = 1,
        qQ = [.5],
        TQ = [0, 1];

      function zQ(WQ) {
        return null != WQ && WQ <= WQ ? TQ[pQ(qQ, WQ, 0, wQ)] : QQ
      }

      function sQ() {
        var QQ = -1;
        for (qQ = new Array(wQ); ++QQ < wQ;) qQ[QQ] = ((QQ + 1) * XQ - (QQ - wQ) * WQ) / (wQ + 1);
        return zQ
      }
      return zQ.domain = function(QQ) {
        return arguments.length ? ([WQ, XQ] = QQ, WQ = +WQ, XQ = +XQ, sQ()) : [WQ, XQ]
      }, zQ.range = function(QQ) {
        return arguments.length ? (wQ = (TQ = Array.from(QQ)).length - 1, sQ()) : TQ.slice()
      }, zQ.invertExtent = function(QQ) {
        var zQ = TQ.indexOf(QQ);
        return zQ < 0 ? [NaN, NaN] : zQ < 1 ? [WQ, qQ[0]] : zQ >= wQ ? [qQ[wQ - 1], XQ] : [qQ[zQ - 1], qQ[zQ]]
      }, zQ.unknown = function(WQ) {
        return arguments.length ? (QQ = WQ, zQ) : zQ
      }, zQ.thresholds = function() {
        return qQ.slice()
      }, zQ.copy = function() {
        return lX().domain([WQ, XQ]).range(TQ).unknown(QQ)
      }, iW.g.apply(YW(zQ), arguments)
    }

    function hX() {
      var QQ, WQ = [.5],
        XQ = [0, 1],
        wQ = 1;

      function qQ(qQ) {
        return null != qQ && qQ <= qQ ? XQ[pQ(WQ, qQ, 0, wQ)] : QQ
      }
      return qQ.domain = function(QQ) {
        return arguments.length ? (WQ = Array.from(QQ), wQ = Math.min(WQ.length, XQ.length - 1), qQ) : WQ.slice()
      }, qQ.range = function(QQ) {
        return arguments.length ? (XQ = Array.from(QQ), wQ = Math.min(WQ.length, XQ.length - 1), qQ) : XQ.slice()
      }, qQ.invertExtent = function(QQ) {
        var wQ = XQ.indexOf(QQ);
        return [WQ[wQ - 1], WQ[wQ]]
      }, qQ.unknown = function(WQ) {
        return arguments.length ? (QQ = WQ, qQ) : QQ
      }, qQ.copy = function() {
        return hX().domain(WQ).range(XQ).unknown(QQ)
      }, iW.g.apply(qQ, arguments)
    }
    const iX = 1e3,
      cX = 6e4,
      AX = 36e5,
      RX = 864e5,
      EX = 6048e5,
      CX = 2592e6,
      uX = 31536e6,
      LX = new Date,
      kX = new Date;

    function fX(QQ, WQ, XQ, wQ) {
      function qQ(WQ) {
        return QQ(WQ = 0 === arguments.length ? new Date : new Date(+WQ)), WQ
      }
      return qQ.floor = WQ => (QQ(WQ = new Date(+WQ)), WQ), qQ.ceil = XQ => (QQ(XQ = new Date(XQ - 1)), WQ(XQ, 1), QQ(XQ), XQ), qQ.round = QQ => {
        const WQ = qQ(QQ),
          XQ = qQ.ceil(QQ);
        return QQ - WQ < XQ - QQ ? WQ : XQ
      }, qQ.offset = (QQ, XQ) => (WQ(QQ = new Date(+QQ), null == XQ ? 1 : Math.floor(XQ)), QQ), qQ.range = (XQ, wQ, TQ) => {
        const zQ = [];
        if (XQ = qQ.ceil(XQ), TQ = null == TQ ? 1 : Math.floor(TQ), !(XQ < wQ) || !(TQ > 0)) return zQ;
        let sQ;
        do {
          zQ.push(sQ = new Date(+XQ)), WQ(XQ, TQ), QQ(XQ)
        } while (sQ < XQ && XQ < wQ);
        return zQ
      }, qQ.filter = XQ => fX((WQ => {
        if (WQ >= WQ)
          for (; QQ(WQ), !XQ(WQ);) WQ.setTime(WQ - 1)
      }), ((QQ, wQ) => {
        if (QQ >= QQ)
          if (wQ < 0)
            for (; ++wQ <= 0;)
              for (; WQ(QQ, -1), !XQ(QQ););
          else
            for (; --wQ >= 0;)
              for (; WQ(QQ, 1), !XQ(QQ););
      })), XQ && (qQ.count = (WQ, wQ) => (LX.setTime(+WQ), kX.setTime(+wQ), QQ(LX), QQ(kX), Math.floor(XQ(LX, kX))), qQ.every = QQ => (QQ = Math.floor(QQ), isFinite(QQ) && QQ > 0 ? QQ > 1 ? qQ.filter(wQ ? WQ => wQ(WQ) % QQ === 0 : WQ => qQ.count(0, WQ) % QQ === 0) : qQ : null)), qQ
    }
    const SX = fX((() => {}), ((QQ, WQ) => {
      QQ.setTime(+QQ + WQ)
    }), ((QQ, WQ) => WQ - QQ));
    SX.every = QQ => (QQ = Math.floor(QQ), isFinite(QQ) && QQ > 0 ? QQ > 1 ? fX((WQ => {
      WQ.setTime(Math.floor(WQ / QQ) * QQ)
    }), ((WQ, XQ) => {
      WQ.setTime(+WQ + XQ * QQ)
    }), ((WQ, XQ) => (XQ - WQ) / QQ)) : SX : null);
    SX.range;
    const tX = fX((QQ => {
        QQ.setTime(QQ - QQ.getMilliseconds())
      }), ((QQ, WQ) => {
        QQ.setTime(+QQ + WQ * iX)
      }), ((QQ, WQ) => (WQ - QQ) / iX), (QQ => QQ.getUTCSeconds())),
      oX = (tX.range, fX((QQ => {
        QQ.setTime(QQ - QQ.getMilliseconds() - QQ.getSeconds() * iX)
      }), ((QQ, WQ) => {
        QQ.setTime(+QQ + WQ * cX)
      }), ((QQ, WQ) => (WQ - QQ) / cX), (QQ => QQ.getMinutes()))),
      eX = (oX.range, fX((QQ => {
        QQ.setUTCSeconds(0, 0)
      }), ((QQ, WQ) => {
        QQ.setTime(+QQ + WQ * cX)
      }), ((QQ, WQ) => (WQ - QQ) / cX), (QQ => QQ.getUTCMinutes()))),
      nX = (eX.range, fX((QQ => {
        QQ.setTime(QQ - QQ.getMilliseconds() - QQ.getSeconds() * iX - QQ.getMinutes() * cX)
      }), ((QQ, WQ) => {
        QQ.setTime(+QQ + WQ * AX)
      }), ((QQ, WQ) => (WQ - QQ) / AX), (QQ => QQ.getHours()))),
      xX = (nX.range, fX((QQ => {
        QQ.setUTCMinutes(0, 0, 0)
      }), ((QQ, WQ) => {
        QQ.setTime(+QQ + WQ * AX)
      }), ((QQ, WQ) => (WQ - QQ) / AX), (QQ => QQ.getUTCHours()))),
      YX = (xX.range, fX((QQ => QQ.setHours(0, 0, 0, 0)), ((QQ, WQ) => QQ.setDate(QQ.getDate() + WQ)), ((QQ, WQ) => (WQ - QQ - (WQ.getTimezoneOffset() - QQ.getTimezoneOffset()) * cX) / RX), (QQ => QQ.getDate() - 1))),
      NX = (YX.range, fX((QQ => {
        QQ.setUTCHours(0, 0, 0, 0)
      }), ((QQ, WQ) => {
        QQ.setUTCDate(QQ.getUTCDate() + WQ)
      }), ((QQ, WQ) => (WQ - QQ) / RX), (QQ => QQ.getUTCDate() - 1))),
      ZX = (NX.range, fX((QQ => {
        QQ.setUTCHours(0, 0, 0, 0)
      }), ((QQ, WQ) => {
        QQ.setUTCDate(QQ.getUTCDate() + WQ)
      }), ((QQ, WQ) => (WQ - QQ) / RX), (QQ => Math.floor(QQ / RX))));
    ZX.range;

    function OX(QQ) {
      return fX((WQ => {
        WQ.setDate(WQ.getDate() - (WQ.getDay() + 7 - QQ) % 7), WQ.setHours(0, 0, 0, 0)
      }), ((QQ, WQ) => {
        QQ.setDate(QQ.getDate() + 7 * WQ)
      }), ((QQ, WQ) => (WQ - QQ - (WQ.getTimezoneOffset() - QQ.getTimezoneOffset()) * cX) / EX))
    }
    const KX = OX(0),
      mX = OX(1),
      MX = OX(2),
      Qw = OX(3),
      Ww = OX(4),
      Xw = OX(5),
      ww = OX(6);
    KX.range, mX.range, MX.range, Qw.range, Ww.range, Xw.range, ww.range;

    function qw(QQ) {
      return fX((WQ => {
        WQ.setUTCDate(WQ.getUTCDate() - (WQ.getUTCDay() + 7 - QQ) % 7), WQ.setUTCHours(0, 0, 0, 0)
      }), ((QQ, WQ) => {
        QQ.setUTCDate(QQ.getUTCDate() + 7 * WQ)
      }), ((QQ, WQ) => (WQ - QQ) / EX))
    }
    const Tw = qw(0),
      zw = qw(1),
      sw = qw(2),
      Fw = qw(3),
      Pw = qw(4),
      gw = qw(5),
      Jw = qw(6),
      rw = (Tw.range, zw.range, sw.range, Fw.range, Pw.range, gw.range, Jw.range, fX((QQ => {
        QQ.setDate(1), QQ.setHours(0, 0, 0, 0)
      }), ((QQ, WQ) => {
        QQ.setMonth(QQ.getMonth() + WQ)
      }), ((QQ, WQ) => WQ.getMonth() - QQ.getMonth() + 12 * (WQ.getFullYear() - QQ.getFullYear())), (QQ => QQ.getMonth()))),
      Iw = (rw.range, fX((QQ => {
        QQ.setUTCDate(1), QQ.setUTCHours(0, 0, 0, 0)
      }), ((QQ, WQ) => {
        QQ.setUTCMonth(QQ.getUTCMonth() + WQ)
      }), ((QQ, WQ) => WQ.getUTCMonth() - QQ.getUTCMonth() + 12 * (WQ.getUTCFullYear() - QQ.getUTCFullYear())), (QQ => QQ.getUTCMonth()))),
      jw = (Iw.range, fX((QQ => {
        QQ.setMonth(0, 1), QQ.setHours(0, 0, 0, 0)
      }), ((QQ, WQ) => {
        QQ.setFullYear(QQ.getFullYear() + WQ)
      }), ((QQ, WQ) => WQ.getFullYear() - QQ.getFullYear()), (QQ => QQ.getFullYear())));
    jw.every = QQ => isFinite(QQ = Math.floor(QQ)) && QQ > 0 ? fX((WQ => {
      WQ.setFullYear(Math.floor(WQ.getFullYear() / QQ) * QQ), WQ.setMonth(0, 1), WQ.setHours(0, 0, 0, 0)
    }), ((WQ, XQ) => {
      WQ.setFullYear(WQ.getFullYear() + XQ * QQ)
    })) : null;
    jw.range;
    const Bw = fX((QQ => {
      QQ.setUTCMonth(0, 1), QQ.setUTCHours(0, 0, 0, 0)
    }), ((QQ, WQ) => {
      QQ.setUTCFullYear(QQ.getUTCFullYear() + WQ)
    }), ((QQ, WQ) => WQ.getUTCFullYear() - QQ.getUTCFullYear()), (QQ => QQ.getUTCFullYear()));
    Bw.every = QQ => isFinite(QQ = Math.floor(QQ)) && QQ > 0 ? fX((WQ => {
      WQ.setUTCFullYear(Math.floor(WQ.getUTCFullYear() / QQ) * QQ), WQ.setUTCMonth(0, 1), WQ.setUTCHours(0, 0, 0, 0)
    }), ((WQ, XQ) => {
      WQ.setUTCFullYear(WQ.getUTCFullYear() + XQ * QQ)
    })) : null;
    Bw.range;

    function yw(QQ, WQ, XQ, wQ, qQ, TQ) {
      const zQ = [
        [tX, 1, iX],
        [tX, 5, 5e3],
        [tX, 15, 15e3],
        [tX, 30, 3e4],
        [TQ, 1, cX],
        [TQ, 5, 3e5],
        [TQ, 15, 9e5],
        [TQ, 30, 18e5],
        [qQ, 1, AX],
        [qQ, 3, 108e5],
        [qQ, 6, 216e5],
        [qQ, 12, 432e5],
        [wQ, 1, RX],
        [wQ, 2, 1728e5],
        [XQ, 1, EX],
        [WQ, 1, CX],
        [WQ, 3, 7776e6],
        [QQ, 1, uX]
      ];

      function sQ(WQ, XQ, wQ) {
        const qQ = Math.abs(XQ - WQ) / wQ,
          TQ = jQ((QQ => {
            let [, , WQ] = QQ;
            return WQ
          })).right(zQ, qQ);
        if (TQ === zQ.length) return QQ.every(JQ(WQ / uX, XQ / uX, wQ));
        if (0 === TQ) return SX.every(Math.max(JQ(WQ, XQ, wQ), 1));
        const [sQ, FQ] = zQ[qQ / zQ[TQ - 1][2] < zQ[TQ][2] / qQ ? TQ - 1 : TQ];
        return sQ.every(FQ)
      }
      return [function(QQ, WQ, XQ) {
        const wQ = WQ < QQ;
        wQ && ([QQ, WQ] = [WQ, QQ]);
        const qQ = XQ && "function" === typeof XQ.range ? XQ : sQ(QQ, WQ, XQ),
          TQ = qQ ? qQ.range(QQ, +WQ + 1) : [];
        return wQ ? TQ.reverse() : TQ
      }, sQ]
    }
    const [Vw, Dw] = yw(Bw, Iw, Tw, ZX, xX, eX), [pw, Gw] = yw(jw, rw, KX, YX, nX, oX);

    function Uw(QQ) {
      if (0 <= QQ.y && QQ.y < 100) {
        var WQ = new Date(-1, QQ.m, QQ.d, QQ.H, QQ.M, QQ.S, QQ.L);
        return WQ.setFullYear(QQ.y), WQ
      }
      return new Date(QQ.y, QQ.m, QQ.d, QQ.H, QQ.M, QQ.S, QQ.L)
    }

    function bw(QQ) {
      if (0 <= QQ.y && QQ.y < 100) {
        var WQ = new Date(Date.UTC(-1, QQ.m, QQ.d, QQ.H, QQ.M, QQ.S, QQ.L));
        return WQ.setUTCFullYear(QQ.y), WQ
      }
      return new Date(Date.UTC(QQ.y, QQ.m, QQ.d, QQ.H, QQ.M, QQ.S, QQ.L))
    }

    function vw(QQ, WQ, XQ) {
      return {
        y: QQ,
        m: WQ,
        d: XQ,
        H: 0,
        M: 0,
        S: 0,
        L: 0
      }
    }
    var dw, Hw, aw, lw = {
        "-": "",
        _: " ",
        0: "0"
      },
      hw = /^\s*\d+/,
      iw = /^%/,
      Aw = /[\\^$*+?|[\]().{}]/g;

    function Rw(QQ, WQ, XQ) {
      var wQ = QQ < 0 ? "-" : "",
        qQ = (wQ ? -QQ : QQ) + "",
        TQ = qQ.length;
      return wQ + (TQ < XQ ? new Array(XQ - TQ + 1).join(WQ) + qQ : qQ)
    }

    function Ew(QQ) {
      return QQ.replace(Aw, "\\$&")
    }

    function Cw(QQ) {
      return new RegExp("^(?:" + QQ.map(Ew).join("|") + ")", "i")
    }

    function uw(QQ) {
      return new Map(QQ.map(((QQ, WQ) => [QQ.toLowerCase(), WQ])))
    }

    function Lw(QQ, WQ, XQ) {
      var wQ = hw.exec(WQ.slice(XQ, XQ + 1));
      return wQ ? (QQ.w = +wQ[0], XQ + wQ[0].length) : -1
    }

    function kw(QQ, WQ, XQ) {
      var wQ = hw.exec(WQ.slice(XQ, XQ + 1));
      return wQ ? (QQ.u = +wQ[0], XQ + wQ[0].length) : -1
    }

    function fw(QQ, WQ, XQ) {
      var wQ = hw.exec(WQ.slice(XQ, XQ + 2));
      return wQ ? (QQ.U = +wQ[0], XQ + wQ[0].length) : -1
    }

    function Sw(QQ, WQ, XQ) {
      var wQ = hw.exec(WQ.slice(XQ, XQ + 2));
      return wQ ? (QQ.V = +wQ[0], XQ + wQ[0].length) : -1
    }

    function tw(QQ, WQ, XQ) {
      var wQ = hw.exec(WQ.slice(XQ, XQ + 2));
      return wQ ? (QQ.W = +wQ[0], XQ + wQ[0].length) : -1
    }

    function ow(QQ, WQ, XQ) {
      var wQ = hw.exec(WQ.slice(XQ, XQ + 4));
      return wQ ? (QQ.y = +wQ[0], XQ + wQ[0].length) : -1
    }

    function ew(QQ, WQ, XQ) {
      var wQ = hw.exec(WQ.slice(XQ, XQ + 2));
      return wQ ? (QQ.y = +wQ[0] + (+wQ[0] > 68 ? 1900 : 2e3), XQ + wQ[0].length) : -1
    }

    function nw(QQ, WQ, XQ) {
      var wQ = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(WQ.slice(XQ, XQ + 6));
      return wQ ? (QQ.Z = wQ[1] ? 0 : -(wQ[2] + (wQ[3] || "00")), XQ + wQ[0].length) : -1
    }

    function xw(QQ, WQ, XQ) {
      var wQ = hw.exec(WQ.slice(XQ, XQ + 1));
      return wQ ? (QQ.q = 3 * wQ[0] - 3, XQ + wQ[0].length) : -1
    }

    function Yw(QQ, WQ, XQ) {
      var wQ = hw.exec(WQ.slice(XQ, XQ + 2));
      return wQ ? (QQ.m = wQ[0] - 1, XQ + wQ[0].length) : -1
    }

    function Nw(QQ, WQ, XQ) {
      var wQ = hw.exec(WQ.slice(XQ, XQ + 2));
      return wQ ? (QQ.d = +wQ[0], XQ + wQ[0].length) : -1
    }

    function Zw(QQ, WQ, XQ) {
      var wQ = hw.exec(WQ.slice(XQ, XQ + 3));
      return wQ ? (QQ.m = 0, QQ.d = +wQ[0], XQ + wQ[0].length) : -1
    }

    function Ow(QQ, WQ, XQ) {
      var wQ = hw.exec(WQ.slice(XQ, XQ + 2));
      return wQ ? (QQ.H = +wQ[0], XQ + wQ[0].length) : -1
    }

    function Kw(QQ, WQ, XQ) {
      var wQ = hw.exec(WQ.slice(XQ, XQ + 2));
      return wQ ? (QQ.M = +wQ[0], XQ + wQ[0].length) : -1
    }

    function mw(QQ, WQ, XQ) {
      var wQ = hw.exec(WQ.slice(XQ, XQ + 2));
      return wQ ? (QQ.S = +wQ[0], XQ + wQ[0].length) : -1
    }

    function Mw(QQ, WQ, XQ) {
      var wQ = hw.exec(WQ.slice(XQ, XQ + 3));
      return wQ ? (QQ.L = +wQ[0], XQ + wQ[0].length) : -1
    }

    function Qq(QQ, WQ, XQ) {
      var wQ = hw.exec(WQ.slice(XQ, XQ + 6));
      return wQ ? (QQ.L = Math.floor(wQ[0] / 1e3), XQ + wQ[0].length) : -1
    }

    function Wq(QQ, WQ, XQ) {
      var wQ = iw.exec(WQ.slice(XQ, XQ + 1));
      return wQ ? XQ + wQ[0].length : -1
    }

    function Xq(QQ, WQ, XQ) {
      var wQ = hw.exec(WQ.slice(XQ));
      return wQ ? (QQ.Q = +wQ[0], XQ + wQ[0].length) : -1
    }

    function wq(QQ, WQ, XQ) {
      var wQ = hw.exec(WQ.slice(XQ));
      return wQ ? (QQ.s = +wQ[0], XQ + wQ[0].length) : -1
    }

    function qq(QQ, WQ) {
      return Rw(QQ.getDate(), WQ, 2)
    }

    function Tq(QQ, WQ) {
      return Rw(QQ.getHours(), WQ, 2)
    }

    function zq(QQ, WQ) {
      return Rw(QQ.getHours() % 12 || 12, WQ, 2)
    }

    function sq(QQ, WQ) {
      return Rw(1 + YX.count(jw(QQ), QQ), WQ, 3)
    }

    function Fq(QQ, WQ) {
      return Rw(QQ.getMilliseconds(), WQ, 3)
    }

    function Pq(QQ, WQ) {
      return Fq(QQ, WQ) + "000"
    }

    function gq(QQ, WQ) {
      return Rw(QQ.getMonth() + 1, WQ, 2)
    }

    function Jq(QQ, WQ) {
      return Rw(QQ.getMinutes(), WQ, 2)
    }

    function rq(QQ, WQ) {
      return Rw(QQ.getSeconds(), WQ, 2)
    }

    function Iq(QQ) {
      var WQ = QQ.getDay();
      return 0 === WQ ? 7 : WQ
    }

    function jq(QQ, WQ) {
      return Rw(KX.count(jw(QQ) - 1, QQ), WQ, 2)
    }

    function Bq(QQ) {
      var WQ = QQ.getDay();
      return WQ >= 4 || 0 === WQ ? Ww(QQ) : Ww.ceil(QQ)
    }

    function yq(QQ, WQ) {
      return QQ = Bq(QQ), Rw(Ww.count(jw(QQ), QQ) + (4 === jw(QQ).getDay()), WQ, 2)
    }

    function Vq(QQ) {
      return QQ.getDay()
    }

    function Dq(QQ, WQ) {
      return Rw(mX.count(jw(QQ) - 1, QQ), WQ, 2)
    }

    function pq(QQ, WQ) {
      return Rw(QQ.getFullYear() % 100, WQ, 2)
    }

    function Gq(QQ, WQ) {
      return Rw((QQ = Bq(QQ)).getFullYear() % 100, WQ, 2)
    }

    function Uq(QQ, WQ) {
      return Rw(QQ.getFullYear() % 1e4, WQ, 4)
    }

    function bq(QQ, WQ) {
      var XQ = QQ.getDay();
      return Rw((QQ = XQ >= 4 || 0 === XQ ? Ww(QQ) : Ww.ceil(QQ)).getFullYear() % 1e4, WQ, 4)
    }

    function vq(QQ) {
      var WQ = QQ.getTimezoneOffset();
      return (WQ > 0 ? "-" : (WQ *= -1, "+")) + Rw(WQ / 60 | 0, "0", 2) + Rw(WQ % 60, "0", 2)
    }

    function dq(QQ, WQ) {
      return Rw(QQ.getUTCDate(), WQ, 2)
    }

    function Hq(QQ, WQ) {
      return Rw(QQ.getUTCHours(), WQ, 2)
    }

    function aq(QQ, WQ) {
      return Rw(QQ.getUTCHours() % 12 || 12, WQ, 2)
    }

    function lq(QQ, WQ) {
      return Rw(1 + NX.count(Bw(QQ), QQ), WQ, 3)
    }

    function hq(QQ, WQ) {
      return Rw(QQ.getUTCMilliseconds(), WQ, 3)
    }

    function iq(QQ, WQ) {
      return hq(QQ, WQ) + "000"
    }

    function cq(QQ, WQ) {
      return Rw(QQ.getUTCMonth() + 1, WQ, 2)
    }

    function Aq(QQ, WQ) {
      return Rw(QQ.getUTCMinutes(), WQ, 2)
    }

    function Rq(QQ, WQ) {
      return Rw(QQ.getUTCSeconds(), WQ, 2)
    }

    function Eq(QQ) {
      var WQ = QQ.getUTCDay();
      return 0 === WQ ? 7 : WQ
    }

    function Cq(QQ, WQ) {
      return Rw(Tw.count(Bw(QQ) - 1, QQ), WQ, 2)
    }

    function uq(QQ) {
      var WQ = QQ.getUTCDay();
      return WQ >= 4 || 0 === WQ ? Pw(QQ) : Pw.ceil(QQ)
    }

    function Lq(QQ, WQ) {
      return QQ = uq(QQ), Rw(Pw.count(Bw(QQ), QQ) + (4 === Bw(QQ).getUTCDay()), WQ, 2)
    }

    function kq(QQ) {
      return QQ.getUTCDay()
    }

    function fq(QQ, WQ) {
      return Rw(zw.count(Bw(QQ) - 1, QQ), WQ, 2)
    }

    function Sq(QQ, WQ) {
      return Rw(QQ.getUTCFullYear() % 100, WQ, 2)
    }

    function tq(QQ, WQ) {
      return Rw((QQ = uq(QQ)).getUTCFullYear() % 100, WQ, 2)
    }

    function oq(QQ, WQ) {
      return Rw(QQ.getUTCFullYear() % 1e4, WQ, 4)
    }

    function eq(QQ, WQ) {
      var XQ = QQ.getUTCDay();
      return Rw((QQ = XQ >= 4 || 0 === XQ ? Pw(QQ) : Pw.ceil(QQ)).getUTCFullYear() % 1e4, WQ, 4)
    }

    function nq() {
      return "+0000"
    }

    function xq() {
      return "%"
    }

    function Yq(QQ) {
      return +QQ
    }

    function Nq(QQ) {
      return Math.floor(+QQ / 1e3)
    }

    function Zq(QQ) {
      return new Date(QQ)
    }

    function Oq(QQ) {
      return QQ instanceof Date ? +QQ : +new Date(+QQ)
    }

    function Kq(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ) {
      var gQ = lW(),
        JQ = gQ.invert,
        rQ = gQ.domain,
        IQ = PQ(".%L"),
        jQ = PQ(":%S"),
        BQ = PQ("%I:%M"),
        yQ = PQ("%I %p"),
        VQ = PQ("%a %d"),
        DQ = PQ("%b %d"),
        pQ = PQ("%B"),
        GQ = PQ("%Y");

      function UQ(QQ) {
        return (FQ(QQ) < QQ ? IQ : sQ(QQ) < QQ ? jQ : zQ(QQ) < QQ ? BQ : TQ(QQ) < QQ ? yQ : wQ(QQ) < QQ ? qQ(QQ) < QQ ? VQ : DQ : XQ(QQ) < QQ ? pQ : GQ)(QQ)
      }
      return gQ.invert = function(QQ) {
        return new Date(JQ(QQ))
      }, gQ.domain = function(QQ) {
        return arguments.length ? rQ(Array.from(QQ, Oq)) : rQ().map(Zq)
      }, gQ.ticks = function(WQ) {
        var XQ = rQ();
        return QQ(XQ[0], XQ[XQ.length - 1], null == WQ ? 10 : WQ)
      }, gQ.tickFormat = function(QQ, WQ) {
        return null == WQ ? UQ : PQ(WQ)
      }, gQ.nice = function(QQ) {
        var XQ = rQ();
        return QQ && "function" === typeof QQ.range || (QQ = WQ(XQ[0], XQ[XQ.length - 1], null == QQ ? 10 : QQ)), QQ ? rQ(OW(XQ, QQ)) : gQ
      }, gQ.copy = function() {
        return HW(gQ, Kq(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ))
      }, gQ
    }

    function mq() {
      return iW.g.apply(Kq(pw, Gw, jw, rw, KX, YX, nX, oX, tX, Hw).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
    }

    function Mq() {
      return iW.g.apply(Kq(Vw, Dw, Bw, Iw, Tw, NX, xX, eX, tX, aw).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
    }

    function QT() {
      var QQ, WQ, XQ, wQ, qQ, TQ = 0,
        zQ = 1,
        sQ = UW,
        FQ = !1;

      function PQ(WQ) {
        return null == WQ || isNaN(WQ = +WQ) ? qQ : sQ(0 === XQ ? .5 : (WQ = (wQ(WQ) - QQ) * XQ, FQ ? Math.max(0, Math.min(1, WQ)) : WQ))
      }

      function gQ(QQ) {
        return function(WQ) {
          var XQ, wQ;
          return arguments.length ? ([XQ, wQ] = WQ, sQ = QQ(XQ, wQ), PQ) : [sQ(0), sQ(1)]
        }
      }
      return PQ.domain = function(qQ) {
          return arguments.length ? ([TQ, zQ] = qQ, QQ = wQ(TQ = +TQ), WQ = wQ(zQ = +zQ), XQ = QQ === WQ ? 0 : 1 / (WQ - QQ), PQ) : [TQ, zQ]
        }, PQ.clamp = function(QQ) {
          return arguments.length ? (FQ = !!QQ, PQ) : FQ
        }, PQ.interpolator = function(QQ) {
          return arguments.length ? (sQ = QQ, PQ) : sQ
        }, PQ.range = gQ(VW), PQ.rangeRound = gQ(DW), PQ.unknown = function(QQ) {
          return arguments.length ? (qQ = QQ, PQ) : qQ
        },
        function(qQ) {
          return wQ = qQ, QQ = qQ(TQ), WQ = qQ(zQ), XQ = QQ === WQ ? 0 : 1 / (WQ - QQ), PQ
        }
    }

    function WT(QQ, WQ) {
      return WQ.domain(QQ.domain()).interpolator(QQ.interpolator()).clamp(QQ.clamp()).unknown(QQ.unknown())
    }

    function XT() {
      var QQ = YW(QT()(UW));
      return QQ.copy = function() {
        return WT(QQ, XT())
      }, iW.d.apply(QQ, arguments)
    }

    function wT() {
      var QQ = wX(QT()).domain([1, 10]);
      return QQ.copy = function() {
        return WT(QQ, wT()).base(QQ.base())
      }, iW.d.apply(QQ, arguments)
    }

    function qT() {
      var QQ = sX(QT());
      return QQ.copy = function() {
        return WT(QQ, qT()).constant(QQ.constant())
      }, iW.d.apply(QQ, arguments)
    }

    function TT() {
      var QQ = IX(QT());
      return QQ.copy = function() {
        return WT(QQ, TT()).exponent(QQ.exponent())
      }, iW.d.apply(QQ, arguments)
    }

    function zT() {
      return TT.apply(null, arguments).exponent(.5)
    }

    function sT() {
      var QQ = [],
        WQ = UW;

      function XQ(XQ) {
        if (null != XQ && !isNaN(XQ = +XQ)) return WQ((pQ(QQ, XQ, 1) - 1) / (QQ.length - 1))
      }
      return XQ.domain = function(WQ) {
        if (!arguments.length) return QQ.slice();
        QQ = [];
        for (let XQ of WQ) null == XQ || isNaN(XQ = +XQ) || QQ.push(XQ);
        return QQ.sort(rQ), XQ
      }, XQ.interpolator = function(QQ) {
        return arguments.length ? (WQ = QQ, XQ) : WQ
      }, XQ.range = function() {
        return QQ.map(((XQ, wQ) => WQ(wQ / (QQ.length - 1))))
      }, XQ.quantiles = function(WQ) {
        return Array.from({
          length: WQ + 1
        }, ((XQ, wQ) => dX(QQ, wQ / WQ)))
      }, XQ.copy = function() {
        return sT(WQ).domain(QQ)
      }, iW.d.apply(XQ, arguments)
    }

    function FT() {
      var QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ = 0,
        FQ = .5,
        PQ = 1,
        gQ = 1,
        JQ = UW,
        rQ = !1;

      function IQ(QQ) {
        return isNaN(QQ = +QQ) ? zQ : (QQ = .5 + ((QQ = +TQ(QQ)) - WQ) * (gQ * QQ < gQ * WQ ? wQ : qQ), JQ(rQ ? Math.max(0, Math.min(1, QQ)) : QQ))
      }

      function jQ(QQ) {
        return function(WQ) {
          var XQ, wQ, qQ;
          return arguments.length ? ([XQ, wQ, qQ] = WQ, JQ = function(QQ, WQ) {
            void 0 === WQ && (WQ = QQ, QQ = VW);
            for (var XQ = 0, wQ = WQ.length - 1, qQ = WQ[0], TQ = new Array(wQ < 0 ? 0 : wQ); XQ < wQ;) TQ[XQ] = QQ(qQ, qQ = WQ[++XQ]);
            return function(QQ) {
              var WQ = Math.max(0, Math.min(wQ - 1, Math.floor(QQ *= wQ)));
              return TQ[WQ](QQ - WQ)
            }
          }(QQ, [XQ, wQ, qQ]), IQ) : [JQ(0), JQ(.5), JQ(1)]
        }
      }
      return IQ.domain = function(zQ) {
          return arguments.length ? ([sQ, FQ, PQ] = zQ, QQ = TQ(sQ = +sQ), WQ = TQ(FQ = +FQ), XQ = TQ(PQ = +PQ), wQ = QQ === WQ ? 0 : .5 / (WQ - QQ), qQ = WQ === XQ ? 0 : .5 / (XQ - WQ), gQ = WQ < QQ ? -1 : 1, IQ) : [sQ, FQ, PQ]
        }, IQ.clamp = function(QQ) {
          return arguments.length ? (rQ = !!QQ, IQ) : rQ
        }, IQ.interpolator = function(QQ) {
          return arguments.length ? (JQ = QQ, IQ) : JQ
        }, IQ.range = jQ(VW), IQ.rangeRound = jQ(DW), IQ.unknown = function(QQ) {
          return arguments.length ? (zQ = QQ, IQ) : zQ
        },
        function(zQ) {
          return TQ = zQ, QQ = zQ(sQ), WQ = zQ(FQ), XQ = zQ(PQ), wQ = QQ === WQ ? 0 : .5 / (WQ - QQ), qQ = WQ === XQ ? 0 : .5 / (XQ - WQ), gQ = WQ < QQ ? -1 : 1, IQ
        }
    }

    function PT() {
      var QQ = YW(FT()(UW));
      return QQ.copy = function() {
        return WT(QQ, PT())
      }, iW.d.apply(QQ, arguments)
    }

    function gT() {
      var QQ = wX(FT()).domain([.1, 1, 10]);
      return QQ.copy = function() {
        return WT(QQ, gT()).base(QQ.base())
      }, iW.d.apply(QQ, arguments)
    }

    function JT() {
      var QQ = sX(FT());
      return QQ.copy = function() {
        return WT(QQ, JT()).constant(QQ.constant())
      }, iW.d.apply(QQ, arguments)
    }

    function rT() {
      var QQ = IX(FT());
      return QQ.copy = function() {
        return WT(QQ, rT()).exponent(QQ.exponent())
      }, iW.d.apply(QQ, arguments)
    }

    function IT() {
      return rT.apply(null, arguments).exponent(.5)
    }

    function jT(QQ, WQ) {
      if ((qQ = QQ.length) > 1)
        for (var XQ, wQ, qQ, TQ = 1, zQ = QQ[WQ[0]], sQ = zQ.length; TQ < qQ; ++TQ)
          for (wQ = zQ, zQ = QQ[WQ[TQ]], XQ = 0; XQ < sQ; ++XQ) zQ[XQ][1] += zQ[XQ][0] = isNaN(wQ[XQ][1]) ? wQ[XQ][0] : wQ[XQ][1]
    }! function(QQ) {
      dw = function(QQ) {
        var WQ = QQ.dateTime,
          XQ = QQ.date,
          wQ = QQ.time,
          qQ = QQ.periods,
          TQ = QQ.days,
          zQ = QQ.shortDays,
          sQ = QQ.months,
          FQ = QQ.shortMonths,
          PQ = Cw(qQ),
          gQ = uw(qQ),
          JQ = Cw(TQ),
          rQ = uw(TQ),
          IQ = Cw(zQ),
          jQ = uw(zQ),
          BQ = Cw(sQ),
          yQ = uw(sQ),
          VQ = Cw(FQ),
          DQ = uw(FQ),
          pQ = {
            a: function(QQ) {
              return zQ[QQ.getDay()]
            },
            A: function(QQ) {
              return TQ[QQ.getDay()]
            },
            b: function(QQ) {
              return FQ[QQ.getMonth()]
            },
            B: function(QQ) {
              return sQ[QQ.getMonth()]
            },
            c: null,
            d: qq,
            e: qq,
            f: Pq,
            g: Gq,
            G: bq,
            H: Tq,
            I: zq,
            j: sq,
            L: Fq,
            m: gq,
            M: Jq,
            p: function(QQ) {
              return qQ[+(QQ.getHours() >= 12)]
            },
            q: function(QQ) {
              return 1 + ~~(QQ.getMonth() / 3)
            },
            Q: Yq,
            s: Nq,
            S: rq,
            u: Iq,
            U: jq,
            V: yq,
            w: Vq,
            W: Dq,
            x: null,
            X: null,
            y: pq,
            Y: Uq,
            Z: vq,
            "%": xq
          },
          GQ = {
            a: function(QQ) {
              return zQ[QQ.getUTCDay()]
            },
            A: function(QQ) {
              return TQ[QQ.getUTCDay()]
            },
            b: function(QQ) {
              return FQ[QQ.getUTCMonth()]
            },
            B: function(QQ) {
              return sQ[QQ.getUTCMonth()]
            },
            c: null,
            d: dq,
            e: dq,
            f: iq,
            g: tq,
            G: eq,
            H: Hq,
            I: aq,
            j: lq,
            L: hq,
            m: cq,
            M: Aq,
            p: function(QQ) {
              return qQ[+(QQ.getUTCHours() >= 12)]
            },
            q: function(QQ) {
              return 1 + ~~(QQ.getUTCMonth() / 3)
            },
            Q: Yq,
            s: Nq,
            S: Rq,
            u: Eq,
            U: Cq,
            V: Lq,
            w: kq,
            W: fq,
            x: null,
            X: null,
            y: Sq,
            Y: oq,
            Z: nq,
            "%": xq
          },
          UQ = {
            a: function(QQ, WQ, XQ) {
              var wQ = IQ.exec(WQ.slice(XQ));
              return wQ ? (QQ.w = jQ.get(wQ[0].toLowerCase()), XQ + wQ[0].length) : -1
            },
            A: function(QQ, WQ, XQ) {
              var wQ = JQ.exec(WQ.slice(XQ));
              return wQ ? (QQ.w = rQ.get(wQ[0].toLowerCase()), XQ + wQ[0].length) : -1
            },
            b: function(QQ, WQ, XQ) {
              var wQ = VQ.exec(WQ.slice(XQ));
              return wQ ? (QQ.m = DQ.get(wQ[0].toLowerCase()), XQ + wQ[0].length) : -1
            },
            B: function(QQ, WQ, XQ) {
              var wQ = BQ.exec(WQ.slice(XQ));
              return wQ ? (QQ.m = yQ.get(wQ[0].toLowerCase()), XQ + wQ[0].length) : -1
            },
            c: function(QQ, XQ, wQ) {
              return dQ(QQ, WQ, XQ, wQ)
            },
            d: Nw,
            e: Nw,
            f: Qq,
            g: ew,
            G: ow,
            H: Ow,
            I: Ow,
            j: Zw,
            L: Mw,
            m: Yw,
            M: Kw,
            p: function(QQ, WQ, XQ) {
              var wQ = PQ.exec(WQ.slice(XQ));
              return wQ ? (QQ.p = gQ.get(wQ[0].toLowerCase()), XQ + wQ[0].length) : -1
            },
            q: xw,
            Q: Xq,
            s: wq,
            S: mw,
            u: kw,
            U: fw,
            V: Sw,
            w: Lw,
            W: tw,
            x: function(QQ, WQ, wQ) {
              return dQ(QQ, XQ, WQ, wQ)
            },
            X: function(QQ, WQ, XQ) {
              return dQ(QQ, wQ, WQ, XQ)
            },
            y: ew,
            Y: ow,
            Z: nw,
            "%": Wq
          };

        function bQ(QQ, WQ) {
          return function(XQ) {
            var wQ, qQ, TQ, zQ = [],
              sQ = -1,
              FQ = 0,
              PQ = QQ.length;
            for (XQ instanceof Date || (XQ = new Date(+XQ)); ++sQ < PQ;) 37 === QQ.charCodeAt(sQ) && (zQ.push(QQ.slice(FQ, sQ)), null != (qQ = lw[wQ = QQ.charAt(++sQ)]) ? wQ = QQ.charAt(++sQ) : qQ = "e" === wQ ? " " : "0", (TQ = WQ[wQ]) && (wQ = TQ(XQ, qQ)), zQ.push(wQ), FQ = sQ + 1);
            return zQ.push(QQ.slice(FQ, sQ)), zQ.join("")
          }
        }

        function vQ(QQ, WQ) {
          return function(XQ) {
            var wQ, qQ, TQ = vw(1900, void 0, 1);
            if (dQ(TQ, QQ, XQ += "", 0) != XQ.length) return null;
            if ("Q" in TQ) return new Date(TQ.Q);
            if ("s" in TQ) return new Date(1e3 * TQ.s + ("L" in TQ ? TQ.L : 0));
            if (WQ && !("Z" in TQ) && (TQ.Z = 0), "p" in TQ && (TQ.H = TQ.H % 12 + 12 * TQ.p), void 0 === TQ.m && (TQ.m = "q" in TQ ? TQ.q : 0), "V" in TQ) {
              if (TQ.V < 1 || TQ.V > 53) return null;
              "w" in TQ || (TQ.w = 1), "Z" in TQ ? (qQ = (wQ = bw(vw(TQ.y, 0, 1))).getUTCDay(), wQ = qQ > 4 || 0 === qQ ? zw.ceil(wQ) : zw(wQ), wQ = NX.offset(wQ, 7 * (TQ.V - 1)), TQ.y = wQ.getUTCFullYear(), TQ.m = wQ.getUTCMonth(), TQ.d = wQ.getUTCDate() + (TQ.w + 6) % 7) : (qQ = (wQ = Uw(vw(TQ.y, 0, 1))).getDay(), wQ = qQ > 4 || 0 === qQ ? mX.ceil(wQ) : mX(wQ), wQ = YX.offset(wQ, 7 * (TQ.V - 1)), TQ.y = wQ.getFullYear(), TQ.m = wQ.getMonth(), TQ.d = wQ.getDate() + (TQ.w + 6) % 7)
            } else("W" in TQ || "U" in TQ) && ("w" in TQ || (TQ.w = "u" in TQ ? TQ.u % 7 : "W" in TQ ? 1 : 0), qQ = "Z" in TQ ? bw(vw(TQ.y, 0, 1)).getUTCDay() : Uw(vw(TQ.y, 0, 1)).getDay(), TQ.m = 0, TQ.d = "W" in TQ ? (TQ.w + 6) % 7 + 7 * TQ.W - (qQ + 5) % 7 : TQ.w + 7 * TQ.U - (qQ + 6) % 7);
            return "Z" in TQ ? (TQ.H += TQ.Z / 100 | 0, TQ.M += TQ.Z % 100, bw(TQ)) : Uw(TQ)
          }
        }

        function dQ(QQ, WQ, XQ, wQ) {
          for (var qQ, TQ, zQ = 0, sQ = WQ.length, FQ = XQ.length; zQ < sQ;) {
            if (wQ >= FQ) return -1;
            if (37 === (qQ = WQ.charCodeAt(zQ++))) {
              if (qQ = WQ.charAt(zQ++), !(TQ = UQ[qQ in lw ? WQ.charAt(zQ++) : qQ]) || (wQ = TQ(QQ, XQ, wQ)) < 0) return -1
            } else if (qQ != XQ.charCodeAt(wQ++)) return -1
          }
          return wQ
        }
        return pQ.x = bQ(XQ, pQ), pQ.X = bQ(wQ, pQ), pQ.c = bQ(WQ, pQ), GQ.x = bQ(XQ, GQ), GQ.X = bQ(wQ, GQ), GQ.c = bQ(WQ, GQ), {
          format: function(QQ) {
            var WQ = bQ(QQ += "", pQ);
            return WQ.toString = function() {
              return QQ
            }, WQ
          },
          parse: function(QQ) {
            var WQ = vQ(QQ += "", !1);
            return WQ.toString = function() {
              return QQ
            }, WQ
          },
          utcFormat: function(QQ) {
            var WQ = bQ(QQ += "", GQ);
            return WQ.toString = function() {
              return QQ
            }, WQ
          },
          utcParse: function(QQ) {
            var WQ = vQ(QQ += "", !0);
            return WQ.toString = function() {
              return QQ
            }, WQ
          }
        }
      }(QQ), Hw = dw.format, dw.parse, aw = dw.utcFormat, dw.utcParse
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
    var BT = XQ(6605),
      yT = XQ(6484);

    function VT(QQ) {
      for (var WQ = QQ.length, XQ = new Array(WQ); --WQ >= 0;) XQ[WQ] = WQ;
      return XQ
    }

    function DT(QQ, WQ) {
      return QQ[WQ]
    }

    function pT(QQ) {
      const WQ = [];
      return WQ.key = QQ, WQ
    }
    var GT = XQ(6546),
      UT = XQ.n(GT),
      bT = XQ(6571),
      vT = XQ.n(bT),
      dT = XQ(5766),
      HT = XQ.n(dT),
      aT = XQ(5622),
      lT = XQ.n(aT),
      hT = XQ(5523),
      iT = XQ.n(hT),
      cT = XQ(5545),
      AT = XQ.n(cT),
      RT = XQ(6584),
      ET = XQ.n(RT),
      CT = XQ(5536),
      uT = XQ.n(CT),
      LT = XQ(6432),
      kT = XQ.n(LT),
      fT = XQ(6590),
      ST = XQ.n(fT),
      tT = XQ(5866),
      oT = XQ.n(tT),
      eT = XQ(6593),
      nT = XQ.n(eT);

    function xT(QQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return YT(QQ)
      }(QQ) || function(QQ) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(QQ)) return Array.from(QQ)
      }(QQ) || function(QQ, WQ) {
        if (!QQ) return;
        if ("string" === typeof QQ) return YT(QQ, WQ);
        var XQ = Object.prototype.toString.call(QQ).slice(8, -1);
        "Object" === XQ && QQ.constructor && (XQ = QQ.constructor.name);
        if ("Map" === XQ || "Set" === XQ) return Array.from(QQ);
        if ("Arguments" === XQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(XQ)) return YT(QQ, WQ)
      }(QQ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function YT(QQ, WQ) {
      (null == WQ || WQ > QQ.length) && (WQ = QQ.length);
      for (var XQ = 0, wQ = new Array(WQ); XQ < WQ; XQ++) wQ[XQ] = QQ[XQ];
      return wQ
    }
    var NT = function(QQ) {
        return QQ
      },
      ZT = {
        "@@functional/placeholder": !0
      },
      OT = function(QQ) {
        return QQ === ZT
      },
      KT = function(QQ) {
        return function WQ() {
          return 0 === arguments.length || 1 === arguments.length && OT(arguments.length <= 0 ? void 0 : arguments[0]) ? WQ : QQ.apply(void 0, arguments)
        }
      },
      mT = function QQ(WQ, XQ) {
        return 1 === WQ ? XQ : KT((function() {
          for (var wQ = arguments.length, qQ = new Array(wQ), TQ = 0; TQ < wQ; TQ++) qQ[TQ] = arguments[TQ];
          var zQ = qQ.filter((function(QQ) {
            return QQ !== ZT
          })).length;
          return zQ >= WQ ? XQ.apply(void 0, qQ) : QQ(WQ - zQ, KT((function() {
            for (var QQ = arguments.length, WQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) WQ[wQ] = arguments[wQ];
            var TQ = qQ.map((function(QQ) {
              return OT(QQ) ? WQ.shift() : QQ
            }));
            return XQ.apply(void 0, xT(TQ).concat(WQ))
          })))
        }))
      },
      MT = function(QQ) {
        return mT(QQ.length, QQ)
      },
      Qz = function(QQ, WQ) {
        for (var XQ = [], wQ = QQ; wQ < WQ; ++wQ) XQ[wQ - QQ] = wQ;
        return XQ
      },
      Wz = MT((function(QQ, WQ) {
        return Array.isArray(WQ) ? WQ.map(QQ) : Object.keys(WQ).map((function(QQ) {
          return WQ[QQ]
        })).map(QQ)
      })),
      Xz = function() {
        for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
        if (!WQ.length) return NT;
        var wQ = WQ.reverse(),
          qQ = wQ[0],
          TQ = wQ.slice(1);
        return function() {
          return TQ.reduce((function(QQ, WQ) {
            return WQ(QQ)
          }), qQ.apply(void 0, arguments))
        }
      },
      wz = function(QQ) {
        return Array.isArray(QQ) ? QQ.reverse() : QQ.split("").reverse.join("")
      },
      qz = function(QQ) {
        var WQ = null,
          XQ = null;
        return function() {
          for (var wQ = arguments.length, qQ = new Array(wQ), TQ = 0; TQ < wQ; TQ++) qQ[TQ] = arguments[TQ];
          return WQ && qQ.every((function(QQ, XQ) {
            return QQ === WQ[XQ]
          })) ? XQ : (WQ = qQ, XQ = QQ.apply(void 0, qQ))
        }
      };
    const Tz = {
      rangeStep: function(QQ, WQ, XQ) {
        for (var wQ = new(nT())(QQ), qQ = 0, TQ = []; wQ.lt(WQ) && qQ < 1e5;) TQ.push(wQ.toNumber()), wQ = wQ.add(XQ), qQ++;
        return TQ
      },
      getDigitCount: function(QQ) {
        return 0 === QQ ? 1 : Math.floor(new(nT())(QQ).abs().log(10).toNumber()) + 1
      },
      interpolateNumber: MT((function(QQ, WQ, XQ) {
        var wQ = +QQ;
        return wQ + XQ * (+WQ - wQ)
      })),
      uninterpolateNumber: MT((function(QQ, WQ, XQ) {
        var wQ = WQ - +QQ;
        return (XQ - QQ) / (wQ = wQ || 1 / 0)
      })),
      uninterpolateTruncation: MT((function(QQ, WQ, XQ) {
        var wQ = WQ - +QQ;
        return wQ = wQ || 1 / 0, Math.max(0, Math.min(1, (XQ - QQ) / wQ))
      }))
    };

    function zz(QQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return Pz(QQ)
      }(QQ) || function(QQ) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(QQ)) return Array.from(QQ)
      }(QQ) || Fz(QQ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function sz(QQ, WQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return QQ
      }(QQ) || function(QQ, WQ) {
        if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(QQ))) return;
        var XQ = [],
          wQ = !0,
          qQ = !1,
          TQ = void 0;
        try {
          for (var zQ, sQ = QQ[Symbol.iterator](); !(wQ = (zQ = sQ.next()).done) && (XQ.push(zQ.value), !WQ || XQ.length !== WQ); wQ = !0);
        } catch (FQ) {
          qQ = !0, TQ = FQ
        } finally {
          try {
            wQ || null == sQ.return || sQ.return()
          } finally {
            if (qQ) throw TQ
          }
        }
        return XQ
      }(QQ, WQ) || Fz(QQ, WQ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Fz(QQ, WQ) {
      if (QQ) {
        if ("string" === typeof QQ) return Pz(QQ, WQ);
        var XQ = Object.prototype.toString.call(QQ).slice(8, -1);
        return "Object" === XQ && QQ.constructor && (XQ = QQ.constructor.name), "Map" === XQ || "Set" === XQ ? Array.from(QQ) : "Arguments" === XQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(XQ) ? Pz(QQ, WQ) : void 0
      }
    }

    function Pz(QQ, WQ) {
      (null == WQ || WQ > QQ.length) && (WQ = QQ.length);
      for (var XQ = 0, wQ = new Array(WQ); XQ < WQ; XQ++) wQ[XQ] = QQ[XQ];
      return wQ
    }

    function gz(QQ) {
      var WQ = sz(QQ, 2),
        XQ = WQ[0],
        wQ = WQ[1],
        qQ = XQ,
        TQ = wQ;
      return XQ > wQ && (qQ = wQ, TQ = XQ), [qQ, TQ]
    }

    function Jz(QQ, WQ, XQ) {
      if (QQ.lte(0)) return new(nT())(0);
      var wQ = Tz.getDigitCount(QQ.toNumber()),
        qQ = new(nT())(10).pow(wQ),
        TQ = QQ.div(qQ),
        zQ = 1 !== wQ ? .05 : .1,
        sQ = new(nT())(Math.ceil(TQ.div(zQ).toNumber())).add(XQ).mul(zQ).mul(qQ);
      return WQ ? sQ : new(nT())(Math.ceil(sQ))
    }

    function rz(QQ, WQ, XQ) {
      var wQ = 1,
        qQ = new(nT())(QQ);
      if (!qQ.isint() && XQ) {
        var TQ = Math.abs(QQ);
        TQ < 1 ? (wQ = new(nT())(10).pow(Tz.getDigitCount(QQ) - 1), qQ = new(nT())(Math.floor(qQ.div(wQ).toNumber())).mul(wQ)) : TQ > 1 && (qQ = new(nT())(Math.floor(QQ)))
      } else 0 === QQ ? qQ = new(nT())(Math.floor((WQ - 1) / 2)) : XQ || (qQ = new(nT())(Math.floor(QQ)));
      var zQ = Math.floor((WQ - 1) / 2);
      return Xz(Wz((function(QQ) {
        return qQ.add(new(nT())(QQ - zQ).mul(wQ)).toNumber()
      })), Qz)(0, WQ)
    }

    function Iz(QQ, WQ, XQ, wQ) {
      var qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      if (!Number.isFinite((WQ - QQ) / (XQ - 1))) return {
        step: new(nT())(0),
        tickMin: new(nT())(0),
        tickMax: new(nT())(0)
      };
      var TQ, zQ = Jz(new(nT())(WQ).sub(QQ).div(XQ - 1), wQ, qQ);
      TQ = QQ <= 0 && WQ >= 0 ? new(nT())(0) : (TQ = new(nT())(QQ).add(WQ).div(2)).sub(new(nT())(TQ).mod(zQ));
      var sQ = Math.ceil(TQ.sub(QQ).div(zQ).toNumber()),
        FQ = Math.ceil(new(nT())(WQ).sub(TQ).div(zQ).toNumber()),
        PQ = sQ + FQ + 1;
      return PQ > XQ ? Iz(QQ, WQ, XQ, wQ, qQ + 1) : (PQ < XQ && (FQ = WQ > 0 ? FQ + (XQ - PQ) : FQ, sQ = WQ > 0 ? sQ : sQ + (XQ - PQ)), {
        step: zQ,
        tickMin: TQ.sub(new(nT())(sQ).mul(zQ)),
        tickMax: TQ.add(new(nT())(FQ).mul(zQ))
      })
    }
    var jz = qz((function(QQ) {
        var WQ = sz(QQ, 2),
          XQ = WQ[0],
          wQ = WQ[1],
          qQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          TQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          zQ = Math.max(qQ, 2),
          sQ = sz(gz([XQ, wQ]), 2),
          FQ = sQ[0],
          PQ = sQ[1];
        if (FQ === -1 / 0 || PQ === 1 / 0) {
          var gQ = PQ === 1 / 0 ? [FQ].concat(zz(Qz(0, qQ - 1).map((function() {
            return 1 / 0
          })))) : [].concat(zz(Qz(0, qQ - 1).map((function() {
            return -1 / 0
          }))), [PQ]);
          return XQ > wQ ? wz(gQ) : gQ
        }
        if (FQ === PQ) return rz(FQ, qQ, TQ);
        var JQ = Iz(FQ, PQ, zQ, TQ),
          rQ = JQ.step,
          IQ = JQ.tickMin,
          jQ = JQ.tickMax,
          BQ = Tz.rangeStep(IQ, jQ.add(new(nT())(.1).mul(rQ)), rQ);
        return XQ > wQ ? wz(BQ) : BQ
      })),
      Bz = (qz((function(QQ) {
        var WQ = sz(QQ, 2),
          XQ = WQ[0],
          wQ = WQ[1],
          qQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          TQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          zQ = Math.max(qQ, 2),
          sQ = sz(gz([XQ, wQ]), 2),
          FQ = sQ[0],
          PQ = sQ[1];
        if (FQ === -1 / 0 || PQ === 1 / 0) return [XQ, wQ];
        if (FQ === PQ) return rz(FQ, qQ, TQ);
        var gQ = Jz(new(nT())(PQ).sub(FQ).div(zQ - 1), TQ, 0),
          JQ = Xz(Wz((function(QQ) {
            return new(nT())(FQ).add(new(nT())(QQ).mul(gQ)).toNumber()
          })), Qz)(0, zQ).filter((function(QQ) {
            return QQ >= FQ && QQ <= PQ
          }));
        return XQ > wQ ? wz(JQ) : JQ
      })), qz((function(QQ, WQ) {
        var XQ = sz(QQ, 2),
          wQ = XQ[0],
          qQ = XQ[1],
          TQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          zQ = sz(gz([wQ, qQ]), 2),
          sQ = zQ[0],
          FQ = zQ[1];
        if (sQ === -1 / 0 || FQ === 1 / 0) return [wQ, qQ];
        if (sQ === FQ) return [sQ];
        var PQ = Math.max(WQ, 2),
          gQ = Jz(new(nT())(FQ).sub(sQ).div(PQ - 1), TQ, 0),
          JQ = [].concat(zz(Tz.rangeStep(new(nT())(sQ), new(nT())(FQ).sub(new(nT())(.99).mul(gQ)), gQ)), [FQ]);
        return wQ > qQ ? wz(JQ) : JQ
      }))),
      yz = XQ(6596),
      Vz = XQ(5520),
      Dz = XQ(5775),
      pz = XQ(6601);

    function Gz(QQ) {
      return Gz = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, Gz(QQ)
    }

    function Uz(QQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return bz(QQ)
      }(QQ) || function(QQ) {
        if ("undefined" !== typeof Symbol && null != QQ[Symbol.iterator] || null != QQ["@@iterator"]) return Array.from(QQ)
      }(QQ) || function(QQ, WQ) {
        if (!QQ) return;
        if ("string" === typeof QQ) return bz(QQ, WQ);
        var XQ = Object.prototype.toString.call(QQ).slice(8, -1);
        "Object" === XQ && QQ.constructor && (XQ = QQ.constructor.name);
        if ("Map" === XQ || "Set" === XQ) return Array.from(QQ);
        if ("Arguments" === XQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(XQ)) return bz(QQ, WQ)
      }(QQ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function bz(QQ, WQ) {
      (null == WQ || WQ > QQ.length) && (WQ = QQ.length);
      for (var XQ = 0, wQ = new Array(WQ); XQ < WQ; XQ++) wQ[XQ] = QQ[XQ];
      return wQ
    }

    function vz(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function dz(QQ) {
      for (var WQ = 1; WQ < arguments.length; WQ++) {
        var XQ = null != arguments[WQ] ? arguments[WQ] : {};
        WQ % 2 ? vz(Object(XQ), !0).forEach((function(WQ) {
          Hz(QQ, WQ, XQ[WQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : vz(Object(XQ)).forEach((function(WQ) {
          Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
        }))
      }
      return QQ
    }

    function Hz(QQ, WQ, XQ) {
      return (WQ = function(QQ) {
        var WQ = function(QQ, WQ) {
          if ("object" != Gz(QQ) || !QQ) return QQ;
          var XQ = QQ[Symbol.toPrimitive];
          if (void 0 !== XQ) {
            var wQ = XQ.call(QQ, WQ || "default");
            if ("object" != Gz(wQ)) return wQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == Gz(WQ) ? WQ : WQ + ""
      }(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }

    function az(QQ, WQ, XQ) {
      return HT()(QQ) || HT()(WQ) ? XQ : (0, Vz.B)(WQ) ? AT()(QQ, WQ, XQ) : lT()(WQ) ? WQ(QQ) : XQ
    }

    function lz(QQ, WQ, XQ, wQ) {
      var qQ = ET()(QQ, (function(QQ) {
        return az(QQ, WQ)
      }));
      if ("number" === XQ) {
        var TQ = qQ.filter((function(QQ) {
          return (0, Vz.D)(QQ) || parseFloat(QQ)
        }));
        return TQ.length ? [vT()(TQ), UT()(TQ)] : [1 / 0, -1 / 0]
      }
      return (wQ ? qQ.filter((function(QQ) {
        return !HT()(QQ)
      })) : qQ).map((function(QQ) {
        return (0, Vz.B)(QQ) || QQ instanceof Date ? QQ : ""
      }))
    }
    var hz = function(QQ) {
        var WQ, XQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          wQ = arguments.length > 2 ? arguments[2] : void 0,
          qQ = arguments.length > 3 ? arguments[3] : void 0,
          TQ = -1,
          zQ = null !== (WQ = null === XQ || void 0 === XQ ? void 0 : XQ.length) && void 0 !== WQ ? WQ : 0;
        if (zQ <= 1) return 0;
        if (qQ && "angleAxis" === qQ.axisType && Math.abs(Math.abs(qQ.range[1] - qQ.range[0]) - 360) <= 1e-6)
          for (var sQ = qQ.range, FQ = 0; FQ < zQ; FQ++) {
            var PQ = FQ > 0 ? wQ[FQ - 1].coordinate : wQ[zQ - 1].coordinate,
              gQ = wQ[FQ].coordinate,
              JQ = FQ >= zQ - 1 ? wQ[0].coordinate : wQ[FQ + 1].coordinate,
              rQ = void 0;
            if ((0, Vz.H)(gQ - PQ) !== (0, Vz.H)(JQ - gQ)) {
              var IQ = [];
              if ((0, Vz.H)(JQ - gQ) === (0, Vz.H)(sQ[1] - sQ[0])) {
                rQ = JQ;
                var jQ = gQ + sQ[1] - sQ[0];
                IQ[0] = Math.min(jQ, (jQ + PQ) / 2), IQ[1] = Math.max(jQ, (jQ + PQ) / 2)
              } else {
                rQ = PQ;
                var BQ = JQ + sQ[1] - sQ[0];
                IQ[0] = Math.min(gQ, (BQ + gQ) / 2), IQ[1] = Math.max(gQ, (BQ + gQ) / 2)
              }
              var yQ = [Math.min(gQ, (rQ + gQ) / 2), Math.max(gQ, (rQ + gQ) / 2)];
              if (QQ > yQ[0] && QQ <= yQ[1] || QQ >= IQ[0] && QQ <= IQ[1]) {
                TQ = wQ[FQ].index;
                break
              }
            } else {
              var VQ = Math.min(PQ, JQ),
                DQ = Math.max(PQ, JQ);
              if (QQ > (VQ + gQ) / 2 && QQ <= (DQ + gQ) / 2) {
                TQ = wQ[FQ].index;
                break
              }
            }
          } else
            for (var pQ = 0; pQ < zQ; pQ++)
              if (0 === pQ && QQ <= (XQ[pQ].coordinate + XQ[pQ + 1].coordinate) / 2 || pQ > 0 && pQ < zQ - 1 && QQ > (XQ[pQ].coordinate + XQ[pQ - 1].coordinate) / 2 && QQ <= (XQ[pQ].coordinate + XQ[pQ + 1].coordinate) / 2 || pQ === zQ - 1 && QQ > (XQ[pQ].coordinate + XQ[pQ - 1].coordinate) / 2) {
                TQ = XQ[pQ].index;
                break
              } return TQ
      },
      iz = function(QQ) {
        var WQ, XQ, wQ = QQ.type.displayName,
          qQ = null !== (WQ = QQ.type) && void 0 !== WQ && WQ.defaultProps ? dz(dz({}, QQ.type.defaultProps), QQ.props) : QQ.props,
          TQ = qQ.stroke,
          zQ = qQ.fill;
        switch (wQ) {
          case "Line":
            XQ = TQ;
            break;
          case "Area":
          case "Radar":
            XQ = TQ && "none" !== TQ ? TQ : zQ;
            break;
          default:
            XQ = zQ
        }
        return XQ
      },
      cz = function(QQ) {
        var WQ = QQ.barSize,
          XQ = QQ.totalSize,
          wQ = QQ.stackGroups,
          qQ = void 0 === wQ ? {} : wQ;
        if (!qQ) return {};
        for (var TQ = {}, zQ = Object.keys(qQ), sQ = 0, FQ = zQ.length; sQ < FQ; sQ++)
          for (var PQ = qQ[zQ[sQ]].stackGroups, gQ = Object.keys(PQ), JQ = 0, rQ = gQ.length; JQ < rQ; JQ++) {
            var IQ = PQ[gQ[JQ]],
              jQ = IQ.items,
              BQ = IQ.cateAxisId,
              yQ = jQ.filter((function(QQ) {
                return (0, Dz.m)(QQ.type).indexOf("Bar") >= 0
              }));
            if (yQ && yQ.length) {
              var VQ = yQ[0].type.defaultProps,
                DQ = void 0 !== VQ ? dz(dz({}, VQ), yQ[0].props) : yQ[0].props,
                pQ = DQ.barSize,
                GQ = DQ[BQ];
              TQ[GQ] || (TQ[GQ] = []);
              var UQ = HT()(pQ) ? WQ : pQ;
              TQ[GQ].push({
                item: yQ[0],
                stackList: yQ.slice(1),
                barSize: HT()(UQ) ? void 0 : (0, Vz.o)(UQ, XQ, 0)
              })
            }
          }
        return TQ
      },
      Az = function(QQ) {
        var WQ = QQ.barGap,
          XQ = QQ.barCategoryGap,
          wQ = QQ.bandSize,
          qQ = QQ.sizeList,
          TQ = void 0 === qQ ? [] : qQ,
          zQ = QQ.maxBarSize,
          sQ = TQ.length;
        if (sQ < 1) return null;
        var FQ, PQ = (0, Vz.o)(WQ, wQ, 0, !0),
          gQ = [];
        if (TQ[0].barSize === +TQ[0].barSize) {
          var JQ = !1,
            rQ = wQ / sQ,
            IQ = TQ.reduce((function(QQ, WQ) {
              return QQ + WQ.barSize || 0
            }), 0);
          (IQ += (sQ - 1) * PQ) >= wQ && (IQ -= (sQ - 1) * PQ, PQ = 0), IQ >= wQ && rQ > 0 && (JQ = !0, IQ = sQ * (rQ *= .9));
          var jQ = {
            offset: ((wQ - IQ) / 2 | 0) - PQ,
            size: 0
          };
          FQ = TQ.reduce((function(QQ, WQ) {
            var XQ = {
                item: WQ.item,
                position: {
                  offset: jQ.offset + jQ.size + PQ,
                  size: JQ ? rQ : WQ.barSize
                }
              },
              wQ = [].concat(Uz(QQ), [XQ]);
            return jQ = wQ[wQ.length - 1].position, WQ.stackList && WQ.stackList.length && WQ.stackList.forEach((function(QQ) {
              wQ.push({
                item: QQ,
                position: jQ
              })
            })), wQ
          }), gQ)
        } else {
          var BQ = (0, Vz.o)(XQ, wQ, 0, !0);
          wQ - 2 * BQ - (sQ - 1) * PQ <= 0 && (PQ = 0);
          var yQ = (wQ - 2 * BQ - (sQ - 1) * PQ) / sQ;
          yQ > 1 && (yQ >>= 0);
          var VQ = zQ === +zQ ? Math.min(yQ, zQ) : yQ;
          FQ = TQ.reduce((function(QQ, WQ, XQ) {
            var wQ = [].concat(Uz(QQ), [{
              item: WQ.item,
              position: {
                offset: BQ + (yQ + PQ) * XQ + (yQ - VQ) / 2,
                size: VQ
              }
            }]);
            return WQ.stackList && WQ.stackList.length && WQ.stackList.forEach((function(QQ) {
              wQ.push({
                item: QQ,
                position: wQ[wQ.length - 1].position
              })
            })), wQ
          }), gQ)
        }
        return FQ
      },
      Rz = function(QQ, WQ, XQ, wQ) {
        var qQ = XQ.children,
          TQ = XQ.width,
          zQ = XQ.margin,
          sQ = TQ - (zQ.left || 0) - (zQ.right || 0),
          FQ = (0, pz.e)({
            children: qQ,
            legendWidth: sQ
          });
        if (FQ) {
          var PQ = wQ || {},
            gQ = PQ.width,
            JQ = PQ.height,
            rQ = FQ.align,
            IQ = FQ.verticalAlign,
            jQ = FQ.layout;
          if (("vertical" === jQ || "horizontal" === jQ && "middle" === IQ) && "center" !== rQ && (0, Vz.D)(QQ[rQ])) return dz(dz({}, QQ), {}, Hz({}, rQ, QQ[rQ] + (gQ || 0)));
          if (("horizontal" === jQ || "vertical" === jQ && "center" === rQ) && "middle" !== IQ && (0, Vz.D)(QQ[IQ])) return dz(dz({}, QQ), {}, Hz({}, IQ, QQ[IQ] + (JQ || 0)))
        }
        return QQ
      },
      Ez = function(QQ, WQ, XQ, wQ, qQ) {
        var TQ = WQ.props.children,
          zQ = (0, Dz.h)(TQ, yz.d).filter((function(QQ) {
            return function(QQ, WQ, XQ) {
              return !!HT()(WQ) || ("horizontal" === QQ ? "yAxis" === WQ : "vertical" === QQ || "x" === XQ ? "xAxis" === WQ : "y" !== XQ || "yAxis" === WQ)
            }(wQ, qQ, QQ.props.direction)
          }));
        if (zQ && zQ.length) {
          var sQ = zQ.map((function(QQ) {
            return QQ.props.dataKey
          }));
          return QQ.reduce((function(QQ, WQ) {
            var wQ = az(WQ, XQ);
            if (HT()(wQ)) return QQ;
            var qQ = Array.isArray(wQ) ? [vT()(wQ), UT()(wQ)] : [wQ, wQ],
              TQ = sQ.reduce((function(QQ, XQ) {
                var wQ = az(WQ, XQ, 0),
                  TQ = qQ[0] - Math.abs(Array.isArray(wQ) ? wQ[0] : wQ),
                  zQ = qQ[1] + Math.abs(Array.isArray(wQ) ? wQ[1] : wQ);
                return [Math.min(TQ, QQ[0]), Math.max(zQ, QQ[1])]
              }), [1 / 0, -1 / 0]);
            return [Math.min(TQ[0], QQ[0]), Math.max(TQ[1], QQ[1])]
          }), [1 / 0, -1 / 0])
        }
        return null
      },
      Cz = function(QQ, WQ, XQ, wQ, qQ) {
        var TQ = WQ.map((function(WQ) {
          return Ez(QQ, WQ, XQ, qQ, wQ)
        })).filter((function(QQ) {
          return !HT()(QQ)
        }));
        return TQ && TQ.length ? TQ.reduce((function(QQ, WQ) {
          return [Math.min(QQ[0], WQ[0]), Math.max(QQ[1], WQ[1])]
        }), [1 / 0, -1 / 0]) : null
      },
      uz = function(QQ, WQ, XQ, wQ, qQ) {
        var TQ = WQ.map((function(WQ) {
          var TQ = WQ.props.dataKey;
          return "number" === XQ && TQ && Ez(QQ, WQ, TQ, wQ) || lz(QQ, TQ, XQ, qQ)
        }));
        if ("number" === XQ) return TQ.reduce((function(QQ, WQ) {
          return [Math.min(QQ[0], WQ[0]), Math.max(QQ[1], WQ[1])]
        }), [1 / 0, -1 / 0]);
        var zQ = {};
        return TQ.reduce((function(QQ, WQ) {
          for (var XQ = 0, wQ = WQ.length; XQ < wQ; XQ++) zQ[WQ[XQ]] || (zQ[WQ[XQ]] = !0, QQ.push(WQ[XQ]));
          return QQ
        }), [])
      },
      Lz = function(QQ, WQ) {
        return "horizontal" === QQ && "xAxis" === WQ || "vertical" === QQ && "yAxis" === WQ || "centric" === QQ && "angleAxis" === WQ || "radial" === QQ && "radiusAxis" === WQ
      },
      kz = function(QQ, WQ, XQ, wQ) {
        if (wQ) return QQ.map((function(QQ) {
          return QQ.coordinate
        }));
        var qQ, TQ, zQ = QQ.map((function(QQ) {
          return QQ.coordinate === WQ && (qQ = !0), QQ.coordinate === XQ && (TQ = !0), QQ.coordinate
        }));
        return qQ || zQ.push(WQ), TQ || zQ.push(XQ), zQ
      },
      fz = function(QQ, WQ, XQ) {
        if (!QQ) return null;
        var wQ = QQ.scale,
          qQ = QQ.duplicateDomain,
          TQ = QQ.type,
          zQ = QQ.range,
          sQ = "scaleBand" === QQ.realScaleType ? wQ.bandwidth() / 2 : 2,
          FQ = (WQ || XQ) && "category" === TQ && wQ.bandwidth ? wQ.bandwidth() / sQ : 0;
        return FQ = "angleAxis" === QQ.axisType && (null === zQ || void 0 === zQ ? void 0 : zQ.length) >= 2 ? 2 * (0, Vz.H)(zQ[0] - zQ[1]) * FQ : FQ, WQ && (QQ.ticks || QQ.niceTicks) ? (QQ.ticks || QQ.niceTicks).map((function(QQ) {
          var WQ = qQ ? qQ.indexOf(QQ) : QQ;
          return {
            coordinate: wQ(WQ) + FQ,
            value: QQ,
            offset: FQ
          }
        })).filter((function(QQ) {
          return !uT()(QQ.coordinate)
        })) : QQ.isCategorical && QQ.categoricalDomain ? QQ.categoricalDomain.map((function(QQ, WQ) {
          return {
            coordinate: wQ(QQ) + FQ,
            value: QQ,
            index: WQ,
            offset: FQ
          }
        })) : wQ.ticks && !XQ ? wQ.ticks(QQ.tickCount).map((function(QQ) {
          return {
            coordinate: wQ(QQ) + FQ,
            value: QQ,
            offset: FQ
          }
        })) : wQ.domain().map((function(QQ, WQ) {
          return {
            coordinate: wQ(QQ) + FQ,
            value: qQ ? qQ[QQ] : QQ,
            index: WQ,
            offset: FQ
          }
        }))
      },
      Sz = new WeakMap,
      tz = function(QQ, WQ) {
        if ("function" !== typeof WQ) return QQ;
        Sz.has(QQ) || Sz.set(QQ, new WeakMap);
        var XQ = Sz.get(QQ);
        if (XQ.has(WQ)) return XQ.get(WQ);
        var wQ = function() {
          QQ.apply(void 0, arguments), WQ.apply(void 0, arguments)
        };
        return XQ.set(WQ, wQ), wQ
      },
      oz = function(QQ, WQ, XQ) {
        var TQ = QQ.scale,
          zQ = QQ.type,
          sQ = QQ.layout,
          FQ = QQ.axisType;
        if ("auto" === TQ) return "radial" === sQ && "radiusAxis" === FQ ? {
          scale: qQ.b(),
          realScaleType: "band"
        } : "radial" === sQ && "angleAxis" === FQ ? {
          scale: NW(),
          realScaleType: "linear"
        } : "category" === zQ && WQ && (WQ.indexOf("LineChart") >= 0 || WQ.indexOf("AreaChart") >= 0 || WQ.indexOf("ComposedChart") >= 0 && !XQ) ? {
          scale: qQ.d(),
          realScaleType: "point"
        } : "category" === zQ ? {
          scale: qQ.b(),
          realScaleType: "band"
        } : {
          scale: NW(),
          realScaleType: "linear"
        };
        if (iT()(TQ)) {
          var PQ = "scale".concat(kT()(TQ));
          return {
            scale: (wQ[PQ] || qQ.d)(),
            realScaleType: wQ[PQ] ? PQ : "point"
          }
        }
        return lT()(TQ) ? {
          scale: TQ
        } : {
          scale: qQ.d(),
          realScaleType: "point"
        }
      },
      ez = 1e-4,
      nz = function(QQ) {
        var WQ = QQ.domain();
        if (WQ && !(WQ.length <= 2)) {
          var XQ = WQ.length,
            wQ = QQ.range(),
            qQ = Math.min(wQ[0], wQ[1]) - ez,
            TQ = Math.max(wQ[0], wQ[1]) + ez,
            zQ = QQ(WQ[0]),
            sQ = QQ(WQ[XQ - 1]);
          (zQ < qQ || zQ > TQ || sQ < qQ || sQ > TQ) && QQ.domain([WQ[0], WQ[XQ - 1]])
        }
      },
      xz = function(QQ, WQ) {
        if (!QQ) return null;
        for (var XQ = 0, wQ = QQ.length; XQ < wQ; XQ++)
          if (QQ[XQ].item === WQ) return QQ[XQ].position;
        return null
      },
      Yz = function(QQ, WQ) {
        if (!WQ || 2 !== WQ.length || !(0, Vz.D)(WQ[0]) || !(0, Vz.D)(WQ[1])) return QQ;
        var XQ = Math.min(WQ[0], WQ[1]),
          wQ = Math.max(WQ[0], WQ[1]),
          qQ = [QQ[0], QQ[1]];
        return (!(0, Vz.D)(QQ[0]) || QQ[0] < XQ) && (qQ[0] = XQ), (!(0, Vz.D)(QQ[1]) || QQ[1] > wQ) && (qQ[1] = wQ), qQ[0] > wQ && (qQ[0] = wQ), qQ[1] < XQ && (qQ[1] = XQ), qQ
      },
      Nz = {
        sign: function(QQ) {
          var WQ = QQ.length;
          if (!(WQ <= 0))
            for (var XQ = 0, wQ = QQ[0].length; XQ < wQ; ++XQ)
              for (var qQ = 0, TQ = 0, zQ = 0; zQ < WQ; ++zQ) {
                var sQ = uT()(QQ[zQ][XQ][1]) ? QQ[zQ][XQ][0] : QQ[zQ][XQ][1];
                sQ >= 0 ? (QQ[zQ][XQ][0] = qQ, QQ[zQ][XQ][1] = qQ + sQ, qQ = QQ[zQ][XQ][1]) : (QQ[zQ][XQ][0] = TQ, QQ[zQ][XQ][1] = TQ + sQ, TQ = QQ[zQ][XQ][1])
              }
        },
        expand: function(QQ, WQ) {
          if ((wQ = QQ.length) > 0) {
            for (var XQ, wQ, qQ, TQ = 0, zQ = QQ[0].length; TQ < zQ; ++TQ) {
              for (qQ = XQ = 0; XQ < wQ; ++XQ) qQ += QQ[XQ][TQ][1] || 0;
              if (qQ)
                for (XQ = 0; XQ < wQ; ++XQ) QQ[XQ][TQ][1] /= qQ
            }
            jT(QQ, WQ)
          }
        },
        none: jT,
        silhouette: function(QQ, WQ) {
          if ((XQ = QQ.length) > 0) {
            for (var XQ, wQ = 0, qQ = QQ[WQ[0]], TQ = qQ.length; wQ < TQ; ++wQ) {
              for (var zQ = 0, sQ = 0; zQ < XQ; ++zQ) sQ += QQ[zQ][wQ][1] || 0;
              qQ[wQ][1] += qQ[wQ][0] = -sQ / 2
            }
            jT(QQ, WQ)
          }
        },
        wiggle: function(QQ, WQ) {
          if ((qQ = QQ.length) > 0 && (wQ = (XQ = QQ[WQ[0]]).length) > 0) {
            for (var XQ, wQ, qQ, TQ = 0, zQ = 1; zQ < wQ; ++zQ) {
              for (var sQ = 0, FQ = 0, PQ = 0; sQ < qQ; ++sQ) {
                for (var gQ = QQ[WQ[sQ]], JQ = gQ[zQ][1] || 0, rQ = (JQ - (gQ[zQ - 1][1] || 0)) / 2, IQ = 0; IQ < sQ; ++IQ) {
                  var jQ = QQ[WQ[IQ]];
                  rQ += (jQ[zQ][1] || 0) - (jQ[zQ - 1][1] || 0)
                }
                FQ += JQ, PQ += rQ * JQ
              }
              XQ[zQ - 1][1] += XQ[zQ - 1][0] = TQ, FQ && (TQ -= PQ / FQ)
            }
            XQ[zQ - 1][1] += XQ[zQ - 1][0] = TQ, jT(QQ, WQ)
          }
        },
        positive: function(QQ) {
          var WQ = QQ.length;
          if (!(WQ <= 0))
            for (var XQ = 0, wQ = QQ[0].length; XQ < wQ; ++XQ)
              for (var qQ = 0, TQ = 0; TQ < WQ; ++TQ) {
                var zQ = uT()(QQ[TQ][XQ][1]) ? QQ[TQ][XQ][0] : QQ[TQ][XQ][1];
                zQ >= 0 ? (QQ[TQ][XQ][0] = qQ, QQ[TQ][XQ][1] = qQ + zQ, qQ = QQ[TQ][XQ][1]) : (QQ[TQ][XQ][0] = 0, QQ[TQ][XQ][1] = 0)
              }
        }
      },
      Zz = function(QQ, WQ, XQ) {
        var wQ = WQ.map((function(QQ) {
            return QQ.props.dataKey
          })),
          qQ = Nz[XQ],
          TQ = function() {
            var QQ = (0, yT.e)([]),
              WQ = VT,
              XQ = jT,
              wQ = DT;

            function qQ(qQ) {
              var TQ, zQ, sQ = Array.from(QQ.apply(this, arguments), pT),
                FQ = sQ.length,
                PQ = -1;
              for (const QQ of qQ)
                for (TQ = 0, ++PQ; TQ < FQ; ++TQ)(sQ[TQ][PQ] = [0, +wQ(QQ, sQ[TQ].key, PQ, qQ)]).data = QQ;
              for (TQ = 0, zQ = (0, BT.e)(WQ(sQ)); TQ < FQ; ++TQ) sQ[zQ[TQ]].index = TQ;
              return XQ(sQ, zQ), sQ
            }
            return qQ.keys = function(WQ) {
              return arguments.length ? (QQ = "function" === typeof WQ ? WQ : (0, yT.e)(Array.from(WQ)), qQ) : QQ
            }, qQ.value = function(QQ) {
              return arguments.length ? (wQ = "function" === typeof QQ ? QQ : (0, yT.e)(+QQ), qQ) : wQ
            }, qQ.order = function(QQ) {
              return arguments.length ? (WQ = null == QQ ? VT : "function" === typeof QQ ? QQ : (0, yT.e)(Array.from(QQ)), qQ) : WQ
            }, qQ.offset = function(QQ) {
              return arguments.length ? (XQ = null == QQ ? jT : QQ, qQ) : XQ
            }, qQ
          }().keys(wQ).value((function(QQ, WQ) {
            return +az(QQ, WQ, 0)
          })).order(VT).offset(qQ);
        return TQ(QQ)
      },
      Oz = function(QQ, WQ, XQ, wQ, qQ, TQ) {
        if (!QQ) return null;
        var zQ = (TQ ? WQ.reverse() : WQ).reduce((function(QQ, WQ) {
          var qQ, TQ = null !== (qQ = WQ.type) && void 0 !== qQ && qQ.defaultProps ? dz(dz({}, WQ.type.defaultProps), WQ.props) : WQ.props,
            zQ = TQ.stackId;
          if (TQ.hide) return QQ;
          var sQ = TQ[XQ],
            FQ = QQ[sQ] || {
              hasStack: !1,
              stackGroups: {}
            };
          if ((0, Vz.B)(zQ)) {
            var PQ = FQ.stackGroups[zQ] || {
              numericAxisId: XQ,
              cateAxisId: wQ,
              items: []
            };
            PQ.items.push(WQ), FQ.hasStack = !0, FQ.stackGroups[zQ] = PQ
          } else FQ.stackGroups[(0, Vz.L)("_stackId_")] = {
            numericAxisId: XQ,
            cateAxisId: wQ,
            items: [WQ]
          };
          return dz(dz({}, QQ), {}, Hz({}, sQ, FQ))
        }), {});
        return Object.keys(zQ).reduce((function(WQ, TQ) {
          var sQ = zQ[TQ];
          if (sQ.hasStack) {
            sQ.stackGroups = Object.keys(sQ.stackGroups).reduce((function(WQ, TQ) {
              var zQ = sQ.stackGroups[TQ];
              return dz(dz({}, WQ), {}, Hz({}, TQ, {
                numericAxisId: XQ,
                cateAxisId: wQ,
                items: zQ.items,
                stackedData: Zz(QQ, zQ.items, qQ)
              }))
            }), {})
          }
          return dz(dz({}, WQ), {}, Hz({}, TQ, sQ))
        }), {})
      },
      Kz = function(QQ, WQ) {
        var XQ = WQ.realScaleType,
          wQ = WQ.type,
          qQ = WQ.tickCount,
          TQ = WQ.originalDomain,
          zQ = WQ.allowDecimals,
          sQ = XQ || WQ.scale;
        if ("auto" !== sQ && "linear" !== sQ) return null;
        if (qQ && "number" === wQ && TQ && ("auto" === TQ[0] || "auto" === TQ[1])) {
          var FQ = QQ.domain();
          if (!FQ.length) return null;
          var PQ = jz(FQ, qQ, zQ);
          return QQ.domain([vT()(PQ), UT()(PQ)]), {
            niceTicks: PQ
          }
        }
        if (qQ && "number" === wQ) {
          var gQ = QQ.domain();
          return {
            niceTicks: Bz(gQ, qQ, zQ)
          }
        }
        return null
      };

    function mz(QQ) {
      var WQ = QQ.axis,
        XQ = QQ.ticks,
        wQ = QQ.bandSize,
        qQ = QQ.entry,
        TQ = QQ.index,
        zQ = QQ.dataKey;
      if ("category" === WQ.type) {
        if (!WQ.allowDuplicatedCategory && WQ.dataKey && !HT()(qQ[WQ.dataKey])) {
          var sQ = (0, Vz.f)(XQ, "value", qQ[WQ.dataKey]);
          if (sQ) return sQ.coordinate + wQ / 2
        }
        return XQ[TQ] ? XQ[TQ].coordinate + wQ / 2 : null
      }
      var FQ = az(qQ, HT()(zQ) ? WQ.dataKey : zQ);
      return HT()(FQ) ? null : WQ.scale(FQ)
    }
    var Mz = function(QQ) {
        var WQ = QQ.axis,
          XQ = QQ.ticks,
          wQ = QQ.offset,
          qQ = QQ.bandSize,
          TQ = QQ.entry,
          zQ = QQ.index;
        if ("category" === WQ.type) return XQ[zQ] ? XQ[zQ].coordinate + wQ : null;
        var sQ = az(TQ, WQ.dataKey, WQ.domain[zQ]);
        return HT()(sQ) ? null : WQ.scale(sQ) - qQ / 2 + wQ
      },
      Qs = function(QQ) {
        var WQ = QQ.numericAxis,
          XQ = WQ.scale.domain();
        if ("number" === WQ.type) {
          var wQ = Math.min(XQ[0], XQ[1]),
            qQ = Math.max(XQ[0], XQ[1]);
          return wQ <= 0 && qQ >= 0 ? 0 : qQ < 0 ? qQ : wQ
        }
        return XQ[0]
      },
      Ws = function(QQ, WQ) {
        var XQ, wQ = (null !== (XQ = QQ.type) && void 0 !== XQ && XQ.defaultProps ? dz(dz({}, QQ.type.defaultProps), QQ.props) : QQ.props).stackId;
        if ((0, Vz.B)(wQ)) {
          var qQ = WQ[wQ];
          if (qQ) {
            var TQ = qQ.items.indexOf(QQ);
            return TQ >= 0 ? qQ.stackedData[TQ] : null
          }
        }
        return null
      },
      Xs = function(QQ, WQ, XQ) {
        return Object.keys(QQ).reduce((function(wQ, qQ) {
          var TQ = QQ[qQ].stackedData.reduce((function(QQ, wQ) {
            var qQ = wQ.slice(WQ, XQ + 1).reduce((function(QQ, WQ) {
              return [vT()(WQ.concat([QQ[0]]).filter(Vz.D)), UT()(WQ.concat([QQ[1]]).filter(Vz.D))]
            }), [1 / 0, -1 / 0]);
            return [Math.min(QQ[0], qQ[0]), Math.max(QQ[1], qQ[1])]
          }), [1 / 0, -1 / 0]);
          return [Math.min(TQ[0], wQ[0]), Math.max(TQ[1], wQ[1])]
        }), [1 / 0, -1 / 0]).map((function(QQ) {
          return QQ === 1 / 0 || QQ === -1 / 0 ? 0 : QQ
        }))
      },
      ws = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      qs = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      Ts = function(QQ, WQ, XQ) {
        if (lT()(QQ)) return QQ(WQ, XQ);
        if (!Array.isArray(QQ)) return WQ;
        var wQ = [];
        if ((0, Vz.D)(QQ[0])) wQ[0] = XQ ? QQ[0] : Math.min(QQ[0], WQ[0]);
        else if (ws.test(QQ[0])) {
          var qQ = +ws.exec(QQ[0])[1];
          wQ[0] = WQ[0] - qQ
        } else lT()(QQ[0]) ? wQ[0] = QQ[0](WQ[0]) : wQ[0] = WQ[0];
        if ((0, Vz.D)(QQ[1])) wQ[1] = XQ ? QQ[1] : Math.max(QQ[1], WQ[1]);
        else if (qs.test(QQ[1])) {
          var TQ = +qs.exec(QQ[1])[1];
          wQ[1] = WQ[1] + TQ
        } else lT()(QQ[1]) ? wQ[1] = QQ[1](WQ[1]) : wQ[1] = WQ[1];
        return wQ
      },
      zs = function(QQ, WQ, XQ) {
        if (QQ && QQ.scale && QQ.scale.bandwidth) {
          var wQ = QQ.scale.bandwidth();
          if (!XQ || wQ > 0) return wQ
        }
        if (QQ && WQ && WQ.length >= 2) {
          for (var qQ = oT()(WQ, (function(QQ) {
              return QQ.coordinate
            })), TQ = 1 / 0, zQ = 1, sQ = qQ.length; zQ < sQ; zQ++) {
            var FQ = qQ[zQ],
              PQ = qQ[zQ - 1];
            TQ = Math.min((FQ.coordinate || 0) - (PQ.coordinate || 0), TQ)
          }
          return TQ === 1 / 0 ? 0 : TQ
        }
        return XQ ? void 0 : 0
      },
      ss = function(QQ, WQ, XQ) {
        return QQ && QQ.length ? ST()(QQ, AT()(XQ, "type.defaultProps.domain")) ? WQ : QQ : WQ
      },
      Fs = function(QQ, WQ) {
        var XQ = QQ.type.defaultProps ? dz(dz({}, QQ.type.defaultProps), QQ.props) : QQ.props,
          wQ = XQ.dataKey,
          qQ = XQ.name,
          TQ = XQ.unit,
          zQ = XQ.formatter,
          sQ = XQ.tooltipType,
          FQ = XQ.chartType,
          PQ = XQ.hide;
        return dz(dz({}, (0, Dz.e)(QQ, !1)), {}, {
          dataKey: wQ,
          unit: TQ,
          formatter: zQ,
          name: qQ || wQ,
          color: iz(QQ),
          value: az(WQ, wQ),
          type: sQ,
          payload: WQ,
          chartType: FQ,
          hide: PQ
        })
      }
  },
  6520: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => rQ,
      g: () => JQ
    });
    var wQ = XQ(6345);

    function qQ(QQ) {
      return qQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, qQ(QQ)
    }

    function TQ(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function zQ(QQ) {
      for (var WQ = 1; WQ < arguments.length; WQ++) {
        var XQ = null != arguments[WQ] ? arguments[WQ] : {};
        WQ % 2 ? TQ(Object(XQ), !0).forEach((function(WQ) {
          sQ(QQ, WQ, XQ[WQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : TQ(Object(XQ)).forEach((function(WQ) {
          Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
        }))
      }
      return QQ
    }

    function sQ(QQ, WQ, XQ) {
      return (WQ = function(QQ) {
        var WQ = function(QQ, WQ) {
          if ("object" != qQ(QQ) || !QQ) return QQ;
          var XQ = QQ[Symbol.toPrimitive];
          if (void 0 !== XQ) {
            var wQ = XQ.call(QQ, WQ || "default");
            if ("object" != qQ(wQ)) return wQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == qQ(WQ) ? WQ : WQ + ""
      }(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }
    var FQ = {
        widthCache: {},
        cacheCount: 0
      },
      PQ = {
        position: "absolute",
        top: "-20000px",
        left: 0,
        padding: 0,
        margin: 0,
        border: "none",
        whiteSpace: "pre"
      },
      gQ = "recharts_measurement_span";
    var JQ = function(QQ) {
        var WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (void 0 === QQ || null === QQ || wQ.c.isSsr) return {
          width: 0,
          height: 0
        };
        var XQ = function(QQ) {
            var WQ = zQ({}, QQ);
            return Object.keys(WQ).forEach((function(QQ) {
              WQ[QQ] || delete WQ[QQ]
            })), WQ
          }(WQ),
          qQ = JSON.stringify({
            text: QQ,
            copyStyle: XQ
          });
        if (FQ.widthCache[qQ]) return FQ.widthCache[qQ];
        try {
          var TQ = document.getElementById(gQ);
          TQ || ((TQ = document.createElement("span")).setAttribute("id", gQ), TQ.setAttribute("aria-hidden", "true"), document.body.appendChild(TQ));
          var sQ = zQ(zQ({}, PQ), XQ);
          Object.assign(TQ.style, sQ), TQ.textContent = "".concat(QQ);
          var JQ = TQ.getBoundingClientRect(),
            rQ = {
              width: JQ.width,
              height: JQ.height
            };
          return FQ.widthCache[qQ] = rQ, ++FQ.cacheCount > 2e3 && (FQ.cacheCount = 0, FQ.widthCache = {}), rQ
        } catch (IQ) {
          return {
            width: 0,
            height: 0
          }
        }
      },
      rQ = function(QQ) {
        return {
          top: QQ.top + window.scrollY - document.documentElement.clientTop,
          left: QQ.left + window.scrollX - document.documentElement.clientLeft
        }
      }
  },
  5520: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      A: () => yQ,
      B: () => VQ,
      D: () => BQ,
      F: () => jQ,
      H: () => IQ,
      L: () => pQ,
      b: () => aQ,
      f: () => dQ,
      i: () => UQ,
      m: () => HQ,
      o: () => GQ,
      s: () => bQ,
      w: () => vQ
    });
    var wQ = XQ(5523),
      qQ = XQ.n(wQ),
      TQ = XQ(5536),
      zQ = XQ.n(TQ),
      sQ = XQ(5545),
      FQ = XQ.n(sQ),
      PQ = XQ(5543),
      gQ = XQ.n(PQ),
      JQ = XQ(5766),
      rQ = XQ.n(JQ),
      IQ = function(QQ) {
        return 0 === QQ ? 0 : QQ > 0 ? 1 : -1
      },
      jQ = function(QQ) {
        return qQ()(QQ) && QQ.indexOf("%") === QQ.length - 1
      },
      BQ = function(QQ) {
        return gQ()(QQ) && !zQ()(QQ)
      },
      yQ = function(QQ) {
        return rQ()(QQ)
      },
      VQ = function(QQ) {
        return BQ(QQ) || qQ()(QQ)
      },
      DQ = 0,
      pQ = function(QQ) {
        var WQ = ++DQ;
        return "".concat(QQ || "").concat(WQ)
      },
      GQ = function(QQ, WQ) {
        var XQ, wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          TQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!BQ(QQ) && !qQ()(QQ)) return wQ;
        if (jQ(QQ)) {
          var sQ = QQ.indexOf("%");
          XQ = WQ * parseFloat(QQ.slice(0, sQ)) / 100
        } else XQ = +QQ;
        return zQ()(XQ) && (XQ = wQ), TQ && XQ > WQ && (XQ = WQ), XQ
      },
      UQ = function(QQ) {
        if (!QQ) return null;
        var WQ = Object.keys(QQ);
        return WQ && WQ.length ? QQ[WQ[0]] : null
      },
      bQ = function(QQ) {
        if (!Array.isArray(QQ)) return !1;
        for (var WQ = QQ.length, XQ = {}, wQ = 0; wQ < WQ; wQ++) {
          if (XQ[QQ[wQ]]) return !0;
          XQ[QQ[wQ]] = !0
        }
        return !1
      },
      vQ = function(QQ, WQ) {
        return BQ(QQ) && BQ(WQ) ? function(XQ) {
          return QQ + XQ * (WQ - QQ)
        } : function() {
          return WQ
        }
      };

    function dQ(QQ, WQ, XQ) {
      return QQ && QQ.length ? QQ.find((function(QQ) {
        return QQ && ("function" === typeof WQ ? WQ(QQ) : FQ()(QQ, WQ)) === XQ
      })) : null
    }
    var HQ = function(QQ) {
        if (!QQ || !QQ.length) return null;
        for (var WQ = QQ.length, XQ = 0, wQ = 0, qQ = 0, TQ = 0, zQ = 1 / 0, sQ = -1 / 0, FQ = 0, PQ = 0, gQ = 0; gQ < WQ; gQ++) XQ += FQ = QQ[gQ].cx || 0, wQ += PQ = QQ[gQ].cy || 0, qQ += FQ * PQ, TQ += FQ * FQ, zQ = Math.min(zQ, FQ), sQ = Math.max(sQ, FQ);
        var JQ = WQ * TQ !== XQ * XQ ? (WQ * qQ - XQ * wQ) / (WQ * TQ - XQ * XQ) : 0;
        return {
          xmin: zQ,
          xmax: sQ,
          a: JQ,
          b: (wQ - JQ * XQ) / WQ
        }
      },
      aQ = function(QQ, WQ) {
        return BQ(QQ) && BQ(WQ) ? QQ - WQ : qQ()(QQ) && qQ()(WQ) ? QQ.localeCompare(WQ) : QQ instanceof Date && WQ instanceof Date ? QQ.getTime() - WQ.getTime() : String(QQ).localeCompare(String(WQ))
      }
  },
  6345: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => wQ
    });
    var wQ = {
      isSsr: !("undefined" !== typeof window && window.document && window.document.createElement && window.setTimeout),
      get: function(QQ) {
        return wQ[QQ]
      },
      set: function(QQ, WQ) {
        if ("string" === typeof QQ) wQ[QQ] = WQ;
        else {
          var XQ = Object.keys(QQ);
          XQ && XQ.length && XQ.forEach((function(WQ) {
            wQ[WQ] = QQ[WQ]
          }))
        }
      }
    }
  },
  6622: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => wQ
    });
    var wQ = function(QQ, WQ) {
      var XQ = QQ.alwaysShow,
        wQ = QQ.ifOverflow;
      return XQ && (wQ = "extendDomain"), wQ === WQ
    }
  },
  5770: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => wQ
    });
    var wQ = function(QQ, WQ) {
      for (var XQ = arguments.length, wQ = new Array(XQ > 2 ? XQ - 2 : 0), qQ = 2; qQ < XQ; qQ++) wQ[qQ - 2] = arguments[qQ]
    }
  },
  6619: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => sQ,
      d: () => rQ,
      e: () => PQ
    });
    XQ(5766), XQ(61), XQ(5622);

    function wQ(QQ) {
      return wQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, wQ(QQ)
    }

    function qQ(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function TQ(QQ) {
      for (var WQ = 1; WQ < arguments.length; WQ++) {
        var XQ = null != arguments[WQ] ? arguments[WQ] : {};
        WQ % 2 ? qQ(Object(XQ), !0).forEach((function(WQ) {
          zQ(QQ, WQ, XQ[WQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : qQ(Object(XQ)).forEach((function(WQ) {
          Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
        }))
      }
      return QQ
    }

    function zQ(QQ, WQ, XQ) {
      return (WQ = function(QQ) {
        var WQ = function(QQ, WQ) {
          if ("object" != wQ(QQ) || !QQ) return QQ;
          var XQ = QQ[Symbol.toPrimitive];
          if (void 0 !== XQ) {
            var qQ = XQ.call(QQ, WQ || "default");
            if ("object" != wQ(qQ)) return qQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == wQ(WQ) ? WQ : WQ + ""
      }(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }
    var sQ = Math.PI / 180,
      FQ = function(QQ) {
        return 180 * QQ / Math.PI
      },
      PQ = function(QQ, WQ, XQ, wQ) {
        return {
          x: QQ + Math.cos(-sQ * wQ) * XQ,
          y: WQ + Math.sin(-sQ * wQ) * XQ
        }
      },
      gQ = function(QQ, WQ) {
        var XQ = QQ.x,
          wQ = QQ.y,
          qQ = WQ.cx,
          TQ = WQ.cy,
          zQ = function(QQ, WQ) {
            var XQ = QQ.x,
              wQ = QQ.y,
              qQ = WQ.x,
              TQ = WQ.y;
            return Math.sqrt(Math.pow(XQ - qQ, 2) + Math.pow(wQ - TQ, 2))
          }({
            x: XQ,
            y: wQ
          }, {
            x: qQ,
            y: TQ
          });
        if (zQ <= 0) return {
          radius: zQ
        };
        var sQ = (XQ - qQ) / zQ,
          PQ = Math.acos(sQ);
        return wQ > TQ && (PQ = 2 * Math.PI - PQ), {
          radius: zQ,
          angle: FQ(PQ),
          angleInRadian: PQ
        }
      },
      JQ = function(QQ, WQ) {
        var XQ = WQ.startAngle,
          wQ = WQ.endAngle,
          qQ = Math.floor(XQ / 360),
          TQ = Math.floor(wQ / 360);
        return QQ + 360 * Math.min(qQ, TQ)
      },
      rQ = function(QQ, WQ) {
        var XQ = QQ.x,
          wQ = QQ.y,
          qQ = gQ({
            x: XQ,
            y: wQ
          }, WQ),
          zQ = qQ.radius,
          sQ = qQ.angle,
          FQ = WQ.innerRadius,
          PQ = WQ.outerRadius;
        if (zQ < FQ || zQ > PQ) return !1;
        if (0 === zQ) return !0;
        var rQ, IQ = function(QQ) {
            var WQ = QQ.startAngle,
              XQ = QQ.endAngle,
              wQ = Math.floor(WQ / 360),
              qQ = Math.floor(XQ / 360),
              TQ = Math.min(wQ, qQ);
            return {
              startAngle: WQ - 360 * TQ,
              endAngle: XQ - 360 * TQ
            }
          }(WQ),
          jQ = IQ.startAngle,
          BQ = IQ.endAngle,
          yQ = sQ;
        if (jQ <= BQ) {
          for (; yQ > BQ;) yQ -= 360;
          for (; yQ < jQ;) yQ += 360;
          rQ = yQ >= jQ && yQ <= BQ
        } else {
          for (; yQ > jQ;) yQ -= 360;
          for (; yQ < BQ;) yQ += 360;
          rQ = yQ >= BQ && yQ <= jQ
        }
        return rQ ? TQ(TQ({}, WQ), {}, {
          radius: zQ,
          angle: JQ(yQ, WQ)
        }) : null
      }
  },
  5775: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => EQ,
      h: () => lQ,
      k: () => hQ,
      m: () => vQ,
      n: () => kQ,
      q: () => RQ,
      s: () => CQ,
      u: () => fQ,
      x: () => LQ,
      z: () => iQ
    });
    var wQ = XQ(5545),
      qQ = XQ.n(wQ),
      TQ = XQ(5766),
      zQ = XQ.n(TQ),
      sQ = XQ(5523),
      FQ = XQ.n(sQ),
      PQ = XQ(5622),
      gQ = XQ.n(PQ),
      JQ = XQ(5441),
      rQ = XQ.n(JQ),
      IQ = XQ(61),
      jQ = XQ(5780),
      BQ = XQ(5520),
      yQ = XQ(5791),
      VQ = XQ(5800),
      DQ = ["children"],
      pQ = ["children"];

    function GQ(QQ, WQ) {
      if (null == QQ) return {};
      var XQ, wQ, qQ = function(QQ, WQ) {
        if (null == QQ) return {};
        var XQ = {};
        for (var wQ in QQ)
          if (Object.prototype.hasOwnProperty.call(QQ, wQ)) {
            if (WQ.indexOf(wQ) >= 0) continue;
            XQ[wQ] = QQ[wQ]
          } return XQ
      }(QQ, WQ);
      if (Object.getOwnPropertySymbols) {
        var TQ = Object.getOwnPropertySymbols(QQ);
        for (wQ = 0; wQ < TQ.length; wQ++) XQ = TQ[wQ], WQ.indexOf(XQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, XQ) && (qQ[XQ] = QQ[XQ])
      }
      return qQ
    }

    function UQ(QQ) {
      return UQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, UQ(QQ)
    }
    var bQ = {
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
      vQ = function(QQ) {
        return "string" === typeof QQ ? QQ : QQ ? QQ.displayName || QQ.name || "Component" : ""
      },
      dQ = null,
      HQ = null,
      aQ = function QQ(WQ) {
        if (WQ === dQ && Array.isArray(HQ)) return HQ;
        var XQ = [];
        return IQ.Children.forEach(WQ, (function(WQ) {
          zQ()(WQ) || ((0, jQ.isFragment)(WQ) ? XQ = XQ.concat(QQ(WQ.props.children)) : XQ.push(WQ))
        })), HQ = XQ, dQ = WQ, XQ
      };

    function lQ(QQ, WQ) {
      var XQ = [],
        wQ = [];
      return wQ = Array.isArray(WQ) ? WQ.map((function(QQ) {
        return vQ(QQ)
      })) : [vQ(WQ)], aQ(QQ).forEach((function(QQ) {
        var WQ = qQ()(QQ, "type.displayName") || qQ()(QQ, "type.name"); - 1 !== wQ.indexOf(WQ) && XQ.push(QQ)
      })), XQ
    }

    function hQ(QQ, WQ) {
      var XQ = lQ(QQ, WQ);
      return XQ && XQ[0]
    }
    var iQ = function(QQ) {
        if (!QQ || !QQ.props) return !1;
        var WQ = QQ.props,
          XQ = WQ.width,
          wQ = WQ.height;
        return !(!(0, BQ.D)(XQ) || XQ <= 0 || !(0, BQ.D)(wQ) || wQ <= 0)
      },
      cQ = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"],
      AQ = function(QQ) {
        return QQ && QQ.type && FQ()(QQ.type) && cQ.indexOf(QQ.type) >= 0
      },
      RQ = function(QQ) {
        return QQ && "object" === UQ(QQ) && "clipDot" in QQ
      },
      EQ = function(QQ, WQ, XQ) {
        if (!QQ || "function" === typeof QQ || "boolean" === typeof QQ) return null;
        var wQ = QQ;
        if ((0, IQ.isValidElement)(QQ) && (wQ = QQ.props), !rQ()(wQ)) return null;
        var qQ = {};
        return Object.keys(wQ).forEach((function(QQ) {
          var TQ;
          (function(QQ, WQ, XQ, wQ) {
            var qQ, TQ = null !== (qQ = null === VQ.e || void 0 === VQ.e ? void 0 : VQ.e[wQ]) && void 0 !== qQ ? qQ : [];
            return WQ.startsWith("data-") || !gQ()(QQ) && (wQ && TQ.includes(WQ) || VQ.h.includes(WQ)) || XQ && VQ.b.includes(WQ)
          })(null === (TQ = wQ) || void 0 === TQ ? void 0 : TQ[QQ], QQ, WQ, XQ) && (qQ[QQ] = wQ[QQ])
        })), qQ
      },
      CQ = function QQ(WQ, XQ) {
        if (WQ === XQ) return !0;
        var wQ = IQ.Children.count(WQ);
        if (wQ !== IQ.Children.count(XQ)) return !1;
        if (0 === wQ) return !0;
        if (1 === wQ) return uQ(Array.isArray(WQ) ? WQ[0] : WQ, Array.isArray(XQ) ? XQ[0] : XQ);
        for (var qQ = 0; qQ < wQ; qQ++) {
          var TQ = WQ[qQ],
            zQ = XQ[qQ];
          if (Array.isArray(TQ) || Array.isArray(zQ)) {
            if (!QQ(TQ, zQ)) return !1
          } else if (!uQ(TQ, zQ)) return !1
        }
        return !0
      },
      uQ = function(QQ, WQ) {
        if (zQ()(QQ) && zQ()(WQ)) return !0;
        if (!zQ()(QQ) && !zQ()(WQ)) {
          var XQ = QQ.props || {},
            wQ = XQ.children,
            qQ = GQ(XQ, DQ),
            TQ = WQ.props || {},
            sQ = TQ.children,
            FQ = GQ(TQ, pQ);
          return wQ && sQ ? (0, yQ.e)(qQ, FQ) && CQ(wQ, sQ) : !wQ && !sQ && (0, yQ.e)(qQ, FQ)
        }
        return !1
      },
      LQ = function(QQ, WQ) {
        var XQ = [],
          wQ = {};
        return aQ(QQ).forEach((function(QQ, qQ) {
          if (AQ(QQ)) XQ.push(QQ);
          else if (QQ) {
            var TQ = vQ(QQ.type),
              zQ = WQ[TQ] || {},
              sQ = zQ.handler,
              FQ = zQ.once;
            if (sQ && (!FQ || !wQ[TQ])) {
              var PQ = sQ(QQ, TQ, qQ);
              XQ.push(PQ), wQ[TQ] = !0
            }
          }
        })), XQ
      },
      kQ = function(QQ) {
        var WQ = QQ && QQ.type;
        return WQ && bQ[WQ] ? bQ[WQ] : null
      },
      fQ = function(QQ, WQ) {
        return aQ(WQ).indexOf(QQ)
      }
  },
  5791: (QQ, WQ, XQ) => {
    function wQ(QQ, WQ) {
      for (var XQ in QQ)
        if ({}.hasOwnProperty.call(QQ, XQ) && (!{}.hasOwnProperty.call(WQ, XQ) || QQ[XQ] !== WQ[XQ])) return !1;
      for (var wQ in WQ)
        if ({}.hasOwnProperty.call(WQ, wQ) && !{}.hasOwnProperty.call(QQ, wQ)) return !1;
      return !0
    }
    XQ.d(WQ, {
      e: () => wQ
    })
  },
  6601: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => gQ
    });
    var wQ = XQ(6428),
      qQ = XQ(6526),
      TQ = XQ(5775);

    function zQ(QQ) {
      return zQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, zQ(QQ)
    }

    function sQ(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function FQ(QQ) {
      for (var WQ = 1; WQ < arguments.length; WQ++) {
        var XQ = null != arguments[WQ] ? arguments[WQ] : {};
        WQ % 2 ? sQ(Object(XQ), !0).forEach((function(WQ) {
          PQ(QQ, WQ, XQ[WQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : sQ(Object(XQ)).forEach((function(WQ) {
          Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
        }))
      }
      return QQ
    }

    function PQ(QQ, WQ, XQ) {
      return (WQ = function(QQ) {
        var WQ = function(QQ, WQ) {
          if ("object" != zQ(QQ) || !QQ) return QQ;
          var XQ = QQ[Symbol.toPrimitive];
          if (void 0 !== XQ) {
            var wQ = XQ.call(QQ, WQ || "default");
            if ("object" != zQ(wQ)) return wQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == zQ(WQ) ? WQ : WQ + ""
      }(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }
    var gQ = function(QQ) {
      var WQ = QQ.children,
        XQ = QQ.formattedGraphicalItems,
        zQ = QQ.legendWidth,
        sQ = QQ.legendContent,
        PQ = (0, TQ.k)(WQ, wQ.c);
      if (!PQ) return null;
      var gQ, JQ = wQ.c.defaultProps,
        rQ = void 0 !== JQ ? FQ(FQ({}, JQ), PQ.props) : {};
      return gQ = PQ.props && PQ.props.payload ? PQ.props && PQ.props.payload : "children" === sQ ? (XQ || []).reduce((function(QQ, WQ) {
        var XQ = WQ.item,
          wQ = WQ.props,
          qQ = wQ.sectors || wQ.data || [];
        return QQ.concat(qQ.map((function(QQ) {
          return {
            type: PQ.props.iconType || XQ.props.legendType,
            value: QQ.name,
            color: QQ.fill,
            payload: QQ
          }
        })))
      }), []) : (XQ || []).map((function(QQ) {
        var WQ = QQ.item,
          XQ = WQ.type.defaultProps,
          wQ = void 0 !== XQ ? FQ(FQ({}, XQ), WQ.props) : {},
          TQ = wQ.dataKey,
          zQ = wQ.name,
          sQ = wQ.legendType;
        return {
          inactive: wQ.hide,
          dataKey: TQ,
          type: rQ.iconType || sQ || "square",
          color: (0, qQ.X)(WQ),
          value: zQ || TQ,
          payload: wQ
        }
      })), FQ(FQ(FQ({}, rQ), wQ.c.getWithHeight(PQ, zQ)), {}, {
        payload: gQ,
        item: PQ
      })
    }
  },
  6354: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => sQ
    });
    var wQ = XQ(6360),
      qQ = XQ.n(wQ),
      TQ = XQ(5622),
      zQ = XQ.n(TQ);

    function sQ(QQ, WQ, XQ) {
      return !0 === WQ ? qQ()(QQ, XQ) : zQ()(WQ) ? qQ()(QQ, WQ) : QQ
    }
  },
  5800: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => gQ,
      e: () => PQ,
      h: () => sQ,
      k: () => JQ,
      o: () => rQ
    });
    var wQ = XQ(61),
      qQ = XQ(5441),
      TQ = XQ.n(qQ);

    function zQ(QQ) {
      return zQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, zQ(QQ)
    }
    var sQ = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "gI", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"],
      FQ = ["points", "pathLength"],
      PQ = {
        svg: ["viewBox", "children"],
        polygon: FQ,
        polyline: FQ
      },
      gQ = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"],
      JQ = function(QQ, WQ) {
        if (!QQ || "function" === typeof QQ || "boolean" === typeof QQ) return null;
        var XQ = QQ;
        if ((0, wQ.isValidElement)(QQ) && (XQ = QQ.props), !TQ()(XQ)) return null;
        var qQ = {};
        return Object.keys(XQ).forEach((function(QQ) {
          gQ.includes(QQ) && (qQ[QQ] = WQ || function(WQ) {
            return XQ[QQ](XQ, WQ)
          })
        })), qQ
      },
      rQ = function(QQ, WQ, XQ) {
        if (!TQ()(QQ) || "object" !== zQ(QQ)) return null;
        var wQ = null;
        return Object.keys(QQ).forEach((function(qQ) {
          var TQ = QQ[qQ];
          gQ.includes(qQ) && "function" === typeof TQ && (wQ || (wQ = {}), wQ[qQ] = function(QQ, WQ, XQ) {
            return function(wQ) {
              return QQ(WQ, XQ, wQ), null
            }
          }(TQ, WQ, XQ))
        })), wQ
      }
  },
  5785: (QQ, WQ) => {
    var XQ, wQ = Symbol.for("react.element"),
      qQ = Symbol.for("react.portal"),
      TQ = Symbol.for("react.fragment"),
      zQ = Symbol.for("react.strict_mode"),
      sQ = Symbol.for("react.profiler"),
      FQ = Symbol.for("react.provider"),
      PQ = Symbol.for("react.context"),
      gQ = Symbol.for("react.server_context"),
      JQ = Symbol.for("react.forward_ref"),
      rQ = Symbol.for("react.suspense"),
      IQ = Symbol.for("react.suspense_list"),
      jQ = Symbol.for("react.memo"),
      BQ = Symbol.for("react.lazy"),
      yQ = Symbol.for("react.offscreen");

    function VQ(QQ) {
      if ("object" === typeof QQ && null !== QQ) {
        var WQ = QQ.$$typeof;
        switch (WQ) {
          case wQ:
            switch (QQ = QQ.type) {
              case TQ:
              case sQ:
              case zQ:
              case rQ:
              case IQ:
                return QQ;
              default:
                switch (QQ = QQ && QQ.$$typeof) {
                  case gQ:
                  case PQ:
                  case JQ:
                  case BQ:
                  case jQ:
                  case FQ:
                    return QQ;
                  default:
                    return WQ
                }
            }
          case qQ:
            return WQ
        }
      }
    }
    XQ = Symbol.for("react.module.reference"), WQ.isFragment = function(QQ) {
      return VQ(QQ) === TQ
    }
  },
  5780: (QQ, WQ, XQ) => {
    QQ.exports = XQ(5785)
  },
  5423: (QQ, WQ, XQ) => {
    function wQ(QQ) {
      var WQ, XQ, qQ = "";
      if ("string" == typeof QQ || "number" == typeof QQ) qQ += QQ;
      else if ("object" == typeof QQ)
        if (Array.isArray(QQ)) {
          var TQ = QQ.length;
          for (WQ = 0; WQ < TQ; WQ++) QQ[WQ] && (XQ = wQ(QQ[WQ])) && (qQ && (qQ += " "), qQ += XQ)
        } else
          for (XQ in QQ) QQ[XQ] && (qQ && (qQ += " "), qQ += XQ);
      return qQ
    }
    XQ.d(WQ, {
      e: () => qQ
    });
    const qQ = function() {
      for (var QQ, WQ, XQ = 0, qQ = "", TQ = arguments.length; XQ < TQ; XQ++)(QQ = arguments[XQ]) && (WQ = wQ(QQ)) && (qQ && (qQ += " "), qQ += WQ);
      return qQ
    }
  },
  6535: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => TQ,
      d: () => sQ
    });
    var wQ = XQ(6540),
      qQ = XQ(6544);

    function TQ() {
      var QQ, WQ, XQ = (0, qQ.e)().unknown(void 0),
        zQ = XQ.domain,
        sQ = XQ.range,
        FQ = 0,
        PQ = 1,
        gQ = !1,
        JQ = 0,
        rQ = 0,
        IQ = .5;

      function jQ() {
        var XQ = zQ().length,
          wQ = PQ < FQ,
          qQ = wQ ? PQ : FQ,
          TQ = wQ ? FQ : PQ;
        QQ = (TQ - qQ) / Math.max(1, XQ - JQ + 2 * rQ), gQ && (QQ = Math.floor(QQ)), qQ += (TQ - qQ - QQ * (XQ - JQ)) * IQ, WQ = QQ * (1 - JQ), gQ && (qQ = Math.round(qQ), WQ = Math.round(WQ));
        var jQ = function(QQ, WQ, XQ) {
          QQ = +QQ, WQ = +WQ, XQ = (qQ = arguments.length) < 2 ? (WQ = QQ, QQ = 0, 1) : qQ < 3 ? 1 : +XQ;
          for (var wQ = -1, qQ = 0 | Math.max(0, Math.ceil((WQ - QQ) / XQ)), TQ = new Array(qQ); ++wQ < qQ;) TQ[wQ] = QQ + wQ * XQ;
          return TQ
        }(XQ).map((function(WQ) {
          return qQ + QQ * WQ
        }));
        return sQ(wQ ? jQ.reverse() : jQ)
      }
      return delete XQ.unknown, XQ.domain = function(QQ) {
        return arguments.length ? (zQ(QQ), jQ()) : zQ()
      }, XQ.range = function(QQ) {
        return arguments.length ? ([FQ, PQ] = QQ, FQ = +FQ, PQ = +PQ, jQ()) : [FQ, PQ]
      }, XQ.rangeRound = function(QQ) {
        return [FQ, PQ] = QQ, FQ = +FQ, PQ = +PQ, gQ = !0, jQ()
      }, XQ.bandwidth = function() {
        return WQ
      }, XQ.step = function() {
        return QQ
      }, XQ.round = function(QQ) {
        return arguments.length ? (gQ = !!QQ, jQ()) : gQ
      }, XQ.padding = function(QQ) {
        return arguments.length ? (JQ = Math.min(1, rQ = +QQ), jQ()) : JQ
      }, XQ.paddingInner = function(QQ) {
        return arguments.length ? (JQ = Math.min(1, QQ), jQ()) : JQ
      }, XQ.paddingOuter = function(QQ) {
        return arguments.length ? (rQ = +QQ, jQ()) : rQ
      }, XQ.align = function(QQ) {
        return arguments.length ? (IQ = Math.max(0, Math.min(1, QQ)), jQ()) : IQ
      }, XQ.copy = function() {
        return TQ(zQ(), [FQ, PQ]).round(gQ).paddingInner(JQ).paddingOuter(rQ).align(IQ)
      }, wQ.g.apply(jQ(), arguments)
    }

    function zQ(QQ) {
      var WQ = QQ.copy;
      return QQ.padding = QQ.paddingOuter, delete QQ.paddingInner, delete QQ.paddingOuter, QQ.copy = function() {
        return zQ(WQ())
      }, QQ
    }

    function sQ() {
      return zQ(TQ.apply(null, arguments).paddingInner(1))
    }
  },
  6540: (QQ, WQ, XQ) => {
    function wQ(QQ, WQ) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(QQ);
          break;
        default:
          this.range(WQ).domain(QQ)
      }
      return this
    }

    function qQ(QQ, WQ) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          "function" === typeof QQ ? this.interpolator(QQ) : this.range(QQ);
          break;
        default:
          this.domain(QQ), "function" === typeof WQ ? this.interpolator(WQ) : this.range(WQ)
      }
      return this
    }
    XQ.d(WQ, {
      d: () => qQ,
      g: () => wQ
    })
  },
  6544: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => gQ,
      i: () => PQ
    });
    class wQ extends Map {
      constructor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : sQ;
        if (super(), Object.defineProperties(this, {
            _intern: {
              value: new Map
            },
            _key: {
              value: WQ
            }
          }), null != QQ)
          for (const [XQ, wQ] of QQ) this.set(XQ, wQ)
      }
      get(QQ) {
        return super.get(qQ(this, QQ))
      }
      has(QQ) {
        return super.has(qQ(this, QQ))
      }
      set(QQ, WQ) {
        return super.set(TQ(this, QQ), WQ)
      }
      delete(QQ) {
        return super.delete(zQ(this, QQ))
      }
    }
    Set;

    function qQ(QQ, WQ) {
      let {
        _intern: XQ,
        _key: wQ
      } = QQ;
      const qQ = wQ(WQ);
      return XQ.has(qQ) ? XQ.get(qQ) : WQ
    }

    function TQ(QQ, WQ) {
      let {
        _intern: XQ,
        _key: wQ
      } = QQ;
      const qQ = wQ(WQ);
      return XQ.has(qQ) ? XQ.get(qQ) : (XQ.set(qQ, WQ), WQ)
    }

    function zQ(QQ, WQ) {
      let {
        _intern: XQ,
        _key: wQ
      } = QQ;
      const qQ = wQ(WQ);
      return XQ.has(qQ) && (WQ = XQ.get(qQ), XQ.delete(qQ)), WQ
    }

    function sQ(QQ) {
      return null !== QQ && "object" === typeof QQ ? QQ.valueOf() : QQ
    }
    var FQ = XQ(6540);
    const PQ = Symbol("implicit");

    function gQ() {
      var QQ = new wQ,
        WQ = [],
        XQ = [],
        qQ = PQ;

      function TQ(wQ) {
        let TQ = QQ.get(wQ);
        if (void 0 === TQ) {
          if (qQ !== PQ) return qQ;
          QQ.set(wQ, TQ = WQ.push(wQ) - 1)
        }
        return XQ[TQ % XQ.length]
      }
      return TQ.domain = function(XQ) {
        if (!arguments.length) return WQ.slice();
        WQ = [], QQ = new wQ;
        for (const wQ of XQ) QQ.has(wQ) || QQ.set(wQ, WQ.push(wQ) - 1);
        return TQ
      }, TQ.range = function(QQ) {
        return arguments.length ? (XQ = Array.from(QQ), TQ) : XQ.slice()
      }, TQ.unknown = function(QQ) {
        return arguments.length ? (qQ = QQ, TQ) : qQ
      }, TQ.copy = function() {
        return gQ(WQ, XQ).unknown(qQ)
      }, FQ.g.apply(TQ, arguments), TQ
    }
  },
  6605: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => wQ
    });
    Array.prototype.slice;

    function wQ(QQ) {
      return "object" === typeof QQ && "length" in QQ ? QQ : Array.from(QQ)
    }
  },
  6484: (QQ, WQ, XQ) => {
    function wQ(QQ) {
      return function() {
        return QQ
      }
    }
    XQ.d(WQ, {
      e: () => wQ
    })
  },
  6491: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => PQ
    });
    const wQ = Math.PI,
      qQ = 2 * wQ,
      TQ = 1e-6,
      zQ = qQ - TQ;

    function sQ(QQ) {
      this._ += QQ[0];
      for (let WQ = 1, XQ = QQ.length; WQ < XQ; ++WQ) this._ += arguments[WQ] + QQ[WQ]
    }
    class FQ {
      constructor(QQ) {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == QQ ? sQ : function(QQ) {
          let WQ = Math.floor(QQ);
          if (!(WQ >= 0)) throw new Error(`invalid digits: ${QQ}`);
          if (WQ > 15) return sQ;
          const XQ = 10 ** WQ;
          return function(QQ) {
            this._ += QQ[0];
            for (let WQ = 1, wQ = QQ.length; WQ < wQ; ++WQ) this._ += Math.round(arguments[WQ] * XQ) / XQ + QQ[WQ]
          }
        }(QQ)
      }
      moveTo(QQ, WQ) {
        this._append`M${this._x0=this._x1=+QQ},${this._y0=this._y1=+WQ}`
      }
      closePath() {
        null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`)
      }
      lineTo(QQ, WQ) {
        this._append`L${this._x1=+QQ},${this._y1=+WQ}`
      }
      quadraticCurveTo(QQ, WQ, XQ, wQ) {
        this._append`Q${+QQ},${+WQ},${this._x1=+XQ},${this._y1=+wQ}`
      }
      bezierCurveTo(QQ, WQ, XQ, wQ, qQ, TQ) {
        this._append`C${+QQ},${+WQ},${+XQ},${+wQ},${this._x1=+qQ},${this._y1=+TQ}`
      }
      arcTo(QQ, WQ, XQ, qQ, zQ) {
        if (QQ = +QQ, WQ = +WQ, XQ = +XQ, qQ = +qQ, (zQ = +zQ) < 0) throw new Error(`negative radius: ${zQ}`);
        let sQ = this._x1,
          FQ = this._y1,
          PQ = XQ - QQ,
          gQ = qQ - WQ,
          JQ = sQ - QQ,
          rQ = FQ - WQ,
          IQ = JQ * JQ + rQ * rQ;
        if (null === this._x1) this._append`M${this._x1=QQ},${this._y1=WQ}`;
        else if (IQ > TQ)
          if (Math.abs(rQ * PQ - gQ * JQ) > TQ && zQ) {
            let jQ = XQ - sQ,
              BQ = qQ - FQ,
              yQ = PQ * PQ + gQ * gQ,
              VQ = jQ * jQ + BQ * BQ,
              DQ = Math.sqrt(yQ),
              pQ = Math.sqrt(IQ),
              GQ = zQ * Math.tan((wQ - Math.acos((yQ + IQ - VQ) / (2 * DQ * pQ))) / 2),
              UQ = GQ / pQ,
              bQ = GQ / DQ;
            Math.abs(UQ - 1) > TQ && this._append`L${QQ+UQ*JQ},${WQ+UQ*rQ}`, this._append`A${zQ},${zQ},0,0,${+(rQ*jQ>JQ*BQ)},${this._x1=QQ+bQ*PQ},${this._y1=WQ+bQ*gQ}`
          } else this._append`L${this._x1=QQ},${this._y1=WQ}`;
        else;
      }
      arc(QQ, WQ, XQ, sQ, FQ, PQ) {
        if (QQ = +QQ, WQ = +WQ, PQ = !!PQ, (XQ = +XQ) < 0) throw new Error(`negative radius: ${XQ}`);
        let gQ = XQ * Math.cos(sQ),
          JQ = XQ * Math.sin(sQ),
          rQ = QQ + gQ,
          IQ = WQ + JQ,
          jQ = 1 ^ PQ,
          BQ = PQ ? sQ - FQ : FQ - sQ;
        null === this._x1 ? this._append`M${rQ},${IQ}` : (Math.abs(this._x1 - rQ) > TQ || Math.abs(this._y1 - IQ) > TQ) && this._append`L${rQ},${IQ}`, XQ && (BQ < 0 && (BQ = BQ % qQ + qQ), BQ > zQ ? this._append`A${XQ},${XQ},0,1,${jQ},${QQ-gQ},${WQ-JQ}A${XQ},${XQ},0,1,${jQ},${this._x1=rQ},${this._y1=IQ}` : BQ > TQ && this._append`A${XQ},${XQ},0,${+(BQ>=wQ)},${jQ},${this._x1=QQ+XQ*Math.cos(FQ)},${this._y1=WQ+XQ*Math.sin(FQ)}`)
      }
      rect(QQ, WQ, XQ, wQ) {
        this._append`M${this._x0=this._x1=+QQ},${this._y0=this._y1=+WQ}h${XQ=+XQ}v${+wQ}h${-XQ}Z`
      }
      toString() {
        return this._
      }
    }

    function PQ(QQ) {
      let WQ = 3;
      return QQ.digits = function(XQ) {
        if (!arguments.length) return WQ;
        if (null == XQ) WQ = null;
        else {
          const QQ = Math.floor(XQ);
          if (!(QQ >= 0)) throw new RangeError(`invalid digits: ${XQ}`);
          WQ = QQ
        }
        return QQ
      }, () => new FQ(WQ)
    }
    FQ.prototype
  },
  6329: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => TQ
    });
    var wQ = !0,
      qQ = "Invariant failed";

    function TQ(QQ, WQ) {
      if (!QQ) {
        if (wQ) throw new Error(qQ);
        var XQ = "function" === typeof WQ ? WQ() : WQ,
          TQ = XQ ? "".concat(qQ, ": ").concat(XQ) : qQ;
        throw new Error(TQ)
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);