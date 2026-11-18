/*! For license information please see symm5.104.d1e4547b.chunk.js.LICENSE.txt */
export const id = 104;
export const ids = [104];
export const modules = {
  5562: function(JJ, cJ, ZJ) {
    var FJ;
    ! function() {
      var UJ, eJ = 1e9,
        XJ = {
          precision: 20,
          rounding: 4,
          toExpNeg: -7,
          toExpPos: 21,
          LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
        },
        AJ = !0,
        qJ = "[DecimalError] ",
        jJ = qJ + "Invalid argument: ",
        YJ = qJ + "Exponent out of range: ",
        hJ = Math.floor,
        DJ = Math.pow,
        sJ = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        nJ = 1e7,
        GJ = 9007199254740991,
        fJ = hJ(1286742750677284.5),
        xJ = {};

      function rJ(JJ, cJ) {
        var ZJ, FJ, UJ, eJ, XJ, qJ, jJ, YJ, hJ = JJ.constructor,
          DJ = hJ.precision;
        if (!JJ.s || !cJ.s) return cJ.s || (cJ = new hJ(JJ)), AJ ? MJ(cJ, DJ) : cJ;
        if (jJ = JJ.d, YJ = cJ.d, XJ = JJ.e, UJ = cJ.e, jJ = jJ.slice(), eJ = XJ - UJ) {
          for (eJ < 0 ? (FJ = jJ, eJ = -eJ, qJ = YJ.length) : (FJ = YJ, UJ = XJ, qJ = jJ.length), eJ > (qJ = (XJ = Math.ceil(DJ / 7)) > qJ ? XJ + 1 : qJ + 1) && (eJ = qJ, FJ.length = 1), FJ.reverse(); eJ--;) FJ.push(0);
          FJ.reverse()
        }
        for ((qJ = jJ.length) - (eJ = YJ.length) < 0 && (eJ = qJ, FJ = YJ, YJ = jJ, jJ = FJ), ZJ = 0; eJ;) ZJ = (jJ[--eJ] = jJ[eJ] + YJ[eJ] + ZJ) / nJ | 0, jJ[eJ] %= nJ;
        for (ZJ && (jJ.unshift(ZJ), ++UJ), qJ = jJ.length; 0 == jJ[--qJ];) jJ.pop();
        return cJ.d = jJ, cJ.e = UJ, AJ ? MJ(cJ, DJ) : cJ
      }

      function vJ(JJ, cJ, ZJ) {
        if (JJ !== ~~JJ || JJ < cJ || JJ > ZJ) throw Error(jJ + JJ)
      }

      function mJ(JJ) {
        var cJ, ZJ, FJ, UJ = JJ.length - 1,
          eJ = "",
          XJ = JJ[0];
        if (UJ > 0) {
          for (eJ += XJ, cJ = 1; cJ < UJ; cJ++)(ZJ = 7 - (FJ = JJ[cJ] + "").length) && (eJ += yJ(ZJ)), eJ += FJ;
          (ZJ = 7 - (FJ = (XJ = JJ[cJ]) + "").length) && (eJ += yJ(ZJ))
        } else if (0 === XJ) return "0";
        for (; XJ % 10 === 0;) XJ /= 10;
        return eJ + XJ
      }
      xJ.absoluteValue = xJ.abs = function() {
        var JJ = new this.constructor(this);
        return JJ.s && (JJ.s = 1), JJ
      }, xJ.comparedTo = xJ.cmp = function(JJ) {
        var cJ, ZJ, FJ, UJ, eJ = this;
        if (JJ = new eJ.constructor(JJ), eJ.s !== JJ.s) return eJ.s || -JJ.s;
        if (eJ.e !== JJ.e) return eJ.e > JJ.e ^ eJ.s < 0 ? 1 : -1;
        for (cJ = 0, ZJ = (FJ = eJ.d.length) < (UJ = JJ.d.length) ? FJ : UJ; cJ < ZJ; ++cJ)
          if (eJ.d[cJ] !== JJ.d[cJ]) return eJ.d[cJ] > JJ.d[cJ] ^ eJ.s < 0 ? 1 : -1;
        return FJ === UJ ? 0 : FJ > UJ ^ eJ.s < 0 ? 1 : -1
      }, xJ.decimalPlaces = xJ.dp = function() {
        var JJ = this,
          cJ = JJ.d.length - 1,
          ZJ = 7 * (cJ - JJ.e);
        if (cJ = JJ.d[cJ])
          for (; cJ % 10 == 0; cJ /= 10) ZJ--;
        return ZJ < 0 ? 0 : ZJ
      }, xJ.dividedBy = xJ.div = function(JJ) {
        return QJ(this, new this.constructor(JJ))
      }, xJ.dividedToIntegerBy = xJ.idiv = function(JJ) {
        var cJ = this.constructor;
        return MJ(QJ(this, new cJ(JJ), 0, 1), cJ.precision)
      }, xJ.equals = xJ.eq = function(JJ) {
        return !this.cmp(JJ)
      }, xJ.exponent = function() {
        return VJ(this)
      }, xJ.greaterThan = xJ.gt = function(JJ) {
        return this.cmp(JJ) > 0
      }, xJ.greaterThanOrEqualTo = xJ.gte = function(JJ) {
        return this.cmp(JJ) >= 0
      }, xJ.isInteger = xJ.isint = function() {
        return this.e > this.d.length - 2
      }, xJ.isNegative = xJ.isneg = function() {
        return this.s < 0
      }, xJ.isPositive = xJ.ispos = function() {
        return this.s > 0
      }, xJ.isZero = function() {
        return 0 === this.s
      }, xJ.lessThan = xJ.lt = function(JJ) {
        return this.cmp(JJ) < 0
      }, xJ.lessThanOrEqualTo = xJ.lte = function(JJ) {
        return this.cmp(JJ) < 1
      }, xJ.logarithm = xJ.log = function(JJ) {
        var cJ, ZJ = this,
          FJ = ZJ.constructor,
          eJ = FJ.precision,
          XJ = eJ + 5;
        if (void 0 === JJ) JJ = new FJ(10);
        else if ((JJ = new FJ(JJ)).s < 1 || JJ.eq(UJ)) throw Error(qJ + "NaN");
        if (ZJ.s < 1) throw Error(qJ + (ZJ.s ? "NaN" : "-Infinity"));
        return ZJ.eq(UJ) ? new FJ(0) : (AJ = !1, cJ = QJ(SJ(ZJ, XJ), SJ(JJ, XJ), XJ), AJ = !0, MJ(cJ, eJ))
      }, xJ.minus = xJ.sub = function(JJ) {
        var cJ = this;
        return JJ = new cJ.constructor(JJ), cJ.s == JJ.s ? bJ(cJ, JJ) : rJ(cJ, (JJ.s = -JJ.s, JJ))
      }, xJ.modulo = xJ.mod = function(JJ) {
        var cJ, ZJ = this,
          FJ = ZJ.constructor,
          UJ = FJ.precision;
        if (!(JJ = new FJ(JJ)).s) throw Error(qJ + "NaN");
        return ZJ.s ? (AJ = !1, cJ = QJ(ZJ, JJ, 0, 1).times(JJ), AJ = !0, ZJ.minus(cJ)) : MJ(new FJ(ZJ), UJ)
      }, xJ.naturalExponential = xJ.exp = function() {
        return EJ(this)
      }, xJ.naturalLogarithm = xJ.ln = function() {
        return SJ(this)
      }, xJ.negated = xJ.neg = function() {
        var JJ = new this.constructor(this);
        return JJ.s = -JJ.s || 0, JJ
      }, xJ.plus = xJ.add = function(JJ) {
        var cJ = this;
        return JJ = new cJ.constructor(JJ), cJ.s == JJ.s ? rJ(cJ, JJ) : bJ(cJ, (JJ.s = -JJ.s, JJ))
      }, xJ.precision = xJ.sd = function(JJ) {
        var cJ, ZJ, FJ, UJ = this;
        if (void 0 !== JJ && JJ !== !!JJ && 1 !== JJ && 0 !== JJ) throw Error(jJ + JJ);
        if (cJ = VJ(UJ) + 1, ZJ = 7 * (FJ = UJ.d.length - 1) + 1, FJ = UJ.d[FJ]) {
          for (; FJ % 10 == 0; FJ /= 10) ZJ--;
          for (FJ = UJ.d[0]; FJ >= 10; FJ /= 10) ZJ++
        }
        return JJ && cJ > ZJ ? cJ : ZJ
      }, xJ.squareRoot = xJ.sqrt = function() {
        var JJ, cJ, ZJ, FJ, UJ, eJ, XJ, jJ = this,
          YJ = jJ.constructor;
        if (jJ.s < 1) {
          if (!jJ.s) return new YJ(0);
          throw Error(qJ + "NaN")
        }
        for (JJ = VJ(jJ), AJ = !1, 0 == (UJ = Math.sqrt(+jJ)) || UJ == 1 / 0 ? (((cJ = mJ(jJ.d)).length + JJ) % 2 == 0 && (cJ += "0"), UJ = Math.sqrt(cJ), JJ = hJ((JJ + 1) / 2) - (JJ < 0 || JJ % 2), FJ = new YJ(cJ = UJ == 1 / 0 ? "1e" + JJ : (cJ = UJ.toExponential()).slice(0, cJ.indexOf("e") + 1) + JJ)) : FJ = new YJ(UJ.toString()), UJ = XJ = (ZJ = YJ.precision) + 3;;)
          if (FJ = (eJ = FJ).plus(QJ(jJ, eJ, XJ + 2)).times(.5), mJ(eJ.d).slice(0, XJ) === (cJ = mJ(FJ.d)).slice(0, XJ)) {
            if (cJ = cJ.slice(XJ - 3, XJ + 1), UJ == XJ && "4999" == cJ) {
              if (MJ(eJ, ZJ + 1, 0), eJ.times(eJ).eq(jJ)) {
                FJ = eJ;
                break
              }
            } else if ("9999" != cJ) break;
            XJ += 4
          } return AJ = !0, MJ(FJ, ZJ)
      }, xJ.times = xJ.mul = function(JJ) {
        var cJ, ZJ, FJ, UJ, eJ, XJ, qJ, jJ, YJ, hJ = this,
          DJ = hJ.constructor,
          sJ = hJ.d,
          GJ = (JJ = new DJ(JJ)).d;
        if (!hJ.s || !JJ.s) return new DJ(0);
        for (JJ.s *= hJ.s, ZJ = hJ.e + JJ.e, (jJ = sJ.length) < (YJ = GJ.length) && (eJ = sJ, sJ = GJ, GJ = eJ, XJ = jJ, jJ = YJ, YJ = XJ), eJ = [], FJ = XJ = jJ + YJ; FJ--;) eJ.push(0);
        for (FJ = YJ; --FJ >= 0;) {
          for (cJ = 0, UJ = jJ + FJ; UJ > FJ;) qJ = eJ[UJ] + GJ[FJ] * sJ[UJ - FJ - 1] + cJ, eJ[UJ--] = qJ % nJ | 0, cJ = qJ / nJ | 0;
          eJ[UJ] = (eJ[UJ] + cJ) % nJ | 0
        }
        for (; !eJ[--XJ];) eJ.pop();
        return cJ ? ++ZJ : eJ.shift(), JJ.d = eJ, JJ.e = ZJ, AJ ? MJ(JJ, DJ.precision) : JJ
      }, xJ.toDecimalPlaces = xJ.todp = function(JJ, cJ) {
        var ZJ = this,
          FJ = ZJ.constructor;
        return ZJ = new FJ(ZJ), void 0 === JJ ? ZJ : (vJ(JJ, 0, eJ), void 0 === cJ ? cJ = FJ.rounding : vJ(cJ, 0, 8), MJ(ZJ, JJ + VJ(ZJ) + 1, cJ))
      }, xJ.toExponential = function(JJ, cJ) {
        var ZJ, FJ = this,
          UJ = FJ.constructor;
        return void 0 === JJ ? ZJ = wJ(FJ, !0) : (vJ(JJ, 0, eJ), void 0 === cJ ? cJ = UJ.rounding : vJ(cJ, 0, 8), ZJ = wJ(FJ = MJ(new UJ(FJ), JJ + 1, cJ), !0, JJ + 1)), ZJ
      }, xJ.toFixed = function(JJ, cJ) {
        var ZJ, FJ, UJ = this,
          XJ = UJ.constructor;
        return void 0 === JJ ? wJ(UJ) : (vJ(JJ, 0, eJ), void 0 === cJ ? cJ = XJ.rounding : vJ(cJ, 0, 8), ZJ = wJ((FJ = MJ(new XJ(UJ), JJ + VJ(UJ) + 1, cJ)).abs(), !1, JJ + VJ(FJ) + 1), UJ.isneg() && !UJ.isZero() ? "-" + ZJ : ZJ)
      }, xJ.toInteger = xJ.toint = function() {
        var JJ = this,
          cJ = JJ.constructor;
        return MJ(new cJ(JJ), VJ(JJ) + 1, cJ.rounding)
      }, xJ.toNumber = function() {
        return +this
      }, xJ.toPower = xJ.pow = function(JJ) {
        var cJ, ZJ, FJ, eJ, XJ, jJ, YJ = this,
          DJ = YJ.constructor,
          sJ = +(JJ = new DJ(JJ));
        if (!JJ.s) return new DJ(UJ);
        if (!(YJ = new DJ(YJ)).s) {
          if (JJ.s < 1) throw Error(qJ + "Infinity");
          return YJ
        }
        if (YJ.eq(UJ)) return YJ;
        if (FJ = DJ.precision, JJ.eq(UJ)) return MJ(YJ, FJ);
        if (jJ = (cJ = JJ.e) >= (ZJ = JJ.d.length - 1), XJ = YJ.s, jJ) {
          if ((ZJ = sJ < 0 ? -sJ : sJ) <= GJ) {
            for (eJ = new DJ(UJ), cJ = Math.ceil(FJ / 7 + 4), AJ = !1; ZJ % 2 && WJ((eJ = eJ.times(YJ)).d, cJ), 0 !== (ZJ = hJ(ZJ / 2));) WJ((YJ = YJ.times(YJ)).d, cJ);
            return AJ = !0, JJ.s < 0 ? new DJ(UJ).div(eJ) : MJ(eJ, FJ)
          }
        } else if (XJ < 0) throw Error(qJ + "NaN");
        return XJ = XJ < 0 && 1 & JJ.d[Math.max(cJ, ZJ)] ? -1 : 1, YJ.s = 1, AJ = !1, eJ = JJ.times(SJ(YJ, FJ + 12)), AJ = !0, (eJ = EJ(eJ)).s = XJ, eJ
      }, xJ.toPrecision = function(JJ, cJ) {
        var ZJ, FJ, UJ = this,
          XJ = UJ.constructor;
        return void 0 === JJ ? FJ = wJ(UJ, (ZJ = VJ(UJ)) <= XJ.toExpNeg || ZJ >= XJ.toExpPos) : (vJ(JJ, 1, eJ), void 0 === cJ ? cJ = XJ.rounding : vJ(cJ, 0, 8), FJ = wJ(UJ = MJ(new XJ(UJ), JJ, cJ), JJ <= (ZJ = VJ(UJ)) || ZJ <= XJ.toExpNeg, JJ)), FJ
      }, xJ.toSignificantDigits = xJ.tosd = function(JJ, cJ) {
        var ZJ = this.constructor;
        return void 0 === JJ ? (JJ = ZJ.precision, cJ = ZJ.rounding) : (vJ(JJ, 1, eJ), void 0 === cJ ? cJ = ZJ.rounding : vJ(cJ, 0, 8)), MJ(new ZJ(this), JJ, cJ)
      }, xJ.toString = xJ.valueOf = xJ.val = xJ.toJSON = function() {
        var JJ = this,
          cJ = VJ(JJ),
          ZJ = JJ.constructor;
        return wJ(JJ, cJ <= ZJ.toExpNeg || cJ >= ZJ.toExpPos)
      };
      var QJ = function() {
        function JJ(JJ, cJ) {
          var ZJ, FJ = 0,
            UJ = JJ.length;
          for (JJ = JJ.slice(); UJ--;) ZJ = JJ[UJ] * cJ + FJ, JJ[UJ] = ZJ % nJ | 0, FJ = ZJ / nJ | 0;
          return FJ && JJ.unshift(FJ), JJ
        }

        function cJ(JJ, cJ, ZJ, FJ) {
          var UJ, eJ;
          if (ZJ != FJ) eJ = ZJ > FJ ? 1 : -1;
          else
            for (UJ = eJ = 0; UJ < ZJ; UJ++)
              if (JJ[UJ] != cJ[UJ]) {
                eJ = JJ[UJ] > cJ[UJ] ? 1 : -1;
                break
              } return eJ
        }

        function ZJ(JJ, cJ, ZJ) {
          for (var FJ = 0; ZJ--;) JJ[ZJ] -= FJ, FJ = JJ[ZJ] < cJ[ZJ] ? 1 : 0, JJ[ZJ] = FJ * nJ + JJ[ZJ] - cJ[ZJ];
          for (; !JJ[0] && JJ.length > 1;) JJ.shift()
        }
        return function(FJ, UJ, eJ, XJ) {
          var AJ, jJ, YJ, hJ, DJ, sJ, GJ, fJ, xJ, rJ, vJ, mJ, QJ, EJ, KJ, yJ, SJ, IJ, bJ = FJ.constructor,
            wJ = FJ.s == UJ.s ? 1 : -1,
            WJ = FJ.d,
            gJ = UJ.d;
          if (!FJ.s) return new bJ(FJ);
          if (!UJ.s) throw Error(qJ + "Division by zero");
          for (jJ = FJ.e - UJ.e, SJ = gJ.length, KJ = WJ.length, fJ = (GJ = new bJ(wJ)).d = [], YJ = 0; gJ[YJ] == (WJ[YJ] || 0);) ++YJ;
          if (gJ[YJ] > (WJ[YJ] || 0) && --jJ, (mJ = null == eJ ? eJ = bJ.precision : XJ ? eJ + (VJ(FJ) - VJ(UJ)) + 1 : eJ) < 0) return new bJ(0);
          if (mJ = mJ / 7 + 2 | 0, YJ = 0, 1 == SJ)
            for (hJ = 0, gJ = gJ[0], mJ++;
              (YJ < KJ || hJ) && mJ--; YJ++) QJ = hJ * nJ + (WJ[YJ] || 0), fJ[YJ] = QJ / gJ | 0, hJ = QJ % gJ | 0;
          else {
            for ((hJ = nJ / (gJ[0] + 1) | 0) > 1 && (gJ = JJ(gJ, hJ), WJ = JJ(WJ, hJ), SJ = gJ.length, KJ = WJ.length), EJ = SJ, rJ = (xJ = WJ.slice(0, SJ)).length; rJ < SJ;) xJ[rJ++] = 0;
            (IJ = gJ.slice()).unshift(0), yJ = gJ[0], gJ[1] >= nJ / 2 && ++yJ;
            do {
              hJ = 0, (AJ = cJ(gJ, xJ, SJ, rJ)) < 0 ? (vJ = xJ[0], SJ != rJ && (vJ = vJ * nJ + (xJ[1] || 0)), (hJ = vJ / yJ | 0) > 1 ? (hJ >= nJ && (hJ = nJ - 1), 1 == (AJ = cJ(DJ = JJ(gJ, hJ), xJ, sJ = DJ.length, rJ = xJ.length)) && (hJ--, ZJ(DJ, SJ < sJ ? IJ : gJ, sJ))) : (0 == hJ && (AJ = hJ = 1), DJ = gJ.slice()), (sJ = DJ.length) < rJ && DJ.unshift(0), ZJ(xJ, DJ, rJ), -1 == AJ && (AJ = cJ(gJ, xJ, SJ, rJ = xJ.length)) < 1 && (hJ++, ZJ(xJ, SJ < rJ ? IJ : gJ, rJ)), rJ = xJ.length) : 0 === AJ && (hJ++, xJ = [0]), fJ[YJ++] = hJ, AJ && xJ[0] ? xJ[rJ++] = WJ[EJ] || 0 : (xJ = [WJ[EJ]], rJ = 1)
            } while ((EJ++ < KJ || void 0 !== xJ[0]) && mJ--)
          }
          return fJ[0] || fJ.shift(), GJ.e = jJ, MJ(GJ, XJ ? eJ + VJ(GJ) + 1 : eJ)
        }
      }();

      function EJ(JJ, cJ) {
        var ZJ, FJ, eJ, XJ, qJ, jJ = 0,
          hJ = 0,
          sJ = JJ.constructor,
          nJ = sJ.precision;
        if (VJ(JJ) > 16) throw Error(YJ + VJ(JJ));
        if (!JJ.s) return new sJ(UJ);
        for (null == cJ ? (AJ = !1, qJ = nJ) : qJ = cJ, XJ = new sJ(.03125); JJ.abs().gte(.1);) JJ = JJ.times(XJ), hJ += 5;
        for (qJ += Math.log(DJ(2, hJ)) / Math.LN10 * 2 + 5 | 0, ZJ = FJ = eJ = new sJ(UJ), sJ.precision = qJ;;) {
          if (FJ = MJ(FJ.times(JJ), qJ), ZJ = ZJ.times(++jJ), mJ((XJ = eJ.plus(QJ(FJ, ZJ, qJ))).d).slice(0, qJ) === mJ(eJ.d).slice(0, qJ)) {
            for (; hJ--;) eJ = MJ(eJ.times(eJ), qJ);
            return sJ.precision = nJ, null == cJ ? (AJ = !0, MJ(eJ, nJ)) : eJ
          }
          eJ = XJ
        }
      }

      function VJ(JJ) {
        for (var cJ = 7 * JJ.e, ZJ = JJ.d[0]; ZJ >= 10; ZJ /= 10) cJ++;
        return cJ
      }

      function KJ(JJ, cJ, ZJ) {
        if (cJ > JJ.LN10.sd()) throw AJ = !0, ZJ && (JJ.precision = ZJ), Error(qJ + "LN10 precision limit exceeded");
        return MJ(new JJ(JJ.LN10), cJ)
      }

      function yJ(JJ) {
        for (var cJ = ""; JJ--;) cJ += "0";
        return cJ
      }

      function SJ(JJ, cJ) {
        var ZJ, FJ, eJ, XJ, jJ, YJ, hJ, DJ, sJ, nJ = 1,
          GJ = JJ,
          fJ = GJ.d,
          xJ = GJ.constructor,
          rJ = xJ.precision;
        if (GJ.s < 1) throw Error(qJ + (GJ.s ? "NaN" : "-Infinity"));
        if (GJ.eq(UJ)) return new xJ(0);
        if (null == cJ ? (AJ = !1, DJ = rJ) : DJ = cJ, GJ.eq(10)) return null == cJ && (AJ = !0), KJ(xJ, DJ);
        if (DJ += 10, xJ.precision = DJ, FJ = (ZJ = mJ(fJ)).charAt(0), XJ = VJ(GJ), !(Math.abs(XJ) < 15e14)) return hJ = KJ(xJ, DJ + 2, rJ).times(XJ + ""), GJ = SJ(new xJ(FJ + "." + ZJ.slice(1)), DJ - 10).plus(hJ), xJ.precision = rJ, null == cJ ? (AJ = !0, MJ(GJ, rJ)) : GJ;
        for (; FJ < 7 && 1 != FJ || 1 == FJ && ZJ.charAt(1) > 3;) FJ = (ZJ = mJ((GJ = GJ.times(JJ)).d)).charAt(0), nJ++;
        for (XJ = VJ(GJ), FJ > 1 ? (GJ = new xJ("0." + ZJ), XJ++) : GJ = new xJ(FJ + "." + ZJ.slice(1)), YJ = jJ = GJ = QJ(GJ.minus(UJ), GJ.plus(UJ), DJ), sJ = MJ(GJ.times(GJ), DJ), eJ = 3;;) {
          if (jJ = MJ(jJ.times(sJ), DJ), mJ((hJ = YJ.plus(QJ(jJ, new xJ(eJ), DJ))).d).slice(0, DJ) === mJ(YJ.d).slice(0, DJ)) return YJ = YJ.times(2), 0 !== XJ && (YJ = YJ.plus(KJ(xJ, DJ + 2, rJ).times(XJ + ""))), YJ = QJ(YJ, new xJ(nJ), DJ), xJ.precision = rJ, null == cJ ? (AJ = !0, MJ(YJ, rJ)) : YJ;
          YJ = hJ, eJ += 2
        }
      }

      function IJ(JJ, cJ) {
        var ZJ, FJ, UJ;
        for ((ZJ = cJ.indexOf(".")) > -1 && (cJ = cJ.replace(".", "")), (FJ = cJ.search(/e/i)) > 0 ? (ZJ < 0 && (ZJ = FJ), ZJ += +cJ.slice(FJ + 1), cJ = cJ.substring(0, FJ)) : ZJ < 0 && (ZJ = cJ.length), FJ = 0; 48 === cJ.charCodeAt(FJ);) ++FJ;
        for (UJ = cJ.length; 48 === cJ.charCodeAt(UJ - 1);) --UJ;
        if (cJ = cJ.slice(FJ, UJ)) {
          if (UJ -= FJ, ZJ = ZJ - FJ - 1, JJ.e = hJ(ZJ / 7), JJ.d = [], FJ = (ZJ + 1) % 7, ZJ < 0 && (FJ += 7), FJ < UJ) {
            for (FJ && JJ.d.push(+cJ.slice(0, FJ)), UJ -= 7; FJ < UJ;) JJ.d.push(+cJ.slice(FJ, FJ += 7));
            FJ = 7 - (cJ = cJ.slice(FJ)).length
          } else FJ -= UJ;
          for (; FJ--;) cJ += "0";
          if (JJ.d.push(+cJ), AJ && (JJ.e > fJ || JJ.e < -fJ)) throw Error(YJ + ZJ)
        } else JJ.s = 0, JJ.e = 0, JJ.d = [0];
        return JJ
      }

      function MJ(JJ, cJ, ZJ) {
        var FJ, UJ, eJ, XJ, qJ, jJ, sJ, GJ, xJ = JJ.d;
        for (XJ = 1, eJ = xJ[0]; eJ >= 10; eJ /= 10) XJ++;
        if ((FJ = cJ - XJ) < 0) FJ += 7, UJ = cJ, sJ = xJ[GJ = 0];
        else {
          if ((GJ = Math.ceil((FJ + 1) / 7)) >= (eJ = xJ.length)) return JJ;
          for (sJ = eJ = xJ[GJ], XJ = 1; eJ >= 10; eJ /= 10) XJ++;
          UJ = (FJ %= 7) - 7 + XJ
        }
        if (void 0 !== ZJ && (qJ = sJ / (eJ = DJ(10, XJ - UJ - 1)) % 10 | 0, jJ = cJ < 0 || void 0 !== xJ[GJ + 1] || sJ % eJ, jJ = ZJ < 4 ? (qJ || jJ) && (0 == ZJ || ZJ == (JJ.s < 0 ? 3 : 2)) : qJ > 5 || 5 == qJ && (4 == ZJ || jJ || 6 == ZJ && (FJ > 0 ? UJ > 0 ? sJ / DJ(10, XJ - UJ) : 0 : xJ[GJ - 1]) % 10 & 1 || ZJ == (JJ.s < 0 ? 8 : 7))), cJ < 1 || !xJ[0]) return jJ ? (eJ = VJ(JJ), xJ.length = 1, cJ = cJ - eJ - 1, xJ[0] = DJ(10, (7 - cJ % 7) % 7), JJ.e = hJ(-cJ / 7) || 0) : (xJ.length = 1, xJ[0] = JJ.e = JJ.s = 0), JJ;
        if (0 == FJ ? (xJ.length = GJ, eJ = 1, GJ--) : (xJ.length = GJ + 1, eJ = DJ(10, 7 - FJ), xJ[GJ] = UJ > 0 ? (sJ / DJ(10, XJ - UJ) % DJ(10, UJ) | 0) * eJ : 0), jJ)
          for (;;) {
            if (0 == GJ) {
              (xJ[0] += eJ) == nJ && (xJ[0] = 1, ++JJ.e);
              break
            }
            if (xJ[GJ] += eJ, xJ[GJ] != nJ) break;
            xJ[GJ--] = 0, eJ = 1
          }
        for (FJ = xJ.length; 0 === xJ[--FJ];) xJ.pop();
        if (AJ && (JJ.e > fJ || JJ.e < -fJ)) throw Error(YJ + VJ(JJ));
        return JJ
      }

      function bJ(JJ, cJ) {
        var ZJ, FJ, UJ, eJ, XJ, qJ, jJ, YJ, hJ, DJ, sJ = JJ.constructor,
          GJ = sJ.precision;
        if (!JJ.s || !cJ.s) return cJ.s ? cJ.s = -cJ.s : cJ = new sJ(JJ), AJ ? MJ(cJ, GJ) : cJ;
        if (jJ = JJ.d, DJ = cJ.d, FJ = cJ.e, YJ = JJ.e, jJ = jJ.slice(), XJ = YJ - FJ) {
          for ((hJ = XJ < 0) ? (ZJ = jJ, XJ = -XJ, qJ = DJ.length) : (ZJ = DJ, FJ = YJ, qJ = jJ.length), XJ > (UJ = Math.max(Math.ceil(GJ / 7), qJ) + 2) && (XJ = UJ, ZJ.length = 1), ZJ.reverse(), UJ = XJ; UJ--;) ZJ.push(0);
          ZJ.reverse()
        } else {
          for ((hJ = (UJ = jJ.length) < (qJ = DJ.length)) && (qJ = UJ), UJ = 0; UJ < qJ; UJ++)
            if (jJ[UJ] != DJ[UJ]) {
              hJ = jJ[UJ] < DJ[UJ];
              break
            } XJ = 0
        }
        for (hJ && (ZJ = jJ, jJ = DJ, DJ = ZJ, cJ.s = -cJ.s), qJ = jJ.length, UJ = DJ.length - qJ; UJ > 0; --UJ) jJ[qJ++] = 0;
        for (UJ = DJ.length; UJ > XJ;) {
          if (jJ[--UJ] < DJ[UJ]) {
            for (eJ = UJ; eJ && 0 === jJ[--eJ];) jJ[eJ] = nJ - 1;
            --jJ[eJ], jJ[UJ] += nJ
          }
          jJ[UJ] -= DJ[UJ]
        }
        for (; 0 === jJ[--qJ];) jJ.pop();
        for (; 0 === jJ[0]; jJ.shift()) --FJ;
        return jJ[0] ? (cJ.d = jJ, cJ.e = FJ, AJ ? MJ(cJ, GJ) : cJ) : new sJ(0)
      }

      function wJ(JJ, cJ, ZJ) {
        var FJ, UJ = VJ(JJ),
          eJ = mJ(JJ.d),
          XJ = eJ.length;
        return cJ ? (ZJ && (FJ = ZJ - XJ) > 0 ? eJ = eJ.charAt(0) + "." + eJ.slice(1) + yJ(FJ) : XJ > 1 && (eJ = eJ.charAt(0) + "." + eJ.slice(1)), eJ = eJ + (UJ < 0 ? "e" : "e+") + UJ) : UJ < 0 ? (eJ = "0." + yJ(-UJ - 1) + eJ, ZJ && (FJ = ZJ - XJ) > 0 && (eJ += yJ(FJ))) : UJ >= XJ ? (eJ += yJ(UJ + 1 - XJ), ZJ && (FJ = ZJ - UJ - 1) > 0 && (eJ = eJ + "." + yJ(FJ))) : ((FJ = UJ + 1) < XJ && (eJ = eJ.slice(0, FJ) + "." + eJ.slice(FJ)), ZJ && (FJ = ZJ - XJ) > 0 && (UJ + 1 === XJ && (eJ += "."), eJ += yJ(FJ))), JJ.s < 0 ? "-" + eJ : eJ
      }

      function WJ(JJ, cJ) {
        if (JJ.length > cJ) return JJ.length = cJ, !0
      }

      function gJ(JJ) {
        if (!JJ || "object" !== typeof JJ) throw Error(qJ + "Object expected");
        var cJ, ZJ, FJ, UJ = ["precision", 1, eJ, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
        for (cJ = 0; cJ < UJ.length; cJ += 3)
          if (void 0 !== (FJ = JJ[ZJ = UJ[cJ]])) {
            if (!(hJ(FJ) === FJ && FJ >= UJ[cJ + 1] && FJ <= UJ[cJ + 2])) throw Error(jJ + ZJ + ": " + FJ);
            this[ZJ] = FJ
          } if (void 0 !== (FJ = JJ[ZJ = "LN10"])) {
          if (FJ != Math.LN10) throw Error(jJ + ZJ + ": " + FJ);
          this[ZJ] = new this(FJ)
        }
        return this
      }
      XJ = function JJ(cJ) {
        var ZJ, FJ, UJ;

        function eJ(JJ) {
          var cJ = this;
          if (!(cJ instanceof eJ)) return new eJ(JJ);
          if (cJ.constructor = eJ, JJ instanceof eJ) return cJ.s = JJ.s, cJ.e = JJ.e, void(cJ.d = (JJ = JJ.d) ? JJ.slice() : JJ);
          if ("number" === typeof JJ) {
            if (0 * JJ !== 0) throw Error(jJ + JJ);
            if (JJ > 0) cJ.s = 1;
            else {
              if (!(JJ < 0)) return cJ.s = 0, cJ.e = 0, void(cJ.d = [0]);
              JJ = -JJ, cJ.s = -1
            }
            return JJ === ~~JJ && JJ < 1e7 ? (cJ.e = 0, void(cJ.d = [JJ])) : IJ(cJ, JJ.toString())
          }
          if ("string" !== typeof JJ) throw Error(jJ + JJ);
          if (45 === JJ.charCodeAt(0) ? (JJ = JJ.slice(1), cJ.s = -1) : cJ.s = 1, !sJ.test(JJ)) throw Error(jJ + JJ);
          IJ(cJ, JJ)
        }
        if (eJ.prototype = xJ, eJ.ROUND_UP = 0, eJ.ROUND_DOWN = 1, eJ.ROUND_CEIL = 2, eJ.ROUND_FLOOR = 3, eJ.ROUND_HALF_UP = 4, eJ.ROUND_HALF_DOWN = 5, eJ.ROUND_HALF_EVEN = 6, eJ.ROUND_HALF_CEIL = 7, eJ.ROUND_HALF_FLOOR = 8, eJ.clone = JJ, eJ.config = eJ.set = gJ, void 0 === cJ && (cJ = {}), cJ)
          for (UJ = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], ZJ = 0; ZJ < UJ.length;) cJ.hasOwnProperty(FJ = UJ[ZJ++]) || (cJ[FJ] = this[FJ]);
        return eJ.config(cJ), eJ
      }(XJ), XJ.default = XJ.Decimal = XJ, UJ = new XJ(1), void 0 === (FJ = function() {
        return XJ
      }.call(cJ, ZJ, cJ, JJ)) || (JJ.exports = FJ)
    }()
  },
  5130: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4637)(ZJ(4493), "DataView");
    JJ.exports = FJ
  },
  4613: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4619),
      UJ = ZJ(4676),
      eJ = ZJ(4681),
      XJ = ZJ(4683),
      AJ = ZJ(4685);

    function qJ(JJ) {
      var cJ = -1,
        ZJ = null == JJ ? 0 : JJ.length;
      for (this.clear(); ++cJ < ZJ;) {
        var FJ = JJ[cJ];
        this.set(FJ[0], FJ[1])
      }
    }
    qJ.prototype.clear = FJ, qJ.prototype.delete = UJ, qJ.prototype.get = eJ, qJ.prototype.has = XJ, qJ.prototype.set = AJ, JJ.exports = qJ
  },
  4693: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4700),
      UJ = ZJ(4705),
      eJ = ZJ(4723),
      XJ = ZJ(4727),
      AJ = ZJ(4732);

    function qJ(JJ) {
      var cJ = -1,
        ZJ = null == JJ ? 0 : JJ.length;
      for (this.clear(); ++cJ < ZJ;) {
        var FJ = JJ[cJ];
        this.set(FJ[0], FJ[1])
      }
    }
    qJ.prototype.clear = FJ, qJ.prototype.delete = UJ, qJ.prototype.get = eJ, qJ.prototype.has = XJ, qJ.prototype.set = AJ, JJ.exports = qJ
  },
  4735: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4637)(ZJ(4493), "Map");
    JJ.exports = FJ
  },
  4602: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4610),
      UJ = ZJ(4737),
      eJ = ZJ(4753),
      XJ = ZJ(4759),
      AJ = ZJ(4765);

    function qJ(JJ) {
      var cJ = -1,
        ZJ = null == JJ ? 0 : JJ.length;
      for (this.clear(); ++cJ < ZJ;) {
        var FJ = JJ[cJ];
        this.set(FJ[0], FJ[1])
      }
    }
    qJ.prototype.clear = FJ, qJ.prototype.delete = UJ, qJ.prototype.get = eJ, qJ.prototype.has = XJ, qJ.prototype.set = AJ, JJ.exports = qJ
  },
  5136: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4637)(ZJ(4493), "Promise");
    JJ.exports = FJ
  },
  5141: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4637)(ZJ(4493), "Set");
    JJ.exports = FJ
  },
  4977: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4602),
      UJ = ZJ(4979),
      eJ = ZJ(4988);

    function XJ(JJ) {
      var cJ = -1,
        ZJ = null == JJ ? 0 : JJ.length;
      for (this.__data__ = new FJ; ++cJ < ZJ;) this.add(JJ[cJ])
    }
    XJ.prototype.add = XJ.prototype.push = UJ, XJ.prototype.has = eJ, JJ.exports = XJ
  },
  4938: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4693),
      UJ = ZJ(4943),
      eJ = ZJ(4952),
      XJ = ZJ(4959),
      AJ = ZJ(4961),
      qJ = ZJ(4963);

    function jJ(JJ) {
      var cJ = this.__data__ = new FJ(JJ);
      this.size = cJ.size
    }
    jJ.prototype.clear = UJ, jJ.prototype.delete = eJ, jJ.prototype.get = XJ, jJ.prototype.has = AJ, jJ.prototype.set = qJ, JJ.exports = jJ
  },
  4521: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4493).Symbol;
    JJ.exports = FJ
  },
  5005: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4493).Uint8Array;
    JJ.exports = FJ
  },
  5147: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4637)(ZJ(4493), "WeakMap");
    JJ.exports = FJ
  },
  5294: JJ => {
    JJ.exports = function(JJ, cJ, ZJ) {
      switch (ZJ.length) {
        case 0:
          return JJ.call(cJ);
        case 1:
          return JJ.call(cJ, ZJ[0]);
        case 2:
          return JJ.call(cJ, ZJ[0], ZJ[1]);
        case 3:
          return JJ.call(cJ, ZJ[0], ZJ[1], ZJ[2])
      }
      return JJ.apply(cJ, ZJ)
    }
  },
  5623: JJ => {
    JJ.exports = function(JJ, cJ) {
      for (var ZJ = -1, FJ = null == JJ ? 0 : JJ.length; ++ZJ < FJ;)
        if (!cJ(JJ[ZJ], ZJ, JJ)) return !1;
      return !0
    }
  },
  5040: JJ => {
    JJ.exports = function(JJ, cJ) {
      for (var ZJ = -1, FJ = null == JJ ? 0 : JJ.length, UJ = 0, eJ = []; ++ZJ < FJ;) {
        var XJ = JJ[ZJ];
        cJ(XJ, ZJ, JJ) && (eJ[UJ++] = XJ)
      }
      return eJ
    }
  },
  5360: (JJ, cJ, ZJ) => {
    var FJ = ZJ(5366);
    JJ.exports = function(JJ, cJ) {
      return !!(null == JJ ? 0 : JJ.length) && FJ(JJ, cJ, 0) > -1
    }
  },
  5386: JJ => {
    JJ.exports = function(JJ, cJ, ZJ) {
      for (var FJ = -1, UJ = null == JJ ? 0 : JJ.length; ++FJ < UJ;)
        if (ZJ(cJ, JJ[FJ])) return !0;
      return !1
    }
  },
  5060: (JJ, cJ, ZJ) => {
    var FJ = ZJ(5066),
      UJ = ZJ(4905),
      eJ = ZJ(4548),
      XJ = ZJ(5071),
      AJ = ZJ(4872),
      qJ = ZJ(5085),
      jJ = Object.prototype.hasOwnProperty;
    JJ.exports = function(JJ, cJ) {
      var ZJ = eJ(JJ),
        YJ = !ZJ && UJ(JJ),
        hJ = !ZJ && !YJ && XJ(JJ),
        DJ = !ZJ && !YJ && !hJ && qJ(JJ),
        sJ = ZJ || YJ || hJ || DJ,
        nJ = sJ ? FJ(JJ.length, String) : [],
        GJ = nJ.length;
      for (var fJ in JJ) !cJ && !jJ.call(JJ, fJ) || sJ && ("length" == fJ || hJ && ("offset" == fJ || "parent" == fJ) || DJ && ("buffer" == fJ || "byteLength" == fJ || "byteOffset" == fJ) || AJ(fJ, GJ)) || nJ.push(fJ);
      return nJ
    }
  },
  4777: JJ => {
    JJ.exports = function(JJ, cJ) {
      for (var ZJ = -1, FJ = null == JJ ? 0 : JJ.length, UJ = Array(FJ); ++ZJ < FJ;) UJ[ZJ] = cJ(JJ[ZJ], ZJ, JJ);
      return UJ
    }
  },
  4897: JJ => {
    JJ.exports = function(JJ, cJ) {
      for (var ZJ = -1, FJ = cJ.length, UJ = JJ.length; ++ZJ < FJ;) JJ[UJ + ZJ] = cJ[ZJ];
      return JJ
    }
  },
  4992: JJ => {
    JJ.exports = function(JJ, cJ) {
      for (var ZJ = -1, FJ = null == JJ ? 0 : JJ.length; ++ZJ < FJ;)
        if (cJ(JJ[ZJ], ZJ, JJ)) return !0;
      return !1
    }
  },
  5447: JJ => {
    JJ.exports = function(JJ) {
      return JJ.split("")
    }
  },
  4711: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4714);
    JJ.exports = function(JJ, cJ) {
      for (var ZJ = JJ.length; ZJ--;)
        if (FJ(JJ[ZJ][0], cJ)) return ZJ;
      return -1
    }
  },
  5610: (JJ, cJ, ZJ) => {
    var FJ = ZJ(5310);
    JJ.exports = function(JJ, cJ, ZJ) {
      "__proto__" == cJ && FJ ? FJ(JJ, cJ, {
        configurable: !0,
        enumerable: !0,
        value: ZJ,
        writable: !0
      }) : JJ[cJ] = ZJ
    }
  },
  5230: (JJ, cJ, ZJ) => {
    var FJ = ZJ(5239),
      UJ = ZJ(5254)(FJ);
    JJ.exports = UJ
  },
  5630: (JJ, cJ, ZJ) => {
    var FJ = ZJ(5230);
    JJ.exports = function(JJ, cJ) {
      var ZJ = !0;
      return FJ(JJ, (function(JJ, FJ, UJ) {
        return ZJ = !!cJ(JJ, FJ, UJ)
      })), ZJ
    }
  },
  5519: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4509);
    JJ.exports = function(JJ, cJ, ZJ) {
      for (var UJ = -1, eJ = JJ.length; ++UJ < eJ;) {
        var XJ = JJ[UJ],
          AJ = cJ(XJ);
        if (null != AJ && (void 0 === qJ ? AJ === AJ && !FJ(AJ) : ZJ(AJ, qJ))) var qJ = AJ,
          jJ = XJ
      }
      return jJ
    }
  },
  5372: JJ => {
    JJ.exports = function(JJ, cJ, ZJ, FJ) {
      for (var UJ = JJ.length, eJ = ZJ + (FJ ? 1 : -1); FJ ? eJ-- : ++eJ < UJ;)
        if (cJ(JJ[eJ], eJ, JJ)) return eJ;
      return -1
    }
  },
  4891: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4897),
      UJ = ZJ(4899);
    JJ.exports = function JJ(cJ, ZJ, eJ, XJ, AJ) {
      var qJ = -1,
        jJ = cJ.length;
      for (eJ || (eJ = UJ), AJ || (AJ = []); ++qJ < jJ;) {
        var YJ = cJ[qJ];
        ZJ > 0 && eJ(YJ) ? ZJ > 1 ? JJ(YJ, ZJ - 1, eJ, XJ, AJ) : FJ(AJ, YJ) : XJ || (AJ[AJ.length] = YJ)
      }
      return AJ
    }
  },
  5244: (JJ, cJ, ZJ) => {
    var FJ = ZJ(5246)();
    JJ.exports = FJ
  },
  5239: (JJ, cJ, ZJ) => {
    var FJ = ZJ(5244),
      UJ = ZJ(5053);
    JJ.exports = function(JJ, cJ) {
      return JJ && FJ(JJ, cJ, UJ)
    }
  },
  4563: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4572),
      UJ = ZJ(4783);
    JJ.exports = function(JJ, cJ) {
      for (var ZJ = 0, eJ = (cJ = FJ(cJ, JJ)).length; null != JJ && ZJ < eJ;) JJ = JJ[UJ(cJ[ZJ++])];
      return ZJ && ZJ == eJ ? JJ : void 0
    }
  },
  5027: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4897),
      UJ = ZJ(4548);
    JJ.exports = function(JJ, cJ, ZJ) {
      var eJ = cJ(JJ);
      return UJ(JJ) ? eJ : FJ(eJ, ZJ(JJ))
    }
  },
  4512: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4521),
      UJ = ZJ(4530),
      eJ = ZJ(4537),
      XJ = FJ ? FJ.toStringTag : void 0;
    JJ.exports = function(JJ) {
      return null == JJ ? void 0 === JJ ? "[object Undefined]" : "[object Null]" : XJ && XJ in Object(JJ) ? UJ(JJ) : eJ(JJ)
    }
  },
  5523: JJ => {
    JJ.exports = function(JJ, cJ) {
      return JJ > cJ
    }
  },
  5184: JJ => {
    JJ.exports = function(JJ, cJ) {
      return null != JJ && cJ in Object(JJ)
    }
  },
  5366: (JJ, cJ, ZJ) => {
    var FJ = ZJ(5372),
      UJ = ZJ(5380),
      eJ = ZJ(5382);
    JJ.exports = function(JJ, cJ, ZJ) {
      return cJ === cJ ? eJ(JJ, cJ, ZJ) : FJ(JJ, UJ, ZJ)
    }
  },
  4911: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4512),
      UJ = ZJ(4540);
    JJ.exports = function(JJ) {
      return UJ(JJ) && "[object Arguments]" == FJ(JJ)
    }
  },
  4967: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4970),
      UJ = ZJ(4540);
    JJ.exports = function JJ(cJ, ZJ, eJ, XJ, AJ) {
      return cJ === ZJ || (null == cJ || null == ZJ || !UJ(cJ) && !UJ(ZJ) ? cJ !== cJ && ZJ !== ZJ : FJ(cJ, ZJ, eJ, XJ, JJ, AJ))
    }
  },
  4970: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4938),
      UJ = ZJ(4974),
      eJ = ZJ(5e3),
      XJ = ZJ(5022),
      AJ = ZJ(5128),
      qJ = ZJ(4548),
      jJ = ZJ(5071),
      YJ = ZJ(5085),
      hJ = "[object Arguments]",
      DJ = "[object Array]",
      sJ = "[object Object]",
      nJ = Object.prototype.hasOwnProperty;
    JJ.exports = function(JJ, cJ, ZJ, GJ, fJ, xJ) {
      var rJ = qJ(JJ),
        vJ = qJ(cJ),
        mJ = rJ ? DJ : AJ(JJ),
        QJ = vJ ? DJ : AJ(cJ),
        EJ = (mJ = mJ == hJ ? sJ : mJ) == sJ,
        VJ = (QJ = QJ == hJ ? sJ : QJ) == sJ,
        KJ = mJ == QJ;
      if (KJ && jJ(JJ)) {
        if (!jJ(cJ)) return !1;
        rJ = !0, EJ = !1
      }
      if (KJ && !EJ) return xJ || (xJ = new FJ), rJ || YJ(JJ) ? UJ(JJ, cJ, ZJ, GJ, fJ, xJ) : eJ(JJ, cJ, mJ, ZJ, GJ, fJ, xJ);
      if (!(1 & ZJ)) {
        var yJ = EJ && nJ.call(JJ, "__wrapped__"),
          SJ = VJ && nJ.call(cJ, "__wrapped__");
        if (yJ || SJ) {
          var IJ = yJ ? JJ.value() : JJ,
            MJ = SJ ? cJ.value() : cJ;
          return xJ || (xJ = new FJ), fJ(IJ, MJ, ZJ, GJ, xJ)
        }
      }
      return !!KJ && (xJ || (xJ = new FJ), XJ(JJ, cJ, ZJ, GJ, fJ, xJ))
    }
  },
  4932: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4938),
      UJ = ZJ(4967);
    JJ.exports = function(JJ, cJ, ZJ, eJ) {
      var XJ = ZJ.length,
        AJ = XJ,
        qJ = !eJ;
      if (null == JJ) return !AJ;
      for (JJ = Object(JJ); XJ--;) {
        var jJ = ZJ[XJ];
        if (qJ && jJ[2] ? jJ[1] !== JJ[jJ[0]] : !(jJ[0] in JJ)) return !1
      }
      for (; ++XJ < AJ;) {
        var YJ = (jJ = ZJ[XJ])[0],
          hJ = JJ[YJ],
          DJ = jJ[1];
        if (qJ && jJ[2]) {
          if (void 0 === hJ && !(YJ in JJ)) return !1
        } else {
          var sJ = new FJ;
          if (eJ) var nJ = eJ(hJ, DJ, YJ, JJ, cJ, sJ);
          if (!(void 0 === nJ ? UJ(DJ, hJ, 3, eJ, sJ) : nJ)) return !1
        }
      }
      return !0
    }
  },
  5380: JJ => {
    JJ.exports = function(JJ) {
      return JJ !== JJ
    }
  },
  4639: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4641),
      UJ = ZJ(4648),
      eJ = ZJ(4480),
      XJ = ZJ(4663),
      AJ = /^\[object .+?Constructor\]$/,
      qJ = Function.prototype,
      jJ = Object.prototype,
      YJ = qJ.toString,
      hJ = jJ.hasOwnProperty,
      DJ = RegExp("^" + YJ.call(hJ).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    JJ.exports = function(JJ) {
      return !(!eJ(JJ) || UJ(JJ)) && (FJ(JJ) ? DJ : AJ).test(XJ(JJ))
    }
  },
  5092: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4512),
      UJ = ZJ(4866),
      eJ = ZJ(4540),
      XJ = {};
    XJ["[object Float32Array]"] = XJ["[object Float64Array]"] = XJ["[object Int8Array]"] = XJ["[object Int16Array]"] = XJ["[object Int32Array]"] = XJ["[object Uint8Array]"] = XJ["[object Uint8ClampedArray]"] = XJ["[object Uint16Array]"] = XJ["[object Uint32Array]"] = !0, XJ["[object Arguments]"] = XJ["[object Array]"] = XJ["[object ArrayBuffer]"] = XJ["[object Boolean]"] = XJ["[object DataView]"] = XJ["[object Date]"] = XJ["[object Error]"] = XJ["[object Function]"] = XJ["[object Map]"] = XJ["[object Number]"] = XJ["[object Object]"] = XJ["[object RegExp]"] = XJ["[object Set]"] = XJ["[object String]"] = XJ["[object WeakMap]"] = !1, JJ.exports = function(JJ) {
      return eJ(JJ) && UJ(JJ.length) && !!XJ[FJ(JJ)]
    }
  },
  4923: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4928),
      UJ = ZJ(5169),
      eJ = ZJ(5196),
      XJ = ZJ(4548),
      AJ = ZJ(5205);
    JJ.exports = function(JJ) {
      return "function" == typeof JJ ? JJ : null == JJ ? eJ : "object" == typeof JJ ? XJ(JJ) ? UJ(JJ[0], JJ[1]) : FJ(JJ) : AJ(JJ)
    }
  },
  5108: (JJ, cJ, ZJ) => {
    var FJ = ZJ(5111),
      UJ = ZJ(5116),
      eJ = Object.prototype.hasOwnProperty;
    JJ.exports = function(JJ) {
      if (!FJ(JJ)) return UJ(JJ);
      var cJ = [];
      for (var ZJ in Object(JJ)) eJ.call(JJ, ZJ) && "constructor" != ZJ && cJ.push(ZJ);
      return cJ
    }
  },
  5540: JJ => {
    JJ.exports = function(JJ, cJ) {
      return JJ < cJ
    }
  },
  5221: (JJ, cJ, ZJ) => {
    var FJ = ZJ(5230),
      UJ = ZJ(4860);
    JJ.exports = function(JJ, cJ) {
      var ZJ = -1,
        eJ = UJ(JJ) ? Array(JJ.length) : [];
      return FJ(JJ, (function(JJ, FJ, UJ) {
        eJ[++ZJ] = cJ(JJ, FJ, UJ)
      })), eJ
    }
  },
  4928: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4932),
      UJ = ZJ(5152),
      eJ = ZJ(5167);
    JJ.exports = function(JJ) {
      var cJ = UJ(JJ);
      return 1 == cJ.length && cJ[0][2] ? eJ(cJ[0][0], cJ[0][1]) : function(ZJ) {
        return ZJ === JJ || FJ(ZJ, JJ, cJ)
      }
    }
  },
  5169: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4967),
      UJ = ZJ(4561),
      eJ = ZJ(5177),
      XJ = ZJ(4578),
      AJ = ZJ(5158),
      qJ = ZJ(5167),
      jJ = ZJ(4783);
    JJ.exports = function(JJ, cJ) {
      return XJ(JJ) && AJ(cJ) ? qJ(jJ(JJ), cJ) : function(ZJ) {
        var XJ = UJ(ZJ, JJ);
        return void 0 === XJ && XJ === cJ ? eJ(ZJ, JJ) : FJ(cJ, XJ, 3)
      }
    }
  },
  4917: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4777),
      UJ = ZJ(4563),
      eJ = ZJ(4923),
      XJ = ZJ(5221),
      AJ = ZJ(5257),
      qJ = ZJ(5095),
      jJ = ZJ(5265),
      YJ = ZJ(5196),
      hJ = ZJ(4548);
    JJ.exports = function(JJ, cJ, ZJ) {
      cJ = cJ.length ? FJ(cJ, (function(JJ) {
        return hJ(JJ) ? function(cJ) {
          return UJ(cJ, 1 === JJ.length ? JJ[0] : JJ)
        } : JJ
      })) : [YJ];
      var DJ = -1;
      cJ = FJ(cJ, qJ(eJ));
      var sJ = XJ(JJ, (function(JJ, ZJ, UJ) {
        return {
          criteria: FJ(cJ, (function(cJ) {
            return cJ(JJ)
          })),
          index: ++DJ,
          value: JJ
        }
      }));
      return AJ(sJ, (function(JJ, cJ) {
        return jJ(JJ, cJ, ZJ)
      }))
    }
  },
  5207: JJ => {
    JJ.exports = function(JJ) {
      return function(cJ) {
        return null == cJ ? void 0 : cJ[JJ]
      }
    }
  },
  5213: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4563);
    JJ.exports = function(JJ) {
      return function(cJ) {
        return FJ(cJ, JJ)
      }
    }
  },
  4848: JJ => {
    var cJ = Math.ceil,
      ZJ = Math.max;
    JJ.exports = function(JJ, FJ, UJ, eJ) {
      for (var XJ = -1, AJ = ZJ(cJ((FJ - JJ) / (UJ || 1)), 0), qJ = Array(AJ); AJ--;) qJ[eJ ? AJ : ++XJ] = JJ, JJ += UJ;
      return qJ
    }
  },
  5283: (JJ, cJ, ZJ) => {
    var FJ = ZJ(5196),
      UJ = ZJ(5291),
      eJ = ZJ(5300);
    JJ.exports = function(JJ, cJ) {
      return eJ(UJ(JJ, cJ, FJ), JJ + "")
    }
  },
  5305: (JJ, cJ, ZJ) => {
    var FJ = ZJ(5307),
      UJ = ZJ(5310),
      eJ = ZJ(5196),
      XJ = UJ ? function(JJ, cJ) {
        return UJ(JJ, "toString", {
          configurable: !0,
          enumerable: !1,
          value: FJ(cJ),
          writable: !0
        })
      } : eJ;
    JJ.exports = XJ
  },
  5438: JJ => {
    JJ.exports = function(JJ, cJ, ZJ) {
      var FJ = -1,
        UJ = JJ.length;
      cJ < 0 && (cJ = -cJ > UJ ? 0 : UJ + cJ), (ZJ = ZJ > UJ ? UJ : ZJ) < 0 && (ZJ += UJ), UJ = cJ > ZJ ? 0 : ZJ - cJ >>> 0, cJ >>>= 0;
      for (var eJ = Array(UJ); ++FJ < UJ;) eJ[FJ] = JJ[FJ + cJ];
      return eJ
    }
  },
  5694: (JJ, cJ, ZJ) => {
    var FJ = ZJ(5230);
    JJ.exports = function(JJ, cJ) {
      var ZJ;
      return FJ(JJ, (function(JJ, FJ, UJ) {
        return !(ZJ = cJ(JJ, FJ, UJ))
      })), !!ZJ
    }
  },
  5257: JJ => {
    JJ.exports = function(JJ, cJ) {
      var ZJ = JJ.length;
      for (JJ.sort(cJ); ZJ--;) JJ[ZJ] = JJ[ZJ].value;
      return JJ
    }
  },
  5066: JJ => {
    JJ.exports = function(JJ, cJ) {
      for (var ZJ = -1, FJ = Array(JJ); ++ZJ < JJ;) FJ[ZJ] = cJ(ZJ);
      return FJ
    }
  },
  4775: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4521),
      UJ = ZJ(4777),
      eJ = ZJ(4548),
      XJ = ZJ(4509),
      AJ = FJ ? FJ.prototype : void 0,
      qJ = AJ ? AJ.toString : void 0;
    JJ.exports = function JJ(cJ) {
      if ("string" == typeof cJ) return cJ;
      if (eJ(cJ)) return UJ(cJ, JJ) + "";
      if (XJ(cJ)) return qJ ? qJ.call(cJ) : "";
      var ZJ = cJ + "";
      return "0" == ZJ && 1 / cJ == -1 / 0 ? "-0" : ZJ
    }
  },
  4503: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4507),
      UJ = /^\s+/;
    JJ.exports = function(JJ) {
      return JJ ? JJ.slice(0, FJ(JJ) + 1).replace(UJ, "") : JJ
    }
  },
  5095: JJ => {
    JJ.exports = function(JJ) {
      return function(cJ) {
        return JJ(cJ)
      }
    }
  },
  5356: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4977),
      UJ = ZJ(5360),
      eJ = ZJ(5386),
      XJ = ZJ(4997),
      AJ = ZJ(5395),
      qJ = ZJ(5017);
    JJ.exports = function(JJ, cJ, ZJ) {
      var jJ = -1,
        YJ = UJ,
        hJ = JJ.length,
        DJ = !0,
        sJ = [],
        nJ = sJ;
      if (ZJ) DJ = !1, YJ = eJ;
      else if (hJ >= 200) {
        var GJ = cJ ? null : AJ(JJ);
        if (GJ) return qJ(GJ);
        DJ = !1, YJ = XJ, nJ = new FJ
      } else nJ = cJ ? [] : sJ;
      JJ: for (; ++jJ < hJ;) {
        var fJ = JJ[jJ],
          xJ = cJ ? cJ(fJ) : fJ;
        if (fJ = ZJ || 0 !== fJ ? fJ : 0, DJ && xJ === xJ) {
          for (var rJ = nJ.length; rJ--;)
            if (nJ[rJ] === xJ) continue JJ;
          cJ && nJ.push(xJ), sJ.push(fJ)
        } else YJ(nJ, xJ, ZJ) || (nJ !== sJ && nJ.push(xJ), sJ.push(fJ))
      }
      return sJ
    }
  },
  4997: JJ => {
    JJ.exports = function(JJ, cJ) {
      return JJ.has(cJ)
    }
  },
  4572: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4548),
      UJ = ZJ(4578),
      eJ = ZJ(4587),
      XJ = ZJ(4767);
    JJ.exports = function(JJ, cJ) {
      return FJ(JJ) ? JJ : UJ(JJ, cJ) ? [JJ] : eJ(XJ(JJ))
    }
  },
  5433: (JJ, cJ, ZJ) => {
    var FJ = ZJ(5438);
    JJ.exports = function(JJ, cJ, ZJ) {
      var UJ = JJ.length;
      return ZJ = void 0 === ZJ ? UJ : ZJ, !cJ && ZJ >= UJ ? JJ : FJ(JJ, cJ, ZJ)
    }
  },
  5274: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4509);
    JJ.exports = function(JJ, cJ) {
      if (JJ !== cJ) {
        var ZJ = void 0 !== JJ,
          UJ = null === JJ,
          eJ = JJ === JJ,
          XJ = FJ(JJ),
          AJ = void 0 !== cJ,
          qJ = null === cJ,
          jJ = cJ === cJ,
          YJ = FJ(cJ);
        if (!qJ && !YJ && !XJ && JJ > cJ || XJ && AJ && jJ && !qJ && !YJ || UJ && AJ && jJ || !ZJ && jJ || !eJ) return 1;
        if (!UJ && !XJ && !YJ && JJ < cJ || YJ && ZJ && eJ && !UJ && !XJ || qJ && ZJ && eJ || !AJ && eJ || !jJ) return -1
      }
      return 0
    }
  },
  5265: (JJ, cJ, ZJ) => {
    var FJ = ZJ(5274);
    JJ.exports = function(JJ, cJ, ZJ) {
      for (var UJ = -1, eJ = JJ.criteria, XJ = cJ.criteria, AJ = eJ.length, qJ = ZJ.length; ++UJ < AJ;) {
        var jJ = FJ(eJ[UJ], XJ[UJ]);
        if (jJ) return UJ >= qJ ? jJ : jJ * ("desc" == ZJ[UJ] ? -1 : 1)
      }
      return JJ.index - cJ.index
    }
  },
  4654: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4493)["__core-js_shared__"];
    JJ.exports = FJ
  },
  5254: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4860);
    JJ.exports = function(JJ, cJ) {
      return function(ZJ, UJ) {
        if (null == ZJ) return ZJ;
        if (!FJ(ZJ)) return JJ(ZJ, UJ);
        for (var eJ = ZJ.length, XJ = cJ ? eJ : -1, AJ = Object(ZJ);
          (cJ ? XJ-- : ++XJ < eJ) && !1 !== UJ(AJ[XJ], XJ, AJ););
        return ZJ
      }
    }
  },
  5246: JJ => {
    JJ.exports = function(JJ) {
      return function(cJ, ZJ, FJ) {
        for (var UJ = -1, eJ = Object(cJ), XJ = FJ(cJ), AJ = XJ.length; AJ--;) {
          var qJ = XJ[JJ ? AJ : ++UJ];
          if (!1 === ZJ(eJ[qJ], qJ, eJ)) break
        }
        return cJ
      }
    }
  },
  5424: (JJ, cJ, ZJ) => {
    var FJ = ZJ(5433),
      UJ = ZJ(5442),
      eJ = ZJ(5445),
      XJ = ZJ(4767);
    JJ.exports = function(JJ) {
      return function(cJ) {
        cJ = XJ(cJ);
        var ZJ = UJ(cJ) ? eJ(cJ) : void 0,
          AJ = ZJ ? ZJ[0] : cJ.charAt(0),
          qJ = ZJ ? FJ(ZJ, 1).join("") : cJ.slice(1);
        return AJ[JJ]() + qJ
      }
    }
  },
  5707: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4923),
      UJ = ZJ(4860),
      eJ = ZJ(5053);
    JJ.exports = function(JJ) {
      return function(cJ, ZJ, XJ) {
        var AJ = Object(cJ);
        if (!UJ(cJ)) {
          var qJ = FJ(ZJ, 3);
          cJ = eJ(cJ), ZJ = function(JJ) {
            return qJ(AJ[JJ], JJ, AJ)
          }
        }
        var jJ = JJ(cJ, ZJ, XJ);
        return jJ > -1 ? AJ[qJ ? cJ[jJ] : jJ] : void 0
      }
    }
  },
  4843: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4848),
      UJ = ZJ(4853),
      eJ = ZJ(4880);
    JJ.exports = function(JJ) {
      return function(cJ, ZJ, XJ) {
        return XJ && "number" != typeof XJ && UJ(cJ, ZJ, XJ) && (ZJ = XJ = void 0), cJ = eJ(cJ), void 0 === ZJ ? (ZJ = cJ, cJ = 0) : ZJ = eJ(ZJ), XJ = void 0 === XJ ? cJ < ZJ ? 1 : -1 : eJ(XJ), FJ(cJ, ZJ, XJ, JJ)
      }
    }
  },
  5395: (JJ, cJ, ZJ) => {
    var FJ = ZJ(5141),
      UJ = ZJ(5402),
      eJ = ZJ(5017),
      XJ = FJ && 1 / eJ(new FJ([, -0]))[1] == 1 / 0 ? function(JJ) {
        return new FJ(JJ)
      } : UJ;
    JJ.exports = XJ
  },
  5310: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4637),
      UJ = function() {
        try {
          var JJ = FJ(Object, "defineProperty");
          return JJ({}, "", {}), JJ
        } catch (cJ) {}
      }();
    JJ.exports = UJ
  },
  4974: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4977),
      UJ = ZJ(4992),
      eJ = ZJ(4997);
    JJ.exports = function(JJ, cJ, ZJ, XJ, AJ, qJ) {
      var jJ = 1 & ZJ,
        YJ = JJ.length,
        hJ = cJ.length;
      if (YJ != hJ && !(jJ && hJ > YJ)) return !1;
      var DJ = qJ.get(JJ),
        sJ = qJ.get(cJ);
      if (DJ && sJ) return DJ == cJ && sJ == JJ;
      var nJ = -1,
        GJ = !0,
        fJ = 2 & ZJ ? new FJ : void 0;
      for (qJ.set(JJ, cJ), qJ.set(cJ, JJ); ++nJ < YJ;) {
        var xJ = JJ[nJ],
          rJ = cJ[nJ];
        if (XJ) var vJ = jJ ? XJ(rJ, xJ, nJ, cJ, JJ, qJ) : XJ(xJ, rJ, nJ, JJ, cJ, qJ);
        if (void 0 !== vJ) {
          if (vJ) continue;
          GJ = !1;
          break
        }
        if (fJ) {
          if (!UJ(cJ, (function(JJ, cJ) {
              if (!eJ(fJ, cJ) && (xJ === JJ || AJ(xJ, JJ, ZJ, XJ, qJ))) return fJ.push(cJ)
            }))) {
            GJ = !1;
            break
          }
        } else if (xJ !== rJ && !AJ(xJ, rJ, ZJ, XJ, qJ)) {
          GJ = !1;
          break
        }
      }
      return qJ.delete(JJ), qJ.delete(cJ), GJ
    }
  },
  5e3: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4521),
      UJ = ZJ(5005),
      eJ = ZJ(4714),
      XJ = ZJ(4974),
      AJ = ZJ(5011),
      qJ = ZJ(5017),
      jJ = FJ ? FJ.prototype : void 0,
      YJ = jJ ? jJ.valueOf : void 0;
    JJ.exports = function(JJ, cJ, ZJ, FJ, jJ, hJ, DJ) {
      switch (ZJ) {
        case "[object DataView]":
          if (JJ.byteLength != cJ.byteLength || JJ.byteOffset != cJ.byteOffset) return !1;
          JJ = JJ.buffer, cJ = cJ.buffer;
        case "[object ArrayBuffer]":
          return !(JJ.byteLength != cJ.byteLength || !hJ(new UJ(JJ), new UJ(cJ)));
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
          return eJ(+JJ, +cJ);
        case "[object Error]":
          return JJ.name == cJ.name && JJ.message == cJ.message;
        case "[object RegExp]":
        case "[object String]":
          return JJ == cJ + "";
        case "[object Map]":
          var sJ = AJ;
        case "[object Set]":
          var nJ = 1 & FJ;
          if (sJ || (sJ = qJ), JJ.size != cJ.size && !nJ) return !1;
          var GJ = DJ.get(JJ);
          if (GJ) return GJ == cJ;
          FJ |= 2, DJ.set(JJ, cJ);
          var fJ = XJ(sJ(JJ), sJ(cJ), FJ, jJ, hJ, DJ);
          return DJ.delete(JJ), fJ;
        case "[object Symbol]":
          if (YJ) return YJ.call(JJ) == YJ.call(cJ)
      }
      return !1
    }
  },
  5022: (JJ, cJ, ZJ) => {
    var FJ = ZJ(5024),
      UJ = Object.prototype.hasOwnProperty;
    JJ.exports = function(JJ, cJ, ZJ, eJ, XJ, AJ) {
      var qJ = 1 & ZJ,
        jJ = FJ(JJ),
        YJ = jJ.length;
      if (YJ != FJ(cJ).length && !qJ) return !1;
      for (var hJ = YJ; hJ--;) {
        var DJ = jJ[hJ];
        if (!(qJ ? DJ in cJ : UJ.call(cJ, DJ))) return !1
      }
      var sJ = AJ.get(JJ),
        nJ = AJ.get(cJ);
      if (sJ && nJ) return sJ == cJ && nJ == JJ;
      var GJ = !0;
      AJ.set(JJ, cJ), AJ.set(cJ, JJ);
      for (var fJ = qJ; ++hJ < YJ;) {
        var xJ = JJ[DJ = jJ[hJ]],
          rJ = cJ[DJ];
        if (eJ) var vJ = qJ ? eJ(rJ, xJ, DJ, cJ, JJ, AJ) : eJ(xJ, rJ, DJ, JJ, cJ, AJ);
        if (!(void 0 === vJ ? xJ === rJ || XJ(xJ, rJ, ZJ, eJ, AJ) : vJ)) {
          GJ = !1;
          break
        }
        fJ || (fJ = "constructor" == DJ)
      }
      if (GJ && !fJ) {
        var mJ = JJ.constructor,
          QJ = cJ.constructor;
        mJ == QJ || !("constructor" in JJ) || !("constructor" in cJ) || "function" == typeof mJ && mJ instanceof mJ && "function" == typeof QJ && QJ instanceof QJ || (GJ = !1)
      }
      return AJ.delete(JJ), AJ.delete(cJ), GJ
    }
  },
  4496: (JJ, cJ, ZJ) => {
    var FJ = "object" == typeof ZJ.g && ZJ.g && ZJ.g.Object === Object && ZJ.g;
    JJ.exports = FJ
  },
  5024: (JJ, cJ, ZJ) => {
    var FJ = ZJ(5027),
      UJ = ZJ(5032),
      eJ = ZJ(5053);
    JJ.exports = function(JJ) {
      return FJ(JJ, eJ, UJ)
    }
  },
  4742: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4750);
    JJ.exports = function(JJ, cJ) {
      var ZJ = JJ.__data__;
      return FJ(cJ) ? ZJ["string" == typeof cJ ? "string" : "hash"] : ZJ.map
    }
  },
  5152: (JJ, cJ, ZJ) => {
    var FJ = ZJ(5158),
      UJ = ZJ(5053);
    JJ.exports = function(JJ) {
      for (var cJ = UJ(JJ), ZJ = cJ.length; ZJ--;) {
        var eJ = cJ[ZJ],
          XJ = JJ[eJ];
        cJ[ZJ] = [eJ, XJ, FJ(XJ)]
      }
      return cJ
    }
  },
  4637: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4639),
      UJ = ZJ(4669);
    JJ.exports = function(JJ, cJ) {
      var ZJ = UJ(JJ, cJ);
      return FJ(ZJ) ? ZJ : void 0
    }
  },
  5673: (JJ, cJ, ZJ) => {
    var FJ = ZJ(5122)(Object.getPrototypeOf, Object);
    JJ.exports = FJ
  },
  4530: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4521),
      UJ = Object.prototype,
      eJ = UJ.hasOwnProperty,
      XJ = UJ.toString,
      AJ = FJ ? FJ.toStringTag : void 0;
    JJ.exports = function(JJ) {
      var cJ = eJ.call(JJ, AJ),
        ZJ = JJ[AJ];
      try {
        JJ[AJ] = void 0;
        var FJ = !0
      } catch (qJ) {}
      var UJ = XJ.call(JJ);
      return FJ && (cJ ? JJ[AJ] = ZJ : delete JJ[AJ]), UJ
    }
  },
  5032: (JJ, cJ, ZJ) => {
    var FJ = ZJ(5040),
      UJ = ZJ(5046),
      eJ = Object.prototype.propertyIsEnumerable,
      XJ = Object.getOwnPropertySymbols,
      AJ = XJ ? function(JJ) {
        return null == JJ ? [] : (JJ = Object(JJ), FJ(XJ(JJ), (function(cJ) {
          return eJ.call(JJ, cJ)
        })))
      } : UJ;
    JJ.exports = AJ
  },
  5128: (JJ, cJ, ZJ) => {
    var FJ = ZJ(5130),
      UJ = ZJ(4735),
      eJ = ZJ(5136),
      XJ = ZJ(5141),
      AJ = ZJ(5147),
      qJ = ZJ(4512),
      jJ = ZJ(4663),
      YJ = "[object Map]",
      hJ = "[object Promise]",
      DJ = "[object Set]",
      sJ = "[object WeakMap]",
      nJ = "[object DataView]",
      GJ = jJ(FJ),
      fJ = jJ(UJ),
      xJ = jJ(eJ),
      rJ = jJ(XJ),
      vJ = jJ(AJ),
      mJ = qJ;
    (FJ && mJ(new FJ(new ArrayBuffer(1))) != nJ || UJ && mJ(new UJ) != YJ || eJ && mJ(eJ.resolve()) != hJ || XJ && mJ(new XJ) != DJ || AJ && mJ(new AJ) != sJ) && (mJ = function(JJ) {
      var cJ = qJ(JJ),
        ZJ = "[object Object]" == cJ ? JJ.constructor : void 0,
        FJ = ZJ ? jJ(ZJ) : "";
      if (FJ) switch (FJ) {
        case GJ:
          return nJ;
        case fJ:
          return YJ;
        case xJ:
          return hJ;
        case rJ:
          return DJ;
        case vJ:
          return sJ
      }
      return cJ
    }), JJ.exports = mJ
  },
  4669: JJ => {
    JJ.exports = function(JJ, cJ) {
      return null == JJ ? void 0 : JJ[cJ]
    }
  },
  5193: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4572),
      UJ = ZJ(4905),
      eJ = ZJ(4548),
      XJ = ZJ(4872),
      AJ = ZJ(4866),
      qJ = ZJ(4783);
    JJ.exports = function(JJ, cJ, ZJ) {
      for (var jJ = -1, YJ = (cJ = FJ(cJ, JJ)).length, hJ = !1; ++jJ < YJ;) {
        var DJ = qJ(cJ[jJ]);
        if (!(hJ = null != JJ && ZJ(JJ, DJ))) break;
        JJ = JJ[DJ]
      }
      return hJ || ++jJ != YJ ? hJ : !!(YJ = null == JJ ? 0 : JJ.length) && AJ(YJ) && XJ(DJ, YJ) && (eJ(JJ) || UJ(JJ))
    }
  },
  5442: JJ => {
    var cJ = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    JJ.exports = function(JJ) {
      return cJ.test(JJ)
    }
  },
  4619: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4628);
    JJ.exports = function() {
      this.__data__ = FJ ? FJ(null) : {}, this.size = 0
    }
  },
  4676: JJ => {
    JJ.exports = function(JJ) {
      var cJ = this.has(JJ) && delete this.__data__[JJ];
      return this.size -= cJ ? 1 : 0, cJ
    }
  },
  4681: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4628),
      UJ = Object.prototype.hasOwnProperty;
    JJ.exports = function(JJ) {
      var cJ = this.__data__;
      if (FJ) {
        var ZJ = cJ[JJ];
        return "__lodash_hash_undefined__" === ZJ ? void 0 : ZJ
      }
      return UJ.call(cJ, JJ) ? cJ[JJ] : void 0
    }
  },
  4683: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4628),
      UJ = Object.prototype.hasOwnProperty;
    JJ.exports = function(JJ) {
      var cJ = this.__data__;
      return FJ ? void 0 !== cJ[JJ] : UJ.call(cJ, JJ)
    }
  },
  4685: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4628);
    JJ.exports = function(JJ, cJ) {
      var ZJ = this.__data__;
      return this.size += this.has(JJ) ? 0 : 1, ZJ[JJ] = FJ && void 0 === cJ ? "__lodash_hash_undefined__" : cJ, this
    }
  },
  4899: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4521),
      UJ = ZJ(4905),
      eJ = ZJ(4548),
      XJ = FJ ? FJ.isConcatSpreadable : void 0;
    JJ.exports = function(JJ) {
      return eJ(JJ) || UJ(JJ) || !!(XJ && JJ && JJ[XJ])
    }
  },
  4872: JJ => {
    var cJ = /^(?:0|[1-9]\d*)$/;
    JJ.exports = function(JJ, ZJ) {
      var FJ = typeof JJ;
      return !!(ZJ = null == ZJ ? 9007199254740991 : ZJ) && ("number" == FJ || "symbol" != FJ && cJ.test(JJ)) && JJ > -1 && JJ % 1 == 0 && JJ < ZJ
    }
  },
  4853: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4714),
      UJ = ZJ(4860),
      eJ = ZJ(4872),
      XJ = ZJ(4480);
    JJ.exports = function(JJ, cJ, ZJ) {
      if (!XJ(ZJ)) return !1;
      var AJ = typeof cJ;
      return !!("number" == AJ ? UJ(ZJ) && eJ(cJ, ZJ.length) : "string" == AJ && cJ in ZJ) && FJ(ZJ[cJ], JJ)
    }
  },
  4578: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4548),
      UJ = ZJ(4509),
      eJ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      XJ = /^\w*$/;
    JJ.exports = function(JJ, cJ) {
      if (FJ(JJ)) return !1;
      var ZJ = typeof JJ;
      return !("number" != ZJ && "symbol" != ZJ && "boolean" != ZJ && null != JJ && !UJ(JJ)) || (XJ.test(JJ) || !eJ.test(JJ) || null != cJ && JJ in Object(cJ))
    }
  },
  4750: JJ => {
    JJ.exports = function(JJ) {
      var cJ = typeof JJ;
      return "string" == cJ || "number" == cJ || "symbol" == cJ || "boolean" == cJ ? "__proto__" !== JJ : null === JJ
    }
  },
  4648: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4654),
      UJ = function() {
        var JJ = /[^.]+$/.exec(FJ && FJ.keys && FJ.keys.IE_PROTO || "");
        return JJ ? "Symbol(src)_1." + JJ : ""
      }();
    JJ.exports = function(JJ) {
      return !!UJ && UJ in JJ
    }
  },
  5111: JJ => {
    var cJ = Object.prototype;
    JJ.exports = function(JJ) {
      var ZJ = JJ && JJ.constructor;
      return JJ === ("function" == typeof ZJ && ZJ.prototype || cJ)
    }
  },
  5158: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4480);
    JJ.exports = function(JJ) {
      return JJ === JJ && !FJ(JJ)
    }
  },
  4700: JJ => {
    JJ.exports = function() {
      this.__data__ = [], this.size = 0
    }
  },
  4705: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4711),
      UJ = Array.prototype.splice;
    JJ.exports = function(JJ) {
      var cJ = this.__data__,
        ZJ = FJ(cJ, JJ);
      return !(ZJ < 0) && (ZJ == cJ.length - 1 ? cJ.pop() : UJ.call(cJ, ZJ, 1), --this.size, !0)
    }
  },
  4723: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4711);
    JJ.exports = function(JJ) {
      var cJ = this.__data__,
        ZJ = FJ(cJ, JJ);
      return ZJ < 0 ? void 0 : cJ[ZJ][1]
    }
  },
  4727: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4711);
    JJ.exports = function(JJ) {
      return FJ(this.__data__, JJ) > -1
    }
  },
  4732: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4711);
    JJ.exports = function(JJ, cJ) {
      var ZJ = this.__data__,
        UJ = FJ(ZJ, JJ);
      return UJ < 0 ? (++this.size, ZJ.push([JJ, cJ])) : ZJ[UJ][1] = cJ, this
    }
  },
  4610: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4613),
      UJ = ZJ(4693),
      eJ = ZJ(4735);
    JJ.exports = function() {
      this.size = 0, this.__data__ = {
        hash: new FJ,
        map: new(eJ || UJ),
        string: new FJ
      }
    }
  },
  4737: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4742);
    JJ.exports = function(JJ) {
      var cJ = FJ(this, JJ).delete(JJ);
      return this.size -= cJ ? 1 : 0, cJ
    }
  },
  4753: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4742);
    JJ.exports = function(JJ) {
      return FJ(this, JJ).get(JJ)
    }
  },
  4759: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4742);
    JJ.exports = function(JJ) {
      return FJ(this, JJ).has(JJ)
    }
  },
  4765: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4742);
    JJ.exports = function(JJ, cJ) {
      var ZJ = FJ(this, JJ),
        UJ = ZJ.size;
      return ZJ.set(JJ, cJ), this.size += ZJ.size == UJ ? 0 : 1, this
    }
  },
  5011: JJ => {
    JJ.exports = function(JJ) {
      var cJ = -1,
        ZJ = Array(JJ.size);
      return JJ.forEach((function(JJ, FJ) {
        ZJ[++cJ] = [FJ, JJ]
      })), ZJ
    }
  },
  5167: JJ => {
    JJ.exports = function(JJ, cJ) {
      return function(ZJ) {
        return null != ZJ && (ZJ[JJ] === cJ && (void 0 !== cJ || JJ in Object(ZJ)))
      }
    }
  },
  4589: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4594);
    JJ.exports = function(JJ) {
      var cJ = FJ(JJ, (function(JJ) {
          return 500 === ZJ.size && ZJ.clear(), JJ
        })),
        ZJ = cJ.cache;
      return cJ
    }
  },
  4628: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4637)(Object, "create");
    JJ.exports = FJ
  },
  5116: (JJ, cJ, ZJ) => {
    var FJ = ZJ(5122)(Object.keys, Object);
    JJ.exports = FJ
  },
  5104: (JJ, cJ, ZJ) => {
    JJ = ZJ.nmd(JJ);
    var FJ = ZJ(4496),
      UJ = cJ && !cJ.nodeType && cJ,
      eJ = UJ && JJ && !JJ.nodeType && JJ,
      XJ = eJ && eJ.exports === UJ && FJ.process,
      AJ = function() {
        try {
          var JJ = eJ && eJ.require && eJ.require("util").types;
          return JJ || XJ && XJ.binding && XJ.binding("util")
        } catch (cJ) {}
      }();
    JJ.exports = AJ
  },
  4537: JJ => {
    var cJ = Object.prototype.toString;
    JJ.exports = function(JJ) {
      return cJ.call(JJ)
    }
  },
  5122: JJ => {
    JJ.exports = function(JJ, cJ) {
      return function(ZJ) {
        return JJ(cJ(ZJ))
      }
    }
  },
  5291: (JJ, cJ, ZJ) => {
    var FJ = ZJ(5294),
      UJ = Math.max;
    JJ.exports = function(JJ, cJ, ZJ) {
      return cJ = UJ(void 0 === cJ ? JJ.length - 1 : cJ, 0),
        function() {
          for (var eJ = arguments, XJ = -1, AJ = UJ(eJ.length - cJ, 0), qJ = Array(AJ); ++XJ < AJ;) qJ[XJ] = eJ[cJ + XJ];
          XJ = -1;
          for (var jJ = Array(cJ + 1); ++XJ < cJ;) jJ[XJ] = eJ[XJ];
          return jJ[cJ] = ZJ(qJ), FJ(JJ, this, jJ)
        }
    }
  },
  4493: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4496),
      UJ = "object" == typeof self && self && self.Object === Object && self,
      eJ = FJ || UJ || Function("return this")();
    JJ.exports = eJ
  },
  4979: JJ => {
    JJ.exports = function(JJ) {
      return this.__data__.set(JJ, "__lodash_hash_undefined__"), this
    }
  },
  4988: JJ => {
    JJ.exports = function(JJ) {
      return this.__data__.has(JJ)
    }
  },
  5017: JJ => {
    JJ.exports = function(JJ) {
      var cJ = -1,
        ZJ = Array(JJ.size);
      return JJ.forEach((function(JJ) {
        ZJ[++cJ] = JJ
      })), ZJ
    }
  },
  5300: (JJ, cJ, ZJ) => {
    var FJ = ZJ(5305),
      UJ = ZJ(5314)(FJ);
    JJ.exports = UJ
  },
  5314: JJ => {
    var cJ = Date.now;
    JJ.exports = function(JJ) {
      var ZJ = 0,
        FJ = 0;
      return function() {
        var UJ = cJ(),
          eJ = 16 - (UJ - FJ);
        if (FJ = UJ, eJ > 0) {
          if (++ZJ >= 800) return arguments[0]
        } else ZJ = 0;
        return JJ.apply(void 0, arguments)
      }
    }
  },
  4943: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4693);
    JJ.exports = function() {
      this.__data__ = new FJ, this.size = 0
    }
  },
  4952: JJ => {
    JJ.exports = function(JJ) {
      var cJ = this.__data__,
        ZJ = cJ.delete(JJ);
      return this.size = cJ.size, ZJ
    }
  },
  4959: JJ => {
    JJ.exports = function(JJ) {
      return this.__data__.get(JJ)
    }
  },
  4961: JJ => {
    JJ.exports = function(JJ) {
      return this.__data__.has(JJ)
    }
  },
  4963: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4693),
      UJ = ZJ(4735),
      eJ = ZJ(4602);
    JJ.exports = function(JJ, cJ) {
      var ZJ = this.__data__;
      if (ZJ instanceof FJ) {
        var XJ = ZJ.__data__;
        if (!UJ || XJ.length < 199) return XJ.push([JJ, cJ]), this.size = ++ZJ.size, this;
        ZJ = this.__data__ = new eJ(XJ)
      }
      return ZJ.set(JJ, cJ), this.size = ZJ.size, this
    }
  },
  5382: JJ => {
    JJ.exports = function(JJ, cJ, ZJ) {
      for (var FJ = ZJ - 1, UJ = JJ.length; ++FJ < UJ;)
        if (JJ[FJ] === cJ) return FJ;
      return -1
    }
  },
  5445: (JJ, cJ, ZJ) => {
    var FJ = ZJ(5447),
      UJ = ZJ(5442),
      eJ = ZJ(5453);
    JJ.exports = function(JJ) {
      return UJ(JJ) ? eJ(JJ) : FJ(JJ)
    }
  },
  4587: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4589),
      UJ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      eJ = /\\(\\)?/g,
      XJ = FJ((function(JJ) {
        var cJ = [];
        return 46 === JJ.charCodeAt(0) && cJ.push(""), JJ.replace(UJ, (function(JJ, ZJ, FJ, UJ) {
          cJ.push(FJ ? UJ.replace(eJ, "$1") : ZJ || JJ)
        })), cJ
      }));
    JJ.exports = XJ
  },
  4783: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4509);
    JJ.exports = function(JJ) {
      if ("string" == typeof JJ || FJ(JJ)) return JJ;
      var cJ = JJ + "";
      return "0" == cJ && 1 / JJ == -1 / 0 ? "-0" : cJ
    }
  },
  4663: JJ => {
    var cJ = Function.prototype.toString;
    JJ.exports = function(JJ) {
      if (null != JJ) {
        try {
          return cJ.call(JJ)
        } catch (ZJ) {}
        try {
          return JJ + ""
        } catch (ZJ) {}
      }
      return ""
    }
  },
  4507: JJ => {
    var cJ = /\s/;
    JJ.exports = function(JJ) {
      for (var ZJ = JJ.length; ZJ-- && cJ.test(JJ.charAt(ZJ)););
      return ZJ
    }
  },
  5453: JJ => {
    var cJ = "\\ud800-\\udfff",
      ZJ = "[" + cJ + "]",
      FJ = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
      UJ = "\\ud83c[\\udffb-\\udfff]",
      eJ = "[^" + cJ + "]",
      XJ = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      AJ = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      qJ = "(?:" + FJ + "|" + UJ + ")" + "?",
      jJ = "[\\ufe0e\\ufe0f]?",
      YJ = jJ + qJ + ("(?:\\u200d(?:" + [eJ, XJ, AJ].join("|") + ")" + jJ + qJ + ")*"),
      hJ = "(?:" + [eJ + FJ + "?", FJ, XJ, AJ, ZJ].join("|") + ")",
      DJ = RegExp(UJ + "(?=" + UJ + ")|" + hJ + YJ, "g");
    JJ.exports = function(JJ) {
      return JJ.match(DJ) || []
    }
  },
  5307: JJ => {
    JJ.exports = function(JJ) {
      return function() {
        return JJ
      }
    }
  },
  4478: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4480),
      UJ = ZJ(4484),
      eJ = ZJ(4499),
      XJ = Math.max,
      AJ = Math.min;
    JJ.exports = function(JJ, cJ, ZJ) {
      var qJ, jJ, YJ, hJ, DJ, sJ, nJ = 0,
        GJ = !1,
        fJ = !1,
        xJ = !0;
      if ("function" != typeof JJ) throw new TypeError("Expected a function");

      function rJ(cJ) {
        var ZJ = qJ,
          FJ = jJ;
        return qJ = jJ = void 0, nJ = cJ, hJ = JJ.apply(FJ, ZJ)
      }

      function vJ(JJ) {
        var ZJ = JJ - sJ;
        return void 0 === sJ || ZJ >= cJ || ZJ < 0 || fJ && JJ - nJ >= YJ
      }

      function mJ() {
        var JJ = UJ();
        if (vJ(JJ)) return QJ(JJ);
        DJ = setTimeout(mJ, function(JJ) {
          var ZJ = cJ - (JJ - sJ);
          return fJ ? AJ(ZJ, YJ - (JJ - nJ)) : ZJ
        }(JJ))
      }

      function QJ(JJ) {
        return DJ = void 0, xJ && qJ ? rJ(JJ) : (qJ = jJ = void 0, hJ)
      }

      function EJ() {
        var JJ = UJ(),
          ZJ = vJ(JJ);
        if (qJ = arguments, jJ = this, sJ = JJ, ZJ) {
          if (void 0 === DJ) return function(JJ) {
            return nJ = JJ, DJ = setTimeout(mJ, cJ), GJ ? rJ(JJ) : hJ
          }(sJ);
          if (fJ) return clearTimeout(DJ), DJ = setTimeout(mJ, cJ), rJ(sJ)
        }
        return void 0 === DJ && (DJ = setTimeout(mJ, cJ)), hJ
      }
      return cJ = eJ(cJ) || 0, FJ(ZJ) && (GJ = !!ZJ.leading, YJ = (fJ = "maxWait" in ZJ) ? XJ(eJ(ZJ.maxWait) || 0, cJ) : YJ, xJ = "trailing" in ZJ ? !!ZJ.trailing : xJ), EJ.cancel = function() {
        void 0 !== DJ && clearTimeout(DJ), nJ = 0, qJ = sJ = jJ = DJ = void 0
      }, EJ.flush = function() {
        return void 0 === DJ ? hJ : QJ(UJ())
      }, EJ
    }
  },
  4714: JJ => {
    JJ.exports = function(JJ, cJ) {
      return JJ === cJ || JJ !== JJ && cJ !== cJ
    }
  },
  5619: (JJ, cJ, ZJ) => {
    var FJ = ZJ(5623),
      UJ = ZJ(5630),
      eJ = ZJ(4923),
      XJ = ZJ(4548),
      AJ = ZJ(4853);
    JJ.exports = function(JJ, cJ, ZJ) {
      var qJ = XJ(JJ) ? FJ : UJ;
      return ZJ && AJ(JJ, cJ, ZJ) && (cJ = void 0), qJ(JJ, eJ(cJ, 3))
    }
  },
  5701: (JJ, cJ, ZJ) => {
    var FJ = ZJ(5707)(ZJ(5714));
    JJ.exports = FJ
  },
  5714: (JJ, cJ, ZJ) => {
    var FJ = ZJ(5372),
      UJ = ZJ(4923),
      eJ = ZJ(5719),
      XJ = Math.max;
    JJ.exports = function(JJ, cJ, ZJ) {
      var AJ = null == JJ ? 0 : JJ.length;
      if (!AJ) return -1;
      var qJ = null == ZJ ? 0 : eJ(ZJ);
      return qJ < 0 && (qJ = XJ(AJ + qJ, 0)), FJ(JJ, UJ(cJ, 3), qJ)
    }
  },
  5549: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4891),
      UJ = ZJ(5553);
    JJ.exports = function(JJ, cJ) {
      return FJ(UJ(JJ, cJ), 1)
    }
  },
  4561: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4563);
    JJ.exports = function(JJ, cJ, ZJ) {
      var UJ = null == JJ ? void 0 : FJ(JJ, cJ);
      return void 0 === UJ ? ZJ : UJ
    }
  },
  5177: (JJ, cJ, ZJ) => {
    var FJ = ZJ(5184),
      UJ = ZJ(5193);
    JJ.exports = function(JJ, cJ) {
      return null != JJ && UJ(JJ, cJ, FJ)
    }
  },
  5196: JJ => {
    JJ.exports = function(JJ) {
      return JJ
    }
  },
  4905: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4911),
      UJ = ZJ(4540),
      eJ = Object.prototype,
      XJ = eJ.hasOwnProperty,
      AJ = eJ.propertyIsEnumerable,
      qJ = FJ(function() {
        return arguments
      }()) ? FJ : function(JJ) {
        return UJ(JJ) && XJ.call(JJ, "callee") && !AJ.call(JJ, "callee")
      };
    JJ.exports = qJ
  },
  4548: JJ => {
    var cJ = Array.isArray;
    JJ.exports = cJ
  },
  4860: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4641),
      UJ = ZJ(4866);
    JJ.exports = function(JJ) {
      return null != JJ && UJ(JJ.length) && !FJ(JJ)
    }
  },
  5679: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4512),
      UJ = ZJ(4540);
    JJ.exports = function(JJ) {
      return !0 === JJ || !1 === JJ || UJ(JJ) && "[object Boolean]" == FJ(JJ)
    }
  },
  5071: (JJ, cJ, ZJ) => {
    JJ = ZJ.nmd(JJ);
    var FJ = ZJ(4493),
      UJ = ZJ(5080),
      eJ = cJ && !cJ.nodeType && cJ,
      XJ = eJ && JJ && !JJ.nodeType && JJ,
      AJ = XJ && XJ.exports === eJ ? FJ.fn : void 0,
      qJ = (AJ ? AJ.isBuffer : void 0) || UJ;
    JJ.exports = qJ
  },
  5557: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4967);
    JJ.exports = function(JJ, cJ) {
      return FJ(JJ, cJ)
    }
  },
  4641: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4512),
      UJ = ZJ(4480);
    JJ.exports = function(JJ) {
      if (!UJ(JJ)) return !1;
      var cJ = FJ(JJ);
      return "[object Function]" == cJ || "[object GeneratorFunction]" == cJ || "[object AsyncFunction]" == cJ || "[object Proxy]" == cJ
    }
  },
  4866: JJ => {
    JJ.exports = function(JJ) {
      return "number" == typeof JJ && JJ > -1 && JJ % 1 == 0 && JJ <= 9007199254740991
    }
  },
  4556: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4558);
    JJ.exports = function(JJ) {
      return FJ(JJ) && JJ != +JJ
    }
  },
  4786: JJ => {
    JJ.exports = function(JJ) {
      return null == JJ
    }
  },
  4558: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4512),
      UJ = ZJ(4540);
    JJ.exports = function(JJ) {
      return "number" == typeof JJ || UJ(JJ) && "[object Number]" == FJ(JJ)
    }
  },
  4480: JJ => {
    JJ.exports = function(JJ) {
      var cJ = typeof JJ;
      return null != JJ && ("object" == cJ || "function" == cJ)
    }
  },
  4540: JJ => {
    JJ.exports = function(JJ) {
      return null != JJ && "object" == typeof JJ
    }
  },
  5670: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4512),
      UJ = ZJ(5673),
      eJ = ZJ(4540),
      XJ = Function.prototype,
      AJ = Object.prototype,
      qJ = XJ.toString,
      jJ = AJ.hasOwnProperty,
      YJ = qJ.call(Object);
    JJ.exports = function(JJ) {
      if (!eJ(JJ) || "[object Object]" != FJ(JJ)) return !1;
      var cJ = UJ(JJ);
      if (null === cJ) return !0;
      var ZJ = jJ.call(cJ, "constructor") && cJ.constructor;
      return "function" == typeof ZJ && ZJ instanceof ZJ && qJ.call(ZJ) == YJ
    }
  },
  4545: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4512),
      UJ = ZJ(4548),
      eJ = ZJ(4540);
    JJ.exports = function(JJ) {
      return "string" == typeof JJ || !UJ(JJ) && eJ(JJ) && "[object String]" == FJ(JJ)
    }
  },
  4509: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4512),
      UJ = ZJ(4540);
    JJ.exports = function(JJ) {
      return "symbol" == typeof JJ || UJ(JJ) && "[object Symbol]" == FJ(JJ)
    }
  },
  5085: (JJ, cJ, ZJ) => {
    var FJ = ZJ(5092),
      UJ = ZJ(5095),
      eJ = ZJ(5104),
      XJ = eJ && eJ.isTypedArray,
      AJ = XJ ? UJ(XJ) : FJ;
    JJ.exports = AJ
  },
  5053: (JJ, cJ, ZJ) => {
    var FJ = ZJ(5060),
      UJ = ZJ(5108),
      eJ = ZJ(4860);
    JJ.exports = function(JJ) {
      return eJ(JJ) ? FJ(JJ) : UJ(JJ)
    }
  },
  5659: JJ => {
    JJ.exports = function(JJ) {
      var cJ = null == JJ ? 0 : JJ.length;
      return cJ ? JJ[cJ - 1] : void 0
    }
  },
  5553: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4777),
      UJ = ZJ(4923),
      eJ = ZJ(5221),
      XJ = ZJ(4548);
    JJ.exports = function(JJ, cJ) {
      return (XJ(JJ) ? FJ : eJ)(JJ, UJ(cJ, 3))
    }
  },
  5603: (JJ, cJ, ZJ) => {
    var FJ = ZJ(5610),
      UJ = ZJ(5239),
      eJ = ZJ(4923);
    JJ.exports = function(JJ, cJ) {
      var ZJ = {};
      return cJ = eJ(cJ, 3), UJ(JJ, (function(JJ, UJ, eJ) {
        FJ(ZJ, UJ, cJ(JJ, UJ, eJ))
      })), ZJ
    }
  },
  5516: (JJ, cJ, ZJ) => {
    var FJ = ZJ(5519),
      UJ = ZJ(5523),
      eJ = ZJ(5196);
    JJ.exports = function(JJ) {
      return JJ && JJ.length ? FJ(JJ, eJ, UJ) : void 0
    }
  },
  4594: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4602);

    function UJ(JJ, cJ) {
      if ("function" != typeof JJ || null != cJ && "function" != typeof cJ) throw new TypeError("Expected a function");
      var ZJ = function() {
        var FJ = arguments,
          UJ = cJ ? cJ.apply(this, FJ) : FJ[0],
          eJ = ZJ.cache;
        if (eJ.has(UJ)) return eJ.get(UJ);
        var XJ = JJ.apply(this, FJ);
        return ZJ.cache = eJ.set(UJ, XJ) || eJ, XJ
      };
      return ZJ.cache = new(UJ.Cache || FJ), ZJ
    }
    UJ.Cache = FJ, JJ.exports = UJ
  },
  5532: (JJ, cJ, ZJ) => {
    var FJ = ZJ(5519),
      UJ = ZJ(5540),
      eJ = ZJ(5196);
    JJ.exports = function(JJ) {
      return JJ && JJ.length ? FJ(JJ, eJ, UJ) : void 0
    }
  },
  5402: JJ => {
    JJ.exports = function() {}
  },
  4484: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4493);
    JJ.exports = function() {
      return FJ.Date.now()
    }
  },
  5205: (JJ, cJ, ZJ) => {
    var FJ = ZJ(5207),
      UJ = ZJ(5213),
      eJ = ZJ(4578),
      XJ = ZJ(4783);
    JJ.exports = function(JJ) {
      return eJ(JJ) ? FJ(XJ(JJ)) : UJ(JJ)
    }
  },
  4839: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4843)();
    JJ.exports = FJ
  },
  5692: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4992),
      UJ = ZJ(4923),
      eJ = ZJ(5694),
      XJ = ZJ(4548),
      AJ = ZJ(4853);
    JJ.exports = function(JJ, cJ, ZJ) {
      var qJ = XJ(JJ) ? FJ : eJ;
      return ZJ && AJ(JJ, cJ, ZJ) && (cJ = void 0), qJ(JJ, UJ(cJ, 3))
    }
  },
  4888: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4891),
      UJ = ZJ(4917),
      eJ = ZJ(5283),
      XJ = ZJ(4853),
      AJ = eJ((function(JJ, cJ) {
        if (null == JJ) return [];
        var ZJ = cJ.length;
        return ZJ > 1 && XJ(JJ, cJ[0], cJ[1]) ? cJ = [] : ZJ > 2 && XJ(cJ[0], cJ[1], cJ[2]) && (cJ = [cJ[0]]), UJ(JJ, FJ(cJ, 1), [])
      }));
    JJ.exports = AJ
  },
  5046: JJ => {
    JJ.exports = function() {
      return []
    }
  },
  5080: JJ => {
    JJ.exports = function() {
      return !1
    }
  },
  4476: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4478),
      UJ = ZJ(4480);
    JJ.exports = function(JJ, cJ, ZJ) {
      var eJ = !0,
        XJ = !0;
      if ("function" != typeof JJ) throw new TypeError("Expected a function");
      return UJ(ZJ) && (eJ = "leading" in ZJ ? !!ZJ.leading : eJ, XJ = "trailing" in ZJ ? !!ZJ.trailing : XJ), FJ(JJ, cJ, {
        leading: eJ,
        maxWait: cJ,
        trailing: XJ
      })
    }
  },
  4880: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4499),
      UJ = 1 / 0;
    JJ.exports = function(JJ) {
      return JJ ? (JJ = FJ(JJ)) === UJ || JJ === -1 / 0 ? 17976931348623157e292 * (JJ < 0 ? -1 : 1) : JJ === JJ ? JJ : 0 : 0 === JJ ? JJ : 0
    }
  },
  5719: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4880);
    JJ.exports = function(JJ) {
      var cJ = FJ(JJ),
        ZJ = cJ % 1;
      return cJ === cJ ? ZJ ? cJ - ZJ : cJ : 0
    }
  },
  4499: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4503),
      UJ = ZJ(4480),
      eJ = ZJ(4509),
      XJ = /^[-+]0x[0-9a-f]+$/i,
      AJ = /^0b[01]+$/i,
      qJ = /^0o[0-7]+$/i,
      jJ = parseInt;
    JJ.exports = function(JJ) {
      if ("number" == typeof JJ) return JJ;
      if (eJ(JJ)) return NaN;
      if (UJ(JJ)) {
        var cJ = "function" == typeof JJ.valueOf ? JJ.valueOf() : JJ;
        JJ = UJ(cJ) ? cJ + "" : cJ
      }
      if ("string" != typeof JJ) return 0 === JJ ? JJ : +JJ;
      JJ = FJ(JJ);
      var ZJ = AJ.test(JJ);
      return ZJ || qJ.test(JJ) ? jJ(JJ.slice(2), ZJ ? 2 : 8) : XJ.test(JJ) ? NaN : +JJ
    }
  },
  4767: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4775);
    JJ.exports = function(JJ) {
      return null == JJ ? "" : FJ(JJ)
    }
  },
  5353: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4923),
      UJ = ZJ(5356);
    JJ.exports = function(JJ, cJ) {
      return JJ && JJ.length ? UJ(JJ, FJ(cJ, 2)) : []
    }
  },
  5422: (JJ, cJ, ZJ) => {
    var FJ = ZJ(5424)("toUpperCase");
    JJ.exports = FJ
  },
  5483: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => kc
    });
    var FJ = ZJ(47),
      UJ = ZJ(4367),
      eJ = ZJ.n(UJ);
    const {
      getOwnPropertyNames: XJ,
      getOwnPropertySymbols: AJ
    } = Object, {
      hasOwnProperty: qJ
    } = Object.prototype;

    function jJ(JJ, cJ) {
      return function(ZJ, FJ, UJ) {
        return JJ(ZJ, FJ, UJ) && cJ(ZJ, FJ, UJ)
      }
    }

    function YJ(JJ) {
      return function(cJ, ZJ, FJ) {
        if (!cJ || !ZJ || "object" !== typeof cJ || "object" !== typeof ZJ) return JJ(cJ, ZJ, FJ);
        const {
          cache: UJ
        } = FJ, eJ = UJ.get(cJ), XJ = UJ.get(ZJ);
        if (eJ && XJ) return eJ === ZJ && XJ === cJ;
        UJ.set(cJ, ZJ), UJ.set(ZJ, cJ);
        const AJ = JJ(cJ, ZJ, FJ);
        return UJ.delete(cJ), UJ.delete(ZJ), AJ
      }
    }

    function hJ(JJ) {
      return XJ(JJ).concat(AJ(JJ))
    }
    const DJ = Object.hasOwn || ((JJ, cJ) => qJ.call(JJ, cJ));

    function sJ(JJ, cJ) {
      return JJ === cJ || !JJ && !cJ && JJ !== JJ && cJ !== cJ
    }
    const {
      getOwnPropertyDescriptor: nJ,
      keys: GJ
    } = Object;

    function fJ(JJ, cJ) {
      return JJ.byteLength === cJ.byteLength && bJ(new Uint8Array(JJ), new Uint8Array(cJ))
    }

    function xJ(JJ, cJ, ZJ) {
      let FJ = JJ.length;
      if (cJ.length !== FJ) return !1;
      for (; FJ-- > 0;)
        if (!ZJ.equals(JJ[FJ], cJ[FJ], FJ, FJ, JJ, cJ, ZJ)) return !1;
      return !0
    }

    function rJ(JJ, cJ) {
      return JJ.byteLength === cJ.byteLength && bJ(new Uint8Array(JJ.buffer, JJ.byteOffset, JJ.byteLength), new Uint8Array(cJ.buffer, cJ.byteOffset, cJ.byteLength))
    }

    function vJ(JJ, cJ) {
      return sJ(JJ.getTime(), cJ.getTime())
    }

    function mJ(JJ, cJ) {
      return JJ.name === cJ.name && JJ.message === cJ.message && JJ.cause === cJ.cause && JJ.stack === cJ.stack
    }

    function QJ(JJ, cJ) {
      return JJ === cJ
    }

    function EJ(JJ, cJ, ZJ) {
      const FJ = JJ.size;
      if (FJ !== cJ.size) return !1;
      if (!FJ) return !0;
      const UJ = new Array(FJ),
        eJ = JJ.entries();
      let XJ, AJ, qJ = 0;
      for (;
        (XJ = eJ.next()) && !XJ.done;) {
        const FJ = cJ.entries();
        let eJ = !1,
          jJ = 0;
        for (;
          (AJ = FJ.next()) && !AJ.done;) {
          if (UJ[jJ]) {
            jJ++;
            continue
          }
          const FJ = XJ.value,
            YJ = AJ.value;
          if (ZJ.equals(FJ[0], YJ[0], qJ, jJ, JJ, cJ, ZJ) && ZJ.equals(FJ[1], YJ[1], FJ[0], YJ[0], JJ, cJ, ZJ)) {
            eJ = UJ[jJ] = !0;
            break
          }
          jJ++
        }
        if (!eJ) return !1;
        qJ++
      }
      return !0
    }
    const VJ = sJ;

    function KJ(JJ, cJ, ZJ) {
      const FJ = GJ(JJ);
      let UJ = FJ.length;
      if (GJ(cJ).length !== UJ) return !1;
      for (; UJ-- > 0;)
        if (!WJ(JJ, cJ, ZJ, FJ[UJ])) return !1;
      return !0
    }

    function yJ(JJ, cJ, ZJ) {
      const FJ = hJ(JJ);
      let UJ, eJ, XJ, AJ = FJ.length;
      if (hJ(cJ).length !== AJ) return !1;
      for (; AJ-- > 0;) {
        if (UJ = FJ[AJ], !WJ(JJ, cJ, ZJ, UJ)) return !1;
        if (eJ = nJ(JJ, UJ), XJ = nJ(cJ, UJ), (eJ || XJ) && (!eJ || !XJ || eJ.configurable !== XJ.configurable || eJ.enumerable !== XJ.enumerable || eJ.writable !== XJ.writable)) return !1
      }
      return !0
    }

    function SJ(JJ, cJ) {
      return sJ(JJ.valueOf(), cJ.valueOf())
    }

    function IJ(JJ, cJ) {
      return JJ.source === cJ.source && JJ.flags === cJ.flags
    }

    function MJ(JJ, cJ, ZJ) {
      const FJ = JJ.size;
      if (FJ !== cJ.size) return !1;
      if (!FJ) return !0;
      const UJ = new Array(FJ),
        eJ = JJ.values();
      let XJ, AJ;
      for (;
        (XJ = eJ.next()) && !XJ.done;) {
        const FJ = cJ.values();
        let eJ = !1,
          qJ = 0;
        for (;
          (AJ = FJ.next()) && !AJ.done;) {
          if (!UJ[qJ] && ZJ.equals(XJ.value, AJ.value, XJ.value, AJ.value, JJ, cJ, ZJ)) {
            eJ = UJ[qJ] = !0;
            break
          }
          qJ++
        }
        if (!eJ) return !1
      }
      return !0
    }

    function bJ(JJ, cJ) {
      let ZJ = JJ.byteLength;
      if (cJ.byteLength !== ZJ || JJ.byteOffset !== cJ.byteOffset) return !1;
      for (; ZJ-- > 0;)
        if (JJ[ZJ] !== cJ[ZJ]) return !1;
      return !0
    }

    function wJ(JJ, cJ) {
      return JJ.hostname === cJ.hostname && JJ.pathname === cJ.pathname && JJ.protocol === cJ.protocol && JJ.port === cJ.port && JJ.hash === cJ.hash && JJ.username === cJ.username && JJ.password === cJ.password
    }

    function WJ(JJ, cJ, ZJ, FJ) {
      return !("_owner" !== FJ && "__o" !== FJ && "__v" !== FJ || !JJ.$$typeof && !cJ.$$typeof) || DJ(cJ, FJ) && ZJ.equals(JJ[FJ], cJ[FJ], FJ, FJ, JJ, cJ, ZJ)
    }
    const gJ = {
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
      HJ = Object.prototype.toString;

    function PJ(JJ) {
      let {
        areArrayBuffersEqual: cJ,
        areArraysEqual: ZJ,
        areDataViewsEqual: FJ,
        areDatesEqual: UJ,
        areErrorsEqual: eJ,
        areFunctionsEqual: XJ,
        areMapsEqual: AJ,
        areNumbersEqual: qJ,
        areObjectsEqual: jJ,
        arePrimitiveWrappersEqual: YJ,
        areRegExpsEqual: hJ,
        areSetsEqual: DJ,
        areTypedArraysEqual: sJ,
        areUrlsEqual: nJ,
        unknownTagComparators: GJ
      } = JJ;
      return function(JJ, fJ, xJ) {
        if (JJ === fJ) return !0;
        if (null == JJ || null == fJ) return !1;
        const rJ = typeof JJ;
        if (rJ !== typeof fJ) return !1;
        if ("object" !== rJ) return "number" === rJ ? qJ(JJ, fJ, xJ) : "function" === rJ && XJ(JJ, fJ, xJ);
        const vJ = JJ.constructor;
        if (vJ !== fJ.constructor) return !1;
        if (vJ === Object) return jJ(JJ, fJ, xJ);
        if (Array.isArray(JJ)) return ZJ(JJ, fJ, xJ);
        if (vJ === Date) return UJ(JJ, fJ, xJ);
        if (vJ === RegExp) return hJ(JJ, fJ, xJ);
        if (vJ === Map) return AJ(JJ, fJ, xJ);
        if (vJ === Set) return DJ(JJ, fJ, xJ);
        const mJ = HJ.call(JJ);
        if ("[object Date]" === mJ) return UJ(JJ, fJ, xJ);
        if ("[object RegExp]" === mJ) return hJ(JJ, fJ, xJ);
        if ("[object Map]" === mJ) return AJ(JJ, fJ, xJ);
        if ("[object Set]" === mJ) return DJ(JJ, fJ, xJ);
        if ("[object Object]" === mJ) return "function" !== typeof JJ.then && "function" !== typeof fJ.then && jJ(JJ, fJ, xJ);
        if ("[object URL]" === mJ) return nJ(JJ, fJ, xJ);
        if ("[object Error]" === mJ) return eJ(JJ, fJ, xJ);
        if ("[object Arguments]" === mJ) return jJ(JJ, fJ, xJ);
        if (gJ[mJ]) return sJ(JJ, fJ, xJ);
        if ("[object ArrayBuffer]" === mJ) return cJ(JJ, fJ, xJ);
        if ("[object DataView]" === mJ) return FJ(JJ, fJ, xJ);
        if ("[object Boolean]" === mJ || "[object Number]" === mJ || "[object String]" === mJ) return YJ(JJ, fJ, xJ);
        if (GJ) {
          let cJ = GJ[mJ];
          if (!cJ) {
            const ZJ = null != (QJ = JJ) ? QJ[Symbol.toStringTag] : void 0;
            ZJ && (cJ = GJ[ZJ])
          }
          if (cJ) return cJ(JJ, fJ, xJ)
        }
        var QJ;
        return !1
      }
    }
    const kJ = pJ();
    pJ({
      strict: !0
    }), pJ({
      circular: !0
    }), pJ({
      circular: !0,
      strict: !0
    }), pJ({
      createInternalComparator: () => sJ
    }), pJ({
      strict: !0,
      createInternalComparator: () => sJ
    }), pJ({
      circular: !0,
      createInternalComparator: () => sJ
    }), pJ({
      circular: !0,
      createInternalComparator: () => sJ,
      strict: !0
    });

    function pJ() {
      let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        circular: cJ = !1,
        createInternalComparator: ZJ,
        createState: FJ,
        strict: UJ = !1
      } = JJ, eJ = function(JJ) {
        let {
          circular: cJ,
          createCustomConfig: ZJ,
          strict: FJ
        } = JJ, UJ = {
          areArrayBuffersEqual: fJ,
          areArraysEqual: FJ ? yJ : xJ,
          areDataViewsEqual: rJ,
          areDatesEqual: vJ,
          areErrorsEqual: mJ,
          areFunctionsEqual: QJ,
          areMapsEqual: FJ ? jJ(EJ, yJ) : EJ,
          areNumbersEqual: VJ,
          areObjectsEqual: FJ ? yJ : KJ,
          arePrimitiveWrappersEqual: SJ,
          areRegExpsEqual: IJ,
          areSetsEqual: FJ ? jJ(MJ, yJ) : MJ,
          areTypedArraysEqual: FJ ? jJ(bJ, yJ) : bJ,
          areUrlsEqual: wJ,
          unknownTagComparators: void 0
        };
        if (ZJ && (UJ = Object.assign({}, UJ, ZJ(UJ))), cJ) {
          const JJ = YJ(UJ.areArraysEqual),
            cJ = YJ(UJ.areMapsEqual),
            ZJ = YJ(UJ.areObjectsEqual),
            FJ = YJ(UJ.areSetsEqual);
          UJ = Object.assign({}, UJ, {
            areArraysEqual: JJ,
            areMapsEqual: cJ,
            areObjectsEqual: ZJ,
            areSetsEqual: FJ
          })
        }
        return UJ
      }(JJ), XJ = PJ(eJ);
      var AJ;
      return function(JJ) {
        let {
          circular: cJ,
          comparator: ZJ,
          createState: FJ,
          equals: UJ,
          strict: eJ
        } = JJ;
        if (FJ) return function(JJ, XJ) {
          const {
            cache: AJ = (cJ ? new WeakMap : void 0),
            meta: qJ
          } = FJ();
          return ZJ(JJ, XJ, {
            cache: AJ,
            equals: UJ,
            meta: qJ,
            strict: eJ
          })
        };
        if (cJ) return function(JJ, cJ) {
          return ZJ(JJ, cJ, {
            cache: new WeakMap,
            equals: UJ,
            meta: void 0,
            strict: eJ
          })
        };
        const XJ = {
          cache: void 0,
          equals: UJ,
          meta: void 0,
          strict: eJ
        };
        return function(JJ, cJ) {
          return ZJ(JJ, cJ, XJ)
        }
      }({
        circular: cJ,
        comparator: XJ,
        createState: FJ,
        equals: ZJ ? ZJ(XJ) : (AJ = XJ, function(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
          return AJ(JJ, cJ, XJ)
        }),
        strict: UJ
      })
    }

    function dJ(JJ) {
      var cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        ZJ = -1;
      requestAnimationFrame((function FJ(UJ) {
        ZJ < 0 && (ZJ = UJ), UJ - ZJ > cJ ? (JJ(UJ), ZJ = -1) : function(JJ) {
          "undefined" !== typeof requestAnimationFrame && requestAnimationFrame(JJ)
        }(FJ)
      }))
    }

    function zJ(JJ) {
      return zJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, zJ(JJ)
    }

    function NJ(JJ) {
      return function(JJ) {
        if (Array.isArray(JJ)) return JJ
      }(JJ) || function(JJ) {
        if ("undefined" !== typeof Symbol && null != JJ[Symbol.iterator] || null != JJ["@@iterator"]) return Array.from(JJ)
      }(JJ) || function(JJ, cJ) {
        if (!JJ) return;
        if ("string" === typeof JJ) return OJ(JJ, cJ);
        var ZJ = Object.prototype.toString.call(JJ).slice(8, -1);
        "Object" === ZJ && JJ.constructor && (ZJ = JJ.constructor.name);
        if ("Map" === ZJ || "Set" === ZJ) return Array.from(JJ);
        if ("Arguments" === ZJ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZJ)) return OJ(JJ, cJ)
      }(JJ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function OJ(JJ, cJ) {
      (null == cJ || cJ > JJ.length) && (cJ = JJ.length);
      for (var ZJ = 0, FJ = new Array(cJ); ZJ < cJ; ZJ++) FJ[ZJ] = JJ[ZJ];
      return FJ
    }

    function TJ() {
      var JJ = function() {
          return null
        },
        cJ = !1,
        ZJ = function ZJ(FJ) {
          if (!cJ) {
            if (Array.isArray(FJ)) {
              if (!FJ.length) return;
              var UJ = NJ(FJ),
                eJ = UJ[0],
                XJ = UJ.slice(1);
              return "number" === typeof eJ ? void dJ(ZJ.bind(null, XJ), eJ) : (ZJ(eJ), void dJ(ZJ.bind(null, XJ)))
            }
            "object" === zJ(FJ) && JJ(FJ), "function" === typeof FJ && FJ()
          }
        };
      return {
        stop: function() {
          cJ = !0
        },
        start: function(JJ) {
          cJ = !1, ZJ(JJ)
        },
        subscribe: function(cJ) {
          return JJ = cJ,
            function() {
              JJ = function() {
                return null
              }
            }
        }
      }
    }

    function CJ(JJ) {
      return CJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, CJ(JJ)
    }

    function uJ(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function iJ(JJ) {
      for (var cJ = 1; cJ < arguments.length; cJ++) {
        var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
        cJ % 2 ? uJ(Object(ZJ), !0).forEach((function(cJ) {
          RJ(JJ, cJ, ZJ[cJ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : uJ(Object(ZJ)).forEach((function(cJ) {
          Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
        }))
      }
      return JJ
    }

    function RJ(JJ, cJ, ZJ) {
      return (cJ = function(JJ) {
        var cJ = function(JJ, cJ) {
          if ("object" !== CJ(JJ) || null === JJ) return JJ;
          var ZJ = JJ[Symbol.toPrimitive];
          if (void 0 !== ZJ) {
            var FJ = ZJ.call(JJ, cJ || "default");
            if ("object" !== CJ(FJ)) return FJ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === cJ ? String : Number)(JJ)
        }(JJ, "string");
        return "symbol" === CJ(cJ) ? cJ : String(cJ)
      }(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }
    var LJ = function(JJ) {
        return JJ
      },
      aJ = function(JJ, cJ) {
        return Object.keys(cJ).reduce((function(ZJ, FJ) {
          return iJ(iJ({}, ZJ), {}, RJ({}, FJ, JJ(FJ, cJ[FJ])))
        }), {})
      },
      BJ = function(JJ, cJ, ZJ) {
        return JJ.map((function(JJ) {
          return "".concat((FJ = JJ, FJ.replace(/([A-Z])/g, (function(JJ) {
            return "-".concat(JJ.toLowerCase())
          }))), " ").concat(cJ, "ms ").concat(ZJ);
          var FJ
        })).join(",")
      };

    function tJ(JJ, cJ) {
      return function(JJ) {
        if (Array.isArray(JJ)) return JJ
      }(JJ) || function(JJ, cJ) {
        var ZJ = null == JJ ? null : "undefined" != typeof Symbol && JJ[Symbol.iterator] || JJ["@@iterator"];
        if (null != ZJ) {
          var FJ, UJ, eJ, XJ, AJ = [],
            qJ = !0,
            jJ = !1;
          try {
            if (eJ = (ZJ = ZJ.call(JJ)).next, 0 === cJ) {
              if (Object(ZJ) !== ZJ) return;
              qJ = !1
            } else
              for (; !(qJ = (FJ = eJ.call(ZJ)).done) && (AJ.push(FJ.value), AJ.length !== cJ); qJ = !0);
          } catch (JJ) {
            jJ = !0, UJ = JJ
          } finally {
            try {
              if (!qJ && null != ZJ.return && (XJ = ZJ.return(), Object(XJ) !== XJ)) return
            } finally {
              if (jJ) throw UJ
            }
          }
          return AJ
        }
      }(JJ, cJ) || lJ(JJ, cJ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function oJ(JJ) {
      return function(JJ) {
        if (Array.isArray(JJ)) return Jc(JJ)
      }(JJ) || function(JJ) {
        if ("undefined" !== typeof Symbol && null != JJ[Symbol.iterator] || null != JJ["@@iterator"]) return Array.from(JJ)
      }(JJ) || lJ(JJ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function lJ(JJ, cJ) {
      if (JJ) {
        if ("string" === typeof JJ) return Jc(JJ, cJ);
        var ZJ = Object.prototype.toString.call(JJ).slice(8, -1);
        return "Object" === ZJ && JJ.constructor && (ZJ = JJ.constructor.name), "Map" === ZJ || "Set" === ZJ ? Array.from(JJ) : "Arguments" === ZJ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZJ) ? Jc(JJ, cJ) : void 0
      }
    }

    function Jc(JJ, cJ) {
      (null == cJ || cJ > JJ.length) && (cJ = JJ.length);
      for (var ZJ = 0, FJ = new Array(cJ); ZJ < cJ; ZJ++) FJ[ZJ] = JJ[ZJ];
      return FJ
    }
    var cc = 1e-4,
      Zc = function(JJ, cJ) {
        return [0, 3 * JJ, 3 * cJ - 6 * JJ, 3 * JJ - 3 * cJ + 1]
      },
      Fc = function(JJ, cJ) {
        return JJ.map((function(JJ, ZJ) {
          return JJ * Math.pow(cJ, ZJ)
        })).reduce((function(JJ, cJ) {
          return JJ + cJ
        }))
      },
      Uc = function(JJ, cJ) {
        return function(ZJ) {
          var FJ = Zc(JJ, cJ);
          return Fc(FJ, ZJ)
        }
      },
      ec = function() {
        for (var JJ = arguments.length, cJ = new Array(JJ), ZJ = 0; ZJ < JJ; ZJ++) cJ[ZJ] = arguments[ZJ];
        var FJ = cJ[0],
          UJ = cJ[1],
          eJ = cJ[2],
          XJ = cJ[3];
        if (1 === cJ.length) switch (cJ[0]) {
          case "linear":
            FJ = 0, UJ = 0, eJ = 1, XJ = 1;
            break;
          case "ease":
            FJ = .25, UJ = .1, eJ = .25, XJ = 1;
            break;
          case "ease-in":
            FJ = .42, UJ = 0, eJ = 1, XJ = 1;
            break;
          case "ease-out":
            FJ = .42, UJ = 0, eJ = .58, XJ = 1;
            break;
          case "ease-in-out":
            FJ = 0, UJ = 0, eJ = .58, XJ = 1;
            break;
          default:
            var AJ = cJ[0].split("(");
            if ("cubic-bezier" === AJ[0] && 4 === AJ[1].split(")")[0].split(",").length) {
              var qJ = tJ(AJ[1].split(")")[0].split(",").map((function(JJ) {
                return parseFloat(JJ)
              })), 4);
              FJ = qJ[0], UJ = qJ[1], eJ = qJ[2], XJ = qJ[3]
            }
        } [FJ, eJ, UJ, XJ].every((function(JJ) {
          return "number" === typeof JJ && JJ >= 0 && JJ <= 1
        }));
        var jJ, YJ, hJ = Uc(FJ, eJ),
          DJ = Uc(UJ, XJ),
          sJ = (jJ = FJ, YJ = eJ, function(JJ) {
            var cJ = Zc(jJ, YJ),
              ZJ = [].concat(oJ(cJ.map((function(JJ, cJ) {
                return JJ * cJ
              })).slice(1)), [0]);
            return Fc(ZJ, JJ)
          }),
          nJ = function(JJ) {
            for (var cJ, ZJ = JJ > 1 ? 1 : JJ, FJ = ZJ, UJ = 0; UJ < 8; ++UJ) {
              var eJ = hJ(FJ) - ZJ,
                XJ = sJ(FJ);
              if (Math.abs(eJ - ZJ) < cc || XJ < cc) return DJ(FJ);
              FJ = (cJ = FJ - eJ / XJ) > 1 ? 1 : cJ < 0 ? 0 : cJ
            }
            return DJ(FJ)
          };
        return nJ.isStepper = !1, nJ
      },
      Xc = function() {
        for (var JJ = arguments.length, cJ = new Array(JJ), ZJ = 0; ZJ < JJ; ZJ++) cJ[ZJ] = arguments[ZJ];
        var FJ = cJ[0];
        if ("string" === typeof FJ) switch (FJ) {
          case "ease":
          case "ease-in-out":
          case "ease-out":
          case "ease-in":
          case "linear":
            return ec(FJ);
          case "spring":
            return function() {
              var JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                cJ = JJ.stiff,
                ZJ = void 0 === cJ ? 100 : cJ,
                FJ = JJ.damping,
                UJ = void 0 === FJ ? 8 : FJ,
                eJ = JJ.dt,
                XJ = void 0 === eJ ? 17 : eJ,
                AJ = function(JJ, cJ, FJ) {
                  var eJ = FJ + (-(JJ - cJ) * ZJ - FJ * UJ) * XJ / 1e3,
                    AJ = FJ * XJ / 1e3 + JJ;
                  return Math.abs(AJ - cJ) < cc && Math.abs(eJ) < cc ? [cJ, 0] : [AJ, eJ]
                };
              return AJ.isStepper = !0, AJ.dt = XJ, AJ
            }();
          default:
            if ("cubic-bezier" === FJ.split("(")[0]) return ec(FJ)
        }
        return "function" === typeof FJ ? FJ : null
      };

    function Ac(JJ) {
      return Ac = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, Ac(JJ)
    }

    function qc(JJ) {
      return function(JJ) {
        if (Array.isArray(JJ)) return nc(JJ)
      }(JJ) || function(JJ) {
        if ("undefined" !== typeof Symbol && null != JJ[Symbol.iterator] || null != JJ["@@iterator"]) return Array.from(JJ)
      }(JJ) || sc(JJ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function jc(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function Yc(JJ) {
      for (var cJ = 1; cJ < arguments.length; cJ++) {
        var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
        cJ % 2 ? jc(Object(ZJ), !0).forEach((function(cJ) {
          hc(JJ, cJ, ZJ[cJ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : jc(Object(ZJ)).forEach((function(cJ) {
          Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
        }))
      }
      return JJ
    }

    function hc(JJ, cJ, ZJ) {
      return (cJ = function(JJ) {
        var cJ = function(JJ, cJ) {
          if ("object" !== Ac(JJ) || null === JJ) return JJ;
          var ZJ = JJ[Symbol.toPrimitive];
          if (void 0 !== ZJ) {
            var FJ = ZJ.call(JJ, cJ || "default");
            if ("object" !== Ac(FJ)) return FJ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === cJ ? String : Number)(JJ)
        }(JJ, "string");
        return "symbol" === Ac(cJ) ? cJ : String(cJ)
      }(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }

    function Dc(JJ, cJ) {
      return function(JJ) {
        if (Array.isArray(JJ)) return JJ
      }(JJ) || function(JJ, cJ) {
        var ZJ = null == JJ ? null : "undefined" != typeof Symbol && JJ[Symbol.iterator] || JJ["@@iterator"];
        if (null != ZJ) {
          var FJ, UJ, eJ, XJ, AJ = [],
            qJ = !0,
            jJ = !1;
          try {
            if (eJ = (ZJ = ZJ.call(JJ)).next, 0 === cJ) {
              if (Object(ZJ) !== ZJ) return;
              qJ = !1
            } else
              for (; !(qJ = (FJ = eJ.call(ZJ)).done) && (AJ.push(FJ.value), AJ.length !== cJ); qJ = !0);
          } catch (JJ) {
            jJ = !0, UJ = JJ
          } finally {
            try {
              if (!qJ && null != ZJ.return && (XJ = ZJ.return(), Object(XJ) !== XJ)) return
            } finally {
              if (jJ) throw UJ
            }
          }
          return AJ
        }
      }(JJ, cJ) || sc(JJ, cJ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function sc(JJ, cJ) {
      if (JJ) {
        if ("string" === typeof JJ) return nc(JJ, cJ);
        var ZJ = Object.prototype.toString.call(JJ).slice(8, -1);
        return "Object" === ZJ && JJ.constructor && (ZJ = JJ.constructor.name), "Map" === ZJ || "Set" === ZJ ? Array.from(JJ) : "Arguments" === ZJ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZJ) ? nc(JJ, cJ) : void 0
      }
    }

    function nc(JJ, cJ) {
      (null == cJ || cJ > JJ.length) && (cJ = JJ.length);
      for (var ZJ = 0, FJ = new Array(cJ); ZJ < cJ; ZJ++) FJ[ZJ] = JJ[ZJ];
      return FJ
    }
    var Gc = function(JJ, cJ, ZJ) {
        return JJ + (cJ - JJ) * ZJ
      },
      fc = function(JJ) {
        return JJ.from !== JJ.to
      },
      xc = function JJ(cJ, ZJ, FJ) {
        var UJ = aJ((function(JJ, ZJ) {
          if (fc(ZJ)) {
            var FJ = Dc(cJ(ZJ.from, ZJ.to, ZJ.jf), 2),
              UJ = FJ[0],
              eJ = FJ[1];
            return Yc(Yc({}, ZJ), {}, {
              from: UJ,
              jf: eJ
            })
          }
          return ZJ
        }), ZJ);
        return FJ < 1 ? aJ((function(JJ, cJ) {
          return fc(cJ) ? Yc(Yc({}, cJ), {}, {
            jf: Gc(cJ.jf, UJ[JJ].jf, FJ),
            from: Gc(cJ.from, UJ[JJ].from, FJ)
          }) : cJ
        }), ZJ) : JJ(cJ, UJ, FJ - 1)
      };
    const rc = function(JJ, cJ, ZJ, FJ, UJ) {
      var eJ, XJ, AJ, qJ, jJ = (eJ = JJ, XJ = cJ, [Object.keys(eJ), Object.keys(XJ)].reduce((function(JJ, cJ) {
          return JJ.filter((function(JJ) {
            return cJ.includes(JJ)
          }))
        }))),
        YJ = jJ.reduce((function(ZJ, FJ) {
          return Yc(Yc({}, ZJ), {}, hc({}, FJ, [JJ[FJ], cJ[FJ]]))
        }), {}),
        hJ = jJ.reduce((function(ZJ, FJ) {
          return Yc(Yc({}, ZJ), {}, hc({}, FJ, {
            from: JJ[FJ],
            jf: 0,
            to: cJ[FJ]
          }))
        }), {}),
        DJ = -1,
        sJ = function() {
          return null
        };
      return sJ = ZJ.isStepper ? function(FJ) {
          AJ || (AJ = FJ);
          var eJ = (FJ - AJ) / ZJ.dt;
          hJ = xc(ZJ, hJ, eJ), UJ(Yc(Yc(Yc({}, JJ), cJ), aJ((function(JJ, cJ) {
            return cJ.from
          }), hJ))), AJ = FJ, Object.values(hJ).filter(fc).length && (DJ = requestAnimationFrame(sJ))
        } : function(eJ) {
          qJ || (qJ = eJ);
          var XJ = (eJ - qJ) / FJ,
            AJ = aJ((function(JJ, cJ) {
              return Gc.apply(void 0, qc(cJ).concat([ZJ(XJ)]))
            }), YJ);
          if (UJ(Yc(Yc(Yc({}, JJ), cJ), AJ)), XJ < 1) DJ = requestAnimationFrame(sJ);
          else {
            var jJ = aJ((function(JJ, cJ) {
              return Gc.apply(void 0, qc(cJ).concat([ZJ(1)]))
            }), YJ);
            UJ(Yc(Yc(Yc({}, JJ), cJ), jJ))
          }
        },
        function() {
          return requestAnimationFrame(sJ),
            function() {
              cancelAnimationFrame(DJ)
            }
        }
    };

    function vc(JJ) {
      return vc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, vc(JJ)
    }
    var mc = ["children", "Fs", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];

    function Qc(JJ, cJ) {
      if (null == JJ) return {};
      var ZJ, FJ, UJ = function(JJ, cJ) {
        if (null == JJ) return {};
        var ZJ, FJ, UJ = {},
          eJ = Object.keys(JJ);
        for (FJ = 0; FJ < eJ.length; FJ++) ZJ = eJ[FJ], cJ.indexOf(ZJ) >= 0 || (UJ[ZJ] = JJ[ZJ]);
        return UJ
      }(JJ, cJ);
      if (Object.getOwnPropertySymbols) {
        var eJ = Object.getOwnPropertySymbols(JJ);
        for (FJ = 0; FJ < eJ.length; FJ++) ZJ = eJ[FJ], cJ.indexOf(ZJ) >= 0 || Object.prototype.propertyIsEnumerable.call(JJ, ZJ) && (UJ[ZJ] = JJ[ZJ])
      }
      return UJ
    }

    function Ec(JJ) {
      return function(JJ) {
        if (Array.isArray(JJ)) return Vc(JJ)
      }(JJ) || function(JJ) {
        if ("undefined" !== typeof Symbol && null != JJ[Symbol.iterator] || null != JJ["@@iterator"]) return Array.from(JJ)
      }(JJ) || function(JJ, cJ) {
        if (!JJ) return;
        if ("string" === typeof JJ) return Vc(JJ, cJ);
        var ZJ = Object.prototype.toString.call(JJ).slice(8, -1);
        "Object" === ZJ && JJ.constructor && (ZJ = JJ.constructor.name);
        if ("Map" === ZJ || "Set" === ZJ) return Array.from(JJ);
        if ("Arguments" === ZJ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZJ)) return Vc(JJ, cJ)
      }(JJ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Vc(JJ, cJ) {
      (null == cJ || cJ > JJ.length) && (cJ = JJ.length);
      for (var ZJ = 0, FJ = new Array(cJ); ZJ < cJ; ZJ++) FJ[ZJ] = JJ[ZJ];
      return FJ
    }

    function Kc(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function yc(JJ) {
      for (var cJ = 1; cJ < arguments.length; cJ++) {
        var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
        cJ % 2 ? Kc(Object(ZJ), !0).forEach((function(cJ) {
          Sc(JJ, cJ, ZJ[cJ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : Kc(Object(ZJ)).forEach((function(cJ) {
          Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
        }))
      }
      return JJ
    }

    function Sc(JJ, cJ, ZJ) {
      return (cJ = Mc(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }

    function Ic(JJ, cJ) {
      for (var ZJ = 0; ZJ < cJ.length; ZJ++) {
        var FJ = cJ[ZJ];
        FJ.enumerable = FJ.enumerable || !1, FJ.configurable = !0, "value" in FJ && (FJ.writable = !0), Object.defineProperty(JJ, Mc(FJ.key), FJ)
      }
    }

    function Mc(JJ) {
      var cJ = function(JJ, cJ) {
        if ("object" !== vc(JJ) || null === JJ) return JJ;
        var ZJ = JJ[Symbol.toPrimitive];
        if (void 0 !== ZJ) {
          var FJ = ZJ.call(JJ, cJ || "default");
          if ("object" !== vc(FJ)) return FJ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === cJ ? String : Number)(JJ)
      }(JJ, "string");
      return "symbol" === vc(cJ) ? cJ : String(cJ)
    }

    function bc(JJ, cJ) {
      return bc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(JJ, cJ) {
        return JJ.__proto__ = cJ, JJ
      }, bc(JJ, cJ)
    }

    function wc(JJ) {
      var cJ = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (JJ) {
          return !1
        }
      }();
      return function() {
        var ZJ, FJ = Hc(JJ);
        if (cJ) {
          var UJ = Hc(this).constructor;
          ZJ = Reflect.construct(FJ, arguments, UJ)
        } else ZJ = FJ.apply(this, arguments);
        return Wc(this, ZJ)
      }
    }

    function Wc(JJ, cJ) {
      if (cJ && ("object" === vc(cJ) || "function" === typeof cJ)) return cJ;
      if (void 0 !== cJ) throw new TypeError("Derived constructors may only return object or undefined");
      return gc(JJ)
    }

    function gc(JJ) {
      if (void 0 === JJ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return JJ
    }

    function Hc(JJ) {
      return Hc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(JJ) {
        return JJ.__proto__ || Object.getPrototypeOf(JJ)
      }, Hc(JJ)
    }
    var Pc = function(JJ) {
      ! function(JJ, cJ) {
        if ("function" !== typeof cJ && null !== cJ) throw new TypeError("Super expression must either be null or a function");
        JJ.prototype = Object.create(cJ && cJ.prototype, {
          constructor: {
            value: JJ,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(JJ, "prototype", {
          writable: !1
        }), cJ && bc(JJ, cJ)
      }(XJ, JJ);
      var cJ, ZJ, UJ, eJ = wc(XJ);

      function XJ(JJ, cJ) {
        var ZJ;
        ! function(JJ, cJ) {
          if (!(JJ instanceof cJ)) throw new TypeError("Cannot call a class as a function")
        }(this, XJ);
        var FJ = (ZJ = eJ.call(this, JJ, cJ)).props,
          UJ = FJ.isActive,
          AJ = FJ.attributeName,
          qJ = FJ.from,
          jJ = FJ.to,
          YJ = FJ.steps,
          hJ = FJ.children,
          DJ = FJ.duration;
        if (ZJ.handleStyleChange = ZJ.handleStyleChange.bind(gc(ZJ)), ZJ.changeStyle = ZJ.changeStyle.bind(gc(ZJ)), !UJ || DJ <= 0) return ZJ.state = {
          style: {}
        }, "function" === typeof hJ && (ZJ.state = {
          style: jJ
        }), Wc(ZJ);
        if (YJ && YJ.length) ZJ.state = {
          style: YJ[0].style
        };
        else if (qJ) {
          if ("function" === typeof hJ) return ZJ.state = {
            style: qJ
          }, Wc(ZJ);
          ZJ.state = {
            style: AJ ? Sc({}, AJ, qJ) : qJ
          }
        } else ZJ.state = {
          style: {}
        };
        return ZJ
      }
      return cJ = XJ, (ZJ = [{
        key: "componentDidMount",
        value: function() {
          var JJ = this.props,
            cJ = JJ.isActive,
            ZJ = JJ.canBegin;
          this.mounted = !0, cJ && ZJ && this.runAnimation(this.props)
        }
      }, {
        key: "componentDidUpdate",
        value: function(JJ) {
          var cJ = this.props,
            ZJ = cJ.isActive,
            FJ = cJ.canBegin,
            UJ = cJ.attributeName,
            eJ = cJ.shouldReAnimate,
            XJ = cJ.to,
            AJ = cJ.from,
            qJ = this.state.style;
          if (FJ)
            if (ZJ) {
              if (!(kJ(JJ.to, XJ) && JJ.canBegin && JJ.isActive)) {
                var jJ = !JJ.canBegin || !JJ.isActive;
                this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
                var YJ = jJ || eJ ? AJ : JJ.to;
                if (this.state && qJ) {
                  var hJ = {
                    style: UJ ? Sc({}, UJ, YJ) : YJ
                  };
                  (UJ && qJ[UJ] !== YJ || !UJ && qJ !== YJ) && this.setState(hJ)
                }
                this.runAnimation(yc(yc({}, this.props), {}, {
                  from: YJ,
                  Fs: 0
                }))
              }
            } else {
              var DJ = {
                style: UJ ? Sc({}, UJ, XJ) : XJ
              };
              this.state && qJ && (UJ && qJ[UJ] !== XJ || !UJ && qJ !== XJ) && this.setState(DJ)
            }
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          this.mounted = !1;
          var JJ = this.props.onAnimationEnd;
          this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), JJ && JJ()
        }
      }, {
        key: "handleStyleChange",
        value: function(JJ) {
          this.changeStyle(JJ)
        }
      }, {
        key: "changeStyle",
        value: function(JJ) {
          this.mounted && this.setState({
            style: JJ
          })
        }
      }, {
        key: "runJSAnimation",
        value: function(JJ) {
          var cJ = this,
            ZJ = JJ.from,
            FJ = JJ.to,
            UJ = JJ.duration,
            eJ = JJ.easing,
            XJ = JJ.Fs,
            AJ = JJ.onAnimationEnd,
            qJ = JJ.onAnimationStart,
            jJ = rc(ZJ, FJ, Xc(eJ), UJ, this.changeStyle);
          this.manager.start([qJ, XJ, function() {
            cJ.stopJSAnimation = jJ()
          }, UJ, AJ])
        }
      }, {
        key: "runStepAnimation",
        value: function(JJ) {
          var cJ = this,
            ZJ = JJ.steps,
            FJ = JJ.Fs,
            UJ = JJ.onAnimationStart,
            eJ = ZJ[0],
            XJ = eJ.style,
            AJ = eJ.duration,
            qJ = void 0 === AJ ? 0 : AJ;
          return this.manager.start([UJ].concat(Ec(ZJ.reduce((function(JJ, FJ, UJ) {
            if (0 === UJ) return JJ;
            var eJ = FJ.duration,
              XJ = FJ.easing,
              AJ = void 0 === XJ ? "ease" : XJ,
              qJ = FJ.style,
              jJ = FJ.properties,
              YJ = FJ.onAnimationEnd,
              hJ = UJ > 0 ? ZJ[UJ - 1] : FJ,
              DJ = jJ || Object.keys(qJ);
            if ("function" === typeof AJ || "spring" === AJ) return [].concat(Ec(JJ), [cJ.runJSAnimation.bind(cJ, {
              from: hJ.style,
              to: qJ,
              duration: eJ,
              easing: AJ
            }), eJ]);
            var sJ = BJ(DJ, eJ, AJ),
              nJ = yc(yc(yc({}, hJ.style), qJ), {}, {
                transition: sJ
              });
            return [].concat(Ec(JJ), [nJ, eJ, YJ]).filter(LJ)
          }), [XJ, Math.max(qJ, FJ)])), [JJ.onAnimationEnd]))
        }
      }, {
        key: "runAnimation",
        value: function(JJ) {
          this.manager || (this.manager = TJ());
          var cJ = JJ.Fs,
            ZJ = JJ.duration,
            FJ = JJ.attributeName,
            UJ = JJ.to,
            eJ = JJ.easing,
            XJ = JJ.onAnimationStart,
            AJ = JJ.onAnimationEnd,
            qJ = JJ.steps,
            jJ = JJ.children,
            YJ = this.manager;
          if (this.unSubscribe = YJ.subscribe(this.handleStyleChange), "function" !== typeof eJ && "function" !== typeof jJ && "spring" !== eJ)
            if (qJ.length > 1) this.runStepAnimation(JJ);
            else {
              var hJ = FJ ? Sc({}, FJ, UJ) : UJ,
                DJ = BJ(Object.keys(hJ), ZJ, eJ);
              YJ.start([XJ, cJ, yc(yc({}, hJ), {}, {
                transition: DJ
              }), ZJ, AJ])
            }
          else this.runJSAnimation(JJ)
        }
      }, {
        key: "render",
        value: function() {
          var JJ = this.props,
            cJ = JJ.children,
            ZJ = (JJ.Fs, JJ.duration),
            UJ = (JJ.attributeName, JJ.easing, JJ.isActive),
            eJ = (JJ.steps, JJ.from, JJ.to, JJ.canBegin, JJ.onAnimationEnd, JJ.shouldReAnimate, JJ.onAnimationReStart, Qc(JJ, mc)),
            XJ = FJ.Children.count(cJ),
            AJ = this.state.style;
          if ("function" === typeof cJ) return cJ(AJ);
          if (!UJ || 0 === XJ || ZJ <= 0) return cJ;
          var qJ = function(JJ) {
            var cJ = JJ.props,
              ZJ = cJ.style,
              UJ = void 0 === ZJ ? {} : ZJ,
              XJ = cJ.className;
            return (0, FJ.cloneElement)(JJ, yc(yc({}, eJ), {}, {
              style: yc(yc({}, UJ), AJ),
              className: XJ
            }))
          };
          return 1 === XJ ? qJ(FJ.Children.only(cJ)) : FJ.createElement("div", null, FJ.Children.map(cJ, (function(JJ) {
            return qJ(JJ)
          })))
        }
      }]) && Ic(cJ.prototype, ZJ), UJ && Ic(cJ, UJ), Object.defineProperty(cJ, "prototype", {
        writable: !1
      }), XJ
    }(FJ.PureComponent);
    Pc.displayName = "Animate", Pc.defaultProps = {
      Fs: 0,
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
    }, Pc.propTypes = {
      from: eJ().oneOfType([eJ().object, eJ().string]),
      to: eJ().oneOfType([eJ().object, eJ().string]),
      attributeName: eJ().string,
      duration: eJ().number,
      Fs: eJ().number,
      easing: eJ().oneOfType([eJ().string, eJ().func]),
      steps: eJ().arrayOf(eJ().shape({
        duration: eJ().number.isRequired,
        style: eJ().object.isRequired,
        easing: eJ().oneOfType([eJ().oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), eJ().func]),
        properties: eJ().arrayOf("string"),
        onAnimationEnd: eJ().func
      })),
      children: eJ().oneOfType([eJ().node, eJ().func]),
      isActive: eJ().bool,
      canBegin: eJ().bool,
      onAnimationEnd: eJ().func,
      shouldReAnimate: eJ().bool,
      onAnimationStart: eJ().func,
      onAnimationReStart: eJ().func
    };
    const kc = Pc
  },
  5728: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => NJ
    });
    var FJ, UJ = ZJ(47),
      eJ = ZJ(4468),
      XJ = ZJ(5483),
      AJ = ZJ(4641),
      qJ = ZJ.n(AJ),
      jJ = ZJ(5516),
      YJ = ZJ.n(jJ),
      hJ = ZJ(4786),
      DJ = ZJ.n(hJ),
      sJ = ZJ(4556),
      nJ = ZJ.n(sJ),
      GJ = ZJ(5557),
      fJ = ZJ.n(GJ),
      xJ = ZJ(5722),
      rJ = ZJ(5471),
      vJ = ZJ(5332),
      mJ = ZJ(5653),
      QJ = ZJ(5343),
      EJ = ZJ(4543),
      VJ = ZJ(5497),
      KJ = ZJ(4797),
      yJ = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
      SJ = ["key"];

    function IJ(JJ) {
      return IJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, IJ(JJ)
    }

    function MJ(JJ, cJ) {
      if (null == JJ) return {};
      var ZJ, FJ, UJ = function(JJ, cJ) {
        if (null == JJ) return {};
        var ZJ = {};
        for (var FJ in JJ)
          if (Object.prototype.hasOwnProperty.call(JJ, FJ)) {
            if (cJ.indexOf(FJ) >= 0) continue;
            ZJ[FJ] = JJ[FJ]
          } return ZJ
      }(JJ, cJ);
      if (Object.getOwnPropertySymbols) {
        var eJ = Object.getOwnPropertySymbols(JJ);
        for (FJ = 0; FJ < eJ.length; FJ++) ZJ = eJ[FJ], cJ.indexOf(ZJ) >= 0 || Object.prototype.propertyIsEnumerable.call(JJ, ZJ) && (UJ[ZJ] = JJ[ZJ])
      }
      return UJ
    }

    function bJ() {
      return bJ = Object.assign ? Object.assign.bind() : function(JJ) {
        for (var cJ = 1; cJ < arguments.length; cJ++) {
          var ZJ = arguments[cJ];
          for (var FJ in ZJ) Object.prototype.hasOwnProperty.call(ZJ, FJ) && (JJ[FJ] = ZJ[FJ])
        }
        return JJ
      }, bJ.apply(this, arguments)
    }

    function wJ(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function WJ(JJ) {
      for (var cJ = 1; cJ < arguments.length; cJ++) {
        var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
        cJ % 2 ? wJ(Object(ZJ), !0).forEach((function(cJ) {
          dJ(JJ, cJ, ZJ[cJ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : wJ(Object(ZJ)).forEach((function(cJ) {
          Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
        }))
      }
      return JJ
    }

    function gJ(JJ, cJ) {
      for (var ZJ = 0; ZJ < cJ.length; ZJ++) {
        var FJ = cJ[ZJ];
        FJ.enumerable = FJ.enumerable || !1, FJ.configurable = !0, "value" in FJ && (FJ.writable = !0), Object.defineProperty(JJ, zJ(FJ.key), FJ)
      }
    }

    function HJ(JJ, cJ, ZJ) {
      return cJ = kJ(cJ),
        function(JJ, cJ) {
          if (cJ && ("object" === IJ(cJ) || "function" === typeof cJ)) return cJ;
          if (void 0 !== cJ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(JJ) {
            if (void 0 === JJ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return JJ
          }(JJ)
        }(JJ, PJ() ? Reflect.construct(cJ, ZJ || [], kJ(JJ).constructor) : cJ.apply(JJ, ZJ))
    }

    function PJ() {
      try {
        var JJ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (JJ) {}
      return (PJ = function() {
        return !!JJ
      })()
    }

    function kJ(JJ) {
      return kJ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(JJ) {
        return JJ.__proto__ || Object.getPrototypeOf(JJ)
      }, kJ(JJ)
    }

    function pJ(JJ, cJ) {
      return pJ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(JJ, cJ) {
        return JJ.__proto__ = cJ, JJ
      }, pJ(JJ, cJ)
    }

    function dJ(JJ, cJ, ZJ) {
      return (cJ = zJ(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }

    function zJ(JJ) {
      var cJ = function(JJ, cJ) {
        if ("object" != IJ(JJ) || !JJ) return JJ;
        var ZJ = JJ[Symbol.toPrimitive];
        if (void 0 !== ZJ) {
          var FJ = ZJ.call(JJ, cJ || "default");
          if ("object" != IJ(FJ)) return FJ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === cJ ? String : Number)(JJ)
      }(JJ, "string");
      return "symbol" == IJ(cJ) ? cJ : cJ + ""
    }
    var NJ = function(JJ) {
      function cJ() {
        var JJ;
        ! function(JJ, cJ) {
          if (!(JJ instanceof cJ)) throw new TypeError("Cannot call a class as a function")
        }(this, cJ);
        for (var ZJ = arguments.length, FJ = new Array(ZJ), UJ = 0; UJ < ZJ; UJ++) FJ[UJ] = arguments[UJ];
        return dJ(JJ = HJ(this, cJ, [].concat(FJ)), "state", {
          isAnimationFinished: !0
        }), dJ(JJ, "id", (0, EJ.L)("recharts-area-")), dJ(JJ, "handleAnimationEnd", (function() {
          var cJ = JJ.props.onAnimationEnd;
          JJ.setState({
            isAnimationFinished: !0
          }), qJ()(cJ) && cJ()
        })), dJ(JJ, "handleAnimationStart", (function() {
          var cJ = JJ.props.onAnimationStart;
          JJ.setState({
            isAnimationFinished: !1
          }), qJ()(cJ) && cJ()
        })), JJ
      }
      return function(JJ, cJ) {
        if ("function" !== typeof cJ && null !== cJ) throw new TypeError("Super expression must either be null or a function");
        JJ.prototype = Object.create(cJ && cJ.prototype, {
          constructor: {
            value: JJ,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(JJ, "prototype", {
          writable: !1
        }), cJ && pJ(JJ, cJ)
      }(cJ, JJ), ZJ = cJ, FJ = [{
        key: "renderDots",
        value: function(JJ, ZJ, FJ) {
          var eJ = this.props.isAnimationActive,
            XJ = this.state.isAnimationFinished;
          if (eJ && !XJ) return null;
          var AJ = this.props,
            qJ = AJ.dot,
            jJ = AJ.points,
            YJ = AJ.dataKey,
            hJ = (0, KJ.c)(this.props, !1),
            DJ = (0, KJ.c)(qJ, !0),
            sJ = jJ.map((function(JJ, ZJ) {
              var FJ = WJ(WJ(WJ({
                key: "dot-".concat(ZJ),
                r: 3
              }, hJ), DJ), {}, {
                index: ZJ,
                cx: JJ.x,
                cy: JJ.y,
                dataKey: YJ,
                value: JJ.value,
                payload: JJ.payload,
                points: jJ
              });
              return cJ.renderDotItem(qJ, FJ)
            })),
            nJ = {
              clipPath: JJ ? "url(#clipPath-".concat(ZJ ? "" : "dots-").concat(FJ, ")") : null
            };
          return UJ.createElement(vJ.e, bJ({
            className: "recharts-area-dots"
          }, nJ), sJ)
        }
      }, {
        key: "renderHorizontalRect",
        value: function(JJ) {
          var cJ = this.props,
            ZJ = cJ.baseLine,
            FJ = cJ.points,
            eJ = cJ.strokeWidth,
            XJ = FJ[0].x,
            AJ = FJ[FJ.length - 1].x,
            qJ = JJ * Math.abs(XJ - AJ),
            jJ = YJ()(FJ.map((function(JJ) {
              return JJ.y || 0
            })));
          return (0, EJ.C)(ZJ) && "number" === typeof ZJ ? jJ = Math.max(ZJ, jJ) : ZJ && Array.isArray(ZJ) && ZJ.length && (jJ = Math.max(YJ()(ZJ.map((function(JJ) {
            return JJ.y || 0
          }))), jJ)), (0, EJ.C)(jJ) ? UJ.createElement("rect", {
            x: XJ < AJ ? XJ : XJ - qJ,
            y: 0,
            width: qJ,
            height: Math.floor(jJ + (eJ ? parseInt("".concat(eJ), 10) : 1))
          }) : null
        }
      }, {
        key: "renderVerticalRect",
        value: function(JJ) {
          var cJ = this.props,
            ZJ = cJ.baseLine,
            FJ = cJ.points,
            eJ = cJ.strokeWidth,
            XJ = FJ[0].y,
            AJ = FJ[FJ.length - 1].y,
            qJ = JJ * Math.abs(XJ - AJ),
            jJ = YJ()(FJ.map((function(JJ) {
              return JJ.x || 0
            })));
          return (0, EJ.C)(ZJ) && "number" === typeof ZJ ? jJ = Math.max(ZJ, jJ) : ZJ && Array.isArray(ZJ) && ZJ.length && (jJ = Math.max(YJ()(ZJ.map((function(JJ) {
            return JJ.x || 0
          }))), jJ)), (0, EJ.C)(jJ) ? UJ.createElement("rect", {
            x: 0,
            y: XJ < AJ ? XJ : XJ - qJ,
            width: jJ + (eJ ? parseInt("".concat(eJ), 10) : 1),
            height: Math.floor(qJ)
          }) : null
        }
      }, {
        key: "renderClipRect",
        value: function(JJ) {
          return "vertical" === this.props.layout ? this.renderVerticalRect(JJ) : this.renderHorizontalRect(JJ)
        }
      }, {
        key: "renderAreaStatically",
        value: function(JJ, cJ, ZJ, FJ) {
          var eJ = this.props,
            XJ = eJ.layout,
            AJ = eJ.type,
            qJ = eJ.stroke,
            jJ = eJ.connectNulls,
            YJ = eJ.isRange,
            hJ = (eJ.ref, MJ(eJ, yJ));
          return UJ.createElement(vJ.e, {
            clipPath: ZJ ? "url(#clipPath-".concat(FJ, ")") : null
          }, UJ.createElement(xJ.e, bJ({}, (0, KJ.c)(hJ, !0), {
            points: JJ,
            connectNulls: jJ,
            type: AJ,
            baseLine: cJ,
            layout: XJ,
            stroke: "none",
            className: "recharts-area-area"
          })), "none" !== qJ && UJ.createElement(xJ.e, bJ({}, (0, KJ.c)(this.props, !1), {
            className: "recharts-area-curve",
            layout: XJ,
            type: AJ,
            connectNulls: jJ,
            fill: "none",
            points: JJ
          })), "none" !== qJ && YJ && UJ.createElement(xJ.e, bJ({}, (0, KJ.c)(this.props, !1), {
            className: "recharts-area-curve",
            layout: XJ,
            type: AJ,
            connectNulls: jJ,
            fill: "none",
            points: cJ
          })))
        }
      }, {
        key: "renderAreaWithAnimation",
        value: function(JJ, cJ) {
          var ZJ = this,
            FJ = this.props,
            eJ = FJ.points,
            AJ = FJ.baseLine,
            qJ = FJ.isAnimationActive,
            jJ = FJ.animationBegin,
            YJ = FJ.animationDuration,
            hJ = FJ.animationEasing,
            sJ = FJ.animationId,
            GJ = this.state,
            fJ = GJ.prevPoints,
            xJ = GJ.prevBaseLine;
          return UJ.createElement(XJ.c, {
            Fs: jJ,
            duration: YJ,
            isActive: qJ,
            easing: hJ,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "area-".concat(sJ),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(FJ) {
            var XJ = FJ.t;
            if (fJ) {
              var qJ, jJ = fJ.length / eJ.length,
                YJ = eJ.map((function(JJ, cJ) {
                  var ZJ = Math.floor(cJ * jJ);
                  if (fJ[ZJ]) {
                    var FJ = fJ[ZJ],
                      UJ = (0, EJ.r)(FJ.x, JJ.x),
                      eJ = (0, EJ.r)(FJ.y, JJ.y);
                    return WJ(WJ({}, JJ), {}, {
                      x: UJ(XJ),
                      y: eJ(XJ)
                    })
                  }
                  return JJ
                }));
              return qJ = (0, EJ.C)(AJ) && "number" === typeof AJ ? (0, EJ.r)(xJ, AJ)(XJ) : DJ()(AJ) || nJ()(AJ) ? (0, EJ.r)(xJ, 0)(XJ) : AJ.map((function(JJ, cJ) {
                var ZJ = Math.floor(cJ * jJ);
                if (xJ[ZJ]) {
                  var FJ = xJ[ZJ],
                    UJ = (0, EJ.r)(FJ.x, JJ.x),
                    eJ = (0, EJ.r)(FJ.y, JJ.y);
                  return WJ(WJ({}, JJ), {}, {
                    x: UJ(XJ),
                    y: eJ(XJ)
                  })
                }
                return JJ
              })), ZJ.renderAreaStatically(YJ, qJ, JJ, cJ)
            }
            return UJ.createElement(vJ.e, null, UJ.createElement("defs", null, UJ.createElement("clipPath", {
              id: "animationClipPath-".concat(cJ)
            }, ZJ.renderClipRect(XJ))), UJ.createElement(vJ.e, {
              clipPath: "url(#animationClipPath-".concat(cJ, ")")
            }, ZJ.renderAreaStatically(eJ, AJ, JJ, cJ)))
          }))
        }
      }, {
        key: "renderArea",
        value: function(JJ, cJ) {
          var ZJ = this.props,
            FJ = ZJ.points,
            UJ = ZJ.baseLine,
            eJ = ZJ.isAnimationActive,
            XJ = this.state,
            AJ = XJ.prevPoints,
            qJ = XJ.prevBaseLine,
            jJ = XJ.totalLength;
          return eJ && FJ && FJ.length && (!AJ && jJ > 0 || !fJ()(AJ, FJ) || !fJ()(qJ, UJ)) ? this.renderAreaWithAnimation(JJ, cJ) : this.renderAreaStatically(FJ, UJ, JJ, cJ)
        }
      }, {
        key: "render",
        value: function() {
          var JJ, cJ = this.props,
            ZJ = cJ.hide,
            FJ = cJ.dot,
            XJ = cJ.points,
            AJ = cJ.className,
            qJ = cJ.top,
            jJ = cJ.left,
            YJ = cJ.xAxis,
            hJ = cJ.yAxis,
            sJ = cJ.width,
            nJ = cJ.height,
            GJ = cJ.isAnimationActive,
            fJ = cJ.id;
          if (ZJ || !XJ || !XJ.length) return null;
          var xJ = this.state.isAnimationFinished,
            rJ = 1 === XJ.length,
            QJ = (0, eJ.d)("recharts-area", AJ),
            EJ = YJ && YJ.allowDataOverflow,
            VJ = hJ && hJ.allowDataOverflow,
            yJ = EJ || VJ,
            SJ = DJ()(fJ) ? this.id : fJ,
            IJ = null !== (JJ = (0, KJ.c)(FJ, !1)) && void 0 !== JJ ? JJ : {
              r: 3,
              strokeWidth: 2
            },
            MJ = IJ.r,
            bJ = void 0 === MJ ? 3 : MJ,
            wJ = IJ.strokeWidth,
            WJ = void 0 === wJ ? 2 : wJ,
            gJ = ((0, KJ.n)(FJ) ? FJ : {}).clipDot,
            HJ = void 0 === gJ || gJ,
            PJ = 2 * bJ + WJ;
          return UJ.createElement(vJ.e, {
            className: QJ
          }, EJ || VJ ? UJ.createElement("defs", null, UJ.createElement("clipPath", {
            id: "clipPath-".concat(SJ)
          }, UJ.createElement("rect", {
            x: EJ ? jJ : jJ - sJ / 2,
            y: VJ ? qJ : qJ - nJ / 2,
            width: EJ ? sJ : 2 * sJ,
            height: VJ ? nJ : 2 * nJ
          })), !HJ && UJ.createElement("clipPath", {
            id: "clipPath-dots-".concat(SJ)
          }, UJ.createElement("rect", {
            x: jJ - PJ / 2,
            y: qJ - PJ / 2,
            width: sJ + PJ,
            height: nJ + PJ
          }))) : null, rJ ? null : this.renderArea(yJ, SJ), (FJ || rJ) && this.renderDots(yJ, HJ, SJ), (!GJ || xJ) && mJ.d.renderCallByParent(this.props, XJ))
        }
      }], AJ = [{
        key: "getDerivedStateFromProps",
        value: function(JJ, cJ) {
          return JJ.animationId !== cJ.prevAnimationId ? {
            prevAnimationId: JJ.animationId,
            curPoints: JJ.points,
            curBaseLine: JJ.baseLine,
            prevPoints: cJ.curPoints,
            prevBaseLine: cJ.curBaseLine
          } : JJ.points !== cJ.curPoints || JJ.baseLine !== cJ.curBaseLine ? {
            curPoints: JJ.points,
            curBaseLine: JJ.baseLine
          } : null
        }
      }], FJ && gJ(ZJ.prototype, FJ), AJ && gJ(ZJ, AJ), Object.defineProperty(ZJ, "prototype", {
        writable: !1
      }), ZJ;
      var ZJ, FJ, AJ
    }(UJ.PureComponent);
    FJ = NJ, dJ(NJ, "displayName", "Area"), dJ(NJ, "defaultProps", {
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
      isAnimationActive: !QJ.e.isSsr,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease"
    }), dJ(NJ, "getBaseValue", (function(JJ, cJ, ZJ, FJ) {
      var UJ = JJ.layout,
        eJ = JJ.baseValue,
        XJ = cJ.props.baseValue,
        AJ = null !== XJ && void 0 !== XJ ? XJ : eJ;
      if ((0, EJ.C)(AJ) && "number" === typeof AJ) return AJ;
      var qJ = "horizontal" === UJ ? FJ : ZJ,
        jJ = qJ.scale.domain();
      if ("number" === qJ.type) {
        var YJ = Math.max(jJ[0], jJ[1]),
          hJ = Math.min(jJ[0], jJ[1]);
        return "dataMin" === AJ ? hJ : "dataMax" === AJ || YJ < 0 ? YJ : Math.max(Math.min(jJ[0], jJ[1]), 0)
      }
      return "dataMin" === AJ ? jJ[0] : "dataMax" === AJ ? jJ[1] : jJ[0]
    })), dJ(NJ, "getComposedData", (function(JJ) {
      var cJ, ZJ = JJ.props,
        UJ = JJ.item,
        eJ = JJ.xAxis,
        XJ = JJ.yAxis,
        AJ = JJ.xAxisTicks,
        qJ = JJ.yAxisTicks,
        jJ = JJ.bandSize,
        YJ = JJ.dataKey,
        hJ = JJ.stackedData,
        DJ = JJ.dataStartIndex,
        sJ = JJ.displayedData,
        nJ = JJ.offset,
        GJ = ZJ.layout,
        fJ = hJ && hJ.length,
        xJ = FJ.getBaseValue(ZJ, UJ, eJ, XJ),
        rJ = "horizontal" === GJ,
        vJ = !1,
        mJ = sJ.map((function(JJ, cJ) {
          var ZJ;
          fJ ? ZJ = hJ[DJ + cJ] : (ZJ = (0, VJ.eb)(JJ, YJ), Array.isArray(ZJ) ? vJ = !0 : ZJ = [xJ, ZJ]);
          var FJ = null == ZJ[1] || fJ && null == (0, VJ.eb)(JJ, YJ);
          return rJ ? {
            x: (0, VJ.B)({
              axis: eJ,
              ticks: AJ,
              bandSize: jJ,
              entry: JJ,
              index: cJ
            }),
            y: FJ ? null : XJ.scale(ZJ[1]),
            value: ZJ,
            payload: JJ
          } : {
            x: FJ ? null : eJ.scale(ZJ[1]),
            y: (0, VJ.B)({
              axis: XJ,
              ticks: qJ,
              bandSize: jJ,
              entry: JJ,
              index: cJ
            }),
            value: ZJ,
            payload: JJ
          }
        }));
      return cJ = fJ || vJ ? mJ.map((function(JJ) {
        var cJ = Array.isArray(JJ.value) ? JJ.value[0] : null;
        return rJ ? {
          x: JJ.x,
          y: null != cJ && null != JJ.y ? XJ.scale(cJ) : null
        } : {
          x: null != cJ ? eJ.scale(cJ) : null,
          y: JJ.y
        }
      })) : rJ ? XJ.scale(xJ) : eJ.scale(xJ), WJ({
        points: mJ,
        baseLine: cJ,
        layout: GJ,
        isRange: vJ
      }, nJ)
    })), dJ(NJ, "renderDotItem", (function(JJ, cJ) {
      var ZJ;
      if (UJ.isValidElement(JJ)) ZJ = UJ.cloneElement(JJ, cJ);
      else if (qJ()(JJ)) ZJ = JJ(cJ);
      else {
        var FJ = (0, eJ.d)("recharts-area-dot", "boolean" !== typeof JJ ? JJ.className : ""),
          XJ = cJ.key,
          AJ = MJ(cJ, SJ);
        ZJ = UJ.createElement(rJ.c, bJ({}, AJ, {
          key: XJ,
          className: FJ
        }))
      }
      return ZJ
    }))
  },
  5637: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => iJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(4468),
      eJ = ZJ(5483),
      XJ = ZJ(5557),
      AJ = ZJ.n(XJ),
      qJ = ZJ(4786),
      jJ = ZJ.n(qJ),
      YJ = ZJ(5332),
      hJ = ZJ(5571),
      DJ = ZJ(5646),
      sJ = ZJ(5653),
      nJ = ZJ(4543),
      GJ = ZJ(4797),
      fJ = ZJ(5343),
      xJ = ZJ(5497),
      rJ = ZJ(4817),
      vJ = ZJ(5319),
      mJ = ZJ(5662),
      QJ = ["x", "y"];

    function EJ(JJ) {
      return EJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, EJ(JJ)
    }

    function VJ() {
      return VJ = Object.assign ? Object.assign.bind() : function(JJ) {
        for (var cJ = 1; cJ < arguments.length; cJ++) {
          var ZJ = arguments[cJ];
          for (var FJ in ZJ) Object.prototype.hasOwnProperty.call(ZJ, FJ) && (JJ[FJ] = ZJ[FJ])
        }
        return JJ
      }, VJ.apply(this, arguments)
    }

    function KJ(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function yJ(JJ) {
      for (var cJ = 1; cJ < arguments.length; cJ++) {
        var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
        cJ % 2 ? KJ(Object(ZJ), !0).forEach((function(cJ) {
          SJ(JJ, cJ, ZJ[cJ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : KJ(Object(ZJ)).forEach((function(cJ) {
          Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
        }))
      }
      return JJ
    }

    function SJ(JJ, cJ, ZJ) {
      return (cJ = function(JJ) {
        var cJ = function(JJ, cJ) {
          if ("object" != EJ(JJ) || !JJ) return JJ;
          var ZJ = JJ[Symbol.toPrimitive];
          if (void 0 !== ZJ) {
            var FJ = ZJ.call(JJ, cJ || "default");
            if ("object" != EJ(FJ)) return FJ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === cJ ? String : Number)(JJ)
        }(JJ, "string");
        return "symbol" == EJ(cJ) ? cJ : cJ + ""
      }(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }

    function IJ(JJ, cJ) {
      if (null == JJ) return {};
      var ZJ, FJ, UJ = function(JJ, cJ) {
        if (null == JJ) return {};
        var ZJ = {};
        for (var FJ in JJ)
          if (Object.prototype.hasOwnProperty.call(JJ, FJ)) {
            if (cJ.indexOf(FJ) >= 0) continue;
            ZJ[FJ] = JJ[FJ]
          } return ZJ
      }(JJ, cJ);
      if (Object.getOwnPropertySymbols) {
        var eJ = Object.getOwnPropertySymbols(JJ);
        for (FJ = 0; FJ < eJ.length; FJ++) ZJ = eJ[FJ], cJ.indexOf(ZJ) >= 0 || Object.prototype.propertyIsEnumerable.call(JJ, ZJ) && (UJ[ZJ] = JJ[ZJ])
      }
      return UJ
    }

    function MJ(JJ, cJ) {
      var ZJ = JJ.x,
        FJ = JJ.y,
        UJ = IJ(JJ, QJ),
        eJ = "".concat(ZJ),
        XJ = parseInt(eJ, 10),
        AJ = "".concat(FJ),
        qJ = parseInt(AJ, 10),
        jJ = "".concat(cJ.height || UJ.height),
        YJ = parseInt(jJ, 10),
        hJ = "".concat(cJ.width || UJ.width),
        DJ = parseInt(hJ, 10);
      return yJ(yJ(yJ(yJ(yJ({}, cJ), UJ), XJ ? {
        x: XJ
      } : {}), qJ ? {
        y: qJ
      } : {}), {}, {
        height: YJ,
        width: DJ,
        name: cJ.name,
        radius: cJ.radius
      })
    }

    function bJ(JJ) {
      return FJ.createElement(mJ.c, VJ({
        shapeType: "rectangle",
        propTransformer: MJ,
        activeClassName: "recharts-active-bar"
      }, JJ))
    }
    var wJ, WJ = ["value", "background"];

    function gJ(JJ) {
      return gJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, gJ(JJ)
    }

    function HJ(JJ, cJ) {
      if (null == JJ) return {};
      var ZJ, FJ, UJ = function(JJ, cJ) {
        if (null == JJ) return {};
        var ZJ = {};
        for (var FJ in JJ)
          if (Object.prototype.hasOwnProperty.call(JJ, FJ)) {
            if (cJ.indexOf(FJ) >= 0) continue;
            ZJ[FJ] = JJ[FJ]
          } return ZJ
      }(JJ, cJ);
      if (Object.getOwnPropertySymbols) {
        var eJ = Object.getOwnPropertySymbols(JJ);
        for (FJ = 0; FJ < eJ.length; FJ++) ZJ = eJ[FJ], cJ.indexOf(ZJ) >= 0 || Object.prototype.propertyIsEnumerable.call(JJ, ZJ) && (UJ[ZJ] = JJ[ZJ])
      }
      return UJ
    }

    function PJ() {
      return PJ = Object.assign ? Object.assign.bind() : function(JJ) {
        for (var cJ = 1; cJ < arguments.length; cJ++) {
          var ZJ = arguments[cJ];
          for (var FJ in ZJ) Object.prototype.hasOwnProperty.call(ZJ, FJ) && (JJ[FJ] = ZJ[FJ])
        }
        return JJ
      }, PJ.apply(this, arguments)
    }

    function kJ(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function pJ(JJ) {
      for (var cJ = 1; cJ < arguments.length; cJ++) {
        var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
        cJ % 2 ? kJ(Object(ZJ), !0).forEach((function(cJ) {
          CJ(JJ, cJ, ZJ[cJ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : kJ(Object(ZJ)).forEach((function(cJ) {
          Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
        }))
      }
      return JJ
    }

    function dJ(JJ, cJ) {
      for (var ZJ = 0; ZJ < cJ.length; ZJ++) {
        var FJ = cJ[ZJ];
        FJ.enumerable = FJ.enumerable || !1, FJ.configurable = !0, "value" in FJ && (FJ.writable = !0), Object.defineProperty(JJ, uJ(FJ.key), FJ)
      }
    }

    function zJ(JJ, cJ, ZJ) {
      return cJ = OJ(cJ),
        function(JJ, cJ) {
          if (cJ && ("object" === gJ(cJ) || "function" === typeof cJ)) return cJ;
          if (void 0 !== cJ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(JJ) {
            if (void 0 === JJ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return JJ
          }(JJ)
        }(JJ, NJ() ? Reflect.construct(cJ, ZJ || [], OJ(JJ).constructor) : cJ.apply(JJ, ZJ))
    }

    function NJ() {
      try {
        var JJ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (JJ) {}
      return (NJ = function() {
        return !!JJ
      })()
    }

    function OJ(JJ) {
      return OJ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(JJ) {
        return JJ.__proto__ || Object.getPrototypeOf(JJ)
      }, OJ(JJ)
    }

    function TJ(JJ, cJ) {
      return TJ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(JJ, cJ) {
        return JJ.__proto__ = cJ, JJ
      }, TJ(JJ, cJ)
    }

    function CJ(JJ, cJ, ZJ) {
      return (cJ = uJ(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }

    function uJ(JJ) {
      var cJ = function(JJ, cJ) {
        if ("object" != gJ(JJ) || !JJ) return JJ;
        var ZJ = JJ[Symbol.toPrimitive];
        if (void 0 !== ZJ) {
          var FJ = ZJ.call(JJ, cJ || "default");
          if ("object" != gJ(FJ)) return FJ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === cJ ? String : Number)(JJ)
      }(JJ, "string");
      return "symbol" == gJ(cJ) ? cJ : cJ + ""
    }
    var iJ = function(JJ) {
      function cJ() {
        var JJ;
        ! function(JJ, cJ) {
          if (!(JJ instanceof cJ)) throw new TypeError("Cannot call a class as a function")
        }(this, cJ);
        for (var ZJ = arguments.length, FJ = new Array(ZJ), UJ = 0; UJ < ZJ; UJ++) FJ[UJ] = arguments[UJ];
        return CJ(JJ = zJ(this, cJ, [].concat(FJ)), "state", {
          isAnimationFinished: !1
        }), CJ(JJ, "id", (0, nJ.L)("recharts-bar-")), CJ(JJ, "handleAnimationEnd", (function() {
          var cJ = JJ.props.onAnimationEnd;
          JJ.setState({
            isAnimationFinished: !0
          }), cJ && cJ()
        })), CJ(JJ, "handleAnimationStart", (function() {
          var cJ = JJ.props.onAnimationStart;
          JJ.setState({
            isAnimationFinished: !1
          }), cJ && cJ()
        })), JJ
      }
      return function(JJ, cJ) {
        if ("function" !== typeof cJ && null !== cJ) throw new TypeError("Super expression must either be null or a function");
        JJ.prototype = Object.create(cJ && cJ.prototype, {
          constructor: {
            value: JJ,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(JJ, "prototype", {
          writable: !1
        }), cJ && TJ(JJ, cJ)
      }(cJ, JJ), ZJ = cJ, XJ = [{
        key: "renderRectanglesStatically",
        value: function(JJ) {
          var cJ = this,
            ZJ = this.props,
            UJ = ZJ.shape,
            eJ = ZJ.dataKey,
            XJ = ZJ.activeIndex,
            AJ = ZJ.activeBar,
            qJ = (0, GJ.c)(this.props, !1);
          return JJ && JJ.map((function(JJ, ZJ) {
            var jJ = ZJ === XJ,
              hJ = jJ ? AJ : UJ,
              DJ = pJ(pJ(pJ({}, qJ), JJ), {}, {
                isActive: jJ,
                option: hJ,
                index: ZJ,
                dataKey: eJ,
                onAnimationStart: cJ.handleAnimationStart,
                onAnimationEnd: cJ.handleAnimationEnd
              });
            return FJ.createElement(YJ.e, PJ({
              className: "recharts-bar-rectangle"
            }, (0, rJ.n)(cJ.props, JJ, ZJ), {
              key: "rectangle-".concat(null === JJ || void 0 === JJ ? void 0 : JJ.x, "-").concat(null === JJ || void 0 === JJ ? void 0 : JJ.y, "-").concat(null === JJ || void 0 === JJ ? void 0 : JJ.value, "-").concat(ZJ)
            }), FJ.createElement(bJ, DJ))
          }))
        }
      }, {
        key: "renderRectanglesWithAnimation",
        value: function() {
          var JJ = this,
            cJ = this.props,
            ZJ = cJ.data,
            UJ = cJ.layout,
            XJ = cJ.isAnimationActive,
            AJ = cJ.animationBegin,
            qJ = cJ.animationDuration,
            jJ = cJ.animationEasing,
            hJ = cJ.animationId,
            DJ = this.state.prevData;
          return FJ.createElement(eJ.c, {
            Fs: AJ,
            duration: qJ,
            isActive: XJ,
            easing: jJ,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "bar-".concat(hJ),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(cJ) {
            var eJ = cJ.t,
              XJ = ZJ.map((function(JJ, cJ) {
                var ZJ = DJ && DJ[cJ];
                if (ZJ) {
                  var FJ = (0, nJ.r)(ZJ.x, JJ.x),
                    XJ = (0, nJ.r)(ZJ.y, JJ.y),
                    AJ = (0, nJ.r)(ZJ.width, JJ.width),
                    qJ = (0, nJ.r)(ZJ.height, JJ.height);
                  return pJ(pJ({}, JJ), {}, {
                    x: FJ(eJ),
                    y: XJ(eJ),
                    width: AJ(eJ),
                    height: qJ(eJ)
                  })
                }
                if ("horizontal" === UJ) {
                  var jJ = (0, nJ.r)(0, JJ.height)(eJ);
                  return pJ(pJ({}, JJ), {}, {
                    y: JJ.y + JJ.height - jJ,
                    height: jJ
                  })
                }
                var YJ = (0, nJ.r)(0, JJ.width)(eJ);
                return pJ(pJ({}, JJ), {}, {
                  width: YJ
                })
              }));
            return FJ.createElement(YJ.e, null, JJ.renderRectanglesStatically(XJ))
          }))
        }
      }, {
        key: "renderRectangles",
        value: function() {
          var JJ = this.props,
            cJ = JJ.data,
            ZJ = JJ.isAnimationActive,
            FJ = this.state.prevData;
          return !(ZJ && cJ && cJ.length) || FJ && AJ()(FJ, cJ) ? this.renderRectanglesStatically(cJ) : this.renderRectanglesWithAnimation()
        }
      }, {
        key: "renderBackground",
        value: function() {
          var JJ = this,
            cJ = this.props,
            ZJ = cJ.data,
            UJ = cJ.dataKey,
            eJ = cJ.activeIndex,
            XJ = (0, GJ.c)(this.props.background, !1);
          return ZJ.map((function(cJ, ZJ) {
            cJ.value;
            var AJ = cJ.background,
              qJ = HJ(cJ, WJ);
            if (!AJ) return null;
            var jJ = pJ(pJ(pJ(pJ(pJ({}, qJ), {}, {
              fill: "#eee"
            }, AJ), XJ), (0, rJ.n)(JJ.props, cJ, ZJ)), {}, {
              onAnimationStart: JJ.handleAnimationStart,
              onAnimationEnd: JJ.handleAnimationEnd,
              dataKey: UJ,
              index: ZJ,
              className: "recharts-bar-background-rectangle"
            });
            return FJ.createElement(bJ, PJ({
              key: "background-bar-".concat(ZJ),
              option: JJ.props.background,
              isActive: ZJ === eJ
            }, jJ))
          }))
        }
      }, {
        key: "renderErrorBar",
        value: function(JJ, cJ) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var ZJ = this.props,
            UJ = ZJ.data,
            eJ = ZJ.xAxis,
            XJ = ZJ.yAxis,
            AJ = ZJ.layout,
            qJ = ZJ.children,
            jJ = (0, GJ.f)(qJ, hJ.c);
          if (!jJ) return null;
          var DJ = "vertical" === AJ ? UJ[0].height / 2 : UJ[0].width / 2,
            sJ = function(JJ, cJ) {
              var ZJ = Array.isArray(JJ.value) ? JJ.value[1] : JJ.value;
              return {
                x: JJ.x,
                y: JJ.y,
                value: ZJ,
                errorVal: (0, xJ.eb)(JJ, cJ)
              }
            },
            nJ = {
              clipPath: JJ ? "url(#clipPath-".concat(cJ, ")") : null
            };
          return FJ.createElement(YJ.e, nJ, jJ.map((function(JJ) {
            return FJ.cloneElement(JJ, {
              key: "error-bar-".concat(cJ, "-").concat(JJ.props.dataKey),
              data: UJ,
              xAxis: eJ,
              yAxis: XJ,
              layout: AJ,
              offset: DJ,
              dataPointFormatter: sJ
            })
          })))
        }
      }, {
        key: "render",
        value: function() {
          var JJ = this.props,
            cJ = JJ.hide,
            ZJ = JJ.data,
            eJ = JJ.className,
            XJ = JJ.xAxis,
            AJ = JJ.yAxis,
            qJ = JJ.left,
            hJ = JJ.top,
            DJ = JJ.width,
            nJ = JJ.height,
            GJ = JJ.isAnimationActive,
            fJ = JJ.background,
            xJ = JJ.id;
          if (cJ || !ZJ || !ZJ.length) return null;
          var rJ = this.state.isAnimationFinished,
            vJ = (0, UJ.d)("recharts-bar", eJ),
            mJ = XJ && XJ.allowDataOverflow,
            QJ = AJ && AJ.allowDataOverflow,
            EJ = mJ || QJ,
            VJ = jJ()(xJ) ? this.id : xJ;
          return FJ.createElement(YJ.e, {
            className: vJ
          }, mJ || QJ ? FJ.createElement("defs", null, FJ.createElement("clipPath", {
            id: "clipPath-".concat(VJ)
          }, FJ.createElement("rect", {
            x: mJ ? qJ : qJ - DJ / 2,
            y: QJ ? hJ : hJ - nJ / 2,
            width: mJ ? DJ : 2 * DJ,
            height: QJ ? nJ : 2 * nJ
          }))) : null, FJ.createElement(YJ.e, {
            className: "recharts-bar-rectangles",
            clipPath: EJ ? "url(#clipPath-".concat(VJ, ")") : null
          }, fJ ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(EJ, VJ), (!GJ || rJ) && sJ.d.renderCallByParent(this.props, ZJ))
        }
      }], qJ = [{
        key: "getDerivedStateFromProps",
        value: function(JJ, cJ) {
          return JJ.animationId !== cJ.prevAnimationId ? {
            prevAnimationId: JJ.animationId,
            curData: JJ.data,
            prevData: cJ.curData
          } : JJ.data !== cJ.curData ? {
            curData: JJ.data
          } : null
        }
      }], XJ && dJ(ZJ.prototype, XJ), qJ && dJ(ZJ, qJ), Object.defineProperty(ZJ, "prototype", {
        writable: !1
      }), ZJ;
      var ZJ, XJ, qJ
    }(FJ.PureComponent);
    wJ = iJ, CJ(iJ, "displayName", "Bar"), CJ(iJ, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      legendType: "rect",
      minPointSize: 0,
      hide: !1,
      data: [],
      layout: "vertical",
      activeBar: !1,
      isAnimationActive: !fJ.e.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "ease"
    }), CJ(iJ, "getComposedData", (function(JJ) {
      var cJ = JJ.props,
        ZJ = JJ.item,
        FJ = JJ.barPosition,
        UJ = JJ.bandSize,
        eJ = JJ.xAxis,
        XJ = JJ.yAxis,
        AJ = JJ.xAxisTicks,
        qJ = JJ.yAxisTicks,
        jJ = JJ.stackedData,
        YJ = JJ.dataStartIndex,
        hJ = JJ.displayedData,
        sJ = JJ.offset,
        fJ = (0, xJ.m)(FJ, ZJ);
      if (!fJ) return null;
      var rJ = cJ.layout,
        mJ = ZJ.type.defaultProps,
        QJ = void 0 !== mJ ? pJ(pJ({}, mJ), ZJ.props) : ZJ.props,
        EJ = QJ.dataKey,
        VJ = QJ.children,
        KJ = QJ.minPointSize,
        yJ = "horizontal" === rJ ? XJ : eJ,
        SJ = jJ ? yJ.scale.domain() : null,
        IJ = (0, xJ.w)({
          numericAxis: yJ
        }),
        MJ = (0, GJ.f)(VJ, DJ.b),
        bJ = hJ.map((function(JJ, cJ) {
          var FJ, hJ, DJ, sJ, GJ, mJ;
          jJ ? FJ = (0, xJ.sb)(jJ[YJ + cJ], SJ) : (FJ = (0, xJ.eb)(JJ, EJ), Array.isArray(FJ) || (FJ = [IJ, FJ]));
          var QJ = function(JJ) {
            var cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return function(ZJ, FJ) {
              if ("number" === typeof JJ) return JJ;
              var UJ = (0, nJ.C)(ZJ) || (0, nJ.u)(ZJ);
              return UJ ? JJ(ZJ, FJ) : (UJ || (0, vJ.b)(!1), cJ)
            }
          }(KJ, wJ.defaultProps.minPointSize)(FJ[1], cJ);
          if ("horizontal" === rJ) {
            var VJ, yJ = [XJ.scale(FJ[0]), XJ.scale(FJ[1])],
              bJ = yJ[0],
              WJ = yJ[1];
            hJ = (0, xJ.x)({
              axis: eJ,
              ticks: AJ,
              bandSize: UJ,
              offset: fJ.offset,
              entry: JJ,
              index: cJ
            }), DJ = null !== (VJ = null !== WJ && void 0 !== WJ ? WJ : bJ) && void 0 !== VJ ? VJ : void 0, sJ = fJ.size;
            var gJ = bJ - WJ;
            if (GJ = Number.isNaN(gJ) ? 0 : gJ, mJ = {
                x: hJ,
                y: XJ.y,
                width: sJ,
                height: XJ.height
              }, Math.abs(QJ) > 0 && Math.abs(GJ) < Math.abs(QJ)) {
              var HJ = (0, nJ.I)(GJ || QJ) * (Math.abs(QJ) - Math.abs(GJ));
              DJ -= HJ, GJ += HJ
            }
          } else {
            var PJ = [eJ.scale(FJ[0]), eJ.scale(FJ[1])],
              kJ = PJ[0],
              dJ = PJ[1];
            if (hJ = kJ, DJ = (0, xJ.x)({
                axis: XJ,
                ticks: qJ,
                bandSize: UJ,
                offset: fJ.offset,
                entry: JJ,
                index: cJ
              }), sJ = dJ - kJ, GJ = fJ.size, mJ = {
                x: eJ.x,
                y: DJ,
                width: eJ.width,
                height: GJ
              }, Math.abs(QJ) > 0 && Math.abs(sJ) < Math.abs(QJ)) sJ += (0, nJ.I)(sJ || QJ) * (Math.abs(QJ) - Math.abs(sJ))
          }
          return pJ(pJ(pJ({}, JJ), {}, {
            x: hJ,
            y: DJ,
            width: sJ,
            height: GJ,
            value: jJ ? FJ : FJ[1],
            payload: JJ,
            background: mJ
          }, MJ && MJ[cJ] && MJ[cJ].props), {}, {
            tooltipPayload: [(0, xJ.cb)(ZJ, JJ)],
            tooltipPosition: {
              x: hJ + sJ / 2,
              y: DJ + GJ / 2
            }
          })
        }));
      return pJ({
        data: bJ,
        layout: rJ
      }, sJ)
    }))
  },
  5737: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => gJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(4641),
      eJ = ZJ.n(UJ),
      XJ = ZJ(4561),
      AJ = ZJ.n(XJ),
      qJ = ZJ(4468),
      jJ = ZJ(4812),
      YJ = ZJ(5332),
      hJ = ZJ(5488),
      DJ = ZJ(5585),
      sJ = ZJ(4543),
      nJ = ZJ(4817),
      GJ = ZJ(4797),
      fJ = ZJ(5744),
      xJ = ["viewBox"],
      rJ = ["viewBox"],
      vJ = ["ticks"];

    function mJ(JJ) {
      return mJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, mJ(JJ)
    }

    function QJ() {
      return QJ = Object.assign ? Object.assign.bind() : function(JJ) {
        for (var cJ = 1; cJ < arguments.length; cJ++) {
          var ZJ = arguments[cJ];
          for (var FJ in ZJ) Object.prototype.hasOwnProperty.call(ZJ, FJ) && (JJ[FJ] = ZJ[FJ])
        }
        return JJ
      }, QJ.apply(this, arguments)
    }

    function EJ(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function VJ(JJ) {
      for (var cJ = 1; cJ < arguments.length; cJ++) {
        var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
        cJ % 2 ? EJ(Object(ZJ), !0).forEach((function(cJ) {
          wJ(JJ, cJ, ZJ[cJ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : EJ(Object(ZJ)).forEach((function(cJ) {
          Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
        }))
      }
      return JJ
    }

    function KJ(JJ, cJ) {
      if (null == JJ) return {};
      var ZJ, FJ, UJ = function(JJ, cJ) {
        if (null == JJ) return {};
        var ZJ = {};
        for (var FJ in JJ)
          if (Object.prototype.hasOwnProperty.call(JJ, FJ)) {
            if (cJ.indexOf(FJ) >= 0) continue;
            ZJ[FJ] = JJ[FJ]
          } return ZJ
      }(JJ, cJ);
      if (Object.getOwnPropertySymbols) {
        var eJ = Object.getOwnPropertySymbols(JJ);
        for (FJ = 0; FJ < eJ.length; FJ++) ZJ = eJ[FJ], cJ.indexOf(ZJ) >= 0 || Object.prototype.propertyIsEnumerable.call(JJ, ZJ) && (UJ[ZJ] = JJ[ZJ])
      }
      return UJ
    }

    function yJ(JJ, cJ) {
      for (var ZJ = 0; ZJ < cJ.length; ZJ++) {
        var FJ = cJ[ZJ];
        FJ.enumerable = FJ.enumerable || !1, FJ.configurable = !0, "value" in FJ && (FJ.writable = !0), Object.defineProperty(JJ, WJ(FJ.key), FJ)
      }
    }

    function SJ(JJ, cJ, ZJ) {
      return cJ = MJ(cJ),
        function(JJ, cJ) {
          if (cJ && ("object" === mJ(cJ) || "function" === typeof cJ)) return cJ;
          if (void 0 !== cJ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(JJ) {
            if (void 0 === JJ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return JJ
          }(JJ)
        }(JJ, IJ() ? Reflect.construct(cJ, ZJ || [], MJ(JJ).constructor) : cJ.apply(JJ, ZJ))
    }

    function IJ() {
      try {
        var JJ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (JJ) {}
      return (IJ = function() {
        return !!JJ
      })()
    }

    function MJ(JJ) {
      return MJ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(JJ) {
        return JJ.__proto__ || Object.getPrototypeOf(JJ)
      }, MJ(JJ)
    }

    function bJ(JJ, cJ) {
      return bJ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(JJ, cJ) {
        return JJ.__proto__ = cJ, JJ
      }, bJ(JJ, cJ)
    }

    function wJ(JJ, cJ, ZJ) {
      return (cJ = WJ(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }

    function WJ(JJ) {
      var cJ = function(JJ, cJ) {
        if ("object" != mJ(JJ) || !JJ) return JJ;
        var ZJ = JJ[Symbol.toPrimitive];
        if (void 0 !== ZJ) {
          var FJ = ZJ.call(JJ, cJ || "default");
          if ("object" != mJ(FJ)) return FJ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === cJ ? String : Number)(JJ)
      }(JJ, "string");
      return "symbol" == mJ(cJ) ? cJ : cJ + ""
    }
    var gJ = function(JJ) {
      function cJ(JJ) {
        var ZJ;
        return function(JJ, cJ) {
          if (!(JJ instanceof cJ)) throw new TypeError("Cannot call a class as a function")
        }(this, cJ), (ZJ = SJ(this, cJ, [JJ])).state = {
          fontSize: "",
          letterSpacing: ""
        }, ZJ
      }
      return function(JJ, cJ) {
        if ("function" !== typeof cJ && null !== cJ) throw new TypeError("Super expression must either be null or a function");
        JJ.prototype = Object.create(cJ && cJ.prototype, {
          constructor: {
            value: JJ,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(JJ, "prototype", {
          writable: !1
        }), cJ && bJ(JJ, cJ)
      }(cJ, JJ), ZJ = cJ, XJ = [{
        key: "renderTickItem",
        value: function(JJ, cJ, ZJ) {
          var UJ = (0, qJ.d)(cJ.className, "recharts-cartesian-axis-tick-value");
          return FJ.isValidElement(JJ) ? FJ.cloneElement(JJ, VJ(VJ({}, cJ), {}, {
            className: UJ
          })) : eJ()(JJ) ? JJ(VJ(VJ({}, cJ), {}, {
            className: UJ
          })) : FJ.createElement(hJ.e, QJ({}, cJ, {
            className: "recharts-cartesian-axis-tick-value"
          }), ZJ)
        }
      }], (UJ = [{
        key: "shouldComponentUpdate",
        value: function(JJ, cJ) {
          var ZJ = JJ.viewBox,
            FJ = KJ(JJ, xJ),
            UJ = this.props,
            eJ = UJ.viewBox,
            XJ = KJ(UJ, rJ);
          return !(0, jJ.e)(ZJ, eJ) || !(0, jJ.e)(FJ, XJ) || !(0, jJ.e)(cJ, this.state)
        }
      }, {
        key: "componentDidMount",
        value: function() {
          var JJ = this.layerReference;
          if (JJ) {
            var cJ = JJ.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
            cJ && this.setState({
              fontSize: window.getComputedStyle(cJ).fontSize,
              letterSpacing: window.getComputedStyle(cJ).letterSpacing
            })
          }
        }
      }, {
        key: "getTickLineCoord",
        value: function(JJ) {
          var cJ, ZJ, FJ, UJ, eJ, XJ, AJ = this.props,
            qJ = AJ.x,
            jJ = AJ.y,
            YJ = AJ.width,
            hJ = AJ.height,
            DJ = AJ.orientation,
            nJ = AJ.tickSize,
            GJ = AJ.mirror,
            fJ = AJ.tickMargin,
            xJ = GJ ? -1 : 1,
            rJ = JJ.tickSize || nJ,
            vJ = (0, sJ.C)(JJ.tickCoord) ? JJ.tickCoord : JJ.coordinate;
          switch (DJ) {
            case "top":
              cJ = ZJ = JJ.coordinate, XJ = (FJ = (UJ = jJ + +!GJ * hJ) - xJ * rJ) - xJ * fJ, eJ = vJ;
              break;
            case "left":
              FJ = UJ = JJ.coordinate, eJ = (cJ = (ZJ = qJ + +!GJ * YJ) - xJ * rJ) - xJ * fJ, XJ = vJ;
              break;
            case "right":
              FJ = UJ = JJ.coordinate, eJ = (cJ = (ZJ = qJ + +GJ * YJ) + xJ * rJ) + xJ * fJ, XJ = vJ;
              break;
            default:
              cJ = ZJ = JJ.coordinate, XJ = (FJ = (UJ = jJ + +GJ * hJ) + xJ * rJ) + xJ * fJ, eJ = vJ
          }
          return {
            line: {
              x1: cJ,
              y1: FJ,
              x2: ZJ,
              y2: UJ
            },
            Hh: {
              x: eJ,
              y: XJ
            }
          }
        }
      }, {
        key: "getTickTextAnchor",
        value: function() {
          var JJ, cJ = this.props,
            ZJ = cJ.orientation,
            FJ = cJ.mirror;
          switch (ZJ) {
            case "left":
              JJ = FJ ? "start" : "end";
              break;
            case "right":
              JJ = FJ ? "end" : "start";
              break;
            default:
              JJ = "middle"
          }
          return JJ
        }
      }, {
        key: "getTickVerticalAnchor",
        value: function() {
          var JJ = this.props,
            cJ = JJ.orientation,
            ZJ = JJ.mirror,
            FJ = "end";
          switch (cJ) {
            case "left":
            case "right":
              FJ = "middle";
              break;
            case "top":
              FJ = ZJ ? "start" : "end";
              break;
            default:
              FJ = ZJ ? "end" : "start"
          }
          return FJ
        }
      }, {
        key: "renderAxisLine",
        value: function() {
          var JJ = this.props,
            cJ = JJ.x,
            ZJ = JJ.y,
            UJ = JJ.width,
            eJ = JJ.height,
            XJ = JJ.orientation,
            jJ = JJ.mirror,
            YJ = JJ.axisLine,
            hJ = VJ(VJ(VJ({}, (0, GJ.c)(this.props, !1)), (0, GJ.c)(YJ, !1)), {}, {
              fill: "none"
            });
          if ("top" === XJ || "bottom" === XJ) {
            var DJ = +("top" === XJ && !jJ || "bottom" === XJ && jJ);
            hJ = VJ(VJ({}, hJ), {}, {
              x1: cJ,
              y1: ZJ + DJ * eJ,
              x2: cJ + UJ,
              y2: ZJ + DJ * eJ
            })
          } else {
            var sJ = +("left" === XJ && !jJ || "right" === XJ && jJ);
            hJ = VJ(VJ({}, hJ), {}, {
              x1: cJ + sJ * UJ,
              y1: ZJ,
              x2: cJ + sJ * UJ,
              y2: ZJ + eJ
            })
          }
          return FJ.createElement("line", QJ({}, hJ, {
            className: (0, qJ.d)("recharts-cartesian-axis-line", AJ()(YJ, "className"))
          }))
        }
      }, {
        key: "renderTicks",
        value: function(JJ, ZJ, UJ) {
          var XJ = this,
            jJ = this.props,
            hJ = jJ.tickLine,
            DJ = jJ.stroke,
            sJ = jJ.Hh,
            xJ = jJ.tickFormatter,
            rJ = jJ.unit,
            vJ = (0, fJ.e)(VJ(VJ({}, this.props), {}, {
              ticks: JJ
            }), ZJ, UJ),
            mJ = this.getTickTextAnchor(),
            EJ = this.getTickVerticalAnchor(),
            KJ = (0, GJ.c)(this.props, !1),
            yJ = (0, GJ.c)(sJ, !1),
            SJ = VJ(VJ({}, KJ), {}, {
              fill: "none"
            }, (0, GJ.c)(hJ, !1)),
            IJ = vJ.map((function(JJ, ZJ) {
              var UJ = XJ.getTickLineCoord(JJ),
                jJ = UJ.line,
                GJ = UJ.Hh,
                fJ = VJ(VJ(VJ(VJ({
                  textAnchor: mJ,
                  verticalAnchor: EJ
                }, KJ), {}, {
                  stroke: "none",
                  fill: DJ
                }, yJ), GJ), {}, {
                  index: ZJ,
                  payload: JJ,
                  visibleTicksCount: vJ.length,
                  tickFormatter: xJ
                });
              return FJ.createElement(YJ.e, QJ({
                className: "recharts-cartesian-axis-tick",
                key: "tick-".concat(JJ.value, "-").concat(JJ.coordinate, "-").concat(JJ.tickCoord)
              }, (0, nJ.n)(XJ.props, JJ, ZJ)), hJ && FJ.createElement("line", QJ({}, SJ, jJ, {
                className: (0, qJ.d)("recharts-cartesian-axis-tick-line", AJ()(hJ, "className"))
              })), sJ && cJ.renderTickItem(sJ, fJ, "".concat(eJ()(xJ) ? xJ(JJ.value, ZJ) : JJ.value).concat(rJ || "")))
            }));
          return FJ.createElement("g", {
            className: "recharts-cartesian-axis-ticks"
          }, IJ)
        }
      }, {
        key: "render",
        value: function() {
          var JJ = this,
            cJ = this.props,
            ZJ = cJ.axisLine,
            UJ = cJ.width,
            XJ = cJ.height,
            AJ = cJ.ticksGenerator,
            jJ = cJ.className;
          if (cJ.hide) return null;
          var hJ = this.props,
            sJ = hJ.ticks,
            nJ = KJ(hJ, vJ),
            GJ = sJ;
          return eJ()(AJ) && (GJ = sJ && sJ.length > 0 ? AJ(this.props) : AJ(nJ)), UJ <= 0 || XJ <= 0 || !GJ || !GJ.length ? null : FJ.createElement(YJ.e, {
            className: (0, qJ.d)("recharts-cartesian-axis", jJ),
            ref: function(cJ) {
              JJ.layerReference = cJ
            }
          }, ZJ && this.renderAxisLine(), this.renderTicks(GJ, this.state.fontSize, this.state.letterSpacing), DJ.d.renderCallByParent(this.props))
        }
      }]) && yJ(ZJ.prototype, UJ), XJ && yJ(ZJ, XJ), Object.defineProperty(ZJ, "prototype", {
        writable: !1
      }), ZJ;
      var ZJ, UJ, XJ
    }(FJ.Component);
    wJ(gJ, "displayName", "CartesianAxis"), wJ(gJ, "defaultProps", {
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
      Hh: !0,
      mirror: !1,
      minTickGap: 5,
      tickSize: 6,
      tickMargin: 2,
      interval: "preserveEnd"
    })
  },
  5750: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => wJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(4641),
      eJ = ZJ.n(UJ),
      XJ = ZJ(4794),
      AJ = ZJ(4543),
      qJ = ZJ(4797),
      jJ = ZJ(5497),
      YJ = ZJ(5744),
      hJ = ZJ(5737),
      DJ = ZJ(5698),
      sJ = ["x1", "y1", "x2", "y2", "key"],
      nJ = ["offset"];

    function GJ(JJ) {
      return GJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, GJ(JJ)
    }

    function fJ(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function xJ(JJ) {
      for (var cJ = 1; cJ < arguments.length; cJ++) {
        var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
        cJ % 2 ? fJ(Object(ZJ), !0).forEach((function(cJ) {
          rJ(JJ, cJ, ZJ[cJ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : fJ(Object(ZJ)).forEach((function(cJ) {
          Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
        }))
      }
      return JJ
    }

    function rJ(JJ, cJ, ZJ) {
      return (cJ = function(JJ) {
        var cJ = function(JJ, cJ) {
          if ("object" != GJ(JJ) || !JJ) return JJ;
          var ZJ = JJ[Symbol.toPrimitive];
          if (void 0 !== ZJ) {
            var FJ = ZJ.call(JJ, cJ || "default");
            if ("object" != GJ(FJ)) return FJ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === cJ ? String : Number)(JJ)
        }(JJ, "string");
        return "symbol" == GJ(cJ) ? cJ : cJ + ""
      }(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }

    function vJ() {
      return vJ = Object.assign ? Object.assign.bind() : function(JJ) {
        for (var cJ = 1; cJ < arguments.length; cJ++) {
          var ZJ = arguments[cJ];
          for (var FJ in ZJ) Object.prototype.hasOwnProperty.call(ZJ, FJ) && (JJ[FJ] = ZJ[FJ])
        }
        return JJ
      }, vJ.apply(this, arguments)
    }

    function mJ(JJ, cJ) {
      if (null == JJ) return {};
      var ZJ, FJ, UJ = function(JJ, cJ) {
        if (null == JJ) return {};
        var ZJ = {};
        for (var FJ in JJ)
          if (Object.prototype.hasOwnProperty.call(JJ, FJ)) {
            if (cJ.indexOf(FJ) >= 0) continue;
            ZJ[FJ] = JJ[FJ]
          } return ZJ
      }(JJ, cJ);
      if (Object.getOwnPropertySymbols) {
        var eJ = Object.getOwnPropertySymbols(JJ);
        for (FJ = 0; FJ < eJ.length; FJ++) ZJ = eJ[FJ], cJ.indexOf(ZJ) >= 0 || Object.prototype.propertyIsEnumerable.call(JJ, ZJ) && (UJ[ZJ] = JJ[ZJ])
      }
      return UJ
    }
    var QJ = function(JJ) {
      var cJ = JJ.fill;
      if (!cJ || "none" === cJ) return null;
      var ZJ = JJ.fillOpacity,
        UJ = JJ.x,
        eJ = JJ.y,
        XJ = JJ.width,
        AJ = JJ.height,
        qJ = JJ.ry;
      return FJ.createElement("rect", {
        x: UJ,
        y: eJ,
        ry: qJ,
        width: XJ,
        height: AJ,
        stroke: "none",
        fill: cJ,
        fillOpacity: ZJ,
        className: "recharts-cartesian-grid-bg"
      })
    };

    function EJ(JJ, cJ) {
      var ZJ;
      if (FJ.isValidElement(JJ)) ZJ = FJ.cloneElement(JJ, cJ);
      else if (eJ()(JJ)) ZJ = JJ(cJ);
      else {
        var UJ = cJ.x1,
          XJ = cJ.y1,
          AJ = cJ.x2,
          jJ = cJ.y2,
          YJ = cJ.key,
          hJ = mJ(cJ, sJ),
          DJ = (0, qJ.c)(hJ, !1),
          GJ = (DJ.offset, mJ(DJ, nJ));
        ZJ = FJ.createElement("line", vJ({}, GJ, {
          x1: UJ,
          y1: XJ,
          x2: AJ,
          y2: jJ,
          fill: "none",
          key: YJ
        }))
      }
      return ZJ
    }

    function VJ(JJ) {
      var cJ = JJ.x,
        ZJ = JJ.width,
        UJ = JJ.horizontal,
        eJ = void 0 === UJ || UJ,
        XJ = JJ.horizontalPoints;
      if (!eJ || !XJ || !XJ.length) return null;
      var AJ = XJ.map((function(FJ, UJ) {
        var XJ = xJ(xJ({}, JJ), {}, {
          x1: cJ,
          y1: FJ,
          x2: cJ + ZJ,
          y2: FJ,
          key: "line-".concat(UJ),
          index: UJ
        });
        return EJ(eJ, XJ)
      }));
      return FJ.createElement("g", {
        className: "recharts-cartesian-grid-horizontal"
      }, AJ)
    }

    function KJ(JJ) {
      var cJ = JJ.y,
        ZJ = JJ.height,
        UJ = JJ.vertical,
        eJ = void 0 === UJ || UJ,
        XJ = JJ.verticalPoints;
      if (!eJ || !XJ || !XJ.length) return null;
      var AJ = XJ.map((function(FJ, UJ) {
        var XJ = xJ(xJ({}, JJ), {}, {
          x1: FJ,
          y1: cJ,
          x2: FJ,
          y2: cJ + ZJ,
          key: "line-".concat(UJ),
          index: UJ
        });
        return EJ(eJ, XJ)
      }));
      return FJ.createElement("g", {
        className: "recharts-cartesian-grid-vertical"
      }, AJ)
    }

    function yJ(JJ) {
      var cJ = JJ.horizontalFill,
        ZJ = JJ.fillOpacity,
        UJ = JJ.x,
        eJ = JJ.y,
        XJ = JJ.width,
        AJ = JJ.height,
        qJ = JJ.horizontalPoints,
        jJ = JJ.horizontal;
      if (!(void 0 === jJ || jJ) || !cJ || !cJ.length) return null;
      var YJ = qJ.map((function(JJ) {
        return Math.round(JJ + eJ - eJ)
      })).sort((function(JJ, cJ) {
        return JJ - cJ
      }));
      eJ !== YJ[0] && YJ.unshift(0);
      var hJ = YJ.map((function(JJ, qJ) {
        var jJ = !YJ[qJ + 1] ? eJ + AJ - JJ : YJ[qJ + 1] - JJ;
        if (jJ <= 0) return null;
        var hJ = qJ % cJ.length;
        return FJ.createElement("rect", {
          key: "react-".concat(qJ),
          y: JJ,
          x: UJ,
          height: jJ,
          width: XJ,
          stroke: "none",
          fill: cJ[hJ],
          fillOpacity: ZJ,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return FJ.createElement("g", {
        className: "recharts-cartesian-gridstripes-horizontal"
      }, hJ)
    }

    function SJ(JJ) {
      var cJ = JJ.vertical,
        ZJ = void 0 === cJ || cJ,
        UJ = JJ.verticalFill,
        eJ = JJ.fillOpacity,
        XJ = JJ.x,
        AJ = JJ.y,
        qJ = JJ.width,
        jJ = JJ.height,
        YJ = JJ.verticalPoints;
      if (!ZJ || !UJ || !UJ.length) return null;
      var hJ = YJ.map((function(JJ) {
        return Math.round(JJ + XJ - XJ)
      })).sort((function(JJ, cJ) {
        return JJ - cJ
      }));
      XJ !== hJ[0] && hJ.unshift(0);
      var DJ = hJ.map((function(JJ, cJ) {
        var ZJ = !hJ[cJ + 1] ? XJ + qJ - JJ : hJ[cJ + 1] - JJ;
        if (ZJ <= 0) return null;
        var YJ = cJ % UJ.length;
        return FJ.createElement("rect", {
          key: "react-".concat(cJ),
          x: JJ,
          y: AJ,
          width: ZJ,
          height: jJ,
          stroke: "none",
          fill: UJ[YJ],
          fillOpacity: eJ,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return FJ.createElement("g", {
        className: "recharts-cartesian-gridstripes-vertical"
      }, DJ)
    }
    var IJ = function(JJ, cJ) {
        var ZJ = JJ.xAxis,
          FJ = JJ.width,
          UJ = JJ.height,
          eJ = JJ.offset;
        return (0, jJ.F)((0, YJ.e)(xJ(xJ(xJ({}, hJ.c.defaultProps), ZJ), {}, {
          ticks: (0, jJ.X)(ZJ, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: FJ,
            height: UJ
          }
        })), eJ.left, eJ.left + eJ.width, cJ)
      },
      MJ = function(JJ, cJ) {
        var ZJ = JJ.yAxis,
          FJ = JJ.width,
          UJ = JJ.height,
          eJ = JJ.offset;
        return (0, jJ.F)((0, YJ.e)(xJ(xJ(xJ({}, hJ.c.defaultProps), ZJ), {}, {
          ticks: (0, jJ.X)(ZJ, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: FJ,
            height: UJ
          }
        })), eJ.top, eJ.top + eJ.height, cJ)
      },
      bJ = {
        horizontal: !0,
        vertical: !0,
        horizontalPoints: [],
        verticalPoints: [],
        stroke: "#ccc",
        fill: "none",
        verticalFill: [],
        horizontalFill: []
      };

    function wJ(JJ) {
      var cJ, ZJ, UJ, qJ, jJ, YJ, hJ = (0, DJ.h)(),
        sJ = (0, DJ.f)(),
        nJ = (0, DJ.m)(),
        fJ = xJ(xJ({}, JJ), {}, {
          stroke: null !== (cJ = JJ.stroke) && void 0 !== cJ ? cJ : bJ.stroke,
          fill: null !== (ZJ = JJ.fill) && void 0 !== ZJ ? ZJ : bJ.fill,
          horizontal: null !== (UJ = JJ.horizontal) && void 0 !== UJ ? UJ : bJ.horizontal,
          horizontalFill: null !== (qJ = JJ.horizontalFill) && void 0 !== qJ ? qJ : bJ.horizontalFill,
          vertical: null !== (jJ = JJ.vertical) && void 0 !== jJ ? jJ : bJ.vertical,
          verticalFill: null !== (YJ = JJ.verticalFill) && void 0 !== YJ ? YJ : bJ.verticalFill,
          x: (0, AJ.C)(JJ.x) ? JJ.x : nJ.left,
          y: (0, AJ.C)(JJ.y) ? JJ.y : nJ.top,
          width: (0, AJ.C)(JJ.width) ? JJ.width : nJ.width,
          height: (0, AJ.C)(JJ.height) ? JJ.height : nJ.height
        }),
        rJ = fJ.x,
        mJ = fJ.y,
        EJ = fJ.width,
        wJ = fJ.height,
        WJ = fJ.syncWithTicks,
        gJ = fJ.horizontalValues,
        HJ = fJ.verticalValues,
        PJ = (0, DJ.d)(),
        kJ = (0, DJ.x)();
      if (!(0, AJ.C)(EJ) || EJ <= 0 || !(0, AJ.C)(wJ) || wJ <= 0 || !(0, AJ.C)(rJ) || rJ !== +rJ || !(0, AJ.C)(mJ) || mJ !== +mJ) return null;
      var pJ = fJ.verticalCoordinatesGenerator || IJ,
        dJ = fJ.horizontalCoordinatesGenerator || MJ,
        zJ = fJ.horizontalPoints,
        NJ = fJ.verticalPoints;
      if ((!zJ || !zJ.length) && eJ()(dJ)) {
        var OJ = gJ && gJ.length,
          TJ = dJ({
            yAxis: kJ ? xJ(xJ({}, kJ), {}, {
              ticks: OJ ? gJ : kJ.ticks
            }) : void 0,
            width: hJ,
            height: sJ,
            offset: nJ
          }, !!OJ || WJ);
        (0, XJ.e)(Array.isArray(TJ), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(GJ(TJ), "]")), Array.isArray(TJ) && (zJ = TJ)
      }
      if ((!NJ || !NJ.length) && eJ()(pJ)) {
        var CJ = HJ && HJ.length,
          uJ = pJ({
            xAxis: PJ ? xJ(xJ({}, PJ), {}, {
              ticks: CJ ? HJ : PJ.ticks
            }) : void 0,
            width: hJ,
            height: sJ,
            offset: nJ
          }, !!CJ || WJ);
        (0, XJ.e)(Array.isArray(uJ), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(GJ(uJ), "]")), Array.isArray(uJ) && (NJ = uJ)
      }
      return FJ.createElement("g", {
        className: "recharts-cartesian-grid"
      }, FJ.createElement(QJ, {
        fill: fJ.fill,
        fillOpacity: fJ.fillOpacity,
        x: fJ.x,
        y: fJ.y,
        width: fJ.width,
        height: fJ.height,
        ry: fJ.ry
      }), FJ.createElement(VJ, vJ({}, fJ, {
        offset: nJ,
        horizontalPoints: zJ,
        xAxis: PJ,
        yAxis: kJ
      })), FJ.createElement(KJ, vJ({}, fJ, {
        offset: nJ,
        verticalPoints: NJ,
        xAxis: PJ,
        yAxis: kJ
      })), FJ.createElement(yJ, vJ({}, fJ, {
        horizontalPoints: zJ
      })), FJ.createElement(SJ, vJ({}, fJ, {
        verticalPoints: NJ
      })))
    }
    wJ.displayName = "CartesianGrid"
  },
  5571: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => mJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(5319),
      eJ = ZJ(5332),
      XJ = ZJ(4797),
      AJ = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];

    function qJ(JJ) {
      return qJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, qJ(JJ)
    }

    function jJ() {
      return jJ = Object.assign ? Object.assign.bind() : function(JJ) {
        for (var cJ = 1; cJ < arguments.length; cJ++) {
          var ZJ = arguments[cJ];
          for (var FJ in ZJ) Object.prototype.hasOwnProperty.call(ZJ, FJ) && (JJ[FJ] = ZJ[FJ])
        }
        return JJ
      }, jJ.apply(this, arguments)
    }

    function YJ(JJ, cJ) {
      return function(JJ) {
        if (Array.isArray(JJ)) return JJ
      }(JJ) || function(JJ, cJ) {
        var ZJ = null == JJ ? null : "undefined" != typeof Symbol && JJ[Symbol.iterator] || JJ["@@iterator"];
        if (null != ZJ) {
          var FJ, UJ, eJ, XJ, AJ = [],
            qJ = !0,
            jJ = !1;
          try {
            if (eJ = (ZJ = ZJ.call(JJ)).next, 0 === cJ) {
              if (Object(ZJ) !== ZJ) return;
              qJ = !1
            } else
              for (; !(qJ = (FJ = eJ.call(ZJ)).done) && (AJ.push(FJ.value), AJ.length !== cJ); qJ = !0);
          } catch (JJ) {
            jJ = !0, UJ = JJ
          } finally {
            try {
              if (!qJ && null != ZJ.return && (XJ = ZJ.return(), Object(XJ) !== XJ)) return
            } finally {
              if (jJ) throw UJ
            }
          }
          return AJ
        }
      }(JJ, cJ) || function(JJ, cJ) {
        if (!JJ) return;
        if ("string" === typeof JJ) return hJ(JJ, cJ);
        var ZJ = Object.prototype.toString.call(JJ).slice(8, -1);
        "Object" === ZJ && JJ.constructor && (ZJ = JJ.constructor.name);
        if ("Map" === ZJ || "Set" === ZJ) return Array.from(JJ);
        if ("Arguments" === ZJ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZJ)) return hJ(JJ, cJ)
      }(JJ, cJ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function hJ(JJ, cJ) {
      (null == cJ || cJ > JJ.length) && (cJ = JJ.length);
      for (var ZJ = 0, FJ = new Array(cJ); ZJ < cJ; ZJ++) FJ[ZJ] = JJ[ZJ];
      return FJ
    }

    function DJ(JJ, cJ) {
      if (null == JJ) return {};
      var ZJ, FJ, UJ = function(JJ, cJ) {
        if (null == JJ) return {};
        var ZJ = {};
        for (var FJ in JJ)
          if (Object.prototype.hasOwnProperty.call(JJ, FJ)) {
            if (cJ.indexOf(FJ) >= 0) continue;
            ZJ[FJ] = JJ[FJ]
          } return ZJ
      }(JJ, cJ);
      if (Object.getOwnPropertySymbols) {
        var eJ = Object.getOwnPropertySymbols(JJ);
        for (FJ = 0; FJ < eJ.length; FJ++) ZJ = eJ[FJ], cJ.indexOf(ZJ) >= 0 || Object.prototype.propertyIsEnumerable.call(JJ, ZJ) && (UJ[ZJ] = JJ[ZJ])
      }
      return UJ
    }

    function sJ(JJ, cJ) {
      for (var ZJ = 0; ZJ < cJ.length; ZJ++) {
        var FJ = cJ[ZJ];
        FJ.enumerable = FJ.enumerable || !1, FJ.configurable = !0, "value" in FJ && (FJ.writable = !0), Object.defineProperty(JJ, vJ(FJ.key), FJ)
      }
    }

    function nJ(JJ, cJ, ZJ) {
      return cJ = fJ(cJ),
        function(JJ, cJ) {
          if (cJ && ("object" === qJ(cJ) || "function" === typeof cJ)) return cJ;
          if (void 0 !== cJ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(JJ) {
            if (void 0 === JJ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return JJ
          }(JJ)
        }(JJ, GJ() ? Reflect.construct(cJ, ZJ || [], fJ(JJ).constructor) : cJ.apply(JJ, ZJ))
    }

    function GJ() {
      try {
        var JJ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (JJ) {}
      return (GJ = function() {
        return !!JJ
      })()
    }

    function fJ(JJ) {
      return fJ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(JJ) {
        return JJ.__proto__ || Object.getPrototypeOf(JJ)
      }, fJ(JJ)
    }

    function xJ(JJ, cJ) {
      return xJ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(JJ, cJ) {
        return JJ.__proto__ = cJ, JJ
      }, xJ(JJ, cJ)
    }

    function rJ(JJ, cJ, ZJ) {
      return (cJ = vJ(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }

    function vJ(JJ) {
      var cJ = function(JJ, cJ) {
        if ("object" != qJ(JJ) || !JJ) return JJ;
        var ZJ = JJ[Symbol.toPrimitive];
        if (void 0 !== ZJ) {
          var FJ = ZJ.call(JJ, cJ || "default");
          if ("object" != qJ(FJ)) return FJ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === cJ ? String : Number)(JJ)
      }(JJ, "string");
      return "symbol" == qJ(cJ) ? cJ : cJ + ""
    }
    var mJ = function(JJ) {
      function cJ() {
        return function(JJ, cJ) {
          if (!(JJ instanceof cJ)) throw new TypeError("Cannot call a class as a function")
        }(this, cJ), nJ(this, cJ, arguments)
      }
      return function(JJ, cJ) {
        if ("function" !== typeof cJ && null !== cJ) throw new TypeError("Super expression must either be null or a function");
        JJ.prototype = Object.create(cJ && cJ.prototype, {
          constructor: {
            value: JJ,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(JJ, "prototype", {
          writable: !1
        }), cJ && xJ(JJ, cJ)
      }(cJ, JJ), ZJ = cJ, (qJ = [{
        key: "render",
        value: function() {
          var JJ = this.props,
            cJ = JJ.offset,
            ZJ = JJ.layout,
            qJ = JJ.width,
            hJ = JJ.dataKey,
            sJ = JJ.data,
            nJ = JJ.dataPointFormatter,
            GJ = JJ.xAxis,
            fJ = JJ.yAxis,
            xJ = DJ(JJ, AJ),
            rJ = (0, XJ.c)(xJ, !1);
          "x" === this.props.direction && "number" !== GJ.type && (0, UJ.b)(!1);
          var vJ = sJ.map((function(JJ) {
            var UJ = nJ(JJ, hJ),
              XJ = UJ.x,
              AJ = UJ.y,
              DJ = UJ.value,
              sJ = UJ.errorVal;
            if (!sJ) return null;
            var xJ, vJ, mJ = [];
            if (Array.isArray(sJ)) {
              var QJ = YJ(sJ, 2);
              xJ = QJ[0], vJ = QJ[1]
            } else xJ = vJ = sJ;
            if ("vertical" === ZJ) {
              var EJ = GJ.scale,
                VJ = AJ + cJ,
                KJ = VJ + qJ,
                yJ = VJ - qJ,
                SJ = EJ(DJ - xJ),
                IJ = EJ(DJ + vJ);
              mJ.push({
                x1: IJ,
                y1: KJ,
                x2: IJ,
                y2: yJ
              }), mJ.push({
                x1: SJ,
                y1: VJ,
                x2: IJ,
                y2: VJ
              }), mJ.push({
                x1: SJ,
                y1: KJ,
                x2: SJ,
                y2: yJ
              })
            } else if ("horizontal" === ZJ) {
              var MJ = fJ.scale,
                bJ = XJ + cJ,
                wJ = bJ - qJ,
                WJ = bJ + qJ,
                gJ = MJ(DJ - xJ),
                HJ = MJ(DJ + vJ);
              mJ.push({
                x1: wJ,
                y1: HJ,
                x2: WJ,
                y2: HJ
              }), mJ.push({
                x1: bJ,
                y1: gJ,
                x2: bJ,
                y2: HJ
              }), mJ.push({
                x1: wJ,
                y1: gJ,
                x2: WJ,
                y2: gJ
              })
            }
            return FJ.createElement(eJ.e, jJ({
              className: "recharts-errorBar",
              key: "bar-".concat(mJ.map((function(JJ) {
                return "".concat(JJ.x1, "-").concat(JJ.x2, "-").concat(JJ.y1, "-").concat(JJ.y2)
              })))
            }, rJ), mJ.map((function(JJ) {
              return FJ.createElement("line", jJ({}, JJ, {
                key: "line-".concat(JJ.x1, "-").concat(JJ.x2, "-").concat(JJ.y1, "-").concat(JJ.y2)
              }))
            })))
          }));
          return FJ.createElement(eJ.e, {
            className: "recharts-errorBars"
          }, vJ)
        }
      }]) && sJ(ZJ.prototype, qJ), hJ && sJ(ZJ, hJ), Object.defineProperty(ZJ, "prototype", {
        writable: !1
      }), ZJ;
      var ZJ, qJ, hJ
    }(FJ.Component);
    rJ(mJ, "defaultProps", {
      stroke: "black",
      strokeWidth: 1.5,
      width: 5,
      offset: 0,
      layout: "horizontal"
    }), rJ(mJ, "displayName", "ErrorBar")
  },
  5733: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => dJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(5483),
      eJ = ZJ(4641),
      XJ = ZJ.n(eJ),
      AJ = ZJ(4786),
      qJ = ZJ.n(AJ),
      jJ = ZJ(5557),
      YJ = ZJ.n(jJ),
      hJ = ZJ(4468),
      DJ = ZJ(5722),
      sJ = ZJ(5471),
      nJ = ZJ(5332),
      GJ = ZJ(5653),
      fJ = ZJ(5571),
      xJ = ZJ(4543),
      rJ = ZJ(4797),
      vJ = ZJ(5343),
      mJ = ZJ(5497),
      QJ = ["type", "layout", "connectNulls", "ref"],
      EJ = ["key"];

    function VJ(JJ) {
      return VJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, VJ(JJ)
    }

    function KJ(JJ, cJ) {
      if (null == JJ) return {};
      var ZJ, FJ, UJ = function(JJ, cJ) {
        if (null == JJ) return {};
        var ZJ = {};
        for (var FJ in JJ)
          if (Object.prototype.hasOwnProperty.call(JJ, FJ)) {
            if (cJ.indexOf(FJ) >= 0) continue;
            ZJ[FJ] = JJ[FJ]
          } return ZJ
      }(JJ, cJ);
      if (Object.getOwnPropertySymbols) {
        var eJ = Object.getOwnPropertySymbols(JJ);
        for (FJ = 0; FJ < eJ.length; FJ++) ZJ = eJ[FJ], cJ.indexOf(ZJ) >= 0 || Object.prototype.propertyIsEnumerable.call(JJ, ZJ) && (UJ[ZJ] = JJ[ZJ])
      }
      return UJ
    }

    function yJ() {
      return yJ = Object.assign ? Object.assign.bind() : function(JJ) {
        for (var cJ = 1; cJ < arguments.length; cJ++) {
          var ZJ = arguments[cJ];
          for (var FJ in ZJ) Object.prototype.hasOwnProperty.call(ZJ, FJ) && (JJ[FJ] = ZJ[FJ])
        }
        return JJ
      }, yJ.apply(this, arguments)
    }

    function SJ(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function IJ(JJ) {
      for (var cJ = 1; cJ < arguments.length; cJ++) {
        var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
        cJ % 2 ? SJ(Object(ZJ), !0).forEach((function(cJ) {
          kJ(JJ, cJ, ZJ[cJ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : SJ(Object(ZJ)).forEach((function(cJ) {
          Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
        }))
      }
      return JJ
    }

    function MJ(JJ) {
      return function(JJ) {
        if (Array.isArray(JJ)) return bJ(JJ)
      }(JJ) || function(JJ) {
        if ("undefined" !== typeof Symbol && null != JJ[Symbol.iterator] || null != JJ["@@iterator"]) return Array.from(JJ)
      }(JJ) || function(JJ, cJ) {
        if (!JJ) return;
        if ("string" === typeof JJ) return bJ(JJ, cJ);
        var ZJ = Object.prototype.toString.call(JJ).slice(8, -1);
        "Object" === ZJ && JJ.constructor && (ZJ = JJ.constructor.name);
        if ("Map" === ZJ || "Set" === ZJ) return Array.from(JJ);
        if ("Arguments" === ZJ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZJ)) return bJ(JJ, cJ)
      }(JJ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function bJ(JJ, cJ) {
      (null == cJ || cJ > JJ.length) && (cJ = JJ.length);
      for (var ZJ = 0, FJ = new Array(cJ); ZJ < cJ; ZJ++) FJ[ZJ] = JJ[ZJ];
      return FJ
    }

    function wJ(JJ, cJ) {
      for (var ZJ = 0; ZJ < cJ.length; ZJ++) {
        var FJ = cJ[ZJ];
        FJ.enumerable = FJ.enumerable || !1, FJ.configurable = !0, "value" in FJ && (FJ.writable = !0), Object.defineProperty(JJ, pJ(FJ.key), FJ)
      }
    }

    function WJ(JJ, cJ, ZJ) {
      return cJ = HJ(cJ),
        function(JJ, cJ) {
          if (cJ && ("object" === VJ(cJ) || "function" === typeof cJ)) return cJ;
          if (void 0 !== cJ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(JJ) {
            if (void 0 === JJ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return JJ
          }(JJ)
        }(JJ, gJ() ? Reflect.construct(cJ, ZJ || [], HJ(JJ).constructor) : cJ.apply(JJ, ZJ))
    }

    function gJ() {
      try {
        var JJ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (JJ) {}
      return (gJ = function() {
        return !!JJ
      })()
    }

    function HJ(JJ) {
      return HJ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(JJ) {
        return JJ.__proto__ || Object.getPrototypeOf(JJ)
      }, HJ(JJ)
    }

    function PJ(JJ, cJ) {
      return PJ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(JJ, cJ) {
        return JJ.__proto__ = cJ, JJ
      }, PJ(JJ, cJ)
    }

    function kJ(JJ, cJ, ZJ) {
      return (cJ = pJ(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }

    function pJ(JJ) {
      var cJ = function(JJ, cJ) {
        if ("object" != VJ(JJ) || !JJ) return JJ;
        var ZJ = JJ[Symbol.toPrimitive];
        if (void 0 !== ZJ) {
          var FJ = ZJ.call(JJ, cJ || "default");
          if ("object" != VJ(FJ)) return FJ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === cJ ? String : Number)(JJ)
      }(JJ, "string");
      return "symbol" == VJ(cJ) ? cJ : cJ + ""
    }
    var dJ = function(JJ) {
      function cJ() {
        var JJ;
        ! function(JJ, cJ) {
          if (!(JJ instanceof cJ)) throw new TypeError("Cannot call a class as a function")
        }(this, cJ);
        for (var ZJ = arguments.length, FJ = new Array(ZJ), UJ = 0; UJ < ZJ; UJ++) FJ[UJ] = arguments[UJ];
        return kJ(JJ = WJ(this, cJ, [].concat(FJ)), "state", {
          isAnimationFinished: !0,
          totalLength: 0
        }), kJ(JJ, "generateSimpleStrokeDasharray", (function(JJ, cJ) {
          return "".concat(cJ, "px ").concat(JJ - cJ, "px")
        })), kJ(JJ, "getStrokeDasharray", (function(ZJ, FJ, UJ) {
          var eJ = UJ.reduce((function(JJ, cJ) {
            return JJ + cJ
          }));
          if (!eJ) return JJ.generateSimpleStrokeDasharray(FJ, ZJ);
          for (var XJ = Math.floor(ZJ / eJ), AJ = ZJ % eJ, qJ = FJ - ZJ, jJ = [], YJ = 0, hJ = 0; YJ < UJ.length; hJ += UJ[YJ], ++YJ)
            if (hJ + UJ[YJ] > AJ) {
              jJ = [].concat(MJ(UJ.slice(0, YJ)), [AJ - hJ]);
              break
            } var DJ = jJ.length % 2 === 0 ? [0, qJ] : [qJ];
          return [].concat(MJ(cJ.repeat(UJ, XJ)), MJ(jJ), DJ).map((function(JJ) {
            return "".concat(JJ, "px")
          })).join(", ")
        })), kJ(JJ, "id", (0, xJ.L)("recharts-line-")), kJ(JJ, "pathRef", (function(cJ) {
          JJ.mainCurve = cJ
        })), kJ(JJ, "handleAnimationEnd", (function() {
          JJ.setState({
            isAnimationFinished: !0
          }), JJ.props.onAnimationEnd && JJ.props.onAnimationEnd()
        })), kJ(JJ, "handleAnimationStart", (function() {
          JJ.setState({
            isAnimationFinished: !1
          }), JJ.props.onAnimationStart && JJ.props.onAnimationStart()
        })), JJ
      }
      return function(JJ, cJ) {
        if ("function" !== typeof cJ && null !== cJ) throw new TypeError("Super expression must either be null or a function");
        JJ.prototype = Object.create(cJ && cJ.prototype, {
          constructor: {
            value: JJ,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(JJ, "prototype", {
          writable: !1
        }), cJ && PJ(JJ, cJ)
      }(cJ, JJ), ZJ = cJ, eJ = [{
        key: "componentDidMount",
        value: function() {
          if (this.props.isAnimationActive) {
            var JJ = this.getTotalLength();
            this.setState({
              totalLength: JJ
            })
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function() {
          if (this.props.isAnimationActive) {
            var JJ = this.getTotalLength();
            JJ !== this.state.totalLength && this.setState({
              totalLength: JJ
            })
          }
        }
      }, {
        key: "getTotalLength",
        value: function() {
          var JJ = this.mainCurve;
          try {
            return JJ && JJ.getTotalLength && JJ.getTotalLength() || 0
          } catch (cJ) {
            return 0
          }
        }
      }, {
        key: "renderErrorBar",
        value: function(JJ, cJ) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var ZJ = this.props,
            UJ = ZJ.points,
            eJ = ZJ.xAxis,
            XJ = ZJ.yAxis,
            AJ = ZJ.layout,
            qJ = ZJ.children,
            jJ = (0, rJ.f)(qJ, fJ.c);
          if (!jJ) return null;
          var YJ = function(JJ, cJ) {
              return {
                x: JJ.x,
                y: JJ.y,
                value: JJ.value,
                errorVal: (0, mJ.eb)(JJ.payload, cJ)
              }
            },
            hJ = {
              clipPath: JJ ? "url(#clipPath-".concat(cJ, ")") : null
            };
          return FJ.createElement(nJ.e, hJ, jJ.map((function(JJ) {
            return FJ.cloneElement(JJ, {
              key: "bar-".concat(JJ.props.dataKey),
              data: UJ,
              xAxis: eJ,
              yAxis: XJ,
              layout: AJ,
              dataPointFormatter: YJ
            })
          })))
        }
      }, {
        key: "renderDots",
        value: function(JJ, ZJ, UJ) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var eJ = this.props,
            XJ = eJ.dot,
            AJ = eJ.points,
            qJ = eJ.dataKey,
            jJ = (0, rJ.c)(this.props, !1),
            YJ = (0, rJ.c)(XJ, !0),
            hJ = AJ.map((function(JJ, ZJ) {
              var FJ = IJ(IJ(IJ({
                key: "dot-".concat(ZJ),
                r: 3
              }, jJ), YJ), {}, {
                index: ZJ,
                cx: JJ.x,
                cy: JJ.y,
                value: JJ.value,
                dataKey: qJ,
                payload: JJ.payload,
                points: AJ
              });
              return cJ.renderDotItem(XJ, FJ)
            })),
            DJ = {
              clipPath: JJ ? "url(#clipPath-".concat(ZJ ? "" : "dots-").concat(UJ, ")") : null
            };
          return FJ.createElement(nJ.e, yJ({
            className: "recharts-line-dots",
            key: "dots"
          }, DJ), hJ)
        }
      }, {
        key: "renderCurveStatically",
        value: function(JJ, cJ, ZJ, UJ) {
          var eJ = this.props,
            XJ = eJ.type,
            AJ = eJ.layout,
            qJ = eJ.connectNulls,
            jJ = (eJ.ref, KJ(eJ, QJ)),
            YJ = IJ(IJ(IJ({}, (0, rJ.c)(jJ, !0)), {}, {
              fill: "none",
              className: "recharts-line-curve",
              clipPath: cJ ? "url(#clipPath-".concat(ZJ, ")") : null,
              points: JJ
            }, UJ), {}, {
              type: XJ,
              layout: AJ,
              connectNulls: qJ
            });
          return FJ.createElement(DJ.e, yJ({}, YJ, {
            pathRef: this.pathRef
          }))
        }
      }, {
        key: "renderCurveWithAnimation",
        value: function(JJ, cJ) {
          var ZJ = this,
            eJ = this.props,
            XJ = eJ.points,
            AJ = eJ.strokeDasharray,
            qJ = eJ.isAnimationActive,
            jJ = eJ.animationBegin,
            YJ = eJ.animationDuration,
            hJ = eJ.animationEasing,
            DJ = eJ.animationId,
            sJ = eJ.animateNewValues,
            nJ = eJ.width,
            GJ = eJ.height,
            fJ = this.state,
            rJ = fJ.prevPoints,
            vJ = fJ.totalLength;
          return FJ.createElement(UJ.c, {
            Fs: jJ,
            duration: YJ,
            isActive: qJ,
            easing: hJ,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "line-".concat(DJ),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(FJ) {
            var UJ = FJ.t;
            if (rJ) {
              var eJ = rJ.length / XJ.length,
                qJ = XJ.map((function(JJ, cJ) {
                  var ZJ = Math.floor(cJ * eJ);
                  if (rJ[ZJ]) {
                    var FJ = rJ[ZJ],
                      XJ = (0, xJ.r)(FJ.x, JJ.x),
                      AJ = (0, xJ.r)(FJ.y, JJ.y);
                    return IJ(IJ({}, JJ), {}, {
                      x: XJ(UJ),
                      y: AJ(UJ)
                    })
                  }
                  if (sJ) {
                    var qJ = (0, xJ.r)(2 * nJ, JJ.x),
                      jJ = (0, xJ.r)(GJ / 2, JJ.y);
                    return IJ(IJ({}, JJ), {}, {
                      x: qJ(UJ),
                      y: jJ(UJ)
                    })
                  }
                  return IJ(IJ({}, JJ), {}, {
                    x: JJ.x,
                    y: JJ.y
                  })
                }));
              return ZJ.renderCurveStatically(qJ, JJ, cJ)
            }
            var jJ, YJ = (0, xJ.r)(0, vJ)(UJ);
            if (AJ) {
              var hJ = "".concat(AJ).split(/[,\s]+/gim).map((function(JJ) {
                return parseFloat(JJ)
              }));
              jJ = ZJ.getStrokeDasharray(YJ, vJ, hJ)
            } else jJ = ZJ.generateSimpleStrokeDasharray(vJ, YJ);
            return ZJ.renderCurveStatically(XJ, JJ, cJ, {
              strokeDasharray: jJ
            })
          }))
        }
      }, {
        key: "renderCurve",
        value: function(JJ, cJ) {
          var ZJ = this.props,
            FJ = ZJ.points,
            UJ = ZJ.isAnimationActive,
            eJ = this.state,
            XJ = eJ.prevPoints,
            AJ = eJ.totalLength;
          return UJ && FJ && FJ.length && (!XJ && AJ > 0 || !YJ()(XJ, FJ)) ? this.renderCurveWithAnimation(JJ, cJ) : this.renderCurveStatically(FJ, JJ, cJ)
        }
      }, {
        key: "render",
        value: function() {
          var JJ, cJ = this.props,
            ZJ = cJ.hide,
            UJ = cJ.dot,
            eJ = cJ.points,
            XJ = cJ.className,
            AJ = cJ.xAxis,
            jJ = cJ.yAxis,
            YJ = cJ.top,
            DJ = cJ.left,
            sJ = cJ.width,
            fJ = cJ.height,
            xJ = cJ.isAnimationActive,
            vJ = cJ.id;
          if (ZJ || !eJ || !eJ.length) return null;
          var mJ = this.state.isAnimationFinished,
            QJ = 1 === eJ.length,
            EJ = (0, hJ.d)("recharts-line", XJ),
            VJ = AJ && AJ.allowDataOverflow,
            KJ = jJ && jJ.allowDataOverflow,
            yJ = VJ || KJ,
            SJ = qJ()(vJ) ? this.id : vJ,
            IJ = null !== (JJ = (0, rJ.c)(UJ, !1)) && void 0 !== JJ ? JJ : {
              r: 3,
              strokeWidth: 2
            },
            MJ = IJ.r,
            bJ = void 0 === MJ ? 3 : MJ,
            wJ = IJ.strokeWidth,
            WJ = void 0 === wJ ? 2 : wJ,
            gJ = ((0, rJ.n)(UJ) ? UJ : {}).clipDot,
            HJ = void 0 === gJ || gJ,
            PJ = 2 * bJ + WJ;
          return FJ.createElement(nJ.e, {
            className: EJ
          }, VJ || KJ ? FJ.createElement("defs", null, FJ.createElement("clipPath", {
            id: "clipPath-".concat(SJ)
          }, FJ.createElement("rect", {
            x: VJ ? DJ : DJ - sJ / 2,
            y: KJ ? YJ : YJ - fJ / 2,
            width: VJ ? sJ : 2 * sJ,
            height: KJ ? fJ : 2 * fJ
          })), !HJ && FJ.createElement("clipPath", {
            id: "clipPath-dots-".concat(SJ)
          }, FJ.createElement("rect", {
            x: DJ - PJ / 2,
            y: YJ - PJ / 2,
            width: sJ + PJ,
            height: fJ + PJ
          }))) : null, !QJ && this.renderCurve(yJ, SJ), this.renderErrorBar(yJ, SJ), (QJ || UJ) && this.renderDots(yJ, HJ, SJ), (!xJ || mJ) && GJ.d.renderCallByParent(this.props, eJ))
        }
      }], AJ = [{
        key: "getDerivedStateFromProps",
        value: function(JJ, cJ) {
          return JJ.animationId !== cJ.prevAnimationId ? {
            prevAnimationId: JJ.animationId,
            curPoints: JJ.points,
            prevPoints: cJ.curPoints
          } : JJ.points !== cJ.curPoints ? {
            curPoints: JJ.points
          } : null
        }
      }, {
        key: "repeat",
        value: function(JJ, cJ) {
          for (var ZJ = JJ.length % 2 !== 0 ? [].concat(MJ(JJ), [0]) : JJ, FJ = [], UJ = 0; UJ < cJ; ++UJ) FJ = [].concat(MJ(FJ), MJ(ZJ));
          return FJ
        }
      }, {
        key: "renderDotItem",
        value: function(JJ, cJ) {
          var ZJ;
          if (FJ.isValidElement(JJ)) ZJ = FJ.cloneElement(JJ, cJ);
          else if (XJ()(JJ)) ZJ = JJ(cJ);
          else {
            var UJ = cJ.key,
              eJ = KJ(cJ, EJ),
              AJ = (0, hJ.d)("recharts-line-dot", "boolean" !== typeof JJ ? JJ.className : "");
            ZJ = FJ.createElement(sJ.c, yJ({
              key: UJ
            }, eJ, {
              className: AJ
            }))
          }
          return ZJ
        }
      }], eJ && wJ(ZJ.prototype, eJ), AJ && wJ(ZJ, AJ), Object.defineProperty(ZJ, "prototype", {
        writable: !1
      }), ZJ;
      var ZJ, eJ, AJ
    }(FJ.PureComponent);
    kJ(dJ, "displayName", "Line"), kJ(dJ, "defaultProps", {
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
      isAnimationActive: !vJ.e.isSsr,
      animateNewValues: !0,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease",
      hide: !1,
      label: !1
    }), kJ(dJ, "getComposedData", (function(JJ) {
      var cJ = JJ.props,
        ZJ = JJ.xAxis,
        FJ = JJ.yAxis,
        UJ = JJ.xAxisTicks,
        eJ = JJ.yAxisTicks,
        XJ = JJ.dataKey,
        AJ = JJ.bandSize,
        jJ = JJ.displayedData,
        YJ = JJ.offset,
        hJ = cJ.layout;
      return IJ({
        points: jJ.map((function(JJ, cJ) {
          var jJ = (0, mJ.eb)(JJ, XJ);
          return "horizontal" === hJ ? {
            x: (0, mJ.B)({
              axis: ZJ,
              ticks: UJ,
              bandSize: AJ,
              entry: JJ,
              index: cJ
            }),
            y: qJ()(jJ) ? null : FJ.scale(jJ),
            value: jJ,
            payload: JJ
          } : {
            x: qJ()(jJ) ? null : ZJ.scale(jJ),
            y: (0, mJ.B)({
              axis: FJ,
              ticks: eJ,
              bandSize: AJ,
              entry: JJ,
              index: cJ
            }),
            value: jJ,
            payload: JJ
          }
        })),
        layout: hJ
      }, YJ)
    }))
  },
  5690: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => WJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(4641),
      eJ = ZJ.n(UJ),
      XJ = ZJ(5692),
      AJ = ZJ.n(XJ),
      qJ = ZJ(4468),
      jJ = ZJ(5332),
      YJ = ZJ(5585),
      hJ = ZJ(5598),
      DJ = ZJ(4543),
      sJ = ZJ(5601),
      nJ = ZJ(4794),
      GJ = ZJ(4797),
      fJ = ZJ(5698);

    function xJ(JJ) {
      return xJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, xJ(JJ)
    }

    function rJ(JJ, cJ) {
      for (var ZJ = 0; ZJ < cJ.length; ZJ++) {
        var FJ = cJ[ZJ];
        FJ.enumerable = FJ.enumerable || !1, FJ.configurable = !0, "value" in FJ && (FJ.writable = !0), Object.defineProperty(JJ, SJ(FJ.key), FJ)
      }
    }

    function vJ(JJ, cJ, ZJ) {
      return cJ = QJ(cJ),
        function(JJ, cJ) {
          if (cJ && ("object" === xJ(cJ) || "function" === typeof cJ)) return cJ;
          if (void 0 !== cJ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(JJ) {
            if (void 0 === JJ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return JJ
          }(JJ)
        }(JJ, mJ() ? Reflect.construct(cJ, ZJ || [], QJ(JJ).constructor) : cJ.apply(JJ, ZJ))
    }

    function mJ() {
      try {
        var JJ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (JJ) {}
      return (mJ = function() {
        return !!JJ
      })()
    }

    function QJ(JJ) {
      return QJ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(JJ) {
        return JJ.__proto__ || Object.getPrototypeOf(JJ)
      }, QJ(JJ)
    }

    function EJ(JJ, cJ) {
      return EJ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(JJ, cJ) {
        return JJ.__proto__ = cJ, JJ
      }, EJ(JJ, cJ)
    }

    function VJ(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function KJ(JJ) {
      for (var cJ = 1; cJ < arguments.length; cJ++) {
        var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
        cJ % 2 ? VJ(Object(ZJ), !0).forEach((function(cJ) {
          yJ(JJ, cJ, ZJ[cJ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : VJ(Object(ZJ)).forEach((function(cJ) {
          Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
        }))
      }
      return JJ
    }

    function yJ(JJ, cJ, ZJ) {
      return (cJ = SJ(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }

    function SJ(JJ) {
      var cJ = function(JJ, cJ) {
        if ("object" != xJ(JJ) || !JJ) return JJ;
        var ZJ = JJ[Symbol.toPrimitive];
        if (void 0 !== ZJ) {
          var FJ = ZJ.call(JJ, cJ || "default");
          if ("object" != xJ(FJ)) return FJ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === cJ ? String : Number)(JJ)
      }(JJ, "string");
      return "symbol" == xJ(cJ) ? cJ : cJ + ""
    }

    function IJ(JJ, cJ) {
      return function(JJ) {
        if (Array.isArray(JJ)) return JJ
      }(JJ) || function(JJ, cJ) {
        var ZJ = null == JJ ? null : "undefined" != typeof Symbol && JJ[Symbol.iterator] || JJ["@@iterator"];
        if (null != ZJ) {
          var FJ, UJ, eJ, XJ, AJ = [],
            qJ = !0,
            jJ = !1;
          try {
            if (eJ = (ZJ = ZJ.call(JJ)).next, 0 === cJ) {
              if (Object(ZJ) !== ZJ) return;
              qJ = !1
            } else
              for (; !(qJ = (FJ = eJ.call(ZJ)).done) && (AJ.push(FJ.value), AJ.length !== cJ); qJ = !0);
          } catch (JJ) {
            jJ = !0, UJ = JJ
          } finally {
            try {
              if (!qJ && null != ZJ.return && (XJ = ZJ.return(), Object(XJ) !== XJ)) return
            } finally {
              if (jJ) throw UJ
            }
          }
          return AJ
        }
      }(JJ, cJ) || function(JJ, cJ) {
        if (!JJ) return;
        if ("string" === typeof JJ) return MJ(JJ, cJ);
        var ZJ = Object.prototype.toString.call(JJ).slice(8, -1);
        "Object" === ZJ && JJ.constructor && (ZJ = JJ.constructor.name);
        if ("Map" === ZJ || "Set" === ZJ) return Array.from(JJ);
        if ("Arguments" === ZJ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZJ)) return MJ(JJ, cJ)
      }(JJ, cJ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function MJ(JJ, cJ) {
      (null == cJ || cJ > JJ.length) && (cJ = JJ.length);
      for (var ZJ = 0, FJ = new Array(cJ); ZJ < cJ; ZJ++) FJ[ZJ] = JJ[ZJ];
      return FJ
    }

    function bJ() {
      return bJ = Object.assign ? Object.assign.bind() : function(JJ) {
        for (var cJ = 1; cJ < arguments.length; cJ++) {
          var ZJ = arguments[cJ];
          for (var FJ in ZJ) Object.prototype.hasOwnProperty.call(ZJ, FJ) && (JJ[FJ] = ZJ[FJ])
        }
        return JJ
      }, bJ.apply(this, arguments)
    }

    function wJ(JJ) {
      var cJ = JJ.x,
        ZJ = JJ.y,
        UJ = JJ.segment,
        XJ = JJ.xAxisId,
        xJ = JJ.yAxisId,
        rJ = JJ.shape,
        vJ = JJ.className,
        mJ = JJ.alwaysShow,
        QJ = (0, fJ.l)(),
        EJ = (0, fJ.s)(XJ),
        VJ = (0, fJ.w)(xJ),
        yJ = (0, fJ.q)();
      if (!QJ || !yJ) return null;
      (0, nJ.e)(void 0 === mJ, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var SJ = function(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, qJ, jJ) {
        var YJ = UJ.x,
          DJ = UJ.y,
          sJ = UJ.width,
          nJ = UJ.height;
        if (ZJ) {
          var GJ = jJ.y,
            fJ = JJ.y.apply(GJ, {
              position: eJ
            });
          if ((0, hJ.c)(jJ, "discard") && !JJ.y.isInRange(fJ)) return null;
          var xJ = [{
            x: YJ + sJ,
            y: fJ
          }, {
            x: YJ,
            y: fJ
          }];
          return "left" === qJ ? xJ.reverse() : xJ
        }
        if (cJ) {
          var rJ = jJ.x,
            vJ = JJ.x.apply(rJ, {
              position: eJ
            });
          if ((0, hJ.c)(jJ, "discard") && !JJ.x.isInRange(vJ)) return null;
          var mJ = [{
            x: vJ,
            y: DJ + nJ
          }, {
            x: vJ,
            y: DJ
          }];
          return "top" === XJ ? mJ.reverse() : mJ
        }
        if (FJ) {
          var QJ = jJ.segment.map((function(cJ) {
            return JJ.apply(cJ, {
              position: eJ
            })
          }));
          return (0, hJ.c)(jJ, "discard") && AJ()(QJ, (function(cJ) {
            return !JJ.isInRange(cJ)
          })) ? null : QJ
        }
        return null
      }((0, sJ.d)({
        x: EJ.scale,
        y: VJ.scale
      }), (0, DJ.y)(cJ), (0, DJ.y)(ZJ), UJ && 2 === UJ.length, yJ, JJ.position, EJ.orientation, VJ.orientation, JJ);
      if (!SJ) return null;
      var MJ = IJ(SJ, 2),
        wJ = MJ[0],
        WJ = wJ.x,
        gJ = wJ.y,
        HJ = MJ[1],
        PJ = HJ.x,
        kJ = HJ.y,
        pJ = KJ(KJ({
          clipPath: (0, hJ.c)(JJ, "hidden") ? "url(#".concat(QJ, ")") : void 0
        }, (0, GJ.c)(JJ, !0)), {}, {
          x1: WJ,
          y1: gJ,
          x2: PJ,
          y2: kJ
        });
      return FJ.createElement(jJ.e, {
        className: (0, qJ.d)("recharts-reference-line", vJ)
      }, function(JJ, cJ) {
        return FJ.isValidElement(JJ) ? FJ.cloneElement(JJ, cJ) : eJ()(JJ) ? JJ(cJ) : FJ.createElement("line", bJ({}, cJ, {
          className: "recharts-reference-line-line"
        }))
      }(rJ, pJ), YJ.d.renderCallByParent(JJ, (0, sJ.n)({
        x1: WJ,
        y1: gJ,
        x2: PJ,
        y2: kJ
      })))
    }
    var WJ = function(JJ) {
      function cJ() {
        return function(JJ, cJ) {
          if (!(JJ instanceof cJ)) throw new TypeError("Cannot call a class as a function")
        }(this, cJ), vJ(this, cJ, arguments)
      }
      return function(JJ, cJ) {
        if ("function" !== typeof cJ && null !== cJ) throw new TypeError("Super expression must either be null or a function");
        JJ.prototype = Object.create(cJ && cJ.prototype, {
          constructor: {
            value: JJ,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(JJ, "prototype", {
          writable: !1
        }), cJ && EJ(JJ, cJ)
      }(cJ, JJ), ZJ = cJ, (UJ = [{
        key: "render",
        value: function() {
          return FJ.createElement(wJ, this.props)
        }
      }]) && rJ(ZJ.prototype, UJ), eJ && rJ(ZJ, eJ), Object.defineProperty(ZJ, "prototype", {
        writable: !1
      }), ZJ;
      var ZJ, UJ, eJ
    }(FJ.Component);
    yJ(WJ, "displayName", "ReferenceLine"), yJ(WJ, "defaultProps", {
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
  5735: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => rJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(4468),
      eJ = ZJ(5698),
      XJ = ZJ(5737),
      AJ = ZJ(5497);

    function qJ(JJ) {
      return qJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, qJ(JJ)
    }

    function jJ(JJ, cJ) {
      for (var ZJ = 0; ZJ < cJ.length; ZJ++) {
        var FJ = cJ[ZJ];
        FJ.enumerable = FJ.enumerable || !1, FJ.configurable = !0, "value" in FJ && (FJ.writable = !0), Object.defineProperty(JJ, GJ(FJ.key), FJ)
      }
    }

    function YJ(JJ, cJ, ZJ) {
      return cJ = DJ(cJ),
        function(JJ, cJ) {
          if (cJ && ("object" === qJ(cJ) || "function" === typeof cJ)) return cJ;
          if (void 0 !== cJ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(JJ) {
            if (void 0 === JJ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return JJ
          }(JJ)
        }(JJ, hJ() ? Reflect.construct(cJ, ZJ || [], DJ(JJ).constructor) : cJ.apply(JJ, ZJ))
    }

    function hJ() {
      try {
        var JJ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (JJ) {}
      return (hJ = function() {
        return !!JJ
      })()
    }

    function DJ(JJ) {
      return DJ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(JJ) {
        return JJ.__proto__ || Object.getPrototypeOf(JJ)
      }, DJ(JJ)
    }

    function sJ(JJ, cJ) {
      return sJ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(JJ, cJ) {
        return JJ.__proto__ = cJ, JJ
      }, sJ(JJ, cJ)
    }

    function nJ(JJ, cJ, ZJ) {
      return (cJ = GJ(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }

    function GJ(JJ) {
      var cJ = function(JJ, cJ) {
        if ("object" != qJ(JJ) || !JJ) return JJ;
        var ZJ = JJ[Symbol.toPrimitive];
        if (void 0 !== ZJ) {
          var FJ = ZJ.call(JJ, cJ || "default");
          if ("object" != qJ(FJ)) return FJ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === cJ ? String : Number)(JJ)
      }(JJ, "string");
      return "symbol" == qJ(cJ) ? cJ : cJ + ""
    }

    function fJ() {
      return fJ = Object.assign ? Object.assign.bind() : function(JJ) {
        for (var cJ = 1; cJ < arguments.length; cJ++) {
          var ZJ = arguments[cJ];
          for (var FJ in ZJ) Object.prototype.hasOwnProperty.call(ZJ, FJ) && (JJ[FJ] = ZJ[FJ])
        }
        return JJ
      }, fJ.apply(this, arguments)
    }

    function xJ(JJ) {
      var cJ = JJ.xAxisId,
        ZJ = (0, eJ.h)(),
        qJ = (0, eJ.f)(),
        jJ = (0, eJ.s)(cJ);
      return null == jJ ? null : FJ.createElement(XJ.c, fJ({}, jJ, {
        className: (0, UJ.d)("recharts-".concat(jJ.axisType, " ").concat(jJ.axisType), jJ.className),
        viewBox: {
          x: 0,
          y: 0,
          width: ZJ,
          height: qJ
        },
        ticksGenerator: function(JJ) {
          return (0, AJ.X)(JJ, !0)
        }
      }))
    }
    var rJ = function(JJ) {
      function cJ() {
        return function(JJ, cJ) {
          if (!(JJ instanceof cJ)) throw new TypeError("Cannot call a class as a function")
        }(this, cJ), YJ(this, cJ, arguments)
      }
      return function(JJ, cJ) {
        if ("function" !== typeof cJ && null !== cJ) throw new TypeError("Super expression must either be null or a function");
        JJ.prototype = Object.create(cJ && cJ.prototype, {
          constructor: {
            value: JJ,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(JJ, "prototype", {
          writable: !1
        }), cJ && sJ(JJ, cJ)
      }(cJ, JJ), ZJ = cJ, (UJ = [{
        key: "render",
        value: function() {
          return FJ.createElement(xJ, this.props)
        }
      }]) && jJ(ZJ.prototype, UJ), eJ && jJ(ZJ, eJ), Object.defineProperty(ZJ, "prototype", {
        writable: !1
      }), ZJ;
      var ZJ, UJ, eJ
    }(FJ.Component);
    nJ(rJ, "displayName", "XAxis"), nJ(rJ, "defaultProps", {
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
  5747: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => rJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(4468),
      eJ = ZJ(5698),
      XJ = ZJ(5737),
      AJ = ZJ(5497);

    function qJ(JJ) {
      return qJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, qJ(JJ)
    }

    function jJ(JJ, cJ) {
      for (var ZJ = 0; ZJ < cJ.length; ZJ++) {
        var FJ = cJ[ZJ];
        FJ.enumerable = FJ.enumerable || !1, FJ.configurable = !0, "value" in FJ && (FJ.writable = !0), Object.defineProperty(JJ, GJ(FJ.key), FJ)
      }
    }

    function YJ(JJ, cJ, ZJ) {
      return cJ = DJ(cJ),
        function(JJ, cJ) {
          if (cJ && ("object" === qJ(cJ) || "function" === typeof cJ)) return cJ;
          if (void 0 !== cJ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(JJ) {
            if (void 0 === JJ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return JJ
          }(JJ)
        }(JJ, hJ() ? Reflect.construct(cJ, ZJ || [], DJ(JJ).constructor) : cJ.apply(JJ, ZJ))
    }

    function hJ() {
      try {
        var JJ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (JJ) {}
      return (hJ = function() {
        return !!JJ
      })()
    }

    function DJ(JJ) {
      return DJ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(JJ) {
        return JJ.__proto__ || Object.getPrototypeOf(JJ)
      }, DJ(JJ)
    }

    function sJ(JJ, cJ) {
      return sJ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(JJ, cJ) {
        return JJ.__proto__ = cJ, JJ
      }, sJ(JJ, cJ)
    }

    function nJ(JJ, cJ, ZJ) {
      return (cJ = GJ(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }

    function GJ(JJ) {
      var cJ = function(JJ, cJ) {
        if ("object" != qJ(JJ) || !JJ) return JJ;
        var ZJ = JJ[Symbol.toPrimitive];
        if (void 0 !== ZJ) {
          var FJ = ZJ.call(JJ, cJ || "default");
          if ("object" != qJ(FJ)) return FJ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === cJ ? String : Number)(JJ)
      }(JJ, "string");
      return "symbol" == qJ(cJ) ? cJ : cJ + ""
    }

    function fJ() {
      return fJ = Object.assign ? Object.assign.bind() : function(JJ) {
        for (var cJ = 1; cJ < arguments.length; cJ++) {
          var ZJ = arguments[cJ];
          for (var FJ in ZJ) Object.prototype.hasOwnProperty.call(ZJ, FJ) && (JJ[FJ] = ZJ[FJ])
        }
        return JJ
      }, fJ.apply(this, arguments)
    }
    var xJ = function(JJ) {
        var cJ = JJ.yAxisId,
          ZJ = (0, eJ.h)(),
          qJ = (0, eJ.f)(),
          jJ = (0, eJ.w)(cJ);
        return null == jJ ? null : FJ.createElement(XJ.c, fJ({}, jJ, {
          className: (0, UJ.d)("recharts-".concat(jJ.axisType, " ").concat(jJ.axisType), jJ.className),
          viewBox: {
            x: 0,
            y: 0,
            width: ZJ,
            height: qJ
          },
          ticksGenerator: function(JJ) {
            return (0, AJ.X)(JJ, !0)
          }
        }))
      },
      rJ = function(JJ) {
        function cJ() {
          return function(JJ, cJ) {
            if (!(JJ instanceof cJ)) throw new TypeError("Cannot call a class as a function")
          }(this, cJ), YJ(this, cJ, arguments)
        }
        return function(JJ, cJ) {
          if ("function" !== typeof cJ && null !== cJ) throw new TypeError("Super expression must either be null or a function");
          JJ.prototype = Object.create(cJ && cJ.prototype, {
            constructor: {
              value: JJ,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(JJ, "prototype", {
            writable: !1
          }), cJ && sJ(JJ, cJ)
        }(cJ, JJ), ZJ = cJ, (UJ = [{
          key: "render",
          value: function() {
            return FJ.createElement(xJ, this.props)
          }
        }]) && jJ(ZJ.prototype, UJ), eJ && jJ(ZJ, eJ), Object.defineProperty(ZJ, "prototype", {
          writable: !1
        }), ZJ;
        var ZJ, UJ, eJ
      }(FJ.Component);
    nJ(rJ, "displayName", "YAxis"), nJ(rJ, "defaultProps", {
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
  5744: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => GJ
    });
    var FJ = ZJ(4641),
      UJ = ZJ.n(FJ),
      eJ = ZJ(4543),
      XJ = ZJ(5490),
      AJ = ZJ(5343),
      qJ = ZJ(5601);

    function jJ(JJ, cJ, ZJ) {
      if (cJ < 1) return [];
      if (1 === cJ && void 0 === ZJ) return JJ;
      for (var FJ = [], UJ = 0; UJ < JJ.length; UJ += cJ) {
        if (void 0 !== ZJ && !0 !== ZJ(JJ[UJ])) return;
        FJ.push(JJ[UJ])
      }
      return FJ
    }

    function YJ(JJ, cJ, ZJ, FJ, UJ) {
      if (JJ * cJ < JJ * FJ || JJ * cJ > JJ * UJ) return !1;
      var eJ = ZJ();
      return JJ * (cJ - JJ * eJ / 2 - FJ) >= 0 && JJ * (cJ + JJ * eJ / 2 - UJ) <= 0
    }

    function hJ(JJ) {
      return hJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, hJ(JJ)
    }

    function DJ(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function sJ(JJ) {
      for (var cJ = 1; cJ < arguments.length; cJ++) {
        var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
        cJ % 2 ? DJ(Object(ZJ), !0).forEach((function(cJ) {
          nJ(JJ, cJ, ZJ[cJ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : DJ(Object(ZJ)).forEach((function(cJ) {
          Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
        }))
      }
      return JJ
    }

    function nJ(JJ, cJ, ZJ) {
      return (cJ = function(JJ) {
        var cJ = function(JJ, cJ) {
          if ("object" != hJ(JJ) || !JJ) return JJ;
          var ZJ = JJ[Symbol.toPrimitive];
          if (void 0 !== ZJ) {
            var FJ = ZJ.call(JJ, cJ || "default");
            if ("object" != hJ(FJ)) return FJ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === cJ ? String : Number)(JJ)
        }(JJ, "string");
        return "symbol" == hJ(cJ) ? cJ : cJ + ""
      }(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }

    function GJ(JJ, cJ, ZJ) {
      var FJ = JJ.Hh,
        hJ = JJ.ticks,
        DJ = JJ.viewBox,
        nJ = JJ.minTickGap,
        GJ = JJ.orientation,
        fJ = JJ.interval,
        xJ = JJ.tickFormatter,
        rJ = JJ.unit,
        vJ = JJ.angle;
      if (!hJ || !hJ.length || !FJ) return [];
      if ((0, eJ.C)(fJ) || AJ.e.isSsr) return function(JJ, cJ) {
        return jJ(JJ, cJ + 1)
      }(hJ, "number" === typeof fJ && (0, eJ.C)(fJ) ? fJ : 0);
      var mJ = [],
        QJ = "top" === GJ || "bottom" === GJ ? "width" : "height",
        EJ = rJ && "width" === QJ ? (0, XJ.f)(rJ, {
          fontSize: cJ,
          letterSpacing: ZJ
        }) : {
          width: 0,
          height: 0
        },
        VJ = function(JJ, FJ) {
          var eJ = UJ()(xJ) ? xJ(JJ.value, FJ) : JJ.value;
          return "width" === QJ ? function(JJ, cJ, ZJ) {
            var FJ = {
              width: JJ.width + cJ.width,
              height: JJ.height + cJ.height
            };
            return (0, qJ.l)(FJ, ZJ)
          }((0, XJ.f)(eJ, {
            fontSize: cJ,
            letterSpacing: ZJ
          }), EJ, vJ) : (0, XJ.f)(eJ, {
            fontSize: cJ,
            letterSpacing: ZJ
          })[QJ]
        },
        KJ = hJ.length >= 2 ? (0, eJ.I)(hJ[1].coordinate - hJ[0].coordinate) : 1,
        yJ = function(JJ, cJ, ZJ) {
          var FJ = "width" === ZJ,
            UJ = JJ.x,
            eJ = JJ.y,
            XJ = JJ.width,
            AJ = JJ.height;
          return 1 === cJ ? {
            start: FJ ? UJ : eJ,
            end: FJ ? UJ + XJ : eJ + AJ
          } : {
            start: FJ ? UJ + XJ : eJ + AJ,
            end: FJ ? UJ : eJ
          }
        }(DJ, KJ, QJ);
      return "equidistantPreserveStart" === fJ ? function(JJ, cJ, ZJ, FJ, UJ) {
        for (var eJ, XJ = (FJ || []).slice(), AJ = cJ.start, qJ = cJ.end, hJ = 0, DJ = 1, sJ = AJ, nJ = function() {
            var cJ = null === FJ || void 0 === FJ ? void 0 : FJ[hJ];
            if (void 0 === cJ) return {
              v: jJ(FJ, DJ)
            };
            var eJ, XJ = hJ,
              nJ = function() {
                return void 0 === eJ && (eJ = ZJ(cJ, XJ)), eJ
              },
              GJ = cJ.coordinate,
              fJ = 0 === hJ || YJ(JJ, GJ, nJ, sJ, qJ);
            fJ || (hJ = 0, sJ = AJ, DJ += 1), fJ && (sJ = GJ + JJ * (nJ() / 2 + UJ), hJ += DJ)
          }; DJ <= XJ.length;)
          if (eJ = nJ()) return eJ.v;
        return []
      }(KJ, yJ, VJ, hJ, nJ) : (mJ = "preserveStart" === fJ || "preserveStartEnd" === fJ ? function(JJ, cJ, ZJ, FJ, UJ, eJ) {
        var XJ = (FJ || []).slice(),
          AJ = XJ.length,
          qJ = cJ.start,
          jJ = cJ.end;
        if (eJ) {
          var hJ = FJ[AJ - 1],
            DJ = ZJ(hJ, AJ - 1),
            nJ = JJ * (hJ.coordinate + JJ * DJ / 2 - jJ);
          XJ[AJ - 1] = hJ = sJ(sJ({}, hJ), {}, {
            tickCoord: nJ > 0 ? hJ.coordinate - nJ * JJ : hJ.coordinate
          }), YJ(JJ, hJ.tickCoord, (function() {
            return DJ
          }), qJ, jJ) && (jJ = hJ.tickCoord - JJ * (DJ / 2 + UJ), XJ[AJ - 1] = sJ(sJ({}, hJ), {}, {
            isShow: !0
          }))
        }
        for (var GJ = eJ ? AJ - 1 : AJ, fJ = function(cJ) {
            var FJ, eJ = XJ[cJ],
              AJ = function() {
                return void 0 === FJ && (FJ = ZJ(eJ, cJ)), FJ
              };
            if (0 === cJ) {
              var hJ = JJ * (eJ.coordinate - JJ * AJ() / 2 - qJ);
              XJ[cJ] = eJ = sJ(sJ({}, eJ), {}, {
                tickCoord: hJ < 0 ? eJ.coordinate - hJ * JJ : eJ.coordinate
              })
            } else XJ[cJ] = eJ = sJ(sJ({}, eJ), {}, {
              tickCoord: eJ.coordinate
            });
            YJ(JJ, eJ.tickCoord, AJ, qJ, jJ) && (qJ = eJ.tickCoord + JJ * (AJ() / 2 + UJ), XJ[cJ] = sJ(sJ({}, eJ), {}, {
              isShow: !0
            }))
          }, xJ = 0; xJ < GJ; xJ++) fJ(xJ);
        return XJ
      }(KJ, yJ, VJ, hJ, nJ, "preserveStartEnd" === fJ) : function(JJ, cJ, ZJ, FJ, UJ) {
        for (var eJ = (FJ || []).slice(), XJ = eJ.length, AJ = cJ.start, qJ = cJ.end, jJ = function(cJ) {
            var FJ, jJ = eJ[cJ],
              hJ = function() {
                return void 0 === FJ && (FJ = ZJ(jJ, cJ)), FJ
              };
            if (cJ === XJ - 1) {
              var DJ = JJ * (jJ.coordinate + JJ * hJ() / 2 - qJ);
              eJ[cJ] = jJ = sJ(sJ({}, jJ), {}, {
                tickCoord: DJ > 0 ? jJ.coordinate - DJ * JJ : jJ.coordinate
              })
            } else eJ[cJ] = jJ = sJ(sJ({}, jJ), {}, {
              tickCoord: jJ.coordinate
            });
            YJ(JJ, jJ.tickCoord, hJ, AJ, qJ) && (qJ = jJ.tickCoord - JJ * (hJ() / 2 + UJ), eJ[cJ] = sJ(sJ({}, jJ), {}, {
              isShow: !0
            }))
          }, hJ = XJ - 1; hJ >= 0; hJ--) jJ(hJ);
        return eJ
      }(KJ, yJ, VJ, hJ, nJ), mJ.filter((function(JJ) {
        return JJ.isShow
      })))
    }
  },
  5757: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => qJ
    });
    var FJ = ZJ(4833),
      UJ = ZJ(5637),
      eJ = ZJ(5735),
      XJ = ZJ(5747),
      AJ = ZJ(5601),
      qJ = (0, FJ.c)({
        chartName: "BarChart",
        GraphicalChild: UJ.e,
        defaultTooltipEventType: "axis",
        validateTooltipEventTypes: ["axis", "item"],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: eJ.b
        }, {
          axisType: "yAxis",
          AxisComp: XJ.c
        }],
        formatAxisMap: AJ.h
      })
  },
  4826: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => Uc
    });
    var FJ = ZJ(4833),
      UJ = ZJ(5728),
      eJ = ZJ(5637),
      XJ = ZJ(5733),
      AJ = ZJ(47),
      qJ = ZJ(5483),
      jJ = ZJ(4786),
      YJ = ZJ.n(jJ),
      hJ = ZJ(5557),
      DJ = ZJ.n(hJ),
      sJ = ZJ(4641),
      nJ = ZJ.n(sJ),
      GJ = ZJ(4468),
      fJ = ZJ(5332),
      xJ = ZJ(5653),
      rJ = ZJ(4797),
      vJ = ZJ(5343);

    function mJ(JJ) {
      return mJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, mJ(JJ)
    }

    function QJ(JJ, cJ) {
      for (var ZJ = 0; ZJ < cJ.length; ZJ++) {
        var FJ = cJ[ZJ];
        FJ.enumerable = FJ.enumerable || !1, FJ.configurable = !0, "value" in FJ && (FJ.writable = !0), Object.defineProperty(JJ, IJ(FJ.key), FJ)
      }
    }

    function EJ(JJ, cJ, ZJ) {
      return cJ = KJ(cJ),
        function(JJ, cJ) {
          if (cJ && ("object" === mJ(cJ) || "function" === typeof cJ)) return cJ;
          if (void 0 !== cJ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(JJ) {
            if (void 0 === JJ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return JJ
          }(JJ)
        }(JJ, VJ() ? Reflect.construct(cJ, ZJ || [], KJ(JJ).constructor) : cJ.apply(JJ, ZJ))
    }

    function VJ() {
      try {
        var JJ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (JJ) {}
      return (VJ = function() {
        return !!JJ
      })()
    }

    function KJ(JJ) {
      return KJ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(JJ) {
        return JJ.__proto__ || Object.getPrototypeOf(JJ)
      }, KJ(JJ)
    }

    function yJ(JJ, cJ) {
      return yJ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(JJ, cJ) {
        return JJ.__proto__ = cJ, JJ
      }, yJ(JJ, cJ)
    }

    function SJ(JJ, cJ, ZJ) {
      return (cJ = IJ(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }

    function IJ(JJ) {
      var cJ = function(JJ, cJ) {
        if ("object" != mJ(JJ) || !JJ) return JJ;
        var ZJ = JJ[Symbol.toPrimitive];
        if (void 0 !== ZJ) {
          var FJ = ZJ.call(JJ, cJ || "default");
          if ("object" != mJ(FJ)) return FJ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === cJ ? String : Number)(JJ)
      }(JJ, "string");
      return "symbol" == mJ(cJ) ? cJ : cJ + ""
    }
    var MJ = function(JJ) {
      function cJ() {
        return function(JJ, cJ) {
          if (!(JJ instanceof cJ)) throw new TypeError("Cannot call a class as a function")
        }(this, cJ), EJ(this, cJ, arguments)
      }
      return function(JJ, cJ) {
        if ("function" !== typeof cJ && null !== cJ) throw new TypeError("Super expression must either be null or a function");
        JJ.prototype = Object.create(cJ && cJ.prototype, {
          constructor: {
            value: JJ,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(JJ, "prototype", {
          writable: !1
        }), cJ && yJ(JJ, cJ)
      }(cJ, JJ), ZJ = cJ, (FJ = [{
        key: "render",
        value: function() {
          return null
        }
      }]) && QJ(ZJ.prototype, FJ), UJ && QJ(ZJ, UJ), Object.defineProperty(ZJ, "prototype", {
        writable: !1
      }), ZJ;
      var ZJ, FJ, UJ
    }(AJ.Component);
    SJ(MJ, "displayName", "ZAxis"), SJ(MJ, "defaultProps", {
      zAxisId: 0,
      range: [64, 64],
      scale: "auto",
      type: "number"
    });
    var bJ = ZJ(5722),
      wJ = ZJ(5571),
      WJ = ZJ(5646),
      gJ = ZJ(4543),
      HJ = ZJ(5497),
      PJ = ZJ(4817),
      kJ = ZJ(5415),
      pJ = ZJ(5662),
      dJ = ["option", "isActive"];

    function zJ() {
      return zJ = Object.assign ? Object.assign.bind() : function(JJ) {
        for (var cJ = 1; cJ < arguments.length; cJ++) {
          var ZJ = arguments[cJ];
          for (var FJ in ZJ) Object.prototype.hasOwnProperty.call(ZJ, FJ) && (JJ[FJ] = ZJ[FJ])
        }
        return JJ
      }, zJ.apply(this, arguments)
    }

    function NJ(JJ, cJ) {
      if (null == JJ) return {};
      var ZJ, FJ, UJ = function(JJ, cJ) {
        if (null == JJ) return {};
        var ZJ = {};
        for (var FJ in JJ)
          if (Object.prototype.hasOwnProperty.call(JJ, FJ)) {
            if (cJ.indexOf(FJ) >= 0) continue;
            ZJ[FJ] = JJ[FJ]
          } return ZJ
      }(JJ, cJ);
      if (Object.getOwnPropertySymbols) {
        var eJ = Object.getOwnPropertySymbols(JJ);
        for (FJ = 0; FJ < eJ.length; FJ++) ZJ = eJ[FJ], cJ.indexOf(ZJ) >= 0 || Object.prototype.propertyIsEnumerable.call(JJ, ZJ) && (UJ[ZJ] = JJ[ZJ])
      }
      return UJ
    }

    function OJ(JJ) {
      var cJ = JJ.option,
        ZJ = JJ.isActive,
        FJ = NJ(JJ, dJ);
      return "string" === typeof cJ ? AJ.createElement(pJ.c, zJ({
        option: AJ.createElement(kJ.b, zJ({
          type: cJ
        }, FJ)),
        isActive: ZJ,
        shapeType: "symbols"
      }, FJ)) : AJ.createElement(pJ.c, zJ({
        option: cJ,
        isActive: ZJ,
        shapeType: "symbols"
      }, FJ))
    }

    function TJ(JJ) {
      return TJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, TJ(JJ)
    }

    function CJ() {
      return CJ = Object.assign ? Object.assign.bind() : function(JJ) {
        for (var cJ = 1; cJ < arguments.length; cJ++) {
          var ZJ = arguments[cJ];
          for (var FJ in ZJ) Object.prototype.hasOwnProperty.call(ZJ, FJ) && (JJ[FJ] = ZJ[FJ])
        }
        return JJ
      }, CJ.apply(this, arguments)
    }

    function uJ(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function iJ(JJ) {
      for (var cJ = 1; cJ < arguments.length; cJ++) {
        var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
        cJ % 2 ? uJ(Object(ZJ), !0).forEach((function(cJ) {
          oJ(JJ, cJ, ZJ[cJ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : uJ(Object(ZJ)).forEach((function(cJ) {
          Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
        }))
      }
      return JJ
    }

    function RJ(JJ, cJ) {
      for (var ZJ = 0; ZJ < cJ.length; ZJ++) {
        var FJ = cJ[ZJ];
        FJ.enumerable = FJ.enumerable || !1, FJ.configurable = !0, "value" in FJ && (FJ.writable = !0), Object.defineProperty(JJ, lJ(FJ.key), FJ)
      }
    }

    function LJ(JJ, cJ, ZJ) {
      return cJ = BJ(cJ),
        function(JJ, cJ) {
          if (cJ && ("object" === TJ(cJ) || "function" === typeof cJ)) return cJ;
          if (void 0 !== cJ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(JJ) {
            if (void 0 === JJ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return JJ
          }(JJ)
        }(JJ, aJ() ? Reflect.construct(cJ, ZJ || [], BJ(JJ).constructor) : cJ.apply(JJ, ZJ))
    }

    function aJ() {
      try {
        var JJ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (JJ) {}
      return (aJ = function() {
        return !!JJ
      })()
    }

    function BJ(JJ) {
      return BJ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(JJ) {
        return JJ.__proto__ || Object.getPrototypeOf(JJ)
      }, BJ(JJ)
    }

    function tJ(JJ, cJ) {
      return tJ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(JJ, cJ) {
        return JJ.__proto__ = cJ, JJ
      }, tJ(JJ, cJ)
    }

    function oJ(JJ, cJ, ZJ) {
      return (cJ = lJ(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }

    function lJ(JJ) {
      var cJ = function(JJ, cJ) {
        if ("object" != TJ(JJ) || !JJ) return JJ;
        var ZJ = JJ[Symbol.toPrimitive];
        if (void 0 !== ZJ) {
          var FJ = ZJ.call(JJ, cJ || "default");
          if ("object" != TJ(FJ)) return FJ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === cJ ? String : Number)(JJ)
      }(JJ, "string");
      return "symbol" == TJ(cJ) ? cJ : cJ + ""
    }
    var Jc = function(JJ) {
      function cJ() {
        var JJ;
        ! function(JJ, cJ) {
          if (!(JJ instanceof cJ)) throw new TypeError("Cannot call a class as a function")
        }(this, cJ);
        for (var ZJ = arguments.length, FJ = new Array(ZJ), UJ = 0; UJ < ZJ; UJ++) FJ[UJ] = arguments[UJ];
        return oJ(JJ = LJ(this, cJ, [].concat(FJ)), "state", {
          isAnimationFinished: !1
        }), oJ(JJ, "handleAnimationEnd", (function() {
          JJ.setState({
            isAnimationFinished: !0
          })
        })), oJ(JJ, "handleAnimationStart", (function() {
          JJ.setState({
            isAnimationFinished: !1
          })
        })), oJ(JJ, "id", (0, gJ.L)("recharts-scatter-")), JJ
      }
      return function(JJ, cJ) {
        if ("function" !== typeof cJ && null !== cJ) throw new TypeError("Super expression must either be null or a function");
        JJ.prototype = Object.create(cJ && cJ.prototype, {
          constructor: {
            value: JJ,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(JJ, "prototype", {
          writable: !1
        }), cJ && tJ(JJ, cJ)
      }(cJ, JJ), ZJ = cJ, FJ = [{
        key: "renderSymbolsStatically",
        value: function(JJ) {
          var cJ = this,
            ZJ = this.props,
            FJ = ZJ.shape,
            UJ = ZJ.activeShape,
            eJ = ZJ.activeIndex,
            XJ = (0, rJ.c)(this.props, !1);
          return JJ.map((function(JJ, ZJ) {
            var qJ = eJ === ZJ,
              jJ = qJ ? UJ : FJ,
              YJ = iJ(iJ({}, XJ), JJ);
            return AJ.createElement(fJ.e, CJ({
              className: "recharts-scatter-symbol",
              key: "symbol-".concat(null === JJ || void 0 === JJ ? void 0 : JJ.cx, "-").concat(null === JJ || void 0 === JJ ? void 0 : JJ.cy, "-").concat(null === JJ || void 0 === JJ ? void 0 : JJ.size, "-").concat(ZJ)
            }, (0, PJ.n)(cJ.props, JJ, ZJ), {
              role: "img"
            }), AJ.createElement(OJ, CJ({
              option: jJ,
              isActive: qJ,
              key: "symbol-".concat(ZJ)
            }, YJ)))
          }))
        }
      }, {
        key: "renderSymbolsWithAnimation",
        value: function() {
          var JJ = this,
            cJ = this.props,
            ZJ = cJ.points,
            FJ = cJ.isAnimationActive,
            UJ = cJ.animationBegin,
            eJ = cJ.animationDuration,
            XJ = cJ.animationEasing,
            jJ = cJ.animationId,
            YJ = this.state.prevPoints;
          return AJ.createElement(qJ.c, {
            Fs: UJ,
            duration: eJ,
            isActive: FJ,
            easing: XJ,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "pie-".concat(jJ),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(cJ) {
            var FJ = cJ.t,
              UJ = ZJ.map((function(JJ, cJ) {
                var ZJ = YJ && YJ[cJ];
                if (ZJ) {
                  var UJ = (0, gJ.r)(ZJ.cx, JJ.cx),
                    eJ = (0, gJ.r)(ZJ.cy, JJ.cy),
                    XJ = (0, gJ.r)(ZJ.size, JJ.size);
                  return iJ(iJ({}, JJ), {}, {
                    cx: UJ(FJ),
                    cy: eJ(FJ),
                    size: XJ(FJ)
                  })
                }
                var AJ = (0, gJ.r)(0, JJ.size);
                return iJ(iJ({}, JJ), {}, {
                  size: AJ(FJ)
                })
              }));
            return AJ.createElement(fJ.e, null, JJ.renderSymbolsStatically(UJ))
          }))
        }
      }, {
        key: "renderSymbols",
        value: function() {
          var JJ = this.props,
            cJ = JJ.points,
            ZJ = JJ.isAnimationActive,
            FJ = this.state.prevPoints;
          return !(ZJ && cJ && cJ.length) || FJ && DJ()(FJ, cJ) ? this.renderSymbolsStatically(cJ) : this.renderSymbolsWithAnimation()
        }
      }, {
        key: "renderErrorBar",
        value: function() {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var JJ = this.props,
            cJ = JJ.points,
            ZJ = JJ.xAxis,
            FJ = JJ.yAxis,
            UJ = JJ.children,
            eJ = (0, rJ.f)(UJ, wJ.c);
          return eJ ? eJ.map((function(JJ, UJ) {
            var eJ = JJ.props,
              XJ = eJ.direction,
              qJ = eJ.dataKey;
            return AJ.cloneElement(JJ, {
              key: "".concat(XJ, "-").concat(qJ, "-").concat(cJ[UJ]),
              data: cJ,
              xAxis: ZJ,
              yAxis: FJ,
              layout: "x" === XJ ? "vertical" : "horizontal",
              dataPointFormatter: function(JJ, cJ) {
                return {
                  x: JJ.cx,
                  y: JJ.cy,
                  value: "x" === XJ ? +JJ.node.x : +JJ.node.y,
                  errorVal: (0, HJ.eb)(JJ, cJ)
                }
              }
            })
          })) : null
        }
      }, {
        key: "renderLine",
        value: function() {
          var JJ, cJ, ZJ = this.props,
            FJ = ZJ.points,
            UJ = ZJ.line,
            eJ = ZJ.lineType,
            XJ = ZJ.lineJointType,
            qJ = (0, rJ.c)(this.props, !1),
            jJ = (0, rJ.c)(UJ, !1);
          if ("joint" === eJ) JJ = FJ.map((function(JJ) {
            return {
              x: JJ.cx,
              y: JJ.cy
            }
          }));
          else if ("fitting" === eJ) {
            var YJ = (0, gJ.k)(FJ),
              hJ = YJ.xmin,
              DJ = YJ.xmax,
              sJ = YJ.a,
              GJ = YJ.b,
              xJ = function(JJ) {
                return sJ * JJ + GJ
              };
            JJ = [{
              x: hJ,
              y: xJ(hJ)
            }, {
              x: DJ,
              y: xJ(DJ)
            }]
          }
          var vJ = iJ(iJ(iJ({}, qJ), {}, {
            fill: "none",
            stroke: qJ && qJ.fill
          }, jJ), {}, {
            points: JJ
          });
          return cJ = AJ.isValidElement(UJ) ? AJ.cloneElement(UJ, vJ) : nJ()(UJ) ? UJ(vJ) : AJ.createElement(bJ.e, CJ({}, vJ, {
            type: XJ
          })), AJ.createElement(fJ.e, {
            className: "recharts-scatter-line",
            key: "recharts-scatter-line"
          }, cJ)
        }
      }, {
        key: "render",
        value: function() {
          var JJ = this.props,
            cJ = JJ.hide,
            ZJ = JJ.points,
            FJ = JJ.line,
            UJ = JJ.className,
            eJ = JJ.xAxis,
            XJ = JJ.yAxis,
            qJ = JJ.left,
            jJ = JJ.top,
            hJ = JJ.width,
            DJ = JJ.height,
            sJ = JJ.id,
            nJ = JJ.isAnimationActive;
          if (cJ || !ZJ || !ZJ.length) return null;
          var rJ = this.state.isAnimationFinished,
            vJ = (0, GJ.d)("recharts-scatter", UJ),
            mJ = eJ && eJ.allowDataOverflow,
            QJ = XJ && XJ.allowDataOverflow,
            EJ = mJ || QJ,
            VJ = YJ()(sJ) ? this.id : sJ;
          return AJ.createElement(fJ.e, {
            className: vJ,
            clipPath: EJ ? "url(#clipPath-".concat(VJ, ")") : null
          }, mJ || QJ ? AJ.createElement("defs", null, AJ.createElement("clipPath", {
            id: "clipPath-".concat(VJ)
          }, AJ.createElement("rect", {
            x: mJ ? qJ : qJ - hJ / 2,
            y: QJ ? jJ : jJ - DJ / 2,
            width: mJ ? hJ : 2 * hJ,
            height: QJ ? DJ : 2 * DJ
          }))) : null, FJ && this.renderLine(), this.renderErrorBar(), AJ.createElement(fJ.e, {
            key: "recharts-scatter-symbols"
          }, this.renderSymbols()), (!nJ || rJ) && xJ.d.renderCallByParent(this.props, ZJ))
        }
      }], UJ = [{
        key: "getDerivedStateFromProps",
        value: function(JJ, cJ) {
          return JJ.animationId !== cJ.prevAnimationId ? {
            prevAnimationId: JJ.animationId,
            curPoints: JJ.points,
            prevPoints: cJ.curPoints
          } : JJ.points !== cJ.curPoints ? {
            curPoints: JJ.points
          } : null
        }
      }], FJ && RJ(ZJ.prototype, FJ), UJ && RJ(ZJ, UJ), Object.defineProperty(ZJ, "prototype", {
        writable: !1
      }), ZJ;
      var ZJ, FJ, UJ
    }(AJ.PureComponent);
    oJ(Jc, "displayName", "Scatter"), oJ(Jc, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      zAxisId: 0,
      legendType: "circle",
      lineType: "joint",
      lineJointType: "linear",
      data: [],
      shape: "circle",
      hide: !1,
      isAnimationActive: !vJ.e.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "linear"
    }), oJ(Jc, "getComposedData", (function(JJ) {
      var cJ = JJ.xAxis,
        ZJ = JJ.yAxis,
        FJ = JJ.zAxis,
        UJ = JJ.item,
        eJ = JJ.displayedData,
        XJ = JJ.xAxisTicks,
        AJ = JJ.yAxisTicks,
        qJ = JJ.offset,
        jJ = UJ.props.tooltipType,
        hJ = (0, rJ.f)(UJ.props.children, WJ.b),
        DJ = YJ()(cJ.dataKey) ? UJ.props.dataKey : cJ.dataKey,
        sJ = YJ()(ZJ.dataKey) ? UJ.props.dataKey : ZJ.dataKey,
        nJ = FJ && FJ.dataKey,
        GJ = FJ ? FJ.range : MJ.defaultProps.range,
        fJ = GJ && GJ[0],
        xJ = cJ.scale.bandwidth ? cJ.scale.bandwidth() : 0,
        vJ = ZJ.scale.bandwidth ? ZJ.scale.bandwidth() : 0,
        mJ = eJ.map((function(JJ, eJ) {
          var qJ = (0, HJ.eb)(JJ, DJ),
            GJ = (0, HJ.eb)(JJ, sJ),
            rJ = !YJ()(nJ) && (0, HJ.eb)(JJ, nJ) || "-",
            mJ = [{
              name: YJ()(cJ.dataKey) ? UJ.props.name : cJ.name || cJ.dataKey,
              unit: cJ.unit || "",
              value: qJ,
              payload: JJ,
              dataKey: DJ,
              type: jJ
            }, {
              name: YJ()(ZJ.dataKey) ? UJ.props.name : ZJ.name || ZJ.dataKey,
              unit: ZJ.unit || "",
              value: GJ,
              payload: JJ,
              dataKey: sJ,
              type: jJ
            }];
          "-" !== rJ && mJ.push({
            name: FJ.name || FJ.dataKey,
            unit: FJ.unit || "",
            value: rJ,
            payload: JJ,
            dataKey: nJ,
            type: jJ
          });
          var QJ = (0, HJ.B)({
              axis: cJ,
              ticks: XJ,
              bandSize: xJ,
              entry: JJ,
              index: eJ,
              dataKey: DJ
            }),
            EJ = (0, HJ.B)({
              axis: ZJ,
              ticks: AJ,
              bandSize: vJ,
              entry: JJ,
              index: eJ,
              dataKey: sJ
            }),
            VJ = "-" !== rJ ? FJ.scale(rJ) : fJ,
            KJ = Math.sqrt(Math.max(VJ, 0) / Math.PI);
          return iJ(iJ({}, JJ), {}, {
            cx: QJ,
            cy: EJ,
            x: QJ - KJ,
            y: EJ - KJ,
            xAxis: cJ,
            yAxis: ZJ,
            zAxis: FJ,
            width: 2 * KJ,
            height: 2 * KJ,
            size: VJ,
            node: {
              x: qJ,
              y: GJ,
              z: rJ
            },
            tooltipPayload: mJ,
            tooltipPosition: {
              x: QJ,
              y: EJ
            },
            payload: JJ
          }, hJ && hJ[eJ] && hJ[eJ].props)
        }));
      return iJ({
        points: mJ
      }, qJ)
    }));
    var cc = ZJ(5735),
      Zc = ZJ(5747),
      Fc = ZJ(5601),
      Uc = (0, FJ.c)({
        chartName: "ComposedChart",
        GraphicalChild: [XJ.d, UJ.c, eJ.e, Jc],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: cc.b
        }, {
          axisType: "yAxis",
          AxisComp: Zc.c
        }, {
          axisType: "zAxis",
          AxisComp: MJ
        }],
        formatAxisMap: Fc.h
      })
  },
  4833: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => zZ
    });
    var FJ = ZJ(47),
      UJ = ZJ(4786),
      eJ = ZJ.n(UJ),
      XJ = ZJ(4641),
      AJ = ZJ.n(XJ),
      qJ = ZJ(4839),
      jJ = ZJ.n(qJ),
      YJ = ZJ(4561),
      hJ = ZJ.n(YJ),
      DJ = ZJ(4888),
      sJ = ZJ.n(DJ),
      nJ = ZJ(4476),
      GJ = ZJ.n(nJ),
      fJ = ZJ(4468),
      xJ = ZJ(5319),
      rJ = ZJ(5324),
      vJ = ZJ(5332),
      mJ = ZJ(5336),
      QJ = ZJ(5406),
      EJ = ZJ(5471),
      VJ = ZJ(5480),
      KJ = ZJ(4797),
      yJ = ZJ(5502),
      SJ = ZJ(5488),
      IJ = ZJ(5497),
      MJ = ZJ(4543);

    function bJ(JJ) {
      return bJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, bJ(JJ)
    }

    function wJ(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function WJ(JJ) {
      for (var cJ = 1; cJ < arguments.length; cJ++) {
        var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
        cJ % 2 ? wJ(Object(ZJ), !0).forEach((function(cJ) {
          gJ(JJ, cJ, ZJ[cJ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : wJ(Object(ZJ)).forEach((function(cJ) {
          Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
        }))
      }
      return JJ
    }

    function gJ(JJ, cJ, ZJ) {
      return (cJ = function(JJ) {
        var cJ = function(JJ, cJ) {
          if ("object" != bJ(JJ) || !JJ) return JJ;
          var ZJ = JJ[Symbol.toPrimitive];
          if (void 0 !== ZJ) {
            var FJ = ZJ.call(JJ, cJ || "default");
            if ("object" != bJ(FJ)) return FJ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === cJ ? String : Number)(JJ)
        }(JJ, "string");
        return "symbol" == bJ(cJ) ? cJ : cJ + ""
      }(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }
    var HJ = ["Webkit", "Moz", "O", "ms"];

    function PJ(JJ) {
      return PJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, PJ(JJ)
    }

    function kJ() {
      return kJ = Object.assign ? Object.assign.bind() : function(JJ) {
        for (var cJ = 1; cJ < arguments.length; cJ++) {
          var ZJ = arguments[cJ];
          for (var FJ in ZJ) Object.prototype.hasOwnProperty.call(ZJ, FJ) && (JJ[FJ] = ZJ[FJ])
        }
        return JJ
      }, kJ.apply(this, arguments)
    }

    function pJ(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function dJ(JJ) {
      for (var cJ = 1; cJ < arguments.length; cJ++) {
        var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
        cJ % 2 ? pJ(Object(ZJ), !0).forEach((function(cJ) {
          uJ(JJ, cJ, ZJ[cJ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : pJ(Object(ZJ)).forEach((function(cJ) {
          Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
        }))
      }
      return JJ
    }

    function zJ(JJ, cJ) {
      for (var ZJ = 0; ZJ < cJ.length; ZJ++) {
        var FJ = cJ[ZJ];
        FJ.enumerable = FJ.enumerable || !1, FJ.configurable = !0, "value" in FJ && (FJ.writable = !0), Object.defineProperty(JJ, iJ(FJ.key), FJ)
      }
    }

    function NJ(JJ, cJ, ZJ) {
      return cJ = TJ(cJ),
        function(JJ, cJ) {
          if (cJ && ("object" === PJ(cJ) || "function" === typeof cJ)) return cJ;
          if (void 0 !== cJ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(JJ) {
            if (void 0 === JJ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return JJ
          }(JJ)
        }(JJ, OJ() ? Reflect.construct(cJ, ZJ || [], TJ(JJ).constructor) : cJ.apply(JJ, ZJ))
    }

    function OJ() {
      try {
        var JJ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (JJ) {}
      return (OJ = function() {
        return !!JJ
      })()
    }

    function TJ(JJ) {
      return TJ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(JJ) {
        return JJ.__proto__ || Object.getPrototypeOf(JJ)
      }, TJ(JJ)
    }

    function CJ(JJ, cJ) {
      return CJ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(JJ, cJ) {
        return JJ.__proto__ = cJ, JJ
      }, CJ(JJ, cJ)
    }

    function uJ(JJ, cJ, ZJ) {
      return (cJ = iJ(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }

    function iJ(JJ) {
      var cJ = function(JJ, cJ) {
        if ("object" != PJ(JJ) || !JJ) return JJ;
        var ZJ = JJ[Symbol.toPrimitive];
        if (void 0 !== ZJ) {
          var FJ = ZJ.call(JJ, cJ || "default");
          if ("object" != PJ(FJ)) return FJ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === cJ ? String : Number)(JJ)
      }(JJ, "string");
      return "symbol" == PJ(cJ) ? cJ : cJ + ""
    }
    var RJ = function(JJ) {
        return JJ.changedTouches && !!JJ.changedTouches.length
      },
      LJ = function(JJ) {
        function cJ(JJ) {
          var ZJ;
          return function(JJ, cJ) {
            if (!(JJ instanceof cJ)) throw new TypeError("Cannot call a class as a function")
          }(this, cJ), uJ(ZJ = NJ(this, cJ, [JJ]), "handleDrag", (function(JJ) {
            ZJ.leaveTimer && (clearTimeout(ZJ.leaveTimer), ZJ.leaveTimer = null), ZJ.state.isTravellerMoving ? ZJ.handleTravellerMove(JJ) : ZJ.state.isSlideMoving && ZJ.handleSlideDrag(JJ)
          })), uJ(ZJ, "handleTouchMove", (function(JJ) {
            null != JJ.changedTouches && JJ.changedTouches.length > 0 && ZJ.handleDrag(JJ.changedTouches[0])
          })), uJ(ZJ, "handleDragEnd", (function() {
            ZJ.setState({
              isTravellerMoving: !1,
              isSlideMoving: !1
            }, (function() {
              var JJ = ZJ.props,
                cJ = JJ.endIndex,
                FJ = JJ.onDragEnd,
                UJ = JJ.startIndex;
              null === FJ || void 0 === FJ || FJ({
                endIndex: cJ,
                startIndex: UJ
              })
            })), ZJ.detachDragEndListener()
          })), uJ(ZJ, "handleLeaveWrapper", (function() {
            (ZJ.state.isTravellerMoving || ZJ.state.isSlideMoving) && (ZJ.leaveTimer = window.setTimeout(ZJ.handleDragEnd, ZJ.props.leaveTimeOut))
          })), uJ(ZJ, "handleEnterSlideOrTraveller", (function() {
            ZJ.setState({
              isTextActive: !0
            })
          })), uJ(ZJ, "handleLeaveSlideOrTraveller", (function() {
            ZJ.setState({
              isTextActive: !1
            })
          })), uJ(ZJ, "handleSlideDragStart", (function(JJ) {
            var cJ = RJ(JJ) ? JJ.changedTouches[0] : JJ;
            ZJ.setState({
              isTravellerMoving: !1,
              isSlideMoving: !0,
              slideMoveStartX: cJ.pageX
            }), ZJ.attachDragEndListener()
          })), ZJ.travellerDragStartHandlers = {
            startX: ZJ.handleTravellerDragStart.bind(ZJ, "startX"),
            endX: ZJ.handleTravellerDragStart.bind(ZJ, "endX")
          }, ZJ.state = {}, ZJ
        }
        return function(JJ, cJ) {
          if ("function" !== typeof cJ && null !== cJ) throw new TypeError("Super expression must either be null or a function");
          JJ.prototype = Object.create(cJ && cJ.prototype, {
            constructor: {
              value: JJ,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(JJ, "prototype", {
            writable: !1
          }), cJ && CJ(JJ, cJ)
        }(cJ, JJ), ZJ = cJ, UJ = [{
          key: "componentWillUnmount",
          value: function() {
            this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener()
          }
        }, {
          key: "getIndex",
          value: function(JJ) {
            var ZJ = JJ.startX,
              FJ = JJ.endX,
              UJ = this.state.scaleValues,
              eJ = this.props,
              XJ = eJ.gap,
              AJ = eJ.data.length - 1,
              qJ = Math.min(ZJ, FJ),
              jJ = Math.max(ZJ, FJ),
              YJ = cJ.getIndexInRange(UJ, qJ),
              hJ = cJ.getIndexInRange(UJ, jJ);
            return {
              startIndex: YJ - YJ % XJ,
              endIndex: hJ === AJ ? AJ : hJ - hJ % XJ
            }
          }
        }, {
          key: "getTextOfTick",
          value: function(JJ) {
            var cJ = this.props,
              ZJ = cJ.data,
              FJ = cJ.tickFormatter,
              UJ = cJ.dataKey,
              eJ = (0, IJ.eb)(ZJ[JJ], UJ, JJ);
            return AJ()(FJ) ? FJ(eJ, JJ) : eJ
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
          value: function(JJ) {
            var cJ = this.state,
              ZJ = cJ.slideMoveStartX,
              FJ = cJ.startX,
              UJ = cJ.endX,
              eJ = this.props,
              XJ = eJ.x,
              AJ = eJ.width,
              qJ = eJ.travellerWidth,
              jJ = eJ.startIndex,
              YJ = eJ.endIndex,
              hJ = eJ.onChange,
              DJ = JJ.pageX - ZJ;
            DJ > 0 ? DJ = Math.min(DJ, XJ + AJ - qJ - UJ, XJ + AJ - qJ - FJ) : DJ < 0 && (DJ = Math.max(DJ, XJ - FJ, XJ - UJ));
            var sJ = this.getIndex({
              startX: FJ + DJ,
              endX: UJ + DJ
            });
            sJ.startIndex === jJ && sJ.endIndex === YJ || !hJ || hJ(sJ), this.setState({
              startX: FJ + DJ,
              endX: UJ + DJ,
              slideMoveStartX: JJ.pageX
            })
          }
        }, {
          key: "handleTravellerDragStart",
          value: function(JJ, cJ) {
            var ZJ = RJ(cJ) ? cJ.changedTouches[0] : cJ;
            this.setState({
              isSlideMoving: !1,
              isTravellerMoving: !0,
              movingTravellerId: JJ,
              brushMoveStartX: ZJ.pageX
            }), this.attachDragEndListener()
          }
        }, {
          key: "handleTravellerMove",
          value: function(JJ) {
            var cJ = this.state,
              ZJ = cJ.brushMoveStartX,
              FJ = cJ.movingTravellerId,
              UJ = cJ.endX,
              eJ = cJ.startX,
              XJ = this.state[FJ],
              AJ = this.props,
              qJ = AJ.x,
              jJ = AJ.width,
              YJ = AJ.travellerWidth,
              hJ = AJ.onChange,
              DJ = AJ.gap,
              sJ = AJ.data,
              nJ = {
                startX: this.state.startX,
                endX: this.state.endX
              },
              GJ = JJ.pageX - ZJ;
            GJ > 0 ? GJ = Math.min(GJ, qJ + jJ - YJ - XJ) : GJ < 0 && (GJ = Math.max(GJ, qJ - XJ)), nJ[FJ] = XJ + GJ;
            var fJ = this.getIndex(nJ),
              xJ = fJ.startIndex,
              rJ = fJ.endIndex;
            this.setState(uJ(uJ({}, FJ, XJ + GJ), "brushMoveStartX", JJ.pageX), (function() {
              hJ && function() {
                var JJ = sJ.length - 1;
                return "startX" === FJ && (UJ > eJ ? xJ % DJ === 0 : rJ % DJ === 0) || UJ < eJ && rJ === JJ || "endX" === FJ && (UJ > eJ ? rJ % DJ === 0 : xJ % DJ === 0) || UJ > eJ && rJ === JJ
              }() && hJ(fJ)
            }))
          }
        }, {
          key: "handleTravellerMoveKeyboard",
          value: function(JJ, cJ) {
            var ZJ = this,
              FJ = this.state,
              UJ = FJ.scaleValues,
              eJ = FJ.startX,
              XJ = FJ.endX,
              AJ = this.state[cJ],
              qJ = UJ.indexOf(AJ);
            if (-1 !== qJ) {
              var jJ = qJ + JJ;
              if (!(-1 === jJ || jJ >= UJ.length)) {
                var YJ = UJ[jJ];
                "startX" === cJ && YJ >= XJ || "endX" === cJ && YJ <= eJ || this.setState(uJ({}, cJ, YJ), (function() {
                  ZJ.props.onChange(ZJ.getIndex({
                    startX: ZJ.state.startX,
                    endX: ZJ.state.endX
                  }))
                }))
              }
            }
          }
        }, {
          key: "renderBackground",
          value: function() {
            var JJ = this.props,
              cJ = JJ.x,
              ZJ = JJ.y,
              UJ = JJ.width,
              eJ = JJ.height,
              XJ = JJ.fill,
              AJ = JJ.stroke;
            return FJ.createElement("rect", {
              stroke: AJ,
              fill: XJ,
              x: cJ,
              y: ZJ,
              width: UJ,
              height: eJ
            })
          }
        }, {
          key: "renderPanorama",
          value: function() {
            var JJ = this.props,
              cJ = JJ.x,
              ZJ = JJ.y,
              UJ = JJ.width,
              eJ = JJ.height,
              XJ = JJ.data,
              AJ = JJ.children,
              qJ = JJ.padding,
              jJ = FJ.Children.only(AJ);
            return jJ ? FJ.cloneElement(jJ, {
              x: cJ,
              y: ZJ,
              width: UJ,
              height: eJ,
              margin: qJ,
              compact: !0,
              data: XJ
            }) : null
          }
        }, {
          key: "renderTravellerLayer",
          value: function(JJ, ZJ) {
            var UJ, eJ, XJ = this,
              AJ = this.props,
              qJ = AJ.y,
              jJ = AJ.travellerWidth,
              YJ = AJ.height,
              hJ = AJ.traveller,
              DJ = AJ.ariaLabel,
              sJ = AJ.data,
              nJ = AJ.startIndex,
              GJ = AJ.endIndex,
              fJ = Math.max(JJ, this.props.x),
              xJ = dJ(dJ({}, (0, KJ.c)(this.props, !1)), {}, {
                x: fJ,
                y: qJ,
                width: jJ,
                height: YJ
              }),
              rJ = DJ || "Min value: ".concat(null === (UJ = sJ[nJ]) || void 0 === UJ ? void 0 : UJ.name, ", Max value: ").concat(null === (eJ = sJ[GJ]) || void 0 === eJ ? void 0 : eJ.name);
            return FJ.createElement(vJ.e, {
              tabIndex: 0,
              role: "slider",
              "aria-label": rJ,
              "aria-valuenow": JJ,
              className: "recharts-brush-traveller",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.travellerDragStartHandlers[ZJ],
              onTouchStart: this.travellerDragStartHandlers[ZJ],
              onKeyDown: function(JJ) {
                ["ArrowLeft", "ArrowRight"].includes(JJ.key) && (JJ.preventDefault(), JJ.stopPropagation(), XJ.handleTravellerMoveKeyboard("ArrowRight" === JJ.key ? 1 : -1, ZJ))
              },
              onFocus: function() {
                XJ.setState({
                  isTravellerFocused: !0
                })
              },
              onBlur: function() {
                XJ.setState({
                  isTravellerFocused: !1
                })
              },
              style: {
                cursor: "col-resize"
              }
            }, cJ.renderTraveller(hJ, xJ))
          }
        }, {
          key: "renderSlide",
          value: function(JJ, cJ) {
            var ZJ = this.props,
              UJ = ZJ.y,
              eJ = ZJ.height,
              XJ = ZJ.stroke,
              AJ = ZJ.travellerWidth,
              qJ = Math.min(JJ, cJ) + AJ,
              jJ = Math.max(Math.abs(cJ - JJ) - AJ, 0);
            return FJ.createElement("rect", {
              className: "recharts-brush-slide",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.handleSlideDragStart,
              onTouchStart: this.handleSlideDragStart,
              style: {
                cursor: "move"
              },
              stroke: "none",
              fill: XJ,
              fillOpacity: .2,
              x: qJ,
              y: UJ,
              width: jJ,
              height: eJ
            })
          }
        }, {
          key: "renderText",
          value: function() {
            var JJ = this.props,
              cJ = JJ.startIndex,
              ZJ = JJ.endIndex,
              UJ = JJ.y,
              eJ = JJ.height,
              XJ = JJ.travellerWidth,
              AJ = JJ.stroke,
              qJ = this.state,
              jJ = qJ.startX,
              YJ = qJ.endX,
              hJ = {
                pointerEvents: "none",
                fill: AJ
              };
            return FJ.createElement(vJ.e, {
              className: "recharts-brush-texts"
            }, FJ.createElement(SJ.e, kJ({
              textAnchor: "end",
              verticalAnchor: "middle",
              x: Math.min(jJ, YJ) - 5,
              y: UJ + eJ / 2
            }, hJ), this.getTextOfTick(cJ)), FJ.createElement(SJ.e, kJ({
              textAnchor: "start",
              verticalAnchor: "middle",
              x: Math.max(jJ, YJ) + XJ + 5,
              y: UJ + eJ / 2
            }, hJ), this.getTextOfTick(ZJ)))
          }
        }, {
          key: "render",
          value: function() {
            var JJ = this.props,
              cJ = JJ.data,
              ZJ = JJ.className,
              UJ = JJ.children,
              eJ = JJ.x,
              XJ = JJ.y,
              AJ = JJ.width,
              qJ = JJ.height,
              jJ = JJ.alwaysShowText,
              YJ = this.state,
              hJ = YJ.startX,
              DJ = YJ.endX,
              sJ = YJ.isTextActive,
              nJ = YJ.isSlideMoving,
              GJ = YJ.isTravellerMoving,
              xJ = YJ.isTravellerFocused;
            if (!cJ || !cJ.length || !(0, MJ.C)(eJ) || !(0, MJ.C)(XJ) || !(0, MJ.C)(AJ) || !(0, MJ.C)(qJ) || AJ <= 0 || qJ <= 0) return null;
            var rJ = (0, fJ.d)("recharts-brush", ZJ),
              mJ = 1 === FJ.Children.count(UJ),
              QJ = function(JJ, cJ) {
                if (!JJ) return null;
                var ZJ = JJ.replace(/(\w)/, (function(JJ) {
                    return JJ.toUpperCase()
                  })),
                  FJ = HJ.reduce((function(JJ, FJ) {
                    return WJ(WJ({}, JJ), {}, gJ({}, FJ + ZJ, cJ))
                  }), {});
                return FJ[JJ] = cJ, FJ
              }("userSelect", "none");
            return FJ.createElement(vJ.e, {
              className: rJ,
              onMouseLeave: this.handleLeaveWrapper,
              onTouchMove: this.handleTouchMove,
              style: QJ
            }, this.renderBackground(), mJ && this.renderPanorama(), this.renderSlide(hJ, DJ), this.renderTravellerLayer(hJ, "startX"), this.renderTravellerLayer(DJ, "endX"), (sJ || nJ || GJ || xJ || jJ) && this.renderText())
          }
        }], eJ = [{
          key: "renderDefaultTraveller",
          value: function(JJ) {
            var cJ = JJ.x,
              ZJ = JJ.y,
              UJ = JJ.width,
              eJ = JJ.height,
              XJ = JJ.stroke,
              AJ = Math.floor(ZJ + eJ / 2) - 1;
            return FJ.createElement(FJ.Fragment, null, FJ.createElement("rect", {
              x: cJ,
              y: ZJ,
              width: UJ,
              height: eJ,
              fill: XJ,
              stroke: "none"
            }), FJ.createElement("line", {
              x1: cJ + 1,
              y1: AJ,
              x2: cJ + UJ - 1,
              y2: AJ,
              fill: "none",
              stroke: "#fff"
            }), FJ.createElement("line", {
              x1: cJ + 1,
              y1: AJ + 2,
              x2: cJ + UJ - 1,
              y2: AJ + 2,
              fill: "none",
              stroke: "#fff"
            }))
          }
        }, {
          key: "renderTraveller",
          value: function(JJ, ZJ) {
            return FJ.isValidElement(JJ) ? FJ.cloneElement(JJ, ZJ) : AJ()(JJ) ? JJ(ZJ) : cJ.renderDefaultTraveller(ZJ)
          }
        }, {
          key: "getDerivedStateFromProps",
          value: function(JJ, cJ) {
            var ZJ = JJ.data,
              FJ = JJ.width,
              UJ = JJ.x,
              eJ = JJ.travellerWidth,
              XJ = JJ.updateId,
              AJ = JJ.startIndex,
              qJ = JJ.endIndex;
            if (ZJ !== cJ.prevData || XJ !== cJ.prevUpdateId) return dJ({
              prevData: ZJ,
              prevTravellerWidth: eJ,
              prevUpdateId: XJ,
              prevX: UJ,
              prevWidth: FJ
            }, ZJ && ZJ.length ? function(JJ) {
              var cJ = JJ.data,
                ZJ = JJ.startIndex,
                FJ = JJ.endIndex,
                UJ = JJ.x,
                eJ = JJ.width,
                XJ = JJ.travellerWidth;
              if (!cJ || !cJ.length) return {};
              var AJ = cJ.length,
                qJ = (0, yJ.d)().domain(jJ()(0, AJ)).range([UJ, UJ + eJ - XJ]),
                YJ = qJ.domain().map((function(JJ) {
                  return qJ(JJ)
                }));
              return {
                isTextActive: !1,
                isSlideMoving: !1,
                isTravellerMoving: !1,
                isTravellerFocused: !1,
                startX: qJ(ZJ),
                endX: qJ(FJ),
                scale: qJ,
                scaleValues: YJ
              }
            }({
              data: ZJ,
              width: FJ,
              x: UJ,
              travellerWidth: eJ,
              startIndex: AJ,
              endIndex: qJ
            }) : {
              scale: null,
              scaleValues: null
            });
            if (cJ.scale && (FJ !== cJ.prevWidth || UJ !== cJ.prevX || eJ !== cJ.prevTravellerWidth)) {
              cJ.scale.range([UJ, UJ + FJ - eJ]);
              var YJ = cJ.scale.domain().map((function(JJ) {
                return cJ.scale(JJ)
              }));
              return {
                prevData: ZJ,
                prevTravellerWidth: eJ,
                prevUpdateId: XJ,
                prevX: UJ,
                prevWidth: FJ,
                startX: cJ.scale(JJ.startIndex),
                endX: cJ.scale(JJ.endIndex),
                scaleValues: YJ
              }
            }
            return null
          }
        }, {
          key: "getIndexInRange",
          value: function(JJ, cJ) {
            for (var ZJ = 0, FJ = JJ.length - 1; FJ - ZJ > 1;) {
              var UJ = Math.floor((ZJ + FJ) / 2);
              JJ[UJ] > cJ ? FJ = UJ : ZJ = UJ
            }
            return cJ >= JJ[FJ] ? FJ : ZJ
          }
        }], UJ && zJ(ZJ.prototype, UJ), eJ && zJ(ZJ, eJ), Object.defineProperty(ZJ, "prototype", {
          writable: !1
        }), ZJ;
        var ZJ, UJ, eJ
      }(FJ.PureComponent);
    uJ(LJ, "displayName", "Brush"), uJ(LJ, "defaultProps", {
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
    var aJ = ZJ(5490),
      BJ = ZJ(5575),
      tJ = ZJ(5585),
      oJ = ZJ(5598),
      lJ = ZJ(5601),
      Jc = ZJ(4794);

    function cc() {
      return cc = Object.assign ? Object.assign.bind() : function(JJ) {
        for (var cJ = 1; cJ < arguments.length; cJ++) {
          var ZJ = arguments[cJ];
          for (var FJ in ZJ) Object.prototype.hasOwnProperty.call(ZJ, FJ) && (JJ[FJ] = ZJ[FJ])
        }
        return JJ
      }, cc.apply(this, arguments)
    }

    function Zc(JJ) {
      return Zc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, Zc(JJ)
    }

    function Fc(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function Uc(JJ) {
      for (var cJ = 1; cJ < arguments.length; cJ++) {
        var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
        cJ % 2 ? Fc(Object(ZJ), !0).forEach((function(cJ) {
          Yc(JJ, cJ, ZJ[cJ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : Fc(Object(ZJ)).forEach((function(cJ) {
          Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
        }))
      }
      return JJ
    }

    function ec(JJ, cJ) {
      for (var ZJ = 0; ZJ < cJ.length; ZJ++) {
        var FJ = cJ[ZJ];
        FJ.enumerable = FJ.enumerable || !1, FJ.configurable = !0, "value" in FJ && (FJ.writable = !0), Object.defineProperty(JJ, hc(FJ.key), FJ)
      }
    }

    function Xc(JJ, cJ, ZJ) {
      return cJ = qc(cJ),
        function(JJ, cJ) {
          if (cJ && ("object" === Zc(cJ) || "function" === typeof cJ)) return cJ;
          if (void 0 !== cJ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(JJ) {
            if (void 0 === JJ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return JJ
          }(JJ)
        }(JJ, Ac() ? Reflect.construct(cJ, ZJ || [], qc(JJ).constructor) : cJ.apply(JJ, ZJ))
    }

    function Ac() {
      try {
        var JJ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (JJ) {}
      return (Ac = function() {
        return !!JJ
      })()
    }

    function qc(JJ) {
      return qc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(JJ) {
        return JJ.__proto__ || Object.getPrototypeOf(JJ)
      }, qc(JJ)
    }

    function jc(JJ, cJ) {
      return jc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(JJ, cJ) {
        return JJ.__proto__ = cJ, JJ
      }, jc(JJ, cJ)
    }

    function Yc(JJ, cJ, ZJ) {
      return (cJ = hc(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }

    function hc(JJ) {
      var cJ = function(JJ, cJ) {
        if ("object" != Zc(JJ) || !JJ) return JJ;
        var ZJ = JJ[Symbol.toPrimitive];
        if (void 0 !== ZJ) {
          var FJ = ZJ.call(JJ, cJ || "default");
          if ("object" != Zc(FJ)) return FJ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === cJ ? String : Number)(JJ)
      }(JJ, "string");
      return "symbol" == Zc(cJ) ? cJ : cJ + ""
    }
    var Dc = function(JJ) {
      function cJ() {
        return function(JJ, cJ) {
          if (!(JJ instanceof cJ)) throw new TypeError("Cannot call a class as a function")
        }(this, cJ), Xc(this, cJ, arguments)
      }
      return function(JJ, cJ) {
        if ("function" !== typeof cJ && null !== cJ) throw new TypeError("Super expression must either be null or a function");
        JJ.prototype = Object.create(cJ && cJ.prototype, {
          constructor: {
            value: JJ,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(JJ, "prototype", {
          writable: !1
        }), cJ && jc(JJ, cJ)
      }(cJ, JJ), ZJ = cJ, (UJ = [{
        key: "render",
        value: function() {
          var JJ = this.props,
            ZJ = JJ.x,
            UJ = JJ.y,
            eJ = JJ.r,
            XJ = JJ.alwaysShow,
            AJ = JJ.clipPathId,
            qJ = (0, MJ.y)(ZJ),
            jJ = (0, MJ.y)(UJ);
          if ((0, Jc.e)(void 0 === XJ, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !qJ || !jJ) return null;
          var YJ = function(JJ) {
            var cJ = JJ.x,
              ZJ = JJ.y,
              FJ = JJ.xAxis,
              UJ = JJ.yAxis,
              eJ = (0, lJ.d)({
                x: FJ.scale,
                y: UJ.scale
              }),
              XJ = eJ.apply({
                x: cJ,
                y: ZJ
              }, {
                bandAware: !0
              });
            return (0, oJ.c)(JJ, "discard") && !eJ.isInRange(XJ) ? null : XJ
          }(this.props);
          if (!YJ) return null;
          var hJ = YJ.x,
            DJ = YJ.y,
            sJ = this.props,
            nJ = sJ.shape,
            GJ = sJ.className,
            xJ = Uc(Uc({
              clipPath: (0, oJ.c)(this.props, "hidden") ? "url(#".concat(AJ, ")") : void 0
            }, (0, KJ.c)(this.props, !0)), {}, {
              cx: hJ,
              cy: DJ
            });
          return FJ.createElement(vJ.e, {
            className: (0, fJ.d)("recharts-reference-dot", GJ)
          }, cJ.renderDot(nJ, xJ), tJ.d.renderCallByParent(this.props, {
            x: hJ - eJ,
            y: DJ - eJ,
            width: 2 * eJ,
            height: 2 * eJ
          }))
        }
      }]) && ec(ZJ.prototype, UJ), eJ && ec(ZJ, eJ), Object.defineProperty(ZJ, "prototype", {
        writable: !1
      }), ZJ;
      var ZJ, UJ, eJ
    }(FJ.Component);
    Yc(Dc, "displayName", "ReferenceDot"), Yc(Dc, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#fff",
      stroke: "#ccc",
      fillOpacity: 1,
      strokeWidth: 1
    }), Yc(Dc, "renderDot", (function(JJ, cJ) {
      return FJ.isValidElement(JJ) ? FJ.cloneElement(JJ, cJ) : AJ()(JJ) ? JJ(cJ) : FJ.createElement(EJ.c, cc({}, cJ, {
        cx: cJ.cx,
        cy: cJ.cy,
        className: "recharts-reference-dot-dot"
      }))
    }));
    var sc = ZJ(5690);

    function nc() {
      return nc = Object.assign ? Object.assign.bind() : function(JJ) {
        for (var cJ = 1; cJ < arguments.length; cJ++) {
          var ZJ = arguments[cJ];
          for (var FJ in ZJ) Object.prototype.hasOwnProperty.call(ZJ, FJ) && (JJ[FJ] = ZJ[FJ])
        }
        return JJ
      }, nc.apply(this, arguments)
    }

    function Gc(JJ) {
      return Gc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, Gc(JJ)
    }

    function fc(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function xc(JJ) {
      for (var cJ = 1; cJ < arguments.length; cJ++) {
        var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
        cJ % 2 ? fc(Object(ZJ), !0).forEach((function(cJ) {
          Vc(JJ, cJ, ZJ[cJ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : fc(Object(ZJ)).forEach((function(cJ) {
          Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
        }))
      }
      return JJ
    }

    function rc(JJ, cJ) {
      for (var ZJ = 0; ZJ < cJ.length; ZJ++) {
        var FJ = cJ[ZJ];
        FJ.enumerable = FJ.enumerable || !1, FJ.configurable = !0, "value" in FJ && (FJ.writable = !0), Object.defineProperty(JJ, Kc(FJ.key), FJ)
      }
    }

    function vc(JJ, cJ, ZJ) {
      return cJ = Qc(cJ),
        function(JJ, cJ) {
          if (cJ && ("object" === Gc(cJ) || "function" === typeof cJ)) return cJ;
          if (void 0 !== cJ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(JJ) {
            if (void 0 === JJ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return JJ
          }(JJ)
        }(JJ, mc() ? Reflect.construct(cJ, ZJ || [], Qc(JJ).constructor) : cJ.apply(JJ, ZJ))
    }

    function mc() {
      try {
        var JJ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (JJ) {}
      return (mc = function() {
        return !!JJ
      })()
    }

    function Qc(JJ) {
      return Qc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(JJ) {
        return JJ.__proto__ || Object.getPrototypeOf(JJ)
      }, Qc(JJ)
    }

    function Ec(JJ, cJ) {
      return Ec = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(JJ, cJ) {
        return JJ.__proto__ = cJ, JJ
      }, Ec(JJ, cJ)
    }

    function Vc(JJ, cJ, ZJ) {
      return (cJ = Kc(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }

    function Kc(JJ) {
      var cJ = function(JJ, cJ) {
        if ("object" != Gc(JJ) || !JJ) return JJ;
        var ZJ = JJ[Symbol.toPrimitive];
        if (void 0 !== ZJ) {
          var FJ = ZJ.call(JJ, cJ || "default");
          if ("object" != Gc(FJ)) return FJ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === cJ ? String : Number)(JJ)
      }(JJ, "string");
      return "symbol" == Gc(cJ) ? cJ : cJ + ""
    }
    var yc = function(JJ) {
      function cJ() {
        return function(JJ, cJ) {
          if (!(JJ instanceof cJ)) throw new TypeError("Cannot call a class as a function")
        }(this, cJ), vc(this, cJ, arguments)
      }
      return function(JJ, cJ) {
        if ("function" !== typeof cJ && null !== cJ) throw new TypeError("Super expression must either be null or a function");
        JJ.prototype = Object.create(cJ && cJ.prototype, {
          constructor: {
            value: JJ,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(JJ, "prototype", {
          writable: !1
        }), cJ && Ec(JJ, cJ)
      }(cJ, JJ), ZJ = cJ, (UJ = [{
        key: "render",
        value: function() {
          var JJ = this.props,
            ZJ = JJ.x1,
            UJ = JJ.x2,
            eJ = JJ.y1,
            XJ = JJ.y2,
            AJ = JJ.className,
            qJ = JJ.alwaysShow,
            jJ = JJ.clipPathId;
          (0, Jc.e)(void 0 === qJ, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
          var YJ = (0, MJ.y)(ZJ),
            hJ = (0, MJ.y)(UJ),
            DJ = (0, MJ.y)(eJ),
            sJ = (0, MJ.y)(XJ),
            nJ = this.props.shape;
          if (!YJ && !hJ && !DJ && !sJ && !nJ) return null;
          var GJ = function(JJ, cJ, ZJ, FJ, UJ) {
            var eJ = UJ.x1,
              XJ = UJ.x2,
              AJ = UJ.y1,
              qJ = UJ.y2,
              jJ = UJ.xAxis,
              YJ = UJ.yAxis;
            if (!jJ || !YJ) return null;
            var hJ = (0, lJ.d)({
                x: jJ.scale,
                y: YJ.scale
              }),
              DJ = {
                x: JJ ? hJ.x.apply(eJ, {
                  position: "start"
                }) : hJ.x.rangeMin,
                y: ZJ ? hJ.y.apply(AJ, {
                  position: "start"
                }) : hJ.y.rangeMin
              },
              sJ = {
                x: cJ ? hJ.x.apply(XJ, {
                  position: "end"
                }) : hJ.x.rangeMax,
                y: FJ ? hJ.y.apply(qJ, {
                  position: "end"
                }) : hJ.y.rangeMax
              };
            return !(0, oJ.c)(UJ, "discard") || hJ.isInRange(DJ) && hJ.isInRange(sJ) ? (0, lJ.o)(DJ, sJ) : null
          }(YJ, hJ, DJ, sJ, this.props);
          if (!GJ && !nJ) return null;
          var xJ = (0, oJ.c)(this.props, "hidden") ? "url(#".concat(jJ, ")") : void 0;
          return FJ.createElement(vJ.e, {
            className: (0, fJ.d)("recharts-reference-area", AJ)
          }, cJ.renderRect(nJ, xc(xc({
            clipPath: xJ
          }, (0, KJ.c)(this.props, !0)), GJ)), tJ.d.renderCallByParent(this.props, GJ))
        }
      }]) && rc(ZJ.prototype, UJ), eJ && rc(ZJ, eJ), Object.defineProperty(ZJ, "prototype", {
        writable: !1
      }), ZJ;
      var ZJ, UJ, eJ
    }(FJ.Component);

    function Sc(JJ) {
      return function(JJ) {
        if (Array.isArray(JJ)) return Ic(JJ)
      }(JJ) || function(JJ) {
        if ("undefined" !== typeof Symbol && null != JJ[Symbol.iterator] || null != JJ["@@iterator"]) return Array.from(JJ)
      }(JJ) || function(JJ, cJ) {
        if (!JJ) return;
        if ("string" === typeof JJ) return Ic(JJ, cJ);
        var ZJ = Object.prototype.toString.call(JJ).slice(8, -1);
        "Object" === ZJ && JJ.constructor && (ZJ = JJ.constructor.name);
        if ("Map" === ZJ || "Set" === ZJ) return Array.from(JJ);
        if ("Arguments" === ZJ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZJ)) return Ic(JJ, cJ)
      }(JJ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Ic(JJ, cJ) {
      (null == cJ || cJ > JJ.length) && (cJ = JJ.length);
      for (var ZJ = 0, FJ = new Array(cJ); ZJ < cJ; ZJ++) FJ[ZJ] = JJ[ZJ];
      return FJ
    }
    Vc(yc, "displayName", "ReferenceArea"), Vc(yc, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#ccc",
      fillOpacity: .5,
      stroke: "none",
      strokeWidth: 1
    }), Vc(yc, "renderRect", (function(JJ, cJ) {
      return FJ.isValidElement(JJ) ? FJ.cloneElement(JJ, cJ) : AJ()(JJ) ? JJ(cJ) : FJ.createElement(VJ.c, nc({}, cJ, {
        className: "recharts-reference-area-rect"
      }))
    }));
    var Mc = function(JJ, cJ, ZJ, FJ, UJ) {
        var eJ = (0, KJ.f)(JJ, sc.e),
          XJ = (0, KJ.f)(JJ, Dc),
          AJ = [].concat(Sc(eJ), Sc(XJ)),
          qJ = (0, KJ.f)(JJ, yc),
          jJ = "".concat(FJ, "Id"),
          YJ = FJ[0],
          hJ = cJ;
        if (AJ.length && (hJ = AJ.reduce((function(JJ, cJ) {
            if (cJ.props[jJ] === ZJ && (0, oJ.c)(cJ.props, "extendDomain") && (0, MJ.C)(cJ.props[YJ])) {
              var FJ = cJ.props[YJ];
              return [Math.min(JJ[0], FJ), Math.max(JJ[1], FJ)]
            }
            return JJ
          }), hJ)), qJ.length) {
          var DJ = "".concat(YJ, "1"),
            sJ = "".concat(YJ, "2");
          hJ = qJ.reduce((function(JJ, cJ) {
            if (cJ.props[jJ] === ZJ && (0, oJ.c)(cJ.props, "extendDomain") && (0, MJ.C)(cJ.props[DJ]) && (0, MJ.C)(cJ.props[sJ])) {
              var FJ = cJ.props[DJ],
                UJ = cJ.props[sJ];
              return [Math.min(JJ[0], FJ, UJ), Math.max(JJ[1], FJ, UJ)]
            }
            return JJ
          }), hJ)
        }
        return UJ && UJ.length && (hJ = UJ.reduce((function(JJ, cJ) {
          return (0, MJ.C)(cJ) ? [Math.min(JJ[0], cJ), Math.max(JJ[1], cJ)] : JJ
        }), hJ)), hJ
      },
      bc = ZJ(5590),
      wc = ZJ(4812),
      Wc = ZJ(25),
      gc = new(ZJ.n(Wc)()),
      Hc = "recharts.syncMouseEvents",
      Pc = ZJ(4817);

    function kc(JJ) {
      return kc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, kc(JJ)
    }

    function pc(JJ, cJ) {
      for (var ZJ = 0; ZJ < cJ.length; ZJ++) {
        var FJ = cJ[ZJ];
        FJ.enumerable = FJ.enumerable || !1, FJ.configurable = !0, "value" in FJ && (FJ.writable = !0), Object.defineProperty(JJ, zc(FJ.key), FJ)
      }
    }

    function dc(JJ, cJ, ZJ) {
      return (cJ = zc(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }

    function zc(JJ) {
      var cJ = function(JJ, cJ) {
        if ("object" != kc(JJ) || !JJ) return JJ;
        var ZJ = JJ[Symbol.toPrimitive];
        if (void 0 !== ZJ) {
          var FJ = ZJ.call(JJ, cJ || "default");
          if ("object" != kc(FJ)) return FJ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === cJ ? String : Number)(JJ)
      }(JJ, "string");
      return "symbol" == kc(cJ) ? cJ : cJ + ""
    }
    var Nc = function() {
      return JJ = function JJ() {
        ! function(JJ, cJ) {
          if (!(JJ instanceof cJ)) throw new TypeError("Cannot call a class as a function")
        }(this, JJ), dc(this, "activeIndex", 0), dc(this, "coordinateList", []), dc(this, "layout", "horizontal")
      }, (cJ = [{
        key: "setDetails",
        value: function(JJ) {
          var cJ, ZJ = JJ.coordinateList,
            FJ = void 0 === ZJ ? null : ZJ,
            UJ = JJ.container,
            eJ = void 0 === UJ ? null : UJ,
            XJ = JJ.layout,
            AJ = void 0 === XJ ? null : XJ,
            qJ = JJ.offset,
            jJ = void 0 === qJ ? null : qJ,
            YJ = JJ.mouseHandlerCallback,
            hJ = void 0 === YJ ? null : YJ;
          this.coordinateList = null !== (cJ = null !== FJ && void 0 !== FJ ? FJ : this.coordinateList) && void 0 !== cJ ? cJ : [], this.container = null !== eJ && void 0 !== eJ ? eJ : this.container, this.layout = null !== AJ && void 0 !== AJ ? AJ : this.layout, this.offset = null !== jJ && void 0 !== jJ ? jJ : this.offset, this.mouseHandlerCallback = null !== hJ && void 0 !== hJ ? hJ : this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1)
        }
      }, {
        key: "focus",
        value: function() {
          this.spoofMouse()
        }
      }, {
        key: "keyboardEvent",
        value: function(JJ) {
          if (0 !== this.coordinateList.length) switch (JJ.key) {
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
        value: function(JJ) {
          this.activeIndex = JJ
        }
      }, {
        key: "spoofMouse",
        value: function() {
          var JJ, cJ;
          if ("horizontal" === this.layout && 0 !== this.coordinateList.length) {
            var ZJ = this.container.getBoundingClientRect(),
              FJ = ZJ.x,
              UJ = ZJ.y,
              eJ = ZJ.height,
              XJ = this.coordinateList[this.activeIndex].coordinate,
              AJ = (null === (JJ = window) || void 0 === JJ ? void 0 : JJ.scrollX) || 0,
              qJ = (null === (cJ = window) || void 0 === cJ ? void 0 : cJ.scrollY) || 0,
              jJ = FJ + XJ + AJ,
              YJ = UJ + this.offset.top + eJ / 2 + qJ;
            this.mouseHandlerCallback({
              pageX: jJ,
              pageY: YJ
            })
          }
        }
      }]) && pc(JJ.prototype, cJ), ZJ && pc(JJ, ZJ), Object.defineProperty(JJ, "prototype", {
        writable: !1
      }), JJ;
      var JJ, cJ, ZJ
    }();
    var Oc = ZJ(5662),
      Tc = ZJ(5722);

    function Cc(JJ) {
      return Cc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, Cc(JJ)
    }
    var uc = ["x", "y", "top", "left", "width", "height", "className"];

    function ic() {
      return ic = Object.assign ? Object.assign.bind() : function(JJ) {
        for (var cJ = 1; cJ < arguments.length; cJ++) {
          var ZJ = arguments[cJ];
          for (var FJ in ZJ) Object.prototype.hasOwnProperty.call(ZJ, FJ) && (JJ[FJ] = ZJ[FJ])
        }
        return JJ
      }, ic.apply(this, arguments)
    }

    function Rc(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function Lc(JJ, cJ, ZJ) {
      return (cJ = function(JJ) {
        var cJ = function(JJ, cJ) {
          if ("object" != Cc(JJ) || !JJ) return JJ;
          var ZJ = JJ[Symbol.toPrimitive];
          if (void 0 !== ZJ) {
            var FJ = ZJ.call(JJ, cJ || "default");
            if ("object" != Cc(FJ)) return FJ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === cJ ? String : Number)(JJ)
        }(JJ, "string");
        return "symbol" == Cc(cJ) ? cJ : cJ + ""
      }(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }

    function ac(JJ, cJ) {
      if (null == JJ) return {};
      var ZJ, FJ, UJ = function(JJ, cJ) {
        if (null == JJ) return {};
        var ZJ = {};
        for (var FJ in JJ)
          if (Object.prototype.hasOwnProperty.call(JJ, FJ)) {
            if (cJ.indexOf(FJ) >= 0) continue;
            ZJ[FJ] = JJ[FJ]
          } return ZJ
      }(JJ, cJ);
      if (Object.getOwnPropertySymbols) {
        var eJ = Object.getOwnPropertySymbols(JJ);
        for (FJ = 0; FJ < eJ.length; FJ++) ZJ = eJ[FJ], cJ.indexOf(ZJ) >= 0 || Object.prototype.propertyIsEnumerable.call(JJ, ZJ) && (UJ[ZJ] = JJ[ZJ])
      }
      return UJ
    }
    var Bc = function(JJ, cJ, ZJ, FJ, UJ, eJ) {
        return "M".concat(JJ, ",").concat(UJ, "v").concat(FJ, "M").concat(eJ, ",").concat(cJ, "h").concat(ZJ)
      },
      tc = function(JJ) {
        var cJ = JJ.x,
          ZJ = void 0 === cJ ? 0 : cJ,
          UJ = JJ.y,
          eJ = void 0 === UJ ? 0 : UJ,
          XJ = JJ.top,
          AJ = void 0 === XJ ? 0 : XJ,
          qJ = JJ.left,
          jJ = void 0 === qJ ? 0 : qJ,
          YJ = JJ.width,
          hJ = void 0 === YJ ? 0 : YJ,
          DJ = JJ.height,
          sJ = void 0 === DJ ? 0 : DJ,
          nJ = JJ.className,
          GJ = function(JJ) {
            for (var cJ = 1; cJ < arguments.length; cJ++) {
              var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
              cJ % 2 ? Rc(Object(ZJ), !0).forEach((function(cJ) {
                Lc(JJ, cJ, ZJ[cJ])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : Rc(Object(ZJ)).forEach((function(cJ) {
                Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
              }))
            }
            return JJ
          }({
            x: ZJ,
            y: eJ,
            top: AJ,
            left: jJ,
            width: hJ,
            height: sJ
          }, ac(JJ, uc));
        return (0, MJ.C)(ZJ) && (0, MJ.C)(eJ) && (0, MJ.C)(hJ) && (0, MJ.C)(sJ) && (0, MJ.C)(AJ) && (0, MJ.C)(jJ) ? FJ.createElement("path", ic({}, (0, KJ.c)(GJ, !0), {
          className: (0, fJ.d)("recharts-cross", nJ),
          d: Bc(ZJ, eJ, hJ, sJ, AJ, jJ)
        })) : null
      };

    function oc(JJ) {
      var cJ = JJ.cx,
        ZJ = JJ.cy,
        FJ = JJ.radius,
        UJ = JJ.startAngle,
        eJ = JJ.endAngle;
      return {
        points: [(0, bc.m)(cJ, ZJ, FJ, UJ), (0, bc.m)(cJ, ZJ, FJ, eJ)],
        cx: cJ,
        cy: ZJ,
        radius: FJ,
        startAngle: UJ,
        endAngle: eJ
      }
    }
    var lc = ZJ(5681);

    function JZ(JJ, cJ, ZJ) {
      var FJ, UJ, eJ, XJ;
      if ("horizontal" === JJ) eJ = FJ = cJ.x, UJ = ZJ.top, XJ = ZJ.top + ZJ.height;
      else if ("vertical" === JJ) XJ = UJ = cJ.y, FJ = ZJ.left, eJ = ZJ.left + ZJ.width;
      else if (null != cJ.cx && null != cJ.cy) {
        if ("centric" !== JJ) return oc(cJ);
        var AJ = cJ.cx,
          qJ = cJ.cy,
          jJ = cJ.innerRadius,
          YJ = cJ.outerRadius,
          hJ = cJ.angle,
          DJ = (0, bc.m)(AJ, qJ, jJ, hJ),
          sJ = (0, bc.m)(AJ, qJ, YJ, hJ);
        FJ = DJ.x, UJ = DJ.y, eJ = sJ.x, XJ = sJ.y
      }
      return [{
        x: FJ,
        y: UJ
      }, {
        x: eJ,
        y: XJ
      }]
    }

    function cZ(JJ) {
      return cZ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, cZ(JJ)
    }

    function ZZ(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function FZ(JJ) {
      for (var cJ = 1; cJ < arguments.length; cJ++) {
        var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
        cJ % 2 ? ZZ(Object(ZJ), !0).forEach((function(cJ) {
          UZ(JJ, cJ, ZJ[cJ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : ZZ(Object(ZJ)).forEach((function(cJ) {
          Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
        }))
      }
      return JJ
    }

    function UZ(JJ, cJ, ZJ) {
      return (cJ = function(JJ) {
        var cJ = function(JJ, cJ) {
          if ("object" != cZ(JJ) || !JJ) return JJ;
          var ZJ = JJ[Symbol.toPrimitive];
          if (void 0 !== ZJ) {
            var FJ = ZJ.call(JJ, cJ || "default");
            if ("object" != cZ(FJ)) return FJ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === cJ ? String : Number)(JJ)
        }(JJ, "string");
        return "symbol" == cZ(cJ) ? cJ : cJ + ""
      }(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }

    function eZ(JJ) {
      var cJ, ZJ, UJ, eJ = JJ.element,
        XJ = JJ.tooltipEventType,
        AJ = JJ.isActive,
        qJ = JJ.activeCoordinate,
        jJ = JJ.activePayload,
        YJ = JJ.offset,
        hJ = JJ.activeTooltipIndex,
        DJ = JJ.tooltipAxisBandSize,
        sJ = JJ.layout,
        nJ = JJ.chartName,
        GJ = null !== (cJ = eJ.props.cursor) && void 0 !== cJ ? cJ : null === (ZJ = eJ.type.defaultProps) || void 0 === ZJ ? void 0 : ZJ.cursor;
      if (!eJ || !GJ || !AJ || !qJ || "ScatterChart" !== nJ && "axis" !== XJ) return null;
      var xJ = Tc.e;
      if ("ScatterChart" === nJ) UJ = qJ, xJ = tc;
      else if ("BarChart" === nJ) UJ = function(JJ, cJ, ZJ, FJ) {
        var UJ = FJ / 2;
        return {
          stroke: "none",
          fill: "#ccc",
          x: "horizontal" === JJ ? cJ.x - UJ : ZJ.left + .5,
          y: "horizontal" === JJ ? ZJ.top + .5 : cJ.y - UJ,
          width: "horizontal" === JJ ? FJ : ZJ.width - 1,
          height: "horizontal" === JJ ? ZJ.height - 1 : FJ
        }
      }(sJ, qJ, YJ, DJ), xJ = VJ.c;
      else if ("radial" === sJ) {
        var rJ = oc(qJ),
          vJ = rJ.cx,
          mJ = rJ.cy,
          QJ = rJ.radius;
        UJ = {
          cx: vJ,
          cy: mJ,
          startAngle: rJ.startAngle,
          endAngle: rJ.endAngle,
          innerRadius: QJ,
          outerRadius: QJ
        }, xJ = lc.c
      } else UJ = {
        points: JZ(sJ, qJ, YJ)
      }, xJ = Tc.e;
      var EJ = FZ(FZ(FZ(FZ({
        stroke: "#ccc",
        pointerEvents: "none"
      }, YJ), UJ), (0, KJ.c)(GJ, !1)), {}, {
        payload: jJ,
        payloadIndex: hJ,
        className: (0, fJ.d)("recharts-tooltip-cursor", GJ.className)
      });
      return (0, FJ.isValidElement)(GJ) ? (0, FJ.cloneElement)(GJ, EJ) : (0, FJ.createElement)(xJ, EJ)
    }
    var XZ = ZJ(5698),
      AZ = ["item"],
      qZ = ["children", "className", "width", "height", "style", "compact", "title", "desc"];

    function jZ(JJ) {
      return jZ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, jZ(JJ)
    }

    function YZ() {
      return YZ = Object.assign ? Object.assign.bind() : function(JJ) {
        for (var cJ = 1; cJ < arguments.length; cJ++) {
          var ZJ = arguments[cJ];
          for (var FJ in ZJ) Object.prototype.hasOwnProperty.call(ZJ, FJ) && (JJ[FJ] = ZJ[FJ])
        }
        return JJ
      }, YZ.apply(this, arguments)
    }

    function hZ(JJ, cJ) {
      return function(JJ) {
        if (Array.isArray(JJ)) return JJ
      }(JJ) || function(JJ, cJ) {
        var ZJ = null == JJ ? null : "undefined" != typeof Symbol && JJ[Symbol.iterator] || JJ["@@iterator"];
        if (null != ZJ) {
          var FJ, UJ, eJ, XJ, AJ = [],
            qJ = !0,
            jJ = !1;
          try {
            if (eJ = (ZJ = ZJ.call(JJ)).next, 0 === cJ) {
              if (Object(ZJ) !== ZJ) return;
              qJ = !1
            } else
              for (; !(qJ = (FJ = eJ.call(ZJ)).done) && (AJ.push(FJ.value), AJ.length !== cJ); qJ = !0);
          } catch (JJ) {
            jJ = !0, UJ = JJ
          } finally {
            try {
              if (!qJ && null != ZJ.return && (XJ = ZJ.return(), Object(XJ) !== XJ)) return
            } finally {
              if (jJ) throw UJ
            }
          }
          return AJ
        }
      }(JJ, cJ) || vZ(JJ, cJ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function DZ(JJ, cJ) {
      if (null == JJ) return {};
      var ZJ, FJ, UJ = function(JJ, cJ) {
        if (null == JJ) return {};
        var ZJ = {};
        for (var FJ in JJ)
          if (Object.prototype.hasOwnProperty.call(JJ, FJ)) {
            if (cJ.indexOf(FJ) >= 0) continue;
            ZJ[FJ] = JJ[FJ]
          } return ZJ
      }(JJ, cJ);
      if (Object.getOwnPropertySymbols) {
        var eJ = Object.getOwnPropertySymbols(JJ);
        for (FJ = 0; FJ < eJ.length; FJ++) ZJ = eJ[FJ], cJ.indexOf(ZJ) >= 0 || Object.prototype.propertyIsEnumerable.call(JJ, ZJ) && (UJ[ZJ] = JJ[ZJ])
      }
      return UJ
    }

    function sZ(JJ, cJ) {
      for (var ZJ = 0; ZJ < cJ.length; ZJ++) {
        var FJ = cJ[ZJ];
        FJ.enumerable = FJ.enumerable || !1, FJ.configurable = !0, "value" in FJ && (FJ.writable = !0), Object.defineProperty(JJ, KZ(FJ.key), FJ)
      }
    }

    function nZ(JJ, cJ, ZJ) {
      return cJ = fZ(cJ),
        function(JJ, cJ) {
          if (cJ && ("object" === jZ(cJ) || "function" === typeof cJ)) return cJ;
          if (void 0 !== cJ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(JJ) {
            if (void 0 === JJ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return JJ
          }(JJ)
        }(JJ, GZ() ? Reflect.construct(cJ, ZJ || [], fZ(JJ).constructor) : cJ.apply(JJ, ZJ))
    }

    function GZ() {
      try {
        var JJ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (JJ) {}
      return (GZ = function() {
        return !!JJ
      })()
    }

    function fZ(JJ) {
      return fZ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(JJ) {
        return JJ.__proto__ || Object.getPrototypeOf(JJ)
      }, fZ(JJ)
    }

    function xZ(JJ, cJ) {
      return xZ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(JJ, cJ) {
        return JJ.__proto__ = cJ, JJ
      }, xZ(JJ, cJ)
    }

    function rZ(JJ) {
      return function(JJ) {
        if (Array.isArray(JJ)) return mZ(JJ)
      }(JJ) || function(JJ) {
        if ("undefined" !== typeof Symbol && null != JJ[Symbol.iterator] || null != JJ["@@iterator"]) return Array.from(JJ)
      }(JJ) || vZ(JJ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function vZ(JJ, cJ) {
      if (JJ) {
        if ("string" === typeof JJ) return mZ(JJ, cJ);
        var ZJ = Object.prototype.toString.call(JJ).slice(8, -1);
        return "Object" === ZJ && JJ.constructor && (ZJ = JJ.constructor.name), "Map" === ZJ || "Set" === ZJ ? Array.from(JJ) : "Arguments" === ZJ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZJ) ? mZ(JJ, cJ) : void 0
      }
    }

    function mZ(JJ, cJ) {
      (null == cJ || cJ > JJ.length) && (cJ = JJ.length);
      for (var ZJ = 0, FJ = new Array(cJ); ZJ < cJ; ZJ++) FJ[ZJ] = JJ[ZJ];
      return FJ
    }

    function QZ(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function EZ(JJ) {
      for (var cJ = 1; cJ < arguments.length; cJ++) {
        var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
        cJ % 2 ? QZ(Object(ZJ), !0).forEach((function(cJ) {
          VZ(JJ, cJ, ZJ[cJ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : QZ(Object(ZJ)).forEach((function(cJ) {
          Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
        }))
      }
      return JJ
    }

    function VZ(JJ, cJ, ZJ) {
      return (cJ = KZ(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }

    function KZ(JJ) {
      var cJ = function(JJ, cJ) {
        if ("object" != jZ(JJ) || !JJ) return JJ;
        var ZJ = JJ[Symbol.toPrimitive];
        if (void 0 !== ZJ) {
          var FJ = ZJ.call(JJ, cJ || "default");
          if ("object" != jZ(FJ)) return FJ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === cJ ? String : Number)(JJ)
      }(JJ, "string");
      return "symbol" == jZ(cJ) ? cJ : cJ + ""
    }
    var yZ = {
        xAxis: ["bottom", "top"],
        yAxis: ["left", "right"]
      },
      SZ = {
        width: "100%",
        height: "100%"
      },
      IZ = {
        x: 0,
        y: 0
      };

    function MZ(JJ) {
      return JJ
    }
    var bZ = function(JJ, cJ) {
      var ZJ = cJ.graphicalItems,
        FJ = cJ.dataStartIndex,
        UJ = cJ.dataEndIndex,
        eJ = (null !== ZJ && void 0 !== ZJ ? ZJ : []).reduce((function(JJ, cJ) {
          var ZJ = cJ.props.data;
          return ZJ && ZJ.length ? [].concat(rZ(JJ), rZ(ZJ)) : JJ
        }), []);
      return eJ.length > 0 ? eJ : JJ && JJ.length && (0, MJ.C)(FJ) && (0, MJ.C)(UJ) ? JJ.slice(FJ, UJ + 1) : []
    };

    function wZ(JJ) {
      return "number" === JJ ? [0, "auto"] : void 0
    }
    var WZ = function(JJ, cJ, ZJ, FJ) {
        var UJ = JJ.graphicalItems,
          eJ = JJ.tooltipAxis,
          XJ = bZ(cJ, JJ);
        return ZJ < 0 || !UJ || !UJ.length || ZJ >= XJ.length ? null : UJ.reduce((function(UJ, AJ) {
          var qJ, jJ, YJ = null !== (qJ = AJ.props.data) && void 0 !== qJ ? qJ : cJ;
          if (YJ && JJ.dataStartIndex + JJ.dataEndIndex !== 0 && JJ.dataEndIndex - JJ.dataStartIndex >= ZJ && (YJ = YJ.slice(JJ.dataStartIndex, JJ.dataEndIndex + 1)), eJ.dataKey && !eJ.allowDuplicatedCategory) {
            var hJ = void 0 === YJ ? XJ : YJ;
            jJ = (0, MJ.f)(hJ, eJ.dataKey, FJ)
          } else jJ = YJ && YJ[ZJ] || XJ[ZJ];
          return jJ ? [].concat(rZ(UJ), [(0, IJ.cb)(AJ, jJ)]) : UJ
        }), [])
      },
      gZ = function(JJ, cJ, ZJ, FJ) {
        var UJ = FJ || {
            x: JJ.chartX,
            y: JJ.chartY
          },
          eJ = function(JJ, cJ) {
            return "horizontal" === cJ ? JJ.x : "vertical" === cJ ? JJ.y : "centric" === cJ ? JJ.angle : JJ.radius
          }(UJ, ZJ),
          XJ = JJ.orderedTooltipTicks,
          AJ = JJ.tooltipAxis,
          qJ = JJ.tooltipTicks,
          jJ = (0, IJ.d)(eJ, XJ, qJ, AJ);
        if (jJ >= 0 && qJ) {
          var YJ = qJ[jJ] && qJ[jJ].value,
            hJ = WZ(JJ, cJ, jJ, YJ),
            DJ = function(JJ, cJ, ZJ, FJ) {
              var UJ = cJ.find((function(JJ) {
                return JJ && JJ.index === ZJ
              }));
              if (UJ) {
                if ("horizontal" === JJ) return {
                  x: UJ.coordinate,
                  y: FJ.y
                };
                if ("vertical" === JJ) return {
                  x: FJ.x,
                  y: UJ.coordinate
                };
                if ("centric" === JJ) {
                  var eJ = UJ.coordinate,
                    XJ = FJ.radius;
                  return EZ(EZ(EZ({}, FJ), (0, bc.m)(FJ.cx, FJ.cy, XJ, eJ)), {}, {
                    angle: eJ,
                    radius: XJ
                  })
                }
                var AJ = UJ.coordinate,
                  qJ = FJ.angle;
                return EZ(EZ(EZ({}, FJ), (0, bc.m)(FJ.cx, FJ.cy, AJ, qJ)), {}, {
                  angle: qJ,
                  radius: AJ
                })
              }
              return IZ
            }(ZJ, XJ, jJ, UJ);
          return {
            activeTooltipIndex: jJ,
            activeLabel: YJ,
            activePayload: hJ,
            activeCoordinate: DJ
          }
        }
        return null
      },
      HZ = function(JJ, cJ) {
        var ZJ = cJ.axes,
          FJ = cJ.graphicalItems,
          UJ = cJ.axisType,
          XJ = cJ.axisIdKey,
          AJ = cJ.stackGroups,
          qJ = cJ.dataStartIndex,
          YJ = cJ.dataEndIndex,
          hJ = JJ.layout,
          DJ = JJ.children,
          sJ = JJ.stackOffset,
          nJ = (0, IJ.ib)(hJ, UJ);
        return ZJ.reduce((function(cJ, ZJ) {
          var GJ, fJ = void 0 !== ZJ.type.defaultProps ? EZ(EZ({}, ZJ.type.defaultProps), ZJ.props) : ZJ.props,
            xJ = fJ.type,
            rJ = fJ.dataKey,
            vJ = fJ.allowDataOverflow,
            mJ = fJ.allowDuplicatedCategory,
            QJ = fJ.scale,
            EJ = fJ.ticks,
            VJ = fJ.includeHidden,
            KJ = fJ[XJ];
          if (cJ[KJ]) return cJ;
          var yJ, SJ, bJ, wJ = bZ(JJ.data, {
              graphicalItems: FJ.filter((function(JJ) {
                var cJ;
                return (XJ in JJ.props ? JJ.props[XJ] : null === (cJ = JJ.type.defaultProps) || void 0 === cJ ? void 0 : cJ[XJ]) === KJ
              })),
              dataStartIndex: qJ,
              dataEndIndex: YJ
            }),
            WJ = wJ.length;
          (function(JJ, cJ, ZJ) {
            if ("number" === ZJ && !0 === cJ && Array.isArray(JJ)) {
              var FJ = null === JJ || void 0 === JJ ? void 0 : JJ[0],
                UJ = null === JJ || void 0 === JJ ? void 0 : JJ[1];
              if (FJ && UJ && (0, MJ.C)(FJ) && (0, MJ.C)(UJ)) return !0
            }
            return !1
          })(fJ.domain, vJ, xJ) && (yJ = (0, IJ.rb)(fJ.domain, null, vJ), !nJ || "number" !== xJ && "auto" === QJ || (bJ = (0, IJ.J)(wJ, rJ, "category")));
          var gJ = wZ(xJ);
          if (!yJ || 0 === yJ.length) {
            var HJ, PJ = null !== (HJ = fJ.domain) && void 0 !== HJ ? HJ : gJ;
            if (rJ) {
              if (yJ = (0, IJ.J)(wJ, rJ, xJ), "category" === xJ && nJ) {
                var kJ = (0, MJ.o)(yJ);
                mJ && kJ ? (SJ = yJ, yJ = jJ()(0, WJ)) : mJ || (yJ = (0, IJ.mb)(PJ, yJ, ZJ).reduce((function(JJ, cJ) {
                  return JJ.indexOf(cJ) >= 0 ? JJ : [].concat(rZ(JJ), [cJ])
                }), []))
              } else if ("category" === xJ) yJ = mJ ? yJ.filter((function(JJ) {
                return "" !== JJ && !eJ()(JJ)
              })) : (0, IJ.mb)(PJ, yJ, ZJ).reduce((function(JJ, cJ) {
                return JJ.indexOf(cJ) >= 0 || "" === cJ || eJ()(cJ) ? JJ : [].concat(rZ(JJ), [cJ])
              }), []);
              else if ("number" === xJ) {
                var pJ = (0, IJ.pb)(wJ, FJ.filter((function(JJ) {
                  var cJ, ZJ, FJ = XJ in JJ.props ? JJ.props[XJ] : null === (cJ = JJ.type.defaultProps) || void 0 === cJ ? void 0 : cJ[XJ],
                    UJ = "hide" in JJ.props ? JJ.props.hide : null === (ZJ = JJ.type.defaultProps) || void 0 === ZJ ? void 0 : ZJ.hide;
                  return FJ === KJ && (VJ || !UJ)
                })), rJ, UJ, hJ);
                pJ && (yJ = pJ)
              }!nJ || "number" !== xJ && "auto" === QJ || (bJ = (0, IJ.J)(wJ, rJ, "category"))
            } else yJ = nJ ? jJ()(0, WJ) : AJ && AJ[KJ] && AJ[KJ].hasStack && "number" === xJ ? "expand" === sJ ? [0, 1] : (0, IJ.P)(AJ[KJ].stackGroups, qJ, YJ) : (0, IJ.M)(wJ, FJ.filter((function(JJ) {
              var cJ = XJ in JJ.props ? JJ.props[XJ] : JJ.type.defaultProps[XJ],
                ZJ = "hide" in JJ.props ? JJ.props.hide : JJ.type.defaultProps.hide;
              return cJ === KJ && (VJ || !ZJ)
            })), xJ, hJ, !0);
            if ("number" === xJ) yJ = Mc(DJ, yJ, KJ, UJ, EJ), PJ && (yJ = (0, IJ.rb)(PJ, yJ, vJ));
            else if ("category" === xJ && PJ) {
              var dJ = PJ;
              yJ.every((function(JJ) {
                return dJ.indexOf(JJ) >= 0
              })) && (yJ = dJ)
            }
          }
          return EZ(EZ({}, cJ), {}, VZ({}, KJ, EZ(EZ({}, fJ), {}, {
            axisType: UJ,
            domain: yJ,
            categoricalDomain: bJ,
            duplicateDomain: SJ,
            originalDomain: null !== (GJ = fJ.domain) && void 0 !== GJ ? GJ : gJ,
            isCategorical: nJ,
            layout: hJ
          })))
        }), {})
      },
      PZ = function(JJ, cJ) {
        var ZJ = cJ.axisType,
          FJ = void 0 === ZJ ? "xAxis" : ZJ,
          UJ = cJ.AxisComp,
          eJ = cJ.graphicalItems,
          XJ = cJ.stackGroups,
          AJ = cJ.dataStartIndex,
          qJ = cJ.dataEndIndex,
          YJ = JJ.children,
          DJ = "".concat(FJ, "Id"),
          sJ = (0, KJ.f)(YJ, UJ),
          nJ = {};
        return sJ && sJ.length ? nJ = HZ(JJ, {
          axes: sJ,
          graphicalItems: eJ,
          axisType: FJ,
          axisIdKey: DJ,
          stackGroups: XJ,
          dataStartIndex: AJ,
          dataEndIndex: qJ
        }) : eJ && eJ.length && (nJ = function(JJ, cJ) {
          var ZJ = cJ.graphicalItems,
            FJ = cJ.Axis,
            UJ = cJ.axisType,
            eJ = cJ.axisIdKey,
            XJ = cJ.stackGroups,
            AJ = cJ.dataStartIndex,
            qJ = cJ.dataEndIndex,
            YJ = JJ.layout,
            DJ = JJ.children,
            sJ = bZ(JJ.data, {
              graphicalItems: ZJ,
              dataStartIndex: AJ,
              dataEndIndex: qJ
            }),
            nJ = sJ.length,
            GJ = (0, IJ.ib)(YJ, UJ),
            fJ = -1;
          return ZJ.reduce((function(JJ, cJ) {
            var xJ, rJ = (void 0 !== cJ.type.defaultProps ? EZ(EZ({}, cJ.type.defaultProps), cJ.props) : cJ.props)[eJ],
              vJ = wZ("number");
            return JJ[rJ] ? JJ : (fJ++, GJ ? xJ = jJ()(0, nJ) : XJ && XJ[rJ] && XJ[rJ].hasStack ? (xJ = (0, IJ.P)(XJ[rJ].stackGroups, AJ, qJ), xJ = Mc(DJ, xJ, rJ, UJ)) : (xJ = (0, IJ.rb)(vJ, (0, IJ.M)(sJ, ZJ.filter((function(JJ) {
              var cJ, ZJ, FJ = eJ in JJ.props ? JJ.props[eJ] : null === (cJ = JJ.type.defaultProps) || void 0 === cJ ? void 0 : cJ[eJ],
                UJ = "hide" in JJ.props ? JJ.props.hide : null === (ZJ = JJ.type.defaultProps) || void 0 === ZJ ? void 0 : ZJ.hide;
              return FJ === rJ && !UJ
            })), "number", YJ), FJ.defaultProps.allowDataOverflow), xJ = Mc(DJ, xJ, rJ, UJ)), EZ(EZ({}, JJ), {}, VZ({}, rJ, EZ(EZ({
              axisType: UJ
            }, FJ.defaultProps), {}, {
              hide: !0,
              orientation: hJ()(yZ, "".concat(UJ, ".").concat(fJ % 2), null),
              domain: xJ,
              originalDomain: vJ,
              isCategorical: GJ,
              layout: YJ
            }))))
          }), {})
        }(JJ, {
          Axis: UJ,
          graphicalItems: eJ,
          axisType: FJ,
          axisIdKey: DJ,
          stackGroups: XJ,
          dataStartIndex: AJ,
          dataEndIndex: qJ
        })), nJ
      },
      kZ = function(JJ) {
        var cJ = JJ.children,
          ZJ = JJ.defaultShowTooltip,
          FJ = (0, KJ.g)(cJ, LJ),
          UJ = 0,
          eJ = 0;
        return JJ.data && 0 !== JJ.data.length && (eJ = JJ.data.length - 1), FJ && FJ.props && (FJ.props.startIndex >= 0 && (UJ = FJ.props.startIndex), FJ.props.endIndex >= 0 && (eJ = FJ.props.endIndex)), {
          chartX: 0,
          chartY: 0,
          dataStartIndex: UJ,
          dataEndIndex: eJ,
          activeTooltipIndex: -1,
          isTooltipActive: Boolean(ZJ)
        }
      },
      pZ = function(JJ) {
        return "horizontal" === JJ ? {
          numericAxisName: "yAxis",
          cateAxisName: "xAxis"
        } : "vertical" === JJ ? {
          numericAxisName: "xAxis",
          cateAxisName: "yAxis"
        } : "centric" === JJ ? {
          numericAxisName: "radiusAxis",
          cateAxisName: "angleAxis"
        } : {
          numericAxisName: "angleAxis",
          cateAxisName: "radiusAxis"
        }
      },
      dZ = function(JJ, cJ) {
        return "xAxis" === cJ ? JJ[cJ].width : "yAxis" === cJ ? JJ[cJ].height : void 0
      },
      zZ = function(JJ) {
        var cJ = JJ.chartName,
          ZJ = JJ.GraphicalChild,
          UJ = JJ.defaultTooltipEventType,
          XJ = void 0 === UJ ? "axis" : UJ,
          qJ = JJ.validateTooltipEventTypes,
          jJ = void 0 === qJ ? ["axis"] : qJ,
          YJ = JJ.axisComponents,
          DJ = JJ.legendContent,
          nJ = JJ.formatAxisMap,
          yJ = JJ.defaultProps,
          SJ = function(JJ, cJ) {
            var ZJ = cJ.graphicalItems,
              FJ = cJ.stackGroups,
              UJ = cJ.offset,
              XJ = cJ.updateId,
              AJ = cJ.dataStartIndex,
              qJ = cJ.dataEndIndex,
              jJ = JJ.barSize,
              hJ = JJ.layout,
              DJ = JJ.barGap,
              sJ = JJ.barCategoryGap,
              nJ = JJ.maxBarSize,
              GJ = pZ(hJ),
              fJ = GJ.numericAxisName,
              rJ = GJ.cateAxisName,
              vJ = function(JJ) {
                return !(!JJ || !JJ.length) && JJ.some((function(JJ) {
                  var cJ = (0, KJ.k)(JJ && JJ.type);
                  return cJ && cJ.indexOf("Bar") >= 0
                }))
              }(ZJ),
              mJ = [];
            return ZJ.forEach((function(ZJ, GJ) {
              var QJ = bZ(JJ.data, {
                  graphicalItems: [ZJ],
                  dataStartIndex: AJ,
                  dataEndIndex: qJ
                }),
                EJ = void 0 !== ZJ.type.defaultProps ? EZ(EZ({}, ZJ.type.defaultProps), ZJ.props) : ZJ.props,
                VJ = EJ.dataKey,
                yJ = EJ.maxBarSize,
                SJ = EJ["".concat(fJ, "Id")],
                MJ = EJ["".concat(rJ, "Id")],
                bJ = YJ.reduce((function(JJ, ZJ) {
                  var FJ = cJ["".concat(ZJ.axisType, "Map")],
                    UJ = EJ["".concat(ZJ.axisType, "Id")];
                  FJ && FJ[UJ] || "zAxis" === ZJ.axisType || (0, xJ.b)(!1);
                  var eJ = FJ[UJ];
                  return EZ(EZ({}, JJ), {}, VZ(VZ({}, ZJ.axisType, eJ), "".concat(ZJ.axisType, "Ticks"), (0, IJ.X)(eJ)))
                }), {}),
                wJ = bJ[rJ],
                WJ = bJ["".concat(rJ, "Ticks")],
                gJ = FJ && FJ[SJ] && FJ[SJ].hasStack && (0, IJ.V)(ZJ, FJ[SJ].stackGroups),
                HJ = (0, KJ.k)(ZJ.type).indexOf("Bar") >= 0,
                PJ = (0, IJ.n)(wJ, WJ),
                kJ = [],
                pJ = vJ && (0, IJ.u)({
                  barSize: jJ,
                  stackGroups: FJ,
                  totalSize: dZ(bJ, rJ)
                });
              if (HJ) {
                var dJ, zJ, NJ = eJ()(yJ) ? nJ : yJ,
                  OJ = null !== (dJ = null !== (zJ = (0, IJ.n)(wJ, WJ, !0)) && void 0 !== zJ ? zJ : NJ) && void 0 !== dJ ? dJ : 0;
                kJ = (0, IJ.r)({
                  barGap: DJ,
                  barCategoryGap: sJ,
                  bandSize: OJ !== PJ ? OJ : PJ,
                  sizeList: pJ[MJ],
                  maxBarSize: NJ
                }), OJ !== PJ && (kJ = kJ.map((function(JJ) {
                  return EZ(EZ({}, JJ), {}, {
                    position: EZ(EZ({}, JJ.position), {}, {
                      offset: JJ.position.offset - OJ / 2
                    })
                  })
                })))
              }
              var TJ = ZJ && ZJ.type && ZJ.type.getComposedData;
              TJ && mJ.push({
                props: EZ(EZ({}, TJ(EZ(EZ({}, bJ), {}, {
                  displayedData: QJ,
                  props: JJ,
                  dataKey: VJ,
                  item: ZJ,
                  bandSize: PJ,
                  barPosition: kJ,
                  offset: UJ,
                  stackedData: gJ,
                  layout: hJ,
                  dataStartIndex: AJ,
                  dataEndIndex: qJ
                }))), {}, VZ(VZ(VZ({
                  key: ZJ.key || "item-".concat(GJ)
                }, fJ, bJ[fJ]), rJ, bJ[rJ]), "animationId", XJ)),
                childIndex: (0, KJ.t)(ZJ, JJ.children),
                item: ZJ
              })
            })), mJ
          },
          bJ = function(JJ, FJ) {
            var UJ = JJ.props,
              eJ = JJ.dataStartIndex,
              XJ = JJ.dataEndIndex,
              AJ = JJ.updateId;
            if (!(0, KJ.y)({
                props: UJ
              })) return null;
            var qJ = UJ.children,
              jJ = UJ.layout,
              DJ = UJ.stackOffset,
              GJ = UJ.data,
              fJ = UJ.reverseStackOrder,
              xJ = pZ(jJ),
              rJ = xJ.numericAxisName,
              vJ = xJ.cateAxisName,
              mJ = (0, KJ.f)(qJ, ZJ),
              EJ = (0, IJ.S)(GJ, mJ, "".concat(rJ, "Id"), "".concat(vJ, "Id"), DJ, fJ),
              VJ = YJ.reduce((function(JJ, cJ) {
                var ZJ = "".concat(cJ.axisType, "Map");
                return EZ(EZ({}, JJ), {}, VZ({}, ZJ, PZ(UJ, EZ(EZ({}, cJ), {}, {
                  graphicalItems: mJ,
                  stackGroups: cJ.axisType === rJ && EJ,
                  dataStartIndex: eJ,
                  dataEndIndex: XJ
                }))))
              }), {}),
              yJ = function(JJ, cJ) {
                var ZJ = JJ.props,
                  FJ = JJ.graphicalItems,
                  UJ = JJ.xAxisMap,
                  eJ = void 0 === UJ ? {} : UJ,
                  XJ = JJ.yAxisMap,
                  AJ = void 0 === XJ ? {} : XJ,
                  qJ = ZJ.width,
                  jJ = ZJ.height,
                  YJ = ZJ.children,
                  DJ = ZJ.margin || {},
                  sJ = (0, KJ.g)(YJ, LJ),
                  nJ = (0, KJ.g)(YJ, QJ.c),
                  GJ = Object.keys(AJ).reduce((function(JJ, cJ) {
                    var ZJ = AJ[cJ],
                      FJ = ZJ.orientation;
                    return ZJ.mirror || ZJ.hide ? JJ : EZ(EZ({}, JJ), {}, VZ({}, FJ, JJ[FJ] + ZJ.width))
                  }), {
                    left: DJ.left || 0,
                    right: DJ.right || 0
                  }),
                  fJ = Object.keys(eJ).reduce((function(JJ, cJ) {
                    var ZJ = eJ[cJ],
                      FJ = ZJ.orientation;
                    return ZJ.mirror || ZJ.hide ? JJ : EZ(EZ({}, JJ), {}, VZ({}, FJ, hJ()(JJ, "".concat(FJ)) + ZJ.height))
                  }), {
                    top: DJ.top || 0,
                    bottom: DJ.bottom || 0
                  }),
                  xJ = EZ(EZ({}, fJ), GJ),
                  rJ = xJ.bottom;
                sJ && (xJ.bottom += sJ.props.height || LJ.defaultProps.height), nJ && cJ && (xJ = (0, IJ.b)(xJ, FJ, ZJ, cJ));
                var vJ = qJ - xJ.left - xJ.right,
                  mJ = jJ - xJ.top - xJ.bottom;
                return EZ(EZ({
                  brushBottom: rJ
                }, xJ), {}, {
                  width: Math.max(vJ, 0),
                  height: Math.max(mJ, 0)
                })
              }(EZ(EZ({}, VJ), {}, {
                props: UJ,
                graphicalItems: mJ
              }), null === FJ || void 0 === FJ ? void 0 : FJ.legendBBox);
            Object.keys(VJ).forEach((function(JJ) {
              VJ[JJ] = nJ(UJ, VJ[JJ], yJ, JJ.replace("Map", ""), cJ)
            }));
            var bJ = function(JJ) {
                var cJ = (0, MJ.j)(JJ),
                  ZJ = (0, IJ.X)(cJ, !1, !0);
                return {
                  tooltipTicks: ZJ,
                  orderedTooltipTicks: sJ()(ZJ, (function(JJ) {
                    return JJ.coordinate
                  })),
                  tooltipAxis: cJ,
                  tooltipAxisBandSize: (0, IJ.n)(cJ, ZJ)
                }
              }(VJ["".concat(vJ, "Map")]),
              wJ = SJ(UJ, EZ(EZ({}, VJ), {}, {
                dataStartIndex: eJ,
                dataEndIndex: XJ,
                updateId: AJ,
                graphicalItems: mJ,
                stackGroups: EJ,
                offset: yJ
              }));
            return EZ(EZ({
              formattedGraphicalItems: wJ,
              graphicalItems: mJ,
              offset: yJ,
              stackGroups: EJ
            }, bJ), VJ)
          },
          wJ = function(JJ) {
            function ZJ(JJ) {
              var UJ, XJ, qJ;
              return function(JJ, cJ) {
                if (!(JJ instanceof cJ)) throw new TypeError("Cannot call a class as a function")
              }(this, ZJ), VZ(qJ = nZ(this, ZJ, [JJ]), "eventEmitterSymbol", Symbol("rechartsEventEmitter")), VZ(qJ, "accessibilityManager", new Nc), VZ(qJ, "handleLegendBBoxUpdate", (function(JJ) {
                if (JJ) {
                  var cJ = qJ.state,
                    ZJ = cJ.dataStartIndex,
                    FJ = cJ.dataEndIndex,
                    UJ = cJ.updateId;
                  qJ.setState(EZ({
                    legendBBox: JJ
                  }, bJ({
                    props: qJ.props,
                    dataStartIndex: ZJ,
                    dataEndIndex: FJ,
                    updateId: UJ
                  }, EZ(EZ({}, qJ.state), {}, {
                    legendBBox: JJ
                  }))))
                }
              })), VZ(qJ, "handleReceiveSyncEvent", (function(JJ, cJ, ZJ) {
                if (qJ.props.syncId === JJ) {
                  if (ZJ === qJ.eventEmitterSymbol && "function" !== typeof qJ.props.syncMethod) return;
                  qJ.applySyncEvent(cJ)
                }
              })), VZ(qJ, "handleBrushChange", (function(JJ) {
                var cJ = JJ.startIndex,
                  ZJ = JJ.endIndex;
                if (cJ !== qJ.state.dataStartIndex || ZJ !== qJ.state.dataEndIndex) {
                  var FJ = qJ.state.updateId;
                  qJ.setState((function() {
                    return EZ({
                      dataStartIndex: cJ,
                      dataEndIndex: ZJ
                    }, bJ({
                      props: qJ.props,
                      dataStartIndex: cJ,
                      dataEndIndex: ZJ,
                      updateId: FJ
                    }, qJ.state))
                  })), qJ.triggerSyncEvent({
                    dataStartIndex: cJ,
                    dataEndIndex: ZJ
                  })
                }
              })), VZ(qJ, "handleMouseEnter", (function(JJ) {
                var cJ = qJ.getMouseInfo(JJ);
                if (cJ) {
                  var ZJ = EZ(EZ({}, cJ), {}, {
                    isTooltipActive: !0
                  });
                  qJ.setState(ZJ), qJ.triggerSyncEvent(ZJ);
                  var FJ = qJ.props.onMouseEnter;
                  AJ()(FJ) && FJ(ZJ, JJ)
                }
              })), VZ(qJ, "triggeredAfterMouseMove", (function(JJ) {
                var cJ = qJ.getMouseInfo(JJ),
                  ZJ = cJ ? EZ(EZ({}, cJ), {}, {
                    isTooltipActive: !0
                  }) : {
                    isTooltipActive: !1
                  };
                qJ.setState(ZJ), qJ.triggerSyncEvent(ZJ);
                var FJ = qJ.props.onMouseMove;
                AJ()(FJ) && FJ(ZJ, JJ)
              })), VZ(qJ, "handleItemMouseEnter", (function(JJ) {
                qJ.setState((function() {
                  return {
                    isTooltipActive: !0,
                    activeItem: JJ,
                    activePayload: JJ.tooltipPayload,
                    activeCoordinate: JJ.tooltipPosition || {
                      x: JJ.cx,
                      y: JJ.cy
                    }
                  }
                }))
              })), VZ(qJ, "handleItemMouseLeave", (function() {
                qJ.setState((function() {
                  return {
                    isTooltipActive: !1
                  }
                }))
              })), VZ(qJ, "handleMouseMove", (function(JJ) {
                JJ.persist(), qJ.throttleTriggeredAfterMouseMove(JJ)
              })), VZ(qJ, "handleMouseLeave", (function(JJ) {
                qJ.throttleTriggeredAfterMouseMove.cancel();
                var cJ = {
                  isTooltipActive: !1
                };
                qJ.setState(cJ), qJ.triggerSyncEvent(cJ);
                var ZJ = qJ.props.onMouseLeave;
                AJ()(ZJ) && ZJ(cJ, JJ)
              })), VZ(qJ, "handleOuterEvent", (function(JJ) {
                var cJ, ZJ = (0, KJ.m)(JJ),
                  FJ = hJ()(qJ.props, "".concat(ZJ));
                ZJ && AJ()(FJ) && FJ(null !== (cJ = /.*touch.*/i.test(ZJ) ? qJ.getMouseInfo(JJ.changedTouches[0]) : qJ.getMouseInfo(JJ)) && void 0 !== cJ ? cJ : {}, JJ)
              })), VZ(qJ, "handleClick", (function(JJ) {
                var cJ = qJ.getMouseInfo(JJ);
                if (cJ) {
                  var ZJ = EZ(EZ({}, cJ), {}, {
                    isTooltipActive: !0
                  });
                  qJ.setState(ZJ), qJ.triggerSyncEvent(ZJ);
                  var FJ = qJ.props.onClick;
                  AJ()(FJ) && FJ(ZJ, JJ)
                }
              })), VZ(qJ, "handleMouseDown", (function(JJ) {
                var cJ = qJ.props.onMouseDown;
                AJ()(cJ) && cJ(qJ.getMouseInfo(JJ), JJ)
              })), VZ(qJ, "handleMouseUp", (function(JJ) {
                var cJ = qJ.props.onMouseUp;
                AJ()(cJ) && cJ(qJ.getMouseInfo(JJ), JJ)
              })), VZ(qJ, "handleTouchMove", (function(JJ) {
                null != JJ.changedTouches && JJ.changedTouches.length > 0 && qJ.throttleTriggeredAfterMouseMove(JJ.changedTouches[0])
              })), VZ(qJ, "handleTouchStart", (function(JJ) {
                null != JJ.changedTouches && JJ.changedTouches.length > 0 && qJ.handleMouseDown(JJ.changedTouches[0])
              })), VZ(qJ, "handleTouchEnd", (function(JJ) {
                null != JJ.changedTouches && JJ.changedTouches.length > 0 && qJ.handleMouseUp(JJ.changedTouches[0])
              })), VZ(qJ, "handleDoubleClick", (function(JJ) {
                var cJ = qJ.props.onDoubleClick;
                AJ()(cJ) && cJ(qJ.getMouseInfo(JJ), JJ)
              })), VZ(qJ, "handleContextMenu", (function(JJ) {
                var cJ = qJ.props.onContextMenu;
                AJ()(cJ) && cJ(qJ.getMouseInfo(JJ), JJ)
              })), VZ(qJ, "triggerSyncEvent", (function(JJ) {
                void 0 !== qJ.props.syncId && gc.emit(Hc, qJ.props.syncId, JJ, qJ.eventEmitterSymbol)
              })), VZ(qJ, "applySyncEvent", (function(JJ) {
                var cJ = qJ.props,
                  ZJ = cJ.layout,
                  FJ = cJ.syncMethod,
                  UJ = qJ.state.updateId,
                  eJ = JJ.dataStartIndex,
                  XJ = JJ.dataEndIndex;
                if (void 0 !== JJ.dataStartIndex || void 0 !== JJ.dataEndIndex) qJ.setState(EZ({
                  dataStartIndex: eJ,
                  dataEndIndex: XJ
                }, bJ({
                  props: qJ.props,
                  dataStartIndex: eJ,
                  dataEndIndex: XJ,
                  updateId: UJ
                }, qJ.state)));
                else if (void 0 !== JJ.activeTooltipIndex) {
                  var AJ = JJ.chartX,
                    jJ = JJ.chartY,
                    YJ = JJ.activeTooltipIndex,
                    hJ = qJ.state,
                    DJ = hJ.offset,
                    sJ = hJ.tooltipTicks;
                  if (!DJ) return;
                  if ("function" === typeof FJ) YJ = FJ(sJ, JJ);
                  else if ("value" === FJ) {
                    YJ = -1;
                    for (var nJ = 0; nJ < sJ.length; nJ++)
                      if (sJ[nJ].value === JJ.activeLabel) {
                        YJ = nJ;
                        break
                      }
                  }
                  var GJ = EZ(EZ({}, DJ), {}, {
                      x: DJ.left,
                      y: DJ.top
                    }),
                    fJ = Math.min(AJ, GJ.x + GJ.width),
                    xJ = Math.min(jJ, GJ.y + GJ.height),
                    rJ = sJ[YJ] && sJ[YJ].value,
                    vJ = WZ(qJ.state, qJ.props.data, YJ),
                    mJ = sJ[YJ] ? {
                      x: "horizontal" === ZJ ? sJ[YJ].coordinate : fJ,
                      y: "horizontal" === ZJ ? xJ : sJ[YJ].coordinate
                    } : IZ;
                  qJ.setState(EZ(EZ({}, JJ), {}, {
                    activeLabel: rJ,
                    activeCoordinate: mJ,
                    activePayload: vJ,
                    activeTooltipIndex: YJ
                  }))
                } else qJ.setState(JJ)
              })), VZ(qJ, "renderCursor", (function(JJ) {
                var ZJ, UJ = qJ.state,
                  eJ = UJ.isTooltipActive,
                  XJ = UJ.activeCoordinate,
                  AJ = UJ.activePayload,
                  jJ = UJ.offset,
                  YJ = UJ.activeTooltipIndex,
                  hJ = UJ.tooltipAxisBandSize,
                  DJ = qJ.getTooltipEventType(),
                  sJ = null !== (ZJ = JJ.props.active) && void 0 !== ZJ ? ZJ : eJ,
                  nJ = qJ.props.layout,
                  GJ = JJ.key || "_recharts-cursor";
                return FJ.createElement(eZ, {
                  key: GJ,
                  activeCoordinate: XJ,
                  activePayload: AJ,
                  activeTooltipIndex: YJ,
                  chartName: cJ,
                  element: JJ,
                  isActive: sJ,
                  layout: nJ,
                  offset: jJ,
                  tooltipAxisBandSize: hJ,
                  tooltipEventType: DJ
                })
              })), VZ(qJ, "renderPolarAxis", (function(JJ, cJ, ZJ) {
                var UJ = hJ()(JJ, "type.axisType"),
                  eJ = hJ()(qJ.state, "".concat(UJ, "Map")),
                  XJ = JJ.type.defaultProps,
                  AJ = void 0 !== XJ ? EZ(EZ({}, XJ), JJ.props) : JJ.props,
                  jJ = eJ && eJ[AJ["".concat(UJ, "Id")]];
                return (0, FJ.cloneElement)(JJ, EZ(EZ({}, jJ), {}, {
                  className: (0, fJ.d)(UJ, jJ.className),
                  key: JJ.key || "".concat(cJ, "-").concat(ZJ),
                  ticks: (0, IJ.X)(jJ, !0)
                }))
              })), VZ(qJ, "renderPolarGrid", (function(JJ) {
                var cJ = JJ.props,
                  ZJ = cJ.radialLines,
                  UJ = cJ.polarAngles,
                  eJ = cJ.polarRadius,
                  XJ = qJ.state,
                  AJ = XJ.radiusAxisMap,
                  jJ = XJ.angleAxisMap,
                  YJ = (0, MJ.j)(AJ),
                  hJ = (0, MJ.j)(jJ),
                  DJ = hJ.cx,
                  sJ = hJ.cy,
                  nJ = hJ.innerRadius,
                  GJ = hJ.outerRadius;
                return (0, FJ.cloneElement)(JJ, {
                  polarAngles: Array.isArray(UJ) ? UJ : (0, IJ.X)(hJ, !0).map((function(JJ) {
                    return JJ.coordinate
                  })),
                  polarRadius: Array.isArray(eJ) ? eJ : (0, IJ.X)(YJ, !0).map((function(JJ) {
                    return JJ.coordinate
                  })),
                  cx: DJ,
                  cy: sJ,
                  innerRadius: nJ,
                  outerRadius: GJ,
                  key: JJ.key || "polar-grid",
                  radialLines: ZJ
                })
              })), VZ(qJ, "renderLegend", (function() {
                var JJ = qJ.state.formattedGraphicalItems,
                  cJ = qJ.props,
                  ZJ = cJ.children,
                  UJ = cJ.width,
                  eJ = cJ.height,
                  XJ = qJ.props.margin || {},
                  AJ = UJ - (XJ.left || 0) - (XJ.right || 0),
                  jJ = (0, BJ.b)({
                    children: ZJ,
                    formattedGraphicalItems: JJ,
                    legendWidth: AJ,
                    legendContent: DJ
                  });
                if (!jJ) return null;
                var YJ = jJ.item,
                  hJ = DZ(jJ, AZ);
                return (0, FJ.cloneElement)(YJ, EZ(EZ({}, hJ), {}, {
                  chartWidth: UJ,
                  chartHeight: eJ,
                  margin: XJ,
                  onBBoxUpdate: qJ.handleLegendBBoxUpdate
                }))
              })), VZ(qJ, "renderTooltip", (function() {
                var JJ, cJ = qJ.props,
                  ZJ = cJ.children,
                  UJ = cJ.accessibilityLayer,
                  eJ = (0, KJ.g)(ZJ, mJ.c);
                if (!eJ) return null;
                var XJ = qJ.state,
                  AJ = XJ.isTooltipActive,
                  jJ = XJ.activeCoordinate,
                  YJ = XJ.activePayload,
                  hJ = XJ.activeLabel,
                  DJ = XJ.offset,
                  sJ = null !== (JJ = eJ.props.active) && void 0 !== JJ ? JJ : AJ;
                return (0, FJ.cloneElement)(eJ, {
                  viewBox: EZ(EZ({}, DJ), {}, {
                    x: DJ.left,
                    y: DJ.top
                  }),
                  active: sJ,
                  label: hJ,
                  payload: sJ ? YJ : [],
                  coordinate: jJ,
                  accessibilityLayer: UJ
                })
              })), VZ(qJ, "renderBrush", (function(JJ) {
                var cJ = qJ.props,
                  ZJ = cJ.margin,
                  UJ = cJ.data,
                  eJ = qJ.state,
                  XJ = eJ.offset,
                  AJ = eJ.dataStartIndex,
                  jJ = eJ.dataEndIndex,
                  YJ = eJ.updateId;
                return (0, FJ.cloneElement)(JJ, {
                  key: JJ.key || "_recharts-brush",
                  onChange: (0, IJ.i)(qJ.handleBrushChange, JJ.props.onChange),
                  data: UJ,
                  x: (0, MJ.C)(JJ.props.x) ? JJ.props.x : XJ.left,
                  y: (0, MJ.C)(JJ.props.y) ? JJ.props.y : XJ.top + XJ.height + XJ.brushBottom - (ZJ.bottom || 0),
                  width: (0, MJ.C)(JJ.props.width) ? JJ.props.width : XJ.width,
                  startIndex: AJ,
                  endIndex: jJ,
                  updateId: "brush-".concat(YJ)
                })
              })), VZ(qJ, "renderReferenceElement", (function(JJ, cJ, ZJ) {
                if (!JJ) return null;
                var UJ = qJ.clipPathId,
                  eJ = qJ.state,
                  XJ = eJ.xAxisMap,
                  AJ = eJ.yAxisMap,
                  jJ = eJ.offset,
                  YJ = JJ.type.defaultProps || {},
                  hJ = JJ.props,
                  DJ = hJ.xAxisId,
                  sJ = void 0 === DJ ? YJ.xAxisId : DJ,
                  nJ = hJ.yAxisId,
                  GJ = void 0 === nJ ? YJ.yAxisId : nJ;
                return (0, FJ.cloneElement)(JJ, {
                  key: JJ.key || "".concat(cJ, "-").concat(ZJ),
                  xAxis: XJ[sJ],
                  yAxis: AJ[GJ],
                  viewBox: {
                    x: jJ.left,
                    y: jJ.top,
                    width: jJ.width,
                    height: jJ.height
                  },
                  clipPathId: UJ
                })
              })), VZ(qJ, "renderActivePoints", (function(JJ) {
                var cJ = JJ.item,
                  FJ = JJ.activePoint,
                  UJ = JJ.basePoint,
                  eJ = JJ.childIndex,
                  XJ = JJ.isRange,
                  AJ = [],
                  qJ = cJ.props.key,
                  jJ = void 0 !== cJ.item.type.defaultProps ? EZ(EZ({}, cJ.item.type.defaultProps), cJ.item.props) : cJ.item.props,
                  YJ = jJ.activeDot,
                  hJ = EZ(EZ({
                    index: eJ,
                    dataKey: jJ.dataKey,
                    cx: FJ.x,
                    cy: FJ.y,
                    r: 4,
                    fill: (0, IJ.Q)(cJ.item),
                    strokeWidth: 2,
                    stroke: "#fff",
                    payload: FJ.payload,
                    value: FJ.value
                  }, (0, KJ.c)(YJ, !1)), (0, Pc.k)(YJ));
                return AJ.push(ZJ.renderActiveDot(YJ, hJ, "".concat(qJ, "-activePoint-").concat(eJ))), UJ ? AJ.push(ZJ.renderActiveDot(YJ, EZ(EZ({}, hJ), {}, {
                  cx: UJ.x,
                  cy: UJ.y
                }), "".concat(qJ, "-basePoint-").concat(eJ))) : XJ && AJ.push(null), AJ
              })), VZ(qJ, "renderGraphicChild", (function(JJ, cJ, ZJ) {
                var UJ = qJ.filterFormatItem(JJ, cJ, ZJ);
                if (!UJ) return null;
                var XJ = qJ.getTooltipEventType(),
                  AJ = qJ.state,
                  jJ = AJ.isTooltipActive,
                  YJ = AJ.tooltipAxis,
                  hJ = AJ.activeTooltipIndex,
                  DJ = AJ.activeLabel,
                  sJ = qJ.props.children,
                  nJ = (0, KJ.g)(sJ, mJ.c),
                  GJ = UJ.props,
                  fJ = GJ.points,
                  xJ = GJ.isRange,
                  rJ = GJ.baseLine,
                  vJ = void 0 !== UJ.item.type.defaultProps ? EZ(EZ({}, UJ.item.type.defaultProps), UJ.item.props) : UJ.item.props,
                  QJ = vJ.activeDot,
                  EJ = vJ.hide,
                  VJ = vJ.activeBar,
                  yJ = vJ.activeShape,
                  SJ = Boolean(!EJ && jJ && nJ && (QJ || VJ || yJ)),
                  bJ = {};
                "axis" !== XJ && nJ && "click" === nJ.props.trigger ? bJ = {
                  onClick: (0, IJ.i)(qJ.handleItemMouseEnter, JJ.props.onClick)
                } : "axis" !== XJ && (bJ = {
                  onMouseLeave: (0, IJ.i)(qJ.handleItemMouseLeave, JJ.props.onMouseLeave),
                  onMouseEnter: (0, IJ.i)(qJ.handleItemMouseEnter, JJ.props.onMouseEnter)
                });
                var wJ = (0, FJ.cloneElement)(JJ, EZ(EZ({}, UJ.props), bJ));
                if (SJ) {
                  if (!(hJ >= 0)) {
                    var WJ, gJ = (null !== (WJ = qJ.getItemByXY(qJ.state.activeCoordinate)) && void 0 !== WJ ? WJ : {
                        graphicalItem: wJ
                      }).graphicalItem,
                      HJ = gJ.item,
                      PJ = void 0 === HJ ? JJ : HJ,
                      kJ = gJ.childIndex,
                      pJ = EZ(EZ(EZ({}, UJ.props), bJ), {}, {
                        activeIndex: kJ
                      });
                    return [(0, FJ.cloneElement)(PJ, pJ), null, null]
                  }
                  var dJ, zJ;
                  if (YJ.dataKey && !YJ.allowDuplicatedCategory) {
                    var NJ = "function" === typeof YJ.dataKey ? function(JJ) {
                      return "function" === typeof YJ.dataKey ? YJ.dataKey(JJ.payload) : null
                    } : "payload.".concat(YJ.dataKey.toString());
                    dJ = (0, MJ.f)(fJ, NJ, DJ), zJ = xJ && rJ && (0, MJ.f)(rJ, NJ, DJ)
                  } else dJ = null === fJ || void 0 === fJ ? void 0 : fJ[hJ], zJ = xJ && rJ && rJ[hJ];
                  if (yJ || VJ) {
                    var OJ = void 0 !== JJ.props.activeIndex ? JJ.props.activeIndex : hJ;
                    return [(0, FJ.cloneElement)(JJ, EZ(EZ(EZ({}, UJ.props), bJ), {}, {
                      activeIndex: OJ
                    })), null, null]
                  }
                  if (!eJ()(dJ)) return [wJ].concat(rZ(qJ.renderActivePoints({
                    item: UJ,
                    activePoint: dJ,
                    basePoint: zJ,
                    childIndex: hJ,
                    isRange: xJ
                  })))
                }
                return xJ ? [wJ, null, null] : [wJ, null]
              })), VZ(qJ, "renderCustomized", (function(JJ, cJ, ZJ) {
                return (0, FJ.cloneElement)(JJ, EZ(EZ({
                  key: "recharts-customized-".concat(ZJ)
                }, qJ.props), qJ.state))
              })), VZ(qJ, "renderMap", {
                CartesianGrid: {
                  handler: MZ,
                  once: !0
                },
                ReferenceArea: {
                  handler: qJ.renderReferenceElement
                },
                ReferenceLine: {
                  handler: MZ
                },
                ReferenceDot: {
                  handler: qJ.renderReferenceElement
                },
                XAxis: {
                  handler: MZ
                },
                YAxis: {
                  handler: MZ
                },
                Brush: {
                  handler: qJ.renderBrush,
                  once: !0
                },
                Bar: {
                  handler: qJ.renderGraphicChild
                },
                Line: {
                  handler: qJ.renderGraphicChild
                },
                Area: {
                  handler: qJ.renderGraphicChild
                },
                Radar: {
                  handler: qJ.renderGraphicChild
                },
                RadialBar: {
                  handler: qJ.renderGraphicChild
                },
                Scatter: {
                  handler: qJ.renderGraphicChild
                },
                Pie: {
                  handler: qJ.renderGraphicChild
                },
                Funnel: {
                  handler: qJ.renderGraphicChild
                },
                Tooltip: {
                  handler: qJ.renderCursor,
                  once: !0
                },
                PolarGrid: {
                  handler: qJ.renderPolarGrid,
                  once: !0
                },
                PolarAngleAxis: {
                  handler: qJ.renderPolarAxis
                },
                PolarRadiusAxis: {
                  handler: qJ.renderPolarAxis
                },
                Customized: {
                  handler: qJ.renderCustomized
                }
              }), qJ.clipPathId = "".concat(null !== (UJ = JJ.id) && void 0 !== UJ ? UJ : (0, MJ.L)("recharts"), "-clip"), qJ.throttleTriggeredAfterMouseMove = GJ()(qJ.triggeredAfterMouseMove, null !== (XJ = JJ.throttleDelay) && void 0 !== XJ ? XJ : 1e3 / 60), qJ.state = {}, qJ
            }
            return function(JJ, cJ) {
              if ("function" !== typeof cJ && null !== cJ) throw new TypeError("Super expression must either be null or a function");
              JJ.prototype = Object.create(cJ && cJ.prototype, {
                constructor: {
                  value: JJ,
                  writable: !0,
                  configurable: !0
                }
              }), Object.defineProperty(JJ, "prototype", {
                writable: !1
              }), cJ && xZ(JJ, cJ)
            }(ZJ, JJ), UJ = ZJ, qJ = [{
              key: "componentDidMount",
              value: function() {
                var JJ, cJ;
                this.addListener(), this.accessibilityManager.setDetails({
                  container: this.container,
                  offset: {
                    left: null !== (JJ = this.props.margin.left) && void 0 !== JJ ? JJ : 0,
                    top: null !== (cJ = this.props.margin.top) && void 0 !== cJ ? cJ : 0
                  },
                  coordinateList: this.state.tooltipTicks,
                  mouseHandlerCallback: this.triggeredAfterMouseMove,
                  layout: this.props.layout
                }), this.displayDefaultTooltip()
              }
            }, {
              key: "displayDefaultTooltip",
              value: function() {
                var JJ = this.props,
                  cJ = JJ.children,
                  ZJ = JJ.data,
                  FJ = JJ.height,
                  UJ = JJ.layout,
                  eJ = (0, KJ.g)(cJ, mJ.c);
                if (eJ) {
                  var XJ = eJ.props.defaultIndex;
                  if (!("number" !== typeof XJ || XJ < 0 || XJ > this.state.tooltipTicks.length - 1)) {
                    var AJ = this.state.tooltipTicks[XJ] && this.state.tooltipTicks[XJ].value,
                      qJ = WZ(this.state, ZJ, XJ, AJ),
                      jJ = this.state.tooltipTicks[XJ].coordinate,
                      YJ = (this.state.offset.top + FJ) / 2,
                      hJ = "horizontal" === UJ ? {
                        x: jJ,
                        y: YJ
                      } : {
                        y: jJ,
                        x: YJ
                      },
                      DJ = this.state.formattedGraphicalItems.find((function(JJ) {
                        return "Scatter" === JJ.item.type.name
                      }));
                    DJ && (hJ = EZ(EZ({}, hJ), DJ.props.points[XJ].tooltipPosition), qJ = DJ.props.points[XJ].tooltipPayload);
                    var sJ = {
                      activeTooltipIndex: XJ,
                      isTooltipActive: !0,
                      activeLabel: AJ,
                      activePayload: qJ,
                      activeCoordinate: hJ
                    };
                    this.setState(sJ), this.renderCursor(eJ), this.accessibilityManager.setIndex(XJ)
                  }
                }
              }
            }, {
              key: "getSnapshotBeforeUpdate",
              value: function(JJ, cJ) {
                return this.props.accessibilityLayer ? (this.state.tooltipTicks !== cJ.tooltipTicks && this.accessibilityManager.setDetails({
                  coordinateList: this.state.tooltipTicks
                }), this.props.layout !== JJ.layout && this.accessibilityManager.setDetails({
                  layout: this.props.layout
                }), this.props.margin !== JJ.margin && this.accessibilityManager.setDetails({
                  offset: {
                    left: null !== (ZJ = this.props.margin.left) && void 0 !== ZJ ? ZJ : 0,
                    top: null !== (FJ = this.props.margin.top) && void 0 !== FJ ? FJ : 0
                  }
                }), null) : null;
                var ZJ, FJ
              }
            }, {
              key: "componentDidUpdate",
              value: function(JJ) {
                (0, KJ.r)([(0, KJ.g)(JJ.children, mJ.c)], [(0, KJ.g)(this.props.children, mJ.c)]) || this.displayDefaultTooltip()
              }
            }, {
              key: "componentWillUnmount",
              value: function() {
                this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel()
              }
            }, {
              key: "getTooltipEventType",
              value: function() {
                var JJ = (0, KJ.g)(this.props.children, mJ.c);
                if (JJ && "boolean" === typeof JJ.props.shared) {
                  var cJ = JJ.props.shared ? "axis" : "item";
                  return jJ.indexOf(cJ) >= 0 ? cJ : XJ
                }
                return XJ
              }
            }, {
              key: "getMouseInfo",
              value: function(JJ) {
                if (!this.container) return null;
                var cJ = this.container,
                  ZJ = cJ.getBoundingClientRect(),
                  FJ = (0, aJ.e)(ZJ),
                  UJ = {
                    chartX: Math.round(JJ.pageX - FJ.left),
                    chartY: Math.round(JJ.pageY - FJ.top)
                  },
                  eJ = ZJ.width / cJ.offsetWidth || 1,
                  XJ = this.inRange(UJ.chartX, UJ.chartY, eJ);
                if (!XJ) return null;
                var AJ = this.state,
                  qJ = AJ.xAxisMap,
                  jJ = AJ.yAxisMap,
                  YJ = this.getTooltipEventType(),
                  hJ = gZ(this.state, this.props.data, this.props.layout, XJ);
                if ("axis" !== YJ && qJ && jJ) {
                  var DJ = (0, MJ.j)(qJ).scale,
                    sJ = (0, MJ.j)(jJ).scale,
                    nJ = DJ && DJ.invert ? DJ.invert(UJ.chartX) : null,
                    GJ = sJ && sJ.invert ? sJ.invert(UJ.chartY) : null;
                  return EZ(EZ({}, UJ), {}, {
                    xValue: nJ,
                    yValue: GJ
                  }, hJ)
                }
                return hJ ? EZ(EZ({}, UJ), hJ) : null
              }
            }, {
              key: "inRange",
              value: function(JJ, cJ) {
                var ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                  FJ = this.props.layout,
                  UJ = JJ / ZJ,
                  eJ = cJ / ZJ;
                if ("horizontal" === FJ || "vertical" === FJ) {
                  var XJ = this.state.offset;
                  return UJ >= XJ.left && UJ <= XJ.left + XJ.width && eJ >= XJ.top && eJ <= XJ.top + XJ.height ? {
                    x: UJ,
                    y: eJ
                  } : null
                }
                var AJ = this.state,
                  qJ = AJ.angleAxisMap,
                  jJ = AJ.radiusAxisMap;
                if (qJ && jJ) {
                  var YJ = (0, MJ.j)(qJ);
                  return (0, bc.i)({
                    x: UJ,
                    y: eJ
                  }, YJ)
                }
                return null
              }
            }, {
              key: "parseEventsOfWrapper",
              value: function() {
                var JJ = this.props.children,
                  cJ = this.getTooltipEventType(),
                  ZJ = (0, KJ.g)(JJ, mJ.c),
                  FJ = {};
                return ZJ && "axis" === cJ && (FJ = "click" === ZJ.props.trigger ? {
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
                }), EZ(EZ({}, (0, Pc.k)(this.props, this.handleOuterEvent)), FJ)
              }
            }, {
              key: "addListener",
              value: function() {
                gc.on(Hc, this.handleReceiveSyncEvent)
              }
            }, {
              key: "removeListener",
              value: function() {
                gc.removeListener(Hc, this.handleReceiveSyncEvent)
              }
            }, {
              key: "filterFormatItem",
              value: function(JJ, cJ, ZJ) {
                for (var FJ = this.state.formattedGraphicalItems, UJ = 0, eJ = FJ.length; UJ < eJ; UJ++) {
                  var XJ = FJ[UJ];
                  if (XJ.item === JJ || XJ.props.key === JJ.key || cJ === (0, KJ.k)(XJ.item.type) && ZJ === XJ.childIndex) return XJ
                }
                return null
              }
            }, {
              key: "renderClipPath",
              value: function() {
                var JJ = this.clipPathId,
                  cJ = this.state.offset,
                  ZJ = cJ.left,
                  UJ = cJ.top,
                  eJ = cJ.height,
                  XJ = cJ.width;
                return FJ.createElement("defs", null, FJ.createElement("clipPath", {
                  id: JJ
                }, FJ.createElement("rect", {
                  x: ZJ,
                  y: UJ,
                  height: eJ,
                  width: XJ
                })))
              }
            }, {
              key: "getXScales",
              value: function() {
                var JJ = this.state.xAxisMap;
                return JJ ? Object.entries(JJ).reduce((function(JJ, cJ) {
                  var ZJ = hZ(cJ, 2),
                    FJ = ZJ[0],
                    UJ = ZJ[1];
                  return EZ(EZ({}, JJ), {}, VZ({}, FJ, UJ.scale))
                }), {}) : null
              }
            }, {
              key: "getYScales",
              value: function() {
                var JJ = this.state.yAxisMap;
                return JJ ? Object.entries(JJ).reduce((function(JJ, cJ) {
                  var ZJ = hZ(cJ, 2),
                    FJ = ZJ[0],
                    UJ = ZJ[1];
                  return EZ(EZ({}, JJ), {}, VZ({}, FJ, UJ.scale))
                }), {}) : null
              }
            }, {
              key: "getXScaleByAxisId",
              value: function(JJ) {
                var cJ;
                return null === (cJ = this.state.xAxisMap) || void 0 === cJ || null === (cJ = cJ[JJ]) || void 0 === cJ ? void 0 : cJ.scale
              }
            }, {
              key: "getYScaleByAxisId",
              value: function(JJ) {
                var cJ;
                return null === (cJ = this.state.yAxisMap) || void 0 === cJ || null === (cJ = cJ[JJ]) || void 0 === cJ ? void 0 : cJ.scale
              }
            }, {
              key: "getItemByXY",
              value: function(JJ) {
                var cJ = this.state,
                  ZJ = cJ.formattedGraphicalItems,
                  FJ = cJ.activeItem;
                if (ZJ && ZJ.length)
                  for (var UJ = 0, eJ = ZJ.length; UJ < eJ; UJ++) {
                    var XJ = ZJ[UJ],
                      AJ = XJ.props,
                      qJ = XJ.item,
                      jJ = void 0 !== qJ.type.defaultProps ? EZ(EZ({}, qJ.type.defaultProps), qJ.props) : qJ.props,
                      YJ = (0, KJ.k)(qJ.type);
                    if ("Bar" === YJ) {
                      var hJ = (AJ.data || []).find((function(cJ) {
                        return (0, VJ.g)(JJ, cJ)
                      }));
                      if (hJ) return {
                        graphicalItem: XJ,
                        payload: hJ
                      }
                    } else if ("RadialBar" === YJ) {
                      var DJ = (AJ.data || []).find((function(cJ) {
                        return (0, bc.i)(JJ, cJ)
                      }));
                      if (DJ) return {
                        graphicalItem: XJ,
                        payload: DJ
                      }
                    } else if ((0, Oc.h)(XJ, FJ) || (0, Oc.i)(XJ, FJ) || (0, Oc.m)(XJ, FJ)) {
                      var sJ = (0, Oc.g)({
                          graphicalItem: XJ,
                          activeTooltipItem: FJ,
                          itemData: jJ.data
                        }),
                        nJ = void 0 === jJ.activeIndex ? sJ : jJ.activeIndex;
                      return {
                        graphicalItem: EZ(EZ({}, XJ), {}, {
                          childIndex: nJ
                        }),
                        payload: (0, Oc.m)(XJ, FJ) ? jJ.data[sJ] : XJ.props.data[sJ]
                      }
                    }
                  }
                return null
              }
            }, {
              key: "render",
              value: function() {
                var JJ = this;
                if (!(0, KJ.y)(this)) return null;
                var cJ, ZJ, UJ = this.props,
                  eJ = UJ.children,
                  XJ = UJ.className,
                  AJ = UJ.width,
                  qJ = UJ.height,
                  jJ = UJ.style,
                  YJ = UJ.compact,
                  hJ = UJ.title,
                  DJ = UJ.desc,
                  sJ = DZ(UJ, qZ),
                  nJ = (0, KJ.c)(sJ, !1);
                if (YJ) return FJ.createElement(XZ.b, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, FJ.createElement(rJ.d, YZ({}, nJ, {
                  width: AJ,
                  height: qJ,
                  title: hJ,
                  desc: DJ
                }), this.renderClipPath(), (0, KJ.v)(eJ, this.renderMap)));
                this.props.accessibilityLayer && (nJ.tabIndex = null !== (cJ = this.props.tabIndex) && void 0 !== cJ ? cJ : 0, nJ.role = null !== (ZJ = this.props.role) && void 0 !== ZJ ? ZJ : "application", nJ.onKeyDown = function(cJ) {
                  JJ.accessibilityManager.keyboardEvent(cJ)
                }, nJ.onFocus = function() {
                  JJ.accessibilityManager.focus()
                });
                var GJ = this.parseEventsOfWrapper();
                return FJ.createElement(XZ.b, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, FJ.createElement("div", YZ({
                  className: (0, fJ.d)("recharts-wrapper", XJ),
                  style: EZ({
                    position: "relative",
                    cursor: "default",
                    width: AJ,
                    height: qJ
                  }, jJ)
                }, GJ, {
                  ref: function(cJ) {
                    JJ.container = cJ
                  }
                }), FJ.createElement(rJ.d, YZ({}, nJ, {
                  width: AJ,
                  height: qJ,
                  title: hJ,
                  desc: DJ,
                  style: SZ
                }), this.renderClipPath(), (0, KJ.v)(eJ, this.renderMap)), this.renderLegend(), this.renderTooltip()))
              }
            }], qJ && sZ(UJ.prototype, qJ), YJ && sZ(UJ, YJ), Object.defineProperty(UJ, "prototype", {
              writable: !1
            }), UJ;
            var UJ, qJ, YJ
          }(FJ.Component);
        VZ(wJ, "displayName", cJ), VZ(wJ, "defaultProps", EZ({
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
        }, yJ)), VZ(wJ, "getDerivedStateFromProps", (function(JJ, cJ) {
          var ZJ = JJ.dataKey,
            FJ = JJ.data,
            UJ = JJ.children,
            XJ = JJ.width,
            AJ = JJ.height,
            qJ = JJ.layout,
            jJ = JJ.stackOffset,
            YJ = JJ.margin,
            hJ = cJ.dataStartIndex,
            DJ = cJ.dataEndIndex;
          if (void 0 === cJ.updateId) {
            var sJ = kZ(JJ);
            return EZ(EZ(EZ({}, sJ), {}, {
              updateId: 0
            }, bJ(EZ(EZ({
              props: JJ
            }, sJ), {}, {
              updateId: 0
            }), cJ)), {}, {
              prevDataKey: ZJ,
              prevData: FJ,
              prevWidth: XJ,
              prevHeight: AJ,
              prevLayout: qJ,
              prevStackOffset: jJ,
              prevMargin: YJ,
              prevChildren: UJ
            })
          }
          if (ZJ !== cJ.prevDataKey || FJ !== cJ.prevData || XJ !== cJ.prevWidth || AJ !== cJ.prevHeight || qJ !== cJ.prevLayout || jJ !== cJ.prevStackOffset || !(0, wc.e)(YJ, cJ.prevMargin)) {
            var nJ = kZ(JJ),
              GJ = {
                chartX: cJ.chartX,
                chartY: cJ.chartY,
                isTooltipActive: cJ.isTooltipActive
              },
              fJ = EZ(EZ({}, gZ(cJ, FJ, qJ)), {}, {
                updateId: cJ.updateId + 1
              }),
              xJ = EZ(EZ(EZ({}, nJ), GJ), fJ);
            return EZ(EZ(EZ({}, xJ), bJ(EZ({
              props: JJ
            }, xJ), cJ)), {}, {
              prevDataKey: ZJ,
              prevData: FJ,
              prevWidth: XJ,
              prevHeight: AJ,
              prevLayout: qJ,
              prevStackOffset: jJ,
              prevMargin: YJ,
              prevChildren: UJ
            })
          }
          if (!(0, KJ.r)(UJ, cJ.prevChildren)) {
            var rJ, vJ, mJ, QJ, EJ = (0, KJ.g)(UJ, LJ),
              VJ = EJ && null !== (rJ = null === (vJ = EJ.props) || void 0 === vJ ? void 0 : vJ.startIndex) && void 0 !== rJ ? rJ : hJ,
              yJ = EJ && null !== (mJ = null === (QJ = EJ.props) || void 0 === QJ ? void 0 : QJ.endIndex) && void 0 !== mJ ? mJ : DJ,
              SJ = VJ !== hJ || yJ !== DJ,
              IJ = !eJ()(FJ) && !SJ ? cJ.updateId : cJ.updateId + 1;
            return EZ(EZ({
              updateId: IJ
            }, bJ(EZ(EZ({
              props: JJ
            }, cJ), {}, {
              updateId: IJ,
              dataStartIndex: VJ,
              dataEndIndex: yJ
            }), cJ)), {}, {
              prevChildren: UJ,
              dataStartIndex: VJ,
              dataEndIndex: yJ
            })
          }
          return null
        })), VZ(wJ, "renderActiveDot", (function(JJ, cJ, ZJ) {
          var UJ;
          return UJ = (0, FJ.isValidElement)(JJ) ? (0, FJ.cloneElement)(JJ, cJ) : AJ()(JJ) ? JJ(cJ) : FJ.createElement(EJ.c, cJ), FJ.createElement(vJ.e, {
            className: "recharts-active-dot",
            key: ZJ
          }, UJ)
        }));
        var WJ = (0, FJ.forwardRef)((function(JJ, cJ) {
          return FJ.createElement(wJ, YZ({}, JJ, {
            ref: cJ
          }))
        }));
        return WJ.displayName = wJ.displayName, WJ
      }
  },
  5646: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => FJ
    });
    var FJ = function(JJ) {
      return null
    };
    FJ.displayName = "Cell"
  },
  5585: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => bJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(4786),
      eJ = ZJ.n(UJ),
      XJ = ZJ(4641),
      AJ = ZJ.n(XJ),
      qJ = ZJ(4480),
      jJ = ZJ.n(qJ),
      YJ = ZJ(4468),
      hJ = ZJ(5488),
      DJ = ZJ(4797),
      sJ = ZJ(4543),
      nJ = ZJ(5590);

    function GJ(JJ) {
      return GJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, GJ(JJ)
    }
    var fJ = ["offset"];

    function xJ(JJ) {
      return function(JJ) {
        if (Array.isArray(JJ)) return rJ(JJ)
      }(JJ) || function(JJ) {
        if ("undefined" !== typeof Symbol && null != JJ[Symbol.iterator] || null != JJ["@@iterator"]) return Array.from(JJ)
      }(JJ) || function(JJ, cJ) {
        if (!JJ) return;
        if ("string" === typeof JJ) return rJ(JJ, cJ);
        var ZJ = Object.prototype.toString.call(JJ).slice(8, -1);
        "Object" === ZJ && JJ.constructor && (ZJ = JJ.constructor.name);
        if ("Map" === ZJ || "Set" === ZJ) return Array.from(JJ);
        if ("Arguments" === ZJ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZJ)) return rJ(JJ, cJ)
      }(JJ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function rJ(JJ, cJ) {
      (null == cJ || cJ > JJ.length) && (cJ = JJ.length);
      for (var ZJ = 0, FJ = new Array(cJ); ZJ < cJ; ZJ++) FJ[ZJ] = JJ[ZJ];
      return FJ
    }

    function vJ(JJ, cJ) {
      if (null == JJ) return {};
      var ZJ, FJ, UJ = function(JJ, cJ) {
        if (null == JJ) return {};
        var ZJ = {};
        for (var FJ in JJ)
          if (Object.prototype.hasOwnProperty.call(JJ, FJ)) {
            if (cJ.indexOf(FJ) >= 0) continue;
            ZJ[FJ] = JJ[FJ]
          } return ZJ
      }(JJ, cJ);
      if (Object.getOwnPropertySymbols) {
        var eJ = Object.getOwnPropertySymbols(JJ);
        for (FJ = 0; FJ < eJ.length; FJ++) ZJ = eJ[FJ], cJ.indexOf(ZJ) >= 0 || Object.prototype.propertyIsEnumerable.call(JJ, ZJ) && (UJ[ZJ] = JJ[ZJ])
      }
      return UJ
    }

    function mJ(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function QJ(JJ) {
      for (var cJ = 1; cJ < arguments.length; cJ++) {
        var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
        cJ % 2 ? mJ(Object(ZJ), !0).forEach((function(cJ) {
          EJ(JJ, cJ, ZJ[cJ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : mJ(Object(ZJ)).forEach((function(cJ) {
          Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
        }))
      }
      return JJ
    }

    function EJ(JJ, cJ, ZJ) {
      return (cJ = function(JJ) {
        var cJ = function(JJ, cJ) {
          if ("object" != GJ(JJ) || !JJ) return JJ;
          var ZJ = JJ[Symbol.toPrimitive];
          if (void 0 !== ZJ) {
            var FJ = ZJ.call(JJ, cJ || "default");
            if ("object" != GJ(FJ)) return FJ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === cJ ? String : Number)(JJ)
        }(JJ, "string");
        return "symbol" == GJ(cJ) ? cJ : cJ + ""
      }(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }

    function VJ() {
      return VJ = Object.assign ? Object.assign.bind() : function(JJ) {
        for (var cJ = 1; cJ < arguments.length; cJ++) {
          var ZJ = arguments[cJ];
          for (var FJ in ZJ) Object.prototype.hasOwnProperty.call(ZJ, FJ) && (JJ[FJ] = ZJ[FJ])
        }
        return JJ
      }, VJ.apply(this, arguments)
    }
    var KJ = function(JJ) {
        var cJ = JJ.value,
          ZJ = JJ.formatter,
          FJ = eJ()(JJ.children) ? cJ : JJ.children;
        return AJ()(ZJ) ? ZJ(FJ) : FJ
      },
      yJ = function(JJ, cJ, ZJ) {
        var UJ, XJ, AJ = JJ.position,
          qJ = JJ.viewBox,
          jJ = JJ.offset,
          hJ = JJ.className,
          DJ = qJ,
          GJ = DJ.cx,
          fJ = DJ.cy,
          xJ = DJ.innerRadius,
          rJ = DJ.outerRadius,
          vJ = DJ.startAngle,
          mJ = DJ.endAngle,
          QJ = DJ.clockWise,
          EJ = (xJ + rJ) / 2,
          KJ = function(JJ, cJ) {
            return (0, sJ.I)(cJ - JJ) * Math.min(Math.abs(cJ - JJ), 360)
          }(vJ, mJ),
          yJ = KJ >= 0 ? 1 : -1;
        "insideStart" === AJ ? (UJ = vJ + yJ * jJ, XJ = QJ) : "insideEnd" === AJ ? (UJ = mJ - yJ * jJ, XJ = !QJ) : "end" === AJ && (UJ = mJ + yJ * jJ, XJ = QJ), XJ = KJ <= 0 ? XJ : !XJ;
        var SJ = (0, nJ.m)(GJ, fJ, EJ, UJ),
          IJ = (0, nJ.m)(GJ, fJ, EJ, UJ + 359 * (XJ ? 1 : -1)),
          MJ = "M".concat(SJ.x, ",").concat(SJ.y, "\n    A").concat(EJ, ",").concat(EJ, ",0,1,").concat(XJ ? 0 : 1, ",\n    ").concat(IJ.x, ",").concat(IJ.y),
          bJ = eJ()(JJ.id) ? (0, sJ.L)("recharts-radial-line-") : JJ.id;
        return FJ.createElement("text", VJ({}, ZJ, {
          dominantBaseline: "central",
          className: (0, YJ.d)("recharts-radial-bar-label", hJ)
        }), FJ.createElement("defs", null, FJ.createElement("path", {
          id: bJ,
          d: MJ
        })), FJ.createElement("textPath", {
          xlinkHref: "#".concat(bJ)
        }, cJ))
      },
      SJ = function(JJ) {
        var cJ = JJ.viewBox,
          ZJ = JJ.offset,
          FJ = JJ.position,
          UJ = cJ,
          eJ = UJ.cx,
          XJ = UJ.cy,
          AJ = UJ.innerRadius,
          qJ = UJ.outerRadius,
          jJ = (UJ.startAngle + UJ.endAngle) / 2;
        if ("outside" === FJ) {
          var YJ = (0, nJ.m)(eJ, XJ, qJ + ZJ, jJ),
            hJ = YJ.x;
          return {
            x: hJ,
            y: YJ.y,
            textAnchor: hJ >= eJ ? "start" : "end",
            verticalAnchor: "middle"
          }
        }
        if ("center" === FJ) return {
          x: eJ,
          y: XJ,
          textAnchor: "middle",
          verticalAnchor: "middle"
        };
        if ("centerTop" === FJ) return {
          x: eJ,
          y: XJ,
          textAnchor: "middle",
          verticalAnchor: "start"
        };
        if ("centerBottom" === FJ) return {
          x: eJ,
          y: XJ,
          textAnchor: "middle",
          verticalAnchor: "end"
        };
        var DJ = (AJ + qJ) / 2,
          sJ = (0, nJ.m)(eJ, XJ, DJ, jJ);
        return {
          x: sJ.x,
          y: sJ.y,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }
      },
      IJ = function(JJ) {
        var cJ = JJ.viewBox,
          ZJ = JJ.parentViewBox,
          FJ = JJ.offset,
          UJ = JJ.position,
          eJ = cJ,
          XJ = eJ.x,
          AJ = eJ.y,
          qJ = eJ.width,
          YJ = eJ.height,
          hJ = YJ >= 0 ? 1 : -1,
          DJ = hJ * FJ,
          nJ = hJ > 0 ? "end" : "start",
          GJ = hJ > 0 ? "start" : "end",
          fJ = qJ >= 0 ? 1 : -1,
          xJ = fJ * FJ,
          rJ = fJ > 0 ? "end" : "start",
          vJ = fJ > 0 ? "start" : "end";
        if ("top" === UJ) return QJ(QJ({}, {
          x: XJ + qJ / 2,
          y: AJ - hJ * FJ,
          textAnchor: "middle",
          verticalAnchor: nJ
        }), ZJ ? {
          height: Math.max(AJ - ZJ.y, 0),
          width: qJ
        } : {});
        if ("bottom" === UJ) return QJ(QJ({}, {
          x: XJ + qJ / 2,
          y: AJ + YJ + DJ,
          textAnchor: "middle",
          verticalAnchor: GJ
        }), ZJ ? {
          height: Math.max(ZJ.y + ZJ.height - (AJ + YJ), 0),
          width: qJ
        } : {});
        if ("left" === UJ) {
          var mJ = {
            x: XJ - xJ,
            y: AJ + YJ / 2,
            textAnchor: rJ,
            verticalAnchor: "middle"
          };
          return QJ(QJ({}, mJ), ZJ ? {
            width: Math.max(mJ.x - ZJ.x, 0),
            height: YJ
          } : {})
        }
        if ("right" === UJ) {
          var EJ = {
            x: XJ + qJ + xJ,
            y: AJ + YJ / 2,
            textAnchor: vJ,
            verticalAnchor: "middle"
          };
          return QJ(QJ({}, EJ), ZJ ? {
            width: Math.max(ZJ.x + ZJ.width - EJ.x, 0),
            height: YJ
          } : {})
        }
        var VJ = ZJ ? {
          width: qJ,
          height: YJ
        } : {};
        return "insideLeft" === UJ ? QJ({
          x: XJ + xJ,
          y: AJ + YJ / 2,
          textAnchor: vJ,
          verticalAnchor: "middle"
        }, VJ) : "insideRight" === UJ ? QJ({
          x: XJ + qJ - xJ,
          y: AJ + YJ / 2,
          textAnchor: rJ,
          verticalAnchor: "middle"
        }, VJ) : "insideTop" === UJ ? QJ({
          x: XJ + qJ / 2,
          y: AJ + DJ,
          textAnchor: "middle",
          verticalAnchor: GJ
        }, VJ) : "insideBottom" === UJ ? QJ({
          x: XJ + qJ / 2,
          y: AJ + YJ - DJ,
          textAnchor: "middle",
          verticalAnchor: nJ
        }, VJ) : "insideTopLeft" === UJ ? QJ({
          x: XJ + xJ,
          y: AJ + DJ,
          textAnchor: vJ,
          verticalAnchor: GJ
        }, VJ) : "insideTopRight" === UJ ? QJ({
          x: XJ + qJ - xJ,
          y: AJ + DJ,
          textAnchor: rJ,
          verticalAnchor: GJ
        }, VJ) : "insideBottomLeft" === UJ ? QJ({
          x: XJ + xJ,
          y: AJ + YJ - DJ,
          textAnchor: vJ,
          verticalAnchor: nJ
        }, VJ) : "insideBottomRight" === UJ ? QJ({
          x: XJ + qJ - xJ,
          y: AJ + YJ - DJ,
          textAnchor: rJ,
          verticalAnchor: nJ
        }, VJ) : jJ()(UJ) && ((0, sJ.C)(UJ.x) || (0, sJ.E)(UJ.x)) && ((0, sJ.C)(UJ.y) || (0, sJ.E)(UJ.y)) ? QJ({
          x: XJ + (0, sJ.l)(UJ.x, qJ),
          y: AJ + (0, sJ.l)(UJ.y, YJ),
          textAnchor: "end",
          verticalAnchor: "end"
        }, VJ) : QJ({
          x: XJ + qJ / 2,
          y: AJ + YJ / 2,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }, VJ)
      },
      MJ = function(JJ) {
        return "cx" in JJ && (0, sJ.C)(JJ.cx)
      };

    function bJ(JJ) {
      var cJ, ZJ = JJ.offset,
        UJ = QJ({
          offset: void 0 === ZJ ? 5 : ZJ
        }, vJ(JJ, fJ)),
        XJ = UJ.viewBox,
        qJ = UJ.position,
        jJ = UJ.value,
        sJ = UJ.children,
        nJ = UJ.content,
        GJ = UJ.className,
        xJ = void 0 === GJ ? "" : GJ,
        rJ = UJ.textBreakAll;
      if (!XJ || eJ()(jJ) && eJ()(sJ) && !(0, FJ.isValidElement)(nJ) && !AJ()(nJ)) return null;
      if ((0, FJ.isValidElement)(nJ)) return (0, FJ.cloneElement)(nJ, UJ);
      if (AJ()(nJ)) {
        if (cJ = (0, FJ.createElement)(nJ, UJ), (0, FJ.isValidElement)(cJ)) return cJ
      } else cJ = KJ(UJ);
      var mJ = MJ(XJ),
        EJ = (0, DJ.c)(UJ, !0);
      if (mJ && ("insideStart" === qJ || "insideEnd" === qJ || "end" === qJ)) return yJ(UJ, cJ, EJ);
      var bJ = mJ ? SJ(UJ) : IJ(UJ);
      return FJ.createElement(hJ.e, VJ({
        className: (0, YJ.d)("recharts-label", xJ)
      }, EJ, bJ, {
        breakAll: rJ
      }), cJ)
    }
    bJ.displayName = "Label";
    var wJ = function(JJ) {
      var cJ = JJ.cx,
        ZJ = JJ.cy,
        FJ = JJ.angle,
        UJ = JJ.startAngle,
        eJ = JJ.endAngle,
        XJ = JJ.r,
        AJ = JJ.radius,
        qJ = JJ.innerRadius,
        jJ = JJ.outerRadius,
        YJ = JJ.x,
        hJ = JJ.y,
        DJ = JJ.top,
        nJ = JJ.left,
        GJ = JJ.width,
        fJ = JJ.height,
        xJ = JJ.clockWise,
        rJ = JJ.labelViewBox;
      if (rJ) return rJ;
      if ((0, sJ.C)(GJ) && (0, sJ.C)(fJ)) {
        if ((0, sJ.C)(YJ) && (0, sJ.C)(hJ)) return {
          x: YJ,
          y: hJ,
          width: GJ,
          height: fJ
        };
        if ((0, sJ.C)(DJ) && (0, sJ.C)(nJ)) return {
          x: DJ,
          y: nJ,
          width: GJ,
          height: fJ
        }
      }
      return (0, sJ.C)(YJ) && (0, sJ.C)(hJ) ? {
        x: YJ,
        y: hJ,
        width: 0,
        height: 0
      } : (0, sJ.C)(cJ) && (0, sJ.C)(ZJ) ? {
        cx: cJ,
        cy: ZJ,
        startAngle: UJ || FJ || 0,
        endAngle: eJ || FJ || 0,
        innerRadius: qJ || 0,
        outerRadius: jJ || AJ || XJ || 0,
        clockWise: xJ
      } : JJ.viewBox ? JJ.viewBox : {}
    };
    bJ.parseViewBox = wJ, bJ.renderCallByParent = function(JJ, cJ) {
      var ZJ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!JJ || !JJ.children && ZJ && !JJ.label) return null;
      var UJ = JJ.children,
        eJ = wJ(JJ),
        XJ = (0, DJ.f)(UJ, bJ).map((function(JJ, ZJ) {
          return (0, FJ.cloneElement)(JJ, {
            viewBox: cJ || eJ,
            key: "label-".concat(ZJ)
          })
        }));
      if (!ZJ) return XJ;
      var qJ = function(JJ, cJ) {
        return JJ ? !0 === JJ ? FJ.createElement(bJ, {
          key: "label-implicit",
          viewBox: cJ
        }) : (0, sJ.y)(JJ) ? FJ.createElement(bJ, {
          key: "label-implicit",
          viewBox: cJ,
          value: JJ
        }) : (0, FJ.isValidElement)(JJ) ? JJ.type === bJ ? (0, FJ.cloneElement)(JJ, {
          key: "label-implicit",
          viewBox: cJ
        }) : FJ.createElement(bJ, {
          key: "label-implicit",
          content: JJ,
          viewBox: cJ
        }) : AJ()(JJ) ? FJ.createElement(bJ, {
          key: "label-implicit",
          content: JJ,
          viewBox: cJ
        }) : jJ()(JJ) ? FJ.createElement(bJ, VJ({
          viewBox: cJ
        }, JJ, {
          key: "label-implicit"
        })) : null : null
      }(JJ.label, cJ || eJ);
      return [qJ].concat(xJ(XJ))
    }
  },
  5653: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => IJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(4786),
      eJ = ZJ.n(UJ),
      XJ = ZJ(4480),
      AJ = ZJ.n(XJ),
      qJ = ZJ(4641),
      jJ = ZJ.n(qJ),
      YJ = ZJ(5659),
      hJ = ZJ.n(YJ),
      DJ = ZJ(5585),
      sJ = ZJ(5332),
      nJ = ZJ(4797),
      GJ = ZJ(5497);

    function fJ(JJ) {
      return fJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, fJ(JJ)
    }
    var xJ = ["valueAccessor"],
      rJ = ["data", "dataKey", "clockWise", "id", "textBreakAll"];

    function vJ(JJ) {
      return function(JJ) {
        if (Array.isArray(JJ)) return mJ(JJ)
      }(JJ) || function(JJ) {
        if ("undefined" !== typeof Symbol && null != JJ[Symbol.iterator] || null != JJ["@@iterator"]) return Array.from(JJ)
      }(JJ) || function(JJ, cJ) {
        if (!JJ) return;
        if ("string" === typeof JJ) return mJ(JJ, cJ);
        var ZJ = Object.prototype.toString.call(JJ).slice(8, -1);
        "Object" === ZJ && JJ.constructor && (ZJ = JJ.constructor.name);
        if ("Map" === ZJ || "Set" === ZJ) return Array.from(JJ);
        if ("Arguments" === ZJ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZJ)) return mJ(JJ, cJ)
      }(JJ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function mJ(JJ, cJ) {
      (null == cJ || cJ > JJ.length) && (cJ = JJ.length);
      for (var ZJ = 0, FJ = new Array(cJ); ZJ < cJ; ZJ++) FJ[ZJ] = JJ[ZJ];
      return FJ
    }

    function QJ() {
      return QJ = Object.assign ? Object.assign.bind() : function(JJ) {
        for (var cJ = 1; cJ < arguments.length; cJ++) {
          var ZJ = arguments[cJ];
          for (var FJ in ZJ) Object.prototype.hasOwnProperty.call(ZJ, FJ) && (JJ[FJ] = ZJ[FJ])
        }
        return JJ
      }, QJ.apply(this, arguments)
    }

    function EJ(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function VJ(JJ) {
      for (var cJ = 1; cJ < arguments.length; cJ++) {
        var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
        cJ % 2 ? EJ(Object(ZJ), !0).forEach((function(cJ) {
          KJ(JJ, cJ, ZJ[cJ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : EJ(Object(ZJ)).forEach((function(cJ) {
          Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
        }))
      }
      return JJ
    }

    function KJ(JJ, cJ, ZJ) {
      return (cJ = function(JJ) {
        var cJ = function(JJ, cJ) {
          if ("object" != fJ(JJ) || !JJ) return JJ;
          var ZJ = JJ[Symbol.toPrimitive];
          if (void 0 !== ZJ) {
            var FJ = ZJ.call(JJ, cJ || "default");
            if ("object" != fJ(FJ)) return FJ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === cJ ? String : Number)(JJ)
        }(JJ, "string");
        return "symbol" == fJ(cJ) ? cJ : cJ + ""
      }(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }

    function yJ(JJ, cJ) {
      if (null == JJ) return {};
      var ZJ, FJ, UJ = function(JJ, cJ) {
        if (null == JJ) return {};
        var ZJ = {};
        for (var FJ in JJ)
          if (Object.prototype.hasOwnProperty.call(JJ, FJ)) {
            if (cJ.indexOf(FJ) >= 0) continue;
            ZJ[FJ] = JJ[FJ]
          } return ZJ
      }(JJ, cJ);
      if (Object.getOwnPropertySymbols) {
        var eJ = Object.getOwnPropertySymbols(JJ);
        for (FJ = 0; FJ < eJ.length; FJ++) ZJ = eJ[FJ], cJ.indexOf(ZJ) >= 0 || Object.prototype.propertyIsEnumerable.call(JJ, ZJ) && (UJ[ZJ] = JJ[ZJ])
      }
      return UJ
    }
    var SJ = function(JJ) {
      return Array.isArray(JJ.value) ? hJ()(JJ.value) : JJ.value
    };

    function IJ(JJ) {
      var cJ = JJ.valueAccessor,
        ZJ = void 0 === cJ ? SJ : cJ,
        UJ = yJ(JJ, xJ),
        XJ = UJ.data,
        AJ = UJ.dataKey,
        qJ = UJ.clockWise,
        jJ = UJ.id,
        YJ = UJ.textBreakAll,
        hJ = yJ(UJ, rJ);
      return XJ && XJ.length ? FJ.createElement(sJ.e, {
        className: "recharts-label-list"
      }, XJ.map((function(JJ, cJ) {
        var UJ = eJ()(AJ) ? ZJ(JJ, cJ) : (0, GJ.eb)(JJ && JJ.payload, AJ),
          XJ = eJ()(jJ) ? {} : {
            id: "".concat(jJ, "-").concat(cJ)
          };
        return FJ.createElement(DJ.d, QJ({}, (0, nJ.c)(JJ, !0), hJ, XJ, {
          parentViewBox: JJ.parentViewBox,
          value: UJ,
          textBreakAll: YJ,
          viewBox: DJ.d.parseViewBox(eJ()(qJ) ? JJ : VJ(VJ({}, JJ), {}, {
            clockWise: qJ
          })),
          key: "label-".concat(cJ),
          index: cJ
        }))
      }))) : null
    }
    IJ.displayName = "LabelList", IJ.renderCallByParent = function(JJ, cJ) {
      var ZJ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!JJ || !JJ.children && ZJ && !JJ.label) return null;
      var UJ = JJ.children,
        eJ = (0, nJ.f)(UJ, IJ).map((function(JJ, ZJ) {
          return (0, FJ.cloneElement)(JJ, {
            data: cJ,
            key: "labelList-".concat(ZJ)
          })
        }));
      return ZJ ? [function(JJ, cJ) {
        return JJ ? !0 === JJ ? FJ.createElement(IJ, {
          key: "labelList-implicit",
          data: cJ
        }) : FJ.isValidElement(JJ) || jJ()(JJ) ? FJ.createElement(IJ, {
          key: "labelList-implicit",
          data: cJ,
          content: JJ
        }) : AJ()(JJ) ? FJ.createElement(IJ, QJ({
          data: cJ
        }, JJ, {
          key: "labelList-implicit"
        })) : null : null
      }(JJ.label, cJ)].concat(vJ(eJ)) : eJ
    }
  },
  5406: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => zJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(4641),
      eJ = ZJ.n(UJ),
      XJ = ZJ(4468),
      AJ = ZJ(4794),
      qJ = ZJ(5324),
      jJ = ZJ(5415),
      YJ = ZJ(4817);

    function hJ(JJ) {
      return hJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, hJ(JJ)
    }

    function DJ() {
      return DJ = Object.assign ? Object.assign.bind() : function(JJ) {
        for (var cJ = 1; cJ < arguments.length; cJ++) {
          var ZJ = arguments[cJ];
          for (var FJ in ZJ) Object.prototype.hasOwnProperty.call(ZJ, FJ) && (JJ[FJ] = ZJ[FJ])
        }
        return JJ
      }, DJ.apply(this, arguments)
    }

    function sJ(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function nJ(JJ, cJ) {
      for (var ZJ = 0; ZJ < cJ.length; ZJ++) {
        var FJ = cJ[ZJ];
        FJ.enumerable = FJ.enumerable || !1, FJ.configurable = !0, "value" in FJ && (FJ.writable = !0), Object.defineProperty(JJ, mJ(FJ.key), FJ)
      }
    }

    function GJ(JJ, cJ, ZJ) {
      return cJ = xJ(cJ),
        function(JJ, cJ) {
          if (cJ && ("object" === hJ(cJ) || "function" === typeof cJ)) return cJ;
          if (void 0 !== cJ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(JJ) {
            if (void 0 === JJ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return JJ
          }(JJ)
        }(JJ, fJ() ? Reflect.construct(cJ, ZJ || [], xJ(JJ).constructor) : cJ.apply(JJ, ZJ))
    }

    function fJ() {
      try {
        var JJ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (JJ) {}
      return (fJ = function() {
        return !!JJ
      })()
    }

    function xJ(JJ) {
      return xJ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(JJ) {
        return JJ.__proto__ || Object.getPrototypeOf(JJ)
      }, xJ(JJ)
    }

    function rJ(JJ, cJ) {
      return rJ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(JJ, cJ) {
        return JJ.__proto__ = cJ, JJ
      }, rJ(JJ, cJ)
    }

    function vJ(JJ, cJ, ZJ) {
      return (cJ = mJ(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }

    function mJ(JJ) {
      var cJ = function(JJ, cJ) {
        if ("object" != hJ(JJ) || !JJ) return JJ;
        var ZJ = JJ[Symbol.toPrimitive];
        if (void 0 !== ZJ) {
          var FJ = ZJ.call(JJ, cJ || "default");
          if ("object" != hJ(FJ)) return FJ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === cJ ? String : Number)(JJ)
      }(JJ, "string");
      return "symbol" == hJ(cJ) ? cJ : cJ + ""
    }
    var QJ = 32,
      EJ = function(JJ) {
        function cJ() {
          return function(JJ, cJ) {
            if (!(JJ instanceof cJ)) throw new TypeError("Cannot call a class as a function")
          }(this, cJ), GJ(this, cJ, arguments)
        }
        return function(JJ, cJ) {
          if ("function" !== typeof cJ && null !== cJ) throw new TypeError("Super expression must either be null or a function");
          JJ.prototype = Object.create(cJ && cJ.prototype, {
            constructor: {
              value: JJ,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(JJ, "prototype", {
            writable: !1
          }), cJ && rJ(JJ, cJ)
        }(cJ, JJ), ZJ = cJ, UJ = [{
          key: "renderIcon",
          value: function(JJ) {
            var cJ = this.props.inactiveColor,
              ZJ = 16,
              UJ = QJ / 6,
              eJ = QJ / 3,
              XJ = JJ.inactive ? cJ : JJ.color;
            if ("plainline" === JJ.type) return FJ.createElement("line", {
              strokeWidth: 4,
              fill: "none",
              stroke: XJ,
              strokeDasharray: JJ.payload.strokeDasharray,
              x1: 0,
              y1: ZJ,
              x2: QJ,
              y2: ZJ,
              className: "recharts-legend-icon"
            });
            if ("line" === JJ.type) return FJ.createElement("path", {
              strokeWidth: 4,
              fill: "none",
              stroke: XJ,
              d: "M0,".concat(ZJ, "h").concat(eJ, "\n            A").concat(UJ, ",").concat(UJ, ",0,1,1,").concat(2 * eJ, ",").concat(ZJ, "\n            H").concat(QJ, "M").concat(2 * eJ, ",").concat(ZJ, "\n            A").concat(UJ, ",").concat(UJ, ",0,1,1,").concat(eJ, ",").concat(ZJ),
              className: "recharts-legend-icon"
            });
            if ("rect" === JJ.type) return FJ.createElement("path", {
              stroke: "none",
              fill: XJ,
              d: "M0,".concat(4, "h").concat(QJ, "v").concat(24, "h").concat(-32, "z"),
              className: "recharts-legend-icon"
            });
            if (FJ.isValidElement(JJ.legendIcon)) {
              var AJ = function(JJ) {
                for (var cJ = 1; cJ < arguments.length; cJ++) {
                  var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
                  cJ % 2 ? sJ(Object(ZJ), !0).forEach((function(cJ) {
                    vJ(JJ, cJ, ZJ[cJ])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : sJ(Object(ZJ)).forEach((function(cJ) {
                    Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
                  }))
                }
                return JJ
              }({}, JJ);
              return delete AJ.legendIcon, FJ.cloneElement(JJ.legendIcon, AJ)
            }
            return FJ.createElement(jJ.b, {
              fill: XJ,
              cx: ZJ,
              cy: ZJ,
              size: QJ,
              sizeType: "diameter",
              type: JJ.type
            })
          }
        }, {
          key: "renderItems",
          value: function() {
            var JJ = this,
              cJ = this.props,
              ZJ = cJ.payload,
              UJ = cJ.iconSize,
              jJ = cJ.layout,
              hJ = cJ.formatter,
              sJ = cJ.inactiveColor,
              nJ = {
                x: 0,
                y: 0,
                width: QJ,
                height: QJ
              },
              GJ = {
                display: "horizontal" === jJ ? "inline-block" : "block",
                marginRight: 10
              },
              fJ = {
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: 4
              };
            return ZJ.map((function(cJ, ZJ) {
              var jJ = cJ.formatter || hJ,
                xJ = (0, XJ.d)(vJ(vJ({
                  "recharts-legend-item": !0
                }, "legend-item-".concat(ZJ), !0), "inactive", cJ.inactive));
              if ("none" === cJ.type) return null;
              var rJ = eJ()(cJ.value) ? null : cJ.value;
              (0, AJ.e)(!eJ()(cJ.value), 'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>');
              var mJ = cJ.inactive ? sJ : cJ.color;
              return FJ.createElement("li", DJ({
                className: xJ,
                style: GJ,
                key: "legend-item-".concat(ZJ)
              }, (0, YJ.n)(JJ.props, cJ, ZJ)), FJ.createElement(qJ.d, {
                width: UJ,
                height: UJ,
                viewBox: nJ,
                style: fJ
              }, JJ.renderIcon(cJ)), FJ.createElement("span", {
                className: "recharts-legend-item-text",
                style: {
                  color: mJ
                }
              }, jJ ? jJ(rJ, cJ, ZJ) : rJ))
            }))
          }
        }, {
          key: "render",
          value: function() {
            var JJ = this.props,
              cJ = JJ.payload,
              ZJ = JJ.layout,
              UJ = JJ.align;
            if (!cJ || !cJ.length) return null;
            var eJ = {
              padding: 0,
              margin: 0,
              textAlign: "horizontal" === ZJ ? UJ : "left"
            };
            return FJ.createElement("ul", {
              className: "recharts-default-legend",
              style: eJ
            }, this.renderItems())
          }
        }], UJ && nJ(ZJ.prototype, UJ), hJ && nJ(ZJ, hJ), Object.defineProperty(ZJ, "prototype", {
          writable: !1
        }), ZJ;
        var ZJ, UJ, hJ
      }(FJ.PureComponent);
    vJ(EJ, "displayName", "Legend"), vJ(EJ, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "middle",
      inactiveColor: "#ccc"
    });
    var VJ = ZJ(4543),
      KJ = ZJ(5347);

    function yJ(JJ) {
      return yJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, yJ(JJ)
    }
    var SJ = ["ref"];

    function IJ(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function MJ(JJ) {
      for (var cJ = 1; cJ < arguments.length; cJ++) {
        var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
        cJ % 2 ? IJ(Object(ZJ), !0).forEach((function(cJ) {
          PJ(JJ, cJ, ZJ[cJ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : IJ(Object(ZJ)).forEach((function(cJ) {
          Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
        }))
      }
      return JJ
    }

    function bJ(JJ, cJ) {
      for (var ZJ = 0; ZJ < cJ.length; ZJ++) {
        var FJ = cJ[ZJ];
        FJ.enumerable = FJ.enumerable || !1, FJ.configurable = !0, "value" in FJ && (FJ.writable = !0), Object.defineProperty(JJ, kJ(FJ.key), FJ)
      }
    }

    function wJ(JJ, cJ, ZJ) {
      return cJ = gJ(cJ),
        function(JJ, cJ) {
          if (cJ && ("object" === yJ(cJ) || "function" === typeof cJ)) return cJ;
          if (void 0 !== cJ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(JJ) {
            if (void 0 === JJ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return JJ
          }(JJ)
        }(JJ, WJ() ? Reflect.construct(cJ, ZJ || [], gJ(JJ).constructor) : cJ.apply(JJ, ZJ))
    }

    function WJ() {
      try {
        var JJ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (JJ) {}
      return (WJ = function() {
        return !!JJ
      })()
    }

    function gJ(JJ) {
      return gJ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(JJ) {
        return JJ.__proto__ || Object.getPrototypeOf(JJ)
      }, gJ(JJ)
    }

    function HJ(JJ, cJ) {
      return HJ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(JJ, cJ) {
        return JJ.__proto__ = cJ, JJ
      }, HJ(JJ, cJ)
    }

    function PJ(JJ, cJ, ZJ) {
      return (cJ = kJ(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }

    function kJ(JJ) {
      var cJ = function(JJ, cJ) {
        if ("object" != yJ(JJ) || !JJ) return JJ;
        var ZJ = JJ[Symbol.toPrimitive];
        if (void 0 !== ZJ) {
          var FJ = ZJ.call(JJ, cJ || "default");
          if ("object" != yJ(FJ)) return FJ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === cJ ? String : Number)(JJ)
      }(JJ, "string");
      return "symbol" == yJ(cJ) ? cJ : cJ + ""
    }

    function pJ(JJ, cJ) {
      if (null == JJ) return {};
      var ZJ, FJ, UJ = function(JJ, cJ) {
        if (null == JJ) return {};
        var ZJ = {};
        for (var FJ in JJ)
          if (Object.prototype.hasOwnProperty.call(JJ, FJ)) {
            if (cJ.indexOf(FJ) >= 0) continue;
            ZJ[FJ] = JJ[FJ]
          } return ZJ
      }(JJ, cJ);
      if (Object.getOwnPropertySymbols) {
        var eJ = Object.getOwnPropertySymbols(JJ);
        for (FJ = 0; FJ < eJ.length; FJ++) ZJ = eJ[FJ], cJ.indexOf(ZJ) >= 0 || Object.prototype.propertyIsEnumerable.call(JJ, ZJ) && (UJ[ZJ] = JJ[ZJ])
      }
      return UJ
    }

    function dJ(JJ) {
      return JJ.value
    }
    var zJ = function(JJ) {
      function cJ() {
        var JJ;
        ! function(JJ, cJ) {
          if (!(JJ instanceof cJ)) throw new TypeError("Cannot call a class as a function")
        }(this, cJ);
        for (var ZJ = arguments.length, FJ = new Array(ZJ), UJ = 0; UJ < ZJ; UJ++) FJ[UJ] = arguments[UJ];
        return PJ(JJ = wJ(this, cJ, [].concat(FJ)), "lastBoundingBox", {
          width: -1,
          height: -1
        }), JJ
      }
      return function(JJ, cJ) {
        if ("function" !== typeof cJ && null !== cJ) throw new TypeError("Super expression must either be null or a function");
        JJ.prototype = Object.create(cJ && cJ.prototype, {
          constructor: {
            value: JJ,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(JJ, "prototype", {
          writable: !1
        }), cJ && HJ(JJ, cJ)
      }(cJ, JJ), ZJ = cJ, eJ = [{
        key: "getWithHeight",
        value: function(JJ, cJ) {
          var ZJ = MJ(MJ({}, this.defaultProps), JJ.props).layout;
          return "vertical" === ZJ && (0, VJ.C)(JJ.props.height) ? {
            height: JJ.props.height
          } : "horizontal" === ZJ ? {
            width: JJ.props.width || cJ
          } : null
        }
      }], (UJ = [{
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
            var JJ = this.wrapperNode.getBoundingClientRect();
            return JJ.height = this.wrapperNode.offsetHeight, JJ.width = this.wrapperNode.offsetWidth, JJ
          }
          return null
        }
      }, {
        key: "updateBBox",
        value: function() {
          var JJ = this.props.onBBoxUpdate,
            cJ = this.getBBox();
          cJ ? (Math.abs(cJ.width - this.lastBoundingBox.width) > 1 || Math.abs(cJ.height - this.lastBoundingBox.height) > 1) && (this.lastBoundingBox.width = cJ.width, this.lastBoundingBox.height = cJ.height, JJ && JJ(cJ)) : -1 === this.lastBoundingBox.width && -1 === this.lastBoundingBox.height || (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, JJ && JJ(null))
        }
      }, {
        key: "getBBoxSnapshot",
        value: function() {
          return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? MJ({}, this.lastBoundingBox) : {
            width: 0,
            height: 0
          }
        }
      }, {
        key: "getDefaultPosition",
        value: function(JJ) {
          var cJ, ZJ, FJ = this.props,
            UJ = FJ.layout,
            eJ = FJ.align,
            XJ = FJ.verticalAlign,
            AJ = FJ.margin,
            qJ = FJ.chartWidth,
            jJ = FJ.chartHeight;
          return JJ && (void 0 !== JJ.left && null !== JJ.left || void 0 !== JJ.right && null !== JJ.right) || (cJ = "center" === eJ && "vertical" === UJ ? {
            left: ((qJ || 0) - this.getBBoxSnapshot().width) / 2
          } : "right" === eJ ? {
            right: AJ && AJ.right || 0
          } : {
            left: AJ && AJ.left || 0
          }), JJ && (void 0 !== JJ.top && null !== JJ.top || void 0 !== JJ.bottom && null !== JJ.bottom) || (ZJ = "middle" === XJ ? {
            top: ((jJ || 0) - this.getBBoxSnapshot().height) / 2
          } : "bottom" === XJ ? {
            bottom: AJ && AJ.bottom || 0
          } : {
            top: AJ && AJ.top || 0
          }), MJ(MJ({}, cJ), ZJ)
        }
      }, {
        key: "render",
        value: function() {
          var JJ = this,
            cJ = this.props,
            ZJ = cJ.content,
            UJ = cJ.width,
            eJ = cJ.height,
            XJ = cJ.wrapperStyle,
            AJ = cJ.payloadUniqBy,
            qJ = cJ.payload,
            jJ = MJ(MJ({
              position: "absolute",
              width: UJ || "auto",
              height: eJ || "auto"
            }, this.getDefaultPosition(XJ)), XJ);
          return FJ.createElement("div", {
            className: "recharts-legend-wrapper",
            style: jJ,
            ref: function(cJ) {
              JJ.wrapperNode = cJ
            }
          }, function(JJ, cJ) {
            if (FJ.isValidElement(JJ)) return FJ.cloneElement(JJ, cJ);
            if ("function" === typeof JJ) return FJ.createElement(JJ, cJ);
            cJ.ref;
            var ZJ = pJ(cJ, SJ);
            return FJ.createElement(EJ, ZJ)
          }(ZJ, MJ(MJ({}, this.props), {}, {
            payload: (0, KJ.c)(qJ, AJ, dJ)
          })))
        }
      }]) && bJ(ZJ.prototype, UJ), eJ && bJ(ZJ, eJ), Object.defineProperty(ZJ, "prototype", {
        writable: !1
      }), ZJ;
      var ZJ, UJ, eJ
    }(FJ.PureComponent);
    PJ(zJ, "displayName", "Legend"), PJ(zJ, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom"
    })
  },
  4464: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => fJ
    });
    var FJ = ZJ(4468),
      UJ = ZJ(47),
      eJ = ZJ(4476),
      XJ = ZJ.n(eJ),
      AJ = ZJ(4543),
      qJ = ZJ(4794),
      jJ = ZJ(4797);

    function YJ(JJ) {
      return YJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, YJ(JJ)
    }

    function hJ(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function DJ(JJ) {
      for (var cJ = 1; cJ < arguments.length; cJ++) {
        var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
        cJ % 2 ? hJ(Object(ZJ), !0).forEach((function(cJ) {
          sJ(JJ, cJ, ZJ[cJ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : hJ(Object(ZJ)).forEach((function(cJ) {
          Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
        }))
      }
      return JJ
    }

    function sJ(JJ, cJ, ZJ) {
      return (cJ = function(JJ) {
        var cJ = function(JJ, cJ) {
          if ("object" != YJ(JJ) || !JJ) return JJ;
          var ZJ = JJ[Symbol.toPrimitive];
          if (void 0 !== ZJ) {
            var FJ = ZJ.call(JJ, cJ || "default");
            if ("object" != YJ(FJ)) return FJ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === cJ ? String : Number)(JJ)
        }(JJ, "string");
        return "symbol" == YJ(cJ) ? cJ : cJ + ""
      }(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }

    function nJ(JJ, cJ) {
      return function(JJ) {
        if (Array.isArray(JJ)) return JJ
      }(JJ) || function(JJ, cJ) {
        var ZJ = null == JJ ? null : "undefined" != typeof Symbol && JJ[Symbol.iterator] || JJ["@@iterator"];
        if (null != ZJ) {
          var FJ, UJ, eJ, XJ, AJ = [],
            qJ = !0,
            jJ = !1;
          try {
            if (eJ = (ZJ = ZJ.call(JJ)).next, 0 === cJ) {
              if (Object(ZJ) !== ZJ) return;
              qJ = !1
            } else
              for (; !(qJ = (FJ = eJ.call(ZJ)).done) && (AJ.push(FJ.value), AJ.length !== cJ); qJ = !0);
          } catch (JJ) {
            jJ = !0, UJ = JJ
          } finally {
            try {
              if (!qJ && null != ZJ.return && (XJ = ZJ.return(), Object(XJ) !== XJ)) return
            } finally {
              if (jJ) throw UJ
            }
          }
          return AJ
        }
      }(JJ, cJ) || function(JJ, cJ) {
        if (!JJ) return;
        if ("string" === typeof JJ) return GJ(JJ, cJ);
        var ZJ = Object.prototype.toString.call(JJ).slice(8, -1);
        "Object" === ZJ && JJ.constructor && (ZJ = JJ.constructor.name);
        if ("Map" === ZJ || "Set" === ZJ) return Array.from(JJ);
        if ("Arguments" === ZJ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZJ)) return GJ(JJ, cJ)
      }(JJ, cJ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function GJ(JJ, cJ) {
      (null == cJ || cJ > JJ.length) && (cJ = JJ.length);
      for (var ZJ = 0, FJ = new Array(cJ); ZJ < cJ; ZJ++) FJ[ZJ] = JJ[ZJ];
      return FJ
    }
    var fJ = (0, UJ.forwardRef)((function(JJ, cJ) {
      var ZJ = JJ.aspect,
        eJ = JJ.initialDimension,
        YJ = void 0 === eJ ? {
          width: -1,
          height: -1
        } : eJ,
        hJ = JJ.width,
        sJ = void 0 === hJ ? "100%" : hJ,
        GJ = JJ.height,
        fJ = void 0 === GJ ? "100%" : GJ,
        xJ = JJ.minWidth,
        rJ = void 0 === xJ ? 0 : xJ,
        vJ = JJ.minHeight,
        mJ = JJ.maxHeight,
        QJ = JJ.children,
        EJ = JJ.debounce,
        VJ = void 0 === EJ ? 0 : EJ,
        KJ = JJ.id,
        yJ = JJ.className,
        SJ = JJ.Im,
        IJ = JJ.style,
        MJ = void 0 === IJ ? {} : IJ,
        bJ = (0, UJ.useRef)(null),
        wJ = (0, UJ.useRef)();
      wJ.current = SJ, (0, UJ.useImperativeHandle)(cJ, (function() {
        return Object.defineProperty(bJ.current, "current", {
          get: function() {
            return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), bJ.current
          },
          configurable: !0
        })
      }));
      var WJ = nJ((0, UJ.useState)({
          containerWidth: YJ.width,
          containerHeight: YJ.height
        }), 2),
        gJ = WJ[0],
        HJ = WJ[1],
        PJ = (0, UJ.useCallback)((function(JJ, cJ) {
          HJ((function(ZJ) {
            var FJ = Math.round(JJ),
              UJ = Math.round(cJ);
            return ZJ.containerWidth === FJ && ZJ.containerHeight === UJ ? ZJ : {
              containerWidth: FJ,
              containerHeight: UJ
            }
          }))
        }), []);
      (0, UJ.useEffect)((function() {
        var JJ = function(JJ) {
          var cJ, ZJ = JJ[0].contentRect,
            FJ = ZJ.width,
            UJ = ZJ.height;
          PJ(FJ, UJ), null === (cJ = wJ.current) || void 0 === cJ || cJ.call(wJ, FJ, UJ)
        };
        VJ > 0 && (JJ = XJ()(JJ, VJ, {
          trailing: !0,
          leading: !1
        }));
        var cJ = new ResizeObserver(JJ),
          ZJ = bJ.current.getBoundingClientRect(),
          FJ = ZJ.width,
          UJ = ZJ.height;
        return PJ(FJ, UJ), cJ.observe(bJ.current),
          function() {
            cJ.disconnect()
          }
      }), [PJ, VJ]);
      var kJ = (0, UJ.useMemo)((function() {
        var JJ = gJ.containerWidth,
          cJ = gJ.containerHeight;
        if (JJ < 0 || cJ < 0) return null;
        (0, qJ.e)((0, AJ.E)(sJ) || (0, AJ.E)(fJ), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", sJ, fJ), (0, qJ.e)(!ZJ || ZJ > 0, "The aspect(%s) must be greater than zero.", ZJ);
        var FJ = (0, AJ.E)(sJ) ? JJ : sJ,
          eJ = (0, AJ.E)(fJ) ? cJ : fJ;
        ZJ && ZJ > 0 && (FJ ? eJ = FJ / ZJ : eJ && (FJ = eJ * ZJ), mJ && eJ > mJ && (eJ = mJ)), (0, qJ.e)(FJ > 0 || eJ > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", FJ, eJ, sJ, fJ, rJ, vJ, ZJ);
        var XJ = !Array.isArray(QJ) && (0, jJ.k)(QJ.type).endsWith("Chart");
        return UJ.Children.map(QJ, (function(JJ) {
          return UJ.isValidElement(JJ) ? (0, UJ.cloneElement)(JJ, DJ({
            width: FJ,
            height: eJ
          }, XJ ? {
            style: DJ({
              height: "100%",
              width: "100%",
              maxHeight: eJ,
              maxWidth: FJ
            }, JJ.props.style)
          } : {})) : JJ
        }))
      }), [ZJ, QJ, fJ, mJ, vJ, rJ, gJ, sJ]);
      return UJ.createElement("div", {
        id: KJ ? "".concat(KJ) : void 0,
        className: (0, FJ.d)("recharts-responsive-container", yJ),
        style: DJ(DJ({}, MJ), {}, {
          width: sJ,
          height: fJ,
          minWidth: rJ,
          minHeight: vJ,
          maxHeight: mJ
        }),
        ref: bJ
      }, kJ)
    }))
  },
  5488: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => NJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(4786),
      eJ = ZJ.n(UJ),
      XJ = ZJ(4468),
      AJ = ZJ(4543),
      qJ = ZJ(5343),
      jJ = ZJ(4797),
      YJ = ZJ(5490);

    function hJ(JJ) {
      return hJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, hJ(JJ)
    }

    function DJ(JJ, cJ) {
      return function(JJ) {
        if (Array.isArray(JJ)) return JJ
      }(JJ) || function(JJ, cJ) {
        var ZJ = null == JJ ? null : "undefined" != typeof Symbol && JJ[Symbol.iterator] || JJ["@@iterator"];
        if (null != ZJ) {
          var FJ, UJ, eJ, XJ, AJ = [],
            qJ = !0,
            jJ = !1;
          try {
            if (eJ = (ZJ = ZJ.call(JJ)).next, 0 === cJ) {
              if (Object(ZJ) !== ZJ) return;
              qJ = !1
            } else
              for (; !(qJ = (FJ = eJ.call(ZJ)).done) && (AJ.push(FJ.value), AJ.length !== cJ); qJ = !0);
          } catch (JJ) {
            jJ = !0, UJ = JJ
          } finally {
            try {
              if (!qJ && null != ZJ.return && (XJ = ZJ.return(), Object(XJ) !== XJ)) return
            } finally {
              if (jJ) throw UJ
            }
          }
          return AJ
        }
      }(JJ, cJ) || function(JJ, cJ) {
        if (!JJ) return;
        if ("string" === typeof JJ) return sJ(JJ, cJ);
        var ZJ = Object.prototype.toString.call(JJ).slice(8, -1);
        "Object" === ZJ && JJ.constructor && (ZJ = JJ.constructor.name);
        if ("Map" === ZJ || "Set" === ZJ) return Array.from(JJ);
        if ("Arguments" === ZJ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZJ)) return sJ(JJ, cJ)
      }(JJ, cJ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function sJ(JJ, cJ) {
      (null == cJ || cJ > JJ.length) && (cJ = JJ.length);
      for (var ZJ = 0, FJ = new Array(cJ); ZJ < cJ; ZJ++) FJ[ZJ] = JJ[ZJ];
      return FJ
    }

    function nJ(JJ, cJ) {
      for (var ZJ = 0; ZJ < cJ.length; ZJ++) {
        var FJ = cJ[ZJ];
        FJ.enumerable = FJ.enumerable || !1, FJ.configurable = !0, "value" in FJ && (FJ.writable = !0), Object.defineProperty(JJ, GJ(FJ.key), FJ)
      }
    }

    function GJ(JJ) {
      var cJ = function(JJ, cJ) {
        if ("object" != hJ(JJ) || !JJ) return JJ;
        var ZJ = JJ[Symbol.toPrimitive];
        if (void 0 !== ZJ) {
          var FJ = ZJ.call(JJ, cJ || "default");
          if ("object" != hJ(FJ)) return FJ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === cJ ? String : Number)(JJ)
      }(JJ, "string");
      return "symbol" == hJ(cJ) ? cJ : cJ + ""
    }
    var fJ = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      xJ = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      rJ = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
      vJ = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
      mJ = {
        cm: 96 / 2.54,
        mm: 96 / 25.4,
        pt: 96 / 72,
        pc: 16,
        in: 96,
        Q: 96 / 101.6,
        px: 1
      },
      QJ = Object.keys(mJ),
      EJ = "NaN";
    var VJ = function() {
      function JJ(cJ, ZJ) {
        ! function(JJ, cJ) {
          if (!(JJ instanceof cJ)) throw new TypeError("Cannot call a class as a function")
        }(this, JJ), this.num = cJ, this.unit = ZJ, this.num = cJ, this.unit = ZJ, Number.isNaN(cJ) && (this.unit = ""), "" === ZJ || rJ.test(ZJ) || (this.num = NaN, this.unit = ""), QJ.includes(ZJ) && (this.num = function(JJ, cJ) {
          return JJ * mJ[cJ]
        }(cJ, ZJ), this.unit = "px")
      }
      return cJ = JJ, FJ = [{
        key: "parse",
        value: function(cJ) {
          var ZJ, FJ = DJ(null !== (ZJ = vJ.exec(cJ)) && void 0 !== ZJ ? ZJ : [], 3),
            UJ = FJ[1],
            eJ = FJ[2];
          return new JJ(parseFloat(UJ), null !== eJ && void 0 !== eJ ? eJ : "")
        }
      }], (ZJ = [{
        key: "add",
        value: function(cJ) {
          return this.unit !== cJ.unit ? new JJ(NaN, "") : new JJ(this.num + cJ.num, this.unit)
        }
      }, {
        key: "subtract",
        value: function(cJ) {
          return this.unit !== cJ.unit ? new JJ(NaN, "") : new JJ(this.num - cJ.num, this.unit)
        }
      }, {
        key: "multiply",
        value: function(cJ) {
          return "" !== this.unit && "" !== cJ.unit && this.unit !== cJ.unit ? new JJ(NaN, "") : new JJ(this.num * cJ.num, this.unit || cJ.unit)
        }
      }, {
        key: "divide",
        value: function(cJ) {
          return "" !== this.unit && "" !== cJ.unit && this.unit !== cJ.unit ? new JJ(NaN, "") : new JJ(this.num / cJ.num, this.unit || cJ.unit)
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
      }]) && nJ(cJ.prototype, ZJ), FJ && nJ(cJ, FJ), Object.defineProperty(cJ, "prototype", {
        writable: !1
      }), cJ;
      var cJ, ZJ, FJ
    }();

    function KJ(JJ) {
      if (JJ.includes(EJ)) return EJ;
      for (var cJ = JJ; cJ.includes("*") || cJ.includes("/");) {
        var ZJ, FJ = DJ(null !== (ZJ = fJ.exec(cJ)) && void 0 !== ZJ ? ZJ : [], 4),
          UJ = FJ[1],
          eJ = FJ[2],
          XJ = FJ[3],
          AJ = VJ.parse(null !== UJ && void 0 !== UJ ? UJ : ""),
          qJ = VJ.parse(null !== XJ && void 0 !== XJ ? XJ : ""),
          jJ = "*" === eJ ? AJ.multiply(qJ) : AJ.divide(qJ);
        if (jJ.isNaN()) return EJ;
        cJ = cJ.replace(fJ, jJ.toString())
      }
      for (; cJ.includes("+") || /.-\d+(?:\.\d+)?/.test(cJ);) {
        var YJ, hJ = DJ(null !== (YJ = xJ.exec(cJ)) && void 0 !== YJ ? YJ : [], 4),
          sJ = hJ[1],
          nJ = hJ[2],
          GJ = hJ[3],
          rJ = VJ.parse(null !== sJ && void 0 !== sJ ? sJ : ""),
          vJ = VJ.parse(null !== GJ && void 0 !== GJ ? GJ : ""),
          mJ = "+" === nJ ? rJ.add(vJ) : rJ.subtract(vJ);
        if (mJ.isNaN()) return EJ;
        cJ = cJ.replace(xJ, mJ.toString())
      }
      return cJ
    }
    var yJ = /\(([^()]*)\)/;

    function SJ(JJ) {
      var cJ = JJ.replace(/\s+/g, "");
      return cJ = function(JJ) {
        for (var cJ = JJ; cJ.includes("(");) {
          var ZJ = DJ(yJ.exec(cJ), 2)[1];
          cJ = cJ.replace(yJ, KJ(ZJ))
        }
        return cJ
      }(cJ), cJ = KJ(cJ)
    }

    function IJ(JJ) {
      var cJ = function(JJ) {
        try {
          return SJ(JJ)
        } catch (cJ) {
          return EJ
        }
      }(JJ.slice(5, -1));
      return cJ === EJ ? "" : cJ
    }
    var MJ = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"],
      bJ = ["dx", "dy", "angle", "className", "breakAll"];

    function wJ() {
      return wJ = Object.assign ? Object.assign.bind() : function(JJ) {
        for (var cJ = 1; cJ < arguments.length; cJ++) {
          var ZJ = arguments[cJ];
          for (var FJ in ZJ) Object.prototype.hasOwnProperty.call(ZJ, FJ) && (JJ[FJ] = ZJ[FJ])
        }
        return JJ
      }, wJ.apply(this, arguments)
    }

    function WJ(JJ, cJ) {
      if (null == JJ) return {};
      var ZJ, FJ, UJ = function(JJ, cJ) {
        if (null == JJ) return {};
        var ZJ = {};
        for (var FJ in JJ)
          if (Object.prototype.hasOwnProperty.call(JJ, FJ)) {
            if (cJ.indexOf(FJ) >= 0) continue;
            ZJ[FJ] = JJ[FJ]
          } return ZJ
      }(JJ, cJ);
      if (Object.getOwnPropertySymbols) {
        var eJ = Object.getOwnPropertySymbols(JJ);
        for (FJ = 0; FJ < eJ.length; FJ++) ZJ = eJ[FJ], cJ.indexOf(ZJ) >= 0 || Object.prototype.propertyIsEnumerable.call(JJ, ZJ) && (UJ[ZJ] = JJ[ZJ])
      }
      return UJ
    }

    function gJ(JJ, cJ) {
      return function(JJ) {
        if (Array.isArray(JJ)) return JJ
      }(JJ) || function(JJ, cJ) {
        var ZJ = null == JJ ? null : "undefined" != typeof Symbol && JJ[Symbol.iterator] || JJ["@@iterator"];
        if (null != ZJ) {
          var FJ, UJ, eJ, XJ, AJ = [],
            qJ = !0,
            jJ = !1;
          try {
            if (eJ = (ZJ = ZJ.call(JJ)).next, 0 === cJ) {
              if (Object(ZJ) !== ZJ) return;
              qJ = !1
            } else
              for (; !(qJ = (FJ = eJ.call(ZJ)).done) && (AJ.push(FJ.value), AJ.length !== cJ); qJ = !0);
          } catch (JJ) {
            jJ = !0, UJ = JJ
          } finally {
            try {
              if (!qJ && null != ZJ.return && (XJ = ZJ.return(), Object(XJ) !== XJ)) return
            } finally {
              if (jJ) throw UJ
            }
          }
          return AJ
        }
      }(JJ, cJ) || function(JJ, cJ) {
        if (!JJ) return;
        if ("string" === typeof JJ) return HJ(JJ, cJ);
        var ZJ = Object.prototype.toString.call(JJ).slice(8, -1);
        "Object" === ZJ && JJ.constructor && (ZJ = JJ.constructor.name);
        if ("Map" === ZJ || "Set" === ZJ) return Array.from(JJ);
        if ("Arguments" === ZJ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZJ)) return HJ(JJ, cJ)
      }(JJ, cJ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function HJ(JJ, cJ) {
      (null == cJ || cJ > JJ.length) && (cJ = JJ.length);
      for (var ZJ = 0, FJ = new Array(cJ); ZJ < cJ; ZJ++) FJ[ZJ] = JJ[ZJ];
      return FJ
    }
    var PJ = /[ \f\n\r\t\v\u2028\u2029]+/,
      kJ = function(JJ) {
        var cJ = JJ.children,
          ZJ = JJ.breakAll,
          FJ = JJ.style;
        try {
          var UJ = [];
          return eJ()(cJ) || (UJ = ZJ ? cJ.toString().split("") : cJ.toString().split(PJ)), {
            wordsWithComputedWidth: UJ.map((function(JJ) {
              return {
                word: JJ,
                width: (0, YJ.f)(JJ, FJ).width
              }
            })),
            spaceWidth: ZJ ? 0 : (0, YJ.f)("\xa0", FJ).width
          }
        } catch (XJ) {
          return null
        }
      },
      pJ = function(JJ) {
        return [{
          words: eJ()(JJ) ? [] : JJ.toString().split(PJ)
        }]
      },
      dJ = function(JJ) {
        var cJ = JJ.width,
          ZJ = JJ.scaleToFit,
          FJ = JJ.children,
          UJ = JJ.style,
          eJ = JJ.breakAll,
          XJ = JJ.maxLines;
        if ((cJ || ZJ) && !qJ.e.isSsr) {
          var jJ = kJ({
            breakAll: eJ,
            children: FJ,
            style: UJ
          });
          return jJ ? function(JJ, cJ, ZJ, FJ, UJ) {
            var eJ = JJ.maxLines,
              XJ = JJ.children,
              qJ = JJ.style,
              jJ = JJ.breakAll,
              YJ = (0, AJ.C)(eJ),
              hJ = XJ,
              DJ = function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce((function(JJ, cJ) {
                  var eJ = cJ.word,
                    XJ = cJ.width,
                    AJ = JJ[JJ.length - 1];
                  if (AJ && (null == FJ || UJ || AJ.width + XJ + ZJ < Number(FJ))) AJ.words.push(eJ), AJ.width += XJ + ZJ;
                  else {
                    var qJ = {
                      words: [eJ],
                      width: XJ
                    };
                    JJ.push(qJ)
                  }
                  return JJ
                }), [])
              },
              sJ = DJ(cJ);
            if (!YJ) return sJ;
            for (var nJ, GJ = function(JJ) {
                var cJ = hJ.slice(0, JJ),
                  ZJ = kJ({
                    breakAll: jJ,
                    style: qJ,
                    children: cJ + "\u2026"
                  }).wordsWithComputedWidth,
                  UJ = DJ(ZJ),
                  XJ = UJ.length > eJ || function(JJ) {
                    return JJ.reduce((function(JJ, cJ) {
                      return JJ.width > cJ.width ? JJ : cJ
                    }))
                  }(UJ).width > Number(FJ);
                return [XJ, UJ]
              }, fJ = 0, xJ = hJ.length - 1, rJ = 0; fJ <= xJ && rJ <= hJ.length - 1;) {
              var vJ = Math.floor((fJ + xJ) / 2),
                mJ = gJ(GJ(vJ - 1), 2),
                QJ = mJ[0],
                EJ = mJ[1],
                VJ = gJ(GJ(vJ), 1)[0];
              if (QJ || VJ || (fJ = vJ + 1), QJ && VJ && (xJ = vJ - 1), !QJ && VJ) {
                nJ = EJ;
                break
              }
              rJ++
            }
            return nJ || sJ
          }({
            breakAll: eJ,
            children: FJ,
            maxLines: XJ,
            style: UJ
          }, jJ.wordsWithComputedWidth, jJ.spaceWidth, cJ, ZJ) : pJ(FJ)
        }
        return pJ(FJ)
      },
      zJ = "#808080",
      NJ = function(JJ) {
        var cJ = JJ.x,
          ZJ = void 0 === cJ ? 0 : cJ,
          UJ = JJ.y,
          eJ = void 0 === UJ ? 0 : UJ,
          qJ = JJ.lineHeight,
          YJ = void 0 === qJ ? "1em" : qJ,
          hJ = JJ.capHeight,
          DJ = void 0 === hJ ? "0.71em" : hJ,
          sJ = JJ.scaleToFit,
          nJ = void 0 !== sJ && sJ,
          GJ = JJ.textAnchor,
          fJ = void 0 === GJ ? "start" : GJ,
          xJ = JJ.verticalAnchor,
          rJ = void 0 === xJ ? "end" : xJ,
          vJ = JJ.fill,
          mJ = void 0 === vJ ? zJ : vJ,
          QJ = WJ(JJ, MJ),
          EJ = (0, FJ.useMemo)((function() {
            return dJ({
              breakAll: QJ.breakAll,
              children: QJ.children,
              maxLines: QJ.maxLines,
              scaleToFit: nJ,
              style: QJ.style,
              width: QJ.width
            })
          }), [QJ.breakAll, QJ.children, QJ.maxLines, nJ, QJ.style, QJ.width]),
          VJ = QJ.dx,
          KJ = QJ.dy,
          yJ = QJ.angle,
          SJ = QJ.className,
          gJ = QJ.breakAll,
          HJ = WJ(QJ, bJ);
        if (!(0, AJ.y)(ZJ) || !(0, AJ.y)(eJ)) return null;
        var PJ, kJ = ZJ + ((0, AJ.C)(VJ) ? VJ : 0),
          pJ = eJ + ((0, AJ.C)(KJ) ? KJ : 0);
        switch (rJ) {
          case "start":
            PJ = IJ("calc(".concat(DJ, ")"));
            break;
          case "middle":
            PJ = IJ("calc(".concat((EJ.length - 1) / 2, " * -").concat(YJ, " + (").concat(DJ, " / 2))"));
            break;
          default:
            PJ = IJ("calc(".concat(EJ.length - 1, " * -").concat(YJ, ")"))
        }
        var NJ = [];
        if (nJ) {
          var OJ = EJ[0].width,
            TJ = QJ.width;
          NJ.push("scale(".concat(((0, AJ.C)(TJ) ? TJ / OJ : 1) / OJ, ")"))
        }
        return yJ && NJ.push("rotate(".concat(yJ, ", ").concat(kJ, ", ").concat(pJ, ")")), NJ.length && (HJ.transform = NJ.join(" ")), FJ.createElement("text", wJ({}, (0, jJ.c)(HJ, !0), {
          x: kJ,
          y: pJ,
          className: (0, XJ.d)("recharts-text", SJ),
          textAnchor: fJ,
          fill: mJ.includes("url") ? zJ : mJ
        }), EJ.map((function(JJ, cJ) {
          var ZJ = JJ.words.join(gJ ? "" : " ");
          return FJ.createElement("tspan", {
            x: kJ,
            dy: 0 === cJ ? PJ : YJ,
            key: "".concat(ZJ, "-").concat(cJ)
          }, ZJ)
        })))
      }
  },
  5336: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => tJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(4888),
      eJ = ZJ.n(UJ),
      XJ = ZJ(4786),
      AJ = ZJ.n(XJ),
      qJ = ZJ(4468),
      jJ = ZJ(4543);

    function YJ(JJ) {
      return YJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, YJ(JJ)
    }

    function hJ() {
      return hJ = Object.assign ? Object.assign.bind() : function(JJ) {
        for (var cJ = 1; cJ < arguments.length; cJ++) {
          var ZJ = arguments[cJ];
          for (var FJ in ZJ) Object.prototype.hasOwnProperty.call(ZJ, FJ) && (JJ[FJ] = ZJ[FJ])
        }
        return JJ
      }, hJ.apply(this, arguments)
    }

    function DJ(JJ, cJ) {
      return function(JJ) {
        if (Array.isArray(JJ)) return JJ
      }(JJ) || function(JJ, cJ) {
        var ZJ = null == JJ ? null : "undefined" != typeof Symbol && JJ[Symbol.iterator] || JJ["@@iterator"];
        if (null != ZJ) {
          var FJ, UJ, eJ, XJ, AJ = [],
            qJ = !0,
            jJ = !1;
          try {
            if (eJ = (ZJ = ZJ.call(JJ)).next, 0 === cJ) {
              if (Object(ZJ) !== ZJ) return;
              qJ = !1
            } else
              for (; !(qJ = (FJ = eJ.call(ZJ)).done) && (AJ.push(FJ.value), AJ.length !== cJ); qJ = !0);
          } catch (JJ) {
            jJ = !0, UJ = JJ
          } finally {
            try {
              if (!qJ && null != ZJ.return && (XJ = ZJ.return(), Object(XJ) !== XJ)) return
            } finally {
              if (jJ) throw UJ
            }
          }
          return AJ
        }
      }(JJ, cJ) || function(JJ, cJ) {
        if (!JJ) return;
        if ("string" === typeof JJ) return sJ(JJ, cJ);
        var ZJ = Object.prototype.toString.call(JJ).slice(8, -1);
        "Object" === ZJ && JJ.constructor && (ZJ = JJ.constructor.name);
        if ("Map" === ZJ || "Set" === ZJ) return Array.from(JJ);
        if ("Arguments" === ZJ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZJ)) return sJ(JJ, cJ)
      }(JJ, cJ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function sJ(JJ, cJ) {
      (null == cJ || cJ > JJ.length) && (cJ = JJ.length);
      for (var ZJ = 0, FJ = new Array(cJ); ZJ < cJ; ZJ++) FJ[ZJ] = JJ[ZJ];
      return FJ
    }

    function nJ(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function GJ(JJ) {
      for (var cJ = 1; cJ < arguments.length; cJ++) {
        var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
        cJ % 2 ? nJ(Object(ZJ), !0).forEach((function(cJ) {
          fJ(JJ, cJ, ZJ[cJ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : nJ(Object(ZJ)).forEach((function(cJ) {
          Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
        }))
      }
      return JJ
    }

    function fJ(JJ, cJ, ZJ) {
      return (cJ = function(JJ) {
        var cJ = function(JJ, cJ) {
          if ("object" != YJ(JJ) || !JJ) return JJ;
          var ZJ = JJ[Symbol.toPrimitive];
          if (void 0 !== ZJ) {
            var FJ = ZJ.call(JJ, cJ || "default");
            if ("object" != YJ(FJ)) return FJ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === cJ ? String : Number)(JJ)
        }(JJ, "string");
        return "symbol" == YJ(cJ) ? cJ : cJ + ""
      }(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }

    function xJ(JJ) {
      return Array.isArray(JJ) && (0, jJ.y)(JJ[0]) && (0, jJ.y)(JJ[1]) ? JJ.join(" ~ ") : JJ
    }
    var rJ = function(JJ) {
      var cJ = JJ.separator,
        ZJ = void 0 === cJ ? " : " : cJ,
        UJ = JJ.contentStyle,
        XJ = void 0 === UJ ? {} : UJ,
        YJ = JJ.itemStyle,
        sJ = void 0 === YJ ? {} : YJ,
        nJ = JJ.labelStyle,
        fJ = void 0 === nJ ? {} : nJ,
        rJ = JJ.payload,
        vJ = JJ.formatter,
        mJ = JJ.itemSorter,
        QJ = JJ.wrapperClassName,
        EJ = JJ.labelClassName,
        VJ = JJ.label,
        KJ = JJ.labelFormatter,
        yJ = JJ.accessibilityLayer,
        SJ = void 0 !== yJ && yJ,
        IJ = GJ({
          margin: 0,
          padding: 10,
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          whiteSpace: "nowrap"
        }, XJ),
        MJ = GJ({
          margin: 0
        }, fJ),
        bJ = !AJ()(VJ),
        wJ = bJ ? VJ : "",
        WJ = (0, qJ.d)("recharts-default-tooltip", QJ),
        gJ = (0, qJ.d)("recharts-tooltip-label", EJ);
      bJ && KJ && void 0 !== rJ && null !== rJ && (wJ = KJ(VJ, rJ));
      var HJ = SJ ? {
        role: "status",
        "aria-live": "assertive"
      } : {};
      return FJ.createElement("div", hJ({
        className: WJ,
        style: IJ
      }, HJ), FJ.createElement("p", {
        className: gJ,
        style: MJ
      }, FJ.isValidElement(wJ) ? wJ : "".concat(wJ)), function() {
        if (rJ && rJ.length) {
          var JJ = (mJ ? eJ()(rJ, mJ) : rJ).map((function(JJ, cJ) {
            if ("none" === JJ.type) return null;
            var UJ = GJ({
                display: "block",
                paddingTop: 4,
                paddingBottom: 4,
                color: JJ.color || "#000"
              }, sJ),
              eJ = JJ.formatter || vJ || xJ,
              XJ = JJ.value,
              AJ = JJ.name,
              qJ = XJ,
              YJ = AJ;
            if (eJ && null != qJ && null != YJ) {
              var hJ = eJ(XJ, AJ, JJ, cJ, rJ);
              if (Array.isArray(hJ)) {
                var nJ = DJ(hJ, 2);
                qJ = nJ[0], YJ = nJ[1]
              } else qJ = hJ
            }
            return FJ.createElement("li", {
              className: "recharts-tooltip-item",
              key: "tooltip-item-".concat(cJ),
              style: UJ
            }, (0, jJ.y)(YJ) ? FJ.createElement("span", {
              className: "recharts-tooltip-item-name"
            }, YJ) : null, (0, jJ.y)(YJ) ? FJ.createElement("span", {
              className: "recharts-tooltip-item-separator"
            }, ZJ) : null, FJ.createElement("span", {
              className: "recharts-tooltip-item-value"
            }, qJ), FJ.createElement("span", {
              className: "recharts-tooltip-item-unit"
            }, JJ.unit || ""))
          }));
          return FJ.createElement("ul", {
            className: "recharts-tooltip-item-list",
            style: {
              padding: 0,
              margin: 0
            }
          }, JJ)
        }
        return null
      }())
    };

    function vJ(JJ) {
      return vJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, vJ(JJ)
    }

    function mJ(JJ, cJ, ZJ) {
      return (cJ = function(JJ) {
        var cJ = function(JJ, cJ) {
          if ("object" != vJ(JJ) || !JJ) return JJ;
          var ZJ = JJ[Symbol.toPrimitive];
          if (void 0 !== ZJ) {
            var FJ = ZJ.call(JJ, cJ || "default");
            if ("object" != vJ(FJ)) return FJ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === cJ ? String : Number)(JJ)
        }(JJ, "string");
        return "symbol" == vJ(cJ) ? cJ : cJ + ""
      }(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }
    var QJ = "recharts-tooltip-wrapper",
      EJ = {
        visibility: "hidden"
      };

    function VJ(JJ) {
      var cJ = JJ.coordinate,
        ZJ = JJ.translateX,
        FJ = JJ.translateY;
      return (0, qJ.d)(QJ, mJ(mJ(mJ(mJ({}, "".concat(QJ, "-right"), (0, jJ.C)(ZJ) && cJ && (0, jJ.C)(cJ.x) && ZJ >= cJ.x), "".concat(QJ, "-left"), (0, jJ.C)(ZJ) && cJ && (0, jJ.C)(cJ.x) && ZJ < cJ.x), "".concat(QJ, "-bottom"), (0, jJ.C)(FJ) && cJ && (0, jJ.C)(cJ.y) && FJ >= cJ.y), "".concat(QJ, "-top"), (0, jJ.C)(FJ) && cJ && (0, jJ.C)(cJ.y) && FJ < cJ.y))
    }

    function KJ(JJ) {
      var cJ = JJ.allowEscapeViewBox,
        ZJ = JJ.coordinate,
        FJ = JJ.key,
        UJ = JJ.offsetTopLeft,
        eJ = JJ.position,
        XJ = JJ.reverseDirection,
        AJ = JJ.tooltipDimension,
        qJ = JJ.viewBox,
        YJ = JJ.viewBoxDimension;
      if (eJ && (0, jJ.C)(eJ[FJ])) return eJ[FJ];
      var hJ = ZJ[FJ] - AJ - UJ,
        DJ = ZJ[FJ] + UJ;
      return cJ[FJ] ? XJ[FJ] ? hJ : DJ : XJ[FJ] ? hJ < qJ[FJ] ? Math.max(DJ, qJ[FJ]) : Math.max(hJ, qJ[FJ]) : DJ + AJ > qJ[FJ] + YJ ? Math.max(hJ, qJ[FJ]) : Math.max(DJ, qJ[FJ])
    }

    function yJ(JJ) {
      return yJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, yJ(JJ)
    }

    function SJ(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function IJ(JJ) {
      for (var cJ = 1; cJ < arguments.length; cJ++) {
        var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
        cJ % 2 ? SJ(Object(ZJ), !0).forEach((function(cJ) {
          HJ(JJ, cJ, ZJ[cJ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : SJ(Object(ZJ)).forEach((function(cJ) {
          Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
        }))
      }
      return JJ
    }

    function MJ(JJ, cJ) {
      for (var ZJ = 0; ZJ < cJ.length; ZJ++) {
        var FJ = cJ[ZJ];
        FJ.enumerable = FJ.enumerable || !1, FJ.configurable = !0, "value" in FJ && (FJ.writable = !0), Object.defineProperty(JJ, PJ(FJ.key), FJ)
      }
    }

    function bJ(JJ, cJ, ZJ) {
      return cJ = WJ(cJ),
        function(JJ, cJ) {
          if (cJ && ("object" === yJ(cJ) || "function" === typeof cJ)) return cJ;
          if (void 0 !== cJ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(JJ) {
            if (void 0 === JJ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return JJ
          }(JJ)
        }(JJ, wJ() ? Reflect.construct(cJ, ZJ || [], WJ(JJ).constructor) : cJ.apply(JJ, ZJ))
    }

    function wJ() {
      try {
        var JJ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (JJ) {}
      return (wJ = function() {
        return !!JJ
      })()
    }

    function WJ(JJ) {
      return WJ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(JJ) {
        return JJ.__proto__ || Object.getPrototypeOf(JJ)
      }, WJ(JJ)
    }

    function gJ(JJ, cJ) {
      return gJ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(JJ, cJ) {
        return JJ.__proto__ = cJ, JJ
      }, gJ(JJ, cJ)
    }

    function HJ(JJ, cJ, ZJ) {
      return (cJ = PJ(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }

    function PJ(JJ) {
      var cJ = function(JJ, cJ) {
        if ("object" != yJ(JJ) || !JJ) return JJ;
        var ZJ = JJ[Symbol.toPrimitive];
        if (void 0 !== ZJ) {
          var FJ = ZJ.call(JJ, cJ || "default");
          if ("object" != yJ(FJ)) return FJ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === cJ ? String : Number)(JJ)
      }(JJ, "string");
      return "symbol" == yJ(cJ) ? cJ : cJ + ""
    }
    var kJ = function(JJ) {
        function cJ() {
          var JJ;
          ! function(JJ, cJ) {
            if (!(JJ instanceof cJ)) throw new TypeError("Cannot call a class as a function")
          }(this, cJ);
          for (var ZJ = arguments.length, FJ = new Array(ZJ), UJ = 0; UJ < ZJ; UJ++) FJ[UJ] = arguments[UJ];
          return HJ(JJ = bJ(this, cJ, [].concat(FJ)), "state", {
            dismissed: !1,
            dismissedAtCoordinate: {
              x: 0,
              y: 0
            },
            lastBoundingBox: {
              width: -1,
              height: -1
            }
          }), HJ(JJ, "handleKeyDown", (function(cJ) {
            var ZJ, FJ, UJ, eJ;
            "Escape" === cJ.key && JJ.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x: null !== (ZJ = null === (FJ = JJ.props.coordinate) || void 0 === FJ ? void 0 : FJ.x) && void 0 !== ZJ ? ZJ : 0,
                y: null !== (UJ = null === (eJ = JJ.props.coordinate) || void 0 === eJ ? void 0 : eJ.y) && void 0 !== UJ ? UJ : 0
              }
            })
          })), JJ
        }
        return function(JJ, cJ) {
          if ("function" !== typeof cJ && null !== cJ) throw new TypeError("Super expression must either be null or a function");
          JJ.prototype = Object.create(cJ && cJ.prototype, {
            constructor: {
              value: JJ,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(JJ, "prototype", {
            writable: !1
          }), cJ && gJ(JJ, cJ)
        }(cJ, JJ), ZJ = cJ, (UJ = [{
          key: "updateBBox",
          value: function() {
            if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
              var JJ = this.wrapperNode.getBoundingClientRect();
              (Math.abs(JJ.width - this.state.lastBoundingBox.width) > 1 || Math.abs(JJ.height - this.state.lastBoundingBox.height) > 1) && this.setState({
                lastBoundingBox: {
                  width: JJ.width,
                  height: JJ.height
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
            var JJ, cJ;
            this.props.active && this.updateBBox(), this.state.dismissed && ((null === (JJ = this.props.coordinate) || void 0 === JJ ? void 0 : JJ.x) === this.state.dismissedAtCoordinate.x && (null === (cJ = this.props.coordinate) || void 0 === cJ ? void 0 : cJ.y) === this.state.dismissedAtCoordinate.y || (this.state.dismissed = !1))
          }
        }, {
          key: "render",
          value: function() {
            var JJ = this,
              cJ = this.props,
              ZJ = cJ.active,
              UJ = cJ.allowEscapeViewBox,
              eJ = cJ.animationDuration,
              XJ = cJ.animationEasing,
              AJ = cJ.children,
              qJ = cJ.coordinate,
              jJ = cJ.hasPayload,
              YJ = cJ.isAnimationActive,
              hJ = cJ.offset,
              DJ = cJ.position,
              sJ = cJ.reverseDirection,
              nJ = cJ.useTranslate3d,
              GJ = cJ.viewBox,
              fJ = cJ.wrapperStyle,
              xJ = function(JJ) {
                var cJ, ZJ, FJ = JJ.allowEscapeViewBox,
                  UJ = JJ.coordinate,
                  eJ = JJ.offsetTopLeft,
                  XJ = JJ.position,
                  AJ = JJ.reverseDirection,
                  qJ = JJ.tooltipBox,
                  jJ = JJ.useTranslate3d,
                  YJ = JJ.viewBox;
                return {
                  cssProperties: qJ.height > 0 && qJ.width > 0 && UJ ? function(JJ) {
                    var cJ = JJ.translateX,
                      ZJ = JJ.translateY;
                    return {
                      transform: JJ.useTranslate3d ? "translate3d(".concat(cJ, "px, ").concat(ZJ, "px, 0)") : "translate(".concat(cJ, "px, ").concat(ZJ, "px)")
                    }
                  }({
                    translateX: cJ = KJ({
                      allowEscapeViewBox: FJ,
                      coordinate: UJ,
                      key: "x",
                      offsetTopLeft: eJ,
                      position: XJ,
                      reverseDirection: AJ,
                      tooltipDimension: qJ.width,
                      viewBox: YJ,
                      viewBoxDimension: YJ.width
                    }),
                    translateY: ZJ = KJ({
                      allowEscapeViewBox: FJ,
                      coordinate: UJ,
                      key: "y",
                      offsetTopLeft: eJ,
                      position: XJ,
                      reverseDirection: AJ,
                      tooltipDimension: qJ.height,
                      viewBox: YJ,
                      viewBoxDimension: YJ.height
                    }),
                    useTranslate3d: jJ
                  }) : EJ,
                  cssClasses: VJ({
                    translateX: cJ,
                    translateY: ZJ,
                    coordinate: UJ
                  })
                }
              }({
                allowEscapeViewBox: UJ,
                coordinate: qJ,
                offsetTopLeft: hJ,
                position: DJ,
                reverseDirection: sJ,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: nJ,
                viewBox: GJ
              }),
              rJ = xJ.cssClasses,
              vJ = xJ.cssProperties,
              mJ = IJ(IJ({
                transition: YJ && ZJ ? "transform ".concat(eJ, "ms ").concat(XJ) : void 0
              }, vJ), {}, {
                pointerEvents: "none",
                visibility: !this.state.dismissed && ZJ && jJ ? "visible" : "hidden",
                position: "absolute",
                top: 0,
                left: 0
              }, fJ);
            return FJ.createElement("div", {
              tabIndex: -1,
              className: rJ,
              style: mJ,
              ref: function(cJ) {
                JJ.wrapperNode = cJ
              }
            }, AJ)
          }
        }]) && MJ(ZJ.prototype, UJ), eJ && MJ(ZJ, eJ), Object.defineProperty(ZJ, "prototype", {
          writable: !1
        }), ZJ;
        var ZJ, UJ, eJ
      }(FJ.PureComponent),
      pJ = ZJ(5343),
      dJ = ZJ(5347);

    function zJ(JJ) {
      return zJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, zJ(JJ)
    }

    function NJ(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function OJ(JJ) {
      for (var cJ = 1; cJ < arguments.length; cJ++) {
        var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
        cJ % 2 ? NJ(Object(ZJ), !0).forEach((function(cJ) {
          LJ(JJ, cJ, ZJ[cJ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : NJ(Object(ZJ)).forEach((function(cJ) {
          Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
        }))
      }
      return JJ
    }

    function TJ(JJ, cJ) {
      for (var ZJ = 0; ZJ < cJ.length; ZJ++) {
        var FJ = cJ[ZJ];
        FJ.enumerable = FJ.enumerable || !1, FJ.configurable = !0, "value" in FJ && (FJ.writable = !0), Object.defineProperty(JJ, aJ(FJ.key), FJ)
      }
    }

    function CJ(JJ, cJ, ZJ) {
      return cJ = iJ(cJ),
        function(JJ, cJ) {
          if (cJ && ("object" === zJ(cJ) || "function" === typeof cJ)) return cJ;
          if (void 0 !== cJ) throw new TypeError("Derived constructors may only return object or undefined");
          return function(JJ) {
            if (void 0 === JJ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return JJ
          }(JJ)
        }(JJ, uJ() ? Reflect.construct(cJ, ZJ || [], iJ(JJ).constructor) : cJ.apply(JJ, ZJ))
    }

    function uJ() {
      try {
        var JJ = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (JJ) {}
      return (uJ = function() {
        return !!JJ
      })()
    }

    function iJ(JJ) {
      return iJ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(JJ) {
        return JJ.__proto__ || Object.getPrototypeOf(JJ)
      }, iJ(JJ)
    }

    function RJ(JJ, cJ) {
      return RJ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(JJ, cJ) {
        return JJ.__proto__ = cJ, JJ
      }, RJ(JJ, cJ)
    }

    function LJ(JJ, cJ, ZJ) {
      return (cJ = aJ(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }

    function aJ(JJ) {
      var cJ = function(JJ, cJ) {
        if ("object" != zJ(JJ) || !JJ) return JJ;
        var ZJ = JJ[Symbol.toPrimitive];
        if (void 0 !== ZJ) {
          var FJ = ZJ.call(JJ, cJ || "default");
          if ("object" != zJ(FJ)) return FJ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === cJ ? String : Number)(JJ)
      }(JJ, "string");
      return "symbol" == zJ(cJ) ? cJ : cJ + ""
    }

    function BJ(JJ) {
      return JJ.dataKey
    }
    var tJ = function(JJ) {
      function cJ() {
        return function(JJ, cJ) {
          if (!(JJ instanceof cJ)) throw new TypeError("Cannot call a class as a function")
        }(this, cJ), CJ(this, cJ, arguments)
      }
      return function(JJ, cJ) {
        if ("function" !== typeof cJ && null !== cJ) throw new TypeError("Super expression must either be null or a function");
        JJ.prototype = Object.create(cJ && cJ.prototype, {
          constructor: {
            value: JJ,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(JJ, "prototype", {
          writable: !1
        }), cJ && RJ(JJ, cJ)
      }(cJ, JJ), ZJ = cJ, (UJ = [{
        key: "render",
        value: function() {
          var JJ = this,
            cJ = this.props,
            ZJ = cJ.active,
            UJ = cJ.allowEscapeViewBox,
            eJ = cJ.animationDuration,
            XJ = cJ.animationEasing,
            AJ = cJ.content,
            qJ = cJ.coordinate,
            jJ = cJ.filterNull,
            YJ = cJ.isAnimationActive,
            hJ = cJ.offset,
            DJ = cJ.payload,
            sJ = cJ.payloadUniqBy,
            nJ = cJ.position,
            GJ = cJ.reverseDirection,
            fJ = cJ.useTranslate3d,
            xJ = cJ.viewBox,
            vJ = cJ.wrapperStyle,
            mJ = null !== DJ && void 0 !== DJ ? DJ : [];
          jJ && mJ.length && (mJ = (0, dJ.c)(DJ.filter((function(cJ) {
            return null != cJ.value && (!0 !== cJ.hide || JJ.props.includeHidden)
          })), sJ, BJ));
          var QJ = mJ.length > 0;
          return FJ.createElement(kJ, {
            allowEscapeViewBox: UJ,
            animationDuration: eJ,
            animationEasing: XJ,
            isAnimationActive: YJ,
            active: ZJ,
            coordinate: qJ,
            hasPayload: QJ,
            offset: hJ,
            position: nJ,
            reverseDirection: GJ,
            useTranslate3d: fJ,
            viewBox: xJ,
            wrapperStyle: vJ
          }, function(JJ, cJ) {
            return FJ.isValidElement(JJ) ? FJ.cloneElement(JJ, cJ) : "function" === typeof JJ ? FJ.createElement(JJ, cJ) : FJ.createElement(rJ, cJ)
          }(AJ, OJ(OJ({}, this.props), {}, {
            payload: mJ
          })))
        }
      }]) && TJ(ZJ.prototype, UJ), eJ && TJ(ZJ, eJ), Object.defineProperty(ZJ, "prototype", {
        writable: !1
      }), ZJ;
      var ZJ, UJ, eJ
    }(FJ.PureComponent);
    LJ(tJ, "displayName", "Tooltip"), LJ(tJ, "defaultProps", {
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
      isAnimationActive: !pJ.e.isSsr,
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
  5332: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => jJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(4468),
      eJ = ZJ(4797),
      XJ = ["children", "className"];

    function AJ() {
      return AJ = Object.assign ? Object.assign.bind() : function(JJ) {
        for (var cJ = 1; cJ < arguments.length; cJ++) {
          var ZJ = arguments[cJ];
          for (var FJ in ZJ) Object.prototype.hasOwnProperty.call(ZJ, FJ) && (JJ[FJ] = ZJ[FJ])
        }
        return JJ
      }, AJ.apply(this, arguments)
    }

    function qJ(JJ, cJ) {
      if (null == JJ) return {};
      var ZJ, FJ, UJ = function(JJ, cJ) {
        if (null == JJ) return {};
        var ZJ = {};
        for (var FJ in JJ)
          if (Object.prototype.hasOwnProperty.call(JJ, FJ)) {
            if (cJ.indexOf(FJ) >= 0) continue;
            ZJ[FJ] = JJ[FJ]
          } return ZJ
      }(JJ, cJ);
      if (Object.getOwnPropertySymbols) {
        var eJ = Object.getOwnPropertySymbols(JJ);
        for (FJ = 0; FJ < eJ.length; FJ++) ZJ = eJ[FJ], cJ.indexOf(ZJ) >= 0 || Object.prototype.propertyIsEnumerable.call(JJ, ZJ) && (UJ[ZJ] = JJ[ZJ])
      }
      return UJ
    }
    var jJ = FJ.forwardRef((function(JJ, cJ) {
      var ZJ = JJ.children,
        jJ = JJ.className,
        YJ = qJ(JJ, XJ),
        hJ = (0, UJ.d)("recharts-layer", jJ);
      return FJ.createElement("g", AJ({
        className: hJ
      }, (0, eJ.c)(YJ, !0), {
        ref: cJ
      }), ZJ)
    }))
  },
  5324: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => jJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(4468),
      eJ = ZJ(4797),
      XJ = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];

    function AJ() {
      return AJ = Object.assign ? Object.assign.bind() : function(JJ) {
        for (var cJ = 1; cJ < arguments.length; cJ++) {
          var ZJ = arguments[cJ];
          for (var FJ in ZJ) Object.prototype.hasOwnProperty.call(ZJ, FJ) && (JJ[FJ] = ZJ[FJ])
        }
        return JJ
      }, AJ.apply(this, arguments)
    }

    function qJ(JJ, cJ) {
      if (null == JJ) return {};
      var ZJ, FJ, UJ = function(JJ, cJ) {
        if (null == JJ) return {};
        var ZJ = {};
        for (var FJ in JJ)
          if (Object.prototype.hasOwnProperty.call(JJ, FJ)) {
            if (cJ.indexOf(FJ) >= 0) continue;
            ZJ[FJ] = JJ[FJ]
          } return ZJ
      }(JJ, cJ);
      if (Object.getOwnPropertySymbols) {
        var eJ = Object.getOwnPropertySymbols(JJ);
        for (FJ = 0; FJ < eJ.length; FJ++) ZJ = eJ[FJ], cJ.indexOf(ZJ) >= 0 || Object.prototype.propertyIsEnumerable.call(JJ, ZJ) && (UJ[ZJ] = JJ[ZJ])
      }
      return UJ
    }

    function jJ(JJ) {
      var cJ = JJ.children,
        ZJ = JJ.width,
        jJ = JJ.height,
        YJ = JJ.viewBox,
        hJ = JJ.className,
        DJ = JJ.style,
        sJ = JJ.title,
        nJ = JJ.desc,
        GJ = qJ(JJ, XJ),
        fJ = YJ || {
          width: ZJ,
          height: jJ,
          x: 0,
          y: 0
        },
        xJ = (0, UJ.d)("recharts-surface", hJ);
      return FJ.createElement("svg", AJ({}, (0, eJ.c)(GJ, !0, "svg"), {
        className: xJ,
        width: ZJ,
        height: jJ,
        style: DJ,
        viewBox: "".concat(fJ.x, " ").concat(fJ.y, " ").concat(fJ.width, " ").concat(fJ.height)
      }), FJ.createElement("title", null, sJ), FJ.createElement("desc", null, nJ), cJ)
    }
  },
  5698: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => vJ,
      d: () => EJ,
      f: () => MJ,
      h: () => IJ,
      l: () => mJ,
      m: () => SJ,
      q: () => yJ,
      s: () => QJ,
      w: () => KJ,
      x: () => VJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(5319),
      eJ = ZJ(5701),
      XJ = ZJ.n(eJ),
      AJ = ZJ(5619),
      qJ = ZJ.n(AJ),
      jJ = ZJ(4594),
      YJ = ZJ.n(jJ)()((function(JJ) {
        return {
          x: JJ.left,
          y: JJ.top,
          width: JJ.width,
          height: JJ.height
        }
      }), (function(JJ) {
        return ["l", JJ.left, "t", JJ.top, "w", JJ.width, "h", JJ.height].join("")
      })),
      hJ = ZJ(4543);
    var DJ = (0, FJ.createContext)(void 0),
      sJ = (0, FJ.createContext)(void 0),
      nJ = (0, FJ.createContext)(void 0),
      GJ = (0, FJ.createContext)({}),
      fJ = (0, FJ.createContext)(void 0),
      xJ = (0, FJ.createContext)(0),
      rJ = (0, FJ.createContext)(0),
      vJ = function(JJ) {
        var cJ = JJ.state,
          ZJ = cJ.xAxisMap,
          UJ = cJ.yAxisMap,
          eJ = cJ.offset,
          XJ = JJ.clipPathId,
          AJ = JJ.children,
          qJ = JJ.width,
          jJ = JJ.height,
          hJ = YJ(eJ);
        return FJ.createElement(DJ.Provider, {
          value: ZJ
        }, FJ.createElement(sJ.Provider, {
          value: UJ
        }, FJ.createElement(GJ.Provider, {
          value: eJ
        }, FJ.createElement(nJ.Provider, {
          value: hJ
        }, FJ.createElement(fJ.Provider, {
          value: XJ
        }, FJ.createElement(xJ.Provider, {
          value: jJ
        }, FJ.createElement(rJ.Provider, {
          value: qJ
        }, AJ)))))))
      },
      mJ = function() {
        return (0, FJ.useContext)(fJ)
      };
    var QJ = function(JJ) {
        var cJ = (0, FJ.useContext)(DJ);
        null == cJ && (0, UJ.b)(!1);
        var ZJ = cJ[JJ];
        return null == ZJ && (0, UJ.b)(!1), ZJ
      },
      EJ = function() {
        var JJ = (0, FJ.useContext)(DJ);
        return (0, hJ.j)(JJ)
      },
      VJ = function() {
        var JJ = (0, FJ.useContext)(sJ);
        return XJ()(JJ, (function(JJ) {
          return qJ()(JJ.domain, Number.isFinite)
        })) || (0, hJ.j)(JJ)
      },
      KJ = function(JJ) {
        var cJ = (0, FJ.useContext)(sJ);
        null == cJ && (0, UJ.b)(!1);
        var ZJ = cJ[JJ];
        return null == ZJ && (0, UJ.b)(!1), ZJ
      },
      yJ = function() {
        return (0, FJ.useContext)(nJ)
      },
      SJ = function() {
        return (0, FJ.useContext)(GJ)
      },
      IJ = function() {
        return (0, FJ.useContext)(rJ)
      },
      MJ = function() {
        return (0, FJ.useContext)(xJ)
      }
  },
  5722: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => BJ
    });
    var FJ = ZJ(47);

    function UJ() {}

    function eJ(JJ, cJ, ZJ) {
      JJ._context.bezierCurveTo((2 * JJ._x0 + JJ._x1) / 3, (2 * JJ._y0 + JJ._y1) / 3, (JJ._x0 + 2 * JJ._x1) / 3, (JJ._y0 + 2 * JJ._y1) / 3, (JJ._x0 + 4 * JJ._x1 + cJ) / 6, (JJ._y0 + 4 * JJ._y1 + ZJ) / 6)
    }

    function XJ(JJ) {
      this._context = JJ
    }

    function AJ(JJ) {
      this._context = JJ
    }

    function qJ(JJ) {
      this._context = JJ
    }
    XJ.prototype = {
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
            eJ(this, this._x1, this._y1);
          case 2:
            this._context.lineTo(this._x1, this._y1)
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(JJ, cJ) {
        switch (JJ = +JJ, cJ = +cJ, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(JJ, cJ) : this._context.moveTo(JJ, cJ);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
          default:
            eJ(this, JJ, cJ)
        }
        this._x0 = this._x1, this._x1 = JJ, this._y0 = this._y1, this._y1 = cJ
      }
    }, AJ.prototype = {
      areaStart: UJ,
      areaEnd: UJ,
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
      point: function(JJ, cJ) {
        switch (JJ = +JJ, cJ = +cJ, this._point) {
          case 0:
            this._point = 1, this._x2 = JJ, this._y2 = cJ;
            break;
          case 1:
            this._point = 2, this._x3 = JJ, this._y3 = cJ;
            break;
          case 2:
            this._point = 3, this._x4 = JJ, this._y4 = cJ, this._context.moveTo((this._x0 + 4 * this._x1 + JJ) / 6, (this._y0 + 4 * this._y1 + cJ) / 6);
            break;
          default:
            eJ(this, JJ, cJ)
        }
        this._x0 = this._x1, this._x1 = JJ, this._y0 = this._y1, this._y1 = cJ
      }
    }, qJ.prototype = {
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
      point: function(JJ, cJ) {
        switch (JJ = +JJ, cJ = +cJ, this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var ZJ = (this._x0 + 4 * this._x1 + JJ) / 6,
              FJ = (this._y0 + 4 * this._y1 + cJ) / 6;
            this._line ? this._context.lineTo(ZJ, FJ) : this._context.moveTo(ZJ, FJ);
            break;
          case 3:
            this._point = 4;
          default:
            eJ(this, JJ, cJ)
        }
        this._x0 = this._x1, this._x1 = JJ, this._y0 = this._y1, this._y1 = cJ
      }
    };
    class jJ {
      constructor(JJ, cJ) {
        this._context = JJ, this._x = cJ
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
      point(JJ, cJ) {
        switch (JJ = +JJ, cJ = +cJ, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(JJ, cJ) : this._context.moveTo(JJ, cJ);
            break;
          case 1:
            this._point = 2;
          default:
            this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + JJ) / 2, this._y0, this._x0, cJ, JJ, cJ) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + cJ) / 2, JJ, this._y0, JJ, cJ)
        }
        this._x0 = JJ, this._y0 = cJ
      }
    }

    function YJ(JJ) {
      this._context = JJ
    }

    function hJ(JJ) {
      this._context = JJ
    }

    function DJ(JJ) {
      return new hJ(JJ)
    }

    function sJ(JJ) {
      return JJ < 0 ? -1 : 1
    }

    function nJ(JJ, cJ, ZJ) {
      var FJ = JJ._x1 - JJ._x0,
        UJ = cJ - JJ._x1,
        eJ = (JJ._y1 - JJ._y0) / (FJ || UJ < 0 && -0),
        XJ = (ZJ - JJ._y1) / (UJ || FJ < 0 && -0),
        AJ = (eJ * UJ + XJ * FJ) / (FJ + UJ);
      return (sJ(eJ) + sJ(XJ)) * Math.min(Math.abs(eJ), Math.abs(XJ), .5 * Math.abs(AJ)) || 0
    }

    function GJ(JJ, cJ) {
      var ZJ = JJ._x1 - JJ._x0;
      return ZJ ? (3 * (JJ._y1 - JJ._y0) / ZJ - cJ) / 2 : cJ
    }

    function fJ(JJ, cJ, ZJ) {
      var FJ = JJ._x0,
        UJ = JJ._y0,
        eJ = JJ._x1,
        XJ = JJ._y1,
        AJ = (eJ - FJ) / 3;
      JJ._context.bezierCurveTo(FJ + AJ, UJ + AJ * cJ, eJ - AJ, XJ - AJ * ZJ, eJ, XJ)
    }

    function xJ(JJ) {
      this._context = JJ
    }

    function rJ(JJ) {
      this._context = new vJ(JJ)
    }

    function vJ(JJ) {
      this._context = JJ
    }

    function mJ(JJ) {
      this._context = JJ
    }

    function QJ(JJ) {
      var cJ, ZJ, FJ = JJ.length - 1,
        UJ = new Array(FJ),
        eJ = new Array(FJ),
        XJ = new Array(FJ);
      for (UJ[0] = 0, eJ[0] = 2, XJ[0] = JJ[0] + 2 * JJ[1], cJ = 1; cJ < FJ - 1; ++cJ) UJ[cJ] = 1, eJ[cJ] = 4, XJ[cJ] = 4 * JJ[cJ] + 2 * JJ[cJ + 1];
      for (UJ[FJ - 1] = 2, eJ[FJ - 1] = 7, XJ[FJ - 1] = 8 * JJ[FJ - 1] + JJ[FJ], cJ = 1; cJ < FJ; ++cJ) ZJ = UJ[cJ] / eJ[cJ - 1], eJ[cJ] -= ZJ, XJ[cJ] -= ZJ * XJ[cJ - 1];
      for (UJ[FJ - 1] = XJ[FJ - 1] / eJ[FJ - 1], cJ = FJ - 2; cJ >= 0; --cJ) UJ[cJ] = (XJ[cJ] - UJ[cJ + 1]) / eJ[cJ];
      for (eJ[FJ - 1] = (JJ[FJ] + UJ[FJ - 1]) / 2, cJ = 0; cJ < FJ - 1; ++cJ) eJ[cJ] = 2 * JJ[cJ + 1] - UJ[cJ + 1];
      return [UJ, eJ]
    }

    function EJ(JJ, cJ) {
      this._context = JJ, this._t = cJ
    }
    YJ.prototype = {
      areaStart: UJ,
      areaEnd: UJ,
      lineStart: function() {
        this._point = 0
      },
      lineEnd: function() {
        this._point && this._context.closePath()
      },
      point: function(JJ, cJ) {
        JJ = +JJ, cJ = +cJ, this._point ? this._context.lineTo(JJ, cJ) : (this._point = 1, this._context.moveTo(JJ, cJ))
      }
    }, hJ.prototype = {
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
      point: function(JJ, cJ) {
        switch (JJ = +JJ, cJ = +cJ, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(JJ, cJ) : this._context.moveTo(JJ, cJ);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(JJ, cJ)
        }
      }
    }, xJ.prototype = {
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
            fJ(this, this._t0, GJ(this, this._t0))
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(JJ, cJ) {
        var ZJ = NaN;
        if (cJ = +cJ, (JJ = +JJ) !== this._x1 || cJ !== this._y1) {
          switch (this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(JJ, cJ) : this._context.moveTo(JJ, cJ);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3, fJ(this, GJ(this, ZJ = nJ(this, JJ, cJ)), ZJ);
              break;
            default:
              fJ(this, this._t0, ZJ = nJ(this, JJ, cJ))
          }
          this._x0 = this._x1, this._x1 = JJ, this._y0 = this._y1, this._y1 = cJ, this._t0 = ZJ
        }
      }
    }, (rJ.prototype = Object.create(xJ.prototype)).point = function(JJ, cJ) {
      xJ.prototype.point.call(this, cJ, JJ)
    }, vJ.prototype = {
      moveTo: function(JJ, cJ) {
        this._context.moveTo(cJ, JJ)
      },
      closePath: function() {
        this._context.closePath()
      },
      lineTo: function(JJ, cJ) {
        this._context.lineTo(cJ, JJ)
      },
      bezierCurveTo: function(JJ, cJ, ZJ, FJ, UJ, eJ) {
        this._context.bezierCurveTo(cJ, JJ, FJ, ZJ, eJ, UJ)
      }
    }, mJ.prototype = {
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
        var JJ = this._x,
          cJ = this._y,
          ZJ = JJ.length;
        if (ZJ)
          if (this._line ? this._context.lineTo(JJ[0], cJ[0]) : this._context.moveTo(JJ[0], cJ[0]), 2 === ZJ) this._context.lineTo(JJ[1], cJ[1]);
          else
            for (var FJ = QJ(JJ), UJ = QJ(cJ), eJ = 0, XJ = 1; XJ < ZJ; ++eJ, ++XJ) this._context.bezierCurveTo(FJ[0][eJ], UJ[0][eJ], FJ[1][eJ], UJ[1][eJ], JJ[XJ], cJ[XJ]);
        (this._line || 0 !== this._line && 1 === ZJ) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
      },
      point: function(JJ, cJ) {
        this._x.push(+JJ), this._y.push(+cJ)
      }
    }, EJ.prototype = {
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
      point: function(JJ, cJ) {
        switch (JJ = +JJ, cJ = +cJ, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(JJ, cJ) : this._context.moveTo(JJ, cJ);
            break;
          case 1:
            this._point = 2;
          default:
            if (this._t <= 0) this._context.lineTo(this._x, cJ), this._context.lineTo(JJ, cJ);
            else {
              var ZJ = this._x * (1 - this._t) + JJ * this._t;
              this._context.lineTo(ZJ, this._y), this._context.lineTo(ZJ, cJ)
            }
        }
        this._x = JJ, this._y = cJ
      }
    };
    var VJ = ZJ(5583),
      KJ = ZJ(5461),
      yJ = ZJ(5463);

    function SJ(JJ) {
      return JJ[0]
    }

    function IJ(JJ) {
      return JJ[1]
    }

    function MJ(JJ, cJ) {
      var ZJ = (0, KJ.c)(!0),
        FJ = null,
        UJ = DJ,
        eJ = null,
        XJ = (0, yJ.b)(AJ);

      function AJ(AJ) {
        var qJ, jJ, YJ, hJ = (AJ = (0, VJ.e)(AJ)).length,
          DJ = !1;
        for (null == FJ && (eJ = UJ(YJ = XJ())), qJ = 0; qJ <= hJ; ++qJ) !(qJ < hJ && ZJ(jJ = AJ[qJ], qJ, AJ)) === DJ && ((DJ = !DJ) ? eJ.lineStart() : eJ.lineEnd()), DJ && eJ.point(+JJ(jJ, qJ, AJ), +cJ(jJ, qJ, AJ));
        if (YJ) return eJ = null, YJ + "" || null
      }
      return JJ = "function" === typeof JJ ? JJ : void 0 === JJ ? SJ : (0, KJ.c)(JJ), cJ = "function" === typeof cJ ? cJ : void 0 === cJ ? IJ : (0, KJ.c)(cJ), AJ.x = function(cJ) {
        return arguments.length ? (JJ = "function" === typeof cJ ? cJ : (0, KJ.c)(+cJ), AJ) : JJ
      }, AJ.y = function(JJ) {
        return arguments.length ? (cJ = "function" === typeof JJ ? JJ : (0, KJ.c)(+JJ), AJ) : cJ
      }, AJ.defined = function(JJ) {
        return arguments.length ? (ZJ = "function" === typeof JJ ? JJ : (0, KJ.c)(!!JJ), AJ) : ZJ
      }, AJ.curve = function(JJ) {
        return arguments.length ? (UJ = JJ, null != FJ && (eJ = UJ(FJ)), AJ) : UJ
      }, AJ.context = function(JJ) {
        return arguments.length ? (null == JJ ? FJ = eJ = null : eJ = UJ(FJ = JJ), AJ) : FJ
      }, AJ
    }

    function bJ(JJ, cJ, ZJ) {
      var FJ = null,
        UJ = (0, KJ.c)(!0),
        eJ = null,
        XJ = DJ,
        AJ = null,
        qJ = (0, yJ.b)(jJ);

      function jJ(jJ) {
        var YJ, hJ, DJ, sJ, nJ, GJ = (jJ = (0, VJ.e)(jJ)).length,
          fJ = !1,
          xJ = new Array(GJ),
          rJ = new Array(GJ);
        for (null == eJ && (AJ = XJ(nJ = qJ())), YJ = 0; YJ <= GJ; ++YJ) {
          if (!(YJ < GJ && UJ(sJ = jJ[YJ], YJ, jJ)) === fJ)
            if (fJ = !fJ) hJ = YJ, AJ.areaStart(), AJ.lineStart();
            else {
              for (AJ.lineEnd(), AJ.lineStart(), DJ = YJ - 1; DJ >= hJ; --DJ) AJ.point(xJ[DJ], rJ[DJ]);
              AJ.lineEnd(), AJ.areaEnd()
            } fJ && (xJ[YJ] = +JJ(sJ, YJ, jJ), rJ[YJ] = +cJ(sJ, YJ, jJ), AJ.point(FJ ? +FJ(sJ, YJ, jJ) : xJ[YJ], ZJ ? +ZJ(sJ, YJ, jJ) : rJ[YJ]))
        }
        if (nJ) return AJ = null, nJ + "" || null
      }

      function YJ() {
        return MJ().defined(UJ).curve(XJ).context(eJ)
      }
      return JJ = "function" === typeof JJ ? JJ : void 0 === JJ ? SJ : (0, KJ.c)(+JJ), cJ = "function" === typeof cJ ? cJ : void 0 === cJ ? (0, KJ.c)(0) : (0, KJ.c)(+cJ), ZJ = "function" === typeof ZJ ? ZJ : void 0 === ZJ ? IJ : (0, KJ.c)(+ZJ), jJ.x = function(cJ) {
        return arguments.length ? (JJ = "function" === typeof cJ ? cJ : (0, KJ.c)(+cJ), FJ = null, jJ) : JJ
      }, jJ.x0 = function(cJ) {
        return arguments.length ? (JJ = "function" === typeof cJ ? cJ : (0, KJ.c)(+cJ), jJ) : JJ
      }, jJ.x1 = function(JJ) {
        return arguments.length ? (FJ = null == JJ ? null : "function" === typeof JJ ? JJ : (0, KJ.c)(+JJ), jJ) : FJ
      }, jJ.y = function(JJ) {
        return arguments.length ? (cJ = "function" === typeof JJ ? JJ : (0, KJ.c)(+JJ), ZJ = null, jJ) : cJ
      }, jJ.y0 = function(JJ) {
        return arguments.length ? (cJ = "function" === typeof JJ ? JJ : (0, KJ.c)(+JJ), jJ) : cJ
      }, jJ.y1 = function(JJ) {
        return arguments.length ? (ZJ = null == JJ ? null : "function" === typeof JJ ? JJ : (0, KJ.c)(+JJ), jJ) : ZJ
      }, jJ.lineX0 = jJ.lineY0 = function() {
        return YJ().x(JJ).y(cJ)
      }, jJ.lineY1 = function() {
        return YJ().x(JJ).y(ZJ)
      }, jJ.lineX1 = function() {
        return YJ().x(FJ).y(cJ)
      }, jJ.defined = function(JJ) {
        return arguments.length ? (UJ = "function" === typeof JJ ? JJ : (0, KJ.c)(!!JJ), jJ) : UJ
      }, jJ.curve = function(JJ) {
        return arguments.length ? (XJ = JJ, null != eJ && (AJ = XJ(eJ)), jJ) : XJ
      }, jJ.context = function(JJ) {
        return arguments.length ? (null == JJ ? eJ = AJ = null : AJ = XJ(eJ = JJ), jJ) : eJ
      }, jJ
    }
    var wJ = ZJ(5422),
      WJ = ZJ.n(wJ),
      gJ = ZJ(4641),
      HJ = ZJ.n(gJ),
      PJ = ZJ(4468),
      kJ = ZJ(4817),
      pJ = ZJ(4797),
      dJ = ZJ(4543);

    function zJ(JJ) {
      return zJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, zJ(JJ)
    }

    function NJ() {
      return NJ = Object.assign ? Object.assign.bind() : function(JJ) {
        for (var cJ = 1; cJ < arguments.length; cJ++) {
          var ZJ = arguments[cJ];
          for (var FJ in ZJ) Object.prototype.hasOwnProperty.call(ZJ, FJ) && (JJ[FJ] = ZJ[FJ])
        }
        return JJ
      }, NJ.apply(this, arguments)
    }

    function OJ(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function TJ(JJ) {
      for (var cJ = 1; cJ < arguments.length; cJ++) {
        var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
        cJ % 2 ? OJ(Object(ZJ), !0).forEach((function(cJ) {
          CJ(JJ, cJ, ZJ[cJ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : OJ(Object(ZJ)).forEach((function(cJ) {
          Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
        }))
      }
      return JJ
    }

    function CJ(JJ, cJ, ZJ) {
      return (cJ = function(JJ) {
        var cJ = function(JJ, cJ) {
          if ("object" != zJ(JJ) || !JJ) return JJ;
          var ZJ = JJ[Symbol.toPrimitive];
          if (void 0 !== ZJ) {
            var FJ = ZJ.call(JJ, cJ || "default");
            if ("object" != zJ(FJ)) return FJ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === cJ ? String : Number)(JJ)
        }(JJ, "string");
        return "symbol" == zJ(cJ) ? cJ : cJ + ""
      }(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }
    var uJ = {
        curveBasisClosed: function(JJ) {
          return new AJ(JJ)
        },
        curveBasisOpen: function(JJ) {
          return new qJ(JJ)
        },
        curveBasis: function(JJ) {
          return new XJ(JJ)
        },
        curveBumpX: function(JJ) {
          return new jJ(JJ, !0)
        },
        curveBumpY: function(JJ) {
          return new jJ(JJ, !1)
        },
        curveLinearClosed: function(JJ) {
          return new YJ(JJ)
        },
        curveLinear: DJ,
        curveMonotoneX: function(JJ) {
          return new xJ(JJ)
        },
        curveMonotoneY: function(JJ) {
          return new rJ(JJ)
        },
        curveNatural: function(JJ) {
          return new mJ(JJ)
        },
        curveStep: function(JJ) {
          return new EJ(JJ, .5)
        },
        curveStepAfter: function(JJ) {
          return new EJ(JJ, 1)
        },
        curveStepBefore: function(JJ) {
          return new EJ(JJ, 0)
        }
      },
      iJ = function(JJ) {
        return JJ.x === +JJ.x && JJ.y === +JJ.y
      },
      RJ = function(JJ) {
        return JJ.x
      },
      LJ = function(JJ) {
        return JJ.y
      },
      aJ = function(JJ) {
        var cJ, ZJ = JJ.type,
          FJ = void 0 === ZJ ? "linear" : ZJ,
          UJ = JJ.points,
          eJ = void 0 === UJ ? [] : UJ,
          XJ = JJ.baseLine,
          AJ = JJ.layout,
          qJ = JJ.connectNulls,
          jJ = void 0 !== qJ && qJ,
          YJ = function(JJ, cJ) {
            if (HJ()(JJ)) return JJ;
            var ZJ = "curve".concat(WJ()(JJ));
            return "curveMonotone" !== ZJ && "curveBump" !== ZJ || !cJ ? uJ[ZJ] || DJ : uJ["".concat(ZJ).concat("vertical" === cJ ? "Y" : "X")]
          }(FJ, AJ),
          hJ = jJ ? eJ.filter((function(JJ) {
            return iJ(JJ)
          })) : eJ;
        if (Array.isArray(XJ)) {
          var sJ = jJ ? XJ.filter((function(JJ) {
              return iJ(JJ)
            })) : XJ,
            nJ = hJ.map((function(JJ, cJ) {
              return TJ(TJ({}, JJ), {}, {
                base: sJ[cJ]
              })
            }));
          return (cJ = "vertical" === AJ ? bJ().y(LJ).x1(RJ).x0((function(JJ) {
            return JJ.base.x
          })) : bJ().x(RJ).y1(LJ).y0((function(JJ) {
            return JJ.base.y
          }))).defined(iJ).curve(YJ), cJ(nJ)
        }
        return (cJ = "vertical" === AJ && (0, dJ.C)(XJ) ? bJ().y(LJ).x1(RJ).x0(XJ) : (0, dJ.C)(XJ) ? bJ().x(RJ).y1(LJ).y0(XJ) : MJ().x(RJ).y(LJ)).defined(iJ).curve(YJ), cJ(hJ)
      },
      BJ = function(JJ) {
        var cJ = JJ.className,
          ZJ = JJ.points,
          UJ = JJ.path,
          eJ = JJ.pathRef;
        if ((!ZJ || !ZJ.length) && !UJ) return null;
        var XJ = ZJ && ZJ.length ? aJ(JJ) : UJ;
        return FJ.createElement("path", NJ({}, (0, pJ.c)(JJ, !1), (0, kJ.k)(JJ), {
          className: (0, PJ.d)("recharts-curve", cJ),
          d: XJ,
          ref: eJ
        }))
      }
  },
  5471: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => qJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(4468),
      eJ = ZJ(4817),
      XJ = ZJ(4797);

    function AJ() {
      return AJ = Object.assign ? Object.assign.bind() : function(JJ) {
        for (var cJ = 1; cJ < arguments.length; cJ++) {
          var ZJ = arguments[cJ];
          for (var FJ in ZJ) Object.prototype.hasOwnProperty.call(ZJ, FJ) && (JJ[FJ] = ZJ[FJ])
        }
        return JJ
      }, AJ.apply(this, arguments)
    }
    var qJ = function(JJ) {
      var cJ = JJ.cx,
        ZJ = JJ.cy,
        qJ = JJ.r,
        jJ = JJ.className,
        YJ = (0, UJ.d)("recharts-dot", jJ);
      return cJ === +cJ && ZJ === +ZJ && qJ === +qJ ? FJ.createElement("circle", AJ({}, (0, XJ.c)(JJ, !1), (0, eJ.k)(JJ), {
        className: YJ,
        cx: cJ,
        cy: ZJ,
        r: qJ
      })) : null
    }
  },
  5480: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => xJ,
      g: () => GJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(4468),
      eJ = ZJ(5483),
      XJ = ZJ(4797);

    function AJ(JJ) {
      return AJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, AJ(JJ)
    }

    function qJ() {
      return qJ = Object.assign ? Object.assign.bind() : function(JJ) {
        for (var cJ = 1; cJ < arguments.length; cJ++) {
          var ZJ = arguments[cJ];
          for (var FJ in ZJ) Object.prototype.hasOwnProperty.call(ZJ, FJ) && (JJ[FJ] = ZJ[FJ])
        }
        return JJ
      }, qJ.apply(this, arguments)
    }

    function jJ(JJ, cJ) {
      return function(JJ) {
        if (Array.isArray(JJ)) return JJ
      }(JJ) || function(JJ, cJ) {
        var ZJ = null == JJ ? null : "undefined" != typeof Symbol && JJ[Symbol.iterator] || JJ["@@iterator"];
        if (null != ZJ) {
          var FJ, UJ, eJ, XJ, AJ = [],
            qJ = !0,
            jJ = !1;
          try {
            if (eJ = (ZJ = ZJ.call(JJ)).next, 0 === cJ) {
              if (Object(ZJ) !== ZJ) return;
              qJ = !1
            } else
              for (; !(qJ = (FJ = eJ.call(ZJ)).done) && (AJ.push(FJ.value), AJ.length !== cJ); qJ = !0);
          } catch (JJ) {
            jJ = !0, UJ = JJ
          } finally {
            try {
              if (!qJ && null != ZJ.return && (XJ = ZJ.return(), Object(XJ) !== XJ)) return
            } finally {
              if (jJ) throw UJ
            }
          }
          return AJ
        }
      }(JJ, cJ) || function(JJ, cJ) {
        if (!JJ) return;
        if ("string" === typeof JJ) return YJ(JJ, cJ);
        var ZJ = Object.prototype.toString.call(JJ).slice(8, -1);
        "Object" === ZJ && JJ.constructor && (ZJ = JJ.constructor.name);
        if ("Map" === ZJ || "Set" === ZJ) return Array.from(JJ);
        if ("Arguments" === ZJ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZJ)) return YJ(JJ, cJ)
      }(JJ, cJ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function YJ(JJ, cJ) {
      (null == cJ || cJ > JJ.length) && (cJ = JJ.length);
      for (var ZJ = 0, FJ = new Array(cJ); ZJ < cJ; ZJ++) FJ[ZJ] = JJ[ZJ];
      return FJ
    }

    function hJ(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function DJ(JJ) {
      for (var cJ = 1; cJ < arguments.length; cJ++) {
        var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
        cJ % 2 ? hJ(Object(ZJ), !0).forEach((function(cJ) {
          sJ(JJ, cJ, ZJ[cJ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : hJ(Object(ZJ)).forEach((function(cJ) {
          Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
        }))
      }
      return JJ
    }

    function sJ(JJ, cJ, ZJ) {
      return (cJ = function(JJ) {
        var cJ = function(JJ, cJ) {
          if ("object" != AJ(JJ) || !JJ) return JJ;
          var ZJ = JJ[Symbol.toPrimitive];
          if (void 0 !== ZJ) {
            var FJ = ZJ.call(JJ, cJ || "default");
            if ("object" != AJ(FJ)) return FJ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === cJ ? String : Number)(JJ)
        }(JJ, "string");
        return "symbol" == AJ(cJ) ? cJ : cJ + ""
      }(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }
    var nJ = function(JJ, cJ, ZJ, FJ, UJ) {
        var eJ, XJ = Math.min(Math.abs(ZJ) / 2, Math.abs(FJ) / 2),
          AJ = FJ >= 0 ? 1 : -1,
          qJ = ZJ >= 0 ? 1 : -1,
          jJ = FJ >= 0 && ZJ >= 0 || FJ < 0 && ZJ < 0 ? 1 : 0;
        if (XJ > 0 && UJ instanceof Array) {
          for (var YJ = [0, 0, 0, 0], hJ = 0; hJ < 4; hJ++) YJ[hJ] = UJ[hJ] > XJ ? XJ : UJ[hJ];
          eJ = "M".concat(JJ, ",").concat(cJ + AJ * YJ[0]), YJ[0] > 0 && (eJ += "A ".concat(YJ[0], ",").concat(YJ[0], ",0,0,").concat(jJ, ",").concat(JJ + qJ * YJ[0], ",").concat(cJ)), eJ += "L ".concat(JJ + ZJ - qJ * YJ[1], ",").concat(cJ), YJ[1] > 0 && (eJ += "A ".concat(YJ[1], ",").concat(YJ[1], ",0,0,").concat(jJ, ",\n        ").concat(JJ + ZJ, ",").concat(cJ + AJ * YJ[1])), eJ += "L ".concat(JJ + ZJ, ",").concat(cJ + FJ - AJ * YJ[2]), YJ[2] > 0 && (eJ += "A ".concat(YJ[2], ",").concat(YJ[2], ",0,0,").concat(jJ, ",\n        ").concat(JJ + ZJ - qJ * YJ[2], ",").concat(cJ + FJ)), eJ += "L ".concat(JJ + qJ * YJ[3], ",").concat(cJ + FJ), YJ[3] > 0 && (eJ += "A ".concat(YJ[3], ",").concat(YJ[3], ",0,0,").concat(jJ, ",\n        ").concat(JJ, ",").concat(cJ + FJ - AJ * YJ[3])), eJ += "Z"
        } else if (XJ > 0 && UJ === +UJ && UJ > 0) {
          var DJ = Math.min(XJ, UJ);
          eJ = "M ".concat(JJ, ",").concat(cJ + AJ * DJ, "\n            A ").concat(DJ, ",").concat(DJ, ",0,0,").concat(jJ, ",").concat(JJ + qJ * DJ, ",").concat(cJ, "\n            L ").concat(JJ + ZJ - qJ * DJ, ",").concat(cJ, "\n            A ").concat(DJ, ",").concat(DJ, ",0,0,").concat(jJ, ",").concat(JJ + ZJ, ",").concat(cJ + AJ * DJ, "\n            L ").concat(JJ + ZJ, ",").concat(cJ + FJ - AJ * DJ, "\n            A ").concat(DJ, ",").concat(DJ, ",0,0,").concat(jJ, ",").concat(JJ + ZJ - qJ * DJ, ",").concat(cJ + FJ, "\n            L ").concat(JJ + qJ * DJ, ",").concat(cJ + FJ, "\n            A ").concat(DJ, ",").concat(DJ, ",0,0,").concat(jJ, ",").concat(JJ, ",").concat(cJ + FJ - AJ * DJ, " Z")
        } else eJ = "M ".concat(JJ, ",").concat(cJ, " h ").concat(ZJ, " v ").concat(FJ, " h ").concat(-ZJ, " Z");
        return eJ
      },
      GJ = function(JJ, cJ) {
        if (!JJ || !cJ) return !1;
        var ZJ = JJ.x,
          FJ = JJ.y,
          UJ = cJ.x,
          eJ = cJ.y,
          XJ = cJ.width,
          AJ = cJ.height;
        if (Math.abs(XJ) > 0 && Math.abs(AJ) > 0) {
          var qJ = Math.min(UJ, UJ + XJ),
            jJ = Math.max(UJ, UJ + XJ),
            YJ = Math.min(eJ, eJ + AJ),
            hJ = Math.max(eJ, eJ + AJ);
          return ZJ >= qJ && ZJ <= jJ && FJ >= YJ && FJ <= hJ
        }
        return !1
      },
      fJ = {
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
      xJ = function(JJ) {
        var cJ = DJ(DJ({}, fJ), JJ),
          ZJ = (0, FJ.useRef)(),
          AJ = jJ((0, FJ.useState)(-1), 2),
          YJ = AJ[0],
          hJ = AJ[1];
        (0, FJ.useEffect)((function() {
          if (ZJ.current && ZJ.current.getTotalLength) try {
            var JJ = ZJ.current.getTotalLength();
            JJ && hJ(JJ)
          } catch (cJ) {}
        }), []);
        var sJ = cJ.x,
          GJ = cJ.y,
          xJ = cJ.width,
          rJ = cJ.height,
          vJ = cJ.radius,
          mJ = cJ.className,
          QJ = cJ.animationEasing,
          EJ = cJ.animationDuration,
          VJ = cJ.animationBegin,
          KJ = cJ.isAnimationActive,
          yJ = cJ.isUpdateAnimationActive;
        if (sJ !== +sJ || GJ !== +GJ || xJ !== +xJ || rJ !== +rJ || 0 === xJ || 0 === rJ) return null;
        var SJ = (0, UJ.d)("recharts-rectangle", mJ);
        return yJ ? FJ.createElement(eJ.c, {
          canBegin: YJ > 0,
          from: {
            width: xJ,
            height: rJ,
            x: sJ,
            y: GJ
          },
          to: {
            width: xJ,
            height: rJ,
            x: sJ,
            y: GJ
          },
          duration: EJ,
          animationEasing: QJ,
          isActive: yJ
        }, (function(JJ) {
          var UJ = JJ.width,
            AJ = JJ.height,
            jJ = JJ.x,
            hJ = JJ.y;
          return FJ.createElement(eJ.c, {
            canBegin: YJ > 0,
            from: "0px ".concat(-1 === YJ ? 1 : YJ, "px"),
            to: "".concat(YJ, "px 0px"),
            attributeName: "strokeDasharray",
            Fs: VJ,
            duration: EJ,
            isActive: KJ,
            easing: QJ
          }, FJ.createElement("path", qJ({}, (0, XJ.c)(cJ, !0), {
            className: SJ,
            d: nJ(jJ, hJ, UJ, AJ, vJ),
            ref: ZJ
          })))
        })) : FJ.createElement("path", qJ({}, (0, XJ.c)(cJ, !0), {
          className: SJ,
          d: nJ(sJ, GJ, xJ, rJ, vJ)
        }))
      }
  },
  5681: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => fJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(4468),
      eJ = ZJ(4797),
      XJ = ZJ(5590),
      AJ = ZJ(4543);

    function qJ(JJ) {
      return qJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, qJ(JJ)
    }

    function jJ() {
      return jJ = Object.assign ? Object.assign.bind() : function(JJ) {
        for (var cJ = 1; cJ < arguments.length; cJ++) {
          var ZJ = arguments[cJ];
          for (var FJ in ZJ) Object.prototype.hasOwnProperty.call(ZJ, FJ) && (JJ[FJ] = ZJ[FJ])
        }
        return JJ
      }, jJ.apply(this, arguments)
    }

    function YJ(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function hJ(JJ) {
      for (var cJ = 1; cJ < arguments.length; cJ++) {
        var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
        cJ % 2 ? YJ(Object(ZJ), !0).forEach((function(cJ) {
          DJ(JJ, cJ, ZJ[cJ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : YJ(Object(ZJ)).forEach((function(cJ) {
          Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
        }))
      }
      return JJ
    }

    function DJ(JJ, cJ, ZJ) {
      return (cJ = function(JJ) {
        var cJ = function(JJ, cJ) {
          if ("object" != qJ(JJ) || !JJ) return JJ;
          var ZJ = JJ[Symbol.toPrimitive];
          if (void 0 !== ZJ) {
            var FJ = ZJ.call(JJ, cJ || "default");
            if ("object" != qJ(FJ)) return FJ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === cJ ? String : Number)(JJ)
        }(JJ, "string");
        return "symbol" == qJ(cJ) ? cJ : cJ + ""
      }(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }
    var sJ = function(JJ) {
        var cJ = JJ.cx,
          ZJ = JJ.cy,
          FJ = JJ.radius,
          UJ = JJ.angle,
          eJ = JJ.sign,
          AJ = JJ.isExternal,
          qJ = JJ.cornerRadius,
          jJ = JJ.cornerIsExternal,
          YJ = qJ * (AJ ? 1 : -1) + FJ,
          hJ = Math.asin(qJ / YJ) / XJ.e,
          DJ = jJ ? UJ : UJ + eJ * hJ,
          sJ = jJ ? UJ - eJ * hJ : UJ;
        return {
          center: (0, XJ.m)(cJ, ZJ, YJ, DJ),
          circleTangency: (0, XJ.m)(cJ, ZJ, FJ, DJ),
          lineTangency: (0, XJ.m)(cJ, ZJ, YJ * Math.cos(hJ * XJ.e), sJ),
          sq: hJ
        }
      },
      nJ = function(JJ) {
        var cJ = JJ.cx,
          ZJ = JJ.cy,
          FJ = JJ.innerRadius,
          UJ = JJ.outerRadius,
          eJ = JJ.startAngle,
          qJ = function(JJ, cJ) {
            return (0, AJ.I)(cJ - JJ) * Math.min(Math.abs(cJ - JJ), 359.999)
          }(eJ, JJ.endAngle),
          jJ = eJ + qJ,
          YJ = (0, XJ.m)(cJ, ZJ, UJ, eJ),
          hJ = (0, XJ.m)(cJ, ZJ, UJ, jJ),
          DJ = "M ".concat(YJ.x, ",").concat(YJ.y, "\n    A ").concat(UJ, ",").concat(UJ, ",0,\n    ").concat(+(Math.abs(qJ) > 180), ",").concat(+(eJ > jJ), ",\n    ").concat(hJ.x, ",").concat(hJ.y, "\n  ");
        if (FJ > 0) {
          var sJ = (0, XJ.m)(cJ, ZJ, FJ, eJ),
            nJ = (0, XJ.m)(cJ, ZJ, FJ, jJ);
          DJ += "L ".concat(nJ.x, ",").concat(nJ.y, "\n            A ").concat(FJ, ",").concat(FJ, ",0,\n            ").concat(+(Math.abs(qJ) > 180), ",").concat(+(eJ <= jJ), ",\n            ").concat(sJ.x, ",").concat(sJ.y, " Z")
        } else DJ += "L ".concat(cJ, ",").concat(ZJ, " Z");
        return DJ
      },
      GJ = {
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
      fJ = function(JJ) {
        var cJ = hJ(hJ({}, GJ), JJ),
          ZJ = cJ.cx,
          XJ = cJ.cy,
          qJ = cJ.innerRadius,
          YJ = cJ.outerRadius,
          DJ = cJ.cornerRadius,
          fJ = cJ.forceCornerRadius,
          xJ = cJ.cornerIsExternal,
          rJ = cJ.startAngle,
          vJ = cJ.endAngle,
          mJ = cJ.className;
        if (YJ < qJ || rJ === vJ) return null;
        var QJ, EJ = (0, UJ.d)("recharts-sector", mJ),
          VJ = YJ - qJ,
          KJ = (0, AJ.l)(DJ, VJ, 0, !0);
        return QJ = KJ > 0 && Math.abs(rJ - vJ) < 360 ? function(JJ) {
          var cJ = JJ.cx,
            ZJ = JJ.cy,
            FJ = JJ.innerRadius,
            UJ = JJ.outerRadius,
            eJ = JJ.cornerRadius,
            XJ = JJ.forceCornerRadius,
            qJ = JJ.cornerIsExternal,
            jJ = JJ.startAngle,
            YJ = JJ.endAngle,
            hJ = (0, AJ.I)(YJ - jJ),
            DJ = sJ({
              cx: cJ,
              cy: ZJ,
              radius: UJ,
              angle: jJ,
              sign: hJ,
              cornerRadius: eJ,
              cornerIsExternal: qJ
            }),
            GJ = DJ.circleTangency,
            fJ = DJ.lineTangency,
            xJ = DJ.sq,
            rJ = sJ({
              cx: cJ,
              cy: ZJ,
              radius: UJ,
              angle: YJ,
              sign: -hJ,
              cornerRadius: eJ,
              cornerIsExternal: qJ
            }),
            vJ = rJ.circleTangency,
            mJ = rJ.lineTangency,
            QJ = rJ.sq,
            EJ = qJ ? Math.abs(jJ - YJ) : Math.abs(jJ - YJ) - xJ - QJ;
          if (EJ < 0) return XJ ? "M ".concat(fJ.x, ",").concat(fJ.y, "\n        a").concat(eJ, ",").concat(eJ, ",0,0,1,").concat(2 * eJ, ",0\n        a").concat(eJ, ",").concat(eJ, ",0,0,1,").concat(2 * -eJ, ",0\n      ") : nJ({
            cx: cJ,
            cy: ZJ,
            innerRadius: FJ,
            outerRadius: UJ,
            startAngle: jJ,
            endAngle: YJ
          });
          var VJ = "M ".concat(fJ.x, ",").concat(fJ.y, "\n    A").concat(eJ, ",").concat(eJ, ",0,0,").concat(+(hJ < 0), ",").concat(GJ.x, ",").concat(GJ.y, "\n    A").concat(UJ, ",").concat(UJ, ",0,").concat(+(EJ > 180), ",").concat(+(hJ < 0), ",").concat(vJ.x, ",").concat(vJ.y, "\n    A").concat(eJ, ",").concat(eJ, ",0,0,").concat(+(hJ < 0), ",").concat(mJ.x, ",").concat(mJ.y, "\n  ");
          if (FJ > 0) {
            var KJ = sJ({
                cx: cJ,
                cy: ZJ,
                radius: FJ,
                angle: jJ,
                sign: hJ,
                isExternal: !0,
                cornerRadius: eJ,
                cornerIsExternal: qJ
              }),
              yJ = KJ.circleTangency,
              SJ = KJ.lineTangency,
              IJ = KJ.sq,
              MJ = sJ({
                cx: cJ,
                cy: ZJ,
                radius: FJ,
                angle: YJ,
                sign: -hJ,
                isExternal: !0,
                cornerRadius: eJ,
                cornerIsExternal: qJ
              }),
              bJ = MJ.circleTangency,
              wJ = MJ.lineTangency,
              WJ = MJ.sq,
              gJ = qJ ? Math.abs(jJ - YJ) : Math.abs(jJ - YJ) - IJ - WJ;
            if (gJ < 0 && 0 === eJ) return "".concat(VJ, "L").concat(cJ, ",").concat(ZJ, "Z");
            VJ += "L".concat(wJ.x, ",").concat(wJ.y, "\n      A").concat(eJ, ",").concat(eJ, ",0,0,").concat(+(hJ < 0), ",").concat(bJ.x, ",").concat(bJ.y, "\n      A").concat(FJ, ",").concat(FJ, ",0,").concat(+(gJ > 180), ",").concat(+(hJ > 0), ",").concat(yJ.x, ",").concat(yJ.y, "\n      A").concat(eJ, ",").concat(eJ, ",0,0,").concat(+(hJ < 0), ",").concat(SJ.x, ",").concat(SJ.y, "Z")
          } else VJ += "L".concat(cJ, ",").concat(ZJ, "Z");
          return VJ
        }({
          cx: ZJ,
          cy: XJ,
          innerRadius: qJ,
          outerRadius: YJ,
          cornerRadius: Math.min(KJ, VJ / 2),
          forceCornerRadius: fJ,
          cornerIsExternal: xJ,
          startAngle: rJ,
          endAngle: vJ
        }) : nJ({
          cx: ZJ,
          cy: XJ,
          innerRadius: qJ,
          outerRadius: YJ,
          startAngle: rJ,
          endAngle: vJ
        }), FJ.createElement("path", jJ({}, (0, eJ.c)(cJ, !0), {
          className: EJ,
          d: QJ,
          role: "img"
        }))
      }
  },
  5415: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => TJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(5422),
      eJ = ZJ.n(UJ);
    Math.abs, Math.atan2;
    const XJ = Math.cos,
      AJ = (Math.max, Math.min, Math.sin),
      qJ = Math.sqrt,
      jJ = Math.PI,
      YJ = 2 * jJ;
    const hJ = {
        draw(JJ, cJ) {
          const ZJ = qJ(cJ / jJ);
          JJ.moveTo(ZJ, 0), JJ.arc(0, 0, ZJ, 0, YJ)
        }
      },
      DJ = {
        draw(JJ, cJ) {
          const ZJ = qJ(cJ / 5) / 2;
          JJ.moveTo(-3 * ZJ, -ZJ), JJ.lineTo(-ZJ, -ZJ), JJ.lineTo(-ZJ, -3 * ZJ), JJ.lineTo(ZJ, -3 * ZJ), JJ.lineTo(ZJ, -ZJ), JJ.lineTo(3 * ZJ, -ZJ), JJ.lineTo(3 * ZJ, ZJ), JJ.lineTo(ZJ, ZJ), JJ.lineTo(ZJ, 3 * ZJ), JJ.lineTo(-ZJ, 3 * ZJ), JJ.lineTo(-ZJ, ZJ), JJ.lineTo(-3 * ZJ, ZJ), JJ.closePath()
        }
      },
      sJ = qJ(1 / 3),
      nJ = 2 * sJ,
      GJ = {
        draw(JJ, cJ) {
          const ZJ = qJ(cJ / nJ),
            FJ = ZJ * sJ;
          JJ.moveTo(0, -ZJ), JJ.lineTo(FJ, 0), JJ.lineTo(0, ZJ), JJ.lineTo(-FJ, 0), JJ.closePath()
        }
      },
      fJ = {
        draw(JJ, cJ) {
          const ZJ = qJ(cJ),
            FJ = -ZJ / 2;
          JJ.rect(FJ, FJ, ZJ, ZJ)
        }
      },
      xJ = AJ(jJ / 10) / AJ(7 * jJ / 10),
      rJ = AJ(YJ / 10) * xJ,
      vJ = -XJ(YJ / 10) * xJ,
      mJ = {
        draw(JJ, cJ) {
          const ZJ = qJ(.8908130915292852 * cJ),
            FJ = rJ * ZJ,
            UJ = vJ * ZJ;
          JJ.moveTo(0, -ZJ), JJ.lineTo(FJ, UJ);
          for (let eJ = 1; eJ < 5; ++eJ) {
            const cJ = YJ * eJ / 5,
              qJ = XJ(cJ),
              jJ = AJ(cJ);
            JJ.lineTo(jJ * ZJ, -qJ * ZJ), JJ.lineTo(qJ * FJ - jJ * UJ, jJ * FJ + qJ * UJ)
          }
          JJ.closePath()
        }
      },
      QJ = qJ(3),
      EJ = {
        draw(JJ, cJ) {
          const ZJ = -qJ(cJ / (3 * QJ));
          JJ.moveTo(0, 2 * ZJ), JJ.lineTo(-QJ * ZJ, -ZJ), JJ.lineTo(QJ * ZJ, -ZJ), JJ.closePath()
        }
      },
      VJ = -.5,
      KJ = qJ(3) / 2,
      yJ = 1 / qJ(12),
      SJ = 3 * (yJ / 2 + 1),
      IJ = {
        draw(JJ, cJ) {
          const ZJ = qJ(cJ / SJ),
            FJ = ZJ / 2,
            UJ = ZJ * yJ,
            eJ = FJ,
            XJ = ZJ * yJ + ZJ,
            AJ = -eJ,
            jJ = XJ;
          JJ.moveTo(FJ, UJ), JJ.lineTo(eJ, XJ), JJ.lineTo(AJ, jJ), JJ.lineTo(VJ * FJ - KJ * UJ, KJ * FJ + VJ * UJ), JJ.lineTo(VJ * eJ - KJ * XJ, KJ * eJ + VJ * XJ), JJ.lineTo(VJ * AJ - KJ * jJ, KJ * AJ + VJ * jJ), JJ.lineTo(VJ * FJ + KJ * UJ, VJ * UJ - KJ * FJ), JJ.lineTo(VJ * eJ + KJ * XJ, VJ * XJ - KJ * eJ), JJ.lineTo(VJ * AJ + KJ * jJ, VJ * jJ - KJ * AJ), JJ.closePath()
        }
      };
    var MJ = ZJ(5461),
      bJ = ZJ(5463);
    qJ(3), qJ(3);
    var wJ = ZJ(4468),
      WJ = ZJ(4797);

    function gJ(JJ) {
      return gJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, gJ(JJ)
    }
    var HJ = ["type", "size", "sizeType"];

    function PJ() {
      return PJ = Object.assign ? Object.assign.bind() : function(JJ) {
        for (var cJ = 1; cJ < arguments.length; cJ++) {
          var ZJ = arguments[cJ];
          for (var FJ in ZJ) Object.prototype.hasOwnProperty.call(ZJ, FJ) && (JJ[FJ] = ZJ[FJ])
        }
        return JJ
      }, PJ.apply(this, arguments)
    }

    function kJ(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function pJ(JJ) {
      for (var cJ = 1; cJ < arguments.length; cJ++) {
        var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
        cJ % 2 ? kJ(Object(ZJ), !0).forEach((function(cJ) {
          dJ(JJ, cJ, ZJ[cJ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : kJ(Object(ZJ)).forEach((function(cJ) {
          Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
        }))
      }
      return JJ
    }

    function dJ(JJ, cJ, ZJ) {
      return (cJ = function(JJ) {
        var cJ = function(JJ, cJ) {
          if ("object" != gJ(JJ) || !JJ) return JJ;
          var ZJ = JJ[Symbol.toPrimitive];
          if (void 0 !== ZJ) {
            var FJ = ZJ.call(JJ, cJ || "default");
            if ("object" != gJ(FJ)) return FJ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === cJ ? String : Number)(JJ)
        }(JJ, "string");
        return "symbol" == gJ(cJ) ? cJ : cJ + ""
      }(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }

    function zJ(JJ, cJ) {
      if (null == JJ) return {};
      var ZJ, FJ, UJ = function(JJ, cJ) {
        if (null == JJ) return {};
        var ZJ = {};
        for (var FJ in JJ)
          if (Object.prototype.hasOwnProperty.call(JJ, FJ)) {
            if (cJ.indexOf(FJ) >= 0) continue;
            ZJ[FJ] = JJ[FJ]
          } return ZJ
      }(JJ, cJ);
      if (Object.getOwnPropertySymbols) {
        var eJ = Object.getOwnPropertySymbols(JJ);
        for (FJ = 0; FJ < eJ.length; FJ++) ZJ = eJ[FJ], cJ.indexOf(ZJ) >= 0 || Object.prototype.propertyIsEnumerable.call(JJ, ZJ) && (UJ[ZJ] = JJ[ZJ])
      }
      return UJ
    }
    var NJ = {
        symbolCircle: hJ,
        symbolCross: DJ,
        symbolDiamond: GJ,
        symbolSquare: fJ,
        symbolStar: mJ,
        symbolTriangle: EJ,
        symbolWye: IJ
      },
      OJ = Math.PI / 180,
      TJ = function(JJ) {
        var cJ = JJ.type,
          ZJ = void 0 === cJ ? "circle" : cJ,
          UJ = JJ.size,
          XJ = void 0 === UJ ? 64 : UJ,
          AJ = JJ.sizeType,
          qJ = void 0 === AJ ? "area" : AJ,
          jJ = pJ(pJ({}, zJ(JJ, HJ)), {}, {
            type: ZJ,
            size: XJ,
            sizeType: qJ
          }),
          YJ = jJ.className,
          DJ = jJ.cx,
          sJ = jJ.cy,
          nJ = (0, WJ.c)(jJ, !0);
        return DJ === +DJ && sJ === +sJ && XJ === +XJ ? FJ.createElement("path", PJ({}, nJ, {
          className: (0, wJ.d)("recharts-symbols", YJ),
          transform: "translate(".concat(DJ, ", ").concat(sJ, ")"),
          d: function() {
            var JJ = function(JJ) {
                var cJ = "symbol".concat(eJ()(JJ));
                return NJ[cJ] || hJ
              }(ZJ),
              cJ = function(JJ, cJ) {
                let ZJ = null,
                  FJ = (0, bJ.b)(UJ);

                function UJ() {
                  let UJ;
                  if (ZJ || (ZJ = UJ = FJ()), JJ.apply(this, arguments).draw(ZJ, +cJ.apply(this, arguments)), UJ) return ZJ = null, UJ + "" || null
                }
                return JJ = "function" === typeof JJ ? JJ : (0, MJ.c)(JJ || hJ), cJ = "function" === typeof cJ ? cJ : (0, MJ.c)(void 0 === cJ ? 64 : +cJ), UJ.type = function(cJ) {
                  return arguments.length ? (JJ = "function" === typeof cJ ? cJ : (0, MJ.c)(cJ), UJ) : JJ
                }, UJ.size = function(JJ) {
                  return arguments.length ? (cJ = "function" === typeof JJ ? JJ : (0, MJ.c)(+JJ), UJ) : cJ
                }, UJ.context = function(JJ) {
                  return arguments.length ? (ZJ = null == JJ ? null : JJ, UJ) : ZJ
                }, UJ
              }().type(JJ).size(function(JJ, cJ, ZJ) {
                if ("area" === cJ) return JJ;
                switch (ZJ) {
                  case "cross":
                    return 5 * JJ * JJ / 9;
                  case "diamond":
                    return .5 * JJ * JJ / Math.sqrt(3);
                  case "square":
                    return JJ * JJ;
                  case "star":
                    var FJ = 18 * OJ;
                    return 1.25 * JJ * JJ * (Math.tan(FJ) - Math.tan(2 * FJ) * Math.pow(Math.tan(FJ), 2));
                  case "triangle":
                    return Math.sqrt(3) * JJ * JJ / 4;
                  case "wye":
                    return (21 - 10 * Math.sqrt(3)) * JJ * JJ / 8;
                  default:
                    return Math.PI * JJ * JJ / 4
                }
              }(XJ, qJ, ZJ));
            return cJ()
          }()
        })) : null
      };
    TJ.registerSymbol = function(JJ, cJ) {
      NJ["symbol".concat(eJ()(JJ))] = cJ
    }
  },
  5662: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => dJ,
      g: () => iJ,
      h: () => zJ,
      i: () => NJ,
      m: () => OJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(4641),
      eJ = ZJ.n(UJ),
      XJ = ZJ(5670),
      AJ = ZJ.n(XJ),
      qJ = ZJ(5679),
      jJ = ZJ.n(qJ),
      YJ = ZJ(5557),
      hJ = ZJ.n(YJ),
      DJ = ZJ(5480),
      sJ = ZJ(4468),
      nJ = ZJ(5483),
      GJ = ZJ(4797);

    function fJ(JJ) {
      return fJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, fJ(JJ)
    }

    function xJ() {
      return xJ = Object.assign ? Object.assign.bind() : function(JJ) {
        for (var cJ = 1; cJ < arguments.length; cJ++) {
          var ZJ = arguments[cJ];
          for (var FJ in ZJ) Object.prototype.hasOwnProperty.call(ZJ, FJ) && (JJ[FJ] = ZJ[FJ])
        }
        return JJ
      }, xJ.apply(this, arguments)
    }

    function rJ(JJ, cJ) {
      return function(JJ) {
        if (Array.isArray(JJ)) return JJ
      }(JJ) || function(JJ, cJ) {
        var ZJ = null == JJ ? null : "undefined" != typeof Symbol && JJ[Symbol.iterator] || JJ["@@iterator"];
        if (null != ZJ) {
          var FJ, UJ, eJ, XJ, AJ = [],
            qJ = !0,
            jJ = !1;
          try {
            if (eJ = (ZJ = ZJ.call(JJ)).next, 0 === cJ) {
              if (Object(ZJ) !== ZJ) return;
              qJ = !1
            } else
              for (; !(qJ = (FJ = eJ.call(ZJ)).done) && (AJ.push(FJ.value), AJ.length !== cJ); qJ = !0);
          } catch (JJ) {
            jJ = !0, UJ = JJ
          } finally {
            try {
              if (!qJ && null != ZJ.return && (XJ = ZJ.return(), Object(XJ) !== XJ)) return
            } finally {
              if (jJ) throw UJ
            }
          }
          return AJ
        }
      }(JJ, cJ) || function(JJ, cJ) {
        if (!JJ) return;
        if ("string" === typeof JJ) return vJ(JJ, cJ);
        var ZJ = Object.prototype.toString.call(JJ).slice(8, -1);
        "Object" === ZJ && JJ.constructor && (ZJ = JJ.constructor.name);
        if ("Map" === ZJ || "Set" === ZJ) return Array.from(JJ);
        if ("Arguments" === ZJ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZJ)) return vJ(JJ, cJ)
      }(JJ, cJ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function vJ(JJ, cJ) {
      (null == cJ || cJ > JJ.length) && (cJ = JJ.length);
      for (var ZJ = 0, FJ = new Array(cJ); ZJ < cJ; ZJ++) FJ[ZJ] = JJ[ZJ];
      return FJ
    }

    function mJ(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function QJ(JJ) {
      for (var cJ = 1; cJ < arguments.length; cJ++) {
        var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
        cJ % 2 ? mJ(Object(ZJ), !0).forEach((function(cJ) {
          EJ(JJ, cJ, ZJ[cJ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : mJ(Object(ZJ)).forEach((function(cJ) {
          Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
        }))
      }
      return JJ
    }

    function EJ(JJ, cJ, ZJ) {
      return (cJ = function(JJ) {
        var cJ = function(JJ, cJ) {
          if ("object" != fJ(JJ) || !JJ) return JJ;
          var ZJ = JJ[Symbol.toPrimitive];
          if (void 0 !== ZJ) {
            var FJ = ZJ.call(JJ, cJ || "default");
            if ("object" != fJ(FJ)) return FJ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === cJ ? String : Number)(JJ)
        }(JJ, "string");
        return "symbol" == fJ(cJ) ? cJ : cJ + ""
      }(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }
    var VJ = function(JJ, cJ, ZJ, FJ, UJ) {
        var eJ, XJ = ZJ - FJ;
        return eJ = "M ".concat(JJ, ",").concat(cJ), eJ += "L ".concat(JJ + ZJ, ",").concat(cJ), eJ += "L ".concat(JJ + ZJ - XJ / 2, ",").concat(cJ + UJ), eJ += "L ".concat(JJ + ZJ - XJ / 2 - FJ, ",").concat(cJ + UJ), eJ += "L ".concat(JJ, ",").concat(cJ, " Z")
      },
      KJ = {
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
      yJ = function(JJ) {
        var cJ = QJ(QJ({}, KJ), JJ),
          ZJ = (0, FJ.useRef)(),
          UJ = rJ((0, FJ.useState)(-1), 2),
          eJ = UJ[0],
          XJ = UJ[1];
        (0, FJ.useEffect)((function() {
          if (ZJ.current && ZJ.current.getTotalLength) try {
            var JJ = ZJ.current.getTotalLength();
            JJ && XJ(JJ)
          } catch (cJ) {}
        }), []);
        var AJ = cJ.x,
          qJ = cJ.y,
          jJ = cJ.upperWidth,
          YJ = cJ.lowerWidth,
          hJ = cJ.height,
          DJ = cJ.className,
          fJ = cJ.animationEasing,
          vJ = cJ.animationDuration,
          mJ = cJ.animationBegin,
          EJ = cJ.isUpdateAnimationActive;
        if (AJ !== +AJ || qJ !== +qJ || jJ !== +jJ || YJ !== +YJ || hJ !== +hJ || 0 === jJ && 0 === YJ || 0 === hJ) return null;
        var yJ = (0, sJ.d)("recharts-trapezoid", DJ);
        return EJ ? FJ.createElement(nJ.c, {
          canBegin: eJ > 0,
          from: {
            upperWidth: 0,
            lowerWidth: 0,
            height: hJ,
            x: AJ,
            y: qJ
          },
          to: {
            upperWidth: jJ,
            lowerWidth: YJ,
            height: hJ,
            x: AJ,
            y: qJ
          },
          duration: vJ,
          animationEasing: fJ,
          isActive: EJ
        }, (function(JJ) {
          var UJ = JJ.upperWidth,
            XJ = JJ.lowerWidth,
            AJ = JJ.height,
            qJ = JJ.x,
            jJ = JJ.y;
          return FJ.createElement(nJ.c, {
            canBegin: eJ > 0,
            from: "0px ".concat(-1 === eJ ? 1 : eJ, "px"),
            to: "".concat(eJ, "px 0px"),
            attributeName: "strokeDasharray",
            Fs: mJ,
            duration: vJ,
            easing: fJ
          }, FJ.createElement("path", xJ({}, (0, GJ.c)(cJ, !0), {
            className: yJ,
            d: VJ(qJ, jJ, UJ, XJ, AJ),
            ref: ZJ
          })))
        })) : FJ.createElement("g", null, FJ.createElement("path", xJ({}, (0, GJ.c)(cJ, !0), {
          className: yJ,
          d: VJ(AJ, qJ, jJ, YJ, hJ)
        })))
      },
      SJ = ZJ(5681),
      IJ = ZJ(5332),
      MJ = ZJ(5415),
      bJ = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];

    function wJ(JJ) {
      return wJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, wJ(JJ)
    }

    function WJ(JJ, cJ) {
      if (null == JJ) return {};
      var ZJ, FJ, UJ = function(JJ, cJ) {
        if (null == JJ) return {};
        var ZJ = {};
        for (var FJ in JJ)
          if (Object.prototype.hasOwnProperty.call(JJ, FJ)) {
            if (cJ.indexOf(FJ) >= 0) continue;
            ZJ[FJ] = JJ[FJ]
          } return ZJ
      }(JJ, cJ);
      if (Object.getOwnPropertySymbols) {
        var eJ = Object.getOwnPropertySymbols(JJ);
        for (FJ = 0; FJ < eJ.length; FJ++) ZJ = eJ[FJ], cJ.indexOf(ZJ) >= 0 || Object.prototype.propertyIsEnumerable.call(JJ, ZJ) && (UJ[ZJ] = JJ[ZJ])
      }
      return UJ
    }

    function gJ(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function HJ(JJ) {
      for (var cJ = 1; cJ < arguments.length; cJ++) {
        var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
        cJ % 2 ? gJ(Object(ZJ), !0).forEach((function(cJ) {
          PJ(JJ, cJ, ZJ[cJ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : gJ(Object(ZJ)).forEach((function(cJ) {
          Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
        }))
      }
      return JJ
    }

    function PJ(JJ, cJ, ZJ) {
      return (cJ = function(JJ) {
        var cJ = function(JJ, cJ) {
          if ("object" != wJ(JJ) || !JJ) return JJ;
          var ZJ = JJ[Symbol.toPrimitive];
          if (void 0 !== ZJ) {
            var FJ = ZJ.call(JJ, cJ || "default");
            if ("object" != wJ(FJ)) return FJ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === cJ ? String : Number)(JJ)
        }(JJ, "string");
        return "symbol" == wJ(cJ) ? cJ : cJ + ""
      }(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }

    function kJ(JJ, cJ) {
      return HJ(HJ({}, cJ), JJ)
    }

    function pJ(JJ) {
      var cJ = JJ.shapeType,
        ZJ = JJ.elementProps;
      switch (cJ) {
        case "rectangle":
          return FJ.createElement(DJ.c, ZJ);
        case "trapezoid":
          return FJ.createElement(yJ, ZJ);
        case "sector":
          return FJ.createElement(SJ.c, ZJ);
        case "symbols":
          if (function(JJ) {
              return "symbols" === JJ
            }(cJ)) return FJ.createElement(MJ.b, ZJ);
          break;
        default:
          return null
      }
    }

    function dJ(JJ) {
      var cJ, ZJ = JJ.option,
        UJ = JJ.shapeType,
        XJ = JJ.propTransformer,
        qJ = void 0 === XJ ? kJ : XJ,
        YJ = JJ.activeClassName,
        hJ = void 0 === YJ ? "recharts-active-shape" : YJ,
        DJ = JJ.isActive,
        sJ = WJ(JJ, bJ);
      if ((0, FJ.isValidElement)(ZJ)) cJ = (0, FJ.cloneElement)(ZJ, HJ(HJ({}, sJ), function(JJ) {
        return (0, FJ.isValidElement)(JJ) ? JJ.props : JJ
      }(ZJ)));
      else if (eJ()(ZJ)) cJ = ZJ(sJ);
      else if (AJ()(ZJ) && !jJ()(ZJ)) {
        var nJ = qJ(ZJ, sJ);
        cJ = FJ.createElement(pJ, {
          shapeType: UJ,
          elementProps: nJ
        })
      } else {
        var GJ = sJ;
        cJ = FJ.createElement(pJ, {
          shapeType: UJ,
          elementProps: GJ
        })
      }
      return DJ ? FJ.createElement(IJ.e, {
        className: hJ
      }, cJ) : cJ
    }

    function zJ(JJ, cJ) {
      return null != cJ && "trapezoids" in JJ.props
    }

    function NJ(JJ, cJ) {
      return null != cJ && "sectors" in JJ.props
    }

    function OJ(JJ, cJ) {
      return null != cJ && "points" in JJ.props
    }

    function TJ(JJ, cJ) {
      var ZJ, FJ, UJ = JJ.x === (null === cJ || void 0 === cJ || null === (ZJ = cJ.labelViewBox) || void 0 === ZJ ? void 0 : ZJ.x) || JJ.x === cJ.x,
        eJ = JJ.y === (null === cJ || void 0 === cJ || null === (FJ = cJ.labelViewBox) || void 0 === FJ ? void 0 : FJ.y) || JJ.y === cJ.y;
      return UJ && eJ
    }

    function CJ(JJ, cJ) {
      var ZJ = JJ.endAngle === cJ.endAngle,
        FJ = JJ.startAngle === cJ.startAngle;
      return ZJ && FJ
    }

    function uJ(JJ, cJ) {
      var ZJ = JJ.x === cJ.x,
        FJ = JJ.y === cJ.y,
        UJ = JJ.z === cJ.z;
      return ZJ && FJ && UJ
    }

    function iJ(JJ) {
      var cJ = JJ.activeTooltipItem,
        ZJ = JJ.graphicalItem,
        FJ = JJ.itemData,
        UJ = function(JJ, cJ) {
          var ZJ;
          return zJ(JJ, cJ) ? ZJ = "trapezoids" : NJ(JJ, cJ) ? ZJ = "sectors" : OJ(JJ, cJ) && (ZJ = "points"), ZJ
        }(ZJ, cJ),
        eJ = function(JJ, cJ) {
          var ZJ, FJ;
          return zJ(JJ, cJ) ? null === (ZJ = cJ.tooltipPayload) || void 0 === ZJ || null === (ZJ = ZJ[0]) || void 0 === ZJ || null === (ZJ = ZJ.payload) || void 0 === ZJ ? void 0 : ZJ.payload : NJ(JJ, cJ) ? null === (FJ = cJ.tooltipPayload) || void 0 === FJ || null === (FJ = FJ[0]) || void 0 === FJ || null === (FJ = FJ.payload) || void 0 === FJ ? void 0 : FJ.payload : OJ(JJ, cJ) ? cJ.payload : {}
        }(ZJ, cJ),
        XJ = FJ.filter((function(JJ, FJ) {
          var XJ = hJ()(eJ, JJ),
            AJ = ZJ.props[UJ].filter((function(JJ) {
              var FJ = function(JJ, cJ) {
                var ZJ;
                return zJ(JJ, cJ) ? ZJ = TJ : NJ(JJ, cJ) ? ZJ = CJ : OJ(JJ, cJ) && (ZJ = uJ), ZJ
              }(ZJ, cJ);
              return FJ(JJ, cJ)
            })),
            qJ = ZJ.props[UJ].indexOf(AJ[AJ.length - 1]);
          return XJ && FJ === qJ
        }));
      return FJ.indexOf(XJ[XJ.length - 1])
    }
  },
  5601: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => QJ,
      h: () => xJ,
      l: () => EJ,
      n: () => vJ,
      o: () => rJ
    });
    var FJ = ZJ(5603),
      UJ = ZJ.n(FJ),
      eJ = ZJ(5619),
      XJ = ZJ.n(eJ),
      AJ = ZJ(5497),
      qJ = ZJ(4797),
      jJ = ZJ(4543),
      YJ = ZJ(5637);

    function hJ(JJ) {
      return hJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, hJ(JJ)
    }

    function DJ(JJ, cJ) {
      for (var ZJ = 0; ZJ < cJ.length; ZJ++) {
        var FJ = cJ[ZJ];
        FJ.enumerable = FJ.enumerable || !1, FJ.configurable = !0, "value" in FJ && (FJ.writable = !0), Object.defineProperty(JJ, fJ(FJ.key), FJ)
      }
    }

    function sJ(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function nJ(JJ) {
      for (var cJ = 1; cJ < arguments.length; cJ++) {
        var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
        cJ % 2 ? sJ(Object(ZJ), !0).forEach((function(cJ) {
          GJ(JJ, cJ, ZJ[cJ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : sJ(Object(ZJ)).forEach((function(cJ) {
          Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
        }))
      }
      return JJ
    }

    function GJ(JJ, cJ, ZJ) {
      return (cJ = fJ(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }

    function fJ(JJ) {
      var cJ = function(JJ, cJ) {
        if ("object" != hJ(JJ) || !JJ) return JJ;
        var ZJ = JJ[Symbol.toPrimitive];
        if (void 0 !== ZJ) {
          var FJ = ZJ.call(JJ, cJ || "default");
          if ("object" != hJ(FJ)) return FJ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === cJ ? String : Number)(JJ)
      }(JJ, "string");
      return "symbol" == hJ(cJ) ? cJ : cJ + ""
    }
    var xJ = function(JJ, cJ, ZJ, FJ, UJ) {
        var eJ = JJ.width,
          XJ = JJ.height,
          hJ = JJ.layout,
          DJ = JJ.children,
          sJ = Object.keys(cJ),
          fJ = {
            left: ZJ.left,
            leftMirror: ZJ.left,
            right: eJ - ZJ.right,
            rightMirror: eJ - ZJ.right,
            top: ZJ.top,
            topMirror: ZJ.top,
            bottom: XJ - ZJ.bottom,
            bottomMirror: XJ - ZJ.bottom
          },
          xJ = !!(0, qJ.g)(DJ, YJ.e);
        return sJ.reduce((function(eJ, XJ) {
          var qJ, YJ, DJ, sJ, rJ, vJ = cJ[XJ],
            mJ = vJ.orientation,
            QJ = vJ.domain,
            EJ = vJ.padding,
            VJ = void 0 === EJ ? {} : EJ,
            KJ = vJ.mirror,
            yJ = vJ.reversed,
            SJ = "".concat(mJ).concat(KJ ? "Mirror" : "");
          if ("number" === vJ.type && ("gap" === vJ.padding || "no-gap" === vJ.padding)) {
            var IJ = QJ[1] - QJ[0],
              MJ = 1 / 0,
              bJ = vJ.categoricalDomain.sort(jJ.c);
            if (bJ.forEach((function(JJ, cJ) {
                cJ > 0 && (MJ = Math.min((JJ || 0) - (bJ[cJ - 1] || 0), MJ))
              })), Number.isFinite(MJ)) {
              var wJ = MJ / IJ,
                WJ = "vertical" === vJ.layout ? ZJ.height : ZJ.width;
              if ("gap" === vJ.padding && (qJ = wJ * WJ / 2), "no-gap" === vJ.padding) {
                var gJ = (0, jJ.l)(JJ.barCategoryGap, wJ * WJ),
                  HJ = wJ * WJ / 2;
                qJ = HJ - gJ - (HJ - gJ) / WJ * gJ
              }
            }
          }
          YJ = "xAxis" === FJ ? [ZJ.left + (VJ.left || 0) + (qJ || 0), ZJ.left + ZJ.width - (VJ.right || 0) - (qJ || 0)] : "yAxis" === FJ ? "horizontal" === hJ ? [ZJ.top + ZJ.height - (VJ.bottom || 0), ZJ.top + (VJ.top || 0)] : [ZJ.top + (VJ.top || 0) + (qJ || 0), ZJ.top + ZJ.height - (VJ.bottom || 0) - (qJ || 0)] : vJ.range, yJ && (YJ = [YJ[1], YJ[0]]);
          var PJ = (0, AJ.qb)(vJ, UJ, xJ),
            kJ = PJ.scale,
            pJ = PJ.realScaleType;
          kJ.domain(QJ).range(YJ), (0, AJ.h)(kJ);
          var dJ = (0, AJ.$)(kJ, nJ(nJ({}, vJ), {}, {
            realScaleType: pJ
          }));
          "xAxis" === FJ ? (rJ = "top" === mJ && !KJ || "bottom" === mJ && KJ, DJ = ZJ.left, sJ = fJ[SJ] - rJ * vJ.height) : "yAxis" === FJ && (rJ = "left" === mJ && !KJ || "right" === mJ && KJ, DJ = fJ[SJ] - rJ * vJ.width, sJ = ZJ.top);
          var zJ = nJ(nJ(nJ({}, vJ), dJ), {}, {
            realScaleType: pJ,
            x: DJ,
            y: sJ,
            scale: kJ,
            width: "xAxis" === FJ ? ZJ.width : vJ.width,
            height: "yAxis" === FJ ? ZJ.height : vJ.height
          });
          return zJ.bandSize = (0, AJ.n)(zJ, dJ), vJ.hide || "xAxis" !== FJ ? vJ.hide || (fJ[SJ] += (rJ ? -1 : 1) * zJ.width) : fJ[SJ] += (rJ ? -1 : 1) * zJ.height, nJ(nJ({}, eJ), {}, GJ({}, XJ, zJ))
        }), {})
      },
      rJ = function(JJ, cJ) {
        var ZJ = JJ.x,
          FJ = JJ.y,
          UJ = cJ.x,
          eJ = cJ.y;
        return {
          x: Math.min(ZJ, UJ),
          y: Math.min(FJ, eJ),
          width: Math.abs(UJ - ZJ),
          height: Math.abs(eJ - FJ)
        }
      },
      vJ = function(JJ) {
        var cJ = JJ.x1,
          ZJ = JJ.y1,
          FJ = JJ.x2,
          UJ = JJ.y2;
        return rJ({
          x: cJ,
          y: ZJ
        }, {
          x: FJ,
          y: UJ
        })
      },
      mJ = function() {
        function JJ(cJ) {
          ! function(JJ, cJ) {
            if (!(JJ instanceof cJ)) throw new TypeError("Cannot call a class as a function")
          }(this, JJ), this.scale = cJ
        }
        return cJ = JJ, ZJ = [{
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
          value: function(JJ) {
            var cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              ZJ = cJ.bandAware,
              FJ = cJ.position;
            if (void 0 !== JJ) {
              if (FJ) switch (FJ) {
                case "start":
                default:
                  return this.scale(JJ);
                case "middle":
                  var UJ = this.bandwidth ? this.bandwidth() / 2 : 0;
                  return this.scale(JJ) + UJ;
                case "end":
                  var eJ = this.bandwidth ? this.bandwidth() : 0;
                  return this.scale(JJ) + eJ
              }
              if (ZJ) {
                var XJ = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(JJ) + XJ
              }
              return this.scale(JJ)
            }
          }
        }, {
          key: "isInRange",
          value: function(JJ) {
            var cJ = this.range(),
              ZJ = cJ[0],
              FJ = cJ[cJ.length - 1];
            return ZJ <= FJ ? JJ >= ZJ && JJ <= FJ : JJ >= FJ && JJ <= ZJ
          }
        }], FJ = [{
          key: "create",
          value: function(cJ) {
            return new JJ(cJ)
          }
        }], ZJ && DJ(cJ.prototype, ZJ), FJ && DJ(cJ, FJ), Object.defineProperty(cJ, "prototype", {
          writable: !1
        }), cJ;
        var cJ, ZJ, FJ
      }();
    GJ(mJ, "EPS", 1e-4);
    var QJ = function(JJ) {
      var cJ = Object.keys(JJ).reduce((function(cJ, ZJ) {
        return nJ(nJ({}, cJ), {}, GJ({}, ZJ, mJ.create(JJ[ZJ])))
      }), {});
      return nJ(nJ({}, cJ), {}, {
        apply: function(JJ) {
          var ZJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            FJ = ZJ.bandAware,
            eJ = ZJ.position;
          return UJ()(JJ, (function(JJ, ZJ) {
            return cJ[ZJ].apply(JJ, {
              bandAware: FJ,
              position: eJ
            })
          }))
        },
        isInRange: function(JJ) {
          return XJ()(JJ, (function(JJ, ZJ) {
            return cJ[ZJ].isInRange(JJ)
          }))
        }
      })
    };
    var EJ = function(JJ) {
      var cJ = JJ.width,
        ZJ = JJ.height,
        FJ = function(JJ) {
          return (JJ % 180 + 180) % 180
        }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0),
        UJ = FJ * Math.PI / 180,
        eJ = Math.atan(ZJ / cJ),
        XJ = UJ > eJ && UJ < Math.PI - eJ ? ZJ / Math.sin(UJ) : cJ / Math.cos(UJ);
      return Math.abs(XJ)
    }
  },
  5497: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => WX,
      d: () => IX,
      h: () => CX,
      i: () => NX,
      m: () => uX,
      n: () => eA,
      r: () => wX,
      u: () => bX,
      w: () => lX,
      x: () => oX,
      B: () => tX,
      F: () => pX,
      J: () => SX,
      M: () => PX,
      P: () => cA,
      Q: () => MX,
      S: () => aX,
      V: () => JA,
      X: () => dX,
      $: () => BX,
      cb: () => AA,
      eb: () => yX,
      ib: () => kX,
      mb: () => XA,
      pb: () => HX,
      qb: () => OX,
      rb: () => UA,
      sb: () => iX
    });
    var FJ = {};
    ZJ.r(FJ), ZJ.d(FJ, {
      scaleBand: () => UJ.c,
      scaleDiverging: () => qe,
      scaleDivergingLog: () => je,
      scaleDivergingPow: () => he,
      scaleDivergingSqrt: () => De,
      scaleDivergingSymlog: () => Ye,
      scaleIdentity: () => ac,
      scaleImplicit: () => jZ.f,
      scaleLinear: () => Lc,
      scaleLog: () => UZ,
      scaleOrdinal: () => jZ.b,
      scalePoint: () => UJ.d,
      scalePow: () => nZ,
      scaleQuantile: () => SZ,
      scaleQuantize: () => IZ,
      scaleRadial: () => xZ,
      scaleSequential: () => ce,
      scaleSequentialLog: () => Ze,
      scaleSequentialPow: () => Ue,
      scaleSequentialQuantile: () => Xe,
      scaleSequentialSqrt: () => ee,
      scaleSequentialSymlog: () => Fe,
      scaleSqrt: () => GZ,
      scaleSymlog: () => qZ,
      scaleThreshold: () => MZ,
      scaleTime: () => tU,
      scaleUtc: () => oU,
      tickFormat: () => ic
    });
    var UJ = ZJ(5502);
    const eJ = Math.sqrt(50),
      XJ = Math.sqrt(10),
      AJ = Math.sqrt(2);

    function qJ(JJ, cJ, ZJ) {
      const FJ = (cJ - JJ) / Math.max(0, ZJ),
        UJ = Math.floor(Math.log10(FJ)),
        jJ = FJ / Math.pow(10, UJ),
        YJ = jJ >= eJ ? 10 : jJ >= XJ ? 5 : jJ >= AJ ? 2 : 1;
      let hJ, DJ, sJ;
      return UJ < 0 ? (sJ = Math.pow(10, -UJ) / YJ, hJ = Math.round(JJ * sJ), DJ = Math.round(cJ * sJ), hJ / sJ < JJ && ++hJ, DJ / sJ > cJ && --DJ, sJ = -sJ) : (sJ = Math.pow(10, UJ) * YJ, hJ = Math.round(JJ / sJ), DJ = Math.round(cJ / sJ), hJ * sJ < JJ && ++hJ, DJ * sJ > cJ && --DJ), DJ < hJ && .5 <= ZJ && ZJ < 2 ? qJ(JJ, cJ, 2 * ZJ) : [hJ, DJ, sJ]
    }

    function jJ(JJ, cJ, ZJ) {
      if (!((ZJ = +ZJ) > 0)) return [];
      if ((JJ = +JJ) === (cJ = +cJ)) return [JJ];
      const FJ = cJ < JJ,
        [UJ, eJ, XJ] = FJ ? qJ(cJ, JJ, ZJ) : qJ(JJ, cJ, ZJ);
      if (!(eJ >= UJ)) return [];
      const AJ = eJ - UJ + 1,
        jJ = new Array(AJ);
      if (FJ)
        if (XJ < 0)
          for (let qJ = 0; qJ < AJ; ++qJ) jJ[qJ] = (eJ - qJ) / -XJ;
        else
          for (let qJ = 0; qJ < AJ; ++qJ) jJ[qJ] = (eJ - qJ) * XJ;
      else if (XJ < 0)
        for (let qJ = 0; qJ < AJ; ++qJ) jJ[qJ] = (UJ + qJ) / -XJ;
      else
        for (let qJ = 0; qJ < AJ; ++qJ) jJ[qJ] = (UJ + qJ) * XJ;
      return jJ
    }

    function YJ(JJ, cJ, ZJ) {
      return qJ(JJ = +JJ, cJ = +cJ, ZJ = +ZJ)[2]
    }

    function hJ(JJ, cJ, ZJ) {
      ZJ = +ZJ;
      const FJ = (cJ = +cJ) < (JJ = +JJ),
        UJ = FJ ? YJ(cJ, JJ, ZJ) : YJ(JJ, cJ, ZJ);
      return (FJ ? -1 : 1) * (UJ < 0 ? 1 / -UJ : UJ)
    }

    function DJ(JJ, cJ) {
      return null == JJ || null == cJ ? NaN : JJ < cJ ? -1 : JJ > cJ ? 1 : JJ >= cJ ? 0 : NaN
    }

    function sJ(JJ, cJ) {
      return null == JJ || null == cJ ? NaN : cJ < JJ ? -1 : cJ > JJ ? 1 : cJ >= JJ ? 0 : NaN
    }

    function nJ(JJ) {
      let cJ, ZJ, FJ;

      function UJ(JJ, FJ) {
        let UJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          eJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : JJ.length;
        if (UJ < eJ) {
          if (0 !== cJ(FJ, FJ)) return eJ;
          do {
            const cJ = UJ + eJ >>> 1;
            ZJ(JJ[cJ], FJ) < 0 ? UJ = cJ + 1 : eJ = cJ
          } while (UJ < eJ)
        }
        return UJ
      }
      return 2 !== JJ.length ? (cJ = DJ, ZJ = (cJ, ZJ) => DJ(JJ(cJ), ZJ), FJ = (cJ, ZJ) => JJ(cJ) - ZJ) : (cJ = JJ === DJ || JJ === sJ ? JJ : GJ, ZJ = JJ, FJ = JJ), {
        left: UJ,
        center: function(JJ, cJ) {
          let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          const eJ = UJ(JJ, cJ, ZJ, (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : JJ.length) - 1);
          return eJ > ZJ && FJ(JJ[eJ - 1], cJ) > -FJ(JJ[eJ], cJ) ? eJ - 1 : eJ
        },
        right: function(JJ, FJ) {
          let UJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            eJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : JJ.length;
          if (UJ < eJ) {
            if (0 !== cJ(FJ, FJ)) return eJ;
            do {
              const cJ = UJ + eJ >>> 1;
              ZJ(JJ[cJ], FJ) <= 0 ? UJ = cJ + 1 : eJ = cJ
            } while (UJ < eJ)
          }
          return UJ
        }
      }
    }

    function GJ() {
      return 0
    }

    function fJ(JJ) {
      return null === JJ ? NaN : +JJ
    }
    const xJ = nJ(DJ),
      rJ = xJ.right,
      vJ = (xJ.left, nJ(fJ).center, rJ);

    function mJ(JJ, cJ, ZJ) {
      JJ.prototype = cJ.prototype = ZJ, ZJ.constructor = JJ
    }

    function QJ(JJ, cJ) {
      var ZJ = Object.create(JJ.prototype);
      for (var FJ in cJ) ZJ[FJ] = cJ[FJ];
      return ZJ
    }

    function EJ() {}
    var VJ = .7,
      KJ = 1 / VJ,
      yJ = "\\s*([+-]?\\d+)\\s*",
      SJ = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      IJ = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      MJ = /^#([0-9a-f]{3,8})$/,
      bJ = new RegExp(`^rgb\\(${yJ},${yJ},${yJ}\\)$`),
      wJ = new RegExp(`^rgb\\(${IJ},${IJ},${IJ}\\)$`),
      WJ = new RegExp(`^rgba\\(${yJ},${yJ},${yJ},${SJ}\\)$`),
      gJ = new RegExp(`^rgba\\(${IJ},${IJ},${IJ},${SJ}\\)$`),
      HJ = new RegExp(`^hsl\\(${SJ},${IJ},${IJ}\\)$`),
      PJ = new RegExp(`^hsla\\(${SJ},${IJ},${IJ},${SJ}\\)$`),
      kJ = {
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

    function pJ() {
      return this.rgb().formatHex()
    }

    function dJ() {
      return this.rgb().formatRgb()
    }

    function zJ(JJ) {
      var cJ, ZJ;
      return JJ = (JJ + "").trim().toLowerCase(), (cJ = MJ.exec(JJ)) ? (ZJ = cJ[1].length, cJ = parseInt(cJ[1], 16), 6 === ZJ ? NJ(cJ) : 3 === ZJ ? new CJ(cJ >> 8 & 15 | cJ >> 4 & 240, cJ >> 4 & 15 | 240 & cJ, (15 & cJ) << 4 | 15 & cJ, 1) : 8 === ZJ ? OJ(cJ >> 24 & 255, cJ >> 16 & 255, cJ >> 8 & 255, (255 & cJ) / 255) : 4 === ZJ ? OJ(cJ >> 12 & 15 | cJ >> 8 & 240, cJ >> 8 & 15 | cJ >> 4 & 240, cJ >> 4 & 15 | 240 & cJ, ((15 & cJ) << 4 | 15 & cJ) / 255) : null) : (cJ = bJ.exec(JJ)) ? new CJ(cJ[1], cJ[2], cJ[3], 1) : (cJ = wJ.exec(JJ)) ? new CJ(255 * cJ[1] / 100, 255 * cJ[2] / 100, 255 * cJ[3] / 100, 1) : (cJ = WJ.exec(JJ)) ? OJ(cJ[1], cJ[2], cJ[3], cJ[4]) : (cJ = gJ.exec(JJ)) ? OJ(255 * cJ[1] / 100, 255 * cJ[2] / 100, 255 * cJ[3] / 100, cJ[4]) : (cJ = HJ.exec(JJ)) ? BJ(cJ[1], cJ[2] / 100, cJ[3] / 100, 1) : (cJ = PJ.exec(JJ)) ? BJ(cJ[1], cJ[2] / 100, cJ[3] / 100, cJ[4]) : kJ.hasOwnProperty(JJ) ? NJ(kJ[JJ]) : "transparent" === JJ ? new CJ(NaN, NaN, NaN, 0) : null
    }

    function NJ(JJ) {
      return new CJ(JJ >> 16 & 255, JJ >> 8 & 255, 255 & JJ, 1)
    }

    function OJ(JJ, cJ, ZJ, FJ) {
      return FJ <= 0 && (JJ = cJ = ZJ = NaN), new CJ(JJ, cJ, ZJ, FJ)
    }

    function TJ(JJ, cJ, ZJ, FJ) {
      return 1 === arguments.length ? ((UJ = JJ) instanceof EJ || (UJ = zJ(UJ)), UJ ? new CJ((UJ = UJ.rgb()).r, UJ.g, UJ.b, UJ.opacity) : new CJ) : new CJ(JJ, cJ, ZJ, null == FJ ? 1 : FJ);
      var UJ
    }

    function CJ(JJ, cJ, ZJ, FJ) {
      this.r = +JJ, this.g = +cJ, this.b = +ZJ, this.opacity = +FJ
    }

    function uJ() {
      return `#${aJ(this.r)}${aJ(this.g)}${aJ(this.b)}`
    }

    function iJ() {
      const JJ = RJ(this.opacity);
      return `${1===JJ?"rgb(":"rgba("}${LJ(this.r)}, ${LJ(this.g)}, ${LJ(this.b)}${1===JJ?")":`, ${JJ})`}`
    }

    function RJ(JJ) {
      return isNaN(JJ) ? 1 : Math.max(0, Math.min(1, JJ))
    }

    function LJ(JJ) {
      return Math.max(0, Math.min(255, Math.round(JJ) || 0))
    }

    function aJ(JJ) {
      return ((JJ = LJ(JJ)) < 16 ? "0" : "") + JJ.toString(16)
    }

    function BJ(JJ, cJ, ZJ, FJ) {
      return FJ <= 0 ? JJ = cJ = ZJ = NaN : ZJ <= 0 || ZJ >= 1 ? JJ = cJ = NaN : cJ <= 0 && (JJ = NaN), new oJ(JJ, cJ, ZJ, FJ)
    }

    function tJ(JJ) {
      if (JJ instanceof oJ) return new oJ(JJ.h, JJ.s, JJ.l, JJ.opacity);
      if (JJ instanceof EJ || (JJ = zJ(JJ)), !JJ) return new oJ;
      if (JJ instanceof oJ) return JJ;
      var cJ = (JJ = JJ.rgb()).r / 255,
        ZJ = JJ.g / 255,
        FJ = JJ.b / 255,
        UJ = Math.min(cJ, ZJ, FJ),
        eJ = Math.max(cJ, ZJ, FJ),
        XJ = NaN,
        AJ = eJ - UJ,
        qJ = (eJ + UJ) / 2;
      return AJ ? (XJ = cJ === eJ ? (ZJ - FJ) / AJ + 6 * (ZJ < FJ) : ZJ === eJ ? (FJ - cJ) / AJ + 2 : (cJ - ZJ) / AJ + 4, AJ /= qJ < .5 ? eJ + UJ : 2 - eJ - UJ, XJ *= 60) : AJ = qJ > 0 && qJ < 1 ? 0 : XJ, new oJ(XJ, AJ, qJ, JJ.opacity)
    }

    function oJ(JJ, cJ, ZJ, FJ) {
      this.h = +JJ, this.s = +cJ, this.l = +ZJ, this.opacity = +FJ
    }

    function lJ(JJ) {
      return (JJ = (JJ || 0) % 360) < 0 ? JJ + 360 : JJ
    }

    function Jc(JJ) {
      return Math.max(0, Math.min(1, JJ || 0))
    }

    function cc(JJ, cJ, ZJ) {
      return 255 * (JJ < 60 ? cJ + (ZJ - cJ) * JJ / 60 : JJ < 180 ? ZJ : JJ < 240 ? cJ + (ZJ - cJ) * (240 - JJ) / 60 : cJ)
    }

    function Zc(JJ, cJ, ZJ, FJ, UJ) {
      var eJ = JJ * JJ,
        XJ = eJ * JJ;
      return ((1 - 3 * JJ + 3 * eJ - XJ) * cJ + (4 - 6 * eJ + 3 * XJ) * ZJ + (1 + 3 * JJ + 3 * eJ - 3 * XJ) * FJ + XJ * UJ) / 6
    }
    mJ(EJ, zJ, {
      copy(JJ) {
        return Object.assign(new this.constructor, this, JJ)
      },
      displayable() {
        return this.rgb().displayable()
      },
      hex: pJ,
      formatHex: pJ,
      formatHex8: function() {
        return this.rgb().formatHex8()
      },
      formatHsl: function() {
        return tJ(this).formatHsl()
      },
      formatRgb: dJ,
      toString: dJ
    }), mJ(CJ, TJ, QJ(EJ, {
      brighter(JJ) {
        return JJ = null == JJ ? KJ : Math.pow(KJ, JJ), new CJ(this.r * JJ, this.g * JJ, this.b * JJ, this.opacity)
      },
      darker(JJ) {
        return JJ = null == JJ ? VJ : Math.pow(VJ, JJ), new CJ(this.r * JJ, this.g * JJ, this.b * JJ, this.opacity)
      },
      rgb() {
        return this
      },
      clamp() {
        return new CJ(LJ(this.r), LJ(this.g), LJ(this.b), RJ(this.opacity))
      },
      displayable() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
      },
      hex: uJ,
      formatHex: uJ,
      formatHex8: function() {
        return `#${aJ(this.r)}${aJ(this.g)}${aJ(this.b)}${aJ(255*(isNaN(this.opacity)?1:this.opacity))}`
      },
      formatRgb: iJ,
      toString: iJ
    })), mJ(oJ, (function(JJ, cJ, ZJ, FJ) {
      return 1 === arguments.length ? tJ(JJ) : new oJ(JJ, cJ, ZJ, null == FJ ? 1 : FJ)
    }), QJ(EJ, {
      brighter(JJ) {
        return JJ = null == JJ ? KJ : Math.pow(KJ, JJ), new oJ(this.h, this.s, this.l * JJ, this.opacity)
      },
      darker(JJ) {
        return JJ = null == JJ ? VJ : Math.pow(VJ, JJ), new oJ(this.h, this.s, this.l * JJ, this.opacity)
      },
      rgb() {
        var JJ = this.h % 360 + 360 * (this.h < 0),
          cJ = isNaN(JJ) || isNaN(this.s) ? 0 : this.s,
          ZJ = this.l,
          FJ = ZJ + (ZJ < .5 ? ZJ : 1 - ZJ) * cJ,
          UJ = 2 * ZJ - FJ;
        return new CJ(cc(JJ >= 240 ? JJ - 240 : JJ + 120, UJ, FJ), cc(JJ, UJ, FJ), cc(JJ < 120 ? JJ + 240 : JJ - 120, UJ, FJ), this.opacity)
      },
      clamp() {
        return new oJ(lJ(this.h), Jc(this.s), Jc(this.l), RJ(this.opacity))
      },
      displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
      },
      formatHsl() {
        const JJ = RJ(this.opacity);
        return `${1===JJ?"hsl(":"hsla("}${lJ(this.h)}, ${100*Jc(this.s)}%, ${100*Jc(this.l)}%${1===JJ?")":`, ${JJ})`}`
      }
    }));
    const Fc = JJ => () => JJ;

    function Uc(JJ, cJ) {
      return function(ZJ) {
        return JJ + ZJ * cJ
      }
    }

    function ec(JJ) {
      return 1 === (JJ = +JJ) ? Xc : function(cJ, ZJ) {
        return ZJ - cJ ? function(JJ, cJ, ZJ) {
          return JJ = Math.pow(JJ, ZJ), cJ = Math.pow(cJ, ZJ) - JJ, ZJ = 1 / ZJ,
            function(FJ) {
              return Math.pow(JJ + FJ * cJ, ZJ)
            }
        }(cJ, ZJ, JJ) : Fc(isNaN(cJ) ? ZJ : cJ)
      }
    }

    function Xc(JJ, cJ) {
      var ZJ = cJ - JJ;
      return ZJ ? Uc(JJ, ZJ) : Fc(isNaN(JJ) ? cJ : JJ)
    }
    const Ac = function JJ(cJ) {
      var ZJ = ec(cJ);

      function FJ(JJ, cJ) {
        var FJ = ZJ((JJ = TJ(JJ)).r, (cJ = TJ(cJ)).r),
          UJ = ZJ(JJ.g, cJ.g),
          eJ = ZJ(JJ.b, cJ.b),
          XJ = Xc(JJ.opacity, cJ.opacity);
        return function(cJ) {
          return JJ.r = FJ(cJ), JJ.g = UJ(cJ), JJ.b = eJ(cJ), JJ.opacity = XJ(cJ), JJ + ""
        }
      }
      return FJ.gamma = JJ, FJ
    }(1);

    function qc(JJ) {
      return function(cJ) {
        var ZJ, FJ, UJ = cJ.length,
          eJ = new Array(UJ),
          XJ = new Array(UJ),
          AJ = new Array(UJ);
        for (ZJ = 0; ZJ < UJ; ++ZJ) FJ = TJ(cJ[ZJ]), eJ[ZJ] = FJ.r || 0, XJ[ZJ] = FJ.g || 0, AJ[ZJ] = FJ.b || 0;
        return eJ = JJ(eJ), XJ = JJ(XJ), AJ = JJ(AJ), FJ.opacity = 1,
          function(JJ) {
            return FJ.r = eJ(JJ), FJ.g = XJ(JJ), FJ.b = AJ(JJ), FJ + ""
          }
      }
    }
    qc((function(JJ) {
      var cJ = JJ.length - 1;
      return function(ZJ) {
        var FJ = ZJ <= 0 ? ZJ = 0 : ZJ >= 1 ? (ZJ = 1, cJ - 1) : Math.floor(ZJ * cJ),
          UJ = JJ[FJ],
          eJ = JJ[FJ + 1],
          XJ = FJ > 0 ? JJ[FJ - 1] : 2 * UJ - eJ,
          AJ = FJ < cJ - 1 ? JJ[FJ + 2] : 2 * eJ - UJ;
        return Zc((ZJ - FJ / cJ) * cJ, XJ, UJ, eJ, AJ)
      }
    })), qc((function(JJ) {
      var cJ = JJ.length;
      return function(ZJ) {
        var FJ = Math.floor(((ZJ %= 1) < 0 ? ++ZJ : ZJ) * cJ),
          UJ = JJ[(FJ + cJ - 1) % cJ],
          eJ = JJ[FJ % cJ],
          XJ = JJ[(FJ + 1) % cJ],
          AJ = JJ[(FJ + 2) % cJ];
        return Zc((ZJ - FJ / cJ) * cJ, UJ, eJ, XJ, AJ)
      }
    }));

    function jc(JJ, cJ) {
      var ZJ, FJ = cJ ? cJ.length : 0,
        UJ = JJ ? Math.min(FJ, JJ.length) : 0,
        eJ = new Array(UJ),
        XJ = new Array(FJ);
      for (ZJ = 0; ZJ < UJ; ++ZJ) eJ[ZJ] = xc(JJ[ZJ], cJ[ZJ]);
      for (; ZJ < FJ; ++ZJ) XJ[ZJ] = cJ[ZJ];
      return function(JJ) {
        for (ZJ = 0; ZJ < UJ; ++ZJ) XJ[ZJ] = eJ[ZJ](JJ);
        return XJ
      }
    }

    function Yc(JJ, cJ) {
      var ZJ = new Date;
      return JJ = +JJ, cJ = +cJ,
        function(FJ) {
          return ZJ.setTime(JJ * (1 - FJ) + cJ * FJ), ZJ
        }
    }

    function hc(JJ, cJ) {
      return JJ = +JJ, cJ = +cJ,
        function(ZJ) {
          return JJ * (1 - ZJ) + cJ * ZJ
        }
    }

    function Dc(JJ, cJ) {
      var ZJ, FJ = {},
        UJ = {};
      for (ZJ in null !== JJ && "object" === typeof JJ || (JJ = {}), null !== cJ && "object" === typeof cJ || (cJ = {}), cJ) ZJ in JJ ? FJ[ZJ] = xc(JJ[ZJ], cJ[ZJ]) : UJ[ZJ] = cJ[ZJ];
      return function(JJ) {
        for (ZJ in FJ) UJ[ZJ] = FJ[ZJ](JJ);
        return UJ
      }
    }
    var sc = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      nc = new RegExp(sc.source, "g");

    function Gc(JJ, cJ) {
      var ZJ, FJ, UJ, eJ = sc.lastIndex = nc.lastIndex = 0,
        XJ = -1,
        AJ = [],
        qJ = [];
      for (JJ += "", cJ += "";
        (ZJ = sc.exec(JJ)) && (FJ = nc.exec(cJ));)(UJ = FJ.index) > eJ && (UJ = cJ.slice(eJ, UJ), AJ[XJ] ? AJ[XJ] += UJ : AJ[++XJ] = UJ), (ZJ = ZJ[0]) === (FJ = FJ[0]) ? AJ[XJ] ? AJ[XJ] += FJ : AJ[++XJ] = FJ : (AJ[++XJ] = null, qJ.push({
        i: XJ,
        x: hc(ZJ, FJ)
      })), eJ = nc.lastIndex;
      return eJ < cJ.length && (UJ = cJ.slice(eJ), AJ[XJ] ? AJ[XJ] += UJ : AJ[++XJ] = UJ), AJ.length < 2 ? qJ[0] ? function(JJ) {
        return function(cJ) {
          return JJ(cJ) + ""
        }
      }(qJ[0].x) : function(JJ) {
        return function() {
          return JJ
        }
      }(cJ) : (cJ = qJ.length, function(JJ) {
        for (var ZJ, FJ = 0; FJ < cJ; ++FJ) AJ[(ZJ = qJ[FJ]).i] = ZJ.x(JJ);
        return AJ.join("")
      })
    }

    function fc(JJ, cJ) {
      cJ || (cJ = []);
      var ZJ, FJ = JJ ? Math.min(cJ.length, JJ.length) : 0,
        UJ = cJ.slice();
      return function(eJ) {
        for (ZJ = 0; ZJ < FJ; ++ZJ) UJ[ZJ] = JJ[ZJ] * (1 - eJ) + cJ[ZJ] * eJ;
        return UJ
      }
    }

    function xc(JJ, cJ) {
      var ZJ, FJ, UJ = typeof cJ;
      return null == cJ || "boolean" === UJ ? Fc(cJ) : ("number" === UJ ? hc : "string" === UJ ? (ZJ = zJ(cJ)) ? (cJ = ZJ, Ac) : Gc : cJ instanceof zJ ? Ac : cJ instanceof Date ? Yc : (FJ = cJ, !ArrayBuffer.isView(FJ) || FJ instanceof DataView ? Array.isArray(cJ) ? jc : "function" !== typeof cJ.valueOf && "function" !== typeof cJ.toString || isNaN(cJ) ? Dc : hc : fc))(JJ, cJ)
    }

    function rc(JJ, cJ) {
      return JJ = +JJ, cJ = +cJ,
        function(ZJ) {
          return Math.round(JJ * (1 - ZJ) + cJ * ZJ)
        }
    }

    function vc(JJ) {
      return +JJ
    }
    var mc = [0, 1];

    function Qc(JJ) {
      return JJ
    }

    function Ec(JJ, cJ) {
      return (cJ -= JJ = +JJ) ? function(ZJ) {
        return (ZJ - JJ) / cJ
      } : (ZJ = isNaN(cJ) ? NaN : .5, function() {
        return ZJ
      });
      var ZJ
    }

    function Vc(JJ, cJ, ZJ) {
      var FJ = JJ[0],
        UJ = JJ[1],
        eJ = cJ[0],
        XJ = cJ[1];
      return UJ < FJ ? (FJ = Ec(UJ, FJ), eJ = ZJ(XJ, eJ)) : (FJ = Ec(FJ, UJ), eJ = ZJ(eJ, XJ)),
        function(JJ) {
          return eJ(FJ(JJ))
        }
    }

    function Kc(JJ, cJ, ZJ) {
      var FJ = Math.min(JJ.length, cJ.length) - 1,
        UJ = new Array(FJ),
        eJ = new Array(FJ),
        XJ = -1;
      for (JJ[FJ] < JJ[0] && (JJ = JJ.slice().reverse(), cJ = cJ.slice().reverse()); ++XJ < FJ;) UJ[XJ] = Ec(JJ[XJ], JJ[XJ + 1]), eJ[XJ] = ZJ(cJ[XJ], cJ[XJ + 1]);
      return function(cJ) {
        var ZJ = vJ(JJ, cJ, 1, FJ) - 1;
        return eJ[ZJ](UJ[ZJ](cJ))
      }
    }

    function yc(JJ, cJ) {
      return cJ.domain(JJ.domain()).range(JJ.range()).interpolate(JJ.interpolate()).clamp(JJ.clamp()).unknown(JJ.unknown())
    }

    function Sc() {
      var JJ, cJ, ZJ, FJ, UJ, eJ, XJ = mc,
        AJ = mc,
        qJ = xc,
        jJ = Qc;

      function YJ() {
        var JJ = Math.min(XJ.length, AJ.length);
        return jJ !== Qc && (jJ = function(JJ, cJ) {
          var ZJ;
          return JJ > cJ && (ZJ = JJ, JJ = cJ, cJ = ZJ),
            function(ZJ) {
              return Math.max(JJ, Math.min(cJ, ZJ))
            }
        }(XJ[0], XJ[JJ - 1])), FJ = JJ > 2 ? Kc : Vc, UJ = eJ = null, hJ
      }

      function hJ(cJ) {
        return null == cJ || isNaN(cJ = +cJ) ? ZJ : (UJ || (UJ = FJ(XJ.map(JJ), AJ, qJ)))(JJ(jJ(cJ)))
      }
      return hJ.invert = function(ZJ) {
          return jJ(cJ((eJ || (eJ = FJ(AJ, XJ.map(JJ), hc)))(ZJ)))
        }, hJ.domain = function(JJ) {
          return arguments.length ? (XJ = Array.from(JJ, vc), YJ()) : XJ.slice()
        }, hJ.range = function(JJ) {
          return arguments.length ? (AJ = Array.from(JJ), YJ()) : AJ.slice()
        }, hJ.rangeRound = function(JJ) {
          return AJ = Array.from(JJ), qJ = rc, YJ()
        }, hJ.clamp = function(JJ) {
          return arguments.length ? (jJ = !!JJ || Qc, YJ()) : jJ !== Qc
        }, hJ.interpolate = function(JJ) {
          return arguments.length ? (qJ = JJ, YJ()) : qJ
        }, hJ.unknown = function(JJ) {
          return arguments.length ? (ZJ = JJ, hJ) : ZJ
        },
        function(ZJ, FJ) {
          return JJ = ZJ, cJ = FJ, YJ()
        }
    }

    function Ic() {
      return Sc()(Qc, Qc)
    }
    var Mc, bc = ZJ(5507),
      wc = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function Wc(JJ) {
      if (!(cJ = wc.exec(JJ))) throw new Error("invalid format: " + JJ);
      var cJ;
      return new gc({
        fill: cJ[1],
        align: cJ[2],
        sign: cJ[3],
        symbol: cJ[4],
        zero: cJ[5],
        width: cJ[6],
        comma: cJ[7],
        precision: cJ[8] && cJ[8].slice(1),
        trim: cJ[9],
        type: cJ[10]
      })
    }

    function gc(JJ) {
      this.fill = void 0 === JJ.fill ? " " : JJ.fill + "", this.align = void 0 === JJ.align ? ">" : JJ.align + "", this.sign = void 0 === JJ.sign ? "-" : JJ.sign + "", this.symbol = void 0 === JJ.symbol ? "" : JJ.symbol + "", this.zero = !!JJ.zero, this.width = void 0 === JJ.width ? void 0 : +JJ.width, this.comma = !!JJ.comma, this.precision = void 0 === JJ.precision ? void 0 : +JJ.precision, this.trim = !!JJ.trim, this.type = void 0 === JJ.type ? "" : JJ.type + ""
    }

    function Hc(JJ, cJ) {
      if (!isFinite(JJ) || 0 === JJ) return null;
      var ZJ = (JJ = cJ ? JJ.toExponential(cJ - 1) : JJ.toExponential()).indexOf("e"),
        FJ = JJ.slice(0, ZJ);
      return [FJ.length > 1 ? FJ[0] + FJ.slice(2) : FJ, +JJ.slice(ZJ + 1)]
    }

    function Pc(JJ) {
      return (JJ = Hc(Math.abs(JJ))) ? JJ[1] : NaN
    }

    function kc(JJ, cJ) {
      var ZJ = Hc(JJ, cJ);
      if (!ZJ) return JJ + "";
      var FJ = ZJ[0],
        UJ = ZJ[1];
      return UJ < 0 ? "0." + new Array(-UJ).join("0") + FJ : FJ.length > UJ + 1 ? FJ.slice(0, UJ + 1) + "." + FJ.slice(UJ + 1) : FJ + new Array(UJ - FJ.length + 2).join("0")
    }
    Wc.prototype = gc.prototype, gc.prototype.toString = function() {
      return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
    };
    const pc = {
      "%": (JJ, cJ) => (100 * JJ).toFixed(cJ),
      b: JJ => Math.round(JJ).toString(2),
      c: JJ => JJ + "",
      d: function(JJ) {
        return Math.abs(JJ = Math.round(JJ)) >= 1e21 ? JJ.toLocaleString("en").replace(/,/g, "") : JJ.toString(10)
      },
      e: (JJ, cJ) => JJ.toExponential(cJ),
      f: (JJ, cJ) => JJ.toFixed(cJ),
      g: (JJ, cJ) => JJ.toPrecision(cJ),
      o: JJ => Math.round(JJ).toString(8),
      p: (JJ, cJ) => kc(100 * JJ, cJ),
      r: kc,
      s: function(JJ, cJ) {
        var ZJ = Hc(JJ, cJ);
        if (!ZJ) return Mc = void 0, JJ.toPrecision(cJ);
        var FJ = ZJ[0],
          UJ = ZJ[1],
          eJ = UJ - (Mc = 3 * Math.max(-8, Math.min(8, Math.floor(UJ / 3)))) + 1,
          XJ = FJ.length;
        return eJ === XJ ? FJ : eJ > XJ ? FJ + new Array(eJ - XJ + 1).join("0") : eJ > 0 ? FJ.slice(0, eJ) + "." + FJ.slice(eJ) : "0." + new Array(1 - eJ).join("0") + Hc(JJ, Math.max(0, cJ + eJ - 1))[0]
      },
      X: JJ => Math.round(JJ).toString(16).toUpperCase(),
      x: JJ => Math.round(JJ).toString(16)
    };

    function dc(JJ) {
      return JJ
    }
    var zc, Nc, Oc, Tc = Array.prototype.map,
      Cc = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

    function uc(JJ) {
      var cJ, ZJ, FJ = void 0 === JJ.grouping || void 0 === JJ.thousands ? dc : (cJ = Tc.call(JJ.grouping, Number), ZJ = JJ.thousands + "", function(JJ, FJ) {
          for (var UJ = JJ.length, eJ = [], XJ = 0, AJ = cJ[0], qJ = 0; UJ > 0 && AJ > 0 && (qJ + AJ + 1 > FJ && (AJ = Math.max(1, FJ - qJ)), eJ.push(JJ.substring(UJ -= AJ, UJ + AJ)), !((qJ += AJ + 1) > FJ));) AJ = cJ[XJ = (XJ + 1) % cJ.length];
          return eJ.reverse().join(ZJ)
        }),
        UJ = void 0 === JJ.currency ? "" : JJ.currency[0] + "",
        eJ = void 0 === JJ.currency ? "" : JJ.currency[1] + "",
        XJ = void 0 === JJ.decimal ? "." : JJ.decimal + "",
        AJ = void 0 === JJ.numerals ? dc : function(JJ) {
          return function(cJ) {
            return cJ.replace(/[0-9]/g, (function(cJ) {
              return JJ[+cJ]
            }))
          }
        }(Tc.call(JJ.numerals, String)),
        qJ = void 0 === JJ.percent ? "%" : JJ.percent + "",
        jJ = void 0 === JJ.minus ? "\u2212" : JJ.minus + "",
        YJ = void 0 === JJ.nan ? "NaN" : JJ.nan + "";

      function hJ(JJ, cJ) {
        var ZJ = (JJ = Wc(JJ)).fill,
          hJ = JJ.align,
          DJ = JJ.sign,
          sJ = JJ.symbol,
          nJ = JJ.zero,
          GJ = JJ.width,
          fJ = JJ.comma,
          xJ = JJ.precision,
          rJ = JJ.trim,
          vJ = JJ.type;
        "n" === vJ ? (fJ = !0, vJ = "g") : pc[vJ] || (void 0 === xJ && (xJ = 12), rJ = !0, vJ = "g"), (nJ || "0" === ZJ && "=" === hJ) && (nJ = !0, ZJ = "0", hJ = "=");
        var mJ = (cJ && void 0 !== cJ.prefix ? cJ.prefix : "") + ("$" === sJ ? UJ : "#" === sJ && /[boxX]/.test(vJ) ? "0" + vJ.toLowerCase() : ""),
          QJ = ("$" === sJ ? eJ : /[%p]/.test(vJ) ? qJ : "") + (cJ && void 0 !== cJ.suffix ? cJ.suffix : ""),
          EJ = pc[vJ],
          VJ = /[defgprs%]/.test(vJ);

        function KJ(JJ) {
          var cJ, UJ, eJ, qJ = mJ,
            sJ = QJ;
          if ("c" === vJ) sJ = EJ(JJ) + sJ, JJ = "";
          else {
            var KJ = (JJ = +JJ) < 0 || 1 / JJ < 0;
            if (JJ = isNaN(JJ) ? YJ : EJ(Math.abs(JJ), xJ), rJ && (JJ = function(JJ) {
                JJ: for (var cJ, ZJ = JJ.length, FJ = 1, UJ = -1; FJ < ZJ; ++FJ) switch (JJ[FJ]) {
                  case ".":
                    UJ = cJ = FJ;
                    break;
                  case "0":
                    0 === UJ && (UJ = FJ), cJ = FJ;
                    break;
                  default:
                    if (!+JJ[FJ]) break JJ;
                    UJ > 0 && (UJ = 0)
                }
                return UJ > 0 ? JJ.slice(0, UJ) + JJ.slice(cJ + 1) : JJ
              }(JJ)), KJ && 0 === +JJ && "+" !== DJ && (KJ = !1), qJ = (KJ ? "(" === DJ ? DJ : jJ : "-" === DJ || "(" === DJ ? "" : DJ) + qJ, sJ = ("s" !== vJ || isNaN(JJ) || void 0 === Mc ? "" : Cc[8 + Mc / 3]) + sJ + (KJ && "(" === DJ ? ")" : ""), VJ)
              for (cJ = -1, UJ = JJ.length; ++cJ < UJ;)
                if (48 > (eJ = JJ.charCodeAt(cJ)) || eJ > 57) {
                  sJ = (46 === eJ ? XJ + JJ.slice(cJ + 1) : JJ.slice(cJ)) + sJ, JJ = JJ.slice(0, cJ);
                  break
                }
          }
          fJ && !nJ && (JJ = FJ(JJ, 1 / 0));
          var yJ = qJ.length + JJ.length + sJ.length,
            SJ = yJ < GJ ? new Array(GJ - yJ + 1).join(ZJ) : "";
          switch (fJ && nJ && (JJ = FJ(SJ + JJ, SJ.length ? GJ - sJ.length : 1 / 0), SJ = ""), hJ) {
            case "<":
              JJ = qJ + JJ + sJ + SJ;
              break;
            case "=":
              JJ = qJ + SJ + JJ + sJ;
              break;
            case "^":
              JJ = SJ.slice(0, yJ = SJ.length >> 1) + qJ + JJ + sJ + SJ.slice(yJ);
              break;
            default:
              JJ = SJ + qJ + JJ + sJ
          }
          return AJ(JJ)
        }
        return xJ = void 0 === xJ ? 6 : /[gprs]/.test(vJ) ? Math.max(1, Math.min(21, xJ)) : Math.max(0, Math.min(20, xJ)), KJ.toString = function() {
          return JJ + ""
        }, KJ
      }
      return {
        format: hJ,
        formatPrefix: function(JJ, cJ) {
          var ZJ = 3 * Math.max(-8, Math.min(8, Math.floor(Pc(cJ) / 3))),
            FJ = Math.pow(10, -ZJ),
            UJ = hJ(((JJ = Wc(JJ)).type = "f", JJ), {
              suffix: Cc[8 + ZJ / 3]
            });
          return function(JJ) {
            return UJ(FJ * JJ)
          }
        }
      }
    }

    function ic(JJ, cJ, ZJ, FJ) {
      var UJ, eJ = hJ(JJ, cJ, ZJ);
      switch ((FJ = Wc(null == FJ ? ",f" : FJ)).type) {
        case "s":
          var XJ = Math.max(Math.abs(JJ), Math.abs(cJ));
          return null != FJ.precision || isNaN(UJ = function(JJ, cJ) {
            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Pc(cJ) / 3))) - Pc(Math.abs(JJ)))
          }(eJ, XJ)) || (FJ.precision = UJ), Oc(FJ, XJ);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != FJ.precision || isNaN(UJ = function(JJ, cJ) {
            return JJ = Math.abs(JJ), cJ = Math.abs(cJ) - JJ, Math.max(0, Pc(cJ) - Pc(JJ)) + 1
          }(eJ, Math.max(Math.abs(JJ), Math.abs(cJ)))) || (FJ.precision = UJ - ("e" === FJ.type));
          break;
        case "f":
        case "%":
          null != FJ.precision || isNaN(UJ = function(JJ) {
            return Math.max(0, -Pc(Math.abs(JJ)))
          }(eJ)) || (FJ.precision = UJ - 2 * ("%" === FJ.type))
      }
      return Nc(FJ)
    }

    function Rc(JJ) {
      var cJ = JJ.domain;
      return JJ.ticks = function(JJ) {
        var ZJ = cJ();
        return jJ(ZJ[0], ZJ[ZJ.length - 1], null == JJ ? 10 : JJ)
      }, JJ.tickFormat = function(JJ, ZJ) {
        var FJ = cJ();
        return ic(FJ[0], FJ[FJ.length - 1], null == JJ ? 10 : JJ, ZJ)
      }, JJ.nice = function(ZJ) {
        null == ZJ && (ZJ = 10);
        var FJ, UJ, eJ = cJ(),
          XJ = 0,
          AJ = eJ.length - 1,
          qJ = eJ[XJ],
          jJ = eJ[AJ],
          hJ = 10;
        for (jJ < qJ && (UJ = qJ, qJ = jJ, jJ = UJ, UJ = XJ, XJ = AJ, AJ = UJ); hJ-- > 0;) {
          if ((UJ = YJ(qJ, jJ, ZJ)) === FJ) return eJ[XJ] = qJ, eJ[AJ] = jJ, cJ(eJ);
          if (UJ > 0) qJ = Math.floor(qJ / UJ) * UJ, jJ = Math.ceil(jJ / UJ) * UJ;
          else {
            if (!(UJ < 0)) break;
            qJ = Math.ceil(qJ * UJ) / UJ, jJ = Math.floor(jJ * UJ) / UJ
          }
          FJ = UJ
        }
        return JJ
      }, JJ
    }

    function Lc() {
      var JJ = Ic();
      return JJ.copy = function() {
        return yc(JJ, Lc())
      }, bc.g.apply(JJ, arguments), Rc(JJ)
    }

    function ac(JJ) {
      var cJ;

      function ZJ(JJ) {
        return null == JJ || isNaN(JJ = +JJ) ? cJ : JJ
      }
      return ZJ.invert = ZJ, ZJ.domain = ZJ.range = function(cJ) {
        return arguments.length ? (JJ = Array.from(cJ, vc), ZJ) : JJ.slice()
      }, ZJ.unknown = function(JJ) {
        return arguments.length ? (cJ = JJ, ZJ) : cJ
      }, ZJ.copy = function() {
        return ac(JJ).unknown(cJ)
      }, JJ = arguments.length ? Array.from(JJ, vc) : [0, 1], Rc(ZJ)
    }

    function Bc(JJ, cJ) {
      var ZJ, FJ = 0,
        UJ = (JJ = JJ.slice()).length - 1,
        eJ = JJ[FJ],
        XJ = JJ[UJ];
      return XJ < eJ && (ZJ = FJ, FJ = UJ, UJ = ZJ, ZJ = eJ, eJ = XJ, XJ = ZJ), JJ[FJ] = cJ.floor(eJ), JJ[UJ] = cJ.ceil(XJ), JJ
    }

    function tc(JJ) {
      return Math.log(JJ)
    }

    function oc(JJ) {
      return Math.exp(JJ)
    }

    function lc(JJ) {
      return -Math.log(-JJ)
    }

    function JZ(JJ) {
      return -Math.exp(-JJ)
    }

    function cZ(JJ) {
      return isFinite(JJ) ? +("1e" + JJ) : JJ < 0 ? 0 : JJ
    }

    function ZZ(JJ) {
      return (cJ, ZJ) => -JJ(-cJ, ZJ)
    }

    function FZ(JJ) {
      const cJ = JJ(tc, oc),
        ZJ = cJ.domain;
      let FJ, UJ, eJ = 10;

      function XJ() {
        return FJ = function(JJ) {
          return JJ === Math.E ? Math.log : 10 === JJ && Math.log10 || 2 === JJ && Math.log2 || (JJ = Math.log(JJ), cJ => Math.log(cJ) / JJ)
        }(eJ), UJ = function(JJ) {
          return 10 === JJ ? cZ : JJ === Math.E ? Math.exp : cJ => Math.pow(JJ, cJ)
        }(eJ), ZJ()[0] < 0 ? (FJ = ZZ(FJ), UJ = ZZ(UJ), JJ(lc, JZ)) : JJ(tc, oc), cJ
      }
      return cJ.base = function(JJ) {
        return arguments.length ? (eJ = +JJ, XJ()) : eJ
      }, cJ.domain = function(JJ) {
        return arguments.length ? (ZJ(JJ), XJ()) : ZJ()
      }, cJ.ticks = JJ => {
        const cJ = ZJ();
        let XJ = cJ[0],
          AJ = cJ[cJ.length - 1];
        const qJ = AJ < XJ;
        qJ && ([XJ, AJ] = [AJ, XJ]);
        let YJ, hJ, DJ = FJ(XJ),
          sJ = FJ(AJ);
        const nJ = null == JJ ? 10 : +JJ;
        let GJ = [];
        if (!(eJ % 1) && sJ - DJ < nJ) {
          if (DJ = Math.floor(DJ), sJ = Math.ceil(sJ), XJ > 0) {
            for (; DJ <= sJ; ++DJ)
              for (YJ = 1; YJ < eJ; ++YJ)
                if (hJ = DJ < 0 ? YJ / UJ(-DJ) : YJ * UJ(DJ), !(hJ < XJ)) {
                  if (hJ > AJ) break;
                  GJ.push(hJ)
                }
          } else
            for (; DJ <= sJ; ++DJ)
              for (YJ = eJ - 1; YJ >= 1; --YJ)
                if (hJ = DJ > 0 ? YJ / UJ(-DJ) : YJ * UJ(DJ), !(hJ < XJ)) {
                  if (hJ > AJ) break;
                  GJ.push(hJ)
                } 2 * GJ.length < nJ && (GJ = jJ(XJ, AJ, nJ))
        } else GJ = jJ(DJ, sJ, Math.min(sJ - DJ, nJ)).map(UJ);
        return qJ ? GJ.reverse() : GJ
      }, cJ.tickFormat = (JJ, ZJ) => {
        if (null == JJ && (JJ = 10), null == ZJ && (ZJ = 10 === eJ ? "s" : ","), "function" !== typeof ZJ && (eJ % 1 || null != (ZJ = Wc(ZJ)).precision || (ZJ.trim = !0), ZJ = Nc(ZJ)), JJ === 1 / 0) return ZJ;
        const XJ = Math.max(1, eJ * JJ / cJ.ticks().length);
        return JJ => {
          let cJ = JJ / UJ(Math.round(FJ(JJ)));
          return cJ * eJ < eJ - .5 && (cJ *= eJ), cJ <= XJ ? ZJ(JJ) : ""
        }
      }, cJ.nice = () => ZJ(Bc(ZJ(), {
        floor: JJ => UJ(Math.floor(FJ(JJ))),
        ceil: JJ => UJ(Math.ceil(FJ(JJ)))
      })), cJ
    }

    function UZ() {
      const JJ = FZ(Sc()).domain([1, 10]);
      return JJ.copy = () => yc(JJ, UZ()).base(JJ.base()), bc.g.apply(JJ, arguments), JJ
    }

    function eZ(JJ) {
      return function(cJ) {
        return Math.sign(cJ) * Math.log1p(Math.abs(cJ / JJ))
      }
    }

    function XZ(JJ) {
      return function(cJ) {
        return Math.sign(cJ) * Math.expm1(Math.abs(cJ)) * JJ
      }
    }

    function AZ(JJ) {
      var cJ = 1,
        ZJ = JJ(eZ(cJ), XZ(cJ));
      return ZJ.constant = function(ZJ) {
        return arguments.length ? JJ(eZ(cJ = +ZJ), XZ(cJ)) : cJ
      }, Rc(ZJ)
    }

    function qZ() {
      var JJ = AZ(Sc());
      return JJ.copy = function() {
        return yc(JJ, qZ()).constant(JJ.constant())
      }, bc.g.apply(JJ, arguments)
    }
    zc = uc({
      thousands: ",",
      grouping: [3],
      currency: ["$", ""]
    }), Nc = zc.format, Oc = zc.formatPrefix;
    var jZ = ZJ(5509);

    function YZ(JJ) {
      return function(cJ) {
        return cJ < 0 ? -Math.pow(-cJ, JJ) : Math.pow(cJ, JJ)
      }
    }

    function hZ(JJ) {
      return JJ < 0 ? -Math.sqrt(-JJ) : Math.sqrt(JJ)
    }

    function DZ(JJ) {
      return JJ < 0 ? -JJ * JJ : JJ * JJ
    }

    function sZ(JJ) {
      var cJ = JJ(Qc, Qc),
        ZJ = 1;
      return cJ.exponent = function(cJ) {
        return arguments.length ? 1 === (ZJ = +cJ) ? JJ(Qc, Qc) : .5 === ZJ ? JJ(hZ, DZ) : JJ(YZ(ZJ), YZ(1 / ZJ)) : ZJ
      }, Rc(cJ)
    }

    function nZ() {
      var JJ = sZ(Sc());
      return JJ.copy = function() {
        return yc(JJ, nZ()).exponent(JJ.exponent())
      }, bc.g.apply(JJ, arguments), JJ
    }

    function GZ() {
      return nZ.apply(null, arguments).exponent(.5)
    }

    function fZ(JJ) {
      return Math.sign(JJ) * JJ * JJ
    }

    function xZ() {
      var JJ, cJ = Ic(),
        ZJ = [0, 1],
        FJ = !1;

      function UJ(ZJ) {
        var UJ = function(JJ) {
          return Math.sign(JJ) * Math.sqrt(Math.abs(JJ))
        }(cJ(ZJ));
        return isNaN(UJ) ? JJ : FJ ? Math.round(UJ) : UJ
      }
      return UJ.invert = function(JJ) {
        return cJ.invert(fZ(JJ))
      }, UJ.domain = function(JJ) {
        return arguments.length ? (cJ.domain(JJ), UJ) : cJ.domain()
      }, UJ.range = function(JJ) {
        return arguments.length ? (cJ.range((ZJ = Array.from(JJ, vc)).map(fZ)), UJ) : ZJ.slice()
      }, UJ.rangeRound = function(JJ) {
        return UJ.range(JJ).round(!0)
      }, UJ.round = function(JJ) {
        return arguments.length ? (FJ = !!JJ, UJ) : FJ
      }, UJ.clamp = function(JJ) {
        return arguments.length ? (cJ.clamp(JJ), UJ) : cJ.clamp()
      }, UJ.unknown = function(cJ) {
        return arguments.length ? (JJ = cJ, UJ) : JJ
      }, UJ.copy = function() {
        return xZ(cJ.domain(), ZJ).round(FJ).clamp(cJ.clamp()).unknown(JJ)
      }, bc.g.apply(UJ, arguments), Rc(UJ)
    }

    function rZ(JJ, cJ) {
      let ZJ;
      if (void 0 === cJ)
        for (const FJ of JJ) null != FJ && (ZJ < FJ || void 0 === ZJ && FJ >= FJ) && (ZJ = FJ);
      else {
        let FJ = -1;
        for (let UJ of JJ) null != (UJ = cJ(UJ, ++FJ, JJ)) && (ZJ < UJ || void 0 === ZJ && UJ >= UJ) && (ZJ = UJ)
      }
      return ZJ
    }

    function vZ(JJ, cJ) {
      let ZJ;
      if (void 0 === cJ)
        for (const FJ of JJ) null != FJ && (ZJ > FJ || void 0 === ZJ && FJ >= FJ) && (ZJ = FJ);
      else {
        let FJ = -1;
        for (let UJ of JJ) null != (UJ = cJ(UJ, ++FJ, JJ)) && (ZJ > UJ || void 0 === ZJ && UJ >= UJ) && (ZJ = UJ)
      }
      return ZJ
    }

    function mZ() {
      let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DJ;
      if (JJ === DJ) return QZ;
      if ("function" !== typeof JJ) throw new TypeError("compare is not a function");
      return (cJ, ZJ) => {
        const FJ = JJ(cJ, ZJ);
        return FJ || 0 === FJ ? FJ : (0 === JJ(ZJ, ZJ)) - (0 === JJ(cJ, cJ))
      }
    }

    function QZ(JJ, cJ) {
      return (null == JJ || !(JJ >= JJ)) - (null == cJ || !(cJ >= cJ)) || (JJ < cJ ? -1 : JJ > cJ ? 1 : 0)
    }

    function EZ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0,
        UJ = arguments.length > 4 ? arguments[4] : void 0;
      if (cJ = Math.floor(cJ), ZJ = Math.floor(Math.max(0, ZJ)), FJ = Math.floor(Math.min(JJ.length - 1, FJ)), !(ZJ <= cJ && cJ <= FJ)) return JJ;
      for (UJ = void 0 === UJ ? QZ : mZ(UJ); FJ > ZJ;) {
        if (FJ - ZJ > 600) {
          const eJ = FJ - ZJ + 1,
            XJ = cJ - ZJ + 1,
            AJ = Math.log(eJ),
            qJ = .5 * Math.exp(2 * AJ / 3),
            jJ = .5 * Math.sqrt(AJ * qJ * (eJ - qJ) / eJ) * (XJ - eJ / 2 < 0 ? -1 : 1);
          EZ(JJ, cJ, Math.max(ZJ, Math.floor(cJ - XJ * qJ / eJ + jJ)), Math.min(FJ, Math.floor(cJ + (eJ - XJ) * qJ / eJ + jJ)), UJ)
        }
        const eJ = JJ[cJ];
        let XJ = ZJ,
          AJ = FJ;
        for (VZ(JJ, ZJ, cJ), UJ(JJ[FJ], eJ) > 0 && VZ(JJ, ZJ, FJ); XJ < AJ;) {
          for (VZ(JJ, XJ, AJ), ++XJ, --AJ; UJ(JJ[XJ], eJ) < 0;) ++XJ;
          for (; UJ(JJ[AJ], eJ) > 0;) --AJ
        }
        0 === UJ(JJ[ZJ], eJ) ? VZ(JJ, ZJ, AJ) : (++AJ, VZ(JJ, AJ, FJ)), AJ <= cJ && (ZJ = AJ + 1), cJ <= AJ && (FJ = AJ - 1)
      }
      return JJ
    }

    function VZ(JJ, cJ, ZJ) {
      const FJ = JJ[cJ];
      JJ[cJ] = JJ[ZJ], JJ[ZJ] = FJ
    }

    function KZ(JJ, cJ, ZJ) {
      if (JJ = Float64Array.from(function*(JJ, cJ) {
          if (void 0 === cJ)
            for (let ZJ of JJ) null != ZJ && (ZJ = +ZJ) >= ZJ && (yield ZJ);
          else {
            let ZJ = -1;
            for (let FJ of JJ) null != (FJ = cJ(FJ, ++ZJ, JJ)) && (FJ = +FJ) >= FJ && (yield FJ)
          }
        }(JJ, ZJ)), (FJ = JJ.length) && !isNaN(cJ = +cJ)) {
        if (cJ <= 0 || FJ < 2) return vZ(JJ);
        if (cJ >= 1) return rZ(JJ);
        var FJ, UJ = (FJ - 1) * cJ,
          eJ = Math.floor(UJ),
          XJ = rZ(EZ(JJ, eJ).subarray(0, eJ + 1));
        return XJ + (vZ(JJ.subarray(eJ + 1)) - XJ) * (UJ - eJ)
      }
    }

    function yZ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : fJ;
      if ((FJ = JJ.length) && !isNaN(cJ = +cJ)) {
        if (cJ <= 0 || FJ < 2) return +ZJ(JJ[0], 0, JJ);
        if (cJ >= 1) return +ZJ(JJ[FJ - 1], FJ - 1, JJ);
        var FJ, UJ = (FJ - 1) * cJ,
          eJ = Math.floor(UJ),
          XJ = +ZJ(JJ[eJ], eJ, JJ);
        return XJ + (+ZJ(JJ[eJ + 1], eJ + 1, JJ) - XJ) * (UJ - eJ)
      }
    }

    function SZ() {
      var JJ, cJ = [],
        ZJ = [],
        FJ = [];

      function UJ() {
        var JJ = 0,
          UJ = Math.max(1, ZJ.length);
        for (FJ = new Array(UJ - 1); ++JJ < UJ;) FJ[JJ - 1] = yZ(cJ, JJ / UJ);
        return eJ
      }

      function eJ(cJ) {
        return null == cJ || isNaN(cJ = +cJ) ? JJ : ZJ[vJ(FJ, cJ)]
      }
      return eJ.invertExtent = function(JJ) {
        var UJ = ZJ.indexOf(JJ);
        return UJ < 0 ? [NaN, NaN] : [UJ > 0 ? FJ[UJ - 1] : cJ[0], UJ < FJ.length ? FJ[UJ] : cJ[cJ.length - 1]]
      }, eJ.domain = function(JJ) {
        if (!arguments.length) return cJ.slice();
        cJ = [];
        for (let ZJ of JJ) null == ZJ || isNaN(ZJ = +ZJ) || cJ.push(ZJ);
        return cJ.sort(DJ), UJ()
      }, eJ.range = function(JJ) {
        return arguments.length ? (ZJ = Array.from(JJ), UJ()) : ZJ.slice()
      }, eJ.unknown = function(cJ) {
        return arguments.length ? (JJ = cJ, eJ) : JJ
      }, eJ.quantiles = function() {
        return FJ.slice()
      }, eJ.copy = function() {
        return SZ().domain(cJ).range(ZJ).unknown(JJ)
      }, bc.g.apply(eJ, arguments)
    }

    function IZ() {
      var JJ, cJ = 0,
        ZJ = 1,
        FJ = 1,
        UJ = [.5],
        eJ = [0, 1];

      function XJ(cJ) {
        return null != cJ && cJ <= cJ ? eJ[vJ(UJ, cJ, 0, FJ)] : JJ
      }

      function AJ() {
        var JJ = -1;
        for (UJ = new Array(FJ); ++JJ < FJ;) UJ[JJ] = ((JJ + 1) * ZJ - (JJ - FJ) * cJ) / (FJ + 1);
        return XJ
      }
      return XJ.domain = function(JJ) {
        return arguments.length ? ([cJ, ZJ] = JJ, cJ = +cJ, ZJ = +ZJ, AJ()) : [cJ, ZJ]
      }, XJ.range = function(JJ) {
        return arguments.length ? (FJ = (eJ = Array.from(JJ)).length - 1, AJ()) : eJ.slice()
      }, XJ.invertExtent = function(JJ) {
        var XJ = eJ.indexOf(JJ);
        return XJ < 0 ? [NaN, NaN] : XJ < 1 ? [cJ, UJ[0]] : XJ >= FJ ? [UJ[FJ - 1], ZJ] : [UJ[XJ - 1], UJ[XJ]]
      }, XJ.unknown = function(cJ) {
        return arguments.length ? (JJ = cJ, XJ) : XJ
      }, XJ.thresholds = function() {
        return UJ.slice()
      }, XJ.copy = function() {
        return IZ().domain([cJ, ZJ]).range(eJ).unknown(JJ)
      }, bc.g.apply(Rc(XJ), arguments)
    }

    function MZ() {
      var JJ, cJ = [.5],
        ZJ = [0, 1],
        FJ = 1;

      function UJ(UJ) {
        return null != UJ && UJ <= UJ ? ZJ[vJ(cJ, UJ, 0, FJ)] : JJ
      }
      return UJ.domain = function(JJ) {
        return arguments.length ? (cJ = Array.from(JJ), FJ = Math.min(cJ.length, ZJ.length - 1), UJ) : cJ.slice()
      }, UJ.range = function(JJ) {
        return arguments.length ? (ZJ = Array.from(JJ), FJ = Math.min(cJ.length, ZJ.length - 1), UJ) : ZJ.slice()
      }, UJ.invertExtent = function(JJ) {
        var FJ = ZJ.indexOf(JJ);
        return [cJ[FJ - 1], cJ[FJ]]
      }, UJ.unknown = function(cJ) {
        return arguments.length ? (JJ = cJ, UJ) : JJ
      }, UJ.copy = function() {
        return MZ().domain(cJ).range(ZJ).unknown(JJ)
      }, bc.g.apply(UJ, arguments)
    }
    const bZ = 1e3,
      wZ = 6e4,
      WZ = 36e5,
      gZ = 864e5,
      HZ = 6048e5,
      PZ = 2592e6,
      kZ = 31536e6,
      pZ = new Date,
      dZ = new Date;

    function zZ(JJ, cJ, ZJ, FJ) {
      function UJ(cJ) {
        return JJ(cJ = 0 === arguments.length ? new Date : new Date(+cJ)), cJ
      }
      return UJ.floor = cJ => (JJ(cJ = new Date(+cJ)), cJ), UJ.ceil = ZJ => (JJ(ZJ = new Date(ZJ - 1)), cJ(ZJ, 1), JJ(ZJ), ZJ), UJ.round = JJ => {
        const cJ = UJ(JJ),
          ZJ = UJ.ceil(JJ);
        return JJ - cJ < ZJ - JJ ? cJ : ZJ
      }, UJ.offset = (JJ, ZJ) => (cJ(JJ = new Date(+JJ), null == ZJ ? 1 : Math.floor(ZJ)), JJ), UJ.range = (ZJ, FJ, eJ) => {
        const XJ = [];
        if (ZJ = UJ.ceil(ZJ), eJ = null == eJ ? 1 : Math.floor(eJ), !(ZJ < FJ) || !(eJ > 0)) return XJ;
        let AJ;
        do {
          XJ.push(AJ = new Date(+ZJ)), cJ(ZJ, eJ), JJ(ZJ)
        } while (AJ < ZJ && ZJ < FJ);
        return XJ
      }, UJ.filter = ZJ => zZ((cJ => {
        if (cJ >= cJ)
          for (; JJ(cJ), !ZJ(cJ);) cJ.setTime(cJ - 1)
      }), ((JJ, FJ) => {
        if (JJ >= JJ)
          if (FJ < 0)
            for (; ++FJ <= 0;)
              for (; cJ(JJ, -1), !ZJ(JJ););
          else
            for (; --FJ >= 0;)
              for (; cJ(JJ, 1), !ZJ(JJ););
      })), ZJ && (UJ.count = (cJ, FJ) => (pZ.setTime(+cJ), dZ.setTime(+FJ), JJ(pZ), JJ(dZ), Math.floor(ZJ(pZ, dZ))), UJ.every = JJ => (JJ = Math.floor(JJ), isFinite(JJ) && JJ > 0 ? JJ > 1 ? UJ.filter(FJ ? cJ => FJ(cJ) % JJ === 0 : cJ => UJ.count(0, cJ) % JJ === 0) : UJ : null)), UJ
    }
    const NZ = zZ((() => {}), ((JJ, cJ) => {
      JJ.setTime(+JJ + cJ)
    }), ((JJ, cJ) => cJ - JJ));
    NZ.every = JJ => (JJ = Math.floor(JJ), isFinite(JJ) && JJ > 0 ? JJ > 1 ? zZ((cJ => {
      cJ.setTime(Math.floor(cJ / JJ) * JJ)
    }), ((cJ, ZJ) => {
      cJ.setTime(+cJ + ZJ * JJ)
    }), ((cJ, ZJ) => (ZJ - cJ) / JJ)) : NZ : null);
    NZ.range;
    const OZ = zZ((JJ => {
        JJ.setTime(JJ - JJ.getMilliseconds())
      }), ((JJ, cJ) => {
        JJ.setTime(+JJ + cJ * bZ)
      }), ((JJ, cJ) => (cJ - JJ) / bZ), (JJ => JJ.getUTCSeconds())),
      TZ = (OZ.range, zZ((JJ => {
        JJ.setTime(JJ - JJ.getMilliseconds() - JJ.getSeconds() * bZ)
      }), ((JJ, cJ) => {
        JJ.setTime(+JJ + cJ * wZ)
      }), ((JJ, cJ) => (cJ - JJ) / wZ), (JJ => JJ.getMinutes()))),
      CZ = (TZ.range, zZ((JJ => {
        JJ.setUTCSeconds(0, 0)
      }), ((JJ, cJ) => {
        JJ.setTime(+JJ + cJ * wZ)
      }), ((JJ, cJ) => (cJ - JJ) / wZ), (JJ => JJ.getUTCMinutes()))),
      uZ = (CZ.range, zZ((JJ => {
        JJ.setTime(JJ - JJ.getMilliseconds() - JJ.getSeconds() * bZ - JJ.getMinutes() * wZ)
      }), ((JJ, cJ) => {
        JJ.setTime(+JJ + cJ * WZ)
      }), ((JJ, cJ) => (cJ - JJ) / WZ), (JJ => JJ.getHours()))),
      iZ = (uZ.range, zZ((JJ => {
        JJ.setUTCMinutes(0, 0, 0)
      }), ((JJ, cJ) => {
        JJ.setTime(+JJ + cJ * WZ)
      }), ((JJ, cJ) => (cJ - JJ) / WZ), (JJ => JJ.getUTCHours()))),
      RZ = (iZ.range, zZ((JJ => JJ.setHours(0, 0, 0, 0)), ((JJ, cJ) => JJ.setDate(JJ.getDate() + cJ)), ((JJ, cJ) => (cJ - JJ - (cJ.getTimezoneOffset() - JJ.getTimezoneOffset()) * wZ) / gZ), (JJ => JJ.getDate() - 1))),
      LZ = (RZ.range, zZ((JJ => {
        JJ.setUTCHours(0, 0, 0, 0)
      }), ((JJ, cJ) => {
        JJ.setUTCDate(JJ.getUTCDate() + cJ)
      }), ((JJ, cJ) => (cJ - JJ) / gZ), (JJ => JJ.getUTCDate() - 1))),
      aZ = (LZ.range, zZ((JJ => {
        JJ.setUTCHours(0, 0, 0, 0)
      }), ((JJ, cJ) => {
        JJ.setUTCDate(JJ.getUTCDate() + cJ)
      }), ((JJ, cJ) => (cJ - JJ) / gZ), (JJ => Math.floor(JJ / gZ))));
    aZ.range;

    function BZ(JJ) {
      return zZ((cJ => {
        cJ.setDate(cJ.getDate() - (cJ.getDay() + 7 - JJ) % 7), cJ.setHours(0, 0, 0, 0)
      }), ((JJ, cJ) => {
        JJ.setDate(JJ.getDate() + 7 * cJ)
      }), ((JJ, cJ) => (cJ - JJ - (cJ.getTimezoneOffset() - JJ.getTimezoneOffset()) * wZ) / HZ))
    }
    const tZ = BZ(0),
      oZ = BZ(1),
      lZ = BZ(2),
      JF = BZ(3),
      cF = BZ(4),
      ZF = BZ(5),
      FF = BZ(6);
    tZ.range, oZ.range, lZ.range, JF.range, cF.range, ZF.range, FF.range;

    function UF(JJ) {
      return zZ((cJ => {
        cJ.setUTCDate(cJ.getUTCDate() - (cJ.getUTCDay() + 7 - JJ) % 7), cJ.setUTCHours(0, 0, 0, 0)
      }), ((JJ, cJ) => {
        JJ.setUTCDate(JJ.getUTCDate() + 7 * cJ)
      }), ((JJ, cJ) => (cJ - JJ) / HZ))
    }
    const eF = UF(0),
      XF = UF(1),
      AF = UF(2),
      qF = UF(3),
      jF = UF(4),
      YF = UF(5),
      hF = UF(6),
      DF = (eF.range, XF.range, AF.range, qF.range, jF.range, YF.range, hF.range, zZ((JJ => {
        JJ.setDate(1), JJ.setHours(0, 0, 0, 0)
      }), ((JJ, cJ) => {
        JJ.setMonth(JJ.getMonth() + cJ)
      }), ((JJ, cJ) => cJ.getMonth() - JJ.getMonth() + 12 * (cJ.getFullYear() - JJ.getFullYear())), (JJ => JJ.getMonth()))),
      sF = (DF.range, zZ((JJ => {
        JJ.setUTCDate(1), JJ.setUTCHours(0, 0, 0, 0)
      }), ((JJ, cJ) => {
        JJ.setUTCMonth(JJ.getUTCMonth() + cJ)
      }), ((JJ, cJ) => cJ.getUTCMonth() - JJ.getUTCMonth() + 12 * (cJ.getUTCFullYear() - JJ.getUTCFullYear())), (JJ => JJ.getUTCMonth()))),
      nF = (sF.range, zZ((JJ => {
        JJ.setMonth(0, 1), JJ.setHours(0, 0, 0, 0)
      }), ((JJ, cJ) => {
        JJ.setFullYear(JJ.getFullYear() + cJ)
      }), ((JJ, cJ) => cJ.getFullYear() - JJ.getFullYear()), (JJ => JJ.getFullYear())));
    nF.every = JJ => isFinite(JJ = Math.floor(JJ)) && JJ > 0 ? zZ((cJ => {
      cJ.setFullYear(Math.floor(cJ.getFullYear() / JJ) * JJ), cJ.setMonth(0, 1), cJ.setHours(0, 0, 0, 0)
    }), ((cJ, ZJ) => {
      cJ.setFullYear(cJ.getFullYear() + ZJ * JJ)
    })) : null;
    nF.range;
    const GF = zZ((JJ => {
      JJ.setUTCMonth(0, 1), JJ.setUTCHours(0, 0, 0, 0)
    }), ((JJ, cJ) => {
      JJ.setUTCFullYear(JJ.getUTCFullYear() + cJ)
    }), ((JJ, cJ) => cJ.getUTCFullYear() - JJ.getUTCFullYear()), (JJ => JJ.getUTCFullYear()));
    GF.every = JJ => isFinite(JJ = Math.floor(JJ)) && JJ > 0 ? zZ((cJ => {
      cJ.setUTCFullYear(Math.floor(cJ.getUTCFullYear() / JJ) * JJ), cJ.setUTCMonth(0, 1), cJ.setUTCHours(0, 0, 0, 0)
    }), ((cJ, ZJ) => {
      cJ.setUTCFullYear(cJ.getUTCFullYear() + ZJ * JJ)
    })) : null;
    GF.range;

    function fF(JJ, cJ, ZJ, FJ, UJ, eJ) {
      const XJ = [
        [OZ, 1, bZ],
        [OZ, 5, 5e3],
        [OZ, 15, 15e3],
        [OZ, 30, 3e4],
        [eJ, 1, wZ],
        [eJ, 5, 3e5],
        [eJ, 15, 9e5],
        [eJ, 30, 18e5],
        [UJ, 1, WZ],
        [UJ, 3, 108e5],
        [UJ, 6, 216e5],
        [UJ, 12, 432e5],
        [FJ, 1, gZ],
        [FJ, 2, 1728e5],
        [ZJ, 1, HZ],
        [cJ, 1, PZ],
        [cJ, 3, 7776e6],
        [JJ, 1, kZ]
      ];

      function AJ(cJ, ZJ, FJ) {
        const UJ = Math.abs(ZJ - cJ) / FJ,
          eJ = nJ((JJ => {
            let [, , cJ] = JJ;
            return cJ
          })).right(XJ, UJ);
        if (eJ === XJ.length) return JJ.every(hJ(cJ / kZ, ZJ / kZ, FJ));
        if (0 === eJ) return NZ.every(Math.max(hJ(cJ, ZJ, FJ), 1));
        const [AJ, qJ] = XJ[UJ / XJ[eJ - 1][2] < XJ[eJ][2] / UJ ? eJ - 1 : eJ];
        return AJ.every(qJ)
      }
      return [function(JJ, cJ, ZJ) {
        const FJ = cJ < JJ;
        FJ && ([JJ, cJ] = [cJ, JJ]);
        const UJ = ZJ && "function" === typeof ZJ.range ? ZJ : AJ(JJ, cJ, ZJ),
          eJ = UJ ? UJ.range(JJ, +cJ + 1) : [];
        return FJ ? eJ.reverse() : eJ
      }, AJ]
    }
    const [xF, rF] = fF(GF, sF, eF, aZ, iZ, CZ), [vF, mF] = fF(nF, DF, tZ, RZ, uZ, TZ);

    function QF(JJ) {
      if (0 <= JJ.y && JJ.y < 100) {
        var cJ = new Date(-1, JJ.m, JJ.d, JJ.H, JJ.M, JJ.S, JJ.L);
        return cJ.setFullYear(JJ.y), cJ
      }
      return new Date(JJ.y, JJ.m, JJ.d, JJ.H, JJ.M, JJ.S, JJ.L)
    }

    function EF(JJ) {
      if (0 <= JJ.y && JJ.y < 100) {
        var cJ = new Date(Date.UTC(-1, JJ.m, JJ.d, JJ.H, JJ.M, JJ.S, JJ.L));
        return cJ.setUTCFullYear(JJ.y), cJ
      }
      return new Date(Date.UTC(JJ.y, JJ.m, JJ.d, JJ.H, JJ.M, JJ.S, JJ.L))
    }

    function VF(JJ, cJ, ZJ) {
      return {
        y: JJ,
        m: cJ,
        d: ZJ,
        H: 0,
        M: 0,
        S: 0,
        L: 0
      }
    }
    var KF, yF, SF, IF = {
        "-": "",
        _: " ",
        0: "0"
      },
      MF = /^\s*\d+/,
      bF = /^%/,
      wF = /[\\^$*+?|[\]().{}]/g;

    function WF(JJ, cJ, ZJ) {
      var FJ = JJ < 0 ? "-" : "",
        UJ = (FJ ? -JJ : JJ) + "",
        eJ = UJ.length;
      return FJ + (eJ < ZJ ? new Array(ZJ - eJ + 1).join(cJ) + UJ : UJ)
    }

    function gF(JJ) {
      return JJ.replace(wF, "\\$&")
    }

    function HF(JJ) {
      return new RegExp("^(?:" + JJ.map(gF).join("|") + ")", "i")
    }

    function PF(JJ) {
      return new Map(JJ.map(((JJ, cJ) => [JJ.toLowerCase(), cJ])))
    }

    function kF(JJ, cJ, ZJ) {
      var FJ = MF.exec(cJ.slice(ZJ, ZJ + 1));
      return FJ ? (JJ.w = +FJ[0], ZJ + FJ[0].length) : -1
    }

    function pF(JJ, cJ, ZJ) {
      var FJ = MF.exec(cJ.slice(ZJ, ZJ + 1));
      return FJ ? (JJ.u = +FJ[0], ZJ + FJ[0].length) : -1
    }

    function dF(JJ, cJ, ZJ) {
      var FJ = MF.exec(cJ.slice(ZJ, ZJ + 2));
      return FJ ? (JJ.U = +FJ[0], ZJ + FJ[0].length) : -1
    }

    function zF(JJ, cJ, ZJ) {
      var FJ = MF.exec(cJ.slice(ZJ, ZJ + 2));
      return FJ ? (JJ.V = +FJ[0], ZJ + FJ[0].length) : -1
    }

    function NF(JJ, cJ, ZJ) {
      var FJ = MF.exec(cJ.slice(ZJ, ZJ + 2));
      return FJ ? (JJ.W = +FJ[0], ZJ + FJ[0].length) : -1
    }

    function OF(JJ, cJ, ZJ) {
      var FJ = MF.exec(cJ.slice(ZJ, ZJ + 4));
      return FJ ? (JJ.y = +FJ[0], ZJ + FJ[0].length) : -1
    }

    function TF(JJ, cJ, ZJ) {
      var FJ = MF.exec(cJ.slice(ZJ, ZJ + 2));
      return FJ ? (JJ.y = +FJ[0] + (+FJ[0] > 68 ? 1900 : 2e3), ZJ + FJ[0].length) : -1
    }

    function CF(JJ, cJ, ZJ) {
      var FJ = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(cJ.slice(ZJ, ZJ + 6));
      return FJ ? (JJ.Z = FJ[1] ? 0 : -(FJ[2] + (FJ[3] || "00")), ZJ + FJ[0].length) : -1
    }

    function uF(JJ, cJ, ZJ) {
      var FJ = MF.exec(cJ.slice(ZJ, ZJ + 1));
      return FJ ? (JJ.q = 3 * FJ[0] - 3, ZJ + FJ[0].length) : -1
    }

    function iF(JJ, cJ, ZJ) {
      var FJ = MF.exec(cJ.slice(ZJ, ZJ + 2));
      return FJ ? (JJ.m = FJ[0] - 1, ZJ + FJ[0].length) : -1
    }

    function RF(JJ, cJ, ZJ) {
      var FJ = MF.exec(cJ.slice(ZJ, ZJ + 2));
      return FJ ? (JJ.d = +FJ[0], ZJ + FJ[0].length) : -1
    }

    function LF(JJ, cJ, ZJ) {
      var FJ = MF.exec(cJ.slice(ZJ, ZJ + 3));
      return FJ ? (JJ.m = 0, JJ.d = +FJ[0], ZJ + FJ[0].length) : -1
    }

    function aF(JJ, cJ, ZJ) {
      var FJ = MF.exec(cJ.slice(ZJ, ZJ + 2));
      return FJ ? (JJ.H = +FJ[0], ZJ + FJ[0].length) : -1
    }

    function BF(JJ, cJ, ZJ) {
      var FJ = MF.exec(cJ.slice(ZJ, ZJ + 2));
      return FJ ? (JJ.M = +FJ[0], ZJ + FJ[0].length) : -1
    }

    function tF(JJ, cJ, ZJ) {
      var FJ = MF.exec(cJ.slice(ZJ, ZJ + 2));
      return FJ ? (JJ.S = +FJ[0], ZJ + FJ[0].length) : -1
    }

    function oF(JJ, cJ, ZJ) {
      var FJ = MF.exec(cJ.slice(ZJ, ZJ + 3));
      return FJ ? (JJ.L = +FJ[0], ZJ + FJ[0].length) : -1
    }

    function lF(JJ, cJ, ZJ) {
      var FJ = MF.exec(cJ.slice(ZJ, ZJ + 6));
      return FJ ? (JJ.L = Math.floor(FJ[0] / 1e3), ZJ + FJ[0].length) : -1
    }

    function JU(JJ, cJ, ZJ) {
      var FJ = bF.exec(cJ.slice(ZJ, ZJ + 1));
      return FJ ? ZJ + FJ[0].length : -1
    }

    function cU(JJ, cJ, ZJ) {
      var FJ = MF.exec(cJ.slice(ZJ));
      return FJ ? (JJ.Q = +FJ[0], ZJ + FJ[0].length) : -1
    }

    function ZU(JJ, cJ, ZJ) {
      var FJ = MF.exec(cJ.slice(ZJ));
      return FJ ? (JJ.s = +FJ[0], ZJ + FJ[0].length) : -1
    }

    function FU(JJ, cJ) {
      return WF(JJ.getDate(), cJ, 2)
    }

    function UU(JJ, cJ) {
      return WF(JJ.getHours(), cJ, 2)
    }

    function eU(JJ, cJ) {
      return WF(JJ.getHours() % 12 || 12, cJ, 2)
    }

    function XU(JJ, cJ) {
      return WF(1 + RZ.count(nF(JJ), JJ), cJ, 3)
    }

    function AU(JJ, cJ) {
      return WF(JJ.getMilliseconds(), cJ, 3)
    }

    function qU(JJ, cJ) {
      return AU(JJ, cJ) + "000"
    }

    function jU(JJ, cJ) {
      return WF(JJ.getMonth() + 1, cJ, 2)
    }

    function YU(JJ, cJ) {
      return WF(JJ.getMinutes(), cJ, 2)
    }

    function hU(JJ, cJ) {
      return WF(JJ.getSeconds(), cJ, 2)
    }

    function DU(JJ) {
      var cJ = JJ.getDay();
      return 0 === cJ ? 7 : cJ
    }

    function sU(JJ, cJ) {
      return WF(tZ.count(nF(JJ) - 1, JJ), cJ, 2)
    }

    function nU(JJ) {
      var cJ = JJ.getDay();
      return cJ >= 4 || 0 === cJ ? cF(JJ) : cF.ceil(JJ)
    }

    function GU(JJ, cJ) {
      return JJ = nU(JJ), WF(cF.count(nF(JJ), JJ) + (4 === nF(JJ).getDay()), cJ, 2)
    }

    function fU(JJ) {
      return JJ.getDay()
    }

    function xU(JJ, cJ) {
      return WF(oZ.count(nF(JJ) - 1, JJ), cJ, 2)
    }

    function rU(JJ, cJ) {
      return WF(JJ.getFullYear() % 100, cJ, 2)
    }

    function vU(JJ, cJ) {
      return WF((JJ = nU(JJ)).getFullYear() % 100, cJ, 2)
    }

    function mU(JJ, cJ) {
      return WF(JJ.getFullYear() % 1e4, cJ, 4)
    }

    function QU(JJ, cJ) {
      var ZJ = JJ.getDay();
      return WF((JJ = ZJ >= 4 || 0 === ZJ ? cF(JJ) : cF.ceil(JJ)).getFullYear() % 1e4, cJ, 4)
    }

    function EU(JJ) {
      var cJ = JJ.getTimezoneOffset();
      return (cJ > 0 ? "-" : (cJ *= -1, "+")) + WF(cJ / 60 | 0, "0", 2) + WF(cJ % 60, "0", 2)
    }

    function VU(JJ, cJ) {
      return WF(JJ.getUTCDate(), cJ, 2)
    }

    function KU(JJ, cJ) {
      return WF(JJ.getUTCHours(), cJ, 2)
    }

    function yU(JJ, cJ) {
      return WF(JJ.getUTCHours() % 12 || 12, cJ, 2)
    }

    function SU(JJ, cJ) {
      return WF(1 + LZ.count(GF(JJ), JJ), cJ, 3)
    }

    function IU(JJ, cJ) {
      return WF(JJ.getUTCMilliseconds(), cJ, 3)
    }

    function MU(JJ, cJ) {
      return IU(JJ, cJ) + "000"
    }

    function bU(JJ, cJ) {
      return WF(JJ.getUTCMonth() + 1, cJ, 2)
    }

    function wU(JJ, cJ) {
      return WF(JJ.getUTCMinutes(), cJ, 2)
    }

    function WU(JJ, cJ) {
      return WF(JJ.getUTCSeconds(), cJ, 2)
    }

    function gU(JJ) {
      var cJ = JJ.getUTCDay();
      return 0 === cJ ? 7 : cJ
    }

    function HU(JJ, cJ) {
      return WF(eF.count(GF(JJ) - 1, JJ), cJ, 2)
    }

    function PU(JJ) {
      var cJ = JJ.getUTCDay();
      return cJ >= 4 || 0 === cJ ? jF(JJ) : jF.ceil(JJ)
    }

    function kU(JJ, cJ) {
      return JJ = PU(JJ), WF(jF.count(GF(JJ), JJ) + (4 === GF(JJ).getUTCDay()), cJ, 2)
    }

    function pU(JJ) {
      return JJ.getUTCDay()
    }

    function dU(JJ, cJ) {
      return WF(XF.count(GF(JJ) - 1, JJ), cJ, 2)
    }

    function zU(JJ, cJ) {
      return WF(JJ.getUTCFullYear() % 100, cJ, 2)
    }

    function NU(JJ, cJ) {
      return WF((JJ = PU(JJ)).getUTCFullYear() % 100, cJ, 2)
    }

    function OU(JJ, cJ) {
      return WF(JJ.getUTCFullYear() % 1e4, cJ, 4)
    }

    function TU(JJ, cJ) {
      var ZJ = JJ.getUTCDay();
      return WF((JJ = ZJ >= 4 || 0 === ZJ ? jF(JJ) : jF.ceil(JJ)).getUTCFullYear() % 1e4, cJ, 4)
    }

    function CU() {
      return "+0000"
    }

    function uU() {
      return "%"
    }

    function iU(JJ) {
      return +JJ
    }

    function RU(JJ) {
      return Math.floor(+JJ / 1e3)
    }

    function LU(JJ) {
      return new Date(JJ)
    }

    function aU(JJ) {
      return JJ instanceof Date ? +JJ : +new Date(+JJ)
    }

    function BU(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ) {
      var YJ = Ic(),
        hJ = YJ.invert,
        DJ = YJ.domain,
        sJ = jJ(".%L"),
        nJ = jJ(":%S"),
        GJ = jJ("%I:%M"),
        fJ = jJ("%I %p"),
        xJ = jJ("%a %d"),
        rJ = jJ("%b %d"),
        vJ = jJ("%B"),
        mJ = jJ("%Y");

      function QJ(JJ) {
        return (qJ(JJ) < JJ ? sJ : AJ(JJ) < JJ ? nJ : XJ(JJ) < JJ ? GJ : eJ(JJ) < JJ ? fJ : FJ(JJ) < JJ ? UJ(JJ) < JJ ? xJ : rJ : ZJ(JJ) < JJ ? vJ : mJ)(JJ)
      }
      return YJ.invert = function(JJ) {
        return new Date(hJ(JJ))
      }, YJ.domain = function(JJ) {
        return arguments.length ? DJ(Array.from(JJ, aU)) : DJ().map(LU)
      }, YJ.ticks = function(cJ) {
        var ZJ = DJ();
        return JJ(ZJ[0], ZJ[ZJ.length - 1], null == cJ ? 10 : cJ)
      }, YJ.tickFormat = function(JJ, cJ) {
        return null == cJ ? QJ : jJ(cJ)
      }, YJ.nice = function(JJ) {
        var ZJ = DJ();
        return JJ && "function" === typeof JJ.range || (JJ = cJ(ZJ[0], ZJ[ZJ.length - 1], null == JJ ? 10 : JJ)), JJ ? DJ(Bc(ZJ, JJ)) : YJ
      }, YJ.copy = function() {
        return yc(YJ, BU(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ))
      }, YJ
    }

    function tU() {
      return bc.g.apply(BU(vF, mF, nF, DF, tZ, RZ, uZ, TZ, OZ, yF).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
    }

    function oU() {
      return bc.g.apply(BU(xF, rF, GF, sF, eF, LZ, iZ, CZ, OZ, SF).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
    }

    function lU() {
      var JJ, cJ, ZJ, FJ, UJ, eJ = 0,
        XJ = 1,
        AJ = Qc,
        qJ = !1;

      function jJ(cJ) {
        return null == cJ || isNaN(cJ = +cJ) ? UJ : AJ(0 === ZJ ? .5 : (cJ = (FJ(cJ) - JJ) * ZJ, qJ ? Math.max(0, Math.min(1, cJ)) : cJ))
      }

      function YJ(JJ) {
        return function(cJ) {
          var ZJ, FJ;
          return arguments.length ? ([ZJ, FJ] = cJ, AJ = JJ(ZJ, FJ), jJ) : [AJ(0), AJ(1)]
        }
      }
      return jJ.domain = function(UJ) {
          return arguments.length ? ([eJ, XJ] = UJ, JJ = FJ(eJ = +eJ), cJ = FJ(XJ = +XJ), ZJ = JJ === cJ ? 0 : 1 / (cJ - JJ), jJ) : [eJ, XJ]
        }, jJ.clamp = function(JJ) {
          return arguments.length ? (qJ = !!JJ, jJ) : qJ
        }, jJ.interpolator = function(JJ) {
          return arguments.length ? (AJ = JJ, jJ) : AJ
        }, jJ.range = YJ(xc), jJ.rangeRound = YJ(rc), jJ.unknown = function(JJ) {
          return arguments.length ? (UJ = JJ, jJ) : UJ
        },
        function(UJ) {
          return FJ = UJ, JJ = UJ(eJ), cJ = UJ(XJ), ZJ = JJ === cJ ? 0 : 1 / (cJ - JJ), jJ
        }
    }

    function Je(JJ, cJ) {
      return cJ.domain(JJ.domain()).interpolator(JJ.interpolator()).clamp(JJ.clamp()).unknown(JJ.unknown())
    }

    function ce() {
      var JJ = Rc(lU()(Qc));
      return JJ.copy = function() {
        return Je(JJ, ce())
      }, bc.c.apply(JJ, arguments)
    }

    function Ze() {
      var JJ = FZ(lU()).domain([1, 10]);
      return JJ.copy = function() {
        return Je(JJ, Ze()).base(JJ.base())
      }, bc.c.apply(JJ, arguments)
    }

    function Fe() {
      var JJ = AZ(lU());
      return JJ.copy = function() {
        return Je(JJ, Fe()).constant(JJ.constant())
      }, bc.c.apply(JJ, arguments)
    }

    function Ue() {
      var JJ = sZ(lU());
      return JJ.copy = function() {
        return Je(JJ, Ue()).exponent(JJ.exponent())
      }, bc.c.apply(JJ, arguments)
    }

    function ee() {
      return Ue.apply(null, arguments).exponent(.5)
    }

    function Xe() {
      var JJ = [],
        cJ = Qc;

      function ZJ(ZJ) {
        if (null != ZJ && !isNaN(ZJ = +ZJ)) return cJ((vJ(JJ, ZJ, 1) - 1) / (JJ.length - 1))
      }
      return ZJ.domain = function(cJ) {
        if (!arguments.length) return JJ.slice();
        JJ = [];
        for (let ZJ of cJ) null == ZJ || isNaN(ZJ = +ZJ) || JJ.push(ZJ);
        return JJ.sort(DJ), ZJ
      }, ZJ.interpolator = function(JJ) {
        return arguments.length ? (cJ = JJ, ZJ) : cJ
      }, ZJ.range = function() {
        return JJ.map(((ZJ, FJ) => cJ(FJ / (JJ.length - 1))))
      }, ZJ.quantiles = function(cJ) {
        return Array.from({
          length: cJ + 1
        }, ((ZJ, FJ) => KZ(JJ, FJ / cJ)))
      }, ZJ.copy = function() {
        return Xe(cJ).domain(JJ)
      }, bc.c.apply(ZJ, arguments)
    }

    function Ae() {
      var JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ = 0,
        qJ = .5,
        jJ = 1,
        YJ = 1,
        hJ = Qc,
        DJ = !1;

      function sJ(JJ) {
        return isNaN(JJ = +JJ) ? XJ : (JJ = .5 + ((JJ = +eJ(JJ)) - cJ) * (YJ * JJ < YJ * cJ ? FJ : UJ), hJ(DJ ? Math.max(0, Math.min(1, JJ)) : JJ))
      }

      function nJ(JJ) {
        return function(cJ) {
          var ZJ, FJ, UJ;
          return arguments.length ? ([ZJ, FJ, UJ] = cJ, hJ = function(JJ, cJ) {
            void 0 === cJ && (cJ = JJ, JJ = xc);
            for (var ZJ = 0, FJ = cJ.length - 1, UJ = cJ[0], eJ = new Array(FJ < 0 ? 0 : FJ); ZJ < FJ;) eJ[ZJ] = JJ(UJ, UJ = cJ[++ZJ]);
            return function(JJ) {
              var cJ = Math.max(0, Math.min(FJ - 1, Math.floor(JJ *= FJ)));
              return eJ[cJ](JJ - cJ)
            }
          }(JJ, [ZJ, FJ, UJ]), sJ) : [hJ(0), hJ(.5), hJ(1)]
        }
      }
      return sJ.domain = function(XJ) {
          return arguments.length ? ([AJ, qJ, jJ] = XJ, JJ = eJ(AJ = +AJ), cJ = eJ(qJ = +qJ), ZJ = eJ(jJ = +jJ), FJ = JJ === cJ ? 0 : .5 / (cJ - JJ), UJ = cJ === ZJ ? 0 : .5 / (ZJ - cJ), YJ = cJ < JJ ? -1 : 1, sJ) : [AJ, qJ, jJ]
        }, sJ.clamp = function(JJ) {
          return arguments.length ? (DJ = !!JJ, sJ) : DJ
        }, sJ.interpolator = function(JJ) {
          return arguments.length ? (hJ = JJ, sJ) : hJ
        }, sJ.range = nJ(xc), sJ.rangeRound = nJ(rc), sJ.unknown = function(JJ) {
          return arguments.length ? (XJ = JJ, sJ) : XJ
        },
        function(XJ) {
          return eJ = XJ, JJ = XJ(AJ), cJ = XJ(qJ), ZJ = XJ(jJ), FJ = JJ === cJ ? 0 : .5 / (cJ - JJ), UJ = cJ === ZJ ? 0 : .5 / (ZJ - cJ), YJ = cJ < JJ ? -1 : 1, sJ
        }
    }

    function qe() {
      var JJ = Rc(Ae()(Qc));
      return JJ.copy = function() {
        return Je(JJ, qe())
      }, bc.c.apply(JJ, arguments)
    }

    function je() {
      var JJ = FZ(Ae()).domain([.1, 1, 10]);
      return JJ.copy = function() {
        return Je(JJ, je()).base(JJ.base())
      }, bc.c.apply(JJ, arguments)
    }

    function Ye() {
      var JJ = AZ(Ae());
      return JJ.copy = function() {
        return Je(JJ, Ye()).constant(JJ.constant())
      }, bc.c.apply(JJ, arguments)
    }

    function he() {
      var JJ = sZ(Ae());
      return JJ.copy = function() {
        return Je(JJ, he()).exponent(JJ.exponent())
      }, bc.c.apply(JJ, arguments)
    }

    function De() {
      return he.apply(null, arguments).exponent(.5)
    }

    function se(JJ, cJ) {
      if ((UJ = JJ.length) > 1)
        for (var ZJ, FJ, UJ, eJ = 1, XJ = JJ[cJ[0]], AJ = XJ.length; eJ < UJ; ++eJ)
          for (FJ = XJ, XJ = JJ[cJ[eJ]], ZJ = 0; ZJ < AJ; ++ZJ) XJ[ZJ][1] += XJ[ZJ][0] = isNaN(FJ[ZJ][1]) ? FJ[ZJ][0] : FJ[ZJ][1]
    }! function(JJ) {
      KF = function(JJ) {
        var cJ = JJ.dateTime,
          ZJ = JJ.date,
          FJ = JJ.time,
          UJ = JJ.periods,
          eJ = JJ.days,
          XJ = JJ.shortDays,
          AJ = JJ.months,
          qJ = JJ.shortMonths,
          jJ = HF(UJ),
          YJ = PF(UJ),
          hJ = HF(eJ),
          DJ = PF(eJ),
          sJ = HF(XJ),
          nJ = PF(XJ),
          GJ = HF(AJ),
          fJ = PF(AJ),
          xJ = HF(qJ),
          rJ = PF(qJ),
          vJ = {
            a: function(JJ) {
              return XJ[JJ.getDay()]
            },
            A: function(JJ) {
              return eJ[JJ.getDay()]
            },
            b: function(JJ) {
              return qJ[JJ.getMonth()]
            },
            B: function(JJ) {
              return AJ[JJ.getMonth()]
            },
            c: null,
            d: FU,
            e: FU,
            f: qU,
            g: vU,
            G: QU,
            H: UU,
            I: eU,
            j: XU,
            L: AU,
            m: jU,
            M: YU,
            p: function(JJ) {
              return UJ[+(JJ.getHours() >= 12)]
            },
            q: function(JJ) {
              return 1 + ~~(JJ.getMonth() / 3)
            },
            Q: iU,
            s: RU,
            S: hU,
            u: DU,
            U: sU,
            V: GU,
            w: fU,
            W: xU,
            x: null,
            X: null,
            y: rU,
            Y: mU,
            Z: EU,
            "%": uU
          },
          mJ = {
            a: function(JJ) {
              return XJ[JJ.getUTCDay()]
            },
            A: function(JJ) {
              return eJ[JJ.getUTCDay()]
            },
            b: function(JJ) {
              return qJ[JJ.getUTCMonth()]
            },
            B: function(JJ) {
              return AJ[JJ.getUTCMonth()]
            },
            c: null,
            d: VU,
            e: VU,
            f: MU,
            g: NU,
            G: TU,
            H: KU,
            I: yU,
            j: SU,
            L: IU,
            m: bU,
            M: wU,
            p: function(JJ) {
              return UJ[+(JJ.getUTCHours() >= 12)]
            },
            q: function(JJ) {
              return 1 + ~~(JJ.getUTCMonth() / 3)
            },
            Q: iU,
            s: RU,
            S: WU,
            u: gU,
            U: HU,
            V: kU,
            w: pU,
            W: dU,
            x: null,
            X: null,
            y: zU,
            Y: OU,
            Z: CU,
            "%": uU
          },
          QJ = {
            a: function(JJ, cJ, ZJ) {
              var FJ = sJ.exec(cJ.slice(ZJ));
              return FJ ? (JJ.w = nJ.get(FJ[0].toLowerCase()), ZJ + FJ[0].length) : -1
            },
            A: function(JJ, cJ, ZJ) {
              var FJ = hJ.exec(cJ.slice(ZJ));
              return FJ ? (JJ.w = DJ.get(FJ[0].toLowerCase()), ZJ + FJ[0].length) : -1
            },
            b: function(JJ, cJ, ZJ) {
              var FJ = xJ.exec(cJ.slice(ZJ));
              return FJ ? (JJ.m = rJ.get(FJ[0].toLowerCase()), ZJ + FJ[0].length) : -1
            },
            B: function(JJ, cJ, ZJ) {
              var FJ = GJ.exec(cJ.slice(ZJ));
              return FJ ? (JJ.m = fJ.get(FJ[0].toLowerCase()), ZJ + FJ[0].length) : -1
            },
            c: function(JJ, ZJ, FJ) {
              return KJ(JJ, cJ, ZJ, FJ)
            },
            d: RF,
            e: RF,
            f: lF,
            g: TF,
            G: OF,
            H: aF,
            I: aF,
            j: LF,
            L: oF,
            m: iF,
            M: BF,
            p: function(JJ, cJ, ZJ) {
              var FJ = jJ.exec(cJ.slice(ZJ));
              return FJ ? (JJ.p = YJ.get(FJ[0].toLowerCase()), ZJ + FJ[0].length) : -1
            },
            q: uF,
            Q: cU,
            s: ZU,
            S: tF,
            u: pF,
            U: dF,
            V: zF,
            w: kF,
            W: NF,
            x: function(JJ, cJ, FJ) {
              return KJ(JJ, ZJ, cJ, FJ)
            },
            X: function(JJ, cJ, ZJ) {
              return KJ(JJ, FJ, cJ, ZJ)
            },
            y: TF,
            Y: OF,
            Z: CF,
            "%": JU
          };

        function EJ(JJ, cJ) {
          return function(ZJ) {
            var FJ, UJ, eJ, XJ = [],
              AJ = -1,
              qJ = 0,
              jJ = JJ.length;
            for (ZJ instanceof Date || (ZJ = new Date(+ZJ)); ++AJ < jJ;) 37 === JJ.charCodeAt(AJ) && (XJ.push(JJ.slice(qJ, AJ)), null != (UJ = IF[FJ = JJ.charAt(++AJ)]) ? FJ = JJ.charAt(++AJ) : UJ = "e" === FJ ? " " : "0", (eJ = cJ[FJ]) && (FJ = eJ(ZJ, UJ)), XJ.push(FJ), qJ = AJ + 1);
            return XJ.push(JJ.slice(qJ, AJ)), XJ.join("")
          }
        }

        function VJ(JJ, cJ) {
          return function(ZJ) {
            var FJ, UJ, eJ = VF(1900, void 0, 1);
            if (KJ(eJ, JJ, ZJ += "", 0) != ZJ.length) return null;
            if ("Q" in eJ) return new Date(eJ.Q);
            if ("s" in eJ) return new Date(1e3 * eJ.s + ("L" in eJ ? eJ.L : 0));
            if (cJ && !("Z" in eJ) && (eJ.Z = 0), "p" in eJ && (eJ.H = eJ.H % 12 + 12 * eJ.p), void 0 === eJ.m && (eJ.m = "q" in eJ ? eJ.q : 0), "V" in eJ) {
              if (eJ.V < 1 || eJ.V > 53) return null;
              "w" in eJ || (eJ.w = 1), "Z" in eJ ? (UJ = (FJ = EF(VF(eJ.y, 0, 1))).getUTCDay(), FJ = UJ > 4 || 0 === UJ ? XF.ceil(FJ) : XF(FJ), FJ = LZ.offset(FJ, 7 * (eJ.V - 1)), eJ.y = FJ.getUTCFullYear(), eJ.m = FJ.getUTCMonth(), eJ.d = FJ.getUTCDate() + (eJ.w + 6) % 7) : (UJ = (FJ = QF(VF(eJ.y, 0, 1))).getDay(), FJ = UJ > 4 || 0 === UJ ? oZ.ceil(FJ) : oZ(FJ), FJ = RZ.offset(FJ, 7 * (eJ.V - 1)), eJ.y = FJ.getFullYear(), eJ.m = FJ.getMonth(), eJ.d = FJ.getDate() + (eJ.w + 6) % 7)
            } else("W" in eJ || "U" in eJ) && ("w" in eJ || (eJ.w = "u" in eJ ? eJ.u % 7 : "W" in eJ ? 1 : 0), UJ = "Z" in eJ ? EF(VF(eJ.y, 0, 1)).getUTCDay() : QF(VF(eJ.y, 0, 1)).getDay(), eJ.m = 0, eJ.d = "W" in eJ ? (eJ.w + 6) % 7 + 7 * eJ.W - (UJ + 5) % 7 : eJ.w + 7 * eJ.U - (UJ + 6) % 7);
            return "Z" in eJ ? (eJ.H += eJ.Z / 100 | 0, eJ.M += eJ.Z % 100, EF(eJ)) : QF(eJ)
          }
        }

        function KJ(JJ, cJ, ZJ, FJ) {
          for (var UJ, eJ, XJ = 0, AJ = cJ.length, qJ = ZJ.length; XJ < AJ;) {
            if (FJ >= qJ) return -1;
            if (37 === (UJ = cJ.charCodeAt(XJ++))) {
              if (UJ = cJ.charAt(XJ++), !(eJ = QJ[UJ in IF ? cJ.charAt(XJ++) : UJ]) || (FJ = eJ(JJ, ZJ, FJ)) < 0) return -1
            } else if (UJ != ZJ.charCodeAt(FJ++)) return -1
          }
          return FJ
        }
        return vJ.x = EJ(ZJ, vJ), vJ.X = EJ(FJ, vJ), vJ.c = EJ(cJ, vJ), mJ.x = EJ(ZJ, mJ), mJ.X = EJ(FJ, mJ), mJ.c = EJ(cJ, mJ), {
          format: function(JJ) {
            var cJ = EJ(JJ += "", vJ);
            return cJ.toString = function() {
              return JJ
            }, cJ
          },
          parse: function(JJ) {
            var cJ = VJ(JJ += "", !1);
            return cJ.toString = function() {
              return JJ
            }, cJ
          },
          utcFormat: function(JJ) {
            var cJ = EJ(JJ += "", mJ);
            return cJ.toString = function() {
              return JJ
            }, cJ
          },
          utcParse: function(JJ) {
            var cJ = VJ(JJ += "", !0);
            return cJ.toString = function() {
              return JJ
            }, cJ
          }
        }
      }(JJ), yF = KF.format, KF.parse, SF = KF.utcFormat, KF.utcParse
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
    var ne = ZJ(5583),
      Ge = ZJ(5461);

    function fe(JJ) {
      for (var cJ = JJ.length, ZJ = new Array(cJ); --cJ >= 0;) ZJ[cJ] = cJ;
      return ZJ
    }

    function xe(JJ, cJ) {
      return JJ[cJ]
    }

    function re(JJ) {
      const cJ = [];
      return cJ.key = JJ, cJ
    }
    var ve = ZJ(5516),
      me = ZJ.n(ve),
      Qe = ZJ(5532),
      Ee = ZJ.n(Qe),
      Ve = ZJ(4786),
      Ke = ZJ.n(Ve),
      ye = ZJ(4641),
      Se = ZJ.n(ye),
      Ie = ZJ(4545),
      Me = ZJ.n(Ie),
      be = ZJ(4561),
      we = ZJ.n(be),
      We = ZJ(5549),
      ge = ZJ.n(We),
      He = ZJ(4556),
      Pe = ZJ.n(He),
      ke = ZJ(5422),
      pe = ZJ.n(ke),
      de = ZJ(5557),
      ze = ZJ.n(de),
      Ne = ZJ(4888),
      Oe = ZJ.n(Ne),
      Te = ZJ(5562),
      Ce = ZJ.n(Te);

    function ue(JJ) {
      return function(JJ) {
        if (Array.isArray(JJ)) return ie(JJ)
      }(JJ) || function(JJ) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(JJ)) return Array.from(JJ)
      }(JJ) || function(JJ, cJ) {
        if (!JJ) return;
        if ("string" === typeof JJ) return ie(JJ, cJ);
        var ZJ = Object.prototype.toString.call(JJ).slice(8, -1);
        "Object" === ZJ && JJ.constructor && (ZJ = JJ.constructor.name);
        if ("Map" === ZJ || "Set" === ZJ) return Array.from(JJ);
        if ("Arguments" === ZJ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZJ)) return ie(JJ, cJ)
      }(JJ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function ie(JJ, cJ) {
      (null == cJ || cJ > JJ.length) && (cJ = JJ.length);
      for (var ZJ = 0, FJ = new Array(cJ); ZJ < cJ; ZJ++) FJ[ZJ] = JJ[ZJ];
      return FJ
    }
    var Re = function(JJ) {
        return JJ
      },
      Le = {
        "@@functional/placeholder": !0
      },
      ae = function(JJ) {
        return JJ === Le
      },
      Be = function(JJ) {
        return function cJ() {
          return 0 === arguments.length || 1 === arguments.length && ae(arguments.length <= 0 ? void 0 : arguments[0]) ? cJ : JJ.apply(void 0, arguments)
        }
      },
      te = function JJ(cJ, ZJ) {
        return 1 === cJ ? ZJ : Be((function() {
          for (var FJ = arguments.length, UJ = new Array(FJ), eJ = 0; eJ < FJ; eJ++) UJ[eJ] = arguments[eJ];
          var XJ = UJ.filter((function(JJ) {
            return JJ !== Le
          })).length;
          return XJ >= cJ ? ZJ.apply(void 0, UJ) : JJ(cJ - XJ, Be((function() {
            for (var JJ = arguments.length, cJ = new Array(JJ), FJ = 0; FJ < JJ; FJ++) cJ[FJ] = arguments[FJ];
            var eJ = UJ.map((function(JJ) {
              return ae(JJ) ? cJ.shift() : JJ
            }));
            return ZJ.apply(void 0, ue(eJ).concat(cJ))
          })))
        }))
      },
      oe = function(JJ) {
        return te(JJ.length, JJ)
      },
      le = function(JJ, cJ) {
        for (var ZJ = [], FJ = JJ; FJ < cJ; ++FJ) ZJ[FJ - JJ] = FJ;
        return ZJ
      },
      JX = oe((function(JJ, cJ) {
        return Array.isArray(cJ) ? cJ.map(JJ) : Object.keys(cJ).map((function(JJ) {
          return cJ[JJ]
        })).map(JJ)
      })),
      cX = function() {
        for (var JJ = arguments.length, cJ = new Array(JJ), ZJ = 0; ZJ < JJ; ZJ++) cJ[ZJ] = arguments[ZJ];
        if (!cJ.length) return Re;
        var FJ = cJ.reverse(),
          UJ = FJ[0],
          eJ = FJ.slice(1);
        return function() {
          return eJ.reduce((function(JJ, cJ) {
            return cJ(JJ)
          }), UJ.apply(void 0, arguments))
        }
      },
      ZX = function(JJ) {
        return Array.isArray(JJ) ? JJ.reverse() : JJ.split("").reverse.join("")
      },
      FX = function(JJ) {
        var cJ = null,
          ZJ = null;
        return function() {
          for (var FJ = arguments.length, UJ = new Array(FJ), eJ = 0; eJ < FJ; eJ++) UJ[eJ] = arguments[eJ];
          return cJ && UJ.every((function(JJ, ZJ) {
            return JJ === cJ[ZJ]
          })) ? ZJ : (cJ = UJ, ZJ = JJ.apply(void 0, UJ))
        }
      };
    const UX = {
      rangeStep: function(JJ, cJ, ZJ) {
        for (var FJ = new(Ce())(JJ), UJ = 0, eJ = []; FJ.lt(cJ) && UJ < 1e5;) eJ.push(FJ.toNumber()), FJ = FJ.add(ZJ), UJ++;
        return eJ
      },
      getDigitCount: function(JJ) {
        return 0 === JJ ? 1 : Math.floor(new(Ce())(JJ).abs().log(10).toNumber()) + 1
      },
      interpolateNumber: oe((function(JJ, cJ, ZJ) {
        var FJ = +JJ;
        return FJ + ZJ * (+cJ - FJ)
      })),
      uninterpolateNumber: oe((function(JJ, cJ, ZJ) {
        var FJ = cJ - +JJ;
        return (ZJ - JJ) / (FJ = FJ || 1 / 0)
      })),
      uninterpolateTruncation: oe((function(JJ, cJ, ZJ) {
        var FJ = cJ - +JJ;
        return FJ = FJ || 1 / 0, Math.max(0, Math.min(1, (ZJ - JJ) / FJ))
      }))
    };

    function eX(JJ) {
      return function(JJ) {
        if (Array.isArray(JJ)) return qX(JJ)
      }(JJ) || function(JJ) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(JJ)) return Array.from(JJ)
      }(JJ) || AX(JJ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function XX(JJ, cJ) {
      return function(JJ) {
        if (Array.isArray(JJ)) return JJ
      }(JJ) || function(JJ, cJ) {
        if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(JJ))) return;
        var ZJ = [],
          FJ = !0,
          UJ = !1,
          eJ = void 0;
        try {
          for (var XJ, AJ = JJ[Symbol.iterator](); !(FJ = (XJ = AJ.next()).done) && (ZJ.push(XJ.value), !cJ || ZJ.length !== cJ); FJ = !0);
        } catch (qJ) {
          UJ = !0, eJ = qJ
        } finally {
          try {
            FJ || null == AJ.return || AJ.return()
          } finally {
            if (UJ) throw eJ
          }
        }
        return ZJ
      }(JJ, cJ) || AX(JJ, cJ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function AX(JJ, cJ) {
      if (JJ) {
        if ("string" === typeof JJ) return qX(JJ, cJ);
        var ZJ = Object.prototype.toString.call(JJ).slice(8, -1);
        return "Object" === ZJ && JJ.constructor && (ZJ = JJ.constructor.name), "Map" === ZJ || "Set" === ZJ ? Array.from(JJ) : "Arguments" === ZJ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZJ) ? qX(JJ, cJ) : void 0
      }
    }

    function qX(JJ, cJ) {
      (null == cJ || cJ > JJ.length) && (cJ = JJ.length);
      for (var ZJ = 0, FJ = new Array(cJ); ZJ < cJ; ZJ++) FJ[ZJ] = JJ[ZJ];
      return FJ
    }

    function jX(JJ) {
      var cJ = XX(JJ, 2),
        ZJ = cJ[0],
        FJ = cJ[1],
        UJ = ZJ,
        eJ = FJ;
      return ZJ > FJ && (UJ = FJ, eJ = ZJ), [UJ, eJ]
    }

    function YX(JJ, cJ, ZJ) {
      if (JJ.lte(0)) return new(Ce())(0);
      var FJ = UX.getDigitCount(JJ.toNumber()),
        UJ = new(Ce())(10).pow(FJ),
        eJ = JJ.div(UJ),
        XJ = 1 !== FJ ? .05 : .1,
        AJ = new(Ce())(Math.ceil(eJ.div(XJ).toNumber())).add(ZJ).mul(XJ).mul(UJ);
      return cJ ? AJ : new(Ce())(Math.ceil(AJ))
    }

    function hX(JJ, cJ, ZJ) {
      var FJ = 1,
        UJ = new(Ce())(JJ);
      if (!UJ.isint() && ZJ) {
        var eJ = Math.abs(JJ);
        eJ < 1 ? (FJ = new(Ce())(10).pow(UX.getDigitCount(JJ) - 1), UJ = new(Ce())(Math.floor(UJ.div(FJ).toNumber())).mul(FJ)) : eJ > 1 && (UJ = new(Ce())(Math.floor(JJ)))
      } else 0 === JJ ? UJ = new(Ce())(Math.floor((cJ - 1) / 2)) : ZJ || (UJ = new(Ce())(Math.floor(JJ)));
      var XJ = Math.floor((cJ - 1) / 2);
      return cX(JX((function(JJ) {
        return UJ.add(new(Ce())(JJ - XJ).mul(FJ)).toNumber()
      })), le)(0, cJ)
    }

    function DX(JJ, cJ, ZJ, FJ) {
      var UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      if (!Number.isFinite((cJ - JJ) / (ZJ - 1))) return {
        step: new(Ce())(0),
        tickMin: new(Ce())(0),
        tickMax: new(Ce())(0)
      };
      var eJ, XJ = YX(new(Ce())(cJ).sub(JJ).div(ZJ - 1), FJ, UJ);
      eJ = JJ <= 0 && cJ >= 0 ? new(Ce())(0) : (eJ = new(Ce())(JJ).add(cJ).div(2)).sub(new(Ce())(eJ).mod(XJ));
      var AJ = Math.ceil(eJ.sub(JJ).div(XJ).toNumber()),
        qJ = Math.ceil(new(Ce())(cJ).sub(eJ).div(XJ).toNumber()),
        jJ = AJ + qJ + 1;
      return jJ > ZJ ? DX(JJ, cJ, ZJ, FJ, UJ + 1) : (jJ < ZJ && (qJ = cJ > 0 ? qJ + (ZJ - jJ) : qJ, AJ = cJ > 0 ? AJ : AJ + (ZJ - jJ)), {
        step: XJ,
        tickMin: eJ.sub(new(Ce())(AJ).mul(XJ)),
        tickMax: eJ.add(new(Ce())(qJ).mul(XJ))
      })
    }
    var sX = FX((function(JJ) {
        var cJ = XX(JJ, 2),
          ZJ = cJ[0],
          FJ = cJ[1],
          UJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          eJ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          XJ = Math.max(UJ, 2),
          AJ = XX(jX([ZJ, FJ]), 2),
          qJ = AJ[0],
          jJ = AJ[1];
        if (qJ === -1 / 0 || jJ === 1 / 0) {
          var YJ = jJ === 1 / 0 ? [qJ].concat(eX(le(0, UJ - 1).map((function() {
            return 1 / 0
          })))) : [].concat(eX(le(0, UJ - 1).map((function() {
            return -1 / 0
          }))), [jJ]);
          return ZJ > FJ ? ZX(YJ) : YJ
        }
        if (qJ === jJ) return hX(qJ, UJ, eJ);
        var hJ = DX(qJ, jJ, XJ, eJ),
          DJ = hJ.step,
          sJ = hJ.tickMin,
          nJ = hJ.tickMax,
          GJ = UX.rangeStep(sJ, nJ.add(new(Ce())(.1).mul(DJ)), DJ);
        return ZJ > FJ ? ZX(GJ) : GJ
      })),
      nX = (FX((function(JJ) {
        var cJ = XX(JJ, 2),
          ZJ = cJ[0],
          FJ = cJ[1],
          UJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          eJ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          XJ = Math.max(UJ, 2),
          AJ = XX(jX([ZJ, FJ]), 2),
          qJ = AJ[0],
          jJ = AJ[1];
        if (qJ === -1 / 0 || jJ === 1 / 0) return [ZJ, FJ];
        if (qJ === jJ) return hX(qJ, UJ, eJ);
        var YJ = YX(new(Ce())(jJ).sub(qJ).div(XJ - 1), eJ, 0),
          hJ = cX(JX((function(JJ) {
            return new(Ce())(qJ).add(new(Ce())(JJ).mul(YJ)).toNumber()
          })), le)(0, XJ).filter((function(JJ) {
            return JJ >= qJ && JJ <= jJ
          }));
        return ZJ > FJ ? ZX(hJ) : hJ
      })), FX((function(JJ, cJ) {
        var ZJ = XX(JJ, 2),
          FJ = ZJ[0],
          UJ = ZJ[1],
          eJ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          XJ = XX(jX([FJ, UJ]), 2),
          AJ = XJ[0],
          qJ = XJ[1];
        if (AJ === -1 / 0 || qJ === 1 / 0) return [FJ, UJ];
        if (AJ === qJ) return [AJ];
        var jJ = Math.max(cJ, 2),
          YJ = YX(new(Ce())(qJ).sub(AJ).div(jJ - 1), eJ, 0),
          hJ = [].concat(eX(UX.rangeStep(new(Ce())(AJ), new(Ce())(qJ).sub(new(Ce())(.99).mul(YJ)), YJ)), [qJ]);
        return FJ > UJ ? ZX(hJ) : hJ
      }))),
      GX = ZJ(5571),
      fX = ZJ(4543),
      xX = ZJ(4797),
      rX = ZJ(5575);

    function vX(JJ) {
      return vX = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, vX(JJ)
    }

    function mX(JJ) {
      return function(JJ) {
        if (Array.isArray(JJ)) return QX(JJ)
      }(JJ) || function(JJ) {
        if ("undefined" !== typeof Symbol && null != JJ[Symbol.iterator] || null != JJ["@@iterator"]) return Array.from(JJ)
      }(JJ) || function(JJ, cJ) {
        if (!JJ) return;
        if ("string" === typeof JJ) return QX(JJ, cJ);
        var ZJ = Object.prototype.toString.call(JJ).slice(8, -1);
        "Object" === ZJ && JJ.constructor && (ZJ = JJ.constructor.name);
        if ("Map" === ZJ || "Set" === ZJ) return Array.from(JJ);
        if ("Arguments" === ZJ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZJ)) return QX(JJ, cJ)
      }(JJ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function QX(JJ, cJ) {
      (null == cJ || cJ > JJ.length) && (cJ = JJ.length);
      for (var ZJ = 0, FJ = new Array(cJ); ZJ < cJ; ZJ++) FJ[ZJ] = JJ[ZJ];
      return FJ
    }

    function EX(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function VX(JJ) {
      for (var cJ = 1; cJ < arguments.length; cJ++) {
        var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
        cJ % 2 ? EX(Object(ZJ), !0).forEach((function(cJ) {
          KX(JJ, cJ, ZJ[cJ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : EX(Object(ZJ)).forEach((function(cJ) {
          Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
        }))
      }
      return JJ
    }

    function KX(JJ, cJ, ZJ) {
      return (cJ = function(JJ) {
        var cJ = function(JJ, cJ) {
          if ("object" != vX(JJ) || !JJ) return JJ;
          var ZJ = JJ[Symbol.toPrimitive];
          if (void 0 !== ZJ) {
            var FJ = ZJ.call(JJ, cJ || "default");
            if ("object" != vX(FJ)) return FJ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === cJ ? String : Number)(JJ)
        }(JJ, "string");
        return "symbol" == vX(cJ) ? cJ : cJ + ""
      }(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }

    function yX(JJ, cJ, ZJ) {
      return Ke()(JJ) || Ke()(cJ) ? ZJ : (0, fX.y)(cJ) ? we()(JJ, cJ, ZJ) : Se()(cJ) ? cJ(JJ) : ZJ
    }

    function SX(JJ, cJ, ZJ, FJ) {
      var UJ = ge()(JJ, (function(JJ) {
        return yX(JJ, cJ)
      }));
      if ("number" === ZJ) {
        var eJ = UJ.filter((function(JJ) {
          return (0, fX.C)(JJ) || parseFloat(JJ)
        }));
        return eJ.length ? [Ee()(eJ), me()(eJ)] : [1 / 0, -1 / 0]
      }
      return (FJ ? UJ.filter((function(JJ) {
        return !Ke()(JJ)
      })) : UJ).map((function(JJ) {
        return (0, fX.y)(JJ) || JJ instanceof Date ? JJ : ""
      }))
    }
    var IX = function(JJ) {
        var cJ, ZJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          FJ = arguments.length > 2 ? arguments[2] : void 0,
          UJ = arguments.length > 3 ? arguments[3] : void 0,
          eJ = -1,
          XJ = null !== (cJ = null === ZJ || void 0 === ZJ ? void 0 : ZJ.length) && void 0 !== cJ ? cJ : 0;
        if (XJ <= 1) return 0;
        if (UJ && "angleAxis" === UJ.axisType && Math.abs(Math.abs(UJ.range[1] - UJ.range[0]) - 360) <= 1e-6)
          for (var AJ = UJ.range, qJ = 0; qJ < XJ; qJ++) {
            var jJ = qJ > 0 ? FJ[qJ - 1].coordinate : FJ[XJ - 1].coordinate,
              YJ = FJ[qJ].coordinate,
              hJ = qJ >= XJ - 1 ? FJ[0].coordinate : FJ[qJ + 1].coordinate,
              DJ = void 0;
            if ((0, fX.I)(YJ - jJ) !== (0, fX.I)(hJ - YJ)) {
              var sJ = [];
              if ((0, fX.I)(hJ - YJ) === (0, fX.I)(AJ[1] - AJ[0])) {
                DJ = hJ;
                var nJ = YJ + AJ[1] - AJ[0];
                sJ[0] = Math.min(nJ, (nJ + jJ) / 2), sJ[1] = Math.max(nJ, (nJ + jJ) / 2)
              } else {
                DJ = jJ;
                var GJ = hJ + AJ[1] - AJ[0];
                sJ[0] = Math.min(YJ, (GJ + YJ) / 2), sJ[1] = Math.max(YJ, (GJ + YJ) / 2)
              }
              var fJ = [Math.min(YJ, (DJ + YJ) / 2), Math.max(YJ, (DJ + YJ) / 2)];
              if (JJ > fJ[0] && JJ <= fJ[1] || JJ >= sJ[0] && JJ <= sJ[1]) {
                eJ = FJ[qJ].index;
                break
              }
            } else {
              var xJ = Math.min(jJ, hJ),
                rJ = Math.max(jJ, hJ);
              if (JJ > (xJ + YJ) / 2 && JJ <= (rJ + YJ) / 2) {
                eJ = FJ[qJ].index;
                break
              }
            }
          } else
            for (var vJ = 0; vJ < XJ; vJ++)
              if (0 === vJ && JJ <= (ZJ[vJ].coordinate + ZJ[vJ + 1].coordinate) / 2 || vJ > 0 && vJ < XJ - 1 && JJ > (ZJ[vJ].coordinate + ZJ[vJ - 1].coordinate) / 2 && JJ <= (ZJ[vJ].coordinate + ZJ[vJ + 1].coordinate) / 2 || vJ === XJ - 1 && JJ > (ZJ[vJ].coordinate + ZJ[vJ - 1].coordinate) / 2) {
                eJ = ZJ[vJ].index;
                break
              } return eJ
      },
      MX = function(JJ) {
        var cJ, ZJ, FJ = JJ.type.displayName,
          UJ = null !== (cJ = JJ.type) && void 0 !== cJ && cJ.defaultProps ? VX(VX({}, JJ.type.defaultProps), JJ.props) : JJ.props,
          eJ = UJ.stroke,
          XJ = UJ.fill;
        switch (FJ) {
          case "Line":
            ZJ = eJ;
            break;
          case "Area":
          case "Radar":
            ZJ = eJ && "none" !== eJ ? eJ : XJ;
            break;
          default:
            ZJ = XJ
        }
        return ZJ
      },
      bX = function(JJ) {
        var cJ = JJ.barSize,
          ZJ = JJ.totalSize,
          FJ = JJ.stackGroups,
          UJ = void 0 === FJ ? {} : FJ;
        if (!UJ) return {};
        for (var eJ = {}, XJ = Object.keys(UJ), AJ = 0, qJ = XJ.length; AJ < qJ; AJ++)
          for (var jJ = UJ[XJ[AJ]].stackGroups, YJ = Object.keys(jJ), hJ = 0, DJ = YJ.length; hJ < DJ; hJ++) {
            var sJ = jJ[YJ[hJ]],
              nJ = sJ.items,
              GJ = sJ.cateAxisId,
              fJ = nJ.filter((function(JJ) {
                return (0, xX.k)(JJ.type).indexOf("Bar") >= 0
              }));
            if (fJ && fJ.length) {
              var xJ = fJ[0].type.defaultProps,
                rJ = void 0 !== xJ ? VX(VX({}, xJ), fJ[0].props) : fJ[0].props,
                vJ = rJ.barSize,
                mJ = rJ[GJ];
              eJ[mJ] || (eJ[mJ] = []);
              var QJ = Ke()(vJ) ? cJ : vJ;
              eJ[mJ].push({
                item: fJ[0],
                stackList: fJ.slice(1),
                barSize: Ke()(QJ) ? void 0 : (0, fX.l)(QJ, ZJ, 0)
              })
            }
          }
        return eJ
      },
      wX = function(JJ) {
        var cJ = JJ.barGap,
          ZJ = JJ.barCategoryGap,
          FJ = JJ.bandSize,
          UJ = JJ.sizeList,
          eJ = void 0 === UJ ? [] : UJ,
          XJ = JJ.maxBarSize,
          AJ = eJ.length;
        if (AJ < 1) return null;
        var qJ, jJ = (0, fX.l)(cJ, FJ, 0, !0),
          YJ = [];
        if (eJ[0].barSize === +eJ[0].barSize) {
          var hJ = !1,
            DJ = FJ / AJ,
            sJ = eJ.reduce((function(JJ, cJ) {
              return JJ + cJ.barSize || 0
            }), 0);
          (sJ += (AJ - 1) * jJ) >= FJ && (sJ -= (AJ - 1) * jJ, jJ = 0), sJ >= FJ && DJ > 0 && (hJ = !0, sJ = AJ * (DJ *= .9));
          var nJ = {
            offset: ((FJ - sJ) / 2 | 0) - jJ,
            size: 0
          };
          qJ = eJ.reduce((function(JJ, cJ) {
            var ZJ = {
                item: cJ.item,
                position: {
                  offset: nJ.offset + nJ.size + jJ,
                  size: hJ ? DJ : cJ.barSize
                }
              },
              FJ = [].concat(mX(JJ), [ZJ]);
            return nJ = FJ[FJ.length - 1].position, cJ.stackList && cJ.stackList.length && cJ.stackList.forEach((function(JJ) {
              FJ.push({
                item: JJ,
                position: nJ
              })
            })), FJ
          }), YJ)
        } else {
          var GJ = (0, fX.l)(ZJ, FJ, 0, !0);
          FJ - 2 * GJ - (AJ - 1) * jJ <= 0 && (jJ = 0);
          var fJ = (FJ - 2 * GJ - (AJ - 1) * jJ) / AJ;
          fJ > 1 && (fJ >>= 0);
          var xJ = XJ === +XJ ? Math.min(fJ, XJ) : fJ;
          qJ = eJ.reduce((function(JJ, cJ, ZJ) {
            var FJ = [].concat(mX(JJ), [{
              item: cJ.item,
              position: {
                offset: GJ + (fJ + jJ) * ZJ + (fJ - xJ) / 2,
                size: xJ
              }
            }]);
            return cJ.stackList && cJ.stackList.length && cJ.stackList.forEach((function(JJ) {
              FJ.push({
                item: JJ,
                position: FJ[FJ.length - 1].position
              })
            })), FJ
          }), YJ)
        }
        return qJ
      },
      WX = function(JJ, cJ, ZJ, FJ) {
        var UJ = ZJ.children,
          eJ = ZJ.width,
          XJ = ZJ.margin,
          AJ = eJ - (XJ.left || 0) - (XJ.right || 0),
          qJ = (0, rX.b)({
            children: UJ,
            legendWidth: AJ
          });
        if (qJ) {
          var jJ = FJ || {},
            YJ = jJ.width,
            hJ = jJ.height,
            DJ = qJ.align,
            sJ = qJ.verticalAlign,
            nJ = qJ.layout;
          if (("vertical" === nJ || "horizontal" === nJ && "middle" === sJ) && "center" !== DJ && (0, fX.C)(JJ[DJ])) return VX(VX({}, JJ), {}, KX({}, DJ, JJ[DJ] + (YJ || 0)));
          if (("horizontal" === nJ || "vertical" === nJ && "center" === DJ) && "middle" !== sJ && (0, fX.C)(JJ[sJ])) return VX(VX({}, JJ), {}, KX({}, sJ, JJ[sJ] + (hJ || 0)))
        }
        return JJ
      },
      gX = function(JJ, cJ, ZJ, FJ, UJ) {
        var eJ = cJ.props.children,
          XJ = (0, xX.f)(eJ, GX.c).filter((function(JJ) {
            return function(JJ, cJ, ZJ) {
              return !!Ke()(cJ) || ("horizontal" === JJ ? "yAxis" === cJ : "vertical" === JJ || "x" === ZJ ? "xAxis" === cJ : "y" !== ZJ || "yAxis" === cJ)
            }(FJ, UJ, JJ.props.direction)
          }));
        if (XJ && XJ.length) {
          var AJ = XJ.map((function(JJ) {
            return JJ.props.dataKey
          }));
          return JJ.reduce((function(JJ, cJ) {
            var FJ = yX(cJ, ZJ);
            if (Ke()(FJ)) return JJ;
            var UJ = Array.isArray(FJ) ? [Ee()(FJ), me()(FJ)] : [FJ, FJ],
              eJ = AJ.reduce((function(JJ, ZJ) {
                var FJ = yX(cJ, ZJ, 0),
                  eJ = UJ[0] - Math.abs(Array.isArray(FJ) ? FJ[0] : FJ),
                  XJ = UJ[1] + Math.abs(Array.isArray(FJ) ? FJ[1] : FJ);
                return [Math.min(eJ, JJ[0]), Math.max(XJ, JJ[1])]
              }), [1 / 0, -1 / 0]);
            return [Math.min(eJ[0], JJ[0]), Math.max(eJ[1], JJ[1])]
          }), [1 / 0, -1 / 0])
        }
        return null
      },
      HX = function(JJ, cJ, ZJ, FJ, UJ) {
        var eJ = cJ.map((function(cJ) {
          return gX(JJ, cJ, ZJ, UJ, FJ)
        })).filter((function(JJ) {
          return !Ke()(JJ)
        }));
        return eJ && eJ.length ? eJ.reduce((function(JJ, cJ) {
          return [Math.min(JJ[0], cJ[0]), Math.max(JJ[1], cJ[1])]
        }), [1 / 0, -1 / 0]) : null
      },
      PX = function(JJ, cJ, ZJ, FJ, UJ) {
        var eJ = cJ.map((function(cJ) {
          var eJ = cJ.props.dataKey;
          return "number" === ZJ && eJ && gX(JJ, cJ, eJ, FJ) || SX(JJ, eJ, ZJ, UJ)
        }));
        if ("number" === ZJ) return eJ.reduce((function(JJ, cJ) {
          return [Math.min(JJ[0], cJ[0]), Math.max(JJ[1], cJ[1])]
        }), [1 / 0, -1 / 0]);
        var XJ = {};
        return eJ.reduce((function(JJ, cJ) {
          for (var ZJ = 0, FJ = cJ.length; ZJ < FJ; ZJ++) XJ[cJ[ZJ]] || (XJ[cJ[ZJ]] = !0, JJ.push(cJ[ZJ]));
          return JJ
        }), [])
      },
      kX = function(JJ, cJ) {
        return "horizontal" === JJ && "xAxis" === cJ || "vertical" === JJ && "yAxis" === cJ || "centric" === JJ && "angleAxis" === cJ || "radial" === JJ && "radiusAxis" === cJ
      },
      pX = function(JJ, cJ, ZJ, FJ) {
        if (FJ) return JJ.map((function(JJ) {
          return JJ.coordinate
        }));
        var UJ, eJ, XJ = JJ.map((function(JJ) {
          return JJ.coordinate === cJ && (UJ = !0), JJ.coordinate === ZJ && (eJ = !0), JJ.coordinate
        }));
        return UJ || XJ.push(cJ), eJ || XJ.push(ZJ), XJ
      },
      dX = function(JJ, cJ, ZJ) {
        if (!JJ) return null;
        var FJ = JJ.scale,
          UJ = JJ.duplicateDomain,
          eJ = JJ.type,
          XJ = JJ.range,
          AJ = "scaleBand" === JJ.realScaleType ? FJ.bandwidth() / 2 : 2,
          qJ = (cJ || ZJ) && "category" === eJ && FJ.bandwidth ? FJ.bandwidth() / AJ : 0;
        return qJ = "angleAxis" === JJ.axisType && (null === XJ || void 0 === XJ ? void 0 : XJ.length) >= 2 ? 2 * (0, fX.I)(XJ[0] - XJ[1]) * qJ : qJ, cJ && (JJ.ticks || JJ.niceTicks) ? (JJ.ticks || JJ.niceTicks).map((function(JJ) {
          var cJ = UJ ? UJ.indexOf(JJ) : JJ;
          return {
            coordinate: FJ(cJ) + qJ,
            value: JJ,
            offset: qJ
          }
        })).filter((function(JJ) {
          return !Pe()(JJ.coordinate)
        })) : JJ.isCategorical && JJ.categoricalDomain ? JJ.categoricalDomain.map((function(JJ, cJ) {
          return {
            coordinate: FJ(JJ) + qJ,
            value: JJ,
            index: cJ,
            offset: qJ
          }
        })) : FJ.ticks && !ZJ ? FJ.ticks(JJ.tickCount).map((function(JJ) {
          return {
            coordinate: FJ(JJ) + qJ,
            value: JJ,
            offset: qJ
          }
        })) : FJ.domain().map((function(JJ, cJ) {
          return {
            coordinate: FJ(JJ) + qJ,
            value: UJ ? UJ[JJ] : JJ,
            index: cJ,
            offset: qJ
          }
        }))
      },
      zX = new WeakMap,
      NX = function(JJ, cJ) {
        if ("function" !== typeof cJ) return JJ;
        zX.has(JJ) || zX.set(JJ, new WeakMap);
        var ZJ = zX.get(JJ);
        if (ZJ.has(cJ)) return ZJ.get(cJ);
        var FJ = function() {
          JJ.apply(void 0, arguments), cJ.apply(void 0, arguments)
        };
        return ZJ.set(cJ, FJ), FJ
      },
      OX = function(JJ, cJ, ZJ) {
        var eJ = JJ.scale,
          XJ = JJ.type,
          AJ = JJ.layout,
          qJ = JJ.axisType;
        if ("auto" === eJ) return "radial" === AJ && "radiusAxis" === qJ ? {
          scale: UJ.c(),
          realScaleType: "band"
        } : "radial" === AJ && "angleAxis" === qJ ? {
          scale: Lc(),
          realScaleType: "linear"
        } : "category" === XJ && cJ && (cJ.indexOf("LineChart") >= 0 || cJ.indexOf("AreaChart") >= 0 || cJ.indexOf("ComposedChart") >= 0 && !ZJ) ? {
          scale: UJ.d(),
          realScaleType: "point"
        } : "category" === XJ ? {
          scale: UJ.c(),
          realScaleType: "band"
        } : {
          scale: Lc(),
          realScaleType: "linear"
        };
        if (Me()(eJ)) {
          var jJ = "scale".concat(pe()(eJ));
          return {
            scale: (FJ[jJ] || UJ.d)(),
            realScaleType: FJ[jJ] ? jJ : "point"
          }
        }
        return Se()(eJ) ? {
          scale: eJ
        } : {
          scale: UJ.d(),
          realScaleType: "point"
        }
      },
      TX = 1e-4,
      CX = function(JJ) {
        var cJ = JJ.domain();
        if (cJ && !(cJ.length <= 2)) {
          var ZJ = cJ.length,
            FJ = JJ.range(),
            UJ = Math.min(FJ[0], FJ[1]) - TX,
            eJ = Math.max(FJ[0], FJ[1]) + TX,
            XJ = JJ(cJ[0]),
            AJ = JJ(cJ[ZJ - 1]);
          (XJ < UJ || XJ > eJ || AJ < UJ || AJ > eJ) && JJ.domain([cJ[0], cJ[ZJ - 1]])
        }
      },
      uX = function(JJ, cJ) {
        if (!JJ) return null;
        for (var ZJ = 0, FJ = JJ.length; ZJ < FJ; ZJ++)
          if (JJ[ZJ].item === cJ) return JJ[ZJ].position;
        return null
      },
      iX = function(JJ, cJ) {
        if (!cJ || 2 !== cJ.length || !(0, fX.C)(cJ[0]) || !(0, fX.C)(cJ[1])) return JJ;
        var ZJ = Math.min(cJ[0], cJ[1]),
          FJ = Math.max(cJ[0], cJ[1]),
          UJ = [JJ[0], JJ[1]];
        return (!(0, fX.C)(JJ[0]) || JJ[0] < ZJ) && (UJ[0] = ZJ), (!(0, fX.C)(JJ[1]) || JJ[1] > FJ) && (UJ[1] = FJ), UJ[0] > FJ && (UJ[0] = FJ), UJ[1] < ZJ && (UJ[1] = ZJ), UJ
      },
      RX = {
        sign: function(JJ) {
          var cJ = JJ.length;
          if (!(cJ <= 0))
            for (var ZJ = 0, FJ = JJ[0].length; ZJ < FJ; ++ZJ)
              for (var UJ = 0, eJ = 0, XJ = 0; XJ < cJ; ++XJ) {
                var AJ = Pe()(JJ[XJ][ZJ][1]) ? JJ[XJ][ZJ][0] : JJ[XJ][ZJ][1];
                AJ >= 0 ? (JJ[XJ][ZJ][0] = UJ, JJ[XJ][ZJ][1] = UJ + AJ, UJ = JJ[XJ][ZJ][1]) : (JJ[XJ][ZJ][0] = eJ, JJ[XJ][ZJ][1] = eJ + AJ, eJ = JJ[XJ][ZJ][1])
              }
        },
        expand: function(JJ, cJ) {
          if ((FJ = JJ.length) > 0) {
            for (var ZJ, FJ, UJ, eJ = 0, XJ = JJ[0].length; eJ < XJ; ++eJ) {
              for (UJ = ZJ = 0; ZJ < FJ; ++ZJ) UJ += JJ[ZJ][eJ][1] || 0;
              if (UJ)
                for (ZJ = 0; ZJ < FJ; ++ZJ) JJ[ZJ][eJ][1] /= UJ
            }
            se(JJ, cJ)
          }
        },
        none: se,
        silhouette: function(JJ, cJ) {
          if ((ZJ = JJ.length) > 0) {
            for (var ZJ, FJ = 0, UJ = JJ[cJ[0]], eJ = UJ.length; FJ < eJ; ++FJ) {
              for (var XJ = 0, AJ = 0; XJ < ZJ; ++XJ) AJ += JJ[XJ][FJ][1] || 0;
              UJ[FJ][1] += UJ[FJ][0] = -AJ / 2
            }
            se(JJ, cJ)
          }
        },
        wiggle: function(JJ, cJ) {
          if ((UJ = JJ.length) > 0 && (FJ = (ZJ = JJ[cJ[0]]).length) > 0) {
            for (var ZJ, FJ, UJ, eJ = 0, XJ = 1; XJ < FJ; ++XJ) {
              for (var AJ = 0, qJ = 0, jJ = 0; AJ < UJ; ++AJ) {
                for (var YJ = JJ[cJ[AJ]], hJ = YJ[XJ][1] || 0, DJ = (hJ - (YJ[XJ - 1][1] || 0)) / 2, sJ = 0; sJ < AJ; ++sJ) {
                  var nJ = JJ[cJ[sJ]];
                  DJ += (nJ[XJ][1] || 0) - (nJ[XJ - 1][1] || 0)
                }
                qJ += hJ, jJ += DJ * hJ
              }
              ZJ[XJ - 1][1] += ZJ[XJ - 1][0] = eJ, qJ && (eJ -= jJ / qJ)
            }
            ZJ[XJ - 1][1] += ZJ[XJ - 1][0] = eJ, se(JJ, cJ)
          }
        },
        positive: function(JJ) {
          var cJ = JJ.length;
          if (!(cJ <= 0))
            for (var ZJ = 0, FJ = JJ[0].length; ZJ < FJ; ++ZJ)
              for (var UJ = 0, eJ = 0; eJ < cJ; ++eJ) {
                var XJ = Pe()(JJ[eJ][ZJ][1]) ? JJ[eJ][ZJ][0] : JJ[eJ][ZJ][1];
                XJ >= 0 ? (JJ[eJ][ZJ][0] = UJ, JJ[eJ][ZJ][1] = UJ + XJ, UJ = JJ[eJ][ZJ][1]) : (JJ[eJ][ZJ][0] = 0, JJ[eJ][ZJ][1] = 0)
              }
        }
      },
      LX = function(JJ, cJ, ZJ) {
        var FJ = cJ.map((function(JJ) {
            return JJ.props.dataKey
          })),
          UJ = RX[ZJ],
          eJ = function() {
            var JJ = (0, Ge.c)([]),
              cJ = fe,
              ZJ = se,
              FJ = xe;

            function UJ(UJ) {
              var eJ, XJ, AJ = Array.from(JJ.apply(this, arguments), re),
                qJ = AJ.length,
                jJ = -1;
              for (const JJ of UJ)
                for (eJ = 0, ++jJ; eJ < qJ; ++eJ)(AJ[eJ][jJ] = [0, +FJ(JJ, AJ[eJ].key, jJ, UJ)]).data = JJ;
              for (eJ = 0, XJ = (0, ne.e)(cJ(AJ)); eJ < qJ; ++eJ) AJ[XJ[eJ]].index = eJ;
              return ZJ(AJ, XJ), AJ
            }
            return UJ.keys = function(cJ) {
              return arguments.length ? (JJ = "function" === typeof cJ ? cJ : (0, Ge.c)(Array.from(cJ)), UJ) : JJ
            }, UJ.value = function(JJ) {
              return arguments.length ? (FJ = "function" === typeof JJ ? JJ : (0, Ge.c)(+JJ), UJ) : FJ
            }, UJ.order = function(JJ) {
              return arguments.length ? (cJ = null == JJ ? fe : "function" === typeof JJ ? JJ : (0, Ge.c)(Array.from(JJ)), UJ) : cJ
            }, UJ.offset = function(JJ) {
              return arguments.length ? (ZJ = null == JJ ? se : JJ, UJ) : ZJ
            }, UJ
          }().keys(FJ).value((function(JJ, cJ) {
            return +yX(JJ, cJ, 0)
          })).order(fe).offset(UJ);
        return eJ(JJ)
      },
      aX = function(JJ, cJ, ZJ, FJ, UJ, eJ) {
        if (!JJ) return null;
        var XJ = (eJ ? cJ.reverse() : cJ).reduce((function(JJ, cJ) {
          var UJ, eJ = null !== (UJ = cJ.type) && void 0 !== UJ && UJ.defaultProps ? VX(VX({}, cJ.type.defaultProps), cJ.props) : cJ.props,
            XJ = eJ.stackId;
          if (eJ.hide) return JJ;
          var AJ = eJ[ZJ],
            qJ = JJ[AJ] || {
              hasStack: !1,
              stackGroups: {}
            };
          if ((0, fX.y)(XJ)) {
            var jJ = qJ.stackGroups[XJ] || {
              numericAxisId: ZJ,
              cateAxisId: FJ,
              items: []
            };
            jJ.items.push(cJ), qJ.hasStack = !0, qJ.stackGroups[XJ] = jJ
          } else qJ.stackGroups[(0, fX.L)("_stackId_")] = {
            numericAxisId: ZJ,
            cateAxisId: FJ,
            items: [cJ]
          };
          return VX(VX({}, JJ), {}, KX({}, AJ, qJ))
        }), {});
        return Object.keys(XJ).reduce((function(cJ, eJ) {
          var AJ = XJ[eJ];
          if (AJ.hasStack) {
            AJ.stackGroups = Object.keys(AJ.stackGroups).reduce((function(cJ, eJ) {
              var XJ = AJ.stackGroups[eJ];
              return VX(VX({}, cJ), {}, KX({}, eJ, {
                numericAxisId: ZJ,
                cateAxisId: FJ,
                items: XJ.items,
                stackedData: LX(JJ, XJ.items, UJ)
              }))
            }), {})
          }
          return VX(VX({}, cJ), {}, KX({}, eJ, AJ))
        }), {})
      },
      BX = function(JJ, cJ) {
        var ZJ = cJ.realScaleType,
          FJ = cJ.type,
          UJ = cJ.tickCount,
          eJ = cJ.originalDomain,
          XJ = cJ.allowDecimals,
          AJ = ZJ || cJ.scale;
        if ("auto" !== AJ && "linear" !== AJ) return null;
        if (UJ && "number" === FJ && eJ && ("auto" === eJ[0] || "auto" === eJ[1])) {
          var qJ = JJ.domain();
          if (!qJ.length) return null;
          var jJ = sX(qJ, UJ, XJ);
          return JJ.domain([Ee()(jJ), me()(jJ)]), {
            niceTicks: jJ
          }
        }
        if (UJ && "number" === FJ) {
          var YJ = JJ.domain();
          return {
            niceTicks: nX(YJ, UJ, XJ)
          }
        }
        return null
      };

    function tX(JJ) {
      var cJ = JJ.axis,
        ZJ = JJ.ticks,
        FJ = JJ.bandSize,
        UJ = JJ.entry,
        eJ = JJ.index,
        XJ = JJ.dataKey;
      if ("category" === cJ.type) {
        if (!cJ.allowDuplicatedCategory && cJ.dataKey && !Ke()(UJ[cJ.dataKey])) {
          var AJ = (0, fX.f)(ZJ, "value", UJ[cJ.dataKey]);
          if (AJ) return AJ.coordinate + FJ / 2
        }
        return ZJ[eJ] ? ZJ[eJ].coordinate + FJ / 2 : null
      }
      var qJ = yX(UJ, Ke()(XJ) ? cJ.dataKey : XJ);
      return Ke()(qJ) ? null : cJ.scale(qJ)
    }
    var oX = function(JJ) {
        var cJ = JJ.axis,
          ZJ = JJ.ticks,
          FJ = JJ.offset,
          UJ = JJ.bandSize,
          eJ = JJ.entry,
          XJ = JJ.index;
        if ("category" === cJ.type) return ZJ[XJ] ? ZJ[XJ].coordinate + FJ : null;
        var AJ = yX(eJ, cJ.dataKey, cJ.domain[XJ]);
        return Ke()(AJ) ? null : cJ.scale(AJ) - UJ / 2 + FJ
      },
      lX = function(JJ) {
        var cJ = JJ.numericAxis,
          ZJ = cJ.scale.domain();
        if ("number" === cJ.type) {
          var FJ = Math.min(ZJ[0], ZJ[1]),
            UJ = Math.max(ZJ[0], ZJ[1]);
          return FJ <= 0 && UJ >= 0 ? 0 : UJ < 0 ? UJ : FJ
        }
        return ZJ[0]
      },
      JA = function(JJ, cJ) {
        var ZJ, FJ = (null !== (ZJ = JJ.type) && void 0 !== ZJ && ZJ.defaultProps ? VX(VX({}, JJ.type.defaultProps), JJ.props) : JJ.props).stackId;
        if ((0, fX.y)(FJ)) {
          var UJ = cJ[FJ];
          if (UJ) {
            var eJ = UJ.items.indexOf(JJ);
            return eJ >= 0 ? UJ.stackedData[eJ] : null
          }
        }
        return null
      },
      cA = function(JJ, cJ, ZJ) {
        return Object.keys(JJ).reduce((function(FJ, UJ) {
          var eJ = JJ[UJ].stackedData.reduce((function(JJ, FJ) {
            var UJ = FJ.slice(cJ, ZJ + 1).reduce((function(JJ, cJ) {
              return [Ee()(cJ.concat([JJ[0]]).filter(fX.C)), me()(cJ.concat([JJ[1]]).filter(fX.C))]
            }), [1 / 0, -1 / 0]);
            return [Math.min(JJ[0], UJ[0]), Math.max(JJ[1], UJ[1])]
          }), [1 / 0, -1 / 0]);
          return [Math.min(eJ[0], FJ[0]), Math.max(eJ[1], FJ[1])]
        }), [1 / 0, -1 / 0]).map((function(JJ) {
          return JJ === 1 / 0 || JJ === -1 / 0 ? 0 : JJ
        }))
      },
      ZA = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      FA = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      UA = function(JJ, cJ, ZJ) {
        if (Se()(JJ)) return JJ(cJ, ZJ);
        if (!Array.isArray(JJ)) return cJ;
        var FJ = [];
        if ((0, fX.C)(JJ[0])) FJ[0] = ZJ ? JJ[0] : Math.min(JJ[0], cJ[0]);
        else if (ZA.test(JJ[0])) {
          var UJ = +ZA.exec(JJ[0])[1];
          FJ[0] = cJ[0] - UJ
        } else Se()(JJ[0]) ? FJ[0] = JJ[0](cJ[0]) : FJ[0] = cJ[0];
        if ((0, fX.C)(JJ[1])) FJ[1] = ZJ ? JJ[1] : Math.max(JJ[1], cJ[1]);
        else if (FA.test(JJ[1])) {
          var eJ = +FA.exec(JJ[1])[1];
          FJ[1] = cJ[1] + eJ
        } else Se()(JJ[1]) ? FJ[1] = JJ[1](cJ[1]) : FJ[1] = cJ[1];
        return FJ
      },
      eA = function(JJ, cJ, ZJ) {
        if (JJ && JJ.scale && JJ.scale.bandwidth) {
          var FJ = JJ.scale.bandwidth();
          if (!ZJ || FJ > 0) return FJ
        }
        if (JJ && cJ && cJ.length >= 2) {
          for (var UJ = Oe()(cJ, (function(JJ) {
              return JJ.coordinate
            })), eJ = 1 / 0, XJ = 1, AJ = UJ.length; XJ < AJ; XJ++) {
            var qJ = UJ[XJ],
              jJ = UJ[XJ - 1];
            eJ = Math.min((qJ.coordinate || 0) - (jJ.coordinate || 0), eJ)
          }
          return eJ === 1 / 0 ? 0 : eJ
        }
        return ZJ ? void 0 : 0
      },
      XA = function(JJ, cJ, ZJ) {
        return JJ && JJ.length ? ze()(JJ, we()(ZJ, "type.defaultProps.domain")) ? cJ : JJ : cJ
      },
      AA = function(JJ, cJ) {
        var ZJ = JJ.type.defaultProps ? VX(VX({}, JJ.type.defaultProps), JJ.props) : JJ.props,
          FJ = ZJ.dataKey,
          UJ = ZJ.name,
          eJ = ZJ.unit,
          XJ = ZJ.formatter,
          AJ = ZJ.tooltipType,
          qJ = ZJ.chartType,
          jJ = ZJ.hide;
        return VX(VX({}, (0, xX.c)(JJ, !1)), {}, {
          dataKey: FJ,
          unit: eJ,
          formatter: XJ,
          name: UJ || FJ,
          color: MX(JJ),
          value: yX(cJ, FJ),
          type: AJ,
          payload: cJ,
          chartType: qJ,
          hide: jJ
        })
      }
  },
  5490: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => DJ,
      f: () => hJ
    });
    var FJ = ZJ(5343);

    function UJ(JJ) {
      return UJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, UJ(JJ)
    }

    function eJ(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function XJ(JJ) {
      for (var cJ = 1; cJ < arguments.length; cJ++) {
        var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
        cJ % 2 ? eJ(Object(ZJ), !0).forEach((function(cJ) {
          AJ(JJ, cJ, ZJ[cJ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : eJ(Object(ZJ)).forEach((function(cJ) {
          Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
        }))
      }
      return JJ
    }

    function AJ(JJ, cJ, ZJ) {
      return (cJ = function(JJ) {
        var cJ = function(JJ, cJ) {
          if ("object" != UJ(JJ) || !JJ) return JJ;
          var ZJ = JJ[Symbol.toPrimitive];
          if (void 0 !== ZJ) {
            var FJ = ZJ.call(JJ, cJ || "default");
            if ("object" != UJ(FJ)) return FJ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === cJ ? String : Number)(JJ)
        }(JJ, "string");
        return "symbol" == UJ(cJ) ? cJ : cJ + ""
      }(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }
    var qJ = {
        widthCache: {},
        cacheCount: 0
      },
      jJ = {
        position: "absolute",
        top: "-20000px",
        left: 0,
        padding: 0,
        margin: 0,
        border: "none",
        whiteSpace: "pre"
      },
      YJ = "recharts_measurement_span";
    var hJ = function(JJ) {
        var cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (void 0 === JJ || null === JJ || FJ.e.isSsr) return {
          width: 0,
          height: 0
        };
        var ZJ = function(JJ) {
            var cJ = XJ({}, JJ);
            return Object.keys(cJ).forEach((function(JJ) {
              cJ[JJ] || delete cJ[JJ]
            })), cJ
          }(cJ),
          UJ = JSON.stringify({
            text: JJ,
            copyStyle: ZJ
          });
        if (qJ.widthCache[UJ]) return qJ.widthCache[UJ];
        try {
          var eJ = document.getElementById(YJ);
          eJ || ((eJ = document.createElement("span")).setAttribute("id", YJ), eJ.setAttribute("aria-hidden", "true"), document.body.appendChild(eJ));
          var AJ = XJ(XJ({}, jJ), ZJ);
          Object.assign(eJ.style, AJ), eJ.textContent = "".concat(JJ);
          var hJ = eJ.getBoundingClientRect(),
            DJ = {
              width: hJ.width,
              height: hJ.height
            };
          return qJ.widthCache[UJ] = DJ, ++qJ.cacheCount > 2e3 && (qJ.cacheCount = 0, qJ.widthCache = {}), DJ
        } catch (sJ) {
          return {
            width: 0,
            height: 0
          }
        }
      },
      DJ = function(JJ) {
        return {
          top: JJ.top + window.scrollY - document.documentElement.clientTop,
          left: JJ.left + window.scrollX - document.documentElement.clientLeft
        }
      }
  },
  4543: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      C: () => GJ,
      E: () => nJ,
      I: () => sJ,
      L: () => vJ,
      c: () => SJ,
      f: () => KJ,
      j: () => QJ,
      k: () => yJ,
      l: () => mJ,
      o: () => EJ,
      r: () => VJ,
      u: () => fJ,
      y: () => xJ
    });
    var FJ = ZJ(4545),
      UJ = ZJ.n(FJ),
      eJ = ZJ(4556),
      XJ = ZJ.n(eJ),
      AJ = ZJ(4561),
      qJ = ZJ.n(AJ),
      jJ = ZJ(4558),
      YJ = ZJ.n(jJ),
      hJ = ZJ(4786),
      DJ = ZJ.n(hJ),
      sJ = function(JJ) {
        return 0 === JJ ? 0 : JJ > 0 ? 1 : -1
      },
      nJ = function(JJ) {
        return UJ()(JJ) && JJ.indexOf("%") === JJ.length - 1
      },
      GJ = function(JJ) {
        return YJ()(JJ) && !XJ()(JJ)
      },
      fJ = function(JJ) {
        return DJ()(JJ)
      },
      xJ = function(JJ) {
        return GJ(JJ) || UJ()(JJ)
      },
      rJ = 0,
      vJ = function(JJ) {
        var cJ = ++rJ;
        return "".concat(JJ || "").concat(cJ)
      },
      mJ = function(JJ, cJ) {
        var ZJ, FJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          eJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!GJ(JJ) && !UJ()(JJ)) return FJ;
        if (nJ(JJ)) {
          var AJ = JJ.indexOf("%");
          ZJ = cJ * parseFloat(JJ.slice(0, AJ)) / 100
        } else ZJ = +JJ;
        return XJ()(ZJ) && (ZJ = FJ), eJ && ZJ > cJ && (ZJ = cJ), ZJ
      },
      QJ = function(JJ) {
        if (!JJ) return null;
        var cJ = Object.keys(JJ);
        return cJ && cJ.length ? JJ[cJ[0]] : null
      },
      EJ = function(JJ) {
        if (!Array.isArray(JJ)) return !1;
        for (var cJ = JJ.length, ZJ = {}, FJ = 0; FJ < cJ; FJ++) {
          if (ZJ[JJ[FJ]]) return !0;
          ZJ[JJ[FJ]] = !0
        }
        return !1
      },
      VJ = function(JJ, cJ) {
        return GJ(JJ) && GJ(cJ) ? function(ZJ) {
          return JJ + ZJ * (cJ - JJ)
        } : function() {
          return cJ
        }
      };

    function KJ(JJ, cJ, ZJ) {
      return JJ && JJ.length ? JJ.find((function(JJ) {
        return JJ && ("function" === typeof cJ ? cJ(JJ) : qJ()(JJ, cJ)) === ZJ
      })) : null
    }
    var yJ = function(JJ) {
        if (!JJ || !JJ.length) return null;
        for (var cJ = JJ.length, ZJ = 0, FJ = 0, UJ = 0, eJ = 0, XJ = 1 / 0, AJ = -1 / 0, qJ = 0, jJ = 0, YJ = 0; YJ < cJ; YJ++) ZJ += qJ = JJ[YJ].cx || 0, FJ += jJ = JJ[YJ].cy || 0, UJ += qJ * jJ, eJ += qJ * qJ, XJ = Math.min(XJ, qJ), AJ = Math.max(AJ, qJ);
        var hJ = cJ * eJ !== ZJ * ZJ ? (cJ * UJ - ZJ * FJ) / (cJ * eJ - ZJ * ZJ) : 0;
        return {
          xmin: XJ,
          xmax: AJ,
          a: hJ,
          b: (FJ - hJ * ZJ) / cJ
        }
      },
      SJ = function(JJ, cJ) {
        return GJ(JJ) && GJ(cJ) ? JJ - cJ : UJ()(JJ) && UJ()(cJ) ? JJ.localeCompare(cJ) : JJ instanceof Date && cJ instanceof Date ? JJ.getTime() - cJ.getTime() : String(JJ).localeCompare(String(cJ))
      }
  },
  5343: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => FJ
    });
    var FJ = {
      isSsr: !("undefined" !== typeof window && window.document && window.document.createElement && window.setTimeout),
      get: function(JJ) {
        return FJ[JJ]
      },
      set: function(JJ, cJ) {
        if ("string" === typeof JJ) FJ[JJ] = cJ;
        else {
          var ZJ = Object.keys(JJ);
          ZJ && ZJ.length && ZJ.forEach((function(cJ) {
            FJ[cJ] = JJ[cJ]
          }))
        }
      }
    }
  },
  5598: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => FJ
    });
    var FJ = function(JJ, cJ) {
      var ZJ = JJ.alwaysShow,
        FJ = JJ.ifOverflow;
      return ZJ && (FJ = "extendDomain"), FJ === cJ
    }
  },
  4794: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => FJ
    });
    var FJ = function(JJ, cJ) {
      for (var ZJ = arguments.length, FJ = new Array(ZJ > 2 ? ZJ - 2 : 0), UJ = 2; UJ < ZJ; UJ++) FJ[UJ - 2] = arguments[UJ]
    }
  },
  5590: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => AJ,
      i: () => DJ,
      m: () => jJ
    });
    ZJ(4786), ZJ(47), ZJ(4641);

    function FJ(JJ) {
      return FJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, FJ(JJ)
    }

    function UJ(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function eJ(JJ) {
      for (var cJ = 1; cJ < arguments.length; cJ++) {
        var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
        cJ % 2 ? UJ(Object(ZJ), !0).forEach((function(cJ) {
          XJ(JJ, cJ, ZJ[cJ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : UJ(Object(ZJ)).forEach((function(cJ) {
          Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
        }))
      }
      return JJ
    }

    function XJ(JJ, cJ, ZJ) {
      return (cJ = function(JJ) {
        var cJ = function(JJ, cJ) {
          if ("object" != FJ(JJ) || !JJ) return JJ;
          var ZJ = JJ[Symbol.toPrimitive];
          if (void 0 !== ZJ) {
            var UJ = ZJ.call(JJ, cJ || "default");
            if ("object" != FJ(UJ)) return UJ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === cJ ? String : Number)(JJ)
        }(JJ, "string");
        return "symbol" == FJ(cJ) ? cJ : cJ + ""
      }(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }
    var AJ = Math.PI / 180,
      qJ = function(JJ) {
        return 180 * JJ / Math.PI
      },
      jJ = function(JJ, cJ, ZJ, FJ) {
        return {
          x: JJ + Math.cos(-AJ * FJ) * ZJ,
          y: cJ + Math.sin(-AJ * FJ) * ZJ
        }
      },
      YJ = function(JJ, cJ) {
        var ZJ = JJ.x,
          FJ = JJ.y,
          UJ = cJ.cx,
          eJ = cJ.cy,
          XJ = function(JJ, cJ) {
            var ZJ = JJ.x,
              FJ = JJ.y,
              UJ = cJ.x,
              eJ = cJ.y;
            return Math.sqrt(Math.pow(ZJ - UJ, 2) + Math.pow(FJ - eJ, 2))
          }({
            x: ZJ,
            y: FJ
          }, {
            x: UJ,
            y: eJ
          });
        if (XJ <= 0) return {
          radius: XJ
        };
        var AJ = (ZJ - UJ) / XJ,
          jJ = Math.acos(AJ);
        return FJ > eJ && (jJ = 2 * Math.PI - jJ), {
          radius: XJ,
          angle: qJ(jJ),
          angleInRadian: jJ
        }
      },
      hJ = function(JJ, cJ) {
        var ZJ = cJ.startAngle,
          FJ = cJ.endAngle,
          UJ = Math.floor(ZJ / 360),
          eJ = Math.floor(FJ / 360);
        return JJ + 360 * Math.min(UJ, eJ)
      },
      DJ = function(JJ, cJ) {
        var ZJ = JJ.x,
          FJ = JJ.y,
          UJ = YJ({
            x: ZJ,
            y: FJ
          }, cJ),
          XJ = UJ.radius,
          AJ = UJ.angle,
          qJ = cJ.innerRadius,
          jJ = cJ.outerRadius;
        if (XJ < qJ || XJ > jJ) return !1;
        if (0 === XJ) return !0;
        var DJ, sJ = function(JJ) {
            var cJ = JJ.startAngle,
              ZJ = JJ.endAngle,
              FJ = Math.floor(cJ / 360),
              UJ = Math.floor(ZJ / 360),
              eJ = Math.min(FJ, UJ);
            return {
              startAngle: cJ - 360 * eJ,
              endAngle: ZJ - 360 * eJ
            }
          }(cJ),
          nJ = sJ.startAngle,
          GJ = sJ.endAngle,
          fJ = AJ;
        if (nJ <= GJ) {
          for (; fJ > GJ;) fJ -= 360;
          for (; fJ < nJ;) fJ += 360;
          DJ = fJ >= nJ && fJ <= GJ
        } else {
          for (; fJ > nJ;) fJ -= 360;
          for (; fJ < GJ;) fJ += 360;
          DJ = fJ >= GJ && fJ <= nJ
        }
        return DJ ? eJ(eJ({}, cJ), {}, {
          radius: XJ,
          angle: hJ(fJ, cJ)
        }) : null
      }
  },
  4797: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => HJ,
      f: () => IJ,
      g: () => MJ,
      k: () => VJ,
      m: () => dJ,
      n: () => gJ,
      r: () => PJ,
      t: () => zJ,
      v: () => pJ,
      y: () => bJ
    });
    var FJ = ZJ(4561),
      UJ = ZJ.n(FJ),
      eJ = ZJ(4786),
      XJ = ZJ.n(eJ),
      AJ = ZJ(4545),
      qJ = ZJ.n(AJ),
      jJ = ZJ(4641),
      YJ = ZJ.n(jJ),
      hJ = ZJ(4480),
      DJ = ZJ.n(hJ),
      sJ = ZJ(47),
      nJ = ZJ(4799),
      GJ = ZJ(4543),
      fJ = ZJ(4812),
      xJ = ZJ(4817),
      rJ = ["children"],
      vJ = ["children"];

    function mJ(JJ, cJ) {
      if (null == JJ) return {};
      var ZJ, FJ, UJ = function(JJ, cJ) {
        if (null == JJ) return {};
        var ZJ = {};
        for (var FJ in JJ)
          if (Object.prototype.hasOwnProperty.call(JJ, FJ)) {
            if (cJ.indexOf(FJ) >= 0) continue;
            ZJ[FJ] = JJ[FJ]
          } return ZJ
      }(JJ, cJ);
      if (Object.getOwnPropertySymbols) {
        var eJ = Object.getOwnPropertySymbols(JJ);
        for (FJ = 0; FJ < eJ.length; FJ++) ZJ = eJ[FJ], cJ.indexOf(ZJ) >= 0 || Object.prototype.propertyIsEnumerable.call(JJ, ZJ) && (UJ[ZJ] = JJ[ZJ])
      }
      return UJ
    }

    function QJ(JJ) {
      return QJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, QJ(JJ)
    }
    var EJ = {
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
      VJ = function(JJ) {
        return "string" === typeof JJ ? JJ : JJ ? JJ.displayName || JJ.name || "Component" : ""
      },
      KJ = null,
      yJ = null,
      SJ = function JJ(cJ) {
        if (cJ === KJ && Array.isArray(yJ)) return yJ;
        var ZJ = [];
        return sJ.Children.forEach(cJ, (function(cJ) {
          XJ()(cJ) || ((0, nJ.isFragment)(cJ) ? ZJ = ZJ.concat(JJ(cJ.props.children)) : ZJ.push(cJ))
        })), yJ = ZJ, KJ = cJ, ZJ
      };

    function IJ(JJ, cJ) {
      var ZJ = [],
        FJ = [];
      return FJ = Array.isArray(cJ) ? cJ.map((function(JJ) {
        return VJ(JJ)
      })) : [VJ(cJ)], SJ(JJ).forEach((function(JJ) {
        var cJ = UJ()(JJ, "type.displayName") || UJ()(JJ, "type.name"); - 1 !== FJ.indexOf(cJ) && ZJ.push(JJ)
      })), ZJ
    }

    function MJ(JJ, cJ) {
      var ZJ = IJ(JJ, cJ);
      return ZJ && ZJ[0]
    }
    var bJ = function(JJ) {
        if (!JJ || !JJ.props) return !1;
        var cJ = JJ.props,
          ZJ = cJ.width,
          FJ = cJ.height;
        return !(!(0, GJ.C)(ZJ) || ZJ <= 0 || !(0, GJ.C)(FJ) || FJ <= 0)
      },
      wJ = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"],
      WJ = function(JJ) {
        return JJ && JJ.type && qJ()(JJ.type) && wJ.indexOf(JJ.type) >= 0
      },
      gJ = function(JJ) {
        return JJ && "object" === QJ(JJ) && "clipDot" in JJ
      },
      HJ = function(JJ, cJ, ZJ) {
        if (!JJ || "function" === typeof JJ || "boolean" === typeof JJ) return null;
        var FJ = JJ;
        if ((0, sJ.isValidElement)(JJ) && (FJ = JJ.props), !DJ()(FJ)) return null;
        var UJ = {};
        return Object.keys(FJ).forEach((function(JJ) {
          var eJ;
          (function(JJ, cJ, ZJ, FJ) {
            var UJ, eJ = null !== (UJ = null === xJ.d || void 0 === xJ.d ? void 0 : xJ.d[FJ]) && void 0 !== UJ ? UJ : [];
            return cJ.startsWith("data-") || !YJ()(JJ) && (FJ && eJ.includes(cJ) || xJ.h.includes(cJ)) || ZJ && xJ.b.includes(cJ)
          })(null === (eJ = FJ) || void 0 === eJ ? void 0 : eJ[JJ], JJ, cJ, ZJ) && (UJ[JJ] = FJ[JJ])
        })), UJ
      },
      PJ = function JJ(cJ, ZJ) {
        if (cJ === ZJ) return !0;
        var FJ = sJ.Children.count(cJ);
        if (FJ !== sJ.Children.count(ZJ)) return !1;
        if (0 === FJ) return !0;
        if (1 === FJ) return kJ(Array.isArray(cJ) ? cJ[0] : cJ, Array.isArray(ZJ) ? ZJ[0] : ZJ);
        for (var UJ = 0; UJ < FJ; UJ++) {
          var eJ = cJ[UJ],
            XJ = ZJ[UJ];
          if (Array.isArray(eJ) || Array.isArray(XJ)) {
            if (!JJ(eJ, XJ)) return !1
          } else if (!kJ(eJ, XJ)) return !1
        }
        return !0
      },
      kJ = function(JJ, cJ) {
        if (XJ()(JJ) && XJ()(cJ)) return !0;
        if (!XJ()(JJ) && !XJ()(cJ)) {
          var ZJ = JJ.props || {},
            FJ = ZJ.children,
            UJ = mJ(ZJ, rJ),
            eJ = cJ.props || {},
            AJ = eJ.children,
            qJ = mJ(eJ, vJ);
          return FJ && AJ ? (0, fJ.e)(UJ, qJ) && PJ(FJ, AJ) : !FJ && !AJ && (0, fJ.e)(UJ, qJ)
        }
        return !1
      },
      pJ = function(JJ, cJ) {
        var ZJ = [],
          FJ = {};
        return SJ(JJ).forEach((function(JJ, UJ) {
          if (WJ(JJ)) ZJ.push(JJ);
          else if (JJ) {
            var eJ = VJ(JJ.type),
              XJ = cJ[eJ] || {},
              AJ = XJ.handler,
              qJ = XJ.once;
            if (AJ && (!qJ || !FJ[eJ])) {
              var jJ = AJ(JJ, eJ, UJ);
              ZJ.push(jJ), FJ[eJ] = !0
            }
          }
        })), ZJ
      },
      dJ = function(JJ) {
        var cJ = JJ && JJ.type;
        return cJ && EJ[cJ] ? EJ[cJ] : null
      },
      zJ = function(JJ, cJ) {
        return SJ(cJ).indexOf(JJ)
      }
  },
  4812: (JJ, cJ, ZJ) => {
    function FJ(JJ, cJ) {
      for (var ZJ in JJ)
        if ({}.hasOwnProperty.call(JJ, ZJ) && (!{}.hasOwnProperty.call(cJ, ZJ) || JJ[ZJ] !== cJ[ZJ])) return !1;
      for (var FJ in cJ)
        if ({}.hasOwnProperty.call(cJ, FJ) && !{}.hasOwnProperty.call(JJ, FJ)) return !1;
      return !0
    }
    ZJ.d(cJ, {
      e: () => FJ
    })
  },
  5575: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => YJ
    });
    var FJ = ZJ(5406),
      UJ = ZJ(5497),
      eJ = ZJ(4797);

    function XJ(JJ) {
      return XJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, XJ(JJ)
    }

    function AJ(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function qJ(JJ) {
      for (var cJ = 1; cJ < arguments.length; cJ++) {
        var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
        cJ % 2 ? AJ(Object(ZJ), !0).forEach((function(cJ) {
          jJ(JJ, cJ, ZJ[cJ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : AJ(Object(ZJ)).forEach((function(cJ) {
          Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
        }))
      }
      return JJ
    }

    function jJ(JJ, cJ, ZJ) {
      return (cJ = function(JJ) {
        var cJ = function(JJ, cJ) {
          if ("object" != XJ(JJ) || !JJ) return JJ;
          var ZJ = JJ[Symbol.toPrimitive];
          if (void 0 !== ZJ) {
            var FJ = ZJ.call(JJ, cJ || "default");
            if ("object" != XJ(FJ)) return FJ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === cJ ? String : Number)(JJ)
        }(JJ, "string");
        return "symbol" == XJ(cJ) ? cJ : cJ + ""
      }(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }
    var YJ = function(JJ) {
      var cJ = JJ.children,
        ZJ = JJ.formattedGraphicalItems,
        XJ = JJ.legendWidth,
        AJ = JJ.legendContent,
        jJ = (0, eJ.g)(cJ, FJ.c);
      if (!jJ) return null;
      var YJ, hJ = FJ.c.defaultProps,
        DJ = void 0 !== hJ ? qJ(qJ({}, hJ), jJ.props) : {};
      return YJ = jJ.props && jJ.props.payload ? jJ.props && jJ.props.payload : "children" === AJ ? (ZJ || []).reduce((function(JJ, cJ) {
        var ZJ = cJ.item,
          FJ = cJ.props,
          UJ = FJ.sectors || FJ.data || [];
        return JJ.concat(UJ.map((function(JJ) {
          return {
            type: jJ.props.iconType || ZJ.props.legendType,
            value: JJ.name,
            color: JJ.fill,
            payload: JJ
          }
        })))
      }), []) : (ZJ || []).map((function(JJ) {
        var cJ = JJ.item,
          ZJ = cJ.type.defaultProps,
          FJ = void 0 !== ZJ ? qJ(qJ({}, ZJ), cJ.props) : {},
          eJ = FJ.dataKey,
          XJ = FJ.name,
          AJ = FJ.legendType;
        return {
          inactive: FJ.hide,
          dataKey: eJ,
          type: DJ.iconType || AJ || "square",
          color: (0, UJ.Q)(cJ),
          value: XJ || eJ,
          payload: FJ
        }
      })), qJ(qJ(qJ({}, DJ), FJ.c.getWithHeight(jJ, XJ)), {}, {
        payload: YJ,
        item: jJ
      })
    }
  },
  5347: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => AJ
    });
    var FJ = ZJ(5353),
      UJ = ZJ.n(FJ),
      eJ = ZJ(4641),
      XJ = ZJ.n(eJ);

    function AJ(JJ, cJ, ZJ) {
      return !0 === cJ ? UJ()(JJ, ZJ) : XJ()(cJ) ? UJ()(JJ, cJ) : JJ
    }
  },
  4817: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => YJ,
      d: () => jJ,
      h: () => AJ,
      k: () => hJ,
      n: () => DJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(4480),
      eJ = ZJ.n(UJ);

    function XJ(JJ) {
      return XJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, XJ(JJ)
    }
    var AJ = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "Fs", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"],
      qJ = ["points", "pathLength"],
      jJ = {
        svg: ["viewBox", "children"],
        polygon: qJ,
        polyline: qJ
      },
      YJ = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"],
      hJ = function(JJ, cJ) {
        if (!JJ || "function" === typeof JJ || "boolean" === typeof JJ) return null;
        var ZJ = JJ;
        if ((0, FJ.isValidElement)(JJ) && (ZJ = JJ.props), !eJ()(ZJ)) return null;
        var UJ = {};
        return Object.keys(ZJ).forEach((function(JJ) {
          YJ.includes(JJ) && (UJ[JJ] = cJ || function(cJ) {
            return ZJ[JJ](ZJ, cJ)
          })
        })), UJ
      },
      DJ = function(JJ, cJ, ZJ) {
        if (!eJ()(JJ) || "object" !== XJ(JJ)) return null;
        var FJ = null;
        return Object.keys(JJ).forEach((function(UJ) {
          var eJ = JJ[UJ];
          YJ.includes(UJ) && "function" === typeof eJ && (FJ || (FJ = {}), FJ[UJ] = function(JJ, cJ, ZJ) {
            return function(FJ) {
              return JJ(cJ, ZJ, FJ), null
            }
          }(eJ, cJ, ZJ))
        })), FJ
      }
  },
  4807: (JJ, cJ) => {
    var ZJ, FJ = Symbol.for("react.element"),
      UJ = Symbol.for("react.portal"),
      eJ = Symbol.for("react.fragment"),
      XJ = Symbol.for("react.strict_mode"),
      AJ = Symbol.for("react.profiler"),
      qJ = Symbol.for("react.provider"),
      jJ = Symbol.for("react.context"),
      YJ = Symbol.for("react.server_context"),
      hJ = Symbol.for("react.forward_ref"),
      DJ = Symbol.for("react.suspense"),
      sJ = Symbol.for("react.suspense_list"),
      nJ = Symbol.for("react.memo"),
      GJ = Symbol.for("react.lazy"),
      fJ = Symbol.for("react.offscreen");

    function xJ(JJ) {
      if ("object" === typeof JJ && null !== JJ) {
        var cJ = JJ.$$typeof;
        switch (cJ) {
          case FJ:
            switch (JJ = JJ.type) {
              case eJ:
              case AJ:
              case XJ:
              case DJ:
              case sJ:
                return JJ;
              default:
                switch (JJ = JJ && JJ.$$typeof) {
                  case YJ:
                  case jJ:
                  case hJ:
                  case GJ:
                  case nJ:
                  case qJ:
                    return JJ;
                  default:
                    return cJ
                }
            }
          case UJ:
            return cJ
        }
      }
    }
    ZJ = Symbol.for("react.module.reference"), cJ.isFragment = function(JJ) {
      return xJ(JJ) === eJ
    }
  },
  4799: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ(4807)
  },
  4468: (JJ, cJ, ZJ) => {
    function FJ(JJ) {
      var cJ, ZJ, UJ = "";
      if ("string" == typeof JJ || "number" == typeof JJ) UJ += JJ;
      else if ("object" == typeof JJ)
        if (Array.isArray(JJ)) {
          var eJ = JJ.length;
          for (cJ = 0; cJ < eJ; cJ++) JJ[cJ] && (ZJ = FJ(JJ[cJ])) && (UJ && (UJ += " "), UJ += ZJ)
        } else
          for (ZJ in JJ) JJ[ZJ] && (UJ && (UJ += " "), UJ += ZJ);
      return UJ
    }
    ZJ.d(cJ, {
      d: () => UJ
    });
    const UJ = function() {
      for (var JJ, cJ, ZJ = 0, UJ = "", eJ = arguments.length; ZJ < eJ; ZJ++)(JJ = arguments[ZJ]) && (cJ = FJ(JJ)) && (UJ && (UJ += " "), UJ += cJ);
      return UJ
    }
  },
  5502: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => eJ,
      d: () => AJ
    });
    var FJ = ZJ(5507),
      UJ = ZJ(5509);

    function eJ() {
      var JJ, cJ, ZJ = (0, UJ.b)().unknown(void 0),
        XJ = ZJ.domain,
        AJ = ZJ.range,
        qJ = 0,
        jJ = 1,
        YJ = !1,
        hJ = 0,
        DJ = 0,
        sJ = .5;

      function nJ() {
        var ZJ = XJ().length,
          FJ = jJ < qJ,
          UJ = FJ ? jJ : qJ,
          eJ = FJ ? qJ : jJ;
        JJ = (eJ - UJ) / Math.max(1, ZJ - hJ + 2 * DJ), YJ && (JJ = Math.floor(JJ)), UJ += (eJ - UJ - JJ * (ZJ - hJ)) * sJ, cJ = JJ * (1 - hJ), YJ && (UJ = Math.round(UJ), cJ = Math.round(cJ));
        var nJ = function(JJ, cJ, ZJ) {
          JJ = +JJ, cJ = +cJ, ZJ = (UJ = arguments.length) < 2 ? (cJ = JJ, JJ = 0, 1) : UJ < 3 ? 1 : +ZJ;
          for (var FJ = -1, UJ = 0 | Math.max(0, Math.ceil((cJ - JJ) / ZJ)), eJ = new Array(UJ); ++FJ < UJ;) eJ[FJ] = JJ + FJ * ZJ;
          return eJ
        }(ZJ).map((function(cJ) {
          return UJ + JJ * cJ
        }));
        return AJ(FJ ? nJ.reverse() : nJ)
      }
      return delete ZJ.unknown, ZJ.domain = function(JJ) {
        return arguments.length ? (XJ(JJ), nJ()) : XJ()
      }, ZJ.range = function(JJ) {
        return arguments.length ? ([qJ, jJ] = JJ, qJ = +qJ, jJ = +jJ, nJ()) : [qJ, jJ]
      }, ZJ.rangeRound = function(JJ) {
        return [qJ, jJ] = JJ, qJ = +qJ, jJ = +jJ, YJ = !0, nJ()
      }, ZJ.bandwidth = function() {
        return cJ
      }, ZJ.step = function() {
        return JJ
      }, ZJ.round = function(JJ) {
        return arguments.length ? (YJ = !!JJ, nJ()) : YJ
      }, ZJ.padding = function(JJ) {
        return arguments.length ? (hJ = Math.min(1, DJ = +JJ), nJ()) : hJ
      }, ZJ.paddingInner = function(JJ) {
        return arguments.length ? (hJ = Math.min(1, JJ), nJ()) : hJ
      }, ZJ.paddingOuter = function(JJ) {
        return arguments.length ? (DJ = +JJ, nJ()) : DJ
      }, ZJ.align = function(JJ) {
        return arguments.length ? (sJ = Math.max(0, Math.min(1, JJ)), nJ()) : sJ
      }, ZJ.copy = function() {
        return eJ(XJ(), [qJ, jJ]).round(YJ).paddingInner(hJ).paddingOuter(DJ).align(sJ)
      }, FJ.g.apply(nJ(), arguments)
    }

    function XJ(JJ) {
      var cJ = JJ.copy;
      return JJ.padding = JJ.paddingOuter, delete JJ.paddingInner, delete JJ.paddingOuter, JJ.copy = function() {
        return XJ(cJ())
      }, JJ
    }

    function AJ() {
      return XJ(eJ.apply(null, arguments).paddingInner(1))
    }
  },
  5507: (JJ, cJ, ZJ) => {
    function FJ(JJ, cJ) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(JJ);
          break;
        default:
          this.range(cJ).domain(JJ)
      }
      return this
    }

    function UJ(JJ, cJ) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          "function" === typeof JJ ? this.interpolator(JJ) : this.range(JJ);
          break;
        default:
          this.domain(JJ), "function" === typeof cJ ? this.interpolator(cJ) : this.range(cJ)
      }
      return this
    }
    ZJ.d(cJ, {
      c: () => UJ,
      g: () => FJ
    })
  },
  5509: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => YJ,
      f: () => jJ
    });
    class FJ extends Map {
      constructor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AJ;
        if (super(), Object.defineProperties(this, {
            _intern: {
              value: new Map
            },
            _key: {
              value: cJ
            }
          }), null != JJ)
          for (const [ZJ, FJ] of JJ) this.set(ZJ, FJ)
      }
      get(JJ) {
        return super.get(UJ(this, JJ))
      }
      has(JJ) {
        return super.has(UJ(this, JJ))
      }
      set(JJ, cJ) {
        return super.set(eJ(this, JJ), cJ)
      }
      delete(JJ) {
        return super.delete(XJ(this, JJ))
      }
    }
    Set;

    function UJ(JJ, cJ) {
      let {
        _intern: ZJ,
        _key: FJ
      } = JJ;
      const UJ = FJ(cJ);
      return ZJ.has(UJ) ? ZJ.get(UJ) : cJ
    }

    function eJ(JJ, cJ) {
      let {
        _intern: ZJ,
        _key: FJ
      } = JJ;
      const UJ = FJ(cJ);
      return ZJ.has(UJ) ? ZJ.get(UJ) : (ZJ.set(UJ, cJ), cJ)
    }

    function XJ(JJ, cJ) {
      let {
        _intern: ZJ,
        _key: FJ
      } = JJ;
      const UJ = FJ(cJ);
      return ZJ.has(UJ) && (cJ = ZJ.get(UJ), ZJ.delete(UJ)), cJ
    }

    function AJ(JJ) {
      return null !== JJ && "object" === typeof JJ ? JJ.valueOf() : JJ
    }
    var qJ = ZJ(5507);
    const jJ = Symbol("implicit");

    function YJ() {
      var JJ = new FJ,
        cJ = [],
        ZJ = [],
        UJ = jJ;

      function eJ(FJ) {
        let eJ = JJ.get(FJ);
        if (void 0 === eJ) {
          if (UJ !== jJ) return UJ;
          JJ.set(FJ, eJ = cJ.push(FJ) - 1)
        }
        return ZJ[eJ % ZJ.length]
      }
      return eJ.domain = function(ZJ) {
        if (!arguments.length) return cJ.slice();
        cJ = [], JJ = new FJ;
        for (const FJ of ZJ) JJ.has(FJ) || JJ.set(FJ, cJ.push(FJ) - 1);
        return eJ
      }, eJ.range = function(JJ) {
        return arguments.length ? (ZJ = Array.from(JJ), eJ) : ZJ.slice()
      }, eJ.unknown = function(JJ) {
        return arguments.length ? (UJ = JJ, eJ) : UJ
      }, eJ.copy = function() {
        return YJ(cJ, ZJ).unknown(UJ)
      }, qJ.g.apply(eJ, arguments), eJ
    }
  },
  5583: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => FJ
    });
    Array.prototype.slice;

    function FJ(JJ) {
      return "object" === typeof JJ && "length" in JJ ? JJ : Array.from(JJ)
    }
  },
  5461: (JJ, cJ, ZJ) => {
    function FJ(JJ) {
      return function() {
        return JJ
      }
    }
    ZJ.d(cJ, {
      c: () => FJ
    })
  },
  5463: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => jJ
    });
    const FJ = Math.PI,
      UJ = 2 * FJ,
      eJ = 1e-6,
      XJ = UJ - eJ;

    function AJ(JJ) {
      this._ += JJ[0];
      for (let cJ = 1, ZJ = JJ.length; cJ < ZJ; ++cJ) this._ += arguments[cJ] + JJ[cJ]
    }
    class qJ {
      constructor(JJ) {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == JJ ? AJ : function(JJ) {
          let cJ = Math.floor(JJ);
          if (!(cJ >= 0)) throw new Error(`invalid digits: ${JJ}`);
          if (cJ > 15) return AJ;
          const ZJ = 10 ** cJ;
          return function(JJ) {
            this._ += JJ[0];
            for (let cJ = 1, FJ = JJ.length; cJ < FJ; ++cJ) this._ += Math.round(arguments[cJ] * ZJ) / ZJ + JJ[cJ]
          }
        }(JJ)
      }
      moveTo(JJ, cJ) {
        this._append`M${this._x0=this._x1=+JJ},${this._y0=this._y1=+cJ}`
      }
      closePath() {
        null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`)
      }
      lineTo(JJ, cJ) {
        this._append`L${this._x1=+JJ},${this._y1=+cJ}`
      }
      quadraticCurveTo(JJ, cJ, ZJ, FJ) {
        this._append`Q${+JJ},${+cJ},${this._x1=+ZJ},${this._y1=+FJ}`
      }
      bezierCurveTo(JJ, cJ, ZJ, FJ, UJ, eJ) {
        this._append`C${+JJ},${+cJ},${+ZJ},${+FJ},${this._x1=+UJ},${this._y1=+eJ}`
      }
      arcTo(JJ, cJ, ZJ, UJ, XJ) {
        if (JJ = +JJ, cJ = +cJ, ZJ = +ZJ, UJ = +UJ, (XJ = +XJ) < 0) throw new Error(`negative radius: ${XJ}`);
        let AJ = this._x1,
          qJ = this._y1,
          jJ = ZJ - JJ,
          YJ = UJ - cJ,
          hJ = AJ - JJ,
          DJ = qJ - cJ,
          sJ = hJ * hJ + DJ * DJ;
        if (null === this._x1) this._append`M${this._x1=JJ},${this._y1=cJ}`;
        else if (sJ > eJ)
          if (Math.abs(DJ * jJ - YJ * hJ) > eJ && XJ) {
            let nJ = ZJ - AJ,
              GJ = UJ - qJ,
              fJ = jJ * jJ + YJ * YJ,
              xJ = nJ * nJ + GJ * GJ,
              rJ = Math.sqrt(fJ),
              vJ = Math.sqrt(sJ),
              mJ = XJ * Math.tan((FJ - Math.acos((fJ + sJ - xJ) / (2 * rJ * vJ))) / 2),
              QJ = mJ / vJ,
              EJ = mJ / rJ;
            Math.abs(QJ - 1) > eJ && this._append`L${JJ+QJ*hJ},${cJ+QJ*DJ}`, this._append`A${XJ},${XJ},0,0,${+(DJ*nJ>hJ*GJ)},${this._x1=JJ+EJ*jJ},${this._y1=cJ+EJ*YJ}`
          } else this._append`L${this._x1=JJ},${this._y1=cJ}`;
        else;
      }
      arc(JJ, cJ, ZJ, AJ, qJ, jJ) {
        if (JJ = +JJ, cJ = +cJ, jJ = !!jJ, (ZJ = +ZJ) < 0) throw new Error(`negative radius: ${ZJ}`);
        let YJ = ZJ * Math.cos(AJ),
          hJ = ZJ * Math.sin(AJ),
          DJ = JJ + YJ,
          sJ = cJ + hJ,
          nJ = 1 ^ jJ,
          GJ = jJ ? AJ - qJ : qJ - AJ;
        null === this._x1 ? this._append`M${DJ},${sJ}` : (Math.abs(this._x1 - DJ) > eJ || Math.abs(this._y1 - sJ) > eJ) && this._append`L${DJ},${sJ}`, ZJ && (GJ < 0 && (GJ = GJ % UJ + UJ), GJ > XJ ? this._append`A${ZJ},${ZJ},0,1,${nJ},${JJ-YJ},${cJ-hJ}A${ZJ},${ZJ},0,1,${nJ},${this._x1=DJ},${this._y1=sJ}` : GJ > eJ && this._append`A${ZJ},${ZJ},0,${+(GJ>=FJ)},${nJ},${this._x1=JJ+ZJ*Math.cos(qJ)},${this._y1=cJ+ZJ*Math.sin(qJ)}`)
      }
      rect(JJ, cJ, ZJ, FJ) {
        this._append`M${this._x0=this._x1=+JJ},${this._y0=this._y1=+cJ}h${ZJ=+ZJ}v${+FJ}h${-ZJ}Z`
      }
      toString() {
        return this._
      }
    }

    function jJ(JJ) {
      let cJ = 3;
      return JJ.digits = function(ZJ) {
        if (!arguments.length) return cJ;
        if (null == ZJ) cJ = null;
        else {
          const JJ = Math.floor(ZJ);
          if (!(JJ >= 0)) throw new RangeError(`invalid digits: ${ZJ}`);
          cJ = JJ
        }
        return JJ
      }, () => new qJ(cJ)
    }
    qJ.prototype
  },
  5319: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => eJ
    });
    var FJ = !0,
      UJ = "Invariant failed";

    function eJ(JJ, cJ) {
      if (!JJ) {
        if (FJ) throw new Error(UJ);
        var ZJ = "function" === typeof cJ ? cJ() : cJ,
          eJ = ZJ ? "".concat(UJ, ": ").concat(ZJ) : UJ;
        throw new Error(eJ)
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);