/*! For license information please see cwj32u.132.0c3f5e7a.chunk.js.LICENSE.txt */
export const id = 132;
export const ids = [132];
export const modules = {
  6731: function(HH, BH, LH) {
    var AH;
    ! function() {
      var rH, SH = 1e9,
        hH = {
          precision: 20,
          rounding: 4,
          toExpNeg: -7,
          toExpPos: 21,
          LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
        },
        tH = !0,
        zH = "[DecimalError] ",
        CH = zH + "Invalid argument: ",
        EH = zH + "Exponent out of range: ",
        XH = Math.floor,
        GH = Math.pow,
        YH = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        uH = 1e7,
        QH = 9007199254740991,
        WH = XH(1286742750677284.5),
        MH = {};

      function xH(HH, BH) {
        var LH, AH, rH, SH, hH, zH, CH, EH, XH = HH.constructor,
          GH = XH.precision;
        if (!HH.s || !BH.s) return BH.s || (BH = new XH(HH)), tH ? oH(BH, GH) : BH;
        if (CH = HH.d, EH = BH.d, hH = HH.e, rH = BH.e, CH = CH.slice(), SH = hH - rH) {
          for (SH < 0 ? (AH = CH, SH = -SH, zH = EH.length) : (AH = EH, rH = hH, zH = CH.length), SH > (zH = (hH = Math.ceil(GH / 7)) > zH ? hH + 1 : zH + 1) && (SH = zH, AH.length = 1), AH.reverse(); SH--;) AH.push(0);
          AH.reverse()
        }
        for ((zH = CH.length) - (SH = EH.length) < 0 && (SH = zH, AH = EH, EH = CH, CH = AH), LH = 0; SH;) LH = (CH[--SH] = CH[SH] + EH[SH] + LH) / uH | 0, CH[SH] %= uH;
        for (LH && (CH.unshift(LH), ++rH), zH = CH.length; 0 == CH[--zH];) CH.pop();
        return BH.d = CH, BH.e = rH, tH ? oH(BH, GH) : BH
      }

      function vH(HH, BH, LH) {
        if (HH !== ~~HH || HH < BH || HH > LH) throw Error(CH + HH)
      }

      function PH(HH) {
        var BH, LH, AH, rH = HH.length - 1,
          SH = "",
          hH = HH[0];
        if (rH > 0) {
          for (SH += hH, BH = 1; BH < rH; BH++)(LH = 7 - (AH = HH[BH] + "").length) && (SH += bH(LH)), SH += AH;
          (LH = 7 - (AH = (hH = HH[BH]) + "").length) && (SH += bH(LH))
        } else if (0 === hH) return "0";
        for (; hH % 10 === 0;) hH /= 10;
        return SH + hH
      }
      MH.absoluteValue = MH.abs = function() {
        var HH = new this.constructor(this);
        return HH.s && (HH.s = 1), HH
      }, MH.comparedTo = MH.cmp = function(HH) {
        var BH, LH, AH, rH, SH = this;
        if (HH = new SH.constructor(HH), SH.s !== HH.s) return SH.s || -HH.s;
        if (SH.e !== HH.e) return SH.e > HH.e ^ SH.s < 0 ? 1 : -1;
        for (BH = 0, LH = (AH = SH.d.length) < (rH = HH.d.length) ? AH : rH; BH < LH; ++BH)
          if (SH.d[BH] !== HH.d[BH]) return SH.d[BH] > HH.d[BH] ^ SH.s < 0 ? 1 : -1;
        return AH === rH ? 0 : AH > rH ^ SH.s < 0 ? 1 : -1
      }, MH.decimalPlaces = MH.dp = function() {
        var HH = this,
          BH = HH.d.length - 1,
          LH = 7 * (BH - HH.e);
        if (BH = HH.d[BH])
          for (; BH % 10 == 0; BH /= 10) LH--;
        return LH < 0 ? 0 : LH
      }, MH.dividedBy = MH.div = function(HH) {
        return TH(this, new this.constructor(HH))
      }, MH.dividedToIntegerBy = MH.idiv = function(HH) {
        var BH = this.constructor;
        return oH(TH(this, new BH(HH), 0, 1), BH.precision)
      }, MH.equals = MH.eq = function(HH) {
        return !this.cmp(HH)
      }, MH.exponent = function() {
        return VH(this)
      }, MH.greaterThan = MH.gt = function(HH) {
        return this.cmp(HH) > 0
      }, MH.greaterThanOrEqualTo = MH.gte = function(HH) {
        return this.cmp(HH) >= 0
      }, MH.isInteger = MH.isint = function() {
        return this.e > this.d.length - 2
      }, MH.isNegative = MH.isneg = function() {
        return this.s < 0
      }, MH.isPositive = MH.ispos = function() {
        return this.s > 0
      }, MH.isZero = function() {
        return 0 === this.s
      }, MH.lessThan = MH.lt = function(HH) {
        return this.cmp(HH) < 0
      }, MH.lessThanOrEqualTo = MH.lte = function(HH) {
        return this.cmp(HH) < 1
      }, MH.logarithm = MH.log = function(HH) {
        var BH, LH = this,
          AH = LH.constructor,
          SH = AH.precision,
          hH = SH + 5;
        if (void 0 === HH) HH = new AH(10);
        else if ((HH = new AH(HH)).s < 1 || HH.eq(rH)) throw Error(zH + "NaN");
        if (LH.s < 1) throw Error(zH + (LH.s ? "NaN" : "-Infinity"));
        return LH.eq(rH) ? new AH(0) : (tH = !1, BH = TH(kH(LH, hH), kH(HH, hH), hH), tH = !0, oH(BH, SH))
      }, MH.minus = MH.sub = function(HH) {
        var BH = this;
        return HH = new BH.constructor(HH), BH.s == HH.s ? IH(BH, HH) : xH(BH, (HH.s = -HH.s, HH))
      }, MH.modulo = MH.mod = function(HH) {
        var BH, LH = this,
          AH = LH.constructor,
          rH = AH.precision;
        if (!(HH = new AH(HH)).s) throw Error(zH + "NaN");
        return LH.s ? (tH = !1, BH = TH(LH, HH, 0, 1).times(HH), tH = !0, LH.minus(BH)) : oH(new AH(LH), rH)
      }, MH.naturalExponential = MH.exp = function() {
        return UH(this)
      }, MH.naturalLogarithm = MH.ln = function() {
        return kH(this)
      }, MH.negated = MH.neg = function() {
        var HH = new this.constructor(this);
        return HH.s = -HH.s || 0, HH
      }, MH.plus = MH.add = function(HH) {
        var BH = this;
        return HH = new BH.constructor(HH), BH.s == HH.s ? xH(BH, HH) : IH(BH, (HH.s = -HH.s, HH))
      }, MH.precision = MH.sd = function(HH) {
        var BH, LH, AH, rH = this;
        if (void 0 !== HH && HH !== !!HH && 1 !== HH && 0 !== HH) throw Error(CH + HH);
        if (BH = VH(rH) + 1, LH = 7 * (AH = rH.d.length - 1) + 1, AH = rH.d[AH]) {
          for (; AH % 10 == 0; AH /= 10) LH--;
          for (AH = rH.d[0]; AH >= 10; AH /= 10) LH++
        }
        return HH && BH > LH ? BH : LH
      }, MH.squareRoot = MH.sqrt = function() {
        var HH, BH, LH, AH, rH, SH, hH, CH = this,
          EH = CH.constructor;
        if (CH.s < 1) {
          if (!CH.s) return new EH(0);
          throw Error(zH + "NaN")
        }
        for (HH = VH(CH), tH = !1, 0 == (rH = Math.sqrt(+CH)) || rH == 1 / 0 ? (((BH = PH(CH.d)).length + HH) % 2 == 0 && (BH += "0"), rH = Math.sqrt(BH), HH = XH((HH + 1) / 2) - (HH < 0 || HH % 2), AH = new EH(BH = rH == 1 / 0 ? "1e" + HH : (BH = rH.toExponential()).slice(0, BH.indexOf("e") + 1) + HH)) : AH = new EH(rH.toString()), rH = hH = (LH = EH.precision) + 3;;)
          if (AH = (SH = AH).plus(TH(CH, SH, hH + 2)).times(.5), PH(SH.d).slice(0, hH) === (BH = PH(AH.d)).slice(0, hH)) {
            if (BH = BH.slice(hH - 3, hH + 1), rH == hH && "4999" == BH) {
              if (oH(SH, LH + 1, 0), SH.times(SH).eq(CH)) {
                AH = SH;
                break
              }
            } else if ("9999" != BH) break;
            hH += 4
          } return tH = !0, oH(AH, LH)
      }, MH.times = MH.mul = function(HH) {
        var BH, LH, AH, rH, SH, hH, zH, CH, EH, XH = this,
          GH = XH.constructor,
          YH = XH.d,
          QH = (HH = new GH(HH)).d;
        if (!XH.s || !HH.s) return new GH(0);
        for (HH.s *= XH.s, LH = XH.e + HH.e, (CH = YH.length) < (EH = QH.length) && (SH = YH, YH = QH, QH = SH, hH = CH, CH = EH, EH = hH), SH = [], AH = hH = CH + EH; AH--;) SH.push(0);
        for (AH = EH; --AH >= 0;) {
          for (BH = 0, rH = CH + AH; rH > AH;) zH = SH[rH] + QH[AH] * YH[rH - AH - 1] + BH, SH[rH--] = zH % uH | 0, BH = zH / uH | 0;
          SH[rH] = (SH[rH] + BH) % uH | 0
        }
        for (; !SH[--hH];) SH.pop();
        return BH ? ++LH : SH.shift(), HH.d = SH, HH.e = LH, tH ? oH(HH, GH.precision) : HH
      }, MH.toDecimalPlaces = MH.todp = function(HH, BH) {
        var LH = this,
          AH = LH.constructor;
        return LH = new AH(LH), void 0 === HH ? LH : (vH(HH, 0, SH), void 0 === BH ? BH = AH.rounding : vH(BH, 0, 8), oH(LH, HH + VH(LH) + 1, BH))
      }, MH.toExponential = function(HH, BH) {
        var LH, AH = this,
          rH = AH.constructor;
        return void 0 === HH ? LH = fH(AH, !0) : (vH(HH, 0, SH), void 0 === BH ? BH = rH.rounding : vH(BH, 0, 8), LH = fH(AH = oH(new rH(AH), HH + 1, BH), !0, HH + 1)), LH
      }, MH.toFixed = function(HH, BH) {
        var LH, AH, rH = this,
          hH = rH.constructor;
        return void 0 === HH ? fH(rH) : (vH(HH, 0, SH), void 0 === BH ? BH = hH.rounding : vH(BH, 0, 8), LH = fH((AH = oH(new hH(rH), HH + VH(rH) + 1, BH)).abs(), !1, HH + VH(AH) + 1), rH.isneg() && !rH.isZero() ? "-" + LH : LH)
      }, MH.toInteger = MH.toint = function() {
        var HH = this,
          BH = HH.constructor;
        return oH(new BH(HH), VH(HH) + 1, BH.rounding)
      }, MH.toNumber = function() {
        return +this
      }, MH.toPower = MH.pow = function(HH) {
        var BH, LH, AH, SH, hH, CH, EH = this,
          GH = EH.constructor,
          YH = +(HH = new GH(HH));
        if (!HH.s) return new GH(rH);
        if (!(EH = new GH(EH)).s) {
          if (HH.s < 1) throw Error(zH + "Infinity");
          return EH
        }
        if (EH.eq(rH)) return EH;
        if (AH = GH.precision, HH.eq(rH)) return oH(EH, AH);
        if (CH = (BH = HH.e) >= (LH = HH.d.length - 1), hH = EH.s, CH) {
          if ((LH = YH < 0 ? -YH : YH) <= QH) {
            for (SH = new GH(rH), BH = Math.ceil(AH / 7 + 4), tH = !1; LH % 2 && lH((SH = SH.times(EH)).d, BH), 0 !== (LH = XH(LH / 2));) lH((EH = EH.times(EH)).d, BH);
            return tH = !0, HH.s < 0 ? new GH(rH).div(SH) : oH(SH, AH)
          }
        } else if (hH < 0) throw Error(zH + "NaN");
        return hH = hH < 0 && 1 & HH.d[Math.max(BH, LH)] ? -1 : 1, EH.s = 1, tH = !1, SH = HH.times(kH(EH, AH + 12)), tH = !0, (SH = UH(SH)).s = hH, SH
      }, MH.toPrecision = function(HH, BH) {
        var LH, AH, rH = this,
          hH = rH.constructor;
        return void 0 === HH ? AH = fH(rH, (LH = VH(rH)) <= hH.toExpNeg || LH >= hH.toExpPos) : (vH(HH, 1, SH), void 0 === BH ? BH = hH.rounding : vH(BH, 0, 8), AH = fH(rH = oH(new hH(rH), HH, BH), HH <= (LH = VH(rH)) || LH <= hH.toExpNeg, HH)), AH
      }, MH.toSignificantDigits = MH.tosd = function(HH, BH) {
        var LH = this.constructor;
        return void 0 === HH ? (HH = LH.precision, BH = LH.rounding) : (vH(HH, 1, SH), void 0 === BH ? BH = LH.rounding : vH(BH, 0, 8)), oH(new LH(this), HH, BH)
      }, MH.toString = MH.valueOf = MH.val = MH.toJSON = function() {
        var HH = this,
          BH = VH(HH),
          LH = HH.constructor;
        return fH(HH, BH <= LH.toExpNeg || BH >= LH.toExpPos)
      };
      var TH = function() {
        function HH(HH, BH) {
          var LH, AH = 0,
            rH = HH.length;
          for (HH = HH.slice(); rH--;) LH = HH[rH] * BH + AH, HH[rH] = LH % uH | 0, AH = LH / uH | 0;
          return AH && HH.unshift(AH), HH
        }

        function BH(HH, BH, LH, AH) {
          var rH, SH;
          if (LH != AH) SH = LH > AH ? 1 : -1;
          else
            for (rH = SH = 0; rH < LH; rH++)
              if (HH[rH] != BH[rH]) {
                SH = HH[rH] > BH[rH] ? 1 : -1;
                break
              } return SH
        }

        function LH(HH, BH, LH) {
          for (var AH = 0; LH--;) HH[LH] -= AH, AH = HH[LH] < BH[LH] ? 1 : 0, HH[LH] = AH * uH + HH[LH] - BH[LH];
          for (; !HH[0] && HH.length > 1;) HH.shift()
        }
        return function(AH, rH, SH, hH) {
          var tH, CH, EH, XH, GH, YH, QH, WH, MH, xH, vH, PH, TH, UH, OH, bH, kH, mH, IH = AH.constructor,
            fH = AH.s == rH.s ? 1 : -1,
            lH = AH.d,
            KH = rH.d;
          if (!AH.s) return new IH(AH);
          if (!rH.s) throw Error(zH + "Division by zero");
          for (CH = AH.e - rH.e, kH = KH.length, OH = lH.length, WH = (QH = new IH(fH)).d = [], EH = 0; KH[EH] == (lH[EH] || 0);) ++EH;
          if (KH[EH] > (lH[EH] || 0) && --CH, (PH = null == SH ? SH = IH.precision : hH ? SH + (VH(AH) - VH(rH)) + 1 : SH) < 0) return new IH(0);
          if (PH = PH / 7 + 2 | 0, EH = 0, 1 == kH)
            for (XH = 0, KH = KH[0], PH++;
              (EH < OH || XH) && PH--; EH++) TH = XH * uH + (lH[EH] || 0), WH[EH] = TH / KH | 0, XH = TH % KH | 0;
          else {
            for ((XH = uH / (KH[0] + 1) | 0) > 1 && (KH = HH(KH, XH), lH = HH(lH, XH), kH = KH.length, OH = lH.length), UH = kH, xH = (MH = lH.slice(0, kH)).length; xH < kH;) MH[xH++] = 0;
            (mH = KH.slice()).unshift(0), bH = KH[0], KH[1] >= uH / 2 && ++bH;
            do {
              XH = 0, (tH = BH(KH, MH, kH, xH)) < 0 ? (vH = MH[0], kH != xH && (vH = vH * uH + (MH[1] || 0)), (XH = vH / bH | 0) > 1 ? (XH >= uH && (XH = uH - 1), 1 == (tH = BH(GH = HH(KH, XH), MH, YH = GH.length, xH = MH.length)) && (XH--, LH(GH, kH < YH ? mH : KH, YH))) : (0 == XH && (tH = XH = 1), GH = KH.slice()), (YH = GH.length) < xH && GH.unshift(0), LH(MH, GH, xH), -1 == tH && (tH = BH(KH, MH, kH, xH = MH.length)) < 1 && (XH++, LH(MH, kH < xH ? mH : KH, xH)), xH = MH.length) : 0 === tH && (XH++, MH = [0]), WH[EH++] = XH, tH && MH[0] ? MH[xH++] = lH[UH] || 0 : (MH = [lH[UH]], xH = 1)
            } while ((UH++ < OH || void 0 !== MH[0]) && PH--)
          }
          return WH[0] || WH.shift(), QH.e = CH, oH(QH, hH ? SH + VH(QH) + 1 : SH)
        }
      }();

      function UH(HH, BH) {
        var LH, AH, SH, hH, zH, CH = 0,
          XH = 0,
          YH = HH.constructor,
          uH = YH.precision;
        if (VH(HH) > 16) throw Error(EH + VH(HH));
        if (!HH.s) return new YH(rH);
        for (null == BH ? (tH = !1, zH = uH) : zH = BH, hH = new YH(.03125); HH.abs().gte(.1);) HH = HH.times(hH), XH += 5;
        for (zH += Math.log(GH(2, XH)) / Math.LN10 * 2 + 5 | 0, LH = AH = SH = new YH(rH), YH.precision = zH;;) {
          if (AH = oH(AH.times(HH), zH), LH = LH.times(++CH), PH((hH = SH.plus(TH(AH, LH, zH))).d).slice(0, zH) === PH(SH.d).slice(0, zH)) {
            for (; XH--;) SH = oH(SH.times(SH), zH);
            return YH.precision = uH, null == BH ? (tH = !0, oH(SH, uH)) : SH
          }
          SH = hH
        }
      }

      function VH(HH) {
        for (var BH = 7 * HH.e, LH = HH.d[0]; LH >= 10; LH /= 10) BH++;
        return BH
      }

      function OH(HH, BH, LH) {
        if (BH > HH.LN10.sd()) throw tH = !0, LH && (HH.precision = LH), Error(zH + "LN10 precision limit exceeded");
        return oH(new HH(HH.LN10), BH)
      }

      function bH(HH) {
        for (var BH = ""; HH--;) BH += "0";
        return BH
      }

      function kH(HH, BH) {
        var LH, AH, SH, hH, CH, EH, XH, GH, YH, uH = 1,
          QH = HH,
          WH = QH.d,
          MH = QH.constructor,
          xH = MH.precision;
        if (QH.s < 1) throw Error(zH + (QH.s ? "NaN" : "-Infinity"));
        if (QH.eq(rH)) return new MH(0);
        if (null == BH ? (tH = !1, GH = xH) : GH = BH, QH.eq(10)) return null == BH && (tH = !0), OH(MH, GH);
        if (GH += 10, MH.precision = GH, AH = (LH = PH(WH)).charAt(0), hH = VH(QH), !(Math.abs(hH) < 15e14)) return XH = OH(MH, GH + 2, xH).times(hH + ""), QH = kH(new MH(AH + "." + LH.slice(1)), GH - 10).plus(XH), MH.precision = xH, null == BH ? (tH = !0, oH(QH, xH)) : QH;
        for (; AH < 7 && 1 != AH || 1 == AH && LH.charAt(1) > 3;) AH = (LH = PH((QH = QH.times(HH)).d)).charAt(0), uH++;
        for (hH = VH(QH), AH > 1 ? (QH = new MH("0." + LH), hH++) : QH = new MH(AH + "." + LH.slice(1)), EH = CH = QH = TH(QH.minus(rH), QH.plus(rH), GH), YH = oH(QH.times(QH), GH), SH = 3;;) {
          if (CH = oH(CH.times(YH), GH), PH((XH = EH.plus(TH(CH, new MH(SH), GH))).d).slice(0, GH) === PH(EH.d).slice(0, GH)) return EH = EH.times(2), 0 !== hH && (EH = EH.plus(OH(MH, GH + 2, xH).times(hH + ""))), EH = TH(EH, new MH(uH), GH), MH.precision = xH, null == BH ? (tH = !0, oH(EH, xH)) : EH;
          EH = XH, SH += 2
        }
      }

      function mH(HH, BH) {
        var LH, AH, rH;
        for ((LH = BH.indexOf(".")) > -1 && (BH = BH.replace(".", "")), (AH = BH.search(/e/i)) > 0 ? (LH < 0 && (LH = AH), LH += +BH.slice(AH + 1), BH = BH.substring(0, AH)) : LH < 0 && (LH = BH.length), AH = 0; 48 === BH.charCodeAt(AH);) ++AH;
        for (rH = BH.length; 48 === BH.charCodeAt(rH - 1);) --rH;
        if (BH = BH.slice(AH, rH)) {
          if (rH -= AH, LH = LH - AH - 1, HH.e = XH(LH / 7), HH.d = [], AH = (LH + 1) % 7, LH < 0 && (AH += 7), AH < rH) {
            for (AH && HH.d.push(+BH.slice(0, AH)), rH -= 7; AH < rH;) HH.d.push(+BH.slice(AH, AH += 7));
            AH = 7 - (BH = BH.slice(AH)).length
          } else AH -= rH;
          for (; AH--;) BH += "0";
          if (HH.d.push(+BH), tH && (HH.e > WH || HH.e < -WH)) throw Error(EH + LH)
        } else HH.s = 0, HH.e = 0, HH.d = [0];
        return HH
      }

      function oH(HH, BH, LH) {
        var AH, rH, SH, hH, zH, CH, YH, QH, MH = HH.d;
        for (hH = 1, SH = MH[0]; SH >= 10; SH /= 10) hH++;
        if ((AH = BH - hH) < 0) AH += 7, rH = BH, YH = MH[QH = 0];
        else {
          if ((QH = Math.ceil((AH + 1) / 7)) >= (SH = MH.length)) return HH;
          for (YH = SH = MH[QH], hH = 1; SH >= 10; SH /= 10) hH++;
          rH = (AH %= 7) - 7 + hH
        }
        if (void 0 !== LH && (zH = YH / (SH = GH(10, hH - rH - 1)) % 10 | 0, CH = BH < 0 || void 0 !== MH[QH + 1] || YH % SH, CH = LH < 4 ? (zH || CH) && (0 == LH || LH == (HH.s < 0 ? 3 : 2)) : zH > 5 || 5 == zH && (4 == LH || CH || 6 == LH && (AH > 0 ? rH > 0 ? YH / GH(10, hH - rH) : 0 : MH[QH - 1]) % 10 & 1 || LH == (HH.s < 0 ? 8 : 7))), BH < 1 || !MH[0]) return CH ? (SH = VH(HH), MH.length = 1, BH = BH - SH - 1, MH[0] = GH(10, (7 - BH % 7) % 7), HH.e = XH(-BH / 7) || 0) : (MH.length = 1, MH[0] = HH.e = HH.s = 0), HH;
        if (0 == AH ? (MH.length = QH, SH = 1, QH--) : (MH.length = QH + 1, SH = GH(10, 7 - AH), MH[QH] = rH > 0 ? (YH / GH(10, hH - rH) % GH(10, rH) | 0) * SH : 0), CH)
          for (;;) {
            if (0 == QH) {
              (MH[0] += SH) == uH && (MH[0] = 1, ++HH.e);
              break
            }
            if (MH[QH] += SH, MH[QH] != uH) break;
            MH[QH--] = 0, SH = 1
          }
        for (AH = MH.length; 0 === MH[--AH];) MH.pop();
        if (tH && (HH.e > WH || HH.e < -WH)) throw Error(EH + VH(HH));
        return HH
      }

      function IH(HH, BH) {
        var LH, AH, rH, SH, hH, zH, CH, EH, XH, GH, YH = HH.constructor,
          QH = YH.precision;
        if (!HH.s || !BH.s) return BH.s ? BH.s = -BH.s : BH = new YH(HH), tH ? oH(BH, QH) : BH;
        if (CH = HH.d, GH = BH.d, AH = BH.e, EH = HH.e, CH = CH.slice(), hH = EH - AH) {
          for ((XH = hH < 0) ? (LH = CH, hH = -hH, zH = GH.length) : (LH = GH, AH = EH, zH = CH.length), hH > (rH = Math.max(Math.ceil(QH / 7), zH) + 2) && (hH = rH, LH.length = 1), LH.reverse(), rH = hH; rH--;) LH.push(0);
          LH.reverse()
        } else {
          for ((XH = (rH = CH.length) < (zH = GH.length)) && (zH = rH), rH = 0; rH < zH; rH++)
            if (CH[rH] != GH[rH]) {
              XH = CH[rH] < GH[rH];
              break
            } hH = 0
        }
        for (XH && (LH = CH, CH = GH, GH = LH, BH.s = -BH.s), zH = CH.length, rH = GH.length - zH; rH > 0; --rH) CH[zH++] = 0;
        for (rH = GH.length; rH > hH;) {
          if (CH[--rH] < GH[rH]) {
            for (SH = rH; SH && 0 === CH[--SH];) CH[SH] = uH - 1;
            --CH[SH], CH[rH] += uH
          }
          CH[rH] -= GH[rH]
        }
        for (; 0 === CH[--zH];) CH.pop();
        for (; 0 === CH[0]; CH.shift()) --AH;
        return CH[0] ? (BH.d = CH, BH.e = AH, tH ? oH(BH, QH) : BH) : new YH(0)
      }

      function fH(HH, BH, LH) {
        var AH, rH = VH(HH),
          SH = PH(HH.d),
          hH = SH.length;
        return BH ? (LH && (AH = LH - hH) > 0 ? SH = SH.charAt(0) + "." + SH.slice(1) + bH(AH) : hH > 1 && (SH = SH.charAt(0) + "." + SH.slice(1)), SH = SH + (rH < 0 ? "e" : "e+") + rH) : rH < 0 ? (SH = "0." + bH(-rH - 1) + SH, LH && (AH = LH - hH) > 0 && (SH += bH(AH))) : rH >= hH ? (SH += bH(rH + 1 - hH), LH && (AH = LH - rH - 1) > 0 && (SH = SH + "." + bH(AH))) : ((AH = rH + 1) < hH && (SH = SH.slice(0, AH) + "." + SH.slice(AH)), LH && (AH = LH - hH) > 0 && (rH + 1 === hH && (SH += "."), SH += bH(AH))), HH.s < 0 ? "-" + SH : SH
      }

      function lH(HH, BH) {
        if (HH.length > BH) return HH.length = BH, !0
      }

      function KH(HH) {
        if (!HH || "object" !== typeof HH) throw Error(zH + "Object expected");
        var BH, LH, AH, rH = ["precision", 1, SH, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
        for (BH = 0; BH < rH.length; BH += 3)
          if (void 0 !== (AH = HH[LH = rH[BH]])) {
            if (!(XH(AH) === AH && AH >= rH[BH + 1] && AH <= rH[BH + 2])) throw Error(CH + LH + ": " + AH);
            this[LH] = AH
          } if (void 0 !== (AH = HH[LH = "LN10"])) {
          if (AH != Math.LN10) throw Error(CH + LH + ": " + AH);
          this[LH] = new this(AH)
        }
        return this
      }
      hH = function HH(BH) {
        var LH, AH, rH;

        function SH(HH) {
          var BH = this;
          if (!(BH instanceof SH)) return new SH(HH);
          if (BH.constructor = SH, HH instanceof SH) return BH.s = HH.s, BH.e = HH.e, void(BH.d = (HH = HH.d) ? HH.slice() : HH);
          if ("number" === typeof HH) {
            if (0 * HH !== 0) throw Error(CH + HH);
            if (HH > 0) BH.s = 1;
            else {
              if (!(HH < 0)) return BH.s = 0, BH.e = 0, void(BH.d = [0]);
              HH = -HH, BH.s = -1
            }
            return HH === ~~HH && HH < 1e7 ? (BH.e = 0, void(BH.d = [HH])) : mH(BH, HH.toString())
          }
          if ("string" !== typeof HH) throw Error(CH + HH);
          if (45 === HH.charCodeAt(0) ? (HH = HH.slice(1), BH.s = -1) : BH.s = 1, !YH.test(HH)) throw Error(CH + HH);
          mH(BH, HH)
        }
        if (SH.prototype = MH, SH.ROUND_UP = 0, SH.ROUND_DOWN = 1, SH.ROUND_CEIL = 2, SH.ROUND_FLOOR = 3, SH.ROUND_HALF_UP = 4, SH.ROUND_HALF_DOWN = 5, SH.ROUND_HALF_EVEN = 6, SH.ROUND_HALF_CEIL = 7, SH.ROUND_HALF_FLOOR = 8, SH.clone = HH, SH.config = SH.set = KH, void 0 === BH && (BH = {}), BH)
          for (rH = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], LH = 0; LH < rH.length;) BH.hasOwnProperty(AH = rH[LH++]) || (BH[AH] = this[AH]);
        return SH.config(BH), SH
      }(hH), hH.default = hH.Decimal = hH, rH = new hH(1), void 0 === (AH = function() {
        return hH
      }.call(BH, LH, BH, HH)) || (HH.exports = AH)
    }()
  },
  6282: (HH, BH, LH) => {
    var AH = LH(5778)(LH(5615), "DataView");
    HH.exports = AH
  },
  5763: (HH, BH, LH) => {
    var AH = LH(5772),
      rH = LH(5819),
      SH = LH(5821),
      hH = LH(5829),
      tH = LH(5835);

    function zH(HH) {
      var BH = -1,
        LH = null == HH ? 0 : HH.length;
      for (this.clear(); ++BH < LH;) {
        var AH = HH[BH];
        this.set(AH[0], AH[1])
      }
    }
    zH.prototype.clear = AH, zH.prototype.delete = rH, zH.prototype.get = SH, zH.prototype.has = hH, zH.prototype.set = tH, HH.exports = zH
  },
  5843: (HH, BH, LH) => {
    var AH = LH(5847),
      rH = LH(5852),
      SH = LH(5872),
      hH = LH(5876),
      tH = LH(5878);

    function zH(HH) {
      var BH = -1,
        LH = null == HH ? 0 : HH.length;
      for (this.clear(); ++BH < LH;) {
        var AH = HH[BH];
        this.set(AH[0], AH[1])
      }
    }
    zH.prototype.clear = AH, zH.prototype.delete = rH, zH.prototype.get = SH, zH.prototype.has = hH, zH.prototype.set = tH, HH.exports = zH
  },
  5886: (HH, BH, LH) => {
    var AH = LH(5778)(LH(5615), "Map");
    HH.exports = AH
  },
  5750: (HH, BH, LH) => {
    var AH = LH(5755),
      rH = LH(5895),
      SH = LH(5913),
      hH = LH(5920),
      tH = LH(5923);

    function zH(HH) {
      var BH = -1,
        LH = null == HH ? 0 : HH.length;
      for (this.clear(); ++BH < LH;) {
        var AH = HH[BH];
        this.set(AH[0], AH[1])
      }
    }
    zH.prototype.clear = AH, zH.prototype.delete = rH, zH.prototype.get = SH, zH.prototype.has = hH, zH.prototype.set = tH, HH.exports = zH
  },
  6289: (HH, BH, LH) => {
    var AH = LH(5778)(LH(5615), "Promise");
    HH.exports = AH
  },
  6292: (HH, BH, LH) => {
    var AH = LH(5778)(LH(5615), "Set");
    HH.exports = AH
  },
  6129: (HH, BH, LH) => {
    var AH = LH(5750),
      rH = LH(6131),
      SH = LH(6136);

    function hH(HH) {
      var BH = -1,
        LH = null == HH ? 0 : HH.length;
      for (this.__data__ = new AH; ++BH < LH;) this.add(HH[BH])
    }
    hH.prototype.add = hH.prototype.push = rH, hH.prototype.has = SH, HH.exports = hH
  },
  6082: (HH, BH, LH) => {
    var AH = LH(5843),
      rH = LH(6087),
      SH = LH(6092),
      hH = LH(6099),
      tH = LH(6101),
      zH = LH(6107);

    function CH(HH) {
      var BH = this.__data__ = new AH(HH);
      this.size = BH.size
    }
    CH.prototype.clear = rH, CH.prototype.delete = SH, CH.prototype.get = hH, CH.prototype.has = tH, CH.prototype.set = zH, HH.exports = CH
  },
  5657: (HH, BH, LH) => {
    var AH = LH(5615).Symbol;
    HH.exports = AH
  },
  6157: (HH, BH, LH) => {
    var AH = LH(5615).Uint8Array;
    HH.exports = AH
  },
  6299: (HH, BH, LH) => {
    var AH = LH(5778)(LH(5615), "WeakMap");
    HH.exports = AH
  },
  6445: HH => {
    HH.exports = function(HH, BH, LH) {
      switch (LH.length) {
        case 0:
          return HH.call(BH);
        case 1:
          return HH.call(BH, LH[0]);
        case 2:
          return HH.call(BH, LH[0], LH[1]);
        case 3:
          return HH.call(BH, LH[0], LH[1], LH[2])
      }
      return HH.apply(BH, LH)
    }
  },
  6794: HH => {
    HH.exports = function(HH, BH) {
      for (var LH = -1, AH = null == HH ? 0 : HH.length; ++LH < AH;)
        if (!BH(HH[LH], LH, HH)) return !1;
      return !0
    }
  },
  6188: HH => {
    HH.exports = function(HH, BH) {
      for (var LH = -1, AH = null == HH ? 0 : HH.length, rH = 0, SH = []; ++LH < AH;) {
        var hH = HH[LH];
        BH(hH, LH, HH) && (SH[rH++] = hH)
      }
      return SH
    }
  },
  6521: (HH, BH, LH) => {
    var AH = LH(6529);
    HH.exports = function(HH, BH) {
      return !!(null == HH ? 0 : HH.length) && AH(HH, BH, 0) > -1
    }
  },
  6549: HH => {
    HH.exports = function(HH, BH, LH) {
      for (var AH = -1, rH = null == HH ? 0 : HH.length; ++AH < rH;)
        if (LH(BH, HH[AH])) return !0;
      return !1
    }
  },
  6205: (HH, BH, LH) => {
    var AH = LH(6212),
      rH = LH(6055),
      SH = LH(5695),
      hH = LH(6221),
      tH = LH(6020),
      zH = LH(6237),
      CH = Object.prototype.hasOwnProperty;
    HH.exports = function(HH, BH) {
      var LH = SH(HH),
        EH = !LH && rH(HH),
        XH = !LH && !EH && hH(HH),
        GH = !LH && !EH && !XH && zH(HH),
        YH = LH || EH || XH || GH,
        uH = YH ? AH(HH.length, String) : [],
        QH = uH.length;
      for (var WH in HH) !BH && !CH.call(HH, WH) || YH && ("length" == WH || XH && ("offset" == WH || "parent" == WH) || GH && ("buffer" == WH || "byteLength" == WH || "byteOffset" == WH) || tH(WH, QH)) || uH.push(WH);
      return uH
    }
  },
  5941: HH => {
    HH.exports = function(HH, BH) {
      for (var LH = -1, AH = null == HH ? 0 : HH.length, rH = Array(AH); ++LH < AH;) rH[LH] = BH(HH[LH], LH, HH);
      return rH
    }
  },
  6041: HH => {
    HH.exports = function(HH, BH) {
      for (var LH = -1, AH = BH.length, rH = HH.length; ++LH < AH;) HH[rH + LH] = BH[LH];
      return HH
    }
  },
  6141: HH => {
    HH.exports = function(HH, BH) {
      for (var LH = -1, AH = null == HH ? 0 : HH.length; ++LH < AH;)
        if (BH(HH[LH], LH, HH)) return !0;
      return !1
    }
  },
  6610: HH => {
    HH.exports = function(HH) {
      return HH.split("")
    }
  },
  5858: (HH, BH, LH) => {
    var AH = LH(5867);
    HH.exports = function(HH, BH) {
      for (var LH = HH.length; LH--;)
        if (AH(HH[LH][0], BH)) return LH;
      return -1
    }
  },
  6786: (HH, BH, LH) => {
    var AH = LH(6464);
    HH.exports = function(HH, BH, LH) {
      "__proto__" == BH && AH ? AH(HH, BH, {
        configurable: !0,
        enumerable: !0,
        value: LH,
        writable: !0
      }) : HH[BH] = LH
    }
  },
  6388: (HH, BH, LH) => {
    var AH = LH(6391),
      rH = LH(6407)(AH);
    HH.exports = rH
  },
  6802: (HH, BH, LH) => {
    var AH = LH(6388);
    HH.exports = function(HH, BH) {
      var LH = !0;
      return AH(HH, (function(HH, AH, rH) {
        return LH = !!BH(HH, AH, rH)
      })), LH
    }
  },
  6693: (HH, BH, LH) => {
    var AH = LH(5648);
    HH.exports = function(HH, BH, LH) {
      for (var rH = -1, SH = HH.length; ++rH < SH;) {
        var hH = HH[rH],
          tH = BH(hH);
        if (null != tH && (void 0 === zH ? tH === tH && !AH(tH) : LH(tH, zH))) var zH = tH,
          CH = hH
      }
      return CH
    }
  },
  6534: HH => {
    HH.exports = function(HH, BH, LH, AH) {
      for (var rH = HH.length, SH = LH + (AH ? 1 : -1); AH ? SH-- : ++SH < rH;)
        if (BH(HH[SH], SH, HH)) return SH;
      return -1
    }
  },
  6032: (HH, BH, LH) => {
    var AH = LH(6041),
      rH = LH(6048);
    HH.exports = function HH(BH, LH, SH, hH, tH) {
      var zH = -1,
        CH = BH.length;
      for (SH || (SH = rH), tH || (tH = []); ++zH < CH;) {
        var EH = BH[zH];
        LH > 0 && SH(EH) ? LH > 1 ? HH(EH, LH - 1, SH, hH, tH) : AH(tH, EH) : hH || (tH[tH.length] = EH)
      }
      return tH
    }
  },
  6396: (HH, BH, LH) => {
    var AH = LH(6405)();
    HH.exports = AH
  },
  6391: (HH, BH, LH) => {
    var AH = LH(6396),
      rH = LH(6200);
    HH.exports = function(HH, BH) {
      return HH && AH(HH, BH, rH)
    }
  },
  5716: (HH, BH, LH) => {
    var AH = LH(5719),
      rH = LH(5949);
    HH.exports = function(HH, BH) {
      for (var LH = 0, SH = (BH = AH(BH, HH)).length; null != HH && LH < SH;) HH = HH[rH(BH[LH++])];
      return LH && LH == SH ? HH : void 0
    }
  },
  6180: (HH, BH, LH) => {
    var AH = LH(6041),
      rH = LH(5695);
    HH.exports = function(HH, BH, LH) {
      var SH = BH(HH);
      return rH(HH) ? SH : AH(SH, LH(HH))
    }
  },
  5655: (HH, BH, LH) => {
    var AH = LH(5657),
      rH = LH(5663),
      SH = LH(5671),
      hH = AH ? AH.toStringTag : void 0;
    HH.exports = function(HH) {
      return null == HH ? void 0 === HH ? "[object Undefined]" : "[object Null]" : hH && hH in Object(HH) ? rH(HH) : SH(HH)
    }
  },
  6695: HH => {
    HH.exports = function(HH, BH) {
      return HH > BH
    }
  },
  6342: HH => {
    HH.exports = function(HH, BH) {
      return null != HH && BH in Object(HH)
    }
  },
  6529: (HH, BH, LH) => {
    var AH = LH(6534),
      rH = LH(6536),
      SH = LH(6540);
    HH.exports = function(HH, BH, LH) {
      return BH === BH ? SH(HH, BH, LH) : AH(HH, rH, LH)
    }
  },
  6062: (HH, BH, LH) => {
    var AH = LH(5655),
      rH = LH(5680);
    HH.exports = function(HH) {
      return rH(HH) && "[object Arguments]" == AH(HH)
    }
  },
  6111: (HH, BH, LH) => {
    var AH = LH(6118),
      rH = LH(5680);
    HH.exports = function HH(BH, LH, SH, hH, tH) {
      return BH === LH || (null == BH || null == LH || !rH(BH) && !rH(LH) ? BH !== BH && LH !== LH : AH(BH, LH, SH, hH, HH, tH))
    }
  },
  6118: (HH, BH, LH) => {
    var AH = LH(6082),
      rH = LH(6122),
      SH = LH(6149),
      hH = LH(6175),
      tH = LH(6277),
      zH = LH(5695),
      CH = LH(6221),
      EH = LH(6237),
      XH = "[object Arguments]",
      GH = "[object Array]",
      YH = "[object Object]",
      uH = Object.prototype.hasOwnProperty;
    HH.exports = function(HH, BH, LH, QH, WH, MH) {
      var xH = zH(HH),
        vH = zH(BH),
        PH = xH ? GH : tH(HH),
        TH = vH ? GH : tH(BH),
        UH = (PH = PH == XH ? YH : PH) == YH,
        VH = (TH = TH == XH ? YH : TH) == YH,
        OH = PH == TH;
      if (OH && CH(HH)) {
        if (!CH(BH)) return !1;
        xH = !0, UH = !1
      }
      if (OH && !UH) return MH || (MH = new AH), xH || EH(HH) ? rH(HH, BH, LH, QH, WH, MH) : SH(HH, BH, PH, LH, QH, WH, MH);
      if (!(1 & LH)) {
        var bH = UH && uH.call(HH, "__wrapped__"),
          kH = VH && uH.call(BH, "__wrapped__");
        if (bH || kH) {
          var mH = bH ? HH.value() : HH,
            oH = kH ? BH.value() : BH;
          return MH || (MH = new AH), WH(mH, oH, LH, QH, MH)
        }
      }
      return !!OH && (MH || (MH = new AH), hH(HH, BH, LH, QH, WH, MH))
    }
  },
  6080: (HH, BH, LH) => {
    var AH = LH(6082),
      rH = LH(6111);
    HH.exports = function(HH, BH, LH, SH) {
      var hH = LH.length,
        tH = hH,
        zH = !SH;
      if (null == HH) return !tH;
      for (HH = Object(HH); hH--;) {
        var CH = LH[hH];
        if (zH && CH[2] ? CH[1] !== HH[CH[0]] : !(CH[0] in HH)) return !1
      }
      for (; ++hH < tH;) {
        var EH = (CH = LH[hH])[0],
          XH = HH[EH],
          GH = CH[1];
        if (zH && CH[2]) {
          if (void 0 === XH && !(EH in HH)) return !1
        } else {
          var YH = new AH;
          if (SH) var uH = SH(XH, GH, EH, HH, BH, YH);
          if (!(void 0 === uH ? rH(GH, XH, 3, SH, YH) : uH)) return !1
        }
      }
      return !0
    }
  },
  6536: HH => {
    HH.exports = function(HH) {
      return HH !== HH
    }
  },
  5780: (HH, BH, LH) => {
    var AH = LH(5789),
      rH = LH(5793),
      SH = LH(5607),
      hH = LH(5808),
      tH = /^\[object .+?Constructor\]$/,
      zH = Function.prototype,
      CH = Object.prototype,
      EH = zH.toString,
      XH = CH.hasOwnProperty,
      GH = RegExp("^" + EH.call(XH).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    HH.exports = function(HH) {
      return !(!SH(HH) || rH(HH)) && (AH(HH) ? GH : tH).test(hH(HH))
    }
  },
  6239: (HH, BH, LH) => {
    var AH = LH(5655),
      rH = LH(6018),
      SH = LH(5680),
      hH = {};
    hH["[object Float32Array]"] = hH["[object Float64Array]"] = hH["[object Int8Array]"] = hH["[object Int16Array]"] = hH["[object Int32Array]"] = hH["[object Uint8Array]"] = hH["[object Uint8ClampedArray]"] = hH["[object Uint16Array]"] = hH["[object Uint32Array]"] = !0, hH["[object Arguments]"] = hH["[object Array]"] = hH["[object ArrayBuffer]"] = hH["[object Boolean]"] = hH["[object DataView]"] = hH["[object Date]"] = hH["[object Error]"] = hH["[object Function]"] = hH["[object Map]"] = hH["[object Number]"] = hH["[object Object]"] = hH["[object RegExp]"] = hH["[object Set]"] = hH["[object String]"] = hH["[object WeakMap]"] = !1, HH.exports = function(HH) {
      return SH(HH) && rH(HH.length) && !!hH[AH(HH)]
    }
  },
  6073: (HH, BH, LH) => {
    var AH = LH(6076),
      rH = LH(6327),
      SH = LH(6353),
      hH = LH(5695),
      tH = LH(6359);
    HH.exports = function(HH) {
      return "function" == typeof HH ? HH : null == HH ? SH : "object" == typeof HH ? hH(HH) ? rH(HH[0], HH[1]) : AH(HH) : tH(HH)
    }
  },
  6255: (HH, BH, LH) => {
    var AH = LH(6259),
      rH = LH(6265),
      SH = Object.prototype.hasOwnProperty;
    HH.exports = function(HH) {
      if (!AH(HH)) return rH(HH);
      var BH = [];
      for (var LH in Object(HH)) SH.call(HH, LH) && "constructor" != LH && BH.push(LH);
      return BH
    }
  },
  6710: HH => {
    HH.exports = function(HH, BH) {
      return HH < BH
    }
  },
  6380: (HH, BH, LH) => {
    var AH = LH(6388),
      rH = LH(6012);
    HH.exports = function(HH, BH) {
      var LH = -1,
        SH = rH(HH) ? Array(HH.length) : [];
      return AH(HH, (function(HH, AH, rH) {
        SH[++LH] = BH(HH, AH, rH)
      })), SH
    }
  },
  6076: (HH, BH, LH) => {
    var AH = LH(6080),
      rH = LH(6306),
      SH = LH(6321);
    HH.exports = function(HH) {
      var BH = rH(HH);
      return 1 == BH.length && BH[0][2] ? SH(BH[0][0], BH[0][1]) : function(LH) {
        return LH === HH || AH(LH, HH, BH)
      }
    }
  },
  6327: (HH, BH, LH) => {
    var AH = LH(6111),
      rH = LH(5714),
      SH = LH(6335),
      hH = LH(5727),
      tH = LH(6314),
      zH = LH(6321),
      CH = LH(5949);
    HH.exports = function(HH, BH) {
      return hH(HH) && tH(BH) ? zH(CH(HH), BH) : function(LH) {
        var hH = rH(LH, HH);
        return void 0 === hH && hH === BH ? SH(LH, HH) : AH(BH, hH, 3)
      }
    }
  },
  6068: (HH, BH, LH) => {
    var AH = LH(5941),
      rH = LH(5716),
      SH = LH(6073),
      hH = LH(6380),
      tH = LH(6409),
      zH = LH(6243),
      CH = LH(6416),
      EH = LH(6353),
      XH = LH(5695);
    HH.exports = function(HH, BH, LH) {
      BH = BH.length ? AH(BH, (function(HH) {
        return XH(HH) ? function(BH) {
          return rH(BH, 1 === HH.length ? HH[0] : HH)
        } : HH
      })) : [EH];
      var GH = -1;
      BH = AH(BH, zH(SH));
      var YH = hH(HH, (function(HH, LH, rH) {
        return {
          criteria: AH(BH, (function(BH) {
            return BH(HH)
          })),
          index: ++GH,
          value: HH
        }
      }));
      return tH(YH, (function(HH, BH) {
        return CH(HH, BH, LH)
      }))
    }
  },
  6368: HH => {
    HH.exports = function(HH) {
      return function(BH) {
        return null == BH ? void 0 : BH[HH]
      }
    }
  },
  6371: (HH, BH, LH) => {
    var AH = LH(5716);
    HH.exports = function(HH) {
      return function(BH) {
        return AH(BH, HH)
      }
    }
  },
  5996: HH => {
    var BH = Math.ceil,
      LH = Math.max;
    HH.exports = function(HH, AH, rH, SH) {
      for (var hH = -1, tH = LH(BH((AH - HH) / (rH || 1)), 0), zH = Array(tH); tH--;) zH[SH ? tH : ++hH] = HH, HH += rH;
      return zH
    }
  },
  6429: (HH, BH, LH) => {
    var AH = LH(6353),
      rH = LH(6437),
      SH = LH(6453);
    HH.exports = function(HH, BH) {
      return SH(rH(HH, BH, AH), HH + "")
    }
  },
  6455: (HH, BH, LH) => {
    var AH = LH(6458),
      rH = LH(6464),
      SH = LH(6353),
      hH = rH ? function(HH, BH) {
        return rH(HH, "toString", {
          configurable: !0,
          enumerable: !1,
          value: AH(BH),
          writable: !0
        })
      } : SH;
    HH.exports = hH
  },
  6597: HH => {
    HH.exports = function(HH, BH, LH) {
      var AH = -1,
        rH = HH.length;
      BH < 0 && (BH = -BH > rH ? 0 : rH + BH), (LH = LH > rH ? rH : LH) < 0 && (LH += rH), rH = BH > LH ? 0 : LH - BH >>> 0, BH >>>= 0;
      for (var SH = Array(rH); ++AH < rH;) SH[AH] = HH[AH + BH];
      return SH
    }
  },
  6865: (HH, BH, LH) => {
    var AH = LH(6388);
    HH.exports = function(HH, BH) {
      var LH;
      return AH(HH, (function(HH, AH, rH) {
        return !(LH = BH(HH, AH, rH))
      })), !!LH
    }
  },
  6409: HH => {
    HH.exports = function(HH, BH) {
      var LH = HH.length;
      for (HH.sort(BH); LH--;) HH[LH] = HH[LH].value;
      return HH
    }
  },
  6212: HH => {
    HH.exports = function(HH, BH) {
      for (var LH = -1, AH = Array(HH); ++LH < HH;) AH[LH] = BH(LH);
      return AH
    }
  },
  5932: (HH, BH, LH) => {
    var AH = LH(5657),
      rH = LH(5941),
      SH = LH(5695),
      hH = LH(5648),
      tH = AH ? AH.prototype : void 0,
      zH = tH ? tH.toString : void 0;
    HH.exports = function HH(BH) {
      if ("string" == typeof BH) return BH;
      if (SH(BH)) return rH(BH, HH) + "";
      if (hH(BH)) return zH ? zH.call(BH) : "";
      var LH = BH + "";
      return "0" == LH && 1 / BH == -1 / 0 ? "-0" : LH
    }
  },
  5635: (HH, BH, LH) => {
    var AH = LH(5643),
      rH = /^\s+/;
    HH.exports = function(HH) {
      return HH ? HH.slice(0, AH(HH) + 1).replace(rH, "") : HH
    }
  },
  6243: HH => {
    HH.exports = function(HH) {
      return function(BH) {
        return HH(BH)
      }
    }
  },
  6513: (HH, BH, LH) => {
    var AH = LH(6129),
      rH = LH(6521),
      SH = LH(6549),
      hH = LH(6144),
      tH = LH(6557),
      zH = LH(6168);
    HH.exports = function(HH, BH, LH) {
      var CH = -1,
        EH = rH,
        XH = HH.length,
        GH = !0,
        YH = [],
        uH = YH;
      if (LH) GH = !1, EH = SH;
      else if (XH >= 200) {
        var QH = BH ? null : tH(HH);
        if (QH) return zH(QH);
        GH = !1, EH = hH, uH = new AH
      } else uH = BH ? [] : YH;
      HH: for (; ++CH < XH;) {
        var WH = HH[CH],
          MH = BH ? BH(WH) : WH;
        if (WH = LH || 0 !== WH ? WH : 0, GH && MH === MH) {
          for (var xH = uH.length; xH--;)
            if (uH[xH] === MH) continue HH;
          BH && uH.push(MH), YH.push(WH)
        } else EH(uH, MH, LH) || (uH !== YH && uH.push(MH), YH.push(WH))
      }
      return YH
    }
  },
  6144: HH => {
    HH.exports = function(HH, BH) {
      return HH.has(BH)
    }
  },
  5719: (HH, BH, LH) => {
    var AH = LH(5695),
      rH = LH(5727),
      SH = LH(5731),
      hH = LH(5928);
    HH.exports = function(HH, BH) {
      return AH(HH) ? HH : rH(HH, BH) ? [HH] : SH(hH(HH))
    }
  },
  6594: (HH, BH, LH) => {
    var AH = LH(6597);
    HH.exports = function(HH, BH, LH) {
      var rH = HH.length;
      return LH = void 0 === LH ? rH : LH, !BH && LH >= rH ? HH : AH(HH, BH, LH)
    }
  },
  6423: (HH, BH, LH) => {
    var AH = LH(5648);
    HH.exports = function(HH, BH) {
      if (HH !== BH) {
        var LH = void 0 !== HH,
          rH = null === HH,
          SH = HH === HH,
          hH = AH(HH),
          tH = void 0 !== BH,
          zH = null === BH,
          CH = BH === BH,
          EH = AH(BH);
        if (!zH && !EH && !hH && HH > BH || hH && tH && CH && !zH && !EH || rH && tH && CH || !LH && CH || !SH) return 1;
        if (!rH && !hH && !EH && HH < BH || EH && LH && SH && !rH && !hH || zH && LH && SH || !tH && SH || !CH) return -1
      }
      return 0
    }
  },
  6416: (HH, BH, LH) => {
    var AH = LH(6423);
    HH.exports = function(HH, BH, LH) {
      for (var rH = -1, SH = HH.criteria, hH = BH.criteria, tH = SH.length, zH = LH.length; ++rH < tH;) {
        var CH = AH(SH[rH], hH[rH]);
        if (CH) return rH >= zH ? CH : CH * ("desc" == LH[rH] ? -1 : 1)
      }
      return HH.index - BH.index
    }
  },
  5802: (HH, BH, LH) => {
    var AH = LH(5615)["__core-js_shared__"];
    HH.exports = AH
  },
  6407: (HH, BH, LH) => {
    var AH = LH(6012);
    HH.exports = function(HH, BH) {
      return function(LH, rH) {
        if (null == LH) return LH;
        if (!AH(LH)) return HH(LH, rH);
        for (var SH = LH.length, hH = BH ? SH : -1, tH = Object(LH);
          (BH ? hH-- : ++hH < SH) && !1 !== rH(tH[hH], hH, tH););
        return LH
      }
    }
  },
  6405: HH => {
    HH.exports = function(HH) {
      return function(BH, LH, AH) {
        for (var rH = -1, SH = Object(BH), hH = AH(BH), tH = hH.length; tH--;) {
          var zH = hH[HH ? tH : ++rH];
          if (!1 === LH(SH[zH], zH, SH)) break
        }
        return BH
      }
    }
  },
  6591: (HH, BH, LH) => {
    var AH = LH(6594),
      rH = LH(6603),
      SH = LH(6605),
      hH = LH(5928);
    HH.exports = function(HH) {
      return function(BH) {
        BH = hH(BH);
        var LH = rH(BH) ? SH(BH) : void 0,
          tH = LH ? LH[0] : BH.charAt(0),
          zH = LH ? AH(LH, 1).join("") : BH.slice(1);
        return tH[HH]() + zH
      }
    }
  },
  6879: (HH, BH, LH) => {
    var AH = LH(6073),
      rH = LH(6012),
      SH = LH(6200);
    HH.exports = function(HH) {
      return function(BH, LH, hH) {
        var tH = Object(BH);
        if (!rH(BH)) {
          var zH = AH(LH, 3);
          BH = SH(BH), LH = function(HH) {
            return zH(tH[HH], HH, tH)
          }
        }
        var CH = HH(BH, LH, hH);
        return CH > -1 ? tH[zH ? BH[CH] : CH] : void 0
      }
    }
  },
  5989: (HH, BH, LH) => {
    var AH = LH(5996),
      rH = LH(6005),
      SH = LH(6026);
    HH.exports = function(HH) {
      return function(BH, LH, hH) {
        return hH && "number" != typeof hH && rH(BH, LH, hH) && (LH = hH = void 0), BH = SH(BH), void 0 === LH ? (LH = BH, BH = 0) : LH = SH(LH), hH = void 0 === hH ? BH < LH ? 1 : -1 : SH(hH), AH(BH, LH, hH, HH)
      }
    }
  },
  6557: (HH, BH, LH) => {
    var AH = LH(6292),
      rH = LH(6561),
      SH = LH(6168),
      hH = AH && 1 / SH(new AH([, -0]))[1] == 1 / 0 ? function(HH) {
        return new AH(HH)
      } : rH;
    HH.exports = hH
  },
  6464: (HH, BH, LH) => {
    var AH = LH(5778),
      rH = function() {
        try {
          var HH = AH(Object, "defineProperty");
          return HH({}, "", {}), HH
        } catch (BH) {}
      }();
    HH.exports = rH
  },
  6122: (HH, BH, LH) => {
    var AH = LH(6129),
      rH = LH(6141),
      SH = LH(6144);
    HH.exports = function(HH, BH, LH, hH, tH, zH) {
      var CH = 1 & LH,
        EH = HH.length,
        XH = BH.length;
      if (EH != XH && !(CH && XH > EH)) return !1;
      var GH = zH.get(HH),
        YH = zH.get(BH);
      if (GH && YH) return GH == BH && YH == HH;
      var uH = -1,
        QH = !0,
        WH = 2 & LH ? new AH : void 0;
      for (zH.set(HH, BH), zH.set(BH, HH); ++uH < EH;) {
        var MH = HH[uH],
          xH = BH[uH];
        if (hH) var vH = CH ? hH(xH, MH, uH, BH, HH, zH) : hH(MH, xH, uH, HH, BH, zH);
        if (void 0 !== vH) {
          if (vH) continue;
          QH = !1;
          break
        }
        if (WH) {
          if (!rH(BH, (function(HH, BH) {
              if (!SH(WH, BH) && (MH === HH || tH(MH, HH, LH, hH, zH))) return WH.push(BH)
            }))) {
            QH = !1;
            break
          }
        } else if (MH !== xH && !tH(MH, xH, LH, hH, zH)) {
          QH = !1;
          break
        }
      }
      return zH.delete(HH), zH.delete(BH), QH
    }
  },
  6149: (HH, BH, LH) => {
    var AH = LH(5657),
      rH = LH(6157),
      SH = LH(5867),
      hH = LH(6122),
      tH = LH(6163),
      zH = LH(6168),
      CH = AH ? AH.prototype : void 0,
      EH = CH ? CH.valueOf : void 0;
    HH.exports = function(HH, BH, LH, AH, CH, XH, GH) {
      switch (LH) {
        case "[object DataView]":
          if (HH.byteLength != BH.byteLength || HH.byteOffset != BH.byteOffset) return !1;
          HH = HH.buffer, BH = BH.buffer;
        case "[object ArrayBuffer]":
          return !(HH.byteLength != BH.byteLength || !XH(new rH(HH), new rH(BH)));
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
          return SH(+HH, +BH);
        case "[object Error]":
          return HH.name == BH.name && HH.message == BH.message;
        case "[object RegExp]":
        case "[object String]":
          return HH == BH + "";
        case "[object Map]":
          var YH = tH;
        case "[object Set]":
          var uH = 1 & AH;
          if (YH || (YH = zH), HH.size != BH.size && !uH) return !1;
          var QH = GH.get(HH);
          if (QH) return QH == BH;
          AH |= 2, GH.set(HH, BH);
          var WH = hH(YH(HH), YH(BH), AH, CH, XH, GH);
          return GH.delete(HH), WH;
        case "[object Symbol]":
          if (EH) return EH.call(HH) == EH.call(BH)
      }
      return !1
    }
  },
  6175: (HH, BH, LH) => {
    var AH = LH(6177),
      rH = Object.prototype.hasOwnProperty;
    HH.exports = function(HH, BH, LH, SH, hH, tH) {
      var zH = 1 & LH,
        CH = AH(HH),
        EH = CH.length;
      if (EH != AH(BH).length && !zH) return !1;
      for (var XH = EH; XH--;) {
        var GH = CH[XH];
        if (!(zH ? GH in BH : rH.call(BH, GH))) return !1
      }
      var YH = tH.get(HH),
        uH = tH.get(BH);
      if (YH && uH) return YH == BH && uH == HH;
      var QH = !0;
      tH.set(HH, BH), tH.set(BH, HH);
      for (var WH = zH; ++XH < EH;) {
        var MH = HH[GH = CH[XH]],
          xH = BH[GH];
        if (SH) var vH = zH ? SH(xH, MH, GH, BH, HH, tH) : SH(MH, xH, GH, HH, BH, tH);
        if (!(void 0 === vH ? MH === xH || hH(MH, xH, LH, SH, tH) : vH)) {
          QH = !1;
          break
        }
        WH || (WH = "constructor" == GH)
      }
      if (QH && !WH) {
        var PH = HH.constructor,
          TH = BH.constructor;
        PH == TH || !("constructor" in HH) || !("constructor" in BH) || "function" == typeof PH && PH instanceof PH && "function" == typeof TH && TH instanceof TH || (QH = !1)
      }
      return tH.delete(HH), tH.delete(BH), QH
    }
  },
  5622: (HH, BH, LH) => {
    var AH = "object" == typeof LH.g && LH.g && LH.g.Object === Object && LH.g;
    HH.exports = AH
  },
  6177: (HH, BH, LH) => {
    var AH = LH(6180),
      rH = LH(6185),
      SH = LH(6200);
    HH.exports = function(HH) {
      return AH(HH, SH, rH)
    }
  },
  5901: (HH, BH, LH) => {
    var AH = LH(5905);
    HH.exports = function(HH, BH) {
      var LH = HH.__data__;
      return AH(BH) ? LH["string" == typeof BH ? "string" : "hash"] : LH.map
    }
  },
  6306: (HH, BH, LH) => {
    var AH = LH(6314),
      rH = LH(6200);
    HH.exports = function(HH) {
      for (var BH = rH(HH), LH = BH.length; LH--;) {
        var SH = BH[LH],
          hH = HH[SH];
        BH[LH] = [SH, hH, AH(hH)]
      }
      return BH
    }
  },
  5778: (HH, BH, LH) => {
    var AH = LH(5780),
      rH = LH(5817);
    HH.exports = function(HH, BH) {
      var LH = rH(HH, BH);
      return AH(LH) ? LH : void 0
    }
  },
  6842: (HH, BH, LH) => {
    var AH = LH(6268)(Object.getPrototypeOf, Object);
    HH.exports = AH
  },
  5663: (HH, BH, LH) => {
    var AH = LH(5657),
      rH = Object.prototype,
      SH = rH.hasOwnProperty,
      hH = rH.toString,
      tH = AH ? AH.toStringTag : void 0;
    HH.exports = function(HH) {
      var BH = SH.call(HH, tH),
        LH = HH[tH];
      try {
        HH[tH] = void 0;
        var AH = !0
      } catch (zH) {}
      var rH = hH.call(HH);
      return AH && (BH ? HH[tH] = LH : delete HH[tH]), rH
    }
  },
  6185: (HH, BH, LH) => {
    var AH = LH(6188),
      rH = LH(6196),
      SH = Object.prototype.propertyIsEnumerable,
      hH = Object.getOwnPropertySymbols,
      tH = hH ? function(HH) {
        return null == HH ? [] : (HH = Object(HH), AH(hH(HH), (function(BH) {
          return SH.call(HH, BH)
        })))
      } : rH;
    HH.exports = tH
  },
  6277: (HH, BH, LH) => {
    var AH = LH(6282),
      rH = LH(5886),
      SH = LH(6289),
      hH = LH(6292),
      tH = LH(6299),
      zH = LH(5655),
      CH = LH(5808),
      EH = "[object Map]",
      XH = "[object Promise]",
      GH = "[object Set]",
      YH = "[object WeakMap]",
      uH = "[object DataView]",
      QH = CH(AH),
      WH = CH(rH),
      MH = CH(SH),
      xH = CH(hH),
      vH = CH(tH),
      PH = zH;
    (AH && PH(new AH(new ArrayBuffer(1))) != uH || rH && PH(new rH) != EH || SH && PH(SH.resolve()) != XH || hH && PH(new hH) != GH || tH && PH(new tH) != YH) && (PH = function(HH) {
      var BH = zH(HH),
        LH = "[object Object]" == BH ? HH.constructor : void 0,
        AH = LH ? CH(LH) : "";
      if (AH) switch (AH) {
        case QH:
          return uH;
        case WH:
          return EH;
        case MH:
          return XH;
        case xH:
          return GH;
        case vH:
          return YH
      }
      return BH
    }), HH.exports = PH
  },
  5817: HH => {
    HH.exports = function(HH, BH) {
      return null == HH ? void 0 : HH[BH]
    }
  },
  6346: (HH, BH, LH) => {
    var AH = LH(5719),
      rH = LH(6055),
      SH = LH(5695),
      hH = LH(6020),
      tH = LH(6018),
      zH = LH(5949);
    HH.exports = function(HH, BH, LH) {
      for (var CH = -1, EH = (BH = AH(BH, HH)).length, XH = !1; ++CH < EH;) {
        var GH = zH(BH[CH]);
        if (!(XH = null != HH && LH(HH, GH))) break;
        HH = HH[GH]
      }
      return XH || ++CH != EH ? XH : !!(EH = null == HH ? 0 : HH.length) && tH(EH) && hH(GH, EH) && (SH(HH) || rH(HH))
    }
  },
  6603: HH => {
    var BH = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    HH.exports = function(HH) {
      return BH.test(HH)
    }
  },
  5772: (HH, BH, LH) => {
    var AH = LH(5775);
    HH.exports = function() {
      this.__data__ = AH ? AH(null) : {}, this.size = 0
    }
  },
  5819: HH => {
    HH.exports = function(HH) {
      var BH = this.has(HH) && delete this.__data__[HH];
      return this.size -= BH ? 1 : 0, BH
    }
  },
  5821: (HH, BH, LH) => {
    var AH = LH(5775),
      rH = Object.prototype.hasOwnProperty;
    HH.exports = function(HH) {
      var BH = this.__data__;
      if (AH) {
        var LH = BH[HH];
        return "__lodash_hash_undefined__" === LH ? void 0 : LH
      }
      return rH.call(BH, HH) ? BH[HH] : void 0
    }
  },
  5829: (HH, BH, LH) => {
    var AH = LH(5775),
      rH = Object.prototype.hasOwnProperty;
    HH.exports = function(HH) {
      var BH = this.__data__;
      return AH ? void 0 !== BH[HH] : rH.call(BH, HH)
    }
  },
  5835: (HH, BH, LH) => {
    var AH = LH(5775);
    HH.exports = function(HH, BH) {
      var LH = this.__data__;
      return this.size += this.has(HH) ? 0 : 1, LH[HH] = AH && void 0 === BH ? "__lodash_hash_undefined__" : BH, this
    }
  },
  6048: (HH, BH, LH) => {
    var AH = LH(5657),
      rH = LH(6055),
      SH = LH(5695),
      hH = AH ? AH.isConcatSpreadable : void 0;
    HH.exports = function(HH) {
      return SH(HH) || rH(HH) || !!(hH && HH && HH[hH])
    }
  },
  6020: HH => {
    var BH = /^(?:0|[1-9]\d*)$/;
    HH.exports = function(HH, LH) {
      var AH = typeof HH;
      return !!(LH = null == LH ? 9007199254740991 : LH) && ("number" == AH || "symbol" != AH && BH.test(HH)) && HH > -1 && HH % 1 == 0 && HH < LH
    }
  },
  6005: (HH, BH, LH) => {
    var AH = LH(5867),
      rH = LH(6012),
      SH = LH(6020),
      hH = LH(5607);
    HH.exports = function(HH, BH, LH) {
      if (!hH(LH)) return !1;
      var tH = typeof BH;
      return !!("number" == tH ? rH(LH) && SH(BH, LH.length) : "string" == tH && BH in LH) && AH(LH[BH], HH)
    }
  },
  5727: (HH, BH, LH) => {
    var AH = LH(5695),
      rH = LH(5648),
      SH = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      hH = /^\w*$/;
    HH.exports = function(HH, BH) {
      if (AH(HH)) return !1;
      var LH = typeof HH;
      return !("number" != LH && "symbol" != LH && "boolean" != LH && null != HH && !rH(HH)) || (hH.test(HH) || !SH.test(HH) || null != BH && HH in Object(BH))
    }
  },
  5905: HH => {
    HH.exports = function(HH) {
      var BH = typeof HH;
      return "string" == BH || "number" == BH || "symbol" == BH || "boolean" == BH ? "__proto__" !== HH : null === HH
    }
  },
  5793: (HH, BH, LH) => {
    var AH = LH(5802),
      rH = function() {
        var HH = /[^.]+$/.exec(AH && AH.keys && AH.keys.IE_PROTO || "");
        return HH ? "Symbol(src)_1." + HH : ""
      }();
    HH.exports = function(HH) {
      return !!rH && rH in HH
    }
  },
  6259: HH => {
    var BH = Object.prototype;
    HH.exports = function(HH) {
      var LH = HH && HH.constructor;
      return HH === ("function" == typeof LH && LH.prototype || BH)
    }
  },
  6314: (HH, BH, LH) => {
    var AH = LH(5607);
    HH.exports = function(HH) {
      return HH === HH && !AH(HH)
    }
  },
  5847: HH => {
    HH.exports = function() {
      this.__data__ = [], this.size = 0
    }
  },
  5852: (HH, BH, LH) => {
    var AH = LH(5858),
      rH = Array.prototype.splice;
    HH.exports = function(HH) {
      var BH = this.__data__,
        LH = AH(BH, HH);
      return !(LH < 0) && (LH == BH.length - 1 ? BH.pop() : rH.call(BH, LH, 1), --this.size, !0)
    }
  },
  5872: (HH, BH, LH) => {
    var AH = LH(5858);
    HH.exports = function(HH) {
      var BH = this.__data__,
        LH = AH(BH, HH);
      return LH < 0 ? void 0 : BH[LH][1]
    }
  },
  5876: (HH, BH, LH) => {
    var AH = LH(5858);
    HH.exports = function(HH) {
      return AH(this.__data__, HH) > -1
    }
  },
  5878: (HH, BH, LH) => {
    var AH = LH(5858);
    HH.exports = function(HH, BH) {
      var LH = this.__data__,
        rH = AH(LH, HH);
      return rH < 0 ? (++this.size, LH.push([HH, BH])) : LH[rH][1] = BH, this
    }
  },
  5755: (HH, BH, LH) => {
    var AH = LH(5763),
      rH = LH(5843),
      SH = LH(5886);
    HH.exports = function() {
      this.size = 0, this.__data__ = {
        hash: new AH,
        map: new(SH || rH),
        string: new AH
      }
    }
  },
  5895: (HH, BH, LH) => {
    var AH = LH(5901);
    HH.exports = function(HH) {
      var BH = AH(this, HH).delete(HH);
      return this.size -= BH ? 1 : 0, BH
    }
  },
  5913: (HH, BH, LH) => {
    var AH = LH(5901);
    HH.exports = function(HH) {
      return AH(this, HH).get(HH)
    }
  },
  5920: (HH, BH, LH) => {
    var AH = LH(5901);
    HH.exports = function(HH) {
      return AH(this, HH).has(HH)
    }
  },
  5923: (HH, BH, LH) => {
    var AH = LH(5901);
    HH.exports = function(HH, BH) {
      var LH = AH(this, HH),
        rH = LH.size;
      return LH.set(HH, BH), this.size += LH.size == rH ? 0 : 1, this
    }
  },
  6163: HH => {
    HH.exports = function(HH) {
      var BH = -1,
        LH = Array(HH.size);
      return HH.forEach((function(HH, AH) {
        LH[++BH] = [AH, HH]
      })), LH
    }
  },
  6321: HH => {
    HH.exports = function(HH, BH) {
      return function(LH) {
        return null != LH && (LH[HH] === BH && (void 0 !== BH || HH in Object(LH)))
      }
    }
  },
  5738: (HH, BH, LH) => {
    var AH = LH(5743);
    HH.exports = function(HH) {
      var BH = AH(HH, (function(HH) {
          return 500 === LH.size && LH.clear(), HH
        })),
        LH = BH.cache;
      return BH
    }
  },
  5775: (HH, BH, LH) => {
    var AH = LH(5778)(Object, "create");
    HH.exports = AH
  },
  6265: (HH, BH, LH) => {
    var AH = LH(6268)(Object.keys, Object);
    HH.exports = AH
  },
  6247: (HH, BH, LH) => {
    HH = LH.nmd(HH);
    var AH = LH(5622),
      rH = BH && !BH.nodeType && BH,
      SH = rH && HH && !HH.nodeType && HH,
      hH = SH && SH.exports === rH && AH.process,
      tH = function() {
        try {
          var HH = SH && SH.require && SH.require("util").types;
          return HH || hH && hH.binding && hH.binding("util")
        } catch (BH) {}
      }();
    HH.exports = tH
  },
  5671: HH => {
    var BH = Object.prototype.toString;
    HH.exports = function(HH) {
      return BH.call(HH)
    }
  },
  6268: HH => {
    HH.exports = function(HH, BH) {
      return function(LH) {
        return HH(BH(LH))
      }
    }
  },
  6437: (HH, BH, LH) => {
    var AH = LH(6445),
      rH = Math.max;
    HH.exports = function(HH, BH, LH) {
      return BH = rH(void 0 === BH ? HH.length - 1 : BH, 0),
        function() {
          for (var SH = arguments, hH = -1, tH = rH(SH.length - BH, 0), zH = Array(tH); ++hH < tH;) zH[hH] = SH[BH + hH];
          hH = -1;
          for (var CH = Array(BH + 1); ++hH < BH;) CH[hH] = SH[hH];
          return CH[BH] = LH(zH), AH(HH, this, CH)
        }
    }
  },
  5615: (HH, BH, LH) => {
    var AH = LH(5622),
      rH = "object" == typeof self && self && self.Object === Object && self,
      SH = AH || rH || Function("return this")();
    HH.exports = SH
  },
  6131: HH => {
    HH.exports = function(HH) {
      return this.__data__.set(HH, "__lodash_hash_undefined__"), this
    }
  },
  6136: HH => {
    HH.exports = function(HH) {
      return this.__data__.has(HH)
    }
  },
  6168: HH => {
    HH.exports = function(HH) {
      var BH = -1,
        LH = Array(HH.size);
      return HH.forEach((function(HH) {
        LH[++BH] = HH
      })), LH
    }
  },
  6453: (HH, BH, LH) => {
    var AH = LH(6455),
      rH = LH(6467)(AH);
    HH.exports = rH
  },
  6467: HH => {
    var BH = Date.now;
    HH.exports = function(HH) {
      var LH = 0,
        AH = 0;
      return function() {
        var rH = BH(),
          SH = 16 - (rH - AH);
        if (AH = rH, SH > 0) {
          if (++LH >= 800) return arguments[0]
        } else LH = 0;
        return HH.apply(void 0, arguments)
      }
    }
  },
  6087: (HH, BH, LH) => {
    var AH = LH(5843);
    HH.exports = function() {
      this.__data__ = new AH, this.size = 0
    }
  },
  6092: HH => {
    HH.exports = function(HH) {
      var BH = this.__data__,
        LH = BH.delete(HH);
      return this.size = BH.size, LH
    }
  },
  6099: HH => {
    HH.exports = function(HH) {
      return this.__data__.get(HH)
    }
  },
  6101: HH => {
    HH.exports = function(HH) {
      return this.__data__.has(HH)
    }
  },
  6107: (HH, BH, LH) => {
    var AH = LH(5843),
      rH = LH(5886),
      SH = LH(5750);
    HH.exports = function(HH, BH) {
      var LH = this.__data__;
      if (LH instanceof AH) {
        var hH = LH.__data__;
        if (!rH || hH.length < 199) return hH.push([HH, BH]), this.size = ++LH.size, this;
        LH = this.__data__ = new SH(hH)
      }
      return LH.set(HH, BH), this.size = LH.size, this
    }
  },
  6540: HH => {
    HH.exports = function(HH, BH, LH) {
      for (var AH = LH - 1, rH = HH.length; ++AH < rH;)
        if (HH[AH] === BH) return AH;
      return -1
    }
  },
  6605: (HH, BH, LH) => {
    var AH = LH(6610),
      rH = LH(6603),
      SH = LH(6617);
    HH.exports = function(HH) {
      return rH(HH) ? SH(HH) : AH(HH)
    }
  },
  5731: (HH, BH, LH) => {
    var AH = LH(5738),
      rH = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      SH = /\\(\\)?/g,
      hH = AH((function(HH) {
        var BH = [];
        return 46 === HH.charCodeAt(0) && BH.push(""), HH.replace(rH, (function(HH, LH, AH, rH) {
          BH.push(AH ? rH.replace(SH, "$1") : LH || HH)
        })), BH
      }));
    HH.exports = hH
  },
  5949: (HH, BH, LH) => {
    var AH = LH(5648);
    HH.exports = function(HH) {
      if ("string" == typeof HH || AH(HH)) return HH;
      var BH = HH + "";
      return "0" == BH && 1 / HH == -1 / 0 ? "-0" : BH
    }
  },
  5808: HH => {
    var BH = Function.prototype.toString;
    HH.exports = function(HH) {
      if (null != HH) {
        try {
          return BH.call(HH)
        } catch (LH) {}
        try {
          return HH + ""
        } catch (LH) {}
      }
      return ""
    }
  },
  5643: HH => {
    var BH = /\s/;
    HH.exports = function(HH) {
      for (var LH = HH.length; LH-- && BH.test(HH.charAt(LH)););
      return LH
    }
  },
  6617: HH => {
    var BH = "\\ud800-\\udfff",
      LH = "[" + BH + "]",
      AH = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
      rH = "\\ud83c[\\udffb-\\udfff]",
      SH = "[^" + BH + "]",
      hH = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      tH = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      zH = "(?:" + AH + "|" + rH + ")" + "?",
      CH = "[\\ufe0e\\ufe0f]?",
      EH = CH + zH + ("(?:\\u200d(?:" + [SH, hH, tH].join("|") + ")" + CH + zH + ")*"),
      XH = "(?:" + [SH + AH + "?", AH, hH, tH, LH].join("|") + ")",
      GH = RegExp(rH + "(?=" + rH + ")|" + XH + EH, "g");
    HH.exports = function(HH) {
      return HH.match(GH) || []
    }
  },
  6458: HH => {
    HH.exports = function(HH) {
      return function() {
        return HH
      }
    }
  },
  5598: (HH, BH, LH) => {
    var AH = LH(5607),
      rH = LH(5609),
      SH = LH(5628),
      hH = Math.max,
      tH = Math.min;
    HH.exports = function(HH, BH, LH) {
      var zH, CH, EH, XH, GH, YH, uH = 0,
        QH = !1,
        WH = !1,
        MH = !0;
      if ("function" != typeof HH) throw new TypeError("Expected a function");

      function xH(BH) {
        var LH = zH,
          AH = CH;
        return zH = CH = void 0, uH = BH, XH = HH.apply(AH, LH)
      }

      function vH(HH) {
        var LH = HH - YH;
        return void 0 === YH || LH >= BH || LH < 0 || WH && HH - uH >= EH
      }

      function PH() {
        var HH = rH();
        if (vH(HH)) return TH(HH);
        GH = setTimeout(PH, function(HH) {
          var LH = BH - (HH - YH);
          return WH ? tH(LH, EH - (HH - uH)) : LH
        }(HH))
      }

      function TH(HH) {
        return GH = void 0, MH && zH ? xH(HH) : (zH = CH = void 0, XH)
      }

      function UH() {
        var HH = rH(),
          LH = vH(HH);
        if (zH = arguments, CH = this, YH = HH, LH) {
          if (void 0 === GH) return function(HH) {
            return uH = HH, GH = setTimeout(PH, BH), QH ? xH(HH) : XH
          }(YH);
          if (WH) return clearTimeout(GH), GH = setTimeout(PH, BH), xH(YH)
        }
        return void 0 === GH && (GH = setTimeout(PH, BH)), XH
      }
      return BH = SH(BH) || 0, AH(LH) && (QH = !!LH.leading, EH = (WH = "maxWait" in LH) ? hH(SH(LH.maxWait) || 0, BH) : EH, MH = "trailing" in LH ? !!LH.trailing : MH), UH.cancel = function() {
        void 0 !== GH && clearTimeout(GH), uH = 0, zH = YH = CH = GH = void 0
      }, UH.flush = function() {
        return void 0 === GH ? XH : TH(rH())
      }, UH
    }
  },
  5867: HH => {
    HH.exports = function(HH, BH) {
      return HH === BH || HH !== HH && BH !== BH
    }
  },
  6791: (HH, BH, LH) => {
    var AH = LH(6794),
      rH = LH(6802),
      SH = LH(6073),
      hH = LH(5695),
      tH = LH(6005);
    HH.exports = function(HH, BH, LH) {
      var zH = hH(HH) ? AH : rH;
      return LH && tH(HH, BH, LH) && (BH = void 0), zH(HH, SH(BH, 3))
    }
  },
  6872: (HH, BH, LH) => {
    var AH = LH(6879)(LH(6886));
    HH.exports = AH
  },
  6886: (HH, BH, LH) => {
    var AH = LH(6534),
      rH = LH(6073),
      SH = LH(6895),
      hH = Math.max;
    HH.exports = function(HH, BH, LH) {
      var tH = null == HH ? 0 : HH.length;
      if (!tH) return -1;
      var zH = null == LH ? 0 : SH(LH);
      return zH < 0 && (zH = hH(tH + zH, 0)), AH(HH, rH(BH, 3), zH)
    }
  },
  6715: (HH, BH, LH) => {
    var AH = LH(6032),
      rH = LH(6723);
    HH.exports = function(HH, BH) {
      return AH(rH(HH, BH), 1)
    }
  },
  5714: (HH, BH, LH) => {
    var AH = LH(5716);
    HH.exports = function(HH, BH, LH) {
      var rH = null == HH ? void 0 : AH(HH, BH);
      return void 0 === rH ? LH : rH
    }
  },
  6335: (HH, BH, LH) => {
    var AH = LH(6342),
      rH = LH(6346);
    HH.exports = function(HH, BH) {
      return null != HH && rH(HH, BH, AH)
    }
  },
  6353: HH => {
    HH.exports = function(HH) {
      return HH
    }
  },
  6055: (HH, BH, LH) => {
    var AH = LH(6062),
      rH = LH(5680),
      SH = Object.prototype,
      hH = SH.hasOwnProperty,
      tH = SH.propertyIsEnumerable,
      zH = AH(function() {
        return arguments
      }()) ? AH : function(HH) {
        return rH(HH) && hH.call(HH, "callee") && !tH.call(HH, "callee")
      };
    HH.exports = zH
  },
  5695: HH => {
    var BH = Array.isArray;
    HH.exports = BH
  },
  6012: (HH, BH, LH) => {
    var AH = LH(5789),
      rH = LH(6018);
    HH.exports = function(HH) {
      return null != HH && rH(HH.length) && !AH(HH)
    }
  },
  6844: (HH, BH, LH) => {
    var AH = LH(5655),
      rH = LH(5680);
    HH.exports = function(HH) {
      return !0 === HH || !1 === HH || rH(HH) && "[object Boolean]" == AH(HH)
    }
  },
  6221: (HH, BH, LH) => {
    HH = LH.nmd(HH);
    var AH = LH(5615),
      rH = LH(6228),
      SH = BH && !BH.nodeType && BH,
      hH = SH && HH && !HH.nodeType && HH,
      tH = hH && hH.exports === SH ? AH.rX : void 0,
      zH = (tH ? tH.isBuffer : void 0) || rH;
    HH.exports = zH
  },
  6728: (HH, BH, LH) => {
    var AH = LH(6111);
    HH.exports = function(HH, BH) {
      return AH(HH, BH)
    }
  },
  5789: (HH, BH, LH) => {
    var AH = LH(5655),
      rH = LH(5607);
    HH.exports = function(HH) {
      if (!rH(HH)) return !1;
      var BH = AH(HH);
      return "[object Function]" == BH || "[object GeneratorFunction]" == BH || "[object AsyncFunction]" == BH || "[object Proxy]" == BH
    }
  },
  6018: HH => {
    HH.exports = function(HH) {
      return "number" == typeof HH && HH > -1 && HH % 1 == 0 && HH <= 9007199254740991
    }
  },
  5702: (HH, BH, LH) => {
    var AH = LH(5708);
    HH.exports = function(HH) {
      return AH(HH) && HH != +HH
    }
  },
  5951: HH => {
    HH.exports = function(HH) {
      return null == HH
    }
  },
  5708: (HH, BH, LH) => {
    var AH = LH(5655),
      rH = LH(5680);
    HH.exports = function(HH) {
      return "number" == typeof HH || rH(HH) && "[object Number]" == AH(HH)
    }
  },
  5607: HH => {
    HH.exports = function(HH) {
      var BH = typeof HH;
      return null != HH && ("object" == BH || "function" == BH)
    }
  },
  5680: HH => {
    HH.exports = function(HH) {
      return null != HH && "object" == typeof HH
    }
  },
  6840: (HH, BH, LH) => {
    var AH = LH(5655),
      rH = LH(6842),
      SH = LH(5680),
      hH = Function.prototype,
      tH = Object.prototype,
      zH = hH.toString,
      CH = tH.hasOwnProperty,
      EH = zH.call(Object);
    HH.exports = function(HH) {
      if (!SH(HH) || "[object Object]" != AH(HH)) return !1;
      var BH = rH(HH);
      if (null === BH) return !0;
      var LH = CH.call(BH, "constructor") && BH.constructor;
      return "function" == typeof LH && LH instanceof LH && zH.call(LH) == EH
    }
  },
  5686: (HH, BH, LH) => {
    var AH = LH(5655),
      rH = LH(5695),
      SH = LH(5680);
    HH.exports = function(HH) {
      return "string" == typeof HH || !rH(HH) && SH(HH) && "[object String]" == AH(HH)
    }
  },
  5648: (HH, BH, LH) => {
    var AH = LH(5655),
      rH = LH(5680);
    HH.exports = function(HH) {
      return "symbol" == typeof HH || rH(HH) && "[object Symbol]" == AH(HH)
    }
  },
  6237: (HH, BH, LH) => {
    var AH = LH(6239),
      rH = LH(6243),
      SH = LH(6247),
      hH = SH && SH.isTypedArray,
      tH = hH ? rH(hH) : AH;
    HH.exports = tH
  },
  6200: (HH, BH, LH) => {
    var AH = LH(6205),
      rH = LH(6255),
      SH = LH(6012);
    HH.exports = function(HH) {
      return SH(HH) ? AH(HH) : rH(HH)
    }
  },
  6831: HH => {
    HH.exports = function(HH) {
      var BH = null == HH ? 0 : HH.length;
      return BH ? HH[BH - 1] : void 0
    }
  },
  6723: (HH, BH, LH) => {
    var AH = LH(5941),
      rH = LH(6073),
      SH = LH(6380),
      hH = LH(5695);
    HH.exports = function(HH, BH) {
      return (hH(HH) ? AH : SH)(HH, rH(BH, 3))
    }
  },
  6779: (HH, BH, LH) => {
    var AH = LH(6786),
      rH = LH(6391),
      SH = LH(6073);
    HH.exports = function(HH, BH) {
      var LH = {};
      return BH = SH(BH, 3), rH(HH, (function(HH, rH, SH) {
        AH(LH, rH, BH(HH, rH, SH))
      })), LH
    }
  },
  6689: (HH, BH, LH) => {
    var AH = LH(6693),
      rH = LH(6695),
      SH = LH(6353);
    HH.exports = function(HH) {
      return HH && HH.length ? AH(HH, SH, rH) : void 0
    }
  },
  5743: (HH, BH, LH) => {
    var AH = LH(5750);

    function rH(HH, BH) {
      if ("function" != typeof HH || null != BH && "function" != typeof BH) throw new TypeError("Expected a function");
      var LH = function() {
        var AH = arguments,
          rH = BH ? BH.apply(this, AH) : AH[0],
          SH = LH.cache;
        if (SH.has(rH)) return SH.get(rH);
        var hH = HH.apply(this, AH);
        return LH.cache = SH.set(rH, hH) || SH, hH
      };
      return LH.cache = new(rH.Cache || AH), LH
    }
    rH.Cache = AH, HH.exports = rH
  },
  6704: (HH, BH, LH) => {
    var AH = LH(6693),
      rH = LH(6710),
      SH = LH(6353);
    HH.exports = function(HH) {
      return HH && HH.length ? AH(HH, SH, rH) : void 0
    }
  },
  6561: HH => {
    HH.exports = function() {}
  },
  5609: (HH, BH, LH) => {
    var AH = LH(5615);
    HH.exports = function() {
      return AH.Date.now()
    }
  },
  6359: (HH, BH, LH) => {
    var AH = LH(6368),
      rH = LH(6371),
      SH = LH(5727),
      hH = LH(5949);
    HH.exports = function(HH) {
      return SH(HH) ? AH(hH(HH)) : rH(HH)
    }
  },
  5986: (HH, BH, LH) => {
    var AH = LH(5989)();
    HH.exports = AH
  },
  6860: (HH, BH, LH) => {
    var AH = LH(6141),
      rH = LH(6073),
      SH = LH(6865),
      hH = LH(5695),
      tH = LH(6005);
    HH.exports = function(HH, BH, LH) {
      var zH = hH(HH) ? AH : SH;
      return LH && tH(HH, BH, LH) && (BH = void 0), zH(HH, rH(BH, 3))
    }
  },
  6028: (HH, BH, LH) => {
    var AH = LH(6032),
      rH = LH(6068),
      SH = LH(6429),
      hH = LH(6005),
      tH = SH((function(HH, BH) {
        if (null == HH) return [];
        var LH = BH.length;
        return LH > 1 && hH(HH, BH[0], BH[1]) ? BH = [] : LH > 2 && hH(BH[0], BH[1], BH[2]) && (BH = [BH[0]]), rH(HH, AH(BH, 1), [])
      }));
    HH.exports = tH
  },
  6196: HH => {
    HH.exports = function() {
      return []
    }
  },
  6228: HH => {
    HH.exports = function() {
      return !1
    }
  },
  5590: (HH, BH, LH) => {
    var AH = LH(5598),
      rH = LH(5607);
    HH.exports = function(HH, BH, LH) {
      var SH = !0,
        hH = !0;
      if ("function" != typeof HH) throw new TypeError("Expected a function");
      return rH(LH) && (SH = "leading" in LH ? !!LH.leading : SH, hH = "trailing" in LH ? !!LH.trailing : hH), AH(HH, BH, {
        leading: SH,
        maxWait: BH,
        trailing: hH
      })
    }
  },
  6026: (HH, BH, LH) => {
    var AH = LH(5628),
      rH = 1 / 0;
    HH.exports = function(HH) {
      return HH ? (HH = AH(HH)) === rH || HH === -1 / 0 ? 17976931348623157e292 * (HH < 0 ? -1 : 1) : HH === HH ? HH : 0 : 0 === HH ? HH : 0
    }
  },
  6895: (HH, BH, LH) => {
    var AH = LH(6026);
    HH.exports = function(HH) {
      var BH = AH(HH),
        LH = BH % 1;
      return BH === BH ? LH ? BH - LH : BH : 0
    }
  },
  5628: (HH, BH, LH) => {
    var AH = LH(5635),
      rH = LH(5607),
      SH = LH(5648),
      hH = /^[-+]0x[0-9a-f]+$/i,
      tH = /^0b[01]+$/i,
      zH = /^0o[0-7]+$/i,
      CH = parseInt;
    HH.exports = function(HH) {
      if ("number" == typeof HH) return HH;
      if (SH(HH)) return NaN;
      if (rH(HH)) {
        var BH = "function" == typeof HH.valueOf ? HH.valueOf() : HH;
        HH = rH(BH) ? BH + "" : BH
      }
      if ("string" != typeof HH) return 0 === HH ? HH : +HH;
      HH = AH(HH);
      var LH = tH.test(HH);
      return LH || zH.test(HH) ? CH(HH.slice(2), LH ? 2 : 8) : hH.test(HH) ? NaN : +HH
    }
  },
  5928: (HH, BH, LH) => {
    var AH = LH(5932);
    HH.exports = function(HH) {
      return null == HH ? "" : AH(HH)
    }
  },
  6508: (HH, BH, LH) => {
    var AH = LH(6073),
      rH = LH(6513);
    HH.exports = function(HH, BH) {
      return HH && HH.length ? rH(HH, AH(BH, 2)) : []
    }
  },
  6583: (HH, BH, LH) => {
    var AH = LH(6591)("toUpperCase");
    HH.exports = AH
  },
  6655: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => qB
    });
    var AH = LH(45),
      rH = LH(5450),
      SH = LH.n(rH);
    const {
      getOwnPropertyNames: hH,
      getOwnPropertySymbols: tH
    } = Object, {
      hasOwnProperty: zH
    } = Object.prototype;

    function CH(HH, BH) {
      return function(LH, AH, rH) {
        return HH(LH, AH, rH) && BH(LH, AH, rH)
      }
    }

    function EH(HH) {
      return function(BH, LH, AH) {
        if (!BH || !LH || "object" !== typeof BH || "object" !== typeof LH) return HH(BH, LH, AH);
        const {
          cache: rH
        } = AH, SH = rH.get(BH), hH = rH.get(LH);
        if (SH && hH) return SH === LH && hH === BH;
        rH.set(BH, LH), rH.set(LH, BH);
        const tH = HH(BH, LH, AH);
        return rH.delete(BH), rH.delete(LH), tH
      }
    }

    function XH(HH) {
      return hH(HH).concat(tH(HH))
    }
    const GH = Object.hasOwn || ((HH, BH) => zH.call(HH, BH));

    function YH(HH, BH) {
      return HH === BH || !HH && !BH && HH !== HH && BH !== BH
    }
    const {
      getOwnPropertyDescriptor: uH,
      keys: QH
    } = Object;

    function WH(HH, BH) {
      return HH.byteLength === BH.byteLength && IH(new Uint8Array(HH), new Uint8Array(BH))
    }

    function MH(HH, BH, LH) {
      let AH = HH.length;
      if (BH.length !== AH) return !1;
      for (; AH-- > 0;)
        if (!LH.equals(HH[AH], BH[AH], AH, AH, HH, BH, LH)) return !1;
      return !0
    }

    function xH(HH, BH) {
      return HH.byteLength === BH.byteLength && IH(new Uint8Array(HH.buffer, HH.byteOffset, HH.byteLength), new Uint8Array(BH.buffer, BH.byteOffset, BH.byteLength))
    }

    function vH(HH, BH) {
      return YH(HH.getTime(), BH.getTime())
    }

    function PH(HH, BH) {
      return HH.name === BH.name && HH.message === BH.message && HH.cause === BH.cause && HH.stack === BH.stack
    }

    function TH(HH, BH) {
      return HH === BH
    }

    function UH(HH, BH, LH) {
      const AH = HH.size;
      if (AH !== BH.size) return !1;
      if (!AH) return !0;
      const rH = new Array(AH),
        SH = HH.entries();
      let hH, tH, zH = 0;
      for (;
        (hH = SH.next()) && !hH.done;) {
        const AH = BH.entries();
        let SH = !1,
          CH = 0;
        for (;
          (tH = AH.next()) && !tH.done;) {
          if (rH[CH]) {
            CH++;
            continue
          }
          const AH = hH.value,
            EH = tH.value;
          if (LH.equals(AH[0], EH[0], zH, CH, HH, BH, LH) && LH.equals(AH[1], EH[1], AH[0], EH[0], HH, BH, LH)) {
            SH = rH[CH] = !0;
            break
          }
          CH++
        }
        if (!SH) return !1;
        zH++
      }
      return !0
    }
    const VH = YH;

    function OH(HH, BH, LH) {
      const AH = QH(HH);
      let rH = AH.length;
      if (QH(BH).length !== rH) return !1;
      for (; rH-- > 0;)
        if (!lH(HH, BH, LH, AH[rH])) return !1;
      return !0
    }

    function bH(HH, BH, LH) {
      const AH = XH(HH);
      let rH, SH, hH, tH = AH.length;
      if (XH(BH).length !== tH) return !1;
      for (; tH-- > 0;) {
        if (rH = AH[tH], !lH(HH, BH, LH, rH)) return !1;
        if (SH = uH(HH, rH), hH = uH(BH, rH), (SH || hH) && (!SH || !hH || SH.configurable !== hH.configurable || SH.enumerable !== hH.enumerable || SH.writable !== hH.writable)) return !1
      }
      return !0
    }

    function kH(HH, BH) {
      return YH(HH.valueOf(), BH.valueOf())
    }

    function mH(HH, BH) {
      return HH.source === BH.source && HH.flags === BH.flags
    }

    function oH(HH, BH, LH) {
      const AH = HH.size;
      if (AH !== BH.size) return !1;
      if (!AH) return !0;
      const rH = new Array(AH),
        SH = HH.values();
      let hH, tH;
      for (;
        (hH = SH.next()) && !hH.done;) {
        const AH = BH.values();
        let SH = !1,
          zH = 0;
        for (;
          (tH = AH.next()) && !tH.done;) {
          if (!rH[zH] && LH.equals(hH.value, tH.value, hH.value, tH.value, HH, BH, LH)) {
            SH = rH[zH] = !0;
            break
          }
          zH++
        }
        if (!SH) return !1
      }
      return !0
    }

    function IH(HH, BH) {
      let LH = HH.byteLength;
      if (BH.byteLength !== LH || HH.byteOffset !== BH.byteOffset) return !1;
      for (; LH-- > 0;)
        if (HH[LH] !== BH[LH]) return !1;
      return !0
    }

    function fH(HH, BH) {
      return HH.hostname === BH.hostname && HH.pathname === BH.pathname && HH.protocol === BH.protocol && HH.port === BH.port && HH.hash === BH.hash && HH.username === BH.username && HH.password === BH.password
    }

    function lH(HH, BH, LH, AH) {
      return !("_owner" !== AH && "__o" !== AH && "__v" !== AH || !HH.$$typeof && !BH.$$typeof) || GH(BH, AH) && LH.equals(HH[AH], BH[AH], AH, AH, HH, BH, LH)
    }
    const KH = {
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
      cH = Object.prototype.toString;

    function eH(HH) {
      let {
        areArrayBuffersEqual: BH,
        areArraysEqual: LH,
        areDataViewsEqual: AH,
        areDatesEqual: rH,
        areErrorsEqual: SH,
        areFunctionsEqual: hH,
        areMapsEqual: tH,
        areNumbersEqual: zH,
        areObjectsEqual: CH,
        arePrimitiveWrappersEqual: EH,
        areRegExpsEqual: XH,
        areSetsEqual: GH,
        areTypedArraysEqual: YH,
        areUrlsEqual: uH,
        unknownTagComparators: QH
      } = HH;
      return function(HH, WH, MH) {
        if (HH === WH) return !0;
        if (null == HH || null == WH) return !1;
        const xH = typeof HH;
        if (xH !== typeof WH) return !1;
        if ("object" !== xH) return "number" === xH ? zH(HH, WH, MH) : "function" === xH && hH(HH, WH, MH);
        const vH = HH.constructor;
        if (vH !== WH.constructor) return !1;
        if (vH === Object) return CH(HH, WH, MH);
        if (Array.isArray(HH)) return LH(HH, WH, MH);
        if (vH === Date) return rH(HH, WH, MH);
        if (vH === RegExp) return XH(HH, WH, MH);
        if (vH === Map) return tH(HH, WH, MH);
        if (vH === Set) return GH(HH, WH, MH);
        const PH = cH.call(HH);
        if ("[object Date]" === PH) return rH(HH, WH, MH);
        if ("[object RegExp]" === PH) return XH(HH, WH, MH);
        if ("[object Map]" === PH) return tH(HH, WH, MH);
        if ("[object Set]" === PH) return GH(HH, WH, MH);
        if ("[object Object]" === PH) return "function" !== typeof HH.then && "function" !== typeof WH.then && CH(HH, WH, MH);
        if ("[object URL]" === PH) return uH(HH, WH, MH);
        if ("[object Error]" === PH) return SH(HH, WH, MH);
        if ("[object Arguments]" === PH) return CH(HH, WH, MH);
        if (KH[PH]) return YH(HH, WH, MH);
        if ("[object ArrayBuffer]" === PH) return BH(HH, WH, MH);
        if ("[object DataView]" === PH) return AH(HH, WH, MH);
        if ("[object Boolean]" === PH || "[object Number]" === PH || "[object String]" === PH) return EH(HH, WH, MH);
        if (QH) {
          let BH = QH[PH];
          if (!BH) {
            const LH = null != (TH = HH) ? TH[Symbol.toStringTag] : void 0;
            LH && (BH = QH[LH])
          }
          if (BH) return BH(HH, WH, MH)
        }
        var TH;
        return !1
      }
    }
    const qH = gH();
    gH({
      strict: !0
    }), gH({
      circular: !0
    }), gH({
      circular: !0,
      strict: !0
    }), gH({
      createInternalComparator: () => YH
    }), gH({
      strict: !0,
      createInternalComparator: () => YH
    }), gH({
      circular: !0,
      createInternalComparator: () => YH
    }), gH({
      circular: !0,
      createInternalComparator: () => YH,
      strict: !0
    });

    function gH() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        circular: BH = !1,
        createInternalComparator: LH,
        createState: AH,
        strict: rH = !1
      } = HH, SH = function(HH) {
        let {
          circular: BH,
          createCustomConfig: LH,
          strict: AH
        } = HH, rH = {
          areArrayBuffersEqual: WH,
          areArraysEqual: AH ? bH : MH,
          areDataViewsEqual: xH,
          areDatesEqual: vH,
          areErrorsEqual: PH,
          areFunctionsEqual: TH,
          areMapsEqual: AH ? CH(UH, bH) : UH,
          areNumbersEqual: VH,
          areObjectsEqual: AH ? bH : OH,
          arePrimitiveWrappersEqual: kH,
          areRegExpsEqual: mH,
          areSetsEqual: AH ? CH(oH, bH) : oH,
          areTypedArraysEqual: AH ? CH(IH, bH) : IH,
          areUrlsEqual: fH,
          unknownTagComparators: void 0
        };
        if (LH && (rH = Object.assign({}, rH, LH(rH))), BH) {
          const HH = EH(rH.areArraysEqual),
            BH = EH(rH.areMapsEqual),
            LH = EH(rH.areObjectsEqual),
            AH = EH(rH.areSetsEqual);
          rH = Object.assign({}, rH, {
            areArraysEqual: HH,
            areMapsEqual: BH,
            areObjectsEqual: LH,
            areSetsEqual: AH
          })
        }
        return rH
      }(HH), hH = eH(SH);
      var tH;
      return function(HH) {
        let {
          circular: BH,
          comparator: LH,
          createState: AH,
          equals: rH,
          strict: SH
        } = HH;
        if (AH) return function(HH, hH) {
          const {
            cache: tH = (BH ? new WeakMap : void 0),
            meta: zH
          } = AH();
          return LH(HH, hH, {
            cache: tH,
            equals: rH,
            meta: zH,
            strict: SH
          })
        };
        if (BH) return function(HH, BH) {
          return LH(HH, BH, {
            cache: new WeakMap,
            equals: rH,
            meta: void 0,
            strict: SH
          })
        };
        const hH = {
          cache: void 0,
          equals: rH,
          meta: void 0,
          strict: SH
        };
        return function(HH, BH) {
          return LH(HH, BH, hH)
        }
      }({
        circular: BH,
        comparator: hH,
        createState: AH,
        equals: LH ? LH(hH) : (tH = hH, function(HH, BH, LH, AH, rH, SH, hH) {
          return tH(HH, BH, hH)
        }),
        strict: rH
      })
    }

    function NH(HH) {
      var BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        LH = -1;
      requestAnimationFrame((function AH(rH) {
        LH < 0 && (LH = rH), rH - LH > BH ? (HH(rH), LH = -1) : function(HH) {
          "undefined" !== typeof requestAnimationFrame && requestAnimationFrame(HH)
        }(AH)
      }))
    }

    function RH(HH) {
      return RH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, RH(HH)
    }

    function jH(HH) {
      return function(HH) {
        if (Array.isArray(HH)) return HH
      }(HH) || function(HH) {
        if ("undefined" !== typeof Symbol && null != HH[Symbol.iterator] || null != HH["@@iterator"]) return Array.from(HH)
      }(HH) || function(HH, BH) {
        if (!HH) return;
        if ("string" === typeof HH) return nH(HH, BH);
        var LH = Object.prototype.toString.call(HH).slice(8, -1);
        "Object" === LH && HH.constructor && (LH = HH.constructor.name);
        if ("Map" === LH || "Set" === LH) return Array.from(HH);
        if ("Arguments" === LH || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(LH)) return nH(HH, BH)
      }(HH) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function nH(HH, BH) {
      (null == BH || BH > HH.length) && (BH = HH.length);
      for (var LH = 0, AH = new Array(BH); LH < BH; LH++) AH[LH] = HH[LH];
      return AH
    }

    function FH() {
      var HH = function() {
          return null
        },
        BH = !1,
        LH = function LH(AH) {
          if (!BH) {
            if (Array.isArray(AH)) {
              if (!AH.length) return;
              var rH = jH(AH),
                SH = rH[0],
                hH = rH.slice(1);
              return "number" === typeof SH ? void NH(LH.bind(null, hH), SH) : (LH(SH), void NH(LH.bind(null, hH)))
            }
            "object" === RH(AH) && HH(AH), "function" === typeof AH && AH()
          }
        };
      return {
        stop: function() {
          BH = !0
        },
        start: function(HH) {
          BH = !1, LH(HH)
        },
        subscribe: function(BH) {
          return HH = BH,
            function() {
              HH = function() {
                return null
              }
            }
        }
      }
    }

    function DH(HH) {
      return DH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, DH(HH)
    }

    function wH(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function ZH(HH) {
      for (var BH = 1; BH < arguments.length; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? wH(Object(LH), !0).forEach((function(BH) {
          dH(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : wH(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }

    function dH(HH, BH, LH) {
      return (BH = function(HH) {
        var BH = function(HH, BH) {
          if ("object" !== DH(HH) || null === HH) return HH;
          var LH = HH[Symbol.toPrimitive];
          if (void 0 !== LH) {
            var AH = LH.call(HH, BH || "default");
            if ("object" !== DH(AH)) return AH;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === BH ? String : Number)(HH)
        }(HH, "string");
        return "symbol" === DH(BH) ? BH : String(BH)
      }(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }
    var aH = function(HH) {
        return HH
      },
      sH = function(HH, BH) {
        return Object.keys(BH).reduce((function(LH, AH) {
          return ZH(ZH({}, LH), {}, dH({}, AH, HH(AH, BH[AH])))
        }), {})
      },
      JH = function(HH, BH, LH) {
        return HH.map((function(HH) {
          return "".concat((AH = HH, AH.replace(/([A-Z])/g, (function(HH) {
            return "-".concat(HH.toLowerCase())
          }))), " ").concat(BH, "ms ").concat(LH);
          var AH
        })).join(",")
      };

    function iH(HH, BH) {
      return function(HH) {
        if (Array.isArray(HH)) return HH
      }(HH) || function(HH, BH) {
        var LH = null == HH ? null : "undefined" != typeof Symbol && HH[Symbol.iterator] || HH["@@iterator"];
        if (null != LH) {
          var AH, rH, SH, hH, tH = [],
            zH = !0,
            CH = !1;
          try {
            if (SH = (LH = LH.call(HH)).next, 0 === BH) {
              if (Object(LH) !== LH) return;
              zH = !1
            } else
              for (; !(zH = (AH = SH.call(LH)).done) && (tH.push(AH.value), tH.length !== BH); zH = !0);
          } catch (HH) {
            CH = !0, rH = HH
          } finally {
            try {
              if (!zH && null != LH.return && (hH = LH.return(), Object(hH) !== hH)) return
            } finally {
              if (CH) throw rH
            }
          }
          return tH
        }
      }(HH, BH) || yH(HH, BH) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function pH(HH) {
      return function(HH) {
        if (Array.isArray(HH)) return HB(HH)
      }(HH) || function(HH) {
        if ("undefined" !== typeof Symbol && null != HH[Symbol.iterator] || null != HH["@@iterator"]) return Array.from(HH)
      }(HH) || yH(HH) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function yH(HH, BH) {
      if (HH) {
        if ("string" === typeof HH) return HB(HH, BH);
        var LH = Object.prototype.toString.call(HH).slice(8, -1);
        return "Object" === LH && HH.constructor && (LH = HH.constructor.name), "Map" === LH || "Set" === LH ? Array.from(HH) : "Arguments" === LH || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(LH) ? HB(HH, BH) : void 0
      }
    }

    function HB(HH, BH) {
      (null == BH || BH > HH.length) && (BH = HH.length);
      for (var LH = 0, AH = new Array(BH); LH < BH; LH++) AH[LH] = HH[LH];
      return AH
    }
    var BB = 1e-4,
      LB = function(HH, BH) {
        return [0, 3 * HH, 3 * BH - 6 * HH, 3 * HH - 3 * BH + 1]
      },
      AB = function(HH, BH) {
        return HH.map((function(HH, LH) {
          return HH * Math.pow(BH, LH)
        })).reduce((function(HH, BH) {
          return HH + BH
        }))
      },
      rB = function(HH, BH) {
        return function(LH) {
          var AH = LB(HH, BH);
          return AB(AH, LH)
        }
      },
      SB = function() {
        for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
        var AH = BH[0],
          rH = BH[1],
          SH = BH[2],
          hH = BH[3];
        if (1 === BH.length) switch (BH[0]) {
          case "linear":
            AH = 0, rH = 0, SH = 1, hH = 1;
            break;
          case "ease":
            AH = .25, rH = .1, SH = .25, hH = 1;
            break;
          case "ease-in":
            AH = .42, rH = 0, SH = 1, hH = 1;
            break;
          case "ease-out":
            AH = .42, rH = 0, SH = .58, hH = 1;
            break;
          case "ease-in-out":
            AH = 0, rH = 0, SH = .58, hH = 1;
            break;
          default:
            var tH = BH[0].split("(");
            if ("cubic-bezier" === tH[0] && 4 === tH[1].split(")")[0].split(",").length) {
              var zH = iH(tH[1].split(")")[0].split(",").map((function(HH) {
                return parseFloat(HH)
              })), 4);
              AH = zH[0], rH = zH[1], SH = zH[2], hH = zH[3]
            }
        } [AH, SH, rH, hH].every((function(HH) {
          return "number" === typeof HH && HH >= 0 && HH <= 1
        }));
        var CH, EH, XH = rB(AH, SH),
          GH = rB(rH, hH),
          YH = (CH = AH, EH = SH, function(HH) {
            var BH = LB(CH, EH),
              LH = [].concat(pH(BH.map((function(HH, BH) {
                return HH * BH
              })).slice(1)), [0]);
            return AB(LH, HH)
          }),
          uH = function(HH) {
            for (var BH, LH = HH > 1 ? 1 : HH, AH = LH, rH = 0; rH < 8; ++rH) {
              var SH = XH(AH) - LH,
                hH = YH(AH);
              if (Math.abs(SH - LH) < BB || hH < BB) return GH(AH);
              AH = (BH = AH - SH / hH) > 1 ? 1 : BH < 0 ? 0 : BH
            }
            return GH(AH)
          };
        return uH.isStepper = !1, uH
      },
      hB = function() {
        for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
        var AH = BH[0];
        if ("string" === typeof AH) switch (AH) {
          case "ease":
          case "ease-in-out":
          case "ease-out":
          case "ease-in":
          case "linear":
            return SB(AH);
          case "spring":
            return function() {
              var HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                BH = HH.stiff,
                LH = void 0 === BH ? 100 : BH,
                AH = HH.damping,
                rH = void 0 === AH ? 8 : AH,
                SH = HH.dt,
                hH = void 0 === SH ? 17 : SH,
                tH = function(HH, BH, AH) {
                  var SH = AH + (-(HH - BH) * LH - AH * rH) * hH / 1e3,
                    tH = AH * hH / 1e3 + HH;
                  return Math.abs(tH - BH) < BB && Math.abs(SH) < BB ? [BH, 0] : [tH, SH]
                };
              return tH.isStepper = !0, tH.dt = hH, tH
            }();
          default:
            if ("cubic-bezier" === AH.split("(")[0]) return SB(AH)
        }
        return "function" === typeof AH ? AH : null
      };

    function tB(HH) {
      return tB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, tB(HH)
    }

    function zB(HH) {
      return function(HH) {
        if (Array.isArray(HH)) return uB(HH)
      }(HH) || function(HH) {
        if ("undefined" !== typeof Symbol && null != HH[Symbol.iterator] || null != HH["@@iterator"]) return Array.from(HH)
      }(HH) || YB(HH) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function CB(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function EB(HH) {
      for (var BH = 1; BH < arguments.length; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? CB(Object(LH), !0).forEach((function(BH) {
          XB(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : CB(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }

    function XB(HH, BH, LH) {
      return (BH = function(HH) {
        var BH = function(HH, BH) {
          if ("object" !== tB(HH) || null === HH) return HH;
          var LH = HH[Symbol.toPrimitive];
          if (void 0 !== LH) {
            var AH = LH.call(HH, BH || "default");
            if ("object" !== tB(AH)) return AH;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === BH ? String : Number)(HH)
        }(HH, "string");
        return "symbol" === tB(BH) ? BH : String(BH)
      }(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }

    function GB(HH, BH) {
      return function(HH) {
        if (Array.isArray(HH)) return HH
      }(HH) || function(HH, BH) {
        var LH = null == HH ? null : "undefined" != typeof Symbol && HH[Symbol.iterator] || HH["@@iterator"];
        if (null != LH) {
          var AH, rH, SH, hH, tH = [],
            zH = !0,
            CH = !1;
          try {
            if (SH = (LH = LH.call(HH)).next, 0 === BH) {
              if (Object(LH) !== LH) return;
              zH = !1
            } else
              for (; !(zH = (AH = SH.call(LH)).done) && (tH.push(AH.value), tH.length !== BH); zH = !0);
          } catch (HH) {
            CH = !0, rH = HH
          } finally {
            try {
              if (!zH && null != LH.return && (hH = LH.return(), Object(hH) !== hH)) return
            } finally {
              if (CH) throw rH
            }
          }
          return tH
        }
      }(HH, BH) || YB(HH, BH) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function YB(HH, BH) {
      if (HH) {
        if ("string" === typeof HH) return uB(HH, BH);
        var LH = Object.prototype.toString.call(HH).slice(8, -1);
        return "Object" === LH && HH.constructor && (LH = HH.constructor.name), "Map" === LH || "Set" === LH ? Array.from(HH) : "Arguments" === LH || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(LH) ? uB(HH, BH) : void 0
      }
    }

    function uB(HH, BH) {
      (null == BH || BH > HH.length) && (BH = HH.length);
      for (var LH = 0, AH = new Array(BH); LH < BH; LH++) AH[LH] = HH[LH];
      return AH
    }
    var QB = function(HH, BH, LH) {
        return HH + (BH - HH) * LH
      },
      WB = function(HH) {
        return HH.from !== HH.to
      },
      MB = function HH(BH, LH, AH) {
        var rH = sH((function(HH, LH) {
          if (WB(LH)) {
            var AH = GB(BH(LH.from, LH.to, LH.EW), 2),
              rH = AH[0],
              SH = AH[1];
            return EB(EB({}, LH), {}, {
              from: rH,
              EW: SH
            })
          }
          return LH
        }), LH);
        return AH < 1 ? sH((function(HH, BH) {
          return WB(BH) ? EB(EB({}, BH), {}, {
            EW: QB(BH.EW, rH[HH].EW, AH),
            from: QB(BH.from, rH[HH].from, AH)
          }) : BH
        }), LH) : HH(BH, rH, AH - 1)
      };
    const xB = function(HH, BH, LH, AH, rH) {
      var SH, hH, tH, zH, CH = (SH = HH, hH = BH, [Object.keys(SH), Object.keys(hH)].reduce((function(HH, BH) {
          return HH.filter((function(HH) {
            return BH.includes(HH)
          }))
        }))),
        EH = CH.reduce((function(LH, AH) {
          return EB(EB({}, LH), {}, XB({}, AH, [HH[AH], BH[AH]]))
        }), {}),
        XH = CH.reduce((function(LH, AH) {
          return EB(EB({}, LH), {}, XB({}, AH, {
            from: HH[AH],
            EW: 0,
            to: BH[AH]
          }))
        }), {}),
        GH = -1,
        YH = function() {
          return null
        };
      return YH = LH.isStepper ? function(AH) {
          tH || (tH = AH);
          var SH = (AH - tH) / LH.dt;
          XH = MB(LH, XH, SH), rH(EB(EB(EB({}, HH), BH), sH((function(HH, BH) {
            return BH.from
          }), XH))), tH = AH, Object.values(XH).filter(WB).length && (GH = requestAnimationFrame(YH))
        } : function(SH) {
          zH || (zH = SH);
          var hH = (SH - zH) / AH,
            tH = sH((function(HH, BH) {
              return QB.apply(void 0, zB(BH).concat([LH(hH)]))
            }), EH);
          if (rH(EB(EB(EB({}, HH), BH), tH)), hH < 1) GH = requestAnimationFrame(YH);
          else {
            var CH = sH((function(HH, BH) {
              return QB.apply(void 0, zB(BH).concat([LH(1)]))
            }), EH);
            rH(EB(EB(EB({}, HH), BH), CH))
          }
        },
        function() {
          return requestAnimationFrame(YH),
            function() {
              cancelAnimationFrame(GH)
            }
        }
    };

    function vB(HH) {
      return vB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, vB(HH)
    }
    var PB = ["children", "PX", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];

    function TB(HH, BH) {
      if (null == HH) return {};
      var LH, AH, rH = function(HH, BH) {
        if (null == HH) return {};
        var LH, AH, rH = {},
          SH = Object.keys(HH);
        for (AH = 0; AH < SH.length; AH++) LH = SH[AH], BH.indexOf(LH) >= 0 || (rH[LH] = HH[LH]);
        return rH
      }(HH, BH);
      if (Object.getOwnPropertySymbols) {
        var SH = Object.getOwnPropertySymbols(HH);
        for (AH = 0; AH < SH.length; AH++) LH = SH[AH], BH.indexOf(LH) >= 0 || Object.prototype.propertyIsEnumerable.call(HH, LH) && (rH[LH] = HH[LH])
      }
      return rH
    }

    function UB(HH) {
      return function(HH) {
        if (Array.isArray(HH)) return VB(HH)
      }(HH) || function(HH) {
        if ("undefined" !== typeof Symbol && null != HH[Symbol.iterator] || null != HH["@@iterator"]) return Array.from(HH)
      }(HH) || function(HH, BH) {
        if (!HH) return;
        if ("string" === typeof HH) return VB(HH, BH);
        var LH = Object.prototype.toString.call(HH).slice(8, -1);
        "Object" === LH && HH.constructor && (LH = HH.constructor.name);
        if ("Map" === LH || "Set" === LH) return Array.from(HH);
        if ("Arguments" === LH || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(LH)) return VB(HH, BH)
      }(HH) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function VB(HH, BH) {
      (null == BH || BH > HH.length) && (BH = HH.length);
      for (var LH = 0, AH = new Array(BH); LH < BH; LH++) AH[LH] = HH[LH];
      return AH
    }

    function OB(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function bB(HH) {
      for (var BH = 1; BH < arguments.length; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? OB(Object(LH), !0).forEach((function(BH) {
          kB(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : OB(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }

    function kB(HH, BH, LH) {
      return (BH = oB(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }

    function mB(HH, BH) {
      for (var LH = 0; LH < BH.length; LH++) {
        var AH = BH[LH];
        AH.enumerable = AH.enumerable || !1, AH.configurable = !0, "value" in AH && (AH.writable = !0), Object.defineProperty(HH, oB(AH.key), AH)
      }
    }

    function oB(HH) {
      var BH = function(HH, BH) {
        if ("object" !== vB(HH) || null === HH) return HH;
        var LH = HH[Symbol.toPrimitive];
        if (void 0 !== LH) {
          var AH = LH.call(HH, BH || "default");
          if ("object" !== vB(AH)) return AH;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === BH ? String : Number)(HH)
      }(HH, "string");
      return "symbol" === vB(BH) ? BH : String(BH)
    }

    function IB(HH, BH) {
      return IB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(HH, BH) {
        return HH.__proto__ = BH, HH
      }, IB(HH, BH)
    }

    function fB(HH) {
      var BH = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (HH) {
          return !1
        }
      }();
      return function() {
        var LH, AH = cB(HH);
        if (BH) {
          var rH = cB(this).constructor;
          LH = Reflect.construct(AH, arguments, rH)
        } else LH = AH.apply(this, arguments);
        return lB(this, LH)
      }
    }

    function lB(HH, BH) {
      if (BH && ("object" === vB(BH) || "function" === typeof BH)) return BH;
      if (void 0 !== BH) throw new TypeError("Derived constructors may only return object or undefined");
      return KB(HH)
    }

    function KB(HH) {
      if (void 0 === HH) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return HH
    }

    function cB(HH) {
      return cB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(HH) {
        return HH.__proto__ || Object.getPrototypeOf(HH)
      }, cB(HH)
    }
    var eB = function(HH) {
      ! function(HH, BH) {
        if ("function" !== typeof BH && null !== BH) throw new TypeError("Super expression must either be null or a function");
        HH.prototype = Object.create(BH && BH.prototype, {
          constructor: {
            value: HH,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(HH, "prototype", {
          writable: !1
        }), BH && IB(HH, BH)
      }(hH, HH);
      var BH, LH, rH, SH = fB(hH);

      function hH(HH, BH) {
        var LH;
        ! function(HH, BH) {
          if (!(HH instanceof BH)) throw new TypeError("Cannot call a class as a function")
        }(this, hH);
        var AH = (LH = SH.call(this, HH, BH)).props,
          rH = AH.isActive,
          tH = AH.attributeName,
          zH = AH.from,
          CH = AH.to,
          EH = AH.steps,
          XH = AH.children,
          GH = AH.duration;
        if (LH.handleStyleChange = LH.handleStyleChange.bind(KB(LH)), LH.changeStyle = LH.changeStyle.bind(KB(LH)), !rH || GH <= 0) return LH.state = {
          style: {}
        }, "function" === typeof XH && (LH.state = {
          style: CH
        }), lB(LH);
        if (EH && EH.length) LH.state = {
          style: EH[0].style
        };
        else if (zH) {
          if ("function" === typeof XH) return LH.state = {
            style: zH
          }, lB(LH);
          LH.state = {
            style: tH ? kB({}, tH, zH) : zH
          }
        } else LH.state = {
          style: {}
        };
        return LH
      }
      return BH = hH, (LH = [{
        key: "componentDidMount",
        value: function() {
          var HH = this.props,
            BH = HH.isActive,
            LH = HH.canBegin;
          this.mounted = !0, BH && LH && this.runAnimation(this.props)
        }
      }, {
        key: "componentDidUpdate",
        value: function(HH) {
          var BH = this.props,
            LH = BH.isActive,
            AH = BH.canBegin,
            rH = BH.attributeName,
            SH = BH.shouldReAnimate,
            hH = BH.to,
            tH = BH.from,
            zH = this.state.style;
          if (AH)
            if (LH) {
              if (!(qH(HH.to, hH) && HH.canBegin && HH.isActive)) {
                var CH = !HH.canBegin || !HH.isActive;
                this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
                var EH = CH || SH ? tH : HH.to;
                if (this.state && zH) {
                  var XH = {
                    style: rH ? kB({}, rH, EH) : EH
                  };
                  (rH && zH[rH] !== EH || !rH && zH !== EH) && this.setState(XH)
                }
                this.runAnimation(bB(bB({}, this.props), {}, {
                  from: EH,
                  PX: 0
                }))
              }
            } else {
              var GH = {
                style: rH ? kB({}, rH, hH) : hH
              };
              this.state && zH && (rH && zH[rH] !== hH || !rH && zH !== hH) && this.setState(GH)
            }
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          this.mounted = !1;
          var HH = this.props.onAnimationEnd;
          this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), HH && HH()
        }
      }, {
        key: "handleStyleChange",
        value: function(HH) {
          this.changeStyle(HH)
        }
      }, {
        key: "changeStyle",
        value: function(HH) {
          this.mounted && this.setState({
            style: HH
          })
        }
      }, {
        key: "runJSAnimation",
        value: function(HH) {
          var BH = this,
            LH = HH.from,
            AH = HH.to,
            rH = HH.duration,
            SH = HH.easing,
            hH = HH.PX,
            tH = HH.onAnimationEnd,
            zH = HH.onAnimationStart,
            CH = xB(LH, AH, hB(SH), rH, this.changeStyle);
          this.manager.start([zH, hH, function() {
            BH.stopJSAnimation = CH()
          }, rH, tH])
        }
      }, {
        key: "runStepAnimation",
        value: function(HH) {
          var BH = this,
            LH = HH.steps,
            AH = HH.PX,
            rH = HH.onAnimationStart,
            SH = LH[0],
            hH = SH.style,
            tH = SH.duration,
            zH = void 0 === tH ? 0 : tH;
          return this.manager.start([rH].concat(UB(LH.reduce((function(HH, AH, rH) {
            if (0 === rH) return HH;
            var SH = AH.duration,
              hH = AH.easing,
              tH = void 0 === hH ? "ease" : hH,
              zH = AH.style,
              CH = AH.properties,
              EH = AH.onAnimationEnd,
              XH = rH > 0 ? LH[rH - 1] : AH,
              GH = CH || Object.keys(zH);
            if ("function" === typeof tH || "spring" === tH) return [].concat(UB(HH), [BH.runJSAnimation.bind(BH, {
              from: XH.style,
              to: zH,
              duration: SH,
              easing: tH
            }), SH]);
            var YH = JH(GH, SH, tH),
              uH = bB(bB(bB({}, XH.style), zH), {}, {
                transition: YH
              });
            return [].concat(UB(HH), [uH, SH, EH]).filter(aH)
          }), [hH, Math.max(zH, AH)])), [HH.onAnimationEnd]))
        }
      }, {
        key: "runAnimation",
        value: function(HH) {
          this.manager || (this.manager = FH());
          var BH = HH.PX,
            LH = HH.duration,
            AH = HH.attributeName,
            rH = HH.to,
            SH = HH.easing,
            hH = HH.onAnimationStart,
            tH = HH.onAnimationEnd,
            zH = HH.steps,
            CH = HH.children,
            EH = this.manager;
          if (this.unSubscribe = EH.subscribe(this.handleStyleChange), "function" !== typeof SH && "function" !== typeof CH && "spring" !== SH)
            if (zH.length > 1) this.runStepAnimation(HH);
            else {
              var XH = AH ? kB({}, AH, rH) : rH,
                GH = JH(Object.keys(XH), LH, SH);
              EH.start([hH, BH, bB(bB({}, XH), {}, {
                transition: GH
              }), LH, tH])
            }
          else this.runJSAnimation(HH)
        }
      }, {
        key: "render",
        value: function() {
          var HH = this.props,
            BH = HH.children,
            LH = (HH.PX, HH.duration),
            rH = (HH.attributeName, HH.easing, HH.isActive),
            SH = (HH.steps, HH.from, HH.to, HH.canBegin, HH.onAnimationEnd, HH.shouldReAnimate, HH.onAnimationReStart, TB(HH, PB)),
            hH = AH.Children.count(BH),
            tH = this.state.style;
          if ("function" === typeof BH) return BH(tH);
          if (!rH || 0 === hH || LH <= 0) return BH;
          var zH = function(HH) {
            var BH = HH.props,
              LH = BH.style,
              rH = void 0 === LH ? {} : LH,
              hH = BH.className;
            return (0, AH.cloneElement)(HH, bB(bB({}, SH), {}, {
              style: bB(bB({}, rH), tH),
              className: hH
            }))
          };
          return 1 === hH ? zH(AH.Children.only(BH)) : AH.createElement("div", null, AH.Children.map(BH, (function(HH) {
            return zH(HH)
          })))
        }
      }]) && mB(BH.prototype, LH), rH && mB(BH, rH), Object.defineProperty(BH, "prototype", {
        writable: !1
      }), hH
    }(AH.PureComponent);
    eB.displayName = "Animate", eB.defaultProps = {
      PX: 0,
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
    }, eB.propTypes = {
      from: SH().oneOfType([SH().object, SH().string]),
      to: SH().oneOfType([SH().object, SH().string]),
      attributeName: SH().string,
      duration: SH().number,
      PX: SH().number,
      easing: SH().oneOfType([SH().string, SH().func]),
      steps: SH().arrayOf(SH().shape({
        duration: SH().number.isRequired,
        style: SH().object.isRequired,
        easing: SH().oneOfType([SH().oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), SH().func]),
        properties: SH().arrayOf("string"),
        onAnimationEnd: SH().func
      })),
      children: SH().oneOfType([SH().node, SH().func]),
      isActive: SH().bool,
      canBegin: SH().bool,
      onAnimationEnd: SH().func,
      shouldReAnimate: SH().bool,
      onAnimationStart: SH().func,
      onAnimationReStart: SH().func
    };
    const qB = eB
  },
  6907: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => jH
    });
    var AH, rH = LH(45),
      SH = LH(5582),
      hH = LH(6655),
      tH = LH(5789),
      zH = LH.n(tH),
      CH = LH(6689),
      EH = LH.n(CH),
      XH = LH(5951),
      GH = LH.n(XH),
      YH = LH(5702),
      uH = LH.n(YH),
      QH = LH(6728),
      WH = LH.n(QH),
      MH = LH(6901),
      xH = LH(6643),
      vH = LH(6489),
      PH = LH(6822),
      TH = LH(6497),
      UH = LH(5684),
      VH = LH(6665),
      OH = LH(5960),
      bH = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
      kH = ["key"];

    function mH(HH) {
      return mH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, mH(HH)
    }

    function oH(HH, BH) {
      if (null == HH) return {};
      var LH, AH, rH = function(HH, BH) {
        if (null == HH) return {};
        var LH = {};
        for (var AH in HH)
          if (Object.prototype.hasOwnProperty.call(HH, AH)) {
            if (BH.indexOf(AH) >= 0) continue;
            LH[AH] = HH[AH]
          } return LH
      }(HH, BH);
      if (Object.getOwnPropertySymbols) {
        var SH = Object.getOwnPropertySymbols(HH);
        for (AH = 0; AH < SH.length; AH++) LH = SH[AH], BH.indexOf(LH) >= 0 || Object.prototype.propertyIsEnumerable.call(HH, LH) && (rH[LH] = HH[LH])
      }
      return rH
    }

    function IH() {
      return IH = Object.assign ? Object.assign.bind() : function(HH) {
        for (var BH = 1; BH < arguments.length; BH++) {
          var LH = arguments[BH];
          for (var AH in LH) Object.prototype.hasOwnProperty.call(LH, AH) && (HH[AH] = LH[AH])
        }
        return HH
      }, IH.apply(this, arguments)
    }

    function fH(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function lH(HH) {
      for (var BH = 1; BH < arguments.length; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? fH(Object(LH), !0).forEach((function(BH) {
          NH(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : fH(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }

    function KH(HH, BH) {
      for (var LH = 0; LH < BH.length; LH++) {
        var AH = BH[LH];
        AH.enumerable = AH.enumerable || !1, AH.configurable = !0, "value" in AH && (AH.writable = !0), Object.defineProperty(HH, RH(AH.key), AH)
      }
    }

    function cH(HH, BH, LH) {
      return BH = qH(BH),
        function(HH, BH) {
          if (BH && ("object" === mH(BH) || "function" === typeof BH)) return BH;
          if (void 0 !== BH) throw new TypeError("Derived constructors may only return object or undefined");
          return function(HH) {
            if (void 0 === HH) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return HH
          }(HH)
        }(HH, eH() ? Reflect.construct(BH, LH || [], qH(HH).constructor) : BH.apply(HH, LH))
    }

    function eH() {
      try {
        var HH = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (HH) {}
      return (eH = function() {
        return !!HH
      })()
    }

    function qH(HH) {
      return qH = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(HH) {
        return HH.__proto__ || Object.getPrototypeOf(HH)
      }, qH(HH)
    }

    function gH(HH, BH) {
      return gH = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(HH, BH) {
        return HH.__proto__ = BH, HH
      }, gH(HH, BH)
    }

    function NH(HH, BH, LH) {
      return (BH = RH(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }

    function RH(HH) {
      var BH = function(HH, BH) {
        if ("object" != mH(HH) || !HH) return HH;
        var LH = HH[Symbol.toPrimitive];
        if (void 0 !== LH) {
          var AH = LH.call(HH, BH || "default");
          if ("object" != mH(AH)) return AH;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === BH ? String : Number)(HH)
      }(HH, "string");
      return "symbol" == mH(BH) ? BH : BH + ""
    }
    var jH = function(HH) {
      function BH() {
        var HH;
        ! function(HH, BH) {
          if (!(HH instanceof BH)) throw new TypeError("Cannot call a class as a function")
        }(this, BH);
        for (var LH = arguments.length, AH = new Array(LH), rH = 0; rH < LH; rH++) AH[rH] = arguments[rH];
        return NH(HH = cH(this, BH, [].concat(AH)), "state", {
          isAnimationFinished: !0
        }), NH(HH, "id", (0, UH.D)("recharts-area-")), NH(HH, "handleAnimationEnd", (function() {
          var BH = HH.props.onAnimationEnd;
          HH.setState({
            isAnimationFinished: !0
          }), zH()(BH) && BH()
        })), NH(HH, "handleAnimationStart", (function() {
          var BH = HH.props.onAnimationStart;
          HH.setState({
            isAnimationFinished: !1
          }), zH()(BH) && BH()
        })), HH
      }
      return function(HH, BH) {
        if ("function" !== typeof BH && null !== BH) throw new TypeError("Super expression must either be null or a function");
        HH.prototype = Object.create(BH && BH.prototype, {
          constructor: {
            value: HH,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(HH, "prototype", {
          writable: !1
        }), BH && gH(HH, BH)
      }(BH, HH), LH = BH, AH = [{
        key: "renderDots",
        value: function(HH, LH, AH) {
          var SH = this.props.isAnimationActive,
            hH = this.state.isAnimationFinished;
          if (SH && !hH) return null;
          var tH = this.props,
            zH = tH.dot,
            CH = tH.points,
            EH = tH.dataKey,
            XH = (0, OH.c)(this.props, !1),
            GH = (0, OH.c)(zH, !0),
            YH = CH.map((function(HH, LH) {
              var AH = lH(lH(lH({
                key: "dot-".concat(LH),
                r: 3
              }, XH), GH), {}, {
                index: LH,
                cx: HH.x,
                cy: HH.y,
                dataKey: EH,
                value: HH.value,
                payload: HH.payload,
                points: CH
              });
              return BH.renderDotItem(zH, AH)
            })),
            uH = {
              clipPath: HH ? "url(#clipPath-".concat(LH ? "" : "dots-").concat(AH, ")") : null
            };
          return rH.createElement(vH.b, IH({
            className: "recharts-area-dots"
          }, uH), YH)
        }
      }, {
        key: "renderHorizontalRect",
        value: function(HH) {
          var BH = this.props,
            LH = BH.baseLine,
            AH = BH.points,
            SH = BH.strokeWidth,
            hH = AH[0].x,
            tH = AH[AH.length - 1].x,
            zH = HH * Math.abs(hH - tH),
            CH = EH()(AH.map((function(HH) {
              return HH.y || 0
            })));
          return (0, UH.v)(LH) && "number" === typeof LH ? CH = Math.max(LH, CH) : LH && Array.isArray(LH) && LH.length && (CH = Math.max(EH()(LH.map((function(HH) {
            return HH.y || 0
          }))), CH)), (0, UH.v)(CH) ? rH.createElement("rect", {
            x: hH < tH ? hH : hH - zH,
            y: 0,
            width: zH,
            height: Math.floor(CH + (SH ? parseInt("".concat(SH), 10) : 1))
          }) : null
        }
      }, {
        key: "renderVerticalRect",
        value: function(HH) {
          var BH = this.props,
            LH = BH.baseLine,
            AH = BH.points,
            SH = BH.strokeWidth,
            hH = AH[0].y,
            tH = AH[AH.length - 1].y,
            zH = HH * Math.abs(hH - tH),
            CH = EH()(AH.map((function(HH) {
              return HH.x || 0
            })));
          return (0, UH.v)(LH) && "number" === typeof LH ? CH = Math.max(LH, CH) : LH && Array.isArray(LH) && LH.length && (CH = Math.max(EH()(LH.map((function(HH) {
            return HH.x || 0
          }))), CH)), (0, UH.v)(CH) ? rH.createElement("rect", {
            x: 0,
            y: hH < tH ? hH : hH - zH,
            width: CH + (SH ? parseInt("".concat(SH), 10) : 1),
            height: Math.floor(zH)
          }) : null
        }
      }, {
        key: "renderClipRect",
        value: function(HH) {
          return "vertical" === this.props.layout ? this.renderVerticalRect(HH) : this.renderHorizontalRect(HH)
        }
      }, {
        key: "renderAreaStatically",
        value: function(HH, BH, LH, AH) {
          var SH = this.props,
            hH = SH.layout,
            tH = SH.type,
            zH = SH.stroke,
            CH = SH.connectNulls,
            EH = SH.isRange,
            XH = (SH.ref, oH(SH, bH));
          return rH.createElement(vH.b, {
            clipPath: LH ? "url(#clipPath-".concat(AH, ")") : null
          }, rH.createElement(MH.c, IH({}, (0, OH.c)(XH, !0), {
            points: HH,
            connectNulls: CH,
            type: tH,
            baseLine: BH,
            layout: hH,
            stroke: "none",
            className: "recharts-area-area"
          })), "none" !== zH && rH.createElement(MH.c, IH({}, (0, OH.c)(this.props, !1), {
            className: "recharts-area-curve",
            layout: hH,
            type: tH,
            connectNulls: CH,
            fill: "none",
            points: HH
          })), "none" !== zH && EH && rH.createElement(MH.c, IH({}, (0, OH.c)(this.props, !1), {
            className: "recharts-area-curve",
            layout: hH,
            type: tH,
            connectNulls: CH,
            fill: "none",
            points: BH
          })))
        }
      }, {
        key: "renderAreaWithAnimation",
        value: function(HH, BH) {
          var LH = this,
            AH = this.props,
            SH = AH.points,
            tH = AH.baseLine,
            zH = AH.isAnimationActive,
            CH = AH.animationBegin,
            EH = AH.animationDuration,
            XH = AH.animationEasing,
            YH = AH.animationId,
            QH = this.state,
            WH = QH.prevPoints,
            MH = QH.prevBaseLine;
          return rH.createElement(hH.b, {
            PX: CH,
            duration: EH,
            isActive: zH,
            easing: XH,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "area-".concat(YH),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(AH) {
            var hH = AH.t;
            if (WH) {
              var zH, CH = WH.length / SH.length,
                EH = SH.map((function(HH, BH) {
                  var LH = Math.floor(BH * CH);
                  if (WH[LH]) {
                    var AH = WH[LH],
                      rH = (0, UH.q)(AH.x, HH.x),
                      SH = (0, UH.q)(AH.y, HH.y);
                    return lH(lH({}, HH), {}, {
                      x: rH(hH),
                      y: SH(hH)
                    })
                  }
                  return HH
                }));
              return zH = (0, UH.v)(tH) && "number" === typeof tH ? (0, UH.q)(MH, tH)(hH) : GH()(tH) || uH()(tH) ? (0, UH.q)(MH, 0)(hH) : tH.map((function(HH, BH) {
                var LH = Math.floor(BH * CH);
                if (MH[LH]) {
                  var AH = MH[LH],
                    rH = (0, UH.q)(AH.x, HH.x),
                    SH = (0, UH.q)(AH.y, HH.y);
                  return lH(lH({}, HH), {}, {
                    x: rH(hH),
                    y: SH(hH)
                  })
                }
                return HH
              })), LH.renderAreaStatically(EH, zH, HH, BH)
            }
            return rH.createElement(vH.b, null, rH.createElement("defs", null, rH.createElement("clipPath", {
              id: "animationClipPath-".concat(BH)
            }, LH.renderClipRect(hH))), rH.createElement(vH.b, {
              clipPath: "url(#animationClipPath-".concat(BH, ")")
            }, LH.renderAreaStatically(SH, tH, HH, BH)))
          }))
        }
      }, {
        key: "renderArea",
        value: function(HH, BH) {
          var LH = this.props,
            AH = LH.points,
            rH = LH.baseLine,
            SH = LH.isAnimationActive,
            hH = this.state,
            tH = hH.prevPoints,
            zH = hH.prevBaseLine,
            CH = hH.totalLength;
          return SH && AH && AH.length && (!tH && CH > 0 || !WH()(tH, AH) || !WH()(zH, rH)) ? this.renderAreaWithAnimation(HH, BH) : this.renderAreaStatically(AH, rH, HH, BH)
        }
      }, {
        key: "render",
        value: function() {
          var HH, BH = this.props,
            LH = BH.hide,
            AH = BH.dot,
            hH = BH.points,
            tH = BH.className,
            zH = BH.top,
            CH = BH.left,
            EH = BH.xAxis,
            XH = BH.yAxis,
            YH = BH.width,
            uH = BH.height,
            QH = BH.isAnimationActive,
            WH = BH.id;
          if (LH || !hH || !hH.length) return null;
          var MH = this.state.isAnimationFinished,
            xH = 1 === hH.length,
            TH = (0, SH.e)("recharts-area", tH),
            UH = EH && EH.allowDataOverflow,
            VH = XH && XH.allowDataOverflow,
            bH = UH || VH,
            kH = GH()(WH) ? this.id : WH,
            mH = null !== (HH = (0, OH.c)(AH, !1)) && void 0 !== HH ? HH : {
              r: 3,
              strokeWidth: 2
            },
            oH = mH.r,
            IH = void 0 === oH ? 3 : oH,
            fH = mH.strokeWidth,
            lH = void 0 === fH ? 2 : fH,
            KH = ((0, OH.k)(AH) ? AH : {}).clipDot,
            cH = void 0 === KH || KH,
            eH = 2 * IH + lH;
          return rH.createElement(vH.b, {
            className: TH
          }, UH || VH ? rH.createElement("defs", null, rH.createElement("clipPath", {
            id: "clipPath-".concat(kH)
          }, rH.createElement("rect", {
            x: UH ? CH : CH - YH / 2,
            y: VH ? zH : zH - uH / 2,
            width: UH ? YH : 2 * YH,
            height: VH ? uH : 2 * uH
          })), !cH && rH.createElement("clipPath", {
            id: "clipPath-dots-".concat(kH)
          }, rH.createElement("rect", {
            x: CH - eH / 2,
            y: zH - eH / 2,
            width: YH + eH,
            height: uH + eH
          }))) : null, xH ? null : this.renderArea(bH, kH), (AH || xH) && this.renderDots(bH, cH, kH), (!QH || MH) && PH.c.renderCallByParent(this.props, hH))
        }
      }], tH = [{
        key: "getDerivedStateFromProps",
        value: function(HH, BH) {
          return HH.animationId !== BH.prevAnimationId ? {
            prevAnimationId: HH.animationId,
            curPoints: HH.points,
            curBaseLine: HH.baseLine,
            prevPoints: BH.curPoints,
            prevBaseLine: BH.curBaseLine
          } : HH.points !== BH.curPoints || HH.baseLine !== BH.curBaseLine ? {
            curPoints: HH.points,
            curBaseLine: HH.baseLine
          } : null
        }
      }], AH && KH(LH.prototype, AH), tH && KH(LH, tH), Object.defineProperty(LH, "prototype", {
        writable: !1
      }), LH;
      var LH, AH, tH
    }(rH.PureComponent);
    AH = jH, NH(jH, "displayName", "Area"), NH(jH, "defaultProps", {
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
      isAnimationActive: !TH.b.isSsr,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease"
    }), NH(jH, "getBaseValue", (function(HH, BH, LH, AH) {
      var rH = HH.layout,
        SH = HH.baseValue,
        hH = BH.props.baseValue,
        tH = null !== hH && void 0 !== hH ? hH : SH;
      if ((0, UH.v)(tH) && "number" === typeof tH) return tH;
      var zH = "horizontal" === rH ? AH : LH,
        CH = zH.scale.domain();
      if ("number" === zH.type) {
        var EH = Math.max(CH[0], CH[1]),
          XH = Math.min(CH[0], CH[1]);
        return "dataMin" === tH ? XH : "dataMax" === tH || EH < 0 ? EH : Math.max(Math.min(CH[0], CH[1]), 0)
      }
      return "dataMin" === tH ? CH[0] : "dataMax" === tH ? CH[1] : CH[0]
    })), NH(jH, "getComposedData", (function(HH) {
      var BH, LH = HH.props,
        rH = HH.item,
        SH = HH.xAxis,
        hH = HH.yAxis,
        tH = HH.xAxisTicks,
        zH = HH.yAxisTicks,
        CH = HH.bandSize,
        EH = HH.dataKey,
        XH = HH.stackedData,
        GH = HH.dataStartIndex,
        YH = HH.displayedData,
        uH = HH.offset,
        QH = LH.layout,
        WH = XH && XH.length,
        MH = AH.getBaseValue(LH, rH, SH, hH),
        xH = "horizontal" === QH,
        vH = !1,
        PH = YH.map((function(HH, BH) {
          var LH;
          WH ? LH = XH[GH + BH] : (LH = (0, VH.db)(HH, EH), Array.isArray(LH) ? vH = !0 : LH = [MH, LH]);
          var AH = null == LH[1] || WH && null == (0, VH.db)(HH, EH);
          return xH ? {
            x: (0, VH.z)({
              axis: SH,
              ticks: tH,
              bandSize: CH,
              entry: HH,
              index: BH
            }),
            y: AH ? null : hH.scale(LH[1]),
            value: LH,
            payload: HH
          } : {
            x: AH ? null : SH.scale(LH[1]),
            y: (0, VH.z)({
              axis: hH,
              ticks: zH,
              bandSize: CH,
              entry: HH,
              index: BH
            }),
            value: LH,
            payload: HH
          }
        }));
      return BH = WH || vH ? PH.map((function(HH) {
        var BH = Array.isArray(HH.value) ? HH.value[0] : null;
        return xH ? {
          x: HH.x,
          y: null != BH && null != HH.y ? hH.scale(BH) : null
        } : {
          x: null != BH ? SH.scale(BH) : null,
          y: HH.y
        }
      })) : xH ? hH.scale(MH) : SH.scale(MH), lH({
        points: PH,
        baseLine: BH,
        layout: QH,
        isRange: vH
      }, uH)
    })), NH(jH, "renderDotItem", (function(HH, BH) {
      var LH;
      if (rH.isValidElement(HH)) LH = rH.cloneElement(HH, BH);
      else if (zH()(HH)) LH = HH(BH);
      else {
        var AH = (0, SH.e)("recharts-area-dot", "boolean" !== typeof HH ? HH.className : ""),
          hH = BH.key,
          tH = oH(BH, kH);
        LH = rH.createElement(xH.b, IH({}, tH, {
          key: hH,
          className: AH
        }))
      }
      return LH
    }))
  },
  6808: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => ZH
    });
    var AH = LH(45),
      rH = LH(5582),
      SH = LH(6655),
      hH = LH(6728),
      tH = LH.n(hH),
      zH = LH(5951),
      CH = LH.n(zH),
      EH = LH(6489),
      XH = LH(6734),
      GH = LH(6816),
      YH = LH(6822),
      uH = LH(5684),
      QH = LH(5960),
      WH = LH(6497),
      MH = LH(6665),
      xH = LH(5975),
      vH = LH(6471),
      PH = LH(6834),
      TH = ["x", "y"];

    function UH(HH) {
      return UH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, UH(HH)
    }

    function VH() {
      return VH = Object.assign ? Object.assign.bind() : function(HH) {
        for (var BH = 1; BH < arguments.length; BH++) {
          var LH = arguments[BH];
          for (var AH in LH) Object.prototype.hasOwnProperty.call(LH, AH) && (HH[AH] = LH[AH])
        }
        return HH
      }, VH.apply(this, arguments)
    }

    function OH(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function bH(HH) {
      for (var BH = 1; BH < arguments.length; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? OH(Object(LH), !0).forEach((function(BH) {
          kH(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : OH(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }

    function kH(HH, BH, LH) {
      return (BH = function(HH) {
        var BH = function(HH, BH) {
          if ("object" != UH(HH) || !HH) return HH;
          var LH = HH[Symbol.toPrimitive];
          if (void 0 !== LH) {
            var AH = LH.call(HH, BH || "default");
            if ("object" != UH(AH)) return AH;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === BH ? String : Number)(HH)
        }(HH, "string");
        return "symbol" == UH(BH) ? BH : BH + ""
      }(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }

    function mH(HH, BH) {
      if (null == HH) return {};
      var LH, AH, rH = function(HH, BH) {
        if (null == HH) return {};
        var LH = {};
        for (var AH in HH)
          if (Object.prototype.hasOwnProperty.call(HH, AH)) {
            if (BH.indexOf(AH) >= 0) continue;
            LH[AH] = HH[AH]
          } return LH
      }(HH, BH);
      if (Object.getOwnPropertySymbols) {
        var SH = Object.getOwnPropertySymbols(HH);
        for (AH = 0; AH < SH.length; AH++) LH = SH[AH], BH.indexOf(LH) >= 0 || Object.prototype.propertyIsEnumerable.call(HH, LH) && (rH[LH] = HH[LH])
      }
      return rH
    }

    function oH(HH, BH) {
      var LH = HH.x,
        AH = HH.y,
        rH = mH(HH, TH),
        SH = "".concat(LH),
        hH = parseInt(SH, 10),
        tH = "".concat(AH),
        zH = parseInt(tH, 10),
        CH = "".concat(BH.height || rH.height),
        EH = parseInt(CH, 10),
        XH = "".concat(BH.width || rH.width),
        GH = parseInt(XH, 10);
      return bH(bH(bH(bH(bH({}, BH), rH), hH ? {
        x: hH
      } : {}), zH ? {
        y: zH
      } : {}), {}, {
        height: EH,
        width: GH,
        name: BH.name,
        radius: BH.radius
      })
    }

    function IH(HH) {
      return AH.createElement(PH.d, VH({
        shapeType: "rectangle",
        propTransformer: oH,
        activeClassName: "recharts-active-bar"
      }, HH))
    }
    var fH, lH = ["value", "background"];

    function KH(HH) {
      return KH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, KH(HH)
    }

    function cH(HH, BH) {
      if (null == HH) return {};
      var LH, AH, rH = function(HH, BH) {
        if (null == HH) return {};
        var LH = {};
        for (var AH in HH)
          if (Object.prototype.hasOwnProperty.call(HH, AH)) {
            if (BH.indexOf(AH) >= 0) continue;
            LH[AH] = HH[AH]
          } return LH
      }(HH, BH);
      if (Object.getOwnPropertySymbols) {
        var SH = Object.getOwnPropertySymbols(HH);
        for (AH = 0; AH < SH.length; AH++) LH = SH[AH], BH.indexOf(LH) >= 0 || Object.prototype.propertyIsEnumerable.call(HH, LH) && (rH[LH] = HH[LH])
      }
      return rH
    }

    function eH() {
      return eH = Object.assign ? Object.assign.bind() : function(HH) {
        for (var BH = 1; BH < arguments.length; BH++) {
          var LH = arguments[BH];
          for (var AH in LH) Object.prototype.hasOwnProperty.call(LH, AH) && (HH[AH] = LH[AH])
        }
        return HH
      }, eH.apply(this, arguments)
    }

    function qH(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function gH(HH) {
      for (var BH = 1; BH < arguments.length; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? qH(Object(LH), !0).forEach((function(BH) {
          DH(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : qH(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }

    function NH(HH, BH) {
      for (var LH = 0; LH < BH.length; LH++) {
        var AH = BH[LH];
        AH.enumerable = AH.enumerable || !1, AH.configurable = !0, "value" in AH && (AH.writable = !0), Object.defineProperty(HH, wH(AH.key), AH)
      }
    }

    function RH(HH, BH, LH) {
      return BH = nH(BH),
        function(HH, BH) {
          if (BH && ("object" === KH(BH) || "function" === typeof BH)) return BH;
          if (void 0 !== BH) throw new TypeError("Derived constructors may only return object or undefined");
          return function(HH) {
            if (void 0 === HH) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return HH
          }(HH)
        }(HH, jH() ? Reflect.construct(BH, LH || [], nH(HH).constructor) : BH.apply(HH, LH))
    }

    function jH() {
      try {
        var HH = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (HH) {}
      return (jH = function() {
        return !!HH
      })()
    }

    function nH(HH) {
      return nH = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(HH) {
        return HH.__proto__ || Object.getPrototypeOf(HH)
      }, nH(HH)
    }

    function FH(HH, BH) {
      return FH = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(HH, BH) {
        return HH.__proto__ = BH, HH
      }, FH(HH, BH)
    }

    function DH(HH, BH, LH) {
      return (BH = wH(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }

    function wH(HH) {
      var BH = function(HH, BH) {
        if ("object" != KH(HH) || !HH) return HH;
        var LH = HH[Symbol.toPrimitive];
        if (void 0 !== LH) {
          var AH = LH.call(HH, BH || "default");
          if ("object" != KH(AH)) return AH;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === BH ? String : Number)(HH)
      }(HH, "string");
      return "symbol" == KH(BH) ? BH : BH + ""
    }
    var ZH = function(HH) {
      function BH() {
        var HH;
        ! function(HH, BH) {
          if (!(HH instanceof BH)) throw new TypeError("Cannot call a class as a function")
        }(this, BH);
        for (var LH = arguments.length, AH = new Array(LH), rH = 0; rH < LH; rH++) AH[rH] = arguments[rH];
        return DH(HH = RH(this, BH, [].concat(AH)), "state", {
          isAnimationFinished: !1
        }), DH(HH, "id", (0, uH.D)("recharts-bar-")), DH(HH, "handleAnimationEnd", (function() {
          var BH = HH.props.onAnimationEnd;
          HH.setState({
            isAnimationFinished: !0
          }), BH && BH()
        })), DH(HH, "handleAnimationStart", (function() {
          var BH = HH.props.onAnimationStart;
          HH.setState({
            isAnimationFinished: !1
          }), BH && BH()
        })), HH
      }
      return function(HH, BH) {
        if ("function" !== typeof BH && null !== BH) throw new TypeError("Super expression must either be null or a function");
        HH.prototype = Object.create(BH && BH.prototype, {
          constructor: {
            value: HH,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(HH, "prototype", {
          writable: !1
        }), BH && FH(HH, BH)
      }(BH, HH), LH = BH, hH = [{
        key: "renderRectanglesStatically",
        value: function(HH) {
          var BH = this,
            LH = this.props,
            rH = LH.shape,
            SH = LH.dataKey,
            hH = LH.activeIndex,
            tH = LH.activeBar,
            zH = (0, QH.c)(this.props, !1);
          return HH && HH.map((function(HH, LH) {
            var CH = LH === hH,
              XH = CH ? tH : rH,
              GH = gH(gH(gH({}, zH), HH), {}, {
                isActive: CH,
                option: XH,
                index: LH,
                dataKey: SH,
                onAnimationStart: BH.handleAnimationStart,
                onAnimationEnd: BH.handleAnimationEnd
              });
            return AH.createElement(EH.b, eH({
              className: "recharts-bar-rectangle"
            }, (0, xH.n)(BH.props, HH, LH), {
              key: "rectangle-".concat(null === HH || void 0 === HH ? void 0 : HH.x, "-").concat(null === HH || void 0 === HH ? void 0 : HH.y, "-").concat(null === HH || void 0 === HH ? void 0 : HH.value, "-").concat(LH)
            }), AH.createElement(IH, GH))
          }))
        }
      }, {
        key: "renderRectanglesWithAnimation",
        value: function() {
          var HH = this,
            BH = this.props,
            LH = BH.data,
            rH = BH.layout,
            hH = BH.isAnimationActive,
            tH = BH.animationBegin,
            zH = BH.animationDuration,
            CH = BH.animationEasing,
            XH = BH.animationId,
            GH = this.state.prevData;
          return AH.createElement(SH.b, {
            PX: tH,
            duration: zH,
            isActive: hH,
            easing: CH,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "bar-".concat(XH),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(BH) {
            var SH = BH.t,
              hH = LH.map((function(HH, BH) {
                var LH = GH && GH[BH];
                if (LH) {
                  var AH = (0, uH.q)(LH.x, HH.x),
                    hH = (0, uH.q)(LH.y, HH.y),
                    tH = (0, uH.q)(LH.width, HH.width),
                    zH = (0, uH.q)(LH.height, HH.height);
                  return gH(gH({}, HH), {}, {
                    x: AH(SH),
                    y: hH(SH),
                    width: tH(SH),
                    height: zH(SH)
                  })
                }
                if ("horizontal" === rH) {
                  var CH = (0, uH.q)(0, HH.height)(SH);
                  return gH(gH({}, HH), {}, {
                    y: HH.y + HH.height - CH,
                    height: CH
                  })
                }
                var EH = (0, uH.q)(0, HH.width)(SH);
                return gH(gH({}, HH), {}, {
                  width: EH
                })
              }));
            return AH.createElement(EH.b, null, HH.renderRectanglesStatically(hH))
          }))
        }
      }, {
        key: "renderRectangles",
        value: function() {
          var HH = this.props,
            BH = HH.data,
            LH = HH.isAnimationActive,
            AH = this.state.prevData;
          return !(LH && BH && BH.length) || AH && tH()(AH, BH) ? this.renderRectanglesStatically(BH) : this.renderRectanglesWithAnimation()
        }
      }, {
        key: "renderBackground",
        value: function() {
          var HH = this,
            BH = this.props,
            LH = BH.data,
            rH = BH.dataKey,
            SH = BH.activeIndex,
            hH = (0, QH.c)(this.props.background, !1);
          return LH.map((function(BH, LH) {
            BH.value;
            var tH = BH.background,
              zH = cH(BH, lH);
            if (!tH) return null;
            var CH = gH(gH(gH(gH(gH({}, zH), {}, {
              fill: "#eee"
            }, tH), hH), (0, xH.n)(HH.props, BH, LH)), {}, {
              onAnimationStart: HH.handleAnimationStart,
              onAnimationEnd: HH.handleAnimationEnd,
              dataKey: rH,
              index: LH,
              className: "recharts-bar-background-rectangle"
            });
            return AH.createElement(IH, eH({
              key: "background-bar-".concat(LH),
              option: HH.props.background,
              isActive: LH === SH
            }, CH))
          }))
        }
      }, {
        key: "renderErrorBar",
        value: function(HH, BH) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var LH = this.props,
            rH = LH.data,
            SH = LH.xAxis,
            hH = LH.yAxis,
            tH = LH.layout,
            zH = LH.children,
            CH = (0, QH.e)(zH, XH.d);
          if (!CH) return null;
          var GH = "vertical" === tH ? rH[0].height / 2 : rH[0].width / 2,
            YH = function(HH, BH) {
              var LH = Array.isArray(HH.value) ? HH.value[1] : HH.value;
              return {
                x: HH.x,
                y: HH.y,
                value: LH,
                errorVal: (0, MH.db)(HH, BH)
              }
            },
            uH = {
              clipPath: HH ? "url(#clipPath-".concat(BH, ")") : null
            };
          return AH.createElement(EH.b, uH, CH.map((function(HH) {
            return AH.cloneElement(HH, {
              key: "error-bar-".concat(BH, "-").concat(HH.props.dataKey),
              data: rH,
              xAxis: SH,
              yAxis: hH,
              layout: tH,
              offset: GH,
              dataPointFormatter: YH
            })
          })))
        }
      }, {
        key: "render",
        value: function() {
          var HH = this.props,
            BH = HH.hide,
            LH = HH.data,
            SH = HH.className,
            hH = HH.xAxis,
            tH = HH.yAxis,
            zH = HH.left,
            XH = HH.top,
            GH = HH.width,
            uH = HH.height,
            QH = HH.isAnimationActive,
            WH = HH.background,
            MH = HH.id;
          if (BH || !LH || !LH.length) return null;
          var xH = this.state.isAnimationFinished,
            vH = (0, rH.e)("recharts-bar", SH),
            PH = hH && hH.allowDataOverflow,
            TH = tH && tH.allowDataOverflow,
            UH = PH || TH,
            VH = CH()(MH) ? this.id : MH;
          return AH.createElement(EH.b, {
            className: vH
          }, PH || TH ? AH.createElement("defs", null, AH.createElement("clipPath", {
            id: "clipPath-".concat(VH)
          }, AH.createElement("rect", {
            x: PH ? zH : zH - GH / 2,
            y: TH ? XH : XH - uH / 2,
            width: PH ? GH : 2 * GH,
            height: TH ? uH : 2 * uH
          }))) : null, AH.createElement(EH.b, {
            className: "recharts-bar-rectangles",
            clipPath: UH ? "url(#clipPath-".concat(VH, ")") : null
          }, WH ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(UH, VH), (!QH || xH) && YH.c.renderCallByParent(this.props, LH))
        }
      }], zH = [{
        key: "getDerivedStateFromProps",
        value: function(HH, BH) {
          return HH.animationId !== BH.prevAnimationId ? {
            prevAnimationId: HH.animationId,
            curData: HH.data,
            prevData: BH.curData
          } : HH.data !== BH.curData ? {
            curData: HH.data
          } : null
        }
      }], hH && NH(LH.prototype, hH), zH && NH(LH, zH), Object.defineProperty(LH, "prototype", {
        writable: !1
      }), LH;
      var LH, hH, zH
    }(AH.PureComponent);
    fH = ZH, DH(ZH, "displayName", "Bar"), DH(ZH, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      legendType: "rect",
      minPointSize: 0,
      hide: !1,
      data: [],
      layout: "vertical",
      activeBar: !1,
      isAnimationActive: !WH.b.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "ease"
    }), DH(ZH, "getComposedData", (function(HH) {
      var BH = HH.props,
        LH = HH.item,
        AH = HH.barPosition,
        rH = HH.bandSize,
        SH = HH.xAxis,
        hH = HH.yAxis,
        tH = HH.xAxisTicks,
        zH = HH.yAxisTicks,
        CH = HH.stackedData,
        EH = HH.dataStartIndex,
        XH = HH.displayedData,
        YH = HH.offset,
        WH = (0, MH.m)(AH, LH);
      if (!WH) return null;
      var xH = BH.layout,
        PH = LH.type.defaultProps,
        TH = void 0 !== PH ? gH(gH({}, PH), LH.props) : LH.props,
        UH = TH.dataKey,
        VH = TH.children,
        OH = TH.minPointSize,
        bH = "horizontal" === xH ? hH : SH,
        kH = CH ? bH.scale.domain() : null,
        mH = (0, MH.w)({
          numericAxis: bH
        }),
        oH = (0, QH.e)(VH, GH.d),
        IH = XH.map((function(HH, BH) {
          var AH, XH, GH, YH, QH, PH;
          CH ? AH = (0, MH.vb)(CH[EH + BH], kH) : (AH = (0, MH.db)(HH, UH), Array.isArray(AH) || (AH = [mH, AH]));
          var TH = function(HH) {
            var BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return function(LH, AH) {
              if ("number" === typeof HH) return HH;
              var rH = (0, uH.v)(LH) || (0, uH.r)(LH);
              return rH ? HH(LH, AH) : (rH || (0, vH.c)(!1), BH)
            }
          }(OH, fH.defaultProps.minPointSize)(AH[1], BH);
          if ("horizontal" === xH) {
            var VH, bH = [hH.scale(AH[0]), hH.scale(AH[1])],
              IH = bH[0],
              lH = bH[1];
            XH = (0, MH.x)({
              axis: SH,
              ticks: tH,
              bandSize: rH,
              offset: WH.offset,
              entry: HH,
              index: BH
            }), GH = null !== (VH = null !== lH && void 0 !== lH ? lH : IH) && void 0 !== VH ? VH : void 0, YH = WH.size;
            var KH = IH - lH;
            if (QH = Number.isNaN(KH) ? 0 : KH, PH = {
                x: XH,
                y: hH.y,
                width: YH,
                height: hH.height
              }, Math.abs(TH) > 0 && Math.abs(QH) < Math.abs(TH)) {
              var cH = (0, uH.A)(QH || TH) * (Math.abs(TH) - Math.abs(QH));
              GH -= cH, QH += cH
            }
          } else {
            var eH = [SH.scale(AH[0]), SH.scale(AH[1])],
              qH = eH[0],
              NH = eH[1];
            if (XH = qH, GH = (0, MH.x)({
                axis: hH,
                ticks: zH,
                bandSize: rH,
                offset: WH.offset,
                entry: HH,
                index: BH
              }), YH = NH - qH, QH = WH.size, PH = {
                x: SH.x,
                y: GH,
                width: SH.width,
                height: QH
              }, Math.abs(TH) > 0 && Math.abs(YH) < Math.abs(TH)) YH += (0, uH.A)(YH || TH) * (Math.abs(TH) - Math.abs(YH))
          }
          return gH(gH(gH({}, HH), {}, {
            x: XH,
            y: GH,
            width: YH,
            height: QH,
            value: CH ? AH : AH[1],
            payload: HH,
            background: PH
          }, oH && oH[BH] && oH[BH].props), {}, {
            tooltipPayload: [(0, MH.ab)(LH, HH)],
            tooltipPosition: {
              x: XH + YH / 2,
              y: GH + QH / 2
            }
          })
        }));
      return gH({
        data: IH,
        layout: xH
      }, YH)
    }))
  },
  6926: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => KH
    });
    var AH = LH(45),
      rH = LH(5789),
      SH = LH.n(rH),
      hH = LH(5714),
      tH = LH.n(hH),
      zH = LH(5582),
      CH = LH(5973),
      EH = LH(6489),
      XH = LH(6657),
      GH = LH(6750),
      YH = LH(5684),
      uH = LH(5975),
      QH = LH(5960),
      WH = LH(6932),
      MH = ["viewBox"],
      xH = ["viewBox"],
      vH = ["ticks"];

    function PH(HH) {
      return PH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, PH(HH)
    }

    function TH() {
      return TH = Object.assign ? Object.assign.bind() : function(HH) {
        for (var BH = 1; BH < arguments.length; BH++) {
          var LH = arguments[BH];
          for (var AH in LH) Object.prototype.hasOwnProperty.call(LH, AH) && (HH[AH] = LH[AH])
        }
        return HH
      }, TH.apply(this, arguments)
    }

    function UH(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function VH(HH) {
      for (var BH = 1; BH < arguments.length; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? UH(Object(LH), !0).forEach((function(BH) {
          fH(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : UH(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }

    function OH(HH, BH) {
      if (null == HH) return {};
      var LH, AH, rH = function(HH, BH) {
        if (null == HH) return {};
        var LH = {};
        for (var AH in HH)
          if (Object.prototype.hasOwnProperty.call(HH, AH)) {
            if (BH.indexOf(AH) >= 0) continue;
            LH[AH] = HH[AH]
          } return LH
      }(HH, BH);
      if (Object.getOwnPropertySymbols) {
        var SH = Object.getOwnPropertySymbols(HH);
        for (AH = 0; AH < SH.length; AH++) LH = SH[AH], BH.indexOf(LH) >= 0 || Object.prototype.propertyIsEnumerable.call(HH, LH) && (rH[LH] = HH[LH])
      }
      return rH
    }

    function bH(HH, BH) {
      for (var LH = 0; LH < BH.length; LH++) {
        var AH = BH[LH];
        AH.enumerable = AH.enumerable || !1, AH.configurable = !0, "value" in AH && (AH.writable = !0), Object.defineProperty(HH, lH(AH.key), AH)
      }
    }

    function kH(HH, BH, LH) {
      return BH = oH(BH),
        function(HH, BH) {
          if (BH && ("object" === PH(BH) || "function" === typeof BH)) return BH;
          if (void 0 !== BH) throw new TypeError("Derived constructors may only return object or undefined");
          return function(HH) {
            if (void 0 === HH) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return HH
          }(HH)
        }(HH, mH() ? Reflect.construct(BH, LH || [], oH(HH).constructor) : BH.apply(HH, LH))
    }

    function mH() {
      try {
        var HH = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (HH) {}
      return (mH = function() {
        return !!HH
      })()
    }

    function oH(HH) {
      return oH = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(HH) {
        return HH.__proto__ || Object.getPrototypeOf(HH)
      }, oH(HH)
    }

    function IH(HH, BH) {
      return IH = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(HH, BH) {
        return HH.__proto__ = BH, HH
      }, IH(HH, BH)
    }

    function fH(HH, BH, LH) {
      return (BH = lH(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }

    function lH(HH) {
      var BH = function(HH, BH) {
        if ("object" != PH(HH) || !HH) return HH;
        var LH = HH[Symbol.toPrimitive];
        if (void 0 !== LH) {
          var AH = LH.call(HH, BH || "default");
          if ("object" != PH(AH)) return AH;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === BH ? String : Number)(HH)
      }(HH, "string");
      return "symbol" == PH(BH) ? BH : BH + ""
    }
    var KH = function(HH) {
      function BH(HH) {
        var LH;
        return function(HH, BH) {
          if (!(HH instanceof BH)) throw new TypeError("Cannot call a class as a function")
        }(this, BH), (LH = kH(this, BH, [HH])).state = {
          fontSize: "",
          letterSpacing: ""
        }, LH
      }
      return function(HH, BH) {
        if ("function" !== typeof BH && null !== BH) throw new TypeError("Super expression must either be null or a function");
        HH.prototype = Object.create(BH && BH.prototype, {
          constructor: {
            value: HH,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(HH, "prototype", {
          writable: !1
        }), BH && IH(HH, BH)
      }(BH, HH), LH = BH, hH = [{
        key: "renderTickItem",
        value: function(HH, BH, LH) {
          var rH = (0, zH.e)(BH.className, "recharts-cartesian-axis-tick-value");
          return AH.isValidElement(HH) ? AH.cloneElement(HH, VH(VH({}, BH), {}, {
            className: rH
          })) : SH()(HH) ? HH(VH(VH({}, BH), {}, {
            className: rH
          })) : AH.createElement(XH.e, TH({}, BH, {
            className: "recharts-cartesian-axis-tick-value"
          }), LH)
        }
      }], (rH = [{
        key: "shouldComponentUpdate",
        value: function(HH, BH) {
          var LH = HH.viewBox,
            AH = OH(HH, MH),
            rH = this.props,
            SH = rH.viewBox,
            hH = OH(rH, xH);
          return !(0, CH.b)(LH, SH) || !(0, CH.b)(AH, hH) || !(0, CH.b)(BH, this.state)
        }
      }, {
        key: "componentDidMount",
        value: function() {
          var HH = this.layerReference;
          if (HH) {
            var BH = HH.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
            BH && this.setState({
              fontSize: window.getComputedStyle(BH).fontSize,
              letterSpacing: window.getComputedStyle(BH).letterSpacing
            })
          }
        }
      }, {
        key: "getTickLineCoord",
        value: function(HH) {
          var BH, LH, AH, rH, SH, hH, tH = this.props,
            zH = tH.x,
            CH = tH.y,
            EH = tH.width,
            XH = tH.height,
            GH = tH.orientation,
            uH = tH.tickSize,
            QH = tH.mirror,
            WH = tH.tickMargin,
            MH = QH ? -1 : 1,
            xH = HH.tickSize || uH,
            vH = (0, YH.v)(HH.tickCoord) ? HH.tickCoord : HH.coordinate;
          switch (GH) {
            case "top":
              BH = LH = HH.coordinate, hH = (AH = (rH = CH + +!QH * XH) - MH * xH) - MH * WH, SH = vH;
              break;
            case "left":
              AH = rH = HH.coordinate, SH = (BH = (LH = zH + +!QH * EH) - MH * xH) - MH * WH, hH = vH;
              break;
            case "right":
              AH = rH = HH.coordinate, SH = (BH = (LH = zH + +QH * EH) + MH * xH) + MH * WH, hH = vH;
              break;
            default:
              BH = LH = HH.coordinate, hH = (AH = (rH = CH + +QH * XH) + MH * xH) + MH * WH, SH = vH
          }
          return {
            line: {
              x1: BH,
              y1: AH,
              x2: LH,
              y2: rH
            },
            IX: {
              x: SH,
              y: hH
            }
          }
        }
      }, {
        key: "getTickTextAnchor",
        value: function() {
          var HH, BH = this.props,
            LH = BH.orientation,
            AH = BH.mirror;
          switch (LH) {
            case "left":
              HH = AH ? "start" : "end";
              break;
            case "right":
              HH = AH ? "end" : "start";
              break;
            default:
              HH = "middle"
          }
          return HH
        }
      }, {
        key: "getTickVerticalAnchor",
        value: function() {
          var HH = this.props,
            BH = HH.orientation,
            LH = HH.mirror,
            AH = "end";
          switch (BH) {
            case "left":
            case "right":
              AH = "middle";
              break;
            case "top":
              AH = LH ? "start" : "end";
              break;
            default:
              AH = LH ? "end" : "start"
          }
          return AH
        }
      }, {
        key: "renderAxisLine",
        value: function() {
          var HH = this.props,
            BH = HH.x,
            LH = HH.y,
            rH = HH.width,
            SH = HH.height,
            hH = HH.orientation,
            CH = HH.mirror,
            EH = HH.axisLine,
            XH = VH(VH(VH({}, (0, QH.c)(this.props, !1)), (0, QH.c)(EH, !1)), {}, {
              fill: "none"
            });
          if ("top" === hH || "bottom" === hH) {
            var GH = +("top" === hH && !CH || "bottom" === hH && CH);
            XH = VH(VH({}, XH), {}, {
              x1: BH,
              y1: LH + GH * SH,
              x2: BH + rH,
              y2: LH + GH * SH
            })
          } else {
            var YH = +("left" === hH && !CH || "right" === hH && CH);
            XH = VH(VH({}, XH), {}, {
              x1: BH + YH * rH,
              y1: LH,
              x2: BH + YH * rH,
              y2: LH + SH
            })
          }
          return AH.createElement("line", TH({}, XH, {
            className: (0, zH.e)("recharts-cartesian-axis-line", tH()(EH, "className"))
          }))
        }
      }, {
        key: "renderTicks",
        value: function(HH, LH, rH) {
          var hH = this,
            CH = this.props,
            XH = CH.tickLine,
            GH = CH.stroke,
            YH = CH.IX,
            MH = CH.tickFormatter,
            xH = CH.unit,
            vH = (0, WH.d)(VH(VH({}, this.props), {}, {
              ticks: HH
            }), LH, rH),
            PH = this.getTickTextAnchor(),
            UH = this.getTickVerticalAnchor(),
            OH = (0, QH.c)(this.props, !1),
            bH = (0, QH.c)(YH, !1),
            kH = VH(VH({}, OH), {}, {
              fill: "none"
            }, (0, QH.c)(XH, !1)),
            mH = vH.map((function(HH, LH) {
              var rH = hH.getTickLineCoord(HH),
                CH = rH.line,
                QH = rH.IX,
                WH = VH(VH(VH(VH({
                  textAnchor: PH,
                  verticalAnchor: UH
                }, OH), {}, {
                  stroke: "none",
                  fill: GH
                }, bH), QH), {}, {
                  index: LH,
                  payload: HH,
                  visibleTicksCount: vH.length,
                  tickFormatter: MH
                });
              return AH.createElement(EH.b, TH({
                className: "recharts-cartesian-axis-tick",
                key: "tick-".concat(HH.value, "-").concat(HH.coordinate, "-").concat(HH.tickCoord)
              }, (0, uH.n)(hH.props, HH, LH)), XH && AH.createElement("line", TH({}, kH, CH, {
                className: (0, zH.e)("recharts-cartesian-axis-tick-line", tH()(XH, "className"))
              })), YH && BH.renderTickItem(YH, WH, "".concat(SH()(MH) ? MH(HH.value, LH) : HH.value).concat(xH || "")))
            }));
          return AH.createElement("g", {
            className: "recharts-cartesian-axis-ticks"
          }, mH)
        }
      }, {
        key: "render",
        value: function() {
          var HH = this,
            BH = this.props,
            LH = BH.axisLine,
            rH = BH.width,
            hH = BH.height,
            tH = BH.ticksGenerator,
            CH = BH.className;
          if (BH.hide) return null;
          var XH = this.props,
            YH = XH.ticks,
            uH = OH(XH, vH),
            QH = YH;
          return SH()(tH) && (QH = YH && YH.length > 0 ? tH(this.props) : tH(uH)), rH <= 0 || hH <= 0 || !QH || !QH.length ? null : AH.createElement(EH.b, {
            className: (0, zH.e)("recharts-cartesian-axis", CH),
            ref: function(BH) {
              HH.layerReference = BH
            }
          }, LH && this.renderAxisLine(), this.renderTicks(QH, this.state.fontSize, this.state.letterSpacing), GH.d.renderCallByParent(this.props))
        }
      }]) && bH(LH.prototype, rH), hH && bH(LH, hH), Object.defineProperty(LH, "prototype", {
        writable: !1
      }), LH;
      var LH, rH, hH
    }(AH.Component);
    fH(KH, "displayName", "CartesianAxis"), fH(KH, "defaultProps", {
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
      IX: !0,
      mirror: !1,
      minTickGap: 5,
      tickSize: 6,
      tickMargin: 2,
      interval: "preserveEnd"
    })
  },
  6945: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => fH
    });
    var AH = LH(45),
      rH = LH(5789),
      SH = LH.n(rH),
      hH = LH(5957),
      tH = LH(5684),
      zH = LH(5960),
      CH = LH(6665),
      EH = LH(6932),
      XH = LH(6926),
      GH = LH(6870),
      YH = ["x1", "y1", "x2", "y2", "key"],
      uH = ["offset"];

    function QH(HH) {
      return QH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, QH(HH)
    }

    function WH(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function MH(HH) {
      for (var BH = 1; BH < arguments.length; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? WH(Object(LH), !0).forEach((function(BH) {
          xH(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : WH(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }

    function xH(HH, BH, LH) {
      return (BH = function(HH) {
        var BH = function(HH, BH) {
          if ("object" != QH(HH) || !HH) return HH;
          var LH = HH[Symbol.toPrimitive];
          if (void 0 !== LH) {
            var AH = LH.call(HH, BH || "default");
            if ("object" != QH(AH)) return AH;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === BH ? String : Number)(HH)
        }(HH, "string");
        return "symbol" == QH(BH) ? BH : BH + ""
      }(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }

    function vH() {
      return vH = Object.assign ? Object.assign.bind() : function(HH) {
        for (var BH = 1; BH < arguments.length; BH++) {
          var LH = arguments[BH];
          for (var AH in LH) Object.prototype.hasOwnProperty.call(LH, AH) && (HH[AH] = LH[AH])
        }
        return HH
      }, vH.apply(this, arguments)
    }

    function PH(HH, BH) {
      if (null == HH) return {};
      var LH, AH, rH = function(HH, BH) {
        if (null == HH) return {};
        var LH = {};
        for (var AH in HH)
          if (Object.prototype.hasOwnProperty.call(HH, AH)) {
            if (BH.indexOf(AH) >= 0) continue;
            LH[AH] = HH[AH]
          } return LH
      }(HH, BH);
      if (Object.getOwnPropertySymbols) {
        var SH = Object.getOwnPropertySymbols(HH);
        for (AH = 0; AH < SH.length; AH++) LH = SH[AH], BH.indexOf(LH) >= 0 || Object.prototype.propertyIsEnumerable.call(HH, LH) && (rH[LH] = HH[LH])
      }
      return rH
    }
    var TH = function(HH) {
      var BH = HH.fill;
      if (!BH || "none" === BH) return null;
      var LH = HH.fillOpacity,
        rH = HH.x,
        SH = HH.y,
        hH = HH.width,
        tH = HH.height,
        zH = HH.ry;
      return AH.createElement("rect", {
        x: rH,
        y: SH,
        ry: zH,
        width: hH,
        height: tH,
        stroke: "none",
        fill: BH,
        fillOpacity: LH,
        className: "recharts-cartesian-grid-bg"
      })
    };

    function UH(HH, BH) {
      var LH;
      if (AH.isValidElement(HH)) LH = AH.cloneElement(HH, BH);
      else if (SH()(HH)) LH = HH(BH);
      else {
        var rH = BH.x1,
          hH = BH.y1,
          tH = BH.x2,
          CH = BH.y2,
          EH = BH.key,
          XH = PH(BH, YH),
          GH = (0, zH.c)(XH, !1),
          QH = (GH.offset, PH(GH, uH));
        LH = AH.createElement("line", vH({}, QH, {
          x1: rH,
          y1: hH,
          x2: tH,
          y2: CH,
          fill: "none",
          key: EH
        }))
      }
      return LH
    }

    function VH(HH) {
      var BH = HH.x,
        LH = HH.width,
        rH = HH.horizontal,
        SH = void 0 === rH || rH,
        hH = HH.horizontalPoints;
      if (!SH || !hH || !hH.length) return null;
      var tH = hH.map((function(AH, rH) {
        var hH = MH(MH({}, HH), {}, {
          x1: BH,
          y1: AH,
          x2: BH + LH,
          y2: AH,
          key: "line-".concat(rH),
          index: rH
        });
        return UH(SH, hH)
      }));
      return AH.createElement("g", {
        className: "recharts-cartesian-grid-horizontal"
      }, tH)
    }

    function OH(HH) {
      var BH = HH.y,
        LH = HH.height,
        rH = HH.vertical,
        SH = void 0 === rH || rH,
        hH = HH.verticalPoints;
      if (!SH || !hH || !hH.length) return null;
      var tH = hH.map((function(AH, rH) {
        var hH = MH(MH({}, HH), {}, {
          x1: AH,
          y1: BH,
          x2: AH,
          y2: BH + LH,
          key: "line-".concat(rH),
          index: rH
        });
        return UH(SH, hH)
      }));
      return AH.createElement("g", {
        className: "recharts-cartesian-grid-vertical"
      }, tH)
    }

    function bH(HH) {
      var BH = HH.horizontalFill,
        LH = HH.fillOpacity,
        rH = HH.x,
        SH = HH.y,
        hH = HH.width,
        tH = HH.height,
        zH = HH.horizontalPoints,
        CH = HH.horizontal;
      if (!(void 0 === CH || CH) || !BH || !BH.length) return null;
      var EH = zH.map((function(HH) {
        return Math.round(HH + SH - SH)
      })).sort((function(HH, BH) {
        return HH - BH
      }));
      SH !== EH[0] && EH.unshift(0);
      var XH = EH.map((function(HH, zH) {
        var CH = !EH[zH + 1] ? SH + tH - HH : EH[zH + 1] - HH;
        if (CH <= 0) return null;
        var XH = zH % BH.length;
        return AH.createElement("rect", {
          key: "react-".concat(zH),
          y: HH,
          x: rH,
          height: CH,
          width: hH,
          stroke: "none",
          fill: BH[XH],
          fillOpacity: LH,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return AH.createElement("g", {
        className: "recharts-cartesian-gridstripes-horizontal"
      }, XH)
    }

    function kH(HH) {
      var BH = HH.vertical,
        LH = void 0 === BH || BH,
        rH = HH.verticalFill,
        SH = HH.fillOpacity,
        hH = HH.x,
        tH = HH.y,
        zH = HH.width,
        CH = HH.height,
        EH = HH.verticalPoints;
      if (!LH || !rH || !rH.length) return null;
      var XH = EH.map((function(HH) {
        return Math.round(HH + hH - hH)
      })).sort((function(HH, BH) {
        return HH - BH
      }));
      hH !== XH[0] && XH.unshift(0);
      var GH = XH.map((function(HH, BH) {
        var LH = !XH[BH + 1] ? hH + zH - HH : XH[BH + 1] - HH;
        if (LH <= 0) return null;
        var EH = BH % rH.length;
        return AH.createElement("rect", {
          key: "react-".concat(BH),
          x: HH,
          y: tH,
          width: LH,
          height: CH,
          stroke: "none",
          fill: rH[EH],
          fillOpacity: SH,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return AH.createElement("g", {
        className: "recharts-cartesian-gridstripes-vertical"
      }, GH)
    }
    var mH = function(HH, BH) {
        var LH = HH.xAxis,
          AH = HH.width,
          rH = HH.height,
          SH = HH.offset;
        return (0, CH.D)((0, EH.d)(MH(MH(MH({}, XH.d.defaultProps), LH), {}, {
          ticks: (0, CH.W)(LH, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: AH,
            height: rH
          }
        })), SH.left, SH.left + SH.width, BH)
      },
      oH = function(HH, BH) {
        var LH = HH.yAxis,
          AH = HH.width,
          rH = HH.height,
          SH = HH.offset;
        return (0, CH.D)((0, EH.d)(MH(MH(MH({}, XH.d.defaultProps), LH), {}, {
          ticks: (0, CH.W)(LH, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: AH,
            height: rH
          }
        })), SH.top, SH.top + SH.height, BH)
      },
      IH = {
        horizontal: !0,
        vertical: !0,
        horizontalPoints: [],
        verticalPoints: [],
        stroke: "#ccc",
        fill: "none",
        verticalFill: [],
        horizontalFill: []
      };

    function fH(HH) {
      var BH, LH, rH, zH, CH, EH, XH = (0, GH.j)(),
        YH = (0, GH.g)(),
        uH = (0, GH.n)(),
        WH = MH(MH({}, HH), {}, {
          stroke: null !== (BH = HH.stroke) && void 0 !== BH ? BH : IH.stroke,
          fill: null !== (LH = HH.fill) && void 0 !== LH ? LH : IH.fill,
          horizontal: null !== (rH = HH.horizontal) && void 0 !== rH ? rH : IH.horizontal,
          horizontalFill: null !== (zH = HH.horizontalFill) && void 0 !== zH ? zH : IH.horizontalFill,
          vertical: null !== (CH = HH.vertical) && void 0 !== CH ? CH : IH.vertical,
          verticalFill: null !== (EH = HH.verticalFill) && void 0 !== EH ? EH : IH.verticalFill,
          x: (0, tH.v)(HH.x) ? HH.x : uH.left,
          y: (0, tH.v)(HH.y) ? HH.y : uH.top,
          width: (0, tH.v)(HH.width) ? HH.width : uH.width,
          height: (0, tH.v)(HH.height) ? HH.height : uH.height
        }),
        xH = WH.x,
        PH = WH.y,
        UH = WH.width,
        fH = WH.height,
        lH = WH.syncWithTicks,
        KH = WH.horizontalValues,
        cH = WH.verticalValues,
        eH = (0, GH.f)(),
        qH = (0, GH.y)();
      if (!(0, tH.v)(UH) || UH <= 0 || !(0, tH.v)(fH) || fH <= 0 || !(0, tH.v)(xH) || xH !== +xH || !(0, tH.v)(PH) || PH !== +PH) return null;
      var gH = WH.verticalCoordinatesGenerator || mH,
        NH = WH.horizontalCoordinatesGenerator || oH,
        RH = WH.horizontalPoints,
        jH = WH.verticalPoints;
      if ((!RH || !RH.length) && SH()(NH)) {
        var nH = KH && KH.length,
          FH = NH({
            yAxis: qH ? MH(MH({}, qH), {}, {
              ticks: nH ? KH : qH.ticks
            }) : void 0,
            width: XH,
            height: YH,
            offset: uH
          }, !!nH || lH);
        (0, hH.d)(Array.isArray(FH), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(QH(FH), "]")), Array.isArray(FH) && (RH = FH)
      }
      if ((!jH || !jH.length) && SH()(gH)) {
        var DH = cH && cH.length,
          wH = gH({
            xAxis: eH ? MH(MH({}, eH), {}, {
              ticks: DH ? cH : eH.ticks
            }) : void 0,
            width: XH,
            height: YH,
            offset: uH
          }, !!DH || lH);
        (0, hH.d)(Array.isArray(wH), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(QH(wH), "]")), Array.isArray(wH) && (jH = wH)
      }
      return AH.createElement("g", {
        className: "recharts-cartesian-grid"
      }, AH.createElement(TH, {
        fill: WH.fill,
        fillOpacity: WH.fillOpacity,
        x: WH.x,
        y: WH.y,
        width: WH.width,
        height: WH.height,
        ry: WH.ry
      }), AH.createElement(VH, vH({}, WH, {
        offset: uH,
        horizontalPoints: RH,
        xAxis: eH,
        yAxis: qH
      })), AH.createElement(OH, vH({}, WH, {
        offset: uH,
        verticalPoints: jH,
        xAxis: eH,
        yAxis: qH
      })), AH.createElement(bH, vH({}, WH, {
        horizontalPoints: RH
      })), AH.createElement(kH, vH({}, WH, {
        verticalPoints: jH
      })))
    }
    fH.displayName = "CartesianGrid"
  },
  6734: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => PH
    });
    var AH = LH(45),
      rH = LH(6471),
      SH = LH(6489),
      hH = LH(5960),
      tH = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];

    function zH(HH) {
      return zH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, zH(HH)
    }

    function CH() {
      return CH = Object.assign ? Object.assign.bind() : function(HH) {
        for (var BH = 1; BH < arguments.length; BH++) {
          var LH = arguments[BH];
          for (var AH in LH) Object.prototype.hasOwnProperty.call(LH, AH) && (HH[AH] = LH[AH])
        }
        return HH
      }, CH.apply(this, arguments)
    }

    function EH(HH, BH) {
      return function(HH) {
        if (Array.isArray(HH)) return HH
      }(HH) || function(HH, BH) {
        var LH = null == HH ? null : "undefined" != typeof Symbol && HH[Symbol.iterator] || HH["@@iterator"];
        if (null != LH) {
          var AH, rH, SH, hH, tH = [],
            zH = !0,
            CH = !1;
          try {
            if (SH = (LH = LH.call(HH)).next, 0 === BH) {
              if (Object(LH) !== LH) return;
              zH = !1
            } else
              for (; !(zH = (AH = SH.call(LH)).done) && (tH.push(AH.value), tH.length !== BH); zH = !0);
          } catch (HH) {
            CH = !0, rH = HH
          } finally {
            try {
              if (!zH && null != LH.return && (hH = LH.return(), Object(hH) !== hH)) return
            } finally {
              if (CH) throw rH
            }
          }
          return tH
        }
      }(HH, BH) || function(HH, BH) {
        if (!HH) return;
        if ("string" === typeof HH) return XH(HH, BH);
        var LH = Object.prototype.toString.call(HH).slice(8, -1);
        "Object" === LH && HH.constructor && (LH = HH.constructor.name);
        if ("Map" === LH || "Set" === LH) return Array.from(HH);
        if ("Arguments" === LH || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(LH)) return XH(HH, BH)
      }(HH, BH) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function XH(HH, BH) {
      (null == BH || BH > HH.length) && (BH = HH.length);
      for (var LH = 0, AH = new Array(BH); LH < BH; LH++) AH[LH] = HH[LH];
      return AH
    }

    function GH(HH, BH) {
      if (null == HH) return {};
      var LH, AH, rH = function(HH, BH) {
        if (null == HH) return {};
        var LH = {};
        for (var AH in HH)
          if (Object.prototype.hasOwnProperty.call(HH, AH)) {
            if (BH.indexOf(AH) >= 0) continue;
            LH[AH] = HH[AH]
          } return LH
      }(HH, BH);
      if (Object.getOwnPropertySymbols) {
        var SH = Object.getOwnPropertySymbols(HH);
        for (AH = 0; AH < SH.length; AH++) LH = SH[AH], BH.indexOf(LH) >= 0 || Object.prototype.propertyIsEnumerable.call(HH, LH) && (rH[LH] = HH[LH])
      }
      return rH
    }

    function YH(HH, BH) {
      for (var LH = 0; LH < BH.length; LH++) {
        var AH = BH[LH];
        AH.enumerable = AH.enumerable || !1, AH.configurable = !0, "value" in AH && (AH.writable = !0), Object.defineProperty(HH, vH(AH.key), AH)
      }
    }

    function uH(HH, BH, LH) {
      return BH = WH(BH),
        function(HH, BH) {
          if (BH && ("object" === zH(BH) || "function" === typeof BH)) return BH;
          if (void 0 !== BH) throw new TypeError("Derived constructors may only return object or undefined");
          return function(HH) {
            if (void 0 === HH) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return HH
          }(HH)
        }(HH, QH() ? Reflect.construct(BH, LH || [], WH(HH).constructor) : BH.apply(HH, LH))
    }

    function QH() {
      try {
        var HH = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (HH) {}
      return (QH = function() {
        return !!HH
      })()
    }

    function WH(HH) {
      return WH = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(HH) {
        return HH.__proto__ || Object.getPrototypeOf(HH)
      }, WH(HH)
    }

    function MH(HH, BH) {
      return MH = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(HH, BH) {
        return HH.__proto__ = BH, HH
      }, MH(HH, BH)
    }

    function xH(HH, BH, LH) {
      return (BH = vH(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }

    function vH(HH) {
      var BH = function(HH, BH) {
        if ("object" != zH(HH) || !HH) return HH;
        var LH = HH[Symbol.toPrimitive];
        if (void 0 !== LH) {
          var AH = LH.call(HH, BH || "default");
          if ("object" != zH(AH)) return AH;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === BH ? String : Number)(HH)
      }(HH, "string");
      return "symbol" == zH(BH) ? BH : BH + ""
    }
    var PH = function(HH) {
      function BH() {
        return function(HH, BH) {
          if (!(HH instanceof BH)) throw new TypeError("Cannot call a class as a function")
        }(this, BH), uH(this, BH, arguments)
      }
      return function(HH, BH) {
        if ("function" !== typeof BH && null !== BH) throw new TypeError("Super expression must either be null or a function");
        HH.prototype = Object.create(BH && BH.prototype, {
          constructor: {
            value: HH,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(HH, "prototype", {
          writable: !1
        }), BH && MH(HH, BH)
      }(BH, HH), LH = BH, (zH = [{
        key: "render",
        value: function() {
          var HH = this.props,
            BH = HH.offset,
            LH = HH.layout,
            zH = HH.width,
            XH = HH.dataKey,
            YH = HH.data,
            uH = HH.dataPointFormatter,
            QH = HH.xAxis,
            WH = HH.yAxis,
            MH = GH(HH, tH),
            xH = (0, hH.c)(MH, !1);
          "x" === this.props.direction && "number" !== QH.type && (0, rH.c)(!1);
          var vH = YH.map((function(HH) {
            var rH = uH(HH, XH),
              hH = rH.x,
              tH = rH.y,
              GH = rH.value,
              YH = rH.errorVal;
            if (!YH) return null;
            var MH, vH, PH = [];
            if (Array.isArray(YH)) {
              var TH = EH(YH, 2);
              MH = TH[0], vH = TH[1]
            } else MH = vH = YH;
            if ("vertical" === LH) {
              var UH = QH.scale,
                VH = tH + BH,
                OH = VH + zH,
                bH = VH - zH,
                kH = UH(GH - MH),
                mH = UH(GH + vH);
              PH.push({
                x1: mH,
                y1: OH,
                x2: mH,
                y2: bH
              }), PH.push({
                x1: kH,
                y1: VH,
                x2: mH,
                y2: VH
              }), PH.push({
                x1: kH,
                y1: OH,
                x2: kH,
                y2: bH
              })
            } else if ("horizontal" === LH) {
              var oH = WH.scale,
                IH = hH + BH,
                fH = IH - zH,
                lH = IH + zH,
                KH = oH(GH - MH),
                cH = oH(GH + vH);
              PH.push({
                x1: fH,
                y1: cH,
                x2: lH,
                y2: cH
              }), PH.push({
                x1: IH,
                y1: KH,
                x2: IH,
                y2: cH
              }), PH.push({
                x1: fH,
                y1: KH,
                x2: lH,
                y2: KH
              })
            }
            return AH.createElement(SH.b, CH({
              className: "recharts-errorBar",
              key: "bar-".concat(PH.map((function(HH) {
                return "".concat(HH.x1, "-").concat(HH.x2, "-").concat(HH.y1, "-").concat(HH.y2)
              })))
            }, xH), PH.map((function(HH) {
              return AH.createElement("line", CH({}, HH, {
                key: "line-".concat(HH.x1, "-").concat(HH.x2, "-").concat(HH.y1, "-").concat(HH.y2)
              }))
            })))
          }));
          return AH.createElement(SH.b, {
            className: "recharts-errorBars"
          }, vH)
        }
      }]) && YH(LH.prototype, zH), XH && YH(LH, XH), Object.defineProperty(LH, "prototype", {
        writable: !1
      }), LH;
      var LH, zH, XH
    }(AH.Component);
    xH(PH, "defaultProps", {
      stroke: "black",
      strokeWidth: 1.5,
      width: 5,
      offset: 0,
      layout: "horizontal"
    }), xH(PH, "displayName", "ErrorBar")
  },
  6915: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => NH
    });
    var AH = LH(45),
      rH = LH(6655),
      SH = LH(5789),
      hH = LH.n(SH),
      tH = LH(5951),
      zH = LH.n(tH),
      CH = LH(6728),
      EH = LH.n(CH),
      XH = LH(5582),
      GH = LH(6901),
      YH = LH(6643),
      uH = LH(6489),
      QH = LH(6822),
      WH = LH(6734),
      MH = LH(5684),
      xH = LH(5960),
      vH = LH(6497),
      PH = LH(6665),
      TH = ["type", "layout", "connectNulls", "ref"],
      UH = ["key"];

    function VH(HH) {
      return VH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, VH(HH)
    }

    function OH(HH, BH) {
      if (null == HH) return {};
      var LH, AH, rH = function(HH, BH) {
        if (null == HH) return {};
        var LH = {};
        for (var AH in HH)
          if (Object.prototype.hasOwnProperty.call(HH, AH)) {
            if (BH.indexOf(AH) >= 0) continue;
            LH[AH] = HH[AH]
          } return LH
      }(HH, BH);
      if (Object.getOwnPropertySymbols) {
        var SH = Object.getOwnPropertySymbols(HH);
        for (AH = 0; AH < SH.length; AH++) LH = SH[AH], BH.indexOf(LH) >= 0 || Object.prototype.propertyIsEnumerable.call(HH, LH) && (rH[LH] = HH[LH])
      }
      return rH
    }

    function bH() {
      return bH = Object.assign ? Object.assign.bind() : function(HH) {
        for (var BH = 1; BH < arguments.length; BH++) {
          var LH = arguments[BH];
          for (var AH in LH) Object.prototype.hasOwnProperty.call(LH, AH) && (HH[AH] = LH[AH])
        }
        return HH
      }, bH.apply(this, arguments)
    }

    function kH(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function mH(HH) {
      for (var BH = 1; BH < arguments.length; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? kH(Object(LH), !0).forEach((function(BH) {
          qH(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : kH(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }

    function oH(HH) {
      return function(HH) {
        if (Array.isArray(HH)) return IH(HH)
      }(HH) || function(HH) {
        if ("undefined" !== typeof Symbol && null != HH[Symbol.iterator] || null != HH["@@iterator"]) return Array.from(HH)
      }(HH) || function(HH, BH) {
        if (!HH) return;
        if ("string" === typeof HH) return IH(HH, BH);
        var LH = Object.prototype.toString.call(HH).slice(8, -1);
        "Object" === LH && HH.constructor && (LH = HH.constructor.name);
        if ("Map" === LH || "Set" === LH) return Array.from(HH);
        if ("Arguments" === LH || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(LH)) return IH(HH, BH)
      }(HH) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function IH(HH, BH) {
      (null == BH || BH > HH.length) && (BH = HH.length);
      for (var LH = 0, AH = new Array(BH); LH < BH; LH++) AH[LH] = HH[LH];
      return AH
    }

    function fH(HH, BH) {
      for (var LH = 0; LH < BH.length; LH++) {
        var AH = BH[LH];
        AH.enumerable = AH.enumerable || !1, AH.configurable = !0, "value" in AH && (AH.writable = !0), Object.defineProperty(HH, gH(AH.key), AH)
      }
    }

    function lH(HH, BH, LH) {
      return BH = cH(BH),
        function(HH, BH) {
          if (BH && ("object" === VH(BH) || "function" === typeof BH)) return BH;
          if (void 0 !== BH) throw new TypeError("Derived constructors may only return object or undefined");
          return function(HH) {
            if (void 0 === HH) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return HH
          }(HH)
        }(HH, KH() ? Reflect.construct(BH, LH || [], cH(HH).constructor) : BH.apply(HH, LH))
    }

    function KH() {
      try {
        var HH = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (HH) {}
      return (KH = function() {
        return !!HH
      })()
    }

    function cH(HH) {
      return cH = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(HH) {
        return HH.__proto__ || Object.getPrototypeOf(HH)
      }, cH(HH)
    }

    function eH(HH, BH) {
      return eH = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(HH, BH) {
        return HH.__proto__ = BH, HH
      }, eH(HH, BH)
    }

    function qH(HH, BH, LH) {
      return (BH = gH(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }

    function gH(HH) {
      var BH = function(HH, BH) {
        if ("object" != VH(HH) || !HH) return HH;
        var LH = HH[Symbol.toPrimitive];
        if (void 0 !== LH) {
          var AH = LH.call(HH, BH || "default");
          if ("object" != VH(AH)) return AH;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === BH ? String : Number)(HH)
      }(HH, "string");
      return "symbol" == VH(BH) ? BH : BH + ""
    }
    var NH = function(HH) {
      function BH() {
        var HH;
        ! function(HH, BH) {
          if (!(HH instanceof BH)) throw new TypeError("Cannot call a class as a function")
        }(this, BH);
        for (var LH = arguments.length, AH = new Array(LH), rH = 0; rH < LH; rH++) AH[rH] = arguments[rH];
        return qH(HH = lH(this, BH, [].concat(AH)), "state", {
          isAnimationFinished: !0,
          totalLength: 0
        }), qH(HH, "generateSimpleStrokeDasharray", (function(HH, BH) {
          return "".concat(BH, "px ").concat(HH - BH, "px")
        })), qH(HH, "getStrokeDasharray", (function(LH, AH, rH) {
          var SH = rH.reduce((function(HH, BH) {
            return HH + BH
          }));
          if (!SH) return HH.generateSimpleStrokeDasharray(AH, LH);
          for (var hH = Math.floor(LH / SH), tH = LH % SH, zH = AH - LH, CH = [], EH = 0, XH = 0; EH < rH.length; XH += rH[EH], ++EH)
            if (XH + rH[EH] > tH) {
              CH = [].concat(oH(rH.slice(0, EH)), [tH - XH]);
              break
            } var GH = CH.length % 2 === 0 ? [0, zH] : [zH];
          return [].concat(oH(BH.repeat(rH, hH)), oH(CH), GH).map((function(HH) {
            return "".concat(HH, "px")
          })).join(", ")
        })), qH(HH, "id", (0, MH.D)("recharts-line-")), qH(HH, "pathRef", (function(BH) {
          HH.mainCurve = BH
        })), qH(HH, "handleAnimationEnd", (function() {
          HH.setState({
            isAnimationFinished: !0
          }), HH.props.onAnimationEnd && HH.props.onAnimationEnd()
        })), qH(HH, "handleAnimationStart", (function() {
          HH.setState({
            isAnimationFinished: !1
          }), HH.props.onAnimationStart && HH.props.onAnimationStart()
        })), HH
      }
      return function(HH, BH) {
        if ("function" !== typeof BH && null !== BH) throw new TypeError("Super expression must either be null or a function");
        HH.prototype = Object.create(BH && BH.prototype, {
          constructor: {
            value: HH,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(HH, "prototype", {
          writable: !1
        }), BH && eH(HH, BH)
      }(BH, HH), LH = BH, SH = [{
        key: "componentDidMount",
        value: function() {
          if (this.props.isAnimationActive) {
            var HH = this.getTotalLength();
            this.setState({
              totalLength: HH
            })
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function() {
          if (this.props.isAnimationActive) {
            var HH = this.getTotalLength();
            HH !== this.state.totalLength && this.setState({
              totalLength: HH
            })
          }
        }
      }, {
        key: "getTotalLength",
        value: function() {
          var HH = this.mainCurve;
          try {
            return HH && HH.getTotalLength && HH.getTotalLength() || 0
          } catch (BH) {
            return 0
          }
        }
      }, {
        key: "renderErrorBar",
        value: function(HH, BH) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var LH = this.props,
            rH = LH.points,
            SH = LH.xAxis,
            hH = LH.yAxis,
            tH = LH.layout,
            zH = LH.children,
            CH = (0, xH.e)(zH, WH.d);
          if (!CH) return null;
          var EH = function(HH, BH) {
              return {
                x: HH.x,
                y: HH.y,
                value: HH.value,
                errorVal: (0, PH.db)(HH.payload, BH)
              }
            },
            XH = {
              clipPath: HH ? "url(#clipPath-".concat(BH, ")") : null
            };
          return AH.createElement(uH.b, XH, CH.map((function(HH) {
            return AH.cloneElement(HH, {
              key: "bar-".concat(HH.props.dataKey),
              data: rH,
              xAxis: SH,
              yAxis: hH,
              layout: tH,
              dataPointFormatter: EH
            })
          })))
        }
      }, {
        key: "renderDots",
        value: function(HH, LH, rH) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var SH = this.props,
            hH = SH.dot,
            tH = SH.points,
            zH = SH.dataKey,
            CH = (0, xH.c)(this.props, !1),
            EH = (0, xH.c)(hH, !0),
            XH = tH.map((function(HH, LH) {
              var AH = mH(mH(mH({
                key: "dot-".concat(LH),
                r: 3
              }, CH), EH), {}, {
                index: LH,
                cx: HH.x,
                cy: HH.y,
                value: HH.value,
                dataKey: zH,
                payload: HH.payload,
                points: tH
              });
              return BH.renderDotItem(hH, AH)
            })),
            GH = {
              clipPath: HH ? "url(#clipPath-".concat(LH ? "" : "dots-").concat(rH, ")") : null
            };
          return AH.createElement(uH.b, bH({
            className: "recharts-line-dots",
            key: "dots"
          }, GH), XH)
        }
      }, {
        key: "renderCurveStatically",
        value: function(HH, BH, LH, rH) {
          var SH = this.props,
            hH = SH.type,
            tH = SH.layout,
            zH = SH.connectNulls,
            CH = (SH.ref, OH(SH, TH)),
            EH = mH(mH(mH({}, (0, xH.c)(CH, !0)), {}, {
              fill: "none",
              className: "recharts-line-curve",
              clipPath: BH ? "url(#clipPath-".concat(LH, ")") : null,
              points: HH
            }, rH), {}, {
              type: hH,
              layout: tH,
              connectNulls: zH
            });
          return AH.createElement(GH.c, bH({}, EH, {
            pathRef: this.pathRef
          }))
        }
      }, {
        key: "renderCurveWithAnimation",
        value: function(HH, BH) {
          var LH = this,
            SH = this.props,
            hH = SH.points,
            tH = SH.strokeDasharray,
            zH = SH.isAnimationActive,
            CH = SH.animationBegin,
            EH = SH.animationDuration,
            XH = SH.animationEasing,
            GH = SH.animationId,
            YH = SH.animateNewValues,
            uH = SH.width,
            QH = SH.height,
            WH = this.state,
            xH = WH.prevPoints,
            vH = WH.totalLength;
          return AH.createElement(rH.b, {
            PX: CH,
            duration: EH,
            isActive: zH,
            easing: XH,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "line-".concat(GH),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(AH) {
            var rH = AH.t;
            if (xH) {
              var SH = xH.length / hH.length,
                zH = hH.map((function(HH, BH) {
                  var LH = Math.floor(BH * SH);
                  if (xH[LH]) {
                    var AH = xH[LH],
                      hH = (0, MH.q)(AH.x, HH.x),
                      tH = (0, MH.q)(AH.y, HH.y);
                    return mH(mH({}, HH), {}, {
                      x: hH(rH),
                      y: tH(rH)
                    })
                  }
                  if (YH) {
                    var zH = (0, MH.q)(2 * uH, HH.x),
                      CH = (0, MH.q)(QH / 2, HH.y);
                    return mH(mH({}, HH), {}, {
                      x: zH(rH),
                      y: CH(rH)
                    })
                  }
                  return mH(mH({}, HH), {}, {
                    x: HH.x,
                    y: HH.y
                  })
                }));
              return LH.renderCurveStatically(zH, HH, BH)
            }
            var CH, EH = (0, MH.q)(0, vH)(rH);
            if (tH) {
              var XH = "".concat(tH).split(/[,\s]+/gim).map((function(HH) {
                return parseFloat(HH)
              }));
              CH = LH.getStrokeDasharray(EH, vH, XH)
            } else CH = LH.generateSimpleStrokeDasharray(vH, EH);
            return LH.renderCurveStatically(hH, HH, BH, {
              strokeDasharray: CH
            })
          }))
        }
      }, {
        key: "renderCurve",
        value: function(HH, BH) {
          var LH = this.props,
            AH = LH.points,
            rH = LH.isAnimationActive,
            SH = this.state,
            hH = SH.prevPoints,
            tH = SH.totalLength;
          return rH && AH && AH.length && (!hH && tH > 0 || !EH()(hH, AH)) ? this.renderCurveWithAnimation(HH, BH) : this.renderCurveStatically(AH, HH, BH)
        }
      }, {
        key: "render",
        value: function() {
          var HH, BH = this.props,
            LH = BH.hide,
            rH = BH.dot,
            SH = BH.points,
            hH = BH.className,
            tH = BH.xAxis,
            CH = BH.yAxis,
            EH = BH.top,
            GH = BH.left,
            YH = BH.width,
            WH = BH.height,
            MH = BH.isAnimationActive,
            vH = BH.id;
          if (LH || !SH || !SH.length) return null;
          var PH = this.state.isAnimationFinished,
            TH = 1 === SH.length,
            UH = (0, XH.e)("recharts-line", hH),
            VH = tH && tH.allowDataOverflow,
            OH = CH && CH.allowDataOverflow,
            bH = VH || OH,
            kH = zH()(vH) ? this.id : vH,
            mH = null !== (HH = (0, xH.c)(rH, !1)) && void 0 !== HH ? HH : {
              r: 3,
              strokeWidth: 2
            },
            oH = mH.r,
            IH = void 0 === oH ? 3 : oH,
            fH = mH.strokeWidth,
            lH = void 0 === fH ? 2 : fH,
            KH = ((0, xH.k)(rH) ? rH : {}).clipDot,
            cH = void 0 === KH || KH,
            eH = 2 * IH + lH;
          return AH.createElement(uH.b, {
            className: UH
          }, VH || OH ? AH.createElement("defs", null, AH.createElement("clipPath", {
            id: "clipPath-".concat(kH)
          }, AH.createElement("rect", {
            x: VH ? GH : GH - YH / 2,
            y: OH ? EH : EH - WH / 2,
            width: VH ? YH : 2 * YH,
            height: OH ? WH : 2 * WH
          })), !cH && AH.createElement("clipPath", {
            id: "clipPath-dots-".concat(kH)
          }, AH.createElement("rect", {
            x: GH - eH / 2,
            y: EH - eH / 2,
            width: YH + eH,
            height: WH + eH
          }))) : null, !TH && this.renderCurve(bH, kH), this.renderErrorBar(bH, kH), (TH || rH) && this.renderDots(bH, cH, kH), (!MH || PH) && QH.c.renderCallByParent(this.props, SH))
        }
      }], tH = [{
        key: "getDerivedStateFromProps",
        value: function(HH, BH) {
          return HH.animationId !== BH.prevAnimationId ? {
            prevAnimationId: HH.animationId,
            curPoints: HH.points,
            prevPoints: BH.curPoints
          } : HH.points !== BH.curPoints ? {
            curPoints: HH.points
          } : null
        }
      }, {
        key: "repeat",
        value: function(HH, BH) {
          for (var LH = HH.length % 2 !== 0 ? [].concat(oH(HH), [0]) : HH, AH = [], rH = 0; rH < BH; ++rH) AH = [].concat(oH(AH), oH(LH));
          return AH
        }
      }, {
        key: "renderDotItem",
        value: function(HH, BH) {
          var LH;
          if (AH.isValidElement(HH)) LH = AH.cloneElement(HH, BH);
          else if (hH()(HH)) LH = HH(BH);
          else {
            var rH = BH.key,
              SH = OH(BH, UH),
              tH = (0, XH.e)("recharts-line-dot", "boolean" !== typeof HH ? HH.className : "");
            LH = AH.createElement(YH.b, bH({
              key: rH
            }, SH, {
              className: tH
            }))
          }
          return LH
        }
      }], SH && fH(LH.prototype, SH), tH && fH(LH, tH), Object.defineProperty(LH, "prototype", {
        writable: !1
      }), LH;
      var LH, SH, tH
    }(AH.PureComponent);
    qH(NH, "displayName", "Line"), qH(NH, "defaultProps", {
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
      isAnimationActive: !vH.b.isSsr,
      animateNewValues: !0,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease",
      hide: !1,
      label: !1
    }), qH(NH, "getComposedData", (function(HH) {
      var BH = HH.props,
        LH = HH.xAxis,
        AH = HH.yAxis,
        rH = HH.xAxisTicks,
        SH = HH.yAxisTicks,
        hH = HH.dataKey,
        tH = HH.bandSize,
        CH = HH.displayedData,
        EH = HH.offset,
        XH = BH.layout;
      return mH({
        points: CH.map((function(HH, BH) {
          var CH = (0, PH.db)(HH, hH);
          return "horizontal" === XH ? {
            x: (0, PH.z)({
              axis: LH,
              ticks: rH,
              bandSize: tH,
              entry: HH,
              index: BH
            }),
            y: zH()(CH) ? null : AH.scale(CH),
            value: CH,
            payload: HH
          } : {
            x: zH()(CH) ? null : LH.scale(CH),
            y: (0, PH.z)({
              axis: AH,
              ticks: SH,
              bandSize: tH,
              entry: HH,
              index: BH
            }),
            value: CH,
            payload: HH
          }
        })),
        layout: XH
      }, EH)
    }))
  },
  6856: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => lH
    });
    var AH = LH(45),
      rH = LH(5789),
      SH = LH.n(rH),
      hH = LH(6860),
      tH = LH.n(hH),
      zH = LH(5582),
      CH = LH(6489),
      EH = LH(6750),
      XH = LH(6762),
      GH = LH(5684),
      YH = LH(6770),
      uH = LH(5957),
      QH = LH(5960),
      WH = LH(6870);

    function MH(HH) {
      return MH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, MH(HH)
    }

    function xH(HH, BH) {
      for (var LH = 0; LH < BH.length; LH++) {
        var AH = BH[LH];
        AH.enumerable = AH.enumerable || !1, AH.configurable = !0, "value" in AH && (AH.writable = !0), Object.defineProperty(HH, kH(AH.key), AH)
      }
    }

    function vH(HH, BH, LH) {
      return BH = TH(BH),
        function(HH, BH) {
          if (BH && ("object" === MH(BH) || "function" === typeof BH)) return BH;
          if (void 0 !== BH) throw new TypeError("Derived constructors may only return object or undefined");
          return function(HH) {
            if (void 0 === HH) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return HH
          }(HH)
        }(HH, PH() ? Reflect.construct(BH, LH || [], TH(HH).constructor) : BH.apply(HH, LH))
    }

    function PH() {
      try {
        var HH = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (HH) {}
      return (PH = function() {
        return !!HH
      })()
    }

    function TH(HH) {
      return TH = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(HH) {
        return HH.__proto__ || Object.getPrototypeOf(HH)
      }, TH(HH)
    }

    function UH(HH, BH) {
      return UH = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(HH, BH) {
        return HH.__proto__ = BH, HH
      }, UH(HH, BH)
    }

    function VH(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function OH(HH) {
      for (var BH = 1; BH < arguments.length; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? VH(Object(LH), !0).forEach((function(BH) {
          bH(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : VH(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }

    function bH(HH, BH, LH) {
      return (BH = kH(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }

    function kH(HH) {
      var BH = function(HH, BH) {
        if ("object" != MH(HH) || !HH) return HH;
        var LH = HH[Symbol.toPrimitive];
        if (void 0 !== LH) {
          var AH = LH.call(HH, BH || "default");
          if ("object" != MH(AH)) return AH;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === BH ? String : Number)(HH)
      }(HH, "string");
      return "symbol" == MH(BH) ? BH : BH + ""
    }

    function mH(HH, BH) {
      return function(HH) {
        if (Array.isArray(HH)) return HH
      }(HH) || function(HH, BH) {
        var LH = null == HH ? null : "undefined" != typeof Symbol && HH[Symbol.iterator] || HH["@@iterator"];
        if (null != LH) {
          var AH, rH, SH, hH, tH = [],
            zH = !0,
            CH = !1;
          try {
            if (SH = (LH = LH.call(HH)).next, 0 === BH) {
              if (Object(LH) !== LH) return;
              zH = !1
            } else
              for (; !(zH = (AH = SH.call(LH)).done) && (tH.push(AH.value), tH.length !== BH); zH = !0);
          } catch (HH) {
            CH = !0, rH = HH
          } finally {
            try {
              if (!zH && null != LH.return && (hH = LH.return(), Object(hH) !== hH)) return
            } finally {
              if (CH) throw rH
            }
          }
          return tH
        }
      }(HH, BH) || function(HH, BH) {
        if (!HH) return;
        if ("string" === typeof HH) return oH(HH, BH);
        var LH = Object.prototype.toString.call(HH).slice(8, -1);
        "Object" === LH && HH.constructor && (LH = HH.constructor.name);
        if ("Map" === LH || "Set" === LH) return Array.from(HH);
        if ("Arguments" === LH || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(LH)) return oH(HH, BH)
      }(HH, BH) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function oH(HH, BH) {
      (null == BH || BH > HH.length) && (BH = HH.length);
      for (var LH = 0, AH = new Array(BH); LH < BH; LH++) AH[LH] = HH[LH];
      return AH
    }

    function IH() {
      return IH = Object.assign ? Object.assign.bind() : function(HH) {
        for (var BH = 1; BH < arguments.length; BH++) {
          var LH = arguments[BH];
          for (var AH in LH) Object.prototype.hasOwnProperty.call(LH, AH) && (HH[AH] = LH[AH])
        }
        return HH
      }, IH.apply(this, arguments)
    }

    function fH(HH) {
      var BH = HH.x,
        LH = HH.y,
        rH = HH.segment,
        hH = HH.xAxisId,
        MH = HH.yAxisId,
        xH = HH.shape,
        vH = HH.className,
        PH = HH.alwaysShow,
        TH = (0, WH.k)(),
        UH = (0, WH.s)(hH),
        VH = (0, WH.v)(MH),
        bH = (0, WH.q)();
      if (!TH || !bH) return null;
      (0, uH.d)(void 0 === PH, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var kH = function(HH, BH, LH, AH, rH, SH, hH, zH, CH) {
        var EH = rH.x,
          GH = rH.y,
          YH = rH.width,
          uH = rH.height;
        if (LH) {
          var QH = CH.y,
            WH = HH.y.apply(QH, {
              position: SH
            });
          if ((0, XH.d)(CH, "discard") && !HH.y.isInRange(WH)) return null;
          var MH = [{
            x: EH + YH,
            y: WH
          }, {
            x: EH,
            y: WH
          }];
          return "left" === zH ? MH.reverse() : MH
        }
        if (BH) {
          var xH = CH.x,
            vH = HH.x.apply(xH, {
              position: SH
            });
          if ((0, XH.d)(CH, "discard") && !HH.x.isInRange(vH)) return null;
          var PH = [{
            x: vH,
            y: GH + uH
          }, {
            x: vH,
            y: GH
          }];
          return "top" === hH ? PH.reverse() : PH
        }
        if (AH) {
          var TH = CH.segment.map((function(BH) {
            return HH.apply(BH, {
              position: SH
            })
          }));
          return (0, XH.d)(CH, "discard") && tH()(TH, (function(BH) {
            return !HH.isInRange(BH)
          })) ? null : TH
        }
        return null
      }((0, YH.c)({
        x: UH.scale,
        y: VH.scale
      }), (0, GH.s)(BH), (0, GH.s)(LH), rH && 2 === rH.length, bH, HH.position, UH.orientation, VH.orientation, HH);
      if (!kH) return null;
      var oH = mH(kH, 2),
        fH = oH[0],
        lH = fH.x,
        KH = fH.y,
        cH = oH[1],
        eH = cH.x,
        qH = cH.y,
        gH = OH(OH({
          clipPath: (0, XH.d)(HH, "hidden") ? "url(#".concat(TH, ")") : void 0
        }, (0, QH.c)(HH, !0)), {}, {
          x1: lH,
          y1: KH,
          x2: eH,
          y2: qH
        });
      return AH.createElement(CH.b, {
        className: (0, zH.e)("recharts-reference-line", vH)
      }, function(HH, BH) {
        return AH.isValidElement(HH) ? AH.cloneElement(HH, BH) : SH()(HH) ? HH(BH) : AH.createElement("line", IH({}, BH, {
          className: "recharts-reference-line-line"
        }))
      }(xH, gH), EH.d.renderCallByParent(HH, (0, YH.i)({
        x1: lH,
        y1: KH,
        x2: eH,
        y2: qH
      })))
    }
    var lH = function(HH) {
      function BH() {
        return function(HH, BH) {
          if (!(HH instanceof BH)) throw new TypeError("Cannot call a class as a function")
        }(this, BH), vH(this, BH, arguments)
      }
      return function(HH, BH) {
        if ("function" !== typeof BH && null !== BH) throw new TypeError("Super expression must either be null or a function");
        HH.prototype = Object.create(BH && BH.prototype, {
          constructor: {
            value: HH,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(HH, "prototype", {
          writable: !1
        }), BH && UH(HH, BH)
      }(BH, HH), LH = BH, (rH = [{
        key: "render",
        value: function() {
          return AH.createElement(fH, this.props)
        }
      }]) && xH(LH.prototype, rH), SH && xH(LH, SH), Object.defineProperty(LH, "prototype", {
        writable: !1
      }), LH;
      var LH, rH, SH
    }(AH.Component);
    bH(lH, "displayName", "ReferenceLine"), bH(lH, "defaultProps", {
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
  6922: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => xH
    });
    var AH = LH(45),
      rH = LH(5582),
      SH = LH(6870),
      hH = LH(6926),
      tH = LH(6665);

    function zH(HH) {
      return zH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, zH(HH)
    }

    function CH(HH, BH) {
      for (var LH = 0; LH < BH.length; LH++) {
        var AH = BH[LH];
        AH.enumerable = AH.enumerable || !1, AH.configurable = !0, "value" in AH && (AH.writable = !0), Object.defineProperty(HH, QH(AH.key), AH)
      }
    }

    function EH(HH, BH, LH) {
      return BH = GH(BH),
        function(HH, BH) {
          if (BH && ("object" === zH(BH) || "function" === typeof BH)) return BH;
          if (void 0 !== BH) throw new TypeError("Derived constructors may only return object or undefined");
          return function(HH) {
            if (void 0 === HH) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return HH
          }(HH)
        }(HH, XH() ? Reflect.construct(BH, LH || [], GH(HH).constructor) : BH.apply(HH, LH))
    }

    function XH() {
      try {
        var HH = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (HH) {}
      return (XH = function() {
        return !!HH
      })()
    }

    function GH(HH) {
      return GH = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(HH) {
        return HH.__proto__ || Object.getPrototypeOf(HH)
      }, GH(HH)
    }

    function YH(HH, BH) {
      return YH = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(HH, BH) {
        return HH.__proto__ = BH, HH
      }, YH(HH, BH)
    }

    function uH(HH, BH, LH) {
      return (BH = QH(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }

    function QH(HH) {
      var BH = function(HH, BH) {
        if ("object" != zH(HH) || !HH) return HH;
        var LH = HH[Symbol.toPrimitive];
        if (void 0 !== LH) {
          var AH = LH.call(HH, BH || "default");
          if ("object" != zH(AH)) return AH;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === BH ? String : Number)(HH)
      }(HH, "string");
      return "symbol" == zH(BH) ? BH : BH + ""
    }

    function WH() {
      return WH = Object.assign ? Object.assign.bind() : function(HH) {
        for (var BH = 1; BH < arguments.length; BH++) {
          var LH = arguments[BH];
          for (var AH in LH) Object.prototype.hasOwnProperty.call(LH, AH) && (HH[AH] = LH[AH])
        }
        return HH
      }, WH.apply(this, arguments)
    }

    function MH(HH) {
      var BH = HH.xAxisId,
        LH = (0, SH.j)(),
        zH = (0, SH.g)(),
        CH = (0, SH.s)(BH);
      return null == CH ? null : AH.createElement(hH.d, WH({}, CH, {
        className: (0, rH.e)("recharts-".concat(CH.axisType, " ").concat(CH.axisType), CH.className),
        viewBox: {
          x: 0,
          y: 0,
          width: LH,
          height: zH
        },
        ticksGenerator: function(HH) {
          return (0, tH.W)(HH, !0)
        }
      }))
    }
    var xH = function(HH) {
      function BH() {
        return function(HH, BH) {
          if (!(HH instanceof BH)) throw new TypeError("Cannot call a class as a function")
        }(this, BH), EH(this, BH, arguments)
      }
      return function(HH, BH) {
        if ("function" !== typeof BH && null !== BH) throw new TypeError("Super expression must either be null or a function");
        HH.prototype = Object.create(BH && BH.prototype, {
          constructor: {
            value: HH,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(HH, "prototype", {
          writable: !1
        }), BH && YH(HH, BH)
      }(BH, HH), LH = BH, (rH = [{
        key: "render",
        value: function() {
          return AH.createElement(MH, this.props)
        }
      }]) && CH(LH.prototype, rH), SH && CH(LH, SH), Object.defineProperty(LH, "prototype", {
        writable: !1
      }), LH;
      var LH, rH, SH
    }(AH.Component);
    uH(xH, "displayName", "XAxis"), uH(xH, "defaultProps", {
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
  6936: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => xH
    });
    var AH = LH(45),
      rH = LH(5582),
      SH = LH(6870),
      hH = LH(6926),
      tH = LH(6665);

    function zH(HH) {
      return zH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, zH(HH)
    }

    function CH(HH, BH) {
      for (var LH = 0; LH < BH.length; LH++) {
        var AH = BH[LH];
        AH.enumerable = AH.enumerable || !1, AH.configurable = !0, "value" in AH && (AH.writable = !0), Object.defineProperty(HH, QH(AH.key), AH)
      }
    }

    function EH(HH, BH, LH) {
      return BH = GH(BH),
        function(HH, BH) {
          if (BH && ("object" === zH(BH) || "function" === typeof BH)) return BH;
          if (void 0 !== BH) throw new TypeError("Derived constructors may only return object or undefined");
          return function(HH) {
            if (void 0 === HH) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return HH
          }(HH)
        }(HH, XH() ? Reflect.construct(BH, LH || [], GH(HH).constructor) : BH.apply(HH, LH))
    }

    function XH() {
      try {
        var HH = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (HH) {}
      return (XH = function() {
        return !!HH
      })()
    }

    function GH(HH) {
      return GH = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(HH) {
        return HH.__proto__ || Object.getPrototypeOf(HH)
      }, GH(HH)
    }

    function YH(HH, BH) {
      return YH = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(HH, BH) {
        return HH.__proto__ = BH, HH
      }, YH(HH, BH)
    }

    function uH(HH, BH, LH) {
      return (BH = QH(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }

    function QH(HH) {
      var BH = function(HH, BH) {
        if ("object" != zH(HH) || !HH) return HH;
        var LH = HH[Symbol.toPrimitive];
        if (void 0 !== LH) {
          var AH = LH.call(HH, BH || "default");
          if ("object" != zH(AH)) return AH;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === BH ? String : Number)(HH)
      }(HH, "string");
      return "symbol" == zH(BH) ? BH : BH + ""
    }

    function WH() {
      return WH = Object.assign ? Object.assign.bind() : function(HH) {
        for (var BH = 1; BH < arguments.length; BH++) {
          var LH = arguments[BH];
          for (var AH in LH) Object.prototype.hasOwnProperty.call(LH, AH) && (HH[AH] = LH[AH])
        }
        return HH
      }, WH.apply(this, arguments)
    }
    var MH = function(HH) {
        var BH = HH.yAxisId,
          LH = (0, SH.j)(),
          zH = (0, SH.g)(),
          CH = (0, SH.v)(BH);
        return null == CH ? null : AH.createElement(hH.d, WH({}, CH, {
          className: (0, rH.e)("recharts-".concat(CH.axisType, " ").concat(CH.axisType), CH.className),
          viewBox: {
            x: 0,
            y: 0,
            width: LH,
            height: zH
          },
          ticksGenerator: function(HH) {
            return (0, tH.W)(HH, !0)
          }
        }))
      },
      xH = function(HH) {
        function BH() {
          return function(HH, BH) {
            if (!(HH instanceof BH)) throw new TypeError("Cannot call a class as a function")
          }(this, BH), EH(this, BH, arguments)
        }
        return function(HH, BH) {
          if ("function" !== typeof BH && null !== BH) throw new TypeError("Super expression must either be null or a function");
          HH.prototype = Object.create(BH && BH.prototype, {
            constructor: {
              value: HH,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(HH, "prototype", {
            writable: !1
          }), BH && YH(HH, BH)
        }(BH, HH), LH = BH, (rH = [{
          key: "render",
          value: function() {
            return AH.createElement(MH, this.props)
          }
        }]) && CH(LH.prototype, rH), SH && CH(LH, SH), Object.defineProperty(LH, "prototype", {
          writable: !1
        }), LH;
        var LH, rH, SH
      }(AH.Component);
    uH(xH, "displayName", "YAxis"), uH(xH, "defaultProps", {
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
  6932: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => QH
    });
    var AH = LH(5789),
      rH = LH.n(AH),
      SH = LH(5684),
      hH = LH(6663),
      tH = LH(6497),
      zH = LH(6770);

    function CH(HH, BH, LH) {
      if (BH < 1) return [];
      if (1 === BH && void 0 === LH) return HH;
      for (var AH = [], rH = 0; rH < HH.length; rH += BH) {
        if (void 0 !== LH && !0 !== LH(HH[rH])) return;
        AH.push(HH[rH])
      }
      return AH
    }

    function EH(HH, BH, LH, AH, rH) {
      if (HH * BH < HH * AH || HH * BH > HH * rH) return !1;
      var SH = LH();
      return HH * (BH - HH * SH / 2 - AH) >= 0 && HH * (BH + HH * SH / 2 - rH) <= 0
    }

    function XH(HH) {
      return XH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, XH(HH)
    }

    function GH(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function YH(HH) {
      for (var BH = 1; BH < arguments.length; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? GH(Object(LH), !0).forEach((function(BH) {
          uH(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : GH(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }

    function uH(HH, BH, LH) {
      return (BH = function(HH) {
        var BH = function(HH, BH) {
          if ("object" != XH(HH) || !HH) return HH;
          var LH = HH[Symbol.toPrimitive];
          if (void 0 !== LH) {
            var AH = LH.call(HH, BH || "default");
            if ("object" != XH(AH)) return AH;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === BH ? String : Number)(HH)
        }(HH, "string");
        return "symbol" == XH(BH) ? BH : BH + ""
      }(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }

    function QH(HH, BH, LH) {
      var AH = HH.IX,
        XH = HH.ticks,
        GH = HH.viewBox,
        uH = HH.minTickGap,
        QH = HH.orientation,
        WH = HH.interval,
        MH = HH.tickFormatter,
        xH = HH.unit,
        vH = HH.angle;
      if (!XH || !XH.length || !AH) return [];
      if ((0, SH.v)(WH) || tH.b.isSsr) return function(HH, BH) {
        return CH(HH, BH + 1)
      }(XH, "number" === typeof WH && (0, SH.v)(WH) ? WH : 0);
      var PH = [],
        TH = "top" === QH || "bottom" === QH ? "width" : "height",
        UH = xH && "width" === TH ? (0, hH.f)(xH, {
          fontSize: BH,
          letterSpacing: LH
        }) : {
          width: 0,
          height: 0
        },
        VH = function(HH, AH) {
          var SH = rH()(MH) ? MH(HH.value, AH) : HH.value;
          return "width" === TH ? function(HH, BH, LH) {
            var AH = {
              width: HH.width + BH.width,
              height: HH.height + BH.height
            };
            return (0, zH.g)(AH, LH)
          }((0, hH.f)(SH, {
            fontSize: BH,
            letterSpacing: LH
          }), UH, vH) : (0, hH.f)(SH, {
            fontSize: BH,
            letterSpacing: LH
          })[TH]
        },
        OH = XH.length >= 2 ? (0, SH.A)(XH[1].coordinate - XH[0].coordinate) : 1,
        bH = function(HH, BH, LH) {
          var AH = "width" === LH,
            rH = HH.x,
            SH = HH.y,
            hH = HH.width,
            tH = HH.height;
          return 1 === BH ? {
            start: AH ? rH : SH,
            end: AH ? rH + hH : SH + tH
          } : {
            start: AH ? rH + hH : SH + tH,
            end: AH ? rH : SH
          }
        }(GH, OH, TH);
      return "equidistantPreserveStart" === WH ? function(HH, BH, LH, AH, rH) {
        for (var SH, hH = (AH || []).slice(), tH = BH.start, zH = BH.end, XH = 0, GH = 1, YH = tH, uH = function() {
            var BH = null === AH || void 0 === AH ? void 0 : AH[XH];
            if (void 0 === BH) return {
              v: CH(AH, GH)
            };
            var SH, hH = XH,
              uH = function() {
                return void 0 === SH && (SH = LH(BH, hH)), SH
              },
              QH = BH.coordinate,
              WH = 0 === XH || EH(HH, QH, uH, YH, zH);
            WH || (XH = 0, YH = tH, GH += 1), WH && (YH = QH + HH * (uH() / 2 + rH), XH += GH)
          }; GH <= hH.length;)
          if (SH = uH()) return SH.v;
        return []
      }(OH, bH, VH, XH, uH) : (PH = "preserveStart" === WH || "preserveStartEnd" === WH ? function(HH, BH, LH, AH, rH, SH) {
        var hH = (AH || []).slice(),
          tH = hH.length,
          zH = BH.start,
          CH = BH.end;
        if (SH) {
          var XH = AH[tH - 1],
            GH = LH(XH, tH - 1),
            uH = HH * (XH.coordinate + HH * GH / 2 - CH);
          hH[tH - 1] = XH = YH(YH({}, XH), {}, {
            tickCoord: uH > 0 ? XH.coordinate - uH * HH : XH.coordinate
          }), EH(HH, XH.tickCoord, (function() {
            return GH
          }), zH, CH) && (CH = XH.tickCoord - HH * (GH / 2 + rH), hH[tH - 1] = YH(YH({}, XH), {}, {
            isShow: !0
          }))
        }
        for (var QH = SH ? tH - 1 : tH, WH = function(BH) {
            var AH, SH = hH[BH],
              tH = function() {
                return void 0 === AH && (AH = LH(SH, BH)), AH
              };
            if (0 === BH) {
              var XH = HH * (SH.coordinate - HH * tH() / 2 - zH);
              hH[BH] = SH = YH(YH({}, SH), {}, {
                tickCoord: XH < 0 ? SH.coordinate - XH * HH : SH.coordinate
              })
            } else hH[BH] = SH = YH(YH({}, SH), {}, {
              tickCoord: SH.coordinate
            });
            EH(HH, SH.tickCoord, tH, zH, CH) && (zH = SH.tickCoord + HH * (tH() / 2 + rH), hH[BH] = YH(YH({}, SH), {}, {
              isShow: !0
            }))
          }, MH = 0; MH < QH; MH++) WH(MH);
        return hH
      }(OH, bH, VH, XH, uH, "preserveStartEnd" === WH) : function(HH, BH, LH, AH, rH) {
        for (var SH = (AH || []).slice(), hH = SH.length, tH = BH.start, zH = BH.end, CH = function(BH) {
            var AH, CH = SH[BH],
              XH = function() {
                return void 0 === AH && (AH = LH(CH, BH)), AH
              };
            if (BH === hH - 1) {
              var GH = HH * (CH.coordinate + HH * XH() / 2 - zH);
              SH[BH] = CH = YH(YH({}, CH), {}, {
                tickCoord: GH > 0 ? CH.coordinate - GH * HH : CH.coordinate
              })
            } else SH[BH] = CH = YH(YH({}, CH), {}, {
              tickCoord: CH.coordinate
            });
            EH(HH, CH.tickCoord, XH, tH, zH) && (zH = CH.tickCoord - HH * (XH() / 2 + rH), SH[BH] = YH(YH({}, CH), {}, {
              isShow: !0
            }))
          }, XH = hH - 1; XH >= 0; XH--) CH(XH);
        return SH
      }(OH, bH, VH, XH, uH), PH.filter((function(HH) {
        return HH.isShow
      })))
    }
  },
  6950: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => zH
    });
    var AH = LH(5981),
      rH = LH(6808),
      SH = LH(6922),
      hH = LH(6936),
      tH = LH(6770),
      zH = (0, AH.b)({
        chartName: "BarChart",
        GraphicalChild: rH.d,
        defaultTooltipEventType: "axis",
        validateTooltipEventTypes: ["axis", "item"],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: SH.d
        }, {
          axisType: "yAxis",
          AxisComp: hH.e
        }],
        formatAxisMap: tH.d
      })
  },
  5979: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => rB
    });
    var AH = LH(5981),
      rH = LH(6907),
      SH = LH(6808),
      hH = LH(6915),
      tH = LH(45),
      zH = LH(6655),
      CH = LH(5951),
      EH = LH.n(CH),
      XH = LH(6728),
      GH = LH.n(XH),
      YH = LH(5789),
      uH = LH.n(YH),
      QH = LH(5582),
      WH = LH(6489),
      MH = LH(6822),
      xH = LH(5960),
      vH = LH(6497);

    function PH(HH) {
      return PH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, PH(HH)
    }

    function TH(HH, BH) {
      for (var LH = 0; LH < BH.length; LH++) {
        var AH = BH[LH];
        AH.enumerable = AH.enumerable || !1, AH.configurable = !0, "value" in AH && (AH.writable = !0), Object.defineProperty(HH, mH(AH.key), AH)
      }
    }

    function UH(HH, BH, LH) {
      return BH = OH(BH),
        function(HH, BH) {
          if (BH && ("object" === PH(BH) || "function" === typeof BH)) return BH;
          if (void 0 !== BH) throw new TypeError("Derived constructors may only return object or undefined");
          return function(HH) {
            if (void 0 === HH) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return HH
          }(HH)
        }(HH, VH() ? Reflect.construct(BH, LH || [], OH(HH).constructor) : BH.apply(HH, LH))
    }

    function VH() {
      try {
        var HH = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (HH) {}
      return (VH = function() {
        return !!HH
      })()
    }

    function OH(HH) {
      return OH = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(HH) {
        return HH.__proto__ || Object.getPrototypeOf(HH)
      }, OH(HH)
    }

    function bH(HH, BH) {
      return bH = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(HH, BH) {
        return HH.__proto__ = BH, HH
      }, bH(HH, BH)
    }

    function kH(HH, BH, LH) {
      return (BH = mH(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }

    function mH(HH) {
      var BH = function(HH, BH) {
        if ("object" != PH(HH) || !HH) return HH;
        var LH = HH[Symbol.toPrimitive];
        if (void 0 !== LH) {
          var AH = LH.call(HH, BH || "default");
          if ("object" != PH(AH)) return AH;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === BH ? String : Number)(HH)
      }(HH, "string");
      return "symbol" == PH(BH) ? BH : BH + ""
    }
    var oH = function(HH) {
      function BH() {
        return function(HH, BH) {
          if (!(HH instanceof BH)) throw new TypeError("Cannot call a class as a function")
        }(this, BH), UH(this, BH, arguments)
      }
      return function(HH, BH) {
        if ("function" !== typeof BH && null !== BH) throw new TypeError("Super expression must either be null or a function");
        HH.prototype = Object.create(BH && BH.prototype, {
          constructor: {
            value: HH,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(HH, "prototype", {
          writable: !1
        }), BH && bH(HH, BH)
      }(BH, HH), LH = BH, (AH = [{
        key: "render",
        value: function() {
          return null
        }
      }]) && TH(LH.prototype, AH), rH && TH(LH, rH), Object.defineProperty(LH, "prototype", {
        writable: !1
      }), LH;
      var LH, AH, rH
    }(tH.Component);
    kH(oH, "displayName", "ZAxis"), kH(oH, "defaultProps", {
      zAxisId: 0,
      range: [64, 64],
      scale: "auto",
      type: "number"
    });
    var IH = LH(6901),
      fH = LH(6734),
      lH = LH(6816),
      KH = LH(5684),
      cH = LH(6665),
      eH = LH(5975),
      qH = LH(6577),
      gH = LH(6834),
      NH = ["option", "isActive"];

    function RH() {
      return RH = Object.assign ? Object.assign.bind() : function(HH) {
        for (var BH = 1; BH < arguments.length; BH++) {
          var LH = arguments[BH];
          for (var AH in LH) Object.prototype.hasOwnProperty.call(LH, AH) && (HH[AH] = LH[AH])
        }
        return HH
      }, RH.apply(this, arguments)
    }

    function jH(HH, BH) {
      if (null == HH) return {};
      var LH, AH, rH = function(HH, BH) {
        if (null == HH) return {};
        var LH = {};
        for (var AH in HH)
          if (Object.prototype.hasOwnProperty.call(HH, AH)) {
            if (BH.indexOf(AH) >= 0) continue;
            LH[AH] = HH[AH]
          } return LH
      }(HH, BH);
      if (Object.getOwnPropertySymbols) {
        var SH = Object.getOwnPropertySymbols(HH);
        for (AH = 0; AH < SH.length; AH++) LH = SH[AH], BH.indexOf(LH) >= 0 || Object.prototype.propertyIsEnumerable.call(HH, LH) && (rH[LH] = HH[LH])
      }
      return rH
    }

    function nH(HH) {
      var BH = HH.option,
        LH = HH.isActive,
        AH = jH(HH, NH);
      return "string" === typeof BH ? tH.createElement(gH.d, RH({
        option: tH.createElement(qH.e, RH({
          type: BH
        }, AH)),
        isActive: LH,
        shapeType: "symbols"
      }, AH)) : tH.createElement(gH.d, RH({
        option: BH,
        isActive: LH,
        shapeType: "symbols"
      }, AH))
    }

    function FH(HH) {
      return FH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, FH(HH)
    }

    function DH() {
      return DH = Object.assign ? Object.assign.bind() : function(HH) {
        for (var BH = 1; BH < arguments.length; BH++) {
          var LH = arguments[BH];
          for (var AH in LH) Object.prototype.hasOwnProperty.call(LH, AH) && (HH[AH] = LH[AH])
        }
        return HH
      }, DH.apply(this, arguments)
    }

    function wH(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function ZH(HH) {
      for (var BH = 1; BH < arguments.length; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? wH(Object(LH), !0).forEach((function(BH) {
          pH(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : wH(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }

    function dH(HH, BH) {
      for (var LH = 0; LH < BH.length; LH++) {
        var AH = BH[LH];
        AH.enumerable = AH.enumerable || !1, AH.configurable = !0, "value" in AH && (AH.writable = !0), Object.defineProperty(HH, yH(AH.key), AH)
      }
    }

    function aH(HH, BH, LH) {
      return BH = JH(BH),
        function(HH, BH) {
          if (BH && ("object" === FH(BH) || "function" === typeof BH)) return BH;
          if (void 0 !== BH) throw new TypeError("Derived constructors may only return object or undefined");
          return function(HH) {
            if (void 0 === HH) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return HH
          }(HH)
        }(HH, sH() ? Reflect.construct(BH, LH || [], JH(HH).constructor) : BH.apply(HH, LH))
    }

    function sH() {
      try {
        var HH = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (HH) {}
      return (sH = function() {
        return !!HH
      })()
    }

    function JH(HH) {
      return JH = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(HH) {
        return HH.__proto__ || Object.getPrototypeOf(HH)
      }, JH(HH)
    }

    function iH(HH, BH) {
      return iH = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(HH, BH) {
        return HH.__proto__ = BH, HH
      }, iH(HH, BH)
    }

    function pH(HH, BH, LH) {
      return (BH = yH(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }

    function yH(HH) {
      var BH = function(HH, BH) {
        if ("object" != FH(HH) || !HH) return HH;
        var LH = HH[Symbol.toPrimitive];
        if (void 0 !== LH) {
          var AH = LH.call(HH, BH || "default");
          if ("object" != FH(AH)) return AH;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === BH ? String : Number)(HH)
      }(HH, "string");
      return "symbol" == FH(BH) ? BH : BH + ""
    }
    var HB = function(HH) {
      function BH() {
        var HH;
        ! function(HH, BH) {
          if (!(HH instanceof BH)) throw new TypeError("Cannot call a class as a function")
        }(this, BH);
        for (var LH = arguments.length, AH = new Array(LH), rH = 0; rH < LH; rH++) AH[rH] = arguments[rH];
        return pH(HH = aH(this, BH, [].concat(AH)), "state", {
          isAnimationFinished: !1
        }), pH(HH, "handleAnimationEnd", (function() {
          HH.setState({
            isAnimationFinished: !0
          })
        })), pH(HH, "handleAnimationStart", (function() {
          HH.setState({
            isAnimationFinished: !1
          })
        })), pH(HH, "id", (0, KH.D)("recharts-scatter-")), HH
      }
      return function(HH, BH) {
        if ("function" !== typeof BH && null !== BH) throw new TypeError("Super expression must either be null or a function");
        HH.prototype = Object.create(BH && BH.prototype, {
          constructor: {
            value: HH,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(HH, "prototype", {
          writable: !1
        }), BH && iH(HH, BH)
      }(BH, HH), LH = BH, AH = [{
        key: "renderSymbolsStatically",
        value: function(HH) {
          var BH = this,
            LH = this.props,
            AH = LH.shape,
            rH = LH.activeShape,
            SH = LH.activeIndex,
            hH = (0, xH.c)(this.props, !1);
          return HH.map((function(HH, LH) {
            var zH = SH === LH,
              CH = zH ? rH : AH,
              EH = ZH(ZH({}, hH), HH);
            return tH.createElement(WH.b, DH({
              className: "recharts-scatter-symbol",
              key: "symbol-".concat(null === HH || void 0 === HH ? void 0 : HH.cx, "-").concat(null === HH || void 0 === HH ? void 0 : HH.cy, "-").concat(null === HH || void 0 === HH ? void 0 : HH.size, "-").concat(LH)
            }, (0, eH.n)(BH.props, HH, LH), {
              role: "img"
            }), tH.createElement(nH, DH({
              option: CH,
              isActive: zH,
              key: "symbol-".concat(LH)
            }, EH)))
          }))
        }
      }, {
        key: "renderSymbolsWithAnimation",
        value: function() {
          var HH = this,
            BH = this.props,
            LH = BH.points,
            AH = BH.isAnimationActive,
            rH = BH.animationBegin,
            SH = BH.animationDuration,
            hH = BH.animationEasing,
            CH = BH.animationId,
            EH = this.state.prevPoints;
          return tH.createElement(zH.b, {
            PX: rH,
            duration: SH,
            isActive: AH,
            easing: hH,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "pie-".concat(CH),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(BH) {
            var AH = BH.t,
              rH = LH.map((function(HH, BH) {
                var LH = EH && EH[BH];
                if (LH) {
                  var rH = (0, KH.q)(LH.cx, HH.cx),
                    SH = (0, KH.q)(LH.cy, HH.cy),
                    hH = (0, KH.q)(LH.size, HH.size);
                  return ZH(ZH({}, HH), {}, {
                    cx: rH(AH),
                    cy: SH(AH),
                    size: hH(AH)
                  })
                }
                var tH = (0, KH.q)(0, HH.size);
                return ZH(ZH({}, HH), {}, {
                  size: tH(AH)
                })
              }));
            return tH.createElement(WH.b, null, HH.renderSymbolsStatically(rH))
          }))
        }
      }, {
        key: "renderSymbols",
        value: function() {
          var HH = this.props,
            BH = HH.points,
            LH = HH.isAnimationActive,
            AH = this.state.prevPoints;
          return !(LH && BH && BH.length) || AH && GH()(AH, BH) ? this.renderSymbolsStatically(BH) : this.renderSymbolsWithAnimation()
        }
      }, {
        key: "renderErrorBar",
        value: function() {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var HH = this.props,
            BH = HH.points,
            LH = HH.xAxis,
            AH = HH.yAxis,
            rH = HH.children,
            SH = (0, xH.e)(rH, fH.d);
          return SH ? SH.map((function(HH, rH) {
            var SH = HH.props,
              hH = SH.direction,
              zH = SH.dataKey;
            return tH.cloneElement(HH, {
              key: "".concat(hH, "-").concat(zH, "-").concat(BH[rH]),
              data: BH,
              xAxis: LH,
              yAxis: AH,
              layout: "x" === hH ? "vertical" : "horizontal",
              dataPointFormatter: function(HH, BH) {
                return {
                  x: HH.cx,
                  y: HH.cy,
                  value: "x" === hH ? +HH.node.x : +HH.node.y,
                  errorVal: (0, cH.db)(HH, BH)
                }
              }
            })
          })) : null
        }
      }, {
        key: "renderLine",
        value: function() {
          var HH, BH, LH = this.props,
            AH = LH.points,
            rH = LH.line,
            SH = LH.lineType,
            hH = LH.lineJointType,
            zH = (0, xH.c)(this.props, !1),
            CH = (0, xH.c)(rH, !1);
          if ("joint" === SH) HH = AH.map((function(HH) {
            return {
              x: HH.cx,
              y: HH.cy
            }
          }));
          else if ("fitting" === SH) {
            var EH = (0, KH.j)(AH),
              XH = EH.xmin,
              GH = EH.xmax,
              YH = EH.a,
              QH = EH.b,
              MH = function(HH) {
                return YH * HH + QH
              };
            HH = [{
              x: XH,
              y: MH(XH)
            }, {
              x: GH,
              y: MH(GH)
            }]
          }
          var vH = ZH(ZH(ZH({}, zH), {}, {
            fill: "none",
            stroke: zH && zH.fill
          }, CH), {}, {
            points: HH
          });
          return BH = tH.isValidElement(rH) ? tH.cloneElement(rH, vH) : uH()(rH) ? rH(vH) : tH.createElement(IH.c, DH({}, vH, {
            type: hH
          })), tH.createElement(WH.b, {
            className: "recharts-scatter-line",
            key: "recharts-scatter-line"
          }, BH)
        }
      }, {
        key: "render",
        value: function() {
          var HH = this.props,
            BH = HH.hide,
            LH = HH.points,
            AH = HH.line,
            rH = HH.className,
            SH = HH.xAxis,
            hH = HH.yAxis,
            zH = HH.left,
            CH = HH.top,
            XH = HH.width,
            GH = HH.height,
            YH = HH.id,
            uH = HH.isAnimationActive;
          if (BH || !LH || !LH.length) return null;
          var xH = this.state.isAnimationFinished,
            vH = (0, QH.e)("recharts-scatter", rH),
            PH = SH && SH.allowDataOverflow,
            TH = hH && hH.allowDataOverflow,
            UH = PH || TH,
            VH = EH()(YH) ? this.id : YH;
          return tH.createElement(WH.b, {
            className: vH,
            clipPath: UH ? "url(#clipPath-".concat(VH, ")") : null
          }, PH || TH ? tH.createElement("defs", null, tH.createElement("clipPath", {
            id: "clipPath-".concat(VH)
          }, tH.createElement("rect", {
            x: PH ? zH : zH - XH / 2,
            y: TH ? CH : CH - GH / 2,
            width: PH ? XH : 2 * XH,
            height: TH ? GH : 2 * GH
          }))) : null, AH && this.renderLine(), this.renderErrorBar(), tH.createElement(WH.b, {
            key: "recharts-scatter-symbols"
          }, this.renderSymbols()), (!uH || xH) && MH.c.renderCallByParent(this.props, LH))
        }
      }], rH = [{
        key: "getDerivedStateFromProps",
        value: function(HH, BH) {
          return HH.animationId !== BH.prevAnimationId ? {
            prevAnimationId: HH.animationId,
            curPoints: HH.points,
            prevPoints: BH.curPoints
          } : HH.points !== BH.curPoints ? {
            curPoints: HH.points
          } : null
        }
      }], AH && dH(LH.prototype, AH), rH && dH(LH, rH), Object.defineProperty(LH, "prototype", {
        writable: !1
      }), LH;
      var LH, AH, rH
    }(tH.PureComponent);
    pH(HB, "displayName", "Scatter"), pH(HB, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      zAxisId: 0,
      legendType: "circle",
      lineType: "joint",
      lineJointType: "linear",
      data: [],
      shape: "circle",
      hide: !1,
      isAnimationActive: !vH.b.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "linear"
    }), pH(HB, "getComposedData", (function(HH) {
      var BH = HH.xAxis,
        LH = HH.yAxis,
        AH = HH.zAxis,
        rH = HH.item,
        SH = HH.displayedData,
        hH = HH.xAxisTicks,
        tH = HH.yAxisTicks,
        zH = HH.offset,
        CH = rH.props.tooltipType,
        XH = (0, xH.e)(rH.props.children, lH.d),
        GH = EH()(BH.dataKey) ? rH.props.dataKey : BH.dataKey,
        YH = EH()(LH.dataKey) ? rH.props.dataKey : LH.dataKey,
        uH = AH && AH.dataKey,
        QH = AH ? AH.range : oH.defaultProps.range,
        WH = QH && QH[0],
        MH = BH.scale.bandwidth ? BH.scale.bandwidth() : 0,
        vH = LH.scale.bandwidth ? LH.scale.bandwidth() : 0,
        PH = SH.map((function(HH, SH) {
          var zH = (0, cH.db)(HH, GH),
            QH = (0, cH.db)(HH, YH),
            xH = !EH()(uH) && (0, cH.db)(HH, uH) || "-",
            PH = [{
              name: EH()(BH.dataKey) ? rH.props.name : BH.name || BH.dataKey,
              unit: BH.unit || "",
              value: zH,
              payload: HH,
              dataKey: GH,
              type: CH
            }, {
              name: EH()(LH.dataKey) ? rH.props.name : LH.name || LH.dataKey,
              unit: LH.unit || "",
              value: QH,
              payload: HH,
              dataKey: YH,
              type: CH
            }];
          "-" !== xH && PH.push({
            name: AH.name || AH.dataKey,
            unit: AH.unit || "",
            value: xH,
            payload: HH,
            dataKey: uH,
            type: CH
          });
          var TH = (0, cH.z)({
              axis: BH,
              ticks: hH,
              bandSize: MH,
              entry: HH,
              index: SH,
              dataKey: GH
            }),
            UH = (0, cH.z)({
              axis: LH,
              ticks: tH,
              bandSize: vH,
              entry: HH,
              index: SH,
              dataKey: YH
            }),
            VH = "-" !== xH ? AH.scale(xH) : WH,
            OH = Math.sqrt(Math.max(VH, 0) / Math.PI);
          return ZH(ZH({}, HH), {}, {
            cx: TH,
            cy: UH,
            x: TH - OH,
            y: UH - OH,
            xAxis: BH,
            yAxis: LH,
            zAxis: AH,
            width: 2 * OH,
            height: 2 * OH,
            size: VH,
            node: {
              x: zH,
              y: QH,
              z: xH
            },
            tooltipPayload: PH,
            tooltipPosition: {
              x: TH,
              y: UH
            },
            payload: HH
          }, XH && XH[SH] && XH[SH].props)
        }));
      return ZH({
        points: PH
      }, zH)
    }));
    var BB = LH(6922),
      LB = LH(6936),
      AB = LH(6770),
      rB = (0, AH.b)({
        chartName: "ComposedChart",
        GraphicalChild: [hH.b, rH.b, SH.d, HB],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: BB.d
        }, {
          axisType: "yAxis",
          AxisComp: LB.e
        }, {
          axisType: "zAxis",
          AxisComp: oH
        }],
        formatAxisMap: AB.d
      })
  },
  5981: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => RL
    });
    var AH = LH(45),
      rH = LH(5951),
      SH = LH.n(rH),
      hH = LH(5789),
      tH = LH.n(hH),
      zH = LH(5986),
      CH = LH.n(zH),
      EH = LH(5714),
      XH = LH.n(EH),
      GH = LH(6028),
      YH = LH.n(GH),
      uH = LH(5590),
      QH = LH.n(uH),
      WH = LH(5582),
      MH = LH(6471),
      xH = LH(6480),
      vH = LH(6489),
      PH = LH(6493),
      TH = LH(6568),
      UH = LH(6643),
      VH = LH(6652),
      OH = LH(5960),
      bH = LH(6673),
      kH = LH(6657),
      mH = LH(6665),
      oH = LH(5684);

    function IH(HH) {
      return IH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, IH(HH)
    }

    function fH(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function lH(HH) {
      for (var BH = 1; BH < arguments.length; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? fH(Object(LH), !0).forEach((function(BH) {
          KH(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : fH(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }

    function KH(HH, BH, LH) {
      return (BH = function(HH) {
        var BH = function(HH, BH) {
          if ("object" != IH(HH) || !HH) return HH;
          var LH = HH[Symbol.toPrimitive];
          if (void 0 !== LH) {
            var AH = LH.call(HH, BH || "default");
            if ("object" != IH(AH)) return AH;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === BH ? String : Number)(HH)
        }(HH, "string");
        return "symbol" == IH(BH) ? BH : BH + ""
      }(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }
    var cH = ["Webkit", "Moz", "O", "ms"];

    function eH(HH) {
      return eH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, eH(HH)
    }

    function qH() {
      return qH = Object.assign ? Object.assign.bind() : function(HH) {
        for (var BH = 1; BH < arguments.length; BH++) {
          var LH = arguments[BH];
          for (var AH in LH) Object.prototype.hasOwnProperty.call(LH, AH) && (HH[AH] = LH[AH])
        }
        return HH
      }, qH.apply(this, arguments)
    }

    function gH(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function NH(HH) {
      for (var BH = 1; BH < arguments.length; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? gH(Object(LH), !0).forEach((function(BH) {
          wH(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : gH(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }

    function RH(HH, BH) {
      for (var LH = 0; LH < BH.length; LH++) {
        var AH = BH[LH];
        AH.enumerable = AH.enumerable || !1, AH.configurable = !0, "value" in AH && (AH.writable = !0), Object.defineProperty(HH, ZH(AH.key), AH)
      }
    }

    function jH(HH, BH, LH) {
      return BH = FH(BH),
        function(HH, BH) {
          if (BH && ("object" === eH(BH) || "function" === typeof BH)) return BH;
          if (void 0 !== BH) throw new TypeError("Derived constructors may only return object or undefined");
          return function(HH) {
            if (void 0 === HH) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return HH
          }(HH)
        }(HH, nH() ? Reflect.construct(BH, LH || [], FH(HH).constructor) : BH.apply(HH, LH))
    }

    function nH() {
      try {
        var HH = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (HH) {}
      return (nH = function() {
        return !!HH
      })()
    }

    function FH(HH) {
      return FH = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(HH) {
        return HH.__proto__ || Object.getPrototypeOf(HH)
      }, FH(HH)
    }

    function DH(HH, BH) {
      return DH = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(HH, BH) {
        return HH.__proto__ = BH, HH
      }, DH(HH, BH)
    }

    function wH(HH, BH, LH) {
      return (BH = ZH(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }

    function ZH(HH) {
      var BH = function(HH, BH) {
        if ("object" != eH(HH) || !HH) return HH;
        var LH = HH[Symbol.toPrimitive];
        if (void 0 !== LH) {
          var AH = LH.call(HH, BH || "default");
          if ("object" != eH(AH)) return AH;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === BH ? String : Number)(HH)
      }(HH, "string");
      return "symbol" == eH(BH) ? BH : BH + ""
    }
    var dH = function(HH) {
        return HH.changedTouches && !!HH.changedTouches.length
      },
      aH = function(HH) {
        function BH(HH) {
          var LH;
          return function(HH, BH) {
            if (!(HH instanceof BH)) throw new TypeError("Cannot call a class as a function")
          }(this, BH), wH(LH = jH(this, BH, [HH]), "handleDrag", (function(HH) {
            LH.leaveTimer && (clearTimeout(LH.leaveTimer), LH.leaveTimer = null), LH.state.isTravellerMoving ? LH.handleTravellerMove(HH) : LH.state.isSlideMoving && LH.handleSlideDrag(HH)
          })), wH(LH, "handleTouchMove", (function(HH) {
            null != HH.changedTouches && HH.changedTouches.length > 0 && LH.handleDrag(HH.changedTouches[0])
          })), wH(LH, "handleDragEnd", (function() {
            LH.setState({
              isTravellerMoving: !1,
              isSlideMoving: !1
            }, (function() {
              var HH = LH.props,
                BH = HH.endIndex,
                AH = HH.onDragEnd,
                rH = HH.startIndex;
              null === AH || void 0 === AH || AH({
                endIndex: BH,
                startIndex: rH
              })
            })), LH.detachDragEndListener()
          })), wH(LH, "handleLeaveWrapper", (function() {
            (LH.state.isTravellerMoving || LH.state.isSlideMoving) && (LH.leaveTimer = window.setTimeout(LH.handleDragEnd, LH.props.leaveTimeOut))
          })), wH(LH, "handleEnterSlideOrTraveller", (function() {
            LH.setState({
              isTextActive: !0
            })
          })), wH(LH, "handleLeaveSlideOrTraveller", (function() {
            LH.setState({
              isTextActive: !1
            })
          })), wH(LH, "handleSlideDragStart", (function(HH) {
            var BH = dH(HH) ? HH.changedTouches[0] : HH;
            LH.setState({
              isTravellerMoving: !1,
              isSlideMoving: !0,
              slideMoveStartX: BH.pageX
            }), LH.attachDragEndListener()
          })), LH.travellerDragStartHandlers = {
            startX: LH.handleTravellerDragStart.bind(LH, "startX"),
            endX: LH.handleTravellerDragStart.bind(LH, "endX")
          }, LH.state = {}, LH
        }
        return function(HH, BH) {
          if ("function" !== typeof BH && null !== BH) throw new TypeError("Super expression must either be null or a function");
          HH.prototype = Object.create(BH && BH.prototype, {
            constructor: {
              value: HH,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(HH, "prototype", {
            writable: !1
          }), BH && DH(HH, BH)
        }(BH, HH), LH = BH, rH = [{
          key: "componentWillUnmount",
          value: function() {
            this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener()
          }
        }, {
          key: "getIndex",
          value: function(HH) {
            var LH = HH.startX,
              AH = HH.endX,
              rH = this.state.scaleValues,
              SH = this.props,
              hH = SH.gap,
              tH = SH.data.length - 1,
              zH = Math.min(LH, AH),
              CH = Math.max(LH, AH),
              EH = BH.getIndexInRange(rH, zH),
              XH = BH.getIndexInRange(rH, CH);
            return {
              startIndex: EH - EH % hH,
              endIndex: XH === tH ? tH : XH - XH % hH
            }
          }
        }, {
          key: "getTextOfTick",
          value: function(HH) {
            var BH = this.props,
              LH = BH.data,
              AH = BH.tickFormatter,
              rH = BH.dataKey,
              SH = (0, mH.db)(LH[HH], rH, HH);
            return tH()(AH) ? AH(SH, HH) : SH
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
          value: function(HH) {
            var BH = this.state,
              LH = BH.slideMoveStartX,
              AH = BH.startX,
              rH = BH.endX,
              SH = this.props,
              hH = SH.x,
              tH = SH.width,
              zH = SH.travellerWidth,
              CH = SH.startIndex,
              EH = SH.endIndex,
              XH = SH.onChange,
              GH = HH.pageX - LH;
            GH > 0 ? GH = Math.min(GH, hH + tH - zH - rH, hH + tH - zH - AH) : GH < 0 && (GH = Math.max(GH, hH - AH, hH - rH));
            var YH = this.getIndex({
              startX: AH + GH,
              endX: rH + GH
            });
            YH.startIndex === CH && YH.endIndex === EH || !XH || XH(YH), this.setState({
              startX: AH + GH,
              endX: rH + GH,
              slideMoveStartX: HH.pageX
            })
          }
        }, {
          key: "handleTravellerDragStart",
          value: function(HH, BH) {
            var LH = dH(BH) ? BH.changedTouches[0] : BH;
            this.setState({
              isSlideMoving: !1,
              isTravellerMoving: !0,
              movingTravellerId: HH,
              brushMoveStartX: LH.pageX
            }), this.attachDragEndListener()
          }
        }, {
          key: "handleTravellerMove",
          value: function(HH) {
            var BH = this.state,
              LH = BH.brushMoveStartX,
              AH = BH.movingTravellerId,
              rH = BH.endX,
              SH = BH.startX,
              hH = this.state[AH],
              tH = this.props,
              zH = tH.x,
              CH = tH.width,
              EH = tH.travellerWidth,
              XH = tH.onChange,
              GH = tH.gap,
              YH = tH.data,
              uH = {
                startX: this.state.startX,
                endX: this.state.endX
              },
              QH = HH.pageX - LH;
            QH > 0 ? QH = Math.min(QH, zH + CH - EH - hH) : QH < 0 && (QH = Math.max(QH, zH - hH)), uH[AH] = hH + QH;
            var WH = this.getIndex(uH),
              MH = WH.startIndex,
              xH = WH.endIndex;
            this.setState(wH(wH({}, AH, hH + QH), "brushMoveStartX", HH.pageX), (function() {
              XH && function() {
                var HH = YH.length - 1;
                return "startX" === AH && (rH > SH ? MH % GH === 0 : xH % GH === 0) || rH < SH && xH === HH || "endX" === AH && (rH > SH ? xH % GH === 0 : MH % GH === 0) || rH > SH && xH === HH
              }() && XH(WH)
            }))
          }
        }, {
          key: "handleTravellerMoveKeyboard",
          value: function(HH, BH) {
            var LH = this,
              AH = this.state,
              rH = AH.scaleValues,
              SH = AH.startX,
              hH = AH.endX,
              tH = this.state[BH],
              zH = rH.indexOf(tH);
            if (-1 !== zH) {
              var CH = zH + HH;
              if (!(-1 === CH || CH >= rH.length)) {
                var EH = rH[CH];
                "startX" === BH && EH >= hH || "endX" === BH && EH <= SH || this.setState(wH({}, BH, EH), (function() {
                  LH.props.onChange(LH.getIndex({
                    startX: LH.state.startX,
                    endX: LH.state.endX
                  }))
                }))
              }
            }
          }
        }, {
          key: "renderBackground",
          value: function() {
            var HH = this.props,
              BH = HH.x,
              LH = HH.y,
              rH = HH.width,
              SH = HH.height,
              hH = HH.fill,
              tH = HH.stroke;
            return AH.createElement("rect", {
              stroke: tH,
              fill: hH,
              x: BH,
              y: LH,
              width: rH,
              height: SH
            })
          }
        }, {
          key: "renderPanorama",
          value: function() {
            var HH = this.props,
              BH = HH.x,
              LH = HH.y,
              rH = HH.width,
              SH = HH.height,
              hH = HH.data,
              tH = HH.children,
              zH = HH.padding,
              CH = AH.Children.only(tH);
            return CH ? AH.cloneElement(CH, {
              x: BH,
              y: LH,
              width: rH,
              height: SH,
              margin: zH,
              compact: !0,
              data: hH
            }) : null
          }
        }, {
          key: "renderTravellerLayer",
          value: function(HH, LH) {
            var rH, SH, hH = this,
              tH = this.props,
              zH = tH.y,
              CH = tH.travellerWidth,
              EH = tH.height,
              XH = tH.traveller,
              GH = tH.ariaLabel,
              YH = tH.data,
              uH = tH.startIndex,
              QH = tH.endIndex,
              WH = Math.max(HH, this.props.x),
              MH = NH(NH({}, (0, OH.c)(this.props, !1)), {}, {
                x: WH,
                y: zH,
                width: CH,
                height: EH
              }),
              xH = GH || "Min value: ".concat(null === (rH = YH[uH]) || void 0 === rH ? void 0 : rH.name, ", Max value: ").concat(null === (SH = YH[QH]) || void 0 === SH ? void 0 : SH.name);
            return AH.createElement(vH.b, {
              tabIndex: 0,
              role: "slider",
              "aria-label": xH,
              "aria-valuenow": HH,
              className: "recharts-brush-traveller",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.travellerDragStartHandlers[LH],
              onTouchStart: this.travellerDragStartHandlers[LH],
              onKeyDown: function(HH) {
                ["ArrowLeft", "ArrowRight"].includes(HH.key) && (HH.preventDefault(), HH.stopPropagation(), hH.handleTravellerMoveKeyboard("ArrowRight" === HH.key ? 1 : -1, LH))
              },
              onFocus: function() {
                hH.setState({
                  isTravellerFocused: !0
                })
              },
              onBlur: function() {
                hH.setState({
                  isTravellerFocused: !1
                })
              },
              style: {
                cursor: "col-resize"
              }
            }, BH.renderTraveller(XH, MH))
          }
        }, {
          key: "renderSlide",
          value: function(HH, BH) {
            var LH = this.props,
              rH = LH.y,
              SH = LH.height,
              hH = LH.stroke,
              tH = LH.travellerWidth,
              zH = Math.min(HH, BH) + tH,
              CH = Math.max(Math.abs(BH - HH) - tH, 0);
            return AH.createElement("rect", {
              className: "recharts-brush-slide",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.handleSlideDragStart,
              onTouchStart: this.handleSlideDragStart,
              style: {
                cursor: "move"
              },
              stroke: "none",
              fill: hH,
              fillOpacity: .2,
              x: zH,
              y: rH,
              width: CH,
              height: SH
            })
          }
        }, {
          key: "renderText",
          value: function() {
            var HH = this.props,
              BH = HH.startIndex,
              LH = HH.endIndex,
              rH = HH.y,
              SH = HH.height,
              hH = HH.travellerWidth,
              tH = HH.stroke,
              zH = this.state,
              CH = zH.startX,
              EH = zH.endX,
              XH = {
                pointerEvents: "none",
                fill: tH
              };
            return AH.createElement(vH.b, {
              className: "recharts-brush-texts"
            }, AH.createElement(kH.e, qH({
              textAnchor: "end",
              verticalAnchor: "middle",
              x: Math.min(CH, EH) - 5,
              y: rH + SH / 2
            }, XH), this.getTextOfTick(BH)), AH.createElement(kH.e, qH({
              textAnchor: "start",
              verticalAnchor: "middle",
              x: Math.max(CH, EH) + hH + 5,
              y: rH + SH / 2
            }, XH), this.getTextOfTick(LH)))
          }
        }, {
          key: "render",
          value: function() {
            var HH = this.props,
              BH = HH.data,
              LH = HH.className,
              rH = HH.children,
              SH = HH.x,
              hH = HH.y,
              tH = HH.width,
              zH = HH.height,
              CH = HH.alwaysShowText,
              EH = this.state,
              XH = EH.startX,
              GH = EH.endX,
              YH = EH.isTextActive,
              uH = EH.isSlideMoving,
              QH = EH.isTravellerMoving,
              MH = EH.isTravellerFocused;
            if (!BH || !BH.length || !(0, oH.v)(SH) || !(0, oH.v)(hH) || !(0, oH.v)(tH) || !(0, oH.v)(zH) || tH <= 0 || zH <= 0) return null;
            var xH = (0, WH.e)("recharts-brush", LH),
              PH = 1 === AH.Children.count(rH),
              TH = function(HH, BH) {
                if (!HH) return null;
                var LH = HH.replace(/(\w)/, (function(HH) {
                    return HH.toUpperCase()
                  })),
                  AH = cH.reduce((function(HH, AH) {
                    return lH(lH({}, HH), {}, KH({}, AH + LH, BH))
                  }), {});
                return AH[HH] = BH, AH
              }("userSelect", "none");
            return AH.createElement(vH.b, {
              className: xH,
              onMouseLeave: this.handleLeaveWrapper,
              onTouchMove: this.handleTouchMove,
              style: TH
            }, this.renderBackground(), PH && this.renderPanorama(), this.renderSlide(XH, GH), this.renderTravellerLayer(XH, "startX"), this.renderTravellerLayer(GH, "endX"), (YH || uH || QH || MH || CH) && this.renderText())
          }
        }], SH = [{
          key: "renderDefaultTraveller",
          value: function(HH) {
            var BH = HH.x,
              LH = HH.y,
              rH = HH.width,
              SH = HH.height,
              hH = HH.stroke,
              tH = Math.floor(LH + SH / 2) - 1;
            return AH.createElement(AH.Fragment, null, AH.createElement("rect", {
              x: BH,
              y: LH,
              width: rH,
              height: SH,
              fill: hH,
              stroke: "none"
            }), AH.createElement("line", {
              x1: BH + 1,
              y1: tH,
              x2: BH + rH - 1,
              y2: tH,
              fill: "none",
              stroke: "#fff"
            }), AH.createElement("line", {
              x1: BH + 1,
              y1: tH + 2,
              x2: BH + rH - 1,
              y2: tH + 2,
              fill: "none",
              stroke: "#fff"
            }))
          }
        }, {
          key: "renderTraveller",
          value: function(HH, LH) {
            return AH.isValidElement(HH) ? AH.cloneElement(HH, LH) : tH()(HH) ? HH(LH) : BH.renderDefaultTraveller(LH)
          }
        }, {
          key: "getDerivedStateFromProps",
          value: function(HH, BH) {
            var LH = HH.data,
              AH = HH.width,
              rH = HH.x,
              SH = HH.travellerWidth,
              hH = HH.updateId,
              tH = HH.startIndex,
              zH = HH.endIndex;
            if (LH !== BH.prevData || hH !== BH.prevUpdateId) return NH({
              prevData: LH,
              prevTravellerWidth: SH,
              prevUpdateId: hH,
              prevX: rH,
              prevWidth: AH
            }, LH && LH.length ? function(HH) {
              var BH = HH.data,
                LH = HH.startIndex,
                AH = HH.endIndex,
                rH = HH.x,
                SH = HH.width,
                hH = HH.travellerWidth;
              if (!BH || !BH.length) return {};
              var tH = BH.length,
                zH = (0, bH.c)().domain(CH()(0, tH)).range([rH, rH + SH - hH]),
                EH = zH.domain().map((function(HH) {
                  return zH(HH)
                }));
              return {
                isTextActive: !1,
                isSlideMoving: !1,
                isTravellerMoving: !1,
                isTravellerFocused: !1,
                startX: zH(LH),
                endX: zH(AH),
                scale: zH,
                scaleValues: EH
              }
            }({
              data: LH,
              width: AH,
              x: rH,
              travellerWidth: SH,
              startIndex: tH,
              endIndex: zH
            }) : {
              scale: null,
              scaleValues: null
            });
            if (BH.scale && (AH !== BH.prevWidth || rH !== BH.prevX || SH !== BH.prevTravellerWidth)) {
              BH.scale.range([rH, rH + AH - SH]);
              var EH = BH.scale.domain().map((function(HH) {
                return BH.scale(HH)
              }));
              return {
                prevData: LH,
                prevTravellerWidth: SH,
                prevUpdateId: hH,
                prevX: rH,
                prevWidth: AH,
                startX: BH.scale(HH.startIndex),
                endX: BH.scale(HH.endIndex),
                scaleValues: EH
              }
            }
            return null
          }
        }, {
          key: "getIndexInRange",
          value: function(HH, BH) {
            for (var LH = 0, AH = HH.length - 1; AH - LH > 1;) {
              var rH = Math.floor((LH + AH) / 2);
              HH[rH] > BH ? AH = rH : LH = rH
            }
            return BH >= HH[AH] ? AH : LH
          }
        }], rH && RH(LH.prototype, rH), SH && RH(LH, SH), Object.defineProperty(LH, "prototype", {
          writable: !1
        }), LH;
        var LH, rH, SH
      }(AH.PureComponent);
    wH(aH, "displayName", "Brush"), wH(aH, "defaultProps", {
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
    var sH = LH(6663),
      JH = LH(6739),
      iH = LH(6750),
      pH = LH(6762),
      yH = LH(6770),
      HB = LH(5957);

    function BB() {
      return BB = Object.assign ? Object.assign.bind() : function(HH) {
        for (var BH = 1; BH < arguments.length; BH++) {
          var LH = arguments[BH];
          for (var AH in LH) Object.prototype.hasOwnProperty.call(LH, AH) && (HH[AH] = LH[AH])
        }
        return HH
      }, BB.apply(this, arguments)
    }

    function LB(HH) {
      return LB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, LB(HH)
    }

    function AB(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function rB(HH) {
      for (var BH = 1; BH < arguments.length; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? AB(Object(LH), !0).forEach((function(BH) {
          EB(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : AB(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }

    function SB(HH, BH) {
      for (var LH = 0; LH < BH.length; LH++) {
        var AH = BH[LH];
        AH.enumerable = AH.enumerable || !1, AH.configurable = !0, "value" in AH && (AH.writable = !0), Object.defineProperty(HH, XB(AH.key), AH)
      }
    }

    function hB(HH, BH, LH) {
      return BH = zB(BH),
        function(HH, BH) {
          if (BH && ("object" === LB(BH) || "function" === typeof BH)) return BH;
          if (void 0 !== BH) throw new TypeError("Derived constructors may only return object or undefined");
          return function(HH) {
            if (void 0 === HH) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return HH
          }(HH)
        }(HH, tB() ? Reflect.construct(BH, LH || [], zB(HH).constructor) : BH.apply(HH, LH))
    }

    function tB() {
      try {
        var HH = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (HH) {}
      return (tB = function() {
        return !!HH
      })()
    }

    function zB(HH) {
      return zB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(HH) {
        return HH.__proto__ || Object.getPrototypeOf(HH)
      }, zB(HH)
    }

    function CB(HH, BH) {
      return CB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(HH, BH) {
        return HH.__proto__ = BH, HH
      }, CB(HH, BH)
    }

    function EB(HH, BH, LH) {
      return (BH = XB(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }

    function XB(HH) {
      var BH = function(HH, BH) {
        if ("object" != LB(HH) || !HH) return HH;
        var LH = HH[Symbol.toPrimitive];
        if (void 0 !== LH) {
          var AH = LH.call(HH, BH || "default");
          if ("object" != LB(AH)) return AH;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === BH ? String : Number)(HH)
      }(HH, "string");
      return "symbol" == LB(BH) ? BH : BH + ""
    }
    var GB = function(HH) {
      function BH() {
        return function(HH, BH) {
          if (!(HH instanceof BH)) throw new TypeError("Cannot call a class as a function")
        }(this, BH), hB(this, BH, arguments)
      }
      return function(HH, BH) {
        if ("function" !== typeof BH && null !== BH) throw new TypeError("Super expression must either be null or a function");
        HH.prototype = Object.create(BH && BH.prototype, {
          constructor: {
            value: HH,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(HH, "prototype", {
          writable: !1
        }), BH && CB(HH, BH)
      }(BH, HH), LH = BH, (rH = [{
        key: "render",
        value: function() {
          var HH = this.props,
            LH = HH.x,
            rH = HH.y,
            SH = HH.r,
            hH = HH.alwaysShow,
            tH = HH.clipPathId,
            zH = (0, oH.s)(LH),
            CH = (0, oH.s)(rH);
          if ((0, HB.d)(void 0 === hH, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !zH || !CH) return null;
          var EH = function(HH) {
            var BH = HH.x,
              LH = HH.y,
              AH = HH.xAxis,
              rH = HH.yAxis,
              SH = (0, yH.c)({
                x: AH.scale,
                y: rH.scale
              }),
              hH = SH.apply({
                x: BH,
                y: LH
              }, {
                bandAware: !0
              });
            return (0, pH.d)(HH, "discard") && !SH.isInRange(hH) ? null : hH
          }(this.props);
          if (!EH) return null;
          var XH = EH.x,
            GH = EH.y,
            YH = this.props,
            uH = YH.shape,
            QH = YH.className,
            MH = rB(rB({
              clipPath: (0, pH.d)(this.props, "hidden") ? "url(#".concat(tH, ")") : void 0
            }, (0, OH.c)(this.props, !0)), {}, {
              cx: XH,
              cy: GH
            });
          return AH.createElement(vH.b, {
            className: (0, WH.e)("recharts-reference-dot", QH)
          }, BH.renderDot(uH, MH), iH.d.renderCallByParent(this.props, {
            x: XH - SH,
            y: GH - SH,
            width: 2 * SH,
            height: 2 * SH
          }))
        }
      }]) && SB(LH.prototype, rH), SH && SB(LH, SH), Object.defineProperty(LH, "prototype", {
        writable: !1
      }), LH;
      var LH, rH, SH
    }(AH.Component);
    EB(GB, "displayName", "ReferenceDot"), EB(GB, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#fff",
      stroke: "#ccc",
      fillOpacity: 1,
      strokeWidth: 1
    }), EB(GB, "renderDot", (function(HH, BH) {
      return AH.isValidElement(HH) ? AH.cloneElement(HH, BH) : tH()(HH) ? HH(BH) : AH.createElement(UH.b, BB({}, BH, {
        cx: BH.cx,
        cy: BH.cy,
        className: "recharts-reference-dot-dot"
      }))
    }));
    var YB = LH(6856);

    function uB() {
      return uB = Object.assign ? Object.assign.bind() : function(HH) {
        for (var BH = 1; BH < arguments.length; BH++) {
          var LH = arguments[BH];
          for (var AH in LH) Object.prototype.hasOwnProperty.call(LH, AH) && (HH[AH] = LH[AH])
        }
        return HH
      }, uB.apply(this, arguments)
    }

    function QB(HH) {
      return QB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, QB(HH)
    }

    function WB(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function MB(HH) {
      for (var BH = 1; BH < arguments.length; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? WB(Object(LH), !0).forEach((function(BH) {
          VB(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : WB(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }

    function xB(HH, BH) {
      for (var LH = 0; LH < BH.length; LH++) {
        var AH = BH[LH];
        AH.enumerable = AH.enumerable || !1, AH.configurable = !0, "value" in AH && (AH.writable = !0), Object.defineProperty(HH, OB(AH.key), AH)
      }
    }

    function vB(HH, BH, LH) {
      return BH = TB(BH),
        function(HH, BH) {
          if (BH && ("object" === QB(BH) || "function" === typeof BH)) return BH;
          if (void 0 !== BH) throw new TypeError("Derived constructors may only return object or undefined");
          return function(HH) {
            if (void 0 === HH) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return HH
          }(HH)
        }(HH, PB() ? Reflect.construct(BH, LH || [], TB(HH).constructor) : BH.apply(HH, LH))
    }

    function PB() {
      try {
        var HH = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (HH) {}
      return (PB = function() {
        return !!HH
      })()
    }

    function TB(HH) {
      return TB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(HH) {
        return HH.__proto__ || Object.getPrototypeOf(HH)
      }, TB(HH)
    }

    function UB(HH, BH) {
      return UB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(HH, BH) {
        return HH.__proto__ = BH, HH
      }, UB(HH, BH)
    }

    function VB(HH, BH, LH) {
      return (BH = OB(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }

    function OB(HH) {
      var BH = function(HH, BH) {
        if ("object" != QB(HH) || !HH) return HH;
        var LH = HH[Symbol.toPrimitive];
        if (void 0 !== LH) {
          var AH = LH.call(HH, BH || "default");
          if ("object" != QB(AH)) return AH;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === BH ? String : Number)(HH)
      }(HH, "string");
      return "symbol" == QB(BH) ? BH : BH + ""
    }
    var bB = function(HH) {
      function BH() {
        return function(HH, BH) {
          if (!(HH instanceof BH)) throw new TypeError("Cannot call a class as a function")
        }(this, BH), vB(this, BH, arguments)
      }
      return function(HH, BH) {
        if ("function" !== typeof BH && null !== BH) throw new TypeError("Super expression must either be null or a function");
        HH.prototype = Object.create(BH && BH.prototype, {
          constructor: {
            value: HH,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(HH, "prototype", {
          writable: !1
        }), BH && UB(HH, BH)
      }(BH, HH), LH = BH, (rH = [{
        key: "render",
        value: function() {
          var HH = this.props,
            LH = HH.x1,
            rH = HH.x2,
            SH = HH.y1,
            hH = HH.y2,
            tH = HH.className,
            zH = HH.alwaysShow,
            CH = HH.clipPathId;
          (0, HB.d)(void 0 === zH, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
          var EH = (0, oH.s)(LH),
            XH = (0, oH.s)(rH),
            GH = (0, oH.s)(SH),
            YH = (0, oH.s)(hH),
            uH = this.props.shape;
          if (!EH && !XH && !GH && !YH && !uH) return null;
          var QH = function(HH, BH, LH, AH, rH) {
            var SH = rH.x1,
              hH = rH.x2,
              tH = rH.y1,
              zH = rH.y2,
              CH = rH.xAxis,
              EH = rH.yAxis;
            if (!CH || !EH) return null;
            var XH = (0, yH.c)({
                x: CH.scale,
                y: EH.scale
              }),
              GH = {
                x: HH ? XH.x.apply(SH, {
                  position: "start"
                }) : XH.x.rangeMin,
                y: LH ? XH.y.apply(tH, {
                  position: "start"
                }) : XH.y.rangeMin
              },
              YH = {
                x: BH ? XH.x.apply(hH, {
                  position: "end"
                }) : XH.x.rangeMax,
                y: AH ? XH.y.apply(zH, {
                  position: "end"
                }) : XH.y.rangeMax
              };
            return !(0, pH.d)(rH, "discard") || XH.isInRange(GH) && XH.isInRange(YH) ? (0, yH.k)(GH, YH) : null
          }(EH, XH, GH, YH, this.props);
          if (!QH && !uH) return null;
          var MH = (0, pH.d)(this.props, "hidden") ? "url(#".concat(CH, ")") : void 0;
          return AH.createElement(vH.b, {
            className: (0, WH.e)("recharts-reference-area", tH)
          }, BH.renderRect(uH, MB(MB({
            clipPath: MH
          }, (0, OH.c)(this.props, !0)), QH)), iH.d.renderCallByParent(this.props, QH))
        }
      }]) && xB(LH.prototype, rH), SH && xB(LH, SH), Object.defineProperty(LH, "prototype", {
        writable: !1
      }), LH;
      var LH, rH, SH
    }(AH.Component);

    function kB(HH) {
      return function(HH) {
        if (Array.isArray(HH)) return mB(HH)
      }(HH) || function(HH) {
        if ("undefined" !== typeof Symbol && null != HH[Symbol.iterator] || null != HH["@@iterator"]) return Array.from(HH)
      }(HH) || function(HH, BH) {
        if (!HH) return;
        if ("string" === typeof HH) return mB(HH, BH);
        var LH = Object.prototype.toString.call(HH).slice(8, -1);
        "Object" === LH && HH.constructor && (LH = HH.constructor.name);
        if ("Map" === LH || "Set" === LH) return Array.from(HH);
        if ("Arguments" === LH || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(LH)) return mB(HH, BH)
      }(HH) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function mB(HH, BH) {
      (null == BH || BH > HH.length) && (BH = HH.length);
      for (var LH = 0, AH = new Array(BH); LH < BH; LH++) AH[LH] = HH[LH];
      return AH
    }
    VB(bB, "displayName", "ReferenceArea"), VB(bB, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#ccc",
      fillOpacity: .5,
      stroke: "none",
      strokeWidth: 1
    }), VB(bB, "renderRect", (function(HH, BH) {
      return AH.isValidElement(HH) ? AH.cloneElement(HH, BH) : tH()(HH) ? HH(BH) : AH.createElement(VH.c, uB({}, BH, {
        className: "recharts-reference-area-rect"
      }))
    }));
    var oB = function(HH, BH, LH, AH, rH) {
        var SH = (0, OH.e)(HH, YB.e),
          hH = (0, OH.e)(HH, GB),
          tH = [].concat(kB(SH), kB(hH)),
          zH = (0, OH.e)(HH, bB),
          CH = "".concat(AH, "Id"),
          EH = AH[0],
          XH = BH;
        if (tH.length && (XH = tH.reduce((function(HH, BH) {
            if (BH.props[CH] === LH && (0, pH.d)(BH.props, "extendDomain") && (0, oH.v)(BH.props[EH])) {
              var AH = BH.props[EH];
              return [Math.min(HH[0], AH), Math.max(HH[1], AH)]
            }
            return HH
          }), XH)), zH.length) {
          var GH = "".concat(EH, "1"),
            YH = "".concat(EH, "2");
          XH = zH.reduce((function(HH, BH) {
            if (BH.props[CH] === LH && (0, pH.d)(BH.props, "extendDomain") && (0, oH.v)(BH.props[GH]) && (0, oH.v)(BH.props[YH])) {
              var AH = BH.props[GH],
                rH = BH.props[YH];
              return [Math.min(HH[0], AH, rH), Math.max(HH[1], AH, rH)]
            }
            return HH
          }), XH)
        }
        return rH && rH.length && (XH = rH.reduce((function(HH, BH) {
          return (0, oH.v)(BH) ? [Math.min(HH[0], BH), Math.max(HH[1], BH)] : HH
        }), XH)), XH
      },
      IB = LH(6754),
      fB = LH(5973),
      lB = LH(22),
      KB = new(LH.n(lB)()),
      cB = "recharts.syncMouseEvents",
      eB = LH(5975);

    function qB(HH) {
      return qB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, qB(HH)
    }

    function gB(HH, BH) {
      for (var LH = 0; LH < BH.length; LH++) {
        var AH = BH[LH];
        AH.enumerable = AH.enumerable || !1, AH.configurable = !0, "value" in AH && (AH.writable = !0), Object.defineProperty(HH, RB(AH.key), AH)
      }
    }

    function NB(HH, BH, LH) {
      return (BH = RB(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }

    function RB(HH) {
      var BH = function(HH, BH) {
        if ("object" != qB(HH) || !HH) return HH;
        var LH = HH[Symbol.toPrimitive];
        if (void 0 !== LH) {
          var AH = LH.call(HH, BH || "default");
          if ("object" != qB(AH)) return AH;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === BH ? String : Number)(HH)
      }(HH, "string");
      return "symbol" == qB(BH) ? BH : BH + ""
    }
    var jB = function() {
      return HH = function HH() {
        ! function(HH, BH) {
          if (!(HH instanceof BH)) throw new TypeError("Cannot call a class as a function")
        }(this, HH), NB(this, "activeIndex", 0), NB(this, "coordinateList", []), NB(this, "layout", "horizontal")
      }, (BH = [{
        key: "setDetails",
        value: function(HH) {
          var BH, LH = HH.coordinateList,
            AH = void 0 === LH ? null : LH,
            rH = HH.container,
            SH = void 0 === rH ? null : rH,
            hH = HH.layout,
            tH = void 0 === hH ? null : hH,
            zH = HH.offset,
            CH = void 0 === zH ? null : zH,
            EH = HH.mouseHandlerCallback,
            XH = void 0 === EH ? null : EH;
          this.coordinateList = null !== (BH = null !== AH && void 0 !== AH ? AH : this.coordinateList) && void 0 !== BH ? BH : [], this.container = null !== SH && void 0 !== SH ? SH : this.container, this.layout = null !== tH && void 0 !== tH ? tH : this.layout, this.offset = null !== CH && void 0 !== CH ? CH : this.offset, this.mouseHandlerCallback = null !== XH && void 0 !== XH ? XH : this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1)
        }
      }, {
        key: "focus",
        value: function() {
          this.spoofMouse()
        }
      }, {
        key: "keyboardEvent",
        value: function(HH) {
          if (0 !== this.coordinateList.length) switch (HH.key) {
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
        value: function(HH) {
          this.activeIndex = HH
        }
      }, {
        key: "spoofMouse",
        value: function() {
          var HH, BH;
          if ("horizontal" === this.layout && 0 !== this.coordinateList.length) {
            var LH = this.container.getBoundingClientRect(),
              AH = LH.x,
              rH = LH.y,
              SH = LH.height,
              hH = this.coordinateList[this.activeIndex].coordinate,
              tH = (null === (HH = window) || void 0 === HH ? void 0 : HH.scrollX) || 0,
              zH = (null === (BH = window) || void 0 === BH ? void 0 : BH.scrollY) || 0,
              CH = AH + hH + tH,
              EH = rH + this.offset.top + SH / 2 + zH;
            this.mouseHandlerCallback({
              pageX: CH,
              pageY: EH
            })
          }
        }
      }]) && gB(HH.prototype, BH), LH && gB(HH, LH), Object.defineProperty(HH, "prototype", {
        writable: !1
      }), HH;
      var HH, BH, LH
    }();
    var nB = LH(6834),
      FB = LH(6901);

    function DB(HH) {
      return DB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, DB(HH)
    }
    var wB = ["x", "y", "top", "left", "width", "height", "className"];

    function ZB() {
      return ZB = Object.assign ? Object.assign.bind() : function(HH) {
        for (var BH = 1; BH < arguments.length; BH++) {
          var LH = arguments[BH];
          for (var AH in LH) Object.prototype.hasOwnProperty.call(LH, AH) && (HH[AH] = LH[AH])
        }
        return HH
      }, ZB.apply(this, arguments)
    }

    function dB(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function aB(HH, BH, LH) {
      return (BH = function(HH) {
        var BH = function(HH, BH) {
          if ("object" != DB(HH) || !HH) return HH;
          var LH = HH[Symbol.toPrimitive];
          if (void 0 !== LH) {
            var AH = LH.call(HH, BH || "default");
            if ("object" != DB(AH)) return AH;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === BH ? String : Number)(HH)
        }(HH, "string");
        return "symbol" == DB(BH) ? BH : BH + ""
      }(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }

    function sB(HH, BH) {
      if (null == HH) return {};
      var LH, AH, rH = function(HH, BH) {
        if (null == HH) return {};
        var LH = {};
        for (var AH in HH)
          if (Object.prototype.hasOwnProperty.call(HH, AH)) {
            if (BH.indexOf(AH) >= 0) continue;
            LH[AH] = HH[AH]
          } return LH
      }(HH, BH);
      if (Object.getOwnPropertySymbols) {
        var SH = Object.getOwnPropertySymbols(HH);
        for (AH = 0; AH < SH.length; AH++) LH = SH[AH], BH.indexOf(LH) >= 0 || Object.prototype.propertyIsEnumerable.call(HH, LH) && (rH[LH] = HH[LH])
      }
      return rH
    }
    var JB = function(HH, BH, LH, AH, rH, SH) {
        return "M".concat(HH, ",").concat(rH, "v").concat(AH, "M").concat(SH, ",").concat(BH, "h").concat(LH)
      },
      iB = function(HH) {
        var BH = HH.x,
          LH = void 0 === BH ? 0 : BH,
          rH = HH.y,
          SH = void 0 === rH ? 0 : rH,
          hH = HH.top,
          tH = void 0 === hH ? 0 : hH,
          zH = HH.left,
          CH = void 0 === zH ? 0 : zH,
          EH = HH.width,
          XH = void 0 === EH ? 0 : EH,
          GH = HH.height,
          YH = void 0 === GH ? 0 : GH,
          uH = HH.className,
          QH = function(HH) {
            for (var BH = 1; BH < arguments.length; BH++) {
              var LH = null != arguments[BH] ? arguments[BH] : {};
              BH % 2 ? dB(Object(LH), !0).forEach((function(BH) {
                aB(HH, BH, LH[BH])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : dB(Object(LH)).forEach((function(BH) {
                Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
              }))
            }
            return HH
          }({
            x: LH,
            y: SH,
            top: tH,
            left: CH,
            width: XH,
            height: YH
          }, sB(HH, wB));
        return (0, oH.v)(LH) && (0, oH.v)(SH) && (0, oH.v)(XH) && (0, oH.v)(YH) && (0, oH.v)(tH) && (0, oH.v)(CH) ? AH.createElement("path", ZB({}, (0, OH.c)(QH, !0), {
          className: (0, WH.e)("recharts-cross", uH),
          d: JB(LH, SH, XH, YH, tH, CH)
        })) : null
      };

    function pB(HH) {
      var BH = HH.cx,
        LH = HH.cy,
        AH = HH.radius,
        rH = HH.startAngle,
        SH = HH.endAngle;
      return {
        points: [(0, IB.g)(BH, LH, AH, rH), (0, IB.g)(BH, LH, AH, SH)],
        cx: BH,
        cy: LH,
        radius: AH,
        startAngle: rH,
        endAngle: SH
      }
    }
    var yB = LH(6851);

    function HL(HH, BH, LH) {
      var AH, rH, SH, hH;
      if ("horizontal" === HH) SH = AH = BH.x, rH = LH.top, hH = LH.top + LH.height;
      else if ("vertical" === HH) hH = rH = BH.y, AH = LH.left, SH = LH.left + LH.width;
      else if (null != BH.cx && null != BH.cy) {
        if ("centric" !== HH) return pB(BH);
        var tH = BH.cx,
          zH = BH.cy,
          CH = BH.innerRadius,
          EH = BH.outerRadius,
          XH = BH.angle,
          GH = (0, IB.g)(tH, zH, CH, XH),
          YH = (0, IB.g)(tH, zH, EH, XH);
        AH = GH.x, rH = GH.y, SH = YH.x, hH = YH.y
      }
      return [{
        x: AH,
        y: rH
      }, {
        x: SH,
        y: hH
      }]
    }

    function BL(HH) {
      return BL = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, BL(HH)
    }

    function LL(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function AL(HH) {
      for (var BH = 1; BH < arguments.length; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? LL(Object(LH), !0).forEach((function(BH) {
          rL(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : LL(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }

    function rL(HH, BH, LH) {
      return (BH = function(HH) {
        var BH = function(HH, BH) {
          if ("object" != BL(HH) || !HH) return HH;
          var LH = HH[Symbol.toPrimitive];
          if (void 0 !== LH) {
            var AH = LH.call(HH, BH || "default");
            if ("object" != BL(AH)) return AH;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === BH ? String : Number)(HH)
        }(HH, "string");
        return "symbol" == BL(BH) ? BH : BH + ""
      }(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }

    function SL(HH) {
      var BH, LH, rH, SH = HH.element,
        hH = HH.tooltipEventType,
        tH = HH.isActive,
        zH = HH.activeCoordinate,
        CH = HH.activePayload,
        EH = HH.offset,
        XH = HH.activeTooltipIndex,
        GH = HH.tooltipAxisBandSize,
        YH = HH.layout,
        uH = HH.chartName,
        QH = null !== (BH = SH.props.cursor) && void 0 !== BH ? BH : null === (LH = SH.type.defaultProps) || void 0 === LH ? void 0 : LH.cursor;
      if (!SH || !QH || !tH || !zH || "ScatterChart" !== uH && "axis" !== hH) return null;
      var MH = FB.c;
      if ("ScatterChart" === uH) rH = zH, MH = iB;
      else if ("BarChart" === uH) rH = function(HH, BH, LH, AH) {
        var rH = AH / 2;
        return {
          stroke: "none",
          fill: "#ccc",
          x: "horizontal" === HH ? BH.x - rH : LH.left + .5,
          y: "horizontal" === HH ? LH.top + .5 : BH.y - rH,
          width: "horizontal" === HH ? AH : LH.width - 1,
          height: "horizontal" === HH ? LH.height - 1 : AH
        }
      }(YH, zH, EH, GH), MH = VH.c;
      else if ("radial" === YH) {
        var xH = pB(zH),
          vH = xH.cx,
          PH = xH.cy,
          TH = xH.radius;
        rH = {
          cx: vH,
          cy: PH,
          startAngle: xH.startAngle,
          endAngle: xH.endAngle,
          innerRadius: TH,
          outerRadius: TH
        }, MH = yB.b
      } else rH = {
        points: HL(YH, zH, EH)
      }, MH = FB.c;
      var UH = AL(AL(AL(AL({
        stroke: "#ccc",
        pointerEvents: "none"
      }, EH), rH), (0, OH.c)(QH, !1)), {}, {
        payload: CH,
        payloadIndex: XH,
        className: (0, WH.e)("recharts-tooltip-cursor", QH.className)
      });
      return (0, AH.isValidElement)(QH) ? (0, AH.cloneElement)(QH, UH) : (0, AH.createElement)(MH, UH)
    }
    var hL = LH(6870),
      tL = ["item"],
      zL = ["children", "className", "width", "height", "style", "compact", "title", "desc"];

    function CL(HH) {
      return CL = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, CL(HH)
    }

    function EL() {
      return EL = Object.assign ? Object.assign.bind() : function(HH) {
        for (var BH = 1; BH < arguments.length; BH++) {
          var LH = arguments[BH];
          for (var AH in LH) Object.prototype.hasOwnProperty.call(LH, AH) && (HH[AH] = LH[AH])
        }
        return HH
      }, EL.apply(this, arguments)
    }

    function XL(HH, BH) {
      return function(HH) {
        if (Array.isArray(HH)) return HH
      }(HH) || function(HH, BH) {
        var LH = null == HH ? null : "undefined" != typeof Symbol && HH[Symbol.iterator] || HH["@@iterator"];
        if (null != LH) {
          var AH, rH, SH, hH, tH = [],
            zH = !0,
            CH = !1;
          try {
            if (SH = (LH = LH.call(HH)).next, 0 === BH) {
              if (Object(LH) !== LH) return;
              zH = !1
            } else
              for (; !(zH = (AH = SH.call(LH)).done) && (tH.push(AH.value), tH.length !== BH); zH = !0);
          } catch (HH) {
            CH = !0, rH = HH
          } finally {
            try {
              if (!zH && null != LH.return && (hH = LH.return(), Object(hH) !== hH)) return
            } finally {
              if (CH) throw rH
            }
          }
          return tH
        }
      }(HH, BH) || vL(HH, BH) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function GL(HH, BH) {
      if (null == HH) return {};
      var LH, AH, rH = function(HH, BH) {
        if (null == HH) return {};
        var LH = {};
        for (var AH in HH)
          if (Object.prototype.hasOwnProperty.call(HH, AH)) {
            if (BH.indexOf(AH) >= 0) continue;
            LH[AH] = HH[AH]
          } return LH
      }(HH, BH);
      if (Object.getOwnPropertySymbols) {
        var SH = Object.getOwnPropertySymbols(HH);
        for (AH = 0; AH < SH.length; AH++) LH = SH[AH], BH.indexOf(LH) >= 0 || Object.prototype.propertyIsEnumerable.call(HH, LH) && (rH[LH] = HH[LH])
      }
      return rH
    }

    function YL(HH, BH) {
      for (var LH = 0; LH < BH.length; LH++) {
        var AH = BH[LH];
        AH.enumerable = AH.enumerable || !1, AH.configurable = !0, "value" in AH && (AH.writable = !0), Object.defineProperty(HH, OL(AH.key), AH)
      }
    }

    function uL(HH, BH, LH) {
      return BH = WL(BH),
        function(HH, BH) {
          if (BH && ("object" === CL(BH) || "function" === typeof BH)) return BH;
          if (void 0 !== BH) throw new TypeError("Derived constructors may only return object or undefined");
          return function(HH) {
            if (void 0 === HH) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return HH
          }(HH)
        }(HH, QL() ? Reflect.construct(BH, LH || [], WL(HH).constructor) : BH.apply(HH, LH))
    }

    function QL() {
      try {
        var HH = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (HH) {}
      return (QL = function() {
        return !!HH
      })()
    }

    function WL(HH) {
      return WL = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(HH) {
        return HH.__proto__ || Object.getPrototypeOf(HH)
      }, WL(HH)
    }

    function ML(HH, BH) {
      return ML = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(HH, BH) {
        return HH.__proto__ = BH, HH
      }, ML(HH, BH)
    }

    function xL(HH) {
      return function(HH) {
        if (Array.isArray(HH)) return PL(HH)
      }(HH) || function(HH) {
        if ("undefined" !== typeof Symbol && null != HH[Symbol.iterator] || null != HH["@@iterator"]) return Array.from(HH)
      }(HH) || vL(HH) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function vL(HH, BH) {
      if (HH) {
        if ("string" === typeof HH) return PL(HH, BH);
        var LH = Object.prototype.toString.call(HH).slice(8, -1);
        return "Object" === LH && HH.constructor && (LH = HH.constructor.name), "Map" === LH || "Set" === LH ? Array.from(HH) : "Arguments" === LH || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(LH) ? PL(HH, BH) : void 0
      }
    }

    function PL(HH, BH) {
      (null == BH || BH > HH.length) && (BH = HH.length);
      for (var LH = 0, AH = new Array(BH); LH < BH; LH++) AH[LH] = HH[LH];
      return AH
    }

    function TL(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function UL(HH) {
      for (var BH = 1; BH < arguments.length; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? TL(Object(LH), !0).forEach((function(BH) {
          VL(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : TL(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }

    function VL(HH, BH, LH) {
      return (BH = OL(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }

    function OL(HH) {
      var BH = function(HH, BH) {
        if ("object" != CL(HH) || !HH) return HH;
        var LH = HH[Symbol.toPrimitive];
        if (void 0 !== LH) {
          var AH = LH.call(HH, BH || "default");
          if ("object" != CL(AH)) return AH;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === BH ? String : Number)(HH)
      }(HH, "string");
      return "symbol" == CL(BH) ? BH : BH + ""
    }
    var bL = {
        xAxis: ["bottom", "top"],
        yAxis: ["left", "right"]
      },
      kL = {
        width: "100%",
        height: "100%"
      },
      mL = {
        x: 0,
        y: 0
      };

    function oL(HH) {
      return HH
    }
    var IL = function(HH, BH) {
      var LH = BH.graphicalItems,
        AH = BH.dataStartIndex,
        rH = BH.dataEndIndex,
        SH = (null !== LH && void 0 !== LH ? LH : []).reduce((function(HH, BH) {
          var LH = BH.props.data;
          return LH && LH.length ? [].concat(xL(HH), xL(LH)) : HH
        }), []);
      return SH.length > 0 ? SH : HH && HH.length && (0, oH.v)(AH) && (0, oH.v)(rH) ? HH.slice(AH, rH + 1) : []
    };

    function fL(HH) {
      return "number" === HH ? [0, "auto"] : void 0
    }
    var lL = function(HH, BH, LH, AH) {
        var rH = HH.graphicalItems,
          SH = HH.tooltipAxis,
          hH = IL(BH, HH);
        return LH < 0 || !rH || !rH.length || LH >= hH.length ? null : rH.reduce((function(rH, tH) {
          var zH, CH, EH = null !== (zH = tH.props.data) && void 0 !== zH ? zH : BH;
          if (EH && HH.dataStartIndex + HH.dataEndIndex !== 0 && HH.dataEndIndex - HH.dataStartIndex >= LH && (EH = EH.slice(HH.dataStartIndex, HH.dataEndIndex + 1)), SH.dataKey && !SH.allowDuplicatedCategory) {
            var XH = void 0 === EH ? hH : EH;
            CH = (0, oH.f)(XH, SH.dataKey, AH)
          } else CH = EH && EH[LH] || hH[LH];
          return CH ? [].concat(xL(rH), [(0, mH.ab)(tH, CH)]) : rH
        }), [])
      },
      KL = function(HH, BH, LH, AH) {
        var rH = AH || {
            x: HH.chartX,
            y: HH.chartY
          },
          SH = function(HH, BH) {
            return "horizontal" === BH ? HH.x : "vertical" === BH ? HH.y : "centric" === BH ? HH.angle : HH.radius
          }(rH, LH),
          hH = HH.orderedTooltipTicks,
          tH = HH.tooltipAxis,
          zH = HH.tooltipTicks,
          CH = (0, mH.g)(SH, hH, zH, tH);
        if (CH >= 0 && zH) {
          var EH = zH[CH] && zH[CH].value,
            XH = lL(HH, BH, CH, EH),
            GH = function(HH, BH, LH, AH) {
              var rH = BH.find((function(HH) {
                return HH && HH.index === LH
              }));
              if (rH) {
                if ("horizontal" === HH) return {
                  x: rH.coordinate,
                  y: AH.y
                };
                if ("vertical" === HH) return {
                  x: AH.x,
                  y: rH.coordinate
                };
                if ("centric" === HH) {
                  var SH = rH.coordinate,
                    hH = AH.radius;
                  return UL(UL(UL({}, AH), (0, IB.g)(AH.cx, AH.cy, hH, SH)), {}, {
                    angle: SH,
                    radius: hH
                  })
                }
                var tH = rH.coordinate,
                  zH = AH.angle;
                return UL(UL(UL({}, AH), (0, IB.g)(AH.cx, AH.cy, tH, zH)), {}, {
                  angle: zH,
                  radius: tH
                })
              }
              return mL
            }(LH, hH, CH, rH);
          return {
            activeTooltipIndex: CH,
            activeLabel: EH,
            activePayload: XH,
            activeCoordinate: GH
          }
        }
        return null
      },
      cL = function(HH, BH) {
        var LH = BH.axes,
          AH = BH.graphicalItems,
          rH = BH.axisType,
          hH = BH.axisIdKey,
          tH = BH.stackGroups,
          zH = BH.dataStartIndex,
          EH = BH.dataEndIndex,
          XH = HH.layout,
          GH = HH.children,
          YH = HH.stackOffset,
          uH = (0, mH.hb)(XH, rH);
        return LH.reduce((function(BH, LH) {
          var QH, WH = void 0 !== LH.type.defaultProps ? UL(UL({}, LH.type.defaultProps), LH.props) : LH.props,
            MH = WH.type,
            xH = WH.dataKey,
            vH = WH.allowDataOverflow,
            PH = WH.allowDuplicatedCategory,
            TH = WH.scale,
            UH = WH.ticks,
            VH = WH.includeHidden,
            OH = WH[hH];
          if (BH[OH]) return BH;
          var bH, kH, IH, fH = IL(HH.data, {
              graphicalItems: AH.filter((function(HH) {
                var BH;
                return (hH in HH.props ? HH.props[hH] : null === (BH = HH.type.defaultProps) || void 0 === BH ? void 0 : BH[hH]) === OH
              })),
              dataStartIndex: zH,
              dataEndIndex: EH
            }),
            lH = fH.length;
          (function(HH, BH, LH) {
            if ("number" === LH && !0 === BH && Array.isArray(HH)) {
              var AH = null === HH || void 0 === HH ? void 0 : HH[0],
                rH = null === HH || void 0 === HH ? void 0 : HH[1];
              if (AH && rH && (0, oH.v)(AH) && (0, oH.v)(rH)) return !0
            }
            return !1
          })(WH.domain, vH, MH) && (bH = (0, mH.tb)(WH.domain, null, vH), !uH || "number" !== MH && "auto" === TH || (IH = (0, mH.G)(fH, xH, "category")));
          var KH = fL(MH);
          if (!bH || 0 === bH.length) {
            var cH, eH = null !== (cH = WH.domain) && void 0 !== cH ? cH : KH;
            if (xH) {
              if (bH = (0, mH.G)(fH, xH, MH), "category" === MH && uH) {
                var qH = (0, oH.o)(bH);
                PH && qH ? (kH = bH, bH = CH()(0, lH)) : PH || (bH = (0, mH.lb)(eH, bH, LH).reduce((function(HH, BH) {
                  return HH.indexOf(BH) >= 0 ? HH : [].concat(xL(HH), [BH])
                }), []))
              } else if ("category" === MH) bH = PH ? bH.filter((function(HH) {
                return "" !== HH && !SH()(HH)
              })) : (0, mH.lb)(eH, bH, LH).reduce((function(HH, BH) {
                return HH.indexOf(BH) >= 0 || "" === BH || SH()(BH) ? HH : [].concat(xL(HH), [BH])
              }), []);
              else if ("number" === MH) {
                var gH = (0, mH.ob)(fH, AH.filter((function(HH) {
                  var BH, LH, AH = hH in HH.props ? HH.props[hH] : null === (BH = HH.type.defaultProps) || void 0 === BH ? void 0 : BH[hH],
                    rH = "hide" in HH.props ? HH.props.hide : null === (LH = HH.type.defaultProps) || void 0 === LH ? void 0 : LH.hide;
                  return AH === OH && (VH || !rH)
                })), xH, rH, XH);
                gH && (bH = gH)
              }!uH || "number" !== MH && "auto" === TH || (IH = (0, mH.G)(fH, xH, "category"))
            } else bH = uH ? CH()(0, lH) : tH && tH[OH] && tH[OH].hasStack && "number" === MH ? "expand" === YH ? [0, 1] : (0, mH.M)(tH[OH].stackGroups, zH, EH) : (0, mH.J)(fH, AH.filter((function(HH) {
              var BH = hH in HH.props ? HH.props[hH] : HH.type.defaultProps[hH],
                LH = "hide" in HH.props ? HH.props.hide : HH.type.defaultProps.hide;
              return BH === OH && (VH || !LH)
            })), MH, XH, !0);
            if ("number" === MH) bH = oB(GH, bH, OH, rH, UH), eH && (bH = (0, mH.tb)(eH, bH, vH));
            else if ("category" === MH && eH) {
              var NH = eH;
              bH.every((function(HH) {
                return NH.indexOf(HH) >= 0
              })) && (bH = NH)
            }
          }
          return UL(UL({}, BH), {}, VL({}, OH, UL(UL({}, WH), {}, {
            axisType: rH,
            domain: bH,
            categoricalDomain: IH,
            duplicateDomain: kH,
            originalDomain: null !== (QH = WH.domain) && void 0 !== QH ? QH : KH,
            isCategorical: uH,
            layout: XH
          })))
        }), {})
      },
      eL = function(HH, BH) {
        var LH = BH.axisType,
          AH = void 0 === LH ? "xAxis" : LH,
          rH = BH.AxisComp,
          SH = BH.graphicalItems,
          hH = BH.stackGroups,
          tH = BH.dataStartIndex,
          zH = BH.dataEndIndex,
          EH = HH.children,
          GH = "".concat(AH, "Id"),
          YH = (0, OH.e)(EH, rH),
          uH = {};
        return YH && YH.length ? uH = cL(HH, {
          axes: YH,
          graphicalItems: SH,
          axisType: AH,
          axisIdKey: GH,
          stackGroups: hH,
          dataStartIndex: tH,
          dataEndIndex: zH
        }) : SH && SH.length && (uH = function(HH, BH) {
          var LH = BH.graphicalItems,
            AH = BH.Axis,
            rH = BH.axisType,
            SH = BH.axisIdKey,
            hH = BH.stackGroups,
            tH = BH.dataStartIndex,
            zH = BH.dataEndIndex,
            EH = HH.layout,
            GH = HH.children,
            YH = IL(HH.data, {
              graphicalItems: LH,
              dataStartIndex: tH,
              dataEndIndex: zH
            }),
            uH = YH.length,
            QH = (0, mH.hb)(EH, rH),
            WH = -1;
          return LH.reduce((function(HH, BH) {
            var MH, xH = (void 0 !== BH.type.defaultProps ? UL(UL({}, BH.type.defaultProps), BH.props) : BH.props)[SH],
              vH = fL("number");
            return HH[xH] ? HH : (WH++, QH ? MH = CH()(0, uH) : hH && hH[xH] && hH[xH].hasStack ? (MH = (0, mH.M)(hH[xH].stackGroups, tH, zH), MH = oB(GH, MH, xH, rH)) : (MH = (0, mH.tb)(vH, (0, mH.J)(YH, LH.filter((function(HH) {
              var BH, LH, AH = SH in HH.props ? HH.props[SH] : null === (BH = HH.type.defaultProps) || void 0 === BH ? void 0 : BH[SH],
                rH = "hide" in HH.props ? HH.props.hide : null === (LH = HH.type.defaultProps) || void 0 === LH ? void 0 : LH.hide;
              return AH === xH && !rH
            })), "number", EH), AH.defaultProps.allowDataOverflow), MH = oB(GH, MH, xH, rH)), UL(UL({}, HH), {}, VL({}, xH, UL(UL({
              axisType: rH
            }, AH.defaultProps), {}, {
              hide: !0,
              orientation: XH()(bL, "".concat(rH, ".").concat(WH % 2), null),
              domain: MH,
              originalDomain: vH,
              isCategorical: QH,
              layout: EH
            }))))
          }), {})
        }(HH, {
          Axis: rH,
          graphicalItems: SH,
          axisType: AH,
          axisIdKey: GH,
          stackGroups: hH,
          dataStartIndex: tH,
          dataEndIndex: zH
        })), uH
      },
      qL = function(HH) {
        var BH = HH.children,
          LH = HH.defaultShowTooltip,
          AH = (0, OH.f)(BH, aH),
          rH = 0,
          SH = 0;
        return HH.data && 0 !== HH.data.length && (SH = HH.data.length - 1), AH && AH.props && (AH.props.startIndex >= 0 && (rH = AH.props.startIndex), AH.props.endIndex >= 0 && (SH = AH.props.endIndex)), {
          chartX: 0,
          chartY: 0,
          dataStartIndex: rH,
          dataEndIndex: SH,
          activeTooltipIndex: -1,
          isTooltipActive: Boolean(LH)
        }
      },
      gL = function(HH) {
        return "horizontal" === HH ? {
          numericAxisName: "yAxis",
          cateAxisName: "xAxis"
        } : "vertical" === HH ? {
          numericAxisName: "xAxis",
          cateAxisName: "yAxis"
        } : "centric" === HH ? {
          numericAxisName: "radiusAxis",
          cateAxisName: "angleAxis"
        } : {
          numericAxisName: "angleAxis",
          cateAxisName: "radiusAxis"
        }
      },
      NL = function(HH, BH) {
        return "xAxis" === BH ? HH[BH].width : "yAxis" === BH ? HH[BH].height : void 0
      },
      RL = function(HH) {
        var BH = HH.chartName,
          LH = HH.GraphicalChild,
          rH = HH.defaultTooltipEventType,
          hH = void 0 === rH ? "axis" : rH,
          zH = HH.validateTooltipEventTypes,
          CH = void 0 === zH ? ["axis"] : zH,
          EH = HH.axisComponents,
          GH = HH.legendContent,
          uH = HH.formatAxisMap,
          bH = HH.defaultProps,
          kH = function(HH, BH) {
            var LH = BH.graphicalItems,
              AH = BH.stackGroups,
              rH = BH.offset,
              hH = BH.updateId,
              tH = BH.dataStartIndex,
              zH = BH.dataEndIndex,
              CH = HH.barSize,
              XH = HH.layout,
              GH = HH.barGap,
              YH = HH.barCategoryGap,
              uH = HH.maxBarSize,
              QH = gL(XH),
              WH = QH.numericAxisName,
              xH = QH.cateAxisName,
              vH = function(HH) {
                return !(!HH || !HH.length) && HH.some((function(HH) {
                  var BH = (0, OH.g)(HH && HH.type);
                  return BH && BH.indexOf("Bar") >= 0
                }))
              }(LH),
              PH = [];
            return LH.forEach((function(LH, QH) {
              var TH = IL(HH.data, {
                  graphicalItems: [LH],
                  dataStartIndex: tH,
                  dataEndIndex: zH
                }),
                UH = void 0 !== LH.type.defaultProps ? UL(UL({}, LH.type.defaultProps), LH.props) : LH.props,
                VH = UH.dataKey,
                bH = UH.maxBarSize,
                kH = UH["".concat(WH, "Id")],
                oH = UH["".concat(xH, "Id")],
                IH = EH.reduce((function(HH, LH) {
                  var AH = BH["".concat(LH.axisType, "Map")],
                    rH = UH["".concat(LH.axisType, "Id")];
                  AH && AH[rH] || "zAxis" === LH.axisType || (0, MH.c)(!1);
                  var SH = AH[rH];
                  return UL(UL({}, HH), {}, VL(VL({}, LH.axisType, SH), "".concat(LH.axisType, "Ticks"), (0, mH.W)(SH)))
                }), {}),
                fH = IH[xH],
                lH = IH["".concat(xH, "Ticks")],
                KH = AH && AH[kH] && AH[kH].hasStack && (0, mH.V)(LH, AH[kH].stackGroups),
                cH = (0, OH.g)(LH.type).indexOf("Bar") >= 0,
                eH = (0, mH.n)(fH, lH),
                qH = [],
                gH = vH && (0, mH.t)({
                  barSize: CH,
                  stackGroups: AH,
                  totalSize: NL(IH, xH)
                });
              if (cH) {
                var NH, RH, jH = SH()(bH) ? uH : bH,
                  nH = null !== (NH = null !== (RH = (0, mH.n)(fH, lH, !0)) && void 0 !== RH ? RH : jH) && void 0 !== NH ? NH : 0;
                qH = (0, mH.p)({
                  barGap: GH,
                  barCategoryGap: YH,
                  bandSize: nH !== eH ? nH : eH,
                  sizeList: gH[oH],
                  maxBarSize: jH
                }), nH !== eH && (qH = qH.map((function(HH) {
                  return UL(UL({}, HH), {}, {
                    position: UL(UL({}, HH.position), {}, {
                      offset: HH.position.offset - nH / 2
                    })
                  })
                })))
              }
              var FH = LH && LH.type && LH.type.getComposedData;
              FH && PH.push({
                props: UL(UL({}, FH(UL(UL({}, IH), {}, {
                  displayedData: TH,
                  props: HH,
                  dataKey: VH,
                  item: LH,
                  bandSize: eH,
                  barPosition: qH,
                  offset: rH,
                  stackedData: KH,
                  layout: XH,
                  dataStartIndex: tH,
                  dataEndIndex: zH
                }))), {}, VL(VL(VL({
                  key: LH.key || "item-".concat(QH)
                }, WH, IH[WH]), xH, IH[xH]), "animationId", hH)),
                childIndex: (0, OH.q)(LH, HH.children),
                item: LH
              })
            })), PH
          },
          IH = function(HH, AH) {
            var rH = HH.props,
              SH = HH.dataStartIndex,
              hH = HH.dataEndIndex,
              tH = HH.updateId;
            if (!(0, OH.v)({
                props: rH
              })) return null;
            var zH = rH.children,
              CH = rH.layout,
              GH = rH.stackOffset,
              QH = rH.data,
              WH = rH.reverseStackOrder,
              MH = gL(CH),
              xH = MH.numericAxisName,
              vH = MH.cateAxisName,
              PH = (0, OH.e)(zH, LH),
              UH = (0, mH.T)(QH, PH, "".concat(xH, "Id"), "".concat(vH, "Id"), GH, WH),
              VH = EH.reduce((function(HH, BH) {
                var LH = "".concat(BH.axisType, "Map");
                return UL(UL({}, HH), {}, VL({}, LH, eL(rH, UL(UL({}, BH), {}, {
                  graphicalItems: PH,
                  stackGroups: BH.axisType === xH && UH,
                  dataStartIndex: SH,
                  dataEndIndex: hH
                }))))
              }), {}),
              bH = function(HH, BH) {
                var LH = HH.props,
                  AH = HH.graphicalItems,
                  rH = HH.xAxisMap,
                  SH = void 0 === rH ? {} : rH,
                  hH = HH.yAxisMap,
                  tH = void 0 === hH ? {} : hH,
                  zH = LH.width,
                  CH = LH.height,
                  EH = LH.children,
                  GH = LH.margin || {},
                  YH = (0, OH.f)(EH, aH),
                  uH = (0, OH.f)(EH, TH.b),
                  QH = Object.keys(tH).reduce((function(HH, BH) {
                    var LH = tH[BH],
                      AH = LH.orientation;
                    return LH.mirror || LH.hide ? HH : UL(UL({}, HH), {}, VL({}, AH, HH[AH] + LH.width))
                  }), {
                    left: GH.left || 0,
                    right: GH.right || 0
                  }),
                  WH = Object.keys(SH).reduce((function(HH, BH) {
                    var LH = SH[BH],
                      AH = LH.orientation;
                    return LH.mirror || LH.hide ? HH : UL(UL({}, HH), {}, VL({}, AH, XH()(HH, "".concat(AH)) + LH.height))
                  }), {
                    top: GH.top || 0,
                    bottom: GH.bottom || 0
                  }),
                  MH = UL(UL({}, WH), QH),
                  xH = MH.bottom;
                YH && (MH.bottom += YH.props.height || aH.defaultProps.height), uH && BH && (MH = (0, mH.e)(MH, AH, LH, BH));
                var vH = zH - MH.left - MH.right,
                  PH = CH - MH.top - MH.bottom;
                return UL(UL({
                  brushBottom: xH
                }, MH), {}, {
                  width: Math.max(vH, 0),
                  height: Math.max(PH, 0)
                })
              }(UL(UL({}, VH), {}, {
                props: rH,
                graphicalItems: PH
              }), null === AH || void 0 === AH ? void 0 : AH.legendBBox);
            Object.keys(VH).forEach((function(HH) {
              VH[HH] = uH(rH, VH[HH], bH, HH.replace("Map", ""), BH)
            }));
            var IH = function(HH) {
                var BH = (0, oH.h)(HH),
                  LH = (0, mH.W)(BH, !1, !0);
                return {
                  tooltipTicks: LH,
                  orderedTooltipTicks: YH()(LH, (function(HH) {
                    return HH.coordinate
                  })),
                  tooltipAxis: BH,
                  tooltipAxisBandSize: (0, mH.n)(BH, LH)
                }
              }(VH["".concat(vH, "Map")]),
              fH = kH(rH, UL(UL({}, VH), {}, {
                dataStartIndex: SH,
                dataEndIndex: hH,
                updateId: tH,
                graphicalItems: PH,
                stackGroups: UH,
                offset: bH
              }));
            return UL(UL({
              formattedGraphicalItems: fH,
              graphicalItems: PH,
              offset: bH,
              stackGroups: UH
            }, IH), VH)
          },
          fH = function(HH) {
            function LH(HH) {
              var rH, hH, zH;
              return function(HH, BH) {
                if (!(HH instanceof BH)) throw new TypeError("Cannot call a class as a function")
              }(this, LH), VL(zH = uL(this, LH, [HH]), "eventEmitterSymbol", Symbol("rechartsEventEmitter")), VL(zH, "accessibilityManager", new jB), VL(zH, "handleLegendBBoxUpdate", (function(HH) {
                if (HH) {
                  var BH = zH.state,
                    LH = BH.dataStartIndex,
                    AH = BH.dataEndIndex,
                    rH = BH.updateId;
                  zH.setState(UL({
                    legendBBox: HH
                  }, IH({
                    props: zH.props,
                    dataStartIndex: LH,
                    dataEndIndex: AH,
                    updateId: rH
                  }, UL(UL({}, zH.state), {}, {
                    legendBBox: HH
                  }))))
                }
              })), VL(zH, "handleReceiveSyncEvent", (function(HH, BH, LH) {
                if (zH.props.syncId === HH) {
                  if (LH === zH.eventEmitterSymbol && "function" !== typeof zH.props.syncMethod) return;
                  zH.applySyncEvent(BH)
                }
              })), VL(zH, "handleBrushChange", (function(HH) {
                var BH = HH.startIndex,
                  LH = HH.endIndex;
                if (BH !== zH.state.dataStartIndex || LH !== zH.state.dataEndIndex) {
                  var AH = zH.state.updateId;
                  zH.setState((function() {
                    return UL({
                      dataStartIndex: BH,
                      dataEndIndex: LH
                    }, IH({
                      props: zH.props,
                      dataStartIndex: BH,
                      dataEndIndex: LH,
                      updateId: AH
                    }, zH.state))
                  })), zH.triggerSyncEvent({
                    dataStartIndex: BH,
                    dataEndIndex: LH
                  })
                }
              })), VL(zH, "handleMouseEnter", (function(HH) {
                var BH = zH.getMouseInfo(HH);
                if (BH) {
                  var LH = UL(UL({}, BH), {}, {
                    isTooltipActive: !0
                  });
                  zH.setState(LH), zH.triggerSyncEvent(LH);
                  var AH = zH.props.onMouseEnter;
                  tH()(AH) && AH(LH, HH)
                }
              })), VL(zH, "triggeredAfterMouseMove", (function(HH) {
                var BH = zH.getMouseInfo(HH),
                  LH = BH ? UL(UL({}, BH), {}, {
                    isTooltipActive: !0
                  }) : {
                    isTooltipActive: !1
                  };
                zH.setState(LH), zH.triggerSyncEvent(LH);
                var AH = zH.props.onMouseMove;
                tH()(AH) && AH(LH, HH)
              })), VL(zH, "handleItemMouseEnter", (function(HH) {
                zH.setState((function() {
                  return {
                    isTooltipActive: !0,
                    activeItem: HH,
                    activePayload: HH.tooltipPayload,
                    activeCoordinate: HH.tooltipPosition || {
                      x: HH.cx,
                      y: HH.cy
                    }
                  }
                }))
              })), VL(zH, "handleItemMouseLeave", (function() {
                zH.setState((function() {
                  return {
                    isTooltipActive: !1
                  }
                }))
              })), VL(zH, "handleMouseMove", (function(HH) {
                HH.persist(), zH.throttleTriggeredAfterMouseMove(HH)
              })), VL(zH, "handleMouseLeave", (function(HH) {
                zH.throttleTriggeredAfterMouseMove.cancel();
                var BH = {
                  isTooltipActive: !1
                };
                zH.setState(BH), zH.triggerSyncEvent(BH);
                var LH = zH.props.onMouseLeave;
                tH()(LH) && LH(BH, HH)
              })), VL(zH, "handleOuterEvent", (function(HH) {
                var BH, LH = (0, OH.h)(HH),
                  AH = XH()(zH.props, "".concat(LH));
                LH && tH()(AH) && AH(null !== (BH = /.*touch.*/i.test(LH) ? zH.getMouseInfo(HH.changedTouches[0]) : zH.getMouseInfo(HH)) && void 0 !== BH ? BH : {}, HH)
              })), VL(zH, "handleClick", (function(HH) {
                var BH = zH.getMouseInfo(HH);
                if (BH) {
                  var LH = UL(UL({}, BH), {}, {
                    isTooltipActive: !0
                  });
                  zH.setState(LH), zH.triggerSyncEvent(LH);
                  var AH = zH.props.onClick;
                  tH()(AH) && AH(LH, HH)
                }
              })), VL(zH, "handleMouseDown", (function(HH) {
                var BH = zH.props.onMouseDown;
                tH()(BH) && BH(zH.getMouseInfo(HH), HH)
              })), VL(zH, "handleMouseUp", (function(HH) {
                var BH = zH.props.onMouseUp;
                tH()(BH) && BH(zH.getMouseInfo(HH), HH)
              })), VL(zH, "handleTouchMove", (function(HH) {
                null != HH.changedTouches && HH.changedTouches.length > 0 && zH.throttleTriggeredAfterMouseMove(HH.changedTouches[0])
              })), VL(zH, "handleTouchStart", (function(HH) {
                null != HH.changedTouches && HH.changedTouches.length > 0 && zH.handleMouseDown(HH.changedTouches[0])
              })), VL(zH, "handleTouchEnd", (function(HH) {
                null != HH.changedTouches && HH.changedTouches.length > 0 && zH.handleMouseUp(HH.changedTouches[0])
              })), VL(zH, "handleDoubleClick", (function(HH) {
                var BH = zH.props.onDoubleClick;
                tH()(BH) && BH(zH.getMouseInfo(HH), HH)
              })), VL(zH, "handleContextMenu", (function(HH) {
                var BH = zH.props.onContextMenu;
                tH()(BH) && BH(zH.getMouseInfo(HH), HH)
              })), VL(zH, "triggerSyncEvent", (function(HH) {
                void 0 !== zH.props.syncId && KB.emit(cB, zH.props.syncId, HH, zH.eventEmitterSymbol)
              })), VL(zH, "applySyncEvent", (function(HH) {
                var BH = zH.props,
                  LH = BH.layout,
                  AH = BH.syncMethod,
                  rH = zH.state.updateId,
                  SH = HH.dataStartIndex,
                  hH = HH.dataEndIndex;
                if (void 0 !== HH.dataStartIndex || void 0 !== HH.dataEndIndex) zH.setState(UL({
                  dataStartIndex: SH,
                  dataEndIndex: hH
                }, IH({
                  props: zH.props,
                  dataStartIndex: SH,
                  dataEndIndex: hH,
                  updateId: rH
                }, zH.state)));
                else if (void 0 !== HH.activeTooltipIndex) {
                  var tH = HH.chartX,
                    CH = HH.chartY,
                    EH = HH.activeTooltipIndex,
                    XH = zH.state,
                    GH = XH.offset,
                    YH = XH.tooltipTicks;
                  if (!GH) return;
                  if ("function" === typeof AH) EH = AH(YH, HH);
                  else if ("value" === AH) {
                    EH = -1;
                    for (var uH = 0; uH < YH.length; uH++)
                      if (YH[uH].value === HH.activeLabel) {
                        EH = uH;
                        break
                      }
                  }
                  var QH = UL(UL({}, GH), {}, {
                      x: GH.left,
                      y: GH.top
                    }),
                    WH = Math.min(tH, QH.x + QH.width),
                    MH = Math.min(CH, QH.y + QH.height),
                    xH = YH[EH] && YH[EH].value,
                    vH = lL(zH.state, zH.props.data, EH),
                    PH = YH[EH] ? {
                      x: "horizontal" === LH ? YH[EH].coordinate : WH,
                      y: "horizontal" === LH ? MH : YH[EH].coordinate
                    } : mL;
                  zH.setState(UL(UL({}, HH), {}, {
                    activeLabel: xH,
                    activeCoordinate: PH,
                    activePayload: vH,
                    activeTooltipIndex: EH
                  }))
                } else zH.setState(HH)
              })), VL(zH, "renderCursor", (function(HH) {
                var LH, rH = zH.state,
                  SH = rH.isTooltipActive,
                  hH = rH.activeCoordinate,
                  tH = rH.activePayload,
                  CH = rH.offset,
                  EH = rH.activeTooltipIndex,
                  XH = rH.tooltipAxisBandSize,
                  GH = zH.getTooltipEventType(),
                  YH = null !== (LH = HH.props.active) && void 0 !== LH ? LH : SH,
                  uH = zH.props.layout,
                  QH = HH.key || "_recharts-cursor";
                return AH.createElement(SL, {
                  key: QH,
                  activeCoordinate: hH,
                  activePayload: tH,
                  activeTooltipIndex: EH,
                  chartName: BH,
                  element: HH,
                  isActive: YH,
                  layout: uH,
                  offset: CH,
                  tooltipAxisBandSize: XH,
                  tooltipEventType: GH
                })
              })), VL(zH, "renderPolarAxis", (function(HH, BH, LH) {
                var rH = XH()(HH, "type.axisType"),
                  SH = XH()(zH.state, "".concat(rH, "Map")),
                  hH = HH.type.defaultProps,
                  tH = void 0 !== hH ? UL(UL({}, hH), HH.props) : HH.props,
                  CH = SH && SH[tH["".concat(rH, "Id")]];
                return (0, AH.cloneElement)(HH, UL(UL({}, CH), {}, {
                  className: (0, WH.e)(rH, CH.className),
                  key: HH.key || "".concat(BH, "-").concat(LH),
                  ticks: (0, mH.W)(CH, !0)
                }))
              })), VL(zH, "renderPolarGrid", (function(HH) {
                var BH = HH.props,
                  LH = BH.radialLines,
                  rH = BH.polarAngles,
                  SH = BH.polarRadius,
                  hH = zH.state,
                  tH = hH.radiusAxisMap,
                  CH = hH.angleAxisMap,
                  EH = (0, oH.h)(tH),
                  XH = (0, oH.h)(CH),
                  GH = XH.cx,
                  YH = XH.cy,
                  uH = XH.innerRadius,
                  QH = XH.outerRadius;
                return (0, AH.cloneElement)(HH, {
                  polarAngles: Array.isArray(rH) ? rH : (0, mH.W)(XH, !0).map((function(HH) {
                    return HH.coordinate
                  })),
                  polarRadius: Array.isArray(SH) ? SH : (0, mH.W)(EH, !0).map((function(HH) {
                    return HH.coordinate
                  })),
                  cx: GH,
                  cy: YH,
                  innerRadius: uH,
                  outerRadius: QH,
                  key: HH.key || "polar-grid",
                  radialLines: LH
                })
              })), VL(zH, "renderLegend", (function() {
                var HH = zH.state.formattedGraphicalItems,
                  BH = zH.props,
                  LH = BH.children,
                  rH = BH.width,
                  SH = BH.height,
                  hH = zH.props.margin || {},
                  tH = rH - (hH.left || 0) - (hH.right || 0),
                  CH = (0, JH.b)({
                    children: LH,
                    formattedGraphicalItems: HH,
                    legendWidth: tH,
                    legendContent: GH
                  });
                if (!CH) return null;
                var EH = CH.item,
                  XH = GL(CH, tL);
                return (0, AH.cloneElement)(EH, UL(UL({}, XH), {}, {
                  chartWidth: rH,
                  chartHeight: SH,
                  margin: hH,
                  onBBoxUpdate: zH.handleLegendBBoxUpdate
                }))
              })), VL(zH, "renderTooltip", (function() {
                var HH, BH = zH.props,
                  LH = BH.children,
                  rH = BH.accessibilityLayer,
                  SH = (0, OH.f)(LH, PH.c);
                if (!SH) return null;
                var hH = zH.state,
                  tH = hH.isTooltipActive,
                  CH = hH.activeCoordinate,
                  EH = hH.activePayload,
                  XH = hH.activeLabel,
                  GH = hH.offset,
                  YH = null !== (HH = SH.props.active) && void 0 !== HH ? HH : tH;
                return (0, AH.cloneElement)(SH, {
                  viewBox: UL(UL({}, GH), {}, {
                    x: GH.left,
                    y: GH.top
                  }),
                  active: YH,
                  label: XH,
                  payload: YH ? EH : [],
                  coordinate: CH,
                  accessibilityLayer: rH
                })
              })), VL(zH, "renderBrush", (function(HH) {
                var BH = zH.props,
                  LH = BH.margin,
                  rH = BH.data,
                  SH = zH.state,
                  hH = SH.offset,
                  tH = SH.dataStartIndex,
                  CH = SH.dataEndIndex,
                  EH = SH.updateId;
                return (0, AH.cloneElement)(HH, {
                  key: HH.key || "_recharts-brush",
                  onChange: (0, mH.k)(zH.handleBrushChange, HH.props.onChange),
                  data: rH,
                  x: (0, oH.v)(HH.props.x) ? HH.props.x : hH.left,
                  y: (0, oH.v)(HH.props.y) ? HH.props.y : hH.top + hH.height + hH.brushBottom - (LH.bottom || 0),
                  width: (0, oH.v)(HH.props.width) ? HH.props.width : hH.width,
                  startIndex: tH,
                  endIndex: CH,
                  updateId: "brush-".concat(EH)
                })
              })), VL(zH, "renderReferenceElement", (function(HH, BH, LH) {
                if (!HH) return null;
                var rH = zH.clipPathId,
                  SH = zH.state,
                  hH = SH.xAxisMap,
                  tH = SH.yAxisMap,
                  CH = SH.offset,
                  EH = HH.type.defaultProps || {},
                  XH = HH.props,
                  GH = XH.xAxisId,
                  YH = void 0 === GH ? EH.xAxisId : GH,
                  uH = XH.yAxisId,
                  QH = void 0 === uH ? EH.yAxisId : uH;
                return (0, AH.cloneElement)(HH, {
                  key: HH.key || "".concat(BH, "-").concat(LH),
                  xAxis: hH[YH],
                  yAxis: tH[QH],
                  viewBox: {
                    x: CH.left,
                    y: CH.top,
                    width: CH.width,
                    height: CH.height
                  },
                  clipPathId: rH
                })
              })), VL(zH, "renderActivePoints", (function(HH) {
                var BH = HH.item,
                  AH = HH.activePoint,
                  rH = HH.basePoint,
                  SH = HH.childIndex,
                  hH = HH.isRange,
                  tH = [],
                  zH = BH.props.key,
                  CH = void 0 !== BH.item.type.defaultProps ? UL(UL({}, BH.item.type.defaultProps), BH.item.props) : BH.item.props,
                  EH = CH.activeDot,
                  XH = UL(UL({
                    index: SH,
                    dataKey: CH.dataKey,
                    cx: AH.x,
                    cy: AH.y,
                    r: 4,
                    fill: (0, mH.Q)(BH.item),
                    strokeWidth: 2,
                    stroke: "#fff",
                    payload: AH.payload,
                    value: AH.value
                  }, (0, OH.c)(EH, !1)), (0, eB.m)(EH));
                return tH.push(LH.renderActiveDot(EH, XH, "".concat(zH, "-activePoint-").concat(SH))), rH ? tH.push(LH.renderActiveDot(EH, UL(UL({}, XH), {}, {
                  cx: rH.x,
                  cy: rH.y
                }), "".concat(zH, "-basePoint-").concat(SH))) : hH && tH.push(null), tH
              })), VL(zH, "renderGraphicChild", (function(HH, BH, LH) {
                var rH = zH.filterFormatItem(HH, BH, LH);
                if (!rH) return null;
                var hH = zH.getTooltipEventType(),
                  tH = zH.state,
                  CH = tH.isTooltipActive,
                  EH = tH.tooltipAxis,
                  XH = tH.activeTooltipIndex,
                  GH = tH.activeLabel,
                  YH = zH.props.children,
                  uH = (0, OH.f)(YH, PH.c),
                  QH = rH.props,
                  WH = QH.points,
                  MH = QH.isRange,
                  xH = QH.baseLine,
                  vH = void 0 !== rH.item.type.defaultProps ? UL(UL({}, rH.item.type.defaultProps), rH.item.props) : rH.item.props,
                  TH = vH.activeDot,
                  UH = vH.hide,
                  VH = vH.activeBar,
                  bH = vH.activeShape,
                  kH = Boolean(!UH && CH && uH && (TH || VH || bH)),
                  IH = {};
                "axis" !== hH && uH && "click" === uH.props.trigger ? IH = {
                  onClick: (0, mH.k)(zH.handleItemMouseEnter, HH.props.onClick)
                } : "axis" !== hH && (IH = {
                  onMouseLeave: (0, mH.k)(zH.handleItemMouseLeave, HH.props.onMouseLeave),
                  onMouseEnter: (0, mH.k)(zH.handleItemMouseEnter, HH.props.onMouseEnter)
                });
                var fH = (0, AH.cloneElement)(HH, UL(UL({}, rH.props), IH));
                if (kH) {
                  if (!(XH >= 0)) {
                    var lH, KH = (null !== (lH = zH.getItemByXY(zH.state.activeCoordinate)) && void 0 !== lH ? lH : {
                        graphicalItem: fH
                      }).graphicalItem,
                      cH = KH.item,
                      eH = void 0 === cH ? HH : cH,
                      qH = KH.childIndex,
                      gH = UL(UL(UL({}, rH.props), IH), {}, {
                        activeIndex: qH
                      });
                    return [(0, AH.cloneElement)(eH, gH), null, null]
                  }
                  var NH, RH;
                  if (EH.dataKey && !EH.allowDuplicatedCategory) {
                    var jH = "function" === typeof EH.dataKey ? function(HH) {
                      return "function" === typeof EH.dataKey ? EH.dataKey(HH.payload) : null
                    } : "payload.".concat(EH.dataKey.toString());
                    NH = (0, oH.f)(WH, jH, GH), RH = MH && xH && (0, oH.f)(xH, jH, GH)
                  } else NH = null === WH || void 0 === WH ? void 0 : WH[XH], RH = MH && xH && xH[XH];
                  if (bH || VH) {
                    var nH = void 0 !== HH.props.activeIndex ? HH.props.activeIndex : XH;
                    return [(0, AH.cloneElement)(HH, UL(UL(UL({}, rH.props), IH), {}, {
                      activeIndex: nH
                    })), null, null]
                  }
                  if (!SH()(NH)) return [fH].concat(xL(zH.renderActivePoints({
                    item: rH,
                    activePoint: NH,
                    basePoint: RH,
                    childIndex: XH,
                    isRange: MH
                  })))
                }
                return MH ? [fH, null, null] : [fH, null]
              })), VL(zH, "renderCustomized", (function(HH, BH, LH) {
                return (0, AH.cloneElement)(HH, UL(UL({
                  key: "recharts-customized-".concat(LH)
                }, zH.props), zH.state))
              })), VL(zH, "renderMap", {
                CartesianGrid: {
                  handler: oL,
                  once: !0
                },
                ReferenceArea: {
                  handler: zH.renderReferenceElement
                },
                ReferenceLine: {
                  handler: oL
                },
                ReferenceDot: {
                  handler: zH.renderReferenceElement
                },
                XAxis: {
                  handler: oL
                },
                YAxis: {
                  handler: oL
                },
                Brush: {
                  handler: zH.renderBrush,
                  once: !0
                },
                Bar: {
                  handler: zH.renderGraphicChild
                },
                Line: {
                  handler: zH.renderGraphicChild
                },
                Area: {
                  handler: zH.renderGraphicChild
                },
                Radar: {
                  handler: zH.renderGraphicChild
                },
                RadialBar: {
                  handler: zH.renderGraphicChild
                },
                Scatter: {
                  handler: zH.renderGraphicChild
                },
                Pie: {
                  handler: zH.renderGraphicChild
                },
                Funnel: {
                  handler: zH.renderGraphicChild
                },
                Tooltip: {
                  handler: zH.renderCursor,
                  once: !0
                },
                PolarGrid: {
                  handler: zH.renderPolarGrid,
                  once: !0
                },
                PolarAngleAxis: {
                  handler: zH.renderPolarAxis
                },
                PolarRadiusAxis: {
                  handler: zH.renderPolarAxis
                },
                Customized: {
                  handler: zH.renderCustomized
                }
              }), zH.clipPathId = "".concat(null !== (rH = HH.id) && void 0 !== rH ? rH : (0, oH.D)("recharts"), "-clip"), zH.throttleTriggeredAfterMouseMove = QH()(zH.triggeredAfterMouseMove, null !== (hH = HH.throttleDelay) && void 0 !== hH ? hH : 1e3 / 60), zH.state = {}, zH
            }
            return function(HH, BH) {
              if ("function" !== typeof BH && null !== BH) throw new TypeError("Super expression must either be null or a function");
              HH.prototype = Object.create(BH && BH.prototype, {
                constructor: {
                  value: HH,
                  writable: !0,
                  configurable: !0
                }
              }), Object.defineProperty(HH, "prototype", {
                writable: !1
              }), BH && ML(HH, BH)
            }(LH, HH), rH = LH, zH = [{
              key: "componentDidMount",
              value: function() {
                var HH, BH;
                this.addListener(), this.accessibilityManager.setDetails({
                  container: this.container,
                  offset: {
                    left: null !== (HH = this.props.margin.left) && void 0 !== HH ? HH : 0,
                    top: null !== (BH = this.props.margin.top) && void 0 !== BH ? BH : 0
                  },
                  coordinateList: this.state.tooltipTicks,
                  mouseHandlerCallback: this.triggeredAfterMouseMove,
                  layout: this.props.layout
                }), this.displayDefaultTooltip()
              }
            }, {
              key: "displayDefaultTooltip",
              value: function() {
                var HH = this.props,
                  BH = HH.children,
                  LH = HH.data,
                  AH = HH.height,
                  rH = HH.layout,
                  SH = (0, OH.f)(BH, PH.c);
                if (SH) {
                  var hH = SH.props.defaultIndex;
                  if (!("number" !== typeof hH || hH < 0 || hH > this.state.tooltipTicks.length - 1)) {
                    var tH = this.state.tooltipTicks[hH] && this.state.tooltipTicks[hH].value,
                      zH = lL(this.state, LH, hH, tH),
                      CH = this.state.tooltipTicks[hH].coordinate,
                      EH = (this.state.offset.top + AH) / 2,
                      XH = "horizontal" === rH ? {
                        x: CH,
                        y: EH
                      } : {
                        y: CH,
                        x: EH
                      },
                      GH = this.state.formattedGraphicalItems.find((function(HH) {
                        return "Scatter" === HH.item.type.name
                      }));
                    GH && (XH = UL(UL({}, XH), GH.props.points[hH].tooltipPosition), zH = GH.props.points[hH].tooltipPayload);
                    var YH = {
                      activeTooltipIndex: hH,
                      isTooltipActive: !0,
                      activeLabel: tH,
                      activePayload: zH,
                      activeCoordinate: XH
                    };
                    this.setState(YH), this.renderCursor(SH), this.accessibilityManager.setIndex(hH)
                  }
                }
              }
            }, {
              key: "getSnapshotBeforeUpdate",
              value: function(HH, BH) {
                return this.props.accessibilityLayer ? (this.state.tooltipTicks !== BH.tooltipTicks && this.accessibilityManager.setDetails({
                  coordinateList: this.state.tooltipTicks
                }), this.props.layout !== HH.layout && this.accessibilityManager.setDetails({
                  layout: this.props.layout
                }), this.props.margin !== HH.margin && this.accessibilityManager.setDetails({
                  offset: {
                    left: null !== (LH = this.props.margin.left) && void 0 !== LH ? LH : 0,
                    top: null !== (AH = this.props.margin.top) && void 0 !== AH ? AH : 0
                  }
                }), null) : null;
                var LH, AH
              }
            }, {
              key: "componentDidUpdate",
              value: function(HH) {
                (0, OH.o)([(0, OH.f)(HH.children, PH.c)], [(0, OH.f)(this.props.children, PH.c)]) || this.displayDefaultTooltip()
              }
            }, {
              key: "componentWillUnmount",
              value: function() {
                this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel()
              }
            }, {
              key: "getTooltipEventType",
              value: function() {
                var HH = (0, OH.f)(this.props.children, PH.c);
                if (HH && "boolean" === typeof HH.props.shared) {
                  var BH = HH.props.shared ? "axis" : "item";
                  return CH.indexOf(BH) >= 0 ? BH : hH
                }
                return hH
              }
            }, {
              key: "getMouseInfo",
              value: function(HH) {
                if (!this.container) return null;
                var BH = this.container,
                  LH = BH.getBoundingClientRect(),
                  AH = (0, sH.b)(LH),
                  rH = {
                    chartX: Math.round(HH.pageX - AH.left),
                    chartY: Math.round(HH.pageY - AH.top)
                  },
                  SH = LH.width / BH.offsetWidth || 1,
                  hH = this.inRange(rH.chartX, rH.chartY, SH);
                if (!hH) return null;
                var tH = this.state,
                  zH = tH.xAxisMap,
                  CH = tH.yAxisMap,
                  EH = this.getTooltipEventType(),
                  XH = KL(this.state, this.props.data, this.props.layout, hH);
                if ("axis" !== EH && zH && CH) {
                  var GH = (0, oH.h)(zH).scale,
                    YH = (0, oH.h)(CH).scale,
                    uH = GH && GH.invert ? GH.invert(rH.chartX) : null,
                    QH = YH && YH.invert ? YH.invert(rH.chartY) : null;
                  return UL(UL({}, rH), {}, {
                    xValue: uH,
                    yValue: QH
                  }, XH)
                }
                return XH ? UL(UL({}, rH), XH) : null
              }
            }, {
              key: "inRange",
              value: function(HH, BH) {
                var LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                  AH = this.props.layout,
                  rH = HH / LH,
                  SH = BH / LH;
                if ("horizontal" === AH || "vertical" === AH) {
                  var hH = this.state.offset;
                  return rH >= hH.left && rH <= hH.left + hH.width && SH >= hH.top && SH <= hH.top + hH.height ? {
                    x: rH,
                    y: SH
                  } : null
                }
                var tH = this.state,
                  zH = tH.angleAxisMap,
                  CH = tH.radiusAxisMap;
                if (zH && CH) {
                  var EH = (0, oH.h)(zH);
                  return (0, IB.f)({
                    x: rH,
                    y: SH
                  }, EH)
                }
                return null
              }
            }, {
              key: "parseEventsOfWrapper",
              value: function() {
                var HH = this.props.children,
                  BH = this.getTooltipEventType(),
                  LH = (0, OH.f)(HH, PH.c),
                  AH = {};
                return LH && "axis" === BH && (AH = "click" === LH.props.trigger ? {
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
                }), UL(UL({}, (0, eB.m)(this.props, this.handleOuterEvent)), AH)
              }
            }, {
              key: "addListener",
              value: function() {
                KB.on(cB, this.handleReceiveSyncEvent)
              }
            }, {
              key: "removeListener",
              value: function() {
                KB.removeListener(cB, this.handleReceiveSyncEvent)
              }
            }, {
              key: "filterFormatItem",
              value: function(HH, BH, LH) {
                for (var AH = this.state.formattedGraphicalItems, rH = 0, SH = AH.length; rH < SH; rH++) {
                  var hH = AH[rH];
                  if (hH.item === HH || hH.props.key === HH.key || BH === (0, OH.g)(hH.item.type) && LH === hH.childIndex) return hH
                }
                return null
              }
            }, {
              key: "renderClipPath",
              value: function() {
                var HH = this.clipPathId,
                  BH = this.state.offset,
                  LH = BH.left,
                  rH = BH.top,
                  SH = BH.height,
                  hH = BH.width;
                return AH.createElement("defs", null, AH.createElement("clipPath", {
                  id: HH
                }, AH.createElement("rect", {
                  x: LH,
                  y: rH,
                  height: SH,
                  width: hH
                })))
              }
            }, {
              key: "getXScales",
              value: function() {
                var HH = this.state.xAxisMap;
                return HH ? Object.entries(HH).reduce((function(HH, BH) {
                  var LH = XL(BH, 2),
                    AH = LH[0],
                    rH = LH[1];
                  return UL(UL({}, HH), {}, VL({}, AH, rH.scale))
                }), {}) : null
              }
            }, {
              key: "getYScales",
              value: function() {
                var HH = this.state.yAxisMap;
                return HH ? Object.entries(HH).reduce((function(HH, BH) {
                  var LH = XL(BH, 2),
                    AH = LH[0],
                    rH = LH[1];
                  return UL(UL({}, HH), {}, VL({}, AH, rH.scale))
                }), {}) : null
              }
            }, {
              key: "getXScaleByAxisId",
              value: function(HH) {
                var BH;
                return null === (BH = this.state.xAxisMap) || void 0 === BH || null === (BH = BH[HH]) || void 0 === BH ? void 0 : BH.scale
              }
            }, {
              key: "getYScaleByAxisId",
              value: function(HH) {
                var BH;
                return null === (BH = this.state.yAxisMap) || void 0 === BH || null === (BH = BH[HH]) || void 0 === BH ? void 0 : BH.scale
              }
            }, {
              key: "getItemByXY",
              value: function(HH) {
                var BH = this.state,
                  LH = BH.formattedGraphicalItems,
                  AH = BH.activeItem;
                if (LH && LH.length)
                  for (var rH = 0, SH = LH.length; rH < SH; rH++) {
                    var hH = LH[rH],
                      tH = hH.props,
                      zH = hH.item,
                      CH = void 0 !== zH.type.defaultProps ? UL(UL({}, zH.type.defaultProps), zH.props) : zH.props,
                      EH = (0, OH.g)(zH.type);
                    if ("Bar" === EH) {
                      var XH = (tH.data || []).find((function(BH) {
                        return (0, VH.f)(HH, BH)
                      }));
                      if (XH) return {
                        graphicalItem: hH,
                        payload: XH
                      }
                    } else if ("RadialBar" === EH) {
                      var GH = (tH.data || []).find((function(BH) {
                        return (0, IB.f)(HH, BH)
                      }));
                      if (GH) return {
                        graphicalItem: hH,
                        payload: GH
                      }
                    } else if ((0, nB.i)(hH, AH) || (0, nB.m)(hH, AH) || (0, nB.o)(hH, AH)) {
                      var YH = (0, nB.g)({
                          graphicalItem: hH,
                          activeTooltipItem: AH,
                          itemData: CH.data
                        }),
                        uH = void 0 === CH.activeIndex ? YH : CH.activeIndex;
                      return {
                        graphicalItem: UL(UL({}, hH), {}, {
                          childIndex: uH
                        }),
                        payload: (0, nB.o)(hH, AH) ? CH.data[YH] : hH.props.data[YH]
                      }
                    }
                  }
                return null
              }
            }, {
              key: "render",
              value: function() {
                var HH = this;
                if (!(0, OH.v)(this)) return null;
                var BH, LH, rH = this.props,
                  SH = rH.children,
                  hH = rH.className,
                  tH = rH.width,
                  zH = rH.height,
                  CH = rH.style,
                  EH = rH.compact,
                  XH = rH.title,
                  GH = rH.desc,
                  YH = GL(rH, zL),
                  uH = (0, OH.c)(YH, !1);
                if (EH) return AH.createElement(hL.d, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, AH.createElement(xH.c, EL({}, uH, {
                  width: tH,
                  height: zH,
                  title: XH,
                  desc: GH
                }), this.renderClipPath(), (0, OH.t)(SH, this.renderMap)));
                this.props.accessibilityLayer && (uH.tabIndex = null !== (BH = this.props.tabIndex) && void 0 !== BH ? BH : 0, uH.role = null !== (LH = this.props.role) && void 0 !== LH ? LH : "application", uH.onKeyDown = function(BH) {
                  HH.accessibilityManager.keyboardEvent(BH)
                }, uH.onFocus = function() {
                  HH.accessibilityManager.focus()
                });
                var QH = this.parseEventsOfWrapper();
                return AH.createElement(hL.d, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, AH.createElement("div", EL({
                  className: (0, WH.e)("recharts-wrapper", hH),
                  style: UL({
                    position: "relative",
                    cursor: "default",
                    width: tH,
                    height: zH
                  }, CH)
                }, QH, {
                  ref: function(BH) {
                    HH.container = BH
                  }
                }), AH.createElement(xH.c, EL({}, uH, {
                  width: tH,
                  height: zH,
                  title: XH,
                  desc: GH,
                  style: kL
                }), this.renderClipPath(), (0, OH.t)(SH, this.renderMap)), this.renderLegend(), this.renderTooltip()))
              }
            }], zH && YL(rH.prototype, zH), EH && YL(rH, EH), Object.defineProperty(rH, "prototype", {
              writable: !1
            }), rH;
            var rH, zH, EH
          }(AH.Component);
        VL(fH, "displayName", BH), VL(fH, "defaultProps", UL({
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
        }, bH)), VL(fH, "getDerivedStateFromProps", (function(HH, BH) {
          var LH = HH.dataKey,
            AH = HH.data,
            rH = HH.children,
            hH = HH.width,
            tH = HH.height,
            zH = HH.layout,
            CH = HH.stackOffset,
            EH = HH.margin,
            XH = BH.dataStartIndex,
            GH = BH.dataEndIndex;
          if (void 0 === BH.updateId) {
            var YH = qL(HH);
            return UL(UL(UL({}, YH), {}, {
              updateId: 0
            }, IH(UL(UL({
              props: HH
            }, YH), {}, {
              updateId: 0
            }), BH)), {}, {
              prevDataKey: LH,
              prevData: AH,
              prevWidth: hH,
              prevHeight: tH,
              prevLayout: zH,
              prevStackOffset: CH,
              prevMargin: EH,
              prevChildren: rH
            })
          }
          if (LH !== BH.prevDataKey || AH !== BH.prevData || hH !== BH.prevWidth || tH !== BH.prevHeight || zH !== BH.prevLayout || CH !== BH.prevStackOffset || !(0, fB.b)(EH, BH.prevMargin)) {
            var uH = qL(HH),
              QH = {
                chartX: BH.chartX,
                chartY: BH.chartY,
                isTooltipActive: BH.isTooltipActive
              },
              WH = UL(UL({}, KL(BH, AH, zH)), {}, {
                updateId: BH.updateId + 1
              }),
              MH = UL(UL(UL({}, uH), QH), WH);
            return UL(UL(UL({}, MH), IH(UL({
              props: HH
            }, MH), BH)), {}, {
              prevDataKey: LH,
              prevData: AH,
              prevWidth: hH,
              prevHeight: tH,
              prevLayout: zH,
              prevStackOffset: CH,
              prevMargin: EH,
              prevChildren: rH
            })
          }
          if (!(0, OH.o)(rH, BH.prevChildren)) {
            var xH, vH, PH, TH, UH = (0, OH.f)(rH, aH),
              VH = UH && null !== (xH = null === (vH = UH.props) || void 0 === vH ? void 0 : vH.startIndex) && void 0 !== xH ? xH : XH,
              bH = UH && null !== (PH = null === (TH = UH.props) || void 0 === TH ? void 0 : TH.endIndex) && void 0 !== PH ? PH : GH,
              kH = VH !== XH || bH !== GH,
              mH = !SH()(AH) && !kH ? BH.updateId : BH.updateId + 1;
            return UL(UL({
              updateId: mH
            }, IH(UL(UL({
              props: HH
            }, BH), {}, {
              updateId: mH,
              dataStartIndex: VH,
              dataEndIndex: bH
            }), BH)), {}, {
              prevChildren: rH,
              dataStartIndex: VH,
              dataEndIndex: bH
            })
          }
          return null
        })), VL(fH, "renderActiveDot", (function(HH, BH, LH) {
          var rH;
          return rH = (0, AH.isValidElement)(HH) ? (0, AH.cloneElement)(HH, BH) : tH()(HH) ? HH(BH) : AH.createElement(UH.b, BH), AH.createElement(vH.b, {
            className: "recharts-active-dot",
            key: LH
          }, rH)
        }));
        var lH = (0, AH.forwardRef)((function(HH, BH) {
          return AH.createElement(fH, EL({}, HH, {
            ref: BH
          }))
        }));
        return lH.displayName = fH.displayName, lH
      }
  },
  6816: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => AH
    });
    var AH = function(HH) {
      return null
    };
    AH.displayName = "Cell"
  },
  6750: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => IH
    });
    var AH = LH(45),
      rH = LH(5951),
      SH = LH.n(rH),
      hH = LH(5789),
      tH = LH.n(hH),
      zH = LH(5607),
      CH = LH.n(zH),
      EH = LH(5582),
      XH = LH(6657),
      GH = LH(5960),
      YH = LH(5684),
      uH = LH(6754);

    function QH(HH) {
      return QH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, QH(HH)
    }
    var WH = ["offset"];

    function MH(HH) {
      return function(HH) {
        if (Array.isArray(HH)) return xH(HH)
      }(HH) || function(HH) {
        if ("undefined" !== typeof Symbol && null != HH[Symbol.iterator] || null != HH["@@iterator"]) return Array.from(HH)
      }(HH) || function(HH, BH) {
        if (!HH) return;
        if ("string" === typeof HH) return xH(HH, BH);
        var LH = Object.prototype.toString.call(HH).slice(8, -1);
        "Object" === LH && HH.constructor && (LH = HH.constructor.name);
        if ("Map" === LH || "Set" === LH) return Array.from(HH);
        if ("Arguments" === LH || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(LH)) return xH(HH, BH)
      }(HH) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function xH(HH, BH) {
      (null == BH || BH > HH.length) && (BH = HH.length);
      for (var LH = 0, AH = new Array(BH); LH < BH; LH++) AH[LH] = HH[LH];
      return AH
    }

    function vH(HH, BH) {
      if (null == HH) return {};
      var LH, AH, rH = function(HH, BH) {
        if (null == HH) return {};
        var LH = {};
        for (var AH in HH)
          if (Object.prototype.hasOwnProperty.call(HH, AH)) {
            if (BH.indexOf(AH) >= 0) continue;
            LH[AH] = HH[AH]
          } return LH
      }(HH, BH);
      if (Object.getOwnPropertySymbols) {
        var SH = Object.getOwnPropertySymbols(HH);
        for (AH = 0; AH < SH.length; AH++) LH = SH[AH], BH.indexOf(LH) >= 0 || Object.prototype.propertyIsEnumerable.call(HH, LH) && (rH[LH] = HH[LH])
      }
      return rH
    }

    function PH(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function TH(HH) {
      for (var BH = 1; BH < arguments.length; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? PH(Object(LH), !0).forEach((function(BH) {
          UH(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : PH(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }

    function UH(HH, BH, LH) {
      return (BH = function(HH) {
        var BH = function(HH, BH) {
          if ("object" != QH(HH) || !HH) return HH;
          var LH = HH[Symbol.toPrimitive];
          if (void 0 !== LH) {
            var AH = LH.call(HH, BH || "default");
            if ("object" != QH(AH)) return AH;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === BH ? String : Number)(HH)
        }(HH, "string");
        return "symbol" == QH(BH) ? BH : BH + ""
      }(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }

    function VH() {
      return VH = Object.assign ? Object.assign.bind() : function(HH) {
        for (var BH = 1; BH < arguments.length; BH++) {
          var LH = arguments[BH];
          for (var AH in LH) Object.prototype.hasOwnProperty.call(LH, AH) && (HH[AH] = LH[AH])
        }
        return HH
      }, VH.apply(this, arguments)
    }
    var OH = function(HH) {
        var BH = HH.value,
          LH = HH.formatter,
          AH = SH()(HH.children) ? BH : HH.children;
        return tH()(LH) ? LH(AH) : AH
      },
      bH = function(HH, BH, LH) {
        var rH, hH, tH = HH.position,
          zH = HH.viewBox,
          CH = HH.offset,
          XH = HH.className,
          GH = zH,
          QH = GH.cx,
          WH = GH.cy,
          MH = GH.innerRadius,
          xH = GH.outerRadius,
          vH = GH.startAngle,
          PH = GH.endAngle,
          TH = GH.clockWise,
          UH = (MH + xH) / 2,
          OH = function(HH, BH) {
            return (0, YH.A)(BH - HH) * Math.min(Math.abs(BH - HH), 360)
          }(vH, PH),
          bH = OH >= 0 ? 1 : -1;
        "insideStart" === tH ? (rH = vH + bH * CH, hH = TH) : "insideEnd" === tH ? (rH = PH - bH * CH, hH = !TH) : "end" === tH && (rH = PH + bH * CH, hH = TH), hH = OH <= 0 ? hH : !hH;
        var kH = (0, uH.g)(QH, WH, UH, rH),
          mH = (0, uH.g)(QH, WH, UH, rH + 359 * (hH ? 1 : -1)),
          oH = "M".concat(kH.x, ",").concat(kH.y, "\n    A").concat(UH, ",").concat(UH, ",0,1,").concat(hH ? 0 : 1, ",\n    ").concat(mH.x, ",").concat(mH.y),
          IH = SH()(HH.id) ? (0, YH.D)("recharts-radial-line-") : HH.id;
        return AH.createElement("text", VH({}, LH, {
          dominantBaseline: "central",
          className: (0, EH.e)("recharts-radial-bar-label", XH)
        }), AH.createElement("defs", null, AH.createElement("path", {
          id: IH,
          d: oH
        })), AH.createElement("textPath", {
          xlinkHref: "#".concat(IH)
        }, BH))
      },
      kH = function(HH) {
        var BH = HH.viewBox,
          LH = HH.offset,
          AH = HH.position,
          rH = BH,
          SH = rH.cx,
          hH = rH.cy,
          tH = rH.innerRadius,
          zH = rH.outerRadius,
          CH = (rH.startAngle + rH.endAngle) / 2;
        if ("outside" === AH) {
          var EH = (0, uH.g)(SH, hH, zH + LH, CH),
            XH = EH.x;
          return {
            x: XH,
            y: EH.y,
            textAnchor: XH >= SH ? "start" : "end",
            verticalAnchor: "middle"
          }
        }
        if ("center" === AH) return {
          x: SH,
          y: hH,
          textAnchor: "middle",
          verticalAnchor: "middle"
        };
        if ("centerTop" === AH) return {
          x: SH,
          y: hH,
          textAnchor: "middle",
          verticalAnchor: "start"
        };
        if ("centerBottom" === AH) return {
          x: SH,
          y: hH,
          textAnchor: "middle",
          verticalAnchor: "end"
        };
        var GH = (tH + zH) / 2,
          YH = (0, uH.g)(SH, hH, GH, CH);
        return {
          x: YH.x,
          y: YH.y,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }
      },
      mH = function(HH) {
        var BH = HH.viewBox,
          LH = HH.parentViewBox,
          AH = HH.offset,
          rH = HH.position,
          SH = BH,
          hH = SH.x,
          tH = SH.y,
          zH = SH.width,
          EH = SH.height,
          XH = EH >= 0 ? 1 : -1,
          GH = XH * AH,
          uH = XH > 0 ? "end" : "start",
          QH = XH > 0 ? "start" : "end",
          WH = zH >= 0 ? 1 : -1,
          MH = WH * AH,
          xH = WH > 0 ? "end" : "start",
          vH = WH > 0 ? "start" : "end";
        if ("top" === rH) return TH(TH({}, {
          x: hH + zH / 2,
          y: tH - XH * AH,
          textAnchor: "middle",
          verticalAnchor: uH
        }), LH ? {
          height: Math.max(tH - LH.y, 0),
          width: zH
        } : {});
        if ("bottom" === rH) return TH(TH({}, {
          x: hH + zH / 2,
          y: tH + EH + GH,
          textAnchor: "middle",
          verticalAnchor: QH
        }), LH ? {
          height: Math.max(LH.y + LH.height - (tH + EH), 0),
          width: zH
        } : {});
        if ("left" === rH) {
          var PH = {
            x: hH - MH,
            y: tH + EH / 2,
            textAnchor: xH,
            verticalAnchor: "middle"
          };
          return TH(TH({}, PH), LH ? {
            width: Math.max(PH.x - LH.x, 0),
            height: EH
          } : {})
        }
        if ("right" === rH) {
          var UH = {
            x: hH + zH + MH,
            y: tH + EH / 2,
            textAnchor: vH,
            verticalAnchor: "middle"
          };
          return TH(TH({}, UH), LH ? {
            width: Math.max(LH.x + LH.width - UH.x, 0),
            height: EH
          } : {})
        }
        var VH = LH ? {
          width: zH,
          height: EH
        } : {};
        return "insideLeft" === rH ? TH({
          x: hH + MH,
          y: tH + EH / 2,
          textAnchor: vH,
          verticalAnchor: "middle"
        }, VH) : "insideRight" === rH ? TH({
          x: hH + zH - MH,
          y: tH + EH / 2,
          textAnchor: xH,
          verticalAnchor: "middle"
        }, VH) : "insideTop" === rH ? TH({
          x: hH + zH / 2,
          y: tH + GH,
          textAnchor: "middle",
          verticalAnchor: QH
        }, VH) : "insideBottom" === rH ? TH({
          x: hH + zH / 2,
          y: tH + EH - GH,
          textAnchor: "middle",
          verticalAnchor: uH
        }, VH) : "insideTopLeft" === rH ? TH({
          x: hH + MH,
          y: tH + GH,
          textAnchor: vH,
          verticalAnchor: QH
        }, VH) : "insideTopRight" === rH ? TH({
          x: hH + zH - MH,
          y: tH + GH,
          textAnchor: xH,
          verticalAnchor: QH
        }, VH) : "insideBottomLeft" === rH ? TH({
          x: hH + MH,
          y: tH + EH - GH,
          textAnchor: vH,
          verticalAnchor: uH
        }, VH) : "insideBottomRight" === rH ? TH({
          x: hH + zH - MH,
          y: tH + EH - GH,
          textAnchor: xH,
          verticalAnchor: uH
        }, VH) : CH()(rH) && ((0, YH.v)(rH.x) || (0, YH.z)(rH.x)) && ((0, YH.v)(rH.y) || (0, YH.z)(rH.y)) ? TH({
          x: hH + (0, YH.l)(rH.x, zH),
          y: tH + (0, YH.l)(rH.y, EH),
          textAnchor: "end",
          verticalAnchor: "end"
        }, VH) : TH({
          x: hH + zH / 2,
          y: tH + EH / 2,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }, VH)
      },
      oH = function(HH) {
        return "cx" in HH && (0, YH.v)(HH.cx)
      };

    function IH(HH) {
      var BH, LH = HH.offset,
        rH = TH({
          offset: void 0 === LH ? 5 : LH
        }, vH(HH, WH)),
        hH = rH.viewBox,
        zH = rH.position,
        CH = rH.value,
        YH = rH.children,
        uH = rH.content,
        QH = rH.className,
        MH = void 0 === QH ? "" : QH,
        xH = rH.textBreakAll;
      if (!hH || SH()(CH) && SH()(YH) && !(0, AH.isValidElement)(uH) && !tH()(uH)) return null;
      if ((0, AH.isValidElement)(uH)) return (0, AH.cloneElement)(uH, rH);
      if (tH()(uH)) {
        if (BH = (0, AH.createElement)(uH, rH), (0, AH.isValidElement)(BH)) return BH
      } else BH = OH(rH);
      var PH = oH(hH),
        UH = (0, GH.c)(rH, !0);
      if (PH && ("insideStart" === zH || "insideEnd" === zH || "end" === zH)) return bH(rH, BH, UH);
      var IH = PH ? kH(rH) : mH(rH);
      return AH.createElement(XH.e, VH({
        className: (0, EH.e)("recharts-label", MH)
      }, UH, IH, {
        breakAll: xH
      }), BH)
    }
    IH.displayName = "Label";
    var fH = function(HH) {
      var BH = HH.cx,
        LH = HH.cy,
        AH = HH.angle,
        rH = HH.startAngle,
        SH = HH.endAngle,
        hH = HH.r,
        tH = HH.radius,
        zH = HH.innerRadius,
        CH = HH.outerRadius,
        EH = HH.x,
        XH = HH.y,
        GH = HH.top,
        uH = HH.left,
        QH = HH.width,
        WH = HH.height,
        MH = HH.clockWise,
        xH = HH.labelViewBox;
      if (xH) return xH;
      if ((0, YH.v)(QH) && (0, YH.v)(WH)) {
        if ((0, YH.v)(EH) && (0, YH.v)(XH)) return {
          x: EH,
          y: XH,
          width: QH,
          height: WH
        };
        if ((0, YH.v)(GH) && (0, YH.v)(uH)) return {
          x: GH,
          y: uH,
          width: QH,
          height: WH
        }
      }
      return (0, YH.v)(EH) && (0, YH.v)(XH) ? {
        x: EH,
        y: XH,
        width: 0,
        height: 0
      } : (0, YH.v)(BH) && (0, YH.v)(LH) ? {
        cx: BH,
        cy: LH,
        startAngle: rH || AH || 0,
        endAngle: SH || AH || 0,
        innerRadius: zH || 0,
        outerRadius: CH || tH || hH || 0,
        clockWise: MH
      } : HH.viewBox ? HH.viewBox : {}
    };
    IH.parseViewBox = fH, IH.renderCallByParent = function(HH, BH) {
      var LH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!HH || !HH.children && LH && !HH.label) return null;
      var rH = HH.children,
        SH = fH(HH),
        hH = (0, GH.e)(rH, IH).map((function(HH, LH) {
          return (0, AH.cloneElement)(HH, {
            viewBox: BH || SH,
            key: "label-".concat(LH)
          })
        }));
      if (!LH) return hH;
      var zH = function(HH, BH) {
        return HH ? !0 === HH ? AH.createElement(IH, {
          key: "label-implicit",
          viewBox: BH
        }) : (0, YH.s)(HH) ? AH.createElement(IH, {
          key: "label-implicit",
          viewBox: BH,
          value: HH
        }) : (0, AH.isValidElement)(HH) ? HH.type === IH ? (0, AH.cloneElement)(HH, {
          key: "label-implicit",
          viewBox: BH
        }) : AH.createElement(IH, {
          key: "label-implicit",
          content: HH,
          viewBox: BH
        }) : tH()(HH) ? AH.createElement(IH, {
          key: "label-implicit",
          content: HH,
          viewBox: BH
        }) : CH()(HH) ? AH.createElement(IH, VH({
          viewBox: BH
        }, HH, {
          key: "label-implicit"
        })) : null : null
      }(HH.label, BH || SH);
      return [zH].concat(MH(hH))
    }
  },
  6822: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => mH
    });
    var AH = LH(45),
      rH = LH(5951),
      SH = LH.n(rH),
      hH = LH(5607),
      tH = LH.n(hH),
      zH = LH(5789),
      CH = LH.n(zH),
      EH = LH(6831),
      XH = LH.n(EH),
      GH = LH(6750),
      YH = LH(6489),
      uH = LH(5960),
      QH = LH(6665);

    function WH(HH) {
      return WH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, WH(HH)
    }
    var MH = ["valueAccessor"],
      xH = ["data", "dataKey", "clockWise", "id", "textBreakAll"];

    function vH(HH) {
      return function(HH) {
        if (Array.isArray(HH)) return PH(HH)
      }(HH) || function(HH) {
        if ("undefined" !== typeof Symbol && null != HH[Symbol.iterator] || null != HH["@@iterator"]) return Array.from(HH)
      }(HH) || function(HH, BH) {
        if (!HH) return;
        if ("string" === typeof HH) return PH(HH, BH);
        var LH = Object.prototype.toString.call(HH).slice(8, -1);
        "Object" === LH && HH.constructor && (LH = HH.constructor.name);
        if ("Map" === LH || "Set" === LH) return Array.from(HH);
        if ("Arguments" === LH || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(LH)) return PH(HH, BH)
      }(HH) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function PH(HH, BH) {
      (null == BH || BH > HH.length) && (BH = HH.length);
      for (var LH = 0, AH = new Array(BH); LH < BH; LH++) AH[LH] = HH[LH];
      return AH
    }

    function TH() {
      return TH = Object.assign ? Object.assign.bind() : function(HH) {
        for (var BH = 1; BH < arguments.length; BH++) {
          var LH = arguments[BH];
          for (var AH in LH) Object.prototype.hasOwnProperty.call(LH, AH) && (HH[AH] = LH[AH])
        }
        return HH
      }, TH.apply(this, arguments)
    }

    function UH(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function VH(HH) {
      for (var BH = 1; BH < arguments.length; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? UH(Object(LH), !0).forEach((function(BH) {
          OH(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : UH(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }

    function OH(HH, BH, LH) {
      return (BH = function(HH) {
        var BH = function(HH, BH) {
          if ("object" != WH(HH) || !HH) return HH;
          var LH = HH[Symbol.toPrimitive];
          if (void 0 !== LH) {
            var AH = LH.call(HH, BH || "default");
            if ("object" != WH(AH)) return AH;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === BH ? String : Number)(HH)
        }(HH, "string");
        return "symbol" == WH(BH) ? BH : BH + ""
      }(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }

    function bH(HH, BH) {
      if (null == HH) return {};
      var LH, AH, rH = function(HH, BH) {
        if (null == HH) return {};
        var LH = {};
        for (var AH in HH)
          if (Object.prototype.hasOwnProperty.call(HH, AH)) {
            if (BH.indexOf(AH) >= 0) continue;
            LH[AH] = HH[AH]
          } return LH
      }(HH, BH);
      if (Object.getOwnPropertySymbols) {
        var SH = Object.getOwnPropertySymbols(HH);
        for (AH = 0; AH < SH.length; AH++) LH = SH[AH], BH.indexOf(LH) >= 0 || Object.prototype.propertyIsEnumerable.call(HH, LH) && (rH[LH] = HH[LH])
      }
      return rH
    }
    var kH = function(HH) {
      return Array.isArray(HH.value) ? XH()(HH.value) : HH.value
    };

    function mH(HH) {
      var BH = HH.valueAccessor,
        LH = void 0 === BH ? kH : BH,
        rH = bH(HH, MH),
        hH = rH.data,
        tH = rH.dataKey,
        zH = rH.clockWise,
        CH = rH.id,
        EH = rH.textBreakAll,
        XH = bH(rH, xH);
      return hH && hH.length ? AH.createElement(YH.b, {
        className: "recharts-label-list"
      }, hH.map((function(HH, BH) {
        var rH = SH()(tH) ? LH(HH, BH) : (0, QH.db)(HH && HH.payload, tH),
          hH = SH()(CH) ? {} : {
            id: "".concat(CH, "-").concat(BH)
          };
        return AH.createElement(GH.d, TH({}, (0, uH.c)(HH, !0), XH, hH, {
          parentViewBox: HH.parentViewBox,
          value: rH,
          textBreakAll: EH,
          viewBox: GH.d.parseViewBox(SH()(zH) ? HH : VH(VH({}, HH), {}, {
            clockWise: zH
          })),
          key: "label-".concat(BH),
          index: BH
        }))
      }))) : null
    }
    mH.displayName = "LabelList", mH.renderCallByParent = function(HH, BH) {
      var LH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!HH || !HH.children && LH && !HH.label) return null;
      var rH = HH.children,
        SH = (0, uH.e)(rH, mH).map((function(HH, LH) {
          return (0, AH.cloneElement)(HH, {
            data: BH,
            key: "labelList-".concat(LH)
          })
        }));
      return LH ? [function(HH, BH) {
        return HH ? !0 === HH ? AH.createElement(mH, {
          key: "labelList-implicit",
          data: BH
        }) : AH.isValidElement(HH) || CH()(HH) ? AH.createElement(mH, {
          key: "labelList-implicit",
          data: BH,
          content: HH
        }) : tH()(HH) ? AH.createElement(mH, TH({
          data: BH
        }, HH, {
          key: "labelList-implicit"
        })) : null : null
      }(HH.label, BH)].concat(vH(SH)) : SH
    }
  },
  6568: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => RH
    });
    var AH = LH(45),
      rH = LH(5789),
      SH = LH.n(rH),
      hH = LH(5582),
      tH = LH(5957),
      zH = LH(6480),
      CH = LH(6577),
      EH = LH(5975);

    function XH(HH) {
      return XH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, XH(HH)
    }

    function GH() {
      return GH = Object.assign ? Object.assign.bind() : function(HH) {
        for (var BH = 1; BH < arguments.length; BH++) {
          var LH = arguments[BH];
          for (var AH in LH) Object.prototype.hasOwnProperty.call(LH, AH) && (HH[AH] = LH[AH])
        }
        return HH
      }, GH.apply(this, arguments)
    }

    function YH(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function uH(HH, BH) {
      for (var LH = 0; LH < BH.length; LH++) {
        var AH = BH[LH];
        AH.enumerable = AH.enumerable || !1, AH.configurable = !0, "value" in AH && (AH.writable = !0), Object.defineProperty(HH, PH(AH.key), AH)
      }
    }

    function QH(HH, BH, LH) {
      return BH = MH(BH),
        function(HH, BH) {
          if (BH && ("object" === XH(BH) || "function" === typeof BH)) return BH;
          if (void 0 !== BH) throw new TypeError("Derived constructors may only return object or undefined");
          return function(HH) {
            if (void 0 === HH) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return HH
          }(HH)
        }(HH, WH() ? Reflect.construct(BH, LH || [], MH(HH).constructor) : BH.apply(HH, LH))
    }

    function WH() {
      try {
        var HH = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (HH) {}
      return (WH = function() {
        return !!HH
      })()
    }

    function MH(HH) {
      return MH = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(HH) {
        return HH.__proto__ || Object.getPrototypeOf(HH)
      }, MH(HH)
    }

    function xH(HH, BH) {
      return xH = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(HH, BH) {
        return HH.__proto__ = BH, HH
      }, xH(HH, BH)
    }

    function vH(HH, BH, LH) {
      return (BH = PH(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }

    function PH(HH) {
      var BH = function(HH, BH) {
        if ("object" != XH(HH) || !HH) return HH;
        var LH = HH[Symbol.toPrimitive];
        if (void 0 !== LH) {
          var AH = LH.call(HH, BH || "default");
          if ("object" != XH(AH)) return AH;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === BH ? String : Number)(HH)
      }(HH, "string");
      return "symbol" == XH(BH) ? BH : BH + ""
    }
    var TH = 32,
      UH = function(HH) {
        function BH() {
          return function(HH, BH) {
            if (!(HH instanceof BH)) throw new TypeError("Cannot call a class as a function")
          }(this, BH), QH(this, BH, arguments)
        }
        return function(HH, BH) {
          if ("function" !== typeof BH && null !== BH) throw new TypeError("Super expression must either be null or a function");
          HH.prototype = Object.create(BH && BH.prototype, {
            constructor: {
              value: HH,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(HH, "prototype", {
            writable: !1
          }), BH && xH(HH, BH)
        }(BH, HH), LH = BH, rH = [{
          key: "renderIcon",
          value: function(HH) {
            var BH = this.props.inactiveColor,
              LH = 16,
              rH = TH / 6,
              SH = TH / 3,
              hH = HH.inactive ? BH : HH.color;
            if ("plainline" === HH.type) return AH.createElement("line", {
              strokeWidth: 4,
              fill: "none",
              stroke: hH,
              strokeDasharray: HH.payload.strokeDasharray,
              x1: 0,
              y1: LH,
              x2: TH,
              y2: LH,
              className: "recharts-legend-icon"
            });
            if ("line" === HH.type) return AH.createElement("path", {
              strokeWidth: 4,
              fill: "none",
              stroke: hH,
              d: "M0,".concat(LH, "h").concat(SH, "\n            A").concat(rH, ",").concat(rH, ",0,1,1,").concat(2 * SH, ",").concat(LH, "\n            H").concat(TH, "M").concat(2 * SH, ",").concat(LH, "\n            A").concat(rH, ",").concat(rH, ",0,1,1,").concat(SH, ",").concat(LH),
              className: "recharts-legend-icon"
            });
            if ("rect" === HH.type) return AH.createElement("path", {
              stroke: "none",
              fill: hH,
              d: "M0,".concat(4, "h").concat(TH, "v").concat(24, "h").concat(-32, "z"),
              className: "recharts-legend-icon"
            });
            if (AH.isValidElement(HH.legendIcon)) {
              var tH = function(HH) {
                for (var BH = 1; BH < arguments.length; BH++) {
                  var LH = null != arguments[BH] ? arguments[BH] : {};
                  BH % 2 ? YH(Object(LH), !0).forEach((function(BH) {
                    vH(HH, BH, LH[BH])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : YH(Object(LH)).forEach((function(BH) {
                    Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
                  }))
                }
                return HH
              }({}, HH);
              return delete tH.legendIcon, AH.cloneElement(HH.legendIcon, tH)
            }
            return AH.createElement(CH.e, {
              fill: hH,
              cx: LH,
              cy: LH,
              size: TH,
              sizeType: "diameter",
              type: HH.type
            })
          }
        }, {
          key: "renderItems",
          value: function() {
            var HH = this,
              BH = this.props,
              LH = BH.payload,
              rH = BH.iconSize,
              CH = BH.layout,
              XH = BH.formatter,
              YH = BH.inactiveColor,
              uH = {
                x: 0,
                y: 0,
                width: TH,
                height: TH
              },
              QH = {
                display: "horizontal" === CH ? "inline-block" : "block",
                marginRight: 10
              },
              WH = {
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: 4
              };
            return LH.map((function(BH, LH) {
              var CH = BH.formatter || XH,
                MH = (0, hH.e)(vH(vH({
                  "recharts-legend-item": !0
                }, "legend-item-".concat(LH), !0), "inactive", BH.inactive));
              if ("none" === BH.type) return null;
              var xH = SH()(BH.value) ? null : BH.value;
              (0, tH.d)(!SH()(BH.value), 'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>');
              var PH = BH.inactive ? YH : BH.color;
              return AH.createElement("li", GH({
                className: MH,
                style: QH,
                key: "legend-item-".concat(LH)
              }, (0, EH.n)(HH.props, BH, LH)), AH.createElement(zH.c, {
                width: rH,
                height: rH,
                viewBox: uH,
                style: WH
              }, HH.renderIcon(BH)), AH.createElement("span", {
                className: "recharts-legend-item-text",
                style: {
                  color: PH
                }
              }, CH ? CH(xH, BH, LH) : xH))
            }))
          }
        }, {
          key: "render",
          value: function() {
            var HH = this.props,
              BH = HH.payload,
              LH = HH.layout,
              rH = HH.align;
            if (!BH || !BH.length) return null;
            var SH = {
              padding: 0,
              margin: 0,
              textAlign: "horizontal" === LH ? rH : "left"
            };
            return AH.createElement("ul", {
              className: "recharts-default-legend",
              style: SH
            }, this.renderItems())
          }
        }], rH && uH(LH.prototype, rH), XH && uH(LH, XH), Object.defineProperty(LH, "prototype", {
          writable: !1
        }), LH;
        var LH, rH, XH
      }(AH.PureComponent);
    vH(UH, "displayName", "Legend"), vH(UH, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "middle",
      inactiveColor: "#ccc"
    });
    var VH = LH(5684),
      OH = LH(6503);

    function bH(HH) {
      return bH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, bH(HH)
    }
    var kH = ["ref"];

    function mH(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function oH(HH) {
      for (var BH = 1; BH < arguments.length; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? mH(Object(LH), !0).forEach((function(BH) {
          eH(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : mH(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }

    function IH(HH, BH) {
      for (var LH = 0; LH < BH.length; LH++) {
        var AH = BH[LH];
        AH.enumerable = AH.enumerable || !1, AH.configurable = !0, "value" in AH && (AH.writable = !0), Object.defineProperty(HH, qH(AH.key), AH)
      }
    }

    function fH(HH, BH, LH) {
      return BH = KH(BH),
        function(HH, BH) {
          if (BH && ("object" === bH(BH) || "function" === typeof BH)) return BH;
          if (void 0 !== BH) throw new TypeError("Derived constructors may only return object or undefined");
          return function(HH) {
            if (void 0 === HH) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return HH
          }(HH)
        }(HH, lH() ? Reflect.construct(BH, LH || [], KH(HH).constructor) : BH.apply(HH, LH))
    }

    function lH() {
      try {
        var HH = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (HH) {}
      return (lH = function() {
        return !!HH
      })()
    }

    function KH(HH) {
      return KH = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(HH) {
        return HH.__proto__ || Object.getPrototypeOf(HH)
      }, KH(HH)
    }

    function cH(HH, BH) {
      return cH = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(HH, BH) {
        return HH.__proto__ = BH, HH
      }, cH(HH, BH)
    }

    function eH(HH, BH, LH) {
      return (BH = qH(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }

    function qH(HH) {
      var BH = function(HH, BH) {
        if ("object" != bH(HH) || !HH) return HH;
        var LH = HH[Symbol.toPrimitive];
        if (void 0 !== LH) {
          var AH = LH.call(HH, BH || "default");
          if ("object" != bH(AH)) return AH;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === BH ? String : Number)(HH)
      }(HH, "string");
      return "symbol" == bH(BH) ? BH : BH + ""
    }

    function gH(HH, BH) {
      if (null == HH) return {};
      var LH, AH, rH = function(HH, BH) {
        if (null == HH) return {};
        var LH = {};
        for (var AH in HH)
          if (Object.prototype.hasOwnProperty.call(HH, AH)) {
            if (BH.indexOf(AH) >= 0) continue;
            LH[AH] = HH[AH]
          } return LH
      }(HH, BH);
      if (Object.getOwnPropertySymbols) {
        var SH = Object.getOwnPropertySymbols(HH);
        for (AH = 0; AH < SH.length; AH++) LH = SH[AH], BH.indexOf(LH) >= 0 || Object.prototype.propertyIsEnumerable.call(HH, LH) && (rH[LH] = HH[LH])
      }
      return rH
    }

    function NH(HH) {
      return HH.value
    }
    var RH = function(HH) {
      function BH() {
        var HH;
        ! function(HH, BH) {
          if (!(HH instanceof BH)) throw new TypeError("Cannot call a class as a function")
        }(this, BH);
        for (var LH = arguments.length, AH = new Array(LH), rH = 0; rH < LH; rH++) AH[rH] = arguments[rH];
        return eH(HH = fH(this, BH, [].concat(AH)), "lastBoundingBox", {
          width: -1,
          height: -1
        }), HH
      }
      return function(HH, BH) {
        if ("function" !== typeof BH && null !== BH) throw new TypeError("Super expression must either be null or a function");
        HH.prototype = Object.create(BH && BH.prototype, {
          constructor: {
            value: HH,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(HH, "prototype", {
          writable: !1
        }), BH && cH(HH, BH)
      }(BH, HH), LH = BH, SH = [{
        key: "getWithHeight",
        value: function(HH, BH) {
          var LH = oH(oH({}, this.defaultProps), HH.props).layout;
          return "vertical" === LH && (0, VH.v)(HH.props.height) ? {
            height: HH.props.height
          } : "horizontal" === LH ? {
            width: HH.props.width || BH
          } : null
        }
      }], (rH = [{
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
            var HH = this.wrapperNode.getBoundingClientRect();
            return HH.height = this.wrapperNode.offsetHeight, HH.width = this.wrapperNode.offsetWidth, HH
          }
          return null
        }
      }, {
        key: "updateBBox",
        value: function() {
          var HH = this.props.onBBoxUpdate,
            BH = this.getBBox();
          BH ? (Math.abs(BH.width - this.lastBoundingBox.width) > 1 || Math.abs(BH.height - this.lastBoundingBox.height) > 1) && (this.lastBoundingBox.width = BH.width, this.lastBoundingBox.height = BH.height, HH && HH(BH)) : -1 === this.lastBoundingBox.width && -1 === this.lastBoundingBox.height || (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, HH && HH(null))
        }
      }, {
        key: "getBBoxSnapshot",
        value: function() {
          return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? oH({}, this.lastBoundingBox) : {
            width: 0,
            height: 0
          }
        }
      }, {
        key: "getDefaultPosition",
        value: function(HH) {
          var BH, LH, AH = this.props,
            rH = AH.layout,
            SH = AH.align,
            hH = AH.verticalAlign,
            tH = AH.margin,
            zH = AH.chartWidth,
            CH = AH.chartHeight;
          return HH && (void 0 !== HH.left && null !== HH.left || void 0 !== HH.right && null !== HH.right) || (BH = "center" === SH && "vertical" === rH ? {
            left: ((zH || 0) - this.getBBoxSnapshot().width) / 2
          } : "right" === SH ? {
            right: tH && tH.right || 0
          } : {
            left: tH && tH.left || 0
          }), HH && (void 0 !== HH.top && null !== HH.top || void 0 !== HH.bottom && null !== HH.bottom) || (LH = "middle" === hH ? {
            top: ((CH || 0) - this.getBBoxSnapshot().height) / 2
          } : "bottom" === hH ? {
            bottom: tH && tH.bottom || 0
          } : {
            top: tH && tH.top || 0
          }), oH(oH({}, BH), LH)
        }
      }, {
        key: "render",
        value: function() {
          var HH = this,
            BH = this.props,
            LH = BH.content,
            rH = BH.width,
            SH = BH.height,
            hH = BH.wrapperStyle,
            tH = BH.payloadUniqBy,
            zH = BH.payload,
            CH = oH(oH({
              position: "absolute",
              width: rH || "auto",
              height: SH || "auto"
            }, this.getDefaultPosition(hH)), hH);
          return AH.createElement("div", {
            className: "recharts-legend-wrapper",
            style: CH,
            ref: function(BH) {
              HH.wrapperNode = BH
            }
          }, function(HH, BH) {
            if (AH.isValidElement(HH)) return AH.cloneElement(HH, BH);
            if ("function" === typeof HH) return AH.createElement(HH, BH);
            BH.ref;
            var LH = gH(BH, kH);
            return AH.createElement(UH, LH)
          }(LH, oH(oH({}, this.props), {}, {
            payload: (0, OH.c)(zH, tH, NH)
          })))
        }
      }]) && IH(LH.prototype, rH), SH && IH(LH, SH), Object.defineProperty(LH, "prototype", {
        writable: !1
      }), LH;
      var LH, rH, SH
    }(AH.PureComponent);
    eH(RH, "displayName", "Legend"), eH(RH, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom"
    })
  },
  5574: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => WH
    });
    var AH = LH(5582),
      rH = LH(45),
      SH = LH(5590),
      hH = LH.n(SH),
      tH = LH(5684),
      zH = LH(5957),
      CH = LH(5960);

    function EH(HH) {
      return EH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, EH(HH)
    }

    function XH(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function GH(HH) {
      for (var BH = 1; BH < arguments.length; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? XH(Object(LH), !0).forEach((function(BH) {
          YH(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : XH(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }

    function YH(HH, BH, LH) {
      return (BH = function(HH) {
        var BH = function(HH, BH) {
          if ("object" != EH(HH) || !HH) return HH;
          var LH = HH[Symbol.toPrimitive];
          if (void 0 !== LH) {
            var AH = LH.call(HH, BH || "default");
            if ("object" != EH(AH)) return AH;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === BH ? String : Number)(HH)
        }(HH, "string");
        return "symbol" == EH(BH) ? BH : BH + ""
      }(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }

    function uH(HH, BH) {
      return function(HH) {
        if (Array.isArray(HH)) return HH
      }(HH) || function(HH, BH) {
        var LH = null == HH ? null : "undefined" != typeof Symbol && HH[Symbol.iterator] || HH["@@iterator"];
        if (null != LH) {
          var AH, rH, SH, hH, tH = [],
            zH = !0,
            CH = !1;
          try {
            if (SH = (LH = LH.call(HH)).next, 0 === BH) {
              if (Object(LH) !== LH) return;
              zH = !1
            } else
              for (; !(zH = (AH = SH.call(LH)).done) && (tH.push(AH.value), tH.length !== BH); zH = !0);
          } catch (HH) {
            CH = !0, rH = HH
          } finally {
            try {
              if (!zH && null != LH.return && (hH = LH.return(), Object(hH) !== hH)) return
            } finally {
              if (CH) throw rH
            }
          }
          return tH
        }
      }(HH, BH) || function(HH, BH) {
        if (!HH) return;
        if ("string" === typeof HH) return QH(HH, BH);
        var LH = Object.prototype.toString.call(HH).slice(8, -1);
        "Object" === LH && HH.constructor && (LH = HH.constructor.name);
        if ("Map" === LH || "Set" === LH) return Array.from(HH);
        if ("Arguments" === LH || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(LH)) return QH(HH, BH)
      }(HH, BH) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function QH(HH, BH) {
      (null == BH || BH > HH.length) && (BH = HH.length);
      for (var LH = 0, AH = new Array(BH); LH < BH; LH++) AH[LH] = HH[LH];
      return AH
    }
    var WH = (0, rH.forwardRef)((function(HH, BH) {
      var LH = HH.aspect,
        SH = HH.initialDimension,
        EH = void 0 === SH ? {
          width: -1,
          height: -1
        } : SH,
        XH = HH.width,
        YH = void 0 === XH ? "100%" : XH,
        QH = HH.height,
        WH = void 0 === QH ? "100%" : QH,
        MH = HH.minWidth,
        xH = void 0 === MH ? 0 : MH,
        vH = HH.minHeight,
        PH = HH.maxHeight,
        TH = HH.children,
        UH = HH.debounce,
        VH = void 0 === UH ? 0 : UH,
        OH = HH.id,
        bH = HH.className,
        kH = HH.Av,
        mH = HH.style,
        oH = void 0 === mH ? {} : mH,
        IH = (0, rH.useRef)(null),
        fH = (0, rH.useRef)();
      fH.current = kH, (0, rH.useImperativeHandle)(BH, (function() {
        return Object.defineProperty(IH.current, "current", {
          get: function() {
            return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), IH.current
          },
          configurable: !0
        })
      }));
      var lH = uH((0, rH.useState)({
          containerWidth: EH.width,
          containerHeight: EH.height
        }), 2),
        KH = lH[0],
        cH = lH[1],
        eH = (0, rH.useCallback)((function(HH, BH) {
          cH((function(LH) {
            var AH = Math.round(HH),
              rH = Math.round(BH);
            return LH.containerWidth === AH && LH.containerHeight === rH ? LH : {
              containerWidth: AH,
              containerHeight: rH
            }
          }))
        }), []);
      (0, rH.useEffect)((function() {
        var HH = function(HH) {
          var BH, LH = HH[0].contentRect,
            AH = LH.width,
            rH = LH.height;
          eH(AH, rH), null === (BH = fH.current) || void 0 === BH || BH.call(fH, AH, rH)
        };
        VH > 0 && (HH = hH()(HH, VH, {
          trailing: !0,
          leading: !1
        }));
        var BH = new ResizeObserver(HH),
          LH = IH.current.getBoundingClientRect(),
          AH = LH.width,
          rH = LH.height;
        return eH(AH, rH), BH.observe(IH.current),
          function() {
            BH.disconnect()
          }
      }), [eH, VH]);
      var qH = (0, rH.useMemo)((function() {
        var HH = KH.containerWidth,
          BH = KH.containerHeight;
        if (HH < 0 || BH < 0) return null;
        (0, zH.d)((0, tH.z)(YH) || (0, tH.z)(WH), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", YH, WH), (0, zH.d)(!LH || LH > 0, "The aspect(%s) must be greater than zero.", LH);
        var AH = (0, tH.z)(YH) ? HH : YH,
          SH = (0, tH.z)(WH) ? BH : WH;
        LH && LH > 0 && (AH ? SH = AH / LH : SH && (AH = SH * LH), PH && SH > PH && (SH = PH)), (0, zH.d)(AH > 0 || SH > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", AH, SH, YH, WH, xH, vH, LH);
        var hH = !Array.isArray(TH) && (0, CH.g)(TH.type).endsWith("Chart");
        return rH.Children.map(TH, (function(HH) {
          return rH.isValidElement(HH) ? (0, rH.cloneElement)(HH, GH({
            width: AH,
            height: SH
          }, hH ? {
            style: GH({
              height: "100%",
              width: "100%",
              maxHeight: SH,
              maxWidth: AH
            }, HH.props.style)
          } : {})) : HH
        }))
      }), [LH, TH, WH, PH, vH, xH, KH, YH]);
      return rH.createElement("div", {
        id: OH ? "".concat(OH) : void 0,
        className: (0, AH.e)("recharts-responsive-container", bH),
        style: GH(GH({}, oH), {}, {
          width: YH,
          height: WH,
          minWidth: xH,
          minHeight: vH,
          maxHeight: PH
        }),
        ref: IH
      }, qH)
    }))
  },
  6657: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => jH
    });
    var AH = LH(45),
      rH = LH(5951),
      SH = LH.n(rH),
      hH = LH(5582),
      tH = LH(5684),
      zH = LH(6497),
      CH = LH(5960),
      EH = LH(6663);

    function XH(HH) {
      return XH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, XH(HH)
    }

    function GH(HH, BH) {
      return function(HH) {
        if (Array.isArray(HH)) return HH
      }(HH) || function(HH, BH) {
        var LH = null == HH ? null : "undefined" != typeof Symbol && HH[Symbol.iterator] || HH["@@iterator"];
        if (null != LH) {
          var AH, rH, SH, hH, tH = [],
            zH = !0,
            CH = !1;
          try {
            if (SH = (LH = LH.call(HH)).next, 0 === BH) {
              if (Object(LH) !== LH) return;
              zH = !1
            } else
              for (; !(zH = (AH = SH.call(LH)).done) && (tH.push(AH.value), tH.length !== BH); zH = !0);
          } catch (HH) {
            CH = !0, rH = HH
          } finally {
            try {
              if (!zH && null != LH.return && (hH = LH.return(), Object(hH) !== hH)) return
            } finally {
              if (CH) throw rH
            }
          }
          return tH
        }
      }(HH, BH) || function(HH, BH) {
        if (!HH) return;
        if ("string" === typeof HH) return YH(HH, BH);
        var LH = Object.prototype.toString.call(HH).slice(8, -1);
        "Object" === LH && HH.constructor && (LH = HH.constructor.name);
        if ("Map" === LH || "Set" === LH) return Array.from(HH);
        if ("Arguments" === LH || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(LH)) return YH(HH, BH)
      }(HH, BH) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function YH(HH, BH) {
      (null == BH || BH > HH.length) && (BH = HH.length);
      for (var LH = 0, AH = new Array(BH); LH < BH; LH++) AH[LH] = HH[LH];
      return AH
    }

    function uH(HH, BH) {
      for (var LH = 0; LH < BH.length; LH++) {
        var AH = BH[LH];
        AH.enumerable = AH.enumerable || !1, AH.configurable = !0, "value" in AH && (AH.writable = !0), Object.defineProperty(HH, QH(AH.key), AH)
      }
    }

    function QH(HH) {
      var BH = function(HH, BH) {
        if ("object" != XH(HH) || !HH) return HH;
        var LH = HH[Symbol.toPrimitive];
        if (void 0 !== LH) {
          var AH = LH.call(HH, BH || "default");
          if ("object" != XH(AH)) return AH;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === BH ? String : Number)(HH)
      }(HH, "string");
      return "symbol" == XH(BH) ? BH : BH + ""
    }
    var WH = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      MH = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      xH = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
      vH = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
      PH = {
        cm: 96 / 2.54,
        mm: 96 / 25.4,
        pt: 96 / 72,
        pc: 16,
        in: 96,
        Q: 96 / 101.6,
        px: 1
      },
      TH = Object.keys(PH),
      UH = "NaN";
    var VH = function() {
      function HH(BH, LH) {
        ! function(HH, BH) {
          if (!(HH instanceof BH)) throw new TypeError("Cannot call a class as a function")
        }(this, HH), this.num = BH, this.unit = LH, this.num = BH, this.unit = LH, Number.isNaN(BH) && (this.unit = ""), "" === LH || xH.test(LH) || (this.num = NaN, this.unit = ""), TH.includes(LH) && (this.num = function(HH, BH) {
          return HH * PH[BH]
        }(BH, LH), this.unit = "px")
      }
      return BH = HH, AH = [{
        key: "parse",
        value: function(BH) {
          var LH, AH = GH(null !== (LH = vH.exec(BH)) && void 0 !== LH ? LH : [], 3),
            rH = AH[1],
            SH = AH[2];
          return new HH(parseFloat(rH), null !== SH && void 0 !== SH ? SH : "")
        }
      }], (LH = [{
        key: "add",
        value: function(BH) {
          return this.unit !== BH.unit ? new HH(NaN, "") : new HH(this.num + BH.num, this.unit)
        }
      }, {
        key: "subtract",
        value: function(BH) {
          return this.unit !== BH.unit ? new HH(NaN, "") : new HH(this.num - BH.num, this.unit)
        }
      }, {
        key: "multiply",
        value: function(BH) {
          return "" !== this.unit && "" !== BH.unit && this.unit !== BH.unit ? new HH(NaN, "") : new HH(this.num * BH.num, this.unit || BH.unit)
        }
      }, {
        key: "divide",
        value: function(BH) {
          return "" !== this.unit && "" !== BH.unit && this.unit !== BH.unit ? new HH(NaN, "") : new HH(this.num / BH.num, this.unit || BH.unit)
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
      }]) && uH(BH.prototype, LH), AH && uH(BH, AH), Object.defineProperty(BH, "prototype", {
        writable: !1
      }), BH;
      var BH, LH, AH
    }();

    function OH(HH) {
      if (HH.includes(UH)) return UH;
      for (var BH = HH; BH.includes("*") || BH.includes("/");) {
        var LH, AH = GH(null !== (LH = WH.exec(BH)) && void 0 !== LH ? LH : [], 4),
          rH = AH[1],
          SH = AH[2],
          hH = AH[3],
          tH = VH.parse(null !== rH && void 0 !== rH ? rH : ""),
          zH = VH.parse(null !== hH && void 0 !== hH ? hH : ""),
          CH = "*" === SH ? tH.multiply(zH) : tH.divide(zH);
        if (CH.isNaN()) return UH;
        BH = BH.replace(WH, CH.toString())
      }
      for (; BH.includes("+") || /.-\d+(?:\.\d+)?/.test(BH);) {
        var EH, XH = GH(null !== (EH = MH.exec(BH)) && void 0 !== EH ? EH : [], 4),
          YH = XH[1],
          uH = XH[2],
          QH = XH[3],
          xH = VH.parse(null !== YH && void 0 !== YH ? YH : ""),
          vH = VH.parse(null !== QH && void 0 !== QH ? QH : ""),
          PH = "+" === uH ? xH.add(vH) : xH.subtract(vH);
        if (PH.isNaN()) return UH;
        BH = BH.replace(MH, PH.toString())
      }
      return BH
    }
    var bH = /\(([^()]*)\)/;

    function kH(HH) {
      var BH = HH.replace(/\s+/g, "");
      return BH = function(HH) {
        for (var BH = HH; BH.includes("(");) {
          var LH = GH(bH.exec(BH), 2)[1];
          BH = BH.replace(bH, OH(LH))
        }
        return BH
      }(BH), BH = OH(BH)
    }

    function mH(HH) {
      var BH = function(HH) {
        try {
          return kH(HH)
        } catch (BH) {
          return UH
        }
      }(HH.slice(5, -1));
      return BH === UH ? "" : BH
    }
    var oH = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"],
      IH = ["dx", "dy", "angle", "className", "breakAll"];

    function fH() {
      return fH = Object.assign ? Object.assign.bind() : function(HH) {
        for (var BH = 1; BH < arguments.length; BH++) {
          var LH = arguments[BH];
          for (var AH in LH) Object.prototype.hasOwnProperty.call(LH, AH) && (HH[AH] = LH[AH])
        }
        return HH
      }, fH.apply(this, arguments)
    }

    function lH(HH, BH) {
      if (null == HH) return {};
      var LH, AH, rH = function(HH, BH) {
        if (null == HH) return {};
        var LH = {};
        for (var AH in HH)
          if (Object.prototype.hasOwnProperty.call(HH, AH)) {
            if (BH.indexOf(AH) >= 0) continue;
            LH[AH] = HH[AH]
          } return LH
      }(HH, BH);
      if (Object.getOwnPropertySymbols) {
        var SH = Object.getOwnPropertySymbols(HH);
        for (AH = 0; AH < SH.length; AH++) LH = SH[AH], BH.indexOf(LH) >= 0 || Object.prototype.propertyIsEnumerable.call(HH, LH) && (rH[LH] = HH[LH])
      }
      return rH
    }

    function KH(HH, BH) {
      return function(HH) {
        if (Array.isArray(HH)) return HH
      }(HH) || function(HH, BH) {
        var LH = null == HH ? null : "undefined" != typeof Symbol && HH[Symbol.iterator] || HH["@@iterator"];
        if (null != LH) {
          var AH, rH, SH, hH, tH = [],
            zH = !0,
            CH = !1;
          try {
            if (SH = (LH = LH.call(HH)).next, 0 === BH) {
              if (Object(LH) !== LH) return;
              zH = !1
            } else
              for (; !(zH = (AH = SH.call(LH)).done) && (tH.push(AH.value), tH.length !== BH); zH = !0);
          } catch (HH) {
            CH = !0, rH = HH
          } finally {
            try {
              if (!zH && null != LH.return && (hH = LH.return(), Object(hH) !== hH)) return
            } finally {
              if (CH) throw rH
            }
          }
          return tH
        }
      }(HH, BH) || function(HH, BH) {
        if (!HH) return;
        if ("string" === typeof HH) return cH(HH, BH);
        var LH = Object.prototype.toString.call(HH).slice(8, -1);
        "Object" === LH && HH.constructor && (LH = HH.constructor.name);
        if ("Map" === LH || "Set" === LH) return Array.from(HH);
        if ("Arguments" === LH || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(LH)) return cH(HH, BH)
      }(HH, BH) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function cH(HH, BH) {
      (null == BH || BH > HH.length) && (BH = HH.length);
      for (var LH = 0, AH = new Array(BH); LH < BH; LH++) AH[LH] = HH[LH];
      return AH
    }
    var eH = /[ \f\n\r\t\v\u2028\u2029]+/,
      qH = function(HH) {
        var BH = HH.children,
          LH = HH.breakAll,
          AH = HH.style;
        try {
          var rH = [];
          return SH()(BH) || (rH = LH ? BH.toString().split("") : BH.toString().split(eH)), {
            wordsWithComputedWidth: rH.map((function(HH) {
              return {
                word: HH,
                width: (0, EH.f)(HH, AH).width
              }
            })),
            spaceWidth: LH ? 0 : (0, EH.f)("\xa0", AH).width
          }
        } catch (hH) {
          return null
        }
      },
      gH = function(HH) {
        return [{
          words: SH()(HH) ? [] : HH.toString().split(eH)
        }]
      },
      NH = function(HH) {
        var BH = HH.width,
          LH = HH.scaleToFit,
          AH = HH.children,
          rH = HH.style,
          SH = HH.breakAll,
          hH = HH.maxLines;
        if ((BH || LH) && !zH.b.isSsr) {
          var CH = qH({
            breakAll: SH,
            children: AH,
            style: rH
          });
          return CH ? function(HH, BH, LH, AH, rH) {
            var SH = HH.maxLines,
              hH = HH.children,
              zH = HH.style,
              CH = HH.breakAll,
              EH = (0, tH.v)(SH),
              XH = hH,
              GH = function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce((function(HH, BH) {
                  var SH = BH.word,
                    hH = BH.width,
                    tH = HH[HH.length - 1];
                  if (tH && (null == AH || rH || tH.width + hH + LH < Number(AH))) tH.words.push(SH), tH.width += hH + LH;
                  else {
                    var zH = {
                      words: [SH],
                      width: hH
                    };
                    HH.push(zH)
                  }
                  return HH
                }), [])
              },
              YH = GH(BH);
            if (!EH) return YH;
            for (var uH, QH = function(HH) {
                var BH = XH.slice(0, HH),
                  LH = qH({
                    breakAll: CH,
                    style: zH,
                    children: BH + "\u2026"
                  }).wordsWithComputedWidth,
                  rH = GH(LH),
                  hH = rH.length > SH || function(HH) {
                    return HH.reduce((function(HH, BH) {
                      return HH.width > BH.width ? HH : BH
                    }))
                  }(rH).width > Number(AH);
                return [hH, rH]
              }, WH = 0, MH = XH.length - 1, xH = 0; WH <= MH && xH <= XH.length - 1;) {
              var vH = Math.floor((WH + MH) / 2),
                PH = KH(QH(vH - 1), 2),
                TH = PH[0],
                UH = PH[1],
                VH = KH(QH(vH), 1)[0];
              if (TH || VH || (WH = vH + 1), TH && VH && (MH = vH - 1), !TH && VH) {
                uH = UH;
                break
              }
              xH++
            }
            return uH || YH
          }({
            breakAll: SH,
            children: AH,
            maxLines: hH,
            style: rH
          }, CH.wordsWithComputedWidth, CH.spaceWidth, BH, LH) : gH(AH)
        }
        return gH(AH)
      },
      RH = "#808080",
      jH = function(HH) {
        var BH = HH.x,
          LH = void 0 === BH ? 0 : BH,
          rH = HH.y,
          SH = void 0 === rH ? 0 : rH,
          zH = HH.lineHeight,
          EH = void 0 === zH ? "1em" : zH,
          XH = HH.capHeight,
          GH = void 0 === XH ? "0.71em" : XH,
          YH = HH.scaleToFit,
          uH = void 0 !== YH && YH,
          QH = HH.textAnchor,
          WH = void 0 === QH ? "start" : QH,
          MH = HH.verticalAnchor,
          xH = void 0 === MH ? "end" : MH,
          vH = HH.fill,
          PH = void 0 === vH ? RH : vH,
          TH = lH(HH, oH),
          UH = (0, AH.useMemo)((function() {
            return NH({
              breakAll: TH.breakAll,
              children: TH.children,
              maxLines: TH.maxLines,
              scaleToFit: uH,
              style: TH.style,
              width: TH.width
            })
          }), [TH.breakAll, TH.children, TH.maxLines, uH, TH.style, TH.width]),
          VH = TH.dx,
          OH = TH.dy,
          bH = TH.angle,
          kH = TH.className,
          KH = TH.breakAll,
          cH = lH(TH, IH);
        if (!(0, tH.s)(LH) || !(0, tH.s)(SH)) return null;
        var eH, qH = LH + ((0, tH.v)(VH) ? VH : 0),
          gH = SH + ((0, tH.v)(OH) ? OH : 0);
        switch (xH) {
          case "start":
            eH = mH("calc(".concat(GH, ")"));
            break;
          case "middle":
            eH = mH("calc(".concat((UH.length - 1) / 2, " * -").concat(EH, " + (").concat(GH, " / 2))"));
            break;
          default:
            eH = mH("calc(".concat(UH.length - 1, " * -").concat(EH, ")"))
        }
        var jH = [];
        if (uH) {
          var nH = UH[0].width,
            FH = TH.width;
          jH.push("scale(".concat(((0, tH.v)(FH) ? FH / nH : 1) / nH, ")"))
        }
        return bH && jH.push("rotate(".concat(bH, ", ").concat(qH, ", ").concat(gH, ")")), jH.length && (cH.transform = jH.join(" ")), AH.createElement("text", fH({}, (0, CH.c)(cH, !0), {
          x: qH,
          y: gH,
          className: (0, hH.e)("recharts-text", kH),
          textAnchor: WH,
          fill: PH.includes("url") ? RH : PH
        }), UH.map((function(HH, BH) {
          var LH = HH.words.join(KH ? "" : " ");
          return AH.createElement("tspan", {
            x: qH,
            dy: 0 === BH ? eH : EH,
            key: "".concat(LH, "-").concat(BH)
          }, LH)
        })))
      }
  },
  6493: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => iH
    });
    var AH = LH(45),
      rH = LH(6028),
      SH = LH.n(rH),
      hH = LH(5951),
      tH = LH.n(hH),
      zH = LH(5582),
      CH = LH(5684);

    function EH(HH) {
      return EH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, EH(HH)
    }

    function XH() {
      return XH = Object.assign ? Object.assign.bind() : function(HH) {
        for (var BH = 1; BH < arguments.length; BH++) {
          var LH = arguments[BH];
          for (var AH in LH) Object.prototype.hasOwnProperty.call(LH, AH) && (HH[AH] = LH[AH])
        }
        return HH
      }, XH.apply(this, arguments)
    }

    function GH(HH, BH) {
      return function(HH) {
        if (Array.isArray(HH)) return HH
      }(HH) || function(HH, BH) {
        var LH = null == HH ? null : "undefined" != typeof Symbol && HH[Symbol.iterator] || HH["@@iterator"];
        if (null != LH) {
          var AH, rH, SH, hH, tH = [],
            zH = !0,
            CH = !1;
          try {
            if (SH = (LH = LH.call(HH)).next, 0 === BH) {
              if (Object(LH) !== LH) return;
              zH = !1
            } else
              for (; !(zH = (AH = SH.call(LH)).done) && (tH.push(AH.value), tH.length !== BH); zH = !0);
          } catch (HH) {
            CH = !0, rH = HH
          } finally {
            try {
              if (!zH && null != LH.return && (hH = LH.return(), Object(hH) !== hH)) return
            } finally {
              if (CH) throw rH
            }
          }
          return tH
        }
      }(HH, BH) || function(HH, BH) {
        if (!HH) return;
        if ("string" === typeof HH) return YH(HH, BH);
        var LH = Object.prototype.toString.call(HH).slice(8, -1);
        "Object" === LH && HH.constructor && (LH = HH.constructor.name);
        if ("Map" === LH || "Set" === LH) return Array.from(HH);
        if ("Arguments" === LH || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(LH)) return YH(HH, BH)
      }(HH, BH) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function YH(HH, BH) {
      (null == BH || BH > HH.length) && (BH = HH.length);
      for (var LH = 0, AH = new Array(BH); LH < BH; LH++) AH[LH] = HH[LH];
      return AH
    }

    function uH(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function QH(HH) {
      for (var BH = 1; BH < arguments.length; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? uH(Object(LH), !0).forEach((function(BH) {
          WH(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : uH(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }

    function WH(HH, BH, LH) {
      return (BH = function(HH) {
        var BH = function(HH, BH) {
          if ("object" != EH(HH) || !HH) return HH;
          var LH = HH[Symbol.toPrimitive];
          if (void 0 !== LH) {
            var AH = LH.call(HH, BH || "default");
            if ("object" != EH(AH)) return AH;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === BH ? String : Number)(HH)
        }(HH, "string");
        return "symbol" == EH(BH) ? BH : BH + ""
      }(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }

    function MH(HH) {
      return Array.isArray(HH) && (0, CH.s)(HH[0]) && (0, CH.s)(HH[1]) ? HH.join(" ~ ") : HH
    }
    var xH = function(HH) {
      var BH = HH.separator,
        LH = void 0 === BH ? " : " : BH,
        rH = HH.contentStyle,
        hH = void 0 === rH ? {} : rH,
        EH = HH.itemStyle,
        YH = void 0 === EH ? {} : EH,
        uH = HH.labelStyle,
        WH = void 0 === uH ? {} : uH,
        xH = HH.payload,
        vH = HH.formatter,
        PH = HH.itemSorter,
        TH = HH.wrapperClassName,
        UH = HH.labelClassName,
        VH = HH.label,
        OH = HH.labelFormatter,
        bH = HH.accessibilityLayer,
        kH = void 0 !== bH && bH,
        mH = QH({
          margin: 0,
          padding: 10,
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          whiteSpace: "nowrap"
        }, hH),
        oH = QH({
          margin: 0
        }, WH),
        IH = !tH()(VH),
        fH = IH ? VH : "",
        lH = (0, zH.e)("recharts-default-tooltip", TH),
        KH = (0, zH.e)("recharts-tooltip-label", UH);
      IH && OH && void 0 !== xH && null !== xH && (fH = OH(VH, xH));
      var cH = kH ? {
        role: "status",
        "aria-live": "assertive"
      } : {};
      return AH.createElement("div", XH({
        className: lH,
        style: mH
      }, cH), AH.createElement("p", {
        className: KH,
        style: oH
      }, AH.isValidElement(fH) ? fH : "".concat(fH)), function() {
        if (xH && xH.length) {
          var HH = (PH ? SH()(xH, PH) : xH).map((function(HH, BH) {
            if ("none" === HH.type) return null;
            var rH = QH({
                display: "block",
                paddingTop: 4,
                paddingBottom: 4,
                color: HH.color || "#000"
              }, YH),
              SH = HH.formatter || vH || MH,
              hH = HH.value,
              tH = HH.name,
              zH = hH,
              EH = tH;
            if (SH && null != zH && null != EH) {
              var XH = SH(hH, tH, HH, BH, xH);
              if (Array.isArray(XH)) {
                var uH = GH(XH, 2);
                zH = uH[0], EH = uH[1]
              } else zH = XH
            }
            return AH.createElement("li", {
              className: "recharts-tooltip-item",
              key: "tooltip-item-".concat(BH),
              style: rH
            }, (0, CH.s)(EH) ? AH.createElement("span", {
              className: "recharts-tooltip-item-name"
            }, EH) : null, (0, CH.s)(EH) ? AH.createElement("span", {
              className: "recharts-tooltip-item-separator"
            }, LH) : null, AH.createElement("span", {
              className: "recharts-tooltip-item-value"
            }, zH), AH.createElement("span", {
              className: "recharts-tooltip-item-unit"
            }, HH.unit || ""))
          }));
          return AH.createElement("ul", {
            className: "recharts-tooltip-item-list",
            style: {
              padding: 0,
              margin: 0
            }
          }, HH)
        }
        return null
      }())
    };

    function vH(HH) {
      return vH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, vH(HH)
    }

    function PH(HH, BH, LH) {
      return (BH = function(HH) {
        var BH = function(HH, BH) {
          if ("object" != vH(HH) || !HH) return HH;
          var LH = HH[Symbol.toPrimitive];
          if (void 0 !== LH) {
            var AH = LH.call(HH, BH || "default");
            if ("object" != vH(AH)) return AH;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === BH ? String : Number)(HH)
        }(HH, "string");
        return "symbol" == vH(BH) ? BH : BH + ""
      }(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }
    var TH = "recharts-tooltip-wrapper",
      UH = {
        visibility: "hidden"
      };

    function VH(HH) {
      var BH = HH.coordinate,
        LH = HH.translateX,
        AH = HH.translateY;
      return (0, zH.e)(TH, PH(PH(PH(PH({}, "".concat(TH, "-right"), (0, CH.v)(LH) && BH && (0, CH.v)(BH.x) && LH >= BH.x), "".concat(TH, "-left"), (0, CH.v)(LH) && BH && (0, CH.v)(BH.x) && LH < BH.x), "".concat(TH, "-bottom"), (0, CH.v)(AH) && BH && (0, CH.v)(BH.y) && AH >= BH.y), "".concat(TH, "-top"), (0, CH.v)(AH) && BH && (0, CH.v)(BH.y) && AH < BH.y))
    }

    function OH(HH) {
      var BH = HH.allowEscapeViewBox,
        LH = HH.coordinate,
        AH = HH.key,
        rH = HH.offsetTopLeft,
        SH = HH.position,
        hH = HH.reverseDirection,
        tH = HH.tooltipDimension,
        zH = HH.viewBox,
        EH = HH.viewBoxDimension;
      if (SH && (0, CH.v)(SH[AH])) return SH[AH];
      var XH = LH[AH] - tH - rH,
        GH = LH[AH] + rH;
      return BH[AH] ? hH[AH] ? XH : GH : hH[AH] ? XH < zH[AH] ? Math.max(GH, zH[AH]) : Math.max(XH, zH[AH]) : GH + tH > zH[AH] + EH ? Math.max(XH, zH[AH]) : Math.max(GH, zH[AH])
    }

    function bH(HH) {
      return bH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, bH(HH)
    }

    function kH(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function mH(HH) {
      for (var BH = 1; BH < arguments.length; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? kH(Object(LH), !0).forEach((function(BH) {
          cH(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : kH(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }

    function oH(HH, BH) {
      for (var LH = 0; LH < BH.length; LH++) {
        var AH = BH[LH];
        AH.enumerable = AH.enumerable || !1, AH.configurable = !0, "value" in AH && (AH.writable = !0), Object.defineProperty(HH, eH(AH.key), AH)
      }
    }

    function IH(HH, BH, LH) {
      return BH = lH(BH),
        function(HH, BH) {
          if (BH && ("object" === bH(BH) || "function" === typeof BH)) return BH;
          if (void 0 !== BH) throw new TypeError("Derived constructors may only return object or undefined");
          return function(HH) {
            if (void 0 === HH) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return HH
          }(HH)
        }(HH, fH() ? Reflect.construct(BH, LH || [], lH(HH).constructor) : BH.apply(HH, LH))
    }

    function fH() {
      try {
        var HH = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (HH) {}
      return (fH = function() {
        return !!HH
      })()
    }

    function lH(HH) {
      return lH = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(HH) {
        return HH.__proto__ || Object.getPrototypeOf(HH)
      }, lH(HH)
    }

    function KH(HH, BH) {
      return KH = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(HH, BH) {
        return HH.__proto__ = BH, HH
      }, KH(HH, BH)
    }

    function cH(HH, BH, LH) {
      return (BH = eH(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }

    function eH(HH) {
      var BH = function(HH, BH) {
        if ("object" != bH(HH) || !HH) return HH;
        var LH = HH[Symbol.toPrimitive];
        if (void 0 !== LH) {
          var AH = LH.call(HH, BH || "default");
          if ("object" != bH(AH)) return AH;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === BH ? String : Number)(HH)
      }(HH, "string");
      return "symbol" == bH(BH) ? BH : BH + ""
    }
    var qH = function(HH) {
        function BH() {
          var HH;
          ! function(HH, BH) {
            if (!(HH instanceof BH)) throw new TypeError("Cannot call a class as a function")
          }(this, BH);
          for (var LH = arguments.length, AH = new Array(LH), rH = 0; rH < LH; rH++) AH[rH] = arguments[rH];
          return cH(HH = IH(this, BH, [].concat(AH)), "state", {
            dismissed: !1,
            dismissedAtCoordinate: {
              x: 0,
              y: 0
            },
            lastBoundingBox: {
              width: -1,
              height: -1
            }
          }), cH(HH, "handleKeyDown", (function(BH) {
            var LH, AH, rH, SH;
            "Escape" === BH.key && HH.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x: null !== (LH = null === (AH = HH.props.coordinate) || void 0 === AH ? void 0 : AH.x) && void 0 !== LH ? LH : 0,
                y: null !== (rH = null === (SH = HH.props.coordinate) || void 0 === SH ? void 0 : SH.y) && void 0 !== rH ? rH : 0
              }
            })
          })), HH
        }
        return function(HH, BH) {
          if ("function" !== typeof BH && null !== BH) throw new TypeError("Super expression must either be null or a function");
          HH.prototype = Object.create(BH && BH.prototype, {
            constructor: {
              value: HH,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(HH, "prototype", {
            writable: !1
          }), BH && KH(HH, BH)
        }(BH, HH), LH = BH, (rH = [{
          key: "updateBBox",
          value: function() {
            if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
              var HH = this.wrapperNode.getBoundingClientRect();
              (Math.abs(HH.width - this.state.lastBoundingBox.width) > 1 || Math.abs(HH.height - this.state.lastBoundingBox.height) > 1) && this.setState({
                lastBoundingBox: {
                  width: HH.width,
                  height: HH.height
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
            var HH, BH;
            this.props.active && this.updateBBox(), this.state.dismissed && ((null === (HH = this.props.coordinate) || void 0 === HH ? void 0 : HH.x) === this.state.dismissedAtCoordinate.x && (null === (BH = this.props.coordinate) || void 0 === BH ? void 0 : BH.y) === this.state.dismissedAtCoordinate.y || (this.state.dismissed = !1))
          }
        }, {
          key: "render",
          value: function() {
            var HH = this,
              BH = this.props,
              LH = BH.active,
              rH = BH.allowEscapeViewBox,
              SH = BH.animationDuration,
              hH = BH.animationEasing,
              tH = BH.children,
              zH = BH.coordinate,
              CH = BH.hasPayload,
              EH = BH.isAnimationActive,
              XH = BH.offset,
              GH = BH.position,
              YH = BH.reverseDirection,
              uH = BH.useTranslate3d,
              QH = BH.viewBox,
              WH = BH.wrapperStyle,
              MH = function(HH) {
                var BH, LH, AH = HH.allowEscapeViewBox,
                  rH = HH.coordinate,
                  SH = HH.offsetTopLeft,
                  hH = HH.position,
                  tH = HH.reverseDirection,
                  zH = HH.tooltipBox,
                  CH = HH.useTranslate3d,
                  EH = HH.viewBox;
                return {
                  cssProperties: zH.height > 0 && zH.width > 0 && rH ? function(HH) {
                    var BH = HH.translateX,
                      LH = HH.translateY;
                    return {
                      transform: HH.useTranslate3d ? "translate3d(".concat(BH, "px, ").concat(LH, "px, 0)") : "translate(".concat(BH, "px, ").concat(LH, "px)")
                    }
                  }({
                    translateX: BH = OH({
                      allowEscapeViewBox: AH,
                      coordinate: rH,
                      key: "x",
                      offsetTopLeft: SH,
                      position: hH,
                      reverseDirection: tH,
                      tooltipDimension: zH.width,
                      viewBox: EH,
                      viewBoxDimension: EH.width
                    }),
                    translateY: LH = OH({
                      allowEscapeViewBox: AH,
                      coordinate: rH,
                      key: "y",
                      offsetTopLeft: SH,
                      position: hH,
                      reverseDirection: tH,
                      tooltipDimension: zH.height,
                      viewBox: EH,
                      viewBoxDimension: EH.height
                    }),
                    useTranslate3d: CH
                  }) : UH,
                  cssClasses: VH({
                    translateX: BH,
                    translateY: LH,
                    coordinate: rH
                  })
                }
              }({
                allowEscapeViewBox: rH,
                coordinate: zH,
                offsetTopLeft: XH,
                position: GH,
                reverseDirection: YH,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: uH,
                viewBox: QH
              }),
              xH = MH.cssClasses,
              vH = MH.cssProperties,
              PH = mH(mH({
                transition: EH && LH ? "transform ".concat(SH, "ms ").concat(hH) : void 0
              }, vH), {}, {
                pointerEvents: "none",
                visibility: !this.state.dismissed && LH && CH ? "visible" : "hidden",
                position: "absolute",
                top: 0,
                left: 0
              }, WH);
            return AH.createElement("div", {
              tabIndex: -1,
              className: xH,
              style: PH,
              ref: function(BH) {
                HH.wrapperNode = BH
              }
            }, tH)
          }
        }]) && oH(LH.prototype, rH), SH && oH(LH, SH), Object.defineProperty(LH, "prototype", {
          writable: !1
        }), LH;
        var LH, rH, SH
      }(AH.PureComponent),
      gH = LH(6497),
      NH = LH(6503);

    function RH(HH) {
      return RH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, RH(HH)
    }

    function jH(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function nH(HH) {
      for (var BH = 1; BH < arguments.length; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? jH(Object(LH), !0).forEach((function(BH) {
          aH(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : jH(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }

    function FH(HH, BH) {
      for (var LH = 0; LH < BH.length; LH++) {
        var AH = BH[LH];
        AH.enumerable = AH.enumerable || !1, AH.configurable = !0, "value" in AH && (AH.writable = !0), Object.defineProperty(HH, sH(AH.key), AH)
      }
    }

    function DH(HH, BH, LH) {
      return BH = ZH(BH),
        function(HH, BH) {
          if (BH && ("object" === RH(BH) || "function" === typeof BH)) return BH;
          if (void 0 !== BH) throw new TypeError("Derived constructors may only return object or undefined");
          return function(HH) {
            if (void 0 === HH) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return HH
          }(HH)
        }(HH, wH() ? Reflect.construct(BH, LH || [], ZH(HH).constructor) : BH.apply(HH, LH))
    }

    function wH() {
      try {
        var HH = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (HH) {}
      return (wH = function() {
        return !!HH
      })()
    }

    function ZH(HH) {
      return ZH = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(HH) {
        return HH.__proto__ || Object.getPrototypeOf(HH)
      }, ZH(HH)
    }

    function dH(HH, BH) {
      return dH = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(HH, BH) {
        return HH.__proto__ = BH, HH
      }, dH(HH, BH)
    }

    function aH(HH, BH, LH) {
      return (BH = sH(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }

    function sH(HH) {
      var BH = function(HH, BH) {
        if ("object" != RH(HH) || !HH) return HH;
        var LH = HH[Symbol.toPrimitive];
        if (void 0 !== LH) {
          var AH = LH.call(HH, BH || "default");
          if ("object" != RH(AH)) return AH;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === BH ? String : Number)(HH)
      }(HH, "string");
      return "symbol" == RH(BH) ? BH : BH + ""
    }

    function JH(HH) {
      return HH.dataKey
    }
    var iH = function(HH) {
      function BH() {
        return function(HH, BH) {
          if (!(HH instanceof BH)) throw new TypeError("Cannot call a class as a function")
        }(this, BH), DH(this, BH, arguments)
      }
      return function(HH, BH) {
        if ("function" !== typeof BH && null !== BH) throw new TypeError("Super expression must either be null or a function");
        HH.prototype = Object.create(BH && BH.prototype, {
          constructor: {
            value: HH,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(HH, "prototype", {
          writable: !1
        }), BH && dH(HH, BH)
      }(BH, HH), LH = BH, (rH = [{
        key: "render",
        value: function() {
          var HH = this,
            BH = this.props,
            LH = BH.active,
            rH = BH.allowEscapeViewBox,
            SH = BH.animationDuration,
            hH = BH.animationEasing,
            tH = BH.content,
            zH = BH.coordinate,
            CH = BH.filterNull,
            EH = BH.isAnimationActive,
            XH = BH.offset,
            GH = BH.payload,
            YH = BH.payloadUniqBy,
            uH = BH.position,
            QH = BH.reverseDirection,
            WH = BH.useTranslate3d,
            MH = BH.viewBox,
            vH = BH.wrapperStyle,
            PH = null !== GH && void 0 !== GH ? GH : [];
          CH && PH.length && (PH = (0, NH.c)(GH.filter((function(BH) {
            return null != BH.value && (!0 !== BH.hide || HH.props.includeHidden)
          })), YH, JH));
          var TH = PH.length > 0;
          return AH.createElement(qH, {
            allowEscapeViewBox: rH,
            animationDuration: SH,
            animationEasing: hH,
            isAnimationActive: EH,
            active: LH,
            coordinate: zH,
            hasPayload: TH,
            offset: XH,
            position: uH,
            reverseDirection: QH,
            useTranslate3d: WH,
            viewBox: MH,
            wrapperStyle: vH
          }, function(HH, BH) {
            return AH.isValidElement(HH) ? AH.cloneElement(HH, BH) : "function" === typeof HH ? AH.createElement(HH, BH) : AH.createElement(xH, BH)
          }(tH, nH(nH({}, this.props), {}, {
            payload: PH
          })))
        }
      }]) && FH(LH.prototype, rH), SH && FH(LH, SH), Object.defineProperty(LH, "prototype", {
        writable: !1
      }), LH;
      var LH, rH, SH
    }(AH.PureComponent);
    aH(iH, "displayName", "Tooltip"), aH(iH, "defaultProps", {
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
      isAnimationActive: !gH.b.isSsr,
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
  6489: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => CH
    });
    var AH = LH(45),
      rH = LH(5582),
      SH = LH(5960),
      hH = ["children", "className"];

    function tH() {
      return tH = Object.assign ? Object.assign.bind() : function(HH) {
        for (var BH = 1; BH < arguments.length; BH++) {
          var LH = arguments[BH];
          for (var AH in LH) Object.prototype.hasOwnProperty.call(LH, AH) && (HH[AH] = LH[AH])
        }
        return HH
      }, tH.apply(this, arguments)
    }

    function zH(HH, BH) {
      if (null == HH) return {};
      var LH, AH, rH = function(HH, BH) {
        if (null == HH) return {};
        var LH = {};
        for (var AH in HH)
          if (Object.prototype.hasOwnProperty.call(HH, AH)) {
            if (BH.indexOf(AH) >= 0) continue;
            LH[AH] = HH[AH]
          } return LH
      }(HH, BH);
      if (Object.getOwnPropertySymbols) {
        var SH = Object.getOwnPropertySymbols(HH);
        for (AH = 0; AH < SH.length; AH++) LH = SH[AH], BH.indexOf(LH) >= 0 || Object.prototype.propertyIsEnumerable.call(HH, LH) && (rH[LH] = HH[LH])
      }
      return rH
    }
    var CH = AH.forwardRef((function(HH, BH) {
      var LH = HH.children,
        CH = HH.className,
        EH = zH(HH, hH),
        XH = (0, rH.e)("recharts-layer", CH);
      return AH.createElement("g", tH({
        className: XH
      }, (0, SH.c)(EH, !0), {
        ref: BH
      }), LH)
    }))
  },
  6480: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => CH
    });
    var AH = LH(45),
      rH = LH(5582),
      SH = LH(5960),
      hH = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];

    function tH() {
      return tH = Object.assign ? Object.assign.bind() : function(HH) {
        for (var BH = 1; BH < arguments.length; BH++) {
          var LH = arguments[BH];
          for (var AH in LH) Object.prototype.hasOwnProperty.call(LH, AH) && (HH[AH] = LH[AH])
        }
        return HH
      }, tH.apply(this, arguments)
    }

    function zH(HH, BH) {
      if (null == HH) return {};
      var LH, AH, rH = function(HH, BH) {
        if (null == HH) return {};
        var LH = {};
        for (var AH in HH)
          if (Object.prototype.hasOwnProperty.call(HH, AH)) {
            if (BH.indexOf(AH) >= 0) continue;
            LH[AH] = HH[AH]
          } return LH
      }(HH, BH);
      if (Object.getOwnPropertySymbols) {
        var SH = Object.getOwnPropertySymbols(HH);
        for (AH = 0; AH < SH.length; AH++) LH = SH[AH], BH.indexOf(LH) >= 0 || Object.prototype.propertyIsEnumerable.call(HH, LH) && (rH[LH] = HH[LH])
      }
      return rH
    }

    function CH(HH) {
      var BH = HH.children,
        LH = HH.width,
        CH = HH.height,
        EH = HH.viewBox,
        XH = HH.className,
        GH = HH.style,
        YH = HH.title,
        uH = HH.desc,
        QH = zH(HH, hH),
        WH = EH || {
          width: LH,
          height: CH,
          x: 0,
          y: 0
        },
        MH = (0, rH.e)("recharts-surface", XH);
      return AH.createElement("svg", tH({}, (0, SH.c)(QH, !0, "svg"), {
        className: MH,
        width: LH,
        height: CH,
        style: GH,
        viewBox: "".concat(WH.x, " ").concat(WH.y, " ").concat(WH.width, " ").concat(WH.height)
      }), AH.createElement("title", null, YH), AH.createElement("desc", null, uH), BH)
    }
  },
  6870: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => vH,
      f: () => UH,
      g: () => oH,
      j: () => mH,
      k: () => PH,
      n: () => kH,
      q: () => bH,
      s: () => TH,
      v: () => OH,
      y: () => VH
    });
    var AH = LH(45),
      rH = LH(6471),
      SH = LH(6872),
      hH = LH.n(SH),
      tH = LH(6791),
      zH = LH.n(tH),
      CH = LH(5743),
      EH = LH.n(CH)()((function(HH) {
        return {
          x: HH.left,
          y: HH.top,
          width: HH.width,
          height: HH.height
        }
      }), (function(HH) {
        return ["l", HH.left, "t", HH.top, "w", HH.width, "h", HH.height].join("")
      })),
      XH = LH(5684);
    var GH = (0, AH.createContext)(void 0),
      YH = (0, AH.createContext)(void 0),
      uH = (0, AH.createContext)(void 0),
      QH = (0, AH.createContext)({}),
      WH = (0, AH.createContext)(void 0),
      MH = (0, AH.createContext)(0),
      xH = (0, AH.createContext)(0),
      vH = function(HH) {
        var BH = HH.state,
          LH = BH.xAxisMap,
          rH = BH.yAxisMap,
          SH = BH.offset,
          hH = HH.clipPathId,
          tH = HH.children,
          zH = HH.width,
          CH = HH.height,
          XH = EH(SH);
        return AH.createElement(GH.Provider, {
          value: LH
        }, AH.createElement(YH.Provider, {
          value: rH
        }, AH.createElement(QH.Provider, {
          value: SH
        }, AH.createElement(uH.Provider, {
          value: XH
        }, AH.createElement(WH.Provider, {
          value: hH
        }, AH.createElement(MH.Provider, {
          value: CH
        }, AH.createElement(xH.Provider, {
          value: zH
        }, tH)))))))
      },
      PH = function() {
        return (0, AH.useContext)(WH)
      };
    var TH = function(HH) {
        var BH = (0, AH.useContext)(GH);
        null == BH && (0, rH.c)(!1);
        var LH = BH[HH];
        return null == LH && (0, rH.c)(!1), LH
      },
      UH = function() {
        var HH = (0, AH.useContext)(GH);
        return (0, XH.h)(HH)
      },
      VH = function() {
        var HH = (0, AH.useContext)(YH);
        return hH()(HH, (function(HH) {
          return zH()(HH.domain, Number.isFinite)
        })) || (0, XH.h)(HH)
      },
      OH = function(HH) {
        var BH = (0, AH.useContext)(YH);
        null == BH && (0, rH.c)(!1);
        var LH = BH[HH];
        return null == LH && (0, rH.c)(!1), LH
      },
      bH = function() {
        return (0, AH.useContext)(uH)
      },
      kH = function() {
        return (0, AH.useContext)(QH)
      },
      mH = function() {
        return (0, AH.useContext)(xH)
      },
      oH = function() {
        return (0, AH.useContext)(MH)
      }
  },
  6901: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => JH
    });
    var AH = LH(45);

    function rH() {}

    function SH(HH, BH, LH) {
      HH._context.bezierCurveTo((2 * HH._x0 + HH._x1) / 3, (2 * HH._y0 + HH._y1) / 3, (HH._x0 + 2 * HH._x1) / 3, (HH._y0 + 2 * HH._y1) / 3, (HH._x0 + 4 * HH._x1 + BH) / 6, (HH._y0 + 4 * HH._y1 + LH) / 6)
    }

    function hH(HH) {
      this._context = HH
    }

    function tH(HH) {
      this._context = HH
    }

    function zH(HH) {
      this._context = HH
    }
    hH.prototype = {
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
            SH(this, this._x1, this._y1);
          case 2:
            this._context.lineTo(this._x1, this._y1)
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(HH, BH) {
        switch (HH = +HH, BH = +BH, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(HH, BH) : this._context.moveTo(HH, BH);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
          default:
            SH(this, HH, BH)
        }
        this._x0 = this._x1, this._x1 = HH, this._y0 = this._y1, this._y1 = BH
      }
    }, tH.prototype = {
      areaStart: rH,
      areaEnd: rH,
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
      point: function(HH, BH) {
        switch (HH = +HH, BH = +BH, this._point) {
          case 0:
            this._point = 1, this._x2 = HH, this._y2 = BH;
            break;
          case 1:
            this._point = 2, this._x3 = HH, this._y3 = BH;
            break;
          case 2:
            this._point = 3, this._x4 = HH, this._y4 = BH, this._context.moveTo((this._x0 + 4 * this._x1 + HH) / 6, (this._y0 + 4 * this._y1 + BH) / 6);
            break;
          default:
            SH(this, HH, BH)
        }
        this._x0 = this._x1, this._x1 = HH, this._y0 = this._y1, this._y1 = BH
      }
    }, zH.prototype = {
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
      point: function(HH, BH) {
        switch (HH = +HH, BH = +BH, this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var LH = (this._x0 + 4 * this._x1 + HH) / 6,
              AH = (this._y0 + 4 * this._y1 + BH) / 6;
            this._line ? this._context.lineTo(LH, AH) : this._context.moveTo(LH, AH);
            break;
          case 3:
            this._point = 4;
          default:
            SH(this, HH, BH)
        }
        this._x0 = this._x1, this._x1 = HH, this._y0 = this._y1, this._y1 = BH
      }
    };
    class CH {
      constructor(HH, BH) {
        this._context = HH, this._x = BH
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
      point(HH, BH) {
        switch (HH = +HH, BH = +BH, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(HH, BH) : this._context.moveTo(HH, BH);
            break;
          case 1:
            this._point = 2;
          default:
            this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + HH) / 2, this._y0, this._x0, BH, HH, BH) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + BH) / 2, HH, this._y0, HH, BH)
        }
        this._x0 = HH, this._y0 = BH
      }
    }

    function EH(HH) {
      this._context = HH
    }

    function XH(HH) {
      this._context = HH
    }

    function GH(HH) {
      return new XH(HH)
    }

    function YH(HH) {
      return HH < 0 ? -1 : 1
    }

    function uH(HH, BH, LH) {
      var AH = HH._x1 - HH._x0,
        rH = BH - HH._x1,
        SH = (HH._y1 - HH._y0) / (AH || rH < 0 && -0),
        hH = (LH - HH._y1) / (rH || AH < 0 && -0),
        tH = (SH * rH + hH * AH) / (AH + rH);
      return (YH(SH) + YH(hH)) * Math.min(Math.abs(SH), Math.abs(hH), .5 * Math.abs(tH)) || 0
    }

    function QH(HH, BH) {
      var LH = HH._x1 - HH._x0;
      return LH ? (3 * (HH._y1 - HH._y0) / LH - BH) / 2 : BH
    }

    function WH(HH, BH, LH) {
      var AH = HH._x0,
        rH = HH._y0,
        SH = HH._x1,
        hH = HH._y1,
        tH = (SH - AH) / 3;
      HH._context.bezierCurveTo(AH + tH, rH + tH * BH, SH - tH, hH - tH * LH, SH, hH)
    }

    function MH(HH) {
      this._context = HH
    }

    function xH(HH) {
      this._context = new vH(HH)
    }

    function vH(HH) {
      this._context = HH
    }

    function PH(HH) {
      this._context = HH
    }

    function TH(HH) {
      var BH, LH, AH = HH.length - 1,
        rH = new Array(AH),
        SH = new Array(AH),
        hH = new Array(AH);
      for (rH[0] = 0, SH[0] = 2, hH[0] = HH[0] + 2 * HH[1], BH = 1; BH < AH - 1; ++BH) rH[BH] = 1, SH[BH] = 4, hH[BH] = 4 * HH[BH] + 2 * HH[BH + 1];
      for (rH[AH - 1] = 2, SH[AH - 1] = 7, hH[AH - 1] = 8 * HH[AH - 1] + HH[AH], BH = 1; BH < AH; ++BH) LH = rH[BH] / SH[BH - 1], SH[BH] -= LH, hH[BH] -= LH * hH[BH - 1];
      for (rH[AH - 1] = hH[AH - 1] / SH[AH - 1], BH = AH - 2; BH >= 0; --BH) rH[BH] = (hH[BH] - rH[BH + 1]) / SH[BH];
      for (SH[AH - 1] = (HH[AH] + rH[AH - 1]) / 2, BH = 0; BH < AH - 1; ++BH) SH[BH] = 2 * HH[BH + 1] - rH[BH + 1];
      return [rH, SH]
    }

    function UH(HH, BH) {
      this._context = HH, this._t = BH
    }
    EH.prototype = {
      areaStart: rH,
      areaEnd: rH,
      lineStart: function() {
        this._point = 0
      },
      lineEnd: function() {
        this._point && this._context.closePath()
      },
      point: function(HH, BH) {
        HH = +HH, BH = +BH, this._point ? this._context.lineTo(HH, BH) : (this._point = 1, this._context.moveTo(HH, BH))
      }
    }, XH.prototype = {
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
      point: function(HH, BH) {
        switch (HH = +HH, BH = +BH, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(HH, BH) : this._context.moveTo(HH, BH);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(HH, BH)
        }
      }
    }, MH.prototype = {
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
            WH(this, this._t0, QH(this, this._t0))
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(HH, BH) {
        var LH = NaN;
        if (BH = +BH, (HH = +HH) !== this._x1 || BH !== this._y1) {
          switch (this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(HH, BH) : this._context.moveTo(HH, BH);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3, WH(this, QH(this, LH = uH(this, HH, BH)), LH);
              break;
            default:
              WH(this, this._t0, LH = uH(this, HH, BH))
          }
          this._x0 = this._x1, this._x1 = HH, this._y0 = this._y1, this._y1 = BH, this._t0 = LH
        }
      }
    }, (xH.prototype = Object.create(MH.prototype)).point = function(HH, BH) {
      MH.prototype.point.call(this, BH, HH)
    }, vH.prototype = {
      moveTo: function(HH, BH) {
        this._context.moveTo(BH, HH)
      },
      closePath: function() {
        this._context.closePath()
      },
      lineTo: function(HH, BH) {
        this._context.lineTo(BH, HH)
      },
      bezierCurveTo: function(HH, BH, LH, AH, rH, SH) {
        this._context.bezierCurveTo(BH, HH, AH, LH, SH, rH)
      }
    }, PH.prototype = {
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
        var HH = this._x,
          BH = this._y,
          LH = HH.length;
        if (LH)
          if (this._line ? this._context.lineTo(HH[0], BH[0]) : this._context.moveTo(HH[0], BH[0]), 2 === LH) this._context.lineTo(HH[1], BH[1]);
          else
            for (var AH = TH(HH), rH = TH(BH), SH = 0, hH = 1; hH < LH; ++SH, ++hH) this._context.bezierCurveTo(AH[0][SH], rH[0][SH], AH[1][SH], rH[1][SH], HH[hH], BH[hH]);
        (this._line || 0 !== this._line && 1 === LH) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
      },
      point: function(HH, BH) {
        this._x.push(+HH), this._y.push(+BH)
      }
    }, UH.prototype = {
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
      point: function(HH, BH) {
        switch (HH = +HH, BH = +BH, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(HH, BH) : this._context.moveTo(HH, BH);
            break;
          case 1:
            this._point = 2;
          default:
            if (this._t <= 0) this._context.lineTo(this._x, BH), this._context.lineTo(HH, BH);
            else {
              var LH = this._x * (1 - this._t) + HH * this._t;
              this._context.lineTo(LH, this._y), this._context.lineTo(LH, BH)
            }
        }
        this._x = HH, this._y = BH
      }
    };
    var VH = LH(6748),
      OH = LH(6625),
      bH = LH(6634);

    function kH(HH) {
      return HH[0]
    }

    function mH(HH) {
      return HH[1]
    }

    function oH(HH, BH) {
      var LH = (0, OH.d)(!0),
        AH = null,
        rH = GH,
        SH = null,
        hH = (0, bH.c)(tH);

      function tH(tH) {
        var zH, CH, EH, XH = (tH = (0, VH.e)(tH)).length,
          GH = !1;
        for (null == AH && (SH = rH(EH = hH())), zH = 0; zH <= XH; ++zH) !(zH < XH && LH(CH = tH[zH], zH, tH)) === GH && ((GH = !GH) ? SH.lineStart() : SH.lineEnd()), GH && SH.point(+HH(CH, zH, tH), +BH(CH, zH, tH));
        if (EH) return SH = null, EH + "" || null
      }
      return HH = "function" === typeof HH ? HH : void 0 === HH ? kH : (0, OH.d)(HH), BH = "function" === typeof BH ? BH : void 0 === BH ? mH : (0, OH.d)(BH), tH.x = function(BH) {
        return arguments.length ? (HH = "function" === typeof BH ? BH : (0, OH.d)(+BH), tH) : HH
      }, tH.y = function(HH) {
        return arguments.length ? (BH = "function" === typeof HH ? HH : (0, OH.d)(+HH), tH) : BH
      }, tH.defined = function(HH) {
        return arguments.length ? (LH = "function" === typeof HH ? HH : (0, OH.d)(!!HH), tH) : LH
      }, tH.curve = function(HH) {
        return arguments.length ? (rH = HH, null != AH && (SH = rH(AH)), tH) : rH
      }, tH.context = function(HH) {
        return arguments.length ? (null == HH ? AH = SH = null : SH = rH(AH = HH), tH) : AH
      }, tH
    }

    function IH(HH, BH, LH) {
      var AH = null,
        rH = (0, OH.d)(!0),
        SH = null,
        hH = GH,
        tH = null,
        zH = (0, bH.c)(CH);

      function CH(CH) {
        var EH, XH, GH, YH, uH, QH = (CH = (0, VH.e)(CH)).length,
          WH = !1,
          MH = new Array(QH),
          xH = new Array(QH);
        for (null == SH && (tH = hH(uH = zH())), EH = 0; EH <= QH; ++EH) {
          if (!(EH < QH && rH(YH = CH[EH], EH, CH)) === WH)
            if (WH = !WH) XH = EH, tH.areaStart(), tH.lineStart();
            else {
              for (tH.lineEnd(), tH.lineStart(), GH = EH - 1; GH >= XH; --GH) tH.point(MH[GH], xH[GH]);
              tH.lineEnd(), tH.areaEnd()
            } WH && (MH[EH] = +HH(YH, EH, CH), xH[EH] = +BH(YH, EH, CH), tH.point(AH ? +AH(YH, EH, CH) : MH[EH], LH ? +LH(YH, EH, CH) : xH[EH]))
        }
        if (uH) return tH = null, uH + "" || null
      }

      function EH() {
        return oH().defined(rH).curve(hH).context(SH)
      }
      return HH = "function" === typeof HH ? HH : void 0 === HH ? kH : (0, OH.d)(+HH), BH = "function" === typeof BH ? BH : void 0 === BH ? (0, OH.d)(0) : (0, OH.d)(+BH), LH = "function" === typeof LH ? LH : void 0 === LH ? mH : (0, OH.d)(+LH), CH.x = function(BH) {
        return arguments.length ? (HH = "function" === typeof BH ? BH : (0, OH.d)(+BH), AH = null, CH) : HH
      }, CH.x0 = function(BH) {
        return arguments.length ? (HH = "function" === typeof BH ? BH : (0, OH.d)(+BH), CH) : HH
      }, CH.x1 = function(HH) {
        return arguments.length ? (AH = null == HH ? null : "function" === typeof HH ? HH : (0, OH.d)(+HH), CH) : AH
      }, CH.y = function(HH) {
        return arguments.length ? (BH = "function" === typeof HH ? HH : (0, OH.d)(+HH), LH = null, CH) : BH
      }, CH.y0 = function(HH) {
        return arguments.length ? (BH = "function" === typeof HH ? HH : (0, OH.d)(+HH), CH) : BH
      }, CH.y1 = function(HH) {
        return arguments.length ? (LH = null == HH ? null : "function" === typeof HH ? HH : (0, OH.d)(+HH), CH) : LH
      }, CH.lineX0 = CH.lineY0 = function() {
        return EH().x(HH).y(BH)
      }, CH.lineY1 = function() {
        return EH().x(HH).y(LH)
      }, CH.lineX1 = function() {
        return EH().x(AH).y(BH)
      }, CH.defined = function(HH) {
        return arguments.length ? (rH = "function" === typeof HH ? HH : (0, OH.d)(!!HH), CH) : rH
      }, CH.curve = function(HH) {
        return arguments.length ? (hH = HH, null != SH && (tH = hH(SH)), CH) : hH
      }, CH.context = function(HH) {
        return arguments.length ? (null == HH ? SH = tH = null : tH = hH(SH = HH), CH) : SH
      }, CH
    }
    var fH = LH(6583),
      lH = LH.n(fH),
      KH = LH(5789),
      cH = LH.n(KH),
      eH = LH(5582),
      qH = LH(5975),
      gH = LH(5960),
      NH = LH(5684);

    function RH(HH) {
      return RH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, RH(HH)
    }

    function jH() {
      return jH = Object.assign ? Object.assign.bind() : function(HH) {
        for (var BH = 1; BH < arguments.length; BH++) {
          var LH = arguments[BH];
          for (var AH in LH) Object.prototype.hasOwnProperty.call(LH, AH) && (HH[AH] = LH[AH])
        }
        return HH
      }, jH.apply(this, arguments)
    }

    function nH(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function FH(HH) {
      for (var BH = 1; BH < arguments.length; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? nH(Object(LH), !0).forEach((function(BH) {
          DH(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : nH(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }

    function DH(HH, BH, LH) {
      return (BH = function(HH) {
        var BH = function(HH, BH) {
          if ("object" != RH(HH) || !HH) return HH;
          var LH = HH[Symbol.toPrimitive];
          if (void 0 !== LH) {
            var AH = LH.call(HH, BH || "default");
            if ("object" != RH(AH)) return AH;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === BH ? String : Number)(HH)
        }(HH, "string");
        return "symbol" == RH(BH) ? BH : BH + ""
      }(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }
    var wH = {
        curveBasisClosed: function(HH) {
          return new tH(HH)
        },
        curveBasisOpen: function(HH) {
          return new zH(HH)
        },
        curveBasis: function(HH) {
          return new hH(HH)
        },
        curveBumpX: function(HH) {
          return new CH(HH, !0)
        },
        curveBumpY: function(HH) {
          return new CH(HH, !1)
        },
        curveLinearClosed: function(HH) {
          return new EH(HH)
        },
        curveLinear: GH,
        curveMonotoneX: function(HH) {
          return new MH(HH)
        },
        curveMonotoneY: function(HH) {
          return new xH(HH)
        },
        curveNatural: function(HH) {
          return new PH(HH)
        },
        curveStep: function(HH) {
          return new UH(HH, .5)
        },
        curveStepAfter: function(HH) {
          return new UH(HH, 1)
        },
        curveStepBefore: function(HH) {
          return new UH(HH, 0)
        }
      },
      ZH = function(HH) {
        return HH.x === +HH.x && HH.y === +HH.y
      },
      dH = function(HH) {
        return HH.x
      },
      aH = function(HH) {
        return HH.y
      },
      sH = function(HH) {
        var BH, LH = HH.type,
          AH = void 0 === LH ? "linear" : LH,
          rH = HH.points,
          SH = void 0 === rH ? [] : rH,
          hH = HH.baseLine,
          tH = HH.layout,
          zH = HH.connectNulls,
          CH = void 0 !== zH && zH,
          EH = function(HH, BH) {
            if (cH()(HH)) return HH;
            var LH = "curve".concat(lH()(HH));
            return "curveMonotone" !== LH && "curveBump" !== LH || !BH ? wH[LH] || GH : wH["".concat(LH).concat("vertical" === BH ? "Y" : "X")]
          }(AH, tH),
          XH = CH ? SH.filter((function(HH) {
            return ZH(HH)
          })) : SH;
        if (Array.isArray(hH)) {
          var YH = CH ? hH.filter((function(HH) {
              return ZH(HH)
            })) : hH,
            uH = XH.map((function(HH, BH) {
              return FH(FH({}, HH), {}, {
                base: YH[BH]
              })
            }));
          return (BH = "vertical" === tH ? IH().y(aH).x1(dH).x0((function(HH) {
            return HH.base.x
          })) : IH().x(dH).y1(aH).y0((function(HH) {
            return HH.base.y
          }))).defined(ZH).curve(EH), BH(uH)
        }
        return (BH = "vertical" === tH && (0, NH.v)(hH) ? IH().y(aH).x1(dH).x0(hH) : (0, NH.v)(hH) ? IH().x(dH).y1(aH).y0(hH) : oH().x(dH).y(aH)).defined(ZH).curve(EH), BH(XH)
      },
      JH = function(HH) {
        var BH = HH.className,
          LH = HH.points,
          rH = HH.path,
          SH = HH.pathRef;
        if ((!LH || !LH.length) && !rH) return null;
        var hH = LH && LH.length ? sH(HH) : rH;
        return AH.createElement("path", jH({}, (0, gH.c)(HH, !1), (0, qH.m)(HH), {
          className: (0, eH.e)("recharts-curve", BH),
          d: hH,
          ref: SH
        }))
      }
  },
  6643: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => zH
    });
    var AH = LH(45),
      rH = LH(5582),
      SH = LH(5975),
      hH = LH(5960);

    function tH() {
      return tH = Object.assign ? Object.assign.bind() : function(HH) {
        for (var BH = 1; BH < arguments.length; BH++) {
          var LH = arguments[BH];
          for (var AH in LH) Object.prototype.hasOwnProperty.call(LH, AH) && (HH[AH] = LH[AH])
        }
        return HH
      }, tH.apply(this, arguments)
    }
    var zH = function(HH) {
      var BH = HH.cx,
        LH = HH.cy,
        zH = HH.r,
        CH = HH.className,
        EH = (0, rH.e)("recharts-dot", CH);
      return BH === +BH && LH === +LH && zH === +zH ? AH.createElement("circle", tH({}, (0, hH.c)(HH, !1), (0, SH.m)(HH), {
        className: EH,
        cx: BH,
        cy: LH,
        r: zH
      })) : null
    }
  },
  6652: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => MH,
      f: () => QH
    });
    var AH = LH(45),
      rH = LH(5582),
      SH = LH(6655),
      hH = LH(5960);

    function tH(HH) {
      return tH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, tH(HH)
    }

    function zH() {
      return zH = Object.assign ? Object.assign.bind() : function(HH) {
        for (var BH = 1; BH < arguments.length; BH++) {
          var LH = arguments[BH];
          for (var AH in LH) Object.prototype.hasOwnProperty.call(LH, AH) && (HH[AH] = LH[AH])
        }
        return HH
      }, zH.apply(this, arguments)
    }

    function CH(HH, BH) {
      return function(HH) {
        if (Array.isArray(HH)) return HH
      }(HH) || function(HH, BH) {
        var LH = null == HH ? null : "undefined" != typeof Symbol && HH[Symbol.iterator] || HH["@@iterator"];
        if (null != LH) {
          var AH, rH, SH, hH, tH = [],
            zH = !0,
            CH = !1;
          try {
            if (SH = (LH = LH.call(HH)).next, 0 === BH) {
              if (Object(LH) !== LH) return;
              zH = !1
            } else
              for (; !(zH = (AH = SH.call(LH)).done) && (tH.push(AH.value), tH.length !== BH); zH = !0);
          } catch (HH) {
            CH = !0, rH = HH
          } finally {
            try {
              if (!zH && null != LH.return && (hH = LH.return(), Object(hH) !== hH)) return
            } finally {
              if (CH) throw rH
            }
          }
          return tH
        }
      }(HH, BH) || function(HH, BH) {
        if (!HH) return;
        if ("string" === typeof HH) return EH(HH, BH);
        var LH = Object.prototype.toString.call(HH).slice(8, -1);
        "Object" === LH && HH.constructor && (LH = HH.constructor.name);
        if ("Map" === LH || "Set" === LH) return Array.from(HH);
        if ("Arguments" === LH || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(LH)) return EH(HH, BH)
      }(HH, BH) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function EH(HH, BH) {
      (null == BH || BH > HH.length) && (BH = HH.length);
      for (var LH = 0, AH = new Array(BH); LH < BH; LH++) AH[LH] = HH[LH];
      return AH
    }

    function XH(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function GH(HH) {
      for (var BH = 1; BH < arguments.length; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? XH(Object(LH), !0).forEach((function(BH) {
          YH(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : XH(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }

    function YH(HH, BH, LH) {
      return (BH = function(HH) {
        var BH = function(HH, BH) {
          if ("object" != tH(HH) || !HH) return HH;
          var LH = HH[Symbol.toPrimitive];
          if (void 0 !== LH) {
            var AH = LH.call(HH, BH || "default");
            if ("object" != tH(AH)) return AH;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === BH ? String : Number)(HH)
        }(HH, "string");
        return "symbol" == tH(BH) ? BH : BH + ""
      }(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }
    var uH = function(HH, BH, LH, AH, rH) {
        var SH, hH = Math.min(Math.abs(LH) / 2, Math.abs(AH) / 2),
          tH = AH >= 0 ? 1 : -1,
          zH = LH >= 0 ? 1 : -1,
          CH = AH >= 0 && LH >= 0 || AH < 0 && LH < 0 ? 1 : 0;
        if (hH > 0 && rH instanceof Array) {
          for (var EH = [0, 0, 0, 0], XH = 0; XH < 4; XH++) EH[XH] = rH[XH] > hH ? hH : rH[XH];
          SH = "M".concat(HH, ",").concat(BH + tH * EH[0]), EH[0] > 0 && (SH += "A ".concat(EH[0], ",").concat(EH[0], ",0,0,").concat(CH, ",").concat(HH + zH * EH[0], ",").concat(BH)), SH += "L ".concat(HH + LH - zH * EH[1], ",").concat(BH), EH[1] > 0 && (SH += "A ".concat(EH[1], ",").concat(EH[1], ",0,0,").concat(CH, ",\n        ").concat(HH + LH, ",").concat(BH + tH * EH[1])), SH += "L ".concat(HH + LH, ",").concat(BH + AH - tH * EH[2]), EH[2] > 0 && (SH += "A ".concat(EH[2], ",").concat(EH[2], ",0,0,").concat(CH, ",\n        ").concat(HH + LH - zH * EH[2], ",").concat(BH + AH)), SH += "L ".concat(HH + zH * EH[3], ",").concat(BH + AH), EH[3] > 0 && (SH += "A ".concat(EH[3], ",").concat(EH[3], ",0,0,").concat(CH, ",\n        ").concat(HH, ",").concat(BH + AH - tH * EH[3])), SH += "Z"
        } else if (hH > 0 && rH === +rH && rH > 0) {
          var GH = Math.min(hH, rH);
          SH = "M ".concat(HH, ",").concat(BH + tH * GH, "\n            A ").concat(GH, ",").concat(GH, ",0,0,").concat(CH, ",").concat(HH + zH * GH, ",").concat(BH, "\n            L ").concat(HH + LH - zH * GH, ",").concat(BH, "\n            A ").concat(GH, ",").concat(GH, ",0,0,").concat(CH, ",").concat(HH + LH, ",").concat(BH + tH * GH, "\n            L ").concat(HH + LH, ",").concat(BH + AH - tH * GH, "\n            A ").concat(GH, ",").concat(GH, ",0,0,").concat(CH, ",").concat(HH + LH - zH * GH, ",").concat(BH + AH, "\n            L ").concat(HH + zH * GH, ",").concat(BH + AH, "\n            A ").concat(GH, ",").concat(GH, ",0,0,").concat(CH, ",").concat(HH, ",").concat(BH + AH - tH * GH, " Z")
        } else SH = "M ".concat(HH, ",").concat(BH, " h ").concat(LH, " v ").concat(AH, " h ").concat(-LH, " Z");
        return SH
      },
      QH = function(HH, BH) {
        if (!HH || !BH) return !1;
        var LH = HH.x,
          AH = HH.y,
          rH = BH.x,
          SH = BH.y,
          hH = BH.width,
          tH = BH.height;
        if (Math.abs(hH) > 0 && Math.abs(tH) > 0) {
          var zH = Math.min(rH, rH + hH),
            CH = Math.max(rH, rH + hH),
            EH = Math.min(SH, SH + tH),
            XH = Math.max(SH, SH + tH);
          return LH >= zH && LH <= CH && AH >= EH && AH <= XH
        }
        return !1
      },
      WH = {
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
      MH = function(HH) {
        var BH = GH(GH({}, WH), HH),
          LH = (0, AH.useRef)(),
          tH = CH((0, AH.useState)(-1), 2),
          EH = tH[0],
          XH = tH[1];
        (0, AH.useEffect)((function() {
          if (LH.current && LH.current.getTotalLength) try {
            var HH = LH.current.getTotalLength();
            HH && XH(HH)
          } catch (BH) {}
        }), []);
        var YH = BH.x,
          QH = BH.y,
          MH = BH.width,
          xH = BH.height,
          vH = BH.radius,
          PH = BH.className,
          TH = BH.animationEasing,
          UH = BH.animationDuration,
          VH = BH.animationBegin,
          OH = BH.isAnimationActive,
          bH = BH.isUpdateAnimationActive;
        if (YH !== +YH || QH !== +QH || MH !== +MH || xH !== +xH || 0 === MH || 0 === xH) return null;
        var kH = (0, rH.e)("recharts-rectangle", PH);
        return bH ? AH.createElement(SH.b, {
          canBegin: EH > 0,
          from: {
            width: MH,
            height: xH,
            x: YH,
            y: QH
          },
          to: {
            width: MH,
            height: xH,
            x: YH,
            y: QH
          },
          duration: UH,
          animationEasing: TH,
          isActive: bH
        }, (function(HH) {
          var rH = HH.width,
            tH = HH.height,
            CH = HH.x,
            XH = HH.y;
          return AH.createElement(SH.b, {
            canBegin: EH > 0,
            from: "0px ".concat(-1 === EH ? 1 : EH, "px"),
            to: "".concat(EH, "px 0px"),
            attributeName: "strokeDasharray",
            PX: VH,
            duration: UH,
            isActive: OH,
            easing: TH
          }, AH.createElement("path", zH({}, (0, hH.c)(BH, !0), {
            className: kH,
            d: uH(CH, XH, rH, tH, vH),
            ref: LH
          })))
        })) : AH.createElement("path", zH({}, (0, hH.c)(BH, !0), {
          className: kH,
          d: uH(YH, QH, MH, xH, vH)
        }))
      }
  },
  6851: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => WH
    });
    var AH = LH(45),
      rH = LH(5582),
      SH = LH(5960),
      hH = LH(6754),
      tH = LH(5684);

    function zH(HH) {
      return zH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, zH(HH)
    }

    function CH() {
      return CH = Object.assign ? Object.assign.bind() : function(HH) {
        for (var BH = 1; BH < arguments.length; BH++) {
          var LH = arguments[BH];
          for (var AH in LH) Object.prototype.hasOwnProperty.call(LH, AH) && (HH[AH] = LH[AH])
        }
        return HH
      }, CH.apply(this, arguments)
    }

    function EH(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function XH(HH) {
      for (var BH = 1; BH < arguments.length; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? EH(Object(LH), !0).forEach((function(BH) {
          GH(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : EH(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }

    function GH(HH, BH, LH) {
      return (BH = function(HH) {
        var BH = function(HH, BH) {
          if ("object" != zH(HH) || !HH) return HH;
          var LH = HH[Symbol.toPrimitive];
          if (void 0 !== LH) {
            var AH = LH.call(HH, BH || "default");
            if ("object" != zH(AH)) return AH;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === BH ? String : Number)(HH)
        }(HH, "string");
        return "symbol" == zH(BH) ? BH : BH + ""
      }(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }
    var YH = function(HH) {
        var BH = HH.cx,
          LH = HH.cy,
          AH = HH.radius,
          rH = HH.angle,
          SH = HH.sign,
          tH = HH.isExternal,
          zH = HH.cornerRadius,
          CH = HH.cornerIsExternal,
          EH = zH * (tH ? 1 : -1) + AH,
          XH = Math.asin(zH / EH) / hH.d,
          GH = CH ? rH : rH + SH * XH,
          YH = CH ? rH - SH * XH : rH;
        return {
          center: (0, hH.g)(BH, LH, EH, GH),
          circleTangency: (0, hH.g)(BH, LH, AH, GH),
          lineTangency: (0, hH.g)(BH, LH, EH * Math.cos(XH * hH.d), YH),
          zX: XH
        }
      },
      uH = function(HH) {
        var BH = HH.cx,
          LH = HH.cy,
          AH = HH.innerRadius,
          rH = HH.outerRadius,
          SH = HH.startAngle,
          zH = function(HH, BH) {
            return (0, tH.A)(BH - HH) * Math.min(Math.abs(BH - HH), 359.999)
          }(SH, HH.endAngle),
          CH = SH + zH,
          EH = (0, hH.g)(BH, LH, rH, SH),
          XH = (0, hH.g)(BH, LH, rH, CH),
          GH = "M ".concat(EH.x, ",").concat(EH.y, "\n    A ").concat(rH, ",").concat(rH, ",0,\n    ").concat(+(Math.abs(zH) > 180), ",").concat(+(SH > CH), ",\n    ").concat(XH.x, ",").concat(XH.y, "\n  ");
        if (AH > 0) {
          var YH = (0, hH.g)(BH, LH, AH, SH),
            uH = (0, hH.g)(BH, LH, AH, CH);
          GH += "L ".concat(uH.x, ",").concat(uH.y, "\n            A ").concat(AH, ",").concat(AH, ",0,\n            ").concat(+(Math.abs(zH) > 180), ",").concat(+(SH <= CH), ",\n            ").concat(YH.x, ",").concat(YH.y, " Z")
        } else GH += "L ".concat(BH, ",").concat(LH, " Z");
        return GH
      },
      QH = {
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
      WH = function(HH) {
        var BH = XH(XH({}, QH), HH),
          LH = BH.cx,
          hH = BH.cy,
          zH = BH.innerRadius,
          EH = BH.outerRadius,
          GH = BH.cornerRadius,
          WH = BH.forceCornerRadius,
          MH = BH.cornerIsExternal,
          xH = BH.startAngle,
          vH = BH.endAngle,
          PH = BH.className;
        if (EH < zH || xH === vH) return null;
        var TH, UH = (0, rH.e)("recharts-sector", PH),
          VH = EH - zH,
          OH = (0, tH.l)(GH, VH, 0, !0);
        return TH = OH > 0 && Math.abs(xH - vH) < 360 ? function(HH) {
          var BH = HH.cx,
            LH = HH.cy,
            AH = HH.innerRadius,
            rH = HH.outerRadius,
            SH = HH.cornerRadius,
            hH = HH.forceCornerRadius,
            zH = HH.cornerIsExternal,
            CH = HH.startAngle,
            EH = HH.endAngle,
            XH = (0, tH.A)(EH - CH),
            GH = YH({
              cx: BH,
              cy: LH,
              radius: rH,
              angle: CH,
              sign: XH,
              cornerRadius: SH,
              cornerIsExternal: zH
            }),
            QH = GH.circleTangency,
            WH = GH.lineTangency,
            MH = GH.zX,
            xH = YH({
              cx: BH,
              cy: LH,
              radius: rH,
              angle: EH,
              sign: -XH,
              cornerRadius: SH,
              cornerIsExternal: zH
            }),
            vH = xH.circleTangency,
            PH = xH.lineTangency,
            TH = xH.zX,
            UH = zH ? Math.abs(CH - EH) : Math.abs(CH - EH) - MH - TH;
          if (UH < 0) return hH ? "M ".concat(WH.x, ",").concat(WH.y, "\n        a").concat(SH, ",").concat(SH, ",0,0,1,").concat(2 * SH, ",0\n        a").concat(SH, ",").concat(SH, ",0,0,1,").concat(2 * -SH, ",0\n      ") : uH({
            cx: BH,
            cy: LH,
            innerRadius: AH,
            outerRadius: rH,
            startAngle: CH,
            endAngle: EH
          });
          var VH = "M ".concat(WH.x, ",").concat(WH.y, "\n    A").concat(SH, ",").concat(SH, ",0,0,").concat(+(XH < 0), ",").concat(QH.x, ",").concat(QH.y, "\n    A").concat(rH, ",").concat(rH, ",0,").concat(+(UH > 180), ",").concat(+(XH < 0), ",").concat(vH.x, ",").concat(vH.y, "\n    A").concat(SH, ",").concat(SH, ",0,0,").concat(+(XH < 0), ",").concat(PH.x, ",").concat(PH.y, "\n  ");
          if (AH > 0) {
            var OH = YH({
                cx: BH,
                cy: LH,
                radius: AH,
                angle: CH,
                sign: XH,
                isExternal: !0,
                cornerRadius: SH,
                cornerIsExternal: zH
              }),
              bH = OH.circleTangency,
              kH = OH.lineTangency,
              mH = OH.zX,
              oH = YH({
                cx: BH,
                cy: LH,
                radius: AH,
                angle: EH,
                sign: -XH,
                isExternal: !0,
                cornerRadius: SH,
                cornerIsExternal: zH
              }),
              IH = oH.circleTangency,
              fH = oH.lineTangency,
              lH = oH.zX,
              KH = zH ? Math.abs(CH - EH) : Math.abs(CH - EH) - mH - lH;
            if (KH < 0 && 0 === SH) return "".concat(VH, "L").concat(BH, ",").concat(LH, "Z");
            VH += "L".concat(fH.x, ",").concat(fH.y, "\n      A").concat(SH, ",").concat(SH, ",0,0,").concat(+(XH < 0), ",").concat(IH.x, ",").concat(IH.y, "\n      A").concat(AH, ",").concat(AH, ",0,").concat(+(KH > 180), ",").concat(+(XH > 0), ",").concat(bH.x, ",").concat(bH.y, "\n      A").concat(SH, ",").concat(SH, ",0,0,").concat(+(XH < 0), ",").concat(kH.x, ",").concat(kH.y, "Z")
          } else VH += "L".concat(BH, ",").concat(LH, "Z");
          return VH
        }({
          cx: LH,
          cy: hH,
          innerRadius: zH,
          outerRadius: EH,
          cornerRadius: Math.min(OH, VH / 2),
          forceCornerRadius: WH,
          cornerIsExternal: MH,
          startAngle: xH,
          endAngle: vH
        }) : uH({
          cx: LH,
          cy: hH,
          innerRadius: zH,
          outerRadius: EH,
          startAngle: xH,
          endAngle: vH
        }), AH.createElement("path", CH({}, (0, SH.c)(BH, !0), {
          className: UH,
          d: TH,
          role: "img"
        }))
      }
  },
  6577: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => FH
    });
    var AH = LH(45),
      rH = LH(6583),
      SH = LH.n(rH);
    Math.abs, Math.atan2;
    const hH = Math.cos,
      tH = (Math.max, Math.min, Math.sin),
      zH = Math.sqrt,
      CH = Math.PI,
      EH = 2 * CH;
    const XH = {
        draw(HH, BH) {
          const LH = zH(BH / CH);
          HH.moveTo(LH, 0), HH.arc(0, 0, LH, 0, EH)
        }
      },
      GH = {
        draw(HH, BH) {
          const LH = zH(BH / 5) / 2;
          HH.moveTo(-3 * LH, -LH), HH.lineTo(-LH, -LH), HH.lineTo(-LH, -3 * LH), HH.lineTo(LH, -3 * LH), HH.lineTo(LH, -LH), HH.lineTo(3 * LH, -LH), HH.lineTo(3 * LH, LH), HH.lineTo(LH, LH), HH.lineTo(LH, 3 * LH), HH.lineTo(-LH, 3 * LH), HH.lineTo(-LH, LH), HH.lineTo(-3 * LH, LH), HH.closePath()
        }
      },
      YH = zH(1 / 3),
      uH = 2 * YH,
      QH = {
        draw(HH, BH) {
          const LH = zH(BH / uH),
            AH = LH * YH;
          HH.moveTo(0, -LH), HH.lineTo(AH, 0), HH.lineTo(0, LH), HH.lineTo(-AH, 0), HH.closePath()
        }
      },
      WH = {
        draw(HH, BH) {
          const LH = zH(BH),
            AH = -LH / 2;
          HH.rect(AH, AH, LH, LH)
        }
      },
      MH = tH(CH / 10) / tH(7 * CH / 10),
      xH = tH(EH / 10) * MH,
      vH = -hH(EH / 10) * MH,
      PH = {
        draw(HH, BH) {
          const LH = zH(.8908130915292852 * BH),
            AH = xH * LH,
            rH = vH * LH;
          HH.moveTo(0, -LH), HH.lineTo(AH, rH);
          for (let SH = 1; SH < 5; ++SH) {
            const BH = EH * SH / 5,
              zH = hH(BH),
              CH = tH(BH);
            HH.lineTo(CH * LH, -zH * LH), HH.lineTo(zH * AH - CH * rH, CH * AH + zH * rH)
          }
          HH.closePath()
        }
      },
      TH = zH(3),
      UH = {
        draw(HH, BH) {
          const LH = -zH(BH / (3 * TH));
          HH.moveTo(0, 2 * LH), HH.lineTo(-TH * LH, -LH), HH.lineTo(TH * LH, -LH), HH.closePath()
        }
      },
      VH = -.5,
      OH = zH(3) / 2,
      bH = 1 / zH(12),
      kH = 3 * (bH / 2 + 1),
      mH = {
        draw(HH, BH) {
          const LH = zH(BH / kH),
            AH = LH / 2,
            rH = LH * bH,
            SH = AH,
            hH = LH * bH + LH,
            tH = -SH,
            CH = hH;
          HH.moveTo(AH, rH), HH.lineTo(SH, hH), HH.lineTo(tH, CH), HH.lineTo(VH * AH - OH * rH, OH * AH + VH * rH), HH.lineTo(VH * SH - OH * hH, OH * SH + VH * hH), HH.lineTo(VH * tH - OH * CH, OH * tH + VH * CH), HH.lineTo(VH * AH + OH * rH, VH * rH - OH * AH), HH.lineTo(VH * SH + OH * hH, VH * hH - OH * SH), HH.lineTo(VH * tH + OH * CH, VH * CH - OH * tH), HH.closePath()
        }
      };
    var oH = LH(6625),
      IH = LH(6634);
    zH(3), zH(3);
    var fH = LH(5582),
      lH = LH(5960);

    function KH(HH) {
      return KH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, KH(HH)
    }
    var cH = ["type", "size", "sizeType"];

    function eH() {
      return eH = Object.assign ? Object.assign.bind() : function(HH) {
        for (var BH = 1; BH < arguments.length; BH++) {
          var LH = arguments[BH];
          for (var AH in LH) Object.prototype.hasOwnProperty.call(LH, AH) && (HH[AH] = LH[AH])
        }
        return HH
      }, eH.apply(this, arguments)
    }

    function qH(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function gH(HH) {
      for (var BH = 1; BH < arguments.length; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? qH(Object(LH), !0).forEach((function(BH) {
          NH(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : qH(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }

    function NH(HH, BH, LH) {
      return (BH = function(HH) {
        var BH = function(HH, BH) {
          if ("object" != KH(HH) || !HH) return HH;
          var LH = HH[Symbol.toPrimitive];
          if (void 0 !== LH) {
            var AH = LH.call(HH, BH || "default");
            if ("object" != KH(AH)) return AH;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === BH ? String : Number)(HH)
        }(HH, "string");
        return "symbol" == KH(BH) ? BH : BH + ""
      }(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }

    function RH(HH, BH) {
      if (null == HH) return {};
      var LH, AH, rH = function(HH, BH) {
        if (null == HH) return {};
        var LH = {};
        for (var AH in HH)
          if (Object.prototype.hasOwnProperty.call(HH, AH)) {
            if (BH.indexOf(AH) >= 0) continue;
            LH[AH] = HH[AH]
          } return LH
      }(HH, BH);
      if (Object.getOwnPropertySymbols) {
        var SH = Object.getOwnPropertySymbols(HH);
        for (AH = 0; AH < SH.length; AH++) LH = SH[AH], BH.indexOf(LH) >= 0 || Object.prototype.propertyIsEnumerable.call(HH, LH) && (rH[LH] = HH[LH])
      }
      return rH
    }
    var jH = {
        symbolCircle: XH,
        symbolCross: GH,
        symbolDiamond: QH,
        symbolSquare: WH,
        symbolStar: PH,
        symbolTriangle: UH,
        symbolWye: mH
      },
      nH = Math.PI / 180,
      FH = function(HH) {
        var BH = HH.type,
          LH = void 0 === BH ? "circle" : BH,
          rH = HH.size,
          hH = void 0 === rH ? 64 : rH,
          tH = HH.sizeType,
          zH = void 0 === tH ? "area" : tH,
          CH = gH(gH({}, RH(HH, cH)), {}, {
            type: LH,
            size: hH,
            sizeType: zH
          }),
          EH = CH.className,
          GH = CH.cx,
          YH = CH.cy,
          uH = (0, lH.c)(CH, !0);
        return GH === +GH && YH === +YH && hH === +hH ? AH.createElement("path", eH({}, uH, {
          className: (0, fH.e)("recharts-symbols", EH),
          transform: "translate(".concat(GH, ", ").concat(YH, ")"),
          d: function() {
            var HH = function(HH) {
                var BH = "symbol".concat(SH()(HH));
                return jH[BH] || XH
              }(LH),
              BH = function(HH, BH) {
                let LH = null,
                  AH = (0, IH.c)(rH);

                function rH() {
                  let rH;
                  if (LH || (LH = rH = AH()), HH.apply(this, arguments).draw(LH, +BH.apply(this, arguments)), rH) return LH = null, rH + "" || null
                }
                return HH = "function" === typeof HH ? HH : (0, oH.d)(HH || XH), BH = "function" === typeof BH ? BH : (0, oH.d)(void 0 === BH ? 64 : +BH), rH.type = function(BH) {
                  return arguments.length ? (HH = "function" === typeof BH ? BH : (0, oH.d)(BH), rH) : HH
                }, rH.size = function(HH) {
                  return arguments.length ? (BH = "function" === typeof HH ? HH : (0, oH.d)(+HH), rH) : BH
                }, rH.context = function(HH) {
                  return arguments.length ? (LH = null == HH ? null : HH, rH) : LH
                }, rH
              }().type(HH).size(function(HH, BH, LH) {
                if ("area" === BH) return HH;
                switch (LH) {
                  case "cross":
                    return 5 * HH * HH / 9;
                  case "diamond":
                    return .5 * HH * HH / Math.sqrt(3);
                  case "square":
                    return HH * HH;
                  case "star":
                    var AH = 18 * nH;
                    return 1.25 * HH * HH * (Math.tan(AH) - Math.tan(2 * AH) * Math.pow(Math.tan(AH), 2));
                  case "triangle":
                    return Math.sqrt(3) * HH * HH / 4;
                  case "wye":
                    return (21 - 10 * Math.sqrt(3)) * HH * HH / 8;
                  default:
                    return Math.PI * HH * HH / 4
                }
              }(hH, zH, LH));
            return BH()
          }()
        })) : null
      };
    FH.registerSymbol = function(HH, BH) {
      jH["symbol".concat(SH()(HH))] = BH
    }
  },
  6834: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => NH,
      g: () => ZH,
      i: () => RH,
      m: () => jH,
      o: () => nH
    });
    var AH = LH(45),
      rH = LH(5789),
      SH = LH.n(rH),
      hH = LH(6840),
      tH = LH.n(hH),
      zH = LH(6844),
      CH = LH.n(zH),
      EH = LH(6728),
      XH = LH.n(EH),
      GH = LH(6652),
      YH = LH(5582),
      uH = LH(6655),
      QH = LH(5960);

    function WH(HH) {
      return WH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, WH(HH)
    }

    function MH() {
      return MH = Object.assign ? Object.assign.bind() : function(HH) {
        for (var BH = 1; BH < arguments.length; BH++) {
          var LH = arguments[BH];
          for (var AH in LH) Object.prototype.hasOwnProperty.call(LH, AH) && (HH[AH] = LH[AH])
        }
        return HH
      }, MH.apply(this, arguments)
    }

    function xH(HH, BH) {
      return function(HH) {
        if (Array.isArray(HH)) return HH
      }(HH) || function(HH, BH) {
        var LH = null == HH ? null : "undefined" != typeof Symbol && HH[Symbol.iterator] || HH["@@iterator"];
        if (null != LH) {
          var AH, rH, SH, hH, tH = [],
            zH = !0,
            CH = !1;
          try {
            if (SH = (LH = LH.call(HH)).next, 0 === BH) {
              if (Object(LH) !== LH) return;
              zH = !1
            } else
              for (; !(zH = (AH = SH.call(LH)).done) && (tH.push(AH.value), tH.length !== BH); zH = !0);
          } catch (HH) {
            CH = !0, rH = HH
          } finally {
            try {
              if (!zH && null != LH.return && (hH = LH.return(), Object(hH) !== hH)) return
            } finally {
              if (CH) throw rH
            }
          }
          return tH
        }
      }(HH, BH) || function(HH, BH) {
        if (!HH) return;
        if ("string" === typeof HH) return vH(HH, BH);
        var LH = Object.prototype.toString.call(HH).slice(8, -1);
        "Object" === LH && HH.constructor && (LH = HH.constructor.name);
        if ("Map" === LH || "Set" === LH) return Array.from(HH);
        if ("Arguments" === LH || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(LH)) return vH(HH, BH)
      }(HH, BH) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function vH(HH, BH) {
      (null == BH || BH > HH.length) && (BH = HH.length);
      for (var LH = 0, AH = new Array(BH); LH < BH; LH++) AH[LH] = HH[LH];
      return AH
    }

    function PH(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function TH(HH) {
      for (var BH = 1; BH < arguments.length; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? PH(Object(LH), !0).forEach((function(BH) {
          UH(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : PH(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }

    function UH(HH, BH, LH) {
      return (BH = function(HH) {
        var BH = function(HH, BH) {
          if ("object" != WH(HH) || !HH) return HH;
          var LH = HH[Symbol.toPrimitive];
          if (void 0 !== LH) {
            var AH = LH.call(HH, BH || "default");
            if ("object" != WH(AH)) return AH;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === BH ? String : Number)(HH)
        }(HH, "string");
        return "symbol" == WH(BH) ? BH : BH + ""
      }(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }
    var VH = function(HH, BH, LH, AH, rH) {
        var SH, hH = LH - AH;
        return SH = "M ".concat(HH, ",").concat(BH), SH += "L ".concat(HH + LH, ",").concat(BH), SH += "L ".concat(HH + LH - hH / 2, ",").concat(BH + rH), SH += "L ".concat(HH + LH - hH / 2 - AH, ",").concat(BH + rH), SH += "L ".concat(HH, ",").concat(BH, " Z")
      },
      OH = {
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
      bH = function(HH) {
        var BH = TH(TH({}, OH), HH),
          LH = (0, AH.useRef)(),
          rH = xH((0, AH.useState)(-1), 2),
          SH = rH[0],
          hH = rH[1];
        (0, AH.useEffect)((function() {
          if (LH.current && LH.current.getTotalLength) try {
            var HH = LH.current.getTotalLength();
            HH && hH(HH)
          } catch (BH) {}
        }), []);
        var tH = BH.x,
          zH = BH.y,
          CH = BH.upperWidth,
          EH = BH.lowerWidth,
          XH = BH.height,
          GH = BH.className,
          WH = BH.animationEasing,
          vH = BH.animationDuration,
          PH = BH.animationBegin,
          UH = BH.isUpdateAnimationActive;
        if (tH !== +tH || zH !== +zH || CH !== +CH || EH !== +EH || XH !== +XH || 0 === CH && 0 === EH || 0 === XH) return null;
        var bH = (0, YH.e)("recharts-trapezoid", GH);
        return UH ? AH.createElement(uH.b, {
          canBegin: SH > 0,
          from: {
            upperWidth: 0,
            lowerWidth: 0,
            height: XH,
            x: tH,
            y: zH
          },
          to: {
            upperWidth: CH,
            lowerWidth: EH,
            height: XH,
            x: tH,
            y: zH
          },
          duration: vH,
          animationEasing: WH,
          isActive: UH
        }, (function(HH) {
          var rH = HH.upperWidth,
            hH = HH.lowerWidth,
            tH = HH.height,
            zH = HH.x,
            CH = HH.y;
          return AH.createElement(uH.b, {
            canBegin: SH > 0,
            from: "0px ".concat(-1 === SH ? 1 : SH, "px"),
            to: "".concat(SH, "px 0px"),
            attributeName: "strokeDasharray",
            PX: PH,
            duration: vH,
            easing: WH
          }, AH.createElement("path", MH({}, (0, QH.c)(BH, !0), {
            className: bH,
            d: VH(zH, CH, rH, hH, tH),
            ref: LH
          })))
        })) : AH.createElement("g", null, AH.createElement("path", MH({}, (0, QH.c)(BH, !0), {
          className: bH,
          d: VH(tH, zH, CH, EH, XH)
        })))
      },
      kH = LH(6851),
      mH = LH(6489),
      oH = LH(6577),
      IH = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];

    function fH(HH) {
      return fH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, fH(HH)
    }

    function lH(HH, BH) {
      if (null == HH) return {};
      var LH, AH, rH = function(HH, BH) {
        if (null == HH) return {};
        var LH = {};
        for (var AH in HH)
          if (Object.prototype.hasOwnProperty.call(HH, AH)) {
            if (BH.indexOf(AH) >= 0) continue;
            LH[AH] = HH[AH]
          } return LH
      }(HH, BH);
      if (Object.getOwnPropertySymbols) {
        var SH = Object.getOwnPropertySymbols(HH);
        for (AH = 0; AH < SH.length; AH++) LH = SH[AH], BH.indexOf(LH) >= 0 || Object.prototype.propertyIsEnumerable.call(HH, LH) && (rH[LH] = HH[LH])
      }
      return rH
    }

    function KH(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function cH(HH) {
      for (var BH = 1; BH < arguments.length; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? KH(Object(LH), !0).forEach((function(BH) {
          eH(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : KH(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }

    function eH(HH, BH, LH) {
      return (BH = function(HH) {
        var BH = function(HH, BH) {
          if ("object" != fH(HH) || !HH) return HH;
          var LH = HH[Symbol.toPrimitive];
          if (void 0 !== LH) {
            var AH = LH.call(HH, BH || "default");
            if ("object" != fH(AH)) return AH;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === BH ? String : Number)(HH)
        }(HH, "string");
        return "symbol" == fH(BH) ? BH : BH + ""
      }(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }

    function qH(HH, BH) {
      return cH(cH({}, BH), HH)
    }

    function gH(HH) {
      var BH = HH.shapeType,
        LH = HH.elementProps;
      switch (BH) {
        case "rectangle":
          return AH.createElement(GH.c, LH);
        case "trapezoid":
          return AH.createElement(bH, LH);
        case "sector":
          return AH.createElement(kH.b, LH);
        case "symbols":
          if (function(HH) {
              return "symbols" === HH
            }(BH)) return AH.createElement(oH.e, LH);
          break;
        default:
          return null
      }
    }

    function NH(HH) {
      var BH, LH = HH.option,
        rH = HH.shapeType,
        hH = HH.propTransformer,
        zH = void 0 === hH ? qH : hH,
        EH = HH.activeClassName,
        XH = void 0 === EH ? "recharts-active-shape" : EH,
        GH = HH.isActive,
        YH = lH(HH, IH);
      if ((0, AH.isValidElement)(LH)) BH = (0, AH.cloneElement)(LH, cH(cH({}, YH), function(HH) {
        return (0, AH.isValidElement)(HH) ? HH.props : HH
      }(LH)));
      else if (SH()(LH)) BH = LH(YH);
      else if (tH()(LH) && !CH()(LH)) {
        var uH = zH(LH, YH);
        BH = AH.createElement(gH, {
          shapeType: rH,
          elementProps: uH
        })
      } else {
        var QH = YH;
        BH = AH.createElement(gH, {
          shapeType: rH,
          elementProps: QH
        })
      }
      return GH ? AH.createElement(mH.b, {
        className: XH
      }, BH) : BH
    }

    function RH(HH, BH) {
      return null != BH && "trapezoids" in HH.props
    }

    function jH(HH, BH) {
      return null != BH && "sectors" in HH.props
    }

    function nH(HH, BH) {
      return null != BH && "points" in HH.props
    }

    function FH(HH, BH) {
      var LH, AH, rH = HH.x === (null === BH || void 0 === BH || null === (LH = BH.labelViewBox) || void 0 === LH ? void 0 : LH.x) || HH.x === BH.x,
        SH = HH.y === (null === BH || void 0 === BH || null === (AH = BH.labelViewBox) || void 0 === AH ? void 0 : AH.y) || HH.y === BH.y;
      return rH && SH
    }

    function DH(HH, BH) {
      var LH = HH.endAngle === BH.endAngle,
        AH = HH.startAngle === BH.startAngle;
      return LH && AH
    }

    function wH(HH, BH) {
      var LH = HH.x === BH.x,
        AH = HH.y === BH.y,
        rH = HH.z === BH.z;
      return LH && AH && rH
    }

    function ZH(HH) {
      var BH = HH.activeTooltipItem,
        LH = HH.graphicalItem,
        AH = HH.itemData,
        rH = function(HH, BH) {
          var LH;
          return RH(HH, BH) ? LH = "trapezoids" : jH(HH, BH) ? LH = "sectors" : nH(HH, BH) && (LH = "points"), LH
        }(LH, BH),
        SH = function(HH, BH) {
          var LH, AH;
          return RH(HH, BH) ? null === (LH = BH.tooltipPayload) || void 0 === LH || null === (LH = LH[0]) || void 0 === LH || null === (LH = LH.payload) || void 0 === LH ? void 0 : LH.payload : jH(HH, BH) ? null === (AH = BH.tooltipPayload) || void 0 === AH || null === (AH = AH[0]) || void 0 === AH || null === (AH = AH.payload) || void 0 === AH ? void 0 : AH.payload : nH(HH, BH) ? BH.payload : {}
        }(LH, BH),
        hH = AH.filter((function(HH, AH) {
          var hH = XH()(SH, HH),
            tH = LH.props[rH].filter((function(HH) {
              var AH = function(HH, BH) {
                var LH;
                return RH(HH, BH) ? LH = FH : jH(HH, BH) ? LH = DH : nH(HH, BH) && (LH = wH), LH
              }(LH, BH);
              return AH(HH, BH)
            })),
            zH = LH.props[rH].indexOf(tH[tH.length - 1]);
          return hH && AH === zH
        }));
      return AH.indexOf(hH[hH.length - 1])
    }
  },
  6770: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => TH,
      d: () => MH,
      g: () => UH,
      i: () => vH,
      k: () => xH
    });
    var AH = LH(6779),
      rH = LH.n(AH),
      SH = LH(6791),
      hH = LH.n(SH),
      tH = LH(6665),
      zH = LH(5960),
      CH = LH(5684),
      EH = LH(6808);

    function XH(HH) {
      return XH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, XH(HH)
    }

    function GH(HH, BH) {
      for (var LH = 0; LH < BH.length; LH++) {
        var AH = BH[LH];
        AH.enumerable = AH.enumerable || !1, AH.configurable = !0, "value" in AH && (AH.writable = !0), Object.defineProperty(HH, WH(AH.key), AH)
      }
    }

    function YH(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function uH(HH) {
      for (var BH = 1; BH < arguments.length; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? YH(Object(LH), !0).forEach((function(BH) {
          QH(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : YH(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }

    function QH(HH, BH, LH) {
      return (BH = WH(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }

    function WH(HH) {
      var BH = function(HH, BH) {
        if ("object" != XH(HH) || !HH) return HH;
        var LH = HH[Symbol.toPrimitive];
        if (void 0 !== LH) {
          var AH = LH.call(HH, BH || "default");
          if ("object" != XH(AH)) return AH;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === BH ? String : Number)(HH)
      }(HH, "string");
      return "symbol" == XH(BH) ? BH : BH + ""
    }
    var MH = function(HH, BH, LH, AH, rH) {
        var SH = HH.width,
          hH = HH.height,
          XH = HH.layout,
          GH = HH.children,
          YH = Object.keys(BH),
          WH = {
            left: LH.left,
            leftMirror: LH.left,
            right: SH - LH.right,
            rightMirror: SH - LH.right,
            top: LH.top,
            topMirror: LH.top,
            bottom: hH - LH.bottom,
            bottomMirror: hH - LH.bottom
          },
          MH = !!(0, zH.f)(GH, EH.d);
        return YH.reduce((function(SH, hH) {
          var zH, EH, GH, YH, xH, vH = BH[hH],
            PH = vH.orientation,
            TH = vH.domain,
            UH = vH.padding,
            VH = void 0 === UH ? {} : UH,
            OH = vH.mirror,
            bH = vH.reversed,
            kH = "".concat(PH).concat(OH ? "Mirror" : "");
          if ("number" === vH.type && ("gap" === vH.padding || "no-gap" === vH.padding)) {
            var mH = TH[1] - TH[0],
              oH = 1 / 0,
              IH = vH.categoricalDomain.sort(CH.d);
            if (IH.forEach((function(HH, BH) {
                BH > 0 && (oH = Math.min((HH || 0) - (IH[BH - 1] || 0), oH))
              })), Number.isFinite(oH)) {
              var fH = oH / mH,
                lH = "vertical" === vH.layout ? LH.height : LH.width;
              if ("gap" === vH.padding && (zH = fH * lH / 2), "no-gap" === vH.padding) {
                var KH = (0, CH.l)(HH.barCategoryGap, fH * lH),
                  cH = fH * lH / 2;
                zH = cH - KH - (cH - KH) / lH * KH
              }
            }
          }
          EH = "xAxis" === AH ? [LH.left + (VH.left || 0) + (zH || 0), LH.left + LH.width - (VH.right || 0) - (zH || 0)] : "yAxis" === AH ? "horizontal" === XH ? [LH.top + LH.height - (VH.bottom || 0), LH.top + (VH.top || 0)] : [LH.top + (VH.top || 0) + (zH || 0), LH.top + LH.height - (VH.bottom || 0) - (zH || 0)] : vH.range, bH && (EH = [EH[1], EH[0]]);
          var eH = (0, tH.rb)(vH, rH, MH),
            qH = eH.scale,
            gH = eH.realScaleType;
          qH.domain(TH).range(EH), (0, tH.i)(qH);
          var NH = (0, tH.Z)(qH, uH(uH({}, vH), {}, {
            realScaleType: gH
          }));
          "xAxis" === AH ? (xH = "top" === PH && !OH || "bottom" === PH && OH, GH = LH.left, YH = WH[kH] - xH * vH.height) : "yAxis" === AH && (xH = "left" === PH && !OH || "right" === PH && OH, GH = WH[kH] - xH * vH.width, YH = LH.top);
          var RH = uH(uH(uH({}, vH), NH), {}, {
            realScaleType: gH,
            x: GH,
            y: YH,
            scale: qH,
            width: "xAxis" === AH ? LH.width : vH.width,
            height: "yAxis" === AH ? LH.height : vH.height
          });
          return RH.bandSize = (0, tH.n)(RH, NH), vH.hide || "xAxis" !== AH ? vH.hide || (WH[kH] += (xH ? -1 : 1) * RH.width) : WH[kH] += (xH ? -1 : 1) * RH.height, uH(uH({}, SH), {}, QH({}, hH, RH))
        }), {})
      },
      xH = function(HH, BH) {
        var LH = HH.x,
          AH = HH.y,
          rH = BH.x,
          SH = BH.y;
        return {
          x: Math.min(LH, rH),
          y: Math.min(AH, SH),
          width: Math.abs(rH - LH),
          height: Math.abs(SH - AH)
        }
      },
      vH = function(HH) {
        var BH = HH.x1,
          LH = HH.y1,
          AH = HH.x2,
          rH = HH.y2;
        return xH({
          x: BH,
          y: LH
        }, {
          x: AH,
          y: rH
        })
      },
      PH = function() {
        function HH(BH) {
          ! function(HH, BH) {
            if (!(HH instanceof BH)) throw new TypeError("Cannot call a class as a function")
          }(this, HH), this.scale = BH
        }
        return BH = HH, LH = [{
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
          value: function(HH) {
            var BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              LH = BH.bandAware,
              AH = BH.position;
            if (void 0 !== HH) {
              if (AH) switch (AH) {
                case "start":
                default:
                  return this.scale(HH);
                case "middle":
                  var rH = this.bandwidth ? this.bandwidth() / 2 : 0;
                  return this.scale(HH) + rH;
                case "end":
                  var SH = this.bandwidth ? this.bandwidth() : 0;
                  return this.scale(HH) + SH
              }
              if (LH) {
                var hH = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(HH) + hH
              }
              return this.scale(HH)
            }
          }
        }, {
          key: "isInRange",
          value: function(HH) {
            var BH = this.range(),
              LH = BH[0],
              AH = BH[BH.length - 1];
            return LH <= AH ? HH >= LH && HH <= AH : HH >= AH && HH <= LH
          }
        }], AH = [{
          key: "create",
          value: function(BH) {
            return new HH(BH)
          }
        }], LH && GH(BH.prototype, LH), AH && GH(BH, AH), Object.defineProperty(BH, "prototype", {
          writable: !1
        }), BH;
        var BH, LH, AH
      }();
    QH(PH, "EPS", 1e-4);
    var TH = function(HH) {
      var BH = Object.keys(HH).reduce((function(BH, LH) {
        return uH(uH({}, BH), {}, QH({}, LH, PH.create(HH[LH])))
      }), {});
      return uH(uH({}, BH), {}, {
        apply: function(HH) {
          var LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            AH = LH.bandAware,
            SH = LH.position;
          return rH()(HH, (function(HH, LH) {
            return BH[LH].apply(HH, {
              bandAware: AH,
              position: SH
            })
          }))
        },
        isInRange: function(HH) {
          return hH()(HH, (function(HH, LH) {
            return BH[LH].isInRange(HH)
          }))
        }
      })
    };
    var UH = function(HH) {
      var BH = HH.width,
        LH = HH.height,
        AH = function(HH) {
          return (HH % 180 + 180) % 180
        }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0),
        rH = AH * Math.PI / 180,
        SH = Math.atan(LH / BH),
        hH = rH > SH && rH < Math.PI - SH ? LH / Math.sin(rH) : BH / Math.cos(rH);
      return Math.abs(hH)
    }
  },
  6665: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => lh,
      g: () => mh,
      i: () => Dh,
      k: () => jh,
      m: () => wh,
      n: () => St,
      p: () => fh,
      t: () => Ih,
      w: () => yh,
      x: () => ph,
      z: () => ih,
      D: () => gh,
      G: () => kh,
      J: () => eh,
      M: () => Bt,
      Q: () => oh,
      T: () => sh,
      V: () => Ht,
      W: () => Nh,
      Z: () => Jh,
      ab: () => tt,
      db: () => bh,
      hb: () => qh,
      lb: () => ht,
      ob: () => ch,
      rb: () => nh,
      tb: () => rt,
      vb: () => Zh
    });
    var AH = {};
    LH.r(AH), LH.d(AH, {
      scaleBand: () => rH.b,
      scaleDiverging: () => zS,
      scaleDivergingLog: () => CS,
      scaleDivergingPow: () => XS,
      scaleDivergingSqrt: () => GS,
      scaleDivergingSymlog: () => ES,
      scaleIdentity: () => sB,
      scaleImplicit: () => CL.g,
      scaleLinear: () => aB,
      scaleLog: () => rL,
      scaleOrdinal: () => CL.d,
      scalePoint: () => rH.c,
      scalePow: () => uL,
      scaleQuantile: () => kL,
      scaleQuantize: () => mL,
      scaleRadial: () => ML,
      scaleSequential: () => BS,
      scaleSequentialLog: () => LS,
      scaleSequentialPow: () => rS,
      scaleSequentialQuantile: () => hS,
      scaleSequentialSqrt: () => SS,
      scaleSequentialSymlog: () => AS,
      scaleSqrt: () => QL,
      scaleSymlog: () => zL,
      scaleThreshold: () => oL,
      scaleTime: () => ir,
      scaleUtc: () => pr,
      tickFormat: () => ZB
    });
    var rH = LH(6673);
    const SH = Math.sqrt(50),
      hH = Math.sqrt(10),
      tH = Math.sqrt(2);

    function zH(HH, BH, LH) {
      const AH = (BH - HH) / Math.max(0, LH),
        rH = Math.floor(Math.log10(AH)),
        CH = AH / Math.pow(10, rH),
        EH = CH >= SH ? 10 : CH >= hH ? 5 : CH >= tH ? 2 : 1;
      let XH, GH, YH;
      return rH < 0 ? (YH = Math.pow(10, -rH) / EH, XH = Math.round(HH * YH), GH = Math.round(BH * YH), XH / YH < HH && ++XH, GH / YH > BH && --GH, YH = -YH) : (YH = Math.pow(10, rH) * EH, XH = Math.round(HH / YH), GH = Math.round(BH / YH), XH * YH < HH && ++XH, GH * YH > BH && --GH), GH < XH && .5 <= LH && LH < 2 ? zH(HH, BH, 2 * LH) : [XH, GH, YH]
    }

    function CH(HH, BH, LH) {
      if (!((LH = +LH) > 0)) return [];
      if ((HH = +HH) === (BH = +BH)) return [HH];
      const AH = BH < HH,
        [rH, SH, hH] = AH ? zH(BH, HH, LH) : zH(HH, BH, LH);
      if (!(SH >= rH)) return [];
      const tH = SH - rH + 1,
        CH = new Array(tH);
      if (AH)
        if (hH < 0)
          for (let zH = 0; zH < tH; ++zH) CH[zH] = (SH - zH) / -hH;
        else
          for (let zH = 0; zH < tH; ++zH) CH[zH] = (SH - zH) * hH;
      else if (hH < 0)
        for (let zH = 0; zH < tH; ++zH) CH[zH] = (rH + zH) / -hH;
      else
        for (let zH = 0; zH < tH; ++zH) CH[zH] = (rH + zH) * hH;
      return CH
    }

    function EH(HH, BH, LH) {
      return zH(HH = +HH, BH = +BH, LH = +LH)[2]
    }

    function XH(HH, BH, LH) {
      LH = +LH;
      const AH = (BH = +BH) < (HH = +HH),
        rH = AH ? EH(BH, HH, LH) : EH(HH, BH, LH);
      return (AH ? -1 : 1) * (rH < 0 ? 1 / -rH : rH)
    }

    function GH(HH, BH) {
      return null == HH || null == BH ? NaN : HH < BH ? -1 : HH > BH ? 1 : HH >= BH ? 0 : NaN
    }

    function YH(HH, BH) {
      return null == HH || null == BH ? NaN : BH < HH ? -1 : BH > HH ? 1 : BH >= HH ? 0 : NaN
    }

    function uH(HH) {
      let BH, LH, AH;

      function rH(HH, AH) {
        let rH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          SH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : HH.length;
        if (rH < SH) {
          if (0 !== BH(AH, AH)) return SH;
          do {
            const BH = rH + SH >>> 1;
            LH(HH[BH], AH) < 0 ? rH = BH + 1 : SH = BH
          } while (rH < SH)
        }
        return rH
      }
      return 2 !== HH.length ? (BH = GH, LH = (BH, LH) => GH(HH(BH), LH), AH = (BH, LH) => HH(BH) - LH) : (BH = HH === GH || HH === YH ? HH : QH, LH = HH, AH = HH), {
        left: rH,
        center: function(HH, BH) {
          let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          const SH = rH(HH, BH, LH, (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : HH.length) - 1);
          return SH > LH && AH(HH[SH - 1], BH) > -AH(HH[SH], BH) ? SH - 1 : SH
        },
        right: function(HH, AH) {
          let rH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            SH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : HH.length;
          if (rH < SH) {
            if (0 !== BH(AH, AH)) return SH;
            do {
              const BH = rH + SH >>> 1;
              LH(HH[BH], AH) <= 0 ? rH = BH + 1 : SH = BH
            } while (rH < SH)
          }
          return rH
        }
      }
    }

    function QH() {
      return 0
    }

    function WH(HH) {
      return null === HH ? NaN : +HH
    }
    const MH = uH(GH),
      xH = MH.right,
      vH = (MH.left, uH(WH).center, xH);

    function PH(HH, BH, LH) {
      HH.prototype = BH.prototype = LH, LH.constructor = HH
    }

    function TH(HH, BH) {
      var LH = Object.create(HH.prototype);
      for (var AH in BH) LH[AH] = BH[AH];
      return LH
    }

    function UH() {}
    var VH = .7,
      OH = 1 / VH,
      bH = "\\s*([+-]?\\d+)\\s*",
      kH = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      mH = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      oH = /^#([0-9a-f]{3,8})$/,
      IH = new RegExp(`^rgb\\(${bH},${bH},${bH}\\)$`),
      fH = new RegExp(`^rgb\\(${mH},${mH},${mH}\\)$`),
      lH = new RegExp(`^rgba\\(${bH},${bH},${bH},${kH}\\)$`),
      KH = new RegExp(`^rgba\\(${mH},${mH},${mH},${kH}\\)$`),
      cH = new RegExp(`^hsl\\(${kH},${mH},${mH}\\)$`),
      eH = new RegExp(`^hsla\\(${kH},${mH},${mH},${kH}\\)$`),
      qH = {
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

    function gH() {
      return this.rgb().formatHex()
    }

    function NH() {
      return this.rgb().formatRgb()
    }

    function RH(HH) {
      var BH, LH;
      return HH = (HH + "").trim().toLowerCase(), (BH = oH.exec(HH)) ? (LH = BH[1].length, BH = parseInt(BH[1], 16), 6 === LH ? jH(BH) : 3 === LH ? new DH(BH >> 8 & 15 | BH >> 4 & 240, BH >> 4 & 15 | 240 & BH, (15 & BH) << 4 | 15 & BH, 1) : 8 === LH ? nH(BH >> 24 & 255, BH >> 16 & 255, BH >> 8 & 255, (255 & BH) / 255) : 4 === LH ? nH(BH >> 12 & 15 | BH >> 8 & 240, BH >> 8 & 15 | BH >> 4 & 240, BH >> 4 & 15 | 240 & BH, ((15 & BH) << 4 | 15 & BH) / 255) : null) : (BH = IH.exec(HH)) ? new DH(BH[1], BH[2], BH[3], 1) : (BH = fH.exec(HH)) ? new DH(255 * BH[1] / 100, 255 * BH[2] / 100, 255 * BH[3] / 100, 1) : (BH = lH.exec(HH)) ? nH(BH[1], BH[2], BH[3], BH[4]) : (BH = KH.exec(HH)) ? nH(255 * BH[1] / 100, 255 * BH[2] / 100, 255 * BH[3] / 100, BH[4]) : (BH = cH.exec(HH)) ? JH(BH[1], BH[2] / 100, BH[3] / 100, 1) : (BH = eH.exec(HH)) ? JH(BH[1], BH[2] / 100, BH[3] / 100, BH[4]) : qH.hasOwnProperty(HH) ? jH(qH[HH]) : "transparent" === HH ? new DH(NaN, NaN, NaN, 0) : null
    }

    function jH(HH) {
      return new DH(HH >> 16 & 255, HH >> 8 & 255, 255 & HH, 1)
    }

    function nH(HH, BH, LH, AH) {
      return AH <= 0 && (HH = BH = LH = NaN), new DH(HH, BH, LH, AH)
    }

    function FH(HH, BH, LH, AH) {
      return 1 === arguments.length ? ((rH = HH) instanceof UH || (rH = RH(rH)), rH ? new DH((rH = rH.rgb()).r, rH.g, rH.b, rH.opacity) : new DH) : new DH(HH, BH, LH, null == AH ? 1 : AH);
      var rH
    }

    function DH(HH, BH, LH, AH) {
      this.r = +HH, this.g = +BH, this.b = +LH, this.opacity = +AH
    }

    function wH() {
      return `#${sH(this.r)}${sH(this.g)}${sH(this.b)}`
    }

    function ZH() {
      const HH = dH(this.opacity);
      return `${1===HH?"rgb(":"rgba("}${aH(this.r)}, ${aH(this.g)}, ${aH(this.b)}${1===HH?")":`, ${HH})`}`
    }

    function dH(HH) {
      return isNaN(HH) ? 1 : Math.max(0, Math.min(1, HH))
    }

    function aH(HH) {
      return Math.max(0, Math.min(255, Math.round(HH) || 0))
    }

    function sH(HH) {
      return ((HH = aH(HH)) < 16 ? "0" : "") + HH.toString(16)
    }

    function JH(HH, BH, LH, AH) {
      return AH <= 0 ? HH = BH = LH = NaN : LH <= 0 || LH >= 1 ? HH = BH = NaN : BH <= 0 && (HH = NaN), new pH(HH, BH, LH, AH)
    }

    function iH(HH) {
      if (HH instanceof pH) return new pH(HH.h, HH.s, HH.l, HH.opacity);
      if (HH instanceof UH || (HH = RH(HH)), !HH) return new pH;
      if (HH instanceof pH) return HH;
      var BH = (HH = HH.rgb()).r / 255,
        LH = HH.g / 255,
        AH = HH.b / 255,
        rH = Math.min(BH, LH, AH),
        SH = Math.max(BH, LH, AH),
        hH = NaN,
        tH = SH - rH,
        zH = (SH + rH) / 2;
      return tH ? (hH = BH === SH ? (LH - AH) / tH + 6 * (LH < AH) : LH === SH ? (AH - BH) / tH + 2 : (BH - LH) / tH + 4, tH /= zH < .5 ? SH + rH : 2 - SH - rH, hH *= 60) : tH = zH > 0 && zH < 1 ? 0 : hH, new pH(hH, tH, zH, HH.opacity)
    }

    function pH(HH, BH, LH, AH) {
      this.h = +HH, this.s = +BH, this.l = +LH, this.opacity = +AH
    }

    function yH(HH) {
      return (HH = (HH || 0) % 360) < 0 ? HH + 360 : HH
    }

    function HB(HH) {
      return Math.max(0, Math.min(1, HH || 0))
    }

    function BB(HH, BH, LH) {
      return 255 * (HH < 60 ? BH + (LH - BH) * HH / 60 : HH < 180 ? LH : HH < 240 ? BH + (LH - BH) * (240 - HH) / 60 : BH)
    }

    function LB(HH, BH, LH, AH, rH) {
      var SH = HH * HH,
        hH = SH * HH;
      return ((1 - 3 * HH + 3 * SH - hH) * BH + (4 - 6 * SH + 3 * hH) * LH + (1 + 3 * HH + 3 * SH - 3 * hH) * AH + hH * rH) / 6
    }
    PH(UH, RH, {
      copy(HH) {
        return Object.assign(new this.constructor, this, HH)
      },
      displayable() {
        return this.rgb().displayable()
      },
      hex: gH,
      formatHex: gH,
      formatHex8: function() {
        return this.rgb().formatHex8()
      },
      formatHsl: function() {
        return iH(this).formatHsl()
      },
      formatRgb: NH,
      toString: NH
    }), PH(DH, FH, TH(UH, {
      brighter(HH) {
        return HH = null == HH ? OH : Math.pow(OH, HH), new DH(this.r * HH, this.g * HH, this.b * HH, this.opacity)
      },
      darker(HH) {
        return HH = null == HH ? VH : Math.pow(VH, HH), new DH(this.r * HH, this.g * HH, this.b * HH, this.opacity)
      },
      rgb() {
        return this
      },
      clamp() {
        return new DH(aH(this.r), aH(this.g), aH(this.b), dH(this.opacity))
      },
      displayable() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
      },
      hex: wH,
      formatHex: wH,
      formatHex8: function() {
        return `#${sH(this.r)}${sH(this.g)}${sH(this.b)}${sH(255*(isNaN(this.opacity)?1:this.opacity))}`
      },
      formatRgb: ZH,
      toString: ZH
    })), PH(pH, (function(HH, BH, LH, AH) {
      return 1 === arguments.length ? iH(HH) : new pH(HH, BH, LH, null == AH ? 1 : AH)
    }), TH(UH, {
      brighter(HH) {
        return HH = null == HH ? OH : Math.pow(OH, HH), new pH(this.h, this.s, this.l * HH, this.opacity)
      },
      darker(HH) {
        return HH = null == HH ? VH : Math.pow(VH, HH), new pH(this.h, this.s, this.l * HH, this.opacity)
      },
      rgb() {
        var HH = this.h % 360 + 360 * (this.h < 0),
          BH = isNaN(HH) || isNaN(this.s) ? 0 : this.s,
          LH = this.l,
          AH = LH + (LH < .5 ? LH : 1 - LH) * BH,
          rH = 2 * LH - AH;
        return new DH(BB(HH >= 240 ? HH - 240 : HH + 120, rH, AH), BB(HH, rH, AH), BB(HH < 120 ? HH + 240 : HH - 120, rH, AH), this.opacity)
      },
      clamp() {
        return new pH(yH(this.h), HB(this.s), HB(this.l), dH(this.opacity))
      },
      displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
      },
      formatHsl() {
        const HH = dH(this.opacity);
        return `${1===HH?"hsl(":"hsla("}${yH(this.h)}, ${100*HB(this.s)}%, ${100*HB(this.l)}%${1===HH?")":`, ${HH})`}`
      }
    }));
    const AB = HH => () => HH;

    function rB(HH, BH) {
      return function(LH) {
        return HH + LH * BH
      }
    }

    function SB(HH) {
      return 1 === (HH = +HH) ? hB : function(BH, LH) {
        return LH - BH ? function(HH, BH, LH) {
          return HH = Math.pow(HH, LH), BH = Math.pow(BH, LH) - HH, LH = 1 / LH,
            function(AH) {
              return Math.pow(HH + AH * BH, LH)
            }
        }(BH, LH, HH) : AB(isNaN(BH) ? LH : BH)
      }
    }

    function hB(HH, BH) {
      var LH = BH - HH;
      return LH ? rB(HH, LH) : AB(isNaN(HH) ? BH : HH)
    }
    const tB = function HH(BH) {
      var LH = SB(BH);

      function AH(HH, BH) {
        var AH = LH((HH = FH(HH)).r, (BH = FH(BH)).r),
          rH = LH(HH.g, BH.g),
          SH = LH(HH.b, BH.b),
          hH = hB(HH.opacity, BH.opacity);
        return function(BH) {
          return HH.r = AH(BH), HH.g = rH(BH), HH.b = SH(BH), HH.opacity = hH(BH), HH + ""
        }
      }
      return AH.gamma = HH, AH
    }(1);

    function zB(HH) {
      return function(BH) {
        var LH, AH, rH = BH.length,
          SH = new Array(rH),
          hH = new Array(rH),
          tH = new Array(rH);
        for (LH = 0; LH < rH; ++LH) AH = FH(BH[LH]), SH[LH] = AH.r || 0, hH[LH] = AH.g || 0, tH[LH] = AH.b || 0;
        return SH = HH(SH), hH = HH(hH), tH = HH(tH), AH.opacity = 1,
          function(HH) {
            return AH.r = SH(HH), AH.g = hH(HH), AH.b = tH(HH), AH + ""
          }
      }
    }
    zB((function(HH) {
      var BH = HH.length - 1;
      return function(LH) {
        var AH = LH <= 0 ? LH = 0 : LH >= 1 ? (LH = 1, BH - 1) : Math.floor(LH * BH),
          rH = HH[AH],
          SH = HH[AH + 1],
          hH = AH > 0 ? HH[AH - 1] : 2 * rH - SH,
          tH = AH < BH - 1 ? HH[AH + 2] : 2 * SH - rH;
        return LB((LH - AH / BH) * BH, hH, rH, SH, tH)
      }
    })), zB((function(HH) {
      var BH = HH.length;
      return function(LH) {
        var AH = Math.floor(((LH %= 1) < 0 ? ++LH : LH) * BH),
          rH = HH[(AH + BH - 1) % BH],
          SH = HH[AH % BH],
          hH = HH[(AH + 1) % BH],
          tH = HH[(AH + 2) % BH];
        return LB((LH - AH / BH) * BH, rH, SH, hH, tH)
      }
    }));

    function CB(HH, BH) {
      var LH, AH = BH ? BH.length : 0,
        rH = HH ? Math.min(AH, HH.length) : 0,
        SH = new Array(rH),
        hH = new Array(AH);
      for (LH = 0; LH < rH; ++LH) SH[LH] = MB(HH[LH], BH[LH]);
      for (; LH < AH; ++LH) hH[LH] = BH[LH];
      return function(HH) {
        for (LH = 0; LH < rH; ++LH) hH[LH] = SH[LH](HH);
        return hH
      }
    }

    function EB(HH, BH) {
      var LH = new Date;
      return HH = +HH, BH = +BH,
        function(AH) {
          return LH.setTime(HH * (1 - AH) + BH * AH), LH
        }
    }

    function XB(HH, BH) {
      return HH = +HH, BH = +BH,
        function(LH) {
          return HH * (1 - LH) + BH * LH
        }
    }

    function GB(HH, BH) {
      var LH, AH = {},
        rH = {};
      for (LH in null !== HH && "object" === typeof HH || (HH = {}), null !== BH && "object" === typeof BH || (BH = {}), BH) LH in HH ? AH[LH] = MB(HH[LH], BH[LH]) : rH[LH] = BH[LH];
      return function(HH) {
        for (LH in AH) rH[LH] = AH[LH](HH);
        return rH
      }
    }
    var YB = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      uB = new RegExp(YB.source, "g");

    function QB(HH, BH) {
      var LH, AH, rH, SH = YB.lastIndex = uB.lastIndex = 0,
        hH = -1,
        tH = [],
        zH = [];
      for (HH += "", BH += "";
        (LH = YB.exec(HH)) && (AH = uB.exec(BH));)(rH = AH.index) > SH && (rH = BH.slice(SH, rH), tH[hH] ? tH[hH] += rH : tH[++hH] = rH), (LH = LH[0]) === (AH = AH[0]) ? tH[hH] ? tH[hH] += AH : tH[++hH] = AH : (tH[++hH] = null, zH.push({
        i: hH,
        x: XB(LH, AH)
      })), SH = uB.lastIndex;
      return SH < BH.length && (rH = BH.slice(SH), tH[hH] ? tH[hH] += rH : tH[++hH] = rH), tH.length < 2 ? zH[0] ? function(HH) {
        return function(BH) {
          return HH(BH) + ""
        }
      }(zH[0].x) : function(HH) {
        return function() {
          return HH
        }
      }(BH) : (BH = zH.length, function(HH) {
        for (var LH, AH = 0; AH < BH; ++AH) tH[(LH = zH[AH]).i] = LH.x(HH);
        return tH.join("")
      })
    }

    function WB(HH, BH) {
      BH || (BH = []);
      var LH, AH = HH ? Math.min(BH.length, HH.length) : 0,
        rH = BH.slice();
      return function(SH) {
        for (LH = 0; LH < AH; ++LH) rH[LH] = HH[LH] * (1 - SH) + BH[LH] * SH;
        return rH
      }
    }

    function MB(HH, BH) {
      var LH, AH, rH = typeof BH;
      return null == BH || "boolean" === rH ? AB(BH) : ("number" === rH ? XB : "string" === rH ? (LH = RH(BH)) ? (BH = LH, tB) : QB : BH instanceof RH ? tB : BH instanceof Date ? EB : (AH = BH, !ArrayBuffer.isView(AH) || AH instanceof DataView ? Array.isArray(BH) ? CB : "function" !== typeof BH.valueOf && "function" !== typeof BH.toString || isNaN(BH) ? GB : XB : WB))(HH, BH)
    }

    function xB(HH, BH) {
      return HH = +HH, BH = +BH,
        function(LH) {
          return Math.round(HH * (1 - LH) + BH * LH)
        }
    }

    function vB(HH) {
      return +HH
    }
    var PB = [0, 1];

    function TB(HH) {
      return HH
    }

    function UB(HH, BH) {
      return (BH -= HH = +HH) ? function(LH) {
        return (LH - HH) / BH
      } : (LH = isNaN(BH) ? NaN : .5, function() {
        return LH
      });
      var LH
    }

    function VB(HH, BH, LH) {
      var AH = HH[0],
        rH = HH[1],
        SH = BH[0],
        hH = BH[1];
      return rH < AH ? (AH = UB(rH, AH), SH = LH(hH, SH)) : (AH = UB(AH, rH), SH = LH(SH, hH)),
        function(HH) {
          return SH(AH(HH))
        }
    }

    function OB(HH, BH, LH) {
      var AH = Math.min(HH.length, BH.length) - 1,
        rH = new Array(AH),
        SH = new Array(AH),
        hH = -1;
      for (HH[AH] < HH[0] && (HH = HH.slice().reverse(), BH = BH.slice().reverse()); ++hH < AH;) rH[hH] = UB(HH[hH], HH[hH + 1]), SH[hH] = LH(BH[hH], BH[hH + 1]);
      return function(BH) {
        var LH = vH(HH, BH, 1, AH) - 1;
        return SH[LH](rH[LH](BH))
      }
    }

    function bB(HH, BH) {
      return BH.domain(HH.domain()).range(HH.range()).interpolate(HH.interpolate()).clamp(HH.clamp()).unknown(HH.unknown())
    }

    function kB() {
      var HH, BH, LH, AH, rH, SH, hH = PB,
        tH = PB,
        zH = MB,
        CH = TB;

      function EH() {
        var HH = Math.min(hH.length, tH.length);
        return CH !== TB && (CH = function(HH, BH) {
          var LH;
          return HH > BH && (LH = HH, HH = BH, BH = LH),
            function(LH) {
              return Math.max(HH, Math.min(BH, LH))
            }
        }(hH[0], hH[HH - 1])), AH = HH > 2 ? OB : VB, rH = SH = null, XH
      }

      function XH(BH) {
        return null == BH || isNaN(BH = +BH) ? LH : (rH || (rH = AH(hH.map(HH), tH, zH)))(HH(CH(BH)))
      }
      return XH.invert = function(LH) {
          return CH(BH((SH || (SH = AH(tH, hH.map(HH), XB)))(LH)))
        }, XH.domain = function(HH) {
          return arguments.length ? (hH = Array.from(HH, vB), EH()) : hH.slice()
        }, XH.range = function(HH) {
          return arguments.length ? (tH = Array.from(HH), EH()) : tH.slice()
        }, XH.rangeRound = function(HH) {
          return tH = Array.from(HH), zH = xB, EH()
        }, XH.clamp = function(HH) {
          return arguments.length ? (CH = !!HH || TB, EH()) : CH !== TB
        }, XH.interpolate = function(HH) {
          return arguments.length ? (zH = HH, EH()) : zH
        }, XH.unknown = function(HH) {
          return arguments.length ? (LH = HH, XH) : LH
        },
        function(LH, AH) {
          return HH = LH, BH = AH, EH()
        }
    }

    function mB() {
      return kB()(TB, TB)
    }
    var oB, IB = LH(6679),
      fB = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function lB(HH) {
      if (!(BH = fB.exec(HH))) throw new Error("invalid format: " + HH);
      var BH;
      return new KB({
        fill: BH[1],
        align: BH[2],
        sign: BH[3],
        symbol: BH[4],
        zero: BH[5],
        width: BH[6],
        comma: BH[7],
        precision: BH[8] && BH[8].slice(1),
        trim: BH[9],
        type: BH[10]
      })
    }

    function KB(HH) {
      this.fill = void 0 === HH.fill ? " " : HH.fill + "", this.align = void 0 === HH.align ? ">" : HH.align + "", this.sign = void 0 === HH.sign ? "-" : HH.sign + "", this.symbol = void 0 === HH.symbol ? "" : HH.symbol + "", this.zero = !!HH.zero, this.width = void 0 === HH.width ? void 0 : +HH.width, this.comma = !!HH.comma, this.precision = void 0 === HH.precision ? void 0 : +HH.precision, this.trim = !!HH.trim, this.type = void 0 === HH.type ? "" : HH.type + ""
    }

    function cB(HH, BH) {
      if (!isFinite(HH) || 0 === HH) return null;
      var LH = (HH = BH ? HH.toExponential(BH - 1) : HH.toExponential()).indexOf("e"),
        AH = HH.slice(0, LH);
      return [AH.length > 1 ? AH[0] + AH.slice(2) : AH, +HH.slice(LH + 1)]
    }

    function eB(HH) {
      return (HH = cB(Math.abs(HH))) ? HH[1] : NaN
    }

    function qB(HH, BH) {
      var LH = cB(HH, BH);
      if (!LH) return HH + "";
      var AH = LH[0],
        rH = LH[1];
      return rH < 0 ? "0." + new Array(-rH).join("0") + AH : AH.length > rH + 1 ? AH.slice(0, rH + 1) + "." + AH.slice(rH + 1) : AH + new Array(rH - AH.length + 2).join("0")
    }
    lB.prototype = KB.prototype, KB.prototype.toString = function() {
      return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
    };
    const gB = {
      "%": (HH, BH) => (100 * HH).toFixed(BH),
      b: HH => Math.round(HH).toString(2),
      c: HH => HH + "",
      d: function(HH) {
        return Math.abs(HH = Math.round(HH)) >= 1e21 ? HH.toLocaleString("en").replace(/,/g, "") : HH.toString(10)
      },
      e: (HH, BH) => HH.toExponential(BH),
      f: (HH, BH) => HH.toFixed(BH),
      g: (HH, BH) => HH.toPrecision(BH),
      o: HH => Math.round(HH).toString(8),
      p: (HH, BH) => qB(100 * HH, BH),
      r: qB,
      s: function(HH, BH) {
        var LH = cB(HH, BH);
        if (!LH) return oB = void 0, HH.toPrecision(BH);
        var AH = LH[0],
          rH = LH[1],
          SH = rH - (oB = 3 * Math.max(-8, Math.min(8, Math.floor(rH / 3)))) + 1,
          hH = AH.length;
        return SH === hH ? AH : SH > hH ? AH + new Array(SH - hH + 1).join("0") : SH > 0 ? AH.slice(0, SH) + "." + AH.slice(SH) : "0." + new Array(1 - SH).join("0") + cB(HH, Math.max(0, BH + SH - 1))[0]
      },
      X: HH => Math.round(HH).toString(16).toUpperCase(),
      x: HH => Math.round(HH).toString(16)
    };

    function NB(HH) {
      return HH
    }
    var RB, jB, nB, FB = Array.prototype.map,
      DB = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

    function wB(HH) {
      var BH, LH, AH = void 0 === HH.grouping || void 0 === HH.thousands ? NB : (BH = FB.call(HH.grouping, Number), LH = HH.thousands + "", function(HH, AH) {
          for (var rH = HH.length, SH = [], hH = 0, tH = BH[0], zH = 0; rH > 0 && tH > 0 && (zH + tH + 1 > AH && (tH = Math.max(1, AH - zH)), SH.push(HH.substring(rH -= tH, rH + tH)), !((zH += tH + 1) > AH));) tH = BH[hH = (hH + 1) % BH.length];
          return SH.reverse().join(LH)
        }),
        rH = void 0 === HH.currency ? "" : HH.currency[0] + "",
        SH = void 0 === HH.currency ? "" : HH.currency[1] + "",
        hH = void 0 === HH.decimal ? "." : HH.decimal + "",
        tH = void 0 === HH.numerals ? NB : function(HH) {
          return function(BH) {
            return BH.replace(/[0-9]/g, (function(BH) {
              return HH[+BH]
            }))
          }
        }(FB.call(HH.numerals, String)),
        zH = void 0 === HH.percent ? "%" : HH.percent + "",
        CH = void 0 === HH.minus ? "\u2212" : HH.minus + "",
        EH = void 0 === HH.nan ? "NaN" : HH.nan + "";

      function XH(HH, BH) {
        var LH = (HH = lB(HH)).fill,
          XH = HH.align,
          GH = HH.sign,
          YH = HH.symbol,
          uH = HH.zero,
          QH = HH.width,
          WH = HH.comma,
          MH = HH.precision,
          xH = HH.trim,
          vH = HH.type;
        "n" === vH ? (WH = !0, vH = "g") : gB[vH] || (void 0 === MH && (MH = 12), xH = !0, vH = "g"), (uH || "0" === LH && "=" === XH) && (uH = !0, LH = "0", XH = "=");
        var PH = (BH && void 0 !== BH.prefix ? BH.prefix : "") + ("$" === YH ? rH : "#" === YH && /[boxX]/.test(vH) ? "0" + vH.toLowerCase() : ""),
          TH = ("$" === YH ? SH : /[%p]/.test(vH) ? zH : "") + (BH && void 0 !== BH.suffix ? BH.suffix : ""),
          UH = gB[vH],
          VH = /[defgprs%]/.test(vH);

        function OH(HH) {
          var BH, rH, SH, zH = PH,
            YH = TH;
          if ("c" === vH) YH = UH(HH) + YH, HH = "";
          else {
            var OH = (HH = +HH) < 0 || 1 / HH < 0;
            if (HH = isNaN(HH) ? EH : UH(Math.abs(HH), MH), xH && (HH = function(HH) {
                HH: for (var BH, LH = HH.length, AH = 1, rH = -1; AH < LH; ++AH) switch (HH[AH]) {
                  case ".":
                    rH = BH = AH;
                    break;
                  case "0":
                    0 === rH && (rH = AH), BH = AH;
                    break;
                  default:
                    if (!+HH[AH]) break HH;
                    rH > 0 && (rH = 0)
                }
                return rH > 0 ? HH.slice(0, rH) + HH.slice(BH + 1) : HH
              }(HH)), OH && 0 === +HH && "+" !== GH && (OH = !1), zH = (OH ? "(" === GH ? GH : CH : "-" === GH || "(" === GH ? "" : GH) + zH, YH = ("s" !== vH || isNaN(HH) || void 0 === oB ? "" : DB[8 + oB / 3]) + YH + (OH && "(" === GH ? ")" : ""), VH)
              for (BH = -1, rH = HH.length; ++BH < rH;)
                if (48 > (SH = HH.charCodeAt(BH)) || SH > 57) {
                  YH = (46 === SH ? hH + HH.slice(BH + 1) : HH.slice(BH)) + YH, HH = HH.slice(0, BH);
                  break
                }
          }
          WH && !uH && (HH = AH(HH, 1 / 0));
          var bH = zH.length + HH.length + YH.length,
            kH = bH < QH ? new Array(QH - bH + 1).join(LH) : "";
          switch (WH && uH && (HH = AH(kH + HH, kH.length ? QH - YH.length : 1 / 0), kH = ""), XH) {
            case "<":
              HH = zH + HH + YH + kH;
              break;
            case "=":
              HH = zH + kH + HH + YH;
              break;
            case "^":
              HH = kH.slice(0, bH = kH.length >> 1) + zH + HH + YH + kH.slice(bH);
              break;
            default:
              HH = kH + zH + HH + YH
          }
          return tH(HH)
        }
        return MH = void 0 === MH ? 6 : /[gprs]/.test(vH) ? Math.max(1, Math.min(21, MH)) : Math.max(0, Math.min(20, MH)), OH.toString = function() {
          return HH + ""
        }, OH
      }
      return {
        format: XH,
        formatPrefix: function(HH, BH) {
          var LH = 3 * Math.max(-8, Math.min(8, Math.floor(eB(BH) / 3))),
            AH = Math.pow(10, -LH),
            rH = XH(((HH = lB(HH)).type = "f", HH), {
              suffix: DB[8 + LH / 3]
            });
          return function(HH) {
            return rH(AH * HH)
          }
        }
      }
    }

    function ZB(HH, BH, LH, AH) {
      var rH, SH = XH(HH, BH, LH);
      switch ((AH = lB(null == AH ? ",f" : AH)).type) {
        case "s":
          var hH = Math.max(Math.abs(HH), Math.abs(BH));
          return null != AH.precision || isNaN(rH = function(HH, BH) {
            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(eB(BH) / 3))) - eB(Math.abs(HH)))
          }(SH, hH)) || (AH.precision = rH), nB(AH, hH);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != AH.precision || isNaN(rH = function(HH, BH) {
            return HH = Math.abs(HH), BH = Math.abs(BH) - HH, Math.max(0, eB(BH) - eB(HH)) + 1
          }(SH, Math.max(Math.abs(HH), Math.abs(BH)))) || (AH.precision = rH - ("e" === AH.type));
          break;
        case "f":
        case "%":
          null != AH.precision || isNaN(rH = function(HH) {
            return Math.max(0, -eB(Math.abs(HH)))
          }(SH)) || (AH.precision = rH - 2 * ("%" === AH.type))
      }
      return jB(AH)
    }

    function dB(HH) {
      var BH = HH.domain;
      return HH.ticks = function(HH) {
        var LH = BH();
        return CH(LH[0], LH[LH.length - 1], null == HH ? 10 : HH)
      }, HH.tickFormat = function(HH, LH) {
        var AH = BH();
        return ZB(AH[0], AH[AH.length - 1], null == HH ? 10 : HH, LH)
      }, HH.nice = function(LH) {
        null == LH && (LH = 10);
        var AH, rH, SH = BH(),
          hH = 0,
          tH = SH.length - 1,
          zH = SH[hH],
          CH = SH[tH],
          XH = 10;
        for (CH < zH && (rH = zH, zH = CH, CH = rH, rH = hH, hH = tH, tH = rH); XH-- > 0;) {
          if ((rH = EH(zH, CH, LH)) === AH) return SH[hH] = zH, SH[tH] = CH, BH(SH);
          if (rH > 0) zH = Math.floor(zH / rH) * rH, CH = Math.ceil(CH / rH) * rH;
          else {
            if (!(rH < 0)) break;
            zH = Math.ceil(zH * rH) / rH, CH = Math.floor(CH * rH) / rH
          }
          AH = rH
        }
        return HH
      }, HH
    }

    function aB() {
      var HH = mB();
      return HH.copy = function() {
        return bB(HH, aB())
      }, IB.h.apply(HH, arguments), dB(HH)
    }

    function sB(HH) {
      var BH;

      function LH(HH) {
        return null == HH || isNaN(HH = +HH) ? BH : HH
      }
      return LH.invert = LH, LH.domain = LH.range = function(BH) {
        return arguments.length ? (HH = Array.from(BH, vB), LH) : HH.slice()
      }, LH.unknown = function(HH) {
        return arguments.length ? (BH = HH, LH) : BH
      }, LH.copy = function() {
        return sB(HH).unknown(BH)
      }, HH = arguments.length ? Array.from(HH, vB) : [0, 1], dB(LH)
    }

    function JB(HH, BH) {
      var LH, AH = 0,
        rH = (HH = HH.slice()).length - 1,
        SH = HH[AH],
        hH = HH[rH];
      return hH < SH && (LH = AH, AH = rH, rH = LH, LH = SH, SH = hH, hH = LH), HH[AH] = BH.floor(SH), HH[rH] = BH.ceil(hH), HH
    }

    function iB(HH) {
      return Math.log(HH)
    }

    function pB(HH) {
      return Math.exp(HH)
    }

    function yB(HH) {
      return -Math.log(-HH)
    }

    function HL(HH) {
      return -Math.exp(-HH)
    }

    function BL(HH) {
      return isFinite(HH) ? +("1e" + HH) : HH < 0 ? 0 : HH
    }

    function LL(HH) {
      return (BH, LH) => -HH(-BH, LH)
    }

    function AL(HH) {
      const BH = HH(iB, pB),
        LH = BH.domain;
      let AH, rH, SH = 10;

      function hH() {
        return AH = function(HH) {
          return HH === Math.E ? Math.log : 10 === HH && Math.log10 || 2 === HH && Math.log2 || (HH = Math.log(HH), BH => Math.log(BH) / HH)
        }(SH), rH = function(HH) {
          return 10 === HH ? BL : HH === Math.E ? Math.exp : BH => Math.pow(HH, BH)
        }(SH), LH()[0] < 0 ? (AH = LL(AH), rH = LL(rH), HH(yB, HL)) : HH(iB, pB), BH
      }
      return BH.base = function(HH) {
        return arguments.length ? (SH = +HH, hH()) : SH
      }, BH.domain = function(HH) {
        return arguments.length ? (LH(HH), hH()) : LH()
      }, BH.ticks = HH => {
        const BH = LH();
        let hH = BH[0],
          tH = BH[BH.length - 1];
        const zH = tH < hH;
        zH && ([hH, tH] = [tH, hH]);
        let EH, XH, GH = AH(hH),
          YH = AH(tH);
        const uH = null == HH ? 10 : +HH;
        let QH = [];
        if (!(SH % 1) && YH - GH < uH) {
          if (GH = Math.floor(GH), YH = Math.ceil(YH), hH > 0) {
            for (; GH <= YH; ++GH)
              for (EH = 1; EH < SH; ++EH)
                if (XH = GH < 0 ? EH / rH(-GH) : EH * rH(GH), !(XH < hH)) {
                  if (XH > tH) break;
                  QH.push(XH)
                }
          } else
            for (; GH <= YH; ++GH)
              for (EH = SH - 1; EH >= 1; --EH)
                if (XH = GH > 0 ? EH / rH(-GH) : EH * rH(GH), !(XH < hH)) {
                  if (XH > tH) break;
                  QH.push(XH)
                } 2 * QH.length < uH && (QH = CH(hH, tH, uH))
        } else QH = CH(GH, YH, Math.min(YH - GH, uH)).map(rH);
        return zH ? QH.reverse() : QH
      }, BH.tickFormat = (HH, LH) => {
        if (null == HH && (HH = 10), null == LH && (LH = 10 === SH ? "s" : ","), "function" !== typeof LH && (SH % 1 || null != (LH = lB(LH)).precision || (LH.trim = !0), LH = jB(LH)), HH === 1 / 0) return LH;
        const hH = Math.max(1, SH * HH / BH.ticks().length);
        return HH => {
          let BH = HH / rH(Math.round(AH(HH)));
          return BH * SH < SH - .5 && (BH *= SH), BH <= hH ? LH(HH) : ""
        }
      }, BH.nice = () => LH(JB(LH(), {
        floor: HH => rH(Math.floor(AH(HH))),
        ceil: HH => rH(Math.ceil(AH(HH)))
      })), BH
    }

    function rL() {
      const HH = AL(kB()).domain([1, 10]);
      return HH.copy = () => bB(HH, rL()).base(HH.base()), IB.h.apply(HH, arguments), HH
    }

    function SL(HH) {
      return function(BH) {
        return Math.sign(BH) * Math.log1p(Math.abs(BH / HH))
      }
    }

    function hL(HH) {
      return function(BH) {
        return Math.sign(BH) * Math.expm1(Math.abs(BH)) * HH
      }
    }

    function tL(HH) {
      var BH = 1,
        LH = HH(SL(BH), hL(BH));
      return LH.constant = function(LH) {
        return arguments.length ? HH(SL(BH = +LH), hL(BH)) : BH
      }, dB(LH)
    }

    function zL() {
      var HH = tL(kB());
      return HH.copy = function() {
        return bB(HH, zL()).constant(HH.constant())
      }, IB.h.apply(HH, arguments)
    }
    RB = wB({
      thousands: ",",
      grouping: [3],
      currency: ["$", ""]
    }), jB = RB.format, nB = RB.formatPrefix;
    var CL = LH(6681);

    function EL(HH) {
      return function(BH) {
        return BH < 0 ? -Math.pow(-BH, HH) : Math.pow(BH, HH)
      }
    }

    function XL(HH) {
      return HH < 0 ? -Math.sqrt(-HH) : Math.sqrt(HH)
    }

    function GL(HH) {
      return HH < 0 ? -HH * HH : HH * HH
    }

    function YL(HH) {
      var BH = HH(TB, TB),
        LH = 1;
      return BH.exponent = function(BH) {
        return arguments.length ? 1 === (LH = +BH) ? HH(TB, TB) : .5 === LH ? HH(XL, GL) : HH(EL(LH), EL(1 / LH)) : LH
      }, dB(BH)
    }

    function uL() {
      var HH = YL(kB());
      return HH.copy = function() {
        return bB(HH, uL()).exponent(HH.exponent())
      }, IB.h.apply(HH, arguments), HH
    }

    function QL() {
      return uL.apply(null, arguments).exponent(.5)
    }

    function WL(HH) {
      return Math.sign(HH) * HH * HH
    }

    function ML() {
      var HH, BH = mB(),
        LH = [0, 1],
        AH = !1;

      function rH(LH) {
        var rH = function(HH) {
          return Math.sign(HH) * Math.sqrt(Math.abs(HH))
        }(BH(LH));
        return isNaN(rH) ? HH : AH ? Math.round(rH) : rH
      }
      return rH.invert = function(HH) {
        return BH.invert(WL(HH))
      }, rH.domain = function(HH) {
        return arguments.length ? (BH.domain(HH), rH) : BH.domain()
      }, rH.range = function(HH) {
        return arguments.length ? (BH.range((LH = Array.from(HH, vB)).map(WL)), rH) : LH.slice()
      }, rH.rangeRound = function(HH) {
        return rH.range(HH).round(!0)
      }, rH.round = function(HH) {
        return arguments.length ? (AH = !!HH, rH) : AH
      }, rH.clamp = function(HH) {
        return arguments.length ? (BH.clamp(HH), rH) : BH.clamp()
      }, rH.unknown = function(BH) {
        return arguments.length ? (HH = BH, rH) : HH
      }, rH.copy = function() {
        return ML(BH.domain(), LH).round(AH).clamp(BH.clamp()).unknown(HH)
      }, IB.h.apply(rH, arguments), dB(rH)
    }

    function xL(HH, BH) {
      let LH;
      if (void 0 === BH)
        for (const AH of HH) null != AH && (LH < AH || void 0 === LH && AH >= AH) && (LH = AH);
      else {
        let AH = -1;
        for (let rH of HH) null != (rH = BH(rH, ++AH, HH)) && (LH < rH || void 0 === LH && rH >= rH) && (LH = rH)
      }
      return LH
    }

    function vL(HH, BH) {
      let LH;
      if (void 0 === BH)
        for (const AH of HH) null != AH && (LH > AH || void 0 === LH && AH >= AH) && (LH = AH);
      else {
        let AH = -1;
        for (let rH of HH) null != (rH = BH(rH, ++AH, HH)) && (LH > rH || void 0 === LH && rH >= rH) && (LH = rH)
      }
      return LH
    }

    function PL() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GH;
      if (HH === GH) return TL;
      if ("function" !== typeof HH) throw new TypeError("compare is not a function");
      return (BH, LH) => {
        const AH = HH(BH, LH);
        return AH || 0 === AH ? AH : (0 === HH(LH, LH)) - (0 === HH(BH, BH))
      }
    }

    function TL(HH, BH) {
      return (null == HH || !(HH >= HH)) - (null == BH || !(BH >= BH)) || (HH < BH ? -1 : HH > BH ? 1 : 0)
    }

    function UL(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0,
        rH = arguments.length > 4 ? arguments[4] : void 0;
      if (BH = Math.floor(BH), LH = Math.floor(Math.max(0, LH)), AH = Math.floor(Math.min(HH.length - 1, AH)), !(LH <= BH && BH <= AH)) return HH;
      for (rH = void 0 === rH ? TL : PL(rH); AH > LH;) {
        if (AH - LH > 600) {
          const SH = AH - LH + 1,
            hH = BH - LH + 1,
            tH = Math.log(SH),
            zH = .5 * Math.exp(2 * tH / 3),
            CH = .5 * Math.sqrt(tH * zH * (SH - zH) / SH) * (hH - SH / 2 < 0 ? -1 : 1);
          UL(HH, BH, Math.max(LH, Math.floor(BH - hH * zH / SH + CH)), Math.min(AH, Math.floor(BH + (SH - hH) * zH / SH + CH)), rH)
        }
        const SH = HH[BH];
        let hH = LH,
          tH = AH;
        for (VL(HH, LH, BH), rH(HH[AH], SH) > 0 && VL(HH, LH, AH); hH < tH;) {
          for (VL(HH, hH, tH), ++hH, --tH; rH(HH[hH], SH) < 0;) ++hH;
          for (; rH(HH[tH], SH) > 0;) --tH
        }
        0 === rH(HH[LH], SH) ? VL(HH, LH, tH) : (++tH, VL(HH, tH, AH)), tH <= BH && (LH = tH + 1), BH <= tH && (AH = tH - 1)
      }
      return HH
    }

    function VL(HH, BH, LH) {
      const AH = HH[BH];
      HH[BH] = HH[LH], HH[LH] = AH
    }

    function OL(HH, BH, LH) {
      if (HH = Float64Array.from(function*(HH, BH) {
          if (void 0 === BH)
            for (let LH of HH) null != LH && (LH = +LH) >= LH && (yield LH);
          else {
            let LH = -1;
            for (let AH of HH) null != (AH = BH(AH, ++LH, HH)) && (AH = +AH) >= AH && (yield AH)
          }
        }(HH, LH)), (AH = HH.length) && !isNaN(BH = +BH)) {
        if (BH <= 0 || AH < 2) return vL(HH);
        if (BH >= 1) return xL(HH);
        var AH, rH = (AH - 1) * BH,
          SH = Math.floor(rH),
          hH = xL(UL(HH, SH).subarray(0, SH + 1));
        return hH + (vL(HH.subarray(SH + 1)) - hH) * (rH - SH)
      }
    }

    function bL(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WH;
      if ((AH = HH.length) && !isNaN(BH = +BH)) {
        if (BH <= 0 || AH < 2) return +LH(HH[0], 0, HH);
        if (BH >= 1) return +LH(HH[AH - 1], AH - 1, HH);
        var AH, rH = (AH - 1) * BH,
          SH = Math.floor(rH),
          hH = +LH(HH[SH], SH, HH);
        return hH + (+LH(HH[SH + 1], SH + 1, HH) - hH) * (rH - SH)
      }
    }

    function kL() {
      var HH, BH = [],
        LH = [],
        AH = [];

      function rH() {
        var HH = 0,
          rH = Math.max(1, LH.length);
        for (AH = new Array(rH - 1); ++HH < rH;) AH[HH - 1] = bL(BH, HH / rH);
        return SH
      }

      function SH(BH) {
        return null == BH || isNaN(BH = +BH) ? HH : LH[vH(AH, BH)]
      }
      return SH.invertExtent = function(HH) {
        var rH = LH.indexOf(HH);
        return rH < 0 ? [NaN, NaN] : [rH > 0 ? AH[rH - 1] : BH[0], rH < AH.length ? AH[rH] : BH[BH.length - 1]]
      }, SH.domain = function(HH) {
        if (!arguments.length) return BH.slice();
        BH = [];
        for (let LH of HH) null == LH || isNaN(LH = +LH) || BH.push(LH);
        return BH.sort(GH), rH()
      }, SH.range = function(HH) {
        return arguments.length ? (LH = Array.from(HH), rH()) : LH.slice()
      }, SH.unknown = function(BH) {
        return arguments.length ? (HH = BH, SH) : HH
      }, SH.quantiles = function() {
        return AH.slice()
      }, SH.copy = function() {
        return kL().domain(BH).range(LH).unknown(HH)
      }, IB.h.apply(SH, arguments)
    }

    function mL() {
      var HH, BH = 0,
        LH = 1,
        AH = 1,
        rH = [.5],
        SH = [0, 1];

      function hH(BH) {
        return null != BH && BH <= BH ? SH[vH(rH, BH, 0, AH)] : HH
      }

      function tH() {
        var HH = -1;
        for (rH = new Array(AH); ++HH < AH;) rH[HH] = ((HH + 1) * LH - (HH - AH) * BH) / (AH + 1);
        return hH
      }
      return hH.domain = function(HH) {
        return arguments.length ? ([BH, LH] = HH, BH = +BH, LH = +LH, tH()) : [BH, LH]
      }, hH.range = function(HH) {
        return arguments.length ? (AH = (SH = Array.from(HH)).length - 1, tH()) : SH.slice()
      }, hH.invertExtent = function(HH) {
        var hH = SH.indexOf(HH);
        return hH < 0 ? [NaN, NaN] : hH < 1 ? [BH, rH[0]] : hH >= AH ? [rH[AH - 1], LH] : [rH[hH - 1], rH[hH]]
      }, hH.unknown = function(BH) {
        return arguments.length ? (HH = BH, hH) : hH
      }, hH.thresholds = function() {
        return rH.slice()
      }, hH.copy = function() {
        return mL().domain([BH, LH]).range(SH).unknown(HH)
      }, IB.h.apply(dB(hH), arguments)
    }

    function oL() {
      var HH, BH = [.5],
        LH = [0, 1],
        AH = 1;

      function rH(rH) {
        return null != rH && rH <= rH ? LH[vH(BH, rH, 0, AH)] : HH
      }
      return rH.domain = function(HH) {
        return arguments.length ? (BH = Array.from(HH), AH = Math.min(BH.length, LH.length - 1), rH) : BH.slice()
      }, rH.range = function(HH) {
        return arguments.length ? (LH = Array.from(HH), AH = Math.min(BH.length, LH.length - 1), rH) : LH.slice()
      }, rH.invertExtent = function(HH) {
        var AH = LH.indexOf(HH);
        return [BH[AH - 1], BH[AH]]
      }, rH.unknown = function(BH) {
        return arguments.length ? (HH = BH, rH) : HH
      }, rH.copy = function() {
        return oL().domain(BH).range(LH).unknown(HH)
      }, IB.h.apply(rH, arguments)
    }
    const IL = 1e3,
      fL = 6e4,
      lL = 36e5,
      KL = 864e5,
      cL = 6048e5,
      eL = 2592e6,
      qL = 31536e6,
      gL = new Date,
      NL = new Date;

    function RL(HH, BH, LH, AH) {
      function rH(BH) {
        return HH(BH = 0 === arguments.length ? new Date : new Date(+BH)), BH
      }
      return rH.floor = BH => (HH(BH = new Date(+BH)), BH), rH.ceil = LH => (HH(LH = new Date(LH - 1)), BH(LH, 1), HH(LH), LH), rH.round = HH => {
        const BH = rH(HH),
          LH = rH.ceil(HH);
        return HH - BH < LH - HH ? BH : LH
      }, rH.offset = (HH, LH) => (BH(HH = new Date(+HH), null == LH ? 1 : Math.floor(LH)), HH), rH.range = (LH, AH, SH) => {
        const hH = [];
        if (LH = rH.ceil(LH), SH = null == SH ? 1 : Math.floor(SH), !(LH < AH) || !(SH > 0)) return hH;
        let tH;
        do {
          hH.push(tH = new Date(+LH)), BH(LH, SH), HH(LH)
        } while (tH < LH && LH < AH);
        return hH
      }, rH.filter = LH => RL((BH => {
        if (BH >= BH)
          for (; HH(BH), !LH(BH);) BH.setTime(BH - 1)
      }), ((HH, AH) => {
        if (HH >= HH)
          if (AH < 0)
            for (; ++AH <= 0;)
              for (; BH(HH, -1), !LH(HH););
          else
            for (; --AH >= 0;)
              for (; BH(HH, 1), !LH(HH););
      })), LH && (rH.count = (BH, AH) => (gL.setTime(+BH), NL.setTime(+AH), HH(gL), HH(NL), Math.floor(LH(gL, NL))), rH.every = HH => (HH = Math.floor(HH), isFinite(HH) && HH > 0 ? HH > 1 ? rH.filter(AH ? BH => AH(BH) % HH === 0 : BH => rH.count(0, BH) % HH === 0) : rH : null)), rH
    }
    const jL = RL((() => {}), ((HH, BH) => {
      HH.setTime(+HH + BH)
    }), ((HH, BH) => BH - HH));
    jL.every = HH => (HH = Math.floor(HH), isFinite(HH) && HH > 0 ? HH > 1 ? RL((BH => {
      BH.setTime(Math.floor(BH / HH) * HH)
    }), ((BH, LH) => {
      BH.setTime(+BH + LH * HH)
    }), ((BH, LH) => (LH - BH) / HH)) : jL : null);
    jL.range;
    const nL = RL((HH => {
        HH.setTime(HH - HH.getMilliseconds())
      }), ((HH, BH) => {
        HH.setTime(+HH + BH * IL)
      }), ((HH, BH) => (BH - HH) / IL), (HH => HH.getUTCSeconds())),
      FL = (nL.range, RL((HH => {
        HH.setTime(HH - HH.getMilliseconds() - HH.getSeconds() * IL)
      }), ((HH, BH) => {
        HH.setTime(+HH + BH * fL)
      }), ((HH, BH) => (BH - HH) / fL), (HH => HH.getMinutes()))),
      DL = (FL.range, RL((HH => {
        HH.setUTCSeconds(0, 0)
      }), ((HH, BH) => {
        HH.setTime(+HH + BH * fL)
      }), ((HH, BH) => (BH - HH) / fL), (HH => HH.getUTCMinutes()))),
      wL = (DL.range, RL((HH => {
        HH.setTime(HH - HH.getMilliseconds() - HH.getSeconds() * IL - HH.getMinutes() * fL)
      }), ((HH, BH) => {
        HH.setTime(+HH + BH * lL)
      }), ((HH, BH) => (BH - HH) / lL), (HH => HH.getHours()))),
      ZL = (wL.range, RL((HH => {
        HH.setUTCMinutes(0, 0, 0)
      }), ((HH, BH) => {
        HH.setTime(+HH + BH * lL)
      }), ((HH, BH) => (BH - HH) / lL), (HH => HH.getUTCHours()))),
      dL = (ZL.range, RL((HH => HH.setHours(0, 0, 0, 0)), ((HH, BH) => HH.setDate(HH.getDate() + BH)), ((HH, BH) => (BH - HH - (BH.getTimezoneOffset() - HH.getTimezoneOffset()) * fL) / KL), (HH => HH.getDate() - 1))),
      aL = (dL.range, RL((HH => {
        HH.setUTCHours(0, 0, 0, 0)
      }), ((HH, BH) => {
        HH.setUTCDate(HH.getUTCDate() + BH)
      }), ((HH, BH) => (BH - HH) / KL), (HH => HH.getUTCDate() - 1))),
      sL = (aL.range, RL((HH => {
        HH.setUTCHours(0, 0, 0, 0)
      }), ((HH, BH) => {
        HH.setUTCDate(HH.getUTCDate() + BH)
      }), ((HH, BH) => (BH - HH) / KL), (HH => Math.floor(HH / KL))));
    sL.range;

    function JL(HH) {
      return RL((BH => {
        BH.setDate(BH.getDate() - (BH.getDay() + 7 - HH) % 7), BH.setHours(0, 0, 0, 0)
      }), ((HH, BH) => {
        HH.setDate(HH.getDate() + 7 * BH)
      }), ((HH, BH) => (BH - HH - (BH.getTimezoneOffset() - HH.getTimezoneOffset()) * fL) / cL))
    }
    const iL = JL(0),
      pL = JL(1),
      yL = JL(2),
      HA = JL(3),
      BA = JL(4),
      LA = JL(5),
      AA = JL(6);
    iL.range, pL.range, yL.range, HA.range, BA.range, LA.range, AA.range;

    function rA(HH) {
      return RL((BH => {
        BH.setUTCDate(BH.getUTCDate() - (BH.getUTCDay() + 7 - HH) % 7), BH.setUTCHours(0, 0, 0, 0)
      }), ((HH, BH) => {
        HH.setUTCDate(HH.getUTCDate() + 7 * BH)
      }), ((HH, BH) => (BH - HH) / cL))
    }
    const SA = rA(0),
      hA = rA(1),
      tA = rA(2),
      zA = rA(3),
      CA = rA(4),
      EA = rA(5),
      XA = rA(6),
      GA = (SA.range, hA.range, tA.range, zA.range, CA.range, EA.range, XA.range, RL((HH => {
        HH.setDate(1), HH.setHours(0, 0, 0, 0)
      }), ((HH, BH) => {
        HH.setMonth(HH.getMonth() + BH)
      }), ((HH, BH) => BH.getMonth() - HH.getMonth() + 12 * (BH.getFullYear() - HH.getFullYear())), (HH => HH.getMonth()))),
      YA = (GA.range, RL((HH => {
        HH.setUTCDate(1), HH.setUTCHours(0, 0, 0, 0)
      }), ((HH, BH) => {
        HH.setUTCMonth(HH.getUTCMonth() + BH)
      }), ((HH, BH) => BH.getUTCMonth() - HH.getUTCMonth() + 12 * (BH.getUTCFullYear() - HH.getUTCFullYear())), (HH => HH.getUTCMonth()))),
      uA = (YA.range, RL((HH => {
        HH.setMonth(0, 1), HH.setHours(0, 0, 0, 0)
      }), ((HH, BH) => {
        HH.setFullYear(HH.getFullYear() + BH)
      }), ((HH, BH) => BH.getFullYear() - HH.getFullYear()), (HH => HH.getFullYear())));
    uA.every = HH => isFinite(HH = Math.floor(HH)) && HH > 0 ? RL((BH => {
      BH.setFullYear(Math.floor(BH.getFullYear() / HH) * HH), BH.setMonth(0, 1), BH.setHours(0, 0, 0, 0)
    }), ((BH, LH) => {
      BH.setFullYear(BH.getFullYear() + LH * HH)
    })) : null;
    uA.range;
    const QA = RL((HH => {
      HH.setUTCMonth(0, 1), HH.setUTCHours(0, 0, 0, 0)
    }), ((HH, BH) => {
      HH.setUTCFullYear(HH.getUTCFullYear() + BH)
    }), ((HH, BH) => BH.getUTCFullYear() - HH.getUTCFullYear()), (HH => HH.getUTCFullYear()));
    QA.every = HH => isFinite(HH = Math.floor(HH)) && HH > 0 ? RL((BH => {
      BH.setUTCFullYear(Math.floor(BH.getUTCFullYear() / HH) * HH), BH.setUTCMonth(0, 1), BH.setUTCHours(0, 0, 0, 0)
    }), ((BH, LH) => {
      BH.setUTCFullYear(BH.getUTCFullYear() + LH * HH)
    })) : null;
    QA.range;

    function WA(HH, BH, LH, AH, rH, SH) {
      const hH = [
        [nL, 1, IL],
        [nL, 5, 5e3],
        [nL, 15, 15e3],
        [nL, 30, 3e4],
        [SH, 1, fL],
        [SH, 5, 3e5],
        [SH, 15, 9e5],
        [SH, 30, 18e5],
        [rH, 1, lL],
        [rH, 3, 108e5],
        [rH, 6, 216e5],
        [rH, 12, 432e5],
        [AH, 1, KL],
        [AH, 2, 1728e5],
        [LH, 1, cL],
        [BH, 1, eL],
        [BH, 3, 7776e6],
        [HH, 1, qL]
      ];

      function tH(BH, LH, AH) {
        const rH = Math.abs(LH - BH) / AH,
          SH = uH((HH => {
            let [, , BH] = HH;
            return BH
          })).right(hH, rH);
        if (SH === hH.length) return HH.every(XH(BH / qL, LH / qL, AH));
        if (0 === SH) return jL.every(Math.max(XH(BH, LH, AH), 1));
        const [tH, zH] = hH[rH / hH[SH - 1][2] < hH[SH][2] / rH ? SH - 1 : SH];
        return tH.every(zH)
      }
      return [function(HH, BH, LH) {
        const AH = BH < HH;
        AH && ([HH, BH] = [BH, HH]);
        const rH = LH && "function" === typeof LH.range ? LH : tH(HH, BH, LH),
          SH = rH ? rH.range(HH, +BH + 1) : [];
        return AH ? SH.reverse() : SH
      }, tH]
    }
    const [MA, xA] = WA(QA, YA, SA, sL, ZL, DL), [vA, PA] = WA(uA, GA, iL, dL, wL, FL);

    function TA(HH) {
      if (0 <= HH.y && HH.y < 100) {
        var BH = new Date(-1, HH.m, HH.d, HH.H, HH.M, HH.S, HH.L);
        return BH.setFullYear(HH.y), BH
      }
      return new Date(HH.y, HH.m, HH.d, HH.H, HH.M, HH.S, HH.L)
    }

    function UA(HH) {
      if (0 <= HH.y && HH.y < 100) {
        var BH = new Date(Date.UTC(-1, HH.m, HH.d, HH.H, HH.M, HH.S, HH.L));
        return BH.setUTCFullYear(HH.y), BH
      }
      return new Date(Date.UTC(HH.y, HH.m, HH.d, HH.H, HH.M, HH.S, HH.L))
    }

    function VA(HH, BH, LH) {
      return {
        y: HH,
        m: BH,
        d: LH,
        H: 0,
        M: 0,
        S: 0,
        L: 0
      }
    }
    var OA, bA, kA, mA = {
        "-": "",
        _: " ",
        0: "0"
      },
      oA = /^\s*\d+/,
      IA = /^%/,
      fA = /[\\^$*+?|[\]().{}]/g;

    function lA(HH, BH, LH) {
      var AH = HH < 0 ? "-" : "",
        rH = (AH ? -HH : HH) + "",
        SH = rH.length;
      return AH + (SH < LH ? new Array(LH - SH + 1).join(BH) + rH : rH)
    }

    function KA(HH) {
      return HH.replace(fA, "\\$&")
    }

    function cA(HH) {
      return new RegExp("^(?:" + HH.map(KA).join("|") + ")", "i")
    }

    function eA(HH) {
      return new Map(HH.map(((HH, BH) => [HH.toLowerCase(), BH])))
    }

    function qA(HH, BH, LH) {
      var AH = oA.exec(BH.slice(LH, LH + 1));
      return AH ? (HH.w = +AH[0], LH + AH[0].length) : -1
    }

    function gA(HH, BH, LH) {
      var AH = oA.exec(BH.slice(LH, LH + 1));
      return AH ? (HH.u = +AH[0], LH + AH[0].length) : -1
    }

    function NA(HH, BH, LH) {
      var AH = oA.exec(BH.slice(LH, LH + 2));
      return AH ? (HH.U = +AH[0], LH + AH[0].length) : -1
    }

    function RA(HH, BH, LH) {
      var AH = oA.exec(BH.slice(LH, LH + 2));
      return AH ? (HH.V = +AH[0], LH + AH[0].length) : -1
    }

    function jA(HH, BH, LH) {
      var AH = oA.exec(BH.slice(LH, LH + 2));
      return AH ? (HH.W = +AH[0], LH + AH[0].length) : -1
    }

    function nA(HH, BH, LH) {
      var AH = oA.exec(BH.slice(LH, LH + 4));
      return AH ? (HH.y = +AH[0], LH + AH[0].length) : -1
    }

    function FA(HH, BH, LH) {
      var AH = oA.exec(BH.slice(LH, LH + 2));
      return AH ? (HH.y = +AH[0] + (+AH[0] > 68 ? 1900 : 2e3), LH + AH[0].length) : -1
    }

    function DA(HH, BH, LH) {
      var AH = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(BH.slice(LH, LH + 6));
      return AH ? (HH.Z = AH[1] ? 0 : -(AH[2] + (AH[3] || "00")), LH + AH[0].length) : -1
    }

    function wA(HH, BH, LH) {
      var AH = oA.exec(BH.slice(LH, LH + 1));
      return AH ? (HH.q = 3 * AH[0] - 3, LH + AH[0].length) : -1
    }

    function ZA(HH, BH, LH) {
      var AH = oA.exec(BH.slice(LH, LH + 2));
      return AH ? (HH.m = AH[0] - 1, LH + AH[0].length) : -1
    }

    function dA(HH, BH, LH) {
      var AH = oA.exec(BH.slice(LH, LH + 2));
      return AH ? (HH.d = +AH[0], LH + AH[0].length) : -1
    }

    function aA(HH, BH, LH) {
      var AH = oA.exec(BH.slice(LH, LH + 3));
      return AH ? (HH.m = 0, HH.d = +AH[0], LH + AH[0].length) : -1
    }

    function sA(HH, BH, LH) {
      var AH = oA.exec(BH.slice(LH, LH + 2));
      return AH ? (HH.H = +AH[0], LH + AH[0].length) : -1
    }

    function JA(HH, BH, LH) {
      var AH = oA.exec(BH.slice(LH, LH + 2));
      return AH ? (HH.M = +AH[0], LH + AH[0].length) : -1
    }

    function iA(HH, BH, LH) {
      var AH = oA.exec(BH.slice(LH, LH + 2));
      return AH ? (HH.S = +AH[0], LH + AH[0].length) : -1
    }

    function pA(HH, BH, LH) {
      var AH = oA.exec(BH.slice(LH, LH + 3));
      return AH ? (HH.L = +AH[0], LH + AH[0].length) : -1
    }

    function yA(HH, BH, LH) {
      var AH = oA.exec(BH.slice(LH, LH + 6));
      return AH ? (HH.L = Math.floor(AH[0] / 1e3), LH + AH[0].length) : -1
    }

    function Hr(HH, BH, LH) {
      var AH = IA.exec(BH.slice(LH, LH + 1));
      return AH ? LH + AH[0].length : -1
    }

    function Br(HH, BH, LH) {
      var AH = oA.exec(BH.slice(LH));
      return AH ? (HH.Q = +AH[0], LH + AH[0].length) : -1
    }

    function Lr(HH, BH, LH) {
      var AH = oA.exec(BH.slice(LH));
      return AH ? (HH.s = +AH[0], LH + AH[0].length) : -1
    }

    function Ar(HH, BH) {
      return lA(HH.getDate(), BH, 2)
    }

    function rr(HH, BH) {
      return lA(HH.getHours(), BH, 2)
    }

    function Sr(HH, BH) {
      return lA(HH.getHours() % 12 || 12, BH, 2)
    }

    function hr(HH, BH) {
      return lA(1 + dL.count(uA(HH), HH), BH, 3)
    }

    function tr(HH, BH) {
      return lA(HH.getMilliseconds(), BH, 3)
    }

    function zr(HH, BH) {
      return tr(HH, BH) + "000"
    }

    function Cr(HH, BH) {
      return lA(HH.getMonth() + 1, BH, 2)
    }

    function Er(HH, BH) {
      return lA(HH.getMinutes(), BH, 2)
    }

    function Xr(HH, BH) {
      return lA(HH.getSeconds(), BH, 2)
    }

    function Gr(HH) {
      var BH = HH.getDay();
      return 0 === BH ? 7 : BH
    }

    function Yr(HH, BH) {
      return lA(iL.count(uA(HH) - 1, HH), BH, 2)
    }

    function ur(HH) {
      var BH = HH.getDay();
      return BH >= 4 || 0 === BH ? BA(HH) : BA.ceil(HH)
    }

    function Qr(HH, BH) {
      return HH = ur(HH), lA(BA.count(uA(HH), HH) + (4 === uA(HH).getDay()), BH, 2)
    }

    function Wr(HH) {
      return HH.getDay()
    }

    function Mr(HH, BH) {
      return lA(pL.count(uA(HH) - 1, HH), BH, 2)
    }

    function xr(HH, BH) {
      return lA(HH.getFullYear() % 100, BH, 2)
    }

    function vr(HH, BH) {
      return lA((HH = ur(HH)).getFullYear() % 100, BH, 2)
    }

    function Pr(HH, BH) {
      return lA(HH.getFullYear() % 1e4, BH, 4)
    }

    function Tr(HH, BH) {
      var LH = HH.getDay();
      return lA((HH = LH >= 4 || 0 === LH ? BA(HH) : BA.ceil(HH)).getFullYear() % 1e4, BH, 4)
    }

    function Ur(HH) {
      var BH = HH.getTimezoneOffset();
      return (BH > 0 ? "-" : (BH *= -1, "+")) + lA(BH / 60 | 0, "0", 2) + lA(BH % 60, "0", 2)
    }

    function Vr(HH, BH) {
      return lA(HH.getUTCDate(), BH, 2)
    }

    function Or(HH, BH) {
      return lA(HH.getUTCHours(), BH, 2)
    }

    function br(HH, BH) {
      return lA(HH.getUTCHours() % 12 || 12, BH, 2)
    }

    function kr(HH, BH) {
      return lA(1 + aL.count(QA(HH), HH), BH, 3)
    }

    function mr(HH, BH) {
      return lA(HH.getUTCMilliseconds(), BH, 3)
    }

    function or(HH, BH) {
      return mr(HH, BH) + "000"
    }

    function Ir(HH, BH) {
      return lA(HH.getUTCMonth() + 1, BH, 2)
    }

    function fr(HH, BH) {
      return lA(HH.getUTCMinutes(), BH, 2)
    }

    function lr(HH, BH) {
      return lA(HH.getUTCSeconds(), BH, 2)
    }

    function Kr(HH) {
      var BH = HH.getUTCDay();
      return 0 === BH ? 7 : BH
    }

    function cr(HH, BH) {
      return lA(SA.count(QA(HH) - 1, HH), BH, 2)
    }

    function er(HH) {
      var BH = HH.getUTCDay();
      return BH >= 4 || 0 === BH ? CA(HH) : CA.ceil(HH)
    }

    function qr(HH, BH) {
      return HH = er(HH), lA(CA.count(QA(HH), HH) + (4 === QA(HH).getUTCDay()), BH, 2)
    }

    function gr(HH) {
      return HH.getUTCDay()
    }

    function Nr(HH, BH) {
      return lA(hA.count(QA(HH) - 1, HH), BH, 2)
    }

    function Rr(HH, BH) {
      return lA(HH.getUTCFullYear() % 100, BH, 2)
    }

    function jr(HH, BH) {
      return lA((HH = er(HH)).getUTCFullYear() % 100, BH, 2)
    }

    function nr(HH, BH) {
      return lA(HH.getUTCFullYear() % 1e4, BH, 4)
    }

    function Fr(HH, BH) {
      var LH = HH.getUTCDay();
      return lA((HH = LH >= 4 || 0 === LH ? CA(HH) : CA.ceil(HH)).getUTCFullYear() % 1e4, BH, 4)
    }

    function Dr() {
      return "+0000"
    }

    function wr() {
      return "%"
    }

    function Zr(HH) {
      return +HH
    }

    function dr(HH) {
      return Math.floor(+HH / 1e3)
    }

    function ar(HH) {
      return new Date(HH)
    }

    function sr(HH) {
      return HH instanceof Date ? +HH : +new Date(+HH)
    }

    function Jr(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH) {
      var EH = mB(),
        XH = EH.invert,
        GH = EH.domain,
        YH = CH(".%L"),
        uH = CH(":%S"),
        QH = CH("%I:%M"),
        WH = CH("%I %p"),
        MH = CH("%a %d"),
        xH = CH("%b %d"),
        vH = CH("%B"),
        PH = CH("%Y");

      function TH(HH) {
        return (zH(HH) < HH ? YH : tH(HH) < HH ? uH : hH(HH) < HH ? QH : SH(HH) < HH ? WH : AH(HH) < HH ? rH(HH) < HH ? MH : xH : LH(HH) < HH ? vH : PH)(HH)
      }
      return EH.invert = function(HH) {
        return new Date(XH(HH))
      }, EH.domain = function(HH) {
        return arguments.length ? GH(Array.from(HH, sr)) : GH().map(ar)
      }, EH.ticks = function(BH) {
        var LH = GH();
        return HH(LH[0], LH[LH.length - 1], null == BH ? 10 : BH)
      }, EH.tickFormat = function(HH, BH) {
        return null == BH ? TH : CH(BH)
      }, EH.nice = function(HH) {
        var LH = GH();
        return HH && "function" === typeof HH.range || (HH = BH(LH[0], LH[LH.length - 1], null == HH ? 10 : HH)), HH ? GH(JB(LH, HH)) : EH
      }, EH.copy = function() {
        return bB(EH, Jr(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH))
      }, EH
    }

    function ir() {
      return IB.h.apply(Jr(vA, PA, uA, GA, iL, dL, wL, FL, nL, bA).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
    }

    function pr() {
      return IB.h.apply(Jr(MA, xA, QA, YA, SA, aL, ZL, DL, nL, kA).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
    }

    function yr() {
      var HH, BH, LH, AH, rH, SH = 0,
        hH = 1,
        tH = TB,
        zH = !1;

      function CH(BH) {
        return null == BH || isNaN(BH = +BH) ? rH : tH(0 === LH ? .5 : (BH = (AH(BH) - HH) * LH, zH ? Math.max(0, Math.min(1, BH)) : BH))
      }

      function EH(HH) {
        return function(BH) {
          var LH, AH;
          return arguments.length ? ([LH, AH] = BH, tH = HH(LH, AH), CH) : [tH(0), tH(1)]
        }
      }
      return CH.domain = function(rH) {
          return arguments.length ? ([SH, hH] = rH, HH = AH(SH = +SH), BH = AH(hH = +hH), LH = HH === BH ? 0 : 1 / (BH - HH), CH) : [SH, hH]
        }, CH.clamp = function(HH) {
          return arguments.length ? (zH = !!HH, CH) : zH
        }, CH.interpolator = function(HH) {
          return arguments.length ? (tH = HH, CH) : tH
        }, CH.range = EH(MB), CH.rangeRound = EH(xB), CH.unknown = function(HH) {
          return arguments.length ? (rH = HH, CH) : rH
        },
        function(rH) {
          return AH = rH, HH = rH(SH), BH = rH(hH), LH = HH === BH ? 0 : 1 / (BH - HH), CH
        }
    }

    function HS(HH, BH) {
      return BH.domain(HH.domain()).interpolator(HH.interpolator()).clamp(HH.clamp()).unknown(HH.unknown())
    }

    function BS() {
      var HH = dB(yr()(TB));
      return HH.copy = function() {
        return HS(HH, BS())
      }, IB.d.apply(HH, arguments)
    }

    function LS() {
      var HH = AL(yr()).domain([1, 10]);
      return HH.copy = function() {
        return HS(HH, LS()).base(HH.base())
      }, IB.d.apply(HH, arguments)
    }

    function AS() {
      var HH = tL(yr());
      return HH.copy = function() {
        return HS(HH, AS()).constant(HH.constant())
      }, IB.d.apply(HH, arguments)
    }

    function rS() {
      var HH = YL(yr());
      return HH.copy = function() {
        return HS(HH, rS()).exponent(HH.exponent())
      }, IB.d.apply(HH, arguments)
    }

    function SS() {
      return rS.apply(null, arguments).exponent(.5)
    }

    function hS() {
      var HH = [],
        BH = TB;

      function LH(LH) {
        if (null != LH && !isNaN(LH = +LH)) return BH((vH(HH, LH, 1) - 1) / (HH.length - 1))
      }
      return LH.domain = function(BH) {
        if (!arguments.length) return HH.slice();
        HH = [];
        for (let LH of BH) null == LH || isNaN(LH = +LH) || HH.push(LH);
        return HH.sort(GH), LH
      }, LH.interpolator = function(HH) {
        return arguments.length ? (BH = HH, LH) : BH
      }, LH.range = function() {
        return HH.map(((LH, AH) => BH(AH / (HH.length - 1))))
      }, LH.quantiles = function(BH) {
        return Array.from({
          length: BH + 1
        }, ((LH, AH) => OL(HH, AH / BH)))
      }, LH.copy = function() {
        return hS(BH).domain(HH)
      }, IB.d.apply(LH, arguments)
    }

    function tS() {
      var HH, BH, LH, AH, rH, SH, hH, tH = 0,
        zH = .5,
        CH = 1,
        EH = 1,
        XH = TB,
        GH = !1;

      function YH(HH) {
        return isNaN(HH = +HH) ? hH : (HH = .5 + ((HH = +SH(HH)) - BH) * (EH * HH < EH * BH ? AH : rH), XH(GH ? Math.max(0, Math.min(1, HH)) : HH))
      }

      function uH(HH) {
        return function(BH) {
          var LH, AH, rH;
          return arguments.length ? ([LH, AH, rH] = BH, XH = function(HH, BH) {
            void 0 === BH && (BH = HH, HH = MB);
            for (var LH = 0, AH = BH.length - 1, rH = BH[0], SH = new Array(AH < 0 ? 0 : AH); LH < AH;) SH[LH] = HH(rH, rH = BH[++LH]);
            return function(HH) {
              var BH = Math.max(0, Math.min(AH - 1, Math.floor(HH *= AH)));
              return SH[BH](HH - BH)
            }
          }(HH, [LH, AH, rH]), YH) : [XH(0), XH(.5), XH(1)]
        }
      }
      return YH.domain = function(hH) {
          return arguments.length ? ([tH, zH, CH] = hH, HH = SH(tH = +tH), BH = SH(zH = +zH), LH = SH(CH = +CH), AH = HH === BH ? 0 : .5 / (BH - HH), rH = BH === LH ? 0 : .5 / (LH - BH), EH = BH < HH ? -1 : 1, YH) : [tH, zH, CH]
        }, YH.clamp = function(HH) {
          return arguments.length ? (GH = !!HH, YH) : GH
        }, YH.interpolator = function(HH) {
          return arguments.length ? (XH = HH, YH) : XH
        }, YH.range = uH(MB), YH.rangeRound = uH(xB), YH.unknown = function(HH) {
          return arguments.length ? (hH = HH, YH) : hH
        },
        function(hH) {
          return SH = hH, HH = hH(tH), BH = hH(zH), LH = hH(CH), AH = HH === BH ? 0 : .5 / (BH - HH), rH = BH === LH ? 0 : .5 / (LH - BH), EH = BH < HH ? -1 : 1, YH
        }
    }

    function zS() {
      var HH = dB(tS()(TB));
      return HH.copy = function() {
        return HS(HH, zS())
      }, IB.d.apply(HH, arguments)
    }

    function CS() {
      var HH = AL(tS()).domain([.1, 1, 10]);
      return HH.copy = function() {
        return HS(HH, CS()).base(HH.base())
      }, IB.d.apply(HH, arguments)
    }

    function ES() {
      var HH = tL(tS());
      return HH.copy = function() {
        return HS(HH, ES()).constant(HH.constant())
      }, IB.d.apply(HH, arguments)
    }

    function XS() {
      var HH = YL(tS());
      return HH.copy = function() {
        return HS(HH, XS()).exponent(HH.exponent())
      }, IB.d.apply(HH, arguments)
    }

    function GS() {
      return XS.apply(null, arguments).exponent(.5)
    }

    function YS(HH, BH) {
      if ((rH = HH.length) > 1)
        for (var LH, AH, rH, SH = 1, hH = HH[BH[0]], tH = hH.length; SH < rH; ++SH)
          for (AH = hH, hH = HH[BH[SH]], LH = 0; LH < tH; ++LH) hH[LH][1] += hH[LH][0] = isNaN(AH[LH][1]) ? AH[LH][0] : AH[LH][1]
    }! function(HH) {
      OA = function(HH) {
        var BH = HH.dateTime,
          LH = HH.date,
          AH = HH.time,
          rH = HH.periods,
          SH = HH.days,
          hH = HH.shortDays,
          tH = HH.months,
          zH = HH.shortMonths,
          CH = cA(rH),
          EH = eA(rH),
          XH = cA(SH),
          GH = eA(SH),
          YH = cA(hH),
          uH = eA(hH),
          QH = cA(tH),
          WH = eA(tH),
          MH = cA(zH),
          xH = eA(zH),
          vH = {
            a: function(HH) {
              return hH[HH.getDay()]
            },
            A: function(HH) {
              return SH[HH.getDay()]
            },
            b: function(HH) {
              return zH[HH.getMonth()]
            },
            B: function(HH) {
              return tH[HH.getMonth()]
            },
            c: null,
            d: Ar,
            e: Ar,
            f: zr,
            g: vr,
            G: Tr,
            H: rr,
            I: Sr,
            j: hr,
            L: tr,
            m: Cr,
            M: Er,
            p: function(HH) {
              return rH[+(HH.getHours() >= 12)]
            },
            q: function(HH) {
              return 1 + ~~(HH.getMonth() / 3)
            },
            Q: Zr,
            s: dr,
            S: Xr,
            u: Gr,
            U: Yr,
            V: Qr,
            w: Wr,
            W: Mr,
            x: null,
            X: null,
            y: xr,
            Y: Pr,
            Z: Ur,
            "%": wr
          },
          PH = {
            a: function(HH) {
              return hH[HH.getUTCDay()]
            },
            A: function(HH) {
              return SH[HH.getUTCDay()]
            },
            b: function(HH) {
              return zH[HH.getUTCMonth()]
            },
            B: function(HH) {
              return tH[HH.getUTCMonth()]
            },
            c: null,
            d: Vr,
            e: Vr,
            f: or,
            g: jr,
            G: Fr,
            H: Or,
            I: br,
            j: kr,
            L: mr,
            m: Ir,
            M: fr,
            p: function(HH) {
              return rH[+(HH.getUTCHours() >= 12)]
            },
            q: function(HH) {
              return 1 + ~~(HH.getUTCMonth() / 3)
            },
            Q: Zr,
            s: dr,
            S: lr,
            u: Kr,
            U: cr,
            V: qr,
            w: gr,
            W: Nr,
            x: null,
            X: null,
            y: Rr,
            Y: nr,
            Z: Dr,
            "%": wr
          },
          TH = {
            a: function(HH, BH, LH) {
              var AH = YH.exec(BH.slice(LH));
              return AH ? (HH.w = uH.get(AH[0].toLowerCase()), LH + AH[0].length) : -1
            },
            A: function(HH, BH, LH) {
              var AH = XH.exec(BH.slice(LH));
              return AH ? (HH.w = GH.get(AH[0].toLowerCase()), LH + AH[0].length) : -1
            },
            b: function(HH, BH, LH) {
              var AH = MH.exec(BH.slice(LH));
              return AH ? (HH.m = xH.get(AH[0].toLowerCase()), LH + AH[0].length) : -1
            },
            B: function(HH, BH, LH) {
              var AH = QH.exec(BH.slice(LH));
              return AH ? (HH.m = WH.get(AH[0].toLowerCase()), LH + AH[0].length) : -1
            },
            c: function(HH, LH, AH) {
              return OH(HH, BH, LH, AH)
            },
            d: dA,
            e: dA,
            f: yA,
            g: FA,
            G: nA,
            H: sA,
            I: sA,
            j: aA,
            L: pA,
            m: ZA,
            M: JA,
            p: function(HH, BH, LH) {
              var AH = CH.exec(BH.slice(LH));
              return AH ? (HH.p = EH.get(AH[0].toLowerCase()), LH + AH[0].length) : -1
            },
            q: wA,
            Q: Br,
            s: Lr,
            S: iA,
            u: gA,
            U: NA,
            V: RA,
            w: qA,
            W: jA,
            x: function(HH, BH, AH) {
              return OH(HH, LH, BH, AH)
            },
            X: function(HH, BH, LH) {
              return OH(HH, AH, BH, LH)
            },
            y: FA,
            Y: nA,
            Z: DA,
            "%": Hr
          };

        function UH(HH, BH) {
          return function(LH) {
            var AH, rH, SH, hH = [],
              tH = -1,
              zH = 0,
              CH = HH.length;
            for (LH instanceof Date || (LH = new Date(+LH)); ++tH < CH;) 37 === HH.charCodeAt(tH) && (hH.push(HH.slice(zH, tH)), null != (rH = mA[AH = HH.charAt(++tH)]) ? AH = HH.charAt(++tH) : rH = "e" === AH ? " " : "0", (SH = BH[AH]) && (AH = SH(LH, rH)), hH.push(AH), zH = tH + 1);
            return hH.push(HH.slice(zH, tH)), hH.join("")
          }
        }

        function VH(HH, BH) {
          return function(LH) {
            var AH, rH, SH = VA(1900, void 0, 1);
            if (OH(SH, HH, LH += "", 0) != LH.length) return null;
            if ("Q" in SH) return new Date(SH.Q);
            if ("s" in SH) return new Date(1e3 * SH.s + ("L" in SH ? SH.L : 0));
            if (BH && !("Z" in SH) && (SH.Z = 0), "p" in SH && (SH.H = SH.H % 12 + 12 * SH.p), void 0 === SH.m && (SH.m = "q" in SH ? SH.q : 0), "V" in SH) {
              if (SH.V < 1 || SH.V > 53) return null;
              "w" in SH || (SH.w = 1), "Z" in SH ? (rH = (AH = UA(VA(SH.y, 0, 1))).getUTCDay(), AH = rH > 4 || 0 === rH ? hA.ceil(AH) : hA(AH), AH = aL.offset(AH, 7 * (SH.V - 1)), SH.y = AH.getUTCFullYear(), SH.m = AH.getUTCMonth(), SH.d = AH.getUTCDate() + (SH.w + 6) % 7) : (rH = (AH = TA(VA(SH.y, 0, 1))).getDay(), AH = rH > 4 || 0 === rH ? pL.ceil(AH) : pL(AH), AH = dL.offset(AH, 7 * (SH.V - 1)), SH.y = AH.getFullYear(), SH.m = AH.getMonth(), SH.d = AH.getDate() + (SH.w + 6) % 7)
            } else("W" in SH || "U" in SH) && ("w" in SH || (SH.w = "u" in SH ? SH.u % 7 : "W" in SH ? 1 : 0), rH = "Z" in SH ? UA(VA(SH.y, 0, 1)).getUTCDay() : TA(VA(SH.y, 0, 1)).getDay(), SH.m = 0, SH.d = "W" in SH ? (SH.w + 6) % 7 + 7 * SH.W - (rH + 5) % 7 : SH.w + 7 * SH.U - (rH + 6) % 7);
            return "Z" in SH ? (SH.H += SH.Z / 100 | 0, SH.M += SH.Z % 100, UA(SH)) : TA(SH)
          }
        }

        function OH(HH, BH, LH, AH) {
          for (var rH, SH, hH = 0, tH = BH.length, zH = LH.length; hH < tH;) {
            if (AH >= zH) return -1;
            if (37 === (rH = BH.charCodeAt(hH++))) {
              if (rH = BH.charAt(hH++), !(SH = TH[rH in mA ? BH.charAt(hH++) : rH]) || (AH = SH(HH, LH, AH)) < 0) return -1
            } else if (rH != LH.charCodeAt(AH++)) return -1
          }
          return AH
        }
        return vH.x = UH(LH, vH), vH.X = UH(AH, vH), vH.c = UH(BH, vH), PH.x = UH(LH, PH), PH.X = UH(AH, PH), PH.c = UH(BH, PH), {
          format: function(HH) {
            var BH = UH(HH += "", vH);
            return BH.toString = function() {
              return HH
            }, BH
          },
          parse: function(HH) {
            var BH = VH(HH += "", !1);
            return BH.toString = function() {
              return HH
            }, BH
          },
          utcFormat: function(HH) {
            var BH = UH(HH += "", PH);
            return BH.toString = function() {
              return HH
            }, BH
          },
          utcParse: function(HH) {
            var BH = VH(HH += "", !0);
            return BH.toString = function() {
              return HH
            }, BH
          }
        }
      }(HH), bA = OA.format, OA.parse, kA = OA.utcFormat, OA.utcParse
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
    var uS = LH(6748),
      QS = LH(6625);

    function WS(HH) {
      for (var BH = HH.length, LH = new Array(BH); --BH >= 0;) LH[BH] = BH;
      return LH
    }

    function MS(HH, BH) {
      return HH[BH]
    }

    function xS(HH) {
      const BH = [];
      return BH.key = HH, BH
    }
    var vS = LH(6689),
      PS = LH.n(vS),
      TS = LH(6704),
      US = LH.n(TS),
      VS = LH(5951),
      OS = LH.n(VS),
      bS = LH(5789),
      kS = LH.n(bS),
      mS = LH(5686),
      oS = LH.n(mS),
      IS = LH(5714),
      fS = LH.n(IS),
      lS = LH(6715),
      KS = LH.n(lS),
      cS = LH(5702),
      eS = LH.n(cS),
      qS = LH(6583),
      gS = LH.n(qS),
      NS = LH(6728),
      RS = LH.n(NS),
      jS = LH(6028),
      nS = LH.n(jS),
      FS = LH(6731),
      DS = LH.n(FS);

    function wS(HH) {
      return function(HH) {
        if (Array.isArray(HH)) return ZS(HH)
      }(HH) || function(HH) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(HH)) return Array.from(HH)
      }(HH) || function(HH, BH) {
        if (!HH) return;
        if ("string" === typeof HH) return ZS(HH, BH);
        var LH = Object.prototype.toString.call(HH).slice(8, -1);
        "Object" === LH && HH.constructor && (LH = HH.constructor.name);
        if ("Map" === LH || "Set" === LH) return Array.from(HH);
        if ("Arguments" === LH || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(LH)) return ZS(HH, BH)
      }(HH) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function ZS(HH, BH) {
      (null == BH || BH > HH.length) && (BH = HH.length);
      for (var LH = 0, AH = new Array(BH); LH < BH; LH++) AH[LH] = HH[LH];
      return AH
    }
    var dS = function(HH) {
        return HH
      },
      aS = {
        "@@functional/placeholder": !0
      },
      sS = function(HH) {
        return HH === aS
      },
      JS = function(HH) {
        return function BH() {
          return 0 === arguments.length || 1 === arguments.length && sS(arguments.length <= 0 ? void 0 : arguments[0]) ? BH : HH.apply(void 0, arguments)
        }
      },
      iS = function HH(BH, LH) {
        return 1 === BH ? LH : JS((function() {
          for (var AH = arguments.length, rH = new Array(AH), SH = 0; SH < AH; SH++) rH[SH] = arguments[SH];
          var hH = rH.filter((function(HH) {
            return HH !== aS
          })).length;
          return hH >= BH ? LH.apply(void 0, rH) : HH(BH - hH, JS((function() {
            for (var HH = arguments.length, BH = new Array(HH), AH = 0; AH < HH; AH++) BH[AH] = arguments[AH];
            var SH = rH.map((function(HH) {
              return sS(HH) ? BH.shift() : HH
            }));
            return LH.apply(void 0, wS(SH).concat(BH))
          })))
        }))
      },
      pS = function(HH) {
        return iS(HH.length, HH)
      },
      yS = function(HH, BH) {
        for (var LH = [], AH = HH; AH < BH; ++AH) LH[AH - HH] = AH;
        return LH
      },
      Hh = pS((function(HH, BH) {
        return Array.isArray(BH) ? BH.map(HH) : Object.keys(BH).map((function(HH) {
          return BH[HH]
        })).map(HH)
      })),
      Bh = function() {
        for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
        if (!BH.length) return dS;
        var AH = BH.reverse(),
          rH = AH[0],
          SH = AH.slice(1);
        return function() {
          return SH.reduce((function(HH, BH) {
            return BH(HH)
          }), rH.apply(void 0, arguments))
        }
      },
      Lh = function(HH) {
        return Array.isArray(HH) ? HH.reverse() : HH.split("").reverse.join("")
      },
      Ah = function(HH) {
        var BH = null,
          LH = null;
        return function() {
          for (var AH = arguments.length, rH = new Array(AH), SH = 0; SH < AH; SH++) rH[SH] = arguments[SH];
          return BH && rH.every((function(HH, LH) {
            return HH === BH[LH]
          })) ? LH : (BH = rH, LH = HH.apply(void 0, rH))
        }
      };
    const rh = {
      rangeStep: function(HH, BH, LH) {
        for (var AH = new(DS())(HH), rH = 0, SH = []; AH.lt(BH) && rH < 1e5;) SH.push(AH.toNumber()), AH = AH.add(LH), rH++;
        return SH
      },
      getDigitCount: function(HH) {
        return 0 === HH ? 1 : Math.floor(new(DS())(HH).abs().log(10).toNumber()) + 1
      },
      interpolateNumber: pS((function(HH, BH, LH) {
        var AH = +HH;
        return AH + LH * (+BH - AH)
      })),
      uninterpolateNumber: pS((function(HH, BH, LH) {
        var AH = BH - +HH;
        return (LH - HH) / (AH = AH || 1 / 0)
      })),
      uninterpolateTruncation: pS((function(HH, BH, LH) {
        var AH = BH - +HH;
        return AH = AH || 1 / 0, Math.max(0, Math.min(1, (LH - HH) / AH))
      }))
    };

    function Sh(HH) {
      return function(HH) {
        if (Array.isArray(HH)) return zh(HH)
      }(HH) || function(HH) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(HH)) return Array.from(HH)
      }(HH) || th(HH) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function hh(HH, BH) {
      return function(HH) {
        if (Array.isArray(HH)) return HH
      }(HH) || function(HH, BH) {
        if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(HH))) return;
        var LH = [],
          AH = !0,
          rH = !1,
          SH = void 0;
        try {
          for (var hH, tH = HH[Symbol.iterator](); !(AH = (hH = tH.next()).done) && (LH.push(hH.value), !BH || LH.length !== BH); AH = !0);
        } catch (zH) {
          rH = !0, SH = zH
        } finally {
          try {
            AH || null == tH.return || tH.return()
          } finally {
            if (rH) throw SH
          }
        }
        return LH
      }(HH, BH) || th(HH, BH) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function th(HH, BH) {
      if (HH) {
        if ("string" === typeof HH) return zh(HH, BH);
        var LH = Object.prototype.toString.call(HH).slice(8, -1);
        return "Object" === LH && HH.constructor && (LH = HH.constructor.name), "Map" === LH || "Set" === LH ? Array.from(HH) : "Arguments" === LH || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(LH) ? zh(HH, BH) : void 0
      }
    }

    function zh(HH, BH) {
      (null == BH || BH > HH.length) && (BH = HH.length);
      for (var LH = 0, AH = new Array(BH); LH < BH; LH++) AH[LH] = HH[LH];
      return AH
    }

    function Ch(HH) {
      var BH = hh(HH, 2),
        LH = BH[0],
        AH = BH[1],
        rH = LH,
        SH = AH;
      return LH > AH && (rH = AH, SH = LH), [rH, SH]
    }

    function Eh(HH, BH, LH) {
      if (HH.lte(0)) return new(DS())(0);
      var AH = rh.getDigitCount(HH.toNumber()),
        rH = new(DS())(10).pow(AH),
        SH = HH.div(rH),
        hH = 1 !== AH ? .05 : .1,
        tH = new(DS())(Math.ceil(SH.div(hH).toNumber())).add(LH).mul(hH).mul(rH);
      return BH ? tH : new(DS())(Math.ceil(tH))
    }

    function Xh(HH, BH, LH) {
      var AH = 1,
        rH = new(DS())(HH);
      if (!rH.isint() && LH) {
        var SH = Math.abs(HH);
        SH < 1 ? (AH = new(DS())(10).pow(rh.getDigitCount(HH) - 1), rH = new(DS())(Math.floor(rH.div(AH).toNumber())).mul(AH)) : SH > 1 && (rH = new(DS())(Math.floor(HH)))
      } else 0 === HH ? rH = new(DS())(Math.floor((BH - 1) / 2)) : LH || (rH = new(DS())(Math.floor(HH)));
      var hH = Math.floor((BH - 1) / 2);
      return Bh(Hh((function(HH) {
        return rH.add(new(DS())(HH - hH).mul(AH)).toNumber()
      })), yS)(0, BH)
    }

    function Gh(HH, BH, LH, AH) {
      var rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      if (!Number.isFinite((BH - HH) / (LH - 1))) return {
        step: new(DS())(0),
        tickMin: new(DS())(0),
        tickMax: new(DS())(0)
      };
      var SH, hH = Eh(new(DS())(BH).sub(HH).div(LH - 1), AH, rH);
      SH = HH <= 0 && BH >= 0 ? new(DS())(0) : (SH = new(DS())(HH).add(BH).div(2)).sub(new(DS())(SH).mod(hH));
      var tH = Math.ceil(SH.sub(HH).div(hH).toNumber()),
        zH = Math.ceil(new(DS())(BH).sub(SH).div(hH).toNumber()),
        CH = tH + zH + 1;
      return CH > LH ? Gh(HH, BH, LH, AH, rH + 1) : (CH < LH && (zH = BH > 0 ? zH + (LH - CH) : zH, tH = BH > 0 ? tH : tH + (LH - CH)), {
        step: hH,
        tickMin: SH.sub(new(DS())(tH).mul(hH)),
        tickMax: SH.add(new(DS())(zH).mul(hH))
      })
    }
    var Yh = Ah((function(HH) {
        var BH = hh(HH, 2),
          LH = BH[0],
          AH = BH[1],
          rH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          SH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          hH = Math.max(rH, 2),
          tH = hh(Ch([LH, AH]), 2),
          zH = tH[0],
          CH = tH[1];
        if (zH === -1 / 0 || CH === 1 / 0) {
          var EH = CH === 1 / 0 ? [zH].concat(Sh(yS(0, rH - 1).map((function() {
            return 1 / 0
          })))) : [].concat(Sh(yS(0, rH - 1).map((function() {
            return -1 / 0
          }))), [CH]);
          return LH > AH ? Lh(EH) : EH
        }
        if (zH === CH) return Xh(zH, rH, SH);
        var XH = Gh(zH, CH, hH, SH),
          GH = XH.step,
          YH = XH.tickMin,
          uH = XH.tickMax,
          QH = rh.rangeStep(YH, uH.add(new(DS())(.1).mul(GH)), GH);
        return LH > AH ? Lh(QH) : QH
      })),
      uh = (Ah((function(HH) {
        var BH = hh(HH, 2),
          LH = BH[0],
          AH = BH[1],
          rH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          SH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          hH = Math.max(rH, 2),
          tH = hh(Ch([LH, AH]), 2),
          zH = tH[0],
          CH = tH[1];
        if (zH === -1 / 0 || CH === 1 / 0) return [LH, AH];
        if (zH === CH) return Xh(zH, rH, SH);
        var EH = Eh(new(DS())(CH).sub(zH).div(hH - 1), SH, 0),
          XH = Bh(Hh((function(HH) {
            return new(DS())(zH).add(new(DS())(HH).mul(EH)).toNumber()
          })), yS)(0, hH).filter((function(HH) {
            return HH >= zH && HH <= CH
          }));
        return LH > AH ? Lh(XH) : XH
      })), Ah((function(HH, BH) {
        var LH = hh(HH, 2),
          AH = LH[0],
          rH = LH[1],
          SH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          hH = hh(Ch([AH, rH]), 2),
          tH = hH[0],
          zH = hH[1];
        if (tH === -1 / 0 || zH === 1 / 0) return [AH, rH];
        if (tH === zH) return [tH];
        var CH = Math.max(BH, 2),
          EH = Eh(new(DS())(zH).sub(tH).div(CH - 1), SH, 0),
          XH = [].concat(Sh(rh.rangeStep(new(DS())(tH), new(DS())(zH).sub(new(DS())(.99).mul(EH)), EH)), [zH]);
        return AH > rH ? Lh(XH) : XH
      }))),
      Qh = LH(6734),
      Wh = LH(5684),
      Mh = LH(5960),
      xh = LH(6739);

    function vh(HH) {
      return vh = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, vh(HH)
    }

    function Ph(HH) {
      return function(HH) {
        if (Array.isArray(HH)) return Th(HH)
      }(HH) || function(HH) {
        if ("undefined" !== typeof Symbol && null != HH[Symbol.iterator] || null != HH["@@iterator"]) return Array.from(HH)
      }(HH) || function(HH, BH) {
        if (!HH) return;
        if ("string" === typeof HH) return Th(HH, BH);
        var LH = Object.prototype.toString.call(HH).slice(8, -1);
        "Object" === LH && HH.constructor && (LH = HH.constructor.name);
        if ("Map" === LH || "Set" === LH) return Array.from(HH);
        if ("Arguments" === LH || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(LH)) return Th(HH, BH)
      }(HH) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Th(HH, BH) {
      (null == BH || BH > HH.length) && (BH = HH.length);
      for (var LH = 0, AH = new Array(BH); LH < BH; LH++) AH[LH] = HH[LH];
      return AH
    }

    function Uh(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function Vh(HH) {
      for (var BH = 1; BH < arguments.length; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? Uh(Object(LH), !0).forEach((function(BH) {
          Oh(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : Uh(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }

    function Oh(HH, BH, LH) {
      return (BH = function(HH) {
        var BH = function(HH, BH) {
          if ("object" != vh(HH) || !HH) return HH;
          var LH = HH[Symbol.toPrimitive];
          if (void 0 !== LH) {
            var AH = LH.call(HH, BH || "default");
            if ("object" != vh(AH)) return AH;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === BH ? String : Number)(HH)
        }(HH, "string");
        return "symbol" == vh(BH) ? BH : BH + ""
      }(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }

    function bh(HH, BH, LH) {
      return OS()(HH) || OS()(BH) ? LH : (0, Wh.s)(BH) ? fS()(HH, BH, LH) : kS()(BH) ? BH(HH) : LH
    }

    function kh(HH, BH, LH, AH) {
      var rH = KS()(HH, (function(HH) {
        return bh(HH, BH)
      }));
      if ("number" === LH) {
        var SH = rH.filter((function(HH) {
          return (0, Wh.v)(HH) || parseFloat(HH)
        }));
        return SH.length ? [US()(SH), PS()(SH)] : [1 / 0, -1 / 0]
      }
      return (AH ? rH.filter((function(HH) {
        return !OS()(HH)
      })) : rH).map((function(HH) {
        return (0, Wh.s)(HH) || HH instanceof Date ? HH : ""
      }))
    }
    var mh = function(HH) {
        var BH, LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          AH = arguments.length > 2 ? arguments[2] : void 0,
          rH = arguments.length > 3 ? arguments[3] : void 0,
          SH = -1,
          hH = null !== (BH = null === LH || void 0 === LH ? void 0 : LH.length) && void 0 !== BH ? BH : 0;
        if (hH <= 1) return 0;
        if (rH && "angleAxis" === rH.axisType && Math.abs(Math.abs(rH.range[1] - rH.range[0]) - 360) <= 1e-6)
          for (var tH = rH.range, zH = 0; zH < hH; zH++) {
            var CH = zH > 0 ? AH[zH - 1].coordinate : AH[hH - 1].coordinate,
              EH = AH[zH].coordinate,
              XH = zH >= hH - 1 ? AH[0].coordinate : AH[zH + 1].coordinate,
              GH = void 0;
            if ((0, Wh.A)(EH - CH) !== (0, Wh.A)(XH - EH)) {
              var YH = [];
              if ((0, Wh.A)(XH - EH) === (0, Wh.A)(tH[1] - tH[0])) {
                GH = XH;
                var uH = EH + tH[1] - tH[0];
                YH[0] = Math.min(uH, (uH + CH) / 2), YH[1] = Math.max(uH, (uH + CH) / 2)
              } else {
                GH = CH;
                var QH = XH + tH[1] - tH[0];
                YH[0] = Math.min(EH, (QH + EH) / 2), YH[1] = Math.max(EH, (QH + EH) / 2)
              }
              var WH = [Math.min(EH, (GH + EH) / 2), Math.max(EH, (GH + EH) / 2)];
              if (HH > WH[0] && HH <= WH[1] || HH >= YH[0] && HH <= YH[1]) {
                SH = AH[zH].index;
                break
              }
            } else {
              var MH = Math.min(CH, XH),
                xH = Math.max(CH, XH);
              if (HH > (MH + EH) / 2 && HH <= (xH + EH) / 2) {
                SH = AH[zH].index;
                break
              }
            }
          } else
            for (var vH = 0; vH < hH; vH++)
              if (0 === vH && HH <= (LH[vH].coordinate + LH[vH + 1].coordinate) / 2 || vH > 0 && vH < hH - 1 && HH > (LH[vH].coordinate + LH[vH - 1].coordinate) / 2 && HH <= (LH[vH].coordinate + LH[vH + 1].coordinate) / 2 || vH === hH - 1 && HH > (LH[vH].coordinate + LH[vH - 1].coordinate) / 2) {
                SH = LH[vH].index;
                break
              } return SH
      },
      oh = function(HH) {
        var BH, LH, AH = HH.type.displayName,
          rH = null !== (BH = HH.type) && void 0 !== BH && BH.defaultProps ? Vh(Vh({}, HH.type.defaultProps), HH.props) : HH.props,
          SH = rH.stroke,
          hH = rH.fill;
        switch (AH) {
          case "Line":
            LH = SH;
            break;
          case "Area":
          case "Radar":
            LH = SH && "none" !== SH ? SH : hH;
            break;
          default:
            LH = hH
        }
        return LH
      },
      Ih = function(HH) {
        var BH = HH.barSize,
          LH = HH.totalSize,
          AH = HH.stackGroups,
          rH = void 0 === AH ? {} : AH;
        if (!rH) return {};
        for (var SH = {}, hH = Object.keys(rH), tH = 0, zH = hH.length; tH < zH; tH++)
          for (var CH = rH[hH[tH]].stackGroups, EH = Object.keys(CH), XH = 0, GH = EH.length; XH < GH; XH++) {
            var YH = CH[EH[XH]],
              uH = YH.items,
              QH = YH.cateAxisId,
              WH = uH.filter((function(HH) {
                return (0, Mh.g)(HH.type).indexOf("Bar") >= 0
              }));
            if (WH && WH.length) {
              var MH = WH[0].type.defaultProps,
                xH = void 0 !== MH ? Vh(Vh({}, MH), WH[0].props) : WH[0].props,
                vH = xH.barSize,
                PH = xH[QH];
              SH[PH] || (SH[PH] = []);
              var TH = OS()(vH) ? BH : vH;
              SH[PH].push({
                item: WH[0],
                stackList: WH.slice(1),
                barSize: OS()(TH) ? void 0 : (0, Wh.l)(TH, LH, 0)
              })
            }
          }
        return SH
      },
      fh = function(HH) {
        var BH = HH.barGap,
          LH = HH.barCategoryGap,
          AH = HH.bandSize,
          rH = HH.sizeList,
          SH = void 0 === rH ? [] : rH,
          hH = HH.maxBarSize,
          tH = SH.length;
        if (tH < 1) return null;
        var zH, CH = (0, Wh.l)(BH, AH, 0, !0),
          EH = [];
        if (SH[0].barSize === +SH[0].barSize) {
          var XH = !1,
            GH = AH / tH,
            YH = SH.reduce((function(HH, BH) {
              return HH + BH.barSize || 0
            }), 0);
          (YH += (tH - 1) * CH) >= AH && (YH -= (tH - 1) * CH, CH = 0), YH >= AH && GH > 0 && (XH = !0, YH = tH * (GH *= .9));
          var uH = {
            offset: ((AH - YH) / 2 | 0) - CH,
            size: 0
          };
          zH = SH.reduce((function(HH, BH) {
            var LH = {
                item: BH.item,
                position: {
                  offset: uH.offset + uH.size + CH,
                  size: XH ? GH : BH.barSize
                }
              },
              AH = [].concat(Ph(HH), [LH]);
            return uH = AH[AH.length - 1].position, BH.stackList && BH.stackList.length && BH.stackList.forEach((function(HH) {
              AH.push({
                item: HH,
                position: uH
              })
            })), AH
          }), EH)
        } else {
          var QH = (0, Wh.l)(LH, AH, 0, !0);
          AH - 2 * QH - (tH - 1) * CH <= 0 && (CH = 0);
          var WH = (AH - 2 * QH - (tH - 1) * CH) / tH;
          WH > 1 && (WH >>= 0);
          var MH = hH === +hH ? Math.min(WH, hH) : WH;
          zH = SH.reduce((function(HH, BH, LH) {
            var AH = [].concat(Ph(HH), [{
              item: BH.item,
              position: {
                offset: QH + (WH + CH) * LH + (WH - MH) / 2,
                size: MH
              }
            }]);
            return BH.stackList && BH.stackList.length && BH.stackList.forEach((function(HH) {
              AH.push({
                item: HH,
                position: AH[AH.length - 1].position
              })
            })), AH
          }), EH)
        }
        return zH
      },
      lh = function(HH, BH, LH, AH) {
        var rH = LH.children,
          SH = LH.width,
          hH = LH.margin,
          tH = SH - (hH.left || 0) - (hH.right || 0),
          zH = (0, xh.b)({
            children: rH,
            legendWidth: tH
          });
        if (zH) {
          var CH = AH || {},
            EH = CH.width,
            XH = CH.height,
            GH = zH.align,
            YH = zH.verticalAlign,
            uH = zH.layout;
          if (("vertical" === uH || "horizontal" === uH && "middle" === YH) && "center" !== GH && (0, Wh.v)(HH[GH])) return Vh(Vh({}, HH), {}, Oh({}, GH, HH[GH] + (EH || 0)));
          if (("horizontal" === uH || "vertical" === uH && "center" === GH) && "middle" !== YH && (0, Wh.v)(HH[YH])) return Vh(Vh({}, HH), {}, Oh({}, YH, HH[YH] + (XH || 0)))
        }
        return HH
      },
      Kh = function(HH, BH, LH, AH, rH) {
        var SH = BH.props.children,
          hH = (0, Mh.e)(SH, Qh.d).filter((function(HH) {
            return function(HH, BH, LH) {
              return !!OS()(BH) || ("horizontal" === HH ? "yAxis" === BH : "vertical" === HH || "x" === LH ? "xAxis" === BH : "y" !== LH || "yAxis" === BH)
            }(AH, rH, HH.props.direction)
          }));
        if (hH && hH.length) {
          var tH = hH.map((function(HH) {
            return HH.props.dataKey
          }));
          return HH.reduce((function(HH, BH) {
            var AH = bh(BH, LH);
            if (OS()(AH)) return HH;
            var rH = Array.isArray(AH) ? [US()(AH), PS()(AH)] : [AH, AH],
              SH = tH.reduce((function(HH, LH) {
                var AH = bh(BH, LH, 0),
                  SH = rH[0] - Math.abs(Array.isArray(AH) ? AH[0] : AH),
                  hH = rH[1] + Math.abs(Array.isArray(AH) ? AH[1] : AH);
                return [Math.min(SH, HH[0]), Math.max(hH, HH[1])]
              }), [1 / 0, -1 / 0]);
            return [Math.min(SH[0], HH[0]), Math.max(SH[1], HH[1])]
          }), [1 / 0, -1 / 0])
        }
        return null
      },
      ch = function(HH, BH, LH, AH, rH) {
        var SH = BH.map((function(BH) {
          return Kh(HH, BH, LH, rH, AH)
        })).filter((function(HH) {
          return !OS()(HH)
        }));
        return SH && SH.length ? SH.reduce((function(HH, BH) {
          return [Math.min(HH[0], BH[0]), Math.max(HH[1], BH[1])]
        }), [1 / 0, -1 / 0]) : null
      },
      eh = function(HH, BH, LH, AH, rH) {
        var SH = BH.map((function(BH) {
          var SH = BH.props.dataKey;
          return "number" === LH && SH && Kh(HH, BH, SH, AH) || kh(HH, SH, LH, rH)
        }));
        if ("number" === LH) return SH.reduce((function(HH, BH) {
          return [Math.min(HH[0], BH[0]), Math.max(HH[1], BH[1])]
        }), [1 / 0, -1 / 0]);
        var hH = {};
        return SH.reduce((function(HH, BH) {
          for (var LH = 0, AH = BH.length; LH < AH; LH++) hH[BH[LH]] || (hH[BH[LH]] = !0, HH.push(BH[LH]));
          return HH
        }), [])
      },
      qh = function(HH, BH) {
        return "horizontal" === HH && "xAxis" === BH || "vertical" === HH && "yAxis" === BH || "centric" === HH && "angleAxis" === BH || "radial" === HH && "radiusAxis" === BH
      },
      gh = function(HH, BH, LH, AH) {
        if (AH) return HH.map((function(HH) {
          return HH.coordinate
        }));
        var rH, SH, hH = HH.map((function(HH) {
          return HH.coordinate === BH && (rH = !0), HH.coordinate === LH && (SH = !0), HH.coordinate
        }));
        return rH || hH.push(BH), SH || hH.push(LH), hH
      },
      Nh = function(HH, BH, LH) {
        if (!HH) return null;
        var AH = HH.scale,
          rH = HH.duplicateDomain,
          SH = HH.type,
          hH = HH.range,
          tH = "scaleBand" === HH.realScaleType ? AH.bandwidth() / 2 : 2,
          zH = (BH || LH) && "category" === SH && AH.bandwidth ? AH.bandwidth() / tH : 0;
        return zH = "angleAxis" === HH.axisType && (null === hH || void 0 === hH ? void 0 : hH.length) >= 2 ? 2 * (0, Wh.A)(hH[0] - hH[1]) * zH : zH, BH && (HH.ticks || HH.niceTicks) ? (HH.ticks || HH.niceTicks).map((function(HH) {
          var BH = rH ? rH.indexOf(HH) : HH;
          return {
            coordinate: AH(BH) + zH,
            value: HH,
            offset: zH
          }
        })).filter((function(HH) {
          return !eS()(HH.coordinate)
        })) : HH.isCategorical && HH.categoricalDomain ? HH.categoricalDomain.map((function(HH, BH) {
          return {
            coordinate: AH(HH) + zH,
            value: HH,
            index: BH,
            offset: zH
          }
        })) : AH.ticks && !LH ? AH.ticks(HH.tickCount).map((function(HH) {
          return {
            coordinate: AH(HH) + zH,
            value: HH,
            offset: zH
          }
        })) : AH.domain().map((function(HH, BH) {
          return {
            coordinate: AH(HH) + zH,
            value: rH ? rH[HH] : HH,
            index: BH,
            offset: zH
          }
        }))
      },
      Rh = new WeakMap,
      jh = function(HH, BH) {
        if ("function" !== typeof BH) return HH;
        Rh.has(HH) || Rh.set(HH, new WeakMap);
        var LH = Rh.get(HH);
        if (LH.has(BH)) return LH.get(BH);
        var AH = function() {
          HH.apply(void 0, arguments), BH.apply(void 0, arguments)
        };
        return LH.set(BH, AH), AH
      },
      nh = function(HH, BH, LH) {
        var SH = HH.scale,
          hH = HH.type,
          tH = HH.layout,
          zH = HH.axisType;
        if ("auto" === SH) return "radial" === tH && "radiusAxis" === zH ? {
          scale: rH.b(),
          realScaleType: "band"
        } : "radial" === tH && "angleAxis" === zH ? {
          scale: aB(),
          realScaleType: "linear"
        } : "category" === hH && BH && (BH.indexOf("LineChart") >= 0 || BH.indexOf("AreaChart") >= 0 || BH.indexOf("ComposedChart") >= 0 && !LH) ? {
          scale: rH.c(),
          realScaleType: "point"
        } : "category" === hH ? {
          scale: rH.b(),
          realScaleType: "band"
        } : {
          scale: aB(),
          realScaleType: "linear"
        };
        if (oS()(SH)) {
          var CH = "scale".concat(gS()(SH));
          return {
            scale: (AH[CH] || rH.c)(),
            realScaleType: AH[CH] ? CH : "point"
          }
        }
        return kS()(SH) ? {
          scale: SH
        } : {
          scale: rH.c(),
          realScaleType: "point"
        }
      },
      Fh = 1e-4,
      Dh = function(HH) {
        var BH = HH.domain();
        if (BH && !(BH.length <= 2)) {
          var LH = BH.length,
            AH = HH.range(),
            rH = Math.min(AH[0], AH[1]) - Fh,
            SH = Math.max(AH[0], AH[1]) + Fh,
            hH = HH(BH[0]),
            tH = HH(BH[LH - 1]);
          (hH < rH || hH > SH || tH < rH || tH > SH) && HH.domain([BH[0], BH[LH - 1]])
        }
      },
      wh = function(HH, BH) {
        if (!HH) return null;
        for (var LH = 0, AH = HH.length; LH < AH; LH++)
          if (HH[LH].item === BH) return HH[LH].position;
        return null
      },
      Zh = function(HH, BH) {
        if (!BH || 2 !== BH.length || !(0, Wh.v)(BH[0]) || !(0, Wh.v)(BH[1])) return HH;
        var LH = Math.min(BH[0], BH[1]),
          AH = Math.max(BH[0], BH[1]),
          rH = [HH[0], HH[1]];
        return (!(0, Wh.v)(HH[0]) || HH[0] < LH) && (rH[0] = LH), (!(0, Wh.v)(HH[1]) || HH[1] > AH) && (rH[1] = AH), rH[0] > AH && (rH[0] = AH), rH[1] < LH && (rH[1] = LH), rH
      },
      dh = {
        sign: function(HH) {
          var BH = HH.length;
          if (!(BH <= 0))
            for (var LH = 0, AH = HH[0].length; LH < AH; ++LH)
              for (var rH = 0, SH = 0, hH = 0; hH < BH; ++hH) {
                var tH = eS()(HH[hH][LH][1]) ? HH[hH][LH][0] : HH[hH][LH][1];
                tH >= 0 ? (HH[hH][LH][0] = rH, HH[hH][LH][1] = rH + tH, rH = HH[hH][LH][1]) : (HH[hH][LH][0] = SH, HH[hH][LH][1] = SH + tH, SH = HH[hH][LH][1])
              }
        },
        expand: function(HH, BH) {
          if ((AH = HH.length) > 0) {
            for (var LH, AH, rH, SH = 0, hH = HH[0].length; SH < hH; ++SH) {
              for (rH = LH = 0; LH < AH; ++LH) rH += HH[LH][SH][1] || 0;
              if (rH)
                for (LH = 0; LH < AH; ++LH) HH[LH][SH][1] /= rH
            }
            YS(HH, BH)
          }
        },
        none: YS,
        silhouette: function(HH, BH) {
          if ((LH = HH.length) > 0) {
            for (var LH, AH = 0, rH = HH[BH[0]], SH = rH.length; AH < SH; ++AH) {
              for (var hH = 0, tH = 0; hH < LH; ++hH) tH += HH[hH][AH][1] || 0;
              rH[AH][1] += rH[AH][0] = -tH / 2
            }
            YS(HH, BH)
          }
        },
        wiggle: function(HH, BH) {
          if ((rH = HH.length) > 0 && (AH = (LH = HH[BH[0]]).length) > 0) {
            for (var LH, AH, rH, SH = 0, hH = 1; hH < AH; ++hH) {
              for (var tH = 0, zH = 0, CH = 0; tH < rH; ++tH) {
                for (var EH = HH[BH[tH]], XH = EH[hH][1] || 0, GH = (XH - (EH[hH - 1][1] || 0)) / 2, YH = 0; YH < tH; ++YH) {
                  var uH = HH[BH[YH]];
                  GH += (uH[hH][1] || 0) - (uH[hH - 1][1] || 0)
                }
                zH += XH, CH += GH * XH
              }
              LH[hH - 1][1] += LH[hH - 1][0] = SH, zH && (SH -= CH / zH)
            }
            LH[hH - 1][1] += LH[hH - 1][0] = SH, YS(HH, BH)
          }
        },
        positive: function(HH) {
          var BH = HH.length;
          if (!(BH <= 0))
            for (var LH = 0, AH = HH[0].length; LH < AH; ++LH)
              for (var rH = 0, SH = 0; SH < BH; ++SH) {
                var hH = eS()(HH[SH][LH][1]) ? HH[SH][LH][0] : HH[SH][LH][1];
                hH >= 0 ? (HH[SH][LH][0] = rH, HH[SH][LH][1] = rH + hH, rH = HH[SH][LH][1]) : (HH[SH][LH][0] = 0, HH[SH][LH][1] = 0)
              }
        }
      },
      ah = function(HH, BH, LH) {
        var AH = BH.map((function(HH) {
            return HH.props.dataKey
          })),
          rH = dh[LH],
          SH = function() {
            var HH = (0, QS.d)([]),
              BH = WS,
              LH = YS,
              AH = MS;

            function rH(rH) {
              var SH, hH, tH = Array.from(HH.apply(this, arguments), xS),
                zH = tH.length,
                CH = -1;
              for (const HH of rH)
                for (SH = 0, ++CH; SH < zH; ++SH)(tH[SH][CH] = [0, +AH(HH, tH[SH].key, CH, rH)]).data = HH;
              for (SH = 0, hH = (0, uS.e)(BH(tH)); SH < zH; ++SH) tH[hH[SH]].index = SH;
              return LH(tH, hH), tH
            }
            return rH.keys = function(BH) {
              return arguments.length ? (HH = "function" === typeof BH ? BH : (0, QS.d)(Array.from(BH)), rH) : HH
            }, rH.value = function(HH) {
              return arguments.length ? (AH = "function" === typeof HH ? HH : (0, QS.d)(+HH), rH) : AH
            }, rH.order = function(HH) {
              return arguments.length ? (BH = null == HH ? WS : "function" === typeof HH ? HH : (0, QS.d)(Array.from(HH)), rH) : BH
            }, rH.offset = function(HH) {
              return arguments.length ? (LH = null == HH ? YS : HH, rH) : LH
            }, rH
          }().keys(AH).value((function(HH, BH) {
            return +bh(HH, BH, 0)
          })).order(WS).offset(rH);
        return SH(HH)
      },
      sh = function(HH, BH, LH, AH, rH, SH) {
        if (!HH) return null;
        var hH = (SH ? BH.reverse() : BH).reduce((function(HH, BH) {
          var rH, SH = null !== (rH = BH.type) && void 0 !== rH && rH.defaultProps ? Vh(Vh({}, BH.type.defaultProps), BH.props) : BH.props,
            hH = SH.stackId;
          if (SH.hide) return HH;
          var tH = SH[LH],
            zH = HH[tH] || {
              hasStack: !1,
              stackGroups: {}
            };
          if ((0, Wh.s)(hH)) {
            var CH = zH.stackGroups[hH] || {
              numericAxisId: LH,
              cateAxisId: AH,
              items: []
            };
            CH.items.push(BH), zH.hasStack = !0, zH.stackGroups[hH] = CH
          } else zH.stackGroups[(0, Wh.D)("_stackId_")] = {
            numericAxisId: LH,
            cateAxisId: AH,
            items: [BH]
          };
          return Vh(Vh({}, HH), {}, Oh({}, tH, zH))
        }), {});
        return Object.keys(hH).reduce((function(BH, SH) {
          var tH = hH[SH];
          if (tH.hasStack) {
            tH.stackGroups = Object.keys(tH.stackGroups).reduce((function(BH, SH) {
              var hH = tH.stackGroups[SH];
              return Vh(Vh({}, BH), {}, Oh({}, SH, {
                numericAxisId: LH,
                cateAxisId: AH,
                items: hH.items,
                stackedData: ah(HH, hH.items, rH)
              }))
            }), {})
          }
          return Vh(Vh({}, BH), {}, Oh({}, SH, tH))
        }), {})
      },
      Jh = function(HH, BH) {
        var LH = BH.realScaleType,
          AH = BH.type,
          rH = BH.tickCount,
          SH = BH.originalDomain,
          hH = BH.allowDecimals,
          tH = LH || BH.scale;
        if ("auto" !== tH && "linear" !== tH) return null;
        if (rH && "number" === AH && SH && ("auto" === SH[0] || "auto" === SH[1])) {
          var zH = HH.domain();
          if (!zH.length) return null;
          var CH = Yh(zH, rH, hH);
          return HH.domain([US()(CH), PS()(CH)]), {
            niceTicks: CH
          }
        }
        if (rH && "number" === AH) {
          var EH = HH.domain();
          return {
            niceTicks: uh(EH, rH, hH)
          }
        }
        return null
      };

    function ih(HH) {
      var BH = HH.axis,
        LH = HH.ticks,
        AH = HH.bandSize,
        rH = HH.entry,
        SH = HH.index,
        hH = HH.dataKey;
      if ("category" === BH.type) {
        if (!BH.allowDuplicatedCategory && BH.dataKey && !OS()(rH[BH.dataKey])) {
          var tH = (0, Wh.f)(LH, "value", rH[BH.dataKey]);
          if (tH) return tH.coordinate + AH / 2
        }
        return LH[SH] ? LH[SH].coordinate + AH / 2 : null
      }
      var zH = bh(rH, OS()(hH) ? BH.dataKey : hH);
      return OS()(zH) ? null : BH.scale(zH)
    }
    var ph = function(HH) {
        var BH = HH.axis,
          LH = HH.ticks,
          AH = HH.offset,
          rH = HH.bandSize,
          SH = HH.entry,
          hH = HH.index;
        if ("category" === BH.type) return LH[hH] ? LH[hH].coordinate + AH : null;
        var tH = bh(SH, BH.dataKey, BH.domain[hH]);
        return OS()(tH) ? null : BH.scale(tH) - rH / 2 + AH
      },
      yh = function(HH) {
        var BH = HH.numericAxis,
          LH = BH.scale.domain();
        if ("number" === BH.type) {
          var AH = Math.min(LH[0], LH[1]),
            rH = Math.max(LH[0], LH[1]);
          return AH <= 0 && rH >= 0 ? 0 : rH < 0 ? rH : AH
        }
        return LH[0]
      },
      Ht = function(HH, BH) {
        var LH, AH = (null !== (LH = HH.type) && void 0 !== LH && LH.defaultProps ? Vh(Vh({}, HH.type.defaultProps), HH.props) : HH.props).stackId;
        if ((0, Wh.s)(AH)) {
          var rH = BH[AH];
          if (rH) {
            var SH = rH.items.indexOf(HH);
            return SH >= 0 ? rH.stackedData[SH] : null
          }
        }
        return null
      },
      Bt = function(HH, BH, LH) {
        return Object.keys(HH).reduce((function(AH, rH) {
          var SH = HH[rH].stackedData.reduce((function(HH, AH) {
            var rH = AH.slice(BH, LH + 1).reduce((function(HH, BH) {
              return [US()(BH.concat([HH[0]]).filter(Wh.v)), PS()(BH.concat([HH[1]]).filter(Wh.v))]
            }), [1 / 0, -1 / 0]);
            return [Math.min(HH[0], rH[0]), Math.max(HH[1], rH[1])]
          }), [1 / 0, -1 / 0]);
          return [Math.min(SH[0], AH[0]), Math.max(SH[1], AH[1])]
        }), [1 / 0, -1 / 0]).map((function(HH) {
          return HH === 1 / 0 || HH === -1 / 0 ? 0 : HH
        }))
      },
      Lt = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      At = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      rt = function(HH, BH, LH) {
        if (kS()(HH)) return HH(BH, LH);
        if (!Array.isArray(HH)) return BH;
        var AH = [];
        if ((0, Wh.v)(HH[0])) AH[0] = LH ? HH[0] : Math.min(HH[0], BH[0]);
        else if (Lt.test(HH[0])) {
          var rH = +Lt.exec(HH[0])[1];
          AH[0] = BH[0] - rH
        } else kS()(HH[0]) ? AH[0] = HH[0](BH[0]) : AH[0] = BH[0];
        if ((0, Wh.v)(HH[1])) AH[1] = LH ? HH[1] : Math.max(HH[1], BH[1]);
        else if (At.test(HH[1])) {
          var SH = +At.exec(HH[1])[1];
          AH[1] = BH[1] + SH
        } else kS()(HH[1]) ? AH[1] = HH[1](BH[1]) : AH[1] = BH[1];
        return AH
      },
      St = function(HH, BH, LH) {
        if (HH && HH.scale && HH.scale.bandwidth) {
          var AH = HH.scale.bandwidth();
          if (!LH || AH > 0) return AH
        }
        if (HH && BH && BH.length >= 2) {
          for (var rH = nS()(BH, (function(HH) {
              return HH.coordinate
            })), SH = 1 / 0, hH = 1, tH = rH.length; hH < tH; hH++) {
            var zH = rH[hH],
              CH = rH[hH - 1];
            SH = Math.min((zH.coordinate || 0) - (CH.coordinate || 0), SH)
          }
          return SH === 1 / 0 ? 0 : SH
        }
        return LH ? void 0 : 0
      },
      ht = function(HH, BH, LH) {
        return HH && HH.length ? RS()(HH, fS()(LH, "type.defaultProps.domain")) ? BH : HH : BH
      },
      tt = function(HH, BH) {
        var LH = HH.type.defaultProps ? Vh(Vh({}, HH.type.defaultProps), HH.props) : HH.props,
          AH = LH.dataKey,
          rH = LH.name,
          SH = LH.unit,
          hH = LH.formatter,
          tH = LH.tooltipType,
          zH = LH.chartType,
          CH = LH.hide;
        return Vh(Vh({}, (0, Mh.c)(HH, !1)), {}, {
          dataKey: AH,
          unit: SH,
          formatter: hH,
          name: rH || AH,
          color: oh(HH),
          value: bh(BH, AH),
          type: tH,
          payload: BH,
          chartType: zH,
          hide: CH
        })
      }
  },
  6663: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => GH,
      f: () => XH
    });
    var AH = LH(6497);

    function rH(HH) {
      return rH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, rH(HH)
    }

    function SH(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function hH(HH) {
      for (var BH = 1; BH < arguments.length; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? SH(Object(LH), !0).forEach((function(BH) {
          tH(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : SH(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }

    function tH(HH, BH, LH) {
      return (BH = function(HH) {
        var BH = function(HH, BH) {
          if ("object" != rH(HH) || !HH) return HH;
          var LH = HH[Symbol.toPrimitive];
          if (void 0 !== LH) {
            var AH = LH.call(HH, BH || "default");
            if ("object" != rH(AH)) return AH;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === BH ? String : Number)(HH)
        }(HH, "string");
        return "symbol" == rH(BH) ? BH : BH + ""
      }(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }
    var zH = {
        widthCache: {},
        cacheCount: 0
      },
      CH = {
        position: "absolute",
        top: "-20000px",
        left: 0,
        padding: 0,
        margin: 0,
        border: "none",
        whiteSpace: "pre"
      },
      EH = "recharts_measurement_span";
    var XH = function(HH) {
        var BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (void 0 === HH || null === HH || AH.b.isSsr) return {
          width: 0,
          height: 0
        };
        var LH = function(HH) {
            var BH = hH({}, HH);
            return Object.keys(BH).forEach((function(HH) {
              BH[HH] || delete BH[HH]
            })), BH
          }(BH),
          rH = JSON.stringify({
            text: HH,
            copyStyle: LH
          });
        if (zH.widthCache[rH]) return zH.widthCache[rH];
        try {
          var SH = document.getElementById(EH);
          SH || ((SH = document.createElement("span")).setAttribute("id", EH), SH.setAttribute("aria-hidden", "true"), document.body.appendChild(SH));
          var tH = hH(hH({}, CH), LH);
          Object.assign(SH.style, tH), SH.textContent = "".concat(HH);
          var XH = SH.getBoundingClientRect(),
            GH = {
              width: XH.width,
              height: XH.height
            };
          return zH.widthCache[rH] = GH, ++zH.cacheCount > 2e3 && (zH.cacheCount = 0, zH.widthCache = {}), GH
        } catch (YH) {
          return {
            width: 0,
            height: 0
          }
        }
      },
      GH = function(HH) {
        return {
          top: HH.top + window.scrollY - document.documentElement.clientTop,
          left: HH.left + window.scrollX - document.documentElement.clientLeft
        }
      }
  },
  5684: (HH, BH, LH) => {
    LH.d(BH, {
      A: () => YH,
      D: () => vH,
      d: () => kH,
      f: () => OH,
      h: () => TH,
      j: () => bH,
      l: () => PH,
      o: () => UH,
      q: () => VH,
      r: () => WH,
      s: () => MH,
      v: () => QH,
      z: () => uH
    });
    var AH = LH(5686),
      rH = LH.n(AH),
      SH = LH(5702),
      hH = LH.n(SH),
      tH = LH(5714),
      zH = LH.n(tH),
      CH = LH(5708),
      EH = LH.n(CH),
      XH = LH(5951),
      GH = LH.n(XH),
      YH = function(HH) {
        return 0 === HH ? 0 : HH > 0 ? 1 : -1
      },
      uH = function(HH) {
        return rH()(HH) && HH.indexOf("%") === HH.length - 1
      },
      QH = function(HH) {
        return EH()(HH) && !hH()(HH)
      },
      WH = function(HH) {
        return GH()(HH)
      },
      MH = function(HH) {
        return QH(HH) || rH()(HH)
      },
      xH = 0,
      vH = function(HH) {
        var BH = ++xH;
        return "".concat(HH || "").concat(BH)
      },
      PH = function(HH, BH) {
        var LH, AH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          SH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!QH(HH) && !rH()(HH)) return AH;
        if (uH(HH)) {
          var tH = HH.indexOf("%");
          LH = BH * parseFloat(HH.slice(0, tH)) / 100
        } else LH = +HH;
        return hH()(LH) && (LH = AH), SH && LH > BH && (LH = BH), LH
      },
      TH = function(HH) {
        if (!HH) return null;
        var BH = Object.keys(HH);
        return BH && BH.length ? HH[BH[0]] : null
      },
      UH = function(HH) {
        if (!Array.isArray(HH)) return !1;
        for (var BH = HH.length, LH = {}, AH = 0; AH < BH; AH++) {
          if (LH[HH[AH]]) return !0;
          LH[HH[AH]] = !0
        }
        return !1
      },
      VH = function(HH, BH) {
        return QH(HH) && QH(BH) ? function(LH) {
          return HH + LH * (BH - HH)
        } : function() {
          return BH
        }
      };

    function OH(HH, BH, LH) {
      return HH && HH.length ? HH.find((function(HH) {
        return HH && ("function" === typeof BH ? BH(HH) : zH()(HH, BH)) === LH
      })) : null
    }
    var bH = function(HH) {
        if (!HH || !HH.length) return null;
        for (var BH = HH.length, LH = 0, AH = 0, rH = 0, SH = 0, hH = 1 / 0, tH = -1 / 0, zH = 0, CH = 0, EH = 0; EH < BH; EH++) LH += zH = HH[EH].cx || 0, AH += CH = HH[EH].cy || 0, rH += zH * CH, SH += zH * zH, hH = Math.min(hH, zH), tH = Math.max(tH, zH);
        var XH = BH * SH !== LH * LH ? (BH * rH - LH * AH) / (BH * SH - LH * LH) : 0;
        return {
          xmin: hH,
          xmax: tH,
          a: XH,
          b: (AH - XH * LH) / BH
        }
      },
      kH = function(HH, BH) {
        return QH(HH) && QH(BH) ? HH - BH : rH()(HH) && rH()(BH) ? HH.localeCompare(BH) : HH instanceof Date && BH instanceof Date ? HH.getTime() - BH.getTime() : String(HH).localeCompare(String(BH))
      }
  },
  6497: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => AH
    });
    var AH = {
      isSsr: !("undefined" !== typeof window && window.document && window.document.createElement && window.setTimeout),
      get: function(HH) {
        return AH[HH]
      },
      set: function(HH, BH) {
        if ("string" === typeof HH) AH[HH] = BH;
        else {
          var LH = Object.keys(HH);
          LH && LH.length && LH.forEach((function(BH) {
            AH[BH] = HH[BH]
          }))
        }
      }
    }
  },
  6762: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => AH
    });
    var AH = function(HH, BH) {
      var LH = HH.alwaysShow,
        AH = HH.ifOverflow;
      return LH && (AH = "extendDomain"), AH === BH
    }
  },
  5957: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => AH
    });
    var AH = function(HH, BH) {
      for (var LH = arguments.length, AH = new Array(LH > 2 ? LH - 2 : 0), rH = 2; rH < LH; rH++) AH[rH - 2] = arguments[rH]
    }
  },
  6754: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => tH,
      f: () => GH,
      g: () => CH
    });
    LH(5951), LH(45), LH(5789);

    function AH(HH) {
      return AH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, AH(HH)
    }

    function rH(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function SH(HH) {
      for (var BH = 1; BH < arguments.length; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? rH(Object(LH), !0).forEach((function(BH) {
          hH(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : rH(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }

    function hH(HH, BH, LH) {
      return (BH = function(HH) {
        var BH = function(HH, BH) {
          if ("object" != AH(HH) || !HH) return HH;
          var LH = HH[Symbol.toPrimitive];
          if (void 0 !== LH) {
            var rH = LH.call(HH, BH || "default");
            if ("object" != AH(rH)) return rH;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === BH ? String : Number)(HH)
        }(HH, "string");
        return "symbol" == AH(BH) ? BH : BH + ""
      }(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }
    var tH = Math.PI / 180,
      zH = function(HH) {
        return 180 * HH / Math.PI
      },
      CH = function(HH, BH, LH, AH) {
        return {
          x: HH + Math.cos(-tH * AH) * LH,
          y: BH + Math.sin(-tH * AH) * LH
        }
      },
      EH = function(HH, BH) {
        var LH = HH.x,
          AH = HH.y,
          rH = BH.cx,
          SH = BH.cy,
          hH = function(HH, BH) {
            var LH = HH.x,
              AH = HH.y,
              rH = BH.x,
              SH = BH.y;
            return Math.sqrt(Math.pow(LH - rH, 2) + Math.pow(AH - SH, 2))
          }({
            x: LH,
            y: AH
          }, {
            x: rH,
            y: SH
          });
        if (hH <= 0) return {
          radius: hH
        };
        var tH = (LH - rH) / hH,
          CH = Math.acos(tH);
        return AH > SH && (CH = 2 * Math.PI - CH), {
          radius: hH,
          angle: zH(CH),
          angleInRadian: CH
        }
      },
      XH = function(HH, BH) {
        var LH = BH.startAngle,
          AH = BH.endAngle,
          rH = Math.floor(LH / 360),
          SH = Math.floor(AH / 360);
        return HH + 360 * Math.min(rH, SH)
      },
      GH = function(HH, BH) {
        var LH = HH.x,
          AH = HH.y,
          rH = EH({
            x: LH,
            y: AH
          }, BH),
          hH = rH.radius,
          tH = rH.angle,
          zH = BH.innerRadius,
          CH = BH.outerRadius;
        if (hH < zH || hH > CH) return !1;
        if (0 === hH) return !0;
        var GH, YH = function(HH) {
            var BH = HH.startAngle,
              LH = HH.endAngle,
              AH = Math.floor(BH / 360),
              rH = Math.floor(LH / 360),
              SH = Math.min(AH, rH);
            return {
              startAngle: BH - 360 * SH,
              endAngle: LH - 360 * SH
            }
          }(BH),
          uH = YH.startAngle,
          QH = YH.endAngle,
          WH = tH;
        if (uH <= QH) {
          for (; WH > QH;) WH -= 360;
          for (; WH < uH;) WH += 360;
          GH = WH >= uH && WH <= QH
        } else {
          for (; WH > uH;) WH -= 360;
          for (; WH < QH;) WH += 360;
          GH = WH >= QH && WH <= uH
        }
        return GH ? SH(SH({}, BH), {}, {
          radius: hH,
          angle: XH(WH, BH)
        }) : null
      }
  },
  5960: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => cH,
      e: () => mH,
      f: () => oH,
      g: () => VH,
      h: () => NH,
      k: () => KH,
      o: () => eH,
      q: () => RH,
      t: () => gH,
      v: () => IH
    });
    var AH = LH(5714),
      rH = LH.n(AH),
      SH = LH(5951),
      hH = LH.n(SH),
      tH = LH(5686),
      zH = LH.n(tH),
      CH = LH(5789),
      EH = LH.n(CH),
      XH = LH(5607),
      GH = LH.n(XH),
      YH = LH(45),
      uH = LH(5968),
      QH = LH(5684),
      WH = LH(5973),
      MH = LH(5975),
      xH = ["children"],
      vH = ["children"];

    function PH(HH, BH) {
      if (null == HH) return {};
      var LH, AH, rH = function(HH, BH) {
        if (null == HH) return {};
        var LH = {};
        for (var AH in HH)
          if (Object.prototype.hasOwnProperty.call(HH, AH)) {
            if (BH.indexOf(AH) >= 0) continue;
            LH[AH] = HH[AH]
          } return LH
      }(HH, BH);
      if (Object.getOwnPropertySymbols) {
        var SH = Object.getOwnPropertySymbols(HH);
        for (AH = 0; AH < SH.length; AH++) LH = SH[AH], BH.indexOf(LH) >= 0 || Object.prototype.propertyIsEnumerable.call(HH, LH) && (rH[LH] = HH[LH])
      }
      return rH
    }

    function TH(HH) {
      return TH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, TH(HH)
    }
    var UH = {
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
      VH = function(HH) {
        return "string" === typeof HH ? HH : HH ? HH.displayName || HH.name || "Component" : ""
      },
      OH = null,
      bH = null,
      kH = function HH(BH) {
        if (BH === OH && Array.isArray(bH)) return bH;
        var LH = [];
        return YH.Children.forEach(BH, (function(BH) {
          hH()(BH) || ((0, uH.isFragment)(BH) ? LH = LH.concat(HH(BH.props.children)) : LH.push(BH))
        })), bH = LH, OH = BH, LH
      };

    function mH(HH, BH) {
      var LH = [],
        AH = [];
      return AH = Array.isArray(BH) ? BH.map((function(HH) {
        return VH(HH)
      })) : [VH(BH)], kH(HH).forEach((function(HH) {
        var BH = rH()(HH, "type.displayName") || rH()(HH, "type.name"); - 1 !== AH.indexOf(BH) && LH.push(HH)
      })), LH
    }

    function oH(HH, BH) {
      var LH = mH(HH, BH);
      return LH && LH[0]
    }
    var IH = function(HH) {
        if (!HH || !HH.props) return !1;
        var BH = HH.props,
          LH = BH.width,
          AH = BH.height;
        return !(!(0, QH.v)(LH) || LH <= 0 || !(0, QH.v)(AH) || AH <= 0)
      },
      fH = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"],
      lH = function(HH) {
        return HH && HH.type && zH()(HH.type) && fH.indexOf(HH.type) >= 0
      },
      KH = function(HH) {
        return HH && "object" === TH(HH) && "clipDot" in HH
      },
      cH = function(HH, BH, LH) {
        if (!HH || "function" === typeof HH || "boolean" === typeof HH) return null;
        var AH = HH;
        if ((0, YH.isValidElement)(HH) && (AH = HH.props), !GH()(AH)) return null;
        var rH = {};
        return Object.keys(AH).forEach((function(HH) {
          var SH;
          (function(HH, BH, LH, AH) {
            var rH, SH = null !== (rH = null === MH.g || void 0 === MH.g ? void 0 : MH.g[AH]) && void 0 !== rH ? rH : [];
            return BH.startsWith("data-") || !EH()(HH) && (AH && SH.includes(BH) || MH.i.includes(BH)) || LH && MH.c.includes(BH)
          })(null === (SH = AH) || void 0 === SH ? void 0 : SH[HH], HH, BH, LH) && (rH[HH] = AH[HH])
        })), rH
      },
      eH = function HH(BH, LH) {
        if (BH === LH) return !0;
        var AH = YH.Children.count(BH);
        if (AH !== YH.Children.count(LH)) return !1;
        if (0 === AH) return !0;
        if (1 === AH) return qH(Array.isArray(BH) ? BH[0] : BH, Array.isArray(LH) ? LH[0] : LH);
        for (var rH = 0; rH < AH; rH++) {
          var SH = BH[rH],
            hH = LH[rH];
          if (Array.isArray(SH) || Array.isArray(hH)) {
            if (!HH(SH, hH)) return !1
          } else if (!qH(SH, hH)) return !1
        }
        return !0
      },
      qH = function(HH, BH) {
        if (hH()(HH) && hH()(BH)) return !0;
        if (!hH()(HH) && !hH()(BH)) {
          var LH = HH.props || {},
            AH = LH.children,
            rH = PH(LH, xH),
            SH = BH.props || {},
            tH = SH.children,
            zH = PH(SH, vH);
          return AH && tH ? (0, WH.b)(rH, zH) && eH(AH, tH) : !AH && !tH && (0, WH.b)(rH, zH)
        }
        return !1
      },
      gH = function(HH, BH) {
        var LH = [],
          AH = {};
        return kH(HH).forEach((function(HH, rH) {
          if (lH(HH)) LH.push(HH);
          else if (HH) {
            var SH = VH(HH.type),
              hH = BH[SH] || {},
              tH = hH.handler,
              zH = hH.once;
            if (tH && (!zH || !AH[SH])) {
              var CH = tH(HH, SH, rH);
              LH.push(CH), AH[SH] = !0
            }
          }
        })), LH
      },
      NH = function(HH) {
        var BH = HH && HH.type;
        return BH && UH[BH] ? UH[BH] : null
      },
      RH = function(HH, BH) {
        return kH(BH).indexOf(HH)
      }
  },
  5973: (HH, BH, LH) => {
    function AH(HH, BH) {
      for (var LH in HH)
        if ({}.hasOwnProperty.call(HH, LH) && (!{}.hasOwnProperty.call(BH, LH) || HH[LH] !== BH[LH])) return !1;
      for (var AH in BH)
        if ({}.hasOwnProperty.call(BH, AH) && !{}.hasOwnProperty.call(HH, AH)) return !1;
      return !0
    }
    LH.d(BH, {
      b: () => AH
    })
  },
  6739: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => EH
    });
    var AH = LH(6568),
      rH = LH(6665),
      SH = LH(5960);

    function hH(HH) {
      return hH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, hH(HH)
    }

    function tH(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function zH(HH) {
      for (var BH = 1; BH < arguments.length; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? tH(Object(LH), !0).forEach((function(BH) {
          CH(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : tH(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }

    function CH(HH, BH, LH) {
      return (BH = function(HH) {
        var BH = function(HH, BH) {
          if ("object" != hH(HH) || !HH) return HH;
          var LH = HH[Symbol.toPrimitive];
          if (void 0 !== LH) {
            var AH = LH.call(HH, BH || "default");
            if ("object" != hH(AH)) return AH;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === BH ? String : Number)(HH)
        }(HH, "string");
        return "symbol" == hH(BH) ? BH : BH + ""
      }(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }
    var EH = function(HH) {
      var BH = HH.children,
        LH = HH.formattedGraphicalItems,
        hH = HH.legendWidth,
        tH = HH.legendContent,
        CH = (0, SH.f)(BH, AH.b);
      if (!CH) return null;
      var EH, XH = AH.b.defaultProps,
        GH = void 0 !== XH ? zH(zH({}, XH), CH.props) : {};
      return EH = CH.props && CH.props.payload ? CH.props && CH.props.payload : "children" === tH ? (LH || []).reduce((function(HH, BH) {
        var LH = BH.item,
          AH = BH.props,
          rH = AH.sectors || AH.data || [];
        return HH.concat(rH.map((function(HH) {
          return {
            type: CH.props.iconType || LH.props.legendType,
            value: HH.name,
            color: HH.fill,
            payload: HH
          }
        })))
      }), []) : (LH || []).map((function(HH) {
        var BH = HH.item,
          LH = BH.type.defaultProps,
          AH = void 0 !== LH ? zH(zH({}, LH), BH.props) : {},
          SH = AH.dataKey,
          hH = AH.name,
          tH = AH.legendType;
        return {
          inactive: AH.hide,
          dataKey: SH,
          type: GH.iconType || tH || "square",
          color: (0, rH.Q)(BH),
          value: hH || SH,
          payload: AH
        }
      })), zH(zH(zH({}, GH), AH.b.getWithHeight(CH, hH)), {}, {
        payload: EH,
        item: CH
      })
    }
  },
  6503: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => tH
    });
    var AH = LH(6508),
      rH = LH.n(AH),
      SH = LH(5789),
      hH = LH.n(SH);

    function tH(HH, BH, LH) {
      return !0 === BH ? rH()(HH, LH) : hH()(BH) ? rH()(HH, BH) : HH
    }
  },
  5975: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => EH,
      g: () => CH,
      i: () => tH,
      m: () => XH,
      n: () => GH
    });
    var AH = LH(45),
      rH = LH(5607),
      SH = LH.n(rH);

    function hH(HH) {
      return hH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, hH(HH)
    }
    var tH = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "PX", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"],
      zH = ["points", "pathLength"],
      CH = {
        svg: ["viewBox", "children"],
        polygon: zH,
        polyline: zH
      },
      EH = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"],
      XH = function(HH, BH) {
        if (!HH || "function" === typeof HH || "boolean" === typeof HH) return null;
        var LH = HH;
        if ((0, AH.isValidElement)(HH) && (LH = HH.props), !SH()(LH)) return null;
        var rH = {};
        return Object.keys(LH).forEach((function(HH) {
          EH.includes(HH) && (rH[HH] = BH || function(BH) {
            return LH[HH](LH, BH)
          })
        })), rH
      },
      GH = function(HH, BH, LH) {
        if (!SH()(HH) || "object" !== hH(HH)) return null;
        var AH = null;
        return Object.keys(HH).forEach((function(rH) {
          var SH = HH[rH];
          EH.includes(rH) && "function" === typeof SH && (AH || (AH = {}), AH[rH] = function(HH, BH, LH) {
            return function(AH) {
              return HH(BH, LH, AH), null
            }
          }(SH, BH, LH))
        })), AH
      }
  },
  5971: (HH, BH) => {
    var LH, AH = Symbol.for("react.element"),
      rH = Symbol.for("react.portal"),
      SH = Symbol.for("react.fragment"),
      hH = Symbol.for("react.strict_mode"),
      tH = Symbol.for("react.profiler"),
      zH = Symbol.for("react.provider"),
      CH = Symbol.for("react.context"),
      EH = Symbol.for("react.server_context"),
      XH = Symbol.for("react.forward_ref"),
      GH = Symbol.for("react.suspense"),
      YH = Symbol.for("react.suspense_list"),
      uH = Symbol.for("react.memo"),
      QH = Symbol.for("react.lazy"),
      WH = Symbol.for("react.offscreen");

    function MH(HH) {
      if ("object" === typeof HH && null !== HH) {
        var BH = HH.$$typeof;
        switch (BH) {
          case AH:
            switch (HH = HH.type) {
              case SH:
              case tH:
              case hH:
              case GH:
              case YH:
                return HH;
              default:
                switch (HH = HH && HH.$$typeof) {
                  case EH:
                  case CH:
                  case XH:
                  case QH:
                  case uH:
                  case zH:
                    return HH;
                  default:
                    return BH
                }
            }
          case rH:
            return BH
        }
      }
    }
    LH = Symbol.for("react.module.reference"), BH.isFragment = function(HH) {
      return MH(HH) === SH
    }
  },
  5968: (HH, BH, LH) => {
    HH.exports = LH(5971)
  },
  5582: (HH, BH, LH) => {
    function AH(HH) {
      var BH, LH, rH = "";
      if ("string" == typeof HH || "number" == typeof HH) rH += HH;
      else if ("object" == typeof HH)
        if (Array.isArray(HH)) {
          var SH = HH.length;
          for (BH = 0; BH < SH; BH++) HH[BH] && (LH = AH(HH[BH])) && (rH && (rH += " "), rH += LH)
        } else
          for (LH in HH) HH[LH] && (rH && (rH += " "), rH += LH);
      return rH
    }
    LH.d(BH, {
      e: () => rH
    });
    const rH = function() {
      for (var HH, BH, LH = 0, rH = "", SH = arguments.length; LH < SH; LH++)(HH = arguments[LH]) && (BH = AH(HH)) && (rH && (rH += " "), rH += BH);
      return rH
    }
  },
  6673: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => SH,
      c: () => tH
    });
    var AH = LH(6679),
      rH = LH(6681);

    function SH() {
      var HH, BH, LH = (0, rH.d)().unknown(void 0),
        hH = LH.domain,
        tH = LH.range,
        zH = 0,
        CH = 1,
        EH = !1,
        XH = 0,
        GH = 0,
        YH = .5;

      function uH() {
        var LH = hH().length,
          AH = CH < zH,
          rH = AH ? CH : zH,
          SH = AH ? zH : CH;
        HH = (SH - rH) / Math.max(1, LH - XH + 2 * GH), EH && (HH = Math.floor(HH)), rH += (SH - rH - HH * (LH - XH)) * YH, BH = HH * (1 - XH), EH && (rH = Math.round(rH), BH = Math.round(BH));
        var uH = function(HH, BH, LH) {
          HH = +HH, BH = +BH, LH = (rH = arguments.length) < 2 ? (BH = HH, HH = 0, 1) : rH < 3 ? 1 : +LH;
          for (var AH = -1, rH = 0 | Math.max(0, Math.ceil((BH - HH) / LH)), SH = new Array(rH); ++AH < rH;) SH[AH] = HH + AH * LH;
          return SH
        }(LH).map((function(BH) {
          return rH + HH * BH
        }));
        return tH(AH ? uH.reverse() : uH)
      }
      return delete LH.unknown, LH.domain = function(HH) {
        return arguments.length ? (hH(HH), uH()) : hH()
      }, LH.range = function(HH) {
        return arguments.length ? ([zH, CH] = HH, zH = +zH, CH = +CH, uH()) : [zH, CH]
      }, LH.rangeRound = function(HH) {
        return [zH, CH] = HH, zH = +zH, CH = +CH, EH = !0, uH()
      }, LH.bandwidth = function() {
        return BH
      }, LH.step = function() {
        return HH
      }, LH.round = function(HH) {
        return arguments.length ? (EH = !!HH, uH()) : EH
      }, LH.padding = function(HH) {
        return arguments.length ? (XH = Math.min(1, GH = +HH), uH()) : XH
      }, LH.paddingInner = function(HH) {
        return arguments.length ? (XH = Math.min(1, HH), uH()) : XH
      }, LH.paddingOuter = function(HH) {
        return arguments.length ? (GH = +HH, uH()) : GH
      }, LH.align = function(HH) {
        return arguments.length ? (YH = Math.max(0, Math.min(1, HH)), uH()) : YH
      }, LH.copy = function() {
        return SH(hH(), [zH, CH]).round(EH).paddingInner(XH).paddingOuter(GH).align(YH)
      }, AH.h.apply(uH(), arguments)
    }

    function hH(HH) {
      var BH = HH.copy;
      return HH.padding = HH.paddingOuter, delete HH.paddingInner, delete HH.paddingOuter, HH.copy = function() {
        return hH(BH())
      }, HH
    }

    function tH() {
      return hH(SH.apply(null, arguments).paddingInner(1))
    }
  },
  6679: (HH, BH, LH) => {
    function AH(HH, BH) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(HH);
          break;
        default:
          this.range(BH).domain(HH)
      }
      return this
    }

    function rH(HH, BH) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          "function" === typeof HH ? this.interpolator(HH) : this.range(HH);
          break;
        default:
          this.domain(HH), "function" === typeof BH ? this.interpolator(BH) : this.range(BH)
      }
      return this
    }
    LH.d(BH, {
      d: () => rH,
      h: () => AH
    })
  },
  6681: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => EH,
      g: () => CH
    });
    class AH extends Map {
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tH;
        if (super(), Object.defineProperties(this, {
            _intern: {
              value: new Map
            },
            _key: {
              value: BH
            }
          }), null != HH)
          for (const [LH, AH] of HH) this.set(LH, AH)
      }
      get(HH) {
        return super.get(rH(this, HH))
      }
      has(HH) {
        return super.has(rH(this, HH))
      }
      set(HH, BH) {
        return super.set(SH(this, HH), BH)
      }
      delete(HH) {
        return super.delete(hH(this, HH))
      }
    }
    Set;

    function rH(HH, BH) {
      let {
        _intern: LH,
        _key: AH
      } = HH;
      const rH = AH(BH);
      return LH.has(rH) ? LH.get(rH) : BH
    }

    function SH(HH, BH) {
      let {
        _intern: LH,
        _key: AH
      } = HH;
      const rH = AH(BH);
      return LH.has(rH) ? LH.get(rH) : (LH.set(rH, BH), BH)
    }

    function hH(HH, BH) {
      let {
        _intern: LH,
        _key: AH
      } = HH;
      const rH = AH(BH);
      return LH.has(rH) && (BH = LH.get(rH), LH.delete(rH)), BH
    }

    function tH(HH) {
      return null !== HH && "object" === typeof HH ? HH.valueOf() : HH
    }
    var zH = LH(6679);
    const CH = Symbol("implicit");

    function EH() {
      var HH = new AH,
        BH = [],
        LH = [],
        rH = CH;

      function SH(AH) {
        let SH = HH.get(AH);
        if (void 0 === SH) {
          if (rH !== CH) return rH;
          HH.set(AH, SH = BH.push(AH) - 1)
        }
        return LH[SH % LH.length]
      }
      return SH.domain = function(LH) {
        if (!arguments.length) return BH.slice();
        BH = [], HH = new AH;
        for (const AH of LH) HH.has(AH) || HH.set(AH, BH.push(AH) - 1);
        return SH
      }, SH.range = function(HH) {
        return arguments.length ? (LH = Array.from(HH), SH) : LH.slice()
      }, SH.unknown = function(HH) {
        return arguments.length ? (rH = HH, SH) : rH
      }, SH.copy = function() {
        return EH(BH, LH).unknown(rH)
      }, zH.h.apply(SH, arguments), SH
    }
  },
  6748: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => AH
    });
    Array.prototype.slice;

    function AH(HH) {
      return "object" === typeof HH && "length" in HH ? HH : Array.from(HH)
    }
  },
  6625: (HH, BH, LH) => {
    function AH(HH) {
      return function() {
        return HH
      }
    }
    LH.d(BH, {
      d: () => AH
    })
  },
  6634: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => CH
    });
    const AH = Math.PI,
      rH = 2 * AH,
      SH = 1e-6,
      hH = rH - SH;

    function tH(HH) {
      this._ += HH[0];
      for (let BH = 1, LH = HH.length; BH < LH; ++BH) this._ += arguments[BH] + HH[BH]
    }
    class zH {
      constructor(HH) {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == HH ? tH : function(HH) {
          let BH = Math.floor(HH);
          if (!(BH >= 0)) throw new Error(`invalid digits: ${HH}`);
          if (BH > 15) return tH;
          const LH = 10 ** BH;
          return function(HH) {
            this._ += HH[0];
            for (let BH = 1, AH = HH.length; BH < AH; ++BH) this._ += Math.round(arguments[BH] * LH) / LH + HH[BH]
          }
        }(HH)
      }
      moveTo(HH, BH) {
        this._append`M${this._x0=this._x1=+HH},${this._y0=this._y1=+BH}`
      }
      closePath() {
        null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`)
      }
      lineTo(HH, BH) {
        this._append`L${this._x1=+HH},${this._y1=+BH}`
      }
      quadraticCurveTo(HH, BH, LH, AH) {
        this._append`Q${+HH},${+BH},${this._x1=+LH},${this._y1=+AH}`
      }
      bezierCurveTo(HH, BH, LH, AH, rH, SH) {
        this._append`C${+HH},${+BH},${+LH},${+AH},${this._x1=+rH},${this._y1=+SH}`
      }
      arcTo(HH, BH, LH, rH, hH) {
        if (HH = +HH, BH = +BH, LH = +LH, rH = +rH, (hH = +hH) < 0) throw new Error(`negative radius: ${hH}`);
        let tH = this._x1,
          zH = this._y1,
          CH = LH - HH,
          EH = rH - BH,
          XH = tH - HH,
          GH = zH - BH,
          YH = XH * XH + GH * GH;
        if (null === this._x1) this._append`M${this._x1=HH},${this._y1=BH}`;
        else if (YH > SH)
          if (Math.abs(GH * CH - EH * XH) > SH && hH) {
            let uH = LH - tH,
              QH = rH - zH,
              WH = CH * CH + EH * EH,
              MH = uH * uH + QH * QH,
              xH = Math.sqrt(WH),
              vH = Math.sqrt(YH),
              PH = hH * Math.tan((AH - Math.acos((WH + YH - MH) / (2 * xH * vH))) / 2),
              TH = PH / vH,
              UH = PH / xH;
            Math.abs(TH - 1) > SH && this._append`L${HH+TH*XH},${BH+TH*GH}`, this._append`A${hH},${hH},0,0,${+(GH*uH>XH*QH)},${this._x1=HH+UH*CH},${this._y1=BH+UH*EH}`
          } else this._append`L${this._x1=HH},${this._y1=BH}`;
        else;
      }
      arc(HH, BH, LH, tH, zH, CH) {
        if (HH = +HH, BH = +BH, CH = !!CH, (LH = +LH) < 0) throw new Error(`negative radius: ${LH}`);
        let EH = LH * Math.cos(tH),
          XH = LH * Math.sin(tH),
          GH = HH + EH,
          YH = BH + XH,
          uH = 1 ^ CH,
          QH = CH ? tH - zH : zH - tH;
        null === this._x1 ? this._append`M${GH},${YH}` : (Math.abs(this._x1 - GH) > SH || Math.abs(this._y1 - YH) > SH) && this._append`L${GH},${YH}`, LH && (QH < 0 && (QH = QH % rH + rH), QH > hH ? this._append`A${LH},${LH},0,1,${uH},${HH-EH},${BH-XH}A${LH},${LH},0,1,${uH},${this._x1=GH},${this._y1=YH}` : QH > SH && this._append`A${LH},${LH},0,${+(QH>=AH)},${uH},${this._x1=HH+LH*Math.cos(zH)},${this._y1=BH+LH*Math.sin(zH)}`)
      }
      rect(HH, BH, LH, AH) {
        this._append`M${this._x0=this._x1=+HH},${this._y0=this._y1=+BH}h${LH=+LH}v${+AH}h${-LH}Z`
      }
      toString() {
        return this._
      }
    }

    function CH(HH) {
      let BH = 3;
      return HH.digits = function(LH) {
        if (!arguments.length) return BH;
        if (null == LH) BH = null;
        else {
          const HH = Math.floor(LH);
          if (!(HH >= 0)) throw new RangeError(`invalid digits: ${LH}`);
          BH = HH
        }
        return HH
      }, () => new zH(BH)
    }
    zH.prototype
  },
  6471: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => SH
    });
    var AH = !0,
      rH = "Invariant failed";

    function SH(HH, BH) {
      if (!HH) {
        if (AH) throw new Error(rH);
        var LH = "function" === typeof BH ? BH() : BH,
          SH = LH ? "".concat(rH, ": ").concat(LH) : rH;
        throw new Error(SH)
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);