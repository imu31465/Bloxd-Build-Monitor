/*! For license information please see 4udp6d.140.fc9dbb6f.chunk.js.LICENSE.txt */
export const id = 140;
export const ids = [140];
export const modules = {
  7276: function(RR, JR, GR) {
    var yR;
    ! function() {
      var tR, uR = 1e9,
        ZR = {
          precision: 20,
          rounding: 4,
          toExpNeg: -7,
          toExpPos: 21,
          LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
        },
        qR = !0,
        iR = "[DecimalError] ",
        fR = iR + "Invalid argument: ",
        VR = iR + "Exponent out of range: ",
        KR = Math.floor,
        wR = Math.pow,
        rR = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        eR = 1e7,
        aR = 9007199254740991,
        LR = KR(1286742750677284.5),
        nR = {};

      function UR(RR, JR) {
        var GR, yR, tR, uR, ZR, iR, fR, VR, KR = RR.constructor,
          wR = KR.precision;
        if (!RR.s || !JR.s) return JR.s || (JR = new KR(RR)), qR ? bR(JR, wR) : JR;
        if (fR = RR.d, VR = JR.d, ZR = RR.e, tR = JR.e, fR = fR.slice(), uR = ZR - tR) {
          for (uR < 0 ? (yR = fR, uR = -uR, iR = VR.length) : (yR = VR, tR = ZR, iR = fR.length), uR > (iR = (ZR = Math.ceil(wR / 7)) > iR ? ZR + 1 : iR + 1) && (uR = iR, yR.length = 1), yR.reverse(); uR--;) yR.push(0);
          yR.reverse()
        }
        for ((iR = fR.length) - (uR = VR.length) < 0 && (uR = iR, yR = VR, VR = fR, fR = yR), GR = 0; uR;) GR = (fR[--uR] = fR[uR] + VR[uR] + GR) / eR | 0, fR[uR] %= eR;
        for (GR && (fR.unshift(GR), ++tR), iR = fR.length; 0 == fR[--iR];) fR.pop();
        return JR.d = fR, JR.e = tR, qR ? bR(JR, wR) : JR
      }

      function WR(RR, JR, GR) {
        if (RR !== ~~RR || RR < JR || RR > GR) throw Error(fR + RR)
      }

      function AR(RR) {
        var JR, GR, yR, tR = RR.length - 1,
          uR = "",
          ZR = RR[0];
        if (tR > 0) {
          for (uR += ZR, JR = 1; JR < tR; JR++)(GR = 7 - (yR = RR[JR] + "").length) && (uR += lR(GR)), uR += yR;
          (GR = 7 - (yR = (ZR = RR[JR]) + "").length) && (uR += lR(GR))
        } else if (0 === ZR) return "0";
        for (; ZR % 10 === 0;) ZR /= 10;
        return uR + ZR
      }
      nR.absoluteValue = nR.abs = function() {
        var RR = new this.constructor(this);
        return RR.s && (RR.s = 1), RR
      }, nR.comparedTo = nR.cmp = function(RR) {
        var JR, GR, yR, tR, uR = this;
        if (RR = new uR.constructor(RR), uR.s !== RR.s) return uR.s || -RR.s;
        if (uR.e !== RR.e) return uR.e > RR.e ^ uR.s < 0 ? 1 : -1;
        for (JR = 0, GR = (yR = uR.d.length) < (tR = RR.d.length) ? yR : tR; JR < GR; ++JR)
          if (uR.d[JR] !== RR.d[JR]) return uR.d[JR] > RR.d[JR] ^ uR.s < 0 ? 1 : -1;
        return yR === tR ? 0 : yR > tR ^ uR.s < 0 ? 1 : -1
      }, nR.decimalPlaces = nR.dp = function() {
        var RR = this,
          JR = RR.d.length - 1,
          GR = 7 * (JR - RR.e);
        if (JR = RR.d[JR])
          for (; JR % 10 == 0; JR /= 10) GR--;
        return GR < 0 ? 0 : GR
      }, nR.dividedBy = nR.div = function(RR) {
        return CR(this, new this.constructor(RR))
      }, nR.dividedToIntegerBy = nR.idiv = function(RR) {
        var JR = this.constructor;
        return bR(CR(this, new JR(RR), 0, 1), JR.precision)
      }, nR.equals = nR.eq = function(RR) {
        return !this.cmp(RR)
      }, nR.exponent = function() {
        return MR(this)
      }, nR.greaterThan = nR.gt = function(RR) {
        return this.cmp(RR) > 0
      }, nR.greaterThanOrEqualTo = nR.gte = function(RR) {
        return this.cmp(RR) >= 0
      }, nR.isInteger = nR.isint = function() {
        return this.e > this.d.length - 2
      }, nR.isNegative = nR.isneg = function() {
        return this.s < 0
      }, nR.isPositive = nR.ispos = function() {
        return this.s > 0
      }, nR.isZero = function() {
        return 0 === this.s
      }, nR.lessThan = nR.lt = function(RR) {
        return this.cmp(RR) < 0
      }, nR.lessThanOrEqualTo = nR.lte = function(RR) {
        return this.cmp(RR) < 1
      }, nR.logarithm = nR.log = function(RR) {
        var JR, GR = this,
          yR = GR.constructor,
          uR = yR.precision,
          ZR = uR + 5;
        if (void 0 === RR) RR = new yR(10);
        else if ((RR = new yR(RR)).s < 1 || RR.eq(tR)) throw Error(iR + "NaN");
        if (GR.s < 1) throw Error(iR + (GR.s ? "NaN" : "-Infinity"));
        return GR.eq(tR) ? new yR(0) : (qR = !1, JR = CR(pR(GR, ZR), pR(RR, ZR), ZR), qR = !0, bR(JR, uR))
      }, nR.minus = nR.sub = function(RR) {
        var JR = this;
        return RR = new JR.constructor(RR), JR.s == RR.s ? vR(JR, RR) : UR(JR, (RR.s = -RR.s, RR))
      }, nR.modulo = nR.mod = function(RR) {
        var JR, GR = this,
          yR = GR.constructor,
          tR = yR.precision;
        if (!(RR = new yR(RR)).s) throw Error(iR + "NaN");
        return GR.s ? (qR = !1, JR = CR(GR, RR, 0, 1).times(RR), qR = !0, GR.minus(JR)) : bR(new yR(GR), tR)
      }, nR.naturalExponential = nR.exp = function() {
        return XR(this)
      }, nR.naturalLogarithm = nR.ln = function() {
        return pR(this)
      }, nR.negated = nR.neg = function() {
        var RR = new this.constructor(this);
        return RR.s = -RR.s || 0, RR
      }, nR.plus = nR.add = function(RR) {
        var JR = this;
        return RR = new JR.constructor(RR), JR.s == RR.s ? UR(JR, RR) : vR(JR, (RR.s = -RR.s, RR))
      }, nR.precision = nR.sd = function(RR) {
        var JR, GR, yR, tR = this;
        if (void 0 !== RR && RR !== !!RR && 1 !== RR && 0 !== RR) throw Error(fR + RR);
        if (JR = MR(tR) + 1, GR = 7 * (yR = tR.d.length - 1) + 1, yR = tR.d[yR]) {
          for (; yR % 10 == 0; yR /= 10) GR--;
          for (yR = tR.d[0]; yR >= 10; yR /= 10) GR++
        }
        return RR && JR > GR ? JR : GR
      }, nR.squareRoot = nR.sqrt = function() {
        var RR, JR, GR, yR, tR, uR, ZR, fR = this,
          VR = fR.constructor;
        if (fR.s < 1) {
          if (!fR.s) return new VR(0);
          throw Error(iR + "NaN")
        }
        for (RR = MR(fR), qR = !1, 0 == (tR = Math.sqrt(+fR)) || tR == 1 / 0 ? (((JR = AR(fR.d)).length + RR) % 2 == 0 && (JR += "0"), tR = Math.sqrt(JR), RR = KR((RR + 1) / 2) - (RR < 0 || RR % 2), yR = new VR(JR = tR == 1 / 0 ? "1e" + RR : (JR = tR.toExponential()).slice(0, JR.indexOf("e") + 1) + RR)) : yR = new VR(tR.toString()), tR = ZR = (GR = VR.precision) + 3;;)
          if (yR = (uR = yR).plus(CR(fR, uR, ZR + 2)).times(.5), AR(uR.d).slice(0, ZR) === (JR = AR(yR.d)).slice(0, ZR)) {
            if (JR = JR.slice(ZR - 3, ZR + 1), tR == ZR && "4999" == JR) {
              if (bR(uR, GR + 1, 0), uR.times(uR).eq(fR)) {
                yR = uR;
                break
              }
            } else if ("9999" != JR) break;
            ZR += 4
          } return qR = !0, bR(yR, GR)
      }, nR.times = nR.mul = function(RR) {
        var JR, GR, yR, tR, uR, ZR, iR, fR, VR, KR = this,
          wR = KR.constructor,
          rR = KR.d,
          aR = (RR = new wR(RR)).d;
        if (!KR.s || !RR.s) return new wR(0);
        for (RR.s *= KR.s, GR = KR.e + RR.e, (fR = rR.length) < (VR = aR.length) && (uR = rR, rR = aR, aR = uR, ZR = fR, fR = VR, VR = ZR), uR = [], yR = ZR = fR + VR; yR--;) uR.push(0);
        for (yR = VR; --yR >= 0;) {
          for (JR = 0, tR = fR + yR; tR > yR;) iR = uR[tR] + aR[yR] * rR[tR - yR - 1] + JR, uR[tR--] = iR % eR | 0, JR = iR / eR | 0;
          uR[tR] = (uR[tR] + JR) % eR | 0
        }
        for (; !uR[--ZR];) uR.pop();
        return JR ? ++GR : uR.shift(), RR.d = uR, RR.e = GR, qR ? bR(RR, wR.precision) : RR
      }, nR.toDecimalPlaces = nR.todp = function(RR, JR) {
        var GR = this,
          yR = GR.constructor;
        return GR = new yR(GR), void 0 === RR ? GR : (WR(RR, 0, uR), void 0 === JR ? JR = yR.rounding : WR(JR, 0, 8), bR(GR, RR + MR(GR) + 1, JR))
      }, nR.toExponential = function(RR, JR) {
        var GR, yR = this,
          tR = yR.constructor;
        return void 0 === RR ? GR = OR(yR, !0) : (WR(RR, 0, uR), void 0 === JR ? JR = tR.rounding : WR(JR, 0, 8), GR = OR(yR = bR(new tR(yR), RR + 1, JR), !0, RR + 1)), GR
      }, nR.toFixed = function(RR, JR) {
        var GR, yR, tR = this,
          ZR = tR.constructor;
        return void 0 === RR ? OR(tR) : (WR(RR, 0, uR), void 0 === JR ? JR = ZR.rounding : WR(JR, 0, 8), GR = OR((yR = bR(new ZR(tR), RR + MR(tR) + 1, JR)).abs(), !1, RR + MR(yR) + 1), tR.isneg() && !tR.isZero() ? "-" + GR : GR)
      }, nR.toInteger = nR.toint = function() {
        var RR = this,
          JR = RR.constructor;
        return bR(new JR(RR), MR(RR) + 1, JR.rounding)
      }, nR.toNumber = function() {
        return +this
      }, nR.toPower = nR.pow = function(RR) {
        var JR, GR, yR, uR, ZR, fR, VR = this,
          wR = VR.constructor,
          rR = +(RR = new wR(RR));
        if (!RR.s) return new wR(tR);
        if (!(VR = new wR(VR)).s) {
          if (RR.s < 1) throw Error(iR + "Infinity");
          return VR
        }
        if (VR.eq(tR)) return VR;
        if (yR = wR.precision, RR.eq(tR)) return bR(VR, yR);
        if (fR = (JR = RR.e) >= (GR = RR.d.length - 1), ZR = VR.s, fR) {
          if ((GR = rR < 0 ? -rR : rR) <= aR) {
            for (uR = new wR(tR), JR = Math.ceil(yR / 7 + 4), qR = !1; GR % 2 && xR((uR = uR.times(VR)).d, JR), 0 !== (GR = KR(GR / 2));) xR((VR = VR.times(VR)).d, JR);
            return qR = !0, RR.s < 0 ? new wR(tR).div(uR) : bR(uR, yR)
          }
        } else if (ZR < 0) throw Error(iR + "NaN");
        return ZR = ZR < 0 && 1 & RR.d[Math.max(JR, GR)] ? -1 : 1, VR.s = 1, qR = !1, uR = RR.times(pR(VR, yR + 12)), qR = !0, (uR = XR(uR)).s = ZR, uR
      }, nR.toPrecision = function(RR, JR) {
        var GR, yR, tR = this,
          ZR = tR.constructor;
        return void 0 === RR ? yR = OR(tR, (GR = MR(tR)) <= ZR.toExpNeg || GR >= ZR.toExpPos) : (WR(RR, 1, uR), void 0 === JR ? JR = ZR.rounding : WR(JR, 0, 8), yR = OR(tR = bR(new ZR(tR), RR, JR), RR <= (GR = MR(tR)) || GR <= ZR.toExpNeg, RR)), yR
      }, nR.toSignificantDigits = nR.tosd = function(RR, JR) {
        var GR = this.constructor;
        return void 0 === RR ? (RR = GR.precision, JR = GR.rounding) : (WR(RR, 1, uR), void 0 === JR ? JR = GR.rounding : WR(JR, 0, 8)), bR(new GR(this), RR, JR)
      }, nR.toString = nR.valueOf = nR.val = nR.toJSON = function() {
        var RR = this,
          JR = MR(RR),
          GR = RR.constructor;
        return OR(RR, JR <= GR.toExpNeg || JR >= GR.toExpPos)
      };
      var CR = function() {
        function RR(RR, JR) {
          var GR, yR = 0,
            tR = RR.length;
          for (RR = RR.slice(); tR--;) GR = RR[tR] * JR + yR, RR[tR] = GR % eR | 0, yR = GR / eR | 0;
          return yR && RR.unshift(yR), RR
        }

        function JR(RR, JR, GR, yR) {
          var tR, uR;
          if (GR != yR) uR = GR > yR ? 1 : -1;
          else
            for (tR = uR = 0; tR < GR; tR++)
              if (RR[tR] != JR[tR]) {
                uR = RR[tR] > JR[tR] ? 1 : -1;
                break
              } return uR
        }

        function GR(RR, JR, GR) {
          for (var yR = 0; GR--;) RR[GR] -= yR, yR = RR[GR] < JR[GR] ? 1 : 0, RR[GR] = yR * eR + RR[GR] - JR[GR];
          for (; !RR[0] && RR.length > 1;) RR.shift()
        }
        return function(yR, tR, uR, ZR) {
          var qR, fR, VR, KR, wR, rR, aR, LR, nR, UR, WR, AR, CR, XR, BR, lR, pR, gR, vR = yR.constructor,
            OR = yR.s == tR.s ? 1 : -1,
            xR = yR.d,
            NR = tR.d;
          if (!yR.s) return new vR(yR);
          if (!tR.s) throw Error(iR + "Division by zero");
          for (fR = yR.e - tR.e, pR = NR.length, BR = xR.length, LR = (aR = new vR(OR)).d = [], VR = 0; NR[VR] == (xR[VR] || 0);) ++VR;
          if (NR[VR] > (xR[VR] || 0) && --fR, (AR = null == uR ? uR = vR.precision : ZR ? uR + (MR(yR) - MR(tR)) + 1 : uR) < 0) return new vR(0);
          if (AR = AR / 7 + 2 | 0, VR = 0, 1 == pR)
            for (KR = 0, NR = NR[0], AR++;
              (VR < BR || KR) && AR--; VR++) CR = KR * eR + (xR[VR] || 0), LR[VR] = CR / NR | 0, KR = CR % NR | 0;
          else {
            for ((KR = eR / (NR[0] + 1) | 0) > 1 && (NR = RR(NR, KR), xR = RR(xR, KR), pR = NR.length, BR = xR.length), XR = pR, UR = (nR = xR.slice(0, pR)).length; UR < pR;) nR[UR++] = 0;
            (gR = NR.slice()).unshift(0), lR = NR[0], NR[1] >= eR / 2 && ++lR;
            do {
              KR = 0, (qR = JR(NR, nR, pR, UR)) < 0 ? (WR = nR[0], pR != UR && (WR = WR * eR + (nR[1] || 0)), (KR = WR / lR | 0) > 1 ? (KR >= eR && (KR = eR - 1), 1 == (qR = JR(wR = RR(NR, KR), nR, rR = wR.length, UR = nR.length)) && (KR--, GR(wR, pR < rR ? gR : NR, rR))) : (0 == KR && (qR = KR = 1), wR = NR.slice()), (rR = wR.length) < UR && wR.unshift(0), GR(nR, wR, UR), -1 == qR && (qR = JR(NR, nR, pR, UR = nR.length)) < 1 && (KR++, GR(nR, pR < UR ? gR : NR, UR)), UR = nR.length) : 0 === qR && (KR++, nR = [0]), LR[VR++] = KR, qR && nR[0] ? nR[UR++] = xR[XR] || 0 : (nR = [xR[XR]], UR = 1)
            } while ((XR++ < BR || void 0 !== nR[0]) && AR--)
          }
          return LR[0] || LR.shift(), aR.e = fR, bR(aR, ZR ? uR + MR(aR) + 1 : uR)
        }
      }();

      function XR(RR, JR) {
        var GR, yR, uR, ZR, iR, fR = 0,
          KR = 0,
          rR = RR.constructor,
          eR = rR.precision;
        if (MR(RR) > 16) throw Error(VR + MR(RR));
        if (!RR.s) return new rR(tR);
        for (null == JR ? (qR = !1, iR = eR) : iR = JR, ZR = new rR(.03125); RR.abs().gte(.1);) RR = RR.times(ZR), KR += 5;
        for (iR += Math.log(wR(2, KR)) / Math.LN10 * 2 + 5 | 0, GR = yR = uR = new rR(tR), rR.precision = iR;;) {
          if (yR = bR(yR.times(RR), iR), GR = GR.times(++fR), AR((ZR = uR.plus(CR(yR, GR, iR))).d).slice(0, iR) === AR(uR.d).slice(0, iR)) {
            for (; KR--;) uR = bR(uR.times(uR), iR);
            return rR.precision = eR, null == JR ? (qR = !0, bR(uR, eR)) : uR
          }
          uR = ZR
        }
      }

      function MR(RR) {
        for (var JR = 7 * RR.e, GR = RR.d[0]; GR >= 10; GR /= 10) JR++;
        return JR
      }

      function BR(RR, JR, GR) {
        if (JR > RR.LN10.sd()) throw qR = !0, GR && (RR.precision = GR), Error(iR + "LN10 precision limit exceeded");
        return bR(new RR(RR.LN10), JR)
      }

      function lR(RR) {
        for (var JR = ""; RR--;) JR += "0";
        return JR
      }

      function pR(RR, JR) {
        var GR, yR, uR, ZR, fR, VR, KR, wR, rR, eR = 1,
          aR = RR,
          LR = aR.d,
          nR = aR.constructor,
          UR = nR.precision;
        if (aR.s < 1) throw Error(iR + (aR.s ? "NaN" : "-Infinity"));
        if (aR.eq(tR)) return new nR(0);
        if (null == JR ? (qR = !1, wR = UR) : wR = JR, aR.eq(10)) return null == JR && (qR = !0), BR(nR, wR);
        if (wR += 10, nR.precision = wR, yR = (GR = AR(LR)).charAt(0), ZR = MR(aR), !(Math.abs(ZR) < 15e14)) return KR = BR(nR, wR + 2, UR).times(ZR + ""), aR = pR(new nR(yR + "." + GR.slice(1)), wR - 10).plus(KR), nR.precision = UR, null == JR ? (qR = !0, bR(aR, UR)) : aR;
        for (; yR < 7 && 1 != yR || 1 == yR && GR.charAt(1) > 3;) yR = (GR = AR((aR = aR.times(RR)).d)).charAt(0), eR++;
        for (ZR = MR(aR), yR > 1 ? (aR = new nR("0." + GR), ZR++) : aR = new nR(yR + "." + GR.slice(1)), VR = fR = aR = CR(aR.minus(tR), aR.plus(tR), wR), rR = bR(aR.times(aR), wR), uR = 3;;) {
          if (fR = bR(fR.times(rR), wR), AR((KR = VR.plus(CR(fR, new nR(uR), wR))).d).slice(0, wR) === AR(VR.d).slice(0, wR)) return VR = VR.times(2), 0 !== ZR && (VR = VR.plus(BR(nR, wR + 2, UR).times(ZR + ""))), VR = CR(VR, new nR(eR), wR), nR.precision = UR, null == JR ? (qR = !0, bR(VR, UR)) : VR;
          VR = KR, uR += 2
        }
      }

      function gR(RR, JR) {
        var GR, yR, tR;
        for ((GR = JR.indexOf(".")) > -1 && (JR = JR.replace(".", "")), (yR = JR.search(/e/i)) > 0 ? (GR < 0 && (GR = yR), GR += +JR.slice(yR + 1), JR = JR.substring(0, yR)) : GR < 0 && (GR = JR.length), yR = 0; 48 === JR.charCodeAt(yR);) ++yR;
        for (tR = JR.length; 48 === JR.charCodeAt(tR - 1);) --tR;
        if (JR = JR.slice(yR, tR)) {
          if (tR -= yR, GR = GR - yR - 1, RR.e = KR(GR / 7), RR.d = [], yR = (GR + 1) % 7, GR < 0 && (yR += 7), yR < tR) {
            for (yR && RR.d.push(+JR.slice(0, yR)), tR -= 7; yR < tR;) RR.d.push(+JR.slice(yR, yR += 7));
            yR = 7 - (JR = JR.slice(yR)).length
          } else yR -= tR;
          for (; yR--;) JR += "0";
          if (RR.d.push(+JR), qR && (RR.e > LR || RR.e < -LR)) throw Error(VR + GR)
        } else RR.s = 0, RR.e = 0, RR.d = [0];
        return RR
      }

      function bR(RR, JR, GR) {
        var yR, tR, uR, ZR, iR, fR, rR, aR, nR = RR.d;
        for (ZR = 1, uR = nR[0]; uR >= 10; uR /= 10) ZR++;
        if ((yR = JR - ZR) < 0) yR += 7, tR = JR, rR = nR[aR = 0];
        else {
          if ((aR = Math.ceil((yR + 1) / 7)) >= (uR = nR.length)) return RR;
          for (rR = uR = nR[aR], ZR = 1; uR >= 10; uR /= 10) ZR++;
          tR = (yR %= 7) - 7 + ZR
        }
        if (void 0 !== GR && (iR = rR / (uR = wR(10, ZR - tR - 1)) % 10 | 0, fR = JR < 0 || void 0 !== nR[aR + 1] || rR % uR, fR = GR < 4 ? (iR || fR) && (0 == GR || GR == (RR.s < 0 ? 3 : 2)) : iR > 5 || 5 == iR && (4 == GR || fR || 6 == GR && (yR > 0 ? tR > 0 ? rR / wR(10, ZR - tR) : 0 : nR[aR - 1]) % 10 & 1 || GR == (RR.s < 0 ? 8 : 7))), JR < 1 || !nR[0]) return fR ? (uR = MR(RR), nR.length = 1, JR = JR - uR - 1, nR[0] = wR(10, (7 - JR % 7) % 7), RR.e = KR(-JR / 7) || 0) : (nR.length = 1, nR[0] = RR.e = RR.s = 0), RR;
        if (0 == yR ? (nR.length = aR, uR = 1, aR--) : (nR.length = aR + 1, uR = wR(10, 7 - yR), nR[aR] = tR > 0 ? (rR / wR(10, ZR - tR) % wR(10, tR) | 0) * uR : 0), fR)
          for (;;) {
            if (0 == aR) {
              (nR[0] += uR) == eR && (nR[0] = 1, ++RR.e);
              break
            }
            if (nR[aR] += uR, nR[aR] != eR) break;
            nR[aR--] = 0, uR = 1
          }
        for (yR = nR.length; 0 === nR[--yR];) nR.pop();
        if (qR && (RR.e > LR || RR.e < -LR)) throw Error(VR + MR(RR));
        return RR
      }

      function vR(RR, JR) {
        var GR, yR, tR, uR, ZR, iR, fR, VR, KR, wR, rR = RR.constructor,
          aR = rR.precision;
        if (!RR.s || !JR.s) return JR.s ? JR.s = -JR.s : JR = new rR(RR), qR ? bR(JR, aR) : JR;
        if (fR = RR.d, wR = JR.d, yR = JR.e, VR = RR.e, fR = fR.slice(), ZR = VR - yR) {
          for ((KR = ZR < 0) ? (GR = fR, ZR = -ZR, iR = wR.length) : (GR = wR, yR = VR, iR = fR.length), ZR > (tR = Math.max(Math.ceil(aR / 7), iR) + 2) && (ZR = tR, GR.length = 1), GR.reverse(), tR = ZR; tR--;) GR.push(0);
          GR.reverse()
        } else {
          for ((KR = (tR = fR.length) < (iR = wR.length)) && (iR = tR), tR = 0; tR < iR; tR++)
            if (fR[tR] != wR[tR]) {
              KR = fR[tR] < wR[tR];
              break
            } ZR = 0
        }
        for (KR && (GR = fR, fR = wR, wR = GR, JR.s = -JR.s), iR = fR.length, tR = wR.length - iR; tR > 0; --tR) fR[iR++] = 0;
        for (tR = wR.length; tR > ZR;) {
          if (fR[--tR] < wR[tR]) {
            for (uR = tR; uR && 0 === fR[--uR];) fR[uR] = eR - 1;
            --fR[uR], fR[tR] += eR
          }
          fR[tR] -= wR[tR]
        }
        for (; 0 === fR[--iR];) fR.pop();
        for (; 0 === fR[0]; fR.shift()) --yR;
        return fR[0] ? (JR.d = fR, JR.e = yR, qR ? bR(JR, aR) : JR) : new rR(0)
      }

      function OR(RR, JR, GR) {
        var yR, tR = MR(RR),
          uR = AR(RR.d),
          ZR = uR.length;
        return JR ? (GR && (yR = GR - ZR) > 0 ? uR = uR.charAt(0) + "." + uR.slice(1) + lR(yR) : ZR > 1 && (uR = uR.charAt(0) + "." + uR.slice(1)), uR = uR + (tR < 0 ? "e" : "e+") + tR) : tR < 0 ? (uR = "0." + lR(-tR - 1) + uR, GR && (yR = GR - ZR) > 0 && (uR += lR(yR))) : tR >= ZR ? (uR += lR(tR + 1 - ZR), GR && (yR = GR - tR - 1) > 0 && (uR = uR + "." + lR(yR))) : ((yR = tR + 1) < ZR && (uR = uR.slice(0, yR) + "." + uR.slice(yR)), GR && (yR = GR - ZR) > 0 && (tR + 1 === ZR && (uR += "."), uR += lR(yR))), RR.s < 0 ? "-" + uR : uR
      }

      function xR(RR, JR) {
        if (RR.length > JR) return RR.length = JR, !0
      }

      function NR(RR) {
        if (!RR || "object" !== typeof RR) throw Error(iR + "Object expected");
        var JR, GR, yR, tR = ["precision", 1, uR, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
        for (JR = 0; JR < tR.length; JR += 3)
          if (void 0 !== (yR = RR[GR = tR[JR]])) {
            if (!(KR(yR) === yR && yR >= tR[JR + 1] && yR <= tR[JR + 2])) throw Error(fR + GR + ": " + yR);
            this[GR] = yR
          } if (void 0 !== (yR = RR[GR = "LN10"])) {
          if (yR != Math.LN10) throw Error(fR + GR + ": " + yR);
          this[GR] = new this(yR)
        }
        return this
      }
      ZR = function RR(JR) {
        var GR, yR, tR;

        function uR(RR) {
          var JR = this;
          if (!(JR instanceof uR)) return new uR(RR);
          if (JR.constructor = uR, RR instanceof uR) return JR.s = RR.s, JR.e = RR.e, void(JR.d = (RR = RR.d) ? RR.slice() : RR);
          if ("number" === typeof RR) {
            if (0 * RR !== 0) throw Error(fR + RR);
            if (RR > 0) JR.s = 1;
            else {
              if (!(RR < 0)) return JR.s = 0, JR.e = 0, void(JR.d = [0]);
              RR = -RR, JR.s = -1
            }
            return RR === ~~RR && RR < 1e7 ? (JR.e = 0, void(JR.d = [RR])) : gR(JR, RR.toString())
          }
          if ("string" !== typeof RR) throw Error(fR + RR);
          if (45 === RR.charCodeAt(0) ? (RR = RR.slice(1), JR.s = -1) : JR.s = 1, !rR.test(RR)) throw Error(fR + RR);
          gR(JR, RR)
        }
        if (uR.prototype = nR, uR.ROUND_UP = 0, uR.ROUND_DOWN = 1, uR.ROUND_CEIL = 2, uR.ROUND_FLOOR = 3, uR.ROUND_HALF_UP = 4, uR.ROUND_HALF_DOWN = 5, uR.ROUND_HALF_EVEN = 6, uR.ROUND_HALF_CEIL = 7, uR.ROUND_HALF_FLOOR = 8, uR.clone = RR, uR.config = uR.set = NR, void 0 === JR && (JR = {}), JR)
          for (tR = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], GR = 0; GR < tR.length;) JR.hasOwnProperty(yR = tR[GR++]) || (JR[yR] = this[yR]);
        return uR.config(JR), uR
      }(ZR), ZR.default = ZR.Decimal = ZR, tR = new ZR(1), void 0 === (yR = function() {
        return ZR
      }.call(JR, GR, JR, RR)) || (RR.exports = yR)
    }()
  },
  6887: (RR, JR, GR) => {
    var yR = GR(6346)(GR(6174), "DataView");
    RR.exports = yR
  },
  6322: (RR, JR, GR) => {
    var yR = GR(6331),
      tR = GR(6387),
      uR = GR(6396),
      ZR = GR(6403),
      qR = GR(6405);

    function iR(RR) {
      var JR = -1,
        GR = null == RR ? 0 : RR.length;
      for (this.clear(); ++JR < GR;) {
        var yR = RR[JR];
        this.set(yR[0], yR[1])
      }
    }
    iR.prototype.clear = yR, iR.prototype.delete = tR, iR.prototype.get = uR, iR.prototype.has = ZR, iR.prototype.set = qR, RR.exports = iR
  },
  6408: (RR, JR, GR) => {
    var yR = GR(6417),
      tR = GR(6421),
      uR = GR(6433),
      ZR = GR(6436),
      qR = GR(6439);

    function iR(RR) {
      var JR = -1,
        GR = null == RR ? 0 : RR.length;
      for (this.clear(); ++JR < GR;) {
        var yR = RR[JR];
        this.set(yR[0], yR[1])
      }
    }
    iR.prototype.clear = yR, iR.prototype.delete = tR, iR.prototype.get = uR, iR.prototype.has = ZR, iR.prototype.set = qR, RR.exports = iR
  },
  6444: (RR, JR, GR) => {
    var yR = GR(6346)(GR(6174), "Map");
    RR.exports = yR
  },
  6305: (RR, JR, GR) => {
    var yR = GR(6313),
      tR = GR(6451),
      uR = GR(6473),
      ZR = GR(6477),
      qR = GR(6484);

    function iR(RR) {
      var JR = -1,
        GR = null == RR ? 0 : RR.length;
      for (this.clear(); ++JR < GR;) {
        var yR = RR[JR];
        this.set(yR[0], yR[1])
      }
    }
    iR.prototype.clear = yR, iR.prototype.delete = tR, iR.prototype.get = uR, iR.prototype.has = ZR, iR.prototype.set = qR, RR.exports = iR
  },
  6890: (RR, JR, GR) => {
    var yR = GR(6346)(GR(6174), "Promise");
    RR.exports = yR
  },
  6895: (RR, JR, GR) => {
    var yR = GR(6346)(GR(6174), "Set");
    RR.exports = yR
  },
  6704: (RR, JR, GR) => {
    var yR = GR(6305),
      tR = GR(6710),
      uR = GR(6719);

    function ZR(RR) {
      var JR = -1,
        GR = null == RR ? 0 : RR.length;
      for (this.__data__ = new yR; ++JR < GR;) this.add(RR[JR])
    }
    ZR.prototype.add = ZR.prototype.push = tR, ZR.prototype.has = uR, RR.exports = ZR
  },
  6654: (RR, JR, GR) => {
    var yR = GR(6408),
      tR = GR(6661),
      uR = GR(6666),
      ZR = GR(6669),
      qR = GR(6672),
      iR = GR(6681);

    function fR(RR) {
      var JR = this.__data__ = new yR(RR);
      this.size = JR.size
    }
    fR.prototype.clear = tR, fR.prototype.delete = uR, fR.prototype.get = ZR, fR.prototype.has = qR, fR.prototype.set = iR, RR.exports = fR
  },
  6211: (RR, JR, GR) => {
    var yR = GR(6174).Symbol;
    RR.exports = yR
  },
  6741: (RR, JR, GR) => {
    var yR = GR(6174).Uint8Array;
    RR.exports = yR
  },
  6897: (RR, JR, GR) => {
    var yR = GR(6346)(GR(6174), "WeakMap");
    RR.exports = yR
  },
  6992: RR => {
    RR.exports = function(RR, JR, GR) {
      switch (GR.length) {
        case 0:
          return RR.call(JR);
        case 1:
          return RR.call(JR, GR[0]);
        case 2:
          return RR.call(JR, GR[0], GR[1]);
        case 3:
          return RR.call(JR, GR[0], GR[1], GR[2])
      }
      return RR.apply(JR, GR)
    }
  },
  7348: RR => {
    RR.exports = function(RR, JR) {
      for (var GR = -1, yR = null == RR ? 0 : RR.length; ++GR < yR;)
        if (!JR(RR[GR], GR, RR)) return !1;
      return !0
    }
  },
  6782: RR => {
    RR.exports = function(RR, JR) {
      for (var GR = -1, yR = null == RR ? 0 : RR.length, tR = 0, uR = []; ++GR < yR;) {
        var ZR = RR[GR];
        JR(ZR, GR, RR) && (uR[tR++] = ZR)
      }
      return uR
    }
  },
  7061: (RR, JR, GR) => {
    var yR = GR(7065);
    RR.exports = function(RR, JR) {
      return !!(null == RR ? 0 : RR.length) && yR(RR, JR, 0) > -1
    }
  },
  7090: RR => {
    RR.exports = function(RR, JR, GR) {
      for (var yR = -1, tR = null == RR ? 0 : RR.length; ++yR < tR;)
        if (GR(JR, RR[yR])) return !0;
      return !1
    }
  },
  6807: (RR, JR, GR) => {
    var yR = GR(6814),
      tR = GR(6624),
      uR = GR(6241),
      ZR = GR(6819),
      qR = GR(6592),
      iR = GR(6830),
      fR = Object.prototype.hasOwnProperty;
    RR.exports = function(RR, JR) {
      var GR = uR(RR),
        VR = !GR && tR(RR),
        KR = !GR && !VR && ZR(RR),
        wR = !GR && !VR && !KR && iR(RR),
        rR = GR || VR || KR || wR,
        eR = rR ? yR(RR.length, String) : [],
        aR = eR.length;
      for (var LR in RR) !JR && !fR.call(RR, LR) || rR && ("length" == LR || KR && ("offset" == LR || "parent" == LR) || wR && ("buffer" == LR || "byteLength" == LR || "byteOffset" == LR) || qR(LR, aR)) || eR.push(LR);
      return eR
    }
  },
  6507: RR => {
    RR.exports = function(RR, JR) {
      for (var GR = -1, yR = null == RR ? 0 : RR.length, tR = Array(yR); ++GR < yR;) tR[GR] = JR(RR[GR], GR, RR);
      return tR
    }
  },
  6613: RR => {
    RR.exports = function(RR, JR) {
      for (var GR = -1, yR = JR.length, tR = RR.length; ++GR < yR;) RR[tR + GR] = JR[GR];
      return RR
    }
  },
  6724: RR => {
    RR.exports = function(RR, JR) {
      for (var GR = -1, yR = null == RR ? 0 : RR.length; ++GR < yR;)
        if (JR(RR[GR], GR, RR)) return !0;
      return !1
    }
  },
  7149: RR => {
    RR.exports = function(RR) {
      return RR.split("")
    }
  },
  6423: (RR, JR, GR) => {
    var yR = GR(6431);
    RR.exports = function(RR, JR) {
      for (var GR = RR.length; GR--;)
        if (yR(RR[GR][0], JR)) return GR;
      return -1
    }
  },
  7335: (RR, JR, GR) => {
    var yR = GR(7013);
    RR.exports = function(RR, JR, GR) {
      "__proto__" == JR && yR ? yR(RR, JR, {
        configurable: !0,
        enumerable: !0,
        value: GR,
        writable: !0
      }) : RR[JR] = GR
    }
  },
  6944: (RR, JR, GR) => {
    var yR = GR(6953),
      tR = GR(6964)(yR);
    RR.exports = tR
  },
  7351: (RR, JR, GR) => {
    var yR = GR(6944);
    RR.exports = function(RR, JR) {
      var GR = !0;
      return yR(RR, (function(RR, yR, tR) {
        return GR = !!JR(RR, yR, tR)
      })), GR
    }
  },
  7228: (RR, JR, GR) => {
    var yR = GR(6205);
    RR.exports = function(RR, JR, GR) {
      for (var tR = -1, uR = RR.length; ++tR < uR;) {
        var ZR = RR[tR],
          qR = JR(ZR);
        if (null != qR && (void 0 === iR ? qR === qR && !yR(qR) : GR(qR, iR))) var iR = qR,
          fR = ZR
      }
      return fR
    }
  },
  7071: RR => {
    RR.exports = function(RR, JR, GR, yR) {
      for (var tR = RR.length, uR = GR + (yR ? 1 : -1); yR ? uR-- : ++uR < tR;)
        if (JR(RR[uR], uR, RR)) return uR;
      return -1
    }
  },
  6604: (RR, JR, GR) => {
    var yR = GR(6613),
      tR = GR(6622);
    RR.exports = function RR(JR, GR, uR, ZR, qR) {
      var iR = -1,
        fR = JR.length;
      for (uR || (uR = tR), qR || (qR = []); ++iR < fR;) {
        var VR = JR[iR];
        GR > 0 && uR(VR) ? GR > 1 ? RR(VR, GR - 1, uR, ZR, qR) : yR(qR, VR) : ZR || (qR[qR.length] = VR)
      }
      return qR
    }
  },
  6956: (RR, JR, GR) => {
    var yR = GR(6962)();
    RR.exports = yR
  },
  6953: (RR, JR, GR) => {
    var yR = GR(6956),
      tR = GR(6798);
    RR.exports = function(RR, JR) {
      return RR && yR(RR, JR, tR)
    }
  },
  6271: (RR, JR, GR) => {
    var yR = GR(6274),
      tR = GR(6514);
    RR.exports = function(RR, JR) {
      for (var GR = 0, uR = (JR = yR(JR, RR)).length; null != RR && GR < uR;) RR = RR[tR(JR[GR++])];
      return GR && GR == uR ? RR : void 0
    }
  },
  6770: (RR, JR, GR) => {
    var yR = GR(6613),
      tR = GR(6241);
    RR.exports = function(RR, JR, GR) {
      var uR = JR(RR);
      return tR(RR) ? uR : yR(uR, GR(RR))
    }
  },
  6209: (RR, JR, GR) => {
    var yR = GR(6211),
      tR = GR(6217),
      uR = GR(6225),
      ZR = yR ? yR.toStringTag : void 0;
    RR.exports = function(RR) {
      return null == RR ? void 0 === RR ? "[object Undefined]" : "[object Null]" : ZR && ZR in Object(RR) ? tR(RR) : uR(RR)
    }
  },
  7236: RR => {
    RR.exports = function(RR, JR) {
      return RR > JR
    }
  },
  6920: RR => {
    RR.exports = function(RR, JR) {
      return null != RR && JR in Object(RR)
    }
  },
  7065: (RR, JR, GR) => {
    var yR = GR(7071),
      tR = GR(7078),
      uR = GR(7082);
    RR.exports = function(RR, JR, GR) {
      return JR === JR ? uR(RR, JR, GR) : yR(RR, tR, GR)
    }
  },
  6629: (RR, JR, GR) => {
    var yR = GR(6209),
      tR = GR(6230);
    RR.exports = function(RR) {
      return tR(RR) && "[object Arguments]" == yR(RR)
    }
  },
  6686: (RR, JR, GR) => {
    var yR = GR(6693),
      tR = GR(6230);
    RR.exports = function RR(JR, GR, uR, ZR, qR) {
      return JR === GR || (null == JR || null == GR || !tR(JR) && !tR(GR) ? JR !== JR && GR !== GR : yR(JR, GR, uR, ZR, RR, qR))
    }
  },
  6693: (RR, JR, GR) => {
    var yR = GR(6654),
      tR = GR(6698),
      uR = GR(6733),
      ZR = GR(6757),
      qR = GR(6879),
      iR = GR(6241),
      fR = GR(6819),
      VR = GR(6830),
      KR = "[object Arguments]",
      wR = "[object Array]",
      rR = "[object Object]",
      eR = Object.prototype.hasOwnProperty;
    RR.exports = function(RR, JR, GR, aR, LR, nR) {
      var UR = iR(RR),
        WR = iR(JR),
        AR = UR ? wR : qR(RR),
        CR = WR ? wR : qR(JR),
        XR = (AR = AR == KR ? rR : AR) == rR,
        MR = (CR = CR == KR ? rR : CR) == rR,
        BR = AR == CR;
      if (BR && fR(RR)) {
        if (!fR(JR)) return !1;
        UR = !0, XR = !1
      }
      if (BR && !XR) return nR || (nR = new yR), UR || VR(RR) ? tR(RR, JR, GR, aR, LR, nR) : uR(RR, JR, AR, GR, aR, LR, nR);
      if (!(1 & GR)) {
        var lR = XR && eR.call(RR, "__wrapped__"),
          pR = MR && eR.call(JR, "__wrapped__");
        if (lR || pR) {
          var gR = lR ? RR.value() : RR,
            bR = pR ? JR.value() : JR;
          return nR || (nR = new yR), LR(gR, bR, GR, aR, nR)
        }
      }
      return !!BR && (nR || (nR = new yR), ZR(RR, JR, GR, aR, LR, nR))
    }
  },
  6649: (RR, JR, GR) => {
    var yR = GR(6654),
      tR = GR(6686);
    RR.exports = function(RR, JR, GR, uR) {
      var ZR = GR.length,
        qR = ZR,
        iR = !uR;
      if (null == RR) return !qR;
      for (RR = Object(RR); ZR--;) {
        var fR = GR[ZR];
        if (iR && fR[2] ? fR[1] !== RR[fR[0]] : !(fR[0] in RR)) return !1
      }
      for (; ++ZR < qR;) {
        var VR = (fR = GR[ZR])[0],
          KR = RR[VR],
          wR = fR[1];
        if (iR && fR[2]) {
          if (void 0 === KR && !(VR in RR)) return !1
        } else {
          var rR = new yR;
          if (uR) var eR = uR(KR, wR, VR, RR, JR, rR);
          if (!(void 0 === eR ? tR(wR, KR, 3, uR, rR) : eR)) return !1
        }
      }
      return !0
    }
  },
  7078: RR => {
    RR.exports = function(RR) {
      return RR !== RR
    }
  },
  6350: (RR, JR, GR) => {
    var yR = GR(6357),
      tR = GR(6362),
      uR = GR(6161),
      ZR = GR(6373),
      qR = /^\[object .+?Constructor\]$/,
      iR = Function.prototype,
      fR = Object.prototype,
      VR = iR.toString,
      KR = fR.hasOwnProperty,
      wR = RegExp("^" + VR.call(KR).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    RR.exports = function(RR) {
      return !(!uR(RR) || tR(RR)) && (yR(RR) ? wR : qR).test(ZR(RR))
    }
  },
  6835: (RR, JR, GR) => {
    var yR = GR(6209),
      tR = GR(6586),
      uR = GR(6230),
      ZR = {};
    ZR["[object Float32Array]"] = ZR["[object Float64Array]"] = ZR["[object Int8Array]"] = ZR["[object Int16Array]"] = ZR["[object Int32Array]"] = ZR["[object Uint8Array]"] = ZR["[object Uint8ClampedArray]"] = ZR["[object Uint16Array]"] = ZR["[object Uint32Array]"] = !0, ZR["[object Arguments]"] = ZR["[object Array]"] = ZR["[object ArrayBuffer]"] = ZR["[object Boolean]"] = ZR["[object DataView]"] = ZR["[object Date]"] = ZR["[object Error]"] = ZR["[object Function]"] = ZR["[object Map]"] = ZR["[object Number]"] = ZR["[object Object]"] = ZR["[object RegExp]"] = ZR["[object Set]"] = ZR["[object String]"] = ZR["[object WeakMap]"] = !1, RR.exports = function(RR) {
      return uR(RR) && tR(RR.length) && !!ZR[yR(RR)]
    }
  },
  6643: (RR, JR, GR) => {
    var yR = GR(6646),
      tR = GR(6907),
      uR = GR(6932),
      ZR = GR(6241),
      qR = GR(6934);
    RR.exports = function(RR) {
      return "function" == typeof RR ? RR : null == RR ? uR : "object" == typeof RR ? ZR(RR) ? tR(RR[0], RR[1]) : yR(RR) : qR(RR)
    }
  },
  6856: (RR, JR, GR) => {
    var yR = GR(6860),
      tR = GR(6863),
      uR = Object.prototype.hasOwnProperty;
    RR.exports = function(RR) {
      if (!yR(RR)) return tR(RR);
      var JR = [];
      for (var GR in Object(RR)) uR.call(RR, GR) && "constructor" != GR && JR.push(GR);
      return JR
    }
  },
  7252: RR => {
    RR.exports = function(RR, JR) {
      return RR < JR
    }
  },
  6941: (RR, JR, GR) => {
    var yR = GR(6944),
      tR = GR(6577);
    RR.exports = function(RR, JR) {
      var GR = -1,
        uR = tR(RR) ? Array(RR.length) : [];
      return yR(RR, (function(RR, yR, tR) {
        uR[++GR] = JR(RR, yR, tR)
      })), uR
    }
  },
  6646: (RR, JR, GR) => {
    var yR = GR(6649),
      tR = GR(6900),
      uR = GR(6905);
    RR.exports = function(RR) {
      var JR = tR(RR);
      return 1 == JR.length && JR[0][2] ? uR(JR[0][0], JR[0][1]) : function(GR) {
        return GR === RR || yR(GR, RR, JR)
      }
    }
  },
  6907: (RR, JR, GR) => {
    var yR = GR(6686),
      tR = GR(6262),
      uR = GR(6912),
      ZR = GR(6282),
      qR = GR(6902),
      iR = GR(6905),
      fR = GR(6514);
    RR.exports = function(RR, JR) {
      return ZR(RR) && qR(JR) ? iR(fR(RR), JR) : function(GR) {
        var ZR = tR(GR, RR);
        return void 0 === ZR && ZR === JR ? uR(GR, RR) : yR(JR, ZR, 3)
      }
    }
  },
  6636: (RR, JR, GR) => {
    var yR = GR(6507),
      tR = GR(6271),
      uR = GR(6643),
      ZR = GR(6941),
      qR = GR(6968),
      iR = GR(6843),
      fR = GR(6975),
      VR = GR(6932),
      KR = GR(6241);
    RR.exports = function(RR, JR, GR) {
      JR = JR.length ? yR(JR, (function(RR) {
        return KR(RR) ? function(JR) {
          return tR(JR, 1 === RR.length ? RR[0] : RR)
        } : RR
      })) : [VR];
      var wR = -1;
      JR = yR(JR, iR(uR));
      var rR = ZR(RR, (function(RR, GR, tR) {
        return {
          criteria: yR(JR, (function(JR) {
            return JR(RR)
          })),
          index: ++wR,
          value: RR
        }
      }));
      return qR(rR, (function(RR, JR) {
        return fR(RR, JR, GR)
      }))
    }
  },
  6936: RR => {
    RR.exports = function(RR) {
      return function(JR) {
        return null == JR ? void 0 : JR[RR]
      }
    }
  },
  6938: (RR, JR, GR) => {
    var yR = GR(6271);
    RR.exports = function(RR) {
      return function(JR) {
        return yR(JR, RR)
      }
    }
  },
  6568: RR => {
    var JR = Math.ceil,
      GR = Math.max;
    RR.exports = function(RR, yR, tR, uR) {
      for (var ZR = -1, qR = GR(JR((yR - RR) / (tR || 1)), 0), iR = Array(qR); qR--;) iR[uR ? qR : ++ZR] = RR, RR += tR;
      return iR
    }
  },
  6982: (RR, JR, GR) => {
    var yR = GR(6932),
      tR = GR(6989),
      uR = GR(6995);
    RR.exports = function(RR, JR) {
      return uR(tR(RR, JR, yR), RR + "")
    }
  },
  7003: (RR, JR, GR) => {
    var yR = GR(7009),
      tR = GR(7013),
      uR = GR(6932),
      ZR = tR ? function(RR, JR) {
        return tR(RR, "toString", {
          configurable: !0,
          enumerable: !1,
          value: yR(JR),
          writable: !0
        })
      } : uR;
    RR.exports = ZR
  },
  7132: RR => {
    RR.exports = function(RR, JR, GR) {
      var yR = -1,
        tR = RR.length;
      JR < 0 && (JR = -JR > tR ? 0 : tR + JR), (GR = GR > tR ? tR : GR) < 0 && (GR += tR), tR = JR > GR ? 0 : GR - JR >>> 0, JR >>>= 0;
      for (var uR = Array(tR); ++yR < tR;) uR[yR] = RR[yR + JR];
      return uR
    }
  },
  7428: (RR, JR, GR) => {
    var yR = GR(6944);
    RR.exports = function(RR, JR) {
      var GR;
      return yR(RR, (function(RR, yR, tR) {
        return !(GR = JR(RR, yR, tR))
      })), !!GR
    }
  },
  6968: RR => {
    RR.exports = function(RR, JR) {
      var GR = RR.length;
      for (RR.sort(JR); GR--;) RR[GR] = RR[GR].value;
      return RR
    }
  },
  6814: RR => {
    RR.exports = function(RR, JR) {
      for (var GR = -1, yR = Array(RR); ++GR < RR;) yR[GR] = JR(GR);
      return yR
    }
  },
  6498: (RR, JR, GR) => {
    var yR = GR(6211),
      tR = GR(6507),
      uR = GR(6241),
      ZR = GR(6205),
      qR = yR ? yR.prototype : void 0,
      iR = qR ? qR.toString : void 0;
    RR.exports = function RR(JR) {
      if ("string" == typeof JR) return JR;
      if (uR(JR)) return tR(JR, RR) + "";
      if (ZR(JR)) return iR ? iR.call(JR) : "";
      var GR = JR + "";
      return "0" == GR && 1 / JR == -1 / 0 ? "-0" : GR
    }
  },
  6189: (RR, JR, GR) => {
    var yR = GR(6197),
      tR = /^\s+/;
    RR.exports = function(RR) {
      return RR ? RR.slice(0, yR(RR) + 1).replace(tR, "") : RR
    }
  },
  6843: RR => {
    RR.exports = function(RR) {
      return function(JR) {
        return RR(JR)
      }
    }
  },
  7059: (RR, JR, GR) => {
    var yR = GR(6704),
      tR = GR(7061),
      uR = GR(7090),
      ZR = GR(6726),
      qR = GR(7095),
      iR = GR(6750);
    RR.exports = function(RR, JR, GR) {
      var fR = -1,
        VR = tR,
        KR = RR.length,
        wR = !0,
        rR = [],
        eR = rR;
      if (GR) wR = !1, VR = uR;
      else if (KR >= 200) {
        var aR = JR ? null : qR(RR);
        if (aR) return iR(aR);
        wR = !1, VR = ZR, eR = new yR
      } else eR = JR ? [] : rR;
      RR: for (; ++fR < KR;) {
        var LR = RR[fR],
          nR = JR ? JR(LR) : LR;
        if (LR = GR || 0 !== LR ? LR : 0, wR && nR === nR) {
          for (var UR = eR.length; UR--;)
            if (eR[UR] === nR) continue RR;
          JR && eR.push(nR), rR.push(LR)
        } else VR(eR, nR, GR) || (eR !== rR && eR.push(nR), rR.push(LR))
      }
      return rR
    }
  },
  6726: RR => {
    RR.exports = function(RR, JR) {
      return RR.has(JR)
    }
  },
  6274: (RR, JR, GR) => {
    var yR = GR(6241),
      tR = GR(6282),
      uR = GR(6289),
      ZR = GR(6489);
    RR.exports = function(RR, JR) {
      return yR(RR) ? RR : tR(RR, JR) ? [RR] : uR(ZR(RR))
    }
  },
  7123: (RR, JR, GR) => {
    var yR = GR(7132);
    RR.exports = function(RR, JR, GR) {
      var tR = RR.length;
      return GR = void 0 === GR ? tR : GR, !JR && GR >= tR ? RR : yR(RR, JR, GR)
    }
  },
  6977: (RR, JR, GR) => {
    var yR = GR(6205);
    RR.exports = function(RR, JR) {
      if (RR !== JR) {
        var GR = void 0 !== RR,
          tR = null === RR,
          uR = RR === RR,
          ZR = yR(RR),
          qR = void 0 !== JR,
          iR = null === JR,
          fR = JR === JR,
          VR = yR(JR);
        if (!iR && !VR && !ZR && RR > JR || ZR && qR && fR && !iR && !VR || tR && qR && fR || !GR && fR || !uR) return 1;
        if (!tR && !ZR && !VR && RR < JR || VR && GR && uR && !tR && !ZR || iR && GR && uR || !qR && uR || !fR) return -1
      }
      return 0
    }
  },
  6975: (RR, JR, GR) => {
    var yR = GR(6977);
    RR.exports = function(RR, JR, GR) {
      for (var tR = -1, uR = RR.criteria, ZR = JR.criteria, qR = uR.length, iR = GR.length; ++tR < qR;) {
        var fR = yR(uR[tR], ZR[tR]);
        if (fR) return tR >= iR ? fR : fR * ("desc" == GR[tR] ? -1 : 1)
      }
      return RR.index - JR.index
    }
  },
  6371: (RR, JR, GR) => {
    var yR = GR(6174)["__core-js_shared__"];
    RR.exports = yR
  },
  6964: (RR, JR, GR) => {
    var yR = GR(6577);
    RR.exports = function(RR, JR) {
      return function(GR, tR) {
        if (null == GR) return GR;
        if (!yR(GR)) return RR(GR, tR);
        for (var uR = GR.length, ZR = JR ? uR : -1, qR = Object(GR);
          (JR ? ZR-- : ++ZR < uR) && !1 !== tR(qR[ZR], ZR, qR););
        return GR
      }
    }
  },
  6962: RR => {
    RR.exports = function(RR) {
      return function(JR, GR, yR) {
        for (var tR = -1, uR = Object(JR), ZR = yR(JR), qR = ZR.length; qR--;) {
          var iR = ZR[RR ? qR : ++tR];
          if (!1 === GR(uR[iR], iR, uR)) break
        }
        return JR
      }
    }
  },
  7115: (RR, JR, GR) => {
    var yR = GR(7123),
      tR = GR(7135),
      uR = GR(7144),
      ZR = GR(6489);
    RR.exports = function(RR) {
      return function(JR) {
        JR = ZR(JR);
        var GR = tR(JR) ? uR(JR) : void 0,
          qR = GR ? GR[0] : JR.charAt(0),
          iR = GR ? yR(GR, 1).join("") : JR.slice(1);
        return qR[RR]() + iR
      }
    }
  },
  7451: (RR, JR, GR) => {
    var yR = GR(6643),
      tR = GR(6577),
      uR = GR(6798);
    RR.exports = function(RR) {
      return function(JR, GR, ZR) {
        var qR = Object(JR);
        if (!tR(JR)) {
          var iR = yR(GR, 3);
          JR = uR(JR), GR = function(RR) {
            return iR(qR[RR], RR, qR)
          }
        }
        var fR = RR(JR, GR, ZR);
        return fR > -1 ? qR[iR ? JR[fR] : fR] : void 0
      }
    }
  },
  6563: (RR, JR, GR) => {
    var yR = GR(6568),
      tR = GR(6574),
      uR = GR(6596);
    RR.exports = function(RR) {
      return function(JR, GR, ZR) {
        return ZR && "number" != typeof ZR && tR(JR, GR, ZR) && (GR = ZR = void 0), JR = uR(JR), void 0 === GR ? (GR = JR, JR = 0) : GR = uR(GR), ZR = void 0 === ZR ? JR < GR ? 1 : -1 : uR(ZR), yR(JR, GR, ZR, RR)
      }
    }
  },
  7095: (RR, JR, GR) => {
    var yR = GR(6895),
      tR = GR(7100),
      uR = GR(6750),
      ZR = yR && 1 / uR(new yR([, -0]))[1] == 1 / 0 ? function(RR) {
        return new yR(RR)
      } : tR;
    RR.exports = ZR
  },
  7013: (RR, JR, GR) => {
    var yR = GR(6346),
      tR = function() {
        try {
          var RR = yR(Object, "defineProperty");
          return RR({}, "", {}), RR
        } catch (JR) {}
      }();
    RR.exports = tR
  },
  6698: (RR, JR, GR) => {
    var yR = GR(6704),
      tR = GR(6724),
      uR = GR(6726);
    RR.exports = function(RR, JR, GR, ZR, qR, iR) {
      var fR = 1 & GR,
        VR = RR.length,
        KR = JR.length;
      if (VR != KR && !(fR && KR > VR)) return !1;
      var wR = iR.get(RR),
        rR = iR.get(JR);
      if (wR && rR) return wR == JR && rR == RR;
      var eR = -1,
        aR = !0,
        LR = 2 & GR ? new yR : void 0;
      for (iR.set(RR, JR), iR.set(JR, RR); ++eR < VR;) {
        var nR = RR[eR],
          UR = JR[eR];
        if (ZR) var WR = fR ? ZR(UR, nR, eR, JR, RR, iR) : ZR(nR, UR, eR, RR, JR, iR);
        if (void 0 !== WR) {
          if (WR) continue;
          aR = !1;
          break
        }
        if (LR) {
          if (!tR(JR, (function(RR, JR) {
              if (!uR(LR, JR) && (nR === RR || qR(nR, RR, GR, ZR, iR))) return LR.push(JR)
            }))) {
            aR = !1;
            break
          }
        } else if (nR !== UR && !qR(nR, UR, GR, ZR, iR)) {
          aR = !1;
          break
        }
      }
      return iR.delete(RR), iR.delete(JR), aR
    }
  },
  6733: (RR, JR, GR) => {
    var yR = GR(6211),
      tR = GR(6741),
      uR = GR(6431),
      ZR = GR(6698),
      qR = GR(6745),
      iR = GR(6750),
      fR = yR ? yR.prototype : void 0,
      VR = fR ? fR.valueOf : void 0;
    RR.exports = function(RR, JR, GR, yR, fR, KR, wR) {
      switch (GR) {
        case "[object DataView]":
          if (RR.byteLength != JR.byteLength || RR.byteOffset != JR.byteOffset) return !1;
          RR = RR.buffer, JR = JR.buffer;
        case "[object ArrayBuffer]":
          return !(RR.byteLength != JR.byteLength || !KR(new tR(RR), new tR(JR)));
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
          return uR(+RR, +JR);
        case "[object Error]":
          return RR.name == JR.name && RR.message == JR.message;
        case "[object RegExp]":
        case "[object String]":
          return RR == JR + "";
        case "[object Map]":
          var rR = qR;
        case "[object Set]":
          var eR = 1 & yR;
          if (rR || (rR = iR), RR.size != JR.size && !eR) return !1;
          var aR = wR.get(RR);
          if (aR) return aR == JR;
          yR |= 2, wR.set(RR, JR);
          var LR = ZR(rR(RR), rR(JR), yR, fR, KR, wR);
          return wR.delete(RR), LR;
        case "[object Symbol]":
          if (VR) return VR.call(RR) == VR.call(JR)
      }
      return !1
    }
  },
  6757: (RR, JR, GR) => {
    var yR = GR(6764),
      tR = Object.prototype.hasOwnProperty;
    RR.exports = function(RR, JR, GR, uR, ZR, qR) {
      var iR = 1 & GR,
        fR = yR(RR),
        VR = fR.length;
      if (VR != yR(JR).length && !iR) return !1;
      for (var KR = VR; KR--;) {
        var wR = fR[KR];
        if (!(iR ? wR in JR : tR.call(JR, wR))) return !1
      }
      var rR = qR.get(RR),
        eR = qR.get(JR);
      if (rR && eR) return rR == JR && eR == RR;
      var aR = !0;
      qR.set(RR, JR), qR.set(JR, RR);
      for (var LR = iR; ++KR < VR;) {
        var nR = RR[wR = fR[KR]],
          UR = JR[wR];
        if (uR) var WR = iR ? uR(UR, nR, wR, JR, RR, qR) : uR(nR, UR, wR, RR, JR, qR);
        if (!(void 0 === WR ? nR === UR || ZR(nR, UR, GR, uR, qR) : WR)) {
          aR = !1;
          break
        }
        LR || (LR = "constructor" == wR)
      }
      if (aR && !LR) {
        var AR = RR.constructor,
          CR = JR.constructor;
        AR == CR || !("constructor" in RR) || !("constructor" in JR) || "function" == typeof AR && AR instanceof AR && "function" == typeof CR && CR instanceof CR || (aR = !1)
      }
      return qR.delete(RR), qR.delete(JR), aR
    }
  },
  6178: (RR, JR, GR) => {
    var yR = "object" == typeof GR.g && GR.g && GR.g.Object === Object && GR.g;
    RR.exports = yR
  },
  6764: (RR, JR, GR) => {
    var yR = GR(6770),
      tR = GR(6779),
      uR = GR(6798);
    RR.exports = function(RR) {
      return yR(RR, uR, tR)
    }
  },
  6457: (RR, JR, GR) => {
    var yR = GR(6466);
    RR.exports = function(RR, JR) {
      var GR = RR.__data__;
      return yR(JR) ? GR["string" == typeof JR ? "string" : "hash"] : GR.map
    }
  },
  6900: (RR, JR, GR) => {
    var yR = GR(6902),
      tR = GR(6798);
    RR.exports = function(RR) {
      for (var JR = tR(RR), GR = JR.length; GR--;) {
        var uR = JR[GR],
          ZR = RR[uR];
        JR[GR] = [uR, ZR, yR(ZR)]
      }
      return JR
    }
  },
  6346: (RR, JR, GR) => {
    var yR = GR(6350),
      tR = GR(6380);
    RR.exports = function(RR, JR) {
      var GR = tR(RR, JR);
      return yR(GR) ? GR : void 0
    }
  },
  7393: (RR, JR, GR) => {
    var yR = GR(6872)(Object.getPrototypeOf, Object);
    RR.exports = yR
  },
  6217: (RR, JR, GR) => {
    var yR = GR(6211),
      tR = Object.prototype,
      uR = tR.hasOwnProperty,
      ZR = tR.toString,
      qR = yR ? yR.toStringTag : void 0;
    RR.exports = function(RR) {
      var JR = uR.call(RR, qR),
        GR = RR[qR];
      try {
        RR[qR] = void 0;
        var yR = !0
      } catch (iR) {}
      var tR = ZR.call(RR);
      return yR && (JR ? RR[qR] = GR : delete RR[qR]), tR
    }
  },
  6779: (RR, JR, GR) => {
    var yR = GR(6782),
      tR = GR(6790),
      uR = Object.prototype.propertyIsEnumerable,
      ZR = Object.getOwnPropertySymbols,
      qR = ZR ? function(RR) {
        return null == RR ? [] : (RR = Object(RR), yR(ZR(RR), (function(JR) {
          return uR.call(RR, JR)
        })))
      } : tR;
    RR.exports = qR
  },
  6879: (RR, JR, GR) => {
    var yR = GR(6887),
      tR = GR(6444),
      uR = GR(6890),
      ZR = GR(6895),
      qR = GR(6897),
      iR = GR(6209),
      fR = GR(6373),
      VR = "[object Map]",
      KR = "[object Promise]",
      wR = "[object Set]",
      rR = "[object WeakMap]",
      eR = "[object DataView]",
      aR = fR(yR),
      LR = fR(tR),
      nR = fR(uR),
      UR = fR(ZR),
      WR = fR(qR),
      AR = iR;
    (yR && AR(new yR(new ArrayBuffer(1))) != eR || tR && AR(new tR) != VR || uR && AR(uR.resolve()) != KR || ZR && AR(new ZR) != wR || qR && AR(new qR) != rR) && (AR = function(RR) {
      var JR = iR(RR),
        GR = "[object Object]" == JR ? RR.constructor : void 0,
        yR = GR ? fR(GR) : "";
      if (yR) switch (yR) {
        case aR:
          return eR;
        case LR:
          return VR;
        case nR:
          return KR;
        case UR:
          return wR;
        case WR:
          return rR
      }
      return JR
    }), RR.exports = AR
  },
  6380: RR => {
    RR.exports = function(RR, JR) {
      return null == RR ? void 0 : RR[JR]
    }
  },
  6927: (RR, JR, GR) => {
    var yR = GR(6274),
      tR = GR(6624),
      uR = GR(6241),
      ZR = GR(6592),
      qR = GR(6586),
      iR = GR(6514);
    RR.exports = function(RR, JR, GR) {
      for (var fR = -1, VR = (JR = yR(JR, RR)).length, KR = !1; ++fR < VR;) {
        var wR = iR(JR[fR]);
        if (!(KR = null != RR && GR(RR, wR))) break;
        RR = RR[wR]
      }
      return KR || ++fR != VR ? KR : !!(VR = null == RR ? 0 : RR.length) && qR(VR) && ZR(wR, VR) && (uR(RR) || tR(RR))
    }
  },
  7135: RR => {
    var JR = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    RR.exports = function(RR) {
      return JR.test(RR)
    }
  },
  6331: (RR, JR, GR) => {
    var yR = GR(6338);
    RR.exports = function() {
      this.__data__ = yR ? yR(null) : {}, this.size = 0
    }
  },
  6387: RR => {
    RR.exports = function(RR) {
      var JR = this.has(RR) && delete this.__data__[RR];
      return this.size -= JR ? 1 : 0, JR
    }
  },
  6396: (RR, JR, GR) => {
    var yR = GR(6338),
      tR = Object.prototype.hasOwnProperty;
    RR.exports = function(RR) {
      var JR = this.__data__;
      if (yR) {
        var GR = JR[RR];
        return "__lodash_hash_undefined__" === GR ? void 0 : GR
      }
      return tR.call(JR, RR) ? JR[RR] : void 0
    }
  },
  6403: (RR, JR, GR) => {
    var yR = GR(6338),
      tR = Object.prototype.hasOwnProperty;
    RR.exports = function(RR) {
      var JR = this.__data__;
      return yR ? void 0 !== JR[RR] : tR.call(JR, RR)
    }
  },
  6405: (RR, JR, GR) => {
    var yR = GR(6338);
    RR.exports = function(RR, JR) {
      var GR = this.__data__;
      return this.size += this.has(RR) ? 0 : 1, GR[RR] = yR && void 0 === JR ? "__lodash_hash_undefined__" : JR, this
    }
  },
  6622: (RR, JR, GR) => {
    var yR = GR(6211),
      tR = GR(6624),
      uR = GR(6241),
      ZR = yR ? yR.isConcatSpreadable : void 0;
    RR.exports = function(RR) {
      return uR(RR) || tR(RR) || !!(ZR && RR && RR[ZR])
    }
  },
  6592: RR => {
    var JR = /^(?:0|[1-9]\d*)$/;
    RR.exports = function(RR, GR) {
      var yR = typeof RR;
      return !!(GR = null == GR ? 9007199254740991 : GR) && ("number" == yR || "symbol" != yR && JR.test(RR)) && RR > -1 && RR % 1 == 0 && RR < GR
    }
  },
  6574: (RR, JR, GR) => {
    var yR = GR(6431),
      tR = GR(6577),
      uR = GR(6592),
      ZR = GR(6161);
    RR.exports = function(RR, JR, GR) {
      if (!ZR(GR)) return !1;
      var qR = typeof JR;
      return !!("number" == qR ? tR(GR) && uR(JR, GR.length) : "string" == qR && JR in GR) && yR(GR[JR], RR)
    }
  },
  6282: (RR, JR, GR) => {
    var yR = GR(6241),
      tR = GR(6205),
      uR = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      ZR = /^\w*$/;
    RR.exports = function(RR, JR) {
      if (yR(RR)) return !1;
      var GR = typeof RR;
      return !("number" != GR && "symbol" != GR && "boolean" != GR && null != RR && !tR(RR)) || (ZR.test(RR) || !uR.test(RR) || null != JR && RR in Object(JR))
    }
  },
  6466: RR => {
    RR.exports = function(RR) {
      var JR = typeof RR;
      return "string" == JR || "number" == JR || "symbol" == JR || "boolean" == JR ? "__proto__" !== RR : null === RR
    }
  },
  6362: (RR, JR, GR) => {
    var yR = GR(6371),
      tR = function() {
        var RR = /[^.]+$/.exec(yR && yR.keys && yR.keys.IE_PROTO || "");
        return RR ? "Symbol(src)_1." + RR : ""
      }();
    RR.exports = function(RR) {
      return !!tR && tR in RR
    }
  },
  6860: RR => {
    var JR = Object.prototype;
    RR.exports = function(RR) {
      var GR = RR && RR.constructor;
      return RR === ("function" == typeof GR && GR.prototype || JR)
    }
  },
  6902: (RR, JR, GR) => {
    var yR = GR(6161);
    RR.exports = function(RR) {
      return RR === RR && !yR(RR)
    }
  },
  6417: RR => {
    RR.exports = function() {
      this.__data__ = [], this.size = 0
    }
  },
  6421: (RR, JR, GR) => {
    var yR = GR(6423),
      tR = Array.prototype.splice;
    RR.exports = function(RR) {
      var JR = this.__data__,
        GR = yR(JR, RR);
      return !(GR < 0) && (GR == JR.length - 1 ? JR.pop() : tR.call(JR, GR, 1), --this.size, !0)
    }
  },
  6433: (RR, JR, GR) => {
    var yR = GR(6423);
    RR.exports = function(RR) {
      var JR = this.__data__,
        GR = yR(JR, RR);
      return GR < 0 ? void 0 : JR[GR][1]
    }
  },
  6436: (RR, JR, GR) => {
    var yR = GR(6423);
    RR.exports = function(RR) {
      return yR(this.__data__, RR) > -1
    }
  },
  6439: (RR, JR, GR) => {
    var yR = GR(6423);
    RR.exports = function(RR, JR) {
      var GR = this.__data__,
        tR = yR(GR, RR);
      return tR < 0 ? (++this.size, GR.push([RR, JR])) : GR[tR][1] = JR, this
    }
  },
  6313: (RR, JR, GR) => {
    var yR = GR(6322),
      tR = GR(6408),
      uR = GR(6444);
    RR.exports = function() {
      this.size = 0, this.__data__ = {
        hash: new yR,
        map: new(uR || tR),
        string: new yR
      }
    }
  },
  6451: (RR, JR, GR) => {
    var yR = GR(6457);
    RR.exports = function(RR) {
      var JR = yR(this, RR).delete(RR);
      return this.size -= JR ? 1 : 0, JR
    }
  },
  6473: (RR, JR, GR) => {
    var yR = GR(6457);
    RR.exports = function(RR) {
      return yR(this, RR).get(RR)
    }
  },
  6477: (RR, JR, GR) => {
    var yR = GR(6457);
    RR.exports = function(RR) {
      return yR(this, RR).has(RR)
    }
  },
  6484: (RR, JR, GR) => {
    var yR = GR(6457);
    RR.exports = function(RR, JR) {
      var GR = yR(this, RR),
        tR = GR.size;
      return GR.set(RR, JR), this.size += GR.size == tR ? 0 : 1, this
    }
  },
  6745: RR => {
    RR.exports = function(RR) {
      var JR = -1,
        GR = Array(RR.size);
      return RR.forEach((function(RR, yR) {
        GR[++JR] = [yR, RR]
      })), GR
    }
  },
  6905: RR => {
    RR.exports = function(RR, JR) {
      return function(GR) {
        return null != GR && (GR[RR] === JR && (void 0 !== JR || RR in Object(GR)))
      }
    }
  },
  6297: (RR, JR, GR) => {
    var yR = GR(6301);
    RR.exports = function(RR) {
      var JR = yR(RR, (function(RR) {
          return 500 === GR.size && GR.clear(), RR
        })),
        GR = JR.cache;
      return JR
    }
  },
  6338: (RR, JR, GR) => {
    var yR = GR(6346)(Object, "create");
    RR.exports = yR
  },
  6863: (RR, JR, GR) => {
    var yR = GR(6872)(Object.keys, Object);
    RR.exports = yR
  },
  6849: (RR, JR, GR) => {
    RR = GR.nmd(RR);
    var yR = GR(6178),
      tR = JR && !JR.nodeType && JR,
      uR = tR && RR && !RR.nodeType && RR,
      ZR = uR && uR.exports === tR && yR.process,
      qR = function() {
        try {
          var RR = uR && uR.require && uR.require("util").types;
          return RR || ZR && ZR.binding && ZR.binding("util")
        } catch (JR) {}
      }();
    RR.exports = qR
  },
  6225: RR => {
    var JR = Object.prototype.toString;
    RR.exports = function(RR) {
      return JR.call(RR)
    }
  },
  6872: RR => {
    RR.exports = function(RR, JR) {
      return function(GR) {
        return RR(JR(GR))
      }
    }
  },
  6989: (RR, JR, GR) => {
    var yR = GR(6992),
      tR = Math.max;
    RR.exports = function(RR, JR, GR) {
      return JR = tR(void 0 === JR ? RR.length - 1 : JR, 0),
        function() {
          for (var uR = arguments, ZR = -1, qR = tR(uR.length - JR, 0), iR = Array(qR); ++ZR < qR;) iR[ZR] = uR[JR + ZR];
          ZR = -1;
          for (var fR = Array(JR + 1); ++ZR < JR;) fR[ZR] = uR[ZR];
          return fR[JR] = GR(iR), yR(RR, this, fR)
        }
    }
  },
  6174: (RR, JR, GR) => {
    var yR = GR(6178),
      tR = "object" == typeof self && self && self.Object === Object && self,
      uR = yR || tR || Function("return this")();
    RR.exports = uR
  },
  6710: RR => {
    RR.exports = function(RR) {
      return this.__data__.set(RR, "__lodash_hash_undefined__"), this
    }
  },
  6719: RR => {
    RR.exports = function(RR) {
      return this.__data__.has(RR)
    }
  },
  6750: RR => {
    RR.exports = function(RR) {
      var JR = -1,
        GR = Array(RR.size);
      return RR.forEach((function(RR) {
        GR[++JR] = RR
      })), GR
    }
  },
  6995: (RR, JR, GR) => {
    var yR = GR(7003),
      tR = GR(7018)(yR);
    RR.exports = tR
  },
  7018: RR => {
    var JR = Date.now;
    RR.exports = function(RR) {
      var GR = 0,
        yR = 0;
      return function() {
        var tR = JR(),
          uR = 16 - (tR - yR);
        if (yR = tR, uR > 0) {
          if (++GR >= 800) return arguments[0]
        } else GR = 0;
        return RR.apply(void 0, arguments)
      }
    }
  },
  6661: (RR, JR, GR) => {
    var yR = GR(6408);
    RR.exports = function() {
      this.__data__ = new yR, this.size = 0
    }
  },
  6666: RR => {
    RR.exports = function(RR) {
      var JR = this.__data__,
        GR = JR.delete(RR);
      return this.size = JR.size, GR
    }
  },
  6669: RR => {
    RR.exports = function(RR) {
      return this.__data__.get(RR)
    }
  },
  6672: RR => {
    RR.exports = function(RR) {
      return this.__data__.has(RR)
    }
  },
  6681: (RR, JR, GR) => {
    var yR = GR(6408),
      tR = GR(6444),
      uR = GR(6305);
    RR.exports = function(RR, JR) {
      var GR = this.__data__;
      if (GR instanceof yR) {
        var ZR = GR.__data__;
        if (!tR || ZR.length < 199) return ZR.push([RR, JR]), this.size = ++GR.size, this;
        GR = this.__data__ = new uR(ZR)
      }
      return GR.set(RR, JR), this.size = GR.size, this
    }
  },
  7082: RR => {
    RR.exports = function(RR, JR, GR) {
      for (var yR = GR - 1, tR = RR.length; ++yR < tR;)
        if (RR[yR] === JR) return yR;
      return -1
    }
  },
  7144: (RR, JR, GR) => {
    var yR = GR(7149),
      tR = GR(7135),
      uR = GR(7151);
    RR.exports = function(RR) {
      return tR(RR) ? uR(RR) : yR(RR)
    }
  },
  6289: (RR, JR, GR) => {
    var yR = GR(6297),
      tR = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      uR = /\\(\\)?/g,
      ZR = yR((function(RR) {
        var JR = [];
        return 46 === RR.charCodeAt(0) && JR.push(""), RR.replace(tR, (function(RR, GR, yR, tR) {
          JR.push(yR ? tR.replace(uR, "$1") : GR || RR)
        })), JR
      }));
    RR.exports = ZR
  },
  6514: (RR, JR, GR) => {
    var yR = GR(6205);
    RR.exports = function(RR) {
      if ("string" == typeof RR || yR(RR)) return RR;
      var JR = RR + "";
      return "0" == JR && 1 / RR == -1 / 0 ? "-0" : JR
    }
  },
  6373: RR => {
    var JR = Function.prototype.toString;
    RR.exports = function(RR) {
      if (null != RR) {
        try {
          return JR.call(RR)
        } catch (GR) {}
        try {
          return RR + ""
        } catch (GR) {}
      }
      return ""
    }
  },
  6197: RR => {
    var JR = /\s/;
    RR.exports = function(RR) {
      for (var GR = RR.length; GR-- && JR.test(RR.charAt(GR)););
      return GR
    }
  },
  7151: RR => {
    var JR = "\\ud800-\\udfff",
      GR = "[" + JR + "]",
      yR = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
      tR = "\\ud83c[\\udffb-\\udfff]",
      uR = "[^" + JR + "]",
      ZR = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      qR = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      iR = "(?:" + yR + "|" + tR + ")" + "?",
      fR = "[\\ufe0e\\ufe0f]?",
      VR = fR + iR + ("(?:\\u200d(?:" + [uR, ZR, qR].join("|") + ")" + fR + iR + ")*"),
      KR = "(?:" + [uR + yR + "?", yR, ZR, qR, GR].join("|") + ")",
      wR = RegExp(tR + "(?=" + tR + ")|" + KR + VR, "g");
    RR.exports = function(RR) {
      return RR.match(wR) || []
    }
  },
  7009: RR => {
    RR.exports = function(RR) {
      return function() {
        return RR
      }
    }
  },
  6157: (RR, JR, GR) => {
    var yR = GR(6161),
      tR = GR(6165),
      uR = GR(6187),
      ZR = Math.max,
      qR = Math.min;
    RR.exports = function(RR, JR, GR) {
      var iR, fR, VR, KR, wR, rR, eR = 0,
        aR = !1,
        LR = !1,
        nR = !0;
      if ("function" != typeof RR) throw new TypeError("Expected a function");

      function UR(JR) {
        var GR = iR,
          yR = fR;
        return iR = fR = void 0, eR = JR, KR = RR.apply(yR, GR)
      }

      function WR(RR) {
        var GR = RR - rR;
        return void 0 === rR || GR >= JR || GR < 0 || LR && RR - eR >= VR
      }

      function AR() {
        var RR = tR();
        if (WR(RR)) return CR(RR);
        wR = setTimeout(AR, function(RR) {
          var GR = JR - (RR - rR);
          return LR ? qR(GR, VR - (RR - eR)) : GR
        }(RR))
      }

      function CR(RR) {
        return wR = void 0, nR && iR ? UR(RR) : (iR = fR = void 0, KR)
      }

      function XR() {
        var RR = tR(),
          GR = WR(RR);
        if (iR = arguments, fR = this, rR = RR, GR) {
          if (void 0 === wR) return function(RR) {
            return eR = RR, wR = setTimeout(AR, JR), aR ? UR(RR) : KR
          }(rR);
          if (LR) return clearTimeout(wR), wR = setTimeout(AR, JR), UR(rR)
        }
        return void 0 === wR && (wR = setTimeout(AR, JR)), KR
      }
      return JR = uR(JR) || 0, yR(GR) && (aR = !!GR.leading, VR = (LR = "maxWait" in GR) ? ZR(uR(GR.maxWait) || 0, JR) : VR, nR = "trailing" in GR ? !!GR.trailing : nR), XR.cancel = function() {
        void 0 !== wR && clearTimeout(wR), eR = 0, iR = rR = fR = wR = void 0
      }, XR.flush = function() {
        return void 0 === wR ? KR : CR(tR())
      }, XR
    }
  },
  6431: RR => {
    RR.exports = function(RR, JR) {
      return RR === JR || RR !== RR && JR !== JR
    }
  },
  7339: (RR, JR, GR) => {
    var yR = GR(7348),
      tR = GR(7351),
      uR = GR(6643),
      ZR = GR(6241),
      qR = GR(6574);
    RR.exports = function(RR, JR, GR) {
      var iR = ZR(RR) ? yR : tR;
      return GR && qR(RR, JR, GR) && (JR = void 0), iR(RR, uR(JR, 3))
    }
  },
  7443: (RR, JR, GR) => {
    var yR = GR(7451)(GR(7457));
    RR.exports = yR
  },
  7457: (RR, JR, GR) => {
    var yR = GR(7071),
      tR = GR(6643),
      uR = GR(7464),
      ZR = Math.max;
    RR.exports = function(RR, JR, GR) {
      var qR = null == RR ? 0 : RR.length;
      if (!qR) return -1;
      var iR = null == GR ? 0 : uR(GR);
      return iR < 0 && (iR = ZR(qR + iR, 0)), yR(RR, tR(JR, 3), iR)
    }
  },
  7254: (RR, JR, GR) => {
    var yR = GR(6604),
      tR = GR(7260);
    RR.exports = function(RR, JR) {
      return yR(tR(RR, JR), 1)
    }
  },
  6262: (RR, JR, GR) => {
    var yR = GR(6271);
    RR.exports = function(RR, JR, GR) {
      var tR = null == RR ? void 0 : yR(RR, JR);
      return void 0 === tR ? GR : tR
    }
  },
  6912: (RR, JR, GR) => {
    var yR = GR(6920),
      tR = GR(6927);
    RR.exports = function(RR, JR) {
      return null != RR && tR(RR, JR, yR)
    }
  },
  6932: RR => {
    RR.exports = function(RR) {
      return RR
    }
  },
  6624: (RR, JR, GR) => {
    var yR = GR(6629),
      tR = GR(6230),
      uR = Object.prototype,
      ZR = uR.hasOwnProperty,
      qR = uR.propertyIsEnumerable,
      iR = yR(function() {
        return arguments
      }()) ? yR : function(RR) {
        return tR(RR) && ZR.call(RR, "callee") && !qR.call(RR, "callee")
      };
    RR.exports = iR
  },
  6241: RR => {
    var JR = Array.isArray;
    RR.exports = JR
  },
  6577: (RR, JR, GR) => {
    var yR = GR(6357),
      tR = GR(6586);
    RR.exports = function(RR) {
      return null != RR && tR(RR.length) && !yR(RR)
    }
  },
  7398: (RR, JR, GR) => {
    var yR = GR(6209),
      tR = GR(6230);
    RR.exports = function(RR) {
      return !0 === RR || !1 === RR || tR(RR) && "[object Boolean]" == yR(RR)
    }
  },
  6819: (RR, JR, GR) => {
    RR = GR.nmd(RR);
    var yR = GR(6174),
      tR = GR(6822),
      uR = JR && !JR.nodeType && JR,
      ZR = uR && RR && !RR.nodeType && RR,
      qR = ZR && ZR.exports === uR ? yR.GK : void 0,
      iR = (qR ? qR.isBuffer : void 0) || tR;
    RR.exports = iR
  },
  7269: (RR, JR, GR) => {
    var yR = GR(6686);
    RR.exports = function(RR, JR) {
      return yR(RR, JR)
    }
  },
  6357: (RR, JR, GR) => {
    var yR = GR(6209),
      tR = GR(6161);
    RR.exports = function(RR) {
      if (!tR(RR)) return !1;
      var JR = yR(RR);
      return "[object Function]" == JR || "[object GeneratorFunction]" == JR || "[object AsyncFunction]" == JR || "[object Proxy]" == JR
    }
  },
  6586: RR => {
    RR.exports = function(RR) {
      return "number" == typeof RR && RR > -1 && RR % 1 == 0 && RR <= 9007199254740991
    }
  },
  6244: (RR, JR, GR) => {
    var yR = GR(6253);
    RR.exports = function(RR) {
      return yR(RR) && RR != +RR
    }
  },
  6516: RR => {
    RR.exports = function(RR) {
      return null == RR
    }
  },
  6253: (RR, JR, GR) => {
    var yR = GR(6209),
      tR = GR(6230);
    RR.exports = function(RR) {
      return "number" == typeof RR || tR(RR) && "[object Number]" == yR(RR)
    }
  },
  6161: RR => {
    RR.exports = function(RR) {
      var JR = typeof RR;
      return null != RR && ("object" == JR || "function" == JR)
    }
  },
  6230: RR => {
    RR.exports = function(RR) {
      return null != RR && "object" == typeof RR
    }
  },
  7384: (RR, JR, GR) => {
    var yR = GR(6209),
      tR = GR(7393),
      uR = GR(6230),
      ZR = Function.prototype,
      qR = Object.prototype,
      iR = ZR.toString,
      fR = qR.hasOwnProperty,
      VR = iR.call(Object);
    RR.exports = function(RR) {
      if (!uR(RR) || "[object Object]" != yR(RR)) return !1;
      var JR = tR(RR);
      if (null === JR) return !0;
      var GR = fR.call(JR, "constructor") && JR.constructor;
      return "function" == typeof GR && GR instanceof GR && iR.call(GR) == VR
    }
  },
  6237: (RR, JR, GR) => {
    var yR = GR(6209),
      tR = GR(6241),
      uR = GR(6230);
    RR.exports = function(RR) {
      return "string" == typeof RR || !tR(RR) && uR(RR) && "[object String]" == yR(RR)
    }
  },
  6205: (RR, JR, GR) => {
    var yR = GR(6209),
      tR = GR(6230);
    RR.exports = function(RR) {
      return "symbol" == typeof RR || tR(RR) && "[object Symbol]" == yR(RR)
    }
  },
  6830: (RR, JR, GR) => {
    var yR = GR(6835),
      tR = GR(6843),
      uR = GR(6849),
      ZR = uR && uR.isTypedArray,
      qR = ZR ? tR(ZR) : yR;
    RR.exports = qR
  },
  6798: (RR, JR, GR) => {
    var yR = GR(6807),
      tR = GR(6856),
      uR = GR(6577);
    RR.exports = function(RR) {
      return uR(RR) ? yR(RR) : tR(RR)
    }
  },
  7373: RR => {
    RR.exports = function(RR) {
      var JR = null == RR ? 0 : RR.length;
      return JR ? RR[JR - 1] : void 0
    }
  },
  7260: (RR, JR, GR) => {
    var yR = GR(6507),
      tR = GR(6643),
      uR = GR(6941),
      ZR = GR(6241);
    RR.exports = function(RR, JR) {
      return (ZR(RR) ? yR : uR)(RR, tR(JR, 3))
    }
  },
  7326: (RR, JR, GR) => {
    var yR = GR(7335),
      tR = GR(6953),
      uR = GR(6643);
    RR.exports = function(RR, JR) {
      var GR = {};
      return JR = uR(JR, 3), tR(RR, (function(RR, tR, uR) {
        yR(GR, tR, JR(RR, tR, uR))
      })), GR
    }
  },
  7219: (RR, JR, GR) => {
    var yR = GR(7228),
      tR = GR(7236),
      uR = GR(6932);
    RR.exports = function(RR) {
      return RR && RR.length ? yR(RR, uR, tR) : void 0
    }
  },
  6301: (RR, JR, GR) => {
    var yR = GR(6305);

    function tR(RR, JR) {
      if ("function" != typeof RR || null != JR && "function" != typeof JR) throw new TypeError("Expected a function");
      var GR = function() {
        var yR = arguments,
          tR = JR ? JR.apply(this, yR) : yR[0],
          uR = GR.cache;
        if (uR.has(tR)) return uR.get(tR);
        var ZR = RR.apply(this, yR);
        return GR.cache = uR.set(tR, ZR) || uR, ZR
      };
      return GR.cache = new(tR.Cache || yR), GR
    }
    tR.Cache = yR, RR.exports = tR
  },
  7243: (RR, JR, GR) => {
    var yR = GR(7228),
      tR = GR(7252),
      uR = GR(6932);
    RR.exports = function(RR) {
      return RR && RR.length ? yR(RR, uR, tR) : void 0
    }
  },
  7100: RR => {
    RR.exports = function() {}
  },
  6165: (RR, JR, GR) => {
    var yR = GR(6174);
    RR.exports = function() {
      return yR.Date.now()
    }
  },
  6934: (RR, JR, GR) => {
    var yR = GR(6936),
      tR = GR(6938),
      uR = GR(6282),
      ZR = GR(6514);
    RR.exports = function(RR) {
      return uR(RR) ? yR(ZR(RR)) : tR(RR)
    }
  },
  6560: (RR, JR, GR) => {
    var yR = GR(6563)();
    RR.exports = yR
  },
  7419: (RR, JR, GR) => {
    var yR = GR(6724),
      tR = GR(6643),
      uR = GR(7428),
      ZR = GR(6241),
      qR = GR(6574);
    RR.exports = function(RR, JR, GR) {
      var iR = ZR(RR) ? yR : uR;
      return GR && qR(RR, JR, GR) && (JR = void 0), iR(RR, tR(JR, 3))
    }
  },
  6600: (RR, JR, GR) => {
    var yR = GR(6604),
      tR = GR(6636),
      uR = GR(6982),
      ZR = GR(6574),
      qR = uR((function(RR, JR) {
        if (null == RR) return [];
        var GR = JR.length;
        return GR > 1 && ZR(RR, JR[0], JR[1]) ? JR = [] : GR > 2 && ZR(JR[0], JR[1], JR[2]) && (JR = [JR[0]]), tR(RR, yR(JR, 1), [])
      }));
    RR.exports = qR
  },
  6790: RR => {
    RR.exports = function() {
      return []
    }
  },
  6822: RR => {
    RR.exports = function() {
      return !1
    }
  },
  6149: (RR, JR, GR) => {
    var yR = GR(6157),
      tR = GR(6161);
    RR.exports = function(RR, JR, GR) {
      var uR = !0,
        ZR = !0;
      if ("function" != typeof RR) throw new TypeError("Expected a function");
      return tR(GR) && (uR = "leading" in GR ? !!GR.leading : uR, ZR = "trailing" in GR ? !!GR.trailing : ZR), yR(RR, JR, {
        leading: uR,
        maxWait: JR,
        trailing: ZR
      })
    }
  },
  6596: (RR, JR, GR) => {
    var yR = GR(6187),
      tR = 1 / 0;
    RR.exports = function(RR) {
      return RR ? (RR = yR(RR)) === tR || RR === -1 / 0 ? 17976931348623157e292 * (RR < 0 ? -1 : 1) : RR === RR ? RR : 0 : 0 === RR ? RR : 0
    }
  },
  7464: (RR, JR, GR) => {
    var yR = GR(6596);
    RR.exports = function(RR) {
      var JR = yR(RR),
        GR = JR % 1;
      return JR === JR ? GR ? JR - GR : JR : 0
    }
  },
  6187: (RR, JR, GR) => {
    var yR = GR(6189),
      tR = GR(6161),
      uR = GR(6205),
      ZR = /^[-+]0x[0-9a-f]+$/i,
      qR = /^0b[01]+$/i,
      iR = /^0o[0-7]+$/i,
      fR = parseInt;
    RR.exports = function(RR) {
      if ("number" == typeof RR) return RR;
      if (uR(RR)) return NaN;
      if (tR(RR)) {
        var JR = "function" == typeof RR.valueOf ? RR.valueOf() : RR;
        RR = tR(JR) ? JR + "" : JR
      }
      if ("string" != typeof RR) return 0 === RR ? RR : +RR;
      RR = yR(RR);
      var GR = qR.test(RR);
      return GR || iR.test(RR) ? fR(RR.slice(2), GR ? 2 : 8) : ZR.test(RR) ? NaN : +RR
    }
  },
  6489: (RR, JR, GR) => {
    var yR = GR(6498);
    RR.exports = function(RR) {
      return null == RR ? "" : yR(RR)
    }
  },
  7056: (RR, JR, GR) => {
    var yR = GR(6643),
      tR = GR(7059);
    RR.exports = function(RR, JR) {
      return RR && RR.length ? tR(RR, yR(JR, 2)) : []
    }
  },
  7113: (RR, JR, GR) => {
    var yR = GR(7115)("toUpperCase");
    RR.exports = yR
  },
  7179: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => oJ
    });
    var yR = GR(66),
      tR = GR(6008),
      uR = GR.n(tR);
    const {
      getOwnPropertyNames: ZR,
      getOwnPropertySymbols: qR
    } = Object, {
      hasOwnProperty: iR
    } = Object.prototype;

    function fR(RR, JR) {
      return function(GR, yR, tR) {
        return RR(GR, yR, tR) && JR(GR, yR, tR)
      }
    }

    function VR(RR) {
      return function(JR, GR, yR) {
        if (!JR || !GR || "object" !== typeof JR || "object" !== typeof GR) return RR(JR, GR, yR);
        const {
          cache: tR
        } = yR, uR = tR.get(JR), ZR = tR.get(GR);
        if (uR && ZR) return uR === GR && ZR === JR;
        tR.set(JR, GR), tR.set(GR, JR);
        const qR = RR(JR, GR, yR);
        return tR.delete(JR), tR.delete(GR), qR
      }
    }

    function KR(RR) {
      return ZR(RR).concat(qR(RR))
    }
    const wR = Object.hasOwn || ((RR, JR) => iR.call(RR, JR));

    function rR(RR, JR) {
      return RR === JR || !RR && !JR && RR !== RR && JR !== JR
    }
    const {
      getOwnPropertyDescriptor: eR,
      keys: aR
    } = Object;

    function LR(RR, JR) {
      return RR.byteLength === JR.byteLength && vR(new Uint8Array(RR), new Uint8Array(JR))
    }

    function nR(RR, JR, GR) {
      let yR = RR.length;
      if (JR.length !== yR) return !1;
      for (; yR-- > 0;)
        if (!GR.equals(RR[yR], JR[yR], yR, yR, RR, JR, GR)) return !1;
      return !0
    }

    function UR(RR, JR) {
      return RR.byteLength === JR.byteLength && vR(new Uint8Array(RR.buffer, RR.byteOffset, RR.byteLength), new Uint8Array(JR.buffer, JR.byteOffset, JR.byteLength))
    }

    function WR(RR, JR) {
      return rR(RR.getTime(), JR.getTime())
    }

    function AR(RR, JR) {
      return RR.name === JR.name && RR.message === JR.message && RR.cause === JR.cause && RR.stack === JR.stack
    }

    function CR(RR, JR) {
      return RR === JR
    }

    function XR(RR, JR, GR) {
      const yR = RR.size;
      if (yR !== JR.size) return !1;
      if (!yR) return !0;
      const tR = new Array(yR),
        uR = RR.entries();
      let ZR, qR, iR = 0;
      for (;
        (ZR = uR.next()) && !ZR.done;) {
        const yR = JR.entries();
        let uR = !1,
          fR = 0;
        for (;
          (qR = yR.next()) && !qR.done;) {
          if (tR[fR]) {
            fR++;
            continue
          }
          const yR = ZR.value,
            VR = qR.value;
          if (GR.equals(yR[0], VR[0], iR, fR, RR, JR, GR) && GR.equals(yR[1], VR[1], yR[0], VR[0], RR, JR, GR)) {
            uR = tR[fR] = !0;
            break
          }
          fR++
        }
        if (!uR) return !1;
        iR++
      }
      return !0
    }
    const MR = rR;

    function BR(RR, JR, GR) {
      const yR = aR(RR);
      let tR = yR.length;
      if (aR(JR).length !== tR) return !1;
      for (; tR-- > 0;)
        if (!xR(RR, JR, GR, yR[tR])) return !1;
      return !0
    }

    function lR(RR, JR, GR) {
      const yR = KR(RR);
      let tR, uR, ZR, qR = yR.length;
      if (KR(JR).length !== qR) return !1;
      for (; qR-- > 0;) {
        if (tR = yR[qR], !xR(RR, JR, GR, tR)) return !1;
        if (uR = eR(RR, tR), ZR = eR(JR, tR), (uR || ZR) && (!uR || !ZR || uR.configurable !== ZR.configurable || uR.enumerable !== ZR.enumerable || uR.writable !== ZR.writable)) return !1
      }
      return !0
    }

    function pR(RR, JR) {
      return rR(RR.valueOf(), JR.valueOf())
    }

    function gR(RR, JR) {
      return RR.source === JR.source && RR.flags === JR.flags
    }

    function bR(RR, JR, GR) {
      const yR = RR.size;
      if (yR !== JR.size) return !1;
      if (!yR) return !0;
      const tR = new Array(yR),
        uR = RR.values();
      let ZR, qR;
      for (;
        (ZR = uR.next()) && !ZR.done;) {
        const yR = JR.values();
        let uR = !1,
          iR = 0;
        for (;
          (qR = yR.next()) && !qR.done;) {
          if (!tR[iR] && GR.equals(ZR.value, qR.value, ZR.value, qR.value, RR, JR, GR)) {
            uR = tR[iR] = !0;
            break
          }
          iR++
        }
        if (!uR) return !1
      }
      return !0
    }

    function vR(RR, JR) {
      let GR = RR.byteLength;
      if (JR.byteLength !== GR || RR.byteOffset !== JR.byteOffset) return !1;
      for (; GR-- > 0;)
        if (RR[GR] !== JR[GR]) return !1;
      return !0
    }

    function OR(RR, JR) {
      return RR.hostname === JR.hostname && RR.pathname === JR.pathname && RR.protocol === JR.protocol && RR.port === JR.port && RR.hash === JR.hash && RR.username === JR.username && RR.password === JR.password
    }

    function xR(RR, JR, GR, yR) {
      return !("_owner" !== yR && "__o" !== yR && "__v" !== yR || !RR.$$typeof && !JR.$$typeof) || wR(JR, yR) && GR.equals(RR[yR], JR[yR], yR, yR, RR, JR, GR)
    }
    const NR = {
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
      DR = Object.prototype.toString;

    function HR(RR) {
      let {
        areArrayBuffersEqual: JR,
        areArraysEqual: GR,
        areDataViewsEqual: yR,
        areDatesEqual: tR,
        areErrorsEqual: uR,
        areFunctionsEqual: ZR,
        areMapsEqual: qR,
        areNumbersEqual: iR,
        areObjectsEqual: fR,
        arePrimitiveWrappersEqual: VR,
        areRegExpsEqual: KR,
        areSetsEqual: wR,
        areTypedArraysEqual: rR,
        areUrlsEqual: eR,
        unknownTagComparators: aR
      } = RR;
      return function(RR, LR, nR) {
        if (RR === LR) return !0;
        if (null == RR || null == LR) return !1;
        const UR = typeof RR;
        if (UR !== typeof LR) return !1;
        if ("object" !== UR) return "number" === UR ? iR(RR, LR, nR) : "function" === UR && ZR(RR, LR, nR);
        const WR = RR.constructor;
        if (WR !== LR.constructor) return !1;
        if (WR === Object) return fR(RR, LR, nR);
        if (Array.isArray(RR)) return GR(RR, LR, nR);
        if (WR === Date) return tR(RR, LR, nR);
        if (WR === RegExp) return KR(RR, LR, nR);
        if (WR === Map) return qR(RR, LR, nR);
        if (WR === Set) return wR(RR, LR, nR);
        const AR = DR.call(RR);
        if ("[object Date]" === AR) return tR(RR, LR, nR);
        if ("[object RegExp]" === AR) return KR(RR, LR, nR);
        if ("[object Map]" === AR) return qR(RR, LR, nR);
        if ("[object Set]" === AR) return wR(RR, LR, nR);
        if ("[object Object]" === AR) return "function" !== typeof RR.then && "function" !== typeof LR.then && fR(RR, LR, nR);
        if ("[object URL]" === AR) return eR(RR, LR, nR);
        if ("[object Error]" === AR) return uR(RR, LR, nR);
        if ("[object Arguments]" === AR) return fR(RR, LR, nR);
        if (NR[AR]) return rR(RR, LR, nR);
        if ("[object ArrayBuffer]" === AR) return JR(RR, LR, nR);
        if ("[object DataView]" === AR) return yR(RR, LR, nR);
        if ("[object Boolean]" === AR || "[object Number]" === AR || "[object String]" === AR) return VR(RR, LR, nR);
        if (aR) {
          let JR = aR[AR];
          if (!JR) {
            const GR = null != (CR = RR) ? CR[Symbol.toStringTag] : void 0;
            GR && (JR = aR[GR])
          }
          if (JR) return JR(RR, LR, nR)
        }
        var CR;
        return !1
      }
    }
    const oR = cR();
    cR({
      strict: !0
    }), cR({
      circular: !0
    }), cR({
      circular: !0,
      strict: !0
    }), cR({
      createInternalComparator: () => rR
    }), cR({
      strict: !0,
      createInternalComparator: () => rR
    }), cR({
      circular: !0,
      createInternalComparator: () => rR
    }), cR({
      circular: !0,
      createInternalComparator: () => rR,
      strict: !0
    });

    function cR() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        circular: JR = !1,
        createInternalComparator: GR,
        createState: yR,
        strict: tR = !1
      } = RR, uR = function(RR) {
        let {
          circular: JR,
          createCustomConfig: GR,
          strict: yR
        } = RR, tR = {
          areArrayBuffersEqual: LR,
          areArraysEqual: yR ? lR : nR,
          areDataViewsEqual: UR,
          areDatesEqual: WR,
          areErrorsEqual: AR,
          areFunctionsEqual: CR,
          areMapsEqual: yR ? fR(XR, lR) : XR,
          areNumbersEqual: MR,
          areObjectsEqual: yR ? lR : BR,
          arePrimitiveWrappersEqual: pR,
          areRegExpsEqual: gR,
          areSetsEqual: yR ? fR(bR, lR) : bR,
          areTypedArraysEqual: yR ? fR(vR, lR) : vR,
          areUrlsEqual: OR,
          unknownTagComparators: void 0
        };
        if (GR && (tR = Object.assign({}, tR, GR(tR))), JR) {
          const RR = VR(tR.areArraysEqual),
            JR = VR(tR.areMapsEqual),
            GR = VR(tR.areObjectsEqual),
            yR = VR(tR.areSetsEqual);
          tR = Object.assign({}, tR, {
            areArraysEqual: RR,
            areMapsEqual: JR,
            areObjectsEqual: GR,
            areSetsEqual: yR
          })
        }
        return tR
      }(RR), ZR = HR(uR);
      var qR;
      return function(RR) {
        let {
          circular: JR,
          comparator: GR,
          createState: yR,
          equals: tR,
          strict: uR
        } = RR;
        if (yR) return function(RR, ZR) {
          const {
            cache: qR = (JR ? new WeakMap : void 0),
            meta: iR
          } = yR();
          return GR(RR, ZR, {
            cache: qR,
            equals: tR,
            meta: iR,
            strict: uR
          })
        };
        if (JR) return function(RR, JR) {
          return GR(RR, JR, {
            cache: new WeakMap,
            equals: tR,
            meta: void 0,
            strict: uR
          })
        };
        const ZR = {
          cache: void 0,
          equals: tR,
          meta: void 0,
          strict: uR
        };
        return function(RR, JR) {
          return GR(RR, JR, ZR)
        }
      }({
        circular: JR,
        comparator: ZR,
        createState: yR,
        equals: GR ? GR(ZR) : (qR = ZR, function(RR, JR, GR, yR, tR, uR, ZR) {
          return qR(RR, JR, ZR)
        }),
        strict: tR
      })
    }

    function PR(RR) {
      var JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        GR = -1;
      requestAnimationFrame((function yR(tR) {
        GR < 0 && (GR = tR), tR - GR > JR ? (RR(tR), GR = -1) : function(RR) {
          "undefined" !== typeof requestAnimationFrame && requestAnimationFrame(RR)
        }(yR)
      }))
    }

    function IR(RR) {
      return IR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, IR(RR)
    }

    function mR(RR) {
      return function(RR) {
        if (Array.isArray(RR)) return RR
      }(RR) || function(RR) {
        if ("undefined" !== typeof Symbol && null != RR[Symbol.iterator] || null != RR["@@iterator"]) return Array.from(RR)
      }(RR) || function(RR, JR) {
        if (!RR) return;
        if ("string" === typeof RR) return zR(RR, JR);
        var GR = Object.prototype.toString.call(RR).slice(8, -1);
        "Object" === GR && RR.constructor && (GR = RR.constructor.name);
        if ("Map" === GR || "Set" === GR) return Array.from(RR);
        if ("Arguments" === GR || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GR)) return zR(RR, JR)
      }(RR) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function zR(RR, JR) {
      (null == JR || JR > RR.length) && (JR = RR.length);
      for (var GR = 0, yR = new Array(JR); GR < JR; GR++) yR[GR] = RR[GR];
      return yR
    }

    function SR() {
      var RR = function() {
          return null
        },
        JR = !1,
        GR = function GR(yR) {
          if (!JR) {
            if (Array.isArray(yR)) {
              if (!yR.length) return;
              var tR = mR(yR),
                uR = tR[0],
                ZR = tR.slice(1);
              return "number" === typeof uR ? void PR(GR.bind(null, ZR), uR) : (GR(uR), void PR(GR.bind(null, ZR)))
            }
            "object" === IR(yR) && RR(yR), "function" === typeof yR && yR()
          }
        };
      return {
        stop: function() {
          JR = !0
        },
        start: function(RR) {
          JR = !1, GR(RR)
        },
        subscribe: function(JR) {
          return RR = JR,
            function() {
              RR = function() {
                return null
              }
            }
        }
      }
    }

    function jR(RR) {
      return jR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, jR(RR)
    }

    function dR(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function ER(RR) {
      for (var JR = 1; JR < arguments.length; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? dR(Object(GR), !0).forEach((function(JR) {
          YR(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : dR(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }

    function YR(RR, JR, GR) {
      return (JR = function(RR) {
        var JR = function(RR, JR) {
          if ("object" !== jR(RR) || null === RR) return RR;
          var GR = RR[Symbol.toPrimitive];
          if (void 0 !== GR) {
            var yR = GR.call(RR, JR || "default");
            if ("object" !== jR(yR)) return yR;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === JR ? String : Number)(RR)
        }(RR, "string");
        return "symbol" === jR(JR) ? JR : String(JR)
      }(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }
    var kR = function(RR) {
        return RR
      },
      QR = function(RR, JR) {
        return Object.keys(JR).reduce((function(GR, yR) {
          return ER(ER({}, GR), {}, YR({}, yR, RR(yR, JR[yR])))
        }), {})
      },
      FR = function(RR, JR, GR) {
        return RR.map((function(RR) {
          return "".concat((yR = RR, yR.replace(/([A-Z])/g, (function(RR) {
            return "-".concat(RR.toLowerCase())
          }))), " ").concat(JR, "ms ").concat(GR);
          var yR
        })).join(",")
      };

    function TR(RR, JR) {
      return function(RR) {
        if (Array.isArray(RR)) return RR
      }(RR) || function(RR, JR) {
        var GR = null == RR ? null : "undefined" != typeof Symbol && RR[Symbol.iterator] || RR["@@iterator"];
        if (null != GR) {
          var yR, tR, uR, ZR, qR = [],
            iR = !0,
            fR = !1;
          try {
            if (uR = (GR = GR.call(RR)).next, 0 === JR) {
              if (Object(GR) !== GR) return;
              iR = !1
            } else
              for (; !(iR = (yR = uR.call(GR)).done) && (qR.push(yR.value), qR.length !== JR); iR = !0);
          } catch (RR) {
            fR = !0, tR = RR
          } finally {
            try {
              if (!iR && null != GR.return && (ZR = GR.return(), Object(ZR) !== ZR)) return
            } finally {
              if (fR) throw tR
            }
          }
          return qR
        }
      }(RR, JR) || hR(RR, JR) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function sR(RR) {
      return function(RR) {
        if (Array.isArray(RR)) return RJ(RR)
      }(RR) || function(RR) {
        if ("undefined" !== typeof Symbol && null != RR[Symbol.iterator] || null != RR["@@iterator"]) return Array.from(RR)
      }(RR) || hR(RR) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function hR(RR, JR) {
      if (RR) {
        if ("string" === typeof RR) return RJ(RR, JR);
        var GR = Object.prototype.toString.call(RR).slice(8, -1);
        return "Object" === GR && RR.constructor && (GR = RR.constructor.name), "Map" === GR || "Set" === GR ? Array.from(RR) : "Arguments" === GR || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GR) ? RJ(RR, JR) : void 0
      }
    }

    function RJ(RR, JR) {
      (null == JR || JR > RR.length) && (JR = RR.length);
      for (var GR = 0, yR = new Array(JR); GR < JR; GR++) yR[GR] = RR[GR];
      return yR
    }
    var JJ = 1e-4,
      GJ = function(RR, JR) {
        return [0, 3 * RR, 3 * JR - 6 * RR, 3 * RR - 3 * JR + 1]
      },
      yJ = function(RR, JR) {
        return RR.map((function(RR, GR) {
          return RR * Math.pow(JR, GR)
        })).reduce((function(RR, JR) {
          return RR + JR
        }))
      },
      tJ = function(RR, JR) {
        return function(GR) {
          var yR = GJ(RR, JR);
          return yJ(yR, GR)
        }
      },
      uJ = function() {
        for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
        var yR = JR[0],
          tR = JR[1],
          uR = JR[2],
          ZR = JR[3];
        if (1 === JR.length) switch (JR[0]) {
          case "linear":
            yR = 0, tR = 0, uR = 1, ZR = 1;
            break;
          case "ease":
            yR = .25, tR = .1, uR = .25, ZR = 1;
            break;
          case "ease-in":
            yR = .42, tR = 0, uR = 1, ZR = 1;
            break;
          case "ease-out":
            yR = .42, tR = 0, uR = .58, ZR = 1;
            break;
          case "ease-in-out":
            yR = 0, tR = 0, uR = .58, ZR = 1;
            break;
          default:
            var qR = JR[0].split("(");
            if ("cubic-bezier" === qR[0] && 4 === qR[1].split(")")[0].split(",").length) {
              var iR = TR(qR[1].split(")")[0].split(",").map((function(RR) {
                return parseFloat(RR)
              })), 4);
              yR = iR[0], tR = iR[1], uR = iR[2], ZR = iR[3]
            }
        } [yR, uR, tR, ZR].every((function(RR) {
          return "number" === typeof RR && RR >= 0 && RR <= 1
        }));
        var fR, VR, KR = tJ(yR, uR),
          wR = tJ(tR, ZR),
          rR = (fR = yR, VR = uR, function(RR) {
            var JR = GJ(fR, VR),
              GR = [].concat(sR(JR.map((function(RR, JR) {
                return RR * JR
              })).slice(1)), [0]);
            return yJ(GR, RR)
          }),
          eR = function(RR) {
            for (var JR, GR = RR > 1 ? 1 : RR, yR = GR, tR = 0; tR < 8; ++tR) {
              var uR = KR(yR) - GR,
                ZR = rR(yR);
              if (Math.abs(uR - GR) < JJ || ZR < JJ) return wR(yR);
              yR = (JR = yR - uR / ZR) > 1 ? 1 : JR < 0 ? 0 : JR
            }
            return wR(yR)
          };
        return eR.isStepper = !1, eR
      },
      ZJ = function() {
        for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
        var yR = JR[0];
        if ("string" === typeof yR) switch (yR) {
          case "ease":
          case "ease-in-out":
          case "ease-out":
          case "ease-in":
          case "linear":
            return uJ(yR);
          case "spring":
            return function() {
              var RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                JR = RR.stiff,
                GR = void 0 === JR ? 100 : JR,
                yR = RR.damping,
                tR = void 0 === yR ? 8 : yR,
                uR = RR.dt,
                ZR = void 0 === uR ? 17 : uR,
                qR = function(RR, JR, yR) {
                  var uR = yR + (-(RR - JR) * GR - yR * tR) * ZR / 1e3,
                    qR = yR * ZR / 1e3 + RR;
                  return Math.abs(qR - JR) < JJ && Math.abs(uR) < JJ ? [JR, 0] : [qR, uR]
                };
              return qR.isStepper = !0, qR.dt = ZR, qR
            }();
          default:
            if ("cubic-bezier" === yR.split("(")[0]) return uJ(yR)
        }
        return "function" === typeof yR ? yR : null
      };

    function qJ(RR) {
      return qJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, qJ(RR)
    }

    function iJ(RR) {
      return function(RR) {
        if (Array.isArray(RR)) return eJ(RR)
      }(RR) || function(RR) {
        if ("undefined" !== typeof Symbol && null != RR[Symbol.iterator] || null != RR["@@iterator"]) return Array.from(RR)
      }(RR) || rJ(RR) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function fJ(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function VJ(RR) {
      for (var JR = 1; JR < arguments.length; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? fJ(Object(GR), !0).forEach((function(JR) {
          KJ(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : fJ(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }

    function KJ(RR, JR, GR) {
      return (JR = function(RR) {
        var JR = function(RR, JR) {
          if ("object" !== qJ(RR) || null === RR) return RR;
          var GR = RR[Symbol.toPrimitive];
          if (void 0 !== GR) {
            var yR = GR.call(RR, JR || "default");
            if ("object" !== qJ(yR)) return yR;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === JR ? String : Number)(RR)
        }(RR, "string");
        return "symbol" === qJ(JR) ? JR : String(JR)
      }(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }

    function wJ(RR, JR) {
      return function(RR) {
        if (Array.isArray(RR)) return RR
      }(RR) || function(RR, JR) {
        var GR = null == RR ? null : "undefined" != typeof Symbol && RR[Symbol.iterator] || RR["@@iterator"];
        if (null != GR) {
          var yR, tR, uR, ZR, qR = [],
            iR = !0,
            fR = !1;
          try {
            if (uR = (GR = GR.call(RR)).next, 0 === JR) {
              if (Object(GR) !== GR) return;
              iR = !1
            } else
              for (; !(iR = (yR = uR.call(GR)).done) && (qR.push(yR.value), qR.length !== JR); iR = !0);
          } catch (RR) {
            fR = !0, tR = RR
          } finally {
            try {
              if (!iR && null != GR.return && (ZR = GR.return(), Object(ZR) !== ZR)) return
            } finally {
              if (fR) throw tR
            }
          }
          return qR
        }
      }(RR, JR) || rJ(RR, JR) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function rJ(RR, JR) {
      if (RR) {
        if ("string" === typeof RR) return eJ(RR, JR);
        var GR = Object.prototype.toString.call(RR).slice(8, -1);
        return "Object" === GR && RR.constructor && (GR = RR.constructor.name), "Map" === GR || "Set" === GR ? Array.from(RR) : "Arguments" === GR || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GR) ? eJ(RR, JR) : void 0
      }
    }

    function eJ(RR, JR) {
      (null == JR || JR > RR.length) && (JR = RR.length);
      for (var GR = 0, yR = new Array(JR); GR < JR; GR++) yR[GR] = RR[GR];
      return yR
    }
    var aJ = function(RR, JR, GR) {
        return RR + (JR - RR) * GR
      },
      LJ = function(RR) {
        return RR.from !== RR.to
      },
      nJ = function RR(JR, GR, yR) {
        var tR = QR((function(RR, GR) {
          if (LJ(GR)) {
            var yR = wJ(JR(GR.from, GR.to, GR.BL), 2),
              tR = yR[0],
              uR = yR[1];
            return VJ(VJ({}, GR), {}, {
              from: tR,
              BL: uR
            })
          }
          return GR
        }), GR);
        return yR < 1 ? QR((function(RR, JR) {
          return LJ(JR) ? VJ(VJ({}, JR), {}, {
            BL: aJ(JR.BL, tR[RR].BL, yR),
            from: aJ(JR.from, tR[RR].from, yR)
          }) : JR
        }), GR) : RR(JR, tR, yR - 1)
      };
    const UJ = function(RR, JR, GR, yR, tR) {
      var uR, ZR, qR, iR, fR = (uR = RR, ZR = JR, [Object.keys(uR), Object.keys(ZR)].reduce((function(RR, JR) {
          return RR.filter((function(RR) {
            return JR.includes(RR)
          }))
        }))),
        VR = fR.reduce((function(GR, yR) {
          return VJ(VJ({}, GR), {}, KJ({}, yR, [RR[yR], JR[yR]]))
        }), {}),
        KR = fR.reduce((function(GR, yR) {
          return VJ(VJ({}, GR), {}, KJ({}, yR, {
            from: RR[yR],
            BL: 0,
            to: JR[yR]
          }))
        }), {}),
        wR = -1,
        rR = function() {
          return null
        };
      return rR = GR.isStepper ? function(yR) {
          qR || (qR = yR);
          var uR = (yR - qR) / GR.dt;
          KR = nJ(GR, KR, uR), tR(VJ(VJ(VJ({}, RR), JR), QR((function(RR, JR) {
            return JR.from
          }), KR))), qR = yR, Object.values(KR).filter(LJ).length && (wR = requestAnimationFrame(rR))
        } : function(uR) {
          iR || (iR = uR);
          var ZR = (uR - iR) / yR,
            qR = QR((function(RR, JR) {
              return aJ.apply(void 0, iJ(JR).concat([GR(ZR)]))
            }), VR);
          if (tR(VJ(VJ(VJ({}, RR), JR), qR)), ZR < 1) wR = requestAnimationFrame(rR);
          else {
            var fR = QR((function(RR, JR) {
              return aJ.apply(void 0, iJ(JR).concat([GR(1)]))
            }), VR);
            tR(VJ(VJ(VJ({}, RR), JR), fR))
          }
        },
        function() {
          return requestAnimationFrame(rR),
            function() {
              cancelAnimationFrame(wR)
            }
        }
    };

    function WJ(RR) {
      return WJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, WJ(RR)
    }
    var AJ = ["children", "UK", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];

    function CJ(RR, JR) {
      if (null == RR) return {};
      var GR, yR, tR = function(RR, JR) {
        if (null == RR) return {};
        var GR, yR, tR = {},
          uR = Object.keys(RR);
        for (yR = 0; yR < uR.length; yR++) GR = uR[yR], JR.indexOf(GR) >= 0 || (tR[GR] = RR[GR]);
        return tR
      }(RR, JR);
      if (Object.getOwnPropertySymbols) {
        var uR = Object.getOwnPropertySymbols(RR);
        for (yR = 0; yR < uR.length; yR++) GR = uR[yR], JR.indexOf(GR) >= 0 || Object.prototype.propertyIsEnumerable.call(RR, GR) && (tR[GR] = RR[GR])
      }
      return tR
    }

    function XJ(RR) {
      return function(RR) {
        if (Array.isArray(RR)) return MJ(RR)
      }(RR) || function(RR) {
        if ("undefined" !== typeof Symbol && null != RR[Symbol.iterator] || null != RR["@@iterator"]) return Array.from(RR)
      }(RR) || function(RR, JR) {
        if (!RR) return;
        if ("string" === typeof RR) return MJ(RR, JR);
        var GR = Object.prototype.toString.call(RR).slice(8, -1);
        "Object" === GR && RR.constructor && (GR = RR.constructor.name);
        if ("Map" === GR || "Set" === GR) return Array.from(RR);
        if ("Arguments" === GR || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GR)) return MJ(RR, JR)
      }(RR) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function MJ(RR, JR) {
      (null == JR || JR > RR.length) && (JR = RR.length);
      for (var GR = 0, yR = new Array(JR); GR < JR; GR++) yR[GR] = RR[GR];
      return yR
    }

    function BJ(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function lJ(RR) {
      for (var JR = 1; JR < arguments.length; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? BJ(Object(GR), !0).forEach((function(JR) {
          pJ(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : BJ(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }

    function pJ(RR, JR, GR) {
      return (JR = bJ(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }

    function gJ(RR, JR) {
      for (var GR = 0; GR < JR.length; GR++) {
        var yR = JR[GR];
        yR.enumerable = yR.enumerable || !1, yR.configurable = !0, "value" in yR && (yR.writable = !0), Object.defineProperty(RR, bJ(yR.key), yR)
      }
    }

    function bJ(RR) {
      var JR = function(RR, JR) {
        if ("object" !== WJ(RR) || null === RR) return RR;
        var GR = RR[Symbol.toPrimitive];
        if (void 0 !== GR) {
          var yR = GR.call(RR, JR || "default");
          if ("object" !== WJ(yR)) return yR;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === JR ? String : Number)(RR)
      }(RR, "string");
      return "symbol" === WJ(JR) ? JR : String(JR)
    }

    function vJ(RR, JR) {
      return vJ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(RR, JR) {
        return RR.__proto__ = JR, RR
      }, vJ(RR, JR)
    }

    function OJ(RR) {
      var JR = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (RR) {
          return !1
        }
      }();
      return function() {
        var GR, yR = DJ(RR);
        if (JR) {
          var tR = DJ(this).constructor;
          GR = Reflect.construct(yR, arguments, tR)
        } else GR = yR.apply(this, arguments);
        return xJ(this, GR)
      }
    }

    function xJ(RR, JR) {
      if (JR && ("object" === WJ(JR) || "function" === typeof JR)) return JR;
      if (void 0 !== JR) throw new TypeError("Derived constructors may only return object or undefined");
      return NJ(RR)
    }

    function NJ(RR) {
      if (void 0 === RR) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return RR
    }

    function DJ(RR) {
      return DJ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(RR) {
        return RR.__proto__ || Object.getPrototypeOf(RR)
      }, DJ(RR)
    }
    var HJ = function(RR) {
      ! function(RR, JR) {
        if ("function" !== typeof JR && null !== JR) throw new TypeError("Super expression must either be null or a function");
        RR.prototype = Object.create(JR && JR.prototype, {
          constructor: {
            value: RR,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(RR, "prototype", {
          writable: !1
        }), JR && vJ(RR, JR)
      }(ZR, RR);
      var JR, GR, tR, uR = OJ(ZR);

      function ZR(RR, JR) {
        var GR;
        ! function(RR, JR) {
          if (!(RR instanceof JR)) throw new TypeError("Cannot call a class as a function")
        }(this, ZR);
        var yR = (GR = uR.call(this, RR, JR)).props,
          tR = yR.isActive,
          qR = yR.attributeName,
          iR = yR.from,
          fR = yR.to,
          VR = yR.steps,
          KR = yR.children,
          wR = yR.duration;
        if (GR.handleStyleChange = GR.handleStyleChange.bind(NJ(GR)), GR.changeStyle = GR.changeStyle.bind(NJ(GR)), !tR || wR <= 0) return GR.state = {
          style: {}
        }, "function" === typeof KR && (GR.state = {
          style: fR
        }), xJ(GR);
        if (VR && VR.length) GR.state = {
          style: VR[0].style
        };
        else if (iR) {
          if ("function" === typeof KR) return GR.state = {
            style: iR
          }, xJ(GR);
          GR.state = {
            style: qR ? pJ({}, qR, iR) : iR
          }
        } else GR.state = {
          style: {}
        };
        return GR
      }
      return JR = ZR, (GR = [{
        key: "componentDidMount",
        value: function() {
          var RR = this.props,
            JR = RR.isActive,
            GR = RR.canBegin;
          this.mounted = !0, JR && GR && this.runAnimation(this.props)
        }
      }, {
        key: "componentDidUpdate",
        value: function(RR) {
          var JR = this.props,
            GR = JR.isActive,
            yR = JR.canBegin,
            tR = JR.attributeName,
            uR = JR.shouldReAnimate,
            ZR = JR.to,
            qR = JR.from,
            iR = this.state.style;
          if (yR)
            if (GR) {
              if (!(oR(RR.to, ZR) && RR.canBegin && RR.isActive)) {
                var fR = !RR.canBegin || !RR.isActive;
                this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
                var VR = fR || uR ? qR : RR.to;
                if (this.state && iR) {
                  var KR = {
                    style: tR ? pJ({}, tR, VR) : VR
                  };
                  (tR && iR[tR] !== VR || !tR && iR !== VR) && this.setState(KR)
                }
                this.runAnimation(lJ(lJ({}, this.props), {}, {
                  from: VR,
                  UK: 0
                }))
              }
            } else {
              var wR = {
                style: tR ? pJ({}, tR, ZR) : ZR
              };
              this.state && iR && (tR && iR[tR] !== ZR || !tR && iR !== ZR) && this.setState(wR)
            }
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          this.mounted = !1;
          var RR = this.props.onAnimationEnd;
          this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), RR && RR()
        }
      }, {
        key: "handleStyleChange",
        value: function(RR) {
          this.changeStyle(RR)
        }
      }, {
        key: "changeStyle",
        value: function(RR) {
          this.mounted && this.setState({
            style: RR
          })
        }
      }, {
        key: "runJSAnimation",
        value: function(RR) {
          var JR = this,
            GR = RR.from,
            yR = RR.to,
            tR = RR.duration,
            uR = RR.easing,
            ZR = RR.UK,
            qR = RR.onAnimationEnd,
            iR = RR.onAnimationStart,
            fR = UJ(GR, yR, ZJ(uR), tR, this.changeStyle);
          this.manager.start([iR, ZR, function() {
            JR.stopJSAnimation = fR()
          }, tR, qR])
        }
      }, {
        key: "runStepAnimation",
        value: function(RR) {
          var JR = this,
            GR = RR.steps,
            yR = RR.UK,
            tR = RR.onAnimationStart,
            uR = GR[0],
            ZR = uR.style,
            qR = uR.duration,
            iR = void 0 === qR ? 0 : qR;
          return this.manager.start([tR].concat(XJ(GR.reduce((function(RR, yR, tR) {
            if (0 === tR) return RR;
            var uR = yR.duration,
              ZR = yR.easing,
              qR = void 0 === ZR ? "ease" : ZR,
              iR = yR.style,
              fR = yR.properties,
              VR = yR.onAnimationEnd,
              KR = tR > 0 ? GR[tR - 1] : yR,
              wR = fR || Object.keys(iR);
            if ("function" === typeof qR || "spring" === qR) return [].concat(XJ(RR), [JR.runJSAnimation.bind(JR, {
              from: KR.style,
              to: iR,
              duration: uR,
              easing: qR
            }), uR]);
            var rR = FR(wR, uR, qR),
              eR = lJ(lJ(lJ({}, KR.style), iR), {}, {
                transition: rR
              });
            return [].concat(XJ(RR), [eR, uR, VR]).filter(kR)
          }), [ZR, Math.max(iR, yR)])), [RR.onAnimationEnd]))
        }
      }, {
        key: "runAnimation",
        value: function(RR) {
          this.manager || (this.manager = SR());
          var JR = RR.UK,
            GR = RR.duration,
            yR = RR.attributeName,
            tR = RR.to,
            uR = RR.easing,
            ZR = RR.onAnimationStart,
            qR = RR.onAnimationEnd,
            iR = RR.steps,
            fR = RR.children,
            VR = this.manager;
          if (this.unSubscribe = VR.subscribe(this.handleStyleChange), "function" !== typeof uR && "function" !== typeof fR && "spring" !== uR)
            if (iR.length > 1) this.runStepAnimation(RR);
            else {
              var KR = yR ? pJ({}, yR, tR) : tR,
                wR = FR(Object.keys(KR), GR, uR);
              VR.start([ZR, JR, lJ(lJ({}, KR), {}, {
                transition: wR
              }), GR, qR])
            }
          else this.runJSAnimation(RR)
        }
      }, {
        key: "render",
        value: function() {
          var RR = this.props,
            JR = RR.children,
            GR = (RR.UK, RR.duration),
            tR = (RR.attributeName, RR.easing, RR.isActive),
            uR = (RR.steps, RR.from, RR.to, RR.canBegin, RR.onAnimationEnd, RR.shouldReAnimate, RR.onAnimationReStart, CJ(RR, AJ)),
            ZR = yR.Children.count(JR),
            qR = this.state.style;
          if ("function" === typeof JR) return JR(qR);
          if (!tR || 0 === ZR || GR <= 0) return JR;
          var iR = function(RR) {
            var JR = RR.props,
              GR = JR.style,
              tR = void 0 === GR ? {} : GR,
              ZR = JR.className;
            return (0, yR.cloneElement)(RR, lJ(lJ({}, uR), {}, {
              style: lJ(lJ({}, tR), qR),
              className: ZR
            }))
          };
          return 1 === ZR ? iR(yR.Children.only(JR)) : yR.createElement("div", null, yR.Children.map(JR, (function(RR) {
            return iR(RR)
          })))
        }
      }]) && gJ(JR.prototype, GR), tR && gJ(JR, tR), Object.defineProperty(JR, "prototype", {
        writable: !1
      }), ZR
    }(yR.PureComponent);
    HJ.displayName = "Animate", HJ.defaultProps = {
      UK: 0,
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
    }, HJ.propTypes = {
      from: uR().oneOfType([uR().object, uR().string]),
      to: uR().oneOfType([uR().object, uR().string]),
      attributeName: uR().string,
      duration: uR().number,
      UK: uR().number,
      easing: uR().oneOfType([uR().string, uR().func]),
      steps: uR().arrayOf(uR().shape({
        duration: uR().number.isRequired,
        style: uR().object.isRequired,
        easing: uR().oneOfType([uR().oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), uR().func]),
        properties: uR().arrayOf("string"),
        onAnimationEnd: uR().func
      })),
      children: uR().oneOfType([uR().node, uR().func]),
      isActive: uR().bool,
      canBegin: uR().bool,
      onAnimationEnd: uR().func,
      shouldReAnimate: uR().bool,
      onAnimationStart: uR().func,
      onAnimationReStart: uR().func
    };
    const oJ = HJ
  },
  7480: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => mR
    });
    var yR, tR = GR(66),
      uR = GR(6140),
      ZR = GR(7179),
      qR = GR(6357),
      iR = GR.n(qR),
      fR = GR(7219),
      VR = GR.n(fR),
      KR = GR(6516),
      wR = GR.n(KR),
      rR = GR(6244),
      eR = GR.n(rR),
      aR = GR(7269),
      LR = GR.n(aR),
      nR = GR(7471),
      UR = GR(7172),
      WR = GR(7037),
      AR = GR(7365),
      CR = GR(7047),
      XR = GR(6235),
      MR = GR(7192),
      BR = GR(6523),
      lR = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
      pR = ["key"];

    function gR(RR) {
      return gR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, gR(RR)
    }

    function bR(RR, JR) {
      if (null == RR) return {};
      var GR, yR, tR = function(RR, JR) {
        if (null == RR) return {};
        var GR = {};
        for (var yR in RR)
          if (Object.prototype.hasOwnProperty.call(RR, yR)) {
            if (JR.indexOf(yR) >= 0) continue;
            GR[yR] = RR[yR]
          } return GR
      }(RR, JR);
      if (Object.getOwnPropertySymbols) {
        var uR = Object.getOwnPropertySymbols(RR);
        for (yR = 0; yR < uR.length; yR++) GR = uR[yR], JR.indexOf(GR) >= 0 || Object.prototype.propertyIsEnumerable.call(RR, GR) && (tR[GR] = RR[GR])
      }
      return tR
    }

    function vR() {
      return vR = Object.assign ? Object.assign.bind() : function(RR) {
        for (var JR = 1; JR < arguments.length; JR++) {
          var GR = arguments[JR];
          for (var yR in GR) Object.prototype.hasOwnProperty.call(GR, yR) && (RR[yR] = GR[yR])
        }
        return RR
      }, vR.apply(this, arguments)
    }

    function OR(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function xR(RR) {
      for (var JR = 1; JR < arguments.length; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? OR(Object(GR), !0).forEach((function(JR) {
          PR(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : OR(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }

    function NR(RR, JR) {
      for (var GR = 0; GR < JR.length; GR++) {
        var yR = JR[GR];
        yR.enumerable = yR.enumerable || !1, yR.configurable = !0, "value" in yR && (yR.writable = !0), Object.defineProperty(RR, IR(yR.key), yR)
      }
    }

    function DR(RR, JR, GR) {
      return JR = oR(JR),
        function(RR, JR) {
          if (JR && ("object" === gR(JR) || "function" === typeof JR)) return JR;
          if (void 0 !== JR) throw new TypeError("Derived constructors may only return object or undefined");
          return function(RR) {
            if (void 0 === RR) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return RR
          }(RR)
        }(RR, HR() ? Reflect.construct(JR, GR || [], oR(RR).constructor) : JR.apply(RR, GR))
    }

    function HR() {
      try {
        var RR = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (RR) {}
      return (HR = function() {
        return !!RR
      })()
    }

    function oR(RR) {
      return oR = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(RR) {
        return RR.__proto__ || Object.getPrototypeOf(RR)
      }, oR(RR)
    }

    function cR(RR, JR) {
      return cR = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(RR, JR) {
        return RR.__proto__ = JR, RR
      }, cR(RR, JR)
    }

    function PR(RR, JR, GR) {
      return (JR = IR(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }

    function IR(RR) {
      var JR = function(RR, JR) {
        if ("object" != gR(RR) || !RR) return RR;
        var GR = RR[Symbol.toPrimitive];
        if (void 0 !== GR) {
          var yR = GR.call(RR, JR || "default");
          if ("object" != gR(yR)) return yR;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === JR ? String : Number)(RR)
      }(RR, "string");
      return "symbol" == gR(JR) ? JR : JR + ""
    }
    var mR = function(RR) {
      function JR() {
        var RR;
        ! function(RR, JR) {
          if (!(RR instanceof JR)) throw new TypeError("Cannot call a class as a function")
        }(this, JR);
        for (var GR = arguments.length, yR = new Array(GR), tR = 0; tR < GR; tR++) yR[tR] = arguments[tR];
        return PR(RR = DR(this, JR, [].concat(yR)), "state", {
          isAnimationFinished: !0
        }), PR(RR, "id", (0, XR.M)("recharts-area-")), PR(RR, "handleAnimationEnd", (function() {
          var JR = RR.props.onAnimationEnd;
          RR.setState({
            isAnimationFinished: !0
          }), iR()(JR) && JR()
        })), PR(RR, "handleAnimationStart", (function() {
          var JR = RR.props.onAnimationStart;
          RR.setState({
            isAnimationFinished: !1
          }), iR()(JR) && JR()
        })), RR
      }
      return function(RR, JR) {
        if ("function" !== typeof JR && null !== JR) throw new TypeError("Super expression must either be null or a function");
        RR.prototype = Object.create(JR && JR.prototype, {
          constructor: {
            value: RR,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(RR, "prototype", {
          writable: !1
        }), JR && cR(RR, JR)
      }(JR, RR), GR = JR, yR = [{
        key: "renderDots",
        value: function(RR, GR, yR) {
          var uR = this.props.isAnimationActive,
            ZR = this.state.isAnimationFinished;
          if (uR && !ZR) return null;
          var qR = this.props,
            iR = qR.dot,
            fR = qR.points,
            VR = qR.dataKey,
            KR = (0, BR.e)(this.props, !1),
            wR = (0, BR.e)(iR, !0),
            rR = fR.map((function(RR, GR) {
              var yR = xR(xR(xR({
                key: "dot-".concat(GR),
                r: 3
              }, KR), wR), {}, {
                index: GR,
                cx: RR.x,
                cy: RR.y,
                dataKey: VR,
                value: RR.value,
                payload: RR.payload,
                points: fR
              });
              return JR.renderDotItem(iR, yR)
            })),
            eR = {
              clipPath: RR ? "url(#clipPath-".concat(GR ? "" : "dots-").concat(yR, ")") : null
            };
          return tR.createElement(WR.c, vR({
            className: "recharts-area-dots"
          }, eR), rR)
        }
      }, {
        key: "renderHorizontalRect",
        value: function(RR) {
          var JR = this.props,
            GR = JR.baseLine,
            yR = JR.points,
            uR = JR.strokeWidth,
            ZR = yR[0].x,
            qR = yR[yR.length - 1].x,
            iR = RR * Math.abs(ZR - qR),
            fR = VR()(yR.map((function(RR) {
              return RR.y || 0
            })));
          return (0, XR.C)(GR) && "number" === typeof GR ? fR = Math.max(GR, fR) : GR && Array.isArray(GR) && GR.length && (fR = Math.max(VR()(GR.map((function(RR) {
            return RR.y || 0
          }))), fR)), (0, XR.C)(fR) ? tR.createElement("rect", {
            x: ZR < qR ? ZR : ZR - iR,
            y: 0,
            width: iR,
            height: Math.floor(fR + (uR ? parseInt("".concat(uR), 10) : 1))
          }) : null
        }
      }, {
        key: "renderVerticalRect",
        value: function(RR) {
          var JR = this.props,
            GR = JR.baseLine,
            yR = JR.points,
            uR = JR.strokeWidth,
            ZR = yR[0].y,
            qR = yR[yR.length - 1].y,
            iR = RR * Math.abs(ZR - qR),
            fR = VR()(yR.map((function(RR) {
              return RR.x || 0
            })));
          return (0, XR.C)(GR) && "number" === typeof GR ? fR = Math.max(GR, fR) : GR && Array.isArray(GR) && GR.length && (fR = Math.max(VR()(GR.map((function(RR) {
            return RR.x || 0
          }))), fR)), (0, XR.C)(fR) ? tR.createElement("rect", {
            x: 0,
            y: ZR < qR ? ZR : ZR - iR,
            width: fR + (uR ? parseInt("".concat(uR), 10) : 1),
            height: Math.floor(iR)
          }) : null
        }
      }, {
        key: "renderClipRect",
        value: function(RR) {
          return "vertical" === this.props.layout ? this.renderVerticalRect(RR) : this.renderHorizontalRect(RR)
        }
      }, {
        key: "renderAreaStatically",
        value: function(RR, JR, GR, yR) {
          var uR = this.props,
            ZR = uR.layout,
            qR = uR.type,
            iR = uR.stroke,
            fR = uR.connectNulls,
            VR = uR.isRange,
            KR = (uR.ref, bR(uR, lR));
          return tR.createElement(WR.c, {
            clipPath: GR ? "url(#clipPath-".concat(yR, ")") : null
          }, tR.createElement(nR.e, vR({}, (0, BR.e)(KR, !0), {
            points: RR,
            connectNulls: fR,
            type: qR,
            baseLine: JR,
            layout: ZR,
            stroke: "none",
            className: "recharts-area-area"
          })), "none" !== iR && tR.createElement(nR.e, vR({}, (0, BR.e)(this.props, !1), {
            className: "recharts-area-curve",
            layout: ZR,
            type: qR,
            connectNulls: fR,
            fill: "none",
            points: RR
          })), "none" !== iR && VR && tR.createElement(nR.e, vR({}, (0, BR.e)(this.props, !1), {
            className: "recharts-area-curve",
            layout: ZR,
            type: qR,
            connectNulls: fR,
            fill: "none",
            points: JR
          })))
        }
      }, {
        key: "renderAreaWithAnimation",
        value: function(RR, JR) {
          var GR = this,
            yR = this.props,
            uR = yR.points,
            qR = yR.baseLine,
            iR = yR.isAnimationActive,
            fR = yR.animationBegin,
            VR = yR.animationDuration,
            KR = yR.animationEasing,
            rR = yR.animationId,
            aR = this.state,
            LR = aR.prevPoints,
            nR = aR.prevBaseLine;
          return tR.createElement(ZR.b, {
            UK: fR,
            duration: VR,
            isActive: iR,
            easing: KR,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "area-".concat(rR),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(yR) {
            var ZR = yR.t;
            if (LR) {
              var iR, fR = LR.length / uR.length,
                VR = uR.map((function(RR, JR) {
                  var GR = Math.floor(JR * fR);
                  if (LR[GR]) {
                    var yR = LR[GR],
                      tR = (0, XR.v)(yR.x, RR.x),
                      uR = (0, XR.v)(yR.y, RR.y);
                    return xR(xR({}, RR), {}, {
                      x: tR(ZR),
                      y: uR(ZR)
                    })
                  }
                  return RR
                }));
              return iR = (0, XR.C)(qR) && "number" === typeof qR ? (0, XR.v)(nR, qR)(ZR) : wR()(qR) || eR()(qR) ? (0, XR.v)(nR, 0)(ZR) : qR.map((function(RR, JR) {
                var GR = Math.floor(JR * fR);
                if (nR[GR]) {
                  var yR = nR[GR],
                    tR = (0, XR.v)(yR.x, RR.x),
                    uR = (0, XR.v)(yR.y, RR.y);
                  return xR(xR({}, RR), {}, {
                    x: tR(ZR),
                    y: uR(ZR)
                  })
                }
                return RR
              })), GR.renderAreaStatically(VR, iR, RR, JR)
            }
            return tR.createElement(WR.c, null, tR.createElement("defs", null, tR.createElement("clipPath", {
              id: "animationClipPath-".concat(JR)
            }, GR.renderClipRect(ZR))), tR.createElement(WR.c, {
              clipPath: "url(#animationClipPath-".concat(JR, ")")
            }, GR.renderAreaStatically(uR, qR, RR, JR)))
          }))
        }
      }, {
        key: "renderArea",
        value: function(RR, JR) {
          var GR = this.props,
            yR = GR.points,
            tR = GR.baseLine,
            uR = GR.isAnimationActive,
            ZR = this.state,
            qR = ZR.prevPoints,
            iR = ZR.prevBaseLine,
            fR = ZR.totalLength;
          return uR && yR && yR.length && (!qR && fR > 0 || !LR()(qR, yR) || !LR()(iR, tR)) ? this.renderAreaWithAnimation(RR, JR) : this.renderAreaStatically(yR, tR, RR, JR)
        }
      }, {
        key: "render",
        value: function() {
          var RR, JR = this.props,
            GR = JR.hide,
            yR = JR.dot,
            ZR = JR.points,
            qR = JR.className,
            iR = JR.top,
            fR = JR.left,
            VR = JR.xAxis,
            KR = JR.yAxis,
            rR = JR.width,
            eR = JR.height,
            aR = JR.isAnimationActive,
            LR = JR.id;
          if (GR || !ZR || !ZR.length) return null;
          var nR = this.state.isAnimationFinished,
            UR = 1 === ZR.length,
            CR = (0, uR.c)("recharts-area", qR),
            XR = VR && VR.allowDataOverflow,
            MR = KR && KR.allowDataOverflow,
            lR = XR || MR,
            pR = wR()(LR) ? this.id : LR,
            gR = null !== (RR = (0, BR.e)(yR, !1)) && void 0 !== RR ? RR : {
              r: 3,
              strokeWidth: 2
            },
            bR = gR.r,
            vR = void 0 === bR ? 3 : bR,
            OR = gR.strokeWidth,
            xR = void 0 === OR ? 2 : OR,
            NR = ((0, BR.p)(yR) ? yR : {}).clipDot,
            DR = void 0 === NR || NR,
            HR = 2 * vR + xR;
          return tR.createElement(WR.c, {
            className: CR
          }, XR || MR ? tR.createElement("defs", null, tR.createElement("clipPath", {
            id: "clipPath-".concat(pR)
          }, tR.createElement("rect", {
            x: XR ? fR : fR - rR / 2,
            y: MR ? iR : iR - eR / 2,
            width: XR ? rR : 2 * rR,
            height: MR ? eR : 2 * eR
          })), !DR && tR.createElement("clipPath", {
            id: "clipPath-dots-".concat(pR)
          }, tR.createElement("rect", {
            x: fR - HR / 2,
            y: iR - HR / 2,
            width: rR + HR,
            height: eR + HR
          }))) : null, UR ? null : this.renderArea(lR, pR), (yR || UR) && this.renderDots(lR, DR, pR), (!aR || nR) && AR.e.renderCallByParent(this.props, ZR))
        }
      }], qR = [{
        key: "getDerivedStateFromProps",
        value: function(RR, JR) {
          return RR.animationId !== JR.prevAnimationId ? {
            prevAnimationId: RR.animationId,
            curPoints: RR.points,
            curBaseLine: RR.baseLine,
            prevPoints: JR.curPoints,
            prevBaseLine: JR.curBaseLine
          } : RR.points !== JR.curPoints || RR.baseLine !== JR.curBaseLine ? {
            curPoints: RR.points,
            curBaseLine: RR.baseLine
          } : null
        }
      }], yR && NR(GR.prototype, yR), qR && NR(GR, qR), Object.defineProperty(GR, "prototype", {
        writable: !1
      }), GR;
      var GR, yR, qR
    }(tR.PureComponent);
    yR = mR, PR(mR, "displayName", "Area"), PR(mR, "defaultProps", {
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
      isAnimationActive: !CR.d.isSsr,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease"
    }), PR(mR, "getBaseValue", (function(RR, JR, GR, yR) {
      var tR = RR.layout,
        uR = RR.baseValue,
        ZR = JR.props.baseValue,
        qR = null !== ZR && void 0 !== ZR ? ZR : uR;
      if ((0, XR.C)(qR) && "number" === typeof qR) return qR;
      var iR = "horizontal" === tR ? yR : GR,
        fR = iR.scale.domain();
      if ("number" === iR.type) {
        var VR = Math.max(fR[0], fR[1]),
          KR = Math.min(fR[0], fR[1]);
        return "dataMin" === qR ? KR : "dataMax" === qR || VR < 0 ? VR : Math.max(Math.min(fR[0], fR[1]), 0)
      }
      return "dataMin" === qR ? fR[0] : "dataMax" === qR ? fR[1] : fR[0]
    })), PR(mR, "getComposedData", (function(RR) {
      var JR, GR = RR.props,
        tR = RR.item,
        uR = RR.xAxis,
        ZR = RR.yAxis,
        qR = RR.xAxisTicks,
        iR = RR.yAxisTicks,
        fR = RR.bandSize,
        VR = RR.dataKey,
        KR = RR.stackedData,
        wR = RR.dataStartIndex,
        rR = RR.displayedData,
        eR = RR.offset,
        aR = GR.layout,
        LR = KR && KR.length,
        nR = yR.getBaseValue(GR, tR, uR, ZR),
        UR = "horizontal" === aR,
        WR = !1,
        AR = rR.map((function(RR, JR) {
          var GR;
          LR ? GR = KR[wR + JR] : (GR = (0, MR.hb)(RR, VR), Array.isArray(GR) ? WR = !0 : GR = [nR, GR]);
          var yR = null == GR[1] || LR && null == (0, MR.hb)(RR, VR);
          return UR ? {
            x: (0, MR.D)({
              axis: uR,
              ticks: qR,
              bandSize: fR,
              entry: RR,
              index: JR
            }),
            y: yR ? null : ZR.scale(GR[1]),
            value: GR,
            payload: RR
          } : {
            x: yR ? null : uR.scale(GR[1]),
            y: (0, MR.D)({
              axis: ZR,
              ticks: iR,
              bandSize: fR,
              entry: RR,
              index: JR
            }),
            value: GR,
            payload: RR
          }
        }));
      return JR = LR || WR ? AR.map((function(RR) {
        var JR = Array.isArray(RR.value) ? RR.value[0] : null;
        return UR ? {
          x: RR.x,
          y: null != JR && null != RR.y ? ZR.scale(JR) : null
        } : {
          x: null != JR ? uR.scale(JR) : null,
          y: RR.y
        }
      })) : UR ? ZR.scale(nR) : uR.scale(nR), xR({
        points: AR,
        baseLine: JR,
        layout: aR,
        isRange: WR
      }, eR)
    })), PR(mR, "renderDotItem", (function(RR, JR) {
      var GR;
      if (tR.isValidElement(RR)) GR = tR.cloneElement(RR, JR);
      else if (iR()(RR)) GR = RR(JR);
      else {
        var yR = (0, uR.c)("recharts-area-dot", "boolean" !== typeof RR ? RR.className : ""),
          ZR = JR.key,
          qR = bR(JR, pR);
        GR = tR.createElement(UR.d, vR({}, qR, {
          key: ZR,
          className: yR
        }))
      }
      return GR
    }))
  },
  7354: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => ER
    });
    var yR = GR(66),
      tR = GR(6140),
      uR = GR(7179),
      ZR = GR(7269),
      qR = GR.n(ZR),
      iR = GR(6516),
      fR = GR.n(iR),
      VR = GR(7037),
      KR = GR(7285),
      wR = GR(7358),
      rR = GR(7365),
      eR = GR(6235),
      aR = GR(6523),
      LR = GR(7047),
      nR = GR(7192),
      UR = GR(6542),
      WR = GR(7026),
      AR = GR(7381),
      CR = ["x", "y"];

    function XR(RR) {
      return XR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, XR(RR)
    }

    function MR() {
      return MR = Object.assign ? Object.assign.bind() : function(RR) {
        for (var JR = 1; JR < arguments.length; JR++) {
          var GR = arguments[JR];
          for (var yR in GR) Object.prototype.hasOwnProperty.call(GR, yR) && (RR[yR] = GR[yR])
        }
        return RR
      }, MR.apply(this, arguments)
    }

    function BR(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function lR(RR) {
      for (var JR = 1; JR < arguments.length; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? BR(Object(GR), !0).forEach((function(JR) {
          pR(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : BR(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }

    function pR(RR, JR, GR) {
      return (JR = function(RR) {
        var JR = function(RR, JR) {
          if ("object" != XR(RR) || !RR) return RR;
          var GR = RR[Symbol.toPrimitive];
          if (void 0 !== GR) {
            var yR = GR.call(RR, JR || "default");
            if ("object" != XR(yR)) return yR;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === JR ? String : Number)(RR)
        }(RR, "string");
        return "symbol" == XR(JR) ? JR : JR + ""
      }(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }

    function gR(RR, JR) {
      if (null == RR) return {};
      var GR, yR, tR = function(RR, JR) {
        if (null == RR) return {};
        var GR = {};
        for (var yR in RR)
          if (Object.prototype.hasOwnProperty.call(RR, yR)) {
            if (JR.indexOf(yR) >= 0) continue;
            GR[yR] = RR[yR]
          } return GR
      }(RR, JR);
      if (Object.getOwnPropertySymbols) {
        var uR = Object.getOwnPropertySymbols(RR);
        for (yR = 0; yR < uR.length; yR++) GR = uR[yR], JR.indexOf(GR) >= 0 || Object.prototype.propertyIsEnumerable.call(RR, GR) && (tR[GR] = RR[GR])
      }
      return tR
    }

    function bR(RR, JR) {
      var GR = RR.x,
        yR = RR.y,
        tR = gR(RR, CR),
        uR = "".concat(GR),
        ZR = parseInt(uR, 10),
        qR = "".concat(yR),
        iR = parseInt(qR, 10),
        fR = "".concat(JR.height || tR.height),
        VR = parseInt(fR, 10),
        KR = "".concat(JR.width || tR.width),
        wR = parseInt(KR, 10);
      return lR(lR(lR(lR(lR({}, JR), tR), ZR ? {
        x: ZR
      } : {}), iR ? {
        y: iR
      } : {}), {}, {
        height: VR,
        width: wR,
        name: JR.name,
        radius: JR.radius
      })
    }

    function vR(RR) {
      return yR.createElement(AR.c, MR({
        shapeType: "rectangle",
        propTransformer: bR,
        activeClassName: "recharts-active-bar"
      }, RR))
    }
    var OR, xR = ["value", "background"];

    function NR(RR) {
      return NR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, NR(RR)
    }

    function DR(RR, JR) {
      if (null == RR) return {};
      var GR, yR, tR = function(RR, JR) {
        if (null == RR) return {};
        var GR = {};
        for (var yR in RR)
          if (Object.prototype.hasOwnProperty.call(RR, yR)) {
            if (JR.indexOf(yR) >= 0) continue;
            GR[yR] = RR[yR]
          } return GR
      }(RR, JR);
      if (Object.getOwnPropertySymbols) {
        var uR = Object.getOwnPropertySymbols(RR);
        for (yR = 0; yR < uR.length; yR++) GR = uR[yR], JR.indexOf(GR) >= 0 || Object.prototype.propertyIsEnumerable.call(RR, GR) && (tR[GR] = RR[GR])
      }
      return tR
    }

    function HR() {
      return HR = Object.assign ? Object.assign.bind() : function(RR) {
        for (var JR = 1; JR < arguments.length; JR++) {
          var GR = arguments[JR];
          for (var yR in GR) Object.prototype.hasOwnProperty.call(GR, yR) && (RR[yR] = GR[yR])
        }
        return RR
      }, HR.apply(this, arguments)
    }

    function oR(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function cR(RR) {
      for (var JR = 1; JR < arguments.length; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? oR(Object(GR), !0).forEach((function(JR) {
          jR(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : oR(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }

    function PR(RR, JR) {
      for (var GR = 0; GR < JR.length; GR++) {
        var yR = JR[GR];
        yR.enumerable = yR.enumerable || !1, yR.configurable = !0, "value" in yR && (yR.writable = !0), Object.defineProperty(RR, dR(yR.key), yR)
      }
    }

    function IR(RR, JR, GR) {
      return JR = zR(JR),
        function(RR, JR) {
          if (JR && ("object" === NR(JR) || "function" === typeof JR)) return JR;
          if (void 0 !== JR) throw new TypeError("Derived constructors may only return object or undefined");
          return function(RR) {
            if (void 0 === RR) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return RR
          }(RR)
        }(RR, mR() ? Reflect.construct(JR, GR || [], zR(RR).constructor) : JR.apply(RR, GR))
    }

    function mR() {
      try {
        var RR = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (RR) {}
      return (mR = function() {
        return !!RR
      })()
    }

    function zR(RR) {
      return zR = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(RR) {
        return RR.__proto__ || Object.getPrototypeOf(RR)
      }, zR(RR)
    }

    function SR(RR, JR) {
      return SR = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(RR, JR) {
        return RR.__proto__ = JR, RR
      }, SR(RR, JR)
    }

    function jR(RR, JR, GR) {
      return (JR = dR(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }

    function dR(RR) {
      var JR = function(RR, JR) {
        if ("object" != NR(RR) || !RR) return RR;
        var GR = RR[Symbol.toPrimitive];
        if (void 0 !== GR) {
          var yR = GR.call(RR, JR || "default");
          if ("object" != NR(yR)) return yR;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === JR ? String : Number)(RR)
      }(RR, "string");
      return "symbol" == NR(JR) ? JR : JR + ""
    }
    var ER = function(RR) {
      function JR() {
        var RR;
        ! function(RR, JR) {
          if (!(RR instanceof JR)) throw new TypeError("Cannot call a class as a function")
        }(this, JR);
        for (var GR = arguments.length, yR = new Array(GR), tR = 0; tR < GR; tR++) yR[tR] = arguments[tR];
        return jR(RR = IR(this, JR, [].concat(yR)), "state", {
          isAnimationFinished: !1
        }), jR(RR, "id", (0, eR.M)("recharts-bar-")), jR(RR, "handleAnimationEnd", (function() {
          var JR = RR.props.onAnimationEnd;
          RR.setState({
            isAnimationFinished: !0
          }), JR && JR()
        })), jR(RR, "handleAnimationStart", (function() {
          var JR = RR.props.onAnimationStart;
          RR.setState({
            isAnimationFinished: !1
          }), JR && JR()
        })), RR
      }
      return function(RR, JR) {
        if ("function" !== typeof JR && null !== JR) throw new TypeError("Super expression must either be null or a function");
        RR.prototype = Object.create(JR && JR.prototype, {
          constructor: {
            value: RR,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(RR, "prototype", {
          writable: !1
        }), JR && SR(RR, JR)
      }(JR, RR), GR = JR, ZR = [{
        key: "renderRectanglesStatically",
        value: function(RR) {
          var JR = this,
            GR = this.props,
            tR = GR.shape,
            uR = GR.dataKey,
            ZR = GR.activeIndex,
            qR = GR.activeBar,
            iR = (0, aR.e)(this.props, !1);
          return RR && RR.map((function(RR, GR) {
            var fR = GR === ZR,
              KR = fR ? qR : tR,
              wR = cR(cR(cR({}, iR), RR), {}, {
                isActive: fR,
                option: KR,
                index: GR,
                dataKey: uR,
                onAnimationStart: JR.handleAnimationStart,
                onAnimationEnd: JR.handleAnimationEnd
              });
            return yR.createElement(VR.c, HR({
              className: "recharts-bar-rectangle"
            }, (0, UR.g)(JR.props, RR, GR), {
              key: "rectangle-".concat(null === RR || void 0 === RR ? void 0 : RR.x, "-").concat(null === RR || void 0 === RR ? void 0 : RR.y, "-").concat(null === RR || void 0 === RR ? void 0 : RR.value, "-").concat(GR)
            }), yR.createElement(vR, wR))
          }))
        }
      }, {
        key: "renderRectanglesWithAnimation",
        value: function() {
          var RR = this,
            JR = this.props,
            GR = JR.data,
            tR = JR.layout,
            ZR = JR.isAnimationActive,
            qR = JR.animationBegin,
            iR = JR.animationDuration,
            fR = JR.animationEasing,
            KR = JR.animationId,
            wR = this.state.prevData;
          return yR.createElement(uR.b, {
            UK: qR,
            duration: iR,
            isActive: ZR,
            easing: fR,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "bar-".concat(KR),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(JR) {
            var uR = JR.t,
              ZR = GR.map((function(RR, JR) {
                var GR = wR && wR[JR];
                if (GR) {
                  var yR = (0, eR.v)(GR.x, RR.x),
                    ZR = (0, eR.v)(GR.y, RR.y),
                    qR = (0, eR.v)(GR.width, RR.width),
                    iR = (0, eR.v)(GR.height, RR.height);
                  return cR(cR({}, RR), {}, {
                    x: yR(uR),
                    y: ZR(uR),
                    width: qR(uR),
                    height: iR(uR)
                  })
                }
                if ("horizontal" === tR) {
                  var fR = (0, eR.v)(0, RR.height)(uR);
                  return cR(cR({}, RR), {}, {
                    y: RR.y + RR.height - fR,
                    height: fR
                  })
                }
                var VR = (0, eR.v)(0, RR.width)(uR);
                return cR(cR({}, RR), {}, {
                  width: VR
                })
              }));
            return yR.createElement(VR.c, null, RR.renderRectanglesStatically(ZR))
          }))
        }
      }, {
        key: "renderRectangles",
        value: function() {
          var RR = this.props,
            JR = RR.data,
            GR = RR.isAnimationActive,
            yR = this.state.prevData;
          return !(GR && JR && JR.length) || yR && qR()(yR, JR) ? this.renderRectanglesStatically(JR) : this.renderRectanglesWithAnimation()
        }
      }, {
        key: "renderBackground",
        value: function() {
          var RR = this,
            JR = this.props,
            GR = JR.data,
            tR = JR.dataKey,
            uR = JR.activeIndex,
            ZR = (0, aR.e)(this.props.background, !1);
          return GR.map((function(JR, GR) {
            JR.value;
            var qR = JR.background,
              iR = DR(JR, xR);
            if (!qR) return null;
            var fR = cR(cR(cR(cR(cR({}, iR), {}, {
              fill: "#eee"
            }, qR), ZR), (0, UR.g)(RR.props, JR, GR)), {}, {
              onAnimationStart: RR.handleAnimationStart,
              onAnimationEnd: RR.handleAnimationEnd,
              dataKey: tR,
              index: GR,
              className: "recharts-bar-background-rectangle"
            });
            return yR.createElement(vR, HR({
              key: "background-bar-".concat(GR),
              option: RR.props.background,
              isActive: GR === uR
            }, fR))
          }))
        }
      }, {
        key: "renderErrorBar",
        value: function(RR, JR) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var GR = this.props,
            tR = GR.data,
            uR = GR.xAxis,
            ZR = GR.yAxis,
            qR = GR.layout,
            iR = GR.children,
            fR = (0, aR.i)(iR, KR.e);
          if (!fR) return null;
          var wR = "vertical" === qR ? tR[0].height / 2 : tR[0].width / 2,
            rR = function(RR, JR) {
              var GR = Array.isArray(RR.value) ? RR.value[1] : RR.value;
              return {
                x: RR.x,
                y: RR.y,
                value: GR,
                errorVal: (0, nR.hb)(RR, JR)
              }
            },
            eR = {
              clipPath: RR ? "url(#clipPath-".concat(JR, ")") : null
            };
          return yR.createElement(VR.c, eR, fR.map((function(RR) {
            return yR.cloneElement(RR, {
              key: "error-bar-".concat(JR, "-").concat(RR.props.dataKey),
              data: tR,
              xAxis: uR,
              yAxis: ZR,
              layout: qR,
              offset: wR,
              dataPointFormatter: rR
            })
          })))
        }
      }, {
        key: "render",
        value: function() {
          var RR = this.props,
            JR = RR.hide,
            GR = RR.data,
            uR = RR.className,
            ZR = RR.xAxis,
            qR = RR.yAxis,
            iR = RR.left,
            KR = RR.top,
            wR = RR.width,
            eR = RR.height,
            aR = RR.isAnimationActive,
            LR = RR.background,
            nR = RR.id;
          if (JR || !GR || !GR.length) return null;
          var UR = this.state.isAnimationFinished,
            WR = (0, tR.c)("recharts-bar", uR),
            AR = ZR && ZR.allowDataOverflow,
            CR = qR && qR.allowDataOverflow,
            XR = AR || CR,
            MR = fR()(nR) ? this.id : nR;
          return yR.createElement(VR.c, {
            className: WR
          }, AR || CR ? yR.createElement("defs", null, yR.createElement("clipPath", {
            id: "clipPath-".concat(MR)
          }, yR.createElement("rect", {
            x: AR ? iR : iR - wR / 2,
            y: CR ? KR : KR - eR / 2,
            width: AR ? wR : 2 * wR,
            height: CR ? eR : 2 * eR
          }))) : null, yR.createElement(VR.c, {
            className: "recharts-bar-rectangles",
            clipPath: XR ? "url(#clipPath-".concat(MR, ")") : null
          }, LR ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(XR, MR), (!aR || UR) && rR.e.renderCallByParent(this.props, GR))
        }
      }], iR = [{
        key: "getDerivedStateFromProps",
        value: function(RR, JR) {
          return RR.animationId !== JR.prevAnimationId ? {
            prevAnimationId: RR.animationId,
            curData: RR.data,
            prevData: JR.curData
          } : RR.data !== JR.curData ? {
            curData: RR.data
          } : null
        }
      }], ZR && PR(GR.prototype, ZR), iR && PR(GR, iR), Object.defineProperty(GR, "prototype", {
        writable: !1
      }), GR;
      var GR, ZR, iR
    }(yR.PureComponent);
    OR = ER, jR(ER, "displayName", "Bar"), jR(ER, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      legendType: "rect",
      minPointSize: 0,
      hide: !1,
      data: [],
      layout: "vertical",
      activeBar: !1,
      isAnimationActive: !LR.d.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "ease"
    }), jR(ER, "getComposedData", (function(RR) {
      var JR = RR.props,
        GR = RR.item,
        yR = RR.barPosition,
        tR = RR.bandSize,
        uR = RR.xAxis,
        ZR = RR.yAxis,
        qR = RR.xAxisTicks,
        iR = RR.yAxisTicks,
        fR = RR.stackedData,
        VR = RR.dataStartIndex,
        KR = RR.displayedData,
        rR = RR.offset,
        LR = (0, nR.q)(yR, GR);
      if (!LR) return null;
      var UR = JR.layout,
        AR = GR.type.defaultProps,
        CR = void 0 !== AR ? cR(cR({}, AR), GR.props) : GR.props,
        XR = CR.dataKey,
        MR = CR.children,
        BR = CR.minPointSize,
        lR = "horizontal" === UR ? ZR : uR,
        pR = fR ? lR.scale.domain() : null,
        gR = (0, nR.x)({
          numericAxis: lR
        }),
        bR = (0, aR.i)(MR, wR.b),
        vR = KR.map((function(RR, JR) {
          var yR, KR, wR, rR, aR, AR;
          fR ? yR = (0, nR.ub)(fR[VR + JR], pR) : (yR = (0, nR.hb)(RR, XR), Array.isArray(yR) || (yR = [gR, yR]));
          var CR = function(RR) {
            var JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return function(GR, yR) {
              if ("number" === typeof RR) return RR;
              var tR = (0, eR.C)(GR) || (0, eR.y)(GR);
              return tR ? RR(GR, yR) : (tR || (0, WR.e)(!1), JR)
            }
          }(BR, OR.defaultProps.minPointSize)(yR[1], JR);
          if ("horizontal" === UR) {
            var MR, lR = [ZR.scale(yR[0]), ZR.scale(yR[1])],
              vR = lR[0],
              xR = lR[1];
            KR = (0, nR.z)({
              axis: uR,
              ticks: qR,
              bandSize: tR,
              offset: LR.offset,
              entry: RR,
              index: JR
            }), wR = null !== (MR = null !== xR && void 0 !== xR ? xR : vR) && void 0 !== MR ? MR : void 0, rR = LR.size;
            var NR = vR - xR;
            if (aR = Number.isNaN(NR) ? 0 : NR, AR = {
                x: KR,
                y: ZR.y,
                width: rR,
                height: ZR.height
              }, Math.abs(CR) > 0 && Math.abs(aR) < Math.abs(CR)) {
              var DR = (0, eR.I)(aR || CR) * (Math.abs(CR) - Math.abs(aR));
              wR -= DR, aR += DR
            }
          } else {
            var HR = [uR.scale(yR[0]), uR.scale(yR[1])],
              oR = HR[0],
              PR = HR[1];
            if (KR = oR, wR = (0, nR.z)({
                axis: ZR,
                ticks: iR,
                bandSize: tR,
                offset: LR.offset,
                entry: RR,
                index: JR
              }), rR = PR - oR, aR = LR.size, AR = {
                x: uR.x,
                y: wR,
                width: uR.width,
                height: aR
              }, Math.abs(CR) > 0 && Math.abs(rR) < Math.abs(CR)) rR += (0, eR.I)(rR || CR) * (Math.abs(CR) - Math.abs(rR))
          }
          return cR(cR(cR({}, RR), {}, {
            x: KR,
            y: wR,
            width: rR,
            height: aR,
            value: fR ? yR : yR[1],
            payload: RR,
            background: AR
          }, bR && bR[JR] && bR[JR].props), {}, {
            tooltipPayload: [(0, nR.fb)(GR, RR)],
            tooltipPosition: {
              x: KR + rR / 2,
              y: wR + aR / 2
            }
          })
        }));
      return cR({
        data: vR,
        layout: UR
      }, rR)
    }))
  },
  7495: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => NR
    });
    var yR = GR(66),
      tR = GR(6357),
      uR = GR.n(tR),
      ZR = GR(6262),
      qR = GR.n(ZR),
      iR = GR(6140),
      fR = GR(6539),
      VR = GR(7037),
      KR = GR(7181),
      wR = GR(7301),
      rR = GR(6235),
      eR = GR(6542),
      aR = GR(6523),
      LR = GR(7501),
      nR = ["viewBox"],
      UR = ["viewBox"],
      WR = ["ticks"];

    function AR(RR) {
      return AR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, AR(RR)
    }

    function CR() {
      return CR = Object.assign ? Object.assign.bind() : function(RR) {
        for (var JR = 1; JR < arguments.length; JR++) {
          var GR = arguments[JR];
          for (var yR in GR) Object.prototype.hasOwnProperty.call(GR, yR) && (RR[yR] = GR[yR])
        }
        return RR
      }, CR.apply(this, arguments)
    }

    function XR(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function MR(RR) {
      for (var JR = 1; JR < arguments.length; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? XR(Object(GR), !0).forEach((function(JR) {
          OR(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : XR(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }

    function BR(RR, JR) {
      if (null == RR) return {};
      var GR, yR, tR = function(RR, JR) {
        if (null == RR) return {};
        var GR = {};
        for (var yR in RR)
          if (Object.prototype.hasOwnProperty.call(RR, yR)) {
            if (JR.indexOf(yR) >= 0) continue;
            GR[yR] = RR[yR]
          } return GR
      }(RR, JR);
      if (Object.getOwnPropertySymbols) {
        var uR = Object.getOwnPropertySymbols(RR);
        for (yR = 0; yR < uR.length; yR++) GR = uR[yR], JR.indexOf(GR) >= 0 || Object.prototype.propertyIsEnumerable.call(RR, GR) && (tR[GR] = RR[GR])
      }
      return tR
    }

    function lR(RR, JR) {
      for (var GR = 0; GR < JR.length; GR++) {
        var yR = JR[GR];
        yR.enumerable = yR.enumerable || !1, yR.configurable = !0, "value" in yR && (yR.writable = !0), Object.defineProperty(RR, xR(yR.key), yR)
      }
    }

    function pR(RR, JR, GR) {
      return JR = bR(JR),
        function(RR, JR) {
          if (JR && ("object" === AR(JR) || "function" === typeof JR)) return JR;
          if (void 0 !== JR) throw new TypeError("Derived constructors may only return object or undefined");
          return function(RR) {
            if (void 0 === RR) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return RR
          }(RR)
        }(RR, gR() ? Reflect.construct(JR, GR || [], bR(RR).constructor) : JR.apply(RR, GR))
    }

    function gR() {
      try {
        var RR = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (RR) {}
      return (gR = function() {
        return !!RR
      })()
    }

    function bR(RR) {
      return bR = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(RR) {
        return RR.__proto__ || Object.getPrototypeOf(RR)
      }, bR(RR)
    }

    function vR(RR, JR) {
      return vR = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(RR, JR) {
        return RR.__proto__ = JR, RR
      }, vR(RR, JR)
    }

    function OR(RR, JR, GR) {
      return (JR = xR(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }

    function xR(RR) {
      var JR = function(RR, JR) {
        if ("object" != AR(RR) || !RR) return RR;
        var GR = RR[Symbol.toPrimitive];
        if (void 0 !== GR) {
          var yR = GR.call(RR, JR || "default");
          if ("object" != AR(yR)) return yR;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === JR ? String : Number)(RR)
      }(RR, "string");
      return "symbol" == AR(JR) ? JR : JR + ""
    }
    var NR = function(RR) {
      function JR(RR) {
        var GR;
        return function(RR, JR) {
          if (!(RR instanceof JR)) throw new TypeError("Cannot call a class as a function")
        }(this, JR), (GR = pR(this, JR, [RR])).state = {
          fontSize: "",
          letterSpacing: ""
        }, GR
      }
      return function(RR, JR) {
        if ("function" !== typeof JR && null !== JR) throw new TypeError("Super expression must either be null or a function");
        RR.prototype = Object.create(JR && JR.prototype, {
          constructor: {
            value: RR,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(RR, "prototype", {
          writable: !1
        }), JR && vR(RR, JR)
      }(JR, RR), GR = JR, ZR = [{
        key: "renderTickItem",
        value: function(RR, JR, GR) {
          var tR = (0, iR.c)(JR.className, "recharts-cartesian-axis-tick-value");
          return yR.isValidElement(RR) ? yR.cloneElement(RR, MR(MR({}, JR), {}, {
            className: tR
          })) : uR()(RR) ? RR(MR(MR({}, JR), {}, {
            className: tR
          })) : yR.createElement(KR.d, CR({}, JR, {
            className: "recharts-cartesian-axis-tick-value"
          }), GR)
        }
      }], (tR = [{
        key: "shouldComponentUpdate",
        value: function(RR, JR) {
          var GR = RR.viewBox,
            yR = BR(RR, nR),
            tR = this.props,
            uR = tR.viewBox,
            ZR = BR(tR, UR);
          return !(0, fR.c)(GR, uR) || !(0, fR.c)(yR, ZR) || !(0, fR.c)(JR, this.state)
        }
      }, {
        key: "componentDidMount",
        value: function() {
          var RR = this.layerReference;
          if (RR) {
            var JR = RR.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
            JR && this.setState({
              fontSize: window.getComputedStyle(JR).fontSize,
              letterSpacing: window.getComputedStyle(JR).letterSpacing
            })
          }
        }
      }, {
        key: "getTickLineCoord",
        value: function(RR) {
          var JR, GR, yR, tR, uR, ZR, qR = this.props,
            iR = qR.x,
            fR = qR.y,
            VR = qR.width,
            KR = qR.height,
            wR = qR.orientation,
            eR = qR.tickSize,
            aR = qR.mirror,
            LR = qR.tickMargin,
            nR = aR ? -1 : 1,
            UR = RR.tickSize || eR,
            WR = (0, rR.C)(RR.tickCoord) ? RR.tickCoord : RR.coordinate;
          switch (wR) {
            case "top":
              JR = GR = RR.coordinate, ZR = (yR = (tR = fR + +!aR * KR) - nR * UR) - nR * LR, uR = WR;
              break;
            case "left":
              yR = tR = RR.coordinate, uR = (JR = (GR = iR + +!aR * VR) - nR * UR) - nR * LR, ZR = WR;
              break;
            case "right":
              yR = tR = RR.coordinate, uR = (JR = (GR = iR + +aR * VR) + nR * UR) + nR * LR, ZR = WR;
              break;
            default:
              JR = GR = RR.coordinate, ZR = (yR = (tR = fR + +aR * KR) + nR * UR) + nR * LR, uR = WR
          }
          return {
            line: {
              x1: JR,
              y1: yR,
              x2: GR,
              y2: tR
            },
            gK: {
              x: uR,
              y: ZR
            }
          }
        }
      }, {
        key: "getTickTextAnchor",
        value: function() {
          var RR, JR = this.props,
            GR = JR.orientation,
            yR = JR.mirror;
          switch (GR) {
            case "left":
              RR = yR ? "start" : "end";
              break;
            case "right":
              RR = yR ? "end" : "start";
              break;
            default:
              RR = "middle"
          }
          return RR
        }
      }, {
        key: "getTickVerticalAnchor",
        value: function() {
          var RR = this.props,
            JR = RR.orientation,
            GR = RR.mirror,
            yR = "end";
          switch (JR) {
            case "left":
            case "right":
              yR = "middle";
              break;
            case "top":
              yR = GR ? "start" : "end";
              break;
            default:
              yR = GR ? "end" : "start"
          }
          return yR
        }
      }, {
        key: "renderAxisLine",
        value: function() {
          var RR = this.props,
            JR = RR.x,
            GR = RR.y,
            tR = RR.width,
            uR = RR.height,
            ZR = RR.orientation,
            fR = RR.mirror,
            VR = RR.axisLine,
            KR = MR(MR(MR({}, (0, aR.e)(this.props, !1)), (0, aR.e)(VR, !1)), {}, {
              fill: "none"
            });
          if ("top" === ZR || "bottom" === ZR) {
            var wR = +("top" === ZR && !fR || "bottom" === ZR && fR);
            KR = MR(MR({}, KR), {}, {
              x1: JR,
              y1: GR + wR * uR,
              x2: JR + tR,
              y2: GR + wR * uR
            })
          } else {
            var rR = +("left" === ZR && !fR || "right" === ZR && fR);
            KR = MR(MR({}, KR), {}, {
              x1: JR + rR * tR,
              y1: GR,
              x2: JR + rR * tR,
              y2: GR + uR
            })
          }
          return yR.createElement("line", CR({}, KR, {
            className: (0, iR.c)("recharts-cartesian-axis-line", qR()(VR, "className"))
          }))
        }
      }, {
        key: "renderTicks",
        value: function(RR, GR, tR) {
          var ZR = this,
            fR = this.props,
            KR = fR.tickLine,
            wR = fR.stroke,
            rR = fR.gK,
            nR = fR.tickFormatter,
            UR = fR.unit,
            WR = (0, LR.c)(MR(MR({}, this.props), {}, {
              ticks: RR
            }), GR, tR),
            AR = this.getTickTextAnchor(),
            XR = this.getTickVerticalAnchor(),
            BR = (0, aR.e)(this.props, !1),
            lR = (0, aR.e)(rR, !1),
            pR = MR(MR({}, BR), {}, {
              fill: "none"
            }, (0, aR.e)(KR, !1)),
            gR = WR.map((function(RR, GR) {
              var tR = ZR.getTickLineCoord(RR),
                fR = tR.line,
                aR = tR.gK,
                LR = MR(MR(MR(MR({
                  textAnchor: AR,
                  verticalAnchor: XR
                }, BR), {}, {
                  stroke: "none",
                  fill: wR
                }, lR), aR), {}, {
                  index: GR,
                  payload: RR,
                  visibleTicksCount: WR.length,
                  tickFormatter: nR
                });
              return yR.createElement(VR.c, CR({
                className: "recharts-cartesian-axis-tick",
                key: "tick-".concat(RR.value, "-").concat(RR.coordinate, "-").concat(RR.tickCoord)
              }, (0, eR.g)(ZR.props, RR, GR)), KR && yR.createElement("line", CR({}, pR, fR, {
                className: (0, iR.c)("recharts-cartesian-axis-tick-line", qR()(KR, "className"))
              })), rR && JR.renderTickItem(rR, LR, "".concat(uR()(nR) ? nR(RR.value, GR) : RR.value).concat(UR || "")))
            }));
          return yR.createElement("g", {
            className: "recharts-cartesian-axis-ticks"
          }, gR)
        }
      }, {
        key: "render",
        value: function() {
          var RR = this,
            JR = this.props,
            GR = JR.axisLine,
            tR = JR.width,
            ZR = JR.height,
            qR = JR.ticksGenerator,
            fR = JR.className;
          if (JR.hide) return null;
          var KR = this.props,
            rR = KR.ticks,
            eR = BR(KR, WR),
            aR = rR;
          return uR()(qR) && (aR = rR && rR.length > 0 ? qR(this.props) : qR(eR)), tR <= 0 || ZR <= 0 || !aR || !aR.length ? null : yR.createElement(VR.c, {
            className: (0, iR.c)("recharts-cartesian-axis", fR),
            ref: function(JR) {
              RR.layerReference = JR
            }
          }, GR && this.renderAxisLine(), this.renderTicks(aR, this.state.fontSize, this.state.letterSpacing), wR.b.renderCallByParent(this.props))
        }
      }]) && lR(GR.prototype, tR), ZR && lR(GR, ZR), Object.defineProperty(GR, "prototype", {
        writable: !1
      }), GR;
      var GR, tR, ZR
    }(yR.Component);
    OR(NR, "displayName", "CartesianAxis"), OR(NR, "defaultProps", {
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
      gK: !0,
      mirror: !1,
      minTickGap: 5,
      tickSize: 6,
      tickMargin: 2,
      interval: "preserveEnd"
    })
  },
  7513: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => OR
    });
    var yR = GR(66),
      tR = GR(6357),
      uR = GR.n(tR),
      ZR = GR(6520),
      qR = GR(6235),
      iR = GR(6523),
      fR = GR(7192),
      VR = GR(7501),
      KR = GR(7495),
      wR = GR(7436),
      rR = ["x1", "y1", "x2", "y2", "key"],
      eR = ["offset"];

    function aR(RR) {
      return aR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, aR(RR)
    }

    function LR(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function nR(RR) {
      for (var JR = 1; JR < arguments.length; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? LR(Object(GR), !0).forEach((function(JR) {
          UR(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : LR(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }

    function UR(RR, JR, GR) {
      return (JR = function(RR) {
        var JR = function(RR, JR) {
          if ("object" != aR(RR) || !RR) return RR;
          var GR = RR[Symbol.toPrimitive];
          if (void 0 !== GR) {
            var yR = GR.call(RR, JR || "default");
            if ("object" != aR(yR)) return yR;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === JR ? String : Number)(RR)
        }(RR, "string");
        return "symbol" == aR(JR) ? JR : JR + ""
      }(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }

    function WR() {
      return WR = Object.assign ? Object.assign.bind() : function(RR) {
        for (var JR = 1; JR < arguments.length; JR++) {
          var GR = arguments[JR];
          for (var yR in GR) Object.prototype.hasOwnProperty.call(GR, yR) && (RR[yR] = GR[yR])
        }
        return RR
      }, WR.apply(this, arguments)
    }

    function AR(RR, JR) {
      if (null == RR) return {};
      var GR, yR, tR = function(RR, JR) {
        if (null == RR) return {};
        var GR = {};
        for (var yR in RR)
          if (Object.prototype.hasOwnProperty.call(RR, yR)) {
            if (JR.indexOf(yR) >= 0) continue;
            GR[yR] = RR[yR]
          } return GR
      }(RR, JR);
      if (Object.getOwnPropertySymbols) {
        var uR = Object.getOwnPropertySymbols(RR);
        for (yR = 0; yR < uR.length; yR++) GR = uR[yR], JR.indexOf(GR) >= 0 || Object.prototype.propertyIsEnumerable.call(RR, GR) && (tR[GR] = RR[GR])
      }
      return tR
    }
    var CR = function(RR) {
      var JR = RR.fill;
      if (!JR || "none" === JR) return null;
      var GR = RR.fillOpacity,
        tR = RR.x,
        uR = RR.y,
        ZR = RR.width,
        qR = RR.height,
        iR = RR.ry;
      return yR.createElement("rect", {
        x: tR,
        y: uR,
        ry: iR,
        width: ZR,
        height: qR,
        stroke: "none",
        fill: JR,
        fillOpacity: GR,
        className: "recharts-cartesian-grid-bg"
      })
    };

    function XR(RR, JR) {
      var GR;
      if (yR.isValidElement(RR)) GR = yR.cloneElement(RR, JR);
      else if (uR()(RR)) GR = RR(JR);
      else {
        var tR = JR.x1,
          ZR = JR.y1,
          qR = JR.x2,
          fR = JR.y2,
          VR = JR.key,
          KR = AR(JR, rR),
          wR = (0, iR.e)(KR, !1),
          aR = (wR.offset, AR(wR, eR));
        GR = yR.createElement("line", WR({}, aR, {
          x1: tR,
          y1: ZR,
          x2: qR,
          y2: fR,
          fill: "none",
          key: VR
        }))
      }
      return GR
    }

    function MR(RR) {
      var JR = RR.x,
        GR = RR.width,
        tR = RR.horizontal,
        uR = void 0 === tR || tR,
        ZR = RR.horizontalPoints;
      if (!uR || !ZR || !ZR.length) return null;
      var qR = ZR.map((function(yR, tR) {
        var ZR = nR(nR({}, RR), {}, {
          x1: JR,
          y1: yR,
          x2: JR + GR,
          y2: yR,
          key: "line-".concat(tR),
          index: tR
        });
        return XR(uR, ZR)
      }));
      return yR.createElement("g", {
        className: "recharts-cartesian-grid-horizontal"
      }, qR)
    }

    function BR(RR) {
      var JR = RR.y,
        GR = RR.height,
        tR = RR.vertical,
        uR = void 0 === tR || tR,
        ZR = RR.verticalPoints;
      if (!uR || !ZR || !ZR.length) return null;
      var qR = ZR.map((function(yR, tR) {
        var ZR = nR(nR({}, RR), {}, {
          x1: yR,
          y1: JR,
          x2: yR,
          y2: JR + GR,
          key: "line-".concat(tR),
          index: tR
        });
        return XR(uR, ZR)
      }));
      return yR.createElement("g", {
        className: "recharts-cartesian-grid-vertical"
      }, qR)
    }

    function lR(RR) {
      var JR = RR.horizontalFill,
        GR = RR.fillOpacity,
        tR = RR.x,
        uR = RR.y,
        ZR = RR.width,
        qR = RR.height,
        iR = RR.horizontalPoints,
        fR = RR.horizontal;
      if (!(void 0 === fR || fR) || !JR || !JR.length) return null;
      var VR = iR.map((function(RR) {
        return Math.round(RR + uR - uR)
      })).sort((function(RR, JR) {
        return RR - JR
      }));
      uR !== VR[0] && VR.unshift(0);
      var KR = VR.map((function(RR, iR) {
        var fR = !VR[iR + 1] ? uR + qR - RR : VR[iR + 1] - RR;
        if (fR <= 0) return null;
        var KR = iR % JR.length;
        return yR.createElement("rect", {
          key: "react-".concat(iR),
          y: RR,
          x: tR,
          height: fR,
          width: ZR,
          stroke: "none",
          fill: JR[KR],
          fillOpacity: GR,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return yR.createElement("g", {
        className: "recharts-cartesian-gridstripes-horizontal"
      }, KR)
    }

    function pR(RR) {
      var JR = RR.vertical,
        GR = void 0 === JR || JR,
        tR = RR.verticalFill,
        uR = RR.fillOpacity,
        ZR = RR.x,
        qR = RR.y,
        iR = RR.width,
        fR = RR.height,
        VR = RR.verticalPoints;
      if (!GR || !tR || !tR.length) return null;
      var KR = VR.map((function(RR) {
        return Math.round(RR + ZR - ZR)
      })).sort((function(RR, JR) {
        return RR - JR
      }));
      ZR !== KR[0] && KR.unshift(0);
      var wR = KR.map((function(RR, JR) {
        var GR = !KR[JR + 1] ? ZR + iR - RR : KR[JR + 1] - RR;
        if (GR <= 0) return null;
        var VR = JR % tR.length;
        return yR.createElement("rect", {
          key: "react-".concat(JR),
          x: RR,
          y: qR,
          width: GR,
          height: fR,
          stroke: "none",
          fill: tR[VR],
          fillOpacity: uR,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return yR.createElement("g", {
        className: "recharts-cartesian-gridstripes-vertical"
      }, wR)
    }
    var gR = function(RR, JR) {
        var GR = RR.xAxis,
          yR = RR.width,
          tR = RR.height,
          uR = RR.offset;
        return (0, fR.H)((0, VR.c)(nR(nR(nR({}, KR.d.defaultProps), GR), {}, {
          ticks: (0, fR.ab)(GR, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: yR,
            height: tR
          }
        })), uR.left, uR.left + uR.width, JR)
      },
      bR = function(RR, JR) {
        var GR = RR.yAxis,
          yR = RR.width,
          tR = RR.height,
          uR = RR.offset;
        return (0, fR.H)((0, VR.c)(nR(nR(nR({}, KR.d.defaultProps), GR), {}, {
          ticks: (0, fR.ab)(GR, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: yR,
            height: tR
          }
        })), uR.top, uR.top + uR.height, JR)
      },
      vR = {
        horizontal: !0,
        vertical: !0,
        horizontalPoints: [],
        verticalPoints: [],
        stroke: "#ccc",
        fill: "none",
        verticalFill: [],
        horizontalFill: []
      };

    function OR(RR) {
      var JR, GR, tR, iR, fR, VR, KR = (0, wR.i)(),
        rR = (0, wR.h)(),
        eR = (0, wR.m)(),
        LR = nR(nR({}, RR), {}, {
          stroke: null !== (JR = RR.stroke) && void 0 !== JR ? JR : vR.stroke,
          fill: null !== (GR = RR.fill) && void 0 !== GR ? GR : vR.fill,
          horizontal: null !== (tR = RR.horizontal) && void 0 !== tR ? tR : vR.horizontal,
          horizontalFill: null !== (iR = RR.horizontalFill) && void 0 !== iR ? iR : vR.horizontalFill,
          vertical: null !== (fR = RR.vertical) && void 0 !== fR ? fR : vR.vertical,
          verticalFill: null !== (VR = RR.verticalFill) && void 0 !== VR ? VR : vR.verticalFill,
          x: (0, qR.C)(RR.x) ? RR.x : eR.left,
          y: (0, qR.C)(RR.y) ? RR.y : eR.top,
          width: (0, qR.C)(RR.width) ? RR.width : eR.width,
          height: (0, qR.C)(RR.height) ? RR.height : eR.height
        }),
        UR = LR.x,
        AR = LR.y,
        XR = LR.width,
        OR = LR.height,
        xR = LR.syncWithTicks,
        NR = LR.horizontalValues,
        DR = LR.verticalValues,
        HR = (0, wR.e)(),
        oR = (0, wR.t)();
      if (!(0, qR.C)(XR) || XR <= 0 || !(0, qR.C)(OR) || OR <= 0 || !(0, qR.C)(UR) || UR !== +UR || !(0, qR.C)(AR) || AR !== +AR) return null;
      var cR = LR.verticalCoordinatesGenerator || gR,
        PR = LR.horizontalCoordinatesGenerator || bR,
        IR = LR.horizontalPoints,
        mR = LR.verticalPoints;
      if ((!IR || !IR.length) && uR()(PR)) {
        var zR = NR && NR.length,
          SR = PR({
            yAxis: oR ? nR(nR({}, oR), {}, {
              ticks: zR ? NR : oR.ticks
            }) : void 0,
            width: KR,
            height: rR,
            offset: eR
          }, !!zR || xR);
        (0, ZR.c)(Array.isArray(SR), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(aR(SR), "]")), Array.isArray(SR) && (IR = SR)
      }
      if ((!mR || !mR.length) && uR()(cR)) {
        var jR = DR && DR.length,
          dR = cR({
            xAxis: HR ? nR(nR({}, HR), {}, {
              ticks: jR ? DR : HR.ticks
            }) : void 0,
            width: KR,
            height: rR,
            offset: eR
          }, !!jR || xR);
        (0, ZR.c)(Array.isArray(dR), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(aR(dR), "]")), Array.isArray(dR) && (mR = dR)
      }
      return yR.createElement("g", {
        className: "recharts-cartesian-grid"
      }, yR.createElement(CR, {
        fill: LR.fill,
        fillOpacity: LR.fillOpacity,
        x: LR.x,
        y: LR.y,
        width: LR.width,
        height: LR.height,
        ry: LR.ry
      }), yR.createElement(MR, WR({}, LR, {
        offset: eR,
        horizontalPoints: IR,
        xAxis: HR,
        yAxis: oR
      })), yR.createElement(BR, WR({}, LR, {
        offset: eR,
        verticalPoints: mR,
        xAxis: HR,
        yAxis: oR
      })), yR.createElement(lR, WR({}, LR, {
        horizontalPoints: IR
      })), yR.createElement(pR, WR({}, LR, {
        verticalPoints: mR
      })))
    }
    OR.displayName = "CartesianGrid"
  },
  7285: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => AR
    });
    var yR = GR(66),
      tR = GR(7026),
      uR = GR(7037),
      ZR = GR(6523),
      qR = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];

    function iR(RR) {
      return iR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, iR(RR)
    }

    function fR() {
      return fR = Object.assign ? Object.assign.bind() : function(RR) {
        for (var JR = 1; JR < arguments.length; JR++) {
          var GR = arguments[JR];
          for (var yR in GR) Object.prototype.hasOwnProperty.call(GR, yR) && (RR[yR] = GR[yR])
        }
        return RR
      }, fR.apply(this, arguments)
    }

    function VR(RR, JR) {
      return function(RR) {
        if (Array.isArray(RR)) return RR
      }(RR) || function(RR, JR) {
        var GR = null == RR ? null : "undefined" != typeof Symbol && RR[Symbol.iterator] || RR["@@iterator"];
        if (null != GR) {
          var yR, tR, uR, ZR, qR = [],
            iR = !0,
            fR = !1;
          try {
            if (uR = (GR = GR.call(RR)).next, 0 === JR) {
              if (Object(GR) !== GR) return;
              iR = !1
            } else
              for (; !(iR = (yR = uR.call(GR)).done) && (qR.push(yR.value), qR.length !== JR); iR = !0);
          } catch (RR) {
            fR = !0, tR = RR
          } finally {
            try {
              if (!iR && null != GR.return && (ZR = GR.return(), Object(ZR) !== ZR)) return
            } finally {
              if (fR) throw tR
            }
          }
          return qR
        }
      }(RR, JR) || function(RR, JR) {
        if (!RR) return;
        if ("string" === typeof RR) return KR(RR, JR);
        var GR = Object.prototype.toString.call(RR).slice(8, -1);
        "Object" === GR && RR.constructor && (GR = RR.constructor.name);
        if ("Map" === GR || "Set" === GR) return Array.from(RR);
        if ("Arguments" === GR || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GR)) return KR(RR, JR)
      }(RR, JR) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function KR(RR, JR) {
      (null == JR || JR > RR.length) && (JR = RR.length);
      for (var GR = 0, yR = new Array(JR); GR < JR; GR++) yR[GR] = RR[GR];
      return yR
    }

    function wR(RR, JR) {
      if (null == RR) return {};
      var GR, yR, tR = function(RR, JR) {
        if (null == RR) return {};
        var GR = {};
        for (var yR in RR)
          if (Object.prototype.hasOwnProperty.call(RR, yR)) {
            if (JR.indexOf(yR) >= 0) continue;
            GR[yR] = RR[yR]
          } return GR
      }(RR, JR);
      if (Object.getOwnPropertySymbols) {
        var uR = Object.getOwnPropertySymbols(RR);
        for (yR = 0; yR < uR.length; yR++) GR = uR[yR], JR.indexOf(GR) >= 0 || Object.prototype.propertyIsEnumerable.call(RR, GR) && (tR[GR] = RR[GR])
      }
      return tR
    }

    function rR(RR, JR) {
      for (var GR = 0; GR < JR.length; GR++) {
        var yR = JR[GR];
        yR.enumerable = yR.enumerable || !1, yR.configurable = !0, "value" in yR && (yR.writable = !0), Object.defineProperty(RR, WR(yR.key), yR)
      }
    }

    function eR(RR, JR, GR) {
      return JR = LR(JR),
        function(RR, JR) {
          if (JR && ("object" === iR(JR) || "function" === typeof JR)) return JR;
          if (void 0 !== JR) throw new TypeError("Derived constructors may only return object or undefined");
          return function(RR) {
            if (void 0 === RR) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return RR
          }(RR)
        }(RR, aR() ? Reflect.construct(JR, GR || [], LR(RR).constructor) : JR.apply(RR, GR))
    }

    function aR() {
      try {
        var RR = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (RR) {}
      return (aR = function() {
        return !!RR
      })()
    }

    function LR(RR) {
      return LR = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(RR) {
        return RR.__proto__ || Object.getPrototypeOf(RR)
      }, LR(RR)
    }

    function nR(RR, JR) {
      return nR = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(RR, JR) {
        return RR.__proto__ = JR, RR
      }, nR(RR, JR)
    }

    function UR(RR, JR, GR) {
      return (JR = WR(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }

    function WR(RR) {
      var JR = function(RR, JR) {
        if ("object" != iR(RR) || !RR) return RR;
        var GR = RR[Symbol.toPrimitive];
        if (void 0 !== GR) {
          var yR = GR.call(RR, JR || "default");
          if ("object" != iR(yR)) return yR;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === JR ? String : Number)(RR)
      }(RR, "string");
      return "symbol" == iR(JR) ? JR : JR + ""
    }
    var AR = function(RR) {
      function JR() {
        return function(RR, JR) {
          if (!(RR instanceof JR)) throw new TypeError("Cannot call a class as a function")
        }(this, JR), eR(this, JR, arguments)
      }
      return function(RR, JR) {
        if ("function" !== typeof JR && null !== JR) throw new TypeError("Super expression must either be null or a function");
        RR.prototype = Object.create(JR && JR.prototype, {
          constructor: {
            value: RR,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(RR, "prototype", {
          writable: !1
        }), JR && nR(RR, JR)
      }(JR, RR), GR = JR, (iR = [{
        key: "render",
        value: function() {
          var RR = this.props,
            JR = RR.offset,
            GR = RR.layout,
            iR = RR.width,
            KR = RR.dataKey,
            rR = RR.data,
            eR = RR.dataPointFormatter,
            aR = RR.xAxis,
            LR = RR.yAxis,
            nR = wR(RR, qR),
            UR = (0, ZR.e)(nR, !1);
          "x" === this.props.direction && "number" !== aR.type && (0, tR.e)(!1);
          var WR = rR.map((function(RR) {
            var tR = eR(RR, KR),
              ZR = tR.x,
              qR = tR.y,
              wR = tR.value,
              rR = tR.errorVal;
            if (!rR) return null;
            var nR, WR, AR = [];
            if (Array.isArray(rR)) {
              var CR = VR(rR, 2);
              nR = CR[0], WR = CR[1]
            } else nR = WR = rR;
            if ("vertical" === GR) {
              var XR = aR.scale,
                MR = qR + JR,
                BR = MR + iR,
                lR = MR - iR,
                pR = XR(wR - nR),
                gR = XR(wR + WR);
              AR.push({
                x1: gR,
                y1: BR,
                x2: gR,
                y2: lR
              }), AR.push({
                x1: pR,
                y1: MR,
                x2: gR,
                y2: MR
              }), AR.push({
                x1: pR,
                y1: BR,
                x2: pR,
                y2: lR
              })
            } else if ("horizontal" === GR) {
              var bR = LR.scale,
                vR = ZR + JR,
                OR = vR - iR,
                xR = vR + iR,
                NR = bR(wR - nR),
                DR = bR(wR + WR);
              AR.push({
                x1: OR,
                y1: DR,
                x2: xR,
                y2: DR
              }), AR.push({
                x1: vR,
                y1: NR,
                x2: vR,
                y2: DR
              }), AR.push({
                x1: OR,
                y1: NR,
                x2: xR,
                y2: NR
              })
            }
            return yR.createElement(uR.c, fR({
              className: "recharts-errorBar",
              key: "bar-".concat(AR.map((function(RR) {
                return "".concat(RR.x1, "-").concat(RR.x2, "-").concat(RR.y1, "-").concat(RR.y2)
              })))
            }, UR), AR.map((function(RR) {
              return yR.createElement("line", fR({}, RR, {
                key: "line-".concat(RR.x1, "-").concat(RR.x2, "-").concat(RR.y1, "-").concat(RR.y2)
              }))
            })))
          }));
          return yR.createElement(uR.c, {
            className: "recharts-errorBars"
          }, WR)
        }
      }]) && rR(GR.prototype, iR), KR && rR(GR, KR), Object.defineProperty(GR, "prototype", {
        writable: !1
      }), GR;
      var GR, iR, KR
    }(yR.Component);
    UR(AR, "defaultProps", {
      stroke: "black",
      strokeWidth: 1.5,
      width: 5,
      offset: 0,
      layout: "horizontal"
    }), UR(AR, "displayName", "ErrorBar")
  },
  7484: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => PR
    });
    var yR = GR(66),
      tR = GR(7179),
      uR = GR(6357),
      ZR = GR.n(uR),
      qR = GR(6516),
      iR = GR.n(qR),
      fR = GR(7269),
      VR = GR.n(fR),
      KR = GR(6140),
      wR = GR(7471),
      rR = GR(7172),
      eR = GR(7037),
      aR = GR(7365),
      LR = GR(7285),
      nR = GR(6235),
      UR = GR(6523),
      WR = GR(7047),
      AR = GR(7192),
      CR = ["type", "layout", "connectNulls", "ref"],
      XR = ["key"];

    function MR(RR) {
      return MR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, MR(RR)
    }

    function BR(RR, JR) {
      if (null == RR) return {};
      var GR, yR, tR = function(RR, JR) {
        if (null == RR) return {};
        var GR = {};
        for (var yR in RR)
          if (Object.prototype.hasOwnProperty.call(RR, yR)) {
            if (JR.indexOf(yR) >= 0) continue;
            GR[yR] = RR[yR]
          } return GR
      }(RR, JR);
      if (Object.getOwnPropertySymbols) {
        var uR = Object.getOwnPropertySymbols(RR);
        for (yR = 0; yR < uR.length; yR++) GR = uR[yR], JR.indexOf(GR) >= 0 || Object.prototype.propertyIsEnumerable.call(RR, GR) && (tR[GR] = RR[GR])
      }
      return tR
    }

    function lR() {
      return lR = Object.assign ? Object.assign.bind() : function(RR) {
        for (var JR = 1; JR < arguments.length; JR++) {
          var GR = arguments[JR];
          for (var yR in GR) Object.prototype.hasOwnProperty.call(GR, yR) && (RR[yR] = GR[yR])
        }
        return RR
      }, lR.apply(this, arguments)
    }

    function pR(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function gR(RR) {
      for (var JR = 1; JR < arguments.length; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? pR(Object(GR), !0).forEach((function(JR) {
          oR(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : pR(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }

    function bR(RR) {
      return function(RR) {
        if (Array.isArray(RR)) return vR(RR)
      }(RR) || function(RR) {
        if ("undefined" !== typeof Symbol && null != RR[Symbol.iterator] || null != RR["@@iterator"]) return Array.from(RR)
      }(RR) || function(RR, JR) {
        if (!RR) return;
        if ("string" === typeof RR) return vR(RR, JR);
        var GR = Object.prototype.toString.call(RR).slice(8, -1);
        "Object" === GR && RR.constructor && (GR = RR.constructor.name);
        if ("Map" === GR || "Set" === GR) return Array.from(RR);
        if ("Arguments" === GR || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GR)) return vR(RR, JR)
      }(RR) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function vR(RR, JR) {
      (null == JR || JR > RR.length) && (JR = RR.length);
      for (var GR = 0, yR = new Array(JR); GR < JR; GR++) yR[GR] = RR[GR];
      return yR
    }

    function OR(RR, JR) {
      for (var GR = 0; GR < JR.length; GR++) {
        var yR = JR[GR];
        yR.enumerable = yR.enumerable || !1, yR.configurable = !0, "value" in yR && (yR.writable = !0), Object.defineProperty(RR, cR(yR.key), yR)
      }
    }

    function xR(RR, JR, GR) {
      return JR = DR(JR),
        function(RR, JR) {
          if (JR && ("object" === MR(JR) || "function" === typeof JR)) return JR;
          if (void 0 !== JR) throw new TypeError("Derived constructors may only return object or undefined");
          return function(RR) {
            if (void 0 === RR) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return RR
          }(RR)
        }(RR, NR() ? Reflect.construct(JR, GR || [], DR(RR).constructor) : JR.apply(RR, GR))
    }

    function NR() {
      try {
        var RR = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (RR) {}
      return (NR = function() {
        return !!RR
      })()
    }

    function DR(RR) {
      return DR = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(RR) {
        return RR.__proto__ || Object.getPrototypeOf(RR)
      }, DR(RR)
    }

    function HR(RR, JR) {
      return HR = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(RR, JR) {
        return RR.__proto__ = JR, RR
      }, HR(RR, JR)
    }

    function oR(RR, JR, GR) {
      return (JR = cR(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }

    function cR(RR) {
      var JR = function(RR, JR) {
        if ("object" != MR(RR) || !RR) return RR;
        var GR = RR[Symbol.toPrimitive];
        if (void 0 !== GR) {
          var yR = GR.call(RR, JR || "default");
          if ("object" != MR(yR)) return yR;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === JR ? String : Number)(RR)
      }(RR, "string");
      return "symbol" == MR(JR) ? JR : JR + ""
    }
    var PR = function(RR) {
      function JR() {
        var RR;
        ! function(RR, JR) {
          if (!(RR instanceof JR)) throw new TypeError("Cannot call a class as a function")
        }(this, JR);
        for (var GR = arguments.length, yR = new Array(GR), tR = 0; tR < GR; tR++) yR[tR] = arguments[tR];
        return oR(RR = xR(this, JR, [].concat(yR)), "state", {
          isAnimationFinished: !0,
          totalLength: 0
        }), oR(RR, "generateSimpleStrokeDasharray", (function(RR, JR) {
          return "".concat(JR, "px ").concat(RR - JR, "px")
        })), oR(RR, "getStrokeDasharray", (function(GR, yR, tR) {
          var uR = tR.reduce((function(RR, JR) {
            return RR + JR
          }));
          if (!uR) return RR.generateSimpleStrokeDasharray(yR, GR);
          for (var ZR = Math.floor(GR / uR), qR = GR % uR, iR = yR - GR, fR = [], VR = 0, KR = 0; VR < tR.length; KR += tR[VR], ++VR)
            if (KR + tR[VR] > qR) {
              fR = [].concat(bR(tR.slice(0, VR)), [qR - KR]);
              break
            } var wR = fR.length % 2 === 0 ? [0, iR] : [iR];
          return [].concat(bR(JR.repeat(tR, ZR)), bR(fR), wR).map((function(RR) {
            return "".concat(RR, "px")
          })).join(", ")
        })), oR(RR, "id", (0, nR.M)("recharts-line-")), oR(RR, "pathRef", (function(JR) {
          RR.mainCurve = JR
        })), oR(RR, "handleAnimationEnd", (function() {
          RR.setState({
            isAnimationFinished: !0
          }), RR.props.onAnimationEnd && RR.props.onAnimationEnd()
        })), oR(RR, "handleAnimationStart", (function() {
          RR.setState({
            isAnimationFinished: !1
          }), RR.props.onAnimationStart && RR.props.onAnimationStart()
        })), RR
      }
      return function(RR, JR) {
        if ("function" !== typeof JR && null !== JR) throw new TypeError("Super expression must either be null or a function");
        RR.prototype = Object.create(JR && JR.prototype, {
          constructor: {
            value: RR,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(RR, "prototype", {
          writable: !1
        }), JR && HR(RR, JR)
      }(JR, RR), GR = JR, uR = [{
        key: "componentDidMount",
        value: function() {
          if (this.props.isAnimationActive) {
            var RR = this.getTotalLength();
            this.setState({
              totalLength: RR
            })
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function() {
          if (this.props.isAnimationActive) {
            var RR = this.getTotalLength();
            RR !== this.state.totalLength && this.setState({
              totalLength: RR
            })
          }
        }
      }, {
        key: "getTotalLength",
        value: function() {
          var RR = this.mainCurve;
          try {
            return RR && RR.getTotalLength && RR.getTotalLength() || 0
          } catch (JR) {
            return 0
          }
        }
      }, {
        key: "renderErrorBar",
        value: function(RR, JR) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var GR = this.props,
            tR = GR.points,
            uR = GR.xAxis,
            ZR = GR.yAxis,
            qR = GR.layout,
            iR = GR.children,
            fR = (0, UR.i)(iR, LR.e);
          if (!fR) return null;
          var VR = function(RR, JR) {
              return {
                x: RR.x,
                y: RR.y,
                value: RR.value,
                errorVal: (0, AR.hb)(RR.payload, JR)
              }
            },
            KR = {
              clipPath: RR ? "url(#clipPath-".concat(JR, ")") : null
            };
          return yR.createElement(eR.c, KR, fR.map((function(RR) {
            return yR.cloneElement(RR, {
              key: "bar-".concat(RR.props.dataKey),
              data: tR,
              xAxis: uR,
              yAxis: ZR,
              layout: qR,
              dataPointFormatter: VR
            })
          })))
        }
      }, {
        key: "renderDots",
        value: function(RR, GR, tR) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var uR = this.props,
            ZR = uR.dot,
            qR = uR.points,
            iR = uR.dataKey,
            fR = (0, UR.e)(this.props, !1),
            VR = (0, UR.e)(ZR, !0),
            KR = qR.map((function(RR, GR) {
              var yR = gR(gR(gR({
                key: "dot-".concat(GR),
                r: 3
              }, fR), VR), {}, {
                index: GR,
                cx: RR.x,
                cy: RR.y,
                value: RR.value,
                dataKey: iR,
                payload: RR.payload,
                points: qR
              });
              return JR.renderDotItem(ZR, yR)
            })),
            wR = {
              clipPath: RR ? "url(#clipPath-".concat(GR ? "" : "dots-").concat(tR, ")") : null
            };
          return yR.createElement(eR.c, lR({
            className: "recharts-line-dots",
            key: "dots"
          }, wR), KR)
        }
      }, {
        key: "renderCurveStatically",
        value: function(RR, JR, GR, tR) {
          var uR = this.props,
            ZR = uR.type,
            qR = uR.layout,
            iR = uR.connectNulls,
            fR = (uR.ref, BR(uR, CR)),
            VR = gR(gR(gR({}, (0, UR.e)(fR, !0)), {}, {
              fill: "none",
              className: "recharts-line-curve",
              clipPath: JR ? "url(#clipPath-".concat(GR, ")") : null,
              points: RR
            }, tR), {}, {
              type: ZR,
              layout: qR,
              connectNulls: iR
            });
          return yR.createElement(wR.e, lR({}, VR, {
            pathRef: this.pathRef
          }))
        }
      }, {
        key: "renderCurveWithAnimation",
        value: function(RR, JR) {
          var GR = this,
            uR = this.props,
            ZR = uR.points,
            qR = uR.strokeDasharray,
            iR = uR.isAnimationActive,
            fR = uR.animationBegin,
            VR = uR.animationDuration,
            KR = uR.animationEasing,
            wR = uR.animationId,
            rR = uR.animateNewValues,
            eR = uR.width,
            aR = uR.height,
            LR = this.state,
            UR = LR.prevPoints,
            WR = LR.totalLength;
          return yR.createElement(tR.b, {
            UK: fR,
            duration: VR,
            isActive: iR,
            easing: KR,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "line-".concat(wR),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(yR) {
            var tR = yR.t;
            if (UR) {
              var uR = UR.length / ZR.length,
                iR = ZR.map((function(RR, JR) {
                  var GR = Math.floor(JR * uR);
                  if (UR[GR]) {
                    var yR = UR[GR],
                      ZR = (0, nR.v)(yR.x, RR.x),
                      qR = (0, nR.v)(yR.y, RR.y);
                    return gR(gR({}, RR), {}, {
                      x: ZR(tR),
                      y: qR(tR)
                    })
                  }
                  if (rR) {
                    var iR = (0, nR.v)(2 * eR, RR.x),
                      fR = (0, nR.v)(aR / 2, RR.y);
                    return gR(gR({}, RR), {}, {
                      x: iR(tR),
                      y: fR(tR)
                    })
                  }
                  return gR(gR({}, RR), {}, {
                    x: RR.x,
                    y: RR.y
                  })
                }));
              return GR.renderCurveStatically(iR, RR, JR)
            }
            var fR, VR = (0, nR.v)(0, WR)(tR);
            if (qR) {
              var KR = "".concat(qR).split(/[,\s]+/gim).map((function(RR) {
                return parseFloat(RR)
              }));
              fR = GR.getStrokeDasharray(VR, WR, KR)
            } else fR = GR.generateSimpleStrokeDasharray(WR, VR);
            return GR.renderCurveStatically(ZR, RR, JR, {
              strokeDasharray: fR
            })
          }))
        }
      }, {
        key: "renderCurve",
        value: function(RR, JR) {
          var GR = this.props,
            yR = GR.points,
            tR = GR.isAnimationActive,
            uR = this.state,
            ZR = uR.prevPoints,
            qR = uR.totalLength;
          return tR && yR && yR.length && (!ZR && qR > 0 || !VR()(ZR, yR)) ? this.renderCurveWithAnimation(RR, JR) : this.renderCurveStatically(yR, RR, JR)
        }
      }, {
        key: "render",
        value: function() {
          var RR, JR = this.props,
            GR = JR.hide,
            tR = JR.dot,
            uR = JR.points,
            ZR = JR.className,
            qR = JR.xAxis,
            fR = JR.yAxis,
            VR = JR.top,
            wR = JR.left,
            rR = JR.width,
            LR = JR.height,
            nR = JR.isAnimationActive,
            WR = JR.id;
          if (GR || !uR || !uR.length) return null;
          var AR = this.state.isAnimationFinished,
            CR = 1 === uR.length,
            XR = (0, KR.c)("recharts-line", ZR),
            MR = qR && qR.allowDataOverflow,
            BR = fR && fR.allowDataOverflow,
            lR = MR || BR,
            pR = iR()(WR) ? this.id : WR,
            gR = null !== (RR = (0, UR.e)(tR, !1)) && void 0 !== RR ? RR : {
              r: 3,
              strokeWidth: 2
            },
            bR = gR.r,
            vR = void 0 === bR ? 3 : bR,
            OR = gR.strokeWidth,
            xR = void 0 === OR ? 2 : OR,
            NR = ((0, UR.p)(tR) ? tR : {}).clipDot,
            DR = void 0 === NR || NR,
            HR = 2 * vR + xR;
          return yR.createElement(eR.c, {
            className: XR
          }, MR || BR ? yR.createElement("defs", null, yR.createElement("clipPath", {
            id: "clipPath-".concat(pR)
          }, yR.createElement("rect", {
            x: MR ? wR : wR - rR / 2,
            y: BR ? VR : VR - LR / 2,
            width: MR ? rR : 2 * rR,
            height: BR ? LR : 2 * LR
          })), !DR && yR.createElement("clipPath", {
            id: "clipPath-dots-".concat(pR)
          }, yR.createElement("rect", {
            x: wR - HR / 2,
            y: VR - HR / 2,
            width: rR + HR,
            height: LR + HR
          }))) : null, !CR && this.renderCurve(lR, pR), this.renderErrorBar(lR, pR), (CR || tR) && this.renderDots(lR, DR, pR), (!nR || AR) && aR.e.renderCallByParent(this.props, uR))
        }
      }], qR = [{
        key: "getDerivedStateFromProps",
        value: function(RR, JR) {
          return RR.animationId !== JR.prevAnimationId ? {
            prevAnimationId: RR.animationId,
            curPoints: RR.points,
            prevPoints: JR.curPoints
          } : RR.points !== JR.curPoints ? {
            curPoints: RR.points
          } : null
        }
      }, {
        key: "repeat",
        value: function(RR, JR) {
          for (var GR = RR.length % 2 !== 0 ? [].concat(bR(RR), [0]) : RR, yR = [], tR = 0; tR < JR; ++tR) yR = [].concat(bR(yR), bR(GR));
          return yR
        }
      }, {
        key: "renderDotItem",
        value: function(RR, JR) {
          var GR;
          if (yR.isValidElement(RR)) GR = yR.cloneElement(RR, JR);
          else if (ZR()(RR)) GR = RR(JR);
          else {
            var tR = JR.key,
              uR = BR(JR, XR),
              qR = (0, KR.c)("recharts-line-dot", "boolean" !== typeof RR ? RR.className : "");
            GR = yR.createElement(rR.d, lR({
              key: tR
            }, uR, {
              className: qR
            }))
          }
          return GR
        }
      }], uR && OR(GR.prototype, uR), qR && OR(GR, qR), Object.defineProperty(GR, "prototype", {
        writable: !1
      }), GR;
      var GR, uR, qR
    }(yR.PureComponent);
    oR(PR, "displayName", "Line"), oR(PR, "defaultProps", {
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
      isAnimationActive: !WR.d.isSsr,
      animateNewValues: !0,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease",
      hide: !1,
      label: !1
    }), oR(PR, "getComposedData", (function(RR) {
      var JR = RR.props,
        GR = RR.xAxis,
        yR = RR.yAxis,
        tR = RR.xAxisTicks,
        uR = RR.yAxisTicks,
        ZR = RR.dataKey,
        qR = RR.bandSize,
        fR = RR.displayedData,
        VR = RR.offset,
        KR = JR.layout;
      return gR({
        points: fR.map((function(RR, JR) {
          var fR = (0, AR.hb)(RR, ZR);
          return "horizontal" === KR ? {
            x: (0, AR.D)({
              axis: GR,
              ticks: tR,
              bandSize: qR,
              entry: RR,
              index: JR
            }),
            y: iR()(fR) ? null : yR.scale(fR),
            value: fR,
            payload: RR
          } : {
            x: iR()(fR) ? null : GR.scale(fR),
            y: (0, AR.D)({
              axis: yR,
              ticks: uR,
              bandSize: qR,
              entry: RR,
              index: JR
            }),
            value: fR,
            payload: RR
          }
        })),
        layout: KR
      }, VR)
    }))
  },
  7412: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => xR
    });
    var yR = GR(66),
      tR = GR(6357),
      uR = GR.n(tR),
      ZR = GR(7419),
      qR = GR.n(ZR),
      iR = GR(6140),
      fR = GR(7037),
      VR = GR(7301),
      KR = GR(7312),
      wR = GR(6235),
      rR = GR(7321),
      eR = GR(6520),
      aR = GR(6523),
      LR = GR(7436);

    function nR(RR) {
      return nR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, nR(RR)
    }

    function UR(RR, JR) {
      for (var GR = 0; GR < JR.length; GR++) {
        var yR = JR[GR];
        yR.enumerable = yR.enumerable || !1, yR.configurable = !0, "value" in yR && (yR.writable = !0), Object.defineProperty(RR, pR(yR.key), yR)
      }
    }

    function WR(RR, JR, GR) {
      return JR = CR(JR),
        function(RR, JR) {
          if (JR && ("object" === nR(JR) || "function" === typeof JR)) return JR;
          if (void 0 !== JR) throw new TypeError("Derived constructors may only return object or undefined");
          return function(RR) {
            if (void 0 === RR) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return RR
          }(RR)
        }(RR, AR() ? Reflect.construct(JR, GR || [], CR(RR).constructor) : JR.apply(RR, GR))
    }

    function AR() {
      try {
        var RR = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (RR) {}
      return (AR = function() {
        return !!RR
      })()
    }

    function CR(RR) {
      return CR = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(RR) {
        return RR.__proto__ || Object.getPrototypeOf(RR)
      }, CR(RR)
    }

    function XR(RR, JR) {
      return XR = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(RR, JR) {
        return RR.__proto__ = JR, RR
      }, XR(RR, JR)
    }

    function MR(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function BR(RR) {
      for (var JR = 1; JR < arguments.length; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? MR(Object(GR), !0).forEach((function(JR) {
          lR(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : MR(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }

    function lR(RR, JR, GR) {
      return (JR = pR(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }

    function pR(RR) {
      var JR = function(RR, JR) {
        if ("object" != nR(RR) || !RR) return RR;
        var GR = RR[Symbol.toPrimitive];
        if (void 0 !== GR) {
          var yR = GR.call(RR, JR || "default");
          if ("object" != nR(yR)) return yR;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === JR ? String : Number)(RR)
      }(RR, "string");
      return "symbol" == nR(JR) ? JR : JR + ""
    }

    function gR(RR, JR) {
      return function(RR) {
        if (Array.isArray(RR)) return RR
      }(RR) || function(RR, JR) {
        var GR = null == RR ? null : "undefined" != typeof Symbol && RR[Symbol.iterator] || RR["@@iterator"];
        if (null != GR) {
          var yR, tR, uR, ZR, qR = [],
            iR = !0,
            fR = !1;
          try {
            if (uR = (GR = GR.call(RR)).next, 0 === JR) {
              if (Object(GR) !== GR) return;
              iR = !1
            } else
              for (; !(iR = (yR = uR.call(GR)).done) && (qR.push(yR.value), qR.length !== JR); iR = !0);
          } catch (RR) {
            fR = !0, tR = RR
          } finally {
            try {
              if (!iR && null != GR.return && (ZR = GR.return(), Object(ZR) !== ZR)) return
            } finally {
              if (fR) throw tR
            }
          }
          return qR
        }
      }(RR, JR) || function(RR, JR) {
        if (!RR) return;
        if ("string" === typeof RR) return bR(RR, JR);
        var GR = Object.prototype.toString.call(RR).slice(8, -1);
        "Object" === GR && RR.constructor && (GR = RR.constructor.name);
        if ("Map" === GR || "Set" === GR) return Array.from(RR);
        if ("Arguments" === GR || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GR)) return bR(RR, JR)
      }(RR, JR) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function bR(RR, JR) {
      (null == JR || JR > RR.length) && (JR = RR.length);
      for (var GR = 0, yR = new Array(JR); GR < JR; GR++) yR[GR] = RR[GR];
      return yR
    }

    function vR() {
      return vR = Object.assign ? Object.assign.bind() : function(RR) {
        for (var JR = 1; JR < arguments.length; JR++) {
          var GR = arguments[JR];
          for (var yR in GR) Object.prototype.hasOwnProperty.call(GR, yR) && (RR[yR] = GR[yR])
        }
        return RR
      }, vR.apply(this, arguments)
    }

    function OR(RR) {
      var JR = RR.x,
        GR = RR.y,
        tR = RR.segment,
        ZR = RR.xAxisId,
        nR = RR.yAxisId,
        UR = RR.shape,
        WR = RR.className,
        AR = RR.alwaysShow,
        CR = (0, LR.l)(),
        XR = (0, LR.o)(ZR),
        MR = (0, LR.p)(nR),
        lR = (0, LR.n)();
      if (!CR || !lR) return null;
      (0, eR.c)(void 0 === AR, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var pR = function(RR, JR, GR, yR, tR, uR, ZR, iR, fR) {
        var VR = tR.x,
          wR = tR.y,
          rR = tR.width,
          eR = tR.height;
        if (GR) {
          var aR = fR.y,
            LR = RR.y.apply(aR, {
              position: uR
            });
          if ((0, KR.c)(fR, "discard") && !RR.y.isInRange(LR)) return null;
          var nR = [{
            x: VR + rR,
            y: LR
          }, {
            x: VR,
            y: LR
          }];
          return "left" === iR ? nR.reverse() : nR
        }
        if (JR) {
          var UR = fR.x,
            WR = RR.x.apply(UR, {
              position: uR
            });
          if ((0, KR.c)(fR, "discard") && !RR.x.isInRange(WR)) return null;
          var AR = [{
            x: WR,
            y: wR + eR
          }, {
            x: WR,
            y: wR
          }];
          return "top" === ZR ? AR.reverse() : AR
        }
        if (yR) {
          var CR = fR.segment.map((function(JR) {
            return RR.apply(JR, {
              position: uR
            })
          }));
          return (0, KR.c)(fR, "discard") && qR()(CR, (function(JR) {
            return !RR.isInRange(JR)
          })) ? null : CR
        }
        return null
      }((0, rR.e)({
        x: XR.scale,
        y: MR.scale
      }), (0, wR.B)(JR), (0, wR.B)(GR), tR && 2 === tR.length, lR, RR.position, XR.orientation, MR.orientation, RR);
      if (!pR) return null;
      var bR = gR(pR, 2),
        OR = bR[0],
        xR = OR.x,
        NR = OR.y,
        DR = bR[1],
        HR = DR.x,
        oR = DR.y,
        cR = BR(BR({
          clipPath: (0, KR.c)(RR, "hidden") ? "url(#".concat(CR, ")") : void 0
        }, (0, aR.e)(RR, !0)), {}, {
          x1: xR,
          y1: NR,
          x2: HR,
          y2: oR
        });
      return yR.createElement(fR.c, {
        className: (0, iR.c)("recharts-reference-line", WR)
      }, function(RR, JR) {
        return yR.isValidElement(RR) ? yR.cloneElement(RR, JR) : uR()(RR) ? RR(JR) : yR.createElement("line", vR({}, JR, {
          className: "recharts-reference-line-line"
        }))
      }(UR, cR), VR.b.renderCallByParent(RR, (0, rR.m)({
        x1: xR,
        y1: NR,
        x2: HR,
        y2: oR
      })))
    }
    var xR = function(RR) {
      function JR() {
        return function(RR, JR) {
          if (!(RR instanceof JR)) throw new TypeError("Cannot call a class as a function")
        }(this, JR), WR(this, JR, arguments)
      }
      return function(RR, JR) {
        if ("function" !== typeof JR && null !== JR) throw new TypeError("Super expression must either be null or a function");
        RR.prototype = Object.create(JR && JR.prototype, {
          constructor: {
            value: RR,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(RR, "prototype", {
          writable: !1
        }), JR && XR(RR, JR)
      }(JR, RR), GR = JR, (tR = [{
        key: "render",
        value: function() {
          return yR.createElement(OR, this.props)
        }
      }]) && UR(GR.prototype, tR), uR && UR(GR, uR), Object.defineProperty(GR, "prototype", {
        writable: !1
      }), GR;
      var GR, tR, uR
    }(yR.Component);
    lR(xR, "displayName", "ReferenceLine"), lR(xR, "defaultProps", {
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
  7492: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => UR
    });
    var yR = GR(66),
      tR = GR(6140),
      uR = GR(7436),
      ZR = GR(7495),
      qR = GR(7192);

    function iR(RR) {
      return iR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, iR(RR)
    }

    function fR(RR, JR) {
      for (var GR = 0; GR < JR.length; GR++) {
        var yR = JR[GR];
        yR.enumerable = yR.enumerable || !1, yR.configurable = !0, "value" in yR && (yR.writable = !0), Object.defineProperty(RR, aR(yR.key), yR)
      }
    }

    function VR(RR, JR, GR) {
      return JR = wR(JR),
        function(RR, JR) {
          if (JR && ("object" === iR(JR) || "function" === typeof JR)) return JR;
          if (void 0 !== JR) throw new TypeError("Derived constructors may only return object or undefined");
          return function(RR) {
            if (void 0 === RR) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return RR
          }(RR)
        }(RR, KR() ? Reflect.construct(JR, GR || [], wR(RR).constructor) : JR.apply(RR, GR))
    }

    function KR() {
      try {
        var RR = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (RR) {}
      return (KR = function() {
        return !!RR
      })()
    }

    function wR(RR) {
      return wR = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(RR) {
        return RR.__proto__ || Object.getPrototypeOf(RR)
      }, wR(RR)
    }

    function rR(RR, JR) {
      return rR = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(RR, JR) {
        return RR.__proto__ = JR, RR
      }, rR(RR, JR)
    }

    function eR(RR, JR, GR) {
      return (JR = aR(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }

    function aR(RR) {
      var JR = function(RR, JR) {
        if ("object" != iR(RR) || !RR) return RR;
        var GR = RR[Symbol.toPrimitive];
        if (void 0 !== GR) {
          var yR = GR.call(RR, JR || "default");
          if ("object" != iR(yR)) return yR;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === JR ? String : Number)(RR)
      }(RR, "string");
      return "symbol" == iR(JR) ? JR : JR + ""
    }

    function LR() {
      return LR = Object.assign ? Object.assign.bind() : function(RR) {
        for (var JR = 1; JR < arguments.length; JR++) {
          var GR = arguments[JR];
          for (var yR in GR) Object.prototype.hasOwnProperty.call(GR, yR) && (RR[yR] = GR[yR])
        }
        return RR
      }, LR.apply(this, arguments)
    }

    function nR(RR) {
      var JR = RR.xAxisId,
        GR = (0, uR.i)(),
        iR = (0, uR.h)(),
        fR = (0, uR.o)(JR);
      return null == fR ? null : yR.createElement(ZR.d, LR({}, fR, {
        className: (0, tR.c)("recharts-".concat(fR.axisType, " ").concat(fR.axisType), fR.className),
        viewBox: {
          x: 0,
          y: 0,
          width: GR,
          height: iR
        },
        ticksGenerator: function(RR) {
          return (0, qR.ab)(RR, !0)
        }
      }))
    }
    var UR = function(RR) {
      function JR() {
        return function(RR, JR) {
          if (!(RR instanceof JR)) throw new TypeError("Cannot call a class as a function")
        }(this, JR), VR(this, JR, arguments)
      }
      return function(RR, JR) {
        if ("function" !== typeof JR && null !== JR) throw new TypeError("Super expression must either be null or a function");
        RR.prototype = Object.create(JR && JR.prototype, {
          constructor: {
            value: RR,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(RR, "prototype", {
          writable: !1
        }), JR && rR(RR, JR)
      }(JR, RR), GR = JR, (tR = [{
        key: "render",
        value: function() {
          return yR.createElement(nR, this.props)
        }
      }]) && fR(GR.prototype, tR), uR && fR(GR, uR), Object.defineProperty(GR, "prototype", {
        writable: !1
      }), GR;
      var GR, tR, uR
    }(yR.Component);
    eR(UR, "displayName", "XAxis"), eR(UR, "defaultProps", {
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
  7509: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => UR
    });
    var yR = GR(66),
      tR = GR(6140),
      uR = GR(7436),
      ZR = GR(7495),
      qR = GR(7192);

    function iR(RR) {
      return iR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, iR(RR)
    }

    function fR(RR, JR) {
      for (var GR = 0; GR < JR.length; GR++) {
        var yR = JR[GR];
        yR.enumerable = yR.enumerable || !1, yR.configurable = !0, "value" in yR && (yR.writable = !0), Object.defineProperty(RR, aR(yR.key), yR)
      }
    }

    function VR(RR, JR, GR) {
      return JR = wR(JR),
        function(RR, JR) {
          if (JR && ("object" === iR(JR) || "function" === typeof JR)) return JR;
          if (void 0 !== JR) throw new TypeError("Derived constructors may only return object or undefined");
          return function(RR) {
            if (void 0 === RR) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return RR
          }(RR)
        }(RR, KR() ? Reflect.construct(JR, GR || [], wR(RR).constructor) : JR.apply(RR, GR))
    }

    function KR() {
      try {
        var RR = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (RR) {}
      return (KR = function() {
        return !!RR
      })()
    }

    function wR(RR) {
      return wR = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(RR) {
        return RR.__proto__ || Object.getPrototypeOf(RR)
      }, wR(RR)
    }

    function rR(RR, JR) {
      return rR = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(RR, JR) {
        return RR.__proto__ = JR, RR
      }, rR(RR, JR)
    }

    function eR(RR, JR, GR) {
      return (JR = aR(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }

    function aR(RR) {
      var JR = function(RR, JR) {
        if ("object" != iR(RR) || !RR) return RR;
        var GR = RR[Symbol.toPrimitive];
        if (void 0 !== GR) {
          var yR = GR.call(RR, JR || "default");
          if ("object" != iR(yR)) return yR;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === JR ? String : Number)(RR)
      }(RR, "string");
      return "symbol" == iR(JR) ? JR : JR + ""
    }

    function LR() {
      return LR = Object.assign ? Object.assign.bind() : function(RR) {
        for (var JR = 1; JR < arguments.length; JR++) {
          var GR = arguments[JR];
          for (var yR in GR) Object.prototype.hasOwnProperty.call(GR, yR) && (RR[yR] = GR[yR])
        }
        return RR
      }, LR.apply(this, arguments)
    }
    var nR = function(RR) {
        var JR = RR.yAxisId,
          GR = (0, uR.i)(),
          iR = (0, uR.h)(),
          fR = (0, uR.p)(JR);
        return null == fR ? null : yR.createElement(ZR.d, LR({}, fR, {
          className: (0, tR.c)("recharts-".concat(fR.axisType, " ").concat(fR.axisType), fR.className),
          viewBox: {
            x: 0,
            y: 0,
            width: GR,
            height: iR
          },
          ticksGenerator: function(RR) {
            return (0, qR.ab)(RR, !0)
          }
        }))
      },
      UR = function(RR) {
        function JR() {
          return function(RR, JR) {
            if (!(RR instanceof JR)) throw new TypeError("Cannot call a class as a function")
          }(this, JR), VR(this, JR, arguments)
        }
        return function(RR, JR) {
          if ("function" !== typeof JR && null !== JR) throw new TypeError("Super expression must either be null or a function");
          RR.prototype = Object.create(JR && JR.prototype, {
            constructor: {
              value: RR,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(RR, "prototype", {
            writable: !1
          }), JR && rR(RR, JR)
        }(JR, RR), GR = JR, (tR = [{
          key: "render",
          value: function() {
            return yR.createElement(nR, this.props)
          }
        }]) && fR(GR.prototype, tR), uR && fR(GR, uR), Object.defineProperty(GR, "prototype", {
          writable: !1
        }), GR;
        var GR, tR, uR
      }(yR.Component);
    eR(UR, "displayName", "YAxis"), eR(UR, "defaultProps", {
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
  7501: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => aR
    });
    var yR = GR(6357),
      tR = GR.n(yR),
      uR = GR(6235),
      ZR = GR(7189),
      qR = GR(7047),
      iR = GR(7321);

    function fR(RR, JR, GR) {
      if (JR < 1) return [];
      if (1 === JR && void 0 === GR) return RR;
      for (var yR = [], tR = 0; tR < RR.length; tR += JR) {
        if (void 0 !== GR && !0 !== GR(RR[tR])) return;
        yR.push(RR[tR])
      }
      return yR
    }

    function VR(RR, JR, GR, yR, tR) {
      if (RR * JR < RR * yR || RR * JR > RR * tR) return !1;
      var uR = GR();
      return RR * (JR - RR * uR / 2 - yR) >= 0 && RR * (JR + RR * uR / 2 - tR) <= 0
    }

    function KR(RR) {
      return KR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, KR(RR)
    }

    function wR(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function rR(RR) {
      for (var JR = 1; JR < arguments.length; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? wR(Object(GR), !0).forEach((function(JR) {
          eR(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : wR(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }

    function eR(RR, JR, GR) {
      return (JR = function(RR) {
        var JR = function(RR, JR) {
          if ("object" != KR(RR) || !RR) return RR;
          var GR = RR[Symbol.toPrimitive];
          if (void 0 !== GR) {
            var yR = GR.call(RR, JR || "default");
            if ("object" != KR(yR)) return yR;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === JR ? String : Number)(RR)
        }(RR, "string");
        return "symbol" == KR(JR) ? JR : JR + ""
      }(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }

    function aR(RR, JR, GR) {
      var yR = RR.gK,
        KR = RR.ticks,
        wR = RR.viewBox,
        eR = RR.minTickGap,
        aR = RR.orientation,
        LR = RR.interval,
        nR = RR.tickFormatter,
        UR = RR.unit,
        WR = RR.angle;
      if (!KR || !KR.length || !yR) return [];
      if ((0, uR.C)(LR) || qR.d.isSsr) return function(RR, JR) {
        return fR(RR, JR + 1)
      }(KR, "number" === typeof LR && (0, uR.C)(LR) ? LR : 0);
      var AR = [],
        CR = "top" === aR || "bottom" === aR ? "width" : "height",
        XR = UR && "width" === CR ? (0, ZR.e)(UR, {
          fontSize: JR,
          letterSpacing: GR
        }) : {
          width: 0,
          height: 0
        },
        MR = function(RR, yR) {
          var uR = tR()(nR) ? nR(RR.value, yR) : RR.value;
          return "width" === CR ? function(RR, JR, GR) {
            var yR = {
              width: RR.width + JR.width,
              height: RR.height + JR.height
            };
            return (0, iR.j)(yR, GR)
          }((0, ZR.e)(uR, {
            fontSize: JR,
            letterSpacing: GR
          }), XR, WR) : (0, ZR.e)(uR, {
            fontSize: JR,
            letterSpacing: GR
          })[CR]
        },
        BR = KR.length >= 2 ? (0, uR.I)(KR[1].coordinate - KR[0].coordinate) : 1,
        lR = function(RR, JR, GR) {
          var yR = "width" === GR,
            tR = RR.x,
            uR = RR.y,
            ZR = RR.width,
            qR = RR.height;
          return 1 === JR ? {
            start: yR ? tR : uR,
            end: yR ? tR + ZR : uR + qR
          } : {
            start: yR ? tR + ZR : uR + qR,
            end: yR ? tR : uR
          }
        }(wR, BR, CR);
      return "equidistantPreserveStart" === LR ? function(RR, JR, GR, yR, tR) {
        for (var uR, ZR = (yR || []).slice(), qR = JR.start, iR = JR.end, KR = 0, wR = 1, rR = qR, eR = function() {
            var JR = null === yR || void 0 === yR ? void 0 : yR[KR];
            if (void 0 === JR) return {
              v: fR(yR, wR)
            };
            var uR, ZR = KR,
              eR = function() {
                return void 0 === uR && (uR = GR(JR, ZR)), uR
              },
              aR = JR.coordinate,
              LR = 0 === KR || VR(RR, aR, eR, rR, iR);
            LR || (KR = 0, rR = qR, wR += 1), LR && (rR = aR + RR * (eR() / 2 + tR), KR += wR)
          }; wR <= ZR.length;)
          if (uR = eR()) return uR.v;
        return []
      }(BR, lR, MR, KR, eR) : (AR = "preserveStart" === LR || "preserveStartEnd" === LR ? function(RR, JR, GR, yR, tR, uR) {
        var ZR = (yR || []).slice(),
          qR = ZR.length,
          iR = JR.start,
          fR = JR.end;
        if (uR) {
          var KR = yR[qR - 1],
            wR = GR(KR, qR - 1),
            eR = RR * (KR.coordinate + RR * wR / 2 - fR);
          ZR[qR - 1] = KR = rR(rR({}, KR), {}, {
            tickCoord: eR > 0 ? KR.coordinate - eR * RR : KR.coordinate
          }), VR(RR, KR.tickCoord, (function() {
            return wR
          }), iR, fR) && (fR = KR.tickCoord - RR * (wR / 2 + tR), ZR[qR - 1] = rR(rR({}, KR), {}, {
            isShow: !0
          }))
        }
        for (var aR = uR ? qR - 1 : qR, LR = function(JR) {
            var yR, uR = ZR[JR],
              qR = function() {
                return void 0 === yR && (yR = GR(uR, JR)), yR
              };
            if (0 === JR) {
              var KR = RR * (uR.coordinate - RR * qR() / 2 - iR);
              ZR[JR] = uR = rR(rR({}, uR), {}, {
                tickCoord: KR < 0 ? uR.coordinate - KR * RR : uR.coordinate
              })
            } else ZR[JR] = uR = rR(rR({}, uR), {}, {
              tickCoord: uR.coordinate
            });
            VR(RR, uR.tickCoord, qR, iR, fR) && (iR = uR.tickCoord + RR * (qR() / 2 + tR), ZR[JR] = rR(rR({}, uR), {}, {
              isShow: !0
            }))
          }, nR = 0; nR < aR; nR++) LR(nR);
        return ZR
      }(BR, lR, MR, KR, eR, "preserveStartEnd" === LR) : function(RR, JR, GR, yR, tR) {
        for (var uR = (yR || []).slice(), ZR = uR.length, qR = JR.start, iR = JR.end, fR = function(JR) {
            var yR, fR = uR[JR],
              KR = function() {
                return void 0 === yR && (yR = GR(fR, JR)), yR
              };
            if (JR === ZR - 1) {
              var wR = RR * (fR.coordinate + RR * KR() / 2 - iR);
              uR[JR] = fR = rR(rR({}, fR), {}, {
                tickCoord: wR > 0 ? fR.coordinate - wR * RR : fR.coordinate
              })
            } else uR[JR] = fR = rR(rR({}, fR), {}, {
              tickCoord: fR.coordinate
            });
            VR(RR, fR.tickCoord, KR, qR, iR) && (iR = fR.tickCoord - RR * (KR() / 2 + tR), uR[JR] = rR(rR({}, fR), {}, {
              isShow: !0
            }))
          }, KR = ZR - 1; KR >= 0; KR--) fR(KR);
        return uR
      }(BR, lR, MR, KR, eR), AR.filter((function(RR) {
        return RR.isShow
      })))
    }
  },
  7522: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => iR
    });
    var yR = GR(6554),
      tR = GR(7354),
      uR = GR(7492),
      ZR = GR(7509),
      qR = GR(7321),
      iR = (0, yR.c)({
        chartName: "BarChart",
        GraphicalChild: tR.d,
        defaultTooltipEventType: "axis",
        validateTooltipEventTypes: ["axis", "item"],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: uR.c
        }, {
          axisType: "yAxis",
          AxisComp: ZR.c
        }],
        formatAxisMap: qR.h
      })
  },
  6548: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => tJ
    });
    var yR = GR(6554),
      tR = GR(7480),
      uR = GR(7354),
      ZR = GR(7484),
      qR = GR(66),
      iR = GR(7179),
      fR = GR(6516),
      VR = GR.n(fR),
      KR = GR(7269),
      wR = GR.n(KR),
      rR = GR(6357),
      eR = GR.n(rR),
      aR = GR(6140),
      LR = GR(7037),
      nR = GR(7365),
      UR = GR(6523),
      WR = GR(7047);

    function AR(RR) {
      return AR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, AR(RR)
    }

    function CR(RR, JR) {
      for (var GR = 0; GR < JR.length; GR++) {
        var yR = JR[GR];
        yR.enumerable = yR.enumerable || !1, yR.configurable = !0, "value" in yR && (yR.writable = !0), Object.defineProperty(RR, gR(yR.key), yR)
      }
    }

    function XR(RR, JR, GR) {
      return JR = BR(JR),
        function(RR, JR) {
          if (JR && ("object" === AR(JR) || "function" === typeof JR)) return JR;
          if (void 0 !== JR) throw new TypeError("Derived constructors may only return object or undefined");
          return function(RR) {
            if (void 0 === RR) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return RR
          }(RR)
        }(RR, MR() ? Reflect.construct(JR, GR || [], BR(RR).constructor) : JR.apply(RR, GR))
    }

    function MR() {
      try {
        var RR = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (RR) {}
      return (MR = function() {
        return !!RR
      })()
    }

    function BR(RR) {
      return BR = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(RR) {
        return RR.__proto__ || Object.getPrototypeOf(RR)
      }, BR(RR)
    }

    function lR(RR, JR) {
      return lR = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(RR, JR) {
        return RR.__proto__ = JR, RR
      }, lR(RR, JR)
    }

    function pR(RR, JR, GR) {
      return (JR = gR(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }

    function gR(RR) {
      var JR = function(RR, JR) {
        if ("object" != AR(RR) || !RR) return RR;
        var GR = RR[Symbol.toPrimitive];
        if (void 0 !== GR) {
          var yR = GR.call(RR, JR || "default");
          if ("object" != AR(yR)) return yR;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === JR ? String : Number)(RR)
      }(RR, "string");
      return "symbol" == AR(JR) ? JR : JR + ""
    }
    var bR = function(RR) {
      function JR() {
        return function(RR, JR) {
          if (!(RR instanceof JR)) throw new TypeError("Cannot call a class as a function")
        }(this, JR), XR(this, JR, arguments)
      }
      return function(RR, JR) {
        if ("function" !== typeof JR && null !== JR) throw new TypeError("Super expression must either be null or a function");
        RR.prototype = Object.create(JR && JR.prototype, {
          constructor: {
            value: RR,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(RR, "prototype", {
          writable: !1
        }), JR && lR(RR, JR)
      }(JR, RR), GR = JR, (yR = [{
        key: "render",
        value: function() {
          return null
        }
      }]) && CR(GR.prototype, yR), tR && CR(GR, tR), Object.defineProperty(GR, "prototype", {
        writable: !1
      }), GR;
      var GR, yR, tR
    }(qR.Component);
    pR(bR, "displayName", "ZAxis"), pR(bR, "defaultProps", {
      zAxisId: 0,
      range: [64, 64],
      scale: "auto",
      type: "number"
    });
    var vR = GR(7471),
      OR = GR(7285),
      xR = GR(7358),
      NR = GR(6235),
      DR = GR(7192),
      HR = GR(6542),
      oR = GR(7111),
      cR = GR(7381),
      PR = ["option", "isActive"];

    function IR() {
      return IR = Object.assign ? Object.assign.bind() : function(RR) {
        for (var JR = 1; JR < arguments.length; JR++) {
          var GR = arguments[JR];
          for (var yR in GR) Object.prototype.hasOwnProperty.call(GR, yR) && (RR[yR] = GR[yR])
        }
        return RR
      }, IR.apply(this, arguments)
    }

    function mR(RR, JR) {
      if (null == RR) return {};
      var GR, yR, tR = function(RR, JR) {
        if (null == RR) return {};
        var GR = {};
        for (var yR in RR)
          if (Object.prototype.hasOwnProperty.call(RR, yR)) {
            if (JR.indexOf(yR) >= 0) continue;
            GR[yR] = RR[yR]
          } return GR
      }(RR, JR);
      if (Object.getOwnPropertySymbols) {
        var uR = Object.getOwnPropertySymbols(RR);
        for (yR = 0; yR < uR.length; yR++) GR = uR[yR], JR.indexOf(GR) >= 0 || Object.prototype.propertyIsEnumerable.call(RR, GR) && (tR[GR] = RR[GR])
      }
      return tR
    }

    function zR(RR) {
      var JR = RR.option,
        GR = RR.isActive,
        yR = mR(RR, PR);
      return "string" === typeof JR ? qR.createElement(cR.c, IR({
        option: qR.createElement(oR.b, IR({
          type: JR
        }, yR)),
        isActive: GR,
        shapeType: "symbols"
      }, yR)) : qR.createElement(cR.c, IR({
        option: JR,
        isActive: GR,
        shapeType: "symbols"
      }, yR))
    }

    function SR(RR) {
      return SR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, SR(RR)
    }

    function jR() {
      return jR = Object.assign ? Object.assign.bind() : function(RR) {
        for (var JR = 1; JR < arguments.length; JR++) {
          var GR = arguments[JR];
          for (var yR in GR) Object.prototype.hasOwnProperty.call(GR, yR) && (RR[yR] = GR[yR])
        }
        return RR
      }, jR.apply(this, arguments)
    }

    function dR(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function ER(RR) {
      for (var JR = 1; JR < arguments.length; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? dR(Object(GR), !0).forEach((function(JR) {
          sR(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : dR(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }

    function YR(RR, JR) {
      for (var GR = 0; GR < JR.length; GR++) {
        var yR = JR[GR];
        yR.enumerable = yR.enumerable || !1, yR.configurable = !0, "value" in yR && (yR.writable = !0), Object.defineProperty(RR, hR(yR.key), yR)
      }
    }

    function kR(RR, JR, GR) {
      return JR = FR(JR),
        function(RR, JR) {
          if (JR && ("object" === SR(JR) || "function" === typeof JR)) return JR;
          if (void 0 !== JR) throw new TypeError("Derived constructors may only return object or undefined");
          return function(RR) {
            if (void 0 === RR) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return RR
          }(RR)
        }(RR, QR() ? Reflect.construct(JR, GR || [], FR(RR).constructor) : JR.apply(RR, GR))
    }

    function QR() {
      try {
        var RR = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (RR) {}
      return (QR = function() {
        return !!RR
      })()
    }

    function FR(RR) {
      return FR = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(RR) {
        return RR.__proto__ || Object.getPrototypeOf(RR)
      }, FR(RR)
    }

    function TR(RR, JR) {
      return TR = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(RR, JR) {
        return RR.__proto__ = JR, RR
      }, TR(RR, JR)
    }

    function sR(RR, JR, GR) {
      return (JR = hR(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }

    function hR(RR) {
      var JR = function(RR, JR) {
        if ("object" != SR(RR) || !RR) return RR;
        var GR = RR[Symbol.toPrimitive];
        if (void 0 !== GR) {
          var yR = GR.call(RR, JR || "default");
          if ("object" != SR(yR)) return yR;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === JR ? String : Number)(RR)
      }(RR, "string");
      return "symbol" == SR(JR) ? JR : JR + ""
    }
    var RJ = function(RR) {
      function JR() {
        var RR;
        ! function(RR, JR) {
          if (!(RR instanceof JR)) throw new TypeError("Cannot call a class as a function")
        }(this, JR);
        for (var GR = arguments.length, yR = new Array(GR), tR = 0; tR < GR; tR++) yR[tR] = arguments[tR];
        return sR(RR = kR(this, JR, [].concat(yR)), "state", {
          isAnimationFinished: !1
        }), sR(RR, "handleAnimationEnd", (function() {
          RR.setState({
            isAnimationFinished: !0
          })
        })), sR(RR, "handleAnimationStart", (function() {
          RR.setState({
            isAnimationFinished: !1
          })
        })), sR(RR, "id", (0, NR.M)("recharts-scatter-")), RR
      }
      return function(RR, JR) {
        if ("function" !== typeof JR && null !== JR) throw new TypeError("Super expression must either be null or a function");
        RR.prototype = Object.create(JR && JR.prototype, {
          constructor: {
            value: RR,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(RR, "prototype", {
          writable: !1
        }), JR && TR(RR, JR)
      }(JR, RR), GR = JR, yR = [{
        key: "renderSymbolsStatically",
        value: function(RR) {
          var JR = this,
            GR = this.props,
            yR = GR.shape,
            tR = GR.activeShape,
            uR = GR.activeIndex,
            ZR = (0, UR.e)(this.props, !1);
          return RR.map((function(RR, GR) {
            var iR = uR === GR,
              fR = iR ? tR : yR,
              VR = ER(ER({}, ZR), RR);
            return qR.createElement(LR.c, jR({
              className: "recharts-scatter-symbol",
              key: "symbol-".concat(null === RR || void 0 === RR ? void 0 : RR.cx, "-").concat(null === RR || void 0 === RR ? void 0 : RR.cy, "-").concat(null === RR || void 0 === RR ? void 0 : RR.size, "-").concat(GR)
            }, (0, HR.g)(JR.props, RR, GR), {
              role: "img"
            }), qR.createElement(zR, jR({
              option: fR,
              isActive: iR,
              key: "symbol-".concat(GR)
            }, VR)))
          }))
        }
      }, {
        key: "renderSymbolsWithAnimation",
        value: function() {
          var RR = this,
            JR = this.props,
            GR = JR.points,
            yR = JR.isAnimationActive,
            tR = JR.animationBegin,
            uR = JR.animationDuration,
            ZR = JR.animationEasing,
            fR = JR.animationId,
            VR = this.state.prevPoints;
          return qR.createElement(iR.b, {
            UK: tR,
            duration: uR,
            isActive: yR,
            easing: ZR,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "pie-".concat(fR),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(JR) {
            var yR = JR.t,
              tR = GR.map((function(RR, JR) {
                var GR = VR && VR[JR];
                if (GR) {
                  var tR = (0, NR.v)(GR.cx, RR.cx),
                    uR = (0, NR.v)(GR.cy, RR.cy),
                    ZR = (0, NR.v)(GR.size, RR.size);
                  return ER(ER({}, RR), {}, {
                    cx: tR(yR),
                    cy: uR(yR),
                    size: ZR(yR)
                  })
                }
                var qR = (0, NR.v)(0, RR.size);
                return ER(ER({}, RR), {}, {
                  size: qR(yR)
                })
              }));
            return qR.createElement(LR.c, null, RR.renderSymbolsStatically(tR))
          }))
        }
      }, {
        key: "renderSymbols",
        value: function() {
          var RR = this.props,
            JR = RR.points,
            GR = RR.isAnimationActive,
            yR = this.state.prevPoints;
          return !(GR && JR && JR.length) || yR && wR()(yR, JR) ? this.renderSymbolsStatically(JR) : this.renderSymbolsWithAnimation()
        }
      }, {
        key: "renderErrorBar",
        value: function() {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var RR = this.props,
            JR = RR.points,
            GR = RR.xAxis,
            yR = RR.yAxis,
            tR = RR.children,
            uR = (0, UR.i)(tR, OR.e);
          return uR ? uR.map((function(RR, tR) {
            var uR = RR.props,
              ZR = uR.direction,
              iR = uR.dataKey;
            return qR.cloneElement(RR, {
              key: "".concat(ZR, "-").concat(iR, "-").concat(JR[tR]),
              data: JR,
              xAxis: GR,
              yAxis: yR,
              layout: "x" === ZR ? "vertical" : "horizontal",
              dataPointFormatter: function(RR, JR) {
                return {
                  x: RR.cx,
                  y: RR.cy,
                  value: "x" === ZR ? +RR.node.x : +RR.node.y,
                  errorVal: (0, DR.hb)(RR, JR)
                }
              }
            })
          })) : null
        }
      }, {
        key: "renderLine",
        value: function() {
          var RR, JR, GR = this.props,
            yR = GR.points,
            tR = GR.line,
            uR = GR.lineType,
            ZR = GR.lineJointType,
            iR = (0, UR.e)(this.props, !1),
            fR = (0, UR.e)(tR, !1);
          if ("joint" === uR) RR = yR.map((function(RR) {
            return {
              x: RR.cx,
              y: RR.cy
            }
          }));
          else if ("fitting" === uR) {
            var VR = (0, NR.m)(yR),
              KR = VR.xmin,
              wR = VR.xmax,
              rR = VR.a,
              aR = VR.b,
              nR = function(RR) {
                return rR * RR + aR
              };
            RR = [{
              x: KR,
              y: nR(KR)
            }, {
              x: wR,
              y: nR(wR)
            }]
          }
          var WR = ER(ER(ER({}, iR), {}, {
            fill: "none",
            stroke: iR && iR.fill
          }, fR), {}, {
            points: RR
          });
          return JR = qR.isValidElement(tR) ? qR.cloneElement(tR, WR) : eR()(tR) ? tR(WR) : qR.createElement(vR.e, jR({}, WR, {
            type: ZR
          })), qR.createElement(LR.c, {
            className: "recharts-scatter-line",
            key: "recharts-scatter-line"
          }, JR)
        }
      }, {
        key: "render",
        value: function() {
          var RR = this.props,
            JR = RR.hide,
            GR = RR.points,
            yR = RR.line,
            tR = RR.className,
            uR = RR.xAxis,
            ZR = RR.yAxis,
            iR = RR.left,
            fR = RR.top,
            KR = RR.width,
            wR = RR.height,
            rR = RR.id,
            eR = RR.isAnimationActive;
          if (JR || !GR || !GR.length) return null;
          var UR = this.state.isAnimationFinished,
            WR = (0, aR.c)("recharts-scatter", tR),
            AR = uR && uR.allowDataOverflow,
            CR = ZR && ZR.allowDataOverflow,
            XR = AR || CR,
            MR = VR()(rR) ? this.id : rR;
          return qR.createElement(LR.c, {
            className: WR,
            clipPath: XR ? "url(#clipPath-".concat(MR, ")") : null
          }, AR || CR ? qR.createElement("defs", null, qR.createElement("clipPath", {
            id: "clipPath-".concat(MR)
          }, qR.createElement("rect", {
            x: AR ? iR : iR - KR / 2,
            y: CR ? fR : fR - wR / 2,
            width: AR ? KR : 2 * KR,
            height: CR ? wR : 2 * wR
          }))) : null, yR && this.renderLine(), this.renderErrorBar(), qR.createElement(LR.c, {
            key: "recharts-scatter-symbols"
          }, this.renderSymbols()), (!eR || UR) && nR.e.renderCallByParent(this.props, GR))
        }
      }], tR = [{
        key: "getDerivedStateFromProps",
        value: function(RR, JR) {
          return RR.animationId !== JR.prevAnimationId ? {
            prevAnimationId: RR.animationId,
            curPoints: RR.points,
            prevPoints: JR.curPoints
          } : RR.points !== JR.curPoints ? {
            curPoints: RR.points
          } : null
        }
      }], yR && YR(GR.prototype, yR), tR && YR(GR, tR), Object.defineProperty(GR, "prototype", {
        writable: !1
      }), GR;
      var GR, yR, tR
    }(qR.PureComponent);
    sR(RJ, "displayName", "Scatter"), sR(RJ, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      zAxisId: 0,
      legendType: "circle",
      lineType: "joint",
      lineJointType: "linear",
      data: [],
      shape: "circle",
      hide: !1,
      isAnimationActive: !WR.d.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "linear"
    }), sR(RJ, "getComposedData", (function(RR) {
      var JR = RR.xAxis,
        GR = RR.yAxis,
        yR = RR.zAxis,
        tR = RR.item,
        uR = RR.displayedData,
        ZR = RR.xAxisTicks,
        qR = RR.yAxisTicks,
        iR = RR.offset,
        fR = tR.props.tooltipType,
        KR = (0, UR.i)(tR.props.children, xR.b),
        wR = VR()(JR.dataKey) ? tR.props.dataKey : JR.dataKey,
        rR = VR()(GR.dataKey) ? tR.props.dataKey : GR.dataKey,
        eR = yR && yR.dataKey,
        aR = yR ? yR.range : bR.defaultProps.range,
        LR = aR && aR[0],
        nR = JR.scale.bandwidth ? JR.scale.bandwidth() : 0,
        WR = GR.scale.bandwidth ? GR.scale.bandwidth() : 0,
        AR = uR.map((function(RR, uR) {
          var iR = (0, DR.hb)(RR, wR),
            aR = (0, DR.hb)(RR, rR),
            UR = !VR()(eR) && (0, DR.hb)(RR, eR) || "-",
            AR = [{
              name: VR()(JR.dataKey) ? tR.props.name : JR.name || JR.dataKey,
              unit: JR.unit || "",
              value: iR,
              payload: RR,
              dataKey: wR,
              type: fR
            }, {
              name: VR()(GR.dataKey) ? tR.props.name : GR.name || GR.dataKey,
              unit: GR.unit || "",
              value: aR,
              payload: RR,
              dataKey: rR,
              type: fR
            }];
          "-" !== UR && AR.push({
            name: yR.name || yR.dataKey,
            unit: yR.unit || "",
            value: UR,
            payload: RR,
            dataKey: eR,
            type: fR
          });
          var CR = (0, DR.D)({
              axis: JR,
              ticks: ZR,
              bandSize: nR,
              entry: RR,
              index: uR,
              dataKey: wR
            }),
            XR = (0, DR.D)({
              axis: GR,
              ticks: qR,
              bandSize: WR,
              entry: RR,
              index: uR,
              dataKey: rR
            }),
            MR = "-" !== UR ? yR.scale(UR) : LR,
            BR = Math.sqrt(Math.max(MR, 0) / Math.PI);
          return ER(ER({}, RR), {}, {
            cx: CR,
            cy: XR,
            x: CR - BR,
            y: XR - BR,
            xAxis: JR,
            yAxis: GR,
            zAxis: yR,
            width: 2 * BR,
            height: 2 * BR,
            size: MR,
            node: {
              x: iR,
              y: aR,
              z: UR
            },
            tooltipPayload: AR,
            tooltipPosition: {
              x: CR,
              y: XR
            },
            payload: RR
          }, KR && KR[uR] && KR[uR].props)
        }));
      return ER({
        points: AR
      }, iR)
    }));
    var JJ = GR(7492),
      GJ = GR(7509),
      yJ = GR(7321),
      tJ = (0, yR.c)({
        chartName: "ComposedChart",
        GraphicalChild: [ZR.b, tR.d, uR.d, RJ],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: JJ.c
        }, {
          axisType: "yAxis",
          AxisComp: GJ.c
        }, {
          axisType: "zAxis",
          AxisComp: bR
        }],
        formatAxisMap: yJ.h
      })
  },
  6554: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => IG
    });
    var yR = GR(66),
      tR = GR(6516),
      uR = GR.n(tR),
      ZR = GR(6357),
      qR = GR.n(ZR),
      iR = GR(6560),
      fR = GR.n(iR),
      VR = GR(6262),
      KR = GR.n(VR),
      wR = GR(6600),
      rR = GR.n(wR),
      eR = GR(6149),
      aR = GR.n(eR),
      LR = GR(6140),
      nR = GR(7026),
      UR = GR(7031),
      WR = GR(7037),
      AR = GR(7039),
      CR = GR(7104),
      XR = GR(7172),
      MR = GR(7177),
      BR = GR(6523),
      lR = GR(7201),
      pR = GR(7181),
      gR = GR(7192),
      bR = GR(6235);

    function vR(RR) {
      return vR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, vR(RR)
    }

    function OR(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function xR(RR) {
      for (var JR = 1; JR < arguments.length; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? OR(Object(GR), !0).forEach((function(JR) {
          NR(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : OR(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }

    function NR(RR, JR, GR) {
      return (JR = function(RR) {
        var JR = function(RR, JR) {
          if ("object" != vR(RR) || !RR) return RR;
          var GR = RR[Symbol.toPrimitive];
          if (void 0 !== GR) {
            var yR = GR.call(RR, JR || "default");
            if ("object" != vR(yR)) return yR;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === JR ? String : Number)(RR)
        }(RR, "string");
        return "symbol" == vR(JR) ? JR : JR + ""
      }(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }
    var DR = ["Webkit", "Moz", "O", "ms"];

    function HR(RR) {
      return HR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, HR(RR)
    }

    function oR() {
      return oR = Object.assign ? Object.assign.bind() : function(RR) {
        for (var JR = 1; JR < arguments.length; JR++) {
          var GR = arguments[JR];
          for (var yR in GR) Object.prototype.hasOwnProperty.call(GR, yR) && (RR[yR] = GR[yR])
        }
        return RR
      }, oR.apply(this, arguments)
    }

    function cR(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function PR(RR) {
      for (var JR = 1; JR < arguments.length; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? cR(Object(GR), !0).forEach((function(JR) {
          dR(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : cR(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }

    function IR(RR, JR) {
      for (var GR = 0; GR < JR.length; GR++) {
        var yR = JR[GR];
        yR.enumerable = yR.enumerable || !1, yR.configurable = !0, "value" in yR && (yR.writable = !0), Object.defineProperty(RR, ER(yR.key), yR)
      }
    }

    function mR(RR, JR, GR) {
      return JR = SR(JR),
        function(RR, JR) {
          if (JR && ("object" === HR(JR) || "function" === typeof JR)) return JR;
          if (void 0 !== JR) throw new TypeError("Derived constructors may only return object or undefined");
          return function(RR) {
            if (void 0 === RR) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return RR
          }(RR)
        }(RR, zR() ? Reflect.construct(JR, GR || [], SR(RR).constructor) : JR.apply(RR, GR))
    }

    function zR() {
      try {
        var RR = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (RR) {}
      return (zR = function() {
        return !!RR
      })()
    }

    function SR(RR) {
      return SR = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(RR) {
        return RR.__proto__ || Object.getPrototypeOf(RR)
      }, SR(RR)
    }

    function jR(RR, JR) {
      return jR = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(RR, JR) {
        return RR.__proto__ = JR, RR
      }, jR(RR, JR)
    }

    function dR(RR, JR, GR) {
      return (JR = ER(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }

    function ER(RR) {
      var JR = function(RR, JR) {
        if ("object" != HR(RR) || !RR) return RR;
        var GR = RR[Symbol.toPrimitive];
        if (void 0 !== GR) {
          var yR = GR.call(RR, JR || "default");
          if ("object" != HR(yR)) return yR;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === JR ? String : Number)(RR)
      }(RR, "string");
      return "symbol" == HR(JR) ? JR : JR + ""
    }
    var YR = function(RR) {
        return RR.changedTouches && !!RR.changedTouches.length
      },
      kR = function(RR) {
        function JR(RR) {
          var GR;
          return function(RR, JR) {
            if (!(RR instanceof JR)) throw new TypeError("Cannot call a class as a function")
          }(this, JR), dR(GR = mR(this, JR, [RR]), "handleDrag", (function(RR) {
            GR.leaveTimer && (clearTimeout(GR.leaveTimer), GR.leaveTimer = null), GR.state.isTravellerMoving ? GR.handleTravellerMove(RR) : GR.state.isSlideMoving && GR.handleSlideDrag(RR)
          })), dR(GR, "handleTouchMove", (function(RR) {
            null != RR.changedTouches && RR.changedTouches.length > 0 && GR.handleDrag(RR.changedTouches[0])
          })), dR(GR, "handleDragEnd", (function() {
            GR.setState({
              isTravellerMoving: !1,
              isSlideMoving: !1
            }, (function() {
              var RR = GR.props,
                JR = RR.endIndex,
                yR = RR.onDragEnd,
                tR = RR.startIndex;
              null === yR || void 0 === yR || yR({
                endIndex: JR,
                startIndex: tR
              })
            })), GR.detachDragEndListener()
          })), dR(GR, "handleLeaveWrapper", (function() {
            (GR.state.isTravellerMoving || GR.state.isSlideMoving) && (GR.leaveTimer = window.setTimeout(GR.handleDragEnd, GR.props.leaveTimeOut))
          })), dR(GR, "handleEnterSlideOrTraveller", (function() {
            GR.setState({
              isTextActive: !0
            })
          })), dR(GR, "handleLeaveSlideOrTraveller", (function() {
            GR.setState({
              isTextActive: !1
            })
          })), dR(GR, "handleSlideDragStart", (function(RR) {
            var JR = YR(RR) ? RR.changedTouches[0] : RR;
            GR.setState({
              isTravellerMoving: !1,
              isSlideMoving: !0,
              slideMoveStartX: JR.pageX
            }), GR.attachDragEndListener()
          })), GR.travellerDragStartHandlers = {
            startX: GR.handleTravellerDragStart.bind(GR, "startX"),
            endX: GR.handleTravellerDragStart.bind(GR, "endX")
          }, GR.state = {}, GR
        }
        return function(RR, JR) {
          if ("function" !== typeof JR && null !== JR) throw new TypeError("Super expression must either be null or a function");
          RR.prototype = Object.create(JR && JR.prototype, {
            constructor: {
              value: RR,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(RR, "prototype", {
            writable: !1
          }), JR && jR(RR, JR)
        }(JR, RR), GR = JR, tR = [{
          key: "componentWillUnmount",
          value: function() {
            this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener()
          }
        }, {
          key: "getIndex",
          value: function(RR) {
            var GR = RR.startX,
              yR = RR.endX,
              tR = this.state.scaleValues,
              uR = this.props,
              ZR = uR.gap,
              qR = uR.data.length - 1,
              iR = Math.min(GR, yR),
              fR = Math.max(GR, yR),
              VR = JR.getIndexInRange(tR, iR),
              KR = JR.getIndexInRange(tR, fR);
            return {
              startIndex: VR - VR % ZR,
              endIndex: KR === qR ? qR : KR - KR % ZR
            }
          }
        }, {
          key: "getTextOfTick",
          value: function(RR) {
            var JR = this.props,
              GR = JR.data,
              yR = JR.tickFormatter,
              tR = JR.dataKey,
              uR = (0, gR.hb)(GR[RR], tR, RR);
            return qR()(yR) ? yR(uR, RR) : uR
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
          value: function(RR) {
            var JR = this.state,
              GR = JR.slideMoveStartX,
              yR = JR.startX,
              tR = JR.endX,
              uR = this.props,
              ZR = uR.x,
              qR = uR.width,
              iR = uR.travellerWidth,
              fR = uR.startIndex,
              VR = uR.endIndex,
              KR = uR.onChange,
              wR = RR.pageX - GR;
            wR > 0 ? wR = Math.min(wR, ZR + qR - iR - tR, ZR + qR - iR - yR) : wR < 0 && (wR = Math.max(wR, ZR - yR, ZR - tR));
            var rR = this.getIndex({
              startX: yR + wR,
              endX: tR + wR
            });
            rR.startIndex === fR && rR.endIndex === VR || !KR || KR(rR), this.setState({
              startX: yR + wR,
              endX: tR + wR,
              slideMoveStartX: RR.pageX
            })
          }
        }, {
          key: "handleTravellerDragStart",
          value: function(RR, JR) {
            var GR = YR(JR) ? JR.changedTouches[0] : JR;
            this.setState({
              isSlideMoving: !1,
              isTravellerMoving: !0,
              movingTravellerId: RR,
              brushMoveStartX: GR.pageX
            }), this.attachDragEndListener()
          }
        }, {
          key: "handleTravellerMove",
          value: function(RR) {
            var JR = this.state,
              GR = JR.brushMoveStartX,
              yR = JR.movingTravellerId,
              tR = JR.endX,
              uR = JR.startX,
              ZR = this.state[yR],
              qR = this.props,
              iR = qR.x,
              fR = qR.width,
              VR = qR.travellerWidth,
              KR = qR.onChange,
              wR = qR.gap,
              rR = qR.data,
              eR = {
                startX: this.state.startX,
                endX: this.state.endX
              },
              aR = RR.pageX - GR;
            aR > 0 ? aR = Math.min(aR, iR + fR - VR - ZR) : aR < 0 && (aR = Math.max(aR, iR - ZR)), eR[yR] = ZR + aR;
            var LR = this.getIndex(eR),
              nR = LR.startIndex,
              UR = LR.endIndex;
            this.setState(dR(dR({}, yR, ZR + aR), "brushMoveStartX", RR.pageX), (function() {
              KR && function() {
                var RR = rR.length - 1;
                return "startX" === yR && (tR > uR ? nR % wR === 0 : UR % wR === 0) || tR < uR && UR === RR || "endX" === yR && (tR > uR ? UR % wR === 0 : nR % wR === 0) || tR > uR && UR === RR
              }() && KR(LR)
            }))
          }
        }, {
          key: "handleTravellerMoveKeyboard",
          value: function(RR, JR) {
            var GR = this,
              yR = this.state,
              tR = yR.scaleValues,
              uR = yR.startX,
              ZR = yR.endX,
              qR = this.state[JR],
              iR = tR.indexOf(qR);
            if (-1 !== iR) {
              var fR = iR + RR;
              if (!(-1 === fR || fR >= tR.length)) {
                var VR = tR[fR];
                "startX" === JR && VR >= ZR || "endX" === JR && VR <= uR || this.setState(dR({}, JR, VR), (function() {
                  GR.props.onChange(GR.getIndex({
                    startX: GR.state.startX,
                    endX: GR.state.endX
                  }))
                }))
              }
            }
          }
        }, {
          key: "renderBackground",
          value: function() {
            var RR = this.props,
              JR = RR.x,
              GR = RR.y,
              tR = RR.width,
              uR = RR.height,
              ZR = RR.fill,
              qR = RR.stroke;
            return yR.createElement("rect", {
              stroke: qR,
              fill: ZR,
              x: JR,
              y: GR,
              width: tR,
              height: uR
            })
          }
        }, {
          key: "renderPanorama",
          value: function() {
            var RR = this.props,
              JR = RR.x,
              GR = RR.y,
              tR = RR.width,
              uR = RR.height,
              ZR = RR.data,
              qR = RR.children,
              iR = RR.padding,
              fR = yR.Children.only(qR);
            return fR ? yR.cloneElement(fR, {
              x: JR,
              y: GR,
              width: tR,
              height: uR,
              margin: iR,
              compact: !0,
              data: ZR
            }) : null
          }
        }, {
          key: "renderTravellerLayer",
          value: function(RR, GR) {
            var tR, uR, ZR = this,
              qR = this.props,
              iR = qR.y,
              fR = qR.travellerWidth,
              VR = qR.height,
              KR = qR.traveller,
              wR = qR.ariaLabel,
              rR = qR.data,
              eR = qR.startIndex,
              aR = qR.endIndex,
              LR = Math.max(RR, this.props.x),
              nR = PR(PR({}, (0, BR.e)(this.props, !1)), {}, {
                x: LR,
                y: iR,
                width: fR,
                height: VR
              }),
              UR = wR || "Min value: ".concat(null === (tR = rR[eR]) || void 0 === tR ? void 0 : tR.name, ", Max value: ").concat(null === (uR = rR[aR]) || void 0 === uR ? void 0 : uR.name);
            return yR.createElement(WR.c, {
              tabIndex: 0,
              role: "slider",
              "aria-label": UR,
              "aria-valuenow": RR,
              className: "recharts-brush-traveller",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.travellerDragStartHandlers[GR],
              onTouchStart: this.travellerDragStartHandlers[GR],
              onKeyDown: function(RR) {
                ["ArrowLeft", "ArrowRight"].includes(RR.key) && (RR.preventDefault(), RR.stopPropagation(), ZR.handleTravellerMoveKeyboard("ArrowRight" === RR.key ? 1 : -1, GR))
              },
              onFocus: function() {
                ZR.setState({
                  isTravellerFocused: !0
                })
              },
              onBlur: function() {
                ZR.setState({
                  isTravellerFocused: !1
                })
              },
              style: {
                cursor: "col-resize"
              }
            }, JR.renderTraveller(KR, nR))
          }
        }, {
          key: "renderSlide",
          value: function(RR, JR) {
            var GR = this.props,
              tR = GR.y,
              uR = GR.height,
              ZR = GR.stroke,
              qR = GR.travellerWidth,
              iR = Math.min(RR, JR) + qR,
              fR = Math.max(Math.abs(JR - RR) - qR, 0);
            return yR.createElement("rect", {
              className: "recharts-brush-slide",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.handleSlideDragStart,
              onTouchStart: this.handleSlideDragStart,
              style: {
                cursor: "move"
              },
              stroke: "none",
              fill: ZR,
              fillOpacity: .2,
              x: iR,
              y: tR,
              width: fR,
              height: uR
            })
          }
        }, {
          key: "renderText",
          value: function() {
            var RR = this.props,
              JR = RR.startIndex,
              GR = RR.endIndex,
              tR = RR.y,
              uR = RR.height,
              ZR = RR.travellerWidth,
              qR = RR.stroke,
              iR = this.state,
              fR = iR.startX,
              VR = iR.endX,
              KR = {
                pointerEvents: "none",
                fill: qR
              };
            return yR.createElement(WR.c, {
              className: "recharts-brush-texts"
            }, yR.createElement(pR.d, oR({
              textAnchor: "end",
              verticalAnchor: "middle",
              x: Math.min(fR, VR) - 5,
              y: tR + uR / 2
            }, KR), this.getTextOfTick(JR)), yR.createElement(pR.d, oR({
              textAnchor: "start",
              verticalAnchor: "middle",
              x: Math.max(fR, VR) + ZR + 5,
              y: tR + uR / 2
            }, KR), this.getTextOfTick(GR)))
          }
        }, {
          key: "render",
          value: function() {
            var RR = this.props,
              JR = RR.data,
              GR = RR.className,
              tR = RR.children,
              uR = RR.x,
              ZR = RR.y,
              qR = RR.width,
              iR = RR.height,
              fR = RR.alwaysShowText,
              VR = this.state,
              KR = VR.startX,
              wR = VR.endX,
              rR = VR.isTextActive,
              eR = VR.isSlideMoving,
              aR = VR.isTravellerMoving,
              nR = VR.isTravellerFocused;
            if (!JR || !JR.length || !(0, bR.C)(uR) || !(0, bR.C)(ZR) || !(0, bR.C)(qR) || !(0, bR.C)(iR) || qR <= 0 || iR <= 0) return null;
            var UR = (0, LR.c)("recharts-brush", GR),
              AR = 1 === yR.Children.count(tR),
              CR = function(RR, JR) {
                if (!RR) return null;
                var GR = RR.replace(/(\w)/, (function(RR) {
                    return RR.toUpperCase()
                  })),
                  yR = DR.reduce((function(RR, yR) {
                    return xR(xR({}, RR), {}, NR({}, yR + GR, JR))
                  }), {});
                return yR[RR] = JR, yR
              }("userSelect", "none");
            return yR.createElement(WR.c, {
              className: UR,
              onMouseLeave: this.handleLeaveWrapper,
              onTouchMove: this.handleTouchMove,
              style: CR
            }, this.renderBackground(), AR && this.renderPanorama(), this.renderSlide(KR, wR), this.renderTravellerLayer(KR, "startX"), this.renderTravellerLayer(wR, "endX"), (rR || eR || aR || nR || fR) && this.renderText())
          }
        }], uR = [{
          key: "renderDefaultTraveller",
          value: function(RR) {
            var JR = RR.x,
              GR = RR.y,
              tR = RR.width,
              uR = RR.height,
              ZR = RR.stroke,
              qR = Math.floor(GR + uR / 2) - 1;
            return yR.createElement(yR.Fragment, null, yR.createElement("rect", {
              x: JR,
              y: GR,
              width: tR,
              height: uR,
              fill: ZR,
              stroke: "none"
            }), yR.createElement("line", {
              x1: JR + 1,
              y1: qR,
              x2: JR + tR - 1,
              y2: qR,
              fill: "none",
              stroke: "#fff"
            }), yR.createElement("line", {
              x1: JR + 1,
              y1: qR + 2,
              x2: JR + tR - 1,
              y2: qR + 2,
              fill: "none",
              stroke: "#fff"
            }))
          }
        }, {
          key: "renderTraveller",
          value: function(RR, GR) {
            return yR.isValidElement(RR) ? yR.cloneElement(RR, GR) : qR()(RR) ? RR(GR) : JR.renderDefaultTraveller(GR)
          }
        }, {
          key: "getDerivedStateFromProps",
          value: function(RR, JR) {
            var GR = RR.data,
              yR = RR.width,
              tR = RR.x,
              uR = RR.travellerWidth,
              ZR = RR.updateId,
              qR = RR.startIndex,
              iR = RR.endIndex;
            if (GR !== JR.prevData || ZR !== JR.prevUpdateId) return PR({
              prevData: GR,
              prevTravellerWidth: uR,
              prevUpdateId: ZR,
              prevX: tR,
              prevWidth: yR
            }, GR && GR.length ? function(RR) {
              var JR = RR.data,
                GR = RR.startIndex,
                yR = RR.endIndex,
                tR = RR.x,
                uR = RR.width,
                ZR = RR.travellerWidth;
              if (!JR || !JR.length) return {};
              var qR = JR.length,
                iR = (0, lR.e)().domain(fR()(0, qR)).range([tR, tR + uR - ZR]),
                VR = iR.domain().map((function(RR) {
                  return iR(RR)
                }));
              return {
                isTextActive: !1,
                isSlideMoving: !1,
                isTravellerMoving: !1,
                isTravellerFocused: !1,
                startX: iR(GR),
                endX: iR(yR),
                scale: iR,
                scaleValues: VR
              }
            }({
              data: GR,
              width: yR,
              x: tR,
              travellerWidth: uR,
              startIndex: qR,
              endIndex: iR
            }) : {
              scale: null,
              scaleValues: null
            });
            if (JR.scale && (yR !== JR.prevWidth || tR !== JR.prevX || uR !== JR.prevTravellerWidth)) {
              JR.scale.range([tR, tR + yR - uR]);
              var VR = JR.scale.domain().map((function(RR) {
                return JR.scale(RR)
              }));
              return {
                prevData: GR,
                prevTravellerWidth: uR,
                prevUpdateId: ZR,
                prevX: tR,
                prevWidth: yR,
                startX: JR.scale(RR.startIndex),
                endX: JR.scale(RR.endIndex),
                scaleValues: VR
              }
            }
            return null
          }
        }, {
          key: "getIndexInRange",
          value: function(RR, JR) {
            for (var GR = 0, yR = RR.length - 1; yR - GR > 1;) {
              var tR = Math.floor((GR + yR) / 2);
              RR[tR] > JR ? yR = tR : GR = tR
            }
            return JR >= RR[yR] ? yR : GR
          }
        }], tR && IR(GR.prototype, tR), uR && IR(GR, uR), Object.defineProperty(GR, "prototype", {
          writable: !1
        }), GR;
        var GR, tR, uR
      }(yR.PureComponent);
    dR(kR, "displayName", "Brush"), dR(kR, "defaultProps", {
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
    var QR = GR(7189),
      FR = GR(7287),
      TR = GR(7301),
      sR = GR(7312),
      hR = GR(7321),
      RJ = GR(6520);

    function JJ() {
      return JJ = Object.assign ? Object.assign.bind() : function(RR) {
        for (var JR = 1; JR < arguments.length; JR++) {
          var GR = arguments[JR];
          for (var yR in GR) Object.prototype.hasOwnProperty.call(GR, yR) && (RR[yR] = GR[yR])
        }
        return RR
      }, JJ.apply(this, arguments)
    }

    function GJ(RR) {
      return GJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, GJ(RR)
    }

    function yJ(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function tJ(RR) {
      for (var JR = 1; JR < arguments.length; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? yJ(Object(GR), !0).forEach((function(JR) {
          VJ(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : yJ(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }

    function uJ(RR, JR) {
      for (var GR = 0; GR < JR.length; GR++) {
        var yR = JR[GR];
        yR.enumerable = yR.enumerable || !1, yR.configurable = !0, "value" in yR && (yR.writable = !0), Object.defineProperty(RR, KJ(yR.key), yR)
      }
    }

    function ZJ(RR, JR, GR) {
      return JR = iJ(JR),
        function(RR, JR) {
          if (JR && ("object" === GJ(JR) || "function" === typeof JR)) return JR;
          if (void 0 !== JR) throw new TypeError("Derived constructors may only return object or undefined");
          return function(RR) {
            if (void 0 === RR) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return RR
          }(RR)
        }(RR, qJ() ? Reflect.construct(JR, GR || [], iJ(RR).constructor) : JR.apply(RR, GR))
    }

    function qJ() {
      try {
        var RR = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (RR) {}
      return (qJ = function() {
        return !!RR
      })()
    }

    function iJ(RR) {
      return iJ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(RR) {
        return RR.__proto__ || Object.getPrototypeOf(RR)
      }, iJ(RR)
    }

    function fJ(RR, JR) {
      return fJ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(RR, JR) {
        return RR.__proto__ = JR, RR
      }, fJ(RR, JR)
    }

    function VJ(RR, JR, GR) {
      return (JR = KJ(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }

    function KJ(RR) {
      var JR = function(RR, JR) {
        if ("object" != GJ(RR) || !RR) return RR;
        var GR = RR[Symbol.toPrimitive];
        if (void 0 !== GR) {
          var yR = GR.call(RR, JR || "default");
          if ("object" != GJ(yR)) return yR;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === JR ? String : Number)(RR)
      }(RR, "string");
      return "symbol" == GJ(JR) ? JR : JR + ""
    }
    var wJ = function(RR) {
      function JR() {
        return function(RR, JR) {
          if (!(RR instanceof JR)) throw new TypeError("Cannot call a class as a function")
        }(this, JR), ZJ(this, JR, arguments)
      }
      return function(RR, JR) {
        if ("function" !== typeof JR && null !== JR) throw new TypeError("Super expression must either be null or a function");
        RR.prototype = Object.create(JR && JR.prototype, {
          constructor: {
            value: RR,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(RR, "prototype", {
          writable: !1
        }), JR && fJ(RR, JR)
      }(JR, RR), GR = JR, (tR = [{
        key: "render",
        value: function() {
          var RR = this.props,
            GR = RR.x,
            tR = RR.y,
            uR = RR.r,
            ZR = RR.alwaysShow,
            qR = RR.clipPathId,
            iR = (0, bR.B)(GR),
            fR = (0, bR.B)(tR);
          if ((0, RJ.c)(void 0 === ZR, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !iR || !fR) return null;
          var VR = function(RR) {
            var JR = RR.x,
              GR = RR.y,
              yR = RR.xAxis,
              tR = RR.yAxis,
              uR = (0, hR.e)({
                x: yR.scale,
                y: tR.scale
              }),
              ZR = uR.apply({
                x: JR,
                y: GR
              }, {
                bandAware: !0
              });
            return (0, sR.c)(RR, "discard") && !uR.isInRange(ZR) ? null : ZR
          }(this.props);
          if (!VR) return null;
          var KR = VR.x,
            wR = VR.y,
            rR = this.props,
            eR = rR.shape,
            aR = rR.className,
            nR = tJ(tJ({
              clipPath: (0, sR.c)(this.props, "hidden") ? "url(#".concat(qR, ")") : void 0
            }, (0, BR.e)(this.props, !0)), {}, {
              cx: KR,
              cy: wR
            });
          return yR.createElement(WR.c, {
            className: (0, LR.c)("recharts-reference-dot", aR)
          }, JR.renderDot(eR, nR), TR.b.renderCallByParent(this.props, {
            x: KR - uR,
            y: wR - uR,
            width: 2 * uR,
            height: 2 * uR
          }))
        }
      }]) && uJ(GR.prototype, tR), uR && uJ(GR, uR), Object.defineProperty(GR, "prototype", {
        writable: !1
      }), GR;
      var GR, tR, uR
    }(yR.Component);
    VJ(wJ, "displayName", "ReferenceDot"), VJ(wJ, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#fff",
      stroke: "#ccc",
      fillOpacity: 1,
      strokeWidth: 1
    }), VJ(wJ, "renderDot", (function(RR, JR) {
      return yR.isValidElement(RR) ? yR.cloneElement(RR, JR) : qR()(RR) ? RR(JR) : yR.createElement(XR.d, JJ({}, JR, {
        cx: JR.cx,
        cy: JR.cy,
        className: "recharts-reference-dot-dot"
      }))
    }));
    var rJ = GR(7412);

    function eJ() {
      return eJ = Object.assign ? Object.assign.bind() : function(RR) {
        for (var JR = 1; JR < arguments.length; JR++) {
          var GR = arguments[JR];
          for (var yR in GR) Object.prototype.hasOwnProperty.call(GR, yR) && (RR[yR] = GR[yR])
        }
        return RR
      }, eJ.apply(this, arguments)
    }

    function aJ(RR) {
      return aJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, aJ(RR)
    }

    function LJ(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function nJ(RR) {
      for (var JR = 1; JR < arguments.length; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? LJ(Object(GR), !0).forEach((function(JR) {
          MJ(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : LJ(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }

    function UJ(RR, JR) {
      for (var GR = 0; GR < JR.length; GR++) {
        var yR = JR[GR];
        yR.enumerable = yR.enumerable || !1, yR.configurable = !0, "value" in yR && (yR.writable = !0), Object.defineProperty(RR, BJ(yR.key), yR)
      }
    }

    function WJ(RR, JR, GR) {
      return JR = CJ(JR),
        function(RR, JR) {
          if (JR && ("object" === aJ(JR) || "function" === typeof JR)) return JR;
          if (void 0 !== JR) throw new TypeError("Derived constructors may only return object or undefined");
          return function(RR) {
            if (void 0 === RR) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return RR
          }(RR)
        }(RR, AJ() ? Reflect.construct(JR, GR || [], CJ(RR).constructor) : JR.apply(RR, GR))
    }

    function AJ() {
      try {
        var RR = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (RR) {}
      return (AJ = function() {
        return !!RR
      })()
    }

    function CJ(RR) {
      return CJ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(RR) {
        return RR.__proto__ || Object.getPrototypeOf(RR)
      }, CJ(RR)
    }

    function XJ(RR, JR) {
      return XJ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(RR, JR) {
        return RR.__proto__ = JR, RR
      }, XJ(RR, JR)
    }

    function MJ(RR, JR, GR) {
      return (JR = BJ(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }

    function BJ(RR) {
      var JR = function(RR, JR) {
        if ("object" != aJ(RR) || !RR) return RR;
        var GR = RR[Symbol.toPrimitive];
        if (void 0 !== GR) {
          var yR = GR.call(RR, JR || "default");
          if ("object" != aJ(yR)) return yR;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === JR ? String : Number)(RR)
      }(RR, "string");
      return "symbol" == aJ(JR) ? JR : JR + ""
    }
    var lJ = function(RR) {
      function JR() {
        return function(RR, JR) {
          if (!(RR instanceof JR)) throw new TypeError("Cannot call a class as a function")
        }(this, JR), WJ(this, JR, arguments)
      }
      return function(RR, JR) {
        if ("function" !== typeof JR && null !== JR) throw new TypeError("Super expression must either be null or a function");
        RR.prototype = Object.create(JR && JR.prototype, {
          constructor: {
            value: RR,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(RR, "prototype", {
          writable: !1
        }), JR && XJ(RR, JR)
      }(JR, RR), GR = JR, (tR = [{
        key: "render",
        value: function() {
          var RR = this.props,
            GR = RR.x1,
            tR = RR.x2,
            uR = RR.y1,
            ZR = RR.y2,
            qR = RR.className,
            iR = RR.alwaysShow,
            fR = RR.clipPathId;
          (0, RJ.c)(void 0 === iR, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
          var VR = (0, bR.B)(GR),
            KR = (0, bR.B)(tR),
            wR = (0, bR.B)(uR),
            rR = (0, bR.B)(ZR),
            eR = this.props.shape;
          if (!VR && !KR && !wR && !rR && !eR) return null;
          var aR = function(RR, JR, GR, yR, tR) {
            var uR = tR.x1,
              ZR = tR.x2,
              qR = tR.y1,
              iR = tR.y2,
              fR = tR.xAxis,
              VR = tR.yAxis;
            if (!fR || !VR) return null;
            var KR = (0, hR.e)({
                x: fR.scale,
                y: VR.scale
              }),
              wR = {
                x: RR ? KR.x.apply(uR, {
                  position: "start"
                }) : KR.x.rangeMin,
                y: GR ? KR.y.apply(qR, {
                  position: "start"
                }) : KR.y.rangeMin
              },
              rR = {
                x: JR ? KR.x.apply(ZR, {
                  position: "end"
                }) : KR.x.rangeMax,
                y: yR ? KR.y.apply(iR, {
                  position: "end"
                }) : KR.y.rangeMax
              };
            return !(0, sR.c)(tR, "discard") || KR.isInRange(wR) && KR.isInRange(rR) ? (0, hR.n)(wR, rR) : null
          }(VR, KR, wR, rR, this.props);
          if (!aR && !eR) return null;
          var nR = (0, sR.c)(this.props, "hidden") ? "url(#".concat(fR, ")") : void 0;
          return yR.createElement(WR.c, {
            className: (0, LR.c)("recharts-reference-area", qR)
          }, JR.renderRect(eR, nJ(nJ({
            clipPath: nR
          }, (0, BR.e)(this.props, !0)), aR)), TR.b.renderCallByParent(this.props, aR))
        }
      }]) && UJ(GR.prototype, tR), uR && UJ(GR, uR), Object.defineProperty(GR, "prototype", {
        writable: !1
      }), GR;
      var GR, tR, uR
    }(yR.Component);

    function pJ(RR) {
      return function(RR) {
        if (Array.isArray(RR)) return gJ(RR)
      }(RR) || function(RR) {
        if ("undefined" !== typeof Symbol && null != RR[Symbol.iterator] || null != RR["@@iterator"]) return Array.from(RR)
      }(RR) || function(RR, JR) {
        if (!RR) return;
        if ("string" === typeof RR) return gJ(RR, JR);
        var GR = Object.prototype.toString.call(RR).slice(8, -1);
        "Object" === GR && RR.constructor && (GR = RR.constructor.name);
        if ("Map" === GR || "Set" === GR) return Array.from(RR);
        if ("Arguments" === GR || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GR)) return gJ(RR, JR)
      }(RR) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function gJ(RR, JR) {
      (null == JR || JR > RR.length) && (JR = RR.length);
      for (var GR = 0, yR = new Array(JR); GR < JR; GR++) yR[GR] = RR[GR];
      return yR
    }
    MJ(lJ, "displayName", "ReferenceArea"), MJ(lJ, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#ccc",
      fillOpacity: .5,
      stroke: "none",
      strokeWidth: 1
    }), MJ(lJ, "renderRect", (function(RR, JR) {
      return yR.isValidElement(RR) ? yR.cloneElement(RR, JR) : qR()(RR) ? RR(JR) : yR.createElement(MR.c, eJ({}, JR, {
        className: "recharts-reference-area-rect"
      }))
    }));
    var bJ = function(RR, JR, GR, yR, tR) {
        var uR = (0, BR.i)(RR, rJ.c),
          ZR = (0, BR.i)(RR, wJ),
          qR = [].concat(pJ(uR), pJ(ZR)),
          iR = (0, BR.i)(RR, lJ),
          fR = "".concat(yR, "Id"),
          VR = yR[0],
          KR = JR;
        if (qR.length && (KR = qR.reduce((function(RR, JR) {
            if (JR.props[fR] === GR && (0, sR.c)(JR.props, "extendDomain") && (0, bR.C)(JR.props[VR])) {
              var yR = JR.props[VR];
              return [Math.min(RR[0], yR), Math.max(RR[1], yR)]
            }
            return RR
          }), KR)), iR.length) {
          var wR = "".concat(VR, "1"),
            rR = "".concat(VR, "2");
          KR = iR.reduce((function(RR, JR) {
            if (JR.props[fR] === GR && (0, sR.c)(JR.props, "extendDomain") && (0, bR.C)(JR.props[wR]) && (0, bR.C)(JR.props[rR])) {
              var yR = JR.props[wR],
                tR = JR.props[rR];
              return [Math.min(RR[0], yR, tR), Math.max(RR[1], yR, tR)]
            }
            return RR
          }), KR)
        }
        return tR && tR.length && (KR = tR.reduce((function(RR, JR) {
          return (0, bR.C)(JR) ? [Math.min(RR[0], JR), Math.max(RR[1], JR)] : RR
        }), KR)), KR
      },
      vJ = GR(7309),
      OJ = GR(6539),
      xJ = GR(41),
      NJ = new(GR.n(xJ)()),
      DJ = "recharts.syncMouseEvents",
      HJ = GR(6542);

    function oJ(RR) {
      return oJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, oJ(RR)
    }

    function cJ(RR, JR) {
      for (var GR = 0; GR < JR.length; GR++) {
        var yR = JR[GR];
        yR.enumerable = yR.enumerable || !1, yR.configurable = !0, "value" in yR && (yR.writable = !0), Object.defineProperty(RR, IJ(yR.key), yR)
      }
    }

    function PJ(RR, JR, GR) {
      return (JR = IJ(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }

    function IJ(RR) {
      var JR = function(RR, JR) {
        if ("object" != oJ(RR) || !RR) return RR;
        var GR = RR[Symbol.toPrimitive];
        if (void 0 !== GR) {
          var yR = GR.call(RR, JR || "default");
          if ("object" != oJ(yR)) return yR;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === JR ? String : Number)(RR)
      }(RR, "string");
      return "symbol" == oJ(JR) ? JR : JR + ""
    }
    var mJ = function() {
      return RR = function RR() {
        ! function(RR, JR) {
          if (!(RR instanceof JR)) throw new TypeError("Cannot call a class as a function")
        }(this, RR), PJ(this, "activeIndex", 0), PJ(this, "coordinateList", []), PJ(this, "layout", "horizontal")
      }, (JR = [{
        key: "setDetails",
        value: function(RR) {
          var JR, GR = RR.coordinateList,
            yR = void 0 === GR ? null : GR,
            tR = RR.container,
            uR = void 0 === tR ? null : tR,
            ZR = RR.layout,
            qR = void 0 === ZR ? null : ZR,
            iR = RR.offset,
            fR = void 0 === iR ? null : iR,
            VR = RR.mouseHandlerCallback,
            KR = void 0 === VR ? null : VR;
          this.coordinateList = null !== (JR = null !== yR && void 0 !== yR ? yR : this.coordinateList) && void 0 !== JR ? JR : [], this.container = null !== uR && void 0 !== uR ? uR : this.container, this.layout = null !== qR && void 0 !== qR ? qR : this.layout, this.offset = null !== fR && void 0 !== fR ? fR : this.offset, this.mouseHandlerCallback = null !== KR && void 0 !== KR ? KR : this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1)
        }
      }, {
        key: "focus",
        value: function() {
          this.spoofMouse()
        }
      }, {
        key: "keyboardEvent",
        value: function(RR) {
          if (0 !== this.coordinateList.length) switch (RR.key) {
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
        value: function(RR) {
          this.activeIndex = RR
        }
      }, {
        key: "spoofMouse",
        value: function() {
          var RR, JR;
          if ("horizontal" === this.layout && 0 !== this.coordinateList.length) {
            var GR = this.container.getBoundingClientRect(),
              yR = GR.x,
              tR = GR.y,
              uR = GR.height,
              ZR = this.coordinateList[this.activeIndex].coordinate,
              qR = (null === (RR = window) || void 0 === RR ? void 0 : RR.scrollX) || 0,
              iR = (null === (JR = window) || void 0 === JR ? void 0 : JR.scrollY) || 0,
              fR = yR + ZR + qR,
              VR = tR + this.offset.top + uR / 2 + iR;
            this.mouseHandlerCallback({
              pageX: fR,
              pageY: VR
            })
          }
        }
      }]) && cJ(RR.prototype, JR), GR && cJ(RR, GR), Object.defineProperty(RR, "prototype", {
        writable: !1
      }), RR;
      var RR, JR, GR
    }();
    var zJ = GR(7381),
      SJ = GR(7471);

    function jJ(RR) {
      return jJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, jJ(RR)
    }
    var dJ = ["x", "y", "top", "left", "width", "height", "className"];

    function EJ() {
      return EJ = Object.assign ? Object.assign.bind() : function(RR) {
        for (var JR = 1; JR < arguments.length; JR++) {
          var GR = arguments[JR];
          for (var yR in GR) Object.prototype.hasOwnProperty.call(GR, yR) && (RR[yR] = GR[yR])
        }
        return RR
      }, EJ.apply(this, arguments)
    }

    function YJ(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function kJ(RR, JR, GR) {
      return (JR = function(RR) {
        var JR = function(RR, JR) {
          if ("object" != jJ(RR) || !RR) return RR;
          var GR = RR[Symbol.toPrimitive];
          if (void 0 !== GR) {
            var yR = GR.call(RR, JR || "default");
            if ("object" != jJ(yR)) return yR;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === JR ? String : Number)(RR)
        }(RR, "string");
        return "symbol" == jJ(JR) ? JR : JR + ""
      }(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }

    function QJ(RR, JR) {
      if (null == RR) return {};
      var GR, yR, tR = function(RR, JR) {
        if (null == RR) return {};
        var GR = {};
        for (var yR in RR)
          if (Object.prototype.hasOwnProperty.call(RR, yR)) {
            if (JR.indexOf(yR) >= 0) continue;
            GR[yR] = RR[yR]
          } return GR
      }(RR, JR);
      if (Object.getOwnPropertySymbols) {
        var uR = Object.getOwnPropertySymbols(RR);
        for (yR = 0; yR < uR.length; yR++) GR = uR[yR], JR.indexOf(GR) >= 0 || Object.prototype.propertyIsEnumerable.call(RR, GR) && (tR[GR] = RR[GR])
      }
      return tR
    }
    var FJ = function(RR, JR, GR, yR, tR, uR) {
        return "M".concat(RR, ",").concat(tR, "v").concat(yR, "M").concat(uR, ",").concat(JR, "h").concat(GR)
      },
      TJ = function(RR) {
        var JR = RR.x,
          GR = void 0 === JR ? 0 : JR,
          tR = RR.y,
          uR = void 0 === tR ? 0 : tR,
          ZR = RR.top,
          qR = void 0 === ZR ? 0 : ZR,
          iR = RR.left,
          fR = void 0 === iR ? 0 : iR,
          VR = RR.width,
          KR = void 0 === VR ? 0 : VR,
          wR = RR.height,
          rR = void 0 === wR ? 0 : wR,
          eR = RR.className,
          aR = function(RR) {
            for (var JR = 1; JR < arguments.length; JR++) {
              var GR = null != arguments[JR] ? arguments[JR] : {};
              JR % 2 ? YJ(Object(GR), !0).forEach((function(JR) {
                kJ(RR, JR, GR[JR])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : YJ(Object(GR)).forEach((function(JR) {
                Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
              }))
            }
            return RR
          }({
            x: GR,
            y: uR,
            top: qR,
            left: fR,
            width: KR,
            height: rR
          }, QJ(RR, dJ));
        return (0, bR.C)(GR) && (0, bR.C)(uR) && (0, bR.C)(KR) && (0, bR.C)(rR) && (0, bR.C)(qR) && (0, bR.C)(fR) ? yR.createElement("path", EJ({}, (0, BR.e)(aR, !0), {
          className: (0, LR.c)("recharts-cross", eR),
          d: FJ(GR, uR, KR, rR, qR, fR)
        })) : null
      };

    function sJ(RR) {
      var JR = RR.cx,
        GR = RR.cy,
        yR = RR.radius,
        tR = RR.startAngle,
        uR = RR.endAngle;
      return {
        points: [(0, vJ.g)(JR, GR, yR, tR), (0, vJ.g)(JR, GR, yR, uR)],
        cx: JR,
        cy: GR,
        radius: yR,
        startAngle: tR,
        endAngle: uR
      }
    }
    var hJ = GR(7406);

    function RG(RR, JR, GR) {
      var yR, tR, uR, ZR;
      if ("horizontal" === RR) uR = yR = JR.x, tR = GR.top, ZR = GR.top + GR.height;
      else if ("vertical" === RR) ZR = tR = JR.y, yR = GR.left, uR = GR.left + GR.width;
      else if (null != JR.cx && null != JR.cy) {
        if ("centric" !== RR) return sJ(JR);
        var qR = JR.cx,
          iR = JR.cy,
          fR = JR.innerRadius,
          VR = JR.outerRadius,
          KR = JR.angle,
          wR = (0, vJ.g)(qR, iR, fR, KR),
          rR = (0, vJ.g)(qR, iR, VR, KR);
        yR = wR.x, tR = wR.y, uR = rR.x, ZR = rR.y
      }
      return [{
        x: yR,
        y: tR
      }, {
        x: uR,
        y: ZR
      }]
    }

    function JG(RR) {
      return JG = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, JG(RR)
    }

    function GG(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function yG(RR) {
      for (var JR = 1; JR < arguments.length; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? GG(Object(GR), !0).forEach((function(JR) {
          tG(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : GG(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }

    function tG(RR, JR, GR) {
      return (JR = function(RR) {
        var JR = function(RR, JR) {
          if ("object" != JG(RR) || !RR) return RR;
          var GR = RR[Symbol.toPrimitive];
          if (void 0 !== GR) {
            var yR = GR.call(RR, JR || "default");
            if ("object" != JG(yR)) return yR;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === JR ? String : Number)(RR)
        }(RR, "string");
        return "symbol" == JG(JR) ? JR : JR + ""
      }(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }

    function uG(RR) {
      var JR, GR, tR, uR = RR.element,
        ZR = RR.tooltipEventType,
        qR = RR.isActive,
        iR = RR.activeCoordinate,
        fR = RR.activePayload,
        VR = RR.offset,
        KR = RR.activeTooltipIndex,
        wR = RR.tooltipAxisBandSize,
        rR = RR.layout,
        eR = RR.chartName,
        aR = null !== (JR = uR.props.cursor) && void 0 !== JR ? JR : null === (GR = uR.type.defaultProps) || void 0 === GR ? void 0 : GR.cursor;
      if (!uR || !aR || !qR || !iR || "ScatterChart" !== eR && "axis" !== ZR) return null;
      var nR = SJ.e;
      if ("ScatterChart" === eR) tR = iR, nR = TJ;
      else if ("BarChart" === eR) tR = function(RR, JR, GR, yR) {
        var tR = yR / 2;
        return {
          stroke: "none",
          fill: "#ccc",
          x: "horizontal" === RR ? JR.x - tR : GR.left + .5,
          y: "horizontal" === RR ? GR.top + .5 : JR.y - tR,
          width: "horizontal" === RR ? yR : GR.width - 1,
          height: "horizontal" === RR ? GR.height - 1 : yR
        }
      }(rR, iR, VR, wR), nR = MR.c;
      else if ("radial" === rR) {
        var UR = sJ(iR),
          WR = UR.cx,
          AR = UR.cy,
          CR = UR.radius;
        tR = {
          cx: WR,
          cy: AR,
          startAngle: UR.startAngle,
          endAngle: UR.endAngle,
          innerRadius: CR,
          outerRadius: CR
        }, nR = hJ.c
      } else tR = {
        points: RG(rR, iR, VR)
      }, nR = SJ.e;
      var XR = yG(yG(yG(yG({
        stroke: "#ccc",
        pointerEvents: "none"
      }, VR), tR), (0, BR.e)(aR, !1)), {}, {
        payload: fR,
        payloadIndex: KR,
        className: (0, LR.c)("recharts-tooltip-cursor", aR.className)
      });
      return (0, yR.isValidElement)(aR) ? (0, yR.cloneElement)(aR, XR) : (0, yR.createElement)(nR, XR)
    }
    var ZG = GR(7436),
      qG = ["item"],
      iG = ["children", "className", "width", "height", "style", "compact", "title", "desc"];

    function fG(RR) {
      return fG = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, fG(RR)
    }

    function VG() {
      return VG = Object.assign ? Object.assign.bind() : function(RR) {
        for (var JR = 1; JR < arguments.length; JR++) {
          var GR = arguments[JR];
          for (var yR in GR) Object.prototype.hasOwnProperty.call(GR, yR) && (RR[yR] = GR[yR])
        }
        return RR
      }, VG.apply(this, arguments)
    }

    function KG(RR, JR) {
      return function(RR) {
        if (Array.isArray(RR)) return RR
      }(RR) || function(RR, JR) {
        var GR = null == RR ? null : "undefined" != typeof Symbol && RR[Symbol.iterator] || RR["@@iterator"];
        if (null != GR) {
          var yR, tR, uR, ZR, qR = [],
            iR = !0,
            fR = !1;
          try {
            if (uR = (GR = GR.call(RR)).next, 0 === JR) {
              if (Object(GR) !== GR) return;
              iR = !1
            } else
              for (; !(iR = (yR = uR.call(GR)).done) && (qR.push(yR.value), qR.length !== JR); iR = !0);
          } catch (RR) {
            fR = !0, tR = RR
          } finally {
            try {
              if (!iR && null != GR.return && (ZR = GR.return(), Object(ZR) !== ZR)) return
            } finally {
              if (fR) throw tR
            }
          }
          return qR
        }
      }(RR, JR) || WG(RR, JR) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function wG(RR, JR) {
      if (null == RR) return {};
      var GR, yR, tR = function(RR, JR) {
        if (null == RR) return {};
        var GR = {};
        for (var yR in RR)
          if (Object.prototype.hasOwnProperty.call(RR, yR)) {
            if (JR.indexOf(yR) >= 0) continue;
            GR[yR] = RR[yR]
          } return GR
      }(RR, JR);
      if (Object.getOwnPropertySymbols) {
        var uR = Object.getOwnPropertySymbols(RR);
        for (yR = 0; yR < uR.length; yR++) GR = uR[yR], JR.indexOf(GR) >= 0 || Object.prototype.propertyIsEnumerable.call(RR, GR) && (tR[GR] = RR[GR])
      }
      return tR
    }

    function rG(RR, JR) {
      for (var GR = 0; GR < JR.length; GR++) {
        var yR = JR[GR];
        yR.enumerable = yR.enumerable || !1, yR.configurable = !0, "value" in yR && (yR.writable = !0), Object.defineProperty(RR, BG(yR.key), yR)
      }
    }

    function eG(RR, JR, GR) {
      return JR = LG(JR),
        function(RR, JR) {
          if (JR && ("object" === fG(JR) || "function" === typeof JR)) return JR;
          if (void 0 !== JR) throw new TypeError("Derived constructors may only return object or undefined");
          return function(RR) {
            if (void 0 === RR) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return RR
          }(RR)
        }(RR, aG() ? Reflect.construct(JR, GR || [], LG(RR).constructor) : JR.apply(RR, GR))
    }

    function aG() {
      try {
        var RR = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (RR) {}
      return (aG = function() {
        return !!RR
      })()
    }

    function LG(RR) {
      return LG = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(RR) {
        return RR.__proto__ || Object.getPrototypeOf(RR)
      }, LG(RR)
    }

    function nG(RR, JR) {
      return nG = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(RR, JR) {
        return RR.__proto__ = JR, RR
      }, nG(RR, JR)
    }

    function UG(RR) {
      return function(RR) {
        if (Array.isArray(RR)) return AG(RR)
      }(RR) || function(RR) {
        if ("undefined" !== typeof Symbol && null != RR[Symbol.iterator] || null != RR["@@iterator"]) return Array.from(RR)
      }(RR) || WG(RR) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function WG(RR, JR) {
      if (RR) {
        if ("string" === typeof RR) return AG(RR, JR);
        var GR = Object.prototype.toString.call(RR).slice(8, -1);
        return "Object" === GR && RR.constructor && (GR = RR.constructor.name), "Map" === GR || "Set" === GR ? Array.from(RR) : "Arguments" === GR || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GR) ? AG(RR, JR) : void 0
      }
    }

    function AG(RR, JR) {
      (null == JR || JR > RR.length) && (JR = RR.length);
      for (var GR = 0, yR = new Array(JR); GR < JR; GR++) yR[GR] = RR[GR];
      return yR
    }

    function CG(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function XG(RR) {
      for (var JR = 1; JR < arguments.length; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? CG(Object(GR), !0).forEach((function(JR) {
          MG(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : CG(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }

    function MG(RR, JR, GR) {
      return (JR = BG(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }

    function BG(RR) {
      var JR = function(RR, JR) {
        if ("object" != fG(RR) || !RR) return RR;
        var GR = RR[Symbol.toPrimitive];
        if (void 0 !== GR) {
          var yR = GR.call(RR, JR || "default");
          if ("object" != fG(yR)) return yR;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === JR ? String : Number)(RR)
      }(RR, "string");
      return "symbol" == fG(JR) ? JR : JR + ""
    }
    var lG = {
        xAxis: ["bottom", "top"],
        yAxis: ["left", "right"]
      },
      pG = {
        width: "100%",
        height: "100%"
      },
      gG = {
        x: 0,
        y: 0
      };

    function bG(RR) {
      return RR
    }
    var vG = function(RR, JR) {
      var GR = JR.graphicalItems,
        yR = JR.dataStartIndex,
        tR = JR.dataEndIndex,
        uR = (null !== GR && void 0 !== GR ? GR : []).reduce((function(RR, JR) {
          var GR = JR.props.data;
          return GR && GR.length ? [].concat(UG(RR), UG(GR)) : RR
        }), []);
      return uR.length > 0 ? uR : RR && RR.length && (0, bR.C)(yR) && (0, bR.C)(tR) ? RR.slice(yR, tR + 1) : []
    };

    function OG(RR) {
      return "number" === RR ? [0, "auto"] : void 0
    }
    var xG = function(RR, JR, GR, yR) {
        var tR = RR.graphicalItems,
          uR = RR.tooltipAxis,
          ZR = vG(JR, RR);
        return GR < 0 || !tR || !tR.length || GR >= ZR.length ? null : tR.reduce((function(tR, qR) {
          var iR, fR, VR = null !== (iR = qR.props.data) && void 0 !== iR ? iR : JR;
          if (VR && RR.dataStartIndex + RR.dataEndIndex !== 0 && RR.dataEndIndex - RR.dataStartIndex >= GR && (VR = VR.slice(RR.dataStartIndex, RR.dataEndIndex + 1)), uR.dataKey && !uR.allowDuplicatedCategory) {
            var KR = void 0 === VR ? ZR : VR;
            fR = (0, bR.e)(KR, uR.dataKey, yR)
          } else fR = VR && VR[GR] || ZR[GR];
          return fR ? [].concat(UG(tR), [(0, gR.fb)(qR, fR)]) : tR
        }), [])
      },
      NG = function(RR, JR, GR, yR) {
        var tR = yR || {
            x: RR.chartX,
            y: RR.chartY
          },
          uR = function(RR, JR) {
            return "horizontal" === JR ? RR.x : "vertical" === JR ? RR.y : "centric" === JR ? RR.angle : RR.radius
          }(tR, GR),
          ZR = RR.orderedTooltipTicks,
          qR = RR.tooltipAxis,
          iR = RR.tooltipTicks,
          fR = (0, gR.i)(uR, ZR, iR, qR);
        if (fR >= 0 && iR) {
          var VR = iR[fR] && iR[fR].value,
            KR = xG(RR, JR, fR, VR),
            wR = function(RR, JR, GR, yR) {
              var tR = JR.find((function(RR) {
                return RR && RR.index === GR
              }));
              if (tR) {
                if ("horizontal" === RR) return {
                  x: tR.coordinate,
                  y: yR.y
                };
                if ("vertical" === RR) return {
                  x: yR.x,
                  y: tR.coordinate
                };
                if ("centric" === RR) {
                  var uR = tR.coordinate,
                    ZR = yR.radius;
                  return XG(XG(XG({}, yR), (0, vJ.g)(yR.cx, yR.cy, ZR, uR)), {}, {
                    angle: uR,
                    radius: ZR
                  })
                }
                var qR = tR.coordinate,
                  iR = yR.angle;
                return XG(XG(XG({}, yR), (0, vJ.g)(yR.cx, yR.cy, qR, iR)), {}, {
                  angle: iR,
                  radius: qR
                })
              }
              return gG
            }(GR, ZR, fR, tR);
          return {
            activeTooltipIndex: fR,
            activeLabel: VR,
            activePayload: KR,
            activeCoordinate: wR
          }
        }
        return null
      },
      DG = function(RR, JR) {
        var GR = JR.axes,
          yR = JR.graphicalItems,
          tR = JR.axisType,
          ZR = JR.axisIdKey,
          qR = JR.stackGroups,
          iR = JR.dataStartIndex,
          VR = JR.dataEndIndex,
          KR = RR.layout,
          wR = RR.children,
          rR = RR.stackOffset,
          eR = (0, gR.ib)(KR, tR);
        return GR.reduce((function(JR, GR) {
          var aR, LR = void 0 !== GR.type.defaultProps ? XG(XG({}, GR.type.defaultProps), GR.props) : GR.props,
            nR = LR.type,
            UR = LR.dataKey,
            WR = LR.allowDataOverflow,
            AR = LR.allowDuplicatedCategory,
            CR = LR.scale,
            XR = LR.ticks,
            MR = LR.includeHidden,
            BR = LR[ZR];
          if (JR[BR]) return JR;
          var lR, pR, vR, OR = vG(RR.data, {
              graphicalItems: yR.filter((function(RR) {
                var JR;
                return (ZR in RR.props ? RR.props[ZR] : null === (JR = RR.type.defaultProps) || void 0 === JR ? void 0 : JR[ZR]) === BR
              })),
              dataStartIndex: iR,
              dataEndIndex: VR
            }),
            xR = OR.length;
          (function(RR, JR, GR) {
            if ("number" === GR && !0 === JR && Array.isArray(RR)) {
              var yR = null === RR || void 0 === RR ? void 0 : RR[0],
                tR = null === RR || void 0 === RR ? void 0 : RR[1];
              if (yR && tR && (0, bR.C)(yR) && (0, bR.C)(tR)) return !0
            }
            return !1
          })(LR.domain, WR, nR) && (lR = (0, gR.tb)(LR.domain, null, WR), !eR || "number" !== nR && "auto" === CR || (vR = (0, gR.I)(OR, UR, "category")));
          var NR = OG(nR);
          if (!lR || 0 === lR.length) {
            var DR, HR = null !== (DR = LR.domain) && void 0 !== DR ? DR : NR;
            if (UR) {
              if (lR = (0, gR.I)(OR, UR, nR), "category" === nR && eR) {
                var oR = (0, bR.t)(lR);
                AR && oR ? (pR = lR, lR = fR()(0, xR)) : AR || (lR = (0, gR.mb)(HR, lR, GR).reduce((function(RR, JR) {
                  return RR.indexOf(JR) >= 0 ? RR : [].concat(UG(RR), [JR])
                }), []))
              } else if ("category" === nR) lR = AR ? lR.filter((function(RR) {
                return "" !== RR && !uR()(RR)
              })) : (0, gR.mb)(HR, lR, GR).reduce((function(RR, JR) {
                return RR.indexOf(JR) >= 0 || "" === JR || uR()(JR) ? RR : [].concat(UG(RR), [JR])
              }), []);
              else if ("number" === nR) {
                var cR = (0, gR.qb)(OR, yR.filter((function(RR) {
                  var JR, GR, yR = ZR in RR.props ? RR.props[ZR] : null === (JR = RR.type.defaultProps) || void 0 === JR ? void 0 : JR[ZR],
                    tR = "hide" in RR.props ? RR.props.hide : null === (GR = RR.type.defaultProps) || void 0 === GR ? void 0 : GR.hide;
                  return yR === BR && (MR || !tR)
                })), UR, tR, KR);
                cR && (lR = cR)
              }!eR || "number" !== nR && "auto" === CR || (vR = (0, gR.I)(OR, UR, "category"))
            } else lR = eR ? fR()(0, xR) : qR && qR[BR] && qR[BR].hasStack && "number" === nR ? "expand" === rR ? [0, 1] : (0, gR.M)(qR[BR].stackGroups, iR, VR) : (0, gR.J)(OR, yR.filter((function(RR) {
              var JR = ZR in RR.props ? RR.props[ZR] : RR.type.defaultProps[ZR],
                GR = "hide" in RR.props ? RR.props.hide : RR.type.defaultProps.hide;
              return JR === BR && (MR || !GR)
            })), nR, KR, !0);
            if ("number" === nR) lR = bJ(wR, lR, BR, tR, XR), HR && (lR = (0, gR.tb)(HR, lR, WR));
            else if ("category" === nR && HR) {
              var PR = HR;
              lR.every((function(RR) {
                return PR.indexOf(RR) >= 0
              })) && (lR = PR)
            }
          }
          return XG(XG({}, JR), {}, MG({}, BR, XG(XG({}, LR), {}, {
            axisType: tR,
            domain: lR,
            categoricalDomain: vR,
            duplicateDomain: pR,
            originalDomain: null !== (aR = LR.domain) && void 0 !== aR ? aR : NR,
            isCategorical: eR,
            layout: KR
          })))
        }), {})
      },
      HG = function(RR, JR) {
        var GR = JR.axisType,
          yR = void 0 === GR ? "xAxis" : GR,
          tR = JR.AxisComp,
          uR = JR.graphicalItems,
          ZR = JR.stackGroups,
          qR = JR.dataStartIndex,
          iR = JR.dataEndIndex,
          VR = RR.children,
          wR = "".concat(yR, "Id"),
          rR = (0, BR.i)(VR, tR),
          eR = {};
        return rR && rR.length ? eR = DG(RR, {
          axes: rR,
          graphicalItems: uR,
          axisType: yR,
          axisIdKey: wR,
          stackGroups: ZR,
          dataStartIndex: qR,
          dataEndIndex: iR
        }) : uR && uR.length && (eR = function(RR, JR) {
          var GR = JR.graphicalItems,
            yR = JR.Axis,
            tR = JR.axisType,
            uR = JR.axisIdKey,
            ZR = JR.stackGroups,
            qR = JR.dataStartIndex,
            iR = JR.dataEndIndex,
            VR = RR.layout,
            wR = RR.children,
            rR = vG(RR.data, {
              graphicalItems: GR,
              dataStartIndex: qR,
              dataEndIndex: iR
            }),
            eR = rR.length,
            aR = (0, gR.ib)(VR, tR),
            LR = -1;
          return GR.reduce((function(RR, JR) {
            var nR, UR = (void 0 !== JR.type.defaultProps ? XG(XG({}, JR.type.defaultProps), JR.props) : JR.props)[uR],
              WR = OG("number");
            return RR[UR] ? RR : (LR++, aR ? nR = fR()(0, eR) : ZR && ZR[UR] && ZR[UR].hasStack ? (nR = (0, gR.M)(ZR[UR].stackGroups, qR, iR), nR = bJ(wR, nR, UR, tR)) : (nR = (0, gR.tb)(WR, (0, gR.J)(rR, GR.filter((function(RR) {
              var JR, GR, yR = uR in RR.props ? RR.props[uR] : null === (JR = RR.type.defaultProps) || void 0 === JR ? void 0 : JR[uR],
                tR = "hide" in RR.props ? RR.props.hide : null === (GR = RR.type.defaultProps) || void 0 === GR ? void 0 : GR.hide;
              return yR === UR && !tR
            })), "number", VR), yR.defaultProps.allowDataOverflow), nR = bJ(wR, nR, UR, tR)), XG(XG({}, RR), {}, MG({}, UR, XG(XG({
              axisType: tR
            }, yR.defaultProps), {}, {
              hide: !0,
              orientation: KR()(lG, "".concat(tR, ".").concat(LR % 2), null),
              domain: nR,
              originalDomain: WR,
              isCategorical: aR,
              layout: VR
            }))))
          }), {})
        }(RR, {
          Axis: tR,
          graphicalItems: uR,
          axisType: yR,
          axisIdKey: wR,
          stackGroups: ZR,
          dataStartIndex: qR,
          dataEndIndex: iR
        })), eR
      },
      oG = function(RR) {
        var JR = RR.children,
          GR = RR.defaultShowTooltip,
          yR = (0, BR.j)(JR, kR),
          tR = 0,
          uR = 0;
        return RR.data && 0 !== RR.data.length && (uR = RR.data.length - 1), yR && yR.props && (yR.props.startIndex >= 0 && (tR = yR.props.startIndex), yR.props.endIndex >= 0 && (uR = yR.props.endIndex)), {
          chartX: 0,
          chartY: 0,
          dataStartIndex: tR,
          dataEndIndex: uR,
          activeTooltipIndex: -1,
          isTooltipActive: Boolean(GR)
        }
      },
      cG = function(RR) {
        return "horizontal" === RR ? {
          numericAxisName: "yAxis",
          cateAxisName: "xAxis"
        } : "vertical" === RR ? {
          numericAxisName: "xAxis",
          cateAxisName: "yAxis"
        } : "centric" === RR ? {
          numericAxisName: "radiusAxis",
          cateAxisName: "angleAxis"
        } : {
          numericAxisName: "angleAxis",
          cateAxisName: "radiusAxis"
        }
      },
      PG = function(RR, JR) {
        return "xAxis" === JR ? RR[JR].width : "yAxis" === JR ? RR[JR].height : void 0
      },
      IG = function(RR) {
        var JR = RR.chartName,
          GR = RR.GraphicalChild,
          tR = RR.defaultTooltipEventType,
          ZR = void 0 === tR ? "axis" : tR,
          iR = RR.validateTooltipEventTypes,
          fR = void 0 === iR ? ["axis"] : iR,
          VR = RR.axisComponents,
          wR = RR.legendContent,
          eR = RR.formatAxisMap,
          lR = RR.defaultProps,
          pR = function(RR, JR) {
            var GR = JR.graphicalItems,
              yR = JR.stackGroups,
              tR = JR.offset,
              ZR = JR.updateId,
              qR = JR.dataStartIndex,
              iR = JR.dataEndIndex,
              fR = RR.barSize,
              KR = RR.layout,
              wR = RR.barGap,
              rR = RR.barCategoryGap,
              eR = RR.maxBarSize,
              aR = cG(KR),
              LR = aR.numericAxisName,
              UR = aR.cateAxisName,
              WR = function(RR) {
                return !(!RR || !RR.length) && RR.some((function(RR) {
                  var JR = (0, BR.l)(RR && RR.type);
                  return JR && JR.indexOf("Bar") >= 0
                }))
              }(GR),
              AR = [];
            return GR.forEach((function(GR, aR) {
              var CR = vG(RR.data, {
                  graphicalItems: [GR],
                  dataStartIndex: qR,
                  dataEndIndex: iR
                }),
                XR = void 0 !== GR.type.defaultProps ? XG(XG({}, GR.type.defaultProps), GR.props) : GR.props,
                MR = XR.dataKey,
                lR = XR.maxBarSize,
                pR = XR["".concat(LR, "Id")],
                bR = XR["".concat(UR, "Id")],
                vR = VR.reduce((function(RR, GR) {
                  var yR = JR["".concat(GR.axisType, "Map")],
                    tR = XR["".concat(GR.axisType, "Id")];
                  yR && yR[tR] || "zAxis" === GR.axisType || (0, nR.e)(!1);
                  var uR = yR[tR];
                  return XG(XG({}, RR), {}, MG(MG({}, GR.axisType, uR), "".concat(GR.axisType, "Ticks"), (0, gR.ab)(uR)))
                }), {}),
                OR = vR[UR],
                xR = vR["".concat(UR, "Ticks")],
                NR = yR && yR[pR] && yR[pR].hasStack && (0, gR.Y)(GR, yR[pR].stackGroups),
                DR = (0, BR.l)(GR.type).indexOf("Bar") >= 0,
                HR = (0, gR.t)(OR, xR),
                oR = [],
                cR = WR && (0, gR.w)({
                  barSize: fR,
                  stackGroups: yR,
                  totalSize: PG(vR, UR)
                });
              if (DR) {
                var PR, IR, mR = uR()(lR) ? eR : lR,
                  zR = null !== (PR = null !== (IR = (0, gR.t)(OR, xR, !0)) && void 0 !== IR ? IR : mR) && void 0 !== PR ? PR : 0;
                oR = (0, gR.u)({
                  barGap: wR,
                  barCategoryGap: rR,
                  bandSize: zR !== HR ? zR : HR,
                  sizeList: cR[bR],
                  maxBarSize: mR
                }), zR !== HR && (oR = oR.map((function(RR) {
                  return XG(XG({}, RR), {}, {
                    position: XG(XG({}, RR.position), {}, {
                      offset: RR.position.offset - zR / 2
                    })
                  })
                })))
              }
              var SR = GR && GR.type && GR.type.getComposedData;
              SR && AR.push({
                props: XG(XG({}, SR(XG(XG({}, vR), {}, {
                  displayedData: CR,
                  props: RR,
                  dataKey: MR,
                  item: GR,
                  bandSize: HR,
                  barPosition: oR,
                  offset: tR,
                  stackedData: NR,
                  layout: KR,
                  dataStartIndex: qR,
                  dataEndIndex: iR
                }))), {}, MG(MG(MG({
                  key: GR.key || "item-".concat(aR)
                }, LR, vR[LR]), UR, vR[UR]), "animationId", ZR)),
                childIndex: (0, BR.r)(GR, RR.children),
                item: GR
              })
            })), AR
          },
          vR = function(RR, yR) {
            var tR = RR.props,
              uR = RR.dataStartIndex,
              ZR = RR.dataEndIndex,
              qR = RR.updateId;
            if (!(0, BR.y)({
                props: tR
              })) return null;
            var iR = tR.children,
              fR = tR.layout,
              wR = tR.stackOffset,
              aR = tR.data,
              LR = tR.reverseStackOrder,
              nR = cG(fR),
              UR = nR.numericAxisName,
              WR = nR.cateAxisName,
              AR = (0, BR.i)(iR, GR),
              XR = (0, gR.U)(aR, AR, "".concat(UR, "Id"), "".concat(WR, "Id"), wR, LR),
              MR = VR.reduce((function(RR, JR) {
                var GR = "".concat(JR.axisType, "Map");
                return XG(XG({}, RR), {}, MG({}, GR, HG(tR, XG(XG({}, JR), {}, {
                  graphicalItems: AR,
                  stackGroups: JR.axisType === UR && XR,
                  dataStartIndex: uR,
                  dataEndIndex: ZR
                }))))
              }), {}),
              lR = function(RR, JR) {
                var GR = RR.props,
                  yR = RR.graphicalItems,
                  tR = RR.xAxisMap,
                  uR = void 0 === tR ? {} : tR,
                  ZR = RR.yAxisMap,
                  qR = void 0 === ZR ? {} : ZR,
                  iR = GR.width,
                  fR = GR.height,
                  VR = GR.children,
                  wR = GR.margin || {},
                  rR = (0, BR.j)(VR, kR),
                  eR = (0, BR.j)(VR, CR.d),
                  aR = Object.keys(qR).reduce((function(RR, JR) {
                    var GR = qR[JR],
                      yR = GR.orientation;
                    return GR.mirror || GR.hide ? RR : XG(XG({}, RR), {}, MG({}, yR, RR[yR] + GR.width))
                  }), {
                    left: wR.left || 0,
                    right: wR.right || 0
                  }),
                  LR = Object.keys(uR).reduce((function(RR, JR) {
                    var GR = uR[JR],
                      yR = GR.orientation;
                    return GR.mirror || GR.hide ? RR : XG(XG({}, RR), {}, MG({}, yR, KR()(RR, "".concat(yR)) + GR.height))
                  }), {
                    top: wR.top || 0,
                    bottom: wR.bottom || 0
                  }),
                  nR = XG(XG({}, LR), aR),
                  UR = nR.bottom;
                rR && (nR.bottom += rR.props.height || kR.defaultProps.height), eR && JR && (nR = (0, gR.e)(nR, yR, GR, JR));
                var WR = iR - nR.left - nR.right,
                  AR = fR - nR.top - nR.bottom;
                return XG(XG({
                  brushBottom: UR
                }, nR), {}, {
                  width: Math.max(WR, 0),
                  height: Math.max(AR, 0)
                })
              }(XG(XG({}, MR), {}, {
                props: tR,
                graphicalItems: AR
              }), null === yR || void 0 === yR ? void 0 : yR.legendBBox);
            Object.keys(MR).forEach((function(RR) {
              MR[RR] = eR(tR, MR[RR], lR, RR.replace("Map", ""), JR)
            }));
            var vR = function(RR) {
                var JR = (0, bR.i)(RR),
                  GR = (0, gR.ab)(JR, !1, !0);
                return {
                  tooltipTicks: GR,
                  orderedTooltipTicks: rR()(GR, (function(RR) {
                    return RR.coordinate
                  })),
                  tooltipAxis: JR,
                  tooltipAxisBandSize: (0, gR.t)(JR, GR)
                }
              }(MR["".concat(WR, "Map")]),
              OR = pR(tR, XG(XG({}, MR), {}, {
                dataStartIndex: uR,
                dataEndIndex: ZR,
                updateId: qR,
                graphicalItems: AR,
                stackGroups: XR,
                offset: lR
              }));
            return XG(XG({
              formattedGraphicalItems: OR,
              graphicalItems: AR,
              offset: lR,
              stackGroups: XR
            }, vR), MR)
          },
          OR = function(RR) {
            function GR(RR) {
              var tR, ZR, iR;
              return function(RR, JR) {
                if (!(RR instanceof JR)) throw new TypeError("Cannot call a class as a function")
              }(this, GR), MG(iR = eG(this, GR, [RR]), "eventEmitterSymbol", Symbol("rechartsEventEmitter")), MG(iR, "accessibilityManager", new mJ), MG(iR, "handleLegendBBoxUpdate", (function(RR) {
                if (RR) {
                  var JR = iR.state,
                    GR = JR.dataStartIndex,
                    yR = JR.dataEndIndex,
                    tR = JR.updateId;
                  iR.setState(XG({
                    legendBBox: RR
                  }, vR({
                    props: iR.props,
                    dataStartIndex: GR,
                    dataEndIndex: yR,
                    updateId: tR
                  }, XG(XG({}, iR.state), {}, {
                    legendBBox: RR
                  }))))
                }
              })), MG(iR, "handleReceiveSyncEvent", (function(RR, JR, GR) {
                if (iR.props.syncId === RR) {
                  if (GR === iR.eventEmitterSymbol && "function" !== typeof iR.props.syncMethod) return;
                  iR.applySyncEvent(JR)
                }
              })), MG(iR, "handleBrushChange", (function(RR) {
                var JR = RR.startIndex,
                  GR = RR.endIndex;
                if (JR !== iR.state.dataStartIndex || GR !== iR.state.dataEndIndex) {
                  var yR = iR.state.updateId;
                  iR.setState((function() {
                    return XG({
                      dataStartIndex: JR,
                      dataEndIndex: GR
                    }, vR({
                      props: iR.props,
                      dataStartIndex: JR,
                      dataEndIndex: GR,
                      updateId: yR
                    }, iR.state))
                  })), iR.triggerSyncEvent({
                    dataStartIndex: JR,
                    dataEndIndex: GR
                  })
                }
              })), MG(iR, "handleMouseEnter", (function(RR) {
                var JR = iR.getMouseInfo(RR);
                if (JR) {
                  var GR = XG(XG({}, JR), {}, {
                    isTooltipActive: !0
                  });
                  iR.setState(GR), iR.triggerSyncEvent(GR);
                  var yR = iR.props.onMouseEnter;
                  qR()(yR) && yR(GR, RR)
                }
              })), MG(iR, "triggeredAfterMouseMove", (function(RR) {
                var JR = iR.getMouseInfo(RR),
                  GR = JR ? XG(XG({}, JR), {}, {
                    isTooltipActive: !0
                  }) : {
                    isTooltipActive: !1
                  };
                iR.setState(GR), iR.triggerSyncEvent(GR);
                var yR = iR.props.onMouseMove;
                qR()(yR) && yR(GR, RR)
              })), MG(iR, "handleItemMouseEnter", (function(RR) {
                iR.setState((function() {
                  return {
                    isTooltipActive: !0,
                    activeItem: RR,
                    activePayload: RR.tooltipPayload,
                    activeCoordinate: RR.tooltipPosition || {
                      x: RR.cx,
                      y: RR.cy
                    }
                  }
                }))
              })), MG(iR, "handleItemMouseLeave", (function() {
                iR.setState((function() {
                  return {
                    isTooltipActive: !1
                  }
                }))
              })), MG(iR, "handleMouseMove", (function(RR) {
                RR.persist(), iR.throttleTriggeredAfterMouseMove(RR)
              })), MG(iR, "handleMouseLeave", (function(RR) {
                iR.throttleTriggeredAfterMouseMove.cancel();
                var JR = {
                  isTooltipActive: !1
                };
                iR.setState(JR), iR.triggerSyncEvent(JR);
                var GR = iR.props.onMouseLeave;
                qR()(GR) && GR(JR, RR)
              })), MG(iR, "handleOuterEvent", (function(RR) {
                var JR, GR = (0, BR.o)(RR),
                  yR = KR()(iR.props, "".concat(GR));
                GR && qR()(yR) && yR(null !== (JR = /.*touch.*/i.test(GR) ? iR.getMouseInfo(RR.changedTouches[0]) : iR.getMouseInfo(RR)) && void 0 !== JR ? JR : {}, RR)
              })), MG(iR, "handleClick", (function(RR) {
                var JR = iR.getMouseInfo(RR);
                if (JR) {
                  var GR = XG(XG({}, JR), {}, {
                    isTooltipActive: !0
                  });
                  iR.setState(GR), iR.triggerSyncEvent(GR);
                  var yR = iR.props.onClick;
                  qR()(yR) && yR(GR, RR)
                }
              })), MG(iR, "handleMouseDown", (function(RR) {
                var JR = iR.props.onMouseDown;
                qR()(JR) && JR(iR.getMouseInfo(RR), RR)
              })), MG(iR, "handleMouseUp", (function(RR) {
                var JR = iR.props.onMouseUp;
                qR()(JR) && JR(iR.getMouseInfo(RR), RR)
              })), MG(iR, "handleTouchMove", (function(RR) {
                null != RR.changedTouches && RR.changedTouches.length > 0 && iR.throttleTriggeredAfterMouseMove(RR.changedTouches[0])
              })), MG(iR, "handleTouchStart", (function(RR) {
                null != RR.changedTouches && RR.changedTouches.length > 0 && iR.handleMouseDown(RR.changedTouches[0])
              })), MG(iR, "handleTouchEnd", (function(RR) {
                null != RR.changedTouches && RR.changedTouches.length > 0 && iR.handleMouseUp(RR.changedTouches[0])
              })), MG(iR, "handleDoubleClick", (function(RR) {
                var JR = iR.props.onDoubleClick;
                qR()(JR) && JR(iR.getMouseInfo(RR), RR)
              })), MG(iR, "handleContextMenu", (function(RR) {
                var JR = iR.props.onContextMenu;
                qR()(JR) && JR(iR.getMouseInfo(RR), RR)
              })), MG(iR, "triggerSyncEvent", (function(RR) {
                void 0 !== iR.props.syncId && NJ.emit(DJ, iR.props.syncId, RR, iR.eventEmitterSymbol)
              })), MG(iR, "applySyncEvent", (function(RR) {
                var JR = iR.props,
                  GR = JR.layout,
                  yR = JR.syncMethod,
                  tR = iR.state.updateId,
                  uR = RR.dataStartIndex,
                  ZR = RR.dataEndIndex;
                if (void 0 !== RR.dataStartIndex || void 0 !== RR.dataEndIndex) iR.setState(XG({
                  dataStartIndex: uR,
                  dataEndIndex: ZR
                }, vR({
                  props: iR.props,
                  dataStartIndex: uR,
                  dataEndIndex: ZR,
                  updateId: tR
                }, iR.state)));
                else if (void 0 !== RR.activeTooltipIndex) {
                  var qR = RR.chartX,
                    fR = RR.chartY,
                    VR = RR.activeTooltipIndex,
                    KR = iR.state,
                    wR = KR.offset,
                    rR = KR.tooltipTicks;
                  if (!wR) return;
                  if ("function" === typeof yR) VR = yR(rR, RR);
                  else if ("value" === yR) {
                    VR = -1;
                    for (var eR = 0; eR < rR.length; eR++)
                      if (rR[eR].value === RR.activeLabel) {
                        VR = eR;
                        break
                      }
                  }
                  var aR = XG(XG({}, wR), {}, {
                      x: wR.left,
                      y: wR.top
                    }),
                    LR = Math.min(qR, aR.x + aR.width),
                    nR = Math.min(fR, aR.y + aR.height),
                    UR = rR[VR] && rR[VR].value,
                    WR = xG(iR.state, iR.props.data, VR),
                    AR = rR[VR] ? {
                      x: "horizontal" === GR ? rR[VR].coordinate : LR,
                      y: "horizontal" === GR ? nR : rR[VR].coordinate
                    } : gG;
                  iR.setState(XG(XG({}, RR), {}, {
                    activeLabel: UR,
                    activeCoordinate: AR,
                    activePayload: WR,
                    activeTooltipIndex: VR
                  }))
                } else iR.setState(RR)
              })), MG(iR, "renderCursor", (function(RR) {
                var GR, tR = iR.state,
                  uR = tR.isTooltipActive,
                  ZR = tR.activeCoordinate,
                  qR = tR.activePayload,
                  fR = tR.offset,
                  VR = tR.activeTooltipIndex,
                  KR = tR.tooltipAxisBandSize,
                  wR = iR.getTooltipEventType(),
                  rR = null !== (GR = RR.props.active) && void 0 !== GR ? GR : uR,
                  eR = iR.props.layout,
                  aR = RR.key || "_recharts-cursor";
                return yR.createElement(uG, {
                  key: aR,
                  activeCoordinate: ZR,
                  activePayload: qR,
                  activeTooltipIndex: VR,
                  chartName: JR,
                  element: RR,
                  isActive: rR,
                  layout: eR,
                  offset: fR,
                  tooltipAxisBandSize: KR,
                  tooltipEventType: wR
                })
              })), MG(iR, "renderPolarAxis", (function(RR, JR, GR) {
                var tR = KR()(RR, "type.axisType"),
                  uR = KR()(iR.state, "".concat(tR, "Map")),
                  ZR = RR.type.defaultProps,
                  qR = void 0 !== ZR ? XG(XG({}, ZR), RR.props) : RR.props,
                  fR = uR && uR[qR["".concat(tR, "Id")]];
                return (0, yR.cloneElement)(RR, XG(XG({}, fR), {}, {
                  className: (0, LR.c)(tR, fR.className),
                  key: RR.key || "".concat(JR, "-").concat(GR),
                  ticks: (0, gR.ab)(fR, !0)
                }))
              })), MG(iR, "renderPolarGrid", (function(RR) {
                var JR = RR.props,
                  GR = JR.radialLines,
                  tR = JR.polarAngles,
                  uR = JR.polarRadius,
                  ZR = iR.state,
                  qR = ZR.radiusAxisMap,
                  fR = ZR.angleAxisMap,
                  VR = (0, bR.i)(qR),
                  KR = (0, bR.i)(fR),
                  wR = KR.cx,
                  rR = KR.cy,
                  eR = KR.innerRadius,
                  aR = KR.outerRadius;
                return (0, yR.cloneElement)(RR, {
                  polarAngles: Array.isArray(tR) ? tR : (0, gR.ab)(KR, !0).map((function(RR) {
                    return RR.coordinate
                  })),
                  polarRadius: Array.isArray(uR) ? uR : (0, gR.ab)(VR, !0).map((function(RR) {
                    return RR.coordinate
                  })),
                  cx: wR,
                  cy: rR,
                  innerRadius: eR,
                  outerRadius: aR,
                  key: RR.key || "polar-grid",
                  radialLines: GR
                })
              })), MG(iR, "renderLegend", (function() {
                var RR = iR.state.formattedGraphicalItems,
                  JR = iR.props,
                  GR = JR.children,
                  tR = JR.width,
                  uR = JR.height,
                  ZR = iR.props.margin || {},
                  qR = tR - (ZR.left || 0) - (ZR.right || 0),
                  fR = (0, FR.b)({
                    children: GR,
                    formattedGraphicalItems: RR,
                    legendWidth: qR,
                    legendContent: wR
                  });
                if (!fR) return null;
                var VR = fR.item,
                  KR = wG(fR, qG);
                return (0, yR.cloneElement)(VR, XG(XG({}, KR), {}, {
                  chartWidth: tR,
                  chartHeight: uR,
                  margin: ZR,
                  onBBoxUpdate: iR.handleLegendBBoxUpdate
                }))
              })), MG(iR, "renderTooltip", (function() {
                var RR, JR = iR.props,
                  GR = JR.children,
                  tR = JR.accessibilityLayer,
                  uR = (0, BR.j)(GR, AR.b);
                if (!uR) return null;
                var ZR = iR.state,
                  qR = ZR.isTooltipActive,
                  fR = ZR.activeCoordinate,
                  VR = ZR.activePayload,
                  KR = ZR.activeLabel,
                  wR = ZR.offset,
                  rR = null !== (RR = uR.props.active) && void 0 !== RR ? RR : qR;
                return (0, yR.cloneElement)(uR, {
                  viewBox: XG(XG({}, wR), {}, {
                    x: wR.left,
                    y: wR.top
                  }),
                  active: rR,
                  label: KR,
                  payload: rR ? VR : [],
                  coordinate: fR,
                  accessibilityLayer: tR
                })
              })), MG(iR, "renderBrush", (function(RR) {
                var JR = iR.props,
                  GR = JR.margin,
                  tR = JR.data,
                  uR = iR.state,
                  ZR = uR.offset,
                  qR = uR.dataStartIndex,
                  fR = uR.dataEndIndex,
                  VR = uR.updateId;
                return (0, yR.cloneElement)(RR, {
                  key: RR.key || "_recharts-brush",
                  onChange: (0, gR.m)(iR.handleBrushChange, RR.props.onChange),
                  data: tR,
                  x: (0, bR.C)(RR.props.x) ? RR.props.x : ZR.left,
                  y: (0, bR.C)(RR.props.y) ? RR.props.y : ZR.top + ZR.height + ZR.brushBottom - (GR.bottom || 0),
                  width: (0, bR.C)(RR.props.width) ? RR.props.width : ZR.width,
                  startIndex: qR,
                  endIndex: fR,
                  updateId: "brush-".concat(VR)
                })
              })), MG(iR, "renderReferenceElement", (function(RR, JR, GR) {
                if (!RR) return null;
                var tR = iR.clipPathId,
                  uR = iR.state,
                  ZR = uR.xAxisMap,
                  qR = uR.yAxisMap,
                  fR = uR.offset,
                  VR = RR.type.defaultProps || {},
                  KR = RR.props,
                  wR = KR.xAxisId,
                  rR = void 0 === wR ? VR.xAxisId : wR,
                  eR = KR.yAxisId,
                  aR = void 0 === eR ? VR.yAxisId : eR;
                return (0, yR.cloneElement)(RR, {
                  key: RR.key || "".concat(JR, "-").concat(GR),
                  xAxis: ZR[rR],
                  yAxis: qR[aR],
                  viewBox: {
                    x: fR.left,
                    y: fR.top,
                    width: fR.width,
                    height: fR.height
                  },
                  clipPathId: tR
                })
              })), MG(iR, "renderActivePoints", (function(RR) {
                var JR = RR.item,
                  yR = RR.activePoint,
                  tR = RR.basePoint,
                  uR = RR.childIndex,
                  ZR = RR.isRange,
                  qR = [],
                  iR = JR.props.key,
                  fR = void 0 !== JR.item.type.defaultProps ? XG(XG({}, JR.item.type.defaultProps), JR.item.props) : JR.item.props,
                  VR = fR.activeDot,
                  KR = XG(XG({
                    index: uR,
                    dataKey: fR.dataKey,
                    cx: yR.x,
                    cy: yR.y,
                    r: 4,
                    fill: (0, gR.Q)(JR.item),
                    strokeWidth: 2,
                    stroke: "#fff",
                    payload: yR.payload,
                    value: yR.value
                  }, (0, BR.e)(VR, !1)), (0, HJ.f)(VR));
                return qR.push(GR.renderActiveDot(VR, KR, "".concat(iR, "-activePoint-").concat(uR))), tR ? qR.push(GR.renderActiveDot(VR, XG(XG({}, KR), {}, {
                  cx: tR.x,
                  cy: tR.y
                }), "".concat(iR, "-basePoint-").concat(uR))) : ZR && qR.push(null), qR
              })), MG(iR, "renderGraphicChild", (function(RR, JR, GR) {
                var tR = iR.filterFormatItem(RR, JR, GR);
                if (!tR) return null;
                var ZR = iR.getTooltipEventType(),
                  qR = iR.state,
                  fR = qR.isTooltipActive,
                  VR = qR.tooltipAxis,
                  KR = qR.activeTooltipIndex,
                  wR = qR.activeLabel,
                  rR = iR.props.children,
                  eR = (0, BR.j)(rR, AR.b),
                  aR = tR.props,
                  LR = aR.points,
                  nR = aR.isRange,
                  UR = aR.baseLine,
                  WR = void 0 !== tR.item.type.defaultProps ? XG(XG({}, tR.item.type.defaultProps), tR.item.props) : tR.item.props,
                  CR = WR.activeDot,
                  XR = WR.hide,
                  MR = WR.activeBar,
                  lR = WR.activeShape,
                  pR = Boolean(!XR && fR && eR && (CR || MR || lR)),
                  vR = {};
                "axis" !== ZR && eR && "click" === eR.props.trigger ? vR = {
                  onClick: (0, gR.m)(iR.handleItemMouseEnter, RR.props.onClick)
                } : "axis" !== ZR && (vR = {
                  onMouseLeave: (0, gR.m)(iR.handleItemMouseLeave, RR.props.onMouseLeave),
                  onMouseEnter: (0, gR.m)(iR.handleItemMouseEnter, RR.props.onMouseEnter)
                });
                var OR = (0, yR.cloneElement)(RR, XG(XG({}, tR.props), vR));
                if (pR) {
                  if (!(KR >= 0)) {
                    var xR, NR = (null !== (xR = iR.getItemByXY(iR.state.activeCoordinate)) && void 0 !== xR ? xR : {
                        graphicalItem: OR
                      }).graphicalItem,
                      DR = NR.item,
                      HR = void 0 === DR ? RR : DR,
                      oR = NR.childIndex,
                      cR = XG(XG(XG({}, tR.props), vR), {}, {
                        activeIndex: oR
                      });
                    return [(0, yR.cloneElement)(HR, cR), null, null]
                  }
                  var PR, IR;
                  if (VR.dataKey && !VR.allowDuplicatedCategory) {
                    var mR = "function" === typeof VR.dataKey ? function(RR) {
                      return "function" === typeof VR.dataKey ? VR.dataKey(RR.payload) : null
                    } : "payload.".concat(VR.dataKey.toString());
                    PR = (0, bR.e)(LR, mR, wR), IR = nR && UR && (0, bR.e)(UR, mR, wR)
                  } else PR = null === LR || void 0 === LR ? void 0 : LR[KR], IR = nR && UR && UR[KR];
                  if (lR || MR) {
                    var zR = void 0 !== RR.props.activeIndex ? RR.props.activeIndex : KR;
                    return [(0, yR.cloneElement)(RR, XG(XG(XG({}, tR.props), vR), {}, {
                      activeIndex: zR
                    })), null, null]
                  }
                  if (!uR()(PR)) return [OR].concat(UG(iR.renderActivePoints({
                    item: tR,
                    activePoint: PR,
                    basePoint: IR,
                    childIndex: KR,
                    isRange: nR
                  })))
                }
                return nR ? [OR, null, null] : [OR, null]
              })), MG(iR, "renderCustomized", (function(RR, JR, GR) {
                return (0, yR.cloneElement)(RR, XG(XG({
                  key: "recharts-customized-".concat(GR)
                }, iR.props), iR.state))
              })), MG(iR, "renderMap", {
                CartesianGrid: {
                  handler: bG,
                  once: !0
                },
                ReferenceArea: {
                  handler: iR.renderReferenceElement
                },
                ReferenceLine: {
                  handler: bG
                },
                ReferenceDot: {
                  handler: iR.renderReferenceElement
                },
                XAxis: {
                  handler: bG
                },
                YAxis: {
                  handler: bG
                },
                Brush: {
                  handler: iR.renderBrush,
                  once: !0
                },
                Bar: {
                  handler: iR.renderGraphicChild
                },
                Line: {
                  handler: iR.renderGraphicChild
                },
                Area: {
                  handler: iR.renderGraphicChild
                },
                Radar: {
                  handler: iR.renderGraphicChild
                },
                RadialBar: {
                  handler: iR.renderGraphicChild
                },
                Scatter: {
                  handler: iR.renderGraphicChild
                },
                Pie: {
                  handler: iR.renderGraphicChild
                },
                Funnel: {
                  handler: iR.renderGraphicChild
                },
                Tooltip: {
                  handler: iR.renderCursor,
                  once: !0
                },
                PolarGrid: {
                  handler: iR.renderPolarGrid,
                  once: !0
                },
                PolarAngleAxis: {
                  handler: iR.renderPolarAxis
                },
                PolarRadiusAxis: {
                  handler: iR.renderPolarAxis
                },
                Customized: {
                  handler: iR.renderCustomized
                }
              }), iR.clipPathId = "".concat(null !== (tR = RR.id) && void 0 !== tR ? tR : (0, bR.M)("recharts"), "-clip"), iR.throttleTriggeredAfterMouseMove = aR()(iR.triggeredAfterMouseMove, null !== (ZR = RR.throttleDelay) && void 0 !== ZR ? ZR : 1e3 / 60), iR.state = {}, iR
            }
            return function(RR, JR) {
              if ("function" !== typeof JR && null !== JR) throw new TypeError("Super expression must either be null or a function");
              RR.prototype = Object.create(JR && JR.prototype, {
                constructor: {
                  value: RR,
                  writable: !0,
                  configurable: !0
                }
              }), Object.defineProperty(RR, "prototype", {
                writable: !1
              }), JR && nG(RR, JR)
            }(GR, RR), tR = GR, iR = [{
              key: "componentDidMount",
              value: function() {
                var RR, JR;
                this.addListener(), this.accessibilityManager.setDetails({
                  container: this.container,
                  offset: {
                    left: null !== (RR = this.props.margin.left) && void 0 !== RR ? RR : 0,
                    top: null !== (JR = this.props.margin.top) && void 0 !== JR ? JR : 0
                  },
                  coordinateList: this.state.tooltipTicks,
                  mouseHandlerCallback: this.triggeredAfterMouseMove,
                  layout: this.props.layout
                }), this.displayDefaultTooltip()
              }
            }, {
              key: "displayDefaultTooltip",
              value: function() {
                var RR = this.props,
                  JR = RR.children,
                  GR = RR.data,
                  yR = RR.height,
                  tR = RR.layout,
                  uR = (0, BR.j)(JR, AR.b);
                if (uR) {
                  var ZR = uR.props.defaultIndex;
                  if (!("number" !== typeof ZR || ZR < 0 || ZR > this.state.tooltipTicks.length - 1)) {
                    var qR = this.state.tooltipTicks[ZR] && this.state.tooltipTicks[ZR].value,
                      iR = xG(this.state, GR, ZR, qR),
                      fR = this.state.tooltipTicks[ZR].coordinate,
                      VR = (this.state.offset.top + yR) / 2,
                      KR = "horizontal" === tR ? {
                        x: fR,
                        y: VR
                      } : {
                        y: fR,
                        x: VR
                      },
                      wR = this.state.formattedGraphicalItems.find((function(RR) {
                        return "Scatter" === RR.item.type.name
                      }));
                    wR && (KR = XG(XG({}, KR), wR.props.points[ZR].tooltipPosition), iR = wR.props.points[ZR].tooltipPayload);
                    var rR = {
                      activeTooltipIndex: ZR,
                      isTooltipActive: !0,
                      activeLabel: qR,
                      activePayload: iR,
                      activeCoordinate: KR
                    };
                    this.setState(rR), this.renderCursor(uR), this.accessibilityManager.setIndex(ZR)
                  }
                }
              }
            }, {
              key: "getSnapshotBeforeUpdate",
              value: function(RR, JR) {
                return this.props.accessibilityLayer ? (this.state.tooltipTicks !== JR.tooltipTicks && this.accessibilityManager.setDetails({
                  coordinateList: this.state.tooltipTicks
                }), this.props.layout !== RR.layout && this.accessibilityManager.setDetails({
                  layout: this.props.layout
                }), this.props.margin !== RR.margin && this.accessibilityManager.setDetails({
                  offset: {
                    left: null !== (GR = this.props.margin.left) && void 0 !== GR ? GR : 0,
                    top: null !== (yR = this.props.margin.top) && void 0 !== yR ? yR : 0
                  }
                }), null) : null;
                var GR, yR
              }
            }, {
              key: "componentDidUpdate",
              value: function(RR) {
                (0, BR.q)([(0, BR.j)(RR.children, AR.b)], [(0, BR.j)(this.props.children, AR.b)]) || this.displayDefaultTooltip()
              }
            }, {
              key: "componentWillUnmount",
              value: function() {
                this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel()
              }
            }, {
              key: "getTooltipEventType",
              value: function() {
                var RR = (0, BR.j)(this.props.children, AR.b);
                if (RR && "boolean" === typeof RR.props.shared) {
                  var JR = RR.props.shared ? "axis" : "item";
                  return fR.indexOf(JR) >= 0 ? JR : ZR
                }
                return ZR
              }
            }, {
              key: "getMouseInfo",
              value: function(RR) {
                if (!this.container) return null;
                var JR = this.container,
                  GR = JR.getBoundingClientRect(),
                  yR = (0, QR.b)(GR),
                  tR = {
                    chartX: Math.round(RR.pageX - yR.left),
                    chartY: Math.round(RR.pageY - yR.top)
                  },
                  uR = GR.width / JR.offsetWidth || 1,
                  ZR = this.inRange(tR.chartX, tR.chartY, uR);
                if (!ZR) return null;
                var qR = this.state,
                  iR = qR.xAxisMap,
                  fR = qR.yAxisMap,
                  VR = this.getTooltipEventType(),
                  KR = NG(this.state, this.props.data, this.props.layout, ZR);
                if ("axis" !== VR && iR && fR) {
                  var wR = (0, bR.i)(iR).scale,
                    rR = (0, bR.i)(fR).scale,
                    eR = wR && wR.invert ? wR.invert(tR.chartX) : null,
                    aR = rR && rR.invert ? rR.invert(tR.chartY) : null;
                  return XG(XG({}, tR), {}, {
                    xValue: eR,
                    yValue: aR
                  }, KR)
                }
                return KR ? XG(XG({}, tR), KR) : null
              }
            }, {
              key: "inRange",
              value: function(RR, JR) {
                var GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                  yR = this.props.layout,
                  tR = RR / GR,
                  uR = JR / GR;
                if ("horizontal" === yR || "vertical" === yR) {
                  var ZR = this.state.offset;
                  return tR >= ZR.left && tR <= ZR.left + ZR.width && uR >= ZR.top && uR <= ZR.top + ZR.height ? {
                    x: tR,
                    y: uR
                  } : null
                }
                var qR = this.state,
                  iR = qR.angleAxisMap,
                  fR = qR.radiusAxisMap;
                if (iR && fR) {
                  var VR = (0, bR.i)(iR);
                  return (0, vJ.d)({
                    x: tR,
                    y: uR
                  }, VR)
                }
                return null
              }
            }, {
              key: "parseEventsOfWrapper",
              value: function() {
                var RR = this.props.children,
                  JR = this.getTooltipEventType(),
                  GR = (0, BR.j)(RR, AR.b),
                  yR = {};
                return GR && "axis" === JR && (yR = "click" === GR.props.trigger ? {
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
                }), XG(XG({}, (0, HJ.f)(this.props, this.handleOuterEvent)), yR)
              }
            }, {
              key: "addListener",
              value: function() {
                NJ.on(DJ, this.handleReceiveSyncEvent)
              }
            }, {
              key: "removeListener",
              value: function() {
                NJ.removeListener(DJ, this.handleReceiveSyncEvent)
              }
            }, {
              key: "filterFormatItem",
              value: function(RR, JR, GR) {
                for (var yR = this.state.formattedGraphicalItems, tR = 0, uR = yR.length; tR < uR; tR++) {
                  var ZR = yR[tR];
                  if (ZR.item === RR || ZR.props.key === RR.key || JR === (0, BR.l)(ZR.item.type) && GR === ZR.childIndex) return ZR
                }
                return null
              }
            }, {
              key: "renderClipPath",
              value: function() {
                var RR = this.clipPathId,
                  JR = this.state.offset,
                  GR = JR.left,
                  tR = JR.top,
                  uR = JR.height,
                  ZR = JR.width;
                return yR.createElement("defs", null, yR.createElement("clipPath", {
                  id: RR
                }, yR.createElement("rect", {
                  x: GR,
                  y: tR,
                  height: uR,
                  width: ZR
                })))
              }
            }, {
              key: "getXScales",
              value: function() {
                var RR = this.state.xAxisMap;
                return RR ? Object.entries(RR).reduce((function(RR, JR) {
                  var GR = KG(JR, 2),
                    yR = GR[0],
                    tR = GR[1];
                  return XG(XG({}, RR), {}, MG({}, yR, tR.scale))
                }), {}) : null
              }
            }, {
              key: "getYScales",
              value: function() {
                var RR = this.state.yAxisMap;
                return RR ? Object.entries(RR).reduce((function(RR, JR) {
                  var GR = KG(JR, 2),
                    yR = GR[0],
                    tR = GR[1];
                  return XG(XG({}, RR), {}, MG({}, yR, tR.scale))
                }), {}) : null
              }
            }, {
              key: "getXScaleByAxisId",
              value: function(RR) {
                var JR;
                return null === (JR = this.state.xAxisMap) || void 0 === JR || null === (JR = JR[RR]) || void 0 === JR ? void 0 : JR.scale
              }
            }, {
              key: "getYScaleByAxisId",
              value: function(RR) {
                var JR;
                return null === (JR = this.state.yAxisMap) || void 0 === JR || null === (JR = JR[RR]) || void 0 === JR ? void 0 : JR.scale
              }
            }, {
              key: "getItemByXY",
              value: function(RR) {
                var JR = this.state,
                  GR = JR.formattedGraphicalItems,
                  yR = JR.activeItem;
                if (GR && GR.length)
                  for (var tR = 0, uR = GR.length; tR < uR; tR++) {
                    var ZR = GR[tR],
                      qR = ZR.props,
                      iR = ZR.item,
                      fR = void 0 !== iR.type.defaultProps ? XG(XG({}, iR.type.defaultProps), iR.props) : iR.props,
                      VR = (0, BR.l)(iR.type);
                    if ("Bar" === VR) {
                      var KR = (qR.data || []).find((function(JR) {
                        return (0, MR.f)(RR, JR)
                      }));
                      if (KR) return {
                        graphicalItem: ZR,
                        payload: KR
                      }
                    } else if ("RadialBar" === VR) {
                      var wR = (qR.data || []).find((function(JR) {
                        return (0, vJ.d)(RR, JR)
                      }));
                      if (wR) return {
                        graphicalItem: ZR,
                        payload: wR
                      }
                    } else if ((0, zJ.i)(ZR, yR) || (0, zJ.l)(ZR, yR) || (0, zJ.o)(ZR, yR)) {
                      var rR = (0, zJ.e)({
                          graphicalItem: ZR,
                          activeTooltipItem: yR,
                          itemData: fR.data
                        }),
                        eR = void 0 === fR.activeIndex ? rR : fR.activeIndex;
                      return {
                        graphicalItem: XG(XG({}, ZR), {}, {
                          childIndex: eR
                        }),
                        payload: (0, zJ.o)(ZR, yR) ? fR.data[rR] : ZR.props.data[rR]
                      }
                    }
                  }
                return null
              }
            }, {
              key: "render",
              value: function() {
                var RR = this;
                if (!(0, BR.y)(this)) return null;
                var JR, GR, tR = this.props,
                  uR = tR.children,
                  ZR = tR.className,
                  qR = tR.width,
                  iR = tR.height,
                  fR = tR.style,
                  VR = tR.compact,
                  KR = tR.title,
                  wR = tR.desc,
                  rR = wG(tR, iG),
                  eR = (0, BR.e)(rR, !1);
                if (VR) return yR.createElement(ZG.d, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, yR.createElement(UR.b, VG({}, eR, {
                  width: qR,
                  height: iR,
                  title: KR,
                  desc: wR
                }), this.renderClipPath(), (0, BR.v)(uR, this.renderMap)));
                this.props.accessibilityLayer && (eR.tabIndex = null !== (JR = this.props.tabIndex) && void 0 !== JR ? JR : 0, eR.role = null !== (GR = this.props.role) && void 0 !== GR ? GR : "application", eR.onKeyDown = function(JR) {
                  RR.accessibilityManager.keyboardEvent(JR)
                }, eR.onFocus = function() {
                  RR.accessibilityManager.focus()
                });
                var aR = this.parseEventsOfWrapper();
                return yR.createElement(ZG.d, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, yR.createElement("div", VG({
                  className: (0, LR.c)("recharts-wrapper", ZR),
                  style: XG({
                    position: "relative",
                    cursor: "default",
                    width: qR,
                    height: iR
                  }, fR)
                }, aR, {
                  ref: function(JR) {
                    RR.container = JR
                  }
                }), yR.createElement(UR.b, VG({}, eR, {
                  width: qR,
                  height: iR,
                  title: KR,
                  desc: wR,
                  style: pG
                }), this.renderClipPath(), (0, BR.v)(uR, this.renderMap)), this.renderLegend(), this.renderTooltip()))
              }
            }], iR && rG(tR.prototype, iR), VR && rG(tR, VR), Object.defineProperty(tR, "prototype", {
              writable: !1
            }), tR;
            var tR, iR, VR
          }(yR.Component);
        MG(OR, "displayName", JR), MG(OR, "defaultProps", XG({
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
        }, lR)), MG(OR, "getDerivedStateFromProps", (function(RR, JR) {
          var GR = RR.dataKey,
            yR = RR.data,
            tR = RR.children,
            ZR = RR.width,
            qR = RR.height,
            iR = RR.layout,
            fR = RR.stackOffset,
            VR = RR.margin,
            KR = JR.dataStartIndex,
            wR = JR.dataEndIndex;
          if (void 0 === JR.updateId) {
            var rR = oG(RR);
            return XG(XG(XG({}, rR), {}, {
              updateId: 0
            }, vR(XG(XG({
              props: RR
            }, rR), {}, {
              updateId: 0
            }), JR)), {}, {
              prevDataKey: GR,
              prevData: yR,
              prevWidth: ZR,
              prevHeight: qR,
              prevLayout: iR,
              prevStackOffset: fR,
              prevMargin: VR,
              prevChildren: tR
            })
          }
          if (GR !== JR.prevDataKey || yR !== JR.prevData || ZR !== JR.prevWidth || qR !== JR.prevHeight || iR !== JR.prevLayout || fR !== JR.prevStackOffset || !(0, OJ.c)(VR, JR.prevMargin)) {
            var eR = oG(RR),
              aR = {
                chartX: JR.chartX,
                chartY: JR.chartY,
                isTooltipActive: JR.isTooltipActive
              },
              LR = XG(XG({}, NG(JR, yR, iR)), {}, {
                updateId: JR.updateId + 1
              }),
              nR = XG(XG(XG({}, eR), aR), LR);
            return XG(XG(XG({}, nR), vR(XG({
              props: RR
            }, nR), JR)), {}, {
              prevDataKey: GR,
              prevData: yR,
              prevWidth: ZR,
              prevHeight: qR,
              prevLayout: iR,
              prevStackOffset: fR,
              prevMargin: VR,
              prevChildren: tR
            })
          }
          if (!(0, BR.q)(tR, JR.prevChildren)) {
            var UR, WR, AR, CR, XR = (0, BR.j)(tR, kR),
              MR = XR && null !== (UR = null === (WR = XR.props) || void 0 === WR ? void 0 : WR.startIndex) && void 0 !== UR ? UR : KR,
              lR = XR && null !== (AR = null === (CR = XR.props) || void 0 === CR ? void 0 : CR.endIndex) && void 0 !== AR ? AR : wR,
              pR = MR !== KR || lR !== wR,
              gR = !uR()(yR) && !pR ? JR.updateId : JR.updateId + 1;
            return XG(XG({
              updateId: gR
            }, vR(XG(XG({
              props: RR
            }, JR), {}, {
              updateId: gR,
              dataStartIndex: MR,
              dataEndIndex: lR
            }), JR)), {}, {
              prevChildren: tR,
              dataStartIndex: MR,
              dataEndIndex: lR
            })
          }
          return null
        })), MG(OR, "renderActiveDot", (function(RR, JR, GR) {
          var tR;
          return tR = (0, yR.isValidElement)(RR) ? (0, yR.cloneElement)(RR, JR) : qR()(RR) ? RR(JR) : yR.createElement(XR.d, JR), yR.createElement(WR.c, {
            className: "recharts-active-dot",
            key: GR
          }, tR)
        }));
        var xR = (0, yR.forwardRef)((function(RR, JR) {
          return yR.createElement(OR, VG({}, RR, {
            ref: JR
          }))
        }));
        return xR.displayName = OR.displayName, xR
      }
  },
  7358: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => yR
    });
    var yR = function(RR) {
      return null
    };
    yR.displayName = "Cell"
  },
  7301: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => vR
    });
    var yR = GR(66),
      tR = GR(6516),
      uR = GR.n(tR),
      ZR = GR(6357),
      qR = GR.n(ZR),
      iR = GR(6161),
      fR = GR.n(iR),
      VR = GR(6140),
      KR = GR(7181),
      wR = GR(6523),
      rR = GR(6235),
      eR = GR(7309);

    function aR(RR) {
      return aR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, aR(RR)
    }
    var LR = ["offset"];

    function nR(RR) {
      return function(RR) {
        if (Array.isArray(RR)) return UR(RR)
      }(RR) || function(RR) {
        if ("undefined" !== typeof Symbol && null != RR[Symbol.iterator] || null != RR["@@iterator"]) return Array.from(RR)
      }(RR) || function(RR, JR) {
        if (!RR) return;
        if ("string" === typeof RR) return UR(RR, JR);
        var GR = Object.prototype.toString.call(RR).slice(8, -1);
        "Object" === GR && RR.constructor && (GR = RR.constructor.name);
        if ("Map" === GR || "Set" === GR) return Array.from(RR);
        if ("Arguments" === GR || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GR)) return UR(RR, JR)
      }(RR) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function UR(RR, JR) {
      (null == JR || JR > RR.length) && (JR = RR.length);
      for (var GR = 0, yR = new Array(JR); GR < JR; GR++) yR[GR] = RR[GR];
      return yR
    }

    function WR(RR, JR) {
      if (null == RR) return {};
      var GR, yR, tR = function(RR, JR) {
        if (null == RR) return {};
        var GR = {};
        for (var yR in RR)
          if (Object.prototype.hasOwnProperty.call(RR, yR)) {
            if (JR.indexOf(yR) >= 0) continue;
            GR[yR] = RR[yR]
          } return GR
      }(RR, JR);
      if (Object.getOwnPropertySymbols) {
        var uR = Object.getOwnPropertySymbols(RR);
        for (yR = 0; yR < uR.length; yR++) GR = uR[yR], JR.indexOf(GR) >= 0 || Object.prototype.propertyIsEnumerable.call(RR, GR) && (tR[GR] = RR[GR])
      }
      return tR
    }

    function AR(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function CR(RR) {
      for (var JR = 1; JR < arguments.length; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? AR(Object(GR), !0).forEach((function(JR) {
          XR(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : AR(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }

    function XR(RR, JR, GR) {
      return (JR = function(RR) {
        var JR = function(RR, JR) {
          if ("object" != aR(RR) || !RR) return RR;
          var GR = RR[Symbol.toPrimitive];
          if (void 0 !== GR) {
            var yR = GR.call(RR, JR || "default");
            if ("object" != aR(yR)) return yR;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === JR ? String : Number)(RR)
        }(RR, "string");
        return "symbol" == aR(JR) ? JR : JR + ""
      }(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }

    function MR() {
      return MR = Object.assign ? Object.assign.bind() : function(RR) {
        for (var JR = 1; JR < arguments.length; JR++) {
          var GR = arguments[JR];
          for (var yR in GR) Object.prototype.hasOwnProperty.call(GR, yR) && (RR[yR] = GR[yR])
        }
        return RR
      }, MR.apply(this, arguments)
    }
    var BR = function(RR) {
        var JR = RR.value,
          GR = RR.formatter,
          yR = uR()(RR.children) ? JR : RR.children;
        return qR()(GR) ? GR(yR) : yR
      },
      lR = function(RR, JR, GR) {
        var tR, ZR, qR = RR.position,
          iR = RR.viewBox,
          fR = RR.offset,
          KR = RR.className,
          wR = iR,
          aR = wR.cx,
          LR = wR.cy,
          nR = wR.innerRadius,
          UR = wR.outerRadius,
          WR = wR.startAngle,
          AR = wR.endAngle,
          CR = wR.clockWise,
          XR = (nR + UR) / 2,
          BR = function(RR, JR) {
            return (0, rR.I)(JR - RR) * Math.min(Math.abs(JR - RR), 360)
          }(WR, AR),
          lR = BR >= 0 ? 1 : -1;
        "insideStart" === qR ? (tR = WR + lR * fR, ZR = CR) : "insideEnd" === qR ? (tR = AR - lR * fR, ZR = !CR) : "end" === qR && (tR = AR + lR * fR, ZR = CR), ZR = BR <= 0 ? ZR : !ZR;
        var pR = (0, eR.g)(aR, LR, XR, tR),
          gR = (0, eR.g)(aR, LR, XR, tR + 359 * (ZR ? 1 : -1)),
          bR = "M".concat(pR.x, ",").concat(pR.y, "\n    A").concat(XR, ",").concat(XR, ",0,1,").concat(ZR ? 0 : 1, ",\n    ").concat(gR.x, ",").concat(gR.y),
          vR = uR()(RR.id) ? (0, rR.M)("recharts-radial-line-") : RR.id;
        return yR.createElement("text", MR({}, GR, {
          dominantBaseline: "central",
          className: (0, VR.c)("recharts-radial-bar-label", KR)
        }), yR.createElement("defs", null, yR.createElement("path", {
          id: vR,
          d: bR
        })), yR.createElement("textPath", {
          xlinkHref: "#".concat(vR)
        }, JR))
      },
      pR = function(RR) {
        var JR = RR.viewBox,
          GR = RR.offset,
          yR = RR.position,
          tR = JR,
          uR = tR.cx,
          ZR = tR.cy,
          qR = tR.innerRadius,
          iR = tR.outerRadius,
          fR = (tR.startAngle + tR.endAngle) / 2;
        if ("outside" === yR) {
          var VR = (0, eR.g)(uR, ZR, iR + GR, fR),
            KR = VR.x;
          return {
            x: KR,
            y: VR.y,
            textAnchor: KR >= uR ? "start" : "end",
            verticalAnchor: "middle"
          }
        }
        if ("center" === yR) return {
          x: uR,
          y: ZR,
          textAnchor: "middle",
          verticalAnchor: "middle"
        };
        if ("centerTop" === yR) return {
          x: uR,
          y: ZR,
          textAnchor: "middle",
          verticalAnchor: "start"
        };
        if ("centerBottom" === yR) return {
          x: uR,
          y: ZR,
          textAnchor: "middle",
          verticalAnchor: "end"
        };
        var wR = (qR + iR) / 2,
          rR = (0, eR.g)(uR, ZR, wR, fR);
        return {
          x: rR.x,
          y: rR.y,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }
      },
      gR = function(RR) {
        var JR = RR.viewBox,
          GR = RR.parentViewBox,
          yR = RR.offset,
          tR = RR.position,
          uR = JR,
          ZR = uR.x,
          qR = uR.y,
          iR = uR.width,
          VR = uR.height,
          KR = VR >= 0 ? 1 : -1,
          wR = KR * yR,
          eR = KR > 0 ? "end" : "start",
          aR = KR > 0 ? "start" : "end",
          LR = iR >= 0 ? 1 : -1,
          nR = LR * yR,
          UR = LR > 0 ? "end" : "start",
          WR = LR > 0 ? "start" : "end";
        if ("top" === tR) return CR(CR({}, {
          x: ZR + iR / 2,
          y: qR - KR * yR,
          textAnchor: "middle",
          verticalAnchor: eR
        }), GR ? {
          height: Math.max(qR - GR.y, 0),
          width: iR
        } : {});
        if ("bottom" === tR) return CR(CR({}, {
          x: ZR + iR / 2,
          y: qR + VR + wR,
          textAnchor: "middle",
          verticalAnchor: aR
        }), GR ? {
          height: Math.max(GR.y + GR.height - (qR + VR), 0),
          width: iR
        } : {});
        if ("left" === tR) {
          var AR = {
            x: ZR - nR,
            y: qR + VR / 2,
            textAnchor: UR,
            verticalAnchor: "middle"
          };
          return CR(CR({}, AR), GR ? {
            width: Math.max(AR.x - GR.x, 0),
            height: VR
          } : {})
        }
        if ("right" === tR) {
          var XR = {
            x: ZR + iR + nR,
            y: qR + VR / 2,
            textAnchor: WR,
            verticalAnchor: "middle"
          };
          return CR(CR({}, XR), GR ? {
            width: Math.max(GR.x + GR.width - XR.x, 0),
            height: VR
          } : {})
        }
        var MR = GR ? {
          width: iR,
          height: VR
        } : {};
        return "insideLeft" === tR ? CR({
          x: ZR + nR,
          y: qR + VR / 2,
          textAnchor: WR,
          verticalAnchor: "middle"
        }, MR) : "insideRight" === tR ? CR({
          x: ZR + iR - nR,
          y: qR + VR / 2,
          textAnchor: UR,
          verticalAnchor: "middle"
        }, MR) : "insideTop" === tR ? CR({
          x: ZR + iR / 2,
          y: qR + wR,
          textAnchor: "middle",
          verticalAnchor: aR
        }, MR) : "insideBottom" === tR ? CR({
          x: ZR + iR / 2,
          y: qR + VR - wR,
          textAnchor: "middle",
          verticalAnchor: eR
        }, MR) : "insideTopLeft" === tR ? CR({
          x: ZR + nR,
          y: qR + wR,
          textAnchor: WR,
          verticalAnchor: aR
        }, MR) : "insideTopRight" === tR ? CR({
          x: ZR + iR - nR,
          y: qR + wR,
          textAnchor: UR,
          verticalAnchor: aR
        }, MR) : "insideBottomLeft" === tR ? CR({
          x: ZR + nR,
          y: qR + VR - wR,
          textAnchor: WR,
          verticalAnchor: eR
        }, MR) : "insideBottomRight" === tR ? CR({
          x: ZR + iR - nR,
          y: qR + VR - wR,
          textAnchor: UR,
          verticalAnchor: eR
        }, MR) : fR()(tR) && ((0, rR.C)(tR.x) || (0, rR.F)(tR.x)) && ((0, rR.C)(tR.y) || (0, rR.F)(tR.y)) ? CR({
          x: ZR + (0, rR.p)(tR.x, iR),
          y: qR + (0, rR.p)(tR.y, VR),
          textAnchor: "end",
          verticalAnchor: "end"
        }, MR) : CR({
          x: ZR + iR / 2,
          y: qR + VR / 2,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }, MR)
      },
      bR = function(RR) {
        return "cx" in RR && (0, rR.C)(RR.cx)
      };

    function vR(RR) {
      var JR, GR = RR.offset,
        tR = CR({
          offset: void 0 === GR ? 5 : GR
        }, WR(RR, LR)),
        ZR = tR.viewBox,
        iR = tR.position,
        fR = tR.value,
        rR = tR.children,
        eR = tR.content,
        aR = tR.className,
        nR = void 0 === aR ? "" : aR,
        UR = tR.textBreakAll;
      if (!ZR || uR()(fR) && uR()(rR) && !(0, yR.isValidElement)(eR) && !qR()(eR)) return null;
      if ((0, yR.isValidElement)(eR)) return (0, yR.cloneElement)(eR, tR);
      if (qR()(eR)) {
        if (JR = (0, yR.createElement)(eR, tR), (0, yR.isValidElement)(JR)) return JR
      } else JR = BR(tR);
      var AR = bR(ZR),
        XR = (0, wR.e)(tR, !0);
      if (AR && ("insideStart" === iR || "insideEnd" === iR || "end" === iR)) return lR(tR, JR, XR);
      var vR = AR ? pR(tR) : gR(tR);
      return yR.createElement(KR.d, MR({
        className: (0, VR.c)("recharts-label", nR)
      }, XR, vR, {
        breakAll: UR
      }), JR)
    }
    vR.displayName = "Label";
    var OR = function(RR) {
      var JR = RR.cx,
        GR = RR.cy,
        yR = RR.angle,
        tR = RR.startAngle,
        uR = RR.endAngle,
        ZR = RR.r,
        qR = RR.radius,
        iR = RR.innerRadius,
        fR = RR.outerRadius,
        VR = RR.x,
        KR = RR.y,
        wR = RR.top,
        eR = RR.left,
        aR = RR.width,
        LR = RR.height,
        nR = RR.clockWise,
        UR = RR.labelViewBox;
      if (UR) return UR;
      if ((0, rR.C)(aR) && (0, rR.C)(LR)) {
        if ((0, rR.C)(VR) && (0, rR.C)(KR)) return {
          x: VR,
          y: KR,
          width: aR,
          height: LR
        };
        if ((0, rR.C)(wR) && (0, rR.C)(eR)) return {
          x: wR,
          y: eR,
          width: aR,
          height: LR
        }
      }
      return (0, rR.C)(VR) && (0, rR.C)(KR) ? {
        x: VR,
        y: KR,
        width: 0,
        height: 0
      } : (0, rR.C)(JR) && (0, rR.C)(GR) ? {
        cx: JR,
        cy: GR,
        startAngle: tR || yR || 0,
        endAngle: uR || yR || 0,
        innerRadius: iR || 0,
        outerRadius: fR || qR || ZR || 0,
        clockWise: nR
      } : RR.viewBox ? RR.viewBox : {}
    };
    vR.parseViewBox = OR, vR.renderCallByParent = function(RR, JR) {
      var GR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!RR || !RR.children && GR && !RR.label) return null;
      var tR = RR.children,
        uR = OR(RR),
        ZR = (0, wR.i)(tR, vR).map((function(RR, GR) {
          return (0, yR.cloneElement)(RR, {
            viewBox: JR || uR,
            key: "label-".concat(GR)
          })
        }));
      if (!GR) return ZR;
      var iR = function(RR, JR) {
        return RR ? !0 === RR ? yR.createElement(vR, {
          key: "label-implicit",
          viewBox: JR
        }) : (0, rR.B)(RR) ? yR.createElement(vR, {
          key: "label-implicit",
          viewBox: JR,
          value: RR
        }) : (0, yR.isValidElement)(RR) ? RR.type === vR ? (0, yR.cloneElement)(RR, {
          key: "label-implicit",
          viewBox: JR
        }) : yR.createElement(vR, {
          key: "label-implicit",
          content: RR,
          viewBox: JR
        }) : qR()(RR) ? yR.createElement(vR, {
          key: "label-implicit",
          content: RR,
          viewBox: JR
        }) : fR()(RR) ? yR.createElement(vR, MR({
          viewBox: JR
        }, RR, {
          key: "label-implicit"
        })) : null : null
      }(RR.label, JR || uR);
      return [iR].concat(nR(ZR))
    }
  },
  7365: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => gR
    });
    var yR = GR(66),
      tR = GR(6516),
      uR = GR.n(tR),
      ZR = GR(6161),
      qR = GR.n(ZR),
      iR = GR(6357),
      fR = GR.n(iR),
      VR = GR(7373),
      KR = GR.n(VR),
      wR = GR(7301),
      rR = GR(7037),
      eR = GR(6523),
      aR = GR(7192);

    function LR(RR) {
      return LR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, LR(RR)
    }
    var nR = ["valueAccessor"],
      UR = ["data", "dataKey", "clockWise", "id", "textBreakAll"];

    function WR(RR) {
      return function(RR) {
        if (Array.isArray(RR)) return AR(RR)
      }(RR) || function(RR) {
        if ("undefined" !== typeof Symbol && null != RR[Symbol.iterator] || null != RR["@@iterator"]) return Array.from(RR)
      }(RR) || function(RR, JR) {
        if (!RR) return;
        if ("string" === typeof RR) return AR(RR, JR);
        var GR = Object.prototype.toString.call(RR).slice(8, -1);
        "Object" === GR && RR.constructor && (GR = RR.constructor.name);
        if ("Map" === GR || "Set" === GR) return Array.from(RR);
        if ("Arguments" === GR || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GR)) return AR(RR, JR)
      }(RR) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function AR(RR, JR) {
      (null == JR || JR > RR.length) && (JR = RR.length);
      for (var GR = 0, yR = new Array(JR); GR < JR; GR++) yR[GR] = RR[GR];
      return yR
    }

    function CR() {
      return CR = Object.assign ? Object.assign.bind() : function(RR) {
        for (var JR = 1; JR < arguments.length; JR++) {
          var GR = arguments[JR];
          for (var yR in GR) Object.prototype.hasOwnProperty.call(GR, yR) && (RR[yR] = GR[yR])
        }
        return RR
      }, CR.apply(this, arguments)
    }

    function XR(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function MR(RR) {
      for (var JR = 1; JR < arguments.length; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? XR(Object(GR), !0).forEach((function(JR) {
          BR(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : XR(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }

    function BR(RR, JR, GR) {
      return (JR = function(RR) {
        var JR = function(RR, JR) {
          if ("object" != LR(RR) || !RR) return RR;
          var GR = RR[Symbol.toPrimitive];
          if (void 0 !== GR) {
            var yR = GR.call(RR, JR || "default");
            if ("object" != LR(yR)) return yR;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === JR ? String : Number)(RR)
        }(RR, "string");
        return "symbol" == LR(JR) ? JR : JR + ""
      }(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }

    function lR(RR, JR) {
      if (null == RR) return {};
      var GR, yR, tR = function(RR, JR) {
        if (null == RR) return {};
        var GR = {};
        for (var yR in RR)
          if (Object.prototype.hasOwnProperty.call(RR, yR)) {
            if (JR.indexOf(yR) >= 0) continue;
            GR[yR] = RR[yR]
          } return GR
      }(RR, JR);
      if (Object.getOwnPropertySymbols) {
        var uR = Object.getOwnPropertySymbols(RR);
        for (yR = 0; yR < uR.length; yR++) GR = uR[yR], JR.indexOf(GR) >= 0 || Object.prototype.propertyIsEnumerable.call(RR, GR) && (tR[GR] = RR[GR])
      }
      return tR
    }
    var pR = function(RR) {
      return Array.isArray(RR.value) ? KR()(RR.value) : RR.value
    };

    function gR(RR) {
      var JR = RR.valueAccessor,
        GR = void 0 === JR ? pR : JR,
        tR = lR(RR, nR),
        ZR = tR.data,
        qR = tR.dataKey,
        iR = tR.clockWise,
        fR = tR.id,
        VR = tR.textBreakAll,
        KR = lR(tR, UR);
      return ZR && ZR.length ? yR.createElement(rR.c, {
        className: "recharts-label-list"
      }, ZR.map((function(RR, JR) {
        var tR = uR()(qR) ? GR(RR, JR) : (0, aR.hb)(RR && RR.payload, qR),
          ZR = uR()(fR) ? {} : {
            id: "".concat(fR, "-").concat(JR)
          };
        return yR.createElement(wR.b, CR({}, (0, eR.e)(RR, !0), KR, ZR, {
          parentViewBox: RR.parentViewBox,
          value: tR,
          textBreakAll: VR,
          viewBox: wR.b.parseViewBox(uR()(iR) ? RR : MR(MR({}, RR), {}, {
            clockWise: iR
          })),
          key: "label-".concat(JR),
          index: JR
        }))
      }))) : null
    }
    gR.displayName = "LabelList", gR.renderCallByParent = function(RR, JR) {
      var GR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!RR || !RR.children && GR && !RR.label) return null;
      var tR = RR.children,
        uR = (0, eR.i)(tR, gR).map((function(RR, GR) {
          return (0, yR.cloneElement)(RR, {
            data: JR,
            key: "labelList-".concat(GR)
          })
        }));
      return GR ? [function(RR, JR) {
        return RR ? !0 === RR ? yR.createElement(gR, {
          key: "labelList-implicit",
          data: JR
        }) : yR.isValidElement(RR) || fR()(RR) ? yR.createElement(gR, {
          key: "labelList-implicit",
          data: JR,
          content: RR
        }) : qR()(RR) ? yR.createElement(gR, CR({
          data: JR
        }, RR, {
          key: "labelList-implicit"
        })) : null : null
      }(RR.label, JR)].concat(WR(uR)) : uR
    }
  },
  7104: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => IR
    });
    var yR = GR(66),
      tR = GR(6357),
      uR = GR.n(tR),
      ZR = GR(6140),
      qR = GR(6520),
      iR = GR(7031),
      fR = GR(7111),
      VR = GR(6542);

    function KR(RR) {
      return KR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, KR(RR)
    }

    function wR() {
      return wR = Object.assign ? Object.assign.bind() : function(RR) {
        for (var JR = 1; JR < arguments.length; JR++) {
          var GR = arguments[JR];
          for (var yR in GR) Object.prototype.hasOwnProperty.call(GR, yR) && (RR[yR] = GR[yR])
        }
        return RR
      }, wR.apply(this, arguments)
    }

    function rR(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function eR(RR, JR) {
      for (var GR = 0; GR < JR.length; GR++) {
        var yR = JR[GR];
        yR.enumerable = yR.enumerable || !1, yR.configurable = !0, "value" in yR && (yR.writable = !0), Object.defineProperty(RR, AR(yR.key), yR)
      }
    }

    function aR(RR, JR, GR) {
      return JR = nR(JR),
        function(RR, JR) {
          if (JR && ("object" === KR(JR) || "function" === typeof JR)) return JR;
          if (void 0 !== JR) throw new TypeError("Derived constructors may only return object or undefined");
          return function(RR) {
            if (void 0 === RR) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return RR
          }(RR)
        }(RR, LR() ? Reflect.construct(JR, GR || [], nR(RR).constructor) : JR.apply(RR, GR))
    }

    function LR() {
      try {
        var RR = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (RR) {}
      return (LR = function() {
        return !!RR
      })()
    }

    function nR(RR) {
      return nR = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(RR) {
        return RR.__proto__ || Object.getPrototypeOf(RR)
      }, nR(RR)
    }

    function UR(RR, JR) {
      return UR = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(RR, JR) {
        return RR.__proto__ = JR, RR
      }, UR(RR, JR)
    }

    function WR(RR, JR, GR) {
      return (JR = AR(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }

    function AR(RR) {
      var JR = function(RR, JR) {
        if ("object" != KR(RR) || !RR) return RR;
        var GR = RR[Symbol.toPrimitive];
        if (void 0 !== GR) {
          var yR = GR.call(RR, JR || "default");
          if ("object" != KR(yR)) return yR;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === JR ? String : Number)(RR)
      }(RR, "string");
      return "symbol" == KR(JR) ? JR : JR + ""
    }
    var CR = 32,
      XR = function(RR) {
        function JR() {
          return function(RR, JR) {
            if (!(RR instanceof JR)) throw new TypeError("Cannot call a class as a function")
          }(this, JR), aR(this, JR, arguments)
        }
        return function(RR, JR) {
          if ("function" !== typeof JR && null !== JR) throw new TypeError("Super expression must either be null or a function");
          RR.prototype = Object.create(JR && JR.prototype, {
            constructor: {
              value: RR,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(RR, "prototype", {
            writable: !1
          }), JR && UR(RR, JR)
        }(JR, RR), GR = JR, tR = [{
          key: "renderIcon",
          value: function(RR) {
            var JR = this.props.inactiveColor,
              GR = 16,
              tR = CR / 6,
              uR = CR / 3,
              ZR = RR.inactive ? JR : RR.color;
            if ("plainline" === RR.type) return yR.createElement("line", {
              strokeWidth: 4,
              fill: "none",
              stroke: ZR,
              strokeDasharray: RR.payload.strokeDasharray,
              x1: 0,
              y1: GR,
              x2: CR,
              y2: GR,
              className: "recharts-legend-icon"
            });
            if ("line" === RR.type) return yR.createElement("path", {
              strokeWidth: 4,
              fill: "none",
              stroke: ZR,
              d: "M0,".concat(GR, "h").concat(uR, "\n            A").concat(tR, ",").concat(tR, ",0,1,1,").concat(2 * uR, ",").concat(GR, "\n            H").concat(CR, "M").concat(2 * uR, ",").concat(GR, "\n            A").concat(tR, ",").concat(tR, ",0,1,1,").concat(uR, ",").concat(GR),
              className: "recharts-legend-icon"
            });
            if ("rect" === RR.type) return yR.createElement("path", {
              stroke: "none",
              fill: ZR,
              d: "M0,".concat(4, "h").concat(CR, "v").concat(24, "h").concat(-32, "z"),
              className: "recharts-legend-icon"
            });
            if (yR.isValidElement(RR.legendIcon)) {
              var qR = function(RR) {
                for (var JR = 1; JR < arguments.length; JR++) {
                  var GR = null != arguments[JR] ? arguments[JR] : {};
                  JR % 2 ? rR(Object(GR), !0).forEach((function(JR) {
                    WR(RR, JR, GR[JR])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : rR(Object(GR)).forEach((function(JR) {
                    Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
                  }))
                }
                return RR
              }({}, RR);
              return delete qR.legendIcon, yR.cloneElement(RR.legendIcon, qR)
            }
            return yR.createElement(fR.b, {
              fill: ZR,
              cx: GR,
              cy: GR,
              size: CR,
              sizeType: "diameter",
              type: RR.type
            })
          }
        }, {
          key: "renderItems",
          value: function() {
            var RR = this,
              JR = this.props,
              GR = JR.payload,
              tR = JR.iconSize,
              fR = JR.layout,
              KR = JR.formatter,
              rR = JR.inactiveColor,
              eR = {
                x: 0,
                y: 0,
                width: CR,
                height: CR
              },
              aR = {
                display: "horizontal" === fR ? "inline-block" : "block",
                marginRight: 10
              },
              LR = {
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: 4
              };
            return GR.map((function(JR, GR) {
              var fR = JR.formatter || KR,
                nR = (0, ZR.c)(WR(WR({
                  "recharts-legend-item": !0
                }, "legend-item-".concat(GR), !0), "inactive", JR.inactive));
              if ("none" === JR.type) return null;
              var UR = uR()(JR.value) ? null : JR.value;
              (0, qR.c)(!uR()(JR.value), 'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>');
              var AR = JR.inactive ? rR : JR.color;
              return yR.createElement("li", wR({
                className: nR,
                style: aR,
                key: "legend-item-".concat(GR)
              }, (0, VR.g)(RR.props, JR, GR)), yR.createElement(iR.b, {
                width: tR,
                height: tR,
                viewBox: eR,
                style: LR
              }, RR.renderIcon(JR)), yR.createElement("span", {
                className: "recharts-legend-item-text",
                style: {
                  color: AR
                }
              }, fR ? fR(UR, JR, GR) : UR))
            }))
          }
        }, {
          key: "render",
          value: function() {
            var RR = this.props,
              JR = RR.payload,
              GR = RR.layout,
              tR = RR.align;
            if (!JR || !JR.length) return null;
            var uR = {
              padding: 0,
              margin: 0,
              textAlign: "horizontal" === GR ? tR : "left"
            };
            return yR.createElement("ul", {
              className: "recharts-default-legend",
              style: uR
            }, this.renderItems())
          }
        }], tR && eR(GR.prototype, tR), KR && eR(GR, KR), Object.defineProperty(GR, "prototype", {
          writable: !1
        }), GR;
        var GR, tR, KR
      }(yR.PureComponent);
    WR(XR, "displayName", "Legend"), WR(XR, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "middle",
      inactiveColor: "#ccc"
    });
    var MR = GR(6235),
      BR = GR(7049);

    function lR(RR) {
      return lR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, lR(RR)
    }
    var pR = ["ref"];

    function gR(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function bR(RR) {
      for (var JR = 1; JR < arguments.length; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? gR(Object(GR), !0).forEach((function(JR) {
          HR(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : gR(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }

    function vR(RR, JR) {
      for (var GR = 0; GR < JR.length; GR++) {
        var yR = JR[GR];
        yR.enumerable = yR.enumerable || !1, yR.configurable = !0, "value" in yR && (yR.writable = !0), Object.defineProperty(RR, oR(yR.key), yR)
      }
    }

    function OR(RR, JR, GR) {
      return JR = NR(JR),
        function(RR, JR) {
          if (JR && ("object" === lR(JR) || "function" === typeof JR)) return JR;
          if (void 0 !== JR) throw new TypeError("Derived constructors may only return object or undefined");
          return function(RR) {
            if (void 0 === RR) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return RR
          }(RR)
        }(RR, xR() ? Reflect.construct(JR, GR || [], NR(RR).constructor) : JR.apply(RR, GR))
    }

    function xR() {
      try {
        var RR = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (RR) {}
      return (xR = function() {
        return !!RR
      })()
    }

    function NR(RR) {
      return NR = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(RR) {
        return RR.__proto__ || Object.getPrototypeOf(RR)
      }, NR(RR)
    }

    function DR(RR, JR) {
      return DR = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(RR, JR) {
        return RR.__proto__ = JR, RR
      }, DR(RR, JR)
    }

    function HR(RR, JR, GR) {
      return (JR = oR(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }

    function oR(RR) {
      var JR = function(RR, JR) {
        if ("object" != lR(RR) || !RR) return RR;
        var GR = RR[Symbol.toPrimitive];
        if (void 0 !== GR) {
          var yR = GR.call(RR, JR || "default");
          if ("object" != lR(yR)) return yR;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === JR ? String : Number)(RR)
      }(RR, "string");
      return "symbol" == lR(JR) ? JR : JR + ""
    }

    function cR(RR, JR) {
      if (null == RR) return {};
      var GR, yR, tR = function(RR, JR) {
        if (null == RR) return {};
        var GR = {};
        for (var yR in RR)
          if (Object.prototype.hasOwnProperty.call(RR, yR)) {
            if (JR.indexOf(yR) >= 0) continue;
            GR[yR] = RR[yR]
          } return GR
      }(RR, JR);
      if (Object.getOwnPropertySymbols) {
        var uR = Object.getOwnPropertySymbols(RR);
        for (yR = 0; yR < uR.length; yR++) GR = uR[yR], JR.indexOf(GR) >= 0 || Object.prototype.propertyIsEnumerable.call(RR, GR) && (tR[GR] = RR[GR])
      }
      return tR
    }

    function PR(RR) {
      return RR.value
    }
    var IR = function(RR) {
      function JR() {
        var RR;
        ! function(RR, JR) {
          if (!(RR instanceof JR)) throw new TypeError("Cannot call a class as a function")
        }(this, JR);
        for (var GR = arguments.length, yR = new Array(GR), tR = 0; tR < GR; tR++) yR[tR] = arguments[tR];
        return HR(RR = OR(this, JR, [].concat(yR)), "lastBoundingBox", {
          width: -1,
          height: -1
        }), RR
      }
      return function(RR, JR) {
        if ("function" !== typeof JR && null !== JR) throw new TypeError("Super expression must either be null or a function");
        RR.prototype = Object.create(JR && JR.prototype, {
          constructor: {
            value: RR,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(RR, "prototype", {
          writable: !1
        }), JR && DR(RR, JR)
      }(JR, RR), GR = JR, uR = [{
        key: "getWithHeight",
        value: function(RR, JR) {
          var GR = bR(bR({}, this.defaultProps), RR.props).layout;
          return "vertical" === GR && (0, MR.C)(RR.props.height) ? {
            height: RR.props.height
          } : "horizontal" === GR ? {
            width: RR.props.width || JR
          } : null
        }
      }], (tR = [{
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
            var RR = this.wrapperNode.getBoundingClientRect();
            return RR.height = this.wrapperNode.offsetHeight, RR.width = this.wrapperNode.offsetWidth, RR
          }
          return null
        }
      }, {
        key: "updateBBox",
        value: function() {
          var RR = this.props.onBBoxUpdate,
            JR = this.getBBox();
          JR ? (Math.abs(JR.width - this.lastBoundingBox.width) > 1 || Math.abs(JR.height - this.lastBoundingBox.height) > 1) && (this.lastBoundingBox.width = JR.width, this.lastBoundingBox.height = JR.height, RR && RR(JR)) : -1 === this.lastBoundingBox.width && -1 === this.lastBoundingBox.height || (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, RR && RR(null))
        }
      }, {
        key: "getBBoxSnapshot",
        value: function() {
          return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? bR({}, this.lastBoundingBox) : {
            width: 0,
            height: 0
          }
        }
      }, {
        key: "getDefaultPosition",
        value: function(RR) {
          var JR, GR, yR = this.props,
            tR = yR.layout,
            uR = yR.align,
            ZR = yR.verticalAlign,
            qR = yR.margin,
            iR = yR.chartWidth,
            fR = yR.chartHeight;
          return RR && (void 0 !== RR.left && null !== RR.left || void 0 !== RR.right && null !== RR.right) || (JR = "center" === uR && "vertical" === tR ? {
            left: ((iR || 0) - this.getBBoxSnapshot().width) / 2
          } : "right" === uR ? {
            right: qR && qR.right || 0
          } : {
            left: qR && qR.left || 0
          }), RR && (void 0 !== RR.top && null !== RR.top || void 0 !== RR.bottom && null !== RR.bottom) || (GR = "middle" === ZR ? {
            top: ((fR || 0) - this.getBBoxSnapshot().height) / 2
          } : "bottom" === ZR ? {
            bottom: qR && qR.bottom || 0
          } : {
            top: qR && qR.top || 0
          }), bR(bR({}, JR), GR)
        }
      }, {
        key: "render",
        value: function() {
          var RR = this,
            JR = this.props,
            GR = JR.content,
            tR = JR.width,
            uR = JR.height,
            ZR = JR.wrapperStyle,
            qR = JR.payloadUniqBy,
            iR = JR.payload,
            fR = bR(bR({
              position: "absolute",
              width: tR || "auto",
              height: uR || "auto"
            }, this.getDefaultPosition(ZR)), ZR);
          return yR.createElement("div", {
            className: "recharts-legend-wrapper",
            style: fR,
            ref: function(JR) {
              RR.wrapperNode = JR
            }
          }, function(RR, JR) {
            if (yR.isValidElement(RR)) return yR.cloneElement(RR, JR);
            if ("function" === typeof RR) return yR.createElement(RR, JR);
            JR.ref;
            var GR = cR(JR, pR);
            return yR.createElement(XR, GR)
          }(GR, bR(bR({}, this.props), {}, {
            payload: (0, BR.d)(iR, qR, PR)
          })))
        }
      }]) && vR(GR.prototype, tR), uR && vR(GR, uR), Object.defineProperty(GR, "prototype", {
        writable: !1
      }), GR;
      var GR, tR, uR
    }(yR.PureComponent);
    HR(IR, "displayName", "Legend"), HR(IR, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom"
    })
  },
  6137: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => LR
    });
    var yR = GR(6140),
      tR = GR(66),
      uR = GR(6149),
      ZR = GR.n(uR),
      qR = GR(6235),
      iR = GR(6520),
      fR = GR(6523);

    function VR(RR) {
      return VR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, VR(RR)
    }

    function KR(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function wR(RR) {
      for (var JR = 1; JR < arguments.length; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? KR(Object(GR), !0).forEach((function(JR) {
          rR(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : KR(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }

    function rR(RR, JR, GR) {
      return (JR = function(RR) {
        var JR = function(RR, JR) {
          if ("object" != VR(RR) || !RR) return RR;
          var GR = RR[Symbol.toPrimitive];
          if (void 0 !== GR) {
            var yR = GR.call(RR, JR || "default");
            if ("object" != VR(yR)) return yR;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === JR ? String : Number)(RR)
        }(RR, "string");
        return "symbol" == VR(JR) ? JR : JR + ""
      }(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }

    function eR(RR, JR) {
      return function(RR) {
        if (Array.isArray(RR)) return RR
      }(RR) || function(RR, JR) {
        var GR = null == RR ? null : "undefined" != typeof Symbol && RR[Symbol.iterator] || RR["@@iterator"];
        if (null != GR) {
          var yR, tR, uR, ZR, qR = [],
            iR = !0,
            fR = !1;
          try {
            if (uR = (GR = GR.call(RR)).next, 0 === JR) {
              if (Object(GR) !== GR) return;
              iR = !1
            } else
              for (; !(iR = (yR = uR.call(GR)).done) && (qR.push(yR.value), qR.length !== JR); iR = !0);
          } catch (RR) {
            fR = !0, tR = RR
          } finally {
            try {
              if (!iR && null != GR.return && (ZR = GR.return(), Object(ZR) !== ZR)) return
            } finally {
              if (fR) throw tR
            }
          }
          return qR
        }
      }(RR, JR) || function(RR, JR) {
        if (!RR) return;
        if ("string" === typeof RR) return aR(RR, JR);
        var GR = Object.prototype.toString.call(RR).slice(8, -1);
        "Object" === GR && RR.constructor && (GR = RR.constructor.name);
        if ("Map" === GR || "Set" === GR) return Array.from(RR);
        if ("Arguments" === GR || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GR)) return aR(RR, JR)
      }(RR, JR) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function aR(RR, JR) {
      (null == JR || JR > RR.length) && (JR = RR.length);
      for (var GR = 0, yR = new Array(JR); GR < JR; GR++) yR[GR] = RR[GR];
      return yR
    }
    var LR = (0, tR.forwardRef)((function(RR, JR) {
      var GR = RR.aspect,
        uR = RR.initialDimension,
        VR = void 0 === uR ? {
          width: -1,
          height: -1
        } : uR,
        KR = RR.width,
        rR = void 0 === KR ? "100%" : KR,
        aR = RR.height,
        LR = void 0 === aR ? "100%" : aR,
        nR = RR.minWidth,
        UR = void 0 === nR ? 0 : nR,
        WR = RR.minHeight,
        AR = RR.maxHeight,
        CR = RR.children,
        XR = RR.debounce,
        MR = void 0 === XR ? 0 : XR,
        BR = RR.id,
        lR = RR.className,
        pR = RR.iW,
        gR = RR.style,
        bR = void 0 === gR ? {} : gR,
        vR = (0, tR.useRef)(null),
        OR = (0, tR.useRef)();
      OR.current = pR, (0, tR.useImperativeHandle)(JR, (function() {
        return Object.defineProperty(vR.current, "current", {
          get: function() {
            return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), vR.current
          },
          configurable: !0
        })
      }));
      var xR = eR((0, tR.useState)({
          containerWidth: VR.width,
          containerHeight: VR.height
        }), 2),
        NR = xR[0],
        DR = xR[1],
        HR = (0, tR.useCallback)((function(RR, JR) {
          DR((function(GR) {
            var yR = Math.round(RR),
              tR = Math.round(JR);
            return GR.containerWidth === yR && GR.containerHeight === tR ? GR : {
              containerWidth: yR,
              containerHeight: tR
            }
          }))
        }), []);
      (0, tR.useEffect)((function() {
        var RR = function(RR) {
          var JR, GR = RR[0].contentRect,
            yR = GR.width,
            tR = GR.height;
          HR(yR, tR), null === (JR = OR.current) || void 0 === JR || JR.call(OR, yR, tR)
        };
        MR > 0 && (RR = ZR()(RR, MR, {
          trailing: !0,
          leading: !1
        }));
        var JR = new ResizeObserver(RR),
          GR = vR.current.getBoundingClientRect(),
          yR = GR.width,
          tR = GR.height;
        return HR(yR, tR), JR.observe(vR.current),
          function() {
            JR.disconnect()
          }
      }), [HR, MR]);
      var oR = (0, tR.useMemo)((function() {
        var RR = NR.containerWidth,
          JR = NR.containerHeight;
        if (RR < 0 || JR < 0) return null;
        (0, iR.c)((0, qR.F)(rR) || (0, qR.F)(LR), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", rR, LR), (0, iR.c)(!GR || GR > 0, "The aspect(%s) must be greater than zero.", GR);
        var yR = (0, qR.F)(rR) ? RR : rR,
          uR = (0, qR.F)(LR) ? JR : LR;
        GR && GR > 0 && (yR ? uR = yR / GR : uR && (yR = uR * GR), AR && uR > AR && (uR = AR)), (0, iR.c)(yR > 0 || uR > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", yR, uR, rR, LR, UR, WR, GR);
        var ZR = !Array.isArray(CR) && (0, fR.l)(CR.type).endsWith("Chart");
        return tR.Children.map(CR, (function(RR) {
          return tR.isValidElement(RR) ? (0, tR.cloneElement)(RR, wR({
            width: yR,
            height: uR
          }, ZR ? {
            style: wR({
              height: "100%",
              width: "100%",
              maxHeight: uR,
              maxWidth: yR
            }, RR.props.style)
          } : {})) : RR
        }))
      }), [GR, CR, LR, AR, WR, UR, NR, rR]);
      return tR.createElement("div", {
        id: BR ? "".concat(BR) : void 0,
        className: (0, yR.c)("recharts-responsive-container", lR),
        style: wR(wR({}, bR), {}, {
          width: rR,
          height: LR,
          minWidth: UR,
          minHeight: WR,
          maxHeight: AR
        }),
        ref: vR
      }, oR)
    }))
  },
  7181: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => mR
    });
    var yR = GR(66),
      tR = GR(6516),
      uR = GR.n(tR),
      ZR = GR(6140),
      qR = GR(6235),
      iR = GR(7047),
      fR = GR(6523),
      VR = GR(7189);

    function KR(RR) {
      return KR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, KR(RR)
    }

    function wR(RR, JR) {
      return function(RR) {
        if (Array.isArray(RR)) return RR
      }(RR) || function(RR, JR) {
        var GR = null == RR ? null : "undefined" != typeof Symbol && RR[Symbol.iterator] || RR["@@iterator"];
        if (null != GR) {
          var yR, tR, uR, ZR, qR = [],
            iR = !0,
            fR = !1;
          try {
            if (uR = (GR = GR.call(RR)).next, 0 === JR) {
              if (Object(GR) !== GR) return;
              iR = !1
            } else
              for (; !(iR = (yR = uR.call(GR)).done) && (qR.push(yR.value), qR.length !== JR); iR = !0);
          } catch (RR) {
            fR = !0, tR = RR
          } finally {
            try {
              if (!iR && null != GR.return && (ZR = GR.return(), Object(ZR) !== ZR)) return
            } finally {
              if (fR) throw tR
            }
          }
          return qR
        }
      }(RR, JR) || function(RR, JR) {
        if (!RR) return;
        if ("string" === typeof RR) return rR(RR, JR);
        var GR = Object.prototype.toString.call(RR).slice(8, -1);
        "Object" === GR && RR.constructor && (GR = RR.constructor.name);
        if ("Map" === GR || "Set" === GR) return Array.from(RR);
        if ("Arguments" === GR || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GR)) return rR(RR, JR)
      }(RR, JR) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function rR(RR, JR) {
      (null == JR || JR > RR.length) && (JR = RR.length);
      for (var GR = 0, yR = new Array(JR); GR < JR; GR++) yR[GR] = RR[GR];
      return yR
    }

    function eR(RR, JR) {
      for (var GR = 0; GR < JR.length; GR++) {
        var yR = JR[GR];
        yR.enumerable = yR.enumerable || !1, yR.configurable = !0, "value" in yR && (yR.writable = !0), Object.defineProperty(RR, aR(yR.key), yR)
      }
    }

    function aR(RR) {
      var JR = function(RR, JR) {
        if ("object" != KR(RR) || !RR) return RR;
        var GR = RR[Symbol.toPrimitive];
        if (void 0 !== GR) {
          var yR = GR.call(RR, JR || "default");
          if ("object" != KR(yR)) return yR;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === JR ? String : Number)(RR)
      }(RR, "string");
      return "symbol" == KR(JR) ? JR : JR + ""
    }
    var LR = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      nR = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      UR = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
      WR = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
      AR = {
        cm: 96 / 2.54,
        mm: 96 / 25.4,
        pt: 96 / 72,
        pc: 16,
        in: 96,
        Q: 96 / 101.6,
        px: 1
      },
      CR = Object.keys(AR),
      XR = "NaN";
    var MR = function() {
      function RR(JR, GR) {
        ! function(RR, JR) {
          if (!(RR instanceof JR)) throw new TypeError("Cannot call a class as a function")
        }(this, RR), this.num = JR, this.unit = GR, this.num = JR, this.unit = GR, Number.isNaN(JR) && (this.unit = ""), "" === GR || UR.test(GR) || (this.num = NaN, this.unit = ""), CR.includes(GR) && (this.num = function(RR, JR) {
          return RR * AR[JR]
        }(JR, GR), this.unit = "px")
      }
      return JR = RR, yR = [{
        key: "parse",
        value: function(JR) {
          var GR, yR = wR(null !== (GR = WR.exec(JR)) && void 0 !== GR ? GR : [], 3),
            tR = yR[1],
            uR = yR[2];
          return new RR(parseFloat(tR), null !== uR && void 0 !== uR ? uR : "")
        }
      }], (GR = [{
        key: "add",
        value: function(JR) {
          return this.unit !== JR.unit ? new RR(NaN, "") : new RR(this.num + JR.num, this.unit)
        }
      }, {
        key: "subtract",
        value: function(JR) {
          return this.unit !== JR.unit ? new RR(NaN, "") : new RR(this.num - JR.num, this.unit)
        }
      }, {
        key: "multiply",
        value: function(JR) {
          return "" !== this.unit && "" !== JR.unit && this.unit !== JR.unit ? new RR(NaN, "") : new RR(this.num * JR.num, this.unit || JR.unit)
        }
      }, {
        key: "divide",
        value: function(JR) {
          return "" !== this.unit && "" !== JR.unit && this.unit !== JR.unit ? new RR(NaN, "") : new RR(this.num / JR.num, this.unit || JR.unit)
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
      }]) && eR(JR.prototype, GR), yR && eR(JR, yR), Object.defineProperty(JR, "prototype", {
        writable: !1
      }), JR;
      var JR, GR, yR
    }();

    function BR(RR) {
      if (RR.includes(XR)) return XR;
      for (var JR = RR; JR.includes("*") || JR.includes("/");) {
        var GR, yR = wR(null !== (GR = LR.exec(JR)) && void 0 !== GR ? GR : [], 4),
          tR = yR[1],
          uR = yR[2],
          ZR = yR[3],
          qR = MR.parse(null !== tR && void 0 !== tR ? tR : ""),
          iR = MR.parse(null !== ZR && void 0 !== ZR ? ZR : ""),
          fR = "*" === uR ? qR.multiply(iR) : qR.divide(iR);
        if (fR.isNaN()) return XR;
        JR = JR.replace(LR, fR.toString())
      }
      for (; JR.includes("+") || /.-\d+(?:\.\d+)?/.test(JR);) {
        var VR, KR = wR(null !== (VR = nR.exec(JR)) && void 0 !== VR ? VR : [], 4),
          rR = KR[1],
          eR = KR[2],
          aR = KR[3],
          UR = MR.parse(null !== rR && void 0 !== rR ? rR : ""),
          WR = MR.parse(null !== aR && void 0 !== aR ? aR : ""),
          AR = "+" === eR ? UR.add(WR) : UR.subtract(WR);
        if (AR.isNaN()) return XR;
        JR = JR.replace(nR, AR.toString())
      }
      return JR
    }
    var lR = /\(([^()]*)\)/;

    function pR(RR) {
      var JR = RR.replace(/\s+/g, "");
      return JR = function(RR) {
        for (var JR = RR; JR.includes("(");) {
          var GR = wR(lR.exec(JR), 2)[1];
          JR = JR.replace(lR, BR(GR))
        }
        return JR
      }(JR), JR = BR(JR)
    }

    function gR(RR) {
      var JR = function(RR) {
        try {
          return pR(RR)
        } catch (JR) {
          return XR
        }
      }(RR.slice(5, -1));
      return JR === XR ? "" : JR
    }
    var bR = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"],
      vR = ["dx", "dy", "angle", "className", "breakAll"];

    function OR() {
      return OR = Object.assign ? Object.assign.bind() : function(RR) {
        for (var JR = 1; JR < arguments.length; JR++) {
          var GR = arguments[JR];
          for (var yR in GR) Object.prototype.hasOwnProperty.call(GR, yR) && (RR[yR] = GR[yR])
        }
        return RR
      }, OR.apply(this, arguments)
    }

    function xR(RR, JR) {
      if (null == RR) return {};
      var GR, yR, tR = function(RR, JR) {
        if (null == RR) return {};
        var GR = {};
        for (var yR in RR)
          if (Object.prototype.hasOwnProperty.call(RR, yR)) {
            if (JR.indexOf(yR) >= 0) continue;
            GR[yR] = RR[yR]
          } return GR
      }(RR, JR);
      if (Object.getOwnPropertySymbols) {
        var uR = Object.getOwnPropertySymbols(RR);
        for (yR = 0; yR < uR.length; yR++) GR = uR[yR], JR.indexOf(GR) >= 0 || Object.prototype.propertyIsEnumerable.call(RR, GR) && (tR[GR] = RR[GR])
      }
      return tR
    }

    function NR(RR, JR) {
      return function(RR) {
        if (Array.isArray(RR)) return RR
      }(RR) || function(RR, JR) {
        var GR = null == RR ? null : "undefined" != typeof Symbol && RR[Symbol.iterator] || RR["@@iterator"];
        if (null != GR) {
          var yR, tR, uR, ZR, qR = [],
            iR = !0,
            fR = !1;
          try {
            if (uR = (GR = GR.call(RR)).next, 0 === JR) {
              if (Object(GR) !== GR) return;
              iR = !1
            } else
              for (; !(iR = (yR = uR.call(GR)).done) && (qR.push(yR.value), qR.length !== JR); iR = !0);
          } catch (RR) {
            fR = !0, tR = RR
          } finally {
            try {
              if (!iR && null != GR.return && (ZR = GR.return(), Object(ZR) !== ZR)) return
            } finally {
              if (fR) throw tR
            }
          }
          return qR
        }
      }(RR, JR) || function(RR, JR) {
        if (!RR) return;
        if ("string" === typeof RR) return DR(RR, JR);
        var GR = Object.prototype.toString.call(RR).slice(8, -1);
        "Object" === GR && RR.constructor && (GR = RR.constructor.name);
        if ("Map" === GR || "Set" === GR) return Array.from(RR);
        if ("Arguments" === GR || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GR)) return DR(RR, JR)
      }(RR, JR) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function DR(RR, JR) {
      (null == JR || JR > RR.length) && (JR = RR.length);
      for (var GR = 0, yR = new Array(JR); GR < JR; GR++) yR[GR] = RR[GR];
      return yR
    }
    var HR = /[ \f\n\r\t\v\u2028\u2029]+/,
      oR = function(RR) {
        var JR = RR.children,
          GR = RR.breakAll,
          yR = RR.style;
        try {
          var tR = [];
          return uR()(JR) || (tR = GR ? JR.toString().split("") : JR.toString().split(HR)), {
            wordsWithComputedWidth: tR.map((function(RR) {
              return {
                word: RR,
                width: (0, VR.e)(RR, yR).width
              }
            })),
            spaceWidth: GR ? 0 : (0, VR.e)("\xa0", yR).width
          }
        } catch (ZR) {
          return null
        }
      },
      cR = function(RR) {
        return [{
          words: uR()(RR) ? [] : RR.toString().split(HR)
        }]
      },
      PR = function(RR) {
        var JR = RR.width,
          GR = RR.scaleToFit,
          yR = RR.children,
          tR = RR.style,
          uR = RR.breakAll,
          ZR = RR.maxLines;
        if ((JR || GR) && !iR.d.isSsr) {
          var fR = oR({
            breakAll: uR,
            children: yR,
            style: tR
          });
          return fR ? function(RR, JR, GR, yR, tR) {
            var uR = RR.maxLines,
              ZR = RR.children,
              iR = RR.style,
              fR = RR.breakAll,
              VR = (0, qR.C)(uR),
              KR = ZR,
              wR = function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce((function(RR, JR) {
                  var uR = JR.word,
                    ZR = JR.width,
                    qR = RR[RR.length - 1];
                  if (qR && (null == yR || tR || qR.width + ZR + GR < Number(yR))) qR.words.push(uR), qR.width += ZR + GR;
                  else {
                    var iR = {
                      words: [uR],
                      width: ZR
                    };
                    RR.push(iR)
                  }
                  return RR
                }), [])
              },
              rR = wR(JR);
            if (!VR) return rR;
            for (var eR, aR = function(RR) {
                var JR = KR.slice(0, RR),
                  GR = oR({
                    breakAll: fR,
                    style: iR,
                    children: JR + "\u2026"
                  }).wordsWithComputedWidth,
                  tR = wR(GR),
                  ZR = tR.length > uR || function(RR) {
                    return RR.reduce((function(RR, JR) {
                      return RR.width > JR.width ? RR : JR
                    }))
                  }(tR).width > Number(yR);
                return [ZR, tR]
              }, LR = 0, nR = KR.length - 1, UR = 0; LR <= nR && UR <= KR.length - 1;) {
              var WR = Math.floor((LR + nR) / 2),
                AR = NR(aR(WR - 1), 2),
                CR = AR[0],
                XR = AR[1],
                MR = NR(aR(WR), 1)[0];
              if (CR || MR || (LR = WR + 1), CR && MR && (nR = WR - 1), !CR && MR) {
                eR = XR;
                break
              }
              UR++
            }
            return eR || rR
          }({
            breakAll: uR,
            children: yR,
            maxLines: ZR,
            style: tR
          }, fR.wordsWithComputedWidth, fR.spaceWidth, JR, GR) : cR(yR)
        }
        return cR(yR)
      },
      IR = "#808080",
      mR = function(RR) {
        var JR = RR.x,
          GR = void 0 === JR ? 0 : JR,
          tR = RR.y,
          uR = void 0 === tR ? 0 : tR,
          iR = RR.lineHeight,
          VR = void 0 === iR ? "1em" : iR,
          KR = RR.capHeight,
          wR = void 0 === KR ? "0.71em" : KR,
          rR = RR.scaleToFit,
          eR = void 0 !== rR && rR,
          aR = RR.textAnchor,
          LR = void 0 === aR ? "start" : aR,
          nR = RR.verticalAnchor,
          UR = void 0 === nR ? "end" : nR,
          WR = RR.fill,
          AR = void 0 === WR ? IR : WR,
          CR = xR(RR, bR),
          XR = (0, yR.useMemo)((function() {
            return PR({
              breakAll: CR.breakAll,
              children: CR.children,
              maxLines: CR.maxLines,
              scaleToFit: eR,
              style: CR.style,
              width: CR.width
            })
          }), [CR.breakAll, CR.children, CR.maxLines, eR, CR.style, CR.width]),
          MR = CR.dx,
          BR = CR.dy,
          lR = CR.angle,
          pR = CR.className,
          NR = CR.breakAll,
          DR = xR(CR, vR);
        if (!(0, qR.B)(GR) || !(0, qR.B)(uR)) return null;
        var HR, oR = GR + ((0, qR.C)(MR) ? MR : 0),
          cR = uR + ((0, qR.C)(BR) ? BR : 0);
        switch (UR) {
          case "start":
            HR = gR("calc(".concat(wR, ")"));
            break;
          case "middle":
            HR = gR("calc(".concat((XR.length - 1) / 2, " * -").concat(VR, " + (").concat(wR, " / 2))"));
            break;
          default:
            HR = gR("calc(".concat(XR.length - 1, " * -").concat(VR, ")"))
        }
        var mR = [];
        if (eR) {
          var zR = XR[0].width,
            SR = CR.width;
          mR.push("scale(".concat(((0, qR.C)(SR) ? SR / zR : 1) / zR, ")"))
        }
        return lR && mR.push("rotate(".concat(lR, ", ").concat(oR, ", ").concat(cR, ")")), mR.length && (DR.transform = mR.join(" ")), yR.createElement("text", OR({}, (0, fR.e)(DR, !0), {
          x: oR,
          y: cR,
          className: (0, ZR.c)("recharts-text", pR),
          textAnchor: LR,
          fill: AR.includes("url") ? IR : AR
        }), XR.map((function(RR, JR) {
          var GR = RR.words.join(NR ? "" : " ");
          return yR.createElement("tspan", {
            x: oR,
            dy: 0 === JR ? HR : VR,
            key: "".concat(GR, "-").concat(JR)
          }, GR)
        })))
      }
  },
  7039: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => TR
    });
    var yR = GR(66),
      tR = GR(6600),
      uR = GR.n(tR),
      ZR = GR(6516),
      qR = GR.n(ZR),
      iR = GR(6140),
      fR = GR(6235);

    function VR(RR) {
      return VR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, VR(RR)
    }

    function KR() {
      return KR = Object.assign ? Object.assign.bind() : function(RR) {
        for (var JR = 1; JR < arguments.length; JR++) {
          var GR = arguments[JR];
          for (var yR in GR) Object.prototype.hasOwnProperty.call(GR, yR) && (RR[yR] = GR[yR])
        }
        return RR
      }, KR.apply(this, arguments)
    }

    function wR(RR, JR) {
      return function(RR) {
        if (Array.isArray(RR)) return RR
      }(RR) || function(RR, JR) {
        var GR = null == RR ? null : "undefined" != typeof Symbol && RR[Symbol.iterator] || RR["@@iterator"];
        if (null != GR) {
          var yR, tR, uR, ZR, qR = [],
            iR = !0,
            fR = !1;
          try {
            if (uR = (GR = GR.call(RR)).next, 0 === JR) {
              if (Object(GR) !== GR) return;
              iR = !1
            } else
              for (; !(iR = (yR = uR.call(GR)).done) && (qR.push(yR.value), qR.length !== JR); iR = !0);
          } catch (RR) {
            fR = !0, tR = RR
          } finally {
            try {
              if (!iR && null != GR.return && (ZR = GR.return(), Object(ZR) !== ZR)) return
            } finally {
              if (fR) throw tR
            }
          }
          return qR
        }
      }(RR, JR) || function(RR, JR) {
        if (!RR) return;
        if ("string" === typeof RR) return rR(RR, JR);
        var GR = Object.prototype.toString.call(RR).slice(8, -1);
        "Object" === GR && RR.constructor && (GR = RR.constructor.name);
        if ("Map" === GR || "Set" === GR) return Array.from(RR);
        if ("Arguments" === GR || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GR)) return rR(RR, JR)
      }(RR, JR) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function rR(RR, JR) {
      (null == JR || JR > RR.length) && (JR = RR.length);
      for (var GR = 0, yR = new Array(JR); GR < JR; GR++) yR[GR] = RR[GR];
      return yR
    }

    function eR(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function aR(RR) {
      for (var JR = 1; JR < arguments.length; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? eR(Object(GR), !0).forEach((function(JR) {
          LR(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : eR(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }

    function LR(RR, JR, GR) {
      return (JR = function(RR) {
        var JR = function(RR, JR) {
          if ("object" != VR(RR) || !RR) return RR;
          var GR = RR[Symbol.toPrimitive];
          if (void 0 !== GR) {
            var yR = GR.call(RR, JR || "default");
            if ("object" != VR(yR)) return yR;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === JR ? String : Number)(RR)
        }(RR, "string");
        return "symbol" == VR(JR) ? JR : JR + ""
      }(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }

    function nR(RR) {
      return Array.isArray(RR) && (0, fR.B)(RR[0]) && (0, fR.B)(RR[1]) ? RR.join(" ~ ") : RR
    }
    var UR = function(RR) {
      var JR = RR.separator,
        GR = void 0 === JR ? " : " : JR,
        tR = RR.contentStyle,
        ZR = void 0 === tR ? {} : tR,
        VR = RR.itemStyle,
        rR = void 0 === VR ? {} : VR,
        eR = RR.labelStyle,
        LR = void 0 === eR ? {} : eR,
        UR = RR.payload,
        WR = RR.formatter,
        AR = RR.itemSorter,
        CR = RR.wrapperClassName,
        XR = RR.labelClassName,
        MR = RR.label,
        BR = RR.labelFormatter,
        lR = RR.accessibilityLayer,
        pR = void 0 !== lR && lR,
        gR = aR({
          margin: 0,
          padding: 10,
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          whiteSpace: "nowrap"
        }, ZR),
        bR = aR({
          margin: 0
        }, LR),
        vR = !qR()(MR),
        OR = vR ? MR : "",
        xR = (0, iR.c)("recharts-default-tooltip", CR),
        NR = (0, iR.c)("recharts-tooltip-label", XR);
      vR && BR && void 0 !== UR && null !== UR && (OR = BR(MR, UR));
      var DR = pR ? {
        role: "status",
        "aria-live": "assertive"
      } : {};
      return yR.createElement("div", KR({
        className: xR,
        style: gR
      }, DR), yR.createElement("p", {
        className: NR,
        style: bR
      }, yR.isValidElement(OR) ? OR : "".concat(OR)), function() {
        if (UR && UR.length) {
          var RR = (AR ? uR()(UR, AR) : UR).map((function(RR, JR) {
            if ("none" === RR.type) return null;
            var tR = aR({
                display: "block",
                paddingTop: 4,
                paddingBottom: 4,
                color: RR.color || "#000"
              }, rR),
              uR = RR.formatter || WR || nR,
              ZR = RR.value,
              qR = RR.name,
              iR = ZR,
              VR = qR;
            if (uR && null != iR && null != VR) {
              var KR = uR(ZR, qR, RR, JR, UR);
              if (Array.isArray(KR)) {
                var eR = wR(KR, 2);
                iR = eR[0], VR = eR[1]
              } else iR = KR
            }
            return yR.createElement("li", {
              className: "recharts-tooltip-item",
              key: "tooltip-item-".concat(JR),
              style: tR
            }, (0, fR.B)(VR) ? yR.createElement("span", {
              className: "recharts-tooltip-item-name"
            }, VR) : null, (0, fR.B)(VR) ? yR.createElement("span", {
              className: "recharts-tooltip-item-separator"
            }, GR) : null, yR.createElement("span", {
              className: "recharts-tooltip-item-value"
            }, iR), yR.createElement("span", {
              className: "recharts-tooltip-item-unit"
            }, RR.unit || ""))
          }));
          return yR.createElement("ul", {
            className: "recharts-tooltip-item-list",
            style: {
              padding: 0,
              margin: 0
            }
          }, RR)
        }
        return null
      }())
    };

    function WR(RR) {
      return WR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, WR(RR)
    }

    function AR(RR, JR, GR) {
      return (JR = function(RR) {
        var JR = function(RR, JR) {
          if ("object" != WR(RR) || !RR) return RR;
          var GR = RR[Symbol.toPrimitive];
          if (void 0 !== GR) {
            var yR = GR.call(RR, JR || "default");
            if ("object" != WR(yR)) return yR;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === JR ? String : Number)(RR)
        }(RR, "string");
        return "symbol" == WR(JR) ? JR : JR + ""
      }(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }
    var CR = "recharts-tooltip-wrapper",
      XR = {
        visibility: "hidden"
      };

    function MR(RR) {
      var JR = RR.coordinate,
        GR = RR.translateX,
        yR = RR.translateY;
      return (0, iR.c)(CR, AR(AR(AR(AR({}, "".concat(CR, "-right"), (0, fR.C)(GR) && JR && (0, fR.C)(JR.x) && GR >= JR.x), "".concat(CR, "-left"), (0, fR.C)(GR) && JR && (0, fR.C)(JR.x) && GR < JR.x), "".concat(CR, "-bottom"), (0, fR.C)(yR) && JR && (0, fR.C)(JR.y) && yR >= JR.y), "".concat(CR, "-top"), (0, fR.C)(yR) && JR && (0, fR.C)(JR.y) && yR < JR.y))
    }

    function BR(RR) {
      var JR = RR.allowEscapeViewBox,
        GR = RR.coordinate,
        yR = RR.key,
        tR = RR.offsetTopLeft,
        uR = RR.position,
        ZR = RR.reverseDirection,
        qR = RR.tooltipDimension,
        iR = RR.viewBox,
        VR = RR.viewBoxDimension;
      if (uR && (0, fR.C)(uR[yR])) return uR[yR];
      var KR = GR[yR] - qR - tR,
        wR = GR[yR] + tR;
      return JR[yR] ? ZR[yR] ? KR : wR : ZR[yR] ? KR < iR[yR] ? Math.max(wR, iR[yR]) : Math.max(KR, iR[yR]) : wR + qR > iR[yR] + VR ? Math.max(KR, iR[yR]) : Math.max(wR, iR[yR])
    }

    function lR(RR) {
      return lR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, lR(RR)
    }

    function pR(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function gR(RR) {
      for (var JR = 1; JR < arguments.length; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? pR(Object(GR), !0).forEach((function(JR) {
          DR(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : pR(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }

    function bR(RR, JR) {
      for (var GR = 0; GR < JR.length; GR++) {
        var yR = JR[GR];
        yR.enumerable = yR.enumerable || !1, yR.configurable = !0, "value" in yR && (yR.writable = !0), Object.defineProperty(RR, HR(yR.key), yR)
      }
    }

    function vR(RR, JR, GR) {
      return JR = xR(JR),
        function(RR, JR) {
          if (JR && ("object" === lR(JR) || "function" === typeof JR)) return JR;
          if (void 0 !== JR) throw new TypeError("Derived constructors may only return object or undefined");
          return function(RR) {
            if (void 0 === RR) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return RR
          }(RR)
        }(RR, OR() ? Reflect.construct(JR, GR || [], xR(RR).constructor) : JR.apply(RR, GR))
    }

    function OR() {
      try {
        var RR = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (RR) {}
      return (OR = function() {
        return !!RR
      })()
    }

    function xR(RR) {
      return xR = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(RR) {
        return RR.__proto__ || Object.getPrototypeOf(RR)
      }, xR(RR)
    }

    function NR(RR, JR) {
      return NR = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(RR, JR) {
        return RR.__proto__ = JR, RR
      }, NR(RR, JR)
    }

    function DR(RR, JR, GR) {
      return (JR = HR(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }

    function HR(RR) {
      var JR = function(RR, JR) {
        if ("object" != lR(RR) || !RR) return RR;
        var GR = RR[Symbol.toPrimitive];
        if (void 0 !== GR) {
          var yR = GR.call(RR, JR || "default");
          if ("object" != lR(yR)) return yR;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === JR ? String : Number)(RR)
      }(RR, "string");
      return "symbol" == lR(JR) ? JR : JR + ""
    }
    var oR = function(RR) {
        function JR() {
          var RR;
          ! function(RR, JR) {
            if (!(RR instanceof JR)) throw new TypeError("Cannot call a class as a function")
          }(this, JR);
          for (var GR = arguments.length, yR = new Array(GR), tR = 0; tR < GR; tR++) yR[tR] = arguments[tR];
          return DR(RR = vR(this, JR, [].concat(yR)), "state", {
            dismissed: !1,
            dismissedAtCoordinate: {
              x: 0,
              y: 0
            },
            lastBoundingBox: {
              width: -1,
              height: -1
            }
          }), DR(RR, "handleKeyDown", (function(JR) {
            var GR, yR, tR, uR;
            "Escape" === JR.key && RR.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x: null !== (GR = null === (yR = RR.props.coordinate) || void 0 === yR ? void 0 : yR.x) && void 0 !== GR ? GR : 0,
                y: null !== (tR = null === (uR = RR.props.coordinate) || void 0 === uR ? void 0 : uR.y) && void 0 !== tR ? tR : 0
              }
            })
          })), RR
        }
        return function(RR, JR) {
          if ("function" !== typeof JR && null !== JR) throw new TypeError("Super expression must either be null or a function");
          RR.prototype = Object.create(JR && JR.prototype, {
            constructor: {
              value: RR,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(RR, "prototype", {
            writable: !1
          }), JR && NR(RR, JR)
        }(JR, RR), GR = JR, (tR = [{
          key: "updateBBox",
          value: function() {
            if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
              var RR = this.wrapperNode.getBoundingClientRect();
              (Math.abs(RR.width - this.state.lastBoundingBox.width) > 1 || Math.abs(RR.height - this.state.lastBoundingBox.height) > 1) && this.setState({
                lastBoundingBox: {
                  width: RR.width,
                  height: RR.height
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
            var RR, JR;
            this.props.active && this.updateBBox(), this.state.dismissed && ((null === (RR = this.props.coordinate) || void 0 === RR ? void 0 : RR.x) === this.state.dismissedAtCoordinate.x && (null === (JR = this.props.coordinate) || void 0 === JR ? void 0 : JR.y) === this.state.dismissedAtCoordinate.y || (this.state.dismissed = !1))
          }
        }, {
          key: "render",
          value: function() {
            var RR = this,
              JR = this.props,
              GR = JR.active,
              tR = JR.allowEscapeViewBox,
              uR = JR.animationDuration,
              ZR = JR.animationEasing,
              qR = JR.children,
              iR = JR.coordinate,
              fR = JR.hasPayload,
              VR = JR.isAnimationActive,
              KR = JR.offset,
              wR = JR.position,
              rR = JR.reverseDirection,
              eR = JR.useTranslate3d,
              aR = JR.viewBox,
              LR = JR.wrapperStyle,
              nR = function(RR) {
                var JR, GR, yR = RR.allowEscapeViewBox,
                  tR = RR.coordinate,
                  uR = RR.offsetTopLeft,
                  ZR = RR.position,
                  qR = RR.reverseDirection,
                  iR = RR.tooltipBox,
                  fR = RR.useTranslate3d,
                  VR = RR.viewBox;
                return {
                  cssProperties: iR.height > 0 && iR.width > 0 && tR ? function(RR) {
                    var JR = RR.translateX,
                      GR = RR.translateY;
                    return {
                      transform: RR.useTranslate3d ? "translate3d(".concat(JR, "px, ").concat(GR, "px, 0)") : "translate(".concat(JR, "px, ").concat(GR, "px)")
                    }
                  }({
                    translateX: JR = BR({
                      allowEscapeViewBox: yR,
                      coordinate: tR,
                      key: "x",
                      offsetTopLeft: uR,
                      position: ZR,
                      reverseDirection: qR,
                      tooltipDimension: iR.width,
                      viewBox: VR,
                      viewBoxDimension: VR.width
                    }),
                    translateY: GR = BR({
                      allowEscapeViewBox: yR,
                      coordinate: tR,
                      key: "y",
                      offsetTopLeft: uR,
                      position: ZR,
                      reverseDirection: qR,
                      tooltipDimension: iR.height,
                      viewBox: VR,
                      viewBoxDimension: VR.height
                    }),
                    useTranslate3d: fR
                  }) : XR,
                  cssClasses: MR({
                    translateX: JR,
                    translateY: GR,
                    coordinate: tR
                  })
                }
              }({
                allowEscapeViewBox: tR,
                coordinate: iR,
                offsetTopLeft: KR,
                position: wR,
                reverseDirection: rR,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: eR,
                viewBox: aR
              }),
              UR = nR.cssClasses,
              WR = nR.cssProperties,
              AR = gR(gR({
                transition: VR && GR ? "transform ".concat(uR, "ms ").concat(ZR) : void 0
              }, WR), {}, {
                pointerEvents: "none",
                visibility: !this.state.dismissed && GR && fR ? "visible" : "hidden",
                position: "absolute",
                top: 0,
                left: 0
              }, LR);
            return yR.createElement("div", {
              tabIndex: -1,
              className: UR,
              style: AR,
              ref: function(JR) {
                RR.wrapperNode = JR
              }
            }, qR)
          }
        }]) && bR(GR.prototype, tR), uR && bR(GR, uR), Object.defineProperty(GR, "prototype", {
          writable: !1
        }), GR;
        var GR, tR, uR
      }(yR.PureComponent),
      cR = GR(7047),
      PR = GR(7049);

    function IR(RR) {
      return IR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, IR(RR)
    }

    function mR(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function zR(RR) {
      for (var JR = 1; JR < arguments.length; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? mR(Object(GR), !0).forEach((function(JR) {
          kR(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : mR(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }

    function SR(RR, JR) {
      for (var GR = 0; GR < JR.length; GR++) {
        var yR = JR[GR];
        yR.enumerable = yR.enumerable || !1, yR.configurable = !0, "value" in yR && (yR.writable = !0), Object.defineProperty(RR, QR(yR.key), yR)
      }
    }

    function jR(RR, JR, GR) {
      return JR = ER(JR),
        function(RR, JR) {
          if (JR && ("object" === IR(JR) || "function" === typeof JR)) return JR;
          if (void 0 !== JR) throw new TypeError("Derived constructors may only return object or undefined");
          return function(RR) {
            if (void 0 === RR) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return RR
          }(RR)
        }(RR, dR() ? Reflect.construct(JR, GR || [], ER(RR).constructor) : JR.apply(RR, GR))
    }

    function dR() {
      try {
        var RR = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (RR) {}
      return (dR = function() {
        return !!RR
      })()
    }

    function ER(RR) {
      return ER = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(RR) {
        return RR.__proto__ || Object.getPrototypeOf(RR)
      }, ER(RR)
    }

    function YR(RR, JR) {
      return YR = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(RR, JR) {
        return RR.__proto__ = JR, RR
      }, YR(RR, JR)
    }

    function kR(RR, JR, GR) {
      return (JR = QR(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }

    function QR(RR) {
      var JR = function(RR, JR) {
        if ("object" != IR(RR) || !RR) return RR;
        var GR = RR[Symbol.toPrimitive];
        if (void 0 !== GR) {
          var yR = GR.call(RR, JR || "default");
          if ("object" != IR(yR)) return yR;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === JR ? String : Number)(RR)
      }(RR, "string");
      return "symbol" == IR(JR) ? JR : JR + ""
    }

    function FR(RR) {
      return RR.dataKey
    }
    var TR = function(RR) {
      function JR() {
        return function(RR, JR) {
          if (!(RR instanceof JR)) throw new TypeError("Cannot call a class as a function")
        }(this, JR), jR(this, JR, arguments)
      }
      return function(RR, JR) {
        if ("function" !== typeof JR && null !== JR) throw new TypeError("Super expression must either be null or a function");
        RR.prototype = Object.create(JR && JR.prototype, {
          constructor: {
            value: RR,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(RR, "prototype", {
          writable: !1
        }), JR && YR(RR, JR)
      }(JR, RR), GR = JR, (tR = [{
        key: "render",
        value: function() {
          var RR = this,
            JR = this.props,
            GR = JR.active,
            tR = JR.allowEscapeViewBox,
            uR = JR.animationDuration,
            ZR = JR.animationEasing,
            qR = JR.content,
            iR = JR.coordinate,
            fR = JR.filterNull,
            VR = JR.isAnimationActive,
            KR = JR.offset,
            wR = JR.payload,
            rR = JR.payloadUniqBy,
            eR = JR.position,
            aR = JR.reverseDirection,
            LR = JR.useTranslate3d,
            nR = JR.viewBox,
            WR = JR.wrapperStyle,
            AR = null !== wR && void 0 !== wR ? wR : [];
          fR && AR.length && (AR = (0, PR.d)(wR.filter((function(JR) {
            return null != JR.value && (!0 !== JR.hide || RR.props.includeHidden)
          })), rR, FR));
          var CR = AR.length > 0;
          return yR.createElement(oR, {
            allowEscapeViewBox: tR,
            animationDuration: uR,
            animationEasing: ZR,
            isAnimationActive: VR,
            active: GR,
            coordinate: iR,
            hasPayload: CR,
            offset: KR,
            position: eR,
            reverseDirection: aR,
            useTranslate3d: LR,
            viewBox: nR,
            wrapperStyle: WR
          }, function(RR, JR) {
            return yR.isValidElement(RR) ? yR.cloneElement(RR, JR) : "function" === typeof RR ? yR.createElement(RR, JR) : yR.createElement(UR, JR)
          }(qR, zR(zR({}, this.props), {}, {
            payload: AR
          })))
        }
      }]) && SR(GR.prototype, tR), uR && SR(GR, uR), Object.defineProperty(GR, "prototype", {
        writable: !1
      }), GR;
      var GR, tR, uR
    }(yR.PureComponent);
    kR(TR, "displayName", "Tooltip"), kR(TR, "defaultProps", {
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
      isAnimationActive: !cR.d.isSsr,
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
  7037: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => fR
    });
    var yR = GR(66),
      tR = GR(6140),
      uR = GR(6523),
      ZR = ["children", "className"];

    function qR() {
      return qR = Object.assign ? Object.assign.bind() : function(RR) {
        for (var JR = 1; JR < arguments.length; JR++) {
          var GR = arguments[JR];
          for (var yR in GR) Object.prototype.hasOwnProperty.call(GR, yR) && (RR[yR] = GR[yR])
        }
        return RR
      }, qR.apply(this, arguments)
    }

    function iR(RR, JR) {
      if (null == RR) return {};
      var GR, yR, tR = function(RR, JR) {
        if (null == RR) return {};
        var GR = {};
        for (var yR in RR)
          if (Object.prototype.hasOwnProperty.call(RR, yR)) {
            if (JR.indexOf(yR) >= 0) continue;
            GR[yR] = RR[yR]
          } return GR
      }(RR, JR);
      if (Object.getOwnPropertySymbols) {
        var uR = Object.getOwnPropertySymbols(RR);
        for (yR = 0; yR < uR.length; yR++) GR = uR[yR], JR.indexOf(GR) >= 0 || Object.prototype.propertyIsEnumerable.call(RR, GR) && (tR[GR] = RR[GR])
      }
      return tR
    }
    var fR = yR.forwardRef((function(RR, JR) {
      var GR = RR.children,
        fR = RR.className,
        VR = iR(RR, ZR),
        KR = (0, tR.c)("recharts-layer", fR);
      return yR.createElement("g", qR({
        className: KR
      }, (0, uR.e)(VR, !0), {
        ref: JR
      }), GR)
    }))
  },
  7031: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => fR
    });
    var yR = GR(66),
      tR = GR(6140),
      uR = GR(6523),
      ZR = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];

    function qR() {
      return qR = Object.assign ? Object.assign.bind() : function(RR) {
        for (var JR = 1; JR < arguments.length; JR++) {
          var GR = arguments[JR];
          for (var yR in GR) Object.prototype.hasOwnProperty.call(GR, yR) && (RR[yR] = GR[yR])
        }
        return RR
      }, qR.apply(this, arguments)
    }

    function iR(RR, JR) {
      if (null == RR) return {};
      var GR, yR, tR = function(RR, JR) {
        if (null == RR) return {};
        var GR = {};
        for (var yR in RR)
          if (Object.prototype.hasOwnProperty.call(RR, yR)) {
            if (JR.indexOf(yR) >= 0) continue;
            GR[yR] = RR[yR]
          } return GR
      }(RR, JR);
      if (Object.getOwnPropertySymbols) {
        var uR = Object.getOwnPropertySymbols(RR);
        for (yR = 0; yR < uR.length; yR++) GR = uR[yR], JR.indexOf(GR) >= 0 || Object.prototype.propertyIsEnumerable.call(RR, GR) && (tR[GR] = RR[GR])
      }
      return tR
    }

    function fR(RR) {
      var JR = RR.children,
        GR = RR.width,
        fR = RR.height,
        VR = RR.viewBox,
        KR = RR.className,
        wR = RR.style,
        rR = RR.title,
        eR = RR.desc,
        aR = iR(RR, ZR),
        LR = VR || {
          width: GR,
          height: fR,
          x: 0,
          y: 0
        },
        nR = (0, tR.c)("recharts-surface", KR);
      return yR.createElement("svg", qR({}, (0, uR.e)(aR, !0, "svg"), {
        className: nR,
        width: GR,
        height: fR,
        style: wR,
        viewBox: "".concat(LR.x, " ").concat(LR.y, " ").concat(LR.width, " ").concat(LR.height)
      }), yR.createElement("title", null, rR), yR.createElement("desc", null, eR), JR)
    }
  },
  7436: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => WR,
      e: () => XR,
      h: () => bR,
      i: () => gR,
      l: () => AR,
      m: () => pR,
      n: () => lR,
      o: () => CR,
      p: () => BR,
      t: () => MR
    });
    var yR = GR(66),
      tR = GR(7026),
      uR = GR(7443),
      ZR = GR.n(uR),
      qR = GR(7339),
      iR = GR.n(qR),
      fR = GR(6301),
      VR = GR.n(fR)()((function(RR) {
        return {
          x: RR.left,
          y: RR.top,
          width: RR.width,
          height: RR.height
        }
      }), (function(RR) {
        return ["l", RR.left, "t", RR.top, "w", RR.width, "h", RR.height].join("")
      })),
      KR = GR(6235);
    var wR = (0, yR.createContext)(void 0),
      rR = (0, yR.createContext)(void 0),
      eR = (0, yR.createContext)(void 0),
      aR = (0, yR.createContext)({}),
      LR = (0, yR.createContext)(void 0),
      nR = (0, yR.createContext)(0),
      UR = (0, yR.createContext)(0),
      WR = function(RR) {
        var JR = RR.state,
          GR = JR.xAxisMap,
          tR = JR.yAxisMap,
          uR = JR.offset,
          ZR = RR.clipPathId,
          qR = RR.children,
          iR = RR.width,
          fR = RR.height,
          KR = VR(uR);
        return yR.createElement(wR.Provider, {
          value: GR
        }, yR.createElement(rR.Provider, {
          value: tR
        }, yR.createElement(aR.Provider, {
          value: uR
        }, yR.createElement(eR.Provider, {
          value: KR
        }, yR.createElement(LR.Provider, {
          value: ZR
        }, yR.createElement(nR.Provider, {
          value: fR
        }, yR.createElement(UR.Provider, {
          value: iR
        }, qR)))))))
      },
      AR = function() {
        return (0, yR.useContext)(LR)
      };
    var CR = function(RR) {
        var JR = (0, yR.useContext)(wR);
        null == JR && (0, tR.e)(!1);
        var GR = JR[RR];
        return null == GR && (0, tR.e)(!1), GR
      },
      XR = function() {
        var RR = (0, yR.useContext)(wR);
        return (0, KR.i)(RR)
      },
      MR = function() {
        var RR = (0, yR.useContext)(rR);
        return ZR()(RR, (function(RR) {
          return iR()(RR.domain, Number.isFinite)
        })) || (0, KR.i)(RR)
      },
      BR = function(RR) {
        var JR = (0, yR.useContext)(rR);
        null == JR && (0, tR.e)(!1);
        var GR = JR[RR];
        return null == GR && (0, tR.e)(!1), GR
      },
      lR = function() {
        return (0, yR.useContext)(eR)
      },
      pR = function() {
        return (0, yR.useContext)(aR)
      },
      gR = function() {
        return (0, yR.useContext)(UR)
      },
      bR = function() {
        return (0, yR.useContext)(nR)
      }
  },
  7471: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => FR
    });
    var yR = GR(66);

    function tR() {}

    function uR(RR, JR, GR) {
      RR._context.bezierCurveTo((2 * RR._x0 + RR._x1) / 3, (2 * RR._y0 + RR._y1) / 3, (RR._x0 + 2 * RR._x1) / 3, (RR._y0 + 2 * RR._y1) / 3, (RR._x0 + 4 * RR._x1 + JR) / 6, (RR._y0 + 4 * RR._y1 + GR) / 6)
    }

    function ZR(RR) {
      this._context = RR
    }

    function qR(RR) {
      this._context = RR
    }

    function iR(RR) {
      this._context = RR
    }
    ZR.prototype = {
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
            uR(this, this._x1, this._y1);
          case 2:
            this._context.lineTo(this._x1, this._y1)
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(RR, JR) {
        switch (RR = +RR, JR = +JR, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(RR, JR) : this._context.moveTo(RR, JR);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
          default:
            uR(this, RR, JR)
        }
        this._x0 = this._x1, this._x1 = RR, this._y0 = this._y1, this._y1 = JR
      }
    }, qR.prototype = {
      areaStart: tR,
      areaEnd: tR,
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
      point: function(RR, JR) {
        switch (RR = +RR, JR = +JR, this._point) {
          case 0:
            this._point = 1, this._x2 = RR, this._y2 = JR;
            break;
          case 1:
            this._point = 2, this._x3 = RR, this._y3 = JR;
            break;
          case 2:
            this._point = 3, this._x4 = RR, this._y4 = JR, this._context.moveTo((this._x0 + 4 * this._x1 + RR) / 6, (this._y0 + 4 * this._y1 + JR) / 6);
            break;
          default:
            uR(this, RR, JR)
        }
        this._x0 = this._x1, this._x1 = RR, this._y0 = this._y1, this._y1 = JR
      }
    }, iR.prototype = {
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
      point: function(RR, JR) {
        switch (RR = +RR, JR = +JR, this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var GR = (this._x0 + 4 * this._x1 + RR) / 6,
              yR = (this._y0 + 4 * this._y1 + JR) / 6;
            this._line ? this._context.lineTo(GR, yR) : this._context.moveTo(GR, yR);
            break;
          case 3:
            this._point = 4;
          default:
            uR(this, RR, JR)
        }
        this._x0 = this._x1, this._x1 = RR, this._y0 = this._y1, this._y1 = JR
      }
    };
    class fR {
      constructor(RR, JR) {
        this._context = RR, this._x = JR
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
      point(RR, JR) {
        switch (RR = +RR, JR = +JR, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(RR, JR) : this._context.moveTo(RR, JR);
            break;
          case 1:
            this._point = 2;
          default:
            this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + RR) / 2, this._y0, this._x0, JR, RR, JR) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + JR) / 2, RR, this._y0, RR, JR)
        }
        this._x0 = RR, this._y0 = JR
      }
    }

    function VR(RR) {
      this._context = RR
    }

    function KR(RR) {
      this._context = RR
    }

    function wR(RR) {
      return new KR(RR)
    }

    function rR(RR) {
      return RR < 0 ? -1 : 1
    }

    function eR(RR, JR, GR) {
      var yR = RR._x1 - RR._x0,
        tR = JR - RR._x1,
        uR = (RR._y1 - RR._y0) / (yR || tR < 0 && -0),
        ZR = (GR - RR._y1) / (tR || yR < 0 && -0),
        qR = (uR * tR + ZR * yR) / (yR + tR);
      return (rR(uR) + rR(ZR)) * Math.min(Math.abs(uR), Math.abs(ZR), .5 * Math.abs(qR)) || 0
    }

    function aR(RR, JR) {
      var GR = RR._x1 - RR._x0;
      return GR ? (3 * (RR._y1 - RR._y0) / GR - JR) / 2 : JR
    }

    function LR(RR, JR, GR) {
      var yR = RR._x0,
        tR = RR._y0,
        uR = RR._x1,
        ZR = RR._y1,
        qR = (uR - yR) / 3;
      RR._context.bezierCurveTo(yR + qR, tR + qR * JR, uR - qR, ZR - qR * GR, uR, ZR)
    }

    function nR(RR) {
      this._context = RR
    }

    function UR(RR) {
      this._context = new WR(RR)
    }

    function WR(RR) {
      this._context = RR
    }

    function AR(RR) {
      this._context = RR
    }

    function CR(RR) {
      var JR, GR, yR = RR.length - 1,
        tR = new Array(yR),
        uR = new Array(yR),
        ZR = new Array(yR);
      for (tR[0] = 0, uR[0] = 2, ZR[0] = RR[0] + 2 * RR[1], JR = 1; JR < yR - 1; ++JR) tR[JR] = 1, uR[JR] = 4, ZR[JR] = 4 * RR[JR] + 2 * RR[JR + 1];
      for (tR[yR - 1] = 2, uR[yR - 1] = 7, ZR[yR - 1] = 8 * RR[yR - 1] + RR[yR], JR = 1; JR < yR; ++JR) GR = tR[JR] / uR[JR - 1], uR[JR] -= GR, ZR[JR] -= GR * ZR[JR - 1];
      for (tR[yR - 1] = ZR[yR - 1] / uR[yR - 1], JR = yR - 2; JR >= 0; --JR) tR[JR] = (ZR[JR] - tR[JR + 1]) / uR[JR];
      for (uR[yR - 1] = (RR[yR] + tR[yR - 1]) / 2, JR = 0; JR < yR - 1; ++JR) uR[JR] = 2 * RR[JR + 1] - tR[JR + 1];
      return [tR, uR]
    }

    function XR(RR, JR) {
      this._context = RR, this._t = JR
    }
    VR.prototype = {
      areaStart: tR,
      areaEnd: tR,
      lineStart: function() {
        this._point = 0
      },
      lineEnd: function() {
        this._point && this._context.closePath()
      },
      point: function(RR, JR) {
        RR = +RR, JR = +JR, this._point ? this._context.lineTo(RR, JR) : (this._point = 1, this._context.moveTo(RR, JR))
      }
    }, KR.prototype = {
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
      point: function(RR, JR) {
        switch (RR = +RR, JR = +JR, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(RR, JR) : this._context.moveTo(RR, JR);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(RR, JR)
        }
      }
    }, nR.prototype = {
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
            LR(this, this._t0, aR(this, this._t0))
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(RR, JR) {
        var GR = NaN;
        if (JR = +JR, (RR = +RR) !== this._x1 || JR !== this._y1) {
          switch (this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(RR, JR) : this._context.moveTo(RR, JR);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3, LR(this, aR(this, GR = eR(this, RR, JR)), GR);
              break;
            default:
              LR(this, this._t0, GR = eR(this, RR, JR))
          }
          this._x0 = this._x1, this._x1 = RR, this._y0 = this._y1, this._y1 = JR, this._t0 = GR
        }
      }
    }, (UR.prototype = Object.create(nR.prototype)).point = function(RR, JR) {
      nR.prototype.point.call(this, JR, RR)
    }, WR.prototype = {
      moveTo: function(RR, JR) {
        this._context.moveTo(JR, RR)
      },
      closePath: function() {
        this._context.closePath()
      },
      lineTo: function(RR, JR) {
        this._context.lineTo(JR, RR)
      },
      bezierCurveTo: function(RR, JR, GR, yR, tR, uR) {
        this._context.bezierCurveTo(JR, RR, yR, GR, uR, tR)
      }
    }, AR.prototype = {
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
        var RR = this._x,
          JR = this._y,
          GR = RR.length;
        if (GR)
          if (this._line ? this._context.lineTo(RR[0], JR[0]) : this._context.moveTo(RR[0], JR[0]), 2 === GR) this._context.lineTo(RR[1], JR[1]);
          else
            for (var yR = CR(RR), tR = CR(JR), uR = 0, ZR = 1; ZR < GR; ++uR, ++ZR) this._context.bezierCurveTo(yR[0][uR], tR[0][uR], yR[1][uR], tR[1][uR], RR[ZR], JR[ZR]);
        (this._line || 0 !== this._line && 1 === GR) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
      },
      point: function(RR, JR) {
        this._x.push(+RR), this._y.push(+JR)
      }
    }, XR.prototype = {
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
      point: function(RR, JR) {
        switch (RR = +RR, JR = +JR, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(RR, JR) : this._context.moveTo(RR, JR);
            break;
          case 1:
            this._point = 2;
          default:
            if (this._t <= 0) this._context.lineTo(this._x, JR), this._context.lineTo(RR, JR);
            else {
              var GR = this._x * (1 - this._t) + RR * this._t;
              this._context.lineTo(GR, this._y), this._context.lineTo(GR, JR)
            }
        }
        this._x = RR, this._y = JR
      }
    };
    var MR = GR(7294),
      BR = GR(7159),
      lR = GR(7168);

    function pR(RR) {
      return RR[0]
    }

    function gR(RR) {
      return RR[1]
    }

    function bR(RR, JR) {
      var GR = (0, BR.d)(!0),
        yR = null,
        tR = wR,
        uR = null,
        ZR = (0, lR.d)(qR);

      function qR(qR) {
        var iR, fR, VR, KR = (qR = (0, MR.d)(qR)).length,
          wR = !1;
        for (null == yR && (uR = tR(VR = ZR())), iR = 0; iR <= KR; ++iR) !(iR < KR && GR(fR = qR[iR], iR, qR)) === wR && ((wR = !wR) ? uR.lineStart() : uR.lineEnd()), wR && uR.point(+RR(fR, iR, qR), +JR(fR, iR, qR));
        if (VR) return uR = null, VR + "" || null
      }
      return RR = "function" === typeof RR ? RR : void 0 === RR ? pR : (0, BR.d)(RR), JR = "function" === typeof JR ? JR : void 0 === JR ? gR : (0, BR.d)(JR), qR.x = function(JR) {
        return arguments.length ? (RR = "function" === typeof JR ? JR : (0, BR.d)(+JR), qR) : RR
      }, qR.y = function(RR) {
        return arguments.length ? (JR = "function" === typeof RR ? RR : (0, BR.d)(+RR), qR) : JR
      }, qR.defined = function(RR) {
        return arguments.length ? (GR = "function" === typeof RR ? RR : (0, BR.d)(!!RR), qR) : GR
      }, qR.curve = function(RR) {
        return arguments.length ? (tR = RR, null != yR && (uR = tR(yR)), qR) : tR
      }, qR.context = function(RR) {
        return arguments.length ? (null == RR ? yR = uR = null : uR = tR(yR = RR), qR) : yR
      }, qR
    }

    function vR(RR, JR, GR) {
      var yR = null,
        tR = (0, BR.d)(!0),
        uR = null,
        ZR = wR,
        qR = null,
        iR = (0, lR.d)(fR);

      function fR(fR) {
        var VR, KR, wR, rR, eR, aR = (fR = (0, MR.d)(fR)).length,
          LR = !1,
          nR = new Array(aR),
          UR = new Array(aR);
        for (null == uR && (qR = ZR(eR = iR())), VR = 0; VR <= aR; ++VR) {
          if (!(VR < aR && tR(rR = fR[VR], VR, fR)) === LR)
            if (LR = !LR) KR = VR, qR.areaStart(), qR.lineStart();
            else {
              for (qR.lineEnd(), qR.lineStart(), wR = VR - 1; wR >= KR; --wR) qR.point(nR[wR], UR[wR]);
              qR.lineEnd(), qR.areaEnd()
            } LR && (nR[VR] = +RR(rR, VR, fR), UR[VR] = +JR(rR, VR, fR), qR.point(yR ? +yR(rR, VR, fR) : nR[VR], GR ? +GR(rR, VR, fR) : UR[VR]))
        }
        if (eR) return qR = null, eR + "" || null
      }

      function VR() {
        return bR().defined(tR).curve(ZR).context(uR)
      }
      return RR = "function" === typeof RR ? RR : void 0 === RR ? pR : (0, BR.d)(+RR), JR = "function" === typeof JR ? JR : void 0 === JR ? (0, BR.d)(0) : (0, BR.d)(+JR), GR = "function" === typeof GR ? GR : void 0 === GR ? gR : (0, BR.d)(+GR), fR.x = function(JR) {
        return arguments.length ? (RR = "function" === typeof JR ? JR : (0, BR.d)(+JR), yR = null, fR) : RR
      }, fR.x0 = function(JR) {
        return arguments.length ? (RR = "function" === typeof JR ? JR : (0, BR.d)(+JR), fR) : RR
      }, fR.x1 = function(RR) {
        return arguments.length ? (yR = null == RR ? null : "function" === typeof RR ? RR : (0, BR.d)(+RR), fR) : yR
      }, fR.y = function(RR) {
        return arguments.length ? (JR = "function" === typeof RR ? RR : (0, BR.d)(+RR), GR = null, fR) : JR
      }, fR.y0 = function(RR) {
        return arguments.length ? (JR = "function" === typeof RR ? RR : (0, BR.d)(+RR), fR) : JR
      }, fR.y1 = function(RR) {
        return arguments.length ? (GR = null == RR ? null : "function" === typeof RR ? RR : (0, BR.d)(+RR), fR) : GR
      }, fR.lineX0 = fR.lineY0 = function() {
        return VR().x(RR).y(JR)
      }, fR.lineY1 = function() {
        return VR().x(RR).y(GR)
      }, fR.lineX1 = function() {
        return VR().x(yR).y(JR)
      }, fR.defined = function(RR) {
        return arguments.length ? (tR = "function" === typeof RR ? RR : (0, BR.d)(!!RR), fR) : tR
      }, fR.curve = function(RR) {
        return arguments.length ? (ZR = RR, null != uR && (qR = ZR(uR)), fR) : ZR
      }, fR.context = function(RR) {
        return arguments.length ? (null == RR ? uR = qR = null : qR = ZR(uR = RR), fR) : uR
      }, fR
    }
    var OR = GR(7113),
      xR = GR.n(OR),
      NR = GR(6357),
      DR = GR.n(NR),
      HR = GR(6140),
      oR = GR(6542),
      cR = GR(6523),
      PR = GR(6235);

    function IR(RR) {
      return IR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, IR(RR)
    }

    function mR() {
      return mR = Object.assign ? Object.assign.bind() : function(RR) {
        for (var JR = 1; JR < arguments.length; JR++) {
          var GR = arguments[JR];
          for (var yR in GR) Object.prototype.hasOwnProperty.call(GR, yR) && (RR[yR] = GR[yR])
        }
        return RR
      }, mR.apply(this, arguments)
    }

    function zR(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function SR(RR) {
      for (var JR = 1; JR < arguments.length; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? zR(Object(GR), !0).forEach((function(JR) {
          jR(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : zR(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }

    function jR(RR, JR, GR) {
      return (JR = function(RR) {
        var JR = function(RR, JR) {
          if ("object" != IR(RR) || !RR) return RR;
          var GR = RR[Symbol.toPrimitive];
          if (void 0 !== GR) {
            var yR = GR.call(RR, JR || "default");
            if ("object" != IR(yR)) return yR;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === JR ? String : Number)(RR)
        }(RR, "string");
        return "symbol" == IR(JR) ? JR : JR + ""
      }(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }
    var dR = {
        curveBasisClosed: function(RR) {
          return new qR(RR)
        },
        curveBasisOpen: function(RR) {
          return new iR(RR)
        },
        curveBasis: function(RR) {
          return new ZR(RR)
        },
        curveBumpX: function(RR) {
          return new fR(RR, !0)
        },
        curveBumpY: function(RR) {
          return new fR(RR, !1)
        },
        curveLinearClosed: function(RR) {
          return new VR(RR)
        },
        curveLinear: wR,
        curveMonotoneX: function(RR) {
          return new nR(RR)
        },
        curveMonotoneY: function(RR) {
          return new UR(RR)
        },
        curveNatural: function(RR) {
          return new AR(RR)
        },
        curveStep: function(RR) {
          return new XR(RR, .5)
        },
        curveStepAfter: function(RR) {
          return new XR(RR, 1)
        },
        curveStepBefore: function(RR) {
          return new XR(RR, 0)
        }
      },
      ER = function(RR) {
        return RR.x === +RR.x && RR.y === +RR.y
      },
      YR = function(RR) {
        return RR.x
      },
      kR = function(RR) {
        return RR.y
      },
      QR = function(RR) {
        var JR, GR = RR.type,
          yR = void 0 === GR ? "linear" : GR,
          tR = RR.points,
          uR = void 0 === tR ? [] : tR,
          ZR = RR.baseLine,
          qR = RR.layout,
          iR = RR.connectNulls,
          fR = void 0 !== iR && iR,
          VR = function(RR, JR) {
            if (DR()(RR)) return RR;
            var GR = "curve".concat(xR()(RR));
            return "curveMonotone" !== GR && "curveBump" !== GR || !JR ? dR[GR] || wR : dR["".concat(GR).concat("vertical" === JR ? "Y" : "X")]
          }(yR, qR),
          KR = fR ? uR.filter((function(RR) {
            return ER(RR)
          })) : uR;
        if (Array.isArray(ZR)) {
          var rR = fR ? ZR.filter((function(RR) {
              return ER(RR)
            })) : ZR,
            eR = KR.map((function(RR, JR) {
              return SR(SR({}, RR), {}, {
                base: rR[JR]
              })
            }));
          return (JR = "vertical" === qR ? vR().y(kR).x1(YR).x0((function(RR) {
            return RR.base.x
          })) : vR().x(YR).y1(kR).y0((function(RR) {
            return RR.base.y
          }))).defined(ER).curve(VR), JR(eR)
        }
        return (JR = "vertical" === qR && (0, PR.C)(ZR) ? vR().y(kR).x1(YR).x0(ZR) : (0, PR.C)(ZR) ? vR().x(YR).y1(kR).y0(ZR) : bR().x(YR).y(kR)).defined(ER).curve(VR), JR(KR)
      },
      FR = function(RR) {
        var JR = RR.className,
          GR = RR.points,
          tR = RR.path,
          uR = RR.pathRef;
        if ((!GR || !GR.length) && !tR) return null;
        var ZR = GR && GR.length ? QR(RR) : tR;
        return yR.createElement("path", mR({}, (0, cR.e)(RR, !1), (0, oR.f)(RR), {
          className: (0, HR.c)("recharts-curve", JR),
          d: ZR,
          ref: uR
        }))
      }
  },
  7172: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => iR
    });
    var yR = GR(66),
      tR = GR(6140),
      uR = GR(6542),
      ZR = GR(6523);

    function qR() {
      return qR = Object.assign ? Object.assign.bind() : function(RR) {
        for (var JR = 1; JR < arguments.length; JR++) {
          var GR = arguments[JR];
          for (var yR in GR) Object.prototype.hasOwnProperty.call(GR, yR) && (RR[yR] = GR[yR])
        }
        return RR
      }, qR.apply(this, arguments)
    }
    var iR = function(RR) {
      var JR = RR.cx,
        GR = RR.cy,
        iR = RR.r,
        fR = RR.className,
        VR = (0, tR.c)("recharts-dot", fR);
      return JR === +JR && GR === +GR && iR === +iR ? yR.createElement("circle", qR({}, (0, ZR.e)(RR, !1), (0, uR.f)(RR), {
        className: VR,
        cx: JR,
        cy: GR,
        r: iR
      })) : null
    }
  },
  7177: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => nR,
      f: () => aR
    });
    var yR = GR(66),
      tR = GR(6140),
      uR = GR(7179),
      ZR = GR(6523);

    function qR(RR) {
      return qR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, qR(RR)
    }

    function iR() {
      return iR = Object.assign ? Object.assign.bind() : function(RR) {
        for (var JR = 1; JR < arguments.length; JR++) {
          var GR = arguments[JR];
          for (var yR in GR) Object.prototype.hasOwnProperty.call(GR, yR) && (RR[yR] = GR[yR])
        }
        return RR
      }, iR.apply(this, arguments)
    }

    function fR(RR, JR) {
      return function(RR) {
        if (Array.isArray(RR)) return RR
      }(RR) || function(RR, JR) {
        var GR = null == RR ? null : "undefined" != typeof Symbol && RR[Symbol.iterator] || RR["@@iterator"];
        if (null != GR) {
          var yR, tR, uR, ZR, qR = [],
            iR = !0,
            fR = !1;
          try {
            if (uR = (GR = GR.call(RR)).next, 0 === JR) {
              if (Object(GR) !== GR) return;
              iR = !1
            } else
              for (; !(iR = (yR = uR.call(GR)).done) && (qR.push(yR.value), qR.length !== JR); iR = !0);
          } catch (RR) {
            fR = !0, tR = RR
          } finally {
            try {
              if (!iR && null != GR.return && (ZR = GR.return(), Object(ZR) !== ZR)) return
            } finally {
              if (fR) throw tR
            }
          }
          return qR
        }
      }(RR, JR) || function(RR, JR) {
        if (!RR) return;
        if ("string" === typeof RR) return VR(RR, JR);
        var GR = Object.prototype.toString.call(RR).slice(8, -1);
        "Object" === GR && RR.constructor && (GR = RR.constructor.name);
        if ("Map" === GR || "Set" === GR) return Array.from(RR);
        if ("Arguments" === GR || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GR)) return VR(RR, JR)
      }(RR, JR) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function VR(RR, JR) {
      (null == JR || JR > RR.length) && (JR = RR.length);
      for (var GR = 0, yR = new Array(JR); GR < JR; GR++) yR[GR] = RR[GR];
      return yR
    }

    function KR(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function wR(RR) {
      for (var JR = 1; JR < arguments.length; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? KR(Object(GR), !0).forEach((function(JR) {
          rR(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : KR(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }

    function rR(RR, JR, GR) {
      return (JR = function(RR) {
        var JR = function(RR, JR) {
          if ("object" != qR(RR) || !RR) return RR;
          var GR = RR[Symbol.toPrimitive];
          if (void 0 !== GR) {
            var yR = GR.call(RR, JR || "default");
            if ("object" != qR(yR)) return yR;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === JR ? String : Number)(RR)
        }(RR, "string");
        return "symbol" == qR(JR) ? JR : JR + ""
      }(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }
    var eR = function(RR, JR, GR, yR, tR) {
        var uR, ZR = Math.min(Math.abs(GR) / 2, Math.abs(yR) / 2),
          qR = yR >= 0 ? 1 : -1,
          iR = GR >= 0 ? 1 : -1,
          fR = yR >= 0 && GR >= 0 || yR < 0 && GR < 0 ? 1 : 0;
        if (ZR > 0 && tR instanceof Array) {
          for (var VR = [0, 0, 0, 0], KR = 0; KR < 4; KR++) VR[KR] = tR[KR] > ZR ? ZR : tR[KR];
          uR = "M".concat(RR, ",").concat(JR + qR * VR[0]), VR[0] > 0 && (uR += "A ".concat(VR[0], ",").concat(VR[0], ",0,0,").concat(fR, ",").concat(RR + iR * VR[0], ",").concat(JR)), uR += "L ".concat(RR + GR - iR * VR[1], ",").concat(JR), VR[1] > 0 && (uR += "A ".concat(VR[1], ",").concat(VR[1], ",0,0,").concat(fR, ",\n        ").concat(RR + GR, ",").concat(JR + qR * VR[1])), uR += "L ".concat(RR + GR, ",").concat(JR + yR - qR * VR[2]), VR[2] > 0 && (uR += "A ".concat(VR[2], ",").concat(VR[2], ",0,0,").concat(fR, ",\n        ").concat(RR + GR - iR * VR[2], ",").concat(JR + yR)), uR += "L ".concat(RR + iR * VR[3], ",").concat(JR + yR), VR[3] > 0 && (uR += "A ".concat(VR[3], ",").concat(VR[3], ",0,0,").concat(fR, ",\n        ").concat(RR, ",").concat(JR + yR - qR * VR[3])), uR += "Z"
        } else if (ZR > 0 && tR === +tR && tR > 0) {
          var wR = Math.min(ZR, tR);
          uR = "M ".concat(RR, ",").concat(JR + qR * wR, "\n            A ").concat(wR, ",").concat(wR, ",0,0,").concat(fR, ",").concat(RR + iR * wR, ",").concat(JR, "\n            L ").concat(RR + GR - iR * wR, ",").concat(JR, "\n            A ").concat(wR, ",").concat(wR, ",0,0,").concat(fR, ",").concat(RR + GR, ",").concat(JR + qR * wR, "\n            L ").concat(RR + GR, ",").concat(JR + yR - qR * wR, "\n            A ").concat(wR, ",").concat(wR, ",0,0,").concat(fR, ",").concat(RR + GR - iR * wR, ",").concat(JR + yR, "\n            L ").concat(RR + iR * wR, ",").concat(JR + yR, "\n            A ").concat(wR, ",").concat(wR, ",0,0,").concat(fR, ",").concat(RR, ",").concat(JR + yR - qR * wR, " Z")
        } else uR = "M ".concat(RR, ",").concat(JR, " h ").concat(GR, " v ").concat(yR, " h ").concat(-GR, " Z");
        return uR
      },
      aR = function(RR, JR) {
        if (!RR || !JR) return !1;
        var GR = RR.x,
          yR = RR.y,
          tR = JR.x,
          uR = JR.y,
          ZR = JR.width,
          qR = JR.height;
        if (Math.abs(ZR) > 0 && Math.abs(qR) > 0) {
          var iR = Math.min(tR, tR + ZR),
            fR = Math.max(tR, tR + ZR),
            VR = Math.min(uR, uR + qR),
            KR = Math.max(uR, uR + qR);
          return GR >= iR && GR <= fR && yR >= VR && yR <= KR
        }
        return !1
      },
      LR = {
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
      nR = function(RR) {
        var JR = wR(wR({}, LR), RR),
          GR = (0, yR.useRef)(),
          qR = fR((0, yR.useState)(-1), 2),
          VR = qR[0],
          KR = qR[1];
        (0, yR.useEffect)((function() {
          if (GR.current && GR.current.getTotalLength) try {
            var RR = GR.current.getTotalLength();
            RR && KR(RR)
          } catch (JR) {}
        }), []);
        var rR = JR.x,
          aR = JR.y,
          nR = JR.width,
          UR = JR.height,
          WR = JR.radius,
          AR = JR.className,
          CR = JR.animationEasing,
          XR = JR.animationDuration,
          MR = JR.animationBegin,
          BR = JR.isAnimationActive,
          lR = JR.isUpdateAnimationActive;
        if (rR !== +rR || aR !== +aR || nR !== +nR || UR !== +UR || 0 === nR || 0 === UR) return null;
        var pR = (0, tR.c)("recharts-rectangle", AR);
        return lR ? yR.createElement(uR.b, {
          canBegin: VR > 0,
          from: {
            width: nR,
            height: UR,
            x: rR,
            y: aR
          },
          to: {
            width: nR,
            height: UR,
            x: rR,
            y: aR
          },
          duration: XR,
          animationEasing: CR,
          isActive: lR
        }, (function(RR) {
          var tR = RR.width,
            qR = RR.height,
            fR = RR.x,
            KR = RR.y;
          return yR.createElement(uR.b, {
            canBegin: VR > 0,
            from: "0px ".concat(-1 === VR ? 1 : VR, "px"),
            to: "".concat(VR, "px 0px"),
            attributeName: "strokeDasharray",
            UK: MR,
            duration: XR,
            isActive: BR,
            easing: CR
          }, yR.createElement("path", iR({}, (0, ZR.e)(JR, !0), {
            className: pR,
            d: eR(fR, KR, tR, qR, WR),
            ref: GR
          })))
        })) : yR.createElement("path", iR({}, (0, ZR.e)(JR, !0), {
          className: pR,
          d: eR(rR, aR, nR, UR, WR)
        }))
      }
  },
  7406: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => LR
    });
    var yR = GR(66),
      tR = GR(6140),
      uR = GR(6523),
      ZR = GR(7309),
      qR = GR(6235);

    function iR(RR) {
      return iR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, iR(RR)
    }

    function fR() {
      return fR = Object.assign ? Object.assign.bind() : function(RR) {
        for (var JR = 1; JR < arguments.length; JR++) {
          var GR = arguments[JR];
          for (var yR in GR) Object.prototype.hasOwnProperty.call(GR, yR) && (RR[yR] = GR[yR])
        }
        return RR
      }, fR.apply(this, arguments)
    }

    function VR(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function KR(RR) {
      for (var JR = 1; JR < arguments.length; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? VR(Object(GR), !0).forEach((function(JR) {
          wR(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : VR(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }

    function wR(RR, JR, GR) {
      return (JR = function(RR) {
        var JR = function(RR, JR) {
          if ("object" != iR(RR) || !RR) return RR;
          var GR = RR[Symbol.toPrimitive];
          if (void 0 !== GR) {
            var yR = GR.call(RR, JR || "default");
            if ("object" != iR(yR)) return yR;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === JR ? String : Number)(RR)
        }(RR, "string");
        return "symbol" == iR(JR) ? JR : JR + ""
      }(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }
    var rR = function(RR) {
        var JR = RR.cx,
          GR = RR.cy,
          yR = RR.radius,
          tR = RR.angle,
          uR = RR.sign,
          qR = RR.isExternal,
          iR = RR.cornerRadius,
          fR = RR.cornerIsExternal,
          VR = iR * (qR ? 1 : -1) + yR,
          KR = Math.asin(iR / VR) / ZR.b,
          wR = fR ? tR : tR + uR * KR,
          rR = fR ? tR - uR * KR : tR;
        return {
          center: (0, ZR.g)(JR, GR, VR, wR),
          circleTangency: (0, ZR.g)(JR, GR, yR, wR),
          lineTangency: (0, ZR.g)(JR, GR, VR * Math.cos(KR * ZR.b), rR),
          ZK: KR
        }
      },
      eR = function(RR) {
        var JR = RR.cx,
          GR = RR.cy,
          yR = RR.innerRadius,
          tR = RR.outerRadius,
          uR = RR.startAngle,
          iR = function(RR, JR) {
            return (0, qR.I)(JR - RR) * Math.min(Math.abs(JR - RR), 359.999)
          }(uR, RR.endAngle),
          fR = uR + iR,
          VR = (0, ZR.g)(JR, GR, tR, uR),
          KR = (0, ZR.g)(JR, GR, tR, fR),
          wR = "M ".concat(VR.x, ",").concat(VR.y, "\n    A ").concat(tR, ",").concat(tR, ",0,\n    ").concat(+(Math.abs(iR) > 180), ",").concat(+(uR > fR), ",\n    ").concat(KR.x, ",").concat(KR.y, "\n  ");
        if (yR > 0) {
          var rR = (0, ZR.g)(JR, GR, yR, uR),
            eR = (0, ZR.g)(JR, GR, yR, fR);
          wR += "L ".concat(eR.x, ",").concat(eR.y, "\n            A ").concat(yR, ",").concat(yR, ",0,\n            ").concat(+(Math.abs(iR) > 180), ",").concat(+(uR <= fR), ",\n            ").concat(rR.x, ",").concat(rR.y, " Z")
        } else wR += "L ".concat(JR, ",").concat(GR, " Z");
        return wR
      },
      aR = {
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
      LR = function(RR) {
        var JR = KR(KR({}, aR), RR),
          GR = JR.cx,
          ZR = JR.cy,
          iR = JR.innerRadius,
          VR = JR.outerRadius,
          wR = JR.cornerRadius,
          LR = JR.forceCornerRadius,
          nR = JR.cornerIsExternal,
          UR = JR.startAngle,
          WR = JR.endAngle,
          AR = JR.className;
        if (VR < iR || UR === WR) return null;
        var CR, XR = (0, tR.c)("recharts-sector", AR),
          MR = VR - iR,
          BR = (0, qR.p)(wR, MR, 0, !0);
        return CR = BR > 0 && Math.abs(UR - WR) < 360 ? function(RR) {
          var JR = RR.cx,
            GR = RR.cy,
            yR = RR.innerRadius,
            tR = RR.outerRadius,
            uR = RR.cornerRadius,
            ZR = RR.forceCornerRadius,
            iR = RR.cornerIsExternal,
            fR = RR.startAngle,
            VR = RR.endAngle,
            KR = (0, qR.I)(VR - fR),
            wR = rR({
              cx: JR,
              cy: GR,
              radius: tR,
              angle: fR,
              sign: KR,
              cornerRadius: uR,
              cornerIsExternal: iR
            }),
            aR = wR.circleTangency,
            LR = wR.lineTangency,
            nR = wR.ZK,
            UR = rR({
              cx: JR,
              cy: GR,
              radius: tR,
              angle: VR,
              sign: -KR,
              cornerRadius: uR,
              cornerIsExternal: iR
            }),
            WR = UR.circleTangency,
            AR = UR.lineTangency,
            CR = UR.ZK,
            XR = iR ? Math.abs(fR - VR) : Math.abs(fR - VR) - nR - CR;
          if (XR < 0) return ZR ? "M ".concat(LR.x, ",").concat(LR.y, "\n        a").concat(uR, ",").concat(uR, ",0,0,1,").concat(2 * uR, ",0\n        a").concat(uR, ",").concat(uR, ",0,0,1,").concat(2 * -uR, ",0\n      ") : eR({
            cx: JR,
            cy: GR,
            innerRadius: yR,
            outerRadius: tR,
            startAngle: fR,
            endAngle: VR
          });
          var MR = "M ".concat(LR.x, ",").concat(LR.y, "\n    A").concat(uR, ",").concat(uR, ",0,0,").concat(+(KR < 0), ",").concat(aR.x, ",").concat(aR.y, "\n    A").concat(tR, ",").concat(tR, ",0,").concat(+(XR > 180), ",").concat(+(KR < 0), ",").concat(WR.x, ",").concat(WR.y, "\n    A").concat(uR, ",").concat(uR, ",0,0,").concat(+(KR < 0), ",").concat(AR.x, ",").concat(AR.y, "\n  ");
          if (yR > 0) {
            var BR = rR({
                cx: JR,
                cy: GR,
                radius: yR,
                angle: fR,
                sign: KR,
                isExternal: !0,
                cornerRadius: uR,
                cornerIsExternal: iR
              }),
              lR = BR.circleTangency,
              pR = BR.lineTangency,
              gR = BR.ZK,
              bR = rR({
                cx: JR,
                cy: GR,
                radius: yR,
                angle: VR,
                sign: -KR,
                isExternal: !0,
                cornerRadius: uR,
                cornerIsExternal: iR
              }),
              vR = bR.circleTangency,
              OR = bR.lineTangency,
              xR = bR.ZK,
              NR = iR ? Math.abs(fR - VR) : Math.abs(fR - VR) - gR - xR;
            if (NR < 0 && 0 === uR) return "".concat(MR, "L").concat(JR, ",").concat(GR, "Z");
            MR += "L".concat(OR.x, ",").concat(OR.y, "\n      A").concat(uR, ",").concat(uR, ",0,0,").concat(+(KR < 0), ",").concat(vR.x, ",").concat(vR.y, "\n      A").concat(yR, ",").concat(yR, ",0,").concat(+(NR > 180), ",").concat(+(KR > 0), ",").concat(lR.x, ",").concat(lR.y, "\n      A").concat(uR, ",").concat(uR, ",0,0,").concat(+(KR < 0), ",").concat(pR.x, ",").concat(pR.y, "Z")
          } else MR += "L".concat(JR, ",").concat(GR, "Z");
          return MR
        }({
          cx: GR,
          cy: ZR,
          innerRadius: iR,
          outerRadius: VR,
          cornerRadius: Math.min(BR, MR / 2),
          forceCornerRadius: LR,
          cornerIsExternal: nR,
          startAngle: UR,
          endAngle: WR
        }) : eR({
          cx: GR,
          cy: ZR,
          innerRadius: iR,
          outerRadius: VR,
          startAngle: UR,
          endAngle: WR
        }), yR.createElement("path", fR({}, (0, uR.e)(JR, !0), {
          className: XR,
          d: CR,
          role: "img"
        }))
      }
  },
  7111: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => SR
    });
    var yR = GR(66),
      tR = GR(7113),
      uR = GR.n(tR);
    Math.abs, Math.atan2;
    const ZR = Math.cos,
      qR = (Math.max, Math.min, Math.sin),
      iR = Math.sqrt,
      fR = Math.PI,
      VR = 2 * fR;
    const KR = {
        draw(RR, JR) {
          const GR = iR(JR / fR);
          RR.moveTo(GR, 0), RR.arc(0, 0, GR, 0, VR)
        }
      },
      wR = {
        draw(RR, JR) {
          const GR = iR(JR / 5) / 2;
          RR.moveTo(-3 * GR, -GR), RR.lineTo(-GR, -GR), RR.lineTo(-GR, -3 * GR), RR.lineTo(GR, -3 * GR), RR.lineTo(GR, -GR), RR.lineTo(3 * GR, -GR), RR.lineTo(3 * GR, GR), RR.lineTo(GR, GR), RR.lineTo(GR, 3 * GR), RR.lineTo(-GR, 3 * GR), RR.lineTo(-GR, GR), RR.lineTo(-3 * GR, GR), RR.closePath()
        }
      },
      rR = iR(1 / 3),
      eR = 2 * rR,
      aR = {
        draw(RR, JR) {
          const GR = iR(JR / eR),
            yR = GR * rR;
          RR.moveTo(0, -GR), RR.lineTo(yR, 0), RR.lineTo(0, GR), RR.lineTo(-yR, 0), RR.closePath()
        }
      },
      LR = {
        draw(RR, JR) {
          const GR = iR(JR),
            yR = -GR / 2;
          RR.rect(yR, yR, GR, GR)
        }
      },
      nR = qR(fR / 10) / qR(7 * fR / 10),
      UR = qR(VR / 10) * nR,
      WR = -ZR(VR / 10) * nR,
      AR = {
        draw(RR, JR) {
          const GR = iR(.8908130915292852 * JR),
            yR = UR * GR,
            tR = WR * GR;
          RR.moveTo(0, -GR), RR.lineTo(yR, tR);
          for (let uR = 1; uR < 5; ++uR) {
            const JR = VR * uR / 5,
              iR = ZR(JR),
              fR = qR(JR);
            RR.lineTo(fR * GR, -iR * GR), RR.lineTo(iR * yR - fR * tR, fR * yR + iR * tR)
          }
          RR.closePath()
        }
      },
      CR = iR(3),
      XR = {
        draw(RR, JR) {
          const GR = -iR(JR / (3 * CR));
          RR.moveTo(0, 2 * GR), RR.lineTo(-CR * GR, -GR), RR.lineTo(CR * GR, -GR), RR.closePath()
        }
      },
      MR = -.5,
      BR = iR(3) / 2,
      lR = 1 / iR(12),
      pR = 3 * (lR / 2 + 1),
      gR = {
        draw(RR, JR) {
          const GR = iR(JR / pR),
            yR = GR / 2,
            tR = GR * lR,
            uR = yR,
            ZR = GR * lR + GR,
            qR = -uR,
            fR = ZR;
          RR.moveTo(yR, tR), RR.lineTo(uR, ZR), RR.lineTo(qR, fR), RR.lineTo(MR * yR - BR * tR, BR * yR + MR * tR), RR.lineTo(MR * uR - BR * ZR, BR * uR + MR * ZR), RR.lineTo(MR * qR - BR * fR, BR * qR + MR * fR), RR.lineTo(MR * yR + BR * tR, MR * tR - BR * yR), RR.lineTo(MR * uR + BR * ZR, MR * ZR - BR * uR), RR.lineTo(MR * qR + BR * fR, MR * fR - BR * qR), RR.closePath()
        }
      };
    var bR = GR(7159),
      vR = GR(7168);
    iR(3), iR(3);
    var OR = GR(6140),
      xR = GR(6523);

    function NR(RR) {
      return NR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, NR(RR)
    }
    var DR = ["type", "size", "sizeType"];

    function HR() {
      return HR = Object.assign ? Object.assign.bind() : function(RR) {
        for (var JR = 1; JR < arguments.length; JR++) {
          var GR = arguments[JR];
          for (var yR in GR) Object.prototype.hasOwnProperty.call(GR, yR) && (RR[yR] = GR[yR])
        }
        return RR
      }, HR.apply(this, arguments)
    }

    function oR(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function cR(RR) {
      for (var JR = 1; JR < arguments.length; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? oR(Object(GR), !0).forEach((function(JR) {
          PR(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : oR(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }

    function PR(RR, JR, GR) {
      return (JR = function(RR) {
        var JR = function(RR, JR) {
          if ("object" != NR(RR) || !RR) return RR;
          var GR = RR[Symbol.toPrimitive];
          if (void 0 !== GR) {
            var yR = GR.call(RR, JR || "default");
            if ("object" != NR(yR)) return yR;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === JR ? String : Number)(RR)
        }(RR, "string");
        return "symbol" == NR(JR) ? JR : JR + ""
      }(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }

    function IR(RR, JR) {
      if (null == RR) return {};
      var GR, yR, tR = function(RR, JR) {
        if (null == RR) return {};
        var GR = {};
        for (var yR in RR)
          if (Object.prototype.hasOwnProperty.call(RR, yR)) {
            if (JR.indexOf(yR) >= 0) continue;
            GR[yR] = RR[yR]
          } return GR
      }(RR, JR);
      if (Object.getOwnPropertySymbols) {
        var uR = Object.getOwnPropertySymbols(RR);
        for (yR = 0; yR < uR.length; yR++) GR = uR[yR], JR.indexOf(GR) >= 0 || Object.prototype.propertyIsEnumerable.call(RR, GR) && (tR[GR] = RR[GR])
      }
      return tR
    }
    var mR = {
        symbolCircle: KR,
        symbolCross: wR,
        symbolDiamond: aR,
        symbolSquare: LR,
        symbolStar: AR,
        symbolTriangle: XR,
        symbolWye: gR
      },
      zR = Math.PI / 180,
      SR = function(RR) {
        var JR = RR.type,
          GR = void 0 === JR ? "circle" : JR,
          tR = RR.size,
          ZR = void 0 === tR ? 64 : tR,
          qR = RR.sizeType,
          iR = void 0 === qR ? "area" : qR,
          fR = cR(cR({}, IR(RR, DR)), {}, {
            type: GR,
            size: ZR,
            sizeType: iR
          }),
          VR = fR.className,
          wR = fR.cx,
          rR = fR.cy,
          eR = (0, xR.e)(fR, !0);
        return wR === +wR && rR === +rR && ZR === +ZR ? yR.createElement("path", HR({}, eR, {
          className: (0, OR.c)("recharts-symbols", VR),
          transform: "translate(".concat(wR, ", ").concat(rR, ")"),
          d: function() {
            var RR = function(RR) {
                var JR = "symbol".concat(uR()(RR));
                return mR[JR] || KR
              }(GR),
              JR = function(RR, JR) {
                let GR = null,
                  yR = (0, vR.d)(tR);

                function tR() {
                  let tR;
                  if (GR || (GR = tR = yR()), RR.apply(this, arguments).draw(GR, +JR.apply(this, arguments)), tR) return GR = null, tR + "" || null
                }
                return RR = "function" === typeof RR ? RR : (0, bR.d)(RR || KR), JR = "function" === typeof JR ? JR : (0, bR.d)(void 0 === JR ? 64 : +JR), tR.type = function(JR) {
                  return arguments.length ? (RR = "function" === typeof JR ? JR : (0, bR.d)(JR), tR) : RR
                }, tR.size = function(RR) {
                  return arguments.length ? (JR = "function" === typeof RR ? RR : (0, bR.d)(+RR), tR) : JR
                }, tR.context = function(RR) {
                  return arguments.length ? (GR = null == RR ? null : RR, tR) : GR
                }, tR
              }().type(RR).size(function(RR, JR, GR) {
                if ("area" === JR) return RR;
                switch (GR) {
                  case "cross":
                    return 5 * RR * RR / 9;
                  case "diamond":
                    return .5 * RR * RR / Math.sqrt(3);
                  case "square":
                    return RR * RR;
                  case "star":
                    var yR = 18 * zR;
                    return 1.25 * RR * RR * (Math.tan(yR) - Math.tan(2 * yR) * Math.pow(Math.tan(yR), 2));
                  case "triangle":
                    return Math.sqrt(3) * RR * RR / 4;
                  case "wye":
                    return (21 - 10 * Math.sqrt(3)) * RR * RR / 8;
                  default:
                    return Math.PI * RR * RR / 4
                }
              }(ZR, iR, GR));
            return JR()
          }()
        })) : null
      };
    SR.registerSymbol = function(RR, JR) {
      mR["symbol".concat(uR()(RR))] = JR
    }
  },
  7381: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => PR,
      e: () => ER,
      i: () => IR,
      l: () => mR,
      o: () => zR
    });
    var yR = GR(66),
      tR = GR(6357),
      uR = GR.n(tR),
      ZR = GR(7384),
      qR = GR.n(ZR),
      iR = GR(7398),
      fR = GR.n(iR),
      VR = GR(7269),
      KR = GR.n(VR),
      wR = GR(7177),
      rR = GR(6140),
      eR = GR(7179),
      aR = GR(6523);

    function LR(RR) {
      return LR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, LR(RR)
    }

    function nR() {
      return nR = Object.assign ? Object.assign.bind() : function(RR) {
        for (var JR = 1; JR < arguments.length; JR++) {
          var GR = arguments[JR];
          for (var yR in GR) Object.prototype.hasOwnProperty.call(GR, yR) && (RR[yR] = GR[yR])
        }
        return RR
      }, nR.apply(this, arguments)
    }

    function UR(RR, JR) {
      return function(RR) {
        if (Array.isArray(RR)) return RR
      }(RR) || function(RR, JR) {
        var GR = null == RR ? null : "undefined" != typeof Symbol && RR[Symbol.iterator] || RR["@@iterator"];
        if (null != GR) {
          var yR, tR, uR, ZR, qR = [],
            iR = !0,
            fR = !1;
          try {
            if (uR = (GR = GR.call(RR)).next, 0 === JR) {
              if (Object(GR) !== GR) return;
              iR = !1
            } else
              for (; !(iR = (yR = uR.call(GR)).done) && (qR.push(yR.value), qR.length !== JR); iR = !0);
          } catch (RR) {
            fR = !0, tR = RR
          } finally {
            try {
              if (!iR && null != GR.return && (ZR = GR.return(), Object(ZR) !== ZR)) return
            } finally {
              if (fR) throw tR
            }
          }
          return qR
        }
      }(RR, JR) || function(RR, JR) {
        if (!RR) return;
        if ("string" === typeof RR) return WR(RR, JR);
        var GR = Object.prototype.toString.call(RR).slice(8, -1);
        "Object" === GR && RR.constructor && (GR = RR.constructor.name);
        if ("Map" === GR || "Set" === GR) return Array.from(RR);
        if ("Arguments" === GR || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GR)) return WR(RR, JR)
      }(RR, JR) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function WR(RR, JR) {
      (null == JR || JR > RR.length) && (JR = RR.length);
      for (var GR = 0, yR = new Array(JR); GR < JR; GR++) yR[GR] = RR[GR];
      return yR
    }

    function AR(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function CR(RR) {
      for (var JR = 1; JR < arguments.length; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? AR(Object(GR), !0).forEach((function(JR) {
          XR(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : AR(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }

    function XR(RR, JR, GR) {
      return (JR = function(RR) {
        var JR = function(RR, JR) {
          if ("object" != LR(RR) || !RR) return RR;
          var GR = RR[Symbol.toPrimitive];
          if (void 0 !== GR) {
            var yR = GR.call(RR, JR || "default");
            if ("object" != LR(yR)) return yR;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === JR ? String : Number)(RR)
        }(RR, "string");
        return "symbol" == LR(JR) ? JR : JR + ""
      }(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }
    var MR = function(RR, JR, GR, yR, tR) {
        var uR, ZR = GR - yR;
        return uR = "M ".concat(RR, ",").concat(JR), uR += "L ".concat(RR + GR, ",").concat(JR), uR += "L ".concat(RR + GR - ZR / 2, ",").concat(JR + tR), uR += "L ".concat(RR + GR - ZR / 2 - yR, ",").concat(JR + tR), uR += "L ".concat(RR, ",").concat(JR, " Z")
      },
      BR = {
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
      lR = function(RR) {
        var JR = CR(CR({}, BR), RR),
          GR = (0, yR.useRef)(),
          tR = UR((0, yR.useState)(-1), 2),
          uR = tR[0],
          ZR = tR[1];
        (0, yR.useEffect)((function() {
          if (GR.current && GR.current.getTotalLength) try {
            var RR = GR.current.getTotalLength();
            RR && ZR(RR)
          } catch (JR) {}
        }), []);
        var qR = JR.x,
          iR = JR.y,
          fR = JR.upperWidth,
          VR = JR.lowerWidth,
          KR = JR.height,
          wR = JR.className,
          LR = JR.animationEasing,
          WR = JR.animationDuration,
          AR = JR.animationBegin,
          XR = JR.isUpdateAnimationActive;
        if (qR !== +qR || iR !== +iR || fR !== +fR || VR !== +VR || KR !== +KR || 0 === fR && 0 === VR || 0 === KR) return null;
        var lR = (0, rR.c)("recharts-trapezoid", wR);
        return XR ? yR.createElement(eR.b, {
          canBegin: uR > 0,
          from: {
            upperWidth: 0,
            lowerWidth: 0,
            height: KR,
            x: qR,
            y: iR
          },
          to: {
            upperWidth: fR,
            lowerWidth: VR,
            height: KR,
            x: qR,
            y: iR
          },
          duration: WR,
          animationEasing: LR,
          isActive: XR
        }, (function(RR) {
          var tR = RR.upperWidth,
            ZR = RR.lowerWidth,
            qR = RR.height,
            iR = RR.x,
            fR = RR.y;
          return yR.createElement(eR.b, {
            canBegin: uR > 0,
            from: "0px ".concat(-1 === uR ? 1 : uR, "px"),
            to: "".concat(uR, "px 0px"),
            attributeName: "strokeDasharray",
            UK: AR,
            duration: WR,
            easing: LR
          }, yR.createElement("path", nR({}, (0, aR.e)(JR, !0), {
            className: lR,
            d: MR(iR, fR, tR, ZR, qR),
            ref: GR
          })))
        })) : yR.createElement("g", null, yR.createElement("path", nR({}, (0, aR.e)(JR, !0), {
          className: lR,
          d: MR(qR, iR, fR, VR, KR)
        })))
      },
      pR = GR(7406),
      gR = GR(7037),
      bR = GR(7111),
      vR = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];

    function OR(RR) {
      return OR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, OR(RR)
    }

    function xR(RR, JR) {
      if (null == RR) return {};
      var GR, yR, tR = function(RR, JR) {
        if (null == RR) return {};
        var GR = {};
        for (var yR in RR)
          if (Object.prototype.hasOwnProperty.call(RR, yR)) {
            if (JR.indexOf(yR) >= 0) continue;
            GR[yR] = RR[yR]
          } return GR
      }(RR, JR);
      if (Object.getOwnPropertySymbols) {
        var uR = Object.getOwnPropertySymbols(RR);
        for (yR = 0; yR < uR.length; yR++) GR = uR[yR], JR.indexOf(GR) >= 0 || Object.prototype.propertyIsEnumerable.call(RR, GR) && (tR[GR] = RR[GR])
      }
      return tR
    }

    function NR(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function DR(RR) {
      for (var JR = 1; JR < arguments.length; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? NR(Object(GR), !0).forEach((function(JR) {
          HR(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : NR(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }

    function HR(RR, JR, GR) {
      return (JR = function(RR) {
        var JR = function(RR, JR) {
          if ("object" != OR(RR) || !RR) return RR;
          var GR = RR[Symbol.toPrimitive];
          if (void 0 !== GR) {
            var yR = GR.call(RR, JR || "default");
            if ("object" != OR(yR)) return yR;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === JR ? String : Number)(RR)
        }(RR, "string");
        return "symbol" == OR(JR) ? JR : JR + ""
      }(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }

    function oR(RR, JR) {
      return DR(DR({}, JR), RR)
    }

    function cR(RR) {
      var JR = RR.shapeType,
        GR = RR.elementProps;
      switch (JR) {
        case "rectangle":
          return yR.createElement(wR.c, GR);
        case "trapezoid":
          return yR.createElement(lR, GR);
        case "sector":
          return yR.createElement(pR.c, GR);
        case "symbols":
          if (function(RR) {
              return "symbols" === RR
            }(JR)) return yR.createElement(bR.b, GR);
          break;
        default:
          return null
      }
    }

    function PR(RR) {
      var JR, GR = RR.option,
        tR = RR.shapeType,
        ZR = RR.propTransformer,
        iR = void 0 === ZR ? oR : ZR,
        VR = RR.activeClassName,
        KR = void 0 === VR ? "recharts-active-shape" : VR,
        wR = RR.isActive,
        rR = xR(RR, vR);
      if ((0, yR.isValidElement)(GR)) JR = (0, yR.cloneElement)(GR, DR(DR({}, rR), function(RR) {
        return (0, yR.isValidElement)(RR) ? RR.props : RR
      }(GR)));
      else if (uR()(GR)) JR = GR(rR);
      else if (qR()(GR) && !fR()(GR)) {
        var eR = iR(GR, rR);
        JR = yR.createElement(cR, {
          shapeType: tR,
          elementProps: eR
        })
      } else {
        var aR = rR;
        JR = yR.createElement(cR, {
          shapeType: tR,
          elementProps: aR
        })
      }
      return wR ? yR.createElement(gR.c, {
        className: KR
      }, JR) : JR
    }

    function IR(RR, JR) {
      return null != JR && "trapezoids" in RR.props
    }

    function mR(RR, JR) {
      return null != JR && "sectors" in RR.props
    }

    function zR(RR, JR) {
      return null != JR && "points" in RR.props
    }

    function SR(RR, JR) {
      var GR, yR, tR = RR.x === (null === JR || void 0 === JR || null === (GR = JR.labelViewBox) || void 0 === GR ? void 0 : GR.x) || RR.x === JR.x,
        uR = RR.y === (null === JR || void 0 === JR || null === (yR = JR.labelViewBox) || void 0 === yR ? void 0 : yR.y) || RR.y === JR.y;
      return tR && uR
    }

    function jR(RR, JR) {
      var GR = RR.endAngle === JR.endAngle,
        yR = RR.startAngle === JR.startAngle;
      return GR && yR
    }

    function dR(RR, JR) {
      var GR = RR.x === JR.x,
        yR = RR.y === JR.y,
        tR = RR.z === JR.z;
      return GR && yR && tR
    }

    function ER(RR) {
      var JR = RR.activeTooltipItem,
        GR = RR.graphicalItem,
        yR = RR.itemData,
        tR = function(RR, JR) {
          var GR;
          return IR(RR, JR) ? GR = "trapezoids" : mR(RR, JR) ? GR = "sectors" : zR(RR, JR) && (GR = "points"), GR
        }(GR, JR),
        uR = function(RR, JR) {
          var GR, yR;
          return IR(RR, JR) ? null === (GR = JR.tooltipPayload) || void 0 === GR || null === (GR = GR[0]) || void 0 === GR || null === (GR = GR.payload) || void 0 === GR ? void 0 : GR.payload : mR(RR, JR) ? null === (yR = JR.tooltipPayload) || void 0 === yR || null === (yR = yR[0]) || void 0 === yR || null === (yR = yR.payload) || void 0 === yR ? void 0 : yR.payload : zR(RR, JR) ? JR.payload : {}
        }(GR, JR),
        ZR = yR.filter((function(RR, yR) {
          var ZR = KR()(uR, RR),
            qR = GR.props[tR].filter((function(RR) {
              var yR = function(RR, JR) {
                var GR;
                return IR(RR, JR) ? GR = SR : mR(RR, JR) ? GR = jR : zR(RR, JR) && (GR = dR), GR
              }(GR, JR);
              return yR(RR, JR)
            })),
            iR = GR.props[tR].indexOf(qR[qR.length - 1]);
          return ZR && yR === iR
        }));
      return yR.indexOf(ZR[ZR.length - 1])
    }
  },
  7321: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => CR,
      h: () => nR,
      j: () => XR,
      m: () => WR,
      n: () => UR
    });
    var yR = GR(7326),
      tR = GR.n(yR),
      uR = GR(7339),
      ZR = GR.n(uR),
      qR = GR(7192),
      iR = GR(6523),
      fR = GR(6235),
      VR = GR(7354);

    function KR(RR) {
      return KR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, KR(RR)
    }

    function wR(RR, JR) {
      for (var GR = 0; GR < JR.length; GR++) {
        var yR = JR[GR];
        yR.enumerable = yR.enumerable || !1, yR.configurable = !0, "value" in yR && (yR.writable = !0), Object.defineProperty(RR, LR(yR.key), yR)
      }
    }

    function rR(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function eR(RR) {
      for (var JR = 1; JR < arguments.length; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? rR(Object(GR), !0).forEach((function(JR) {
          aR(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : rR(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }

    function aR(RR, JR, GR) {
      return (JR = LR(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }

    function LR(RR) {
      var JR = function(RR, JR) {
        if ("object" != KR(RR) || !RR) return RR;
        var GR = RR[Symbol.toPrimitive];
        if (void 0 !== GR) {
          var yR = GR.call(RR, JR || "default");
          if ("object" != KR(yR)) return yR;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === JR ? String : Number)(RR)
      }(RR, "string");
      return "symbol" == KR(JR) ? JR : JR + ""
    }
    var nR = function(RR, JR, GR, yR, tR) {
        var uR = RR.width,
          ZR = RR.height,
          KR = RR.layout,
          wR = RR.children,
          rR = Object.keys(JR),
          LR = {
            left: GR.left,
            leftMirror: GR.left,
            right: uR - GR.right,
            rightMirror: uR - GR.right,
            top: GR.top,
            topMirror: GR.top,
            bottom: ZR - GR.bottom,
            bottomMirror: ZR - GR.bottom
          },
          nR = !!(0, iR.j)(wR, VR.d);
        return rR.reduce((function(uR, ZR) {
          var iR, VR, wR, rR, UR, WR = JR[ZR],
            AR = WR.orientation,
            CR = WR.domain,
            XR = WR.padding,
            MR = void 0 === XR ? {} : XR,
            BR = WR.mirror,
            lR = WR.reversed,
            pR = "".concat(AR).concat(BR ? "Mirror" : "");
          if ("number" === WR.type && ("gap" === WR.padding || "no-gap" === WR.padding)) {
            var gR = CR[1] - CR[0],
              bR = 1 / 0,
              vR = WR.categoricalDomain.sort(fR.b);
            if (vR.forEach((function(RR, JR) {
                JR > 0 && (bR = Math.min((RR || 0) - (vR[JR - 1] || 0), bR))
              })), Number.isFinite(bR)) {
              var OR = bR / gR,
                xR = "vertical" === WR.layout ? GR.height : GR.width;
              if ("gap" === WR.padding && (iR = OR * xR / 2), "no-gap" === WR.padding) {
                var NR = (0, fR.p)(RR.barCategoryGap, OR * xR),
                  DR = OR * xR / 2;
                iR = DR - NR - (DR - NR) / xR * NR
              }
            }
          }
          VR = "xAxis" === yR ? [GR.left + (MR.left || 0) + (iR || 0), GR.left + GR.width - (MR.right || 0) - (iR || 0)] : "yAxis" === yR ? "horizontal" === KR ? [GR.top + GR.height - (MR.bottom || 0), GR.top + (MR.top || 0)] : [GR.top + (MR.top || 0) + (iR || 0), GR.top + GR.height - (MR.bottom || 0) - (iR || 0)] : WR.range, lR && (VR = [VR[1], VR[0]]);
          var HR = (0, qR.rb)(WR, tR, nR),
            oR = HR.scale,
            cR = HR.realScaleType;
          oR.domain(CR).range(VR), (0, qR.j)(oR);
          var PR = (0, qR.bb)(oR, eR(eR({}, WR), {}, {
            realScaleType: cR
          }));
          "xAxis" === yR ? (UR = "top" === AR && !BR || "bottom" === AR && BR, wR = GR.left, rR = LR[pR] - UR * WR.height) : "yAxis" === yR && (UR = "left" === AR && !BR || "right" === AR && BR, wR = LR[pR] - UR * WR.width, rR = GR.top);
          var IR = eR(eR(eR({}, WR), PR), {}, {
            realScaleType: cR,
            x: wR,
            y: rR,
            scale: oR,
            width: "xAxis" === yR ? GR.width : WR.width,
            height: "yAxis" === yR ? GR.height : WR.height
          });
          return IR.bandSize = (0, qR.t)(IR, PR), WR.hide || "xAxis" !== yR ? WR.hide || (LR[pR] += (UR ? -1 : 1) * IR.width) : LR[pR] += (UR ? -1 : 1) * IR.height, eR(eR({}, uR), {}, aR({}, ZR, IR))
        }), {})
      },
      UR = function(RR, JR) {
        var GR = RR.x,
          yR = RR.y,
          tR = JR.x,
          uR = JR.y;
        return {
          x: Math.min(GR, tR),
          y: Math.min(yR, uR),
          width: Math.abs(tR - GR),
          height: Math.abs(uR - yR)
        }
      },
      WR = function(RR) {
        var JR = RR.x1,
          GR = RR.y1,
          yR = RR.x2,
          tR = RR.y2;
        return UR({
          x: JR,
          y: GR
        }, {
          x: yR,
          y: tR
        })
      },
      AR = function() {
        function RR(JR) {
          ! function(RR, JR) {
            if (!(RR instanceof JR)) throw new TypeError("Cannot call a class as a function")
          }(this, RR), this.scale = JR
        }
        return JR = RR, GR = [{
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
          value: function(RR) {
            var JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              GR = JR.bandAware,
              yR = JR.position;
            if (void 0 !== RR) {
              if (yR) switch (yR) {
                case "start":
                default:
                  return this.scale(RR);
                case "middle":
                  var tR = this.bandwidth ? this.bandwidth() / 2 : 0;
                  return this.scale(RR) + tR;
                case "end":
                  var uR = this.bandwidth ? this.bandwidth() : 0;
                  return this.scale(RR) + uR
              }
              if (GR) {
                var ZR = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(RR) + ZR
              }
              return this.scale(RR)
            }
          }
        }, {
          key: "isInRange",
          value: function(RR) {
            var JR = this.range(),
              GR = JR[0],
              yR = JR[JR.length - 1];
            return GR <= yR ? RR >= GR && RR <= yR : RR >= yR && RR <= GR
          }
        }], yR = [{
          key: "create",
          value: function(JR) {
            return new RR(JR)
          }
        }], GR && wR(JR.prototype, GR), yR && wR(JR, yR), Object.defineProperty(JR, "prototype", {
          writable: !1
        }), JR;
        var JR, GR, yR
      }();
    aR(AR, "EPS", 1e-4);
    var CR = function(RR) {
      var JR = Object.keys(RR).reduce((function(JR, GR) {
        return eR(eR({}, JR), {}, aR({}, GR, AR.create(RR[GR])))
      }), {});
      return eR(eR({}, JR), {}, {
        apply: function(RR) {
          var GR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            yR = GR.bandAware,
            uR = GR.position;
          return tR()(RR, (function(RR, GR) {
            return JR[GR].apply(RR, {
              bandAware: yR,
              position: uR
            })
          }))
        },
        isInRange: function(RR) {
          return ZR()(RR, (function(RR, GR) {
            return JR[GR].isInRange(RR)
          }))
        }
      })
    };
    var XR = function(RR) {
      var JR = RR.width,
        GR = RR.height,
        yR = function(RR) {
          return (RR % 180 + 180) % 180
        }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0),
        tR = yR * Math.PI / 180,
        uR = Math.atan(GR / JR),
        ZR = tR > uR && tR < Math.PI - uR ? GR / Math.sin(tR) : JR / Math.cos(tR);
      return Math.abs(ZR)
    }
  },
  7192: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => NZ,
      i: () => bZ,
      j: () => dZ,
      m: () => zZ,
      q: () => EZ,
      t: () => Zq,
      u: () => xZ,
      w: () => OZ,
      x: () => Rq,
      z: () => hZ,
      D: () => sZ,
      H: () => PZ,
      I: () => gZ,
      J: () => oZ,
      M: () => Gq,
      Q: () => vZ,
      U: () => FZ,
      Y: () => Jq,
      ab: () => IZ,
      bb: () => TZ,
      fb: () => iq,
      hb: () => pZ,
      ib: () => cZ,
      mb: () => qq,
      qb: () => HZ,
      rb: () => SZ,
      tb: () => uq,
      ub: () => YZ
    });
    var yR = {};
    GR.r(yR), GR.d(yR, {
      scaleBand: () => tR.d,
      scaleDiverging: () => fu,
      scaleDivergingLog: () => Vu,
      scaleDivergingPow: () => wu,
      scaleDivergingSqrt: () => ru,
      scaleDivergingSymlog: () => Ku,
      scaleIdentity: () => QJ,
      scaleImplicit: () => fG.d,
      scaleLinear: () => kJ,
      scaleLog: () => tG,
      scaleOrdinal: () => fG.b,
      scalePoint: () => tR.e,
      scalePow: () => eG,
      scaleQuantile: () => pG,
      scaleQuantize: () => gG,
      scaleRadial: () => nG,
      scaleSequential: () => Gu,
      scaleSequentialLog: () => yu,
      scaleSequentialPow: () => uu,
      scaleSequentialQuantile: () => qu,
      scaleSequentialSqrt: () => Zu,
      scaleSequentialSymlog: () => tu,
      scaleSqrt: () => aG,
      scaleSymlog: () => iG,
      scaleThreshold: () => bG,
      scaleTime: () => st,
      scaleUtc: () => ht,
      tickFormat: () => EJ
    });
    var tR = GR(7201);
    const uR = Math.sqrt(50),
      ZR = Math.sqrt(10),
      qR = Math.sqrt(2);

    function iR(RR, JR, GR) {
      const yR = (JR - RR) / Math.max(0, GR),
        tR = Math.floor(Math.log10(yR)),
        fR = yR / Math.pow(10, tR),
        VR = fR >= uR ? 10 : fR >= ZR ? 5 : fR >= qR ? 2 : 1;
      let KR, wR, rR;
      return tR < 0 ? (rR = Math.pow(10, -tR) / VR, KR = Math.round(RR * rR), wR = Math.round(JR * rR), KR / rR < RR && ++KR, wR / rR > JR && --wR, rR = -rR) : (rR = Math.pow(10, tR) * VR, KR = Math.round(RR / rR), wR = Math.round(JR / rR), KR * rR < RR && ++KR, wR * rR > JR && --wR), wR < KR && .5 <= GR && GR < 2 ? iR(RR, JR, 2 * GR) : [KR, wR, rR]
    }

    function fR(RR, JR, GR) {
      if (!((GR = +GR) > 0)) return [];
      if ((RR = +RR) === (JR = +JR)) return [RR];
      const yR = JR < RR,
        [tR, uR, ZR] = yR ? iR(JR, RR, GR) : iR(RR, JR, GR);
      if (!(uR >= tR)) return [];
      const qR = uR - tR + 1,
        fR = new Array(qR);
      if (yR)
        if (ZR < 0)
          for (let iR = 0; iR < qR; ++iR) fR[iR] = (uR - iR) / -ZR;
        else
          for (let iR = 0; iR < qR; ++iR) fR[iR] = (uR - iR) * ZR;
      else if (ZR < 0)
        for (let iR = 0; iR < qR; ++iR) fR[iR] = (tR + iR) / -ZR;
      else
        for (let iR = 0; iR < qR; ++iR) fR[iR] = (tR + iR) * ZR;
      return fR
    }

    function VR(RR, JR, GR) {
      return iR(RR = +RR, JR = +JR, GR = +GR)[2]
    }

    function KR(RR, JR, GR) {
      GR = +GR;
      const yR = (JR = +JR) < (RR = +RR),
        tR = yR ? VR(JR, RR, GR) : VR(RR, JR, GR);
      return (yR ? -1 : 1) * (tR < 0 ? 1 / -tR : tR)
    }

    function wR(RR, JR) {
      return null == RR || null == JR ? NaN : RR < JR ? -1 : RR > JR ? 1 : RR >= JR ? 0 : NaN
    }

    function rR(RR, JR) {
      return null == RR || null == JR ? NaN : JR < RR ? -1 : JR > RR ? 1 : JR >= RR ? 0 : NaN
    }

    function eR(RR) {
      let JR, GR, yR;

      function tR(RR, yR) {
        let tR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          uR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : RR.length;
        if (tR < uR) {
          if (0 !== JR(yR, yR)) return uR;
          do {
            const JR = tR + uR >>> 1;
            GR(RR[JR], yR) < 0 ? tR = JR + 1 : uR = JR
          } while (tR < uR)
        }
        return tR
      }
      return 2 !== RR.length ? (JR = wR, GR = (JR, GR) => wR(RR(JR), GR), yR = (JR, GR) => RR(JR) - GR) : (JR = RR === wR || RR === rR ? RR : aR, GR = RR, yR = RR), {
        left: tR,
        center: function(RR, JR) {
          let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          const uR = tR(RR, JR, GR, (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : RR.length) - 1);
          return uR > GR && yR(RR[uR - 1], JR) > -yR(RR[uR], JR) ? uR - 1 : uR
        },
        right: function(RR, yR) {
          let tR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            uR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : RR.length;
          if (tR < uR) {
            if (0 !== JR(yR, yR)) return uR;
            do {
              const JR = tR + uR >>> 1;
              GR(RR[JR], yR) <= 0 ? tR = JR + 1 : uR = JR
            } while (tR < uR)
          }
          return tR
        }
      }
    }

    function aR() {
      return 0
    }

    function LR(RR) {
      return null === RR ? NaN : +RR
    }
    const nR = eR(wR),
      UR = nR.right,
      WR = (nR.left, eR(LR).center, UR);

    function AR(RR, JR, GR) {
      RR.prototype = JR.prototype = GR, GR.constructor = RR
    }

    function CR(RR, JR) {
      var GR = Object.create(RR.prototype);
      for (var yR in JR) GR[yR] = JR[yR];
      return GR
    }

    function XR() {}
    var MR = .7,
      BR = 1 / MR,
      lR = "\\s*([+-]?\\d+)\\s*",
      pR = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      gR = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      bR = /^#([0-9a-f]{3,8})$/,
      vR = new RegExp(`^rgb\\(${lR},${lR},${lR}\\)$`),
      OR = new RegExp(`^rgb\\(${gR},${gR},${gR}\\)$`),
      xR = new RegExp(`^rgba\\(${lR},${lR},${lR},${pR}\\)$`),
      NR = new RegExp(`^rgba\\(${gR},${gR},${gR},${pR}\\)$`),
      DR = new RegExp(`^hsl\\(${pR},${gR},${gR}\\)$`),
      HR = new RegExp(`^hsla\\(${pR},${gR},${gR},${pR}\\)$`),
      oR = {
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

    function cR() {
      return this.rgb().formatHex()
    }

    function PR() {
      return this.rgb().formatRgb()
    }

    function IR(RR) {
      var JR, GR;
      return RR = (RR + "").trim().toLowerCase(), (JR = bR.exec(RR)) ? (GR = JR[1].length, JR = parseInt(JR[1], 16), 6 === GR ? mR(JR) : 3 === GR ? new jR(JR >> 8 & 15 | JR >> 4 & 240, JR >> 4 & 15 | 240 & JR, (15 & JR) << 4 | 15 & JR, 1) : 8 === GR ? zR(JR >> 24 & 255, JR >> 16 & 255, JR >> 8 & 255, (255 & JR) / 255) : 4 === GR ? zR(JR >> 12 & 15 | JR >> 8 & 240, JR >> 8 & 15 | JR >> 4 & 240, JR >> 4 & 15 | 240 & JR, ((15 & JR) << 4 | 15 & JR) / 255) : null) : (JR = vR.exec(RR)) ? new jR(JR[1], JR[2], JR[3], 1) : (JR = OR.exec(RR)) ? new jR(255 * JR[1] / 100, 255 * JR[2] / 100, 255 * JR[3] / 100, 1) : (JR = xR.exec(RR)) ? zR(JR[1], JR[2], JR[3], JR[4]) : (JR = NR.exec(RR)) ? zR(255 * JR[1] / 100, 255 * JR[2] / 100, 255 * JR[3] / 100, JR[4]) : (JR = DR.exec(RR)) ? FR(JR[1], JR[2] / 100, JR[3] / 100, 1) : (JR = HR.exec(RR)) ? FR(JR[1], JR[2] / 100, JR[3] / 100, JR[4]) : oR.hasOwnProperty(RR) ? mR(oR[RR]) : "transparent" === RR ? new jR(NaN, NaN, NaN, 0) : null
    }

    function mR(RR) {
      return new jR(RR >> 16 & 255, RR >> 8 & 255, 255 & RR, 1)
    }

    function zR(RR, JR, GR, yR) {
      return yR <= 0 && (RR = JR = GR = NaN), new jR(RR, JR, GR, yR)
    }

    function SR(RR, JR, GR, yR) {
      return 1 === arguments.length ? ((tR = RR) instanceof XR || (tR = IR(tR)), tR ? new jR((tR = tR.rgb()).r, tR.g, tR.b, tR.opacity) : new jR) : new jR(RR, JR, GR, null == yR ? 1 : yR);
      var tR
    }

    function jR(RR, JR, GR, yR) {
      this.r = +RR, this.g = +JR, this.b = +GR, this.opacity = +yR
    }

    function dR() {
      return `#${QR(this.r)}${QR(this.g)}${QR(this.b)}`
    }

    function ER() {
      const RR = YR(this.opacity);
      return `${1===RR?"rgb(":"rgba("}${kR(this.r)}, ${kR(this.g)}, ${kR(this.b)}${1===RR?")":`, ${RR})`}`
    }

    function YR(RR) {
      return isNaN(RR) ? 1 : Math.max(0, Math.min(1, RR))
    }

    function kR(RR) {
      return Math.max(0, Math.min(255, Math.round(RR) || 0))
    }

    function QR(RR) {
      return ((RR = kR(RR)) < 16 ? "0" : "") + RR.toString(16)
    }

    function FR(RR, JR, GR, yR) {
      return yR <= 0 ? RR = JR = GR = NaN : GR <= 0 || GR >= 1 ? RR = JR = NaN : JR <= 0 && (RR = NaN), new sR(RR, JR, GR, yR)
    }

    function TR(RR) {
      if (RR instanceof sR) return new sR(RR.h, RR.s, RR.l, RR.opacity);
      if (RR instanceof XR || (RR = IR(RR)), !RR) return new sR;
      if (RR instanceof sR) return RR;
      var JR = (RR = RR.rgb()).r / 255,
        GR = RR.g / 255,
        yR = RR.b / 255,
        tR = Math.min(JR, GR, yR),
        uR = Math.max(JR, GR, yR),
        ZR = NaN,
        qR = uR - tR,
        iR = (uR + tR) / 2;
      return qR ? (ZR = JR === uR ? (GR - yR) / qR + 6 * (GR < yR) : GR === uR ? (yR - JR) / qR + 2 : (JR - GR) / qR + 4, qR /= iR < .5 ? uR + tR : 2 - uR - tR, ZR *= 60) : qR = iR > 0 && iR < 1 ? 0 : ZR, new sR(ZR, qR, iR, RR.opacity)
    }

    function sR(RR, JR, GR, yR) {
      this.h = +RR, this.s = +JR, this.l = +GR, this.opacity = +yR
    }

    function hR(RR) {
      return (RR = (RR || 0) % 360) < 0 ? RR + 360 : RR
    }

    function RJ(RR) {
      return Math.max(0, Math.min(1, RR || 0))
    }

    function JJ(RR, JR, GR) {
      return 255 * (RR < 60 ? JR + (GR - JR) * RR / 60 : RR < 180 ? GR : RR < 240 ? JR + (GR - JR) * (240 - RR) / 60 : JR)
    }

    function GJ(RR, JR, GR, yR, tR) {
      var uR = RR * RR,
        ZR = uR * RR;
      return ((1 - 3 * RR + 3 * uR - ZR) * JR + (4 - 6 * uR + 3 * ZR) * GR + (1 + 3 * RR + 3 * uR - 3 * ZR) * yR + ZR * tR) / 6
    }
    AR(XR, IR, {
      copy(RR) {
        return Object.assign(new this.constructor, this, RR)
      },
      displayable() {
        return this.rgb().displayable()
      },
      hex: cR,
      formatHex: cR,
      formatHex8: function() {
        return this.rgb().formatHex8()
      },
      formatHsl: function() {
        return TR(this).formatHsl()
      },
      formatRgb: PR,
      toString: PR
    }), AR(jR, SR, CR(XR, {
      brighter(RR) {
        return RR = null == RR ? BR : Math.pow(BR, RR), new jR(this.r * RR, this.g * RR, this.b * RR, this.opacity)
      },
      darker(RR) {
        return RR = null == RR ? MR : Math.pow(MR, RR), new jR(this.r * RR, this.g * RR, this.b * RR, this.opacity)
      },
      rgb() {
        return this
      },
      clamp() {
        return new jR(kR(this.r), kR(this.g), kR(this.b), YR(this.opacity))
      },
      displayable() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
      },
      hex: dR,
      formatHex: dR,
      formatHex8: function() {
        return `#${QR(this.r)}${QR(this.g)}${QR(this.b)}${QR(255*(isNaN(this.opacity)?1:this.opacity))}`
      },
      formatRgb: ER,
      toString: ER
    })), AR(sR, (function(RR, JR, GR, yR) {
      return 1 === arguments.length ? TR(RR) : new sR(RR, JR, GR, null == yR ? 1 : yR)
    }), CR(XR, {
      brighter(RR) {
        return RR = null == RR ? BR : Math.pow(BR, RR), new sR(this.h, this.s, this.l * RR, this.opacity)
      },
      darker(RR) {
        return RR = null == RR ? MR : Math.pow(MR, RR), new sR(this.h, this.s, this.l * RR, this.opacity)
      },
      rgb() {
        var RR = this.h % 360 + 360 * (this.h < 0),
          JR = isNaN(RR) || isNaN(this.s) ? 0 : this.s,
          GR = this.l,
          yR = GR + (GR < .5 ? GR : 1 - GR) * JR,
          tR = 2 * GR - yR;
        return new jR(JJ(RR >= 240 ? RR - 240 : RR + 120, tR, yR), JJ(RR, tR, yR), JJ(RR < 120 ? RR + 240 : RR - 120, tR, yR), this.opacity)
      },
      clamp() {
        return new sR(hR(this.h), RJ(this.s), RJ(this.l), YR(this.opacity))
      },
      displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
      },
      formatHsl() {
        const RR = YR(this.opacity);
        return `${1===RR?"hsl(":"hsla("}${hR(this.h)}, ${100*RJ(this.s)}%, ${100*RJ(this.l)}%${1===RR?")":`, ${RR})`}`
      }
    }));
    const yJ = RR => () => RR;

    function tJ(RR, JR) {
      return function(GR) {
        return RR + GR * JR
      }
    }

    function uJ(RR) {
      return 1 === (RR = +RR) ? ZJ : function(JR, GR) {
        return GR - JR ? function(RR, JR, GR) {
          return RR = Math.pow(RR, GR), JR = Math.pow(JR, GR) - RR, GR = 1 / GR,
            function(yR) {
              return Math.pow(RR + yR * JR, GR)
            }
        }(JR, GR, RR) : yJ(isNaN(JR) ? GR : JR)
      }
    }

    function ZJ(RR, JR) {
      var GR = JR - RR;
      return GR ? tJ(RR, GR) : yJ(isNaN(RR) ? JR : RR)
    }
    const qJ = function RR(JR) {
      var GR = uJ(JR);

      function yR(RR, JR) {
        var yR = GR((RR = SR(RR)).r, (JR = SR(JR)).r),
          tR = GR(RR.g, JR.g),
          uR = GR(RR.b, JR.b),
          ZR = ZJ(RR.opacity, JR.opacity);
        return function(JR) {
          return RR.r = yR(JR), RR.g = tR(JR), RR.b = uR(JR), RR.opacity = ZR(JR), RR + ""
        }
      }
      return yR.gamma = RR, yR
    }(1);

    function iJ(RR) {
      return function(JR) {
        var GR, yR, tR = JR.length,
          uR = new Array(tR),
          ZR = new Array(tR),
          qR = new Array(tR);
        for (GR = 0; GR < tR; ++GR) yR = SR(JR[GR]), uR[GR] = yR.r || 0, ZR[GR] = yR.g || 0, qR[GR] = yR.b || 0;
        return uR = RR(uR), ZR = RR(ZR), qR = RR(qR), yR.opacity = 1,
          function(RR) {
            return yR.r = uR(RR), yR.g = ZR(RR), yR.b = qR(RR), yR + ""
          }
      }
    }
    iJ((function(RR) {
      var JR = RR.length - 1;
      return function(GR) {
        var yR = GR <= 0 ? GR = 0 : GR >= 1 ? (GR = 1, JR - 1) : Math.floor(GR * JR),
          tR = RR[yR],
          uR = RR[yR + 1],
          ZR = yR > 0 ? RR[yR - 1] : 2 * tR - uR,
          qR = yR < JR - 1 ? RR[yR + 2] : 2 * uR - tR;
        return GJ((GR - yR / JR) * JR, ZR, tR, uR, qR)
      }
    })), iJ((function(RR) {
      var JR = RR.length;
      return function(GR) {
        var yR = Math.floor(((GR %= 1) < 0 ? ++GR : GR) * JR),
          tR = RR[(yR + JR - 1) % JR],
          uR = RR[yR % JR],
          ZR = RR[(yR + 1) % JR],
          qR = RR[(yR + 2) % JR];
        return GJ((GR - yR / JR) * JR, tR, uR, ZR, qR)
      }
    }));

    function fJ(RR, JR) {
      var GR, yR = JR ? JR.length : 0,
        tR = RR ? Math.min(yR, RR.length) : 0,
        uR = new Array(tR),
        ZR = new Array(yR);
      for (GR = 0; GR < tR; ++GR) uR[GR] = nJ(RR[GR], JR[GR]);
      for (; GR < yR; ++GR) ZR[GR] = JR[GR];
      return function(RR) {
        for (GR = 0; GR < tR; ++GR) ZR[GR] = uR[GR](RR);
        return ZR
      }
    }

    function VJ(RR, JR) {
      var GR = new Date;
      return RR = +RR, JR = +JR,
        function(yR) {
          return GR.setTime(RR * (1 - yR) + JR * yR), GR
        }
    }

    function KJ(RR, JR) {
      return RR = +RR, JR = +JR,
        function(GR) {
          return RR * (1 - GR) + JR * GR
        }
    }

    function wJ(RR, JR) {
      var GR, yR = {},
        tR = {};
      for (GR in null !== RR && "object" === typeof RR || (RR = {}), null !== JR && "object" === typeof JR || (JR = {}), JR) GR in RR ? yR[GR] = nJ(RR[GR], JR[GR]) : tR[GR] = JR[GR];
      return function(RR) {
        for (GR in yR) tR[GR] = yR[GR](RR);
        return tR
      }
    }
    var rJ = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      eJ = new RegExp(rJ.source, "g");

    function aJ(RR, JR) {
      var GR, yR, tR, uR = rJ.lastIndex = eJ.lastIndex = 0,
        ZR = -1,
        qR = [],
        iR = [];
      for (RR += "", JR += "";
        (GR = rJ.exec(RR)) && (yR = eJ.exec(JR));)(tR = yR.index) > uR && (tR = JR.slice(uR, tR), qR[ZR] ? qR[ZR] += tR : qR[++ZR] = tR), (GR = GR[0]) === (yR = yR[0]) ? qR[ZR] ? qR[ZR] += yR : qR[++ZR] = yR : (qR[++ZR] = null, iR.push({
        i: ZR,
        x: KJ(GR, yR)
      })), uR = eJ.lastIndex;
      return uR < JR.length && (tR = JR.slice(uR), qR[ZR] ? qR[ZR] += tR : qR[++ZR] = tR), qR.length < 2 ? iR[0] ? function(RR) {
        return function(JR) {
          return RR(JR) + ""
        }
      }(iR[0].x) : function(RR) {
        return function() {
          return RR
        }
      }(JR) : (JR = iR.length, function(RR) {
        for (var GR, yR = 0; yR < JR; ++yR) qR[(GR = iR[yR]).i] = GR.x(RR);
        return qR.join("")
      })
    }

    function LJ(RR, JR) {
      JR || (JR = []);
      var GR, yR = RR ? Math.min(JR.length, RR.length) : 0,
        tR = JR.slice();
      return function(uR) {
        for (GR = 0; GR < yR; ++GR) tR[GR] = RR[GR] * (1 - uR) + JR[GR] * uR;
        return tR
      }
    }

    function nJ(RR, JR) {
      var GR, yR, tR = typeof JR;
      return null == JR || "boolean" === tR ? yJ(JR) : ("number" === tR ? KJ : "string" === tR ? (GR = IR(JR)) ? (JR = GR, qJ) : aJ : JR instanceof IR ? qJ : JR instanceof Date ? VJ : (yR = JR, !ArrayBuffer.isView(yR) || yR instanceof DataView ? Array.isArray(JR) ? fJ : "function" !== typeof JR.valueOf && "function" !== typeof JR.toString || isNaN(JR) ? wJ : KJ : LJ))(RR, JR)
    }

    function UJ(RR, JR) {
      return RR = +RR, JR = +JR,
        function(GR) {
          return Math.round(RR * (1 - GR) + JR * GR)
        }
    }

    function WJ(RR) {
      return +RR
    }
    var AJ = [0, 1];

    function CJ(RR) {
      return RR
    }

    function XJ(RR, JR) {
      return (JR -= RR = +RR) ? function(GR) {
        return (GR - RR) / JR
      } : (GR = isNaN(JR) ? NaN : .5, function() {
        return GR
      });
      var GR
    }

    function MJ(RR, JR, GR) {
      var yR = RR[0],
        tR = RR[1],
        uR = JR[0],
        ZR = JR[1];
      return tR < yR ? (yR = XJ(tR, yR), uR = GR(ZR, uR)) : (yR = XJ(yR, tR), uR = GR(uR, ZR)),
        function(RR) {
          return uR(yR(RR))
        }
    }

    function BJ(RR, JR, GR) {
      var yR = Math.min(RR.length, JR.length) - 1,
        tR = new Array(yR),
        uR = new Array(yR),
        ZR = -1;
      for (RR[yR] < RR[0] && (RR = RR.slice().reverse(), JR = JR.slice().reverse()); ++ZR < yR;) tR[ZR] = XJ(RR[ZR], RR[ZR + 1]), uR[ZR] = GR(JR[ZR], JR[ZR + 1]);
      return function(JR) {
        var GR = WR(RR, JR, 1, yR) - 1;
        return uR[GR](tR[GR](JR))
      }
    }

    function lJ(RR, JR) {
      return JR.domain(RR.domain()).range(RR.range()).interpolate(RR.interpolate()).clamp(RR.clamp()).unknown(RR.unknown())
    }

    function pJ() {
      var RR, JR, GR, yR, tR, uR, ZR = AJ,
        qR = AJ,
        iR = nJ,
        fR = CJ;

      function VR() {
        var RR = Math.min(ZR.length, qR.length);
        return fR !== CJ && (fR = function(RR, JR) {
          var GR;
          return RR > JR && (GR = RR, RR = JR, JR = GR),
            function(GR) {
              return Math.max(RR, Math.min(JR, GR))
            }
        }(ZR[0], ZR[RR - 1])), yR = RR > 2 ? BJ : MJ, tR = uR = null, KR
      }

      function KR(JR) {
        return null == JR || isNaN(JR = +JR) ? GR : (tR || (tR = yR(ZR.map(RR), qR, iR)))(RR(fR(JR)))
      }
      return KR.invert = function(GR) {
          return fR(JR((uR || (uR = yR(qR, ZR.map(RR), KJ)))(GR)))
        }, KR.domain = function(RR) {
          return arguments.length ? (ZR = Array.from(RR, WJ), VR()) : ZR.slice()
        }, KR.range = function(RR) {
          return arguments.length ? (qR = Array.from(RR), VR()) : qR.slice()
        }, KR.rangeRound = function(RR) {
          return qR = Array.from(RR), iR = UJ, VR()
        }, KR.clamp = function(RR) {
          return arguments.length ? (fR = !!RR || CJ, VR()) : fR !== CJ
        }, KR.interpolate = function(RR) {
          return arguments.length ? (iR = RR, VR()) : iR
        }, KR.unknown = function(RR) {
          return arguments.length ? (GR = RR, KR) : GR
        },
        function(GR, yR) {
          return RR = GR, JR = yR, VR()
        }
    }

    function gJ() {
      return pJ()(CJ, CJ)
    }
    var bJ, vJ = GR(7209),
      OJ = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function xJ(RR) {
      if (!(JR = OJ.exec(RR))) throw new Error("invalid format: " + RR);
      var JR;
      return new NJ({
        fill: JR[1],
        align: JR[2],
        sign: JR[3],
        symbol: JR[4],
        zero: JR[5],
        width: JR[6],
        comma: JR[7],
        precision: JR[8] && JR[8].slice(1),
        trim: JR[9],
        type: JR[10]
      })
    }

    function NJ(RR) {
      this.fill = void 0 === RR.fill ? " " : RR.fill + "", this.align = void 0 === RR.align ? ">" : RR.align + "", this.sign = void 0 === RR.sign ? "-" : RR.sign + "", this.symbol = void 0 === RR.symbol ? "" : RR.symbol + "", this.zero = !!RR.zero, this.width = void 0 === RR.width ? void 0 : +RR.width, this.comma = !!RR.comma, this.precision = void 0 === RR.precision ? void 0 : +RR.precision, this.trim = !!RR.trim, this.type = void 0 === RR.type ? "" : RR.type + ""
    }

    function DJ(RR, JR) {
      if (!isFinite(RR) || 0 === RR) return null;
      var GR = (RR = JR ? RR.toExponential(JR - 1) : RR.toExponential()).indexOf("e"),
        yR = RR.slice(0, GR);
      return [yR.length > 1 ? yR[0] + yR.slice(2) : yR, +RR.slice(GR + 1)]
    }

    function HJ(RR) {
      return (RR = DJ(Math.abs(RR))) ? RR[1] : NaN
    }

    function oJ(RR, JR) {
      var GR = DJ(RR, JR);
      if (!GR) return RR + "";
      var yR = GR[0],
        tR = GR[1];
      return tR < 0 ? "0." + new Array(-tR).join("0") + yR : yR.length > tR + 1 ? yR.slice(0, tR + 1) + "." + yR.slice(tR + 1) : yR + new Array(tR - yR.length + 2).join("0")
    }
    xJ.prototype = NJ.prototype, NJ.prototype.toString = function() {
      return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
    };
    const cJ = {
      "%": (RR, JR) => (100 * RR).toFixed(JR),
      b: RR => Math.round(RR).toString(2),
      c: RR => RR + "",
      d: function(RR) {
        return Math.abs(RR = Math.round(RR)) >= 1e21 ? RR.toLocaleString("en").replace(/,/g, "") : RR.toString(10)
      },
      e: (RR, JR) => RR.toExponential(JR),
      f: (RR, JR) => RR.toFixed(JR),
      g: (RR, JR) => RR.toPrecision(JR),
      o: RR => Math.round(RR).toString(8),
      p: (RR, JR) => oJ(100 * RR, JR),
      r: oJ,
      s: function(RR, JR) {
        var GR = DJ(RR, JR);
        if (!GR) return bJ = void 0, RR.toPrecision(JR);
        var yR = GR[0],
          tR = GR[1],
          uR = tR - (bJ = 3 * Math.max(-8, Math.min(8, Math.floor(tR / 3)))) + 1,
          ZR = yR.length;
        return uR === ZR ? yR : uR > ZR ? yR + new Array(uR - ZR + 1).join("0") : uR > 0 ? yR.slice(0, uR) + "." + yR.slice(uR) : "0." + new Array(1 - uR).join("0") + DJ(RR, Math.max(0, JR + uR - 1))[0]
      },
      X: RR => Math.round(RR).toString(16).toUpperCase(),
      x: RR => Math.round(RR).toString(16)
    };

    function PJ(RR) {
      return RR
    }
    var IJ, mJ, zJ, SJ = Array.prototype.map,
      jJ = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

    function dJ(RR) {
      var JR, GR, yR = void 0 === RR.grouping || void 0 === RR.thousands ? PJ : (JR = SJ.call(RR.grouping, Number), GR = RR.thousands + "", function(RR, yR) {
          for (var tR = RR.length, uR = [], ZR = 0, qR = JR[0], iR = 0; tR > 0 && qR > 0 && (iR + qR + 1 > yR && (qR = Math.max(1, yR - iR)), uR.push(RR.substring(tR -= qR, tR + qR)), !((iR += qR + 1) > yR));) qR = JR[ZR = (ZR + 1) % JR.length];
          return uR.reverse().join(GR)
        }),
        tR = void 0 === RR.currency ? "" : RR.currency[0] + "",
        uR = void 0 === RR.currency ? "" : RR.currency[1] + "",
        ZR = void 0 === RR.decimal ? "." : RR.decimal + "",
        qR = void 0 === RR.numerals ? PJ : function(RR) {
          return function(JR) {
            return JR.replace(/[0-9]/g, (function(JR) {
              return RR[+JR]
            }))
          }
        }(SJ.call(RR.numerals, String)),
        iR = void 0 === RR.percent ? "%" : RR.percent + "",
        fR = void 0 === RR.minus ? "\u2212" : RR.minus + "",
        VR = void 0 === RR.nan ? "NaN" : RR.nan + "";

      function KR(RR, JR) {
        var GR = (RR = xJ(RR)).fill,
          KR = RR.align,
          wR = RR.sign,
          rR = RR.symbol,
          eR = RR.zero,
          aR = RR.width,
          LR = RR.comma,
          nR = RR.precision,
          UR = RR.trim,
          WR = RR.type;
        "n" === WR ? (LR = !0, WR = "g") : cJ[WR] || (void 0 === nR && (nR = 12), UR = !0, WR = "g"), (eR || "0" === GR && "=" === KR) && (eR = !0, GR = "0", KR = "=");
        var AR = (JR && void 0 !== JR.prefix ? JR.prefix : "") + ("$" === rR ? tR : "#" === rR && /[boxX]/.test(WR) ? "0" + WR.toLowerCase() : ""),
          CR = ("$" === rR ? uR : /[%p]/.test(WR) ? iR : "") + (JR && void 0 !== JR.suffix ? JR.suffix : ""),
          XR = cJ[WR],
          MR = /[defgprs%]/.test(WR);

        function BR(RR) {
          var JR, tR, uR, iR = AR,
            rR = CR;
          if ("c" === WR) rR = XR(RR) + rR, RR = "";
          else {
            var BR = (RR = +RR) < 0 || 1 / RR < 0;
            if (RR = isNaN(RR) ? VR : XR(Math.abs(RR), nR), UR && (RR = function(RR) {
                RR: for (var JR, GR = RR.length, yR = 1, tR = -1; yR < GR; ++yR) switch (RR[yR]) {
                  case ".":
                    tR = JR = yR;
                    break;
                  case "0":
                    0 === tR && (tR = yR), JR = yR;
                    break;
                  default:
                    if (!+RR[yR]) break RR;
                    tR > 0 && (tR = 0)
                }
                return tR > 0 ? RR.slice(0, tR) + RR.slice(JR + 1) : RR
              }(RR)), BR && 0 === +RR && "+" !== wR && (BR = !1), iR = (BR ? "(" === wR ? wR : fR : "-" === wR || "(" === wR ? "" : wR) + iR, rR = ("s" !== WR || isNaN(RR) || void 0 === bJ ? "" : jJ[8 + bJ / 3]) + rR + (BR && "(" === wR ? ")" : ""), MR)
              for (JR = -1, tR = RR.length; ++JR < tR;)
                if (48 > (uR = RR.charCodeAt(JR)) || uR > 57) {
                  rR = (46 === uR ? ZR + RR.slice(JR + 1) : RR.slice(JR)) + rR, RR = RR.slice(0, JR);
                  break
                }
          }
          LR && !eR && (RR = yR(RR, 1 / 0));
          var lR = iR.length + RR.length + rR.length,
            pR = lR < aR ? new Array(aR - lR + 1).join(GR) : "";
          switch (LR && eR && (RR = yR(pR + RR, pR.length ? aR - rR.length : 1 / 0), pR = ""), KR) {
            case "<":
              RR = iR + RR + rR + pR;
              break;
            case "=":
              RR = iR + pR + RR + rR;
              break;
            case "^":
              RR = pR.slice(0, lR = pR.length >> 1) + iR + RR + rR + pR.slice(lR);
              break;
            default:
              RR = pR + iR + RR + rR
          }
          return qR(RR)
        }
        return nR = void 0 === nR ? 6 : /[gprs]/.test(WR) ? Math.max(1, Math.min(21, nR)) : Math.max(0, Math.min(20, nR)), BR.toString = function() {
          return RR + ""
        }, BR
      }
      return {
        format: KR,
        formatPrefix: function(RR, JR) {
          var GR = 3 * Math.max(-8, Math.min(8, Math.floor(HJ(JR) / 3))),
            yR = Math.pow(10, -GR),
            tR = KR(((RR = xJ(RR)).type = "f", RR), {
              suffix: jJ[8 + GR / 3]
            });
          return function(RR) {
            return tR(yR * RR)
          }
        }
      }
    }

    function EJ(RR, JR, GR, yR) {
      var tR, uR = KR(RR, JR, GR);
      switch ((yR = xJ(null == yR ? ",f" : yR)).type) {
        case "s":
          var ZR = Math.max(Math.abs(RR), Math.abs(JR));
          return null != yR.precision || isNaN(tR = function(RR, JR) {
            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(HJ(JR) / 3))) - HJ(Math.abs(RR)))
          }(uR, ZR)) || (yR.precision = tR), zJ(yR, ZR);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != yR.precision || isNaN(tR = function(RR, JR) {
            return RR = Math.abs(RR), JR = Math.abs(JR) - RR, Math.max(0, HJ(JR) - HJ(RR)) + 1
          }(uR, Math.max(Math.abs(RR), Math.abs(JR)))) || (yR.precision = tR - ("e" === yR.type));
          break;
        case "f":
        case "%":
          null != yR.precision || isNaN(tR = function(RR) {
            return Math.max(0, -HJ(Math.abs(RR)))
          }(uR)) || (yR.precision = tR - 2 * ("%" === yR.type))
      }
      return mJ(yR)
    }

    function YJ(RR) {
      var JR = RR.domain;
      return RR.ticks = function(RR) {
        var GR = JR();
        return fR(GR[0], GR[GR.length - 1], null == RR ? 10 : RR)
      }, RR.tickFormat = function(RR, GR) {
        var yR = JR();
        return EJ(yR[0], yR[yR.length - 1], null == RR ? 10 : RR, GR)
      }, RR.nice = function(GR) {
        null == GR && (GR = 10);
        var yR, tR, uR = JR(),
          ZR = 0,
          qR = uR.length - 1,
          iR = uR[ZR],
          fR = uR[qR],
          KR = 10;
        for (fR < iR && (tR = iR, iR = fR, fR = tR, tR = ZR, ZR = qR, qR = tR); KR-- > 0;) {
          if ((tR = VR(iR, fR, GR)) === yR) return uR[ZR] = iR, uR[qR] = fR, JR(uR);
          if (tR > 0) iR = Math.floor(iR / tR) * tR, fR = Math.ceil(fR / tR) * tR;
          else {
            if (!(tR < 0)) break;
            iR = Math.ceil(iR * tR) / tR, fR = Math.floor(fR * tR) / tR
          }
          yR = tR
        }
        return RR
      }, RR
    }

    function kJ() {
      var RR = gJ();
      return RR.copy = function() {
        return lJ(RR, kJ())
      }, vJ.h.apply(RR, arguments), YJ(RR)
    }

    function QJ(RR) {
      var JR;

      function GR(RR) {
        return null == RR || isNaN(RR = +RR) ? JR : RR
      }
      return GR.invert = GR, GR.domain = GR.range = function(JR) {
        return arguments.length ? (RR = Array.from(JR, WJ), GR) : RR.slice()
      }, GR.unknown = function(RR) {
        return arguments.length ? (JR = RR, GR) : JR
      }, GR.copy = function() {
        return QJ(RR).unknown(JR)
      }, RR = arguments.length ? Array.from(RR, WJ) : [0, 1], YJ(GR)
    }

    function FJ(RR, JR) {
      var GR, yR = 0,
        tR = (RR = RR.slice()).length - 1,
        uR = RR[yR],
        ZR = RR[tR];
      return ZR < uR && (GR = yR, yR = tR, tR = GR, GR = uR, uR = ZR, ZR = GR), RR[yR] = JR.floor(uR), RR[tR] = JR.ceil(ZR), RR
    }

    function TJ(RR) {
      return Math.log(RR)
    }

    function sJ(RR) {
      return Math.exp(RR)
    }

    function hJ(RR) {
      return -Math.log(-RR)
    }

    function RG(RR) {
      return -Math.exp(-RR)
    }

    function JG(RR) {
      return isFinite(RR) ? +("1e" + RR) : RR < 0 ? 0 : RR
    }

    function GG(RR) {
      return (JR, GR) => -RR(-JR, GR)
    }

    function yG(RR) {
      const JR = RR(TJ, sJ),
        GR = JR.domain;
      let yR, tR, uR = 10;

      function ZR() {
        return yR = function(RR) {
          return RR === Math.E ? Math.log : 10 === RR && Math.log10 || 2 === RR && Math.log2 || (RR = Math.log(RR), JR => Math.log(JR) / RR)
        }(uR), tR = function(RR) {
          return 10 === RR ? JG : RR === Math.E ? Math.exp : JR => Math.pow(RR, JR)
        }(uR), GR()[0] < 0 ? (yR = GG(yR), tR = GG(tR), RR(hJ, RG)) : RR(TJ, sJ), JR
      }
      return JR.base = function(RR) {
        return arguments.length ? (uR = +RR, ZR()) : uR
      }, JR.domain = function(RR) {
        return arguments.length ? (GR(RR), ZR()) : GR()
      }, JR.ticks = RR => {
        const JR = GR();
        let ZR = JR[0],
          qR = JR[JR.length - 1];
        const iR = qR < ZR;
        iR && ([ZR, qR] = [qR, ZR]);
        let VR, KR, wR = yR(ZR),
          rR = yR(qR);
        const eR = null == RR ? 10 : +RR;
        let aR = [];
        if (!(uR % 1) && rR - wR < eR) {
          if (wR = Math.floor(wR), rR = Math.ceil(rR), ZR > 0) {
            for (; wR <= rR; ++wR)
              for (VR = 1; VR < uR; ++VR)
                if (KR = wR < 0 ? VR / tR(-wR) : VR * tR(wR), !(KR < ZR)) {
                  if (KR > qR) break;
                  aR.push(KR)
                }
          } else
            for (; wR <= rR; ++wR)
              for (VR = uR - 1; VR >= 1; --VR)
                if (KR = wR > 0 ? VR / tR(-wR) : VR * tR(wR), !(KR < ZR)) {
                  if (KR > qR) break;
                  aR.push(KR)
                } 2 * aR.length < eR && (aR = fR(ZR, qR, eR))
        } else aR = fR(wR, rR, Math.min(rR - wR, eR)).map(tR);
        return iR ? aR.reverse() : aR
      }, JR.tickFormat = (RR, GR) => {
        if (null == RR && (RR = 10), null == GR && (GR = 10 === uR ? "s" : ","), "function" !== typeof GR && (uR % 1 || null != (GR = xJ(GR)).precision || (GR.trim = !0), GR = mJ(GR)), RR === 1 / 0) return GR;
        const ZR = Math.max(1, uR * RR / JR.ticks().length);
        return RR => {
          let JR = RR / tR(Math.round(yR(RR)));
          return JR * uR < uR - .5 && (JR *= uR), JR <= ZR ? GR(RR) : ""
        }
      }, JR.nice = () => GR(FJ(GR(), {
        floor: RR => tR(Math.floor(yR(RR))),
        ceil: RR => tR(Math.ceil(yR(RR)))
      })), JR
    }

    function tG() {
      const RR = yG(pJ()).domain([1, 10]);
      return RR.copy = () => lJ(RR, tG()).base(RR.base()), vJ.h.apply(RR, arguments), RR
    }

    function uG(RR) {
      return function(JR) {
        return Math.sign(JR) * Math.log1p(Math.abs(JR / RR))
      }
    }

    function ZG(RR) {
      return function(JR) {
        return Math.sign(JR) * Math.expm1(Math.abs(JR)) * RR
      }
    }

    function qG(RR) {
      var JR = 1,
        GR = RR(uG(JR), ZG(JR));
      return GR.constant = function(GR) {
        return arguments.length ? RR(uG(JR = +GR), ZG(JR)) : JR
      }, YJ(GR)
    }

    function iG() {
      var RR = qG(pJ());
      return RR.copy = function() {
        return lJ(RR, iG()).constant(RR.constant())
      }, vJ.h.apply(RR, arguments)
    }
    IJ = dJ({
      thousands: ",",
      grouping: [3],
      currency: ["$", ""]
    }), mJ = IJ.format, zJ = IJ.formatPrefix;
    var fG = GR(7216);

    function VG(RR) {
      return function(JR) {
        return JR < 0 ? -Math.pow(-JR, RR) : Math.pow(JR, RR)
      }
    }

    function KG(RR) {
      return RR < 0 ? -Math.sqrt(-RR) : Math.sqrt(RR)
    }

    function wG(RR) {
      return RR < 0 ? -RR * RR : RR * RR
    }

    function rG(RR) {
      var JR = RR(CJ, CJ),
        GR = 1;
      return JR.exponent = function(JR) {
        return arguments.length ? 1 === (GR = +JR) ? RR(CJ, CJ) : .5 === GR ? RR(KG, wG) : RR(VG(GR), VG(1 / GR)) : GR
      }, YJ(JR)
    }

    function eG() {
      var RR = rG(pJ());
      return RR.copy = function() {
        return lJ(RR, eG()).exponent(RR.exponent())
      }, vJ.h.apply(RR, arguments), RR
    }

    function aG() {
      return eG.apply(null, arguments).exponent(.5)
    }

    function LG(RR) {
      return Math.sign(RR) * RR * RR
    }

    function nG() {
      var RR, JR = gJ(),
        GR = [0, 1],
        yR = !1;

      function tR(GR) {
        var tR = function(RR) {
          return Math.sign(RR) * Math.sqrt(Math.abs(RR))
        }(JR(GR));
        return isNaN(tR) ? RR : yR ? Math.round(tR) : tR
      }
      return tR.invert = function(RR) {
        return JR.invert(LG(RR))
      }, tR.domain = function(RR) {
        return arguments.length ? (JR.domain(RR), tR) : JR.domain()
      }, tR.range = function(RR) {
        return arguments.length ? (JR.range((GR = Array.from(RR, WJ)).map(LG)), tR) : GR.slice()
      }, tR.rangeRound = function(RR) {
        return tR.range(RR).round(!0)
      }, tR.round = function(RR) {
        return arguments.length ? (yR = !!RR, tR) : yR
      }, tR.clamp = function(RR) {
        return arguments.length ? (JR.clamp(RR), tR) : JR.clamp()
      }, tR.unknown = function(JR) {
        return arguments.length ? (RR = JR, tR) : RR
      }, tR.copy = function() {
        return nG(JR.domain(), GR).round(yR).clamp(JR.clamp()).unknown(RR)
      }, vJ.h.apply(tR, arguments), YJ(tR)
    }

    function UG(RR, JR) {
      let GR;
      if (void 0 === JR)
        for (const yR of RR) null != yR && (GR < yR || void 0 === GR && yR >= yR) && (GR = yR);
      else {
        let yR = -1;
        for (let tR of RR) null != (tR = JR(tR, ++yR, RR)) && (GR < tR || void 0 === GR && tR >= tR) && (GR = tR)
      }
      return GR
    }

    function WG(RR, JR) {
      let GR;
      if (void 0 === JR)
        for (const yR of RR) null != yR && (GR > yR || void 0 === GR && yR >= yR) && (GR = yR);
      else {
        let yR = -1;
        for (let tR of RR) null != (tR = JR(tR, ++yR, RR)) && (GR > tR || void 0 === GR && tR >= tR) && (GR = tR)
      }
      return GR
    }

    function AG() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wR;
      if (RR === wR) return CG;
      if ("function" !== typeof RR) throw new TypeError("compare is not a function");
      return (JR, GR) => {
        const yR = RR(JR, GR);
        return yR || 0 === yR ? yR : (0 === RR(GR, GR)) - (0 === RR(JR, JR))
      }
    }

    function CG(RR, JR) {
      return (null == RR || !(RR >= RR)) - (null == JR || !(JR >= JR)) || (RR < JR ? -1 : RR > JR ? 1 : 0)
    }

    function XG(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0,
        tR = arguments.length > 4 ? arguments[4] : void 0;
      if (JR = Math.floor(JR), GR = Math.floor(Math.max(0, GR)), yR = Math.floor(Math.min(RR.length - 1, yR)), !(GR <= JR && JR <= yR)) return RR;
      for (tR = void 0 === tR ? CG : AG(tR); yR > GR;) {
        if (yR - GR > 600) {
          const uR = yR - GR + 1,
            ZR = JR - GR + 1,
            qR = Math.log(uR),
            iR = .5 * Math.exp(2 * qR / 3),
            fR = .5 * Math.sqrt(qR * iR * (uR - iR) / uR) * (ZR - uR / 2 < 0 ? -1 : 1);
          XG(RR, JR, Math.max(GR, Math.floor(JR - ZR * iR / uR + fR)), Math.min(yR, Math.floor(JR + (uR - ZR) * iR / uR + fR)), tR)
        }
        const uR = RR[JR];
        let ZR = GR,
          qR = yR;
        for (MG(RR, GR, JR), tR(RR[yR], uR) > 0 && MG(RR, GR, yR); ZR < qR;) {
          for (MG(RR, ZR, qR), ++ZR, --qR; tR(RR[ZR], uR) < 0;) ++ZR;
          for (; tR(RR[qR], uR) > 0;) --qR
        }
        0 === tR(RR[GR], uR) ? MG(RR, GR, qR) : (++qR, MG(RR, qR, yR)), qR <= JR && (GR = qR + 1), JR <= qR && (yR = qR - 1)
      }
      return RR
    }

    function MG(RR, JR, GR) {
      const yR = RR[JR];
      RR[JR] = RR[GR], RR[GR] = yR
    }

    function BG(RR, JR, GR) {
      if (RR = Float64Array.from(function*(RR, JR) {
          if (void 0 === JR)
            for (let GR of RR) null != GR && (GR = +GR) >= GR && (yield GR);
          else {
            let GR = -1;
            for (let yR of RR) null != (yR = JR(yR, ++GR, RR)) && (yR = +yR) >= yR && (yield yR)
          }
        }(RR, GR)), (yR = RR.length) && !isNaN(JR = +JR)) {
        if (JR <= 0 || yR < 2) return WG(RR);
        if (JR >= 1) return UG(RR);
        var yR, tR = (yR - 1) * JR,
          uR = Math.floor(tR),
          ZR = UG(XG(RR, uR).subarray(0, uR + 1));
        return ZR + (WG(RR.subarray(uR + 1)) - ZR) * (tR - uR)
      }
    }

    function lG(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : LR;
      if ((yR = RR.length) && !isNaN(JR = +JR)) {
        if (JR <= 0 || yR < 2) return +GR(RR[0], 0, RR);
        if (JR >= 1) return +GR(RR[yR - 1], yR - 1, RR);
        var yR, tR = (yR - 1) * JR,
          uR = Math.floor(tR),
          ZR = +GR(RR[uR], uR, RR);
        return ZR + (+GR(RR[uR + 1], uR + 1, RR) - ZR) * (tR - uR)
      }
    }

    function pG() {
      var RR, JR = [],
        GR = [],
        yR = [];

      function tR() {
        var RR = 0,
          tR = Math.max(1, GR.length);
        for (yR = new Array(tR - 1); ++RR < tR;) yR[RR - 1] = lG(JR, RR / tR);
        return uR
      }

      function uR(JR) {
        return null == JR || isNaN(JR = +JR) ? RR : GR[WR(yR, JR)]
      }
      return uR.invertExtent = function(RR) {
        var tR = GR.indexOf(RR);
        return tR < 0 ? [NaN, NaN] : [tR > 0 ? yR[tR - 1] : JR[0], tR < yR.length ? yR[tR] : JR[JR.length - 1]]
      }, uR.domain = function(RR) {
        if (!arguments.length) return JR.slice();
        JR = [];
        for (let GR of RR) null == GR || isNaN(GR = +GR) || JR.push(GR);
        return JR.sort(wR), tR()
      }, uR.range = function(RR) {
        return arguments.length ? (GR = Array.from(RR), tR()) : GR.slice()
      }, uR.unknown = function(JR) {
        return arguments.length ? (RR = JR, uR) : RR
      }, uR.quantiles = function() {
        return yR.slice()
      }, uR.copy = function() {
        return pG().domain(JR).range(GR).unknown(RR)
      }, vJ.h.apply(uR, arguments)
    }

    function gG() {
      var RR, JR = 0,
        GR = 1,
        yR = 1,
        tR = [.5],
        uR = [0, 1];

      function ZR(JR) {
        return null != JR && JR <= JR ? uR[WR(tR, JR, 0, yR)] : RR
      }

      function qR() {
        var RR = -1;
        for (tR = new Array(yR); ++RR < yR;) tR[RR] = ((RR + 1) * GR - (RR - yR) * JR) / (yR + 1);
        return ZR
      }
      return ZR.domain = function(RR) {
        return arguments.length ? ([JR, GR] = RR, JR = +JR, GR = +GR, qR()) : [JR, GR]
      }, ZR.range = function(RR) {
        return arguments.length ? (yR = (uR = Array.from(RR)).length - 1, qR()) : uR.slice()
      }, ZR.invertExtent = function(RR) {
        var ZR = uR.indexOf(RR);
        return ZR < 0 ? [NaN, NaN] : ZR < 1 ? [JR, tR[0]] : ZR >= yR ? [tR[yR - 1], GR] : [tR[ZR - 1], tR[ZR]]
      }, ZR.unknown = function(JR) {
        return arguments.length ? (RR = JR, ZR) : ZR
      }, ZR.thresholds = function() {
        return tR.slice()
      }, ZR.copy = function() {
        return gG().domain([JR, GR]).range(uR).unknown(RR)
      }, vJ.h.apply(YJ(ZR), arguments)
    }

    function bG() {
      var RR, JR = [.5],
        GR = [0, 1],
        yR = 1;

      function tR(tR) {
        return null != tR && tR <= tR ? GR[WR(JR, tR, 0, yR)] : RR
      }
      return tR.domain = function(RR) {
        return arguments.length ? (JR = Array.from(RR), yR = Math.min(JR.length, GR.length - 1), tR) : JR.slice()
      }, tR.range = function(RR) {
        return arguments.length ? (GR = Array.from(RR), yR = Math.min(JR.length, GR.length - 1), tR) : GR.slice()
      }, tR.invertExtent = function(RR) {
        var yR = GR.indexOf(RR);
        return [JR[yR - 1], JR[yR]]
      }, tR.unknown = function(JR) {
        return arguments.length ? (RR = JR, tR) : RR
      }, tR.copy = function() {
        return bG().domain(JR).range(GR).unknown(RR)
      }, vJ.h.apply(tR, arguments)
    }
    const vG = 1e3,
      OG = 6e4,
      xG = 36e5,
      NG = 864e5,
      DG = 6048e5,
      HG = 2592e6,
      oG = 31536e6,
      cG = new Date,
      PG = new Date;

    function IG(RR, JR, GR, yR) {
      function tR(JR) {
        return RR(JR = 0 === arguments.length ? new Date : new Date(+JR)), JR
      }
      return tR.floor = JR => (RR(JR = new Date(+JR)), JR), tR.ceil = GR => (RR(GR = new Date(GR - 1)), JR(GR, 1), RR(GR), GR), tR.round = RR => {
        const JR = tR(RR),
          GR = tR.ceil(RR);
        return RR - JR < GR - RR ? JR : GR
      }, tR.offset = (RR, GR) => (JR(RR = new Date(+RR), null == GR ? 1 : Math.floor(GR)), RR), tR.range = (GR, yR, uR) => {
        const ZR = [];
        if (GR = tR.ceil(GR), uR = null == uR ? 1 : Math.floor(uR), !(GR < yR) || !(uR > 0)) return ZR;
        let qR;
        do {
          ZR.push(qR = new Date(+GR)), JR(GR, uR), RR(GR)
        } while (qR < GR && GR < yR);
        return ZR
      }, tR.filter = GR => IG((JR => {
        if (JR >= JR)
          for (; RR(JR), !GR(JR);) JR.setTime(JR - 1)
      }), ((RR, yR) => {
        if (RR >= RR)
          if (yR < 0)
            for (; ++yR <= 0;)
              for (; JR(RR, -1), !GR(RR););
          else
            for (; --yR >= 0;)
              for (; JR(RR, 1), !GR(RR););
      })), GR && (tR.count = (JR, yR) => (cG.setTime(+JR), PG.setTime(+yR), RR(cG), RR(PG), Math.floor(GR(cG, PG))), tR.every = RR => (RR = Math.floor(RR), isFinite(RR) && RR > 0 ? RR > 1 ? tR.filter(yR ? JR => yR(JR) % RR === 0 : JR => tR.count(0, JR) % RR === 0) : tR : null)), tR
    }
    const mG = IG((() => {}), ((RR, JR) => {
      RR.setTime(+RR + JR)
    }), ((RR, JR) => JR - RR));
    mG.every = RR => (RR = Math.floor(RR), isFinite(RR) && RR > 0 ? RR > 1 ? IG((JR => {
      JR.setTime(Math.floor(JR / RR) * RR)
    }), ((JR, GR) => {
      JR.setTime(+JR + GR * RR)
    }), ((JR, GR) => (GR - JR) / RR)) : mG : null);
    mG.range;
    const zG = IG((RR => {
        RR.setTime(RR - RR.getMilliseconds())
      }), ((RR, JR) => {
        RR.setTime(+RR + JR * vG)
      }), ((RR, JR) => (JR - RR) / vG), (RR => RR.getUTCSeconds())),
      SG = (zG.range, IG((RR => {
        RR.setTime(RR - RR.getMilliseconds() - RR.getSeconds() * vG)
      }), ((RR, JR) => {
        RR.setTime(+RR + JR * OG)
      }), ((RR, JR) => (JR - RR) / OG), (RR => RR.getMinutes()))),
      jG = (SG.range, IG((RR => {
        RR.setUTCSeconds(0, 0)
      }), ((RR, JR) => {
        RR.setTime(+RR + JR * OG)
      }), ((RR, JR) => (JR - RR) / OG), (RR => RR.getUTCMinutes()))),
      dG = (jG.range, IG((RR => {
        RR.setTime(RR - RR.getMilliseconds() - RR.getSeconds() * vG - RR.getMinutes() * OG)
      }), ((RR, JR) => {
        RR.setTime(+RR + JR * xG)
      }), ((RR, JR) => (JR - RR) / xG), (RR => RR.getHours()))),
      EG = (dG.range, IG((RR => {
        RR.setUTCMinutes(0, 0, 0)
      }), ((RR, JR) => {
        RR.setTime(+RR + JR * xG)
      }), ((RR, JR) => (JR - RR) / xG), (RR => RR.getUTCHours()))),
      YG = (EG.range, IG((RR => RR.setHours(0, 0, 0, 0)), ((RR, JR) => RR.setDate(RR.getDate() + JR)), ((RR, JR) => (JR - RR - (JR.getTimezoneOffset() - RR.getTimezoneOffset()) * OG) / NG), (RR => RR.getDate() - 1))),
      kG = (YG.range, IG((RR => {
        RR.setUTCHours(0, 0, 0, 0)
      }), ((RR, JR) => {
        RR.setUTCDate(RR.getUTCDate() + JR)
      }), ((RR, JR) => (JR - RR) / NG), (RR => RR.getUTCDate() - 1))),
      QG = (kG.range, IG((RR => {
        RR.setUTCHours(0, 0, 0, 0)
      }), ((RR, JR) => {
        RR.setUTCDate(RR.getUTCDate() + JR)
      }), ((RR, JR) => (JR - RR) / NG), (RR => Math.floor(RR / NG))));
    QG.range;

    function FG(RR) {
      return IG((JR => {
        JR.setDate(JR.getDate() - (JR.getDay() + 7 - RR) % 7), JR.setHours(0, 0, 0, 0)
      }), ((RR, JR) => {
        RR.setDate(RR.getDate() + 7 * JR)
      }), ((RR, JR) => (JR - RR - (JR.getTimezoneOffset() - RR.getTimezoneOffset()) * OG) / DG))
    }
    const TG = FG(0),
      sG = FG(1),
      hG = FG(2),
      Ry = FG(3),
      Jy = FG(4),
      Gy = FG(5),
      yy = FG(6);
    TG.range, sG.range, hG.range, Ry.range, Jy.range, Gy.range, yy.range;

    function ty(RR) {
      return IG((JR => {
        JR.setUTCDate(JR.getUTCDate() - (JR.getUTCDay() + 7 - RR) % 7), JR.setUTCHours(0, 0, 0, 0)
      }), ((RR, JR) => {
        RR.setUTCDate(RR.getUTCDate() + 7 * JR)
      }), ((RR, JR) => (JR - RR) / DG))
    }
    const uy = ty(0),
      Zy = ty(1),
      qy = ty(2),
      iy = ty(3),
      fy = ty(4),
      Vy = ty(5),
      Ky = ty(6),
      wy = (uy.range, Zy.range, qy.range, iy.range, fy.range, Vy.range, Ky.range, IG((RR => {
        RR.setDate(1), RR.setHours(0, 0, 0, 0)
      }), ((RR, JR) => {
        RR.setMonth(RR.getMonth() + JR)
      }), ((RR, JR) => JR.getMonth() - RR.getMonth() + 12 * (JR.getFullYear() - RR.getFullYear())), (RR => RR.getMonth()))),
      ry = (wy.range, IG((RR => {
        RR.setUTCDate(1), RR.setUTCHours(0, 0, 0, 0)
      }), ((RR, JR) => {
        RR.setUTCMonth(RR.getUTCMonth() + JR)
      }), ((RR, JR) => JR.getUTCMonth() - RR.getUTCMonth() + 12 * (JR.getUTCFullYear() - RR.getUTCFullYear())), (RR => RR.getUTCMonth()))),
      ey = (ry.range, IG((RR => {
        RR.setMonth(0, 1), RR.setHours(0, 0, 0, 0)
      }), ((RR, JR) => {
        RR.setFullYear(RR.getFullYear() + JR)
      }), ((RR, JR) => JR.getFullYear() - RR.getFullYear()), (RR => RR.getFullYear())));
    ey.every = RR => isFinite(RR = Math.floor(RR)) && RR > 0 ? IG((JR => {
      JR.setFullYear(Math.floor(JR.getFullYear() / RR) * RR), JR.setMonth(0, 1), JR.setHours(0, 0, 0, 0)
    }), ((JR, GR) => {
      JR.setFullYear(JR.getFullYear() + GR * RR)
    })) : null;
    ey.range;
    const ay = IG((RR => {
      RR.setUTCMonth(0, 1), RR.setUTCHours(0, 0, 0, 0)
    }), ((RR, JR) => {
      RR.setUTCFullYear(RR.getUTCFullYear() + JR)
    }), ((RR, JR) => JR.getUTCFullYear() - RR.getUTCFullYear()), (RR => RR.getUTCFullYear()));
    ay.every = RR => isFinite(RR = Math.floor(RR)) && RR > 0 ? IG((JR => {
      JR.setUTCFullYear(Math.floor(JR.getUTCFullYear() / RR) * RR), JR.setUTCMonth(0, 1), JR.setUTCHours(0, 0, 0, 0)
    }), ((JR, GR) => {
      JR.setUTCFullYear(JR.getUTCFullYear() + GR * RR)
    })) : null;
    ay.range;

    function Ly(RR, JR, GR, yR, tR, uR) {
      const ZR = [
        [zG, 1, vG],
        [zG, 5, 5e3],
        [zG, 15, 15e3],
        [zG, 30, 3e4],
        [uR, 1, OG],
        [uR, 5, 3e5],
        [uR, 15, 9e5],
        [uR, 30, 18e5],
        [tR, 1, xG],
        [tR, 3, 108e5],
        [tR, 6, 216e5],
        [tR, 12, 432e5],
        [yR, 1, NG],
        [yR, 2, 1728e5],
        [GR, 1, DG],
        [JR, 1, HG],
        [JR, 3, 7776e6],
        [RR, 1, oG]
      ];

      function qR(JR, GR, yR) {
        const tR = Math.abs(GR - JR) / yR,
          uR = eR((RR => {
            let [, , JR] = RR;
            return JR
          })).right(ZR, tR);
        if (uR === ZR.length) return RR.every(KR(JR / oG, GR / oG, yR));
        if (0 === uR) return mG.every(Math.max(KR(JR, GR, yR), 1));
        const [qR, iR] = ZR[tR / ZR[uR - 1][2] < ZR[uR][2] / tR ? uR - 1 : uR];
        return qR.every(iR)
      }
      return [function(RR, JR, GR) {
        const yR = JR < RR;
        yR && ([RR, JR] = [JR, RR]);
        const tR = GR && "function" === typeof GR.range ? GR : qR(RR, JR, GR),
          uR = tR ? tR.range(RR, +JR + 1) : [];
        return yR ? uR.reverse() : uR
      }, qR]
    }
    const [ny, Uy] = Ly(ay, ry, uy, QG, EG, jG), [Wy, Ay] = Ly(ey, wy, TG, YG, dG, SG);

    function Cy(RR) {
      if (0 <= RR.y && RR.y < 100) {
        var JR = new Date(-1, RR.m, RR.d, RR.H, RR.M, RR.S, RR.L);
        return JR.setFullYear(RR.y), JR
      }
      return new Date(RR.y, RR.m, RR.d, RR.H, RR.M, RR.S, RR.L)
    }

    function Xy(RR) {
      if (0 <= RR.y && RR.y < 100) {
        var JR = new Date(Date.UTC(-1, RR.m, RR.d, RR.H, RR.M, RR.S, RR.L));
        return JR.setUTCFullYear(RR.y), JR
      }
      return new Date(Date.UTC(RR.y, RR.m, RR.d, RR.H, RR.M, RR.S, RR.L))
    }

    function My(RR, JR, GR) {
      return {
        y: RR,
        m: JR,
        d: GR,
        H: 0,
        M: 0,
        S: 0,
        L: 0
      }
    }
    var By, ly, py, gy = {
        "-": "",
        _: " ",
        0: "0"
      },
      by = /^\s*\d+/,
      vy = /^%/,
      Oy = /[\\^$*+?|[\]().{}]/g;

    function xy(RR, JR, GR) {
      var yR = RR < 0 ? "-" : "",
        tR = (yR ? -RR : RR) + "",
        uR = tR.length;
      return yR + (uR < GR ? new Array(GR - uR + 1).join(JR) + tR : tR)
    }

    function Ny(RR) {
      return RR.replace(Oy, "\\$&")
    }

    function Dy(RR) {
      return new RegExp("^(?:" + RR.map(Ny).join("|") + ")", "i")
    }

    function Hy(RR) {
      return new Map(RR.map(((RR, JR) => [RR.toLowerCase(), JR])))
    }

    function oy(RR, JR, GR) {
      var yR = by.exec(JR.slice(GR, GR + 1));
      return yR ? (RR.w = +yR[0], GR + yR[0].length) : -1
    }

    function cy(RR, JR, GR) {
      var yR = by.exec(JR.slice(GR, GR + 1));
      return yR ? (RR.u = +yR[0], GR + yR[0].length) : -1
    }

    function Py(RR, JR, GR) {
      var yR = by.exec(JR.slice(GR, GR + 2));
      return yR ? (RR.U = +yR[0], GR + yR[0].length) : -1
    }

    function Iy(RR, JR, GR) {
      var yR = by.exec(JR.slice(GR, GR + 2));
      return yR ? (RR.V = +yR[0], GR + yR[0].length) : -1
    }

    function my(RR, JR, GR) {
      var yR = by.exec(JR.slice(GR, GR + 2));
      return yR ? (RR.W = +yR[0], GR + yR[0].length) : -1
    }

    function zy(RR, JR, GR) {
      var yR = by.exec(JR.slice(GR, GR + 4));
      return yR ? (RR.y = +yR[0], GR + yR[0].length) : -1
    }

    function Sy(RR, JR, GR) {
      var yR = by.exec(JR.slice(GR, GR + 2));
      return yR ? (RR.y = +yR[0] + (+yR[0] > 68 ? 1900 : 2e3), GR + yR[0].length) : -1
    }

    function jy(RR, JR, GR) {
      var yR = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(JR.slice(GR, GR + 6));
      return yR ? (RR.Z = yR[1] ? 0 : -(yR[2] + (yR[3] || "00")), GR + yR[0].length) : -1
    }

    function dy(RR, JR, GR) {
      var yR = by.exec(JR.slice(GR, GR + 1));
      return yR ? (RR.q = 3 * yR[0] - 3, GR + yR[0].length) : -1
    }

    function Ey(RR, JR, GR) {
      var yR = by.exec(JR.slice(GR, GR + 2));
      return yR ? (RR.m = yR[0] - 1, GR + yR[0].length) : -1
    }

    function Yy(RR, JR, GR) {
      var yR = by.exec(JR.slice(GR, GR + 2));
      return yR ? (RR.d = +yR[0], GR + yR[0].length) : -1
    }

    function ky(RR, JR, GR) {
      var yR = by.exec(JR.slice(GR, GR + 3));
      return yR ? (RR.m = 0, RR.d = +yR[0], GR + yR[0].length) : -1
    }

    function Qy(RR, JR, GR) {
      var yR = by.exec(JR.slice(GR, GR + 2));
      return yR ? (RR.H = +yR[0], GR + yR[0].length) : -1
    }

    function Fy(RR, JR, GR) {
      var yR = by.exec(JR.slice(GR, GR + 2));
      return yR ? (RR.M = +yR[0], GR + yR[0].length) : -1
    }

    function Ty(RR, JR, GR) {
      var yR = by.exec(JR.slice(GR, GR + 2));
      return yR ? (RR.S = +yR[0], GR + yR[0].length) : -1
    }

    function sy(RR, JR, GR) {
      var yR = by.exec(JR.slice(GR, GR + 3));
      return yR ? (RR.L = +yR[0], GR + yR[0].length) : -1
    }

    function hy(RR, JR, GR) {
      var yR = by.exec(JR.slice(GR, GR + 6));
      return yR ? (RR.L = Math.floor(yR[0] / 1e3), GR + yR[0].length) : -1
    }

    function Rt(RR, JR, GR) {
      var yR = vy.exec(JR.slice(GR, GR + 1));
      return yR ? GR + yR[0].length : -1
    }

    function Jt(RR, JR, GR) {
      var yR = by.exec(JR.slice(GR));
      return yR ? (RR.Q = +yR[0], GR + yR[0].length) : -1
    }

    function Gt(RR, JR, GR) {
      var yR = by.exec(JR.slice(GR));
      return yR ? (RR.s = +yR[0], GR + yR[0].length) : -1
    }

    function yt(RR, JR) {
      return xy(RR.getDate(), JR, 2)
    }

    function tt(RR, JR) {
      return xy(RR.getHours(), JR, 2)
    }

    function ut(RR, JR) {
      return xy(RR.getHours() % 12 || 12, JR, 2)
    }

    function Zt(RR, JR) {
      return xy(1 + YG.count(ey(RR), RR), JR, 3)
    }

    function qt(RR, JR) {
      return xy(RR.getMilliseconds(), JR, 3)
    }

    function it(RR, JR) {
      return qt(RR, JR) + "000"
    }

    function ft(RR, JR) {
      return xy(RR.getMonth() + 1, JR, 2)
    }

    function Vt(RR, JR) {
      return xy(RR.getMinutes(), JR, 2)
    }

    function Kt(RR, JR) {
      return xy(RR.getSeconds(), JR, 2)
    }

    function wt(RR) {
      var JR = RR.getDay();
      return 0 === JR ? 7 : JR
    }

    function rt(RR, JR) {
      return xy(TG.count(ey(RR) - 1, RR), JR, 2)
    }

    function et(RR) {
      var JR = RR.getDay();
      return JR >= 4 || 0 === JR ? Jy(RR) : Jy.ceil(RR)
    }

    function Lt(RR, JR) {
      return RR = et(RR), xy(Jy.count(ey(RR), RR) + (4 === ey(RR).getDay()), JR, 2)
    }

    function nt(RR) {
      return RR.getDay()
    }

    function Ut(RR, JR) {
      return xy(sG.count(ey(RR) - 1, RR), JR, 2)
    }

    function Wt(RR, JR) {
      return xy(RR.getFullYear() % 100, JR, 2)
    }

    function At(RR, JR) {
      return xy((RR = et(RR)).getFullYear() % 100, JR, 2)
    }

    function Ct(RR, JR) {
      return xy(RR.getFullYear() % 1e4, JR, 4)
    }

    function Xt(RR, JR) {
      var GR = RR.getDay();
      return xy((RR = GR >= 4 || 0 === GR ? Jy(RR) : Jy.ceil(RR)).getFullYear() % 1e4, JR, 4)
    }

    function Mt(RR) {
      var JR = RR.getTimezoneOffset();
      return (JR > 0 ? "-" : (JR *= -1, "+")) + xy(JR / 60 | 0, "0", 2) + xy(JR % 60, "0", 2)
    }

    function Bt(RR, JR) {
      return xy(RR.getUTCDate(), JR, 2)
    }

    function lt(RR, JR) {
      return xy(RR.getUTCHours(), JR, 2)
    }

    function pt(RR, JR) {
      return xy(RR.getUTCHours() % 12 || 12, JR, 2)
    }

    function gt(RR, JR) {
      return xy(1 + kG.count(ay(RR), RR), JR, 3)
    }

    function bt(RR, JR) {
      return xy(RR.getUTCMilliseconds(), JR, 3)
    }

    function vt(RR, JR) {
      return bt(RR, JR) + "000"
    }

    function Ot(RR, JR) {
      return xy(RR.getUTCMonth() + 1, JR, 2)
    }

    function xt(RR, JR) {
      return xy(RR.getUTCMinutes(), JR, 2)
    }

    function Nt(RR, JR) {
      return xy(RR.getUTCSeconds(), JR, 2)
    }

    function Dt(RR) {
      var JR = RR.getUTCDay();
      return 0 === JR ? 7 : JR
    }

    function Ht(RR, JR) {
      return xy(uy.count(ay(RR) - 1, RR), JR, 2)
    }

    function ot(RR) {
      var JR = RR.getUTCDay();
      return JR >= 4 || 0 === JR ? fy(RR) : fy.ceil(RR)
    }

    function ct(RR, JR) {
      return RR = ot(RR), xy(fy.count(ay(RR), RR) + (4 === ay(RR).getUTCDay()), JR, 2)
    }

    function Pt(RR) {
      return RR.getUTCDay()
    }

    function It(RR, JR) {
      return xy(Zy.count(ay(RR) - 1, RR), JR, 2)
    }

    function mt(RR, JR) {
      return xy(RR.getUTCFullYear() % 100, JR, 2)
    }

    function zt(RR, JR) {
      return xy((RR = ot(RR)).getUTCFullYear() % 100, JR, 2)
    }

    function St(RR, JR) {
      return xy(RR.getUTCFullYear() % 1e4, JR, 4)
    }

    function jt(RR, JR) {
      var GR = RR.getUTCDay();
      return xy((RR = GR >= 4 || 0 === GR ? fy(RR) : fy.ceil(RR)).getUTCFullYear() % 1e4, JR, 4)
    }

    function dt() {
      return "+0000"
    }

    function Et() {
      return "%"
    }

    function Yt(RR) {
      return +RR
    }

    function kt(RR) {
      return Math.floor(+RR / 1e3)
    }

    function Qt(RR) {
      return new Date(RR)
    }

    function Ft(RR) {
      return RR instanceof Date ? +RR : +new Date(+RR)
    }

    function Tt(RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR) {
      var VR = gJ(),
        KR = VR.invert,
        wR = VR.domain,
        rR = fR(".%L"),
        eR = fR(":%S"),
        aR = fR("%I:%M"),
        LR = fR("%I %p"),
        nR = fR("%a %d"),
        UR = fR("%b %d"),
        WR = fR("%B"),
        AR = fR("%Y");

      function CR(RR) {
        return (iR(RR) < RR ? rR : qR(RR) < RR ? eR : ZR(RR) < RR ? aR : uR(RR) < RR ? LR : yR(RR) < RR ? tR(RR) < RR ? nR : UR : GR(RR) < RR ? WR : AR)(RR)
      }
      return VR.invert = function(RR) {
        return new Date(KR(RR))
      }, VR.domain = function(RR) {
        return arguments.length ? wR(Array.from(RR, Ft)) : wR().map(Qt)
      }, VR.ticks = function(JR) {
        var GR = wR();
        return RR(GR[0], GR[GR.length - 1], null == JR ? 10 : JR)
      }, VR.tickFormat = function(RR, JR) {
        return null == JR ? CR : fR(JR)
      }, VR.nice = function(RR) {
        var GR = wR();
        return RR && "function" === typeof RR.range || (RR = JR(GR[0], GR[GR.length - 1], null == RR ? 10 : RR)), RR ? wR(FJ(GR, RR)) : VR
      }, VR.copy = function() {
        return lJ(VR, Tt(RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR))
      }, VR
    }

    function st() {
      return vJ.h.apply(Tt(Wy, Ay, ey, wy, TG, YG, dG, SG, zG, ly).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
    }

    function ht() {
      return vJ.h.apply(Tt(ny, Uy, ay, ry, uy, kG, EG, jG, zG, py).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
    }

    function Ru() {
      var RR, JR, GR, yR, tR, uR = 0,
        ZR = 1,
        qR = CJ,
        iR = !1;

      function fR(JR) {
        return null == JR || isNaN(JR = +JR) ? tR : qR(0 === GR ? .5 : (JR = (yR(JR) - RR) * GR, iR ? Math.max(0, Math.min(1, JR)) : JR))
      }

      function VR(RR) {
        return function(JR) {
          var GR, yR;
          return arguments.length ? ([GR, yR] = JR, qR = RR(GR, yR), fR) : [qR(0), qR(1)]
        }
      }
      return fR.domain = function(tR) {
          return arguments.length ? ([uR, ZR] = tR, RR = yR(uR = +uR), JR = yR(ZR = +ZR), GR = RR === JR ? 0 : 1 / (JR - RR), fR) : [uR, ZR]
        }, fR.clamp = function(RR) {
          return arguments.length ? (iR = !!RR, fR) : iR
        }, fR.interpolator = function(RR) {
          return arguments.length ? (qR = RR, fR) : qR
        }, fR.range = VR(nJ), fR.rangeRound = VR(UJ), fR.unknown = function(RR) {
          return arguments.length ? (tR = RR, fR) : tR
        },
        function(tR) {
          return yR = tR, RR = tR(uR), JR = tR(ZR), GR = RR === JR ? 0 : 1 / (JR - RR), fR
        }
    }

    function Ju(RR, JR) {
      return JR.domain(RR.domain()).interpolator(RR.interpolator()).clamp(RR.clamp()).unknown(RR.unknown())
    }

    function Gu() {
      var RR = YJ(Ru()(CJ));
      return RR.copy = function() {
        return Ju(RR, Gu())
      }, vJ.e.apply(RR, arguments)
    }

    function yu() {
      var RR = yG(Ru()).domain([1, 10]);
      return RR.copy = function() {
        return Ju(RR, yu()).base(RR.base())
      }, vJ.e.apply(RR, arguments)
    }

    function tu() {
      var RR = qG(Ru());
      return RR.copy = function() {
        return Ju(RR, tu()).constant(RR.constant())
      }, vJ.e.apply(RR, arguments)
    }

    function uu() {
      var RR = rG(Ru());
      return RR.copy = function() {
        return Ju(RR, uu()).exponent(RR.exponent())
      }, vJ.e.apply(RR, arguments)
    }

    function Zu() {
      return uu.apply(null, arguments).exponent(.5)
    }

    function qu() {
      var RR = [],
        JR = CJ;

      function GR(GR) {
        if (null != GR && !isNaN(GR = +GR)) return JR((WR(RR, GR, 1) - 1) / (RR.length - 1))
      }
      return GR.domain = function(JR) {
        if (!arguments.length) return RR.slice();
        RR = [];
        for (let GR of JR) null == GR || isNaN(GR = +GR) || RR.push(GR);
        return RR.sort(wR), GR
      }, GR.interpolator = function(RR) {
        return arguments.length ? (JR = RR, GR) : JR
      }, GR.range = function() {
        return RR.map(((GR, yR) => JR(yR / (RR.length - 1))))
      }, GR.quantiles = function(JR) {
        return Array.from({
          length: JR + 1
        }, ((GR, yR) => BG(RR, yR / JR)))
      }, GR.copy = function() {
        return qu(JR).domain(RR)
      }, vJ.e.apply(GR, arguments)
    }

    function iu() {
      var RR, JR, GR, yR, tR, uR, ZR, qR = 0,
        iR = .5,
        fR = 1,
        VR = 1,
        KR = CJ,
        wR = !1;

      function rR(RR) {
        return isNaN(RR = +RR) ? ZR : (RR = .5 + ((RR = +uR(RR)) - JR) * (VR * RR < VR * JR ? yR : tR), KR(wR ? Math.max(0, Math.min(1, RR)) : RR))
      }

      function eR(RR) {
        return function(JR) {
          var GR, yR, tR;
          return arguments.length ? ([GR, yR, tR] = JR, KR = function(RR, JR) {
            void 0 === JR && (JR = RR, RR = nJ);
            for (var GR = 0, yR = JR.length - 1, tR = JR[0], uR = new Array(yR < 0 ? 0 : yR); GR < yR;) uR[GR] = RR(tR, tR = JR[++GR]);
            return function(RR) {
              var JR = Math.max(0, Math.min(yR - 1, Math.floor(RR *= yR)));
              return uR[JR](RR - JR)
            }
          }(RR, [GR, yR, tR]), rR) : [KR(0), KR(.5), KR(1)]
        }
      }
      return rR.domain = function(ZR) {
          return arguments.length ? ([qR, iR, fR] = ZR, RR = uR(qR = +qR), JR = uR(iR = +iR), GR = uR(fR = +fR), yR = RR === JR ? 0 : .5 / (JR - RR), tR = JR === GR ? 0 : .5 / (GR - JR), VR = JR < RR ? -1 : 1, rR) : [qR, iR, fR]
        }, rR.clamp = function(RR) {
          return arguments.length ? (wR = !!RR, rR) : wR
        }, rR.interpolator = function(RR) {
          return arguments.length ? (KR = RR, rR) : KR
        }, rR.range = eR(nJ), rR.rangeRound = eR(UJ), rR.unknown = function(RR) {
          return arguments.length ? (ZR = RR, rR) : ZR
        },
        function(ZR) {
          return uR = ZR, RR = ZR(qR), JR = ZR(iR), GR = ZR(fR), yR = RR === JR ? 0 : .5 / (JR - RR), tR = JR === GR ? 0 : .5 / (GR - JR), VR = JR < RR ? -1 : 1, rR
        }
    }

    function fu() {
      var RR = YJ(iu()(CJ));
      return RR.copy = function() {
        return Ju(RR, fu())
      }, vJ.e.apply(RR, arguments)
    }

    function Vu() {
      var RR = yG(iu()).domain([.1, 1, 10]);
      return RR.copy = function() {
        return Ju(RR, Vu()).base(RR.base())
      }, vJ.e.apply(RR, arguments)
    }

    function Ku() {
      var RR = qG(iu());
      return RR.copy = function() {
        return Ju(RR, Ku()).constant(RR.constant())
      }, vJ.e.apply(RR, arguments)
    }

    function wu() {
      var RR = rG(iu());
      return RR.copy = function() {
        return Ju(RR, wu()).exponent(RR.exponent())
      }, vJ.e.apply(RR, arguments)
    }

    function ru() {
      return wu.apply(null, arguments).exponent(.5)
    }

    function eu(RR, JR) {
      if ((tR = RR.length) > 1)
        for (var GR, yR, tR, uR = 1, ZR = RR[JR[0]], qR = ZR.length; uR < tR; ++uR)
          for (yR = ZR, ZR = RR[JR[uR]], GR = 0; GR < qR; ++GR) ZR[GR][1] += ZR[GR][0] = isNaN(yR[GR][1]) ? yR[GR][0] : yR[GR][1]
    }! function(RR) {
      By = function(RR) {
        var JR = RR.dateTime,
          GR = RR.date,
          yR = RR.time,
          tR = RR.periods,
          uR = RR.days,
          ZR = RR.shortDays,
          qR = RR.months,
          iR = RR.shortMonths,
          fR = Dy(tR),
          VR = Hy(tR),
          KR = Dy(uR),
          wR = Hy(uR),
          rR = Dy(ZR),
          eR = Hy(ZR),
          aR = Dy(qR),
          LR = Hy(qR),
          nR = Dy(iR),
          UR = Hy(iR),
          WR = {
            a: function(RR) {
              return ZR[RR.getDay()]
            },
            A: function(RR) {
              return uR[RR.getDay()]
            },
            b: function(RR) {
              return iR[RR.getMonth()]
            },
            B: function(RR) {
              return qR[RR.getMonth()]
            },
            c: null,
            d: yt,
            e: yt,
            f: it,
            g: At,
            G: Xt,
            H: tt,
            I: ut,
            j: Zt,
            L: qt,
            m: ft,
            M: Vt,
            p: function(RR) {
              return tR[+(RR.getHours() >= 12)]
            },
            q: function(RR) {
              return 1 + ~~(RR.getMonth() / 3)
            },
            Q: Yt,
            s: kt,
            S: Kt,
            u: wt,
            U: rt,
            V: Lt,
            w: nt,
            W: Ut,
            x: null,
            X: null,
            y: Wt,
            Y: Ct,
            Z: Mt,
            "%": Et
          },
          AR = {
            a: function(RR) {
              return ZR[RR.getUTCDay()]
            },
            A: function(RR) {
              return uR[RR.getUTCDay()]
            },
            b: function(RR) {
              return iR[RR.getUTCMonth()]
            },
            B: function(RR) {
              return qR[RR.getUTCMonth()]
            },
            c: null,
            d: Bt,
            e: Bt,
            f: vt,
            g: zt,
            G: jt,
            H: lt,
            I: pt,
            j: gt,
            L: bt,
            m: Ot,
            M: xt,
            p: function(RR) {
              return tR[+(RR.getUTCHours() >= 12)]
            },
            q: function(RR) {
              return 1 + ~~(RR.getUTCMonth() / 3)
            },
            Q: Yt,
            s: kt,
            S: Nt,
            u: Dt,
            U: Ht,
            V: ct,
            w: Pt,
            W: It,
            x: null,
            X: null,
            y: mt,
            Y: St,
            Z: dt,
            "%": Et
          },
          CR = {
            a: function(RR, JR, GR) {
              var yR = rR.exec(JR.slice(GR));
              return yR ? (RR.w = eR.get(yR[0].toLowerCase()), GR + yR[0].length) : -1
            },
            A: function(RR, JR, GR) {
              var yR = KR.exec(JR.slice(GR));
              return yR ? (RR.w = wR.get(yR[0].toLowerCase()), GR + yR[0].length) : -1
            },
            b: function(RR, JR, GR) {
              var yR = nR.exec(JR.slice(GR));
              return yR ? (RR.m = UR.get(yR[0].toLowerCase()), GR + yR[0].length) : -1
            },
            B: function(RR, JR, GR) {
              var yR = aR.exec(JR.slice(GR));
              return yR ? (RR.m = LR.get(yR[0].toLowerCase()), GR + yR[0].length) : -1
            },
            c: function(RR, GR, yR) {
              return BR(RR, JR, GR, yR)
            },
            d: Yy,
            e: Yy,
            f: hy,
            g: Sy,
            G: zy,
            H: Qy,
            I: Qy,
            j: ky,
            L: sy,
            m: Ey,
            M: Fy,
            p: function(RR, JR, GR) {
              var yR = fR.exec(JR.slice(GR));
              return yR ? (RR.p = VR.get(yR[0].toLowerCase()), GR + yR[0].length) : -1
            },
            q: dy,
            Q: Jt,
            s: Gt,
            S: Ty,
            u: cy,
            U: Py,
            V: Iy,
            w: oy,
            W: my,
            x: function(RR, JR, yR) {
              return BR(RR, GR, JR, yR)
            },
            X: function(RR, JR, GR) {
              return BR(RR, yR, JR, GR)
            },
            y: Sy,
            Y: zy,
            Z: jy,
            "%": Rt
          };

        function XR(RR, JR) {
          return function(GR) {
            var yR, tR, uR, ZR = [],
              qR = -1,
              iR = 0,
              fR = RR.length;
            for (GR instanceof Date || (GR = new Date(+GR)); ++qR < fR;) 37 === RR.charCodeAt(qR) && (ZR.push(RR.slice(iR, qR)), null != (tR = gy[yR = RR.charAt(++qR)]) ? yR = RR.charAt(++qR) : tR = "e" === yR ? " " : "0", (uR = JR[yR]) && (yR = uR(GR, tR)), ZR.push(yR), iR = qR + 1);
            return ZR.push(RR.slice(iR, qR)), ZR.join("")
          }
        }

        function MR(RR, JR) {
          return function(GR) {
            var yR, tR, uR = My(1900, void 0, 1);
            if (BR(uR, RR, GR += "", 0) != GR.length) return null;
            if ("Q" in uR) return new Date(uR.Q);
            if ("s" in uR) return new Date(1e3 * uR.s + ("L" in uR ? uR.L : 0));
            if (JR && !("Z" in uR) && (uR.Z = 0), "p" in uR && (uR.H = uR.H % 12 + 12 * uR.p), void 0 === uR.m && (uR.m = "q" in uR ? uR.q : 0), "V" in uR) {
              if (uR.V < 1 || uR.V > 53) return null;
              "w" in uR || (uR.w = 1), "Z" in uR ? (tR = (yR = Xy(My(uR.y, 0, 1))).getUTCDay(), yR = tR > 4 || 0 === tR ? Zy.ceil(yR) : Zy(yR), yR = kG.offset(yR, 7 * (uR.V - 1)), uR.y = yR.getUTCFullYear(), uR.m = yR.getUTCMonth(), uR.d = yR.getUTCDate() + (uR.w + 6) % 7) : (tR = (yR = Cy(My(uR.y, 0, 1))).getDay(), yR = tR > 4 || 0 === tR ? sG.ceil(yR) : sG(yR), yR = YG.offset(yR, 7 * (uR.V - 1)), uR.y = yR.getFullYear(), uR.m = yR.getMonth(), uR.d = yR.getDate() + (uR.w + 6) % 7)
            } else("W" in uR || "U" in uR) && ("w" in uR || (uR.w = "u" in uR ? uR.u % 7 : "W" in uR ? 1 : 0), tR = "Z" in uR ? Xy(My(uR.y, 0, 1)).getUTCDay() : Cy(My(uR.y, 0, 1)).getDay(), uR.m = 0, uR.d = "W" in uR ? (uR.w + 6) % 7 + 7 * uR.W - (tR + 5) % 7 : uR.w + 7 * uR.U - (tR + 6) % 7);
            return "Z" in uR ? (uR.H += uR.Z / 100 | 0, uR.M += uR.Z % 100, Xy(uR)) : Cy(uR)
          }
        }

        function BR(RR, JR, GR, yR) {
          for (var tR, uR, ZR = 0, qR = JR.length, iR = GR.length; ZR < qR;) {
            if (yR >= iR) return -1;
            if (37 === (tR = JR.charCodeAt(ZR++))) {
              if (tR = JR.charAt(ZR++), !(uR = CR[tR in gy ? JR.charAt(ZR++) : tR]) || (yR = uR(RR, GR, yR)) < 0) return -1
            } else if (tR != GR.charCodeAt(yR++)) return -1
          }
          return yR
        }
        return WR.x = XR(GR, WR), WR.X = XR(yR, WR), WR.c = XR(JR, WR), AR.x = XR(GR, AR), AR.X = XR(yR, AR), AR.c = XR(JR, AR), {
          format: function(RR) {
            var JR = XR(RR += "", WR);
            return JR.toString = function() {
              return RR
            }, JR
          },
          parse: function(RR) {
            var JR = MR(RR += "", !1);
            return JR.toString = function() {
              return RR
            }, JR
          },
          utcFormat: function(RR) {
            var JR = XR(RR += "", AR);
            return JR.toString = function() {
              return RR
            }, JR
          },
          utcParse: function(RR) {
            var JR = MR(RR += "", !0);
            return JR.toString = function() {
              return RR
            }, JR
          }
        }
      }(RR), ly = By.format, By.parse, py = By.utcFormat, By.utcParse
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
    var au = GR(7294),
      Lu = GR(7159);

    function nu(RR) {
      for (var JR = RR.length, GR = new Array(JR); --JR >= 0;) GR[JR] = JR;
      return GR
    }

    function Uu(RR, JR) {
      return RR[JR]
    }

    function Wu(RR) {
      const JR = [];
      return JR.key = RR, JR
    }
    var Au = GR(7219),
      Cu = GR.n(Au),
      Xu = GR(7243),
      Mu = GR.n(Xu),
      Bu = GR(6516),
      lu = GR.n(Bu),
      pu = GR(6357),
      gu = GR.n(pu),
      bu = GR(6237),
      vu = GR.n(bu),
      Ou = GR(6262),
      xu = GR.n(Ou),
      Nu = GR(7254),
      Du = GR.n(Nu),
      Hu = GR(6244),
      ou = GR.n(Hu),
      cu = GR(7113),
      Pu = GR.n(cu),
      Iu = GR(7269),
      mu = GR.n(Iu),
      zu = GR(6600),
      Su = GR.n(zu),
      ju = GR(7276),
      du = GR.n(ju);

    function Eu(RR) {
      return function(RR) {
        if (Array.isArray(RR)) return Yu(RR)
      }(RR) || function(RR) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(RR)) return Array.from(RR)
      }(RR) || function(RR, JR) {
        if (!RR) return;
        if ("string" === typeof RR) return Yu(RR, JR);
        var GR = Object.prototype.toString.call(RR).slice(8, -1);
        "Object" === GR && RR.constructor && (GR = RR.constructor.name);
        if ("Map" === GR || "Set" === GR) return Array.from(RR);
        if ("Arguments" === GR || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GR)) return Yu(RR, JR)
      }(RR) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Yu(RR, JR) {
      (null == JR || JR > RR.length) && (JR = RR.length);
      for (var GR = 0, yR = new Array(JR); GR < JR; GR++) yR[GR] = RR[GR];
      return yR
    }
    var ku = function(RR) {
        return RR
      },
      Qu = {
        "@@functional/placeholder": !0
      },
      Fu = function(RR) {
        return RR === Qu
      },
      Tu = function(RR) {
        return function JR() {
          return 0 === arguments.length || 1 === arguments.length && Fu(arguments.length <= 0 ? void 0 : arguments[0]) ? JR : RR.apply(void 0, arguments)
        }
      },
      su = function RR(JR, GR) {
        return 1 === JR ? GR : Tu((function() {
          for (var yR = arguments.length, tR = new Array(yR), uR = 0; uR < yR; uR++) tR[uR] = arguments[uR];
          var ZR = tR.filter((function(RR) {
            return RR !== Qu
          })).length;
          return ZR >= JR ? GR.apply(void 0, tR) : RR(JR - ZR, Tu((function() {
            for (var RR = arguments.length, JR = new Array(RR), yR = 0; yR < RR; yR++) JR[yR] = arguments[yR];
            var uR = tR.map((function(RR) {
              return Fu(RR) ? JR.shift() : RR
            }));
            return GR.apply(void 0, Eu(uR).concat(JR))
          })))
        }))
      },
      hu = function(RR) {
        return su(RR.length, RR)
      },
      RZ = function(RR, JR) {
        for (var GR = [], yR = RR; yR < JR; ++yR) GR[yR - RR] = yR;
        return GR
      },
      JZ = hu((function(RR, JR) {
        return Array.isArray(JR) ? JR.map(RR) : Object.keys(JR).map((function(RR) {
          return JR[RR]
        })).map(RR)
      })),
      GZ = function() {
        for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
        if (!JR.length) return ku;
        var yR = JR.reverse(),
          tR = yR[0],
          uR = yR.slice(1);
        return function() {
          return uR.reduce((function(RR, JR) {
            return JR(RR)
          }), tR.apply(void 0, arguments))
        }
      },
      yZ = function(RR) {
        return Array.isArray(RR) ? RR.reverse() : RR.split("").reverse.join("")
      },
      tZ = function(RR) {
        var JR = null,
          GR = null;
        return function() {
          for (var yR = arguments.length, tR = new Array(yR), uR = 0; uR < yR; uR++) tR[uR] = arguments[uR];
          return JR && tR.every((function(RR, GR) {
            return RR === JR[GR]
          })) ? GR : (JR = tR, GR = RR.apply(void 0, tR))
        }
      };
    const uZ = {
      rangeStep: function(RR, JR, GR) {
        for (var yR = new(du())(RR), tR = 0, uR = []; yR.lt(JR) && tR < 1e5;) uR.push(yR.toNumber()), yR = yR.add(GR), tR++;
        return uR
      },
      getDigitCount: function(RR) {
        return 0 === RR ? 1 : Math.floor(new(du())(RR).abs().log(10).toNumber()) + 1
      },
      interpolateNumber: hu((function(RR, JR, GR) {
        var yR = +RR;
        return yR + GR * (+JR - yR)
      })),
      uninterpolateNumber: hu((function(RR, JR, GR) {
        var yR = JR - +RR;
        return (GR - RR) / (yR = yR || 1 / 0)
      })),
      uninterpolateTruncation: hu((function(RR, JR, GR) {
        var yR = JR - +RR;
        return yR = yR || 1 / 0, Math.max(0, Math.min(1, (GR - RR) / yR))
      }))
    };

    function ZZ(RR) {
      return function(RR) {
        if (Array.isArray(RR)) return fZ(RR)
      }(RR) || function(RR) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(RR)) return Array.from(RR)
      }(RR) || iZ(RR) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function qZ(RR, JR) {
      return function(RR) {
        if (Array.isArray(RR)) return RR
      }(RR) || function(RR, JR) {
        if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(RR))) return;
        var GR = [],
          yR = !0,
          tR = !1,
          uR = void 0;
        try {
          for (var ZR, qR = RR[Symbol.iterator](); !(yR = (ZR = qR.next()).done) && (GR.push(ZR.value), !JR || GR.length !== JR); yR = !0);
        } catch (iR) {
          tR = !0, uR = iR
        } finally {
          try {
            yR || null == qR.return || qR.return()
          } finally {
            if (tR) throw uR
          }
        }
        return GR
      }(RR, JR) || iZ(RR, JR) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function iZ(RR, JR) {
      if (RR) {
        if ("string" === typeof RR) return fZ(RR, JR);
        var GR = Object.prototype.toString.call(RR).slice(8, -1);
        return "Object" === GR && RR.constructor && (GR = RR.constructor.name), "Map" === GR || "Set" === GR ? Array.from(RR) : "Arguments" === GR || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GR) ? fZ(RR, JR) : void 0
      }
    }

    function fZ(RR, JR) {
      (null == JR || JR > RR.length) && (JR = RR.length);
      for (var GR = 0, yR = new Array(JR); GR < JR; GR++) yR[GR] = RR[GR];
      return yR
    }

    function VZ(RR) {
      var JR = qZ(RR, 2),
        GR = JR[0],
        yR = JR[1],
        tR = GR,
        uR = yR;
      return GR > yR && (tR = yR, uR = GR), [tR, uR]
    }

    function KZ(RR, JR, GR) {
      if (RR.lte(0)) return new(du())(0);
      var yR = uZ.getDigitCount(RR.toNumber()),
        tR = new(du())(10).pow(yR),
        uR = RR.div(tR),
        ZR = 1 !== yR ? .05 : .1,
        qR = new(du())(Math.ceil(uR.div(ZR).toNumber())).add(GR).mul(ZR).mul(tR);
      return JR ? qR : new(du())(Math.ceil(qR))
    }

    function wZ(RR, JR, GR) {
      var yR = 1,
        tR = new(du())(RR);
      if (!tR.isint() && GR) {
        var uR = Math.abs(RR);
        uR < 1 ? (yR = new(du())(10).pow(uZ.getDigitCount(RR) - 1), tR = new(du())(Math.floor(tR.div(yR).toNumber())).mul(yR)) : uR > 1 && (tR = new(du())(Math.floor(RR)))
      } else 0 === RR ? tR = new(du())(Math.floor((JR - 1) / 2)) : GR || (tR = new(du())(Math.floor(RR)));
      var ZR = Math.floor((JR - 1) / 2);
      return GZ(JZ((function(RR) {
        return tR.add(new(du())(RR - ZR).mul(yR)).toNumber()
      })), RZ)(0, JR)
    }

    function rZ(RR, JR, GR, yR) {
      var tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      if (!Number.isFinite((JR - RR) / (GR - 1))) return {
        step: new(du())(0),
        tickMin: new(du())(0),
        tickMax: new(du())(0)
      };
      var uR, ZR = KZ(new(du())(JR).sub(RR).div(GR - 1), yR, tR);
      uR = RR <= 0 && JR >= 0 ? new(du())(0) : (uR = new(du())(RR).add(JR).div(2)).sub(new(du())(uR).mod(ZR));
      var qR = Math.ceil(uR.sub(RR).div(ZR).toNumber()),
        iR = Math.ceil(new(du())(JR).sub(uR).div(ZR).toNumber()),
        fR = qR + iR + 1;
      return fR > GR ? rZ(RR, JR, GR, yR, tR + 1) : (fR < GR && (iR = JR > 0 ? iR + (GR - fR) : iR, qR = JR > 0 ? qR : qR + (GR - fR)), {
        step: ZR,
        tickMin: uR.sub(new(du())(qR).mul(ZR)),
        tickMax: uR.add(new(du())(iR).mul(ZR))
      })
    }
    var eZ = tZ((function(RR) {
        var JR = qZ(RR, 2),
          GR = JR[0],
          yR = JR[1],
          tR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          uR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          ZR = Math.max(tR, 2),
          qR = qZ(VZ([GR, yR]), 2),
          iR = qR[0],
          fR = qR[1];
        if (iR === -1 / 0 || fR === 1 / 0) {
          var VR = fR === 1 / 0 ? [iR].concat(ZZ(RZ(0, tR - 1).map((function() {
            return 1 / 0
          })))) : [].concat(ZZ(RZ(0, tR - 1).map((function() {
            return -1 / 0
          }))), [fR]);
          return GR > yR ? yZ(VR) : VR
        }
        if (iR === fR) return wZ(iR, tR, uR);
        var KR = rZ(iR, fR, ZR, uR),
          wR = KR.step,
          rR = KR.tickMin,
          eR = KR.tickMax,
          aR = uZ.rangeStep(rR, eR.add(new(du())(.1).mul(wR)), wR);
        return GR > yR ? yZ(aR) : aR
      })),
      aZ = (tZ((function(RR) {
        var JR = qZ(RR, 2),
          GR = JR[0],
          yR = JR[1],
          tR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          uR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          ZR = Math.max(tR, 2),
          qR = qZ(VZ([GR, yR]), 2),
          iR = qR[0],
          fR = qR[1];
        if (iR === -1 / 0 || fR === 1 / 0) return [GR, yR];
        if (iR === fR) return wZ(iR, tR, uR);
        var VR = KZ(new(du())(fR).sub(iR).div(ZR - 1), uR, 0),
          KR = GZ(JZ((function(RR) {
            return new(du())(iR).add(new(du())(RR).mul(VR)).toNumber()
          })), RZ)(0, ZR).filter((function(RR) {
            return RR >= iR && RR <= fR
          }));
        return GR > yR ? yZ(KR) : KR
      })), tZ((function(RR, JR) {
        var GR = qZ(RR, 2),
          yR = GR[0],
          tR = GR[1],
          uR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          ZR = qZ(VZ([yR, tR]), 2),
          qR = ZR[0],
          iR = ZR[1];
        if (qR === -1 / 0 || iR === 1 / 0) return [yR, tR];
        if (qR === iR) return [qR];
        var fR = Math.max(JR, 2),
          VR = KZ(new(du())(iR).sub(qR).div(fR - 1), uR, 0),
          KR = [].concat(ZZ(uZ.rangeStep(new(du())(qR), new(du())(iR).sub(new(du())(.99).mul(VR)), VR)), [iR]);
        return yR > tR ? yZ(KR) : KR
      }))),
      LZ = GR(7285),
      nZ = GR(6235),
      UZ = GR(6523),
      WZ = GR(7287);

    function AZ(RR) {
      return AZ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, AZ(RR)
    }

    function CZ(RR) {
      return function(RR) {
        if (Array.isArray(RR)) return XZ(RR)
      }(RR) || function(RR) {
        if ("undefined" !== typeof Symbol && null != RR[Symbol.iterator] || null != RR["@@iterator"]) return Array.from(RR)
      }(RR) || function(RR, JR) {
        if (!RR) return;
        if ("string" === typeof RR) return XZ(RR, JR);
        var GR = Object.prototype.toString.call(RR).slice(8, -1);
        "Object" === GR && RR.constructor && (GR = RR.constructor.name);
        if ("Map" === GR || "Set" === GR) return Array.from(RR);
        if ("Arguments" === GR || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GR)) return XZ(RR, JR)
      }(RR) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function XZ(RR, JR) {
      (null == JR || JR > RR.length) && (JR = RR.length);
      for (var GR = 0, yR = new Array(JR); GR < JR; GR++) yR[GR] = RR[GR];
      return yR
    }

    function MZ(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function BZ(RR) {
      for (var JR = 1; JR < arguments.length; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? MZ(Object(GR), !0).forEach((function(JR) {
          lZ(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : MZ(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }

    function lZ(RR, JR, GR) {
      return (JR = function(RR) {
        var JR = function(RR, JR) {
          if ("object" != AZ(RR) || !RR) return RR;
          var GR = RR[Symbol.toPrimitive];
          if (void 0 !== GR) {
            var yR = GR.call(RR, JR || "default");
            if ("object" != AZ(yR)) return yR;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === JR ? String : Number)(RR)
        }(RR, "string");
        return "symbol" == AZ(JR) ? JR : JR + ""
      }(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }

    function pZ(RR, JR, GR) {
      return lu()(RR) || lu()(JR) ? GR : (0, nZ.B)(JR) ? xu()(RR, JR, GR) : gu()(JR) ? JR(RR) : GR
    }

    function gZ(RR, JR, GR, yR) {
      var tR = Du()(RR, (function(RR) {
        return pZ(RR, JR)
      }));
      if ("number" === GR) {
        var uR = tR.filter((function(RR) {
          return (0, nZ.C)(RR) || parseFloat(RR)
        }));
        return uR.length ? [Mu()(uR), Cu()(uR)] : [1 / 0, -1 / 0]
      }
      return (yR ? tR.filter((function(RR) {
        return !lu()(RR)
      })) : tR).map((function(RR) {
        return (0, nZ.B)(RR) || RR instanceof Date ? RR : ""
      }))
    }
    var bZ = function(RR) {
        var JR, GR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          yR = arguments.length > 2 ? arguments[2] : void 0,
          tR = arguments.length > 3 ? arguments[3] : void 0,
          uR = -1,
          ZR = null !== (JR = null === GR || void 0 === GR ? void 0 : GR.length) && void 0 !== JR ? JR : 0;
        if (ZR <= 1) return 0;
        if (tR && "angleAxis" === tR.axisType && Math.abs(Math.abs(tR.range[1] - tR.range[0]) - 360) <= 1e-6)
          for (var qR = tR.range, iR = 0; iR < ZR; iR++) {
            var fR = iR > 0 ? yR[iR - 1].coordinate : yR[ZR - 1].coordinate,
              VR = yR[iR].coordinate,
              KR = iR >= ZR - 1 ? yR[0].coordinate : yR[iR + 1].coordinate,
              wR = void 0;
            if ((0, nZ.I)(VR - fR) !== (0, nZ.I)(KR - VR)) {
              var rR = [];
              if ((0, nZ.I)(KR - VR) === (0, nZ.I)(qR[1] - qR[0])) {
                wR = KR;
                var eR = VR + qR[1] - qR[0];
                rR[0] = Math.min(eR, (eR + fR) / 2), rR[1] = Math.max(eR, (eR + fR) / 2)
              } else {
                wR = fR;
                var aR = KR + qR[1] - qR[0];
                rR[0] = Math.min(VR, (aR + VR) / 2), rR[1] = Math.max(VR, (aR + VR) / 2)
              }
              var LR = [Math.min(VR, (wR + VR) / 2), Math.max(VR, (wR + VR) / 2)];
              if (RR > LR[0] && RR <= LR[1] || RR >= rR[0] && RR <= rR[1]) {
                uR = yR[iR].index;
                break
              }
            } else {
              var nR = Math.min(fR, KR),
                UR = Math.max(fR, KR);
              if (RR > (nR + VR) / 2 && RR <= (UR + VR) / 2) {
                uR = yR[iR].index;
                break
              }
            }
          } else
            for (var WR = 0; WR < ZR; WR++)
              if (0 === WR && RR <= (GR[WR].coordinate + GR[WR + 1].coordinate) / 2 || WR > 0 && WR < ZR - 1 && RR > (GR[WR].coordinate + GR[WR - 1].coordinate) / 2 && RR <= (GR[WR].coordinate + GR[WR + 1].coordinate) / 2 || WR === ZR - 1 && RR > (GR[WR].coordinate + GR[WR - 1].coordinate) / 2) {
                uR = GR[WR].index;
                break
              } return uR
      },
      vZ = function(RR) {
        var JR, GR, yR = RR.type.displayName,
          tR = null !== (JR = RR.type) && void 0 !== JR && JR.defaultProps ? BZ(BZ({}, RR.type.defaultProps), RR.props) : RR.props,
          uR = tR.stroke,
          ZR = tR.fill;
        switch (yR) {
          case "Line":
            GR = uR;
            break;
          case "Area":
          case "Radar":
            GR = uR && "none" !== uR ? uR : ZR;
            break;
          default:
            GR = ZR
        }
        return GR
      },
      OZ = function(RR) {
        var JR = RR.barSize,
          GR = RR.totalSize,
          yR = RR.stackGroups,
          tR = void 0 === yR ? {} : yR;
        if (!tR) return {};
        for (var uR = {}, ZR = Object.keys(tR), qR = 0, iR = ZR.length; qR < iR; qR++)
          for (var fR = tR[ZR[qR]].stackGroups, VR = Object.keys(fR), KR = 0, wR = VR.length; KR < wR; KR++) {
            var rR = fR[VR[KR]],
              eR = rR.items,
              aR = rR.cateAxisId,
              LR = eR.filter((function(RR) {
                return (0, UZ.l)(RR.type).indexOf("Bar") >= 0
              }));
            if (LR && LR.length) {
              var nR = LR[0].type.defaultProps,
                UR = void 0 !== nR ? BZ(BZ({}, nR), LR[0].props) : LR[0].props,
                WR = UR.barSize,
                AR = UR[aR];
              uR[AR] || (uR[AR] = []);
              var CR = lu()(WR) ? JR : WR;
              uR[AR].push({
                item: LR[0],
                stackList: LR.slice(1),
                barSize: lu()(CR) ? void 0 : (0, nZ.p)(CR, GR, 0)
              })
            }
          }
        return uR
      },
      xZ = function(RR) {
        var JR = RR.barGap,
          GR = RR.barCategoryGap,
          yR = RR.bandSize,
          tR = RR.sizeList,
          uR = void 0 === tR ? [] : tR,
          ZR = RR.maxBarSize,
          qR = uR.length;
        if (qR < 1) return null;
        var iR, fR = (0, nZ.p)(JR, yR, 0, !0),
          VR = [];
        if (uR[0].barSize === +uR[0].barSize) {
          var KR = !1,
            wR = yR / qR,
            rR = uR.reduce((function(RR, JR) {
              return RR + JR.barSize || 0
            }), 0);
          (rR += (qR - 1) * fR) >= yR && (rR -= (qR - 1) * fR, fR = 0), rR >= yR && wR > 0 && (KR = !0, rR = qR * (wR *= .9));
          var eR = {
            offset: ((yR - rR) / 2 | 0) - fR,
            size: 0
          };
          iR = uR.reduce((function(RR, JR) {
            var GR = {
                item: JR.item,
                position: {
                  offset: eR.offset + eR.size + fR,
                  size: KR ? wR : JR.barSize
                }
              },
              yR = [].concat(CZ(RR), [GR]);
            return eR = yR[yR.length - 1].position, JR.stackList && JR.stackList.length && JR.stackList.forEach((function(RR) {
              yR.push({
                item: RR,
                position: eR
              })
            })), yR
          }), VR)
        } else {
          var aR = (0, nZ.p)(GR, yR, 0, !0);
          yR - 2 * aR - (qR - 1) * fR <= 0 && (fR = 0);
          var LR = (yR - 2 * aR - (qR - 1) * fR) / qR;
          LR > 1 && (LR >>= 0);
          var nR = ZR === +ZR ? Math.min(LR, ZR) : LR;
          iR = uR.reduce((function(RR, JR, GR) {
            var yR = [].concat(CZ(RR), [{
              item: JR.item,
              position: {
                offset: aR + (LR + fR) * GR + (LR - nR) / 2,
                size: nR
              }
            }]);
            return JR.stackList && JR.stackList.length && JR.stackList.forEach((function(RR) {
              yR.push({
                item: RR,
                position: yR[yR.length - 1].position
              })
            })), yR
          }), VR)
        }
        return iR
      },
      NZ = function(RR, JR, GR, yR) {
        var tR = GR.children,
          uR = GR.width,
          ZR = GR.margin,
          qR = uR - (ZR.left || 0) - (ZR.right || 0),
          iR = (0, WZ.b)({
            children: tR,
            legendWidth: qR
          });
        if (iR) {
          var fR = yR || {},
            VR = fR.width,
            KR = fR.height,
            wR = iR.align,
            rR = iR.verticalAlign,
            eR = iR.layout;
          if (("vertical" === eR || "horizontal" === eR && "middle" === rR) && "center" !== wR && (0, nZ.C)(RR[wR])) return BZ(BZ({}, RR), {}, lZ({}, wR, RR[wR] + (VR || 0)));
          if (("horizontal" === eR || "vertical" === eR && "center" === wR) && "middle" !== rR && (0, nZ.C)(RR[rR])) return BZ(BZ({}, RR), {}, lZ({}, rR, RR[rR] + (KR || 0)))
        }
        return RR
      },
      DZ = function(RR, JR, GR, yR, tR) {
        var uR = JR.props.children,
          ZR = (0, UZ.i)(uR, LZ.e).filter((function(RR) {
            return function(RR, JR, GR) {
              return !!lu()(JR) || ("horizontal" === RR ? "yAxis" === JR : "vertical" === RR || "x" === GR ? "xAxis" === JR : "y" !== GR || "yAxis" === JR)
            }(yR, tR, RR.props.direction)
          }));
        if (ZR && ZR.length) {
          var qR = ZR.map((function(RR) {
            return RR.props.dataKey
          }));
          return RR.reduce((function(RR, JR) {
            var yR = pZ(JR, GR);
            if (lu()(yR)) return RR;
            var tR = Array.isArray(yR) ? [Mu()(yR), Cu()(yR)] : [yR, yR],
              uR = qR.reduce((function(RR, GR) {
                var yR = pZ(JR, GR, 0),
                  uR = tR[0] - Math.abs(Array.isArray(yR) ? yR[0] : yR),
                  ZR = tR[1] + Math.abs(Array.isArray(yR) ? yR[1] : yR);
                return [Math.min(uR, RR[0]), Math.max(ZR, RR[1])]
              }), [1 / 0, -1 / 0]);
            return [Math.min(uR[0], RR[0]), Math.max(uR[1], RR[1])]
          }), [1 / 0, -1 / 0])
        }
        return null
      },
      HZ = function(RR, JR, GR, yR, tR) {
        var uR = JR.map((function(JR) {
          return DZ(RR, JR, GR, tR, yR)
        })).filter((function(RR) {
          return !lu()(RR)
        }));
        return uR && uR.length ? uR.reduce((function(RR, JR) {
          return [Math.min(RR[0], JR[0]), Math.max(RR[1], JR[1])]
        }), [1 / 0, -1 / 0]) : null
      },
      oZ = function(RR, JR, GR, yR, tR) {
        var uR = JR.map((function(JR) {
          var uR = JR.props.dataKey;
          return "number" === GR && uR && DZ(RR, JR, uR, yR) || gZ(RR, uR, GR, tR)
        }));
        if ("number" === GR) return uR.reduce((function(RR, JR) {
          return [Math.min(RR[0], JR[0]), Math.max(RR[1], JR[1])]
        }), [1 / 0, -1 / 0]);
        var ZR = {};
        return uR.reduce((function(RR, JR) {
          for (var GR = 0, yR = JR.length; GR < yR; GR++) ZR[JR[GR]] || (ZR[JR[GR]] = !0, RR.push(JR[GR]));
          return RR
        }), [])
      },
      cZ = function(RR, JR) {
        return "horizontal" === RR && "xAxis" === JR || "vertical" === RR && "yAxis" === JR || "centric" === RR && "angleAxis" === JR || "radial" === RR && "radiusAxis" === JR
      },
      PZ = function(RR, JR, GR, yR) {
        if (yR) return RR.map((function(RR) {
          return RR.coordinate
        }));
        var tR, uR, ZR = RR.map((function(RR) {
          return RR.coordinate === JR && (tR = !0), RR.coordinate === GR && (uR = !0), RR.coordinate
        }));
        return tR || ZR.push(JR), uR || ZR.push(GR), ZR
      },
      IZ = function(RR, JR, GR) {
        if (!RR) return null;
        var yR = RR.scale,
          tR = RR.duplicateDomain,
          uR = RR.type,
          ZR = RR.range,
          qR = "scaleBand" === RR.realScaleType ? yR.bandwidth() / 2 : 2,
          iR = (JR || GR) && "category" === uR && yR.bandwidth ? yR.bandwidth() / qR : 0;
        return iR = "angleAxis" === RR.axisType && (null === ZR || void 0 === ZR ? void 0 : ZR.length) >= 2 ? 2 * (0, nZ.I)(ZR[0] - ZR[1]) * iR : iR, JR && (RR.ticks || RR.niceTicks) ? (RR.ticks || RR.niceTicks).map((function(RR) {
          var JR = tR ? tR.indexOf(RR) : RR;
          return {
            coordinate: yR(JR) + iR,
            value: RR,
            offset: iR
          }
        })).filter((function(RR) {
          return !ou()(RR.coordinate)
        })) : RR.isCategorical && RR.categoricalDomain ? RR.categoricalDomain.map((function(RR, JR) {
          return {
            coordinate: yR(RR) + iR,
            value: RR,
            index: JR,
            offset: iR
          }
        })) : yR.ticks && !GR ? yR.ticks(RR.tickCount).map((function(RR) {
          return {
            coordinate: yR(RR) + iR,
            value: RR,
            offset: iR
          }
        })) : yR.domain().map((function(RR, JR) {
          return {
            coordinate: yR(RR) + iR,
            value: tR ? tR[RR] : RR,
            index: JR,
            offset: iR
          }
        }))
      },
      mZ = new WeakMap,
      zZ = function(RR, JR) {
        if ("function" !== typeof JR) return RR;
        mZ.has(RR) || mZ.set(RR, new WeakMap);
        var GR = mZ.get(RR);
        if (GR.has(JR)) return GR.get(JR);
        var yR = function() {
          RR.apply(void 0, arguments), JR.apply(void 0, arguments)
        };
        return GR.set(JR, yR), yR
      },
      SZ = function(RR, JR, GR) {
        var uR = RR.scale,
          ZR = RR.type,
          qR = RR.layout,
          iR = RR.axisType;
        if ("auto" === uR) return "radial" === qR && "radiusAxis" === iR ? {
          scale: tR.d(),
          realScaleType: "band"
        } : "radial" === qR && "angleAxis" === iR ? {
          scale: kJ(),
          realScaleType: "linear"
        } : "category" === ZR && JR && (JR.indexOf("LineChart") >= 0 || JR.indexOf("AreaChart") >= 0 || JR.indexOf("ComposedChart") >= 0 && !GR) ? {
          scale: tR.e(),
          realScaleType: "point"
        } : "category" === ZR ? {
          scale: tR.d(),
          realScaleType: "band"
        } : {
          scale: kJ(),
          realScaleType: "linear"
        };
        if (vu()(uR)) {
          var fR = "scale".concat(Pu()(uR));
          return {
            scale: (yR[fR] || tR.e)(),
            realScaleType: yR[fR] ? fR : "point"
          }
        }
        return gu()(uR) ? {
          scale: uR
        } : {
          scale: tR.e(),
          realScaleType: "point"
        }
      },
      jZ = 1e-4,
      dZ = function(RR) {
        var JR = RR.domain();
        if (JR && !(JR.length <= 2)) {
          var GR = JR.length,
            yR = RR.range(),
            tR = Math.min(yR[0], yR[1]) - jZ,
            uR = Math.max(yR[0], yR[1]) + jZ,
            ZR = RR(JR[0]),
            qR = RR(JR[GR - 1]);
          (ZR < tR || ZR > uR || qR < tR || qR > uR) && RR.domain([JR[0], JR[GR - 1]])
        }
      },
      EZ = function(RR, JR) {
        if (!RR) return null;
        for (var GR = 0, yR = RR.length; GR < yR; GR++)
          if (RR[GR].item === JR) return RR[GR].position;
        return null
      },
      YZ = function(RR, JR) {
        if (!JR || 2 !== JR.length || !(0, nZ.C)(JR[0]) || !(0, nZ.C)(JR[1])) return RR;
        var GR = Math.min(JR[0], JR[1]),
          yR = Math.max(JR[0], JR[1]),
          tR = [RR[0], RR[1]];
        return (!(0, nZ.C)(RR[0]) || RR[0] < GR) && (tR[0] = GR), (!(0, nZ.C)(RR[1]) || RR[1] > yR) && (tR[1] = yR), tR[0] > yR && (tR[0] = yR), tR[1] < GR && (tR[1] = GR), tR
      },
      kZ = {
        sign: function(RR) {
          var JR = RR.length;
          if (!(JR <= 0))
            for (var GR = 0, yR = RR[0].length; GR < yR; ++GR)
              for (var tR = 0, uR = 0, ZR = 0; ZR < JR; ++ZR) {
                var qR = ou()(RR[ZR][GR][1]) ? RR[ZR][GR][0] : RR[ZR][GR][1];
                qR >= 0 ? (RR[ZR][GR][0] = tR, RR[ZR][GR][1] = tR + qR, tR = RR[ZR][GR][1]) : (RR[ZR][GR][0] = uR, RR[ZR][GR][1] = uR + qR, uR = RR[ZR][GR][1])
              }
        },
        expand: function(RR, JR) {
          if ((yR = RR.length) > 0) {
            for (var GR, yR, tR, uR = 0, ZR = RR[0].length; uR < ZR; ++uR) {
              for (tR = GR = 0; GR < yR; ++GR) tR += RR[GR][uR][1] || 0;
              if (tR)
                for (GR = 0; GR < yR; ++GR) RR[GR][uR][1] /= tR
            }
            eu(RR, JR)
          }
        },
        none: eu,
        silhouette: function(RR, JR) {
          if ((GR = RR.length) > 0) {
            for (var GR, yR = 0, tR = RR[JR[0]], uR = tR.length; yR < uR; ++yR) {
              for (var ZR = 0, qR = 0; ZR < GR; ++ZR) qR += RR[ZR][yR][1] || 0;
              tR[yR][1] += tR[yR][0] = -qR / 2
            }
            eu(RR, JR)
          }
        },
        wiggle: function(RR, JR) {
          if ((tR = RR.length) > 0 && (yR = (GR = RR[JR[0]]).length) > 0) {
            for (var GR, yR, tR, uR = 0, ZR = 1; ZR < yR; ++ZR) {
              for (var qR = 0, iR = 0, fR = 0; qR < tR; ++qR) {
                for (var VR = RR[JR[qR]], KR = VR[ZR][1] || 0, wR = (KR - (VR[ZR - 1][1] || 0)) / 2, rR = 0; rR < qR; ++rR) {
                  var eR = RR[JR[rR]];
                  wR += (eR[ZR][1] || 0) - (eR[ZR - 1][1] || 0)
                }
                iR += KR, fR += wR * KR
              }
              GR[ZR - 1][1] += GR[ZR - 1][0] = uR, iR && (uR -= fR / iR)
            }
            GR[ZR - 1][1] += GR[ZR - 1][0] = uR, eu(RR, JR)
          }
        },
        positive: function(RR) {
          var JR = RR.length;
          if (!(JR <= 0))
            for (var GR = 0, yR = RR[0].length; GR < yR; ++GR)
              for (var tR = 0, uR = 0; uR < JR; ++uR) {
                var ZR = ou()(RR[uR][GR][1]) ? RR[uR][GR][0] : RR[uR][GR][1];
                ZR >= 0 ? (RR[uR][GR][0] = tR, RR[uR][GR][1] = tR + ZR, tR = RR[uR][GR][1]) : (RR[uR][GR][0] = 0, RR[uR][GR][1] = 0)
              }
        }
      },
      QZ = function(RR, JR, GR) {
        var yR = JR.map((function(RR) {
            return RR.props.dataKey
          })),
          tR = kZ[GR],
          uR = function() {
            var RR = (0, Lu.d)([]),
              JR = nu,
              GR = eu,
              yR = Uu;

            function tR(tR) {
              var uR, ZR, qR = Array.from(RR.apply(this, arguments), Wu),
                iR = qR.length,
                fR = -1;
              for (const RR of tR)
                for (uR = 0, ++fR; uR < iR; ++uR)(qR[uR][fR] = [0, +yR(RR, qR[uR].key, fR, tR)]).data = RR;
              for (uR = 0, ZR = (0, au.d)(JR(qR)); uR < iR; ++uR) qR[ZR[uR]].index = uR;
              return GR(qR, ZR), qR
            }
            return tR.keys = function(JR) {
              return arguments.length ? (RR = "function" === typeof JR ? JR : (0, Lu.d)(Array.from(JR)), tR) : RR
            }, tR.value = function(RR) {
              return arguments.length ? (yR = "function" === typeof RR ? RR : (0, Lu.d)(+RR), tR) : yR
            }, tR.order = function(RR) {
              return arguments.length ? (JR = null == RR ? nu : "function" === typeof RR ? RR : (0, Lu.d)(Array.from(RR)), tR) : JR
            }, tR.offset = function(RR) {
              return arguments.length ? (GR = null == RR ? eu : RR, tR) : GR
            }, tR
          }().keys(yR).value((function(RR, JR) {
            return +pZ(RR, JR, 0)
          })).order(nu).offset(tR);
        return uR(RR)
      },
      FZ = function(RR, JR, GR, yR, tR, uR) {
        if (!RR) return null;
        var ZR = (uR ? JR.reverse() : JR).reduce((function(RR, JR) {
          var tR, uR = null !== (tR = JR.type) && void 0 !== tR && tR.defaultProps ? BZ(BZ({}, JR.type.defaultProps), JR.props) : JR.props,
            ZR = uR.stackId;
          if (uR.hide) return RR;
          var qR = uR[GR],
            iR = RR[qR] || {
              hasStack: !1,
              stackGroups: {}
            };
          if ((0, nZ.B)(ZR)) {
            var fR = iR.stackGroups[ZR] || {
              numericAxisId: GR,
              cateAxisId: yR,
              items: []
            };
            fR.items.push(JR), iR.hasStack = !0, iR.stackGroups[ZR] = fR
          } else iR.stackGroups[(0, nZ.M)("_stackId_")] = {
            numericAxisId: GR,
            cateAxisId: yR,
            items: [JR]
          };
          return BZ(BZ({}, RR), {}, lZ({}, qR, iR))
        }), {});
        return Object.keys(ZR).reduce((function(JR, uR) {
          var qR = ZR[uR];
          if (qR.hasStack) {
            qR.stackGroups = Object.keys(qR.stackGroups).reduce((function(JR, uR) {
              var ZR = qR.stackGroups[uR];
              return BZ(BZ({}, JR), {}, lZ({}, uR, {
                numericAxisId: GR,
                cateAxisId: yR,
                items: ZR.items,
                stackedData: QZ(RR, ZR.items, tR)
              }))
            }), {})
          }
          return BZ(BZ({}, JR), {}, lZ({}, uR, qR))
        }), {})
      },
      TZ = function(RR, JR) {
        var GR = JR.realScaleType,
          yR = JR.type,
          tR = JR.tickCount,
          uR = JR.originalDomain,
          ZR = JR.allowDecimals,
          qR = GR || JR.scale;
        if ("auto" !== qR && "linear" !== qR) return null;
        if (tR && "number" === yR && uR && ("auto" === uR[0] || "auto" === uR[1])) {
          var iR = RR.domain();
          if (!iR.length) return null;
          var fR = eZ(iR, tR, ZR);
          return RR.domain([Mu()(fR), Cu()(fR)]), {
            niceTicks: fR
          }
        }
        if (tR && "number" === yR) {
          var VR = RR.domain();
          return {
            niceTicks: aZ(VR, tR, ZR)
          }
        }
        return null
      };

    function sZ(RR) {
      var JR = RR.axis,
        GR = RR.ticks,
        yR = RR.bandSize,
        tR = RR.entry,
        uR = RR.index,
        ZR = RR.dataKey;
      if ("category" === JR.type) {
        if (!JR.allowDuplicatedCategory && JR.dataKey && !lu()(tR[JR.dataKey])) {
          var qR = (0, nZ.e)(GR, "value", tR[JR.dataKey]);
          if (qR) return qR.coordinate + yR / 2
        }
        return GR[uR] ? GR[uR].coordinate + yR / 2 : null
      }
      var iR = pZ(tR, lu()(ZR) ? JR.dataKey : ZR);
      return lu()(iR) ? null : JR.scale(iR)
    }
    var hZ = function(RR) {
        var JR = RR.axis,
          GR = RR.ticks,
          yR = RR.offset,
          tR = RR.bandSize,
          uR = RR.entry,
          ZR = RR.index;
        if ("category" === JR.type) return GR[ZR] ? GR[ZR].coordinate + yR : null;
        var qR = pZ(uR, JR.dataKey, JR.domain[ZR]);
        return lu()(qR) ? null : JR.scale(qR) - tR / 2 + yR
      },
      Rq = function(RR) {
        var JR = RR.numericAxis,
          GR = JR.scale.domain();
        if ("number" === JR.type) {
          var yR = Math.min(GR[0], GR[1]),
            tR = Math.max(GR[0], GR[1]);
          return yR <= 0 && tR >= 0 ? 0 : tR < 0 ? tR : yR
        }
        return GR[0]
      },
      Jq = function(RR, JR) {
        var GR, yR = (null !== (GR = RR.type) && void 0 !== GR && GR.defaultProps ? BZ(BZ({}, RR.type.defaultProps), RR.props) : RR.props).stackId;
        if ((0, nZ.B)(yR)) {
          var tR = JR[yR];
          if (tR) {
            var uR = tR.items.indexOf(RR);
            return uR >= 0 ? tR.stackedData[uR] : null
          }
        }
        return null
      },
      Gq = function(RR, JR, GR) {
        return Object.keys(RR).reduce((function(yR, tR) {
          var uR = RR[tR].stackedData.reduce((function(RR, yR) {
            var tR = yR.slice(JR, GR + 1).reduce((function(RR, JR) {
              return [Mu()(JR.concat([RR[0]]).filter(nZ.C)), Cu()(JR.concat([RR[1]]).filter(nZ.C))]
            }), [1 / 0, -1 / 0]);
            return [Math.min(RR[0], tR[0]), Math.max(RR[1], tR[1])]
          }), [1 / 0, -1 / 0]);
          return [Math.min(uR[0], yR[0]), Math.max(uR[1], yR[1])]
        }), [1 / 0, -1 / 0]).map((function(RR) {
          return RR === 1 / 0 || RR === -1 / 0 ? 0 : RR
        }))
      },
      yq = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      tq = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      uq = function(RR, JR, GR) {
        if (gu()(RR)) return RR(JR, GR);
        if (!Array.isArray(RR)) return JR;
        var yR = [];
        if ((0, nZ.C)(RR[0])) yR[0] = GR ? RR[0] : Math.min(RR[0], JR[0]);
        else if (yq.test(RR[0])) {
          var tR = +yq.exec(RR[0])[1];
          yR[0] = JR[0] - tR
        } else gu()(RR[0]) ? yR[0] = RR[0](JR[0]) : yR[0] = JR[0];
        if ((0, nZ.C)(RR[1])) yR[1] = GR ? RR[1] : Math.max(RR[1], JR[1]);
        else if (tq.test(RR[1])) {
          var uR = +tq.exec(RR[1])[1];
          yR[1] = JR[1] + uR
        } else gu()(RR[1]) ? yR[1] = RR[1](JR[1]) : yR[1] = JR[1];
        return yR
      },
      Zq = function(RR, JR, GR) {
        if (RR && RR.scale && RR.scale.bandwidth) {
          var yR = RR.scale.bandwidth();
          if (!GR || yR > 0) return yR
        }
        if (RR && JR && JR.length >= 2) {
          for (var tR = Su()(JR, (function(RR) {
              return RR.coordinate
            })), uR = 1 / 0, ZR = 1, qR = tR.length; ZR < qR; ZR++) {
            var iR = tR[ZR],
              fR = tR[ZR - 1];
            uR = Math.min((iR.coordinate || 0) - (fR.coordinate || 0), uR)
          }
          return uR === 1 / 0 ? 0 : uR
        }
        return GR ? void 0 : 0
      },
      qq = function(RR, JR, GR) {
        return RR && RR.length ? mu()(RR, xu()(GR, "type.defaultProps.domain")) ? JR : RR : JR
      },
      iq = function(RR, JR) {
        var GR = RR.type.defaultProps ? BZ(BZ({}, RR.type.defaultProps), RR.props) : RR.props,
          yR = GR.dataKey,
          tR = GR.name,
          uR = GR.unit,
          ZR = GR.formatter,
          qR = GR.tooltipType,
          iR = GR.chartType,
          fR = GR.hide;
        return BZ(BZ({}, (0, UZ.e)(RR, !1)), {}, {
          dataKey: yR,
          unit: uR,
          formatter: ZR,
          name: tR || yR,
          color: vZ(RR),
          value: pZ(JR, yR),
          type: qR,
          payload: JR,
          chartType: iR,
          hide: fR
        })
      }
  },
  7189: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => wR,
      e: () => KR
    });
    var yR = GR(7047);

    function tR(RR) {
      return tR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, tR(RR)
    }

    function uR(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function ZR(RR) {
      for (var JR = 1; JR < arguments.length; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? uR(Object(GR), !0).forEach((function(JR) {
          qR(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : uR(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }

    function qR(RR, JR, GR) {
      return (JR = function(RR) {
        var JR = function(RR, JR) {
          if ("object" != tR(RR) || !RR) return RR;
          var GR = RR[Symbol.toPrimitive];
          if (void 0 !== GR) {
            var yR = GR.call(RR, JR || "default");
            if ("object" != tR(yR)) return yR;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === JR ? String : Number)(RR)
        }(RR, "string");
        return "symbol" == tR(JR) ? JR : JR + ""
      }(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }
    var iR = {
        widthCache: {},
        cacheCount: 0
      },
      fR = {
        position: "absolute",
        top: "-20000px",
        left: 0,
        padding: 0,
        margin: 0,
        border: "none",
        whiteSpace: "pre"
      },
      VR = "recharts_measurement_span";
    var KR = function(RR) {
        var JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (void 0 === RR || null === RR || yR.d.isSsr) return {
          width: 0,
          height: 0
        };
        var GR = function(RR) {
            var JR = ZR({}, RR);
            return Object.keys(JR).forEach((function(RR) {
              JR[RR] || delete JR[RR]
            })), JR
          }(JR),
          tR = JSON.stringify({
            text: RR,
            copyStyle: GR
          });
        if (iR.widthCache[tR]) return iR.widthCache[tR];
        try {
          var uR = document.getElementById(VR);
          uR || ((uR = document.createElement("span")).setAttribute("id", VR), uR.setAttribute("aria-hidden", "true"), document.body.appendChild(uR));
          var qR = ZR(ZR({}, fR), GR);
          Object.assign(uR.style, qR), uR.textContent = "".concat(RR);
          var KR = uR.getBoundingClientRect(),
            wR = {
              width: KR.width,
              height: KR.height
            };
          return iR.widthCache[tR] = wR, ++iR.cacheCount > 2e3 && (iR.cacheCount = 0, iR.widthCache = {}), wR
        } catch (rR) {
          return {
            width: 0,
            height: 0
          }
        }
      },
      wR = function(RR) {
        return {
          top: RR.top + window.scrollY - document.documentElement.clientTop,
          left: RR.left + window.scrollX - document.documentElement.clientLeft
        }
      }
  },
  6235: (RR, JR, GR) => {
    GR.d(JR, {
      B: () => nR,
      C: () => aR,
      F: () => eR,
      I: () => rR,
      M: () => WR,
      b: () => pR,
      e: () => BR,
      i: () => CR,
      m: () => lR,
      p: () => AR,
      t: () => XR,
      v: () => MR,
      y: () => LR
    });
    var yR = GR(6237),
      tR = GR.n(yR),
      uR = GR(6244),
      ZR = GR.n(uR),
      qR = GR(6262),
      iR = GR.n(qR),
      fR = GR(6253),
      VR = GR.n(fR),
      KR = GR(6516),
      wR = GR.n(KR),
      rR = function(RR) {
        return 0 === RR ? 0 : RR > 0 ? 1 : -1
      },
      eR = function(RR) {
        return tR()(RR) && RR.indexOf("%") === RR.length - 1
      },
      aR = function(RR) {
        return VR()(RR) && !ZR()(RR)
      },
      LR = function(RR) {
        return wR()(RR)
      },
      nR = function(RR) {
        return aR(RR) || tR()(RR)
      },
      UR = 0,
      WR = function(RR) {
        var JR = ++UR;
        return "".concat(RR || "").concat(JR)
      },
      AR = function(RR, JR) {
        var GR, yR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          uR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!aR(RR) && !tR()(RR)) return yR;
        if (eR(RR)) {
          var qR = RR.indexOf("%");
          GR = JR * parseFloat(RR.slice(0, qR)) / 100
        } else GR = +RR;
        return ZR()(GR) && (GR = yR), uR && GR > JR && (GR = JR), GR
      },
      CR = function(RR) {
        if (!RR) return null;
        var JR = Object.keys(RR);
        return JR && JR.length ? RR[JR[0]] : null
      },
      XR = function(RR) {
        if (!Array.isArray(RR)) return !1;
        for (var JR = RR.length, GR = {}, yR = 0; yR < JR; yR++) {
          if (GR[RR[yR]]) return !0;
          GR[RR[yR]] = !0
        }
        return !1
      },
      MR = function(RR, JR) {
        return aR(RR) && aR(JR) ? function(GR) {
          return RR + GR * (JR - RR)
        } : function() {
          return JR
        }
      };

    function BR(RR, JR, GR) {
      return RR && RR.length ? RR.find((function(RR) {
        return RR && ("function" === typeof JR ? JR(RR) : iR()(RR, JR)) === GR
      })) : null
    }
    var lR = function(RR) {
        if (!RR || !RR.length) return null;
        for (var JR = RR.length, GR = 0, yR = 0, tR = 0, uR = 0, ZR = 1 / 0, qR = -1 / 0, iR = 0, fR = 0, VR = 0; VR < JR; VR++) GR += iR = RR[VR].cx || 0, yR += fR = RR[VR].cy || 0, tR += iR * fR, uR += iR * iR, ZR = Math.min(ZR, iR), qR = Math.max(qR, iR);
        var KR = JR * uR !== GR * GR ? (JR * tR - GR * yR) / (JR * uR - GR * GR) : 0;
        return {
          xmin: ZR,
          xmax: qR,
          a: KR,
          b: (yR - KR * GR) / JR
        }
      },
      pR = function(RR, JR) {
        return aR(RR) && aR(JR) ? RR - JR : tR()(RR) && tR()(JR) ? RR.localeCompare(JR) : RR instanceof Date && JR instanceof Date ? RR.getTime() - JR.getTime() : String(RR).localeCompare(String(JR))
      }
  },
  7047: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => yR
    });
    var yR = {
      isSsr: !("undefined" !== typeof window && window.document && window.document.createElement && window.setTimeout),
      get: function(RR) {
        return yR[RR]
      },
      set: function(RR, JR) {
        if ("string" === typeof RR) yR[RR] = JR;
        else {
          var GR = Object.keys(RR);
          GR && GR.length && GR.forEach((function(JR) {
            yR[JR] = RR[JR]
          }))
        }
      }
    }
  },
  7312: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => yR
    });
    var yR = function(RR, JR) {
      var GR = RR.alwaysShow,
        yR = RR.ifOverflow;
      return GR && (yR = "extendDomain"), yR === JR
    }
  },
  6520: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => yR
    });
    var yR = function(RR, JR) {
      for (var GR = arguments.length, yR = new Array(GR > 2 ? GR - 2 : 0), tR = 2; tR < GR; tR++) yR[tR - 2] = arguments[tR]
    }
  },
  7309: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => qR,
      d: () => wR,
      g: () => fR
    });
    GR(6516), GR(66), GR(6357);

    function yR(RR) {
      return yR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, yR(RR)
    }

    function tR(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function uR(RR) {
      for (var JR = 1; JR < arguments.length; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? tR(Object(GR), !0).forEach((function(JR) {
          ZR(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : tR(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }

    function ZR(RR, JR, GR) {
      return (JR = function(RR) {
        var JR = function(RR, JR) {
          if ("object" != yR(RR) || !RR) return RR;
          var GR = RR[Symbol.toPrimitive];
          if (void 0 !== GR) {
            var tR = GR.call(RR, JR || "default");
            if ("object" != yR(tR)) return tR;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === JR ? String : Number)(RR)
        }(RR, "string");
        return "symbol" == yR(JR) ? JR : JR + ""
      }(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }
    var qR = Math.PI / 180,
      iR = function(RR) {
        return 180 * RR / Math.PI
      },
      fR = function(RR, JR, GR, yR) {
        return {
          x: RR + Math.cos(-qR * yR) * GR,
          y: JR + Math.sin(-qR * yR) * GR
        }
      },
      VR = function(RR, JR) {
        var GR = RR.x,
          yR = RR.y,
          tR = JR.cx,
          uR = JR.cy,
          ZR = function(RR, JR) {
            var GR = RR.x,
              yR = RR.y,
              tR = JR.x,
              uR = JR.y;
            return Math.sqrt(Math.pow(GR - tR, 2) + Math.pow(yR - uR, 2))
          }({
            x: GR,
            y: yR
          }, {
            x: tR,
            y: uR
          });
        if (ZR <= 0) return {
          radius: ZR
        };
        var qR = (GR - tR) / ZR,
          fR = Math.acos(qR);
        return yR > uR && (fR = 2 * Math.PI - fR), {
          radius: ZR,
          angle: iR(fR),
          angleInRadian: fR
        }
      },
      KR = function(RR, JR) {
        var GR = JR.startAngle,
          yR = JR.endAngle,
          tR = Math.floor(GR / 360),
          uR = Math.floor(yR / 360);
        return RR + 360 * Math.min(tR, uR)
      },
      wR = function(RR, JR) {
        var GR = RR.x,
          yR = RR.y,
          tR = VR({
            x: GR,
            y: yR
          }, JR),
          ZR = tR.radius,
          qR = tR.angle,
          iR = JR.innerRadius,
          fR = JR.outerRadius;
        if (ZR < iR || ZR > fR) return !1;
        if (0 === ZR) return !0;
        var wR, rR = function(RR) {
            var JR = RR.startAngle,
              GR = RR.endAngle,
              yR = Math.floor(JR / 360),
              tR = Math.floor(GR / 360),
              uR = Math.min(yR, tR);
            return {
              startAngle: JR - 360 * uR,
              endAngle: GR - 360 * uR
            }
          }(JR),
          eR = rR.startAngle,
          aR = rR.endAngle,
          LR = qR;
        if (eR <= aR) {
          for (; LR > aR;) LR -= 360;
          for (; LR < eR;) LR += 360;
          wR = LR >= eR && LR <= aR
        } else {
          for (; LR > eR;) LR -= 360;
          for (; LR < aR;) LR += 360;
          wR = LR >= aR && LR <= eR
        }
        return wR ? uR(uR({}, JR), {}, {
          radius: ZR,
          angle: KR(LR, JR)
        }) : null
      }
  },
  6523: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => DR,
      i: () => gR,
      j: () => bR,
      l: () => MR,
      o: () => PR,
      p: () => NR,
      q: () => HR,
      r: () => IR,
      v: () => cR,
      y: () => vR
    });
    var yR = GR(6262),
      tR = GR.n(yR),
      uR = GR(6516),
      ZR = GR.n(uR),
      qR = GR(6237),
      iR = GR.n(qR),
      fR = GR(6357),
      VR = GR.n(fR),
      KR = GR(6161),
      wR = GR.n(KR),
      rR = GR(66),
      eR = GR(6529),
      aR = GR(6235),
      LR = GR(6539),
      nR = GR(6542),
      UR = ["children"],
      WR = ["children"];

    function AR(RR, JR) {
      if (null == RR) return {};
      var GR, yR, tR = function(RR, JR) {
        if (null == RR) return {};
        var GR = {};
        for (var yR in RR)
          if (Object.prototype.hasOwnProperty.call(RR, yR)) {
            if (JR.indexOf(yR) >= 0) continue;
            GR[yR] = RR[yR]
          } return GR
      }(RR, JR);
      if (Object.getOwnPropertySymbols) {
        var uR = Object.getOwnPropertySymbols(RR);
        for (yR = 0; yR < uR.length; yR++) GR = uR[yR], JR.indexOf(GR) >= 0 || Object.prototype.propertyIsEnumerable.call(RR, GR) && (tR[GR] = RR[GR])
      }
      return tR
    }

    function CR(RR) {
      return CR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, CR(RR)
    }
    var XR = {
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
      MR = function(RR) {
        return "string" === typeof RR ? RR : RR ? RR.displayName || RR.name || "Component" : ""
      },
      BR = null,
      lR = null,
      pR = function RR(JR) {
        if (JR === BR && Array.isArray(lR)) return lR;
        var GR = [];
        return rR.Children.forEach(JR, (function(JR) {
          ZR()(JR) || ((0, eR.isFragment)(JR) ? GR = GR.concat(RR(JR.props.children)) : GR.push(JR))
        })), lR = GR, BR = JR, GR
      };

    function gR(RR, JR) {
      var GR = [],
        yR = [];
      return yR = Array.isArray(JR) ? JR.map((function(RR) {
        return MR(RR)
      })) : [MR(JR)], pR(RR).forEach((function(RR) {
        var JR = tR()(RR, "type.displayName") || tR()(RR, "type.name"); - 1 !== yR.indexOf(JR) && GR.push(RR)
      })), GR
    }

    function bR(RR, JR) {
      var GR = gR(RR, JR);
      return GR && GR[0]
    }
    var vR = function(RR) {
        if (!RR || !RR.props) return !1;
        var JR = RR.props,
          GR = JR.width,
          yR = JR.height;
        return !(!(0, aR.C)(GR) || GR <= 0 || !(0, aR.C)(yR) || yR <= 0)
      },
      OR = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"],
      xR = function(RR) {
        return RR && RR.type && iR()(RR.type) && OR.indexOf(RR.type) >= 0
      },
      NR = function(RR) {
        return RR && "object" === CR(RR) && "clipDot" in RR
      },
      DR = function(RR, JR, GR) {
        if (!RR || "function" === typeof RR || "boolean" === typeof RR) return null;
        var yR = RR;
        if ((0, rR.isValidElement)(RR) && (yR = RR.props), !wR()(yR)) return null;
        var tR = {};
        return Object.keys(yR).forEach((function(RR) {
          var uR;
          (function(RR, JR, GR, yR) {
            var tR, uR = null !== (tR = null === nR.d || void 0 === nR.d ? void 0 : nR.d[yR]) && void 0 !== tR ? tR : [];
            return JR.startsWith("data-") || !VR()(RR) && (yR && uR.includes(JR) || nR.e.includes(JR)) || GR && nR.c.includes(JR)
          })(null === (uR = yR) || void 0 === uR ? void 0 : uR[RR], RR, JR, GR) && (tR[RR] = yR[RR])
        })), tR
      },
      HR = function RR(JR, GR) {
        if (JR === GR) return !0;
        var yR = rR.Children.count(JR);
        if (yR !== rR.Children.count(GR)) return !1;
        if (0 === yR) return !0;
        if (1 === yR) return oR(Array.isArray(JR) ? JR[0] : JR, Array.isArray(GR) ? GR[0] : GR);
        for (var tR = 0; tR < yR; tR++) {
          var uR = JR[tR],
            ZR = GR[tR];
          if (Array.isArray(uR) || Array.isArray(ZR)) {
            if (!RR(uR, ZR)) return !1
          } else if (!oR(uR, ZR)) return !1
        }
        return !0
      },
      oR = function(RR, JR) {
        if (ZR()(RR) && ZR()(JR)) return !0;
        if (!ZR()(RR) && !ZR()(JR)) {
          var GR = RR.props || {},
            yR = GR.children,
            tR = AR(GR, UR),
            uR = JR.props || {},
            qR = uR.children,
            iR = AR(uR, WR);
          return yR && qR ? (0, LR.c)(tR, iR) && HR(yR, qR) : !yR && !qR && (0, LR.c)(tR, iR)
        }
        return !1
      },
      cR = function(RR, JR) {
        var GR = [],
          yR = {};
        return pR(RR).forEach((function(RR, tR) {
          if (xR(RR)) GR.push(RR);
          else if (RR) {
            var uR = MR(RR.type),
              ZR = JR[uR] || {},
              qR = ZR.handler,
              iR = ZR.once;
            if (qR && (!iR || !yR[uR])) {
              var fR = qR(RR, uR, tR);
              GR.push(fR), yR[uR] = !0
            }
          }
        })), GR
      },
      PR = function(RR) {
        var JR = RR && RR.type;
        return JR && XR[JR] ? XR[JR] : null
      },
      IR = function(RR, JR) {
        return pR(JR).indexOf(RR)
      }
  },
  6539: (RR, JR, GR) => {
    function yR(RR, JR) {
      for (var GR in RR)
        if ({}.hasOwnProperty.call(RR, GR) && (!{}.hasOwnProperty.call(JR, GR) || RR[GR] !== JR[GR])) return !1;
      for (var yR in JR)
        if ({}.hasOwnProperty.call(JR, yR) && !{}.hasOwnProperty.call(RR, yR)) return !1;
      return !0
    }
    GR.d(JR, {
      c: () => yR
    })
  },
  7287: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => VR
    });
    var yR = GR(7104),
      tR = GR(7192),
      uR = GR(6523);

    function ZR(RR) {
      return ZR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, ZR(RR)
    }

    function qR(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function iR(RR) {
      for (var JR = 1; JR < arguments.length; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? qR(Object(GR), !0).forEach((function(JR) {
          fR(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : qR(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }

    function fR(RR, JR, GR) {
      return (JR = function(RR) {
        var JR = function(RR, JR) {
          if ("object" != ZR(RR) || !RR) return RR;
          var GR = RR[Symbol.toPrimitive];
          if (void 0 !== GR) {
            var yR = GR.call(RR, JR || "default");
            if ("object" != ZR(yR)) return yR;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === JR ? String : Number)(RR)
        }(RR, "string");
        return "symbol" == ZR(JR) ? JR : JR + ""
      }(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }
    var VR = function(RR) {
      var JR = RR.children,
        GR = RR.formattedGraphicalItems,
        ZR = RR.legendWidth,
        qR = RR.legendContent,
        fR = (0, uR.j)(JR, yR.d);
      if (!fR) return null;
      var VR, KR = yR.d.defaultProps,
        wR = void 0 !== KR ? iR(iR({}, KR), fR.props) : {};
      return VR = fR.props && fR.props.payload ? fR.props && fR.props.payload : "children" === qR ? (GR || []).reduce((function(RR, JR) {
        var GR = JR.item,
          yR = JR.props,
          tR = yR.sectors || yR.data || [];
        return RR.concat(tR.map((function(RR) {
          return {
            type: fR.props.iconType || GR.props.legendType,
            value: RR.name,
            color: RR.fill,
            payload: RR
          }
        })))
      }), []) : (GR || []).map((function(RR) {
        var JR = RR.item,
          GR = JR.type.defaultProps,
          yR = void 0 !== GR ? iR(iR({}, GR), JR.props) : {},
          uR = yR.dataKey,
          ZR = yR.name,
          qR = yR.legendType;
        return {
          inactive: yR.hide,
          dataKey: uR,
          type: wR.iconType || qR || "square",
          color: (0, tR.Q)(JR),
          value: ZR || uR,
          payload: yR
        }
      })), iR(iR(iR({}, wR), yR.d.getWithHeight(fR, ZR)), {}, {
        payload: VR,
        item: fR
      })
    }
  },
  7049: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => qR
    });
    var yR = GR(7056),
      tR = GR.n(yR),
      uR = GR(6357),
      ZR = GR.n(uR);

    function qR(RR, JR, GR) {
      return !0 === JR ? tR()(RR, GR) : ZR()(JR) ? tR()(RR, JR) : RR
    }
  },
  6542: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => VR,
      d: () => fR,
      e: () => qR,
      f: () => KR,
      g: () => wR
    });
    var yR = GR(66),
      tR = GR(6161),
      uR = GR.n(tR);

    function ZR(RR) {
      return ZR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, ZR(RR)
    }
    var qR = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "UK", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"],
      iR = ["points", "pathLength"],
      fR = {
        svg: ["viewBox", "children"],
        polygon: iR,
        polyline: iR
      },
      VR = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"],
      KR = function(RR, JR) {
        if (!RR || "function" === typeof RR || "boolean" === typeof RR) return null;
        var GR = RR;
        if ((0, yR.isValidElement)(RR) && (GR = RR.props), !uR()(GR)) return null;
        var tR = {};
        return Object.keys(GR).forEach((function(RR) {
          VR.includes(RR) && (tR[RR] = JR || function(JR) {
            return GR[RR](GR, JR)
          })
        })), tR
      },
      wR = function(RR, JR, GR) {
        if (!uR()(RR) || "object" !== ZR(RR)) return null;
        var yR = null;
        return Object.keys(RR).forEach((function(tR) {
          var uR = RR[tR];
          VR.includes(tR) && "function" === typeof uR && (yR || (yR = {}), yR[tR] = function(RR, JR, GR) {
            return function(yR) {
              return RR(JR, GR, yR), null
            }
          }(uR, JR, GR))
        })), yR
      }
  },
  6531: (RR, JR) => {
    var GR, yR = Symbol.for("react.element"),
      tR = Symbol.for("react.portal"),
      uR = Symbol.for("react.fragment"),
      ZR = Symbol.for("react.strict_mode"),
      qR = Symbol.for("react.profiler"),
      iR = Symbol.for("react.provider"),
      fR = Symbol.for("react.context"),
      VR = Symbol.for("react.server_context"),
      KR = Symbol.for("react.forward_ref"),
      wR = Symbol.for("react.suspense"),
      rR = Symbol.for("react.suspense_list"),
      eR = Symbol.for("react.memo"),
      aR = Symbol.for("react.lazy"),
      LR = Symbol.for("react.offscreen");

    function nR(RR) {
      if ("object" === typeof RR && null !== RR) {
        var JR = RR.$$typeof;
        switch (JR) {
          case yR:
            switch (RR = RR.type) {
              case uR:
              case qR:
              case ZR:
              case wR:
              case rR:
                return RR;
              default:
                switch (RR = RR && RR.$$typeof) {
                  case VR:
                  case fR:
                  case KR:
                  case aR:
                  case eR:
                  case iR:
                    return RR;
                  default:
                    return JR
                }
            }
          case tR:
            return JR
        }
      }
    }
    GR = Symbol.for("react.module.reference"), JR.isFragment = function(RR) {
      return nR(RR) === uR
    }
  },
  6529: (RR, JR, GR) => {
    RR.exports = GR(6531)
  },
  6140: (RR, JR, GR) => {
    function yR(RR) {
      var JR, GR, tR = "";
      if ("string" == typeof RR || "number" == typeof RR) tR += RR;
      else if ("object" == typeof RR)
        if (Array.isArray(RR)) {
          var uR = RR.length;
          for (JR = 0; JR < uR; JR++) RR[JR] && (GR = yR(RR[JR])) && (tR && (tR += " "), tR += GR)
        } else
          for (GR in RR) RR[GR] && (tR && (tR += " "), tR += GR);
      return tR
    }
    GR.d(JR, {
      c: () => tR
    });
    const tR = function() {
      for (var RR, JR, GR = 0, tR = "", uR = arguments.length; GR < uR; GR++)(RR = arguments[GR]) && (JR = yR(RR)) && (tR && (tR += " "), tR += JR);
      return tR
    }
  },
  7201: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => uR,
      e: () => qR
    });
    var yR = GR(7209),
      tR = GR(7216);

    function uR() {
      var RR, JR, GR = (0, tR.b)().unknown(void 0),
        ZR = GR.domain,
        qR = GR.range,
        iR = 0,
        fR = 1,
        VR = !1,
        KR = 0,
        wR = 0,
        rR = .5;

      function eR() {
        var GR = ZR().length,
          yR = fR < iR,
          tR = yR ? fR : iR,
          uR = yR ? iR : fR;
        RR = (uR - tR) / Math.max(1, GR - KR + 2 * wR), VR && (RR = Math.floor(RR)), tR += (uR - tR - RR * (GR - KR)) * rR, JR = RR * (1 - KR), VR && (tR = Math.round(tR), JR = Math.round(JR));
        var eR = function(RR, JR, GR) {
          RR = +RR, JR = +JR, GR = (tR = arguments.length) < 2 ? (JR = RR, RR = 0, 1) : tR < 3 ? 1 : +GR;
          for (var yR = -1, tR = 0 | Math.max(0, Math.ceil((JR - RR) / GR)), uR = new Array(tR); ++yR < tR;) uR[yR] = RR + yR * GR;
          return uR
        }(GR).map((function(JR) {
          return tR + RR * JR
        }));
        return qR(yR ? eR.reverse() : eR)
      }
      return delete GR.unknown, GR.domain = function(RR) {
        return arguments.length ? (ZR(RR), eR()) : ZR()
      }, GR.range = function(RR) {
        return arguments.length ? ([iR, fR] = RR, iR = +iR, fR = +fR, eR()) : [iR, fR]
      }, GR.rangeRound = function(RR) {
        return [iR, fR] = RR, iR = +iR, fR = +fR, VR = !0, eR()
      }, GR.bandwidth = function() {
        return JR
      }, GR.step = function() {
        return RR
      }, GR.round = function(RR) {
        return arguments.length ? (VR = !!RR, eR()) : VR
      }, GR.padding = function(RR) {
        return arguments.length ? (KR = Math.min(1, wR = +RR), eR()) : KR
      }, GR.paddingInner = function(RR) {
        return arguments.length ? (KR = Math.min(1, RR), eR()) : KR
      }, GR.paddingOuter = function(RR) {
        return arguments.length ? (wR = +RR, eR()) : wR
      }, GR.align = function(RR) {
        return arguments.length ? (rR = Math.max(0, Math.min(1, RR)), eR()) : rR
      }, GR.copy = function() {
        return uR(ZR(), [iR, fR]).round(VR).paddingInner(KR).paddingOuter(wR).align(rR)
      }, yR.h.apply(eR(), arguments)
    }

    function ZR(RR) {
      var JR = RR.copy;
      return RR.padding = RR.paddingOuter, delete RR.paddingInner, delete RR.paddingOuter, RR.copy = function() {
        return ZR(JR())
      }, RR
    }

    function qR() {
      return ZR(uR.apply(null, arguments).paddingInner(1))
    }
  },
  7209: (RR, JR, GR) => {
    function yR(RR, JR) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(RR);
          break;
        default:
          this.range(JR).domain(RR)
      }
      return this
    }

    function tR(RR, JR) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          "function" === typeof RR ? this.interpolator(RR) : this.range(RR);
          break;
        default:
          this.domain(RR), "function" === typeof JR ? this.interpolator(JR) : this.range(JR)
      }
      return this
    }
    GR.d(JR, {
      e: () => tR,
      h: () => yR
    })
  },
  7216: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => VR,
      d: () => fR
    });
    class yR extends Map {
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qR;
        if (super(), Object.defineProperties(this, {
            _intern: {
              value: new Map
            },
            _key: {
              value: JR
            }
          }), null != RR)
          for (const [GR, yR] of RR) this.set(GR, yR)
      }
      get(RR) {
        return super.get(tR(this, RR))
      }
      has(RR) {
        return super.has(tR(this, RR))
      }
      set(RR, JR) {
        return super.set(uR(this, RR), JR)
      }
      delete(RR) {
        return super.delete(ZR(this, RR))
      }
    }
    Set;

    function tR(RR, JR) {
      let {
        _intern: GR,
        _key: yR
      } = RR;
      const tR = yR(JR);
      return GR.has(tR) ? GR.get(tR) : JR
    }

    function uR(RR, JR) {
      let {
        _intern: GR,
        _key: yR
      } = RR;
      const tR = yR(JR);
      return GR.has(tR) ? GR.get(tR) : (GR.set(tR, JR), JR)
    }

    function ZR(RR, JR) {
      let {
        _intern: GR,
        _key: yR
      } = RR;
      const tR = yR(JR);
      return GR.has(tR) && (JR = GR.get(tR), GR.delete(tR)), JR
    }

    function qR(RR) {
      return null !== RR && "object" === typeof RR ? RR.valueOf() : RR
    }
    var iR = GR(7209);
    const fR = Symbol("implicit");

    function VR() {
      var RR = new yR,
        JR = [],
        GR = [],
        tR = fR;

      function uR(yR) {
        let uR = RR.get(yR);
        if (void 0 === uR) {
          if (tR !== fR) return tR;
          RR.set(yR, uR = JR.push(yR) - 1)
        }
        return GR[uR % GR.length]
      }
      return uR.domain = function(GR) {
        if (!arguments.length) return JR.slice();
        JR = [], RR = new yR;
        for (const yR of GR) RR.has(yR) || RR.set(yR, JR.push(yR) - 1);
        return uR
      }, uR.range = function(RR) {
        return arguments.length ? (GR = Array.from(RR), uR) : GR.slice()
      }, uR.unknown = function(RR) {
        return arguments.length ? (tR = RR, uR) : tR
      }, uR.copy = function() {
        return VR(JR, GR).unknown(tR)
      }, iR.h.apply(uR, arguments), uR
    }
  },
  7294: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => yR
    });
    Array.prototype.slice;

    function yR(RR) {
      return "object" === typeof RR && "length" in RR ? RR : Array.from(RR)
    }
  },
  7159: (RR, JR, GR) => {
    function yR(RR) {
      return function() {
        return RR
      }
    }
    GR.d(JR, {
      d: () => yR
    })
  },
  7168: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => fR
    });
    const yR = Math.PI,
      tR = 2 * yR,
      uR = 1e-6,
      ZR = tR - uR;

    function qR(RR) {
      this._ += RR[0];
      for (let JR = 1, GR = RR.length; JR < GR; ++JR) this._ += arguments[JR] + RR[JR]
    }
    class iR {
      constructor(RR) {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == RR ? qR : function(RR) {
          let JR = Math.floor(RR);
          if (!(JR >= 0)) throw new Error(`invalid digits: ${RR}`);
          if (JR > 15) return qR;
          const GR = 10 ** JR;
          return function(RR) {
            this._ += RR[0];
            for (let JR = 1, yR = RR.length; JR < yR; ++JR) this._ += Math.round(arguments[JR] * GR) / GR + RR[JR]
          }
        }(RR)
      }
      moveTo(RR, JR) {
        this._append`M${this._x0=this._x1=+RR},${this._y0=this._y1=+JR}`
      }
      closePath() {
        null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`)
      }
      lineTo(RR, JR) {
        this._append`L${this._x1=+RR},${this._y1=+JR}`
      }
      quadraticCurveTo(RR, JR, GR, yR) {
        this._append`Q${+RR},${+JR},${this._x1=+GR},${this._y1=+yR}`
      }
      bezierCurveTo(RR, JR, GR, yR, tR, uR) {
        this._append`C${+RR},${+JR},${+GR},${+yR},${this._x1=+tR},${this._y1=+uR}`
      }
      arcTo(RR, JR, GR, tR, ZR) {
        if (RR = +RR, JR = +JR, GR = +GR, tR = +tR, (ZR = +ZR) < 0) throw new Error(`negative radius: ${ZR}`);
        let qR = this._x1,
          iR = this._y1,
          fR = GR - RR,
          VR = tR - JR,
          KR = qR - RR,
          wR = iR - JR,
          rR = KR * KR + wR * wR;
        if (null === this._x1) this._append`M${this._x1=RR},${this._y1=JR}`;
        else if (rR > uR)
          if (Math.abs(wR * fR - VR * KR) > uR && ZR) {
            let eR = GR - qR,
              aR = tR - iR,
              LR = fR * fR + VR * VR,
              nR = eR * eR + aR * aR,
              UR = Math.sqrt(LR),
              WR = Math.sqrt(rR),
              AR = ZR * Math.tan((yR - Math.acos((LR + rR - nR) / (2 * UR * WR))) / 2),
              CR = AR / WR,
              XR = AR / UR;
            Math.abs(CR - 1) > uR && this._append`L${RR+CR*KR},${JR+CR*wR}`, this._append`A${ZR},${ZR},0,0,${+(wR*eR>KR*aR)},${this._x1=RR+XR*fR},${this._y1=JR+XR*VR}`
          } else this._append`L${this._x1=RR},${this._y1=JR}`;
        else;
      }
      arc(RR, JR, GR, qR, iR, fR) {
        if (RR = +RR, JR = +JR, fR = !!fR, (GR = +GR) < 0) throw new Error(`negative radius: ${GR}`);
        let VR = GR * Math.cos(qR),
          KR = GR * Math.sin(qR),
          wR = RR + VR,
          rR = JR + KR,
          eR = 1 ^ fR,
          aR = fR ? qR - iR : iR - qR;
        null === this._x1 ? this._append`M${wR},${rR}` : (Math.abs(this._x1 - wR) > uR || Math.abs(this._y1 - rR) > uR) && this._append`L${wR},${rR}`, GR && (aR < 0 && (aR = aR % tR + tR), aR > ZR ? this._append`A${GR},${GR},0,1,${eR},${RR-VR},${JR-KR}A${GR},${GR},0,1,${eR},${this._x1=wR},${this._y1=rR}` : aR > uR && this._append`A${GR},${GR},0,${+(aR>=yR)},${eR},${this._x1=RR+GR*Math.cos(iR)},${this._y1=JR+GR*Math.sin(iR)}`)
      }
      rect(RR, JR, GR, yR) {
        this._append`M${this._x0=this._x1=+RR},${this._y0=this._y1=+JR}h${GR=+GR}v${+yR}h${-GR}Z`
      }
      toString() {
        return this._
      }
    }

    function fR(RR) {
      let JR = 3;
      return RR.digits = function(GR) {
        if (!arguments.length) return JR;
        if (null == GR) JR = null;
        else {
          const RR = Math.floor(GR);
          if (!(RR >= 0)) throw new RangeError(`invalid digits: ${GR}`);
          JR = RR
        }
        return RR
      }, () => new iR(JR)
    }
    iR.prototype
  },
  7026: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => uR
    });
    var yR = !0,
      tR = "Invariant failed";

    function uR(RR, JR) {
      if (!RR) {
        if (yR) throw new Error(tR);
        var GR = "function" === typeof JR ? JR() : JR,
          uR = GR ? "".concat(tR, ": ").concat(GR) : tR;
        throw new Error(uR)
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);