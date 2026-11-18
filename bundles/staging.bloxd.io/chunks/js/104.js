/*! For license information please see l9xvfg.104.2d0aedaa.chunk.js.LICENSE.txt */
export const id = 104;
export const ids = [104];
export const modules = {
  5572: function(BB, TB, dB) {
    var VB;
    ! function() {
      var yB, pB = 1e9,
        lB = {
          precision: 20,
          rounding: 4,
          toExpNeg: -7,
          toExpPos: 21,
          LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
        },
        JB = !0,
        YB = "[DecimalError] ",
        gB = YB + "Invalid argument: ",
        oB = YB + "Exponent out of range: ",
        kB = Math.floor,
        LB = Math.pow,
        OB = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        DB = 1e7,
        uB = 9007199254740991,
        HB = kB(1286742750677284.5),
        EB = {};

      function vB(BB, TB) {
        var dB, VB, yB, pB, lB, YB, gB, oB, kB = BB.constructor,
          LB = kB.precision;
        if (!BB.s || !TB.s) return TB.s || (TB = new kB(BB)), JB ? UB(TB, LB) : TB;
        if (gB = BB.d, oB = TB.d, lB = BB.e, yB = TB.e, gB = gB.slice(), pB = lB - yB) {
          for (pB < 0 ? (VB = gB, pB = -pB, YB = oB.length) : (VB = oB, yB = lB, YB = gB.length), pB > (YB = (lB = Math.ceil(LB / 7)) > YB ? lB + 1 : YB + 1) && (pB = YB, VB.length = 1), VB.reverse(); pB--;) VB.push(0);
          VB.reverse()
        }
        for ((YB = gB.length) - (pB = oB.length) < 0 && (pB = YB, VB = oB, oB = gB, gB = VB), dB = 0; pB;) dB = (gB[--pB] = gB[pB] + oB[pB] + dB) / DB | 0, gB[pB] %= DB;
        for (dB && (gB.unshift(dB), ++yB), YB = gB.length; 0 == gB[--YB];) gB.pop();
        return TB.d = gB, TB.e = yB, JB ? UB(TB, LB) : TB
      }

      function mB(BB, TB, dB) {
        if (BB !== ~~BB || BB < TB || BB > dB) throw Error(gB + BB)
      }

      function iB(BB) {
        var TB, dB, VB, yB = BB.length - 1,
          pB = "",
          lB = BB[0];
        if (yB > 0) {
          for (pB += lB, TB = 1; TB < yB; TB++)(dB = 7 - (VB = BB[TB] + "").length) && (pB += MB(dB)), pB += VB;
          (dB = 7 - (VB = (lB = BB[TB]) + "").length) && (pB += MB(dB))
        } else if (0 === lB) return "0";
        for (; lB % 10 === 0;) lB /= 10;
        return pB + lB
      }
      EB.absoluteValue = EB.abs = function() {
        var BB = new this.constructor(this);
        return BB.s && (BB.s = 1), BB
      }, EB.comparedTo = EB.cmp = function(BB) {
        var TB, dB, VB, yB, pB = this;
        if (BB = new pB.constructor(BB), pB.s !== BB.s) return pB.s || -BB.s;
        if (pB.e !== BB.e) return pB.e > BB.e ^ pB.s < 0 ? 1 : -1;
        for (TB = 0, dB = (VB = pB.d.length) < (yB = BB.d.length) ? VB : yB; TB < dB; ++TB)
          if (pB.d[TB] !== BB.d[TB]) return pB.d[TB] > BB.d[TB] ^ pB.s < 0 ? 1 : -1;
        return VB === yB ? 0 : VB > yB ^ pB.s < 0 ? 1 : -1
      }, EB.decimalPlaces = EB.dp = function() {
        var BB = this,
          TB = BB.d.length - 1,
          dB = 7 * (TB - BB.e);
        if (TB = BB.d[TB])
          for (; TB % 10 == 0; TB /= 10) dB--;
        return dB < 0 ? 0 : dB
      }, EB.dividedBy = EB.div = function(BB) {
        return NB(this, new this.constructor(BB))
      }, EB.dividedToIntegerBy = EB.idiv = function(BB) {
        var TB = this.constructor;
        return UB(NB(this, new TB(BB), 0, 1), TB.precision)
      }, EB.equals = EB.eq = function(BB) {
        return !this.cmp(BB)
      }, EB.exponent = function() {
        return fB(this)
      }, EB.greaterThan = EB.gt = function(BB) {
        return this.cmp(BB) > 0
      }, EB.greaterThanOrEqualTo = EB.gte = function(BB) {
        return this.cmp(BB) >= 0
      }, EB.isInteger = EB.isint = function() {
        return this.e > this.d.length - 2
      }, EB.isNegative = EB.isneg = function() {
        return this.s < 0
      }, EB.isPositive = EB.ispos = function() {
        return this.s > 0
      }, EB.isZero = function() {
        return 0 === this.s
      }, EB.lessThan = EB.lt = function(BB) {
        return this.cmp(BB) < 0
      }, EB.lessThanOrEqualTo = EB.lte = function(BB) {
        return this.cmp(BB) < 1
      }, EB.logarithm = EB.log = function(BB) {
        var TB, dB = this,
          VB = dB.constructor,
          pB = VB.precision,
          lB = pB + 5;
        if (void 0 === BB) BB = new VB(10);
        else if ((BB = new VB(BB)).s < 1 || BB.eq(yB)) throw Error(YB + "NaN");
        if (dB.s < 1) throw Error(YB + (dB.s ? "NaN" : "-Infinity"));
        return dB.eq(yB) ? new VB(0) : (JB = !1, TB = NB(zB(dB, lB), zB(BB, lB), lB), JB = !0, UB(TB, pB))
      }, EB.minus = EB.sub = function(BB) {
        var TB = this;
        return BB = new TB.constructor(BB), TB.s == BB.s ? FB(TB, BB) : vB(TB, (BB.s = -BB.s, BB))
      }, EB.modulo = EB.mod = function(BB) {
        var TB, dB = this,
          VB = dB.constructor,
          yB = VB.precision;
        if (!(BB = new VB(BB)).s) throw Error(YB + "NaN");
        return dB.s ? (JB = !1, TB = NB(dB, BB, 0, 1).times(BB), JB = !0, dB.minus(TB)) : UB(new VB(dB), yB)
      }, EB.naturalExponential = EB.exp = function() {
        return tB(this)
      }, EB.naturalLogarithm = EB.ln = function() {
        return zB(this)
      }, EB.negated = EB.neg = function() {
        var BB = new this.constructor(this);
        return BB.s = -BB.s || 0, BB
      }, EB.plus = EB.add = function(BB) {
        var TB = this;
        return BB = new TB.constructor(BB), TB.s == BB.s ? vB(TB, BB) : FB(TB, (BB.s = -BB.s, BB))
      }, EB.precision = EB.sd = function(BB) {
        var TB, dB, VB, yB = this;
        if (void 0 !== BB && BB !== !!BB && 1 !== BB && 0 !== BB) throw Error(gB + BB);
        if (TB = fB(yB) + 1, dB = 7 * (VB = yB.d.length - 1) + 1, VB = yB.d[VB]) {
          for (; VB % 10 == 0; VB /= 10) dB--;
          for (VB = yB.d[0]; VB >= 10; VB /= 10) dB++
        }
        return BB && TB > dB ? TB : dB
      }, EB.squareRoot = EB.sqrt = function() {
        var BB, TB, dB, VB, yB, pB, lB, gB = this,
          oB = gB.constructor;
        if (gB.s < 1) {
          if (!gB.s) return new oB(0);
          throw Error(YB + "NaN")
        }
        for (BB = fB(gB), JB = !1, 0 == (yB = Math.sqrt(+gB)) || yB == 1 / 0 ? (((TB = iB(gB.d)).length + BB) % 2 == 0 && (TB += "0"), yB = Math.sqrt(TB), BB = kB((BB + 1) / 2) - (BB < 0 || BB % 2), VB = new oB(TB = yB == 1 / 0 ? "1e" + BB : (TB = yB.toExponential()).slice(0, TB.indexOf("e") + 1) + BB)) : VB = new oB(yB.toString()), yB = lB = (dB = oB.precision) + 3;;)
          if (VB = (pB = VB).plus(NB(gB, pB, lB + 2)).times(.5), iB(pB.d).slice(0, lB) === (TB = iB(VB.d)).slice(0, lB)) {
            if (TB = TB.slice(lB - 3, lB + 1), yB == lB && "4999" == TB) {
              if (UB(pB, dB + 1, 0), pB.times(pB).eq(gB)) {
                VB = pB;
                break
              }
            } else if ("9999" != TB) break;
            lB += 4
          } return JB = !0, UB(VB, dB)
      }, EB.times = EB.mul = function(BB) {
        var TB, dB, VB, yB, pB, lB, YB, gB, oB, kB = this,
          LB = kB.constructor,
          OB = kB.d,
          uB = (BB = new LB(BB)).d;
        if (!kB.s || !BB.s) return new LB(0);
        for (BB.s *= kB.s, dB = kB.e + BB.e, (gB = OB.length) < (oB = uB.length) && (pB = OB, OB = uB, uB = pB, lB = gB, gB = oB, oB = lB), pB = [], VB = lB = gB + oB; VB--;) pB.push(0);
        for (VB = oB; --VB >= 0;) {
          for (TB = 0, yB = gB + VB; yB > VB;) YB = pB[yB] + uB[VB] * OB[yB - VB - 1] + TB, pB[yB--] = YB % DB | 0, TB = YB / DB | 0;
          pB[yB] = (pB[yB] + TB) % DB | 0
        }
        for (; !pB[--lB];) pB.pop();
        return TB ? ++dB : pB.shift(), BB.d = pB, BB.e = dB, JB ? UB(BB, LB.precision) : BB
      }, EB.toDecimalPlaces = EB.todp = function(BB, TB) {
        var dB = this,
          VB = dB.constructor;
        return dB = new VB(dB), void 0 === BB ? dB : (mB(BB, 0, pB), void 0 === TB ? TB = VB.rounding : mB(TB, 0, 8), UB(dB, BB + fB(dB) + 1, TB))
      }, EB.toExponential = function(BB, TB) {
        var dB, VB = this,
          yB = VB.constructor;
        return void 0 === BB ? dB = KB(VB, !0) : (mB(BB, 0, pB), void 0 === TB ? TB = yB.rounding : mB(TB, 0, 8), dB = KB(VB = UB(new yB(VB), BB + 1, TB), !0, BB + 1)), dB
      }, EB.toFixed = function(BB, TB) {
        var dB, VB, yB = this,
          lB = yB.constructor;
        return void 0 === BB ? KB(yB) : (mB(BB, 0, pB), void 0 === TB ? TB = lB.rounding : mB(TB, 0, 8), dB = KB((VB = UB(new lB(yB), BB + fB(yB) + 1, TB)).abs(), !1, BB + fB(VB) + 1), yB.isneg() && !yB.isZero() ? "-" + dB : dB)
      }, EB.toInteger = EB.toint = function() {
        var BB = this,
          TB = BB.constructor;
        return UB(new TB(BB), fB(BB) + 1, TB.rounding)
      }, EB.toNumber = function() {
        return +this
      }, EB.toPower = EB.pow = function(BB) {
        var TB, dB, VB, pB, lB, gB, oB = this,
          LB = oB.constructor,
          OB = +(BB = new LB(BB));
        if (!BB.s) return new LB(yB);
        if (!(oB = new LB(oB)).s) {
          if (BB.s < 1) throw Error(YB + "Infinity");
          return oB
        }
        if (oB.eq(yB)) return oB;
        if (VB = LB.precision, BB.eq(yB)) return UB(oB, VB);
        if (gB = (TB = BB.e) >= (dB = BB.d.length - 1), lB = oB.s, gB) {
          if ((dB = OB < 0 ? -OB : OB) <= uB) {
            for (pB = new LB(yB), TB = Math.ceil(VB / 7 + 4), JB = !1; dB % 2 && rB((pB = pB.times(oB)).d, TB), 0 !== (dB = kB(dB / 2));) rB((oB = oB.times(oB)).d, TB);
            return JB = !0, BB.s < 0 ? new LB(yB).div(pB) : UB(pB, VB)
          }
        } else if (lB < 0) throw Error(YB + "NaN");
        return lB = lB < 0 && 1 & BB.d[Math.max(TB, dB)] ? -1 : 1, oB.s = 1, JB = !1, pB = BB.times(zB(oB, VB + 12)), JB = !0, (pB = tB(pB)).s = lB, pB
      }, EB.toPrecision = function(BB, TB) {
        var dB, VB, yB = this,
          lB = yB.constructor;
        return void 0 === BB ? VB = KB(yB, (dB = fB(yB)) <= lB.toExpNeg || dB >= lB.toExpPos) : (mB(BB, 1, pB), void 0 === TB ? TB = lB.rounding : mB(TB, 0, 8), VB = KB(yB = UB(new lB(yB), BB, TB), BB <= (dB = fB(yB)) || dB <= lB.toExpNeg, BB)), VB
      }, EB.toSignificantDigits = EB.tosd = function(BB, TB) {
        var dB = this.constructor;
        return void 0 === BB ? (BB = dB.precision, TB = dB.rounding) : (mB(BB, 1, pB), void 0 === TB ? TB = dB.rounding : mB(TB, 0, 8)), UB(new dB(this), BB, TB)
      }, EB.toString = EB.valueOf = EB.val = EB.toJSON = function() {
        var BB = this,
          TB = fB(BB),
          dB = BB.constructor;
        return KB(BB, TB <= dB.toExpNeg || TB >= dB.toExpPos)
      };
      var NB = function() {
        function BB(BB, TB) {
          var dB, VB = 0,
            yB = BB.length;
          for (BB = BB.slice(); yB--;) dB = BB[yB] * TB + VB, BB[yB] = dB % DB | 0, VB = dB / DB | 0;
          return VB && BB.unshift(VB), BB
        }

        function TB(BB, TB, dB, VB) {
          var yB, pB;
          if (dB != VB) pB = dB > VB ? 1 : -1;
          else
            for (yB = pB = 0; yB < dB; yB++)
              if (BB[yB] != TB[yB]) {
                pB = BB[yB] > TB[yB] ? 1 : -1;
                break
              } return pB
        }

        function dB(BB, TB, dB) {
          for (var VB = 0; dB--;) BB[dB] -= VB, VB = BB[dB] < TB[dB] ? 1 : 0, BB[dB] = VB * DB + BB[dB] - TB[dB];
          for (; !BB[0] && BB.length > 1;) BB.shift()
        }
        return function(VB, yB, pB, lB) {
          var JB, gB, oB, kB, LB, OB, uB, HB, EB, vB, mB, iB, NB, tB, sB, MB, zB, wB, FB = VB.constructor,
            KB = VB.s == yB.s ? 1 : -1,
            rB = VB.d,
            IB = yB.d;
          if (!VB.s) return new FB(VB);
          if (!yB.s) throw Error(YB + "Division by zero");
          for (gB = VB.e - yB.e, zB = IB.length, sB = rB.length, HB = (uB = new FB(KB)).d = [], oB = 0; IB[oB] == (rB[oB] || 0);) ++oB;
          if (IB[oB] > (rB[oB] || 0) && --gB, (iB = null == pB ? pB = FB.precision : lB ? pB + (fB(VB) - fB(yB)) + 1 : pB) < 0) return new FB(0);
          if (iB = iB / 7 + 2 | 0, oB = 0, 1 == zB)
            for (kB = 0, IB = IB[0], iB++;
              (oB < sB || kB) && iB--; oB++) NB = kB * DB + (rB[oB] || 0), HB[oB] = NB / IB | 0, kB = NB % IB | 0;
          else {
            for ((kB = DB / (IB[0] + 1) | 0) > 1 && (IB = BB(IB, kB), rB = BB(rB, kB), zB = IB.length, sB = rB.length), tB = zB, vB = (EB = rB.slice(0, zB)).length; vB < zB;) EB[vB++] = 0;
            (wB = IB.slice()).unshift(0), MB = IB[0], IB[1] >= DB / 2 && ++MB;
            do {
              kB = 0, (JB = TB(IB, EB, zB, vB)) < 0 ? (mB = EB[0], zB != vB && (mB = mB * DB + (EB[1] || 0)), (kB = mB / MB | 0) > 1 ? (kB >= DB && (kB = DB - 1), 1 == (JB = TB(LB = BB(IB, kB), EB, OB = LB.length, vB = EB.length)) && (kB--, dB(LB, zB < OB ? wB : IB, OB))) : (0 == kB && (JB = kB = 1), LB = IB.slice()), (OB = LB.length) < vB && LB.unshift(0), dB(EB, LB, vB), -1 == JB && (JB = TB(IB, EB, zB, vB = EB.length)) < 1 && (kB++, dB(EB, zB < vB ? wB : IB, vB)), vB = EB.length) : 0 === JB && (kB++, EB = [0]), HB[oB++] = kB, JB && EB[0] ? EB[vB++] = rB[tB] || 0 : (EB = [rB[tB]], vB = 1)
            } while ((tB++ < sB || void 0 !== EB[0]) && iB--)
          }
          return HB[0] || HB.shift(), uB.e = gB, UB(uB, lB ? pB + fB(uB) + 1 : pB)
        }
      }();

      function tB(BB, TB) {
        var dB, VB, pB, lB, YB, gB = 0,
          kB = 0,
          OB = BB.constructor,
          DB = OB.precision;
        if (fB(BB) > 16) throw Error(oB + fB(BB));
        if (!BB.s) return new OB(yB);
        for (null == TB ? (JB = !1, YB = DB) : YB = TB, lB = new OB(.03125); BB.abs().gte(.1);) BB = BB.times(lB), kB += 5;
        for (YB += Math.log(LB(2, kB)) / Math.LN10 * 2 + 5 | 0, dB = VB = pB = new OB(yB), OB.precision = YB;;) {
          if (VB = UB(VB.times(BB), YB), dB = dB.times(++gB), iB((lB = pB.plus(NB(VB, dB, YB))).d).slice(0, YB) === iB(pB.d).slice(0, YB)) {
            for (; kB--;) pB = UB(pB.times(pB), YB);
            return OB.precision = DB, null == TB ? (JB = !0, UB(pB, DB)) : pB
          }
          pB = lB
        }
      }

      function fB(BB) {
        for (var TB = 7 * BB.e, dB = BB.d[0]; dB >= 10; dB /= 10) TB++;
        return TB
      }

      function sB(BB, TB, dB) {
        if (TB > BB.LN10.sd()) throw JB = !0, dB && (BB.precision = dB), Error(YB + "LN10 precision limit exceeded");
        return UB(new BB(BB.LN10), TB)
      }

      function MB(BB) {
        for (var TB = ""; BB--;) TB += "0";
        return TB
      }

      function zB(BB, TB) {
        var dB, VB, pB, lB, gB, oB, kB, LB, OB, DB = 1,
          uB = BB,
          HB = uB.d,
          EB = uB.constructor,
          vB = EB.precision;
        if (uB.s < 1) throw Error(YB + (uB.s ? "NaN" : "-Infinity"));
        if (uB.eq(yB)) return new EB(0);
        if (null == TB ? (JB = !1, LB = vB) : LB = TB, uB.eq(10)) return null == TB && (JB = !0), sB(EB, LB);
        if (LB += 10, EB.precision = LB, VB = (dB = iB(HB)).charAt(0), lB = fB(uB), !(Math.abs(lB) < 15e14)) return kB = sB(EB, LB + 2, vB).times(lB + ""), uB = zB(new EB(VB + "." + dB.slice(1)), LB - 10).plus(kB), EB.precision = vB, null == TB ? (JB = !0, UB(uB, vB)) : uB;
        for (; VB < 7 && 1 != VB || 1 == VB && dB.charAt(1) > 3;) VB = (dB = iB((uB = uB.times(BB)).d)).charAt(0), DB++;
        for (lB = fB(uB), VB > 1 ? (uB = new EB("0." + dB), lB++) : uB = new EB(VB + "." + dB.slice(1)), oB = gB = uB = NB(uB.minus(yB), uB.plus(yB), LB), OB = UB(uB.times(uB), LB), pB = 3;;) {
          if (gB = UB(gB.times(OB), LB), iB((kB = oB.plus(NB(gB, new EB(pB), LB))).d).slice(0, LB) === iB(oB.d).slice(0, LB)) return oB = oB.times(2), 0 !== lB && (oB = oB.plus(sB(EB, LB + 2, vB).times(lB + ""))), oB = NB(oB, new EB(DB), LB), EB.precision = vB, null == TB ? (JB = !0, UB(oB, vB)) : oB;
          oB = kB, pB += 2
        }
      }

      function wB(BB, TB) {
        var dB, VB, yB;
        for ((dB = TB.indexOf(".")) > -1 && (TB = TB.replace(".", "")), (VB = TB.search(/e/i)) > 0 ? (dB < 0 && (dB = VB), dB += +TB.slice(VB + 1), TB = TB.substring(0, VB)) : dB < 0 && (dB = TB.length), VB = 0; 48 === TB.charCodeAt(VB);) ++VB;
        for (yB = TB.length; 48 === TB.charCodeAt(yB - 1);) --yB;
        if (TB = TB.slice(VB, yB)) {
          if (yB -= VB, dB = dB - VB - 1, BB.e = kB(dB / 7), BB.d = [], VB = (dB + 1) % 7, dB < 0 && (VB += 7), VB < yB) {
            for (VB && BB.d.push(+TB.slice(0, VB)), yB -= 7; VB < yB;) BB.d.push(+TB.slice(VB, VB += 7));
            VB = 7 - (TB = TB.slice(VB)).length
          } else VB -= yB;
          for (; VB--;) TB += "0";
          if (BB.d.push(+TB), JB && (BB.e > HB || BB.e < -HB)) throw Error(oB + dB)
        } else BB.s = 0, BB.e = 0, BB.d = [0];
        return BB
      }

      function UB(BB, TB, dB) {
        var VB, yB, pB, lB, YB, gB, OB, uB, EB = BB.d;
        for (lB = 1, pB = EB[0]; pB >= 10; pB /= 10) lB++;
        if ((VB = TB - lB) < 0) VB += 7, yB = TB, OB = EB[uB = 0];
        else {
          if ((uB = Math.ceil((VB + 1) / 7)) >= (pB = EB.length)) return BB;
          for (OB = pB = EB[uB], lB = 1; pB >= 10; pB /= 10) lB++;
          yB = (VB %= 7) - 7 + lB
        }
        if (void 0 !== dB && (YB = OB / (pB = LB(10, lB - yB - 1)) % 10 | 0, gB = TB < 0 || void 0 !== EB[uB + 1] || OB % pB, gB = dB < 4 ? (YB || gB) && (0 == dB || dB == (BB.s < 0 ? 3 : 2)) : YB > 5 || 5 == YB && (4 == dB || gB || 6 == dB && (VB > 0 ? yB > 0 ? OB / LB(10, lB - yB) : 0 : EB[uB - 1]) % 10 & 1 || dB == (BB.s < 0 ? 8 : 7))), TB < 1 || !EB[0]) return gB ? (pB = fB(BB), EB.length = 1, TB = TB - pB - 1, EB[0] = LB(10, (7 - TB % 7) % 7), BB.e = kB(-TB / 7) || 0) : (EB.length = 1, EB[0] = BB.e = BB.s = 0), BB;
        if (0 == VB ? (EB.length = uB, pB = 1, uB--) : (EB.length = uB + 1, pB = LB(10, 7 - VB), EB[uB] = yB > 0 ? (OB / LB(10, lB - yB) % LB(10, yB) | 0) * pB : 0), gB)
          for (;;) {
            if (0 == uB) {
              (EB[0] += pB) == DB && (EB[0] = 1, ++BB.e);
              break
            }
            if (EB[uB] += pB, EB[uB] != DB) break;
            EB[uB--] = 0, pB = 1
          }
        for (VB = EB.length; 0 === EB[--VB];) EB.pop();
        if (JB && (BB.e > HB || BB.e < -HB)) throw Error(oB + fB(BB));
        return BB
      }

      function FB(BB, TB) {
        var dB, VB, yB, pB, lB, YB, gB, oB, kB, LB, OB = BB.constructor,
          uB = OB.precision;
        if (!BB.s || !TB.s) return TB.s ? TB.s = -TB.s : TB = new OB(BB), JB ? UB(TB, uB) : TB;
        if (gB = BB.d, LB = TB.d, VB = TB.e, oB = BB.e, gB = gB.slice(), lB = oB - VB) {
          for ((kB = lB < 0) ? (dB = gB, lB = -lB, YB = LB.length) : (dB = LB, VB = oB, YB = gB.length), lB > (yB = Math.max(Math.ceil(uB / 7), YB) + 2) && (lB = yB, dB.length = 1), dB.reverse(), yB = lB; yB--;) dB.push(0);
          dB.reverse()
        } else {
          for ((kB = (yB = gB.length) < (YB = LB.length)) && (YB = yB), yB = 0; yB < YB; yB++)
            if (gB[yB] != LB[yB]) {
              kB = gB[yB] < LB[yB];
              break
            } lB = 0
        }
        for (kB && (dB = gB, gB = LB, LB = dB, TB.s = -TB.s), YB = gB.length, yB = LB.length - YB; yB > 0; --yB) gB[YB++] = 0;
        for (yB = LB.length; yB > lB;) {
          if (gB[--yB] < LB[yB]) {
            for (pB = yB; pB && 0 === gB[--pB];) gB[pB] = DB - 1;
            --gB[pB], gB[yB] += DB
          }
          gB[yB] -= LB[yB]
        }
        for (; 0 === gB[--YB];) gB.pop();
        for (; 0 === gB[0]; gB.shift()) --VB;
        return gB[0] ? (TB.d = gB, TB.e = VB, JB ? UB(TB, uB) : TB) : new OB(0)
      }

      function KB(BB, TB, dB) {
        var VB, yB = fB(BB),
          pB = iB(BB.d),
          lB = pB.length;
        return TB ? (dB && (VB = dB - lB) > 0 ? pB = pB.charAt(0) + "." + pB.slice(1) + MB(VB) : lB > 1 && (pB = pB.charAt(0) + "." + pB.slice(1)), pB = pB + (yB < 0 ? "e" : "e+") + yB) : yB < 0 ? (pB = "0." + MB(-yB - 1) + pB, dB && (VB = dB - lB) > 0 && (pB += MB(VB))) : yB >= lB ? (pB += MB(yB + 1 - lB), dB && (VB = dB - yB - 1) > 0 && (pB = pB + "." + MB(VB))) : ((VB = yB + 1) < lB && (pB = pB.slice(0, VB) + "." + pB.slice(VB)), dB && (VB = dB - lB) > 0 && (yB + 1 === lB && (pB += "."), pB += MB(VB))), BB.s < 0 ? "-" + pB : pB
      }

      function rB(BB, TB) {
        if (BB.length > TB) return BB.length = TB, !0
      }

      function IB(BB) {
        if (!BB || "object" !== typeof BB) throw Error(YB + "Object expected");
        var TB, dB, VB, yB = ["precision", 1, pB, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
        for (TB = 0; TB < yB.length; TB += 3)
          if (void 0 !== (VB = BB[dB = yB[TB]])) {
            if (!(kB(VB) === VB && VB >= yB[TB + 1] && VB <= yB[TB + 2])) throw Error(gB + dB + ": " + VB);
            this[dB] = VB
          } if (void 0 !== (VB = BB[dB = "LN10"])) {
          if (VB != Math.LN10) throw Error(gB + dB + ": " + VB);
          this[dB] = new this(VB)
        }
        return this
      }
      lB = function BB(TB) {
        var dB, VB, yB;

        function pB(BB) {
          var TB = this;
          if (!(TB instanceof pB)) return new pB(BB);
          if (TB.constructor = pB, BB instanceof pB) return TB.s = BB.s, TB.e = BB.e, void(TB.d = (BB = BB.d) ? BB.slice() : BB);
          if ("number" === typeof BB) {
            if (0 * BB !== 0) throw Error(gB + BB);
            if (BB > 0) TB.s = 1;
            else {
              if (!(BB < 0)) return TB.s = 0, TB.e = 0, void(TB.d = [0]);
              BB = -BB, TB.s = -1
            }
            return BB === ~~BB && BB < 1e7 ? (TB.e = 0, void(TB.d = [BB])) : wB(TB, BB.toString())
          }
          if ("string" !== typeof BB) throw Error(gB + BB);
          if (45 === BB.charCodeAt(0) ? (BB = BB.slice(1), TB.s = -1) : TB.s = 1, !OB.test(BB)) throw Error(gB + BB);
          wB(TB, BB)
        }
        if (pB.prototype = EB, pB.ROUND_UP = 0, pB.ROUND_DOWN = 1, pB.ROUND_CEIL = 2, pB.ROUND_FLOOR = 3, pB.ROUND_HALF_UP = 4, pB.ROUND_HALF_DOWN = 5, pB.ROUND_HALF_EVEN = 6, pB.ROUND_HALF_CEIL = 7, pB.ROUND_HALF_FLOOR = 8, pB.clone = BB, pB.config = pB.set = IB, void 0 === TB && (TB = {}), TB)
          for (yB = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], dB = 0; dB < yB.length;) TB.hasOwnProperty(VB = yB[dB++]) || (TB[VB] = this[VB]);
        return pB.config(TB), pB
      }(lB), lB.default = lB.Decimal = lB, yB = new lB(1), void 0 === (VB = function() {
        return lB
      }.call(TB, dB, TB, BB)) || (BB.exports = VB)
    }()
  },
  5179: (BB, TB, dB) => {
    var VB = dB(4655)(dB(4517), "DataView");
    BB.exports = VB
  },
  4639: (BB, TB, dB) => {
    var VB = dB(4642),
      yB = dB(4694),
      pB = dB(4698),
      lB = dB(4702),
      JB = dB(4706);

    function YB(BB) {
      var TB = -1,
        dB = null == BB ? 0 : BB.length;
      for (this.clear(); ++TB < dB;) {
        var VB = BB[TB];
        this.set(VB[0], VB[1])
      }
    }
    YB.prototype.clear = VB, YB.prototype.delete = yB, YB.prototype.get = pB, YB.prototype.has = lB, YB.prototype.set = JB, BB.exports = YB
  },
  4711: (BB, TB, dB) => {
    var VB = dB(4713),
      yB = dB(4721),
      pB = dB(4739),
      lB = dB(4747),
      JB = dB(4752);

    function YB(BB) {
      var TB = -1,
        dB = null == BB ? 0 : BB.length;
      for (this.clear(); ++TB < dB;) {
        var VB = BB[TB];
        this.set(VB[0], VB[1])
      }
    }
    YB.prototype.clear = VB, YB.prototype.delete = yB, YB.prototype.get = pB, YB.prototype.has = lB, YB.prototype.set = JB, BB.exports = YB
  },
  4757: (BB, TB, dB) => {
    var VB = dB(4655)(dB(4517), "Map");
    BB.exports = VB
  },
  4625: (BB, TB, dB) => {
    var VB = dB(4632),
      yB = dB(4759),
      pB = dB(4771),
      lB = dB(4780),
      JB = dB(4782);

    function YB(BB) {
      var TB = -1,
        dB = null == BB ? 0 : BB.length;
      for (this.clear(); ++TB < dB;) {
        var VB = BB[TB];
        this.set(VB[0], VB[1])
      }
    }
    YB.prototype.clear = VB, YB.prototype.delete = yB, YB.prototype.get = pB, YB.prototype.has = lB, YB.prototype.set = JB, BB.exports = YB
  },
  5186: (BB, TB, dB) => {
    var VB = dB(4655)(dB(4517), "Promise");
    BB.exports = VB
  },
  5195: (BB, TB, dB) => {
    var VB = dB(4655)(dB(4517), "Set");
    BB.exports = VB
  },
  5015: (BB, TB, dB) => {
    var VB = dB(4625),
      yB = dB(5017),
      pB = dB(5020);

    function lB(BB) {
      var TB = -1,
        dB = null == BB ? 0 : BB.length;
      for (this.__data__ = new VB; ++TB < dB;) this.add(BB[TB])
    }
    lB.prototype.add = lB.prototype.push = yB, lB.prototype.has = pB, BB.exports = lB
  },
  4956: (BB, TB, dB) => {
    var VB = dB(4711),
      yB = dB(4962),
      pB = dB(4969),
      lB = dB(4975),
      JB = dB(4983),
      YB = dB(4991);

    function gB(BB) {
      var TB = this.__data__ = new VB(BB);
      this.size = TB.size
    }
    gB.prototype.clear = yB, gB.prototype.delete = pB, gB.prototype.get = lB, gB.prototype.has = JB, gB.prototype.set = YB, BB.exports = gB
  },
  4553: (BB, TB, dB) => {
    var VB = dB(4517).Symbol;
    BB.exports = VB
  },
  5041: (BB, TB, dB) => {
    var VB = dB(4517).Uint8Array;
    BB.exports = VB
  },
  5204: (BB, TB, dB) => {
    var VB = dB(4655)(dB(4517), "WeakMap");
    BB.exports = VB
  },
  5332: BB => {
    BB.exports = function(BB, TB, dB) {
      switch (dB.length) {
        case 0:
          return BB.call(TB);
        case 1:
          return BB.call(TB, dB[0]);
        case 2:
          return BB.call(TB, dB[0], dB[1]);
        case 3:
          return BB.call(TB, dB[0], dB[1], dB[2])
      }
      return BB.apply(TB, dB)
    }
  },
  5639: BB => {
    BB.exports = function(BB, TB) {
      for (var dB = -1, VB = null == BB ? 0 : BB.length; ++dB < VB;)
        if (!TB(BB[dB], dB, BB)) return !1;
      return !0
    }
  },
  5076: BB => {
    BB.exports = function(BB, TB) {
      for (var dB = -1, VB = null == BB ? 0 : BB.length, yB = 0, pB = []; ++dB < VB;) {
        var lB = BB[dB];
        TB(lB, dB, BB) && (pB[yB++] = lB)
      }
      return pB
    }
  },
  5385: (BB, TB, dB) => {
    var VB = dB(5391);
    BB.exports = function(BB, TB) {
      return !!(null == BB ? 0 : BB.length) && VB(BB, TB, 0) > -1
    }
  },
  5406: BB => {
    BB.exports = function(BB, TB, dB) {
      for (var VB = -1, yB = null == BB ? 0 : BB.length; ++VB < yB;)
        if (dB(TB, BB[VB])) return !0;
      return !1
    }
  },
  5095: (BB, TB, dB) => {
    var VB = dB(5101),
      yB = dB(4922),
      pB = dB(4580),
      lB = dB(5110),
      JB = dB(4885),
      YB = dB(5120),
      gB = Object.prototype.hasOwnProperty;
    BB.exports = function(BB, TB) {
      var dB = pB(BB),
        oB = !dB && yB(BB),
        kB = !dB && !oB && lB(BB),
        LB = !dB && !oB && !kB && YB(BB),
        OB = dB || oB || kB || LB,
        DB = OB ? VB(BB.length, String) : [],
        uB = DB.length;
      for (var HB in BB) !TB && !gB.call(BB, HB) || OB && ("length" == HB || kB && ("offset" == HB || "parent" == HB) || LB && ("buffer" == HB || "byteLength" == HB || "byteOffset" == HB) || JB(HB, uB)) || DB.push(HB);
      return DB
    }
  },
  4798: BB => {
    BB.exports = function(BB, TB) {
      for (var dB = -1, VB = null == BB ? 0 : BB.length, yB = Array(VB); ++dB < VB;) yB[dB] = TB(BB[dB], dB, BB);
      return yB
    }
  },
  4907: BB => {
    BB.exports = function(BB, TB) {
      for (var dB = -1, VB = TB.length, yB = BB.length; ++dB < VB;) BB[yB + dB] = TB[dB];
      return BB
    }
  },
  5024: BB => {
    BB.exports = function(BB, TB) {
      for (var dB = -1, VB = null == BB ? 0 : BB.length; ++dB < VB;)
        if (TB(BB[dB], dB, BB)) return !0;
      return !1
    }
  },
  5470: BB => {
    BB.exports = function(BB) {
      return BB.split("")
    }
  },
  4726: (BB, TB, dB) => {
    var VB = dB(4735);
    BB.exports = function(BB, TB) {
      for (var dB = BB.length; dB--;)
        if (VB(BB[dB][0], TB)) return dB;
      return -1
    }
  },
  5629: (BB, TB, dB) => {
    var VB = dB(5348);
    BB.exports = function(BB, TB, dB) {
      "__proto__" == TB && VB ? VB(BB, TB, {
        configurable: !0,
        enumerable: !0,
        value: dB,
        writable: !0
      }) : BB[TB] = dB
    }
  },
  5281: (BB, TB, dB) => {
    var VB = dB(5284),
      yB = dB(5294)(VB);
    BB.exports = yB
  },
  5648: (BB, TB, dB) => {
    var VB = dB(5281);
    BB.exports = function(BB, TB) {
      var dB = !0;
      return VB(BB, (function(BB, VB, yB) {
        return dB = !!TB(BB, VB, yB)
      })), dB
    }
  },
  5542: (BB, TB, dB) => {
    var VB = dB(4539);
    BB.exports = function(BB, TB, dB) {
      for (var yB = -1, pB = BB.length; ++yB < pB;) {
        var lB = BB[yB],
          JB = TB(lB);
        if (null != JB && (void 0 === YB ? JB === JB && !VB(JB) : dB(JB, YB))) var YB = JB,
          gB = lB
      }
      return gB
    }
  },
  5397: BB => {
    BB.exports = function(BB, TB, dB, VB) {
      for (var yB = BB.length, pB = dB + (VB ? 1 : -1); VB ? pB-- : ++pB < yB;)
        if (TB(BB[pB], pB, BB)) return pB;
      return -1
    }
  },
  4900: (BB, TB, dB) => {
    var VB = dB(4907),
      yB = dB(4915);
    BB.exports = function BB(TB, dB, pB, lB, JB) {
      var YB = -1,
        gB = TB.length;
      for (pB || (pB = yB), JB || (JB = []); ++YB < gB;) {
        var oB = TB[YB];
        dB > 0 && pB(oB) ? dB > 1 ? BB(oB, dB - 1, pB, lB, JB) : VB(JB, oB) : lB || (JB[JB.length] = oB)
      }
      return JB
    }
  },
  5287: (BB, TB, dB) => {
    var VB = dB(5290)();
    BB.exports = VB
  },
  5284: (BB, TB, dB) => {
    var VB = dB(5287),
      yB = dB(5086);
    BB.exports = function(BB, TB) {
      return BB && VB(BB, TB, yB)
    }
  },
  4601: (BB, TB, dB) => {
    var VB = dB(4603),
      yB = dB(4800);
    BB.exports = function(BB, TB) {
      for (var dB = 0, pB = (TB = VB(TB, BB)).length; null != BB && dB < pB;) BB = BB[yB(TB[dB++])];
      return dB && dB == pB ? BB : void 0
    }
  },
  5064: (BB, TB, dB) => {
    var VB = dB(4907),
      yB = dB(4580);
    BB.exports = function(BB, TB, dB) {
      var pB = TB(BB);
      return yB(BB) ? pB : VB(pB, dB(BB))
    }
  },
  4544: (BB, TB, dB) => {
    var VB = dB(4553),
      yB = dB(4555),
      pB = dB(4560),
      lB = VB ? VB.toStringTag : void 0;
    BB.exports = function(BB) {
      return null == BB ? void 0 === BB ? "[object Undefined]" : "[object Null]" : lB && lB in Object(BB) ? yB(BB) : pB(BB)
    }
  },
  5546: BB => {
    BB.exports = function(BB, TB) {
      return BB > TB
    }
  },
  5241: BB => {
    BB.exports = function(BB, TB) {
      return null != BB && TB in Object(BB)
    }
  },
  5391: (BB, TB, dB) => {
    var VB = dB(5397),
      yB = dB(5399),
      pB = dB(5402);
    BB.exports = function(BB, TB, dB) {
      return TB === TB ? pB(BB, TB, dB) : VB(BB, yB, dB)
    }
  },
  4928: (BB, TB, dB) => {
    var VB = dB(4544),
      yB = dB(4566);
    BB.exports = function(BB) {
      return yB(BB) && "[object Arguments]" == VB(BB)
    }
  },
  4997: (BB, TB, dB) => {
    var VB = dB(4999),
      yB = dB(4566);
    BB.exports = function BB(TB, dB, pB, lB, JB) {
      return TB === dB || (null == TB || null == dB || !yB(TB) && !yB(dB) ? TB !== TB && dB !== dB : VB(TB, dB, pB, lB, BB, JB))
    }
  },
  4999: (BB, TB, dB) => {
    var VB = dB(4956),
      yB = dB(5006),
      pB = dB(5035),
      lB = dB(5058),
      JB = dB(5170),
      YB = dB(4580),
      gB = dB(5110),
      oB = dB(5120),
      kB = "[object Arguments]",
      LB = "[object Array]",
      OB = "[object Object]",
      DB = Object.prototype.hasOwnProperty;
    BB.exports = function(BB, TB, dB, uB, HB, EB) {
      var vB = YB(BB),
        mB = YB(TB),
        iB = vB ? LB : JB(BB),
        NB = mB ? LB : JB(TB),
        tB = (iB = iB == kB ? OB : iB) == OB,
        fB = (NB = NB == kB ? OB : NB) == OB,
        sB = iB == NB;
      if (sB && gB(BB)) {
        if (!gB(TB)) return !1;
        vB = !0, tB = !1
      }
      if (sB && !tB) return EB || (EB = new VB), vB || oB(BB) ? yB(BB, TB, dB, uB, HB, EB) : pB(BB, TB, iB, dB, uB, HB, EB);
      if (!(1 & dB)) {
        var MB = tB && DB.call(BB, "__wrapped__"),
          zB = fB && DB.call(TB, "__wrapped__");
        if (MB || zB) {
          var wB = MB ? BB.value() : BB,
            UB = zB ? TB.value() : TB;
          return EB || (EB = new VB), HB(wB, UB, dB, uB, EB)
        }
      }
      return !!sB && (EB || (EB = new VB), lB(BB, TB, dB, uB, HB, EB))
    }
  },
  4951: (BB, TB, dB) => {
    var VB = dB(4956),
      yB = dB(4997);
    BB.exports = function(BB, TB, dB, pB) {
      var lB = dB.length,
        JB = lB,
        YB = !pB;
      if (null == BB) return !JB;
      for (BB = Object(BB); lB--;) {
        var gB = dB[lB];
        if (YB && gB[2] ? gB[1] !== BB[gB[0]] : !(gB[0] in BB)) return !1
      }
      for (; ++lB < JB;) {
        var oB = (gB = dB[lB])[0],
          kB = BB[oB],
          LB = gB[1];
        if (YB && gB[2]) {
          if (void 0 === kB && !(oB in BB)) return !1
        } else {
          var OB = new VB;
          if (pB) var DB = pB(kB, LB, oB, BB, TB, OB);
          if (!(void 0 === DB ? yB(LB, kB, 3, pB, OB) : DB)) return !1
        }
      }
      return !0
    }
  },
  5399: BB => {
    BB.exports = function(BB) {
      return BB !== BB
    }
  },
  4657: (BB, TB, dB) => {
    var VB = dB(4660),
      yB = dB(4669),
      pB = dB(4505),
      lB = dB(4683),
      JB = /^\[object .+?Constructor\]$/,
      YB = Function.prototype,
      gB = Object.prototype,
      oB = YB.toString,
      kB = gB.hasOwnProperty,
      LB = RegExp("^" + oB.call(kB).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    BB.exports = function(BB) {
      return !(!pB(BB) || yB(BB)) && (VB(BB) ? LB : JB).test(lB(BB))
    }
  },
  5129: (BB, TB, dB) => {
    var VB = dB(4544),
      yB = dB(4877),
      pB = dB(4566),
      lB = {};
    lB["[object Float32Array]"] = lB["[object Float64Array]"] = lB["[object Int8Array]"] = lB["[object Int16Array]"] = lB["[object Int32Array]"] = lB["[object Uint8Array]"] = lB["[object Uint8ClampedArray]"] = lB["[object Uint16Array]"] = lB["[object Uint32Array]"] = !0, lB["[object Arguments]"] = lB["[object Array]"] = lB["[object ArrayBuffer]"] = lB["[object Boolean]"] = lB["[object DataView]"] = lB["[object Date]"] = lB["[object Error]"] = lB["[object Function]"] = lB["[object Map]"] = lB["[object Number]"] = lB["[object Object]"] = lB["[object RegExp]"] = lB["[object Set]"] = lB["[object String]"] = lB["[object WeakMap]"] = !1, BB.exports = function(BB) {
      return pB(BB) && yB(BB.length) && !!lB[VB(BB)]
    }
  },
  4936: (BB, TB, dB) => {
    var VB = dB(4943),
      yB = dB(5232),
      pB = dB(5255),
      lB = dB(4580),
      JB = dB(5259);
    BB.exports = function(BB) {
      return "function" == typeof BB ? BB : null == BB ? pB : "object" == typeof BB ? lB(BB) ? yB(BB[0], BB[1]) : VB(BB) : JB(BB)
    }
  },
  5141: (BB, TB, dB) => {
    var VB = dB(5146),
      yB = dB(5155),
      pB = Object.prototype.hasOwnProperty;
    BB.exports = function(BB) {
      if (!VB(BB)) return yB(BB);
      var TB = [];
      for (var dB in Object(BB)) pB.call(BB, dB) && "constructor" != dB && TB.push(dB);
      return TB
    }
  },
  5554: BB => {
    BB.exports = function(BB, TB) {
      return BB < TB
    }
  },
  5276: (BB, TB, dB) => {
    var VB = dB(5281),
      yB = dB(4870);
    BB.exports = function(BB, TB) {
      var dB = -1,
        pB = yB(BB) ? Array(BB.length) : [];
      return VB(BB, (function(BB, VB, yB) {
        pB[++dB] = TB(BB, VB, yB)
      })), pB
    }
  },
  4943: (BB, TB, dB) => {
    var VB = dB(4951),
      yB = dB(5212),
      pB = dB(5223);
    BB.exports = function(BB) {
      var TB = yB(BB);
      return 1 == TB.length && TB[0][2] ? pB(TB[0][0], TB[0][1]) : function(dB) {
        return dB === BB || VB(dB, BB, TB)
      }
    }
  },
  5232: (BB, TB, dB) => {
    var VB = dB(4997),
      yB = dB(4599),
      pB = dB(5234),
      lB = dB(4608),
      JB = dB(5216),
      YB = dB(5223),
      gB = dB(4800);
    BB.exports = function(BB, TB) {
      return lB(BB) && JB(TB) ? YB(gB(BB), TB) : function(dB) {
        var lB = yB(dB, BB);
        return void 0 === lB && lB === TB ? pB(dB, BB) : VB(TB, lB, 3)
      }
    }
  },
  4932: (BB, TB, dB) => {
    var VB = dB(4798),
      yB = dB(4601),
      pB = dB(4936),
      lB = dB(5276),
      JB = dB(5303),
      YB = dB(5134),
      gB = dB(5308),
      oB = dB(5255),
      kB = dB(4580);
    BB.exports = function(BB, TB, dB) {
      TB = TB.length ? VB(TB, (function(BB) {
        return kB(BB) ? function(TB) {
          return yB(TB, 1 === BB.length ? BB[0] : BB)
        } : BB
      })) : [oB];
      var LB = -1;
      TB = VB(TB, YB(pB));
      var OB = lB(BB, (function(BB, dB, yB) {
        return {
          criteria: VB(TB, (function(TB) {
            return TB(BB)
          })),
          index: ++LB,
          value: BB
        }
      }));
      return JB(OB, (function(BB, TB) {
        return gB(BB, TB, dB)
      }))
    }
  },
  5262: BB => {
    BB.exports = function(BB) {
      return function(TB) {
        return null == TB ? void 0 : TB[BB]
      }
    }
  },
  5270: (BB, TB, dB) => {
    var VB = dB(4601);
    BB.exports = function(BB) {
      return function(TB) {
        return VB(TB, BB)
      }
    }
  },
  4863: BB => {
    var TB = Math.ceil,
      dB = Math.max;
    BB.exports = function(BB, VB, yB, pB) {
      for (var lB = -1, JB = dB(TB((VB - BB) / (yB || 1)), 0), YB = Array(JB); JB--;) YB[pB ? JB : ++lB] = BB, BB += yB;
      return YB
    }
  },
  5318: (BB, TB, dB) => {
    var VB = dB(5255),
      yB = dB(5325),
      pB = dB(5338);
    BB.exports = function(BB, TB) {
      return pB(yB(BB, TB, VB), BB + "")
    }
  },
  5340: (BB, TB, dB) => {
    var VB = dB(5342),
      yB = dB(5348),
      pB = dB(5255),
      lB = yB ? function(BB, TB) {
        return yB(BB, "toString", {
          configurable: !0,
          enumerable: !1,
          value: VB(TB),
          writable: !0
        })
      } : pB;
    BB.exports = lB
  },
  5455: BB => {
    BB.exports = function(BB, TB, dB) {
      var VB = -1,
        yB = BB.length;
      TB < 0 && (TB = -TB > yB ? 0 : yB + TB), (dB = dB > yB ? yB : dB) < 0 && (dB += yB), yB = TB > dB ? 0 : dB - TB >>> 0, TB >>>= 0;
      for (var pB = Array(yB); ++VB < yB;) pB[VB] = BB[VB + TB];
      return pB
    }
  },
  5711: (BB, TB, dB) => {
    var VB = dB(5281);
    BB.exports = function(BB, TB) {
      var dB;
      return VB(BB, (function(BB, VB, yB) {
        return !(dB = TB(BB, VB, yB))
      })), !!dB
    }
  },
  5303: BB => {
    BB.exports = function(BB, TB) {
      var dB = BB.length;
      for (BB.sort(TB); dB--;) BB[dB] = BB[dB].value;
      return BB
    }
  },
  5101: BB => {
    BB.exports = function(BB, TB) {
      for (var dB = -1, VB = Array(BB); ++dB < BB;) VB[dB] = TB(dB);
      return VB
    }
  },
  4794: (BB, TB, dB) => {
    var VB = dB(4553),
      yB = dB(4798),
      pB = dB(4580),
      lB = dB(4539),
      JB = VB ? VB.prototype : void 0,
      YB = JB ? JB.toString : void 0;
    BB.exports = function BB(TB) {
      if ("string" == typeof TB) return TB;
      if (pB(TB)) return yB(TB, BB) + "";
      if (lB(TB)) return YB ? YB.call(TB) : "";
      var dB = TB + "";
      return "0" == dB && 1 / TB == -1 / 0 ? "-0" : dB
    }
  },
  4533: (BB, TB, dB) => {
    var VB = dB(4537),
      yB = /^\s+/;
    BB.exports = function(BB) {
      return BB ? BB.slice(0, VB(BB) + 1).replace(yB, "") : BB
    }
  },
  5134: BB => {
    BB.exports = function(BB) {
      return function(TB) {
        return BB(TB)
      }
    }
  },
  5381: (BB, TB, dB) => {
    var VB = dB(5015),
      yB = dB(5385),
      pB = dB(5406),
      lB = dB(5029),
      JB = dB(5412),
      YB = dB(5053);
    BB.exports = function(BB, TB, dB) {
      var gB = -1,
        oB = yB,
        kB = BB.length,
        LB = !0,
        OB = [],
        DB = OB;
      if (dB) LB = !1, oB = pB;
      else if (kB >= 200) {
        var uB = TB ? null : JB(BB);
        if (uB) return YB(uB);
        LB = !1, oB = lB, DB = new VB
      } else DB = TB ? [] : OB;
      BB: for (; ++gB < kB;) {
        var HB = BB[gB],
          EB = TB ? TB(HB) : HB;
        if (HB = dB || 0 !== HB ? HB : 0, LB && EB === EB) {
          for (var vB = DB.length; vB--;)
            if (DB[vB] === EB) continue BB;
          TB && DB.push(EB), OB.push(HB)
        } else oB(DB, EB, dB) || (DB !== OB && DB.push(EB), OB.push(HB))
      }
      return OB
    }
  },
  5029: BB => {
    BB.exports = function(BB, TB) {
      return BB.has(TB)
    }
  },
  4603: (BB, TB, dB) => {
    var VB = dB(4580),
      yB = dB(4608),
      pB = dB(4612),
      lB = dB(4789);
    BB.exports = function(BB, TB) {
      return VB(BB) ? BB : yB(BB, TB) ? [BB] : pB(lB(BB))
    }
  },
  5447: (BB, TB, dB) => {
    var VB = dB(5455);
    BB.exports = function(BB, TB, dB) {
      var yB = BB.length;
      return dB = void 0 === dB ? yB : dB, !TB && dB >= yB ? BB : VB(BB, TB, dB)
    }
  },
  5310: (BB, TB, dB) => {
    var VB = dB(4539);
    BB.exports = function(BB, TB) {
      if (BB !== TB) {
        var dB = void 0 !== BB,
          yB = null === BB,
          pB = BB === BB,
          lB = VB(BB),
          JB = void 0 !== TB,
          YB = null === TB,
          gB = TB === TB,
          oB = VB(TB);
        if (!YB && !oB && !lB && BB > TB || lB && JB && gB && !YB && !oB || yB && JB && gB || !dB && gB || !pB) return 1;
        if (!yB && !lB && !oB && BB < TB || oB && dB && pB && !yB && !lB || YB && dB && pB || !JB && pB || !gB) return -1
      }
      return 0
    }
  },
  5308: (BB, TB, dB) => {
    var VB = dB(5310);
    BB.exports = function(BB, TB, dB) {
      for (var yB = -1, pB = BB.criteria, lB = TB.criteria, JB = pB.length, YB = dB.length; ++yB < JB;) {
        var gB = VB(pB[yB], lB[yB]);
        if (gB) return yB >= YB ? gB : gB * ("desc" == dB[yB] ? -1 : 1)
      }
      return BB.index - TB.index
    }
  },
  4674: (BB, TB, dB) => {
    var VB = dB(4517)["__core-js_shared__"];
    BB.exports = VB
  },
  5294: (BB, TB, dB) => {
    var VB = dB(4870);
    BB.exports = function(BB, TB) {
      return function(dB, yB) {
        if (null == dB) return dB;
        if (!VB(dB)) return BB(dB, yB);
        for (var pB = dB.length, lB = TB ? pB : -1, JB = Object(dB);
          (TB ? lB-- : ++lB < pB) && !1 !== yB(JB[lB], lB, JB););
        return dB
      }
    }
  },
  5290: BB => {
    BB.exports = function(BB) {
      return function(TB, dB, VB) {
        for (var yB = -1, pB = Object(TB), lB = VB(TB), JB = lB.length; JB--;) {
          var YB = lB[BB ? JB : ++yB];
          if (!1 === dB(pB[YB], YB, pB)) break
        }
        return TB
      }
    }
  },
  5442: (BB, TB, dB) => {
    var VB = dB(5447),
      yB = dB(5461),
      pB = dB(5466),
      lB = dB(4789);
    BB.exports = function(BB) {
      return function(TB) {
        TB = lB(TB);
        var dB = yB(TB) ? pB(TB) : void 0,
          JB = dB ? dB[0] : TB.charAt(0),
          YB = dB ? VB(dB, 1).join("") : TB.slice(1);
        return JB[BB]() + YB
      }
    }
  },
  5720: (BB, TB, dB) => {
    var VB = dB(4936),
      yB = dB(4870),
      pB = dB(5086);
    BB.exports = function(BB) {
      return function(TB, dB, lB) {
        var JB = Object(TB);
        if (!yB(TB)) {
          var YB = VB(dB, 3);
          TB = pB(TB), dB = function(BB) {
            return YB(JB[BB], BB, JB)
          }
        }
        var gB = BB(TB, dB, lB);
        return gB > -1 ? JB[YB ? TB[gB] : gB] : void 0
      }
    }
  },
  4858: (BB, TB, dB) => {
    var VB = dB(4863),
      yB = dB(4865),
      pB = dB(4890);
    BB.exports = function(BB) {
      return function(TB, dB, lB) {
        return lB && "number" != typeof lB && yB(TB, dB, lB) && (dB = lB = void 0), TB = pB(TB), void 0 === dB ? (dB = TB, TB = 0) : dB = pB(dB), lB = void 0 === lB ? TB < dB ? 1 : -1 : pB(lB), VB(TB, dB, lB, BB)
      }
    }
  },
  5412: (BB, TB, dB) => {
    var VB = dB(5195),
      yB = dB(5418),
      pB = dB(5053),
      lB = VB && 1 / pB(new VB([, -0]))[1] == 1 / 0 ? function(BB) {
        return new VB(BB)
      } : yB;
    BB.exports = lB
  },
  5348: (BB, TB, dB) => {
    var VB = dB(4655),
      yB = function() {
        try {
          var BB = VB(Object, "defineProperty");
          return BB({}, "", {}), BB
        } catch (TB) {}
      }();
    BB.exports = yB
  },
  5006: (BB, TB, dB) => {
    var VB = dB(5015),
      yB = dB(5024),
      pB = dB(5029);
    BB.exports = function(BB, TB, dB, lB, JB, YB) {
      var gB = 1 & dB,
        oB = BB.length,
        kB = TB.length;
      if (oB != kB && !(gB && kB > oB)) return !1;
      var LB = YB.get(BB),
        OB = YB.get(TB);
      if (LB && OB) return LB == TB && OB == BB;
      var DB = -1,
        uB = !0,
        HB = 2 & dB ? new VB : void 0;
      for (YB.set(BB, TB), YB.set(TB, BB); ++DB < oB;) {
        var EB = BB[DB],
          vB = TB[DB];
        if (lB) var mB = gB ? lB(vB, EB, DB, TB, BB, YB) : lB(EB, vB, DB, BB, TB, YB);
        if (void 0 !== mB) {
          if (mB) continue;
          uB = !1;
          break
        }
        if (HB) {
          if (!yB(TB, (function(BB, TB) {
              if (!pB(HB, TB) && (EB === BB || JB(EB, BB, dB, lB, YB))) return HB.push(TB)
            }))) {
            uB = !1;
            break
          }
        } else if (EB !== vB && !JB(EB, vB, dB, lB, YB)) {
          uB = !1;
          break
        }
      }
      return YB.delete(BB), YB.delete(TB), uB
    }
  },
  5035: (BB, TB, dB) => {
    var VB = dB(4553),
      yB = dB(5041),
      pB = dB(4735),
      lB = dB(5006),
      JB = dB(5048),
      YB = dB(5053),
      gB = VB ? VB.prototype : void 0,
      oB = gB ? gB.valueOf : void 0;
    BB.exports = function(BB, TB, dB, VB, gB, kB, LB) {
      switch (dB) {
        case "[object DataView]":
          if (BB.byteLength != TB.byteLength || BB.byteOffset != TB.byteOffset) return !1;
          BB = BB.buffer, TB = TB.buffer;
        case "[object ArrayBuffer]":
          return !(BB.byteLength != TB.byteLength || !kB(new yB(BB), new yB(TB)));
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
          return pB(+BB, +TB);
        case "[object Error]":
          return BB.name == TB.name && BB.message == TB.message;
        case "[object RegExp]":
        case "[object String]":
          return BB == TB + "";
        case "[object Map]":
          var OB = JB;
        case "[object Set]":
          var DB = 1 & VB;
          if (OB || (OB = YB), BB.size != TB.size && !DB) return !1;
          var uB = LB.get(BB);
          if (uB) return uB == TB;
          VB |= 2, LB.set(BB, TB);
          var HB = lB(OB(BB), OB(TB), VB, gB, kB, LB);
          return LB.delete(BB), HB;
        case "[object Symbol]":
          if (oB) return oB.call(BB) == oB.call(TB)
      }
      return !1
    }
  },
  5058: (BB, TB, dB) => {
    var VB = dB(5061),
      yB = Object.prototype.hasOwnProperty;
    BB.exports = function(BB, TB, dB, pB, lB, JB) {
      var YB = 1 & dB,
        gB = VB(BB),
        oB = gB.length;
      if (oB != VB(TB).length && !YB) return !1;
      for (var kB = oB; kB--;) {
        var LB = gB[kB];
        if (!(YB ? LB in TB : yB.call(TB, LB))) return !1
      }
      var OB = JB.get(BB),
        DB = JB.get(TB);
      if (OB && DB) return OB == TB && DB == BB;
      var uB = !0;
      JB.set(BB, TB), JB.set(TB, BB);
      for (var HB = YB; ++kB < oB;) {
        var EB = BB[LB = gB[kB]],
          vB = TB[LB];
        if (pB) var mB = YB ? pB(vB, EB, LB, TB, BB, JB) : pB(EB, vB, LB, BB, TB, JB);
        if (!(void 0 === mB ? EB === vB || lB(EB, vB, dB, pB, JB) : mB)) {
          uB = !1;
          break
        }
        HB || (HB = "constructor" == LB)
      }
      if (uB && !HB) {
        var iB = BB.constructor,
          NB = TB.constructor;
        iB == NB || !("constructor" in BB) || !("constructor" in TB) || "function" == typeof iB && iB instanceof iB && "function" == typeof NB && NB instanceof NB || (uB = !1)
      }
      return JB.delete(BB), JB.delete(TB), uB
    }
  },
  4525: (BB, TB, dB) => {
    var VB = "object" == typeof dB.g && dB.g && dB.g.Object === Object && dB.g;
    BB.exports = VB
  },
  5061: (BB, TB, dB) => {
    var VB = dB(5064),
      yB = dB(5068),
      pB = dB(5086);
    BB.exports = function(BB) {
      return VB(BB, pB, yB)
    }
  },
  4766: (BB, TB, dB) => {
    var VB = dB(4768);
    BB.exports = function(BB, TB) {
      var dB = BB.__data__;
      return VB(TB) ? dB["string" == typeof TB ? "string" : "hash"] : dB.map
    }
  },
  5212: (BB, TB, dB) => {
    var VB = dB(5216),
      yB = dB(5086);
    BB.exports = function(BB) {
      for (var TB = yB(BB), dB = TB.length; dB--;) {
        var pB = TB[dB],
          lB = BB[pB];
        TB[dB] = [pB, lB, VB(lB)]
      }
      return TB
    }
  },
  4655: (BB, TB, dB) => {
    var VB = dB(4657),
      yB = dB(4690);
    BB.exports = function(BB, TB) {
      var dB = yB(BB, TB);
      return VB(dB) ? dB : void 0
    }
  },
  5682: (BB, TB, dB) => {
    var VB = dB(5163)(Object.getPrototypeOf, Object);
    BB.exports = VB
  },
  4555: (BB, TB, dB) => {
    var VB = dB(4553),
      yB = Object.prototype,
      pB = yB.hasOwnProperty,
      lB = yB.toString,
      JB = VB ? VB.toStringTag : void 0;
    BB.exports = function(BB) {
      var TB = pB.call(BB, JB),
        dB = BB[JB];
      try {
        BB[JB] = void 0;
        var VB = !0
      } catch (YB) {}
      var yB = lB.call(BB);
      return VB && (TB ? BB[JB] = dB : delete BB[JB]), yB
    }
  },
  5068: (BB, TB, dB) => {
    var VB = dB(5076),
      yB = dB(5081),
      pB = Object.prototype.propertyIsEnumerable,
      lB = Object.getOwnPropertySymbols,
      JB = lB ? function(BB) {
        return null == BB ? [] : (BB = Object(BB), VB(lB(BB), (function(TB) {
          return pB.call(BB, TB)
        })))
      } : yB;
    BB.exports = JB
  },
  5170: (BB, TB, dB) => {
    var VB = dB(5179),
      yB = dB(4757),
      pB = dB(5186),
      lB = dB(5195),
      JB = dB(5204),
      YB = dB(4544),
      gB = dB(4683),
      oB = "[object Map]",
      kB = "[object Promise]",
      LB = "[object Set]",
      OB = "[object WeakMap]",
      DB = "[object DataView]",
      uB = gB(VB),
      HB = gB(yB),
      EB = gB(pB),
      vB = gB(lB),
      mB = gB(JB),
      iB = YB;
    (VB && iB(new VB(new ArrayBuffer(1))) != DB || yB && iB(new yB) != oB || pB && iB(pB.resolve()) != kB || lB && iB(new lB) != LB || JB && iB(new JB) != OB) && (iB = function(BB) {
      var TB = YB(BB),
        dB = "[object Object]" == TB ? BB.constructor : void 0,
        VB = dB ? gB(dB) : "";
      if (VB) switch (VB) {
        case uB:
          return DB;
        case HB:
          return oB;
        case EB:
          return kB;
        case vB:
          return LB;
        case mB:
          return OB
      }
      return TB
    }), BB.exports = iB
  },
  4690: BB => {
    BB.exports = function(BB, TB) {
      return null == BB ? void 0 : BB[TB]
    }
  },
  5249: (BB, TB, dB) => {
    var VB = dB(4603),
      yB = dB(4922),
      pB = dB(4580),
      lB = dB(4885),
      JB = dB(4877),
      YB = dB(4800);
    BB.exports = function(BB, TB, dB) {
      for (var gB = -1, oB = (TB = VB(TB, BB)).length, kB = !1; ++gB < oB;) {
        var LB = YB(TB[gB]);
        if (!(kB = null != BB && dB(BB, LB))) break;
        BB = BB[LB]
      }
      return kB || ++gB != oB ? kB : !!(oB = null == BB ? 0 : BB.length) && JB(oB) && lB(LB, oB) && (pB(BB) || yB(BB))
    }
  },
  5461: BB => {
    var TB = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    BB.exports = function(BB) {
      return TB.test(BB)
    }
  },
  4642: (BB, TB, dB) => {
    var VB = dB(4648);
    BB.exports = function() {
      this.__data__ = VB ? VB(null) : {}, this.size = 0
    }
  },
  4694: BB => {
    BB.exports = function(BB) {
      var TB = this.has(BB) && delete this.__data__[BB];
      return this.size -= TB ? 1 : 0, TB
    }
  },
  4698: (BB, TB, dB) => {
    var VB = dB(4648),
      yB = Object.prototype.hasOwnProperty;
    BB.exports = function(BB) {
      var TB = this.__data__;
      if (VB) {
        var dB = TB[BB];
        return "__lodash_hash_undefined__" === dB ? void 0 : dB
      }
      return yB.call(TB, BB) ? TB[BB] : void 0
    }
  },
  4702: (BB, TB, dB) => {
    var VB = dB(4648),
      yB = Object.prototype.hasOwnProperty;
    BB.exports = function(BB) {
      var TB = this.__data__;
      return VB ? void 0 !== TB[BB] : yB.call(TB, BB)
    }
  },
  4706: (BB, TB, dB) => {
    var VB = dB(4648);
    BB.exports = function(BB, TB) {
      var dB = this.__data__;
      return this.size += this.has(BB) ? 0 : 1, dB[BB] = VB && void 0 === TB ? "__lodash_hash_undefined__" : TB, this
    }
  },
  4915: (BB, TB, dB) => {
    var VB = dB(4553),
      yB = dB(4922),
      pB = dB(4580),
      lB = VB ? VB.isConcatSpreadable : void 0;
    BB.exports = function(BB) {
      return pB(BB) || yB(BB) || !!(lB && BB && BB[lB])
    }
  },
  4885: BB => {
    var TB = /^(?:0|[1-9]\d*)$/;
    BB.exports = function(BB, dB) {
      var VB = typeof BB;
      return !!(dB = null == dB ? 9007199254740991 : dB) && ("number" == VB || "symbol" != VB && TB.test(BB)) && BB > -1 && BB % 1 == 0 && BB < dB
    }
  },
  4865: (BB, TB, dB) => {
    var VB = dB(4735),
      yB = dB(4870),
      pB = dB(4885),
      lB = dB(4505);
    BB.exports = function(BB, TB, dB) {
      if (!lB(dB)) return !1;
      var JB = typeof TB;
      return !!("number" == JB ? yB(dB) && pB(TB, dB.length) : "string" == JB && TB in dB) && VB(dB[TB], BB)
    }
  },
  4608: (BB, TB, dB) => {
    var VB = dB(4580),
      yB = dB(4539),
      pB = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      lB = /^\w*$/;
    BB.exports = function(BB, TB) {
      if (VB(BB)) return !1;
      var dB = typeof BB;
      return !("number" != dB && "symbol" != dB && "boolean" != dB && null != BB && !yB(BB)) || (lB.test(BB) || !pB.test(BB) || null != TB && BB in Object(TB))
    }
  },
  4768: BB => {
    BB.exports = function(BB) {
      var TB = typeof BB;
      return "string" == TB || "number" == TB || "symbol" == TB || "boolean" == TB ? "__proto__" !== BB : null === BB
    }
  },
  4669: (BB, TB, dB) => {
    var VB = dB(4674),
      yB = function() {
        var BB = /[^.]+$/.exec(VB && VB.keys && VB.keys.IE_PROTO || "");
        return BB ? "Symbol(src)_1." + BB : ""
      }();
    BB.exports = function(BB) {
      return !!yB && yB in BB
    }
  },
  5146: BB => {
    var TB = Object.prototype;
    BB.exports = function(BB) {
      var dB = BB && BB.constructor;
      return BB === ("function" == typeof dB && dB.prototype || TB)
    }
  },
  5216: (BB, TB, dB) => {
    var VB = dB(4505);
    BB.exports = function(BB) {
      return BB === BB && !VB(BB)
    }
  },
  4713: BB => {
    BB.exports = function() {
      this.__data__ = [], this.size = 0
    }
  },
  4721: (BB, TB, dB) => {
    var VB = dB(4726),
      yB = Array.prototype.splice;
    BB.exports = function(BB) {
      var TB = this.__data__,
        dB = VB(TB, BB);
      return !(dB < 0) && (dB == TB.length - 1 ? TB.pop() : yB.call(TB, dB, 1), --this.size, !0)
    }
  },
  4739: (BB, TB, dB) => {
    var VB = dB(4726);
    BB.exports = function(BB) {
      var TB = this.__data__,
        dB = VB(TB, BB);
      return dB < 0 ? void 0 : TB[dB][1]
    }
  },
  4747: (BB, TB, dB) => {
    var VB = dB(4726);
    BB.exports = function(BB) {
      return VB(this.__data__, BB) > -1
    }
  },
  4752: (BB, TB, dB) => {
    var VB = dB(4726);
    BB.exports = function(BB, TB) {
      var dB = this.__data__,
        yB = VB(dB, BB);
      return yB < 0 ? (++this.size, dB.push([BB, TB])) : dB[yB][1] = TB, this
    }
  },
  4632: (BB, TB, dB) => {
    var VB = dB(4639),
      yB = dB(4711),
      pB = dB(4757);
    BB.exports = function() {
      this.size = 0, this.__data__ = {
        hash: new VB,
        map: new(pB || yB),
        string: new VB
      }
    }
  },
  4759: (BB, TB, dB) => {
    var VB = dB(4766);
    BB.exports = function(BB) {
      var TB = VB(this, BB).delete(BB);
      return this.size -= TB ? 1 : 0, TB
    }
  },
  4771: (BB, TB, dB) => {
    var VB = dB(4766);
    BB.exports = function(BB) {
      return VB(this, BB).get(BB)
    }
  },
  4780: (BB, TB, dB) => {
    var VB = dB(4766);
    BB.exports = function(BB) {
      return VB(this, BB).has(BB)
    }
  },
  4782: (BB, TB, dB) => {
    var VB = dB(4766);
    BB.exports = function(BB, TB) {
      var dB = VB(this, BB),
        yB = dB.size;
      return dB.set(BB, TB), this.size += dB.size == yB ? 0 : 1, this
    }
  },
  5048: BB => {
    BB.exports = function(BB) {
      var TB = -1,
        dB = Array(BB.size);
      return BB.forEach((function(BB, VB) {
        dB[++TB] = [VB, BB]
      })), dB
    }
  },
  5223: BB => {
    BB.exports = function(BB, TB) {
      return function(dB) {
        return null != dB && (dB[BB] === TB && (void 0 !== TB || BB in Object(dB)))
      }
    }
  },
  4618: (BB, TB, dB) => {
    var VB = dB(4621);
    BB.exports = function(BB) {
      var TB = VB(BB, (function(BB) {
          return 500 === dB.size && dB.clear(), BB
        })),
        dB = TB.cache;
      return TB
    }
  },
  4648: (BB, TB, dB) => {
    var VB = dB(4655)(Object, "create");
    BB.exports = VB
  },
  5155: (BB, TB, dB) => {
    var VB = dB(5163)(Object.keys, Object);
    BB.exports = VB
  },
  5137: (BB, TB, dB) => {
    BB = dB.nmd(BB);
    var VB = dB(4525),
      yB = TB && !TB.nodeType && TB,
      pB = yB && BB && !BB.nodeType && BB,
      lB = pB && pB.exports === yB && VB.process,
      JB = function() {
        try {
          var BB = pB && pB.require && pB.require("util").types;
          return BB || lB && lB.binding && lB.binding("util")
        } catch (TB) {}
      }();
    BB.exports = JB
  },
  4560: BB => {
    var TB = Object.prototype.toString;
    BB.exports = function(BB) {
      return TB.call(BB)
    }
  },
  5163: BB => {
    BB.exports = function(BB, TB) {
      return function(dB) {
        return BB(TB(dB))
      }
    }
  },
  5325: (BB, TB, dB) => {
    var VB = dB(5332),
      yB = Math.max;
    BB.exports = function(BB, TB, dB) {
      return TB = yB(void 0 === TB ? BB.length - 1 : TB, 0),
        function() {
          for (var pB = arguments, lB = -1, JB = yB(pB.length - TB, 0), YB = Array(JB); ++lB < JB;) YB[lB] = pB[TB + lB];
          lB = -1;
          for (var gB = Array(TB + 1); ++lB < TB;) gB[lB] = pB[lB];
          return gB[TB] = dB(YB), VB(BB, this, gB)
        }
    }
  },
  4517: (BB, TB, dB) => {
    var VB = dB(4525),
      yB = "object" == typeof self && self && self.Object === Object && self,
      pB = VB || yB || Function("return this")();
    BB.exports = pB
  },
  5017: BB => {
    BB.exports = function(BB) {
      return this.__data__.set(BB, "__lodash_hash_undefined__"), this
    }
  },
  5020: BB => {
    BB.exports = function(BB) {
      return this.__data__.has(BB)
    }
  },
  5053: BB => {
    BB.exports = function(BB) {
      var TB = -1,
        dB = Array(BB.size);
      return BB.forEach((function(BB) {
        dB[++TB] = BB
      })), dB
    }
  },
  5338: (BB, TB, dB) => {
    var VB = dB(5340),
      yB = dB(5351)(VB);
    BB.exports = yB
  },
  5351: BB => {
    var TB = Date.now;
    BB.exports = function(BB) {
      var dB = 0,
        VB = 0;
      return function() {
        var yB = TB(),
          pB = 16 - (yB - VB);
        if (VB = yB, pB > 0) {
          if (++dB >= 800) return arguments[0]
        } else dB = 0;
        return BB.apply(void 0, arguments)
      }
    }
  },
  4962: (BB, TB, dB) => {
    var VB = dB(4711);
    BB.exports = function() {
      this.__data__ = new VB, this.size = 0
    }
  },
  4969: BB => {
    BB.exports = function(BB) {
      var TB = this.__data__,
        dB = TB.delete(BB);
      return this.size = TB.size, dB
    }
  },
  4975: BB => {
    BB.exports = function(BB) {
      return this.__data__.get(BB)
    }
  },
  4983: BB => {
    BB.exports = function(BB) {
      return this.__data__.has(BB)
    }
  },
  4991: (BB, TB, dB) => {
    var VB = dB(4711),
      yB = dB(4757),
      pB = dB(4625);
    BB.exports = function(BB, TB) {
      var dB = this.__data__;
      if (dB instanceof VB) {
        var lB = dB.__data__;
        if (!yB || lB.length < 199) return lB.push([BB, TB]), this.size = ++dB.size, this;
        dB = this.__data__ = new pB(lB)
      }
      return dB.set(BB, TB), this.size = dB.size, this
    }
  },
  5402: BB => {
    BB.exports = function(BB, TB, dB) {
      for (var VB = dB - 1, yB = BB.length; ++VB < yB;)
        if (BB[VB] === TB) return VB;
      return -1
    }
  },
  5466: (BB, TB, dB) => {
    var VB = dB(5470),
      yB = dB(5461),
      pB = dB(5472);
    BB.exports = function(BB) {
      return yB(BB) ? pB(BB) : VB(BB)
    }
  },
  4612: (BB, TB, dB) => {
    var VB = dB(4618),
      yB = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      pB = /\\(\\)?/g,
      lB = VB((function(BB) {
        var TB = [];
        return 46 === BB.charCodeAt(0) && TB.push(""), BB.replace(yB, (function(BB, dB, VB, yB) {
          TB.push(VB ? yB.replace(pB, "$1") : dB || BB)
        })), TB
      }));
    BB.exports = lB
  },
  4800: (BB, TB, dB) => {
    var VB = dB(4539);
    BB.exports = function(BB) {
      if ("string" == typeof BB || VB(BB)) return BB;
      var TB = BB + "";
      return "0" == TB && 1 / BB == -1 / 0 ? "-0" : TB
    }
  },
  4683: BB => {
    var TB = Function.prototype.toString;
    BB.exports = function(BB) {
      if (null != BB) {
        try {
          return TB.call(BB)
        } catch (dB) {}
        try {
          return BB + ""
        } catch (dB) {}
      }
      return ""
    }
  },
  4537: BB => {
    var TB = /\s/;
    BB.exports = function(BB) {
      for (var dB = BB.length; dB-- && TB.test(BB.charAt(dB)););
      return dB
    }
  },
  5472: BB => {
    var TB = "\\ud800-\\udfff",
      dB = "[" + TB + "]",
      VB = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
      yB = "\\ud83c[\\udffb-\\udfff]",
      pB = "[^" + TB + "]",
      lB = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      JB = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      YB = "(?:" + VB + "|" + yB + ")" + "?",
      gB = "[\\ufe0e\\ufe0f]?",
      oB = gB + YB + ("(?:\\u200d(?:" + [pB, lB, JB].join("|") + ")" + gB + YB + ")*"),
      kB = "(?:" + [pB + VB + "?", VB, lB, JB, dB].join("|") + ")",
      LB = RegExp(yB + "(?=" + yB + ")|" + kB + oB, "g");
    BB.exports = function(BB) {
      return BB.match(LB) || []
    }
  },
  5342: BB => {
    BB.exports = function(BB) {
      return function() {
        return BB
      }
    }
  },
  4497: (BB, TB, dB) => {
    var VB = dB(4505),
      yB = dB(4510),
      pB = dB(4529),
      lB = Math.max,
      JB = Math.min;
    BB.exports = function(BB, TB, dB) {
      var YB, gB, oB, kB, LB, OB, DB = 0,
        uB = !1,
        HB = !1,
        EB = !0;
      if ("function" != typeof BB) throw new TypeError("Expected a function");

      function vB(TB) {
        var dB = YB,
          VB = gB;
        return YB = gB = void 0, DB = TB, kB = BB.apply(VB, dB)
      }

      function mB(BB) {
        var dB = BB - OB;
        return void 0 === OB || dB >= TB || dB < 0 || HB && BB - DB >= oB
      }

      function iB() {
        var BB = yB();
        if (mB(BB)) return NB(BB);
        LB = setTimeout(iB, function(BB) {
          var dB = TB - (BB - OB);
          return HB ? JB(dB, oB - (BB - DB)) : dB
        }(BB))
      }

      function NB(BB) {
        return LB = void 0, EB && YB ? vB(BB) : (YB = gB = void 0, kB)
      }

      function tB() {
        var BB = yB(),
          dB = mB(BB);
        if (YB = arguments, gB = this, OB = BB, dB) {
          if (void 0 === LB) return function(BB) {
            return DB = BB, LB = setTimeout(iB, TB), uB ? vB(BB) : kB
          }(OB);
          if (HB) return clearTimeout(LB), LB = setTimeout(iB, TB), vB(OB)
        }
        return void 0 === LB && (LB = setTimeout(iB, TB)), kB
      }
      return TB = pB(TB) || 0, VB(dB) && (uB = !!dB.leading, oB = (HB = "maxWait" in dB) ? lB(pB(dB.maxWait) || 0, TB) : oB, EB = "trailing" in dB ? !!dB.trailing : EB), tB.cancel = function() {
        void 0 !== LB && clearTimeout(LB), DB = 0, YB = OB = gB = LB = void 0
      }, tB.flush = function() {
        return void 0 === LB ? kB : NB(yB())
      }, tB
    }
  },
  4735: BB => {
    BB.exports = function(BB, TB) {
      return BB === TB || BB !== BB && TB !== TB
    }
  },
  5632: (BB, TB, dB) => {
    var VB = dB(5639),
      yB = dB(5648),
      pB = dB(4936),
      lB = dB(4580),
      JB = dB(4865);
    BB.exports = function(BB, TB, dB) {
      var YB = lB(BB) ? VB : yB;
      return dB && JB(BB, TB, dB) && (TB = void 0), YB(BB, pB(TB, 3))
    }
  },
  5718: (BB, TB, dB) => {
    var VB = dB(5720)(dB(5724));
    BB.exports = VB
  },
  5724: (BB, TB, dB) => {
    var VB = dB(5397),
      yB = dB(4936),
      pB = dB(5726),
      lB = Math.max;
    BB.exports = function(BB, TB, dB) {
      var JB = null == BB ? 0 : BB.length;
      if (!JB) return -1;
      var YB = null == dB ? 0 : pB(dB);
      return YB < 0 && (YB = lB(JB + YB, 0)), VB(BB, yB(TB, 3), YB)
    }
  },
  5556: (BB, TB, dB) => {
    var VB = dB(4900),
      yB = dB(5563);
    BB.exports = function(BB, TB) {
      return VB(yB(BB, TB), 1)
    }
  },
  4599: (BB, TB, dB) => {
    var VB = dB(4601);
    BB.exports = function(BB, TB, dB) {
      var yB = null == BB ? void 0 : VB(BB, TB);
      return void 0 === yB ? dB : yB
    }
  },
  5234: (BB, TB, dB) => {
    var VB = dB(5241),
      yB = dB(5249);
    BB.exports = function(BB, TB) {
      return null != BB && yB(BB, TB, VB)
    }
  },
  5255: BB => {
    BB.exports = function(BB) {
      return BB
    }
  },
  4922: (BB, TB, dB) => {
    var VB = dB(4928),
      yB = dB(4566),
      pB = Object.prototype,
      lB = pB.hasOwnProperty,
      JB = pB.propertyIsEnumerable,
      YB = VB(function() {
        return arguments
      }()) ? VB : function(BB) {
        return yB(BB) && lB.call(BB, "callee") && !JB.call(BB, "callee")
      };
    BB.exports = YB
  },
  4580: BB => {
    var TB = Array.isArray;
    BB.exports = TB
  },
  4870: (BB, TB, dB) => {
    var VB = dB(4660),
      yB = dB(4877);
    BB.exports = function(BB) {
      return null != BB && yB(BB.length) && !VB(BB)
    }
  },
  5686: (BB, TB, dB) => {
    var VB = dB(4544),
      yB = dB(4566);
    BB.exports = function(BB) {
      return !0 === BB || !1 === BB || yB(BB) && "[object Boolean]" == VB(BB)
    }
  },
  5110: (BB, TB, dB) => {
    BB = dB.nmd(BB);
    var VB = dB(4517),
      yB = dB(5115),
      pB = TB && !TB.nodeType && TB,
      lB = pB && BB && !BB.nodeType && BB,
      JB = lB && lB.exports === pB ? VB.iD : void 0,
      YB = (JB ? JB.isBuffer : void 0) || yB;
    BB.exports = YB
  },
  5569: (BB, TB, dB) => {
    var VB = dB(4997);
    BB.exports = function(BB, TB) {
      return VB(BB, TB)
    }
  },
  4660: (BB, TB, dB) => {
    var VB = dB(4544),
      yB = dB(4505);
    BB.exports = function(BB) {
      if (!yB(BB)) return !1;
      var TB = VB(BB);
      return "[object Function]" == TB || "[object GeneratorFunction]" == TB || "[object AsyncFunction]" == TB || "[object Proxy]" == TB
    }
  },
  4877: BB => {
    BB.exports = function(BB) {
      return "number" == typeof BB && BB > -1 && BB % 1 == 0 && BB <= 9007199254740991
    }
  },
  4582: (BB, TB, dB) => {
    var VB = dB(4590);
    BB.exports = function(BB) {
      return VB(BB) && BB != +BB
    }
  },
  4809: BB => {
    BB.exports = function(BB) {
      return null == BB
    }
  },
  4590: (BB, TB, dB) => {
    var VB = dB(4544),
      yB = dB(4566);
    BB.exports = function(BB) {
      return "number" == typeof BB || yB(BB) && "[object Number]" == VB(BB)
    }
  },
  4505: BB => {
    BB.exports = function(BB) {
      var TB = typeof BB;
      return null != BB && ("object" == TB || "function" == TB)
    }
  },
  4566: BB => {
    BB.exports = function(BB) {
      return null != BB && "object" == typeof BB
    }
  },
  5673: (BB, TB, dB) => {
    var VB = dB(4544),
      yB = dB(5682),
      pB = dB(4566),
      lB = Function.prototype,
      JB = Object.prototype,
      YB = lB.toString,
      gB = JB.hasOwnProperty,
      oB = YB.call(Object);
    BB.exports = function(BB) {
      if (!pB(BB) || "[object Object]" != VB(BB)) return !1;
      var TB = yB(BB);
      if (null === TB) return !0;
      var dB = gB.call(TB, "constructor") && TB.constructor;
      return "function" == typeof dB && dB instanceof dB && YB.call(dB) == oB
    }
  },
  4576: (BB, TB, dB) => {
    var VB = dB(4544),
      yB = dB(4580),
      pB = dB(4566);
    BB.exports = function(BB) {
      return "string" == typeof BB || !yB(BB) && pB(BB) && "[object String]" == VB(BB)
    }
  },
  4539: (BB, TB, dB) => {
    var VB = dB(4544),
      yB = dB(4566);
    BB.exports = function(BB) {
      return "symbol" == typeof BB || yB(BB) && "[object Symbol]" == VB(BB)
    }
  },
  5120: (BB, TB, dB) => {
    var VB = dB(5129),
      yB = dB(5134),
      pB = dB(5137),
      lB = pB && pB.isTypedArray,
      JB = lB ? yB(lB) : VB;
    BB.exports = JB
  },
  5086: (BB, TB, dB) => {
    var VB = dB(5095),
      yB = dB(5141),
      pB = dB(4870);
    BB.exports = function(BB) {
      return pB(BB) ? VB(BB) : yB(BB)
    }
  },
  5662: BB => {
    BB.exports = function(BB) {
      var TB = null == BB ? 0 : BB.length;
      return TB ? BB[TB - 1] : void 0
    }
  },
  5563: (BB, TB, dB) => {
    var VB = dB(4798),
      yB = dB(4936),
      pB = dB(5276),
      lB = dB(4580);
    BB.exports = function(BB, TB) {
      return (lB(BB) ? VB : pB)(BB, yB(TB, 3))
    }
  },
  5621: (BB, TB, dB) => {
    var VB = dB(5629),
      yB = dB(5284),
      pB = dB(4936);
    BB.exports = function(BB, TB) {
      var dB = {};
      return TB = pB(TB, 3), yB(BB, (function(BB, yB, pB) {
        VB(dB, yB, TB(BB, yB, pB))
      })), dB
    }
  },
  5535: (BB, TB, dB) => {
    var VB = dB(5542),
      yB = dB(5546),
      pB = dB(5255);
    BB.exports = function(BB) {
      return BB && BB.length ? VB(BB, pB, yB) : void 0
    }
  },
  4621: (BB, TB, dB) => {
    var VB = dB(4625);

    function yB(BB, TB) {
      if ("function" != typeof BB || null != TB && "function" != typeof TB) throw new TypeError("Expected a function");
      var dB = function() {
        var VB = arguments,
          yB = TB ? TB.apply(this, VB) : VB[0],
          pB = dB.cache;
        if (pB.has(yB)) return pB.get(yB);
        var lB = BB.apply(this, VB);
        return dB.cache = pB.set(yB, lB) || pB, lB
      };
      return dB.cache = new(yB.Cache || VB), dB
    }
    yB.Cache = VB, BB.exports = yB
  },
  5550: (BB, TB, dB) => {
    var VB = dB(5542),
      yB = dB(5554),
      pB = dB(5255);
    BB.exports = function(BB) {
      return BB && BB.length ? VB(BB, pB, yB) : void 0
    }
  },
  5418: BB => {
    BB.exports = function() {}
  },
  4510: (BB, TB, dB) => {
    var VB = dB(4517);
    BB.exports = function() {
      return VB.Date.now()
    }
  },
  5259: (BB, TB, dB) => {
    var VB = dB(5262),
      yB = dB(5270),
      pB = dB(4608),
      lB = dB(4800);
    BB.exports = function(BB) {
      return pB(BB) ? VB(lB(BB)) : yB(BB)
    }
  },
  4851: (BB, TB, dB) => {
    var VB = dB(4858)();
    BB.exports = VB
  },
  5703: (BB, TB, dB) => {
    var VB = dB(5024),
      yB = dB(4936),
      pB = dB(5711),
      lB = dB(4580),
      JB = dB(4865);
    BB.exports = function(BB, TB, dB) {
      var YB = lB(BB) ? VB : pB;
      return dB && JB(BB, TB, dB) && (TB = void 0), YB(BB, yB(TB, 3))
    }
  },
  4897: (BB, TB, dB) => {
    var VB = dB(4900),
      yB = dB(4932),
      pB = dB(5318),
      lB = dB(4865),
      JB = pB((function(BB, TB) {
        if (null == BB) return [];
        var dB = TB.length;
        return dB > 1 && lB(BB, TB[0], TB[1]) ? TB = [] : dB > 2 && lB(TB[0], TB[1], TB[2]) && (TB = [TB[0]]), yB(BB, VB(TB, 1), [])
      }));
    BB.exports = JB
  },
  5081: BB => {
    BB.exports = function() {
      return []
    }
  },
  5115: BB => {
    BB.exports = function() {
      return !1
    }
  },
  4492: (BB, TB, dB) => {
    var VB = dB(4497),
      yB = dB(4505);
    BB.exports = function(BB, TB, dB) {
      var pB = !0,
        lB = !0;
      if ("function" != typeof BB) throw new TypeError("Expected a function");
      return yB(dB) && (pB = "leading" in dB ? !!dB.leading : pB, lB = "trailing" in dB ? !!dB.trailing : lB), VB(BB, TB, {
        leading: pB,
        maxWait: TB,
        trailing: lB
      })
    }
  },
  4890: (BB, TB, dB) => {
    var VB = dB(4529),
      yB = 1 / 0;
    BB.exports = function(BB) {
      return BB ? (BB = VB(BB)) === yB || BB === -1 / 0 ? 17976931348623157e292 * (BB < 0 ? -1 : 1) : BB === BB ? BB : 0 : 0 === BB ? BB : 0
    }
  },
  5726: (BB, TB, dB) => {
    var VB = dB(4890);
    BB.exports = function(BB) {
      var TB = VB(BB),
        dB = TB % 1;
      return TB === TB ? dB ? TB - dB : TB : 0
    }
  },
  4529: (BB, TB, dB) => {
    var VB = dB(4533),
      yB = dB(4505),
      pB = dB(4539),
      lB = /^[-+]0x[0-9a-f]+$/i,
      JB = /^0b[01]+$/i,
      YB = /^0o[0-7]+$/i,
      gB = parseInt;
    BB.exports = function(BB) {
      if ("number" == typeof BB) return BB;
      if (pB(BB)) return NaN;
      if (yB(BB)) {
        var TB = "function" == typeof BB.valueOf ? BB.valueOf() : BB;
        BB = yB(TB) ? TB + "" : TB
      }
      if ("string" != typeof BB) return 0 === BB ? BB : +BB;
      BB = VB(BB);
      var dB = JB.test(BB);
      return dB || YB.test(BB) ? gB(BB.slice(2), dB ? 2 : 8) : lB.test(BB) ? NaN : +BB
    }
  },
  4789: (BB, TB, dB) => {
    var VB = dB(4794);
    BB.exports = function(BB) {
      return null == BB ? "" : VB(BB)
    }
  },
  5377: (BB, TB, dB) => {
    var VB = dB(4936),
      yB = dB(5381);
    BB.exports = function(BB, TB) {
      return BB && BB.length ? yB(BB, VB(TB, 2)) : []
    }
  },
  5434: (BB, TB, dB) => {
    var VB = dB(5442)("toUpperCase");
    BB.exports = VB
  },
  5495: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => PT
    });
    var VB = dB(62),
      yB = dB(4376),
      pB = dB.n(yB);
    const {
      getOwnPropertyNames: lB,
      getOwnPropertySymbols: JB
    } = Object, {
      hasOwnProperty: YB
    } = Object.prototype;

    function gB(BB, TB) {
      return function(dB, VB, yB) {
        return BB(dB, VB, yB) && TB(dB, VB, yB)
      }
    }

    function oB(BB) {
      return function(TB, dB, VB) {
        if (!TB || !dB || "object" !== typeof TB || "object" !== typeof dB) return BB(TB, dB, VB);
        const {
          cache: yB
        } = VB, pB = yB.get(TB), lB = yB.get(dB);
        if (pB && lB) return pB === dB && lB === TB;
        yB.set(TB, dB), yB.set(dB, TB);
        const JB = BB(TB, dB, VB);
        return yB.delete(TB), yB.delete(dB), JB
      }
    }

    function kB(BB) {
      return lB(BB).concat(JB(BB))
    }
    const LB = Object.hasOwn || ((BB, TB) => YB.call(BB, TB));

    function OB(BB, TB) {
      return BB === TB || !BB && !TB && BB !== BB && TB !== TB
    }
    const {
      getOwnPropertyDescriptor: DB,
      keys: uB
    } = Object;

    function HB(BB, TB) {
      return BB.byteLength === TB.byteLength && FB(new Uint8Array(BB), new Uint8Array(TB))
    }

    function EB(BB, TB, dB) {
      let VB = BB.length;
      if (TB.length !== VB) return !1;
      for (; VB-- > 0;)
        if (!dB.equals(BB[VB], TB[VB], VB, VB, BB, TB, dB)) return !1;
      return !0
    }

    function vB(BB, TB) {
      return BB.byteLength === TB.byteLength && FB(new Uint8Array(BB.buffer, BB.byteOffset, BB.byteLength), new Uint8Array(TB.buffer, TB.byteOffset, TB.byteLength))
    }

    function mB(BB, TB) {
      return OB(BB.getTime(), TB.getTime())
    }

    function iB(BB, TB) {
      return BB.name === TB.name && BB.message === TB.message && BB.cause === TB.cause && BB.stack === TB.stack
    }

    function NB(BB, TB) {
      return BB === TB
    }

    function tB(BB, TB, dB) {
      const VB = BB.size;
      if (VB !== TB.size) return !1;
      if (!VB) return !0;
      const yB = new Array(VB),
        pB = BB.entries();
      let lB, JB, YB = 0;
      for (;
        (lB = pB.next()) && !lB.done;) {
        const VB = TB.entries();
        let pB = !1,
          gB = 0;
        for (;
          (JB = VB.next()) && !JB.done;) {
          if (yB[gB]) {
            gB++;
            continue
          }
          const VB = lB.value,
            oB = JB.value;
          if (dB.equals(VB[0], oB[0], YB, gB, BB, TB, dB) && dB.equals(VB[1], oB[1], VB[0], oB[0], BB, TB, dB)) {
            pB = yB[gB] = !0;
            break
          }
          gB++
        }
        if (!pB) return !1;
        YB++
      }
      return !0
    }
    const fB = OB;

    function sB(BB, TB, dB) {
      const VB = uB(BB);
      let yB = VB.length;
      if (uB(TB).length !== yB) return !1;
      for (; yB-- > 0;)
        if (!rB(BB, TB, dB, VB[yB])) return !1;
      return !0
    }

    function MB(BB, TB, dB) {
      const VB = kB(BB);
      let yB, pB, lB, JB = VB.length;
      if (kB(TB).length !== JB) return !1;
      for (; JB-- > 0;) {
        if (yB = VB[JB], !rB(BB, TB, dB, yB)) return !1;
        if (pB = DB(BB, yB), lB = DB(TB, yB), (pB || lB) && (!pB || !lB || pB.configurable !== lB.configurable || pB.enumerable !== lB.enumerable || pB.writable !== lB.writable)) return !1
      }
      return !0
    }

    function zB(BB, TB) {
      return OB(BB.valueOf(), TB.valueOf())
    }

    function wB(BB, TB) {
      return BB.source === TB.source && BB.flags === TB.flags
    }

    function UB(BB, TB, dB) {
      const VB = BB.size;
      if (VB !== TB.size) return !1;
      if (!VB) return !0;
      const yB = new Array(VB),
        pB = BB.values();
      let lB, JB;
      for (;
        (lB = pB.next()) && !lB.done;) {
        const VB = TB.values();
        let pB = !1,
          YB = 0;
        for (;
          (JB = VB.next()) && !JB.done;) {
          if (!yB[YB] && dB.equals(lB.value, JB.value, lB.value, JB.value, BB, TB, dB)) {
            pB = yB[YB] = !0;
            break
          }
          YB++
        }
        if (!pB) return !1
      }
      return !0
    }

    function FB(BB, TB) {
      let dB = BB.byteLength;
      if (TB.byteLength !== dB || BB.byteOffset !== TB.byteOffset) return !1;
      for (; dB-- > 0;)
        if (BB[dB] !== TB[dB]) return !1;
      return !0
    }

    function KB(BB, TB) {
      return BB.hostname === TB.hostname && BB.pathname === TB.pathname && BB.protocol === TB.protocol && BB.port === TB.port && BB.hash === TB.hash && BB.username === TB.username && BB.password === TB.password
    }

    function rB(BB, TB, dB, VB) {
      return !("_owner" !== VB && "__o" !== VB && "__v" !== VB || !BB.$$typeof && !TB.$$typeof) || LB(TB, VB) && dB.equals(BB[VB], TB[VB], VB, VB, BB, TB, dB)
    }
    const IB = {
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
      cB = Object.prototype.toString;

    function SB(BB) {
      let {
        areArrayBuffersEqual: TB,
        areArraysEqual: dB,
        areDataViewsEqual: VB,
        areDatesEqual: yB,
        areErrorsEqual: pB,
        areFunctionsEqual: lB,
        areMapsEqual: JB,
        areNumbersEqual: YB,
        areObjectsEqual: gB,
        arePrimitiveWrappersEqual: oB,
        areRegExpsEqual: kB,
        areSetsEqual: LB,
        areTypedArraysEqual: OB,
        areUrlsEqual: DB,
        unknownTagComparators: uB
      } = BB;
      return function(BB, HB, EB) {
        if (BB === HB) return !0;
        if (null == BB || null == HB) return !1;
        const vB = typeof BB;
        if (vB !== typeof HB) return !1;
        if ("object" !== vB) return "number" === vB ? YB(BB, HB, EB) : "function" === vB && lB(BB, HB, EB);
        const mB = BB.constructor;
        if (mB !== HB.constructor) return !1;
        if (mB === Object) return gB(BB, HB, EB);
        if (Array.isArray(BB)) return dB(BB, HB, EB);
        if (mB === Date) return yB(BB, HB, EB);
        if (mB === RegExp) return kB(BB, HB, EB);
        if (mB === Map) return JB(BB, HB, EB);
        if (mB === Set) return LB(BB, HB, EB);
        const iB = cB.call(BB);
        if ("[object Date]" === iB) return yB(BB, HB, EB);
        if ("[object RegExp]" === iB) return kB(BB, HB, EB);
        if ("[object Map]" === iB) return JB(BB, HB, EB);
        if ("[object Set]" === iB) return LB(BB, HB, EB);
        if ("[object Object]" === iB) return "function" !== typeof BB.then && "function" !== typeof HB.then && gB(BB, HB, EB);
        if ("[object URL]" === iB) return DB(BB, HB, EB);
        if ("[object Error]" === iB) return pB(BB, HB, EB);
        if ("[object Arguments]" === iB) return gB(BB, HB, EB);
        if (IB[iB]) return OB(BB, HB, EB);
        if ("[object ArrayBuffer]" === iB) return TB(BB, HB, EB);
        if ("[object DataView]" === iB) return VB(BB, HB, EB);
        if ("[object Boolean]" === iB || "[object Number]" === iB || "[object String]" === iB) return oB(BB, HB, EB);
        if (uB) {
          let TB = uB[iB];
          if (!TB) {
            const dB = null != (NB = BB) ? NB[Symbol.toStringTag] : void 0;
            dB && (TB = uB[dB])
          }
          if (TB) return TB(BB, HB, EB)
        }
        var NB;
        return !1
      }
    }
    const PB = QB();
    QB({
      strict: !0
    }), QB({
      circular: !0
    }), QB({
      circular: !0,
      strict: !0
    }), QB({
      createInternalComparator: () => OB
    }), QB({
      strict: !0,
      createInternalComparator: () => OB
    }), QB({
      circular: !0,
      createInternalComparator: () => OB
    }), QB({
      circular: !0,
      createInternalComparator: () => OB,
      strict: !0
    });

    function QB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        circular: TB = !1,
        createInternalComparator: dB,
        createState: VB,
        strict: yB = !1
      } = BB, pB = function(BB) {
        let {
          circular: TB,
          createCustomConfig: dB,
          strict: VB
        } = BB, yB = {
          areArrayBuffersEqual: HB,
          areArraysEqual: VB ? MB : EB,
          areDataViewsEqual: vB,
          areDatesEqual: mB,
          areErrorsEqual: iB,
          areFunctionsEqual: NB,
          areMapsEqual: VB ? gB(tB, MB) : tB,
          areNumbersEqual: fB,
          areObjectsEqual: VB ? MB : sB,
          arePrimitiveWrappersEqual: zB,
          areRegExpsEqual: wB,
          areSetsEqual: VB ? gB(UB, MB) : UB,
          areTypedArraysEqual: VB ? gB(FB, MB) : FB,
          areUrlsEqual: KB,
          unknownTagComparators: void 0
        };
        if (dB && (yB = Object.assign({}, yB, dB(yB))), TB) {
          const BB = oB(yB.areArraysEqual),
            TB = oB(yB.areMapsEqual),
            dB = oB(yB.areObjectsEqual),
            VB = oB(yB.areSetsEqual);
          yB = Object.assign({}, yB, {
            areArraysEqual: BB,
            areMapsEqual: TB,
            areObjectsEqual: dB,
            areSetsEqual: VB
          })
        }
        return yB
      }(BB), lB = SB(pB);
      var JB;
      return function(BB) {
        let {
          circular: TB,
          comparator: dB,
          createState: VB,
          equals: yB,
          strict: pB
        } = BB;
        if (VB) return function(BB, lB) {
          const {
            cache: JB = (TB ? new WeakMap : void 0),
            meta: YB
          } = VB();
          return dB(BB, lB, {
            cache: JB,
            equals: yB,
            meta: YB,
            strict: pB
          })
        };
        if (TB) return function(BB, TB) {
          return dB(BB, TB, {
            cache: new WeakMap,
            equals: yB,
            meta: void 0,
            strict: pB
          })
        };
        const lB = {
          cache: void 0,
          equals: yB,
          meta: void 0,
          strict: pB
        };
        return function(BB, TB) {
          return dB(BB, TB, lB)
        }
      }({
        circular: TB,
        comparator: lB,
        createState: VB,
        equals: dB ? dB(lB) : (JB = lB, function(BB, TB, dB, VB, yB, pB, lB) {
          return JB(BB, TB, lB)
        }),
        strict: yB
      })
    }

    function RB(BB) {
      var TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        dB = -1;
      requestAnimationFrame((function VB(yB) {
        dB < 0 && (dB = yB), yB - dB > TB ? (BB(yB), dB = -1) : function(BB) {
          "undefined" !== typeof requestAnimationFrame && requestAnimationFrame(BB)
        }(VB)
      }))
    }

    function aB(BB) {
      return aB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, aB(BB)
    }

    function ZB(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || function(BB, TB) {
        if (!BB) return;
        if ("string" === typeof BB) return XB(BB, TB);
        var dB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === dB && BB.constructor && (dB = BB.constructor.name);
        if ("Map" === dB || "Set" === dB) return Array.from(BB);
        if ("Arguments" === dB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(dB)) return XB(BB, TB)
      }(BB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function XB(BB, TB) {
      (null == TB || TB > BB.length) && (TB = BB.length);
      for (var dB = 0, VB = new Array(TB); dB < TB; dB++) VB[dB] = BB[dB];
      return VB
    }

    function WB() {
      var BB = function() {
          return null
        },
        TB = !1,
        dB = function dB(VB) {
          if (!TB) {
            if (Array.isArray(VB)) {
              if (!VB.length) return;
              var yB = ZB(VB),
                pB = yB[0],
                lB = yB.slice(1);
              return "number" === typeof pB ? void RB(dB.bind(null, lB), pB) : (dB(pB), void RB(dB.bind(null, lB)))
            }
            "object" === aB(VB) && BB(VB), "function" === typeof VB && VB()
          }
        };
      return {
        stop: function() {
          TB = !0
        },
        start: function(BB) {
          TB = !1, dB(BB)
        },
        subscribe: function(TB) {
          return BB = TB,
            function() {
              BB = function() {
                return null
              }
            }
        }
      }
    }

    function hB(BB) {
      return hB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, hB(BB)
    }

    function CB(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function GB(BB) {
      for (var TB = 1; TB < arguments.length; TB++) {
        var dB = null != arguments[TB] ? arguments[TB] : {};
        TB % 2 ? CB(Object(dB), !0).forEach((function(TB) {
          qB(BB, TB, dB[TB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : CB(Object(dB)).forEach((function(TB) {
          Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
        }))
      }
      return BB
    }

    function qB(BB, TB, dB) {
      return (TB = function(BB) {
        var TB = function(BB, TB) {
          if ("object" !== hB(BB) || null === BB) return BB;
          var dB = BB[Symbol.toPrimitive];
          if (void 0 !== dB) {
            var VB = dB.call(BB, TB || "default");
            if ("object" !== hB(VB)) return VB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === TB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" === hB(TB) ? TB : String(TB)
      }(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }
    var xB = function(BB) {
        return BB
      },
      jB = function(BB, TB) {
        return Object.keys(TB).reduce((function(dB, VB) {
          return GB(GB({}, dB), {}, qB({}, VB, BB(VB, TB[VB])))
        }), {})
      },
      AB = function(BB, TB, dB) {
        return BB.map((function(BB) {
          return "".concat((VB = BB, VB.replace(/([A-Z])/g, (function(BB) {
            return "-".concat(BB.toLowerCase())
          }))), " ").concat(TB, "ms ").concat(dB);
          var VB
        })).join(",")
      };

    function bB(BB, TB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, TB) {
        var dB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != dB) {
          var VB, yB, pB, lB, JB = [],
            YB = !0,
            gB = !1;
          try {
            if (pB = (dB = dB.call(BB)).next, 0 === TB) {
              if (Object(dB) !== dB) return;
              YB = !1
            } else
              for (; !(YB = (VB = pB.call(dB)).done) && (JB.push(VB.value), JB.length !== TB); YB = !0);
          } catch (BB) {
            gB = !0, yB = BB
          } finally {
            try {
              if (!YB && null != dB.return && (lB = dB.return(), Object(lB) !== lB)) return
            } finally {
              if (gB) throw yB
            }
          }
          return JB
        }
      }(BB, TB) || eB(BB, TB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function nB(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return BT(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || eB(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function eB(BB, TB) {
      if (BB) {
        if ("string" === typeof BB) return BT(BB, TB);
        var dB = Object.prototype.toString.call(BB).slice(8, -1);
        return "Object" === dB && BB.constructor && (dB = BB.constructor.name), "Map" === dB || "Set" === dB ? Array.from(BB) : "Arguments" === dB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(dB) ? BT(BB, TB) : void 0
      }
    }

    function BT(BB, TB) {
      (null == TB || TB > BB.length) && (TB = BB.length);
      for (var dB = 0, VB = new Array(TB); dB < TB; dB++) VB[dB] = BB[dB];
      return VB
    }
    var TT = 1e-4,
      dT = function(BB, TB) {
        return [0, 3 * BB, 3 * TB - 6 * BB, 3 * BB - 3 * TB + 1]
      },
      VT = function(BB, TB) {
        return BB.map((function(BB, dB) {
          return BB * Math.pow(TB, dB)
        })).reduce((function(BB, TB) {
          return BB + TB
        }))
      },
      yT = function(BB, TB) {
        return function(dB) {
          var VB = dT(BB, TB);
          return VT(VB, dB)
        }
      },
      pT = function() {
        for (var BB = arguments.length, TB = new Array(BB), dB = 0; dB < BB; dB++) TB[dB] = arguments[dB];
        var VB = TB[0],
          yB = TB[1],
          pB = TB[2],
          lB = TB[3];
        if (1 === TB.length) switch (TB[0]) {
          case "linear":
            VB = 0, yB = 0, pB = 1, lB = 1;
            break;
          case "ease":
            VB = .25, yB = .1, pB = .25, lB = 1;
            break;
          case "ease-in":
            VB = .42, yB = 0, pB = 1, lB = 1;
            break;
          case "ease-out":
            VB = .42, yB = 0, pB = .58, lB = 1;
            break;
          case "ease-in-out":
            VB = 0, yB = 0, pB = .58, lB = 1;
            break;
          default:
            var JB = TB[0].split("(");
            if ("cubic-bezier" === JB[0] && 4 === JB[1].split(")")[0].split(",").length) {
              var YB = bB(JB[1].split(")")[0].split(",").map((function(BB) {
                return parseFloat(BB)
              })), 4);
              VB = YB[0], yB = YB[1], pB = YB[2], lB = YB[3]
            }
        } [VB, pB, yB, lB].every((function(BB) {
          return "number" === typeof BB && BB >= 0 && BB <= 1
        }));
        var gB, oB, kB = yT(VB, pB),
          LB = yT(yB, lB),
          OB = (gB = VB, oB = pB, function(BB) {
            var TB = dT(gB, oB),
              dB = [].concat(nB(TB.map((function(BB, TB) {
                return BB * TB
              })).slice(1)), [0]);
            return VT(dB, BB)
          }),
          DB = function(BB) {
            for (var TB, dB = BB > 1 ? 1 : BB, VB = dB, yB = 0; yB < 8; ++yB) {
              var pB = kB(VB) - dB,
                lB = OB(VB);
              if (Math.abs(pB - dB) < TT || lB < TT) return LB(VB);
              VB = (TB = VB - pB / lB) > 1 ? 1 : TB < 0 ? 0 : TB
            }
            return LB(VB)
          };
        return DB.isStepper = !1, DB
      },
      lT = function() {
        for (var BB = arguments.length, TB = new Array(BB), dB = 0; dB < BB; dB++) TB[dB] = arguments[dB];
        var VB = TB[0];
        if ("string" === typeof VB) switch (VB) {
          case "ease":
          case "ease-in-out":
          case "ease-out":
          case "ease-in":
          case "linear":
            return pT(VB);
          case "spring":
            return function() {
              var BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                TB = BB.stiff,
                dB = void 0 === TB ? 100 : TB,
                VB = BB.damping,
                yB = void 0 === VB ? 8 : VB,
                pB = BB.dt,
                lB = void 0 === pB ? 17 : pB,
                JB = function(BB, TB, VB) {
                  var pB = VB + (-(BB - TB) * dB - VB * yB) * lB / 1e3,
                    JB = VB * lB / 1e3 + BB;
                  return Math.abs(JB - TB) < TT && Math.abs(pB) < TT ? [TB, 0] : [JB, pB]
                };
              return JB.isStepper = !0, JB.dt = lB, JB
            }();
          default:
            if ("cubic-bezier" === VB.split("(")[0]) return pT(VB)
        }
        return "function" === typeof VB ? VB : null
      };

    function JT(BB) {
      return JT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, JT(BB)
    }

    function YT(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return DT(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || OT(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function gT(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function oT(BB) {
      for (var TB = 1; TB < arguments.length; TB++) {
        var dB = null != arguments[TB] ? arguments[TB] : {};
        TB % 2 ? gT(Object(dB), !0).forEach((function(TB) {
          kT(BB, TB, dB[TB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : gT(Object(dB)).forEach((function(TB) {
          Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
        }))
      }
      return BB
    }

    function kT(BB, TB, dB) {
      return (TB = function(BB) {
        var TB = function(BB, TB) {
          if ("object" !== JT(BB) || null === BB) return BB;
          var dB = BB[Symbol.toPrimitive];
          if (void 0 !== dB) {
            var VB = dB.call(BB, TB || "default");
            if ("object" !== JT(VB)) return VB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === TB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" === JT(TB) ? TB : String(TB)
      }(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }

    function LT(BB, TB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, TB) {
        var dB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != dB) {
          var VB, yB, pB, lB, JB = [],
            YB = !0,
            gB = !1;
          try {
            if (pB = (dB = dB.call(BB)).next, 0 === TB) {
              if (Object(dB) !== dB) return;
              YB = !1
            } else
              for (; !(YB = (VB = pB.call(dB)).done) && (JB.push(VB.value), JB.length !== TB); YB = !0);
          } catch (BB) {
            gB = !0, yB = BB
          } finally {
            try {
              if (!YB && null != dB.return && (lB = dB.return(), Object(lB) !== lB)) return
            } finally {
              if (gB) throw yB
            }
          }
          return JB
        }
      }(BB, TB) || OT(BB, TB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function OT(BB, TB) {
      if (BB) {
        if ("string" === typeof BB) return DT(BB, TB);
        var dB = Object.prototype.toString.call(BB).slice(8, -1);
        return "Object" === dB && BB.constructor && (dB = BB.constructor.name), "Map" === dB || "Set" === dB ? Array.from(BB) : "Arguments" === dB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(dB) ? DT(BB, TB) : void 0
      }
    }

    function DT(BB, TB) {
      (null == TB || TB > BB.length) && (TB = BB.length);
      for (var dB = 0, VB = new Array(TB); dB < TB; dB++) VB[dB] = BB[dB];
      return VB
    }
    var uT = function(BB, TB, dB) {
        return BB + (TB - BB) * dB
      },
      HT = function(BB) {
        return BB.from !== BB.to
      },
      ET = function BB(TB, dB, VB) {
        var yB = jB((function(BB, dB) {
          if (HT(dB)) {
            var VB = LT(TB(dB.from, dB.to, dB.bu), 2),
              yB = VB[0],
              pB = VB[1];
            return oT(oT({}, dB), {}, {
              from: yB,
              bu: pB
            })
          }
          return dB
        }), dB);
        return VB < 1 ? jB((function(BB, TB) {
          return HT(TB) ? oT(oT({}, TB), {}, {
            bu: uT(TB.bu, yB[BB].bu, VB),
            from: uT(TB.from, yB[BB].from, VB)
          }) : TB
        }), dB) : BB(TB, yB, VB - 1)
      };
    const vT = function(BB, TB, dB, VB, yB) {
      var pB, lB, JB, YB, gB = (pB = BB, lB = TB, [Object.keys(pB), Object.keys(lB)].reduce((function(BB, TB) {
          return BB.filter((function(BB) {
            return TB.includes(BB)
          }))
        }))),
        oB = gB.reduce((function(dB, VB) {
          return oT(oT({}, dB), {}, kT({}, VB, [BB[VB], TB[VB]]))
        }), {}),
        kB = gB.reduce((function(dB, VB) {
          return oT(oT({}, dB), {}, kT({}, VB, {
            from: BB[VB],
            bu: 0,
            to: TB[VB]
          }))
        }), {}),
        LB = -1,
        OB = function() {
          return null
        };
      return OB = dB.isStepper ? function(VB) {
          JB || (JB = VB);
          var pB = (VB - JB) / dB.dt;
          kB = ET(dB, kB, pB), yB(oT(oT(oT({}, BB), TB), jB((function(BB, TB) {
            return TB.from
          }), kB))), JB = VB, Object.values(kB).filter(HT).length && (LB = requestAnimationFrame(OB))
        } : function(pB) {
          YB || (YB = pB);
          var lB = (pB - YB) / VB,
            JB = jB((function(BB, TB) {
              return uT.apply(void 0, YT(TB).concat([dB(lB)]))
            }), oB);
          if (yB(oT(oT(oT({}, BB), TB), JB)), lB < 1) LB = requestAnimationFrame(OB);
          else {
            var gB = jB((function(BB, TB) {
              return uT.apply(void 0, YT(TB).concat([dB(1)]))
            }), oB);
            yB(oT(oT(oT({}, BB), TB), gB))
          }
        },
        function() {
          return requestAnimationFrame(OB),
            function() {
              cancelAnimationFrame(LB)
            }
        }
    };

    function mT(BB) {
      return mT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, mT(BB)
    }
    var iT = ["children", "tO", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];

    function NT(BB, TB) {
      if (null == BB) return {};
      var dB, VB, yB = function(BB, TB) {
        if (null == BB) return {};
        var dB, VB, yB = {},
          pB = Object.keys(BB);
        for (VB = 0; VB < pB.length; VB++) dB = pB[VB], TB.indexOf(dB) >= 0 || (yB[dB] = BB[dB]);
        return yB
      }(BB, TB);
      if (Object.getOwnPropertySymbols) {
        var pB = Object.getOwnPropertySymbols(BB);
        for (VB = 0; VB < pB.length; VB++) dB = pB[VB], TB.indexOf(dB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, dB) && (yB[dB] = BB[dB])
      }
      return yB
    }

    function tT(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return fT(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || function(BB, TB) {
        if (!BB) return;
        if ("string" === typeof BB) return fT(BB, TB);
        var dB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === dB && BB.constructor && (dB = BB.constructor.name);
        if ("Map" === dB || "Set" === dB) return Array.from(BB);
        if ("Arguments" === dB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(dB)) return fT(BB, TB)
      }(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function fT(BB, TB) {
      (null == TB || TB > BB.length) && (TB = BB.length);
      for (var dB = 0, VB = new Array(TB); dB < TB; dB++) VB[dB] = BB[dB];
      return VB
    }

    function sT(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function MT(BB) {
      for (var TB = 1; TB < arguments.length; TB++) {
        var dB = null != arguments[TB] ? arguments[TB] : {};
        TB % 2 ? sT(Object(dB), !0).forEach((function(TB) {
          zT(BB, TB, dB[TB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : sT(Object(dB)).forEach((function(TB) {
          Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
        }))
      }
      return BB
    }

    function zT(BB, TB, dB) {
      return (TB = UT(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }

    function wT(BB, TB) {
      for (var dB = 0; dB < TB.length; dB++) {
        var VB = TB[dB];
        VB.enumerable = VB.enumerable || !1, VB.configurable = !0, "value" in VB && (VB.writable = !0), Object.defineProperty(BB, UT(VB.key), VB)
      }
    }

    function UT(BB) {
      var TB = function(BB, TB) {
        if ("object" !== mT(BB) || null === BB) return BB;
        var dB = BB[Symbol.toPrimitive];
        if (void 0 !== dB) {
          var VB = dB.call(BB, TB || "default");
          if ("object" !== mT(VB)) return VB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === TB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" === mT(TB) ? TB : String(TB)
    }

    function FT(BB, TB) {
      return FT = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, TB) {
        return BB.__proto__ = TB, BB
      }, FT(BB, TB)
    }

    function KT(BB) {
      var TB = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (BB) {
          return !1
        }
      }();
      return function() {
        var dB, VB = cT(BB);
        if (TB) {
          var yB = cT(this).constructor;
          dB = Reflect.construct(VB, arguments, yB)
        } else dB = VB.apply(this, arguments);
        return rT(this, dB)
      }
    }

    function rT(BB, TB) {
      if (TB && ("object" === mT(TB) || "function" === typeof TB)) return TB;
      if (void 0 !== TB) throw new TypeError("Derived constructors may only return object or undefined");
      return IT(BB)
    }

    function IT(BB) {
      if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return BB
    }

    function cT(BB) {
      return cT = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, cT(BB)
    }
    var ST = function(BB) {
      ! function(BB, TB) {
        if ("function" !== typeof TB && null !== TB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(TB && TB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), TB && FT(BB, TB)
      }(lB, BB);
      var TB, dB, yB, pB = KT(lB);

      function lB(BB, TB) {
        var dB;
        ! function(BB, TB) {
          if (!(BB instanceof TB)) throw new TypeError("Cannot call a class as a function")
        }(this, lB);
        var VB = (dB = pB.call(this, BB, TB)).props,
          yB = VB.isActive,
          JB = VB.attributeName,
          YB = VB.from,
          gB = VB.to,
          oB = VB.steps,
          kB = VB.children,
          LB = VB.duration;
        if (dB.handleStyleChange = dB.handleStyleChange.bind(IT(dB)), dB.changeStyle = dB.changeStyle.bind(IT(dB)), !yB || LB <= 0) return dB.state = {
          style: {}
        }, "function" === typeof kB && (dB.state = {
          style: gB
        }), rT(dB);
        if (oB && oB.length) dB.state = {
          style: oB[0].style
        };
        else if (YB) {
          if ("function" === typeof kB) return dB.state = {
            style: YB
          }, rT(dB);
          dB.state = {
            style: JB ? zT({}, JB, YB) : YB
          }
        } else dB.state = {
          style: {}
        };
        return dB
      }
      return TB = lB, (dB = [{
        key: "componentDidMount",
        value: function() {
          var BB = this.props,
            TB = BB.isActive,
            dB = BB.canBegin;
          this.mounted = !0, TB && dB && this.runAnimation(this.props)
        }
      }, {
        key: "componentDidUpdate",
        value: function(BB) {
          var TB = this.props,
            dB = TB.isActive,
            VB = TB.canBegin,
            yB = TB.attributeName,
            pB = TB.shouldReAnimate,
            lB = TB.to,
            JB = TB.from,
            YB = this.state.style;
          if (VB)
            if (dB) {
              if (!(PB(BB.to, lB) && BB.canBegin && BB.isActive)) {
                var gB = !BB.canBegin || !BB.isActive;
                this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
                var oB = gB || pB ? JB : BB.to;
                if (this.state && YB) {
                  var kB = {
                    style: yB ? zT({}, yB, oB) : oB
                  };
                  (yB && YB[yB] !== oB || !yB && YB !== oB) && this.setState(kB)
                }
                this.runAnimation(MT(MT({}, this.props), {}, {
                  from: oB,
                  tO: 0
                }))
              }
            } else {
              var LB = {
                style: yB ? zT({}, yB, lB) : lB
              };
              this.state && YB && (yB && YB[yB] !== lB || !yB && YB !== lB) && this.setState(LB)
            }
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          this.mounted = !1;
          var BB = this.props.onAnimationEnd;
          this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), BB && BB()
        }
      }, {
        key: "handleStyleChange",
        value: function(BB) {
          this.changeStyle(BB)
        }
      }, {
        key: "changeStyle",
        value: function(BB) {
          this.mounted && this.setState({
            style: BB
          })
        }
      }, {
        key: "runJSAnimation",
        value: function(BB) {
          var TB = this,
            dB = BB.from,
            VB = BB.to,
            yB = BB.duration,
            pB = BB.easing,
            lB = BB.tO,
            JB = BB.onAnimationEnd,
            YB = BB.onAnimationStart,
            gB = vT(dB, VB, lT(pB), yB, this.changeStyle);
          this.manager.start([YB, lB, function() {
            TB.stopJSAnimation = gB()
          }, yB, JB])
        }
      }, {
        key: "runStepAnimation",
        value: function(BB) {
          var TB = this,
            dB = BB.steps,
            VB = BB.tO,
            yB = BB.onAnimationStart,
            pB = dB[0],
            lB = pB.style,
            JB = pB.duration,
            YB = void 0 === JB ? 0 : JB;
          return this.manager.start([yB].concat(tT(dB.reduce((function(BB, VB, yB) {
            if (0 === yB) return BB;
            var pB = VB.duration,
              lB = VB.easing,
              JB = void 0 === lB ? "ease" : lB,
              YB = VB.style,
              gB = VB.properties,
              oB = VB.onAnimationEnd,
              kB = yB > 0 ? dB[yB - 1] : VB,
              LB = gB || Object.keys(YB);
            if ("function" === typeof JB || "spring" === JB) return [].concat(tT(BB), [TB.runJSAnimation.bind(TB, {
              from: kB.style,
              to: YB,
              duration: pB,
              easing: JB
            }), pB]);
            var OB = AB(LB, pB, JB),
              DB = MT(MT(MT({}, kB.style), YB), {}, {
                transition: OB
              });
            return [].concat(tT(BB), [DB, pB, oB]).filter(xB)
          }), [lB, Math.max(YB, VB)])), [BB.onAnimationEnd]))
        }
      }, {
        key: "runAnimation",
        value: function(BB) {
          this.manager || (this.manager = WB());
          var TB = BB.tO,
            dB = BB.duration,
            VB = BB.attributeName,
            yB = BB.to,
            pB = BB.easing,
            lB = BB.onAnimationStart,
            JB = BB.onAnimationEnd,
            YB = BB.steps,
            gB = BB.children,
            oB = this.manager;
          if (this.unSubscribe = oB.subscribe(this.handleStyleChange), "function" !== typeof pB && "function" !== typeof gB && "spring" !== pB)
            if (YB.length > 1) this.runStepAnimation(BB);
            else {
              var kB = VB ? zT({}, VB, yB) : yB,
                LB = AB(Object.keys(kB), dB, pB);
              oB.start([lB, TB, MT(MT({}, kB), {}, {
                transition: LB
              }), dB, JB])
            }
          else this.runJSAnimation(BB)
        }
      }, {
        key: "render",
        value: function() {
          var BB = this.props,
            TB = BB.children,
            dB = (BB.tO, BB.duration),
            yB = (BB.attributeName, BB.easing, BB.isActive),
            pB = (BB.steps, BB.from, BB.to, BB.canBegin, BB.onAnimationEnd, BB.shouldReAnimate, BB.onAnimationReStart, NT(BB, iT)),
            lB = VB.Children.count(TB),
            JB = this.state.style;
          if ("function" === typeof TB) return TB(JB);
          if (!yB || 0 === lB || dB <= 0) return TB;
          var YB = function(BB) {
            var TB = BB.props,
              dB = TB.style,
              yB = void 0 === dB ? {} : dB,
              lB = TB.className;
            return (0, VB.cloneElement)(BB, MT(MT({}, pB), {}, {
              style: MT(MT({}, yB), JB),
              className: lB
            }))
          };
          return 1 === lB ? YB(VB.Children.only(TB)) : VB.createElement("div", null, VB.Children.map(TB, (function(BB) {
            return YB(BB)
          })))
        }
      }]) && wT(TB.prototype, dB), yB && wT(TB, yB), Object.defineProperty(TB, "prototype", {
        writable: !1
      }), lB
    }(VB.PureComponent);
    ST.displayName = "Animate", ST.defaultProps = {
      tO: 0,
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
    }, ST.propTypes = {
      from: pB().oneOfType([pB().object, pB().string]),
      to: pB().oneOfType([pB().object, pB().string]),
      attributeName: pB().string,
      duration: pB().number,
      tO: pB().number,
      easing: pB().oneOfType([pB().string, pB().func]),
      steps: pB().arrayOf(pB().shape({
        duration: pB().number.isRequired,
        style: pB().object.isRequired,
        easing: pB().oneOfType([pB().oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), pB().func]),
        properties: pB().arrayOf("string"),
        onAnimationEnd: pB().func
      })),
      children: pB().oneOfType([pB().node, pB().func]),
      isActive: pB().bool,
      canBegin: pB().bool,
      onAnimationEnd: pB().func,
      shouldReAnimate: pB().bool,
      onAnimationStart: pB().func,
      onAnimationReStart: pB().func
    };
    const PT = ST
  },
  5732: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => ZB
    });
    var VB, yB = dB(62),
      pB = dB(4486),
      lB = dB(5495),
      JB = dB(4660),
      YB = dB.n(JB),
      gB = dB(5535),
      oB = dB.n(gB),
      kB = dB(4809),
      LB = dB.n(kB),
      OB = dB(4582),
      DB = dB.n(OB),
      uB = dB(5569),
      HB = dB.n(uB),
      EB = dB(5730),
      vB = dB(5487),
      mB = dB(5361),
      iB = dB(5660),
      NB = dB(5372),
      tB = dB(4572),
      fB = dB(5518),
      sB = dB(4819),
      MB = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
      zB = ["key"];

    function wB(BB) {
      return wB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, wB(BB)
    }

    function UB(BB, TB) {
      if (null == BB) return {};
      var dB, VB, yB = function(BB, TB) {
        if (null == BB) return {};
        var dB = {};
        for (var VB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, VB)) {
            if (TB.indexOf(VB) >= 0) continue;
            dB[VB] = BB[VB]
          } return dB
      }(BB, TB);
      if (Object.getOwnPropertySymbols) {
        var pB = Object.getOwnPropertySymbols(BB);
        for (VB = 0; VB < pB.length; VB++) dB = pB[VB], TB.indexOf(dB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, dB) && (yB[dB] = BB[dB])
      }
      return yB
    }

    function FB() {
      return FB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var TB = 1; TB < arguments.length; TB++) {
          var dB = arguments[TB];
          for (var VB in dB) Object.prototype.hasOwnProperty.call(dB, VB) && (BB[VB] = dB[VB])
        }
        return BB
      }, FB.apply(this, arguments)
    }

    function KB(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function rB(BB) {
      for (var TB = 1; TB < arguments.length; TB++) {
        var dB = null != arguments[TB] ? arguments[TB] : {};
        TB % 2 ? KB(Object(dB), !0).forEach((function(TB) {
          RB(BB, TB, dB[TB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : KB(Object(dB)).forEach((function(TB) {
          Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
        }))
      }
      return BB
    }

    function IB(BB, TB) {
      for (var dB = 0; dB < TB.length; dB++) {
        var VB = TB[dB];
        VB.enumerable = VB.enumerable || !1, VB.configurable = !0, "value" in VB && (VB.writable = !0), Object.defineProperty(BB, aB(VB.key), VB)
      }
    }

    function cB(BB, TB, dB) {
      return TB = PB(TB),
        function(BB, TB) {
          if (TB && ("object" === wB(TB) || "function" === typeof TB)) return TB;
          if (void 0 !== TB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, SB() ? Reflect.construct(TB, dB || [], PB(BB).constructor) : TB.apply(BB, dB))
    }

    function SB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (SB = function() {
        return !!BB
      })()
    }

    function PB(BB) {
      return PB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, PB(BB)
    }

    function QB(BB, TB) {
      return QB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, TB) {
        return BB.__proto__ = TB, BB
      }, QB(BB, TB)
    }

    function RB(BB, TB, dB) {
      return (TB = aB(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }

    function aB(BB) {
      var TB = function(BB, TB) {
        if ("object" != wB(BB) || !BB) return BB;
        var dB = BB[Symbol.toPrimitive];
        if (void 0 !== dB) {
          var VB = dB.call(BB, TB || "default");
          if ("object" != wB(VB)) return VB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === TB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == wB(TB) ? TB : TB + ""
    }
    var ZB = function(BB) {
      function TB() {
        var BB;
        ! function(BB, TB) {
          if (!(BB instanceof TB)) throw new TypeError("Cannot call a class as a function")
        }(this, TB);
        for (var dB = arguments.length, VB = new Array(dB), yB = 0; yB < dB; yB++) VB[yB] = arguments[yB];
        return RB(BB = cB(this, TB, [].concat(VB)), "state", {
          isAnimationFinished: !0
        }), RB(BB, "id", (0, tB.G)("recharts-area-")), RB(BB, "handleAnimationEnd", (function() {
          var TB = BB.props.onAnimationEnd;
          BB.setState({
            isAnimationFinished: !0
          }), YB()(TB) && TB()
        })), RB(BB, "handleAnimationStart", (function() {
          var TB = BB.props.onAnimationStart;
          BB.setState({
            isAnimationFinished: !1
          }), YB()(TB) && TB()
        })), BB
      }
      return function(BB, TB) {
        if ("function" !== typeof TB && null !== TB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(TB && TB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), TB && QB(BB, TB)
      }(TB, BB), dB = TB, VB = [{
        key: "renderDots",
        value: function(BB, dB, VB) {
          var pB = this.props.isAnimationActive,
            lB = this.state.isAnimationFinished;
          if (pB && !lB) return null;
          var JB = this.props,
            YB = JB.dot,
            gB = JB.points,
            oB = JB.dataKey,
            kB = (0, sB.d)(this.props, !1),
            LB = (0, sB.d)(YB, !0),
            OB = gB.map((function(BB, dB) {
              var VB = rB(rB(rB({
                key: "dot-".concat(dB),
                r: 3
              }, kB), LB), {}, {
                index: dB,
                cx: BB.x,
                cy: BB.y,
                dataKey: oB,
                value: BB.value,
                payload: BB.payload,
                points: gB
              });
              return TB.renderDotItem(YB, VB)
            })),
            DB = {
              clipPath: BB ? "url(#clipPath-".concat(dB ? "" : "dots-").concat(VB, ")") : null
            };
          return yB.createElement(mB.c, FB({
            className: "recharts-area-dots"
          }, DB), OB)
        }
      }, {
        key: "renderHorizontalRect",
        value: function(BB) {
          var TB = this.props,
            dB = TB.baseLine,
            VB = TB.points,
            pB = TB.strokeWidth,
            lB = VB[0].x,
            JB = VB[VB.length - 1].x,
            YB = BB * Math.abs(lB - JB),
            gB = oB()(VB.map((function(BB) {
              return BB.y || 0
            })));
          return (0, tB.y)(dB) && "number" === typeof dB ? gB = Math.max(dB, gB) : dB && Array.isArray(dB) && dB.length && (gB = Math.max(oB()(dB.map((function(BB) {
            return BB.y || 0
          }))), gB)), (0, tB.y)(gB) ? yB.createElement("rect", {
            x: lB < JB ? lB : lB - YB,
            y: 0,
            width: YB,
            height: Math.floor(gB + (pB ? parseInt("".concat(pB), 10) : 1))
          }) : null
        }
      }, {
        key: "renderVerticalRect",
        value: function(BB) {
          var TB = this.props,
            dB = TB.baseLine,
            VB = TB.points,
            pB = TB.strokeWidth,
            lB = VB[0].y,
            JB = VB[VB.length - 1].y,
            YB = BB * Math.abs(lB - JB),
            gB = oB()(VB.map((function(BB) {
              return BB.x || 0
            })));
          return (0, tB.y)(dB) && "number" === typeof dB ? gB = Math.max(dB, gB) : dB && Array.isArray(dB) && dB.length && (gB = Math.max(oB()(dB.map((function(BB) {
            return BB.x || 0
          }))), gB)), (0, tB.y)(gB) ? yB.createElement("rect", {
            x: 0,
            y: lB < JB ? lB : lB - YB,
            width: gB + (pB ? parseInt("".concat(pB), 10) : 1),
            height: Math.floor(YB)
          }) : null
        }
      }, {
        key: "renderClipRect",
        value: function(BB) {
          return "vertical" === this.props.layout ? this.renderVerticalRect(BB) : this.renderHorizontalRect(BB)
        }
      }, {
        key: "renderAreaStatically",
        value: function(BB, TB, dB, VB) {
          var pB = this.props,
            lB = pB.layout,
            JB = pB.type,
            YB = pB.stroke,
            gB = pB.connectNulls,
            oB = pB.isRange,
            kB = (pB.ref, UB(pB, MB));
          return yB.createElement(mB.c, {
            clipPath: dB ? "url(#clipPath-".concat(VB, ")") : null
          }, yB.createElement(EB.b, FB({}, (0, sB.d)(kB, !0), {
            points: BB,
            connectNulls: gB,
            type: JB,
            baseLine: TB,
            layout: lB,
            stroke: "none",
            className: "recharts-area-area"
          })), "none" !== YB && yB.createElement(EB.b, FB({}, (0, sB.d)(this.props, !1), {
            className: "recharts-area-curve",
            layout: lB,
            type: JB,
            connectNulls: gB,
            fill: "none",
            points: BB
          })), "none" !== YB && oB && yB.createElement(EB.b, FB({}, (0, sB.d)(this.props, !1), {
            className: "recharts-area-curve",
            layout: lB,
            type: JB,
            connectNulls: gB,
            fill: "none",
            points: TB
          })))
        }
      }, {
        key: "renderAreaWithAnimation",
        value: function(BB, TB) {
          var dB = this,
            VB = this.props,
            pB = VB.points,
            JB = VB.baseLine,
            YB = VB.isAnimationActive,
            gB = VB.animationBegin,
            oB = VB.animationDuration,
            kB = VB.animationEasing,
            OB = VB.animationId,
            uB = this.state,
            HB = uB.prevPoints,
            EB = uB.prevBaseLine;
          return yB.createElement(lB.e, {
            tO: gB,
            duration: oB,
            isActive: YB,
            easing: kB,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "area-".concat(OB),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(VB) {
            var lB = VB.t;
            if (HB) {
              var YB, gB = HB.length / pB.length,
                oB = pB.map((function(BB, TB) {
                  var dB = Math.floor(TB * gB);
                  if (HB[dB]) {
                    var VB = HB[dB],
                      yB = (0, tB.r)(VB.x, BB.x),
                      pB = (0, tB.r)(VB.y, BB.y);
                    return rB(rB({}, BB), {}, {
                      x: yB(lB),
                      y: pB(lB)
                    })
                  }
                  return BB
                }));
              return YB = (0, tB.y)(JB) && "number" === typeof JB ? (0, tB.r)(EB, JB)(lB) : LB()(JB) || DB()(JB) ? (0, tB.r)(EB, 0)(lB) : JB.map((function(BB, TB) {
                var dB = Math.floor(TB * gB);
                if (EB[dB]) {
                  var VB = EB[dB],
                    yB = (0, tB.r)(VB.x, BB.x),
                    pB = (0, tB.r)(VB.y, BB.y);
                  return rB(rB({}, BB), {}, {
                    x: yB(lB),
                    y: pB(lB)
                  })
                }
                return BB
              })), dB.renderAreaStatically(oB, YB, BB, TB)
            }
            return yB.createElement(mB.c, null, yB.createElement("defs", null, yB.createElement("clipPath", {
              id: "animationClipPath-".concat(TB)
            }, dB.renderClipRect(lB))), yB.createElement(mB.c, {
              clipPath: "url(#animationClipPath-".concat(TB, ")")
            }, dB.renderAreaStatically(pB, JB, BB, TB)))
          }))
        }
      }, {
        key: "renderArea",
        value: function(BB, TB) {
          var dB = this.props,
            VB = dB.points,
            yB = dB.baseLine,
            pB = dB.isAnimationActive,
            lB = this.state,
            JB = lB.prevPoints,
            YB = lB.prevBaseLine,
            gB = lB.totalLength;
          return pB && VB && VB.length && (!JB && gB > 0 || !HB()(JB, VB) || !HB()(YB, yB)) ? this.renderAreaWithAnimation(BB, TB) : this.renderAreaStatically(VB, yB, BB, TB)
        }
      }, {
        key: "render",
        value: function() {
          var BB, TB = this.props,
            dB = TB.hide,
            VB = TB.dot,
            lB = TB.points,
            JB = TB.className,
            YB = TB.top,
            gB = TB.left,
            oB = TB.xAxis,
            kB = TB.yAxis,
            OB = TB.width,
            DB = TB.height,
            uB = TB.isAnimationActive,
            HB = TB.id;
          if (dB || !lB || !lB.length) return null;
          var EB = this.state.isAnimationFinished,
            vB = 1 === lB.length,
            NB = (0, pB.e)("recharts-area", JB),
            tB = oB && oB.allowDataOverflow,
            fB = kB && kB.allowDataOverflow,
            MB = tB || fB,
            zB = LB()(HB) ? this.id : HB,
            wB = null !== (BB = (0, sB.d)(VB, !1)) && void 0 !== BB ? BB : {
              r: 3,
              strokeWidth: 2
            },
            UB = wB.r,
            FB = void 0 === UB ? 3 : UB,
            KB = wB.strokeWidth,
            rB = void 0 === KB ? 2 : KB,
            IB = ((0, sB.q)(VB) ? VB : {}).clipDot,
            cB = void 0 === IB || IB,
            SB = 2 * FB + rB;
          return yB.createElement(mB.c, {
            className: NB
          }, tB || fB ? yB.createElement("defs", null, yB.createElement("clipPath", {
            id: "clipPath-".concat(zB)
          }, yB.createElement("rect", {
            x: tB ? gB : gB - OB / 2,
            y: fB ? YB : YB - DB / 2,
            width: tB ? OB : 2 * OB,
            height: fB ? DB : 2 * DB
          })), !cB && yB.createElement("clipPath", {
            id: "clipPath-dots-".concat(zB)
          }, yB.createElement("rect", {
            x: gB - SB / 2,
            y: YB - SB / 2,
            width: OB + SB,
            height: DB + SB
          }))) : null, vB ? null : this.renderArea(MB, zB), (VB || vB) && this.renderDots(MB, cB, zB), (!uB || EB) && iB.d.renderCallByParent(this.props, lB))
        }
      }], JB = [{
        key: "getDerivedStateFromProps",
        value: function(BB, TB) {
          return BB.animationId !== TB.prevAnimationId ? {
            prevAnimationId: BB.animationId,
            curPoints: BB.points,
            curBaseLine: BB.baseLine,
            prevPoints: TB.curPoints,
            prevBaseLine: TB.curBaseLine
          } : BB.points !== TB.curPoints || BB.baseLine !== TB.curBaseLine ? {
            curPoints: BB.points,
            curBaseLine: BB.baseLine
          } : null
        }
      }], VB && IB(dB.prototype, VB), JB && IB(dB, JB), Object.defineProperty(dB, "prototype", {
        writable: !1
      }), dB;
      var dB, VB, JB
    }(yB.PureComponent);
    VB = ZB, RB(ZB, "displayName", "Area"), RB(ZB, "defaultProps", {
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
      isAnimationActive: !NB.d.isSsr,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease"
    }), RB(ZB, "getBaseValue", (function(BB, TB, dB, VB) {
      var yB = BB.layout,
        pB = BB.baseValue,
        lB = TB.props.baseValue,
        JB = null !== lB && void 0 !== lB ? lB : pB;
      if ((0, tB.y)(JB) && "number" === typeof JB) return JB;
      var YB = "horizontal" === yB ? VB : dB,
        gB = YB.scale.domain();
      if ("number" === YB.type) {
        var oB = Math.max(gB[0], gB[1]),
          kB = Math.min(gB[0], gB[1]);
        return "dataMin" === JB ? kB : "dataMax" === JB || oB < 0 ? oB : Math.max(Math.min(gB[0], gB[1]), 0)
      }
      return "dataMin" === JB ? gB[0] : "dataMax" === JB ? gB[1] : gB[0]
    })), RB(ZB, "getComposedData", (function(BB) {
      var TB, dB = BB.props,
        yB = BB.item,
        pB = BB.xAxis,
        lB = BB.yAxis,
        JB = BB.xAxisTicks,
        YB = BB.yAxisTicks,
        gB = BB.bandSize,
        oB = BB.dataKey,
        kB = BB.stackedData,
        LB = BB.dataStartIndex,
        OB = BB.displayedData,
        DB = BB.offset,
        uB = dB.layout,
        HB = kB && kB.length,
        EB = VB.getBaseValue(dB, yB, pB, lB),
        vB = "horizontal" === uB,
        mB = !1,
        iB = OB.map((function(BB, TB) {
          var dB;
          HB ? dB = kB[LB + TB] : (dB = (0, fB.eb)(BB, oB), Array.isArray(dB) ? mB = !0 : dB = [EB, dB]);
          var VB = null == dB[1] || HB && null == (0, fB.eb)(BB, oB);
          return vB ? {
            x: (0, fB.C)({
              axis: pB,
              ticks: JB,
              bandSize: gB,
              entry: BB,
              index: TB
            }),
            y: VB ? null : lB.scale(dB[1]),
            value: dB,
            payload: BB
          } : {
            x: VB ? null : pB.scale(dB[1]),
            y: (0, fB.C)({
              axis: lB,
              ticks: YB,
              bandSize: gB,
              entry: BB,
              index: TB
            }),
            value: dB,
            payload: BB
          }
        }));
      return TB = HB || mB ? iB.map((function(BB) {
        var TB = Array.isArray(BB.value) ? BB.value[0] : null;
        return vB ? {
          x: BB.x,
          y: null != TB && null != BB.y ? lB.scale(TB) : null
        } : {
          x: null != TB ? pB.scale(TB) : null,
          y: BB.y
        }
      })) : vB ? lB.scale(EB) : pB.scale(EB), rB({
        points: iB,
        baseLine: TB,
        layout: uB,
        isRange: mB
      }, DB)
    })), RB(ZB, "renderDotItem", (function(BB, TB) {
      var dB;
      if (yB.isValidElement(BB)) dB = yB.cloneElement(BB, TB);
      else if (YB()(BB)) dB = BB(TB);
      else {
        var VB = (0, pB.e)("recharts-area-dot", "boolean" !== typeof BB ? BB.className : ""),
          lB = TB.key,
          JB = UB(TB, zB);
        dB = yB.createElement(vB.e, FB({}, JB, {
          key: lB,
          className: VB
        }))
      }
      return dB
    }))
  },
  5650: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => GB
    });
    var VB = dB(62),
      yB = dB(4486),
      pB = dB(5495),
      lB = dB(5569),
      JB = dB.n(lB),
      YB = dB(4809),
      gB = dB.n(YB),
      oB = dB(5361),
      kB = dB(5576),
      LB = dB(5656),
      OB = dB(5660),
      DB = dB(4572),
      uB = dB(4819),
      HB = dB(5372),
      EB = dB(5518),
      vB = dB(4842),
      mB = dB(5353),
      iB = dB(5668),
      NB = ["x", "y"];

    function tB(BB) {
      return tB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, tB(BB)
    }

    function fB() {
      return fB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var TB = 1; TB < arguments.length; TB++) {
          var dB = arguments[TB];
          for (var VB in dB) Object.prototype.hasOwnProperty.call(dB, VB) && (BB[VB] = dB[VB])
        }
        return BB
      }, fB.apply(this, arguments)
    }

    function sB(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function MB(BB) {
      for (var TB = 1; TB < arguments.length; TB++) {
        var dB = null != arguments[TB] ? arguments[TB] : {};
        TB % 2 ? sB(Object(dB), !0).forEach((function(TB) {
          zB(BB, TB, dB[TB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : sB(Object(dB)).forEach((function(TB) {
          Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
        }))
      }
      return BB
    }

    function zB(BB, TB, dB) {
      return (TB = function(BB) {
        var TB = function(BB, TB) {
          if ("object" != tB(BB) || !BB) return BB;
          var dB = BB[Symbol.toPrimitive];
          if (void 0 !== dB) {
            var VB = dB.call(BB, TB || "default");
            if ("object" != tB(VB)) return VB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === TB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == tB(TB) ? TB : TB + ""
      }(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }

    function wB(BB, TB) {
      if (null == BB) return {};
      var dB, VB, yB = function(BB, TB) {
        if (null == BB) return {};
        var dB = {};
        for (var VB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, VB)) {
            if (TB.indexOf(VB) >= 0) continue;
            dB[VB] = BB[VB]
          } return dB
      }(BB, TB);
      if (Object.getOwnPropertySymbols) {
        var pB = Object.getOwnPropertySymbols(BB);
        for (VB = 0; VB < pB.length; VB++) dB = pB[VB], TB.indexOf(dB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, dB) && (yB[dB] = BB[dB])
      }
      return yB
    }

    function UB(BB, TB) {
      var dB = BB.x,
        VB = BB.y,
        yB = wB(BB, NB),
        pB = "".concat(dB),
        lB = parseInt(pB, 10),
        JB = "".concat(VB),
        YB = parseInt(JB, 10),
        gB = "".concat(TB.height || yB.height),
        oB = parseInt(gB, 10),
        kB = "".concat(TB.width || yB.width),
        LB = parseInt(kB, 10);
      return MB(MB(MB(MB(MB({}, TB), yB), lB ? {
        x: lB
      } : {}), YB ? {
        y: YB
      } : {}), {}, {
        height: oB,
        width: LB,
        name: TB.name,
        radius: TB.radius
      })
    }

    function FB(BB) {
      return VB.createElement(iB.d, fB({
        shapeType: "rectangle",
        propTransformer: UB,
        activeClassName: "recharts-active-bar"
      }, BB))
    }
    var KB, rB = ["value", "background"];

    function IB(BB) {
      return IB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, IB(BB)
    }

    function cB(BB, TB) {
      if (null == BB) return {};
      var dB, VB, yB = function(BB, TB) {
        if (null == BB) return {};
        var dB = {};
        for (var VB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, VB)) {
            if (TB.indexOf(VB) >= 0) continue;
            dB[VB] = BB[VB]
          } return dB
      }(BB, TB);
      if (Object.getOwnPropertySymbols) {
        var pB = Object.getOwnPropertySymbols(BB);
        for (VB = 0; VB < pB.length; VB++) dB = pB[VB], TB.indexOf(dB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, dB) && (yB[dB] = BB[dB])
      }
      return yB
    }

    function SB() {
      return SB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var TB = 1; TB < arguments.length; TB++) {
          var dB = arguments[TB];
          for (var VB in dB) Object.prototype.hasOwnProperty.call(dB, VB) && (BB[VB] = dB[VB])
        }
        return BB
      }, SB.apply(this, arguments)
    }

    function PB(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function QB(BB) {
      for (var TB = 1; TB < arguments.length; TB++) {
        var dB = null != arguments[TB] ? arguments[TB] : {};
        TB % 2 ? PB(Object(dB), !0).forEach((function(TB) {
          hB(BB, TB, dB[TB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : PB(Object(dB)).forEach((function(TB) {
          Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
        }))
      }
      return BB
    }

    function RB(BB, TB) {
      for (var dB = 0; dB < TB.length; dB++) {
        var VB = TB[dB];
        VB.enumerable = VB.enumerable || !1, VB.configurable = !0, "value" in VB && (VB.writable = !0), Object.defineProperty(BB, CB(VB.key), VB)
      }
    }

    function aB(BB, TB, dB) {
      return TB = XB(TB),
        function(BB, TB) {
          if (TB && ("object" === IB(TB) || "function" === typeof TB)) return TB;
          if (void 0 !== TB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, ZB() ? Reflect.construct(TB, dB || [], XB(BB).constructor) : TB.apply(BB, dB))
    }

    function ZB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (ZB = function() {
        return !!BB
      })()
    }

    function XB(BB) {
      return XB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, XB(BB)
    }

    function WB(BB, TB) {
      return WB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, TB) {
        return BB.__proto__ = TB, BB
      }, WB(BB, TB)
    }

    function hB(BB, TB, dB) {
      return (TB = CB(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }

    function CB(BB) {
      var TB = function(BB, TB) {
        if ("object" != IB(BB) || !BB) return BB;
        var dB = BB[Symbol.toPrimitive];
        if (void 0 !== dB) {
          var VB = dB.call(BB, TB || "default");
          if ("object" != IB(VB)) return VB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === TB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == IB(TB) ? TB : TB + ""
    }
    var GB = function(BB) {
      function TB() {
        var BB;
        ! function(BB, TB) {
          if (!(BB instanceof TB)) throw new TypeError("Cannot call a class as a function")
        }(this, TB);
        for (var dB = arguments.length, VB = new Array(dB), yB = 0; yB < dB; yB++) VB[yB] = arguments[yB];
        return hB(BB = aB(this, TB, [].concat(VB)), "state", {
          isAnimationFinished: !1
        }), hB(BB, "id", (0, DB.G)("recharts-bar-")), hB(BB, "handleAnimationEnd", (function() {
          var TB = BB.props.onAnimationEnd;
          BB.setState({
            isAnimationFinished: !0
          }), TB && TB()
        })), hB(BB, "handleAnimationStart", (function() {
          var TB = BB.props.onAnimationStart;
          BB.setState({
            isAnimationFinished: !1
          }), TB && TB()
        })), BB
      }
      return function(BB, TB) {
        if ("function" !== typeof TB && null !== TB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(TB && TB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), TB && WB(BB, TB)
      }(TB, BB), dB = TB, lB = [{
        key: "renderRectanglesStatically",
        value: function(BB) {
          var TB = this,
            dB = this.props,
            yB = dB.shape,
            pB = dB.dataKey,
            lB = dB.activeIndex,
            JB = dB.activeBar,
            YB = (0, uB.d)(this.props, !1);
          return BB && BB.map((function(BB, dB) {
            var gB = dB === lB,
              kB = gB ? JB : yB,
              LB = QB(QB(QB({}, YB), BB), {}, {
                isActive: gB,
                option: kB,
                index: dB,
                dataKey: pB,
                onAnimationStart: TB.handleAnimationStart,
                onAnimationEnd: TB.handleAnimationEnd
              });
            return VB.createElement(oB.c, SB({
              className: "recharts-bar-rectangle"
            }, (0, vB.o)(TB.props, BB, dB), {
              key: "rectangle-".concat(null === BB || void 0 === BB ? void 0 : BB.x, "-").concat(null === BB || void 0 === BB ? void 0 : BB.y, "-").concat(null === BB || void 0 === BB ? void 0 : BB.value, "-").concat(dB)
            }), VB.createElement(FB, LB))
          }))
        }
      }, {
        key: "renderRectanglesWithAnimation",
        value: function() {
          var BB = this,
            TB = this.props,
            dB = TB.data,
            yB = TB.layout,
            lB = TB.isAnimationActive,
            JB = TB.animationBegin,
            YB = TB.animationDuration,
            gB = TB.animationEasing,
            kB = TB.animationId,
            LB = this.state.prevData;
          return VB.createElement(pB.e, {
            tO: JB,
            duration: YB,
            isActive: lB,
            easing: gB,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "bar-".concat(kB),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(TB) {
            var pB = TB.t,
              lB = dB.map((function(BB, TB) {
                var dB = LB && LB[TB];
                if (dB) {
                  var VB = (0, DB.r)(dB.x, BB.x),
                    lB = (0, DB.r)(dB.y, BB.y),
                    JB = (0, DB.r)(dB.width, BB.width),
                    YB = (0, DB.r)(dB.height, BB.height);
                  return QB(QB({}, BB), {}, {
                    x: VB(pB),
                    y: lB(pB),
                    width: JB(pB),
                    height: YB(pB)
                  })
                }
                if ("horizontal" === yB) {
                  var gB = (0, DB.r)(0, BB.height)(pB);
                  return QB(QB({}, BB), {}, {
                    y: BB.y + BB.height - gB,
                    height: gB
                  })
                }
                var oB = (0, DB.r)(0, BB.width)(pB);
                return QB(QB({}, BB), {}, {
                  width: oB
                })
              }));
            return VB.createElement(oB.c, null, BB.renderRectanglesStatically(lB))
          }))
        }
      }, {
        key: "renderRectangles",
        value: function() {
          var BB = this.props,
            TB = BB.data,
            dB = BB.isAnimationActive,
            VB = this.state.prevData;
          return !(dB && TB && TB.length) || VB && JB()(VB, TB) ? this.renderRectanglesStatically(TB) : this.renderRectanglesWithAnimation()
        }
      }, {
        key: "renderBackground",
        value: function() {
          var BB = this,
            TB = this.props,
            dB = TB.data,
            yB = TB.dataKey,
            pB = TB.activeIndex,
            lB = (0, uB.d)(this.props.background, !1);
          return dB.map((function(TB, dB) {
            TB.value;
            var JB = TB.background,
              YB = cB(TB, rB);
            if (!JB) return null;
            var gB = QB(QB(QB(QB(QB({}, YB), {}, {
              fill: "#eee"
            }, JB), lB), (0, vB.o)(BB.props, TB, dB)), {}, {
              onAnimationStart: BB.handleAnimationStart,
              onAnimationEnd: BB.handleAnimationEnd,
              dataKey: yB,
              index: dB,
              className: "recharts-bar-background-rectangle"
            });
            return VB.createElement(FB, SB({
              key: "background-bar-".concat(dB),
              option: BB.props.background,
              isActive: dB === pB
            }, gB))
          }))
        }
      }, {
        key: "renderErrorBar",
        value: function(BB, TB) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var dB = this.props,
            yB = dB.data,
            pB = dB.xAxis,
            lB = dB.yAxis,
            JB = dB.layout,
            YB = dB.children,
            gB = (0, uB.h)(YB, kB.c);
          if (!gB) return null;
          var LB = "vertical" === JB ? yB[0].height / 2 : yB[0].width / 2,
            OB = function(BB, TB) {
              var dB = Array.isArray(BB.value) ? BB.value[1] : BB.value;
              return {
                x: BB.x,
                y: BB.y,
                value: dB,
                errorVal: (0, EB.eb)(BB, TB)
              }
            },
            DB = {
              clipPath: BB ? "url(#clipPath-".concat(TB, ")") : null
            };
          return VB.createElement(oB.c, DB, gB.map((function(BB) {
            return VB.cloneElement(BB, {
              key: "error-bar-".concat(TB, "-").concat(BB.props.dataKey),
              data: yB,
              xAxis: pB,
              yAxis: lB,
              layout: JB,
              offset: LB,
              dataPointFormatter: OB
            })
          })))
        }
      }, {
        key: "render",
        value: function() {
          var BB = this.props,
            TB = BB.hide,
            dB = BB.data,
            pB = BB.className,
            lB = BB.xAxis,
            JB = BB.yAxis,
            YB = BB.left,
            kB = BB.top,
            LB = BB.width,
            DB = BB.height,
            uB = BB.isAnimationActive,
            HB = BB.background,
            EB = BB.id;
          if (TB || !dB || !dB.length) return null;
          var vB = this.state.isAnimationFinished,
            mB = (0, yB.e)("recharts-bar", pB),
            iB = lB && lB.allowDataOverflow,
            NB = JB && JB.allowDataOverflow,
            tB = iB || NB,
            fB = gB()(EB) ? this.id : EB;
          return VB.createElement(oB.c, {
            className: mB
          }, iB || NB ? VB.createElement("defs", null, VB.createElement("clipPath", {
            id: "clipPath-".concat(fB)
          }, VB.createElement("rect", {
            x: iB ? YB : YB - LB / 2,
            y: NB ? kB : kB - DB / 2,
            width: iB ? LB : 2 * LB,
            height: NB ? DB : 2 * DB
          }))) : null, VB.createElement(oB.c, {
            className: "recharts-bar-rectangles",
            clipPath: tB ? "url(#clipPath-".concat(fB, ")") : null
          }, HB ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(tB, fB), (!uB || vB) && OB.d.renderCallByParent(this.props, dB))
        }
      }], YB = [{
        key: "getDerivedStateFromProps",
        value: function(BB, TB) {
          return BB.animationId !== TB.prevAnimationId ? {
            prevAnimationId: BB.animationId,
            curData: BB.data,
            prevData: TB.curData
          } : BB.data !== TB.curData ? {
            curData: BB.data
          } : null
        }
      }], lB && RB(dB.prototype, lB), YB && RB(dB, YB), Object.defineProperty(dB, "prototype", {
        writable: !1
      }), dB;
      var dB, lB, YB
    }(VB.PureComponent);
    KB = GB, hB(GB, "displayName", "Bar"), hB(GB, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      legendType: "rect",
      minPointSize: 0,
      hide: !1,
      data: [],
      layout: "vertical",
      activeBar: !1,
      isAnimationActive: !HB.d.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "ease"
    }), hB(GB, "getComposedData", (function(BB) {
      var TB = BB.props,
        dB = BB.item,
        VB = BB.barPosition,
        yB = BB.bandSize,
        pB = BB.xAxis,
        lB = BB.yAxis,
        JB = BB.xAxisTicks,
        YB = BB.yAxisTicks,
        gB = BB.stackedData,
        oB = BB.dataStartIndex,
        kB = BB.displayedData,
        OB = BB.offset,
        HB = (0, EB.p)(VB, dB);
      if (!HB) return null;
      var vB = TB.layout,
        iB = dB.type.defaultProps,
        NB = void 0 !== iB ? QB(QB({}, iB), dB.props) : dB.props,
        tB = NB.dataKey,
        fB = NB.children,
        sB = NB.minPointSize,
        MB = "horizontal" === vB ? lB : pB,
        zB = gB ? MB.scale.domain() : null,
        wB = (0, EB.y)({
          numericAxis: MB
        }),
        UB = (0, uB.h)(fB, LB.c),
        FB = kB.map((function(BB, TB) {
          var VB, kB, LB, OB, uB, iB;
          gB ? VB = (0, EB.wb)(gB[oB + TB], zB) : (VB = (0, EB.eb)(BB, tB), Array.isArray(VB) || (VB = [wB, VB]));
          var NB = function(BB) {
            var TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return function(dB, VB) {
              if ("number" === typeof BB) return BB;
              var yB = (0, DB.y)(dB) || (0, DB.v)(dB);
              return yB ? BB(dB, VB) : (yB || (0, mB.b)(!1), TB)
            }
          }(sB, KB.defaultProps.minPointSize)(VB[1], TB);
          if ("horizontal" === vB) {
            var fB, MB = [lB.scale(VB[0]), lB.scale(VB[1])],
              FB = MB[0],
              rB = MB[1];
            kB = (0, EB.z)({
              axis: pB,
              ticks: JB,
              bandSize: yB,
              offset: HB.offset,
              entry: BB,
              index: TB
            }), LB = null !== (fB = null !== rB && void 0 !== rB ? rB : FB) && void 0 !== fB ? fB : void 0, OB = HB.size;
            var IB = FB - rB;
            if (uB = Number.isNaN(IB) ? 0 : IB, iB = {
                x: kB,
                y: lB.y,
                width: OB,
                height: lB.height
              }, Math.abs(NB) > 0 && Math.abs(uB) < Math.abs(NB)) {
              var cB = (0, DB.C)(uB || NB) * (Math.abs(NB) - Math.abs(uB));
              LB -= cB, uB += cB
            }
          } else {
            var SB = [pB.scale(VB[0]), pB.scale(VB[1])],
              PB = SB[0],
              RB = SB[1];
            if (kB = PB, LB = (0, EB.z)({
                axis: lB,
                ticks: YB,
                bandSize: yB,
                offset: HB.offset,
                entry: BB,
                index: TB
              }), OB = RB - PB, uB = HB.size, iB = {
                x: pB.x,
                y: LB,
                width: pB.width,
                height: uB
              }, Math.abs(NB) > 0 && Math.abs(OB) < Math.abs(NB)) OB += (0, DB.C)(OB || NB) * (Math.abs(NB) - Math.abs(OB))
          }
          return QB(QB(QB({}, BB), {}, {
            x: kB,
            y: LB,
            width: OB,
            height: uB,
            value: gB ? VB : VB[1],
            payload: BB,
            background: iB
          }, UB && UB[TB] && UB[TB].props), {}, {
            tooltipPayload: [(0, EB.ab)(dB, BB)],
            tooltipPosition: {
              x: kB + OB / 2,
              y: LB + uB / 2
            }
          })
        }));
      return QB({
        data: FB,
        layout: vB
      }, OB)
    }))
  },
  5747: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => IB
    });
    var VB = dB(62),
      yB = dB(4660),
      pB = dB.n(yB),
      lB = dB(4599),
      JB = dB.n(lB),
      YB = dB(4486),
      gB = dB(4839),
      oB = dB(5361),
      kB = dB(5504),
      LB = dB(5596),
      OB = dB(4572),
      DB = dB(4842),
      uB = dB(4819),
      HB = dB(5754),
      EB = ["viewBox"],
      vB = ["viewBox"],
      mB = ["ticks"];

    function iB(BB) {
      return iB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, iB(BB)
    }

    function NB() {
      return NB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var TB = 1; TB < arguments.length; TB++) {
          var dB = arguments[TB];
          for (var VB in dB) Object.prototype.hasOwnProperty.call(dB, VB) && (BB[VB] = dB[VB])
        }
        return BB
      }, NB.apply(this, arguments)
    }

    function tB(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function fB(BB) {
      for (var TB = 1; TB < arguments.length; TB++) {
        var dB = null != arguments[TB] ? arguments[TB] : {};
        TB % 2 ? tB(Object(dB), !0).forEach((function(TB) {
          KB(BB, TB, dB[TB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : tB(Object(dB)).forEach((function(TB) {
          Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
        }))
      }
      return BB
    }

    function sB(BB, TB) {
      if (null == BB) return {};
      var dB, VB, yB = function(BB, TB) {
        if (null == BB) return {};
        var dB = {};
        for (var VB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, VB)) {
            if (TB.indexOf(VB) >= 0) continue;
            dB[VB] = BB[VB]
          } return dB
      }(BB, TB);
      if (Object.getOwnPropertySymbols) {
        var pB = Object.getOwnPropertySymbols(BB);
        for (VB = 0; VB < pB.length; VB++) dB = pB[VB], TB.indexOf(dB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, dB) && (yB[dB] = BB[dB])
      }
      return yB
    }

    function MB(BB, TB) {
      for (var dB = 0; dB < TB.length; dB++) {
        var VB = TB[dB];
        VB.enumerable = VB.enumerable || !1, VB.configurable = !0, "value" in VB && (VB.writable = !0), Object.defineProperty(BB, rB(VB.key), VB)
      }
    }

    function zB(BB, TB, dB) {
      return TB = UB(TB),
        function(BB, TB) {
          if (TB && ("object" === iB(TB) || "function" === typeof TB)) return TB;
          if (void 0 !== TB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, wB() ? Reflect.construct(TB, dB || [], UB(BB).constructor) : TB.apply(BB, dB))
    }

    function wB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (wB = function() {
        return !!BB
      })()
    }

    function UB(BB) {
      return UB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, UB(BB)
    }

    function FB(BB, TB) {
      return FB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, TB) {
        return BB.__proto__ = TB, BB
      }, FB(BB, TB)
    }

    function KB(BB, TB, dB) {
      return (TB = rB(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }

    function rB(BB) {
      var TB = function(BB, TB) {
        if ("object" != iB(BB) || !BB) return BB;
        var dB = BB[Symbol.toPrimitive];
        if (void 0 !== dB) {
          var VB = dB.call(BB, TB || "default");
          if ("object" != iB(VB)) return VB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === TB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == iB(TB) ? TB : TB + ""
    }
    var IB = function(BB) {
      function TB(BB) {
        var dB;
        return function(BB, TB) {
          if (!(BB instanceof TB)) throw new TypeError("Cannot call a class as a function")
        }(this, TB), (dB = zB(this, TB, [BB])).state = {
          fontSize: "",
          letterSpacing: ""
        }, dB
      }
      return function(BB, TB) {
        if ("function" !== typeof TB && null !== TB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(TB && TB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), TB && FB(BB, TB)
      }(TB, BB), dB = TB, lB = [{
        key: "renderTickItem",
        value: function(BB, TB, dB) {
          var yB = (0, YB.e)(TB.className, "recharts-cartesian-axis-tick-value");
          return VB.isValidElement(BB) ? VB.cloneElement(BB, fB(fB({}, TB), {}, {
            className: yB
          })) : pB()(BB) ? BB(fB(fB({}, TB), {}, {
            className: yB
          })) : VB.createElement(kB.e, NB({}, TB, {
            className: "recharts-cartesian-axis-tick-value"
          }), dB)
        }
      }], (yB = [{
        key: "shouldComponentUpdate",
        value: function(BB, TB) {
          var dB = BB.viewBox,
            VB = sB(BB, EB),
            yB = this.props,
            pB = yB.viewBox,
            lB = sB(yB, vB);
          return !(0, gB.d)(dB, pB) || !(0, gB.d)(VB, lB) || !(0, gB.d)(TB, this.state)
        }
      }, {
        key: "componentDidMount",
        value: function() {
          var BB = this.layerReference;
          if (BB) {
            var TB = BB.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
            TB && this.setState({
              fontSize: window.getComputedStyle(TB).fontSize,
              letterSpacing: window.getComputedStyle(TB).letterSpacing
            })
          }
        }
      }, {
        key: "getTickLineCoord",
        value: function(BB) {
          var TB, dB, VB, yB, pB, lB, JB = this.props,
            YB = JB.x,
            gB = JB.y,
            oB = JB.width,
            kB = JB.height,
            LB = JB.orientation,
            DB = JB.tickSize,
            uB = JB.mirror,
            HB = JB.tickMargin,
            EB = uB ? -1 : 1,
            vB = BB.tickSize || DB,
            mB = (0, OB.y)(BB.tickCoord) ? BB.tickCoord : BB.coordinate;
          switch (LB) {
            case "top":
              TB = dB = BB.coordinate, lB = (VB = (yB = gB + +!uB * kB) - EB * vB) - EB * HB, pB = mB;
              break;
            case "left":
              VB = yB = BB.coordinate, pB = (TB = (dB = YB + +!uB * oB) - EB * vB) - EB * HB, lB = mB;
              break;
            case "right":
              VB = yB = BB.coordinate, pB = (TB = (dB = YB + +uB * oB) + EB * vB) + EB * HB, lB = mB;
              break;
            default:
              TB = dB = BB.coordinate, lB = (VB = (yB = gB + +uB * kB) + EB * vB) + EB * HB, pB = mB
          }
          return {
            line: {
              x1: TB,
              y1: VB,
              x2: dB,
              y2: yB
            },
            dL: {
              x: pB,
              y: lB
            }
          }
        }
      }, {
        key: "getTickTextAnchor",
        value: function() {
          var BB, TB = this.props,
            dB = TB.orientation,
            VB = TB.mirror;
          switch (dB) {
            case "left":
              BB = VB ? "start" : "end";
              break;
            case "right":
              BB = VB ? "end" : "start";
              break;
            default:
              BB = "middle"
          }
          return BB
        }
      }, {
        key: "getTickVerticalAnchor",
        value: function() {
          var BB = this.props,
            TB = BB.orientation,
            dB = BB.mirror,
            VB = "end";
          switch (TB) {
            case "left":
            case "right":
              VB = "middle";
              break;
            case "top":
              VB = dB ? "start" : "end";
              break;
            default:
              VB = dB ? "end" : "start"
          }
          return VB
        }
      }, {
        key: "renderAxisLine",
        value: function() {
          var BB = this.props,
            TB = BB.x,
            dB = BB.y,
            yB = BB.width,
            pB = BB.height,
            lB = BB.orientation,
            gB = BB.mirror,
            oB = BB.axisLine,
            kB = fB(fB(fB({}, (0, uB.d)(this.props, !1)), (0, uB.d)(oB, !1)), {}, {
              fill: "none"
            });
          if ("top" === lB || "bottom" === lB) {
            var LB = +("top" === lB && !gB || "bottom" === lB && gB);
            kB = fB(fB({}, kB), {}, {
              x1: TB,
              y1: dB + LB * pB,
              x2: TB + yB,
              y2: dB + LB * pB
            })
          } else {
            var OB = +("left" === lB && !gB || "right" === lB && gB);
            kB = fB(fB({}, kB), {}, {
              x1: TB + OB * yB,
              y1: dB,
              x2: TB + OB * yB,
              y2: dB + pB
            })
          }
          return VB.createElement("line", NB({}, kB, {
            className: (0, YB.e)("recharts-cartesian-axis-line", JB()(oB, "className"))
          }))
        }
      }, {
        key: "renderTicks",
        value: function(BB, dB, yB) {
          var lB = this,
            gB = this.props,
            kB = gB.tickLine,
            LB = gB.stroke,
            OB = gB.dL,
            EB = gB.tickFormatter,
            vB = gB.unit,
            mB = (0, HB.e)(fB(fB({}, this.props), {}, {
              ticks: BB
            }), dB, yB),
            iB = this.getTickTextAnchor(),
            tB = this.getTickVerticalAnchor(),
            sB = (0, uB.d)(this.props, !1),
            MB = (0, uB.d)(OB, !1),
            zB = fB(fB({}, sB), {}, {
              fill: "none"
            }, (0, uB.d)(kB, !1)),
            wB = mB.map((function(BB, dB) {
              var yB = lB.getTickLineCoord(BB),
                gB = yB.line,
                uB = yB.dL,
                HB = fB(fB(fB(fB({
                  textAnchor: iB,
                  verticalAnchor: tB
                }, sB), {}, {
                  stroke: "none",
                  fill: LB
                }, MB), uB), {}, {
                  index: dB,
                  payload: BB,
                  visibleTicksCount: mB.length,
                  tickFormatter: EB
                });
              return VB.createElement(oB.c, NB({
                className: "recharts-cartesian-axis-tick",
                key: "tick-".concat(BB.value, "-").concat(BB.coordinate, "-").concat(BB.tickCoord)
              }, (0, DB.o)(lB.props, BB, dB)), kB && VB.createElement("line", NB({}, zB, gB, {
                className: (0, YB.e)("recharts-cartesian-axis-tick-line", JB()(kB, "className"))
              })), OB && TB.renderTickItem(OB, HB, "".concat(pB()(EB) ? EB(BB.value, dB) : BB.value).concat(vB || "")))
            }));
          return VB.createElement("g", {
            className: "recharts-cartesian-axis-ticks"
          }, wB)
        }
      }, {
        key: "render",
        value: function() {
          var BB = this,
            TB = this.props,
            dB = TB.axisLine,
            yB = TB.width,
            lB = TB.height,
            JB = TB.ticksGenerator,
            gB = TB.className;
          if (TB.hide) return null;
          var kB = this.props,
            OB = kB.ticks,
            DB = sB(kB, mB),
            uB = OB;
          return pB()(JB) && (uB = OB && OB.length > 0 ? JB(this.props) : JB(DB)), yB <= 0 || lB <= 0 || !uB || !uB.length ? null : VB.createElement(oB.c, {
            className: (0, YB.e)("recharts-cartesian-axis", gB),
            ref: function(TB) {
              BB.layerReference = TB
            }
          }, dB && this.renderAxisLine(), this.renderTicks(uB, this.state.fontSize, this.state.letterSpacing), LB.c.renderCallByParent(this.props))
        }
      }]) && MB(dB.prototype, yB), lB && MB(dB, lB), Object.defineProperty(dB, "prototype", {
        writable: !1
      }), dB;
      var dB, yB, lB
    }(VB.Component);
    KB(IB, "displayName", "CartesianAxis"), KB(IB, "defaultProps", {
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
      dL: !0,
      mirror: !1,
      minTickGap: 5,
      tickSize: 6,
      tickMargin: 2,
      interval: "preserveEnd"
    })
  },
  5766: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => KB
    });
    var VB = dB(62),
      yB = dB(4660),
      pB = dB.n(yB),
      lB = dB(4812),
      JB = dB(4572),
      YB = dB(4819),
      gB = dB(5518),
      oB = dB(5754),
      kB = dB(5747),
      LB = dB(5713),
      OB = ["x1", "y1", "x2", "y2", "key"],
      DB = ["offset"];

    function uB(BB) {
      return uB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, uB(BB)
    }

    function HB(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function EB(BB) {
      for (var TB = 1; TB < arguments.length; TB++) {
        var dB = null != arguments[TB] ? arguments[TB] : {};
        TB % 2 ? HB(Object(dB), !0).forEach((function(TB) {
          vB(BB, TB, dB[TB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : HB(Object(dB)).forEach((function(TB) {
          Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
        }))
      }
      return BB
    }

    function vB(BB, TB, dB) {
      return (TB = function(BB) {
        var TB = function(BB, TB) {
          if ("object" != uB(BB) || !BB) return BB;
          var dB = BB[Symbol.toPrimitive];
          if (void 0 !== dB) {
            var VB = dB.call(BB, TB || "default");
            if ("object" != uB(VB)) return VB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === TB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == uB(TB) ? TB : TB + ""
      }(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }

    function mB() {
      return mB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var TB = 1; TB < arguments.length; TB++) {
          var dB = arguments[TB];
          for (var VB in dB) Object.prototype.hasOwnProperty.call(dB, VB) && (BB[VB] = dB[VB])
        }
        return BB
      }, mB.apply(this, arguments)
    }

    function iB(BB, TB) {
      if (null == BB) return {};
      var dB, VB, yB = function(BB, TB) {
        if (null == BB) return {};
        var dB = {};
        for (var VB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, VB)) {
            if (TB.indexOf(VB) >= 0) continue;
            dB[VB] = BB[VB]
          } return dB
      }(BB, TB);
      if (Object.getOwnPropertySymbols) {
        var pB = Object.getOwnPropertySymbols(BB);
        for (VB = 0; VB < pB.length; VB++) dB = pB[VB], TB.indexOf(dB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, dB) && (yB[dB] = BB[dB])
      }
      return yB
    }
    var NB = function(BB) {
      var TB = BB.fill;
      if (!TB || "none" === TB) return null;
      var dB = BB.fillOpacity,
        yB = BB.x,
        pB = BB.y,
        lB = BB.width,
        JB = BB.height,
        YB = BB.ry;
      return VB.createElement("rect", {
        x: yB,
        y: pB,
        ry: YB,
        width: lB,
        height: JB,
        stroke: "none",
        fill: TB,
        fillOpacity: dB,
        className: "recharts-cartesian-grid-bg"
      })
    };

    function tB(BB, TB) {
      var dB;
      if (VB.isValidElement(BB)) dB = VB.cloneElement(BB, TB);
      else if (pB()(BB)) dB = BB(TB);
      else {
        var yB = TB.x1,
          lB = TB.y1,
          JB = TB.x2,
          gB = TB.y2,
          oB = TB.key,
          kB = iB(TB, OB),
          LB = (0, YB.d)(kB, !1),
          uB = (LB.offset, iB(LB, DB));
        dB = VB.createElement("line", mB({}, uB, {
          x1: yB,
          y1: lB,
          x2: JB,
          y2: gB,
          fill: "none",
          key: oB
        }))
      }
      return dB
    }

    function fB(BB) {
      var TB = BB.x,
        dB = BB.width,
        yB = BB.horizontal,
        pB = void 0 === yB || yB,
        lB = BB.horizontalPoints;
      if (!pB || !lB || !lB.length) return null;
      var JB = lB.map((function(VB, yB) {
        var lB = EB(EB({}, BB), {}, {
          x1: TB,
          y1: VB,
          x2: TB + dB,
          y2: VB,
          key: "line-".concat(yB),
          index: yB
        });
        return tB(pB, lB)
      }));
      return VB.createElement("g", {
        className: "recharts-cartesian-grid-horizontal"
      }, JB)
    }

    function sB(BB) {
      var TB = BB.y,
        dB = BB.height,
        yB = BB.vertical,
        pB = void 0 === yB || yB,
        lB = BB.verticalPoints;
      if (!pB || !lB || !lB.length) return null;
      var JB = lB.map((function(VB, yB) {
        var lB = EB(EB({}, BB), {}, {
          x1: VB,
          y1: TB,
          x2: VB,
          y2: TB + dB,
          key: "line-".concat(yB),
          index: yB
        });
        return tB(pB, lB)
      }));
      return VB.createElement("g", {
        className: "recharts-cartesian-grid-vertical"
      }, JB)
    }

    function MB(BB) {
      var TB = BB.horizontalFill,
        dB = BB.fillOpacity,
        yB = BB.x,
        pB = BB.y,
        lB = BB.width,
        JB = BB.height,
        YB = BB.horizontalPoints,
        gB = BB.horizontal;
      if (!(void 0 === gB || gB) || !TB || !TB.length) return null;
      var oB = YB.map((function(BB) {
        return Math.round(BB + pB - pB)
      })).sort((function(BB, TB) {
        return BB - TB
      }));
      pB !== oB[0] && oB.unshift(0);
      var kB = oB.map((function(BB, YB) {
        var gB = !oB[YB + 1] ? pB + JB - BB : oB[YB + 1] - BB;
        if (gB <= 0) return null;
        var kB = YB % TB.length;
        return VB.createElement("rect", {
          key: "react-".concat(YB),
          y: BB,
          x: yB,
          height: gB,
          width: lB,
          stroke: "none",
          fill: TB[kB],
          fillOpacity: dB,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return VB.createElement("g", {
        className: "recharts-cartesian-gridstripes-horizontal"
      }, kB)
    }

    function zB(BB) {
      var TB = BB.vertical,
        dB = void 0 === TB || TB,
        yB = BB.verticalFill,
        pB = BB.fillOpacity,
        lB = BB.x,
        JB = BB.y,
        YB = BB.width,
        gB = BB.height,
        oB = BB.verticalPoints;
      if (!dB || !yB || !yB.length) return null;
      var kB = oB.map((function(BB) {
        return Math.round(BB + lB - lB)
      })).sort((function(BB, TB) {
        return BB - TB
      }));
      lB !== kB[0] && kB.unshift(0);
      var LB = kB.map((function(BB, TB) {
        var dB = !kB[TB + 1] ? lB + YB - BB : kB[TB + 1] - BB;
        if (dB <= 0) return null;
        var oB = TB % yB.length;
        return VB.createElement("rect", {
          key: "react-".concat(TB),
          x: BB,
          y: JB,
          width: dB,
          height: gB,
          stroke: "none",
          fill: yB[oB],
          fillOpacity: pB,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return VB.createElement("g", {
        className: "recharts-cartesian-gridstripes-vertical"
      }, LB)
    }
    var wB = function(BB, TB) {
        var dB = BB.xAxis,
          VB = BB.width,
          yB = BB.height,
          pB = BB.offset;
        return (0, gB.E)((0, oB.e)(EB(EB(EB({}, kB.b.defaultProps), dB), {}, {
          ticks: (0, gB.Y)(dB, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: VB,
            height: yB
          }
        })), pB.left, pB.left + pB.width, TB)
      },
      UB = function(BB, TB) {
        var dB = BB.yAxis,
          VB = BB.width,
          yB = BB.height,
          pB = BB.offset;
        return (0, gB.E)((0, oB.e)(EB(EB(EB({}, kB.b.defaultProps), dB), {}, {
          ticks: (0, gB.Y)(dB, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: VB,
            height: yB
          }
        })), pB.top, pB.top + pB.height, TB)
      },
      FB = {
        horizontal: !0,
        vertical: !0,
        horizontalPoints: [],
        verticalPoints: [],
        stroke: "#ccc",
        fill: "none",
        verticalFill: [],
        horizontalFill: []
      };

    function KB(BB) {
      var TB, dB, yB, YB, gB, oB, kB = (0, LB.l)(),
        OB = (0, LB.k)(),
        DB = (0, LB.q)(),
        HB = EB(EB({}, BB), {}, {
          stroke: null !== (TB = BB.stroke) && void 0 !== TB ? TB : FB.stroke,
          fill: null !== (dB = BB.fill) && void 0 !== dB ? dB : FB.fill,
          horizontal: null !== (yB = BB.horizontal) && void 0 !== yB ? yB : FB.horizontal,
          horizontalFill: null !== (YB = BB.horizontalFill) && void 0 !== YB ? YB : FB.horizontalFill,
          vertical: null !== (gB = BB.vertical) && void 0 !== gB ? gB : FB.vertical,
          verticalFill: null !== (oB = BB.verticalFill) && void 0 !== oB ? oB : FB.verticalFill,
          x: (0, JB.y)(BB.x) ? BB.x : DB.left,
          y: (0, JB.y)(BB.y) ? BB.y : DB.top,
          width: (0, JB.y)(BB.width) ? BB.width : DB.width,
          height: (0, JB.y)(BB.height) ? BB.height : DB.height
        }),
        vB = HB.x,
        iB = HB.y,
        tB = HB.width,
        KB = HB.height,
        rB = HB.syncWithTicks,
        IB = HB.horizontalValues,
        cB = HB.verticalValues,
        SB = (0, LB.g)(),
        PB = (0, LB.y)();
      if (!(0, JB.y)(tB) || tB <= 0 || !(0, JB.y)(KB) || KB <= 0 || !(0, JB.y)(vB) || vB !== +vB || !(0, JB.y)(iB) || iB !== +iB) return null;
      var QB = HB.verticalCoordinatesGenerator || wB,
        RB = HB.horizontalCoordinatesGenerator || UB,
        aB = HB.horizontalPoints,
        ZB = HB.verticalPoints;
      if ((!aB || !aB.length) && pB()(RB)) {
        var XB = IB && IB.length,
          WB = RB({
            yAxis: PB ? EB(EB({}, PB), {}, {
              ticks: XB ? IB : PB.ticks
            }) : void 0,
            width: kB,
            height: OB,
            offset: DB
          }, !!XB || rB);
        (0, lB.e)(Array.isArray(WB), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(uB(WB), "]")), Array.isArray(WB) && (aB = WB)
      }
      if ((!ZB || !ZB.length) && pB()(QB)) {
        var hB = cB && cB.length,
          CB = QB({
            xAxis: SB ? EB(EB({}, SB), {}, {
              ticks: hB ? cB : SB.ticks
            }) : void 0,
            width: kB,
            height: OB,
            offset: DB
          }, !!hB || rB);
        (0, lB.e)(Array.isArray(CB), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(uB(CB), "]")), Array.isArray(CB) && (ZB = CB)
      }
      return VB.createElement("g", {
        className: "recharts-cartesian-grid"
      }, VB.createElement(NB, {
        fill: HB.fill,
        fillOpacity: HB.fillOpacity,
        x: HB.x,
        y: HB.y,
        width: HB.width,
        height: HB.height,
        ry: HB.ry
      }), VB.createElement(fB, mB({}, HB, {
        offset: DB,
        horizontalPoints: aB,
        xAxis: SB,
        yAxis: PB
      })), VB.createElement(sB, mB({}, HB, {
        offset: DB,
        verticalPoints: ZB,
        xAxis: SB,
        yAxis: PB
      })), VB.createElement(MB, mB({}, HB, {
        horizontalPoints: aB
      })), VB.createElement(zB, mB({}, HB, {
        verticalPoints: ZB
      })))
    }
    KB.displayName = "CartesianGrid"
  },
  5576: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => iB
    });
    var VB = dB(62),
      yB = dB(5353),
      pB = dB(5361),
      lB = dB(4819),
      JB = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];

    function YB(BB) {
      return YB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, YB(BB)
    }

    function gB() {
      return gB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var TB = 1; TB < arguments.length; TB++) {
          var dB = arguments[TB];
          for (var VB in dB) Object.prototype.hasOwnProperty.call(dB, VB) && (BB[VB] = dB[VB])
        }
        return BB
      }, gB.apply(this, arguments)
    }

    function oB(BB, TB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, TB) {
        var dB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != dB) {
          var VB, yB, pB, lB, JB = [],
            YB = !0,
            gB = !1;
          try {
            if (pB = (dB = dB.call(BB)).next, 0 === TB) {
              if (Object(dB) !== dB) return;
              YB = !1
            } else
              for (; !(YB = (VB = pB.call(dB)).done) && (JB.push(VB.value), JB.length !== TB); YB = !0);
          } catch (BB) {
            gB = !0, yB = BB
          } finally {
            try {
              if (!YB && null != dB.return && (lB = dB.return(), Object(lB) !== lB)) return
            } finally {
              if (gB) throw yB
            }
          }
          return JB
        }
      }(BB, TB) || function(BB, TB) {
        if (!BB) return;
        if ("string" === typeof BB) return kB(BB, TB);
        var dB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === dB && BB.constructor && (dB = BB.constructor.name);
        if ("Map" === dB || "Set" === dB) return Array.from(BB);
        if ("Arguments" === dB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(dB)) return kB(BB, TB)
      }(BB, TB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function kB(BB, TB) {
      (null == TB || TB > BB.length) && (TB = BB.length);
      for (var dB = 0, VB = new Array(TB); dB < TB; dB++) VB[dB] = BB[dB];
      return VB
    }

    function LB(BB, TB) {
      if (null == BB) return {};
      var dB, VB, yB = function(BB, TB) {
        if (null == BB) return {};
        var dB = {};
        for (var VB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, VB)) {
            if (TB.indexOf(VB) >= 0) continue;
            dB[VB] = BB[VB]
          } return dB
      }(BB, TB);
      if (Object.getOwnPropertySymbols) {
        var pB = Object.getOwnPropertySymbols(BB);
        for (VB = 0; VB < pB.length; VB++) dB = pB[VB], TB.indexOf(dB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, dB) && (yB[dB] = BB[dB])
      }
      return yB
    }

    function OB(BB, TB) {
      for (var dB = 0; dB < TB.length; dB++) {
        var VB = TB[dB];
        VB.enumerable = VB.enumerable || !1, VB.configurable = !0, "value" in VB && (VB.writable = !0), Object.defineProperty(BB, mB(VB.key), VB)
      }
    }

    function DB(BB, TB, dB) {
      return TB = HB(TB),
        function(BB, TB) {
          if (TB && ("object" === YB(TB) || "function" === typeof TB)) return TB;
          if (void 0 !== TB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, uB() ? Reflect.construct(TB, dB || [], HB(BB).constructor) : TB.apply(BB, dB))
    }

    function uB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (uB = function() {
        return !!BB
      })()
    }

    function HB(BB) {
      return HB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, HB(BB)
    }

    function EB(BB, TB) {
      return EB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, TB) {
        return BB.__proto__ = TB, BB
      }, EB(BB, TB)
    }

    function vB(BB, TB, dB) {
      return (TB = mB(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }

    function mB(BB) {
      var TB = function(BB, TB) {
        if ("object" != YB(BB) || !BB) return BB;
        var dB = BB[Symbol.toPrimitive];
        if (void 0 !== dB) {
          var VB = dB.call(BB, TB || "default");
          if ("object" != YB(VB)) return VB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === TB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == YB(TB) ? TB : TB + ""
    }
    var iB = function(BB) {
      function TB() {
        return function(BB, TB) {
          if (!(BB instanceof TB)) throw new TypeError("Cannot call a class as a function")
        }(this, TB), DB(this, TB, arguments)
      }
      return function(BB, TB) {
        if ("function" !== typeof TB && null !== TB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(TB && TB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), TB && EB(BB, TB)
      }(TB, BB), dB = TB, (YB = [{
        key: "render",
        value: function() {
          var BB = this.props,
            TB = BB.offset,
            dB = BB.layout,
            YB = BB.width,
            kB = BB.dataKey,
            OB = BB.data,
            DB = BB.dataPointFormatter,
            uB = BB.xAxis,
            HB = BB.yAxis,
            EB = LB(BB, JB),
            vB = (0, lB.d)(EB, !1);
          "x" === this.props.direction && "number" !== uB.type && (0, yB.b)(!1);
          var mB = OB.map((function(BB) {
            var yB = DB(BB, kB),
              lB = yB.x,
              JB = yB.y,
              LB = yB.value,
              OB = yB.errorVal;
            if (!OB) return null;
            var EB, mB, iB = [];
            if (Array.isArray(OB)) {
              var NB = oB(OB, 2);
              EB = NB[0], mB = NB[1]
            } else EB = mB = OB;
            if ("vertical" === dB) {
              var tB = uB.scale,
                fB = JB + TB,
                sB = fB + YB,
                MB = fB - YB,
                zB = tB(LB - EB),
                wB = tB(LB + mB);
              iB.push({
                x1: wB,
                y1: sB,
                x2: wB,
                y2: MB
              }), iB.push({
                x1: zB,
                y1: fB,
                x2: wB,
                y2: fB
              }), iB.push({
                x1: zB,
                y1: sB,
                x2: zB,
                y2: MB
              })
            } else if ("horizontal" === dB) {
              var UB = HB.scale,
                FB = lB + TB,
                KB = FB - YB,
                rB = FB + YB,
                IB = UB(LB - EB),
                cB = UB(LB + mB);
              iB.push({
                x1: KB,
                y1: cB,
                x2: rB,
                y2: cB
              }), iB.push({
                x1: FB,
                y1: IB,
                x2: FB,
                y2: cB
              }), iB.push({
                x1: KB,
                y1: IB,
                x2: rB,
                y2: IB
              })
            }
            return VB.createElement(pB.c, gB({
              className: "recharts-errorBar",
              key: "bar-".concat(iB.map((function(BB) {
                return "".concat(BB.x1, "-").concat(BB.x2, "-").concat(BB.y1, "-").concat(BB.y2)
              })))
            }, vB), iB.map((function(BB) {
              return VB.createElement("line", gB({}, BB, {
                key: "line-".concat(BB.x1, "-").concat(BB.x2, "-").concat(BB.y1, "-").concat(BB.y2)
              }))
            })))
          }));
          return VB.createElement(pB.c, {
            className: "recharts-errorBars"
          }, mB)
        }
      }]) && OB(dB.prototype, YB), kB && OB(dB, kB), Object.defineProperty(dB, "prototype", {
        writable: !1
      }), dB;
      var dB, YB, kB
    }(VB.Component);
    vB(iB, "defaultProps", {
      stroke: "black",
      strokeWidth: 1.5,
      width: 5,
      offset: 0,
      layout: "horizontal"
    }), vB(iB, "displayName", "ErrorBar")
  },
  5737: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => RB
    });
    var VB = dB(62),
      yB = dB(5495),
      pB = dB(4660),
      lB = dB.n(pB),
      JB = dB(4809),
      YB = dB.n(JB),
      gB = dB(5569),
      oB = dB.n(gB),
      kB = dB(4486),
      LB = dB(5730),
      OB = dB(5487),
      DB = dB(5361),
      uB = dB(5660),
      HB = dB(5576),
      EB = dB(4572),
      vB = dB(4819),
      mB = dB(5372),
      iB = dB(5518),
      NB = ["type", "layout", "connectNulls", "ref"],
      tB = ["key"];

    function fB(BB) {
      return fB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, fB(BB)
    }

    function sB(BB, TB) {
      if (null == BB) return {};
      var dB, VB, yB = function(BB, TB) {
        if (null == BB) return {};
        var dB = {};
        for (var VB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, VB)) {
            if (TB.indexOf(VB) >= 0) continue;
            dB[VB] = BB[VB]
          } return dB
      }(BB, TB);
      if (Object.getOwnPropertySymbols) {
        var pB = Object.getOwnPropertySymbols(BB);
        for (VB = 0; VB < pB.length; VB++) dB = pB[VB], TB.indexOf(dB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, dB) && (yB[dB] = BB[dB])
      }
      return yB
    }

    function MB() {
      return MB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var TB = 1; TB < arguments.length; TB++) {
          var dB = arguments[TB];
          for (var VB in dB) Object.prototype.hasOwnProperty.call(dB, VB) && (BB[VB] = dB[VB])
        }
        return BB
      }, MB.apply(this, arguments)
    }

    function zB(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function wB(BB) {
      for (var TB = 1; TB < arguments.length; TB++) {
        var dB = null != arguments[TB] ? arguments[TB] : {};
        TB % 2 ? zB(Object(dB), !0).forEach((function(TB) {
          PB(BB, TB, dB[TB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : zB(Object(dB)).forEach((function(TB) {
          Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
        }))
      }
      return BB
    }

    function UB(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return FB(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || function(BB, TB) {
        if (!BB) return;
        if ("string" === typeof BB) return FB(BB, TB);
        var dB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === dB && BB.constructor && (dB = BB.constructor.name);
        if ("Map" === dB || "Set" === dB) return Array.from(BB);
        if ("Arguments" === dB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(dB)) return FB(BB, TB)
      }(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function FB(BB, TB) {
      (null == TB || TB > BB.length) && (TB = BB.length);
      for (var dB = 0, VB = new Array(TB); dB < TB; dB++) VB[dB] = BB[dB];
      return VB
    }

    function KB(BB, TB) {
      for (var dB = 0; dB < TB.length; dB++) {
        var VB = TB[dB];
        VB.enumerable = VB.enumerable || !1, VB.configurable = !0, "value" in VB && (VB.writable = !0), Object.defineProperty(BB, QB(VB.key), VB)
      }
    }

    function rB(BB, TB, dB) {
      return TB = cB(TB),
        function(BB, TB) {
          if (TB && ("object" === fB(TB) || "function" === typeof TB)) return TB;
          if (void 0 !== TB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, IB() ? Reflect.construct(TB, dB || [], cB(BB).constructor) : TB.apply(BB, dB))
    }

    function IB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (IB = function() {
        return !!BB
      })()
    }

    function cB(BB) {
      return cB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, cB(BB)
    }

    function SB(BB, TB) {
      return SB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, TB) {
        return BB.__proto__ = TB, BB
      }, SB(BB, TB)
    }

    function PB(BB, TB, dB) {
      return (TB = QB(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }

    function QB(BB) {
      var TB = function(BB, TB) {
        if ("object" != fB(BB) || !BB) return BB;
        var dB = BB[Symbol.toPrimitive];
        if (void 0 !== dB) {
          var VB = dB.call(BB, TB || "default");
          if ("object" != fB(VB)) return VB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === TB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == fB(TB) ? TB : TB + ""
    }
    var RB = function(BB) {
      function TB() {
        var BB;
        ! function(BB, TB) {
          if (!(BB instanceof TB)) throw new TypeError("Cannot call a class as a function")
        }(this, TB);
        for (var dB = arguments.length, VB = new Array(dB), yB = 0; yB < dB; yB++) VB[yB] = arguments[yB];
        return PB(BB = rB(this, TB, [].concat(VB)), "state", {
          isAnimationFinished: !0,
          totalLength: 0
        }), PB(BB, "generateSimpleStrokeDasharray", (function(BB, TB) {
          return "".concat(TB, "px ").concat(BB - TB, "px")
        })), PB(BB, "getStrokeDasharray", (function(dB, VB, yB) {
          var pB = yB.reduce((function(BB, TB) {
            return BB + TB
          }));
          if (!pB) return BB.generateSimpleStrokeDasharray(VB, dB);
          for (var lB = Math.floor(dB / pB), JB = dB % pB, YB = VB - dB, gB = [], oB = 0, kB = 0; oB < yB.length; kB += yB[oB], ++oB)
            if (kB + yB[oB] > JB) {
              gB = [].concat(UB(yB.slice(0, oB)), [JB - kB]);
              break
            } var LB = gB.length % 2 === 0 ? [0, YB] : [YB];
          return [].concat(UB(TB.repeat(yB, lB)), UB(gB), LB).map((function(BB) {
            return "".concat(BB, "px")
          })).join(", ")
        })), PB(BB, "id", (0, EB.G)("recharts-line-")), PB(BB, "pathRef", (function(TB) {
          BB.mainCurve = TB
        })), PB(BB, "handleAnimationEnd", (function() {
          BB.setState({
            isAnimationFinished: !0
          }), BB.props.onAnimationEnd && BB.props.onAnimationEnd()
        })), PB(BB, "handleAnimationStart", (function() {
          BB.setState({
            isAnimationFinished: !1
          }), BB.props.onAnimationStart && BB.props.onAnimationStart()
        })), BB
      }
      return function(BB, TB) {
        if ("function" !== typeof TB && null !== TB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(TB && TB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), TB && SB(BB, TB)
      }(TB, BB), dB = TB, pB = [{
        key: "componentDidMount",
        value: function() {
          if (this.props.isAnimationActive) {
            var BB = this.getTotalLength();
            this.setState({
              totalLength: BB
            })
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function() {
          if (this.props.isAnimationActive) {
            var BB = this.getTotalLength();
            BB !== this.state.totalLength && this.setState({
              totalLength: BB
            })
          }
        }
      }, {
        key: "getTotalLength",
        value: function() {
          var BB = this.mainCurve;
          try {
            return BB && BB.getTotalLength && BB.getTotalLength() || 0
          } catch (TB) {
            return 0
          }
        }
      }, {
        key: "renderErrorBar",
        value: function(BB, TB) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var dB = this.props,
            yB = dB.points,
            pB = dB.xAxis,
            lB = dB.yAxis,
            JB = dB.layout,
            YB = dB.children,
            gB = (0, vB.h)(YB, HB.c);
          if (!gB) return null;
          var oB = function(BB, TB) {
              return {
                x: BB.x,
                y: BB.y,
                value: BB.value,
                errorVal: (0, iB.eb)(BB.payload, TB)
              }
            },
            kB = {
              clipPath: BB ? "url(#clipPath-".concat(TB, ")") : null
            };
          return VB.createElement(DB.c, kB, gB.map((function(BB) {
            return VB.cloneElement(BB, {
              key: "bar-".concat(BB.props.dataKey),
              data: yB,
              xAxis: pB,
              yAxis: lB,
              layout: JB,
              dataPointFormatter: oB
            })
          })))
        }
      }, {
        key: "renderDots",
        value: function(BB, dB, yB) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var pB = this.props,
            lB = pB.dot,
            JB = pB.points,
            YB = pB.dataKey,
            gB = (0, vB.d)(this.props, !1),
            oB = (0, vB.d)(lB, !0),
            kB = JB.map((function(BB, dB) {
              var VB = wB(wB(wB({
                key: "dot-".concat(dB),
                r: 3
              }, gB), oB), {}, {
                index: dB,
                cx: BB.x,
                cy: BB.y,
                value: BB.value,
                dataKey: YB,
                payload: BB.payload,
                points: JB
              });
              return TB.renderDotItem(lB, VB)
            })),
            LB = {
              clipPath: BB ? "url(#clipPath-".concat(dB ? "" : "dots-").concat(yB, ")") : null
            };
          return VB.createElement(DB.c, MB({
            className: "recharts-line-dots",
            key: "dots"
          }, LB), kB)
        }
      }, {
        key: "renderCurveStatically",
        value: function(BB, TB, dB, yB) {
          var pB = this.props,
            lB = pB.type,
            JB = pB.layout,
            YB = pB.connectNulls,
            gB = (pB.ref, sB(pB, NB)),
            oB = wB(wB(wB({}, (0, vB.d)(gB, !0)), {}, {
              fill: "none",
              className: "recharts-line-curve",
              clipPath: TB ? "url(#clipPath-".concat(dB, ")") : null,
              points: BB
            }, yB), {}, {
              type: lB,
              layout: JB,
              connectNulls: YB
            });
          return VB.createElement(LB.b, MB({}, oB, {
            pathRef: this.pathRef
          }))
        }
      }, {
        key: "renderCurveWithAnimation",
        value: function(BB, TB) {
          var dB = this,
            pB = this.props,
            lB = pB.points,
            JB = pB.strokeDasharray,
            YB = pB.isAnimationActive,
            gB = pB.animationBegin,
            oB = pB.animationDuration,
            kB = pB.animationEasing,
            LB = pB.animationId,
            OB = pB.animateNewValues,
            DB = pB.width,
            uB = pB.height,
            HB = this.state,
            vB = HB.prevPoints,
            mB = HB.totalLength;
          return VB.createElement(yB.e, {
            tO: gB,
            duration: oB,
            isActive: YB,
            easing: kB,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "line-".concat(LB),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(VB) {
            var yB = VB.t;
            if (vB) {
              var pB = vB.length / lB.length,
                YB = lB.map((function(BB, TB) {
                  var dB = Math.floor(TB * pB);
                  if (vB[dB]) {
                    var VB = vB[dB],
                      lB = (0, EB.r)(VB.x, BB.x),
                      JB = (0, EB.r)(VB.y, BB.y);
                    return wB(wB({}, BB), {}, {
                      x: lB(yB),
                      y: JB(yB)
                    })
                  }
                  if (OB) {
                    var YB = (0, EB.r)(2 * DB, BB.x),
                      gB = (0, EB.r)(uB / 2, BB.y);
                    return wB(wB({}, BB), {}, {
                      x: YB(yB),
                      y: gB(yB)
                    })
                  }
                  return wB(wB({}, BB), {}, {
                    x: BB.x,
                    y: BB.y
                  })
                }));
              return dB.renderCurveStatically(YB, BB, TB)
            }
            var gB, oB = (0, EB.r)(0, mB)(yB);
            if (JB) {
              var kB = "".concat(JB).split(/[,\s]+/gim).map((function(BB) {
                return parseFloat(BB)
              }));
              gB = dB.getStrokeDasharray(oB, mB, kB)
            } else gB = dB.generateSimpleStrokeDasharray(mB, oB);
            return dB.renderCurveStatically(lB, BB, TB, {
              strokeDasharray: gB
            })
          }))
        }
      }, {
        key: "renderCurve",
        value: function(BB, TB) {
          var dB = this.props,
            VB = dB.points,
            yB = dB.isAnimationActive,
            pB = this.state,
            lB = pB.prevPoints,
            JB = pB.totalLength;
          return yB && VB && VB.length && (!lB && JB > 0 || !oB()(lB, VB)) ? this.renderCurveWithAnimation(BB, TB) : this.renderCurveStatically(VB, BB, TB)
        }
      }, {
        key: "render",
        value: function() {
          var BB, TB = this.props,
            dB = TB.hide,
            yB = TB.dot,
            pB = TB.points,
            lB = TB.className,
            JB = TB.xAxis,
            gB = TB.yAxis,
            oB = TB.top,
            LB = TB.left,
            OB = TB.width,
            HB = TB.height,
            EB = TB.isAnimationActive,
            mB = TB.id;
          if (dB || !pB || !pB.length) return null;
          var iB = this.state.isAnimationFinished,
            NB = 1 === pB.length,
            tB = (0, kB.e)("recharts-line", lB),
            fB = JB && JB.allowDataOverflow,
            sB = gB && gB.allowDataOverflow,
            MB = fB || sB,
            zB = YB()(mB) ? this.id : mB,
            wB = null !== (BB = (0, vB.d)(yB, !1)) && void 0 !== BB ? BB : {
              r: 3,
              strokeWidth: 2
            },
            UB = wB.r,
            FB = void 0 === UB ? 3 : UB,
            KB = wB.strokeWidth,
            rB = void 0 === KB ? 2 : KB,
            IB = ((0, vB.q)(yB) ? yB : {}).clipDot,
            cB = void 0 === IB || IB,
            SB = 2 * FB + rB;
          return VB.createElement(DB.c, {
            className: tB
          }, fB || sB ? VB.createElement("defs", null, VB.createElement("clipPath", {
            id: "clipPath-".concat(zB)
          }, VB.createElement("rect", {
            x: fB ? LB : LB - OB / 2,
            y: sB ? oB : oB - HB / 2,
            width: fB ? OB : 2 * OB,
            height: sB ? HB : 2 * HB
          })), !cB && VB.createElement("clipPath", {
            id: "clipPath-dots-".concat(zB)
          }, VB.createElement("rect", {
            x: LB - SB / 2,
            y: oB - SB / 2,
            width: OB + SB,
            height: HB + SB
          }))) : null, !NB && this.renderCurve(MB, zB), this.renderErrorBar(MB, zB), (NB || yB) && this.renderDots(MB, cB, zB), (!EB || iB) && uB.d.renderCallByParent(this.props, pB))
        }
      }], JB = [{
        key: "getDerivedStateFromProps",
        value: function(BB, TB) {
          return BB.animationId !== TB.prevAnimationId ? {
            prevAnimationId: BB.animationId,
            curPoints: BB.points,
            prevPoints: TB.curPoints
          } : BB.points !== TB.curPoints ? {
            curPoints: BB.points
          } : null
        }
      }, {
        key: "repeat",
        value: function(BB, TB) {
          for (var dB = BB.length % 2 !== 0 ? [].concat(UB(BB), [0]) : BB, VB = [], yB = 0; yB < TB; ++yB) VB = [].concat(UB(VB), UB(dB));
          return VB
        }
      }, {
        key: "renderDotItem",
        value: function(BB, TB) {
          var dB;
          if (VB.isValidElement(BB)) dB = VB.cloneElement(BB, TB);
          else if (lB()(BB)) dB = BB(TB);
          else {
            var yB = TB.key,
              pB = sB(TB, tB),
              JB = (0, kB.e)("recharts-line-dot", "boolean" !== typeof BB ? BB.className : "");
            dB = VB.createElement(OB.e, MB({
              key: yB
            }, pB, {
              className: JB
            }))
          }
          return dB
        }
      }], pB && KB(dB.prototype, pB), JB && KB(dB, JB), Object.defineProperty(dB, "prototype", {
        writable: !1
      }), dB;
      var dB, pB, JB
    }(VB.PureComponent);
    PB(RB, "displayName", "Line"), PB(RB, "defaultProps", {
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
      isAnimationActive: !mB.d.isSsr,
      animateNewValues: !0,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease",
      hide: !1,
      label: !1
    }), PB(RB, "getComposedData", (function(BB) {
      var TB = BB.props,
        dB = BB.xAxis,
        VB = BB.yAxis,
        yB = BB.xAxisTicks,
        pB = BB.yAxisTicks,
        lB = BB.dataKey,
        JB = BB.bandSize,
        gB = BB.displayedData,
        oB = BB.offset,
        kB = TB.layout;
      return wB({
        points: gB.map((function(BB, TB) {
          var gB = (0, iB.eb)(BB, lB);
          return "horizontal" === kB ? {
            x: (0, iB.C)({
              axis: dB,
              ticks: yB,
              bandSize: JB,
              entry: BB,
              index: TB
            }),
            y: YB()(gB) ? null : VB.scale(gB),
            value: gB,
            payload: BB
          } : {
            x: YB()(gB) ? null : dB.scale(gB),
            y: (0, iB.C)({
              axis: VB,
              ticks: pB,
              bandSize: JB,
              entry: BB,
              index: TB
            }),
            value: gB,
            payload: BB
          }
        })),
        layout: kB
      }, oB)
    }))
  },
  5699: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => rB
    });
    var VB = dB(62),
      yB = dB(4660),
      pB = dB.n(yB),
      lB = dB(5703),
      JB = dB.n(lB),
      YB = dB(4486),
      gB = dB(5361),
      oB = dB(5596),
      kB = dB(5606),
      LB = dB(4572),
      OB = dB(5612),
      DB = dB(4812),
      uB = dB(4819),
      HB = dB(5713);

    function EB(BB) {
      return EB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, EB(BB)
    }

    function vB(BB, TB) {
      for (var dB = 0; dB < TB.length; dB++) {
        var VB = TB[dB];
        VB.enumerable = VB.enumerable || !1, VB.configurable = !0, "value" in VB && (VB.writable = !0), Object.defineProperty(BB, zB(VB.key), VB)
      }
    }

    function mB(BB, TB, dB) {
      return TB = NB(TB),
        function(BB, TB) {
          if (TB && ("object" === EB(TB) || "function" === typeof TB)) return TB;
          if (void 0 !== TB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, iB() ? Reflect.construct(TB, dB || [], NB(BB).constructor) : TB.apply(BB, dB))
    }

    function iB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (iB = function() {
        return !!BB
      })()
    }

    function NB(BB) {
      return NB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, NB(BB)
    }

    function tB(BB, TB) {
      return tB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, TB) {
        return BB.__proto__ = TB, BB
      }, tB(BB, TB)
    }

    function fB(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function sB(BB) {
      for (var TB = 1; TB < arguments.length; TB++) {
        var dB = null != arguments[TB] ? arguments[TB] : {};
        TB % 2 ? fB(Object(dB), !0).forEach((function(TB) {
          MB(BB, TB, dB[TB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : fB(Object(dB)).forEach((function(TB) {
          Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
        }))
      }
      return BB
    }

    function MB(BB, TB, dB) {
      return (TB = zB(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }

    function zB(BB) {
      var TB = function(BB, TB) {
        if ("object" != EB(BB) || !BB) return BB;
        var dB = BB[Symbol.toPrimitive];
        if (void 0 !== dB) {
          var VB = dB.call(BB, TB || "default");
          if ("object" != EB(VB)) return VB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === TB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == EB(TB) ? TB : TB + ""
    }

    function wB(BB, TB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, TB) {
        var dB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != dB) {
          var VB, yB, pB, lB, JB = [],
            YB = !0,
            gB = !1;
          try {
            if (pB = (dB = dB.call(BB)).next, 0 === TB) {
              if (Object(dB) !== dB) return;
              YB = !1
            } else
              for (; !(YB = (VB = pB.call(dB)).done) && (JB.push(VB.value), JB.length !== TB); YB = !0);
          } catch (BB) {
            gB = !0, yB = BB
          } finally {
            try {
              if (!YB && null != dB.return && (lB = dB.return(), Object(lB) !== lB)) return
            } finally {
              if (gB) throw yB
            }
          }
          return JB
        }
      }(BB, TB) || function(BB, TB) {
        if (!BB) return;
        if ("string" === typeof BB) return UB(BB, TB);
        var dB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === dB && BB.constructor && (dB = BB.constructor.name);
        if ("Map" === dB || "Set" === dB) return Array.from(BB);
        if ("Arguments" === dB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(dB)) return UB(BB, TB)
      }(BB, TB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function UB(BB, TB) {
      (null == TB || TB > BB.length) && (TB = BB.length);
      for (var dB = 0, VB = new Array(TB); dB < TB; dB++) VB[dB] = BB[dB];
      return VB
    }

    function FB() {
      return FB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var TB = 1; TB < arguments.length; TB++) {
          var dB = arguments[TB];
          for (var VB in dB) Object.prototype.hasOwnProperty.call(dB, VB) && (BB[VB] = dB[VB])
        }
        return BB
      }, FB.apply(this, arguments)
    }

    function KB(BB) {
      var TB = BB.x,
        dB = BB.y,
        yB = BB.segment,
        lB = BB.xAxisId,
        EB = BB.yAxisId,
        vB = BB.shape,
        mB = BB.className,
        iB = BB.alwaysShow,
        NB = (0, HB.m)(),
        tB = (0, HB.t)(lB),
        fB = (0, HB.u)(EB),
        MB = (0, HB.s)();
      if (!NB || !MB) return null;
      (0, DB.e)(void 0 === iB, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var zB = function(BB, TB, dB, VB, yB, pB, lB, YB, gB) {
        var oB = yB.x,
          LB = yB.y,
          OB = yB.width,
          DB = yB.height;
        if (dB) {
          var uB = gB.y,
            HB = BB.y.apply(uB, {
              position: pB
            });
          if ((0, kB.e)(gB, "discard") && !BB.y.isInRange(HB)) return null;
          var EB = [{
            x: oB + OB,
            y: HB
          }, {
            x: oB,
            y: HB
          }];
          return "left" === YB ? EB.reverse() : EB
        }
        if (TB) {
          var vB = gB.x,
            mB = BB.x.apply(vB, {
              position: pB
            });
          if ((0, kB.e)(gB, "discard") && !BB.x.isInRange(mB)) return null;
          var iB = [{
            x: mB,
            y: LB + DB
          }, {
            x: mB,
            y: LB
          }];
          return "top" === lB ? iB.reverse() : iB
        }
        if (VB) {
          var NB = gB.segment.map((function(TB) {
            return BB.apply(TB, {
              position: pB
            })
          }));
          return (0, kB.e)(gB, "discard") && JB()(NB, (function(TB) {
            return !BB.isInRange(TB)
          })) ? null : NB
        }
        return null
      }((0, OB.b)({
        x: tB.scale,
        y: fB.scale
      }), (0, LB.w)(TB), (0, LB.w)(dB), yB && 2 === yB.length, MB, BB.position, tB.orientation, fB.orientation, BB);
      if (!zB) return null;
      var UB = wB(zB, 2),
        KB = UB[0],
        rB = KB.x,
        IB = KB.y,
        cB = UB[1],
        SB = cB.x,
        PB = cB.y,
        QB = sB(sB({
          clipPath: (0, kB.e)(BB, "hidden") ? "url(#".concat(NB, ")") : void 0
        }, (0, uB.d)(BB, !0)), {}, {
          x1: rB,
          y1: IB,
          x2: SB,
          y2: PB
        });
      return VB.createElement(gB.c, {
        className: (0, YB.e)("recharts-reference-line", mB)
      }, function(BB, TB) {
        return VB.isValidElement(BB) ? VB.cloneElement(BB, TB) : pB()(BB) ? BB(TB) : VB.createElement("line", FB({}, TB, {
          className: "recharts-reference-line-line"
        }))
      }(vB, QB), oB.c.renderCallByParent(BB, (0, OB.i)({
        x1: rB,
        y1: IB,
        x2: SB,
        y2: PB
      })))
    }
    var rB = function(BB) {
      function TB() {
        return function(BB, TB) {
          if (!(BB instanceof TB)) throw new TypeError("Cannot call a class as a function")
        }(this, TB), mB(this, TB, arguments)
      }
      return function(BB, TB) {
        if ("function" !== typeof TB && null !== TB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(TB && TB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), TB && tB(BB, TB)
      }(TB, BB), dB = TB, (yB = [{
        key: "render",
        value: function() {
          return VB.createElement(KB, this.props)
        }
      }]) && vB(dB.prototype, yB), pB && vB(dB, pB), Object.defineProperty(dB, "prototype", {
        writable: !1
      }), dB;
      var dB, yB, pB
    }(VB.Component);
    MB(rB, "displayName", "ReferenceLine"), MB(rB, "defaultProps", {
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
  5739: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => vB
    });
    var VB = dB(62),
      yB = dB(4486),
      pB = dB(5713),
      lB = dB(5747),
      JB = dB(5518);

    function YB(BB) {
      return YB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, YB(BB)
    }

    function gB(BB, TB) {
      for (var dB = 0; dB < TB.length; dB++) {
        var VB = TB[dB];
        VB.enumerable = VB.enumerable || !1, VB.configurable = !0, "value" in VB && (VB.writable = !0), Object.defineProperty(BB, uB(VB.key), VB)
      }
    }

    function oB(BB, TB, dB) {
      return TB = LB(TB),
        function(BB, TB) {
          if (TB && ("object" === YB(TB) || "function" === typeof TB)) return TB;
          if (void 0 !== TB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, kB() ? Reflect.construct(TB, dB || [], LB(BB).constructor) : TB.apply(BB, dB))
    }

    function kB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (kB = function() {
        return !!BB
      })()
    }

    function LB(BB) {
      return LB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, LB(BB)
    }

    function OB(BB, TB) {
      return OB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, TB) {
        return BB.__proto__ = TB, BB
      }, OB(BB, TB)
    }

    function DB(BB, TB, dB) {
      return (TB = uB(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }

    function uB(BB) {
      var TB = function(BB, TB) {
        if ("object" != YB(BB) || !BB) return BB;
        var dB = BB[Symbol.toPrimitive];
        if (void 0 !== dB) {
          var VB = dB.call(BB, TB || "default");
          if ("object" != YB(VB)) return VB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === TB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == YB(TB) ? TB : TB + ""
    }

    function HB() {
      return HB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var TB = 1; TB < arguments.length; TB++) {
          var dB = arguments[TB];
          for (var VB in dB) Object.prototype.hasOwnProperty.call(dB, VB) && (BB[VB] = dB[VB])
        }
        return BB
      }, HB.apply(this, arguments)
    }

    function EB(BB) {
      var TB = BB.xAxisId,
        dB = (0, pB.l)(),
        YB = (0, pB.k)(),
        gB = (0, pB.t)(TB);
      return null == gB ? null : VB.createElement(lB.b, HB({}, gB, {
        className: (0, yB.e)("recharts-".concat(gB.axisType, " ").concat(gB.axisType), gB.className),
        viewBox: {
          x: 0,
          y: 0,
          width: dB,
          height: YB
        },
        ticksGenerator: function(BB) {
          return (0, JB.Y)(BB, !0)
        }
      }))
    }
    var vB = function(BB) {
      function TB() {
        return function(BB, TB) {
          if (!(BB instanceof TB)) throw new TypeError("Cannot call a class as a function")
        }(this, TB), oB(this, TB, arguments)
      }
      return function(BB, TB) {
        if ("function" !== typeof TB && null !== TB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(TB && TB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), TB && OB(BB, TB)
      }(TB, BB), dB = TB, (yB = [{
        key: "render",
        value: function() {
          return VB.createElement(EB, this.props)
        }
      }]) && gB(dB.prototype, yB), pB && gB(dB, pB), Object.defineProperty(dB, "prototype", {
        writable: !1
      }), dB;
      var dB, yB, pB
    }(VB.Component);
    DB(vB, "displayName", "XAxis"), DB(vB, "defaultProps", {
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
  5757: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => vB
    });
    var VB = dB(62),
      yB = dB(4486),
      pB = dB(5713),
      lB = dB(5747),
      JB = dB(5518);

    function YB(BB) {
      return YB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, YB(BB)
    }

    function gB(BB, TB) {
      for (var dB = 0; dB < TB.length; dB++) {
        var VB = TB[dB];
        VB.enumerable = VB.enumerable || !1, VB.configurable = !0, "value" in VB && (VB.writable = !0), Object.defineProperty(BB, uB(VB.key), VB)
      }
    }

    function oB(BB, TB, dB) {
      return TB = LB(TB),
        function(BB, TB) {
          if (TB && ("object" === YB(TB) || "function" === typeof TB)) return TB;
          if (void 0 !== TB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, kB() ? Reflect.construct(TB, dB || [], LB(BB).constructor) : TB.apply(BB, dB))
    }

    function kB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (kB = function() {
        return !!BB
      })()
    }

    function LB(BB) {
      return LB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, LB(BB)
    }

    function OB(BB, TB) {
      return OB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, TB) {
        return BB.__proto__ = TB, BB
      }, OB(BB, TB)
    }

    function DB(BB, TB, dB) {
      return (TB = uB(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }

    function uB(BB) {
      var TB = function(BB, TB) {
        if ("object" != YB(BB) || !BB) return BB;
        var dB = BB[Symbol.toPrimitive];
        if (void 0 !== dB) {
          var VB = dB.call(BB, TB || "default");
          if ("object" != YB(VB)) return VB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === TB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == YB(TB) ? TB : TB + ""
    }

    function HB() {
      return HB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var TB = 1; TB < arguments.length; TB++) {
          var dB = arguments[TB];
          for (var VB in dB) Object.prototype.hasOwnProperty.call(dB, VB) && (BB[VB] = dB[VB])
        }
        return BB
      }, HB.apply(this, arguments)
    }
    var EB = function(BB) {
        var TB = BB.yAxisId,
          dB = (0, pB.l)(),
          YB = (0, pB.k)(),
          gB = (0, pB.u)(TB);
        return null == gB ? null : VB.createElement(lB.b, HB({}, gB, {
          className: (0, yB.e)("recharts-".concat(gB.axisType, " ").concat(gB.axisType), gB.className),
          viewBox: {
            x: 0,
            y: 0,
            width: dB,
            height: YB
          },
          ticksGenerator: function(BB) {
            return (0, JB.Y)(BB, !0)
          }
        }))
      },
      vB = function(BB) {
        function TB() {
          return function(BB, TB) {
            if (!(BB instanceof TB)) throw new TypeError("Cannot call a class as a function")
          }(this, TB), oB(this, TB, arguments)
        }
        return function(BB, TB) {
          if ("function" !== typeof TB && null !== TB) throw new TypeError("Super expression must either be null or a function");
          BB.prototype = Object.create(TB && TB.prototype, {
            constructor: {
              value: BB,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(BB, "prototype", {
            writable: !1
          }), TB && OB(BB, TB)
        }(TB, BB), dB = TB, (yB = [{
          key: "render",
          value: function() {
            return VB.createElement(EB, this.props)
          }
        }]) && gB(dB.prototype, yB), pB && gB(dB, pB), Object.defineProperty(dB, "prototype", {
          writable: !1
        }), dB;
        var dB, yB, pB
      }(VB.Component);
    DB(vB, "displayName", "YAxis"), DB(vB, "defaultProps", {
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
  5754: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => uB
    });
    var VB = dB(4660),
      yB = dB.n(VB),
      pB = dB(4572),
      lB = dB(5512),
      JB = dB(5372),
      YB = dB(5612);

    function gB(BB, TB, dB) {
      if (TB < 1) return [];
      if (1 === TB && void 0 === dB) return BB;
      for (var VB = [], yB = 0; yB < BB.length; yB += TB) {
        if (void 0 !== dB && !0 !== dB(BB[yB])) return;
        VB.push(BB[yB])
      }
      return VB
    }

    function oB(BB, TB, dB, VB, yB) {
      if (BB * TB < BB * VB || BB * TB > BB * yB) return !1;
      var pB = dB();
      return BB * (TB - BB * pB / 2 - VB) >= 0 && BB * (TB + BB * pB / 2 - yB) <= 0
    }

    function kB(BB) {
      return kB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, kB(BB)
    }

    function LB(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function OB(BB) {
      for (var TB = 1; TB < arguments.length; TB++) {
        var dB = null != arguments[TB] ? arguments[TB] : {};
        TB % 2 ? LB(Object(dB), !0).forEach((function(TB) {
          DB(BB, TB, dB[TB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : LB(Object(dB)).forEach((function(TB) {
          Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
        }))
      }
      return BB
    }

    function DB(BB, TB, dB) {
      return (TB = function(BB) {
        var TB = function(BB, TB) {
          if ("object" != kB(BB) || !BB) return BB;
          var dB = BB[Symbol.toPrimitive];
          if (void 0 !== dB) {
            var VB = dB.call(BB, TB || "default");
            if ("object" != kB(VB)) return VB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === TB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == kB(TB) ? TB : TB + ""
      }(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }

    function uB(BB, TB, dB) {
      var VB = BB.dL,
        kB = BB.ticks,
        LB = BB.viewBox,
        DB = BB.minTickGap,
        uB = BB.orientation,
        HB = BB.interval,
        EB = BB.tickFormatter,
        vB = BB.unit,
        mB = BB.angle;
      if (!kB || !kB.length || !VB) return [];
      if ((0, pB.y)(HB) || JB.d.isSsr) return function(BB, TB) {
        return gB(BB, TB + 1)
      }(kB, "number" === typeof HB && (0, pB.y)(HB) ? HB : 0);
      var iB = [],
        NB = "top" === uB || "bottom" === uB ? "width" : "height",
        tB = vB && "width" === NB ? (0, lB.g)(vB, {
          fontSize: TB,
          letterSpacing: dB
        }) : {
          width: 0,
          height: 0
        },
        fB = function(BB, VB) {
          var pB = yB()(EB) ? EB(BB.value, VB) : BB.value;
          return "width" === NB ? function(BB, TB, dB) {
            var VB = {
              width: BB.width + TB.width,
              height: BB.height + TB.height
            };
            return (0, YB.e)(VB, dB)
          }((0, lB.g)(pB, {
            fontSize: TB,
            letterSpacing: dB
          }), tB, mB) : (0, lB.g)(pB, {
            fontSize: TB,
            letterSpacing: dB
          })[NB]
        },
        sB = kB.length >= 2 ? (0, pB.C)(kB[1].coordinate - kB[0].coordinate) : 1,
        MB = function(BB, TB, dB) {
          var VB = "width" === dB,
            yB = BB.x,
            pB = BB.y,
            lB = BB.width,
            JB = BB.height;
          return 1 === TB ? {
            start: VB ? yB : pB,
            end: VB ? yB + lB : pB + JB
          } : {
            start: VB ? yB + lB : pB + JB,
            end: VB ? yB : pB
          }
        }(LB, sB, NB);
      return "equidistantPreserveStart" === HB ? function(BB, TB, dB, VB, yB) {
        for (var pB, lB = (VB || []).slice(), JB = TB.start, YB = TB.end, kB = 0, LB = 1, OB = JB, DB = function() {
            var TB = null === VB || void 0 === VB ? void 0 : VB[kB];
            if (void 0 === TB) return {
              v: gB(VB, LB)
            };
            var pB, lB = kB,
              DB = function() {
                return void 0 === pB && (pB = dB(TB, lB)), pB
              },
              uB = TB.coordinate,
              HB = 0 === kB || oB(BB, uB, DB, OB, YB);
            HB || (kB = 0, OB = JB, LB += 1), HB && (OB = uB + BB * (DB() / 2 + yB), kB += LB)
          }; LB <= lB.length;)
          if (pB = DB()) return pB.v;
        return []
      }(sB, MB, fB, kB, DB) : (iB = "preserveStart" === HB || "preserveStartEnd" === HB ? function(BB, TB, dB, VB, yB, pB) {
        var lB = (VB || []).slice(),
          JB = lB.length,
          YB = TB.start,
          gB = TB.end;
        if (pB) {
          var kB = VB[JB - 1],
            LB = dB(kB, JB - 1),
            DB = BB * (kB.coordinate + BB * LB / 2 - gB);
          lB[JB - 1] = kB = OB(OB({}, kB), {}, {
            tickCoord: DB > 0 ? kB.coordinate - DB * BB : kB.coordinate
          }), oB(BB, kB.tickCoord, (function() {
            return LB
          }), YB, gB) && (gB = kB.tickCoord - BB * (LB / 2 + yB), lB[JB - 1] = OB(OB({}, kB), {}, {
            isShow: !0
          }))
        }
        for (var uB = pB ? JB - 1 : JB, HB = function(TB) {
            var VB, pB = lB[TB],
              JB = function() {
                return void 0 === VB && (VB = dB(pB, TB)), VB
              };
            if (0 === TB) {
              var kB = BB * (pB.coordinate - BB * JB() / 2 - YB);
              lB[TB] = pB = OB(OB({}, pB), {}, {
                tickCoord: kB < 0 ? pB.coordinate - kB * BB : pB.coordinate
              })
            } else lB[TB] = pB = OB(OB({}, pB), {}, {
              tickCoord: pB.coordinate
            });
            oB(BB, pB.tickCoord, JB, YB, gB) && (YB = pB.tickCoord + BB * (JB() / 2 + yB), lB[TB] = OB(OB({}, pB), {}, {
              isShow: !0
            }))
          }, EB = 0; EB < uB; EB++) HB(EB);
        return lB
      }(sB, MB, fB, kB, DB, "preserveStartEnd" === HB) : function(BB, TB, dB, VB, yB) {
        for (var pB = (VB || []).slice(), lB = pB.length, JB = TB.start, YB = TB.end, gB = function(TB) {
            var VB, gB = pB[TB],
              kB = function() {
                return void 0 === VB && (VB = dB(gB, TB)), VB
              };
            if (TB === lB - 1) {
              var LB = BB * (gB.coordinate + BB * kB() / 2 - YB);
              pB[TB] = gB = OB(OB({}, gB), {}, {
                tickCoord: LB > 0 ? gB.coordinate - LB * BB : gB.coordinate
              })
            } else pB[TB] = gB = OB(OB({}, gB), {}, {
              tickCoord: gB.coordinate
            });
            oB(BB, gB.tickCoord, kB, JB, YB) && (YB = gB.tickCoord - BB * (kB() / 2 + yB), pB[TB] = OB(OB({}, gB), {}, {
              isShow: !0
            }))
          }, kB = lB - 1; kB >= 0; kB--) gB(kB);
        return pB
      }(sB, MB, fB, kB, DB), iB.filter((function(BB) {
        return BB.isShow
      })))
    }
  },
  5773: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => YB
    });
    var VB = dB(4847),
      yB = dB(5650),
      pB = dB(5739),
      lB = dB(5757),
      JB = dB(5612),
      YB = (0, VB.b)({
        chartName: "BarChart",
        GraphicalChild: yB.b,
        defaultTooltipEventType: "axis",
        validateTooltipEventTypes: ["axis", "item"],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: pB.e
        }, {
          axisType: "yAxis",
          AxisComp: lB.b
        }],
        formatAxisMap: JB.c
      })
  },
  4845: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => yT
    });
    var VB = dB(4847),
      yB = dB(5732),
      pB = dB(5650),
      lB = dB(5737),
      JB = dB(62),
      YB = dB(5495),
      gB = dB(4809),
      oB = dB.n(gB),
      kB = dB(5569),
      LB = dB.n(kB),
      OB = dB(4660),
      DB = dB.n(OB),
      uB = dB(4486),
      HB = dB(5361),
      EB = dB(5660),
      vB = dB(4819),
      mB = dB(5372);

    function iB(BB) {
      return iB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, iB(BB)
    }

    function NB(BB, TB) {
      for (var dB = 0; dB < TB.length; dB++) {
        var VB = TB[dB];
        VB.enumerable = VB.enumerable || !1, VB.configurable = !0, "value" in VB && (VB.writable = !0), Object.defineProperty(BB, wB(VB.key), VB)
      }
    }

    function tB(BB, TB, dB) {
      return TB = sB(TB),
        function(BB, TB) {
          if (TB && ("object" === iB(TB) || "function" === typeof TB)) return TB;
          if (void 0 !== TB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, fB() ? Reflect.construct(TB, dB || [], sB(BB).constructor) : TB.apply(BB, dB))
    }

    function fB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (fB = function() {
        return !!BB
      })()
    }

    function sB(BB) {
      return sB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, sB(BB)
    }

    function MB(BB, TB) {
      return MB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, TB) {
        return BB.__proto__ = TB, BB
      }, MB(BB, TB)
    }

    function zB(BB, TB, dB) {
      return (TB = wB(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }

    function wB(BB) {
      var TB = function(BB, TB) {
        if ("object" != iB(BB) || !BB) return BB;
        var dB = BB[Symbol.toPrimitive];
        if (void 0 !== dB) {
          var VB = dB.call(BB, TB || "default");
          if ("object" != iB(VB)) return VB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === TB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == iB(TB) ? TB : TB + ""
    }
    var UB = function(BB) {
      function TB() {
        return function(BB, TB) {
          if (!(BB instanceof TB)) throw new TypeError("Cannot call a class as a function")
        }(this, TB), tB(this, TB, arguments)
      }
      return function(BB, TB) {
        if ("function" !== typeof TB && null !== TB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(TB && TB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), TB && MB(BB, TB)
      }(TB, BB), dB = TB, (VB = [{
        key: "render",
        value: function() {
          return null
        }
      }]) && NB(dB.prototype, VB), yB && NB(dB, yB), Object.defineProperty(dB, "prototype", {
        writable: !1
      }), dB;
      var dB, VB, yB
    }(JB.Component);
    zB(UB, "displayName", "ZAxis"), zB(UB, "defaultProps", {
      zAxisId: 0,
      range: [64, 64],
      scale: "auto",
      type: "number"
    });
    var FB = dB(5730),
      KB = dB(5576),
      rB = dB(5656),
      IB = dB(4572),
      cB = dB(5518),
      SB = dB(4842),
      PB = dB(5426),
      QB = dB(5668),
      RB = ["option", "isActive"];

    function aB() {
      return aB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var TB = 1; TB < arguments.length; TB++) {
          var dB = arguments[TB];
          for (var VB in dB) Object.prototype.hasOwnProperty.call(dB, VB) && (BB[VB] = dB[VB])
        }
        return BB
      }, aB.apply(this, arguments)
    }

    function ZB(BB, TB) {
      if (null == BB) return {};
      var dB, VB, yB = function(BB, TB) {
        if (null == BB) return {};
        var dB = {};
        for (var VB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, VB)) {
            if (TB.indexOf(VB) >= 0) continue;
            dB[VB] = BB[VB]
          } return dB
      }(BB, TB);
      if (Object.getOwnPropertySymbols) {
        var pB = Object.getOwnPropertySymbols(BB);
        for (VB = 0; VB < pB.length; VB++) dB = pB[VB], TB.indexOf(dB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, dB) && (yB[dB] = BB[dB])
      }
      return yB
    }

    function XB(BB) {
      var TB = BB.option,
        dB = BB.isActive,
        VB = ZB(BB, RB);
      return "string" === typeof TB ? JB.createElement(QB.d, aB({
        option: JB.createElement(PB.e, aB({
          type: TB
        }, VB)),
        isActive: dB,
        shapeType: "symbols"
      }, VB)) : JB.createElement(QB.d, aB({
        option: TB,
        isActive: dB,
        shapeType: "symbols"
      }, VB))
    }

    function WB(BB) {
      return WB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, WB(BB)
    }

    function hB() {
      return hB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var TB = 1; TB < arguments.length; TB++) {
          var dB = arguments[TB];
          for (var VB in dB) Object.prototype.hasOwnProperty.call(dB, VB) && (BB[VB] = dB[VB])
        }
        return BB
      }, hB.apply(this, arguments)
    }

    function CB(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function GB(BB) {
      for (var TB = 1; TB < arguments.length; TB++) {
        var dB = null != arguments[TB] ? arguments[TB] : {};
        TB % 2 ? CB(Object(dB), !0).forEach((function(TB) {
          nB(BB, TB, dB[TB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : CB(Object(dB)).forEach((function(TB) {
          Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
        }))
      }
      return BB
    }

    function qB(BB, TB) {
      for (var dB = 0; dB < TB.length; dB++) {
        var VB = TB[dB];
        VB.enumerable = VB.enumerable || !1, VB.configurable = !0, "value" in VB && (VB.writable = !0), Object.defineProperty(BB, eB(VB.key), VB)
      }
    }

    function xB(BB, TB, dB) {
      return TB = AB(TB),
        function(BB, TB) {
          if (TB && ("object" === WB(TB) || "function" === typeof TB)) return TB;
          if (void 0 !== TB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, jB() ? Reflect.construct(TB, dB || [], AB(BB).constructor) : TB.apply(BB, dB))
    }

    function jB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (jB = function() {
        return !!BB
      })()
    }

    function AB(BB) {
      return AB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, AB(BB)
    }

    function bB(BB, TB) {
      return bB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, TB) {
        return BB.__proto__ = TB, BB
      }, bB(BB, TB)
    }

    function nB(BB, TB, dB) {
      return (TB = eB(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }

    function eB(BB) {
      var TB = function(BB, TB) {
        if ("object" != WB(BB) || !BB) return BB;
        var dB = BB[Symbol.toPrimitive];
        if (void 0 !== dB) {
          var VB = dB.call(BB, TB || "default");
          if ("object" != WB(VB)) return VB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === TB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == WB(TB) ? TB : TB + ""
    }
    var BT = function(BB) {
      function TB() {
        var BB;
        ! function(BB, TB) {
          if (!(BB instanceof TB)) throw new TypeError("Cannot call a class as a function")
        }(this, TB);
        for (var dB = arguments.length, VB = new Array(dB), yB = 0; yB < dB; yB++) VB[yB] = arguments[yB];
        return nB(BB = xB(this, TB, [].concat(VB)), "state", {
          isAnimationFinished: !1
        }), nB(BB, "handleAnimationEnd", (function() {
          BB.setState({
            isAnimationFinished: !0
          })
        })), nB(BB, "handleAnimationStart", (function() {
          BB.setState({
            isAnimationFinished: !1
          })
        })), nB(BB, "id", (0, IB.G)("recharts-scatter-")), BB
      }
      return function(BB, TB) {
        if ("function" !== typeof TB && null !== TB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(TB && TB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), TB && bB(BB, TB)
      }(TB, BB), dB = TB, VB = [{
        key: "renderSymbolsStatically",
        value: function(BB) {
          var TB = this,
            dB = this.props,
            VB = dB.shape,
            yB = dB.activeShape,
            pB = dB.activeIndex,
            lB = (0, vB.d)(this.props, !1);
          return BB.map((function(BB, dB) {
            var YB = pB === dB,
              gB = YB ? yB : VB,
              oB = GB(GB({}, lB), BB);
            return JB.createElement(HB.c, hB({
              className: "recharts-scatter-symbol",
              key: "symbol-".concat(null === BB || void 0 === BB ? void 0 : BB.cx, "-").concat(null === BB || void 0 === BB ? void 0 : BB.cy, "-").concat(null === BB || void 0 === BB ? void 0 : BB.size, "-").concat(dB)
            }, (0, SB.o)(TB.props, BB, dB), {
              role: "img"
            }), JB.createElement(XB, hB({
              option: gB,
              isActive: YB,
              key: "symbol-".concat(dB)
            }, oB)))
          }))
        }
      }, {
        key: "renderSymbolsWithAnimation",
        value: function() {
          var BB = this,
            TB = this.props,
            dB = TB.points,
            VB = TB.isAnimationActive,
            yB = TB.animationBegin,
            pB = TB.animationDuration,
            lB = TB.animationEasing,
            gB = TB.animationId,
            oB = this.state.prevPoints;
          return JB.createElement(YB.e, {
            tO: yB,
            duration: pB,
            isActive: VB,
            easing: lB,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "pie-".concat(gB),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(TB) {
            var VB = TB.t,
              yB = dB.map((function(BB, TB) {
                var dB = oB && oB[TB];
                if (dB) {
                  var yB = (0, IB.r)(dB.cx, BB.cx),
                    pB = (0, IB.r)(dB.cy, BB.cy),
                    lB = (0, IB.r)(dB.size, BB.size);
                  return GB(GB({}, BB), {}, {
                    cx: yB(VB),
                    cy: pB(VB),
                    size: lB(VB)
                  })
                }
                var JB = (0, IB.r)(0, BB.size);
                return GB(GB({}, BB), {}, {
                  size: JB(VB)
                })
              }));
            return JB.createElement(HB.c, null, BB.renderSymbolsStatically(yB))
          }))
        }
      }, {
        key: "renderSymbols",
        value: function() {
          var BB = this.props,
            TB = BB.points,
            dB = BB.isAnimationActive,
            VB = this.state.prevPoints;
          return !(dB && TB && TB.length) || VB && LB()(VB, TB) ? this.renderSymbolsStatically(TB) : this.renderSymbolsWithAnimation()
        }
      }, {
        key: "renderErrorBar",
        value: function() {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var BB = this.props,
            TB = BB.points,
            dB = BB.xAxis,
            VB = BB.yAxis,
            yB = BB.children,
            pB = (0, vB.h)(yB, KB.c);
          return pB ? pB.map((function(BB, yB) {
            var pB = BB.props,
              lB = pB.direction,
              YB = pB.dataKey;
            return JB.cloneElement(BB, {
              key: "".concat(lB, "-").concat(YB, "-").concat(TB[yB]),
              data: TB,
              xAxis: dB,
              yAxis: VB,
              layout: "x" === lB ? "vertical" : "horizontal",
              dataPointFormatter: function(BB, TB) {
                return {
                  x: BB.cx,
                  y: BB.cy,
                  value: "x" === lB ? +BB.node.x : +BB.node.y,
                  errorVal: (0, cB.eb)(BB, TB)
                }
              }
            })
          })) : null
        }
      }, {
        key: "renderLine",
        value: function() {
          var BB, TB, dB = this.props,
            VB = dB.points,
            yB = dB.line,
            pB = dB.lineType,
            lB = dB.lineJointType,
            YB = (0, vB.d)(this.props, !1),
            gB = (0, vB.d)(yB, !1);
          if ("joint" === pB) BB = VB.map((function(BB) {
            return {
              x: BB.cx,
              y: BB.cy
            }
          }));
          else if ("fitting" === pB) {
            var oB = (0, IB.m)(VB),
              kB = oB.xmin,
              LB = oB.xmax,
              OB = oB.a,
              uB = oB.b,
              EB = function(BB) {
                return OB * BB + uB
              };
            BB = [{
              x: kB,
              y: EB(kB)
            }, {
              x: LB,
              y: EB(LB)
            }]
          }
          var mB = GB(GB(GB({}, YB), {}, {
            fill: "none",
            stroke: YB && YB.fill
          }, gB), {}, {
            points: BB
          });
          return TB = JB.isValidElement(yB) ? JB.cloneElement(yB, mB) : DB()(yB) ? yB(mB) : JB.createElement(FB.b, hB({}, mB, {
            type: lB
          })), JB.createElement(HB.c, {
            className: "recharts-scatter-line",
            key: "recharts-scatter-line"
          }, TB)
        }
      }, {
        key: "render",
        value: function() {
          var BB = this.props,
            TB = BB.hide,
            dB = BB.points,
            VB = BB.line,
            yB = BB.className,
            pB = BB.xAxis,
            lB = BB.yAxis,
            YB = BB.left,
            gB = BB.top,
            kB = BB.width,
            LB = BB.height,
            OB = BB.id,
            DB = BB.isAnimationActive;
          if (TB || !dB || !dB.length) return null;
          var vB = this.state.isAnimationFinished,
            mB = (0, uB.e)("recharts-scatter", yB),
            iB = pB && pB.allowDataOverflow,
            NB = lB && lB.allowDataOverflow,
            tB = iB || NB,
            fB = oB()(OB) ? this.id : OB;
          return JB.createElement(HB.c, {
            className: mB,
            clipPath: tB ? "url(#clipPath-".concat(fB, ")") : null
          }, iB || NB ? JB.createElement("defs", null, JB.createElement("clipPath", {
            id: "clipPath-".concat(fB)
          }, JB.createElement("rect", {
            x: iB ? YB : YB - kB / 2,
            y: NB ? gB : gB - LB / 2,
            width: iB ? kB : 2 * kB,
            height: NB ? LB : 2 * LB
          }))) : null, VB && this.renderLine(), this.renderErrorBar(), JB.createElement(HB.c, {
            key: "recharts-scatter-symbols"
          }, this.renderSymbols()), (!DB || vB) && EB.d.renderCallByParent(this.props, dB))
        }
      }], yB = [{
        key: "getDerivedStateFromProps",
        value: function(BB, TB) {
          return BB.animationId !== TB.prevAnimationId ? {
            prevAnimationId: BB.animationId,
            curPoints: BB.points,
            prevPoints: TB.curPoints
          } : BB.points !== TB.curPoints ? {
            curPoints: BB.points
          } : null
        }
      }], VB && qB(dB.prototype, VB), yB && qB(dB, yB), Object.defineProperty(dB, "prototype", {
        writable: !1
      }), dB;
      var dB, VB, yB
    }(JB.PureComponent);
    nB(BT, "displayName", "Scatter"), nB(BT, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      zAxisId: 0,
      legendType: "circle",
      lineType: "joint",
      lineJointType: "linear",
      data: [],
      shape: "circle",
      hide: !1,
      isAnimationActive: !mB.d.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "linear"
    }), nB(BT, "getComposedData", (function(BB) {
      var TB = BB.xAxis,
        dB = BB.yAxis,
        VB = BB.zAxis,
        yB = BB.item,
        pB = BB.displayedData,
        lB = BB.xAxisTicks,
        JB = BB.yAxisTicks,
        YB = BB.offset,
        gB = yB.props.tooltipType,
        kB = (0, vB.h)(yB.props.children, rB.c),
        LB = oB()(TB.dataKey) ? yB.props.dataKey : TB.dataKey,
        OB = oB()(dB.dataKey) ? yB.props.dataKey : dB.dataKey,
        DB = VB && VB.dataKey,
        uB = VB ? VB.range : UB.defaultProps.range,
        HB = uB && uB[0],
        EB = TB.scale.bandwidth ? TB.scale.bandwidth() : 0,
        mB = dB.scale.bandwidth ? dB.scale.bandwidth() : 0,
        iB = pB.map((function(BB, pB) {
          var YB = (0, cB.eb)(BB, LB),
            uB = (0, cB.eb)(BB, OB),
            vB = !oB()(DB) && (0, cB.eb)(BB, DB) || "-",
            iB = [{
              name: oB()(TB.dataKey) ? yB.props.name : TB.name || TB.dataKey,
              unit: TB.unit || "",
              value: YB,
              payload: BB,
              dataKey: LB,
              type: gB
            }, {
              name: oB()(dB.dataKey) ? yB.props.name : dB.name || dB.dataKey,
              unit: dB.unit || "",
              value: uB,
              payload: BB,
              dataKey: OB,
              type: gB
            }];
          "-" !== vB && iB.push({
            name: VB.name || VB.dataKey,
            unit: VB.unit || "",
            value: vB,
            payload: BB,
            dataKey: DB,
            type: gB
          });
          var NB = (0, cB.C)({
              axis: TB,
              ticks: lB,
              bandSize: EB,
              entry: BB,
              index: pB,
              dataKey: LB
            }),
            tB = (0, cB.C)({
              axis: dB,
              ticks: JB,
              bandSize: mB,
              entry: BB,
              index: pB,
              dataKey: OB
            }),
            fB = "-" !== vB ? VB.scale(vB) : HB,
            sB = Math.sqrt(Math.max(fB, 0) / Math.PI);
          return GB(GB({}, BB), {}, {
            cx: NB,
            cy: tB,
            x: NB - sB,
            y: tB - sB,
            xAxis: TB,
            yAxis: dB,
            zAxis: VB,
            width: 2 * sB,
            height: 2 * sB,
            size: fB,
            node: {
              x: YB,
              y: uB,
              z: vB
            },
            tooltipPayload: iB,
            tooltipPosition: {
              x: NB,
              y: tB
            },
            payload: BB
          }, kB && kB[pB] && kB[pB].props)
        }));
      return GB({
        points: iB
      }, YB)
    }));
    var TT = dB(5739),
      dT = dB(5757),
      VT = dB(5612),
      yT = (0, VB.b)({
        chartName: "ComposedChart",
        GraphicalChild: [lB.c, yB.c, pB.b, BT],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: TT.e
        }, {
          axisType: "yAxis",
          AxisComp: dT.b
        }, {
          axisType: "zAxis",
          AxisComp: UB
        }],
        formatAxisMap: VT.c
      })
  },
  4847: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => Zd
    });
    var VB = dB(62),
      yB = dB(4809),
      pB = dB.n(yB),
      lB = dB(4660),
      JB = dB.n(lB),
      YB = dB(4851),
      gB = dB.n(YB),
      oB = dB(4599),
      kB = dB.n(oB),
      LB = dB(4897),
      OB = dB.n(LB),
      DB = dB(4492),
      uB = dB.n(DB),
      HB = dB(4486),
      EB = dB(5353),
      vB = dB(5357),
      mB = dB(5361),
      iB = dB(5365),
      NB = dB(5420),
      tB = dB(5487),
      fB = dB(5489),
      sB = dB(4819),
      MB = dB(5521),
      zB = dB(5504),
      wB = dB(5518),
      UB = dB(4572);

    function FB(BB) {
      return FB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, FB(BB)
    }

    function KB(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function rB(BB) {
      for (var TB = 1; TB < arguments.length; TB++) {
        var dB = null != arguments[TB] ? arguments[TB] : {};
        TB % 2 ? KB(Object(dB), !0).forEach((function(TB) {
          IB(BB, TB, dB[TB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : KB(Object(dB)).forEach((function(TB) {
          Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
        }))
      }
      return BB
    }

    function IB(BB, TB, dB) {
      return (TB = function(BB) {
        var TB = function(BB, TB) {
          if ("object" != FB(BB) || !BB) return BB;
          var dB = BB[Symbol.toPrimitive];
          if (void 0 !== dB) {
            var VB = dB.call(BB, TB || "default");
            if ("object" != FB(VB)) return VB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === TB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == FB(TB) ? TB : TB + ""
      }(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }
    var cB = ["Webkit", "Moz", "O", "ms"];

    function SB(BB) {
      return SB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, SB(BB)
    }

    function PB() {
      return PB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var TB = 1; TB < arguments.length; TB++) {
          var dB = arguments[TB];
          for (var VB in dB) Object.prototype.hasOwnProperty.call(dB, VB) && (BB[VB] = dB[VB])
        }
        return BB
      }, PB.apply(this, arguments)
    }

    function QB(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function RB(BB) {
      for (var TB = 1; TB < arguments.length; TB++) {
        var dB = null != arguments[TB] ? arguments[TB] : {};
        TB % 2 ? QB(Object(dB), !0).forEach((function(TB) {
          CB(BB, TB, dB[TB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : QB(Object(dB)).forEach((function(TB) {
          Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
        }))
      }
      return BB
    }

    function aB(BB, TB) {
      for (var dB = 0; dB < TB.length; dB++) {
        var VB = TB[dB];
        VB.enumerable = VB.enumerable || !1, VB.configurable = !0, "value" in VB && (VB.writable = !0), Object.defineProperty(BB, GB(VB.key), VB)
      }
    }

    function ZB(BB, TB, dB) {
      return TB = WB(TB),
        function(BB, TB) {
          if (TB && ("object" === SB(TB) || "function" === typeof TB)) return TB;
          if (void 0 !== TB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, XB() ? Reflect.construct(TB, dB || [], WB(BB).constructor) : TB.apply(BB, dB))
    }

    function XB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (XB = function() {
        return !!BB
      })()
    }

    function WB(BB) {
      return WB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, WB(BB)
    }

    function hB(BB, TB) {
      return hB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, TB) {
        return BB.__proto__ = TB, BB
      }, hB(BB, TB)
    }

    function CB(BB, TB, dB) {
      return (TB = GB(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }

    function GB(BB) {
      var TB = function(BB, TB) {
        if ("object" != SB(BB) || !BB) return BB;
        var dB = BB[Symbol.toPrimitive];
        if (void 0 !== dB) {
          var VB = dB.call(BB, TB || "default");
          if ("object" != SB(VB)) return VB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === TB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == SB(TB) ? TB : TB + ""
    }
    var qB = function(BB) {
        return BB.changedTouches && !!BB.changedTouches.length
      },
      xB = function(BB) {
        function TB(BB) {
          var dB;
          return function(BB, TB) {
            if (!(BB instanceof TB)) throw new TypeError("Cannot call a class as a function")
          }(this, TB), CB(dB = ZB(this, TB, [BB]), "handleDrag", (function(BB) {
            dB.leaveTimer && (clearTimeout(dB.leaveTimer), dB.leaveTimer = null), dB.state.isTravellerMoving ? dB.handleTravellerMove(BB) : dB.state.isSlideMoving && dB.handleSlideDrag(BB)
          })), CB(dB, "handleTouchMove", (function(BB) {
            null != BB.changedTouches && BB.changedTouches.length > 0 && dB.handleDrag(BB.changedTouches[0])
          })), CB(dB, "handleDragEnd", (function() {
            dB.setState({
              isTravellerMoving: !1,
              isSlideMoving: !1
            }, (function() {
              var BB = dB.props,
                TB = BB.endIndex,
                VB = BB.onDragEnd,
                yB = BB.startIndex;
              null === VB || void 0 === VB || VB({
                endIndex: TB,
                startIndex: yB
              })
            })), dB.detachDragEndListener()
          })), CB(dB, "handleLeaveWrapper", (function() {
            (dB.state.isTravellerMoving || dB.state.isSlideMoving) && (dB.leaveTimer = window.setTimeout(dB.handleDragEnd, dB.props.leaveTimeOut))
          })), CB(dB, "handleEnterSlideOrTraveller", (function() {
            dB.setState({
              isTextActive: !0
            })
          })), CB(dB, "handleLeaveSlideOrTraveller", (function() {
            dB.setState({
              isTextActive: !1
            })
          })), CB(dB, "handleSlideDragStart", (function(BB) {
            var TB = qB(BB) ? BB.changedTouches[0] : BB;
            dB.setState({
              isTravellerMoving: !1,
              isSlideMoving: !0,
              slideMoveStartX: TB.pageX
            }), dB.attachDragEndListener()
          })), dB.travellerDragStartHandlers = {
            startX: dB.handleTravellerDragStart.bind(dB, "startX"),
            endX: dB.handleTravellerDragStart.bind(dB, "endX")
          }, dB.state = {}, dB
        }
        return function(BB, TB) {
          if ("function" !== typeof TB && null !== TB) throw new TypeError("Super expression must either be null or a function");
          BB.prototype = Object.create(TB && TB.prototype, {
            constructor: {
              value: BB,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(BB, "prototype", {
            writable: !1
          }), TB && hB(BB, TB)
        }(TB, BB), dB = TB, yB = [{
          key: "componentWillUnmount",
          value: function() {
            this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener()
          }
        }, {
          key: "getIndex",
          value: function(BB) {
            var dB = BB.startX,
              VB = BB.endX,
              yB = this.state.scaleValues,
              pB = this.props,
              lB = pB.gap,
              JB = pB.data.length - 1,
              YB = Math.min(dB, VB),
              gB = Math.max(dB, VB),
              oB = TB.getIndexInRange(yB, YB),
              kB = TB.getIndexInRange(yB, gB);
            return {
              startIndex: oB - oB % lB,
              endIndex: kB === JB ? JB : kB - kB % lB
            }
          }
        }, {
          key: "getTextOfTick",
          value: function(BB) {
            var TB = this.props,
              dB = TB.data,
              VB = TB.tickFormatter,
              yB = TB.dataKey,
              pB = (0, wB.eb)(dB[BB], yB, BB);
            return JB()(VB) ? VB(pB, BB) : pB
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
          value: function(BB) {
            var TB = this.state,
              dB = TB.slideMoveStartX,
              VB = TB.startX,
              yB = TB.endX,
              pB = this.props,
              lB = pB.x,
              JB = pB.width,
              YB = pB.travellerWidth,
              gB = pB.startIndex,
              oB = pB.endIndex,
              kB = pB.onChange,
              LB = BB.pageX - dB;
            LB > 0 ? LB = Math.min(LB, lB + JB - YB - yB, lB + JB - YB - VB) : LB < 0 && (LB = Math.max(LB, lB - VB, lB - yB));
            var OB = this.getIndex({
              startX: VB + LB,
              endX: yB + LB
            });
            OB.startIndex === gB && OB.endIndex === oB || !kB || kB(OB), this.setState({
              startX: VB + LB,
              endX: yB + LB,
              slideMoveStartX: BB.pageX
            })
          }
        }, {
          key: "handleTravellerDragStart",
          value: function(BB, TB) {
            var dB = qB(TB) ? TB.changedTouches[0] : TB;
            this.setState({
              isSlideMoving: !1,
              isTravellerMoving: !0,
              movingTravellerId: BB,
              brushMoveStartX: dB.pageX
            }), this.attachDragEndListener()
          }
        }, {
          key: "handleTravellerMove",
          value: function(BB) {
            var TB = this.state,
              dB = TB.brushMoveStartX,
              VB = TB.movingTravellerId,
              yB = TB.endX,
              pB = TB.startX,
              lB = this.state[VB],
              JB = this.props,
              YB = JB.x,
              gB = JB.width,
              oB = JB.travellerWidth,
              kB = JB.onChange,
              LB = JB.gap,
              OB = JB.data,
              DB = {
                startX: this.state.startX,
                endX: this.state.endX
              },
              uB = BB.pageX - dB;
            uB > 0 ? uB = Math.min(uB, YB + gB - oB - lB) : uB < 0 && (uB = Math.max(uB, YB - lB)), DB[VB] = lB + uB;
            var HB = this.getIndex(DB),
              EB = HB.startIndex,
              vB = HB.endIndex;
            this.setState(CB(CB({}, VB, lB + uB), "brushMoveStartX", BB.pageX), (function() {
              kB && function() {
                var BB = OB.length - 1;
                return "startX" === VB && (yB > pB ? EB % LB === 0 : vB % LB === 0) || yB < pB && vB === BB || "endX" === VB && (yB > pB ? vB % LB === 0 : EB % LB === 0) || yB > pB && vB === BB
              }() && kB(HB)
            }))
          }
        }, {
          key: "handleTravellerMoveKeyboard",
          value: function(BB, TB) {
            var dB = this,
              VB = this.state,
              yB = VB.scaleValues,
              pB = VB.startX,
              lB = VB.endX,
              JB = this.state[TB],
              YB = yB.indexOf(JB);
            if (-1 !== YB) {
              var gB = YB + BB;
              if (!(-1 === gB || gB >= yB.length)) {
                var oB = yB[gB];
                "startX" === TB && oB >= lB || "endX" === TB && oB <= pB || this.setState(CB({}, TB, oB), (function() {
                  dB.props.onChange(dB.getIndex({
                    startX: dB.state.startX,
                    endX: dB.state.endX
                  }))
                }))
              }
            }
          }
        }, {
          key: "renderBackground",
          value: function() {
            var BB = this.props,
              TB = BB.x,
              dB = BB.y,
              yB = BB.width,
              pB = BB.height,
              lB = BB.fill,
              JB = BB.stroke;
            return VB.createElement("rect", {
              stroke: JB,
              fill: lB,
              x: TB,
              y: dB,
              width: yB,
              height: pB
            })
          }
        }, {
          key: "renderPanorama",
          value: function() {
            var BB = this.props,
              TB = BB.x,
              dB = BB.y,
              yB = BB.width,
              pB = BB.height,
              lB = BB.data,
              JB = BB.children,
              YB = BB.padding,
              gB = VB.Children.only(JB);
            return gB ? VB.cloneElement(gB, {
              x: TB,
              y: dB,
              width: yB,
              height: pB,
              margin: YB,
              compact: !0,
              data: lB
            }) : null
          }
        }, {
          key: "renderTravellerLayer",
          value: function(BB, dB) {
            var yB, pB, lB = this,
              JB = this.props,
              YB = JB.y,
              gB = JB.travellerWidth,
              oB = JB.height,
              kB = JB.traveller,
              LB = JB.ariaLabel,
              OB = JB.data,
              DB = JB.startIndex,
              uB = JB.endIndex,
              HB = Math.max(BB, this.props.x),
              EB = RB(RB({}, (0, sB.d)(this.props, !1)), {}, {
                x: HB,
                y: YB,
                width: gB,
                height: oB
              }),
              vB = LB || "Min value: ".concat(null === (yB = OB[DB]) || void 0 === yB ? void 0 : yB.name, ", Max value: ").concat(null === (pB = OB[uB]) || void 0 === pB ? void 0 : pB.name);
            return VB.createElement(mB.c, {
              tabIndex: 0,
              role: "slider",
              "aria-label": vB,
              "aria-valuenow": BB,
              className: "recharts-brush-traveller",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.travellerDragStartHandlers[dB],
              onTouchStart: this.travellerDragStartHandlers[dB],
              onKeyDown: function(BB) {
                ["ArrowLeft", "ArrowRight"].includes(BB.key) && (BB.preventDefault(), BB.stopPropagation(), lB.handleTravellerMoveKeyboard("ArrowRight" === BB.key ? 1 : -1, dB))
              },
              onFocus: function() {
                lB.setState({
                  isTravellerFocused: !0
                })
              },
              onBlur: function() {
                lB.setState({
                  isTravellerFocused: !1
                })
              },
              style: {
                cursor: "col-resize"
              }
            }, TB.renderTraveller(kB, EB))
          }
        }, {
          key: "renderSlide",
          value: function(BB, TB) {
            var dB = this.props,
              yB = dB.y,
              pB = dB.height,
              lB = dB.stroke,
              JB = dB.travellerWidth,
              YB = Math.min(BB, TB) + JB,
              gB = Math.max(Math.abs(TB - BB) - JB, 0);
            return VB.createElement("rect", {
              className: "recharts-brush-slide",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.handleSlideDragStart,
              onTouchStart: this.handleSlideDragStart,
              style: {
                cursor: "move"
              },
              stroke: "none",
              fill: lB,
              fillOpacity: .2,
              x: YB,
              y: yB,
              width: gB,
              height: pB
            })
          }
        }, {
          key: "renderText",
          value: function() {
            var BB = this.props,
              TB = BB.startIndex,
              dB = BB.endIndex,
              yB = BB.y,
              pB = BB.height,
              lB = BB.travellerWidth,
              JB = BB.stroke,
              YB = this.state,
              gB = YB.startX,
              oB = YB.endX,
              kB = {
                pointerEvents: "none",
                fill: JB
              };
            return VB.createElement(mB.c, {
              className: "recharts-brush-texts"
            }, VB.createElement(zB.e, PB({
              textAnchor: "end",
              verticalAnchor: "middle",
              x: Math.min(gB, oB) - 5,
              y: yB + pB / 2
            }, kB), this.getTextOfTick(TB)), VB.createElement(zB.e, PB({
              textAnchor: "start",
              verticalAnchor: "middle",
              x: Math.max(gB, oB) + lB + 5,
              y: yB + pB / 2
            }, kB), this.getTextOfTick(dB)))
          }
        }, {
          key: "render",
          value: function() {
            var BB = this.props,
              TB = BB.data,
              dB = BB.className,
              yB = BB.children,
              pB = BB.x,
              lB = BB.y,
              JB = BB.width,
              YB = BB.height,
              gB = BB.alwaysShowText,
              oB = this.state,
              kB = oB.startX,
              LB = oB.endX,
              OB = oB.isTextActive,
              DB = oB.isSlideMoving,
              uB = oB.isTravellerMoving,
              EB = oB.isTravellerFocused;
            if (!TB || !TB.length || !(0, UB.y)(pB) || !(0, UB.y)(lB) || !(0, UB.y)(JB) || !(0, UB.y)(YB) || JB <= 0 || YB <= 0) return null;
            var vB = (0, HB.e)("recharts-brush", dB),
              iB = 1 === VB.Children.count(yB),
              NB = function(BB, TB) {
                if (!BB) return null;
                var dB = BB.replace(/(\w)/, (function(BB) {
                    return BB.toUpperCase()
                  })),
                  VB = cB.reduce((function(BB, VB) {
                    return rB(rB({}, BB), {}, IB({}, VB + dB, TB))
                  }), {});
                return VB[BB] = TB, VB
              }("userSelect", "none");
            return VB.createElement(mB.c, {
              className: vB,
              onMouseLeave: this.handleLeaveWrapper,
              onTouchMove: this.handleTouchMove,
              style: NB
            }, this.renderBackground(), iB && this.renderPanorama(), this.renderSlide(kB, LB), this.renderTravellerLayer(kB, "startX"), this.renderTravellerLayer(LB, "endX"), (OB || DB || uB || EB || gB) && this.renderText())
          }
        }], pB = [{
          key: "renderDefaultTraveller",
          value: function(BB) {
            var TB = BB.x,
              dB = BB.y,
              yB = BB.width,
              pB = BB.height,
              lB = BB.stroke,
              JB = Math.floor(dB + pB / 2) - 1;
            return VB.createElement(VB.Fragment, null, VB.createElement("rect", {
              x: TB,
              y: dB,
              width: yB,
              height: pB,
              fill: lB,
              stroke: "none"
            }), VB.createElement("line", {
              x1: TB + 1,
              y1: JB,
              x2: TB + yB - 1,
              y2: JB,
              fill: "none",
              stroke: "#fff"
            }), VB.createElement("line", {
              x1: TB + 1,
              y1: JB + 2,
              x2: TB + yB - 1,
              y2: JB + 2,
              fill: "none",
              stroke: "#fff"
            }))
          }
        }, {
          key: "renderTraveller",
          value: function(BB, dB) {
            return VB.isValidElement(BB) ? VB.cloneElement(BB, dB) : JB()(BB) ? BB(dB) : TB.renderDefaultTraveller(dB)
          }
        }, {
          key: "getDerivedStateFromProps",
          value: function(BB, TB) {
            var dB = BB.data,
              VB = BB.width,
              yB = BB.x,
              pB = BB.travellerWidth,
              lB = BB.updateId,
              JB = BB.startIndex,
              YB = BB.endIndex;
            if (dB !== TB.prevData || lB !== TB.prevUpdateId) return RB({
              prevData: dB,
              prevTravellerWidth: pB,
              prevUpdateId: lB,
              prevX: yB,
              prevWidth: VB
            }, dB && dB.length ? function(BB) {
              var TB = BB.data,
                dB = BB.startIndex,
                VB = BB.endIndex,
                yB = BB.x,
                pB = BB.width,
                lB = BB.travellerWidth;
              if (!TB || !TB.length) return {};
              var JB = TB.length,
                YB = (0, MB.f)().domain(gB()(0, JB)).range([yB, yB + pB - lB]),
                oB = YB.domain().map((function(BB) {
                  return YB(BB)
                }));
              return {
                isTextActive: !1,
                isSlideMoving: !1,
                isTravellerMoving: !1,
                isTravellerFocused: !1,
                startX: YB(dB),
                endX: YB(VB),
                scale: YB,
                scaleValues: oB
              }
            }({
              data: dB,
              width: VB,
              x: yB,
              travellerWidth: pB,
              startIndex: JB,
              endIndex: YB
            }) : {
              scale: null,
              scaleValues: null
            });
            if (TB.scale && (VB !== TB.prevWidth || yB !== TB.prevX || pB !== TB.prevTravellerWidth)) {
              TB.scale.range([yB, yB + VB - pB]);
              var oB = TB.scale.domain().map((function(BB) {
                return TB.scale(BB)
              }));
              return {
                prevData: dB,
                prevTravellerWidth: pB,
                prevUpdateId: lB,
                prevX: yB,
                prevWidth: VB,
                startX: TB.scale(BB.startIndex),
                endX: TB.scale(BB.endIndex),
                scaleValues: oB
              }
            }
            return null
          }
        }, {
          key: "getIndexInRange",
          value: function(BB, TB) {
            for (var dB = 0, VB = BB.length - 1; VB - dB > 1;) {
              var yB = Math.floor((dB + VB) / 2);
              BB[yB] > TB ? VB = yB : dB = yB
            }
            return TB >= BB[VB] ? VB : dB
          }
        }], yB && aB(dB.prototype, yB), pB && aB(dB, pB), Object.defineProperty(dB, "prototype", {
          writable: !1
        }), dB;
        var dB, yB, pB
      }(VB.PureComponent);
    CB(xB, "displayName", "Brush"), CB(xB, "defaultProps", {
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
    var jB = dB(5512),
      AB = dB(5581),
      bB = dB(5596),
      nB = dB(5606),
      eB = dB(5612),
      BT = dB(4812);

    function TT() {
      return TT = Object.assign ? Object.assign.bind() : function(BB) {
        for (var TB = 1; TB < arguments.length; TB++) {
          var dB = arguments[TB];
          for (var VB in dB) Object.prototype.hasOwnProperty.call(dB, VB) && (BB[VB] = dB[VB])
        }
        return BB
      }, TT.apply(this, arguments)
    }

    function dT(BB) {
      return dT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, dT(BB)
    }

    function VT(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function yT(BB) {
      for (var TB = 1; TB < arguments.length; TB++) {
        var dB = null != arguments[TB] ? arguments[TB] : {};
        TB % 2 ? VT(Object(dB), !0).forEach((function(TB) {
          oT(BB, TB, dB[TB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : VT(Object(dB)).forEach((function(TB) {
          Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
        }))
      }
      return BB
    }

    function pT(BB, TB) {
      for (var dB = 0; dB < TB.length; dB++) {
        var VB = TB[dB];
        VB.enumerable = VB.enumerable || !1, VB.configurable = !0, "value" in VB && (VB.writable = !0), Object.defineProperty(BB, kT(VB.key), VB)
      }
    }

    function lT(BB, TB, dB) {
      return TB = YT(TB),
        function(BB, TB) {
          if (TB && ("object" === dT(TB) || "function" === typeof TB)) return TB;
          if (void 0 !== TB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, JT() ? Reflect.construct(TB, dB || [], YT(BB).constructor) : TB.apply(BB, dB))
    }

    function JT() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (JT = function() {
        return !!BB
      })()
    }

    function YT(BB) {
      return YT = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, YT(BB)
    }

    function gT(BB, TB) {
      return gT = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, TB) {
        return BB.__proto__ = TB, BB
      }, gT(BB, TB)
    }

    function oT(BB, TB, dB) {
      return (TB = kT(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }

    function kT(BB) {
      var TB = function(BB, TB) {
        if ("object" != dT(BB) || !BB) return BB;
        var dB = BB[Symbol.toPrimitive];
        if (void 0 !== dB) {
          var VB = dB.call(BB, TB || "default");
          if ("object" != dT(VB)) return VB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === TB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == dT(TB) ? TB : TB + ""
    }
    var LT = function(BB) {
      function TB() {
        return function(BB, TB) {
          if (!(BB instanceof TB)) throw new TypeError("Cannot call a class as a function")
        }(this, TB), lT(this, TB, arguments)
      }
      return function(BB, TB) {
        if ("function" !== typeof TB && null !== TB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(TB && TB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), TB && gT(BB, TB)
      }(TB, BB), dB = TB, (yB = [{
        key: "render",
        value: function() {
          var BB = this.props,
            dB = BB.x,
            yB = BB.y,
            pB = BB.r,
            lB = BB.alwaysShow,
            JB = BB.clipPathId,
            YB = (0, UB.w)(dB),
            gB = (0, UB.w)(yB);
          if ((0, BT.e)(void 0 === lB, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !YB || !gB) return null;
          var oB = function(BB) {
            var TB = BB.x,
              dB = BB.y,
              VB = BB.xAxis,
              yB = BB.yAxis,
              pB = (0, eB.b)({
                x: VB.scale,
                y: yB.scale
              }),
              lB = pB.apply({
                x: TB,
                y: dB
              }, {
                bandAware: !0
              });
            return (0, nB.e)(BB, "discard") && !pB.isInRange(lB) ? null : lB
          }(this.props);
          if (!oB) return null;
          var kB = oB.x,
            LB = oB.y,
            OB = this.props,
            DB = OB.shape,
            uB = OB.className,
            EB = yT(yT({
              clipPath: (0, nB.e)(this.props, "hidden") ? "url(#".concat(JB, ")") : void 0
            }, (0, sB.d)(this.props, !0)), {}, {
              cx: kB,
              cy: LB
            });
          return VB.createElement(mB.c, {
            className: (0, HB.e)("recharts-reference-dot", uB)
          }, TB.renderDot(DB, EB), bB.c.renderCallByParent(this.props, {
            x: kB - pB,
            y: LB - pB,
            width: 2 * pB,
            height: 2 * pB
          }))
        }
      }]) && pT(dB.prototype, yB), pB && pT(dB, pB), Object.defineProperty(dB, "prototype", {
        writable: !1
      }), dB;
      var dB, yB, pB
    }(VB.Component);
    oT(LT, "displayName", "ReferenceDot"), oT(LT, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#fff",
      stroke: "#ccc",
      fillOpacity: 1,
      strokeWidth: 1
    }), oT(LT, "renderDot", (function(BB, TB) {
      return VB.isValidElement(BB) ? VB.cloneElement(BB, TB) : JB()(BB) ? BB(TB) : VB.createElement(tB.e, TT({}, TB, {
        cx: TB.cx,
        cy: TB.cy,
        className: "recharts-reference-dot-dot"
      }))
    }));
    var OT = dB(5699);

    function DT() {
      return DT = Object.assign ? Object.assign.bind() : function(BB) {
        for (var TB = 1; TB < arguments.length; TB++) {
          var dB = arguments[TB];
          for (var VB in dB) Object.prototype.hasOwnProperty.call(dB, VB) && (BB[VB] = dB[VB])
        }
        return BB
      }, DT.apply(this, arguments)
    }

    function uT(BB) {
      return uT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, uT(BB)
    }

    function HT(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function ET(BB) {
      for (var TB = 1; TB < arguments.length; TB++) {
        var dB = null != arguments[TB] ? arguments[TB] : {};
        TB % 2 ? HT(Object(dB), !0).forEach((function(TB) {
          fT(BB, TB, dB[TB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : HT(Object(dB)).forEach((function(TB) {
          Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
        }))
      }
      return BB
    }

    function vT(BB, TB) {
      for (var dB = 0; dB < TB.length; dB++) {
        var VB = TB[dB];
        VB.enumerable = VB.enumerable || !1, VB.configurable = !0, "value" in VB && (VB.writable = !0), Object.defineProperty(BB, sT(VB.key), VB)
      }
    }

    function mT(BB, TB, dB) {
      return TB = NT(TB),
        function(BB, TB) {
          if (TB && ("object" === uT(TB) || "function" === typeof TB)) return TB;
          if (void 0 !== TB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, iT() ? Reflect.construct(TB, dB || [], NT(BB).constructor) : TB.apply(BB, dB))
    }

    function iT() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (iT = function() {
        return !!BB
      })()
    }

    function NT(BB) {
      return NT = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, NT(BB)
    }

    function tT(BB, TB) {
      return tT = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, TB) {
        return BB.__proto__ = TB, BB
      }, tT(BB, TB)
    }

    function fT(BB, TB, dB) {
      return (TB = sT(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }

    function sT(BB) {
      var TB = function(BB, TB) {
        if ("object" != uT(BB) || !BB) return BB;
        var dB = BB[Symbol.toPrimitive];
        if (void 0 !== dB) {
          var VB = dB.call(BB, TB || "default");
          if ("object" != uT(VB)) return VB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === TB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == uT(TB) ? TB : TB + ""
    }
    var MT = function(BB) {
      function TB() {
        return function(BB, TB) {
          if (!(BB instanceof TB)) throw new TypeError("Cannot call a class as a function")
        }(this, TB), mT(this, TB, arguments)
      }
      return function(BB, TB) {
        if ("function" !== typeof TB && null !== TB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(TB && TB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), TB && tT(BB, TB)
      }(TB, BB), dB = TB, (yB = [{
        key: "render",
        value: function() {
          var BB = this.props,
            dB = BB.x1,
            yB = BB.x2,
            pB = BB.y1,
            lB = BB.y2,
            JB = BB.className,
            YB = BB.alwaysShow,
            gB = BB.clipPathId;
          (0, BT.e)(void 0 === YB, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
          var oB = (0, UB.w)(dB),
            kB = (0, UB.w)(yB),
            LB = (0, UB.w)(pB),
            OB = (0, UB.w)(lB),
            DB = this.props.shape;
          if (!oB && !kB && !LB && !OB && !DB) return null;
          var uB = function(BB, TB, dB, VB, yB) {
            var pB = yB.x1,
              lB = yB.x2,
              JB = yB.y1,
              YB = yB.y2,
              gB = yB.xAxis,
              oB = yB.yAxis;
            if (!gB || !oB) return null;
            var kB = (0, eB.b)({
                x: gB.scale,
                y: oB.scale
              }),
              LB = {
                x: BB ? kB.x.apply(pB, {
                  position: "start"
                }) : kB.x.rangeMin,
                y: dB ? kB.y.apply(JB, {
                  position: "start"
                }) : kB.y.rangeMin
              },
              OB = {
                x: TB ? kB.x.apply(lB, {
                  position: "end"
                }) : kB.x.rangeMax,
                y: VB ? kB.y.apply(YB, {
                  position: "end"
                }) : kB.y.rangeMax
              };
            return !(0, nB.e)(yB, "discard") || kB.isInRange(LB) && kB.isInRange(OB) ? (0, eB.k)(LB, OB) : null
          }(oB, kB, LB, OB, this.props);
          if (!uB && !DB) return null;
          var EB = (0, nB.e)(this.props, "hidden") ? "url(#".concat(gB, ")") : void 0;
          return VB.createElement(mB.c, {
            className: (0, HB.e)("recharts-reference-area", JB)
          }, TB.renderRect(DB, ET(ET({
            clipPath: EB
          }, (0, sB.d)(this.props, !0)), uB)), bB.c.renderCallByParent(this.props, uB))
        }
      }]) && vT(dB.prototype, yB), pB && vT(dB, pB), Object.defineProperty(dB, "prototype", {
        writable: !1
      }), dB;
      var dB, yB, pB
    }(VB.Component);

    function zT(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return wT(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || function(BB, TB) {
        if (!BB) return;
        if ("string" === typeof BB) return wT(BB, TB);
        var dB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === dB && BB.constructor && (dB = BB.constructor.name);
        if ("Map" === dB || "Set" === dB) return Array.from(BB);
        if ("Arguments" === dB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(dB)) return wT(BB, TB)
      }(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function wT(BB, TB) {
      (null == TB || TB > BB.length) && (TB = BB.length);
      for (var dB = 0, VB = new Array(TB); dB < TB; dB++) VB[dB] = BB[dB];
      return VB
    }
    fT(MT, "displayName", "ReferenceArea"), fT(MT, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#ccc",
      fillOpacity: .5,
      stroke: "none",
      strokeWidth: 1
    }), fT(MT, "renderRect", (function(BB, TB) {
      return VB.isValidElement(BB) ? VB.cloneElement(BB, TB) : JB()(BB) ? BB(TB) : VB.createElement(fB.b, DT({}, TB, {
        className: "recharts-reference-area-rect"
      }))
    }));
    var UT = function(BB, TB, dB, VB, yB) {
        var pB = (0, sB.h)(BB, OT.d),
          lB = (0, sB.h)(BB, LT),
          JB = [].concat(zT(pB), zT(lB)),
          YB = (0, sB.h)(BB, MT),
          gB = "".concat(VB, "Id"),
          oB = VB[0],
          kB = TB;
        if (JB.length && (kB = JB.reduce((function(BB, TB) {
            if (TB.props[gB] === dB && (0, nB.e)(TB.props, "extendDomain") && (0, UB.y)(TB.props[oB])) {
              var VB = TB.props[oB];
              return [Math.min(BB[0], VB), Math.max(BB[1], VB)]
            }
            return BB
          }), kB)), YB.length) {
          var LB = "".concat(oB, "1"),
            OB = "".concat(oB, "2");
          kB = YB.reduce((function(BB, TB) {
            if (TB.props[gB] === dB && (0, nB.e)(TB.props, "extendDomain") && (0, UB.y)(TB.props[LB]) && (0, UB.y)(TB.props[OB])) {
              var VB = TB.props[LB],
                yB = TB.props[OB];
              return [Math.min(BB[0], VB, yB), Math.max(BB[1], VB, yB)]
            }
            return BB
          }), kB)
        }
        return yB && yB.length && (kB = yB.reduce((function(BB, TB) {
          return (0, UB.y)(TB) ? [Math.min(BB[0], TB), Math.max(BB[1], TB)] : BB
        }), kB)), kB
      },
      FT = dB(5601),
      KT = dB(4839),
      rT = dB(27),
      IT = new(dB.n(rT)()),
      cT = "recharts.syncMouseEvents",
      ST = dB(4842);

    function PT(BB) {
      return PT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, PT(BB)
    }

    function QT(BB, TB) {
      for (var dB = 0; dB < TB.length; dB++) {
        var VB = TB[dB];
        VB.enumerable = VB.enumerable || !1, VB.configurable = !0, "value" in VB && (VB.writable = !0), Object.defineProperty(BB, aT(VB.key), VB)
      }
    }

    function RT(BB, TB, dB) {
      return (TB = aT(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }

    function aT(BB) {
      var TB = function(BB, TB) {
        if ("object" != PT(BB) || !BB) return BB;
        var dB = BB[Symbol.toPrimitive];
        if (void 0 !== dB) {
          var VB = dB.call(BB, TB || "default");
          if ("object" != PT(VB)) return VB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === TB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == PT(TB) ? TB : TB + ""
    }
    var ZT = function() {
      return BB = function BB() {
        ! function(BB, TB) {
          if (!(BB instanceof TB)) throw new TypeError("Cannot call a class as a function")
        }(this, BB), RT(this, "activeIndex", 0), RT(this, "coordinateList", []), RT(this, "layout", "horizontal")
      }, (TB = [{
        key: "setDetails",
        value: function(BB) {
          var TB, dB = BB.coordinateList,
            VB = void 0 === dB ? null : dB,
            yB = BB.container,
            pB = void 0 === yB ? null : yB,
            lB = BB.layout,
            JB = void 0 === lB ? null : lB,
            YB = BB.offset,
            gB = void 0 === YB ? null : YB,
            oB = BB.mouseHandlerCallback,
            kB = void 0 === oB ? null : oB;
          this.coordinateList = null !== (TB = null !== VB && void 0 !== VB ? VB : this.coordinateList) && void 0 !== TB ? TB : [], this.container = null !== pB && void 0 !== pB ? pB : this.container, this.layout = null !== JB && void 0 !== JB ? JB : this.layout, this.offset = null !== gB && void 0 !== gB ? gB : this.offset, this.mouseHandlerCallback = null !== kB && void 0 !== kB ? kB : this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1)
        }
      }, {
        key: "focus",
        value: function() {
          this.spoofMouse()
        }
      }, {
        key: "keyboardEvent",
        value: function(BB) {
          if (0 !== this.coordinateList.length) switch (BB.key) {
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
        value: function(BB) {
          this.activeIndex = BB
        }
      }, {
        key: "spoofMouse",
        value: function() {
          var BB, TB;
          if ("horizontal" === this.layout && 0 !== this.coordinateList.length) {
            var dB = this.container.getBoundingClientRect(),
              VB = dB.x,
              yB = dB.y,
              pB = dB.height,
              lB = this.coordinateList[this.activeIndex].coordinate,
              JB = (null === (BB = window) || void 0 === BB ? void 0 : BB.scrollX) || 0,
              YB = (null === (TB = window) || void 0 === TB ? void 0 : TB.scrollY) || 0,
              gB = VB + lB + JB,
              oB = yB + this.offset.top + pB / 2 + YB;
            this.mouseHandlerCallback({
              pageX: gB,
              pageY: oB
            })
          }
        }
      }]) && QT(BB.prototype, TB), dB && QT(BB, dB), Object.defineProperty(BB, "prototype", {
        writable: !1
      }), BB;
      var BB, TB, dB
    }();
    var XT = dB(5668),
      WT = dB(5730);

    function hT(BB) {
      return hT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, hT(BB)
    }
    var CT = ["x", "y", "top", "left", "width", "height", "className"];

    function GT() {
      return GT = Object.assign ? Object.assign.bind() : function(BB) {
        for (var TB = 1; TB < arguments.length; TB++) {
          var dB = arguments[TB];
          for (var VB in dB) Object.prototype.hasOwnProperty.call(dB, VB) && (BB[VB] = dB[VB])
        }
        return BB
      }, GT.apply(this, arguments)
    }

    function qT(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function xT(BB, TB, dB) {
      return (TB = function(BB) {
        var TB = function(BB, TB) {
          if ("object" != hT(BB) || !BB) return BB;
          var dB = BB[Symbol.toPrimitive];
          if (void 0 !== dB) {
            var VB = dB.call(BB, TB || "default");
            if ("object" != hT(VB)) return VB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === TB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == hT(TB) ? TB : TB + ""
      }(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }

    function jT(BB, TB) {
      if (null == BB) return {};
      var dB, VB, yB = function(BB, TB) {
        if (null == BB) return {};
        var dB = {};
        for (var VB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, VB)) {
            if (TB.indexOf(VB) >= 0) continue;
            dB[VB] = BB[VB]
          } return dB
      }(BB, TB);
      if (Object.getOwnPropertySymbols) {
        var pB = Object.getOwnPropertySymbols(BB);
        for (VB = 0; VB < pB.length; VB++) dB = pB[VB], TB.indexOf(dB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, dB) && (yB[dB] = BB[dB])
      }
      return yB
    }
    var AT = function(BB, TB, dB, VB, yB, pB) {
        return "M".concat(BB, ",").concat(yB, "v").concat(VB, "M").concat(pB, ",").concat(TB, "h").concat(dB)
      },
      bT = function(BB) {
        var TB = BB.x,
          dB = void 0 === TB ? 0 : TB,
          yB = BB.y,
          pB = void 0 === yB ? 0 : yB,
          lB = BB.top,
          JB = void 0 === lB ? 0 : lB,
          YB = BB.left,
          gB = void 0 === YB ? 0 : YB,
          oB = BB.width,
          kB = void 0 === oB ? 0 : oB,
          LB = BB.height,
          OB = void 0 === LB ? 0 : LB,
          DB = BB.className,
          uB = function(BB) {
            for (var TB = 1; TB < arguments.length; TB++) {
              var dB = null != arguments[TB] ? arguments[TB] : {};
              TB % 2 ? qT(Object(dB), !0).forEach((function(TB) {
                xT(BB, TB, dB[TB])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : qT(Object(dB)).forEach((function(TB) {
                Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
              }))
            }
            return BB
          }({
            x: dB,
            y: pB,
            top: JB,
            left: gB,
            width: kB,
            height: OB
          }, jT(BB, CT));
        return (0, UB.y)(dB) && (0, UB.y)(pB) && (0, UB.y)(kB) && (0, UB.y)(OB) && (0, UB.y)(JB) && (0, UB.y)(gB) ? VB.createElement("path", GT({}, (0, sB.d)(uB, !0), {
          className: (0, HB.e)("recharts-cross", DB),
          d: AT(dB, pB, kB, OB, JB, gB)
        })) : null
      };

    function nT(BB) {
      var TB = BB.cx,
        dB = BB.cy,
        VB = BB.radius,
        yB = BB.startAngle,
        pB = BB.endAngle;
      return {
        points: [(0, FT.j)(TB, dB, VB, yB), (0, FT.j)(TB, dB, VB, pB)],
        cx: TB,
        cy: dB,
        radius: VB,
        startAngle: yB,
        endAngle: pB
      }
    }
    var eT = dB(5690);

    function Bd(BB, TB, dB) {
      var VB, yB, pB, lB;
      if ("horizontal" === BB) pB = VB = TB.x, yB = dB.top, lB = dB.top + dB.height;
      else if ("vertical" === BB) lB = yB = TB.y, VB = dB.left, pB = dB.left + dB.width;
      else if (null != TB.cx && null != TB.cy) {
        if ("centric" !== BB) return nT(TB);
        var JB = TB.cx,
          YB = TB.cy,
          gB = TB.innerRadius,
          oB = TB.outerRadius,
          kB = TB.angle,
          LB = (0, FT.j)(JB, YB, gB, kB),
          OB = (0, FT.j)(JB, YB, oB, kB);
        VB = LB.x, yB = LB.y, pB = OB.x, lB = OB.y
      }
      return [{
        x: VB,
        y: yB
      }, {
        x: pB,
        y: lB
      }]
    }

    function Td(BB) {
      return Td = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, Td(BB)
    }

    function dd(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function Vd(BB) {
      for (var TB = 1; TB < arguments.length; TB++) {
        var dB = null != arguments[TB] ? arguments[TB] : {};
        TB % 2 ? dd(Object(dB), !0).forEach((function(TB) {
          yd(BB, TB, dB[TB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : dd(Object(dB)).forEach((function(TB) {
          Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
        }))
      }
      return BB
    }

    function yd(BB, TB, dB) {
      return (TB = function(BB) {
        var TB = function(BB, TB) {
          if ("object" != Td(BB) || !BB) return BB;
          var dB = BB[Symbol.toPrimitive];
          if (void 0 !== dB) {
            var VB = dB.call(BB, TB || "default");
            if ("object" != Td(VB)) return VB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === TB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == Td(TB) ? TB : TB + ""
      }(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }

    function pd(BB) {
      var TB, dB, yB, pB = BB.element,
        lB = BB.tooltipEventType,
        JB = BB.isActive,
        YB = BB.activeCoordinate,
        gB = BB.activePayload,
        oB = BB.offset,
        kB = BB.activeTooltipIndex,
        LB = BB.tooltipAxisBandSize,
        OB = BB.layout,
        DB = BB.chartName,
        uB = null !== (TB = pB.props.cursor) && void 0 !== TB ? TB : null === (dB = pB.type.defaultProps) || void 0 === dB ? void 0 : dB.cursor;
      if (!pB || !uB || !JB || !YB || "ScatterChart" !== DB && "axis" !== lB) return null;
      var EB = WT.b;
      if ("ScatterChart" === DB) yB = YB, EB = bT;
      else if ("BarChart" === DB) yB = function(BB, TB, dB, VB) {
        var yB = VB / 2;
        return {
          stroke: "none",
          fill: "#ccc",
          x: "horizontal" === BB ? TB.x - yB : dB.left + .5,
          y: "horizontal" === BB ? dB.top + .5 : TB.y - yB,
          width: "horizontal" === BB ? VB : dB.width - 1,
          height: "horizontal" === BB ? dB.height - 1 : VB
        }
      }(OB, YB, oB, LB), EB = fB.b;
      else if ("radial" === OB) {
        var vB = nT(YB),
          mB = vB.cx,
          iB = vB.cy,
          NB = vB.radius;
        yB = {
          cx: mB,
          cy: iB,
          startAngle: vB.startAngle,
          endAngle: vB.endAngle,
          innerRadius: NB,
          outerRadius: NB
        }, EB = eT.e
      } else yB = {
        points: Bd(OB, YB, oB)
      }, EB = WT.b;
      var tB = Vd(Vd(Vd(Vd({
        stroke: "#ccc",
        pointerEvents: "none"
      }, oB), yB), (0, sB.d)(uB, !1)), {}, {
        payload: gB,
        payloadIndex: kB,
        className: (0, HB.e)("recharts-tooltip-cursor", uB.className)
      });
      return (0, VB.isValidElement)(uB) ? (0, VB.cloneElement)(uB, tB) : (0, VB.createElement)(EB, tB)
    }
    var ld = dB(5713),
      Jd = ["item"],
      Yd = ["children", "className", "width", "height", "style", "compact", "title", "desc"];

    function gd(BB) {
      return gd = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, gd(BB)
    }

    function od() {
      return od = Object.assign ? Object.assign.bind() : function(BB) {
        for (var TB = 1; TB < arguments.length; TB++) {
          var dB = arguments[TB];
          for (var VB in dB) Object.prototype.hasOwnProperty.call(dB, VB) && (BB[VB] = dB[VB])
        }
        return BB
      }, od.apply(this, arguments)
    }

    function kd(BB, TB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, TB) {
        var dB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != dB) {
          var VB, yB, pB, lB, JB = [],
            YB = !0,
            gB = !1;
          try {
            if (pB = (dB = dB.call(BB)).next, 0 === TB) {
              if (Object(dB) !== dB) return;
              YB = !1
            } else
              for (; !(YB = (VB = pB.call(dB)).done) && (JB.push(VB.value), JB.length !== TB); YB = !0);
          } catch (BB) {
            gB = !0, yB = BB
          } finally {
            try {
              if (!YB && null != dB.return && (lB = dB.return(), Object(lB) !== lB)) return
            } finally {
              if (gB) throw yB
            }
          }
          return JB
        }
      }(BB, TB) || md(BB, TB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Ld(BB, TB) {
      if (null == BB) return {};
      var dB, VB, yB = function(BB, TB) {
        if (null == BB) return {};
        var dB = {};
        for (var VB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, VB)) {
            if (TB.indexOf(VB) >= 0) continue;
            dB[VB] = BB[VB]
          } return dB
      }(BB, TB);
      if (Object.getOwnPropertySymbols) {
        var pB = Object.getOwnPropertySymbols(BB);
        for (VB = 0; VB < pB.length; VB++) dB = pB[VB], TB.indexOf(dB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, dB) && (yB[dB] = BB[dB])
      }
      return yB
    }

    function Od(BB, TB) {
      for (var dB = 0; dB < TB.length; dB++) {
        var VB = TB[dB];
        VB.enumerable = VB.enumerable || !1, VB.configurable = !0, "value" in VB && (VB.writable = !0), Object.defineProperty(BB, Md(VB.key), VB)
      }
    }

    function Dd(BB, TB, dB) {
      return TB = Hd(TB),
        function(BB, TB) {
          if (TB && ("object" === gd(TB) || "function" === typeof TB)) return TB;
          if (void 0 !== TB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, ud() ? Reflect.construct(TB, dB || [], Hd(BB).constructor) : TB.apply(BB, dB))
    }

    function ud() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (ud = function() {
        return !!BB
      })()
    }

    function Hd(BB) {
      return Hd = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, Hd(BB)
    }

    function Ed(BB, TB) {
      return Ed = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, TB) {
        return BB.__proto__ = TB, BB
      }, Ed(BB, TB)
    }

    function vd(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return Nd(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || md(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function md(BB, TB) {
      if (BB) {
        if ("string" === typeof BB) return Nd(BB, TB);
        var dB = Object.prototype.toString.call(BB).slice(8, -1);
        return "Object" === dB && BB.constructor && (dB = BB.constructor.name), "Map" === dB || "Set" === dB ? Array.from(BB) : "Arguments" === dB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(dB) ? Nd(BB, TB) : void 0
      }
    }

    function Nd(BB, TB) {
      (null == TB || TB > BB.length) && (TB = BB.length);
      for (var dB = 0, VB = new Array(TB); dB < TB; dB++) VB[dB] = BB[dB];
      return VB
    }

    function td(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function fd(BB) {
      for (var TB = 1; TB < arguments.length; TB++) {
        var dB = null != arguments[TB] ? arguments[TB] : {};
        TB % 2 ? td(Object(dB), !0).forEach((function(TB) {
          sd(BB, TB, dB[TB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : td(Object(dB)).forEach((function(TB) {
          Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
        }))
      }
      return BB
    }

    function sd(BB, TB, dB) {
      return (TB = Md(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }

    function Md(BB) {
      var TB = function(BB, TB) {
        if ("object" != gd(BB) || !BB) return BB;
        var dB = BB[Symbol.toPrimitive];
        if (void 0 !== dB) {
          var VB = dB.call(BB, TB || "default");
          if ("object" != gd(VB)) return VB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === TB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == gd(TB) ? TB : TB + ""
    }
    var zd = {
        xAxis: ["bottom", "top"],
        yAxis: ["left", "right"]
      },
      wd = {
        width: "100%",
        height: "100%"
      },
      Ud = {
        x: 0,
        y: 0
      };

    function Fd(BB) {
      return BB
    }
    var Kd = function(BB, TB) {
      var dB = TB.graphicalItems,
        VB = TB.dataStartIndex,
        yB = TB.dataEndIndex,
        pB = (null !== dB && void 0 !== dB ? dB : []).reduce((function(BB, TB) {
          var dB = TB.props.data;
          return dB && dB.length ? [].concat(vd(BB), vd(dB)) : BB
        }), []);
      return pB.length > 0 ? pB : BB && BB.length && (0, UB.y)(VB) && (0, UB.y)(yB) ? BB.slice(VB, yB + 1) : []
    };

    function rd(BB) {
      return "number" === BB ? [0, "auto"] : void 0
    }
    var Id = function(BB, TB, dB, VB) {
        var yB = BB.graphicalItems,
          pB = BB.tooltipAxis,
          lB = Kd(TB, BB);
        return dB < 0 || !yB || !yB.length || dB >= lB.length ? null : yB.reduce((function(yB, JB) {
          var YB, gB, oB = null !== (YB = JB.props.data) && void 0 !== YB ? YB : TB;
          if (oB && BB.dataStartIndex + BB.dataEndIndex !== 0 && BB.dataEndIndex - BB.dataStartIndex >= dB && (oB = oB.slice(BB.dataStartIndex, BB.dataEndIndex + 1)), pB.dataKey && !pB.allowDuplicatedCategory) {
            var kB = void 0 === oB ? lB : oB;
            gB = (0, UB.h)(kB, pB.dataKey, VB)
          } else gB = oB && oB[dB] || lB[dB];
          return gB ? [].concat(vd(yB), [(0, wB.ab)(JB, gB)]) : yB
        }), [])
      },
      cd = function(BB, TB, dB, VB) {
        var yB = VB || {
            x: BB.chartX,
            y: BB.chartY
          },
          pB = function(BB, TB) {
            return "horizontal" === TB ? BB.x : "vertical" === TB ? BB.y : "centric" === TB ? BB.angle : BB.radius
          }(yB, dB),
          lB = BB.orderedTooltipTicks,
          JB = BB.tooltipAxis,
          YB = BB.tooltipTicks,
          gB = (0, wB.i)(pB, lB, YB, JB);
        if (gB >= 0 && YB) {
          var oB = YB[gB] && YB[gB].value,
            kB = Id(BB, TB, gB, oB),
            LB = function(BB, TB, dB, VB) {
              var yB = TB.find((function(BB) {
                return BB && BB.index === dB
              }));
              if (yB) {
                if ("horizontal" === BB) return {
                  x: yB.coordinate,
                  y: VB.y
                };
                if ("vertical" === BB) return {
                  x: VB.x,
                  y: yB.coordinate
                };
                if ("centric" === BB) {
                  var pB = yB.coordinate,
                    lB = VB.radius;
                  return fd(fd(fd({}, VB), (0, FT.j)(VB.cx, VB.cy, lB, pB)), {}, {
                    angle: pB,
                    radius: lB
                  })
                }
                var JB = yB.coordinate,
                  YB = VB.angle;
                return fd(fd(fd({}, VB), (0, FT.j)(VB.cx, VB.cy, JB, YB)), {}, {
                  angle: YB,
                  radius: JB
                })
              }
              return Ud
            }(dB, lB, gB, yB);
          return {
            activeTooltipIndex: gB,
            activeLabel: oB,
            activePayload: kB,
            activeCoordinate: LB
          }
        }
        return null
      },
      Sd = function(BB, TB) {
        var dB = TB.axes,
          VB = TB.graphicalItems,
          yB = TB.axisType,
          lB = TB.axisIdKey,
          JB = TB.stackGroups,
          YB = TB.dataStartIndex,
          oB = TB.dataEndIndex,
          kB = BB.layout,
          LB = BB.children,
          OB = BB.stackOffset,
          DB = (0, wB.ib)(kB, yB);
        return dB.reduce((function(TB, dB) {
          var uB, HB = void 0 !== dB.type.defaultProps ? fd(fd({}, dB.type.defaultProps), dB.props) : dB.props,
            EB = HB.type,
            vB = HB.dataKey,
            mB = HB.allowDataOverflow,
            iB = HB.allowDuplicatedCategory,
            NB = HB.scale,
            tB = HB.ticks,
            fB = HB.includeHidden,
            sB = HB[lB];
          if (TB[sB]) return TB;
          var MB, zB, FB, KB = Kd(BB.data, {
              graphicalItems: VB.filter((function(BB) {
                var TB;
                return (lB in BB.props ? BB.props[lB] : null === (TB = BB.type.defaultProps) || void 0 === TB ? void 0 : TB[lB]) === sB
              })),
              dataStartIndex: YB,
              dataEndIndex: oB
            }),
            rB = KB.length;
          (function(BB, TB, dB) {
            if ("number" === dB && !0 === TB && Array.isArray(BB)) {
              var VB = null === BB || void 0 === BB ? void 0 : BB[0],
                yB = null === BB || void 0 === BB ? void 0 : BB[1];
              if (VB && yB && (0, UB.y)(VB) && (0, UB.y)(yB)) return !0
            }
            return !1
          })(HB.domain, mB, EB) && (MB = (0, wB.sb)(HB.domain, null, mB), !DB || "number" !== EB && "auto" === NB || (FB = (0, wB.F)(KB, vB, "category")));
          var IB = rd(EB);
          if (!MB || 0 === MB.length) {
            var cB, SB = null !== (cB = HB.domain) && void 0 !== cB ? cB : IB;
            if (vB) {
              if (MB = (0, wB.F)(KB, vB, EB), "category" === EB && DB) {
                var PB = (0, UB.o)(MB);
                iB && PB ? (zB = MB, MB = gB()(0, rB)) : iB || (MB = (0, wB.lb)(SB, MB, dB).reduce((function(BB, TB) {
                  return BB.indexOf(TB) >= 0 ? BB : [].concat(vd(BB), [TB])
                }), []))
              } else if ("category" === EB) MB = iB ? MB.filter((function(BB) {
                return "" !== BB && !pB()(BB)
              })) : (0, wB.lb)(SB, MB, dB).reduce((function(BB, TB) {
                return BB.indexOf(TB) >= 0 || "" === TB || pB()(TB) ? BB : [].concat(vd(BB), [TB])
              }), []);
              else if ("number" === EB) {
                var QB = (0, wB.ob)(KB, VB.filter((function(BB) {
                  var TB, dB, VB = lB in BB.props ? BB.props[lB] : null === (TB = BB.type.defaultProps) || void 0 === TB ? void 0 : TB[lB],
                    yB = "hide" in BB.props ? BB.props.hide : null === (dB = BB.type.defaultProps) || void 0 === dB ? void 0 : dB.hide;
                  return VB === sB && (fB || !yB)
                })), vB, yB, kB);
                QB && (MB = QB)
              }!DB || "number" !== EB && "auto" === NB || (FB = (0, wB.F)(KB, vB, "category"))
            } else MB = DB ? gB()(0, rB) : JB && JB[sB] && JB[sB].hasStack && "number" === EB ? "expand" === OB ? [0, 1] : (0, wB.M)(JB[sB].stackGroups, YB, oB) : (0, wB.I)(KB, VB.filter((function(BB) {
              var TB = lB in BB.props ? BB.props[lB] : BB.type.defaultProps[lB],
                dB = "hide" in BB.props ? BB.props.hide : BB.type.defaultProps.hide;
              return TB === sB && (fB || !dB)
            })), EB, kB, !0);
            if ("number" === EB) MB = UT(LB, MB, sB, yB, tB), SB && (MB = (0, wB.sb)(SB, MB, mB));
            else if ("category" === EB && SB) {
              var RB = SB;
              MB.every((function(BB) {
                return RB.indexOf(BB) >= 0
              })) && (MB = RB)
            }
          }
          return fd(fd({}, TB), {}, sd({}, sB, fd(fd({}, HB), {}, {
            axisType: yB,
            domain: MB,
            categoricalDomain: FB,
            duplicateDomain: zB,
            originalDomain: null !== (uB = HB.domain) && void 0 !== uB ? uB : IB,
            isCategorical: DB,
            layout: kB
          })))
        }), {})
      },
      Pd = function(BB, TB) {
        var dB = TB.axisType,
          VB = void 0 === dB ? "xAxis" : dB,
          yB = TB.AxisComp,
          pB = TB.graphicalItems,
          lB = TB.stackGroups,
          JB = TB.dataStartIndex,
          YB = TB.dataEndIndex,
          oB = BB.children,
          LB = "".concat(VB, "Id"),
          OB = (0, sB.h)(oB, yB),
          DB = {};
        return OB && OB.length ? DB = Sd(BB, {
          axes: OB,
          graphicalItems: pB,
          axisType: VB,
          axisIdKey: LB,
          stackGroups: lB,
          dataStartIndex: JB,
          dataEndIndex: YB
        }) : pB && pB.length && (DB = function(BB, TB) {
          var dB = TB.graphicalItems,
            VB = TB.Axis,
            yB = TB.axisType,
            pB = TB.axisIdKey,
            lB = TB.stackGroups,
            JB = TB.dataStartIndex,
            YB = TB.dataEndIndex,
            oB = BB.layout,
            LB = BB.children,
            OB = Kd(BB.data, {
              graphicalItems: dB,
              dataStartIndex: JB,
              dataEndIndex: YB
            }),
            DB = OB.length,
            uB = (0, wB.ib)(oB, yB),
            HB = -1;
          return dB.reduce((function(BB, TB) {
            var EB, vB = (void 0 !== TB.type.defaultProps ? fd(fd({}, TB.type.defaultProps), TB.props) : TB.props)[pB],
              mB = rd("number");
            return BB[vB] ? BB : (HB++, uB ? EB = gB()(0, DB) : lB && lB[vB] && lB[vB].hasStack ? (EB = (0, wB.M)(lB[vB].stackGroups, JB, YB), EB = UT(LB, EB, vB, yB)) : (EB = (0, wB.sb)(mB, (0, wB.I)(OB, dB.filter((function(BB) {
              var TB, dB, VB = pB in BB.props ? BB.props[pB] : null === (TB = BB.type.defaultProps) || void 0 === TB ? void 0 : TB[pB],
                yB = "hide" in BB.props ? BB.props.hide : null === (dB = BB.type.defaultProps) || void 0 === dB ? void 0 : dB.hide;
              return VB === vB && !yB
            })), "number", oB), VB.defaultProps.allowDataOverflow), EB = UT(LB, EB, vB, yB)), fd(fd({}, BB), {}, sd({}, vB, fd(fd({
              axisType: yB
            }, VB.defaultProps), {}, {
              hide: !0,
              orientation: kB()(zd, "".concat(yB, ".").concat(HB % 2), null),
              domain: EB,
              originalDomain: mB,
              isCategorical: uB,
              layout: oB
            }))))
          }), {})
        }(BB, {
          Axis: yB,
          graphicalItems: pB,
          axisType: VB,
          axisIdKey: LB,
          stackGroups: lB,
          dataStartIndex: JB,
          dataEndIndex: YB
        })), DB
      },
      Qd = function(BB) {
        var TB = BB.children,
          dB = BB.defaultShowTooltip,
          VB = (0, sB.k)(TB, xB),
          yB = 0,
          pB = 0;
        return BB.data && 0 !== BB.data.length && (pB = BB.data.length - 1), VB && VB.props && (VB.props.startIndex >= 0 && (yB = VB.props.startIndex), VB.props.endIndex >= 0 && (pB = VB.props.endIndex)), {
          chartX: 0,
          chartY: 0,
          dataStartIndex: yB,
          dataEndIndex: pB,
          activeTooltipIndex: -1,
          isTooltipActive: Boolean(dB)
        }
      },
      Rd = function(BB) {
        return "horizontal" === BB ? {
          numericAxisName: "yAxis",
          cateAxisName: "xAxis"
        } : "vertical" === BB ? {
          numericAxisName: "xAxis",
          cateAxisName: "yAxis"
        } : "centric" === BB ? {
          numericAxisName: "radiusAxis",
          cateAxisName: "angleAxis"
        } : {
          numericAxisName: "angleAxis",
          cateAxisName: "radiusAxis"
        }
      },
      ad = function(BB, TB) {
        return "xAxis" === TB ? BB[TB].width : "yAxis" === TB ? BB[TB].height : void 0
      },
      Zd = function(BB) {
        var TB = BB.chartName,
          dB = BB.GraphicalChild,
          yB = BB.defaultTooltipEventType,
          lB = void 0 === yB ? "axis" : yB,
          YB = BB.validateTooltipEventTypes,
          gB = void 0 === YB ? ["axis"] : YB,
          oB = BB.axisComponents,
          LB = BB.legendContent,
          DB = BB.formatAxisMap,
          MB = BB.defaultProps,
          zB = function(BB, TB) {
            var dB = TB.graphicalItems,
              VB = TB.stackGroups,
              yB = TB.offset,
              lB = TB.updateId,
              JB = TB.dataStartIndex,
              YB = TB.dataEndIndex,
              gB = BB.barSize,
              kB = BB.layout,
              LB = BB.barGap,
              OB = BB.barCategoryGap,
              DB = BB.maxBarSize,
              uB = Rd(kB),
              HB = uB.numericAxisName,
              vB = uB.cateAxisName,
              mB = function(BB) {
                return !(!BB || !BB.length) && BB.some((function(BB) {
                  var TB = (0, sB.n)(BB && BB.type);
                  return TB && TB.indexOf("Bar") >= 0
                }))
              }(dB),
              iB = [];
            return dB.forEach((function(dB, uB) {
              var NB = Kd(BB.data, {
                  graphicalItems: [dB],
                  dataStartIndex: JB,
                  dataEndIndex: YB
                }),
                tB = void 0 !== dB.type.defaultProps ? fd(fd({}, dB.type.defaultProps), dB.props) : dB.props,
                fB = tB.dataKey,
                MB = tB.maxBarSize,
                zB = tB["".concat(HB, "Id")],
                UB = tB["".concat(vB, "Id")],
                FB = oB.reduce((function(BB, dB) {
                  var VB = TB["".concat(dB.axisType, "Map")],
                    yB = tB["".concat(dB.axisType, "Id")];
                  VB && VB[yB] || "zAxis" === dB.axisType || (0, EB.b)(!1);
                  var pB = VB[yB];
                  return fd(fd({}, BB), {}, sd(sd({}, dB.axisType, pB), "".concat(dB.axisType, "Ticks"), (0, wB.Y)(pB)))
                }), {}),
                KB = FB[vB],
                rB = FB["".concat(vB, "Ticks")],
                IB = VB && VB[zB] && VB[zB].hasStack && (0, wB.V)(dB, VB[zB].stackGroups),
                cB = (0, sB.n)(dB.type).indexOf("Bar") >= 0,
                SB = (0, wB.q)(KB, rB),
                PB = [],
                QB = mB && (0, wB.u)({
                  barSize: gB,
                  stackGroups: VB,
                  totalSize: ad(FB, vB)
                });
              if (cB) {
                var RB, aB, ZB = pB()(MB) ? DB : MB,
                  XB = null !== (RB = null !== (aB = (0, wB.q)(KB, rB, !0)) && void 0 !== aB ? aB : ZB) && void 0 !== RB ? RB : 0;
                PB = (0, wB.r)({
                  barGap: LB,
                  barCategoryGap: OB,
                  bandSize: XB !== SB ? XB : SB,
                  sizeList: QB[UB],
                  maxBarSize: ZB
                }), XB !== SB && (PB = PB.map((function(BB) {
                  return fd(fd({}, BB), {}, {
                    position: fd(fd({}, BB.position), {}, {
                      offset: BB.position.offset - XB / 2
                    })
                  })
                })))
              }
              var WB = dB && dB.type && dB.type.getComposedData;
              WB && iB.push({
                props: fd(fd({}, WB(fd(fd({}, FB), {}, {
                  displayedData: NB,
                  props: BB,
                  dataKey: fB,
                  item: dB,
                  bandSize: SB,
                  barPosition: PB,
                  offset: yB,
                  stackedData: IB,
                  layout: kB,
                  dataStartIndex: JB,
                  dataEndIndex: YB
                }))), {}, sd(sd(sd({
                  key: dB.key || "item-".concat(uB)
                }, HB, FB[HB]), vB, FB[vB]), "animationId", lB)),
                childIndex: (0, sB.v)(dB, BB.children),
                item: dB
              })
            })), iB
          },
          FB = function(BB, VB) {
            var yB = BB.props,
              pB = BB.dataStartIndex,
              lB = BB.dataEndIndex,
              JB = BB.updateId;
            if (!(0, sB.x)({
                props: yB
              })) return null;
            var YB = yB.children,
              gB = yB.layout,
              LB = yB.stackOffset,
              uB = yB.data,
              HB = yB.reverseStackOrder,
              EB = Rd(gB),
              vB = EB.numericAxisName,
              mB = EB.cateAxisName,
              iB = (0, sB.h)(YB, dB),
              tB = (0, wB.R)(uB, iB, "".concat(vB, "Id"), "".concat(mB, "Id"), LB, HB),
              fB = oB.reduce((function(BB, TB) {
                var dB = "".concat(TB.axisType, "Map");
                return fd(fd({}, BB), {}, sd({}, dB, Pd(yB, fd(fd({}, TB), {}, {
                  graphicalItems: iB,
                  stackGroups: TB.axisType === vB && tB,
                  dataStartIndex: pB,
                  dataEndIndex: lB
                }))))
              }), {}),
              MB = function(BB, TB) {
                var dB = BB.props,
                  VB = BB.graphicalItems,
                  yB = BB.xAxisMap,
                  pB = void 0 === yB ? {} : yB,
                  lB = BB.yAxisMap,
                  JB = void 0 === lB ? {} : lB,
                  YB = dB.width,
                  gB = dB.height,
                  oB = dB.children,
                  LB = dB.margin || {},
                  OB = (0, sB.k)(oB, xB),
                  DB = (0, sB.k)(oB, NB.e),
                  uB = Object.keys(JB).reduce((function(BB, TB) {
                    var dB = JB[TB],
                      VB = dB.orientation;
                    return dB.mirror || dB.hide ? BB : fd(fd({}, BB), {}, sd({}, VB, BB[VB] + dB.width))
                  }), {
                    left: LB.left || 0,
                    right: LB.right || 0
                  }),
                  HB = Object.keys(pB).reduce((function(BB, TB) {
                    var dB = pB[TB],
                      VB = dB.orientation;
                    return dB.mirror || dB.hide ? BB : fd(fd({}, BB), {}, sd({}, VB, kB()(BB, "".concat(VB)) + dB.height))
                  }), {
                    top: LB.top || 0,
                    bottom: LB.bottom || 0
                  }),
                  EB = fd(fd({}, HB), uB),
                  vB = EB.bottom;
                OB && (EB.bottom += OB.props.height || xB.defaultProps.height), DB && TB && (EB = (0, wB.e)(EB, VB, dB, TB));
                var mB = YB - EB.left - EB.right,
                  iB = gB - EB.top - EB.bottom;
                return fd(fd({
                  brushBottom: vB
                }, EB), {}, {
                  width: Math.max(mB, 0),
                  height: Math.max(iB, 0)
                })
              }(fd(fd({}, fB), {}, {
                props: yB,
                graphicalItems: iB
              }), null === VB || void 0 === VB ? void 0 : VB.legendBBox);
            Object.keys(fB).forEach((function(BB) {
              fB[BB] = DB(yB, fB[BB], MB, BB.replace("Map", ""), TB)
            }));
            var FB = function(BB) {
                var TB = (0, UB.k)(BB),
                  dB = (0, wB.Y)(TB, !1, !0);
                return {
                  tooltipTicks: dB,
                  orderedTooltipTicks: OB()(dB, (function(BB) {
                    return BB.coordinate
                  })),
                  tooltipAxis: TB,
                  tooltipAxisBandSize: (0, wB.q)(TB, dB)
                }
              }(fB["".concat(mB, "Map")]),
              KB = zB(yB, fd(fd({}, fB), {}, {
                dataStartIndex: pB,
                dataEndIndex: lB,
                updateId: JB,
                graphicalItems: iB,
                stackGroups: tB,
                offset: MB
              }));
            return fd(fd({
              formattedGraphicalItems: KB,
              graphicalItems: iB,
              offset: MB,
              stackGroups: tB
            }, FB), fB)
          },
          KB = function(BB) {
            function dB(BB) {
              var yB, lB, YB;
              return function(BB, TB) {
                if (!(BB instanceof TB)) throw new TypeError("Cannot call a class as a function")
              }(this, dB), sd(YB = Dd(this, dB, [BB]), "eventEmitterSymbol", Symbol("rechartsEventEmitter")), sd(YB, "accessibilityManager", new ZT), sd(YB, "handleLegendBBoxUpdate", (function(BB) {
                if (BB) {
                  var TB = YB.state,
                    dB = TB.dataStartIndex,
                    VB = TB.dataEndIndex,
                    yB = TB.updateId;
                  YB.setState(fd({
                    legendBBox: BB
                  }, FB({
                    props: YB.props,
                    dataStartIndex: dB,
                    dataEndIndex: VB,
                    updateId: yB
                  }, fd(fd({}, YB.state), {}, {
                    legendBBox: BB
                  }))))
                }
              })), sd(YB, "handleReceiveSyncEvent", (function(BB, TB, dB) {
                if (YB.props.syncId === BB) {
                  if (dB === YB.eventEmitterSymbol && "function" !== typeof YB.props.syncMethod) return;
                  YB.applySyncEvent(TB)
                }
              })), sd(YB, "handleBrushChange", (function(BB) {
                var TB = BB.startIndex,
                  dB = BB.endIndex;
                if (TB !== YB.state.dataStartIndex || dB !== YB.state.dataEndIndex) {
                  var VB = YB.state.updateId;
                  YB.setState((function() {
                    return fd({
                      dataStartIndex: TB,
                      dataEndIndex: dB
                    }, FB({
                      props: YB.props,
                      dataStartIndex: TB,
                      dataEndIndex: dB,
                      updateId: VB
                    }, YB.state))
                  })), YB.triggerSyncEvent({
                    dataStartIndex: TB,
                    dataEndIndex: dB
                  })
                }
              })), sd(YB, "handleMouseEnter", (function(BB) {
                var TB = YB.getMouseInfo(BB);
                if (TB) {
                  var dB = fd(fd({}, TB), {}, {
                    isTooltipActive: !0
                  });
                  YB.setState(dB), YB.triggerSyncEvent(dB);
                  var VB = YB.props.onMouseEnter;
                  JB()(VB) && VB(dB, BB)
                }
              })), sd(YB, "triggeredAfterMouseMove", (function(BB) {
                var TB = YB.getMouseInfo(BB),
                  dB = TB ? fd(fd({}, TB), {}, {
                    isTooltipActive: !0
                  }) : {
                    isTooltipActive: !1
                  };
                YB.setState(dB), YB.triggerSyncEvent(dB);
                var VB = YB.props.onMouseMove;
                JB()(VB) && VB(dB, BB)
              })), sd(YB, "handleItemMouseEnter", (function(BB) {
                YB.setState((function() {
                  return {
                    isTooltipActive: !0,
                    activeItem: BB,
                    activePayload: BB.tooltipPayload,
                    activeCoordinate: BB.tooltipPosition || {
                      x: BB.cx,
                      y: BB.cy
                    }
                  }
                }))
              })), sd(YB, "handleItemMouseLeave", (function() {
                YB.setState((function() {
                  return {
                    isTooltipActive: !1
                  }
                }))
              })), sd(YB, "handleMouseMove", (function(BB) {
                BB.persist(), YB.throttleTriggeredAfterMouseMove(BB)
              })), sd(YB, "handleMouseLeave", (function(BB) {
                YB.throttleTriggeredAfterMouseMove.cancel();
                var TB = {
                  isTooltipActive: !1
                };
                YB.setState(TB), YB.triggerSyncEvent(TB);
                var dB = YB.props.onMouseLeave;
                JB()(dB) && dB(TB, BB)
              })), sd(YB, "handleOuterEvent", (function(BB) {
                var TB, dB = (0, sB.p)(BB),
                  VB = kB()(YB.props, "".concat(dB));
                dB && JB()(VB) && VB(null !== (TB = /.*touch.*/i.test(dB) ? YB.getMouseInfo(BB.changedTouches[0]) : YB.getMouseInfo(BB)) && void 0 !== TB ? TB : {}, BB)
              })), sd(YB, "handleClick", (function(BB) {
                var TB = YB.getMouseInfo(BB);
                if (TB) {
                  var dB = fd(fd({}, TB), {}, {
                    isTooltipActive: !0
                  });
                  YB.setState(dB), YB.triggerSyncEvent(dB);
                  var VB = YB.props.onClick;
                  JB()(VB) && VB(dB, BB)
                }
              })), sd(YB, "handleMouseDown", (function(BB) {
                var TB = YB.props.onMouseDown;
                JB()(TB) && TB(YB.getMouseInfo(BB), BB)
              })), sd(YB, "handleMouseUp", (function(BB) {
                var TB = YB.props.onMouseUp;
                JB()(TB) && TB(YB.getMouseInfo(BB), BB)
              })), sd(YB, "handleTouchMove", (function(BB) {
                null != BB.changedTouches && BB.changedTouches.length > 0 && YB.throttleTriggeredAfterMouseMove(BB.changedTouches[0])
              })), sd(YB, "handleTouchStart", (function(BB) {
                null != BB.changedTouches && BB.changedTouches.length > 0 && YB.handleMouseDown(BB.changedTouches[0])
              })), sd(YB, "handleTouchEnd", (function(BB) {
                null != BB.changedTouches && BB.changedTouches.length > 0 && YB.handleMouseUp(BB.changedTouches[0])
              })), sd(YB, "handleDoubleClick", (function(BB) {
                var TB = YB.props.onDoubleClick;
                JB()(TB) && TB(YB.getMouseInfo(BB), BB)
              })), sd(YB, "handleContextMenu", (function(BB) {
                var TB = YB.props.onContextMenu;
                JB()(TB) && TB(YB.getMouseInfo(BB), BB)
              })), sd(YB, "triggerSyncEvent", (function(BB) {
                void 0 !== YB.props.syncId && IT.emit(cT, YB.props.syncId, BB, YB.eventEmitterSymbol)
              })), sd(YB, "applySyncEvent", (function(BB) {
                var TB = YB.props,
                  dB = TB.layout,
                  VB = TB.syncMethod,
                  yB = YB.state.updateId,
                  pB = BB.dataStartIndex,
                  lB = BB.dataEndIndex;
                if (void 0 !== BB.dataStartIndex || void 0 !== BB.dataEndIndex) YB.setState(fd({
                  dataStartIndex: pB,
                  dataEndIndex: lB
                }, FB({
                  props: YB.props,
                  dataStartIndex: pB,
                  dataEndIndex: lB,
                  updateId: yB
                }, YB.state)));
                else if (void 0 !== BB.activeTooltipIndex) {
                  var JB = BB.chartX,
                    gB = BB.chartY,
                    oB = BB.activeTooltipIndex,
                    kB = YB.state,
                    LB = kB.offset,
                    OB = kB.tooltipTicks;
                  if (!LB) return;
                  if ("function" === typeof VB) oB = VB(OB, BB);
                  else if ("value" === VB) {
                    oB = -1;
                    for (var DB = 0; DB < OB.length; DB++)
                      if (OB[DB].value === BB.activeLabel) {
                        oB = DB;
                        break
                      }
                  }
                  var uB = fd(fd({}, LB), {}, {
                      x: LB.left,
                      y: LB.top
                    }),
                    HB = Math.min(JB, uB.x + uB.width),
                    EB = Math.min(gB, uB.y + uB.height),
                    vB = OB[oB] && OB[oB].value,
                    mB = Id(YB.state, YB.props.data, oB),
                    iB = OB[oB] ? {
                      x: "horizontal" === dB ? OB[oB].coordinate : HB,
                      y: "horizontal" === dB ? EB : OB[oB].coordinate
                    } : Ud;
                  YB.setState(fd(fd({}, BB), {}, {
                    activeLabel: vB,
                    activeCoordinate: iB,
                    activePayload: mB,
                    activeTooltipIndex: oB
                  }))
                } else YB.setState(BB)
              })), sd(YB, "renderCursor", (function(BB) {
                var dB, yB = YB.state,
                  pB = yB.isTooltipActive,
                  lB = yB.activeCoordinate,
                  JB = yB.activePayload,
                  gB = yB.offset,
                  oB = yB.activeTooltipIndex,
                  kB = yB.tooltipAxisBandSize,
                  LB = YB.getTooltipEventType(),
                  OB = null !== (dB = BB.props.active) && void 0 !== dB ? dB : pB,
                  DB = YB.props.layout,
                  uB = BB.key || "_recharts-cursor";
                return VB.createElement(pd, {
                  key: uB,
                  activeCoordinate: lB,
                  activePayload: JB,
                  activeTooltipIndex: oB,
                  chartName: TB,
                  element: BB,
                  isActive: OB,
                  layout: DB,
                  offset: gB,
                  tooltipAxisBandSize: kB,
                  tooltipEventType: LB
                })
              })), sd(YB, "renderPolarAxis", (function(BB, TB, dB) {
                var yB = kB()(BB, "type.axisType"),
                  pB = kB()(YB.state, "".concat(yB, "Map")),
                  lB = BB.type.defaultProps,
                  JB = void 0 !== lB ? fd(fd({}, lB), BB.props) : BB.props,
                  gB = pB && pB[JB["".concat(yB, "Id")]];
                return (0, VB.cloneElement)(BB, fd(fd({}, gB), {}, {
                  className: (0, HB.e)(yB, gB.className),
                  key: BB.key || "".concat(TB, "-").concat(dB),
                  ticks: (0, wB.Y)(gB, !0)
                }))
              })), sd(YB, "renderPolarGrid", (function(BB) {
                var TB = BB.props,
                  dB = TB.radialLines,
                  yB = TB.polarAngles,
                  pB = TB.polarRadius,
                  lB = YB.state,
                  JB = lB.radiusAxisMap,
                  gB = lB.angleAxisMap,
                  oB = (0, UB.k)(JB),
                  kB = (0, UB.k)(gB),
                  LB = kB.cx,
                  OB = kB.cy,
                  DB = kB.innerRadius,
                  uB = kB.outerRadius;
                return (0, VB.cloneElement)(BB, {
                  polarAngles: Array.isArray(yB) ? yB : (0, wB.Y)(kB, !0).map((function(BB) {
                    return BB.coordinate
                  })),
                  polarRadius: Array.isArray(pB) ? pB : (0, wB.Y)(oB, !0).map((function(BB) {
                    return BB.coordinate
                  })),
                  cx: LB,
                  cy: OB,
                  innerRadius: DB,
                  outerRadius: uB,
                  key: BB.key || "polar-grid",
                  radialLines: dB
                })
              })), sd(YB, "renderLegend", (function() {
                var BB = YB.state.formattedGraphicalItems,
                  TB = YB.props,
                  dB = TB.children,
                  yB = TB.width,
                  pB = TB.height,
                  lB = YB.props.margin || {},
                  JB = yB - (lB.left || 0) - (lB.right || 0),
                  gB = (0, AB.c)({
                    children: dB,
                    formattedGraphicalItems: BB,
                    legendWidth: JB,
                    legendContent: LB
                  });
                if (!gB) return null;
                var oB = gB.item,
                  kB = Ld(gB, Jd);
                return (0, VB.cloneElement)(oB, fd(fd({}, kB), {}, {
                  chartWidth: yB,
                  chartHeight: pB,
                  margin: lB,
                  onBBoxUpdate: YB.handleLegendBBoxUpdate
                }))
              })), sd(YB, "renderTooltip", (function() {
                var BB, TB = YB.props,
                  dB = TB.children,
                  yB = TB.accessibilityLayer,
                  pB = (0, sB.k)(dB, iB.b);
                if (!pB) return null;
                var lB = YB.state,
                  JB = lB.isTooltipActive,
                  gB = lB.activeCoordinate,
                  oB = lB.activePayload,
                  kB = lB.activeLabel,
                  LB = lB.offset,
                  OB = null !== (BB = pB.props.active) && void 0 !== BB ? BB : JB;
                return (0, VB.cloneElement)(pB, {
                  viewBox: fd(fd({}, LB), {}, {
                    x: LB.left,
                    y: LB.top
                  }),
                  active: OB,
                  label: kB,
                  payload: OB ? oB : [],
                  coordinate: gB,
                  accessibilityLayer: yB
                })
              })), sd(YB, "renderBrush", (function(BB) {
                var TB = YB.props,
                  dB = TB.margin,
                  yB = TB.data,
                  pB = YB.state,
                  lB = pB.offset,
                  JB = pB.dataStartIndex,
                  gB = pB.dataEndIndex,
                  oB = pB.updateId;
                return (0, VB.cloneElement)(BB, {
                  key: BB.key || "_recharts-brush",
                  onChange: (0, wB.n)(YB.handleBrushChange, BB.props.onChange),
                  data: yB,
                  x: (0, UB.y)(BB.props.x) ? BB.props.x : lB.left,
                  y: (0, UB.y)(BB.props.y) ? BB.props.y : lB.top + lB.height + lB.brushBottom - (dB.bottom || 0),
                  width: (0, UB.y)(BB.props.width) ? BB.props.width : lB.width,
                  startIndex: JB,
                  endIndex: gB,
                  updateId: "brush-".concat(oB)
                })
              })), sd(YB, "renderReferenceElement", (function(BB, TB, dB) {
                if (!BB) return null;
                var yB = YB.clipPathId,
                  pB = YB.state,
                  lB = pB.xAxisMap,
                  JB = pB.yAxisMap,
                  gB = pB.offset,
                  oB = BB.type.defaultProps || {},
                  kB = BB.props,
                  LB = kB.xAxisId,
                  OB = void 0 === LB ? oB.xAxisId : LB,
                  DB = kB.yAxisId,
                  uB = void 0 === DB ? oB.yAxisId : DB;
                return (0, VB.cloneElement)(BB, {
                  key: BB.key || "".concat(TB, "-").concat(dB),
                  xAxis: lB[OB],
                  yAxis: JB[uB],
                  viewBox: {
                    x: gB.left,
                    y: gB.top,
                    width: gB.width,
                    height: gB.height
                  },
                  clipPathId: yB
                })
              })), sd(YB, "renderActivePoints", (function(BB) {
                var TB = BB.item,
                  VB = BB.activePoint,
                  yB = BB.basePoint,
                  pB = BB.childIndex,
                  lB = BB.isRange,
                  JB = [],
                  YB = TB.props.key,
                  gB = void 0 !== TB.item.type.defaultProps ? fd(fd({}, TB.item.type.defaultProps), TB.item.props) : TB.item.props,
                  oB = gB.activeDot,
                  kB = fd(fd({
                    index: pB,
                    dataKey: gB.dataKey,
                    cx: VB.x,
                    cy: VB.y,
                    r: 4,
                    fill: (0, wB.N)(TB.item),
                    strokeWidth: 2,
                    stroke: "#fff",
                    payload: VB.payload,
                    value: VB.value
                  }, (0, sB.d)(oB, !1)), (0, ST.k)(oB));
                return JB.push(dB.renderActiveDot(oB, kB, "".concat(YB, "-activePoint-").concat(pB))), yB ? JB.push(dB.renderActiveDot(oB, fd(fd({}, kB), {}, {
                  cx: yB.x,
                  cy: yB.y
                }), "".concat(YB, "-basePoint-").concat(pB))) : lB && JB.push(null), JB
              })), sd(YB, "renderGraphicChild", (function(BB, TB, dB) {
                var yB = YB.filterFormatItem(BB, TB, dB);
                if (!yB) return null;
                var lB = YB.getTooltipEventType(),
                  JB = YB.state,
                  gB = JB.isTooltipActive,
                  oB = JB.tooltipAxis,
                  kB = JB.activeTooltipIndex,
                  LB = JB.activeLabel,
                  OB = YB.props.children,
                  DB = (0, sB.k)(OB, iB.b),
                  uB = yB.props,
                  HB = uB.points,
                  EB = uB.isRange,
                  vB = uB.baseLine,
                  mB = void 0 !== yB.item.type.defaultProps ? fd(fd({}, yB.item.type.defaultProps), yB.item.props) : yB.item.props,
                  NB = mB.activeDot,
                  tB = mB.hide,
                  fB = mB.activeBar,
                  MB = mB.activeShape,
                  zB = Boolean(!tB && gB && DB && (NB || fB || MB)),
                  FB = {};
                "axis" !== lB && DB && "click" === DB.props.trigger ? FB = {
                  onClick: (0, wB.n)(YB.handleItemMouseEnter, BB.props.onClick)
                } : "axis" !== lB && (FB = {
                  onMouseLeave: (0, wB.n)(YB.handleItemMouseLeave, BB.props.onMouseLeave),
                  onMouseEnter: (0, wB.n)(YB.handleItemMouseEnter, BB.props.onMouseEnter)
                });
                var KB = (0, VB.cloneElement)(BB, fd(fd({}, yB.props), FB));
                if (zB) {
                  if (!(kB >= 0)) {
                    var rB, IB = (null !== (rB = YB.getItemByXY(YB.state.activeCoordinate)) && void 0 !== rB ? rB : {
                        graphicalItem: KB
                      }).graphicalItem,
                      cB = IB.item,
                      SB = void 0 === cB ? BB : cB,
                      PB = IB.childIndex,
                      QB = fd(fd(fd({}, yB.props), FB), {}, {
                        activeIndex: PB
                      });
                    return [(0, VB.cloneElement)(SB, QB), null, null]
                  }
                  var RB, aB;
                  if (oB.dataKey && !oB.allowDuplicatedCategory) {
                    var ZB = "function" === typeof oB.dataKey ? function(BB) {
                      return "function" === typeof oB.dataKey ? oB.dataKey(BB.payload) : null
                    } : "payload.".concat(oB.dataKey.toString());
                    RB = (0, UB.h)(HB, ZB, LB), aB = EB && vB && (0, UB.h)(vB, ZB, LB)
                  } else RB = null === HB || void 0 === HB ? void 0 : HB[kB], aB = EB && vB && vB[kB];
                  if (MB || fB) {
                    var XB = void 0 !== BB.props.activeIndex ? BB.props.activeIndex : kB;
                    return [(0, VB.cloneElement)(BB, fd(fd(fd({}, yB.props), FB), {}, {
                      activeIndex: XB
                    })), null, null]
                  }
                  if (!pB()(RB)) return [KB].concat(vd(YB.renderActivePoints({
                    item: yB,
                    activePoint: RB,
                    basePoint: aB,
                    childIndex: kB,
                    isRange: EB
                  })))
                }
                return EB ? [KB, null, null] : [KB, null]
              })), sd(YB, "renderCustomized", (function(BB, TB, dB) {
                return (0, VB.cloneElement)(BB, fd(fd({
                  key: "recharts-customized-".concat(dB)
                }, YB.props), YB.state))
              })), sd(YB, "renderMap", {
                CartesianGrid: {
                  handler: Fd,
                  once: !0
                },
                ReferenceArea: {
                  handler: YB.renderReferenceElement
                },
                ReferenceLine: {
                  handler: Fd
                },
                ReferenceDot: {
                  handler: YB.renderReferenceElement
                },
                XAxis: {
                  handler: Fd
                },
                YAxis: {
                  handler: Fd
                },
                Brush: {
                  handler: YB.renderBrush,
                  once: !0
                },
                Bar: {
                  handler: YB.renderGraphicChild
                },
                Line: {
                  handler: YB.renderGraphicChild
                },
                Area: {
                  handler: YB.renderGraphicChild
                },
                Radar: {
                  handler: YB.renderGraphicChild
                },
                RadialBar: {
                  handler: YB.renderGraphicChild
                },
                Scatter: {
                  handler: YB.renderGraphicChild
                },
                Pie: {
                  handler: YB.renderGraphicChild
                },
                Funnel: {
                  handler: YB.renderGraphicChild
                },
                Tooltip: {
                  handler: YB.renderCursor,
                  once: !0
                },
                PolarGrid: {
                  handler: YB.renderPolarGrid,
                  once: !0
                },
                PolarAngleAxis: {
                  handler: YB.renderPolarAxis
                },
                PolarRadiusAxis: {
                  handler: YB.renderPolarAxis
                },
                Customized: {
                  handler: YB.renderCustomized
                }
              }), YB.clipPathId = "".concat(null !== (yB = BB.id) && void 0 !== yB ? yB : (0, UB.G)("recharts"), "-clip"), YB.throttleTriggeredAfterMouseMove = uB()(YB.triggeredAfterMouseMove, null !== (lB = BB.throttleDelay) && void 0 !== lB ? lB : 1e3 / 60), YB.state = {}, YB
            }
            return function(BB, TB) {
              if ("function" !== typeof TB && null !== TB) throw new TypeError("Super expression must either be null or a function");
              BB.prototype = Object.create(TB && TB.prototype, {
                constructor: {
                  value: BB,
                  writable: !0,
                  configurable: !0
                }
              }), Object.defineProperty(BB, "prototype", {
                writable: !1
              }), TB && Ed(BB, TB)
            }(dB, BB), yB = dB, YB = [{
              key: "componentDidMount",
              value: function() {
                var BB, TB;
                this.addListener(), this.accessibilityManager.setDetails({
                  container: this.container,
                  offset: {
                    left: null !== (BB = this.props.margin.left) && void 0 !== BB ? BB : 0,
                    top: null !== (TB = this.props.margin.top) && void 0 !== TB ? TB : 0
                  },
                  coordinateList: this.state.tooltipTicks,
                  mouseHandlerCallback: this.triggeredAfterMouseMove,
                  layout: this.props.layout
                }), this.displayDefaultTooltip()
              }
            }, {
              key: "displayDefaultTooltip",
              value: function() {
                var BB = this.props,
                  TB = BB.children,
                  dB = BB.data,
                  VB = BB.height,
                  yB = BB.layout,
                  pB = (0, sB.k)(TB, iB.b);
                if (pB) {
                  var lB = pB.props.defaultIndex;
                  if (!("number" !== typeof lB || lB < 0 || lB > this.state.tooltipTicks.length - 1)) {
                    var JB = this.state.tooltipTicks[lB] && this.state.tooltipTicks[lB].value,
                      YB = Id(this.state, dB, lB, JB),
                      gB = this.state.tooltipTicks[lB].coordinate,
                      oB = (this.state.offset.top + VB) / 2,
                      kB = "horizontal" === yB ? {
                        x: gB,
                        y: oB
                      } : {
                        y: gB,
                        x: oB
                      },
                      LB = this.state.formattedGraphicalItems.find((function(BB) {
                        return "Scatter" === BB.item.type.name
                      }));
                    LB && (kB = fd(fd({}, kB), LB.props.points[lB].tooltipPosition), YB = LB.props.points[lB].tooltipPayload);
                    var OB = {
                      activeTooltipIndex: lB,
                      isTooltipActive: !0,
                      activeLabel: JB,
                      activePayload: YB,
                      activeCoordinate: kB
                    };
                    this.setState(OB), this.renderCursor(pB), this.accessibilityManager.setIndex(lB)
                  }
                }
              }
            }, {
              key: "getSnapshotBeforeUpdate",
              value: function(BB, TB) {
                return this.props.accessibilityLayer ? (this.state.tooltipTicks !== TB.tooltipTicks && this.accessibilityManager.setDetails({
                  coordinateList: this.state.tooltipTicks
                }), this.props.layout !== BB.layout && this.accessibilityManager.setDetails({
                  layout: this.props.layout
                }), this.props.margin !== BB.margin && this.accessibilityManager.setDetails({
                  offset: {
                    left: null !== (dB = this.props.margin.left) && void 0 !== dB ? dB : 0,
                    top: null !== (VB = this.props.margin.top) && void 0 !== VB ? VB : 0
                  }
                }), null) : null;
                var dB, VB
              }
            }, {
              key: "componentDidUpdate",
              value: function(BB) {
                (0, sB.s)([(0, sB.k)(BB.children, iB.b)], [(0, sB.k)(this.props.children, iB.b)]) || this.displayDefaultTooltip()
              }
            }, {
              key: "componentWillUnmount",
              value: function() {
                this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel()
              }
            }, {
              key: "getTooltipEventType",
              value: function() {
                var BB = (0, sB.k)(this.props.children, iB.b);
                if (BB && "boolean" === typeof BB.props.shared) {
                  var TB = BB.props.shared ? "axis" : "item";
                  return gB.indexOf(TB) >= 0 ? TB : lB
                }
                return lB
              }
            }, {
              key: "getMouseInfo",
              value: function(BB) {
                if (!this.container) return null;
                var TB = this.container,
                  dB = TB.getBoundingClientRect(),
                  VB = (0, jB.d)(dB),
                  yB = {
                    chartX: Math.round(BB.pageX - VB.left),
                    chartY: Math.round(BB.pageY - VB.top)
                  },
                  pB = dB.width / TB.offsetWidth || 1,
                  lB = this.inRange(yB.chartX, yB.chartY, pB);
                if (!lB) return null;
                var JB = this.state,
                  YB = JB.xAxisMap,
                  gB = JB.yAxisMap,
                  oB = this.getTooltipEventType(),
                  kB = cd(this.state, this.props.data, this.props.layout, lB);
                if ("axis" !== oB && YB && gB) {
                  var LB = (0, UB.k)(YB).scale,
                    OB = (0, UB.k)(gB).scale,
                    DB = LB && LB.invert ? LB.invert(yB.chartX) : null,
                    uB = OB && OB.invert ? OB.invert(yB.chartY) : null;
                  return fd(fd({}, yB), {}, {
                    xValue: DB,
                    yValue: uB
                  }, kB)
                }
                return kB ? fd(fd({}, yB), kB) : null
              }
            }, {
              key: "inRange",
              value: function(BB, TB) {
                var dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                  VB = this.props.layout,
                  yB = BB / dB,
                  pB = TB / dB;
                if ("horizontal" === VB || "vertical" === VB) {
                  var lB = this.state.offset;
                  return yB >= lB.left && yB <= lB.left + lB.width && pB >= lB.top && pB <= lB.top + lB.height ? {
                    x: yB,
                    y: pB
                  } : null
                }
                var JB = this.state,
                  YB = JB.angleAxisMap,
                  gB = JB.radiusAxisMap;
                if (YB && gB) {
                  var oB = (0, UB.k)(YB);
                  return (0, FT.g)({
                    x: yB,
                    y: pB
                  }, oB)
                }
                return null
              }
            }, {
              key: "parseEventsOfWrapper",
              value: function() {
                var BB = this.props.children,
                  TB = this.getTooltipEventType(),
                  dB = (0, sB.k)(BB, iB.b),
                  VB = {};
                return dB && "axis" === TB && (VB = "click" === dB.props.trigger ? {
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
                }), fd(fd({}, (0, ST.k)(this.props, this.handleOuterEvent)), VB)
              }
            }, {
              key: "addListener",
              value: function() {
                IT.on(cT, this.handleReceiveSyncEvent)
              }
            }, {
              key: "removeListener",
              value: function() {
                IT.removeListener(cT, this.handleReceiveSyncEvent)
              }
            }, {
              key: "filterFormatItem",
              value: function(BB, TB, dB) {
                for (var VB = this.state.formattedGraphicalItems, yB = 0, pB = VB.length; yB < pB; yB++) {
                  var lB = VB[yB];
                  if (lB.item === BB || lB.props.key === BB.key || TB === (0, sB.n)(lB.item.type) && dB === lB.childIndex) return lB
                }
                return null
              }
            }, {
              key: "renderClipPath",
              value: function() {
                var BB = this.clipPathId,
                  TB = this.state.offset,
                  dB = TB.left,
                  yB = TB.top,
                  pB = TB.height,
                  lB = TB.width;
                return VB.createElement("defs", null, VB.createElement("clipPath", {
                  id: BB
                }, VB.createElement("rect", {
                  x: dB,
                  y: yB,
                  height: pB,
                  width: lB
                })))
              }
            }, {
              key: "getXScales",
              value: function() {
                var BB = this.state.xAxisMap;
                return BB ? Object.entries(BB).reduce((function(BB, TB) {
                  var dB = kd(TB, 2),
                    VB = dB[0],
                    yB = dB[1];
                  return fd(fd({}, BB), {}, sd({}, VB, yB.scale))
                }), {}) : null
              }
            }, {
              key: "getYScales",
              value: function() {
                var BB = this.state.yAxisMap;
                return BB ? Object.entries(BB).reduce((function(BB, TB) {
                  var dB = kd(TB, 2),
                    VB = dB[0],
                    yB = dB[1];
                  return fd(fd({}, BB), {}, sd({}, VB, yB.scale))
                }), {}) : null
              }
            }, {
              key: "getXScaleByAxisId",
              value: function(BB) {
                var TB;
                return null === (TB = this.state.xAxisMap) || void 0 === TB || null === (TB = TB[BB]) || void 0 === TB ? void 0 : TB.scale
              }
            }, {
              key: "getYScaleByAxisId",
              value: function(BB) {
                var TB;
                return null === (TB = this.state.yAxisMap) || void 0 === TB || null === (TB = TB[BB]) || void 0 === TB ? void 0 : TB.scale
              }
            }, {
              key: "getItemByXY",
              value: function(BB) {
                var TB = this.state,
                  dB = TB.formattedGraphicalItems,
                  VB = TB.activeItem;
                if (dB && dB.length)
                  for (var yB = 0, pB = dB.length; yB < pB; yB++) {
                    var lB = dB[yB],
                      JB = lB.props,
                      YB = lB.item,
                      gB = void 0 !== YB.type.defaultProps ? fd(fd({}, YB.type.defaultProps), YB.props) : YB.props,
                      oB = (0, sB.n)(YB.type);
                    if ("Bar" === oB) {
                      var kB = (JB.data || []).find((function(TB) {
                        return (0, fB.d)(BB, TB)
                      }));
                      if (kB) return {
                        graphicalItem: lB,
                        payload: kB
                      }
                    } else if ("RadialBar" === oB) {
                      var LB = (JB.data || []).find((function(TB) {
                        return (0, FT.g)(BB, TB)
                      }));
                      if (LB) return {
                        graphicalItem: lB,
                        payload: LB
                      }
                    } else if ((0, XT.i)(lB, VB) || (0, XT.j)(lB, VB) || (0, XT.l)(lB, VB)) {
                      var OB = (0, XT.g)({
                          graphicalItem: lB,
                          activeTooltipItem: VB,
                          itemData: gB.data
                        }),
                        DB = void 0 === gB.activeIndex ? OB : gB.activeIndex;
                      return {
                        graphicalItem: fd(fd({}, lB), {}, {
                          childIndex: DB
                        }),
                        payload: (0, XT.l)(lB, VB) ? gB.data[OB] : lB.props.data[OB]
                      }
                    }
                  }
                return null
              }
            }, {
              key: "render",
              value: function() {
                var BB = this;
                if (!(0, sB.x)(this)) return null;
                var TB, dB, yB = this.props,
                  pB = yB.children,
                  lB = yB.className,
                  JB = yB.width,
                  YB = yB.height,
                  gB = yB.style,
                  oB = yB.compact,
                  kB = yB.title,
                  LB = yB.desc,
                  OB = Ld(yB, Yd),
                  DB = (0, sB.d)(OB, !1);
                if (oB) return VB.createElement(ld.d, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, VB.createElement(vB.e, od({}, DB, {
                  width: JB,
                  height: YB,
                  title: kB,
                  desc: LB
                }), this.renderClipPath(), (0, sB.w)(pB, this.renderMap)));
                this.props.accessibilityLayer && (DB.tabIndex = null !== (TB = this.props.tabIndex) && void 0 !== TB ? TB : 0, DB.role = null !== (dB = this.props.role) && void 0 !== dB ? dB : "application", DB.onKeyDown = function(TB) {
                  BB.accessibilityManager.keyboardEvent(TB)
                }, DB.onFocus = function() {
                  BB.accessibilityManager.focus()
                });
                var uB = this.parseEventsOfWrapper();
                return VB.createElement(ld.d, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, VB.createElement("div", od({
                  className: (0, HB.e)("recharts-wrapper", lB),
                  style: fd({
                    position: "relative",
                    cursor: "default",
                    width: JB,
                    height: YB
                  }, gB)
                }, uB, {
                  ref: function(TB) {
                    BB.container = TB
                  }
                }), VB.createElement(vB.e, od({}, DB, {
                  width: JB,
                  height: YB,
                  title: kB,
                  desc: LB,
                  style: wd
                }), this.renderClipPath(), (0, sB.w)(pB, this.renderMap)), this.renderLegend(), this.renderTooltip()))
              }
            }], YB && Od(yB.prototype, YB), oB && Od(yB, oB), Object.defineProperty(yB, "prototype", {
              writable: !1
            }), yB;
            var yB, YB, oB
          }(VB.Component);
        sd(KB, "displayName", TB), sd(KB, "defaultProps", fd({
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
        }, MB)), sd(KB, "getDerivedStateFromProps", (function(BB, TB) {
          var dB = BB.dataKey,
            VB = BB.data,
            yB = BB.children,
            lB = BB.width,
            JB = BB.height,
            YB = BB.layout,
            gB = BB.stackOffset,
            oB = BB.margin,
            kB = TB.dataStartIndex,
            LB = TB.dataEndIndex;
          if (void 0 === TB.updateId) {
            var OB = Qd(BB);
            return fd(fd(fd({}, OB), {}, {
              updateId: 0
            }, FB(fd(fd({
              props: BB
            }, OB), {}, {
              updateId: 0
            }), TB)), {}, {
              prevDataKey: dB,
              prevData: VB,
              prevWidth: lB,
              prevHeight: JB,
              prevLayout: YB,
              prevStackOffset: gB,
              prevMargin: oB,
              prevChildren: yB
            })
          }
          if (dB !== TB.prevDataKey || VB !== TB.prevData || lB !== TB.prevWidth || JB !== TB.prevHeight || YB !== TB.prevLayout || gB !== TB.prevStackOffset || !(0, KT.d)(oB, TB.prevMargin)) {
            var DB = Qd(BB),
              uB = {
                chartX: TB.chartX,
                chartY: TB.chartY,
                isTooltipActive: TB.isTooltipActive
              },
              HB = fd(fd({}, cd(TB, VB, YB)), {}, {
                updateId: TB.updateId + 1
              }),
              EB = fd(fd(fd({}, DB), uB), HB);
            return fd(fd(fd({}, EB), FB(fd({
              props: BB
            }, EB), TB)), {}, {
              prevDataKey: dB,
              prevData: VB,
              prevWidth: lB,
              prevHeight: JB,
              prevLayout: YB,
              prevStackOffset: gB,
              prevMargin: oB,
              prevChildren: yB
            })
          }
          if (!(0, sB.s)(yB, TB.prevChildren)) {
            var vB, mB, iB, NB, tB = (0, sB.k)(yB, xB),
              fB = tB && null !== (vB = null === (mB = tB.props) || void 0 === mB ? void 0 : mB.startIndex) && void 0 !== vB ? vB : kB,
              MB = tB && null !== (iB = null === (NB = tB.props) || void 0 === NB ? void 0 : NB.endIndex) && void 0 !== iB ? iB : LB,
              zB = fB !== kB || MB !== LB,
              wB = !pB()(VB) && !zB ? TB.updateId : TB.updateId + 1;
            return fd(fd({
              updateId: wB
            }, FB(fd(fd({
              props: BB
            }, TB), {}, {
              updateId: wB,
              dataStartIndex: fB,
              dataEndIndex: MB
            }), TB)), {}, {
              prevChildren: yB,
              dataStartIndex: fB,
              dataEndIndex: MB
            })
          }
          return null
        })), sd(KB, "renderActiveDot", (function(BB, TB, dB) {
          var yB;
          return yB = (0, VB.isValidElement)(BB) ? (0, VB.cloneElement)(BB, TB) : JB()(BB) ? BB(TB) : VB.createElement(tB.e, TB), VB.createElement(mB.c, {
            className: "recharts-active-dot",
            key: dB
          }, yB)
        }));
        var rB = (0, VB.forwardRef)((function(BB, TB) {
          return VB.createElement(KB, od({}, BB, {
            ref: TB
          }))
        }));
        return rB.displayName = KB.displayName, rB
      }
  },
  5656: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => VB
    });
    var VB = function(BB) {
      return null
    };
    VB.displayName = "Cell"
  },
  5596: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => FB
    });
    var VB = dB(62),
      yB = dB(4809),
      pB = dB.n(yB),
      lB = dB(4660),
      JB = dB.n(lB),
      YB = dB(4505),
      gB = dB.n(YB),
      oB = dB(4486),
      kB = dB(5504),
      LB = dB(4819),
      OB = dB(4572),
      DB = dB(5601);

    function uB(BB) {
      return uB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, uB(BB)
    }
    var HB = ["offset"];

    function EB(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return vB(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || function(BB, TB) {
        if (!BB) return;
        if ("string" === typeof BB) return vB(BB, TB);
        var dB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === dB && BB.constructor && (dB = BB.constructor.name);
        if ("Map" === dB || "Set" === dB) return Array.from(BB);
        if ("Arguments" === dB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(dB)) return vB(BB, TB)
      }(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function vB(BB, TB) {
      (null == TB || TB > BB.length) && (TB = BB.length);
      for (var dB = 0, VB = new Array(TB); dB < TB; dB++) VB[dB] = BB[dB];
      return VB
    }

    function mB(BB, TB) {
      if (null == BB) return {};
      var dB, VB, yB = function(BB, TB) {
        if (null == BB) return {};
        var dB = {};
        for (var VB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, VB)) {
            if (TB.indexOf(VB) >= 0) continue;
            dB[VB] = BB[VB]
          } return dB
      }(BB, TB);
      if (Object.getOwnPropertySymbols) {
        var pB = Object.getOwnPropertySymbols(BB);
        for (VB = 0; VB < pB.length; VB++) dB = pB[VB], TB.indexOf(dB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, dB) && (yB[dB] = BB[dB])
      }
      return yB
    }

    function iB(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function NB(BB) {
      for (var TB = 1; TB < arguments.length; TB++) {
        var dB = null != arguments[TB] ? arguments[TB] : {};
        TB % 2 ? iB(Object(dB), !0).forEach((function(TB) {
          tB(BB, TB, dB[TB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : iB(Object(dB)).forEach((function(TB) {
          Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
        }))
      }
      return BB
    }

    function tB(BB, TB, dB) {
      return (TB = function(BB) {
        var TB = function(BB, TB) {
          if ("object" != uB(BB) || !BB) return BB;
          var dB = BB[Symbol.toPrimitive];
          if (void 0 !== dB) {
            var VB = dB.call(BB, TB || "default");
            if ("object" != uB(VB)) return VB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === TB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == uB(TB) ? TB : TB + ""
      }(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }

    function fB() {
      return fB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var TB = 1; TB < arguments.length; TB++) {
          var dB = arguments[TB];
          for (var VB in dB) Object.prototype.hasOwnProperty.call(dB, VB) && (BB[VB] = dB[VB])
        }
        return BB
      }, fB.apply(this, arguments)
    }
    var sB = function(BB) {
        var TB = BB.value,
          dB = BB.formatter,
          VB = pB()(BB.children) ? TB : BB.children;
        return JB()(dB) ? dB(VB) : VB
      },
      MB = function(BB, TB, dB) {
        var yB, lB, JB = BB.position,
          YB = BB.viewBox,
          gB = BB.offset,
          kB = BB.className,
          LB = YB,
          uB = LB.cx,
          HB = LB.cy,
          EB = LB.innerRadius,
          vB = LB.outerRadius,
          mB = LB.startAngle,
          iB = LB.endAngle,
          NB = LB.clockWise,
          tB = (EB + vB) / 2,
          sB = function(BB, TB) {
            return (0, OB.C)(TB - BB) * Math.min(Math.abs(TB - BB), 360)
          }(mB, iB),
          MB = sB >= 0 ? 1 : -1;
        "insideStart" === JB ? (yB = mB + MB * gB, lB = NB) : "insideEnd" === JB ? (yB = iB - MB * gB, lB = !NB) : "end" === JB && (yB = iB + MB * gB, lB = NB), lB = sB <= 0 ? lB : !lB;
        var zB = (0, DB.j)(uB, HB, tB, yB),
          wB = (0, DB.j)(uB, HB, tB, yB + 359 * (lB ? 1 : -1)),
          UB = "M".concat(zB.x, ",").concat(zB.y, "\n    A").concat(tB, ",").concat(tB, ",0,1,").concat(lB ? 0 : 1, ",\n    ").concat(wB.x, ",").concat(wB.y),
          FB = pB()(BB.id) ? (0, OB.G)("recharts-radial-line-") : BB.id;
        return VB.createElement("text", fB({}, dB, {
          dominantBaseline: "central",
          className: (0, oB.e)("recharts-radial-bar-label", kB)
        }), VB.createElement("defs", null, VB.createElement("path", {
          id: FB,
          d: UB
        })), VB.createElement("textPath", {
          xlinkHref: "#".concat(FB)
        }, TB))
      },
      zB = function(BB) {
        var TB = BB.viewBox,
          dB = BB.offset,
          VB = BB.position,
          yB = TB,
          pB = yB.cx,
          lB = yB.cy,
          JB = yB.innerRadius,
          YB = yB.outerRadius,
          gB = (yB.startAngle + yB.endAngle) / 2;
        if ("outside" === VB) {
          var oB = (0, DB.j)(pB, lB, YB + dB, gB),
            kB = oB.x;
          return {
            x: kB,
            y: oB.y,
            textAnchor: kB >= pB ? "start" : "end",
            verticalAnchor: "middle"
          }
        }
        if ("center" === VB) return {
          x: pB,
          y: lB,
          textAnchor: "middle",
          verticalAnchor: "middle"
        };
        if ("centerTop" === VB) return {
          x: pB,
          y: lB,
          textAnchor: "middle",
          verticalAnchor: "start"
        };
        if ("centerBottom" === VB) return {
          x: pB,
          y: lB,
          textAnchor: "middle",
          verticalAnchor: "end"
        };
        var LB = (JB + YB) / 2,
          OB = (0, DB.j)(pB, lB, LB, gB);
        return {
          x: OB.x,
          y: OB.y,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }
      },
      wB = function(BB) {
        var TB = BB.viewBox,
          dB = BB.parentViewBox,
          VB = BB.offset,
          yB = BB.position,
          pB = TB,
          lB = pB.x,
          JB = pB.y,
          YB = pB.width,
          oB = pB.height,
          kB = oB >= 0 ? 1 : -1,
          LB = kB * VB,
          DB = kB > 0 ? "end" : "start",
          uB = kB > 0 ? "start" : "end",
          HB = YB >= 0 ? 1 : -1,
          EB = HB * VB,
          vB = HB > 0 ? "end" : "start",
          mB = HB > 0 ? "start" : "end";
        if ("top" === yB) return NB(NB({}, {
          x: lB + YB / 2,
          y: JB - kB * VB,
          textAnchor: "middle",
          verticalAnchor: DB
        }), dB ? {
          height: Math.max(JB - dB.y, 0),
          width: YB
        } : {});
        if ("bottom" === yB) return NB(NB({}, {
          x: lB + YB / 2,
          y: JB + oB + LB,
          textAnchor: "middle",
          verticalAnchor: uB
        }), dB ? {
          height: Math.max(dB.y + dB.height - (JB + oB), 0),
          width: YB
        } : {});
        if ("left" === yB) {
          var iB = {
            x: lB - EB,
            y: JB + oB / 2,
            textAnchor: vB,
            verticalAnchor: "middle"
          };
          return NB(NB({}, iB), dB ? {
            width: Math.max(iB.x - dB.x, 0),
            height: oB
          } : {})
        }
        if ("right" === yB) {
          var tB = {
            x: lB + YB + EB,
            y: JB + oB / 2,
            textAnchor: mB,
            verticalAnchor: "middle"
          };
          return NB(NB({}, tB), dB ? {
            width: Math.max(dB.x + dB.width - tB.x, 0),
            height: oB
          } : {})
        }
        var fB = dB ? {
          width: YB,
          height: oB
        } : {};
        return "insideLeft" === yB ? NB({
          x: lB + EB,
          y: JB + oB / 2,
          textAnchor: mB,
          verticalAnchor: "middle"
        }, fB) : "insideRight" === yB ? NB({
          x: lB + YB - EB,
          y: JB + oB / 2,
          textAnchor: vB,
          verticalAnchor: "middle"
        }, fB) : "insideTop" === yB ? NB({
          x: lB + YB / 2,
          y: JB + LB,
          textAnchor: "middle",
          verticalAnchor: uB
        }, fB) : "insideBottom" === yB ? NB({
          x: lB + YB / 2,
          y: JB + oB - LB,
          textAnchor: "middle",
          verticalAnchor: DB
        }, fB) : "insideTopLeft" === yB ? NB({
          x: lB + EB,
          y: JB + LB,
          textAnchor: mB,
          verticalAnchor: uB
        }, fB) : "insideTopRight" === yB ? NB({
          x: lB + YB - EB,
          y: JB + LB,
          textAnchor: vB,
          verticalAnchor: uB
        }, fB) : "insideBottomLeft" === yB ? NB({
          x: lB + EB,
          y: JB + oB - LB,
          textAnchor: mB,
          verticalAnchor: DB
        }, fB) : "insideBottomRight" === yB ? NB({
          x: lB + YB - EB,
          y: JB + oB - LB,
          textAnchor: vB,
          verticalAnchor: DB
        }, fB) : gB()(yB) && ((0, OB.y)(yB.x) || (0, OB.z)(yB.x)) && ((0, OB.y)(yB.y) || (0, OB.z)(yB.y)) ? NB({
          x: lB + (0, OB.n)(yB.x, YB),
          y: JB + (0, OB.n)(yB.y, oB),
          textAnchor: "end",
          verticalAnchor: "end"
        }, fB) : NB({
          x: lB + YB / 2,
          y: JB + oB / 2,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }, fB)
      },
      UB = function(BB) {
        return "cx" in BB && (0, OB.y)(BB.cx)
      };

    function FB(BB) {
      var TB, dB = BB.offset,
        yB = NB({
          offset: void 0 === dB ? 5 : dB
        }, mB(BB, HB)),
        lB = yB.viewBox,
        YB = yB.position,
        gB = yB.value,
        OB = yB.children,
        DB = yB.content,
        uB = yB.className,
        EB = void 0 === uB ? "" : uB,
        vB = yB.textBreakAll;
      if (!lB || pB()(gB) && pB()(OB) && !(0, VB.isValidElement)(DB) && !JB()(DB)) return null;
      if ((0, VB.isValidElement)(DB)) return (0, VB.cloneElement)(DB, yB);
      if (JB()(DB)) {
        if (TB = (0, VB.createElement)(DB, yB), (0, VB.isValidElement)(TB)) return TB
      } else TB = sB(yB);
      var iB = UB(lB),
        tB = (0, LB.d)(yB, !0);
      if (iB && ("insideStart" === YB || "insideEnd" === YB || "end" === YB)) return MB(yB, TB, tB);
      var FB = iB ? zB(yB) : wB(yB);
      return VB.createElement(kB.e, fB({
        className: (0, oB.e)("recharts-label", EB)
      }, tB, FB, {
        breakAll: vB
      }), TB)
    }
    FB.displayName = "Label";
    var KB = function(BB) {
      var TB = BB.cx,
        dB = BB.cy,
        VB = BB.angle,
        yB = BB.startAngle,
        pB = BB.endAngle,
        lB = BB.r,
        JB = BB.radius,
        YB = BB.innerRadius,
        gB = BB.outerRadius,
        oB = BB.x,
        kB = BB.y,
        LB = BB.top,
        DB = BB.left,
        uB = BB.width,
        HB = BB.height,
        EB = BB.clockWise,
        vB = BB.labelViewBox;
      if (vB) return vB;
      if ((0, OB.y)(uB) && (0, OB.y)(HB)) {
        if ((0, OB.y)(oB) && (0, OB.y)(kB)) return {
          x: oB,
          y: kB,
          width: uB,
          height: HB
        };
        if ((0, OB.y)(LB) && (0, OB.y)(DB)) return {
          x: LB,
          y: DB,
          width: uB,
          height: HB
        }
      }
      return (0, OB.y)(oB) && (0, OB.y)(kB) ? {
        x: oB,
        y: kB,
        width: 0,
        height: 0
      } : (0, OB.y)(TB) && (0, OB.y)(dB) ? {
        cx: TB,
        cy: dB,
        startAngle: yB || VB || 0,
        endAngle: pB || VB || 0,
        innerRadius: YB || 0,
        outerRadius: gB || JB || lB || 0,
        clockWise: EB
      } : BB.viewBox ? BB.viewBox : {}
    };
    FB.parseViewBox = KB, FB.renderCallByParent = function(BB, TB) {
      var dB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!BB || !BB.children && dB && !BB.label) return null;
      var yB = BB.children,
        pB = KB(BB),
        lB = (0, LB.h)(yB, FB).map((function(BB, dB) {
          return (0, VB.cloneElement)(BB, {
            viewBox: TB || pB,
            key: "label-".concat(dB)
          })
        }));
      if (!dB) return lB;
      var YB = function(BB, TB) {
        return BB ? !0 === BB ? VB.createElement(FB, {
          key: "label-implicit",
          viewBox: TB
        }) : (0, OB.w)(BB) ? VB.createElement(FB, {
          key: "label-implicit",
          viewBox: TB,
          value: BB
        }) : (0, VB.isValidElement)(BB) ? BB.type === FB ? (0, VB.cloneElement)(BB, {
          key: "label-implicit",
          viewBox: TB
        }) : VB.createElement(FB, {
          key: "label-implicit",
          content: BB,
          viewBox: TB
        }) : JB()(BB) ? VB.createElement(FB, {
          key: "label-implicit",
          content: BB,
          viewBox: TB
        }) : gB()(BB) ? VB.createElement(FB, fB({
          viewBox: TB
        }, BB, {
          key: "label-implicit"
        })) : null : null
      }(BB.label, TB || pB);
      return [YB].concat(EB(lB))
    }
  },
  5660: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => wB
    });
    var VB = dB(62),
      yB = dB(4809),
      pB = dB.n(yB),
      lB = dB(4505),
      JB = dB.n(lB),
      YB = dB(4660),
      gB = dB.n(YB),
      oB = dB(5662),
      kB = dB.n(oB),
      LB = dB(5596),
      OB = dB(5361),
      DB = dB(4819),
      uB = dB(5518);

    function HB(BB) {
      return HB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, HB(BB)
    }
    var EB = ["valueAccessor"],
      vB = ["data", "dataKey", "clockWise", "id", "textBreakAll"];

    function mB(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return iB(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || function(BB, TB) {
        if (!BB) return;
        if ("string" === typeof BB) return iB(BB, TB);
        var dB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === dB && BB.constructor && (dB = BB.constructor.name);
        if ("Map" === dB || "Set" === dB) return Array.from(BB);
        if ("Arguments" === dB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(dB)) return iB(BB, TB)
      }(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function iB(BB, TB) {
      (null == TB || TB > BB.length) && (TB = BB.length);
      for (var dB = 0, VB = new Array(TB); dB < TB; dB++) VB[dB] = BB[dB];
      return VB
    }

    function NB() {
      return NB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var TB = 1; TB < arguments.length; TB++) {
          var dB = arguments[TB];
          for (var VB in dB) Object.prototype.hasOwnProperty.call(dB, VB) && (BB[VB] = dB[VB])
        }
        return BB
      }, NB.apply(this, arguments)
    }

    function tB(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function fB(BB) {
      for (var TB = 1; TB < arguments.length; TB++) {
        var dB = null != arguments[TB] ? arguments[TB] : {};
        TB % 2 ? tB(Object(dB), !0).forEach((function(TB) {
          sB(BB, TB, dB[TB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : tB(Object(dB)).forEach((function(TB) {
          Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
        }))
      }
      return BB
    }

    function sB(BB, TB, dB) {
      return (TB = function(BB) {
        var TB = function(BB, TB) {
          if ("object" != HB(BB) || !BB) return BB;
          var dB = BB[Symbol.toPrimitive];
          if (void 0 !== dB) {
            var VB = dB.call(BB, TB || "default");
            if ("object" != HB(VB)) return VB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === TB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == HB(TB) ? TB : TB + ""
      }(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }

    function MB(BB, TB) {
      if (null == BB) return {};
      var dB, VB, yB = function(BB, TB) {
        if (null == BB) return {};
        var dB = {};
        for (var VB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, VB)) {
            if (TB.indexOf(VB) >= 0) continue;
            dB[VB] = BB[VB]
          } return dB
      }(BB, TB);
      if (Object.getOwnPropertySymbols) {
        var pB = Object.getOwnPropertySymbols(BB);
        for (VB = 0; VB < pB.length; VB++) dB = pB[VB], TB.indexOf(dB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, dB) && (yB[dB] = BB[dB])
      }
      return yB
    }
    var zB = function(BB) {
      return Array.isArray(BB.value) ? kB()(BB.value) : BB.value
    };

    function wB(BB) {
      var TB = BB.valueAccessor,
        dB = void 0 === TB ? zB : TB,
        yB = MB(BB, EB),
        lB = yB.data,
        JB = yB.dataKey,
        YB = yB.clockWise,
        gB = yB.id,
        oB = yB.textBreakAll,
        kB = MB(yB, vB);
      return lB && lB.length ? VB.createElement(OB.c, {
        className: "recharts-label-list"
      }, lB.map((function(BB, TB) {
        var yB = pB()(JB) ? dB(BB, TB) : (0, uB.eb)(BB && BB.payload, JB),
          lB = pB()(gB) ? {} : {
            id: "".concat(gB, "-").concat(TB)
          };
        return VB.createElement(LB.c, NB({}, (0, DB.d)(BB, !0), kB, lB, {
          parentViewBox: BB.parentViewBox,
          value: yB,
          textBreakAll: oB,
          viewBox: LB.c.parseViewBox(pB()(YB) ? BB : fB(fB({}, BB), {}, {
            clockWise: YB
          })),
          key: "label-".concat(TB),
          index: TB
        }))
      }))) : null
    }
    wB.displayName = "LabelList", wB.renderCallByParent = function(BB, TB) {
      var dB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!BB || !BB.children && dB && !BB.label) return null;
      var yB = BB.children,
        pB = (0, DB.h)(yB, wB).map((function(BB, dB) {
          return (0, VB.cloneElement)(BB, {
            data: TB,
            key: "labelList-".concat(dB)
          })
        }));
      return dB ? [function(BB, TB) {
        return BB ? !0 === BB ? VB.createElement(wB, {
          key: "labelList-implicit",
          data: TB
        }) : VB.isValidElement(BB) || gB()(BB) ? VB.createElement(wB, {
          key: "labelList-implicit",
          data: TB,
          content: BB
        }) : JB()(BB) ? VB.createElement(wB, NB({
          data: TB
        }, BB, {
          key: "labelList-implicit"
        })) : null : null
      }(BB.label, TB)].concat(mB(pB)) : pB
    }
  },
  5420: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => aB
    });
    var VB = dB(62),
      yB = dB(4660),
      pB = dB.n(yB),
      lB = dB(4486),
      JB = dB(4812),
      YB = dB(5357),
      gB = dB(5426),
      oB = dB(4842);

    function kB(BB) {
      return kB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, kB(BB)
    }

    function LB() {
      return LB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var TB = 1; TB < arguments.length; TB++) {
          var dB = arguments[TB];
          for (var VB in dB) Object.prototype.hasOwnProperty.call(dB, VB) && (BB[VB] = dB[VB])
        }
        return BB
      }, LB.apply(this, arguments)
    }

    function OB(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function DB(BB, TB) {
      for (var dB = 0; dB < TB.length; dB++) {
        var VB = TB[dB];
        VB.enumerable = VB.enumerable || !1, VB.configurable = !0, "value" in VB && (VB.writable = !0), Object.defineProperty(BB, iB(VB.key), VB)
      }
    }

    function uB(BB, TB, dB) {
      return TB = EB(TB),
        function(BB, TB) {
          if (TB && ("object" === kB(TB) || "function" === typeof TB)) return TB;
          if (void 0 !== TB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, HB() ? Reflect.construct(TB, dB || [], EB(BB).constructor) : TB.apply(BB, dB))
    }

    function HB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (HB = function() {
        return !!BB
      })()
    }

    function EB(BB) {
      return EB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, EB(BB)
    }

    function vB(BB, TB) {
      return vB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, TB) {
        return BB.__proto__ = TB, BB
      }, vB(BB, TB)
    }

    function mB(BB, TB, dB) {
      return (TB = iB(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }

    function iB(BB) {
      var TB = function(BB, TB) {
        if ("object" != kB(BB) || !BB) return BB;
        var dB = BB[Symbol.toPrimitive];
        if (void 0 !== dB) {
          var VB = dB.call(BB, TB || "default");
          if ("object" != kB(VB)) return VB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === TB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == kB(TB) ? TB : TB + ""
    }
    var NB = 32,
      tB = function(BB) {
        function TB() {
          return function(BB, TB) {
            if (!(BB instanceof TB)) throw new TypeError("Cannot call a class as a function")
          }(this, TB), uB(this, TB, arguments)
        }
        return function(BB, TB) {
          if ("function" !== typeof TB && null !== TB) throw new TypeError("Super expression must either be null or a function");
          BB.prototype = Object.create(TB && TB.prototype, {
            constructor: {
              value: BB,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(BB, "prototype", {
            writable: !1
          }), TB && vB(BB, TB)
        }(TB, BB), dB = TB, yB = [{
          key: "renderIcon",
          value: function(BB) {
            var TB = this.props.inactiveColor,
              dB = 16,
              yB = NB / 6,
              pB = NB / 3,
              lB = BB.inactive ? TB : BB.color;
            if ("plainline" === BB.type) return VB.createElement("line", {
              strokeWidth: 4,
              fill: "none",
              stroke: lB,
              strokeDasharray: BB.payload.strokeDasharray,
              x1: 0,
              y1: dB,
              x2: NB,
              y2: dB,
              className: "recharts-legend-icon"
            });
            if ("line" === BB.type) return VB.createElement("path", {
              strokeWidth: 4,
              fill: "none",
              stroke: lB,
              d: "M0,".concat(dB, "h").concat(pB, "\n            A").concat(yB, ",").concat(yB, ",0,1,1,").concat(2 * pB, ",").concat(dB, "\n            H").concat(NB, "M").concat(2 * pB, ",").concat(dB, "\n            A").concat(yB, ",").concat(yB, ",0,1,1,").concat(pB, ",").concat(dB),
              className: "recharts-legend-icon"
            });
            if ("rect" === BB.type) return VB.createElement("path", {
              stroke: "none",
              fill: lB,
              d: "M0,".concat(4, "h").concat(NB, "v").concat(24, "h").concat(-32, "z"),
              className: "recharts-legend-icon"
            });
            if (VB.isValidElement(BB.legendIcon)) {
              var JB = function(BB) {
                for (var TB = 1; TB < arguments.length; TB++) {
                  var dB = null != arguments[TB] ? arguments[TB] : {};
                  TB % 2 ? OB(Object(dB), !0).forEach((function(TB) {
                    mB(BB, TB, dB[TB])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : OB(Object(dB)).forEach((function(TB) {
                    Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
                  }))
                }
                return BB
              }({}, BB);
              return delete JB.legendIcon, VB.cloneElement(BB.legendIcon, JB)
            }
            return VB.createElement(gB.e, {
              fill: lB,
              cx: dB,
              cy: dB,
              size: NB,
              sizeType: "diameter",
              type: BB.type
            })
          }
        }, {
          key: "renderItems",
          value: function() {
            var BB = this,
              TB = this.props,
              dB = TB.payload,
              yB = TB.iconSize,
              gB = TB.layout,
              kB = TB.formatter,
              OB = TB.inactiveColor,
              DB = {
                x: 0,
                y: 0,
                width: NB,
                height: NB
              },
              uB = {
                display: "horizontal" === gB ? "inline-block" : "block",
                marginRight: 10
              },
              HB = {
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: 4
              };
            return dB.map((function(TB, dB) {
              var gB = TB.formatter || kB,
                EB = (0, lB.e)(mB(mB({
                  "recharts-legend-item": !0
                }, "legend-item-".concat(dB), !0), "inactive", TB.inactive));
              if ("none" === TB.type) return null;
              var vB = pB()(TB.value) ? null : TB.value;
              (0, JB.e)(!pB()(TB.value), 'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>');
              var iB = TB.inactive ? OB : TB.color;
              return VB.createElement("li", LB({
                className: EB,
                style: uB,
                key: "legend-item-".concat(dB)
              }, (0, oB.o)(BB.props, TB, dB)), VB.createElement(YB.e, {
                width: yB,
                height: yB,
                viewBox: DB,
                style: HB
              }, BB.renderIcon(TB)), VB.createElement("span", {
                className: "recharts-legend-item-text",
                style: {
                  color: iB
                }
              }, gB ? gB(vB, TB, dB) : vB))
            }))
          }
        }, {
          key: "render",
          value: function() {
            var BB = this.props,
              TB = BB.payload,
              dB = BB.layout,
              yB = BB.align;
            if (!TB || !TB.length) return null;
            var pB = {
              padding: 0,
              margin: 0,
              textAlign: "horizontal" === dB ? yB : "left"
            };
            return VB.createElement("ul", {
              className: "recharts-default-legend",
              style: pB
            }, this.renderItems())
          }
        }], yB && DB(dB.prototype, yB), kB && DB(dB, kB), Object.defineProperty(dB, "prototype", {
          writable: !1
        }), dB;
        var dB, yB, kB
      }(VB.PureComponent);
    mB(tB, "displayName", "Legend"), mB(tB, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "middle",
      inactiveColor: "#ccc"
    });
    var fB = dB(4572),
      sB = dB(5375);

    function MB(BB) {
      return MB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, MB(BB)
    }
    var zB = ["ref"];

    function wB(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function UB(BB) {
      for (var TB = 1; TB < arguments.length; TB++) {
        var dB = null != arguments[TB] ? arguments[TB] : {};
        TB % 2 ? wB(Object(dB), !0).forEach((function(TB) {
          SB(BB, TB, dB[TB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : wB(Object(dB)).forEach((function(TB) {
          Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
        }))
      }
      return BB
    }

    function FB(BB, TB) {
      for (var dB = 0; dB < TB.length; dB++) {
        var VB = TB[dB];
        VB.enumerable = VB.enumerable || !1, VB.configurable = !0, "value" in VB && (VB.writable = !0), Object.defineProperty(BB, PB(VB.key), VB)
      }
    }

    function KB(BB, TB, dB) {
      return TB = IB(TB),
        function(BB, TB) {
          if (TB && ("object" === MB(TB) || "function" === typeof TB)) return TB;
          if (void 0 !== TB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, rB() ? Reflect.construct(TB, dB || [], IB(BB).constructor) : TB.apply(BB, dB))
    }

    function rB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (rB = function() {
        return !!BB
      })()
    }

    function IB(BB) {
      return IB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, IB(BB)
    }

    function cB(BB, TB) {
      return cB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, TB) {
        return BB.__proto__ = TB, BB
      }, cB(BB, TB)
    }

    function SB(BB, TB, dB) {
      return (TB = PB(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }

    function PB(BB) {
      var TB = function(BB, TB) {
        if ("object" != MB(BB) || !BB) return BB;
        var dB = BB[Symbol.toPrimitive];
        if (void 0 !== dB) {
          var VB = dB.call(BB, TB || "default");
          if ("object" != MB(VB)) return VB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === TB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == MB(TB) ? TB : TB + ""
    }

    function QB(BB, TB) {
      if (null == BB) return {};
      var dB, VB, yB = function(BB, TB) {
        if (null == BB) return {};
        var dB = {};
        for (var VB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, VB)) {
            if (TB.indexOf(VB) >= 0) continue;
            dB[VB] = BB[VB]
          } return dB
      }(BB, TB);
      if (Object.getOwnPropertySymbols) {
        var pB = Object.getOwnPropertySymbols(BB);
        for (VB = 0; VB < pB.length; VB++) dB = pB[VB], TB.indexOf(dB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, dB) && (yB[dB] = BB[dB])
      }
      return yB
    }

    function RB(BB) {
      return BB.value
    }
    var aB = function(BB) {
      function TB() {
        var BB;
        ! function(BB, TB) {
          if (!(BB instanceof TB)) throw new TypeError("Cannot call a class as a function")
        }(this, TB);
        for (var dB = arguments.length, VB = new Array(dB), yB = 0; yB < dB; yB++) VB[yB] = arguments[yB];
        return SB(BB = KB(this, TB, [].concat(VB)), "lastBoundingBox", {
          width: -1,
          height: -1
        }), BB
      }
      return function(BB, TB) {
        if ("function" !== typeof TB && null !== TB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(TB && TB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), TB && cB(BB, TB)
      }(TB, BB), dB = TB, pB = [{
        key: "getWithHeight",
        value: function(BB, TB) {
          var dB = UB(UB({}, this.defaultProps), BB.props).layout;
          return "vertical" === dB && (0, fB.y)(BB.props.height) ? {
            height: BB.props.height
          } : "horizontal" === dB ? {
            width: BB.props.width || TB
          } : null
        }
      }], (yB = [{
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
            var BB = this.wrapperNode.getBoundingClientRect();
            return BB.height = this.wrapperNode.offsetHeight, BB.width = this.wrapperNode.offsetWidth, BB
          }
          return null
        }
      }, {
        key: "updateBBox",
        value: function() {
          var BB = this.props.onBBoxUpdate,
            TB = this.getBBox();
          TB ? (Math.abs(TB.width - this.lastBoundingBox.width) > 1 || Math.abs(TB.height - this.lastBoundingBox.height) > 1) && (this.lastBoundingBox.width = TB.width, this.lastBoundingBox.height = TB.height, BB && BB(TB)) : -1 === this.lastBoundingBox.width && -1 === this.lastBoundingBox.height || (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, BB && BB(null))
        }
      }, {
        key: "getBBoxSnapshot",
        value: function() {
          return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? UB({}, this.lastBoundingBox) : {
            width: 0,
            height: 0
          }
        }
      }, {
        key: "getDefaultPosition",
        value: function(BB) {
          var TB, dB, VB = this.props,
            yB = VB.layout,
            pB = VB.align,
            lB = VB.verticalAlign,
            JB = VB.margin,
            YB = VB.chartWidth,
            gB = VB.chartHeight;
          return BB && (void 0 !== BB.left && null !== BB.left || void 0 !== BB.right && null !== BB.right) || (TB = "center" === pB && "vertical" === yB ? {
            left: ((YB || 0) - this.getBBoxSnapshot().width) / 2
          } : "right" === pB ? {
            right: JB && JB.right || 0
          } : {
            left: JB && JB.left || 0
          }), BB && (void 0 !== BB.top && null !== BB.top || void 0 !== BB.bottom && null !== BB.bottom) || (dB = "middle" === lB ? {
            top: ((gB || 0) - this.getBBoxSnapshot().height) / 2
          } : "bottom" === lB ? {
            bottom: JB && JB.bottom || 0
          } : {
            top: JB && JB.top || 0
          }), UB(UB({}, TB), dB)
        }
      }, {
        key: "render",
        value: function() {
          var BB = this,
            TB = this.props,
            dB = TB.content,
            yB = TB.width,
            pB = TB.height,
            lB = TB.wrapperStyle,
            JB = TB.payloadUniqBy,
            YB = TB.payload,
            gB = UB(UB({
              position: "absolute",
              width: yB || "auto",
              height: pB || "auto"
            }, this.getDefaultPosition(lB)), lB);
          return VB.createElement("div", {
            className: "recharts-legend-wrapper",
            style: gB,
            ref: function(TB) {
              BB.wrapperNode = TB
            }
          }, function(BB, TB) {
            if (VB.isValidElement(BB)) return VB.cloneElement(BB, TB);
            if ("function" === typeof BB) return VB.createElement(BB, TB);
            TB.ref;
            var dB = QB(TB, zB);
            return VB.createElement(tB, dB)
          }(dB, UB(UB({}, this.props), {}, {
            payload: (0, sB.d)(YB, JB, RB)
          })))
        }
      }]) && FB(dB.prototype, yB), pB && FB(dB, pB), Object.defineProperty(dB, "prototype", {
        writable: !1
      }), dB;
      var dB, yB, pB
    }(VB.PureComponent);
    SB(aB, "displayName", "Legend"), SB(aB, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom"
    })
  },
  4477: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => HB
    });
    var VB = dB(4486),
      yB = dB(62),
      pB = dB(4492),
      lB = dB.n(pB),
      JB = dB(4572),
      YB = dB(4812),
      gB = dB(4819);

    function oB(BB) {
      return oB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, oB(BB)
    }

    function kB(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function LB(BB) {
      for (var TB = 1; TB < arguments.length; TB++) {
        var dB = null != arguments[TB] ? arguments[TB] : {};
        TB % 2 ? kB(Object(dB), !0).forEach((function(TB) {
          OB(BB, TB, dB[TB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : kB(Object(dB)).forEach((function(TB) {
          Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
        }))
      }
      return BB
    }

    function OB(BB, TB, dB) {
      return (TB = function(BB) {
        var TB = function(BB, TB) {
          if ("object" != oB(BB) || !BB) return BB;
          var dB = BB[Symbol.toPrimitive];
          if (void 0 !== dB) {
            var VB = dB.call(BB, TB || "default");
            if ("object" != oB(VB)) return VB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === TB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == oB(TB) ? TB : TB + ""
      }(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }

    function DB(BB, TB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, TB) {
        var dB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != dB) {
          var VB, yB, pB, lB, JB = [],
            YB = !0,
            gB = !1;
          try {
            if (pB = (dB = dB.call(BB)).next, 0 === TB) {
              if (Object(dB) !== dB) return;
              YB = !1
            } else
              for (; !(YB = (VB = pB.call(dB)).done) && (JB.push(VB.value), JB.length !== TB); YB = !0);
          } catch (BB) {
            gB = !0, yB = BB
          } finally {
            try {
              if (!YB && null != dB.return && (lB = dB.return(), Object(lB) !== lB)) return
            } finally {
              if (gB) throw yB
            }
          }
          return JB
        }
      }(BB, TB) || function(BB, TB) {
        if (!BB) return;
        if ("string" === typeof BB) return uB(BB, TB);
        var dB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === dB && BB.constructor && (dB = BB.constructor.name);
        if ("Map" === dB || "Set" === dB) return Array.from(BB);
        if ("Arguments" === dB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(dB)) return uB(BB, TB)
      }(BB, TB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function uB(BB, TB) {
      (null == TB || TB > BB.length) && (TB = BB.length);
      for (var dB = 0, VB = new Array(TB); dB < TB; dB++) VB[dB] = BB[dB];
      return VB
    }
    var HB = (0, yB.forwardRef)((function(BB, TB) {
      var dB = BB.aspect,
        pB = BB.initialDimension,
        oB = void 0 === pB ? {
          width: -1,
          height: -1
        } : pB,
        kB = BB.width,
        OB = void 0 === kB ? "100%" : kB,
        uB = BB.height,
        HB = void 0 === uB ? "100%" : uB,
        EB = BB.minWidth,
        vB = void 0 === EB ? 0 : EB,
        mB = BB.minHeight,
        iB = BB.maxHeight,
        NB = BB.children,
        tB = BB.debounce,
        fB = void 0 === tB ? 0 : tB,
        sB = BB.id,
        MB = BB.className,
        zB = BB.qE,
        wB = BB.style,
        UB = void 0 === wB ? {} : wB,
        FB = (0, yB.useRef)(null),
        KB = (0, yB.useRef)();
      KB.current = zB, (0, yB.useImperativeHandle)(TB, (function() {
        return Object.defineProperty(FB.current, "current", {
          get: function() {
            return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), FB.current
          },
          configurable: !0
        })
      }));
      var rB = DB((0, yB.useState)({
          containerWidth: oB.width,
          containerHeight: oB.height
        }), 2),
        IB = rB[0],
        cB = rB[1],
        SB = (0, yB.useCallback)((function(BB, TB) {
          cB((function(dB) {
            var VB = Math.round(BB),
              yB = Math.round(TB);
            return dB.containerWidth === VB && dB.containerHeight === yB ? dB : {
              containerWidth: VB,
              containerHeight: yB
            }
          }))
        }), []);
      (0, yB.useEffect)((function() {
        var BB = function(BB) {
          var TB, dB = BB[0].contentRect,
            VB = dB.width,
            yB = dB.height;
          SB(VB, yB), null === (TB = KB.current) || void 0 === TB || TB.call(KB, VB, yB)
        };
        fB > 0 && (BB = lB()(BB, fB, {
          trailing: !0,
          leading: !1
        }));
        var TB = new ResizeObserver(BB),
          dB = FB.current.getBoundingClientRect(),
          VB = dB.width,
          yB = dB.height;
        return SB(VB, yB), TB.observe(FB.current),
          function() {
            TB.disconnect()
          }
      }), [SB, fB]);
      var PB = (0, yB.useMemo)((function() {
        var BB = IB.containerWidth,
          TB = IB.containerHeight;
        if (BB < 0 || TB < 0) return null;
        (0, YB.e)((0, JB.z)(OB) || (0, JB.z)(HB), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", OB, HB), (0, YB.e)(!dB || dB > 0, "The aspect(%s) must be greater than zero.", dB);
        var VB = (0, JB.z)(OB) ? BB : OB,
          pB = (0, JB.z)(HB) ? TB : HB;
        dB && dB > 0 && (VB ? pB = VB / dB : pB && (VB = pB * dB), iB && pB > iB && (pB = iB)), (0, YB.e)(VB > 0 || pB > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", VB, pB, OB, HB, vB, mB, dB);
        var lB = !Array.isArray(NB) && (0, gB.n)(NB.type).endsWith("Chart");
        return yB.Children.map(NB, (function(BB) {
          return yB.isValidElement(BB) ? (0, yB.cloneElement)(BB, LB({
            width: VB,
            height: pB
          }, lB ? {
            style: LB({
              height: "100%",
              width: "100%",
              maxHeight: pB,
              maxWidth: VB
            }, BB.props.style)
          } : {})) : BB
        }))
      }), [dB, NB, HB, iB, mB, vB, IB, OB]);
      return yB.createElement("div", {
        id: sB ? "".concat(sB) : void 0,
        className: (0, VB.e)("recharts-responsive-container", MB),
        style: LB(LB({}, UB), {}, {
          width: OB,
          height: HB,
          minWidth: vB,
          minHeight: mB,
          maxHeight: iB
        }),
        ref: FB
      }, PB)
    }))
  },
  5504: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => ZB
    });
    var VB = dB(62),
      yB = dB(4809),
      pB = dB.n(yB),
      lB = dB(4486),
      JB = dB(4572),
      YB = dB(5372),
      gB = dB(4819),
      oB = dB(5512);

    function kB(BB) {
      return kB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, kB(BB)
    }

    function LB(BB, TB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, TB) {
        var dB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != dB) {
          var VB, yB, pB, lB, JB = [],
            YB = !0,
            gB = !1;
          try {
            if (pB = (dB = dB.call(BB)).next, 0 === TB) {
              if (Object(dB) !== dB) return;
              YB = !1
            } else
              for (; !(YB = (VB = pB.call(dB)).done) && (JB.push(VB.value), JB.length !== TB); YB = !0);
          } catch (BB) {
            gB = !0, yB = BB
          } finally {
            try {
              if (!YB && null != dB.return && (lB = dB.return(), Object(lB) !== lB)) return
            } finally {
              if (gB) throw yB
            }
          }
          return JB
        }
      }(BB, TB) || function(BB, TB) {
        if (!BB) return;
        if ("string" === typeof BB) return OB(BB, TB);
        var dB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === dB && BB.constructor && (dB = BB.constructor.name);
        if ("Map" === dB || "Set" === dB) return Array.from(BB);
        if ("Arguments" === dB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(dB)) return OB(BB, TB)
      }(BB, TB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function OB(BB, TB) {
      (null == TB || TB > BB.length) && (TB = BB.length);
      for (var dB = 0, VB = new Array(TB); dB < TB; dB++) VB[dB] = BB[dB];
      return VB
    }

    function DB(BB, TB) {
      for (var dB = 0; dB < TB.length; dB++) {
        var VB = TB[dB];
        VB.enumerable = VB.enumerable || !1, VB.configurable = !0, "value" in VB && (VB.writable = !0), Object.defineProperty(BB, uB(VB.key), VB)
      }
    }

    function uB(BB) {
      var TB = function(BB, TB) {
        if ("object" != kB(BB) || !BB) return BB;
        var dB = BB[Symbol.toPrimitive];
        if (void 0 !== dB) {
          var VB = dB.call(BB, TB || "default");
          if ("object" != kB(VB)) return VB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === TB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == kB(TB) ? TB : TB + ""
    }
    var HB = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      EB = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      vB = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
      mB = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
      iB = {
        cm: 96 / 2.54,
        mm: 96 / 25.4,
        pt: 96 / 72,
        pc: 16,
        in: 96,
        Q: 96 / 101.6,
        px: 1
      },
      NB = Object.keys(iB),
      tB = "NaN";
    var fB = function() {
      function BB(TB, dB) {
        ! function(BB, TB) {
          if (!(BB instanceof TB)) throw new TypeError("Cannot call a class as a function")
        }(this, BB), this.num = TB, this.unit = dB, this.num = TB, this.unit = dB, Number.isNaN(TB) && (this.unit = ""), "" === dB || vB.test(dB) || (this.num = NaN, this.unit = ""), NB.includes(dB) && (this.num = function(BB, TB) {
          return BB * iB[TB]
        }(TB, dB), this.unit = "px")
      }
      return TB = BB, VB = [{
        key: "parse",
        value: function(TB) {
          var dB, VB = LB(null !== (dB = mB.exec(TB)) && void 0 !== dB ? dB : [], 3),
            yB = VB[1],
            pB = VB[2];
          return new BB(parseFloat(yB), null !== pB && void 0 !== pB ? pB : "")
        }
      }], (dB = [{
        key: "add",
        value: function(TB) {
          return this.unit !== TB.unit ? new BB(NaN, "") : new BB(this.num + TB.num, this.unit)
        }
      }, {
        key: "subtract",
        value: function(TB) {
          return this.unit !== TB.unit ? new BB(NaN, "") : new BB(this.num - TB.num, this.unit)
        }
      }, {
        key: "multiply",
        value: function(TB) {
          return "" !== this.unit && "" !== TB.unit && this.unit !== TB.unit ? new BB(NaN, "") : new BB(this.num * TB.num, this.unit || TB.unit)
        }
      }, {
        key: "divide",
        value: function(TB) {
          return "" !== this.unit && "" !== TB.unit && this.unit !== TB.unit ? new BB(NaN, "") : new BB(this.num / TB.num, this.unit || TB.unit)
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
      }]) && DB(TB.prototype, dB), VB && DB(TB, VB), Object.defineProperty(TB, "prototype", {
        writable: !1
      }), TB;
      var TB, dB, VB
    }();

    function sB(BB) {
      if (BB.includes(tB)) return tB;
      for (var TB = BB; TB.includes("*") || TB.includes("/");) {
        var dB, VB = LB(null !== (dB = HB.exec(TB)) && void 0 !== dB ? dB : [], 4),
          yB = VB[1],
          pB = VB[2],
          lB = VB[3],
          JB = fB.parse(null !== yB && void 0 !== yB ? yB : ""),
          YB = fB.parse(null !== lB && void 0 !== lB ? lB : ""),
          gB = "*" === pB ? JB.multiply(YB) : JB.divide(YB);
        if (gB.isNaN()) return tB;
        TB = TB.replace(HB, gB.toString())
      }
      for (; TB.includes("+") || /.-\d+(?:\.\d+)?/.test(TB);) {
        var oB, kB = LB(null !== (oB = EB.exec(TB)) && void 0 !== oB ? oB : [], 4),
          OB = kB[1],
          DB = kB[2],
          uB = kB[3],
          vB = fB.parse(null !== OB && void 0 !== OB ? OB : ""),
          mB = fB.parse(null !== uB && void 0 !== uB ? uB : ""),
          iB = "+" === DB ? vB.add(mB) : vB.subtract(mB);
        if (iB.isNaN()) return tB;
        TB = TB.replace(EB, iB.toString())
      }
      return TB
    }
    var MB = /\(([^()]*)\)/;

    function zB(BB) {
      var TB = BB.replace(/\s+/g, "");
      return TB = function(BB) {
        for (var TB = BB; TB.includes("(");) {
          var dB = LB(MB.exec(TB), 2)[1];
          TB = TB.replace(MB, sB(dB))
        }
        return TB
      }(TB), TB = sB(TB)
    }

    function wB(BB) {
      var TB = function(BB) {
        try {
          return zB(BB)
        } catch (TB) {
          return tB
        }
      }(BB.slice(5, -1));
      return TB === tB ? "" : TB
    }
    var UB = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"],
      FB = ["dx", "dy", "angle", "className", "breakAll"];

    function KB() {
      return KB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var TB = 1; TB < arguments.length; TB++) {
          var dB = arguments[TB];
          for (var VB in dB) Object.prototype.hasOwnProperty.call(dB, VB) && (BB[VB] = dB[VB])
        }
        return BB
      }, KB.apply(this, arguments)
    }

    function rB(BB, TB) {
      if (null == BB) return {};
      var dB, VB, yB = function(BB, TB) {
        if (null == BB) return {};
        var dB = {};
        for (var VB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, VB)) {
            if (TB.indexOf(VB) >= 0) continue;
            dB[VB] = BB[VB]
          } return dB
      }(BB, TB);
      if (Object.getOwnPropertySymbols) {
        var pB = Object.getOwnPropertySymbols(BB);
        for (VB = 0; VB < pB.length; VB++) dB = pB[VB], TB.indexOf(dB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, dB) && (yB[dB] = BB[dB])
      }
      return yB
    }

    function IB(BB, TB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, TB) {
        var dB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != dB) {
          var VB, yB, pB, lB, JB = [],
            YB = !0,
            gB = !1;
          try {
            if (pB = (dB = dB.call(BB)).next, 0 === TB) {
              if (Object(dB) !== dB) return;
              YB = !1
            } else
              for (; !(YB = (VB = pB.call(dB)).done) && (JB.push(VB.value), JB.length !== TB); YB = !0);
          } catch (BB) {
            gB = !0, yB = BB
          } finally {
            try {
              if (!YB && null != dB.return && (lB = dB.return(), Object(lB) !== lB)) return
            } finally {
              if (gB) throw yB
            }
          }
          return JB
        }
      }(BB, TB) || function(BB, TB) {
        if (!BB) return;
        if ("string" === typeof BB) return cB(BB, TB);
        var dB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === dB && BB.constructor && (dB = BB.constructor.name);
        if ("Map" === dB || "Set" === dB) return Array.from(BB);
        if ("Arguments" === dB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(dB)) return cB(BB, TB)
      }(BB, TB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function cB(BB, TB) {
      (null == TB || TB > BB.length) && (TB = BB.length);
      for (var dB = 0, VB = new Array(TB); dB < TB; dB++) VB[dB] = BB[dB];
      return VB
    }
    var SB = /[ \f\n\r\t\v\u2028\u2029]+/,
      PB = function(BB) {
        var TB = BB.children,
          dB = BB.breakAll,
          VB = BB.style;
        try {
          var yB = [];
          return pB()(TB) || (yB = dB ? TB.toString().split("") : TB.toString().split(SB)), {
            wordsWithComputedWidth: yB.map((function(BB) {
              return {
                word: BB,
                width: (0, oB.g)(BB, VB).width
              }
            })),
            spaceWidth: dB ? 0 : (0, oB.g)("\xa0", VB).width
          }
        } catch (lB) {
          return null
        }
      },
      QB = function(BB) {
        return [{
          words: pB()(BB) ? [] : BB.toString().split(SB)
        }]
      },
      RB = function(BB) {
        var TB = BB.width,
          dB = BB.scaleToFit,
          VB = BB.children,
          yB = BB.style,
          pB = BB.breakAll,
          lB = BB.maxLines;
        if ((TB || dB) && !YB.d.isSsr) {
          var gB = PB({
            breakAll: pB,
            children: VB,
            style: yB
          });
          return gB ? function(BB, TB, dB, VB, yB) {
            var pB = BB.maxLines,
              lB = BB.children,
              YB = BB.style,
              gB = BB.breakAll,
              oB = (0, JB.y)(pB),
              kB = lB,
              LB = function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce((function(BB, TB) {
                  var pB = TB.word,
                    lB = TB.width,
                    JB = BB[BB.length - 1];
                  if (JB && (null == VB || yB || JB.width + lB + dB < Number(VB))) JB.words.push(pB), JB.width += lB + dB;
                  else {
                    var YB = {
                      words: [pB],
                      width: lB
                    };
                    BB.push(YB)
                  }
                  return BB
                }), [])
              },
              OB = LB(TB);
            if (!oB) return OB;
            for (var DB, uB = function(BB) {
                var TB = kB.slice(0, BB),
                  dB = PB({
                    breakAll: gB,
                    style: YB,
                    children: TB + "\u2026"
                  }).wordsWithComputedWidth,
                  yB = LB(dB),
                  lB = yB.length > pB || function(BB) {
                    return BB.reduce((function(BB, TB) {
                      return BB.width > TB.width ? BB : TB
                    }))
                  }(yB).width > Number(VB);
                return [lB, yB]
              }, HB = 0, EB = kB.length - 1, vB = 0; HB <= EB && vB <= kB.length - 1;) {
              var mB = Math.floor((HB + EB) / 2),
                iB = IB(uB(mB - 1), 2),
                NB = iB[0],
                tB = iB[1],
                fB = IB(uB(mB), 1)[0];
              if (NB || fB || (HB = mB + 1), NB && fB && (EB = mB - 1), !NB && fB) {
                DB = tB;
                break
              }
              vB++
            }
            return DB || OB
          }({
            breakAll: pB,
            children: VB,
            maxLines: lB,
            style: yB
          }, gB.wordsWithComputedWidth, gB.spaceWidth, TB, dB) : QB(VB)
        }
        return QB(VB)
      },
      aB = "#808080",
      ZB = function(BB) {
        var TB = BB.x,
          dB = void 0 === TB ? 0 : TB,
          yB = BB.y,
          pB = void 0 === yB ? 0 : yB,
          YB = BB.lineHeight,
          oB = void 0 === YB ? "1em" : YB,
          kB = BB.capHeight,
          LB = void 0 === kB ? "0.71em" : kB,
          OB = BB.scaleToFit,
          DB = void 0 !== OB && OB,
          uB = BB.textAnchor,
          HB = void 0 === uB ? "start" : uB,
          EB = BB.verticalAnchor,
          vB = void 0 === EB ? "end" : EB,
          mB = BB.fill,
          iB = void 0 === mB ? aB : mB,
          NB = rB(BB, UB),
          tB = (0, VB.useMemo)((function() {
            return RB({
              breakAll: NB.breakAll,
              children: NB.children,
              maxLines: NB.maxLines,
              scaleToFit: DB,
              style: NB.style,
              width: NB.width
            })
          }), [NB.breakAll, NB.children, NB.maxLines, DB, NB.style, NB.width]),
          fB = NB.dx,
          sB = NB.dy,
          MB = NB.angle,
          zB = NB.className,
          IB = NB.breakAll,
          cB = rB(NB, FB);
        if (!(0, JB.w)(dB) || !(0, JB.w)(pB)) return null;
        var SB, PB = dB + ((0, JB.y)(fB) ? fB : 0),
          QB = pB + ((0, JB.y)(sB) ? sB : 0);
        switch (vB) {
          case "start":
            SB = wB("calc(".concat(LB, ")"));
            break;
          case "middle":
            SB = wB("calc(".concat((tB.length - 1) / 2, " * -").concat(oB, " + (").concat(LB, " / 2))"));
            break;
          default:
            SB = wB("calc(".concat(tB.length - 1, " * -").concat(oB, ")"))
        }
        var ZB = [];
        if (DB) {
          var XB = tB[0].width,
            WB = NB.width;
          ZB.push("scale(".concat(((0, JB.y)(WB) ? WB / XB : 1) / XB, ")"))
        }
        return MB && ZB.push("rotate(".concat(MB, ", ").concat(PB, ", ").concat(QB, ")")), ZB.length && (cB.transform = ZB.join(" ")), VB.createElement("text", KB({}, (0, gB.d)(cB, !0), {
          x: PB,
          y: QB,
          className: (0, lB.e)("recharts-text", zB),
          textAnchor: HB,
          fill: iB.includes("url") ? aB : iB
        }), tB.map((function(BB, TB) {
          var dB = BB.words.join(IB ? "" : " ");
          return VB.createElement("tspan", {
            x: PB,
            dy: 0 === TB ? SB : oB,
            key: "".concat(dB, "-").concat(TB)
          }, dB)
        })))
      }
  },
  5365: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => bB
    });
    var VB = dB(62),
      yB = dB(4897),
      pB = dB.n(yB),
      lB = dB(4809),
      JB = dB.n(lB),
      YB = dB(4486),
      gB = dB(4572);

    function oB(BB) {
      return oB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, oB(BB)
    }

    function kB() {
      return kB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var TB = 1; TB < arguments.length; TB++) {
          var dB = arguments[TB];
          for (var VB in dB) Object.prototype.hasOwnProperty.call(dB, VB) && (BB[VB] = dB[VB])
        }
        return BB
      }, kB.apply(this, arguments)
    }

    function LB(BB, TB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, TB) {
        var dB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != dB) {
          var VB, yB, pB, lB, JB = [],
            YB = !0,
            gB = !1;
          try {
            if (pB = (dB = dB.call(BB)).next, 0 === TB) {
              if (Object(dB) !== dB) return;
              YB = !1
            } else
              for (; !(YB = (VB = pB.call(dB)).done) && (JB.push(VB.value), JB.length !== TB); YB = !0);
          } catch (BB) {
            gB = !0, yB = BB
          } finally {
            try {
              if (!YB && null != dB.return && (lB = dB.return(), Object(lB) !== lB)) return
            } finally {
              if (gB) throw yB
            }
          }
          return JB
        }
      }(BB, TB) || function(BB, TB) {
        if (!BB) return;
        if ("string" === typeof BB) return OB(BB, TB);
        var dB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === dB && BB.constructor && (dB = BB.constructor.name);
        if ("Map" === dB || "Set" === dB) return Array.from(BB);
        if ("Arguments" === dB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(dB)) return OB(BB, TB)
      }(BB, TB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function OB(BB, TB) {
      (null == TB || TB > BB.length) && (TB = BB.length);
      for (var dB = 0, VB = new Array(TB); dB < TB; dB++) VB[dB] = BB[dB];
      return VB
    }

    function DB(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function uB(BB) {
      for (var TB = 1; TB < arguments.length; TB++) {
        var dB = null != arguments[TB] ? arguments[TB] : {};
        TB % 2 ? DB(Object(dB), !0).forEach((function(TB) {
          HB(BB, TB, dB[TB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : DB(Object(dB)).forEach((function(TB) {
          Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
        }))
      }
      return BB
    }

    function HB(BB, TB, dB) {
      return (TB = function(BB) {
        var TB = function(BB, TB) {
          if ("object" != oB(BB) || !BB) return BB;
          var dB = BB[Symbol.toPrimitive];
          if (void 0 !== dB) {
            var VB = dB.call(BB, TB || "default");
            if ("object" != oB(VB)) return VB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === TB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == oB(TB) ? TB : TB + ""
      }(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }

    function EB(BB) {
      return Array.isArray(BB) && (0, gB.w)(BB[0]) && (0, gB.w)(BB[1]) ? BB.join(" ~ ") : BB
    }
    var vB = function(BB) {
      var TB = BB.separator,
        dB = void 0 === TB ? " : " : TB,
        yB = BB.contentStyle,
        lB = void 0 === yB ? {} : yB,
        oB = BB.itemStyle,
        OB = void 0 === oB ? {} : oB,
        DB = BB.labelStyle,
        HB = void 0 === DB ? {} : DB,
        vB = BB.payload,
        mB = BB.formatter,
        iB = BB.itemSorter,
        NB = BB.wrapperClassName,
        tB = BB.labelClassName,
        fB = BB.label,
        sB = BB.labelFormatter,
        MB = BB.accessibilityLayer,
        zB = void 0 !== MB && MB,
        wB = uB({
          margin: 0,
          padding: 10,
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          whiteSpace: "nowrap"
        }, lB),
        UB = uB({
          margin: 0
        }, HB),
        FB = !JB()(fB),
        KB = FB ? fB : "",
        rB = (0, YB.e)("recharts-default-tooltip", NB),
        IB = (0, YB.e)("recharts-tooltip-label", tB);
      FB && sB && void 0 !== vB && null !== vB && (KB = sB(fB, vB));
      var cB = zB ? {
        role: "status",
        "aria-live": "assertive"
      } : {};
      return VB.createElement("div", kB({
        className: rB,
        style: wB
      }, cB), VB.createElement("p", {
        className: IB,
        style: UB
      }, VB.isValidElement(KB) ? KB : "".concat(KB)), function() {
        if (vB && vB.length) {
          var BB = (iB ? pB()(vB, iB) : vB).map((function(BB, TB) {
            if ("none" === BB.type) return null;
            var yB = uB({
                display: "block",
                paddingTop: 4,
                paddingBottom: 4,
                color: BB.color || "#000"
              }, OB),
              pB = BB.formatter || mB || EB,
              lB = BB.value,
              JB = BB.name,
              YB = lB,
              oB = JB;
            if (pB && null != YB && null != oB) {
              var kB = pB(lB, JB, BB, TB, vB);
              if (Array.isArray(kB)) {
                var DB = LB(kB, 2);
                YB = DB[0], oB = DB[1]
              } else YB = kB
            }
            return VB.createElement("li", {
              className: "recharts-tooltip-item",
              key: "tooltip-item-".concat(TB),
              style: yB
            }, (0, gB.w)(oB) ? VB.createElement("span", {
              className: "recharts-tooltip-item-name"
            }, oB) : null, (0, gB.w)(oB) ? VB.createElement("span", {
              className: "recharts-tooltip-item-separator"
            }, dB) : null, VB.createElement("span", {
              className: "recharts-tooltip-item-value"
            }, YB), VB.createElement("span", {
              className: "recharts-tooltip-item-unit"
            }, BB.unit || ""))
          }));
          return VB.createElement("ul", {
            className: "recharts-tooltip-item-list",
            style: {
              padding: 0,
              margin: 0
            }
          }, BB)
        }
        return null
      }())
    };

    function mB(BB) {
      return mB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, mB(BB)
    }

    function iB(BB, TB, dB) {
      return (TB = function(BB) {
        var TB = function(BB, TB) {
          if ("object" != mB(BB) || !BB) return BB;
          var dB = BB[Symbol.toPrimitive];
          if (void 0 !== dB) {
            var VB = dB.call(BB, TB || "default");
            if ("object" != mB(VB)) return VB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === TB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == mB(TB) ? TB : TB + ""
      }(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }
    var NB = "recharts-tooltip-wrapper",
      tB = {
        visibility: "hidden"
      };

    function fB(BB) {
      var TB = BB.coordinate,
        dB = BB.translateX,
        VB = BB.translateY;
      return (0, YB.e)(NB, iB(iB(iB(iB({}, "".concat(NB, "-right"), (0, gB.y)(dB) && TB && (0, gB.y)(TB.x) && dB >= TB.x), "".concat(NB, "-left"), (0, gB.y)(dB) && TB && (0, gB.y)(TB.x) && dB < TB.x), "".concat(NB, "-bottom"), (0, gB.y)(VB) && TB && (0, gB.y)(TB.y) && VB >= TB.y), "".concat(NB, "-top"), (0, gB.y)(VB) && TB && (0, gB.y)(TB.y) && VB < TB.y))
    }

    function sB(BB) {
      var TB = BB.allowEscapeViewBox,
        dB = BB.coordinate,
        VB = BB.key,
        yB = BB.offsetTopLeft,
        pB = BB.position,
        lB = BB.reverseDirection,
        JB = BB.tooltipDimension,
        YB = BB.viewBox,
        oB = BB.viewBoxDimension;
      if (pB && (0, gB.y)(pB[VB])) return pB[VB];
      var kB = dB[VB] - JB - yB,
        LB = dB[VB] + yB;
      return TB[VB] ? lB[VB] ? kB : LB : lB[VB] ? kB < YB[VB] ? Math.max(LB, YB[VB]) : Math.max(kB, YB[VB]) : LB + JB > YB[VB] + oB ? Math.max(kB, YB[VB]) : Math.max(LB, YB[VB])
    }

    function MB(BB) {
      return MB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, MB(BB)
    }

    function zB(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function wB(BB) {
      for (var TB = 1; TB < arguments.length; TB++) {
        var dB = null != arguments[TB] ? arguments[TB] : {};
        TB % 2 ? zB(Object(dB), !0).forEach((function(TB) {
          cB(BB, TB, dB[TB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : zB(Object(dB)).forEach((function(TB) {
          Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
        }))
      }
      return BB
    }

    function UB(BB, TB) {
      for (var dB = 0; dB < TB.length; dB++) {
        var VB = TB[dB];
        VB.enumerable = VB.enumerable || !1, VB.configurable = !0, "value" in VB && (VB.writable = !0), Object.defineProperty(BB, SB(VB.key), VB)
      }
    }

    function FB(BB, TB, dB) {
      return TB = rB(TB),
        function(BB, TB) {
          if (TB && ("object" === MB(TB) || "function" === typeof TB)) return TB;
          if (void 0 !== TB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, KB() ? Reflect.construct(TB, dB || [], rB(BB).constructor) : TB.apply(BB, dB))
    }

    function KB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (KB = function() {
        return !!BB
      })()
    }

    function rB(BB) {
      return rB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, rB(BB)
    }

    function IB(BB, TB) {
      return IB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, TB) {
        return BB.__proto__ = TB, BB
      }, IB(BB, TB)
    }

    function cB(BB, TB, dB) {
      return (TB = SB(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }

    function SB(BB) {
      var TB = function(BB, TB) {
        if ("object" != MB(BB) || !BB) return BB;
        var dB = BB[Symbol.toPrimitive];
        if (void 0 !== dB) {
          var VB = dB.call(BB, TB || "default");
          if ("object" != MB(VB)) return VB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === TB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == MB(TB) ? TB : TB + ""
    }
    var PB = function(BB) {
        function TB() {
          var BB;
          ! function(BB, TB) {
            if (!(BB instanceof TB)) throw new TypeError("Cannot call a class as a function")
          }(this, TB);
          for (var dB = arguments.length, VB = new Array(dB), yB = 0; yB < dB; yB++) VB[yB] = arguments[yB];
          return cB(BB = FB(this, TB, [].concat(VB)), "state", {
            dismissed: !1,
            dismissedAtCoordinate: {
              x: 0,
              y: 0
            },
            lastBoundingBox: {
              width: -1,
              height: -1
            }
          }), cB(BB, "handleKeyDown", (function(TB) {
            var dB, VB, yB, pB;
            "Escape" === TB.key && BB.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x: null !== (dB = null === (VB = BB.props.coordinate) || void 0 === VB ? void 0 : VB.x) && void 0 !== dB ? dB : 0,
                y: null !== (yB = null === (pB = BB.props.coordinate) || void 0 === pB ? void 0 : pB.y) && void 0 !== yB ? yB : 0
              }
            })
          })), BB
        }
        return function(BB, TB) {
          if ("function" !== typeof TB && null !== TB) throw new TypeError("Super expression must either be null or a function");
          BB.prototype = Object.create(TB && TB.prototype, {
            constructor: {
              value: BB,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(BB, "prototype", {
            writable: !1
          }), TB && IB(BB, TB)
        }(TB, BB), dB = TB, (yB = [{
          key: "updateBBox",
          value: function() {
            if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
              var BB = this.wrapperNode.getBoundingClientRect();
              (Math.abs(BB.width - this.state.lastBoundingBox.width) > 1 || Math.abs(BB.height - this.state.lastBoundingBox.height) > 1) && this.setState({
                lastBoundingBox: {
                  width: BB.width,
                  height: BB.height
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
            var BB, TB;
            this.props.active && this.updateBBox(), this.state.dismissed && ((null === (BB = this.props.coordinate) || void 0 === BB ? void 0 : BB.x) === this.state.dismissedAtCoordinate.x && (null === (TB = this.props.coordinate) || void 0 === TB ? void 0 : TB.y) === this.state.dismissedAtCoordinate.y || (this.state.dismissed = !1))
          }
        }, {
          key: "render",
          value: function() {
            var BB = this,
              TB = this.props,
              dB = TB.active,
              yB = TB.allowEscapeViewBox,
              pB = TB.animationDuration,
              lB = TB.animationEasing,
              JB = TB.children,
              YB = TB.coordinate,
              gB = TB.hasPayload,
              oB = TB.isAnimationActive,
              kB = TB.offset,
              LB = TB.position,
              OB = TB.reverseDirection,
              DB = TB.useTranslate3d,
              uB = TB.viewBox,
              HB = TB.wrapperStyle,
              EB = function(BB) {
                var TB, dB, VB = BB.allowEscapeViewBox,
                  yB = BB.coordinate,
                  pB = BB.offsetTopLeft,
                  lB = BB.position,
                  JB = BB.reverseDirection,
                  YB = BB.tooltipBox,
                  gB = BB.useTranslate3d,
                  oB = BB.viewBox;
                return {
                  cssProperties: YB.height > 0 && YB.width > 0 && yB ? function(BB) {
                    var TB = BB.translateX,
                      dB = BB.translateY;
                    return {
                      transform: BB.useTranslate3d ? "translate3d(".concat(TB, "px, ").concat(dB, "px, 0)") : "translate(".concat(TB, "px, ").concat(dB, "px)")
                    }
                  }({
                    translateX: TB = sB({
                      allowEscapeViewBox: VB,
                      coordinate: yB,
                      key: "x",
                      offsetTopLeft: pB,
                      position: lB,
                      reverseDirection: JB,
                      tooltipDimension: YB.width,
                      viewBox: oB,
                      viewBoxDimension: oB.width
                    }),
                    translateY: dB = sB({
                      allowEscapeViewBox: VB,
                      coordinate: yB,
                      key: "y",
                      offsetTopLeft: pB,
                      position: lB,
                      reverseDirection: JB,
                      tooltipDimension: YB.height,
                      viewBox: oB,
                      viewBoxDimension: oB.height
                    }),
                    useTranslate3d: gB
                  }) : tB,
                  cssClasses: fB({
                    translateX: TB,
                    translateY: dB,
                    coordinate: yB
                  })
                }
              }({
                allowEscapeViewBox: yB,
                coordinate: YB,
                offsetTopLeft: kB,
                position: LB,
                reverseDirection: OB,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: DB,
                viewBox: uB
              }),
              vB = EB.cssClasses,
              mB = EB.cssProperties,
              iB = wB(wB({
                transition: oB && dB ? "transform ".concat(pB, "ms ").concat(lB) : void 0
              }, mB), {}, {
                pointerEvents: "none",
                visibility: !this.state.dismissed && dB && gB ? "visible" : "hidden",
                position: "absolute",
                top: 0,
                left: 0
              }, HB);
            return VB.createElement("div", {
              tabIndex: -1,
              className: vB,
              style: iB,
              ref: function(TB) {
                BB.wrapperNode = TB
              }
            }, JB)
          }
        }]) && UB(dB.prototype, yB), pB && UB(dB, pB), Object.defineProperty(dB, "prototype", {
          writable: !1
        }), dB;
        var dB, yB, pB
      }(VB.PureComponent),
      QB = dB(5372),
      RB = dB(5375);

    function aB(BB) {
      return aB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, aB(BB)
    }

    function ZB(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function XB(BB) {
      for (var TB = 1; TB < arguments.length; TB++) {
        var dB = null != arguments[TB] ? arguments[TB] : {};
        TB % 2 ? ZB(Object(dB), !0).forEach((function(TB) {
          xB(BB, TB, dB[TB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : ZB(Object(dB)).forEach((function(TB) {
          Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
        }))
      }
      return BB
    }

    function WB(BB, TB) {
      for (var dB = 0; dB < TB.length; dB++) {
        var VB = TB[dB];
        VB.enumerable = VB.enumerable || !1, VB.configurable = !0, "value" in VB && (VB.writable = !0), Object.defineProperty(BB, jB(VB.key), VB)
      }
    }

    function hB(BB, TB, dB) {
      return TB = GB(TB),
        function(BB, TB) {
          if (TB && ("object" === aB(TB) || "function" === typeof TB)) return TB;
          if (void 0 !== TB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, CB() ? Reflect.construct(TB, dB || [], GB(BB).constructor) : TB.apply(BB, dB))
    }

    function CB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (CB = function() {
        return !!BB
      })()
    }

    function GB(BB) {
      return GB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, GB(BB)
    }

    function qB(BB, TB) {
      return qB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, TB) {
        return BB.__proto__ = TB, BB
      }, qB(BB, TB)
    }

    function xB(BB, TB, dB) {
      return (TB = jB(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }

    function jB(BB) {
      var TB = function(BB, TB) {
        if ("object" != aB(BB) || !BB) return BB;
        var dB = BB[Symbol.toPrimitive];
        if (void 0 !== dB) {
          var VB = dB.call(BB, TB || "default");
          if ("object" != aB(VB)) return VB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === TB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == aB(TB) ? TB : TB + ""
    }

    function AB(BB) {
      return BB.dataKey
    }
    var bB = function(BB) {
      function TB() {
        return function(BB, TB) {
          if (!(BB instanceof TB)) throw new TypeError("Cannot call a class as a function")
        }(this, TB), hB(this, TB, arguments)
      }
      return function(BB, TB) {
        if ("function" !== typeof TB && null !== TB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(TB && TB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), TB && qB(BB, TB)
      }(TB, BB), dB = TB, (yB = [{
        key: "render",
        value: function() {
          var BB = this,
            TB = this.props,
            dB = TB.active,
            yB = TB.allowEscapeViewBox,
            pB = TB.animationDuration,
            lB = TB.animationEasing,
            JB = TB.content,
            YB = TB.coordinate,
            gB = TB.filterNull,
            oB = TB.isAnimationActive,
            kB = TB.offset,
            LB = TB.payload,
            OB = TB.payloadUniqBy,
            DB = TB.position,
            uB = TB.reverseDirection,
            HB = TB.useTranslate3d,
            EB = TB.viewBox,
            mB = TB.wrapperStyle,
            iB = null !== LB && void 0 !== LB ? LB : [];
          gB && iB.length && (iB = (0, RB.d)(LB.filter((function(TB) {
            return null != TB.value && (!0 !== TB.hide || BB.props.includeHidden)
          })), OB, AB));
          var NB = iB.length > 0;
          return VB.createElement(PB, {
            allowEscapeViewBox: yB,
            animationDuration: pB,
            animationEasing: lB,
            isAnimationActive: oB,
            active: dB,
            coordinate: YB,
            hasPayload: NB,
            offset: kB,
            position: DB,
            reverseDirection: uB,
            useTranslate3d: HB,
            viewBox: EB,
            wrapperStyle: mB
          }, function(BB, TB) {
            return VB.isValidElement(BB) ? VB.cloneElement(BB, TB) : "function" === typeof BB ? VB.createElement(BB, TB) : VB.createElement(vB, TB)
          }(JB, XB(XB({}, this.props), {}, {
            payload: iB
          })))
        }
      }]) && WB(dB.prototype, yB), pB && WB(dB, pB), Object.defineProperty(dB, "prototype", {
        writable: !1
      }), dB;
      var dB, yB, pB
    }(VB.PureComponent);
    xB(bB, "displayName", "Tooltip"), xB(bB, "defaultProps", {
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
      isAnimationActive: !QB.d.isSsr,
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
  5361: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => gB
    });
    var VB = dB(62),
      yB = dB(4486),
      pB = dB(4819),
      lB = ["children", "className"];

    function JB() {
      return JB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var TB = 1; TB < arguments.length; TB++) {
          var dB = arguments[TB];
          for (var VB in dB) Object.prototype.hasOwnProperty.call(dB, VB) && (BB[VB] = dB[VB])
        }
        return BB
      }, JB.apply(this, arguments)
    }

    function YB(BB, TB) {
      if (null == BB) return {};
      var dB, VB, yB = function(BB, TB) {
        if (null == BB) return {};
        var dB = {};
        for (var VB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, VB)) {
            if (TB.indexOf(VB) >= 0) continue;
            dB[VB] = BB[VB]
          } return dB
      }(BB, TB);
      if (Object.getOwnPropertySymbols) {
        var pB = Object.getOwnPropertySymbols(BB);
        for (VB = 0; VB < pB.length; VB++) dB = pB[VB], TB.indexOf(dB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, dB) && (yB[dB] = BB[dB])
      }
      return yB
    }
    var gB = VB.forwardRef((function(BB, TB) {
      var dB = BB.children,
        gB = BB.className,
        oB = YB(BB, lB),
        kB = (0, yB.e)("recharts-layer", gB);
      return VB.createElement("g", JB({
        className: kB
      }, (0, pB.d)(oB, !0), {
        ref: TB
      }), dB)
    }))
  },
  5357: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => gB
    });
    var VB = dB(62),
      yB = dB(4486),
      pB = dB(4819),
      lB = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];

    function JB() {
      return JB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var TB = 1; TB < arguments.length; TB++) {
          var dB = arguments[TB];
          for (var VB in dB) Object.prototype.hasOwnProperty.call(dB, VB) && (BB[VB] = dB[VB])
        }
        return BB
      }, JB.apply(this, arguments)
    }

    function YB(BB, TB) {
      if (null == BB) return {};
      var dB, VB, yB = function(BB, TB) {
        if (null == BB) return {};
        var dB = {};
        for (var VB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, VB)) {
            if (TB.indexOf(VB) >= 0) continue;
            dB[VB] = BB[VB]
          } return dB
      }(BB, TB);
      if (Object.getOwnPropertySymbols) {
        var pB = Object.getOwnPropertySymbols(BB);
        for (VB = 0; VB < pB.length; VB++) dB = pB[VB], TB.indexOf(dB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, dB) && (yB[dB] = BB[dB])
      }
      return yB
    }

    function gB(BB) {
      var TB = BB.children,
        dB = BB.width,
        gB = BB.height,
        oB = BB.viewBox,
        kB = BB.className,
        LB = BB.style,
        OB = BB.title,
        DB = BB.desc,
        uB = YB(BB, lB),
        HB = oB || {
          width: dB,
          height: gB,
          x: 0,
          y: 0
        },
        EB = (0, yB.e)("recharts-surface", kB);
      return VB.createElement("svg", JB({}, (0, pB.d)(uB, !0, "svg"), {
        className: EB,
        width: dB,
        height: gB,
        style: LB,
        viewBox: "".concat(HB.x, " ").concat(HB.y, " ").concat(HB.width, " ").concat(HB.height)
      }), VB.createElement("title", null, OB), VB.createElement("desc", null, DB), TB)
    }
  },
  5713: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => mB,
      g: () => tB,
      k: () => UB,
      l: () => wB,
      m: () => iB,
      q: () => zB,
      s: () => MB,
      t: () => NB,
      u: () => sB,
      y: () => fB
    });
    var VB = dB(62),
      yB = dB(5353),
      pB = dB(5718),
      lB = dB.n(pB),
      JB = dB(5632),
      YB = dB.n(JB),
      gB = dB(4621),
      oB = dB.n(gB)()((function(BB) {
        return {
          x: BB.left,
          y: BB.top,
          width: BB.width,
          height: BB.height
        }
      }), (function(BB) {
        return ["l", BB.left, "t", BB.top, "w", BB.width, "h", BB.height].join("")
      })),
      kB = dB(4572);
    var LB = (0, VB.createContext)(void 0),
      OB = (0, VB.createContext)(void 0),
      DB = (0, VB.createContext)(void 0),
      uB = (0, VB.createContext)({}),
      HB = (0, VB.createContext)(void 0),
      EB = (0, VB.createContext)(0),
      vB = (0, VB.createContext)(0),
      mB = function(BB) {
        var TB = BB.state,
          dB = TB.xAxisMap,
          yB = TB.yAxisMap,
          pB = TB.offset,
          lB = BB.clipPathId,
          JB = BB.children,
          YB = BB.width,
          gB = BB.height,
          kB = oB(pB);
        return VB.createElement(LB.Provider, {
          value: dB
        }, VB.createElement(OB.Provider, {
          value: yB
        }, VB.createElement(uB.Provider, {
          value: pB
        }, VB.createElement(DB.Provider, {
          value: kB
        }, VB.createElement(HB.Provider, {
          value: lB
        }, VB.createElement(EB.Provider, {
          value: gB
        }, VB.createElement(vB.Provider, {
          value: YB
        }, JB)))))))
      },
      iB = function() {
        return (0, VB.useContext)(HB)
      };
    var NB = function(BB) {
        var TB = (0, VB.useContext)(LB);
        null == TB && (0, yB.b)(!1);
        var dB = TB[BB];
        return null == dB && (0, yB.b)(!1), dB
      },
      tB = function() {
        var BB = (0, VB.useContext)(LB);
        return (0, kB.k)(BB)
      },
      fB = function() {
        var BB = (0, VB.useContext)(OB);
        return lB()(BB, (function(BB) {
          return YB()(BB.domain, Number.isFinite)
        })) || (0, kB.k)(BB)
      },
      sB = function(BB) {
        var TB = (0, VB.useContext)(OB);
        null == TB && (0, yB.b)(!1);
        var dB = TB[BB];
        return null == dB && (0, yB.b)(!1), dB
      },
      MB = function() {
        return (0, VB.useContext)(DB)
      },
      zB = function() {
        return (0, VB.useContext)(uB)
      },
      wB = function() {
        return (0, VB.useContext)(vB)
      },
      UB = function() {
        return (0, VB.useContext)(EB)
      }
  },
  5730: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => AB
    });
    var VB = dB(62);

    function yB() {}

    function pB(BB, TB, dB) {
      BB._context.bezierCurveTo((2 * BB._x0 + BB._x1) / 3, (2 * BB._y0 + BB._y1) / 3, (BB._x0 + 2 * BB._x1) / 3, (BB._y0 + 2 * BB._y1) / 3, (BB._x0 + 4 * BB._x1 + TB) / 6, (BB._y0 + 4 * BB._y1 + dB) / 6)
    }

    function lB(BB) {
      this._context = BB
    }

    function JB(BB) {
      this._context = BB
    }

    function YB(BB) {
      this._context = BB
    }
    lB.prototype = {
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
            pB(this, this._x1, this._y1);
          case 2:
            this._context.lineTo(this._x1, this._y1)
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(BB, TB) {
        switch (BB = +BB, TB = +TB, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(BB, TB) : this._context.moveTo(BB, TB);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
          default:
            pB(this, BB, TB)
        }
        this._x0 = this._x1, this._x1 = BB, this._y0 = this._y1, this._y1 = TB
      }
    }, JB.prototype = {
      areaStart: yB,
      areaEnd: yB,
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
      point: function(BB, TB) {
        switch (BB = +BB, TB = +TB, this._point) {
          case 0:
            this._point = 1, this._x2 = BB, this._y2 = TB;
            break;
          case 1:
            this._point = 2, this._x3 = BB, this._y3 = TB;
            break;
          case 2:
            this._point = 3, this._x4 = BB, this._y4 = TB, this._context.moveTo((this._x0 + 4 * this._x1 + BB) / 6, (this._y0 + 4 * this._y1 + TB) / 6);
            break;
          default:
            pB(this, BB, TB)
        }
        this._x0 = this._x1, this._x1 = BB, this._y0 = this._y1, this._y1 = TB
      }
    }, YB.prototype = {
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
      point: function(BB, TB) {
        switch (BB = +BB, TB = +TB, this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var dB = (this._x0 + 4 * this._x1 + BB) / 6,
              VB = (this._y0 + 4 * this._y1 + TB) / 6;
            this._line ? this._context.lineTo(dB, VB) : this._context.moveTo(dB, VB);
            break;
          case 3:
            this._point = 4;
          default:
            pB(this, BB, TB)
        }
        this._x0 = this._x1, this._x1 = BB, this._y0 = this._y1, this._y1 = TB
      }
    };
    class gB {
      constructor(BB, TB) {
        this._context = BB, this._x = TB
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
      point(BB, TB) {
        switch (BB = +BB, TB = +TB, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(BB, TB) : this._context.moveTo(BB, TB);
            break;
          case 1:
            this._point = 2;
          default:
            this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + BB) / 2, this._y0, this._x0, TB, BB, TB) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + TB) / 2, BB, this._y0, BB, TB)
        }
        this._x0 = BB, this._y0 = TB
      }
    }

    function oB(BB) {
      this._context = BB
    }

    function kB(BB) {
      this._context = BB
    }

    function LB(BB) {
      return new kB(BB)
    }

    function OB(BB) {
      return BB < 0 ? -1 : 1
    }

    function DB(BB, TB, dB) {
      var VB = BB._x1 - BB._x0,
        yB = TB - BB._x1,
        pB = (BB._y1 - BB._y0) / (VB || yB < 0 && -0),
        lB = (dB - BB._y1) / (yB || VB < 0 && -0),
        JB = (pB * yB + lB * VB) / (VB + yB);
      return (OB(pB) + OB(lB)) * Math.min(Math.abs(pB), Math.abs(lB), .5 * Math.abs(JB)) || 0
    }

    function uB(BB, TB) {
      var dB = BB._x1 - BB._x0;
      return dB ? (3 * (BB._y1 - BB._y0) / dB - TB) / 2 : TB
    }

    function HB(BB, TB, dB) {
      var VB = BB._x0,
        yB = BB._y0,
        pB = BB._x1,
        lB = BB._y1,
        JB = (pB - VB) / 3;
      BB._context.bezierCurveTo(VB + JB, yB + JB * TB, pB - JB, lB - JB * dB, pB, lB)
    }

    function EB(BB) {
      this._context = BB
    }

    function vB(BB) {
      this._context = new mB(BB)
    }

    function mB(BB) {
      this._context = BB
    }

    function iB(BB) {
      this._context = BB
    }

    function NB(BB) {
      var TB, dB, VB = BB.length - 1,
        yB = new Array(VB),
        pB = new Array(VB),
        lB = new Array(VB);
      for (yB[0] = 0, pB[0] = 2, lB[0] = BB[0] + 2 * BB[1], TB = 1; TB < VB - 1; ++TB) yB[TB] = 1, pB[TB] = 4, lB[TB] = 4 * BB[TB] + 2 * BB[TB + 1];
      for (yB[VB - 1] = 2, pB[VB - 1] = 7, lB[VB - 1] = 8 * BB[VB - 1] + BB[VB], TB = 1; TB < VB; ++TB) dB = yB[TB] / pB[TB - 1], pB[TB] -= dB, lB[TB] -= dB * lB[TB - 1];
      for (yB[VB - 1] = lB[VB - 1] / pB[VB - 1], TB = VB - 2; TB >= 0; --TB) yB[TB] = (lB[TB] - yB[TB + 1]) / pB[TB];
      for (pB[VB - 1] = (BB[VB] + yB[VB - 1]) / 2, TB = 0; TB < VB - 1; ++TB) pB[TB] = 2 * BB[TB + 1] - yB[TB + 1];
      return [yB, pB]
    }

    function tB(BB, TB) {
      this._context = BB, this._t = TB
    }
    oB.prototype = {
      areaStart: yB,
      areaEnd: yB,
      lineStart: function() {
        this._point = 0
      },
      lineEnd: function() {
        this._point && this._context.closePath()
      },
      point: function(BB, TB) {
        BB = +BB, TB = +TB, this._point ? this._context.lineTo(BB, TB) : (this._point = 1, this._context.moveTo(BB, TB))
      }
    }, kB.prototype = {
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
      point: function(BB, TB) {
        switch (BB = +BB, TB = +TB, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(BB, TB) : this._context.moveTo(BB, TB);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(BB, TB)
        }
      }
    }, EB.prototype = {
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
            HB(this, this._t0, uB(this, this._t0))
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(BB, TB) {
        var dB = NaN;
        if (TB = +TB, (BB = +BB) !== this._x1 || TB !== this._y1) {
          switch (this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(BB, TB) : this._context.moveTo(BB, TB);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3, HB(this, uB(this, dB = DB(this, BB, TB)), dB);
              break;
            default:
              HB(this, this._t0, dB = DB(this, BB, TB))
          }
          this._x0 = this._x1, this._x1 = BB, this._y0 = this._y1, this._y1 = TB, this._t0 = dB
        }
      }
    }, (vB.prototype = Object.create(EB.prototype)).point = function(BB, TB) {
      EB.prototype.point.call(this, TB, BB)
    }, mB.prototype = {
      moveTo: function(BB, TB) {
        this._context.moveTo(TB, BB)
      },
      closePath: function() {
        this._context.closePath()
      },
      lineTo: function(BB, TB) {
        this._context.lineTo(TB, BB)
      },
      bezierCurveTo: function(BB, TB, dB, VB, yB, pB) {
        this._context.bezierCurveTo(TB, BB, VB, dB, pB, yB)
      }
    }, iB.prototype = {
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
        var BB = this._x,
          TB = this._y,
          dB = BB.length;
        if (dB)
          if (this._line ? this._context.lineTo(BB[0], TB[0]) : this._context.moveTo(BB[0], TB[0]), 2 === dB) this._context.lineTo(BB[1], TB[1]);
          else
            for (var VB = NB(BB), yB = NB(TB), pB = 0, lB = 1; lB < dB; ++pB, ++lB) this._context.bezierCurveTo(VB[0][pB], yB[0][pB], VB[1][pB], yB[1][pB], BB[lB], TB[lB]);
        (this._line || 0 !== this._line && 1 === dB) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
      },
      point: function(BB, TB) {
        this._x.push(+BB), this._y.push(+TB)
      }
    }, tB.prototype = {
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
      point: function(BB, TB) {
        switch (BB = +BB, TB = +TB, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(BB, TB) : this._context.moveTo(BB, TB);
            break;
          case 1:
            this._point = 2;
          default:
            if (this._t <= 0) this._context.lineTo(this._x, TB), this._context.lineTo(BB, TB);
            else {
              var dB = this._x * (1 - this._t) + BB * this._t;
              this._context.lineTo(dB, this._y), this._context.lineTo(dB, TB)
            }
        }
        this._x = BB, this._y = TB
      }
    };
    var fB = dB(5588),
      sB = dB(5478),
      MB = dB(5481);

    function zB(BB) {
      return BB[0]
    }

    function wB(BB) {
      return BB[1]
    }

    function UB(BB, TB) {
      var dB = (0, sB.d)(!0),
        VB = null,
        yB = LB,
        pB = null,
        lB = (0, MB.b)(JB);

      function JB(JB) {
        var YB, gB, oB, kB = (JB = (0, fB.e)(JB)).length,
          LB = !1;
        for (null == VB && (pB = yB(oB = lB())), YB = 0; YB <= kB; ++YB) !(YB < kB && dB(gB = JB[YB], YB, JB)) === LB && ((LB = !LB) ? pB.lineStart() : pB.lineEnd()), LB && pB.point(+BB(gB, YB, JB), +TB(gB, YB, JB));
        if (oB) return pB = null, oB + "" || null
      }
      return BB = "function" === typeof BB ? BB : void 0 === BB ? zB : (0, sB.d)(BB), TB = "function" === typeof TB ? TB : void 0 === TB ? wB : (0, sB.d)(TB), JB.x = function(TB) {
        return arguments.length ? (BB = "function" === typeof TB ? TB : (0, sB.d)(+TB), JB) : BB
      }, JB.y = function(BB) {
        return arguments.length ? (TB = "function" === typeof BB ? BB : (0, sB.d)(+BB), JB) : TB
      }, JB.defined = function(BB) {
        return arguments.length ? (dB = "function" === typeof BB ? BB : (0, sB.d)(!!BB), JB) : dB
      }, JB.curve = function(BB) {
        return arguments.length ? (yB = BB, null != VB && (pB = yB(VB)), JB) : yB
      }, JB.context = function(BB) {
        return arguments.length ? (null == BB ? VB = pB = null : pB = yB(VB = BB), JB) : VB
      }, JB
    }

    function FB(BB, TB, dB) {
      var VB = null,
        yB = (0, sB.d)(!0),
        pB = null,
        lB = LB,
        JB = null,
        YB = (0, MB.b)(gB);

      function gB(gB) {
        var oB, kB, LB, OB, DB, uB = (gB = (0, fB.e)(gB)).length,
          HB = !1,
          EB = new Array(uB),
          vB = new Array(uB);
        for (null == pB && (JB = lB(DB = YB())), oB = 0; oB <= uB; ++oB) {
          if (!(oB < uB && yB(OB = gB[oB], oB, gB)) === HB)
            if (HB = !HB) kB = oB, JB.areaStart(), JB.lineStart();
            else {
              for (JB.lineEnd(), JB.lineStart(), LB = oB - 1; LB >= kB; --LB) JB.point(EB[LB], vB[LB]);
              JB.lineEnd(), JB.areaEnd()
            } HB && (EB[oB] = +BB(OB, oB, gB), vB[oB] = +TB(OB, oB, gB), JB.point(VB ? +VB(OB, oB, gB) : EB[oB], dB ? +dB(OB, oB, gB) : vB[oB]))
        }
        if (DB) return JB = null, DB + "" || null
      }

      function oB() {
        return UB().defined(yB).curve(lB).context(pB)
      }
      return BB = "function" === typeof BB ? BB : void 0 === BB ? zB : (0, sB.d)(+BB), TB = "function" === typeof TB ? TB : void 0 === TB ? (0, sB.d)(0) : (0, sB.d)(+TB), dB = "function" === typeof dB ? dB : void 0 === dB ? wB : (0, sB.d)(+dB), gB.x = function(TB) {
        return arguments.length ? (BB = "function" === typeof TB ? TB : (0, sB.d)(+TB), VB = null, gB) : BB
      }, gB.x0 = function(TB) {
        return arguments.length ? (BB = "function" === typeof TB ? TB : (0, sB.d)(+TB), gB) : BB
      }, gB.x1 = function(BB) {
        return arguments.length ? (VB = null == BB ? null : "function" === typeof BB ? BB : (0, sB.d)(+BB), gB) : VB
      }, gB.y = function(BB) {
        return arguments.length ? (TB = "function" === typeof BB ? BB : (0, sB.d)(+BB), dB = null, gB) : TB
      }, gB.y0 = function(BB) {
        return arguments.length ? (TB = "function" === typeof BB ? BB : (0, sB.d)(+BB), gB) : TB
      }, gB.y1 = function(BB) {
        return arguments.length ? (dB = null == BB ? null : "function" === typeof BB ? BB : (0, sB.d)(+BB), gB) : dB
      }, gB.lineX0 = gB.lineY0 = function() {
        return oB().x(BB).y(TB)
      }, gB.lineY1 = function() {
        return oB().x(BB).y(dB)
      }, gB.lineX1 = function() {
        return oB().x(VB).y(TB)
      }, gB.defined = function(BB) {
        return arguments.length ? (yB = "function" === typeof BB ? BB : (0, sB.d)(!!BB), gB) : yB
      }, gB.curve = function(BB) {
        return arguments.length ? (lB = BB, null != pB && (JB = lB(pB)), gB) : lB
      }, gB.context = function(BB) {
        return arguments.length ? (null == BB ? pB = JB = null : JB = lB(pB = BB), gB) : pB
      }, gB
    }
    var KB = dB(5434),
      rB = dB.n(KB),
      IB = dB(4660),
      cB = dB.n(IB),
      SB = dB(4486),
      PB = dB(4842),
      QB = dB(4819),
      RB = dB(4572);

    function aB(BB) {
      return aB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, aB(BB)
    }

    function ZB() {
      return ZB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var TB = 1; TB < arguments.length; TB++) {
          var dB = arguments[TB];
          for (var VB in dB) Object.prototype.hasOwnProperty.call(dB, VB) && (BB[VB] = dB[VB])
        }
        return BB
      }, ZB.apply(this, arguments)
    }

    function XB(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function WB(BB) {
      for (var TB = 1; TB < arguments.length; TB++) {
        var dB = null != arguments[TB] ? arguments[TB] : {};
        TB % 2 ? XB(Object(dB), !0).forEach((function(TB) {
          hB(BB, TB, dB[TB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : XB(Object(dB)).forEach((function(TB) {
          Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
        }))
      }
      return BB
    }

    function hB(BB, TB, dB) {
      return (TB = function(BB) {
        var TB = function(BB, TB) {
          if ("object" != aB(BB) || !BB) return BB;
          var dB = BB[Symbol.toPrimitive];
          if (void 0 !== dB) {
            var VB = dB.call(BB, TB || "default");
            if ("object" != aB(VB)) return VB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === TB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == aB(TB) ? TB : TB + ""
      }(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }
    var CB = {
        curveBasisClosed: function(BB) {
          return new JB(BB)
        },
        curveBasisOpen: function(BB) {
          return new YB(BB)
        },
        curveBasis: function(BB) {
          return new lB(BB)
        },
        curveBumpX: function(BB) {
          return new gB(BB, !0)
        },
        curveBumpY: function(BB) {
          return new gB(BB, !1)
        },
        curveLinearClosed: function(BB) {
          return new oB(BB)
        },
        curveLinear: LB,
        curveMonotoneX: function(BB) {
          return new EB(BB)
        },
        curveMonotoneY: function(BB) {
          return new vB(BB)
        },
        curveNatural: function(BB) {
          return new iB(BB)
        },
        curveStep: function(BB) {
          return new tB(BB, .5)
        },
        curveStepAfter: function(BB) {
          return new tB(BB, 1)
        },
        curveStepBefore: function(BB) {
          return new tB(BB, 0)
        }
      },
      GB = function(BB) {
        return BB.x === +BB.x && BB.y === +BB.y
      },
      qB = function(BB) {
        return BB.x
      },
      xB = function(BB) {
        return BB.y
      },
      jB = function(BB) {
        var TB, dB = BB.type,
          VB = void 0 === dB ? "linear" : dB,
          yB = BB.points,
          pB = void 0 === yB ? [] : yB,
          lB = BB.baseLine,
          JB = BB.layout,
          YB = BB.connectNulls,
          gB = void 0 !== YB && YB,
          oB = function(BB, TB) {
            if (cB()(BB)) return BB;
            var dB = "curve".concat(rB()(BB));
            return "curveMonotone" !== dB && "curveBump" !== dB || !TB ? CB[dB] || LB : CB["".concat(dB).concat("vertical" === TB ? "Y" : "X")]
          }(VB, JB),
          kB = gB ? pB.filter((function(BB) {
            return GB(BB)
          })) : pB;
        if (Array.isArray(lB)) {
          var OB = gB ? lB.filter((function(BB) {
              return GB(BB)
            })) : lB,
            DB = kB.map((function(BB, TB) {
              return WB(WB({}, BB), {}, {
                base: OB[TB]
              })
            }));
          return (TB = "vertical" === JB ? FB().y(xB).x1(qB).x0((function(BB) {
            return BB.base.x
          })) : FB().x(qB).y1(xB).y0((function(BB) {
            return BB.base.y
          }))).defined(GB).curve(oB), TB(DB)
        }
        return (TB = "vertical" === JB && (0, RB.y)(lB) ? FB().y(xB).x1(qB).x0(lB) : (0, RB.y)(lB) ? FB().x(qB).y1(xB).y0(lB) : UB().x(qB).y(xB)).defined(GB).curve(oB), TB(kB)
      },
      AB = function(BB) {
        var TB = BB.className,
          dB = BB.points,
          yB = BB.path,
          pB = BB.pathRef;
        if ((!dB || !dB.length) && !yB) return null;
        var lB = dB && dB.length ? jB(BB) : yB;
        return VB.createElement("path", ZB({}, (0, QB.d)(BB, !1), (0, PB.k)(BB), {
          className: (0, SB.e)("recharts-curve", TB),
          d: lB,
          ref: pB
        }))
      }
  },
  5487: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => YB
    });
    var VB = dB(62),
      yB = dB(4486),
      pB = dB(4842),
      lB = dB(4819);

    function JB() {
      return JB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var TB = 1; TB < arguments.length; TB++) {
          var dB = arguments[TB];
          for (var VB in dB) Object.prototype.hasOwnProperty.call(dB, VB) && (BB[VB] = dB[VB])
        }
        return BB
      }, JB.apply(this, arguments)
    }
    var YB = function(BB) {
      var TB = BB.cx,
        dB = BB.cy,
        YB = BB.r,
        gB = BB.className,
        oB = (0, yB.e)("recharts-dot", gB);
      return TB === +TB && dB === +dB && YB === +YB ? VB.createElement("circle", JB({}, (0, lB.d)(BB, !1), (0, pB.k)(BB), {
        className: oB,
        cx: TB,
        cy: dB,
        r: YB
      })) : null
    }
  },
  5489: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => EB,
      d: () => uB
    });
    var VB = dB(62),
      yB = dB(4486),
      pB = dB(5495),
      lB = dB(4819);

    function JB(BB) {
      return JB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, JB(BB)
    }

    function YB() {
      return YB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var TB = 1; TB < arguments.length; TB++) {
          var dB = arguments[TB];
          for (var VB in dB) Object.prototype.hasOwnProperty.call(dB, VB) && (BB[VB] = dB[VB])
        }
        return BB
      }, YB.apply(this, arguments)
    }

    function gB(BB, TB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, TB) {
        var dB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != dB) {
          var VB, yB, pB, lB, JB = [],
            YB = !0,
            gB = !1;
          try {
            if (pB = (dB = dB.call(BB)).next, 0 === TB) {
              if (Object(dB) !== dB) return;
              YB = !1
            } else
              for (; !(YB = (VB = pB.call(dB)).done) && (JB.push(VB.value), JB.length !== TB); YB = !0);
          } catch (BB) {
            gB = !0, yB = BB
          } finally {
            try {
              if (!YB && null != dB.return && (lB = dB.return(), Object(lB) !== lB)) return
            } finally {
              if (gB) throw yB
            }
          }
          return JB
        }
      }(BB, TB) || function(BB, TB) {
        if (!BB) return;
        if ("string" === typeof BB) return oB(BB, TB);
        var dB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === dB && BB.constructor && (dB = BB.constructor.name);
        if ("Map" === dB || "Set" === dB) return Array.from(BB);
        if ("Arguments" === dB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(dB)) return oB(BB, TB)
      }(BB, TB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function oB(BB, TB) {
      (null == TB || TB > BB.length) && (TB = BB.length);
      for (var dB = 0, VB = new Array(TB); dB < TB; dB++) VB[dB] = BB[dB];
      return VB
    }

    function kB(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function LB(BB) {
      for (var TB = 1; TB < arguments.length; TB++) {
        var dB = null != arguments[TB] ? arguments[TB] : {};
        TB % 2 ? kB(Object(dB), !0).forEach((function(TB) {
          OB(BB, TB, dB[TB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : kB(Object(dB)).forEach((function(TB) {
          Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
        }))
      }
      return BB
    }

    function OB(BB, TB, dB) {
      return (TB = function(BB) {
        var TB = function(BB, TB) {
          if ("object" != JB(BB) || !BB) return BB;
          var dB = BB[Symbol.toPrimitive];
          if (void 0 !== dB) {
            var VB = dB.call(BB, TB || "default");
            if ("object" != JB(VB)) return VB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === TB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == JB(TB) ? TB : TB + ""
      }(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }
    var DB = function(BB, TB, dB, VB, yB) {
        var pB, lB = Math.min(Math.abs(dB) / 2, Math.abs(VB) / 2),
          JB = VB >= 0 ? 1 : -1,
          YB = dB >= 0 ? 1 : -1,
          gB = VB >= 0 && dB >= 0 || VB < 0 && dB < 0 ? 1 : 0;
        if (lB > 0 && yB instanceof Array) {
          for (var oB = [0, 0, 0, 0], kB = 0; kB < 4; kB++) oB[kB] = yB[kB] > lB ? lB : yB[kB];
          pB = "M".concat(BB, ",").concat(TB + JB * oB[0]), oB[0] > 0 && (pB += "A ".concat(oB[0], ",").concat(oB[0], ",0,0,").concat(gB, ",").concat(BB + YB * oB[0], ",").concat(TB)), pB += "L ".concat(BB + dB - YB * oB[1], ",").concat(TB), oB[1] > 0 && (pB += "A ".concat(oB[1], ",").concat(oB[1], ",0,0,").concat(gB, ",\n        ").concat(BB + dB, ",").concat(TB + JB * oB[1])), pB += "L ".concat(BB + dB, ",").concat(TB + VB - JB * oB[2]), oB[2] > 0 && (pB += "A ".concat(oB[2], ",").concat(oB[2], ",0,0,").concat(gB, ",\n        ").concat(BB + dB - YB * oB[2], ",").concat(TB + VB)), pB += "L ".concat(BB + YB * oB[3], ",").concat(TB + VB), oB[3] > 0 && (pB += "A ".concat(oB[3], ",").concat(oB[3], ",0,0,").concat(gB, ",\n        ").concat(BB, ",").concat(TB + VB - JB * oB[3])), pB += "Z"
        } else if (lB > 0 && yB === +yB && yB > 0) {
          var LB = Math.min(lB, yB);
          pB = "M ".concat(BB, ",").concat(TB + JB * LB, "\n            A ").concat(LB, ",").concat(LB, ",0,0,").concat(gB, ",").concat(BB + YB * LB, ",").concat(TB, "\n            L ").concat(BB + dB - YB * LB, ",").concat(TB, "\n            A ").concat(LB, ",").concat(LB, ",0,0,").concat(gB, ",").concat(BB + dB, ",").concat(TB + JB * LB, "\n            L ").concat(BB + dB, ",").concat(TB + VB - JB * LB, "\n            A ").concat(LB, ",").concat(LB, ",0,0,").concat(gB, ",").concat(BB + dB - YB * LB, ",").concat(TB + VB, "\n            L ").concat(BB + YB * LB, ",").concat(TB + VB, "\n            A ").concat(LB, ",").concat(LB, ",0,0,").concat(gB, ",").concat(BB, ",").concat(TB + VB - JB * LB, " Z")
        } else pB = "M ".concat(BB, ",").concat(TB, " h ").concat(dB, " v ").concat(VB, " h ").concat(-dB, " Z");
        return pB
      },
      uB = function(BB, TB) {
        if (!BB || !TB) return !1;
        var dB = BB.x,
          VB = BB.y,
          yB = TB.x,
          pB = TB.y,
          lB = TB.width,
          JB = TB.height;
        if (Math.abs(lB) > 0 && Math.abs(JB) > 0) {
          var YB = Math.min(yB, yB + lB),
            gB = Math.max(yB, yB + lB),
            oB = Math.min(pB, pB + JB),
            kB = Math.max(pB, pB + JB);
          return dB >= YB && dB <= gB && VB >= oB && VB <= kB
        }
        return !1
      },
      HB = {
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
      EB = function(BB) {
        var TB = LB(LB({}, HB), BB),
          dB = (0, VB.useRef)(),
          JB = gB((0, VB.useState)(-1), 2),
          oB = JB[0],
          kB = JB[1];
        (0, VB.useEffect)((function() {
          if (dB.current && dB.current.getTotalLength) try {
            var BB = dB.current.getTotalLength();
            BB && kB(BB)
          } catch (TB) {}
        }), []);
        var OB = TB.x,
          uB = TB.y,
          EB = TB.width,
          vB = TB.height,
          mB = TB.radius,
          iB = TB.className,
          NB = TB.animationEasing,
          tB = TB.animationDuration,
          fB = TB.animationBegin,
          sB = TB.isAnimationActive,
          MB = TB.isUpdateAnimationActive;
        if (OB !== +OB || uB !== +uB || EB !== +EB || vB !== +vB || 0 === EB || 0 === vB) return null;
        var zB = (0, yB.e)("recharts-rectangle", iB);
        return MB ? VB.createElement(pB.e, {
          canBegin: oB > 0,
          from: {
            width: EB,
            height: vB,
            x: OB,
            y: uB
          },
          to: {
            width: EB,
            height: vB,
            x: OB,
            y: uB
          },
          duration: tB,
          animationEasing: NB,
          isActive: MB
        }, (function(BB) {
          var yB = BB.width,
            JB = BB.height,
            gB = BB.x,
            kB = BB.y;
          return VB.createElement(pB.e, {
            canBegin: oB > 0,
            from: "0px ".concat(-1 === oB ? 1 : oB, "px"),
            to: "".concat(oB, "px 0px"),
            attributeName: "strokeDasharray",
            tO: fB,
            duration: tB,
            isActive: sB,
            easing: NB
          }, VB.createElement("path", YB({}, (0, lB.d)(TB, !0), {
            className: zB,
            d: DB(gB, kB, yB, JB, mB),
            ref: dB
          })))
        })) : VB.createElement("path", YB({}, (0, lB.d)(TB, !0), {
          className: zB,
          d: DB(OB, uB, EB, vB, mB)
        }))
      }
  },
  5690: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => HB
    });
    var VB = dB(62),
      yB = dB(4486),
      pB = dB(4819),
      lB = dB(5601),
      JB = dB(4572);

    function YB(BB) {
      return YB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, YB(BB)
    }

    function gB() {
      return gB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var TB = 1; TB < arguments.length; TB++) {
          var dB = arguments[TB];
          for (var VB in dB) Object.prototype.hasOwnProperty.call(dB, VB) && (BB[VB] = dB[VB])
        }
        return BB
      }, gB.apply(this, arguments)
    }

    function oB(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function kB(BB) {
      for (var TB = 1; TB < arguments.length; TB++) {
        var dB = null != arguments[TB] ? arguments[TB] : {};
        TB % 2 ? oB(Object(dB), !0).forEach((function(TB) {
          LB(BB, TB, dB[TB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : oB(Object(dB)).forEach((function(TB) {
          Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
        }))
      }
      return BB
    }

    function LB(BB, TB, dB) {
      return (TB = function(BB) {
        var TB = function(BB, TB) {
          if ("object" != YB(BB) || !BB) return BB;
          var dB = BB[Symbol.toPrimitive];
          if (void 0 !== dB) {
            var VB = dB.call(BB, TB || "default");
            if ("object" != YB(VB)) return VB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === TB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == YB(TB) ? TB : TB + ""
      }(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }
    var OB = function(BB) {
        var TB = BB.cx,
          dB = BB.cy,
          VB = BB.radius,
          yB = BB.angle,
          pB = BB.sign,
          JB = BB.isExternal,
          YB = BB.cornerRadius,
          gB = BB.cornerIsExternal,
          oB = YB * (JB ? 1 : -1) + VB,
          kB = Math.asin(YB / oB) / lB.e,
          LB = gB ? yB : yB + pB * kB,
          OB = gB ? yB - pB * kB : yB;
        return {
          center: (0, lB.j)(TB, dB, oB, LB),
          circleTangency: (0, lB.j)(TB, dB, VB, LB),
          lineTangency: (0, lB.j)(TB, dB, oB * Math.cos(kB * lB.e), OB),
          bl: kB
        }
      },
      DB = function(BB) {
        var TB = BB.cx,
          dB = BB.cy,
          VB = BB.innerRadius,
          yB = BB.outerRadius,
          pB = BB.startAngle,
          YB = function(BB, TB) {
            return (0, JB.C)(TB - BB) * Math.min(Math.abs(TB - BB), 359.999)
          }(pB, BB.endAngle),
          gB = pB + YB,
          oB = (0, lB.j)(TB, dB, yB, pB),
          kB = (0, lB.j)(TB, dB, yB, gB),
          LB = "M ".concat(oB.x, ",").concat(oB.y, "\n    A ").concat(yB, ",").concat(yB, ",0,\n    ").concat(+(Math.abs(YB) > 180), ",").concat(+(pB > gB), ",\n    ").concat(kB.x, ",").concat(kB.y, "\n  ");
        if (VB > 0) {
          var OB = (0, lB.j)(TB, dB, VB, pB),
            DB = (0, lB.j)(TB, dB, VB, gB);
          LB += "L ".concat(DB.x, ",").concat(DB.y, "\n            A ").concat(VB, ",").concat(VB, ",0,\n            ").concat(+(Math.abs(YB) > 180), ",").concat(+(pB <= gB), ",\n            ").concat(OB.x, ",").concat(OB.y, " Z")
        } else LB += "L ".concat(TB, ",").concat(dB, " Z");
        return LB
      },
      uB = {
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
      HB = function(BB) {
        var TB = kB(kB({}, uB), BB),
          dB = TB.cx,
          lB = TB.cy,
          YB = TB.innerRadius,
          oB = TB.outerRadius,
          LB = TB.cornerRadius,
          HB = TB.forceCornerRadius,
          EB = TB.cornerIsExternal,
          vB = TB.startAngle,
          mB = TB.endAngle,
          iB = TB.className;
        if (oB < YB || vB === mB) return null;
        var NB, tB = (0, yB.e)("recharts-sector", iB),
          fB = oB - YB,
          sB = (0, JB.n)(LB, fB, 0, !0);
        return NB = sB > 0 && Math.abs(vB - mB) < 360 ? function(BB) {
          var TB = BB.cx,
            dB = BB.cy,
            VB = BB.innerRadius,
            yB = BB.outerRadius,
            pB = BB.cornerRadius,
            lB = BB.forceCornerRadius,
            YB = BB.cornerIsExternal,
            gB = BB.startAngle,
            oB = BB.endAngle,
            kB = (0, JB.C)(oB - gB),
            LB = OB({
              cx: TB,
              cy: dB,
              radius: yB,
              angle: gB,
              sign: kB,
              cornerRadius: pB,
              cornerIsExternal: YB
            }),
            uB = LB.circleTangency,
            HB = LB.lineTangency,
            EB = LB.bl,
            vB = OB({
              cx: TB,
              cy: dB,
              radius: yB,
              angle: oB,
              sign: -kB,
              cornerRadius: pB,
              cornerIsExternal: YB
            }),
            mB = vB.circleTangency,
            iB = vB.lineTangency,
            NB = vB.bl,
            tB = YB ? Math.abs(gB - oB) : Math.abs(gB - oB) - EB - NB;
          if (tB < 0) return lB ? "M ".concat(HB.x, ",").concat(HB.y, "\n        a").concat(pB, ",").concat(pB, ",0,0,1,").concat(2 * pB, ",0\n        a").concat(pB, ",").concat(pB, ",0,0,1,").concat(2 * -pB, ",0\n      ") : DB({
            cx: TB,
            cy: dB,
            innerRadius: VB,
            outerRadius: yB,
            startAngle: gB,
            endAngle: oB
          });
          var fB = "M ".concat(HB.x, ",").concat(HB.y, "\n    A").concat(pB, ",").concat(pB, ",0,0,").concat(+(kB < 0), ",").concat(uB.x, ",").concat(uB.y, "\n    A").concat(yB, ",").concat(yB, ",0,").concat(+(tB > 180), ",").concat(+(kB < 0), ",").concat(mB.x, ",").concat(mB.y, "\n    A").concat(pB, ",").concat(pB, ",0,0,").concat(+(kB < 0), ",").concat(iB.x, ",").concat(iB.y, "\n  ");
          if (VB > 0) {
            var sB = OB({
                cx: TB,
                cy: dB,
                radius: VB,
                angle: gB,
                sign: kB,
                isExternal: !0,
                cornerRadius: pB,
                cornerIsExternal: YB
              }),
              MB = sB.circleTangency,
              zB = sB.lineTangency,
              wB = sB.bl,
              UB = OB({
                cx: TB,
                cy: dB,
                radius: VB,
                angle: oB,
                sign: -kB,
                isExternal: !0,
                cornerRadius: pB,
                cornerIsExternal: YB
              }),
              FB = UB.circleTangency,
              KB = UB.lineTangency,
              rB = UB.bl,
              IB = YB ? Math.abs(gB - oB) : Math.abs(gB - oB) - wB - rB;
            if (IB < 0 && 0 === pB) return "".concat(fB, "L").concat(TB, ",").concat(dB, "Z");
            fB += "L".concat(KB.x, ",").concat(KB.y, "\n      A").concat(pB, ",").concat(pB, ",0,0,").concat(+(kB < 0), ",").concat(FB.x, ",").concat(FB.y, "\n      A").concat(VB, ",").concat(VB, ",0,").concat(+(IB > 180), ",").concat(+(kB > 0), ",").concat(MB.x, ",").concat(MB.y, "\n      A").concat(pB, ",").concat(pB, ",0,0,").concat(+(kB < 0), ",").concat(zB.x, ",").concat(zB.y, "Z")
          } else fB += "L".concat(TB, ",").concat(dB, "Z");
          return fB
        }({
          cx: dB,
          cy: lB,
          innerRadius: YB,
          outerRadius: oB,
          cornerRadius: Math.min(sB, fB / 2),
          forceCornerRadius: HB,
          cornerIsExternal: EB,
          startAngle: vB,
          endAngle: mB
        }) : DB({
          cx: dB,
          cy: lB,
          innerRadius: YB,
          outerRadius: oB,
          startAngle: vB,
          endAngle: mB
        }), VB.createElement("path", gB({}, (0, pB.d)(TB, !0), {
          className: tB,
          d: NB,
          role: "img"
        }))
      }
  },
  5426: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => WB
    });
    var VB = dB(62),
      yB = dB(5434),
      pB = dB.n(yB);
    Math.abs, Math.atan2;
    const lB = Math.cos,
      JB = (Math.max, Math.min, Math.sin),
      YB = Math.sqrt,
      gB = Math.PI,
      oB = 2 * gB;
    const kB = {
        draw(BB, TB) {
          const dB = YB(TB / gB);
          BB.moveTo(dB, 0), BB.arc(0, 0, dB, 0, oB)
        }
      },
      LB = {
        draw(BB, TB) {
          const dB = YB(TB / 5) / 2;
          BB.moveTo(-3 * dB, -dB), BB.lineTo(-dB, -dB), BB.lineTo(-dB, -3 * dB), BB.lineTo(dB, -3 * dB), BB.lineTo(dB, -dB), BB.lineTo(3 * dB, -dB), BB.lineTo(3 * dB, dB), BB.lineTo(dB, dB), BB.lineTo(dB, 3 * dB), BB.lineTo(-dB, 3 * dB), BB.lineTo(-dB, dB), BB.lineTo(-3 * dB, dB), BB.closePath()
        }
      },
      OB = YB(1 / 3),
      DB = 2 * OB,
      uB = {
        draw(BB, TB) {
          const dB = YB(TB / DB),
            VB = dB * OB;
          BB.moveTo(0, -dB), BB.lineTo(VB, 0), BB.lineTo(0, dB), BB.lineTo(-VB, 0), BB.closePath()
        }
      },
      HB = {
        draw(BB, TB) {
          const dB = YB(TB),
            VB = -dB / 2;
          BB.rect(VB, VB, dB, dB)
        }
      },
      EB = JB(gB / 10) / JB(7 * gB / 10),
      vB = JB(oB / 10) * EB,
      mB = -lB(oB / 10) * EB,
      iB = {
        draw(BB, TB) {
          const dB = YB(.8908130915292852 * TB),
            VB = vB * dB,
            yB = mB * dB;
          BB.moveTo(0, -dB), BB.lineTo(VB, yB);
          for (let pB = 1; pB < 5; ++pB) {
            const TB = oB * pB / 5,
              YB = lB(TB),
              gB = JB(TB);
            BB.lineTo(gB * dB, -YB * dB), BB.lineTo(YB * VB - gB * yB, gB * VB + YB * yB)
          }
          BB.closePath()
        }
      },
      NB = YB(3),
      tB = {
        draw(BB, TB) {
          const dB = -YB(TB / (3 * NB));
          BB.moveTo(0, 2 * dB), BB.lineTo(-NB * dB, -dB), BB.lineTo(NB * dB, -dB), BB.closePath()
        }
      },
      fB = -.5,
      sB = YB(3) / 2,
      MB = 1 / YB(12),
      zB = 3 * (MB / 2 + 1),
      wB = {
        draw(BB, TB) {
          const dB = YB(TB / zB),
            VB = dB / 2,
            yB = dB * MB,
            pB = VB,
            lB = dB * MB + dB,
            JB = -pB,
            gB = lB;
          BB.moveTo(VB, yB), BB.lineTo(pB, lB), BB.lineTo(JB, gB), BB.lineTo(fB * VB - sB * yB, sB * VB + fB * yB), BB.lineTo(fB * pB - sB * lB, sB * pB + fB * lB), BB.lineTo(fB * JB - sB * gB, sB * JB + fB * gB), BB.lineTo(fB * VB + sB * yB, fB * yB - sB * VB), BB.lineTo(fB * pB + sB * lB, fB * lB - sB * pB), BB.lineTo(fB * JB + sB * gB, fB * gB - sB * JB), BB.closePath()
        }
      };
    var UB = dB(5478),
      FB = dB(5481);
    YB(3), YB(3);
    var KB = dB(4486),
      rB = dB(4819);

    function IB(BB) {
      return IB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, IB(BB)
    }
    var cB = ["type", "size", "sizeType"];

    function SB() {
      return SB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var TB = 1; TB < arguments.length; TB++) {
          var dB = arguments[TB];
          for (var VB in dB) Object.prototype.hasOwnProperty.call(dB, VB) && (BB[VB] = dB[VB])
        }
        return BB
      }, SB.apply(this, arguments)
    }

    function PB(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function QB(BB) {
      for (var TB = 1; TB < arguments.length; TB++) {
        var dB = null != arguments[TB] ? arguments[TB] : {};
        TB % 2 ? PB(Object(dB), !0).forEach((function(TB) {
          RB(BB, TB, dB[TB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : PB(Object(dB)).forEach((function(TB) {
          Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
        }))
      }
      return BB
    }

    function RB(BB, TB, dB) {
      return (TB = function(BB) {
        var TB = function(BB, TB) {
          if ("object" != IB(BB) || !BB) return BB;
          var dB = BB[Symbol.toPrimitive];
          if (void 0 !== dB) {
            var VB = dB.call(BB, TB || "default");
            if ("object" != IB(VB)) return VB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === TB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == IB(TB) ? TB : TB + ""
      }(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }

    function aB(BB, TB) {
      if (null == BB) return {};
      var dB, VB, yB = function(BB, TB) {
        if (null == BB) return {};
        var dB = {};
        for (var VB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, VB)) {
            if (TB.indexOf(VB) >= 0) continue;
            dB[VB] = BB[VB]
          } return dB
      }(BB, TB);
      if (Object.getOwnPropertySymbols) {
        var pB = Object.getOwnPropertySymbols(BB);
        for (VB = 0; VB < pB.length; VB++) dB = pB[VB], TB.indexOf(dB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, dB) && (yB[dB] = BB[dB])
      }
      return yB
    }
    var ZB = {
        symbolCircle: kB,
        symbolCross: LB,
        symbolDiamond: uB,
        symbolSquare: HB,
        symbolStar: iB,
        symbolTriangle: tB,
        symbolWye: wB
      },
      XB = Math.PI / 180,
      WB = function(BB) {
        var TB = BB.type,
          dB = void 0 === TB ? "circle" : TB,
          yB = BB.size,
          lB = void 0 === yB ? 64 : yB,
          JB = BB.sizeType,
          YB = void 0 === JB ? "area" : JB,
          gB = QB(QB({}, aB(BB, cB)), {}, {
            type: dB,
            size: lB,
            sizeType: YB
          }),
          oB = gB.className,
          LB = gB.cx,
          OB = gB.cy,
          DB = (0, rB.d)(gB, !0);
        return LB === +LB && OB === +OB && lB === +lB ? VB.createElement("path", SB({}, DB, {
          className: (0, KB.e)("recharts-symbols", oB),
          transform: "translate(".concat(LB, ", ").concat(OB, ")"),
          d: function() {
            var BB = function(BB) {
                var TB = "symbol".concat(pB()(BB));
                return ZB[TB] || kB
              }(dB),
              TB = function(BB, TB) {
                let dB = null,
                  VB = (0, FB.b)(yB);

                function yB() {
                  let yB;
                  if (dB || (dB = yB = VB()), BB.apply(this, arguments).draw(dB, +TB.apply(this, arguments)), yB) return dB = null, yB + "" || null
                }
                return BB = "function" === typeof BB ? BB : (0, UB.d)(BB || kB), TB = "function" === typeof TB ? TB : (0, UB.d)(void 0 === TB ? 64 : +TB), yB.type = function(TB) {
                  return arguments.length ? (BB = "function" === typeof TB ? TB : (0, UB.d)(TB), yB) : BB
                }, yB.size = function(BB) {
                  return arguments.length ? (TB = "function" === typeof BB ? BB : (0, UB.d)(+BB), yB) : TB
                }, yB.context = function(BB) {
                  return arguments.length ? (dB = null == BB ? null : BB, yB) : dB
                }, yB
              }().type(BB).size(function(BB, TB, dB) {
                if ("area" === TB) return BB;
                switch (dB) {
                  case "cross":
                    return 5 * BB * BB / 9;
                  case "diamond":
                    return .5 * BB * BB / Math.sqrt(3);
                  case "square":
                    return BB * BB;
                  case "star":
                    var VB = 18 * XB;
                    return 1.25 * BB * BB * (Math.tan(VB) - Math.tan(2 * VB) * Math.pow(Math.tan(VB), 2));
                  case "triangle":
                    return Math.sqrt(3) * BB * BB / 4;
                  case "wye":
                    return (21 - 10 * Math.sqrt(3)) * BB * BB / 8;
                  default:
                    return Math.PI * BB * BB / 4
                }
              }(lB, YB, dB));
            return TB()
          }()
        })) : null
      };
    WB.registerSymbol = function(BB, TB) {
      ZB["symbol".concat(pB()(BB))] = TB
    }
  },
  5668: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => RB,
      g: () => GB,
      i: () => aB,
      j: () => ZB,
      l: () => XB
    });
    var VB = dB(62),
      yB = dB(4660),
      pB = dB.n(yB),
      lB = dB(5673),
      JB = dB.n(lB),
      YB = dB(5686),
      gB = dB.n(YB),
      oB = dB(5569),
      kB = dB.n(oB),
      LB = dB(5489),
      OB = dB(4486),
      DB = dB(5495),
      uB = dB(4819);

    function HB(BB) {
      return HB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, HB(BB)
    }

    function EB() {
      return EB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var TB = 1; TB < arguments.length; TB++) {
          var dB = arguments[TB];
          for (var VB in dB) Object.prototype.hasOwnProperty.call(dB, VB) && (BB[VB] = dB[VB])
        }
        return BB
      }, EB.apply(this, arguments)
    }

    function vB(BB, TB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, TB) {
        var dB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != dB) {
          var VB, yB, pB, lB, JB = [],
            YB = !0,
            gB = !1;
          try {
            if (pB = (dB = dB.call(BB)).next, 0 === TB) {
              if (Object(dB) !== dB) return;
              YB = !1
            } else
              for (; !(YB = (VB = pB.call(dB)).done) && (JB.push(VB.value), JB.length !== TB); YB = !0);
          } catch (BB) {
            gB = !0, yB = BB
          } finally {
            try {
              if (!YB && null != dB.return && (lB = dB.return(), Object(lB) !== lB)) return
            } finally {
              if (gB) throw yB
            }
          }
          return JB
        }
      }(BB, TB) || function(BB, TB) {
        if (!BB) return;
        if ("string" === typeof BB) return mB(BB, TB);
        var dB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === dB && BB.constructor && (dB = BB.constructor.name);
        if ("Map" === dB || "Set" === dB) return Array.from(BB);
        if ("Arguments" === dB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(dB)) return mB(BB, TB)
      }(BB, TB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function mB(BB, TB) {
      (null == TB || TB > BB.length) && (TB = BB.length);
      for (var dB = 0, VB = new Array(TB); dB < TB; dB++) VB[dB] = BB[dB];
      return VB
    }

    function iB(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function NB(BB) {
      for (var TB = 1; TB < arguments.length; TB++) {
        var dB = null != arguments[TB] ? arguments[TB] : {};
        TB % 2 ? iB(Object(dB), !0).forEach((function(TB) {
          tB(BB, TB, dB[TB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : iB(Object(dB)).forEach((function(TB) {
          Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
        }))
      }
      return BB
    }

    function tB(BB, TB, dB) {
      return (TB = function(BB) {
        var TB = function(BB, TB) {
          if ("object" != HB(BB) || !BB) return BB;
          var dB = BB[Symbol.toPrimitive];
          if (void 0 !== dB) {
            var VB = dB.call(BB, TB || "default");
            if ("object" != HB(VB)) return VB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === TB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == HB(TB) ? TB : TB + ""
      }(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }
    var fB = function(BB, TB, dB, VB, yB) {
        var pB, lB = dB - VB;
        return pB = "M ".concat(BB, ",").concat(TB), pB += "L ".concat(BB + dB, ",").concat(TB), pB += "L ".concat(BB + dB - lB / 2, ",").concat(TB + yB), pB += "L ".concat(BB + dB - lB / 2 - VB, ",").concat(TB + yB), pB += "L ".concat(BB, ",").concat(TB, " Z")
      },
      sB = {
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
      MB = function(BB) {
        var TB = NB(NB({}, sB), BB),
          dB = (0, VB.useRef)(),
          yB = vB((0, VB.useState)(-1), 2),
          pB = yB[0],
          lB = yB[1];
        (0, VB.useEffect)((function() {
          if (dB.current && dB.current.getTotalLength) try {
            var BB = dB.current.getTotalLength();
            BB && lB(BB)
          } catch (TB) {}
        }), []);
        var JB = TB.x,
          YB = TB.y,
          gB = TB.upperWidth,
          oB = TB.lowerWidth,
          kB = TB.height,
          LB = TB.className,
          HB = TB.animationEasing,
          mB = TB.animationDuration,
          iB = TB.animationBegin,
          tB = TB.isUpdateAnimationActive;
        if (JB !== +JB || YB !== +YB || gB !== +gB || oB !== +oB || kB !== +kB || 0 === gB && 0 === oB || 0 === kB) return null;
        var MB = (0, OB.e)("recharts-trapezoid", LB);
        return tB ? VB.createElement(DB.e, {
          canBegin: pB > 0,
          from: {
            upperWidth: 0,
            lowerWidth: 0,
            height: kB,
            x: JB,
            y: YB
          },
          to: {
            upperWidth: gB,
            lowerWidth: oB,
            height: kB,
            x: JB,
            y: YB
          },
          duration: mB,
          animationEasing: HB,
          isActive: tB
        }, (function(BB) {
          var yB = BB.upperWidth,
            lB = BB.lowerWidth,
            JB = BB.height,
            YB = BB.x,
            gB = BB.y;
          return VB.createElement(DB.e, {
            canBegin: pB > 0,
            from: "0px ".concat(-1 === pB ? 1 : pB, "px"),
            to: "".concat(pB, "px 0px"),
            attributeName: "strokeDasharray",
            tO: iB,
            duration: mB,
            easing: HB
          }, VB.createElement("path", EB({}, (0, uB.d)(TB, !0), {
            className: MB,
            d: fB(YB, gB, yB, lB, JB),
            ref: dB
          })))
        })) : VB.createElement("g", null, VB.createElement("path", EB({}, (0, uB.d)(TB, !0), {
          className: MB,
          d: fB(JB, YB, gB, oB, kB)
        })))
      },
      zB = dB(5690),
      wB = dB(5361),
      UB = dB(5426),
      FB = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];

    function KB(BB) {
      return KB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, KB(BB)
    }

    function rB(BB, TB) {
      if (null == BB) return {};
      var dB, VB, yB = function(BB, TB) {
        if (null == BB) return {};
        var dB = {};
        for (var VB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, VB)) {
            if (TB.indexOf(VB) >= 0) continue;
            dB[VB] = BB[VB]
          } return dB
      }(BB, TB);
      if (Object.getOwnPropertySymbols) {
        var pB = Object.getOwnPropertySymbols(BB);
        for (VB = 0; VB < pB.length; VB++) dB = pB[VB], TB.indexOf(dB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, dB) && (yB[dB] = BB[dB])
      }
      return yB
    }

    function IB(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function cB(BB) {
      for (var TB = 1; TB < arguments.length; TB++) {
        var dB = null != arguments[TB] ? arguments[TB] : {};
        TB % 2 ? IB(Object(dB), !0).forEach((function(TB) {
          SB(BB, TB, dB[TB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : IB(Object(dB)).forEach((function(TB) {
          Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
        }))
      }
      return BB
    }

    function SB(BB, TB, dB) {
      return (TB = function(BB) {
        var TB = function(BB, TB) {
          if ("object" != KB(BB) || !BB) return BB;
          var dB = BB[Symbol.toPrimitive];
          if (void 0 !== dB) {
            var VB = dB.call(BB, TB || "default");
            if ("object" != KB(VB)) return VB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === TB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == KB(TB) ? TB : TB + ""
      }(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }

    function PB(BB, TB) {
      return cB(cB({}, TB), BB)
    }

    function QB(BB) {
      var TB = BB.shapeType,
        dB = BB.elementProps;
      switch (TB) {
        case "rectangle":
          return VB.createElement(LB.b, dB);
        case "trapezoid":
          return VB.createElement(MB, dB);
        case "sector":
          return VB.createElement(zB.e, dB);
        case "symbols":
          if (function(BB) {
              return "symbols" === BB
            }(TB)) return VB.createElement(UB.e, dB);
          break;
        default:
          return null
      }
    }

    function RB(BB) {
      var TB, dB = BB.option,
        yB = BB.shapeType,
        lB = BB.propTransformer,
        YB = void 0 === lB ? PB : lB,
        oB = BB.activeClassName,
        kB = void 0 === oB ? "recharts-active-shape" : oB,
        LB = BB.isActive,
        OB = rB(BB, FB);
      if ((0, VB.isValidElement)(dB)) TB = (0, VB.cloneElement)(dB, cB(cB({}, OB), function(BB) {
        return (0, VB.isValidElement)(BB) ? BB.props : BB
      }(dB)));
      else if (pB()(dB)) TB = dB(OB);
      else if (JB()(dB) && !gB()(dB)) {
        var DB = YB(dB, OB);
        TB = VB.createElement(QB, {
          shapeType: yB,
          elementProps: DB
        })
      } else {
        var uB = OB;
        TB = VB.createElement(QB, {
          shapeType: yB,
          elementProps: uB
        })
      }
      return LB ? VB.createElement(wB.c, {
        className: kB
      }, TB) : TB
    }

    function aB(BB, TB) {
      return null != TB && "trapezoids" in BB.props
    }

    function ZB(BB, TB) {
      return null != TB && "sectors" in BB.props
    }

    function XB(BB, TB) {
      return null != TB && "points" in BB.props
    }

    function WB(BB, TB) {
      var dB, VB, yB = BB.x === (null === TB || void 0 === TB || null === (dB = TB.labelViewBox) || void 0 === dB ? void 0 : dB.x) || BB.x === TB.x,
        pB = BB.y === (null === TB || void 0 === TB || null === (VB = TB.labelViewBox) || void 0 === VB ? void 0 : VB.y) || BB.y === TB.y;
      return yB && pB
    }

    function hB(BB, TB) {
      var dB = BB.endAngle === TB.endAngle,
        VB = BB.startAngle === TB.startAngle;
      return dB && VB
    }

    function CB(BB, TB) {
      var dB = BB.x === TB.x,
        VB = BB.y === TB.y,
        yB = BB.z === TB.z;
      return dB && VB && yB
    }

    function GB(BB) {
      var TB = BB.activeTooltipItem,
        dB = BB.graphicalItem,
        VB = BB.itemData,
        yB = function(BB, TB) {
          var dB;
          return aB(BB, TB) ? dB = "trapezoids" : ZB(BB, TB) ? dB = "sectors" : XB(BB, TB) && (dB = "points"), dB
        }(dB, TB),
        pB = function(BB, TB) {
          var dB, VB;
          return aB(BB, TB) ? null === (dB = TB.tooltipPayload) || void 0 === dB || null === (dB = dB[0]) || void 0 === dB || null === (dB = dB.payload) || void 0 === dB ? void 0 : dB.payload : ZB(BB, TB) ? null === (VB = TB.tooltipPayload) || void 0 === VB || null === (VB = VB[0]) || void 0 === VB || null === (VB = VB.payload) || void 0 === VB ? void 0 : VB.payload : XB(BB, TB) ? TB.payload : {}
        }(dB, TB),
        lB = VB.filter((function(BB, VB) {
          var lB = kB()(pB, BB),
            JB = dB.props[yB].filter((function(BB) {
              var VB = function(BB, TB) {
                var dB;
                return aB(BB, TB) ? dB = WB : ZB(BB, TB) ? dB = hB : XB(BB, TB) && (dB = CB), dB
              }(dB, TB);
              return VB(BB, TB)
            })),
            YB = dB.props[yB].indexOf(JB[JB.length - 1]);
          return lB && VB === YB
        }));
      return VB.indexOf(lB[lB.length - 1])
    }
  },
  5612: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => NB,
      c: () => EB,
      e: () => tB,
      i: () => mB,
      k: () => vB
    });
    var VB = dB(5621),
      yB = dB.n(VB),
      pB = dB(5632),
      lB = dB.n(pB),
      JB = dB(5518),
      YB = dB(4819),
      gB = dB(4572),
      oB = dB(5650);

    function kB(BB) {
      return kB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, kB(BB)
    }

    function LB(BB, TB) {
      for (var dB = 0; dB < TB.length; dB++) {
        var VB = TB[dB];
        VB.enumerable = VB.enumerable || !1, VB.configurable = !0, "value" in VB && (VB.writable = !0), Object.defineProperty(BB, HB(VB.key), VB)
      }
    }

    function OB(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function DB(BB) {
      for (var TB = 1; TB < arguments.length; TB++) {
        var dB = null != arguments[TB] ? arguments[TB] : {};
        TB % 2 ? OB(Object(dB), !0).forEach((function(TB) {
          uB(BB, TB, dB[TB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : OB(Object(dB)).forEach((function(TB) {
          Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
        }))
      }
      return BB
    }

    function uB(BB, TB, dB) {
      return (TB = HB(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }

    function HB(BB) {
      var TB = function(BB, TB) {
        if ("object" != kB(BB) || !BB) return BB;
        var dB = BB[Symbol.toPrimitive];
        if (void 0 !== dB) {
          var VB = dB.call(BB, TB || "default");
          if ("object" != kB(VB)) return VB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === TB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == kB(TB) ? TB : TB + ""
    }
    var EB = function(BB, TB, dB, VB, yB) {
        var pB = BB.width,
          lB = BB.height,
          kB = BB.layout,
          LB = BB.children,
          OB = Object.keys(TB),
          HB = {
            left: dB.left,
            leftMirror: dB.left,
            right: pB - dB.right,
            rightMirror: pB - dB.right,
            top: dB.top,
            topMirror: dB.top,
            bottom: lB - dB.bottom,
            bottomMirror: lB - dB.bottom
          },
          EB = !!(0, YB.k)(LB, oB.b);
        return OB.reduce((function(pB, lB) {
          var YB, oB, LB, OB, vB, mB = TB[lB],
            iB = mB.orientation,
            NB = mB.domain,
            tB = mB.padding,
            fB = void 0 === tB ? {} : tB,
            sB = mB.mirror,
            MB = mB.reversed,
            zB = "".concat(iB).concat(sB ? "Mirror" : "");
          if ("number" === mB.type && ("gap" === mB.padding || "no-gap" === mB.padding)) {
            var wB = NB[1] - NB[0],
              UB = 1 / 0,
              FB = mB.categoricalDomain.sort(gB.e);
            if (FB.forEach((function(BB, TB) {
                TB > 0 && (UB = Math.min((BB || 0) - (FB[TB - 1] || 0), UB))
              })), Number.isFinite(UB)) {
              var KB = UB / wB,
                rB = "vertical" === mB.layout ? dB.height : dB.width;
              if ("gap" === mB.padding && (YB = KB * rB / 2), "no-gap" === mB.padding) {
                var IB = (0, gB.n)(BB.barCategoryGap, KB * rB),
                  cB = KB * rB / 2;
                YB = cB - IB - (cB - IB) / rB * IB
              }
            }
          }
          oB = "xAxis" === VB ? [dB.left + (fB.left || 0) + (YB || 0), dB.left + dB.width - (fB.right || 0) - (YB || 0)] : "yAxis" === VB ? "horizontal" === kB ? [dB.top + dB.height - (fB.bottom || 0), dB.top + (fB.top || 0)] : [dB.top + (fB.top || 0) + (YB || 0), dB.top + dB.height - (fB.bottom || 0) - (YB || 0)] : mB.range, MB && (oB = [oB[1], oB[0]]);
          var SB = (0, JB.rb)(mB, yB, EB),
            PB = SB.scale,
            QB = SB.realScaleType;
          PB.domain(NB).range(oB), (0, JB.j)(PB);
          var RB = (0, JB.$)(PB, DB(DB({}, mB), {}, {
            realScaleType: QB
          }));
          "xAxis" === VB ? (vB = "top" === iB && !sB || "bottom" === iB && sB, LB = dB.left, OB = HB[zB] - vB * mB.height) : "yAxis" === VB && (vB = "left" === iB && !sB || "right" === iB && sB, LB = HB[zB] - vB * mB.width, OB = dB.top);
          var aB = DB(DB(DB({}, mB), RB), {}, {
            realScaleType: QB,
            x: LB,
            y: OB,
            scale: PB,
            width: "xAxis" === VB ? dB.width : mB.width,
            height: "yAxis" === VB ? dB.height : mB.height
          });
          return aB.bandSize = (0, JB.q)(aB, RB), mB.hide || "xAxis" !== VB ? mB.hide || (HB[zB] += (vB ? -1 : 1) * aB.width) : HB[zB] += (vB ? -1 : 1) * aB.height, DB(DB({}, pB), {}, uB({}, lB, aB))
        }), {})
      },
      vB = function(BB, TB) {
        var dB = BB.x,
          VB = BB.y,
          yB = TB.x,
          pB = TB.y;
        return {
          x: Math.min(dB, yB),
          y: Math.min(VB, pB),
          width: Math.abs(yB - dB),
          height: Math.abs(pB - VB)
        }
      },
      mB = function(BB) {
        var TB = BB.x1,
          dB = BB.y1,
          VB = BB.x2,
          yB = BB.y2;
        return vB({
          x: TB,
          y: dB
        }, {
          x: VB,
          y: yB
        })
      },
      iB = function() {
        function BB(TB) {
          ! function(BB, TB) {
            if (!(BB instanceof TB)) throw new TypeError("Cannot call a class as a function")
          }(this, BB), this.scale = TB
        }
        return TB = BB, dB = [{
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
          value: function(BB) {
            var TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              dB = TB.bandAware,
              VB = TB.position;
            if (void 0 !== BB) {
              if (VB) switch (VB) {
                case "start":
                default:
                  return this.scale(BB);
                case "middle":
                  var yB = this.bandwidth ? this.bandwidth() / 2 : 0;
                  return this.scale(BB) + yB;
                case "end":
                  var pB = this.bandwidth ? this.bandwidth() : 0;
                  return this.scale(BB) + pB
              }
              if (dB) {
                var lB = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(BB) + lB
              }
              return this.scale(BB)
            }
          }
        }, {
          key: "isInRange",
          value: function(BB) {
            var TB = this.range(),
              dB = TB[0],
              VB = TB[TB.length - 1];
            return dB <= VB ? BB >= dB && BB <= VB : BB >= VB && BB <= dB
          }
        }], VB = [{
          key: "create",
          value: function(TB) {
            return new BB(TB)
          }
        }], dB && LB(TB.prototype, dB), VB && LB(TB, VB), Object.defineProperty(TB, "prototype", {
          writable: !1
        }), TB;
        var TB, dB, VB
      }();
    uB(iB, "EPS", 1e-4);
    var NB = function(BB) {
      var TB = Object.keys(BB).reduce((function(TB, dB) {
        return DB(DB({}, TB), {}, uB({}, dB, iB.create(BB[dB])))
      }), {});
      return DB(DB({}, TB), {}, {
        apply: function(BB) {
          var dB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            VB = dB.bandAware,
            pB = dB.position;
          return yB()(BB, (function(BB, dB) {
            return TB[dB].apply(BB, {
              bandAware: VB,
              position: pB
            })
          }))
        },
        isInRange: function(BB) {
          return lB()(BB, (function(BB, dB) {
            return TB[dB].isInRange(BB)
          }))
        }
      })
    };
    var tB = function(BB) {
      var TB = BB.width,
        dB = BB.height,
        VB = function(BB) {
          return (BB % 180 + 180) % 180
        }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0),
        yB = VB * Math.PI / 180,
        pB = Math.atan(dB / TB),
        lB = yB > pB && yB < Math.PI - pB ? dB / Math.sin(yB) : TB / Math.cos(yB);
      return Math.abs(lB)
    }
  },
  5518: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => cl,
      i: () => Fl,
      j: () => Gl,
      n: () => Wl,
      p: () => ql,
      q: () => JJ,
      r: () => Il,
      u: () => rl,
      y: () => TJ,
      z: () => BJ,
      C: () => el,
      E: () => al,
      F: () => Ul,
      I: () => Ql,
      M: () => VJ,
      N: () => Kl,
      R: () => bl,
      V: () => dJ,
      Y: () => Zl,
      $: () => nl,
      ab: () => gJ,
      eb: () => wl,
      ib: () => Rl,
      lb: () => YJ,
      ob: () => Pl,
      rb: () => hl,
      sb: () => lJ,
      wb: () => xl
    });
    var VB = {};
    dB.r(VB), dB.d(VB, {
      scaleBand: () => yB.d,
      scaleDiverging: () => gp,
      scaleDivergingLog: () => op,
      scaleDivergingPow: () => Lp,
      scaleDivergingSqrt: () => Op,
      scaleDivergingSymlog: () => kp,
      scaleIdentity: () => jT,
      scaleImplicit: () => gd.f,
      scaleLinear: () => xT,
      scaleLog: () => yd,
      scaleOrdinal: () => gd.c,
      scalePoint: () => yB.f,
      scalePow: () => Dd,
      scaleQuantile: () => wd,
      scaleQuantize: () => Ud,
      scaleRadial: () => Ed,
      scaleSequential: () => dp,
      scaleSequentialLog: () => Vp,
      scaleSequentialPow: () => pp,
      scaleSequentialQuantile: () => Jp,
      scaleSequentialSqrt: () => lp,
      scaleSequentialSymlog: () => yp,
      scaleSqrt: () => ud,
      scaleSymlog: () => Yd,
      scaleThreshold: () => Fd,
      scaleTime: () => ny,
      scaleUtc: () => ey,
      tickFormat: () => GT
    });
    var yB = dB(5521);
    const pB = Math.sqrt(50),
      lB = Math.sqrt(10),
      JB = Math.sqrt(2);

    function YB(BB, TB, dB) {
      const VB = (TB - BB) / Math.max(0, dB),
        yB = Math.floor(Math.log10(VB)),
        gB = VB / Math.pow(10, yB),
        oB = gB >= pB ? 10 : gB >= lB ? 5 : gB >= JB ? 2 : 1;
      let kB, LB, OB;
      return yB < 0 ? (OB = Math.pow(10, -yB) / oB, kB = Math.round(BB * OB), LB = Math.round(TB * OB), kB / OB < BB && ++kB, LB / OB > TB && --LB, OB = -OB) : (OB = Math.pow(10, yB) * oB, kB = Math.round(BB / OB), LB = Math.round(TB / OB), kB * OB < BB && ++kB, LB * OB > TB && --LB), LB < kB && .5 <= dB && dB < 2 ? YB(BB, TB, 2 * dB) : [kB, LB, OB]
    }

    function gB(BB, TB, dB) {
      if (!((dB = +dB) > 0)) return [];
      if ((BB = +BB) === (TB = +TB)) return [BB];
      const VB = TB < BB,
        [yB, pB, lB] = VB ? YB(TB, BB, dB) : YB(BB, TB, dB);
      if (!(pB >= yB)) return [];
      const JB = pB - yB + 1,
        gB = new Array(JB);
      if (VB)
        if (lB < 0)
          for (let YB = 0; YB < JB; ++YB) gB[YB] = (pB - YB) / -lB;
        else
          for (let YB = 0; YB < JB; ++YB) gB[YB] = (pB - YB) * lB;
      else if (lB < 0)
        for (let YB = 0; YB < JB; ++YB) gB[YB] = (yB + YB) / -lB;
      else
        for (let YB = 0; YB < JB; ++YB) gB[YB] = (yB + YB) * lB;
      return gB
    }

    function oB(BB, TB, dB) {
      return YB(BB = +BB, TB = +TB, dB = +dB)[2]
    }

    function kB(BB, TB, dB) {
      dB = +dB;
      const VB = (TB = +TB) < (BB = +BB),
        yB = VB ? oB(TB, BB, dB) : oB(BB, TB, dB);
      return (VB ? -1 : 1) * (yB < 0 ? 1 / -yB : yB)
    }

    function LB(BB, TB) {
      return null == BB || null == TB ? NaN : BB < TB ? -1 : BB > TB ? 1 : BB >= TB ? 0 : NaN
    }

    function OB(BB, TB) {
      return null == BB || null == TB ? NaN : TB < BB ? -1 : TB > BB ? 1 : TB >= BB ? 0 : NaN
    }

    function DB(BB) {
      let TB, dB, VB;

      function yB(BB, VB) {
        let yB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          pB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB.length;
        if (yB < pB) {
          if (0 !== TB(VB, VB)) return pB;
          do {
            const TB = yB + pB >>> 1;
            dB(BB[TB], VB) < 0 ? yB = TB + 1 : pB = TB
          } while (yB < pB)
        }
        return yB
      }
      return 2 !== BB.length ? (TB = LB, dB = (TB, dB) => LB(BB(TB), dB), VB = (TB, dB) => BB(TB) - dB) : (TB = BB === LB || BB === OB ? BB : uB, dB = BB, VB = BB), {
        left: yB,
        center: function(BB, TB) {
          let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          const pB = yB(BB, TB, dB, (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB.length) - 1);
          return pB > dB && VB(BB[pB - 1], TB) > -VB(BB[pB], TB) ? pB - 1 : pB
        },
        right: function(BB, VB) {
          let yB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            pB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB.length;
          if (yB < pB) {
            if (0 !== TB(VB, VB)) return pB;
            do {
              const TB = yB + pB >>> 1;
              dB(BB[TB], VB) <= 0 ? yB = TB + 1 : pB = TB
            } while (yB < pB)
          }
          return yB
        }
      }
    }

    function uB() {
      return 0
    }

    function HB(BB) {
      return null === BB ? NaN : +BB
    }
    const EB = DB(LB),
      vB = EB.right,
      mB = (EB.left, DB(HB).center, vB);

    function iB(BB, TB, dB) {
      BB.prototype = TB.prototype = dB, dB.constructor = BB
    }

    function NB(BB, TB) {
      var dB = Object.create(BB.prototype);
      for (var VB in TB) dB[VB] = TB[VB];
      return dB
    }

    function tB() {}
    var fB = .7,
      sB = 1 / fB,
      MB = "\\s*([+-]?\\d+)\\s*",
      zB = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      wB = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      UB = /^#([0-9a-f]{3,8})$/,
      FB = new RegExp(`^rgb\\(${MB},${MB},${MB}\\)$`),
      KB = new RegExp(`^rgb\\(${wB},${wB},${wB}\\)$`),
      rB = new RegExp(`^rgba\\(${MB},${MB},${MB},${zB}\\)$`),
      IB = new RegExp(`^rgba\\(${wB},${wB},${wB},${zB}\\)$`),
      cB = new RegExp(`^hsl\\(${zB},${wB},${wB}\\)$`),
      SB = new RegExp(`^hsla\\(${zB},${wB},${wB},${zB}\\)$`),
      PB = {
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

    function QB() {
      return this.rgb().formatHex()
    }

    function RB() {
      return this.rgb().formatRgb()
    }

    function aB(BB) {
      var TB, dB;
      return BB = (BB + "").trim().toLowerCase(), (TB = UB.exec(BB)) ? (dB = TB[1].length, TB = parseInt(TB[1], 16), 6 === dB ? ZB(TB) : 3 === dB ? new hB(TB >> 8 & 15 | TB >> 4 & 240, TB >> 4 & 15 | 240 & TB, (15 & TB) << 4 | 15 & TB, 1) : 8 === dB ? XB(TB >> 24 & 255, TB >> 16 & 255, TB >> 8 & 255, (255 & TB) / 255) : 4 === dB ? XB(TB >> 12 & 15 | TB >> 8 & 240, TB >> 8 & 15 | TB >> 4 & 240, TB >> 4 & 15 | 240 & TB, ((15 & TB) << 4 | 15 & TB) / 255) : null) : (TB = FB.exec(BB)) ? new hB(TB[1], TB[2], TB[3], 1) : (TB = KB.exec(BB)) ? new hB(255 * TB[1] / 100, 255 * TB[2] / 100, 255 * TB[3] / 100, 1) : (TB = rB.exec(BB)) ? XB(TB[1], TB[2], TB[3], TB[4]) : (TB = IB.exec(BB)) ? XB(255 * TB[1] / 100, 255 * TB[2] / 100, 255 * TB[3] / 100, TB[4]) : (TB = cB.exec(BB)) ? AB(TB[1], TB[2] / 100, TB[3] / 100, 1) : (TB = SB.exec(BB)) ? AB(TB[1], TB[2] / 100, TB[3] / 100, TB[4]) : PB.hasOwnProperty(BB) ? ZB(PB[BB]) : "transparent" === BB ? new hB(NaN, NaN, NaN, 0) : null
    }

    function ZB(BB) {
      return new hB(BB >> 16 & 255, BB >> 8 & 255, 255 & BB, 1)
    }

    function XB(BB, TB, dB, VB) {
      return VB <= 0 && (BB = TB = dB = NaN), new hB(BB, TB, dB, VB)
    }

    function WB(BB, TB, dB, VB) {
      return 1 === arguments.length ? ((yB = BB) instanceof tB || (yB = aB(yB)), yB ? new hB((yB = yB.rgb()).r, yB.g, yB.b, yB.opacity) : new hB) : new hB(BB, TB, dB, null == VB ? 1 : VB);
      var yB
    }

    function hB(BB, TB, dB, VB) {
      this.r = +BB, this.g = +TB, this.b = +dB, this.opacity = +VB
    }

    function CB() {
      return `#${jB(this.r)}${jB(this.g)}${jB(this.b)}`
    }

    function GB() {
      const BB = qB(this.opacity);
      return `${1===BB?"rgb(":"rgba("}${xB(this.r)}, ${xB(this.g)}, ${xB(this.b)}${1===BB?")":`, ${BB})`}`
    }

    function qB(BB) {
      return isNaN(BB) ? 1 : Math.max(0, Math.min(1, BB))
    }

    function xB(BB) {
      return Math.max(0, Math.min(255, Math.round(BB) || 0))
    }

    function jB(BB) {
      return ((BB = xB(BB)) < 16 ? "0" : "") + BB.toString(16)
    }

    function AB(BB, TB, dB, VB) {
      return VB <= 0 ? BB = TB = dB = NaN : dB <= 0 || dB >= 1 ? BB = TB = NaN : TB <= 0 && (BB = NaN), new nB(BB, TB, dB, VB)
    }

    function bB(BB) {
      if (BB instanceof nB) return new nB(BB.h, BB.s, BB.l, BB.opacity);
      if (BB instanceof tB || (BB = aB(BB)), !BB) return new nB;
      if (BB instanceof nB) return BB;
      var TB = (BB = BB.rgb()).r / 255,
        dB = BB.g / 255,
        VB = BB.b / 255,
        yB = Math.min(TB, dB, VB),
        pB = Math.max(TB, dB, VB),
        lB = NaN,
        JB = pB - yB,
        YB = (pB + yB) / 2;
      return JB ? (lB = TB === pB ? (dB - VB) / JB + 6 * (dB < VB) : dB === pB ? (VB - TB) / JB + 2 : (TB - dB) / JB + 4, JB /= YB < .5 ? pB + yB : 2 - pB - yB, lB *= 60) : JB = YB > 0 && YB < 1 ? 0 : lB, new nB(lB, JB, YB, BB.opacity)
    }

    function nB(BB, TB, dB, VB) {
      this.h = +BB, this.s = +TB, this.l = +dB, this.opacity = +VB
    }

    function eB(BB) {
      return (BB = (BB || 0) % 360) < 0 ? BB + 360 : BB
    }

    function BT(BB) {
      return Math.max(0, Math.min(1, BB || 0))
    }

    function TT(BB, TB, dB) {
      return 255 * (BB < 60 ? TB + (dB - TB) * BB / 60 : BB < 180 ? dB : BB < 240 ? TB + (dB - TB) * (240 - BB) / 60 : TB)
    }

    function dT(BB, TB, dB, VB, yB) {
      var pB = BB * BB,
        lB = pB * BB;
      return ((1 - 3 * BB + 3 * pB - lB) * TB + (4 - 6 * pB + 3 * lB) * dB + (1 + 3 * BB + 3 * pB - 3 * lB) * VB + lB * yB) / 6
    }
    iB(tB, aB, {
      copy(BB) {
        return Object.assign(new this.constructor, this, BB)
      },
      displayable() {
        return this.rgb().displayable()
      },
      hex: QB,
      formatHex: QB,
      formatHex8: function() {
        return this.rgb().formatHex8()
      },
      formatHsl: function() {
        return bB(this).formatHsl()
      },
      formatRgb: RB,
      toString: RB
    }), iB(hB, WB, NB(tB, {
      brighter(BB) {
        return BB = null == BB ? sB : Math.pow(sB, BB), new hB(this.r * BB, this.g * BB, this.b * BB, this.opacity)
      },
      darker(BB) {
        return BB = null == BB ? fB : Math.pow(fB, BB), new hB(this.r * BB, this.g * BB, this.b * BB, this.opacity)
      },
      rgb() {
        return this
      },
      clamp() {
        return new hB(xB(this.r), xB(this.g), xB(this.b), qB(this.opacity))
      },
      displayable() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
      },
      hex: CB,
      formatHex: CB,
      formatHex8: function() {
        return `#${jB(this.r)}${jB(this.g)}${jB(this.b)}${jB(255*(isNaN(this.opacity)?1:this.opacity))}`
      },
      formatRgb: GB,
      toString: GB
    })), iB(nB, (function(BB, TB, dB, VB) {
      return 1 === arguments.length ? bB(BB) : new nB(BB, TB, dB, null == VB ? 1 : VB)
    }), NB(tB, {
      brighter(BB) {
        return BB = null == BB ? sB : Math.pow(sB, BB), new nB(this.h, this.s, this.l * BB, this.opacity)
      },
      darker(BB) {
        return BB = null == BB ? fB : Math.pow(fB, BB), new nB(this.h, this.s, this.l * BB, this.opacity)
      },
      rgb() {
        var BB = this.h % 360 + 360 * (this.h < 0),
          TB = isNaN(BB) || isNaN(this.s) ? 0 : this.s,
          dB = this.l,
          VB = dB + (dB < .5 ? dB : 1 - dB) * TB,
          yB = 2 * dB - VB;
        return new hB(TT(BB >= 240 ? BB - 240 : BB + 120, yB, VB), TT(BB, yB, VB), TT(BB < 120 ? BB + 240 : BB - 120, yB, VB), this.opacity)
      },
      clamp() {
        return new nB(eB(this.h), BT(this.s), BT(this.l), qB(this.opacity))
      },
      displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
      },
      formatHsl() {
        const BB = qB(this.opacity);
        return `${1===BB?"hsl(":"hsla("}${eB(this.h)}, ${100*BT(this.s)}%, ${100*BT(this.l)}%${1===BB?")":`, ${BB})`}`
      }
    }));
    const VT = BB => () => BB;

    function yT(BB, TB) {
      return function(dB) {
        return BB + dB * TB
      }
    }

    function pT(BB) {
      return 1 === (BB = +BB) ? lT : function(TB, dB) {
        return dB - TB ? function(BB, TB, dB) {
          return BB = Math.pow(BB, dB), TB = Math.pow(TB, dB) - BB, dB = 1 / dB,
            function(VB) {
              return Math.pow(BB + VB * TB, dB)
            }
        }(TB, dB, BB) : VT(isNaN(TB) ? dB : TB)
      }
    }

    function lT(BB, TB) {
      var dB = TB - BB;
      return dB ? yT(BB, dB) : VT(isNaN(BB) ? TB : BB)
    }
    const JT = function BB(TB) {
      var dB = pT(TB);

      function VB(BB, TB) {
        var VB = dB((BB = WB(BB)).r, (TB = WB(TB)).r),
          yB = dB(BB.g, TB.g),
          pB = dB(BB.b, TB.b),
          lB = lT(BB.opacity, TB.opacity);
        return function(TB) {
          return BB.r = VB(TB), BB.g = yB(TB), BB.b = pB(TB), BB.opacity = lB(TB), BB + ""
        }
      }
      return VB.gamma = BB, VB
    }(1);

    function YT(BB) {
      return function(TB) {
        var dB, VB, yB = TB.length,
          pB = new Array(yB),
          lB = new Array(yB),
          JB = new Array(yB);
        for (dB = 0; dB < yB; ++dB) VB = WB(TB[dB]), pB[dB] = VB.r || 0, lB[dB] = VB.g || 0, JB[dB] = VB.b || 0;
        return pB = BB(pB), lB = BB(lB), JB = BB(JB), VB.opacity = 1,
          function(BB) {
            return VB.r = pB(BB), VB.g = lB(BB), VB.b = JB(BB), VB + ""
          }
      }
    }
    YT((function(BB) {
      var TB = BB.length - 1;
      return function(dB) {
        var VB = dB <= 0 ? dB = 0 : dB >= 1 ? (dB = 1, TB - 1) : Math.floor(dB * TB),
          yB = BB[VB],
          pB = BB[VB + 1],
          lB = VB > 0 ? BB[VB - 1] : 2 * yB - pB,
          JB = VB < TB - 1 ? BB[VB + 2] : 2 * pB - yB;
        return dT((dB - VB / TB) * TB, lB, yB, pB, JB)
      }
    })), YT((function(BB) {
      var TB = BB.length;
      return function(dB) {
        var VB = Math.floor(((dB %= 1) < 0 ? ++dB : dB) * TB),
          yB = BB[(VB + TB - 1) % TB],
          pB = BB[VB % TB],
          lB = BB[(VB + 1) % TB],
          JB = BB[(VB + 2) % TB];
        return dT((dB - VB / TB) * TB, yB, pB, lB, JB)
      }
    }));

    function gT(BB, TB) {
      var dB, VB = TB ? TB.length : 0,
        yB = BB ? Math.min(VB, BB.length) : 0,
        pB = new Array(yB),
        lB = new Array(VB);
      for (dB = 0; dB < yB; ++dB) pB[dB] = ET(BB[dB], TB[dB]);
      for (; dB < VB; ++dB) lB[dB] = TB[dB];
      return function(BB) {
        for (dB = 0; dB < yB; ++dB) lB[dB] = pB[dB](BB);
        return lB
      }
    }

    function oT(BB, TB) {
      var dB = new Date;
      return BB = +BB, TB = +TB,
        function(VB) {
          return dB.setTime(BB * (1 - VB) + TB * VB), dB
        }
    }

    function kT(BB, TB) {
      return BB = +BB, TB = +TB,
        function(dB) {
          return BB * (1 - dB) + TB * dB
        }
    }

    function LT(BB, TB) {
      var dB, VB = {},
        yB = {};
      for (dB in null !== BB && "object" === typeof BB || (BB = {}), null !== TB && "object" === typeof TB || (TB = {}), TB) dB in BB ? VB[dB] = ET(BB[dB], TB[dB]) : yB[dB] = TB[dB];
      return function(BB) {
        for (dB in VB) yB[dB] = VB[dB](BB);
        return yB
      }
    }
    var OT = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      DT = new RegExp(OT.source, "g");

    function uT(BB, TB) {
      var dB, VB, yB, pB = OT.lastIndex = DT.lastIndex = 0,
        lB = -1,
        JB = [],
        YB = [];
      for (BB += "", TB += "";
        (dB = OT.exec(BB)) && (VB = DT.exec(TB));)(yB = VB.index) > pB && (yB = TB.slice(pB, yB), JB[lB] ? JB[lB] += yB : JB[++lB] = yB), (dB = dB[0]) === (VB = VB[0]) ? JB[lB] ? JB[lB] += VB : JB[++lB] = VB : (JB[++lB] = null, YB.push({
        i: lB,
        x: kT(dB, VB)
      })), pB = DT.lastIndex;
      return pB < TB.length && (yB = TB.slice(pB), JB[lB] ? JB[lB] += yB : JB[++lB] = yB), JB.length < 2 ? YB[0] ? function(BB) {
        return function(TB) {
          return BB(TB) + ""
        }
      }(YB[0].x) : function(BB) {
        return function() {
          return BB
        }
      }(TB) : (TB = YB.length, function(BB) {
        for (var dB, VB = 0; VB < TB; ++VB) JB[(dB = YB[VB]).i] = dB.x(BB);
        return JB.join("")
      })
    }

    function HT(BB, TB) {
      TB || (TB = []);
      var dB, VB = BB ? Math.min(TB.length, BB.length) : 0,
        yB = TB.slice();
      return function(pB) {
        for (dB = 0; dB < VB; ++dB) yB[dB] = BB[dB] * (1 - pB) + TB[dB] * pB;
        return yB
      }
    }

    function ET(BB, TB) {
      var dB, VB, yB = typeof TB;
      return null == TB || "boolean" === yB ? VT(TB) : ("number" === yB ? kT : "string" === yB ? (dB = aB(TB)) ? (TB = dB, JT) : uT : TB instanceof aB ? JT : TB instanceof Date ? oT : (VB = TB, !ArrayBuffer.isView(VB) || VB instanceof DataView ? Array.isArray(TB) ? gT : "function" !== typeof TB.valueOf && "function" !== typeof TB.toString || isNaN(TB) ? LT : kT : HT))(BB, TB)
    }

    function vT(BB, TB) {
      return BB = +BB, TB = +TB,
        function(dB) {
          return Math.round(BB * (1 - dB) + TB * dB)
        }
    }

    function mT(BB) {
      return +BB
    }
    var iT = [0, 1];

    function NT(BB) {
      return BB
    }

    function tT(BB, TB) {
      return (TB -= BB = +BB) ? function(dB) {
        return (dB - BB) / TB
      } : (dB = isNaN(TB) ? NaN : .5, function() {
        return dB
      });
      var dB
    }

    function fT(BB, TB, dB) {
      var VB = BB[0],
        yB = BB[1],
        pB = TB[0],
        lB = TB[1];
      return yB < VB ? (VB = tT(yB, VB), pB = dB(lB, pB)) : (VB = tT(VB, yB), pB = dB(pB, lB)),
        function(BB) {
          return pB(VB(BB))
        }
    }

    function sT(BB, TB, dB) {
      var VB = Math.min(BB.length, TB.length) - 1,
        yB = new Array(VB),
        pB = new Array(VB),
        lB = -1;
      for (BB[VB] < BB[0] && (BB = BB.slice().reverse(), TB = TB.slice().reverse()); ++lB < VB;) yB[lB] = tT(BB[lB], BB[lB + 1]), pB[lB] = dB(TB[lB], TB[lB + 1]);
      return function(TB) {
        var dB = mB(BB, TB, 1, VB) - 1;
        return pB[dB](yB[dB](TB))
      }
    }

    function MT(BB, TB) {
      return TB.domain(BB.domain()).range(BB.range()).interpolate(BB.interpolate()).clamp(BB.clamp()).unknown(BB.unknown())
    }

    function zT() {
      var BB, TB, dB, VB, yB, pB, lB = iT,
        JB = iT,
        YB = ET,
        gB = NT;

      function oB() {
        var BB = Math.min(lB.length, JB.length);
        return gB !== NT && (gB = function(BB, TB) {
          var dB;
          return BB > TB && (dB = BB, BB = TB, TB = dB),
            function(dB) {
              return Math.max(BB, Math.min(TB, dB))
            }
        }(lB[0], lB[BB - 1])), VB = BB > 2 ? sT : fT, yB = pB = null, kB
      }

      function kB(TB) {
        return null == TB || isNaN(TB = +TB) ? dB : (yB || (yB = VB(lB.map(BB), JB, YB)))(BB(gB(TB)))
      }
      return kB.invert = function(dB) {
          return gB(TB((pB || (pB = VB(JB, lB.map(BB), kT)))(dB)))
        }, kB.domain = function(BB) {
          return arguments.length ? (lB = Array.from(BB, mT), oB()) : lB.slice()
        }, kB.range = function(BB) {
          return arguments.length ? (JB = Array.from(BB), oB()) : JB.slice()
        }, kB.rangeRound = function(BB) {
          return JB = Array.from(BB), YB = vT, oB()
        }, kB.clamp = function(BB) {
          return arguments.length ? (gB = !!BB || NT, oB()) : gB !== NT
        }, kB.interpolate = function(BB) {
          return arguments.length ? (YB = BB, oB()) : YB
        }, kB.unknown = function(BB) {
          return arguments.length ? (dB = BB, kB) : dB
        },
        function(dB, VB) {
          return BB = dB, TB = VB, oB()
        }
    }

    function wT() {
      return zT()(NT, NT)
    }
    var UT, FT = dB(5526),
      KT = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function rT(BB) {
      if (!(TB = KT.exec(BB))) throw new Error("invalid format: " + BB);
      var TB;
      return new IT({
        fill: TB[1],
        align: TB[2],
        sign: TB[3],
        symbol: TB[4],
        zero: TB[5],
        width: TB[6],
        comma: TB[7],
        precision: TB[8] && TB[8].slice(1),
        trim: TB[9],
        type: TB[10]
      })
    }

    function IT(BB) {
      this.fill = void 0 === BB.fill ? " " : BB.fill + "", this.align = void 0 === BB.align ? ">" : BB.align + "", this.sign = void 0 === BB.sign ? "-" : BB.sign + "", this.symbol = void 0 === BB.symbol ? "" : BB.symbol + "", this.zero = !!BB.zero, this.width = void 0 === BB.width ? void 0 : +BB.width, this.comma = !!BB.comma, this.precision = void 0 === BB.precision ? void 0 : +BB.precision, this.trim = !!BB.trim, this.type = void 0 === BB.type ? "" : BB.type + ""
    }

    function cT(BB, TB) {
      if (!isFinite(BB) || 0 === BB) return null;
      var dB = (BB = TB ? BB.toExponential(TB - 1) : BB.toExponential()).indexOf("e"),
        VB = BB.slice(0, dB);
      return [VB.length > 1 ? VB[0] + VB.slice(2) : VB, +BB.slice(dB + 1)]
    }

    function ST(BB) {
      return (BB = cT(Math.abs(BB))) ? BB[1] : NaN
    }

    function PT(BB, TB) {
      var dB = cT(BB, TB);
      if (!dB) return BB + "";
      var VB = dB[0],
        yB = dB[1];
      return yB < 0 ? "0." + new Array(-yB).join("0") + VB : VB.length > yB + 1 ? VB.slice(0, yB + 1) + "." + VB.slice(yB + 1) : VB + new Array(yB - VB.length + 2).join("0")
    }
    rT.prototype = IT.prototype, IT.prototype.toString = function() {
      return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
    };
    const QT = {
      "%": (BB, TB) => (100 * BB).toFixed(TB),
      b: BB => Math.round(BB).toString(2),
      c: BB => BB + "",
      d: function(BB) {
        return Math.abs(BB = Math.round(BB)) >= 1e21 ? BB.toLocaleString("en").replace(/,/g, "") : BB.toString(10)
      },
      e: (BB, TB) => BB.toExponential(TB),
      f: (BB, TB) => BB.toFixed(TB),
      g: (BB, TB) => BB.toPrecision(TB),
      o: BB => Math.round(BB).toString(8),
      p: (BB, TB) => PT(100 * BB, TB),
      r: PT,
      s: function(BB, TB) {
        var dB = cT(BB, TB);
        if (!dB) return UT = void 0, BB.toPrecision(TB);
        var VB = dB[0],
          yB = dB[1],
          pB = yB - (UT = 3 * Math.max(-8, Math.min(8, Math.floor(yB / 3)))) + 1,
          lB = VB.length;
        return pB === lB ? VB : pB > lB ? VB + new Array(pB - lB + 1).join("0") : pB > 0 ? VB.slice(0, pB) + "." + VB.slice(pB) : "0." + new Array(1 - pB).join("0") + cT(BB, Math.max(0, TB + pB - 1))[0]
      },
      X: BB => Math.round(BB).toString(16).toUpperCase(),
      x: BB => Math.round(BB).toString(16)
    };

    function RT(BB) {
      return BB
    }
    var aT, ZT, XT, WT = Array.prototype.map,
      hT = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

    function CT(BB) {
      var TB, dB, VB = void 0 === BB.grouping || void 0 === BB.thousands ? RT : (TB = WT.call(BB.grouping, Number), dB = BB.thousands + "", function(BB, VB) {
          for (var yB = BB.length, pB = [], lB = 0, JB = TB[0], YB = 0; yB > 0 && JB > 0 && (YB + JB + 1 > VB && (JB = Math.max(1, VB - YB)), pB.push(BB.substring(yB -= JB, yB + JB)), !((YB += JB + 1) > VB));) JB = TB[lB = (lB + 1) % TB.length];
          return pB.reverse().join(dB)
        }),
        yB = void 0 === BB.currency ? "" : BB.currency[0] + "",
        pB = void 0 === BB.currency ? "" : BB.currency[1] + "",
        lB = void 0 === BB.decimal ? "." : BB.decimal + "",
        JB = void 0 === BB.numerals ? RT : function(BB) {
          return function(TB) {
            return TB.replace(/[0-9]/g, (function(TB) {
              return BB[+TB]
            }))
          }
        }(WT.call(BB.numerals, String)),
        YB = void 0 === BB.percent ? "%" : BB.percent + "",
        gB = void 0 === BB.minus ? "\u2212" : BB.minus + "",
        oB = void 0 === BB.nan ? "NaN" : BB.nan + "";

      function kB(BB, TB) {
        var dB = (BB = rT(BB)).fill,
          kB = BB.align,
          LB = BB.sign,
          OB = BB.symbol,
          DB = BB.zero,
          uB = BB.width,
          HB = BB.comma,
          EB = BB.precision,
          vB = BB.trim,
          mB = BB.type;
        "n" === mB ? (HB = !0, mB = "g") : QT[mB] || (void 0 === EB && (EB = 12), vB = !0, mB = "g"), (DB || "0" === dB && "=" === kB) && (DB = !0, dB = "0", kB = "=");
        var iB = (TB && void 0 !== TB.prefix ? TB.prefix : "") + ("$" === OB ? yB : "#" === OB && /[boxX]/.test(mB) ? "0" + mB.toLowerCase() : ""),
          NB = ("$" === OB ? pB : /[%p]/.test(mB) ? YB : "") + (TB && void 0 !== TB.suffix ? TB.suffix : ""),
          tB = QT[mB],
          fB = /[defgprs%]/.test(mB);

        function sB(BB) {
          var TB, yB, pB, YB = iB,
            OB = NB;
          if ("c" === mB) OB = tB(BB) + OB, BB = "";
          else {
            var sB = (BB = +BB) < 0 || 1 / BB < 0;
            if (BB = isNaN(BB) ? oB : tB(Math.abs(BB), EB), vB && (BB = function(BB) {
                BB: for (var TB, dB = BB.length, VB = 1, yB = -1; VB < dB; ++VB) switch (BB[VB]) {
                  case ".":
                    yB = TB = VB;
                    break;
                  case "0":
                    0 === yB && (yB = VB), TB = VB;
                    break;
                  default:
                    if (!+BB[VB]) break BB;
                    yB > 0 && (yB = 0)
                }
                return yB > 0 ? BB.slice(0, yB) + BB.slice(TB + 1) : BB
              }(BB)), sB && 0 === +BB && "+" !== LB && (sB = !1), YB = (sB ? "(" === LB ? LB : gB : "-" === LB || "(" === LB ? "" : LB) + YB, OB = ("s" !== mB || isNaN(BB) || void 0 === UT ? "" : hT[8 + UT / 3]) + OB + (sB && "(" === LB ? ")" : ""), fB)
              for (TB = -1, yB = BB.length; ++TB < yB;)
                if (48 > (pB = BB.charCodeAt(TB)) || pB > 57) {
                  OB = (46 === pB ? lB + BB.slice(TB + 1) : BB.slice(TB)) + OB, BB = BB.slice(0, TB);
                  break
                }
          }
          HB && !DB && (BB = VB(BB, 1 / 0));
          var MB = YB.length + BB.length + OB.length,
            zB = MB < uB ? new Array(uB - MB + 1).join(dB) : "";
          switch (HB && DB && (BB = VB(zB + BB, zB.length ? uB - OB.length : 1 / 0), zB = ""), kB) {
            case "<":
              BB = YB + BB + OB + zB;
              break;
            case "=":
              BB = YB + zB + BB + OB;
              break;
            case "^":
              BB = zB.slice(0, MB = zB.length >> 1) + YB + BB + OB + zB.slice(MB);
              break;
            default:
              BB = zB + YB + BB + OB
          }
          return JB(BB)
        }
        return EB = void 0 === EB ? 6 : /[gprs]/.test(mB) ? Math.max(1, Math.min(21, EB)) : Math.max(0, Math.min(20, EB)), sB.toString = function() {
          return BB + ""
        }, sB
      }
      return {
        format: kB,
        formatPrefix: function(BB, TB) {
          var dB = 3 * Math.max(-8, Math.min(8, Math.floor(ST(TB) / 3))),
            VB = Math.pow(10, -dB),
            yB = kB(((BB = rT(BB)).type = "f", BB), {
              suffix: hT[8 + dB / 3]
            });
          return function(BB) {
            return yB(VB * BB)
          }
        }
      }
    }

    function GT(BB, TB, dB, VB) {
      var yB, pB = kB(BB, TB, dB);
      switch ((VB = rT(null == VB ? ",f" : VB)).type) {
        case "s":
          var lB = Math.max(Math.abs(BB), Math.abs(TB));
          return null != VB.precision || isNaN(yB = function(BB, TB) {
            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(ST(TB) / 3))) - ST(Math.abs(BB)))
          }(pB, lB)) || (VB.precision = yB), XT(VB, lB);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != VB.precision || isNaN(yB = function(BB, TB) {
            return BB = Math.abs(BB), TB = Math.abs(TB) - BB, Math.max(0, ST(TB) - ST(BB)) + 1
          }(pB, Math.max(Math.abs(BB), Math.abs(TB)))) || (VB.precision = yB - ("e" === VB.type));
          break;
        case "f":
        case "%":
          null != VB.precision || isNaN(yB = function(BB) {
            return Math.max(0, -ST(Math.abs(BB)))
          }(pB)) || (VB.precision = yB - 2 * ("%" === VB.type))
      }
      return ZT(VB)
    }

    function qT(BB) {
      var TB = BB.domain;
      return BB.ticks = function(BB) {
        var dB = TB();
        return gB(dB[0], dB[dB.length - 1], null == BB ? 10 : BB)
      }, BB.tickFormat = function(BB, dB) {
        var VB = TB();
        return GT(VB[0], VB[VB.length - 1], null == BB ? 10 : BB, dB)
      }, BB.nice = function(dB) {
        null == dB && (dB = 10);
        var VB, yB, pB = TB(),
          lB = 0,
          JB = pB.length - 1,
          YB = pB[lB],
          gB = pB[JB],
          kB = 10;
        for (gB < YB && (yB = YB, YB = gB, gB = yB, yB = lB, lB = JB, JB = yB); kB-- > 0;) {
          if ((yB = oB(YB, gB, dB)) === VB) return pB[lB] = YB, pB[JB] = gB, TB(pB);
          if (yB > 0) YB = Math.floor(YB / yB) * yB, gB = Math.ceil(gB / yB) * yB;
          else {
            if (!(yB < 0)) break;
            YB = Math.ceil(YB * yB) / yB, gB = Math.floor(gB * yB) / yB
          }
          VB = yB
        }
        return BB
      }, BB
    }

    function xT() {
      var BB = wT();
      return BB.copy = function() {
        return MT(BB, xT())
      }, FT.g.apply(BB, arguments), qT(BB)
    }

    function jT(BB) {
      var TB;

      function dB(BB) {
        return null == BB || isNaN(BB = +BB) ? TB : BB
      }
      return dB.invert = dB, dB.domain = dB.range = function(TB) {
        return arguments.length ? (BB = Array.from(TB, mT), dB) : BB.slice()
      }, dB.unknown = function(BB) {
        return arguments.length ? (TB = BB, dB) : TB
      }, dB.copy = function() {
        return jT(BB).unknown(TB)
      }, BB = arguments.length ? Array.from(BB, mT) : [0, 1], qT(dB)
    }

    function AT(BB, TB) {
      var dB, VB = 0,
        yB = (BB = BB.slice()).length - 1,
        pB = BB[VB],
        lB = BB[yB];
      return lB < pB && (dB = VB, VB = yB, yB = dB, dB = pB, pB = lB, lB = dB), BB[VB] = TB.floor(pB), BB[yB] = TB.ceil(lB), BB
    }

    function bT(BB) {
      return Math.log(BB)
    }

    function nT(BB) {
      return Math.exp(BB)
    }

    function eT(BB) {
      return -Math.log(-BB)
    }

    function Bd(BB) {
      return -Math.exp(-BB)
    }

    function Td(BB) {
      return isFinite(BB) ? +("1e" + BB) : BB < 0 ? 0 : BB
    }

    function dd(BB) {
      return (TB, dB) => -BB(-TB, dB)
    }

    function Vd(BB) {
      const TB = BB(bT, nT),
        dB = TB.domain;
      let VB, yB, pB = 10;

      function lB() {
        return VB = function(BB) {
          return BB === Math.E ? Math.log : 10 === BB && Math.log10 || 2 === BB && Math.log2 || (BB = Math.log(BB), TB => Math.log(TB) / BB)
        }(pB), yB = function(BB) {
          return 10 === BB ? Td : BB === Math.E ? Math.exp : TB => Math.pow(BB, TB)
        }(pB), dB()[0] < 0 ? (VB = dd(VB), yB = dd(yB), BB(eT, Bd)) : BB(bT, nT), TB
      }
      return TB.base = function(BB) {
        return arguments.length ? (pB = +BB, lB()) : pB
      }, TB.domain = function(BB) {
        return arguments.length ? (dB(BB), lB()) : dB()
      }, TB.ticks = BB => {
        const TB = dB();
        let lB = TB[0],
          JB = TB[TB.length - 1];
        const YB = JB < lB;
        YB && ([lB, JB] = [JB, lB]);
        let oB, kB, LB = VB(lB),
          OB = VB(JB);
        const DB = null == BB ? 10 : +BB;
        let uB = [];
        if (!(pB % 1) && OB - LB < DB) {
          if (LB = Math.floor(LB), OB = Math.ceil(OB), lB > 0) {
            for (; LB <= OB; ++LB)
              for (oB = 1; oB < pB; ++oB)
                if (kB = LB < 0 ? oB / yB(-LB) : oB * yB(LB), !(kB < lB)) {
                  if (kB > JB) break;
                  uB.push(kB)
                }
          } else
            for (; LB <= OB; ++LB)
              for (oB = pB - 1; oB >= 1; --oB)
                if (kB = LB > 0 ? oB / yB(-LB) : oB * yB(LB), !(kB < lB)) {
                  if (kB > JB) break;
                  uB.push(kB)
                } 2 * uB.length < DB && (uB = gB(lB, JB, DB))
        } else uB = gB(LB, OB, Math.min(OB - LB, DB)).map(yB);
        return YB ? uB.reverse() : uB
      }, TB.tickFormat = (BB, dB) => {
        if (null == BB && (BB = 10), null == dB && (dB = 10 === pB ? "s" : ","), "function" !== typeof dB && (pB % 1 || null != (dB = rT(dB)).precision || (dB.trim = !0), dB = ZT(dB)), BB === 1 / 0) return dB;
        const lB = Math.max(1, pB * BB / TB.ticks().length);
        return BB => {
          let TB = BB / yB(Math.round(VB(BB)));
          return TB * pB < pB - .5 && (TB *= pB), TB <= lB ? dB(BB) : ""
        }
      }, TB.nice = () => dB(AT(dB(), {
        floor: BB => yB(Math.floor(VB(BB))),
        ceil: BB => yB(Math.ceil(VB(BB)))
      })), TB
    }

    function yd() {
      const BB = Vd(zT()).domain([1, 10]);
      return BB.copy = () => MT(BB, yd()).base(BB.base()), FT.g.apply(BB, arguments), BB
    }

    function pd(BB) {
      return function(TB) {
        return Math.sign(TB) * Math.log1p(Math.abs(TB / BB))
      }
    }

    function ld(BB) {
      return function(TB) {
        return Math.sign(TB) * Math.expm1(Math.abs(TB)) * BB
      }
    }

    function Jd(BB) {
      var TB = 1,
        dB = BB(pd(TB), ld(TB));
      return dB.constant = function(dB) {
        return arguments.length ? BB(pd(TB = +dB), ld(TB)) : TB
      }, qT(dB)
    }

    function Yd() {
      var BB = Jd(zT());
      return BB.copy = function() {
        return MT(BB, Yd()).constant(BB.constant())
      }, FT.g.apply(BB, arguments)
    }
    aT = CT({
      thousands: ",",
      grouping: [3],
      currency: ["$", ""]
    }), ZT = aT.format, XT = aT.formatPrefix;
    var gd = dB(5532);

    function od(BB) {
      return function(TB) {
        return TB < 0 ? -Math.pow(-TB, BB) : Math.pow(TB, BB)
      }
    }

    function kd(BB) {
      return BB < 0 ? -Math.sqrt(-BB) : Math.sqrt(BB)
    }

    function Ld(BB) {
      return BB < 0 ? -BB * BB : BB * BB
    }

    function Od(BB) {
      var TB = BB(NT, NT),
        dB = 1;
      return TB.exponent = function(TB) {
        return arguments.length ? 1 === (dB = +TB) ? BB(NT, NT) : .5 === dB ? BB(kd, Ld) : BB(od(dB), od(1 / dB)) : dB
      }, qT(TB)
    }

    function Dd() {
      var BB = Od(zT());
      return BB.copy = function() {
        return MT(BB, Dd()).exponent(BB.exponent())
      }, FT.g.apply(BB, arguments), BB
    }

    function ud() {
      return Dd.apply(null, arguments).exponent(.5)
    }

    function Hd(BB) {
      return Math.sign(BB) * BB * BB
    }

    function Ed() {
      var BB, TB = wT(),
        dB = [0, 1],
        VB = !1;

      function yB(dB) {
        var yB = function(BB) {
          return Math.sign(BB) * Math.sqrt(Math.abs(BB))
        }(TB(dB));
        return isNaN(yB) ? BB : VB ? Math.round(yB) : yB
      }
      return yB.invert = function(BB) {
        return TB.invert(Hd(BB))
      }, yB.domain = function(BB) {
        return arguments.length ? (TB.domain(BB), yB) : TB.domain()
      }, yB.range = function(BB) {
        return arguments.length ? (TB.range((dB = Array.from(BB, mT)).map(Hd)), yB) : dB.slice()
      }, yB.rangeRound = function(BB) {
        return yB.range(BB).round(!0)
      }, yB.round = function(BB) {
        return arguments.length ? (VB = !!BB, yB) : VB
      }, yB.clamp = function(BB) {
        return arguments.length ? (TB.clamp(BB), yB) : TB.clamp()
      }, yB.unknown = function(TB) {
        return arguments.length ? (BB = TB, yB) : BB
      }, yB.copy = function() {
        return Ed(TB.domain(), dB).round(VB).clamp(TB.clamp()).unknown(BB)
      }, FT.g.apply(yB, arguments), qT(yB)
    }

    function vd(BB, TB) {
      let dB;
      if (void 0 === TB)
        for (const VB of BB) null != VB && (dB < VB || void 0 === dB && VB >= VB) && (dB = VB);
      else {
        let VB = -1;
        for (let yB of BB) null != (yB = TB(yB, ++VB, BB)) && (dB < yB || void 0 === dB && yB >= yB) && (dB = yB)
      }
      return dB
    }

    function md(BB, TB) {
      let dB;
      if (void 0 === TB)
        for (const VB of BB) null != VB && (dB > VB || void 0 === dB && VB >= VB) && (dB = VB);
      else {
        let VB = -1;
        for (let yB of BB) null != (yB = TB(yB, ++VB, BB)) && (dB > yB || void 0 === dB && yB >= yB) && (dB = yB)
      }
      return dB
    }

    function Nd() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : LB;
      if (BB === LB) return td;
      if ("function" !== typeof BB) throw new TypeError("compare is not a function");
      return (TB, dB) => {
        const VB = BB(TB, dB);
        return VB || 0 === VB ? VB : (0 === BB(dB, dB)) - (0 === BB(TB, TB))
      }
    }

    function td(BB, TB) {
      return (null == BB || !(BB >= BB)) - (null == TB || !(TB >= TB)) || (BB < TB ? -1 : BB > TB ? 1 : 0)
    }

    function fd(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0,
        yB = arguments.length > 4 ? arguments[4] : void 0;
      if (TB = Math.floor(TB), dB = Math.floor(Math.max(0, dB)), VB = Math.floor(Math.min(BB.length - 1, VB)), !(dB <= TB && TB <= VB)) return BB;
      for (yB = void 0 === yB ? td : Nd(yB); VB > dB;) {
        if (VB - dB > 600) {
          const pB = VB - dB + 1,
            lB = TB - dB + 1,
            JB = Math.log(pB),
            YB = .5 * Math.exp(2 * JB / 3),
            gB = .5 * Math.sqrt(JB * YB * (pB - YB) / pB) * (lB - pB / 2 < 0 ? -1 : 1);
          fd(BB, TB, Math.max(dB, Math.floor(TB - lB * YB / pB + gB)), Math.min(VB, Math.floor(TB + (pB - lB) * YB / pB + gB)), yB)
        }
        const pB = BB[TB];
        let lB = dB,
          JB = VB;
        for (sd(BB, dB, TB), yB(BB[VB], pB) > 0 && sd(BB, dB, VB); lB < JB;) {
          for (sd(BB, lB, JB), ++lB, --JB; yB(BB[lB], pB) < 0;) ++lB;
          for (; yB(BB[JB], pB) > 0;) --JB
        }
        0 === yB(BB[dB], pB) ? sd(BB, dB, JB) : (++JB, sd(BB, JB, VB)), JB <= TB && (dB = JB + 1), TB <= JB && (VB = JB - 1)
      }
      return BB
    }

    function sd(BB, TB, dB) {
      const VB = BB[TB];
      BB[TB] = BB[dB], BB[dB] = VB
    }

    function Md(BB, TB, dB) {
      if (BB = Float64Array.from(function*(BB, TB) {
          if (void 0 === TB)
            for (let dB of BB) null != dB && (dB = +dB) >= dB && (yield dB);
          else {
            let dB = -1;
            for (let VB of BB) null != (VB = TB(VB, ++dB, BB)) && (VB = +VB) >= VB && (yield VB)
          }
        }(BB, dB)), (VB = BB.length) && !isNaN(TB = +TB)) {
        if (TB <= 0 || VB < 2) return md(BB);
        if (TB >= 1) return vd(BB);
        var VB, yB = (VB - 1) * TB,
          pB = Math.floor(yB),
          lB = vd(fd(BB, pB).subarray(0, pB + 1));
        return lB + (md(BB.subarray(pB + 1)) - lB) * (yB - pB)
      }
    }

    function zd(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : HB;
      if ((VB = BB.length) && !isNaN(TB = +TB)) {
        if (TB <= 0 || VB < 2) return +dB(BB[0], 0, BB);
        if (TB >= 1) return +dB(BB[VB - 1], VB - 1, BB);
        var VB, yB = (VB - 1) * TB,
          pB = Math.floor(yB),
          lB = +dB(BB[pB], pB, BB);
        return lB + (+dB(BB[pB + 1], pB + 1, BB) - lB) * (yB - pB)
      }
    }

    function wd() {
      var BB, TB = [],
        dB = [],
        VB = [];

      function yB() {
        var BB = 0,
          yB = Math.max(1, dB.length);
        for (VB = new Array(yB - 1); ++BB < yB;) VB[BB - 1] = zd(TB, BB / yB);
        return pB
      }

      function pB(TB) {
        return null == TB || isNaN(TB = +TB) ? BB : dB[mB(VB, TB)]
      }
      return pB.invertExtent = function(BB) {
        var yB = dB.indexOf(BB);
        return yB < 0 ? [NaN, NaN] : [yB > 0 ? VB[yB - 1] : TB[0], yB < VB.length ? VB[yB] : TB[TB.length - 1]]
      }, pB.domain = function(BB) {
        if (!arguments.length) return TB.slice();
        TB = [];
        for (let dB of BB) null == dB || isNaN(dB = +dB) || TB.push(dB);
        return TB.sort(LB), yB()
      }, pB.range = function(BB) {
        return arguments.length ? (dB = Array.from(BB), yB()) : dB.slice()
      }, pB.unknown = function(TB) {
        return arguments.length ? (BB = TB, pB) : BB
      }, pB.quantiles = function() {
        return VB.slice()
      }, pB.copy = function() {
        return wd().domain(TB).range(dB).unknown(BB)
      }, FT.g.apply(pB, arguments)
    }

    function Ud() {
      var BB, TB = 0,
        dB = 1,
        VB = 1,
        yB = [.5],
        pB = [0, 1];

      function lB(TB) {
        return null != TB && TB <= TB ? pB[mB(yB, TB, 0, VB)] : BB
      }

      function JB() {
        var BB = -1;
        for (yB = new Array(VB); ++BB < VB;) yB[BB] = ((BB + 1) * dB - (BB - VB) * TB) / (VB + 1);
        return lB
      }
      return lB.domain = function(BB) {
        return arguments.length ? ([TB, dB] = BB, TB = +TB, dB = +dB, JB()) : [TB, dB]
      }, lB.range = function(BB) {
        return arguments.length ? (VB = (pB = Array.from(BB)).length - 1, JB()) : pB.slice()
      }, lB.invertExtent = function(BB) {
        var lB = pB.indexOf(BB);
        return lB < 0 ? [NaN, NaN] : lB < 1 ? [TB, yB[0]] : lB >= VB ? [yB[VB - 1], dB] : [yB[lB - 1], yB[lB]]
      }, lB.unknown = function(TB) {
        return arguments.length ? (BB = TB, lB) : lB
      }, lB.thresholds = function() {
        return yB.slice()
      }, lB.copy = function() {
        return Ud().domain([TB, dB]).range(pB).unknown(BB)
      }, FT.g.apply(qT(lB), arguments)
    }

    function Fd() {
      var BB, TB = [.5],
        dB = [0, 1],
        VB = 1;

      function yB(yB) {
        return null != yB && yB <= yB ? dB[mB(TB, yB, 0, VB)] : BB
      }
      return yB.domain = function(BB) {
        return arguments.length ? (TB = Array.from(BB), VB = Math.min(TB.length, dB.length - 1), yB) : TB.slice()
      }, yB.range = function(BB) {
        return arguments.length ? (dB = Array.from(BB), VB = Math.min(TB.length, dB.length - 1), yB) : dB.slice()
      }, yB.invertExtent = function(BB) {
        var VB = dB.indexOf(BB);
        return [TB[VB - 1], TB[VB]]
      }, yB.unknown = function(TB) {
        return arguments.length ? (BB = TB, yB) : BB
      }, yB.copy = function() {
        return Fd().domain(TB).range(dB).unknown(BB)
      }, FT.g.apply(yB, arguments)
    }
    const Kd = 1e3,
      rd = 6e4,
      Id = 36e5,
      cd = 864e5,
      Sd = 6048e5,
      Pd = 2592e6,
      Qd = 31536e6,
      Rd = new Date,
      ad = new Date;

    function Zd(BB, TB, dB, VB) {
      function yB(TB) {
        return BB(TB = 0 === arguments.length ? new Date : new Date(+TB)), TB
      }
      return yB.floor = TB => (BB(TB = new Date(+TB)), TB), yB.ceil = dB => (BB(dB = new Date(dB - 1)), TB(dB, 1), BB(dB), dB), yB.round = BB => {
        const TB = yB(BB),
          dB = yB.ceil(BB);
        return BB - TB < dB - BB ? TB : dB
      }, yB.offset = (BB, dB) => (TB(BB = new Date(+BB), null == dB ? 1 : Math.floor(dB)), BB), yB.range = (dB, VB, pB) => {
        const lB = [];
        if (dB = yB.ceil(dB), pB = null == pB ? 1 : Math.floor(pB), !(dB < VB) || !(pB > 0)) return lB;
        let JB;
        do {
          lB.push(JB = new Date(+dB)), TB(dB, pB), BB(dB)
        } while (JB < dB && dB < VB);
        return lB
      }, yB.filter = dB => Zd((TB => {
        if (TB >= TB)
          for (; BB(TB), !dB(TB);) TB.setTime(TB - 1)
      }), ((BB, VB) => {
        if (BB >= BB)
          if (VB < 0)
            for (; ++VB <= 0;)
              for (; TB(BB, -1), !dB(BB););
          else
            for (; --VB >= 0;)
              for (; TB(BB, 1), !dB(BB););
      })), dB && (yB.count = (TB, VB) => (Rd.setTime(+TB), ad.setTime(+VB), BB(Rd), BB(ad), Math.floor(dB(Rd, ad))), yB.every = BB => (BB = Math.floor(BB), isFinite(BB) && BB > 0 ? BB > 1 ? yB.filter(VB ? TB => VB(TB) % BB === 0 : TB => yB.count(0, TB) % BB === 0) : yB : null)), yB
    }
    const Xd = Zd((() => {}), ((BB, TB) => {
      BB.setTime(+BB + TB)
    }), ((BB, TB) => TB - BB));
    Xd.every = BB => (BB = Math.floor(BB), isFinite(BB) && BB > 0 ? BB > 1 ? Zd((TB => {
      TB.setTime(Math.floor(TB / BB) * BB)
    }), ((TB, dB) => {
      TB.setTime(+TB + dB * BB)
    }), ((TB, dB) => (dB - TB) / BB)) : Xd : null);
    Xd.range;
    const Wd = Zd((BB => {
        BB.setTime(BB - BB.getMilliseconds())
      }), ((BB, TB) => {
        BB.setTime(+BB + TB * Kd)
      }), ((BB, TB) => (TB - BB) / Kd), (BB => BB.getUTCSeconds())),
      hd = (Wd.range, Zd((BB => {
        BB.setTime(BB - BB.getMilliseconds() - BB.getSeconds() * Kd)
      }), ((BB, TB) => {
        BB.setTime(+BB + TB * rd)
      }), ((BB, TB) => (TB - BB) / rd), (BB => BB.getMinutes()))),
      Cd = (hd.range, Zd((BB => {
        BB.setUTCSeconds(0, 0)
      }), ((BB, TB) => {
        BB.setTime(+BB + TB * rd)
      }), ((BB, TB) => (TB - BB) / rd), (BB => BB.getUTCMinutes()))),
      Gd = (Cd.range, Zd((BB => {
        BB.setTime(BB - BB.getMilliseconds() - BB.getSeconds() * Kd - BB.getMinutes() * rd)
      }), ((BB, TB) => {
        BB.setTime(+BB + TB * Id)
      }), ((BB, TB) => (TB - BB) / Id), (BB => BB.getHours()))),
      qd = (Gd.range, Zd((BB => {
        BB.setUTCMinutes(0, 0, 0)
      }), ((BB, TB) => {
        BB.setTime(+BB + TB * Id)
      }), ((BB, TB) => (TB - BB) / Id), (BB => BB.getUTCHours()))),
      xd = (qd.range, Zd((BB => BB.setHours(0, 0, 0, 0)), ((BB, TB) => BB.setDate(BB.getDate() + TB)), ((BB, TB) => (TB - BB - (TB.getTimezoneOffset() - BB.getTimezoneOffset()) * rd) / cd), (BB => BB.getDate() - 1))),
      jd = (xd.range, Zd((BB => {
        BB.setUTCHours(0, 0, 0, 0)
      }), ((BB, TB) => {
        BB.setUTCDate(BB.getUTCDate() + TB)
      }), ((BB, TB) => (TB - BB) / cd), (BB => BB.getUTCDate() - 1))),
      Ad = (jd.range, Zd((BB => {
        BB.setUTCHours(0, 0, 0, 0)
      }), ((BB, TB) => {
        BB.setUTCDate(BB.getUTCDate() + TB)
      }), ((BB, TB) => (TB - BB) / cd), (BB => Math.floor(BB / cd))));
    Ad.range;

    function bd(BB) {
      return Zd((TB => {
        TB.setDate(TB.getDate() - (TB.getDay() + 7 - BB) % 7), TB.setHours(0, 0, 0, 0)
      }), ((BB, TB) => {
        BB.setDate(BB.getDate() + 7 * TB)
      }), ((BB, TB) => (TB - BB - (TB.getTimezoneOffset() - BB.getTimezoneOffset()) * rd) / Sd))
    }
    const nd = bd(0),
      ed = bd(1),
      BV = bd(2),
      TV = bd(3),
      dV = bd(4),
      VV = bd(5),
      yV = bd(6);
    nd.range, ed.range, BV.range, TV.range, dV.range, VV.range, yV.range;

    function pV(BB) {
      return Zd((TB => {
        TB.setUTCDate(TB.getUTCDate() - (TB.getUTCDay() + 7 - BB) % 7), TB.setUTCHours(0, 0, 0, 0)
      }), ((BB, TB) => {
        BB.setUTCDate(BB.getUTCDate() + 7 * TB)
      }), ((BB, TB) => (TB - BB) / Sd))
    }
    const lV = pV(0),
      JV = pV(1),
      YV = pV(2),
      gV = pV(3),
      oV = pV(4),
      kV = pV(5),
      LV = pV(6),
      OV = (lV.range, JV.range, YV.range, gV.range, oV.range, kV.range, LV.range, Zd((BB => {
        BB.setDate(1), BB.setHours(0, 0, 0, 0)
      }), ((BB, TB) => {
        BB.setMonth(BB.getMonth() + TB)
      }), ((BB, TB) => TB.getMonth() - BB.getMonth() + 12 * (TB.getFullYear() - BB.getFullYear())), (BB => BB.getMonth()))),
      DV = (OV.range, Zd((BB => {
        BB.setUTCDate(1), BB.setUTCHours(0, 0, 0, 0)
      }), ((BB, TB) => {
        BB.setUTCMonth(BB.getUTCMonth() + TB)
      }), ((BB, TB) => TB.getUTCMonth() - BB.getUTCMonth() + 12 * (TB.getUTCFullYear() - BB.getUTCFullYear())), (BB => BB.getUTCMonth()))),
      uV = (DV.range, Zd((BB => {
        BB.setMonth(0, 1), BB.setHours(0, 0, 0, 0)
      }), ((BB, TB) => {
        BB.setFullYear(BB.getFullYear() + TB)
      }), ((BB, TB) => TB.getFullYear() - BB.getFullYear()), (BB => BB.getFullYear())));
    uV.every = BB => isFinite(BB = Math.floor(BB)) && BB > 0 ? Zd((TB => {
      TB.setFullYear(Math.floor(TB.getFullYear() / BB) * BB), TB.setMonth(0, 1), TB.setHours(0, 0, 0, 0)
    }), ((TB, dB) => {
      TB.setFullYear(TB.getFullYear() + dB * BB)
    })) : null;
    uV.range;
    const HV = Zd((BB => {
      BB.setUTCMonth(0, 1), BB.setUTCHours(0, 0, 0, 0)
    }), ((BB, TB) => {
      BB.setUTCFullYear(BB.getUTCFullYear() + TB)
    }), ((BB, TB) => TB.getUTCFullYear() - BB.getUTCFullYear()), (BB => BB.getUTCFullYear()));
    HV.every = BB => isFinite(BB = Math.floor(BB)) && BB > 0 ? Zd((TB => {
      TB.setUTCFullYear(Math.floor(TB.getUTCFullYear() / BB) * BB), TB.setUTCMonth(0, 1), TB.setUTCHours(0, 0, 0, 0)
    }), ((TB, dB) => {
      TB.setUTCFullYear(TB.getUTCFullYear() + dB * BB)
    })) : null;
    HV.range;

    function EV(BB, TB, dB, VB, yB, pB) {
      const lB = [
        [Wd, 1, Kd],
        [Wd, 5, 5e3],
        [Wd, 15, 15e3],
        [Wd, 30, 3e4],
        [pB, 1, rd],
        [pB, 5, 3e5],
        [pB, 15, 9e5],
        [pB, 30, 18e5],
        [yB, 1, Id],
        [yB, 3, 108e5],
        [yB, 6, 216e5],
        [yB, 12, 432e5],
        [VB, 1, cd],
        [VB, 2, 1728e5],
        [dB, 1, Sd],
        [TB, 1, Pd],
        [TB, 3, 7776e6],
        [BB, 1, Qd]
      ];

      function JB(TB, dB, VB) {
        const yB = Math.abs(dB - TB) / VB,
          pB = DB((BB => {
            let [, , TB] = BB;
            return TB
          })).right(lB, yB);
        if (pB === lB.length) return BB.every(kB(TB / Qd, dB / Qd, VB));
        if (0 === pB) return Xd.every(Math.max(kB(TB, dB, VB), 1));
        const [JB, YB] = lB[yB / lB[pB - 1][2] < lB[pB][2] / yB ? pB - 1 : pB];
        return JB.every(YB)
      }
      return [function(BB, TB, dB) {
        const VB = TB < BB;
        VB && ([BB, TB] = [TB, BB]);
        const yB = dB && "function" === typeof dB.range ? dB : JB(BB, TB, dB),
          pB = yB ? yB.range(BB, +TB + 1) : [];
        return VB ? pB.reverse() : pB
      }, JB]
    }
    const [vV, mV] = EV(HV, DV, lV, Ad, qd, Cd), [iV, NV] = EV(uV, OV, nd, xd, Gd, hd);

    function tV(BB) {
      if (0 <= BB.y && BB.y < 100) {
        var TB = new Date(-1, BB.m, BB.d, BB.H, BB.M, BB.S, BB.L);
        return TB.setFullYear(BB.y), TB
      }
      return new Date(BB.y, BB.m, BB.d, BB.H, BB.M, BB.S, BB.L)
    }

    function fV(BB) {
      if (0 <= BB.y && BB.y < 100) {
        var TB = new Date(Date.UTC(-1, BB.m, BB.d, BB.H, BB.M, BB.S, BB.L));
        return TB.setUTCFullYear(BB.y), TB
      }
      return new Date(Date.UTC(BB.y, BB.m, BB.d, BB.H, BB.M, BB.S, BB.L))
    }

    function sV(BB, TB, dB) {
      return {
        y: BB,
        m: TB,
        d: dB,
        H: 0,
        M: 0,
        S: 0,
        L: 0
      }
    }
    var MV, zV, wV, UV = {
        "-": "",
        _: " ",
        0: "0"
      },
      FV = /^\s*\d+/,
      KV = /^%/,
      rV = /[\\^$*+?|[\]().{}]/g;

    function IV(BB, TB, dB) {
      var VB = BB < 0 ? "-" : "",
        yB = (VB ? -BB : BB) + "",
        pB = yB.length;
      return VB + (pB < dB ? new Array(dB - pB + 1).join(TB) + yB : yB)
    }

    function cV(BB) {
      return BB.replace(rV, "\\$&")
    }

    function SV(BB) {
      return new RegExp("^(?:" + BB.map(cV).join("|") + ")", "i")
    }

    function PV(BB) {
      return new Map(BB.map(((BB, TB) => [BB.toLowerCase(), TB])))
    }

    function QV(BB, TB, dB) {
      var VB = FV.exec(TB.slice(dB, dB + 1));
      return VB ? (BB.w = +VB[0], dB + VB[0].length) : -1
    }

    function RV(BB, TB, dB) {
      var VB = FV.exec(TB.slice(dB, dB + 1));
      return VB ? (BB.u = +VB[0], dB + VB[0].length) : -1
    }

    function aV(BB, TB, dB) {
      var VB = FV.exec(TB.slice(dB, dB + 2));
      return VB ? (BB.U = +VB[0], dB + VB[0].length) : -1
    }

    function ZV(BB, TB, dB) {
      var VB = FV.exec(TB.slice(dB, dB + 2));
      return VB ? (BB.V = +VB[0], dB + VB[0].length) : -1
    }

    function XV(BB, TB, dB) {
      var VB = FV.exec(TB.slice(dB, dB + 2));
      return VB ? (BB.W = +VB[0], dB + VB[0].length) : -1
    }

    function WV(BB, TB, dB) {
      var VB = FV.exec(TB.slice(dB, dB + 4));
      return VB ? (BB.y = +VB[0], dB + VB[0].length) : -1
    }

    function hV(BB, TB, dB) {
      var VB = FV.exec(TB.slice(dB, dB + 2));
      return VB ? (BB.y = +VB[0] + (+VB[0] > 68 ? 1900 : 2e3), dB + VB[0].length) : -1
    }

    function CV(BB, TB, dB) {
      var VB = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(TB.slice(dB, dB + 6));
      return VB ? (BB.Z = VB[1] ? 0 : -(VB[2] + (VB[3] || "00")), dB + VB[0].length) : -1
    }

    function GV(BB, TB, dB) {
      var VB = FV.exec(TB.slice(dB, dB + 1));
      return VB ? (BB.q = 3 * VB[0] - 3, dB + VB[0].length) : -1
    }

    function qV(BB, TB, dB) {
      var VB = FV.exec(TB.slice(dB, dB + 2));
      return VB ? (BB.m = VB[0] - 1, dB + VB[0].length) : -1
    }

    function xV(BB, TB, dB) {
      var VB = FV.exec(TB.slice(dB, dB + 2));
      return VB ? (BB.d = +VB[0], dB + VB[0].length) : -1
    }

    function jV(BB, TB, dB) {
      var VB = FV.exec(TB.slice(dB, dB + 3));
      return VB ? (BB.m = 0, BB.d = +VB[0], dB + VB[0].length) : -1
    }

    function AV(BB, TB, dB) {
      var VB = FV.exec(TB.slice(dB, dB + 2));
      return VB ? (BB.H = +VB[0], dB + VB[0].length) : -1
    }

    function bV(BB, TB, dB) {
      var VB = FV.exec(TB.slice(dB, dB + 2));
      return VB ? (BB.M = +VB[0], dB + VB[0].length) : -1
    }

    function nV(BB, TB, dB) {
      var VB = FV.exec(TB.slice(dB, dB + 2));
      return VB ? (BB.S = +VB[0], dB + VB[0].length) : -1
    }

    function eV(BB, TB, dB) {
      var VB = FV.exec(TB.slice(dB, dB + 3));
      return VB ? (BB.L = +VB[0], dB + VB[0].length) : -1
    }

    function By(BB, TB, dB) {
      var VB = FV.exec(TB.slice(dB, dB + 6));
      return VB ? (BB.L = Math.floor(VB[0] / 1e3), dB + VB[0].length) : -1
    }

    function Ty(BB, TB, dB) {
      var VB = KV.exec(TB.slice(dB, dB + 1));
      return VB ? dB + VB[0].length : -1
    }

    function dy(BB, TB, dB) {
      var VB = FV.exec(TB.slice(dB));
      return VB ? (BB.Q = +VB[0], dB + VB[0].length) : -1
    }

    function Vy(BB, TB, dB) {
      var VB = FV.exec(TB.slice(dB));
      return VB ? (BB.s = +VB[0], dB + VB[0].length) : -1
    }

    function yy(BB, TB) {
      return IV(BB.getDate(), TB, 2)
    }

    function py(BB, TB) {
      return IV(BB.getHours(), TB, 2)
    }

    function ly(BB, TB) {
      return IV(BB.getHours() % 12 || 12, TB, 2)
    }

    function Jy(BB, TB) {
      return IV(1 + xd.count(uV(BB), BB), TB, 3)
    }

    function Yy(BB, TB) {
      return IV(BB.getMilliseconds(), TB, 3)
    }

    function gy(BB, TB) {
      return Yy(BB, TB) + "000"
    }

    function oy(BB, TB) {
      return IV(BB.getMonth() + 1, TB, 2)
    }

    function ky(BB, TB) {
      return IV(BB.getMinutes(), TB, 2)
    }

    function Ly(BB, TB) {
      return IV(BB.getSeconds(), TB, 2)
    }

    function Oy(BB) {
      var TB = BB.getDay();
      return 0 === TB ? 7 : TB
    }

    function Dy(BB, TB) {
      return IV(nd.count(uV(BB) - 1, BB), TB, 2)
    }

    function uy(BB) {
      var TB = BB.getDay();
      return TB >= 4 || 0 === TB ? dV(BB) : dV.ceil(BB)
    }

    function Hy(BB, TB) {
      return BB = uy(BB), IV(dV.count(uV(BB), BB) + (4 === uV(BB).getDay()), TB, 2)
    }

    function Ey(BB) {
      return BB.getDay()
    }

    function vy(BB, TB) {
      return IV(ed.count(uV(BB) - 1, BB), TB, 2)
    }

    function my(BB, TB) {
      return IV(BB.getFullYear() % 100, TB, 2)
    }

    function iy(BB, TB) {
      return IV((BB = uy(BB)).getFullYear() % 100, TB, 2)
    }

    function Ny(BB, TB) {
      return IV(BB.getFullYear() % 1e4, TB, 4)
    }

    function ty(BB, TB) {
      var dB = BB.getDay();
      return IV((BB = dB >= 4 || 0 === dB ? dV(BB) : dV.ceil(BB)).getFullYear() % 1e4, TB, 4)
    }

    function fy(BB) {
      var TB = BB.getTimezoneOffset();
      return (TB > 0 ? "-" : (TB *= -1, "+")) + IV(TB / 60 | 0, "0", 2) + IV(TB % 60, "0", 2)
    }

    function sy(BB, TB) {
      return IV(BB.getUTCDate(), TB, 2)
    }

    function My(BB, TB) {
      return IV(BB.getUTCHours(), TB, 2)
    }

    function zy(BB, TB) {
      return IV(BB.getUTCHours() % 12 || 12, TB, 2)
    }

    function wy(BB, TB) {
      return IV(1 + jd.count(HV(BB), BB), TB, 3)
    }

    function Uy(BB, TB) {
      return IV(BB.getUTCMilliseconds(), TB, 3)
    }

    function Fy(BB, TB) {
      return Uy(BB, TB) + "000"
    }

    function Ky(BB, TB) {
      return IV(BB.getUTCMonth() + 1, TB, 2)
    }

    function ry(BB, TB) {
      return IV(BB.getUTCMinutes(), TB, 2)
    }

    function Iy(BB, TB) {
      return IV(BB.getUTCSeconds(), TB, 2)
    }

    function cy(BB) {
      var TB = BB.getUTCDay();
      return 0 === TB ? 7 : TB
    }

    function Sy(BB, TB) {
      return IV(lV.count(HV(BB) - 1, BB), TB, 2)
    }

    function Py(BB) {
      var TB = BB.getUTCDay();
      return TB >= 4 || 0 === TB ? oV(BB) : oV.ceil(BB)
    }

    function Qy(BB, TB) {
      return BB = Py(BB), IV(oV.count(HV(BB), BB) + (4 === HV(BB).getUTCDay()), TB, 2)
    }

    function Ry(BB) {
      return BB.getUTCDay()
    }

    function ay(BB, TB) {
      return IV(JV.count(HV(BB) - 1, BB), TB, 2)
    }

    function Zy(BB, TB) {
      return IV(BB.getUTCFullYear() % 100, TB, 2)
    }

    function Xy(BB, TB) {
      return IV((BB = Py(BB)).getUTCFullYear() % 100, TB, 2)
    }

    function Wy(BB, TB) {
      return IV(BB.getUTCFullYear() % 1e4, TB, 4)
    }

    function hy(BB, TB) {
      var dB = BB.getUTCDay();
      return IV((BB = dB >= 4 || 0 === dB ? oV(BB) : oV.ceil(BB)).getUTCFullYear() % 1e4, TB, 4)
    }

    function Cy() {
      return "+0000"
    }

    function Gy() {
      return "%"
    }

    function qy(BB) {
      return +BB
    }

    function xy(BB) {
      return Math.floor(+BB / 1e3)
    }

    function jy(BB) {
      return new Date(BB)
    }

    function Ay(BB) {
      return BB instanceof Date ? +BB : +new Date(+BB)
    }

    function by(BB, TB, dB, VB, yB, pB, lB, JB, YB, gB) {
      var oB = wT(),
        kB = oB.invert,
        LB = oB.domain,
        OB = gB(".%L"),
        DB = gB(":%S"),
        uB = gB("%I:%M"),
        HB = gB("%I %p"),
        EB = gB("%a %d"),
        vB = gB("%b %d"),
        mB = gB("%B"),
        iB = gB("%Y");

      function NB(BB) {
        return (YB(BB) < BB ? OB : JB(BB) < BB ? DB : lB(BB) < BB ? uB : pB(BB) < BB ? HB : VB(BB) < BB ? yB(BB) < BB ? EB : vB : dB(BB) < BB ? mB : iB)(BB)
      }
      return oB.invert = function(BB) {
        return new Date(kB(BB))
      }, oB.domain = function(BB) {
        return arguments.length ? LB(Array.from(BB, Ay)) : LB().map(jy)
      }, oB.ticks = function(TB) {
        var dB = LB();
        return BB(dB[0], dB[dB.length - 1], null == TB ? 10 : TB)
      }, oB.tickFormat = function(BB, TB) {
        return null == TB ? NB : gB(TB)
      }, oB.nice = function(BB) {
        var dB = LB();
        return BB && "function" === typeof BB.range || (BB = TB(dB[0], dB[dB.length - 1], null == BB ? 10 : BB)), BB ? LB(AT(dB, BB)) : oB
      }, oB.copy = function() {
        return MT(oB, by(BB, TB, dB, VB, yB, pB, lB, JB, YB, gB))
      }, oB
    }

    function ny() {
      return FT.g.apply(by(iV, NV, uV, OV, nd, xd, Gd, hd, Wd, zV).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
    }

    function ey() {
      return FT.g.apply(by(vV, mV, HV, DV, lV, jd, qd, Cd, Wd, wV).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
    }

    function Bp() {
      var BB, TB, dB, VB, yB, pB = 0,
        lB = 1,
        JB = NT,
        YB = !1;

      function gB(TB) {
        return null == TB || isNaN(TB = +TB) ? yB : JB(0 === dB ? .5 : (TB = (VB(TB) - BB) * dB, YB ? Math.max(0, Math.min(1, TB)) : TB))
      }

      function oB(BB) {
        return function(TB) {
          var dB, VB;
          return arguments.length ? ([dB, VB] = TB, JB = BB(dB, VB), gB) : [JB(0), JB(1)]
        }
      }
      return gB.domain = function(yB) {
          return arguments.length ? ([pB, lB] = yB, BB = VB(pB = +pB), TB = VB(lB = +lB), dB = BB === TB ? 0 : 1 / (TB - BB), gB) : [pB, lB]
        }, gB.clamp = function(BB) {
          return arguments.length ? (YB = !!BB, gB) : YB
        }, gB.interpolator = function(BB) {
          return arguments.length ? (JB = BB, gB) : JB
        }, gB.range = oB(ET), gB.rangeRound = oB(vT), gB.unknown = function(BB) {
          return arguments.length ? (yB = BB, gB) : yB
        },
        function(yB) {
          return VB = yB, BB = yB(pB), TB = yB(lB), dB = BB === TB ? 0 : 1 / (TB - BB), gB
        }
    }

    function Tp(BB, TB) {
      return TB.domain(BB.domain()).interpolator(BB.interpolator()).clamp(BB.clamp()).unknown(BB.unknown())
    }

    function dp() {
      var BB = qT(Bp()(NT));
      return BB.copy = function() {
        return Tp(BB, dp())
      }, FT.c.apply(BB, arguments)
    }

    function Vp() {
      var BB = Vd(Bp()).domain([1, 10]);
      return BB.copy = function() {
        return Tp(BB, Vp()).base(BB.base())
      }, FT.c.apply(BB, arguments)
    }

    function yp() {
      var BB = Jd(Bp());
      return BB.copy = function() {
        return Tp(BB, yp()).constant(BB.constant())
      }, FT.c.apply(BB, arguments)
    }

    function pp() {
      var BB = Od(Bp());
      return BB.copy = function() {
        return Tp(BB, pp()).exponent(BB.exponent())
      }, FT.c.apply(BB, arguments)
    }

    function lp() {
      return pp.apply(null, arguments).exponent(.5)
    }

    function Jp() {
      var BB = [],
        TB = NT;

      function dB(dB) {
        if (null != dB && !isNaN(dB = +dB)) return TB((mB(BB, dB, 1) - 1) / (BB.length - 1))
      }
      return dB.domain = function(TB) {
        if (!arguments.length) return BB.slice();
        BB = [];
        for (let dB of TB) null == dB || isNaN(dB = +dB) || BB.push(dB);
        return BB.sort(LB), dB
      }, dB.interpolator = function(BB) {
        return arguments.length ? (TB = BB, dB) : TB
      }, dB.range = function() {
        return BB.map(((dB, VB) => TB(VB / (BB.length - 1))))
      }, dB.quantiles = function(TB) {
        return Array.from({
          length: TB + 1
        }, ((dB, VB) => Md(BB, VB / TB)))
      }, dB.copy = function() {
        return Jp(TB).domain(BB)
      }, FT.c.apply(dB, arguments)
    }

    function Yp() {
      var BB, TB, dB, VB, yB, pB, lB, JB = 0,
        YB = .5,
        gB = 1,
        oB = 1,
        kB = NT,
        LB = !1;

      function OB(BB) {
        return isNaN(BB = +BB) ? lB : (BB = .5 + ((BB = +pB(BB)) - TB) * (oB * BB < oB * TB ? VB : yB), kB(LB ? Math.max(0, Math.min(1, BB)) : BB))
      }

      function DB(BB) {
        return function(TB) {
          var dB, VB, yB;
          return arguments.length ? ([dB, VB, yB] = TB, kB = function(BB, TB) {
            void 0 === TB && (TB = BB, BB = ET);
            for (var dB = 0, VB = TB.length - 1, yB = TB[0], pB = new Array(VB < 0 ? 0 : VB); dB < VB;) pB[dB] = BB(yB, yB = TB[++dB]);
            return function(BB) {
              var TB = Math.max(0, Math.min(VB - 1, Math.floor(BB *= VB)));
              return pB[TB](BB - TB)
            }
          }(BB, [dB, VB, yB]), OB) : [kB(0), kB(.5), kB(1)]
        }
      }
      return OB.domain = function(lB) {
          return arguments.length ? ([JB, YB, gB] = lB, BB = pB(JB = +JB), TB = pB(YB = +YB), dB = pB(gB = +gB), VB = BB === TB ? 0 : .5 / (TB - BB), yB = TB === dB ? 0 : .5 / (dB - TB), oB = TB < BB ? -1 : 1, OB) : [JB, YB, gB]
        }, OB.clamp = function(BB) {
          return arguments.length ? (LB = !!BB, OB) : LB
        }, OB.interpolator = function(BB) {
          return arguments.length ? (kB = BB, OB) : kB
        }, OB.range = DB(ET), OB.rangeRound = DB(vT), OB.unknown = function(BB) {
          return arguments.length ? (lB = BB, OB) : lB
        },
        function(lB) {
          return pB = lB, BB = lB(JB), TB = lB(YB), dB = lB(gB), VB = BB === TB ? 0 : .5 / (TB - BB), yB = TB === dB ? 0 : .5 / (dB - TB), oB = TB < BB ? -1 : 1, OB
        }
    }

    function gp() {
      var BB = qT(Yp()(NT));
      return BB.copy = function() {
        return Tp(BB, gp())
      }, FT.c.apply(BB, arguments)
    }

    function op() {
      var BB = Vd(Yp()).domain([.1, 1, 10]);
      return BB.copy = function() {
        return Tp(BB, op()).base(BB.base())
      }, FT.c.apply(BB, arguments)
    }

    function kp() {
      var BB = Jd(Yp());
      return BB.copy = function() {
        return Tp(BB, kp()).constant(BB.constant())
      }, FT.c.apply(BB, arguments)
    }

    function Lp() {
      var BB = Od(Yp());
      return BB.copy = function() {
        return Tp(BB, Lp()).exponent(BB.exponent())
      }, FT.c.apply(BB, arguments)
    }

    function Op() {
      return Lp.apply(null, arguments).exponent(.5)
    }

    function Dp(BB, TB) {
      if ((yB = BB.length) > 1)
        for (var dB, VB, yB, pB = 1, lB = BB[TB[0]], JB = lB.length; pB < yB; ++pB)
          for (VB = lB, lB = BB[TB[pB]], dB = 0; dB < JB; ++dB) lB[dB][1] += lB[dB][0] = isNaN(VB[dB][1]) ? VB[dB][0] : VB[dB][1]
    }! function(BB) {
      MV = function(BB) {
        var TB = BB.dateTime,
          dB = BB.date,
          VB = BB.time,
          yB = BB.periods,
          pB = BB.days,
          lB = BB.shortDays,
          JB = BB.months,
          YB = BB.shortMonths,
          gB = SV(yB),
          oB = PV(yB),
          kB = SV(pB),
          LB = PV(pB),
          OB = SV(lB),
          DB = PV(lB),
          uB = SV(JB),
          HB = PV(JB),
          EB = SV(YB),
          vB = PV(YB),
          mB = {
            a: function(BB) {
              return lB[BB.getDay()]
            },
            A: function(BB) {
              return pB[BB.getDay()]
            },
            b: function(BB) {
              return YB[BB.getMonth()]
            },
            B: function(BB) {
              return JB[BB.getMonth()]
            },
            c: null,
            d: yy,
            e: yy,
            f: gy,
            g: iy,
            G: ty,
            H: py,
            I: ly,
            j: Jy,
            L: Yy,
            m: oy,
            M: ky,
            p: function(BB) {
              return yB[+(BB.getHours() >= 12)]
            },
            q: function(BB) {
              return 1 + ~~(BB.getMonth() / 3)
            },
            Q: qy,
            s: xy,
            S: Ly,
            u: Oy,
            U: Dy,
            V: Hy,
            w: Ey,
            W: vy,
            x: null,
            X: null,
            y: my,
            Y: Ny,
            Z: fy,
            "%": Gy
          },
          iB = {
            a: function(BB) {
              return lB[BB.getUTCDay()]
            },
            A: function(BB) {
              return pB[BB.getUTCDay()]
            },
            b: function(BB) {
              return YB[BB.getUTCMonth()]
            },
            B: function(BB) {
              return JB[BB.getUTCMonth()]
            },
            c: null,
            d: sy,
            e: sy,
            f: Fy,
            g: Xy,
            G: hy,
            H: My,
            I: zy,
            j: wy,
            L: Uy,
            m: Ky,
            M: ry,
            p: function(BB) {
              return yB[+(BB.getUTCHours() >= 12)]
            },
            q: function(BB) {
              return 1 + ~~(BB.getUTCMonth() / 3)
            },
            Q: qy,
            s: xy,
            S: Iy,
            u: cy,
            U: Sy,
            V: Qy,
            w: Ry,
            W: ay,
            x: null,
            X: null,
            y: Zy,
            Y: Wy,
            Z: Cy,
            "%": Gy
          },
          NB = {
            a: function(BB, TB, dB) {
              var VB = OB.exec(TB.slice(dB));
              return VB ? (BB.w = DB.get(VB[0].toLowerCase()), dB + VB[0].length) : -1
            },
            A: function(BB, TB, dB) {
              var VB = kB.exec(TB.slice(dB));
              return VB ? (BB.w = LB.get(VB[0].toLowerCase()), dB + VB[0].length) : -1
            },
            b: function(BB, TB, dB) {
              var VB = EB.exec(TB.slice(dB));
              return VB ? (BB.m = vB.get(VB[0].toLowerCase()), dB + VB[0].length) : -1
            },
            B: function(BB, TB, dB) {
              var VB = uB.exec(TB.slice(dB));
              return VB ? (BB.m = HB.get(VB[0].toLowerCase()), dB + VB[0].length) : -1
            },
            c: function(BB, dB, VB) {
              return sB(BB, TB, dB, VB)
            },
            d: xV,
            e: xV,
            f: By,
            g: hV,
            G: WV,
            H: AV,
            I: AV,
            j: jV,
            L: eV,
            m: qV,
            M: bV,
            p: function(BB, TB, dB) {
              var VB = gB.exec(TB.slice(dB));
              return VB ? (BB.p = oB.get(VB[0].toLowerCase()), dB + VB[0].length) : -1
            },
            q: GV,
            Q: dy,
            s: Vy,
            S: nV,
            u: RV,
            U: aV,
            V: ZV,
            w: QV,
            W: XV,
            x: function(BB, TB, VB) {
              return sB(BB, dB, TB, VB)
            },
            X: function(BB, TB, dB) {
              return sB(BB, VB, TB, dB)
            },
            y: hV,
            Y: WV,
            Z: CV,
            "%": Ty
          };

        function tB(BB, TB) {
          return function(dB) {
            var VB, yB, pB, lB = [],
              JB = -1,
              YB = 0,
              gB = BB.length;
            for (dB instanceof Date || (dB = new Date(+dB)); ++JB < gB;) 37 === BB.charCodeAt(JB) && (lB.push(BB.slice(YB, JB)), null != (yB = UV[VB = BB.charAt(++JB)]) ? VB = BB.charAt(++JB) : yB = "e" === VB ? " " : "0", (pB = TB[VB]) && (VB = pB(dB, yB)), lB.push(VB), YB = JB + 1);
            return lB.push(BB.slice(YB, JB)), lB.join("")
          }
        }

        function fB(BB, TB) {
          return function(dB) {
            var VB, yB, pB = sV(1900, void 0, 1);
            if (sB(pB, BB, dB += "", 0) != dB.length) return null;
            if ("Q" in pB) return new Date(pB.Q);
            if ("s" in pB) return new Date(1e3 * pB.s + ("L" in pB ? pB.L : 0));
            if (TB && !("Z" in pB) && (pB.Z = 0), "p" in pB && (pB.H = pB.H % 12 + 12 * pB.p), void 0 === pB.m && (pB.m = "q" in pB ? pB.q : 0), "V" in pB) {
              if (pB.V < 1 || pB.V > 53) return null;
              "w" in pB || (pB.w = 1), "Z" in pB ? (yB = (VB = fV(sV(pB.y, 0, 1))).getUTCDay(), VB = yB > 4 || 0 === yB ? JV.ceil(VB) : JV(VB), VB = jd.offset(VB, 7 * (pB.V - 1)), pB.y = VB.getUTCFullYear(), pB.m = VB.getUTCMonth(), pB.d = VB.getUTCDate() + (pB.w + 6) % 7) : (yB = (VB = tV(sV(pB.y, 0, 1))).getDay(), VB = yB > 4 || 0 === yB ? ed.ceil(VB) : ed(VB), VB = xd.offset(VB, 7 * (pB.V - 1)), pB.y = VB.getFullYear(), pB.m = VB.getMonth(), pB.d = VB.getDate() + (pB.w + 6) % 7)
            } else("W" in pB || "U" in pB) && ("w" in pB || (pB.w = "u" in pB ? pB.u % 7 : "W" in pB ? 1 : 0), yB = "Z" in pB ? fV(sV(pB.y, 0, 1)).getUTCDay() : tV(sV(pB.y, 0, 1)).getDay(), pB.m = 0, pB.d = "W" in pB ? (pB.w + 6) % 7 + 7 * pB.W - (yB + 5) % 7 : pB.w + 7 * pB.U - (yB + 6) % 7);
            return "Z" in pB ? (pB.H += pB.Z / 100 | 0, pB.M += pB.Z % 100, fV(pB)) : tV(pB)
          }
        }

        function sB(BB, TB, dB, VB) {
          for (var yB, pB, lB = 0, JB = TB.length, YB = dB.length; lB < JB;) {
            if (VB >= YB) return -1;
            if (37 === (yB = TB.charCodeAt(lB++))) {
              if (yB = TB.charAt(lB++), !(pB = NB[yB in UV ? TB.charAt(lB++) : yB]) || (VB = pB(BB, dB, VB)) < 0) return -1
            } else if (yB != dB.charCodeAt(VB++)) return -1
          }
          return VB
        }
        return mB.x = tB(dB, mB), mB.X = tB(VB, mB), mB.c = tB(TB, mB), iB.x = tB(dB, iB), iB.X = tB(VB, iB), iB.c = tB(TB, iB), {
          format: function(BB) {
            var TB = tB(BB += "", mB);
            return TB.toString = function() {
              return BB
            }, TB
          },
          parse: function(BB) {
            var TB = fB(BB += "", !1);
            return TB.toString = function() {
              return BB
            }, TB
          },
          utcFormat: function(BB) {
            var TB = tB(BB += "", iB);
            return TB.toString = function() {
              return BB
            }, TB
          },
          utcParse: function(BB) {
            var TB = fB(BB += "", !0);
            return TB.toString = function() {
              return BB
            }, TB
          }
        }
      }(BB), zV = MV.format, MV.parse, wV = MV.utcFormat, MV.utcParse
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
    var Hp = dB(5588),
      Ep = dB(5478);

    function vp(BB) {
      for (var TB = BB.length, dB = new Array(TB); --TB >= 0;) dB[TB] = TB;
      return dB
    }

    function mp(BB, TB) {
      return BB[TB]
    }

    function ip(BB) {
      const TB = [];
      return TB.key = BB, TB
    }
    var Np = dB(5535),
      tp = dB.n(Np),
      fp = dB(5550),
      sp = dB.n(fp),
      Mp = dB(4809),
      zp = dB.n(Mp),
      wp = dB(4660),
      Up = dB.n(wp),
      Fp = dB(4576),
      Kp = dB.n(Fp),
      rp = dB(4599),
      Ip = dB.n(rp),
      cp = dB(5556),
      Sp = dB.n(cp),
      Pp = dB(4582),
      Qp = dB.n(Pp),
      Rp = dB(5434),
      ap = dB.n(Rp),
      Zp = dB(5569),
      Xp = dB.n(Zp),
      Wp = dB(4897),
      hp = dB.n(Wp),
      Cp = dB(5572),
      Gp = dB.n(Cp);

    function qp(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return xp(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(BB)) return Array.from(BB)
      }(BB) || function(BB, TB) {
        if (!BB) return;
        if ("string" === typeof BB) return xp(BB, TB);
        var dB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === dB && BB.constructor && (dB = BB.constructor.name);
        if ("Map" === dB || "Set" === dB) return Array.from(BB);
        if ("Arguments" === dB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(dB)) return xp(BB, TB)
      }(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function xp(BB, TB) {
      (null == TB || TB > BB.length) && (TB = BB.length);
      for (var dB = 0, VB = new Array(TB); dB < TB; dB++) VB[dB] = BB[dB];
      return VB
    }
    var jp = function(BB) {
        return BB
      },
      Ap = {
        "@@functional/placeholder": !0
      },
      bp = function(BB) {
        return BB === Ap
      },
      np = function(BB) {
        return function TB() {
          return 0 === arguments.length || 1 === arguments.length && bp(arguments.length <= 0 ? void 0 : arguments[0]) ? TB : BB.apply(void 0, arguments)
        }
      },
      ep = function BB(TB, dB) {
        return 1 === TB ? dB : np((function() {
          for (var VB = arguments.length, yB = new Array(VB), pB = 0; pB < VB; pB++) yB[pB] = arguments[pB];
          var lB = yB.filter((function(BB) {
            return BB !== Ap
          })).length;
          return lB >= TB ? dB.apply(void 0, yB) : BB(TB - lB, np((function() {
            for (var BB = arguments.length, TB = new Array(BB), VB = 0; VB < BB; VB++) TB[VB] = arguments[VB];
            var pB = yB.map((function(BB) {
              return bp(BB) ? TB.shift() : BB
            }));
            return dB.apply(void 0, qp(pB).concat(TB))
          })))
        }))
      },
      Bl = function(BB) {
        return ep(BB.length, BB)
      },
      Tl = function(BB, TB) {
        for (var dB = [], VB = BB; VB < TB; ++VB) dB[VB - BB] = VB;
        return dB
      },
      dl = Bl((function(BB, TB) {
        return Array.isArray(TB) ? TB.map(BB) : Object.keys(TB).map((function(BB) {
          return TB[BB]
        })).map(BB)
      })),
      Vl = function() {
        for (var BB = arguments.length, TB = new Array(BB), dB = 0; dB < BB; dB++) TB[dB] = arguments[dB];
        if (!TB.length) return jp;
        var VB = TB.reverse(),
          yB = VB[0],
          pB = VB.slice(1);
        return function() {
          return pB.reduce((function(BB, TB) {
            return TB(BB)
          }), yB.apply(void 0, arguments))
        }
      },
      yl = function(BB) {
        return Array.isArray(BB) ? BB.reverse() : BB.split("").reverse.join("")
      },
      pl = function(BB) {
        var TB = null,
          dB = null;
        return function() {
          for (var VB = arguments.length, yB = new Array(VB), pB = 0; pB < VB; pB++) yB[pB] = arguments[pB];
          return TB && yB.every((function(BB, dB) {
            return BB === TB[dB]
          })) ? dB : (TB = yB, dB = BB.apply(void 0, yB))
        }
      };
    const ll = {
      rangeStep: function(BB, TB, dB) {
        for (var VB = new(Gp())(BB), yB = 0, pB = []; VB.lt(TB) && yB < 1e5;) pB.push(VB.toNumber()), VB = VB.add(dB), yB++;
        return pB
      },
      getDigitCount: function(BB) {
        return 0 === BB ? 1 : Math.floor(new(Gp())(BB).abs().log(10).toNumber()) + 1
      },
      interpolateNumber: Bl((function(BB, TB, dB) {
        var VB = +BB;
        return VB + dB * (+TB - VB)
      })),
      uninterpolateNumber: Bl((function(BB, TB, dB) {
        var VB = TB - +BB;
        return (dB - BB) / (VB = VB || 1 / 0)
      })),
      uninterpolateTruncation: Bl((function(BB, TB, dB) {
        var VB = TB - +BB;
        return VB = VB || 1 / 0, Math.max(0, Math.min(1, (dB - BB) / VB))
      }))
    };

    function Jl(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return ol(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(BB)) return Array.from(BB)
      }(BB) || gl(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Yl(BB, TB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, TB) {
        if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(BB))) return;
        var dB = [],
          VB = !0,
          yB = !1,
          pB = void 0;
        try {
          for (var lB, JB = BB[Symbol.iterator](); !(VB = (lB = JB.next()).done) && (dB.push(lB.value), !TB || dB.length !== TB); VB = !0);
        } catch (YB) {
          yB = !0, pB = YB
        } finally {
          try {
            VB || null == JB.return || JB.return()
          } finally {
            if (yB) throw pB
          }
        }
        return dB
      }(BB, TB) || gl(BB, TB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function gl(BB, TB) {
      if (BB) {
        if ("string" === typeof BB) return ol(BB, TB);
        var dB = Object.prototype.toString.call(BB).slice(8, -1);
        return "Object" === dB && BB.constructor && (dB = BB.constructor.name), "Map" === dB || "Set" === dB ? Array.from(BB) : "Arguments" === dB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(dB) ? ol(BB, TB) : void 0
      }
    }

    function ol(BB, TB) {
      (null == TB || TB > BB.length) && (TB = BB.length);
      for (var dB = 0, VB = new Array(TB); dB < TB; dB++) VB[dB] = BB[dB];
      return VB
    }

    function kl(BB) {
      var TB = Yl(BB, 2),
        dB = TB[0],
        VB = TB[1],
        yB = dB,
        pB = VB;
      return dB > VB && (yB = VB, pB = dB), [yB, pB]
    }

    function Ll(BB, TB, dB) {
      if (BB.lte(0)) return new(Gp())(0);
      var VB = ll.getDigitCount(BB.toNumber()),
        yB = new(Gp())(10).pow(VB),
        pB = BB.div(yB),
        lB = 1 !== VB ? .05 : .1,
        JB = new(Gp())(Math.ceil(pB.div(lB).toNumber())).add(dB).mul(lB).mul(yB);
      return TB ? JB : new(Gp())(Math.ceil(JB))
    }

    function Ol(BB, TB, dB) {
      var VB = 1,
        yB = new(Gp())(BB);
      if (!yB.isint() && dB) {
        var pB = Math.abs(BB);
        pB < 1 ? (VB = new(Gp())(10).pow(ll.getDigitCount(BB) - 1), yB = new(Gp())(Math.floor(yB.div(VB).toNumber())).mul(VB)) : pB > 1 && (yB = new(Gp())(Math.floor(BB)))
      } else 0 === BB ? yB = new(Gp())(Math.floor((TB - 1) / 2)) : dB || (yB = new(Gp())(Math.floor(BB)));
      var lB = Math.floor((TB - 1) / 2);
      return Vl(dl((function(BB) {
        return yB.add(new(Gp())(BB - lB).mul(VB)).toNumber()
      })), Tl)(0, TB)
    }

    function Dl(BB, TB, dB, VB) {
      var yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      if (!Number.isFinite((TB - BB) / (dB - 1))) return {
        step: new(Gp())(0),
        tickMin: new(Gp())(0),
        tickMax: new(Gp())(0)
      };
      var pB, lB = Ll(new(Gp())(TB).sub(BB).div(dB - 1), VB, yB);
      pB = BB <= 0 && TB >= 0 ? new(Gp())(0) : (pB = new(Gp())(BB).add(TB).div(2)).sub(new(Gp())(pB).mod(lB));
      var JB = Math.ceil(pB.sub(BB).div(lB).toNumber()),
        YB = Math.ceil(new(Gp())(TB).sub(pB).div(lB).toNumber()),
        gB = JB + YB + 1;
      return gB > dB ? Dl(BB, TB, dB, VB, yB + 1) : (gB < dB && (YB = TB > 0 ? YB + (dB - gB) : YB, JB = TB > 0 ? JB : JB + (dB - gB)), {
        step: lB,
        tickMin: pB.sub(new(Gp())(JB).mul(lB)),
        tickMax: pB.add(new(Gp())(YB).mul(lB))
      })
    }
    var ul = pl((function(BB) {
        var TB = Yl(BB, 2),
          dB = TB[0],
          VB = TB[1],
          yB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          pB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          lB = Math.max(yB, 2),
          JB = Yl(kl([dB, VB]), 2),
          YB = JB[0],
          gB = JB[1];
        if (YB === -1 / 0 || gB === 1 / 0) {
          var oB = gB === 1 / 0 ? [YB].concat(Jl(Tl(0, yB - 1).map((function() {
            return 1 / 0
          })))) : [].concat(Jl(Tl(0, yB - 1).map((function() {
            return -1 / 0
          }))), [gB]);
          return dB > VB ? yl(oB) : oB
        }
        if (YB === gB) return Ol(YB, yB, pB);
        var kB = Dl(YB, gB, lB, pB),
          LB = kB.step,
          OB = kB.tickMin,
          DB = kB.tickMax,
          uB = ll.rangeStep(OB, DB.add(new(Gp())(.1).mul(LB)), LB);
        return dB > VB ? yl(uB) : uB
      })),
      Hl = (pl((function(BB) {
        var TB = Yl(BB, 2),
          dB = TB[0],
          VB = TB[1],
          yB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          pB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          lB = Math.max(yB, 2),
          JB = Yl(kl([dB, VB]), 2),
          YB = JB[0],
          gB = JB[1];
        if (YB === -1 / 0 || gB === 1 / 0) return [dB, VB];
        if (YB === gB) return Ol(YB, yB, pB);
        var oB = Ll(new(Gp())(gB).sub(YB).div(lB - 1), pB, 0),
          kB = Vl(dl((function(BB) {
            return new(Gp())(YB).add(new(Gp())(BB).mul(oB)).toNumber()
          })), Tl)(0, lB).filter((function(BB) {
            return BB >= YB && BB <= gB
          }));
        return dB > VB ? yl(kB) : kB
      })), pl((function(BB, TB) {
        var dB = Yl(BB, 2),
          VB = dB[0],
          yB = dB[1],
          pB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          lB = Yl(kl([VB, yB]), 2),
          JB = lB[0],
          YB = lB[1];
        if (JB === -1 / 0 || YB === 1 / 0) return [VB, yB];
        if (JB === YB) return [JB];
        var gB = Math.max(TB, 2),
          oB = Ll(new(Gp())(YB).sub(JB).div(gB - 1), pB, 0),
          kB = [].concat(Jl(ll.rangeStep(new(Gp())(JB), new(Gp())(YB).sub(new(Gp())(.99).mul(oB)), oB)), [YB]);
        return VB > yB ? yl(kB) : kB
      }))),
      El = dB(5576),
      vl = dB(4572),
      ml = dB(4819),
      il = dB(5581);

    function Nl(BB) {
      return Nl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, Nl(BB)
    }

    function tl(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return fl(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || function(BB, TB) {
        if (!BB) return;
        if ("string" === typeof BB) return fl(BB, TB);
        var dB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === dB && BB.constructor && (dB = BB.constructor.name);
        if ("Map" === dB || "Set" === dB) return Array.from(BB);
        if ("Arguments" === dB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(dB)) return fl(BB, TB)
      }(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function fl(BB, TB) {
      (null == TB || TB > BB.length) && (TB = BB.length);
      for (var dB = 0, VB = new Array(TB); dB < TB; dB++) VB[dB] = BB[dB];
      return VB
    }

    function sl(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function Ml(BB) {
      for (var TB = 1; TB < arguments.length; TB++) {
        var dB = null != arguments[TB] ? arguments[TB] : {};
        TB % 2 ? sl(Object(dB), !0).forEach((function(TB) {
          zl(BB, TB, dB[TB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : sl(Object(dB)).forEach((function(TB) {
          Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
        }))
      }
      return BB
    }

    function zl(BB, TB, dB) {
      return (TB = function(BB) {
        var TB = function(BB, TB) {
          if ("object" != Nl(BB) || !BB) return BB;
          var dB = BB[Symbol.toPrimitive];
          if (void 0 !== dB) {
            var VB = dB.call(BB, TB || "default");
            if ("object" != Nl(VB)) return VB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === TB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == Nl(TB) ? TB : TB + ""
      }(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }

    function wl(BB, TB, dB) {
      return zp()(BB) || zp()(TB) ? dB : (0, vl.w)(TB) ? Ip()(BB, TB, dB) : Up()(TB) ? TB(BB) : dB
    }

    function Ul(BB, TB, dB, VB) {
      var yB = Sp()(BB, (function(BB) {
        return wl(BB, TB)
      }));
      if ("number" === dB) {
        var pB = yB.filter((function(BB) {
          return (0, vl.y)(BB) || parseFloat(BB)
        }));
        return pB.length ? [sp()(pB), tp()(pB)] : [1 / 0, -1 / 0]
      }
      return (VB ? yB.filter((function(BB) {
        return !zp()(BB)
      })) : yB).map((function(BB) {
        return (0, vl.w)(BB) || BB instanceof Date ? BB : ""
      }))
    }
    var Fl = function(BB) {
        var TB, dB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          VB = arguments.length > 2 ? arguments[2] : void 0,
          yB = arguments.length > 3 ? arguments[3] : void 0,
          pB = -1,
          lB = null !== (TB = null === dB || void 0 === dB ? void 0 : dB.length) && void 0 !== TB ? TB : 0;
        if (lB <= 1) return 0;
        if (yB && "angleAxis" === yB.axisType && Math.abs(Math.abs(yB.range[1] - yB.range[0]) - 360) <= 1e-6)
          for (var JB = yB.range, YB = 0; YB < lB; YB++) {
            var gB = YB > 0 ? VB[YB - 1].coordinate : VB[lB - 1].coordinate,
              oB = VB[YB].coordinate,
              kB = YB >= lB - 1 ? VB[0].coordinate : VB[YB + 1].coordinate,
              LB = void 0;
            if ((0, vl.C)(oB - gB) !== (0, vl.C)(kB - oB)) {
              var OB = [];
              if ((0, vl.C)(kB - oB) === (0, vl.C)(JB[1] - JB[0])) {
                LB = kB;
                var DB = oB + JB[1] - JB[0];
                OB[0] = Math.min(DB, (DB + gB) / 2), OB[1] = Math.max(DB, (DB + gB) / 2)
              } else {
                LB = gB;
                var uB = kB + JB[1] - JB[0];
                OB[0] = Math.min(oB, (uB + oB) / 2), OB[1] = Math.max(oB, (uB + oB) / 2)
              }
              var HB = [Math.min(oB, (LB + oB) / 2), Math.max(oB, (LB + oB) / 2)];
              if (BB > HB[0] && BB <= HB[1] || BB >= OB[0] && BB <= OB[1]) {
                pB = VB[YB].index;
                break
              }
            } else {
              var EB = Math.min(gB, kB),
                vB = Math.max(gB, kB);
              if (BB > (EB + oB) / 2 && BB <= (vB + oB) / 2) {
                pB = VB[YB].index;
                break
              }
            }
          } else
            for (var mB = 0; mB < lB; mB++)
              if (0 === mB && BB <= (dB[mB].coordinate + dB[mB + 1].coordinate) / 2 || mB > 0 && mB < lB - 1 && BB > (dB[mB].coordinate + dB[mB - 1].coordinate) / 2 && BB <= (dB[mB].coordinate + dB[mB + 1].coordinate) / 2 || mB === lB - 1 && BB > (dB[mB].coordinate + dB[mB - 1].coordinate) / 2) {
                pB = dB[mB].index;
                break
              } return pB
      },
      Kl = function(BB) {
        var TB, dB, VB = BB.type.displayName,
          yB = null !== (TB = BB.type) && void 0 !== TB && TB.defaultProps ? Ml(Ml({}, BB.type.defaultProps), BB.props) : BB.props,
          pB = yB.stroke,
          lB = yB.fill;
        switch (VB) {
          case "Line":
            dB = pB;
            break;
          case "Area":
          case "Radar":
            dB = pB && "none" !== pB ? pB : lB;
            break;
          default:
            dB = lB
        }
        return dB
      },
      rl = function(BB) {
        var TB = BB.barSize,
          dB = BB.totalSize,
          VB = BB.stackGroups,
          yB = void 0 === VB ? {} : VB;
        if (!yB) return {};
        for (var pB = {}, lB = Object.keys(yB), JB = 0, YB = lB.length; JB < YB; JB++)
          for (var gB = yB[lB[JB]].stackGroups, oB = Object.keys(gB), kB = 0, LB = oB.length; kB < LB; kB++) {
            var OB = gB[oB[kB]],
              DB = OB.items,
              uB = OB.cateAxisId,
              HB = DB.filter((function(BB) {
                return (0, ml.n)(BB.type).indexOf("Bar") >= 0
              }));
            if (HB && HB.length) {
              var EB = HB[0].type.defaultProps,
                vB = void 0 !== EB ? Ml(Ml({}, EB), HB[0].props) : HB[0].props,
                mB = vB.barSize,
                iB = vB[uB];
              pB[iB] || (pB[iB] = []);
              var NB = zp()(mB) ? TB : mB;
              pB[iB].push({
                item: HB[0],
                stackList: HB.slice(1),
                barSize: zp()(NB) ? void 0 : (0, vl.n)(NB, dB, 0)
              })
            }
          }
        return pB
      },
      Il = function(BB) {
        var TB = BB.barGap,
          dB = BB.barCategoryGap,
          VB = BB.bandSize,
          yB = BB.sizeList,
          pB = void 0 === yB ? [] : yB,
          lB = BB.maxBarSize,
          JB = pB.length;
        if (JB < 1) return null;
        var YB, gB = (0, vl.n)(TB, VB, 0, !0),
          oB = [];
        if (pB[0].barSize === +pB[0].barSize) {
          var kB = !1,
            LB = VB / JB,
            OB = pB.reduce((function(BB, TB) {
              return BB + TB.barSize || 0
            }), 0);
          (OB += (JB - 1) * gB) >= VB && (OB -= (JB - 1) * gB, gB = 0), OB >= VB && LB > 0 && (kB = !0, OB = JB * (LB *= .9));
          var DB = {
            offset: ((VB - OB) / 2 | 0) - gB,
            size: 0
          };
          YB = pB.reduce((function(BB, TB) {
            var dB = {
                item: TB.item,
                position: {
                  offset: DB.offset + DB.size + gB,
                  size: kB ? LB : TB.barSize
                }
              },
              VB = [].concat(tl(BB), [dB]);
            return DB = VB[VB.length - 1].position, TB.stackList && TB.stackList.length && TB.stackList.forEach((function(BB) {
              VB.push({
                item: BB,
                position: DB
              })
            })), VB
          }), oB)
        } else {
          var uB = (0, vl.n)(dB, VB, 0, !0);
          VB - 2 * uB - (JB - 1) * gB <= 0 && (gB = 0);
          var HB = (VB - 2 * uB - (JB - 1) * gB) / JB;
          HB > 1 && (HB >>= 0);
          var EB = lB === +lB ? Math.min(HB, lB) : HB;
          YB = pB.reduce((function(BB, TB, dB) {
            var VB = [].concat(tl(BB), [{
              item: TB.item,
              position: {
                offset: uB + (HB + gB) * dB + (HB - EB) / 2,
                size: EB
              }
            }]);
            return TB.stackList && TB.stackList.length && TB.stackList.forEach((function(BB) {
              VB.push({
                item: BB,
                position: VB[VB.length - 1].position
              })
            })), VB
          }), oB)
        }
        return YB
      },
      cl = function(BB, TB, dB, VB) {
        var yB = dB.children,
          pB = dB.width,
          lB = dB.margin,
          JB = pB - (lB.left || 0) - (lB.right || 0),
          YB = (0, il.c)({
            children: yB,
            legendWidth: JB
          });
        if (YB) {
          var gB = VB || {},
            oB = gB.width,
            kB = gB.height,
            LB = YB.align,
            OB = YB.verticalAlign,
            DB = YB.layout;
          if (("vertical" === DB || "horizontal" === DB && "middle" === OB) && "center" !== LB && (0, vl.y)(BB[LB])) return Ml(Ml({}, BB), {}, zl({}, LB, BB[LB] + (oB || 0)));
          if (("horizontal" === DB || "vertical" === DB && "center" === LB) && "middle" !== OB && (0, vl.y)(BB[OB])) return Ml(Ml({}, BB), {}, zl({}, OB, BB[OB] + (kB || 0)))
        }
        return BB
      },
      Sl = function(BB, TB, dB, VB, yB) {
        var pB = TB.props.children,
          lB = (0, ml.h)(pB, El.c).filter((function(BB) {
            return function(BB, TB, dB) {
              return !!zp()(TB) || ("horizontal" === BB ? "yAxis" === TB : "vertical" === BB || "x" === dB ? "xAxis" === TB : "y" !== dB || "yAxis" === TB)
            }(VB, yB, BB.props.direction)
          }));
        if (lB && lB.length) {
          var JB = lB.map((function(BB) {
            return BB.props.dataKey
          }));
          return BB.reduce((function(BB, TB) {
            var VB = wl(TB, dB);
            if (zp()(VB)) return BB;
            var yB = Array.isArray(VB) ? [sp()(VB), tp()(VB)] : [VB, VB],
              pB = JB.reduce((function(BB, dB) {
                var VB = wl(TB, dB, 0),
                  pB = yB[0] - Math.abs(Array.isArray(VB) ? VB[0] : VB),
                  lB = yB[1] + Math.abs(Array.isArray(VB) ? VB[1] : VB);
                return [Math.min(pB, BB[0]), Math.max(lB, BB[1])]
              }), [1 / 0, -1 / 0]);
            return [Math.min(pB[0], BB[0]), Math.max(pB[1], BB[1])]
          }), [1 / 0, -1 / 0])
        }
        return null
      },
      Pl = function(BB, TB, dB, VB, yB) {
        var pB = TB.map((function(TB) {
          return Sl(BB, TB, dB, yB, VB)
        })).filter((function(BB) {
          return !zp()(BB)
        }));
        return pB && pB.length ? pB.reduce((function(BB, TB) {
          return [Math.min(BB[0], TB[0]), Math.max(BB[1], TB[1])]
        }), [1 / 0, -1 / 0]) : null
      },
      Ql = function(BB, TB, dB, VB, yB) {
        var pB = TB.map((function(TB) {
          var pB = TB.props.dataKey;
          return "number" === dB && pB && Sl(BB, TB, pB, VB) || Ul(BB, pB, dB, yB)
        }));
        if ("number" === dB) return pB.reduce((function(BB, TB) {
          return [Math.min(BB[0], TB[0]), Math.max(BB[1], TB[1])]
        }), [1 / 0, -1 / 0]);
        var lB = {};
        return pB.reduce((function(BB, TB) {
          for (var dB = 0, VB = TB.length; dB < VB; dB++) lB[TB[dB]] || (lB[TB[dB]] = !0, BB.push(TB[dB]));
          return BB
        }), [])
      },
      Rl = function(BB, TB) {
        return "horizontal" === BB && "xAxis" === TB || "vertical" === BB && "yAxis" === TB || "centric" === BB && "angleAxis" === TB || "radial" === BB && "radiusAxis" === TB
      },
      al = function(BB, TB, dB, VB) {
        if (VB) return BB.map((function(BB) {
          return BB.coordinate
        }));
        var yB, pB, lB = BB.map((function(BB) {
          return BB.coordinate === TB && (yB = !0), BB.coordinate === dB && (pB = !0), BB.coordinate
        }));
        return yB || lB.push(TB), pB || lB.push(dB), lB
      },
      Zl = function(BB, TB, dB) {
        if (!BB) return null;
        var VB = BB.scale,
          yB = BB.duplicateDomain,
          pB = BB.type,
          lB = BB.range,
          JB = "scaleBand" === BB.realScaleType ? VB.bandwidth() / 2 : 2,
          YB = (TB || dB) && "category" === pB && VB.bandwidth ? VB.bandwidth() / JB : 0;
        return YB = "angleAxis" === BB.axisType && (null === lB || void 0 === lB ? void 0 : lB.length) >= 2 ? 2 * (0, vl.C)(lB[0] - lB[1]) * YB : YB, TB && (BB.ticks || BB.niceTicks) ? (BB.ticks || BB.niceTicks).map((function(BB) {
          var TB = yB ? yB.indexOf(BB) : BB;
          return {
            coordinate: VB(TB) + YB,
            value: BB,
            offset: YB
          }
        })).filter((function(BB) {
          return !Qp()(BB.coordinate)
        })) : BB.isCategorical && BB.categoricalDomain ? BB.categoricalDomain.map((function(BB, TB) {
          return {
            coordinate: VB(BB) + YB,
            value: BB,
            index: TB,
            offset: YB
          }
        })) : VB.ticks && !dB ? VB.ticks(BB.tickCount).map((function(BB) {
          return {
            coordinate: VB(BB) + YB,
            value: BB,
            offset: YB
          }
        })) : VB.domain().map((function(BB, TB) {
          return {
            coordinate: VB(BB) + YB,
            value: yB ? yB[BB] : BB,
            index: TB,
            offset: YB
          }
        }))
      },
      Xl = new WeakMap,
      Wl = function(BB, TB) {
        if ("function" !== typeof TB) return BB;
        Xl.has(BB) || Xl.set(BB, new WeakMap);
        var dB = Xl.get(BB);
        if (dB.has(TB)) return dB.get(TB);
        var VB = function() {
          BB.apply(void 0, arguments), TB.apply(void 0, arguments)
        };
        return dB.set(TB, VB), VB
      },
      hl = function(BB, TB, dB) {
        var pB = BB.scale,
          lB = BB.type,
          JB = BB.layout,
          YB = BB.axisType;
        if ("auto" === pB) return "radial" === JB && "radiusAxis" === YB ? {
          scale: yB.d(),
          realScaleType: "band"
        } : "radial" === JB && "angleAxis" === YB ? {
          scale: xT(),
          realScaleType: "linear"
        } : "category" === lB && TB && (TB.indexOf("LineChart") >= 0 || TB.indexOf("AreaChart") >= 0 || TB.indexOf("ComposedChart") >= 0 && !dB) ? {
          scale: yB.f(),
          realScaleType: "point"
        } : "category" === lB ? {
          scale: yB.d(),
          realScaleType: "band"
        } : {
          scale: xT(),
          realScaleType: "linear"
        };
        if (Kp()(pB)) {
          var gB = "scale".concat(ap()(pB));
          return {
            scale: (VB[gB] || yB.f)(),
            realScaleType: VB[gB] ? gB : "point"
          }
        }
        return Up()(pB) ? {
          scale: pB
        } : {
          scale: yB.f(),
          realScaleType: "point"
        }
      },
      Cl = 1e-4,
      Gl = function(BB) {
        var TB = BB.domain();
        if (TB && !(TB.length <= 2)) {
          var dB = TB.length,
            VB = BB.range(),
            yB = Math.min(VB[0], VB[1]) - Cl,
            pB = Math.max(VB[0], VB[1]) + Cl,
            lB = BB(TB[0]),
            JB = BB(TB[dB - 1]);
          (lB < yB || lB > pB || JB < yB || JB > pB) && BB.domain([TB[0], TB[dB - 1]])
        }
      },
      ql = function(BB, TB) {
        if (!BB) return null;
        for (var dB = 0, VB = BB.length; dB < VB; dB++)
          if (BB[dB].item === TB) return BB[dB].position;
        return null
      },
      xl = function(BB, TB) {
        if (!TB || 2 !== TB.length || !(0, vl.y)(TB[0]) || !(0, vl.y)(TB[1])) return BB;
        var dB = Math.min(TB[0], TB[1]),
          VB = Math.max(TB[0], TB[1]),
          yB = [BB[0], BB[1]];
        return (!(0, vl.y)(BB[0]) || BB[0] < dB) && (yB[0] = dB), (!(0, vl.y)(BB[1]) || BB[1] > VB) && (yB[1] = VB), yB[0] > VB && (yB[0] = VB), yB[1] < dB && (yB[1] = dB), yB
      },
      jl = {
        sign: function(BB) {
          var TB = BB.length;
          if (!(TB <= 0))
            for (var dB = 0, VB = BB[0].length; dB < VB; ++dB)
              for (var yB = 0, pB = 0, lB = 0; lB < TB; ++lB) {
                var JB = Qp()(BB[lB][dB][1]) ? BB[lB][dB][0] : BB[lB][dB][1];
                JB >= 0 ? (BB[lB][dB][0] = yB, BB[lB][dB][1] = yB + JB, yB = BB[lB][dB][1]) : (BB[lB][dB][0] = pB, BB[lB][dB][1] = pB + JB, pB = BB[lB][dB][1])
              }
        },
        expand: function(BB, TB) {
          if ((VB = BB.length) > 0) {
            for (var dB, VB, yB, pB = 0, lB = BB[0].length; pB < lB; ++pB) {
              for (yB = dB = 0; dB < VB; ++dB) yB += BB[dB][pB][1] || 0;
              if (yB)
                for (dB = 0; dB < VB; ++dB) BB[dB][pB][1] /= yB
            }
            Dp(BB, TB)
          }
        },
        none: Dp,
        silhouette: function(BB, TB) {
          if ((dB = BB.length) > 0) {
            for (var dB, VB = 0, yB = BB[TB[0]], pB = yB.length; VB < pB; ++VB) {
              for (var lB = 0, JB = 0; lB < dB; ++lB) JB += BB[lB][VB][1] || 0;
              yB[VB][1] += yB[VB][0] = -JB / 2
            }
            Dp(BB, TB)
          }
        },
        wiggle: function(BB, TB) {
          if ((yB = BB.length) > 0 && (VB = (dB = BB[TB[0]]).length) > 0) {
            for (var dB, VB, yB, pB = 0, lB = 1; lB < VB; ++lB) {
              for (var JB = 0, YB = 0, gB = 0; JB < yB; ++JB) {
                for (var oB = BB[TB[JB]], kB = oB[lB][1] || 0, LB = (kB - (oB[lB - 1][1] || 0)) / 2, OB = 0; OB < JB; ++OB) {
                  var DB = BB[TB[OB]];
                  LB += (DB[lB][1] || 0) - (DB[lB - 1][1] || 0)
                }
                YB += kB, gB += LB * kB
              }
              dB[lB - 1][1] += dB[lB - 1][0] = pB, YB && (pB -= gB / YB)
            }
            dB[lB - 1][1] += dB[lB - 1][0] = pB, Dp(BB, TB)
          }
        },
        positive: function(BB) {
          var TB = BB.length;
          if (!(TB <= 0))
            for (var dB = 0, VB = BB[0].length; dB < VB; ++dB)
              for (var yB = 0, pB = 0; pB < TB; ++pB) {
                var lB = Qp()(BB[pB][dB][1]) ? BB[pB][dB][0] : BB[pB][dB][1];
                lB >= 0 ? (BB[pB][dB][0] = yB, BB[pB][dB][1] = yB + lB, yB = BB[pB][dB][1]) : (BB[pB][dB][0] = 0, BB[pB][dB][1] = 0)
              }
        }
      },
      Al = function(BB, TB, dB) {
        var VB = TB.map((function(BB) {
            return BB.props.dataKey
          })),
          yB = jl[dB],
          pB = function() {
            var BB = (0, Ep.d)([]),
              TB = vp,
              dB = Dp,
              VB = mp;

            function yB(yB) {
              var pB, lB, JB = Array.from(BB.apply(this, arguments), ip),
                YB = JB.length,
                gB = -1;
              for (const BB of yB)
                for (pB = 0, ++gB; pB < YB; ++pB)(JB[pB][gB] = [0, +VB(BB, JB[pB].key, gB, yB)]).data = BB;
              for (pB = 0, lB = (0, Hp.e)(TB(JB)); pB < YB; ++pB) JB[lB[pB]].index = pB;
              return dB(JB, lB), JB
            }
            return yB.keys = function(TB) {
              return arguments.length ? (BB = "function" === typeof TB ? TB : (0, Ep.d)(Array.from(TB)), yB) : BB
            }, yB.value = function(BB) {
              return arguments.length ? (VB = "function" === typeof BB ? BB : (0, Ep.d)(+BB), yB) : VB
            }, yB.order = function(BB) {
              return arguments.length ? (TB = null == BB ? vp : "function" === typeof BB ? BB : (0, Ep.d)(Array.from(BB)), yB) : TB
            }, yB.offset = function(BB) {
              return arguments.length ? (dB = null == BB ? Dp : BB, yB) : dB
            }, yB
          }().keys(VB).value((function(BB, TB) {
            return +wl(BB, TB, 0)
          })).order(vp).offset(yB);
        return pB(BB)
      },
      bl = function(BB, TB, dB, VB, yB, pB) {
        if (!BB) return null;
        var lB = (pB ? TB.reverse() : TB).reduce((function(BB, TB) {
          var yB, pB = null !== (yB = TB.type) && void 0 !== yB && yB.defaultProps ? Ml(Ml({}, TB.type.defaultProps), TB.props) : TB.props,
            lB = pB.stackId;
          if (pB.hide) return BB;
          var JB = pB[dB],
            YB = BB[JB] || {
              hasStack: !1,
              stackGroups: {}
            };
          if ((0, vl.w)(lB)) {
            var gB = YB.stackGroups[lB] || {
              numericAxisId: dB,
              cateAxisId: VB,
              items: []
            };
            gB.items.push(TB), YB.hasStack = !0, YB.stackGroups[lB] = gB
          } else YB.stackGroups[(0, vl.G)("_stackId_")] = {
            numericAxisId: dB,
            cateAxisId: VB,
            items: [TB]
          };
          return Ml(Ml({}, BB), {}, zl({}, JB, YB))
        }), {});
        return Object.keys(lB).reduce((function(TB, pB) {
          var JB = lB[pB];
          if (JB.hasStack) {
            JB.stackGroups = Object.keys(JB.stackGroups).reduce((function(TB, pB) {
              var lB = JB.stackGroups[pB];
              return Ml(Ml({}, TB), {}, zl({}, pB, {
                numericAxisId: dB,
                cateAxisId: VB,
                items: lB.items,
                stackedData: Al(BB, lB.items, yB)
              }))
            }), {})
          }
          return Ml(Ml({}, TB), {}, zl({}, pB, JB))
        }), {})
      },
      nl = function(BB, TB) {
        var dB = TB.realScaleType,
          VB = TB.type,
          yB = TB.tickCount,
          pB = TB.originalDomain,
          lB = TB.allowDecimals,
          JB = dB || TB.scale;
        if ("auto" !== JB && "linear" !== JB) return null;
        if (yB && "number" === VB && pB && ("auto" === pB[0] || "auto" === pB[1])) {
          var YB = BB.domain();
          if (!YB.length) return null;
          var gB = ul(YB, yB, lB);
          return BB.domain([sp()(gB), tp()(gB)]), {
            niceTicks: gB
          }
        }
        if (yB && "number" === VB) {
          var oB = BB.domain();
          return {
            niceTicks: Hl(oB, yB, lB)
          }
        }
        return null
      };

    function el(BB) {
      var TB = BB.axis,
        dB = BB.ticks,
        VB = BB.bandSize,
        yB = BB.entry,
        pB = BB.index,
        lB = BB.dataKey;
      if ("category" === TB.type) {
        if (!TB.allowDuplicatedCategory && TB.dataKey && !zp()(yB[TB.dataKey])) {
          var JB = (0, vl.h)(dB, "value", yB[TB.dataKey]);
          if (JB) return JB.coordinate + VB / 2
        }
        return dB[pB] ? dB[pB].coordinate + VB / 2 : null
      }
      var YB = wl(yB, zp()(lB) ? TB.dataKey : lB);
      return zp()(YB) ? null : TB.scale(YB)
    }
    var BJ = function(BB) {
        var TB = BB.axis,
          dB = BB.ticks,
          VB = BB.offset,
          yB = BB.bandSize,
          pB = BB.entry,
          lB = BB.index;
        if ("category" === TB.type) return dB[lB] ? dB[lB].coordinate + VB : null;
        var JB = wl(pB, TB.dataKey, TB.domain[lB]);
        return zp()(JB) ? null : TB.scale(JB) - yB / 2 + VB
      },
      TJ = function(BB) {
        var TB = BB.numericAxis,
          dB = TB.scale.domain();
        if ("number" === TB.type) {
          var VB = Math.min(dB[0], dB[1]),
            yB = Math.max(dB[0], dB[1]);
          return VB <= 0 && yB >= 0 ? 0 : yB < 0 ? yB : VB
        }
        return dB[0]
      },
      dJ = function(BB, TB) {
        var dB, VB = (null !== (dB = BB.type) && void 0 !== dB && dB.defaultProps ? Ml(Ml({}, BB.type.defaultProps), BB.props) : BB.props).stackId;
        if ((0, vl.w)(VB)) {
          var yB = TB[VB];
          if (yB) {
            var pB = yB.items.indexOf(BB);
            return pB >= 0 ? yB.stackedData[pB] : null
          }
        }
        return null
      },
      VJ = function(BB, TB, dB) {
        return Object.keys(BB).reduce((function(VB, yB) {
          var pB = BB[yB].stackedData.reduce((function(BB, VB) {
            var yB = VB.slice(TB, dB + 1).reduce((function(BB, TB) {
              return [sp()(TB.concat([BB[0]]).filter(vl.y)), tp()(TB.concat([BB[1]]).filter(vl.y))]
            }), [1 / 0, -1 / 0]);
            return [Math.min(BB[0], yB[0]), Math.max(BB[1], yB[1])]
          }), [1 / 0, -1 / 0]);
          return [Math.min(pB[0], VB[0]), Math.max(pB[1], VB[1])]
        }), [1 / 0, -1 / 0]).map((function(BB) {
          return BB === 1 / 0 || BB === -1 / 0 ? 0 : BB
        }))
      },
      yJ = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      pJ = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      lJ = function(BB, TB, dB) {
        if (Up()(BB)) return BB(TB, dB);
        if (!Array.isArray(BB)) return TB;
        var VB = [];
        if ((0, vl.y)(BB[0])) VB[0] = dB ? BB[0] : Math.min(BB[0], TB[0]);
        else if (yJ.test(BB[0])) {
          var yB = +yJ.exec(BB[0])[1];
          VB[0] = TB[0] - yB
        } else Up()(BB[0]) ? VB[0] = BB[0](TB[0]) : VB[0] = TB[0];
        if ((0, vl.y)(BB[1])) VB[1] = dB ? BB[1] : Math.max(BB[1], TB[1]);
        else if (pJ.test(BB[1])) {
          var pB = +pJ.exec(BB[1])[1];
          VB[1] = TB[1] + pB
        } else Up()(BB[1]) ? VB[1] = BB[1](TB[1]) : VB[1] = TB[1];
        return VB
      },
      JJ = function(BB, TB, dB) {
        if (BB && BB.scale && BB.scale.bandwidth) {
          var VB = BB.scale.bandwidth();
          if (!dB || VB > 0) return VB
        }
        if (BB && TB && TB.length >= 2) {
          for (var yB = hp()(TB, (function(BB) {
              return BB.coordinate
            })), pB = 1 / 0, lB = 1, JB = yB.length; lB < JB; lB++) {
            var YB = yB[lB],
              gB = yB[lB - 1];
            pB = Math.min((YB.coordinate || 0) - (gB.coordinate || 0), pB)
          }
          return pB === 1 / 0 ? 0 : pB
        }
        return dB ? void 0 : 0
      },
      YJ = function(BB, TB, dB) {
        return BB && BB.length ? Xp()(BB, Ip()(dB, "type.defaultProps.domain")) ? TB : BB : TB
      },
      gJ = function(BB, TB) {
        var dB = BB.type.defaultProps ? Ml(Ml({}, BB.type.defaultProps), BB.props) : BB.props,
          VB = dB.dataKey,
          yB = dB.name,
          pB = dB.unit,
          lB = dB.formatter,
          JB = dB.tooltipType,
          YB = dB.chartType,
          gB = dB.hide;
        return Ml(Ml({}, (0, ml.d)(BB, !1)), {}, {
          dataKey: VB,
          unit: pB,
          formatter: lB,
          name: yB || VB,
          color: Kl(BB),
          value: wl(TB, VB),
          type: JB,
          payload: TB,
          chartType: YB,
          hide: gB
        })
      }
  },
  5512: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => LB,
      g: () => kB
    });
    var VB = dB(5372);

    function yB(BB) {
      return yB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, yB(BB)
    }

    function pB(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function lB(BB) {
      for (var TB = 1; TB < arguments.length; TB++) {
        var dB = null != arguments[TB] ? arguments[TB] : {};
        TB % 2 ? pB(Object(dB), !0).forEach((function(TB) {
          JB(BB, TB, dB[TB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : pB(Object(dB)).forEach((function(TB) {
          Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
        }))
      }
      return BB
    }

    function JB(BB, TB, dB) {
      return (TB = function(BB) {
        var TB = function(BB, TB) {
          if ("object" != yB(BB) || !BB) return BB;
          var dB = BB[Symbol.toPrimitive];
          if (void 0 !== dB) {
            var VB = dB.call(BB, TB || "default");
            if ("object" != yB(VB)) return VB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === TB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == yB(TB) ? TB : TB + ""
      }(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }
    var YB = {
        widthCache: {},
        cacheCount: 0
      },
      gB = {
        position: "absolute",
        top: "-20000px",
        left: 0,
        padding: 0,
        margin: 0,
        border: "none",
        whiteSpace: "pre"
      },
      oB = "recharts_measurement_span";
    var kB = function(BB) {
        var TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (void 0 === BB || null === BB || VB.d.isSsr) return {
          width: 0,
          height: 0
        };
        var dB = function(BB) {
            var TB = lB({}, BB);
            return Object.keys(TB).forEach((function(BB) {
              TB[BB] || delete TB[BB]
            })), TB
          }(TB),
          yB = JSON.stringify({
            text: BB,
            copyStyle: dB
          });
        if (YB.widthCache[yB]) return YB.widthCache[yB];
        try {
          var pB = document.getElementById(oB);
          pB || ((pB = document.createElement("span")).setAttribute("id", oB), pB.setAttribute("aria-hidden", "true"), document.body.appendChild(pB));
          var JB = lB(lB({}, gB), dB);
          Object.assign(pB.style, JB), pB.textContent = "".concat(BB);
          var kB = pB.getBoundingClientRect(),
            LB = {
              width: kB.width,
              height: kB.height
            };
          return YB.widthCache[yB] = LB, ++YB.cacheCount > 2e3 && (YB.cacheCount = 0, YB.widthCache = {}), LB
        } catch (OB) {
          return {
            width: 0,
            height: 0
          }
        }
      },
      LB = function(BB) {
        return {
          top: BB.top + window.scrollY - document.documentElement.clientTop,
          left: BB.left + window.scrollX - document.documentElement.clientLeft
        }
      }
  },
  4572: (BB, TB, dB) => {
    dB.d(TB, {
      C: () => OB,
      G: () => mB,
      e: () => zB,
      h: () => sB,
      k: () => NB,
      m: () => MB,
      n: () => iB,
      o: () => tB,
      r: () => fB,
      v: () => HB,
      w: () => EB,
      y: () => uB,
      z: () => DB
    });
    var VB = dB(4576),
      yB = dB.n(VB),
      pB = dB(4582),
      lB = dB.n(pB),
      JB = dB(4599),
      YB = dB.n(JB),
      gB = dB(4590),
      oB = dB.n(gB),
      kB = dB(4809),
      LB = dB.n(kB),
      OB = function(BB) {
        return 0 === BB ? 0 : BB > 0 ? 1 : -1
      },
      DB = function(BB) {
        return yB()(BB) && BB.indexOf("%") === BB.length - 1
      },
      uB = function(BB) {
        return oB()(BB) && !lB()(BB)
      },
      HB = function(BB) {
        return LB()(BB)
      },
      EB = function(BB) {
        return uB(BB) || yB()(BB)
      },
      vB = 0,
      mB = function(BB) {
        var TB = ++vB;
        return "".concat(BB || "").concat(TB)
      },
      iB = function(BB, TB) {
        var dB, VB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          pB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!uB(BB) && !yB()(BB)) return VB;
        if (DB(BB)) {
          var JB = BB.indexOf("%");
          dB = TB * parseFloat(BB.slice(0, JB)) / 100
        } else dB = +BB;
        return lB()(dB) && (dB = VB), pB && dB > TB && (dB = TB), dB
      },
      NB = function(BB) {
        if (!BB) return null;
        var TB = Object.keys(BB);
        return TB && TB.length ? BB[TB[0]] : null
      },
      tB = function(BB) {
        if (!Array.isArray(BB)) return !1;
        for (var TB = BB.length, dB = {}, VB = 0; VB < TB; VB++) {
          if (dB[BB[VB]]) return !0;
          dB[BB[VB]] = !0
        }
        return !1
      },
      fB = function(BB, TB) {
        return uB(BB) && uB(TB) ? function(dB) {
          return BB + dB * (TB - BB)
        } : function() {
          return TB
        }
      };

    function sB(BB, TB, dB) {
      return BB && BB.length ? BB.find((function(BB) {
        return BB && ("function" === typeof TB ? TB(BB) : YB()(BB, TB)) === dB
      })) : null
    }
    var MB = function(BB) {
        if (!BB || !BB.length) return null;
        for (var TB = BB.length, dB = 0, VB = 0, yB = 0, pB = 0, lB = 1 / 0, JB = -1 / 0, YB = 0, gB = 0, oB = 0; oB < TB; oB++) dB += YB = BB[oB].cx || 0, VB += gB = BB[oB].cy || 0, yB += YB * gB, pB += YB * YB, lB = Math.min(lB, YB), JB = Math.max(JB, YB);
        var kB = TB * pB !== dB * dB ? (TB * yB - dB * VB) / (TB * pB - dB * dB) : 0;
        return {
          xmin: lB,
          xmax: JB,
          a: kB,
          b: (VB - kB * dB) / TB
        }
      },
      zB = function(BB, TB) {
        return uB(BB) && uB(TB) ? BB - TB : yB()(BB) && yB()(TB) ? BB.localeCompare(TB) : BB instanceof Date && TB instanceof Date ? BB.getTime() - TB.getTime() : String(BB).localeCompare(String(TB))
      }
  },
  5372: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => VB
    });
    var VB = {
      isSsr: !("undefined" !== typeof window && window.document && window.document.createElement && window.setTimeout),
      get: function(BB) {
        return VB[BB]
      },
      set: function(BB, TB) {
        if ("string" === typeof BB) VB[BB] = TB;
        else {
          var dB = Object.keys(BB);
          dB && dB.length && dB.forEach((function(TB) {
            VB[TB] = BB[TB]
          }))
        }
      }
    }
  },
  5606: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => VB
    });
    var VB = function(BB, TB) {
      var dB = BB.alwaysShow,
        VB = BB.ifOverflow;
      return dB && (VB = "extendDomain"), VB === TB
    }
  },
  4812: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => VB
    });
    var VB = function(BB, TB) {
      for (var dB = arguments.length, VB = new Array(dB > 2 ? dB - 2 : 0), yB = 2; yB < dB; yB++) VB[yB - 2] = arguments[yB]
    }
  },
  5601: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => JB,
      g: () => LB,
      j: () => gB
    });
    dB(4809), dB(62), dB(4660);

    function VB(BB) {
      return VB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, VB(BB)
    }

    function yB(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function pB(BB) {
      for (var TB = 1; TB < arguments.length; TB++) {
        var dB = null != arguments[TB] ? arguments[TB] : {};
        TB % 2 ? yB(Object(dB), !0).forEach((function(TB) {
          lB(BB, TB, dB[TB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : yB(Object(dB)).forEach((function(TB) {
          Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
        }))
      }
      return BB
    }

    function lB(BB, TB, dB) {
      return (TB = function(BB) {
        var TB = function(BB, TB) {
          if ("object" != VB(BB) || !BB) return BB;
          var dB = BB[Symbol.toPrimitive];
          if (void 0 !== dB) {
            var yB = dB.call(BB, TB || "default");
            if ("object" != VB(yB)) return yB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === TB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == VB(TB) ? TB : TB + ""
      }(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }
    var JB = Math.PI / 180,
      YB = function(BB) {
        return 180 * BB / Math.PI
      },
      gB = function(BB, TB, dB, VB) {
        return {
          x: BB + Math.cos(-JB * VB) * dB,
          y: TB + Math.sin(-JB * VB) * dB
        }
      },
      oB = function(BB, TB) {
        var dB = BB.x,
          VB = BB.y,
          yB = TB.cx,
          pB = TB.cy,
          lB = function(BB, TB) {
            var dB = BB.x,
              VB = BB.y,
              yB = TB.x,
              pB = TB.y;
            return Math.sqrt(Math.pow(dB - yB, 2) + Math.pow(VB - pB, 2))
          }({
            x: dB,
            y: VB
          }, {
            x: yB,
            y: pB
          });
        if (lB <= 0) return {
          radius: lB
        };
        var JB = (dB - yB) / lB,
          gB = Math.acos(JB);
        return VB > pB && (gB = 2 * Math.PI - gB), {
          radius: lB,
          angle: YB(gB),
          angleInRadian: gB
        }
      },
      kB = function(BB, TB) {
        var dB = TB.startAngle,
          VB = TB.endAngle,
          yB = Math.floor(dB / 360),
          pB = Math.floor(VB / 360);
        return BB + 360 * Math.min(yB, pB)
      },
      LB = function(BB, TB) {
        var dB = BB.x,
          VB = BB.y,
          yB = oB({
            x: dB,
            y: VB
          }, TB),
          lB = yB.radius,
          JB = yB.angle,
          YB = TB.innerRadius,
          gB = TB.outerRadius;
        if (lB < YB || lB > gB) return !1;
        if (0 === lB) return !0;
        var LB, OB = function(BB) {
            var TB = BB.startAngle,
              dB = BB.endAngle,
              VB = Math.floor(TB / 360),
              yB = Math.floor(dB / 360),
              pB = Math.min(VB, yB);
            return {
              startAngle: TB - 360 * pB,
              endAngle: dB - 360 * pB
            }
          }(TB),
          DB = OB.startAngle,
          uB = OB.endAngle,
          HB = JB;
        if (DB <= uB) {
          for (; HB > uB;) HB -= 360;
          for (; HB < DB;) HB += 360;
          LB = HB >= DB && HB <= uB
        } else {
          for (; HB > DB;) HB -= 360;
          for (; HB < uB;) HB += 360;
          LB = HB >= uB && HB <= DB
        }
        return LB ? pB(pB({}, TB), {}, {
          radius: lB,
          angle: kB(HB, TB)
        }) : null
      }
  },
  4819: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => cB,
      h: () => wB,
      k: () => UB,
      n: () => fB,
      p: () => RB,
      q: () => IB,
      s: () => SB,
      v: () => aB,
      w: () => QB,
      x: () => FB
    });
    var VB = dB(4599),
      yB = dB.n(VB),
      pB = dB(4809),
      lB = dB.n(pB),
      JB = dB(4576),
      YB = dB.n(JB),
      gB = dB(4660),
      oB = dB.n(gB),
      kB = dB(4505),
      LB = dB.n(kB),
      OB = dB(62),
      DB = dB(4827),
      uB = dB(4572),
      HB = dB(4839),
      EB = dB(4842),
      vB = ["children"],
      mB = ["children"];

    function iB(BB, TB) {
      if (null == BB) return {};
      var dB, VB, yB = function(BB, TB) {
        if (null == BB) return {};
        var dB = {};
        for (var VB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, VB)) {
            if (TB.indexOf(VB) >= 0) continue;
            dB[VB] = BB[VB]
          } return dB
      }(BB, TB);
      if (Object.getOwnPropertySymbols) {
        var pB = Object.getOwnPropertySymbols(BB);
        for (VB = 0; VB < pB.length; VB++) dB = pB[VB], TB.indexOf(dB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, dB) && (yB[dB] = BB[dB])
      }
      return yB
    }

    function NB(BB) {
      return NB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, NB(BB)
    }
    var tB = {
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
      fB = function(BB) {
        return "string" === typeof BB ? BB : BB ? BB.displayName || BB.name || "Component" : ""
      },
      sB = null,
      MB = null,
      zB = function BB(TB) {
        if (TB === sB && Array.isArray(MB)) return MB;
        var dB = [];
        return OB.Children.forEach(TB, (function(TB) {
          lB()(TB) || ((0, DB.isFragment)(TB) ? dB = dB.concat(BB(TB.props.children)) : dB.push(TB))
        })), MB = dB, sB = TB, dB
      };

    function wB(BB, TB) {
      var dB = [],
        VB = [];
      return VB = Array.isArray(TB) ? TB.map((function(BB) {
        return fB(BB)
      })) : [fB(TB)], zB(BB).forEach((function(BB) {
        var TB = yB()(BB, "type.displayName") || yB()(BB, "type.name"); - 1 !== VB.indexOf(TB) && dB.push(BB)
      })), dB
    }

    function UB(BB, TB) {
      var dB = wB(BB, TB);
      return dB && dB[0]
    }
    var FB = function(BB) {
        if (!BB || !BB.props) return !1;
        var TB = BB.props,
          dB = TB.width,
          VB = TB.height;
        return !(!(0, uB.y)(dB) || dB <= 0 || !(0, uB.y)(VB) || VB <= 0)
      },
      KB = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"],
      rB = function(BB) {
        return BB && BB.type && YB()(BB.type) && KB.indexOf(BB.type) >= 0
      },
      IB = function(BB) {
        return BB && "object" === NB(BB) && "clipDot" in BB
      },
      cB = function(BB, TB, dB) {
        if (!BB || "function" === typeof BB || "boolean" === typeof BB) return null;
        var VB = BB;
        if ((0, OB.isValidElement)(BB) && (VB = BB.props), !LB()(VB)) return null;
        var yB = {};
        return Object.keys(VB).forEach((function(BB) {
          var pB;
          (function(BB, TB, dB, VB) {
            var yB, pB = null !== (yB = null === EB.e || void 0 === EB.e ? void 0 : EB.e[VB]) && void 0 !== yB ? yB : [];
            return TB.startsWith("data-") || !oB()(BB) && (VB && pB.includes(TB) || EB.h.includes(TB)) || dB && EB.d.includes(TB)
          })(null === (pB = VB) || void 0 === pB ? void 0 : pB[BB], BB, TB, dB) && (yB[BB] = VB[BB])
        })), yB
      },
      SB = function BB(TB, dB) {
        if (TB === dB) return !0;
        var VB = OB.Children.count(TB);
        if (VB !== OB.Children.count(dB)) return !1;
        if (0 === VB) return !0;
        if (1 === VB) return PB(Array.isArray(TB) ? TB[0] : TB, Array.isArray(dB) ? dB[0] : dB);
        for (var yB = 0; yB < VB; yB++) {
          var pB = TB[yB],
            lB = dB[yB];
          if (Array.isArray(pB) || Array.isArray(lB)) {
            if (!BB(pB, lB)) return !1
          } else if (!PB(pB, lB)) return !1
        }
        return !0
      },
      PB = function(BB, TB) {
        if (lB()(BB) && lB()(TB)) return !0;
        if (!lB()(BB) && !lB()(TB)) {
          var dB = BB.props || {},
            VB = dB.children,
            yB = iB(dB, vB),
            pB = TB.props || {},
            JB = pB.children,
            YB = iB(pB, mB);
          return VB && JB ? (0, HB.d)(yB, YB) && SB(VB, JB) : !VB && !JB && (0, HB.d)(yB, YB)
        }
        return !1
      },
      QB = function(BB, TB) {
        var dB = [],
          VB = {};
        return zB(BB).forEach((function(BB, yB) {
          if (rB(BB)) dB.push(BB);
          else if (BB) {
            var pB = fB(BB.type),
              lB = TB[pB] || {},
              JB = lB.handler,
              YB = lB.once;
            if (JB && (!YB || !VB[pB])) {
              var gB = JB(BB, pB, yB);
              dB.push(gB), VB[pB] = !0
            }
          }
        })), dB
      },
      RB = function(BB) {
        var TB = BB && BB.type;
        return TB && tB[TB] ? tB[TB] : null
      },
      aB = function(BB, TB) {
        return zB(TB).indexOf(BB)
      }
  },
  4839: (BB, TB, dB) => {
    function VB(BB, TB) {
      for (var dB in BB)
        if ({}.hasOwnProperty.call(BB, dB) && (!{}.hasOwnProperty.call(TB, dB) || BB[dB] !== TB[dB])) return !1;
      for (var VB in TB)
        if ({}.hasOwnProperty.call(TB, VB) && !{}.hasOwnProperty.call(BB, VB)) return !1;
      return !0
    }
    dB.d(TB, {
      d: () => VB
    })
  },
  5581: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => oB
    });
    var VB = dB(5420),
      yB = dB(5518),
      pB = dB(4819);

    function lB(BB) {
      return lB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, lB(BB)
    }

    function JB(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function YB(BB) {
      for (var TB = 1; TB < arguments.length; TB++) {
        var dB = null != arguments[TB] ? arguments[TB] : {};
        TB % 2 ? JB(Object(dB), !0).forEach((function(TB) {
          gB(BB, TB, dB[TB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : JB(Object(dB)).forEach((function(TB) {
          Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
        }))
      }
      return BB
    }

    function gB(BB, TB, dB) {
      return (TB = function(BB) {
        var TB = function(BB, TB) {
          if ("object" != lB(BB) || !BB) return BB;
          var dB = BB[Symbol.toPrimitive];
          if (void 0 !== dB) {
            var VB = dB.call(BB, TB || "default");
            if ("object" != lB(VB)) return VB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === TB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == lB(TB) ? TB : TB + ""
      }(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }
    var oB = function(BB) {
      var TB = BB.children,
        dB = BB.formattedGraphicalItems,
        lB = BB.legendWidth,
        JB = BB.legendContent,
        gB = (0, pB.k)(TB, VB.e);
      if (!gB) return null;
      var oB, kB = VB.e.defaultProps,
        LB = void 0 !== kB ? YB(YB({}, kB), gB.props) : {};
      return oB = gB.props && gB.props.payload ? gB.props && gB.props.payload : "children" === JB ? (dB || []).reduce((function(BB, TB) {
        var dB = TB.item,
          VB = TB.props,
          yB = VB.sectors || VB.data || [];
        return BB.concat(yB.map((function(BB) {
          return {
            type: gB.props.iconType || dB.props.legendType,
            value: BB.name,
            color: BB.fill,
            payload: BB
          }
        })))
      }), []) : (dB || []).map((function(BB) {
        var TB = BB.item,
          dB = TB.type.defaultProps,
          VB = void 0 !== dB ? YB(YB({}, dB), TB.props) : {},
          pB = VB.dataKey,
          lB = VB.name,
          JB = VB.legendType;
        return {
          inactive: VB.hide,
          dataKey: pB,
          type: LB.iconType || JB || "square",
          color: (0, yB.N)(TB),
          value: lB || pB,
          payload: VB
        }
      })), YB(YB(YB({}, LB), VB.e.getWithHeight(gB, lB)), {}, {
        payload: oB,
        item: gB
      })
    }
  },
  5375: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => JB
    });
    var VB = dB(5377),
      yB = dB.n(VB),
      pB = dB(4660),
      lB = dB.n(pB);

    function JB(BB, TB, dB) {
      return !0 === TB ? yB()(BB, dB) : lB()(TB) ? yB()(BB, TB) : BB
    }
  },
  4842: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => oB,
      e: () => gB,
      h: () => JB,
      k: () => kB,
      o: () => LB
    });
    var VB = dB(62),
      yB = dB(4505),
      pB = dB.n(yB);

    function lB(BB) {
      return lB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, lB(BB)
    }
    var JB = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "tO", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"],
      YB = ["points", "pathLength"],
      gB = {
        svg: ["viewBox", "children"],
        polygon: YB,
        polyline: YB
      },
      oB = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"],
      kB = function(BB, TB) {
        if (!BB || "function" === typeof BB || "boolean" === typeof BB) return null;
        var dB = BB;
        if ((0, VB.isValidElement)(BB) && (dB = BB.props), !pB()(dB)) return null;
        var yB = {};
        return Object.keys(dB).forEach((function(BB) {
          oB.includes(BB) && (yB[BB] = TB || function(TB) {
            return dB[BB](dB, TB)
          })
        })), yB
      },
      LB = function(BB, TB, dB) {
        if (!pB()(BB) || "object" !== lB(BB)) return null;
        var VB = null;
        return Object.keys(BB).forEach((function(yB) {
          var pB = BB[yB];
          oB.includes(yB) && "function" === typeof pB && (VB || (VB = {}), VB[yB] = function(BB, TB, dB) {
            return function(VB) {
              return BB(TB, dB, VB), null
            }
          }(pB, TB, dB))
        })), VB
      }
  },
  4832: (BB, TB) => {
    var dB, VB = Symbol.for("react.element"),
      yB = Symbol.for("react.portal"),
      pB = Symbol.for("react.fragment"),
      lB = Symbol.for("react.strict_mode"),
      JB = Symbol.for("react.profiler"),
      YB = Symbol.for("react.provider"),
      gB = Symbol.for("react.context"),
      oB = Symbol.for("react.server_context"),
      kB = Symbol.for("react.forward_ref"),
      LB = Symbol.for("react.suspense"),
      OB = Symbol.for("react.suspense_list"),
      DB = Symbol.for("react.memo"),
      uB = Symbol.for("react.lazy"),
      HB = Symbol.for("react.offscreen");

    function EB(BB) {
      if ("object" === typeof BB && null !== BB) {
        var TB = BB.$$typeof;
        switch (TB) {
          case VB:
            switch (BB = BB.type) {
              case pB:
              case JB:
              case lB:
              case LB:
              case OB:
                return BB;
              default:
                switch (BB = BB && BB.$$typeof) {
                  case oB:
                  case gB:
                  case kB:
                  case uB:
                  case DB:
                  case YB:
                    return BB;
                  default:
                    return TB
                }
            }
          case yB:
            return TB
        }
      }
    }
    dB = Symbol.for("react.module.reference"), TB.isFragment = function(BB) {
      return EB(BB) === pB
    }
  },
  4827: (BB, TB, dB) => {
    BB.exports = dB(4832)
  },
  4486: (BB, TB, dB) => {
    function VB(BB) {
      var TB, dB, yB = "";
      if ("string" == typeof BB || "number" == typeof BB) yB += BB;
      else if ("object" == typeof BB)
        if (Array.isArray(BB)) {
          var pB = BB.length;
          for (TB = 0; TB < pB; TB++) BB[TB] && (dB = VB(BB[TB])) && (yB && (yB += " "), yB += dB)
        } else
          for (dB in BB) BB[dB] && (yB && (yB += " "), yB += dB);
      return yB
    }
    dB.d(TB, {
      e: () => yB
    });
    const yB = function() {
      for (var BB, TB, dB = 0, yB = "", pB = arguments.length; dB < pB; dB++)(BB = arguments[dB]) && (TB = VB(BB)) && (yB && (yB += " "), yB += TB);
      return yB
    }
  },
  5521: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => pB,
      f: () => JB
    });
    var VB = dB(5526),
      yB = dB(5532);

    function pB() {
      var BB, TB, dB = (0, yB.c)().unknown(void 0),
        lB = dB.domain,
        JB = dB.range,
        YB = 0,
        gB = 1,
        oB = !1,
        kB = 0,
        LB = 0,
        OB = .5;

      function DB() {
        var dB = lB().length,
          VB = gB < YB,
          yB = VB ? gB : YB,
          pB = VB ? YB : gB;
        BB = (pB - yB) / Math.max(1, dB - kB + 2 * LB), oB && (BB = Math.floor(BB)), yB += (pB - yB - BB * (dB - kB)) * OB, TB = BB * (1 - kB), oB && (yB = Math.round(yB), TB = Math.round(TB));
        var DB = function(BB, TB, dB) {
          BB = +BB, TB = +TB, dB = (yB = arguments.length) < 2 ? (TB = BB, BB = 0, 1) : yB < 3 ? 1 : +dB;
          for (var VB = -1, yB = 0 | Math.max(0, Math.ceil((TB - BB) / dB)), pB = new Array(yB); ++VB < yB;) pB[VB] = BB + VB * dB;
          return pB
        }(dB).map((function(TB) {
          return yB + BB * TB
        }));
        return JB(VB ? DB.reverse() : DB)
      }
      return delete dB.unknown, dB.domain = function(BB) {
        return arguments.length ? (lB(BB), DB()) : lB()
      }, dB.range = function(BB) {
        return arguments.length ? ([YB, gB] = BB, YB = +YB, gB = +gB, DB()) : [YB, gB]
      }, dB.rangeRound = function(BB) {
        return [YB, gB] = BB, YB = +YB, gB = +gB, oB = !0, DB()
      }, dB.bandwidth = function() {
        return TB
      }, dB.step = function() {
        return BB
      }, dB.round = function(BB) {
        return arguments.length ? (oB = !!BB, DB()) : oB
      }, dB.padding = function(BB) {
        return arguments.length ? (kB = Math.min(1, LB = +BB), DB()) : kB
      }, dB.paddingInner = function(BB) {
        return arguments.length ? (kB = Math.min(1, BB), DB()) : kB
      }, dB.paddingOuter = function(BB) {
        return arguments.length ? (LB = +BB, DB()) : LB
      }, dB.align = function(BB) {
        return arguments.length ? (OB = Math.max(0, Math.min(1, BB)), DB()) : OB
      }, dB.copy = function() {
        return pB(lB(), [YB, gB]).round(oB).paddingInner(kB).paddingOuter(LB).align(OB)
      }, VB.g.apply(DB(), arguments)
    }

    function lB(BB) {
      var TB = BB.copy;
      return BB.padding = BB.paddingOuter, delete BB.paddingInner, delete BB.paddingOuter, BB.copy = function() {
        return lB(TB())
      }, BB
    }

    function JB() {
      return lB(pB.apply(null, arguments).paddingInner(1))
    }
  },
  5526: (BB, TB, dB) => {
    function VB(BB, TB) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(BB);
          break;
        default:
          this.range(TB).domain(BB)
      }
      return this
    }

    function yB(BB, TB) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          "function" === typeof BB ? this.interpolator(BB) : this.range(BB);
          break;
        default:
          this.domain(BB), "function" === typeof TB ? this.interpolator(TB) : this.range(TB)
      }
      return this
    }
    dB.d(TB, {
      c: () => yB,
      g: () => VB
    })
  },
  5532: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => oB,
      f: () => gB
    });
    class VB extends Map {
      constructor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JB;
        if (super(), Object.defineProperties(this, {
            _intern: {
              value: new Map
            },
            _key: {
              value: TB
            }
          }), null != BB)
          for (const [dB, VB] of BB) this.set(dB, VB)
      }
      get(BB) {
        return super.get(yB(this, BB))
      }
      has(BB) {
        return super.has(yB(this, BB))
      }
      set(BB, TB) {
        return super.set(pB(this, BB), TB)
      }
      delete(BB) {
        return super.delete(lB(this, BB))
      }
    }
    Set;

    function yB(BB, TB) {
      let {
        _intern: dB,
        _key: VB
      } = BB;
      const yB = VB(TB);
      return dB.has(yB) ? dB.get(yB) : TB
    }

    function pB(BB, TB) {
      let {
        _intern: dB,
        _key: VB
      } = BB;
      const yB = VB(TB);
      return dB.has(yB) ? dB.get(yB) : (dB.set(yB, TB), TB)
    }

    function lB(BB, TB) {
      let {
        _intern: dB,
        _key: VB
      } = BB;
      const yB = VB(TB);
      return dB.has(yB) && (TB = dB.get(yB), dB.delete(yB)), TB
    }

    function JB(BB) {
      return null !== BB && "object" === typeof BB ? BB.valueOf() : BB
    }
    var YB = dB(5526);
    const gB = Symbol("implicit");

    function oB() {
      var BB = new VB,
        TB = [],
        dB = [],
        yB = gB;

      function pB(VB) {
        let pB = BB.get(VB);
        if (void 0 === pB) {
          if (yB !== gB) return yB;
          BB.set(VB, pB = TB.push(VB) - 1)
        }
        return dB[pB % dB.length]
      }
      return pB.domain = function(dB) {
        if (!arguments.length) return TB.slice();
        TB = [], BB = new VB;
        for (const VB of dB) BB.has(VB) || BB.set(VB, TB.push(VB) - 1);
        return pB
      }, pB.range = function(BB) {
        return arguments.length ? (dB = Array.from(BB), pB) : dB.slice()
      }, pB.unknown = function(BB) {
        return arguments.length ? (yB = BB, pB) : yB
      }, pB.copy = function() {
        return oB(TB, dB).unknown(yB)
      }, YB.g.apply(pB, arguments), pB
    }
  },
  5588: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => VB
    });
    Array.prototype.slice;

    function VB(BB) {
      return "object" === typeof BB && "length" in BB ? BB : Array.from(BB)
    }
  },
  5478: (BB, TB, dB) => {
    function VB(BB) {
      return function() {
        return BB
      }
    }
    dB.d(TB, {
      d: () => VB
    })
  },
  5481: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => gB
    });
    const VB = Math.PI,
      yB = 2 * VB,
      pB = 1e-6,
      lB = yB - pB;

    function JB(BB) {
      this._ += BB[0];
      for (let TB = 1, dB = BB.length; TB < dB; ++TB) this._ += arguments[TB] + BB[TB]
    }
    class YB {
      constructor(BB) {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == BB ? JB : function(BB) {
          let TB = Math.floor(BB);
          if (!(TB >= 0)) throw new Error(`invalid digits: ${BB}`);
          if (TB > 15) return JB;
          const dB = 10 ** TB;
          return function(BB) {
            this._ += BB[0];
            for (let TB = 1, VB = BB.length; TB < VB; ++TB) this._ += Math.round(arguments[TB] * dB) / dB + BB[TB]
          }
        }(BB)
      }
      moveTo(BB, TB) {
        this._append`M${this._x0=this._x1=+BB},${this._y0=this._y1=+TB}`
      }
      closePath() {
        null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`)
      }
      lineTo(BB, TB) {
        this._append`L${this._x1=+BB},${this._y1=+TB}`
      }
      quadraticCurveTo(BB, TB, dB, VB) {
        this._append`Q${+BB},${+TB},${this._x1=+dB},${this._y1=+VB}`
      }
      bezierCurveTo(BB, TB, dB, VB, yB, pB) {
        this._append`C${+BB},${+TB},${+dB},${+VB},${this._x1=+yB},${this._y1=+pB}`
      }
      arcTo(BB, TB, dB, yB, lB) {
        if (BB = +BB, TB = +TB, dB = +dB, yB = +yB, (lB = +lB) < 0) throw new Error(`negative radius: ${lB}`);
        let JB = this._x1,
          YB = this._y1,
          gB = dB - BB,
          oB = yB - TB,
          kB = JB - BB,
          LB = YB - TB,
          OB = kB * kB + LB * LB;
        if (null === this._x1) this._append`M${this._x1=BB},${this._y1=TB}`;
        else if (OB > pB)
          if (Math.abs(LB * gB - oB * kB) > pB && lB) {
            let DB = dB - JB,
              uB = yB - YB,
              HB = gB * gB + oB * oB,
              EB = DB * DB + uB * uB,
              vB = Math.sqrt(HB),
              mB = Math.sqrt(OB),
              iB = lB * Math.tan((VB - Math.acos((HB + OB - EB) / (2 * vB * mB))) / 2),
              NB = iB / mB,
              tB = iB / vB;
            Math.abs(NB - 1) > pB && this._append`L${BB+NB*kB},${TB+NB*LB}`, this._append`A${lB},${lB},0,0,${+(LB*DB>kB*uB)},${this._x1=BB+tB*gB},${this._y1=TB+tB*oB}`
          } else this._append`L${this._x1=BB},${this._y1=TB}`;
        else;
      }
      arc(BB, TB, dB, JB, YB, gB) {
        if (BB = +BB, TB = +TB, gB = !!gB, (dB = +dB) < 0) throw new Error(`negative radius: ${dB}`);
        let oB = dB * Math.cos(JB),
          kB = dB * Math.sin(JB),
          LB = BB + oB,
          OB = TB + kB,
          DB = 1 ^ gB,
          uB = gB ? JB - YB : YB - JB;
        null === this._x1 ? this._append`M${LB},${OB}` : (Math.abs(this._x1 - LB) > pB || Math.abs(this._y1 - OB) > pB) && this._append`L${LB},${OB}`, dB && (uB < 0 && (uB = uB % yB + yB), uB > lB ? this._append`A${dB},${dB},0,1,${DB},${BB-oB},${TB-kB}A${dB},${dB},0,1,${DB},${this._x1=LB},${this._y1=OB}` : uB > pB && this._append`A${dB},${dB},0,${+(uB>=VB)},${DB},${this._x1=BB+dB*Math.cos(YB)},${this._y1=TB+dB*Math.sin(YB)}`)
      }
      rect(BB, TB, dB, VB) {
        this._append`M${this._x0=this._x1=+BB},${this._y0=this._y1=+TB}h${dB=+dB}v${+VB}h${-dB}Z`
      }
      toString() {
        return this._
      }
    }

    function gB(BB) {
      let TB = 3;
      return BB.digits = function(dB) {
        if (!arguments.length) return TB;
        if (null == dB) TB = null;
        else {
          const BB = Math.floor(dB);
          if (!(BB >= 0)) throw new RangeError(`invalid digits: ${dB}`);
          TB = BB
        }
        return BB
      }, () => new YB(TB)
    }
    YB.prototype
  },
  5353: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => pB
    });
    var VB = !0,
      yB = "Invariant failed";

    function pB(BB, TB) {
      if (!BB) {
        if (VB) throw new Error(yB);
        var dB = "function" === typeof TB ? TB() : TB,
          pB = dB ? "".concat(yB, ": ").concat(dB) : yB;
        throw new Error(pB)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);