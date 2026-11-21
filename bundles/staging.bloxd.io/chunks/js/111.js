/*! For license information please see bqoxjr.111.c5989713.chunk.js.LICENSE.txt */
export const id = 111;
export const ids = [111];
export const modules = {
  6038: function(QQ, FQ, wQ) {
    var LQ;
    ! function() {
      var qQ, oQ = 1e9,
        DQ = {
          precision: 20,
          rounding: 4,
          toExpNeg: -7,
          toExpPos: 21,
          LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
        },
        kQ = !0,
        vQ = "[DecimalError] ",
        mQ = vQ + "Invalid argument: ",
        uQ = vQ + "Exponent out of range: ",
        HQ = Math.floor,
        bQ = Math.pow,
        YQ = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        xQ = 1e7,
        AQ = 9007199254740991,
        tQ = HQ(1286742750677284.5),
        eQ = {};

      function MQ(QQ, FQ) {
        var wQ, LQ, qQ, oQ, DQ, vQ, mQ, uQ, HQ = QQ.constructor,
          bQ = HQ.precision;
        if (!QQ.s || !FQ.s) return FQ.s || (FQ = new HQ(QQ)), kQ ? sQ(FQ, bQ) : FQ;
        if (mQ = QQ.d, uQ = FQ.d, DQ = QQ.e, qQ = FQ.e, mQ = mQ.slice(), oQ = DQ - qQ) {
          for (oQ < 0 ? (LQ = mQ, oQ = -oQ, vQ = uQ.length) : (LQ = uQ, qQ = DQ, vQ = mQ.length), oQ > (vQ = (DQ = Math.ceil(bQ / 7)) > vQ ? DQ + 1 : vQ + 1) && (oQ = vQ, LQ.length = 1), LQ.reverse(); oQ--;) LQ.push(0);
          LQ.reverse()
        }
        for ((vQ = mQ.length) - (oQ = uQ.length) < 0 && (oQ = vQ, LQ = uQ, uQ = mQ, mQ = LQ), wQ = 0; oQ;) wQ = (mQ[--oQ] = mQ[oQ] + uQ[oQ] + wQ) / xQ | 0, mQ[oQ] %= xQ;
        for (wQ && (mQ.unshift(wQ), ++qQ), vQ = mQ.length; 0 == mQ[--vQ];) mQ.pop();
        return FQ.d = mQ, FQ.e = qQ, kQ ? sQ(FQ, bQ) : FQ
      }

      function GQ(QQ, FQ, wQ) {
        if (QQ !== ~~QQ || QQ < FQ || QQ > wQ) throw Error(mQ + QQ)
      }

      function pQ(QQ) {
        var FQ, wQ, LQ, qQ = QQ.length - 1,
          oQ = "",
          DQ = QQ[0];
        if (qQ > 0) {
          for (oQ += DQ, FQ = 1; FQ < qQ; FQ++)(wQ = 7 - (LQ = QQ[FQ] + "").length) && (oQ += WQ(wQ)), oQ += LQ;
          (wQ = 7 - (LQ = (DQ = QQ[FQ]) + "").length) && (oQ += WQ(wQ))
        } else if (0 === DQ) return "0";
        for (; DQ % 10 === 0;) DQ /= 10;
        return oQ + DQ
      }
      eQ.absoluteValue = eQ.abs = function() {
        var QQ = new this.constructor(this);
        return QQ.s && (QQ.s = 1), QQ
      }, eQ.comparedTo = eQ.cmp = function(QQ) {
        var FQ, wQ, LQ, qQ, oQ = this;
        if (QQ = new oQ.constructor(QQ), oQ.s !== QQ.s) return oQ.s || -QQ.s;
        if (oQ.e !== QQ.e) return oQ.e > QQ.e ^ oQ.s < 0 ? 1 : -1;
        for (FQ = 0, wQ = (LQ = oQ.d.length) < (qQ = QQ.d.length) ? LQ : qQ; FQ < wQ; ++FQ)
          if (oQ.d[FQ] !== QQ.d[FQ]) return oQ.d[FQ] > QQ.d[FQ] ^ oQ.s < 0 ? 1 : -1;
        return LQ === qQ ? 0 : LQ > qQ ^ oQ.s < 0 ? 1 : -1
      }, eQ.decimalPlaces = eQ.dp = function() {
        var QQ = this,
          FQ = QQ.d.length - 1,
          wQ = 7 * (FQ - QQ.e);
        if (FQ = QQ.d[FQ])
          for (; FQ % 10 == 0; FQ /= 10) wQ--;
        return wQ < 0 ? 0 : wQ
      }, eQ.dividedBy = eQ.div = function(QQ) {
        return cQ(this, new this.constructor(QQ))
      }, eQ.dividedToIntegerBy = eQ.idiv = function(QQ) {
        var FQ = this.constructor;
        return sQ(cQ(this, new FQ(QQ), 0, 1), FQ.precision)
      }, eQ.equals = eQ.eq = function(QQ) {
        return !this.cmp(QQ)
      }, eQ.exponent = function() {
        return SQ(this)
      }, eQ.greaterThan = eQ.gt = function(QQ) {
        return this.cmp(QQ) > 0
      }, eQ.greaterThanOrEqualTo = eQ.gte = function(QQ) {
        return this.cmp(QQ) >= 0
      }, eQ.isInteger = eQ.isint = function() {
        return this.e > this.d.length - 2
      }, eQ.isNegative = eQ.isneg = function() {
        return this.s < 0
      }, eQ.isPositive = eQ.ispos = function() {
        return this.s > 0
      }, eQ.isZero = function() {
        return 0 === this.s
      }, eQ.lessThan = eQ.lt = function(QQ) {
        return this.cmp(QQ) < 0
      }, eQ.lessThanOrEqualTo = eQ.lte = function(QQ) {
        return this.cmp(QQ) < 1
      }, eQ.logarithm = eQ.log = function(QQ) {
        var FQ, wQ = this,
          LQ = wQ.constructor,
          oQ = LQ.precision,
          DQ = oQ + 5;
        if (void 0 === QQ) QQ = new LQ(10);
        else if ((QQ = new LQ(QQ)).s < 1 || QQ.eq(qQ)) throw Error(vQ + "NaN");
        if (wQ.s < 1) throw Error(vQ + (wQ.s ? "NaN" : "-Infinity"));
        return wQ.eq(qQ) ? new LQ(0) : (kQ = !1, FQ = cQ(RQ(wQ, DQ), RQ(QQ, DQ), DQ), kQ = !0, sQ(FQ, oQ))
      }, eQ.minus = eQ.sub = function(QQ) {
        var FQ = this;
        return QQ = new FQ.constructor(QQ), FQ.s == QQ.s ? rQ(FQ, QQ) : MQ(FQ, (QQ.s = -QQ.s, QQ))
      }, eQ.modulo = eQ.mod = function(QQ) {
        var FQ, wQ = this,
          LQ = wQ.constructor,
          qQ = LQ.precision;
        if (!(QQ = new LQ(QQ)).s) throw Error(vQ + "NaN");
        return wQ.s ? (kQ = !1, FQ = cQ(wQ, QQ, 0, 1).times(QQ), kQ = !0, wQ.minus(FQ)) : sQ(new LQ(wQ), qQ)
      }, eQ.naturalExponential = eQ.exp = function() {
        return CQ(this)
      }, eQ.naturalLogarithm = eQ.ln = function() {
        return RQ(this)
      }, eQ.negated = eQ.neg = function() {
        var QQ = new this.constructor(this);
        return QQ.s = -QQ.s || 0, QQ
      }, eQ.plus = eQ.add = function(QQ) {
        var FQ = this;
        return QQ = new FQ.constructor(QQ), FQ.s == QQ.s ? MQ(FQ, QQ) : rQ(FQ, (QQ.s = -QQ.s, QQ))
      }, eQ.precision = eQ.sd = function(QQ) {
        var FQ, wQ, LQ, qQ = this;
        if (void 0 !== QQ && QQ !== !!QQ && 1 !== QQ && 0 !== QQ) throw Error(mQ + QQ);
        if (FQ = SQ(qQ) + 1, wQ = 7 * (LQ = qQ.d.length - 1) + 1, LQ = qQ.d[LQ]) {
          for (; LQ % 10 == 0; LQ /= 10) wQ--;
          for (LQ = qQ.d[0]; LQ >= 10; LQ /= 10) wQ++
        }
        return QQ && FQ > wQ ? FQ : wQ
      }, eQ.squareRoot = eQ.sqrt = function() {
        var QQ, FQ, wQ, LQ, qQ, oQ, DQ, mQ = this,
          uQ = mQ.constructor;
        if (mQ.s < 1) {
          if (!mQ.s) return new uQ(0);
          throw Error(vQ + "NaN")
        }
        for (QQ = SQ(mQ), kQ = !1, 0 == (qQ = Math.sqrt(+mQ)) || qQ == 1 / 0 ? (((FQ = pQ(mQ.d)).length + QQ) % 2 == 0 && (FQ += "0"), qQ = Math.sqrt(FQ), QQ = HQ((QQ + 1) / 2) - (QQ < 0 || QQ % 2), LQ = new uQ(FQ = qQ == 1 / 0 ? "1e" + QQ : (FQ = qQ.toExponential()).slice(0, FQ.indexOf("e") + 1) + QQ)) : LQ = new uQ(qQ.toString()), qQ = DQ = (wQ = uQ.precision) + 3;;)
          if (LQ = (oQ = LQ).plus(cQ(mQ, oQ, DQ + 2)).times(.5), pQ(oQ.d).slice(0, DQ) === (FQ = pQ(LQ.d)).slice(0, DQ)) {
            if (FQ = FQ.slice(DQ - 3, DQ + 1), qQ == DQ && "4999" == FQ) {
              if (sQ(oQ, wQ + 1, 0), oQ.times(oQ).eq(mQ)) {
                LQ = oQ;
                break
              }
            } else if ("9999" != FQ) break;
            DQ += 4
          } return kQ = !0, sQ(LQ, wQ)
      }, eQ.times = eQ.mul = function(QQ) {
        var FQ, wQ, LQ, qQ, oQ, DQ, vQ, mQ, uQ, HQ = this,
          bQ = HQ.constructor,
          YQ = HQ.d,
          AQ = (QQ = new bQ(QQ)).d;
        if (!HQ.s || !QQ.s) return new bQ(0);
        for (QQ.s *= HQ.s, wQ = HQ.e + QQ.e, (mQ = YQ.length) < (uQ = AQ.length) && (oQ = YQ, YQ = AQ, AQ = oQ, DQ = mQ, mQ = uQ, uQ = DQ), oQ = [], LQ = DQ = mQ + uQ; LQ--;) oQ.push(0);
        for (LQ = uQ; --LQ >= 0;) {
          for (FQ = 0, qQ = mQ + LQ; qQ > LQ;) vQ = oQ[qQ] + AQ[LQ] * YQ[qQ - LQ - 1] + FQ, oQ[qQ--] = vQ % xQ | 0, FQ = vQ / xQ | 0;
          oQ[qQ] = (oQ[qQ] + FQ) % xQ | 0
        }
        for (; !oQ[--DQ];) oQ.pop();
        return FQ ? ++wQ : oQ.shift(), QQ.d = oQ, QQ.e = wQ, kQ ? sQ(QQ, bQ.precision) : QQ
      }, eQ.toDecimalPlaces = eQ.todp = function(QQ, FQ) {
        var wQ = this,
          LQ = wQ.constructor;
        return wQ = new LQ(wQ), void 0 === QQ ? wQ : (GQ(QQ, 0, oQ), void 0 === FQ ? FQ = LQ.rounding : GQ(FQ, 0, 8), sQ(wQ, QQ + SQ(wQ) + 1, FQ))
      }, eQ.toExponential = function(QQ, FQ) {
        var wQ, LQ = this,
          qQ = LQ.constructor;
        return void 0 === QQ ? wQ = IQ(LQ, !0) : (GQ(QQ, 0, oQ), void 0 === FQ ? FQ = qQ.rounding : GQ(FQ, 0, 8), wQ = IQ(LQ = sQ(new qQ(LQ), QQ + 1, FQ), !0, QQ + 1)), wQ
      }, eQ.toFixed = function(QQ, FQ) {
        var wQ, LQ, qQ = this,
          DQ = qQ.constructor;
        return void 0 === QQ ? IQ(qQ) : (GQ(QQ, 0, oQ), void 0 === FQ ? FQ = DQ.rounding : GQ(FQ, 0, 8), wQ = IQ((LQ = sQ(new DQ(qQ), QQ + SQ(qQ) + 1, FQ)).abs(), !1, QQ + SQ(LQ) + 1), qQ.isneg() && !qQ.isZero() ? "-" + wQ : wQ)
      }, eQ.toInteger = eQ.toint = function() {
        var QQ = this,
          FQ = QQ.constructor;
        return sQ(new FQ(QQ), SQ(QQ) + 1, FQ.rounding)
      }, eQ.toNumber = function() {
        return +this
      }, eQ.toPower = eQ.pow = function(QQ) {
        var FQ, wQ, LQ, oQ, DQ, mQ, uQ = this,
          bQ = uQ.constructor,
          YQ = +(QQ = new bQ(QQ));
        if (!QQ.s) return new bQ(qQ);
        if (!(uQ = new bQ(uQ)).s) {
          if (QQ.s < 1) throw Error(vQ + "Infinity");
          return uQ
        }
        if (uQ.eq(qQ)) return uQ;
        if (LQ = bQ.precision, QQ.eq(qQ)) return sQ(uQ, LQ);
        if (mQ = (FQ = QQ.e) >= (wQ = QQ.d.length - 1), DQ = uQ.s, mQ) {
          if ((wQ = YQ < 0 ? -YQ : YQ) <= AQ) {
            for (oQ = new bQ(qQ), FQ = Math.ceil(LQ / 7 + 4), kQ = !1; wQ % 2 && UQ((oQ = oQ.times(uQ)).d, FQ), 0 !== (wQ = HQ(wQ / 2));) UQ((uQ = uQ.times(uQ)).d, FQ);
            return kQ = !0, QQ.s < 0 ? new bQ(qQ).div(oQ) : sQ(oQ, LQ)
          }
        } else if (DQ < 0) throw Error(vQ + "NaN");
        return DQ = DQ < 0 && 1 & QQ.d[Math.max(FQ, wQ)] ? -1 : 1, uQ.s = 1, kQ = !1, oQ = QQ.times(RQ(uQ, LQ + 12)), kQ = !0, (oQ = CQ(oQ)).s = DQ, oQ
      }, eQ.toPrecision = function(QQ, FQ) {
        var wQ, LQ, qQ = this,
          DQ = qQ.constructor;
        return void 0 === QQ ? LQ = IQ(qQ, (wQ = SQ(qQ)) <= DQ.toExpNeg || wQ >= DQ.toExpPos) : (GQ(QQ, 1, oQ), void 0 === FQ ? FQ = DQ.rounding : GQ(FQ, 0, 8), LQ = IQ(qQ = sQ(new DQ(qQ), QQ, FQ), QQ <= (wQ = SQ(qQ)) || wQ <= DQ.toExpNeg, QQ)), LQ
      }, eQ.toSignificantDigits = eQ.tosd = function(QQ, FQ) {
        var wQ = this.constructor;
        return void 0 === QQ ? (QQ = wQ.precision, FQ = wQ.rounding) : (GQ(QQ, 1, oQ), void 0 === FQ ? FQ = wQ.rounding : GQ(FQ, 0, 8)), sQ(new wQ(this), QQ, FQ)
      }, eQ.toString = eQ.valueOf = eQ.val = eQ.toJSON = function() {
        var QQ = this,
          FQ = SQ(QQ),
          wQ = QQ.constructor;
        return IQ(QQ, FQ <= wQ.toExpNeg || FQ >= wQ.toExpPos)
      };
      var cQ = function() {
        function QQ(QQ, FQ) {
          var wQ, LQ = 0,
            qQ = QQ.length;
          for (QQ = QQ.slice(); qQ--;) wQ = QQ[qQ] * FQ + LQ, QQ[qQ] = wQ % xQ | 0, LQ = wQ / xQ | 0;
          return LQ && QQ.unshift(LQ), QQ
        }

        function FQ(QQ, FQ, wQ, LQ) {
          var qQ, oQ;
          if (wQ != LQ) oQ = wQ > LQ ? 1 : -1;
          else
            for (qQ = oQ = 0; qQ < wQ; qQ++)
              if (QQ[qQ] != FQ[qQ]) {
                oQ = QQ[qQ] > FQ[qQ] ? 1 : -1;
                break
              } return oQ
        }

        function wQ(QQ, FQ, wQ) {
          for (var LQ = 0; wQ--;) QQ[wQ] -= LQ, LQ = QQ[wQ] < FQ[wQ] ? 1 : 0, QQ[wQ] = LQ * xQ + QQ[wQ] - FQ[wQ];
          for (; !QQ[0] && QQ.length > 1;) QQ.shift()
        }
        return function(LQ, qQ, oQ, DQ) {
          var kQ, mQ, uQ, HQ, bQ, YQ, AQ, tQ, eQ, MQ, GQ, pQ, cQ, CQ, iQ, WQ, RQ, OQ, rQ = LQ.constructor,
            IQ = LQ.s == qQ.s ? 1 : -1,
            UQ = LQ.d,
            NQ = qQ.d;
          if (!LQ.s) return new rQ(LQ);
          if (!qQ.s) throw Error(vQ + "Division by zero");
          for (mQ = LQ.e - qQ.e, RQ = NQ.length, iQ = UQ.length, tQ = (AQ = new rQ(IQ)).d = [], uQ = 0; NQ[uQ] == (UQ[uQ] || 0);) ++uQ;
          if (NQ[uQ] > (UQ[uQ] || 0) && --mQ, (pQ = null == oQ ? oQ = rQ.precision : DQ ? oQ + (SQ(LQ) - SQ(qQ)) + 1 : oQ) < 0) return new rQ(0);
          if (pQ = pQ / 7 + 2 | 0, uQ = 0, 1 == RQ)
            for (HQ = 0, NQ = NQ[0], pQ++;
              (uQ < iQ || HQ) && pQ--; uQ++) cQ = HQ * xQ + (UQ[uQ] || 0), tQ[uQ] = cQ / NQ | 0, HQ = cQ % NQ | 0;
          else {
            for ((HQ = xQ / (NQ[0] + 1) | 0) > 1 && (NQ = QQ(NQ, HQ), UQ = QQ(UQ, HQ), RQ = NQ.length, iQ = UQ.length), CQ = RQ, MQ = (eQ = UQ.slice(0, RQ)).length; MQ < RQ;) eQ[MQ++] = 0;
            (OQ = NQ.slice()).unshift(0), WQ = NQ[0], NQ[1] >= xQ / 2 && ++WQ;
            do {
              HQ = 0, (kQ = FQ(NQ, eQ, RQ, MQ)) < 0 ? (GQ = eQ[0], RQ != MQ && (GQ = GQ * xQ + (eQ[1] || 0)), (HQ = GQ / WQ | 0) > 1 ? (HQ >= xQ && (HQ = xQ - 1), 1 == (kQ = FQ(bQ = QQ(NQ, HQ), eQ, YQ = bQ.length, MQ = eQ.length)) && (HQ--, wQ(bQ, RQ < YQ ? OQ : NQ, YQ))) : (0 == HQ && (kQ = HQ = 1), bQ = NQ.slice()), (YQ = bQ.length) < MQ && bQ.unshift(0), wQ(eQ, bQ, MQ), -1 == kQ && (kQ = FQ(NQ, eQ, RQ, MQ = eQ.length)) < 1 && (HQ++, wQ(eQ, RQ < MQ ? OQ : NQ, MQ)), MQ = eQ.length) : 0 === kQ && (HQ++, eQ = [0]), tQ[uQ++] = HQ, kQ && eQ[0] ? eQ[MQ++] = UQ[CQ] || 0 : (eQ = [UQ[CQ]], MQ = 1)
            } while ((CQ++ < iQ || void 0 !== eQ[0]) && pQ--)
          }
          return tQ[0] || tQ.shift(), AQ.e = mQ, sQ(AQ, DQ ? oQ + SQ(AQ) + 1 : oQ)
        }
      }();

      function CQ(QQ, FQ) {
        var wQ, LQ, oQ, DQ, vQ, mQ = 0,
          HQ = 0,
          YQ = QQ.constructor,
          xQ = YQ.precision;
        if (SQ(QQ) > 16) throw Error(uQ + SQ(QQ));
        if (!QQ.s) return new YQ(qQ);
        for (null == FQ ? (kQ = !1, vQ = xQ) : vQ = FQ, DQ = new YQ(.03125); QQ.abs().gte(.1);) QQ = QQ.times(DQ), HQ += 5;
        for (vQ += Math.log(bQ(2, HQ)) / Math.LN10 * 2 + 5 | 0, wQ = LQ = oQ = new YQ(qQ), YQ.precision = vQ;;) {
          if (LQ = sQ(LQ.times(QQ), vQ), wQ = wQ.times(++mQ), pQ((DQ = oQ.plus(cQ(LQ, wQ, vQ))).d).slice(0, vQ) === pQ(oQ.d).slice(0, vQ)) {
            for (; HQ--;) oQ = sQ(oQ.times(oQ), vQ);
            return YQ.precision = xQ, null == FQ ? (kQ = !0, sQ(oQ, xQ)) : oQ
          }
          oQ = DQ
        }
      }

      function SQ(QQ) {
        for (var FQ = 7 * QQ.e, wQ = QQ.d[0]; wQ >= 10; wQ /= 10) FQ++;
        return FQ
      }

      function iQ(QQ, FQ, wQ) {
        if (FQ > QQ.LN10.sd()) throw kQ = !0, wQ && (QQ.precision = wQ), Error(vQ + "LN10 precision limit exceeded");
        return sQ(new QQ(QQ.LN10), FQ)
      }

      function WQ(QQ) {
        for (var FQ = ""; QQ--;) FQ += "0";
        return FQ
      }

      function RQ(QQ, FQ) {
        var wQ, LQ, oQ, DQ, mQ, uQ, HQ, bQ, YQ, xQ = 1,
          AQ = QQ,
          tQ = AQ.d,
          eQ = AQ.constructor,
          MQ = eQ.precision;
        if (AQ.s < 1) throw Error(vQ + (AQ.s ? "NaN" : "-Infinity"));
        if (AQ.eq(qQ)) return new eQ(0);
        if (null == FQ ? (kQ = !1, bQ = MQ) : bQ = FQ, AQ.eq(10)) return null == FQ && (kQ = !0), iQ(eQ, bQ);
        if (bQ += 10, eQ.precision = bQ, LQ = (wQ = pQ(tQ)).charAt(0), DQ = SQ(AQ), !(Math.abs(DQ) < 15e14)) return HQ = iQ(eQ, bQ + 2, MQ).times(DQ + ""), AQ = RQ(new eQ(LQ + "." + wQ.slice(1)), bQ - 10).plus(HQ), eQ.precision = MQ, null == FQ ? (kQ = !0, sQ(AQ, MQ)) : AQ;
        for (; LQ < 7 && 1 != LQ || 1 == LQ && wQ.charAt(1) > 3;) LQ = (wQ = pQ((AQ = AQ.times(QQ)).d)).charAt(0), xQ++;
        for (DQ = SQ(AQ), LQ > 1 ? (AQ = new eQ("0." + wQ), DQ++) : AQ = new eQ(LQ + "." + wQ.slice(1)), uQ = mQ = AQ = cQ(AQ.minus(qQ), AQ.plus(qQ), bQ), YQ = sQ(AQ.times(AQ), bQ), oQ = 3;;) {
          if (mQ = sQ(mQ.times(YQ), bQ), pQ((HQ = uQ.plus(cQ(mQ, new eQ(oQ), bQ))).d).slice(0, bQ) === pQ(uQ.d).slice(0, bQ)) return uQ = uQ.times(2), 0 !== DQ && (uQ = uQ.plus(iQ(eQ, bQ + 2, MQ).times(DQ + ""))), uQ = cQ(uQ, new eQ(xQ), bQ), eQ.precision = MQ, null == FQ ? (kQ = !0, sQ(uQ, MQ)) : uQ;
          uQ = HQ, oQ += 2
        }
      }

      function OQ(QQ, FQ) {
        var wQ, LQ, qQ;
        for ((wQ = FQ.indexOf(".")) > -1 && (FQ = FQ.replace(".", "")), (LQ = FQ.search(/e/i)) > 0 ? (wQ < 0 && (wQ = LQ), wQ += +FQ.slice(LQ + 1), FQ = FQ.substring(0, LQ)) : wQ < 0 && (wQ = FQ.length), LQ = 0; 48 === FQ.charCodeAt(LQ);) ++LQ;
        for (qQ = FQ.length; 48 === FQ.charCodeAt(qQ - 1);) --qQ;
        if (FQ = FQ.slice(LQ, qQ)) {
          if (qQ -= LQ, wQ = wQ - LQ - 1, QQ.e = HQ(wQ / 7), QQ.d = [], LQ = (wQ + 1) % 7, wQ < 0 && (LQ += 7), LQ < qQ) {
            for (LQ && QQ.d.push(+FQ.slice(0, LQ)), qQ -= 7; LQ < qQ;) QQ.d.push(+FQ.slice(LQ, LQ += 7));
            LQ = 7 - (FQ = FQ.slice(LQ)).length
          } else LQ -= qQ;
          for (; LQ--;) FQ += "0";
          if (QQ.d.push(+FQ), kQ && (QQ.e > tQ || QQ.e < -tQ)) throw Error(uQ + wQ)
        } else QQ.s = 0, QQ.e = 0, QQ.d = [0];
        return QQ
      }

      function sQ(QQ, FQ, wQ) {
        var LQ, qQ, oQ, DQ, vQ, mQ, YQ, AQ, eQ = QQ.d;
        for (DQ = 1, oQ = eQ[0]; oQ >= 10; oQ /= 10) DQ++;
        if ((LQ = FQ - DQ) < 0) LQ += 7, qQ = FQ, YQ = eQ[AQ = 0];
        else {
          if ((AQ = Math.ceil((LQ + 1) / 7)) >= (oQ = eQ.length)) return QQ;
          for (YQ = oQ = eQ[AQ], DQ = 1; oQ >= 10; oQ /= 10) DQ++;
          qQ = (LQ %= 7) - 7 + DQ
        }
        if (void 0 !== wQ && (vQ = YQ / (oQ = bQ(10, DQ - qQ - 1)) % 10 | 0, mQ = FQ < 0 || void 0 !== eQ[AQ + 1] || YQ % oQ, mQ = wQ < 4 ? (vQ || mQ) && (0 == wQ || wQ == (QQ.s < 0 ? 3 : 2)) : vQ > 5 || 5 == vQ && (4 == wQ || mQ || 6 == wQ && (LQ > 0 ? qQ > 0 ? YQ / bQ(10, DQ - qQ) : 0 : eQ[AQ - 1]) % 10 & 1 || wQ == (QQ.s < 0 ? 8 : 7))), FQ < 1 || !eQ[0]) return mQ ? (oQ = SQ(QQ), eQ.length = 1, FQ = FQ - oQ - 1, eQ[0] = bQ(10, (7 - FQ % 7) % 7), QQ.e = HQ(-FQ / 7) || 0) : (eQ.length = 1, eQ[0] = QQ.e = QQ.s = 0), QQ;
        if (0 == LQ ? (eQ.length = AQ, oQ = 1, AQ--) : (eQ.length = AQ + 1, oQ = bQ(10, 7 - LQ), eQ[AQ] = qQ > 0 ? (YQ / bQ(10, DQ - qQ) % bQ(10, qQ) | 0) * oQ : 0), mQ)
          for (;;) {
            if (0 == AQ) {
              (eQ[0] += oQ) == xQ && (eQ[0] = 1, ++QQ.e);
              break
            }
            if (eQ[AQ] += oQ, eQ[AQ] != xQ) break;
            eQ[AQ--] = 0, oQ = 1
          }
        for (LQ = eQ.length; 0 === eQ[--LQ];) eQ.pop();
        if (kQ && (QQ.e > tQ || QQ.e < -tQ)) throw Error(uQ + SQ(QQ));
        return QQ
      }

      function rQ(QQ, FQ) {
        var wQ, LQ, qQ, oQ, DQ, vQ, mQ, uQ, HQ, bQ, YQ = QQ.constructor,
          AQ = YQ.precision;
        if (!QQ.s || !FQ.s) return FQ.s ? FQ.s = -FQ.s : FQ = new YQ(QQ), kQ ? sQ(FQ, AQ) : FQ;
        if (mQ = QQ.d, bQ = FQ.d, LQ = FQ.e, uQ = QQ.e, mQ = mQ.slice(), DQ = uQ - LQ) {
          for ((HQ = DQ < 0) ? (wQ = mQ, DQ = -DQ, vQ = bQ.length) : (wQ = bQ, LQ = uQ, vQ = mQ.length), DQ > (qQ = Math.max(Math.ceil(AQ / 7), vQ) + 2) && (DQ = qQ, wQ.length = 1), wQ.reverse(), qQ = DQ; qQ--;) wQ.push(0);
          wQ.reverse()
        } else {
          for ((HQ = (qQ = mQ.length) < (vQ = bQ.length)) && (vQ = qQ), qQ = 0; qQ < vQ; qQ++)
            if (mQ[qQ] != bQ[qQ]) {
              HQ = mQ[qQ] < bQ[qQ];
              break
            } DQ = 0
        }
        for (HQ && (wQ = mQ, mQ = bQ, bQ = wQ, FQ.s = -FQ.s), vQ = mQ.length, qQ = bQ.length - vQ; qQ > 0; --qQ) mQ[vQ++] = 0;
        for (qQ = bQ.length; qQ > DQ;) {
          if (mQ[--qQ] < bQ[qQ]) {
            for (oQ = qQ; oQ && 0 === mQ[--oQ];) mQ[oQ] = xQ - 1;
            --mQ[oQ], mQ[qQ] += xQ
          }
          mQ[qQ] -= bQ[qQ]
        }
        for (; 0 === mQ[--vQ];) mQ.pop();
        for (; 0 === mQ[0]; mQ.shift()) --LQ;
        return mQ[0] ? (FQ.d = mQ, FQ.e = LQ, kQ ? sQ(FQ, AQ) : FQ) : new YQ(0)
      }

      function IQ(QQ, FQ, wQ) {
        var LQ, qQ = SQ(QQ),
          oQ = pQ(QQ.d),
          DQ = oQ.length;
        return FQ ? (wQ && (LQ = wQ - DQ) > 0 ? oQ = oQ.charAt(0) + "." + oQ.slice(1) + WQ(LQ) : DQ > 1 && (oQ = oQ.charAt(0) + "." + oQ.slice(1)), oQ = oQ + (qQ < 0 ? "e" : "e+") + qQ) : qQ < 0 ? (oQ = "0." + WQ(-qQ - 1) + oQ, wQ && (LQ = wQ - DQ) > 0 && (oQ += WQ(LQ))) : qQ >= DQ ? (oQ += WQ(qQ + 1 - DQ), wQ && (LQ = wQ - qQ - 1) > 0 && (oQ = oQ + "." + WQ(LQ))) : ((LQ = qQ + 1) < DQ && (oQ = oQ.slice(0, LQ) + "." + oQ.slice(LQ)), wQ && (LQ = wQ - DQ) > 0 && (qQ + 1 === DQ && (oQ += "."), oQ += WQ(LQ))), QQ.s < 0 ? "-" + oQ : oQ
      }

      function UQ(QQ, FQ) {
        if (QQ.length > FQ) return QQ.length = FQ, !0
      }

      function NQ(QQ) {
        if (!QQ || "object" !== typeof QQ) throw Error(vQ + "Object expected");
        var FQ, wQ, LQ, qQ = ["precision", 1, oQ, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
        for (FQ = 0; FQ < qQ.length; FQ += 3)
          if (void 0 !== (LQ = QQ[wQ = qQ[FQ]])) {
            if (!(HQ(LQ) === LQ && LQ >= qQ[FQ + 1] && LQ <= qQ[FQ + 2])) throw Error(mQ + wQ + ": " + LQ);
            this[wQ] = LQ
          } if (void 0 !== (LQ = QQ[wQ = "LN10"])) {
          if (LQ != Math.LN10) throw Error(mQ + wQ + ": " + LQ);
          this[wQ] = new this(LQ)
        }
        return this
      }
      DQ = function QQ(FQ) {
        var wQ, LQ, qQ;

        function oQ(QQ) {
          var FQ = this;
          if (!(FQ instanceof oQ)) return new oQ(QQ);
          if (FQ.constructor = oQ, QQ instanceof oQ) return FQ.s = QQ.s, FQ.e = QQ.e, void(FQ.d = (QQ = QQ.d) ? QQ.slice() : QQ);
          if ("number" === typeof QQ) {
            if (0 * QQ !== 0) throw Error(mQ + QQ);
            if (QQ > 0) FQ.s = 1;
            else {
              if (!(QQ < 0)) return FQ.s = 0, FQ.e = 0, void(FQ.d = [0]);
              QQ = -QQ, FQ.s = -1
            }
            return QQ === ~~QQ && QQ < 1e7 ? (FQ.e = 0, void(FQ.d = [QQ])) : OQ(FQ, QQ.toString())
          }
          if ("string" !== typeof QQ) throw Error(mQ + QQ);
          if (45 === QQ.charCodeAt(0) ? (QQ = QQ.slice(1), FQ.s = -1) : FQ.s = 1, !YQ.test(QQ)) throw Error(mQ + QQ);
          OQ(FQ, QQ)
        }
        if (oQ.prototype = eQ, oQ.ROUND_UP = 0, oQ.ROUND_DOWN = 1, oQ.ROUND_CEIL = 2, oQ.ROUND_FLOOR = 3, oQ.ROUND_HALF_UP = 4, oQ.ROUND_HALF_DOWN = 5, oQ.ROUND_HALF_EVEN = 6, oQ.ROUND_HALF_CEIL = 7, oQ.ROUND_HALF_FLOOR = 8, oQ.clone = QQ, oQ.config = oQ.set = NQ, void 0 === FQ && (FQ = {}), FQ)
          for (qQ = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], wQ = 0; wQ < qQ.length;) FQ.hasOwnProperty(LQ = qQ[wQ++]) || (FQ[LQ] = this[LQ]);
        return oQ.config(FQ), oQ
      }(DQ), DQ.default = DQ.Decimal = DQ, qQ = new DQ(1), void 0 === (LQ = function() {
        return DQ
      }.call(FQ, wQ, FQ, QQ)) || (QQ.exports = LQ)
    }()
  },
  5605: (QQ, FQ, wQ) => {
    var LQ = wQ(5090)(wQ(4947), "DataView");
    QQ.exports = LQ
  },
  5070: (QQ, FQ, wQ) => {
    var LQ = wQ(5077),
      qQ = wQ(5123),
      oQ = wQ(5130),
      DQ = wQ(5135),
      kQ = wQ(5142);

    function vQ(QQ) {
      var FQ = -1,
        wQ = null == QQ ? 0 : QQ.length;
      for (this.clear(); ++FQ < wQ;) {
        var LQ = QQ[FQ];
        this.set(LQ[0], LQ[1])
      }
    }
    vQ.prototype.clear = LQ, vQ.prototype.delete = qQ, vQ.prototype.get = oQ, vQ.prototype.has = DQ, vQ.prototype.set = kQ, QQ.exports = vQ
  },
  5150: (QQ, FQ, wQ) => {
    var LQ = wQ(5158),
      qQ = wQ(5164),
      oQ = wQ(5178),
      DQ = wQ(5183),
      kQ = wQ(5187);

    function vQ(QQ) {
      var FQ = -1,
        wQ = null == QQ ? 0 : QQ.length;
      for (this.clear(); ++FQ < wQ;) {
        var LQ = QQ[FQ];
        this.set(LQ[0], LQ[1])
      }
    }
    vQ.prototype.clear = LQ, vQ.prototype.delete = qQ, vQ.prototype.get = oQ, vQ.prototype.has = DQ, vQ.prototype.set = kQ, QQ.exports = vQ
  },
  5193: (QQ, FQ, wQ) => {
    var LQ = wQ(5090)(wQ(4947), "Map");
    QQ.exports = LQ
  },
  5056: (QQ, FQ, wQ) => {
    var LQ = wQ(5061),
      qQ = wQ(5196),
      oQ = wQ(5211),
      DQ = wQ(5217),
      kQ = wQ(5223);

    function vQ(QQ) {
      var FQ = -1,
        wQ = null == QQ ? 0 : QQ.length;
      for (this.clear(); ++FQ < wQ;) {
        var LQ = QQ[FQ];
        this.set(LQ[0], LQ[1])
      }
    }
    vQ.prototype.clear = LQ, vQ.prototype.delete = qQ, vQ.prototype.get = oQ, vQ.prototype.has = DQ, vQ.prototype.set = kQ, QQ.exports = vQ
  },
  5608: (QQ, FQ, wQ) => {
    var LQ = wQ(5090)(wQ(4947), "Promise");
    QQ.exports = LQ
  },
  5611: (QQ, FQ, wQ) => {
    var LQ = wQ(5090)(wQ(4947), "Set");
    QQ.exports = LQ
  },
  5460: (QQ, FQ, wQ) => {
    var LQ = wQ(5056),
      qQ = wQ(5463),
      oQ = wQ(5468);

    function DQ(QQ) {
      var FQ = -1,
        wQ = null == QQ ? 0 : QQ.length;
      for (this.__data__ = new LQ; ++FQ < wQ;) this.add(QQ[FQ])
    }
    DQ.prototype.add = DQ.prototype.push = qQ, DQ.prototype.has = oQ, QQ.exports = DQ
  },
  5403: (QQ, FQ, wQ) => {
    var LQ = wQ(5150),
      qQ = wQ(5406),
      oQ = wQ(5414),
      DQ = wQ(5418),
      kQ = wQ(5425),
      vQ = wQ(5434);

    function mQ(QQ) {
      var FQ = this.__data__ = new LQ(QQ);
      this.size = FQ.size
    }
    mQ.prototype.clear = qQ, mQ.prototype.delete = oQ, mQ.prototype.get = DQ, mQ.prototype.has = kQ, mQ.prototype.set = vQ, QQ.exports = mQ
  },
  4980: (QQ, FQ, wQ) => {
    var LQ = wQ(4947).Symbol;
    QQ.exports = LQ
  },
  5491: (QQ, FQ, wQ) => {
    var LQ = wQ(4947).Uint8Array;
    QQ.exports = LQ
  },
  5615: (QQ, FQ, wQ) => {
    var LQ = wQ(5090)(wQ(4947), "WeakMap");
    QQ.exports = LQ
  },
  5761: QQ => {
    QQ.exports = function(QQ, FQ, wQ) {
      switch (wQ.length) {
        case 0:
          return QQ.call(FQ);
        case 1:
          return QQ.call(FQ, wQ[0]);
        case 2:
          return QQ.call(FQ, wQ[0], wQ[1]);
        case 3:
          return QQ.call(FQ, wQ[0], wQ[1], wQ[2])
      }
      return QQ.apply(FQ, wQ)
    }
  },
  6090: QQ => {
    QQ.exports = function(QQ, FQ) {
      for (var wQ = -1, LQ = null == QQ ? 0 : QQ.length; ++wQ < LQ;)
        if (!FQ(QQ[wQ], wQ, QQ)) return !1;
      return !0
    }
  },
  5521: QQ => {
    QQ.exports = function(QQ, FQ) {
      for (var wQ = -1, LQ = null == QQ ? 0 : QQ.length, qQ = 0, oQ = []; ++wQ < LQ;) {
        var DQ = QQ[wQ];
        FQ(DQ, wQ, QQ) && (oQ[qQ++] = DQ)
      }
      return oQ
    }
  },
  5836: (QQ, FQ, wQ) => {
    var LQ = wQ(5840);
    QQ.exports = function(QQ, FQ) {
      return !!(null == QQ ? 0 : QQ.length) && LQ(QQ, FQ, 0) > -1
    }
  },
  5866: QQ => {
    QQ.exports = function(QQ, FQ, wQ) {
      for (var LQ = -1, qQ = null == QQ ? 0 : QQ.length; ++LQ < qQ;)
        if (wQ(FQ, QQ[LQ])) return !0;
      return !1
    }
  },
  5533: (QQ, FQ, wQ) => {
    var LQ = wQ(5539),
      qQ = wQ(5372),
      oQ = wQ(5008),
      DQ = wQ(5546),
      kQ = wQ(5336),
      vQ = wQ(5553),
      mQ = Object.prototype.hasOwnProperty;
    QQ.exports = function(QQ, FQ) {
      var wQ = oQ(QQ),
        uQ = !wQ && qQ(QQ),
        HQ = !wQ && !uQ && DQ(QQ),
        bQ = !wQ && !uQ && !HQ && vQ(QQ),
        YQ = wQ || uQ || HQ || bQ,
        xQ = YQ ? LQ(QQ.length, String) : [],
        AQ = xQ.length;
      for (var tQ in QQ) !FQ && !mQ.call(QQ, tQ) || YQ && ("length" == tQ || HQ && ("offset" == tQ || "parent" == tQ) || bQ && ("buffer" == tQ || "byteLength" == tQ || "byteOffset" == tQ) || kQ(tQ, AQ)) || xQ.push(tQ);
      return xQ
    }
  },
  5231: QQ => {
    QQ.exports = function(QQ, FQ) {
      for (var wQ = -1, LQ = null == QQ ? 0 : QQ.length, qQ = Array(LQ); ++wQ < LQ;) qQ[wQ] = FQ(QQ[wQ], wQ, QQ);
      return qQ
    }
  },
  5356: QQ => {
    QQ.exports = function(QQ, FQ) {
      for (var wQ = -1, LQ = FQ.length, qQ = QQ.length; ++wQ < LQ;) QQ[qQ + wQ] = FQ[wQ];
      return QQ
    }
  },
  5470: QQ => {
    QQ.exports = function(QQ, FQ) {
      for (var wQ = -1, LQ = null == QQ ? 0 : QQ.length; ++wQ < LQ;)
        if (FQ(QQ[wQ], wQ, QQ)) return !0;
      return !1
    }
  },
  5934: QQ => {
    QQ.exports = function(QQ) {
      return QQ.split("")
    }
  },
  5171: (QQ, FQ, wQ) => {
    var LQ = wQ(5174);
    QQ.exports = function(QQ, FQ) {
      for (var wQ = QQ.length; wQ--;)
        if (LQ(QQ[wQ][0], FQ)) return wQ;
      return -1
    }
  },
  6079: (QQ, FQ, wQ) => {
    var LQ = wQ(5776);
    QQ.exports = function(QQ, FQ, wQ) {
      "__proto__" == FQ && LQ ? LQ(QQ, FQ, {
        configurable: !0,
        enumerable: !0,
        value: wQ,
        writable: !0
      }) : QQ[FQ] = wQ
    }
  },
  5696: (QQ, FQ, wQ) => {
    var LQ = wQ(5703),
      qQ = wQ(5722)(LQ);
    QQ.exports = qQ
  },
  6093: (QQ, FQ, wQ) => {
    var LQ = wQ(5696);
    QQ.exports = function(QQ, FQ) {
      var wQ = !0;
      return LQ(QQ, (function(QQ, LQ, qQ) {
        return wQ = !!FQ(QQ, LQ, qQ)
      })), wQ
    }
  },
  6003: (QQ, FQ, wQ) => {
    var LQ = wQ(4966);
    QQ.exports = function(QQ, FQ, wQ) {
      for (var qQ = -1, oQ = QQ.length; ++qQ < oQ;) {
        var DQ = QQ[qQ],
          kQ = FQ(DQ);
        if (null != kQ && (void 0 === vQ ? kQ === kQ && !LQ(kQ) : wQ(kQ, vQ))) var vQ = kQ,
          mQ = DQ
      }
      return mQ
    }
  },
  5848: QQ => {
    QQ.exports = function(QQ, FQ, wQ, LQ) {
      for (var qQ = QQ.length, oQ = wQ + (LQ ? 1 : -1); LQ ? oQ-- : ++oQ < qQ;)
        if (FQ(QQ[oQ], oQ, QQ)) return oQ;
      return -1
    }
  },
  5353: (QQ, FQ, wQ) => {
    var LQ = wQ(5356),
      qQ = wQ(5365);
    QQ.exports = function QQ(FQ, wQ, oQ, DQ, kQ) {
      var vQ = -1,
        mQ = FQ.length;
      for (oQ || (oQ = qQ), kQ || (kQ = []); ++vQ < mQ;) {
        var uQ = FQ[vQ];
        wQ > 0 && oQ(uQ) ? wQ > 1 ? QQ(uQ, wQ - 1, oQ, DQ, kQ) : LQ(kQ, uQ) : DQ || (kQ[kQ.length] = uQ)
      }
      return kQ
    }
  },
  5707: (QQ, FQ, wQ) => {
    var LQ = wQ(5715)();
    QQ.exports = LQ
  },
  5703: (QQ, FQ, wQ) => {
    var LQ = wQ(5707),
      qQ = wQ(5530);
    QQ.exports = function(QQ, FQ) {
      return QQ && LQ(QQ, FQ, qQ)
    }
  },
  5026: (QQ, FQ, wQ) => {
    var LQ = wQ(5031),
      qQ = wQ(5238);
    QQ.exports = function(QQ, FQ) {
      for (var wQ = 0, oQ = (FQ = LQ(FQ, QQ)).length; null != QQ && wQ < oQ;) QQ = QQ[qQ(FQ[wQ++])];
      return wQ && wQ == oQ ? QQ : void 0
    }
  },
  5513: (QQ, FQ, wQ) => {
    var LQ = wQ(5356),
      qQ = wQ(5008);
    QQ.exports = function(QQ, FQ, wQ) {
      var oQ = FQ(QQ);
      return qQ(QQ) ? oQ : LQ(oQ, wQ(QQ))
    }
  },
  4972: (QQ, FQ, wQ) => {
    var LQ = wQ(4980),
      qQ = wQ(4984),
      oQ = wQ(4993),
      DQ = LQ ? LQ.toStringTag : void 0;
    QQ.exports = function(QQ) {
      return null == QQ ? void 0 === QQ ? "[object Undefined]" : "[object Null]" : DQ && DQ in Object(QQ) ? qQ(QQ) : oQ(QQ)
    }
  },
  6008: QQ => {
    QQ.exports = function(QQ, FQ) {
      return QQ > FQ
    }
  },
  5654: QQ => {
    QQ.exports = function(QQ, FQ) {
      return null != QQ && FQ in Object(QQ)
    }
  },
  5840: (QQ, FQ, wQ) => {
    var LQ = wQ(5848),
      qQ = wQ(5851),
      oQ = wQ(5860);
    QQ.exports = function(QQ, FQ, wQ) {
      return FQ === FQ ? oQ(QQ, FQ, wQ) : LQ(QQ, qQ, wQ)
    }
  },
  5381: (QQ, FQ, wQ) => {
    var LQ = wQ(4972),
      qQ = wQ(4995);
    QQ.exports = function(QQ) {
      return qQ(QQ) && "[object Arguments]" == LQ(QQ)
    }
  },
  5440: (QQ, FQ, wQ) => {
    var LQ = wQ(5449),
      qQ = wQ(4995);
    QQ.exports = function QQ(FQ, wQ, oQ, DQ, kQ) {
      return FQ === wQ || (null == FQ || null == wQ || !qQ(FQ) && !qQ(wQ) ? FQ !== FQ && wQ !== wQ : LQ(FQ, wQ, oQ, DQ, QQ, kQ))
    }
  },
  5449: (QQ, FQ, wQ) => {
    var LQ = wQ(5403),
      qQ = wQ(5455),
      oQ = wQ(5482),
      DQ = wQ(5504),
      kQ = wQ(5597),
      vQ = wQ(5008),
      mQ = wQ(5546),
      uQ = wQ(5553),
      HQ = "[object Arguments]",
      bQ = "[object Array]",
      YQ = "[object Object]",
      xQ = Object.prototype.hasOwnProperty;
    QQ.exports = function(QQ, FQ, wQ, AQ, tQ, eQ) {
      var MQ = vQ(QQ),
        GQ = vQ(FQ),
        pQ = MQ ? bQ : kQ(QQ),
        cQ = GQ ? bQ : kQ(FQ),
        CQ = (pQ = pQ == HQ ? YQ : pQ) == YQ,
        SQ = (cQ = cQ == HQ ? YQ : cQ) == YQ,
        iQ = pQ == cQ;
      if (iQ && mQ(QQ)) {
        if (!mQ(FQ)) return !1;
        MQ = !0, CQ = !1
      }
      if (iQ && !CQ) return eQ || (eQ = new LQ), MQ || uQ(QQ) ? qQ(QQ, FQ, wQ, AQ, tQ, eQ) : oQ(QQ, FQ, pQ, wQ, AQ, tQ, eQ);
      if (!(1 & wQ)) {
        var WQ = CQ && xQ.call(QQ, "__wrapped__"),
          RQ = SQ && xQ.call(FQ, "__wrapped__");
        if (WQ || RQ) {
          var OQ = WQ ? QQ.value() : QQ,
            sQ = RQ ? FQ.value() : FQ;
          return eQ || (eQ = new LQ), tQ(OQ, sQ, wQ, AQ, eQ)
        }
      }
      return !!iQ && (eQ || (eQ = new LQ), DQ(QQ, FQ, wQ, AQ, tQ, eQ))
    }
  },
  5398: (QQ, FQ, wQ) => {
    var LQ = wQ(5403),
      qQ = wQ(5440);
    QQ.exports = function(QQ, FQ, wQ, oQ) {
      var DQ = wQ.length,
        kQ = DQ,
        vQ = !oQ;
      if (null == QQ) return !kQ;
      for (QQ = Object(QQ); DQ--;) {
        var mQ = wQ[DQ];
        if (vQ && mQ[2] ? mQ[1] !== QQ[mQ[0]] : !(mQ[0] in QQ)) return !1
      }
      for (; ++DQ < kQ;) {
        var uQ = (mQ = wQ[DQ])[0],
          HQ = QQ[uQ],
          bQ = mQ[1];
        if (vQ && mQ[2]) {
          if (void 0 === HQ && !(uQ in QQ)) return !1
        } else {
          var YQ = new LQ;
          if (oQ) var xQ = oQ(HQ, bQ, uQ, QQ, FQ, YQ);
          if (!(void 0 === xQ ? qQ(bQ, HQ, 3, oQ, YQ) : xQ)) return !1
        }
      }
      return !0
    }
  },
  5851: QQ => {
    QQ.exports = function(QQ) {
      return QQ !== QQ
    }
  },
  5092: (QQ, FQ, wQ) => {
    var LQ = wQ(5095),
      qQ = wQ(5098),
      oQ = wQ(4932),
      DQ = wQ(5111),
      kQ = /^\[object .+?Constructor\]$/,
      vQ = Function.prototype,
      mQ = Object.prototype,
      uQ = vQ.toString,
      HQ = mQ.hasOwnProperty,
      bQ = RegExp("^" + uQ.call(HQ).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    QQ.exports = function(QQ) {
      return !(!oQ(QQ) || qQ(QQ)) && (LQ(QQ) ? bQ : kQ).test(DQ(QQ))
    }
  },
  5560: (QQ, FQ, wQ) => {
    var LQ = wQ(4972),
      qQ = wQ(5329),
      oQ = wQ(4995),
      DQ = {};
    DQ["[object Float32Array]"] = DQ["[object Float64Array]"] = DQ["[object Int8Array]"] = DQ["[object Int16Array]"] = DQ["[object Int32Array]"] = DQ["[object Uint8Array]"] = DQ["[object Uint8ClampedArray]"] = DQ["[object Uint16Array]"] = DQ["[object Uint32Array]"] = !0, DQ["[object Arguments]"] = DQ["[object Array]"] = DQ["[object ArrayBuffer]"] = DQ["[object Boolean]"] = DQ["[object DataView]"] = DQ["[object Date]"] = DQ["[object Error]"] = DQ["[object Function]"] = DQ["[object Map]"] = DQ["[object Number]"] = DQ["[object Object]"] = DQ["[object RegExp]"] = DQ["[object Set]"] = DQ["[object String]"] = DQ["[object WeakMap]"] = !1, QQ.exports = function(QQ) {
      return oQ(QQ) && qQ(QQ.length) && !!DQ[LQ(QQ)]
    }
  },
  5390: (QQ, FQ, wQ) => {
    var LQ = wQ(5395),
      qQ = wQ(5641),
      oQ = wQ(5662),
      DQ = wQ(5008),
      kQ = wQ(5665);
    QQ.exports = function(QQ) {
      return "function" == typeof QQ ? QQ : null == QQ ? oQ : "object" == typeof QQ ? DQ(QQ) ? qQ(QQ[0], QQ[1]) : LQ(QQ) : kQ(QQ)
    }
  },
  5574: (QQ, FQ, wQ) => {
    var LQ = wQ(5578),
      qQ = wQ(5586),
      oQ = Object.prototype.hasOwnProperty;
    QQ.exports = function(QQ) {
      if (!LQ(QQ)) return qQ(QQ);
      var FQ = [];
      for (var wQ in Object(QQ)) oQ.call(QQ, wQ) && "constructor" != wQ && FQ.push(wQ);
      return FQ
    }
  },
  6017: QQ => {
    QQ.exports = function(QQ, FQ) {
      return QQ < FQ
    }
  },
  5687: (QQ, FQ, wQ) => {
    var LQ = wQ(5696),
      qQ = wQ(5322);
    QQ.exports = function(QQ, FQ) {
      var wQ = -1,
        oQ = qQ(QQ) ? Array(QQ.length) : [];
      return LQ(QQ, (function(QQ, LQ, qQ) {
        oQ[++wQ] = FQ(QQ, LQ, qQ)
      })), oQ
    }
  },
  5395: (QQ, FQ, wQ) => {
    var LQ = wQ(5398),
      qQ = wQ(5623),
      oQ = wQ(5632);
    QQ.exports = function(QQ) {
      var FQ = qQ(QQ);
      return 1 == FQ.length && FQ[0][2] ? oQ(FQ[0][0], FQ[0][1]) : function(wQ) {
        return wQ === QQ || LQ(wQ, QQ, FQ)
      }
    }
  },
  5641: (QQ, FQ, wQ) => {
    var LQ = wQ(5440),
      qQ = wQ(5021),
      oQ = wQ(5648),
      DQ = wQ(5033),
      kQ = wQ(5626),
      vQ = wQ(5632),
      mQ = wQ(5238);
    QQ.exports = function(QQ, FQ) {
      return DQ(QQ) && kQ(FQ) ? vQ(mQ(QQ), FQ) : function(wQ) {
        var DQ = qQ(wQ, QQ);
        return void 0 === DQ && DQ === FQ ? oQ(wQ, QQ) : LQ(FQ, DQ, 3)
      }
    }
  },
  5387: (QQ, FQ, wQ) => {
    var LQ = wQ(5231),
      qQ = wQ(5026),
      oQ = wQ(5390),
      DQ = wQ(5687),
      kQ = wQ(5730),
      vQ = wQ(5563),
      mQ = wQ(5738),
      uQ = wQ(5662),
      HQ = wQ(5008);
    QQ.exports = function(QQ, FQ, wQ) {
      FQ = FQ.length ? LQ(FQ, (function(QQ) {
        return HQ(QQ) ? function(FQ) {
          return qQ(FQ, 1 === QQ.length ? QQ[0] : QQ)
        } : QQ
      })) : [uQ];
      var bQ = -1;
      FQ = LQ(FQ, vQ(oQ));
      var YQ = DQ(QQ, (function(QQ, wQ, qQ) {
        return {
          criteria: LQ(FQ, (function(FQ) {
            return FQ(QQ)
          })),
          index: ++bQ,
          value: QQ
        }
      }));
      return kQ(YQ, (function(QQ, FQ) {
        return mQ(QQ, FQ, wQ)
      }))
    }
  },
  5671: QQ => {
    QQ.exports = function(QQ) {
      return function(FQ) {
        return null == FQ ? void 0 : FQ[QQ]
      }
    }
  },
  5679: (QQ, FQ, wQ) => {
    var LQ = wQ(5026);
    QQ.exports = function(QQ) {
      return function(FQ) {
        return LQ(FQ, QQ)
      }
    }
  },
  5312: QQ => {
    var FQ = Math.ceil,
      wQ = Math.max;
    QQ.exports = function(QQ, LQ, qQ, oQ) {
      for (var DQ = -1, kQ = wQ(FQ((LQ - QQ) / (qQ || 1)), 0), vQ = Array(kQ); kQ--;) vQ[oQ ? kQ : ++DQ] = QQ, QQ += qQ;
      return vQ
    }
  },
  5745: (QQ, FQ, wQ) => {
    var LQ = wQ(5662),
      qQ = wQ(5754),
      oQ = wQ(5763);
    QQ.exports = function(QQ, FQ) {
      return oQ(qQ(QQ, FQ, LQ), QQ + "")
    }
  },
  5765: (QQ, FQ, wQ) => {
    var LQ = wQ(5772),
      qQ = wQ(5776),
      oQ = wQ(5662),
      DQ = qQ ? function(QQ, FQ) {
        return qQ(QQ, "toString", {
          configurable: !0,
          enumerable: !1,
          value: LQ(FQ),
          writable: !0
        })
      } : oQ;
    QQ.exports = DQ
  },
  5917: QQ => {
    QQ.exports = function(QQ, FQ, wQ) {
      var LQ = -1,
        qQ = QQ.length;
      FQ < 0 && (FQ = -FQ > qQ ? 0 : qQ + FQ), (wQ = wQ > qQ ? qQ : wQ) < 0 && (wQ += qQ), qQ = FQ > wQ ? 0 : wQ - FQ >>> 0, FQ >>>= 0;
      for (var oQ = Array(qQ); ++LQ < qQ;) oQ[LQ] = QQ[LQ + FQ];
      return oQ
    }
  },
  6175: (QQ, FQ, wQ) => {
    var LQ = wQ(5696);
    QQ.exports = function(QQ, FQ) {
      var wQ;
      return LQ(QQ, (function(QQ, LQ, qQ) {
        return !(wQ = FQ(QQ, LQ, qQ))
      })), !!wQ
    }
  },
  5730: QQ => {
    QQ.exports = function(QQ, FQ) {
      var wQ = QQ.length;
      for (QQ.sort(FQ); wQ--;) QQ[wQ] = QQ[wQ].value;
      return QQ
    }
  },
  5539: QQ => {
    QQ.exports = function(QQ, FQ) {
      for (var wQ = -1, LQ = Array(QQ); ++wQ < QQ;) LQ[wQ] = FQ(wQ);
      return LQ
    }
  },
  5228: (QQ, FQ, wQ) => {
    var LQ = wQ(4980),
      qQ = wQ(5231),
      oQ = wQ(5008),
      DQ = wQ(4966),
      kQ = LQ ? LQ.prototype : void 0,
      vQ = kQ ? kQ.toString : void 0;
    QQ.exports = function QQ(FQ) {
      if ("string" == typeof FQ) return FQ;
      if (oQ(FQ)) return qQ(FQ, QQ) + "";
      if (DQ(FQ)) return vQ ? vQ.call(FQ) : "";
      var wQ = FQ + "";
      return "0" == wQ && 1 / FQ == -1 / 0 ? "-0" : wQ
    }
  },
  4958: (QQ, FQ, wQ) => {
    var LQ = wQ(4961),
      qQ = /^\s+/;
    QQ.exports = function(QQ) {
      return QQ ? QQ.slice(0, LQ(QQ) + 1).replace(qQ, "") : QQ
    }
  },
  5563: QQ => {
    QQ.exports = function(QQ) {
      return function(FQ) {
        return QQ(FQ)
      }
    }
  },
  5832: (QQ, FQ, wQ) => {
    var LQ = wQ(5460),
      qQ = wQ(5836),
      oQ = wQ(5866),
      DQ = wQ(5474),
      kQ = wQ(5875),
      vQ = wQ(5502);
    QQ.exports = function(QQ, FQ, wQ) {
      var mQ = -1,
        uQ = qQ,
        HQ = QQ.length,
        bQ = !0,
        YQ = [],
        xQ = YQ;
      if (wQ) bQ = !1, uQ = oQ;
      else if (HQ >= 200) {
        var AQ = FQ ? null : kQ(QQ);
        if (AQ) return vQ(AQ);
        bQ = !1, uQ = DQ, xQ = new LQ
      } else xQ = FQ ? [] : YQ;
      QQ: for (; ++mQ < HQ;) {
        var tQ = QQ[mQ],
          eQ = FQ ? FQ(tQ) : tQ;
        if (tQ = wQ || 0 !== tQ ? tQ : 0, bQ && eQ === eQ) {
          for (var MQ = xQ.length; MQ--;)
            if (xQ[MQ] === eQ) continue QQ;
          FQ && xQ.push(eQ), YQ.push(tQ)
        } else uQ(xQ, eQ, wQ) || (xQ !== YQ && xQ.push(eQ), YQ.push(tQ))
      }
      return YQ
    }
  },
  5474: QQ => {
    QQ.exports = function(QQ, FQ) {
      return QQ.has(FQ)
    }
  },
  5031: (QQ, FQ, wQ) => {
    var LQ = wQ(5008),
      qQ = wQ(5033),
      oQ = wQ(5041),
      DQ = wQ(5226);
    QQ.exports = function(QQ, FQ) {
      return LQ(QQ) ? QQ : qQ(QQ, FQ) ? [QQ] : oQ(DQ(QQ))
    }
  },
  5912: (QQ, FQ, wQ) => {
    var LQ = wQ(5917);
    QQ.exports = function(QQ, FQ, wQ) {
      var qQ = QQ.length;
      return wQ = void 0 === wQ ? qQ : wQ, !FQ && wQ >= qQ ? QQ : LQ(QQ, FQ, wQ)
    }
  },
  5743: (QQ, FQ, wQ) => {
    var LQ = wQ(4966);
    QQ.exports = function(QQ, FQ) {
      if (QQ !== FQ) {
        var wQ = void 0 !== QQ,
          qQ = null === QQ,
          oQ = QQ === QQ,
          DQ = LQ(QQ),
          kQ = void 0 !== FQ,
          vQ = null === FQ,
          mQ = FQ === FQ,
          uQ = LQ(FQ);
        if (!vQ && !uQ && !DQ && QQ > FQ || DQ && kQ && mQ && !vQ && !uQ || qQ && kQ && mQ || !wQ && mQ || !oQ) return 1;
        if (!qQ && !DQ && !uQ && QQ < FQ || uQ && wQ && oQ && !qQ && !DQ || vQ && wQ && oQ || !kQ && oQ || !mQ) return -1
      }
      return 0
    }
  },
  5738: (QQ, FQ, wQ) => {
    var LQ = wQ(5743);
    QQ.exports = function(QQ, FQ, wQ) {
      for (var qQ = -1, oQ = QQ.criteria, DQ = FQ.criteria, kQ = oQ.length, vQ = wQ.length; ++qQ < kQ;) {
        var mQ = LQ(oQ[qQ], DQ[qQ]);
        if (mQ) return qQ >= vQ ? mQ : mQ * ("desc" == wQ[qQ] ? -1 : 1)
      }
      return QQ.index - FQ.index
    }
  },
  5103: (QQ, FQ, wQ) => {
    var LQ = wQ(4947)["__core-js_shared__"];
    QQ.exports = LQ
  },
  5722: (QQ, FQ, wQ) => {
    var LQ = wQ(5322);
    QQ.exports = function(QQ, FQ) {
      return function(wQ, qQ) {
        if (null == wQ) return wQ;
        if (!LQ(wQ)) return QQ(wQ, qQ);
        for (var oQ = wQ.length, DQ = FQ ? oQ : -1, kQ = Object(wQ);
          (FQ ? DQ-- : ++DQ < oQ) && !1 !== qQ(kQ[DQ], DQ, kQ););
        return wQ
      }
    }
  },
  5715: QQ => {
    QQ.exports = function(QQ) {
      return function(FQ, wQ, LQ) {
        for (var qQ = -1, oQ = Object(FQ), DQ = LQ(FQ), kQ = DQ.length; kQ--;) {
          var vQ = DQ[QQ ? kQ : ++qQ];
          if (!1 === wQ(oQ[vQ], vQ, oQ)) break
        }
        return FQ
      }
    }
  },
  5906: (QQ, FQ, wQ) => {
    var LQ = wQ(5912),
      qQ = wQ(5924),
      oQ = wQ(5927),
      DQ = wQ(5226);
    QQ.exports = function(QQ) {
      return function(FQ) {
        FQ = DQ(FQ);
        var wQ = qQ(FQ) ? oQ(FQ) : void 0,
          kQ = wQ ? wQ[0] : FQ.charAt(0),
          vQ = wQ ? LQ(wQ, 1).join("") : FQ.slice(1);
        return kQ[QQ]() + vQ
      }
    }
  },
  6188: (QQ, FQ, wQ) => {
    var LQ = wQ(5390),
      qQ = wQ(5322),
      oQ = wQ(5530);
    QQ.exports = function(QQ) {
      return function(FQ, wQ, DQ) {
        var kQ = Object(FQ);
        if (!qQ(FQ)) {
          var vQ = LQ(wQ, 3);
          FQ = oQ(FQ), wQ = function(QQ) {
            return vQ(kQ[QQ], QQ, kQ)
          }
        }
        var mQ = QQ(FQ, wQ, DQ);
        return mQ > -1 ? kQ[vQ ? FQ[mQ] : mQ] : void 0
      }
    }
  },
  5303: (QQ, FQ, wQ) => {
    var LQ = wQ(5312),
      qQ = wQ(5316),
      oQ = wQ(5341);
    QQ.exports = function(QQ) {
      return function(FQ, wQ, DQ) {
        return DQ && "number" != typeof DQ && qQ(FQ, wQ, DQ) && (wQ = DQ = void 0), FQ = oQ(FQ), void 0 === wQ ? (wQ = FQ, FQ = 0) : wQ = oQ(wQ), DQ = void 0 === DQ ? FQ < wQ ? 1 : -1 : oQ(DQ), LQ(FQ, wQ, DQ, QQ)
      }
    }
  },
  5875: (QQ, FQ, wQ) => {
    var LQ = wQ(5611),
      qQ = wQ(5884),
      oQ = wQ(5502),
      DQ = LQ && 1 / oQ(new LQ([, -0]))[1] == 1 / 0 ? function(QQ) {
        return new LQ(QQ)
      } : qQ;
    QQ.exports = DQ
  },
  5776: (QQ, FQ, wQ) => {
    var LQ = wQ(5090),
      qQ = function() {
        try {
          var QQ = LQ(Object, "defineProperty");
          return QQ({}, "", {}), QQ
        } catch (FQ) {}
      }();
    QQ.exports = qQ
  },
  5455: (QQ, FQ, wQ) => {
    var LQ = wQ(5460),
      qQ = wQ(5470),
      oQ = wQ(5474);
    QQ.exports = function(QQ, FQ, wQ, DQ, kQ, vQ) {
      var mQ = 1 & wQ,
        uQ = QQ.length,
        HQ = FQ.length;
      if (uQ != HQ && !(mQ && HQ > uQ)) return !1;
      var bQ = vQ.get(QQ),
        YQ = vQ.get(FQ);
      if (bQ && YQ) return bQ == FQ && YQ == QQ;
      var xQ = -1,
        AQ = !0,
        tQ = 2 & wQ ? new LQ : void 0;
      for (vQ.set(QQ, FQ), vQ.set(FQ, QQ); ++xQ < uQ;) {
        var eQ = QQ[xQ],
          MQ = FQ[xQ];
        if (DQ) var GQ = mQ ? DQ(MQ, eQ, xQ, FQ, QQ, vQ) : DQ(eQ, MQ, xQ, QQ, FQ, vQ);
        if (void 0 !== GQ) {
          if (GQ) continue;
          AQ = !1;
          break
        }
        if (tQ) {
          if (!qQ(FQ, (function(QQ, FQ) {
              if (!oQ(tQ, FQ) && (eQ === QQ || kQ(eQ, QQ, wQ, DQ, vQ))) return tQ.push(FQ)
            }))) {
            AQ = !1;
            break
          }
        } else if (eQ !== MQ && !kQ(eQ, MQ, wQ, DQ, vQ)) {
          AQ = !1;
          break
        }
      }
      return vQ.delete(QQ), vQ.delete(FQ), AQ
    }
  },
  5482: (QQ, FQ, wQ) => {
    var LQ = wQ(4980),
      qQ = wQ(5491),
      oQ = wQ(5174),
      DQ = wQ(5455),
      kQ = wQ(5495),
      vQ = wQ(5502),
      mQ = LQ ? LQ.prototype : void 0,
      uQ = mQ ? mQ.valueOf : void 0;
    QQ.exports = function(QQ, FQ, wQ, LQ, mQ, HQ, bQ) {
      switch (wQ) {
        case "[object DataView]":
          if (QQ.byteLength != FQ.byteLength || QQ.byteOffset != FQ.byteOffset) return !1;
          QQ = QQ.buffer, FQ = FQ.buffer;
        case "[object ArrayBuffer]":
          return !(QQ.byteLength != FQ.byteLength || !HQ(new qQ(QQ), new qQ(FQ)));
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
          return oQ(+QQ, +FQ);
        case "[object Error]":
          return QQ.name == FQ.name && QQ.message == FQ.message;
        case "[object RegExp]":
        case "[object String]":
          return QQ == FQ + "";
        case "[object Map]":
          var YQ = kQ;
        case "[object Set]":
          var xQ = 1 & LQ;
          if (YQ || (YQ = vQ), QQ.size != FQ.size && !xQ) return !1;
          var AQ = bQ.get(QQ);
          if (AQ) return AQ == FQ;
          LQ |= 2, bQ.set(QQ, FQ);
          var tQ = DQ(YQ(QQ), YQ(FQ), LQ, mQ, HQ, bQ);
          return bQ.delete(QQ), tQ;
        case "[object Symbol]":
          if (uQ) return uQ.call(QQ) == uQ.call(FQ)
      }
      return !1
    }
  },
  5504: (QQ, FQ, wQ) => {
    var LQ = wQ(5508),
      qQ = Object.prototype.hasOwnProperty;
    QQ.exports = function(QQ, FQ, wQ, oQ, DQ, kQ) {
      var vQ = 1 & wQ,
        mQ = LQ(QQ),
        uQ = mQ.length;
      if (uQ != LQ(FQ).length && !vQ) return !1;
      for (var HQ = uQ; HQ--;) {
        var bQ = mQ[HQ];
        if (!(vQ ? bQ in FQ : qQ.call(FQ, bQ))) return !1
      }
      var YQ = kQ.get(QQ),
        xQ = kQ.get(FQ);
      if (YQ && xQ) return YQ == FQ && xQ == QQ;
      var AQ = !0;
      kQ.set(QQ, FQ), kQ.set(FQ, QQ);
      for (var tQ = vQ; ++HQ < uQ;) {
        var eQ = QQ[bQ = mQ[HQ]],
          MQ = FQ[bQ];
        if (oQ) var GQ = vQ ? oQ(MQ, eQ, bQ, FQ, QQ, kQ) : oQ(eQ, MQ, bQ, QQ, FQ, kQ);
        if (!(void 0 === GQ ? eQ === MQ || DQ(eQ, MQ, wQ, oQ, kQ) : GQ)) {
          AQ = !1;
          break
        }
        tQ || (tQ = "constructor" == bQ)
      }
      if (AQ && !tQ) {
        var pQ = QQ.constructor,
          cQ = FQ.constructor;
        pQ == cQ || !("constructor" in QQ) || !("constructor" in FQ) || "function" == typeof pQ && pQ instanceof pQ && "function" == typeof cQ && cQ instanceof cQ || (AQ = !1)
      }
      return kQ.delete(QQ), kQ.delete(FQ), AQ
    }
  },
  4949: (QQ, FQ, wQ) => {
    var LQ = "object" == typeof wQ.g && wQ.g && wQ.g.Object === Object && wQ.g;
    QQ.exports = LQ
  },
  5508: (QQ, FQ, wQ) => {
    var LQ = wQ(5513),
      qQ = wQ(5516),
      oQ = wQ(5530);
    QQ.exports = function(QQ) {
      return LQ(QQ, oQ, qQ)
    }
  },
  5200: (QQ, FQ, wQ) => {
    var LQ = wQ(5208);
    QQ.exports = function(QQ, FQ) {
      var wQ = QQ.__data__;
      return LQ(FQ) ? wQ["string" == typeof FQ ? "string" : "hash"] : wQ.map
    }
  },
  5623: (QQ, FQ, wQ) => {
    var LQ = wQ(5626),
      qQ = wQ(5530);
    QQ.exports = function(QQ) {
      for (var FQ = qQ(QQ), wQ = FQ.length; wQ--;) {
        var oQ = FQ[wQ],
          DQ = QQ[oQ];
        FQ[wQ] = [oQ, DQ, LQ(DQ)]
      }
      return FQ
    }
  },
  5090: (QQ, FQ, wQ) => {
    var LQ = wQ(5092),
      qQ = wQ(5120);
    QQ.exports = function(QQ, FQ) {
      var wQ = qQ(QQ, FQ);
      return LQ(wQ) ? wQ : void 0
    }
  },
  6143: (QQ, FQ, wQ) => {
    var LQ = wQ(5595)(Object.getPrototypeOf, Object);
    QQ.exports = LQ
  },
  4984: (QQ, FQ, wQ) => {
    var LQ = wQ(4980),
      qQ = Object.prototype,
      oQ = qQ.hasOwnProperty,
      DQ = qQ.toString,
      kQ = LQ ? LQ.toStringTag : void 0;
    QQ.exports = function(QQ) {
      var FQ = oQ.call(QQ, kQ),
        wQ = QQ[kQ];
      try {
        QQ[kQ] = void 0;
        var LQ = !0
      } catch (vQ) {}
      var qQ = DQ.call(QQ);
      return LQ && (FQ ? QQ[kQ] = wQ : delete QQ[kQ]), qQ
    }
  },
  5516: (QQ, FQ, wQ) => {
    var LQ = wQ(5521),
      qQ = wQ(5526),
      oQ = Object.prototype.propertyIsEnumerable,
      DQ = Object.getOwnPropertySymbols,
      kQ = DQ ? function(QQ) {
        return null == QQ ? [] : (QQ = Object(QQ), LQ(DQ(QQ), (function(FQ) {
          return oQ.call(QQ, FQ)
        })))
      } : qQ;
    QQ.exports = kQ
  },
  5597: (QQ, FQ, wQ) => {
    var LQ = wQ(5605),
      qQ = wQ(5193),
      oQ = wQ(5608),
      DQ = wQ(5611),
      kQ = wQ(5615),
      vQ = wQ(4972),
      mQ = wQ(5111),
      uQ = "[object Map]",
      HQ = "[object Promise]",
      bQ = "[object Set]",
      YQ = "[object WeakMap]",
      xQ = "[object DataView]",
      AQ = mQ(LQ),
      tQ = mQ(qQ),
      eQ = mQ(oQ),
      MQ = mQ(DQ),
      GQ = mQ(kQ),
      pQ = vQ;
    (LQ && pQ(new LQ(new ArrayBuffer(1))) != xQ || qQ && pQ(new qQ) != uQ || oQ && pQ(oQ.resolve()) != HQ || DQ && pQ(new DQ) != bQ || kQ && pQ(new kQ) != YQ) && (pQ = function(QQ) {
      var FQ = vQ(QQ),
        wQ = "[object Object]" == FQ ? QQ.constructor : void 0,
        LQ = wQ ? mQ(wQ) : "";
      if (LQ) switch (LQ) {
        case AQ:
          return xQ;
        case tQ:
          return uQ;
        case eQ:
          return HQ;
        case MQ:
          return bQ;
        case GQ:
          return YQ
      }
      return FQ
    }), QQ.exports = pQ
  },
  5120: QQ => {
    QQ.exports = function(QQ, FQ) {
      return null == QQ ? void 0 : QQ[FQ]
    }
  },
  5657: (QQ, FQ, wQ) => {
    var LQ = wQ(5031),
      qQ = wQ(5372),
      oQ = wQ(5008),
      DQ = wQ(5336),
      kQ = wQ(5329),
      vQ = wQ(5238);
    QQ.exports = function(QQ, FQ, wQ) {
      for (var mQ = -1, uQ = (FQ = LQ(FQ, QQ)).length, HQ = !1; ++mQ < uQ;) {
        var bQ = vQ(FQ[mQ]);
        if (!(HQ = null != QQ && wQ(QQ, bQ))) break;
        QQ = QQ[bQ]
      }
      return HQ || ++mQ != uQ ? HQ : !!(uQ = null == QQ ? 0 : QQ.length) && kQ(uQ) && DQ(bQ, uQ) && (oQ(QQ) || qQ(QQ))
    }
  },
  5924: QQ => {
    var FQ = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    QQ.exports = function(QQ) {
      return FQ.test(QQ)
    }
  },
  5077: (QQ, FQ, wQ) => {
    var LQ = wQ(5082);
    QQ.exports = function() {
      this.__data__ = LQ ? LQ(null) : {}, this.size = 0
    }
  },
  5123: QQ => {
    QQ.exports = function(QQ) {
      var FQ = this.has(QQ) && delete this.__data__[QQ];
      return this.size -= FQ ? 1 : 0, FQ
    }
  },
  5130: (QQ, FQ, wQ) => {
    var LQ = wQ(5082),
      qQ = Object.prototype.hasOwnProperty;
    QQ.exports = function(QQ) {
      var FQ = this.__data__;
      if (LQ) {
        var wQ = FQ[QQ];
        return "__lodash_hash_undefined__" === wQ ? void 0 : wQ
      }
      return qQ.call(FQ, QQ) ? FQ[QQ] : void 0
    }
  },
  5135: (QQ, FQ, wQ) => {
    var LQ = wQ(5082),
      qQ = Object.prototype.hasOwnProperty;
    QQ.exports = function(QQ) {
      var FQ = this.__data__;
      return LQ ? void 0 !== FQ[QQ] : qQ.call(FQ, QQ)
    }
  },
  5142: (QQ, FQ, wQ) => {
    var LQ = wQ(5082);
    QQ.exports = function(QQ, FQ) {
      var wQ = this.__data__;
      return this.size += this.has(QQ) ? 0 : 1, wQ[QQ] = LQ && void 0 === FQ ? "__lodash_hash_undefined__" : FQ, this
    }
  },
  5365: (QQ, FQ, wQ) => {
    var LQ = wQ(4980),
      qQ = wQ(5372),
      oQ = wQ(5008),
      DQ = LQ ? LQ.isConcatSpreadable : void 0;
    QQ.exports = function(QQ) {
      return oQ(QQ) || qQ(QQ) || !!(DQ && QQ && QQ[DQ])
    }
  },
  5336: QQ => {
    var FQ = /^(?:0|[1-9]\d*)$/;
    QQ.exports = function(QQ, wQ) {
      var LQ = typeof QQ;
      return !!(wQ = null == wQ ? 9007199254740991 : wQ) && ("number" == LQ || "symbol" != LQ && FQ.test(QQ)) && QQ > -1 && QQ % 1 == 0 && QQ < wQ
    }
  },
  5316: (QQ, FQ, wQ) => {
    var LQ = wQ(5174),
      qQ = wQ(5322),
      oQ = wQ(5336),
      DQ = wQ(4932);
    QQ.exports = function(QQ, FQ, wQ) {
      if (!DQ(wQ)) return !1;
      var kQ = typeof FQ;
      return !!("number" == kQ ? qQ(wQ) && oQ(FQ, wQ.length) : "string" == kQ && FQ in wQ) && LQ(wQ[FQ], QQ)
    }
  },
  5033: (QQ, FQ, wQ) => {
    var LQ = wQ(5008),
      qQ = wQ(4966),
      oQ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      DQ = /^\w*$/;
    QQ.exports = function(QQ, FQ) {
      if (LQ(QQ)) return !1;
      var wQ = typeof QQ;
      return !("number" != wQ && "symbol" != wQ && "boolean" != wQ && null != QQ && !qQ(QQ)) || (DQ.test(QQ) || !oQ.test(QQ) || null != FQ && QQ in Object(FQ))
    }
  },
  5208: QQ => {
    QQ.exports = function(QQ) {
      var FQ = typeof QQ;
      return "string" == FQ || "number" == FQ || "symbol" == FQ || "boolean" == FQ ? "__proto__" !== QQ : null === QQ
    }
  },
  5098: (QQ, FQ, wQ) => {
    var LQ = wQ(5103),
      qQ = function() {
        var QQ = /[^.]+$/.exec(LQ && LQ.keys && LQ.keys.IE_PROTO || "");
        return QQ ? "Symbol(src)_1." + QQ : ""
      }();
    QQ.exports = function(QQ) {
      return !!qQ && qQ in QQ
    }
  },
  5578: QQ => {
    var FQ = Object.prototype;
    QQ.exports = function(QQ) {
      var wQ = QQ && QQ.constructor;
      return QQ === ("function" == typeof wQ && wQ.prototype || FQ)
    }
  },
  5626: (QQ, FQ, wQ) => {
    var LQ = wQ(4932);
    QQ.exports = function(QQ) {
      return QQ === QQ && !LQ(QQ)
    }
  },
  5158: QQ => {
    QQ.exports = function() {
      this.__data__ = [], this.size = 0
    }
  },
  5164: (QQ, FQ, wQ) => {
    var LQ = wQ(5171),
      qQ = Array.prototype.splice;
    QQ.exports = function(QQ) {
      var FQ = this.__data__,
        wQ = LQ(FQ, QQ);
      return !(wQ < 0) && (wQ == FQ.length - 1 ? FQ.pop() : qQ.call(FQ, wQ, 1), --this.size, !0)
    }
  },
  5178: (QQ, FQ, wQ) => {
    var LQ = wQ(5171);
    QQ.exports = function(QQ) {
      var FQ = this.__data__,
        wQ = LQ(FQ, QQ);
      return wQ < 0 ? void 0 : FQ[wQ][1]
    }
  },
  5183: (QQ, FQ, wQ) => {
    var LQ = wQ(5171);
    QQ.exports = function(QQ) {
      return LQ(this.__data__, QQ) > -1
    }
  },
  5187: (QQ, FQ, wQ) => {
    var LQ = wQ(5171);
    QQ.exports = function(QQ, FQ) {
      var wQ = this.__data__,
        qQ = LQ(wQ, QQ);
      return qQ < 0 ? (++this.size, wQ.push([QQ, FQ])) : wQ[qQ][1] = FQ, this
    }
  },
  5061: (QQ, FQ, wQ) => {
    var LQ = wQ(5070),
      qQ = wQ(5150),
      oQ = wQ(5193);
    QQ.exports = function() {
      this.size = 0, this.__data__ = {
        hash: new LQ,
        map: new(oQ || qQ),
        string: new LQ
      }
    }
  },
  5196: (QQ, FQ, wQ) => {
    var LQ = wQ(5200);
    QQ.exports = function(QQ) {
      var FQ = LQ(this, QQ).delete(QQ);
      return this.size -= FQ ? 1 : 0, FQ
    }
  },
  5211: (QQ, FQ, wQ) => {
    var LQ = wQ(5200);
    QQ.exports = function(QQ) {
      return LQ(this, QQ).get(QQ)
    }
  },
  5217: (QQ, FQ, wQ) => {
    var LQ = wQ(5200);
    QQ.exports = function(QQ) {
      return LQ(this, QQ).has(QQ)
    }
  },
  5223: (QQ, FQ, wQ) => {
    var LQ = wQ(5200);
    QQ.exports = function(QQ, FQ) {
      var wQ = LQ(this, QQ),
        qQ = wQ.size;
      return wQ.set(QQ, FQ), this.size += wQ.size == qQ ? 0 : 1, this
    }
  },
  5495: QQ => {
    QQ.exports = function(QQ) {
      var FQ = -1,
        wQ = Array(QQ.size);
      return QQ.forEach((function(QQ, LQ) {
        wQ[++FQ] = [LQ, QQ]
      })), wQ
    }
  },
  5632: QQ => {
    QQ.exports = function(QQ, FQ) {
      return function(wQ) {
        return null != wQ && (wQ[QQ] === FQ && (void 0 !== FQ || QQ in Object(wQ)))
      }
    }
  },
  5048: (QQ, FQ, wQ) => {
    var LQ = wQ(5050);
    QQ.exports = function(QQ) {
      var FQ = LQ(QQ, (function(QQ) {
          return 500 === wQ.size && wQ.clear(), QQ
        })),
        wQ = FQ.cache;
      return FQ
    }
  },
  5082: (QQ, FQ, wQ) => {
    var LQ = wQ(5090)(Object, "create");
    QQ.exports = LQ
  },
  5586: (QQ, FQ, wQ) => {
    var LQ = wQ(5595)(Object.keys, Object);
    QQ.exports = LQ
  },
  5565: (QQ, FQ, wQ) => {
    QQ = wQ.nmd(QQ);
    var LQ = wQ(4949),
      qQ = FQ && !FQ.nodeType && FQ,
      oQ = qQ && QQ && !QQ.nodeType && QQ,
      DQ = oQ && oQ.exports === qQ && LQ.process,
      kQ = function() {
        try {
          var QQ = oQ && oQ.require && oQ.require("util").types;
          return QQ || DQ && DQ.binding && DQ.binding("util")
        } catch (FQ) {}
      }();
    QQ.exports = kQ
  },
  4993: QQ => {
    var FQ = Object.prototype.toString;
    QQ.exports = function(QQ) {
      return FQ.call(QQ)
    }
  },
  5595: QQ => {
    QQ.exports = function(QQ, FQ) {
      return function(wQ) {
        return QQ(FQ(wQ))
      }
    }
  },
  5754: (QQ, FQ, wQ) => {
    var LQ = wQ(5761),
      qQ = Math.max;
    QQ.exports = function(QQ, FQ, wQ) {
      return FQ = qQ(void 0 === FQ ? QQ.length - 1 : FQ, 0),
        function() {
          for (var oQ = arguments, DQ = -1, kQ = qQ(oQ.length - FQ, 0), vQ = Array(kQ); ++DQ < kQ;) vQ[DQ] = oQ[FQ + DQ];
          DQ = -1;
          for (var mQ = Array(FQ + 1); ++DQ < FQ;) mQ[DQ] = oQ[DQ];
          return mQ[FQ] = wQ(vQ), LQ(QQ, this, mQ)
        }
    }
  },
  4947: (QQ, FQ, wQ) => {
    var LQ = wQ(4949),
      qQ = "object" == typeof self && self && self.Object === Object && self,
      oQ = LQ || qQ || Function("return this")();
    QQ.exports = oQ
  },
  5463: QQ => {
    QQ.exports = function(QQ) {
      return this.__data__.set(QQ, "__lodash_hash_undefined__"), this
    }
  },
  5468: QQ => {
    QQ.exports = function(QQ) {
      return this.__data__.has(QQ)
    }
  },
  5502: QQ => {
    QQ.exports = function(QQ) {
      var FQ = -1,
        wQ = Array(QQ.size);
      return QQ.forEach((function(QQ) {
        wQ[++FQ] = QQ
      })), wQ
    }
  },
  5763: (QQ, FQ, wQ) => {
    var LQ = wQ(5765),
      qQ = wQ(5781)(LQ);
    QQ.exports = qQ
  },
  5781: QQ => {
    var FQ = Date.now;
    QQ.exports = function(QQ) {
      var wQ = 0,
        LQ = 0;
      return function() {
        var qQ = FQ(),
          oQ = 16 - (qQ - LQ);
        if (LQ = qQ, oQ > 0) {
          if (++wQ >= 800) return arguments[0]
        } else wQ = 0;
        return QQ.apply(void 0, arguments)
      }
    }
  },
  5406: (QQ, FQ, wQ) => {
    var LQ = wQ(5150);
    QQ.exports = function() {
      this.__data__ = new LQ, this.size = 0
    }
  },
  5414: QQ => {
    QQ.exports = function(QQ) {
      var FQ = this.__data__,
        wQ = FQ.delete(QQ);
      return this.size = FQ.size, wQ
    }
  },
  5418: QQ => {
    QQ.exports = function(QQ) {
      return this.__data__.get(QQ)
    }
  },
  5425: QQ => {
    QQ.exports = function(QQ) {
      return this.__data__.has(QQ)
    }
  },
  5434: (QQ, FQ, wQ) => {
    var LQ = wQ(5150),
      qQ = wQ(5193),
      oQ = wQ(5056);
    QQ.exports = function(QQ, FQ) {
      var wQ = this.__data__;
      if (wQ instanceof LQ) {
        var DQ = wQ.__data__;
        if (!qQ || DQ.length < 199) return DQ.push([QQ, FQ]), this.size = ++wQ.size, this;
        wQ = this.__data__ = new oQ(DQ)
      }
      return wQ.set(QQ, FQ), this.size = wQ.size, this
    }
  },
  5860: QQ => {
    QQ.exports = function(QQ, FQ, wQ) {
      for (var LQ = wQ - 1, qQ = QQ.length; ++LQ < qQ;)
        if (QQ[LQ] === FQ) return LQ;
      return -1
    }
  },
  5927: (QQ, FQ, wQ) => {
    var LQ = wQ(5934),
      qQ = wQ(5924),
      oQ = wQ(5939);
    QQ.exports = function(QQ) {
      return qQ(QQ) ? oQ(QQ) : LQ(QQ)
    }
  },
  5041: (QQ, FQ, wQ) => {
    var LQ = wQ(5048),
      qQ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      oQ = /\\(\\)?/g,
      DQ = LQ((function(QQ) {
        var FQ = [];
        return 46 === QQ.charCodeAt(0) && FQ.push(""), QQ.replace(qQ, (function(QQ, wQ, LQ, qQ) {
          FQ.push(LQ ? qQ.replace(oQ, "$1") : wQ || QQ)
        })), FQ
      }));
    QQ.exports = DQ
  },
  5238: (QQ, FQ, wQ) => {
    var LQ = wQ(4966);
    QQ.exports = function(QQ) {
      if ("string" == typeof QQ || LQ(QQ)) return QQ;
      var FQ = QQ + "";
      return "0" == FQ && 1 / QQ == -1 / 0 ? "-0" : FQ
    }
  },
  5111: QQ => {
    var FQ = Function.prototype.toString;
    QQ.exports = function(QQ) {
      if (null != QQ) {
        try {
          return FQ.call(QQ)
        } catch (wQ) {}
        try {
          return QQ + ""
        } catch (wQ) {}
      }
      return ""
    }
  },
  4961: QQ => {
    var FQ = /\s/;
    QQ.exports = function(QQ) {
      for (var wQ = QQ.length; wQ-- && FQ.test(QQ.charAt(wQ)););
      return wQ
    }
  },
  5939: QQ => {
    var FQ = "\\ud800-\\udfff",
      wQ = "[" + FQ + "]",
      LQ = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
      qQ = "\\ud83c[\\udffb-\\udfff]",
      oQ = "[^" + FQ + "]",
      DQ = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      kQ = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      vQ = "(?:" + LQ + "|" + qQ + ")" + "?",
      mQ = "[\\ufe0e\\ufe0f]?",
      uQ = mQ + vQ + ("(?:\\u200d(?:" + [oQ, DQ, kQ].join("|") + ")" + mQ + vQ + ")*"),
      HQ = "(?:" + [oQ + LQ + "?", LQ, DQ, kQ, wQ].join("|") + ")",
      bQ = RegExp(qQ + "(?=" + qQ + ")|" + HQ + uQ, "g");
    QQ.exports = function(QQ) {
      return QQ.match(bQ) || []
    }
  },
  5772: QQ => {
    QQ.exports = function(QQ) {
      return function() {
        return QQ
      }
    }
  },
  4925: (QQ, FQ, wQ) => {
    var LQ = wQ(4932),
      qQ = wQ(4940),
      oQ = wQ(4956),
      DQ = Math.max,
      kQ = Math.min;
    QQ.exports = function(QQ, FQ, wQ) {
      var vQ, mQ, uQ, HQ, bQ, YQ, xQ = 0,
        AQ = !1,
        tQ = !1,
        eQ = !0;
      if ("function" != typeof QQ) throw new TypeError("Expected a function");

      function MQ(FQ) {
        var wQ = vQ,
          LQ = mQ;
        return vQ = mQ = void 0, xQ = FQ, HQ = QQ.apply(LQ, wQ)
      }

      function GQ(QQ) {
        var wQ = QQ - YQ;
        return void 0 === YQ || wQ >= FQ || wQ < 0 || tQ && QQ - xQ >= uQ
      }

      function pQ() {
        var QQ = qQ();
        if (GQ(QQ)) return cQ(QQ);
        bQ = setTimeout(pQ, function(QQ) {
          var wQ = FQ - (QQ - YQ);
          return tQ ? kQ(wQ, uQ - (QQ - xQ)) : wQ
        }(QQ))
      }

      function cQ(QQ) {
        return bQ = void 0, eQ && vQ ? MQ(QQ) : (vQ = mQ = void 0, HQ)
      }

      function CQ() {
        var QQ = qQ(),
          wQ = GQ(QQ);
        if (vQ = arguments, mQ = this, YQ = QQ, wQ) {
          if (void 0 === bQ) return function(QQ) {
            return xQ = QQ, bQ = setTimeout(pQ, FQ), AQ ? MQ(QQ) : HQ
          }(YQ);
          if (tQ) return clearTimeout(bQ), bQ = setTimeout(pQ, FQ), MQ(YQ)
        }
        return void 0 === bQ && (bQ = setTimeout(pQ, FQ)), HQ
      }
      return FQ = oQ(FQ) || 0, LQ(wQ) && (AQ = !!wQ.leading, uQ = (tQ = "maxWait" in wQ) ? DQ(oQ(wQ.maxWait) || 0, FQ) : uQ, eQ = "trailing" in wQ ? !!wQ.trailing : eQ), CQ.cancel = function() {
        void 0 !== bQ && clearTimeout(bQ), xQ = 0, vQ = YQ = mQ = bQ = void 0
      }, CQ.flush = function() {
        return void 0 === bQ ? HQ : cQ(qQ())
      }, CQ
    }
  },
  5174: QQ => {
    QQ.exports = function(QQ, FQ) {
      return QQ === FQ || QQ !== QQ && FQ !== FQ
    }
  },
  6082: (QQ, FQ, wQ) => {
    var LQ = wQ(6090),
      qQ = wQ(6093),
      oQ = wQ(5390),
      DQ = wQ(5008),
      kQ = wQ(5316);
    QQ.exports = function(QQ, FQ, wQ) {
      var vQ = DQ(QQ) ? LQ : qQ;
      return wQ && kQ(QQ, FQ, wQ) && (FQ = void 0), vQ(QQ, oQ(FQ, 3))
    }
  },
  6183: (QQ, FQ, wQ) => {
    var LQ = wQ(6188)(wQ(6190));
    QQ.exports = LQ
  },
  6190: (QQ, FQ, wQ) => {
    var LQ = wQ(5848),
      qQ = wQ(5390),
      oQ = wQ(6197),
      DQ = Math.max;
    QQ.exports = function(QQ, FQ, wQ) {
      var kQ = null == QQ ? 0 : QQ.length;
      if (!kQ) return -1;
      var vQ = null == wQ ? 0 : oQ(wQ);
      return vQ < 0 && (vQ = DQ(kQ + vQ, 0)), LQ(QQ, qQ(FQ, 3), vQ)
    }
  },
  6021: (QQ, FQ, wQ) => {
    var LQ = wQ(5353),
      qQ = wQ(6027);
    QQ.exports = function(QQ, FQ) {
      return LQ(qQ(QQ, FQ), 1)
    }
  },
  5021: (QQ, FQ, wQ) => {
    var LQ = wQ(5026);
    QQ.exports = function(QQ, FQ, wQ) {
      var qQ = null == QQ ? void 0 : LQ(QQ, FQ);
      return void 0 === qQ ? wQ : qQ
    }
  },
  5648: (QQ, FQ, wQ) => {
    var LQ = wQ(5654),
      qQ = wQ(5657);
    QQ.exports = function(QQ, FQ) {
      return null != QQ && qQ(QQ, FQ, LQ)
    }
  },
  5662: QQ => {
    QQ.exports = function(QQ) {
      return QQ
    }
  },
  5372: (QQ, FQ, wQ) => {
    var LQ = wQ(5381),
      qQ = wQ(4995),
      oQ = Object.prototype,
      DQ = oQ.hasOwnProperty,
      kQ = oQ.propertyIsEnumerable,
      vQ = LQ(function() {
        return arguments
      }()) ? LQ : function(QQ) {
        return qQ(QQ) && DQ.call(QQ, "callee") && !kQ.call(QQ, "callee")
      };
    QQ.exports = vQ
  },
  5008: QQ => {
    var FQ = Array.isArray;
    QQ.exports = FQ
  },
  5322: (QQ, FQ, wQ) => {
    var LQ = wQ(5095),
      qQ = wQ(5329);
    QQ.exports = function(QQ) {
      return null != QQ && qQ(QQ.length) && !LQ(QQ)
    }
  },
  6152: (QQ, FQ, wQ) => {
    var LQ = wQ(4972),
      qQ = wQ(4995);
    QQ.exports = function(QQ) {
      return !0 === QQ || !1 === QQ || qQ(QQ) && "[object Boolean]" == LQ(QQ)
    }
  },
  5546: (QQ, FQ, wQ) => {
    QQ = wQ.nmd(QQ);
    var LQ = wQ(4947),
      qQ = wQ(5550),
      oQ = FQ && !FQ.nodeType && FQ,
      DQ = oQ && QQ && !QQ.nodeType && QQ,
      kQ = DQ && DQ.exports === oQ ? LQ.Dx : void 0,
      vQ = (kQ ? kQ.isBuffer : void 0) || qQ;
    QQ.exports = vQ
  },
  6036: (QQ, FQ, wQ) => {
    var LQ = wQ(5440);
    QQ.exports = function(QQ, FQ) {
      return LQ(QQ, FQ)
    }
  },
  5095: (QQ, FQ, wQ) => {
    var LQ = wQ(4972),
      qQ = wQ(4932);
    QQ.exports = function(QQ) {
      if (!qQ(QQ)) return !1;
      var FQ = LQ(QQ);
      return "[object Function]" == FQ || "[object GeneratorFunction]" == FQ || "[object AsyncFunction]" == FQ || "[object Proxy]" == FQ
    }
  },
  5329: QQ => {
    QQ.exports = function(QQ) {
      return "number" == typeof QQ && QQ > -1 && QQ % 1 == 0 && QQ <= 9007199254740991
    }
  },
  5011: (QQ, FQ, wQ) => {
    var LQ = wQ(5013);
    QQ.exports = function(QQ) {
      return LQ(QQ) && QQ != +QQ
    }
  },
  5240: QQ => {
    QQ.exports = function(QQ) {
      return null == QQ
    }
  },
  5013: (QQ, FQ, wQ) => {
    var LQ = wQ(4972),
      qQ = wQ(4995);
    QQ.exports = function(QQ) {
      return "number" == typeof QQ || qQ(QQ) && "[object Number]" == LQ(QQ)
    }
  },
  4932: QQ => {
    QQ.exports = function(QQ) {
      var FQ = typeof QQ;
      return null != QQ && ("object" == FQ || "function" == FQ)
    }
  },
  4995: QQ => {
    QQ.exports = function(QQ) {
      return null != QQ && "object" == typeof QQ
    }
  },
  6139: (QQ, FQ, wQ) => {
    var LQ = wQ(4972),
      qQ = wQ(6143),
      oQ = wQ(4995),
      DQ = Function.prototype,
      kQ = Object.prototype,
      vQ = DQ.toString,
      mQ = kQ.hasOwnProperty,
      uQ = vQ.call(Object);
    QQ.exports = function(QQ) {
      if (!oQ(QQ) || "[object Object]" != LQ(QQ)) return !1;
      var FQ = qQ(QQ);
      if (null === FQ) return !0;
      var wQ = mQ.call(FQ, "constructor") && FQ.constructor;
      return "function" == typeof wQ && wQ instanceof wQ && vQ.call(wQ) == uQ
    }
  },
  5005: (QQ, FQ, wQ) => {
    var LQ = wQ(4972),
      qQ = wQ(5008),
      oQ = wQ(4995);
    QQ.exports = function(QQ) {
      return "string" == typeof QQ || !qQ(QQ) && oQ(QQ) && "[object String]" == LQ(QQ)
    }
  },
  4966: (QQ, FQ, wQ) => {
    var LQ = wQ(4972),
      qQ = wQ(4995);
    QQ.exports = function(QQ) {
      return "symbol" == typeof QQ || qQ(QQ) && "[object Symbol]" == LQ(QQ)
    }
  },
  5553: (QQ, FQ, wQ) => {
    var LQ = wQ(5560),
      qQ = wQ(5563),
      oQ = wQ(5565),
      DQ = oQ && oQ.isTypedArray,
      kQ = DQ ? qQ(DQ) : LQ;
    QQ.exports = kQ
  },
  5530: (QQ, FQ, wQ) => {
    var LQ = wQ(5533),
      qQ = wQ(5574),
      oQ = wQ(5322);
    QQ.exports = function(QQ) {
      return oQ(QQ) ? LQ(QQ) : qQ(QQ)
    }
  },
  6123: QQ => {
    QQ.exports = function(QQ) {
      var FQ = null == QQ ? 0 : QQ.length;
      return FQ ? QQ[FQ - 1] : void 0
    }
  },
  6027: (QQ, FQ, wQ) => {
    var LQ = wQ(5231),
      qQ = wQ(5390),
      oQ = wQ(5687),
      DQ = wQ(5008);
    QQ.exports = function(QQ, FQ) {
      return (DQ(QQ) ? LQ : oQ)(QQ, qQ(FQ, 3))
    }
  },
  6073: (QQ, FQ, wQ) => {
    var LQ = wQ(6079),
      qQ = wQ(5703),
      oQ = wQ(5390);
    QQ.exports = function(QQ, FQ) {
      var wQ = {};
      return FQ = oQ(FQ, 3), qQ(QQ, (function(QQ, qQ, oQ) {
        LQ(wQ, qQ, FQ(QQ, qQ, oQ))
      })), wQ
    }
  },
  5997: (QQ, FQ, wQ) => {
    var LQ = wQ(6003),
      qQ = wQ(6008),
      oQ = wQ(5662);
    QQ.exports = function(QQ) {
      return QQ && QQ.length ? LQ(QQ, oQ, qQ) : void 0
    }
  },
  5050: (QQ, FQ, wQ) => {
    var LQ = wQ(5056);

    function qQ(QQ, FQ) {
      if ("function" != typeof QQ || null != FQ && "function" != typeof FQ) throw new TypeError("Expected a function");
      var wQ = function() {
        var LQ = arguments,
          qQ = FQ ? FQ.apply(this, LQ) : LQ[0],
          oQ = wQ.cache;
        if (oQ.has(qQ)) return oQ.get(qQ);
        var DQ = QQ.apply(this, LQ);
        return wQ.cache = oQ.set(qQ, DQ) || oQ, DQ
      };
      return wQ.cache = new(qQ.Cache || LQ), wQ
    }
    qQ.Cache = LQ, QQ.exports = qQ
  },
  6012: (QQ, FQ, wQ) => {
    var LQ = wQ(6003),
      qQ = wQ(6017),
      oQ = wQ(5662);
    QQ.exports = function(QQ) {
      return QQ && QQ.length ? LQ(QQ, oQ, qQ) : void 0
    }
  },
  5884: QQ => {
    QQ.exports = function() {}
  },
  4940: (QQ, FQ, wQ) => {
    var LQ = wQ(4947);
    QQ.exports = function() {
      return LQ.Date.now()
    }
  },
  5665: (QQ, FQ, wQ) => {
    var LQ = wQ(5671),
      qQ = wQ(5679),
      oQ = wQ(5033),
      DQ = wQ(5238);
    QQ.exports = function(QQ) {
      return oQ(QQ) ? LQ(DQ(QQ)) : qQ(QQ)
    }
  },
  5300: (QQ, FQ, wQ) => {
    var LQ = wQ(5303)();
    QQ.exports = LQ
  },
  6168: (QQ, FQ, wQ) => {
    var LQ = wQ(5470),
      qQ = wQ(5390),
      oQ = wQ(6175),
      DQ = wQ(5008),
      kQ = wQ(5316);
    QQ.exports = function(QQ, FQ, wQ) {
      var vQ = DQ(QQ) ? LQ : oQ;
      return wQ && kQ(QQ, FQ, wQ) && (FQ = void 0), vQ(QQ, qQ(FQ, 3))
    }
  },
  5345: (QQ, FQ, wQ) => {
    var LQ = wQ(5353),
      qQ = wQ(5387),
      oQ = wQ(5745),
      DQ = wQ(5316),
      kQ = oQ((function(QQ, FQ) {
        if (null == QQ) return [];
        var wQ = FQ.length;
        return wQ > 1 && DQ(QQ, FQ[0], FQ[1]) ? FQ = [] : wQ > 2 && DQ(FQ[0], FQ[1], FQ[2]) && (FQ = [FQ[0]]), qQ(QQ, LQ(FQ, 1), [])
      }));
    QQ.exports = kQ
  },
  5526: QQ => {
    QQ.exports = function() {
      return []
    }
  },
  5550: QQ => {
    QQ.exports = function() {
      return !1
    }
  },
  4916: (QQ, FQ, wQ) => {
    var LQ = wQ(4925),
      qQ = wQ(4932);
    QQ.exports = function(QQ, FQ, wQ) {
      var oQ = !0,
        DQ = !0;
      if ("function" != typeof QQ) throw new TypeError("Expected a function");
      return qQ(wQ) && (oQ = "leading" in wQ ? !!wQ.leading : oQ, DQ = "trailing" in wQ ? !!wQ.trailing : DQ), LQ(QQ, FQ, {
        leading: oQ,
        maxWait: FQ,
        trailing: DQ
      })
    }
  },
  5341: (QQ, FQ, wQ) => {
    var LQ = wQ(4956),
      qQ = 1 / 0;
    QQ.exports = function(QQ) {
      return QQ ? (QQ = LQ(QQ)) === qQ || QQ === -1 / 0 ? 17976931348623157e292 * (QQ < 0 ? -1 : 1) : QQ === QQ ? QQ : 0 : 0 === QQ ? QQ : 0
    }
  },
  6197: (QQ, FQ, wQ) => {
    var LQ = wQ(5341);
    QQ.exports = function(QQ) {
      var FQ = LQ(QQ),
        wQ = FQ % 1;
      return FQ === FQ ? wQ ? FQ - wQ : FQ : 0
    }
  },
  4956: (QQ, FQ, wQ) => {
    var LQ = wQ(4958),
      qQ = wQ(4932),
      oQ = wQ(4966),
      DQ = /^[-+]0x[0-9a-f]+$/i,
      kQ = /^0b[01]+$/i,
      vQ = /^0o[0-7]+$/i,
      mQ = parseInt;
    QQ.exports = function(QQ) {
      if ("number" == typeof QQ) return QQ;
      if (oQ(QQ)) return NaN;
      if (qQ(QQ)) {
        var FQ = "function" == typeof QQ.valueOf ? QQ.valueOf() : QQ;
        QQ = qQ(FQ) ? FQ + "" : FQ
      }
      if ("string" != typeof QQ) return 0 === QQ ? QQ : +QQ;
      QQ = LQ(QQ);
      var wQ = kQ.test(QQ);
      return wQ || vQ.test(QQ) ? mQ(QQ.slice(2), wQ ? 2 : 8) : DQ.test(QQ) ? NaN : +QQ
    }
  },
  5226: (QQ, FQ, wQ) => {
    var LQ = wQ(5228);
    QQ.exports = function(QQ) {
      return null == QQ ? "" : LQ(QQ)
    }
  },
  5823: (QQ, FQ, wQ) => {
    var LQ = wQ(5390),
      qQ = wQ(5832);
    QQ.exports = function(QQ, FQ) {
      return QQ && QQ.length ? qQ(QQ, LQ(FQ, 2)) : []
    }
  },
  5902: (QQ, FQ, wQ) => {
    var LQ = wQ(5906)("toUpperCase");
    QQ.exports = LQ
  },
  5960: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => zF
    });
    var LQ = wQ(53),
      qQ = wQ(4799),
      oQ = wQ.n(qQ);
    const {
      getOwnPropertyNames: DQ,
      getOwnPropertySymbols: kQ
    } = Object, {
      hasOwnProperty: vQ
    } = Object.prototype;

    function mQ(QQ, FQ) {
      return function(wQ, LQ, qQ) {
        return QQ(wQ, LQ, qQ) && FQ(wQ, LQ, qQ)
      }
    }

    function uQ(QQ) {
      return function(FQ, wQ, LQ) {
        if (!FQ || !wQ || "object" !== typeof FQ || "object" !== typeof wQ) return QQ(FQ, wQ, LQ);
        const {
          cache: qQ
        } = LQ, oQ = qQ.get(FQ), DQ = qQ.get(wQ);
        if (oQ && DQ) return oQ === wQ && DQ === FQ;
        qQ.set(FQ, wQ), qQ.set(wQ, FQ);
        const kQ = QQ(FQ, wQ, LQ);
        return qQ.delete(FQ), qQ.delete(wQ), kQ
      }
    }

    function HQ(QQ) {
      return DQ(QQ).concat(kQ(QQ))
    }
    const bQ = Object.hasOwn || ((QQ, FQ) => vQ.call(QQ, FQ));

    function YQ(QQ, FQ) {
      return QQ === FQ || !QQ && !FQ && QQ !== QQ && FQ !== FQ
    }
    const {
      getOwnPropertyDescriptor: xQ,
      keys: AQ
    } = Object;

    function tQ(QQ, FQ) {
      return QQ.byteLength === FQ.byteLength && rQ(new Uint8Array(QQ), new Uint8Array(FQ))
    }

    function eQ(QQ, FQ, wQ) {
      let LQ = QQ.length;
      if (FQ.length !== LQ) return !1;
      for (; LQ-- > 0;)
        if (!wQ.equals(QQ[LQ], FQ[LQ], LQ, LQ, QQ, FQ, wQ)) return !1;
      return !0
    }

    function MQ(QQ, FQ) {
      return QQ.byteLength === FQ.byteLength && rQ(new Uint8Array(QQ.buffer, QQ.byteOffset, QQ.byteLength), new Uint8Array(FQ.buffer, FQ.byteOffset, FQ.byteLength))
    }

    function GQ(QQ, FQ) {
      return YQ(QQ.getTime(), FQ.getTime())
    }

    function pQ(QQ, FQ) {
      return QQ.name === FQ.name && QQ.message === FQ.message && QQ.cause === FQ.cause && QQ.stack === FQ.stack
    }

    function cQ(QQ, FQ) {
      return QQ === FQ
    }

    function CQ(QQ, FQ, wQ) {
      const LQ = QQ.size;
      if (LQ !== FQ.size) return !1;
      if (!LQ) return !0;
      const qQ = new Array(LQ),
        oQ = QQ.entries();
      let DQ, kQ, vQ = 0;
      for (;
        (DQ = oQ.next()) && !DQ.done;) {
        const LQ = FQ.entries();
        let oQ = !1,
          mQ = 0;
        for (;
          (kQ = LQ.next()) && !kQ.done;) {
          if (qQ[mQ]) {
            mQ++;
            continue
          }
          const LQ = DQ.value,
            uQ = kQ.value;
          if (wQ.equals(LQ[0], uQ[0], vQ, mQ, QQ, FQ, wQ) && wQ.equals(LQ[1], uQ[1], LQ[0], uQ[0], QQ, FQ, wQ)) {
            oQ = qQ[mQ] = !0;
            break
          }
          mQ++
        }
        if (!oQ) return !1;
        vQ++
      }
      return !0
    }
    const SQ = YQ;

    function iQ(QQ, FQ, wQ) {
      const LQ = AQ(QQ);
      let qQ = LQ.length;
      if (AQ(FQ).length !== qQ) return !1;
      for (; qQ-- > 0;)
        if (!UQ(QQ, FQ, wQ, LQ[qQ])) return !1;
      return !0
    }

    function WQ(QQ, FQ, wQ) {
      const LQ = HQ(QQ);
      let qQ, oQ, DQ, kQ = LQ.length;
      if (HQ(FQ).length !== kQ) return !1;
      for (; kQ-- > 0;) {
        if (qQ = LQ[kQ], !UQ(QQ, FQ, wQ, qQ)) return !1;
        if (oQ = xQ(QQ, qQ), DQ = xQ(FQ, qQ), (oQ || DQ) && (!oQ || !DQ || oQ.configurable !== DQ.configurable || oQ.enumerable !== DQ.enumerable || oQ.writable !== DQ.writable)) return !1
      }
      return !0
    }

    function RQ(QQ, FQ) {
      return YQ(QQ.valueOf(), FQ.valueOf())
    }

    function OQ(QQ, FQ) {
      return QQ.source === FQ.source && QQ.flags === FQ.flags
    }

    function sQ(QQ, FQ, wQ) {
      const LQ = QQ.size;
      if (LQ !== FQ.size) return !1;
      if (!LQ) return !0;
      const qQ = new Array(LQ),
        oQ = QQ.values();
      let DQ, kQ;
      for (;
        (DQ = oQ.next()) && !DQ.done;) {
        const LQ = FQ.values();
        let oQ = !1,
          vQ = 0;
        for (;
          (kQ = LQ.next()) && !kQ.done;) {
          if (!qQ[vQ] && wQ.equals(DQ.value, kQ.value, DQ.value, kQ.value, QQ, FQ, wQ)) {
            oQ = qQ[vQ] = !0;
            break
          }
          vQ++
        }
        if (!oQ) return !1
      }
      return !0
    }

    function rQ(QQ, FQ) {
      let wQ = QQ.byteLength;
      if (FQ.byteLength !== wQ || QQ.byteOffset !== FQ.byteOffset) return !1;
      for (; wQ-- > 0;)
        if (QQ[wQ] !== FQ[wQ]) return !1;
      return !0
    }

    function IQ(QQ, FQ) {
      return QQ.hostname === FQ.hostname && QQ.pathname === FQ.pathname && QQ.protocol === FQ.protocol && QQ.port === FQ.port && QQ.hash === FQ.hash && QQ.username === FQ.username && QQ.password === FQ.password
    }

    function UQ(QQ, FQ, wQ, LQ) {
      return !("_owner" !== LQ && "__o" !== LQ && "__v" !== LQ || !QQ.$$typeof && !FQ.$$typeof) || bQ(FQ, LQ) && wQ.equals(QQ[LQ], FQ[LQ], LQ, LQ, QQ, FQ, wQ)
    }
    const NQ = {
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
      TQ = Object.prototype.toString;

    function KQ(QQ) {
      let {
        areArrayBuffersEqual: FQ,
        areArraysEqual: wQ,
        areDataViewsEqual: LQ,
        areDatesEqual: qQ,
        areErrorsEqual: oQ,
        areFunctionsEqual: DQ,
        areMapsEqual: kQ,
        areNumbersEqual: vQ,
        areObjectsEqual: mQ,
        arePrimitiveWrappersEqual: uQ,
        areRegExpsEqual: HQ,
        areSetsEqual: bQ,
        areTypedArraysEqual: YQ,
        areUrlsEqual: xQ,
        unknownTagComparators: AQ
      } = QQ;
      return function(QQ, tQ, eQ) {
        if (QQ === tQ) return !0;
        if (null == QQ || null == tQ) return !1;
        const MQ = typeof QQ;
        if (MQ !== typeof tQ) return !1;
        if ("object" !== MQ) return "number" === MQ ? vQ(QQ, tQ, eQ) : "function" === MQ && DQ(QQ, tQ, eQ);
        const GQ = QQ.constructor;
        if (GQ !== tQ.constructor) return !1;
        if (GQ === Object) return mQ(QQ, tQ, eQ);
        if (Array.isArray(QQ)) return wQ(QQ, tQ, eQ);
        if (GQ === Date) return qQ(QQ, tQ, eQ);
        if (GQ === RegExp) return HQ(QQ, tQ, eQ);
        if (GQ === Map) return kQ(QQ, tQ, eQ);
        if (GQ === Set) return bQ(QQ, tQ, eQ);
        const pQ = TQ.call(QQ);
        if ("[object Date]" === pQ) return qQ(QQ, tQ, eQ);
        if ("[object RegExp]" === pQ) return HQ(QQ, tQ, eQ);
        if ("[object Map]" === pQ) return kQ(QQ, tQ, eQ);
        if ("[object Set]" === pQ) return bQ(QQ, tQ, eQ);
        if ("[object Object]" === pQ) return "function" !== typeof QQ.then && "function" !== typeof tQ.then && mQ(QQ, tQ, eQ);
        if ("[object URL]" === pQ) return xQ(QQ, tQ, eQ);
        if ("[object Error]" === pQ) return oQ(QQ, tQ, eQ);
        if ("[object Arguments]" === pQ) return mQ(QQ, tQ, eQ);
        if (NQ[pQ]) return YQ(QQ, tQ, eQ);
        if ("[object ArrayBuffer]" === pQ) return FQ(QQ, tQ, eQ);
        if ("[object DataView]" === pQ) return LQ(QQ, tQ, eQ);
        if ("[object Boolean]" === pQ || "[object Number]" === pQ || "[object String]" === pQ) return uQ(QQ, tQ, eQ);
        if (AQ) {
          let FQ = AQ[pQ];
          if (!FQ) {
            const wQ = null != (cQ = QQ) ? cQ[Symbol.toStringTag] : void 0;
            wQ && (FQ = AQ[wQ])
          }
          if (FQ) return FQ(QQ, tQ, eQ)
        }
        var cQ;
        return !1
      }
    }
    const zQ = lQ();
    lQ({
      strict: !0
    }), lQ({
      circular: !0
    }), lQ({
      circular: !0,
      strict: !0
    }), lQ({
      createInternalComparator: () => YQ
    }), lQ({
      strict: !0,
      createInternalComparator: () => YQ
    }), lQ({
      circular: !0,
      createInternalComparator: () => YQ
    }), lQ({
      circular: !0,
      createInternalComparator: () => YQ,
      strict: !0
    });

    function lQ() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        circular: FQ = !1,
        createInternalComparator: wQ,
        createState: LQ,
        strict: qQ = !1
      } = QQ, oQ = function(QQ) {
        let {
          circular: FQ,
          createCustomConfig: wQ,
          strict: LQ
        } = QQ, qQ = {
          areArrayBuffersEqual: tQ,
          areArraysEqual: LQ ? WQ : eQ,
          areDataViewsEqual: MQ,
          areDatesEqual: GQ,
          areErrorsEqual: pQ,
          areFunctionsEqual: cQ,
          areMapsEqual: LQ ? mQ(CQ, WQ) : CQ,
          areNumbersEqual: SQ,
          areObjectsEqual: LQ ? WQ : iQ,
          arePrimitiveWrappersEqual: RQ,
          areRegExpsEqual: OQ,
          areSetsEqual: LQ ? mQ(sQ, WQ) : sQ,
          areTypedArraysEqual: LQ ? mQ(rQ, WQ) : rQ,
          areUrlsEqual: IQ,
          unknownTagComparators: void 0
        };
        if (wQ && (qQ = Object.assign({}, qQ, wQ(qQ))), FQ) {
          const QQ = uQ(qQ.areArraysEqual),
            FQ = uQ(qQ.areMapsEqual),
            wQ = uQ(qQ.areObjectsEqual),
            LQ = uQ(qQ.areSetsEqual);
          qQ = Object.assign({}, qQ, {
            areArraysEqual: QQ,
            areMapsEqual: FQ,
            areObjectsEqual: wQ,
            areSetsEqual: LQ
          })
        }
        return qQ
      }(QQ), DQ = KQ(oQ);
      var kQ;
      return function(QQ) {
        let {
          circular: FQ,
          comparator: wQ,
          createState: LQ,
          equals: qQ,
          strict: oQ
        } = QQ;
        if (LQ) return function(QQ, DQ) {
          const {
            cache: kQ = (FQ ? new WeakMap : void 0),
            meta: vQ
          } = LQ();
          return wQ(QQ, DQ, {
            cache: kQ,
            equals: qQ,
            meta: vQ,
            strict: oQ
          })
        };
        if (FQ) return function(QQ, FQ) {
          return wQ(QQ, FQ, {
            cache: new WeakMap,
            equals: qQ,
            meta: void 0,
            strict: oQ
          })
        };
        const DQ = {
          cache: void 0,
          equals: qQ,
          meta: void 0,
          strict: oQ
        };
        return function(QQ, FQ) {
          return wQ(QQ, FQ, DQ)
        }
      }({
        circular: FQ,
        comparator: DQ,
        createState: LQ,
        equals: wQ ? wQ(DQ) : (kQ = DQ, function(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
          return kQ(QQ, FQ, DQ)
        }),
        strict: qQ
      })
    }

    function jQ(QQ) {
      var FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        wQ = -1;
      requestAnimationFrame((function LQ(qQ) {
        wQ < 0 && (wQ = qQ), qQ - wQ > FQ ? (QQ(qQ), wQ = -1) : function(QQ) {
          "undefined" !== typeof requestAnimationFrame && requestAnimationFrame(QQ)
        }(LQ)
      }))
    }

    function aQ(QQ) {
      return aQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, aQ(QQ)
    }

    function XQ(QQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return QQ
      }(QQ) || function(QQ) {
        if ("undefined" !== typeof Symbol && null != QQ[Symbol.iterator] || null != QQ["@@iterator"]) return Array.from(QQ)
      }(QQ) || function(QQ, FQ) {
        if (!QQ) return;
        if ("string" === typeof QQ) return fQ(QQ, FQ);
        var wQ = Object.prototype.toString.call(QQ).slice(8, -1);
        "Object" === wQ && QQ.constructor && (wQ = QQ.constructor.name);
        if ("Map" === wQ || "Set" === wQ) return Array.from(QQ);
        if ("Arguments" === wQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wQ)) return fQ(QQ, FQ)
      }(QQ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function fQ(QQ, FQ) {
      (null == FQ || FQ > QQ.length) && (FQ = QQ.length);
      for (var wQ = 0, LQ = new Array(FQ); wQ < FQ; wQ++) LQ[wQ] = QQ[wQ];
      return LQ
    }

    function VQ() {
      var QQ = function() {
          return null
        },
        FQ = !1,
        wQ = function wQ(LQ) {
          if (!FQ) {
            if (Array.isArray(LQ)) {
              if (!LQ.length) return;
              var qQ = XQ(LQ),
                oQ = qQ[0],
                DQ = qQ.slice(1);
              return "number" === typeof oQ ? void jQ(wQ.bind(null, DQ), oQ) : (wQ(oQ), void jQ(wQ.bind(null, DQ)))
            }
            "object" === aQ(LQ) && QQ(LQ), "function" === typeof LQ && LQ()
          }
        };
      return {
        stop: function() {
          FQ = !0
        },
        start: function(QQ) {
          FQ = !1, wQ(QQ)
        },
        subscribe: function(FQ) {
          return QQ = FQ,
            function() {
              QQ = function() {
                return null
              }
            }
        }
      }
    }

    function hQ(QQ) {
      return hQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, hQ(QQ)
    }

    function JQ(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function EQ(QQ) {
      for (var FQ = 1; FQ < arguments.length; FQ++) {
        var wQ = null != arguments[FQ] ? arguments[FQ] : {};
        FQ % 2 ? JQ(Object(wQ), !0).forEach((function(FQ) {
          nQ(QQ, FQ, wQ[FQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : JQ(Object(wQ)).forEach((function(FQ) {
          Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
        }))
      }
      return QQ
    }

    function nQ(QQ, FQ, wQ) {
      return (FQ = function(QQ) {
        var FQ = function(QQ, FQ) {
          if ("object" !== hQ(QQ) || null === QQ) return QQ;
          var wQ = QQ[Symbol.toPrimitive];
          if (void 0 !== wQ) {
            var LQ = wQ.call(QQ, FQ || "default");
            if ("object" !== hQ(LQ)) return LQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === FQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" === hQ(FQ) ? FQ : String(FQ)
      }(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }
    var gQ = function(QQ) {
        return QQ
      },
      PQ = function(QQ, FQ) {
        return Object.keys(FQ).reduce((function(wQ, LQ) {
          return EQ(EQ({}, wQ), {}, nQ({}, LQ, QQ(LQ, FQ[LQ])))
        }), {})
      },
      ZQ = function(QQ, FQ, wQ) {
        return QQ.map((function(QQ) {
          return "".concat((LQ = QQ, LQ.replace(/([A-Z])/g, (function(QQ) {
            return "-".concat(QQ.toLowerCase())
          }))), " ").concat(FQ, "ms ").concat(wQ);
          var LQ
        })).join(",")
      };

    function yQ(QQ, FQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return QQ
      }(QQ) || function(QQ, FQ) {
        var wQ = null == QQ ? null : "undefined" != typeof Symbol && QQ[Symbol.iterator] || QQ["@@iterator"];
        if (null != wQ) {
          var LQ, qQ, oQ, DQ, kQ = [],
            vQ = !0,
            mQ = !1;
          try {
            if (oQ = (wQ = wQ.call(QQ)).next, 0 === FQ) {
              if (Object(wQ) !== wQ) return;
              vQ = !1
            } else
              for (; !(vQ = (LQ = oQ.call(wQ)).done) && (kQ.push(LQ.value), kQ.length !== FQ); vQ = !0);
          } catch (QQ) {
            mQ = !0, qQ = QQ
          } finally {
            try {
              if (!vQ && null != wQ.return && (DQ = wQ.return(), Object(DQ) !== DQ)) return
            } finally {
              if (mQ) throw qQ
            }
          }
          return kQ
        }
      }(QQ, FQ) || dQ(QQ, FQ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function BQ(QQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return QF(QQ)
      }(QQ) || function(QQ) {
        if ("undefined" !== typeof Symbol && null != QQ[Symbol.iterator] || null != QQ["@@iterator"]) return Array.from(QQ)
      }(QQ) || dQ(QQ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function dQ(QQ, FQ) {
      if (QQ) {
        if ("string" === typeof QQ) return QF(QQ, FQ);
        var wQ = Object.prototype.toString.call(QQ).slice(8, -1);
        return "Object" === wQ && QQ.constructor && (wQ = QQ.constructor.name), "Map" === wQ || "Set" === wQ ? Array.from(QQ) : "Arguments" === wQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wQ) ? QF(QQ, FQ) : void 0
      }
    }

    function QF(QQ, FQ) {
      (null == FQ || FQ > QQ.length) && (FQ = QQ.length);
      for (var wQ = 0, LQ = new Array(FQ); wQ < FQ; wQ++) LQ[wQ] = QQ[wQ];
      return LQ
    }
    var FF = 1e-4,
      wF = function(QQ, FQ) {
        return [0, 3 * QQ, 3 * FQ - 6 * QQ, 3 * QQ - 3 * FQ + 1]
      },
      LF = function(QQ, FQ) {
        return QQ.map((function(QQ, wQ) {
          return QQ * Math.pow(FQ, wQ)
        })).reduce((function(QQ, FQ) {
          return QQ + FQ
        }))
      },
      qF = function(QQ, FQ) {
        return function(wQ) {
          var LQ = wF(QQ, FQ);
          return LF(LQ, wQ)
        }
      },
      oF = function() {
        for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
        var LQ = FQ[0],
          qQ = FQ[1],
          oQ = FQ[2],
          DQ = FQ[3];
        if (1 === FQ.length) switch (FQ[0]) {
          case "linear":
            LQ = 0, qQ = 0, oQ = 1, DQ = 1;
            break;
          case "ease":
            LQ = .25, qQ = .1, oQ = .25, DQ = 1;
            break;
          case "ease-in":
            LQ = .42, qQ = 0, oQ = 1, DQ = 1;
            break;
          case "ease-out":
            LQ = .42, qQ = 0, oQ = .58, DQ = 1;
            break;
          case "ease-in-out":
            LQ = 0, qQ = 0, oQ = .58, DQ = 1;
            break;
          default:
            var kQ = FQ[0].split("(");
            if ("cubic-bezier" === kQ[0] && 4 === kQ[1].split(")")[0].split(",").length) {
              var vQ = yQ(kQ[1].split(")")[0].split(",").map((function(QQ) {
                return parseFloat(QQ)
              })), 4);
              LQ = vQ[0], qQ = vQ[1], oQ = vQ[2], DQ = vQ[3]
            }
        } [LQ, oQ, qQ, DQ].every((function(QQ) {
          return "number" === typeof QQ && QQ >= 0 && QQ <= 1
        }));
        var mQ, uQ, HQ = qF(LQ, oQ),
          bQ = qF(qQ, DQ),
          YQ = (mQ = LQ, uQ = oQ, function(QQ) {
            var FQ = wF(mQ, uQ),
              wQ = [].concat(BQ(FQ.map((function(QQ, FQ) {
                return QQ * FQ
              })).slice(1)), [0]);
            return LF(wQ, QQ)
          }),
          xQ = function(QQ) {
            for (var FQ, wQ = QQ > 1 ? 1 : QQ, LQ = wQ, qQ = 0; qQ < 8; ++qQ) {
              var oQ = HQ(LQ) - wQ,
                DQ = YQ(LQ);
              if (Math.abs(oQ - wQ) < FF || DQ < FF) return bQ(LQ);
              LQ = (FQ = LQ - oQ / DQ) > 1 ? 1 : FQ < 0 ? 0 : FQ
            }
            return bQ(LQ)
          };
        return xQ.isStepper = !1, xQ
      },
      DF = function() {
        for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
        var LQ = FQ[0];
        if ("string" === typeof LQ) switch (LQ) {
          case "ease":
          case "ease-in-out":
          case "ease-out":
          case "ease-in":
          case "linear":
            return oF(LQ);
          case "spring":
            return function() {
              var QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                FQ = QQ.stiff,
                wQ = void 0 === FQ ? 100 : FQ,
                LQ = QQ.damping,
                qQ = void 0 === LQ ? 8 : LQ,
                oQ = QQ.dt,
                DQ = void 0 === oQ ? 17 : oQ,
                kQ = function(QQ, FQ, LQ) {
                  var oQ = LQ + (-(QQ - FQ) * wQ - LQ * qQ) * DQ / 1e3,
                    kQ = LQ * DQ / 1e3 + QQ;
                  return Math.abs(kQ - FQ) < FF && Math.abs(oQ) < FF ? [FQ, 0] : [kQ, oQ]
                };
              return kQ.isStepper = !0, kQ.dt = DQ, kQ
            }();
          default:
            if ("cubic-bezier" === LQ.split("(")[0]) return oF(LQ)
        }
        return "function" === typeof LQ ? LQ : null
      };

    function kF(QQ) {
      return kF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, kF(QQ)
    }

    function vF(QQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return xF(QQ)
      }(QQ) || function(QQ) {
        if ("undefined" !== typeof Symbol && null != QQ[Symbol.iterator] || null != QQ["@@iterator"]) return Array.from(QQ)
      }(QQ) || YF(QQ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function mF(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function uF(QQ) {
      for (var FQ = 1; FQ < arguments.length; FQ++) {
        var wQ = null != arguments[FQ] ? arguments[FQ] : {};
        FQ % 2 ? mF(Object(wQ), !0).forEach((function(FQ) {
          HF(QQ, FQ, wQ[FQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : mF(Object(wQ)).forEach((function(FQ) {
          Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
        }))
      }
      return QQ
    }

    function HF(QQ, FQ, wQ) {
      return (FQ = function(QQ) {
        var FQ = function(QQ, FQ) {
          if ("object" !== kF(QQ) || null === QQ) return QQ;
          var wQ = QQ[Symbol.toPrimitive];
          if (void 0 !== wQ) {
            var LQ = wQ.call(QQ, FQ || "default");
            if ("object" !== kF(LQ)) return LQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === FQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" === kF(FQ) ? FQ : String(FQ)
      }(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }

    function bF(QQ, FQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return QQ
      }(QQ) || function(QQ, FQ) {
        var wQ = null == QQ ? null : "undefined" != typeof Symbol && QQ[Symbol.iterator] || QQ["@@iterator"];
        if (null != wQ) {
          var LQ, qQ, oQ, DQ, kQ = [],
            vQ = !0,
            mQ = !1;
          try {
            if (oQ = (wQ = wQ.call(QQ)).next, 0 === FQ) {
              if (Object(wQ) !== wQ) return;
              vQ = !1
            } else
              for (; !(vQ = (LQ = oQ.call(wQ)).done) && (kQ.push(LQ.value), kQ.length !== FQ); vQ = !0);
          } catch (QQ) {
            mQ = !0, qQ = QQ
          } finally {
            try {
              if (!vQ && null != wQ.return && (DQ = wQ.return(), Object(DQ) !== DQ)) return
            } finally {
              if (mQ) throw qQ
            }
          }
          return kQ
        }
      }(QQ, FQ) || YF(QQ, FQ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function YF(QQ, FQ) {
      if (QQ) {
        if ("string" === typeof QQ) return xF(QQ, FQ);
        var wQ = Object.prototype.toString.call(QQ).slice(8, -1);
        return "Object" === wQ && QQ.constructor && (wQ = QQ.constructor.name), "Map" === wQ || "Set" === wQ ? Array.from(QQ) : "Arguments" === wQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wQ) ? xF(QQ, FQ) : void 0
      }
    }

    function xF(QQ, FQ) {
      (null == FQ || FQ > QQ.length) && (FQ = QQ.length);
      for (var wQ = 0, LQ = new Array(FQ); wQ < FQ; wQ++) LQ[wQ] = QQ[wQ];
      return LQ
    }
    var AF = function(QQ, FQ, wQ) {
        return QQ + (FQ - QQ) * wQ
      },
      tF = function(QQ) {
        return QQ.from !== QQ.to
      },
      eF = function QQ(FQ, wQ, LQ) {
        var qQ = PQ((function(QQ, wQ) {
          if (tF(wQ)) {
            var LQ = bF(FQ(wQ.from, wQ.to, wQ.Qt), 2),
              qQ = LQ[0],
              oQ = LQ[1];
            return uF(uF({}, wQ), {}, {
              from: qQ,
              Qt: oQ
            })
          }
          return wQ
        }), wQ);
        return LQ < 1 ? PQ((function(QQ, FQ) {
          return tF(FQ) ? uF(uF({}, FQ), {}, {
            Qt: AF(FQ.Qt, qQ[QQ].Qt, LQ),
            from: AF(FQ.from, qQ[QQ].from, LQ)
          }) : FQ
        }), wQ) : QQ(FQ, qQ, LQ - 1)
      };
    const MF = function(QQ, FQ, wQ, LQ, qQ) {
      var oQ, DQ, kQ, vQ, mQ = (oQ = QQ, DQ = FQ, [Object.keys(oQ), Object.keys(DQ)].reduce((function(QQ, FQ) {
          return QQ.filter((function(QQ) {
            return FQ.includes(QQ)
          }))
        }))),
        uQ = mQ.reduce((function(wQ, LQ) {
          return uF(uF({}, wQ), {}, HF({}, LQ, [QQ[LQ], FQ[LQ]]))
        }), {}),
        HQ = mQ.reduce((function(wQ, LQ) {
          return uF(uF({}, wQ), {}, HF({}, LQ, {
            from: QQ[LQ],
            Qt: 0,
            to: FQ[LQ]
          }))
        }), {}),
        bQ = -1,
        YQ = function() {
          return null
        };
      return YQ = wQ.isStepper ? function(LQ) {
          kQ || (kQ = LQ);
          var oQ = (LQ - kQ) / wQ.dt;
          HQ = eF(wQ, HQ, oQ), qQ(uF(uF(uF({}, QQ), FQ), PQ((function(QQ, FQ) {
            return FQ.from
          }), HQ))), kQ = LQ, Object.values(HQ).filter(tF).length && (bQ = requestAnimationFrame(YQ))
        } : function(oQ) {
          vQ || (vQ = oQ);
          var DQ = (oQ - vQ) / LQ,
            kQ = PQ((function(QQ, FQ) {
              return AF.apply(void 0, vF(FQ).concat([wQ(DQ)]))
            }), uQ);
          if (qQ(uF(uF(uF({}, QQ), FQ), kQ)), DQ < 1) bQ = requestAnimationFrame(YQ);
          else {
            var mQ = PQ((function(QQ, FQ) {
              return AF.apply(void 0, vF(FQ).concat([wQ(1)]))
            }), uQ);
            qQ(uF(uF(uF({}, QQ), FQ), mQ))
          }
        },
        function() {
          return requestAnimationFrame(YQ),
            function() {
              cancelAnimationFrame(bQ)
            }
        }
    };

    function GF(QQ) {
      return GF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, GF(QQ)
    }
    var pF = ["children", "mY", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];

    function cF(QQ, FQ) {
      if (null == QQ) return {};
      var wQ, LQ, qQ = function(QQ, FQ) {
        if (null == QQ) return {};
        var wQ, LQ, qQ = {},
          oQ = Object.keys(QQ);
        for (LQ = 0; LQ < oQ.length; LQ++) wQ = oQ[LQ], FQ.indexOf(wQ) >= 0 || (qQ[wQ] = QQ[wQ]);
        return qQ
      }(QQ, FQ);
      if (Object.getOwnPropertySymbols) {
        var oQ = Object.getOwnPropertySymbols(QQ);
        for (LQ = 0; LQ < oQ.length; LQ++) wQ = oQ[LQ], FQ.indexOf(wQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, wQ) && (qQ[wQ] = QQ[wQ])
      }
      return qQ
    }

    function CF(QQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return SF(QQ)
      }(QQ) || function(QQ) {
        if ("undefined" !== typeof Symbol && null != QQ[Symbol.iterator] || null != QQ["@@iterator"]) return Array.from(QQ)
      }(QQ) || function(QQ, FQ) {
        if (!QQ) return;
        if ("string" === typeof QQ) return SF(QQ, FQ);
        var wQ = Object.prototype.toString.call(QQ).slice(8, -1);
        "Object" === wQ && QQ.constructor && (wQ = QQ.constructor.name);
        if ("Map" === wQ || "Set" === wQ) return Array.from(QQ);
        if ("Arguments" === wQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wQ)) return SF(QQ, FQ)
      }(QQ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function SF(QQ, FQ) {
      (null == FQ || FQ > QQ.length) && (FQ = QQ.length);
      for (var wQ = 0, LQ = new Array(FQ); wQ < FQ; wQ++) LQ[wQ] = QQ[wQ];
      return LQ
    }

    function iF(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function WF(QQ) {
      for (var FQ = 1; FQ < arguments.length; FQ++) {
        var wQ = null != arguments[FQ] ? arguments[FQ] : {};
        FQ % 2 ? iF(Object(wQ), !0).forEach((function(FQ) {
          RF(QQ, FQ, wQ[FQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : iF(Object(wQ)).forEach((function(FQ) {
          Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
        }))
      }
      return QQ
    }

    function RF(QQ, FQ, wQ) {
      return (FQ = sF(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }

    function OF(QQ, FQ) {
      for (var wQ = 0; wQ < FQ.length; wQ++) {
        var LQ = FQ[wQ];
        LQ.enumerable = LQ.enumerable || !1, LQ.configurable = !0, "value" in LQ && (LQ.writable = !0), Object.defineProperty(QQ, sF(LQ.key), LQ)
      }
    }

    function sF(QQ) {
      var FQ = function(QQ, FQ) {
        if ("object" !== GF(QQ) || null === QQ) return QQ;
        var wQ = QQ[Symbol.toPrimitive];
        if (void 0 !== wQ) {
          var LQ = wQ.call(QQ, FQ || "default");
          if ("object" !== GF(LQ)) return LQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === FQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" === GF(FQ) ? FQ : String(FQ)
    }

    function rF(QQ, FQ) {
      return rF = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(QQ, FQ) {
        return QQ.__proto__ = FQ, QQ
      }, rF(QQ, FQ)
    }

    function IF(QQ) {
      var FQ = function() {
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
        var wQ, LQ = TF(QQ);
        if (FQ) {
          var qQ = TF(this).constructor;
          wQ = Reflect.construct(LQ, arguments, qQ)
        } else wQ = LQ.apply(this, arguments);
        return UF(this, wQ)
      }
    }

    function UF(QQ, FQ) {
      if (FQ && ("object" === GF(FQ) || "function" === typeof FQ)) return FQ;
      if (void 0 !== FQ) throw new TypeError("Derived constructors may only return object or undefined");
      return NF(QQ)
    }

    function NF(QQ) {
      if (void 0 === QQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return QQ
    }

    function TF(QQ) {
      return TF = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(QQ) {
        return QQ.__proto__ || Object.getPrototypeOf(QQ)
      }, TF(QQ)
    }
    var KF = function(QQ) {
      ! function(QQ, FQ) {
        if ("function" !== typeof FQ && null !== FQ) throw new TypeError("Super expression must either be null or a function");
        QQ.prototype = Object.create(FQ && FQ.prototype, {
          constructor: {
            value: QQ,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(QQ, "prototype", {
          writable: !1
        }), FQ && rF(QQ, FQ)
      }(DQ, QQ);
      var FQ, wQ, qQ, oQ = IF(DQ);

      function DQ(QQ, FQ) {
        var wQ;
        ! function(QQ, FQ) {
          if (!(QQ instanceof FQ)) throw new TypeError("Cannot call a class as a function")
        }(this, DQ);
        var LQ = (wQ = oQ.call(this, QQ, FQ)).props,
          qQ = LQ.isActive,
          kQ = LQ.attributeName,
          vQ = LQ.from,
          mQ = LQ.to,
          uQ = LQ.steps,
          HQ = LQ.children,
          bQ = LQ.duration;
        if (wQ.handleStyleChange = wQ.handleStyleChange.bind(NF(wQ)), wQ.changeStyle = wQ.changeStyle.bind(NF(wQ)), !qQ || bQ <= 0) return wQ.state = {
          style: {}
        }, "function" === typeof HQ && (wQ.state = {
          style: mQ
        }), UF(wQ);
        if (uQ && uQ.length) wQ.state = {
          style: uQ[0].style
        };
        else if (vQ) {
          if ("function" === typeof HQ) return wQ.state = {
            style: vQ
          }, UF(wQ);
          wQ.state = {
            style: kQ ? RF({}, kQ, vQ) : vQ
          }
        } else wQ.state = {
          style: {}
        };
        return wQ
      }
      return FQ = DQ, (wQ = [{
        key: "componentDidMount",
        value: function() {
          var QQ = this.props,
            FQ = QQ.isActive,
            wQ = QQ.canBegin;
          this.mounted = !0, FQ && wQ && this.runAnimation(this.props)
        }
      }, {
        key: "componentDidUpdate",
        value: function(QQ) {
          var FQ = this.props,
            wQ = FQ.isActive,
            LQ = FQ.canBegin,
            qQ = FQ.attributeName,
            oQ = FQ.shouldReAnimate,
            DQ = FQ.to,
            kQ = FQ.from,
            vQ = this.state.style;
          if (LQ)
            if (wQ) {
              if (!(zQ(QQ.to, DQ) && QQ.canBegin && QQ.isActive)) {
                var mQ = !QQ.canBegin || !QQ.isActive;
                this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
                var uQ = mQ || oQ ? kQ : QQ.to;
                if (this.state && vQ) {
                  var HQ = {
                    style: qQ ? RF({}, qQ, uQ) : uQ
                  };
                  (qQ && vQ[qQ] !== uQ || !qQ && vQ !== uQ) && this.setState(HQ)
                }
                this.runAnimation(WF(WF({}, this.props), {}, {
                  from: uQ,
                  mY: 0
                }))
              }
            } else {
              var bQ = {
                style: qQ ? RF({}, qQ, DQ) : DQ
              };
              this.state && vQ && (qQ && vQ[qQ] !== DQ || !qQ && vQ !== DQ) && this.setState(bQ)
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
          var FQ = this,
            wQ = QQ.from,
            LQ = QQ.to,
            qQ = QQ.duration,
            oQ = QQ.easing,
            DQ = QQ.mY,
            kQ = QQ.onAnimationEnd,
            vQ = QQ.onAnimationStart,
            mQ = MF(wQ, LQ, DF(oQ), qQ, this.changeStyle);
          this.manager.start([vQ, DQ, function() {
            FQ.stopJSAnimation = mQ()
          }, qQ, kQ])
        }
      }, {
        key: "runStepAnimation",
        value: function(QQ) {
          var FQ = this,
            wQ = QQ.steps,
            LQ = QQ.mY,
            qQ = QQ.onAnimationStart,
            oQ = wQ[0],
            DQ = oQ.style,
            kQ = oQ.duration,
            vQ = void 0 === kQ ? 0 : kQ;
          return this.manager.start([qQ].concat(CF(wQ.reduce((function(QQ, LQ, qQ) {
            if (0 === qQ) return QQ;
            var oQ = LQ.duration,
              DQ = LQ.easing,
              kQ = void 0 === DQ ? "ease" : DQ,
              vQ = LQ.style,
              mQ = LQ.properties,
              uQ = LQ.onAnimationEnd,
              HQ = qQ > 0 ? wQ[qQ - 1] : LQ,
              bQ = mQ || Object.keys(vQ);
            if ("function" === typeof kQ || "spring" === kQ) return [].concat(CF(QQ), [FQ.runJSAnimation.bind(FQ, {
              from: HQ.style,
              to: vQ,
              duration: oQ,
              easing: kQ
            }), oQ]);
            var YQ = ZQ(bQ, oQ, kQ),
              xQ = WF(WF(WF({}, HQ.style), vQ), {}, {
                transition: YQ
              });
            return [].concat(CF(QQ), [xQ, oQ, uQ]).filter(gQ)
          }), [DQ, Math.max(vQ, LQ)])), [QQ.onAnimationEnd]))
        }
      }, {
        key: "runAnimation",
        value: function(QQ) {
          this.manager || (this.manager = VQ());
          var FQ = QQ.mY,
            wQ = QQ.duration,
            LQ = QQ.attributeName,
            qQ = QQ.to,
            oQ = QQ.easing,
            DQ = QQ.onAnimationStart,
            kQ = QQ.onAnimationEnd,
            vQ = QQ.steps,
            mQ = QQ.children,
            uQ = this.manager;
          if (this.unSubscribe = uQ.subscribe(this.handleStyleChange), "function" !== typeof oQ && "function" !== typeof mQ && "spring" !== oQ)
            if (vQ.length > 1) this.runStepAnimation(QQ);
            else {
              var HQ = LQ ? RF({}, LQ, qQ) : qQ,
                bQ = ZQ(Object.keys(HQ), wQ, oQ);
              uQ.start([DQ, FQ, WF(WF({}, HQ), {}, {
                transition: bQ
              }), wQ, kQ])
            }
          else this.runJSAnimation(QQ)
        }
      }, {
        key: "render",
        value: function() {
          var QQ = this.props,
            FQ = QQ.children,
            wQ = (QQ.mY, QQ.duration),
            qQ = (QQ.attributeName, QQ.easing, QQ.isActive),
            oQ = (QQ.steps, QQ.from, QQ.to, QQ.canBegin, QQ.onAnimationEnd, QQ.shouldReAnimate, QQ.onAnimationReStart, cF(QQ, pF)),
            DQ = LQ.Children.count(FQ),
            kQ = this.state.style;
          if ("function" === typeof FQ) return FQ(kQ);
          if (!qQ || 0 === DQ || wQ <= 0) return FQ;
          var vQ = function(QQ) {
            var FQ = QQ.props,
              wQ = FQ.style,
              qQ = void 0 === wQ ? {} : wQ,
              DQ = FQ.className;
            return (0, LQ.cloneElement)(QQ, WF(WF({}, oQ), {}, {
              style: WF(WF({}, qQ), kQ),
              className: DQ
            }))
          };
          return 1 === DQ ? vQ(LQ.Children.only(FQ)) : LQ.createElement("div", null, LQ.Children.map(FQ, (function(QQ) {
            return vQ(QQ)
          })))
        }
      }]) && OF(FQ.prototype, wQ), qQ && OF(FQ, qQ), Object.defineProperty(FQ, "prototype", {
        writable: !1
      }), DQ
    }(LQ.PureComponent);
    KF.displayName = "Animate", KF.defaultProps = {
      mY: 0,
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
    }, KF.propTypes = {
      from: oQ().oneOfType([oQ().object, oQ().string]),
      to: oQ().oneOfType([oQ().object, oQ().string]),
      attributeName: oQ().string,
      duration: oQ().number,
      mY: oQ().number,
      easing: oQ().oneOfType([oQ().string, oQ().func]),
      steps: oQ().arrayOf(oQ().shape({
        duration: oQ().number.isRequired,
        style: oQ().object.isRequired,
        easing: oQ().oneOfType([oQ().oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), oQ().func]),
        properties: oQ().arrayOf("string"),
        onAnimationEnd: oQ().func
      })),
      children: oQ().oneOfType([oQ().node, oQ().func]),
      isActive: oQ().bool,
      canBegin: oQ().bool,
      onAnimationEnd: oQ().func,
      shouldReAnimate: oQ().bool,
      onAnimationStart: oQ().func,
      onAnimationReStart: oQ().func
    };
    const zF = KF
  },
  6203: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => XQ
    });
    var LQ, qQ = wQ(53),
      oQ = wQ(4909),
      DQ = wQ(5960),
      kQ = wQ(5095),
      vQ = wQ.n(kQ),
      mQ = wQ(5997),
      uQ = wQ.n(mQ),
      HQ = wQ(5240),
      bQ = wQ.n(HQ),
      YQ = wQ(5011),
      xQ = wQ.n(YQ),
      AQ = wQ(6036),
      tQ = wQ.n(AQ),
      eQ = wQ(6200),
      MQ = wQ(5954),
      GQ = wQ(5800),
      pQ = wQ(6118),
      cQ = wQ(5812),
      CQ = wQ(5002),
      SQ = wQ(5974),
      iQ = wQ(5252),
      WQ = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
      RQ = ["key"];

    function OQ(QQ) {
      return OQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, OQ(QQ)
    }

    function sQ(QQ, FQ) {
      if (null == QQ) return {};
      var wQ, LQ, qQ = function(QQ, FQ) {
        if (null == QQ) return {};
        var wQ = {};
        for (var LQ in QQ)
          if (Object.prototype.hasOwnProperty.call(QQ, LQ)) {
            if (FQ.indexOf(LQ) >= 0) continue;
            wQ[LQ] = QQ[LQ]
          } return wQ
      }(QQ, FQ);
      if (Object.getOwnPropertySymbols) {
        var oQ = Object.getOwnPropertySymbols(QQ);
        for (LQ = 0; LQ < oQ.length; LQ++) wQ = oQ[LQ], FQ.indexOf(wQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, wQ) && (qQ[wQ] = QQ[wQ])
      }
      return qQ
    }

    function rQ() {
      return rQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var FQ = 1; FQ < arguments.length; FQ++) {
          var wQ = arguments[FQ];
          for (var LQ in wQ) Object.prototype.hasOwnProperty.call(wQ, LQ) && (QQ[LQ] = wQ[LQ])
        }
        return QQ
      }, rQ.apply(this, arguments)
    }

    function IQ(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function UQ(QQ) {
      for (var FQ = 1; FQ < arguments.length; FQ++) {
        var wQ = null != arguments[FQ] ? arguments[FQ] : {};
        FQ % 2 ? IQ(Object(wQ), !0).forEach((function(FQ) {
          jQ(QQ, FQ, wQ[FQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : IQ(Object(wQ)).forEach((function(FQ) {
          Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
        }))
      }
      return QQ
    }

    function NQ(QQ, FQ) {
      for (var wQ = 0; wQ < FQ.length; wQ++) {
        var LQ = FQ[wQ];
        LQ.enumerable = LQ.enumerable || !1, LQ.configurable = !0, "value" in LQ && (LQ.writable = !0), Object.defineProperty(QQ, aQ(LQ.key), LQ)
      }
    }

    function TQ(QQ, FQ, wQ) {
      return FQ = zQ(FQ),
        function(QQ, FQ) {
          if (FQ && ("object" === OQ(FQ) || "function" === typeof FQ)) return FQ;
          if (void 0 !== FQ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(QQ) {
            if (void 0 === QQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return QQ
          }(QQ)
        }(QQ, KQ() ? Reflect.construct(FQ, wQ || [], zQ(QQ).constructor) : FQ.apply(QQ, wQ))
    }

    function KQ() {
      try {
        var QQ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (QQ) {}
      return (KQ = function() {
        return !!QQ
      })()
    }

    function zQ(QQ) {
      return zQ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(QQ) {
        return QQ.__proto__ || Object.getPrototypeOf(QQ)
      }, zQ(QQ)
    }

    function lQ(QQ, FQ) {
      return lQ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(QQ, FQ) {
        return QQ.__proto__ = FQ, QQ
      }, lQ(QQ, FQ)
    }

    function jQ(QQ, FQ, wQ) {
      return (FQ = aQ(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }

    function aQ(QQ) {
      var FQ = function(QQ, FQ) {
        if ("object" != OQ(QQ) || !QQ) return QQ;
        var wQ = QQ[Symbol.toPrimitive];
        if (void 0 !== wQ) {
          var LQ = wQ.call(QQ, FQ || "default");
          if ("object" != OQ(LQ)) return LQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === FQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == OQ(FQ) ? FQ : FQ + ""
    }
    var XQ = function(QQ) {
      function FQ() {
        var QQ;
        ! function(QQ, FQ) {
          if (!(QQ instanceof FQ)) throw new TypeError("Cannot call a class as a function")
        }(this, FQ);
        for (var wQ = arguments.length, LQ = new Array(wQ), qQ = 0; qQ < wQ; qQ++) LQ[qQ] = arguments[qQ];
        return jQ(QQ = TQ(this, FQ, [].concat(LQ)), "state", {
          isAnimationFinished: !0
        }), jQ(QQ, "id", (0, CQ.C)("recharts-area-")), jQ(QQ, "handleAnimationEnd", (function() {
          var FQ = QQ.props.onAnimationEnd;
          QQ.setState({
            isAnimationFinished: !0
          }), vQ()(FQ) && FQ()
        })), jQ(QQ, "handleAnimationStart", (function() {
          var FQ = QQ.props.onAnimationStart;
          QQ.setState({
            isAnimationFinished: !1
          }), vQ()(FQ) && FQ()
        })), QQ
      }
      return function(QQ, FQ) {
        if ("function" !== typeof FQ && null !== FQ) throw new TypeError("Super expression must either be null or a function");
        QQ.prototype = Object.create(FQ && FQ.prototype, {
          constructor: {
            value: QQ,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(QQ, "prototype", {
          writable: !1
        }), FQ && lQ(QQ, FQ)
      }(FQ, QQ), wQ = FQ, LQ = [{
        key: "renderDots",
        value: function(QQ, wQ, LQ) {
          var oQ = this.props.isAnimationActive,
            DQ = this.state.isAnimationFinished;
          if (oQ && !DQ) return null;
          var kQ = this.props,
            vQ = kQ.dot,
            mQ = kQ.points,
            uQ = kQ.dataKey,
            HQ = (0, iQ.e)(this.props, !1),
            bQ = (0, iQ.e)(vQ, !0),
            YQ = mQ.map((function(QQ, wQ) {
              var LQ = UQ(UQ(UQ({
                key: "dot-".concat(wQ),
                r: 3
              }, HQ), bQ), {}, {
                index: wQ,
                cx: QQ.x,
                cy: QQ.y,
                dataKey: uQ,
                value: QQ.value,
                payload: QQ.payload,
                points: mQ
              });
              return FQ.renderDotItem(vQ, LQ)
            })),
            xQ = {
              clipPath: QQ ? "url(#clipPath-".concat(wQ ? "" : "dots-").concat(LQ, ")") : null
            };
          return qQ.createElement(GQ.e, rQ({
            className: "recharts-area-dots"
          }, xQ), YQ)
        }
      }, {
        key: "renderHorizontalRect",
        value: function(QQ) {
          var FQ = this.props,
            wQ = FQ.baseLine,
            LQ = FQ.points,
            oQ = FQ.strokeWidth,
            DQ = LQ[0].x,
            kQ = LQ[LQ.length - 1].x,
            vQ = QQ * Math.abs(DQ - kQ),
            mQ = uQ()(LQ.map((function(QQ) {
              return QQ.y || 0
            })));
          return (0, CQ.t)(wQ) && "number" === typeof wQ ? mQ = Math.max(wQ, mQ) : wQ && Array.isArray(wQ) && wQ.length && (mQ = Math.max(uQ()(wQ.map((function(QQ) {
            return QQ.y || 0
          }))), mQ)), (0, CQ.t)(mQ) ? qQ.createElement("rect", {
            x: DQ < kQ ? DQ : DQ - vQ,
            y: 0,
            width: vQ,
            height: Math.floor(mQ + (oQ ? parseInt("".concat(oQ), 10) : 1))
          }) : null
        }
      }, {
        key: "renderVerticalRect",
        value: function(QQ) {
          var FQ = this.props,
            wQ = FQ.baseLine,
            LQ = FQ.points,
            oQ = FQ.strokeWidth,
            DQ = LQ[0].y,
            kQ = LQ[LQ.length - 1].y,
            vQ = QQ * Math.abs(DQ - kQ),
            mQ = uQ()(LQ.map((function(QQ) {
              return QQ.x || 0
            })));
          return (0, CQ.t)(wQ) && "number" === typeof wQ ? mQ = Math.max(wQ, mQ) : wQ && Array.isArray(wQ) && wQ.length && (mQ = Math.max(uQ()(wQ.map((function(QQ) {
            return QQ.x || 0
          }))), mQ)), (0, CQ.t)(mQ) ? qQ.createElement("rect", {
            x: 0,
            y: DQ < kQ ? DQ : DQ - vQ,
            width: mQ + (oQ ? parseInt("".concat(oQ), 10) : 1),
            height: Math.floor(vQ)
          }) : null
        }
      }, {
        key: "renderClipRect",
        value: function(QQ) {
          return "vertical" === this.props.layout ? this.renderVerticalRect(QQ) : this.renderHorizontalRect(QQ)
        }
      }, {
        key: "renderAreaStatically",
        value: function(QQ, FQ, wQ, LQ) {
          var oQ = this.props,
            DQ = oQ.layout,
            kQ = oQ.type,
            vQ = oQ.stroke,
            mQ = oQ.connectNulls,
            uQ = oQ.isRange,
            HQ = (oQ.ref, sQ(oQ, WQ));
          return qQ.createElement(GQ.e, {
            clipPath: wQ ? "url(#clipPath-".concat(LQ, ")") : null
          }, qQ.createElement(eQ.c, rQ({}, (0, iQ.e)(HQ, !0), {
            points: QQ,
            connectNulls: mQ,
            type: kQ,
            baseLine: FQ,
            layout: DQ,
            stroke: "none",
            className: "recharts-area-area"
          })), "none" !== vQ && qQ.createElement(eQ.c, rQ({}, (0, iQ.e)(this.props, !1), {
            className: "recharts-area-curve",
            layout: DQ,
            type: kQ,
            connectNulls: mQ,
            fill: "none",
            points: QQ
          })), "none" !== vQ && uQ && qQ.createElement(eQ.c, rQ({}, (0, iQ.e)(this.props, !1), {
            className: "recharts-area-curve",
            layout: DQ,
            type: kQ,
            connectNulls: mQ,
            fill: "none",
            points: FQ
          })))
        }
      }, {
        key: "renderAreaWithAnimation",
        value: function(QQ, FQ) {
          var wQ = this,
            LQ = this.props,
            oQ = LQ.points,
            kQ = LQ.baseLine,
            vQ = LQ.isAnimationActive,
            mQ = LQ.animationBegin,
            uQ = LQ.animationDuration,
            HQ = LQ.animationEasing,
            YQ = LQ.animationId,
            AQ = this.state,
            tQ = AQ.prevPoints,
            eQ = AQ.prevBaseLine;
          return qQ.createElement(DQ.b, {
            mY: mQ,
            duration: uQ,
            isActive: vQ,
            easing: HQ,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "area-".concat(YQ),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(LQ) {
            var DQ = LQ.t;
            if (tQ) {
              var vQ, mQ = tQ.length / oQ.length,
                uQ = oQ.map((function(QQ, FQ) {
                  var wQ = Math.floor(FQ * mQ);
                  if (tQ[wQ]) {
                    var LQ = tQ[wQ],
                      qQ = (0, CQ.o)(LQ.x, QQ.x),
                      oQ = (0, CQ.o)(LQ.y, QQ.y);
                    return UQ(UQ({}, QQ), {}, {
                      x: qQ(DQ),
                      y: oQ(DQ)
                    })
                  }
                  return QQ
                }));
              return vQ = (0, CQ.t)(kQ) && "number" === typeof kQ ? (0, CQ.o)(eQ, kQ)(DQ) : bQ()(kQ) || xQ()(kQ) ? (0, CQ.o)(eQ, 0)(DQ) : kQ.map((function(QQ, FQ) {
                var wQ = Math.floor(FQ * mQ);
                if (eQ[wQ]) {
                  var LQ = eQ[wQ],
                    qQ = (0, CQ.o)(LQ.x, QQ.x),
                    oQ = (0, CQ.o)(LQ.y, QQ.y);
                  return UQ(UQ({}, QQ), {}, {
                    x: qQ(DQ),
                    y: oQ(DQ)
                  })
                }
                return QQ
              })), wQ.renderAreaStatically(uQ, vQ, QQ, FQ)
            }
            return qQ.createElement(GQ.e, null, qQ.createElement("defs", null, qQ.createElement("clipPath", {
              id: "animationClipPath-".concat(FQ)
            }, wQ.renderClipRect(DQ))), qQ.createElement(GQ.e, {
              clipPath: "url(#animationClipPath-".concat(FQ, ")")
            }, wQ.renderAreaStatically(oQ, kQ, QQ, FQ)))
          }))
        }
      }, {
        key: "renderArea",
        value: function(QQ, FQ) {
          var wQ = this.props,
            LQ = wQ.points,
            qQ = wQ.baseLine,
            oQ = wQ.isAnimationActive,
            DQ = this.state,
            kQ = DQ.prevPoints,
            vQ = DQ.prevBaseLine,
            mQ = DQ.totalLength;
          return oQ && LQ && LQ.length && (!kQ && mQ > 0 || !tQ()(kQ, LQ) || !tQ()(vQ, qQ)) ? this.renderAreaWithAnimation(QQ, FQ) : this.renderAreaStatically(LQ, qQ, QQ, FQ)
        }
      }, {
        key: "render",
        value: function() {
          var QQ, FQ = this.props,
            wQ = FQ.hide,
            LQ = FQ.dot,
            DQ = FQ.points,
            kQ = FQ.className,
            vQ = FQ.top,
            mQ = FQ.left,
            uQ = FQ.xAxis,
            HQ = FQ.yAxis,
            YQ = FQ.width,
            xQ = FQ.height,
            AQ = FQ.isAnimationActive,
            tQ = FQ.id;
          if (wQ || !DQ || !DQ.length) return null;
          var eQ = this.state.isAnimationFinished,
            MQ = 1 === DQ.length,
            cQ = (0, oQ.b)("recharts-area", kQ),
            CQ = uQ && uQ.allowDataOverflow,
            SQ = HQ && HQ.allowDataOverflow,
            WQ = CQ || SQ,
            RQ = bQ()(tQ) ? this.id : tQ,
            OQ = null !== (QQ = (0, iQ.e)(LQ, !1)) && void 0 !== QQ ? QQ : {
              r: 3,
              strokeWidth: 2
            },
            sQ = OQ.r,
            rQ = void 0 === sQ ? 3 : sQ,
            IQ = OQ.strokeWidth,
            UQ = void 0 === IQ ? 2 : IQ,
            NQ = ((0, iQ.x)(LQ) ? LQ : {}).clipDot,
            TQ = void 0 === NQ || NQ,
            KQ = 2 * rQ + UQ;
          return qQ.createElement(GQ.e, {
            className: cQ
          }, CQ || SQ ? qQ.createElement("defs", null, qQ.createElement("clipPath", {
            id: "clipPath-".concat(RQ)
          }, qQ.createElement("rect", {
            x: CQ ? mQ : mQ - YQ / 2,
            y: SQ ? vQ : vQ - xQ / 2,
            width: CQ ? YQ : 2 * YQ,
            height: SQ ? xQ : 2 * xQ
          })), !TQ && qQ.createElement("clipPath", {
            id: "clipPath-dots-".concat(RQ)
          }, qQ.createElement("rect", {
            x: mQ - KQ / 2,
            y: vQ - KQ / 2,
            width: YQ + KQ,
            height: xQ + KQ
          }))) : null, MQ ? null : this.renderArea(WQ, RQ), (LQ || MQ) && this.renderDots(WQ, TQ, RQ), (!AQ || eQ) && pQ.d.renderCallByParent(this.props, DQ))
        }
      }], kQ = [{
        key: "getDerivedStateFromProps",
        value: function(QQ, FQ) {
          return QQ.animationId !== FQ.prevAnimationId ? {
            prevAnimationId: QQ.animationId,
            curPoints: QQ.points,
            curBaseLine: QQ.baseLine,
            prevPoints: FQ.curPoints,
            prevBaseLine: FQ.curBaseLine
          } : QQ.points !== FQ.curPoints || QQ.baseLine !== FQ.curBaseLine ? {
            curPoints: QQ.points,
            curBaseLine: QQ.baseLine
          } : null
        }
      }], LQ && NQ(wQ.prototype, LQ), kQ && NQ(wQ, kQ), Object.defineProperty(wQ, "prototype", {
        writable: !1
      }), wQ;
      var wQ, LQ, kQ
    }(qQ.PureComponent);
    LQ = XQ, jQ(XQ, "displayName", "Area"), jQ(XQ, "defaultProps", {
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
      isAnimationActive: !cQ.d.isSsr,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease"
    }), jQ(XQ, "getBaseValue", (function(QQ, FQ, wQ, LQ) {
      var qQ = QQ.layout,
        oQ = QQ.baseValue,
        DQ = FQ.props.baseValue,
        kQ = null !== DQ && void 0 !== DQ ? DQ : oQ;
      if ((0, CQ.t)(kQ) && "number" === typeof kQ) return kQ;
      var vQ = "horizontal" === qQ ? LQ : wQ,
        mQ = vQ.scale.domain();
      if ("number" === vQ.type) {
        var uQ = Math.max(mQ[0], mQ[1]),
          HQ = Math.min(mQ[0], mQ[1]);
        return "dataMin" === kQ ? HQ : "dataMax" === kQ || uQ < 0 ? uQ : Math.max(Math.min(mQ[0], mQ[1]), 0)
      }
      return "dataMin" === kQ ? mQ[0] : "dataMax" === kQ ? mQ[1] : mQ[0]
    })), jQ(XQ, "getComposedData", (function(QQ) {
      var FQ, wQ = QQ.props,
        qQ = QQ.item,
        oQ = QQ.xAxis,
        DQ = QQ.yAxis,
        kQ = QQ.xAxisTicks,
        vQ = QQ.yAxisTicks,
        mQ = QQ.bandSize,
        uQ = QQ.dataKey,
        HQ = QQ.stackedData,
        bQ = QQ.dataStartIndex,
        YQ = QQ.displayedData,
        xQ = QQ.offset,
        AQ = wQ.layout,
        tQ = HQ && HQ.length,
        eQ = LQ.getBaseValue(wQ, qQ, oQ, DQ),
        MQ = "horizontal" === AQ,
        GQ = !1,
        pQ = YQ.map((function(QQ, FQ) {
          var wQ;
          tQ ? wQ = HQ[bQ + FQ] : (wQ = (0, SQ.$)(QQ, uQ), Array.isArray(wQ) ? GQ = !0 : wQ = [eQ, wQ]);
          var LQ = null == wQ[1] || tQ && null == (0, SQ.$)(QQ, uQ);
          return MQ ? {
            x: (0, SQ.C)({
              axis: oQ,
              ticks: kQ,
              bandSize: mQ,
              entry: QQ,
              index: FQ
            }),
            y: LQ ? null : DQ.scale(wQ[1]),
            value: wQ,
            payload: QQ
          } : {
            x: LQ ? null : oQ.scale(wQ[1]),
            y: (0, SQ.C)({
              axis: DQ,
              ticks: vQ,
              bandSize: mQ,
              entry: QQ,
              index: FQ
            }),
            value: wQ,
            payload: QQ
          }
        }));
      return FQ = tQ || GQ ? pQ.map((function(QQ) {
        var FQ = Array.isArray(QQ.value) ? QQ.value[0] : null;
        return MQ ? {
          x: QQ.x,
          y: null != FQ && null != QQ.y ? DQ.scale(FQ) : null
        } : {
          x: null != FQ ? oQ.scale(FQ) : null,
          y: QQ.y
        }
      })) : MQ ? DQ.scale(eQ) : oQ.scale(eQ), UQ({
        points: pQ,
        baseLine: FQ,
        layout: AQ,
        isRange: GQ
      }, xQ)
    })), jQ(XQ, "renderDotItem", (function(QQ, FQ) {
      var wQ;
      if (qQ.isValidElement(QQ)) wQ = qQ.cloneElement(QQ, FQ);
      else if (vQ()(QQ)) wQ = QQ(FQ);
      else {
        var LQ = (0, oQ.b)("recharts-area-dot", "boolean" !== typeof QQ ? QQ.className : ""),
          DQ = FQ.key,
          kQ = sQ(FQ, RQ);
        wQ = qQ.createElement(MQ.d, rQ({}, kQ, {
          key: DQ,
          className: LQ
        }))
      }
      return wQ
    }))
  },
  6101: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => EQ
    });
    var LQ = wQ(53),
      qQ = wQ(4909),
      oQ = wQ(5960),
      DQ = wQ(6036),
      kQ = wQ.n(DQ),
      vQ = wQ(5240),
      mQ = wQ.n(vQ),
      uQ = wQ(5800),
      HQ = wQ(6041),
      bQ = wQ(6110),
      YQ = wQ(6118),
      xQ = wQ(5002),
      AQ = wQ(5252),
      tQ = wQ(5812),
      eQ = wQ(5974),
      MQ = wQ(5277),
      GQ = wQ(5787),
      pQ = wQ(6130),
      cQ = ["x", "y"];

    function CQ(QQ) {
      return CQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, CQ(QQ)
    }

    function SQ() {
      return SQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var FQ = 1; FQ < arguments.length; FQ++) {
          var wQ = arguments[FQ];
          for (var LQ in wQ) Object.prototype.hasOwnProperty.call(wQ, LQ) && (QQ[LQ] = wQ[LQ])
        }
        return QQ
      }, SQ.apply(this, arguments)
    }

    function iQ(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function WQ(QQ) {
      for (var FQ = 1; FQ < arguments.length; FQ++) {
        var wQ = null != arguments[FQ] ? arguments[FQ] : {};
        FQ % 2 ? iQ(Object(wQ), !0).forEach((function(FQ) {
          RQ(QQ, FQ, wQ[FQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : iQ(Object(wQ)).forEach((function(FQ) {
          Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
        }))
      }
      return QQ
    }

    function RQ(QQ, FQ, wQ) {
      return (FQ = function(QQ) {
        var FQ = function(QQ, FQ) {
          if ("object" != CQ(QQ) || !QQ) return QQ;
          var wQ = QQ[Symbol.toPrimitive];
          if (void 0 !== wQ) {
            var LQ = wQ.call(QQ, FQ || "default");
            if ("object" != CQ(LQ)) return LQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === FQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == CQ(FQ) ? FQ : FQ + ""
      }(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }

    function OQ(QQ, FQ) {
      if (null == QQ) return {};
      var wQ, LQ, qQ = function(QQ, FQ) {
        if (null == QQ) return {};
        var wQ = {};
        for (var LQ in QQ)
          if (Object.prototype.hasOwnProperty.call(QQ, LQ)) {
            if (FQ.indexOf(LQ) >= 0) continue;
            wQ[LQ] = QQ[LQ]
          } return wQ
      }(QQ, FQ);
      if (Object.getOwnPropertySymbols) {
        var oQ = Object.getOwnPropertySymbols(QQ);
        for (LQ = 0; LQ < oQ.length; LQ++) wQ = oQ[LQ], FQ.indexOf(wQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, wQ) && (qQ[wQ] = QQ[wQ])
      }
      return qQ
    }

    function sQ(QQ, FQ) {
      var wQ = QQ.x,
        LQ = QQ.y,
        qQ = OQ(QQ, cQ),
        oQ = "".concat(wQ),
        DQ = parseInt(oQ, 10),
        kQ = "".concat(LQ),
        vQ = parseInt(kQ, 10),
        mQ = "".concat(FQ.height || qQ.height),
        uQ = parseInt(mQ, 10),
        HQ = "".concat(FQ.width || qQ.width),
        bQ = parseInt(HQ, 10);
      return WQ(WQ(WQ(WQ(WQ({}, FQ), qQ), DQ ? {
        x: DQ
      } : {}), vQ ? {
        y: vQ
      } : {}), {}, {
        height: uQ,
        width: bQ,
        name: FQ.name,
        radius: FQ.radius
      })
    }

    function rQ(QQ) {
      return LQ.createElement(pQ.e, SQ({
        shapeType: "rectangle",
        propTransformer: sQ,
        activeClassName: "recharts-active-bar"
      }, QQ))
    }
    var IQ, UQ = ["value", "background"];

    function NQ(QQ) {
      return NQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, NQ(QQ)
    }

    function TQ(QQ, FQ) {
      if (null == QQ) return {};
      var wQ, LQ, qQ = function(QQ, FQ) {
        if (null == QQ) return {};
        var wQ = {};
        for (var LQ in QQ)
          if (Object.prototype.hasOwnProperty.call(QQ, LQ)) {
            if (FQ.indexOf(LQ) >= 0) continue;
            wQ[LQ] = QQ[LQ]
          } return wQ
      }(QQ, FQ);
      if (Object.getOwnPropertySymbols) {
        var oQ = Object.getOwnPropertySymbols(QQ);
        for (LQ = 0; LQ < oQ.length; LQ++) wQ = oQ[LQ], FQ.indexOf(wQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, wQ) && (qQ[wQ] = QQ[wQ])
      }
      return qQ
    }

    function KQ() {
      return KQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var FQ = 1; FQ < arguments.length; FQ++) {
          var wQ = arguments[FQ];
          for (var LQ in wQ) Object.prototype.hasOwnProperty.call(wQ, LQ) && (QQ[LQ] = wQ[LQ])
        }
        return QQ
      }, KQ.apply(this, arguments)
    }

    function zQ(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function lQ(QQ) {
      for (var FQ = 1; FQ < arguments.length; FQ++) {
        var wQ = null != arguments[FQ] ? arguments[FQ] : {};
        FQ % 2 ? zQ(Object(wQ), !0).forEach((function(FQ) {
          hQ(QQ, FQ, wQ[FQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : zQ(Object(wQ)).forEach((function(FQ) {
          Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
        }))
      }
      return QQ
    }

    function jQ(QQ, FQ) {
      for (var wQ = 0; wQ < FQ.length; wQ++) {
        var LQ = FQ[wQ];
        LQ.enumerable = LQ.enumerable || !1, LQ.configurable = !0, "value" in LQ && (LQ.writable = !0), Object.defineProperty(QQ, JQ(LQ.key), LQ)
      }
    }

    function aQ(QQ, FQ, wQ) {
      return FQ = fQ(FQ),
        function(QQ, FQ) {
          if (FQ && ("object" === NQ(FQ) || "function" === typeof FQ)) return FQ;
          if (void 0 !== FQ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(QQ) {
            if (void 0 === QQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return QQ
          }(QQ)
        }(QQ, XQ() ? Reflect.construct(FQ, wQ || [], fQ(QQ).constructor) : FQ.apply(QQ, wQ))
    }

    function XQ() {
      try {
        var QQ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (QQ) {}
      return (XQ = function() {
        return !!QQ
      })()
    }

    function fQ(QQ) {
      return fQ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(QQ) {
        return QQ.__proto__ || Object.getPrototypeOf(QQ)
      }, fQ(QQ)
    }

    function VQ(QQ, FQ) {
      return VQ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(QQ, FQ) {
        return QQ.__proto__ = FQ, QQ
      }, VQ(QQ, FQ)
    }

    function hQ(QQ, FQ, wQ) {
      return (FQ = JQ(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }

    function JQ(QQ) {
      var FQ = function(QQ, FQ) {
        if ("object" != NQ(QQ) || !QQ) return QQ;
        var wQ = QQ[Symbol.toPrimitive];
        if (void 0 !== wQ) {
          var LQ = wQ.call(QQ, FQ || "default");
          if ("object" != NQ(LQ)) return LQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === FQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == NQ(FQ) ? FQ : FQ + ""
    }
    var EQ = function(QQ) {
      function FQ() {
        var QQ;
        ! function(QQ, FQ) {
          if (!(QQ instanceof FQ)) throw new TypeError("Cannot call a class as a function")
        }(this, FQ);
        for (var wQ = arguments.length, LQ = new Array(wQ), qQ = 0; qQ < wQ; qQ++) LQ[qQ] = arguments[qQ];
        return hQ(QQ = aQ(this, FQ, [].concat(LQ)), "state", {
          isAnimationFinished: !1
        }), hQ(QQ, "id", (0, xQ.C)("recharts-bar-")), hQ(QQ, "handleAnimationEnd", (function() {
          var FQ = QQ.props.onAnimationEnd;
          QQ.setState({
            isAnimationFinished: !0
          }), FQ && FQ()
        })), hQ(QQ, "handleAnimationStart", (function() {
          var FQ = QQ.props.onAnimationStart;
          QQ.setState({
            isAnimationFinished: !1
          }), FQ && FQ()
        })), QQ
      }
      return function(QQ, FQ) {
        if ("function" !== typeof FQ && null !== FQ) throw new TypeError("Super expression must either be null or a function");
        QQ.prototype = Object.create(FQ && FQ.prototype, {
          constructor: {
            value: QQ,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(QQ, "prototype", {
          writable: !1
        }), FQ && VQ(QQ, FQ)
      }(FQ, QQ), wQ = FQ, DQ = [{
        key: "renderRectanglesStatically",
        value: function(QQ) {
          var FQ = this,
            wQ = this.props,
            qQ = wQ.shape,
            oQ = wQ.dataKey,
            DQ = wQ.activeIndex,
            kQ = wQ.activeBar,
            vQ = (0, AQ.e)(this.props, !1);
          return QQ && QQ.map((function(QQ, wQ) {
            var mQ = wQ === DQ,
              HQ = mQ ? kQ : qQ,
              bQ = lQ(lQ(lQ({}, vQ), QQ), {}, {
                isActive: mQ,
                option: HQ,
                index: wQ,
                dataKey: oQ,
                onAnimationStart: FQ.handleAnimationStart,
                onAnimationEnd: FQ.handleAnimationEnd
              });
            return LQ.createElement(uQ.e, KQ({
              className: "recharts-bar-rectangle"
            }, (0, MQ.j)(FQ.props, QQ, wQ), {
              key: "rectangle-".concat(null === QQ || void 0 === QQ ? void 0 : QQ.x, "-").concat(null === QQ || void 0 === QQ ? void 0 : QQ.y, "-").concat(null === QQ || void 0 === QQ ? void 0 : QQ.value, "-").concat(wQ)
            }), LQ.createElement(rQ, bQ))
          }))
        }
      }, {
        key: "renderRectanglesWithAnimation",
        value: function() {
          var QQ = this,
            FQ = this.props,
            wQ = FQ.data,
            qQ = FQ.layout,
            DQ = FQ.isAnimationActive,
            kQ = FQ.animationBegin,
            vQ = FQ.animationDuration,
            mQ = FQ.animationEasing,
            HQ = FQ.animationId,
            bQ = this.state.prevData;
          return LQ.createElement(oQ.b, {
            mY: kQ,
            duration: vQ,
            isActive: DQ,
            easing: mQ,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "bar-".concat(HQ),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(FQ) {
            var oQ = FQ.t,
              DQ = wQ.map((function(QQ, FQ) {
                var wQ = bQ && bQ[FQ];
                if (wQ) {
                  var LQ = (0, xQ.o)(wQ.x, QQ.x),
                    DQ = (0, xQ.o)(wQ.y, QQ.y),
                    kQ = (0, xQ.o)(wQ.width, QQ.width),
                    vQ = (0, xQ.o)(wQ.height, QQ.height);
                  return lQ(lQ({}, QQ), {}, {
                    x: LQ(oQ),
                    y: DQ(oQ),
                    width: kQ(oQ),
                    height: vQ(oQ)
                  })
                }
                if ("horizontal" === qQ) {
                  var mQ = (0, xQ.o)(0, QQ.height)(oQ);
                  return lQ(lQ({}, QQ), {}, {
                    y: QQ.y + QQ.height - mQ,
                    height: mQ
                  })
                }
                var uQ = (0, xQ.o)(0, QQ.width)(oQ);
                return lQ(lQ({}, QQ), {}, {
                  width: uQ
                })
              }));
            return LQ.createElement(uQ.e, null, QQ.renderRectanglesStatically(DQ))
          }))
        }
      }, {
        key: "renderRectangles",
        value: function() {
          var QQ = this.props,
            FQ = QQ.data,
            wQ = QQ.isAnimationActive,
            LQ = this.state.prevData;
          return !(wQ && FQ && FQ.length) || LQ && kQ()(LQ, FQ) ? this.renderRectanglesStatically(FQ) : this.renderRectanglesWithAnimation()
        }
      }, {
        key: "renderBackground",
        value: function() {
          var QQ = this,
            FQ = this.props,
            wQ = FQ.data,
            qQ = FQ.dataKey,
            oQ = FQ.activeIndex,
            DQ = (0, AQ.e)(this.props.background, !1);
          return wQ.map((function(FQ, wQ) {
            FQ.value;
            var kQ = FQ.background,
              vQ = TQ(FQ, UQ);
            if (!kQ) return null;
            var mQ = lQ(lQ(lQ(lQ(lQ({}, vQ), {}, {
              fill: "#eee"
            }, kQ), DQ), (0, MQ.j)(QQ.props, FQ, wQ)), {}, {
              onAnimationStart: QQ.handleAnimationStart,
              onAnimationEnd: QQ.handleAnimationEnd,
              dataKey: qQ,
              index: wQ,
              className: "recharts-bar-background-rectangle"
            });
            return LQ.createElement(rQ, KQ({
              key: "background-bar-".concat(wQ),
              option: QQ.props.background,
              isActive: wQ === oQ
            }, mQ))
          }))
        }
      }, {
        key: "renderErrorBar",
        value: function(QQ, FQ) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var wQ = this.props,
            qQ = wQ.data,
            oQ = wQ.xAxis,
            DQ = wQ.yAxis,
            kQ = wQ.layout,
            vQ = wQ.children,
            mQ = (0, AQ.i)(vQ, HQ.d);
          if (!mQ) return null;
          var bQ = "vertical" === kQ ? qQ[0].height / 2 : qQ[0].width / 2,
            YQ = function(QQ, FQ) {
              var wQ = Array.isArray(QQ.value) ? QQ.value[1] : QQ.value;
              return {
                x: QQ.x,
                y: QQ.y,
                value: wQ,
                errorVal: (0, eQ.$)(QQ, FQ)
              }
            },
            xQ = {
              clipPath: QQ ? "url(#clipPath-".concat(FQ, ")") : null
            };
          return LQ.createElement(uQ.e, xQ, mQ.map((function(QQ) {
            return LQ.cloneElement(QQ, {
              key: "error-bar-".concat(FQ, "-").concat(QQ.props.dataKey),
              data: qQ,
              xAxis: oQ,
              yAxis: DQ,
              layout: kQ,
              offset: bQ,
              dataPointFormatter: YQ
            })
          })))
        }
      }, {
        key: "render",
        value: function() {
          var QQ = this.props,
            FQ = QQ.hide,
            wQ = QQ.data,
            oQ = QQ.className,
            DQ = QQ.xAxis,
            kQ = QQ.yAxis,
            vQ = QQ.left,
            HQ = QQ.top,
            bQ = QQ.width,
            xQ = QQ.height,
            AQ = QQ.isAnimationActive,
            tQ = QQ.background,
            eQ = QQ.id;
          if (FQ || !wQ || !wQ.length) return null;
          var MQ = this.state.isAnimationFinished,
            GQ = (0, qQ.b)("recharts-bar", oQ),
            pQ = DQ && DQ.allowDataOverflow,
            cQ = kQ && kQ.allowDataOverflow,
            CQ = pQ || cQ,
            SQ = mQ()(eQ) ? this.id : eQ;
          return LQ.createElement(uQ.e, {
            className: GQ
          }, pQ || cQ ? LQ.createElement("defs", null, LQ.createElement("clipPath", {
            id: "clipPath-".concat(SQ)
          }, LQ.createElement("rect", {
            x: pQ ? vQ : vQ - bQ / 2,
            y: cQ ? HQ : HQ - xQ / 2,
            width: pQ ? bQ : 2 * bQ,
            height: cQ ? xQ : 2 * xQ
          }))) : null, LQ.createElement(uQ.e, {
            className: "recharts-bar-rectangles",
            clipPath: CQ ? "url(#clipPath-".concat(SQ, ")") : null
          }, tQ ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(CQ, SQ), (!AQ || MQ) && YQ.d.renderCallByParent(this.props, wQ))
        }
      }], vQ = [{
        key: "getDerivedStateFromProps",
        value: function(QQ, FQ) {
          return QQ.animationId !== FQ.prevAnimationId ? {
            prevAnimationId: QQ.animationId,
            curData: QQ.data,
            prevData: FQ.curData
          } : QQ.data !== FQ.curData ? {
            curData: QQ.data
          } : null
        }
      }], DQ && jQ(wQ.prototype, DQ), vQ && jQ(wQ, vQ), Object.defineProperty(wQ, "prototype", {
        writable: !1
      }), wQ;
      var wQ, DQ, vQ
    }(LQ.PureComponent);
    IQ = EQ, hQ(EQ, "displayName", "Bar"), hQ(EQ, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      legendType: "rect",
      minPointSize: 0,
      hide: !1,
      data: [],
      layout: "vertical",
      activeBar: !1,
      isAnimationActive: !tQ.d.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "ease"
    }), hQ(EQ, "getComposedData", (function(QQ) {
      var FQ = QQ.props,
        wQ = QQ.item,
        LQ = QQ.barPosition,
        qQ = QQ.bandSize,
        oQ = QQ.xAxis,
        DQ = QQ.yAxis,
        kQ = QQ.xAxisTicks,
        vQ = QQ.yAxisTicks,
        mQ = QQ.stackedData,
        uQ = QQ.dataStartIndex,
        HQ = QQ.displayedData,
        YQ = QQ.offset,
        tQ = (0, eQ.m)(LQ, wQ);
      if (!tQ) return null;
      var MQ = FQ.layout,
        pQ = wQ.type.defaultProps,
        cQ = void 0 !== pQ ? lQ(lQ({}, pQ), wQ.props) : wQ.props,
        CQ = cQ.dataKey,
        SQ = cQ.children,
        iQ = cQ.minPointSize,
        WQ = "horizontal" === MQ ? DQ : oQ,
        RQ = mQ ? WQ.scale.domain() : null,
        OQ = (0, eQ.z)({
          numericAxis: WQ
        }),
        sQ = (0, AQ.i)(SQ, bQ.d),
        rQ = HQ.map((function(QQ, FQ) {
          var LQ, HQ, bQ, YQ, AQ, pQ;
          mQ ? LQ = (0, eQ.kb)(mQ[uQ + FQ], RQ) : (LQ = (0, eQ.$)(QQ, CQ), Array.isArray(LQ) || (LQ = [OQ, LQ]));
          var cQ = function(QQ) {
            var FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return function(wQ, LQ) {
              if ("number" === typeof QQ) return QQ;
              var qQ = (0, xQ.t)(wQ) || (0, xQ.q)(wQ);
              return qQ ? QQ(wQ, LQ) : (qQ || (0, GQ.d)(!1), FQ)
            }
          }(iQ, IQ.defaultProps.minPointSize)(LQ[1], FQ);
          if ("horizontal" === MQ) {
            var SQ, WQ = [DQ.scale(LQ[0]), DQ.scale(LQ[1])],
              rQ = WQ[0],
              UQ = WQ[1];
            HQ = (0, eQ.B)({
              axis: oQ,
              ticks: kQ,
              bandSize: qQ,
              offset: tQ.offset,
              entry: QQ,
              index: FQ
            }), bQ = null !== (SQ = null !== UQ && void 0 !== UQ ? UQ : rQ) && void 0 !== SQ ? SQ : void 0, YQ = tQ.size;
            var NQ = rQ - UQ;
            if (AQ = Number.isNaN(NQ) ? 0 : NQ, pQ = {
                x: HQ,
                y: DQ.y,
                width: YQ,
                height: DQ.height
              }, Math.abs(cQ) > 0 && Math.abs(AQ) < Math.abs(cQ)) {
              var TQ = (0, xQ.z)(AQ || cQ) * (Math.abs(cQ) - Math.abs(AQ));
              bQ -= TQ, AQ += TQ
            }
          } else {
            var KQ = [oQ.scale(LQ[0]), oQ.scale(LQ[1])],
              zQ = KQ[0],
              jQ = KQ[1];
            if (HQ = zQ, bQ = (0, eQ.B)({
                axis: DQ,
                ticks: vQ,
                bandSize: qQ,
                offset: tQ.offset,
                entry: QQ,
                index: FQ
              }), YQ = jQ - zQ, AQ = tQ.size, pQ = {
                x: oQ.x,
                y: bQ,
                width: oQ.width,
                height: AQ
              }, Math.abs(cQ) > 0 && Math.abs(YQ) < Math.abs(cQ)) YQ += (0, xQ.z)(YQ || cQ) * (Math.abs(cQ) - Math.abs(YQ))
          }
          return lQ(lQ(lQ({}, QQ), {}, {
            x: HQ,
            y: bQ,
            width: YQ,
            height: AQ,
            value: mQ ? LQ : LQ[1],
            payload: QQ,
            background: pQ
          }, sQ && sQ[FQ] && sQ[FQ].props), {}, {
            tooltipPayload: [(0, eQ._)(wQ, QQ)],
            tooltipPosition: {
              x: HQ + YQ / 2,
              y: bQ + AQ / 2
            }
          })
        }));
      return lQ({
        data: rQ,
        layout: MQ
      }, YQ)
    }))
  },
  6222: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => NQ
    });
    var LQ = wQ(53),
      qQ = wQ(5095),
      oQ = wQ.n(qQ),
      DQ = wQ(5021),
      kQ = wQ.n(DQ),
      vQ = wQ(4909),
      mQ = wQ(5269),
      uQ = wQ(5800),
      HQ = wQ(5962),
      bQ = wQ(6052),
      YQ = wQ(5002),
      xQ = wQ(5277),
      AQ = wQ(5252),
      tQ = wQ(6230),
      eQ = ["viewBox"],
      MQ = ["viewBox"],
      GQ = ["ticks"];

    function pQ(QQ) {
      return pQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, pQ(QQ)
    }

    function cQ() {
      return cQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var FQ = 1; FQ < arguments.length; FQ++) {
          var wQ = arguments[FQ];
          for (var LQ in wQ) Object.prototype.hasOwnProperty.call(wQ, LQ) && (QQ[LQ] = wQ[LQ])
        }
        return QQ
      }, cQ.apply(this, arguments)
    }

    function CQ(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function SQ(QQ) {
      for (var FQ = 1; FQ < arguments.length; FQ++) {
        var wQ = null != arguments[FQ] ? arguments[FQ] : {};
        FQ % 2 ? CQ(Object(wQ), !0).forEach((function(FQ) {
          IQ(QQ, FQ, wQ[FQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : CQ(Object(wQ)).forEach((function(FQ) {
          Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
        }))
      }
      return QQ
    }

    function iQ(QQ, FQ) {
      if (null == QQ) return {};
      var wQ, LQ, qQ = function(QQ, FQ) {
        if (null == QQ) return {};
        var wQ = {};
        for (var LQ in QQ)
          if (Object.prototype.hasOwnProperty.call(QQ, LQ)) {
            if (FQ.indexOf(LQ) >= 0) continue;
            wQ[LQ] = QQ[LQ]
          } return wQ
      }(QQ, FQ);
      if (Object.getOwnPropertySymbols) {
        var oQ = Object.getOwnPropertySymbols(QQ);
        for (LQ = 0; LQ < oQ.length; LQ++) wQ = oQ[LQ], FQ.indexOf(wQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, wQ) && (qQ[wQ] = QQ[wQ])
      }
      return qQ
    }

    function WQ(QQ, FQ) {
      for (var wQ = 0; wQ < FQ.length; wQ++) {
        var LQ = FQ[wQ];
        LQ.enumerable = LQ.enumerable || !1, LQ.configurable = !0, "value" in LQ && (LQ.writable = !0), Object.defineProperty(QQ, UQ(LQ.key), LQ)
      }
    }

    function RQ(QQ, FQ, wQ) {
      return FQ = sQ(FQ),
        function(QQ, FQ) {
          if (FQ && ("object" === pQ(FQ) || "function" === typeof FQ)) return FQ;
          if (void 0 !== FQ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(QQ) {
            if (void 0 === QQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return QQ
          }(QQ)
        }(QQ, OQ() ? Reflect.construct(FQ, wQ || [], sQ(QQ).constructor) : FQ.apply(QQ, wQ))
    }

    function OQ() {
      try {
        var QQ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (QQ) {}
      return (OQ = function() {
        return !!QQ
      })()
    }

    function sQ(QQ) {
      return sQ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(QQ) {
        return QQ.__proto__ || Object.getPrototypeOf(QQ)
      }, sQ(QQ)
    }

    function rQ(QQ, FQ) {
      return rQ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(QQ, FQ) {
        return QQ.__proto__ = FQ, QQ
      }, rQ(QQ, FQ)
    }

    function IQ(QQ, FQ, wQ) {
      return (FQ = UQ(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }

    function UQ(QQ) {
      var FQ = function(QQ, FQ) {
        if ("object" != pQ(QQ) || !QQ) return QQ;
        var wQ = QQ[Symbol.toPrimitive];
        if (void 0 !== wQ) {
          var LQ = wQ.call(QQ, FQ || "default");
          if ("object" != pQ(LQ)) return LQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === FQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == pQ(FQ) ? FQ : FQ + ""
    }
    var NQ = function(QQ) {
      function FQ(QQ) {
        var wQ;
        return function(QQ, FQ) {
          if (!(QQ instanceof FQ)) throw new TypeError("Cannot call a class as a function")
        }(this, FQ), (wQ = RQ(this, FQ, [QQ])).state = {
          fontSize: "",
          letterSpacing: ""
        }, wQ
      }
      return function(QQ, FQ) {
        if ("function" !== typeof FQ && null !== FQ) throw new TypeError("Super expression must either be null or a function");
        QQ.prototype = Object.create(FQ && FQ.prototype, {
          constructor: {
            value: QQ,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(QQ, "prototype", {
          writable: !1
        }), FQ && rQ(QQ, FQ)
      }(FQ, QQ), wQ = FQ, DQ = [{
        key: "renderTickItem",
        value: function(QQ, FQ, wQ) {
          var qQ = (0, vQ.b)(FQ.className, "recharts-cartesian-axis-tick-value");
          return LQ.isValidElement(QQ) ? LQ.cloneElement(QQ, SQ(SQ({}, FQ), {}, {
            className: qQ
          })) : oQ()(QQ) ? QQ(SQ(SQ({}, FQ), {}, {
            className: qQ
          })) : LQ.createElement(HQ.e, cQ({}, FQ, {
            className: "recharts-cartesian-axis-tick-value"
          }), wQ)
        }
      }], (qQ = [{
        key: "shouldComponentUpdate",
        value: function(QQ, FQ) {
          var wQ = QQ.viewBox,
            LQ = iQ(QQ, eQ),
            qQ = this.props,
            oQ = qQ.viewBox,
            DQ = iQ(qQ, MQ);
          return !(0, mQ.e)(wQ, oQ) || !(0, mQ.e)(LQ, DQ) || !(0, mQ.e)(FQ, this.state)
        }
      }, {
        key: "componentDidMount",
        value: function() {
          var QQ = this.layerReference;
          if (QQ) {
            var FQ = QQ.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
            FQ && this.setState({
              fontSize: window.getComputedStyle(FQ).fontSize,
              letterSpacing: window.getComputedStyle(FQ).letterSpacing
            })
          }
        }
      }, {
        key: "getTickLineCoord",
        value: function(QQ) {
          var FQ, wQ, LQ, qQ, oQ, DQ, kQ = this.props,
            vQ = kQ.x,
            mQ = kQ.y,
            uQ = kQ.width,
            HQ = kQ.height,
            bQ = kQ.orientation,
            xQ = kQ.tickSize,
            AQ = kQ.mirror,
            tQ = kQ.tickMargin,
            eQ = AQ ? -1 : 1,
            MQ = QQ.tickSize || xQ,
            GQ = (0, YQ.t)(QQ.tickCoord) ? QQ.tickCoord : QQ.coordinate;
          switch (bQ) {
            case "top":
              FQ = wQ = QQ.coordinate, DQ = (LQ = (qQ = mQ + +!AQ * HQ) - eQ * MQ) - eQ * tQ, oQ = GQ;
              break;
            case "left":
              LQ = qQ = QQ.coordinate, oQ = (FQ = (wQ = vQ + +!AQ * uQ) - eQ * MQ) - eQ * tQ, DQ = GQ;
              break;
            case "right":
              LQ = qQ = QQ.coordinate, oQ = (FQ = (wQ = vQ + +AQ * uQ) + eQ * MQ) + eQ * tQ, DQ = GQ;
              break;
            default:
              FQ = wQ = QQ.coordinate, DQ = (LQ = (qQ = mQ + +AQ * HQ) + eQ * MQ) + eQ * tQ, oQ = GQ
          }
          return {
            line: {
              x1: FQ,
              y1: LQ,
              x2: wQ,
              y2: qQ
            },
            fH: {
              x: oQ,
              y: DQ
            }
          }
        }
      }, {
        key: "getTickTextAnchor",
        value: function() {
          var QQ, FQ = this.props,
            wQ = FQ.orientation,
            LQ = FQ.mirror;
          switch (wQ) {
            case "left":
              QQ = LQ ? "start" : "end";
              break;
            case "right":
              QQ = LQ ? "end" : "start";
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
            FQ = QQ.orientation,
            wQ = QQ.mirror,
            LQ = "end";
          switch (FQ) {
            case "left":
            case "right":
              LQ = "middle";
              break;
            case "top":
              LQ = wQ ? "start" : "end";
              break;
            default:
              LQ = wQ ? "end" : "start"
          }
          return LQ
        }
      }, {
        key: "renderAxisLine",
        value: function() {
          var QQ = this.props,
            FQ = QQ.x,
            wQ = QQ.y,
            qQ = QQ.width,
            oQ = QQ.height,
            DQ = QQ.orientation,
            mQ = QQ.mirror,
            uQ = QQ.axisLine,
            HQ = SQ(SQ(SQ({}, (0, AQ.e)(this.props, !1)), (0, AQ.e)(uQ, !1)), {}, {
              fill: "none"
            });
          if ("top" === DQ || "bottom" === DQ) {
            var bQ = +("top" === DQ && !mQ || "bottom" === DQ && mQ);
            HQ = SQ(SQ({}, HQ), {}, {
              x1: FQ,
              y1: wQ + bQ * oQ,
              x2: FQ + qQ,
              y2: wQ + bQ * oQ
            })
          } else {
            var YQ = +("left" === DQ && !mQ || "right" === DQ && mQ);
            HQ = SQ(SQ({}, HQ), {}, {
              x1: FQ + YQ * qQ,
              y1: wQ,
              x2: FQ + YQ * qQ,
              y2: wQ + oQ
            })
          }
          return LQ.createElement("line", cQ({}, HQ, {
            className: (0, vQ.b)("recharts-cartesian-axis-line", kQ()(uQ, "className"))
          }))
        }
      }, {
        key: "renderTicks",
        value: function(QQ, wQ, qQ) {
          var DQ = this,
            mQ = this.props,
            HQ = mQ.tickLine,
            bQ = mQ.stroke,
            YQ = mQ.fH,
            eQ = mQ.tickFormatter,
            MQ = mQ.unit,
            GQ = (0, tQ.b)(SQ(SQ({}, this.props), {}, {
              ticks: QQ
            }), wQ, qQ),
            pQ = this.getTickTextAnchor(),
            CQ = this.getTickVerticalAnchor(),
            iQ = (0, AQ.e)(this.props, !1),
            WQ = (0, AQ.e)(YQ, !1),
            RQ = SQ(SQ({}, iQ), {}, {
              fill: "none"
            }, (0, AQ.e)(HQ, !1)),
            OQ = GQ.map((function(QQ, wQ) {
              var qQ = DQ.getTickLineCoord(QQ),
                mQ = qQ.line,
                AQ = qQ.fH,
                tQ = SQ(SQ(SQ(SQ({
                  textAnchor: pQ,
                  verticalAnchor: CQ
                }, iQ), {}, {
                  stroke: "none",
                  fill: bQ
                }, WQ), AQ), {}, {
                  index: wQ,
                  payload: QQ,
                  visibleTicksCount: GQ.length,
                  tickFormatter: eQ
                });
              return LQ.createElement(uQ.e, cQ({
                className: "recharts-cartesian-axis-tick",
                key: "tick-".concat(QQ.value, "-").concat(QQ.coordinate, "-").concat(QQ.tickCoord)
              }, (0, xQ.j)(DQ.props, QQ, wQ)), HQ && LQ.createElement("line", cQ({}, RQ, mQ, {
                className: (0, vQ.b)("recharts-cartesian-axis-tick-line", kQ()(HQ, "className"))
              })), YQ && FQ.renderTickItem(YQ, tQ, "".concat(oQ()(eQ) ? eQ(QQ.value, wQ) : QQ.value).concat(MQ || "")))
            }));
          return LQ.createElement("g", {
            className: "recharts-cartesian-axis-ticks"
          }, OQ)
        }
      }, {
        key: "render",
        value: function() {
          var QQ = this,
            FQ = this.props,
            wQ = FQ.axisLine,
            qQ = FQ.width,
            DQ = FQ.height,
            kQ = FQ.ticksGenerator,
            mQ = FQ.className;
          if (FQ.hide) return null;
          var HQ = this.props,
            YQ = HQ.ticks,
            xQ = iQ(HQ, GQ),
            AQ = YQ;
          return oQ()(kQ) && (AQ = YQ && YQ.length > 0 ? kQ(this.props) : kQ(xQ)), qQ <= 0 || DQ <= 0 || !AQ || !AQ.length ? null : LQ.createElement(uQ.e, {
            className: (0, vQ.b)("recharts-cartesian-axis", mQ),
            ref: function(FQ) {
              QQ.layerReference = FQ
            }
          }, wQ && this.renderAxisLine(), this.renderTicks(AQ, this.state.fontSize, this.state.letterSpacing), bQ.b.renderCallByParent(this.props))
        }
      }]) && WQ(wQ.prototype, qQ), DQ && WQ(wQ, DQ), Object.defineProperty(wQ, "prototype", {
        writable: !1
      }), wQ;
      var wQ, qQ, DQ
    }(LQ.Component);
    IQ(NQ, "displayName", "CartesianAxis"), IQ(NQ, "defaultProps", {
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
      fH: !0,
      mirror: !1,
      minTickGap: 5,
      tickSize: 6,
      tickMargin: 2,
      interval: "preserveEnd"
    })
  },
  6247: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => IQ
    });
    var LQ = wQ(53),
      qQ = wQ(5095),
      oQ = wQ.n(qQ),
      DQ = wQ(5243),
      kQ = wQ(5002),
      vQ = wQ(5252),
      mQ = wQ(5974),
      uQ = wQ(6230),
      HQ = wQ(6222),
      bQ = wQ(6179),
      YQ = ["x1", "y1", "x2", "y2", "key"],
      xQ = ["offset"];

    function AQ(QQ) {
      return AQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, AQ(QQ)
    }

    function tQ(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function eQ(QQ) {
      for (var FQ = 1; FQ < arguments.length; FQ++) {
        var wQ = null != arguments[FQ] ? arguments[FQ] : {};
        FQ % 2 ? tQ(Object(wQ), !0).forEach((function(FQ) {
          MQ(QQ, FQ, wQ[FQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : tQ(Object(wQ)).forEach((function(FQ) {
          Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
        }))
      }
      return QQ
    }

    function MQ(QQ, FQ, wQ) {
      return (FQ = function(QQ) {
        var FQ = function(QQ, FQ) {
          if ("object" != AQ(QQ) || !QQ) return QQ;
          var wQ = QQ[Symbol.toPrimitive];
          if (void 0 !== wQ) {
            var LQ = wQ.call(QQ, FQ || "default");
            if ("object" != AQ(LQ)) return LQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === FQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == AQ(FQ) ? FQ : FQ + ""
      }(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }

    function GQ() {
      return GQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var FQ = 1; FQ < arguments.length; FQ++) {
          var wQ = arguments[FQ];
          for (var LQ in wQ) Object.prototype.hasOwnProperty.call(wQ, LQ) && (QQ[LQ] = wQ[LQ])
        }
        return QQ
      }, GQ.apply(this, arguments)
    }

    function pQ(QQ, FQ) {
      if (null == QQ) return {};
      var wQ, LQ, qQ = function(QQ, FQ) {
        if (null == QQ) return {};
        var wQ = {};
        for (var LQ in QQ)
          if (Object.prototype.hasOwnProperty.call(QQ, LQ)) {
            if (FQ.indexOf(LQ) >= 0) continue;
            wQ[LQ] = QQ[LQ]
          } return wQ
      }(QQ, FQ);
      if (Object.getOwnPropertySymbols) {
        var oQ = Object.getOwnPropertySymbols(QQ);
        for (LQ = 0; LQ < oQ.length; LQ++) wQ = oQ[LQ], FQ.indexOf(wQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, wQ) && (qQ[wQ] = QQ[wQ])
      }
      return qQ
    }
    var cQ = function(QQ) {
      var FQ = QQ.fill;
      if (!FQ || "none" === FQ) return null;
      var wQ = QQ.fillOpacity,
        qQ = QQ.x,
        oQ = QQ.y,
        DQ = QQ.width,
        kQ = QQ.height,
        vQ = QQ.ry;
      return LQ.createElement("rect", {
        x: qQ,
        y: oQ,
        ry: vQ,
        width: DQ,
        height: kQ,
        stroke: "none",
        fill: FQ,
        fillOpacity: wQ,
        className: "recharts-cartesian-grid-bg"
      })
    };

    function CQ(QQ, FQ) {
      var wQ;
      if (LQ.isValidElement(QQ)) wQ = LQ.cloneElement(QQ, FQ);
      else if (oQ()(QQ)) wQ = QQ(FQ);
      else {
        var qQ = FQ.x1,
          DQ = FQ.y1,
          kQ = FQ.x2,
          mQ = FQ.y2,
          uQ = FQ.key,
          HQ = pQ(FQ, YQ),
          bQ = (0, vQ.e)(HQ, !1),
          AQ = (bQ.offset, pQ(bQ, xQ));
        wQ = LQ.createElement("line", GQ({}, AQ, {
          x1: qQ,
          y1: DQ,
          x2: kQ,
          y2: mQ,
          fill: "none",
          key: uQ
        }))
      }
      return wQ
    }

    function SQ(QQ) {
      var FQ = QQ.x,
        wQ = QQ.width,
        qQ = QQ.horizontal,
        oQ = void 0 === qQ || qQ,
        DQ = QQ.horizontalPoints;
      if (!oQ || !DQ || !DQ.length) return null;
      var kQ = DQ.map((function(LQ, qQ) {
        var DQ = eQ(eQ({}, QQ), {}, {
          x1: FQ,
          y1: LQ,
          x2: FQ + wQ,
          y2: LQ,
          key: "line-".concat(qQ),
          index: qQ
        });
        return CQ(oQ, DQ)
      }));
      return LQ.createElement("g", {
        className: "recharts-cartesian-grid-horizontal"
      }, kQ)
    }

    function iQ(QQ) {
      var FQ = QQ.y,
        wQ = QQ.height,
        qQ = QQ.vertical,
        oQ = void 0 === qQ || qQ,
        DQ = QQ.verticalPoints;
      if (!oQ || !DQ || !DQ.length) return null;
      var kQ = DQ.map((function(LQ, qQ) {
        var DQ = eQ(eQ({}, QQ), {}, {
          x1: LQ,
          y1: FQ,
          x2: LQ,
          y2: FQ + wQ,
          key: "line-".concat(qQ),
          index: qQ
        });
        return CQ(oQ, DQ)
      }));
      return LQ.createElement("g", {
        className: "recharts-cartesian-grid-vertical"
      }, kQ)
    }

    function WQ(QQ) {
      var FQ = QQ.horizontalFill,
        wQ = QQ.fillOpacity,
        qQ = QQ.x,
        oQ = QQ.y,
        DQ = QQ.width,
        kQ = QQ.height,
        vQ = QQ.horizontalPoints,
        mQ = QQ.horizontal;
      if (!(void 0 === mQ || mQ) || !FQ || !FQ.length) return null;
      var uQ = vQ.map((function(QQ) {
        return Math.round(QQ + oQ - oQ)
      })).sort((function(QQ, FQ) {
        return QQ - FQ
      }));
      oQ !== uQ[0] && uQ.unshift(0);
      var HQ = uQ.map((function(QQ, vQ) {
        var mQ = !uQ[vQ + 1] ? oQ + kQ - QQ : uQ[vQ + 1] - QQ;
        if (mQ <= 0) return null;
        var HQ = vQ % FQ.length;
        return LQ.createElement("rect", {
          key: "react-".concat(vQ),
          y: QQ,
          x: qQ,
          height: mQ,
          width: DQ,
          stroke: "none",
          fill: FQ[HQ],
          fillOpacity: wQ,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return LQ.createElement("g", {
        className: "recharts-cartesian-gridstripes-horizontal"
      }, HQ)
    }

    function RQ(QQ) {
      var FQ = QQ.vertical,
        wQ = void 0 === FQ || FQ,
        qQ = QQ.verticalFill,
        oQ = QQ.fillOpacity,
        DQ = QQ.x,
        kQ = QQ.y,
        vQ = QQ.width,
        mQ = QQ.height,
        uQ = QQ.verticalPoints;
      if (!wQ || !qQ || !qQ.length) return null;
      var HQ = uQ.map((function(QQ) {
        return Math.round(QQ + DQ - DQ)
      })).sort((function(QQ, FQ) {
        return QQ - FQ
      }));
      DQ !== HQ[0] && HQ.unshift(0);
      var bQ = HQ.map((function(QQ, FQ) {
        var wQ = !HQ[FQ + 1] ? DQ + vQ - QQ : HQ[FQ + 1] - QQ;
        if (wQ <= 0) return null;
        var uQ = FQ % qQ.length;
        return LQ.createElement("rect", {
          key: "react-".concat(FQ),
          x: QQ,
          y: kQ,
          width: wQ,
          height: mQ,
          stroke: "none",
          fill: qQ[uQ],
          fillOpacity: oQ,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return LQ.createElement("g", {
        className: "recharts-cartesian-gridstripes-vertical"
      }, bQ)
    }
    var OQ = function(QQ, FQ) {
        var wQ = QQ.xAxis,
          LQ = QQ.width,
          qQ = QQ.height,
          oQ = QQ.offset;
        return (0, mQ.D)((0, uQ.b)(eQ(eQ(eQ({}, HQ.e.defaultProps), wQ), {}, {
          ticks: (0, mQ.U)(wQ, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: LQ,
            height: qQ
          }
        })), oQ.left, oQ.left + oQ.width, FQ)
      },
      sQ = function(QQ, FQ) {
        var wQ = QQ.yAxis,
          LQ = QQ.width,
          qQ = QQ.height,
          oQ = QQ.offset;
        return (0, mQ.D)((0, uQ.b)(eQ(eQ(eQ({}, HQ.e.defaultProps), wQ), {}, {
          ticks: (0, mQ.U)(wQ, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: LQ,
            height: qQ
          }
        })), oQ.top, oQ.top + oQ.height, FQ)
      },
      rQ = {
        horizontal: !0,
        vertical: !0,
        horizontalPoints: [],
        verticalPoints: [],
        stroke: "#ccc",
        fill: "none",
        verticalFill: [],
        horizontalFill: []
      };

    function IQ(QQ) {
      var FQ, wQ, qQ, vQ, mQ, uQ, HQ = (0, bQ.k)(),
        YQ = (0, bQ.j)(),
        xQ = (0, bQ.o)(),
        tQ = eQ(eQ({}, QQ), {}, {
          stroke: null !== (FQ = QQ.stroke) && void 0 !== FQ ? FQ : rQ.stroke,
          fill: null !== (wQ = QQ.fill) && void 0 !== wQ ? wQ : rQ.fill,
          horizontal: null !== (qQ = QQ.horizontal) && void 0 !== qQ ? qQ : rQ.horizontal,
          horizontalFill: null !== (vQ = QQ.horizontalFill) && void 0 !== vQ ? vQ : rQ.horizontalFill,
          vertical: null !== (mQ = QQ.vertical) && void 0 !== mQ ? mQ : rQ.vertical,
          verticalFill: null !== (uQ = QQ.verticalFill) && void 0 !== uQ ? uQ : rQ.verticalFill,
          x: (0, kQ.t)(QQ.x) ? QQ.x : xQ.left,
          y: (0, kQ.t)(QQ.y) ? QQ.y : xQ.top,
          width: (0, kQ.t)(QQ.width) ? QQ.width : xQ.width,
          height: (0, kQ.t)(QQ.height) ? QQ.height : xQ.height
        }),
        MQ = tQ.x,
        pQ = tQ.y,
        CQ = tQ.width,
        IQ = tQ.height,
        UQ = tQ.syncWithTicks,
        NQ = tQ.horizontalValues,
        TQ = tQ.verticalValues,
        KQ = (0, bQ.f)(),
        zQ = (0, bQ.w)();
      if (!(0, kQ.t)(CQ) || CQ <= 0 || !(0, kQ.t)(IQ) || IQ <= 0 || !(0, kQ.t)(MQ) || MQ !== +MQ || !(0, kQ.t)(pQ) || pQ !== +pQ) return null;
      var lQ = tQ.verticalCoordinatesGenerator || OQ,
        jQ = tQ.horizontalCoordinatesGenerator || sQ,
        aQ = tQ.horizontalPoints,
        XQ = tQ.verticalPoints;
      if ((!aQ || !aQ.length) && oQ()(jQ)) {
        var fQ = NQ && NQ.length,
          VQ = jQ({
            yAxis: zQ ? eQ(eQ({}, zQ), {}, {
              ticks: fQ ? NQ : zQ.ticks
            }) : void 0,
            width: HQ,
            height: YQ,
            offset: xQ
          }, !!fQ || UQ);
        (0, DQ.c)(Array.isArray(VQ), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(AQ(VQ), "]")), Array.isArray(VQ) && (aQ = VQ)
      }
      if ((!XQ || !XQ.length) && oQ()(lQ)) {
        var hQ = TQ && TQ.length,
          JQ = lQ({
            xAxis: KQ ? eQ(eQ({}, KQ), {}, {
              ticks: hQ ? TQ : KQ.ticks
            }) : void 0,
            width: HQ,
            height: YQ,
            offset: xQ
          }, !!hQ || UQ);
        (0, DQ.c)(Array.isArray(JQ), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(AQ(JQ), "]")), Array.isArray(JQ) && (XQ = JQ)
      }
      return LQ.createElement("g", {
        className: "recharts-cartesian-grid"
      }, LQ.createElement(cQ, {
        fill: tQ.fill,
        fillOpacity: tQ.fillOpacity,
        x: tQ.x,
        y: tQ.y,
        width: tQ.width,
        height: tQ.height,
        ry: tQ.ry
      }), LQ.createElement(SQ, GQ({}, tQ, {
        offset: xQ,
        horizontalPoints: aQ,
        xAxis: KQ,
        yAxis: zQ
      })), LQ.createElement(iQ, GQ({}, tQ, {
        offset: xQ,
        verticalPoints: XQ,
        xAxis: KQ,
        yAxis: zQ
      })), LQ.createElement(WQ, GQ({}, tQ, {
        horizontalPoints: aQ
      })), LQ.createElement(RQ, GQ({}, tQ, {
        verticalPoints: XQ
      })))
    }
    IQ.displayName = "CartesianGrid"
  },
  6041: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => pQ
    });
    var LQ = wQ(53),
      qQ = wQ(5787),
      oQ = wQ(5800),
      DQ = wQ(5252),
      kQ = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];

    function vQ(QQ) {
      return vQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, vQ(QQ)
    }

    function mQ() {
      return mQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var FQ = 1; FQ < arguments.length; FQ++) {
          var wQ = arguments[FQ];
          for (var LQ in wQ) Object.prototype.hasOwnProperty.call(wQ, LQ) && (QQ[LQ] = wQ[LQ])
        }
        return QQ
      }, mQ.apply(this, arguments)
    }

    function uQ(QQ, FQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return QQ
      }(QQ) || function(QQ, FQ) {
        var wQ = null == QQ ? null : "undefined" != typeof Symbol && QQ[Symbol.iterator] || QQ["@@iterator"];
        if (null != wQ) {
          var LQ, qQ, oQ, DQ, kQ = [],
            vQ = !0,
            mQ = !1;
          try {
            if (oQ = (wQ = wQ.call(QQ)).next, 0 === FQ) {
              if (Object(wQ) !== wQ) return;
              vQ = !1
            } else
              for (; !(vQ = (LQ = oQ.call(wQ)).done) && (kQ.push(LQ.value), kQ.length !== FQ); vQ = !0);
          } catch (QQ) {
            mQ = !0, qQ = QQ
          } finally {
            try {
              if (!vQ && null != wQ.return && (DQ = wQ.return(), Object(DQ) !== DQ)) return
            } finally {
              if (mQ) throw qQ
            }
          }
          return kQ
        }
      }(QQ, FQ) || function(QQ, FQ) {
        if (!QQ) return;
        if ("string" === typeof QQ) return HQ(QQ, FQ);
        var wQ = Object.prototype.toString.call(QQ).slice(8, -1);
        "Object" === wQ && QQ.constructor && (wQ = QQ.constructor.name);
        if ("Map" === wQ || "Set" === wQ) return Array.from(QQ);
        if ("Arguments" === wQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wQ)) return HQ(QQ, FQ)
      }(QQ, FQ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function HQ(QQ, FQ) {
      (null == FQ || FQ > QQ.length) && (FQ = QQ.length);
      for (var wQ = 0, LQ = new Array(FQ); wQ < FQ; wQ++) LQ[wQ] = QQ[wQ];
      return LQ
    }

    function bQ(QQ, FQ) {
      if (null == QQ) return {};
      var wQ, LQ, qQ = function(QQ, FQ) {
        if (null == QQ) return {};
        var wQ = {};
        for (var LQ in QQ)
          if (Object.prototype.hasOwnProperty.call(QQ, LQ)) {
            if (FQ.indexOf(LQ) >= 0) continue;
            wQ[LQ] = QQ[LQ]
          } return wQ
      }(QQ, FQ);
      if (Object.getOwnPropertySymbols) {
        var oQ = Object.getOwnPropertySymbols(QQ);
        for (LQ = 0; LQ < oQ.length; LQ++) wQ = oQ[LQ], FQ.indexOf(wQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, wQ) && (qQ[wQ] = QQ[wQ])
      }
      return qQ
    }

    function YQ(QQ, FQ) {
      for (var wQ = 0; wQ < FQ.length; wQ++) {
        var LQ = FQ[wQ];
        LQ.enumerable = LQ.enumerable || !1, LQ.configurable = !0, "value" in LQ && (LQ.writable = !0), Object.defineProperty(QQ, GQ(LQ.key), LQ)
      }
    }

    function xQ(QQ, FQ, wQ) {
      return FQ = tQ(FQ),
        function(QQ, FQ) {
          if (FQ && ("object" === vQ(FQ) || "function" === typeof FQ)) return FQ;
          if (void 0 !== FQ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(QQ) {
            if (void 0 === QQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return QQ
          }(QQ)
        }(QQ, AQ() ? Reflect.construct(FQ, wQ || [], tQ(QQ).constructor) : FQ.apply(QQ, wQ))
    }

    function AQ() {
      try {
        var QQ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (QQ) {}
      return (AQ = function() {
        return !!QQ
      })()
    }

    function tQ(QQ) {
      return tQ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(QQ) {
        return QQ.__proto__ || Object.getPrototypeOf(QQ)
      }, tQ(QQ)
    }

    function eQ(QQ, FQ) {
      return eQ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(QQ, FQ) {
        return QQ.__proto__ = FQ, QQ
      }, eQ(QQ, FQ)
    }

    function MQ(QQ, FQ, wQ) {
      return (FQ = GQ(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }

    function GQ(QQ) {
      var FQ = function(QQ, FQ) {
        if ("object" != vQ(QQ) || !QQ) return QQ;
        var wQ = QQ[Symbol.toPrimitive];
        if (void 0 !== wQ) {
          var LQ = wQ.call(QQ, FQ || "default");
          if ("object" != vQ(LQ)) return LQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === FQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == vQ(FQ) ? FQ : FQ + ""
    }
    var pQ = function(QQ) {
      function FQ() {
        return function(QQ, FQ) {
          if (!(QQ instanceof FQ)) throw new TypeError("Cannot call a class as a function")
        }(this, FQ), xQ(this, FQ, arguments)
      }
      return function(QQ, FQ) {
        if ("function" !== typeof FQ && null !== FQ) throw new TypeError("Super expression must either be null or a function");
        QQ.prototype = Object.create(FQ && FQ.prototype, {
          constructor: {
            value: QQ,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(QQ, "prototype", {
          writable: !1
        }), FQ && eQ(QQ, FQ)
      }(FQ, QQ), wQ = FQ, (vQ = [{
        key: "render",
        value: function() {
          var QQ = this.props,
            FQ = QQ.offset,
            wQ = QQ.layout,
            vQ = QQ.width,
            HQ = QQ.dataKey,
            YQ = QQ.data,
            xQ = QQ.dataPointFormatter,
            AQ = QQ.xAxis,
            tQ = QQ.yAxis,
            eQ = bQ(QQ, kQ),
            MQ = (0, DQ.e)(eQ, !1);
          "x" === this.props.direction && "number" !== AQ.type && (0, qQ.d)(!1);
          var GQ = YQ.map((function(QQ) {
            var qQ = xQ(QQ, HQ),
              DQ = qQ.x,
              kQ = qQ.y,
              bQ = qQ.value,
              YQ = qQ.errorVal;
            if (!YQ) return null;
            var eQ, GQ, pQ = [];
            if (Array.isArray(YQ)) {
              var cQ = uQ(YQ, 2);
              eQ = cQ[0], GQ = cQ[1]
            } else eQ = GQ = YQ;
            if ("vertical" === wQ) {
              var CQ = AQ.scale,
                SQ = kQ + FQ,
                iQ = SQ + vQ,
                WQ = SQ - vQ,
                RQ = CQ(bQ - eQ),
                OQ = CQ(bQ + GQ);
              pQ.push({
                x1: OQ,
                y1: iQ,
                x2: OQ,
                y2: WQ
              }), pQ.push({
                x1: RQ,
                y1: SQ,
                x2: OQ,
                y2: SQ
              }), pQ.push({
                x1: RQ,
                y1: iQ,
                x2: RQ,
                y2: WQ
              })
            } else if ("horizontal" === wQ) {
              var sQ = tQ.scale,
                rQ = DQ + FQ,
                IQ = rQ - vQ,
                UQ = rQ + vQ,
                NQ = sQ(bQ - eQ),
                TQ = sQ(bQ + GQ);
              pQ.push({
                x1: IQ,
                y1: TQ,
                x2: UQ,
                y2: TQ
              }), pQ.push({
                x1: rQ,
                y1: NQ,
                x2: rQ,
                y2: TQ
              }), pQ.push({
                x1: IQ,
                y1: NQ,
                x2: UQ,
                y2: NQ
              })
            }
            return LQ.createElement(oQ.e, mQ({
              className: "recharts-errorBar",
              key: "bar-".concat(pQ.map((function(QQ) {
                return "".concat(QQ.x1, "-").concat(QQ.x2, "-").concat(QQ.y1, "-").concat(QQ.y2)
              })))
            }, MQ), pQ.map((function(QQ) {
              return LQ.createElement("line", mQ({}, QQ, {
                key: "line-".concat(QQ.x1, "-").concat(QQ.x2, "-").concat(QQ.y1, "-").concat(QQ.y2)
              }))
            })))
          }));
          return LQ.createElement(oQ.e, {
            className: "recharts-errorBars"
          }, GQ)
        }
      }]) && YQ(wQ.prototype, vQ), HQ && YQ(wQ, HQ), Object.defineProperty(wQ, "prototype", {
        writable: !1
      }), wQ;
      var wQ, vQ, HQ
    }(LQ.Component);
    MQ(pQ, "defaultProps", {
      stroke: "black",
      strokeWidth: 1.5,
      width: 5,
      offset: 0,
      layout: "horizontal"
    }), MQ(pQ, "displayName", "ErrorBar")
  },
  6212: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => jQ
    });
    var LQ = wQ(53),
      qQ = wQ(5960),
      oQ = wQ(5095),
      DQ = wQ.n(oQ),
      kQ = wQ(5240),
      vQ = wQ.n(kQ),
      mQ = wQ(6036),
      uQ = wQ.n(mQ),
      HQ = wQ(4909),
      bQ = wQ(6200),
      YQ = wQ(5954),
      xQ = wQ(5800),
      AQ = wQ(6118),
      tQ = wQ(6041),
      eQ = wQ(5002),
      MQ = wQ(5252),
      GQ = wQ(5812),
      pQ = wQ(5974),
      cQ = ["type", "layout", "connectNulls", "ref"],
      CQ = ["key"];

    function SQ(QQ) {
      return SQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, SQ(QQ)
    }

    function iQ(QQ, FQ) {
      if (null == QQ) return {};
      var wQ, LQ, qQ = function(QQ, FQ) {
        if (null == QQ) return {};
        var wQ = {};
        for (var LQ in QQ)
          if (Object.prototype.hasOwnProperty.call(QQ, LQ)) {
            if (FQ.indexOf(LQ) >= 0) continue;
            wQ[LQ] = QQ[LQ]
          } return wQ
      }(QQ, FQ);
      if (Object.getOwnPropertySymbols) {
        var oQ = Object.getOwnPropertySymbols(QQ);
        for (LQ = 0; LQ < oQ.length; LQ++) wQ = oQ[LQ], FQ.indexOf(wQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, wQ) && (qQ[wQ] = QQ[wQ])
      }
      return qQ
    }

    function WQ() {
      return WQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var FQ = 1; FQ < arguments.length; FQ++) {
          var wQ = arguments[FQ];
          for (var LQ in wQ) Object.prototype.hasOwnProperty.call(wQ, LQ) && (QQ[LQ] = wQ[LQ])
        }
        return QQ
      }, WQ.apply(this, arguments)
    }

    function RQ(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function OQ(QQ) {
      for (var FQ = 1; FQ < arguments.length; FQ++) {
        var wQ = null != arguments[FQ] ? arguments[FQ] : {};
        FQ % 2 ? RQ(Object(wQ), !0).forEach((function(FQ) {
          zQ(QQ, FQ, wQ[FQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : RQ(Object(wQ)).forEach((function(FQ) {
          Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
        }))
      }
      return QQ
    }

    function sQ(QQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return rQ(QQ)
      }(QQ) || function(QQ) {
        if ("undefined" !== typeof Symbol && null != QQ[Symbol.iterator] || null != QQ["@@iterator"]) return Array.from(QQ)
      }(QQ) || function(QQ, FQ) {
        if (!QQ) return;
        if ("string" === typeof QQ) return rQ(QQ, FQ);
        var wQ = Object.prototype.toString.call(QQ).slice(8, -1);
        "Object" === wQ && QQ.constructor && (wQ = QQ.constructor.name);
        if ("Map" === wQ || "Set" === wQ) return Array.from(QQ);
        if ("Arguments" === wQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wQ)) return rQ(QQ, FQ)
      }(QQ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function rQ(QQ, FQ) {
      (null == FQ || FQ > QQ.length) && (FQ = QQ.length);
      for (var wQ = 0, LQ = new Array(FQ); wQ < FQ; wQ++) LQ[wQ] = QQ[wQ];
      return LQ
    }

    function IQ(QQ, FQ) {
      for (var wQ = 0; wQ < FQ.length; wQ++) {
        var LQ = FQ[wQ];
        LQ.enumerable = LQ.enumerable || !1, LQ.configurable = !0, "value" in LQ && (LQ.writable = !0), Object.defineProperty(QQ, lQ(LQ.key), LQ)
      }
    }

    function UQ(QQ, FQ, wQ) {
      return FQ = TQ(FQ),
        function(QQ, FQ) {
          if (FQ && ("object" === SQ(FQ) || "function" === typeof FQ)) return FQ;
          if (void 0 !== FQ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(QQ) {
            if (void 0 === QQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return QQ
          }(QQ)
        }(QQ, NQ() ? Reflect.construct(FQ, wQ || [], TQ(QQ).constructor) : FQ.apply(QQ, wQ))
    }

    function NQ() {
      try {
        var QQ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (QQ) {}
      return (NQ = function() {
        return !!QQ
      })()
    }

    function TQ(QQ) {
      return TQ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(QQ) {
        return QQ.__proto__ || Object.getPrototypeOf(QQ)
      }, TQ(QQ)
    }

    function KQ(QQ, FQ) {
      return KQ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(QQ, FQ) {
        return QQ.__proto__ = FQ, QQ
      }, KQ(QQ, FQ)
    }

    function zQ(QQ, FQ, wQ) {
      return (FQ = lQ(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }

    function lQ(QQ) {
      var FQ = function(QQ, FQ) {
        if ("object" != SQ(QQ) || !QQ) return QQ;
        var wQ = QQ[Symbol.toPrimitive];
        if (void 0 !== wQ) {
          var LQ = wQ.call(QQ, FQ || "default");
          if ("object" != SQ(LQ)) return LQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === FQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == SQ(FQ) ? FQ : FQ + ""
    }
    var jQ = function(QQ) {
      function FQ() {
        var QQ;
        ! function(QQ, FQ) {
          if (!(QQ instanceof FQ)) throw new TypeError("Cannot call a class as a function")
        }(this, FQ);
        for (var wQ = arguments.length, LQ = new Array(wQ), qQ = 0; qQ < wQ; qQ++) LQ[qQ] = arguments[qQ];
        return zQ(QQ = UQ(this, FQ, [].concat(LQ)), "state", {
          isAnimationFinished: !0,
          totalLength: 0
        }), zQ(QQ, "generateSimpleStrokeDasharray", (function(QQ, FQ) {
          return "".concat(FQ, "px ").concat(QQ - FQ, "px")
        })), zQ(QQ, "getStrokeDasharray", (function(wQ, LQ, qQ) {
          var oQ = qQ.reduce((function(QQ, FQ) {
            return QQ + FQ
          }));
          if (!oQ) return QQ.generateSimpleStrokeDasharray(LQ, wQ);
          for (var DQ = Math.floor(wQ / oQ), kQ = wQ % oQ, vQ = LQ - wQ, mQ = [], uQ = 0, HQ = 0; uQ < qQ.length; HQ += qQ[uQ], ++uQ)
            if (HQ + qQ[uQ] > kQ) {
              mQ = [].concat(sQ(qQ.slice(0, uQ)), [kQ - HQ]);
              break
            } var bQ = mQ.length % 2 === 0 ? [0, vQ] : [vQ];
          return [].concat(sQ(FQ.repeat(qQ, DQ)), sQ(mQ), bQ).map((function(QQ) {
            return "".concat(QQ, "px")
          })).join(", ")
        })), zQ(QQ, "id", (0, eQ.C)("recharts-line-")), zQ(QQ, "pathRef", (function(FQ) {
          QQ.mainCurve = FQ
        })), zQ(QQ, "handleAnimationEnd", (function() {
          QQ.setState({
            isAnimationFinished: !0
          }), QQ.props.onAnimationEnd && QQ.props.onAnimationEnd()
        })), zQ(QQ, "handleAnimationStart", (function() {
          QQ.setState({
            isAnimationFinished: !1
          }), QQ.props.onAnimationStart && QQ.props.onAnimationStart()
        })), QQ
      }
      return function(QQ, FQ) {
        if ("function" !== typeof FQ && null !== FQ) throw new TypeError("Super expression must either be null or a function");
        QQ.prototype = Object.create(FQ && FQ.prototype, {
          constructor: {
            value: QQ,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(QQ, "prototype", {
          writable: !1
        }), FQ && KQ(QQ, FQ)
      }(FQ, QQ), wQ = FQ, oQ = [{
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
          } catch (FQ) {
            return 0
          }
        }
      }, {
        key: "renderErrorBar",
        value: function(QQ, FQ) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var wQ = this.props,
            qQ = wQ.points,
            oQ = wQ.xAxis,
            DQ = wQ.yAxis,
            kQ = wQ.layout,
            vQ = wQ.children,
            mQ = (0, MQ.i)(vQ, tQ.d);
          if (!mQ) return null;
          var uQ = function(QQ, FQ) {
              return {
                x: QQ.x,
                y: QQ.y,
                value: QQ.value,
                errorVal: (0, pQ.$)(QQ.payload, FQ)
              }
            },
            HQ = {
              clipPath: QQ ? "url(#clipPath-".concat(FQ, ")") : null
            };
          return LQ.createElement(xQ.e, HQ, mQ.map((function(QQ) {
            return LQ.cloneElement(QQ, {
              key: "bar-".concat(QQ.props.dataKey),
              data: qQ,
              xAxis: oQ,
              yAxis: DQ,
              layout: kQ,
              dataPointFormatter: uQ
            })
          })))
        }
      }, {
        key: "renderDots",
        value: function(QQ, wQ, qQ) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var oQ = this.props,
            DQ = oQ.dot,
            kQ = oQ.points,
            vQ = oQ.dataKey,
            mQ = (0, MQ.e)(this.props, !1),
            uQ = (0, MQ.e)(DQ, !0),
            HQ = kQ.map((function(QQ, wQ) {
              var LQ = OQ(OQ(OQ({
                key: "dot-".concat(wQ),
                r: 3
              }, mQ), uQ), {}, {
                index: wQ,
                cx: QQ.x,
                cy: QQ.y,
                value: QQ.value,
                dataKey: vQ,
                payload: QQ.payload,
                points: kQ
              });
              return FQ.renderDotItem(DQ, LQ)
            })),
            bQ = {
              clipPath: QQ ? "url(#clipPath-".concat(wQ ? "" : "dots-").concat(qQ, ")") : null
            };
          return LQ.createElement(xQ.e, WQ({
            className: "recharts-line-dots",
            key: "dots"
          }, bQ), HQ)
        }
      }, {
        key: "renderCurveStatically",
        value: function(QQ, FQ, wQ, qQ) {
          var oQ = this.props,
            DQ = oQ.type,
            kQ = oQ.layout,
            vQ = oQ.connectNulls,
            mQ = (oQ.ref, iQ(oQ, cQ)),
            uQ = OQ(OQ(OQ({}, (0, MQ.e)(mQ, !0)), {}, {
              fill: "none",
              className: "recharts-line-curve",
              clipPath: FQ ? "url(#clipPath-".concat(wQ, ")") : null,
              points: QQ
            }, qQ), {}, {
              type: DQ,
              layout: kQ,
              connectNulls: vQ
            });
          return LQ.createElement(bQ.c, WQ({}, uQ, {
            pathRef: this.pathRef
          }))
        }
      }, {
        key: "renderCurveWithAnimation",
        value: function(QQ, FQ) {
          var wQ = this,
            oQ = this.props,
            DQ = oQ.points,
            kQ = oQ.strokeDasharray,
            vQ = oQ.isAnimationActive,
            mQ = oQ.animationBegin,
            uQ = oQ.animationDuration,
            HQ = oQ.animationEasing,
            bQ = oQ.animationId,
            YQ = oQ.animateNewValues,
            xQ = oQ.width,
            AQ = oQ.height,
            tQ = this.state,
            MQ = tQ.prevPoints,
            GQ = tQ.totalLength;
          return LQ.createElement(qQ.b, {
            mY: mQ,
            duration: uQ,
            isActive: vQ,
            easing: HQ,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "line-".concat(bQ),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(LQ) {
            var qQ = LQ.t;
            if (MQ) {
              var oQ = MQ.length / DQ.length,
                vQ = DQ.map((function(QQ, FQ) {
                  var wQ = Math.floor(FQ * oQ);
                  if (MQ[wQ]) {
                    var LQ = MQ[wQ],
                      DQ = (0, eQ.o)(LQ.x, QQ.x),
                      kQ = (0, eQ.o)(LQ.y, QQ.y);
                    return OQ(OQ({}, QQ), {}, {
                      x: DQ(qQ),
                      y: kQ(qQ)
                    })
                  }
                  if (YQ) {
                    var vQ = (0, eQ.o)(2 * xQ, QQ.x),
                      mQ = (0, eQ.o)(AQ / 2, QQ.y);
                    return OQ(OQ({}, QQ), {}, {
                      x: vQ(qQ),
                      y: mQ(qQ)
                    })
                  }
                  return OQ(OQ({}, QQ), {}, {
                    x: QQ.x,
                    y: QQ.y
                  })
                }));
              return wQ.renderCurveStatically(vQ, QQ, FQ)
            }
            var mQ, uQ = (0, eQ.o)(0, GQ)(qQ);
            if (kQ) {
              var HQ = "".concat(kQ).split(/[,\s]+/gim).map((function(QQ) {
                return parseFloat(QQ)
              }));
              mQ = wQ.getStrokeDasharray(uQ, GQ, HQ)
            } else mQ = wQ.generateSimpleStrokeDasharray(GQ, uQ);
            return wQ.renderCurveStatically(DQ, QQ, FQ, {
              strokeDasharray: mQ
            })
          }))
        }
      }, {
        key: "renderCurve",
        value: function(QQ, FQ) {
          var wQ = this.props,
            LQ = wQ.points,
            qQ = wQ.isAnimationActive,
            oQ = this.state,
            DQ = oQ.prevPoints,
            kQ = oQ.totalLength;
          return qQ && LQ && LQ.length && (!DQ && kQ > 0 || !uQ()(DQ, LQ)) ? this.renderCurveWithAnimation(QQ, FQ) : this.renderCurveStatically(LQ, QQ, FQ)
        }
      }, {
        key: "render",
        value: function() {
          var QQ, FQ = this.props,
            wQ = FQ.hide,
            qQ = FQ.dot,
            oQ = FQ.points,
            DQ = FQ.className,
            kQ = FQ.xAxis,
            mQ = FQ.yAxis,
            uQ = FQ.top,
            bQ = FQ.left,
            YQ = FQ.width,
            tQ = FQ.height,
            eQ = FQ.isAnimationActive,
            GQ = FQ.id;
          if (wQ || !oQ || !oQ.length) return null;
          var pQ = this.state.isAnimationFinished,
            cQ = 1 === oQ.length,
            CQ = (0, HQ.b)("recharts-line", DQ),
            SQ = kQ && kQ.allowDataOverflow,
            iQ = mQ && mQ.allowDataOverflow,
            WQ = SQ || iQ,
            RQ = vQ()(GQ) ? this.id : GQ,
            OQ = null !== (QQ = (0, MQ.e)(qQ, !1)) && void 0 !== QQ ? QQ : {
              r: 3,
              strokeWidth: 2
            },
            sQ = OQ.r,
            rQ = void 0 === sQ ? 3 : sQ,
            IQ = OQ.strokeWidth,
            UQ = void 0 === IQ ? 2 : IQ,
            NQ = ((0, MQ.x)(qQ) ? qQ : {}).clipDot,
            TQ = void 0 === NQ || NQ,
            KQ = 2 * rQ + UQ;
          return LQ.createElement(xQ.e, {
            className: CQ
          }, SQ || iQ ? LQ.createElement("defs", null, LQ.createElement("clipPath", {
            id: "clipPath-".concat(RQ)
          }, LQ.createElement("rect", {
            x: SQ ? bQ : bQ - YQ / 2,
            y: iQ ? uQ : uQ - tQ / 2,
            width: SQ ? YQ : 2 * YQ,
            height: iQ ? tQ : 2 * tQ
          })), !TQ && LQ.createElement("clipPath", {
            id: "clipPath-dots-".concat(RQ)
          }, LQ.createElement("rect", {
            x: bQ - KQ / 2,
            y: uQ - KQ / 2,
            width: YQ + KQ,
            height: tQ + KQ
          }))) : null, !cQ && this.renderCurve(WQ, RQ), this.renderErrorBar(WQ, RQ), (cQ || qQ) && this.renderDots(WQ, TQ, RQ), (!eQ || pQ) && AQ.d.renderCallByParent(this.props, oQ))
        }
      }], kQ = [{
        key: "getDerivedStateFromProps",
        value: function(QQ, FQ) {
          return QQ.animationId !== FQ.prevAnimationId ? {
            prevAnimationId: QQ.animationId,
            curPoints: QQ.points,
            prevPoints: FQ.curPoints
          } : QQ.points !== FQ.curPoints ? {
            curPoints: QQ.points
          } : null
        }
      }, {
        key: "repeat",
        value: function(QQ, FQ) {
          for (var wQ = QQ.length % 2 !== 0 ? [].concat(sQ(QQ), [0]) : QQ, LQ = [], qQ = 0; qQ < FQ; ++qQ) LQ = [].concat(sQ(LQ), sQ(wQ));
          return LQ
        }
      }, {
        key: "renderDotItem",
        value: function(QQ, FQ) {
          var wQ;
          if (LQ.isValidElement(QQ)) wQ = LQ.cloneElement(QQ, FQ);
          else if (DQ()(QQ)) wQ = QQ(FQ);
          else {
            var qQ = FQ.key,
              oQ = iQ(FQ, CQ),
              kQ = (0, HQ.b)("recharts-line-dot", "boolean" !== typeof QQ ? QQ.className : "");
            wQ = LQ.createElement(YQ.d, WQ({
              key: qQ
            }, oQ, {
              className: kQ
            }))
          }
          return wQ
        }
      }], oQ && IQ(wQ.prototype, oQ), kQ && IQ(wQ, kQ), Object.defineProperty(wQ, "prototype", {
        writable: !1
      }), wQ;
      var wQ, oQ, kQ
    }(LQ.PureComponent);
    zQ(jQ, "displayName", "Line"), zQ(jQ, "defaultProps", {
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
      isAnimationActive: !GQ.d.isSsr,
      animateNewValues: !0,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease",
      hide: !1,
      label: !1
    }), zQ(jQ, "getComposedData", (function(QQ) {
      var FQ = QQ.props,
        wQ = QQ.xAxis,
        LQ = QQ.yAxis,
        qQ = QQ.xAxisTicks,
        oQ = QQ.yAxisTicks,
        DQ = QQ.dataKey,
        kQ = QQ.bandSize,
        mQ = QQ.displayedData,
        uQ = QQ.offset,
        HQ = FQ.layout;
      return OQ({
        points: mQ.map((function(QQ, FQ) {
          var mQ = (0, pQ.$)(QQ, DQ);
          return "horizontal" === HQ ? {
            x: (0, pQ.C)({
              axis: wQ,
              ticks: qQ,
              bandSize: kQ,
              entry: QQ,
              index: FQ
            }),
            y: vQ()(mQ) ? null : LQ.scale(mQ),
            value: mQ,
            payload: QQ
          } : {
            x: vQ()(mQ) ? null : wQ.scale(mQ),
            y: (0, pQ.C)({
              axis: LQ,
              ticks: oQ,
              bandSize: kQ,
              entry: QQ,
              index: FQ
            }),
            value: mQ,
            payload: QQ
          }
        })),
        layout: HQ
      }, uQ)
    }))
  },
  6164: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => UQ
    });
    var LQ = wQ(53),
      qQ = wQ(5095),
      oQ = wQ.n(qQ),
      DQ = wQ(6168),
      kQ = wQ.n(DQ),
      vQ = wQ(4909),
      mQ = wQ(5800),
      uQ = wQ(6052),
      HQ = wQ(6063),
      bQ = wQ(5002),
      YQ = wQ(6066),
      xQ = wQ(5243),
      AQ = wQ(5252),
      tQ = wQ(6179);

    function eQ(QQ) {
      return eQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, eQ(QQ)
    }

    function MQ(QQ, FQ) {
      for (var wQ = 0; wQ < FQ.length; wQ++) {
        var LQ = FQ[wQ];
        LQ.enumerable = LQ.enumerable || !1, LQ.configurable = !0, "value" in LQ && (LQ.writable = !0), Object.defineProperty(QQ, RQ(LQ.key), LQ)
      }
    }

    function GQ(QQ, FQ, wQ) {
      return FQ = cQ(FQ),
        function(QQ, FQ) {
          if (FQ && ("object" === eQ(FQ) || "function" === typeof FQ)) return FQ;
          if (void 0 !== FQ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(QQ) {
            if (void 0 === QQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return QQ
          }(QQ)
        }(QQ, pQ() ? Reflect.construct(FQ, wQ || [], cQ(QQ).constructor) : FQ.apply(QQ, wQ))
    }

    function pQ() {
      try {
        var QQ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (QQ) {}
      return (pQ = function() {
        return !!QQ
      })()
    }

    function cQ(QQ) {
      return cQ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(QQ) {
        return QQ.__proto__ || Object.getPrototypeOf(QQ)
      }, cQ(QQ)
    }

    function CQ(QQ, FQ) {
      return CQ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(QQ, FQ) {
        return QQ.__proto__ = FQ, QQ
      }, CQ(QQ, FQ)
    }

    function SQ(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function iQ(QQ) {
      for (var FQ = 1; FQ < arguments.length; FQ++) {
        var wQ = null != arguments[FQ] ? arguments[FQ] : {};
        FQ % 2 ? SQ(Object(wQ), !0).forEach((function(FQ) {
          WQ(QQ, FQ, wQ[FQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : SQ(Object(wQ)).forEach((function(FQ) {
          Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
        }))
      }
      return QQ
    }

    function WQ(QQ, FQ, wQ) {
      return (FQ = RQ(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }

    function RQ(QQ) {
      var FQ = function(QQ, FQ) {
        if ("object" != eQ(QQ) || !QQ) return QQ;
        var wQ = QQ[Symbol.toPrimitive];
        if (void 0 !== wQ) {
          var LQ = wQ.call(QQ, FQ || "default");
          if ("object" != eQ(LQ)) return LQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === FQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == eQ(FQ) ? FQ : FQ + ""
    }

    function OQ(QQ, FQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return QQ
      }(QQ) || function(QQ, FQ) {
        var wQ = null == QQ ? null : "undefined" != typeof Symbol && QQ[Symbol.iterator] || QQ["@@iterator"];
        if (null != wQ) {
          var LQ, qQ, oQ, DQ, kQ = [],
            vQ = !0,
            mQ = !1;
          try {
            if (oQ = (wQ = wQ.call(QQ)).next, 0 === FQ) {
              if (Object(wQ) !== wQ) return;
              vQ = !1
            } else
              for (; !(vQ = (LQ = oQ.call(wQ)).done) && (kQ.push(LQ.value), kQ.length !== FQ); vQ = !0);
          } catch (QQ) {
            mQ = !0, qQ = QQ
          } finally {
            try {
              if (!vQ && null != wQ.return && (DQ = wQ.return(), Object(DQ) !== DQ)) return
            } finally {
              if (mQ) throw qQ
            }
          }
          return kQ
        }
      }(QQ, FQ) || function(QQ, FQ) {
        if (!QQ) return;
        if ("string" === typeof QQ) return sQ(QQ, FQ);
        var wQ = Object.prototype.toString.call(QQ).slice(8, -1);
        "Object" === wQ && QQ.constructor && (wQ = QQ.constructor.name);
        if ("Map" === wQ || "Set" === wQ) return Array.from(QQ);
        if ("Arguments" === wQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wQ)) return sQ(QQ, FQ)
      }(QQ, FQ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function sQ(QQ, FQ) {
      (null == FQ || FQ > QQ.length) && (FQ = QQ.length);
      for (var wQ = 0, LQ = new Array(FQ); wQ < FQ; wQ++) LQ[wQ] = QQ[wQ];
      return LQ
    }

    function rQ() {
      return rQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var FQ = 1; FQ < arguments.length; FQ++) {
          var wQ = arguments[FQ];
          for (var LQ in wQ) Object.prototype.hasOwnProperty.call(wQ, LQ) && (QQ[LQ] = wQ[LQ])
        }
        return QQ
      }, rQ.apply(this, arguments)
    }

    function IQ(QQ) {
      var FQ = QQ.x,
        wQ = QQ.y,
        qQ = QQ.segment,
        DQ = QQ.xAxisId,
        eQ = QQ.yAxisId,
        MQ = QQ.shape,
        GQ = QQ.className,
        pQ = QQ.alwaysShow,
        cQ = (0, tQ.l)(),
        CQ = (0, tQ.t)(DQ),
        SQ = (0, tQ.u)(eQ),
        WQ = (0, tQ.s)();
      if (!cQ || !WQ) return null;
      (0, xQ.c)(void 0 === pQ, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var RQ = function(QQ, FQ, wQ, LQ, qQ, oQ, DQ, vQ, mQ) {
        var uQ = qQ.x,
          bQ = qQ.y,
          YQ = qQ.width,
          xQ = qQ.height;
        if (wQ) {
          var AQ = mQ.y,
            tQ = QQ.y.apply(AQ, {
              position: oQ
            });
          if ((0, HQ.c)(mQ, "discard") && !QQ.y.isInRange(tQ)) return null;
          var eQ = [{
            x: uQ + YQ,
            y: tQ
          }, {
            x: uQ,
            y: tQ
          }];
          return "left" === vQ ? eQ.reverse() : eQ
        }
        if (FQ) {
          var MQ = mQ.x,
            GQ = QQ.x.apply(MQ, {
              position: oQ
            });
          if ((0, HQ.c)(mQ, "discard") && !QQ.x.isInRange(GQ)) return null;
          var pQ = [{
            x: GQ,
            y: bQ + xQ
          }, {
            x: GQ,
            y: bQ
          }];
          return "top" === DQ ? pQ.reverse() : pQ
        }
        if (LQ) {
          var cQ = mQ.segment.map((function(FQ) {
            return QQ.apply(FQ, {
              position: oQ
            })
          }));
          return (0, HQ.c)(mQ, "discard") && kQ()(cQ, (function(FQ) {
            return !QQ.isInRange(FQ)
          })) ? null : cQ
        }
        return null
      }((0, YQ.e)({
        x: CQ.scale,
        y: SQ.scale
      }), (0, bQ.s)(FQ), (0, bQ.s)(wQ), qQ && 2 === qQ.length, WQ, QQ.position, CQ.orientation, SQ.orientation, QQ);
      if (!RQ) return null;
      var sQ = OQ(RQ, 2),
        IQ = sQ[0],
        UQ = IQ.x,
        NQ = IQ.y,
        TQ = sQ[1],
        KQ = TQ.x,
        zQ = TQ.y,
        lQ = iQ(iQ({
          clipPath: (0, HQ.c)(QQ, "hidden") ? "url(#".concat(cQ, ")") : void 0
        }, (0, AQ.e)(QQ, !0)), {}, {
          x1: UQ,
          y1: NQ,
          x2: KQ,
          y2: zQ
        });
      return LQ.createElement(mQ.e, {
        className: (0, vQ.b)("recharts-reference-line", GQ)
      }, function(QQ, FQ) {
        return LQ.isValidElement(QQ) ? LQ.cloneElement(QQ, FQ) : oQ()(QQ) ? QQ(FQ) : LQ.createElement("line", rQ({}, FQ, {
          className: "recharts-reference-line-line"
        }))
      }(MQ, lQ), uQ.b.renderCallByParent(QQ, (0, YQ.j)({
        x1: UQ,
        y1: NQ,
        x2: KQ,
        y2: zQ
      })))
    }
    var UQ = function(QQ) {
      function FQ() {
        return function(QQ, FQ) {
          if (!(QQ instanceof FQ)) throw new TypeError("Cannot call a class as a function")
        }(this, FQ), GQ(this, FQ, arguments)
      }
      return function(QQ, FQ) {
        if ("function" !== typeof FQ && null !== FQ) throw new TypeError("Super expression must either be null or a function");
        QQ.prototype = Object.create(FQ && FQ.prototype, {
          constructor: {
            value: QQ,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(QQ, "prototype", {
          writable: !1
        }), FQ && CQ(QQ, FQ)
      }(FQ, QQ), wQ = FQ, (qQ = [{
        key: "render",
        value: function() {
          return LQ.createElement(IQ, this.props)
        }
      }]) && MQ(wQ.prototype, qQ), oQ && MQ(wQ, oQ), Object.defineProperty(wQ, "prototype", {
        writable: !1
      }), wQ;
      var wQ, qQ, oQ
    }(LQ.Component);
    WQ(UQ, "displayName", "ReferenceLine"), WQ(UQ, "defaultProps", {
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
  6218: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => MQ
    });
    var LQ = wQ(53),
      qQ = wQ(4909),
      oQ = wQ(6179),
      DQ = wQ(6222),
      kQ = wQ(5974);

    function vQ(QQ) {
      return vQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, vQ(QQ)
    }

    function mQ(QQ, FQ) {
      for (var wQ = 0; wQ < FQ.length; wQ++) {
        var LQ = FQ[wQ];
        LQ.enumerable = LQ.enumerable || !1, LQ.configurable = !0, "value" in LQ && (LQ.writable = !0), Object.defineProperty(QQ, AQ(LQ.key), LQ)
      }
    }

    function uQ(QQ, FQ, wQ) {
      return FQ = bQ(FQ),
        function(QQ, FQ) {
          if (FQ && ("object" === vQ(FQ) || "function" === typeof FQ)) return FQ;
          if (void 0 !== FQ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(QQ) {
            if (void 0 === QQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return QQ
          }(QQ)
        }(QQ, HQ() ? Reflect.construct(FQ, wQ || [], bQ(QQ).constructor) : FQ.apply(QQ, wQ))
    }

    function HQ() {
      try {
        var QQ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (QQ) {}
      return (HQ = function() {
        return !!QQ
      })()
    }

    function bQ(QQ) {
      return bQ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(QQ) {
        return QQ.__proto__ || Object.getPrototypeOf(QQ)
      }, bQ(QQ)
    }

    function YQ(QQ, FQ) {
      return YQ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(QQ, FQ) {
        return QQ.__proto__ = FQ, QQ
      }, YQ(QQ, FQ)
    }

    function xQ(QQ, FQ, wQ) {
      return (FQ = AQ(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }

    function AQ(QQ) {
      var FQ = function(QQ, FQ) {
        if ("object" != vQ(QQ) || !QQ) return QQ;
        var wQ = QQ[Symbol.toPrimitive];
        if (void 0 !== wQ) {
          var LQ = wQ.call(QQ, FQ || "default");
          if ("object" != vQ(LQ)) return LQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === FQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == vQ(FQ) ? FQ : FQ + ""
    }

    function tQ() {
      return tQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var FQ = 1; FQ < arguments.length; FQ++) {
          var wQ = arguments[FQ];
          for (var LQ in wQ) Object.prototype.hasOwnProperty.call(wQ, LQ) && (QQ[LQ] = wQ[LQ])
        }
        return QQ
      }, tQ.apply(this, arguments)
    }

    function eQ(QQ) {
      var FQ = QQ.xAxisId,
        wQ = (0, oQ.k)(),
        vQ = (0, oQ.j)(),
        mQ = (0, oQ.t)(FQ);
      return null == mQ ? null : LQ.createElement(DQ.e, tQ({}, mQ, {
        className: (0, qQ.b)("recharts-".concat(mQ.axisType, " ").concat(mQ.axisType), mQ.className),
        viewBox: {
          x: 0,
          y: 0,
          width: wQ,
          height: vQ
        },
        ticksGenerator: function(QQ) {
          return (0, kQ.U)(QQ, !0)
        }
      }))
    }
    var MQ = function(QQ) {
      function FQ() {
        return function(QQ, FQ) {
          if (!(QQ instanceof FQ)) throw new TypeError("Cannot call a class as a function")
        }(this, FQ), uQ(this, FQ, arguments)
      }
      return function(QQ, FQ) {
        if ("function" !== typeof FQ && null !== FQ) throw new TypeError("Super expression must either be null or a function");
        QQ.prototype = Object.create(FQ && FQ.prototype, {
          constructor: {
            value: QQ,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(QQ, "prototype", {
          writable: !1
        }), FQ && YQ(QQ, FQ)
      }(FQ, QQ), wQ = FQ, (qQ = [{
        key: "render",
        value: function() {
          return LQ.createElement(eQ, this.props)
        }
      }]) && mQ(wQ.prototype, qQ), oQ && mQ(wQ, oQ), Object.defineProperty(wQ, "prototype", {
        writable: !1
      }), wQ;
      var wQ, qQ, oQ
    }(LQ.Component);
    xQ(MQ, "displayName", "XAxis"), xQ(MQ, "defaultProps", {
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
  6238: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => MQ
    });
    var LQ = wQ(53),
      qQ = wQ(4909),
      oQ = wQ(6179),
      DQ = wQ(6222),
      kQ = wQ(5974);

    function vQ(QQ) {
      return vQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, vQ(QQ)
    }

    function mQ(QQ, FQ) {
      for (var wQ = 0; wQ < FQ.length; wQ++) {
        var LQ = FQ[wQ];
        LQ.enumerable = LQ.enumerable || !1, LQ.configurable = !0, "value" in LQ && (LQ.writable = !0), Object.defineProperty(QQ, AQ(LQ.key), LQ)
      }
    }

    function uQ(QQ, FQ, wQ) {
      return FQ = bQ(FQ),
        function(QQ, FQ) {
          if (FQ && ("object" === vQ(FQ) || "function" === typeof FQ)) return FQ;
          if (void 0 !== FQ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(QQ) {
            if (void 0 === QQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return QQ
          }(QQ)
        }(QQ, HQ() ? Reflect.construct(FQ, wQ || [], bQ(QQ).constructor) : FQ.apply(QQ, wQ))
    }

    function HQ() {
      try {
        var QQ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (QQ) {}
      return (HQ = function() {
        return !!QQ
      })()
    }

    function bQ(QQ) {
      return bQ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(QQ) {
        return QQ.__proto__ || Object.getPrototypeOf(QQ)
      }, bQ(QQ)
    }

    function YQ(QQ, FQ) {
      return YQ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(QQ, FQ) {
        return QQ.__proto__ = FQ, QQ
      }, YQ(QQ, FQ)
    }

    function xQ(QQ, FQ, wQ) {
      return (FQ = AQ(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }

    function AQ(QQ) {
      var FQ = function(QQ, FQ) {
        if ("object" != vQ(QQ) || !QQ) return QQ;
        var wQ = QQ[Symbol.toPrimitive];
        if (void 0 !== wQ) {
          var LQ = wQ.call(QQ, FQ || "default");
          if ("object" != vQ(LQ)) return LQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === FQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == vQ(FQ) ? FQ : FQ + ""
    }

    function tQ() {
      return tQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var FQ = 1; FQ < arguments.length; FQ++) {
          var wQ = arguments[FQ];
          for (var LQ in wQ) Object.prototype.hasOwnProperty.call(wQ, LQ) && (QQ[LQ] = wQ[LQ])
        }
        return QQ
      }, tQ.apply(this, arguments)
    }
    var eQ = function(QQ) {
        var FQ = QQ.yAxisId,
          wQ = (0, oQ.k)(),
          vQ = (0, oQ.j)(),
          mQ = (0, oQ.u)(FQ);
        return null == mQ ? null : LQ.createElement(DQ.e, tQ({}, mQ, {
          className: (0, qQ.b)("recharts-".concat(mQ.axisType, " ").concat(mQ.axisType), mQ.className),
          viewBox: {
            x: 0,
            y: 0,
            width: wQ,
            height: vQ
          },
          ticksGenerator: function(QQ) {
            return (0, kQ.U)(QQ, !0)
          }
        }))
      },
      MQ = function(QQ) {
        function FQ() {
          return function(QQ, FQ) {
            if (!(QQ instanceof FQ)) throw new TypeError("Cannot call a class as a function")
          }(this, FQ), uQ(this, FQ, arguments)
        }
        return function(QQ, FQ) {
          if ("function" !== typeof FQ && null !== FQ) throw new TypeError("Super expression must either be null or a function");
          QQ.prototype = Object.create(FQ && FQ.prototype, {
            constructor: {
              value: QQ,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(QQ, "prototype", {
            writable: !1
          }), FQ && YQ(QQ, FQ)
        }(FQ, QQ), wQ = FQ, (qQ = [{
          key: "render",
          value: function() {
            return LQ.createElement(eQ, this.props)
          }
        }]) && mQ(wQ.prototype, qQ), oQ && mQ(wQ, oQ), Object.defineProperty(wQ, "prototype", {
          writable: !1
        }), wQ;
        var wQ, qQ, oQ
      }(LQ.Component);
    xQ(MQ, "displayName", "YAxis"), xQ(MQ, "defaultProps", {
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
  6230: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => AQ
    });
    var LQ = wQ(5095),
      qQ = wQ.n(LQ),
      oQ = wQ(5002),
      DQ = wQ(5967),
      kQ = wQ(5812),
      vQ = wQ(6066);

    function mQ(QQ, FQ, wQ) {
      if (FQ < 1) return [];
      if (1 === FQ && void 0 === wQ) return QQ;
      for (var LQ = [], qQ = 0; qQ < QQ.length; qQ += FQ) {
        if (void 0 !== wQ && !0 !== wQ(QQ[qQ])) return;
        LQ.push(QQ[qQ])
      }
      return LQ
    }

    function uQ(QQ, FQ, wQ, LQ, qQ) {
      if (QQ * FQ < QQ * LQ || QQ * FQ > QQ * qQ) return !1;
      var oQ = wQ();
      return QQ * (FQ - QQ * oQ / 2 - LQ) >= 0 && QQ * (FQ + QQ * oQ / 2 - qQ) <= 0
    }

    function HQ(QQ) {
      return HQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, HQ(QQ)
    }

    function bQ(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function YQ(QQ) {
      for (var FQ = 1; FQ < arguments.length; FQ++) {
        var wQ = null != arguments[FQ] ? arguments[FQ] : {};
        FQ % 2 ? bQ(Object(wQ), !0).forEach((function(FQ) {
          xQ(QQ, FQ, wQ[FQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : bQ(Object(wQ)).forEach((function(FQ) {
          Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
        }))
      }
      return QQ
    }

    function xQ(QQ, FQ, wQ) {
      return (FQ = function(QQ) {
        var FQ = function(QQ, FQ) {
          if ("object" != HQ(QQ) || !QQ) return QQ;
          var wQ = QQ[Symbol.toPrimitive];
          if (void 0 !== wQ) {
            var LQ = wQ.call(QQ, FQ || "default");
            if ("object" != HQ(LQ)) return LQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === FQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == HQ(FQ) ? FQ : FQ + ""
      }(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }

    function AQ(QQ, FQ, wQ) {
      var LQ = QQ.fH,
        HQ = QQ.ticks,
        bQ = QQ.viewBox,
        xQ = QQ.minTickGap,
        AQ = QQ.orientation,
        tQ = QQ.interval,
        eQ = QQ.tickFormatter,
        MQ = QQ.unit,
        GQ = QQ.angle;
      if (!HQ || !HQ.length || !LQ) return [];
      if ((0, oQ.t)(tQ) || kQ.d.isSsr) return function(QQ, FQ) {
        return mQ(QQ, FQ + 1)
      }(HQ, "number" === typeof tQ && (0, oQ.t)(tQ) ? tQ : 0);
      var pQ = [],
        cQ = "top" === AQ || "bottom" === AQ ? "width" : "height",
        CQ = MQ && "width" === cQ ? (0, DQ.g)(MQ, {
          fontSize: FQ,
          letterSpacing: wQ
        }) : {
          width: 0,
          height: 0
        },
        SQ = function(QQ, LQ) {
          var oQ = qQ()(eQ) ? eQ(QQ.value, LQ) : QQ.value;
          return "width" === cQ ? function(QQ, FQ, wQ) {
            var LQ = {
              width: QQ.width + FQ.width,
              height: QQ.height + FQ.height
            };
            return (0, vQ.i)(LQ, wQ)
          }((0, DQ.g)(oQ, {
            fontSize: FQ,
            letterSpacing: wQ
          }), CQ, GQ) : (0, DQ.g)(oQ, {
            fontSize: FQ,
            letterSpacing: wQ
          })[cQ]
        },
        iQ = HQ.length >= 2 ? (0, oQ.z)(HQ[1].coordinate - HQ[0].coordinate) : 1,
        WQ = function(QQ, FQ, wQ) {
          var LQ = "width" === wQ,
            qQ = QQ.x,
            oQ = QQ.y,
            DQ = QQ.width,
            kQ = QQ.height;
          return 1 === FQ ? {
            start: LQ ? qQ : oQ,
            end: LQ ? qQ + DQ : oQ + kQ
          } : {
            start: LQ ? qQ + DQ : oQ + kQ,
            end: LQ ? qQ : oQ
          }
        }(bQ, iQ, cQ);
      return "equidistantPreserveStart" === tQ ? function(QQ, FQ, wQ, LQ, qQ) {
        for (var oQ, DQ = (LQ || []).slice(), kQ = FQ.start, vQ = FQ.end, HQ = 0, bQ = 1, YQ = kQ, xQ = function() {
            var FQ = null === LQ || void 0 === LQ ? void 0 : LQ[HQ];
            if (void 0 === FQ) return {
              v: mQ(LQ, bQ)
            };
            var oQ, DQ = HQ,
              xQ = function() {
                return void 0 === oQ && (oQ = wQ(FQ, DQ)), oQ
              },
              AQ = FQ.coordinate,
              tQ = 0 === HQ || uQ(QQ, AQ, xQ, YQ, vQ);
            tQ || (HQ = 0, YQ = kQ, bQ += 1), tQ && (YQ = AQ + QQ * (xQ() / 2 + qQ), HQ += bQ)
          }; bQ <= DQ.length;)
          if (oQ = xQ()) return oQ.v;
        return []
      }(iQ, WQ, SQ, HQ, xQ) : (pQ = "preserveStart" === tQ || "preserveStartEnd" === tQ ? function(QQ, FQ, wQ, LQ, qQ, oQ) {
        var DQ = (LQ || []).slice(),
          kQ = DQ.length,
          vQ = FQ.start,
          mQ = FQ.end;
        if (oQ) {
          var HQ = LQ[kQ - 1],
            bQ = wQ(HQ, kQ - 1),
            xQ = QQ * (HQ.coordinate + QQ * bQ / 2 - mQ);
          DQ[kQ - 1] = HQ = YQ(YQ({}, HQ), {}, {
            tickCoord: xQ > 0 ? HQ.coordinate - xQ * QQ : HQ.coordinate
          }), uQ(QQ, HQ.tickCoord, (function() {
            return bQ
          }), vQ, mQ) && (mQ = HQ.tickCoord - QQ * (bQ / 2 + qQ), DQ[kQ - 1] = YQ(YQ({}, HQ), {}, {
            isShow: !0
          }))
        }
        for (var AQ = oQ ? kQ - 1 : kQ, tQ = function(FQ) {
            var LQ, oQ = DQ[FQ],
              kQ = function() {
                return void 0 === LQ && (LQ = wQ(oQ, FQ)), LQ
              };
            if (0 === FQ) {
              var HQ = QQ * (oQ.coordinate - QQ * kQ() / 2 - vQ);
              DQ[FQ] = oQ = YQ(YQ({}, oQ), {}, {
                tickCoord: HQ < 0 ? oQ.coordinate - HQ * QQ : oQ.coordinate
              })
            } else DQ[FQ] = oQ = YQ(YQ({}, oQ), {}, {
              tickCoord: oQ.coordinate
            });
            uQ(QQ, oQ.tickCoord, kQ, vQ, mQ) && (vQ = oQ.tickCoord + QQ * (kQ() / 2 + qQ), DQ[FQ] = YQ(YQ({}, oQ), {}, {
              isShow: !0
            }))
          }, eQ = 0; eQ < AQ; eQ++) tQ(eQ);
        return DQ
      }(iQ, WQ, SQ, HQ, xQ, "preserveStartEnd" === tQ) : function(QQ, FQ, wQ, LQ, qQ) {
        for (var oQ = (LQ || []).slice(), DQ = oQ.length, kQ = FQ.start, vQ = FQ.end, mQ = function(FQ) {
            var LQ, mQ = oQ[FQ],
              HQ = function() {
                return void 0 === LQ && (LQ = wQ(mQ, FQ)), LQ
              };
            if (FQ === DQ - 1) {
              var bQ = QQ * (mQ.coordinate + QQ * HQ() / 2 - vQ);
              oQ[FQ] = mQ = YQ(YQ({}, mQ), {}, {
                tickCoord: bQ > 0 ? mQ.coordinate - bQ * QQ : mQ.coordinate
              })
            } else oQ[FQ] = mQ = YQ(YQ({}, mQ), {}, {
              tickCoord: mQ.coordinate
            });
            uQ(QQ, mQ.tickCoord, HQ, kQ, vQ) && (vQ = mQ.tickCoord - QQ * (HQ() / 2 + qQ), oQ[FQ] = YQ(YQ({}, mQ), {}, {
              isShow: !0
            }))
          }, HQ = DQ - 1; HQ >= 0; HQ--) mQ(HQ);
        return oQ
      }(iQ, WQ, SQ, HQ, xQ), pQ.filter((function(QQ) {
        return QQ.isShow
      })))
    }
  },
  6250: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => vQ
    });
    var LQ = wQ(5291),
      qQ = wQ(6101),
      oQ = wQ(6218),
      DQ = wQ(6238),
      kQ = wQ(6066),
      vQ = (0, LQ.d)({
        chartName: "BarChart",
        GraphicalChild: qQ.c,
        defaultTooltipEventType: "axis",
        validateTooltipEventTypes: ["axis", "item"],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: oQ.e
        }, {
          axisType: "yAxis",
          AxisComp: DQ.e
        }],
        formatAxisMap: kQ.g
      })
  },
  5283: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => qF
    });
    var LQ = wQ(5291),
      qQ = wQ(6203),
      oQ = wQ(6101),
      DQ = wQ(6212),
      kQ = wQ(53),
      vQ = wQ(5960),
      mQ = wQ(5240),
      uQ = wQ.n(mQ),
      HQ = wQ(6036),
      bQ = wQ.n(HQ),
      YQ = wQ(5095),
      xQ = wQ.n(YQ),
      AQ = wQ(4909),
      tQ = wQ(5800),
      eQ = wQ(6118),
      MQ = wQ(5252),
      GQ = wQ(5812);

    function pQ(QQ) {
      return pQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, pQ(QQ)
    }

    function cQ(QQ, FQ) {
      for (var wQ = 0; wQ < FQ.length; wQ++) {
        var LQ = FQ[wQ];
        LQ.enumerable = LQ.enumerable || !1, LQ.configurable = !0, "value" in LQ && (LQ.writable = !0), Object.defineProperty(QQ, OQ(LQ.key), LQ)
      }
    }

    function CQ(QQ, FQ, wQ) {
      return FQ = iQ(FQ),
        function(QQ, FQ) {
          if (FQ && ("object" === pQ(FQ) || "function" === typeof FQ)) return FQ;
          if (void 0 !== FQ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(QQ) {
            if (void 0 === QQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return QQ
          }(QQ)
        }(QQ, SQ() ? Reflect.construct(FQ, wQ || [], iQ(QQ).constructor) : FQ.apply(QQ, wQ))
    }

    function SQ() {
      try {
        var QQ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (QQ) {}
      return (SQ = function() {
        return !!QQ
      })()
    }

    function iQ(QQ) {
      return iQ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(QQ) {
        return QQ.__proto__ || Object.getPrototypeOf(QQ)
      }, iQ(QQ)
    }

    function WQ(QQ, FQ) {
      return WQ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(QQ, FQ) {
        return QQ.__proto__ = FQ, QQ
      }, WQ(QQ, FQ)
    }

    function RQ(QQ, FQ, wQ) {
      return (FQ = OQ(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }

    function OQ(QQ) {
      var FQ = function(QQ, FQ) {
        if ("object" != pQ(QQ) || !QQ) return QQ;
        var wQ = QQ[Symbol.toPrimitive];
        if (void 0 !== wQ) {
          var LQ = wQ.call(QQ, FQ || "default");
          if ("object" != pQ(LQ)) return LQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === FQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == pQ(FQ) ? FQ : FQ + ""
    }
    var sQ = function(QQ) {
      function FQ() {
        return function(QQ, FQ) {
          if (!(QQ instanceof FQ)) throw new TypeError("Cannot call a class as a function")
        }(this, FQ), CQ(this, FQ, arguments)
      }
      return function(QQ, FQ) {
        if ("function" !== typeof FQ && null !== FQ) throw new TypeError("Super expression must either be null or a function");
        QQ.prototype = Object.create(FQ && FQ.prototype, {
          constructor: {
            value: QQ,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(QQ, "prototype", {
          writable: !1
        }), FQ && WQ(QQ, FQ)
      }(FQ, QQ), wQ = FQ, (LQ = [{
        key: "render",
        value: function() {
          return null
        }
      }]) && cQ(wQ.prototype, LQ), qQ && cQ(wQ, qQ), Object.defineProperty(wQ, "prototype", {
        writable: !1
      }), wQ;
      var wQ, LQ, qQ
    }(kQ.Component);
    RQ(sQ, "displayName", "ZAxis"), RQ(sQ, "defaultProps", {
      zAxisId: 0,
      range: [64, 64],
      scale: "auto",
      type: "number"
    });
    var rQ = wQ(6200),
      IQ = wQ(6041),
      UQ = wQ(6110),
      NQ = wQ(5002),
      TQ = wQ(5974),
      KQ = wQ(5277),
      zQ = wQ(5893),
      lQ = wQ(6130),
      jQ = ["option", "isActive"];

    function aQ() {
      return aQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var FQ = 1; FQ < arguments.length; FQ++) {
          var wQ = arguments[FQ];
          for (var LQ in wQ) Object.prototype.hasOwnProperty.call(wQ, LQ) && (QQ[LQ] = wQ[LQ])
        }
        return QQ
      }, aQ.apply(this, arguments)
    }

    function XQ(QQ, FQ) {
      if (null == QQ) return {};
      var wQ, LQ, qQ = function(QQ, FQ) {
        if (null == QQ) return {};
        var wQ = {};
        for (var LQ in QQ)
          if (Object.prototype.hasOwnProperty.call(QQ, LQ)) {
            if (FQ.indexOf(LQ) >= 0) continue;
            wQ[LQ] = QQ[LQ]
          } return wQ
      }(QQ, FQ);
      if (Object.getOwnPropertySymbols) {
        var oQ = Object.getOwnPropertySymbols(QQ);
        for (LQ = 0; LQ < oQ.length; LQ++) wQ = oQ[LQ], FQ.indexOf(wQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, wQ) && (qQ[wQ] = QQ[wQ])
      }
      return qQ
    }

    function fQ(QQ) {
      var FQ = QQ.option,
        wQ = QQ.isActive,
        LQ = XQ(QQ, jQ);
      return "string" === typeof FQ ? kQ.createElement(lQ.e, aQ({
        option: kQ.createElement(zQ.b, aQ({
          type: FQ
        }, LQ)),
        isActive: wQ,
        shapeType: "symbols"
      }, LQ)) : kQ.createElement(lQ.e, aQ({
        option: FQ,
        isActive: wQ,
        shapeType: "symbols"
      }, LQ))
    }

    function VQ(QQ) {
      return VQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, VQ(QQ)
    }

    function hQ() {
      return hQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var FQ = 1; FQ < arguments.length; FQ++) {
          var wQ = arguments[FQ];
          for (var LQ in wQ) Object.prototype.hasOwnProperty.call(wQ, LQ) && (QQ[LQ] = wQ[LQ])
        }
        return QQ
      }, hQ.apply(this, arguments)
    }

    function JQ(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function EQ(QQ) {
      for (var FQ = 1; FQ < arguments.length; FQ++) {
        var wQ = null != arguments[FQ] ? arguments[FQ] : {};
        FQ % 2 ? JQ(Object(wQ), !0).forEach((function(FQ) {
          BQ(QQ, FQ, wQ[FQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : JQ(Object(wQ)).forEach((function(FQ) {
          Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
        }))
      }
      return QQ
    }

    function nQ(QQ, FQ) {
      for (var wQ = 0; wQ < FQ.length; wQ++) {
        var LQ = FQ[wQ];
        LQ.enumerable = LQ.enumerable || !1, LQ.configurable = !0, "value" in LQ && (LQ.writable = !0), Object.defineProperty(QQ, dQ(LQ.key), LQ)
      }
    }

    function gQ(QQ, FQ, wQ) {
      return FQ = ZQ(FQ),
        function(QQ, FQ) {
          if (FQ && ("object" === VQ(FQ) || "function" === typeof FQ)) return FQ;
          if (void 0 !== FQ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(QQ) {
            if (void 0 === QQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return QQ
          }(QQ)
        }(QQ, PQ() ? Reflect.construct(FQ, wQ || [], ZQ(QQ).constructor) : FQ.apply(QQ, wQ))
    }

    function PQ() {
      try {
        var QQ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (QQ) {}
      return (PQ = function() {
        return !!QQ
      })()
    }

    function ZQ(QQ) {
      return ZQ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(QQ) {
        return QQ.__proto__ || Object.getPrototypeOf(QQ)
      }, ZQ(QQ)
    }

    function yQ(QQ, FQ) {
      return yQ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(QQ, FQ) {
        return QQ.__proto__ = FQ, QQ
      }, yQ(QQ, FQ)
    }

    function BQ(QQ, FQ, wQ) {
      return (FQ = dQ(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }

    function dQ(QQ) {
      var FQ = function(QQ, FQ) {
        if ("object" != VQ(QQ) || !QQ) return QQ;
        var wQ = QQ[Symbol.toPrimitive];
        if (void 0 !== wQ) {
          var LQ = wQ.call(QQ, FQ || "default");
          if ("object" != VQ(LQ)) return LQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === FQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == VQ(FQ) ? FQ : FQ + ""
    }
    var QF = function(QQ) {
      function FQ() {
        var QQ;
        ! function(QQ, FQ) {
          if (!(QQ instanceof FQ)) throw new TypeError("Cannot call a class as a function")
        }(this, FQ);
        for (var wQ = arguments.length, LQ = new Array(wQ), qQ = 0; qQ < wQ; qQ++) LQ[qQ] = arguments[qQ];
        return BQ(QQ = gQ(this, FQ, [].concat(LQ)), "state", {
          isAnimationFinished: !1
        }), BQ(QQ, "handleAnimationEnd", (function() {
          QQ.setState({
            isAnimationFinished: !0
          })
        })), BQ(QQ, "handleAnimationStart", (function() {
          QQ.setState({
            isAnimationFinished: !1
          })
        })), BQ(QQ, "id", (0, NQ.C)("recharts-scatter-")), QQ
      }
      return function(QQ, FQ) {
        if ("function" !== typeof FQ && null !== FQ) throw new TypeError("Super expression must either be null or a function");
        QQ.prototype = Object.create(FQ && FQ.prototype, {
          constructor: {
            value: QQ,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(QQ, "prototype", {
          writable: !1
        }), FQ && yQ(QQ, FQ)
      }(FQ, QQ), wQ = FQ, LQ = [{
        key: "renderSymbolsStatically",
        value: function(QQ) {
          var FQ = this,
            wQ = this.props,
            LQ = wQ.shape,
            qQ = wQ.activeShape,
            oQ = wQ.activeIndex,
            DQ = (0, MQ.e)(this.props, !1);
          return QQ.map((function(QQ, wQ) {
            var vQ = oQ === wQ,
              mQ = vQ ? qQ : LQ,
              uQ = EQ(EQ({}, DQ), QQ);
            return kQ.createElement(tQ.e, hQ({
              className: "recharts-scatter-symbol",
              key: "symbol-".concat(null === QQ || void 0 === QQ ? void 0 : QQ.cx, "-").concat(null === QQ || void 0 === QQ ? void 0 : QQ.cy, "-").concat(null === QQ || void 0 === QQ ? void 0 : QQ.size, "-").concat(wQ)
            }, (0, KQ.j)(FQ.props, QQ, wQ), {
              role: "img"
            }), kQ.createElement(fQ, hQ({
              option: mQ,
              isActive: vQ,
              key: "symbol-".concat(wQ)
            }, uQ)))
          }))
        }
      }, {
        key: "renderSymbolsWithAnimation",
        value: function() {
          var QQ = this,
            FQ = this.props,
            wQ = FQ.points,
            LQ = FQ.isAnimationActive,
            qQ = FQ.animationBegin,
            oQ = FQ.animationDuration,
            DQ = FQ.animationEasing,
            mQ = FQ.animationId,
            uQ = this.state.prevPoints;
          return kQ.createElement(vQ.b, {
            mY: qQ,
            duration: oQ,
            isActive: LQ,
            easing: DQ,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "pie-".concat(mQ),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(FQ) {
            var LQ = FQ.t,
              qQ = wQ.map((function(QQ, FQ) {
                var wQ = uQ && uQ[FQ];
                if (wQ) {
                  var qQ = (0, NQ.o)(wQ.cx, QQ.cx),
                    oQ = (0, NQ.o)(wQ.cy, QQ.cy),
                    DQ = (0, NQ.o)(wQ.size, QQ.size);
                  return EQ(EQ({}, QQ), {}, {
                    cx: qQ(LQ),
                    cy: oQ(LQ),
                    size: DQ(LQ)
                  })
                }
                var kQ = (0, NQ.o)(0, QQ.size);
                return EQ(EQ({}, QQ), {}, {
                  size: kQ(LQ)
                })
              }));
            return kQ.createElement(tQ.e, null, QQ.renderSymbolsStatically(qQ))
          }))
        }
      }, {
        key: "renderSymbols",
        value: function() {
          var QQ = this.props,
            FQ = QQ.points,
            wQ = QQ.isAnimationActive,
            LQ = this.state.prevPoints;
          return !(wQ && FQ && FQ.length) || LQ && bQ()(LQ, FQ) ? this.renderSymbolsStatically(FQ) : this.renderSymbolsWithAnimation()
        }
      }, {
        key: "renderErrorBar",
        value: function() {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var QQ = this.props,
            FQ = QQ.points,
            wQ = QQ.xAxis,
            LQ = QQ.yAxis,
            qQ = QQ.children,
            oQ = (0, MQ.i)(qQ, IQ.d);
          return oQ ? oQ.map((function(QQ, qQ) {
            var oQ = QQ.props,
              DQ = oQ.direction,
              vQ = oQ.dataKey;
            return kQ.cloneElement(QQ, {
              key: "".concat(DQ, "-").concat(vQ, "-").concat(FQ[qQ]),
              data: FQ,
              xAxis: wQ,
              yAxis: LQ,
              layout: "x" === DQ ? "vertical" : "horizontal",
              dataPointFormatter: function(QQ, FQ) {
                return {
                  x: QQ.cx,
                  y: QQ.cy,
                  value: "x" === DQ ? +QQ.node.x : +QQ.node.y,
                  errorVal: (0, TQ.$)(QQ, FQ)
                }
              }
            })
          })) : null
        }
      }, {
        key: "renderLine",
        value: function() {
          var QQ, FQ, wQ = this.props,
            LQ = wQ.points,
            qQ = wQ.line,
            oQ = wQ.lineType,
            DQ = wQ.lineJointType,
            vQ = (0, MQ.e)(this.props, !1),
            mQ = (0, MQ.e)(qQ, !1);
          if ("joint" === oQ) QQ = LQ.map((function(QQ) {
            return {
              x: QQ.cx,
              y: QQ.cy
            }
          }));
          else if ("fitting" === oQ) {
            var uQ = (0, NQ.h)(LQ),
              HQ = uQ.xmin,
              bQ = uQ.xmax,
              YQ = uQ.a,
              AQ = uQ.b,
              eQ = function(QQ) {
                return YQ * QQ + AQ
              };
            QQ = [{
              x: HQ,
              y: eQ(HQ)
            }, {
              x: bQ,
              y: eQ(bQ)
            }]
          }
          var GQ = EQ(EQ(EQ({}, vQ), {}, {
            fill: "none",
            stroke: vQ && vQ.fill
          }, mQ), {}, {
            points: QQ
          });
          return FQ = kQ.isValidElement(qQ) ? kQ.cloneElement(qQ, GQ) : xQ()(qQ) ? qQ(GQ) : kQ.createElement(rQ.c, hQ({}, GQ, {
            type: DQ
          })), kQ.createElement(tQ.e, {
            className: "recharts-scatter-line",
            key: "recharts-scatter-line"
          }, FQ)
        }
      }, {
        key: "render",
        value: function() {
          var QQ = this.props,
            FQ = QQ.hide,
            wQ = QQ.points,
            LQ = QQ.line,
            qQ = QQ.className,
            oQ = QQ.xAxis,
            DQ = QQ.yAxis,
            vQ = QQ.left,
            mQ = QQ.top,
            HQ = QQ.width,
            bQ = QQ.height,
            YQ = QQ.id,
            xQ = QQ.isAnimationActive;
          if (FQ || !wQ || !wQ.length) return null;
          var MQ = this.state.isAnimationFinished,
            GQ = (0, AQ.b)("recharts-scatter", qQ),
            pQ = oQ && oQ.allowDataOverflow,
            cQ = DQ && DQ.allowDataOverflow,
            CQ = pQ || cQ,
            SQ = uQ()(YQ) ? this.id : YQ;
          return kQ.createElement(tQ.e, {
            className: GQ,
            clipPath: CQ ? "url(#clipPath-".concat(SQ, ")") : null
          }, pQ || cQ ? kQ.createElement("defs", null, kQ.createElement("clipPath", {
            id: "clipPath-".concat(SQ)
          }, kQ.createElement("rect", {
            x: pQ ? vQ : vQ - HQ / 2,
            y: cQ ? mQ : mQ - bQ / 2,
            width: pQ ? HQ : 2 * HQ,
            height: cQ ? bQ : 2 * bQ
          }))) : null, LQ && this.renderLine(), this.renderErrorBar(), kQ.createElement(tQ.e, {
            key: "recharts-scatter-symbols"
          }, this.renderSymbols()), (!xQ || MQ) && eQ.d.renderCallByParent(this.props, wQ))
        }
      }], qQ = [{
        key: "getDerivedStateFromProps",
        value: function(QQ, FQ) {
          return QQ.animationId !== FQ.prevAnimationId ? {
            prevAnimationId: QQ.animationId,
            curPoints: QQ.points,
            prevPoints: FQ.curPoints
          } : QQ.points !== FQ.curPoints ? {
            curPoints: QQ.points
          } : null
        }
      }], LQ && nQ(wQ.prototype, LQ), qQ && nQ(wQ, qQ), Object.defineProperty(wQ, "prototype", {
        writable: !1
      }), wQ;
      var wQ, LQ, qQ
    }(kQ.PureComponent);
    BQ(QF, "displayName", "Scatter"), BQ(QF, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      zAxisId: 0,
      legendType: "circle",
      lineType: "joint",
      lineJointType: "linear",
      data: [],
      shape: "circle",
      hide: !1,
      isAnimationActive: !GQ.d.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "linear"
    }), BQ(QF, "getComposedData", (function(QQ) {
      var FQ = QQ.xAxis,
        wQ = QQ.yAxis,
        LQ = QQ.zAxis,
        qQ = QQ.item,
        oQ = QQ.displayedData,
        DQ = QQ.xAxisTicks,
        kQ = QQ.yAxisTicks,
        vQ = QQ.offset,
        mQ = qQ.props.tooltipType,
        HQ = (0, MQ.i)(qQ.props.children, UQ.d),
        bQ = uQ()(FQ.dataKey) ? qQ.props.dataKey : FQ.dataKey,
        YQ = uQ()(wQ.dataKey) ? qQ.props.dataKey : wQ.dataKey,
        xQ = LQ && LQ.dataKey,
        AQ = LQ ? LQ.range : sQ.defaultProps.range,
        tQ = AQ && AQ[0],
        eQ = FQ.scale.bandwidth ? FQ.scale.bandwidth() : 0,
        GQ = wQ.scale.bandwidth ? wQ.scale.bandwidth() : 0,
        pQ = oQ.map((function(QQ, oQ) {
          var vQ = (0, TQ.$)(QQ, bQ),
            AQ = (0, TQ.$)(QQ, YQ),
            MQ = !uQ()(xQ) && (0, TQ.$)(QQ, xQ) || "-",
            pQ = [{
              name: uQ()(FQ.dataKey) ? qQ.props.name : FQ.name || FQ.dataKey,
              unit: FQ.unit || "",
              value: vQ,
              payload: QQ,
              dataKey: bQ,
              type: mQ
            }, {
              name: uQ()(wQ.dataKey) ? qQ.props.name : wQ.name || wQ.dataKey,
              unit: wQ.unit || "",
              value: AQ,
              payload: QQ,
              dataKey: YQ,
              type: mQ
            }];
          "-" !== MQ && pQ.push({
            name: LQ.name || LQ.dataKey,
            unit: LQ.unit || "",
            value: MQ,
            payload: QQ,
            dataKey: xQ,
            type: mQ
          });
          var cQ = (0, TQ.C)({
              axis: FQ,
              ticks: DQ,
              bandSize: eQ,
              entry: QQ,
              index: oQ,
              dataKey: bQ
            }),
            CQ = (0, TQ.C)({
              axis: wQ,
              ticks: kQ,
              bandSize: GQ,
              entry: QQ,
              index: oQ,
              dataKey: YQ
            }),
            SQ = "-" !== MQ ? LQ.scale(MQ) : tQ,
            iQ = Math.sqrt(Math.max(SQ, 0) / Math.PI);
          return EQ(EQ({}, QQ), {}, {
            cx: cQ,
            cy: CQ,
            x: cQ - iQ,
            y: CQ - iQ,
            xAxis: FQ,
            yAxis: wQ,
            zAxis: LQ,
            width: 2 * iQ,
            height: 2 * iQ,
            size: SQ,
            node: {
              x: vQ,
              y: AQ,
              z: MQ
            },
            tooltipPayload: pQ,
            tooltipPosition: {
              x: cQ,
              y: CQ
            },
            payload: QQ
          }, HQ && HQ[oQ] && HQ[oQ].props)
        }));
      return EQ({
        points: pQ
      }, vQ)
    }));
    var FF = wQ(6218),
      wF = wQ(6238),
      LF = wQ(6066),
      qF = (0, LQ.d)({
        chartName: "ComposedChart",
        GraphicalChild: [DQ.c, qQ.e, oQ.c, QF],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: FF.e
        }, {
          axisType: "yAxis",
          AxisComp: wF.e
        }, {
          axisType: "zAxis",
          AxisComp: sQ
        }],
        formatAxisMap: LF.g
      })
  },
  5291: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => Xw
    });
    var LQ = wQ(53),
      qQ = wQ(5240),
      oQ = wQ.n(qQ),
      DQ = wQ(5095),
      kQ = wQ.n(DQ),
      vQ = wQ(5300),
      mQ = wQ.n(vQ),
      uQ = wQ(5021),
      HQ = wQ.n(uQ),
      bQ = wQ(5345),
      YQ = wQ.n(bQ),
      xQ = wQ(4916),
      AQ = wQ.n(xQ),
      tQ = wQ(4909),
      eQ = wQ(5787),
      MQ = wQ(5791),
      GQ = wQ(5800),
      pQ = wQ(5804),
      cQ = wQ(5887),
      CQ = wQ(5954),
      SQ = wQ(5956),
      iQ = wQ(5252),
      WQ = wQ(5982),
      RQ = wQ(5962),
      OQ = wQ(5974),
      sQ = wQ(5002);

    function rQ(QQ) {
      return rQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, rQ(QQ)
    }

    function IQ(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function UQ(QQ) {
      for (var FQ = 1; FQ < arguments.length; FQ++) {
        var wQ = null != arguments[FQ] ? arguments[FQ] : {};
        FQ % 2 ? IQ(Object(wQ), !0).forEach((function(FQ) {
          NQ(QQ, FQ, wQ[FQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : IQ(Object(wQ)).forEach((function(FQ) {
          Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
        }))
      }
      return QQ
    }

    function NQ(QQ, FQ, wQ) {
      return (FQ = function(QQ) {
        var FQ = function(QQ, FQ) {
          if ("object" != rQ(QQ) || !QQ) return QQ;
          var wQ = QQ[Symbol.toPrimitive];
          if (void 0 !== wQ) {
            var LQ = wQ.call(QQ, FQ || "default");
            if ("object" != rQ(LQ)) return LQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === FQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == rQ(FQ) ? FQ : FQ + ""
      }(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }
    var TQ = ["Webkit", "Moz", "O", "ms"];

    function KQ(QQ) {
      return KQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, KQ(QQ)
    }

    function zQ() {
      return zQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var FQ = 1; FQ < arguments.length; FQ++) {
          var wQ = arguments[FQ];
          for (var LQ in wQ) Object.prototype.hasOwnProperty.call(wQ, LQ) && (QQ[LQ] = wQ[LQ])
        }
        return QQ
      }, zQ.apply(this, arguments)
    }

    function lQ(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function jQ(QQ) {
      for (var FQ = 1; FQ < arguments.length; FQ++) {
        var wQ = null != arguments[FQ] ? arguments[FQ] : {};
        FQ % 2 ? lQ(Object(wQ), !0).forEach((function(FQ) {
          JQ(QQ, FQ, wQ[FQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : lQ(Object(wQ)).forEach((function(FQ) {
          Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
        }))
      }
      return QQ
    }

    function aQ(QQ, FQ) {
      for (var wQ = 0; wQ < FQ.length; wQ++) {
        var LQ = FQ[wQ];
        LQ.enumerable = LQ.enumerable || !1, LQ.configurable = !0, "value" in LQ && (LQ.writable = !0), Object.defineProperty(QQ, EQ(LQ.key), LQ)
      }
    }

    function XQ(QQ, FQ, wQ) {
      return FQ = VQ(FQ),
        function(QQ, FQ) {
          if (FQ && ("object" === KQ(FQ) || "function" === typeof FQ)) return FQ;
          if (void 0 !== FQ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(QQ) {
            if (void 0 === QQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return QQ
          }(QQ)
        }(QQ, fQ() ? Reflect.construct(FQ, wQ || [], VQ(QQ).constructor) : FQ.apply(QQ, wQ))
    }

    function fQ() {
      try {
        var QQ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (QQ) {}
      return (fQ = function() {
        return !!QQ
      })()
    }

    function VQ(QQ) {
      return VQ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(QQ) {
        return QQ.__proto__ || Object.getPrototypeOf(QQ)
      }, VQ(QQ)
    }

    function hQ(QQ, FQ) {
      return hQ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(QQ, FQ) {
        return QQ.__proto__ = FQ, QQ
      }, hQ(QQ, FQ)
    }

    function JQ(QQ, FQ, wQ) {
      return (FQ = EQ(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }

    function EQ(QQ) {
      var FQ = function(QQ, FQ) {
        if ("object" != KQ(QQ) || !QQ) return QQ;
        var wQ = QQ[Symbol.toPrimitive];
        if (void 0 !== wQ) {
          var LQ = wQ.call(QQ, FQ || "default");
          if ("object" != KQ(LQ)) return LQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === FQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == KQ(FQ) ? FQ : FQ + ""
    }
    var nQ = function(QQ) {
        return QQ.changedTouches && !!QQ.changedTouches.length
      },
      gQ = function(QQ) {
        function FQ(QQ) {
          var wQ;
          return function(QQ, FQ) {
            if (!(QQ instanceof FQ)) throw new TypeError("Cannot call a class as a function")
          }(this, FQ), JQ(wQ = XQ(this, FQ, [QQ]), "handleDrag", (function(QQ) {
            wQ.leaveTimer && (clearTimeout(wQ.leaveTimer), wQ.leaveTimer = null), wQ.state.isTravellerMoving ? wQ.handleTravellerMove(QQ) : wQ.state.isSlideMoving && wQ.handleSlideDrag(QQ)
          })), JQ(wQ, "handleTouchMove", (function(QQ) {
            null != QQ.changedTouches && QQ.changedTouches.length > 0 && wQ.handleDrag(QQ.changedTouches[0])
          })), JQ(wQ, "handleDragEnd", (function() {
            wQ.setState({
              isTravellerMoving: !1,
              isSlideMoving: !1
            }, (function() {
              var QQ = wQ.props,
                FQ = QQ.endIndex,
                LQ = QQ.onDragEnd,
                qQ = QQ.startIndex;
              null === LQ || void 0 === LQ || LQ({
                endIndex: FQ,
                startIndex: qQ
              })
            })), wQ.detachDragEndListener()
          })), JQ(wQ, "handleLeaveWrapper", (function() {
            (wQ.state.isTravellerMoving || wQ.state.isSlideMoving) && (wQ.leaveTimer = window.setTimeout(wQ.handleDragEnd, wQ.props.leaveTimeOut))
          })), JQ(wQ, "handleEnterSlideOrTraveller", (function() {
            wQ.setState({
              isTextActive: !0
            })
          })), JQ(wQ, "handleLeaveSlideOrTraveller", (function() {
            wQ.setState({
              isTextActive: !1
            })
          })), JQ(wQ, "handleSlideDragStart", (function(QQ) {
            var FQ = nQ(QQ) ? QQ.changedTouches[0] : QQ;
            wQ.setState({
              isTravellerMoving: !1,
              isSlideMoving: !0,
              slideMoveStartX: FQ.pageX
            }), wQ.attachDragEndListener()
          })), wQ.travellerDragStartHandlers = {
            startX: wQ.handleTravellerDragStart.bind(wQ, "startX"),
            endX: wQ.handleTravellerDragStart.bind(wQ, "endX")
          }, wQ.state = {}, wQ
        }
        return function(QQ, FQ) {
          if ("function" !== typeof FQ && null !== FQ) throw new TypeError("Super expression must either be null or a function");
          QQ.prototype = Object.create(FQ && FQ.prototype, {
            constructor: {
              value: QQ,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(QQ, "prototype", {
            writable: !1
          }), FQ && hQ(QQ, FQ)
        }(FQ, QQ), wQ = FQ, qQ = [{
          key: "componentWillUnmount",
          value: function() {
            this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener()
          }
        }, {
          key: "getIndex",
          value: function(QQ) {
            var wQ = QQ.startX,
              LQ = QQ.endX,
              qQ = this.state.scaleValues,
              oQ = this.props,
              DQ = oQ.gap,
              kQ = oQ.data.length - 1,
              vQ = Math.min(wQ, LQ),
              mQ = Math.max(wQ, LQ),
              uQ = FQ.getIndexInRange(qQ, vQ),
              HQ = FQ.getIndexInRange(qQ, mQ);
            return {
              startIndex: uQ - uQ % DQ,
              endIndex: HQ === kQ ? kQ : HQ - HQ % DQ
            }
          }
        }, {
          key: "getTextOfTick",
          value: function(QQ) {
            var FQ = this.props,
              wQ = FQ.data,
              LQ = FQ.tickFormatter,
              qQ = FQ.dataKey,
              oQ = (0, OQ.$)(wQ[QQ], qQ, QQ);
            return kQ()(LQ) ? LQ(oQ, QQ) : oQ
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
            var FQ = this.state,
              wQ = FQ.slideMoveStartX,
              LQ = FQ.startX,
              qQ = FQ.endX,
              oQ = this.props,
              DQ = oQ.x,
              kQ = oQ.width,
              vQ = oQ.travellerWidth,
              mQ = oQ.startIndex,
              uQ = oQ.endIndex,
              HQ = oQ.onChange,
              bQ = QQ.pageX - wQ;
            bQ > 0 ? bQ = Math.min(bQ, DQ + kQ - vQ - qQ, DQ + kQ - vQ - LQ) : bQ < 0 && (bQ = Math.max(bQ, DQ - LQ, DQ - qQ));
            var YQ = this.getIndex({
              startX: LQ + bQ,
              endX: qQ + bQ
            });
            YQ.startIndex === mQ && YQ.endIndex === uQ || !HQ || HQ(YQ), this.setState({
              startX: LQ + bQ,
              endX: qQ + bQ,
              slideMoveStartX: QQ.pageX
            })
          }
        }, {
          key: "handleTravellerDragStart",
          value: function(QQ, FQ) {
            var wQ = nQ(FQ) ? FQ.changedTouches[0] : FQ;
            this.setState({
              isSlideMoving: !1,
              isTravellerMoving: !0,
              movingTravellerId: QQ,
              brushMoveStartX: wQ.pageX
            }), this.attachDragEndListener()
          }
        }, {
          key: "handleTravellerMove",
          value: function(QQ) {
            var FQ = this.state,
              wQ = FQ.brushMoveStartX,
              LQ = FQ.movingTravellerId,
              qQ = FQ.endX,
              oQ = FQ.startX,
              DQ = this.state[LQ],
              kQ = this.props,
              vQ = kQ.x,
              mQ = kQ.width,
              uQ = kQ.travellerWidth,
              HQ = kQ.onChange,
              bQ = kQ.gap,
              YQ = kQ.data,
              xQ = {
                startX: this.state.startX,
                endX: this.state.endX
              },
              AQ = QQ.pageX - wQ;
            AQ > 0 ? AQ = Math.min(AQ, vQ + mQ - uQ - DQ) : AQ < 0 && (AQ = Math.max(AQ, vQ - DQ)), xQ[LQ] = DQ + AQ;
            var tQ = this.getIndex(xQ),
              eQ = tQ.startIndex,
              MQ = tQ.endIndex;
            this.setState(JQ(JQ({}, LQ, DQ + AQ), "brushMoveStartX", QQ.pageX), (function() {
              HQ && function() {
                var QQ = YQ.length - 1;
                return "startX" === LQ && (qQ > oQ ? eQ % bQ === 0 : MQ % bQ === 0) || qQ < oQ && MQ === QQ || "endX" === LQ && (qQ > oQ ? MQ % bQ === 0 : eQ % bQ === 0) || qQ > oQ && MQ === QQ
              }() && HQ(tQ)
            }))
          }
        }, {
          key: "handleTravellerMoveKeyboard",
          value: function(QQ, FQ) {
            var wQ = this,
              LQ = this.state,
              qQ = LQ.scaleValues,
              oQ = LQ.startX,
              DQ = LQ.endX,
              kQ = this.state[FQ],
              vQ = qQ.indexOf(kQ);
            if (-1 !== vQ) {
              var mQ = vQ + QQ;
              if (!(-1 === mQ || mQ >= qQ.length)) {
                var uQ = qQ[mQ];
                "startX" === FQ && uQ >= DQ || "endX" === FQ && uQ <= oQ || this.setState(JQ({}, FQ, uQ), (function() {
                  wQ.props.onChange(wQ.getIndex({
                    startX: wQ.state.startX,
                    endX: wQ.state.endX
                  }))
                }))
              }
            }
          }
        }, {
          key: "renderBackground",
          value: function() {
            var QQ = this.props,
              FQ = QQ.x,
              wQ = QQ.y,
              qQ = QQ.width,
              oQ = QQ.height,
              DQ = QQ.fill,
              kQ = QQ.stroke;
            return LQ.createElement("rect", {
              stroke: kQ,
              fill: DQ,
              x: FQ,
              y: wQ,
              width: qQ,
              height: oQ
            })
          }
        }, {
          key: "renderPanorama",
          value: function() {
            var QQ = this.props,
              FQ = QQ.x,
              wQ = QQ.y,
              qQ = QQ.width,
              oQ = QQ.height,
              DQ = QQ.data,
              kQ = QQ.children,
              vQ = QQ.padding,
              mQ = LQ.Children.only(kQ);
            return mQ ? LQ.cloneElement(mQ, {
              x: FQ,
              y: wQ,
              width: qQ,
              height: oQ,
              margin: vQ,
              compact: !0,
              data: DQ
            }) : null
          }
        }, {
          key: "renderTravellerLayer",
          value: function(QQ, wQ) {
            var qQ, oQ, DQ = this,
              kQ = this.props,
              vQ = kQ.y,
              mQ = kQ.travellerWidth,
              uQ = kQ.height,
              HQ = kQ.traveller,
              bQ = kQ.ariaLabel,
              YQ = kQ.data,
              xQ = kQ.startIndex,
              AQ = kQ.endIndex,
              tQ = Math.max(QQ, this.props.x),
              eQ = jQ(jQ({}, (0, iQ.e)(this.props, !1)), {}, {
                x: tQ,
                y: vQ,
                width: mQ,
                height: uQ
              }),
              MQ = bQ || "Min value: ".concat(null === (qQ = YQ[xQ]) || void 0 === qQ ? void 0 : qQ.name, ", Max value: ").concat(null === (oQ = YQ[AQ]) || void 0 === oQ ? void 0 : oQ.name);
            return LQ.createElement(GQ.e, {
              tabIndex: 0,
              role: "slider",
              "aria-label": MQ,
              "aria-valuenow": QQ,
              className: "recharts-brush-traveller",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.travellerDragStartHandlers[wQ],
              onTouchStart: this.travellerDragStartHandlers[wQ],
              onKeyDown: function(QQ) {
                ["ArrowLeft", "ArrowRight"].includes(QQ.key) && (QQ.preventDefault(), QQ.stopPropagation(), DQ.handleTravellerMoveKeyboard("ArrowRight" === QQ.key ? 1 : -1, wQ))
              },
              onFocus: function() {
                DQ.setState({
                  isTravellerFocused: !0
                })
              },
              onBlur: function() {
                DQ.setState({
                  isTravellerFocused: !1
                })
              },
              style: {
                cursor: "col-resize"
              }
            }, FQ.renderTraveller(HQ, eQ))
          }
        }, {
          key: "renderSlide",
          value: function(QQ, FQ) {
            var wQ = this.props,
              qQ = wQ.y,
              oQ = wQ.height,
              DQ = wQ.stroke,
              kQ = wQ.travellerWidth,
              vQ = Math.min(QQ, FQ) + kQ,
              mQ = Math.max(Math.abs(FQ - QQ) - kQ, 0);
            return LQ.createElement("rect", {
              className: "recharts-brush-slide",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.handleSlideDragStart,
              onTouchStart: this.handleSlideDragStart,
              style: {
                cursor: "move"
              },
              stroke: "none",
              fill: DQ,
              fillOpacity: .2,
              x: vQ,
              y: qQ,
              width: mQ,
              height: oQ
            })
          }
        }, {
          key: "renderText",
          value: function() {
            var QQ = this.props,
              FQ = QQ.startIndex,
              wQ = QQ.endIndex,
              qQ = QQ.y,
              oQ = QQ.height,
              DQ = QQ.travellerWidth,
              kQ = QQ.stroke,
              vQ = this.state,
              mQ = vQ.startX,
              uQ = vQ.endX,
              HQ = {
                pointerEvents: "none",
                fill: kQ
              };
            return LQ.createElement(GQ.e, {
              className: "recharts-brush-texts"
            }, LQ.createElement(RQ.e, zQ({
              textAnchor: "end",
              verticalAnchor: "middle",
              x: Math.min(mQ, uQ) - 5,
              y: qQ + oQ / 2
            }, HQ), this.getTextOfTick(FQ)), LQ.createElement(RQ.e, zQ({
              textAnchor: "start",
              verticalAnchor: "middle",
              x: Math.max(mQ, uQ) + DQ + 5,
              y: qQ + oQ / 2
            }, HQ), this.getTextOfTick(wQ)))
          }
        }, {
          key: "render",
          value: function() {
            var QQ = this.props,
              FQ = QQ.data,
              wQ = QQ.className,
              qQ = QQ.children,
              oQ = QQ.x,
              DQ = QQ.y,
              kQ = QQ.width,
              vQ = QQ.height,
              mQ = QQ.alwaysShowText,
              uQ = this.state,
              HQ = uQ.startX,
              bQ = uQ.endX,
              YQ = uQ.isTextActive,
              xQ = uQ.isSlideMoving,
              AQ = uQ.isTravellerMoving,
              eQ = uQ.isTravellerFocused;
            if (!FQ || !FQ.length || !(0, sQ.t)(oQ) || !(0, sQ.t)(DQ) || !(0, sQ.t)(kQ) || !(0, sQ.t)(vQ) || kQ <= 0 || vQ <= 0) return null;
            var MQ = (0, tQ.b)("recharts-brush", wQ),
              pQ = 1 === LQ.Children.count(qQ),
              cQ = function(QQ, FQ) {
                if (!QQ) return null;
                var wQ = QQ.replace(/(\w)/, (function(QQ) {
                    return QQ.toUpperCase()
                  })),
                  LQ = TQ.reduce((function(QQ, LQ) {
                    return UQ(UQ({}, QQ), {}, NQ({}, LQ + wQ, FQ))
                  }), {});
                return LQ[QQ] = FQ, LQ
              }("userSelect", "none");
            return LQ.createElement(GQ.e, {
              className: MQ,
              onMouseLeave: this.handleLeaveWrapper,
              onTouchMove: this.handleTouchMove,
              style: cQ
            }, this.renderBackground(), pQ && this.renderPanorama(), this.renderSlide(HQ, bQ), this.renderTravellerLayer(HQ, "startX"), this.renderTravellerLayer(bQ, "endX"), (YQ || xQ || AQ || eQ || mQ) && this.renderText())
          }
        }], oQ = [{
          key: "renderDefaultTraveller",
          value: function(QQ) {
            var FQ = QQ.x,
              wQ = QQ.y,
              qQ = QQ.width,
              oQ = QQ.height,
              DQ = QQ.stroke,
              kQ = Math.floor(wQ + oQ / 2) - 1;
            return LQ.createElement(LQ.Fragment, null, LQ.createElement("rect", {
              x: FQ,
              y: wQ,
              width: qQ,
              height: oQ,
              fill: DQ,
              stroke: "none"
            }), LQ.createElement("line", {
              x1: FQ + 1,
              y1: kQ,
              x2: FQ + qQ - 1,
              y2: kQ,
              fill: "none",
              stroke: "#fff"
            }), LQ.createElement("line", {
              x1: FQ + 1,
              y1: kQ + 2,
              x2: FQ + qQ - 1,
              y2: kQ + 2,
              fill: "none",
              stroke: "#fff"
            }))
          }
        }, {
          key: "renderTraveller",
          value: function(QQ, wQ) {
            return LQ.isValidElement(QQ) ? LQ.cloneElement(QQ, wQ) : kQ()(QQ) ? QQ(wQ) : FQ.renderDefaultTraveller(wQ)
          }
        }, {
          key: "getDerivedStateFromProps",
          value: function(QQ, FQ) {
            var wQ = QQ.data,
              LQ = QQ.width,
              qQ = QQ.x,
              oQ = QQ.travellerWidth,
              DQ = QQ.updateId,
              kQ = QQ.startIndex,
              vQ = QQ.endIndex;
            if (wQ !== FQ.prevData || DQ !== FQ.prevUpdateId) return jQ({
              prevData: wQ,
              prevTravellerWidth: oQ,
              prevUpdateId: DQ,
              prevX: qQ,
              prevWidth: LQ
            }, wQ && wQ.length ? function(QQ) {
              var FQ = QQ.data,
                wQ = QQ.startIndex,
                LQ = QQ.endIndex,
                qQ = QQ.x,
                oQ = QQ.width,
                DQ = QQ.travellerWidth;
              if (!FQ || !FQ.length) return {};
              var kQ = FQ.length,
                vQ = (0, WQ.e)().domain(mQ()(0, kQ)).range([qQ, qQ + oQ - DQ]),
                uQ = vQ.domain().map((function(QQ) {
                  return vQ(QQ)
                }));
              return {
                isTextActive: !1,
                isSlideMoving: !1,
                isTravellerMoving: !1,
                isTravellerFocused: !1,
                startX: vQ(wQ),
                endX: vQ(LQ),
                scale: vQ,
                scaleValues: uQ
              }
            }({
              data: wQ,
              width: LQ,
              x: qQ,
              travellerWidth: oQ,
              startIndex: kQ,
              endIndex: vQ
            }) : {
              scale: null,
              scaleValues: null
            });
            if (FQ.scale && (LQ !== FQ.prevWidth || qQ !== FQ.prevX || oQ !== FQ.prevTravellerWidth)) {
              FQ.scale.range([qQ, qQ + LQ - oQ]);
              var uQ = FQ.scale.domain().map((function(QQ) {
                return FQ.scale(QQ)
              }));
              return {
                prevData: wQ,
                prevTravellerWidth: oQ,
                prevUpdateId: DQ,
                prevX: qQ,
                prevWidth: LQ,
                startX: FQ.scale(QQ.startIndex),
                endX: FQ.scale(QQ.endIndex),
                scaleValues: uQ
              }
            }
            return null
          }
        }, {
          key: "getIndexInRange",
          value: function(QQ, FQ) {
            for (var wQ = 0, LQ = QQ.length - 1; LQ - wQ > 1;) {
              var qQ = Math.floor((wQ + LQ) / 2);
              QQ[qQ] > FQ ? LQ = qQ : wQ = qQ
            }
            return FQ >= QQ[LQ] ? LQ : wQ
          }
        }], qQ && aQ(wQ.prototype, qQ), oQ && aQ(wQ, oQ), Object.defineProperty(wQ, "prototype", {
          writable: !1
        }), wQ;
        var wQ, qQ, oQ
      }(LQ.PureComponent);
    JQ(gQ, "displayName", "Brush"), JQ(gQ, "defaultProps", {
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
    var PQ = wQ(5967),
      ZQ = wQ(6044),
      yQ = wQ(6052),
      BQ = wQ(6063),
      dQ = wQ(6066),
      QF = wQ(5243);

    function FF() {
      return FF = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var FQ = 1; FQ < arguments.length; FQ++) {
          var wQ = arguments[FQ];
          for (var LQ in wQ) Object.prototype.hasOwnProperty.call(wQ, LQ) && (QQ[LQ] = wQ[LQ])
        }
        return QQ
      }, FF.apply(this, arguments)
    }

    function wF(QQ) {
      return wF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, wF(QQ)
    }

    function LF(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function qF(QQ) {
      for (var FQ = 1; FQ < arguments.length; FQ++) {
        var wQ = null != arguments[FQ] ? arguments[FQ] : {};
        FQ % 2 ? LF(Object(wQ), !0).forEach((function(FQ) {
          uF(QQ, FQ, wQ[FQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : LF(Object(wQ)).forEach((function(FQ) {
          Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
        }))
      }
      return QQ
    }

    function oF(QQ, FQ) {
      for (var wQ = 0; wQ < FQ.length; wQ++) {
        var LQ = FQ[wQ];
        LQ.enumerable = LQ.enumerable || !1, LQ.configurable = !0, "value" in LQ && (LQ.writable = !0), Object.defineProperty(QQ, HF(LQ.key), LQ)
      }
    }

    function DF(QQ, FQ, wQ) {
      return FQ = vF(FQ),
        function(QQ, FQ) {
          if (FQ && ("object" === wF(FQ) || "function" === typeof FQ)) return FQ;
          if (void 0 !== FQ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(QQ) {
            if (void 0 === QQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return QQ
          }(QQ)
        }(QQ, kF() ? Reflect.construct(FQ, wQ || [], vF(QQ).constructor) : FQ.apply(QQ, wQ))
    }

    function kF() {
      try {
        var QQ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (QQ) {}
      return (kF = function() {
        return !!QQ
      })()
    }

    function vF(QQ) {
      return vF = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(QQ) {
        return QQ.__proto__ || Object.getPrototypeOf(QQ)
      }, vF(QQ)
    }

    function mF(QQ, FQ) {
      return mF = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(QQ, FQ) {
        return QQ.__proto__ = FQ, QQ
      }, mF(QQ, FQ)
    }

    function uF(QQ, FQ, wQ) {
      return (FQ = HF(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }

    function HF(QQ) {
      var FQ = function(QQ, FQ) {
        if ("object" != wF(QQ) || !QQ) return QQ;
        var wQ = QQ[Symbol.toPrimitive];
        if (void 0 !== wQ) {
          var LQ = wQ.call(QQ, FQ || "default");
          if ("object" != wF(LQ)) return LQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === FQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == wF(FQ) ? FQ : FQ + ""
    }
    var bF = function(QQ) {
      function FQ() {
        return function(QQ, FQ) {
          if (!(QQ instanceof FQ)) throw new TypeError("Cannot call a class as a function")
        }(this, FQ), DF(this, FQ, arguments)
      }
      return function(QQ, FQ) {
        if ("function" !== typeof FQ && null !== FQ) throw new TypeError("Super expression must either be null or a function");
        QQ.prototype = Object.create(FQ && FQ.prototype, {
          constructor: {
            value: QQ,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(QQ, "prototype", {
          writable: !1
        }), FQ && mF(QQ, FQ)
      }(FQ, QQ), wQ = FQ, (qQ = [{
        key: "render",
        value: function() {
          var QQ = this.props,
            wQ = QQ.x,
            qQ = QQ.y,
            oQ = QQ.r,
            DQ = QQ.alwaysShow,
            kQ = QQ.clipPathId,
            vQ = (0, sQ.s)(wQ),
            mQ = (0, sQ.s)(qQ);
          if ((0, QF.c)(void 0 === DQ, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !vQ || !mQ) return null;
          var uQ = function(QQ) {
            var FQ = QQ.x,
              wQ = QQ.y,
              LQ = QQ.xAxis,
              qQ = QQ.yAxis,
              oQ = (0, dQ.e)({
                x: LQ.scale,
                y: qQ.scale
              }),
              DQ = oQ.apply({
                x: FQ,
                y: wQ
              }, {
                bandAware: !0
              });
            return (0, BQ.c)(QQ, "discard") && !oQ.isInRange(DQ) ? null : DQ
          }(this.props);
          if (!uQ) return null;
          var HQ = uQ.x,
            bQ = uQ.y,
            YQ = this.props,
            xQ = YQ.shape,
            AQ = YQ.className,
            eQ = qF(qF({
              clipPath: (0, BQ.c)(this.props, "hidden") ? "url(#".concat(kQ, ")") : void 0
            }, (0, iQ.e)(this.props, !0)), {}, {
              cx: HQ,
              cy: bQ
            });
          return LQ.createElement(GQ.e, {
            className: (0, tQ.b)("recharts-reference-dot", AQ)
          }, FQ.renderDot(xQ, eQ), yQ.b.renderCallByParent(this.props, {
            x: HQ - oQ,
            y: bQ - oQ,
            width: 2 * oQ,
            height: 2 * oQ
          }))
        }
      }]) && oF(wQ.prototype, qQ), oQ && oF(wQ, oQ), Object.defineProperty(wQ, "prototype", {
        writable: !1
      }), wQ;
      var wQ, qQ, oQ
    }(LQ.Component);
    uF(bF, "displayName", "ReferenceDot"), uF(bF, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#fff",
      stroke: "#ccc",
      fillOpacity: 1,
      strokeWidth: 1
    }), uF(bF, "renderDot", (function(QQ, FQ) {
      return LQ.isValidElement(QQ) ? LQ.cloneElement(QQ, FQ) : kQ()(QQ) ? QQ(FQ) : LQ.createElement(CQ.d, FF({}, FQ, {
        cx: FQ.cx,
        cy: FQ.cy,
        className: "recharts-reference-dot-dot"
      }))
    }));
    var YF = wQ(6164);

    function xF() {
      return xF = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var FQ = 1; FQ < arguments.length; FQ++) {
          var wQ = arguments[FQ];
          for (var LQ in wQ) Object.prototype.hasOwnProperty.call(wQ, LQ) && (QQ[LQ] = wQ[LQ])
        }
        return QQ
      }, xF.apply(this, arguments)
    }

    function AF(QQ) {
      return AF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, AF(QQ)
    }

    function tF(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function eF(QQ) {
      for (var FQ = 1; FQ < arguments.length; FQ++) {
        var wQ = null != arguments[FQ] ? arguments[FQ] : {};
        FQ % 2 ? tF(Object(wQ), !0).forEach((function(FQ) {
          SF(QQ, FQ, wQ[FQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : tF(Object(wQ)).forEach((function(FQ) {
          Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
        }))
      }
      return QQ
    }

    function MF(QQ, FQ) {
      for (var wQ = 0; wQ < FQ.length; wQ++) {
        var LQ = FQ[wQ];
        LQ.enumerable = LQ.enumerable || !1, LQ.configurable = !0, "value" in LQ && (LQ.writable = !0), Object.defineProperty(QQ, iF(LQ.key), LQ)
      }
    }

    function GF(QQ, FQ, wQ) {
      return FQ = cF(FQ),
        function(QQ, FQ) {
          if (FQ && ("object" === AF(FQ) || "function" === typeof FQ)) return FQ;
          if (void 0 !== FQ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(QQ) {
            if (void 0 === QQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return QQ
          }(QQ)
        }(QQ, pF() ? Reflect.construct(FQ, wQ || [], cF(QQ).constructor) : FQ.apply(QQ, wQ))
    }

    function pF() {
      try {
        var QQ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (QQ) {}
      return (pF = function() {
        return !!QQ
      })()
    }

    function cF(QQ) {
      return cF = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(QQ) {
        return QQ.__proto__ || Object.getPrototypeOf(QQ)
      }, cF(QQ)
    }

    function CF(QQ, FQ) {
      return CF = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(QQ, FQ) {
        return QQ.__proto__ = FQ, QQ
      }, CF(QQ, FQ)
    }

    function SF(QQ, FQ, wQ) {
      return (FQ = iF(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }

    function iF(QQ) {
      var FQ = function(QQ, FQ) {
        if ("object" != AF(QQ) || !QQ) return QQ;
        var wQ = QQ[Symbol.toPrimitive];
        if (void 0 !== wQ) {
          var LQ = wQ.call(QQ, FQ || "default");
          if ("object" != AF(LQ)) return LQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === FQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == AF(FQ) ? FQ : FQ + ""
    }
    var WF = function(QQ) {
      function FQ() {
        return function(QQ, FQ) {
          if (!(QQ instanceof FQ)) throw new TypeError("Cannot call a class as a function")
        }(this, FQ), GF(this, FQ, arguments)
      }
      return function(QQ, FQ) {
        if ("function" !== typeof FQ && null !== FQ) throw new TypeError("Super expression must either be null or a function");
        QQ.prototype = Object.create(FQ && FQ.prototype, {
          constructor: {
            value: QQ,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(QQ, "prototype", {
          writable: !1
        }), FQ && CF(QQ, FQ)
      }(FQ, QQ), wQ = FQ, (qQ = [{
        key: "render",
        value: function() {
          var QQ = this.props,
            wQ = QQ.x1,
            qQ = QQ.x2,
            oQ = QQ.y1,
            DQ = QQ.y2,
            kQ = QQ.className,
            vQ = QQ.alwaysShow,
            mQ = QQ.clipPathId;
          (0, QF.c)(void 0 === vQ, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
          var uQ = (0, sQ.s)(wQ),
            HQ = (0, sQ.s)(qQ),
            bQ = (0, sQ.s)(oQ),
            YQ = (0, sQ.s)(DQ),
            xQ = this.props.shape;
          if (!uQ && !HQ && !bQ && !YQ && !xQ) return null;
          var AQ = function(QQ, FQ, wQ, LQ, qQ) {
            var oQ = qQ.x1,
              DQ = qQ.x2,
              kQ = qQ.y1,
              vQ = qQ.y2,
              mQ = qQ.xAxis,
              uQ = qQ.yAxis;
            if (!mQ || !uQ) return null;
            var HQ = (0, dQ.e)({
                x: mQ.scale,
                y: uQ.scale
              }),
              bQ = {
                x: QQ ? HQ.x.apply(oQ, {
                  position: "start"
                }) : HQ.x.rangeMin,
                y: wQ ? HQ.y.apply(kQ, {
                  position: "start"
                }) : HQ.y.rangeMin
              },
              YQ = {
                x: FQ ? HQ.x.apply(DQ, {
                  position: "end"
                }) : HQ.x.rangeMax,
                y: LQ ? HQ.y.apply(vQ, {
                  position: "end"
                }) : HQ.y.rangeMax
              };
            return !(0, BQ.c)(qQ, "discard") || HQ.isInRange(bQ) && HQ.isInRange(YQ) ? (0, dQ.m)(bQ, YQ) : null
          }(uQ, HQ, bQ, YQ, this.props);
          if (!AQ && !xQ) return null;
          var eQ = (0, BQ.c)(this.props, "hidden") ? "url(#".concat(mQ, ")") : void 0;
          return LQ.createElement(GQ.e, {
            className: (0, tQ.b)("recharts-reference-area", kQ)
          }, FQ.renderRect(xQ, eF(eF({
            clipPath: eQ
          }, (0, iQ.e)(this.props, !0)), AQ)), yQ.b.renderCallByParent(this.props, AQ))
        }
      }]) && MF(wQ.prototype, qQ), oQ && MF(wQ, oQ), Object.defineProperty(wQ, "prototype", {
        writable: !1
      }), wQ;
      var wQ, qQ, oQ
    }(LQ.Component);

    function RF(QQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return OF(QQ)
      }(QQ) || function(QQ) {
        if ("undefined" !== typeof Symbol && null != QQ[Symbol.iterator] || null != QQ["@@iterator"]) return Array.from(QQ)
      }(QQ) || function(QQ, FQ) {
        if (!QQ) return;
        if ("string" === typeof QQ) return OF(QQ, FQ);
        var wQ = Object.prototype.toString.call(QQ).slice(8, -1);
        "Object" === wQ && QQ.constructor && (wQ = QQ.constructor.name);
        if ("Map" === wQ || "Set" === wQ) return Array.from(QQ);
        if ("Arguments" === wQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wQ)) return OF(QQ, FQ)
      }(QQ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function OF(QQ, FQ) {
      (null == FQ || FQ > QQ.length) && (FQ = QQ.length);
      for (var wQ = 0, LQ = new Array(FQ); wQ < FQ; wQ++) LQ[wQ] = QQ[wQ];
      return LQ
    }
    SF(WF, "displayName", "ReferenceArea"), SF(WF, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#ccc",
      fillOpacity: .5,
      stroke: "none",
      strokeWidth: 1
    }), SF(WF, "renderRect", (function(QQ, FQ) {
      return LQ.isValidElement(QQ) ? LQ.cloneElement(QQ, FQ) : kQ()(QQ) ? QQ(FQ) : LQ.createElement(SQ.d, xF({}, FQ, {
        className: "recharts-reference-area-rect"
      }))
    }));
    var sF = function(QQ, FQ, wQ, LQ, qQ) {
        var oQ = (0, iQ.i)(QQ, YF.d),
          DQ = (0, iQ.i)(QQ, bF),
          kQ = [].concat(RF(oQ), RF(DQ)),
          vQ = (0, iQ.i)(QQ, WF),
          mQ = "".concat(LQ, "Id"),
          uQ = LQ[0],
          HQ = FQ;
        if (kQ.length && (HQ = kQ.reduce((function(QQ, FQ) {
            if (FQ.props[mQ] === wQ && (0, BQ.c)(FQ.props, "extendDomain") && (0, sQ.t)(FQ.props[uQ])) {
              var LQ = FQ.props[uQ];
              return [Math.min(QQ[0], LQ), Math.max(QQ[1], LQ)]
            }
            return QQ
          }), HQ)), vQ.length) {
          var bQ = "".concat(uQ, "1"),
            YQ = "".concat(uQ, "2");
          HQ = vQ.reduce((function(QQ, FQ) {
            if (FQ.props[mQ] === wQ && (0, BQ.c)(FQ.props, "extendDomain") && (0, sQ.t)(FQ.props[bQ]) && (0, sQ.t)(FQ.props[YQ])) {
              var LQ = FQ.props[bQ],
                qQ = FQ.props[YQ];
              return [Math.min(QQ[0], LQ, qQ), Math.max(QQ[1], LQ, qQ)]
            }
            return QQ
          }), HQ)
        }
        return qQ && qQ.length && (HQ = qQ.reduce((function(QQ, FQ) {
          return (0, sQ.t)(FQ) ? [Math.min(QQ[0], FQ), Math.max(QQ[1], FQ)] : QQ
        }), HQ)), HQ
      },
      rF = wQ(6061),
      IF = wQ(5269),
      UF = wQ(25),
      NF = new(wQ.n(UF)()),
      TF = "recharts.syncMouseEvents",
      KF = wQ(5277);

    function zF(QQ) {
      return zF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, zF(QQ)
    }

    function lF(QQ, FQ) {
      for (var wQ = 0; wQ < FQ.length; wQ++) {
        var LQ = FQ[wQ];
        LQ.enumerable = LQ.enumerable || !1, LQ.configurable = !0, "value" in LQ && (LQ.writable = !0), Object.defineProperty(QQ, aF(LQ.key), LQ)
      }
    }

    function jF(QQ, FQ, wQ) {
      return (FQ = aF(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }

    function aF(QQ) {
      var FQ = function(QQ, FQ) {
        if ("object" != zF(QQ) || !QQ) return QQ;
        var wQ = QQ[Symbol.toPrimitive];
        if (void 0 !== wQ) {
          var LQ = wQ.call(QQ, FQ || "default");
          if ("object" != zF(LQ)) return LQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === FQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == zF(FQ) ? FQ : FQ + ""
    }
    var XF = function() {
      return QQ = function QQ() {
        ! function(QQ, FQ) {
          if (!(QQ instanceof FQ)) throw new TypeError("Cannot call a class as a function")
        }(this, QQ), jF(this, "activeIndex", 0), jF(this, "coordinateList", []), jF(this, "layout", "horizontal")
      }, (FQ = [{
        key: "setDetails",
        value: function(QQ) {
          var FQ, wQ = QQ.coordinateList,
            LQ = void 0 === wQ ? null : wQ,
            qQ = QQ.container,
            oQ = void 0 === qQ ? null : qQ,
            DQ = QQ.layout,
            kQ = void 0 === DQ ? null : DQ,
            vQ = QQ.offset,
            mQ = void 0 === vQ ? null : vQ,
            uQ = QQ.mouseHandlerCallback,
            HQ = void 0 === uQ ? null : uQ;
          this.coordinateList = null !== (FQ = null !== LQ && void 0 !== LQ ? LQ : this.coordinateList) && void 0 !== FQ ? FQ : [], this.container = null !== oQ && void 0 !== oQ ? oQ : this.container, this.layout = null !== kQ && void 0 !== kQ ? kQ : this.layout, this.offset = null !== mQ && void 0 !== mQ ? mQ : this.offset, this.mouseHandlerCallback = null !== HQ && void 0 !== HQ ? HQ : this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1)
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
          var QQ, FQ;
          if ("horizontal" === this.layout && 0 !== this.coordinateList.length) {
            var wQ = this.container.getBoundingClientRect(),
              LQ = wQ.x,
              qQ = wQ.y,
              oQ = wQ.height,
              DQ = this.coordinateList[this.activeIndex].coordinate,
              kQ = (null === (QQ = window) || void 0 === QQ ? void 0 : QQ.scrollX) || 0,
              vQ = (null === (FQ = window) || void 0 === FQ ? void 0 : FQ.scrollY) || 0,
              mQ = LQ + DQ + kQ,
              uQ = qQ + this.offset.top + oQ / 2 + vQ;
            this.mouseHandlerCallback({
              pageX: mQ,
              pageY: uQ
            })
          }
        }
      }]) && lF(QQ.prototype, FQ), wQ && lF(QQ, wQ), Object.defineProperty(QQ, "prototype", {
        writable: !1
      }), QQ;
      var QQ, FQ, wQ
    }();
    var fF = wQ(6130),
      VF = wQ(6200);

    function hF(QQ) {
      return hF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, hF(QQ)
    }
    var JF = ["x", "y", "top", "left", "width", "height", "className"];

    function EF() {
      return EF = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var FQ = 1; FQ < arguments.length; FQ++) {
          var wQ = arguments[FQ];
          for (var LQ in wQ) Object.prototype.hasOwnProperty.call(wQ, LQ) && (QQ[LQ] = wQ[LQ])
        }
        return QQ
      }, EF.apply(this, arguments)
    }

    function nF(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function gF(QQ, FQ, wQ) {
      return (FQ = function(QQ) {
        var FQ = function(QQ, FQ) {
          if ("object" != hF(QQ) || !QQ) return QQ;
          var wQ = QQ[Symbol.toPrimitive];
          if (void 0 !== wQ) {
            var LQ = wQ.call(QQ, FQ || "default");
            if ("object" != hF(LQ)) return LQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === FQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == hF(FQ) ? FQ : FQ + ""
      }(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }

    function PF(QQ, FQ) {
      if (null == QQ) return {};
      var wQ, LQ, qQ = function(QQ, FQ) {
        if (null == QQ) return {};
        var wQ = {};
        for (var LQ in QQ)
          if (Object.prototype.hasOwnProperty.call(QQ, LQ)) {
            if (FQ.indexOf(LQ) >= 0) continue;
            wQ[LQ] = QQ[LQ]
          } return wQ
      }(QQ, FQ);
      if (Object.getOwnPropertySymbols) {
        var oQ = Object.getOwnPropertySymbols(QQ);
        for (LQ = 0; LQ < oQ.length; LQ++) wQ = oQ[LQ], FQ.indexOf(wQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, wQ) && (qQ[wQ] = QQ[wQ])
      }
      return qQ
    }
    var ZF = function(QQ, FQ, wQ, LQ, qQ, oQ) {
        return "M".concat(QQ, ",").concat(qQ, "v").concat(LQ, "M").concat(oQ, ",").concat(FQ, "h").concat(wQ)
      },
      yF = function(QQ) {
        var FQ = QQ.x,
          wQ = void 0 === FQ ? 0 : FQ,
          qQ = QQ.y,
          oQ = void 0 === qQ ? 0 : qQ,
          DQ = QQ.top,
          kQ = void 0 === DQ ? 0 : DQ,
          vQ = QQ.left,
          mQ = void 0 === vQ ? 0 : vQ,
          uQ = QQ.width,
          HQ = void 0 === uQ ? 0 : uQ,
          bQ = QQ.height,
          YQ = void 0 === bQ ? 0 : bQ,
          xQ = QQ.className,
          AQ = function(QQ) {
            for (var FQ = 1; FQ < arguments.length; FQ++) {
              var wQ = null != arguments[FQ] ? arguments[FQ] : {};
              FQ % 2 ? nF(Object(wQ), !0).forEach((function(FQ) {
                gF(QQ, FQ, wQ[FQ])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : nF(Object(wQ)).forEach((function(FQ) {
                Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
              }))
            }
            return QQ
          }({
            x: wQ,
            y: oQ,
            top: kQ,
            left: mQ,
            width: HQ,
            height: YQ
          }, PF(QQ, JF));
        return (0, sQ.t)(wQ) && (0, sQ.t)(oQ) && (0, sQ.t)(HQ) && (0, sQ.t)(YQ) && (0, sQ.t)(kQ) && (0, sQ.t)(mQ) ? LQ.createElement("path", EF({}, (0, iQ.e)(AQ, !0), {
          className: (0, tQ.b)("recharts-cross", xQ),
          d: ZF(wQ, oQ, HQ, YQ, kQ, mQ)
        })) : null
      };

    function BF(QQ) {
      var FQ = QQ.cx,
        wQ = QQ.cy,
        LQ = QQ.radius,
        qQ = QQ.startAngle,
        oQ = QQ.endAngle;
      return {
        points: [(0, rF.m)(FQ, wQ, LQ, qQ), (0, rF.m)(FQ, wQ, LQ, oQ)],
        cx: FQ,
        cy: wQ,
        radius: LQ,
        startAngle: qQ,
        endAngle: oQ
      }
    }
    var dF = wQ(6158);

    function Qw(QQ, FQ, wQ) {
      var LQ, qQ, oQ, DQ;
      if ("horizontal" === QQ) oQ = LQ = FQ.x, qQ = wQ.top, DQ = wQ.top + wQ.height;
      else if ("vertical" === QQ) DQ = qQ = FQ.y, LQ = wQ.left, oQ = wQ.left + wQ.width;
      else if (null != FQ.cx && null != FQ.cy) {
        if ("centric" !== QQ) return BF(FQ);
        var kQ = FQ.cx,
          vQ = FQ.cy,
          mQ = FQ.innerRadius,
          uQ = FQ.outerRadius,
          HQ = FQ.angle,
          bQ = (0, rF.m)(kQ, vQ, mQ, HQ),
          YQ = (0, rF.m)(kQ, vQ, uQ, HQ);
        LQ = bQ.x, qQ = bQ.y, oQ = YQ.x, DQ = YQ.y
      }
      return [{
        x: LQ,
        y: qQ
      }, {
        x: oQ,
        y: DQ
      }]
    }

    function Fw(QQ) {
      return Fw = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, Fw(QQ)
    }

    function ww(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function Lw(QQ) {
      for (var FQ = 1; FQ < arguments.length; FQ++) {
        var wQ = null != arguments[FQ] ? arguments[FQ] : {};
        FQ % 2 ? ww(Object(wQ), !0).forEach((function(FQ) {
          qw(QQ, FQ, wQ[FQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : ww(Object(wQ)).forEach((function(FQ) {
          Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
        }))
      }
      return QQ
    }

    function qw(QQ, FQ, wQ) {
      return (FQ = function(QQ) {
        var FQ = function(QQ, FQ) {
          if ("object" != Fw(QQ) || !QQ) return QQ;
          var wQ = QQ[Symbol.toPrimitive];
          if (void 0 !== wQ) {
            var LQ = wQ.call(QQ, FQ || "default");
            if ("object" != Fw(LQ)) return LQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === FQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == Fw(FQ) ? FQ : FQ + ""
      }(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }

    function ow(QQ) {
      var FQ, wQ, qQ, oQ = QQ.element,
        DQ = QQ.tooltipEventType,
        kQ = QQ.isActive,
        vQ = QQ.activeCoordinate,
        mQ = QQ.activePayload,
        uQ = QQ.offset,
        HQ = QQ.activeTooltipIndex,
        bQ = QQ.tooltipAxisBandSize,
        YQ = QQ.layout,
        xQ = QQ.chartName,
        AQ = null !== (FQ = oQ.props.cursor) && void 0 !== FQ ? FQ : null === (wQ = oQ.type.defaultProps) || void 0 === wQ ? void 0 : wQ.cursor;
      if (!oQ || !AQ || !kQ || !vQ || "ScatterChart" !== xQ && "axis" !== DQ) return null;
      var eQ = VF.c;
      if ("ScatterChart" === xQ) qQ = vQ, eQ = yF;
      else if ("BarChart" === xQ) qQ = function(QQ, FQ, wQ, LQ) {
        var qQ = LQ / 2;
        return {
          stroke: "none",
          fill: "#ccc",
          x: "horizontal" === QQ ? FQ.x - qQ : wQ.left + .5,
          y: "horizontal" === QQ ? wQ.top + .5 : FQ.y - qQ,
          width: "horizontal" === QQ ? LQ : wQ.width - 1,
          height: "horizontal" === QQ ? wQ.height - 1 : LQ
        }
      }(YQ, vQ, uQ, bQ), eQ = SQ.d;
      else if ("radial" === YQ) {
        var MQ = BF(vQ),
          GQ = MQ.cx,
          pQ = MQ.cy,
          cQ = MQ.radius;
        qQ = {
          cx: GQ,
          cy: pQ,
          startAngle: MQ.startAngle,
          endAngle: MQ.endAngle,
          innerRadius: cQ,
          outerRadius: cQ
        }, eQ = dF.e
      } else qQ = {
        points: Qw(YQ, vQ, uQ)
      }, eQ = VF.c;
      var CQ = Lw(Lw(Lw(Lw({
        stroke: "#ccc",
        pointerEvents: "none"
      }, uQ), qQ), (0, iQ.e)(AQ, !1)), {}, {
        payload: mQ,
        payloadIndex: HQ,
        className: (0, tQ.b)("recharts-tooltip-cursor", AQ.className)
      });
      return (0, LQ.isValidElement)(AQ) ? (0, LQ.cloneElement)(AQ, CQ) : (0, LQ.createElement)(eQ, CQ)
    }
    var Dw = wQ(6179),
      kw = ["item"],
      vw = ["children", "className", "width", "height", "style", "compact", "title", "desc"];

    function mw(QQ) {
      return mw = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, mw(QQ)
    }

    function uw() {
      return uw = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var FQ = 1; FQ < arguments.length; FQ++) {
          var wQ = arguments[FQ];
          for (var LQ in wQ) Object.prototype.hasOwnProperty.call(wQ, LQ) && (QQ[LQ] = wQ[LQ])
        }
        return QQ
      }, uw.apply(this, arguments)
    }

    function Hw(QQ, FQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return QQ
      }(QQ) || function(QQ, FQ) {
        var wQ = null == QQ ? null : "undefined" != typeof Symbol && QQ[Symbol.iterator] || QQ["@@iterator"];
        if (null != wQ) {
          var LQ, qQ, oQ, DQ, kQ = [],
            vQ = !0,
            mQ = !1;
          try {
            if (oQ = (wQ = wQ.call(QQ)).next, 0 === FQ) {
              if (Object(wQ) !== wQ) return;
              vQ = !1
            } else
              for (; !(vQ = (LQ = oQ.call(wQ)).done) && (kQ.push(LQ.value), kQ.length !== FQ); vQ = !0);
          } catch (QQ) {
            mQ = !0, qQ = QQ
          } finally {
            try {
              if (!vQ && null != wQ.return && (DQ = wQ.return(), Object(DQ) !== DQ)) return
            } finally {
              if (mQ) throw qQ
            }
          }
          return kQ
        }
      }(QQ, FQ) || Gw(QQ, FQ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function bw(QQ, FQ) {
      if (null == QQ) return {};
      var wQ, LQ, qQ = function(QQ, FQ) {
        if (null == QQ) return {};
        var wQ = {};
        for (var LQ in QQ)
          if (Object.prototype.hasOwnProperty.call(QQ, LQ)) {
            if (FQ.indexOf(LQ) >= 0) continue;
            wQ[LQ] = QQ[LQ]
          } return wQ
      }(QQ, FQ);
      if (Object.getOwnPropertySymbols) {
        var oQ = Object.getOwnPropertySymbols(QQ);
        for (LQ = 0; LQ < oQ.length; LQ++) wQ = oQ[LQ], FQ.indexOf(wQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, wQ) && (qQ[wQ] = QQ[wQ])
      }
      return qQ
    }

    function Yw(QQ, FQ) {
      for (var wQ = 0; wQ < FQ.length; wQ++) {
        var LQ = FQ[wQ];
        LQ.enumerable = LQ.enumerable || !1, LQ.configurable = !0, "value" in LQ && (LQ.writable = !0), Object.defineProperty(QQ, Ww(LQ.key), LQ)
      }
    }

    function xw(QQ, FQ, wQ) {
      return FQ = tw(FQ),
        function(QQ, FQ) {
          if (FQ && ("object" === mw(FQ) || "function" === typeof FQ)) return FQ;
          if (void 0 !== FQ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(QQ) {
            if (void 0 === QQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return QQ
          }(QQ)
        }(QQ, Aw() ? Reflect.construct(FQ, wQ || [], tw(QQ).constructor) : FQ.apply(QQ, wQ))
    }

    function Aw() {
      try {
        var QQ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (QQ) {}
      return (Aw = function() {
        return !!QQ
      })()
    }

    function tw(QQ) {
      return tw = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(QQ) {
        return QQ.__proto__ || Object.getPrototypeOf(QQ)
      }, tw(QQ)
    }

    function ew(QQ, FQ) {
      return ew = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(QQ, FQ) {
        return QQ.__proto__ = FQ, QQ
      }, ew(QQ, FQ)
    }

    function Mw(QQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return pw(QQ)
      }(QQ) || function(QQ) {
        if ("undefined" !== typeof Symbol && null != QQ[Symbol.iterator] || null != QQ["@@iterator"]) return Array.from(QQ)
      }(QQ) || Gw(QQ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Gw(QQ, FQ) {
      if (QQ) {
        if ("string" === typeof QQ) return pw(QQ, FQ);
        var wQ = Object.prototype.toString.call(QQ).slice(8, -1);
        return "Object" === wQ && QQ.constructor && (wQ = QQ.constructor.name), "Map" === wQ || "Set" === wQ ? Array.from(QQ) : "Arguments" === wQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wQ) ? pw(QQ, FQ) : void 0
      }
    }

    function pw(QQ, FQ) {
      (null == FQ || FQ > QQ.length) && (FQ = QQ.length);
      for (var wQ = 0, LQ = new Array(FQ); wQ < FQ; wQ++) LQ[wQ] = QQ[wQ];
      return LQ
    }

    function Cw(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function Sw(QQ) {
      for (var FQ = 1; FQ < arguments.length; FQ++) {
        var wQ = null != arguments[FQ] ? arguments[FQ] : {};
        FQ % 2 ? Cw(Object(wQ), !0).forEach((function(FQ) {
          iw(QQ, FQ, wQ[FQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : Cw(Object(wQ)).forEach((function(FQ) {
          Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
        }))
      }
      return QQ
    }

    function iw(QQ, FQ, wQ) {
      return (FQ = Ww(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }

    function Ww(QQ) {
      var FQ = function(QQ, FQ) {
        if ("object" != mw(QQ) || !QQ) return QQ;
        var wQ = QQ[Symbol.toPrimitive];
        if (void 0 !== wQ) {
          var LQ = wQ.call(QQ, FQ || "default");
          if ("object" != mw(LQ)) return LQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === FQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == mw(FQ) ? FQ : FQ + ""
    }
    var Rw = {
        xAxis: ["bottom", "top"],
        yAxis: ["left", "right"]
      },
      Ow = {
        width: "100%",
        height: "100%"
      },
      sw = {
        x: 0,
        y: 0
      };

    function rw(QQ) {
      return QQ
    }
    var Iw = function(QQ, FQ) {
      var wQ = FQ.graphicalItems,
        LQ = FQ.dataStartIndex,
        qQ = FQ.dataEndIndex,
        oQ = (null !== wQ && void 0 !== wQ ? wQ : []).reduce((function(QQ, FQ) {
          var wQ = FQ.props.data;
          return wQ && wQ.length ? [].concat(Mw(QQ), Mw(wQ)) : QQ
        }), []);
      return oQ.length > 0 ? oQ : QQ && QQ.length && (0, sQ.t)(LQ) && (0, sQ.t)(qQ) ? QQ.slice(LQ, qQ + 1) : []
    };

    function Uw(QQ) {
      return "number" === QQ ? [0, "auto"] : void 0
    }
    var Nw = function(QQ, FQ, wQ, LQ) {
        var qQ = QQ.graphicalItems,
          oQ = QQ.tooltipAxis,
          DQ = Iw(FQ, QQ);
        return wQ < 0 || !qQ || !qQ.length || wQ >= DQ.length ? null : qQ.reduce((function(qQ, kQ) {
          var vQ, mQ, uQ = null !== (vQ = kQ.props.data) && void 0 !== vQ ? vQ : FQ;
          if (uQ && QQ.dataStartIndex + QQ.dataEndIndex !== 0 && QQ.dataEndIndex - QQ.dataStartIndex >= wQ && (uQ = uQ.slice(QQ.dataStartIndex, QQ.dataEndIndex + 1)), oQ.dataKey && !oQ.allowDuplicatedCategory) {
            var HQ = void 0 === uQ ? DQ : uQ;
            mQ = (0, sQ.d)(HQ, oQ.dataKey, LQ)
          } else mQ = uQ && uQ[wQ] || DQ[wQ];
          return mQ ? [].concat(Mw(qQ), [(0, OQ._)(kQ, mQ)]) : qQ
        }), [])
      },
      Tw = function(QQ, FQ, wQ, LQ) {
        var qQ = LQ || {
            x: QQ.chartX,
            y: QQ.chartY
          },
          oQ = function(QQ, FQ) {
            return "horizontal" === FQ ? QQ.x : "vertical" === FQ ? QQ.y : "centric" === FQ ? QQ.angle : QQ.radius
          }(qQ, wQ),
          DQ = QQ.orderedTooltipTicks,
          kQ = QQ.tooltipAxis,
          vQ = QQ.tooltipTicks,
          mQ = (0, OQ.e)(oQ, DQ, vQ, kQ);
        if (mQ >= 0 && vQ) {
          var uQ = vQ[mQ] && vQ[mQ].value,
            HQ = Nw(QQ, FQ, mQ, uQ),
            bQ = function(QQ, FQ, wQ, LQ) {
              var qQ = FQ.find((function(QQ) {
                return QQ && QQ.index === wQ
              }));
              if (qQ) {
                if ("horizontal" === QQ) return {
                  x: qQ.coordinate,
                  y: LQ.y
                };
                if ("vertical" === QQ) return {
                  x: LQ.x,
                  y: qQ.coordinate
                };
                if ("centric" === QQ) {
                  var oQ = qQ.coordinate,
                    DQ = LQ.radius;
                  return Sw(Sw(Sw({}, LQ), (0, rF.m)(LQ.cx, LQ.cy, DQ, oQ)), {}, {
                    angle: oQ,
                    radius: DQ
                  })
                }
                var kQ = qQ.coordinate,
                  vQ = LQ.angle;
                return Sw(Sw(Sw({}, LQ), (0, rF.m)(LQ.cx, LQ.cy, kQ, vQ)), {}, {
                  angle: vQ,
                  radius: kQ
                })
              }
              return sw
            }(wQ, DQ, mQ, qQ);
          return {
            activeTooltipIndex: mQ,
            activeLabel: uQ,
            activePayload: HQ,
            activeCoordinate: bQ
          }
        }
        return null
      },
      Kw = function(QQ, FQ) {
        var wQ = FQ.axes,
          LQ = FQ.graphicalItems,
          qQ = FQ.axisType,
          DQ = FQ.axisIdKey,
          kQ = FQ.stackGroups,
          vQ = FQ.dataStartIndex,
          uQ = FQ.dataEndIndex,
          HQ = QQ.layout,
          bQ = QQ.children,
          YQ = QQ.stackOffset,
          xQ = (0, OQ.bb)(HQ, qQ);
        return wQ.reduce((function(FQ, wQ) {
          var AQ, tQ = void 0 !== wQ.type.defaultProps ? Sw(Sw({}, wQ.type.defaultProps), wQ.props) : wQ.props,
            eQ = tQ.type,
            MQ = tQ.dataKey,
            GQ = tQ.allowDataOverflow,
            pQ = tQ.allowDuplicatedCategory,
            cQ = tQ.scale,
            CQ = tQ.ticks,
            SQ = tQ.includeHidden,
            iQ = tQ[DQ];
          if (FQ[iQ]) return FQ;
          var WQ, RQ, rQ, IQ = Iw(QQ.data, {
              graphicalItems: LQ.filter((function(QQ) {
                var FQ;
                return (DQ in QQ.props ? QQ.props[DQ] : null === (FQ = QQ.type.defaultProps) || void 0 === FQ ? void 0 : FQ[DQ]) === iQ
              })),
              dataStartIndex: vQ,
              dataEndIndex: uQ
            }),
            UQ = IQ.length;
          (function(QQ, FQ, wQ) {
            if ("number" === wQ && !0 === FQ && Array.isArray(QQ)) {
              var LQ = null === QQ || void 0 === QQ ? void 0 : QQ[0],
                qQ = null === QQ || void 0 === QQ ? void 0 : QQ[1];
              if (LQ && qQ && (0, sQ.t)(LQ) && (0, sQ.t)(qQ)) return !0
            }
            return !1
          })(tQ.domain, GQ, eQ) && (WQ = (0, OQ.ib)(tQ.domain, null, GQ), !xQ || "number" !== eQ && "auto" === cQ || (rQ = (0, OQ.G)(IQ, MQ, "category")));
          var NQ = Uw(eQ);
          if (!WQ || 0 === WQ.length) {
            var TQ, KQ = null !== (TQ = tQ.domain) && void 0 !== TQ ? TQ : NQ;
            if (MQ) {
              if (WQ = (0, OQ.G)(IQ, MQ, eQ), "category" === eQ && xQ) {
                var zQ = (0, sQ.n)(WQ);
                pQ && zQ ? (RQ = WQ, WQ = mQ()(0, UQ)) : pQ || (WQ = (0, OQ.eb)(KQ, WQ, wQ).reduce((function(QQ, FQ) {
                  return QQ.indexOf(FQ) >= 0 ? QQ : [].concat(Mw(QQ), [FQ])
                }), []))
              } else if ("category" === eQ) WQ = pQ ? WQ.filter((function(QQ) {
                return "" !== QQ && !oQ()(QQ)
              })) : (0, OQ.eb)(KQ, WQ, wQ).reduce((function(QQ, FQ) {
                return QQ.indexOf(FQ) >= 0 || "" === FQ || oQ()(FQ) ? QQ : [].concat(Mw(QQ), [FQ])
              }), []);
              else if ("number" === eQ) {
                var lQ = (0, OQ.fb)(IQ, LQ.filter((function(QQ) {
                  var FQ, wQ, LQ = DQ in QQ.props ? QQ.props[DQ] : null === (FQ = QQ.type.defaultProps) || void 0 === FQ ? void 0 : FQ[DQ],
                    qQ = "hide" in QQ.props ? QQ.props.hide : null === (wQ = QQ.type.defaultProps) || void 0 === wQ ? void 0 : wQ.hide;
                  return LQ === iQ && (SQ || !qQ)
                })), MQ, qQ, HQ);
                lQ && (WQ = lQ)
              }!xQ || "number" !== eQ && "auto" === cQ || (rQ = (0, OQ.G)(IQ, MQ, "category"))
            } else WQ = xQ ? mQ()(0, UQ) : kQ && kQ[iQ] && kQ[iQ].hasStack && "number" === eQ ? "expand" === YQ ? [0, 1] : (0, OQ.M)(kQ[iQ].stackGroups, vQ, uQ) : (0, OQ.K)(IQ, LQ.filter((function(QQ) {
              var FQ = DQ in QQ.props ? QQ.props[DQ] : QQ.type.defaultProps[DQ],
                wQ = "hide" in QQ.props ? QQ.props.hide : QQ.type.defaultProps.hide;
              return FQ === iQ && (SQ || !wQ)
            })), eQ, HQ, !0);
            if ("number" === eQ) WQ = sF(bQ, WQ, iQ, qQ, CQ), KQ && (WQ = (0, OQ.ib)(KQ, WQ, GQ));
            else if ("category" === eQ && KQ) {
              var jQ = KQ;
              WQ.every((function(QQ) {
                return jQ.indexOf(QQ) >= 0
              })) && (WQ = jQ)
            }
          }
          return Sw(Sw({}, FQ), {}, iw({}, iQ, Sw(Sw({}, tQ), {}, {
            axisType: qQ,
            domain: WQ,
            categoricalDomain: rQ,
            duplicateDomain: RQ,
            originalDomain: null !== (AQ = tQ.domain) && void 0 !== AQ ? AQ : NQ,
            isCategorical: xQ,
            layout: HQ
          })))
        }), {})
      },
      zw = function(QQ, FQ) {
        var wQ = FQ.axisType,
          LQ = void 0 === wQ ? "xAxis" : wQ,
          qQ = FQ.AxisComp,
          oQ = FQ.graphicalItems,
          DQ = FQ.stackGroups,
          kQ = FQ.dataStartIndex,
          vQ = FQ.dataEndIndex,
          uQ = QQ.children,
          bQ = "".concat(LQ, "Id"),
          YQ = (0, iQ.i)(uQ, qQ),
          xQ = {};
        return YQ && YQ.length ? xQ = Kw(QQ, {
          axes: YQ,
          graphicalItems: oQ,
          axisType: LQ,
          axisIdKey: bQ,
          stackGroups: DQ,
          dataStartIndex: kQ,
          dataEndIndex: vQ
        }) : oQ && oQ.length && (xQ = function(QQ, FQ) {
          var wQ = FQ.graphicalItems,
            LQ = FQ.Axis,
            qQ = FQ.axisType,
            oQ = FQ.axisIdKey,
            DQ = FQ.stackGroups,
            kQ = FQ.dataStartIndex,
            vQ = FQ.dataEndIndex,
            uQ = QQ.layout,
            bQ = QQ.children,
            YQ = Iw(QQ.data, {
              graphicalItems: wQ,
              dataStartIndex: kQ,
              dataEndIndex: vQ
            }),
            xQ = YQ.length,
            AQ = (0, OQ.bb)(uQ, qQ),
            tQ = -1;
          return wQ.reduce((function(QQ, FQ) {
            var eQ, MQ = (void 0 !== FQ.type.defaultProps ? Sw(Sw({}, FQ.type.defaultProps), FQ.props) : FQ.props)[oQ],
              GQ = Uw("number");
            return QQ[MQ] ? QQ : (tQ++, AQ ? eQ = mQ()(0, xQ) : DQ && DQ[MQ] && DQ[MQ].hasStack ? (eQ = (0, OQ.M)(DQ[MQ].stackGroups, kQ, vQ), eQ = sF(bQ, eQ, MQ, qQ)) : (eQ = (0, OQ.ib)(GQ, (0, OQ.K)(YQ, wQ.filter((function(QQ) {
              var FQ, wQ, LQ = oQ in QQ.props ? QQ.props[oQ] : null === (FQ = QQ.type.defaultProps) || void 0 === FQ ? void 0 : FQ[oQ],
                qQ = "hide" in QQ.props ? QQ.props.hide : null === (wQ = QQ.type.defaultProps) || void 0 === wQ ? void 0 : wQ.hide;
              return LQ === MQ && !qQ
            })), "number", uQ), LQ.defaultProps.allowDataOverflow), eQ = sF(bQ, eQ, MQ, qQ)), Sw(Sw({}, QQ), {}, iw({}, MQ, Sw(Sw({
              axisType: qQ
            }, LQ.defaultProps), {}, {
              hide: !0,
              orientation: HQ()(Rw, "".concat(qQ, ".").concat(tQ % 2), null),
              domain: eQ,
              originalDomain: GQ,
              isCategorical: AQ,
              layout: uQ
            }))))
          }), {})
        }(QQ, {
          Axis: qQ,
          graphicalItems: oQ,
          axisType: LQ,
          axisIdKey: bQ,
          stackGroups: DQ,
          dataStartIndex: kQ,
          dataEndIndex: vQ
        })), xQ
      },
      lw = function(QQ) {
        var FQ = QQ.children,
          wQ = QQ.defaultShowTooltip,
          LQ = (0, iQ.l)(FQ, gQ),
          qQ = 0,
          oQ = 0;
        return QQ.data && 0 !== QQ.data.length && (oQ = QQ.data.length - 1), LQ && LQ.props && (LQ.props.startIndex >= 0 && (qQ = LQ.props.startIndex), LQ.props.endIndex >= 0 && (oQ = LQ.props.endIndex)), {
          chartX: 0,
          chartY: 0,
          dataStartIndex: qQ,
          dataEndIndex: oQ,
          activeTooltipIndex: -1,
          isTooltipActive: Boolean(wQ)
        }
      },
      jw = function(QQ) {
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
      aw = function(QQ, FQ) {
        return "xAxis" === FQ ? QQ[FQ].width : "yAxis" === FQ ? QQ[FQ].height : void 0
      },
      Xw = function(QQ) {
        var FQ = QQ.chartName,
          wQ = QQ.GraphicalChild,
          qQ = QQ.defaultTooltipEventType,
          DQ = void 0 === qQ ? "axis" : qQ,
          vQ = QQ.validateTooltipEventTypes,
          mQ = void 0 === vQ ? ["axis"] : vQ,
          uQ = QQ.axisComponents,
          bQ = QQ.legendContent,
          xQ = QQ.formatAxisMap,
          WQ = QQ.defaultProps,
          RQ = function(QQ, FQ) {
            var wQ = FQ.graphicalItems,
              LQ = FQ.stackGroups,
              qQ = FQ.offset,
              DQ = FQ.updateId,
              kQ = FQ.dataStartIndex,
              vQ = FQ.dataEndIndex,
              mQ = QQ.barSize,
              HQ = QQ.layout,
              bQ = QQ.barGap,
              YQ = QQ.barCategoryGap,
              xQ = QQ.maxBarSize,
              AQ = jw(HQ),
              tQ = AQ.numericAxisName,
              MQ = AQ.cateAxisName,
              GQ = function(QQ) {
                return !(!QQ || !QQ.length) && QQ.some((function(QQ) {
                  var FQ = (0, iQ.p)(QQ && QQ.type);
                  return FQ && FQ.indexOf("Bar") >= 0
                }))
              }(wQ),
              pQ = [];
            return wQ.forEach((function(wQ, AQ) {
              var cQ = Iw(QQ.data, {
                  graphicalItems: [wQ],
                  dataStartIndex: kQ,
                  dataEndIndex: vQ
                }),
                CQ = void 0 !== wQ.type.defaultProps ? Sw(Sw({}, wQ.type.defaultProps), wQ.props) : wQ.props,
                SQ = CQ.dataKey,
                WQ = CQ.maxBarSize,
                RQ = CQ["".concat(tQ, "Id")],
                sQ = CQ["".concat(MQ, "Id")],
                rQ = uQ.reduce((function(QQ, wQ) {
                  var LQ = FQ["".concat(wQ.axisType, "Map")],
                    qQ = CQ["".concat(wQ.axisType, "Id")];
                  LQ && LQ[qQ] || "zAxis" === wQ.axisType || (0, eQ.d)(!1);
                  var oQ = LQ[qQ];
                  return Sw(Sw({}, QQ), {}, iw(iw({}, wQ.axisType, oQ), "".concat(wQ.axisType, "Ticks"), (0, OQ.U)(oQ)))
                }), {}),
                IQ = rQ[MQ],
                UQ = rQ["".concat(MQ, "Ticks")],
                NQ = LQ && LQ[RQ] && LQ[RQ].hasStack && (0, OQ.R)(wQ, LQ[RQ].stackGroups),
                TQ = (0, iQ.p)(wQ.type).indexOf("Bar") >= 0,
                KQ = (0, OQ.q)(IQ, UQ),
                zQ = [],
                lQ = GQ && (0, OQ.x)({
                  barSize: mQ,
                  stackGroups: LQ,
                  totalSize: aw(rQ, MQ)
                });
              if (TQ) {
                var jQ, aQ, XQ = oQ()(WQ) ? xQ : WQ,
                  fQ = null !== (jQ = null !== (aQ = (0, OQ.q)(IQ, UQ, !0)) && void 0 !== aQ ? aQ : XQ) && void 0 !== jQ ? jQ : 0;
                zQ = (0, OQ.u)({
                  barGap: bQ,
                  barCategoryGap: YQ,
                  bandSize: fQ !== KQ ? fQ : KQ,
                  sizeList: lQ[sQ],
                  maxBarSize: XQ
                }), fQ !== KQ && (zQ = zQ.map((function(QQ) {
                  return Sw(Sw({}, QQ), {}, {
                    position: Sw(Sw({}, QQ.position), {}, {
                      offset: QQ.position.offset - fQ / 2
                    })
                  })
                })))
              }
              var VQ = wQ && wQ.type && wQ.type.getComposedData;
              VQ && pQ.push({
                props: Sw(Sw({}, VQ(Sw(Sw({}, rQ), {}, {
                  displayedData: cQ,
                  props: QQ,
                  dataKey: SQ,
                  item: wQ,
                  bandSize: KQ,
                  barPosition: zQ,
                  offset: qQ,
                  stackedData: NQ,
                  layout: HQ,
                  dataStartIndex: kQ,
                  dataEndIndex: vQ
                }))), {}, iw(iw(iw({
                  key: wQ.key || "item-".concat(AQ)
                }, tQ, rQ[tQ]), MQ, rQ[MQ]), "animationId", DQ)),
                childIndex: (0, iQ.F)(wQ, QQ.children),
                item: wQ
              })
            })), pQ
          },
          rQ = function(QQ, LQ) {
            var qQ = QQ.props,
              oQ = QQ.dataStartIndex,
              DQ = QQ.dataEndIndex,
              kQ = QQ.updateId;
            if (!(0, iQ.L)({
                props: qQ
              })) return null;
            var vQ = qQ.children,
              mQ = qQ.layout,
              bQ = qQ.stackOffset,
              AQ = qQ.data,
              tQ = qQ.reverseStackOrder,
              eQ = jw(mQ),
              MQ = eQ.numericAxisName,
              GQ = eQ.cateAxisName,
              pQ = (0, iQ.i)(vQ, wQ),
              CQ = (0, OQ.Q)(AQ, pQ, "".concat(MQ, "Id"), "".concat(GQ, "Id"), bQ, tQ),
              SQ = uQ.reduce((function(QQ, FQ) {
                var wQ = "".concat(FQ.axisType, "Map");
                return Sw(Sw({}, QQ), {}, iw({}, wQ, zw(qQ, Sw(Sw({}, FQ), {}, {
                  graphicalItems: pQ,
                  stackGroups: FQ.axisType === MQ && CQ,
                  dataStartIndex: oQ,
                  dataEndIndex: DQ
                }))))
              }), {}),
              WQ = function(QQ, FQ) {
                var wQ = QQ.props,
                  LQ = QQ.graphicalItems,
                  qQ = QQ.xAxisMap,
                  oQ = void 0 === qQ ? {} : qQ,
                  DQ = QQ.yAxisMap,
                  kQ = void 0 === DQ ? {} : DQ,
                  vQ = wQ.width,
                  mQ = wQ.height,
                  uQ = wQ.children,
                  bQ = wQ.margin || {},
                  YQ = (0, iQ.l)(uQ, gQ),
                  xQ = (0, iQ.l)(uQ, cQ.b),
                  AQ = Object.keys(kQ).reduce((function(QQ, FQ) {
                    var wQ = kQ[FQ],
                      LQ = wQ.orientation;
                    return wQ.mirror || wQ.hide ? QQ : Sw(Sw({}, QQ), {}, iw({}, LQ, QQ[LQ] + wQ.width))
                  }), {
                    left: bQ.left || 0,
                    right: bQ.right || 0
                  }),
                  tQ = Object.keys(oQ).reduce((function(QQ, FQ) {
                    var wQ = oQ[FQ],
                      LQ = wQ.orientation;
                    return wQ.mirror || wQ.hide ? QQ : Sw(Sw({}, QQ), {}, iw({}, LQ, HQ()(QQ, "".concat(LQ)) + wQ.height))
                  }), {
                    top: bQ.top || 0,
                    bottom: bQ.bottom || 0
                  }),
                  eQ = Sw(Sw({}, tQ), AQ),
                  MQ = eQ.bottom;
                YQ && (eQ.bottom += YQ.props.height || gQ.defaultProps.height), xQ && FQ && (eQ = (0, OQ.c)(eQ, LQ, wQ, FQ));
                var GQ = vQ - eQ.left - eQ.right,
                  pQ = mQ - eQ.top - eQ.bottom;
                return Sw(Sw({
                  brushBottom: MQ
                }, eQ), {}, {
                  width: Math.max(GQ, 0),
                  height: Math.max(pQ, 0)
                })
              }(Sw(Sw({}, SQ), {}, {
                props: qQ,
                graphicalItems: pQ
              }), null === LQ || void 0 === LQ ? void 0 : LQ.legendBBox);
            Object.keys(SQ).forEach((function(QQ) {
              SQ[QQ] = xQ(qQ, SQ[QQ], WQ, QQ.replace("Map", ""), FQ)
            }));
            var rQ = function(QQ) {
                var FQ = (0, sQ.e)(QQ),
                  wQ = (0, OQ.U)(FQ, !1, !0);
                return {
                  tooltipTicks: wQ,
                  orderedTooltipTicks: YQ()(wQ, (function(QQ) {
                    return QQ.coordinate
                  })),
                  tooltipAxis: FQ,
                  tooltipAxisBandSize: (0, OQ.q)(FQ, wQ)
                }
              }(SQ["".concat(GQ, "Map")]),
              IQ = RQ(qQ, Sw(Sw({}, SQ), {}, {
                dataStartIndex: oQ,
                dataEndIndex: DQ,
                updateId: kQ,
                graphicalItems: pQ,
                stackGroups: CQ,
                offset: WQ
              }));
            return Sw(Sw({
              formattedGraphicalItems: IQ,
              graphicalItems: pQ,
              offset: WQ,
              stackGroups: CQ
            }, rQ), SQ)
          },
          IQ = function(QQ) {
            function wQ(QQ) {
              var qQ, DQ, vQ;
              return function(QQ, FQ) {
                if (!(QQ instanceof FQ)) throw new TypeError("Cannot call a class as a function")
              }(this, wQ), iw(vQ = xw(this, wQ, [QQ]), "eventEmitterSymbol", Symbol("rechartsEventEmitter")), iw(vQ, "accessibilityManager", new XF), iw(vQ, "handleLegendBBoxUpdate", (function(QQ) {
                if (QQ) {
                  var FQ = vQ.state,
                    wQ = FQ.dataStartIndex,
                    LQ = FQ.dataEndIndex,
                    qQ = FQ.updateId;
                  vQ.setState(Sw({
                    legendBBox: QQ
                  }, rQ({
                    props: vQ.props,
                    dataStartIndex: wQ,
                    dataEndIndex: LQ,
                    updateId: qQ
                  }, Sw(Sw({}, vQ.state), {}, {
                    legendBBox: QQ
                  }))))
                }
              })), iw(vQ, "handleReceiveSyncEvent", (function(QQ, FQ, wQ) {
                if (vQ.props.syncId === QQ) {
                  if (wQ === vQ.eventEmitterSymbol && "function" !== typeof vQ.props.syncMethod) return;
                  vQ.applySyncEvent(FQ)
                }
              })), iw(vQ, "handleBrushChange", (function(QQ) {
                var FQ = QQ.startIndex,
                  wQ = QQ.endIndex;
                if (FQ !== vQ.state.dataStartIndex || wQ !== vQ.state.dataEndIndex) {
                  var LQ = vQ.state.updateId;
                  vQ.setState((function() {
                    return Sw({
                      dataStartIndex: FQ,
                      dataEndIndex: wQ
                    }, rQ({
                      props: vQ.props,
                      dataStartIndex: FQ,
                      dataEndIndex: wQ,
                      updateId: LQ
                    }, vQ.state))
                  })), vQ.triggerSyncEvent({
                    dataStartIndex: FQ,
                    dataEndIndex: wQ
                  })
                }
              })), iw(vQ, "handleMouseEnter", (function(QQ) {
                var FQ = vQ.getMouseInfo(QQ);
                if (FQ) {
                  var wQ = Sw(Sw({}, FQ), {}, {
                    isTooltipActive: !0
                  });
                  vQ.setState(wQ), vQ.triggerSyncEvent(wQ);
                  var LQ = vQ.props.onMouseEnter;
                  kQ()(LQ) && LQ(wQ, QQ)
                }
              })), iw(vQ, "triggeredAfterMouseMove", (function(QQ) {
                var FQ = vQ.getMouseInfo(QQ),
                  wQ = FQ ? Sw(Sw({}, FQ), {}, {
                    isTooltipActive: !0
                  }) : {
                    isTooltipActive: !1
                  };
                vQ.setState(wQ), vQ.triggerSyncEvent(wQ);
                var LQ = vQ.props.onMouseMove;
                kQ()(LQ) && LQ(wQ, QQ)
              })), iw(vQ, "handleItemMouseEnter", (function(QQ) {
                vQ.setState((function() {
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
              })), iw(vQ, "handleItemMouseLeave", (function() {
                vQ.setState((function() {
                  return {
                    isTooltipActive: !1
                  }
                }))
              })), iw(vQ, "handleMouseMove", (function(QQ) {
                QQ.persist(), vQ.throttleTriggeredAfterMouseMove(QQ)
              })), iw(vQ, "handleMouseLeave", (function(QQ) {
                vQ.throttleTriggeredAfterMouseMove.cancel();
                var FQ = {
                  isTooltipActive: !1
                };
                vQ.setState(FQ), vQ.triggerSyncEvent(FQ);
                var wQ = vQ.props.onMouseLeave;
                kQ()(wQ) && wQ(FQ, QQ)
              })), iw(vQ, "handleOuterEvent", (function(QQ) {
                var FQ, wQ = (0, iQ.t)(QQ),
                  LQ = HQ()(vQ.props, "".concat(wQ));
                wQ && kQ()(LQ) && LQ(null !== (FQ = /.*touch.*/i.test(wQ) ? vQ.getMouseInfo(QQ.changedTouches[0]) : vQ.getMouseInfo(QQ)) && void 0 !== FQ ? FQ : {}, QQ)
              })), iw(vQ, "handleClick", (function(QQ) {
                var FQ = vQ.getMouseInfo(QQ);
                if (FQ) {
                  var wQ = Sw(Sw({}, FQ), {}, {
                    isTooltipActive: !0
                  });
                  vQ.setState(wQ), vQ.triggerSyncEvent(wQ);
                  var LQ = vQ.props.onClick;
                  kQ()(LQ) && LQ(wQ, QQ)
                }
              })), iw(vQ, "handleMouseDown", (function(QQ) {
                var FQ = vQ.props.onMouseDown;
                kQ()(FQ) && FQ(vQ.getMouseInfo(QQ), QQ)
              })), iw(vQ, "handleMouseUp", (function(QQ) {
                var FQ = vQ.props.onMouseUp;
                kQ()(FQ) && FQ(vQ.getMouseInfo(QQ), QQ)
              })), iw(vQ, "handleTouchMove", (function(QQ) {
                null != QQ.changedTouches && QQ.changedTouches.length > 0 && vQ.throttleTriggeredAfterMouseMove(QQ.changedTouches[0])
              })), iw(vQ, "handleTouchStart", (function(QQ) {
                null != QQ.changedTouches && QQ.changedTouches.length > 0 && vQ.handleMouseDown(QQ.changedTouches[0])
              })), iw(vQ, "handleTouchEnd", (function(QQ) {
                null != QQ.changedTouches && QQ.changedTouches.length > 0 && vQ.handleMouseUp(QQ.changedTouches[0])
              })), iw(vQ, "handleDoubleClick", (function(QQ) {
                var FQ = vQ.props.onDoubleClick;
                kQ()(FQ) && FQ(vQ.getMouseInfo(QQ), QQ)
              })), iw(vQ, "handleContextMenu", (function(QQ) {
                var FQ = vQ.props.onContextMenu;
                kQ()(FQ) && FQ(vQ.getMouseInfo(QQ), QQ)
              })), iw(vQ, "triggerSyncEvent", (function(QQ) {
                void 0 !== vQ.props.syncId && NF.emit(TF, vQ.props.syncId, QQ, vQ.eventEmitterSymbol)
              })), iw(vQ, "applySyncEvent", (function(QQ) {
                var FQ = vQ.props,
                  wQ = FQ.layout,
                  LQ = FQ.syncMethod,
                  qQ = vQ.state.updateId,
                  oQ = QQ.dataStartIndex,
                  DQ = QQ.dataEndIndex;
                if (void 0 !== QQ.dataStartIndex || void 0 !== QQ.dataEndIndex) vQ.setState(Sw({
                  dataStartIndex: oQ,
                  dataEndIndex: DQ
                }, rQ({
                  props: vQ.props,
                  dataStartIndex: oQ,
                  dataEndIndex: DQ,
                  updateId: qQ
                }, vQ.state)));
                else if (void 0 !== QQ.activeTooltipIndex) {
                  var kQ = QQ.chartX,
                    mQ = QQ.chartY,
                    uQ = QQ.activeTooltipIndex,
                    HQ = vQ.state,
                    bQ = HQ.offset,
                    YQ = HQ.tooltipTicks;
                  if (!bQ) return;
                  if ("function" === typeof LQ) uQ = LQ(YQ, QQ);
                  else if ("value" === LQ) {
                    uQ = -1;
                    for (var xQ = 0; xQ < YQ.length; xQ++)
                      if (YQ[xQ].value === QQ.activeLabel) {
                        uQ = xQ;
                        break
                      }
                  }
                  var AQ = Sw(Sw({}, bQ), {}, {
                      x: bQ.left,
                      y: bQ.top
                    }),
                    tQ = Math.min(kQ, AQ.x + AQ.width),
                    eQ = Math.min(mQ, AQ.y + AQ.height),
                    MQ = YQ[uQ] && YQ[uQ].value,
                    GQ = Nw(vQ.state, vQ.props.data, uQ),
                    pQ = YQ[uQ] ? {
                      x: "horizontal" === wQ ? YQ[uQ].coordinate : tQ,
                      y: "horizontal" === wQ ? eQ : YQ[uQ].coordinate
                    } : sw;
                  vQ.setState(Sw(Sw({}, QQ), {}, {
                    activeLabel: MQ,
                    activeCoordinate: pQ,
                    activePayload: GQ,
                    activeTooltipIndex: uQ
                  }))
                } else vQ.setState(QQ)
              })), iw(vQ, "renderCursor", (function(QQ) {
                var wQ, qQ = vQ.state,
                  oQ = qQ.isTooltipActive,
                  DQ = qQ.activeCoordinate,
                  kQ = qQ.activePayload,
                  mQ = qQ.offset,
                  uQ = qQ.activeTooltipIndex,
                  HQ = qQ.tooltipAxisBandSize,
                  bQ = vQ.getTooltipEventType(),
                  YQ = null !== (wQ = QQ.props.active) && void 0 !== wQ ? wQ : oQ,
                  xQ = vQ.props.layout,
                  AQ = QQ.key || "_recharts-cursor";
                return LQ.createElement(ow, {
                  key: AQ,
                  activeCoordinate: DQ,
                  activePayload: kQ,
                  activeTooltipIndex: uQ,
                  chartName: FQ,
                  element: QQ,
                  isActive: YQ,
                  layout: xQ,
                  offset: mQ,
                  tooltipAxisBandSize: HQ,
                  tooltipEventType: bQ
                })
              })), iw(vQ, "renderPolarAxis", (function(QQ, FQ, wQ) {
                var qQ = HQ()(QQ, "type.axisType"),
                  oQ = HQ()(vQ.state, "".concat(qQ, "Map")),
                  DQ = QQ.type.defaultProps,
                  kQ = void 0 !== DQ ? Sw(Sw({}, DQ), QQ.props) : QQ.props,
                  mQ = oQ && oQ[kQ["".concat(qQ, "Id")]];
                return (0, LQ.cloneElement)(QQ, Sw(Sw({}, mQ), {}, {
                  className: (0, tQ.b)(qQ, mQ.className),
                  key: QQ.key || "".concat(FQ, "-").concat(wQ),
                  ticks: (0, OQ.U)(mQ, !0)
                }))
              })), iw(vQ, "renderPolarGrid", (function(QQ) {
                var FQ = QQ.props,
                  wQ = FQ.radialLines,
                  qQ = FQ.polarAngles,
                  oQ = FQ.polarRadius,
                  DQ = vQ.state,
                  kQ = DQ.radiusAxisMap,
                  mQ = DQ.angleAxisMap,
                  uQ = (0, sQ.e)(kQ),
                  HQ = (0, sQ.e)(mQ),
                  bQ = HQ.cx,
                  YQ = HQ.cy,
                  xQ = HQ.innerRadius,
                  AQ = HQ.outerRadius;
                return (0, LQ.cloneElement)(QQ, {
                  polarAngles: Array.isArray(qQ) ? qQ : (0, OQ.U)(HQ, !0).map((function(QQ) {
                    return QQ.coordinate
                  })),
                  polarRadius: Array.isArray(oQ) ? oQ : (0, OQ.U)(uQ, !0).map((function(QQ) {
                    return QQ.coordinate
                  })),
                  cx: bQ,
                  cy: YQ,
                  innerRadius: xQ,
                  outerRadius: AQ,
                  key: QQ.key || "polar-grid",
                  radialLines: wQ
                })
              })), iw(vQ, "renderLegend", (function() {
                var QQ = vQ.state.formattedGraphicalItems,
                  FQ = vQ.props,
                  wQ = FQ.children,
                  qQ = FQ.width,
                  oQ = FQ.height,
                  DQ = vQ.props.margin || {},
                  kQ = qQ - (DQ.left || 0) - (DQ.right || 0),
                  mQ = (0, ZQ.b)({
                    children: wQ,
                    formattedGraphicalItems: QQ,
                    legendWidth: kQ,
                    legendContent: bQ
                  });
                if (!mQ) return null;
                var uQ = mQ.item,
                  HQ = bw(mQ, kw);
                return (0, LQ.cloneElement)(uQ, Sw(Sw({}, HQ), {}, {
                  chartWidth: qQ,
                  chartHeight: oQ,
                  margin: DQ,
                  onBBoxUpdate: vQ.handleLegendBBoxUpdate
                }))
              })), iw(vQ, "renderTooltip", (function() {
                var QQ, FQ = vQ.props,
                  wQ = FQ.children,
                  qQ = FQ.accessibilityLayer,
                  oQ = (0, iQ.l)(wQ, pQ.b);
                if (!oQ) return null;
                var DQ = vQ.state,
                  kQ = DQ.isTooltipActive,
                  mQ = DQ.activeCoordinate,
                  uQ = DQ.activePayload,
                  HQ = DQ.activeLabel,
                  bQ = DQ.offset,
                  YQ = null !== (QQ = oQ.props.active) && void 0 !== QQ ? QQ : kQ;
                return (0, LQ.cloneElement)(oQ, {
                  viewBox: Sw(Sw({}, bQ), {}, {
                    x: bQ.left,
                    y: bQ.top
                  }),
                  active: YQ,
                  label: HQ,
                  payload: YQ ? uQ : [],
                  coordinate: mQ,
                  accessibilityLayer: qQ
                })
              })), iw(vQ, "renderBrush", (function(QQ) {
                var FQ = vQ.props,
                  wQ = FQ.margin,
                  qQ = FQ.data,
                  oQ = vQ.state,
                  DQ = oQ.offset,
                  kQ = oQ.dataStartIndex,
                  mQ = oQ.dataEndIndex,
                  uQ = oQ.updateId;
                return (0, LQ.cloneElement)(QQ, {
                  key: QQ.key || "_recharts-brush",
                  onChange: (0, OQ.l)(vQ.handleBrushChange, QQ.props.onChange),
                  data: qQ,
                  x: (0, sQ.t)(QQ.props.x) ? QQ.props.x : DQ.left,
                  y: (0, sQ.t)(QQ.props.y) ? QQ.props.y : DQ.top + DQ.height + DQ.brushBottom - (wQ.bottom || 0),
                  width: (0, sQ.t)(QQ.props.width) ? QQ.props.width : DQ.width,
                  startIndex: kQ,
                  endIndex: mQ,
                  updateId: "brush-".concat(uQ)
                })
              })), iw(vQ, "renderReferenceElement", (function(QQ, FQ, wQ) {
                if (!QQ) return null;
                var qQ = vQ.clipPathId,
                  oQ = vQ.state,
                  DQ = oQ.xAxisMap,
                  kQ = oQ.yAxisMap,
                  mQ = oQ.offset,
                  uQ = QQ.type.defaultProps || {},
                  HQ = QQ.props,
                  bQ = HQ.xAxisId,
                  YQ = void 0 === bQ ? uQ.xAxisId : bQ,
                  xQ = HQ.yAxisId,
                  AQ = void 0 === xQ ? uQ.yAxisId : xQ;
                return (0, LQ.cloneElement)(QQ, {
                  key: QQ.key || "".concat(FQ, "-").concat(wQ),
                  xAxis: DQ[YQ],
                  yAxis: kQ[AQ],
                  viewBox: {
                    x: mQ.left,
                    y: mQ.top,
                    width: mQ.width,
                    height: mQ.height
                  },
                  clipPathId: qQ
                })
              })), iw(vQ, "renderActivePoints", (function(QQ) {
                var FQ = QQ.item,
                  LQ = QQ.activePoint,
                  qQ = QQ.basePoint,
                  oQ = QQ.childIndex,
                  DQ = QQ.isRange,
                  kQ = [],
                  vQ = FQ.props.key,
                  mQ = void 0 !== FQ.item.type.defaultProps ? Sw(Sw({}, FQ.item.type.defaultProps), FQ.item.props) : FQ.item.props,
                  uQ = mQ.activeDot,
                  HQ = Sw(Sw({
                    index: oQ,
                    dataKey: mQ.dataKey,
                    cx: LQ.x,
                    cy: LQ.y,
                    r: 4,
                    fill: (0, OQ.P)(FQ.item),
                    strokeWidth: 2,
                    stroke: "#fff",
                    payload: LQ.payload,
                    value: LQ.value
                  }, (0, iQ.e)(uQ, !1)), (0, KF.i)(uQ));
                return kQ.push(wQ.renderActiveDot(uQ, HQ, "".concat(vQ, "-activePoint-").concat(oQ))), qQ ? kQ.push(wQ.renderActiveDot(uQ, Sw(Sw({}, HQ), {}, {
                  cx: qQ.x,
                  cy: qQ.y
                }), "".concat(vQ, "-basePoint-").concat(oQ))) : DQ && kQ.push(null), kQ
              })), iw(vQ, "renderGraphicChild", (function(QQ, FQ, wQ) {
                var qQ = vQ.filterFormatItem(QQ, FQ, wQ);
                if (!qQ) return null;
                var DQ = vQ.getTooltipEventType(),
                  kQ = vQ.state,
                  mQ = kQ.isTooltipActive,
                  uQ = kQ.tooltipAxis,
                  HQ = kQ.activeTooltipIndex,
                  bQ = kQ.activeLabel,
                  YQ = vQ.props.children,
                  xQ = (0, iQ.l)(YQ, pQ.b),
                  AQ = qQ.props,
                  tQ = AQ.points,
                  eQ = AQ.isRange,
                  MQ = AQ.baseLine,
                  GQ = void 0 !== qQ.item.type.defaultProps ? Sw(Sw({}, qQ.item.type.defaultProps), qQ.item.props) : qQ.item.props,
                  cQ = GQ.activeDot,
                  CQ = GQ.hide,
                  SQ = GQ.activeBar,
                  WQ = GQ.activeShape,
                  RQ = Boolean(!CQ && mQ && xQ && (cQ || SQ || WQ)),
                  rQ = {};
                "axis" !== DQ && xQ && "click" === xQ.props.trigger ? rQ = {
                  onClick: (0, OQ.l)(vQ.handleItemMouseEnter, QQ.props.onClick)
                } : "axis" !== DQ && (rQ = {
                  onMouseLeave: (0, OQ.l)(vQ.handleItemMouseLeave, QQ.props.onMouseLeave),
                  onMouseEnter: (0, OQ.l)(vQ.handleItemMouseEnter, QQ.props.onMouseEnter)
                });
                var IQ = (0, LQ.cloneElement)(QQ, Sw(Sw({}, qQ.props), rQ));
                if (RQ) {
                  if (!(HQ >= 0)) {
                    var UQ, NQ = (null !== (UQ = vQ.getItemByXY(vQ.state.activeCoordinate)) && void 0 !== UQ ? UQ : {
                        graphicalItem: IQ
                      }).graphicalItem,
                      TQ = NQ.item,
                      KQ = void 0 === TQ ? QQ : TQ,
                      zQ = NQ.childIndex,
                      lQ = Sw(Sw(Sw({}, qQ.props), rQ), {}, {
                        activeIndex: zQ
                      });
                    return [(0, LQ.cloneElement)(KQ, lQ), null, null]
                  }
                  var jQ, aQ;
                  if (uQ.dataKey && !uQ.allowDuplicatedCategory) {
                    var XQ = "function" === typeof uQ.dataKey ? function(QQ) {
                      return "function" === typeof uQ.dataKey ? uQ.dataKey(QQ.payload) : null
                    } : "payload.".concat(uQ.dataKey.toString());
                    jQ = (0, sQ.d)(tQ, XQ, bQ), aQ = eQ && MQ && (0, sQ.d)(MQ, XQ, bQ)
                  } else jQ = null === tQ || void 0 === tQ ? void 0 : tQ[HQ], aQ = eQ && MQ && MQ[HQ];
                  if (WQ || SQ) {
                    var fQ = void 0 !== QQ.props.activeIndex ? QQ.props.activeIndex : HQ;
                    return [(0, LQ.cloneElement)(QQ, Sw(Sw(Sw({}, qQ.props), rQ), {}, {
                      activeIndex: fQ
                    })), null, null]
                  }
                  if (!oQ()(jQ)) return [IQ].concat(Mw(vQ.renderActivePoints({
                    item: qQ,
                    activePoint: jQ,
                    basePoint: aQ,
                    childIndex: HQ,
                    isRange: eQ
                  })))
                }
                return eQ ? [IQ, null, null] : [IQ, null]
              })), iw(vQ, "renderCustomized", (function(QQ, FQ, wQ) {
                return (0, LQ.cloneElement)(QQ, Sw(Sw({
                  key: "recharts-customized-".concat(wQ)
                }, vQ.props), vQ.state))
              })), iw(vQ, "renderMap", {
                CartesianGrid: {
                  handler: rw,
                  once: !0
                },
                ReferenceArea: {
                  handler: vQ.renderReferenceElement
                },
                ReferenceLine: {
                  handler: rw
                },
                ReferenceDot: {
                  handler: vQ.renderReferenceElement
                },
                XAxis: {
                  handler: rw
                },
                YAxis: {
                  handler: rw
                },
                Brush: {
                  handler: vQ.renderBrush,
                  once: !0
                },
                Bar: {
                  handler: vQ.renderGraphicChild
                },
                Line: {
                  handler: vQ.renderGraphicChild
                },
                Area: {
                  handler: vQ.renderGraphicChild
                },
                Radar: {
                  handler: vQ.renderGraphicChild
                },
                RadialBar: {
                  handler: vQ.renderGraphicChild
                },
                Scatter: {
                  handler: vQ.renderGraphicChild
                },
                Pie: {
                  handler: vQ.renderGraphicChild
                },
                Funnel: {
                  handler: vQ.renderGraphicChild
                },
                Tooltip: {
                  handler: vQ.renderCursor,
                  once: !0
                },
                PolarGrid: {
                  handler: vQ.renderPolarGrid,
                  once: !0
                },
                PolarAngleAxis: {
                  handler: vQ.renderPolarAxis
                },
                PolarRadiusAxis: {
                  handler: vQ.renderPolarAxis
                },
                Customized: {
                  handler: vQ.renderCustomized
                }
              }), vQ.clipPathId = "".concat(null !== (qQ = QQ.id) && void 0 !== qQ ? qQ : (0, sQ.C)("recharts"), "-clip"), vQ.throttleTriggeredAfterMouseMove = AQ()(vQ.triggeredAfterMouseMove, null !== (DQ = QQ.throttleDelay) && void 0 !== DQ ? DQ : 1e3 / 60), vQ.state = {}, vQ
            }
            return function(QQ, FQ) {
              if ("function" !== typeof FQ && null !== FQ) throw new TypeError("Super expression must either be null or a function");
              QQ.prototype = Object.create(FQ && FQ.prototype, {
                constructor: {
                  value: QQ,
                  writable: !0,
                  configurable: !0
                }
              }), Object.defineProperty(QQ, "prototype", {
                writable: !1
              }), FQ && ew(QQ, FQ)
            }(wQ, QQ), qQ = wQ, vQ = [{
              key: "componentDidMount",
              value: function() {
                var QQ, FQ;
                this.addListener(), this.accessibilityManager.setDetails({
                  container: this.container,
                  offset: {
                    left: null !== (QQ = this.props.margin.left) && void 0 !== QQ ? QQ : 0,
                    top: null !== (FQ = this.props.margin.top) && void 0 !== FQ ? FQ : 0
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
                  FQ = QQ.children,
                  wQ = QQ.data,
                  LQ = QQ.height,
                  qQ = QQ.layout,
                  oQ = (0, iQ.l)(FQ, pQ.b);
                if (oQ) {
                  var DQ = oQ.props.defaultIndex;
                  if (!("number" !== typeof DQ || DQ < 0 || DQ > this.state.tooltipTicks.length - 1)) {
                    var kQ = this.state.tooltipTicks[DQ] && this.state.tooltipTicks[DQ].value,
                      vQ = Nw(this.state, wQ, DQ, kQ),
                      mQ = this.state.tooltipTicks[DQ].coordinate,
                      uQ = (this.state.offset.top + LQ) / 2,
                      HQ = "horizontal" === qQ ? {
                        x: mQ,
                        y: uQ
                      } : {
                        y: mQ,
                        x: uQ
                      },
                      bQ = this.state.formattedGraphicalItems.find((function(QQ) {
                        return "Scatter" === QQ.item.type.name
                      }));
                    bQ && (HQ = Sw(Sw({}, HQ), bQ.props.points[DQ].tooltipPosition), vQ = bQ.props.points[DQ].tooltipPayload);
                    var YQ = {
                      activeTooltipIndex: DQ,
                      isTooltipActive: !0,
                      activeLabel: kQ,
                      activePayload: vQ,
                      activeCoordinate: HQ
                    };
                    this.setState(YQ), this.renderCursor(oQ), this.accessibilityManager.setIndex(DQ)
                  }
                }
              }
            }, {
              key: "getSnapshotBeforeUpdate",
              value: function(QQ, FQ) {
                return this.props.accessibilityLayer ? (this.state.tooltipTicks !== FQ.tooltipTicks && this.accessibilityManager.setDetails({
                  coordinateList: this.state.tooltipTicks
                }), this.props.layout !== QQ.layout && this.accessibilityManager.setDetails({
                  layout: this.props.layout
                }), this.props.margin !== QQ.margin && this.accessibilityManager.setDetails({
                  offset: {
                    left: null !== (wQ = this.props.margin.left) && void 0 !== wQ ? wQ : 0,
                    top: null !== (LQ = this.props.margin.top) && void 0 !== LQ ? LQ : 0
                  }
                }), null) : null;
                var wQ, LQ
              }
            }, {
              key: "componentDidUpdate",
              value: function(QQ) {
                (0, iQ.B)([(0, iQ.l)(QQ.children, pQ.b)], [(0, iQ.l)(this.props.children, pQ.b)]) || this.displayDefaultTooltip()
              }
            }, {
              key: "componentWillUnmount",
              value: function() {
                this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel()
              }
            }, {
              key: "getTooltipEventType",
              value: function() {
                var QQ = (0, iQ.l)(this.props.children, pQ.b);
                if (QQ && "boolean" === typeof QQ.props.shared) {
                  var FQ = QQ.props.shared ? "axis" : "item";
                  return mQ.indexOf(FQ) >= 0 ? FQ : DQ
                }
                return DQ
              }
            }, {
              key: "getMouseInfo",
              value: function(QQ) {
                if (!this.container) return null;
                var FQ = this.container,
                  wQ = FQ.getBoundingClientRect(),
                  LQ = (0, PQ.e)(wQ),
                  qQ = {
                    chartX: Math.round(QQ.pageX - LQ.left),
                    chartY: Math.round(QQ.pageY - LQ.top)
                  },
                  oQ = wQ.width / FQ.offsetWidth || 1,
                  DQ = this.inRange(qQ.chartX, qQ.chartY, oQ);
                if (!DQ) return null;
                var kQ = this.state,
                  vQ = kQ.xAxisMap,
                  mQ = kQ.yAxisMap,
                  uQ = this.getTooltipEventType(),
                  HQ = Tw(this.state, this.props.data, this.props.layout, DQ);
                if ("axis" !== uQ && vQ && mQ) {
                  var bQ = (0, sQ.e)(vQ).scale,
                    YQ = (0, sQ.e)(mQ).scale,
                    xQ = bQ && bQ.invert ? bQ.invert(qQ.chartX) : null,
                    AQ = YQ && YQ.invert ? YQ.invert(qQ.chartY) : null;
                  return Sw(Sw({}, qQ), {}, {
                    xValue: xQ,
                    yValue: AQ
                  }, HQ)
                }
                return HQ ? Sw(Sw({}, qQ), HQ) : null
              }
            }, {
              key: "inRange",
              value: function(QQ, FQ) {
                var wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                  LQ = this.props.layout,
                  qQ = QQ / wQ,
                  oQ = FQ / wQ;
                if ("horizontal" === LQ || "vertical" === LQ) {
                  var DQ = this.state.offset;
                  return qQ >= DQ.left && qQ <= DQ.left + DQ.width && oQ >= DQ.top && oQ <= DQ.top + DQ.height ? {
                    x: qQ,
                    y: oQ
                  } : null
                }
                var kQ = this.state,
                  vQ = kQ.angleAxisMap,
                  mQ = kQ.radiusAxisMap;
                if (vQ && mQ) {
                  var uQ = (0, sQ.e)(vQ);
                  return (0, rF.i)({
                    x: qQ,
                    y: oQ
                  }, uQ)
                }
                return null
              }
            }, {
              key: "parseEventsOfWrapper",
              value: function() {
                var QQ = this.props.children,
                  FQ = this.getTooltipEventType(),
                  wQ = (0, iQ.l)(QQ, pQ.b),
                  LQ = {};
                return wQ && "axis" === FQ && (LQ = "click" === wQ.props.trigger ? {
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
                }), Sw(Sw({}, (0, KF.i)(this.props, this.handleOuterEvent)), LQ)
              }
            }, {
              key: "addListener",
              value: function() {
                NF.on(TF, this.handleReceiveSyncEvent)
              }
            }, {
              key: "removeListener",
              value: function() {
                NF.removeListener(TF, this.handleReceiveSyncEvent)
              }
            }, {
              key: "filterFormatItem",
              value: function(QQ, FQ, wQ) {
                for (var LQ = this.state.formattedGraphicalItems, qQ = 0, oQ = LQ.length; qQ < oQ; qQ++) {
                  var DQ = LQ[qQ];
                  if (DQ.item === QQ || DQ.props.key === QQ.key || FQ === (0, iQ.p)(DQ.item.type) && wQ === DQ.childIndex) return DQ
                }
                return null
              }
            }, {
              key: "renderClipPath",
              value: function() {
                var QQ = this.clipPathId,
                  FQ = this.state.offset,
                  wQ = FQ.left,
                  qQ = FQ.top,
                  oQ = FQ.height,
                  DQ = FQ.width;
                return LQ.createElement("defs", null, LQ.createElement("clipPath", {
                  id: QQ
                }, LQ.createElement("rect", {
                  x: wQ,
                  y: qQ,
                  height: oQ,
                  width: DQ
                })))
              }
            }, {
              key: "getXScales",
              value: function() {
                var QQ = this.state.xAxisMap;
                return QQ ? Object.entries(QQ).reduce((function(QQ, FQ) {
                  var wQ = Hw(FQ, 2),
                    LQ = wQ[0],
                    qQ = wQ[1];
                  return Sw(Sw({}, QQ), {}, iw({}, LQ, qQ.scale))
                }), {}) : null
              }
            }, {
              key: "getYScales",
              value: function() {
                var QQ = this.state.yAxisMap;
                return QQ ? Object.entries(QQ).reduce((function(QQ, FQ) {
                  var wQ = Hw(FQ, 2),
                    LQ = wQ[0],
                    qQ = wQ[1];
                  return Sw(Sw({}, QQ), {}, iw({}, LQ, qQ.scale))
                }), {}) : null
              }
            }, {
              key: "getXScaleByAxisId",
              value: function(QQ) {
                var FQ;
                return null === (FQ = this.state.xAxisMap) || void 0 === FQ || null === (FQ = FQ[QQ]) || void 0 === FQ ? void 0 : FQ.scale
              }
            }, {
              key: "getYScaleByAxisId",
              value: function(QQ) {
                var FQ;
                return null === (FQ = this.state.yAxisMap) || void 0 === FQ || null === (FQ = FQ[QQ]) || void 0 === FQ ? void 0 : FQ.scale
              }
            }, {
              key: "getItemByXY",
              value: function(QQ) {
                var FQ = this.state,
                  wQ = FQ.formattedGraphicalItems,
                  LQ = FQ.activeItem;
                if (wQ && wQ.length)
                  for (var qQ = 0, oQ = wQ.length; qQ < oQ; qQ++) {
                    var DQ = wQ[qQ],
                      kQ = DQ.props,
                      vQ = DQ.item,
                      mQ = void 0 !== vQ.type.defaultProps ? Sw(Sw({}, vQ.type.defaultProps), vQ.props) : vQ.props,
                      uQ = (0, iQ.p)(vQ.type);
                    if ("Bar" === uQ) {
                      var HQ = (kQ.data || []).find((function(FQ) {
                        return (0, SQ.g)(QQ, FQ)
                      }));
                      if (HQ) return {
                        graphicalItem: DQ,
                        payload: HQ
                      }
                    } else if ("RadialBar" === uQ) {
                      var bQ = (kQ.data || []).find((function(FQ) {
                        return (0, rF.i)(QQ, FQ)
                      }));
                      if (bQ) return {
                        graphicalItem: DQ,
                        payload: bQ
                      }
                    } else if ((0, fF.h)(DQ, LQ) || (0, fF.i)(DQ, LQ) || (0, fF.j)(DQ, LQ)) {
                      var YQ = (0, fF.g)({
                          graphicalItem: DQ,
                          activeTooltipItem: LQ,
                          itemData: mQ.data
                        }),
                        xQ = void 0 === mQ.activeIndex ? YQ : mQ.activeIndex;
                      return {
                        graphicalItem: Sw(Sw({}, DQ), {}, {
                          childIndex: xQ
                        }),
                        payload: (0, fF.j)(DQ, LQ) ? mQ.data[YQ] : DQ.props.data[YQ]
                      }
                    }
                  }
                return null
              }
            }, {
              key: "render",
              value: function() {
                var QQ = this;
                if (!(0, iQ.L)(this)) return null;
                var FQ, wQ, qQ = this.props,
                  oQ = qQ.children,
                  DQ = qQ.className,
                  kQ = qQ.width,
                  vQ = qQ.height,
                  mQ = qQ.style,
                  uQ = qQ.compact,
                  HQ = qQ.title,
                  bQ = qQ.desc,
                  YQ = bw(qQ, vw),
                  xQ = (0, iQ.e)(YQ, !1);
                if (uQ) return LQ.createElement(Dw.d, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, LQ.createElement(MQ.b, uw({}, xQ, {
                  width: kQ,
                  height: vQ,
                  title: HQ,
                  desc: bQ
                }), this.renderClipPath(), (0, iQ.J)(oQ, this.renderMap)));
                this.props.accessibilityLayer && (xQ.tabIndex = null !== (FQ = this.props.tabIndex) && void 0 !== FQ ? FQ : 0, xQ.role = null !== (wQ = this.props.role) && void 0 !== wQ ? wQ : "application", xQ.onKeyDown = function(FQ) {
                  QQ.accessibilityManager.keyboardEvent(FQ)
                }, xQ.onFocus = function() {
                  QQ.accessibilityManager.focus()
                });
                var AQ = this.parseEventsOfWrapper();
                return LQ.createElement(Dw.d, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, LQ.createElement("div", uw({
                  className: (0, tQ.b)("recharts-wrapper", DQ),
                  style: Sw({
                    position: "relative",
                    cursor: "default",
                    width: kQ,
                    height: vQ
                  }, mQ)
                }, AQ, {
                  ref: function(FQ) {
                    QQ.container = FQ
                  }
                }), LQ.createElement(MQ.b, uw({}, xQ, {
                  width: kQ,
                  height: vQ,
                  title: HQ,
                  desc: bQ,
                  style: Ow
                }), this.renderClipPath(), (0, iQ.J)(oQ, this.renderMap)), this.renderLegend(), this.renderTooltip()))
              }
            }], vQ && Yw(qQ.prototype, vQ), uQ && Yw(qQ, uQ), Object.defineProperty(qQ, "prototype", {
              writable: !1
            }), qQ;
            var qQ, vQ, uQ
          }(LQ.Component);
        iw(IQ, "displayName", FQ), iw(IQ, "defaultProps", Sw({
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
        }, WQ)), iw(IQ, "getDerivedStateFromProps", (function(QQ, FQ) {
          var wQ = QQ.dataKey,
            LQ = QQ.data,
            qQ = QQ.children,
            DQ = QQ.width,
            kQ = QQ.height,
            vQ = QQ.layout,
            mQ = QQ.stackOffset,
            uQ = QQ.margin,
            HQ = FQ.dataStartIndex,
            bQ = FQ.dataEndIndex;
          if (void 0 === FQ.updateId) {
            var YQ = lw(QQ);
            return Sw(Sw(Sw({}, YQ), {}, {
              updateId: 0
            }, rQ(Sw(Sw({
              props: QQ
            }, YQ), {}, {
              updateId: 0
            }), FQ)), {}, {
              prevDataKey: wQ,
              prevData: LQ,
              prevWidth: DQ,
              prevHeight: kQ,
              prevLayout: vQ,
              prevStackOffset: mQ,
              prevMargin: uQ,
              prevChildren: qQ
            })
          }
          if (wQ !== FQ.prevDataKey || LQ !== FQ.prevData || DQ !== FQ.prevWidth || kQ !== FQ.prevHeight || vQ !== FQ.prevLayout || mQ !== FQ.prevStackOffset || !(0, IF.e)(uQ, FQ.prevMargin)) {
            var xQ = lw(QQ),
              AQ = {
                chartX: FQ.chartX,
                chartY: FQ.chartY,
                isTooltipActive: FQ.isTooltipActive
              },
              tQ = Sw(Sw({}, Tw(FQ, LQ, vQ)), {}, {
                updateId: FQ.updateId + 1
              }),
              eQ = Sw(Sw(Sw({}, xQ), AQ), tQ);
            return Sw(Sw(Sw({}, eQ), rQ(Sw({
              props: QQ
            }, eQ), FQ)), {}, {
              prevDataKey: wQ,
              prevData: LQ,
              prevWidth: DQ,
              prevHeight: kQ,
              prevLayout: vQ,
              prevStackOffset: mQ,
              prevMargin: uQ,
              prevChildren: qQ
            })
          }
          if (!(0, iQ.B)(qQ, FQ.prevChildren)) {
            var MQ, GQ, pQ, cQ, CQ = (0, iQ.l)(qQ, gQ),
              SQ = CQ && null !== (MQ = null === (GQ = CQ.props) || void 0 === GQ ? void 0 : GQ.startIndex) && void 0 !== MQ ? MQ : HQ,
              WQ = CQ && null !== (pQ = null === (cQ = CQ.props) || void 0 === cQ ? void 0 : cQ.endIndex) && void 0 !== pQ ? pQ : bQ,
              RQ = SQ !== HQ || WQ !== bQ,
              OQ = !oQ()(LQ) && !RQ ? FQ.updateId : FQ.updateId + 1;
            return Sw(Sw({
              updateId: OQ
            }, rQ(Sw(Sw({
              props: QQ
            }, FQ), {}, {
              updateId: OQ,
              dataStartIndex: SQ,
              dataEndIndex: WQ
            }), FQ)), {}, {
              prevChildren: qQ,
              dataStartIndex: SQ,
              dataEndIndex: WQ
            })
          }
          return null
        })), iw(IQ, "renderActiveDot", (function(QQ, FQ, wQ) {
          var qQ;
          return qQ = (0, LQ.isValidElement)(QQ) ? (0, LQ.cloneElement)(QQ, FQ) : kQ()(QQ) ? QQ(FQ) : LQ.createElement(CQ.d, FQ), LQ.createElement(GQ.e, {
            className: "recharts-active-dot",
            key: wQ
          }, qQ)
        }));
        var UQ = (0, LQ.forwardRef)((function(QQ, FQ) {
          return LQ.createElement(IQ, uw({}, QQ, {
            ref: FQ
          }))
        }));
        return UQ.displayName = IQ.displayName, UQ
      }
  },
  6110: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => LQ
    });
    var LQ = function(QQ) {
      return null
    };
    LQ.displayName = "Cell"
  },
  6052: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => rQ
    });
    var LQ = wQ(53),
      qQ = wQ(5240),
      oQ = wQ.n(qQ),
      DQ = wQ(5095),
      kQ = wQ.n(DQ),
      vQ = wQ(4932),
      mQ = wQ.n(vQ),
      uQ = wQ(4909),
      HQ = wQ(5962),
      bQ = wQ(5252),
      YQ = wQ(5002),
      xQ = wQ(6061);

    function AQ(QQ) {
      return AQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, AQ(QQ)
    }
    var tQ = ["offset"];

    function eQ(QQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return MQ(QQ)
      }(QQ) || function(QQ) {
        if ("undefined" !== typeof Symbol && null != QQ[Symbol.iterator] || null != QQ["@@iterator"]) return Array.from(QQ)
      }(QQ) || function(QQ, FQ) {
        if (!QQ) return;
        if ("string" === typeof QQ) return MQ(QQ, FQ);
        var wQ = Object.prototype.toString.call(QQ).slice(8, -1);
        "Object" === wQ && QQ.constructor && (wQ = QQ.constructor.name);
        if ("Map" === wQ || "Set" === wQ) return Array.from(QQ);
        if ("Arguments" === wQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wQ)) return MQ(QQ, FQ)
      }(QQ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function MQ(QQ, FQ) {
      (null == FQ || FQ > QQ.length) && (FQ = QQ.length);
      for (var wQ = 0, LQ = new Array(FQ); wQ < FQ; wQ++) LQ[wQ] = QQ[wQ];
      return LQ
    }

    function GQ(QQ, FQ) {
      if (null == QQ) return {};
      var wQ, LQ, qQ = function(QQ, FQ) {
        if (null == QQ) return {};
        var wQ = {};
        for (var LQ in QQ)
          if (Object.prototype.hasOwnProperty.call(QQ, LQ)) {
            if (FQ.indexOf(LQ) >= 0) continue;
            wQ[LQ] = QQ[LQ]
          } return wQ
      }(QQ, FQ);
      if (Object.getOwnPropertySymbols) {
        var oQ = Object.getOwnPropertySymbols(QQ);
        for (LQ = 0; LQ < oQ.length; LQ++) wQ = oQ[LQ], FQ.indexOf(wQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, wQ) && (qQ[wQ] = QQ[wQ])
      }
      return qQ
    }

    function pQ(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function cQ(QQ) {
      for (var FQ = 1; FQ < arguments.length; FQ++) {
        var wQ = null != arguments[FQ] ? arguments[FQ] : {};
        FQ % 2 ? pQ(Object(wQ), !0).forEach((function(FQ) {
          CQ(QQ, FQ, wQ[FQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : pQ(Object(wQ)).forEach((function(FQ) {
          Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
        }))
      }
      return QQ
    }

    function CQ(QQ, FQ, wQ) {
      return (FQ = function(QQ) {
        var FQ = function(QQ, FQ) {
          if ("object" != AQ(QQ) || !QQ) return QQ;
          var wQ = QQ[Symbol.toPrimitive];
          if (void 0 !== wQ) {
            var LQ = wQ.call(QQ, FQ || "default");
            if ("object" != AQ(LQ)) return LQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === FQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == AQ(FQ) ? FQ : FQ + ""
      }(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }

    function SQ() {
      return SQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var FQ = 1; FQ < arguments.length; FQ++) {
          var wQ = arguments[FQ];
          for (var LQ in wQ) Object.prototype.hasOwnProperty.call(wQ, LQ) && (QQ[LQ] = wQ[LQ])
        }
        return QQ
      }, SQ.apply(this, arguments)
    }
    var iQ = function(QQ) {
        var FQ = QQ.value,
          wQ = QQ.formatter,
          LQ = oQ()(QQ.children) ? FQ : QQ.children;
        return kQ()(wQ) ? wQ(LQ) : LQ
      },
      WQ = function(QQ, FQ, wQ) {
        var qQ, DQ, kQ = QQ.position,
          vQ = QQ.viewBox,
          mQ = QQ.offset,
          HQ = QQ.className,
          bQ = vQ,
          AQ = bQ.cx,
          tQ = bQ.cy,
          eQ = bQ.innerRadius,
          MQ = bQ.outerRadius,
          GQ = bQ.startAngle,
          pQ = bQ.endAngle,
          cQ = bQ.clockWise,
          CQ = (eQ + MQ) / 2,
          iQ = function(QQ, FQ) {
            return (0, YQ.z)(FQ - QQ) * Math.min(Math.abs(FQ - QQ), 360)
          }(GQ, pQ),
          WQ = iQ >= 0 ? 1 : -1;
        "insideStart" === kQ ? (qQ = GQ + WQ * mQ, DQ = cQ) : "insideEnd" === kQ ? (qQ = pQ - WQ * mQ, DQ = !cQ) : "end" === kQ && (qQ = pQ + WQ * mQ, DQ = cQ), DQ = iQ <= 0 ? DQ : !DQ;
        var RQ = (0, xQ.m)(AQ, tQ, CQ, qQ),
          OQ = (0, xQ.m)(AQ, tQ, CQ, qQ + 359 * (DQ ? 1 : -1)),
          sQ = "M".concat(RQ.x, ",").concat(RQ.y, "\n    A").concat(CQ, ",").concat(CQ, ",0,1,").concat(DQ ? 0 : 1, ",\n    ").concat(OQ.x, ",").concat(OQ.y),
          rQ = oQ()(QQ.id) ? (0, YQ.C)("recharts-radial-line-") : QQ.id;
        return LQ.createElement("text", SQ({}, wQ, {
          dominantBaseline: "central",
          className: (0, uQ.b)("recharts-radial-bar-label", HQ)
        }), LQ.createElement("defs", null, LQ.createElement("path", {
          id: rQ,
          d: sQ
        })), LQ.createElement("textPath", {
          xlinkHref: "#".concat(rQ)
        }, FQ))
      },
      RQ = function(QQ) {
        var FQ = QQ.viewBox,
          wQ = QQ.offset,
          LQ = QQ.position,
          qQ = FQ,
          oQ = qQ.cx,
          DQ = qQ.cy,
          kQ = qQ.innerRadius,
          vQ = qQ.outerRadius,
          mQ = (qQ.startAngle + qQ.endAngle) / 2;
        if ("outside" === LQ) {
          var uQ = (0, xQ.m)(oQ, DQ, vQ + wQ, mQ),
            HQ = uQ.x;
          return {
            x: HQ,
            y: uQ.y,
            textAnchor: HQ >= oQ ? "start" : "end",
            verticalAnchor: "middle"
          }
        }
        if ("center" === LQ) return {
          x: oQ,
          y: DQ,
          textAnchor: "middle",
          verticalAnchor: "middle"
        };
        if ("centerTop" === LQ) return {
          x: oQ,
          y: DQ,
          textAnchor: "middle",
          verticalAnchor: "start"
        };
        if ("centerBottom" === LQ) return {
          x: oQ,
          y: DQ,
          textAnchor: "middle",
          verticalAnchor: "end"
        };
        var bQ = (kQ + vQ) / 2,
          YQ = (0, xQ.m)(oQ, DQ, bQ, mQ);
        return {
          x: YQ.x,
          y: YQ.y,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }
      },
      OQ = function(QQ) {
        var FQ = QQ.viewBox,
          wQ = QQ.parentViewBox,
          LQ = QQ.offset,
          qQ = QQ.position,
          oQ = FQ,
          DQ = oQ.x,
          kQ = oQ.y,
          vQ = oQ.width,
          uQ = oQ.height,
          HQ = uQ >= 0 ? 1 : -1,
          bQ = HQ * LQ,
          xQ = HQ > 0 ? "end" : "start",
          AQ = HQ > 0 ? "start" : "end",
          tQ = vQ >= 0 ? 1 : -1,
          eQ = tQ * LQ,
          MQ = tQ > 0 ? "end" : "start",
          GQ = tQ > 0 ? "start" : "end";
        if ("top" === qQ) return cQ(cQ({}, {
          x: DQ + vQ / 2,
          y: kQ - HQ * LQ,
          textAnchor: "middle",
          verticalAnchor: xQ
        }), wQ ? {
          height: Math.max(kQ - wQ.y, 0),
          width: vQ
        } : {});
        if ("bottom" === qQ) return cQ(cQ({}, {
          x: DQ + vQ / 2,
          y: kQ + uQ + bQ,
          textAnchor: "middle",
          verticalAnchor: AQ
        }), wQ ? {
          height: Math.max(wQ.y + wQ.height - (kQ + uQ), 0),
          width: vQ
        } : {});
        if ("left" === qQ) {
          var pQ = {
            x: DQ - eQ,
            y: kQ + uQ / 2,
            textAnchor: MQ,
            verticalAnchor: "middle"
          };
          return cQ(cQ({}, pQ), wQ ? {
            width: Math.max(pQ.x - wQ.x, 0),
            height: uQ
          } : {})
        }
        if ("right" === qQ) {
          var CQ = {
            x: DQ + vQ + eQ,
            y: kQ + uQ / 2,
            textAnchor: GQ,
            verticalAnchor: "middle"
          };
          return cQ(cQ({}, CQ), wQ ? {
            width: Math.max(wQ.x + wQ.width - CQ.x, 0),
            height: uQ
          } : {})
        }
        var SQ = wQ ? {
          width: vQ,
          height: uQ
        } : {};
        return "insideLeft" === qQ ? cQ({
          x: DQ + eQ,
          y: kQ + uQ / 2,
          textAnchor: GQ,
          verticalAnchor: "middle"
        }, SQ) : "insideRight" === qQ ? cQ({
          x: DQ + vQ - eQ,
          y: kQ + uQ / 2,
          textAnchor: MQ,
          verticalAnchor: "middle"
        }, SQ) : "insideTop" === qQ ? cQ({
          x: DQ + vQ / 2,
          y: kQ + bQ,
          textAnchor: "middle",
          verticalAnchor: AQ
        }, SQ) : "insideBottom" === qQ ? cQ({
          x: DQ + vQ / 2,
          y: kQ + uQ - bQ,
          textAnchor: "middle",
          verticalAnchor: xQ
        }, SQ) : "insideTopLeft" === qQ ? cQ({
          x: DQ + eQ,
          y: kQ + bQ,
          textAnchor: GQ,
          verticalAnchor: AQ
        }, SQ) : "insideTopRight" === qQ ? cQ({
          x: DQ + vQ - eQ,
          y: kQ + bQ,
          textAnchor: MQ,
          verticalAnchor: AQ
        }, SQ) : "insideBottomLeft" === qQ ? cQ({
          x: DQ + eQ,
          y: kQ + uQ - bQ,
          textAnchor: GQ,
          verticalAnchor: xQ
        }, SQ) : "insideBottomRight" === qQ ? cQ({
          x: DQ + vQ - eQ,
          y: kQ + uQ - bQ,
          textAnchor: MQ,
          verticalAnchor: xQ
        }, SQ) : mQ()(qQ) && ((0, YQ.t)(qQ.x) || (0, YQ.x)(qQ.x)) && ((0, YQ.t)(qQ.y) || (0, YQ.x)(qQ.y)) ? cQ({
          x: DQ + (0, YQ.k)(qQ.x, vQ),
          y: kQ + (0, YQ.k)(qQ.y, uQ),
          textAnchor: "end",
          verticalAnchor: "end"
        }, SQ) : cQ({
          x: DQ + vQ / 2,
          y: kQ + uQ / 2,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }, SQ)
      },
      sQ = function(QQ) {
        return "cx" in QQ && (0, YQ.t)(QQ.cx)
      };

    function rQ(QQ) {
      var FQ, wQ = QQ.offset,
        qQ = cQ({
          offset: void 0 === wQ ? 5 : wQ
        }, GQ(QQ, tQ)),
        DQ = qQ.viewBox,
        vQ = qQ.position,
        mQ = qQ.value,
        YQ = qQ.children,
        xQ = qQ.content,
        AQ = qQ.className,
        eQ = void 0 === AQ ? "" : AQ,
        MQ = qQ.textBreakAll;
      if (!DQ || oQ()(mQ) && oQ()(YQ) && !(0, LQ.isValidElement)(xQ) && !kQ()(xQ)) return null;
      if ((0, LQ.isValidElement)(xQ)) return (0, LQ.cloneElement)(xQ, qQ);
      if (kQ()(xQ)) {
        if (FQ = (0, LQ.createElement)(xQ, qQ), (0, LQ.isValidElement)(FQ)) return FQ
      } else FQ = iQ(qQ);
      var pQ = sQ(DQ),
        CQ = (0, bQ.e)(qQ, !0);
      if (pQ && ("insideStart" === vQ || "insideEnd" === vQ || "end" === vQ)) return WQ(qQ, FQ, CQ);
      var rQ = pQ ? RQ(qQ) : OQ(qQ);
      return LQ.createElement(HQ.e, SQ({
        className: (0, uQ.b)("recharts-label", eQ)
      }, CQ, rQ, {
        breakAll: MQ
      }), FQ)
    }
    rQ.displayName = "Label";
    var IQ = function(QQ) {
      var FQ = QQ.cx,
        wQ = QQ.cy,
        LQ = QQ.angle,
        qQ = QQ.startAngle,
        oQ = QQ.endAngle,
        DQ = QQ.r,
        kQ = QQ.radius,
        vQ = QQ.innerRadius,
        mQ = QQ.outerRadius,
        uQ = QQ.x,
        HQ = QQ.y,
        bQ = QQ.top,
        xQ = QQ.left,
        AQ = QQ.width,
        tQ = QQ.height,
        eQ = QQ.clockWise,
        MQ = QQ.labelViewBox;
      if (MQ) return MQ;
      if ((0, YQ.t)(AQ) && (0, YQ.t)(tQ)) {
        if ((0, YQ.t)(uQ) && (0, YQ.t)(HQ)) return {
          x: uQ,
          y: HQ,
          width: AQ,
          height: tQ
        };
        if ((0, YQ.t)(bQ) && (0, YQ.t)(xQ)) return {
          x: bQ,
          y: xQ,
          width: AQ,
          height: tQ
        }
      }
      return (0, YQ.t)(uQ) && (0, YQ.t)(HQ) ? {
        x: uQ,
        y: HQ,
        width: 0,
        height: 0
      } : (0, YQ.t)(FQ) && (0, YQ.t)(wQ) ? {
        cx: FQ,
        cy: wQ,
        startAngle: qQ || LQ || 0,
        endAngle: oQ || LQ || 0,
        innerRadius: vQ || 0,
        outerRadius: mQ || kQ || DQ || 0,
        clockWise: eQ
      } : QQ.viewBox ? QQ.viewBox : {}
    };
    rQ.parseViewBox = IQ, rQ.renderCallByParent = function(QQ, FQ) {
      var wQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!QQ || !QQ.children && wQ && !QQ.label) return null;
      var qQ = QQ.children,
        oQ = IQ(QQ),
        DQ = (0, bQ.i)(qQ, rQ).map((function(QQ, wQ) {
          return (0, LQ.cloneElement)(QQ, {
            viewBox: FQ || oQ,
            key: "label-".concat(wQ)
          })
        }));
      if (!wQ) return DQ;
      var vQ = function(QQ, FQ) {
        return QQ ? !0 === QQ ? LQ.createElement(rQ, {
          key: "label-implicit",
          viewBox: FQ
        }) : (0, YQ.s)(QQ) ? LQ.createElement(rQ, {
          key: "label-implicit",
          viewBox: FQ,
          value: QQ
        }) : (0, LQ.isValidElement)(QQ) ? QQ.type === rQ ? (0, LQ.cloneElement)(QQ, {
          key: "label-implicit",
          viewBox: FQ
        }) : LQ.createElement(rQ, {
          key: "label-implicit",
          content: QQ,
          viewBox: FQ
        }) : kQ()(QQ) ? LQ.createElement(rQ, {
          key: "label-implicit",
          content: QQ,
          viewBox: FQ
        }) : mQ()(QQ) ? LQ.createElement(rQ, SQ({
          viewBox: FQ
        }, QQ, {
          key: "label-implicit"
        })) : null : null
      }(QQ.label, FQ || oQ);
      return [vQ].concat(eQ(DQ))
    }
  },
  6118: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => OQ
    });
    var LQ = wQ(53),
      qQ = wQ(5240),
      oQ = wQ.n(qQ),
      DQ = wQ(4932),
      kQ = wQ.n(DQ),
      vQ = wQ(5095),
      mQ = wQ.n(vQ),
      uQ = wQ(6123),
      HQ = wQ.n(uQ),
      bQ = wQ(6052),
      YQ = wQ(5800),
      xQ = wQ(5252),
      AQ = wQ(5974);

    function tQ(QQ) {
      return tQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, tQ(QQ)
    }
    var eQ = ["valueAccessor"],
      MQ = ["data", "dataKey", "clockWise", "id", "textBreakAll"];

    function GQ(QQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return pQ(QQ)
      }(QQ) || function(QQ) {
        if ("undefined" !== typeof Symbol && null != QQ[Symbol.iterator] || null != QQ["@@iterator"]) return Array.from(QQ)
      }(QQ) || function(QQ, FQ) {
        if (!QQ) return;
        if ("string" === typeof QQ) return pQ(QQ, FQ);
        var wQ = Object.prototype.toString.call(QQ).slice(8, -1);
        "Object" === wQ && QQ.constructor && (wQ = QQ.constructor.name);
        if ("Map" === wQ || "Set" === wQ) return Array.from(QQ);
        if ("Arguments" === wQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wQ)) return pQ(QQ, FQ)
      }(QQ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function pQ(QQ, FQ) {
      (null == FQ || FQ > QQ.length) && (FQ = QQ.length);
      for (var wQ = 0, LQ = new Array(FQ); wQ < FQ; wQ++) LQ[wQ] = QQ[wQ];
      return LQ
    }

    function cQ() {
      return cQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var FQ = 1; FQ < arguments.length; FQ++) {
          var wQ = arguments[FQ];
          for (var LQ in wQ) Object.prototype.hasOwnProperty.call(wQ, LQ) && (QQ[LQ] = wQ[LQ])
        }
        return QQ
      }, cQ.apply(this, arguments)
    }

    function CQ(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function SQ(QQ) {
      for (var FQ = 1; FQ < arguments.length; FQ++) {
        var wQ = null != arguments[FQ] ? arguments[FQ] : {};
        FQ % 2 ? CQ(Object(wQ), !0).forEach((function(FQ) {
          iQ(QQ, FQ, wQ[FQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : CQ(Object(wQ)).forEach((function(FQ) {
          Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
        }))
      }
      return QQ
    }

    function iQ(QQ, FQ, wQ) {
      return (FQ = function(QQ) {
        var FQ = function(QQ, FQ) {
          if ("object" != tQ(QQ) || !QQ) return QQ;
          var wQ = QQ[Symbol.toPrimitive];
          if (void 0 !== wQ) {
            var LQ = wQ.call(QQ, FQ || "default");
            if ("object" != tQ(LQ)) return LQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === FQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == tQ(FQ) ? FQ : FQ + ""
      }(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }

    function WQ(QQ, FQ) {
      if (null == QQ) return {};
      var wQ, LQ, qQ = function(QQ, FQ) {
        if (null == QQ) return {};
        var wQ = {};
        for (var LQ in QQ)
          if (Object.prototype.hasOwnProperty.call(QQ, LQ)) {
            if (FQ.indexOf(LQ) >= 0) continue;
            wQ[LQ] = QQ[LQ]
          } return wQ
      }(QQ, FQ);
      if (Object.getOwnPropertySymbols) {
        var oQ = Object.getOwnPropertySymbols(QQ);
        for (LQ = 0; LQ < oQ.length; LQ++) wQ = oQ[LQ], FQ.indexOf(wQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, wQ) && (qQ[wQ] = QQ[wQ])
      }
      return qQ
    }
    var RQ = function(QQ) {
      return Array.isArray(QQ.value) ? HQ()(QQ.value) : QQ.value
    };

    function OQ(QQ) {
      var FQ = QQ.valueAccessor,
        wQ = void 0 === FQ ? RQ : FQ,
        qQ = WQ(QQ, eQ),
        DQ = qQ.data,
        kQ = qQ.dataKey,
        vQ = qQ.clockWise,
        mQ = qQ.id,
        uQ = qQ.textBreakAll,
        HQ = WQ(qQ, MQ);
      return DQ && DQ.length ? LQ.createElement(YQ.e, {
        className: "recharts-label-list"
      }, DQ.map((function(QQ, FQ) {
        var qQ = oQ()(kQ) ? wQ(QQ, FQ) : (0, AQ.$)(QQ && QQ.payload, kQ),
          DQ = oQ()(mQ) ? {} : {
            id: "".concat(mQ, "-").concat(FQ)
          };
        return LQ.createElement(bQ.b, cQ({}, (0, xQ.e)(QQ, !0), HQ, DQ, {
          parentViewBox: QQ.parentViewBox,
          value: qQ,
          textBreakAll: uQ,
          viewBox: bQ.b.parseViewBox(oQ()(vQ) ? QQ : SQ(SQ({}, QQ), {}, {
            clockWise: vQ
          })),
          key: "label-".concat(FQ),
          index: FQ
        }))
      }))) : null
    }
    OQ.displayName = "LabelList", OQ.renderCallByParent = function(QQ, FQ) {
      var wQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!QQ || !QQ.children && wQ && !QQ.label) return null;
      var qQ = QQ.children,
        oQ = (0, xQ.i)(qQ, OQ).map((function(QQ, wQ) {
          return (0, LQ.cloneElement)(QQ, {
            data: FQ,
            key: "labelList-".concat(wQ)
          })
        }));
      return wQ ? [function(QQ, FQ) {
        return QQ ? !0 === QQ ? LQ.createElement(OQ, {
          key: "labelList-implicit",
          data: FQ
        }) : LQ.isValidElement(QQ) || mQ()(QQ) ? LQ.createElement(OQ, {
          key: "labelList-implicit",
          data: FQ,
          content: QQ
        }) : kQ()(QQ) ? LQ.createElement(OQ, cQ({
          data: FQ
        }, QQ, {
          key: "labelList-implicit"
        })) : null : null
      }(QQ.label, FQ)].concat(GQ(oQ)) : oQ
    }
  },
  5887: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => aQ
    });
    var LQ = wQ(53),
      qQ = wQ(5095),
      oQ = wQ.n(qQ),
      DQ = wQ(4909),
      kQ = wQ(5243),
      vQ = wQ(5791),
      mQ = wQ(5893),
      uQ = wQ(5277);

    function HQ(QQ) {
      return HQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, HQ(QQ)
    }

    function bQ() {
      return bQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var FQ = 1; FQ < arguments.length; FQ++) {
          var wQ = arguments[FQ];
          for (var LQ in wQ) Object.prototype.hasOwnProperty.call(wQ, LQ) && (QQ[LQ] = wQ[LQ])
        }
        return QQ
      }, bQ.apply(this, arguments)
    }

    function YQ(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function xQ(QQ, FQ) {
      for (var wQ = 0; wQ < FQ.length; wQ++) {
        var LQ = FQ[wQ];
        LQ.enumerable = LQ.enumerable || !1, LQ.configurable = !0, "value" in LQ && (LQ.writable = !0), Object.defineProperty(QQ, pQ(LQ.key), LQ)
      }
    }

    function AQ(QQ, FQ, wQ) {
      return FQ = eQ(FQ),
        function(QQ, FQ) {
          if (FQ && ("object" === HQ(FQ) || "function" === typeof FQ)) return FQ;
          if (void 0 !== FQ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(QQ) {
            if (void 0 === QQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return QQ
          }(QQ)
        }(QQ, tQ() ? Reflect.construct(FQ, wQ || [], eQ(QQ).constructor) : FQ.apply(QQ, wQ))
    }

    function tQ() {
      try {
        var QQ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (QQ) {}
      return (tQ = function() {
        return !!QQ
      })()
    }

    function eQ(QQ) {
      return eQ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(QQ) {
        return QQ.__proto__ || Object.getPrototypeOf(QQ)
      }, eQ(QQ)
    }

    function MQ(QQ, FQ) {
      return MQ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(QQ, FQ) {
        return QQ.__proto__ = FQ, QQ
      }, MQ(QQ, FQ)
    }

    function GQ(QQ, FQ, wQ) {
      return (FQ = pQ(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }

    function pQ(QQ) {
      var FQ = function(QQ, FQ) {
        if ("object" != HQ(QQ) || !QQ) return QQ;
        var wQ = QQ[Symbol.toPrimitive];
        if (void 0 !== wQ) {
          var LQ = wQ.call(QQ, FQ || "default");
          if ("object" != HQ(LQ)) return LQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === FQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == HQ(FQ) ? FQ : FQ + ""
    }
    var cQ = 32,
      CQ = function(QQ) {
        function FQ() {
          return function(QQ, FQ) {
            if (!(QQ instanceof FQ)) throw new TypeError("Cannot call a class as a function")
          }(this, FQ), AQ(this, FQ, arguments)
        }
        return function(QQ, FQ) {
          if ("function" !== typeof FQ && null !== FQ) throw new TypeError("Super expression must either be null or a function");
          QQ.prototype = Object.create(FQ && FQ.prototype, {
            constructor: {
              value: QQ,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(QQ, "prototype", {
            writable: !1
          }), FQ && MQ(QQ, FQ)
        }(FQ, QQ), wQ = FQ, qQ = [{
          key: "renderIcon",
          value: function(QQ) {
            var FQ = this.props.inactiveColor,
              wQ = 16,
              qQ = cQ / 6,
              oQ = cQ / 3,
              DQ = QQ.inactive ? FQ : QQ.color;
            if ("plainline" === QQ.type) return LQ.createElement("line", {
              strokeWidth: 4,
              fill: "none",
              stroke: DQ,
              strokeDasharray: QQ.payload.strokeDasharray,
              x1: 0,
              y1: wQ,
              x2: cQ,
              y2: wQ,
              className: "recharts-legend-icon"
            });
            if ("line" === QQ.type) return LQ.createElement("path", {
              strokeWidth: 4,
              fill: "none",
              stroke: DQ,
              d: "M0,".concat(wQ, "h").concat(oQ, "\n            A").concat(qQ, ",").concat(qQ, ",0,1,1,").concat(2 * oQ, ",").concat(wQ, "\n            H").concat(cQ, "M").concat(2 * oQ, ",").concat(wQ, "\n            A").concat(qQ, ",").concat(qQ, ",0,1,1,").concat(oQ, ",").concat(wQ),
              className: "recharts-legend-icon"
            });
            if ("rect" === QQ.type) return LQ.createElement("path", {
              stroke: "none",
              fill: DQ,
              d: "M0,".concat(4, "h").concat(cQ, "v").concat(24, "h").concat(-32, "z"),
              className: "recharts-legend-icon"
            });
            if (LQ.isValidElement(QQ.legendIcon)) {
              var kQ = function(QQ) {
                for (var FQ = 1; FQ < arguments.length; FQ++) {
                  var wQ = null != arguments[FQ] ? arguments[FQ] : {};
                  FQ % 2 ? YQ(Object(wQ), !0).forEach((function(FQ) {
                    GQ(QQ, FQ, wQ[FQ])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : YQ(Object(wQ)).forEach((function(FQ) {
                    Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
                  }))
                }
                return QQ
              }({}, QQ);
              return delete kQ.legendIcon, LQ.cloneElement(QQ.legendIcon, kQ)
            }
            return LQ.createElement(mQ.b, {
              fill: DQ,
              cx: wQ,
              cy: wQ,
              size: cQ,
              sizeType: "diameter",
              type: QQ.type
            })
          }
        }, {
          key: "renderItems",
          value: function() {
            var QQ = this,
              FQ = this.props,
              wQ = FQ.payload,
              qQ = FQ.iconSize,
              mQ = FQ.layout,
              HQ = FQ.formatter,
              YQ = FQ.inactiveColor,
              xQ = {
                x: 0,
                y: 0,
                width: cQ,
                height: cQ
              },
              AQ = {
                display: "horizontal" === mQ ? "inline-block" : "block",
                marginRight: 10
              },
              tQ = {
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: 4
              };
            return wQ.map((function(FQ, wQ) {
              var mQ = FQ.formatter || HQ,
                eQ = (0, DQ.b)(GQ(GQ({
                  "recharts-legend-item": !0
                }, "legend-item-".concat(wQ), !0), "inactive", FQ.inactive));
              if ("none" === FQ.type) return null;
              var MQ = oQ()(FQ.value) ? null : FQ.value;
              (0, kQ.c)(!oQ()(FQ.value), 'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>');
              var pQ = FQ.inactive ? YQ : FQ.color;
              return LQ.createElement("li", bQ({
                className: eQ,
                style: AQ,
                key: "legend-item-".concat(wQ)
              }, (0, uQ.j)(QQ.props, FQ, wQ)), LQ.createElement(vQ.b, {
                width: qQ,
                height: qQ,
                viewBox: xQ,
                style: tQ
              }, QQ.renderIcon(FQ)), LQ.createElement("span", {
                className: "recharts-legend-item-text",
                style: {
                  color: pQ
                }
              }, mQ ? mQ(MQ, FQ, wQ) : MQ))
            }))
          }
        }, {
          key: "render",
          value: function() {
            var QQ = this.props,
              FQ = QQ.payload,
              wQ = QQ.layout,
              qQ = QQ.align;
            if (!FQ || !FQ.length) return null;
            var oQ = {
              padding: 0,
              margin: 0,
              textAlign: "horizontal" === wQ ? qQ : "left"
            };
            return LQ.createElement("ul", {
              className: "recharts-default-legend",
              style: oQ
            }, this.renderItems())
          }
        }], qQ && xQ(wQ.prototype, qQ), HQ && xQ(wQ, HQ), Object.defineProperty(wQ, "prototype", {
          writable: !1
        }), wQ;
        var wQ, qQ, HQ
      }(LQ.PureComponent);
    GQ(CQ, "displayName", "Legend"), GQ(CQ, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "middle",
      inactiveColor: "#ccc"
    });
    var SQ = wQ(5002),
      iQ = wQ(5816);

    function WQ(QQ) {
      return WQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, WQ(QQ)
    }
    var RQ = ["ref"];

    function OQ(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function sQ(QQ) {
      for (var FQ = 1; FQ < arguments.length; FQ++) {
        var wQ = null != arguments[FQ] ? arguments[FQ] : {};
        FQ % 2 ? OQ(Object(wQ), !0).forEach((function(FQ) {
          KQ(QQ, FQ, wQ[FQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : OQ(Object(wQ)).forEach((function(FQ) {
          Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
        }))
      }
      return QQ
    }

    function rQ(QQ, FQ) {
      for (var wQ = 0; wQ < FQ.length; wQ++) {
        var LQ = FQ[wQ];
        LQ.enumerable = LQ.enumerable || !1, LQ.configurable = !0, "value" in LQ && (LQ.writable = !0), Object.defineProperty(QQ, zQ(LQ.key), LQ)
      }
    }

    function IQ(QQ, FQ, wQ) {
      return FQ = NQ(FQ),
        function(QQ, FQ) {
          if (FQ && ("object" === WQ(FQ) || "function" === typeof FQ)) return FQ;
          if (void 0 !== FQ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(QQ) {
            if (void 0 === QQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return QQ
          }(QQ)
        }(QQ, UQ() ? Reflect.construct(FQ, wQ || [], NQ(QQ).constructor) : FQ.apply(QQ, wQ))
    }

    function UQ() {
      try {
        var QQ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (QQ) {}
      return (UQ = function() {
        return !!QQ
      })()
    }

    function NQ(QQ) {
      return NQ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(QQ) {
        return QQ.__proto__ || Object.getPrototypeOf(QQ)
      }, NQ(QQ)
    }

    function TQ(QQ, FQ) {
      return TQ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(QQ, FQ) {
        return QQ.__proto__ = FQ, QQ
      }, TQ(QQ, FQ)
    }

    function KQ(QQ, FQ, wQ) {
      return (FQ = zQ(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }

    function zQ(QQ) {
      var FQ = function(QQ, FQ) {
        if ("object" != WQ(QQ) || !QQ) return QQ;
        var wQ = QQ[Symbol.toPrimitive];
        if (void 0 !== wQ) {
          var LQ = wQ.call(QQ, FQ || "default");
          if ("object" != WQ(LQ)) return LQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === FQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == WQ(FQ) ? FQ : FQ + ""
    }

    function lQ(QQ, FQ) {
      if (null == QQ) return {};
      var wQ, LQ, qQ = function(QQ, FQ) {
        if (null == QQ) return {};
        var wQ = {};
        for (var LQ in QQ)
          if (Object.prototype.hasOwnProperty.call(QQ, LQ)) {
            if (FQ.indexOf(LQ) >= 0) continue;
            wQ[LQ] = QQ[LQ]
          } return wQ
      }(QQ, FQ);
      if (Object.getOwnPropertySymbols) {
        var oQ = Object.getOwnPropertySymbols(QQ);
        for (LQ = 0; LQ < oQ.length; LQ++) wQ = oQ[LQ], FQ.indexOf(wQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, wQ) && (qQ[wQ] = QQ[wQ])
      }
      return qQ
    }

    function jQ(QQ) {
      return QQ.value
    }
    var aQ = function(QQ) {
      function FQ() {
        var QQ;
        ! function(QQ, FQ) {
          if (!(QQ instanceof FQ)) throw new TypeError("Cannot call a class as a function")
        }(this, FQ);
        for (var wQ = arguments.length, LQ = new Array(wQ), qQ = 0; qQ < wQ; qQ++) LQ[qQ] = arguments[qQ];
        return KQ(QQ = IQ(this, FQ, [].concat(LQ)), "lastBoundingBox", {
          width: -1,
          height: -1
        }), QQ
      }
      return function(QQ, FQ) {
        if ("function" !== typeof FQ && null !== FQ) throw new TypeError("Super expression must either be null or a function");
        QQ.prototype = Object.create(FQ && FQ.prototype, {
          constructor: {
            value: QQ,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(QQ, "prototype", {
          writable: !1
        }), FQ && TQ(QQ, FQ)
      }(FQ, QQ), wQ = FQ, oQ = [{
        key: "getWithHeight",
        value: function(QQ, FQ) {
          var wQ = sQ(sQ({}, this.defaultProps), QQ.props).layout;
          return "vertical" === wQ && (0, SQ.t)(QQ.props.height) ? {
            height: QQ.props.height
          } : "horizontal" === wQ ? {
            width: QQ.props.width || FQ
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
            FQ = this.getBBox();
          FQ ? (Math.abs(FQ.width - this.lastBoundingBox.width) > 1 || Math.abs(FQ.height - this.lastBoundingBox.height) > 1) && (this.lastBoundingBox.width = FQ.width, this.lastBoundingBox.height = FQ.height, QQ && QQ(FQ)) : -1 === this.lastBoundingBox.width && -1 === this.lastBoundingBox.height || (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, QQ && QQ(null))
        }
      }, {
        key: "getBBoxSnapshot",
        value: function() {
          return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? sQ({}, this.lastBoundingBox) : {
            width: 0,
            height: 0
          }
        }
      }, {
        key: "getDefaultPosition",
        value: function(QQ) {
          var FQ, wQ, LQ = this.props,
            qQ = LQ.layout,
            oQ = LQ.align,
            DQ = LQ.verticalAlign,
            kQ = LQ.margin,
            vQ = LQ.chartWidth,
            mQ = LQ.chartHeight;
          return QQ && (void 0 !== QQ.left && null !== QQ.left || void 0 !== QQ.right && null !== QQ.right) || (FQ = "center" === oQ && "vertical" === qQ ? {
            left: ((vQ || 0) - this.getBBoxSnapshot().width) / 2
          } : "right" === oQ ? {
            right: kQ && kQ.right || 0
          } : {
            left: kQ && kQ.left || 0
          }), QQ && (void 0 !== QQ.top && null !== QQ.top || void 0 !== QQ.bottom && null !== QQ.bottom) || (wQ = "middle" === DQ ? {
            top: ((mQ || 0) - this.getBBoxSnapshot().height) / 2
          } : "bottom" === DQ ? {
            bottom: kQ && kQ.bottom || 0
          } : {
            top: kQ && kQ.top || 0
          }), sQ(sQ({}, FQ), wQ)
        }
      }, {
        key: "render",
        value: function() {
          var QQ = this,
            FQ = this.props,
            wQ = FQ.content,
            qQ = FQ.width,
            oQ = FQ.height,
            DQ = FQ.wrapperStyle,
            kQ = FQ.payloadUniqBy,
            vQ = FQ.payload,
            mQ = sQ(sQ({
              position: "absolute",
              width: qQ || "auto",
              height: oQ || "auto"
            }, this.getDefaultPosition(DQ)), DQ);
          return LQ.createElement("div", {
            className: "recharts-legend-wrapper",
            style: mQ,
            ref: function(FQ) {
              QQ.wrapperNode = FQ
            }
          }, function(QQ, FQ) {
            if (LQ.isValidElement(QQ)) return LQ.cloneElement(QQ, FQ);
            if ("function" === typeof QQ) return LQ.createElement(QQ, FQ);
            FQ.ref;
            var wQ = lQ(FQ, RQ);
            return LQ.createElement(CQ, wQ)
          }(wQ, sQ(sQ({}, this.props), {}, {
            payload: (0, iQ.d)(vQ, kQ, jQ)
          })))
        }
      }]) && rQ(wQ.prototype, qQ), oQ && rQ(wQ, oQ), Object.defineProperty(wQ, "prototype", {
        writable: !1
      }), wQ;
      var wQ, qQ, oQ
    }(LQ.PureComponent);
    KQ(aQ, "displayName", "Legend"), KQ(aQ, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom"
    })
  },
  4903: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => tQ
    });
    var LQ = wQ(4909),
      qQ = wQ(53),
      oQ = wQ(4916),
      DQ = wQ.n(oQ),
      kQ = wQ(5002),
      vQ = wQ(5243),
      mQ = wQ(5252);

    function uQ(QQ) {
      return uQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, uQ(QQ)
    }

    function HQ(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function bQ(QQ) {
      for (var FQ = 1; FQ < arguments.length; FQ++) {
        var wQ = null != arguments[FQ] ? arguments[FQ] : {};
        FQ % 2 ? HQ(Object(wQ), !0).forEach((function(FQ) {
          YQ(QQ, FQ, wQ[FQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : HQ(Object(wQ)).forEach((function(FQ) {
          Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
        }))
      }
      return QQ
    }

    function YQ(QQ, FQ, wQ) {
      return (FQ = function(QQ) {
        var FQ = function(QQ, FQ) {
          if ("object" != uQ(QQ) || !QQ) return QQ;
          var wQ = QQ[Symbol.toPrimitive];
          if (void 0 !== wQ) {
            var LQ = wQ.call(QQ, FQ || "default");
            if ("object" != uQ(LQ)) return LQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === FQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == uQ(FQ) ? FQ : FQ + ""
      }(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }

    function xQ(QQ, FQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return QQ
      }(QQ) || function(QQ, FQ) {
        var wQ = null == QQ ? null : "undefined" != typeof Symbol && QQ[Symbol.iterator] || QQ["@@iterator"];
        if (null != wQ) {
          var LQ, qQ, oQ, DQ, kQ = [],
            vQ = !0,
            mQ = !1;
          try {
            if (oQ = (wQ = wQ.call(QQ)).next, 0 === FQ) {
              if (Object(wQ) !== wQ) return;
              vQ = !1
            } else
              for (; !(vQ = (LQ = oQ.call(wQ)).done) && (kQ.push(LQ.value), kQ.length !== FQ); vQ = !0);
          } catch (QQ) {
            mQ = !0, qQ = QQ
          } finally {
            try {
              if (!vQ && null != wQ.return && (DQ = wQ.return(), Object(DQ) !== DQ)) return
            } finally {
              if (mQ) throw qQ
            }
          }
          return kQ
        }
      }(QQ, FQ) || function(QQ, FQ) {
        if (!QQ) return;
        if ("string" === typeof QQ) return AQ(QQ, FQ);
        var wQ = Object.prototype.toString.call(QQ).slice(8, -1);
        "Object" === wQ && QQ.constructor && (wQ = QQ.constructor.name);
        if ("Map" === wQ || "Set" === wQ) return Array.from(QQ);
        if ("Arguments" === wQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wQ)) return AQ(QQ, FQ)
      }(QQ, FQ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function AQ(QQ, FQ) {
      (null == FQ || FQ > QQ.length) && (FQ = QQ.length);
      for (var wQ = 0, LQ = new Array(FQ); wQ < FQ; wQ++) LQ[wQ] = QQ[wQ];
      return LQ
    }
    var tQ = (0, qQ.forwardRef)((function(QQ, FQ) {
      var wQ = QQ.aspect,
        oQ = QQ.initialDimension,
        uQ = void 0 === oQ ? {
          width: -1,
          height: -1
        } : oQ,
        HQ = QQ.width,
        YQ = void 0 === HQ ? "100%" : HQ,
        AQ = QQ.height,
        tQ = void 0 === AQ ? "100%" : AQ,
        eQ = QQ.minWidth,
        MQ = void 0 === eQ ? 0 : eQ,
        GQ = QQ.minHeight,
        pQ = QQ.maxHeight,
        cQ = QQ.children,
        CQ = QQ.debounce,
        SQ = void 0 === CQ ? 0 : CQ,
        iQ = QQ.id,
        WQ = QQ.className,
        RQ = QQ.aG,
        OQ = QQ.style,
        sQ = void 0 === OQ ? {} : OQ,
        rQ = (0, qQ.useRef)(null),
        IQ = (0, qQ.useRef)();
      IQ.current = RQ, (0, qQ.useImperativeHandle)(FQ, (function() {
        return Object.defineProperty(rQ.current, "current", {
          get: function() {
            return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), rQ.current
          },
          configurable: !0
        })
      }));
      var UQ = xQ((0, qQ.useState)({
          containerWidth: uQ.width,
          containerHeight: uQ.height
        }), 2),
        NQ = UQ[0],
        TQ = UQ[1],
        KQ = (0, qQ.useCallback)((function(QQ, FQ) {
          TQ((function(wQ) {
            var LQ = Math.round(QQ),
              qQ = Math.round(FQ);
            return wQ.containerWidth === LQ && wQ.containerHeight === qQ ? wQ : {
              containerWidth: LQ,
              containerHeight: qQ
            }
          }))
        }), []);
      (0, qQ.useEffect)((function() {
        var QQ = function(QQ) {
          var FQ, wQ = QQ[0].contentRect,
            LQ = wQ.width,
            qQ = wQ.height;
          KQ(LQ, qQ), null === (FQ = IQ.current) || void 0 === FQ || FQ.call(IQ, LQ, qQ)
        };
        SQ > 0 && (QQ = DQ()(QQ, SQ, {
          trailing: !0,
          leading: !1
        }));
        var FQ = new ResizeObserver(QQ),
          wQ = rQ.current.getBoundingClientRect(),
          LQ = wQ.width,
          qQ = wQ.height;
        return KQ(LQ, qQ), FQ.observe(rQ.current),
          function() {
            FQ.disconnect()
          }
      }), [KQ, SQ]);
      var zQ = (0, qQ.useMemo)((function() {
        var QQ = NQ.containerWidth,
          FQ = NQ.containerHeight;
        if (QQ < 0 || FQ < 0) return null;
        (0, vQ.c)((0, kQ.x)(YQ) || (0, kQ.x)(tQ), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", YQ, tQ), (0, vQ.c)(!wQ || wQ > 0, "The aspect(%s) must be greater than zero.", wQ);
        var LQ = (0, kQ.x)(YQ) ? QQ : YQ,
          oQ = (0, kQ.x)(tQ) ? FQ : tQ;
        wQ && wQ > 0 && (LQ ? oQ = LQ / wQ : oQ && (LQ = oQ * wQ), pQ && oQ > pQ && (oQ = pQ)), (0, vQ.c)(LQ > 0 || oQ > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", LQ, oQ, YQ, tQ, MQ, GQ, wQ);
        var DQ = !Array.isArray(cQ) && (0, mQ.p)(cQ.type).endsWith("Chart");
        return qQ.Children.map(cQ, (function(QQ) {
          return qQ.isValidElement(QQ) ? (0, qQ.cloneElement)(QQ, bQ({
            width: LQ,
            height: oQ
          }, DQ ? {
            style: bQ({
              height: "100%",
              width: "100%",
              maxHeight: oQ,
              maxWidth: LQ
            }, QQ.props.style)
          } : {})) : QQ
        }))
      }), [wQ, cQ, tQ, pQ, GQ, MQ, NQ, YQ]);
      return qQ.createElement("div", {
        id: iQ ? "".concat(iQ) : void 0,
        className: (0, LQ.b)("recharts-responsive-container", WQ),
        style: bQ(bQ({}, sQ), {}, {
          width: YQ,
          height: tQ,
          minWidth: MQ,
          minHeight: GQ,
          maxHeight: pQ
        }),
        ref: rQ
      }, zQ)
    }))
  },
  5962: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => XQ
    });
    var LQ = wQ(53),
      qQ = wQ(5240),
      oQ = wQ.n(qQ),
      DQ = wQ(4909),
      kQ = wQ(5002),
      vQ = wQ(5812),
      mQ = wQ(5252),
      uQ = wQ(5967);

    function HQ(QQ) {
      return HQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, HQ(QQ)
    }

    function bQ(QQ, FQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return QQ
      }(QQ) || function(QQ, FQ) {
        var wQ = null == QQ ? null : "undefined" != typeof Symbol && QQ[Symbol.iterator] || QQ["@@iterator"];
        if (null != wQ) {
          var LQ, qQ, oQ, DQ, kQ = [],
            vQ = !0,
            mQ = !1;
          try {
            if (oQ = (wQ = wQ.call(QQ)).next, 0 === FQ) {
              if (Object(wQ) !== wQ) return;
              vQ = !1
            } else
              for (; !(vQ = (LQ = oQ.call(wQ)).done) && (kQ.push(LQ.value), kQ.length !== FQ); vQ = !0);
          } catch (QQ) {
            mQ = !0, qQ = QQ
          } finally {
            try {
              if (!vQ && null != wQ.return && (DQ = wQ.return(), Object(DQ) !== DQ)) return
            } finally {
              if (mQ) throw qQ
            }
          }
          return kQ
        }
      }(QQ, FQ) || function(QQ, FQ) {
        if (!QQ) return;
        if ("string" === typeof QQ) return YQ(QQ, FQ);
        var wQ = Object.prototype.toString.call(QQ).slice(8, -1);
        "Object" === wQ && QQ.constructor && (wQ = QQ.constructor.name);
        if ("Map" === wQ || "Set" === wQ) return Array.from(QQ);
        if ("Arguments" === wQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wQ)) return YQ(QQ, FQ)
      }(QQ, FQ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function YQ(QQ, FQ) {
      (null == FQ || FQ > QQ.length) && (FQ = QQ.length);
      for (var wQ = 0, LQ = new Array(FQ); wQ < FQ; wQ++) LQ[wQ] = QQ[wQ];
      return LQ
    }

    function xQ(QQ, FQ) {
      for (var wQ = 0; wQ < FQ.length; wQ++) {
        var LQ = FQ[wQ];
        LQ.enumerable = LQ.enumerable || !1, LQ.configurable = !0, "value" in LQ && (LQ.writable = !0), Object.defineProperty(QQ, AQ(LQ.key), LQ)
      }
    }

    function AQ(QQ) {
      var FQ = function(QQ, FQ) {
        if ("object" != HQ(QQ) || !QQ) return QQ;
        var wQ = QQ[Symbol.toPrimitive];
        if (void 0 !== wQ) {
          var LQ = wQ.call(QQ, FQ || "default");
          if ("object" != HQ(LQ)) return LQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === FQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == HQ(FQ) ? FQ : FQ + ""
    }
    var tQ = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      eQ = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      MQ = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
      GQ = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
      pQ = {
        cm: 96 / 2.54,
        mm: 96 / 25.4,
        pt: 96 / 72,
        pc: 16,
        in: 96,
        Q: 96 / 101.6,
        px: 1
      },
      cQ = Object.keys(pQ),
      CQ = "NaN";
    var SQ = function() {
      function QQ(FQ, wQ) {
        ! function(QQ, FQ) {
          if (!(QQ instanceof FQ)) throw new TypeError("Cannot call a class as a function")
        }(this, QQ), this.num = FQ, this.unit = wQ, this.num = FQ, this.unit = wQ, Number.isNaN(FQ) && (this.unit = ""), "" === wQ || MQ.test(wQ) || (this.num = NaN, this.unit = ""), cQ.includes(wQ) && (this.num = function(QQ, FQ) {
          return QQ * pQ[FQ]
        }(FQ, wQ), this.unit = "px")
      }
      return FQ = QQ, LQ = [{
        key: "parse",
        value: function(FQ) {
          var wQ, LQ = bQ(null !== (wQ = GQ.exec(FQ)) && void 0 !== wQ ? wQ : [], 3),
            qQ = LQ[1],
            oQ = LQ[2];
          return new QQ(parseFloat(qQ), null !== oQ && void 0 !== oQ ? oQ : "")
        }
      }], (wQ = [{
        key: "add",
        value: function(FQ) {
          return this.unit !== FQ.unit ? new QQ(NaN, "") : new QQ(this.num + FQ.num, this.unit)
        }
      }, {
        key: "subtract",
        value: function(FQ) {
          return this.unit !== FQ.unit ? new QQ(NaN, "") : new QQ(this.num - FQ.num, this.unit)
        }
      }, {
        key: "multiply",
        value: function(FQ) {
          return "" !== this.unit && "" !== FQ.unit && this.unit !== FQ.unit ? new QQ(NaN, "") : new QQ(this.num * FQ.num, this.unit || FQ.unit)
        }
      }, {
        key: "divide",
        value: function(FQ) {
          return "" !== this.unit && "" !== FQ.unit && this.unit !== FQ.unit ? new QQ(NaN, "") : new QQ(this.num / FQ.num, this.unit || FQ.unit)
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
      }]) && xQ(FQ.prototype, wQ), LQ && xQ(FQ, LQ), Object.defineProperty(FQ, "prototype", {
        writable: !1
      }), FQ;
      var FQ, wQ, LQ
    }();

    function iQ(QQ) {
      if (QQ.includes(CQ)) return CQ;
      for (var FQ = QQ; FQ.includes("*") || FQ.includes("/");) {
        var wQ, LQ = bQ(null !== (wQ = tQ.exec(FQ)) && void 0 !== wQ ? wQ : [], 4),
          qQ = LQ[1],
          oQ = LQ[2],
          DQ = LQ[3],
          kQ = SQ.parse(null !== qQ && void 0 !== qQ ? qQ : ""),
          vQ = SQ.parse(null !== DQ && void 0 !== DQ ? DQ : ""),
          mQ = "*" === oQ ? kQ.multiply(vQ) : kQ.divide(vQ);
        if (mQ.isNaN()) return CQ;
        FQ = FQ.replace(tQ, mQ.toString())
      }
      for (; FQ.includes("+") || /.-\d+(?:\.\d+)?/.test(FQ);) {
        var uQ, HQ = bQ(null !== (uQ = eQ.exec(FQ)) && void 0 !== uQ ? uQ : [], 4),
          YQ = HQ[1],
          xQ = HQ[2],
          AQ = HQ[3],
          MQ = SQ.parse(null !== YQ && void 0 !== YQ ? YQ : ""),
          GQ = SQ.parse(null !== AQ && void 0 !== AQ ? AQ : ""),
          pQ = "+" === xQ ? MQ.add(GQ) : MQ.subtract(GQ);
        if (pQ.isNaN()) return CQ;
        FQ = FQ.replace(eQ, pQ.toString())
      }
      return FQ
    }
    var WQ = /\(([^()]*)\)/;

    function RQ(QQ) {
      var FQ = QQ.replace(/\s+/g, "");
      return FQ = function(QQ) {
        for (var FQ = QQ; FQ.includes("(");) {
          var wQ = bQ(WQ.exec(FQ), 2)[1];
          FQ = FQ.replace(WQ, iQ(wQ))
        }
        return FQ
      }(FQ), FQ = iQ(FQ)
    }

    function OQ(QQ) {
      var FQ = function(QQ) {
        try {
          return RQ(QQ)
        } catch (FQ) {
          return CQ
        }
      }(QQ.slice(5, -1));
      return FQ === CQ ? "" : FQ
    }
    var sQ = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"],
      rQ = ["dx", "dy", "angle", "className", "breakAll"];

    function IQ() {
      return IQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var FQ = 1; FQ < arguments.length; FQ++) {
          var wQ = arguments[FQ];
          for (var LQ in wQ) Object.prototype.hasOwnProperty.call(wQ, LQ) && (QQ[LQ] = wQ[LQ])
        }
        return QQ
      }, IQ.apply(this, arguments)
    }

    function UQ(QQ, FQ) {
      if (null == QQ) return {};
      var wQ, LQ, qQ = function(QQ, FQ) {
        if (null == QQ) return {};
        var wQ = {};
        for (var LQ in QQ)
          if (Object.prototype.hasOwnProperty.call(QQ, LQ)) {
            if (FQ.indexOf(LQ) >= 0) continue;
            wQ[LQ] = QQ[LQ]
          } return wQ
      }(QQ, FQ);
      if (Object.getOwnPropertySymbols) {
        var oQ = Object.getOwnPropertySymbols(QQ);
        for (LQ = 0; LQ < oQ.length; LQ++) wQ = oQ[LQ], FQ.indexOf(wQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, wQ) && (qQ[wQ] = QQ[wQ])
      }
      return qQ
    }

    function NQ(QQ, FQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return QQ
      }(QQ) || function(QQ, FQ) {
        var wQ = null == QQ ? null : "undefined" != typeof Symbol && QQ[Symbol.iterator] || QQ["@@iterator"];
        if (null != wQ) {
          var LQ, qQ, oQ, DQ, kQ = [],
            vQ = !0,
            mQ = !1;
          try {
            if (oQ = (wQ = wQ.call(QQ)).next, 0 === FQ) {
              if (Object(wQ) !== wQ) return;
              vQ = !1
            } else
              for (; !(vQ = (LQ = oQ.call(wQ)).done) && (kQ.push(LQ.value), kQ.length !== FQ); vQ = !0);
          } catch (QQ) {
            mQ = !0, qQ = QQ
          } finally {
            try {
              if (!vQ && null != wQ.return && (DQ = wQ.return(), Object(DQ) !== DQ)) return
            } finally {
              if (mQ) throw qQ
            }
          }
          return kQ
        }
      }(QQ, FQ) || function(QQ, FQ) {
        if (!QQ) return;
        if ("string" === typeof QQ) return TQ(QQ, FQ);
        var wQ = Object.prototype.toString.call(QQ).slice(8, -1);
        "Object" === wQ && QQ.constructor && (wQ = QQ.constructor.name);
        if ("Map" === wQ || "Set" === wQ) return Array.from(QQ);
        if ("Arguments" === wQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wQ)) return TQ(QQ, FQ)
      }(QQ, FQ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function TQ(QQ, FQ) {
      (null == FQ || FQ > QQ.length) && (FQ = QQ.length);
      for (var wQ = 0, LQ = new Array(FQ); wQ < FQ; wQ++) LQ[wQ] = QQ[wQ];
      return LQ
    }
    var KQ = /[ \f\n\r\t\v\u2028\u2029]+/,
      zQ = function(QQ) {
        var FQ = QQ.children,
          wQ = QQ.breakAll,
          LQ = QQ.style;
        try {
          var qQ = [];
          return oQ()(FQ) || (qQ = wQ ? FQ.toString().split("") : FQ.toString().split(KQ)), {
            wordsWithComputedWidth: qQ.map((function(QQ) {
              return {
                word: QQ,
                width: (0, uQ.g)(QQ, LQ).width
              }
            })),
            spaceWidth: wQ ? 0 : (0, uQ.g)("\xa0", LQ).width
          }
        } catch (DQ) {
          return null
        }
      },
      lQ = function(QQ) {
        return [{
          words: oQ()(QQ) ? [] : QQ.toString().split(KQ)
        }]
      },
      jQ = function(QQ) {
        var FQ = QQ.width,
          wQ = QQ.scaleToFit,
          LQ = QQ.children,
          qQ = QQ.style,
          oQ = QQ.breakAll,
          DQ = QQ.maxLines;
        if ((FQ || wQ) && !vQ.d.isSsr) {
          var mQ = zQ({
            breakAll: oQ,
            children: LQ,
            style: qQ
          });
          return mQ ? function(QQ, FQ, wQ, LQ, qQ) {
            var oQ = QQ.maxLines,
              DQ = QQ.children,
              vQ = QQ.style,
              mQ = QQ.breakAll,
              uQ = (0, kQ.t)(oQ),
              HQ = DQ,
              bQ = function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce((function(QQ, FQ) {
                  var oQ = FQ.word,
                    DQ = FQ.width,
                    kQ = QQ[QQ.length - 1];
                  if (kQ && (null == LQ || qQ || kQ.width + DQ + wQ < Number(LQ))) kQ.words.push(oQ), kQ.width += DQ + wQ;
                  else {
                    var vQ = {
                      words: [oQ],
                      width: DQ
                    };
                    QQ.push(vQ)
                  }
                  return QQ
                }), [])
              },
              YQ = bQ(FQ);
            if (!uQ) return YQ;
            for (var xQ, AQ = function(QQ) {
                var FQ = HQ.slice(0, QQ),
                  wQ = zQ({
                    breakAll: mQ,
                    style: vQ,
                    children: FQ + "\u2026"
                  }).wordsWithComputedWidth,
                  qQ = bQ(wQ),
                  DQ = qQ.length > oQ || function(QQ) {
                    return QQ.reduce((function(QQ, FQ) {
                      return QQ.width > FQ.width ? QQ : FQ
                    }))
                  }(qQ).width > Number(LQ);
                return [DQ, qQ]
              }, tQ = 0, eQ = HQ.length - 1, MQ = 0; tQ <= eQ && MQ <= HQ.length - 1;) {
              var GQ = Math.floor((tQ + eQ) / 2),
                pQ = NQ(AQ(GQ - 1), 2),
                cQ = pQ[0],
                CQ = pQ[1],
                SQ = NQ(AQ(GQ), 1)[0];
              if (cQ || SQ || (tQ = GQ + 1), cQ && SQ && (eQ = GQ - 1), !cQ && SQ) {
                xQ = CQ;
                break
              }
              MQ++
            }
            return xQ || YQ
          }({
            breakAll: oQ,
            children: LQ,
            maxLines: DQ,
            style: qQ
          }, mQ.wordsWithComputedWidth, mQ.spaceWidth, FQ, wQ) : lQ(LQ)
        }
        return lQ(LQ)
      },
      aQ = "#808080",
      XQ = function(QQ) {
        var FQ = QQ.x,
          wQ = void 0 === FQ ? 0 : FQ,
          qQ = QQ.y,
          oQ = void 0 === qQ ? 0 : qQ,
          vQ = QQ.lineHeight,
          uQ = void 0 === vQ ? "1em" : vQ,
          HQ = QQ.capHeight,
          bQ = void 0 === HQ ? "0.71em" : HQ,
          YQ = QQ.scaleToFit,
          xQ = void 0 !== YQ && YQ,
          AQ = QQ.textAnchor,
          tQ = void 0 === AQ ? "start" : AQ,
          eQ = QQ.verticalAnchor,
          MQ = void 0 === eQ ? "end" : eQ,
          GQ = QQ.fill,
          pQ = void 0 === GQ ? aQ : GQ,
          cQ = UQ(QQ, sQ),
          CQ = (0, LQ.useMemo)((function() {
            return jQ({
              breakAll: cQ.breakAll,
              children: cQ.children,
              maxLines: cQ.maxLines,
              scaleToFit: xQ,
              style: cQ.style,
              width: cQ.width
            })
          }), [cQ.breakAll, cQ.children, cQ.maxLines, xQ, cQ.style, cQ.width]),
          SQ = cQ.dx,
          iQ = cQ.dy,
          WQ = cQ.angle,
          RQ = cQ.className,
          NQ = cQ.breakAll,
          TQ = UQ(cQ, rQ);
        if (!(0, kQ.s)(wQ) || !(0, kQ.s)(oQ)) return null;
        var KQ, zQ = wQ + ((0, kQ.t)(SQ) ? SQ : 0),
          lQ = oQ + ((0, kQ.t)(iQ) ? iQ : 0);
        switch (MQ) {
          case "start":
            KQ = OQ("calc(".concat(bQ, ")"));
            break;
          case "middle":
            KQ = OQ("calc(".concat((CQ.length - 1) / 2, " * -").concat(uQ, " + (").concat(bQ, " / 2))"));
            break;
          default:
            KQ = OQ("calc(".concat(CQ.length - 1, " * -").concat(uQ, ")"))
        }
        var XQ = [];
        if (xQ) {
          var fQ = CQ[0].width,
            VQ = cQ.width;
          XQ.push("scale(".concat(((0, kQ.t)(VQ) ? VQ / fQ : 1) / fQ, ")"))
        }
        return WQ && XQ.push("rotate(".concat(WQ, ", ").concat(zQ, ", ").concat(lQ, ")")), XQ.length && (TQ.transform = XQ.join(" ")), LQ.createElement("text", IQ({}, (0, mQ.e)(TQ, !0), {
          x: zQ,
          y: lQ,
          className: (0, DQ.b)("recharts-text", RQ),
          textAnchor: tQ,
          fill: pQ.includes("url") ? aQ : pQ
        }), CQ.map((function(QQ, FQ) {
          var wQ = QQ.words.join(NQ ? "" : " ");
          return LQ.createElement("tspan", {
            x: zQ,
            dy: 0 === FQ ? KQ : uQ,
            key: "".concat(wQ, "-").concat(FQ)
          }, wQ)
        })))
      }
  },
  5804: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => yQ
    });
    var LQ = wQ(53),
      qQ = wQ(5345),
      oQ = wQ.n(qQ),
      DQ = wQ(5240),
      kQ = wQ.n(DQ),
      vQ = wQ(4909),
      mQ = wQ(5002);

    function uQ(QQ) {
      return uQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, uQ(QQ)
    }

    function HQ() {
      return HQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var FQ = 1; FQ < arguments.length; FQ++) {
          var wQ = arguments[FQ];
          for (var LQ in wQ) Object.prototype.hasOwnProperty.call(wQ, LQ) && (QQ[LQ] = wQ[LQ])
        }
        return QQ
      }, HQ.apply(this, arguments)
    }

    function bQ(QQ, FQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return QQ
      }(QQ) || function(QQ, FQ) {
        var wQ = null == QQ ? null : "undefined" != typeof Symbol && QQ[Symbol.iterator] || QQ["@@iterator"];
        if (null != wQ) {
          var LQ, qQ, oQ, DQ, kQ = [],
            vQ = !0,
            mQ = !1;
          try {
            if (oQ = (wQ = wQ.call(QQ)).next, 0 === FQ) {
              if (Object(wQ) !== wQ) return;
              vQ = !1
            } else
              for (; !(vQ = (LQ = oQ.call(wQ)).done) && (kQ.push(LQ.value), kQ.length !== FQ); vQ = !0);
          } catch (QQ) {
            mQ = !0, qQ = QQ
          } finally {
            try {
              if (!vQ && null != wQ.return && (DQ = wQ.return(), Object(DQ) !== DQ)) return
            } finally {
              if (mQ) throw qQ
            }
          }
          return kQ
        }
      }(QQ, FQ) || function(QQ, FQ) {
        if (!QQ) return;
        if ("string" === typeof QQ) return YQ(QQ, FQ);
        var wQ = Object.prototype.toString.call(QQ).slice(8, -1);
        "Object" === wQ && QQ.constructor && (wQ = QQ.constructor.name);
        if ("Map" === wQ || "Set" === wQ) return Array.from(QQ);
        if ("Arguments" === wQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wQ)) return YQ(QQ, FQ)
      }(QQ, FQ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function YQ(QQ, FQ) {
      (null == FQ || FQ > QQ.length) && (FQ = QQ.length);
      for (var wQ = 0, LQ = new Array(FQ); wQ < FQ; wQ++) LQ[wQ] = QQ[wQ];
      return LQ
    }

    function xQ(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function AQ(QQ) {
      for (var FQ = 1; FQ < arguments.length; FQ++) {
        var wQ = null != arguments[FQ] ? arguments[FQ] : {};
        FQ % 2 ? xQ(Object(wQ), !0).forEach((function(FQ) {
          tQ(QQ, FQ, wQ[FQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : xQ(Object(wQ)).forEach((function(FQ) {
          Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
        }))
      }
      return QQ
    }

    function tQ(QQ, FQ, wQ) {
      return (FQ = function(QQ) {
        var FQ = function(QQ, FQ) {
          if ("object" != uQ(QQ) || !QQ) return QQ;
          var wQ = QQ[Symbol.toPrimitive];
          if (void 0 !== wQ) {
            var LQ = wQ.call(QQ, FQ || "default");
            if ("object" != uQ(LQ)) return LQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === FQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == uQ(FQ) ? FQ : FQ + ""
      }(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }

    function eQ(QQ) {
      return Array.isArray(QQ) && (0, mQ.s)(QQ[0]) && (0, mQ.s)(QQ[1]) ? QQ.join(" ~ ") : QQ
    }
    var MQ = function(QQ) {
      var FQ = QQ.separator,
        wQ = void 0 === FQ ? " : " : FQ,
        qQ = QQ.contentStyle,
        DQ = void 0 === qQ ? {} : qQ,
        uQ = QQ.itemStyle,
        YQ = void 0 === uQ ? {} : uQ,
        xQ = QQ.labelStyle,
        tQ = void 0 === xQ ? {} : xQ,
        MQ = QQ.payload,
        GQ = QQ.formatter,
        pQ = QQ.itemSorter,
        cQ = QQ.wrapperClassName,
        CQ = QQ.labelClassName,
        SQ = QQ.label,
        iQ = QQ.labelFormatter,
        WQ = QQ.accessibilityLayer,
        RQ = void 0 !== WQ && WQ,
        OQ = AQ({
          margin: 0,
          padding: 10,
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          whiteSpace: "nowrap"
        }, DQ),
        sQ = AQ({
          margin: 0
        }, tQ),
        rQ = !kQ()(SQ),
        IQ = rQ ? SQ : "",
        UQ = (0, vQ.b)("recharts-default-tooltip", cQ),
        NQ = (0, vQ.b)("recharts-tooltip-label", CQ);
      rQ && iQ && void 0 !== MQ && null !== MQ && (IQ = iQ(SQ, MQ));
      var TQ = RQ ? {
        role: "status",
        "aria-live": "assertive"
      } : {};
      return LQ.createElement("div", HQ({
        className: UQ,
        style: OQ
      }, TQ), LQ.createElement("p", {
        className: NQ,
        style: sQ
      }, LQ.isValidElement(IQ) ? IQ : "".concat(IQ)), function() {
        if (MQ && MQ.length) {
          var QQ = (pQ ? oQ()(MQ, pQ) : MQ).map((function(QQ, FQ) {
            if ("none" === QQ.type) return null;
            var qQ = AQ({
                display: "block",
                paddingTop: 4,
                paddingBottom: 4,
                color: QQ.color || "#000"
              }, YQ),
              oQ = QQ.formatter || GQ || eQ,
              DQ = QQ.value,
              kQ = QQ.name,
              vQ = DQ,
              uQ = kQ;
            if (oQ && null != vQ && null != uQ) {
              var HQ = oQ(DQ, kQ, QQ, FQ, MQ);
              if (Array.isArray(HQ)) {
                var xQ = bQ(HQ, 2);
                vQ = xQ[0], uQ = xQ[1]
              } else vQ = HQ
            }
            return LQ.createElement("li", {
              className: "recharts-tooltip-item",
              key: "tooltip-item-".concat(FQ),
              style: qQ
            }, (0, mQ.s)(uQ) ? LQ.createElement("span", {
              className: "recharts-tooltip-item-name"
            }, uQ) : null, (0, mQ.s)(uQ) ? LQ.createElement("span", {
              className: "recharts-tooltip-item-separator"
            }, wQ) : null, LQ.createElement("span", {
              className: "recharts-tooltip-item-value"
            }, vQ), LQ.createElement("span", {
              className: "recharts-tooltip-item-unit"
            }, QQ.unit || ""))
          }));
          return LQ.createElement("ul", {
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

    function GQ(QQ) {
      return GQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, GQ(QQ)
    }

    function pQ(QQ, FQ, wQ) {
      return (FQ = function(QQ) {
        var FQ = function(QQ, FQ) {
          if ("object" != GQ(QQ) || !QQ) return QQ;
          var wQ = QQ[Symbol.toPrimitive];
          if (void 0 !== wQ) {
            var LQ = wQ.call(QQ, FQ || "default");
            if ("object" != GQ(LQ)) return LQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === FQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == GQ(FQ) ? FQ : FQ + ""
      }(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }
    var cQ = "recharts-tooltip-wrapper",
      CQ = {
        visibility: "hidden"
      };

    function SQ(QQ) {
      var FQ = QQ.coordinate,
        wQ = QQ.translateX,
        LQ = QQ.translateY;
      return (0, vQ.b)(cQ, pQ(pQ(pQ(pQ({}, "".concat(cQ, "-right"), (0, mQ.t)(wQ) && FQ && (0, mQ.t)(FQ.x) && wQ >= FQ.x), "".concat(cQ, "-left"), (0, mQ.t)(wQ) && FQ && (0, mQ.t)(FQ.x) && wQ < FQ.x), "".concat(cQ, "-bottom"), (0, mQ.t)(LQ) && FQ && (0, mQ.t)(FQ.y) && LQ >= FQ.y), "".concat(cQ, "-top"), (0, mQ.t)(LQ) && FQ && (0, mQ.t)(FQ.y) && LQ < FQ.y))
    }

    function iQ(QQ) {
      var FQ = QQ.allowEscapeViewBox,
        wQ = QQ.coordinate,
        LQ = QQ.key,
        qQ = QQ.offsetTopLeft,
        oQ = QQ.position,
        DQ = QQ.reverseDirection,
        kQ = QQ.tooltipDimension,
        vQ = QQ.viewBox,
        uQ = QQ.viewBoxDimension;
      if (oQ && (0, mQ.t)(oQ[LQ])) return oQ[LQ];
      var HQ = wQ[LQ] - kQ - qQ,
        bQ = wQ[LQ] + qQ;
      return FQ[LQ] ? DQ[LQ] ? HQ : bQ : DQ[LQ] ? HQ < vQ[LQ] ? Math.max(bQ, vQ[LQ]) : Math.max(HQ, vQ[LQ]) : bQ + kQ > vQ[LQ] + uQ ? Math.max(HQ, vQ[LQ]) : Math.max(bQ, vQ[LQ])
    }

    function WQ(QQ) {
      return WQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, WQ(QQ)
    }

    function RQ(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function OQ(QQ) {
      for (var FQ = 1; FQ < arguments.length; FQ++) {
        var wQ = null != arguments[FQ] ? arguments[FQ] : {};
        FQ % 2 ? RQ(Object(wQ), !0).forEach((function(FQ) {
          TQ(QQ, FQ, wQ[FQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : RQ(Object(wQ)).forEach((function(FQ) {
          Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
        }))
      }
      return QQ
    }

    function sQ(QQ, FQ) {
      for (var wQ = 0; wQ < FQ.length; wQ++) {
        var LQ = FQ[wQ];
        LQ.enumerable = LQ.enumerable || !1, LQ.configurable = !0, "value" in LQ && (LQ.writable = !0), Object.defineProperty(QQ, KQ(LQ.key), LQ)
      }
    }

    function rQ(QQ, FQ, wQ) {
      return FQ = UQ(FQ),
        function(QQ, FQ) {
          if (FQ && ("object" === WQ(FQ) || "function" === typeof FQ)) return FQ;
          if (void 0 !== FQ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(QQ) {
            if (void 0 === QQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return QQ
          }(QQ)
        }(QQ, IQ() ? Reflect.construct(FQ, wQ || [], UQ(QQ).constructor) : FQ.apply(QQ, wQ))
    }

    function IQ() {
      try {
        var QQ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (QQ) {}
      return (IQ = function() {
        return !!QQ
      })()
    }

    function UQ(QQ) {
      return UQ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(QQ) {
        return QQ.__proto__ || Object.getPrototypeOf(QQ)
      }, UQ(QQ)
    }

    function NQ(QQ, FQ) {
      return NQ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(QQ, FQ) {
        return QQ.__proto__ = FQ, QQ
      }, NQ(QQ, FQ)
    }

    function TQ(QQ, FQ, wQ) {
      return (FQ = KQ(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }

    function KQ(QQ) {
      var FQ = function(QQ, FQ) {
        if ("object" != WQ(QQ) || !QQ) return QQ;
        var wQ = QQ[Symbol.toPrimitive];
        if (void 0 !== wQ) {
          var LQ = wQ.call(QQ, FQ || "default");
          if ("object" != WQ(LQ)) return LQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === FQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == WQ(FQ) ? FQ : FQ + ""
    }
    var zQ = function(QQ) {
        function FQ() {
          var QQ;
          ! function(QQ, FQ) {
            if (!(QQ instanceof FQ)) throw new TypeError("Cannot call a class as a function")
          }(this, FQ);
          for (var wQ = arguments.length, LQ = new Array(wQ), qQ = 0; qQ < wQ; qQ++) LQ[qQ] = arguments[qQ];
          return TQ(QQ = rQ(this, FQ, [].concat(LQ)), "state", {
            dismissed: !1,
            dismissedAtCoordinate: {
              x: 0,
              y: 0
            },
            lastBoundingBox: {
              width: -1,
              height: -1
            }
          }), TQ(QQ, "handleKeyDown", (function(FQ) {
            var wQ, LQ, qQ, oQ;
            "Escape" === FQ.key && QQ.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x: null !== (wQ = null === (LQ = QQ.props.coordinate) || void 0 === LQ ? void 0 : LQ.x) && void 0 !== wQ ? wQ : 0,
                y: null !== (qQ = null === (oQ = QQ.props.coordinate) || void 0 === oQ ? void 0 : oQ.y) && void 0 !== qQ ? qQ : 0
              }
            })
          })), QQ
        }
        return function(QQ, FQ) {
          if ("function" !== typeof FQ && null !== FQ) throw new TypeError("Super expression must either be null or a function");
          QQ.prototype = Object.create(FQ && FQ.prototype, {
            constructor: {
              value: QQ,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(QQ, "prototype", {
            writable: !1
          }), FQ && NQ(QQ, FQ)
        }(FQ, QQ), wQ = FQ, (qQ = [{
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
            var QQ, FQ;
            this.props.active && this.updateBBox(), this.state.dismissed && ((null === (QQ = this.props.coordinate) || void 0 === QQ ? void 0 : QQ.x) === this.state.dismissedAtCoordinate.x && (null === (FQ = this.props.coordinate) || void 0 === FQ ? void 0 : FQ.y) === this.state.dismissedAtCoordinate.y || (this.state.dismissed = !1))
          }
        }, {
          key: "render",
          value: function() {
            var QQ = this,
              FQ = this.props,
              wQ = FQ.active,
              qQ = FQ.allowEscapeViewBox,
              oQ = FQ.animationDuration,
              DQ = FQ.animationEasing,
              kQ = FQ.children,
              vQ = FQ.coordinate,
              mQ = FQ.hasPayload,
              uQ = FQ.isAnimationActive,
              HQ = FQ.offset,
              bQ = FQ.position,
              YQ = FQ.reverseDirection,
              xQ = FQ.useTranslate3d,
              AQ = FQ.viewBox,
              tQ = FQ.wrapperStyle,
              eQ = function(QQ) {
                var FQ, wQ, LQ = QQ.allowEscapeViewBox,
                  qQ = QQ.coordinate,
                  oQ = QQ.offsetTopLeft,
                  DQ = QQ.position,
                  kQ = QQ.reverseDirection,
                  vQ = QQ.tooltipBox,
                  mQ = QQ.useTranslate3d,
                  uQ = QQ.viewBox;
                return {
                  cssProperties: vQ.height > 0 && vQ.width > 0 && qQ ? function(QQ) {
                    var FQ = QQ.translateX,
                      wQ = QQ.translateY;
                    return {
                      transform: QQ.useTranslate3d ? "translate3d(".concat(FQ, "px, ").concat(wQ, "px, 0)") : "translate(".concat(FQ, "px, ").concat(wQ, "px)")
                    }
                  }({
                    translateX: FQ = iQ({
                      allowEscapeViewBox: LQ,
                      coordinate: qQ,
                      key: "x",
                      offsetTopLeft: oQ,
                      position: DQ,
                      reverseDirection: kQ,
                      tooltipDimension: vQ.width,
                      viewBox: uQ,
                      viewBoxDimension: uQ.width
                    }),
                    translateY: wQ = iQ({
                      allowEscapeViewBox: LQ,
                      coordinate: qQ,
                      key: "y",
                      offsetTopLeft: oQ,
                      position: DQ,
                      reverseDirection: kQ,
                      tooltipDimension: vQ.height,
                      viewBox: uQ,
                      viewBoxDimension: uQ.height
                    }),
                    useTranslate3d: mQ
                  }) : CQ,
                  cssClasses: SQ({
                    translateX: FQ,
                    translateY: wQ,
                    coordinate: qQ
                  })
                }
              }({
                allowEscapeViewBox: qQ,
                coordinate: vQ,
                offsetTopLeft: HQ,
                position: bQ,
                reverseDirection: YQ,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: xQ,
                viewBox: AQ
              }),
              MQ = eQ.cssClasses,
              GQ = eQ.cssProperties,
              pQ = OQ(OQ({
                transition: uQ && wQ ? "transform ".concat(oQ, "ms ").concat(DQ) : void 0
              }, GQ), {}, {
                pointerEvents: "none",
                visibility: !this.state.dismissed && wQ && mQ ? "visible" : "hidden",
                position: "absolute",
                top: 0,
                left: 0
              }, tQ);
            return LQ.createElement("div", {
              tabIndex: -1,
              className: MQ,
              style: pQ,
              ref: function(FQ) {
                QQ.wrapperNode = FQ
              }
            }, kQ)
          }
        }]) && sQ(wQ.prototype, qQ), oQ && sQ(wQ, oQ), Object.defineProperty(wQ, "prototype", {
          writable: !1
        }), wQ;
        var wQ, qQ, oQ
      }(LQ.PureComponent),
      lQ = wQ(5812),
      jQ = wQ(5816);

    function aQ(QQ) {
      return aQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, aQ(QQ)
    }

    function XQ(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function fQ(QQ) {
      for (var FQ = 1; FQ < arguments.length; FQ++) {
        var wQ = null != arguments[FQ] ? arguments[FQ] : {};
        FQ % 2 ? XQ(Object(wQ), !0).forEach((function(FQ) {
          gQ(QQ, FQ, wQ[FQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : XQ(Object(wQ)).forEach((function(FQ) {
          Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
        }))
      }
      return QQ
    }

    function VQ(QQ, FQ) {
      for (var wQ = 0; wQ < FQ.length; wQ++) {
        var LQ = FQ[wQ];
        LQ.enumerable = LQ.enumerable || !1, LQ.configurable = !0, "value" in LQ && (LQ.writable = !0), Object.defineProperty(QQ, PQ(LQ.key), LQ)
      }
    }

    function hQ(QQ, FQ, wQ) {
      return FQ = EQ(FQ),
        function(QQ, FQ) {
          if (FQ && ("object" === aQ(FQ) || "function" === typeof FQ)) return FQ;
          if (void 0 !== FQ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(QQ) {
            if (void 0 === QQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return QQ
          }(QQ)
        }(QQ, JQ() ? Reflect.construct(FQ, wQ || [], EQ(QQ).constructor) : FQ.apply(QQ, wQ))
    }

    function JQ() {
      try {
        var QQ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (QQ) {}
      return (JQ = function() {
        return !!QQ
      })()
    }

    function EQ(QQ) {
      return EQ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(QQ) {
        return QQ.__proto__ || Object.getPrototypeOf(QQ)
      }, EQ(QQ)
    }

    function nQ(QQ, FQ) {
      return nQ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(QQ, FQ) {
        return QQ.__proto__ = FQ, QQ
      }, nQ(QQ, FQ)
    }

    function gQ(QQ, FQ, wQ) {
      return (FQ = PQ(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }

    function PQ(QQ) {
      var FQ = function(QQ, FQ) {
        if ("object" != aQ(QQ) || !QQ) return QQ;
        var wQ = QQ[Symbol.toPrimitive];
        if (void 0 !== wQ) {
          var LQ = wQ.call(QQ, FQ || "default");
          if ("object" != aQ(LQ)) return LQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === FQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == aQ(FQ) ? FQ : FQ + ""
    }

    function ZQ(QQ) {
      return QQ.dataKey
    }
    var yQ = function(QQ) {
      function FQ() {
        return function(QQ, FQ) {
          if (!(QQ instanceof FQ)) throw new TypeError("Cannot call a class as a function")
        }(this, FQ), hQ(this, FQ, arguments)
      }
      return function(QQ, FQ) {
        if ("function" !== typeof FQ && null !== FQ) throw new TypeError("Super expression must either be null or a function");
        QQ.prototype = Object.create(FQ && FQ.prototype, {
          constructor: {
            value: QQ,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(QQ, "prototype", {
          writable: !1
        }), FQ && nQ(QQ, FQ)
      }(FQ, QQ), wQ = FQ, (qQ = [{
        key: "render",
        value: function() {
          var QQ = this,
            FQ = this.props,
            wQ = FQ.active,
            qQ = FQ.allowEscapeViewBox,
            oQ = FQ.animationDuration,
            DQ = FQ.animationEasing,
            kQ = FQ.content,
            vQ = FQ.coordinate,
            mQ = FQ.filterNull,
            uQ = FQ.isAnimationActive,
            HQ = FQ.offset,
            bQ = FQ.payload,
            YQ = FQ.payloadUniqBy,
            xQ = FQ.position,
            AQ = FQ.reverseDirection,
            tQ = FQ.useTranslate3d,
            eQ = FQ.viewBox,
            GQ = FQ.wrapperStyle,
            pQ = null !== bQ && void 0 !== bQ ? bQ : [];
          mQ && pQ.length && (pQ = (0, jQ.d)(bQ.filter((function(FQ) {
            return null != FQ.value && (!0 !== FQ.hide || QQ.props.includeHidden)
          })), YQ, ZQ));
          var cQ = pQ.length > 0;
          return LQ.createElement(zQ, {
            allowEscapeViewBox: qQ,
            animationDuration: oQ,
            animationEasing: DQ,
            isAnimationActive: uQ,
            active: wQ,
            coordinate: vQ,
            hasPayload: cQ,
            offset: HQ,
            position: xQ,
            reverseDirection: AQ,
            useTranslate3d: tQ,
            viewBox: eQ,
            wrapperStyle: GQ
          }, function(QQ, FQ) {
            return LQ.isValidElement(QQ) ? LQ.cloneElement(QQ, FQ) : "function" === typeof QQ ? LQ.createElement(QQ, FQ) : LQ.createElement(MQ, FQ)
          }(kQ, fQ(fQ({}, this.props), {}, {
            payload: pQ
          })))
        }
      }]) && VQ(wQ.prototype, qQ), oQ && VQ(wQ, oQ), Object.defineProperty(wQ, "prototype", {
        writable: !1
      }), wQ;
      var wQ, qQ, oQ
    }(LQ.PureComponent);
    gQ(yQ, "displayName", "Tooltip"), gQ(yQ, "defaultProps", {
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
      isAnimationActive: !lQ.d.isSsr,
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
  5800: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => mQ
    });
    var LQ = wQ(53),
      qQ = wQ(4909),
      oQ = wQ(5252),
      DQ = ["children", "className"];

    function kQ() {
      return kQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var FQ = 1; FQ < arguments.length; FQ++) {
          var wQ = arguments[FQ];
          for (var LQ in wQ) Object.prototype.hasOwnProperty.call(wQ, LQ) && (QQ[LQ] = wQ[LQ])
        }
        return QQ
      }, kQ.apply(this, arguments)
    }

    function vQ(QQ, FQ) {
      if (null == QQ) return {};
      var wQ, LQ, qQ = function(QQ, FQ) {
        if (null == QQ) return {};
        var wQ = {};
        for (var LQ in QQ)
          if (Object.prototype.hasOwnProperty.call(QQ, LQ)) {
            if (FQ.indexOf(LQ) >= 0) continue;
            wQ[LQ] = QQ[LQ]
          } return wQ
      }(QQ, FQ);
      if (Object.getOwnPropertySymbols) {
        var oQ = Object.getOwnPropertySymbols(QQ);
        for (LQ = 0; LQ < oQ.length; LQ++) wQ = oQ[LQ], FQ.indexOf(wQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, wQ) && (qQ[wQ] = QQ[wQ])
      }
      return qQ
    }
    var mQ = LQ.forwardRef((function(QQ, FQ) {
      var wQ = QQ.children,
        mQ = QQ.className,
        uQ = vQ(QQ, DQ),
        HQ = (0, qQ.b)("recharts-layer", mQ);
      return LQ.createElement("g", kQ({
        className: HQ
      }, (0, oQ.e)(uQ, !0), {
        ref: FQ
      }), wQ)
    }))
  },
  5791: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => mQ
    });
    var LQ = wQ(53),
      qQ = wQ(4909),
      oQ = wQ(5252),
      DQ = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];

    function kQ() {
      return kQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var FQ = 1; FQ < arguments.length; FQ++) {
          var wQ = arguments[FQ];
          for (var LQ in wQ) Object.prototype.hasOwnProperty.call(wQ, LQ) && (QQ[LQ] = wQ[LQ])
        }
        return QQ
      }, kQ.apply(this, arguments)
    }

    function vQ(QQ, FQ) {
      if (null == QQ) return {};
      var wQ, LQ, qQ = function(QQ, FQ) {
        if (null == QQ) return {};
        var wQ = {};
        for (var LQ in QQ)
          if (Object.prototype.hasOwnProperty.call(QQ, LQ)) {
            if (FQ.indexOf(LQ) >= 0) continue;
            wQ[LQ] = QQ[LQ]
          } return wQ
      }(QQ, FQ);
      if (Object.getOwnPropertySymbols) {
        var oQ = Object.getOwnPropertySymbols(QQ);
        for (LQ = 0; LQ < oQ.length; LQ++) wQ = oQ[LQ], FQ.indexOf(wQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, wQ) && (qQ[wQ] = QQ[wQ])
      }
      return qQ
    }

    function mQ(QQ) {
      var FQ = QQ.children,
        wQ = QQ.width,
        mQ = QQ.height,
        uQ = QQ.viewBox,
        HQ = QQ.className,
        bQ = QQ.style,
        YQ = QQ.title,
        xQ = QQ.desc,
        AQ = vQ(QQ, DQ),
        tQ = uQ || {
          width: wQ,
          height: mQ,
          x: 0,
          y: 0
        },
        eQ = (0, qQ.b)("recharts-surface", HQ);
      return LQ.createElement("svg", kQ({}, (0, oQ.e)(AQ, !0, "svg"), {
        className: eQ,
        width: wQ,
        height: mQ,
        style: bQ,
        viewBox: "".concat(tQ.x, " ").concat(tQ.y, " ").concat(tQ.width, " ").concat(tQ.height)
      }), LQ.createElement("title", null, YQ), LQ.createElement("desc", null, xQ), FQ)
    }
  },
  6179: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => GQ,
      f: () => CQ,
      j: () => sQ,
      k: () => OQ,
      l: () => pQ,
      o: () => RQ,
      s: () => WQ,
      t: () => cQ,
      u: () => iQ,
      w: () => SQ
    });
    var LQ = wQ(53),
      qQ = wQ(5787),
      oQ = wQ(6183),
      DQ = wQ.n(oQ),
      kQ = wQ(6082),
      vQ = wQ.n(kQ),
      mQ = wQ(5050),
      uQ = wQ.n(mQ)()((function(QQ) {
        return {
          x: QQ.left,
          y: QQ.top,
          width: QQ.width,
          height: QQ.height
        }
      }), (function(QQ) {
        return ["l", QQ.left, "t", QQ.top, "w", QQ.width, "h", QQ.height].join("")
      })),
      HQ = wQ(5002);
    var bQ = (0, LQ.createContext)(void 0),
      YQ = (0, LQ.createContext)(void 0),
      xQ = (0, LQ.createContext)(void 0),
      AQ = (0, LQ.createContext)({}),
      tQ = (0, LQ.createContext)(void 0),
      eQ = (0, LQ.createContext)(0),
      MQ = (0, LQ.createContext)(0),
      GQ = function(QQ) {
        var FQ = QQ.state,
          wQ = FQ.xAxisMap,
          qQ = FQ.yAxisMap,
          oQ = FQ.offset,
          DQ = QQ.clipPathId,
          kQ = QQ.children,
          vQ = QQ.width,
          mQ = QQ.height,
          HQ = uQ(oQ);
        return LQ.createElement(bQ.Provider, {
          value: wQ
        }, LQ.createElement(YQ.Provider, {
          value: qQ
        }, LQ.createElement(AQ.Provider, {
          value: oQ
        }, LQ.createElement(xQ.Provider, {
          value: HQ
        }, LQ.createElement(tQ.Provider, {
          value: DQ
        }, LQ.createElement(eQ.Provider, {
          value: mQ
        }, LQ.createElement(MQ.Provider, {
          value: vQ
        }, kQ)))))))
      },
      pQ = function() {
        return (0, LQ.useContext)(tQ)
      };
    var cQ = function(QQ) {
        var FQ = (0, LQ.useContext)(bQ);
        null == FQ && (0, qQ.d)(!1);
        var wQ = FQ[QQ];
        return null == wQ && (0, qQ.d)(!1), wQ
      },
      CQ = function() {
        var QQ = (0, LQ.useContext)(bQ);
        return (0, HQ.e)(QQ)
      },
      SQ = function() {
        var QQ = (0, LQ.useContext)(YQ);
        return DQ()(QQ, (function(QQ) {
          return vQ()(QQ.domain, Number.isFinite)
        })) || (0, HQ.e)(QQ)
      },
      iQ = function(QQ) {
        var FQ = (0, LQ.useContext)(YQ);
        null == FQ && (0, qQ.d)(!1);
        var wQ = FQ[QQ];
        return null == wQ && (0, qQ.d)(!1), wQ
      },
      WQ = function() {
        return (0, LQ.useContext)(xQ)
      },
      RQ = function() {
        return (0, LQ.useContext)(AQ)
      },
      OQ = function() {
        return (0, LQ.useContext)(MQ)
      },
      sQ = function() {
        return (0, LQ.useContext)(eQ)
      }
  },
  6200: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => ZQ
    });
    var LQ = wQ(53);

    function qQ() {}

    function oQ(QQ, FQ, wQ) {
      QQ._context.bezierCurveTo((2 * QQ._x0 + QQ._x1) / 3, (2 * QQ._y0 + QQ._y1) / 3, (QQ._x0 + 2 * QQ._x1) / 3, (QQ._y0 + 2 * QQ._y1) / 3, (QQ._x0 + 4 * QQ._x1 + FQ) / 6, (QQ._y0 + 4 * QQ._y1 + wQ) / 6)
    }

    function DQ(QQ) {
      this._context = QQ
    }

    function kQ(QQ) {
      this._context = QQ
    }

    function vQ(QQ) {
      this._context = QQ
    }
    DQ.prototype = {
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
            oQ(this, this._x1, this._y1);
          case 2:
            this._context.lineTo(this._x1, this._y1)
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(QQ, FQ) {
        switch (QQ = +QQ, FQ = +FQ, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(QQ, FQ) : this._context.moveTo(QQ, FQ);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
          default:
            oQ(this, QQ, FQ)
        }
        this._x0 = this._x1, this._x1 = QQ, this._y0 = this._y1, this._y1 = FQ
      }
    }, kQ.prototype = {
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
      point: function(QQ, FQ) {
        switch (QQ = +QQ, FQ = +FQ, this._point) {
          case 0:
            this._point = 1, this._x2 = QQ, this._y2 = FQ;
            break;
          case 1:
            this._point = 2, this._x3 = QQ, this._y3 = FQ;
            break;
          case 2:
            this._point = 3, this._x4 = QQ, this._y4 = FQ, this._context.moveTo((this._x0 + 4 * this._x1 + QQ) / 6, (this._y0 + 4 * this._y1 + FQ) / 6);
            break;
          default:
            oQ(this, QQ, FQ)
        }
        this._x0 = this._x1, this._x1 = QQ, this._y0 = this._y1, this._y1 = FQ
      }
    }, vQ.prototype = {
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
      point: function(QQ, FQ) {
        switch (QQ = +QQ, FQ = +FQ, this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var wQ = (this._x0 + 4 * this._x1 + QQ) / 6,
              LQ = (this._y0 + 4 * this._y1 + FQ) / 6;
            this._line ? this._context.lineTo(wQ, LQ) : this._context.moveTo(wQ, LQ);
            break;
          case 3:
            this._point = 4;
          default:
            oQ(this, QQ, FQ)
        }
        this._x0 = this._x1, this._x1 = QQ, this._y0 = this._y1, this._y1 = FQ
      }
    };
    class mQ {
      constructor(QQ, FQ) {
        this._context = QQ, this._x = FQ
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
      point(QQ, FQ) {
        switch (QQ = +QQ, FQ = +FQ, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(QQ, FQ) : this._context.moveTo(QQ, FQ);
            break;
          case 1:
            this._point = 2;
          default:
            this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + QQ) / 2, this._y0, this._x0, FQ, QQ, FQ) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + FQ) / 2, QQ, this._y0, QQ, FQ)
        }
        this._x0 = QQ, this._y0 = FQ
      }
    }

    function uQ(QQ) {
      this._context = QQ
    }

    function HQ(QQ) {
      this._context = QQ
    }

    function bQ(QQ) {
      return new HQ(QQ)
    }

    function YQ(QQ) {
      return QQ < 0 ? -1 : 1
    }

    function xQ(QQ, FQ, wQ) {
      var LQ = QQ._x1 - QQ._x0,
        qQ = FQ - QQ._x1,
        oQ = (QQ._y1 - QQ._y0) / (LQ || qQ < 0 && -0),
        DQ = (wQ - QQ._y1) / (qQ || LQ < 0 && -0),
        kQ = (oQ * qQ + DQ * LQ) / (LQ + qQ);
      return (YQ(oQ) + YQ(DQ)) * Math.min(Math.abs(oQ), Math.abs(DQ), .5 * Math.abs(kQ)) || 0
    }

    function AQ(QQ, FQ) {
      var wQ = QQ._x1 - QQ._x0;
      return wQ ? (3 * (QQ._y1 - QQ._y0) / wQ - FQ) / 2 : FQ
    }

    function tQ(QQ, FQ, wQ) {
      var LQ = QQ._x0,
        qQ = QQ._y0,
        oQ = QQ._x1,
        DQ = QQ._y1,
        kQ = (oQ - LQ) / 3;
      QQ._context.bezierCurveTo(LQ + kQ, qQ + kQ * FQ, oQ - kQ, DQ - kQ * wQ, oQ, DQ)
    }

    function eQ(QQ) {
      this._context = QQ
    }

    function MQ(QQ) {
      this._context = new GQ(QQ)
    }

    function GQ(QQ) {
      this._context = QQ
    }

    function pQ(QQ) {
      this._context = QQ
    }

    function cQ(QQ) {
      var FQ, wQ, LQ = QQ.length - 1,
        qQ = new Array(LQ),
        oQ = new Array(LQ),
        DQ = new Array(LQ);
      for (qQ[0] = 0, oQ[0] = 2, DQ[0] = QQ[0] + 2 * QQ[1], FQ = 1; FQ < LQ - 1; ++FQ) qQ[FQ] = 1, oQ[FQ] = 4, DQ[FQ] = 4 * QQ[FQ] + 2 * QQ[FQ + 1];
      for (qQ[LQ - 1] = 2, oQ[LQ - 1] = 7, DQ[LQ - 1] = 8 * QQ[LQ - 1] + QQ[LQ], FQ = 1; FQ < LQ; ++FQ) wQ = qQ[FQ] / oQ[FQ - 1], oQ[FQ] -= wQ, DQ[FQ] -= wQ * DQ[FQ - 1];
      for (qQ[LQ - 1] = DQ[LQ - 1] / oQ[LQ - 1], FQ = LQ - 2; FQ >= 0; --FQ) qQ[FQ] = (DQ[FQ] - qQ[FQ + 1]) / oQ[FQ];
      for (oQ[LQ - 1] = (QQ[LQ] + qQ[LQ - 1]) / 2, FQ = 0; FQ < LQ - 1; ++FQ) oQ[FQ] = 2 * QQ[FQ + 1] - qQ[FQ + 1];
      return [qQ, oQ]
    }

    function CQ(QQ, FQ) {
      this._context = QQ, this._t = FQ
    }
    uQ.prototype = {
      areaStart: qQ,
      areaEnd: qQ,
      lineStart: function() {
        this._point = 0
      },
      lineEnd: function() {
        this._point && this._context.closePath()
      },
      point: function(QQ, FQ) {
        QQ = +QQ, FQ = +FQ, this._point ? this._context.lineTo(QQ, FQ) : (this._point = 1, this._context.moveTo(QQ, FQ))
      }
    }, HQ.prototype = {
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
      point: function(QQ, FQ) {
        switch (QQ = +QQ, FQ = +FQ, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(QQ, FQ) : this._context.moveTo(QQ, FQ);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(QQ, FQ)
        }
      }
    }, eQ.prototype = {
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
            tQ(this, this._t0, AQ(this, this._t0))
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(QQ, FQ) {
        var wQ = NaN;
        if (FQ = +FQ, (QQ = +QQ) !== this._x1 || FQ !== this._y1) {
          switch (this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(QQ, FQ) : this._context.moveTo(QQ, FQ);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3, tQ(this, AQ(this, wQ = xQ(this, QQ, FQ)), wQ);
              break;
            default:
              tQ(this, this._t0, wQ = xQ(this, QQ, FQ))
          }
          this._x0 = this._x1, this._x1 = QQ, this._y0 = this._y1, this._y1 = FQ, this._t0 = wQ
        }
      }
    }, (MQ.prototype = Object.create(eQ.prototype)).point = function(QQ, FQ) {
      eQ.prototype.point.call(this, FQ, QQ)
    }, GQ.prototype = {
      moveTo: function(QQ, FQ) {
        this._context.moveTo(FQ, QQ)
      },
      closePath: function() {
        this._context.closePath()
      },
      lineTo: function(QQ, FQ) {
        this._context.lineTo(FQ, QQ)
      },
      bezierCurveTo: function(QQ, FQ, wQ, LQ, qQ, oQ) {
        this._context.bezierCurveTo(FQ, QQ, LQ, wQ, oQ, qQ)
      }
    }, pQ.prototype = {
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
          FQ = this._y,
          wQ = QQ.length;
        if (wQ)
          if (this._line ? this._context.lineTo(QQ[0], FQ[0]) : this._context.moveTo(QQ[0], FQ[0]), 2 === wQ) this._context.lineTo(QQ[1], FQ[1]);
          else
            for (var LQ = cQ(QQ), qQ = cQ(FQ), oQ = 0, DQ = 1; DQ < wQ; ++oQ, ++DQ) this._context.bezierCurveTo(LQ[0][oQ], qQ[0][oQ], LQ[1][oQ], qQ[1][oQ], QQ[DQ], FQ[DQ]);
        (this._line || 0 !== this._line && 1 === wQ) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
      },
      point: function(QQ, FQ) {
        this._x.push(+QQ), this._y.push(+FQ)
      }
    }, CQ.prototype = {
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
      point: function(QQ, FQ) {
        switch (QQ = +QQ, FQ = +FQ, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(QQ, FQ) : this._context.moveTo(QQ, FQ);
            break;
          case 1:
            this._point = 2;
          default:
            if (this._t <= 0) this._context.lineTo(this._x, FQ), this._context.lineTo(QQ, FQ);
            else {
              var wQ = this._x * (1 - this._t) + QQ * this._t;
              this._context.lineTo(wQ, this._y), this._context.lineTo(wQ, FQ)
            }
        }
        this._x = QQ, this._y = FQ
      }
    };
    var SQ = wQ(6046),
      iQ = wQ(5945),
      WQ = wQ(5947);

    function RQ(QQ) {
      return QQ[0]
    }

    function OQ(QQ) {
      return QQ[1]
    }

    function sQ(QQ, FQ) {
      var wQ = (0, iQ.e)(!0),
        LQ = null,
        qQ = bQ,
        oQ = null,
        DQ = (0, WQ.e)(kQ);

      function kQ(kQ) {
        var vQ, mQ, uQ, HQ = (kQ = (0, SQ.b)(kQ)).length,
          bQ = !1;
        for (null == LQ && (oQ = qQ(uQ = DQ())), vQ = 0; vQ <= HQ; ++vQ) !(vQ < HQ && wQ(mQ = kQ[vQ], vQ, kQ)) === bQ && ((bQ = !bQ) ? oQ.lineStart() : oQ.lineEnd()), bQ && oQ.point(+QQ(mQ, vQ, kQ), +FQ(mQ, vQ, kQ));
        if (uQ) return oQ = null, uQ + "" || null
      }
      return QQ = "function" === typeof QQ ? QQ : void 0 === QQ ? RQ : (0, iQ.e)(QQ), FQ = "function" === typeof FQ ? FQ : void 0 === FQ ? OQ : (0, iQ.e)(FQ), kQ.x = function(FQ) {
        return arguments.length ? (QQ = "function" === typeof FQ ? FQ : (0, iQ.e)(+FQ), kQ) : QQ
      }, kQ.y = function(QQ) {
        return arguments.length ? (FQ = "function" === typeof QQ ? QQ : (0, iQ.e)(+QQ), kQ) : FQ
      }, kQ.defined = function(QQ) {
        return arguments.length ? (wQ = "function" === typeof QQ ? QQ : (0, iQ.e)(!!QQ), kQ) : wQ
      }, kQ.curve = function(QQ) {
        return arguments.length ? (qQ = QQ, null != LQ && (oQ = qQ(LQ)), kQ) : qQ
      }, kQ.context = function(QQ) {
        return arguments.length ? (null == QQ ? LQ = oQ = null : oQ = qQ(LQ = QQ), kQ) : LQ
      }, kQ
    }

    function rQ(QQ, FQ, wQ) {
      var LQ = null,
        qQ = (0, iQ.e)(!0),
        oQ = null,
        DQ = bQ,
        kQ = null,
        vQ = (0, WQ.e)(mQ);

      function mQ(mQ) {
        var uQ, HQ, bQ, YQ, xQ, AQ = (mQ = (0, SQ.b)(mQ)).length,
          tQ = !1,
          eQ = new Array(AQ),
          MQ = new Array(AQ);
        for (null == oQ && (kQ = DQ(xQ = vQ())), uQ = 0; uQ <= AQ; ++uQ) {
          if (!(uQ < AQ && qQ(YQ = mQ[uQ], uQ, mQ)) === tQ)
            if (tQ = !tQ) HQ = uQ, kQ.areaStart(), kQ.lineStart();
            else {
              for (kQ.lineEnd(), kQ.lineStart(), bQ = uQ - 1; bQ >= HQ; --bQ) kQ.point(eQ[bQ], MQ[bQ]);
              kQ.lineEnd(), kQ.areaEnd()
            } tQ && (eQ[uQ] = +QQ(YQ, uQ, mQ), MQ[uQ] = +FQ(YQ, uQ, mQ), kQ.point(LQ ? +LQ(YQ, uQ, mQ) : eQ[uQ], wQ ? +wQ(YQ, uQ, mQ) : MQ[uQ]))
        }
        if (xQ) return kQ = null, xQ + "" || null
      }

      function uQ() {
        return sQ().defined(qQ).curve(DQ).context(oQ)
      }
      return QQ = "function" === typeof QQ ? QQ : void 0 === QQ ? RQ : (0, iQ.e)(+QQ), FQ = "function" === typeof FQ ? FQ : void 0 === FQ ? (0, iQ.e)(0) : (0, iQ.e)(+FQ), wQ = "function" === typeof wQ ? wQ : void 0 === wQ ? OQ : (0, iQ.e)(+wQ), mQ.x = function(FQ) {
        return arguments.length ? (QQ = "function" === typeof FQ ? FQ : (0, iQ.e)(+FQ), LQ = null, mQ) : QQ
      }, mQ.x0 = function(FQ) {
        return arguments.length ? (QQ = "function" === typeof FQ ? FQ : (0, iQ.e)(+FQ), mQ) : QQ
      }, mQ.x1 = function(QQ) {
        return arguments.length ? (LQ = null == QQ ? null : "function" === typeof QQ ? QQ : (0, iQ.e)(+QQ), mQ) : LQ
      }, mQ.y = function(QQ) {
        return arguments.length ? (FQ = "function" === typeof QQ ? QQ : (0, iQ.e)(+QQ), wQ = null, mQ) : FQ
      }, mQ.y0 = function(QQ) {
        return arguments.length ? (FQ = "function" === typeof QQ ? QQ : (0, iQ.e)(+QQ), mQ) : FQ
      }, mQ.y1 = function(QQ) {
        return arguments.length ? (wQ = null == QQ ? null : "function" === typeof QQ ? QQ : (0, iQ.e)(+QQ), mQ) : wQ
      }, mQ.lineX0 = mQ.lineY0 = function() {
        return uQ().x(QQ).y(FQ)
      }, mQ.lineY1 = function() {
        return uQ().x(QQ).y(wQ)
      }, mQ.lineX1 = function() {
        return uQ().x(LQ).y(FQ)
      }, mQ.defined = function(QQ) {
        return arguments.length ? (qQ = "function" === typeof QQ ? QQ : (0, iQ.e)(!!QQ), mQ) : qQ
      }, mQ.curve = function(QQ) {
        return arguments.length ? (DQ = QQ, null != oQ && (kQ = DQ(oQ)), mQ) : DQ
      }, mQ.context = function(QQ) {
        return arguments.length ? (null == QQ ? oQ = kQ = null : kQ = DQ(oQ = QQ), mQ) : oQ
      }, mQ
    }
    var IQ = wQ(5902),
      UQ = wQ.n(IQ),
      NQ = wQ(5095),
      TQ = wQ.n(NQ),
      KQ = wQ(4909),
      zQ = wQ(5277),
      lQ = wQ(5252),
      jQ = wQ(5002);

    function aQ(QQ) {
      return aQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, aQ(QQ)
    }

    function XQ() {
      return XQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var FQ = 1; FQ < arguments.length; FQ++) {
          var wQ = arguments[FQ];
          for (var LQ in wQ) Object.prototype.hasOwnProperty.call(wQ, LQ) && (QQ[LQ] = wQ[LQ])
        }
        return QQ
      }, XQ.apply(this, arguments)
    }

    function fQ(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function VQ(QQ) {
      for (var FQ = 1; FQ < arguments.length; FQ++) {
        var wQ = null != arguments[FQ] ? arguments[FQ] : {};
        FQ % 2 ? fQ(Object(wQ), !0).forEach((function(FQ) {
          hQ(QQ, FQ, wQ[FQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : fQ(Object(wQ)).forEach((function(FQ) {
          Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
        }))
      }
      return QQ
    }

    function hQ(QQ, FQ, wQ) {
      return (FQ = function(QQ) {
        var FQ = function(QQ, FQ) {
          if ("object" != aQ(QQ) || !QQ) return QQ;
          var wQ = QQ[Symbol.toPrimitive];
          if (void 0 !== wQ) {
            var LQ = wQ.call(QQ, FQ || "default");
            if ("object" != aQ(LQ)) return LQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === FQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == aQ(FQ) ? FQ : FQ + ""
      }(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }
    var JQ = {
        curveBasisClosed: function(QQ) {
          return new kQ(QQ)
        },
        curveBasisOpen: function(QQ) {
          return new vQ(QQ)
        },
        curveBasis: function(QQ) {
          return new DQ(QQ)
        },
        curveBumpX: function(QQ) {
          return new mQ(QQ, !0)
        },
        curveBumpY: function(QQ) {
          return new mQ(QQ, !1)
        },
        curveLinearClosed: function(QQ) {
          return new uQ(QQ)
        },
        curveLinear: bQ,
        curveMonotoneX: function(QQ) {
          return new eQ(QQ)
        },
        curveMonotoneY: function(QQ) {
          return new MQ(QQ)
        },
        curveNatural: function(QQ) {
          return new pQ(QQ)
        },
        curveStep: function(QQ) {
          return new CQ(QQ, .5)
        },
        curveStepAfter: function(QQ) {
          return new CQ(QQ, 1)
        },
        curveStepBefore: function(QQ) {
          return new CQ(QQ, 0)
        }
      },
      EQ = function(QQ) {
        return QQ.x === +QQ.x && QQ.y === +QQ.y
      },
      nQ = function(QQ) {
        return QQ.x
      },
      gQ = function(QQ) {
        return QQ.y
      },
      PQ = function(QQ) {
        var FQ, wQ = QQ.type,
          LQ = void 0 === wQ ? "linear" : wQ,
          qQ = QQ.points,
          oQ = void 0 === qQ ? [] : qQ,
          DQ = QQ.baseLine,
          kQ = QQ.layout,
          vQ = QQ.connectNulls,
          mQ = void 0 !== vQ && vQ,
          uQ = function(QQ, FQ) {
            if (TQ()(QQ)) return QQ;
            var wQ = "curve".concat(UQ()(QQ));
            return "curveMonotone" !== wQ && "curveBump" !== wQ || !FQ ? JQ[wQ] || bQ : JQ["".concat(wQ).concat("vertical" === FQ ? "Y" : "X")]
          }(LQ, kQ),
          HQ = mQ ? oQ.filter((function(QQ) {
            return EQ(QQ)
          })) : oQ;
        if (Array.isArray(DQ)) {
          var YQ = mQ ? DQ.filter((function(QQ) {
              return EQ(QQ)
            })) : DQ,
            xQ = HQ.map((function(QQ, FQ) {
              return VQ(VQ({}, QQ), {}, {
                base: YQ[FQ]
              })
            }));
          return (FQ = "vertical" === kQ ? rQ().y(gQ).x1(nQ).x0((function(QQ) {
            return QQ.base.x
          })) : rQ().x(nQ).y1(gQ).y0((function(QQ) {
            return QQ.base.y
          }))).defined(EQ).curve(uQ), FQ(xQ)
        }
        return (FQ = "vertical" === kQ && (0, jQ.t)(DQ) ? rQ().y(gQ).x1(nQ).x0(DQ) : (0, jQ.t)(DQ) ? rQ().x(nQ).y1(gQ).y0(DQ) : sQ().x(nQ).y(gQ)).defined(EQ).curve(uQ), FQ(HQ)
      },
      ZQ = function(QQ) {
        var FQ = QQ.className,
          wQ = QQ.points,
          qQ = QQ.path,
          oQ = QQ.pathRef;
        if ((!wQ || !wQ.length) && !qQ) return null;
        var DQ = wQ && wQ.length ? PQ(QQ) : qQ;
        return LQ.createElement("path", XQ({}, (0, lQ.e)(QQ, !1), (0, zQ.i)(QQ), {
          className: (0, KQ.b)("recharts-curve", FQ),
          d: DQ,
          ref: oQ
        }))
      }
  },
  5954: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => vQ
    });
    var LQ = wQ(53),
      qQ = wQ(4909),
      oQ = wQ(5277),
      DQ = wQ(5252);

    function kQ() {
      return kQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var FQ = 1; FQ < arguments.length; FQ++) {
          var wQ = arguments[FQ];
          for (var LQ in wQ) Object.prototype.hasOwnProperty.call(wQ, LQ) && (QQ[LQ] = wQ[LQ])
        }
        return QQ
      }, kQ.apply(this, arguments)
    }
    var vQ = function(QQ) {
      var FQ = QQ.cx,
        wQ = QQ.cy,
        vQ = QQ.r,
        mQ = QQ.className,
        uQ = (0, qQ.b)("recharts-dot", mQ);
      return FQ === +FQ && wQ === +wQ && vQ === +vQ ? LQ.createElement("circle", kQ({}, (0, DQ.e)(QQ, !1), (0, oQ.i)(QQ), {
        className: uQ,
        cx: FQ,
        cy: wQ,
        r: vQ
      })) : null
    }
  },
  5956: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => eQ,
      g: () => AQ
    });
    var LQ = wQ(53),
      qQ = wQ(4909),
      oQ = wQ(5960),
      DQ = wQ(5252);

    function kQ(QQ) {
      return kQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, kQ(QQ)
    }

    function vQ() {
      return vQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var FQ = 1; FQ < arguments.length; FQ++) {
          var wQ = arguments[FQ];
          for (var LQ in wQ) Object.prototype.hasOwnProperty.call(wQ, LQ) && (QQ[LQ] = wQ[LQ])
        }
        return QQ
      }, vQ.apply(this, arguments)
    }

    function mQ(QQ, FQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return QQ
      }(QQ) || function(QQ, FQ) {
        var wQ = null == QQ ? null : "undefined" != typeof Symbol && QQ[Symbol.iterator] || QQ["@@iterator"];
        if (null != wQ) {
          var LQ, qQ, oQ, DQ, kQ = [],
            vQ = !0,
            mQ = !1;
          try {
            if (oQ = (wQ = wQ.call(QQ)).next, 0 === FQ) {
              if (Object(wQ) !== wQ) return;
              vQ = !1
            } else
              for (; !(vQ = (LQ = oQ.call(wQ)).done) && (kQ.push(LQ.value), kQ.length !== FQ); vQ = !0);
          } catch (QQ) {
            mQ = !0, qQ = QQ
          } finally {
            try {
              if (!vQ && null != wQ.return && (DQ = wQ.return(), Object(DQ) !== DQ)) return
            } finally {
              if (mQ) throw qQ
            }
          }
          return kQ
        }
      }(QQ, FQ) || function(QQ, FQ) {
        if (!QQ) return;
        if ("string" === typeof QQ) return uQ(QQ, FQ);
        var wQ = Object.prototype.toString.call(QQ).slice(8, -1);
        "Object" === wQ && QQ.constructor && (wQ = QQ.constructor.name);
        if ("Map" === wQ || "Set" === wQ) return Array.from(QQ);
        if ("Arguments" === wQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wQ)) return uQ(QQ, FQ)
      }(QQ, FQ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function uQ(QQ, FQ) {
      (null == FQ || FQ > QQ.length) && (FQ = QQ.length);
      for (var wQ = 0, LQ = new Array(FQ); wQ < FQ; wQ++) LQ[wQ] = QQ[wQ];
      return LQ
    }

    function HQ(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function bQ(QQ) {
      for (var FQ = 1; FQ < arguments.length; FQ++) {
        var wQ = null != arguments[FQ] ? arguments[FQ] : {};
        FQ % 2 ? HQ(Object(wQ), !0).forEach((function(FQ) {
          YQ(QQ, FQ, wQ[FQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : HQ(Object(wQ)).forEach((function(FQ) {
          Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
        }))
      }
      return QQ
    }

    function YQ(QQ, FQ, wQ) {
      return (FQ = function(QQ) {
        var FQ = function(QQ, FQ) {
          if ("object" != kQ(QQ) || !QQ) return QQ;
          var wQ = QQ[Symbol.toPrimitive];
          if (void 0 !== wQ) {
            var LQ = wQ.call(QQ, FQ || "default");
            if ("object" != kQ(LQ)) return LQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === FQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == kQ(FQ) ? FQ : FQ + ""
      }(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }
    var xQ = function(QQ, FQ, wQ, LQ, qQ) {
        var oQ, DQ = Math.min(Math.abs(wQ) / 2, Math.abs(LQ) / 2),
          kQ = LQ >= 0 ? 1 : -1,
          vQ = wQ >= 0 ? 1 : -1,
          mQ = LQ >= 0 && wQ >= 0 || LQ < 0 && wQ < 0 ? 1 : 0;
        if (DQ > 0 && qQ instanceof Array) {
          for (var uQ = [0, 0, 0, 0], HQ = 0; HQ < 4; HQ++) uQ[HQ] = qQ[HQ] > DQ ? DQ : qQ[HQ];
          oQ = "M".concat(QQ, ",").concat(FQ + kQ * uQ[0]), uQ[0] > 0 && (oQ += "A ".concat(uQ[0], ",").concat(uQ[0], ",0,0,").concat(mQ, ",").concat(QQ + vQ * uQ[0], ",").concat(FQ)), oQ += "L ".concat(QQ + wQ - vQ * uQ[1], ",").concat(FQ), uQ[1] > 0 && (oQ += "A ".concat(uQ[1], ",").concat(uQ[1], ",0,0,").concat(mQ, ",\n        ").concat(QQ + wQ, ",").concat(FQ + kQ * uQ[1])), oQ += "L ".concat(QQ + wQ, ",").concat(FQ + LQ - kQ * uQ[2]), uQ[2] > 0 && (oQ += "A ".concat(uQ[2], ",").concat(uQ[2], ",0,0,").concat(mQ, ",\n        ").concat(QQ + wQ - vQ * uQ[2], ",").concat(FQ + LQ)), oQ += "L ".concat(QQ + vQ * uQ[3], ",").concat(FQ + LQ), uQ[3] > 0 && (oQ += "A ".concat(uQ[3], ",").concat(uQ[3], ",0,0,").concat(mQ, ",\n        ").concat(QQ, ",").concat(FQ + LQ - kQ * uQ[3])), oQ += "Z"
        } else if (DQ > 0 && qQ === +qQ && qQ > 0) {
          var bQ = Math.min(DQ, qQ);
          oQ = "M ".concat(QQ, ",").concat(FQ + kQ * bQ, "\n            A ").concat(bQ, ",").concat(bQ, ",0,0,").concat(mQ, ",").concat(QQ + vQ * bQ, ",").concat(FQ, "\n            L ").concat(QQ + wQ - vQ * bQ, ",").concat(FQ, "\n            A ").concat(bQ, ",").concat(bQ, ",0,0,").concat(mQ, ",").concat(QQ + wQ, ",").concat(FQ + kQ * bQ, "\n            L ").concat(QQ + wQ, ",").concat(FQ + LQ - kQ * bQ, "\n            A ").concat(bQ, ",").concat(bQ, ",0,0,").concat(mQ, ",").concat(QQ + wQ - vQ * bQ, ",").concat(FQ + LQ, "\n            L ").concat(QQ + vQ * bQ, ",").concat(FQ + LQ, "\n            A ").concat(bQ, ",").concat(bQ, ",0,0,").concat(mQ, ",").concat(QQ, ",").concat(FQ + LQ - kQ * bQ, " Z")
        } else oQ = "M ".concat(QQ, ",").concat(FQ, " h ").concat(wQ, " v ").concat(LQ, " h ").concat(-wQ, " Z");
        return oQ
      },
      AQ = function(QQ, FQ) {
        if (!QQ || !FQ) return !1;
        var wQ = QQ.x,
          LQ = QQ.y,
          qQ = FQ.x,
          oQ = FQ.y,
          DQ = FQ.width,
          kQ = FQ.height;
        if (Math.abs(DQ) > 0 && Math.abs(kQ) > 0) {
          var vQ = Math.min(qQ, qQ + DQ),
            mQ = Math.max(qQ, qQ + DQ),
            uQ = Math.min(oQ, oQ + kQ),
            HQ = Math.max(oQ, oQ + kQ);
          return wQ >= vQ && wQ <= mQ && LQ >= uQ && LQ <= HQ
        }
        return !1
      },
      tQ = {
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
      eQ = function(QQ) {
        var FQ = bQ(bQ({}, tQ), QQ),
          wQ = (0, LQ.useRef)(),
          kQ = mQ((0, LQ.useState)(-1), 2),
          uQ = kQ[0],
          HQ = kQ[1];
        (0, LQ.useEffect)((function() {
          if (wQ.current && wQ.current.getTotalLength) try {
            var QQ = wQ.current.getTotalLength();
            QQ && HQ(QQ)
          } catch (FQ) {}
        }), []);
        var YQ = FQ.x,
          AQ = FQ.y,
          eQ = FQ.width,
          MQ = FQ.height,
          GQ = FQ.radius,
          pQ = FQ.className,
          cQ = FQ.animationEasing,
          CQ = FQ.animationDuration,
          SQ = FQ.animationBegin,
          iQ = FQ.isAnimationActive,
          WQ = FQ.isUpdateAnimationActive;
        if (YQ !== +YQ || AQ !== +AQ || eQ !== +eQ || MQ !== +MQ || 0 === eQ || 0 === MQ) return null;
        var RQ = (0, qQ.b)("recharts-rectangle", pQ);
        return WQ ? LQ.createElement(oQ.b, {
          canBegin: uQ > 0,
          from: {
            width: eQ,
            height: MQ,
            x: YQ,
            y: AQ
          },
          to: {
            width: eQ,
            height: MQ,
            x: YQ,
            y: AQ
          },
          duration: CQ,
          animationEasing: cQ,
          isActive: WQ
        }, (function(QQ) {
          var qQ = QQ.width,
            kQ = QQ.height,
            mQ = QQ.x,
            HQ = QQ.y;
          return LQ.createElement(oQ.b, {
            canBegin: uQ > 0,
            from: "0px ".concat(-1 === uQ ? 1 : uQ, "px"),
            to: "".concat(uQ, "px 0px"),
            attributeName: "strokeDasharray",
            mY: SQ,
            duration: CQ,
            isActive: iQ,
            easing: cQ
          }, LQ.createElement("path", vQ({}, (0, DQ.e)(FQ, !0), {
            className: RQ,
            d: xQ(mQ, HQ, qQ, kQ, GQ),
            ref: wQ
          })))
        })) : LQ.createElement("path", vQ({}, (0, DQ.e)(FQ, !0), {
          className: RQ,
          d: xQ(YQ, AQ, eQ, MQ, GQ)
        }))
      }
  },
  6158: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => tQ
    });
    var LQ = wQ(53),
      qQ = wQ(4909),
      oQ = wQ(5252),
      DQ = wQ(6061),
      kQ = wQ(5002);

    function vQ(QQ) {
      return vQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, vQ(QQ)
    }

    function mQ() {
      return mQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var FQ = 1; FQ < arguments.length; FQ++) {
          var wQ = arguments[FQ];
          for (var LQ in wQ) Object.prototype.hasOwnProperty.call(wQ, LQ) && (QQ[LQ] = wQ[LQ])
        }
        return QQ
      }, mQ.apply(this, arguments)
    }

    function uQ(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function HQ(QQ) {
      for (var FQ = 1; FQ < arguments.length; FQ++) {
        var wQ = null != arguments[FQ] ? arguments[FQ] : {};
        FQ % 2 ? uQ(Object(wQ), !0).forEach((function(FQ) {
          bQ(QQ, FQ, wQ[FQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : uQ(Object(wQ)).forEach((function(FQ) {
          Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
        }))
      }
      return QQ
    }

    function bQ(QQ, FQ, wQ) {
      return (FQ = function(QQ) {
        var FQ = function(QQ, FQ) {
          if ("object" != vQ(QQ) || !QQ) return QQ;
          var wQ = QQ[Symbol.toPrimitive];
          if (void 0 !== wQ) {
            var LQ = wQ.call(QQ, FQ || "default");
            if ("object" != vQ(LQ)) return LQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === FQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == vQ(FQ) ? FQ : FQ + ""
      }(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }
    var YQ = function(QQ) {
        var FQ = QQ.cx,
          wQ = QQ.cy,
          LQ = QQ.radius,
          qQ = QQ.angle,
          oQ = QQ.sign,
          kQ = QQ.isExternal,
          vQ = QQ.cornerRadius,
          mQ = QQ.cornerIsExternal,
          uQ = vQ * (kQ ? 1 : -1) + LQ,
          HQ = Math.asin(vQ / uQ) / DQ.e,
          bQ = mQ ? qQ : qQ + oQ * HQ,
          YQ = mQ ? qQ - oQ * HQ : qQ;
        return {
          center: (0, DQ.m)(FQ, wQ, uQ, bQ),
          circleTangency: (0, DQ.m)(FQ, wQ, LQ, bQ),
          lineTangency: (0, DQ.m)(FQ, wQ, uQ * Math.cos(HQ * DQ.e), YQ),
          uv: HQ
        }
      },
      xQ = function(QQ) {
        var FQ = QQ.cx,
          wQ = QQ.cy,
          LQ = QQ.innerRadius,
          qQ = QQ.outerRadius,
          oQ = QQ.startAngle,
          vQ = function(QQ, FQ) {
            return (0, kQ.z)(FQ - QQ) * Math.min(Math.abs(FQ - QQ), 359.999)
          }(oQ, QQ.endAngle),
          mQ = oQ + vQ,
          uQ = (0, DQ.m)(FQ, wQ, qQ, oQ),
          HQ = (0, DQ.m)(FQ, wQ, qQ, mQ),
          bQ = "M ".concat(uQ.x, ",").concat(uQ.y, "\n    A ").concat(qQ, ",").concat(qQ, ",0,\n    ").concat(+(Math.abs(vQ) > 180), ",").concat(+(oQ > mQ), ",\n    ").concat(HQ.x, ",").concat(HQ.y, "\n  ");
        if (LQ > 0) {
          var YQ = (0, DQ.m)(FQ, wQ, LQ, oQ),
            xQ = (0, DQ.m)(FQ, wQ, LQ, mQ);
          bQ += "L ".concat(xQ.x, ",").concat(xQ.y, "\n            A ").concat(LQ, ",").concat(LQ, ",0,\n            ").concat(+(Math.abs(vQ) > 180), ",").concat(+(oQ <= mQ), ",\n            ").concat(YQ.x, ",").concat(YQ.y, " Z")
        } else bQ += "L ".concat(FQ, ",").concat(wQ, " Z");
        return bQ
      },
      AQ = {
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
      tQ = function(QQ) {
        var FQ = HQ(HQ({}, AQ), QQ),
          wQ = FQ.cx,
          DQ = FQ.cy,
          vQ = FQ.innerRadius,
          uQ = FQ.outerRadius,
          bQ = FQ.cornerRadius,
          tQ = FQ.forceCornerRadius,
          eQ = FQ.cornerIsExternal,
          MQ = FQ.startAngle,
          GQ = FQ.endAngle,
          pQ = FQ.className;
        if (uQ < vQ || MQ === GQ) return null;
        var cQ, CQ = (0, qQ.b)("recharts-sector", pQ),
          SQ = uQ - vQ,
          iQ = (0, kQ.k)(bQ, SQ, 0, !0);
        return cQ = iQ > 0 && Math.abs(MQ - GQ) < 360 ? function(QQ) {
          var FQ = QQ.cx,
            wQ = QQ.cy,
            LQ = QQ.innerRadius,
            qQ = QQ.outerRadius,
            oQ = QQ.cornerRadius,
            DQ = QQ.forceCornerRadius,
            vQ = QQ.cornerIsExternal,
            mQ = QQ.startAngle,
            uQ = QQ.endAngle,
            HQ = (0, kQ.z)(uQ - mQ),
            bQ = YQ({
              cx: FQ,
              cy: wQ,
              radius: qQ,
              angle: mQ,
              sign: HQ,
              cornerRadius: oQ,
              cornerIsExternal: vQ
            }),
            AQ = bQ.circleTangency,
            tQ = bQ.lineTangency,
            eQ = bQ.uv,
            MQ = YQ({
              cx: FQ,
              cy: wQ,
              radius: qQ,
              angle: uQ,
              sign: -HQ,
              cornerRadius: oQ,
              cornerIsExternal: vQ
            }),
            GQ = MQ.circleTangency,
            pQ = MQ.lineTangency,
            cQ = MQ.uv,
            CQ = vQ ? Math.abs(mQ - uQ) : Math.abs(mQ - uQ) - eQ - cQ;
          if (CQ < 0) return DQ ? "M ".concat(tQ.x, ",").concat(tQ.y, "\n        a").concat(oQ, ",").concat(oQ, ",0,0,1,").concat(2 * oQ, ",0\n        a").concat(oQ, ",").concat(oQ, ",0,0,1,").concat(2 * -oQ, ",0\n      ") : xQ({
            cx: FQ,
            cy: wQ,
            innerRadius: LQ,
            outerRadius: qQ,
            startAngle: mQ,
            endAngle: uQ
          });
          var SQ = "M ".concat(tQ.x, ",").concat(tQ.y, "\n    A").concat(oQ, ",").concat(oQ, ",0,0,").concat(+(HQ < 0), ",").concat(AQ.x, ",").concat(AQ.y, "\n    A").concat(qQ, ",").concat(qQ, ",0,").concat(+(CQ > 180), ",").concat(+(HQ < 0), ",").concat(GQ.x, ",").concat(GQ.y, "\n    A").concat(oQ, ",").concat(oQ, ",0,0,").concat(+(HQ < 0), ",").concat(pQ.x, ",").concat(pQ.y, "\n  ");
          if (LQ > 0) {
            var iQ = YQ({
                cx: FQ,
                cy: wQ,
                radius: LQ,
                angle: mQ,
                sign: HQ,
                isExternal: !0,
                cornerRadius: oQ,
                cornerIsExternal: vQ
              }),
              WQ = iQ.circleTangency,
              RQ = iQ.lineTangency,
              OQ = iQ.uv,
              sQ = YQ({
                cx: FQ,
                cy: wQ,
                radius: LQ,
                angle: uQ,
                sign: -HQ,
                isExternal: !0,
                cornerRadius: oQ,
                cornerIsExternal: vQ
              }),
              rQ = sQ.circleTangency,
              IQ = sQ.lineTangency,
              UQ = sQ.uv,
              NQ = vQ ? Math.abs(mQ - uQ) : Math.abs(mQ - uQ) - OQ - UQ;
            if (NQ < 0 && 0 === oQ) return "".concat(SQ, "L").concat(FQ, ",").concat(wQ, "Z");
            SQ += "L".concat(IQ.x, ",").concat(IQ.y, "\n      A").concat(oQ, ",").concat(oQ, ",0,0,").concat(+(HQ < 0), ",").concat(rQ.x, ",").concat(rQ.y, "\n      A").concat(LQ, ",").concat(LQ, ",0,").concat(+(NQ > 180), ",").concat(+(HQ > 0), ",").concat(WQ.x, ",").concat(WQ.y, "\n      A").concat(oQ, ",").concat(oQ, ",0,0,").concat(+(HQ < 0), ",").concat(RQ.x, ",").concat(RQ.y, "Z")
          } else SQ += "L".concat(FQ, ",").concat(wQ, "Z");
          return SQ
        }({
          cx: wQ,
          cy: DQ,
          innerRadius: vQ,
          outerRadius: uQ,
          cornerRadius: Math.min(iQ, SQ / 2),
          forceCornerRadius: tQ,
          cornerIsExternal: eQ,
          startAngle: MQ,
          endAngle: GQ
        }) : xQ({
          cx: wQ,
          cy: DQ,
          innerRadius: vQ,
          outerRadius: uQ,
          startAngle: MQ,
          endAngle: GQ
        }), LQ.createElement("path", mQ({}, (0, oQ.e)(FQ, !0), {
          className: CQ,
          d: cQ,
          role: "img"
        }))
      }
  },
  5893: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => VQ
    });
    var LQ = wQ(53),
      qQ = wQ(5902),
      oQ = wQ.n(qQ);
    Math.abs, Math.atan2;
    const DQ = Math.cos,
      kQ = (Math.max, Math.min, Math.sin),
      vQ = Math.sqrt,
      mQ = Math.PI,
      uQ = 2 * mQ;
    const HQ = {
        draw(QQ, FQ) {
          const wQ = vQ(FQ / mQ);
          QQ.moveTo(wQ, 0), QQ.arc(0, 0, wQ, 0, uQ)
        }
      },
      bQ = {
        draw(QQ, FQ) {
          const wQ = vQ(FQ / 5) / 2;
          QQ.moveTo(-3 * wQ, -wQ), QQ.lineTo(-wQ, -wQ), QQ.lineTo(-wQ, -3 * wQ), QQ.lineTo(wQ, -3 * wQ), QQ.lineTo(wQ, -wQ), QQ.lineTo(3 * wQ, -wQ), QQ.lineTo(3 * wQ, wQ), QQ.lineTo(wQ, wQ), QQ.lineTo(wQ, 3 * wQ), QQ.lineTo(-wQ, 3 * wQ), QQ.lineTo(-wQ, wQ), QQ.lineTo(-3 * wQ, wQ), QQ.closePath()
        }
      },
      YQ = vQ(1 / 3),
      xQ = 2 * YQ,
      AQ = {
        draw(QQ, FQ) {
          const wQ = vQ(FQ / xQ),
            LQ = wQ * YQ;
          QQ.moveTo(0, -wQ), QQ.lineTo(LQ, 0), QQ.lineTo(0, wQ), QQ.lineTo(-LQ, 0), QQ.closePath()
        }
      },
      tQ = {
        draw(QQ, FQ) {
          const wQ = vQ(FQ),
            LQ = -wQ / 2;
          QQ.rect(LQ, LQ, wQ, wQ)
        }
      },
      eQ = kQ(mQ / 10) / kQ(7 * mQ / 10),
      MQ = kQ(uQ / 10) * eQ,
      GQ = -DQ(uQ / 10) * eQ,
      pQ = {
        draw(QQ, FQ) {
          const wQ = vQ(.8908130915292852 * FQ),
            LQ = MQ * wQ,
            qQ = GQ * wQ;
          QQ.moveTo(0, -wQ), QQ.lineTo(LQ, qQ);
          for (let oQ = 1; oQ < 5; ++oQ) {
            const FQ = uQ * oQ / 5,
              vQ = DQ(FQ),
              mQ = kQ(FQ);
            QQ.lineTo(mQ * wQ, -vQ * wQ), QQ.lineTo(vQ * LQ - mQ * qQ, mQ * LQ + vQ * qQ)
          }
          QQ.closePath()
        }
      },
      cQ = vQ(3),
      CQ = {
        draw(QQ, FQ) {
          const wQ = -vQ(FQ / (3 * cQ));
          QQ.moveTo(0, 2 * wQ), QQ.lineTo(-cQ * wQ, -wQ), QQ.lineTo(cQ * wQ, -wQ), QQ.closePath()
        }
      },
      SQ = -.5,
      iQ = vQ(3) / 2,
      WQ = 1 / vQ(12),
      RQ = 3 * (WQ / 2 + 1),
      OQ = {
        draw(QQ, FQ) {
          const wQ = vQ(FQ / RQ),
            LQ = wQ / 2,
            qQ = wQ * WQ,
            oQ = LQ,
            DQ = wQ * WQ + wQ,
            kQ = -oQ,
            mQ = DQ;
          QQ.moveTo(LQ, qQ), QQ.lineTo(oQ, DQ), QQ.lineTo(kQ, mQ), QQ.lineTo(SQ * LQ - iQ * qQ, iQ * LQ + SQ * qQ), QQ.lineTo(SQ * oQ - iQ * DQ, iQ * oQ + SQ * DQ), QQ.lineTo(SQ * kQ - iQ * mQ, iQ * kQ + SQ * mQ), QQ.lineTo(SQ * LQ + iQ * qQ, SQ * qQ - iQ * LQ), QQ.lineTo(SQ * oQ + iQ * DQ, SQ * DQ - iQ * oQ), QQ.lineTo(SQ * kQ + iQ * mQ, SQ * mQ - iQ * kQ), QQ.closePath()
        }
      };
    var sQ = wQ(5945),
      rQ = wQ(5947);
    vQ(3), vQ(3);
    var IQ = wQ(4909),
      UQ = wQ(5252);

    function NQ(QQ) {
      return NQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, NQ(QQ)
    }
    var TQ = ["type", "size", "sizeType"];

    function KQ() {
      return KQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var FQ = 1; FQ < arguments.length; FQ++) {
          var wQ = arguments[FQ];
          for (var LQ in wQ) Object.prototype.hasOwnProperty.call(wQ, LQ) && (QQ[LQ] = wQ[LQ])
        }
        return QQ
      }, KQ.apply(this, arguments)
    }

    function zQ(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function lQ(QQ) {
      for (var FQ = 1; FQ < arguments.length; FQ++) {
        var wQ = null != arguments[FQ] ? arguments[FQ] : {};
        FQ % 2 ? zQ(Object(wQ), !0).forEach((function(FQ) {
          jQ(QQ, FQ, wQ[FQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : zQ(Object(wQ)).forEach((function(FQ) {
          Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
        }))
      }
      return QQ
    }

    function jQ(QQ, FQ, wQ) {
      return (FQ = function(QQ) {
        var FQ = function(QQ, FQ) {
          if ("object" != NQ(QQ) || !QQ) return QQ;
          var wQ = QQ[Symbol.toPrimitive];
          if (void 0 !== wQ) {
            var LQ = wQ.call(QQ, FQ || "default");
            if ("object" != NQ(LQ)) return LQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === FQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == NQ(FQ) ? FQ : FQ + ""
      }(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }

    function aQ(QQ, FQ) {
      if (null == QQ) return {};
      var wQ, LQ, qQ = function(QQ, FQ) {
        if (null == QQ) return {};
        var wQ = {};
        for (var LQ in QQ)
          if (Object.prototype.hasOwnProperty.call(QQ, LQ)) {
            if (FQ.indexOf(LQ) >= 0) continue;
            wQ[LQ] = QQ[LQ]
          } return wQ
      }(QQ, FQ);
      if (Object.getOwnPropertySymbols) {
        var oQ = Object.getOwnPropertySymbols(QQ);
        for (LQ = 0; LQ < oQ.length; LQ++) wQ = oQ[LQ], FQ.indexOf(wQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, wQ) && (qQ[wQ] = QQ[wQ])
      }
      return qQ
    }
    var XQ = {
        symbolCircle: HQ,
        symbolCross: bQ,
        symbolDiamond: AQ,
        symbolSquare: tQ,
        symbolStar: pQ,
        symbolTriangle: CQ,
        symbolWye: OQ
      },
      fQ = Math.PI / 180,
      VQ = function(QQ) {
        var FQ = QQ.type,
          wQ = void 0 === FQ ? "circle" : FQ,
          qQ = QQ.size,
          DQ = void 0 === qQ ? 64 : qQ,
          kQ = QQ.sizeType,
          vQ = void 0 === kQ ? "area" : kQ,
          mQ = lQ(lQ({}, aQ(QQ, TQ)), {}, {
            type: wQ,
            size: DQ,
            sizeType: vQ
          }),
          uQ = mQ.className,
          bQ = mQ.cx,
          YQ = mQ.cy,
          xQ = (0, UQ.e)(mQ, !0);
        return bQ === +bQ && YQ === +YQ && DQ === +DQ ? LQ.createElement("path", KQ({}, xQ, {
          className: (0, IQ.b)("recharts-symbols", uQ),
          transform: "translate(".concat(bQ, ", ").concat(YQ, ")"),
          d: function() {
            var QQ = function(QQ) {
                var FQ = "symbol".concat(oQ()(QQ));
                return XQ[FQ] || HQ
              }(wQ),
              FQ = function(QQ, FQ) {
                let wQ = null,
                  LQ = (0, rQ.e)(qQ);

                function qQ() {
                  let qQ;
                  if (wQ || (wQ = qQ = LQ()), QQ.apply(this, arguments).draw(wQ, +FQ.apply(this, arguments)), qQ) return wQ = null, qQ + "" || null
                }
                return QQ = "function" === typeof QQ ? QQ : (0, sQ.e)(QQ || HQ), FQ = "function" === typeof FQ ? FQ : (0, sQ.e)(void 0 === FQ ? 64 : +FQ), qQ.type = function(FQ) {
                  return arguments.length ? (QQ = "function" === typeof FQ ? FQ : (0, sQ.e)(FQ), qQ) : QQ
                }, qQ.size = function(QQ) {
                  return arguments.length ? (FQ = "function" === typeof QQ ? QQ : (0, sQ.e)(+QQ), qQ) : FQ
                }, qQ.context = function(QQ) {
                  return arguments.length ? (wQ = null == QQ ? null : QQ, qQ) : wQ
                }, qQ
              }().type(QQ).size(function(QQ, FQ, wQ) {
                if ("area" === FQ) return QQ;
                switch (wQ) {
                  case "cross":
                    return 5 * QQ * QQ / 9;
                  case "diamond":
                    return .5 * QQ * QQ / Math.sqrt(3);
                  case "square":
                    return QQ * QQ;
                  case "star":
                    var LQ = 18 * fQ;
                    return 1.25 * QQ * QQ * (Math.tan(LQ) - Math.tan(2 * LQ) * Math.pow(Math.tan(LQ), 2));
                  case "triangle":
                    return Math.sqrt(3) * QQ * QQ / 4;
                  case "wye":
                    return (21 - 10 * Math.sqrt(3)) * QQ * QQ / 8;
                  default:
                    return Math.PI * QQ * QQ / 4
                }
              }(DQ, vQ, wQ));
            return FQ()
          }()
        })) : null
      };
    VQ.registerSymbol = function(QQ, FQ) {
      XQ["symbol".concat(oQ()(QQ))] = FQ
    }
  },
  6130: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => jQ,
      g: () => EQ,
      h: () => aQ,
      i: () => XQ,
      j: () => fQ
    });
    var LQ = wQ(53),
      qQ = wQ(5095),
      oQ = wQ.n(qQ),
      DQ = wQ(6139),
      kQ = wQ.n(DQ),
      vQ = wQ(6152),
      mQ = wQ.n(vQ),
      uQ = wQ(6036),
      HQ = wQ.n(uQ),
      bQ = wQ(5956),
      YQ = wQ(4909),
      xQ = wQ(5960),
      AQ = wQ(5252);

    function tQ(QQ) {
      return tQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, tQ(QQ)
    }

    function eQ() {
      return eQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var FQ = 1; FQ < arguments.length; FQ++) {
          var wQ = arguments[FQ];
          for (var LQ in wQ) Object.prototype.hasOwnProperty.call(wQ, LQ) && (QQ[LQ] = wQ[LQ])
        }
        return QQ
      }, eQ.apply(this, arguments)
    }

    function MQ(QQ, FQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return QQ
      }(QQ) || function(QQ, FQ) {
        var wQ = null == QQ ? null : "undefined" != typeof Symbol && QQ[Symbol.iterator] || QQ["@@iterator"];
        if (null != wQ) {
          var LQ, qQ, oQ, DQ, kQ = [],
            vQ = !0,
            mQ = !1;
          try {
            if (oQ = (wQ = wQ.call(QQ)).next, 0 === FQ) {
              if (Object(wQ) !== wQ) return;
              vQ = !1
            } else
              for (; !(vQ = (LQ = oQ.call(wQ)).done) && (kQ.push(LQ.value), kQ.length !== FQ); vQ = !0);
          } catch (QQ) {
            mQ = !0, qQ = QQ
          } finally {
            try {
              if (!vQ && null != wQ.return && (DQ = wQ.return(), Object(DQ) !== DQ)) return
            } finally {
              if (mQ) throw qQ
            }
          }
          return kQ
        }
      }(QQ, FQ) || function(QQ, FQ) {
        if (!QQ) return;
        if ("string" === typeof QQ) return GQ(QQ, FQ);
        var wQ = Object.prototype.toString.call(QQ).slice(8, -1);
        "Object" === wQ && QQ.constructor && (wQ = QQ.constructor.name);
        if ("Map" === wQ || "Set" === wQ) return Array.from(QQ);
        if ("Arguments" === wQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wQ)) return GQ(QQ, FQ)
      }(QQ, FQ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function GQ(QQ, FQ) {
      (null == FQ || FQ > QQ.length) && (FQ = QQ.length);
      for (var wQ = 0, LQ = new Array(FQ); wQ < FQ; wQ++) LQ[wQ] = QQ[wQ];
      return LQ
    }

    function pQ(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function cQ(QQ) {
      for (var FQ = 1; FQ < arguments.length; FQ++) {
        var wQ = null != arguments[FQ] ? arguments[FQ] : {};
        FQ % 2 ? pQ(Object(wQ), !0).forEach((function(FQ) {
          CQ(QQ, FQ, wQ[FQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : pQ(Object(wQ)).forEach((function(FQ) {
          Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
        }))
      }
      return QQ
    }

    function CQ(QQ, FQ, wQ) {
      return (FQ = function(QQ) {
        var FQ = function(QQ, FQ) {
          if ("object" != tQ(QQ) || !QQ) return QQ;
          var wQ = QQ[Symbol.toPrimitive];
          if (void 0 !== wQ) {
            var LQ = wQ.call(QQ, FQ || "default");
            if ("object" != tQ(LQ)) return LQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === FQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == tQ(FQ) ? FQ : FQ + ""
      }(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }
    var SQ = function(QQ, FQ, wQ, LQ, qQ) {
        var oQ, DQ = wQ - LQ;
        return oQ = "M ".concat(QQ, ",").concat(FQ), oQ += "L ".concat(QQ + wQ, ",").concat(FQ), oQ += "L ".concat(QQ + wQ - DQ / 2, ",").concat(FQ + qQ), oQ += "L ".concat(QQ + wQ - DQ / 2 - LQ, ",").concat(FQ + qQ), oQ += "L ".concat(QQ, ",").concat(FQ, " Z")
      },
      iQ = {
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
      WQ = function(QQ) {
        var FQ = cQ(cQ({}, iQ), QQ),
          wQ = (0, LQ.useRef)(),
          qQ = MQ((0, LQ.useState)(-1), 2),
          oQ = qQ[0],
          DQ = qQ[1];
        (0, LQ.useEffect)((function() {
          if (wQ.current && wQ.current.getTotalLength) try {
            var QQ = wQ.current.getTotalLength();
            QQ && DQ(QQ)
          } catch (FQ) {}
        }), []);
        var kQ = FQ.x,
          vQ = FQ.y,
          mQ = FQ.upperWidth,
          uQ = FQ.lowerWidth,
          HQ = FQ.height,
          bQ = FQ.className,
          tQ = FQ.animationEasing,
          GQ = FQ.animationDuration,
          pQ = FQ.animationBegin,
          CQ = FQ.isUpdateAnimationActive;
        if (kQ !== +kQ || vQ !== +vQ || mQ !== +mQ || uQ !== +uQ || HQ !== +HQ || 0 === mQ && 0 === uQ || 0 === HQ) return null;
        var WQ = (0, YQ.b)("recharts-trapezoid", bQ);
        return CQ ? LQ.createElement(xQ.b, {
          canBegin: oQ > 0,
          from: {
            upperWidth: 0,
            lowerWidth: 0,
            height: HQ,
            x: kQ,
            y: vQ
          },
          to: {
            upperWidth: mQ,
            lowerWidth: uQ,
            height: HQ,
            x: kQ,
            y: vQ
          },
          duration: GQ,
          animationEasing: tQ,
          isActive: CQ
        }, (function(QQ) {
          var qQ = QQ.upperWidth,
            DQ = QQ.lowerWidth,
            kQ = QQ.height,
            vQ = QQ.x,
            mQ = QQ.y;
          return LQ.createElement(xQ.b, {
            canBegin: oQ > 0,
            from: "0px ".concat(-1 === oQ ? 1 : oQ, "px"),
            to: "".concat(oQ, "px 0px"),
            attributeName: "strokeDasharray",
            mY: pQ,
            duration: GQ,
            easing: tQ
          }, LQ.createElement("path", eQ({}, (0, AQ.e)(FQ, !0), {
            className: WQ,
            d: SQ(vQ, mQ, qQ, DQ, kQ),
            ref: wQ
          })))
        })) : LQ.createElement("g", null, LQ.createElement("path", eQ({}, (0, AQ.e)(FQ, !0), {
          className: WQ,
          d: SQ(kQ, vQ, mQ, uQ, HQ)
        })))
      },
      RQ = wQ(6158),
      OQ = wQ(5800),
      sQ = wQ(5893),
      rQ = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];

    function IQ(QQ) {
      return IQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, IQ(QQ)
    }

    function UQ(QQ, FQ) {
      if (null == QQ) return {};
      var wQ, LQ, qQ = function(QQ, FQ) {
        if (null == QQ) return {};
        var wQ = {};
        for (var LQ in QQ)
          if (Object.prototype.hasOwnProperty.call(QQ, LQ)) {
            if (FQ.indexOf(LQ) >= 0) continue;
            wQ[LQ] = QQ[LQ]
          } return wQ
      }(QQ, FQ);
      if (Object.getOwnPropertySymbols) {
        var oQ = Object.getOwnPropertySymbols(QQ);
        for (LQ = 0; LQ < oQ.length; LQ++) wQ = oQ[LQ], FQ.indexOf(wQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, wQ) && (qQ[wQ] = QQ[wQ])
      }
      return qQ
    }

    function NQ(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function TQ(QQ) {
      for (var FQ = 1; FQ < arguments.length; FQ++) {
        var wQ = null != arguments[FQ] ? arguments[FQ] : {};
        FQ % 2 ? NQ(Object(wQ), !0).forEach((function(FQ) {
          KQ(QQ, FQ, wQ[FQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : NQ(Object(wQ)).forEach((function(FQ) {
          Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
        }))
      }
      return QQ
    }

    function KQ(QQ, FQ, wQ) {
      return (FQ = function(QQ) {
        var FQ = function(QQ, FQ) {
          if ("object" != IQ(QQ) || !QQ) return QQ;
          var wQ = QQ[Symbol.toPrimitive];
          if (void 0 !== wQ) {
            var LQ = wQ.call(QQ, FQ || "default");
            if ("object" != IQ(LQ)) return LQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === FQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == IQ(FQ) ? FQ : FQ + ""
      }(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }

    function zQ(QQ, FQ) {
      return TQ(TQ({}, FQ), QQ)
    }

    function lQ(QQ) {
      var FQ = QQ.shapeType,
        wQ = QQ.elementProps;
      switch (FQ) {
        case "rectangle":
          return LQ.createElement(bQ.d, wQ);
        case "trapezoid":
          return LQ.createElement(WQ, wQ);
        case "sector":
          return LQ.createElement(RQ.e, wQ);
        case "symbols":
          if (function(QQ) {
              return "symbols" === QQ
            }(FQ)) return LQ.createElement(sQ.b, wQ);
          break;
        default:
          return null
      }
    }

    function jQ(QQ) {
      var FQ, wQ = QQ.option,
        qQ = QQ.shapeType,
        DQ = QQ.propTransformer,
        vQ = void 0 === DQ ? zQ : DQ,
        uQ = QQ.activeClassName,
        HQ = void 0 === uQ ? "recharts-active-shape" : uQ,
        bQ = QQ.isActive,
        YQ = UQ(QQ, rQ);
      if ((0, LQ.isValidElement)(wQ)) FQ = (0, LQ.cloneElement)(wQ, TQ(TQ({}, YQ), function(QQ) {
        return (0, LQ.isValidElement)(QQ) ? QQ.props : QQ
      }(wQ)));
      else if (oQ()(wQ)) FQ = wQ(YQ);
      else if (kQ()(wQ) && !mQ()(wQ)) {
        var xQ = vQ(wQ, YQ);
        FQ = LQ.createElement(lQ, {
          shapeType: qQ,
          elementProps: xQ
        })
      } else {
        var AQ = YQ;
        FQ = LQ.createElement(lQ, {
          shapeType: qQ,
          elementProps: AQ
        })
      }
      return bQ ? LQ.createElement(OQ.e, {
        className: HQ
      }, FQ) : FQ
    }

    function aQ(QQ, FQ) {
      return null != FQ && "trapezoids" in QQ.props
    }

    function XQ(QQ, FQ) {
      return null != FQ && "sectors" in QQ.props
    }

    function fQ(QQ, FQ) {
      return null != FQ && "points" in QQ.props
    }

    function VQ(QQ, FQ) {
      var wQ, LQ, qQ = QQ.x === (null === FQ || void 0 === FQ || null === (wQ = FQ.labelViewBox) || void 0 === wQ ? void 0 : wQ.x) || QQ.x === FQ.x,
        oQ = QQ.y === (null === FQ || void 0 === FQ || null === (LQ = FQ.labelViewBox) || void 0 === LQ ? void 0 : LQ.y) || QQ.y === FQ.y;
      return qQ && oQ
    }

    function hQ(QQ, FQ) {
      var wQ = QQ.endAngle === FQ.endAngle,
        LQ = QQ.startAngle === FQ.startAngle;
      return wQ && LQ
    }

    function JQ(QQ, FQ) {
      var wQ = QQ.x === FQ.x,
        LQ = QQ.y === FQ.y,
        qQ = QQ.z === FQ.z;
      return wQ && LQ && qQ
    }

    function EQ(QQ) {
      var FQ = QQ.activeTooltipItem,
        wQ = QQ.graphicalItem,
        LQ = QQ.itemData,
        qQ = function(QQ, FQ) {
          var wQ;
          return aQ(QQ, FQ) ? wQ = "trapezoids" : XQ(QQ, FQ) ? wQ = "sectors" : fQ(QQ, FQ) && (wQ = "points"), wQ
        }(wQ, FQ),
        oQ = function(QQ, FQ) {
          var wQ, LQ;
          return aQ(QQ, FQ) ? null === (wQ = FQ.tooltipPayload) || void 0 === wQ || null === (wQ = wQ[0]) || void 0 === wQ || null === (wQ = wQ.payload) || void 0 === wQ ? void 0 : wQ.payload : XQ(QQ, FQ) ? null === (LQ = FQ.tooltipPayload) || void 0 === LQ || null === (LQ = LQ[0]) || void 0 === LQ || null === (LQ = LQ.payload) || void 0 === LQ ? void 0 : LQ.payload : fQ(QQ, FQ) ? FQ.payload : {}
        }(wQ, FQ),
        DQ = LQ.filter((function(QQ, LQ) {
          var DQ = HQ()(oQ, QQ),
            kQ = wQ.props[qQ].filter((function(QQ) {
              var LQ = function(QQ, FQ) {
                var wQ;
                return aQ(QQ, FQ) ? wQ = VQ : XQ(QQ, FQ) ? wQ = hQ : fQ(QQ, FQ) && (wQ = JQ), wQ
              }(wQ, FQ);
              return LQ(QQ, FQ)
            })),
            vQ = wQ.props[qQ].indexOf(kQ[kQ.length - 1]);
          return DQ && LQ === vQ
        }));
      return LQ.indexOf(DQ[DQ.length - 1])
    }
  },
  6066: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => cQ,
      g: () => eQ,
      i: () => CQ,
      j: () => GQ,
      m: () => MQ
    });
    var LQ = wQ(6073),
      qQ = wQ.n(LQ),
      oQ = wQ(6082),
      DQ = wQ.n(oQ),
      kQ = wQ(5974),
      vQ = wQ(5252),
      mQ = wQ(5002),
      uQ = wQ(6101);

    function HQ(QQ) {
      return HQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, HQ(QQ)
    }

    function bQ(QQ, FQ) {
      for (var wQ = 0; wQ < FQ.length; wQ++) {
        var LQ = FQ[wQ];
        LQ.enumerable = LQ.enumerable || !1, LQ.configurable = !0, "value" in LQ && (LQ.writable = !0), Object.defineProperty(QQ, tQ(LQ.key), LQ)
      }
    }

    function YQ(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function xQ(QQ) {
      for (var FQ = 1; FQ < arguments.length; FQ++) {
        var wQ = null != arguments[FQ] ? arguments[FQ] : {};
        FQ % 2 ? YQ(Object(wQ), !0).forEach((function(FQ) {
          AQ(QQ, FQ, wQ[FQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : YQ(Object(wQ)).forEach((function(FQ) {
          Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
        }))
      }
      return QQ
    }

    function AQ(QQ, FQ, wQ) {
      return (FQ = tQ(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }

    function tQ(QQ) {
      var FQ = function(QQ, FQ) {
        if ("object" != HQ(QQ) || !QQ) return QQ;
        var wQ = QQ[Symbol.toPrimitive];
        if (void 0 !== wQ) {
          var LQ = wQ.call(QQ, FQ || "default");
          if ("object" != HQ(LQ)) return LQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === FQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == HQ(FQ) ? FQ : FQ + ""
    }
    var eQ = function(QQ, FQ, wQ, LQ, qQ) {
        var oQ = QQ.width,
          DQ = QQ.height,
          HQ = QQ.layout,
          bQ = QQ.children,
          YQ = Object.keys(FQ),
          tQ = {
            left: wQ.left,
            leftMirror: wQ.left,
            right: oQ - wQ.right,
            rightMirror: oQ - wQ.right,
            top: wQ.top,
            topMirror: wQ.top,
            bottom: DQ - wQ.bottom,
            bottomMirror: DQ - wQ.bottom
          },
          eQ = !!(0, vQ.l)(bQ, uQ.c);
        return YQ.reduce((function(oQ, DQ) {
          var vQ, uQ, bQ, YQ, MQ, GQ = FQ[DQ],
            pQ = GQ.orientation,
            cQ = GQ.domain,
            CQ = GQ.padding,
            SQ = void 0 === CQ ? {} : CQ,
            iQ = GQ.mirror,
            WQ = GQ.reversed,
            RQ = "".concat(pQ).concat(iQ ? "Mirror" : "");
          if ("number" === GQ.type && ("gap" === GQ.padding || "no-gap" === GQ.padding)) {
            var OQ = cQ[1] - cQ[0],
              sQ = 1 / 0,
              rQ = GQ.categoricalDomain.sort(mQ.b);
            if (rQ.forEach((function(QQ, FQ) {
                FQ > 0 && (sQ = Math.min((QQ || 0) - (rQ[FQ - 1] || 0), sQ))
              })), Number.isFinite(sQ)) {
              var IQ = sQ / OQ,
                UQ = "vertical" === GQ.layout ? wQ.height : wQ.width;
              if ("gap" === GQ.padding && (vQ = IQ * UQ / 2), "no-gap" === GQ.padding) {
                var NQ = (0, mQ.k)(QQ.barCategoryGap, IQ * UQ),
                  TQ = IQ * UQ / 2;
                vQ = TQ - NQ - (TQ - NQ) / UQ * NQ
              }
            }
          }
          uQ = "xAxis" === LQ ? [wQ.left + (SQ.left || 0) + (vQ || 0), wQ.left + wQ.width - (SQ.right || 0) - (vQ || 0)] : "yAxis" === LQ ? "horizontal" === HQ ? [wQ.top + wQ.height - (SQ.bottom || 0), wQ.top + (SQ.top || 0)] : [wQ.top + (SQ.top || 0) + (vQ || 0), wQ.top + wQ.height - (SQ.bottom || 0) - (vQ || 0)] : GQ.range, WQ && (uQ = [uQ[1], uQ[0]]);
          var KQ = (0, kQ.hb)(GQ, qQ, eQ),
            zQ = KQ.scale,
            lQ = KQ.realScaleType;
          zQ.domain(cQ).range(uQ), (0, kQ.h)(zQ);
          var jQ = (0, kQ.Y)(zQ, xQ(xQ({}, GQ), {}, {
            realScaleType: lQ
          }));
          "xAxis" === LQ ? (MQ = "top" === pQ && !iQ || "bottom" === pQ && iQ, bQ = wQ.left, YQ = tQ[RQ] - MQ * GQ.height) : "yAxis" === LQ && (MQ = "left" === pQ && !iQ || "right" === pQ && iQ, bQ = tQ[RQ] - MQ * GQ.width, YQ = wQ.top);
          var aQ = xQ(xQ(xQ({}, GQ), jQ), {}, {
            realScaleType: lQ,
            x: bQ,
            y: YQ,
            scale: zQ,
            width: "xAxis" === LQ ? wQ.width : GQ.width,
            height: "yAxis" === LQ ? wQ.height : GQ.height
          });
          return aQ.bandSize = (0, kQ.q)(aQ, jQ), GQ.hide || "xAxis" !== LQ ? GQ.hide || (tQ[RQ] += (MQ ? -1 : 1) * aQ.width) : tQ[RQ] += (MQ ? -1 : 1) * aQ.height, xQ(xQ({}, oQ), {}, AQ({}, DQ, aQ))
        }), {})
      },
      MQ = function(QQ, FQ) {
        var wQ = QQ.x,
          LQ = QQ.y,
          qQ = FQ.x,
          oQ = FQ.y;
        return {
          x: Math.min(wQ, qQ),
          y: Math.min(LQ, oQ),
          width: Math.abs(qQ - wQ),
          height: Math.abs(oQ - LQ)
        }
      },
      GQ = function(QQ) {
        var FQ = QQ.x1,
          wQ = QQ.y1,
          LQ = QQ.x2,
          qQ = QQ.y2;
        return MQ({
          x: FQ,
          y: wQ
        }, {
          x: LQ,
          y: qQ
        })
      },
      pQ = function() {
        function QQ(FQ) {
          ! function(QQ, FQ) {
            if (!(QQ instanceof FQ)) throw new TypeError("Cannot call a class as a function")
          }(this, QQ), this.scale = FQ
        }
        return FQ = QQ, wQ = [{
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
            var FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              wQ = FQ.bandAware,
              LQ = FQ.position;
            if (void 0 !== QQ) {
              if (LQ) switch (LQ) {
                case "start":
                default:
                  return this.scale(QQ);
                case "middle":
                  var qQ = this.bandwidth ? this.bandwidth() / 2 : 0;
                  return this.scale(QQ) + qQ;
                case "end":
                  var oQ = this.bandwidth ? this.bandwidth() : 0;
                  return this.scale(QQ) + oQ
              }
              if (wQ) {
                var DQ = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(QQ) + DQ
              }
              return this.scale(QQ)
            }
          }
        }, {
          key: "isInRange",
          value: function(QQ) {
            var FQ = this.range(),
              wQ = FQ[0],
              LQ = FQ[FQ.length - 1];
            return wQ <= LQ ? QQ >= wQ && QQ <= LQ : QQ >= LQ && QQ <= wQ
          }
        }], LQ = [{
          key: "create",
          value: function(FQ) {
            return new QQ(FQ)
          }
        }], wQ && bQ(FQ.prototype, wQ), LQ && bQ(FQ, LQ), Object.defineProperty(FQ, "prototype", {
          writable: !1
        }), FQ;
        var FQ, wQ, LQ
      }();
    AQ(pQ, "EPS", 1e-4);
    var cQ = function(QQ) {
      var FQ = Object.keys(QQ).reduce((function(FQ, wQ) {
        return xQ(xQ({}, FQ), {}, AQ({}, wQ, pQ.create(QQ[wQ])))
      }), {});
      return xQ(xQ({}, FQ), {}, {
        apply: function(QQ) {
          var wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            LQ = wQ.bandAware,
            oQ = wQ.position;
          return qQ()(QQ, (function(QQ, wQ) {
            return FQ[wQ].apply(QQ, {
              bandAware: LQ,
              position: oQ
            })
          }))
        },
        isInRange: function(QQ) {
          return DQ()(QQ, (function(QQ, wQ) {
            return FQ[wQ].isInRange(QQ)
          }))
        }
      })
    };
    var CQ = function(QQ) {
      var FQ = QQ.width,
        wQ = QQ.height,
        LQ = function(QQ) {
          return (QQ % 180 + 180) % 180
        }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0),
        qQ = LQ * Math.PI / 180,
        oQ = Math.atan(wQ / FQ),
        DQ = qQ > oQ && qQ < Math.PI - oQ ? wQ / Math.sin(qQ) : FQ / Math.cos(qQ);
      return Math.abs(DQ)
    }
  },
  5974: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => KD,
      e: () => ID,
      h: () => nD,
      l: () => hD,
      m: () => gD,
      q: () => mk,
      u: () => TD,
      x: () => ND,
      z: () => wk,
      B: () => Fk,
      C: () => Qk,
      D: () => XD,
      G: () => rD,
      K: () => jD,
      M: () => qk,
      P: () => UD,
      Q: () => BD,
      R: () => Lk,
      U: () => fD,
      Y: () => dD,
      _: () => Hk,
      $: () => sD,
      bb: () => aD,
      eb: () => uk,
      fb: () => lD,
      hb: () => JD,
      ib: () => vk,
      kb: () => PD
    });
    var LQ = {};
    wQ.r(LQ), wQ.d(LQ, {
      scaleBand: () => qQ.d,
      scaleDiverging: () => mo,
      scaleDivergingLog: () => uo,
      scaleDivergingPow: () => bo,
      scaleDivergingSqrt: () => Yo,
      scaleDivergingSymlog: () => Ho,
      scaleIdentity: () => PF,
      scaleImplicit: () => mw.i,
      scaleLinear: () => gF,
      scaleLog: () => qw,
      scaleOrdinal: () => mw.e,
      scalePoint: () => qQ.e,
      scalePow: () => xw,
      scaleQuantile: () => Ow,
      scaleQuantize: () => sw,
      scaleRadial: () => ew,
      scaleSequential: () => wo,
      scaleSequentialLog: () => Lo,
      scaleSequentialPow: () => oo,
      scaleSequentialQuantile: () => ko,
      scaleSequentialSqrt: () => Do,
      scaleSequentialSymlog: () => qo,
      scaleSqrt: () => Aw,
      scaleSymlog: () => vw,
      scaleThreshold: () => rw,
      scaleTime: () => Bq,
      scaleUtc: () => dq,
      tickFormat: () => EF
    });
    var qQ = wQ(5982);
    const oQ = Math.sqrt(50),
      DQ = Math.sqrt(10),
      kQ = Math.sqrt(2);

    function vQ(QQ, FQ, wQ) {
      const LQ = (FQ - QQ) / Math.max(0, wQ),
        qQ = Math.floor(Math.log10(LQ)),
        mQ = LQ / Math.pow(10, qQ),
        uQ = mQ >= oQ ? 10 : mQ >= DQ ? 5 : mQ >= kQ ? 2 : 1;
      let HQ, bQ, YQ;
      return qQ < 0 ? (YQ = Math.pow(10, -qQ) / uQ, HQ = Math.round(QQ * YQ), bQ = Math.round(FQ * YQ), HQ / YQ < QQ && ++HQ, bQ / YQ > FQ && --bQ, YQ = -YQ) : (YQ = Math.pow(10, qQ) * uQ, HQ = Math.round(QQ / YQ), bQ = Math.round(FQ / YQ), HQ * YQ < QQ && ++HQ, bQ * YQ > FQ && --bQ), bQ < HQ && .5 <= wQ && wQ < 2 ? vQ(QQ, FQ, 2 * wQ) : [HQ, bQ, YQ]
    }

    function mQ(QQ, FQ, wQ) {
      if (!((wQ = +wQ) > 0)) return [];
      if ((QQ = +QQ) === (FQ = +FQ)) return [QQ];
      const LQ = FQ < QQ,
        [qQ, oQ, DQ] = LQ ? vQ(FQ, QQ, wQ) : vQ(QQ, FQ, wQ);
      if (!(oQ >= qQ)) return [];
      const kQ = oQ - qQ + 1,
        mQ = new Array(kQ);
      if (LQ)
        if (DQ < 0)
          for (let vQ = 0; vQ < kQ; ++vQ) mQ[vQ] = (oQ - vQ) / -DQ;
        else
          for (let vQ = 0; vQ < kQ; ++vQ) mQ[vQ] = (oQ - vQ) * DQ;
      else if (DQ < 0)
        for (let vQ = 0; vQ < kQ; ++vQ) mQ[vQ] = (qQ + vQ) / -DQ;
      else
        for (let vQ = 0; vQ < kQ; ++vQ) mQ[vQ] = (qQ + vQ) * DQ;
      return mQ
    }

    function uQ(QQ, FQ, wQ) {
      return vQ(QQ = +QQ, FQ = +FQ, wQ = +wQ)[2]
    }

    function HQ(QQ, FQ, wQ) {
      wQ = +wQ;
      const LQ = (FQ = +FQ) < (QQ = +QQ),
        qQ = LQ ? uQ(FQ, QQ, wQ) : uQ(QQ, FQ, wQ);
      return (LQ ? -1 : 1) * (qQ < 0 ? 1 / -qQ : qQ)
    }

    function bQ(QQ, FQ) {
      return null == QQ || null == FQ ? NaN : QQ < FQ ? -1 : QQ > FQ ? 1 : QQ >= FQ ? 0 : NaN
    }

    function YQ(QQ, FQ) {
      return null == QQ || null == FQ ? NaN : FQ < QQ ? -1 : FQ > QQ ? 1 : FQ >= QQ ? 0 : NaN
    }

    function xQ(QQ) {
      let FQ, wQ, LQ;

      function qQ(QQ, LQ) {
        let qQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          oQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : QQ.length;
        if (qQ < oQ) {
          if (0 !== FQ(LQ, LQ)) return oQ;
          do {
            const FQ = qQ + oQ >>> 1;
            wQ(QQ[FQ], LQ) < 0 ? qQ = FQ + 1 : oQ = FQ
          } while (qQ < oQ)
        }
        return qQ
      }
      return 2 !== QQ.length ? (FQ = bQ, wQ = (FQ, wQ) => bQ(QQ(FQ), wQ), LQ = (FQ, wQ) => QQ(FQ) - wQ) : (FQ = QQ === bQ || QQ === YQ ? QQ : AQ, wQ = QQ, LQ = QQ), {
        left: qQ,
        center: function(QQ, FQ) {
          let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          const oQ = qQ(QQ, FQ, wQ, (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : QQ.length) - 1);
          return oQ > wQ && LQ(QQ[oQ - 1], FQ) > -LQ(QQ[oQ], FQ) ? oQ - 1 : oQ
        },
        right: function(QQ, LQ) {
          let qQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            oQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : QQ.length;
          if (qQ < oQ) {
            if (0 !== FQ(LQ, LQ)) return oQ;
            do {
              const FQ = qQ + oQ >>> 1;
              wQ(QQ[FQ], LQ) <= 0 ? qQ = FQ + 1 : oQ = FQ
            } while (qQ < oQ)
          }
          return qQ
        }
      }
    }

    function AQ() {
      return 0
    }

    function tQ(QQ) {
      return null === QQ ? NaN : +QQ
    }
    const eQ = xQ(bQ),
      MQ = eQ.right,
      GQ = (eQ.left, xQ(tQ).center, MQ);

    function pQ(QQ, FQ, wQ) {
      QQ.prototype = FQ.prototype = wQ, wQ.constructor = QQ
    }

    function cQ(QQ, FQ) {
      var wQ = Object.create(QQ.prototype);
      for (var LQ in FQ) wQ[LQ] = FQ[LQ];
      return wQ
    }

    function CQ() {}
    var SQ = .7,
      iQ = 1 / SQ,
      WQ = "\\s*([+-]?\\d+)\\s*",
      RQ = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      OQ = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      sQ = /^#([0-9a-f]{3,8})$/,
      rQ = new RegExp(`^rgb\\(${WQ},${WQ},${WQ}\\)$`),
      IQ = new RegExp(`^rgb\\(${OQ},${OQ},${OQ}\\)$`),
      UQ = new RegExp(`^rgba\\(${WQ},${WQ},${WQ},${RQ}\\)$`),
      NQ = new RegExp(`^rgba\\(${OQ},${OQ},${OQ},${RQ}\\)$`),
      TQ = new RegExp(`^hsl\\(${RQ},${OQ},${OQ}\\)$`),
      KQ = new RegExp(`^hsla\\(${RQ},${OQ},${OQ},${RQ}\\)$`),
      zQ = {
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

    function lQ() {
      return this.rgb().formatHex()
    }

    function jQ() {
      return this.rgb().formatRgb()
    }

    function aQ(QQ) {
      var FQ, wQ;
      return QQ = (QQ + "").trim().toLowerCase(), (FQ = sQ.exec(QQ)) ? (wQ = FQ[1].length, FQ = parseInt(FQ[1], 16), 6 === wQ ? XQ(FQ) : 3 === wQ ? new hQ(FQ >> 8 & 15 | FQ >> 4 & 240, FQ >> 4 & 15 | 240 & FQ, (15 & FQ) << 4 | 15 & FQ, 1) : 8 === wQ ? fQ(FQ >> 24 & 255, FQ >> 16 & 255, FQ >> 8 & 255, (255 & FQ) / 255) : 4 === wQ ? fQ(FQ >> 12 & 15 | FQ >> 8 & 240, FQ >> 8 & 15 | FQ >> 4 & 240, FQ >> 4 & 15 | 240 & FQ, ((15 & FQ) << 4 | 15 & FQ) / 255) : null) : (FQ = rQ.exec(QQ)) ? new hQ(FQ[1], FQ[2], FQ[3], 1) : (FQ = IQ.exec(QQ)) ? new hQ(255 * FQ[1] / 100, 255 * FQ[2] / 100, 255 * FQ[3] / 100, 1) : (FQ = UQ.exec(QQ)) ? fQ(FQ[1], FQ[2], FQ[3], FQ[4]) : (FQ = NQ.exec(QQ)) ? fQ(255 * FQ[1] / 100, 255 * FQ[2] / 100, 255 * FQ[3] / 100, FQ[4]) : (FQ = TQ.exec(QQ)) ? ZQ(FQ[1], FQ[2] / 100, FQ[3] / 100, 1) : (FQ = KQ.exec(QQ)) ? ZQ(FQ[1], FQ[2] / 100, FQ[3] / 100, FQ[4]) : zQ.hasOwnProperty(QQ) ? XQ(zQ[QQ]) : "transparent" === QQ ? new hQ(NaN, NaN, NaN, 0) : null
    }

    function XQ(QQ) {
      return new hQ(QQ >> 16 & 255, QQ >> 8 & 255, 255 & QQ, 1)
    }

    function fQ(QQ, FQ, wQ, LQ) {
      return LQ <= 0 && (QQ = FQ = wQ = NaN), new hQ(QQ, FQ, wQ, LQ)
    }

    function VQ(QQ, FQ, wQ, LQ) {
      return 1 === arguments.length ? ((qQ = QQ) instanceof CQ || (qQ = aQ(qQ)), qQ ? new hQ((qQ = qQ.rgb()).r, qQ.g, qQ.b, qQ.opacity) : new hQ) : new hQ(QQ, FQ, wQ, null == LQ ? 1 : LQ);
      var qQ
    }

    function hQ(QQ, FQ, wQ, LQ) {
      this.r = +QQ, this.g = +FQ, this.b = +wQ, this.opacity = +LQ
    }

    function JQ() {
      return `#${PQ(this.r)}${PQ(this.g)}${PQ(this.b)}`
    }

    function EQ() {
      const QQ = nQ(this.opacity);
      return `${1===QQ?"rgb(":"rgba("}${gQ(this.r)}, ${gQ(this.g)}, ${gQ(this.b)}${1===QQ?")":`, ${QQ})`}`
    }

    function nQ(QQ) {
      return isNaN(QQ) ? 1 : Math.max(0, Math.min(1, QQ))
    }

    function gQ(QQ) {
      return Math.max(0, Math.min(255, Math.round(QQ) || 0))
    }

    function PQ(QQ) {
      return ((QQ = gQ(QQ)) < 16 ? "0" : "") + QQ.toString(16)
    }

    function ZQ(QQ, FQ, wQ, LQ) {
      return LQ <= 0 ? QQ = FQ = wQ = NaN : wQ <= 0 || wQ >= 1 ? QQ = FQ = NaN : FQ <= 0 && (QQ = NaN), new BQ(QQ, FQ, wQ, LQ)
    }

    function yQ(QQ) {
      if (QQ instanceof BQ) return new BQ(QQ.h, QQ.s, QQ.l, QQ.opacity);
      if (QQ instanceof CQ || (QQ = aQ(QQ)), !QQ) return new BQ;
      if (QQ instanceof BQ) return QQ;
      var FQ = (QQ = QQ.rgb()).r / 255,
        wQ = QQ.g / 255,
        LQ = QQ.b / 255,
        qQ = Math.min(FQ, wQ, LQ),
        oQ = Math.max(FQ, wQ, LQ),
        DQ = NaN,
        kQ = oQ - qQ,
        vQ = (oQ + qQ) / 2;
      return kQ ? (DQ = FQ === oQ ? (wQ - LQ) / kQ + 6 * (wQ < LQ) : wQ === oQ ? (LQ - FQ) / kQ + 2 : (FQ - wQ) / kQ + 4, kQ /= vQ < .5 ? oQ + qQ : 2 - oQ - qQ, DQ *= 60) : kQ = vQ > 0 && vQ < 1 ? 0 : DQ, new BQ(DQ, kQ, vQ, QQ.opacity)
    }

    function BQ(QQ, FQ, wQ, LQ) {
      this.h = +QQ, this.s = +FQ, this.l = +wQ, this.opacity = +LQ
    }

    function dQ(QQ) {
      return (QQ = (QQ || 0) % 360) < 0 ? QQ + 360 : QQ
    }

    function QF(QQ) {
      return Math.max(0, Math.min(1, QQ || 0))
    }

    function FF(QQ, FQ, wQ) {
      return 255 * (QQ < 60 ? FQ + (wQ - FQ) * QQ / 60 : QQ < 180 ? wQ : QQ < 240 ? FQ + (wQ - FQ) * (240 - QQ) / 60 : FQ)
    }

    function wF(QQ, FQ, wQ, LQ, qQ) {
      var oQ = QQ * QQ,
        DQ = oQ * QQ;
      return ((1 - 3 * QQ + 3 * oQ - DQ) * FQ + (4 - 6 * oQ + 3 * DQ) * wQ + (1 + 3 * QQ + 3 * oQ - 3 * DQ) * LQ + DQ * qQ) / 6
    }
    pQ(CQ, aQ, {
      copy(QQ) {
        return Object.assign(new this.constructor, this, QQ)
      },
      displayable() {
        return this.rgb().displayable()
      },
      hex: lQ,
      formatHex: lQ,
      formatHex8: function() {
        return this.rgb().formatHex8()
      },
      formatHsl: function() {
        return yQ(this).formatHsl()
      },
      formatRgb: jQ,
      toString: jQ
    }), pQ(hQ, VQ, cQ(CQ, {
      brighter(QQ) {
        return QQ = null == QQ ? iQ : Math.pow(iQ, QQ), new hQ(this.r * QQ, this.g * QQ, this.b * QQ, this.opacity)
      },
      darker(QQ) {
        return QQ = null == QQ ? SQ : Math.pow(SQ, QQ), new hQ(this.r * QQ, this.g * QQ, this.b * QQ, this.opacity)
      },
      rgb() {
        return this
      },
      clamp() {
        return new hQ(gQ(this.r), gQ(this.g), gQ(this.b), nQ(this.opacity))
      },
      displayable() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
      },
      hex: JQ,
      formatHex: JQ,
      formatHex8: function() {
        return `#${PQ(this.r)}${PQ(this.g)}${PQ(this.b)}${PQ(255*(isNaN(this.opacity)?1:this.opacity))}`
      },
      formatRgb: EQ,
      toString: EQ
    })), pQ(BQ, (function(QQ, FQ, wQ, LQ) {
      return 1 === arguments.length ? yQ(QQ) : new BQ(QQ, FQ, wQ, null == LQ ? 1 : LQ)
    }), cQ(CQ, {
      brighter(QQ) {
        return QQ = null == QQ ? iQ : Math.pow(iQ, QQ), new BQ(this.h, this.s, this.l * QQ, this.opacity)
      },
      darker(QQ) {
        return QQ = null == QQ ? SQ : Math.pow(SQ, QQ), new BQ(this.h, this.s, this.l * QQ, this.opacity)
      },
      rgb() {
        var QQ = this.h % 360 + 360 * (this.h < 0),
          FQ = isNaN(QQ) || isNaN(this.s) ? 0 : this.s,
          wQ = this.l,
          LQ = wQ + (wQ < .5 ? wQ : 1 - wQ) * FQ,
          qQ = 2 * wQ - LQ;
        return new hQ(FF(QQ >= 240 ? QQ - 240 : QQ + 120, qQ, LQ), FF(QQ, qQ, LQ), FF(QQ < 120 ? QQ + 240 : QQ - 120, qQ, LQ), this.opacity)
      },
      clamp() {
        return new BQ(dQ(this.h), QF(this.s), QF(this.l), nQ(this.opacity))
      },
      displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
      },
      formatHsl() {
        const QQ = nQ(this.opacity);
        return `${1===QQ?"hsl(":"hsla("}${dQ(this.h)}, ${100*QF(this.s)}%, ${100*QF(this.l)}%${1===QQ?")":`, ${QQ})`}`
      }
    }));
    const LF = QQ => () => QQ;

    function qF(QQ, FQ) {
      return function(wQ) {
        return QQ + wQ * FQ
      }
    }

    function oF(QQ) {
      return 1 === (QQ = +QQ) ? DF : function(FQ, wQ) {
        return wQ - FQ ? function(QQ, FQ, wQ) {
          return QQ = Math.pow(QQ, wQ), FQ = Math.pow(FQ, wQ) - QQ, wQ = 1 / wQ,
            function(LQ) {
              return Math.pow(QQ + LQ * FQ, wQ)
            }
        }(FQ, wQ, QQ) : LF(isNaN(FQ) ? wQ : FQ)
      }
    }

    function DF(QQ, FQ) {
      var wQ = FQ - QQ;
      return wQ ? qF(QQ, wQ) : LF(isNaN(QQ) ? FQ : QQ)
    }
    const kF = function QQ(FQ) {
      var wQ = oF(FQ);

      function LQ(QQ, FQ) {
        var LQ = wQ((QQ = VQ(QQ)).r, (FQ = VQ(FQ)).r),
          qQ = wQ(QQ.g, FQ.g),
          oQ = wQ(QQ.b, FQ.b),
          DQ = DF(QQ.opacity, FQ.opacity);
        return function(FQ) {
          return QQ.r = LQ(FQ), QQ.g = qQ(FQ), QQ.b = oQ(FQ), QQ.opacity = DQ(FQ), QQ + ""
        }
      }
      return LQ.gamma = QQ, LQ
    }(1);

    function vF(QQ) {
      return function(FQ) {
        var wQ, LQ, qQ = FQ.length,
          oQ = new Array(qQ),
          DQ = new Array(qQ),
          kQ = new Array(qQ);
        for (wQ = 0; wQ < qQ; ++wQ) LQ = VQ(FQ[wQ]), oQ[wQ] = LQ.r || 0, DQ[wQ] = LQ.g || 0, kQ[wQ] = LQ.b || 0;
        return oQ = QQ(oQ), DQ = QQ(DQ), kQ = QQ(kQ), LQ.opacity = 1,
          function(QQ) {
            return LQ.r = oQ(QQ), LQ.g = DQ(QQ), LQ.b = kQ(QQ), LQ + ""
          }
      }
    }
    vF((function(QQ) {
      var FQ = QQ.length - 1;
      return function(wQ) {
        var LQ = wQ <= 0 ? wQ = 0 : wQ >= 1 ? (wQ = 1, FQ - 1) : Math.floor(wQ * FQ),
          qQ = QQ[LQ],
          oQ = QQ[LQ + 1],
          DQ = LQ > 0 ? QQ[LQ - 1] : 2 * qQ - oQ,
          kQ = LQ < FQ - 1 ? QQ[LQ + 2] : 2 * oQ - qQ;
        return wF((wQ - LQ / FQ) * FQ, DQ, qQ, oQ, kQ)
      }
    })), vF((function(QQ) {
      var FQ = QQ.length;
      return function(wQ) {
        var LQ = Math.floor(((wQ %= 1) < 0 ? ++wQ : wQ) * FQ),
          qQ = QQ[(LQ + FQ - 1) % FQ],
          oQ = QQ[LQ % FQ],
          DQ = QQ[(LQ + 1) % FQ],
          kQ = QQ[(LQ + 2) % FQ];
        return wF((wQ - LQ / FQ) * FQ, qQ, oQ, DQ, kQ)
      }
    }));

    function mF(QQ, FQ) {
      var wQ, LQ = FQ ? FQ.length : 0,
        qQ = QQ ? Math.min(LQ, QQ.length) : 0,
        oQ = new Array(qQ),
        DQ = new Array(LQ);
      for (wQ = 0; wQ < qQ; ++wQ) oQ[wQ] = eF(QQ[wQ], FQ[wQ]);
      for (; wQ < LQ; ++wQ) DQ[wQ] = FQ[wQ];
      return function(QQ) {
        for (wQ = 0; wQ < qQ; ++wQ) DQ[wQ] = oQ[wQ](QQ);
        return DQ
      }
    }

    function uF(QQ, FQ) {
      var wQ = new Date;
      return QQ = +QQ, FQ = +FQ,
        function(LQ) {
          return wQ.setTime(QQ * (1 - LQ) + FQ * LQ), wQ
        }
    }

    function HF(QQ, FQ) {
      return QQ = +QQ, FQ = +FQ,
        function(wQ) {
          return QQ * (1 - wQ) + FQ * wQ
        }
    }

    function bF(QQ, FQ) {
      var wQ, LQ = {},
        qQ = {};
      for (wQ in null !== QQ && "object" === typeof QQ || (QQ = {}), null !== FQ && "object" === typeof FQ || (FQ = {}), FQ) wQ in QQ ? LQ[wQ] = eF(QQ[wQ], FQ[wQ]) : qQ[wQ] = FQ[wQ];
      return function(QQ) {
        for (wQ in LQ) qQ[wQ] = LQ[wQ](QQ);
        return qQ
      }
    }
    var YF = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      xF = new RegExp(YF.source, "g");

    function AF(QQ, FQ) {
      var wQ, LQ, qQ, oQ = YF.lastIndex = xF.lastIndex = 0,
        DQ = -1,
        kQ = [],
        vQ = [];
      for (QQ += "", FQ += "";
        (wQ = YF.exec(QQ)) && (LQ = xF.exec(FQ));)(qQ = LQ.index) > oQ && (qQ = FQ.slice(oQ, qQ), kQ[DQ] ? kQ[DQ] += qQ : kQ[++DQ] = qQ), (wQ = wQ[0]) === (LQ = LQ[0]) ? kQ[DQ] ? kQ[DQ] += LQ : kQ[++DQ] = LQ : (kQ[++DQ] = null, vQ.push({
        i: DQ,
        x: HF(wQ, LQ)
      })), oQ = xF.lastIndex;
      return oQ < FQ.length && (qQ = FQ.slice(oQ), kQ[DQ] ? kQ[DQ] += qQ : kQ[++DQ] = qQ), kQ.length < 2 ? vQ[0] ? function(QQ) {
        return function(FQ) {
          return QQ(FQ) + ""
        }
      }(vQ[0].x) : function(QQ) {
        return function() {
          return QQ
        }
      }(FQ) : (FQ = vQ.length, function(QQ) {
        for (var wQ, LQ = 0; LQ < FQ; ++LQ) kQ[(wQ = vQ[LQ]).i] = wQ.x(QQ);
        return kQ.join("")
      })
    }

    function tF(QQ, FQ) {
      FQ || (FQ = []);
      var wQ, LQ = QQ ? Math.min(FQ.length, QQ.length) : 0,
        qQ = FQ.slice();
      return function(oQ) {
        for (wQ = 0; wQ < LQ; ++wQ) qQ[wQ] = QQ[wQ] * (1 - oQ) + FQ[wQ] * oQ;
        return qQ
      }
    }

    function eF(QQ, FQ) {
      var wQ, LQ, qQ = typeof FQ;
      return null == FQ || "boolean" === qQ ? LF(FQ) : ("number" === qQ ? HF : "string" === qQ ? (wQ = aQ(FQ)) ? (FQ = wQ, kF) : AF : FQ instanceof aQ ? kF : FQ instanceof Date ? uF : (LQ = FQ, !ArrayBuffer.isView(LQ) || LQ instanceof DataView ? Array.isArray(FQ) ? mF : "function" !== typeof FQ.valueOf && "function" !== typeof FQ.toString || isNaN(FQ) ? bF : HF : tF))(QQ, FQ)
    }

    function MF(QQ, FQ) {
      return QQ = +QQ, FQ = +FQ,
        function(wQ) {
          return Math.round(QQ * (1 - wQ) + FQ * wQ)
        }
    }

    function GF(QQ) {
      return +QQ
    }
    var pF = [0, 1];

    function cF(QQ) {
      return QQ
    }

    function CF(QQ, FQ) {
      return (FQ -= QQ = +QQ) ? function(wQ) {
        return (wQ - QQ) / FQ
      } : (wQ = isNaN(FQ) ? NaN : .5, function() {
        return wQ
      });
      var wQ
    }

    function SF(QQ, FQ, wQ) {
      var LQ = QQ[0],
        qQ = QQ[1],
        oQ = FQ[0],
        DQ = FQ[1];
      return qQ < LQ ? (LQ = CF(qQ, LQ), oQ = wQ(DQ, oQ)) : (LQ = CF(LQ, qQ), oQ = wQ(oQ, DQ)),
        function(QQ) {
          return oQ(LQ(QQ))
        }
    }

    function iF(QQ, FQ, wQ) {
      var LQ = Math.min(QQ.length, FQ.length) - 1,
        qQ = new Array(LQ),
        oQ = new Array(LQ),
        DQ = -1;
      for (QQ[LQ] < QQ[0] && (QQ = QQ.slice().reverse(), FQ = FQ.slice().reverse()); ++DQ < LQ;) qQ[DQ] = CF(QQ[DQ], QQ[DQ + 1]), oQ[DQ] = wQ(FQ[DQ], FQ[DQ + 1]);
      return function(FQ) {
        var wQ = GQ(QQ, FQ, 1, LQ) - 1;
        return oQ[wQ](qQ[wQ](FQ))
      }
    }

    function WF(QQ, FQ) {
      return FQ.domain(QQ.domain()).range(QQ.range()).interpolate(QQ.interpolate()).clamp(QQ.clamp()).unknown(QQ.unknown())
    }

    function RF() {
      var QQ, FQ, wQ, LQ, qQ, oQ, DQ = pF,
        kQ = pF,
        vQ = eF,
        mQ = cF;

      function uQ() {
        var QQ = Math.min(DQ.length, kQ.length);
        return mQ !== cF && (mQ = function(QQ, FQ) {
          var wQ;
          return QQ > FQ && (wQ = QQ, QQ = FQ, FQ = wQ),
            function(wQ) {
              return Math.max(QQ, Math.min(FQ, wQ))
            }
        }(DQ[0], DQ[QQ - 1])), LQ = QQ > 2 ? iF : SF, qQ = oQ = null, HQ
      }

      function HQ(FQ) {
        return null == FQ || isNaN(FQ = +FQ) ? wQ : (qQ || (qQ = LQ(DQ.map(QQ), kQ, vQ)))(QQ(mQ(FQ)))
      }
      return HQ.invert = function(wQ) {
          return mQ(FQ((oQ || (oQ = LQ(kQ, DQ.map(QQ), HF)))(wQ)))
        }, HQ.domain = function(QQ) {
          return arguments.length ? (DQ = Array.from(QQ, GF), uQ()) : DQ.slice()
        }, HQ.range = function(QQ) {
          return arguments.length ? (kQ = Array.from(QQ), uQ()) : kQ.slice()
        }, HQ.rangeRound = function(QQ) {
          return kQ = Array.from(QQ), vQ = MF, uQ()
        }, HQ.clamp = function(QQ) {
          return arguments.length ? (mQ = !!QQ || cF, uQ()) : mQ !== cF
        }, HQ.interpolate = function(QQ) {
          return arguments.length ? (vQ = QQ, uQ()) : vQ
        }, HQ.unknown = function(QQ) {
          return arguments.length ? (wQ = QQ, HQ) : wQ
        },
        function(wQ, LQ) {
          return QQ = wQ, FQ = LQ, uQ()
        }
    }

    function OF() {
      return RF()(cF, cF)
    }
    var sF, rF = wQ(5986),
      IF = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function UF(QQ) {
      if (!(FQ = IF.exec(QQ))) throw new Error("invalid format: " + QQ);
      var FQ;
      return new NF({
        fill: FQ[1],
        align: FQ[2],
        sign: FQ[3],
        symbol: FQ[4],
        zero: FQ[5],
        width: FQ[6],
        comma: FQ[7],
        precision: FQ[8] && FQ[8].slice(1),
        trim: FQ[9],
        type: FQ[10]
      })
    }

    function NF(QQ) {
      this.fill = void 0 === QQ.fill ? " " : QQ.fill + "", this.align = void 0 === QQ.align ? ">" : QQ.align + "", this.sign = void 0 === QQ.sign ? "-" : QQ.sign + "", this.symbol = void 0 === QQ.symbol ? "" : QQ.symbol + "", this.zero = !!QQ.zero, this.width = void 0 === QQ.width ? void 0 : +QQ.width, this.comma = !!QQ.comma, this.precision = void 0 === QQ.precision ? void 0 : +QQ.precision, this.trim = !!QQ.trim, this.type = void 0 === QQ.type ? "" : QQ.type + ""
    }

    function TF(QQ, FQ) {
      if (!isFinite(QQ) || 0 === QQ) return null;
      var wQ = (QQ = FQ ? QQ.toExponential(FQ - 1) : QQ.toExponential()).indexOf("e"),
        LQ = QQ.slice(0, wQ);
      return [LQ.length > 1 ? LQ[0] + LQ.slice(2) : LQ, +QQ.slice(wQ + 1)]
    }

    function KF(QQ) {
      return (QQ = TF(Math.abs(QQ))) ? QQ[1] : NaN
    }

    function zF(QQ, FQ) {
      var wQ = TF(QQ, FQ);
      if (!wQ) return QQ + "";
      var LQ = wQ[0],
        qQ = wQ[1];
      return qQ < 0 ? "0." + new Array(-qQ).join("0") + LQ : LQ.length > qQ + 1 ? LQ.slice(0, qQ + 1) + "." + LQ.slice(qQ + 1) : LQ + new Array(qQ - LQ.length + 2).join("0")
    }
    UF.prototype = NF.prototype, NF.prototype.toString = function() {
      return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
    };
    const lF = {
      "%": (QQ, FQ) => (100 * QQ).toFixed(FQ),
      b: QQ => Math.round(QQ).toString(2),
      c: QQ => QQ + "",
      d: function(QQ) {
        return Math.abs(QQ = Math.round(QQ)) >= 1e21 ? QQ.toLocaleString("en").replace(/,/g, "") : QQ.toString(10)
      },
      e: (QQ, FQ) => QQ.toExponential(FQ),
      f: (QQ, FQ) => QQ.toFixed(FQ),
      g: (QQ, FQ) => QQ.toPrecision(FQ),
      o: QQ => Math.round(QQ).toString(8),
      p: (QQ, FQ) => zF(100 * QQ, FQ),
      r: zF,
      s: function(QQ, FQ) {
        var wQ = TF(QQ, FQ);
        if (!wQ) return sF = void 0, QQ.toPrecision(FQ);
        var LQ = wQ[0],
          qQ = wQ[1],
          oQ = qQ - (sF = 3 * Math.max(-8, Math.min(8, Math.floor(qQ / 3)))) + 1,
          DQ = LQ.length;
        return oQ === DQ ? LQ : oQ > DQ ? LQ + new Array(oQ - DQ + 1).join("0") : oQ > 0 ? LQ.slice(0, oQ) + "." + LQ.slice(oQ) : "0." + new Array(1 - oQ).join("0") + TF(QQ, Math.max(0, FQ + oQ - 1))[0]
      },
      X: QQ => Math.round(QQ).toString(16).toUpperCase(),
      x: QQ => Math.round(QQ).toString(16)
    };

    function jF(QQ) {
      return QQ
    }
    var aF, XF, fF, VF = Array.prototype.map,
      hF = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

    function JF(QQ) {
      var FQ, wQ, LQ = void 0 === QQ.grouping || void 0 === QQ.thousands ? jF : (FQ = VF.call(QQ.grouping, Number), wQ = QQ.thousands + "", function(QQ, LQ) {
          for (var qQ = QQ.length, oQ = [], DQ = 0, kQ = FQ[0], vQ = 0; qQ > 0 && kQ > 0 && (vQ + kQ + 1 > LQ && (kQ = Math.max(1, LQ - vQ)), oQ.push(QQ.substring(qQ -= kQ, qQ + kQ)), !((vQ += kQ + 1) > LQ));) kQ = FQ[DQ = (DQ + 1) % FQ.length];
          return oQ.reverse().join(wQ)
        }),
        qQ = void 0 === QQ.currency ? "" : QQ.currency[0] + "",
        oQ = void 0 === QQ.currency ? "" : QQ.currency[1] + "",
        DQ = void 0 === QQ.decimal ? "." : QQ.decimal + "",
        kQ = void 0 === QQ.numerals ? jF : function(QQ) {
          return function(FQ) {
            return FQ.replace(/[0-9]/g, (function(FQ) {
              return QQ[+FQ]
            }))
          }
        }(VF.call(QQ.numerals, String)),
        vQ = void 0 === QQ.percent ? "%" : QQ.percent + "",
        mQ = void 0 === QQ.minus ? "\u2212" : QQ.minus + "",
        uQ = void 0 === QQ.nan ? "NaN" : QQ.nan + "";

      function HQ(QQ, FQ) {
        var wQ = (QQ = UF(QQ)).fill,
          HQ = QQ.align,
          bQ = QQ.sign,
          YQ = QQ.symbol,
          xQ = QQ.zero,
          AQ = QQ.width,
          tQ = QQ.comma,
          eQ = QQ.precision,
          MQ = QQ.trim,
          GQ = QQ.type;
        "n" === GQ ? (tQ = !0, GQ = "g") : lF[GQ] || (void 0 === eQ && (eQ = 12), MQ = !0, GQ = "g"), (xQ || "0" === wQ && "=" === HQ) && (xQ = !0, wQ = "0", HQ = "=");
        var pQ = (FQ && void 0 !== FQ.prefix ? FQ.prefix : "") + ("$" === YQ ? qQ : "#" === YQ && /[boxX]/.test(GQ) ? "0" + GQ.toLowerCase() : ""),
          cQ = ("$" === YQ ? oQ : /[%p]/.test(GQ) ? vQ : "") + (FQ && void 0 !== FQ.suffix ? FQ.suffix : ""),
          CQ = lF[GQ],
          SQ = /[defgprs%]/.test(GQ);

        function iQ(QQ) {
          var FQ, qQ, oQ, vQ = pQ,
            YQ = cQ;
          if ("c" === GQ) YQ = CQ(QQ) + YQ, QQ = "";
          else {
            var iQ = (QQ = +QQ) < 0 || 1 / QQ < 0;
            if (QQ = isNaN(QQ) ? uQ : CQ(Math.abs(QQ), eQ), MQ && (QQ = function(QQ) {
                QQ: for (var FQ, wQ = QQ.length, LQ = 1, qQ = -1; LQ < wQ; ++LQ) switch (QQ[LQ]) {
                  case ".":
                    qQ = FQ = LQ;
                    break;
                  case "0":
                    0 === qQ && (qQ = LQ), FQ = LQ;
                    break;
                  default:
                    if (!+QQ[LQ]) break QQ;
                    qQ > 0 && (qQ = 0)
                }
                return qQ > 0 ? QQ.slice(0, qQ) + QQ.slice(FQ + 1) : QQ
              }(QQ)), iQ && 0 === +QQ && "+" !== bQ && (iQ = !1), vQ = (iQ ? "(" === bQ ? bQ : mQ : "-" === bQ || "(" === bQ ? "" : bQ) + vQ, YQ = ("s" !== GQ || isNaN(QQ) || void 0 === sF ? "" : hF[8 + sF / 3]) + YQ + (iQ && "(" === bQ ? ")" : ""), SQ)
              for (FQ = -1, qQ = QQ.length; ++FQ < qQ;)
                if (48 > (oQ = QQ.charCodeAt(FQ)) || oQ > 57) {
                  YQ = (46 === oQ ? DQ + QQ.slice(FQ + 1) : QQ.slice(FQ)) + YQ, QQ = QQ.slice(0, FQ);
                  break
                }
          }
          tQ && !xQ && (QQ = LQ(QQ, 1 / 0));
          var WQ = vQ.length + QQ.length + YQ.length,
            RQ = WQ < AQ ? new Array(AQ - WQ + 1).join(wQ) : "";
          switch (tQ && xQ && (QQ = LQ(RQ + QQ, RQ.length ? AQ - YQ.length : 1 / 0), RQ = ""), HQ) {
            case "<":
              QQ = vQ + QQ + YQ + RQ;
              break;
            case "=":
              QQ = vQ + RQ + QQ + YQ;
              break;
            case "^":
              QQ = RQ.slice(0, WQ = RQ.length >> 1) + vQ + QQ + YQ + RQ.slice(WQ);
              break;
            default:
              QQ = RQ + vQ + QQ + YQ
          }
          return kQ(QQ)
        }
        return eQ = void 0 === eQ ? 6 : /[gprs]/.test(GQ) ? Math.max(1, Math.min(21, eQ)) : Math.max(0, Math.min(20, eQ)), iQ.toString = function() {
          return QQ + ""
        }, iQ
      }
      return {
        format: HQ,
        formatPrefix: function(QQ, FQ) {
          var wQ = 3 * Math.max(-8, Math.min(8, Math.floor(KF(FQ) / 3))),
            LQ = Math.pow(10, -wQ),
            qQ = HQ(((QQ = UF(QQ)).type = "f", QQ), {
              suffix: hF[8 + wQ / 3]
            });
          return function(QQ) {
            return qQ(LQ * QQ)
          }
        }
      }
    }

    function EF(QQ, FQ, wQ, LQ) {
      var qQ, oQ = HQ(QQ, FQ, wQ);
      switch ((LQ = UF(null == LQ ? ",f" : LQ)).type) {
        case "s":
          var DQ = Math.max(Math.abs(QQ), Math.abs(FQ));
          return null != LQ.precision || isNaN(qQ = function(QQ, FQ) {
            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(KF(FQ) / 3))) - KF(Math.abs(QQ)))
          }(oQ, DQ)) || (LQ.precision = qQ), fF(LQ, DQ);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != LQ.precision || isNaN(qQ = function(QQ, FQ) {
            return QQ = Math.abs(QQ), FQ = Math.abs(FQ) - QQ, Math.max(0, KF(FQ) - KF(QQ)) + 1
          }(oQ, Math.max(Math.abs(QQ), Math.abs(FQ)))) || (LQ.precision = qQ - ("e" === LQ.type));
          break;
        case "f":
        case "%":
          null != LQ.precision || isNaN(qQ = function(QQ) {
            return Math.max(0, -KF(Math.abs(QQ)))
          }(oQ)) || (LQ.precision = qQ - 2 * ("%" === LQ.type))
      }
      return XF(LQ)
    }

    function nF(QQ) {
      var FQ = QQ.domain;
      return QQ.ticks = function(QQ) {
        var wQ = FQ();
        return mQ(wQ[0], wQ[wQ.length - 1], null == QQ ? 10 : QQ)
      }, QQ.tickFormat = function(QQ, wQ) {
        var LQ = FQ();
        return EF(LQ[0], LQ[LQ.length - 1], null == QQ ? 10 : QQ, wQ)
      }, QQ.nice = function(wQ) {
        null == wQ && (wQ = 10);
        var LQ, qQ, oQ = FQ(),
          DQ = 0,
          kQ = oQ.length - 1,
          vQ = oQ[DQ],
          mQ = oQ[kQ],
          HQ = 10;
        for (mQ < vQ && (qQ = vQ, vQ = mQ, mQ = qQ, qQ = DQ, DQ = kQ, kQ = qQ); HQ-- > 0;) {
          if ((qQ = uQ(vQ, mQ, wQ)) === LQ) return oQ[DQ] = vQ, oQ[kQ] = mQ, FQ(oQ);
          if (qQ > 0) vQ = Math.floor(vQ / qQ) * qQ, mQ = Math.ceil(mQ / qQ) * qQ;
          else {
            if (!(qQ < 0)) break;
            vQ = Math.ceil(vQ * qQ) / qQ, mQ = Math.floor(mQ * qQ) / qQ
          }
          LQ = qQ
        }
        return QQ
      }, QQ
    }

    function gF() {
      var QQ = OF();
      return QQ.copy = function() {
        return WF(QQ, gF())
      }, rF.h.apply(QQ, arguments), nF(QQ)
    }

    function PF(QQ) {
      var FQ;

      function wQ(QQ) {
        return null == QQ || isNaN(QQ = +QQ) ? FQ : QQ
      }
      return wQ.invert = wQ, wQ.domain = wQ.range = function(FQ) {
        return arguments.length ? (QQ = Array.from(FQ, GF), wQ) : QQ.slice()
      }, wQ.unknown = function(QQ) {
        return arguments.length ? (FQ = QQ, wQ) : FQ
      }, wQ.copy = function() {
        return PF(QQ).unknown(FQ)
      }, QQ = arguments.length ? Array.from(QQ, GF) : [0, 1], nF(wQ)
    }

    function ZF(QQ, FQ) {
      var wQ, LQ = 0,
        qQ = (QQ = QQ.slice()).length - 1,
        oQ = QQ[LQ],
        DQ = QQ[qQ];
      return DQ < oQ && (wQ = LQ, LQ = qQ, qQ = wQ, wQ = oQ, oQ = DQ, DQ = wQ), QQ[LQ] = FQ.floor(oQ), QQ[qQ] = FQ.ceil(DQ), QQ
    }

    function yF(QQ) {
      return Math.log(QQ)
    }

    function BF(QQ) {
      return Math.exp(QQ)
    }

    function dF(QQ) {
      return -Math.log(-QQ)
    }

    function Qw(QQ) {
      return -Math.exp(-QQ)
    }

    function Fw(QQ) {
      return isFinite(QQ) ? +("1e" + QQ) : QQ < 0 ? 0 : QQ
    }

    function ww(QQ) {
      return (FQ, wQ) => -QQ(-FQ, wQ)
    }

    function Lw(QQ) {
      const FQ = QQ(yF, BF),
        wQ = FQ.domain;
      let LQ, qQ, oQ = 10;

      function DQ() {
        return LQ = function(QQ) {
          return QQ === Math.E ? Math.log : 10 === QQ && Math.log10 || 2 === QQ && Math.log2 || (QQ = Math.log(QQ), FQ => Math.log(FQ) / QQ)
        }(oQ), qQ = function(QQ) {
          return 10 === QQ ? Fw : QQ === Math.E ? Math.exp : FQ => Math.pow(QQ, FQ)
        }(oQ), wQ()[0] < 0 ? (LQ = ww(LQ), qQ = ww(qQ), QQ(dF, Qw)) : QQ(yF, BF), FQ
      }
      return FQ.base = function(QQ) {
        return arguments.length ? (oQ = +QQ, DQ()) : oQ
      }, FQ.domain = function(QQ) {
        return arguments.length ? (wQ(QQ), DQ()) : wQ()
      }, FQ.ticks = QQ => {
        const FQ = wQ();
        let DQ = FQ[0],
          kQ = FQ[FQ.length - 1];
        const vQ = kQ < DQ;
        vQ && ([DQ, kQ] = [kQ, DQ]);
        let uQ, HQ, bQ = LQ(DQ),
          YQ = LQ(kQ);
        const xQ = null == QQ ? 10 : +QQ;
        let AQ = [];
        if (!(oQ % 1) && YQ - bQ < xQ) {
          if (bQ = Math.floor(bQ), YQ = Math.ceil(YQ), DQ > 0) {
            for (; bQ <= YQ; ++bQ)
              for (uQ = 1; uQ < oQ; ++uQ)
                if (HQ = bQ < 0 ? uQ / qQ(-bQ) : uQ * qQ(bQ), !(HQ < DQ)) {
                  if (HQ > kQ) break;
                  AQ.push(HQ)
                }
          } else
            for (; bQ <= YQ; ++bQ)
              for (uQ = oQ - 1; uQ >= 1; --uQ)
                if (HQ = bQ > 0 ? uQ / qQ(-bQ) : uQ * qQ(bQ), !(HQ < DQ)) {
                  if (HQ > kQ) break;
                  AQ.push(HQ)
                } 2 * AQ.length < xQ && (AQ = mQ(DQ, kQ, xQ))
        } else AQ = mQ(bQ, YQ, Math.min(YQ - bQ, xQ)).map(qQ);
        return vQ ? AQ.reverse() : AQ
      }, FQ.tickFormat = (QQ, wQ) => {
        if (null == QQ && (QQ = 10), null == wQ && (wQ = 10 === oQ ? "s" : ","), "function" !== typeof wQ && (oQ % 1 || null != (wQ = UF(wQ)).precision || (wQ.trim = !0), wQ = XF(wQ)), QQ === 1 / 0) return wQ;
        const DQ = Math.max(1, oQ * QQ / FQ.ticks().length);
        return QQ => {
          let FQ = QQ / qQ(Math.round(LQ(QQ)));
          return FQ * oQ < oQ - .5 && (FQ *= oQ), FQ <= DQ ? wQ(QQ) : ""
        }
      }, FQ.nice = () => wQ(ZF(wQ(), {
        floor: QQ => qQ(Math.floor(LQ(QQ))),
        ceil: QQ => qQ(Math.ceil(LQ(QQ)))
      })), FQ
    }

    function qw() {
      const QQ = Lw(RF()).domain([1, 10]);
      return QQ.copy = () => WF(QQ, qw()).base(QQ.base()), rF.h.apply(QQ, arguments), QQ
    }

    function ow(QQ) {
      return function(FQ) {
        return Math.sign(FQ) * Math.log1p(Math.abs(FQ / QQ))
      }
    }

    function Dw(QQ) {
      return function(FQ) {
        return Math.sign(FQ) * Math.expm1(Math.abs(FQ)) * QQ
      }
    }

    function kw(QQ) {
      var FQ = 1,
        wQ = QQ(ow(FQ), Dw(FQ));
      return wQ.constant = function(wQ) {
        return arguments.length ? QQ(ow(FQ = +wQ), Dw(FQ)) : FQ
      }, nF(wQ)
    }

    function vw() {
      var QQ = kw(RF());
      return QQ.copy = function() {
        return WF(QQ, vw()).constant(QQ.constant())
      }, rF.h.apply(QQ, arguments)
    }
    aF = JF({
      thousands: ",",
      grouping: [3],
      currency: ["$", ""]
    }), XF = aF.format, fF = aF.formatPrefix;
    var mw = wQ(5989);

    function uw(QQ) {
      return function(FQ) {
        return FQ < 0 ? -Math.pow(-FQ, QQ) : Math.pow(FQ, QQ)
      }
    }

    function Hw(QQ) {
      return QQ < 0 ? -Math.sqrt(-QQ) : Math.sqrt(QQ)
    }

    function bw(QQ) {
      return QQ < 0 ? -QQ * QQ : QQ * QQ
    }

    function Yw(QQ) {
      var FQ = QQ(cF, cF),
        wQ = 1;
      return FQ.exponent = function(FQ) {
        return arguments.length ? 1 === (wQ = +FQ) ? QQ(cF, cF) : .5 === wQ ? QQ(Hw, bw) : QQ(uw(wQ), uw(1 / wQ)) : wQ
      }, nF(FQ)
    }

    function xw() {
      var QQ = Yw(RF());
      return QQ.copy = function() {
        return WF(QQ, xw()).exponent(QQ.exponent())
      }, rF.h.apply(QQ, arguments), QQ
    }

    function Aw() {
      return xw.apply(null, arguments).exponent(.5)
    }

    function tw(QQ) {
      return Math.sign(QQ) * QQ * QQ
    }

    function ew() {
      var QQ, FQ = OF(),
        wQ = [0, 1],
        LQ = !1;

      function qQ(wQ) {
        var qQ = function(QQ) {
          return Math.sign(QQ) * Math.sqrt(Math.abs(QQ))
        }(FQ(wQ));
        return isNaN(qQ) ? QQ : LQ ? Math.round(qQ) : qQ
      }
      return qQ.invert = function(QQ) {
        return FQ.invert(tw(QQ))
      }, qQ.domain = function(QQ) {
        return arguments.length ? (FQ.domain(QQ), qQ) : FQ.domain()
      }, qQ.range = function(QQ) {
        return arguments.length ? (FQ.range((wQ = Array.from(QQ, GF)).map(tw)), qQ) : wQ.slice()
      }, qQ.rangeRound = function(QQ) {
        return qQ.range(QQ).round(!0)
      }, qQ.round = function(QQ) {
        return arguments.length ? (LQ = !!QQ, qQ) : LQ
      }, qQ.clamp = function(QQ) {
        return arguments.length ? (FQ.clamp(QQ), qQ) : FQ.clamp()
      }, qQ.unknown = function(FQ) {
        return arguments.length ? (QQ = FQ, qQ) : QQ
      }, qQ.copy = function() {
        return ew(FQ.domain(), wQ).round(LQ).clamp(FQ.clamp()).unknown(QQ)
      }, rF.h.apply(qQ, arguments), nF(qQ)
    }

    function Mw(QQ, FQ) {
      let wQ;
      if (void 0 === FQ)
        for (const LQ of QQ) null != LQ && (wQ < LQ || void 0 === wQ && LQ >= LQ) && (wQ = LQ);
      else {
        let LQ = -1;
        for (let qQ of QQ) null != (qQ = FQ(qQ, ++LQ, QQ)) && (wQ < qQ || void 0 === wQ && qQ >= qQ) && (wQ = qQ)
      }
      return wQ
    }

    function Gw(QQ, FQ) {
      let wQ;
      if (void 0 === FQ)
        for (const LQ of QQ) null != LQ && (wQ > LQ || void 0 === wQ && LQ >= LQ) && (wQ = LQ);
      else {
        let LQ = -1;
        for (let qQ of QQ) null != (qQ = FQ(qQ, ++LQ, QQ)) && (wQ > qQ || void 0 === wQ && qQ >= qQ) && (wQ = qQ)
      }
      return wQ
    }

    function pw() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bQ;
      if (QQ === bQ) return Cw;
      if ("function" !== typeof QQ) throw new TypeError("compare is not a function");
      return (FQ, wQ) => {
        const LQ = QQ(FQ, wQ);
        return LQ || 0 === LQ ? LQ : (0 === QQ(wQ, wQ)) - (0 === QQ(FQ, FQ))
      }
    }

    function Cw(QQ, FQ) {
      return (null == QQ || !(QQ >= QQ)) - (null == FQ || !(FQ >= FQ)) || (QQ < FQ ? -1 : QQ > FQ ? 1 : 0)
    }

    function Sw(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0,
        qQ = arguments.length > 4 ? arguments[4] : void 0;
      if (FQ = Math.floor(FQ), wQ = Math.floor(Math.max(0, wQ)), LQ = Math.floor(Math.min(QQ.length - 1, LQ)), !(wQ <= FQ && FQ <= LQ)) return QQ;
      for (qQ = void 0 === qQ ? Cw : pw(qQ); LQ > wQ;) {
        if (LQ - wQ > 600) {
          const oQ = LQ - wQ + 1,
            DQ = FQ - wQ + 1,
            kQ = Math.log(oQ),
            vQ = .5 * Math.exp(2 * kQ / 3),
            mQ = .5 * Math.sqrt(kQ * vQ * (oQ - vQ) / oQ) * (DQ - oQ / 2 < 0 ? -1 : 1);
          Sw(QQ, FQ, Math.max(wQ, Math.floor(FQ - DQ * vQ / oQ + mQ)), Math.min(LQ, Math.floor(FQ + (oQ - DQ) * vQ / oQ + mQ)), qQ)
        }
        const oQ = QQ[FQ];
        let DQ = wQ,
          kQ = LQ;
        for (iw(QQ, wQ, FQ), qQ(QQ[LQ], oQ) > 0 && iw(QQ, wQ, LQ); DQ < kQ;) {
          for (iw(QQ, DQ, kQ), ++DQ, --kQ; qQ(QQ[DQ], oQ) < 0;) ++DQ;
          for (; qQ(QQ[kQ], oQ) > 0;) --kQ
        }
        0 === qQ(QQ[wQ], oQ) ? iw(QQ, wQ, kQ) : (++kQ, iw(QQ, kQ, LQ)), kQ <= FQ && (wQ = kQ + 1), FQ <= kQ && (LQ = kQ - 1)
      }
      return QQ
    }

    function iw(QQ, FQ, wQ) {
      const LQ = QQ[FQ];
      QQ[FQ] = QQ[wQ], QQ[wQ] = LQ
    }

    function Ww(QQ, FQ, wQ) {
      if (QQ = Float64Array.from(function*(QQ, FQ) {
          if (void 0 === FQ)
            for (let wQ of QQ) null != wQ && (wQ = +wQ) >= wQ && (yield wQ);
          else {
            let wQ = -1;
            for (let LQ of QQ) null != (LQ = FQ(LQ, ++wQ, QQ)) && (LQ = +LQ) >= LQ && (yield LQ)
          }
        }(QQ, wQ)), (LQ = QQ.length) && !isNaN(FQ = +FQ)) {
        if (FQ <= 0 || LQ < 2) return Gw(QQ);
        if (FQ >= 1) return Mw(QQ);
        var LQ, qQ = (LQ - 1) * FQ,
          oQ = Math.floor(qQ),
          DQ = Mw(Sw(QQ, oQ).subarray(0, oQ + 1));
        return DQ + (Gw(QQ.subarray(oQ + 1)) - DQ) * (qQ - oQ)
      }
    }

    function Rw(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tQ;
      if ((LQ = QQ.length) && !isNaN(FQ = +FQ)) {
        if (FQ <= 0 || LQ < 2) return +wQ(QQ[0], 0, QQ);
        if (FQ >= 1) return +wQ(QQ[LQ - 1], LQ - 1, QQ);
        var LQ, qQ = (LQ - 1) * FQ,
          oQ = Math.floor(qQ),
          DQ = +wQ(QQ[oQ], oQ, QQ);
        return DQ + (+wQ(QQ[oQ + 1], oQ + 1, QQ) - DQ) * (qQ - oQ)
      }
    }

    function Ow() {
      var QQ, FQ = [],
        wQ = [],
        LQ = [];

      function qQ() {
        var QQ = 0,
          qQ = Math.max(1, wQ.length);
        for (LQ = new Array(qQ - 1); ++QQ < qQ;) LQ[QQ - 1] = Rw(FQ, QQ / qQ);
        return oQ
      }

      function oQ(FQ) {
        return null == FQ || isNaN(FQ = +FQ) ? QQ : wQ[GQ(LQ, FQ)]
      }
      return oQ.invertExtent = function(QQ) {
        var qQ = wQ.indexOf(QQ);
        return qQ < 0 ? [NaN, NaN] : [qQ > 0 ? LQ[qQ - 1] : FQ[0], qQ < LQ.length ? LQ[qQ] : FQ[FQ.length - 1]]
      }, oQ.domain = function(QQ) {
        if (!arguments.length) return FQ.slice();
        FQ = [];
        for (let wQ of QQ) null == wQ || isNaN(wQ = +wQ) || FQ.push(wQ);
        return FQ.sort(bQ), qQ()
      }, oQ.range = function(QQ) {
        return arguments.length ? (wQ = Array.from(QQ), qQ()) : wQ.slice()
      }, oQ.unknown = function(FQ) {
        return arguments.length ? (QQ = FQ, oQ) : QQ
      }, oQ.quantiles = function() {
        return LQ.slice()
      }, oQ.copy = function() {
        return Ow().domain(FQ).range(wQ).unknown(QQ)
      }, rF.h.apply(oQ, arguments)
    }

    function sw() {
      var QQ, FQ = 0,
        wQ = 1,
        LQ = 1,
        qQ = [.5],
        oQ = [0, 1];

      function DQ(FQ) {
        return null != FQ && FQ <= FQ ? oQ[GQ(qQ, FQ, 0, LQ)] : QQ
      }

      function kQ() {
        var QQ = -1;
        for (qQ = new Array(LQ); ++QQ < LQ;) qQ[QQ] = ((QQ + 1) * wQ - (QQ - LQ) * FQ) / (LQ + 1);
        return DQ
      }
      return DQ.domain = function(QQ) {
        return arguments.length ? ([FQ, wQ] = QQ, FQ = +FQ, wQ = +wQ, kQ()) : [FQ, wQ]
      }, DQ.range = function(QQ) {
        return arguments.length ? (LQ = (oQ = Array.from(QQ)).length - 1, kQ()) : oQ.slice()
      }, DQ.invertExtent = function(QQ) {
        var DQ = oQ.indexOf(QQ);
        return DQ < 0 ? [NaN, NaN] : DQ < 1 ? [FQ, qQ[0]] : DQ >= LQ ? [qQ[LQ - 1], wQ] : [qQ[DQ - 1], qQ[DQ]]
      }, DQ.unknown = function(FQ) {
        return arguments.length ? (QQ = FQ, DQ) : DQ
      }, DQ.thresholds = function() {
        return qQ.slice()
      }, DQ.copy = function() {
        return sw().domain([FQ, wQ]).range(oQ).unknown(QQ)
      }, rF.h.apply(nF(DQ), arguments)
    }

    function rw() {
      var QQ, FQ = [.5],
        wQ = [0, 1],
        LQ = 1;

      function qQ(qQ) {
        return null != qQ && qQ <= qQ ? wQ[GQ(FQ, qQ, 0, LQ)] : QQ
      }
      return qQ.domain = function(QQ) {
        return arguments.length ? (FQ = Array.from(QQ), LQ = Math.min(FQ.length, wQ.length - 1), qQ) : FQ.slice()
      }, qQ.range = function(QQ) {
        return arguments.length ? (wQ = Array.from(QQ), LQ = Math.min(FQ.length, wQ.length - 1), qQ) : wQ.slice()
      }, qQ.invertExtent = function(QQ) {
        var LQ = wQ.indexOf(QQ);
        return [FQ[LQ - 1], FQ[LQ]]
      }, qQ.unknown = function(FQ) {
        return arguments.length ? (QQ = FQ, qQ) : QQ
      }, qQ.copy = function() {
        return rw().domain(FQ).range(wQ).unknown(QQ)
      }, rF.h.apply(qQ, arguments)
    }
    const Iw = 1e3,
      Uw = 6e4,
      Nw = 36e5,
      Tw = 864e5,
      Kw = 6048e5,
      zw = 2592e6,
      lw = 31536e6,
      jw = new Date,
      aw = new Date;

    function Xw(QQ, FQ, wQ, LQ) {
      function qQ(FQ) {
        return QQ(FQ = 0 === arguments.length ? new Date : new Date(+FQ)), FQ
      }
      return qQ.floor = FQ => (QQ(FQ = new Date(+FQ)), FQ), qQ.ceil = wQ => (QQ(wQ = new Date(wQ - 1)), FQ(wQ, 1), QQ(wQ), wQ), qQ.round = QQ => {
        const FQ = qQ(QQ),
          wQ = qQ.ceil(QQ);
        return QQ - FQ < wQ - QQ ? FQ : wQ
      }, qQ.offset = (QQ, wQ) => (FQ(QQ = new Date(+QQ), null == wQ ? 1 : Math.floor(wQ)), QQ), qQ.range = (wQ, LQ, oQ) => {
        const DQ = [];
        if (wQ = qQ.ceil(wQ), oQ = null == oQ ? 1 : Math.floor(oQ), !(wQ < LQ) || !(oQ > 0)) return DQ;
        let kQ;
        do {
          DQ.push(kQ = new Date(+wQ)), FQ(wQ, oQ), QQ(wQ)
        } while (kQ < wQ && wQ < LQ);
        return DQ
      }, qQ.filter = wQ => Xw((FQ => {
        if (FQ >= FQ)
          for (; QQ(FQ), !wQ(FQ);) FQ.setTime(FQ - 1)
      }), ((QQ, LQ) => {
        if (QQ >= QQ)
          if (LQ < 0)
            for (; ++LQ <= 0;)
              for (; FQ(QQ, -1), !wQ(QQ););
          else
            for (; --LQ >= 0;)
              for (; FQ(QQ, 1), !wQ(QQ););
      })), wQ && (qQ.count = (FQ, LQ) => (jw.setTime(+FQ), aw.setTime(+LQ), QQ(jw), QQ(aw), Math.floor(wQ(jw, aw))), qQ.every = QQ => (QQ = Math.floor(QQ), isFinite(QQ) && QQ > 0 ? QQ > 1 ? qQ.filter(LQ ? FQ => LQ(FQ) % QQ === 0 : FQ => qQ.count(0, FQ) % QQ === 0) : qQ : null)), qQ
    }
    const fw = Xw((() => {}), ((QQ, FQ) => {
      QQ.setTime(+QQ + FQ)
    }), ((QQ, FQ) => FQ - QQ));
    fw.every = QQ => (QQ = Math.floor(QQ), isFinite(QQ) && QQ > 0 ? QQ > 1 ? Xw((FQ => {
      FQ.setTime(Math.floor(FQ / QQ) * QQ)
    }), ((FQ, wQ) => {
      FQ.setTime(+FQ + wQ * QQ)
    }), ((FQ, wQ) => (wQ - FQ) / QQ)) : fw : null);
    fw.range;
    const Vw = Xw((QQ => {
        QQ.setTime(QQ - QQ.getMilliseconds())
      }), ((QQ, FQ) => {
        QQ.setTime(+QQ + FQ * Iw)
      }), ((QQ, FQ) => (FQ - QQ) / Iw), (QQ => QQ.getUTCSeconds())),
      hw = (Vw.range, Xw((QQ => {
        QQ.setTime(QQ - QQ.getMilliseconds() - QQ.getSeconds() * Iw)
      }), ((QQ, FQ) => {
        QQ.setTime(+QQ + FQ * Uw)
      }), ((QQ, FQ) => (FQ - QQ) / Uw), (QQ => QQ.getMinutes()))),
      Jw = (hw.range, Xw((QQ => {
        QQ.setUTCSeconds(0, 0)
      }), ((QQ, FQ) => {
        QQ.setTime(+QQ + FQ * Uw)
      }), ((QQ, FQ) => (FQ - QQ) / Uw), (QQ => QQ.getUTCMinutes()))),
      Ew = (Jw.range, Xw((QQ => {
        QQ.setTime(QQ - QQ.getMilliseconds() - QQ.getSeconds() * Iw - QQ.getMinutes() * Uw)
      }), ((QQ, FQ) => {
        QQ.setTime(+QQ + FQ * Nw)
      }), ((QQ, FQ) => (FQ - QQ) / Nw), (QQ => QQ.getHours()))),
      nw = (Ew.range, Xw((QQ => {
        QQ.setUTCMinutes(0, 0, 0)
      }), ((QQ, FQ) => {
        QQ.setTime(+QQ + FQ * Nw)
      }), ((QQ, FQ) => (FQ - QQ) / Nw), (QQ => QQ.getUTCHours()))),
      gw = (nw.range, Xw((QQ => QQ.setHours(0, 0, 0, 0)), ((QQ, FQ) => QQ.setDate(QQ.getDate() + FQ)), ((QQ, FQ) => (FQ - QQ - (FQ.getTimezoneOffset() - QQ.getTimezoneOffset()) * Uw) / Tw), (QQ => QQ.getDate() - 1))),
      Pw = (gw.range, Xw((QQ => {
        QQ.setUTCHours(0, 0, 0, 0)
      }), ((QQ, FQ) => {
        QQ.setUTCDate(QQ.getUTCDate() + FQ)
      }), ((QQ, FQ) => (FQ - QQ) / Tw), (QQ => QQ.getUTCDate() - 1))),
      Zw = (Pw.range, Xw((QQ => {
        QQ.setUTCHours(0, 0, 0, 0)
      }), ((QQ, FQ) => {
        QQ.setUTCDate(QQ.getUTCDate() + FQ)
      }), ((QQ, FQ) => (FQ - QQ) / Tw), (QQ => Math.floor(QQ / Tw))));
    Zw.range;

    function yw(QQ) {
      return Xw((FQ => {
        FQ.setDate(FQ.getDate() - (FQ.getDay() + 7 - QQ) % 7), FQ.setHours(0, 0, 0, 0)
      }), ((QQ, FQ) => {
        QQ.setDate(QQ.getDate() + 7 * FQ)
      }), ((QQ, FQ) => (FQ - QQ - (FQ.getTimezoneOffset() - QQ.getTimezoneOffset()) * Uw) / Kw))
    }
    const Bw = yw(0),
      dw = yw(1),
      QL = yw(2),
      FL = yw(3),
      wL = yw(4),
      LL = yw(5),
      qL = yw(6);
    Bw.range, dw.range, QL.range, FL.range, wL.range, LL.range, qL.range;

    function oL(QQ) {
      return Xw((FQ => {
        FQ.setUTCDate(FQ.getUTCDate() - (FQ.getUTCDay() + 7 - QQ) % 7), FQ.setUTCHours(0, 0, 0, 0)
      }), ((QQ, FQ) => {
        QQ.setUTCDate(QQ.getUTCDate() + 7 * FQ)
      }), ((QQ, FQ) => (FQ - QQ) / Kw))
    }
    const DL = oL(0),
      kL = oL(1),
      vL = oL(2),
      mL = oL(3),
      uL = oL(4),
      HL = oL(5),
      bL = oL(6),
      YL = (DL.range, kL.range, vL.range, mL.range, uL.range, HL.range, bL.range, Xw((QQ => {
        QQ.setDate(1), QQ.setHours(0, 0, 0, 0)
      }), ((QQ, FQ) => {
        QQ.setMonth(QQ.getMonth() + FQ)
      }), ((QQ, FQ) => FQ.getMonth() - QQ.getMonth() + 12 * (FQ.getFullYear() - QQ.getFullYear())), (QQ => QQ.getMonth()))),
      xL = (YL.range, Xw((QQ => {
        QQ.setUTCDate(1), QQ.setUTCHours(0, 0, 0, 0)
      }), ((QQ, FQ) => {
        QQ.setUTCMonth(QQ.getUTCMonth() + FQ)
      }), ((QQ, FQ) => FQ.getUTCMonth() - QQ.getUTCMonth() + 12 * (FQ.getUTCFullYear() - QQ.getUTCFullYear())), (QQ => QQ.getUTCMonth()))),
      AL = (xL.range, Xw((QQ => {
        QQ.setMonth(0, 1), QQ.setHours(0, 0, 0, 0)
      }), ((QQ, FQ) => {
        QQ.setFullYear(QQ.getFullYear() + FQ)
      }), ((QQ, FQ) => FQ.getFullYear() - QQ.getFullYear()), (QQ => QQ.getFullYear())));
    AL.every = QQ => isFinite(QQ = Math.floor(QQ)) && QQ > 0 ? Xw((FQ => {
      FQ.setFullYear(Math.floor(FQ.getFullYear() / QQ) * QQ), FQ.setMonth(0, 1), FQ.setHours(0, 0, 0, 0)
    }), ((FQ, wQ) => {
      FQ.setFullYear(FQ.getFullYear() + wQ * QQ)
    })) : null;
    AL.range;
    const tL = Xw((QQ => {
      QQ.setUTCMonth(0, 1), QQ.setUTCHours(0, 0, 0, 0)
    }), ((QQ, FQ) => {
      QQ.setUTCFullYear(QQ.getUTCFullYear() + FQ)
    }), ((QQ, FQ) => FQ.getUTCFullYear() - QQ.getUTCFullYear()), (QQ => QQ.getUTCFullYear()));
    tL.every = QQ => isFinite(QQ = Math.floor(QQ)) && QQ > 0 ? Xw((FQ => {
      FQ.setUTCFullYear(Math.floor(FQ.getUTCFullYear() / QQ) * QQ), FQ.setUTCMonth(0, 1), FQ.setUTCHours(0, 0, 0, 0)
    }), ((FQ, wQ) => {
      FQ.setUTCFullYear(FQ.getUTCFullYear() + wQ * QQ)
    })) : null;
    tL.range;

    function eL(QQ, FQ, wQ, LQ, qQ, oQ) {
      const DQ = [
        [Vw, 1, Iw],
        [Vw, 5, 5e3],
        [Vw, 15, 15e3],
        [Vw, 30, 3e4],
        [oQ, 1, Uw],
        [oQ, 5, 3e5],
        [oQ, 15, 9e5],
        [oQ, 30, 18e5],
        [qQ, 1, Nw],
        [qQ, 3, 108e5],
        [qQ, 6, 216e5],
        [qQ, 12, 432e5],
        [LQ, 1, Tw],
        [LQ, 2, 1728e5],
        [wQ, 1, Kw],
        [FQ, 1, zw],
        [FQ, 3, 7776e6],
        [QQ, 1, lw]
      ];

      function kQ(FQ, wQ, LQ) {
        const qQ = Math.abs(wQ - FQ) / LQ,
          oQ = xQ((QQ => {
            let [, , FQ] = QQ;
            return FQ
          })).right(DQ, qQ);
        if (oQ === DQ.length) return QQ.every(HQ(FQ / lw, wQ / lw, LQ));
        if (0 === oQ) return fw.every(Math.max(HQ(FQ, wQ, LQ), 1));
        const [kQ, vQ] = DQ[qQ / DQ[oQ - 1][2] < DQ[oQ][2] / qQ ? oQ - 1 : oQ];
        return kQ.every(vQ)
      }
      return [function(QQ, FQ, wQ) {
        const LQ = FQ < QQ;
        LQ && ([QQ, FQ] = [FQ, QQ]);
        const qQ = wQ && "function" === typeof wQ.range ? wQ : kQ(QQ, FQ, wQ),
          oQ = qQ ? qQ.range(QQ, +FQ + 1) : [];
        return LQ ? oQ.reverse() : oQ
      }, kQ]
    }
    const [ML, GL] = eL(tL, xL, DL, Zw, nw, Jw), [pL, cL] = eL(AL, YL, Bw, gw, Ew, hw);

    function CL(QQ) {
      if (0 <= QQ.y && QQ.y < 100) {
        var FQ = new Date(-1, QQ.m, QQ.d, QQ.H, QQ.M, QQ.S, QQ.L);
        return FQ.setFullYear(QQ.y), FQ
      }
      return new Date(QQ.y, QQ.m, QQ.d, QQ.H, QQ.M, QQ.S, QQ.L)
    }

    function SL(QQ) {
      if (0 <= QQ.y && QQ.y < 100) {
        var FQ = new Date(Date.UTC(-1, QQ.m, QQ.d, QQ.H, QQ.M, QQ.S, QQ.L));
        return FQ.setUTCFullYear(QQ.y), FQ
      }
      return new Date(Date.UTC(QQ.y, QQ.m, QQ.d, QQ.H, QQ.M, QQ.S, QQ.L))
    }

    function iL(QQ, FQ, wQ) {
      return {
        y: QQ,
        m: FQ,
        d: wQ,
        H: 0,
        M: 0,
        S: 0,
        L: 0
      }
    }
    var WL, RL, OL, sL = {
        "-": "",
        _: " ",
        0: "0"
      },
      rL = /^\s*\d+/,
      IL = /^%/,
      UL = /[\\^$*+?|[\]().{}]/g;

    function NL(QQ, FQ, wQ) {
      var LQ = QQ < 0 ? "-" : "",
        qQ = (LQ ? -QQ : QQ) + "",
        oQ = qQ.length;
      return LQ + (oQ < wQ ? new Array(wQ - oQ + 1).join(FQ) + qQ : qQ)
    }

    function TL(QQ) {
      return QQ.replace(UL, "\\$&")
    }

    function KL(QQ) {
      return new RegExp("^(?:" + QQ.map(TL).join("|") + ")", "i")
    }

    function zL(QQ) {
      return new Map(QQ.map(((QQ, FQ) => [QQ.toLowerCase(), FQ])))
    }

    function lL(QQ, FQ, wQ) {
      var LQ = rL.exec(FQ.slice(wQ, wQ + 1));
      return LQ ? (QQ.w = +LQ[0], wQ + LQ[0].length) : -1
    }

    function jL(QQ, FQ, wQ) {
      var LQ = rL.exec(FQ.slice(wQ, wQ + 1));
      return LQ ? (QQ.u = +LQ[0], wQ + LQ[0].length) : -1
    }

    function aL(QQ, FQ, wQ) {
      var LQ = rL.exec(FQ.slice(wQ, wQ + 2));
      return LQ ? (QQ.U = +LQ[0], wQ + LQ[0].length) : -1
    }

    function XL(QQ, FQ, wQ) {
      var LQ = rL.exec(FQ.slice(wQ, wQ + 2));
      return LQ ? (QQ.V = +LQ[0], wQ + LQ[0].length) : -1
    }

    function fL(QQ, FQ, wQ) {
      var LQ = rL.exec(FQ.slice(wQ, wQ + 2));
      return LQ ? (QQ.W = +LQ[0], wQ + LQ[0].length) : -1
    }

    function VL(QQ, FQ, wQ) {
      var LQ = rL.exec(FQ.slice(wQ, wQ + 4));
      return LQ ? (QQ.y = +LQ[0], wQ + LQ[0].length) : -1
    }

    function hL(QQ, FQ, wQ) {
      var LQ = rL.exec(FQ.slice(wQ, wQ + 2));
      return LQ ? (QQ.y = +LQ[0] + (+LQ[0] > 68 ? 1900 : 2e3), wQ + LQ[0].length) : -1
    }

    function JL(QQ, FQ, wQ) {
      var LQ = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(FQ.slice(wQ, wQ + 6));
      return LQ ? (QQ.Z = LQ[1] ? 0 : -(LQ[2] + (LQ[3] || "00")), wQ + LQ[0].length) : -1
    }

    function EL(QQ, FQ, wQ) {
      var LQ = rL.exec(FQ.slice(wQ, wQ + 1));
      return LQ ? (QQ.q = 3 * LQ[0] - 3, wQ + LQ[0].length) : -1
    }

    function nL(QQ, FQ, wQ) {
      var LQ = rL.exec(FQ.slice(wQ, wQ + 2));
      return LQ ? (QQ.m = LQ[0] - 1, wQ + LQ[0].length) : -1
    }

    function gL(QQ, FQ, wQ) {
      var LQ = rL.exec(FQ.slice(wQ, wQ + 2));
      return LQ ? (QQ.d = +LQ[0], wQ + LQ[0].length) : -1
    }

    function PL(QQ, FQ, wQ) {
      var LQ = rL.exec(FQ.slice(wQ, wQ + 3));
      return LQ ? (QQ.m = 0, QQ.d = +LQ[0], wQ + LQ[0].length) : -1
    }

    function ZL(QQ, FQ, wQ) {
      var LQ = rL.exec(FQ.slice(wQ, wQ + 2));
      return LQ ? (QQ.H = +LQ[0], wQ + LQ[0].length) : -1
    }

    function yL(QQ, FQ, wQ) {
      var LQ = rL.exec(FQ.slice(wQ, wQ + 2));
      return LQ ? (QQ.M = +LQ[0], wQ + LQ[0].length) : -1
    }

    function BL(QQ, FQ, wQ) {
      var LQ = rL.exec(FQ.slice(wQ, wQ + 2));
      return LQ ? (QQ.S = +LQ[0], wQ + LQ[0].length) : -1
    }

    function dL(QQ, FQ, wQ) {
      var LQ = rL.exec(FQ.slice(wQ, wQ + 3));
      return LQ ? (QQ.L = +LQ[0], wQ + LQ[0].length) : -1
    }

    function Qq(QQ, FQ, wQ) {
      var LQ = rL.exec(FQ.slice(wQ, wQ + 6));
      return LQ ? (QQ.L = Math.floor(LQ[0] / 1e3), wQ + LQ[0].length) : -1
    }

    function Fq(QQ, FQ, wQ) {
      var LQ = IL.exec(FQ.slice(wQ, wQ + 1));
      return LQ ? wQ + LQ[0].length : -1
    }

    function wq(QQ, FQ, wQ) {
      var LQ = rL.exec(FQ.slice(wQ));
      return LQ ? (QQ.Q = +LQ[0], wQ + LQ[0].length) : -1
    }

    function Lq(QQ, FQ, wQ) {
      var LQ = rL.exec(FQ.slice(wQ));
      return LQ ? (QQ.s = +LQ[0], wQ + LQ[0].length) : -1
    }

    function qq(QQ, FQ) {
      return NL(QQ.getDate(), FQ, 2)
    }

    function oq(QQ, FQ) {
      return NL(QQ.getHours(), FQ, 2)
    }

    function Dq(QQ, FQ) {
      return NL(QQ.getHours() % 12 || 12, FQ, 2)
    }

    function kq(QQ, FQ) {
      return NL(1 + gw.count(AL(QQ), QQ), FQ, 3)
    }

    function vq(QQ, FQ) {
      return NL(QQ.getMilliseconds(), FQ, 3)
    }

    function mq(QQ, FQ) {
      return vq(QQ, FQ) + "000"
    }

    function uq(QQ, FQ) {
      return NL(QQ.getMonth() + 1, FQ, 2)
    }

    function Hq(QQ, FQ) {
      return NL(QQ.getMinutes(), FQ, 2)
    }

    function bq(QQ, FQ) {
      return NL(QQ.getSeconds(), FQ, 2)
    }

    function Yq(QQ) {
      var FQ = QQ.getDay();
      return 0 === FQ ? 7 : FQ
    }

    function xq(QQ, FQ) {
      return NL(Bw.count(AL(QQ) - 1, QQ), FQ, 2)
    }

    function Aq(QQ) {
      var FQ = QQ.getDay();
      return FQ >= 4 || 0 === FQ ? wL(QQ) : wL.ceil(QQ)
    }

    function tq(QQ, FQ) {
      return QQ = Aq(QQ), NL(wL.count(AL(QQ), QQ) + (4 === AL(QQ).getDay()), FQ, 2)
    }

    function eq(QQ) {
      return QQ.getDay()
    }

    function Mq(QQ, FQ) {
      return NL(dw.count(AL(QQ) - 1, QQ), FQ, 2)
    }

    function Gq(QQ, FQ) {
      return NL(QQ.getFullYear() % 100, FQ, 2)
    }

    function pq(QQ, FQ) {
      return NL((QQ = Aq(QQ)).getFullYear() % 100, FQ, 2)
    }

    function cq(QQ, FQ) {
      return NL(QQ.getFullYear() % 1e4, FQ, 4)
    }

    function Cq(QQ, FQ) {
      var wQ = QQ.getDay();
      return NL((QQ = wQ >= 4 || 0 === wQ ? wL(QQ) : wL.ceil(QQ)).getFullYear() % 1e4, FQ, 4)
    }

    function Sq(QQ) {
      var FQ = QQ.getTimezoneOffset();
      return (FQ > 0 ? "-" : (FQ *= -1, "+")) + NL(FQ / 60 | 0, "0", 2) + NL(FQ % 60, "0", 2)
    }

    function iq(QQ, FQ) {
      return NL(QQ.getUTCDate(), FQ, 2)
    }

    function Wq(QQ, FQ) {
      return NL(QQ.getUTCHours(), FQ, 2)
    }

    function Rq(QQ, FQ) {
      return NL(QQ.getUTCHours() % 12 || 12, FQ, 2)
    }

    function Oq(QQ, FQ) {
      return NL(1 + Pw.count(tL(QQ), QQ), FQ, 3)
    }

    function sq(QQ, FQ) {
      return NL(QQ.getUTCMilliseconds(), FQ, 3)
    }

    function rq(QQ, FQ) {
      return sq(QQ, FQ) + "000"
    }

    function Iq(QQ, FQ) {
      return NL(QQ.getUTCMonth() + 1, FQ, 2)
    }

    function Uq(QQ, FQ) {
      return NL(QQ.getUTCMinutes(), FQ, 2)
    }

    function Nq(QQ, FQ) {
      return NL(QQ.getUTCSeconds(), FQ, 2)
    }

    function Tq(QQ) {
      var FQ = QQ.getUTCDay();
      return 0 === FQ ? 7 : FQ
    }

    function Kq(QQ, FQ) {
      return NL(DL.count(tL(QQ) - 1, QQ), FQ, 2)
    }

    function zq(QQ) {
      var FQ = QQ.getUTCDay();
      return FQ >= 4 || 0 === FQ ? uL(QQ) : uL.ceil(QQ)
    }

    function lq(QQ, FQ) {
      return QQ = zq(QQ), NL(uL.count(tL(QQ), QQ) + (4 === tL(QQ).getUTCDay()), FQ, 2)
    }

    function jq(QQ) {
      return QQ.getUTCDay()
    }

    function aq(QQ, FQ) {
      return NL(kL.count(tL(QQ) - 1, QQ), FQ, 2)
    }

    function Xq(QQ, FQ) {
      return NL(QQ.getUTCFullYear() % 100, FQ, 2)
    }

    function fq(QQ, FQ) {
      return NL((QQ = zq(QQ)).getUTCFullYear() % 100, FQ, 2)
    }

    function Vq(QQ, FQ) {
      return NL(QQ.getUTCFullYear() % 1e4, FQ, 4)
    }

    function hq(QQ, FQ) {
      var wQ = QQ.getUTCDay();
      return NL((QQ = wQ >= 4 || 0 === wQ ? uL(QQ) : uL.ceil(QQ)).getUTCFullYear() % 1e4, FQ, 4)
    }

    function Jq() {
      return "+0000"
    }

    function Eq() {
      return "%"
    }

    function nq(QQ) {
      return +QQ
    }

    function gq(QQ) {
      return Math.floor(+QQ / 1e3)
    }

    function Pq(QQ) {
      return new Date(QQ)
    }

    function Zq(QQ) {
      return QQ instanceof Date ? +QQ : +new Date(+QQ)
    }

    function yq(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ) {
      var uQ = OF(),
        HQ = uQ.invert,
        bQ = uQ.domain,
        YQ = mQ(".%L"),
        xQ = mQ(":%S"),
        AQ = mQ("%I:%M"),
        tQ = mQ("%I %p"),
        eQ = mQ("%a %d"),
        MQ = mQ("%b %d"),
        GQ = mQ("%B"),
        pQ = mQ("%Y");

      function cQ(QQ) {
        return (vQ(QQ) < QQ ? YQ : kQ(QQ) < QQ ? xQ : DQ(QQ) < QQ ? AQ : oQ(QQ) < QQ ? tQ : LQ(QQ) < QQ ? qQ(QQ) < QQ ? eQ : MQ : wQ(QQ) < QQ ? GQ : pQ)(QQ)
      }
      return uQ.invert = function(QQ) {
        return new Date(HQ(QQ))
      }, uQ.domain = function(QQ) {
        return arguments.length ? bQ(Array.from(QQ, Zq)) : bQ().map(Pq)
      }, uQ.ticks = function(FQ) {
        var wQ = bQ();
        return QQ(wQ[0], wQ[wQ.length - 1], null == FQ ? 10 : FQ)
      }, uQ.tickFormat = function(QQ, FQ) {
        return null == FQ ? cQ : mQ(FQ)
      }, uQ.nice = function(QQ) {
        var wQ = bQ();
        return QQ && "function" === typeof QQ.range || (QQ = FQ(wQ[0], wQ[wQ.length - 1], null == QQ ? 10 : QQ)), QQ ? bQ(ZF(wQ, QQ)) : uQ
      }, uQ.copy = function() {
        return WF(uQ, yq(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ))
      }, uQ
    }

    function Bq() {
      return rF.h.apply(yq(pL, cL, AL, YL, Bw, gw, Ew, hw, Vw, RL).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
    }

    function dq() {
      return rF.h.apply(yq(ML, GL, tL, xL, DL, Pw, nw, Jw, Vw, OL).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
    }

    function Qo() {
      var QQ, FQ, wQ, LQ, qQ, oQ = 0,
        DQ = 1,
        kQ = cF,
        vQ = !1;

      function mQ(FQ) {
        return null == FQ || isNaN(FQ = +FQ) ? qQ : kQ(0 === wQ ? .5 : (FQ = (LQ(FQ) - QQ) * wQ, vQ ? Math.max(0, Math.min(1, FQ)) : FQ))
      }

      function uQ(QQ) {
        return function(FQ) {
          var wQ, LQ;
          return arguments.length ? ([wQ, LQ] = FQ, kQ = QQ(wQ, LQ), mQ) : [kQ(0), kQ(1)]
        }
      }
      return mQ.domain = function(qQ) {
          return arguments.length ? ([oQ, DQ] = qQ, QQ = LQ(oQ = +oQ), FQ = LQ(DQ = +DQ), wQ = QQ === FQ ? 0 : 1 / (FQ - QQ), mQ) : [oQ, DQ]
        }, mQ.clamp = function(QQ) {
          return arguments.length ? (vQ = !!QQ, mQ) : vQ
        }, mQ.interpolator = function(QQ) {
          return arguments.length ? (kQ = QQ, mQ) : kQ
        }, mQ.range = uQ(eF), mQ.rangeRound = uQ(MF), mQ.unknown = function(QQ) {
          return arguments.length ? (qQ = QQ, mQ) : qQ
        },
        function(qQ) {
          return LQ = qQ, QQ = qQ(oQ), FQ = qQ(DQ), wQ = QQ === FQ ? 0 : 1 / (FQ - QQ), mQ
        }
    }

    function Fo(QQ, FQ) {
      return FQ.domain(QQ.domain()).interpolator(QQ.interpolator()).clamp(QQ.clamp()).unknown(QQ.unknown())
    }

    function wo() {
      var QQ = nF(Qo()(cF));
      return QQ.copy = function() {
        return Fo(QQ, wo())
      }, rF.e.apply(QQ, arguments)
    }

    function Lo() {
      var QQ = Lw(Qo()).domain([1, 10]);
      return QQ.copy = function() {
        return Fo(QQ, Lo()).base(QQ.base())
      }, rF.e.apply(QQ, arguments)
    }

    function qo() {
      var QQ = kw(Qo());
      return QQ.copy = function() {
        return Fo(QQ, qo()).constant(QQ.constant())
      }, rF.e.apply(QQ, arguments)
    }

    function oo() {
      var QQ = Yw(Qo());
      return QQ.copy = function() {
        return Fo(QQ, oo()).exponent(QQ.exponent())
      }, rF.e.apply(QQ, arguments)
    }

    function Do() {
      return oo.apply(null, arguments).exponent(.5)
    }

    function ko() {
      var QQ = [],
        FQ = cF;

      function wQ(wQ) {
        if (null != wQ && !isNaN(wQ = +wQ)) return FQ((GQ(QQ, wQ, 1) - 1) / (QQ.length - 1))
      }
      return wQ.domain = function(FQ) {
        if (!arguments.length) return QQ.slice();
        QQ = [];
        for (let wQ of FQ) null == wQ || isNaN(wQ = +wQ) || QQ.push(wQ);
        return QQ.sort(bQ), wQ
      }, wQ.interpolator = function(QQ) {
        return arguments.length ? (FQ = QQ, wQ) : FQ
      }, wQ.range = function() {
        return QQ.map(((wQ, LQ) => FQ(LQ / (QQ.length - 1))))
      }, wQ.quantiles = function(FQ) {
        return Array.from({
          length: FQ + 1
        }, ((wQ, LQ) => Ww(QQ, LQ / FQ)))
      }, wQ.copy = function() {
        return ko(FQ).domain(QQ)
      }, rF.e.apply(wQ, arguments)
    }

    function vo() {
      var QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ = 0,
        vQ = .5,
        mQ = 1,
        uQ = 1,
        HQ = cF,
        bQ = !1;

      function YQ(QQ) {
        return isNaN(QQ = +QQ) ? DQ : (QQ = .5 + ((QQ = +oQ(QQ)) - FQ) * (uQ * QQ < uQ * FQ ? LQ : qQ), HQ(bQ ? Math.max(0, Math.min(1, QQ)) : QQ))
      }

      function xQ(QQ) {
        return function(FQ) {
          var wQ, LQ, qQ;
          return arguments.length ? ([wQ, LQ, qQ] = FQ, HQ = function(QQ, FQ) {
            void 0 === FQ && (FQ = QQ, QQ = eF);
            for (var wQ = 0, LQ = FQ.length - 1, qQ = FQ[0], oQ = new Array(LQ < 0 ? 0 : LQ); wQ < LQ;) oQ[wQ] = QQ(qQ, qQ = FQ[++wQ]);
            return function(QQ) {
              var FQ = Math.max(0, Math.min(LQ - 1, Math.floor(QQ *= LQ)));
              return oQ[FQ](QQ - FQ)
            }
          }(QQ, [wQ, LQ, qQ]), YQ) : [HQ(0), HQ(.5), HQ(1)]
        }
      }
      return YQ.domain = function(DQ) {
          return arguments.length ? ([kQ, vQ, mQ] = DQ, QQ = oQ(kQ = +kQ), FQ = oQ(vQ = +vQ), wQ = oQ(mQ = +mQ), LQ = QQ === FQ ? 0 : .5 / (FQ - QQ), qQ = FQ === wQ ? 0 : .5 / (wQ - FQ), uQ = FQ < QQ ? -1 : 1, YQ) : [kQ, vQ, mQ]
        }, YQ.clamp = function(QQ) {
          return arguments.length ? (bQ = !!QQ, YQ) : bQ
        }, YQ.interpolator = function(QQ) {
          return arguments.length ? (HQ = QQ, YQ) : HQ
        }, YQ.range = xQ(eF), YQ.rangeRound = xQ(MF), YQ.unknown = function(QQ) {
          return arguments.length ? (DQ = QQ, YQ) : DQ
        },
        function(DQ) {
          return oQ = DQ, QQ = DQ(kQ), FQ = DQ(vQ), wQ = DQ(mQ), LQ = QQ === FQ ? 0 : .5 / (FQ - QQ), qQ = FQ === wQ ? 0 : .5 / (wQ - FQ), uQ = FQ < QQ ? -1 : 1, YQ
        }
    }

    function mo() {
      var QQ = nF(vo()(cF));
      return QQ.copy = function() {
        return Fo(QQ, mo())
      }, rF.e.apply(QQ, arguments)
    }

    function uo() {
      var QQ = Lw(vo()).domain([.1, 1, 10]);
      return QQ.copy = function() {
        return Fo(QQ, uo()).base(QQ.base())
      }, rF.e.apply(QQ, arguments)
    }

    function Ho() {
      var QQ = kw(vo());
      return QQ.copy = function() {
        return Fo(QQ, Ho()).constant(QQ.constant())
      }, rF.e.apply(QQ, arguments)
    }

    function bo() {
      var QQ = Yw(vo());
      return QQ.copy = function() {
        return Fo(QQ, bo()).exponent(QQ.exponent())
      }, rF.e.apply(QQ, arguments)
    }

    function Yo() {
      return bo.apply(null, arguments).exponent(.5)
    }

    function xo(QQ, FQ) {
      if ((qQ = QQ.length) > 1)
        for (var wQ, LQ, qQ, oQ = 1, DQ = QQ[FQ[0]], kQ = DQ.length; oQ < qQ; ++oQ)
          for (LQ = DQ, DQ = QQ[FQ[oQ]], wQ = 0; wQ < kQ; ++wQ) DQ[wQ][1] += DQ[wQ][0] = isNaN(LQ[wQ][1]) ? LQ[wQ][0] : LQ[wQ][1]
    }! function(QQ) {
      WL = function(QQ) {
        var FQ = QQ.dateTime,
          wQ = QQ.date,
          LQ = QQ.time,
          qQ = QQ.periods,
          oQ = QQ.days,
          DQ = QQ.shortDays,
          kQ = QQ.months,
          vQ = QQ.shortMonths,
          mQ = KL(qQ),
          uQ = zL(qQ),
          HQ = KL(oQ),
          bQ = zL(oQ),
          YQ = KL(DQ),
          xQ = zL(DQ),
          AQ = KL(kQ),
          tQ = zL(kQ),
          eQ = KL(vQ),
          MQ = zL(vQ),
          GQ = {
            a: function(QQ) {
              return DQ[QQ.getDay()]
            },
            A: function(QQ) {
              return oQ[QQ.getDay()]
            },
            b: function(QQ) {
              return vQ[QQ.getMonth()]
            },
            B: function(QQ) {
              return kQ[QQ.getMonth()]
            },
            c: null,
            d: qq,
            e: qq,
            f: mq,
            g: pq,
            G: Cq,
            H: oq,
            I: Dq,
            j: kq,
            L: vq,
            m: uq,
            M: Hq,
            p: function(QQ) {
              return qQ[+(QQ.getHours() >= 12)]
            },
            q: function(QQ) {
              return 1 + ~~(QQ.getMonth() / 3)
            },
            Q: nq,
            s: gq,
            S: bq,
            u: Yq,
            U: xq,
            V: tq,
            w: eq,
            W: Mq,
            x: null,
            X: null,
            y: Gq,
            Y: cq,
            Z: Sq,
            "%": Eq
          },
          pQ = {
            a: function(QQ) {
              return DQ[QQ.getUTCDay()]
            },
            A: function(QQ) {
              return oQ[QQ.getUTCDay()]
            },
            b: function(QQ) {
              return vQ[QQ.getUTCMonth()]
            },
            B: function(QQ) {
              return kQ[QQ.getUTCMonth()]
            },
            c: null,
            d: iq,
            e: iq,
            f: rq,
            g: fq,
            G: hq,
            H: Wq,
            I: Rq,
            j: Oq,
            L: sq,
            m: Iq,
            M: Uq,
            p: function(QQ) {
              return qQ[+(QQ.getUTCHours() >= 12)]
            },
            q: function(QQ) {
              return 1 + ~~(QQ.getUTCMonth() / 3)
            },
            Q: nq,
            s: gq,
            S: Nq,
            u: Tq,
            U: Kq,
            V: lq,
            w: jq,
            W: aq,
            x: null,
            X: null,
            y: Xq,
            Y: Vq,
            Z: Jq,
            "%": Eq
          },
          cQ = {
            a: function(QQ, FQ, wQ) {
              var LQ = YQ.exec(FQ.slice(wQ));
              return LQ ? (QQ.w = xQ.get(LQ[0].toLowerCase()), wQ + LQ[0].length) : -1
            },
            A: function(QQ, FQ, wQ) {
              var LQ = HQ.exec(FQ.slice(wQ));
              return LQ ? (QQ.w = bQ.get(LQ[0].toLowerCase()), wQ + LQ[0].length) : -1
            },
            b: function(QQ, FQ, wQ) {
              var LQ = eQ.exec(FQ.slice(wQ));
              return LQ ? (QQ.m = MQ.get(LQ[0].toLowerCase()), wQ + LQ[0].length) : -1
            },
            B: function(QQ, FQ, wQ) {
              var LQ = AQ.exec(FQ.slice(wQ));
              return LQ ? (QQ.m = tQ.get(LQ[0].toLowerCase()), wQ + LQ[0].length) : -1
            },
            c: function(QQ, wQ, LQ) {
              return iQ(QQ, FQ, wQ, LQ)
            },
            d: gL,
            e: gL,
            f: Qq,
            g: hL,
            G: VL,
            H: ZL,
            I: ZL,
            j: PL,
            L: dL,
            m: nL,
            M: yL,
            p: function(QQ, FQ, wQ) {
              var LQ = mQ.exec(FQ.slice(wQ));
              return LQ ? (QQ.p = uQ.get(LQ[0].toLowerCase()), wQ + LQ[0].length) : -1
            },
            q: EL,
            Q: wq,
            s: Lq,
            S: BL,
            u: jL,
            U: aL,
            V: XL,
            w: lL,
            W: fL,
            x: function(QQ, FQ, LQ) {
              return iQ(QQ, wQ, FQ, LQ)
            },
            X: function(QQ, FQ, wQ) {
              return iQ(QQ, LQ, FQ, wQ)
            },
            y: hL,
            Y: VL,
            Z: JL,
            "%": Fq
          };

        function CQ(QQ, FQ) {
          return function(wQ) {
            var LQ, qQ, oQ, DQ = [],
              kQ = -1,
              vQ = 0,
              mQ = QQ.length;
            for (wQ instanceof Date || (wQ = new Date(+wQ)); ++kQ < mQ;) 37 === QQ.charCodeAt(kQ) && (DQ.push(QQ.slice(vQ, kQ)), null != (qQ = sL[LQ = QQ.charAt(++kQ)]) ? LQ = QQ.charAt(++kQ) : qQ = "e" === LQ ? " " : "0", (oQ = FQ[LQ]) && (LQ = oQ(wQ, qQ)), DQ.push(LQ), vQ = kQ + 1);
            return DQ.push(QQ.slice(vQ, kQ)), DQ.join("")
          }
        }

        function SQ(QQ, FQ) {
          return function(wQ) {
            var LQ, qQ, oQ = iL(1900, void 0, 1);
            if (iQ(oQ, QQ, wQ += "", 0) != wQ.length) return null;
            if ("Q" in oQ) return new Date(oQ.Q);
            if ("s" in oQ) return new Date(1e3 * oQ.s + ("L" in oQ ? oQ.L : 0));
            if (FQ && !("Z" in oQ) && (oQ.Z = 0), "p" in oQ && (oQ.H = oQ.H % 12 + 12 * oQ.p), void 0 === oQ.m && (oQ.m = "q" in oQ ? oQ.q : 0), "V" in oQ) {
              if (oQ.V < 1 || oQ.V > 53) return null;
              "w" in oQ || (oQ.w = 1), "Z" in oQ ? (qQ = (LQ = SL(iL(oQ.y, 0, 1))).getUTCDay(), LQ = qQ > 4 || 0 === qQ ? kL.ceil(LQ) : kL(LQ), LQ = Pw.offset(LQ, 7 * (oQ.V - 1)), oQ.y = LQ.getUTCFullYear(), oQ.m = LQ.getUTCMonth(), oQ.d = LQ.getUTCDate() + (oQ.w + 6) % 7) : (qQ = (LQ = CL(iL(oQ.y, 0, 1))).getDay(), LQ = qQ > 4 || 0 === qQ ? dw.ceil(LQ) : dw(LQ), LQ = gw.offset(LQ, 7 * (oQ.V - 1)), oQ.y = LQ.getFullYear(), oQ.m = LQ.getMonth(), oQ.d = LQ.getDate() + (oQ.w + 6) % 7)
            } else("W" in oQ || "U" in oQ) && ("w" in oQ || (oQ.w = "u" in oQ ? oQ.u % 7 : "W" in oQ ? 1 : 0), qQ = "Z" in oQ ? SL(iL(oQ.y, 0, 1)).getUTCDay() : CL(iL(oQ.y, 0, 1)).getDay(), oQ.m = 0, oQ.d = "W" in oQ ? (oQ.w + 6) % 7 + 7 * oQ.W - (qQ + 5) % 7 : oQ.w + 7 * oQ.U - (qQ + 6) % 7);
            return "Z" in oQ ? (oQ.H += oQ.Z / 100 | 0, oQ.M += oQ.Z % 100, SL(oQ)) : CL(oQ)
          }
        }

        function iQ(QQ, FQ, wQ, LQ) {
          for (var qQ, oQ, DQ = 0, kQ = FQ.length, vQ = wQ.length; DQ < kQ;) {
            if (LQ >= vQ) return -1;
            if (37 === (qQ = FQ.charCodeAt(DQ++))) {
              if (qQ = FQ.charAt(DQ++), !(oQ = cQ[qQ in sL ? FQ.charAt(DQ++) : qQ]) || (LQ = oQ(QQ, wQ, LQ)) < 0) return -1
            } else if (qQ != wQ.charCodeAt(LQ++)) return -1
          }
          return LQ
        }
        return GQ.x = CQ(wQ, GQ), GQ.X = CQ(LQ, GQ), GQ.c = CQ(FQ, GQ), pQ.x = CQ(wQ, pQ), pQ.X = CQ(LQ, pQ), pQ.c = CQ(FQ, pQ), {
          format: function(QQ) {
            var FQ = CQ(QQ += "", GQ);
            return FQ.toString = function() {
              return QQ
            }, FQ
          },
          parse: function(QQ) {
            var FQ = SQ(QQ += "", !1);
            return FQ.toString = function() {
              return QQ
            }, FQ
          },
          utcFormat: function(QQ) {
            var FQ = CQ(QQ += "", pQ);
            return FQ.toString = function() {
              return QQ
            }, FQ
          },
          utcParse: function(QQ) {
            var FQ = SQ(QQ += "", !0);
            return FQ.toString = function() {
              return QQ
            }, FQ
          }
        }
      }(QQ), RL = WL.format, WL.parse, OL = WL.utcFormat, WL.utcParse
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
    var Ao = wQ(6046),
      to = wQ(5945);

    function eo(QQ) {
      for (var FQ = QQ.length, wQ = new Array(FQ); --FQ >= 0;) wQ[FQ] = FQ;
      return wQ
    }

    function Mo(QQ, FQ) {
      return QQ[FQ]
    }

    function Go(QQ) {
      const FQ = [];
      return FQ.key = QQ, FQ
    }
    var po = wQ(5997),
      co = wQ.n(po),
      Co = wQ(6012),
      So = wQ.n(Co),
      io = wQ(5240),
      Wo = wQ.n(io),
      Ro = wQ(5095),
      Oo = wQ.n(Ro),
      so = wQ(5005),
      ro = wQ.n(so),
      Io = wQ(5021),
      Uo = wQ.n(Io),
      No = wQ(6021),
      To = wQ.n(No),
      Ko = wQ(5011),
      zo = wQ.n(Ko),
      jo = wQ(5902),
      ao = wQ.n(jo),
      Xo = wQ(6036),
      fo = wQ.n(Xo),
      Vo = wQ(5345),
      ho = wQ.n(Vo),
      Jo = wQ(6038),
      Eo = wQ.n(Jo);

    function no(QQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return go(QQ)
      }(QQ) || function(QQ) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(QQ)) return Array.from(QQ)
      }(QQ) || function(QQ, FQ) {
        if (!QQ) return;
        if ("string" === typeof QQ) return go(QQ, FQ);
        var wQ = Object.prototype.toString.call(QQ).slice(8, -1);
        "Object" === wQ && QQ.constructor && (wQ = QQ.constructor.name);
        if ("Map" === wQ || "Set" === wQ) return Array.from(QQ);
        if ("Arguments" === wQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wQ)) return go(QQ, FQ)
      }(QQ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function go(QQ, FQ) {
      (null == FQ || FQ > QQ.length) && (FQ = QQ.length);
      for (var wQ = 0, LQ = new Array(FQ); wQ < FQ; wQ++) LQ[wQ] = QQ[wQ];
      return LQ
    }
    var Po = function(QQ) {
        return QQ
      },
      Zo = {
        "@@functional/placeholder": !0
      },
      yo = function(QQ) {
        return QQ === Zo
      },
      Bo = function(QQ) {
        return function FQ() {
          return 0 === arguments.length || 1 === arguments.length && yo(arguments.length <= 0 ? void 0 : arguments[0]) ? FQ : QQ.apply(void 0, arguments)
        }
      },
      QD = function QQ(FQ, wQ) {
        return 1 === FQ ? wQ : Bo((function() {
          for (var LQ = arguments.length, qQ = new Array(LQ), oQ = 0; oQ < LQ; oQ++) qQ[oQ] = arguments[oQ];
          var DQ = qQ.filter((function(QQ) {
            return QQ !== Zo
          })).length;
          return DQ >= FQ ? wQ.apply(void 0, qQ) : QQ(FQ - DQ, Bo((function() {
            for (var QQ = arguments.length, FQ = new Array(QQ), LQ = 0; LQ < QQ; LQ++) FQ[LQ] = arguments[LQ];
            var oQ = qQ.map((function(QQ) {
              return yo(QQ) ? FQ.shift() : QQ
            }));
            return wQ.apply(void 0, no(oQ).concat(FQ))
          })))
        }))
      },
      FD = function(QQ) {
        return QD(QQ.length, QQ)
      },
      wD = function(QQ, FQ) {
        for (var wQ = [], LQ = QQ; LQ < FQ; ++LQ) wQ[LQ - QQ] = LQ;
        return wQ
      },
      LD = FD((function(QQ, FQ) {
        return Array.isArray(FQ) ? FQ.map(QQ) : Object.keys(FQ).map((function(QQ) {
          return FQ[QQ]
        })).map(QQ)
      })),
      qD = function() {
        for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
        if (!FQ.length) return Po;
        var LQ = FQ.reverse(),
          qQ = LQ[0],
          oQ = LQ.slice(1);
        return function() {
          return oQ.reduce((function(QQ, FQ) {
            return FQ(QQ)
          }), qQ.apply(void 0, arguments))
        }
      },
      oD = function(QQ) {
        return Array.isArray(QQ) ? QQ.reverse() : QQ.split("").reverse.join("")
      },
      DD = function(QQ) {
        var FQ = null,
          wQ = null;
        return function() {
          for (var LQ = arguments.length, qQ = new Array(LQ), oQ = 0; oQ < LQ; oQ++) qQ[oQ] = arguments[oQ];
          return FQ && qQ.every((function(QQ, wQ) {
            return QQ === FQ[wQ]
          })) ? wQ : (FQ = qQ, wQ = QQ.apply(void 0, qQ))
        }
      };
    const kD = {
      rangeStep: function(QQ, FQ, wQ) {
        for (var LQ = new(Eo())(QQ), qQ = 0, oQ = []; LQ.lt(FQ) && qQ < 1e5;) oQ.push(LQ.toNumber()), LQ = LQ.add(wQ), qQ++;
        return oQ
      },
      getDigitCount: function(QQ) {
        return 0 === QQ ? 1 : Math.floor(new(Eo())(QQ).abs().log(10).toNumber()) + 1
      },
      interpolateNumber: FD((function(QQ, FQ, wQ) {
        var LQ = +QQ;
        return LQ + wQ * (+FQ - LQ)
      })),
      uninterpolateNumber: FD((function(QQ, FQ, wQ) {
        var LQ = FQ - +QQ;
        return (wQ - QQ) / (LQ = LQ || 1 / 0)
      })),
      uninterpolateTruncation: FD((function(QQ, FQ, wQ) {
        var LQ = FQ - +QQ;
        return LQ = LQ || 1 / 0, Math.max(0, Math.min(1, (wQ - QQ) / LQ))
      }))
    };

    function vD(QQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return HD(QQ)
      }(QQ) || function(QQ) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(QQ)) return Array.from(QQ)
      }(QQ) || uD(QQ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function mD(QQ, FQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return QQ
      }(QQ) || function(QQ, FQ) {
        if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(QQ))) return;
        var wQ = [],
          LQ = !0,
          qQ = !1,
          oQ = void 0;
        try {
          for (var DQ, kQ = QQ[Symbol.iterator](); !(LQ = (DQ = kQ.next()).done) && (wQ.push(DQ.value), !FQ || wQ.length !== FQ); LQ = !0);
        } catch (vQ) {
          qQ = !0, oQ = vQ
        } finally {
          try {
            LQ || null == kQ.return || kQ.return()
          } finally {
            if (qQ) throw oQ
          }
        }
        return wQ
      }(QQ, FQ) || uD(QQ, FQ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function uD(QQ, FQ) {
      if (QQ) {
        if ("string" === typeof QQ) return HD(QQ, FQ);
        var wQ = Object.prototype.toString.call(QQ).slice(8, -1);
        return "Object" === wQ && QQ.constructor && (wQ = QQ.constructor.name), "Map" === wQ || "Set" === wQ ? Array.from(QQ) : "Arguments" === wQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wQ) ? HD(QQ, FQ) : void 0
      }
    }

    function HD(QQ, FQ) {
      (null == FQ || FQ > QQ.length) && (FQ = QQ.length);
      for (var wQ = 0, LQ = new Array(FQ); wQ < FQ; wQ++) LQ[wQ] = QQ[wQ];
      return LQ
    }

    function bD(QQ) {
      var FQ = mD(QQ, 2),
        wQ = FQ[0],
        LQ = FQ[1],
        qQ = wQ,
        oQ = LQ;
      return wQ > LQ && (qQ = LQ, oQ = wQ), [qQ, oQ]
    }

    function YD(QQ, FQ, wQ) {
      if (QQ.lte(0)) return new(Eo())(0);
      var LQ = kD.getDigitCount(QQ.toNumber()),
        qQ = new(Eo())(10).pow(LQ),
        oQ = QQ.div(qQ),
        DQ = 1 !== LQ ? .05 : .1,
        kQ = new(Eo())(Math.ceil(oQ.div(DQ).toNumber())).add(wQ).mul(DQ).mul(qQ);
      return FQ ? kQ : new(Eo())(Math.ceil(kQ))
    }

    function xD(QQ, FQ, wQ) {
      var LQ = 1,
        qQ = new(Eo())(QQ);
      if (!qQ.isint() && wQ) {
        var oQ = Math.abs(QQ);
        oQ < 1 ? (LQ = new(Eo())(10).pow(kD.getDigitCount(QQ) - 1), qQ = new(Eo())(Math.floor(qQ.div(LQ).toNumber())).mul(LQ)) : oQ > 1 && (qQ = new(Eo())(Math.floor(QQ)))
      } else 0 === QQ ? qQ = new(Eo())(Math.floor((FQ - 1) / 2)) : wQ || (qQ = new(Eo())(Math.floor(QQ)));
      var DQ = Math.floor((FQ - 1) / 2);
      return qD(LD((function(QQ) {
        return qQ.add(new(Eo())(QQ - DQ).mul(LQ)).toNumber()
      })), wD)(0, FQ)
    }

    function AD(QQ, FQ, wQ, LQ) {
      var qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      if (!Number.isFinite((FQ - QQ) / (wQ - 1))) return {
        step: new(Eo())(0),
        tickMin: new(Eo())(0),
        tickMax: new(Eo())(0)
      };
      var oQ, DQ = YD(new(Eo())(FQ).sub(QQ).div(wQ - 1), LQ, qQ);
      oQ = QQ <= 0 && FQ >= 0 ? new(Eo())(0) : (oQ = new(Eo())(QQ).add(FQ).div(2)).sub(new(Eo())(oQ).mod(DQ));
      var kQ = Math.ceil(oQ.sub(QQ).div(DQ).toNumber()),
        vQ = Math.ceil(new(Eo())(FQ).sub(oQ).div(DQ).toNumber()),
        mQ = kQ + vQ + 1;
      return mQ > wQ ? AD(QQ, FQ, wQ, LQ, qQ + 1) : (mQ < wQ && (vQ = FQ > 0 ? vQ + (wQ - mQ) : vQ, kQ = FQ > 0 ? kQ : kQ + (wQ - mQ)), {
        step: DQ,
        tickMin: oQ.sub(new(Eo())(kQ).mul(DQ)),
        tickMax: oQ.add(new(Eo())(vQ).mul(DQ))
      })
    }
    var tD = DD((function(QQ) {
        var FQ = mD(QQ, 2),
          wQ = FQ[0],
          LQ = FQ[1],
          qQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          oQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          DQ = Math.max(qQ, 2),
          kQ = mD(bD([wQ, LQ]), 2),
          vQ = kQ[0],
          mQ = kQ[1];
        if (vQ === -1 / 0 || mQ === 1 / 0) {
          var uQ = mQ === 1 / 0 ? [vQ].concat(vD(wD(0, qQ - 1).map((function() {
            return 1 / 0
          })))) : [].concat(vD(wD(0, qQ - 1).map((function() {
            return -1 / 0
          }))), [mQ]);
          return wQ > LQ ? oD(uQ) : uQ
        }
        if (vQ === mQ) return xD(vQ, qQ, oQ);
        var HQ = AD(vQ, mQ, DQ, oQ),
          bQ = HQ.step,
          YQ = HQ.tickMin,
          xQ = HQ.tickMax,
          AQ = kD.rangeStep(YQ, xQ.add(new(Eo())(.1).mul(bQ)), bQ);
        return wQ > LQ ? oD(AQ) : AQ
      })),
      eD = (DD((function(QQ) {
        var FQ = mD(QQ, 2),
          wQ = FQ[0],
          LQ = FQ[1],
          qQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          oQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          DQ = Math.max(qQ, 2),
          kQ = mD(bD([wQ, LQ]), 2),
          vQ = kQ[0],
          mQ = kQ[1];
        if (vQ === -1 / 0 || mQ === 1 / 0) return [wQ, LQ];
        if (vQ === mQ) return xD(vQ, qQ, oQ);
        var uQ = YD(new(Eo())(mQ).sub(vQ).div(DQ - 1), oQ, 0),
          HQ = qD(LD((function(QQ) {
            return new(Eo())(vQ).add(new(Eo())(QQ).mul(uQ)).toNumber()
          })), wD)(0, DQ).filter((function(QQ) {
            return QQ >= vQ && QQ <= mQ
          }));
        return wQ > LQ ? oD(HQ) : HQ
      })), DD((function(QQ, FQ) {
        var wQ = mD(QQ, 2),
          LQ = wQ[0],
          qQ = wQ[1],
          oQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          DQ = mD(bD([LQ, qQ]), 2),
          kQ = DQ[0],
          vQ = DQ[1];
        if (kQ === -1 / 0 || vQ === 1 / 0) return [LQ, qQ];
        if (kQ === vQ) return [kQ];
        var mQ = Math.max(FQ, 2),
          uQ = YD(new(Eo())(vQ).sub(kQ).div(mQ - 1), oQ, 0),
          HQ = [].concat(vD(kD.rangeStep(new(Eo())(kQ), new(Eo())(vQ).sub(new(Eo())(.99).mul(uQ)), uQ)), [vQ]);
        return LQ > qQ ? oD(HQ) : HQ
      }))),
      MD = wQ(6041),
      GD = wQ(5002),
      pD = wQ(5252),
      cD = wQ(6044);

    function CD(QQ) {
      return CD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, CD(QQ)
    }

    function SD(QQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return iD(QQ)
      }(QQ) || function(QQ) {
        if ("undefined" !== typeof Symbol && null != QQ[Symbol.iterator] || null != QQ["@@iterator"]) return Array.from(QQ)
      }(QQ) || function(QQ, FQ) {
        if (!QQ) return;
        if ("string" === typeof QQ) return iD(QQ, FQ);
        var wQ = Object.prototype.toString.call(QQ).slice(8, -1);
        "Object" === wQ && QQ.constructor && (wQ = QQ.constructor.name);
        if ("Map" === wQ || "Set" === wQ) return Array.from(QQ);
        if ("Arguments" === wQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wQ)) return iD(QQ, FQ)
      }(QQ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function iD(QQ, FQ) {
      (null == FQ || FQ > QQ.length) && (FQ = QQ.length);
      for (var wQ = 0, LQ = new Array(FQ); wQ < FQ; wQ++) LQ[wQ] = QQ[wQ];
      return LQ
    }

    function WD(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function RD(QQ) {
      for (var FQ = 1; FQ < arguments.length; FQ++) {
        var wQ = null != arguments[FQ] ? arguments[FQ] : {};
        FQ % 2 ? WD(Object(wQ), !0).forEach((function(FQ) {
          OD(QQ, FQ, wQ[FQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : WD(Object(wQ)).forEach((function(FQ) {
          Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
        }))
      }
      return QQ
    }

    function OD(QQ, FQ, wQ) {
      return (FQ = function(QQ) {
        var FQ = function(QQ, FQ) {
          if ("object" != CD(QQ) || !QQ) return QQ;
          var wQ = QQ[Symbol.toPrimitive];
          if (void 0 !== wQ) {
            var LQ = wQ.call(QQ, FQ || "default");
            if ("object" != CD(LQ)) return LQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === FQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == CD(FQ) ? FQ : FQ + ""
      }(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }

    function sD(QQ, FQ, wQ) {
      return Wo()(QQ) || Wo()(FQ) ? wQ : (0, GD.s)(FQ) ? Uo()(QQ, FQ, wQ) : Oo()(FQ) ? FQ(QQ) : wQ
    }

    function rD(QQ, FQ, wQ, LQ) {
      var qQ = To()(QQ, (function(QQ) {
        return sD(QQ, FQ)
      }));
      if ("number" === wQ) {
        var oQ = qQ.filter((function(QQ) {
          return (0, GD.t)(QQ) || parseFloat(QQ)
        }));
        return oQ.length ? [So()(oQ), co()(oQ)] : [1 / 0, -1 / 0]
      }
      return (LQ ? qQ.filter((function(QQ) {
        return !Wo()(QQ)
      })) : qQ).map((function(QQ) {
        return (0, GD.s)(QQ) || QQ instanceof Date ? QQ : ""
      }))
    }
    var ID = function(QQ) {
        var FQ, wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          LQ = arguments.length > 2 ? arguments[2] : void 0,
          qQ = arguments.length > 3 ? arguments[3] : void 0,
          oQ = -1,
          DQ = null !== (FQ = null === wQ || void 0 === wQ ? void 0 : wQ.length) && void 0 !== FQ ? FQ : 0;
        if (DQ <= 1) return 0;
        if (qQ && "angleAxis" === qQ.axisType && Math.abs(Math.abs(qQ.range[1] - qQ.range[0]) - 360) <= 1e-6)
          for (var kQ = qQ.range, vQ = 0; vQ < DQ; vQ++) {
            var mQ = vQ > 0 ? LQ[vQ - 1].coordinate : LQ[DQ - 1].coordinate,
              uQ = LQ[vQ].coordinate,
              HQ = vQ >= DQ - 1 ? LQ[0].coordinate : LQ[vQ + 1].coordinate,
              bQ = void 0;
            if ((0, GD.z)(uQ - mQ) !== (0, GD.z)(HQ - uQ)) {
              var YQ = [];
              if ((0, GD.z)(HQ - uQ) === (0, GD.z)(kQ[1] - kQ[0])) {
                bQ = HQ;
                var xQ = uQ + kQ[1] - kQ[0];
                YQ[0] = Math.min(xQ, (xQ + mQ) / 2), YQ[1] = Math.max(xQ, (xQ + mQ) / 2)
              } else {
                bQ = mQ;
                var AQ = HQ + kQ[1] - kQ[0];
                YQ[0] = Math.min(uQ, (AQ + uQ) / 2), YQ[1] = Math.max(uQ, (AQ + uQ) / 2)
              }
              var tQ = [Math.min(uQ, (bQ + uQ) / 2), Math.max(uQ, (bQ + uQ) / 2)];
              if (QQ > tQ[0] && QQ <= tQ[1] || QQ >= YQ[0] && QQ <= YQ[1]) {
                oQ = LQ[vQ].index;
                break
              }
            } else {
              var eQ = Math.min(mQ, HQ),
                MQ = Math.max(mQ, HQ);
              if (QQ > (eQ + uQ) / 2 && QQ <= (MQ + uQ) / 2) {
                oQ = LQ[vQ].index;
                break
              }
            }
          } else
            for (var GQ = 0; GQ < DQ; GQ++)
              if (0 === GQ && QQ <= (wQ[GQ].coordinate + wQ[GQ + 1].coordinate) / 2 || GQ > 0 && GQ < DQ - 1 && QQ > (wQ[GQ].coordinate + wQ[GQ - 1].coordinate) / 2 && QQ <= (wQ[GQ].coordinate + wQ[GQ + 1].coordinate) / 2 || GQ === DQ - 1 && QQ > (wQ[GQ].coordinate + wQ[GQ - 1].coordinate) / 2) {
                oQ = wQ[GQ].index;
                break
              } return oQ
      },
      UD = function(QQ) {
        var FQ, wQ, LQ = QQ.type.displayName,
          qQ = null !== (FQ = QQ.type) && void 0 !== FQ && FQ.defaultProps ? RD(RD({}, QQ.type.defaultProps), QQ.props) : QQ.props,
          oQ = qQ.stroke,
          DQ = qQ.fill;
        switch (LQ) {
          case "Line":
            wQ = oQ;
            break;
          case "Area":
          case "Radar":
            wQ = oQ && "none" !== oQ ? oQ : DQ;
            break;
          default:
            wQ = DQ
        }
        return wQ
      },
      ND = function(QQ) {
        var FQ = QQ.barSize,
          wQ = QQ.totalSize,
          LQ = QQ.stackGroups,
          qQ = void 0 === LQ ? {} : LQ;
        if (!qQ) return {};
        for (var oQ = {}, DQ = Object.keys(qQ), kQ = 0, vQ = DQ.length; kQ < vQ; kQ++)
          for (var mQ = qQ[DQ[kQ]].stackGroups, uQ = Object.keys(mQ), HQ = 0, bQ = uQ.length; HQ < bQ; HQ++) {
            var YQ = mQ[uQ[HQ]],
              xQ = YQ.items,
              AQ = YQ.cateAxisId,
              tQ = xQ.filter((function(QQ) {
                return (0, pD.p)(QQ.type).indexOf("Bar") >= 0
              }));
            if (tQ && tQ.length) {
              var eQ = tQ[0].type.defaultProps,
                MQ = void 0 !== eQ ? RD(RD({}, eQ), tQ[0].props) : tQ[0].props,
                GQ = MQ.barSize,
                pQ = MQ[AQ];
              oQ[pQ] || (oQ[pQ] = []);
              var cQ = Wo()(GQ) ? FQ : GQ;
              oQ[pQ].push({
                item: tQ[0],
                stackList: tQ.slice(1),
                barSize: Wo()(cQ) ? void 0 : (0, GD.k)(cQ, wQ, 0)
              })
            }
          }
        return oQ
      },
      TD = function(QQ) {
        var FQ = QQ.barGap,
          wQ = QQ.barCategoryGap,
          LQ = QQ.bandSize,
          qQ = QQ.sizeList,
          oQ = void 0 === qQ ? [] : qQ,
          DQ = QQ.maxBarSize,
          kQ = oQ.length;
        if (kQ < 1) return null;
        var vQ, mQ = (0, GD.k)(FQ, LQ, 0, !0),
          uQ = [];
        if (oQ[0].barSize === +oQ[0].barSize) {
          var HQ = !1,
            bQ = LQ / kQ,
            YQ = oQ.reduce((function(QQ, FQ) {
              return QQ + FQ.barSize || 0
            }), 0);
          (YQ += (kQ - 1) * mQ) >= LQ && (YQ -= (kQ - 1) * mQ, mQ = 0), YQ >= LQ && bQ > 0 && (HQ = !0, YQ = kQ * (bQ *= .9));
          var xQ = {
            offset: ((LQ - YQ) / 2 | 0) - mQ,
            size: 0
          };
          vQ = oQ.reduce((function(QQ, FQ) {
            var wQ = {
                item: FQ.item,
                position: {
                  offset: xQ.offset + xQ.size + mQ,
                  size: HQ ? bQ : FQ.barSize
                }
              },
              LQ = [].concat(SD(QQ), [wQ]);
            return xQ = LQ[LQ.length - 1].position, FQ.stackList && FQ.stackList.length && FQ.stackList.forEach((function(QQ) {
              LQ.push({
                item: QQ,
                position: xQ
              })
            })), LQ
          }), uQ)
        } else {
          var AQ = (0, GD.k)(wQ, LQ, 0, !0);
          LQ - 2 * AQ - (kQ - 1) * mQ <= 0 && (mQ = 0);
          var tQ = (LQ - 2 * AQ - (kQ - 1) * mQ) / kQ;
          tQ > 1 && (tQ >>= 0);
          var eQ = DQ === +DQ ? Math.min(tQ, DQ) : tQ;
          vQ = oQ.reduce((function(QQ, FQ, wQ) {
            var LQ = [].concat(SD(QQ), [{
              item: FQ.item,
              position: {
                offset: AQ + (tQ + mQ) * wQ + (tQ - eQ) / 2,
                size: eQ
              }
            }]);
            return FQ.stackList && FQ.stackList.length && FQ.stackList.forEach((function(QQ) {
              LQ.push({
                item: QQ,
                position: LQ[LQ.length - 1].position
              })
            })), LQ
          }), uQ)
        }
        return vQ
      },
      KD = function(QQ, FQ, wQ, LQ) {
        var qQ = wQ.children,
          oQ = wQ.width,
          DQ = wQ.margin,
          kQ = oQ - (DQ.left || 0) - (DQ.right || 0),
          vQ = (0, cD.b)({
            children: qQ,
            legendWidth: kQ
          });
        if (vQ) {
          var mQ = LQ || {},
            uQ = mQ.width,
            HQ = mQ.height,
            bQ = vQ.align,
            YQ = vQ.verticalAlign,
            xQ = vQ.layout;
          if (("vertical" === xQ || "horizontal" === xQ && "middle" === YQ) && "center" !== bQ && (0, GD.t)(QQ[bQ])) return RD(RD({}, QQ), {}, OD({}, bQ, QQ[bQ] + (uQ || 0)));
          if (("horizontal" === xQ || "vertical" === xQ && "center" === bQ) && "middle" !== YQ && (0, GD.t)(QQ[YQ])) return RD(RD({}, QQ), {}, OD({}, YQ, QQ[YQ] + (HQ || 0)))
        }
        return QQ
      },
      zD = function(QQ, FQ, wQ, LQ, qQ) {
        var oQ = FQ.props.children,
          DQ = (0, pD.i)(oQ, MD.d).filter((function(QQ) {
            return function(QQ, FQ, wQ) {
              return !!Wo()(FQ) || ("horizontal" === QQ ? "yAxis" === FQ : "vertical" === QQ || "x" === wQ ? "xAxis" === FQ : "y" !== wQ || "yAxis" === FQ)
            }(LQ, qQ, QQ.props.direction)
          }));
        if (DQ && DQ.length) {
          var kQ = DQ.map((function(QQ) {
            return QQ.props.dataKey
          }));
          return QQ.reduce((function(QQ, FQ) {
            var LQ = sD(FQ, wQ);
            if (Wo()(LQ)) return QQ;
            var qQ = Array.isArray(LQ) ? [So()(LQ), co()(LQ)] : [LQ, LQ],
              oQ = kQ.reduce((function(QQ, wQ) {
                var LQ = sD(FQ, wQ, 0),
                  oQ = qQ[0] - Math.abs(Array.isArray(LQ) ? LQ[0] : LQ),
                  DQ = qQ[1] + Math.abs(Array.isArray(LQ) ? LQ[1] : LQ);
                return [Math.min(oQ, QQ[0]), Math.max(DQ, QQ[1])]
              }), [1 / 0, -1 / 0]);
            return [Math.min(oQ[0], QQ[0]), Math.max(oQ[1], QQ[1])]
          }), [1 / 0, -1 / 0])
        }
        return null
      },
      lD = function(QQ, FQ, wQ, LQ, qQ) {
        var oQ = FQ.map((function(FQ) {
          return zD(QQ, FQ, wQ, qQ, LQ)
        })).filter((function(QQ) {
          return !Wo()(QQ)
        }));
        return oQ && oQ.length ? oQ.reduce((function(QQ, FQ) {
          return [Math.min(QQ[0], FQ[0]), Math.max(QQ[1], FQ[1])]
        }), [1 / 0, -1 / 0]) : null
      },
      jD = function(QQ, FQ, wQ, LQ, qQ) {
        var oQ = FQ.map((function(FQ) {
          var oQ = FQ.props.dataKey;
          return "number" === wQ && oQ && zD(QQ, FQ, oQ, LQ) || rD(QQ, oQ, wQ, qQ)
        }));
        if ("number" === wQ) return oQ.reduce((function(QQ, FQ) {
          return [Math.min(QQ[0], FQ[0]), Math.max(QQ[1], FQ[1])]
        }), [1 / 0, -1 / 0]);
        var DQ = {};
        return oQ.reduce((function(QQ, FQ) {
          for (var wQ = 0, LQ = FQ.length; wQ < LQ; wQ++) DQ[FQ[wQ]] || (DQ[FQ[wQ]] = !0, QQ.push(FQ[wQ]));
          return QQ
        }), [])
      },
      aD = function(QQ, FQ) {
        return "horizontal" === QQ && "xAxis" === FQ || "vertical" === QQ && "yAxis" === FQ || "centric" === QQ && "angleAxis" === FQ || "radial" === QQ && "radiusAxis" === FQ
      },
      XD = function(QQ, FQ, wQ, LQ) {
        if (LQ) return QQ.map((function(QQ) {
          return QQ.coordinate
        }));
        var qQ, oQ, DQ = QQ.map((function(QQ) {
          return QQ.coordinate === FQ && (qQ = !0), QQ.coordinate === wQ && (oQ = !0), QQ.coordinate
        }));
        return qQ || DQ.push(FQ), oQ || DQ.push(wQ), DQ
      },
      fD = function(QQ, FQ, wQ) {
        if (!QQ) return null;
        var LQ = QQ.scale,
          qQ = QQ.duplicateDomain,
          oQ = QQ.type,
          DQ = QQ.range,
          kQ = "scaleBand" === QQ.realScaleType ? LQ.bandwidth() / 2 : 2,
          vQ = (FQ || wQ) && "category" === oQ && LQ.bandwidth ? LQ.bandwidth() / kQ : 0;
        return vQ = "angleAxis" === QQ.axisType && (null === DQ || void 0 === DQ ? void 0 : DQ.length) >= 2 ? 2 * (0, GD.z)(DQ[0] - DQ[1]) * vQ : vQ, FQ && (QQ.ticks || QQ.niceTicks) ? (QQ.ticks || QQ.niceTicks).map((function(QQ) {
          var FQ = qQ ? qQ.indexOf(QQ) : QQ;
          return {
            coordinate: LQ(FQ) + vQ,
            value: QQ,
            offset: vQ
          }
        })).filter((function(QQ) {
          return !zo()(QQ.coordinate)
        })) : QQ.isCategorical && QQ.categoricalDomain ? QQ.categoricalDomain.map((function(QQ, FQ) {
          return {
            coordinate: LQ(QQ) + vQ,
            value: QQ,
            index: FQ,
            offset: vQ
          }
        })) : LQ.ticks && !wQ ? LQ.ticks(QQ.tickCount).map((function(QQ) {
          return {
            coordinate: LQ(QQ) + vQ,
            value: QQ,
            offset: vQ
          }
        })) : LQ.domain().map((function(QQ, FQ) {
          return {
            coordinate: LQ(QQ) + vQ,
            value: qQ ? qQ[QQ] : QQ,
            index: FQ,
            offset: vQ
          }
        }))
      },
      VD = new WeakMap,
      hD = function(QQ, FQ) {
        if ("function" !== typeof FQ) return QQ;
        VD.has(QQ) || VD.set(QQ, new WeakMap);
        var wQ = VD.get(QQ);
        if (wQ.has(FQ)) return wQ.get(FQ);
        var LQ = function() {
          QQ.apply(void 0, arguments), FQ.apply(void 0, arguments)
        };
        return wQ.set(FQ, LQ), LQ
      },
      JD = function(QQ, FQ, wQ) {
        var oQ = QQ.scale,
          DQ = QQ.type,
          kQ = QQ.layout,
          vQ = QQ.axisType;
        if ("auto" === oQ) return "radial" === kQ && "radiusAxis" === vQ ? {
          scale: qQ.d(),
          realScaleType: "band"
        } : "radial" === kQ && "angleAxis" === vQ ? {
          scale: gF(),
          realScaleType: "linear"
        } : "category" === DQ && FQ && (FQ.indexOf("LineChart") >= 0 || FQ.indexOf("AreaChart") >= 0 || FQ.indexOf("ComposedChart") >= 0 && !wQ) ? {
          scale: qQ.e(),
          realScaleType: "point"
        } : "category" === DQ ? {
          scale: qQ.d(),
          realScaleType: "band"
        } : {
          scale: gF(),
          realScaleType: "linear"
        };
        if (ro()(oQ)) {
          var mQ = "scale".concat(ao()(oQ));
          return {
            scale: (LQ[mQ] || qQ.e)(),
            realScaleType: LQ[mQ] ? mQ : "point"
          }
        }
        return Oo()(oQ) ? {
          scale: oQ
        } : {
          scale: qQ.e(),
          realScaleType: "point"
        }
      },
      ED = 1e-4,
      nD = function(QQ) {
        var FQ = QQ.domain();
        if (FQ && !(FQ.length <= 2)) {
          var wQ = FQ.length,
            LQ = QQ.range(),
            qQ = Math.min(LQ[0], LQ[1]) - ED,
            oQ = Math.max(LQ[0], LQ[1]) + ED,
            DQ = QQ(FQ[0]),
            kQ = QQ(FQ[wQ - 1]);
          (DQ < qQ || DQ > oQ || kQ < qQ || kQ > oQ) && QQ.domain([FQ[0], FQ[wQ - 1]])
        }
      },
      gD = function(QQ, FQ) {
        if (!QQ) return null;
        for (var wQ = 0, LQ = QQ.length; wQ < LQ; wQ++)
          if (QQ[wQ].item === FQ) return QQ[wQ].position;
        return null
      },
      PD = function(QQ, FQ) {
        if (!FQ || 2 !== FQ.length || !(0, GD.t)(FQ[0]) || !(0, GD.t)(FQ[1])) return QQ;
        var wQ = Math.min(FQ[0], FQ[1]),
          LQ = Math.max(FQ[0], FQ[1]),
          qQ = [QQ[0], QQ[1]];
        return (!(0, GD.t)(QQ[0]) || QQ[0] < wQ) && (qQ[0] = wQ), (!(0, GD.t)(QQ[1]) || QQ[1] > LQ) && (qQ[1] = LQ), qQ[0] > LQ && (qQ[0] = LQ), qQ[1] < wQ && (qQ[1] = wQ), qQ
      },
      ZD = {
        sign: function(QQ) {
          var FQ = QQ.length;
          if (!(FQ <= 0))
            for (var wQ = 0, LQ = QQ[0].length; wQ < LQ; ++wQ)
              for (var qQ = 0, oQ = 0, DQ = 0; DQ < FQ; ++DQ) {
                var kQ = zo()(QQ[DQ][wQ][1]) ? QQ[DQ][wQ][0] : QQ[DQ][wQ][1];
                kQ >= 0 ? (QQ[DQ][wQ][0] = qQ, QQ[DQ][wQ][1] = qQ + kQ, qQ = QQ[DQ][wQ][1]) : (QQ[DQ][wQ][0] = oQ, QQ[DQ][wQ][1] = oQ + kQ, oQ = QQ[DQ][wQ][1])
              }
        },
        expand: function(QQ, FQ) {
          if ((LQ = QQ.length) > 0) {
            for (var wQ, LQ, qQ, oQ = 0, DQ = QQ[0].length; oQ < DQ; ++oQ) {
              for (qQ = wQ = 0; wQ < LQ; ++wQ) qQ += QQ[wQ][oQ][1] || 0;
              if (qQ)
                for (wQ = 0; wQ < LQ; ++wQ) QQ[wQ][oQ][1] /= qQ
            }
            xo(QQ, FQ)
          }
        },
        none: xo,
        silhouette: function(QQ, FQ) {
          if ((wQ = QQ.length) > 0) {
            for (var wQ, LQ = 0, qQ = QQ[FQ[0]], oQ = qQ.length; LQ < oQ; ++LQ) {
              for (var DQ = 0, kQ = 0; DQ < wQ; ++DQ) kQ += QQ[DQ][LQ][1] || 0;
              qQ[LQ][1] += qQ[LQ][0] = -kQ / 2
            }
            xo(QQ, FQ)
          }
        },
        wiggle: function(QQ, FQ) {
          if ((qQ = QQ.length) > 0 && (LQ = (wQ = QQ[FQ[0]]).length) > 0) {
            for (var wQ, LQ, qQ, oQ = 0, DQ = 1; DQ < LQ; ++DQ) {
              for (var kQ = 0, vQ = 0, mQ = 0; kQ < qQ; ++kQ) {
                for (var uQ = QQ[FQ[kQ]], HQ = uQ[DQ][1] || 0, bQ = (HQ - (uQ[DQ - 1][1] || 0)) / 2, YQ = 0; YQ < kQ; ++YQ) {
                  var xQ = QQ[FQ[YQ]];
                  bQ += (xQ[DQ][1] || 0) - (xQ[DQ - 1][1] || 0)
                }
                vQ += HQ, mQ += bQ * HQ
              }
              wQ[DQ - 1][1] += wQ[DQ - 1][0] = oQ, vQ && (oQ -= mQ / vQ)
            }
            wQ[DQ - 1][1] += wQ[DQ - 1][0] = oQ, xo(QQ, FQ)
          }
        },
        positive: function(QQ) {
          var FQ = QQ.length;
          if (!(FQ <= 0))
            for (var wQ = 0, LQ = QQ[0].length; wQ < LQ; ++wQ)
              for (var qQ = 0, oQ = 0; oQ < FQ; ++oQ) {
                var DQ = zo()(QQ[oQ][wQ][1]) ? QQ[oQ][wQ][0] : QQ[oQ][wQ][1];
                DQ >= 0 ? (QQ[oQ][wQ][0] = qQ, QQ[oQ][wQ][1] = qQ + DQ, qQ = QQ[oQ][wQ][1]) : (QQ[oQ][wQ][0] = 0, QQ[oQ][wQ][1] = 0)
              }
        }
      },
      yD = function(QQ, FQ, wQ) {
        var LQ = FQ.map((function(QQ) {
            return QQ.props.dataKey
          })),
          qQ = ZD[wQ],
          oQ = function() {
            var QQ = (0, to.e)([]),
              FQ = eo,
              wQ = xo,
              LQ = Mo;

            function qQ(qQ) {
              var oQ, DQ, kQ = Array.from(QQ.apply(this, arguments), Go),
                vQ = kQ.length,
                mQ = -1;
              for (const QQ of qQ)
                for (oQ = 0, ++mQ; oQ < vQ; ++oQ)(kQ[oQ][mQ] = [0, +LQ(QQ, kQ[oQ].key, mQ, qQ)]).data = QQ;
              for (oQ = 0, DQ = (0, Ao.b)(FQ(kQ)); oQ < vQ; ++oQ) kQ[DQ[oQ]].index = oQ;
              return wQ(kQ, DQ), kQ
            }
            return qQ.keys = function(FQ) {
              return arguments.length ? (QQ = "function" === typeof FQ ? FQ : (0, to.e)(Array.from(FQ)), qQ) : QQ
            }, qQ.value = function(QQ) {
              return arguments.length ? (LQ = "function" === typeof QQ ? QQ : (0, to.e)(+QQ), qQ) : LQ
            }, qQ.order = function(QQ) {
              return arguments.length ? (FQ = null == QQ ? eo : "function" === typeof QQ ? QQ : (0, to.e)(Array.from(QQ)), qQ) : FQ
            }, qQ.offset = function(QQ) {
              return arguments.length ? (wQ = null == QQ ? xo : QQ, qQ) : wQ
            }, qQ
          }().keys(LQ).value((function(QQ, FQ) {
            return +sD(QQ, FQ, 0)
          })).order(eo).offset(qQ);
        return oQ(QQ)
      },
      BD = function(QQ, FQ, wQ, LQ, qQ, oQ) {
        if (!QQ) return null;
        var DQ = (oQ ? FQ.reverse() : FQ).reduce((function(QQ, FQ) {
          var qQ, oQ = null !== (qQ = FQ.type) && void 0 !== qQ && qQ.defaultProps ? RD(RD({}, FQ.type.defaultProps), FQ.props) : FQ.props,
            DQ = oQ.stackId;
          if (oQ.hide) return QQ;
          var kQ = oQ[wQ],
            vQ = QQ[kQ] || {
              hasStack: !1,
              stackGroups: {}
            };
          if ((0, GD.s)(DQ)) {
            var mQ = vQ.stackGroups[DQ] || {
              numericAxisId: wQ,
              cateAxisId: LQ,
              items: []
            };
            mQ.items.push(FQ), vQ.hasStack = !0, vQ.stackGroups[DQ] = mQ
          } else vQ.stackGroups[(0, GD.C)("_stackId_")] = {
            numericAxisId: wQ,
            cateAxisId: LQ,
            items: [FQ]
          };
          return RD(RD({}, QQ), {}, OD({}, kQ, vQ))
        }), {});
        return Object.keys(DQ).reduce((function(FQ, oQ) {
          var kQ = DQ[oQ];
          if (kQ.hasStack) {
            kQ.stackGroups = Object.keys(kQ.stackGroups).reduce((function(FQ, oQ) {
              var DQ = kQ.stackGroups[oQ];
              return RD(RD({}, FQ), {}, OD({}, oQ, {
                numericAxisId: wQ,
                cateAxisId: LQ,
                items: DQ.items,
                stackedData: yD(QQ, DQ.items, qQ)
              }))
            }), {})
          }
          return RD(RD({}, FQ), {}, OD({}, oQ, kQ))
        }), {})
      },
      dD = function(QQ, FQ) {
        var wQ = FQ.realScaleType,
          LQ = FQ.type,
          qQ = FQ.tickCount,
          oQ = FQ.originalDomain,
          DQ = FQ.allowDecimals,
          kQ = wQ || FQ.scale;
        if ("auto" !== kQ && "linear" !== kQ) return null;
        if (qQ && "number" === LQ && oQ && ("auto" === oQ[0] || "auto" === oQ[1])) {
          var vQ = QQ.domain();
          if (!vQ.length) return null;
          var mQ = tD(vQ, qQ, DQ);
          return QQ.domain([So()(mQ), co()(mQ)]), {
            niceTicks: mQ
          }
        }
        if (qQ && "number" === LQ) {
          var uQ = QQ.domain();
          return {
            niceTicks: eD(uQ, qQ, DQ)
          }
        }
        return null
      };

    function Qk(QQ) {
      var FQ = QQ.axis,
        wQ = QQ.ticks,
        LQ = QQ.bandSize,
        qQ = QQ.entry,
        oQ = QQ.index,
        DQ = QQ.dataKey;
      if ("category" === FQ.type) {
        if (!FQ.allowDuplicatedCategory && FQ.dataKey && !Wo()(qQ[FQ.dataKey])) {
          var kQ = (0, GD.d)(wQ, "value", qQ[FQ.dataKey]);
          if (kQ) return kQ.coordinate + LQ / 2
        }
        return wQ[oQ] ? wQ[oQ].coordinate + LQ / 2 : null
      }
      var vQ = sD(qQ, Wo()(DQ) ? FQ.dataKey : DQ);
      return Wo()(vQ) ? null : FQ.scale(vQ)
    }
    var Fk = function(QQ) {
        var FQ = QQ.axis,
          wQ = QQ.ticks,
          LQ = QQ.offset,
          qQ = QQ.bandSize,
          oQ = QQ.entry,
          DQ = QQ.index;
        if ("category" === FQ.type) return wQ[DQ] ? wQ[DQ].coordinate + LQ : null;
        var kQ = sD(oQ, FQ.dataKey, FQ.domain[DQ]);
        return Wo()(kQ) ? null : FQ.scale(kQ) - qQ / 2 + LQ
      },
      wk = function(QQ) {
        var FQ = QQ.numericAxis,
          wQ = FQ.scale.domain();
        if ("number" === FQ.type) {
          var LQ = Math.min(wQ[0], wQ[1]),
            qQ = Math.max(wQ[0], wQ[1]);
          return LQ <= 0 && qQ >= 0 ? 0 : qQ < 0 ? qQ : LQ
        }
        return wQ[0]
      },
      Lk = function(QQ, FQ) {
        var wQ, LQ = (null !== (wQ = QQ.type) && void 0 !== wQ && wQ.defaultProps ? RD(RD({}, QQ.type.defaultProps), QQ.props) : QQ.props).stackId;
        if ((0, GD.s)(LQ)) {
          var qQ = FQ[LQ];
          if (qQ) {
            var oQ = qQ.items.indexOf(QQ);
            return oQ >= 0 ? qQ.stackedData[oQ] : null
          }
        }
        return null
      },
      qk = function(QQ, FQ, wQ) {
        return Object.keys(QQ).reduce((function(LQ, qQ) {
          var oQ = QQ[qQ].stackedData.reduce((function(QQ, LQ) {
            var qQ = LQ.slice(FQ, wQ + 1).reduce((function(QQ, FQ) {
              return [So()(FQ.concat([QQ[0]]).filter(GD.t)), co()(FQ.concat([QQ[1]]).filter(GD.t))]
            }), [1 / 0, -1 / 0]);
            return [Math.min(QQ[0], qQ[0]), Math.max(QQ[1], qQ[1])]
          }), [1 / 0, -1 / 0]);
          return [Math.min(oQ[0], LQ[0]), Math.max(oQ[1], LQ[1])]
        }), [1 / 0, -1 / 0]).map((function(QQ) {
          return QQ === 1 / 0 || QQ === -1 / 0 ? 0 : QQ
        }))
      },
      Dk = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      kk = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      vk = function(QQ, FQ, wQ) {
        if (Oo()(QQ)) return QQ(FQ, wQ);
        if (!Array.isArray(QQ)) return FQ;
        var LQ = [];
        if ((0, GD.t)(QQ[0])) LQ[0] = wQ ? QQ[0] : Math.min(QQ[0], FQ[0]);
        else if (Dk.test(QQ[0])) {
          var qQ = +Dk.exec(QQ[0])[1];
          LQ[0] = FQ[0] - qQ
        } else Oo()(QQ[0]) ? LQ[0] = QQ[0](FQ[0]) : LQ[0] = FQ[0];
        if ((0, GD.t)(QQ[1])) LQ[1] = wQ ? QQ[1] : Math.max(QQ[1], FQ[1]);
        else if (kk.test(QQ[1])) {
          var oQ = +kk.exec(QQ[1])[1];
          LQ[1] = FQ[1] + oQ
        } else Oo()(QQ[1]) ? LQ[1] = QQ[1](FQ[1]) : LQ[1] = FQ[1];
        return LQ
      },
      mk = function(QQ, FQ, wQ) {
        if (QQ && QQ.scale && QQ.scale.bandwidth) {
          var LQ = QQ.scale.bandwidth();
          if (!wQ || LQ > 0) return LQ
        }
        if (QQ && FQ && FQ.length >= 2) {
          for (var qQ = ho()(FQ, (function(QQ) {
              return QQ.coordinate
            })), oQ = 1 / 0, DQ = 1, kQ = qQ.length; DQ < kQ; DQ++) {
            var vQ = qQ[DQ],
              mQ = qQ[DQ - 1];
            oQ = Math.min((vQ.coordinate || 0) - (mQ.coordinate || 0), oQ)
          }
          return oQ === 1 / 0 ? 0 : oQ
        }
        return wQ ? void 0 : 0
      },
      uk = function(QQ, FQ, wQ) {
        return QQ && QQ.length ? fo()(QQ, Uo()(wQ, "type.defaultProps.domain")) ? FQ : QQ : FQ
      },
      Hk = function(QQ, FQ) {
        var wQ = QQ.type.defaultProps ? RD(RD({}, QQ.type.defaultProps), QQ.props) : QQ.props,
          LQ = wQ.dataKey,
          qQ = wQ.name,
          oQ = wQ.unit,
          DQ = wQ.formatter,
          kQ = wQ.tooltipType,
          vQ = wQ.chartType,
          mQ = wQ.hide;
        return RD(RD({}, (0, pD.e)(QQ, !1)), {}, {
          dataKey: LQ,
          unit: oQ,
          formatter: DQ,
          name: qQ || LQ,
          color: UD(QQ),
          value: sD(FQ, LQ),
          type: kQ,
          payload: FQ,
          chartType: vQ,
          hide: mQ
        })
      }
  },
  5967: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => bQ,
      g: () => HQ
    });
    var LQ = wQ(5812);

    function qQ(QQ) {
      return qQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, qQ(QQ)
    }

    function oQ(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function DQ(QQ) {
      for (var FQ = 1; FQ < arguments.length; FQ++) {
        var wQ = null != arguments[FQ] ? arguments[FQ] : {};
        FQ % 2 ? oQ(Object(wQ), !0).forEach((function(FQ) {
          kQ(QQ, FQ, wQ[FQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : oQ(Object(wQ)).forEach((function(FQ) {
          Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
        }))
      }
      return QQ
    }

    function kQ(QQ, FQ, wQ) {
      return (FQ = function(QQ) {
        var FQ = function(QQ, FQ) {
          if ("object" != qQ(QQ) || !QQ) return QQ;
          var wQ = QQ[Symbol.toPrimitive];
          if (void 0 !== wQ) {
            var LQ = wQ.call(QQ, FQ || "default");
            if ("object" != qQ(LQ)) return LQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === FQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == qQ(FQ) ? FQ : FQ + ""
      }(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }
    var vQ = {
        widthCache: {},
        cacheCount: 0
      },
      mQ = {
        position: "absolute",
        top: "-20000px",
        left: 0,
        padding: 0,
        margin: 0,
        border: "none",
        whiteSpace: "pre"
      },
      uQ = "recharts_measurement_span";
    var HQ = function(QQ) {
        var FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (void 0 === QQ || null === QQ || LQ.d.isSsr) return {
          width: 0,
          height: 0
        };
        var wQ = function(QQ) {
            var FQ = DQ({}, QQ);
            return Object.keys(FQ).forEach((function(QQ) {
              FQ[QQ] || delete FQ[QQ]
            })), FQ
          }(FQ),
          qQ = JSON.stringify({
            text: QQ,
            copyStyle: wQ
          });
        if (vQ.widthCache[qQ]) return vQ.widthCache[qQ];
        try {
          var oQ = document.getElementById(uQ);
          oQ || ((oQ = document.createElement("span")).setAttribute("id", uQ), oQ.setAttribute("aria-hidden", "true"), document.body.appendChild(oQ));
          var kQ = DQ(DQ({}, mQ), wQ);
          Object.assign(oQ.style, kQ), oQ.textContent = "".concat(QQ);
          var HQ = oQ.getBoundingClientRect(),
            bQ = {
              width: HQ.width,
              height: HQ.height
            };
          return vQ.widthCache[qQ] = bQ, ++vQ.cacheCount > 2e3 && (vQ.cacheCount = 0, vQ.widthCache = {}), bQ
        } catch (YQ) {
          return {
            width: 0,
            height: 0
          }
        }
      },
      bQ = function(QQ) {
        return {
          top: QQ.top + window.scrollY - document.documentElement.clientTop,
          left: QQ.left + window.scrollX - document.documentElement.clientLeft
        }
      }
  },
  5002: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      C: () => GQ,
      b: () => RQ,
      d: () => iQ,
      e: () => cQ,
      h: () => WQ,
      k: () => pQ,
      n: () => CQ,
      o: () => SQ,
      q: () => tQ,
      s: () => eQ,
      t: () => AQ,
      x: () => xQ,
      z: () => YQ
    });
    var LQ = wQ(5005),
      qQ = wQ.n(LQ),
      oQ = wQ(5011),
      DQ = wQ.n(oQ),
      kQ = wQ(5021),
      vQ = wQ.n(kQ),
      mQ = wQ(5013),
      uQ = wQ.n(mQ),
      HQ = wQ(5240),
      bQ = wQ.n(HQ),
      YQ = function(QQ) {
        return 0 === QQ ? 0 : QQ > 0 ? 1 : -1
      },
      xQ = function(QQ) {
        return qQ()(QQ) && QQ.indexOf("%") === QQ.length - 1
      },
      AQ = function(QQ) {
        return uQ()(QQ) && !DQ()(QQ)
      },
      tQ = function(QQ) {
        return bQ()(QQ)
      },
      eQ = function(QQ) {
        return AQ(QQ) || qQ()(QQ)
      },
      MQ = 0,
      GQ = function(QQ) {
        var FQ = ++MQ;
        return "".concat(QQ || "").concat(FQ)
      },
      pQ = function(QQ, FQ) {
        var wQ, LQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          oQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!AQ(QQ) && !qQ()(QQ)) return LQ;
        if (xQ(QQ)) {
          var kQ = QQ.indexOf("%");
          wQ = FQ * parseFloat(QQ.slice(0, kQ)) / 100
        } else wQ = +QQ;
        return DQ()(wQ) && (wQ = LQ), oQ && wQ > FQ && (wQ = FQ), wQ
      },
      cQ = function(QQ) {
        if (!QQ) return null;
        var FQ = Object.keys(QQ);
        return FQ && FQ.length ? QQ[FQ[0]] : null
      },
      CQ = function(QQ) {
        if (!Array.isArray(QQ)) return !1;
        for (var FQ = QQ.length, wQ = {}, LQ = 0; LQ < FQ; LQ++) {
          if (wQ[QQ[LQ]]) return !0;
          wQ[QQ[LQ]] = !0
        }
        return !1
      },
      SQ = function(QQ, FQ) {
        return AQ(QQ) && AQ(FQ) ? function(wQ) {
          return QQ + wQ * (FQ - QQ)
        } : function() {
          return FQ
        }
      };

    function iQ(QQ, FQ, wQ) {
      return QQ && QQ.length ? QQ.find((function(QQ) {
        return QQ && ("function" === typeof FQ ? FQ(QQ) : vQ()(QQ, FQ)) === wQ
      })) : null
    }
    var WQ = function(QQ) {
        if (!QQ || !QQ.length) return null;
        for (var FQ = QQ.length, wQ = 0, LQ = 0, qQ = 0, oQ = 0, DQ = 1 / 0, kQ = -1 / 0, vQ = 0, mQ = 0, uQ = 0; uQ < FQ; uQ++) wQ += vQ = QQ[uQ].cx || 0, LQ += mQ = QQ[uQ].cy || 0, qQ += vQ * mQ, oQ += vQ * vQ, DQ = Math.min(DQ, vQ), kQ = Math.max(kQ, vQ);
        var HQ = FQ * oQ !== wQ * wQ ? (FQ * qQ - wQ * LQ) / (FQ * oQ - wQ * wQ) : 0;
        return {
          xmin: DQ,
          xmax: kQ,
          a: HQ,
          b: (LQ - HQ * wQ) / FQ
        }
      },
      RQ = function(QQ, FQ) {
        return AQ(QQ) && AQ(FQ) ? QQ - FQ : qQ()(QQ) && qQ()(FQ) ? QQ.localeCompare(FQ) : QQ instanceof Date && FQ instanceof Date ? QQ.getTime() - FQ.getTime() : String(QQ).localeCompare(String(FQ))
      }
  },
  5812: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => LQ
    });
    var LQ = {
      isSsr: !("undefined" !== typeof window && window.document && window.document.createElement && window.setTimeout),
      get: function(QQ) {
        return LQ[QQ]
      },
      set: function(QQ, FQ) {
        if ("string" === typeof QQ) LQ[QQ] = FQ;
        else {
          var wQ = Object.keys(QQ);
          wQ && wQ.length && wQ.forEach((function(FQ) {
            LQ[FQ] = QQ[FQ]
          }))
        }
      }
    }
  },
  6063: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ
    });
    var LQ = function(QQ, FQ) {
      var wQ = QQ.alwaysShow,
        LQ = QQ.ifOverflow;
      return wQ && (LQ = "extendDomain"), LQ === FQ
    }
  },
  5243: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ
    });
    var LQ = function(QQ, FQ) {
      for (var wQ = arguments.length, LQ = new Array(wQ > 2 ? wQ - 2 : 0), qQ = 2; qQ < wQ; qQ++) LQ[qQ - 2] = arguments[qQ]
    }
  },
  6061: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => kQ,
      i: () => bQ,
      m: () => mQ
    });
    wQ(5240), wQ(53), wQ(5095);

    function LQ(QQ) {
      return LQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, LQ(QQ)
    }

    function qQ(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function oQ(QQ) {
      for (var FQ = 1; FQ < arguments.length; FQ++) {
        var wQ = null != arguments[FQ] ? arguments[FQ] : {};
        FQ % 2 ? qQ(Object(wQ), !0).forEach((function(FQ) {
          DQ(QQ, FQ, wQ[FQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : qQ(Object(wQ)).forEach((function(FQ) {
          Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
        }))
      }
      return QQ
    }

    function DQ(QQ, FQ, wQ) {
      return (FQ = function(QQ) {
        var FQ = function(QQ, FQ) {
          if ("object" != LQ(QQ) || !QQ) return QQ;
          var wQ = QQ[Symbol.toPrimitive];
          if (void 0 !== wQ) {
            var qQ = wQ.call(QQ, FQ || "default");
            if ("object" != LQ(qQ)) return qQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === FQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == LQ(FQ) ? FQ : FQ + ""
      }(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }
    var kQ = Math.PI / 180,
      vQ = function(QQ) {
        return 180 * QQ / Math.PI
      },
      mQ = function(QQ, FQ, wQ, LQ) {
        return {
          x: QQ + Math.cos(-kQ * LQ) * wQ,
          y: FQ + Math.sin(-kQ * LQ) * wQ
        }
      },
      uQ = function(QQ, FQ) {
        var wQ = QQ.x,
          LQ = QQ.y,
          qQ = FQ.cx,
          oQ = FQ.cy,
          DQ = function(QQ, FQ) {
            var wQ = QQ.x,
              LQ = QQ.y,
              qQ = FQ.x,
              oQ = FQ.y;
            return Math.sqrt(Math.pow(wQ - qQ, 2) + Math.pow(LQ - oQ, 2))
          }({
            x: wQ,
            y: LQ
          }, {
            x: qQ,
            y: oQ
          });
        if (DQ <= 0) return {
          radius: DQ
        };
        var kQ = (wQ - qQ) / DQ,
          mQ = Math.acos(kQ);
        return LQ > oQ && (mQ = 2 * Math.PI - mQ), {
          radius: DQ,
          angle: vQ(mQ),
          angleInRadian: mQ
        }
      },
      HQ = function(QQ, FQ) {
        var wQ = FQ.startAngle,
          LQ = FQ.endAngle,
          qQ = Math.floor(wQ / 360),
          oQ = Math.floor(LQ / 360);
        return QQ + 360 * Math.min(qQ, oQ)
      },
      bQ = function(QQ, FQ) {
        var wQ = QQ.x,
          LQ = QQ.y,
          qQ = uQ({
            x: wQ,
            y: LQ
          }, FQ),
          DQ = qQ.radius,
          kQ = qQ.angle,
          vQ = FQ.innerRadius,
          mQ = FQ.outerRadius;
        if (DQ < vQ || DQ > mQ) return !1;
        if (0 === DQ) return !0;
        var bQ, YQ = function(QQ) {
            var FQ = QQ.startAngle,
              wQ = QQ.endAngle,
              LQ = Math.floor(FQ / 360),
              qQ = Math.floor(wQ / 360),
              oQ = Math.min(LQ, qQ);
            return {
              startAngle: FQ - 360 * oQ,
              endAngle: wQ - 360 * oQ
            }
          }(FQ),
          xQ = YQ.startAngle,
          AQ = YQ.endAngle,
          tQ = kQ;
        if (xQ <= AQ) {
          for (; tQ > AQ;) tQ -= 360;
          for (; tQ < xQ;) tQ += 360;
          bQ = tQ >= xQ && tQ <= AQ
        } else {
          for (; tQ > xQ;) tQ -= 360;
          for (; tQ < AQ;) tQ += 360;
          bQ = tQ >= AQ && tQ <= xQ
        }
        return bQ ? oQ(oQ({}, FQ), {}, {
          radius: DQ,
          angle: HQ(tQ, FQ)
        }) : null
      }
  },
  5252: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      B: () => KQ,
      F: () => aQ,
      J: () => lQ,
      L: () => rQ,
      e: () => TQ,
      i: () => OQ,
      l: () => sQ,
      p: () => SQ,
      t: () => jQ,
      x: () => NQ
    });
    var LQ = wQ(5021),
      qQ = wQ.n(LQ),
      oQ = wQ(5240),
      DQ = wQ.n(oQ),
      kQ = wQ(5005),
      vQ = wQ.n(kQ),
      mQ = wQ(5095),
      uQ = wQ.n(mQ),
      HQ = wQ(4932),
      bQ = wQ.n(HQ),
      YQ = wQ(53),
      xQ = wQ(5258),
      AQ = wQ(5002),
      tQ = wQ(5269),
      eQ = wQ(5277),
      MQ = ["children"],
      GQ = ["children"];

    function pQ(QQ, FQ) {
      if (null == QQ) return {};
      var wQ, LQ, qQ = function(QQ, FQ) {
        if (null == QQ) return {};
        var wQ = {};
        for (var LQ in QQ)
          if (Object.prototype.hasOwnProperty.call(QQ, LQ)) {
            if (FQ.indexOf(LQ) >= 0) continue;
            wQ[LQ] = QQ[LQ]
          } return wQ
      }(QQ, FQ);
      if (Object.getOwnPropertySymbols) {
        var oQ = Object.getOwnPropertySymbols(QQ);
        for (LQ = 0; LQ < oQ.length; LQ++) wQ = oQ[LQ], FQ.indexOf(wQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, wQ) && (qQ[wQ] = QQ[wQ])
      }
      return qQ
    }

    function cQ(QQ) {
      return cQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, cQ(QQ)
    }
    var CQ = {
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
      SQ = function(QQ) {
        return "string" === typeof QQ ? QQ : QQ ? QQ.displayName || QQ.name || "Component" : ""
      },
      iQ = null,
      WQ = null,
      RQ = function QQ(FQ) {
        if (FQ === iQ && Array.isArray(WQ)) return WQ;
        var wQ = [];
        return YQ.Children.forEach(FQ, (function(FQ) {
          DQ()(FQ) || ((0, xQ.isFragment)(FQ) ? wQ = wQ.concat(QQ(FQ.props.children)) : wQ.push(FQ))
        })), WQ = wQ, iQ = FQ, wQ
      };

    function OQ(QQ, FQ) {
      var wQ = [],
        LQ = [];
      return LQ = Array.isArray(FQ) ? FQ.map((function(QQ) {
        return SQ(QQ)
      })) : [SQ(FQ)], RQ(QQ).forEach((function(QQ) {
        var FQ = qQ()(QQ, "type.displayName") || qQ()(QQ, "type.name"); - 1 !== LQ.indexOf(FQ) && wQ.push(QQ)
      })), wQ
    }

    function sQ(QQ, FQ) {
      var wQ = OQ(QQ, FQ);
      return wQ && wQ[0]
    }
    var rQ = function(QQ) {
        if (!QQ || !QQ.props) return !1;
        var FQ = QQ.props,
          wQ = FQ.width,
          LQ = FQ.height;
        return !(!(0, AQ.t)(wQ) || wQ <= 0 || !(0, AQ.t)(LQ) || LQ <= 0)
      },
      IQ = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"],
      UQ = function(QQ) {
        return QQ && QQ.type && vQ()(QQ.type) && IQ.indexOf(QQ.type) >= 0
      },
      NQ = function(QQ) {
        return QQ && "object" === cQ(QQ) && "clipDot" in QQ
      },
      TQ = function(QQ, FQ, wQ) {
        if (!QQ || "function" === typeof QQ || "boolean" === typeof QQ) return null;
        var LQ = QQ;
        if ((0, YQ.isValidElement)(QQ) && (LQ = QQ.props), !bQ()(LQ)) return null;
        var qQ = {};
        return Object.keys(LQ).forEach((function(QQ) {
          var oQ;
          (function(QQ, FQ, wQ, LQ) {
            var qQ, oQ = null !== (qQ = null === eQ.g || void 0 === eQ.g ? void 0 : eQ.g[LQ]) && void 0 !== qQ ? qQ : [];
            return FQ.startsWith("data-") || !uQ()(QQ) && (LQ && oQ.includes(FQ) || eQ.h.includes(FQ)) || wQ && eQ.d.includes(FQ)
          })(null === (oQ = LQ) || void 0 === oQ ? void 0 : oQ[QQ], QQ, FQ, wQ) && (qQ[QQ] = LQ[QQ])
        })), qQ
      },
      KQ = function QQ(FQ, wQ) {
        if (FQ === wQ) return !0;
        var LQ = YQ.Children.count(FQ);
        if (LQ !== YQ.Children.count(wQ)) return !1;
        if (0 === LQ) return !0;
        if (1 === LQ) return zQ(Array.isArray(FQ) ? FQ[0] : FQ, Array.isArray(wQ) ? wQ[0] : wQ);
        for (var qQ = 0; qQ < LQ; qQ++) {
          var oQ = FQ[qQ],
            DQ = wQ[qQ];
          if (Array.isArray(oQ) || Array.isArray(DQ)) {
            if (!QQ(oQ, DQ)) return !1
          } else if (!zQ(oQ, DQ)) return !1
        }
        return !0
      },
      zQ = function(QQ, FQ) {
        if (DQ()(QQ) && DQ()(FQ)) return !0;
        if (!DQ()(QQ) && !DQ()(FQ)) {
          var wQ = QQ.props || {},
            LQ = wQ.children,
            qQ = pQ(wQ, MQ),
            oQ = FQ.props || {},
            kQ = oQ.children,
            vQ = pQ(oQ, GQ);
          return LQ && kQ ? (0, tQ.e)(qQ, vQ) && KQ(LQ, kQ) : !LQ && !kQ && (0, tQ.e)(qQ, vQ)
        }
        return !1
      },
      lQ = function(QQ, FQ) {
        var wQ = [],
          LQ = {};
        return RQ(QQ).forEach((function(QQ, qQ) {
          if (UQ(QQ)) wQ.push(QQ);
          else if (QQ) {
            var oQ = SQ(QQ.type),
              DQ = FQ[oQ] || {},
              kQ = DQ.handler,
              vQ = DQ.once;
            if (kQ && (!vQ || !LQ[oQ])) {
              var mQ = kQ(QQ, oQ, qQ);
              wQ.push(mQ), LQ[oQ] = !0
            }
          }
        })), wQ
      },
      jQ = function(QQ) {
        var FQ = QQ && QQ.type;
        return FQ && CQ[FQ] ? CQ[FQ] : null
      },
      aQ = function(QQ, FQ) {
        return RQ(FQ).indexOf(QQ)
      }
  },
  5269: (QQ, FQ, wQ) => {
    function LQ(QQ, FQ) {
      for (var wQ in QQ)
        if ({}.hasOwnProperty.call(QQ, wQ) && (!{}.hasOwnProperty.call(FQ, wQ) || QQ[wQ] !== FQ[wQ])) return !1;
      for (var LQ in FQ)
        if ({}.hasOwnProperty.call(FQ, LQ) && !{}.hasOwnProperty.call(QQ, LQ)) return !1;
      return !0
    }
    wQ.d(FQ, {
      e: () => LQ
    })
  },
  6044: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => uQ
    });
    var LQ = wQ(5887),
      qQ = wQ(5974),
      oQ = wQ(5252);

    function DQ(QQ) {
      return DQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, DQ(QQ)
    }

    function kQ(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function vQ(QQ) {
      for (var FQ = 1; FQ < arguments.length; FQ++) {
        var wQ = null != arguments[FQ] ? arguments[FQ] : {};
        FQ % 2 ? kQ(Object(wQ), !0).forEach((function(FQ) {
          mQ(QQ, FQ, wQ[FQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : kQ(Object(wQ)).forEach((function(FQ) {
          Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
        }))
      }
      return QQ
    }

    function mQ(QQ, FQ, wQ) {
      return (FQ = function(QQ) {
        var FQ = function(QQ, FQ) {
          if ("object" != DQ(QQ) || !QQ) return QQ;
          var wQ = QQ[Symbol.toPrimitive];
          if (void 0 !== wQ) {
            var LQ = wQ.call(QQ, FQ || "default");
            if ("object" != DQ(LQ)) return LQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === FQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == DQ(FQ) ? FQ : FQ + ""
      }(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }
    var uQ = function(QQ) {
      var FQ = QQ.children,
        wQ = QQ.formattedGraphicalItems,
        DQ = QQ.legendWidth,
        kQ = QQ.legendContent,
        mQ = (0, oQ.l)(FQ, LQ.b);
      if (!mQ) return null;
      var uQ, HQ = LQ.b.defaultProps,
        bQ = void 0 !== HQ ? vQ(vQ({}, HQ), mQ.props) : {};
      return uQ = mQ.props && mQ.props.payload ? mQ.props && mQ.props.payload : "children" === kQ ? (wQ || []).reduce((function(QQ, FQ) {
        var wQ = FQ.item,
          LQ = FQ.props,
          qQ = LQ.sectors || LQ.data || [];
        return QQ.concat(qQ.map((function(QQ) {
          return {
            type: mQ.props.iconType || wQ.props.legendType,
            value: QQ.name,
            color: QQ.fill,
            payload: QQ
          }
        })))
      }), []) : (wQ || []).map((function(QQ) {
        var FQ = QQ.item,
          wQ = FQ.type.defaultProps,
          LQ = void 0 !== wQ ? vQ(vQ({}, wQ), FQ.props) : {},
          oQ = LQ.dataKey,
          DQ = LQ.name,
          kQ = LQ.legendType;
        return {
          inactive: LQ.hide,
          dataKey: oQ,
          type: bQ.iconType || kQ || "square",
          color: (0, qQ.P)(FQ),
          value: DQ || oQ,
          payload: LQ
        }
      })), vQ(vQ(vQ({}, bQ), LQ.b.getWithHeight(mQ, DQ)), {}, {
        payload: uQ,
        item: mQ
      })
    }
  },
  5816: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => kQ
    });
    var LQ = wQ(5823),
      qQ = wQ.n(LQ),
      oQ = wQ(5095),
      DQ = wQ.n(oQ);

    function kQ(QQ, FQ, wQ) {
      return !0 === FQ ? qQ()(QQ, wQ) : DQ()(FQ) ? qQ()(QQ, FQ) : QQ
    }
  },
  5277: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => uQ,
      g: () => mQ,
      h: () => kQ,
      i: () => HQ,
      j: () => bQ
    });
    var LQ = wQ(53),
      qQ = wQ(4932),
      oQ = wQ.n(qQ);

    function DQ(QQ) {
      return DQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, DQ(QQ)
    }
    var kQ = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "mY", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"],
      vQ = ["points", "pathLength"],
      mQ = {
        svg: ["viewBox", "children"],
        polygon: vQ,
        polyline: vQ
      },
      uQ = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"],
      HQ = function(QQ, FQ) {
        if (!QQ || "function" === typeof QQ || "boolean" === typeof QQ) return null;
        var wQ = QQ;
        if ((0, LQ.isValidElement)(QQ) && (wQ = QQ.props), !oQ()(wQ)) return null;
        var qQ = {};
        return Object.keys(wQ).forEach((function(QQ) {
          uQ.includes(QQ) && (qQ[QQ] = FQ || function(FQ) {
            return wQ[QQ](wQ, FQ)
          })
        })), qQ
      },
      bQ = function(QQ, FQ, wQ) {
        if (!oQ()(QQ) || "object" !== DQ(QQ)) return null;
        var LQ = null;
        return Object.keys(QQ).forEach((function(qQ) {
          var oQ = QQ[qQ];
          uQ.includes(qQ) && "function" === typeof oQ && (LQ || (LQ = {}), LQ[qQ] = function(QQ, FQ, wQ) {
            return function(LQ) {
              return QQ(FQ, wQ, LQ), null
            }
          }(oQ, FQ, wQ))
        })), LQ
      }
  },
  5263: (QQ, FQ) => {
    var wQ, LQ = Symbol.for("react.element"),
      qQ = Symbol.for("react.portal"),
      oQ = Symbol.for("react.fragment"),
      DQ = Symbol.for("react.strict_mode"),
      kQ = Symbol.for("react.profiler"),
      vQ = Symbol.for("react.provider"),
      mQ = Symbol.for("react.context"),
      uQ = Symbol.for("react.server_context"),
      HQ = Symbol.for("react.forward_ref"),
      bQ = Symbol.for("react.suspense"),
      YQ = Symbol.for("react.suspense_list"),
      xQ = Symbol.for("react.memo"),
      AQ = Symbol.for("react.lazy"),
      tQ = Symbol.for("react.offscreen");

    function eQ(QQ) {
      if ("object" === typeof QQ && null !== QQ) {
        var FQ = QQ.$$typeof;
        switch (FQ) {
          case LQ:
            switch (QQ = QQ.type) {
              case oQ:
              case kQ:
              case DQ:
              case bQ:
              case YQ:
                return QQ;
              default:
                switch (QQ = QQ && QQ.$$typeof) {
                  case uQ:
                  case mQ:
                  case HQ:
                  case AQ:
                  case xQ:
                  case vQ:
                    return QQ;
                  default:
                    return FQ
                }
            }
          case qQ:
            return FQ
        }
      }
    }
    wQ = Symbol.for("react.module.reference"), FQ.isFragment = function(QQ) {
      return eQ(QQ) === oQ
    }
  },
  5258: (QQ, FQ, wQ) => {
    QQ.exports = wQ(5263)
  },
  4909: (QQ, FQ, wQ) => {
    function LQ(QQ) {
      var FQ, wQ, qQ = "";
      if ("string" == typeof QQ || "number" == typeof QQ) qQ += QQ;
      else if ("object" == typeof QQ)
        if (Array.isArray(QQ)) {
          var oQ = QQ.length;
          for (FQ = 0; FQ < oQ; FQ++) QQ[FQ] && (wQ = LQ(QQ[FQ])) && (qQ && (qQ += " "), qQ += wQ)
        } else
          for (wQ in QQ) QQ[wQ] && (qQ && (qQ += " "), qQ += wQ);
      return qQ
    }
    wQ.d(FQ, {
      b: () => qQ
    });
    const qQ = function() {
      for (var QQ, FQ, wQ = 0, qQ = "", oQ = arguments.length; wQ < oQ; wQ++)(QQ = arguments[wQ]) && (FQ = LQ(QQ)) && (qQ && (qQ += " "), qQ += FQ);
      return qQ
    }
  },
  5982: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => oQ,
      e: () => kQ
    });
    var LQ = wQ(5986),
      qQ = wQ(5989);

    function oQ() {
      var QQ, FQ, wQ = (0, qQ.e)().unknown(void 0),
        DQ = wQ.domain,
        kQ = wQ.range,
        vQ = 0,
        mQ = 1,
        uQ = !1,
        HQ = 0,
        bQ = 0,
        YQ = .5;

      function xQ() {
        var wQ = DQ().length,
          LQ = mQ < vQ,
          qQ = LQ ? mQ : vQ,
          oQ = LQ ? vQ : mQ;
        QQ = (oQ - qQ) / Math.max(1, wQ - HQ + 2 * bQ), uQ && (QQ = Math.floor(QQ)), qQ += (oQ - qQ - QQ * (wQ - HQ)) * YQ, FQ = QQ * (1 - HQ), uQ && (qQ = Math.round(qQ), FQ = Math.round(FQ));
        var xQ = function(QQ, FQ, wQ) {
          QQ = +QQ, FQ = +FQ, wQ = (qQ = arguments.length) < 2 ? (FQ = QQ, QQ = 0, 1) : qQ < 3 ? 1 : +wQ;
          for (var LQ = -1, qQ = 0 | Math.max(0, Math.ceil((FQ - QQ) / wQ)), oQ = new Array(qQ); ++LQ < qQ;) oQ[LQ] = QQ + LQ * wQ;
          return oQ
        }(wQ).map((function(FQ) {
          return qQ + QQ * FQ
        }));
        return kQ(LQ ? xQ.reverse() : xQ)
      }
      return delete wQ.unknown, wQ.domain = function(QQ) {
        return arguments.length ? (DQ(QQ), xQ()) : DQ()
      }, wQ.range = function(QQ) {
        return arguments.length ? ([vQ, mQ] = QQ, vQ = +vQ, mQ = +mQ, xQ()) : [vQ, mQ]
      }, wQ.rangeRound = function(QQ) {
        return [vQ, mQ] = QQ, vQ = +vQ, mQ = +mQ, uQ = !0, xQ()
      }, wQ.bandwidth = function() {
        return FQ
      }, wQ.step = function() {
        return QQ
      }, wQ.round = function(QQ) {
        return arguments.length ? (uQ = !!QQ, xQ()) : uQ
      }, wQ.padding = function(QQ) {
        return arguments.length ? (HQ = Math.min(1, bQ = +QQ), xQ()) : HQ
      }, wQ.paddingInner = function(QQ) {
        return arguments.length ? (HQ = Math.min(1, QQ), xQ()) : HQ
      }, wQ.paddingOuter = function(QQ) {
        return arguments.length ? (bQ = +QQ, xQ()) : bQ
      }, wQ.align = function(QQ) {
        return arguments.length ? (YQ = Math.max(0, Math.min(1, QQ)), xQ()) : YQ
      }, wQ.copy = function() {
        return oQ(DQ(), [vQ, mQ]).round(uQ).paddingInner(HQ).paddingOuter(bQ).align(YQ)
      }, LQ.h.apply(xQ(), arguments)
    }

    function DQ(QQ) {
      var FQ = QQ.copy;
      return QQ.padding = QQ.paddingOuter, delete QQ.paddingInner, delete QQ.paddingOuter, QQ.copy = function() {
        return DQ(FQ())
      }, QQ
    }

    function kQ() {
      return DQ(oQ.apply(null, arguments).paddingInner(1))
    }
  },
  5986: (QQ, FQ, wQ) => {
    function LQ(QQ, FQ) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(QQ);
          break;
        default:
          this.range(FQ).domain(QQ)
      }
      return this
    }

    function qQ(QQ, FQ) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          "function" === typeof QQ ? this.interpolator(QQ) : this.range(QQ);
          break;
        default:
          this.domain(QQ), "function" === typeof FQ ? this.interpolator(FQ) : this.range(FQ)
      }
      return this
    }
    wQ.d(FQ, {
      e: () => qQ,
      h: () => LQ
    })
  },
  5989: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => uQ,
      i: () => mQ
    });
    class LQ extends Map {
      constructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kQ;
        if (super(), Object.defineProperties(this, {
            _intern: {
              value: new Map
            },
            _key: {
              value: FQ
            }
          }), null != QQ)
          for (const [wQ, LQ] of QQ) this.set(wQ, LQ)
      }
      get(QQ) {
        return super.get(qQ(this, QQ))
      }
      has(QQ) {
        return super.has(qQ(this, QQ))
      }
      set(QQ, FQ) {
        return super.set(oQ(this, QQ), FQ)
      }
      delete(QQ) {
        return super.delete(DQ(this, QQ))
      }
    }
    Set;

    function qQ(QQ, FQ) {
      let {
        _intern: wQ,
        _key: LQ
      } = QQ;
      const qQ = LQ(FQ);
      return wQ.has(qQ) ? wQ.get(qQ) : FQ
    }

    function oQ(QQ, FQ) {
      let {
        _intern: wQ,
        _key: LQ
      } = QQ;
      const qQ = LQ(FQ);
      return wQ.has(qQ) ? wQ.get(qQ) : (wQ.set(qQ, FQ), FQ)
    }

    function DQ(QQ, FQ) {
      let {
        _intern: wQ,
        _key: LQ
      } = QQ;
      const qQ = LQ(FQ);
      return wQ.has(qQ) && (FQ = wQ.get(qQ), wQ.delete(qQ)), FQ
    }

    function kQ(QQ) {
      return null !== QQ && "object" === typeof QQ ? QQ.valueOf() : QQ
    }
    var vQ = wQ(5986);
    const mQ = Symbol("implicit");

    function uQ() {
      var QQ = new LQ,
        FQ = [],
        wQ = [],
        qQ = mQ;

      function oQ(LQ) {
        let oQ = QQ.get(LQ);
        if (void 0 === oQ) {
          if (qQ !== mQ) return qQ;
          QQ.set(LQ, oQ = FQ.push(LQ) - 1)
        }
        return wQ[oQ % wQ.length]
      }
      return oQ.domain = function(wQ) {
        if (!arguments.length) return FQ.slice();
        FQ = [], QQ = new LQ;
        for (const LQ of wQ) QQ.has(LQ) || QQ.set(LQ, FQ.push(LQ) - 1);
        return oQ
      }, oQ.range = function(QQ) {
        return arguments.length ? (wQ = Array.from(QQ), oQ) : wQ.slice()
      }, oQ.unknown = function(QQ) {
        return arguments.length ? (qQ = QQ, oQ) : qQ
      }, oQ.copy = function() {
        return uQ(FQ, wQ).unknown(qQ)
      }, vQ.h.apply(oQ, arguments), oQ
    }
  },
  6046: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => LQ
    });
    Array.prototype.slice;

    function LQ(QQ) {
      return "object" === typeof QQ && "length" in QQ ? QQ : Array.from(QQ)
    }
  },
  5945: (QQ, FQ, wQ) => {
    function LQ(QQ) {
      return function() {
        return QQ
      }
    }
    wQ.d(FQ, {
      e: () => LQ
    })
  },
  5947: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => mQ
    });
    const LQ = Math.PI,
      qQ = 2 * LQ,
      oQ = 1e-6,
      DQ = qQ - oQ;

    function kQ(QQ) {
      this._ += QQ[0];
      for (let FQ = 1, wQ = QQ.length; FQ < wQ; ++FQ) this._ += arguments[FQ] + QQ[FQ]
    }
    class vQ {
      constructor(QQ) {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == QQ ? kQ : function(QQ) {
          let FQ = Math.floor(QQ);
          if (!(FQ >= 0)) throw new Error(`invalid digits: ${QQ}`);
          if (FQ > 15) return kQ;
          const wQ = 10 ** FQ;
          return function(QQ) {
            this._ += QQ[0];
            for (let FQ = 1, LQ = QQ.length; FQ < LQ; ++FQ) this._ += Math.round(arguments[FQ] * wQ) / wQ + QQ[FQ]
          }
        }(QQ)
      }
      moveTo(QQ, FQ) {
        this._append`M${this._x0=this._x1=+QQ},${this._y0=this._y1=+FQ}`
      }
      closePath() {
        null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`)
      }
      lineTo(QQ, FQ) {
        this._append`L${this._x1=+QQ},${this._y1=+FQ}`
      }
      quadraticCurveTo(QQ, FQ, wQ, LQ) {
        this._append`Q${+QQ},${+FQ},${this._x1=+wQ},${this._y1=+LQ}`
      }
      bezierCurveTo(QQ, FQ, wQ, LQ, qQ, oQ) {
        this._append`C${+QQ},${+FQ},${+wQ},${+LQ},${this._x1=+qQ},${this._y1=+oQ}`
      }
      arcTo(QQ, FQ, wQ, qQ, DQ) {
        if (QQ = +QQ, FQ = +FQ, wQ = +wQ, qQ = +qQ, (DQ = +DQ) < 0) throw new Error(`negative radius: ${DQ}`);
        let kQ = this._x1,
          vQ = this._y1,
          mQ = wQ - QQ,
          uQ = qQ - FQ,
          HQ = kQ - QQ,
          bQ = vQ - FQ,
          YQ = HQ * HQ + bQ * bQ;
        if (null === this._x1) this._append`M${this._x1=QQ},${this._y1=FQ}`;
        else if (YQ > oQ)
          if (Math.abs(bQ * mQ - uQ * HQ) > oQ && DQ) {
            let xQ = wQ - kQ,
              AQ = qQ - vQ,
              tQ = mQ * mQ + uQ * uQ,
              eQ = xQ * xQ + AQ * AQ,
              MQ = Math.sqrt(tQ),
              GQ = Math.sqrt(YQ),
              pQ = DQ * Math.tan((LQ - Math.acos((tQ + YQ - eQ) / (2 * MQ * GQ))) / 2),
              cQ = pQ / GQ,
              CQ = pQ / MQ;
            Math.abs(cQ - 1) > oQ && this._append`L${QQ+cQ*HQ},${FQ+cQ*bQ}`, this._append`A${DQ},${DQ},0,0,${+(bQ*xQ>HQ*AQ)},${this._x1=QQ+CQ*mQ},${this._y1=FQ+CQ*uQ}`
          } else this._append`L${this._x1=QQ},${this._y1=FQ}`;
        else;
      }
      arc(QQ, FQ, wQ, kQ, vQ, mQ) {
        if (QQ = +QQ, FQ = +FQ, mQ = !!mQ, (wQ = +wQ) < 0) throw new Error(`negative radius: ${wQ}`);
        let uQ = wQ * Math.cos(kQ),
          HQ = wQ * Math.sin(kQ),
          bQ = QQ + uQ,
          YQ = FQ + HQ,
          xQ = 1 ^ mQ,
          AQ = mQ ? kQ - vQ : vQ - kQ;
        null === this._x1 ? this._append`M${bQ},${YQ}` : (Math.abs(this._x1 - bQ) > oQ || Math.abs(this._y1 - YQ) > oQ) && this._append`L${bQ},${YQ}`, wQ && (AQ < 0 && (AQ = AQ % qQ + qQ), AQ > DQ ? this._append`A${wQ},${wQ},0,1,${xQ},${QQ-uQ},${FQ-HQ}A${wQ},${wQ},0,1,${xQ},${this._x1=bQ},${this._y1=YQ}` : AQ > oQ && this._append`A${wQ},${wQ},0,${+(AQ>=LQ)},${xQ},${this._x1=QQ+wQ*Math.cos(vQ)},${this._y1=FQ+wQ*Math.sin(vQ)}`)
      }
      rect(QQ, FQ, wQ, LQ) {
        this._append`M${this._x0=this._x1=+QQ},${this._y0=this._y1=+FQ}h${wQ=+wQ}v${+LQ}h${-wQ}Z`
      }
      toString() {
        return this._
      }
    }

    function mQ(QQ) {
      let FQ = 3;
      return QQ.digits = function(wQ) {
        if (!arguments.length) return FQ;
        if (null == wQ) FQ = null;
        else {
          const QQ = Math.floor(wQ);
          if (!(QQ >= 0)) throw new RangeError(`invalid digits: ${wQ}`);
          FQ = QQ
        }
        return QQ
      }, () => new vQ(FQ)
    }
    vQ.prototype
  },
  5787: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => oQ
    });
    var LQ = !0,
      qQ = "Invariant failed";

    function oQ(QQ, FQ) {
      if (!QQ) {
        if (LQ) throw new Error(qQ);
        var wQ = "function" === typeof FQ ? FQ() : FQ,
          oQ = wQ ? "".concat(qQ, ": ").concat(wQ) : qQ;
        throw new Error(oQ)
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);